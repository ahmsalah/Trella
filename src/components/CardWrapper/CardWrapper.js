import React, { memo, forwardRef } from 'react';
import PropTypes from 'prop-types';
import CardActions from '@material-ui/core/CardActions';
import CardHeader from '@material-ui/core/CardHeader';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Tooltip from '@material-ui/core/Tooltip';
import useStyles from './styles';

/**
 * The Purpose of this component is that if we have multiple lists,
 * their design should be consistent.
 * So if we have another list, orders list for example,
 * then the cards of this list should also be wrapped inside this component.
 */

const CardWrapper = forwardRef(
  ({ title, subheader, actions, children, defaultExpanded, className }, ref) => {
    const classes = useStyles();

    return (
      <Accordion
        ref={ref}
        defaultExpanded={defaultExpanded}
        TransitionProps={{ mountOnEnter: true }}
        className={className}
      >
        <AccordionSummary
          expandIcon={
            <Tooltip title="Expand" placement="top" arrow>
              <ExpandMoreIcon className={classes.expandIcon} />
            </Tooltip>
          }
          className={classes.cardSummary}
        >
          <CardHeader
            titleTypographyProps={{ variant: 'h6' }}
            subheaderTypographyProps={{ variant: 'body2' }}
            className={classes.cardHeader}
            title={title}
            subheader={subheader}
          />
          <CardActions disableSpacing className={classes.actions}>
            {actions}
          </CardActions>
        </AccordionSummary>
        <AccordionDetails className={classes.cardDetails}>{children}</AccordionDetails>
      </Accordion>
    );
  },
);

CardWrapper.displayName = 'CardWrapper';

CardWrapper.propTypes = {
  title: PropTypes.string.isRequired,
  subheader: PropTypes.string,
  actions: PropTypes.node,
  children: PropTypes.node.isRequired,
  defaultExpanded: PropTypes.bool,
  className: PropTypes.string,
};

export default memo(CardWrapper);
