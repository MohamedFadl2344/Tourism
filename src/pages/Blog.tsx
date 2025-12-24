import { useScrollToTop } from '../hooks/useScrollToTop';
import BlogPage from '../features/blog/Blogpage';

export default function Blog() {
    useScrollToTop();

    return <BlogPage />;
}
