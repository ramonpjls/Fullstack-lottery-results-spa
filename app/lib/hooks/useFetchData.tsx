import { useQuery } from '@tanstack/react-query';
import { getLotteryNames, getLotteryResults } from '../api';
import { DrawItems, LotteryResult } from '../types';


export function useFetchLotteryResults(date?: string) {
    return useQuery<LotteryResult[]>({
        queryKey: ['lotteryResults', date], // Clave de consulta con la fecha
        queryFn: () => getLotteryResults(date), // Llama a la función para obtener resultados
        staleTime: 5 * 60 * 1000, // Tiempo de frescura de los datos (5 minutos)
        //cacheTime: 10 * 60 * 1000, // Tiempo en cache de los datos (10 minutos)
        refetchOnWindowFocus: false, // No volver a hacer fetch cuando se enfoque la ventana
    });
}

export function useFetchDrawResults() {
    return useQuery<DrawItems[]>({
        queryKey: ['drawNames'], // Clave de consulta con la fecha
        queryFn: () => getLotteryNames(), // Llama a la función para obtener resultados
        staleTime: 5 * 60 * 1000, // Tiempo de frescura de los datos (5 minutos)
        //cacheTime: 10 * 60 * 1000, // Tiempo en cache de los datos (10 minutos)
        refetchOnWindowFocus: false, // No volver a hacer fetch cuando se enfoque la ventana
    });
}
