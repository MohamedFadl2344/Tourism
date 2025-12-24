import { useTranslation } from 'react-i18next';
import { PATHS } from '../../../routes/paths';

export default function NavLinks() {
    const { t } = useTranslation('home');

    const navItems = [
        { label: t('navbar.home'), path: PATHS.HOME },
        { label: t('navbar.destinations'), path: PATHS.TOURISM },
        { label: t('navbar.events'), path: PATHS.EVENTS },
        { label: t('navbar.culture'), path: PATHS.CULTURE },
        { label: t('navbar.tripPlanning'), path: PATHS.TRIP_PLANNING },
    ];

    return (
        <nav className="hidden md:flex flex-1 justify-center gap-8">
            {navItems.map((item, index) => (
                <a
                    key={item.path}
                    href={item.path}
                    className={`text-sm font-medium transition-colors ${index === 0 ? 'text-white' : 'text-white/80'
                        } hover:text-[#D4AF37]`}
                >
                    {item.label}
                </a>
            ))}
        </nav>
    );
}
