import { useTranslation } from 'react-i18next';
import { FaStar, FaHeart, FaRegHeart } from 'react-icons/fa';
import { useState } from 'react';

interface TourismCardProps {
    image: string;
    city: string;
    rating: number;
    description: string;
    price: number;
    badge?: string;
}

export default function TourismCard({
    image,
    city,
    rating,
    description,
    price,
    badge,
}: TourismCardProps) {
    const { t, i18n } = useTranslation('tourism');
    const [isFavorite, setIsFavorite] = useState(false);

    return (
        <div className="group relative flex flex-col gap-0 rounded-2xl bg-[#292524] border border-white/5 overflow-hidden hover:border-[#D4AF37]/40 hover:shadow-[0_0_25px_rgba(212,175,55,0.15)] transition duration-500">
            {/* Image */}
            <div className="w-full h-64 bg-gray-800 relative overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition duration-700 ease-out"
                    style={{ backgroundImage: `url(${image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#292524] via-transparent to-transparent opacity-90" />

                {/* Rating Badge - Top Left */}
                <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1 border border-white/10">
                    <FaStar className="text-[14px] text-[#D4AF37]" />
                    {rating}
                </div>

                {/* Special Badge - Top Right */}
                {badge && (
                    <div className="absolute top-4 right-4 bg-[#D4AF37] text-black text-xs font-bold px-3 py-1.5 rounded-full">
                        {badge}
                    </div>
                )}

                {/* Favorite Button */}
                <button
                    onClick={() => setIsFavorite(!isFavorite)}
                    className="absolute bottom-4 left-4 size-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/20 transition border border-white/20"
                >
                    {isFavorite ? (
                        <FaHeart className="text-[18px] text-red-500" />
                    ) : (
                        <FaRegHeart className="text-[18px]" />
                    )}
                </button>

                {/* City Name - Bottom Right */}
                <div className="absolute bottom-4 right-4 z-10">
                    <p className="text-white text-2xl font-bold leading-tight">{city}</p>
                </div>
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col gap-4">
                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">
                    {description}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <div className="flex flex-col">
                        <span className="text-gray-500 text-xs">{t('card.priceFrom')}</span>
                        <span className="text-white text-xl font-bold">
                            {price.toLocaleString(i18n.language === 'ar' ? 'ar-SA' : 'en-US')} <span className="text-sm text-gray-400">{t('card.currency')}</span>
                        </span>
                    </div>
                    <button className="h-10 px-6 rounded-lg bg-[#b45309] hover:bg-[#92400e] text-white font-bold text-sm transition shadow-lg shadow-[#b45309]/25">
                        {t('card.explore')}
                    </button>
                </div>
            </div>
        </div>
    );
}
