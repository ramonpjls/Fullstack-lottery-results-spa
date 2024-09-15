export interface LotteryResult {
  id: number;
  company: string;
  game_name: string;
  date: Date;
  winning_numbers: string[];
  createdAt: Date;
  updatedAt: Date;
}
