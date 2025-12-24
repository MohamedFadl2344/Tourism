// ملف مركزي لجميع الصور في المشروع
// يتم استيراد الصور هنا مرة واحدة واستخدامها في جميع المكونات

// صور المدن الرئيسية
import Dubai from './img/fence/Dubai.webp';
import Riyadh from './img/fence/Riyadh.webp';
import Doha from './img/fence/Doha.webp';
import Muscat from './img/fence/Muscat.webp';

// صور الأنشطة
import Activity1 from './img/Activities/image.webp';
import Activity2 from './img/Activities/image2.webp';

// صور التراث والثقافة
import CultureHero from './img/CultureHeritage/hero.webp';
import Culture1 from './img/CultureHeritage/img1.webp';
import Culture2 from './img/CultureHeritage/img2.webp';

// تصدير الصور بشكل منظم
export const images = {
    // صور المدن
    fence: {
        dubai: Dubai,
        riyadh: Riyadh,
        doha: Doha,
        muscat: Muscat,
    },

    // صور الأنشطة
    activities: {
        image1: Activity1,
        image2: Activity2,
    },

    // صور التراث والثقافة
    culture: {
        hero: CultureHero,
        image1: Culture1,
        image2: Culture2,
    },
};

// تصدير مباشر للاستخدام السريع
export const {
    fence,
    activities,
    culture,
} = images;
