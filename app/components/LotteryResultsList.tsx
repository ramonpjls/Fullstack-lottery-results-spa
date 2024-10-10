'use client';
import { useFetchLotteryResults } from '../lib/hooks/useFetchData';
import LotteryResultCard from './LotteryResultCard';
import { useState } from 'react';
import Spinner from './ui/spinner';
import { DatePicker } from './ui/datepicker';

export default function LotteryResultsList() {
    const [date, setDate] = useState('');
    const { data, isLoading, error } = useFetchLotteryResults(date);

    if (isLoading) return <Spinner />;
    if (error) return (
        <div className="error-message">
            <span className="text-red-500 text-xl">Error fetching lottery results</span>
        </div>
    );

    return (
        <div>
            <div className="mb-4 flex gap-2">
                <DatePicker value={date} onChange={setDate} />
            </div>
            < div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {data?.map((result) => (
                    <LotteryResultCard key={result.id} result={result} />
                ))}
            </div>
        </div >
    );
}
