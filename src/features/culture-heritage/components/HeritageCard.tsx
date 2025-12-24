import { useTranslation } from 'react-i18next';

interface HeritageCardProps {
    image: string;
    titleKey: string;
    descriptionKey: string;
    badgeKey?: string;
}

export default function HeritageCard({ image, titleKey, descriptionKey, badgeKey }: HeritageCardProps) {
    const { t } = useTranslation('culture');

    return (
        <div className="group relative flex flex-col gap-0 rounded-2xl bg-[#292524] border border-white/5 overflow-hidden hover:border-[#D4AF37]/40 hover:shadow-[0_0_25px_rgba(212,175,55,0.15)] transition duration-500">
            {/* Image */}
            <div className="w-full h-64 bg-gray-800 relative overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition duration-700 ease-out"
                    style={{ backgroundImage: `url(${image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#292524] via-transparent to-transparent opacity-90" />

                {/* Badge */}
                {badgeKey && (
                    <div className="absolute top-4 right-4 bg-[#D4AF37] text-black text-xs font-bold px-3 py-1.5 rounded-full">
                        {t(badgeKey)}
                    </div>
                )}
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col gap-4">
                {/* Title */}
                <h3 className="text-white text-xl font-bold leading-tight group-hover:text-[#D4AF37] transition">
                    {t(titleKey)}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                    {t(descriptionKey)}
                </p>

                {/* CTA */}
                <button className="mt-2 h-10 px-6 rounded-lg border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black font-bold text-sm transition w-fit">
                    {t('traditions.cta')}
                </button>
            </div>
        </div>
    );
}
