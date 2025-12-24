import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import AboutHero from './components/AboutHero';
import MissionVision from './components/MissionVision';
import OurValues from './components/OurValues';
import WhyChooseUs from './components/WhyChooseUs';
import WhyGulf from './components/WhyGulf';
import PopularDestinations from './components/PopularDestinations';

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-[#0c0a09]">
            <Navbar />
            <main>
                <AboutHero />
                <MissionVision />
                <OurValues />
                <WhyChooseUs />
                <WhyGulf />
                <PopularDestinations />
            </main>
            <Footer />
        </div>
    );
}
