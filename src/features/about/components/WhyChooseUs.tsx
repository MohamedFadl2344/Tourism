import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';
import { useSlideIn, useStaggerSlide } from '../../../hooks/animations';

export default function WhyChooseUs() {
    const { t } = useTranslation('about');
    const reasons = t('whyChoose.reasons', { returnObjects: true }) as string[];

    const leftTitle = useSlideIn({ direction: 'left', distance: 50, duration: 0.7, delay: 0.2, threshold: 0.3 });
    const rightReasons = useStaggerSlide({ direction: 'right', distance: 30, staggerDelay: 0.15, delay: 0.4, threshold: 0.3 });

    return (
        <div
            className="relative bg-cover bg-center bg-no-repeat py-20"
            style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.85)), url('/src/assets/img/about/about-img.webp')`
            }}
        >
            <div className="layout-container mx-auto max-w-[1200px] px-4 md:px-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Side - Title */}
                    <motion.div
                        ref={leftTitle.ref}
                        variants={leftTitle.variants}
                        initial="hidden"
                        animate={leftTitle.animate}
                    >
                        <span className="inline-block text-[#D4AF37] font-bold text-xs tracking-wider uppercase bg-[#D4AF37]/10 px-4 py-1.5 rounded-full border border-[#D4AF37]/20 mb-4">
                            {t('whyChoose.badge')}
                        </span>
                        <h2 className="text-white text-3xl md:text-4xl font-black leading-tight">
                            {t('whyChoose.title')}
                            <br />
                            <span className="text-[#D4AF37]">{t('whyChoose.titleHighlight')}</span>
                        </h2>
                    </motion.div>

                    {/* Right Side - Reasons */}
                    <motion.div
                        ref={rightReasons.ref}
                        variants={rightReasons.containerVariants}
                        initial="hidden"
                        animate={rightReasons.animate}
                        className="space-y-4"
                    >
                        {reasons.map((reason, index) => (
                            <motion.div key={index} variants={rightReasons.itemVariants} className="flex items-center gap-4 bg-[#1a1614]/50 backdrop-blur-sm rounded-xl p-5 border border-white/5">
                                <div className="size-10 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] flex-shrink-0">
                                    <FaCheckCircle className="text-xl" />
                                </div>
                                <p className="text-white font-bold text-base">{reason}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
