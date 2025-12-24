import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FaGem, FaCheckCircle, FaArrowLeft, FaShieldAlt } from 'react-icons/fa';
import { useFadeInUp, useStaggerSlide } from '../../../hooks/animations';

export default function Subscription() {
    const { t } = useTranslation('home');

    const features = [
        t('subscription.features.priority'),
        t('subscription.features.discount'),
        t('subscription.features.concierge'),
    ];

    // Animation hooks
    const leftContent = useFadeInUp({ duration: 0.8, delay: 0.2, threshold: 0.2 });
    const rightCard = useFadeInUp({ duration: 0.8, delay: 0.4, threshold: 0.2 });
    const paymentIcons = useStaggerSlide({
        direction: 'up',
        distance: 20,
        staggerDelay: 0.1,
        delay: 0.6,
        threshold: 0.2
    });

    return (
        <div className="py-24 bg-[#1c1917]">
            <div className="layout-container mx-auto max-w-[1200px] px-4 md:px-10">
                <div className="relative overflow-hidden rounded-2xl md:rounded-3xl bg-gradient-to-br from-[#b45309] to-amber-900 px-4 py-12 md:px-6 md:py-16 lg:px-12 shadow-2xl shadow-orange-900/20 border border-white/10">
                    {/* Background Decorations */}
                    <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                        <div className="absolute -top-[100px] -left-[100px] w-96 h-96 bg-white/10 rounded-full blur-[80px] mix-blend-overlay" />
                        <div className="absolute bottom-0 right-0 w-full h-64 bg-gradient-to-t from-black/50 to-transparent" />
                        <div
                            className="absolute right-0 top-0 w-full h-full opacity-10"
                            style={{
                                backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)',
                                backgroundSize: '30px 30px'
                            }}
                        />
                    </div>

                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Left Side - Content */}
                        <motion.div
                            ref={leftContent.ref}
                            variants={leftContent.variants}
                            initial="hidden"
                            animate={leftContent.animate}
                        >
                            {/* Badge */}
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-orange-100 text-sm font-bold mb-6 backdrop-blur-sm shadow-sm">
                                <FaGem className="text-[18px] text-[#D4AF37]" />
                                {t('subscription.badge')}
                            </div>

                            {/* Title */}
                            <h2 className="text-white text-2xl md:text-3xl lg:text-5xl font-black leading-tight mb-6">
                                {t('subscription.title')}
                            </h2>

                            {/* Description */}
                            <p className="text-orange-50 text-base md:text-lg font-medium mb-6 md:mb-8 leading-relaxed opacity-90">
                                {t('subscription.description')}
                            </p>

                            {/* Payment Methods */}
                            <div className="flex flex-col gap-4">
                                <p className="text-sm text-orange-200 font-bold flex items-center gap-2">
                                    <FaShieldAlt className="text-[18px]" />
                                    {t('subscription.paymentTitle')}
                                </p>
                                <motion.div
                                    ref={paymentIcons.ref}
                                    variants={paymentIcons.containerVariants}
                                    initial="hidden"
                                    animate={paymentIcons.animate}
                                    className="flex flex-wrap gap-3"
                                >
                                    {/* VISA */}
                                    <motion.div
                                        variants={paymentIcons.itemVariants}
                                        className="h-12 px-5 bg-white/10 rounded-xl border border-white/10 flex items-center justify-center backdrop-blur-md hover:bg-white/20 transition cursor-default"
                                    >
                                        <span className="text-white font-black text-xl italic tracking-widest font-sans">VISA</span>
                                    </motion.div>
                                    {/* Mastercard */}
                                    <motion.div
                                        variants={paymentIcons.itemVariants}
                                        className="h-12 px-5 bg-white/10 rounded-xl border border-white/10 flex items-center justify-center backdrop-blur-md hover:bg-white/20 transition cursor-default"
                                    >
                                        <div className="flex -space-x-2 rtl:space-x-reverse items-center justify-center">
                                            <div className="w-6 h-6 rounded-full bg-red-500/90 mix-blend-screen" />
                                            <div className="w-6 h-6 rounded-full bg-yellow-500/90 mix-blend-screen" />
                                        </div>
                                    </motion.div>
                                    {/* Apple Pay */}
                                    <motion.div
                                        variants={paymentIcons.itemVariants}
                                        className="h-12 px-5 bg-white/10 rounded-xl border border-white/10 flex items-center justify-center backdrop-blur-md hover:bg-white/20 transition cursor-default gap-1"
                                    >
                                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                                        </svg>
                                        <span className="text-white font-bold text-lg font-sans">Pay</span>
                                    </motion.div>
                                    {/* Bank Transfer */}
                                    <motion.div
                                        variants={paymentIcons.itemVariants}
                                        className="h-12 px-5 bg-white/10 rounded-xl border border-white/10 flex items-center justify-center backdrop-blur-md hover:bg-white/20 transition cursor-default gap-2"
                                    >
                                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 2L2 7v3h20V7l-10-5zM4 11v9h3v-9H4zm6 0v9h4v-9h-4zm6 0v9h3v-9h-3zM2 22h20v-2H2v2z" />
                                        </svg>
                                        <span className="text-white text-sm font-bold hidden sm:inline">{t('subscription.bankTransfer')}</span>
                                    </motion.div>
                                </motion.div>
                            </div>
                        </motion.div>

                        {/* Right Side - Subscription Card */}
                        <motion.div
                            ref={rightCard.ref}
                            variants={rightCard.variants}
                            initial="hidden"
                            animate={rightCard.animate}
                            className="relative"
                        >
                            <div className="absolute -inset-1 bg-gradient-to-r from-[#D4AF37] to-orange-400 rounded-2xl blur opacity-30 animate-pulse" />
                            <div className="relative bg-[#292524]/90 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl">
                                {/* Header */}
                                <div className="flex justify-between items-start mb-6">
                                    <div>
                                        <h3 className="text-white text-2xl font-bold mb-1">{t('subscription.packageTitle')}</h3>
                                        <p className="text-gray-400 text-sm">{t('subscription.packageSubtitle')}</p>
                                    </div>
                                    <div className="bg-[#D4AF37] text-black text-xs font-bold px-3 py-1 rounded-full">
                                        {t('subscription.mostPopular')}
                                    </div>
                                </div>

                                {/* Features */}
                                <div className="space-y-4 mb-8">
                                    {features.map((feature, index) => (
                                        <div key={index} className="flex items-center gap-3 text-white/90">
                                            <div className="size-6 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
                                                <FaCheckCircle className="text-[16px]" />
                                            </div>
                                            <span className="font-medium">{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* CTA Button */}
                                <button className="w-full h-14 rounded-xl bg-gradient-to-r from-[#D4AF37] to-amber-500 text-black font-bold text-lg hover:to-amber-400 transition shadow-lg flex items-center justify-center gap-2 group">
                                    <span>{t('subscription.subscribeButton')}</span>
                                    <FaArrowLeft className="rotate-180 transition-transform group-hover:translate-x-1" />
                                </button>

                                {/* Guarantee */}
                                <p className="text-center text-gray-500 text-xs mt-4">
                                    {t('subscription.guarantee')}
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
}
