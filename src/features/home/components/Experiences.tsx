import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import ExperienceCard from './ExperienceCard';
import { useFadeInUp, useStaggerSlide } from '../../../hooks/animations';

export default function Experiences() {
    const { t } = useTranslation('home');

    const experiences = [
        {
            image: '/src/assets/img/Activities/image.webp',
            category: t('experiences.safari.category'),
            title: t('experiences.safari.title'),
            description: t('experiences.safari.description'),
        },
        {
            image: '/src/assets/img/Activities/image2.webp',
            category: t('experiences.culinary.category'),
            title: t('experiences.culinary.title'),
            description: t('experiences.culinary.description'),
        },
    ];

    // Animation hooks
    const header = useFadeInUp({ duration: 0.8, delay: 0.1, threshold: 0.2 });
    const cards = useStaggerSlide({
        direction: 'up',
        distance: 40,
        staggerDelay: 0.2,
        delay: 0.4,
        threshold: 0.2
    });

    return (
        <div className="relative py-24 bg-[#0c0a09] border-y border-white/5 overflow-hidden" id="experiences">
            {/* Decorative Blurs */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#b45309]/10 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#D4AF37]/5 rounded-full blur-[120px] -translate-x-1/4 translate-y-1/4" />

            <div className="layout-container mx-auto max-w-[1200px] px-4 md:px-10 relative z-10">
                {/* Header */}
                <motion.div
                    ref={header.ref}
                    variants={header.variants}
                    initial="hidden"
                    animate={header.animate}
                    className="mb-14 text-center max-w-2xl mx-auto"
                >
                    <span className="text-[#D4AF37] font-bold text-sm tracking-wider uppercase mb-2 block">
                        {t('experiences.badge')}
                    </span>
                    <h2 className="text-white text-2xl md:text-3xl lg:text-5xl font-bold leading-tight mb-6">
                        {t('experiences.title')}
                    </h2>
                    <div className="h-1 w-20 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mb-6" />
                    <p className="text-gray-300 leading-relaxed text-base md:text-lg">
                        {t('experiences.subtitle')}
                    </p>
                </motion.div>

                {/* Grid - Two equal cards side by side */}
                <motion.div
                    ref={cards.ref}
                    variants={cards.containerVariants}
                    initial="hidden"
                    animate={cards.animate}
                    className="grid grid-cols-1 md:grid-cols-2 gap-8"
                >
                    {experiences.map((experience, index) => (
                        <motion.div key={index} variants={cards.itemVariants}>
                            <ExperienceCard {...experience} />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
