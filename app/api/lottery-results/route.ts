import { getLotteryResults } from "@/app/services/lotteryService";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const results = await getLotteryResults();
    return NextResponse.json({ results });
  } catch (error) {
    console.error("Error fetching lottery results:", error);
    return NextResponse.json({ error }, { status: 500 });
  }
}
