import React, { useEffect } from 'react';
import Layout from 'components/Layout/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { loadShipments } from 'redux/features/shipments.feature';
import Grow from '@material-ui/core/Grow';
import FlexBox from 'components/FlexBox/FlexBox';
import ShipmentCard from 'components/ShipmentCard/ShipmentCard';
import useInfiniteScroll from 'utils/hooks/useInfiniteScroll';
import DashboardHeader from 'components/DashboardHeader/DashboardHeader';

function Dashboard() {
  const dispatch = useDispatch();
  const { list, loading } = useSelector(state => state.shipments);

  useEffect(() => {
    dispatch(loadShipments());
  }, [dispatch]);

  const { lastElementRef, itemsCount } = useInfiniteScroll({
    loading,
    initialItemsCount: 4,
    increaseBy: 1,
    listLength: list?.length,
  });

  /**
   * To do: handle empty state
   */

  return (
    <Layout>
      <DashboardHeader loading={loading} />
      <Grow in={!loading} timeout={{ enter: 800, exit: 0 }}>
        <FlexBox>
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
    </Layout>
  );
}

export default Dashboard;
