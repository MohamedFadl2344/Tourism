import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaSearch } from 'react-icons/fa';

export default function FaqSearch() {
    const { t } = useTranslation('faq');
    const [searchQuery, setSearchQuery] = useState('');

    return (
        <div className="bg-[#0c0a09] py-8">
            <div className="layout-container mx-auto max-w-[800px] px-4 md:px-10">
                <div className="relative">
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder={t('search.placeholder')}
                        className="w-full h-14 bg-[#1a1614] border border-white/10 rounded-xl px-5 pr-14 text-white text-sm placeholder:text-gray-600 focus:outline-none focus:border-[#D4AF37]/50 transition"
                    />
                    <FaSearch className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-500 text-lg" />
                </div>
            </div>
        </div>
    );
}
