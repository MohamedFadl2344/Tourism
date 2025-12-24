import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import FaqItem from './FaqItem';
import { useStaggerSlide } from '../../../hooks/animations';

export default function FaqList() {
    const { t } = useTranslation('faq');
    const faqs = t('faqs', { returnObjects: true }) as Array<{
        question: string;
        answer: string;
    }>;

    const cards = useStaggerSlide({ direction: 'up', distance: 20, staggerDelay: 0.1, delay: 0.2, threshold: 0.3 });

    return (
        <div className="bg-[#0c0a09] py-12">
            <div className="layout-container mx-auto max-w-[800px] px-4 md:px-10">
                <motion.div
                    ref={cards.ref}
                    variants={cards.containerVariants}
                    initial="hidden"
                    animate={cards.animate}
                    className="space-y-4"
                >
                    {faqs.map((faq, index) => (
                        <motion.div key={index} variants={cards.itemVariants}>
                            <FaqItem
                                question={faq.question}
                                answer={faq.answer}
                                number={index + 1}
                                isFirst={index === 0}
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
