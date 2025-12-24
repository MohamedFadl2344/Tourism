import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import BlogHero from './components/BlogHero';
import FeaturedPost from './components/FeaturedPost';
import BlogFilters from './components/BlogFilters';
import BlogGrid from './components/BlogGrid';
import Newsletter from './components/Newsletter';

export default function BlogPage() {
    return (
        <div className="min-h-screen bg-[#0c0a09]">
            <Navbar />
            <main>
                <BlogHero />
                <FeaturedPost />
                <BlogFilters />
                <BlogGrid />
                <Newsletter />
            </main>
            <Footer />
        </div>
    );
}
