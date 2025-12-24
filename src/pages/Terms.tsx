import { useScrollToTop } from '../hooks/useScrollToTop';
import TermsPage from '../support/terms/Termspage';

export default function Terms() {
    useScrollToTop();

    return <TermsPage />;
}
