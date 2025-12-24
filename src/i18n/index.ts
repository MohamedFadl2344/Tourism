import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// تحميل اللغة العربية فقط في البداية (اللغة الافتراضية)
import arHome from '../locales/ar/home.json';
import arTourism from '../locales/ar/tourism.json';
import arEvents from '../locales/ar/events.json';
import arCulture from '../locales/ar/CultureHeritage.json';
import arTripPlanning from '../locales/ar/TripPlanning.json';
import arContact from '../locales/ar/contact.json';
import arLogin from '../locales/ar/login.json';
import arRegister from '../locales/ar/register.json';
import arPrivacy from '../locales/ar/privacy.json';
import arTerms from '../locales/ar/terms.json';
import arBlog from '../locales/ar/blog.json';
import arAbout from '../locales/ar/about.json';
import arHelpCenter from '../locales/ar/helpcenter.json';
import arFaq from '../locales/ar/faq.json';
import arNotFound from '../locales/ar/notfound.json';

// تحميل اللغة الإنجليزية عند الطلب فقط (lazy loading)
const loadEnglishResources = async () => {
    const [
        enHome,
        enTourism,
        enEvents,
        enCulture,
        enTripPlanning,
        enContact,
        enLogin,
        enRegister,
        enPrivacy,
        enTerms,
        enBlog,
        enAbout,
        enHelpCenter,
        enFaq,
        enNotFound,
    ] = await Promise.all([
        import('../locales/en/home.json'),
        import('../locales/en/tourism.json'),
        import('../locales/en/events.json'),
        import('../locales/en/CultureHeritage.json'),
        import('../locales/en/TripPlanning.json'),
        import('../locales/en/contact.json'),
        import('../locales/en/login.json'),
        import('../locales/en/register.json'),
        import('../locales/en/privacy.json'),
        import('../locales/en/terms.json'),
        import('../locales/en/blog.json'),
        import('../locales/en/about.json'),
        import('../locales/en/helpcenter.json'),
        import('../locales/en/faq.json'),
        import('../locales/en/notfound.json'),
    ]);

    return {
        home: enHome.default,
        tourism: enTourism.default,
        events: enEvents.default,
        culture: enCulture.default,
        tripPlanning: enTripPlanning.default,
        contact: enContact.default,
        login: enLogin.default,
        register: enRegister.default,
        privacy: enPrivacy.default,
        terms: enTerms.default,
        blog: enBlog.default,
        about: enAbout.default,
        helpcenter: enHelpCenter.default,
        faq: enFaq.default,
        notfound: enNotFound.default,
    };
};

// الموارد الأولية - العربية فقط
const resources = {
    ar: {
        home: arHome,
        tourism: arTourism,
        events: arEvents,
        culture: arCulture,
        tripPlanning: arTripPlanning,
        contact: arContact,
        login: arLogin,
        register: arRegister,
        privacy: arPrivacy,
        terms: arTerms,
        blog: arBlog,
        about: arAbout,
        helpcenter: arHelpCenter,
        faq: arFaq,
        notfound: arNotFound,
    },
};

// Get saved language from localStorage
const savedLanguage = localStorage.getItem('language-storage');
let initialLanguage = 'ar';

if (savedLanguage) {
    try {
        const parsed = JSON.parse(savedLanguage);
        initialLanguage = parsed.state?.language || 'ar';
    } catch (e) {
        console.error('Error parsing saved language:', e);
    }
}

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: initialLanguage, // Use saved language
        fallbackLng: 'ar',
        defaultNS: 'home',
        interpolation: {
            escapeValue: false,
        },
    });

// تحميل اللغة الإنجليزية إذا كانت محفوظة
if (initialLanguage === 'en') {
    loadEnglishResources().then((enResources) => {
        i18n.addResourceBundle('en', 'home', enResources.home);
        i18n.addResourceBundle('en', 'tourism', enResources.tourism);
        i18n.addResourceBundle('en', 'events', enResources.events);
        i18n.addResourceBundle('en', 'culture', enResources.culture);
        i18n.addResourceBundle('en', 'tripPlanning', enResources.tripPlanning);
        i18n.addResourceBundle('en', 'contact', enResources.contact);
        i18n.addResourceBundle('en', 'login', enResources.login);
        i18n.addResourceBundle('en', 'register', enResources.register);
        i18n.addResourceBundle('en', 'privacy', enResources.privacy);
        i18n.addResourceBundle('en', 'terms', enResources.terms);
        i18n.addResourceBundle('en', 'blog', enResources.blog);
        i18n.addResourceBundle('en', 'about', enResources.about);
        i18n.addResourceBundle('en', 'helpcenter', enResources.helpcenter);
        i18n.addResourceBundle('en', 'faq', enResources.faq);
        i18n.addResourceBundle('en', 'notfound', enResources.notfound);
    });
}

// الاستماع لتغيير اللغة وتحميل الإنجليزية عند الطلب
i18n.on('languageChanged', async (lng) => {
    if (lng === 'en' && !i18n.hasResourceBundle('en', 'home')) {
        const enResources = await loadEnglishResources();
        i18n.addResourceBundle('en', 'home', enResources.home);
        i18n.addResourceBundle('en', 'tourism', enResources.tourism);
        i18n.addResourceBundle('en', 'events', enResources.events);
        i18n.addResourceBundle('en', 'culture', enResources.culture);
        i18n.addResourceBundle('en', 'tripPlanning', enResources.tripPlanning);
        i18n.addResourceBundle('en', 'contact', enResources.contact);
        i18n.addResourceBundle('en', 'login', enResources.login);
        i18n.addResourceBundle('en', 'register', enResources.register);
        i18n.addResourceBundle('en', 'privacy', enResources.privacy);
        i18n.addResourceBundle('en', 'terms', enResources.terms);
        i18n.addResourceBundle('en', 'blog', enResources.blog);
        i18n.addResourceBundle('en', 'about', enResources.about);
        i18n.addResourceBundle('en', 'helpcenter', enResources.helpcenter);
        i18n.addResourceBundle('en', 'faq', enResources.faq);
        i18n.addResourceBundle('en', 'notfound', enResources.notfound);
    }
});

// Set initial direction
document.documentElement.dir = initialLanguage === 'ar' ? 'rtl' : 'ltr';
document.documentElement.lang = initialLanguage;

export default i18n;
