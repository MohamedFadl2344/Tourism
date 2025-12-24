import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import Hero from './components/Hero';
import Features from './components/Features';
import Destinations from './components/Destinations';
import Experiences from './components/Experiences';
import Subscription from './components/Subscription';

export default function Homepage() {
    return (
        <div className="min-h-screen bg-[#0c0a09]">
            <Navbar />
            <main>
                <Hero />
                <Features />
                <Destinations />
                <Experiences />
                <Subscription />
            </main>
            <Footer />
        </div>
    );
}
