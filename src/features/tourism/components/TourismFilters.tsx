import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaChevronDown, FaSearch } from 'react-icons/fa';

export default function TourismFilters() {
    const { t } = useTranslation('tourism');
    const [tripType, setTripType] = useState('');
    const [budget, setBudget] = useState('');
    const [people, setPeople] = useState('');
    const [accommodation, setAccommodation] = useState('');

    return (
        <div className="bg-[#1c1917] border-y border-white/10 py-6">
            <div className="layout-container mx-auto max-w-[1200px] px-4 md:px-10">
                <div className="bg-[#292524] rounded-2xl p-4 border border-white/10">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        {/* Trip Type */}
                        <div className="relative">
                            <label className="text-gray-400 text-xs mb-2 block">{t('filters.tripType.label')}</label>
                            <div className="relative">
                                <select
                                    value={tripType}
                                    onChange={(e) => setTripType(e.target.value)}
                                    className="w-full h-12 bg-[#1c1917] border border-white/10 rounded-lg px-4 text-white text-sm appearance-none cursor-pointer focus:outline-none focus:border-[#b45309]/50 transition"
                                >
                                    <option value="">{t('filters.tripType.placeholder')}</option>
                                    <option value="adventure">{t('filters.tripType.options.adventure')}</option>
                                    <option value="cultural">{t('filters.tripType.options.cultural')}</option>
                                    <option value="relaxation">{t('filters.tripType.options.relaxation')}</option>
                                    <option value="family">{t('filters.tripType.options.family')}</option>
                                </select>
                                <FaChevronDown className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                            </div>
                        </div>

                        {/* Budget */}
                        <div className="relative">
                            <label className="text-gray-400 text-xs mb-2 block">{t('filters.budget.label')}</label>
                            <div className="relative">
                                <select
                                    value={budget}
                                    onChange={(e) => setBudget(e.target.value)}
                                    className="w-full h-12 bg-[#1c1917] border border-white/10 rounded-lg px-4 text-white text-sm appearance-none cursor-pointer focus:outline-none focus:border-[#b45309]/50 transition"
                                >
                                    <option value="">{t('filters.budget.placeholder')}</option>
                                    <option value="low">{t('filters.budget.options.low')}</option>
                                    <option value="medium">{t('filters.budget.options.medium')}</option>
                                    <option value="high">{t('filters.budget.options.high')}</option>
                                </select>
                                <FaChevronDown className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                            </div>
                        </div>

                        {/* Number of People */}
                        <div className="relative">
                            <label className="text-gray-400 text-xs mb-2 block">{t('filters.people.label')}</label>
                            <div className="relative">
                                <select
                                    value={people}
                                    onChange={(e) => setPeople(e.target.value)}
                                    className="w-full h-12 bg-[#1c1917] border border-white/10 rounded-lg px-4 text-white text-sm appearance-none cursor-pointer focus:outline-none focus:border-[#b45309]/50 transition"
                                >
                                    <option value="">{t('filters.people.placeholder')}</option>
                                    <option value="1">{t('filters.people.options.one')}</option>
                                    <option value="2">{t('filters.people.options.two')}</option>
                                    <option value="3-5">{t('filters.people.options.group')}</option>
                                    <option value="6+">{t('filters.people.options.large')}</option>
                                </select>
                                <FaChevronDown className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                            </div>
                        </div>

                        {/* Accommodation Type */}
                        <div className="relative">
                            <label className="text-gray-400 text-xs mb-2 block">{t('filters.accommodation.label')}</label>
                            <div className="relative">
                                <select
                                    value={accommodation}
                                    onChange={(e) => setAccommodation(e.target.value)}
                                    className="w-full h-12 bg-[#1c1917] border border-white/10 rounded-lg px-4 text-white text-sm appearance-none cursor-pointer focus:outline-none focus:border-[#b45309]/50 transition"
                                >
                                    <option value="">{t('filters.accommodation.placeholder')}</option>
                                    <option value="hotel">{t('filters.accommodation.options.hotel')}</option>
                                    <option value="resort">{t('filters.accommodation.options.resort')}</option>
                                    <option value="apartment">{t('filters.accommodation.options.apartment')}</option>
                                    <option value="camp">{t('filters.accommodation.options.camp')}</option>
                                </select>
                                <FaChevronDown className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                            </div>
                        </div>
                    </div>

                    {/* Search Button */}
                    <div className="mt-4 flex justify-center">
                        <button className="h-12 px-8 rounded-lg bg-[#b45309] hover:bg-[#92400e] text-white font-bold text-sm transition shadow-lg shadow-[#b45309]/25 flex items-center gap-2">
                            <FaSearch />
                            <span>{t('filters.searchButton')}</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
