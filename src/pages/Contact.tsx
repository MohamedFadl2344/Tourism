import { useScrollToTop } from '../hooks/useScrollToTop';
import ContactPage from '../features/contact/Contactpage';

export default function Contact() {
    useScrollToTop();

    return <ContactPage />;
}
