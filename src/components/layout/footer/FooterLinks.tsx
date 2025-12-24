import { PATHS } from '../../../routes/paths';

const footerSections = [
    {
        title: 'روابط سريعة',
        links: [
            { label: 'الرئيسية', path: PATHS.HOME },
            { label: 'عن الموقع', path: PATHS.ABOUT },
            { label: 'الوجهات', path: PATHS.DESTINATIONS },
            { label: 'الأنشطة', path: PATHS.ACTIVITIES },
        ],
    },
    {
        title: 'الدعم',
        links: [
            { label: 'تواصل معنا', path: PATHS.CONTACT },
            { label: 'الأسئلة الشائعة', path: '#' },
            { label: 'سياسة الخصوصية', path: '#' },
            { label: 'الشروط والأحكام', path: '#' },
        ],
    },
];

export default function FooterLinks() {
    return (
        <>
            {footerSections.map((section) => (
                <div key={section.title}>
                    <h3 className="text-lg font-bold text-amber-400 mb-4">
                        {section.title}
                    </h3>
                    <ul className="space-y-2">
                        {section.links.map((link) => (
                            <li key={link.label}>
                                <a
                                    href={link.path}
                                    className="text-gray-400 hover:text-orange-600 transition-colors duration-300 text-sm"
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </>
    );
}
