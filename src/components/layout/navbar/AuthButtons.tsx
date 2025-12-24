import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { PATHS } from '../../../routes/paths';
import LanguageSwitcher from './LanguageSwitcher';

export default function AuthButtons() {
    const { t } = useTranslation('home');

    return (
        <div className="flex items-center gap-3">
            <LanguageSwitcher />
            {/* Login button - hidden on mobile, shown on desktop */}
            <Link
                to={PATHS.LOGIN}
                className="hidden md:flex h-10 cursor-pointer items-center justify-center rounded-lg bg-[#b45309] px-6 text-sm font-bold text-white transition hover:bg-[#92400e] shadow-[0_0_15px_rgba(180,83,9,0.4)]"
            >
                <span>{t('navbar.login')}</span>
            </Link>
        </div>
    );
}
