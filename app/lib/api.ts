import axios from "axios";
import { DrawItems, LotteryResult } from "./types";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJyYW1vbmRldiIsImlkIjo0LCJleHAiOjE3Mjg2NjE4OTEsImlhdCI6MTcyODU3NTQ5MX0.LLOpfVlSB0LWREhx4MqepbYFMjGeTzzIiJ4qxxmgKwQ";

const api = axios.create({
  baseURL: "/api/",
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export async function getLotteryResults(
  date?: string
): Promise<LotteryResult[]> {
  try {
    const response = await api.get("/winners", {
      params: date ? { date } : {},
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching lottery results:", error);
    throw error;
  }
}

export async function getLotteryNames(): Promise<DrawItems[]> {
  try {
    const response = await api.get("/draws");
    return response.data;
  } catch (error) {
    console.error("Error fetching lottery results:", error);
    throw error;
  }
}

export function getImageUrl(filename: string): string {
  return `/api/draw/img/${filename}`;
}
