import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaUser, FaLock, FaApple, FaPlane } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';

export default function LoginPage() {
    const { t } = useTranslation('login');
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        remember: false
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Login:', formData);
    };

    return (
        <div className="min-h-screen relative flex flex-col items-center justify-center p-4 bg-gradient-to-br from-[#0a0908] via-[#1c1917] to-[#292524]">
            {/* Content Card */}
            <div className="relative z-10 w-full max-w-3xl bg-[#2a2420]/90 backdrop-blur-md rounded-2xl overflow-hidden shadow-2xl border border-white/5 my-8">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    {/* Left Side - Form */}
                    <div className="p-6 lg:p-8">
                        <div className="max-w-sm mx-auto">
                            {/* Header */}
                            <div className="text-center mb-5">
                                <h2 className="text-white text-xl font-bold mb-1.5">{t('header.title')}</h2>
                                <p className="text-gray-400 text-xs">{t('header.subtitle')}</p>
                            </div>

                            {/* Form */}
                            <form onSubmit={handleSubmit} className="space-y-3.5">
                                {/* Email */}
                                <div>
                                    <label className="text-gray-400 text-xs mb-1 block">{t('form.email.label')}</label>
                                    <div className="relative">
                                        <input
                                            type="text"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            placeholder={t('form.email.placeholder')}
                                            className="w-full h-10 bg-black/20 border border-white/10 rounded-lg px-3 pr-9 text-white text-sm placeholder:text-gray-600 focus:outline-none focus:border-[#D4AF37]/50 transition"
                                            required
                                        />
                                        <FaUser className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 text-xs" />
                                    </div>
                                </div>

                                {/* Password */}
                                <div>
                                    <label className="text-gray-400 text-xs mb-1 block">{t('form.password.label')}</label>
                                    <div className="relative">
                                        <input
                                            type="password"
                                            value={formData.password}
                                            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                            placeholder={t('form.password.placeholder')}
                                            className="w-full h-10 bg-black/20 border border-white/10 rounded-lg px-3 pr-9 text-white text-sm placeholder:text-gray-600 focus:outline-none focus:border-[#D4AF37]/50 transition"
                                            required
                                        />
                                        <FaLock className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 text-xs" />
                                    </div>
                                </div>

                                {/* Remember & Forgot */}
                                <div className="flex items-center justify-between text-xs">
                                    <label className="flex items-center gap-1.5 cursor-pointer">
                                        <input
                                            type="checkbox"
                                            checked={formData.remember}
                                            onChange={(e) => setFormData({ ...formData, remember: e.target.checked })}
                                            className="w-3 h-3 rounded border-white/10 bg-white/5 text-[#D4AF37] focus:ring-[#D4AF37]/50"
                                        />
                                        <span className="text-gray-400">{t('form.remember')}</span>
                                    </label>
                                    <Link to="/forgot-password" className="text-[#D4AF37] hover:underline">
                                        {t('form.forgotPassword')}
                                    </Link>
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    className="w-full h-10 rounded-lg bg-[#b45309] hover:bg-[#92400e] text-white font-bold text-sm transition shadow-lg"
                                >
                                    {t('form.submit')}
                                </button>

                                {/* Divider */}
                                <div className="relative my-5">
                                    <div className="absolute inset-0 flex items-center">
                                        <div className="w-full border-t border-white/10"></div>
                                    </div>
                                    <div className="relative flex justify-center text-xs">
                                        <span className="px-3 bg-[#2a2420] text-gray-400">{t('form.divider')}</span>
                                    </div>
                                </div>

                                {/* Social Login */}
                                <div className="grid grid-cols-2 gap-2.5">
                                    <button
                                        type="button"
                                        className="h-9 rounded-lg bg-black/20 border border-white/10 hover:bg-black/30 text-white font-medium text-xs transition flex items-center justify-center gap-1.5"
                                    >
                                        <FaApple className="text-base" />
                                        <span>Apple</span>
                                    </button>
                                    <button
                                        type="button"
                                        className="h-9 rounded-lg bg-black/20 border border-white/10 hover:bg-black/30 text-white font-medium text-xs transition flex items-center justify-center gap-1.5"
                                    >
                                        <FcGoogle className="text-base" />
                                        <span>Google</span>
                                    </button>
                                </div>

                                {/* Register Link */}
                                <p className="text-center text-gray-400 text-xs mt-5">
                                    {t('form.noAccount')}{' '}
                                    <Link to="/register" className="text-[#D4AF37] font-bold hover:underline">
                                        {t('form.createAccount')}
                                    </Link>
                                </p>
                            </form>
                        </div>
                    </div>

                    {/* Right Side - Hero */}
                    <div className="relative hidden lg:block bg-gradient-to-br from-[#1e3a4f] to-[#0f1f2e]">
                        <div
                            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
                            style={{
                                backgroundImage: `url('/src/assets/img/CultureHeritage/img2.webp')`,
                            }}
                        />

                        <div className="relative h-full flex flex-col items-center justify-center p-6 text-center">
                            {/* Logo */}
                            <div className="flex items-center gap-2 mb-5">
                                <div className="size-9 flex items-center justify-center bg-[#D4AF37] rounded-lg">
                                    <FaPlane className="text-base text-black" />
                                </div>
                                <div className="flex items-center gap-1">
                                    <span className="text-white text-lg font-black">سياحة</span>
                                    <span className="text-[#D4AF37] text-lg font-black">الخليج</span>
                                </div>
                            </div>

                            {/* Main Text */}
                            <h2 className="text-white text-2xl font-black mb-2.5 leading-tight">
                                {t('hero.title')}<br />
                                <span className="text-[#D4AF37]">{t('hero.titleHighlight')}</span>
                            </h2>

                            <p className="text-white/80 text-xs max-w-xs leading-relaxed">
                                {t('hero.subtitle')}
                            </p>

                            {/* Dots */}
                            <div className="flex gap-1.5 mt-5">
                                <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]"></div>
                                <div className="w-1.5 h-1.5 rounded-full bg-white/30"></div>
                                <div className="w-1.5 h-1.5 rounded-full bg-white/30"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className="text-center mt-4">
                <p className="text-gray-500 text-xs">© 2024 سياحة الخليج - جميع الحقوق محفوظة</p>
            </div>
        </div>
    );
}
