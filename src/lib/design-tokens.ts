// LUX MEDIA Design System Tokens
// Premium agency design system with fluid typography and cinematic motion

export const colors = {
  // Primary Brand Palette
  primary: {
    50: '#fefcf7',
    100: '#fdf8e8',
    200: '#fbf0c6',
    300: '#f8e49a',
    400: '#f4d46b',
    500: '#f0c23d', // Primary gold
    600: '#e6a81f',
    700: '#c88a15',
    800: '#a06d14',
    900: '#825a16',
  },
  
  // Neutral Palette
  neutral: {
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#e5e5e5',
    300: '#d4d4d4',
    400: '#a3a3a3',
    500: '#737373',
    600: '#525252',
    700: '#404040',
    800: '#262626',
    900: '#171717',
    950: '#0a0a0a',
  },
  
  // Semantic Colors
  success: {
    50: '#f0fdf4',
    500: '#22c55e',
    600: '#16a34a',
  },
  
  warning: {
    50: '#fffbeb',
    500: '#f59e0b',
    600: '#d97706',
  },
  
  error: {
    50: '#fef2f2',
    500: '#ef4444',
    600: '#dc2626',
  },
  
  // Background & Surface
  background: {
    primary: '#ffffff',
    secondary: '#fafafa',
    tertiary: '#f5f5f5',
    dark: '#0a0a0a',
  },
  
  surface: {
    primary: '#ffffff',
    secondary: '#fafafa',
    elevated: '#ffffff',
    overlay: 'rgba(0, 0, 0, 0.5)',
  },
} as const;

export const typography = {
  // Fluid Typography Scale (1.125 ratio)
  fontFamily: {
    sans: ['Helvetica Compressed', 'Helvetica Neue', 'Arial', 'sans-serif'],
    serif: ['Helvetica Compressed', 'Helvetica Neue', 'Arial', 'serif'],
    mono: ['Helvetica Compressed', 'Helvetica Neue', 'Arial', 'monospace'],
  },
  
  fontSize: {
    // Fluid scale using clamp()
    xs: 'clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem)',
    sm: 'clamp(0.875rem, 0.8rem + 0.375vw, 1rem)',
    base: 'clamp(1rem, 0.9rem + 0.5vw, 1.125rem)',
    lg: 'clamp(1.125rem, 1rem + 0.625vw, 1.25rem)',
    xl: 'clamp(1.25rem, 1.1rem + 0.75vw, 1.5rem)',
    '2xl': 'clamp(1.5rem, 1.3rem + 1vw, 2rem)',
    '3xl': 'clamp(2rem, 1.7rem + 1.5vw, 2.5rem)',
    '4xl': 'clamp(2.5rem, 2.1rem + 2vw, 3.5rem)',
    '5xl': 'clamp(3rem, 2.5rem + 2.5vw, 4.5rem)',
    '6xl': 'clamp(3.5rem, 2.9rem + 3vw, 5.5rem)',
    '7xl': 'clamp(4rem, 3.3rem + 3.5vw, 6.5rem)',
    '8xl': 'clamp(4.5rem, 3.7rem + 4vw, 7.5rem)',
    '9xl': 'clamp(5rem, 4.1rem + 4.5vw, 8.5rem)',
  },
  
  fontWeight: {
    thin: '100',
    extralight: '200',
    light: '300',
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800',
    black: '900',
  },
  
  lineHeight: {
    tight: '1.1',
    snug: '1.2',
    normal: '1.5',
    relaxed: '1.6',
    loose: '1.8',
  },
  
  letterSpacing: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0em',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em',
  },
} as const;

