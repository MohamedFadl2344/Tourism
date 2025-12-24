import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

export default function ContactInfo() {
    const contactItems = [
        {
            icon: FaMapMarkerAlt,
            title: 'العنوان الرئيسي',
            details: [
                'شارع الملك فهد، حي السليمانية',
                'الرياض، المملكة العربية السعودية'
            ],
            color: 'text-[#D4AF37]'
        },
        {
            icon: FaPhone,
            title: 'أرقام التواصل',
            details: [
                '+966 12 345 6789',
                '0000 000 00 966+'
            ],
            color: 'text-[#D4AF37]'
        },
        {
            icon: FaEnvelope,
            title: 'البريد الإلكتروني',
            details: [
                'info@gulf-tourism.com',
                'support@gulf-tourism.com'
            ],
            color: 'text-[#D4AF37]'
        }
    ];

    return (
        <div className="py-16 bg-[#0c0a09]">
            <div className="layout-container mx-auto max-w-[1200px] px-4 md:px-10">
                <div className="text-center mb-12">
                    <h2 className="text-white text-3xl md:text-4xl font-bold mb-3">
                        معلومات <span className="text-[#D4AF37]">التواصل</span>
                    </h2>
                    <p className="text-gray-400 text-base max-w-2xl mx-auto">
                        يمكنك التواصل معنا عبر إحدى الوسائل التالية أو زيارتنا مباشرة، نحن دائماً في خدمتك ونتطلع لمساعدتك
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {contactItems.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <div
                                key={index}
                                className="bg-[#1e293b] rounded-2xl p-6 border border-white/10 hover:border-[#D4AF37]/30 transition group"
                            >
                                <div className={`size-14 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center mb-4 ${item.color} group-hover:bg-[#D4AF37]/20 transition`}>
                                    <Icon className="text-2xl" />
                                </div>
                                <h3 className="text-white text-lg font-bold mb-3">{item.title}</h3>
                                <div className="space-y-2">
                                    {item.details.map((detail, idx) => (
                                        <p key={idx} className="text-gray-400 text-sm leading-relaxed">
                                            {detail}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
