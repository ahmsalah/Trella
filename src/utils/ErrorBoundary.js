import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Typography from '@material-ui/core/Typography';
import Grow from '@material-ui/core/Grow';
import { makeStyles } from '@material-ui/core/styles';
import * as Sentry from '@sentry/react';

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errorInfo: null,
    };
  }

  componentDidCatch(error, errorInfo) {
    // log error messages to an error reporting service here
    Sentry.captureException(error, {
      extra: {
        error_string: error.toString(),
        component_stack: errorInfo.componentStack,
      },
    });
    // Catch errors in any components below and re-render with error message
    this.setState({
      errorInfo,
    });
  }

  render() {
    const { errorInfo } = this.state;
    const { children } = this.props;
    if (errorInfo) {
      // if there is an error, show error dialog
      return <ErrorDialog />;
    }
    // Normally, just render children
    return children;
  }
}

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Grow {...props} ref={ref} />;
});

const useStyles = makeStyles(({ spacing, breakpoints }) => ({
  dialog: {
    padding: spacing(7, 4, 5),
    [breakpoints.up('md')]: {
      padding: spacing(7, 5, 5),
    },
  },
  dialogContent: {
    '&&': {
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
  },
  dialogActions: {
    marginTop: spacing(5),
    justifyContent: 'center',
    padding: 0,
  },
}));

function ErrorDialog() {
  const classes = useStyles();
  return (
    <Dialog
      open
      aria-labelledby="error-dialog-title"
      aria-describedby="error-dialog-description"
      TransitionComponent={Transition}
      TransitionProps={{
        mountOnEnter: true,
        unmountOnExit: true,
      }}
      classes={{ paper: classes.dialog }}
    >
      <DialogContent className={classes.dialogContent} id="error-dialog-description">
        <Typography variant="h4" color="textSecondary" align="center">
          Oops! Something went wrong, please try again.
        </Typography>
      </DialogContent>
      <DialogActions className={classes.dialogActions}>
        <Button
          onClick={() => window.location.reload()}
          color="primary"
          variant="contained"
          autoFocus
        >
          Refresh
        </Button>
      </DialogActions>
    </Dialog>
  );
}
