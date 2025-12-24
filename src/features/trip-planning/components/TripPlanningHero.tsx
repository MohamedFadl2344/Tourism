import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useFadeInDown, useFadeInUp } from '../../../hooks/animations';

export default function TripPlanningHero() {
    const { t } = useTranslation('tripPlanning');

    const badge = useFadeInDown({ duration: 0.6, delay: 0.1, threshold: 0.3 });
    const title = useFadeInUp({ duration: 0.7, delay: 0.3, threshold: 0.3 });
    const subtitle = useFadeInUp({ duration: 0.7, delay: 0.5, threshold: 0.3 });

    return (
        <div className="relative h-[300px] w-full overflow-hidden flex flex-col items-center justify-center bg-[#0c0a09]">
            {/* Content */}
            <div className="relative z-10 flex flex-col items-center gap-3 px-4 text-center max-w-4xl mx-auto">
                {/* Badge */}
                <motion.span
                    ref={badge.ref}
                    variants={badge.variants}
                    initial="hidden"
                    animate={badge.animate}
                    className="text-[#D4AF37] font-bold text-xs tracking-wider uppercase bg-[#D4AF37]/10 px-4 py-1.5 rounded-full border border-[#D4AF37]/20"
                >
                    {t('hero.badge')}
                </motion.span>

                {/* Main Heading */}
                <motion.h1
                    ref={title.ref}
                    variants={title.variants}
                    initial="hidden"
                    animate={title.animate}
                    className="text-white text-3xl md:text-4xl lg:text-5xl font-black leading-tight tracking-tight"
                >
                    {t('hero.title')} <span className="text-[#D4AF37]">{t('hero.titleHighlight')}</span>
                </motion.h1>

                {/* Subheading */}
                <motion.p
                    ref={subtitle.ref}
                    variants={subtitle.variants}
                    initial="hidden"
                    animate={subtitle.animate}
                    className="text-gray-400 text-sm md:text-base font-medium max-w-2xl mx-auto leading-relaxed"
                >
                    {t('hero.subtitle')}
                </motion.p>
            </div>
        </div>
    );
}
