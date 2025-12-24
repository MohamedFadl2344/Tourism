import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

interface FaqItemProps {
    question: string;
    answer: string;
    number: number;
    isFirst?: boolean;
}

export default function FaqItem({ question, answer, number, isFirst = false }: FaqItemProps) {
    const [isOpen, setIsOpen] = useState(isFirst);

    return (
        <div className="bg-[#1a1614] rounded-xl border border-white/5 overflow-hidden">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between p-5 md:p-6 text-right hover:bg-white/5 transition"
            >
                <div className="flex items-center gap-3 flex-1">
                    <span className="size-8 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] font-bold text-sm flex-shrink-0">
                        {number}
                    </span>
                    <h3 className="text-white font-bold text-base md:text-lg">
                        {question}
                    </h3>
                </div>
                <div className="text-[#D4AF37] text-lg flex-shrink-0 mr-3">
                    {isOpen ? <FaChevronUp /> : <FaChevronDown />}
                </div>
            </button>

            {isOpen && (
                <div className="px-5 md:px-6 pb-5 md:pb-6 pt-2">
                    <p className="text-gray-400 text-sm leading-relaxed pr-11">
                        {answer}
                    </p>
                </div>
            )}
        </div>
    );
}
