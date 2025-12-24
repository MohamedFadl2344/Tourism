import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import arHome from '../locales/ar/home.json';
import enHome from '../locales/en/home.json';
import arTourism from '../locales/ar/tourism.json';
import enTourism from '../locales/en/tourism.json';
import arEvents from '../locales/ar/events.json';
import enEvents from '../locales/en/events.json';
import arCulture from '../locales/ar/CultureHeritage.json';
import enCulture from '../locales/en/CultureHeritage.json';
import arTripPlanning from '../locales/ar/TripPlanning.json';
import enTripPlanning from '../locales/en/TripPlanning.json';
import arContact from '../locales/ar/contact.json';
import enContact from '../locales/en/contact.json';
import arLogin from '../locales/ar/login.json';
import enLogin from '../locales/en/login.json';
import arRegister from '../locales/ar/register.json';
import enRegister from '../locales/en/register.json';
import arPrivacy from '../locales/ar/privacy.json';
import enPrivacy from '../locales/en/privacy.json';
import arTerms from '../locales/ar/terms.json';
import enTerms from '../locales/en/terms.json';
import arBlog from '../locales/ar/blog.json';
import enBlog from '../locales/en/blog.json';
import arAbout from '../locales/ar/about.json';
import enAbout from '../locales/en/about.json';
import arHelpCenter from '../locales/ar/helpcenter.json';
import enHelpCenter from '../locales/en/helpcenter.json';
import arFaq from '../locales/ar/faq.json';
import enFaq from '../locales/en/faq.json';
import arNotFound from '../locales/ar/notfound.json';
import enNotFound from '../locales/en/notfound.json';

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
    en: {
        home: enHome,
        tourism: enTourism,
        events: enEvents,
        culture: enCulture,
        tripPlanning: enTripPlanning,
        contact: enContact,
        login: enLogin,
        register: enRegister,
        privacy: enPrivacy,
        terms: enTerms,
        blog: enBlog,
        about: enAbout,
        helpcenter: enHelpCenter,
        faq: enFaq,
        notfound: enNotFound,
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

// Set initial direction
document.documentElement.dir = initialLanguage === 'ar' ? 'rtl' : 'ltr';
document.documentElement.lang = initialLanguage;

export default i18n;
