import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import EventsHero from './components/EventsHero';
import EventsFilters from './components/EventsFilters';
import EventsGrid from './components/EventsGrid';

export default function EventsPage() {
    return (
        <div className="min-h-screen bg-[#0c0a09]">
            <Navbar />
            <main>
                <EventsHero />
                <EventsFilters />
                <EventsGrid />
            </main>
            <Footer />
        </div>
    );
}
