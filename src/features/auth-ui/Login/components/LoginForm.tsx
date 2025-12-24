import { useState } from 'react';
import { FaUser, FaLock, FaApple } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';

export default function LoginForm() {
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
        <div className="w-full max-w-md mx-auto px-6">
            {/* Header */}
            <div className="mb-8">
                <h2 className="text-white text-2xl font-bold mb-2">مرحباً بعودتك</h2>
                <p className="text-gray-400 text-sm">الرجاء إدخال بياناتك لتسجيل الدخول</p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
                {/* Email */}
                <div>
                    <label className="text-gray-400 text-sm mb-2 block">البريد الإلكتروني / اسم المستخدم</label>
                    <div className="relative">
                        <input
                            type="text"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="name@example.com"
                            className="w-full h-12 bg-white/5 border border-white/10 rounded-lg px-4 pr-11 text-white text-sm placeholder:text-gray-600 focus:outline-none focus:border-[#D4AF37]/50 transition"
                            required
                        />
                        <FaUser className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500" />
                    </div>
                </div>

                {/* Password */}
                <div>
                    <label className="text-gray-400 text-sm mb-2 block">كلمة المرور</label>
                    <div className="relative">
                        <input
                            type="password"
                            value={formData.password}
                            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                            placeholder="••••••••"
                            className="w-full h-12 bg-white/5 border border-white/10 rounded-lg px-4 pr-11 text-white text-sm placeholder:text-gray-600 focus:outline-none focus:border-[#D4AF37]/50 transition"
                            required
                        />
                        <FaLock className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500" />
                    </div>
                </div>

                {/* Remember & Forgot */}
                <div className="flex items-center justify-between">
                    <label className="flex items-center gap-2 cursor-pointer">
                        <input
                            type="checkbox"
                            checked={formData.remember}
                            onChange={(e) => setFormData({ ...formData, remember: e.target.checked })}
                            className="w-4 h-4 rounded border-white/10 bg-white/5 text-[#D4AF37] focus:ring-[#D4AF37]/50"
                        />
                        <span className="text-gray-400 text-sm">تذكرني</span>
                    </label>
                    <Link to="/forgot-password" className="text-[#D4AF37] text-sm hover:underline">
                        هل نسيت كلمة المرور؟
                    </Link>
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full h-12 rounded-lg bg-[#D4AF37] hover:bg-[#b8941f] text-black font-bold text-sm transition shadow-lg shadow-[#D4AF37]/25"
                >
                    تسجيل الدخول
                </button>

                {/* Divider */}
                <div className="relative my-6">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-white/10"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                        <span className="px-4 bg-[#1c1917] text-gray-400">أو سجل الدخول عبر</span>
                    </div>
                </div>

                {/* Social Login */}
                <div className="grid grid-cols-2 gap-3">
                    <button
                        type="button"
                        className="h-12 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 text-white font-medium text-sm transition flex items-center justify-center gap-2"
                    >
                        <FaApple className="text-xl" />
                        <span>Apple</span>
                    </button>
                    <button
                        type="button"
                        className="h-12 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 text-white font-medium text-sm transition flex items-center justify-center gap-2"
                    >
                        <FcGoogle className="text-xl" />
                        <span>Google</span>
                    </button>
                </div>

                {/* Register Link */}
                <p className="text-center text-gray-400 text-sm mt-6">
                    ليس لديك حساب؟{' '}
                    <Link to="/register" className="text-[#D4AF37] font-bold hover:underline">
                        إنشاء حساب جديد
                    </Link>
                </p>
            </form>
        </div>
    );
}
