import { getLotteryResults } from "../app/services/lotteryService";

async function updateLotteryResults() {
  try {
    await getLotteryResults();
    console.log("Lottery results updated successfully");
  } catch (error) {
    console.error("Error updating lottery results:", error);
  }
}

// Ejecutar la actualización
updateLotteryResults();
