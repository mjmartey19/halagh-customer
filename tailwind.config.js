// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require("nativewind/preset")],
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Primary Brand Colors
        primary: {
          50: '#EEF4FE',
          100: '#D6E4FD',
          200: '#B5CFFC',
          300: '#83B0F9',
          400: '#4A86F4',
          500: '#1A52E5', // Main primary
          600: '#1444C7',
          700: '#1137A1',
          800: '#132F84',
          900: '#152B6D',
          950: '#101C47',
        },
        
        // Success Colors
        success: {
          50: '#F0FDF4',
          100: '#DCFCE7',
          200: '#BBF7D0',
          300: '#86EFAC',
          400: '#4ADE80',
          500: '#22C55E', // Main success
          600: '#16A34A',
          700: '#15803D',
          800: '#166534',
          900: '#14532D',
          950: '#052E16',
        },
        
        // Danger Colors
        danger: {
          50: '#FEF2F2',
          100: '#FEE2E2',
          200: '#FECACA',
          300: '#FCA5A5',
          400: '#F87171',
          500: '#F54135', // Main danger
          600: '#DC2626',
          700: '#B91C1C',
          800: '#991B1B',
          900: '#7F1D1D',
          950: '#450A0A',
        },
        
        // Gold Colors
        gold: {
          50: '#FFFBEB',
          100: '#FEF3C7',
          200: '#FDE68A',
          300: '#FCD34D',
          400: '#FBBF24',
          500: '#FFD700', // Main gold
          600: '#D97706',
          700: '#B45309',
          800: '#92400E',
          900: '#78350F',
          950: '#451A03',
        },
        
        // Neutral Colors
        neutral: {
          50: '#FAFAFA',
          100: '#F5F5F5',
          200: '#EDECEF', // Main neutral
          300: '#D4D4D4',
          400: '#A3A3A3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
          950: '#0A0A0A',
        },
        
        // Light Theme Colors
        light: {
          background: '#FFFFFF',
          surface: '#FAFAFA',
          card: '#FFFFFF',
          heading: '#333333',
          body: '#666666',
          muted: '#9CA3AF',
          border: '#D9D9D9',
          divider: '#E5E7EB',
          overlay: 'rgba(0, 0, 0, 0.5)',
        },
        
        // Dark Theme Colors
        dark: {
          background: '#151718',
          surface: '#1F2937',
          card: '#374151',
          heading: '#ECEDEE',
          body: '#B0B3B8',
          muted: '#6B7280',
          border: '#374151',
          divider: '#4B5563',
          overlay: 'rgba(0, 0, 0, 0.7)',
        },
      },
      
      // Typography
      fontFamily: {
        // App-specific fonts
        helvetica: ['Helvetica', 'system-ui', 'sans-serif'],
        poppins: ['Poppins', 'system-ui', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      
      fontSize: {
        // Custom font sizes based on the app design
        'display-lg': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-md': ['2.875rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
        'display-sm': ['2.25rem', { lineHeight: '1.3', letterSpacing: '-0.02em' }],
        'heading-xl': ['1.875rem', { lineHeight: '1.4', letterSpacing: '-0.01em' }],
        'heading-lg': ['1.5rem', { lineHeight: '1.4', letterSpacing: '-0.01em' }],
        'heading-md': ['1.25rem', { lineHeight: '1.5', letterSpacing: '-0.01em' }],
        'heading-sm': ['1.125rem', { lineHeight: '1.5', letterSpacing: '-0.01em' }],
        'body-lg': ['1.125rem', { lineHeight: '1.6' }],
        'body-md': ['1rem', { lineHeight: '1.6' }],
        'body-sm': ['0.875rem', { lineHeight: '1.6' }],
        'caption': ['0.75rem', { lineHeight: '1.5' }],
        'overline': ['0.625rem', { lineHeight: '1.5', letterSpacing: '0.08em' }],
      },
      
      // Spacing
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
        '144': '36rem',
      },
      
      // Border Radius
      borderRadius: {
        'none': '0',
        'sm': '0.125rem',
        'md': '0.375rem',
        'lg': '0.5rem',
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
        'full': '9999px',
      },
      
      // Box Shadow
      boxShadow: {
        'xs': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        'sm': '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
        'md': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        'lg': '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
        'xl': '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
        '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
        'inner': 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
        'card': '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px 0 rgb(0 0 0 / 0.06)',
        'card-hover': '0 4px 12px 0 rgb(0 0 0 / 0.15)',
        'button': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        'button-hover': '0 2px 4px 0 rgb(0 0 0 / 0.1)',
      },
      
      // Animation
      animation: {
        'fade-in': 'fade-in 0.5s ease-in-out',
        'fade-out': 'fade-out 0.5s ease-in-out',
        'slide-in': 'slide-in 0.3s ease-out',
        'slide-out': 'slide-out 0.3s ease-out',
        'bounce-gentle': 'bounce-gentle 2s infinite',
        'pulse-gentle': 'pulse-gentle 2s infinite',
      },
      
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'fade-out': {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        'slide-in': {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'slide-out': {
          '0%': { transform: 'translateY(0)', opacity: '1' },
          '100%': { transform: 'translateY(-10px)', opacity: '0' },
        },
        'bounce-gentle': {
          '0%, 20%, 53%, 80%, 100%': { transform: 'translateY(0)' },
          '40%, 43%': { transform: 'translateY(-5px)' },
          '70%': { transform: 'translateY(-3px)' },
          '90%': { transform: 'translateY(-2px)' },
        },
        'pulse-gentle': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
      },
      
      // Backdrop Blur
      backdropBlur: {
        'xs': '2px',
        'sm': '4px',
        'md': '8px',
        'lg': '12px',
        'xl': '16px',
        '2xl': '24px',
        '3xl': '40px',
      },
      
      // Z-Index
      zIndex: {
        'dropdown': '1000',
        'sticky': '1020',
        'fixed': '1030',
        'modal-backdrop': '1040',
        'modal': '1050',
        'popover': '1060',
        'tooltip': '1070',
        'toast': '1080',
      },
    },
  },
  plugins: [
    // Custom plugin for theme utilities
    function({ addUtilities, theme }) {
      const newUtilities = {
        '.text-primary': {
          color: theme('colors.primary.500'),
        },
        '.bg-primary': {
          backgroundColor: theme('colors.primary.500'),
        },
        '.border-primary': {
          borderColor: theme('colors.primary.500'),
        },
        '.text-success': {
          color: theme('colors.success.500'),
        },
        '.bg-success': {
          backgroundColor: theme('colors.success.500'),
        },
        '.text-danger': {
          color: theme('colors.danger.500'),
        },
        '.bg-danger': {
          backgroundColor: theme('colors.danger.500'),
        },
        '.text-gold': {
          color: theme('colors.gold.500'),
        },
        '.bg-gold': {
          backgroundColor: theme('colors.gold.500'),
        },
        // Card utilities
        '.card': {
          backgroundColor: theme('colors.white'),
          borderRadius: theme('borderRadius.xl'),
          boxShadow: theme('boxShadow.card'),
          padding: theme('spacing.4'),
        },
        '.card-hover': {
          '&:hover': {
            boxShadow: theme('boxShadow.card-hover'),
            transform: 'translateY(-1px)',
          },
        },
        // Button utilities
        '.btn': {
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: theme('borderRadius.xl'),
          fontWeight: theme('fontWeight.medium'),
          fontSize: theme('fontSize.body-md'),
          lineHeight: theme('lineHeight.none'),
          padding: `${theme('spacing.3')} ${theme('spacing.6')}`,
          transition: 'all 0.2s ease-in-out',
          cursor: 'pointer',
          border: 'none',
          outline: 'none',
          '&:focus': {
            outline: '2px solid',
            outlineColor: theme('colors.primary.500'),
            outlineOffset: '2px',
          },
        },
        '.btn-primary': {
          backgroundColor: theme('colors.primary.500'),
          color: theme('colors.white'),
          '&:hover': {
            backgroundColor: theme('colors.primary.600'),
            boxShadow: theme('boxShadow.button-hover'),
          },
          '&:active': {
            backgroundColor: theme('colors.primary.700'),
          },
        },
        '.btn-success': {
          backgroundColor: theme('colors.success.500'),
          color: theme('colors.white'),
          '&:hover': {
            backgroundColor: theme('colors.success.600'),
          },
        },
        '.btn-danger': {
          backgroundColor: theme('colors.danger.500'),
          color: theme('colors.white'),
          '&:hover': {
            backgroundColor: theme('colors.danger.600'),
          },
        },
        '.btn-secondary': {
          backgroundColor: theme('colors.neutral.200'),
          color: theme('colors.neutral.800'),
          '&:hover': {
            backgroundColor: theme('colors.neutral.300'),
          },
        },
        // Status badge utilities
        '.badge': {
          display: 'inline-flex',
          alignItems: 'center',
          fontSize: theme('fontSize.caption'),
          fontWeight: theme('fontWeight.medium'),
          padding: `${theme('spacing.1')} ${theme('spacing.3')}`,
          borderRadius: theme('borderRadius.full'),
        },
        '.badge-success': {
          backgroundColor: theme('colors.success.100'),
          color: theme('colors.success.700'),
        },
        '.badge-danger': {
          backgroundColor: theme('colors.danger.100'),
          color: theme('colors.danger.700'),
        },
        '.badge-primary': {
          backgroundColor: theme('colors.primary.100'),
          color: theme('colors.primary.700'),
        },
        // Input utilities
        '.input': {
          display: 'block',
          width: '100%',
          borderRadius: theme('borderRadius.lg'),
          border: `1px solid ${theme('colors.light.border')}`,
          padding: theme('spacing.3'),
          fontSize: theme('fontSize.body-md'),
          lineHeight: theme('lineHeight.normal'),
          backgroundColor: theme('colors.white'),
          transition: 'all 0.2s ease-in-out',
          '&:focus': {
            outline: 'none',
            borderColor: theme('colors.primary.500'),
            boxShadow: `0 0 0 3px ${theme('colors.primary.100')}`,
          },
        },
      };
      
      addUtilities(newUtilities);
    },
  ],
  darkMode: 'class',
};

// Theme Constants Export
export const THEME_CONSTANTS = {
  // Component sizes
  COMPONENT_SIZES: {
    button: {
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg',
    },
    input: {
      sm: 'px-3 py-2 text-sm',
      md: 'px-4 py-3 text-base',
      lg: 'px-6 py-4 text-lg',
    },
    badge: {
      sm: 'px-2 py-0.5 text-xs',
      md: 'px-3 py-1 text-sm',
      lg: 'px-4 py-1.5 text-base',
    },
  },
  
  // Layout constants
  LAYOUT: {
    container: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
    section: 'py-16 lg:py-24',
    card: 'bg-white rounded-xl shadow-card p-6',
    grid: 'grid gap-6 sm:grid-cols-2 lg:grid-cols-3',
  },
  
  // Animation durations
  ANIMATION: {
    fast: '150ms',
    normal: '300ms',
    slow: '500ms',
  },
  
};