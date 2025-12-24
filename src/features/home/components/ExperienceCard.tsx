import { useTranslation } from 'react-i18next';
import { FaArrowLeft } from 'react-icons/fa';

interface ExperienceCardProps {
    image: string;
    category: string;
    title: string;
    description: string;
}

export default function ExperienceCard({ image, category, title, description }: ExperienceCardProps) {
    const { t } = useTranslation('home');

    return (
        <div className="group relative h-[400px] rounded-[2rem] overflow-hidden cursor-pointer border border-white/5 hover:border-[#D4AF37]/30 transition duration-500 shadow-2xl shadow-black/50">
            {/* Background Image - Full coverage */}
            <div
                className="absolute inset-0 bg-cover bg-center transition duration-1000 group-hover:scale-105"
                style={{ backgroundImage: `url(${image})` }}
            />

            {/* Overlay - Darker at bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0c0a09] via-black/40 to-transparent" />

            {/* Content - Bottom aligned */}
            <div className="absolute bottom-0 p-10 w-full transform translate-y-4 group-hover:translate-y-0 transition duration-500">
                {/* Category Badge */}
                <div className="bg-[#D4AF37]/20 backdrop-blur-md w-fit px-3 py-1 rounded-full text-[#D4AF37] text-xs font-bold mb-3 border border-[#D4AF37]/20">
                    {category}
                </div>

                {/* Title */}
                <h3 className="text-white text-3xl font-bold mb-3">{title}</h3>

                {/* Description - Shows on hover */}
                <p className="text-gray-200 text-sm mb-6 line-clamp-2 opacity-0 group-hover:opacity-100 transition duration-500 delay-100">
                    {description}
                </p>

                {/* CTA */}
                <div className="flex items-center gap-2 text-[#D4AF37] font-bold text-sm uppercase tracking-wide">
                    <span>{t('experiences.discoverMore')}</span>
                    <FaArrowLeft className="text-[18px] rotate-180 transition-transform group-hover:translate-x-1" />
                </div>
            </div>
        </div>
    );
}
