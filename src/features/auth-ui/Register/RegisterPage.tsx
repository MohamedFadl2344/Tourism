import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaUser, FaEnvelope, FaLock, FaCheckCircle, FaApple, FaPlane } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import cultureImage from '../../../assets/img/CultureHeritage/img2.webp';

export default function RegisterPage() {
    const { t } = useTranslation('register');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        agree: false
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Register:', formData);
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
                            <form onSubmit={handleSubmit} className="space-y-3">
                                {/* Name */}
                                <div>
                                    <label className="text-gray-400 text-xs mb-1 block">{t('form.name.label')}</label>
                                    <div className="relative">
                                        <input
                                            type="text"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            placeholder={t('form.name.placeholder')}
                                            className="w-full h-10 bg-black/20 border border-white/10 rounded-lg px-3 pr-9 text-white text-sm placeholder:text-gray-600 focus:outline-none focus:border-[#D4AF37]/50 transition"
                                            required
                                        />
                                        <FaUser className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 text-xs" />
                                    </div>
                                </div>

                                {/* Email */}
                                <div>
                                    <label className="text-gray-400 text-xs mb-1 block">{t('form.email.label')}</label>
                                    <div className="relative">
                                        <input
                                            type="email"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            placeholder={t('form.email.placeholder')}
                                            className="w-full h-10 bg-black/20 border border-white/10 rounded-lg px-3 pr-9 text-white text-sm placeholder:text-gray-600 focus:outline-none focus:border-[#D4AF37]/50 transition"
                                            required
                                        />
                                        <FaEnvelope className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 text-xs" />
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

                                {/* Confirm Password */}
                                <div>
                                    <label className="text-gray-400 text-xs mb-1 block">{t('form.confirmPassword.label')}</label>
                                    <div className="relative">
                                        <input
                                            type="password"
                                            value={formData.confirmPassword}
                                            onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                                            placeholder={t('form.confirmPassword.placeholder')}
                                            className="w-full h-10 bg-black/20 border border-white/10 rounded-lg px-3 pr-9 text-white text-sm placeholder:text-gray-600 focus:outline-none focus:border-[#D4AF37]/50 transition"
                                            required
                                        />
                                        <FaCheckCircle className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 text-xs" />
                                    </div>
                                </div>

                                {/* Terms Agreement */}
                                <div className="flex items-center gap-1.5 pt-1">
                                    <input
                                        type="checkbox"
                                        checked={formData.agree}
                                        onChange={(e) => setFormData({ ...formData, agree: e.target.checked })}
                                        className="w-3 h-3 rounded border-white/10 bg-white/5 text-[#D4AF37] focus:ring-[#D4AF37]/50"
                                        required
                                    />
                                    <label className="text-gray-400 text-xs">
                                        {t('form.agree')}
                                    </label>
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    className="w-full h-10 rounded-lg bg-[#b45309] hover:bg-[#92400e] text-white font-bold text-sm transition shadow-lg mt-3"
                                >
                                    {t('form.submit')}
                                </button>

                                {/* Divider */}
                                <div className="relative my-3.5">
                                    <div className="absolute inset-0 flex items-center">
                                        <div className="w-full border-t border-white/10"></div>
                                    </div>
                                    <div className="relative flex justify-center text-xs">
                                        <span className="px-2 bg-[#2a2420] text-gray-400">{t('form.divider')}</span>
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

                                {/* Login Link */}
                                <p className="text-center text-gray-400 text-xs mt-3">
                                    {t('form.hasAccount')}{' '}
                                    <Link to="/login" className="text-[#D4AF37] font-bold hover:underline">
                                        {t('form.login')}
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
                                backgroundImage: `url(${cultureImage})`,
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
                                {t('hero.title')}
                            </h2>

                            <p className="text-white/80 text-xs max-w-xs leading-relaxed">
                                {t('hero.subtitle')}
                            </p>

                            {/* Dots */}
                            <div className="flex gap-1.5 mt-5">
                                <div className="w-1.5 h-1.5 rounded-full bg-white/30"></div>
                                <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]"></div>
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
