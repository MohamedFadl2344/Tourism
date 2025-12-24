import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaSearch } from 'react-icons/fa';

export default function BlogFilters() {
    const { t } = useTranslation('blog');
    const [activeCategory, setActiveCategory] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');

    const categories = ['all', 'destinations', 'culture', 'tips', 'adventures'];

    return (
        <div className="bg-[#0c0a09] py-8">
            <div className="layout-container mx-auto max-w-[1200px] px-4 md:px-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    {/* Search */}
                    <div className="relative w-full md:w-96">
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder={t('filters.searchPlaceholder')}
                            className="w-full h-12 bg-[#1a1614] border border-white/10 rounded-xl px-4 pr-12 text-white text-sm placeholder:text-gray-600 focus:outline-none focus:border-[#D4AF37]/50 transition"
                        />
                        <FaSearch className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500" />
                    </div>

                    {/* Categories */}
                    <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`px-5 py-2.5 rounded-xl text-sm font-bold whitespace-nowrap transition ${activeCategory === category
                                        ? 'bg-[#D4AF37] text-black'
                                        : 'bg-[#1a1614] text-gray-400 hover:text-white border border-white/10'
                                    }`}
                            >
                                {t(`filters.categories.${category}`)}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
