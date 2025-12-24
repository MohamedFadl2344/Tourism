import { useTranslation } from 'react-i18next';
import { useLanguageStore } from '../../../i18n/languageStore';
import { useEffect } from 'react';

interface LanguageSwitcherProps {
    className?: string;
    isMobile?: boolean;
}

export default function LanguageSwitcher({ className = '', isMobile = false }: LanguageSwitcherProps) {
    const { i18n } = useTranslation();
    const { language, toggleLanguage } = useLanguageStore();

    // Sync i18n with zustand store
    useEffect(() => {
        i18n.changeLanguage(language);
        document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
        document.documentElement.lang = language;
    }, [language, i18n]);

    const handleToggle = () => {
        toggleLanguage();
    };

    const baseClasses = isMobile
        ? 'w-full flex items-center justify-center gap-2 h-12 rounded-lg bg-white/5 text-sm font-bold text-white transition hover:bg-white/10'
        : 'hidden md:flex h-10 items-center justify-center gap-2 rounded-lg bg-white/5 px-4 text-sm font-bold text-white transition hover:bg-white/10';

    return (
        <button
            onClick={handleToggle}
            className={`${baseClasses} ${className}`}
        >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
            </svg>
            <span>{language === 'ar' ? 'EN' : 'AR'}</span>
        </button>
    );
}
