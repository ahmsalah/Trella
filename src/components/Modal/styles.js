import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(({ spacing }) => ({
  dialog: {
    height: '100vh',
  },
  actions: {
    justifyContent: 'center',
    '& .MuiButtonBase-root': {
      margin: spacing(0, 1),
    },
  },
}));
