import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface LanguageStore {
    language: 'ar' | 'en';
    setLanguage: (lang: 'ar' | 'en') => void;
    toggleLanguage: () => void;
}

export const useLanguageStore = create<LanguageStore>()(
    persist(
        (set) => ({
            language: 'ar',
            setLanguage: (lang) => set({ language: lang }),
            toggleLanguage: () =>
                set((state) => ({
                    language: state.language === 'ar' ? 'en' : 'ar',
                })),
        }),
        {
            name: 'language-storage',
        }
    )
);
