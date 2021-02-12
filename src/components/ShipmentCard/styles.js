import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(({ spacing }) => ({
  grid: {
    width: '100%',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(10em, 1fr))',
    gridGap: spacing(2),
    marginBottom: spacing(2),
  },
}));
