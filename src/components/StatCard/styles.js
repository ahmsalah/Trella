import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(
  ({
    spacing,
    breakpoints,
    shadows,
    mixins,
    palette: { borderColor },
    shape: { borderRadius },
  }) => ({
    root: {
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      padding: ({ isHorizontal }) => (isHorizontal ? spacing(1, 2, 1.5) : spacing(1.5, 1.5, 1)),
      minWidth: 92,
      border: '1px solid',
      borderColor,
      boxShadow: mixins.boxShadows?.primary?.light,
    },
    buttonBase: {
      borderRadius,
      width: '100%',
    },
    cardButton: {
      '&&&': {
        margin: 0,
      },
      '&:hover': {
        boxShadow: shadows[5],
      },
    },
    stat: {
      order: ({ isHorizontal }) => (isHorizontal ? 1 : 3),
      width: '100%',
      textOverflow: 'ellipsis',
      overflowWrap: 'anywhere',
    },
    fontSize: {
      [breakpoints.up('md')]: {
        fontSize: '1.75rem',
      },
      [breakpoints.up('sm')]: {
        fontSize: '1.5rem',
      },
    },
    titleContainer: {
      display: 'flex',
      alignItems: 'center',
      order: ({ isHorizontal }) => (isHorizontal ? 3 : 1),
      flexDirection: ({ isHorizontal }) => (isHorizontal ? 'row' : 'column'),
      '& .MuiIcon-root, & .MuiSvgIcon-root': {
        fontSize: ({ isHorizontal }) => (isHorizontal ? '2.4rem' : '2.7rem'),
        margin: ({ isHorizontal }) => (isHorizontal ? spacing(0, 1, 0, 0) : spacing(0, 0, 0.5)),
      },
    },
  }),
);
