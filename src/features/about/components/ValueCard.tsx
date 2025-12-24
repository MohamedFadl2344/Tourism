import type { IconType } from 'react-icons';

interface ValueCardProps {
    icon: IconType;
    title: string;
    description: string;
}

export default function ValueCard({ icon: Icon, title, description }: ValueCardProps) {
    return (
        <div className="bg-[#1a1614] rounded-2xl p-8 border border-white/5 hover:border-[#D4AF37]/30 transition text-center group">
            {/* Icon */}
            <div className="size-16 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] mx-auto mb-6 group-hover:scale-110 transition">
                <Icon className="text-3xl" />
            </div>

            {/* Title */}
            <h3 className="text-white font-black text-xl mb-3">
                {title}
            </h3>

            {/* Description */}
            <p className="text-gray-400 text-sm leading-relaxed">
                {description}
            </p>
        </div>
    );
}
