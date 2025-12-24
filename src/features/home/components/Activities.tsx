import ActivityCard from './ActivityCard';

const activities = [
    {
        image: '/src/assets/img/Activities/image.webp',
        title: 'تجوّل الصحاري الخلابة',
        description: 'عش تجربة فريدة من نوعها في قلب الصحراء العربية مع أنشطة مثيرة كالتزلج على الرمال وركوب الجمال.',
    },
    {
        image: '/src/assets/img/Activities/image2.webp',
        title: 'رحلات السفاري والتخييم',
        description: 'استمتع بليلة لا تُنسى تحت النجوم مع عشاء تقليدي وعروض ترفيهية في قلب الصحراء.',
    },
];

export default function Activities() {
    return (
        <section className="py-20 bg-zinc-900">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        <span className="text-white">أنشطة مصممة</span>{' '}
                        <span className="text-amber-400">لتناسب ذوقك الرفيع</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        نوفر لك مجموعة متنوعة من الأنشطة والتجارب لإضافة المتعة والإثارة لرحلتك
                    </p>
                </div>

                {/* Activities Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {activities.map((activity, index) => (
                        <ActivityCard key={index} {...activity} />
                    ))}
                </div>
            </div>
        </section>
    );
}
