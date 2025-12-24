import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaShoppingBag, FaMountain, FaLandmark, FaUmbrellaBeach, FaMosque, FaTheaterMasks } from 'react-icons/fa';

interface Interest {
    id: string;
    labelKey: string;
    Icon: React.ComponentType;
}

export default function InterestsSelector() {
    const { t } = useTranslation('tripPlanning');
    const [selectedInterests, setSelectedInterests] = useState<string[]>([]);

    const interests: Interest[] = [
        { id: 'shopping', labelKey: 'interests.items.shopping', Icon: FaShoppingBag },
        { id: 'tours', labelKey: 'interests.items.tours', Icon: FaMountain },
        { id: 'museums', labelKey: 'interests.items.museums', Icon: FaLandmark },
        { id: 'beaches', labelKey: 'interests.items.beaches', Icon: FaUmbrellaBeach },
        { id: 'heritage', labelKey: 'interests.items.heritage', Icon: FaMosque },
        { id: 'entertainment', labelKey: 'interests.items.entertainment', Icon: FaTheaterMasks },
    ];

    const toggleInterest = (id: string) => {
        setSelectedInterests(prev =>
            prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
        );
    };

    return (
        <div className="bg-[#1e293b] rounded-2xl p-6 border border-white/10">
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h3 className="text-white text-lg font-bold mb-1">{t('interests.title')}</h3>
                    <p className="text-gray-400 text-sm">{t('interests.subtitle')}</p>
                </div>
                <div className="bg-[#D4AF37] text-black size-8 rounded-full flex items-center justify-center font-bold text-sm">
                    {t('interests.step')}
                </div>
            </div>

            <div className="flex flex-wrap gap-3">
                {interests.map((interest) => {
                    const { Icon } = interest;
                    return (
                        <button
                            key={interest.id}
                            onClick={() => toggleInterest(interest.id)}
                            className={`px-4 py-2.5 rounded-lg border-2 transition font-bold text-sm flex items-center gap-2 ${selectedInterests.includes(interest.id)
                                    ? 'bg-[#D4AF37] border-[#D4AF37] text-black'
                                    : 'bg-[#0f172a] border-white/10 text-white hover:border-white/30'
                                }`}
                        >
                            <Icon />
                            <span>{t(interest.labelKey)}</span>
                        </button>
                    );
                })}
            </div>
        </div>
    );
}
