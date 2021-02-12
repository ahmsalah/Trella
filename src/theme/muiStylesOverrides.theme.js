/**
 * From here, you can change every single style injected by Material-UI in an Mui component
 * https://material-ui.com/customization/globals/#css
 */
import palette from './palette.theme';
import mixins from './mixins.theme';

export default {
  // Style sheet name ⚛️
  MuiButton: {
    // Name of the rule
    label: {
      // Some CSS
      // textTransform: 'none',
      transform: 'translateY(1px)',
      '& .MuiButton-startIcon, & .MuiButton-endIcon': {
        transform: 'translateY(-1px)',
      },
    },
    root: {
      fontWeight: 'bold',
      '& .MuiButton-startIcon': {
        marginInlineStart: '-4px',
        marginInlineEnd: '8px',
      },
      '& .MuiButton-endIcon': {
        marginInlineStart: '8px',
        marginInlineEnd: '-4px',
      },
    },
    contained: {
      backgroundColor: palette.background.light,
      color: '#fff',
      boxShadow: mixins.boxShadows.primary.dark,
      '&:hover': {
        backgroundColor: palette.action.hoverLight,
        '@media (hover: none)': {
          backgroundColor: palette.action.hoverLight,
        },
      },
    },
  },
  MuiTypography: {
    root: {
      transform: 'translateY(1px)',
    },
  },
  MuiChip: {
    labelSmall: {
      transform: 'translateY(1px)',
    },
  },
  MuiAlert: {
    message: {
      transform: 'translateY(1px)',
    },
  },
  MuiSkeleton: {
    root: {
      animation: '$pulse 1.5s ease-in-out 0.3s infinite',
      borderRadius: 5.87,
    },
    ...mixins.keyframes.pulse,
  },
  MuiToggleButton: {
    label: {
      transform: 'translateY(1px)',
      '& .MuiIcon-root, & .MuiSvgIcon-root': {
        transform: 'translateY(-0.5px)',
      },
    },
  },
  MuiOutlinedInput: {
    notchedOutline: {
      borderColor: 'rgba(0, 0, 0, 0.12)',
    },
  },
};
