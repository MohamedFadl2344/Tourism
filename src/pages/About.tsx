import { useScrollToTop } from '../hooks/useScrollToTop';
import AboutPage from '../features/about/Aboutpage';

export default function About() {
    useScrollToTop();

    return <AboutPage />;
}
