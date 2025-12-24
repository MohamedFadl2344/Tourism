import { useTranslation } from 'react-i18next';
import heroImage from '../../../assets/img/hero/hero.webp';

export default function BlogHero() {
    const { t } = useTranslation('blog');

    return (
        <div
            className="relative bg-cover bg-center bg-no-repeat py-24 md:py-32"
            style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${heroImage})`
            }}
        >
            <div className="layout-container mx-auto max-w-[1200px] px-4 md:px-10">
                <div className="text-center">
                    {/* Badge */}
                    <span className="inline-block text-[#D4AF37] font-bold text-xs tracking-wider uppercase bg-[#D4AF37]/10 px-4 py-1.5 rounded-full border border-[#D4AF37]/20 mb-4">
                        {t('hero.badge')}
                    </span>

                    {/* Title */}
                    <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-black mb-4">
                        {t('hero.title')}
                    </h1>

                    {/* Subtitle */}
                    <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
                        {t('hero.subtitle')}
                    </p>
                </div>
            </div>
        </div>
    );
}
