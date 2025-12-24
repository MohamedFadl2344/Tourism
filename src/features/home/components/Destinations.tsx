import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FaArrowLeft } from 'react-icons/fa';
import DestinationCard from './DestinationCard';
import { useFadeInUp, useStaggerSlide } from '../../../hooks/animations';
import { images } from '../../../assets/images';

export default function Destinations() {
    const { t } = useTranslation('home');

    const destinations = [
        {
            image: images.fence.dubai,
            city: t('destinations.cities.dubai.name'),
            country: t('destinations.cities.dubai.country'),
            rating: 4.9,
            description: t('destinations.cities.dubai.description'),
        },
        {
            image: images.fence.riyadh,
            city: t('destinations.cities.riyadh.name'),
            country: t('destinations.cities.riyadh.country'),
            description: t('destinations.cities.riyadh.description'),
        },
        {
            image: images.fence.doha,
            city: t('destinations.cities.doha.name'),
            country: t('destinations.cities.doha.country'),
            description: t('destinations.cities.doha.description'),
        },
        {
            image: images.fence.muscat,
            city: t('destinations.cities.muscat.name'),
            country: t('destinations.cities.muscat.country'),
            description: t('destinations.cities.muscat.description'),
        },
    ];

    // Animation hooks
    const header = useFadeInUp({ duration: 0.7, delay: 0.1, threshold: 0.2 });
    const cards = useStaggerSlide({
        direction: 'up',
        distance: 30,
        staggerDelay: 0.12,
        delay: 0.3,
        threshold: 0.2
    });

    return (
        <div className="py-20 bg-[#1c1917] pattern-grid" id="destinations">
            <div className="layout-container mx-auto max-w-[1200px] px-4 md:px-10">
                {/* Header */}
                <motion.div
                    ref={header.ref}
                    variants={header.variants}
                    initial="hidden"
                    animate={header.animate}
                    className="flex flex-col md:flex-row items-start md:items-end justify-between mb-8 md:mb-12 gap-4"
                >
                    <div>
                        <span className="text-[#D4AF37] font-bold text-sm tracking-wider uppercase mb-2 block">
                            {t('destinations.badge')}
                        </span>
                        <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-2">
                            {t('destinations.title')}
                        </h2>
                        <p className="text-gray-400 mt-2 max-w-lg">
                            {t('destinations.subtitle')}
                        </p>
                    </div>
                    <a
                        className="hidden md:flex items-center gap-2 text-[#D4AF37] hover:text-white text-sm font-bold transition group"
                        href="#"
                    >
                        <span>{t('destinations.viewAll')}</span>
                        <FaArrowLeft className="text-[18px] rotate-180 group-hover:translate-x-1 transition-transform" />
                    </a>
                </motion.div>

                {/* Grid */}
                <motion.div
                    ref={cards.ref}
                    variants={cards.containerVariants}
                    initial="hidden"
                    animate={cards.animate}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {destinations.map((destination, index) => (
                        <motion.div key={index} variants={cards.itemVariants}>
                            <DestinationCard {...destination} />
                        </motion.div>
                    ))}
                </motion.div>

                {/* Mobile Button */}
                <div className="mt-8 flex justify-center md:hidden">
                    <button className="flex h-12 w-full items-center justify-center rounded-xl bg-white/5 text-white font-bold hover:bg-white/10 transition border border-white/10 text-sm">
                        {t('destinations.viewAll')}
                    </button>
                </div>
            </div>

            <style>{`
        .pattern-grid {
          background-image: radial-gradient(rgba(212, 175, 55, 0.1) 1px, transparent 1px);
          background-size: 24px 24px;
        }
      `}</style>
        </div>
    );
}
