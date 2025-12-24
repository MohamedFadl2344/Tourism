import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaChevronDown } from 'react-icons/fa';

export default function FAQ() {
    const { t } = useTranslation('contact');
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqKeys = ['q1', 'q2', 'q3', 'q4'];

    return (
        <div className="py-16 bg-[#0c0a09]">
            <div className="layout-container mx-auto max-w-[900px] px-4 md:px-10">
                <div className="text-center mb-12">
                    <h2 className="text-white text-3xl md:text-4xl font-bold mb-3">
                        {t('faq.title')} <span className="text-[#D4AF37]">{t('faq.titleHighlight')}</span>
                    </h2>
                    <p className="text-gray-400 text-base max-w-2xl mx-auto">
                        {t('faq.subtitle')}
                    </p>
                </div>

                <div className="space-y-4">
                    {faqKeys.map((key, index) => (
                        <div
                            key={index}
                            className="bg-[#1e293b] rounded-xl border border-white/10 overflow-hidden hover:border-[#D4AF37]/30 transition"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-5 text-right"
                            >
                                <h3 className="text-white font-bold text-base pr-4">
                                    {t(`faq.questions.${key}.question`)}
                                </h3>
                                <FaChevronDown
                                    className={`text-[#D4AF37] transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''
                                        }`}
                                />
                            </button>
                            <div
                                className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96' : 'max-h-0'
                                    }`}
                            >
                                <p className="text-gray-400 text-sm leading-relaxed px-5 pb-5">
                                    {t(`faq.questions.${key}.answer`)}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-10 text-center">
                    <p className="text-gray-400 text-sm mb-4">{t('faq.notFound')}</p>
                    <button className="h-11 px-8 rounded-lg bg-[#D4AF37] hover:bg-[#b8941f] text-black font-bold text-sm transition shadow-lg shadow-[#D4AF37]/25">
                        {t('faq.contactSupport')}
                    </button>
                </div>
            </div>
        </div>
    );
}
