import React from 'react';
import { LotteryResult } from '../lib/types';

interface LotteryResultCardProps {
    result: LotteryResult;
}

export default function LotteryResultCard({ result }: LotteryResultCardProps) {

    const fecha = new Date(result?.date);

    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-4">
                <h2 className="text-xl font-bold text-white">{result.company}</h2>
                <p className="text-sm text-white opacity-75">{result.game_name}</p>
            </div>
            <div className="p-4">
                <p className="text-sm text-gray-600 mb-2 font-semibold">Fecha: {fecha.toLocaleDateString()}</p>
                <div className="flex flex-wrap gap-2">
                    {result.winning_numbers.map((number, index) => (
                        <span key={index} className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                            {number}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}