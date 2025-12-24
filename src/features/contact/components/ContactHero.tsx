import { useTranslation } from 'react-i18next';

export default function ContactHero() {
    const { t } = useTranslation('contact');

    return (
        <div className="relative h-[400px] w-full overflow-hidden flex flex-col items-center justify-center bg-[#101622]">
            {/* Background Image */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `url('/images/contactimg/hero.webp')`,
                }}
            />

            {/* Overlays */}
            <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#101622] via-[#101622]/70 to-transparent" />
            <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#101622]/40 to-transparent" />

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center gap-4 px-4 text-center max-w-4xl mx-auto">
                {/* Badge */}
                <span className="text-[#D4AF37] font-bold text-xs tracking-wider uppercase bg-[#D4AF37]/10 px-4 py-1.5 rounded-full border border-[#D4AF37]/20">
                    {t('hero.badge')}
                </span>

                {/* Main Heading */}
                <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight">
                    {t('hero.title')} <span className="text-[#D4AF37]">{t('hero.titleHighlight')}</span>
                </h1>

                {/* Subheading */}
                <p className="text-white/90 text-base md:text-lg font-medium max-w-2xl mx-auto leading-relaxed">
                    {t('hero.subtitle')}
                </p>
            </div>
        </div>
    );
}
