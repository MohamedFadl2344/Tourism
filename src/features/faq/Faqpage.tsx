import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import FaqHero from './components/FaqHero';
import FaqSearch from './components/FaqSearch';
import FaqList from './components/FaqList';
import FaqContact from './components/FaqContact';

export default function FaqPage() {
    return (
        <div className="min-h-screen bg-[#0c0a09]">
            <Navbar />
            <main>
                <FaqHero />
                <FaqSearch />
                <FaqList />
                <FaqContact />
            </main>
            <Footer />
        </div>
    );
}
