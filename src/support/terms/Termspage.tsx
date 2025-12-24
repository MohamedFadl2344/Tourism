import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import TermsHero from './components/TermsHero';
import TermsContent from './components/TermsContent';

export default function TermsPage() {
    return (
        <div className="min-h-screen bg-[#0c0a09]">
            <Navbar />
            <main>
                <TermsHero />
                <TermsContent />
            </main>
            <Footer />
        </div>
    );
}
