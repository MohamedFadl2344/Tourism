import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { FaPlane } from 'react-icons/fa';
import { PATHS } from '../../routes/paths';

export default function Footer() {
    const { t } = useTranslation('home');
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-black border-t border-white/10 pt-12 md:pt-16 pb-8">
            <div className="layout-container mx-auto max-w-[1200px] px-4 md:px-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-8 md:mb-12">
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-2 text-white">
                            <div className="size-8 flex items-center justify-center bg-white/5 rounded-lg border border-white/10">
                                <FaPlane className="text-[24px] text-[#D4AF37]" />
                            </div>
                            <h2 className="text-xl font-bold">
                                {t('logo.tourism')} <span className="text-[#D4AF37]">{t('logo.gulf')}</span>
                            </h2>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            {t('footer.description')}
                        </p>
                        <div className="flex gap-4 mt-2">
                            <a
                                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#D4AF37] hover:border-[#D4AF37]/30 transition"
                                href="#"
                                aria-label="Website"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                                </svg>
                            </a>
                            <a
                                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#D4AF37] hover:border-[#D4AF37]/30 transition"
                                href="#"
                                aria-label="Instagram"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
                            </a>
                            <a
                                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#D4AF37] hover:border-[#D4AF37]/30 transition"
                                href="#"
                                aria-label="Email"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-white font-bold mb-6">{t('footer.quickLinks.title')}</h3>
                        <ul className="flex flex-col gap-3">
                            <li><Link className="text-gray-400 hover:text-[#D4AF37] transition text-sm" to={PATHS.ABOUT}>{t('footer.quickLinks.aboutGulf')}</Link></li>
                            <li><Link className="text-gray-400 hover:text-[#D4AF37] transition text-sm" to={PATHS.TOURISM}>{t('footer.quickLinks.destinations')}</Link></li>
                            <li><Link className="text-gray-400 hover:text-[#D4AF37] transition text-sm" to={PATHS.BLOG}>{t('footer.quickLinks.blog')}</Link></li>
                            <li><Link className="text-gray-400 hover:text-[#D4AF37] transition text-sm" to={PATHS.FAQ}>{t('footer.quickLinks.faq')}</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-bold mb-6">{t('footer.support.title')}</h3>
                        <ul className="flex flex-col gap-3">
                            <li><Link className="text-gray-400 hover:text-[#D4AF37] transition text-sm" to={PATHS.CONTACT}>{t('footer.support.contact')}</Link></li>
                            <li><Link className="text-gray-400 hover:text-[#D4AF37] transition text-sm" to={PATHS.PRIVACY}>{t('footer.support.privacy')}</Link></li>
                            <li><Link className="text-gray-400 hover:text-[#D4AF37] transition text-sm" to={PATHS.TERMS}>{t('footer.support.terms')}</Link></li>
                            <li><Link className="text-gray-400 hover:text-[#D4AF37] transition text-sm" to={PATHS.HELP_CENTER}>{t('footer.support.help')}</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 text-center">
                    <p className="text-gray-600 text-sm">
                        © {currentYear} {t('footer.copyright')}
                    </p>
                </div>
            </div>
        </footer>
    );
}
