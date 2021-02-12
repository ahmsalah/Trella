import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(({ spacing, palette }) => ({
  cardSummary: {
    minHeight: spacing(8),
    '& .MuiTypography-root': {
      fontWeight: 700,
    },
    '& .MuiAccordionSummary-content': {
      margin: 0,
      transitionDuration: '300ms',
      '&.Mui-expanded': {
        margin: spacing(1, 0),
      },
    },
  },
  cardDetails: {
    flexDirection: 'column',
    '&&': {
      padding: spacing(0, 2.5, 2.5),
    },
  },
  expandIcon: {
    fontSize: '2.6rem',
    color: palette.text.primary,
  },
  cardHeader: {
    padding: spacing(1.5, 1),
    flex: 1,
  },
  actions: {
    pointerEvents: 'visible',
    paddingInlineStart: spacing(1),
    padding: 0,
    color: palette.text.primary,
  },
}));
