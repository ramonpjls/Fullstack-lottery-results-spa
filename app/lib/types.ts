export interface LotteryResult {
  id: string;
  date: Date;
  create_at: string;
  n1: number;
  n2: number;
  n3: number;
  draw: {
    id: number;
    description: string;
    shift: {
      description: string;
      id: number;
    };
    lottery: {
      description: string;
      id: number;
    };
    image: {
      draw_id: number;
      filename: string;
      id: number;
    };
  };
}

export interface DrawItems {
  id: number;
  description: string;
  type: {
    description: string;
    id: number;
  };
  shift: {
    description: string;
    id: number;
  };
  lottery: {
    description: string;
    id: number;
  };
  image: {
    draw_id: number;
    filename: string;
    id: number;
  };
  schedules: {
    day_of_week: number;
    draw_time: string; // Considerar usar una librería para manejar fechas y horas
  }[];
}
