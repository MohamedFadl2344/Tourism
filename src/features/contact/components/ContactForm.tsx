import { useState } from 'react';
import { FaUser, FaEnvelope, FaPaperPlane } from 'react-icons/fa';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
        console.log('Form submitted:', formData);
    };

    return (
        <div className="py-16 bg-[#1c1917]">
            <div className="layout-container mx-auto max-w-[800px] px-4 md:px-10">
                <div className="bg-[#1e293b] rounded-2xl p-8 border border-white/10">
                    <div className="text-center mb-8">
                        <h2 className="text-white text-2xl md:text-3xl font-bold mb-3">
                            أرسل لنا <span className="text-[#D4AF37]">رسالة</span>
                        </h2>
                        <p className="text-gray-400 text-sm">
                            املأ النموذج أدناه وسنقوم بالرد عليك في أقرب وقت ممكن
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                        {/* Name */}
                        <div>
                            <label className="text-gray-400 text-sm mb-2 block">الاسم الكامل</label>
                            <div className="relative">
                                <input
                                    type="text"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    placeholder="أدخل اسمك"
                                    className="w-full h-12 bg-[#0f172a] border border-white/10 rounded-lg px-4 pr-11 text-white text-sm placeholder:text-gray-600 focus:outline-none focus:border-[#b45309]/50 transition"
                                    required
                                />
                                <FaUser className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500" />
                            </div>
                        </div>

                        {/* Email */}
                        <div>
                            <label className="text-gray-400 text-sm mb-2 block">البريد الإلكتروني</label>
                            <div className="relative">
                                <input
                                    type="email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    placeholder="example@email.com"
                                    className="w-full h-12 bg-[#0f172a] border border-white/10 rounded-lg px-4 pr-11 text-white text-sm placeholder:text-gray-600 focus:outline-none focus:border-[#b45309]/50 transition"
                                    required
                                />
                                <FaEnvelope className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500" />
                            </div>
                        </div>

                        {/* Subject */}
                        <div>
                            <label className="text-gray-400 text-sm mb-2 block">الموضوع</label>
                            <select
                                value={formData.subject}
                                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                className="w-full h-12 bg-[#0f172a] border border-white/10 rounded-lg px-4 text-white text-sm focus:outline-none focus:border-[#b45309]/50 transition appearance-none"
                                required
                            >
                                <option value="">اختر موضوع الرسالة</option>
                                <option value="general">استفسار عام</option>
                                <option value="booking">حجز رحلة</option>
                                <option value="support">دعم فني</option>
                                <option value="complaint">شكوى</option>
                                <option value="suggestion">اقتراح</option>
                            </select>
                        </div>

                        {/* Message */}
                        <div>
                            <label className="text-gray-400 text-sm mb-2 block">الرسالة</label>
                            <textarea
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                placeholder="اكتب رسالتك هنا..."
                                rows={6}
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
                            <span>إرسال الرسالة</span>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
