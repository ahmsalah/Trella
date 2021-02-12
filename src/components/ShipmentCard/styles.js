import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(({ spacing, mixins, palette, shape: { borderRadius } }) => ({
  grid: {
    width: '100%',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(10em, 1fr))',
    gridGap: spacing(2),
    marginBottom: spacing(2),
  },
  addresses: {
    border: '1px solid',
    borderColor: palette.borderColor,
    borderRadius,
    boxShadow: mixins.boxShadows.primary.light,
    '& .MuiSvgIcon-root': {
      marginBottom: spacing(0.5),
      color: palette.secondary.light,
    },
  },
  dottedLine: {
    flex: 1,
    top: spacing(3),
    left: spacing(13),
    right: spacing(13),
    borderTop: '7px dotted',
    position: 'absolute',
    borderColor: palette.divider,
  },
  circle: {
    height: 15,
    width: 15,
    bgcolor: palette.background.paper,
    borderRadius: '50%',
    border: '3.8px solid',
    margin: spacing(0.5, 0, 0.75),
    borderColor: palette.primary.main,
  },
}));
