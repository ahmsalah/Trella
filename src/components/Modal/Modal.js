import React, { memo } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Grow from '@material-ui/core/Grow';
import useStyles from './styles';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Grow {...props} ref={ref} />;
});

function Modal({ open, onClose, onProceed, title, onProceedLabel, children }) {
  const classes = useStyles();

  return (
    <Dialog
      TransitionComponent={Transition}
      TransitionProps={{
        mountOnEnter: true,
        unmountOnExit: true,
      }}
      open={open}
      onClose={onClose}
      aria-labelledby="dialog-title"
      fullWidth
      maxWidth="md"
      classes={{ paper: classes.dialog }}
    >
      {title && <DialogTitle id="dialog-title">{title}</DialogTitle>}
      <DialogContent>{children}</DialogContent>
      <DialogActions className={classes.actions}>
        <Button
          size="large"
          autoFocus={onProceed == null}
          onClick={onClose}
          color="secondary"
          variant="text"
        >
          Cancel
        </Button>
        {onProceed && (
          <Button size="large" autoFocus onClick={onProceed} variant="contained" color="secondary">
            {onProceedLabel}
          </Button>
        )}
      </DialogActions>
    </Dialog>
  );
}

Modal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func,
  onProceed: PropTypes.func,
  title: PropTypes.string,
  onProceedLabel: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default memo(Modal);
