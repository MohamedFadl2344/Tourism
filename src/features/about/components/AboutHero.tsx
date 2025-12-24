import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useFadeInDown, useFadeInUp } from '../../../hooks/animations';

export default function AboutHero() {
    const { t } = useTranslation('about');

    const badge = useFadeInDown({ duration: 0.6, delay: 0.1, threshold: 0.3 });
    const title = useFadeInUp({ duration: 0.7, delay: 0.3, threshold: 0.3 });
    const subtitle = useFadeInUp({ duration: 0.7, delay: 0.5, threshold: 0.3 });

    return (
        <div
            className="relative bg-cover bg-center bg-no-repeat py-32 md:py-40"
            style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/src/assets/img/about/hero.webp')`
            }}
        >
            <div className="layout-container mx-auto max-w-[1200px] px-4 md:px-10">
                <div className="text-center">
                    {/* Badge */}
                    <motion.span
                        ref={badge.ref}
                        variants={badge.variants}
                        initial="hidden"
                        animate={badge.animate}
                        className="inline-block text-[#D4AF37] font-bold text-xs tracking-wider uppercase bg-[#D4AF37]/10 px-4 py-1.5 rounded-full border border-[#D4AF37]/20 mb-6"
                    >
                        {t('hero.badge')}
                    </motion.span>

                    {/* Title */}
                    <motion.h1
                        ref={title.ref}
                        variants={title.variants}
                        initial="hidden"
                        animate={title.animate}
                        className="text-white text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight"
                    >
                        {t('hero.title')}
                        <br />
                        <span className="text-[#D4AF37]">{t('hero.titleHighlight')}</span>
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        ref={subtitle.ref}
                        variants={subtitle.variants}
                        initial="hidden"
                        animate={subtitle.animate}
                        className="text-gray-300 text-base md:text-lg max-w-3xl mx-auto leading-relaxed"
                    >
                        {t('hero.subtitle')}
                    </motion.p>
                </div>
            </div>
        </div>
    );
}
