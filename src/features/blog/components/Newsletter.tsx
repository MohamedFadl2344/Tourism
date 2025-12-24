import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaEnvelope } from 'react-icons/fa';

export default function Newsletter() {
    const { t } = useTranslation('blog');
    const [email, setEmail] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Subscribe:', email);
        setEmail('');
    };

    return (
        <div className="bg-[#0c0a09] py-12">
            <div className="layout-container mx-auto max-w-[1200px] px-4 md:px-10">
                <div className="bg-gradient-to-r from-[#b45309] to-[#92400e] rounded-3xl p-8 md:p-12 text-center">
                    {/* Icon */}
                    <div className="size-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-6">
                        <FaEnvelope className="text-3xl text-white" />
                    </div>

                    {/* Title */}
                    <h2 className="text-white text-2xl md:text-3xl font-black mb-3">
                        {t('newsletter.title')}
                    </h2>

                    {/* Subtitle */}
                    <p className="text-white/80 text-sm md:text-base max-w-2xl mx-auto mb-8">
                        {t('newsletter.subtitle')}
                    </p>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                        <div className="flex flex-col sm:flex-row gap-3">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder={t('newsletter.emailPlaceholder')}
                                className="flex-1 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 text-white text-sm placeholder:text-white/60 focus:outline-none focus:border-white/40 transition"
                                required
                            />
                            <button
                                type="submit"
                                className="h-12 px-8 rounded-xl bg-white hover:bg-gray-100 text-[#b45309] font-bold text-sm transition shadow-lg whitespace-nowrap"
                            >
                                {t('newsletter.subscribeButton')}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
