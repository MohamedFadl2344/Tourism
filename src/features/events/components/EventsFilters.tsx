import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaSearch, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';

export default function EventsFilters() {
    const { t } = useTranslation('events');
    const [searchQuery, setSearchQuery] = useState('');
    const [location, setLocation] = useState('');
    const [date, setDate] = useState('');

    return (
        <div className="relative -mt-16 z-20">
            <div className="layout-container mx-auto max-w-[1000px] px-4 md:px-10">
                <div className="bg-[#1e293b]/95 backdrop-blur-xl rounded-2xl p-4 border border-white/10 shadow-2xl">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-end">
                        {/* Search Input - Takes more space */}
                        <div className="md:col-span-5">
                            <label className="text-gray-400 text-xs mb-2 block">{t('filters.search.label')}</label>
                            <div className="relative">
                                <input
                                    type="text"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    placeholder={t('filters.search.placeholder')}
                                    className="w-full h-12 bg-[#0f172a] border border-white/10 rounded-lg px-4 pr-11 text-white text-sm placeholder:text-gray-500 focus:outline-none focus:border-[#b45309]/50 transition"
                                />
                                <FaSearch className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" />
                            </div>
                        </div>

                        {/* Location */}
                        <div className="md:col-span-3">
                            <label className="text-gray-400 text-xs mb-2 block">{t('filters.location.label')}</label>
                            <div className="relative">
                                <select
                                    value={location}
                                    onChange={(e) => setLocation(e.target.value)}
                                    className="w-full h-12 bg-[#0f172a] border border-white/10 rounded-lg px-4 pr-11 text-white text-sm appearance-none cursor-pointer focus:outline-none focus:border-[#b45309]/50 transition"
                                >
                                    <option value="">{t('filters.location.placeholder')}</option>
                                    <option value="riyadh">{t('filters.location.options.riyadh')}</option>
                                    <option value="dubai">{t('filters.location.options.dubai')}</option>
                                    <option value="doha">{t('filters.location.options.doha')}</option>
                                    <option value="muscat">{t('filters.location.options.muscat')}</option>
                                </select>
                                <FaMapMarkerAlt className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                            </div>
                        </div>

                        {/* Date */}
                        <div className="md:col-span-3">
                            <label className="text-gray-400 text-xs mb-2 block">{t('filters.date.label')}</label>
                            <div className="relative">
                                <select
                                    value={date}
                                    onChange={(e) => setDate(e.target.value)}
                                    className="w-full h-12 bg-[#0f172a] border border-white/10 rounded-lg px-4 pr-11 text-white text-sm appearance-none cursor-pointer focus:outline-none focus:border-[#b45309]/50 transition"
                                >
                                    <option value="">{t('filters.date.placeholder')}</option>
                                    <option value="today">{t('filters.date.options.today')}</option>
                                    <option value="week">{t('filters.date.options.week')}</option>
                                    <option value="month">{t('filters.date.options.month')}</option>
                                    <option value="upcoming">{t('filters.date.options.upcoming')}</option>
                                </select>
                                <FaCalendarAlt className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                            </div>
                        </div>

                        {/* Search Button */}
                        <div className="md:col-span-1">
                            <button className="w-full h-12 rounded-lg bg-[#b45309] hover:bg-[#92400e] text-white font-bold text-sm transition shadow-lg shadow-[#b45309]/25 flex items-center justify-center">
                                {t('filters.searchButton')}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
