import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FaArrowLeft } from 'react-icons/fa';
import { useFadeInUp, useStaggerSlide } from '../../../hooks/animations';
import { images as imgAssets } from '../../../assets/images';

interface DestinationCardProps {
    image: string;
    title: string;
    description: string;
}

function DestinationCard({ image, title, description }: DestinationCardProps) {
    const { t } = useTranslation('about');

    return (
        <div className="group cursor-pointer">
            <div className="relative h-64 rounded-2xl overflow-hidden mb-4">
                <div
                    className="w-full h-full bg-cover bg-center group-hover:scale-110 transition duration-500"
                    style={{ backgroundImage: `url('${image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <h3 className="absolute bottom-4 right-4 text-white text-xl font-black">
                    {title}
                </h3>
            </div>
            <p className="text-gray-400 text-sm mb-3">{description}</p>
            <button className="flex items-center gap-2 text-[#D4AF37] hover:text-[#b8941f] font-bold text-sm transition group/btn">
                <span>{t('destinations.discoverMore')}</span>
                <FaArrowLeft className="group-hover/btn:-translate-x-1 transition" />
            </button>
        </div>
    );
}

export default function PopularDestinations() {
    const { t } = useTranslation('about');
    const cities = t('destinations.cities', { returnObjects: true }) as Array<{
        name: string;
        description: string;
    }>;

    const images = [
        imgAssets.fence.dubai,
        imgAssets.fence.riyadh,
        imgAssets.fence.doha,
        imgAssets.fence.muscat
    ];

    const header = useFadeInUp({ duration: 0.7, delay: 0.1, threshold: 0.3 });
    const cards = useStaggerSlide({ direction: 'up', distance: 30, staggerDelay: 0.12, delay: 0.3, threshold: 0.3 });

    return (
        <div className="bg-[#0c0a09] py-16">
            <div className="layout-container mx-auto max-w-[1200px] px-4 md:px-10">
                {/* Header */}
                <motion.div
                    ref={header.ref}
                    variants={header.variants}
                    initial="hidden"
                    animate={header.animate}
                    className="flex items-center justify-between mb-12"
                >
                    <div>
                        <span className="inline-block text-[#D4AF37] font-bold text-xs tracking-wider uppercase bg-[#D4AF37]/10 px-4 py-1.5 rounded-full border border-[#D4AF37]/20 mb-4">
                            {t('destinations.badge')}
                        </span>
                        <h2 className="text-white text-3xl md:text-4xl font-black">
                            {t('destinations.title')}
                        </h2>
                    </div>
                    <button className="hidden md:flex items-center gap-2 text-[#D4AF37] hover:text-[#b8941f] font-bold text-sm transition group">
                        <span>{t('destinations.viewAll')}</span>
                        <FaArrowLeft className="group-hover:-translate-x-1 transition" />
                    </button>
                </motion.div>

                {/* Destinations Grid */}
                <motion.div
                    ref={cards.ref}
                    variants={cards.containerVariants}
                    initial="hidden"
                    animate={cards.animate}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {cities.map((city, index) => (
                        <motion.div key={index} variants={cards.itemVariants}>
                            <DestinationCard
                                image={images[index]}
                                title={city.name}
                                description={city.description}
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
