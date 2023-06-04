import { Variants } from 'framer-motion';

export const FadeDown: Variants = {
  hide: {
    opacity: 0,
    y: -100,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
}

export const FadeRight: Variants = {
    hide: {
        opacity: 0,
        x: -100,
    },
    show: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.7,
        },
    },
}

export const FadeLeft: Variants = {
    hide: {
        opacity: 0,
        x: 100,
    },
    show: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.7,
        },
    },
}
