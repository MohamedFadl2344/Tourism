import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import ContactHero from './components/ContactHero';
import ContactSection from './components/ContactSection';
import SocialLinks from './components/SocialLinks';
import FAQ from './components/FAQ';

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-[#0c0a09]">
            <Navbar />
            <main>
                <ContactHero />
                <ContactSection />
                <SocialLinks />
                <FAQ />
            </main>
            <Footer />
        </div>
    );
}
