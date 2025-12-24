import { useTranslation } from 'react-i18next';
import { FaMapMarkerAlt, FaClock, FaUsers } from 'react-icons/fa';

export default function FeaturedSite() {
    const { t } = useTranslation('culture');

    return (
        <div className="py-16 bg-[#0c0a09]">
            <div className="layout-container mx-auto max-w-[1200px] px-4 md:px-10">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <span className="text-[#D4AF37] font-bold text-sm tracking-wider uppercase block mb-2">
                        {t('featuredSite.badge')}
                    </span>
                    <h2 className="text-white text-3xl md:text-4xl font-bold">
                        {t('featuredSite.title')} <span className="text-[#D4AF37]">{t('featuredSite.titleHighlight')}</span>
                    </h2>
                </div>

                {/* Featured Content */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    {/* Image */}
                    <div className="relative h-[400px] rounded-2xl overflow-hidden group">
                        <div
                            className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition duration-700"
                            style={{ backgroundImage: `url('/src/assets/img/CultureHeritage/img1.webp')` }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <div className="absolute bottom-6 right-6 bg-[#D4AF37] text-black px-4 py-2 rounded-lg font-bold text-sm">
                            {t('featuredSite.badge2')}
                        </div>
                    </div>

                    {/* Content */}
                    <div className="flex flex-col gap-6">
                        <div>
                            <h3 className="text-white text-2xl md:text-3xl font-bold mb-4">
                                {t('featuredSite.siteName')}
                            </h3>
                            <p className="text-gray-400 leading-relaxed mb-6">
                                {t('featuredSite.description')}
                            </p>
                        </div>

                        {/* Info Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="flex items-center gap-3 bg-[#292524] border border-white/5 rounded-lg p-4">
                                <div className="size-10 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center">
                                    <FaMapMarkerAlt className="text-[#D4AF37]" />
                                </div>
                                <div>
                                    <p className="text-gray-500 text-xs">{t('featuredSite.info.location.label')}</p>
                                    <p className="text-white text-sm font-bold">{t('featuredSite.info.location.value')}</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3 bg-[#292524] border border-white/5 rounded-lg p-4">
                                <div className="size-10 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center">
                                    <FaClock className="text-[#D4AF37]" />
                                </div>
                                <div>
                                    <p className="text-gray-500 text-xs">{t('featuredSite.info.duration.label')}</p>
                                    <p className="text-white text-sm font-bold">{t('featuredSite.info.duration.value')}</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3 bg-[#292524] border border-white/5 rounded-lg p-4">
                                <div className="size-10 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center">
                                    <FaUsers className="text-[#D4AF37]" />
                                </div>
                                <div>
                                    <p className="text-gray-500 text-xs">{t('featuredSite.info.suitableFor.label')}</p>
                                    <p className="text-white text-sm font-bold">{t('featuredSite.info.suitableFor.value')}</p>
                                </div>
                            </div>
                        </div>

                        {/* CTA Button */}
                        <button className="h-12 px-8 rounded-lg bg-[#b45309] hover:bg-[#92400e] text-white font-bold text-sm transition shadow-lg shadow-[#b45309]/25 w-fit">
                            {t('featuredSite.cta')}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
