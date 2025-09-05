import type { Config } from 'tailwindcss';
import { tokens } from './src/lib/design-tokens';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // Design Tokens Integration
      colors: {
        primary: tokens.colors.primary,
        neutral: tokens.colors.neutral,
        success: tokens.colors.success,
        warning: tokens.colors.warning,
        error: tokens.colors.error,
        background: tokens.colors.background,
        surface: tokens.colors.surface,
        // Legacy support
        gold: tokens.colors.primary[500],
        foreground: tokens.colors.neutral[900],
      },
      
      fontFamily: {
        sans: ['Helvetica Compressed', 'Helvetica Neue', 'Arial', 'sans-serif'],
        serif: ['Helvetica Compressed', 'Helvetica Neue', 'Arial', 'serif'],
        mono: ['Helvetica Compressed', 'Helvetica Neue', 'Arial', 'monospace'],
      },
      
      fontSize: tokens.typography.fontSize,
      fontWeight: tokens.typography.fontWeight,
      lineHeight: tokens.typography.lineHeight,
      letterSpacing: tokens.typography.letterSpacing,
      
      spacing: tokens.spacing,
      borderRadius: tokens.borderRadius,
      boxShadow: tokens.shadows,
      zIndex: tokens.zIndex,
      
      // Animation tokens
      transitionDuration: tokens.motion.duration,
      transitionTimingFunction: tokens.motion.easing,
      
      // Container queries
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1536px',
        },
      },
      
      // Premium animations
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in-down': {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'slide-in-left': {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'slide-in-right': {
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-glow': {
          '0%, 100%': { 
            boxShadow: '0 0 20px rgba(240, 194, 61, 0.3)',
            transform: 'scale(1)',
          },
          '50%': { 
            boxShadow: '0 0 40px rgba(240, 194, 61, 0.6)',
            transform: 'scale(1.05)',
          },
        },
      },
      
      animation: {
        'fade-in': 'fade-in 0.5s ease-out',
        'fade-in-up': 'fade-in-up 0.6s ease-out',
        'fade-in-down': 'fade-in-down 0.6s ease-out',
        'scale-in': 'scale-in 0.5s ease-out',
        'slide-in-left': 'slide-in-left 0.5s ease-out',
        'slide-in-right': 'slide-in-right 0.5s ease-out',
        'float': 'float 3s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
      },
      
      // Premium gradients
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-premium': 'linear-gradient(135deg, #f0c23d 0%, #e6a81f 50%, #c88a15 100%)',
        'gradient-subtle': 'linear-gradient(135deg, rgba(240, 194, 61, 0.1) 0%, rgba(230, 168, 31, 0.05) 100%)',
        'gradient-dark': 'linear-gradient(135deg, #0a0a0a 0%, #171717 50%, #262626 100%)',
      },
      
      // Premium backdrop filters
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [
    // Container queries plugin
    require('@tailwindcss/container-queries'),
    // Typography plugin for rich text
    require('@tailwindcss/typography'),
  ],
};

export default config;
