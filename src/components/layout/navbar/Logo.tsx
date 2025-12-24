import { FaPlane } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

export default function Logo() {
    const { t } = useTranslation('home');

    return (
        <div className="flex items-center gap-3 text-white">
            <div className="size-8 flex items-center justify-center bg-white/5 rounded-lg">
                <FaPlane className="text-[20px] text-[#D4AF37]" />
            </div>
            <h2 className="text-white text-xl font-bold leading-tight tracking-tight">
                {t('logo.tourism')} <span className="text-[#D4AF37]">{t('logo.gulf')}</span>
            </h2>
        </div>
    );
}
