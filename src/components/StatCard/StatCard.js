import React, { memo } from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import useStyles from './styles';

function StatCard({ title, icon, value, onClick, variant, className }) {
  const isHorizontal = variant === 'horizontal';
  const classes = useStyles({ isHorizontal });

  const BtnWrapper = childs =>
    onClick ? (
      <ButtonBase className={classes.buttonBase} onClick={onClick}>
        {childs}
      </ButtonBase>
    ) : (
      childs
    );

  return BtnWrapper(
    <Card className={clsx(classes.root, !!onClick && classes.cardButton, className, 'stat-card')}>
      <div className={classes.titleContainer}>
        {icon}
        <Typography variant="body2" align="center">
          {title}
        </Typography>
      </div>
      <Typography
        variant="h6"
        align="center"
        className={clsx(classes.stat, !isHorizontal && classes.fontSize)}
      >
        <b>{value}</b>
      </Typography>
    </Card>,
  );
}

StatCard.defaultProps = {
  variant: 'vertical',
};

StatCard.propTypes = {
  variant: PropTypes.oneOf(['vertical', 'horizontal']),
  title: PropTypes.string.isRequired,
  icon: PropTypes.node,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

export default memo(StatCard);
