import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import CultureHero from './components/CultureHero';
import FeaturedSite from './components/FeaturedSite';
import TraditionsGrid from './components/TraditionsGrid';
import ArtsSection from './components/ArtsSection';
import CultureCTA from './components/CultureCTA';

export default function CultureHeritagePage() {
    return (
        <div className="min-h-screen bg-[#0c0a09]">
            <Navbar />
            <main>
                <CultureHero />
                <FeaturedSite />
                <TraditionsGrid />
                <ArtsSection />
                <CultureCTA />
            </main>
            <Footer />
        </div>
    );
}
