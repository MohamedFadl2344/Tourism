import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FaHeart, FaStar, FaShieldAlt } from 'react-icons/fa';
import ValueCard from './ValueCard';
import { useFadeInUp, useStaggerScale } from '../../../hooks/animations';

export default function OurValues() {
    const { t } = useTranslation('about');
    const values = t('values.items', { returnObjects: true }) as Array<{
        title: string;
        description: string;
    }>;

    const icons = [FaHeart, FaStar, FaShieldAlt];

    const header = useFadeInUp({ duration: 0.7, delay: 0.1, threshold: 0.3 });
    const cards = useStaggerScale({ initialScale: 0.9, duration: 0.6, staggerDelay: 0.15, threshold: 0.3 });

    return (
        <div className="bg-[#0c0a09] py-16">
            <div className="layout-container mx-auto max-w-[1200px] px-4 md:px-10">
                {/* Section Title */}
                <motion.div
                    ref={header.ref}
                    variants={header.variants}
                    initial="hidden"
                    animate={header.animate}
                    className="text-center mb-12"
                >
                    <span className="inline-block text-[#D4AF37] font-bold text-xs tracking-wider uppercase bg-[#D4AF37]/10 px-4 py-1.5 rounded-full border border-[#D4AF37]/20 mb-4">
                        {t('values.badge')}
                    </span>
                    <h2 className="text-white text-3xl md:text-4xl font-black mb-4">
                        {t('values.title')}
                    </h2>
                    <p className="text-gray-400 text-base max-w-2xl mx-auto">
                        {t('values.subtitle')}
                    </p>
                </motion.div>

                {/* Values Grid */}
                <motion.div
                    ref={cards.ref}
                    variants={cards.containerVariants}
                    initial="hidden"
                    animate={cards.animate}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6"
                >
                    {values.map((value, index) => (
                        <motion.div key={index} variants={cards.itemVariants}>
                            <ValueCard icon={icons[index]} {...value} />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
