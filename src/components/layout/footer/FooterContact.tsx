import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const contactInfo = [
    { icon: FaPhone, text: '+966 50 123 4567' },
    { icon: FaEnvelope, text: 'info@tourism.com' },
    { icon: FaMapMarkerAlt, text: 'الرياض، المملكة العربية السعودية' },
];

const socialLinks = [
    { icon: FaFacebook, url: '#', label: 'Facebook' },
    { icon: FaTwitter, url: '#', label: 'Twitter' },
    { icon: FaInstagram, url: '#', label: 'Instagram' },
];

export default function FooterContact() {
    return (
        <div>
            <h3 className="text-lg font-bold text-amber-400 mb-4">
                تواصل معنا
            </h3>
            <ul className="space-y-3 mb-6">
                {contactInfo.map((item, index) => (
                    <li key={index} className="flex items-center gap-3 text-gray-400 text-sm">
                        <item.icon className="text-orange-600" />
                        <span>{item.text}</span>
                    </li>
                ))}
            </ul>

            {/* Social Links */}
            <div className="flex items-center gap-4">
                {socialLinks.map((social) => (
                    <a
                        key={social.label}
                        href={social.url}
                        aria-label={social.label}
                        className="w-10 h-10 flex items-center justify-center rounded-full bg-zinc-900 hover:bg-orange-600 text-white transition-all duration-300"
                    >
                        <social.icon />
                    </a>
                ))}
            </div>
        </div>
    );
}
