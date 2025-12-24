import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import TourismHero from './components/TourismHero';
import TourismFilters from './components/TourismFilters';
import TourismGrid from './components/TourismGrid';

export default function TourismPage() {
    return (
        <div className="min-h-screen bg-[#0c0a09]">
            <Navbar />
            <main>
                <TourismHero />
                <TourismFilters />
                <TourismGrid />
            </main>
            <Footer />
        </div>
    );
}
