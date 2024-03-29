import React, { memo, forwardRef } from 'react';
import PropTypes from 'prop-types';
import CardWrapper from 'components/CardWrapper/CardWrapper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import MoneyRoundedIcon from '@material-ui/icons/MoneyRounded';
import GavelRoundedIcon from '@material-ui/icons/GavelRounded';
import LocalShippingRoundedIcon from '@material-ui/icons/LocalShippingRounded';
import LocationOnRoundedIcon from '@material-ui/icons/LocationOnRounded';
import numeral from 'numeral';
import StatCard from 'components/StatCard/StatCard';
import EmbeddedMap from 'components/EmbeddedMap/EmbeddedMap';
import FlexBox from 'components/FlexBox/FlexBox';
import SvgIcon from '@material-ui/core/SvgIcon';
import { WoodLogsIcon } from 'assets/svgIcons';
import useStyles from './styles';

const ShipmentCard = forwardRef(
  ({ numberOfBids, commodity, vehicleType, price, defaultExpanded, addresses }, ref) => {
    const classes = useStyles();

    const stats = [
      {
        title: 'Commodity',
        icon: (
          <SvgIcon>
            <WoodLogsIcon />
          </SvgIcon>
        ),
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
    ].filter(item => item.value);

    const [pickup, destination] = addresses || [];
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
        TransitionProps={{ mountOnEnter: true }}
      >
        <div className={classes.grid}>
          {stats.map(stat => (
            <StatCard key={stat.title} {...stat} className={classes.statCard} />
          ))}
        </div>
        <FlexBox className={classes.addresses}>
          <FlexBox p={2} pb={1} row jc="space-between" position="relative">
            <span className={classes.dottedLine} />
            <FlexBox ai="center" minWidth={94} ml={1}>
              <span className={classes.circle} />
              <Typography variant="body2" align="center">
                Pickup
              </Typography>
              <Typography align="center">
                <b>{pickup?.name}</b>
              </Typography>
            </FlexBox>

            <FlexBox ai="center" minWidth={94} mr={1}>
              <LocationOnRoundedIcon />
              <Typography variant="body2" align="center">
                Destination
              </Typography>
              <Typography align="center">
                <b>{destination?.name}</b>
              </Typography>
            </FlexBox>
          </FlexBox>
          <EmbeddedMap
            height={300}
            mapParams={{
              origin: `${pickup?.latitude},${pickup?.longitude}`,
              destination: `${destination?.latitude},${destination?.longitude}`,
              maptype: 'roadmap',
              mode: 'driving',
            }}
          />
        </FlexBox>
      </CardWrapper>
    );
  },
);

ShipmentCard.displayName = 'ShipmentCard';

ShipmentCard.propTypes = {
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  commodity: PropTypes.string,
  vehicleType: PropTypes.string,
  price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  defaultExpanded: PropTypes.bool,
  addresses: PropTypes.array,
};

export default memo(ShipmentCard);
