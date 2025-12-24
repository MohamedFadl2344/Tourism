import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';
import { useState } from 'react';
import { useFadeInUp, useStaggerSlide } from '../../../hooks/animations';

export default function PopularQuestions() {
    const { t } = useTranslation('helpcenter');
    const questionsData = t('popularQuestions.questions', { returnObjects: true });

    // Convert to array if it's an object
    const questions = Array.isArray(questionsData)
        ? questionsData
        : Object.values(questionsData || {});

    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const header = useFadeInUp({ duration: 0.7, delay: 0.1, threshold: 0.3 });
    const cards = useStaggerSlide({ direction: 'up', distance: 20, staggerDelay: 0.1, delay: 0.3, threshold: 0.3 });

    return (
        <div className="bg-[#0c0a09] py-12">
            <div className="layout-container mx-auto max-w-[900px] px-4 md:px-10">
                {/* Section Title */}
                <motion.div
                    ref={header.ref}
                    variants={header.variants}
                    initial="hidden"
                    animate={header.animate}
                    className="text-center mb-12"
                >
                    <h2 className="text-white text-2xl md:text-3xl font-black mb-3">
                        {t('popularQuestions.title')}
                    </h2>
                    <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto">
                        {t('popularQuestions.subtitle')}
                    </p>
                </motion.div>

                {/* Questions List */}
                <motion.div
                    ref={cards.ref}
                    variants={cards.containerVariants}
                    initial="hidden"
                    animate={cards.animate}
                    className="space-y-4"
                >
                    {questions.map((item, index) => (
                        <motion.div
                            key={index}
                            variants={cards.itemVariants}
                            className="bg-[#1a1614] border border-white/5 rounded-xl overflow-hidden"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-5 text-right hover:bg-white/5 transition"
                            >
                                <span className="text-white font-bold text-base flex-1">
                                    {item.question}
                                </span>
                                <FaChevronDown
                                    className={`text-[#D4AF37] text-sm transition-transform ${openIndex === index ? 'rotate-180' : ''
                                        }`}
                                />
                            </button>
                            {openIndex === index && (
                                <div className="px-5 pb-5 text-gray-400 text-sm leading-relaxed">
                                    {item.answer}
                                </div>
                            )}
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
