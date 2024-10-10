import React, { useRef } from 'react';
import { Input } from './input';
import { Calendar } from 'lucide-react';

const DatePicker = ({ value, onChange }: { value: string; onChange: (date: string) => void }) => {
    const dateInputRef = useRef<HTMLInputElement>(null);

    const handleDateClick = () => {
        dateInputRef.current?.showPicker();
    };

    return (
        <div className="flex items-center gap-2  border-2 rounded-xl border-white px-4 py-2 w-fit" onClick={handleDateClick}>
            <Calendar />
            <Input
                type="date"
                ref={dateInputRef}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className='border-black text-lg w-fit'
            />
        </div>
    );
};

export { DatePicker };