import type { IconType } from 'react-icons';

interface FeatureCardProps {
    icon: IconType;
    title: string;
    description: string;
    iconColor: string;
    bgColor: string;
    borderColor: string;
}

export default function FeatureCard({ icon: Icon, title, description, iconColor, bgColor, borderColor }: FeatureCardProps) {
    return (
        <div className="flex items-start gap-4 p-5 rounded-2xl hover:bg-white/5 transition duration-300 border border-transparent hover:border-[#D4AF37]/10">
            <div className={`size-14 rounded-full ${bgColor} flex items-center justify-center shrink-0 border ${borderColor}`}>
                <Icon className={`text-[28px] ${iconColor}`} />
            </div>
            <div>
                <h3 className="text-white text-lg font-bold mb-2">{title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
            </div>
        </div>
    );
}
