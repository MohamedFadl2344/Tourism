import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FaTh, FaList } from 'react-icons/fa';
import TourismCard from './TourismCard';
import { useFadeInUp, useStaggerScale } from '../../../hooks/animations';
import { images } from '../../../assets/images';

type ViewMode = 'grid' | 'list';

export default function TourismGrid() {
    const { t } = useTranslation('tourism');
    const [viewMode, setViewMode] = useState<ViewMode>('grid');

    const destinations = [
        {
            image: images.fence.riyadh,
            city: t('destinations.riyadh.name'),
            rating: 4.9,
            description: t('destinations.riyadh.description'),
            price: 1200,
            badge: t('card.badges.popular'),
        },
        {
            image: images.fence.dubai,
            city: t('destinations.dubai.name'),
            rating: 4.8,
            description: t('destinations.dubai.description'),
            price: 1500,
        },
        {
            image: images.fence.doha,
            city: t('destinations.doha.name'),
            rating: 4.7,
            description: t('destinations.doha.description'),
            price: 1100,
        },
        {
            image: images.fence.muscat,
            city: t('destinations.muscat.name'),
            rating: 4.6,
            description: t('destinations.muscat.description'),
            price: 950,
        },
        {
            image: images.activities.image1,
            city: t('destinations.manama.name'),
            rating: 4.5,
            description: t('destinations.manama.description'),
            price: 850,
        },
        {
            image: images.activities.image2,
            city: t('destinations.desert.name'),
            rating: 4.8,
            description: t('destinations.desert.description'),
            price: 800,
            badge: t('card.badges.adventure'),
        },
    ];

    const header = useFadeInUp({ duration: 0.7, delay: 0.1, threshold: 0.05 });
    const cards = useStaggerScale({ initialScale: 0.9, duration: 0.6, staggerDelay: 0.1, threshold: 0.05 });

    return (
        <div className="py-16 bg-[#0c0a09]">
            <div className="layout-container mx-auto max-w-[1200px] px-4 md:px-10">
                {/* Header with View Toggle */}
                <motion.div
                    ref={header.ref}
                    variants={header.variants}
                    initial="hidden"
                    animate={header.animate}
                    className="flex items-center justify-between mb-8"
                >
                    <h2 className="text-white text-2xl md:text-3xl font-bold">
                        {t('grid.showing')} <span className="text-[#D4AF37]">{destinations.length}</span> {t('grid.available')}
                    </h2>

                    {/* View Mode Toggle */}
                    <div className="flex items-center gap-2 bg-[#292524] rounded-lg p-1 border border-white/10">
                        <button
                            onClick={() => setViewMode('grid')}
                            className={`size-10 rounded-lg flex items-center justify-center transition ${viewMode === 'grid'
                                ? 'bg-[#b45309] text-white'
                                : 'text-gray-400 hover:text-white'
                                }`}
                            aria-label="Grid View"
                        >
                            <FaTh />
                        </button>
                        <button
                            onClick={() => setViewMode('list')}
                            className={`size-10 rounded-lg flex items-center justify-center transition ${viewMode === 'list'
                                ? 'bg-[#b45309] text-white'
                                : 'text-gray-400 hover:text-white'
                                }`}
                            aria-label="List View"
                        >
                            <FaList />
                        </button>
                    </div>
                </motion.div>

                {/* Destinations Grid */}
                <motion.div
                    ref={cards.ref}
                    variants={cards.containerVariants}
                    initial="hidden"
                    animate={cards.animate}
                    className={`grid gap-6 ${viewMode === 'grid'
                        ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
                        : 'grid-cols-1'
                        }`}
                >
                    {destinations.map((destination, index) => (
                        <motion.div key={index} variants={cards.itemVariants}>
                            <TourismCard {...destination} />
                        </motion.div>
                    ))}
                </motion.div>

                {/* View More Button */}
                <div className="mt-12 text-center">
                    <button className="h-12 px-8 rounded-lg border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black font-bold text-sm transition">
                        {t('grid.viewMore')}
                    </button>
                </div>
            </div>
        </div>
    );
}
