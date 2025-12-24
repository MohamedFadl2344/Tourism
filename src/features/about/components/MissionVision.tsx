import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FaUsers, FaGlobe } from 'react-icons/fa';
import { useSlideIn } from '../../../hooks/animations';
import aboutImage from '../../../assets/img/about/about-img.webp';

export default function MissionVision() {
    const { t } = useTranslation('about');

    const leftContent = useSlideIn({ direction: 'left', distance: 50, duration: 0.8, delay: 0.2, threshold: 0.3 });
    const rightImage = useSlideIn({ direction: 'right', distance: 50, duration: 0.8, delay: 0.4, threshold: 0.3 });

    return (
        <div className="bg-[#0c0a09] py-16">
            <div className="layout-container mx-auto max-w-[1200px] px-4 md:px-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Content */}
                    <motion.div
                        ref={leftContent.ref}
                        variants={leftContent.variants}
                        initial="hidden"
                        animate={leftContent.animate}
                    >
                        {/* Badge */}
                        <span className="inline-block text-[#D4AF37] font-bold text-xs tracking-wider uppercase bg-[#D4AF37]/10 px-4 py-1.5 rounded-full border border-[#D4AF37]/20 mb-4">
                            {t('mission.badge')}
                        </span>

                        {/* Title */}
                        <h2 className="text-white text-3xl md:text-4xl font-black mb-6 leading-tight">
                            {t('mission.title')}
                            <br />
                            {t('mission.titleBreak')}
                        </h2>

                        {/* Description */}
                        <p className="text-gray-400 text-base leading-relaxed mb-8">
                            {t('mission.description')}
                        </p>

                        {/* Stats */}
                        <div className="grid grid-cols-2 gap-6">
                            <div className="flex items-center gap-4">
                                <div className="size-14 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37]">
                                    <FaUsers className="text-2xl" />
                                </div>
                                <div>
                                    <h3 className="text-white text-2xl font-black">{t('mission.stats.clients.number')}</h3>
                                    <p className="text-gray-400 text-sm">{t('mission.stats.clients.label')}</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="size-14 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37]">
                                    <FaGlobe className="text-2xl" />
                                </div>
                                <div>
                                    <h3 className="text-white text-2xl font-black">{t('mission.stats.destinations.number')}</h3>
                                    <p className="text-gray-400 text-sm">{t('mission.stats.destinations.label')}</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Image */}
                    <motion.div
                        ref={rightImage.ref}
                        variants={rightImage.variants}
                        initial="hidden"
                        animate={rightImage.animate}
                        className="relative"
                    >
                        <div
                            className="h-[400px] md:h-[500px] rounded-3xl bg-cover bg-center border border-white/5 shadow-2xl"
                            style={{
                                backgroundImage: `url(${aboutImage})`
                            }}
                        />
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
