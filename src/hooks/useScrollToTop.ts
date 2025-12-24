import { useEffect } from 'react';

/**
 * Custom hook to scroll to top of page on component mount
 * Useful for page components to ensure they start at the top
 */
export function useScrollToTop() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
}