export const spacing = {
  // Enhanced 8px base unit system with better conversion-focused spacing
  0: '0',
  1: '0.25rem', // 4px
  2: '0.5rem',  // 8px
  3: '0.75rem', // 12px
  4: '1rem',    // 16px
  5: '1.25rem', // 20px
  6: '1.5rem',  // 24px
  7: '1.75rem', // 28px
  8: '2rem',    // 32px
  9: '2.25rem', // 36px
  10: '2.5rem', // 40px
  12: '3rem',   // 48px
  14: '3.5rem', // 56px
  16: '4rem',   // 64px
  18: '4.5rem', // 72px
  20: '5rem',   // 80px
  24: '6rem',   // 96px
  28: '7rem',   // 112px
  32: '8rem',   // 128px
  36: '9rem',   // 144px
  40: '10rem',  // 160px
  44: '11rem',  // 176px
  48: '12rem',  // 192px
  52: '13rem',  // 208px
  56: '14rem',  // 224px
  60: '15rem',  // 240px
  64: '16rem',  // 256px
  72: '18rem',  // 288px
  80: '20rem',  // 320px
  96: '24rem',  // 384px
} as const;

export const borderRadius = {
  none: '0',
  sm: '0.125rem',   // 2px
  base: '0.25rem',  // 4px
  md: '0.375rem',   // 6px
  lg: '0.5rem',     // 8px
  xl: '0.75rem',    // 12px
  '2xl': '1rem',    // 16px
  '3xl': '1.5rem',  // 24px
  full: '9999px',
} as const;

export const shadows = {
  sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
  base: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
  md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
  lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
  xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
  '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
  inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
  none: 'none',
  // Conversion-focused shadows
  cta: '0 10px 25px -5px rgba(240, 194, 61, 0.3), 0 4px 6px -4px rgba(240, 194, 61, 0.2)',
  ctaHover: '0 20px 40px -10px rgba(240, 194, 61, 0.4), 0 8px 12px -6px rgba(240, 194, 61, 0.3)',
  premium: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.1)',
} as const;

export const motion = {
  // Duration tokens
  duration: {
    fast: '150ms',
    base: '300ms',
    slow: '500ms',
    slower: '700ms',
    slowest: '1000ms',
  },
  
  // Easing functions for CSS/Tailwind
  easing: {
    linear: 'linear',
    ease: 'ease',
    easeIn: 'ease-in',
    easeOut: 'ease-out',
    easeInOut: 'ease-in-out',
    // Custom premium easings
    smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
    bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    elastic: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
  },
  
  // Framer Motion easing functions (array format)
  motionEasing: {
    linear: 'linear',
    ease: 'ease',
    easeIn: 'ease-in',
    easeOut: 'ease-out',
    easeInOut: 'ease-in-out',
    // Custom premium easings for Framer Motion
    smooth: [0.4, 0, 0.2, 1],
    bounce: [0.68, -0.55, 0.265, 1.55],
    elastic: [0.175, 0.885, 0.32, 1.275],
  },
  
  // Spring presets for Framer Motion
  spring: {
    gentle: { type: 'spring', stiffness: 100, damping: 20 },
    bouncy: { type: 'spring', stiffness: 300, damping: 15 },
    stiff: { type: 'spring', stiffness: 400, damping: 30 },
    slow: { type: 'spring', stiffness: 50, damping: 25 },
  },
  
  // Animation variants
  variants: {
    fadeIn: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
    },
    fadeInUp: {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: -20 },
    },
    fadeInDown: {
      initial: { opacity: 0, y: -20 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: 20 },
    },
    scaleIn: {
      initial: { opacity: 0, scale: 0.9 },
      animate: { opacity: 1, scale: 1 },
      exit: { opacity: 0, scale: 0.9 },
    },
    slideInLeft: {
      initial: { opacity: 0, x: -20 },
      animate: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: 20 },
    },
    slideInRight: {
      initial: { opacity: 0, x: 20 },
      animate: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: -20 },
    },
  },
} as const;

export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;

export const zIndex = {
  hide: -1,
  auto: 'auto',
  base: 0,
  docked: 10,
  dropdown: 1000,
  sticky: 1100,
  banner: 1200,
  overlay: 1300,
  modal: 1400,
  popover: 1500,
  skipLink: 1600,
  toast: 1700,
  tooltip: 1800,
} as const;

// Export all tokens for use in components
export const tokens = {
  colors,
  typography,
  spacing,
  borderRadius,
  shadows,
  motion,
  breakpoints,
  zIndex,
} as const;

// Export motion easing separately for easier access
export const motionEasing = motion.motionEasing;
