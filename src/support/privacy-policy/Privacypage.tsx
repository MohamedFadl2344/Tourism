import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import PrivacyHero from './components/PrivacyHero';
import PrivacyContent from './components/PrivacyContent';

export default function PrivacyPage() {
    return (
        <div className="min-h-screen bg-[#0c0a09]">
            <Navbar />
            <main>
                <PrivacyHero />
                <PrivacyContent />
            </main>
            <Footer />
        </div>
    );
}
