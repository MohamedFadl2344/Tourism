import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import HelpHero from './components/HelpHero';
import HelpSearch from './components/HelpSearch';
import HelpCategories from './components/HelpCategories';
import PopularQuestions from './components/PopularQuestions';
import HelpContact from './components/HelpContact';

export default function HelpCenterPage() {
    return (
        <div className="min-h-screen bg-[#0c0a09]">
            <Navbar />
            <main>
                <HelpHero />
                <HelpSearch />
                <HelpCategories />
                <PopularQuestions />
                <HelpContact />
            </main>
            <Footer />
        </div>
    );
}
