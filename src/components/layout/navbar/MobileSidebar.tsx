import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { FaPlane, FaTimes } from 'react-icons/fa';
import { PATHS } from '../../../routes/paths';
import LanguageSwitcher from './LanguageSwitcher';

interface MobileSidebarProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function MobileSidebar({ isOpen, onClose }: MobileSidebarProps) {
    const { t } = useTranslation('home');

    const navItems = [
        { label: t('navbar.home'), path: PATHS.HOME },
        { label: t('navbar.destinations'), path: PATHS.TOURISM },
        { label: t('navbar.events'), path: PATHS.EVENTS },
        { label: t('navbar.culture'), path: PATHS.CULTURE },
        { label: t('navbar.tripPlanning'), path: PATHS.TRIP_PLANNING },
    ];

    return (
        <>
            {/* Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/70 z-40 md:hidden backdrop-blur-sm"
                    onClick={onClose}
                />
            )}

            {/* Sidebar */}
            <div
                className={`fixed top-0 right-0 h-full w-[280px] bg-[#101622] z-50 transform transition-transform duration-300 md:hidden border-l border-white/10 ${isOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-white/10">
                    <div className="flex items-center gap-2 text-white">
                        <div className="size-8 flex items-center justify-center bg-white/5 rounded-lg">
                            <FaPlane className="text-[20px] text-[#D4AF37]" />
                        </div>
                        <h2 className="text-lg font-bold">
                            سياحة <span className="text-[#D4AF37]">الخليج</span>
                        </h2>
                    </div>
                    <button
                        onClick={onClose}
                        className="text-2xl text-white hover:text-[#D4AF37] transition-colors"
                        aria-label="إغلاق القائمة"
                    >
                        <FaTimes />
                    </button>
                </div>

                {/* Navigation Links */}
                <nav className="flex flex-col p-6 gap-2">
                    {navItems.map((item, index) => (
                        <Link
                            key={item.path}
                            to={item.path}
                            onClick={onClose}
                            className={`text-white hover:text-[#D4AF37] hover:bg-white/5 px-4 py-3 rounded-lg transition-all duration-300 text-base font-medium ${index === 0 ? 'bg-white/5' : ''
                                }`}
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>

                {/* Language Switcher & Login Button */}
                <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-white/10 flex flex-col gap-3">
                    {/* Language Switcher - Mobile version */}
                    <LanguageSwitcher isMobile={true} />

                    {/* Login Button */}
                    <button className="w-full h-12 rounded-lg bg-[#b45309] hover:bg-[#92400e] text-white text-sm font-bold transition-all duration-300 shadow-lg shadow-[#b45309]/25">
                        {t('navbar.login')}
                    </button>
                </div>
            </div>
        </>
    );
}
