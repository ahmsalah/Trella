import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(({ spacing, breakpoints, palette }) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    position: 'relative',
  },
  contentContainer: {
    width: '100%',
    margin: spacing(6, 2.5),
    [breakpoints.up('sm')]: {
      margin: spacing(6),
    },
    [breakpoints.up('md')]: {
      maxWidth: '80%',
    },
  },
  logo: {
    width: spacing(10),
    height: 'auto',
    position: 'absolute',
    top: spacing(2.5),
    right: spacing(2.5),
  },
  gradientBG: {
    height: spacing(40),
    backgroundImage: `linear-gradient(to left, ${palette.secondary.main}, ${palette.secondary.light})`,
    position: 'absolute',
    zIndex: '-1',
    width: '100%',
    top: 0,
    overflow: 'hidden',
    '& img': {
      position: 'absolute',
      height: 'auto',
    },
    '& img:nth-child(1)': {
      top: '52%',
      left: '-2%',
      width: spacing(25),
      opacity: 0.6,
    },
    '& img:nth-child(2)': {
      opacity: 0.15,
      width: spacing(37),
      top: '24%',
      right: '-10%',
    },
    '& img:nth-child(3)': {
      opacity: 0.1,
      width: spacing(12),
      bottom: '-15%',
      left: '40%',
    },
    '& img:nth-child(4)': {
      opacity: 0.11,
      width: spacing(6),
      top: '26%',
      left: '30%',
    },
    '& img:nth-child(5)': {
      opacity: 0.09,
      width: spacing(14),
      top: '18%',
      right: '30%',
    },
  },
}));
