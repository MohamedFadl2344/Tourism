import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useFadeInDown, useFadeInUp } from '../../../hooks/animations';
import heroImage from '../../../assets/img/Events/hero.webp';

export default function EventsHero() {
    const { t } = useTranslation('events');

    const badge = useFadeInDown({ duration: 0.6, delay: 0.1, threshold: 0.3 });
    const title = useFadeInUp({ duration: 0.7, delay: 0.3, threshold: 0.3 });
    const subtitle = useFadeInUp({ duration: 0.7, delay: 0.5, threshold: 0.3 });

    return (
        <div className="relative h-[500px] w-full overflow-hidden flex flex-col items-center justify-center bg-[#101622]">
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
            <div className="relative z-10 flex flex-col items-center gap-4 px-4 text-center max-w-4xl mx-auto pb-20">
                {/* Badge */}
                <motion.span
                    ref={badge.ref}
                    variants={badge.variants}
                    initial="hidden"
                    animate={badge.animate}
                    className="text-[#D4AF37] font-bold text-sm tracking-wider uppercase"
                >
                    {t('hero.badge')}
                </motion.span>

                {/* Main Heading */}
                <motion.h1
                    ref={title.ref}
                    variants={title.variants}
                    initial="hidden"
                    animate={title.animate}
                    className="text-white text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight"
                >
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-yellow-200">
                        {t('hero.title')}
                    </span>
                </motion.h1>

                {/* Subheading */}
                <motion.p
                    ref={subtitle.ref}
                    variants={subtitle.variants}
                    initial="hidden"
                    animate={subtitle.animate}
                    className="text-white/90 text-base md:text-lg font-medium max-w-2xl mx-auto leading-relaxed"
                >
                    {t('hero.subtitle')}
                </motion.p>
            </div>
        </div>
    );
}
