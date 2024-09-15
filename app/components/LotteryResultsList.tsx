'use client';

import React, { useEffect, useState } from 'react';
import LotteryResultCard from './LotteryResultCard';
import { LotteryResult } from '../lib/types';

export default function LotteryResultsList() {
    const [results, setResults] = useState<LotteryResult[]>([]);

    useEffect(() => {
        const fetchResults = async () => {
            const response = await fetch('/api/lottery-results');
            const data = await response.json();
            setResults(data.results);
        };

        fetchResults();
        const intervalId = setInterval(fetchResults, 60 * 60 * 1000); // Actualizar cada hora

        return () => clearInterval(intervalId);
    }, []);


    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {results?.map((result) => (
                <LotteryResultCard key={result?.id} result={result} />
            ))}
        </div>
    );
}