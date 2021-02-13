import React from 'react';
import PropTypes from 'prop-types';
import Grow from '@material-ui/core/Grow';
import FlexBox from 'components/FlexBox/FlexBox';
import ShipmentCard from 'components/ShipmentCard/ShipmentCard';
import useInfiniteScroll from 'utils/hooks/useInfiniteScroll';

function ShipmentsList({ loading, list }) {
  // Infinite scroll
  const { lastElementRef, itemsCount } = useInfiniteScroll({
    loading,
    initialItemsCount: 4,
    increaseBy: 1,
    listLength: list?.length,
  });

  return (
    <Grow in={!loading} timeout={{ enter: 800, exit: 0 }}>
      <FlexBox data-testid="shipments-list">
        {list?.slice(0, itemsCount).map((shipment, i, arr) => (
          <ShipmentCard
            key={shipment.id}
            defaultExpanded={arr.length < 4 && i === 0}
            ref={i === arr.length - 1 ? lastElementRef : null}
            {...shipment}
          />
        ))}
      </FlexBox>
    </Grow>
  );
}

ShipmentsList.propTypes = {
  loading: PropTypes.bool.isRequired,
  list: PropTypes.array,
};

export default ShipmentsList;
