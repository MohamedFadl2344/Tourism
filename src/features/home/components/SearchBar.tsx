import { useTranslation } from 'react-i18next';
import { FaSearch, FaCalendarAlt } from 'react-icons/fa';

export default function SearchBar() {
    const { t } = useTranslation('home');

    return (
        <div className="w-full max-w-[800px] p-2 bg-[#1c2333]/60 backdrop-blur-lg border border-white/10 rounded-2xl shadow-2xl">
            <div className="flex flex-col md:flex-row w-full items-center gap-2">
                <div className="flex h-14 w-full flex-1 items-center gap-3 rounded-xl bg-[#101622] px-4 border border-white/5 focus-within:border-[#b45309]/50 transition-colors">
                    <FaSearch className="text-gray-400" />
                    <input
                        className="w-full bg-transparent border-none p-0 text-white placeholder:text-gray-500 focus:ring-0 text-base outline-none"
                        placeholder={t('hero.searchPlaceholder')}
                        type="text"
                    />
                </div>
                <div className="flex h-14 w-full md:w-auto md:min-w-[180px] items-center gap-3 rounded-xl bg-[#101622] px-4 border border-white/5 focus-within:border-[#b45309]/50 transition-colors">
                    <FaCalendarAlt className="text-gray-400" />
                    <input
                        className="w-full bg-transparent border-none p-0 text-white placeholder:text-gray-500 focus:ring-0 text-base outline-none"
                        placeholder={t('hero.datePlaceholder')}
                        type="date"
                    />
                </div>
                <button className="h-14 w-full md:w-auto min-w-[120px] rounded-xl bg-[#b45309] text-white font-bold text-base hover:bg-[#92400e] transition shadow-lg shadow-[#b45309]/25">
                    {t('hero.searchButton')}
                </button>
            </div>
        </div>
    );
}
