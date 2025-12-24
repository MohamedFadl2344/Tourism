import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaWallet, FaGem, FaCrown } from 'react-icons/fa';

export default function BudgetCalculator() {
    const { t, i18n } = useTranslation('tripPlanning');
    const [budget] = useState(3500);
    const [budgetType, setBudgetType] = useState<'economy' | 'standard' | 'luxury'>('standard');

    const budgetTypes = [
        { id: 'economy' as const, labelKey: 'budget.types.economy', Icon: FaWallet, color: 'text-green-400' },
        { id: 'standard' as const, labelKey: 'budget.types.standard', Icon: FaGem, color: 'text-blue-400' },
        { id: 'luxury' as const, labelKey: 'budget.types.luxury', Icon: FaCrown, color: 'text-[#D4AF37]' },
    ];

    return (
        <div className="bg-[#1e293b] rounded-2xl p-6 border border-white/10">
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h3 className="text-white text-lg font-bold mb-1">{t('budget.title')}</h3>
                    <p className="text-gray-400 text-sm">{t('budget.subtitle')}</p>
                </div>
                <div className="bg-[#D4AF37] text-black size-8 rounded-full flex items-center justify-center font-bold text-sm">
                    {t('budget.step')}
                </div>
            </div>

            {/* Budget Type Selector */}
            <div className="grid grid-cols-3 gap-3 mb-6">
                {budgetTypes.map((type) => {
                    const { Icon, color } = type;
                    return (
                        <button
                            key={type.id}
                            onClick={() => setBudgetType(type.id)}
                            className={`p-4 rounded-xl border-2 transition ${budgetType === type.id
                                    ? 'bg-[#D4AF37] border-[#D4AF37] text-black'
                                    : 'bg-[#0f172a] border-white/10 text-white hover:border-white/30'
                                }`}
                        >
                            <div className={`text-2xl mb-2 flex items-center justify-center ${budgetType === type.id ? 'text-black' : color}`}>
                                <Icon />
                            </div>
                            <div className="font-bold text-sm">{t(type.labelKey)}</div>
                        </button>
                    );
                })}
            </div>

            {/* Budget Display */}
            <div className="bg-[#0f172a] border border-white/10 rounded-lg p-6 text-center">
                <p className="text-gray-400 text-sm mb-2">{t('budget.estimatedBudget')}</p>
                <p className="text-white text-4xl font-black mb-1">
                    {budget.toLocaleString(i18n.language === 'ar' ? 'ar-SA' : 'en-US')} <span className="text-xl text-gray-400">{t('budget.currency')}</span>
                </p>
                <p className="text-gray-500 text-xs">{t('budget.includes')}</p>
            </div>
        </div>
    );
}
