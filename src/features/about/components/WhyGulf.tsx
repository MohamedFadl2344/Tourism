import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useSlideIn } from '../../../hooks/animations';
import aboutImage from '../../../assets/img/about/about-img.webp';

export default function WhyGulf() {
    const { t } = useTranslation('about');

    const leftImage = useSlideIn({ direction: 'left', distance: 50, duration: 0.8, delay: 0.2, threshold: 0.3 });
    const rightContent = useSlideIn({ direction: 'right', distance: 50, duration: 0.8, delay: 0.4, threshold: 0.3 });

    return (
        <div className="bg-[#0c0a09] py-16">
            <div className="layout-container mx-auto max-w-[1200px] px-4 md:px-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Image */}
                    <motion.div
                        ref={leftImage.ref}
                        variants={leftImage.variants}
                        initial="hidden"
                        animate={leftImage.animate}
                        className="h-[400px] rounded-3xl bg-cover bg-center border border-white/5 shadow-2xl order-2 lg:order-1"
                        style={{
                            backgroundImage: `url(${aboutImage})`
                        }}
                    />

                    {/* Content */}
                    <motion.div
                        ref={rightContent.ref}
                        variants={rightContent.variants}
                        initial="hidden"
                        animate={rightContent.animate}
                        className="order-1 lg:order-2"
                    >
                        <span className="inline-block text-[#D4AF37] font-bold text-xs tracking-wider uppercase bg-[#D4AF37]/10 px-4 py-1.5 rounded-full border border-[#D4AF37]/20 mb-4">
                            {t('whyGulf.badge')}
                        </span>

                        <h2 className="text-white text-3xl md:text-4xl font-black mb-6 leading-tight">
                            {t('whyGulf.title')}
                        </h2>

                        <p className="text-gray-400 text-base leading-relaxed mb-6">
                            {t('whyGulf.paragraph1')}
                        </p>

                        <p className="text-gray-400 text-base leading-relaxed">
                            {t('whyGulf.paragraph2')}
                        </p>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
