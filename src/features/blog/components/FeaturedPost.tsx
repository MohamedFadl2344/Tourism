import { useTranslation } from 'react-i18next';
import { FaCalendar, FaArrowLeft } from 'react-icons/fa';

export default function FeaturedPost() {
    const { t } = useTranslation('blog');

    return (
        <div className="bg-[#0c0a09] py-12">
            <div className="layout-container mx-auto max-w-[1200px] px-4 md:px-10">
                <div className="bg-gradient-to-r from-[#1a1614] to-[#2a2420] rounded-3xl overflow-hidden border border-white/5 shadow-2xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        {/* Content */}
                        <div className="p-8 md:p-12 flex flex-col justify-center">
                            {/* Date & Category */}
                            <div className="flex items-center gap-4 mb-4">
                                <span className="text-[#D4AF37] text-xs font-bold bg-[#D4AF37]/10 px-3 py-1 rounded-full border border-[#D4AF37]/20">
                                    {t('featured.badge')}
                                </span>
                                <div className="flex items-center gap-2 text-gray-400 text-xs">
                                    <FaCalendar className="text-[#D4AF37]" />
                                    <span>{t('featured.date')}</span>
                                </div>
                            </div>

                            {/* Title */}
                            <h2 className="text-white text-2xl md:text-3xl font-black mb-4 leading-tight">
                                {t('featured.title')}
                            </h2>

                            {/* Description */}
                            <p className="text-gray-400 text-sm leading-relaxed mb-6">
                                {t('featured.excerpt')}
                            </p>

                            {/* Author & Read More */}
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="size-10 rounded-full bg-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37] font-bold text-sm">
                                        {t('featured.author.initials')}
                                    </div>
                                    <div>
                                        <p className="text-white text-sm font-bold">{t('featured.author.name')}</p>
                                        <p className="text-gray-500 text-xs">{t('featured.author.role')}</p>
                                    </div>
                                </div>

                                <button className="flex items-center gap-2 text-[#D4AF37] hover:text-[#b8941f] font-bold text-sm transition group">
                                    <span>{t('featured.readMore')}</span>
                                    <FaArrowLeft className="group-hover:-translate-x-1 transition" />
                                </button>
                            </div>
                        </div>

                        {/* Image */}
                        <div
                            className="h-64 lg:h-full bg-cover bg-center"
                            style={{
                                backgroundImage: `url('/src/assets/img/fence/Riyadh.webp')`
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
