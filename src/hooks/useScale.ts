import { useRef } from 'react';
import { useInView } from 'framer-motion';

interface UseScaleOptions {
    /**
     * Initial scale value (0-1)
     * @default 0.8
     */
    initialScale?: number;
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
    /**
     * Include opacity fade with scale
     * @default true
     */
    withFade?: boolean;
}

/**
 * Custom hook for scale animations
 * Element scales from smaller to normal size
 * 
 * @example
 * const { ref, variants } = useScale({ initialScale: 0.9, duration: 0.5 });
 * <motion.div ref={ref} variants={variants} initial="hidden" animate="visible">
 */
export function useScale(options: UseScaleOptions = {}) {
    const {
        initialScale = 0.8,
        duration = 0.6,
        delay = 0,
        enabled = true,
        once = true,
        threshold = 0.01,
        withFade = true
    } = options;

    const ref = useRef(null);
    const isInView = useInView(ref, { once, amount: threshold });

    const variants = {
        hidden: {
            scale: enabled ? initialScale : 1,
            opacity: enabled && withFade ? 0 : 1,
        },
        visible: {
            scale: 1,
            opacity: 1,
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
 * Custom hook for zoom-in animation
 * Element zooms from very small to normal size
 */
export function useZoomIn(options: UseScaleOptions = {}) {
    const {
        initialScale = 0.5,
        duration = 0.7,
        delay = 0,
        enabled = true,
        once = true,
        threshold = 0.01,
        withFade = true
    } = options;

    const ref = useRef(null);
    const isInView = useInView(ref, { once, amount: threshold });

    const variants = {
        hidden: {
            scale: enabled ? initialScale : 1,
            opacity: enabled && withFade ? 0 : 1,
        },
        visible: {
            scale: 1,
            opacity: 1,
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
 * Custom hook for pulse animation
 * Element pulses (scales up slightly then back)
 */
export function usePulse(options: UseScaleOptions = {}) {
    const {
        initialScale = 1,
        duration = 0.8,
        delay = 0,
        enabled = true,
        once = false, // Pulse usually repeats
        threshold = 0.01
    } = options;

    const ref = useRef(null);
    const isInView = useInView(ref, { once, amount: threshold });

    const variants = {
        hidden: {
            scale: initialScale,
        },
        visible: {
            scale: [initialScale, 1.05, initialScale],
            transition: {
                duration: enabled ? duration : 0,
                delay: enabled ? delay : 0,
                repeat: enabled ? Infinity : 0,
                repeatDelay: 1,
                ease: 'easeInOut' as const
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
 * Custom hook for staggered scale animations
 * Use this for animating grids or groups of elements
 */
export function useStaggerScale(options: UseScaleOptions & { staggerDelay?: number } = {}) {
    const {
        initialScale = 0.8,
        duration = 0.5,
        delay = 0,
        enabled = true,
        once = true,
        threshold = 0.01,
        withFade = true,
        staggerDelay = 0.1
    } = options;

    const ref = useRef(null);
    const isInView = useInView(ref, { once, amount: threshold });

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: enabled ? staggerDelay : 0,
                delayChildren: enabled ? delay : 0
            }
        }
    };

    const itemVariants = {
        hidden: {
            scale: enabled ? initialScale : 1,
            opacity: enabled && withFade ? 0 : 1,
        },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                duration: enabled ? duration : 0,
                ease: 'easeOut' as const
            }
        }
    };

    return {
        ref,
        containerVariants,
        itemVariants,
        isInView,
        animate: enabled && isInView ? 'visible' : 'hidden'
    };
}
