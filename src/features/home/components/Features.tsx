import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FaMosque, FaGem, FaSwimmer } from 'react-icons/fa';
import FeatureCard from './FeatureCard';
import { useStaggerScale } from '../../../hooks/animations';

export default function Features() {
    const { t } = useTranslation('home');

    const features = [
        {
            icon: FaMosque,
            title: t('features.heritage.title'),
            description: t('features.heritage.description'),
            iconColor: 'text-[#D4AF37]',
            bgColor: 'bg-[#D4AF37]/10',
            borderColor: 'border-[#D4AF37]/20',
        },
        {
            icon: FaGem,
            title: t('features.luxury.title'),
            description: t('features.luxury.description'),
            iconColor: 'text-amber-500',
            bgColor: 'bg-amber-900/20',
            borderColor: 'border-amber-800/20',
        },
        {
            icon: FaSwimmer,
            title: t('features.adventure.title'),
            description: t('features.adventure.description'),
            iconColor: 'text-teal-400',
            bgColor: 'bg-teal-900/10',
            borderColor: 'border-teal-900/20',
        },
    ];

    // Animation hook
    const cards = useStaggerScale({
        initialScale: 0.9,
        duration: 0.6,
        staggerDelay: 0.15,
        threshold: 0.2
    });

    return (
        <div className="py-12 bg-[#0c0a09] border-b border-white/5 relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-24 bg-[#D4AF37]/5 blur-[100px] pointer-events-none" />
            <div className="layout-container mx-auto max-w-[1200px] px-4 md:px-10 relative z-10">
                <motion.div
                    ref={cards.ref}
                    variants={cards.containerVariants}
                    initial="hidden"
                    animate={cards.animate}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                    {features.map((feature, index) => (
                        <motion.div key={index} variants={cards.itemVariants}>
                            <FeatureCard {...feature} />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
