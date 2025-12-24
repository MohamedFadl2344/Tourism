import { useTranslation } from 'react-i18next';

export default function CultureCTA() {
    const { t } = useTranslation('culture');

    return (
        <div className="py-16 bg-[#1c1917]">
            <div className="layout-container mx-auto max-w-[1200px] px-4 md:px-10">
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#b45309] to-amber-900 px-8 py-12 md:px-12 md:py-16 shadow-2xl shadow-orange-900/20 border border-white/10">
                    {/* Background Decorations */}
                    <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                        <div className="absolute -top-[100px] -left-[100px] w-96 h-96 bg-white/10 rounded-full blur-[80px] mix-blend-overlay" />
                        <div className="absolute bottom-0 right-0 w-full h-64 bg-gradient-to-t from-black/50 to-transparent" />
                    </div>

                    {/* Content */}
                    <div className="relative z-10 text-center max-w-3xl mx-auto">
                        <h2 className="text-white text-3xl md:text-4xl font-black mb-4">
                            {t('cta.title')} <span className="text-black">{t('cta.titleHighlight')}</span> {t('cta.titleEnd')}
                        </h2>
                        <p className="text-orange-50 text-base md:text-lg font-medium mb-8 leading-relaxed">
                            {t('cta.description')}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="h-12 px-8 rounded-lg bg-white text-[#b45309] hover:bg-gray-100 font-bold text-sm transition shadow-lg">
                                {t('cta.bookNow')}
                            </button>
                            <button className="h-12 px-8 rounded-lg border-2 border-white text-white hover:bg-white hover:text-[#b45309] font-bold text-sm transition">
                                {t('cta.learnMore')}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
