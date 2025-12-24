import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import EventCard from './EventCard';
import { useFadeInUp, useStaggerScale } from '../../../hooks/animations';
import { images } from '../../../assets/images';

type CategoryType = 'all' | 'cultural' | 'entertainment' | 'adventure' | 'sports';

export default function EventsGrid() {
    const { t } = useTranslation('events');
    const [activeCategory, setActiveCategory] = useState<CategoryType>('all');

    const categories = [
        { id: 'all' as CategoryType, label: t('grid.categories.all') },
        { id: 'cultural' as CategoryType, label: t('grid.categories.cultural') },
        { id: 'entertainment' as CategoryType, label: t('grid.categories.entertainment') },
        { id: 'adventure' as CategoryType, label: t('grid.categories.adventure') },
        { id: 'sports' as CategoryType, label: t('grid.categories.sports') },
    ];

    const events = [
        {
            image: images.fence.dubai,
            title: t('events.shoppingFestival.title'),
            date: t('events.shoppingFestival.date'),
            location: t('events.shoppingFestival.location'),
            description: t('events.shoppingFestival.description'),
            price: 350,
            badge: t('card.badges.soon'),
            availableSeats: 200,
            category: 'entertainment' as CategoryType,
        },
        {
            image: images.fence.riyadh,
            title: t('events.heritageTour.title'),
            date: t('events.heritageTour.date'),
            location: t('events.heritageTour.location'),
            description: t('events.heritageTour.description'),
            price: 120,
            availableSeats: 50,
            category: 'cultural' as CategoryType,
        },
        {
            image: images.fence.doha,
            title: t('events.desertNight.title'),
            date: t('events.desertNight.date'),
            location: t('events.desertNight.location'),
            description: t('events.desertNight.description'),
            price: 450,
            badge: t('card.badges.popular'),
            availableSeats: 30,
            category: 'adventure' as CategoryType,
        },
        {
            image: images.fence.muscat,
            title: t('events.diving.title'),
            date: t('events.diving.date'),
            location: t('events.diving.location'),
            description: t('events.diving.description'),
            price: 200,
            availableSeats: 15,
            category: 'adventure' as CategoryType,
        },
        {
            image: images.activities.image1,
            title: t('events.craftsMarket.title'),
            date: t('events.craftsMarket.date'),
            location: t('events.craftsMarket.location'),
            description: t('events.craftsMarket.description'),
            price: 80,
            availableSeats: 100,
            category: 'cultural' as CategoryType,
        },
        {
            image: images.activities.image2,
            title: t('events.marathon.title'),
            date: t('events.marathon.date'),
            location: t('events.marathon.location'),
            description: t('events.marathon.description'),
            price: 150,
            badge: t('card.badges.sports'),
            availableSeats: 500,
            category: 'sports' as CategoryType,
        },
    ];

    const filteredEvents = activeCategory === 'all'
        ? events
        : events.filter(event => event.category === activeCategory);

    const header = useFadeInUp({ duration: 0.7, delay: 0.1, threshold: 0.05 });
    const cards = useStaggerScale({ initialScale: 0.9, duration: 0.6, staggerDelay: 0.1, threshold: 0.05 });

    return (
        <div className="py-16 bg-[#0c0a09]">
            <div className="layout-container mx-auto max-w-[1200px] px-4 md:px-10">
                {/* Header */}
                <motion.div
                    ref={header.ref}
                    variants={header.variants}
                    initial="hidden"
                    animate={header.animate}
                    className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-4"
                >
                    <h2 className="text-white text-2xl md:text-3xl font-bold">
                        {t('grid.available')} <span className="text-[#D4AF37]">({filteredEvents.length})</span>
                    </h2>

                    {/* Category Tabs */}
                    <div className="flex flex-wrap gap-2 bg-[#292524] rounded-lg p-1 border border-white/10">
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => setActiveCategory(category.id)}
                                className={`px-4 py-2 rounded-lg text-sm font-bold transition ${activeCategory === category.id
                                    ? 'bg-[#b45309] text-white'
                                    : 'text-gray-400 hover:text-white'
                                    }`}
                            >
                                {category.label}
                            </button>
                        ))}
                    </div>
                </motion.div>

                {/* Events Grid */}
                <motion.div
                    ref={cards.ref}
                    variants={cards.containerVariants}
                    initial="hidden"
                    animate={cards.animate}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {filteredEvents.map((event, index) => (
                        <motion.div key={index} variants={cards.itemVariants}>
                            <EventCard {...event} />
                        </motion.div>
                    ))}
                </motion.div>

                {/* Pagination */}
                <div className="mt-12 flex justify-center items-center gap-2">
                    <button className="size-10 rounded-lg bg-[#292524] border border-white/10 text-gray-400 hover:text-white hover:border-[#D4AF37]/30 transition flex items-center justify-center">
                        ‹
                    </button>
                    <button className="size-10 rounded-lg bg-[#b45309] text-white font-bold flex items-center justify-center">
                        1
                    </button>
                    <button className="size-10 rounded-lg bg-[#292524] border border-white/10 text-gray-400 hover:text-white hover:border-[#D4AF37]/30 transition flex items-center justify-center">
                        2
                    </button>
                    <button className="size-10 rounded-lg bg-[#292524] border border-white/10 text-gray-400 hover:text-white hover:border-[#D4AF37]/30 transition flex items-center justify-center">
                        3
                    </button>
                    <button className="size-10 rounded-lg bg-[#292524] border border-white/10 text-gray-400 hover:text-white hover:border-[#D4AF37]/30 transition flex items-center justify-center">
                        ›
                    </button>
                </div>
            </div>
        </div>
    );
}
