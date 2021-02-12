import React, { memo, forwardRef } from 'react';
import CardWrapper from 'components/CardWrapper/CardWrapper';
import Button from '@material-ui/core/Button';
import MoneyRoundedIcon from '@material-ui/icons/MoneyRounded';
import GavelRoundedIcon from '@material-ui/icons/GavelRounded';
import LocalShippingRoundedIcon from '@material-ui/icons/LocalShippingRounded';
import CategoryRoundedIcon from '@material-ui/icons/CategoryRounded';
import numeral from 'numeral';
import StatCard from 'components/StatCard/StatCard';
import useStyles from './styles';

const ShipmentCard = forwardRef(
  ({ numberOfBids, commodity, vehicleType, price, defaultExpanded }, ref) => {
    const classes = useStyles();

    const stats = [
      {
        title: 'Commodity',
        icon: <CategoryRoundedIcon />,
        value: commodity,
      },
      {
        title: 'Vehicle Type',
        icon: <LocalShippingRoundedIcon />,
        value: vehicleType,
      },
      {
        title: 'Bids',
        icon: <GavelRoundedIcon />,
        value: numberOfBids,
      },
      {
        title: 'Price',
        icon: <MoneyRoundedIcon />,
        value: `${numeral(price).format('0,0')} EGP`,
      },
    ];

    return (
      <CardWrapper
        ref={ref}
        title={commodity}
        subheader={vehicleType}
        defaultExpanded={defaultExpanded}
        actions={
          <Button
            color="primary"
            variant="outlined"
            onClick={e => {
              e.stopPropagation();
            }}
          >
            Assign
          </Button>
        }
      >
        <div className={classes.grid}>
          {stats.map(stat => (
            <StatCard key={stat.title} {...stat} className={classes.statCard} />
          ))}
        </div>

        {/* Map goes here */}
      </CardWrapper>
    );
  },
);

export default memo(ShipmentCard);
