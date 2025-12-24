import { useTranslation } from 'react-i18next';
import { FaCalendarAlt, FaMapMarkerAlt, FaTicketAlt } from 'react-icons/fa';

interface EventCardProps {
    image: string;
    title: string;
    date: string;
    location: string;
    description: string;
    price: number;
    badge?: string;
    availableSeats?: number;
}

export default function EventCard({
    image,
    title,
    date,
    location,
    description,
    price,
    badge,
    availableSeats,
}: EventCardProps) {
    const { t, i18n } = useTranslation('events');

    return (
        <div className="group relative flex flex-col gap-0 rounded-2xl bg-[#292524] border border-white/5 overflow-hidden hover:border-[#D4AF37]/40 hover:shadow-[0_0_25px_rgba(212,175,55,0.15)] transition duration-500">
            {/* Image */}
            <div className="w-full h-56 bg-gray-800 relative overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition duration-700 ease-out"
                    style={{ backgroundImage: `url(${image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#292524] via-transparent to-transparent opacity-90" />

                {/* Badge - Top Right */}
                {badge && (
                    <div className="absolute top-4 right-4 bg-[#D4AF37] text-black text-xs font-bold px-3 py-1.5 rounded-full">
                        {badge}
                    </div>
                )}

                {/* Available Seats - Top Left */}
                {availableSeats && (
                    <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1 border border-white/10">
                        <FaTicketAlt className="text-[14px]" />
                        {availableSeats} {t('card.available')}
                    </div>
                )}
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col gap-4">
                {/* Title */}
                <h3 className="text-white text-xl font-bold leading-tight group-hover:text-[#D4AF37] transition">
                    {title}
                </h3>

                {/* Date & Location */}
                <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                        <FaCalendarAlt className="text-[#D4AF37]" />
                        <span>{date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                        <FaMapMarkerAlt className="text-[#D4AF37]" />
                        <span>{location}</span>
                    </div>
                </div>

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
                        {t('card.bookNow')}
                    </button>
                </div>
            </div>
        </div>
    );
}
