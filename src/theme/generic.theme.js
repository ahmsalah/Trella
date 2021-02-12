import fontFace from 'assets/fonts';
import { isIOS } from 'config/constants';

export default {
  '@font-face': fontFace,
  html: {
    // 1 rem = 10px
    fontSize: '62%',
  },
  body: {
    minHeight: '100vh',
    paddingRight: '0 !important',
    overflowY: 'scroll !important',
    '& .mui-fixed': {
      paddingRight: '0 !important',
    },
  },
  a: {
    color: 'inherit',
    textDecoration: 'none',
  },
  svg: {
    fill: 'currentColor',
    overflow: 'hidden',
  },
  input: {
    fontSize: isIOS ? '16px !important' : 'inherit',
    '&:-internal-autofill-selected, &:-webkit-autofill': {
      boxShadow: '0 0 0 40px white inset',
    },
    '&[type=number]': {
      MozAppearance: 'textfield',
      '&::-webkit-inner-spin-button, &::-webkit-outer-spin-button': {
        WebkitAppearance: 'none',
        margin: 0,
      },
    },
  },
};
