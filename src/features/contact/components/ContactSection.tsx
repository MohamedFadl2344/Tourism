import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaUser, FaEnvelope, FaPaperPlane, FaMapMarkerAlt, FaPhone, FaEnvelope as FaEnvelopeIcon } from 'react-icons/fa';

export default function ContactSection() {
    const { t } = useTranslation('contact');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    const contactInfo = [
        {
            icon: FaMapMarkerAlt,
            titleKey: 'contactSection.info.address.title',
            line1Key: 'contactSection.info.address.line1',
            line2Key: 'contactSection.info.address.line2'
        },
        {
            icon: FaPhone,
            titleKey: 'contactSection.info.phone.title',
            line1Key: 'contactSection.info.phone.line1',
            line2Key: 'contactSection.info.phone.line2'
        },
        {
            icon: FaEnvelopeIcon,
            titleKey: 'contactSection.info.email.title',
            line1Key: 'contactSection.info.email.line1',
            line2Key: 'contactSection.info.email.line2'
        }
    ];

    return (
        <div className="py-16 bg-[#0c0a09]">
            <div className="layout-container mx-auto max-w-[1200px] px-4 md:px-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Right Side - Contact Info & Map */}
                    <div className="space-y-6 order-2 lg:order-1">
                        {/* Contact Info */}
                        <div>
                            <h3 className="text-white text-xl font-bold mb-6">
                                {t('contactSection.info.title')} <span className="text-[#D4AF37]">{t('contactSection.info.titleHighlight')}</span>
                            </h3>
                            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                                {t('contactSection.info.subtitle')}
                            </p>

                            <div className="space-y-4">
                                {contactInfo.map((item, index) => {
                                    const Icon = item.icon;
                                    return (
                                        <div
                                            key={index}
                                            className="flex items-start gap-4 p-4 bg-[#1e293b] rounded-xl border border-white/10 hover:border-[#D4AF37]/30 transition"
                                        >
                                            <div className="size-12 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] flex-shrink-0">
                                                <Icon className="text-xl" />
                                            </div>
                                            <div>
                                                <h4 className="text-white font-bold text-sm mb-2">{t(item.titleKey)}</h4>
                                                <p className="text-gray-400 text-xs leading-relaxed">{t(item.line1Key)}</p>
                                                <p className="text-gray-400 text-xs leading-relaxed">{t(item.line2Key)}</p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Map */}
                        <div className="bg-[#1e293b] rounded-2xl overflow-hidden border border-white/10 h-[300px]">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.2!2d46.7!3d24.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDQyJzAwLjAiTiA0NsKwNDInMDAuMCJF!5e0!3m2!1sen!2ssa!4v1234567890"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition duration-500"
                            />
                        </div>
                    </div>

                    {/* Left Side - Contact Form */}
                    <div className="bg-[#1e293b] rounded-2xl p-8 border border-white/10 order-1 lg:order-2">
                        <div className="mb-8">
                            <h2 className="text-white text-2xl md:text-3xl font-bold mb-2">
                                {t('contactSection.form.title')} <span className="text-[#D4AF37]">{t('contactSection.form.titleHighlight')}</span>
                            </h2>
                            <p className="text-gray-400 text-sm">
                                {t('contactSection.form.subtitle')}
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-5">
                            {/* Name */}
                            <div>
                                <label className="text-gray-400 text-sm mb-2 block">{t('contactSection.form.name.label')}</label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        placeholder={t('contactSection.form.name.placeholder')}
                                        className="w-full h-12 bg-[#0f172a] border border-white/10 rounded-lg px-4 pr-11 text-white text-sm placeholder:text-gray-600 focus:outline-none focus:border-[#b45309]/50 transition"
                                        required
                                    />
                                    <FaUser className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500" />
                                </div>
                            </div>

                            {/* Email */}
                            <div>
                                <label className="text-gray-400 text-sm mb-2 block">{t('contactSection.form.email.label')}</label>
                                <div className="relative">
                                    <input
                                        type="email"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        placeholder={t('contactSection.form.email.placeholder')}
                                        className="w-full h-12 bg-[#0f172a] border border-white/10 rounded-lg px-4 pr-11 text-white text-sm placeholder:text-gray-600 focus:outline-none focus:border-[#b45309]/50 transition"
                                        required
                                    />
                                    <FaEnvelope className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500" />
                                </div>
                            </div>

                            {/* Subject */}
                            <div>
                                <label className="text-gray-400 text-sm mb-2 block">{t('contactSection.form.subject.label')}</label>
                                <select
                                    value={formData.subject}
                                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                    className="w-full h-12 bg-[#0f172a] border border-white/10 rounded-lg px-4 text-white text-sm focus:outline-none focus:border-[#b45309]/50 transition appearance-none"
                                    required
                                >
                                    <option value="">{t('contactSection.form.subject.placeholder')}</option>
                                    <option value="general">{t('contactSection.form.subject.options.general')}</option>
                                    <option value="booking">{t('contactSection.form.subject.options.booking')}</option>
                                    <option value="support">{t('contactSection.form.subject.options.support')}</option>
                                    <option value="complaint">{t('contactSection.form.subject.options.complaint')}</option>
                                    <option value="suggestion">{t('contactSection.form.subject.options.suggestion')}</option>
                                </select>
                            </div>

                            {/* Message */}
                            <div>
                                <label className="text-gray-400 text-sm mb-2 block">{t('contactSection.form.message.label')}</label>
                                <textarea
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    placeholder={t('contactSection.form.message.placeholder')}
                                    rows={5}
                                    className="w-full bg-[#0f172a] border border-white/10 rounded-lg p-4 text-white text-sm placeholder:text-gray-600 focus:outline-none focus:border-[#b45309]/50 transition resize-none"
                                    required
                                />
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full h-12 rounded-lg bg-[#D4AF37] hover:bg-[#b8941f] text-black font-bold text-sm transition shadow-lg shadow-[#D4AF37]/25 flex items-center justify-center gap-2"
                            >
                                <FaPaperPlane />
                                <span>{t('contactSection.form.submit')}</span>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
