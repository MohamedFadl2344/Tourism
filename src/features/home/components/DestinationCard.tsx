import { FaStar, FaMapMarkerAlt, FaArrowLeft } from 'react-icons/fa';

interface DestinationCardProps {
    image: string;
    city: string;
    country: string;
    rating?: number;
    description: string;
}

export default function DestinationCard({
    image,
    city,
    country,
    rating,
    description,
}: DestinationCardProps) {
    return (
        <div className="group relative flex flex-col gap-0 rounded-2xl bg-[#292524] border border-white/5 overflow-hidden hover:border-[#D4AF37]/40 hover:shadow-[0_0_25px_rgba(212,175,55,0.15)] transition duration-500">
            {/* Image - Takes more space */}
            <div className="w-full h-64 bg-gray-800 relative overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition duration-700 ease-out"
                    style={{ backgroundImage: `url(${image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#292524] via-transparent to-transparent opacity-90" />

                {/* Rating Badge - Top Right */}
                {rating && (
                    <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1 border border-white/10">
                        <FaStar className="text-[14px] text-[#D4AF37]" />
                        {rating}
                    </div>
                )}

                {/* City Info - Bottom of Image */}
                <div className="absolute bottom-4 right-4 z-10">
                    <p className="text-white text-xl font-bold leading-tight">{city}</p>
                    <p className="text-gray-300 text-xs mt-1 flex items-center gap-1">
                        <FaMapMarkerAlt className="text-[14px]" />
                        {country}
                    </p>
                </div>
            </div>

            {/* Footer - Separate from image */}
            <div className="p-4 flex items-center justify-between border-t border-white/5 bg-[#292524]">
                <span className="text-xs text-gray-400">{description}</span>
                <div className="size-8 rounded-full bg-white/5 flex items-center justify-center text-white/70 group-hover:bg-[#D4AF37] group-hover:text-black transition duration-300">
                    <FaArrowLeft className="text-[18px] rotate-180" />
                </div>
            </div>
        </div>
    );
}
