import { useTranslation } from 'react-i18next';
import BlogCard from './BlogCard';

export default function BlogGrid() {
    const { t } = useTranslation('blog');
    const posts = t('posts', { returnObjects: true }) as Array<{
        category: string;
        title: string;
        excerpt: string;
        author: string;
        date: string;
    }>;

    const images = [
        '/src/assets/img/CultureHeritage/img1.webp',
        '/src/assets/img/CultureHeritage/img2.webp',
        '/src/assets/img/fence/Dubai.webp',
        '/src/assets/img/fence/Riyadh.webp',
        '/src/assets/img/fence/Doha.webp',
        '/src/assets/img/fence/Muscat.webp'
    ];

    const readTimes = ['5', '7', '6', '4', '5', '6'];

    return (
        <div className="bg-[#0c0a09] py-12">
            <div className="layout-container mx-auto max-w-[1200px] px-4 md:px-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {posts.map((post, index) => (
                        <BlogCard
                            key={index}
                            image={images[index]}
                            category={post.category}
                            title={post.title}
                            excerpt={post.excerpt}
                            author={post.author}
                            date={post.date}
                            readTime={readTimes[index]}
                        />
                    ))}
                </div>

                {/* Pagination */}
                <div className="flex items-center justify-center gap-2 mt-12">
                    <button className="size-10 rounded-lg bg-[#1a1614] border border-white/10 text-gray-400 hover:text-white hover:border-[#D4AF37]/50 transition flex items-center justify-center">
                        ←
                    </button>
                    <button className="size-10 rounded-lg bg-[#D4AF37] text-black font-bold transition flex items-center justify-center">
                        1
                    </button>
                    <button className="size-10 rounded-lg bg-[#1a1614] border border-white/10 text-gray-400 hover:text-white hover:border-[#D4AF37]/50 transition flex items-center justify-center">
                        2
                    </button>
                    <button className="size-10 rounded-lg bg-[#1a1614] border border-white/10 text-gray-400 hover:text-white hover:border-[#D4AF37]/50 transition flex items-center justify-center">
                        3
                    </button>
                    <button className="size-10 rounded-lg bg-[#1a1614] border border-white/10 text-gray-400 hover:text-white hover:border-[#D4AF37]/50 transition flex items-center justify-center">
                        →
                    </button>
                </div>
            </div>
        </div>
    );
}
