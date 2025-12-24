import { useTranslation } from 'react-i18next';
import { FaShieldAlt, FaLock, FaUserShield, FaCookie, FaQuestionCircle } from 'react-icons/fa';

export default function PrivacyContent() {
    const { t } = useTranslation('privacy');

    return (
        <div className="bg-[#0c0a09] py-12">
            <div className="layout-container mx-auto max-w-[900px] px-4 md:px-10">
                <div className="bg-[#1a1614] rounded-2xl border border-white/5 p-6 md:p-10">
                    <div>
                        <div className="flex items-start gap-3 mb-4">
                            <div className="size-10 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] flex-shrink-0">
                                <FaShieldAlt className="text-lg" />
                            </div>
                            <div>
                                <h2 className="text-white text-xl font-bold flex items-center gap-2">
                                    <span className="text-[#D4AF37]">1.</span>
                                    {t('sections.collection.title')}
                                </h2>
                            </div>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed mb-4">
                            {t('sections.collection.content')}
                        </p>
                        <ul className="space-y-2">
                            {(t('sections.collection.points', { returnObjects: true }) as string[]).map((point, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-gray-400 text-sm">
                                    <span className="text-[#D4AF37] mt-1">●</span>
                                    <span className="leading-relaxed">{point}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="mt-10">
                        <div className="flex items-start gap-3 mb-4">
                            <div className="size-10 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] flex-shrink-0">
                                <FaLock className="text-lg" />
                            </div>
                            <div>
                                <h2 className="text-white text-xl font-bold flex items-center gap-2">
                                    <span className="text-[#D4AF37]">2.</span>
                                    {t('sections.usage.title')}
                                </h2>
                            </div>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed mb-4">
                            {t('sections.usage.description')}
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                            <div className="bg-[#0c0a09] rounded-lg p-4 border border-white/5">
                                <h3 className="text-white font-bold text-sm mb-3">{t('sections.usage.columns.bookings.title')}</h3>
                                <ul className="space-y-2">
                                    {(t('sections.usage.columns.bookings.items', { returnObjects: true }) as string[]).map((item, i) => (
                                        <li key={i} className="text-gray-400 text-xs leading-relaxed">{item}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="bg-[#0c0a09] rounded-lg p-4 border border-white/5">
                                <h3 className="text-white font-bold text-sm mb-3">{t('sections.usage.columns.communication.title')}</h3>
                                <ul className="space-y-2">
                                    {(t('sections.usage.columns.communication.items', { returnObjects: true }) as string[]).map((item, i) => (
                                        <li key={i} className="text-gray-400 text-xs leading-relaxed">{item}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="bg-[#0c0a09] rounded-lg p-4 border border-white/5">
                                <h3 className="text-white font-bold text-sm mb-3">{t('sections.usage.columns.improvement.title')}</h3>
                                <ul className="space-y-2">
                                    {(t('sections.usage.columns.improvement.items', { returnObjects: true }) as string[]).map((item, i) => (
                                        <li key={i} className="text-gray-400 text-xs leading-relaxed">{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="mt-10">
                        <div className="flex items-start gap-3 mb-4">
                            <div className="size-10 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] flex-shrink-0">
                                <FaUserShield className="text-lg" />
                            </div>
                            <div>
                                <h2 className="text-white text-xl font-bold flex items-center gap-2">
                                    <span className="text-[#D4AF37]">3.</span>
                                    {t('sections.protection.title')}
                                </h2>
                            </div>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed mb-4">
                            {t('sections.protection.content')}
                        </p>
                        <ul className="space-y-2">
                            {(t('sections.protection.points', { returnObjects: true }) as string[]).map((point, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-gray-400 text-sm">
                                    <span className="text-[#D4AF37] mt-1">●</span>
                                    <span className="leading-relaxed">{point}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="mt-10">
                        <div className="flex items-start gap-3 mb-4">
                            <div className="size-10 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] flex-shrink-0">
                                <FaCookie className="text-lg" />
                            </div>
                            <div>
                                <h2 className="text-white text-xl font-bold flex items-center gap-2">
                                    <span className="text-[#D4AF37]">4.</span>
                                    {t('sections.rights.title')}
                                </h2>
                            </div>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed mb-4">
                            {t('sections.rights.content')}
                        </p>
                        <div className="space-y-3 mt-4">
                            {(t('sections.rights.items', { returnObjects: true }) as Array<{ label: string, desc: string }>).map((right, idx) => (
                                <div key={idx} className="flex items-start gap-3">
                                    <span className="text-[#D4AF37] text-sm font-bold whitespace-nowrap">
                                        {right.label}:
                                    </span>
                                    <span className="text-gray-400 text-sm">{right.desc}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mt-10 pt-8 border-t border-white/5">
                        <div className="flex items-start gap-3 mb-4">
                            <div className="size-10 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] flex-shrink-0">
                                <FaQuestionCircle className="text-lg" />
                            </div>
                            <div>
                                <h2 className="text-white text-xl font-bold">
                                    {t('contact.title')}
                                </h2>
                            </div>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed mb-4">
                            {t('contact.description')}
                        </p>
                        <button className="h-11 px-8 rounded-lg bg-[#D4AF37] hover:bg-[#b8941f] text-black font-bold text-sm transition shadow-lg shadow-[#D4AF37]/25 flex items-center gap-2">
                            <span>{t('contact.button')}</span>
                            <span>→</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
