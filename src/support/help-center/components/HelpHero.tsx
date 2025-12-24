import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useFadeInDown, useFadeInUp } from '../../../hooks/animations';

export default function HelpHero() {
    const { t } = useTranslation('helpcenter');

    const badge = useFadeInDown({ duration: 0.6, delay: 0.1, threshold: 0.3 });
    const title = useFadeInUp({ duration: 0.7, delay: 0.3, threshold: 0.3 });
    const subtitle = useFadeInUp({ duration: 0.7, delay: 0.5, threshold: 0.3 });

    return (
        <div className="relative bg-[#0c0a09] py-16 md:py-20">
            <div className="layout-container mx-auto max-w-[1200px] px-4 md:px-10">
                <div className="text-center">
                    {/* Badge */}
                    <motion.span
                        ref={badge.ref}
                        variants={badge.variants}
                        initial="hidden"
                        animate={badge.animate}
                        className="inline-block text-[#D4AF37] font-bold text-xs tracking-wider uppercase bg-[#D4AF37]/10 px-4 py-1.5 rounded-full border border-[#D4AF37]/20 mb-4"
                    >
                        {t('hero.badge')}
                    </motion.span>

                    {/* Title */}
                    <motion.h1
                        ref={title.ref}
                        variants={title.variants}
                        initial="hidden"
                        animate={title.animate}
                        className="text-white text-3xl md:text-4xl lg:text-5xl font-black mb-4"
                    >
                        {t('hero.title')}
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        ref={subtitle.ref}
                        variants={subtitle.variants}
                        initial="hidden"
                        animate={subtitle.animate}
                        className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto leading-relaxed"
                    >
                        {t('hero.subtitle')}
                    </motion.p>
                </div>
            </div>
        </div>
    );
}
