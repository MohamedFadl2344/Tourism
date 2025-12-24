import { useTranslation } from 'react-i18next';
import { images } from '../../../assets/images';

interface ArtCardProps {
    image: string;
    titleKey: string;
    descriptionKey: string;
}

function ArtCard({ image, titleKey, descriptionKey }: ArtCardProps) {
    const { t } = useTranslation('culture');

    return (
        <div className="group relative h-80 rounded-2xl overflow-hidden">
            {/* Image */}
            <div
                className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition duration-700"
                style={{ backgroundImage: `url(${image})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col gap-2">
                <h3 className="text-white text-xl font-bold">{t(titleKey)}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{t(descriptionKey)}</p>
            </div>
        </div>
    );
}

export default function ArtsSection() {
    const { t } = useTranslation('culture');

    const arts = [
        {
            image: images.fence.muscat,
            titleKey: 'arts.items.museums.title',
            descriptionKey: 'arts.items.museums.description',
        },
        {
            image: images.culture.image2,
            titleKey: 'arts.items.exhibitions.title',
            descriptionKey: 'arts.items.exhibitions.description',
        },
        {
            image: images.activities.image1,
            titleKey: 'arts.items.culturalCenters.title',
            descriptionKey: 'arts.items.culturalCenters.description',
        },
        {
            image: images.activities.image2,
            titleKey: 'arts.items.traditionalArts.title',
            descriptionKey: 'arts.items.traditionalArts.description',
        },
    ];

    return (
        <div className="py-16 bg-[#0c0a09]">
            <div className="layout-container mx-auto max-w-[1200px] px-4 md:px-10">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <span className="text-[#D4AF37] font-bold text-sm tracking-wider uppercase block mb-2">
                        {t('arts.badge')}
                    </span>
                    <h2 className="text-white text-3xl md:text-4xl font-bold">
                        {t('arts.title')} <span className="text-[#D4AF37]">{t('arts.titleHighlight')}</span>
                    </h2>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {arts.map((art, index) => (
                        <ArtCard key={index} {...art} />
                    ))}
                </div>
            </div>
        </div>
    );
}
