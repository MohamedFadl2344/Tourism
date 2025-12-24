import { useState } from 'react';
import { useTranslation } from 'react-i18next';

interface DestinationOption {
    id: string;
    nameKey: string;
    typeKey: string;
    image: string;
}

export default function DestinationSelector() {
    const { t } = useTranslation('tripPlanning');
    const [selectedDestinations, setSelectedDestinations] = useState<string[]>([]);

    const destinations: DestinationOption[] = [
        { id: 'dubai', nameKey: 'destinationSelector.destinations.dubai.name', typeKey: 'destinationSelector.destinations.dubai.type', image: '/src/assets/img/fence/Dubai.webp' },
        { id: 'riyadh', nameKey: 'destinationSelector.destinations.riyadh.name', typeKey: 'destinationSelector.destinations.riyadh.type', image: '/src/assets/img/fence/Riyadh.webp' },
        { id: 'doha', nameKey: 'destinationSelector.destinations.doha.name', typeKey: 'destinationSelector.destinations.doha.type', image: '/src/assets/img/fence/Doha.webp' },
        { id: 'muscat', nameKey: 'destinationSelector.destinations.muscat.name', typeKey: 'destinationSelector.destinations.muscat.type', image: '/src/assets/img/fence/Muscat.webp' },
        { id: 'kuwait', nameKey: 'destinationSelector.destinations.kuwait.name', typeKey: 'destinationSelector.destinations.kuwait.type', image: '/src/assets/img/Activities/image.webp' },
        { id: 'desert', nameKey: 'destinationSelector.destinations.desert.name', typeKey: 'destinationSelector.destinations.desert.type', image: '/src/assets/img/Activities/image2.webp' },
    ];

    const toggleDestination = (id: string) => {
        setSelectedDestinations(prev =>
            prev.includes(id) ? prev.filter(d => d !== id) : [...prev, id]
        );
    };

    return (
        <div className="bg-[#1e293b] rounded-2xl p-6 border border-white/10">
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h3 className="text-white text-lg font-bold mb-1">{t('destinationSelector.title')}</h3>
                    <p className="text-gray-400 text-sm">{t('destinationSelector.subtitle')}</p>
                </div>
                <div className="bg-[#D4AF37] text-black size-8 rounded-full flex items-center justify-center font-bold text-sm">
                    {t('destinationSelector.step')}
                </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {destinations.map((dest) => (
                    <button
                        key={dest.id}
                        onClick={() => toggleDestination(dest.id)}
                        className={`relative h-32 rounded-xl overflow-hidden border-2 transition ${selectedDestinations.includes(dest.id)
                                ? 'border-[#D4AF37] shadow-[0_0_20px_rgba(212,175,55,0.3)]'
                                : 'border-white/10 hover:border-white/30'
                            }`}
                    >
                        <div
                            className="absolute inset-0 bg-cover bg-center"
                            style={{ backgroundImage: `url(${dest.image})` }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

                        {selectedDestinations.includes(dest.id) && (
                            <div className="absolute top-2 right-2 size-6 rounded-full bg-[#D4AF37] flex items-center justify-center">
                                <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                        )}

                        <div className="absolute bottom-3 right-3 left-3">
                            <p className="text-white font-bold text-base">{t(dest.nameKey)}</p>
                            <p className="text-gray-300 text-xs">{t(dest.typeKey)}</p>
                        </div>
                    </button>
                ))}
            </div>
        </div>
    );
}
