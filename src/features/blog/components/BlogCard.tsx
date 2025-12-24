import { useTranslation } from 'react-i18next';
import { FaCalendar, FaUser, FaArrowLeft } from 'react-icons/fa';

interface BlogCardProps {
    image: string;
    category: string;
    title: string;
    excerpt: string;
    author: string;
    date: string;
    readTime: string;
}

export default function BlogCard({ image, category, title, excerpt, author, date, readTime }: BlogCardProps) {
    const { t } = useTranslation('blog');

    return (
        <div className="bg-[#1a1614] rounded-2xl overflow-hidden border border-white/5 hover:border-[#D4AF37]/30 transition group">
            {/* Image */}
            <div className="relative h-56 overflow-hidden">
                <div
                    className="w-full h-full bg-cover bg-center group-hover:scale-110 transition duration-500"
                    style={{ backgroundImage: `url('${image}')` }}
                />
                <span className="absolute top-4 right-4 text-[#D4AF37] text-xs font-bold bg-black/70 backdrop-blur-sm px-3 py-1.5 rounded-full border border-[#D4AF37]/30">
                    {category}
                </span>
            </div>

            {/* Content */}
            <div className="p-6">
                {/* Meta */}
                <div className="flex items-center gap-4 mb-3 text-gray-500 text-xs">
                    <div className="flex items-center gap-1.5">
                        <FaCalendar className="text-[#D4AF37]" />
                        <span>{date}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <FaUser className="text-[#D4AF37]" />
                        <span>{author}</span>
                    </div>
                </div>

                {/* Title */}
                <h3 className="text-white text-lg font-bold mb-3 leading-tight line-clamp-2 group-hover:text-[#D4AF37] transition">
                    {title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-2">
                    {excerpt}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-white/5">
                    <span className="text-gray-500 text-xs">{readTime} {t('card.readTime')}</span>
                    <button className="flex items-center gap-2 text-[#D4AF37] hover:text-[#b8941f] font-bold text-sm transition group/btn">
                        <span>{t('card.readMore')}</span>
                        <FaArrowLeft className="group-hover/btn:-translate-x-1 transition" />
                    </button>
                </div>
            </div>
        </div>
    );
}
