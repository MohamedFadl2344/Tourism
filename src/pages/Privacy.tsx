import { useScrollToTop } from '../hooks/useScrollToTop';
import PrivacyPage from '../support/privacy-policy/Privacypage';

export default function Privacy() {
    useScrollToTop();

    return <PrivacyPage />;
}
