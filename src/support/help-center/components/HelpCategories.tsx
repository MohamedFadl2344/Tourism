import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FaQuestionCircle, FaBook, FaCreditCard, FaMapMarkedAlt, FaHeadset, FaCog } from 'react-icons/fa';
import CategoryCard from './CategoryCard';
import { useFadeInUp, useStaggerScale } from '../../../hooks/animations';

export default function HelpCategories() {
    const { t } = useTranslation('helpcenter');
    const categories = t('categories.items', { returnObjects: true }) as Array<{
        title: string;
        description: string;
        icon: string;
    }>;

    // Icons and colors for each category
    const icons = [FaQuestionCircle, FaBook, FaCreditCard, FaMapMarkedAlt, FaHeadset, FaCog];
    const iconBgs = [
        'bg-blue-500/10',
        'bg-green-500/10',
        'bg-purple-500/10',
        'bg-orange-500/10',
        'bg-pink-500/10',
        'bg-teal-500/10'
    ];
    const iconColors = [
        'text-blue-400',
        'text-green-400',
        'text-purple-400',
        'text-orange-400',
        'text-pink-400',
        'text-teal-400'
    ];

    const header = useFadeInUp({ duration: 0.7, delay: 0.1, threshold: 0.3 });
    const cards = useStaggerScale({ initialScale: 0.9, duration: 0.6, staggerDelay: 0.12, threshold: 0.3 });

    return (
        <div className="bg-[#0c0a09] py-12">
            <div className="layout-container mx-auto max-w-[1200px] px-4 md:px-10">
                <motion.div
                    ref={header.ref}
                    variants={header.variants}
                    initial="hidden"
                    animate={header.animate}
                    className="text-center mb-12"
                >
                    <h2 className="text-white text-2xl md:text-3xl font-black mb-3">
                        {t('categories.title')}
                    </h2>
                    <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto">
                        {t('categories.subtitle')}
                    </p>
                </motion.div>

                <motion.div
                    ref={cards.ref}
                    variants={cards.containerVariants}
                    initial="hidden"
                    animate={cards.animate}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {categories.map((category, index) => (
                        <motion.div key={index} variants={cards.itemVariants}>
                            <CategoryCard
                                icon={icons[index]}
                                title={category.title}
                                description={category.description}
                                iconBg={iconBgs[index]}
                                iconColor={iconColors[index]}
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
