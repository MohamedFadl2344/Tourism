import { FaArrowLeft } from 'react-icons/fa';

interface ActivityCardProps {
    image: string;
    title: string;
    description: string;
}

export default function ActivityCard({ image, title, description }: ActivityCardProps) {
    return (
        <div className="relative h-[400px] rounded-xl overflow-hidden group cursor-pointer">
            {/* Background Image */}
            <img
                src={image}
                alt={title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent group-hover:from-orange-600/90 group-hover:via-black/70 transition-all duration-500" />

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
                <p className="text-white/90 mb-4 leading-relaxed">{description}</p>

                {/* Read More Button */}
                <button className="flex items-center gap-2 text-amber-400 hover:gap-4 transition-all duration-300 font-medium">
                    <span>اكتشف المزيد</span>
                    <FaArrowLeft />
                </button>
            </div>
        </div>
    );
}
