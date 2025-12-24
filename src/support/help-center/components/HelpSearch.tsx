import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaSearch } from 'react-icons/fa';

export default function HelpSearch() {
    const { t } = useTranslation('helpcenter');
    const [searchQuery, setSearchQuery] = useState('');
    const [activeTab, setActiveTab] = useState('all');

    const tabs = ['all', 'booking', 'account', 'payment'];

    return (
        <div className="bg-[#0c0a09] pb-8">
            <div className="layout-container mx-auto max-w-[800px] px-4 md:px-10">
                {/* Search Bar */}
                <div className="relative mb-6">
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder={t('search.placeholder')}
                        className="w-full h-14 bg-[#1a1614] border border-white/10 rounded-xl px-5 pr-14 text-white text-sm placeholder:text-gray-600 focus:outline-none focus:border-[#D4AF37]/50 transition"
                    />
                    <button className="absolute left-3 top-1/2 -translate-y-1/2 h-10 px-5 rounded-lg bg-[#D4AF37] hover:bg-[#b8941f] text-black font-bold text-sm transition">
                        {t('search.button')}
                    </button>
                    <FaSearch className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-500 text-lg" />
                </div>

                {/* Tabs */}
                <div className="flex items-center gap-2 justify-center flex-wrap">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-5 py-2 rounded-lg text-sm font-bold transition ${activeTab === tab
                                    ? 'bg-[#D4AF37] text-black'
                                    : 'bg-[#1a1614] text-gray-400 hover:text-white border border-white/10'
                                }`}
                        >
                            {t(`search.tabs.${tab}`)}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}
