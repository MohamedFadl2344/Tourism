import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import i18n from './index';

interface LanguageStore {
    language: 'ar' | 'en';
    setLanguage: (lang: 'ar' | 'en') => void;
    toggleLanguage: () => void;
}

export const useLanguageStore = create<LanguageStore>()(
    persist(
        (set) => ({
            language: 'ar',
            setLanguage: (lang) => {
                set({ language: lang });
                // مزامنة مع i18n
                i18n.changeLanguage(lang);
                // تحديث اتجاه الصفحة
                document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
                document.documentElement.lang = lang;
            },
            toggleLanguage: () =>
                set((state) => {
                    const newLang = state.language === 'ar' ? 'en' : 'ar';
                    // مزامنة مع i18n
                    i18n.changeLanguage(newLang);
                    // تحديث اتجاه الصفحة
                    document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';
                    document.documentElement.lang = newLang;
                    return { language: newLang };
                }),
        }),
        {
            name: 'language-storage',
        }
    )
);
