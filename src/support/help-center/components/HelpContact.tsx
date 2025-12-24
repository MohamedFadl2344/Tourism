import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import { useFadeInUp } from '../../../hooks/animations';

export default function HelpContact() {
    const { t } = useTranslation('helpcenter');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const options = t('contact.options', { returnObjects: true }) as Array<{
        title: string;
        description: string;
    }>;

    const contactCard = useFadeInUp({ duration: 0.8, delay: 0.2, threshold: 0.3 });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <div className="bg-[#0c0a09] py-12">
            <div className="layout-container mx-auto max-w-[1000px] px-4 md:px-10">
                <motion.div
                    ref={contactCard.ref}
                    variants={contactCard.variants}
                    initial="hidden"
                    animate={contactCard.animate}
                    className="bg-gradient-to-r from-[#1a1614] to-[#2a2420] rounded-3xl overflow-hidden border border-white/5 p-8 md:p-10"
                >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Contact Info */}
                        <div>
                            <h2 className="text-white text-2xl font-black mb-3">
                                {t('contact.title')}
                            </h2>
                            <p className="text-gray-400 text-sm leading-relaxed mb-6">
                                {t('contact.description')}
                            </p>

                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <div className="size-10 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37]">
                                        <FaPhone />
                                    </div>
                                    <div>
                                        <p className="text-white font-bold text-sm">{options[0].title}</p>
                                        <p className="text-gray-400 text-xs">{options[0].description}</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3">
                                    <div className="size-10 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37]">
                                        <FaEnvelope />
                                    </div>
                                    <div>
                                        <p className="text-white font-bold text-sm">{options[1].title}</p>
                                        <p className="text-gray-400 text-xs">{options[1].description}</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3">
                                    <div className="size-10 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37]">
                                        <FaMapMarkerAlt />
                                    </div>
                                    <div>
                                        <p className="text-white font-bold text-sm">{options[2].title}</p>
                                        <p className="text-gray-400 text-xs">{options[2].description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <input
                                        type="text"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        placeholder={t('contact.form.namePlaceholder')}
                                        className="w-full h-12 bg-[#0c0a09] border border-white/10 rounded-xl px-4 text-white text-sm placeholder:text-gray-600 focus:outline-none focus:border-[#D4AF37]/50 transition"
                                        required
                                    />
                                </div>

                                <div>
                                    <input
                                        type="email"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        placeholder={t('contact.form.emailPlaceholder')}
                                        className="w-full h-12 bg-[#0c0a09] border border-white/10 rounded-xl px-4 text-white text-sm placeholder:text-gray-600 focus:outline-none focus:border-[#D4AF37]/50 transition"
                                        required
                                    />
                                </div>

                                <div>
                                    <textarea
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        placeholder={t('contact.form.messagePlaceholder')}
                                        rows={4}
                                        className="w-full bg-[#0c0a09] border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-gray-600 focus:outline-none focus:border-[#D4AF37]/50 transition resize-none"
                                        required
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full h-12 rounded-xl bg-[#D4AF37] hover:bg-[#b8941f] text-black font-bold text-sm transition shadow-lg shadow-[#D4AF37]/25 flex items-center justify-center gap-2"
                                >
                                    <FaPaperPlane />
                                    <span>{t('contact.form.submitButton')}</span>
                                </button>
                            </form>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
