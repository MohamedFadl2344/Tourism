import { useTranslation } from 'react-i18next';
import HeritageCard from './HeritageCard';

export default function TraditionsGrid() {
    const { t } = useTranslation('culture');

    const traditions = [
        {
            image: '/src/assets/img/fence/Dubai.webp',
            titleKey: 'traditions.items.calligraphy.title',
            descriptionKey: 'traditions.items.calligraphy.description',
            badgeKey: 'traditions.items.calligraphy.badge',
        },
        {
            image: '/src/assets/img/fence/Riyadh.webp',
            titleKey: 'traditions.items.shipBuilding.title',
            descriptionKey: 'traditions.items.shipBuilding.description',
        },
        {
            image: '/src/assets/img/fence/Doha.webp',
            titleKey: 'traditions.items.handicrafts.title',
            descriptionKey: 'traditions.items.handicrafts.description',
            badgeKey: 'traditions.items.handicrafts.badge',
        },
    ];

    return (
        <div className="py-16 bg-[#1c1917]">
            <div className="layout-container mx-auto max-w-[1200px] px-4 md:px-10">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <span className="text-[#D4AF37] font-bold text-sm tracking-wider uppercase block mb-2">
                        {t('traditions.badge')}
                    </span>
                    <h2 className="text-white text-3xl md:text-4xl font-bold">
                        {t('traditions.title')} <span className="text-[#D4AF37]">{t('traditions.titleHighlight')}</span>
                    </h2>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {traditions.map((tradition, index) => (
                        <HeritageCard key={index} {...tradition} />
                    ))}
                </div>
            </div>
        </div>
    );
}
