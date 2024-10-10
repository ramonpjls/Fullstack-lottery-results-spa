import React from 'react';
import { LotteryResult } from '../lib/types';
import { getImageUrl } from '../lib/api';
import Image from 'next/image';
import { Star } from 'lucide-react';

interface LotteryResultCardProps {
    result: LotteryResult;
    isFavorite?: boolean;
    onToggleFavorite?: () => void;
}


export default function LotteryResultCard({ result, isFavorite, onToggleFavorite }: LotteryResultCardProps) {

    return (
        <div className="w-full max-w-xl mx-auto bg-white shadow-lg hover:shadow-xl rounded-lg transition-shadow duration-300 ease-in-out">

            <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-t-lg">
                <div className="flex items-center justify-between">
                    <div className='py-4 px-6 flex flex-col w-full'>
                        <div className='flex justify-between w-full flex-row'>
                            <span className="text-xl font-bold">{result.draw.lottery.description}</span>
                            <button
                                title='set as favorite'
                                onClick={onToggleFavorite}
                                className="w-[25px] h-[25px] text-4xl hidden"
                            >
                                <Star className={isFavorite ? "fill-yellow-400 text-yellow-400" : "text-gray-400"} />
                            </button>
                        </div>
                        <span className="text-sm opacity-80">{result.draw.description} - {result.draw.shift.description}</span>
                    </div>
                    <Image
                        src={getImageUrl(result.draw.image.filename)}
                        alt={result.draw.description}
                        width={100}
                        height={100}
                        className='mr-2'
                    />
                </div>
            </div>
            <div className="h-[120px]">
                <p className="text-sm text-gray-600 mx-2 font-extralight text-right">Fecha: {result.date.toLocaleString()}</p>
                <div className="flex justify-center gap-4 py-4">
                    {[result.n1, result.n2, result.n3].map((number, index) => (
                        <div
                            key={index}
                            className="text-2xl py-2 px-4 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 border-2 border-purple-300 text-purple-700"
                        >
                            {number}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}