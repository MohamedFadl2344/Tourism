import { useTranslation } from 'react-i18next';
import { FaInstagram, FaYoutube, FaLinkedin, FaGlobe } from 'react-icons/fa';

export default function SocialLinks() {
    const { t } = useTranslation('contact');

    const socialLinks = [
        { icon: FaGlobe, label: 'Website', url: '#' },
        { icon: FaYoutube, label: 'YouTube', url: '#' },
        { icon: FaLinkedin, label: 'LinkedIn', url: '#' },
        { icon: FaInstagram, label: 'Instagram', url: '#' }
    ];

    return (
        <div className="py-12 bg-[#0c0a09]">
            <div className="layout-container mx-auto max-w-[1200px] px-4 md:px-10">
                <div className="text-center mb-8">
                    <h3 className="text-white text-2xl font-bold mb-2">
                        {t('social.title')} <span className="text-[#D4AF37]">{t('social.titleHighlight')}</span>
                    </h3>
                    <p className="text-gray-400 text-sm">{t('social.subtitle')}</p>
                </div>

                <div className="flex justify-center gap-4">
                    {socialLinks.map((social, index) => {
                        const Icon = social.icon;
                        return (
                            <a
                                key={index}
                                href={social.url}
                                className="size-12 rounded-full bg-[#1e293b] border border-white/10 hover:border-[#D4AF37] hover:bg-[#D4AF37]/10 flex items-center justify-center text-gray-400 hover:text-[#D4AF37] transition group"
                                aria-label={social.label}
                            >
                                <Icon className="text-xl" />
                            </a>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
