import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaCalendarAlt, FaMinus, FaPlus } from 'react-icons/fa';

export default function TripDetails() {
    const { t } = useTranslation('tripPlanning');
    const [travelers, setTravelers] = useState(2);
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    return (
        <div className="bg-[#1e293b] rounded-2xl p-6 border border-white/10">
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h3 className="text-white text-lg font-bold mb-1">{t('tripDetails.title')}</h3>
                    <p className="text-gray-400 text-sm">{t('tripDetails.subtitle')}</p>
                </div>
                <div className="bg-[#D4AF37] text-black size-8 rounded-full flex items-center justify-center font-bold text-sm">
                    {t('tripDetails.step')}
                </div>
            </div>

            <div className="space-y-4">
                {/* Dates Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Start Date */}
                    <div>
                        <label className="text-gray-400 text-xs mb-2 block">{t('tripDetails.startDate.label')}</label>
                        <div className="relative">
                            <input
                                type="text"
                                value={startDate}
                                onChange={(e) => setStartDate(e.target.value)}
                                placeholder={t('tripDetails.startDate.placeholder')}
                                className="w-full h-12 bg-[#0f172a] border border-white/10 rounded-lg px-4 pl-11 text-white text-sm placeholder:text-gray-600 focus:outline-none focus:border-[#b45309]/50 transition"
                            />
                            <FaCalendarAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-[#D4AF37]" />
                        </div>
                    </div>

                    {/* End Date */}
                    <div>
                        <label className="text-gray-400 text-xs mb-2 block">{t('tripDetails.endDate.label')}</label>
                        <div className="relative">
                            <input
                                type="text"
                                value={endDate}
                                onChange={(e) => setEndDate(e.target.value)}
                                placeholder={t('tripDetails.endDate.placeholder')}
                                className="w-full h-12 bg-[#0f172a] border border-white/10 rounded-lg px-4 pl-11 text-white text-sm placeholder:text-gray-600 focus:outline-none focus:border-[#b45309]/50 transition"
                            />
                            <FaCalendarAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-[#D4AF37]" />
                        </div>
                    </div>
                </div>

                {/* Travelers Count */}
                <div>
                    <label className="text-gray-400 text-xs mb-2 block">{t('tripDetails.travelers.label')}</label>
                    <div className="flex items-center justify-between bg-[#0f172a] border border-white/10 rounded-lg px-4 h-12">
                        <button
                            onClick={() => setTravelers(Math.max(1, travelers - 1))}
                            className="size-8 rounded-lg bg-[#D4AF37] hover:bg-[#b8941f] text-black transition flex items-center justify-center font-bold"
                        >
                            <FaMinus className="text-sm" />
                        </button>
                        <div className="text-center">
                            <span className="text-white text-lg font-bold">{travelers}</span>
                        </div>
                        <button
                            onClick={() => setTravelers(travelers + 1)}
                            className="size-8 rounded-lg bg-[#D4AF37] hover:bg-[#b8941f] text-black transition flex items-center justify-center font-bold"
                        >
                            <FaPlus className="text-sm" />
                        </button>
                    </div>
                    <p className="text-gray-500 text-xs mt-2">{t('tripDetails.travelers.note')}</p>
                </div>
            </div>
        </div>
    );
}
