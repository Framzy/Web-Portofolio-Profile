export const fadeInLeft = {
  initial: { opacity: 0, x: 100 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 0.8, ease: "easeOut" },
  viewport: { once: true, amount: 0.3 },
} as const;

export const fadeInRight = {
  initial: { opacity: 0, x: -100 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 0.8, ease: "easeOut" },
  viewport: { once: true, amount: 0.3 },
} as const;
export const fadeInTop = {
  initial: { opacity: 0, y: 100 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" },
  viewport: { once: true, amount: 0.3 },
} as const;

export const fadeInBottom = {
  initial: { opacity: 0, y: -100 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" },
  viewport: { once: true, amount: 0.3 },
} as const;

export const fadeIn = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  transition: { duration: 0.8, ease: "easeIn" },
  viewport: { once: true, amount: 0.3 },
} as const;

export const fadePopUp = {
  initial: {
    scale: 0.8,
    opacity: 0,
  },
  animate: {
    scale: 1,
    opacity: 1,
  },
  exit: {
    scale: 0.8,
    opacity: 0,
  },
  transition: { duration: 0.2, ease: "easeInOut" },
} as const;
