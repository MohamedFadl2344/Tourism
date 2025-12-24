import { useScrollToTop } from '../hooks/useScrollToTop';
import HelpCenterPage from '../support/help-center/Helpcenterpage';

export default function HelpCenter() {
    useScrollToTop();

    return <HelpCenterPage />;
}
