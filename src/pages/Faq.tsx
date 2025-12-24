import { useScrollToTop } from '../hooks/useScrollToTop';
import FaqPage from '../features/faq/Faqpage';

export default function Faq() {
    useScrollToTop();

    return <FaqPage />;
}
