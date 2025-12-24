import { useRef } from 'react';
import { useInView } from 'framer-motion';

interface UseFadeInOptions {
    /**
     * Duration of the animation in seconds
     * @default 0.6
     */
    duration?: number;
    /**
     * Delay before animation starts in seconds
     * @default 0
     */
    delay?: number;
    /**
     * Enable or disable the animation
     * @default true
     */
    enabled?: boolean;
    /**
     * Trigger animation only once when element comes into view
     * @default true
     */
    once?: boolean;
    /**
     * Amount of element that needs to be visible to trigger (0-1)
     * @default 0.1
     */
    threshold?: number;
}

/**
 * Custom hook for fade-in animations
 * Returns animation variants and ref for element
 * 
 * @example
 * const { ref, variants } = useFadeIn({ duration: 0.8, delay: 0.2 });
 * <motion.div ref={ref} variants={variants} initial="hidden" animate="visible">
 */
export function useFadeIn(options: UseFadeInOptions = {}) {
    const {
        duration = 0.6,
        delay = 0,
        enabled = true,
        once = true,
        threshold = 0.01
    } = options;

    const ref = useRef(null);
    const isInView = useInView(ref, { once, amount: threshold });

    const variants = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: enabled ? 1 : 0,
            transition: {
                duration: enabled ? duration : 0,
                delay: enabled ? delay : 0,
                ease: 'easeOut' as const
            }
        }
    };

    return {
        ref,
        variants,
        isInView,
        animate: enabled && isInView ? 'visible' : 'hidden'
    };
}

/**
 * Custom hook for fade-in animation with upward movement
 * Combines opacity and Y-axis translation
 * 
 * @example
 * const { ref, variants } = useFadeInUp({ duration: 0.7, delay: 0.1 });
 */
export function useFadeInUp(options: UseFadeInOptions = {}) {
    const {
        duration = 0.6,
        delay = 0,
        enabled = true,
        once = true,
        threshold = 0.01
    } = options;

    const ref = useRef(null);
    const isInView = useInView(ref, { once, amount: threshold });

    const variants = {
        hidden: {
            opacity: 0,
            y: enabled ? 30 : 0,
        },
        visible: {
            opacity: enabled ? 1 : 1,
            y: 0,
            transition: {
                duration: enabled ? duration : 0,
                delay: enabled ? delay : 0,
                ease: 'easeOut' as const
            }
        }
    };

    return {
        ref,
        variants,
        isInView,
        animate: enabled && isInView ? 'visible' : 'hidden'
    };
}

/**
 * Custom hook for fade-in animation with downward movement
 */
export function useFadeInDown(options: UseFadeInOptions = {}) {
    const {
        duration = 0.6,
        delay = 0,
        enabled = true,
        once = true,
        threshold = 0.01
    } = options;

    const ref = useRef(null);
    const isInView = useInView(ref, { once, amount: threshold });

    const variants = {
        hidden: {
            opacity: 0,
            y: enabled ? -30 : 0,
        },
        visible: {
            opacity: enabled ? 1 : 1,
            y: 0,
            transition: {
                duration: enabled ? duration : 0,
                delay: enabled ? delay : 0,
                ease: 'easeOut' as const
            }
        }
    };

    return {
        ref,
        variants,
        isInView,
        animate: enabled && isInView ? 'visible' : 'hidden'
    };
}
