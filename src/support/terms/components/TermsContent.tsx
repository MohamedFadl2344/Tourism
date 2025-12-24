import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaInfoCircle, FaUserCheck, FaShoppingCart, FaUndo, FaShieldAlt } from 'react-icons/fa';
import { PATHS } from '../../../routes/paths';
import { Link } from 'react-router-dom';

export default function TermsContent() {
    const { t } = useTranslation('terms');
    const [activeSection, setActiveSection] = useState('intro');

    const sections = [
        { id: 'intro', icon: FaInfoCircle, number: '1' },
        { id: 'rights', icon: FaUserCheck, number: '2' },
        { id: 'booking', icon: FaShoppingCart, number: '3' },
        { id: 'refund', icon: FaUndo, number: '4' },
        { id: 'liability', icon: FaShieldAlt, number: '5' }
    ];

    const scrollToSection = (id: string) => {
        setActiveSection(id);
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <div className="bg-[#0c0a09] py-12">
            <div className="layout-container mx-auto max-w-[1200px] px-4 md:px-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Sidebar Navigation */}
                    <div className="lg:col-span-3">
                        <div className="bg-[#1a1614] rounded-2xl border border-white/5 p-6 sticky top-24">
                            <h3 className="text-white font-bold text-sm mb-4">{t('sidebar.title')}</h3>
                            <nav className="space-y-2">
                                {sections.map((section) => (
                                    <button
                                        key={section.id}
                                        onClick={() => scrollToSection(section.id)}
                                        className={`w-full text-right px-3 py-2 rounded-lg text-sm transition ${activeSection === section.id
                                                ? 'bg-[#D4AF37]/10 text-[#D4AF37] font-bold'
                                                : 'text-gray-400 hover:text-white hover:bg-white/5'
                                            }`}
                                    >
                                        {section.number}. {t(`sections.${section.id}.title`)}
                                    </button>
                                ))}
                            </nav>

                            {/* Quick Links */}
                            <div className="mt-8 pt-6 border-t border-white/5">
                                <h4 className="text-white font-bold text-xs mb-3">{t('sidebar.quickLinks.title')}</h4>
                                <div className="space-y-2">
                                    <Link to={PATHS.PRIVACY} className="block text-gray-400 hover:text-[#D4AF37] text-xs transition">
                                        {t('sidebar.quickLinks.privacy')}
                                    </Link>
                                    <Link to={PATHS.CONTACT} className="block text-gray-400 hover:text-[#D4AF37] text-xs transition">
                                        {t('sidebar.quickLinks.contact')}
                                    </Link>
                                    <a href="#" className="block text-gray-400 hover:text-[#D4AF37] text-xs transition">
                                        {t('sidebar.quickLinks.faq')}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="lg:col-span-9">
                        <div className="bg-[#1a1614] rounded-2xl border border-white/5 p-6 md:p-10">
                            {/* Section 1: Intro */}
                            <div id="intro">
                                <div className="flex items-start gap-3 mb-6">
                                    <div className="size-12 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] flex-shrink-0">
                                        <FaInfoCircle className="text-xl" />
                                    </div>
                                    <div>
                                        <h2 className="text-white text-2xl font-black flex items-center gap-2">
                                            <span className="text-[#D4AF37]">1.</span>
                                            {t('sections.intro.title')}
                                        </h2>
                                    </div>
                                </div>
                                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                                    {t('sections.intro.content')}
                                </p>
                                <ul className="space-y-3">
                                    {(t('sections.intro.points', { returnObjects: true }) as string[]).map((point, idx) => (
                                        <li key={idx} className="flex items-start gap-3 text-gray-400 text-sm">
                                            <span className="text-[#D4AF37] mt-1 text-lg">●</span>
                                            <span className="leading-relaxed">{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Section 2: Rights */}
                            <div id="rights" className="mt-12 pt-8 border-t border-white/5">
                                <div className="flex items-start gap-3 mb-6">
                                    <div className="size-12 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] flex-shrink-0">
                                        <FaUserCheck className="text-xl" />
                                    </div>
                                    <div>
                                        <h2 className="text-white text-2xl font-black flex items-center gap-2">
                                            <span className="text-[#D4AF37]">2.</span>
                                            {t('sections.rights.title')}
                                        </h2>
                                    </div>
                                </div>
                                <div className="space-y-4 mt-6">
                                    {(t('sections.rights.subsections', { returnObjects: true }) as Array<{ title: string, content: string }>).map((sub, idx) => (
                                        <div key={idx} className="bg-[#0c0a09] rounded-xl p-5 border border-white/5">
                                            <h3 className="text-white font-bold text-base mb-3">{sub.title}</h3>
                                            <p className="text-gray-400 text-sm leading-relaxed">{sub.content}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Section 3: Booking */}
                            <div id="booking" className="mt-12 pt-8 border-t border-white/5">
                                <div className="flex items-start gap-3 mb-6">
                                    <div className="size-12 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] flex-shrink-0">
                                        <FaShoppingCart className="text-xl" />
                                    </div>
                                    <div>
                                        <h2 className="text-white text-2xl font-black flex items-center gap-2">
                                            <span className="text-[#D4AF37]">3.</span>
                                            {t('sections.booking.title')}
                                        </h2>
                                    </div>
                                </div>
                                <ul className="space-y-3">
                                    {(t('sections.booking.points', { returnObjects: true }) as string[]).map((point, idx) => (
                                        <li key={idx} className="flex items-start gap-3 text-gray-400 text-sm">
                                            <span className="text-[#D4AF37] mt-1 text-lg">●</span>
                                            <span className="leading-relaxed">{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Section 4: Refund */}
                            <div id="refund" className="mt-12 pt-8 border-t border-white/5">
                                <div className="flex items-start gap-3 mb-6">
                                    <div className="size-12 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] flex-shrink-0">
                                        <FaUndo className="text-xl" />
                                    </div>
                                    <div>
                                        <h2 className="text-white text-2xl font-black flex items-center gap-2">
                                            <span className="text-[#D4AF37]">4.</span>
                                            {t('sections.refund.title')}
                                        </h2>
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-6">
                                    <div className="bg-[#0c0a09] rounded-xl p-5 border border-white/5">
                                        <div className="flex items-center gap-3 mb-3">
                                            <span className="text-2xl">⚠️</span>
                                            <h3 className="text-white font-bold text-base">{t('sections.refund.columns.cancellation.title')}</h3>
                                        </div>
                                        <p className="text-gray-400 text-sm leading-relaxed">{t('sections.refund.columns.cancellation.content')}</p>
                                    </div>
                                    <div className="bg-[#0c0a09] rounded-xl p-5 border border-white/5">
                                        <div className="flex items-center gap-3 mb-3">
                                            <span className="text-2xl">💰</span>
                                            <h3 className="text-white font-bold text-base">{t('sections.refund.columns.refundProcess.title')}</h3>
                                        </div>
                                        <p className="text-gray-400 text-sm leading-relaxed">{t('sections.refund.columns.refundProcess.content')}</p>
                                    </div>
                                </div>
                                <p className="text-gray-500 text-xs mt-4 italic">{t('sections.refund.note')}</p>
                            </div>

                            {/* Section 5: Liability */}
                            <div id="liability" className="mt-12 pt-8 border-t border-white/5">
                                <div className="flex items-start gap-3 mb-6">
                                    <div className="size-12 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] flex-shrink-0">
                                        <FaShieldAlt className="text-xl" />
                                    </div>
                                    <div>
                                        <h2 className="text-white text-2xl font-black flex items-center gap-2">
                                            <span className="text-[#D4AF37]">5.</span>
                                            {t('sections.liability.title')}
                                        </h2>
                                    </div>
                                </div>
                                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                                    {t('sections.liability.content')}
                                </p>
                                <ul className="space-y-3">
                                    {(t('sections.liability.points', { returnObjects: true }) as string[]).map((point, idx) => (
                                        <li key={idx} className="flex items-start gap-3 text-gray-400 text-sm">
                                            <span className="text-[#D4AF37] mt-1 text-lg">●</span>
                                            <span className="leading-relaxed">{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Contact Section */}
                            <div className="mt-12 pt-8 border-t border-white/5">
                                <h2 className="text-white text-2xl font-black mb-4">
                                    {t('contact.title')}
                                </h2>
                                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                                    {t('contact.description')}
                                </p>
                                <button className="h-12 px-8 rounded-xl bg-[#D4AF37] hover:bg-[#b8941f] text-black font-bold text-sm transition shadow-lg shadow-[#D4AF37]/25 flex items-center gap-2">
                                    <span>{t('contact.button')}</span>
                                    <span>→</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
