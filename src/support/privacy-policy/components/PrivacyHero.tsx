import { useTranslation } from 'react-i18next';

export default function PrivacyHero() {
    const { t } = useTranslation('privacy');

    return (
        <div className="relative bg-[#0c0a09] py-16 md:py-20">
            <div className="layout-container mx-auto max-w-[1200px] px-4 md:px-10">
                <div className="text-center">
                    {/* Badge */}
                    <span className="inline-block text-[#D4AF37] font-bold text-xs tracking-wider uppercase bg-[#D4AF37]/10 px-4 py-1.5 rounded-full border border-[#D4AF37]/20 mb-4">
                        {t('hero.badge')}
                    </span>

                    {/* Title */}
                    <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-black mb-4">
                        {t('hero.title')}
                    </h1>

                    {/* Subtitle */}
                    <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
                        {t('hero.subtitle')}
                    </p>
                </div>
            </div>
        </div>
    );
}
