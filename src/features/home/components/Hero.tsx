import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';
import SearchBar from './SearchBar';
import { useFadeInDown, useFadeInUp } from '../../../hooks/animations';
import heroImage from '../../../assets/img/hero/hero.webp';

export default function Hero() {
    const { t } = useTranslation('home');

    // Animation hooks
    const badge = useFadeInDown({ duration: 0.6, delay: 0.2 });
    const title = useFadeInUp({ duration: 0.7, delay: 0.4 });
    const subtitle = useFadeInUp({ duration: 0.7, delay: 0.6 });
    const searchBar = useFadeInUp({ duration: 0.7, delay: 0.8 });

    return (
        <div className="relative min-h-[600px] w-full overflow-hidden flex flex-col items-center justify-center bg-[#101622]">
            {/* Background Image */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `url(${heroImage})`,
                }}
            />

            {/* Overlays */}
            <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#101622] via-[#101622]/60 to-transparent" />
            <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#101622]/30 to-transparent" />

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center gap-6 md:gap-8 px-4 text-center max-w-4xl mx-auto pt-16 md:pt-20 pb-16 md:pb-20">
                <div className="flex flex-col gap-4">
                    {/* Badge */}
                    <motion.span
                        ref={badge.ref}
                        variants={badge.variants}
                        initial="hidden"
                        animate={badge.animate}
                        className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-4 py-1.5 text-xs font-bold text-[#D4AF37] backdrop-blur-sm self-center"
                    >
                        <FaStar className="text-[16px]" />
                        {t('hero.badge')}
                    </motion.span>

                    {/* Main Heading */}
                    <motion.h1
                        ref={title.ref}
                        variants={title.variants}
                        initial="hidden"
                        animate={title.animate}
                        className="text-white text-4xl md:text-5xl lg:text-7xl font-black leading-tight tracking-tight"
                    >
                        {t('hero.title')}{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-yellow-200">
                            {t('hero.titleHighlight')}
                        </span>
                    </motion.h1>

                    {/* Subheading */}
                    <motion.h2
                        ref={subtitle.ref}
                        variants={subtitle.variants}
                        initial="hidden"
                        animate={subtitle.animate}
                        className="text-white/90 text-base md:text-lg lg:text-xl font-medium max-w-2xl mx-auto leading-relaxed"
                    >
                        {t('hero.subtitle')}
                    </motion.h2>
                </div>

                {/* Search Bar */}
                <motion.div
                    ref={searchBar.ref}
                    variants={searchBar.variants}
                    initial="hidden"
                    animate={searchBar.animate}
                    className="w-full"
                >
                    <SearchBar />
                </motion.div>
            </div>
        </div>
    );
}
