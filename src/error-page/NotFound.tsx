import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FaHome, FaInfoCircle } from 'react-icons/fa';

export default function NotFound() {
    const navigate = useNavigate();
    const { t } = useTranslation('notfound');


    return (
        <div className="min-h-screen bg-gradient-to-br from-teal-950 via-gray-900 to-emerald-950 flex items-center justify-center px-4">
            <div className="text-center">
                {/* 404 Number with 3D Effect */}
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className="relative mb-8"
                >
                    <h1 className="text-[180px] md:text-[240px] font-bold leading-none">
                        <span className="bg-gradient-to-b from-teal-400 via-teal-500 to-teal-700 bg-clip-text text-transparent drop-shadow-2xl">
                            404
                        </span>
                    </h1>
                    {/* Shadow Effect */}
                    <div className="absolute inset-0 blur-3xl opacity-30">
                        <h1 className="text-[180px] md:text-[240px] font-bold leading-none text-teal-500">
                            404
                        </h1>
                    </div>
                </motion.div>

                {/* Title */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-2xl md:text-4xl font-bold text-white mb-4"
                >
                    {t('title')}
                </motion.h2>

                {/* Description */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-gray-300 text-base md:text-lg mb-12 max-w-md mx-auto leading-relaxed"
                >
                    {t('description')}
                </motion.p>

                {/* Action Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                >
                    {/* Home Button */}
                    <button
                        onClick={() => navigate('/')}
                        className="group relative px-8 py-3.5 bg-gradient-to-r from-teal-500 to-teal-600 text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/50 hover:scale-105 flex items-center gap-2 min-w-[200px] justify-center"
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            <FaHome className="text-lg" />
                            {t('homeButton')}
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-teal-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </button>

                    {/* Help Center Button */}
                    <button
                        onClick={() => navigate('/help-center')}
                        className="group relative px-8 py-3.5 bg-gray-800 text-white font-semibold rounded-lg border border-teal-700/50 overflow-hidden transition-all duration-300 hover:border-teal-600 hover:bg-gray-700 hover:scale-105 flex items-center gap-2 min-w-[200px] justify-center"
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            <FaInfoCircle className="text-lg" />
                            {t('helpButton')}
                        </span>
                    </button>
                </motion.div>
            </div>
        </div>
    );
}
