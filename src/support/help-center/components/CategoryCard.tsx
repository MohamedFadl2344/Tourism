import { FaArrowLeft } from 'react-icons/fa';
import type { IconType } from 'react-icons';

interface CategoryCardProps {
    icon: IconType;
    title: string;
    description: string;
    iconBg: string;
    iconColor: string;
}

export default function CategoryCard({ icon: Icon, title, description, iconBg, iconColor }: CategoryCardProps) {
    return (
        <div className="bg-[#1a1614] rounded-2xl p-6 border border-white/5 hover:border-[#D4AF37]/30 transition group cursor-pointer">
            {/* Icon */}
            <div className={`size-12 rounded-xl ${iconBg} flex items-center justify-center ${iconColor} mb-4`}>
                <Icon className="text-xl" />
            </div>

            {/* Content */}
            <h3 className="text-white font-bold text-lg mb-2 group-hover:text-[#D4AF37] transition">
                {title}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
                {description}
            </p>

            {/* Link */}
            <button className="flex items-center gap-2 text-[#D4AF37] hover:text-[#b8941f] font-bold text-sm transition group/btn">
                <span>اقرأ المزيد</span>
                <FaArrowLeft className="group-hover/btn:-translate-x-1 transition" />
            </button>
        </div>
    );
}
