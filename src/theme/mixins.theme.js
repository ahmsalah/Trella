/**
 * Default theme mixins provided by MUI
 * https://material-ui.com/customization/default-theme/?expand-path=$.mixins
 */

import palette from './palette.theme';

export default {
  fixes: {
    tranY: (spacing = 1) => ({
      transform: `translateY(${Number.isNaN(spacing) ? spacing : `${spacing}px`})`,
    }),
  },
  boxShadows: {
    primary: {
      light: '0px 1px 4px 0px rgba(150, 150, 150, 0.30)',
      dark: '0px 1px 4px 0px rgba(0, 0, 0, 0.10)',
    },
    secondary: {
      light: '0px 1px 1px 0px rgba(150, 150, 150, 0.30)',
      dark: '0 1px 1px 0 rgba(0, 0, 0, 0.16)',
    },
  },
  scrollbar: {
    '&::-webkit-scrollbar-track': {
      boxShadow: 'inset 0 0 6px rgba(0,0,0,0.3)',
    },
    '&::-webkit-scrollbar': {
      width: 6,
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: palette.secondary.main,
      borderRadius: 8,
    },
  },
  keyframes: {
    spin: {
      '@keyframes spin': {
        '0%': {
          transform: 'rotate(0deg)',
        },
        '100%': {
          transform: 'rotate(360deg)',
        },
      },
    },
    pulse: {
      '@keyframes pulse': {
        '0%': {
          opacity: 1,
        },
        '50%': {
          opacity: 0.4,
        },
        '100%': {
          opacity: 1,
        },
      },
    },
    pulsate: {
      '@keyframes pulsate': {
        '0%': {
          transform: 'scale(0.92)',
        },
        '50%': {
          transform: 'scale(1)',
        },
        '90%': {
          transform: 'scale(0.92)',
        },
        '100%': {
          transform: 'scale(0.92)',
        },
      },
    },
    glow: {
      '@keyframes glow': {
        '0%': { boxShadow: ' 0 0 0 0em rgba(255,255,255,0.1)' },
        '50%': { opacity: 0.3 },
        '100%': { boxShadow: '0 0 2em 12em transparent' },
      },
    },
  },
};
