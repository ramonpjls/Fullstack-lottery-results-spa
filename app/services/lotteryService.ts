import axios from "axios";
import * as cheerio from "cheerio";
import prisma from "../lib/prisma";
import { LotteryResult } from "../lib/types";

function parseDate(dateStr: string): Date {
  // Asumiendo que dateStr está en formato "dd-mm" (por ejemplo, "12-09")
  const [day, month] = dateStr.split("-").map(Number);
  const year = new Date().getFullYear(); // Usamos el año actual
  const date = new Date(year, month - 1, day); // month es 0-indexed en JavaScript

  // Verificar si la fecha es válida
  if (isNaN(date.getTime())) {
    console.error(`Fecha inválida: ${dateStr}`);
    return new Date(); // Retorna la fecha actual si la fecha es inválida
  }

  return date;
}

export async function getLotteryResults(): Promise<LotteryResult[]> {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const cachedResults = await prisma.lotteryResult.findMany({
    where: {
      date: {
        gte: today,
      },
    },
  });

  if (cachedResults.length > 0) {
    return cachedResults;
  }

  const url = "https://www.conectate.com.do/loterias/";
  const response = await axios.get(url);
  const $ = cheerio.load(response.data);

  const results: Omit<LotteryResult, "id" | "createdAt" | "updatedAt">[] = [];
  let currentCompany = "";

  $(".company-block, .game-block").each((index, element) => {
    const $element = $(element);

    if ($element.hasClass("company-block")) {
      currentCompany = $element.find(".company-title a").text().trim();
    } else if ($element.hasClass("game-block")) {
      const gameName = $element.find(".game-title span").text().trim();
      const dateStr = $element.find(".session-date").text().trim();
      const date = parseDate(dateStr);

      const winningNumbers = $element
        .find(".game-scores .score")
        .map((i, num) => $(num).text().trim())
        .get();

      results.push({
        company: currentCompany,
        game_name: gameName,
        date,
        winning_numbers: winningNumbers,
      });
    }
  });

  // Guardamos los resultados en la base de datos
  for (const result of results) {
    await prisma.lotteryResult.create({
      data: result,
    });
  }

  return prisma.lotteryResult.findMany({
    where: {
      date: {
        gte: today,
      },
    },
  });
}
