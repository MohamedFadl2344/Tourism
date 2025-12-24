import { useRef } from 'react';
import { useInView } from 'framer-motion';

type SlideDirection = 'left' | 'right' | 'up' | 'down';

interface UseSlideInOptions {
    /**
     * Direction from which element slides in
     * @default 'left'
     */
    direction?: SlideDirection;
    /**
     * Distance to slide in pixels
     * @default 50
     */
    distance?: number;
    /**
     * Duration of the animation in seconds
     * @default 0.7
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
 * Custom hook for slide-in animations from any direction
 * 
 * @example
 * const { ref, variants } = useSlideIn({ direction: 'left', distance: 60 });
 * <motion.div ref={ref} variants={variants} initial="hidden" animate="visible">
 */
export function useSlideIn(options: UseSlideInOptions = {}) {
    const {
        direction = 'left',
        distance = 50,
        duration = 0.7,
        delay = 0,
        enabled = true,
        once = true,
        threshold = 0.01
    } = options;

    const ref = useRef(null);
    const isInView = useInView(ref, { once, amount: threshold });

    const getInitialPosition = () => {
        if (!enabled) return { x: 0, y: 0, opacity: 1 };

        switch (direction) {
            case 'left':
                return { x: -distance, y: 0, opacity: 0 };
            case 'right':
                return { x: distance, y: 0, opacity: 0 };
            case 'up':
                return { x: 0, y: distance, opacity: 0 };
            case 'down':
                return { x: 0, y: -distance, opacity: 0 };
            default:
                return { x: -distance, y: 0, opacity: 0 };
        }
    };

    const variants = {
        hidden: getInitialPosition(),
        visible: {
            x: 0,
            y: 0,
            opacity: enabled ? 1 : 1,
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
 * Custom hook for staggered slide-in animations
 * Use this for animating lists or groups of elements
 * 
 * @example
 * const { ref, containerVariants, itemVariants } = useStaggerSlide({ 
 *   direction: 'up', 
 *   staggerDelay: 0.1 
 * });
 */
export function useStaggerSlide(options: UseSlideInOptions & { staggerDelay?: number } = {}) {
    const {
        direction = 'up',
        distance = 30,
        duration = 0.5,
        delay = 0,
        enabled = true,
        once = true,
        threshold = 0.01,
        staggerDelay = 0.1
    } = options;

    const ref = useRef(null);
    const isInView = useInView(ref, { once, amount: threshold });

    const getInitialPosition = () => {
        if (!enabled) return { x: 0, y: 0, opacity: 1 };

        switch (direction) {
            case 'left':
                return { x: -distance, y: 0, opacity: 0 };
            case 'right':
                return { x: distance, y: 0, opacity: 0 };
            case 'up':
                return { x: 0, y: distance, opacity: 0 };
            case 'down':
                return { x: 0, y: -distance, opacity: 0 };
            default:
                return { x: 0, y: distance, opacity: 0 };
        }
    };

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
        hidden: getInitialPosition(),
        visible: {
            x: 0,
            y: 0,
            opacity: enabled ? 1 : 1,
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
