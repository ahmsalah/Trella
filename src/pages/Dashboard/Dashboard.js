import Layout from 'components/Layout/Layout';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadShipments } from 'redux/features/shipments.feature';
import Typography from '@material-ui/core/Typography';
import Grow from '@material-ui/core/Grow';
import FlexBox from 'components/FlexBox/FlexBox';
import ShipmentCard from 'components/ShipmentCard/ShipmentCard';
import useInfiniteScroll from 'utils/hooks/useInfiniteScroll';
import Loading from 'components/Loading/Loading';

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

  console.log({ list, loading });

  return (
    <Layout>
      <FlexBox mb={6} color="#fff">
        <Typography variant="h4" color="inherit">
          <b> All Shipments</b>
        </Typography>
      </FlexBox>
      <Loading isLoading={loading} />
      <FlexBox>
        <Grow in={!loading} timeout={800}>
          <div>
            {list?.slice(0, itemsCount).map((shipment, i, arr) => (
              <ShipmentCard
                key={shipment.id}
                defaultExpanded={arr < 4}
                ref={i === arr.length - 1 ? lastElementRef : null}
                {...shipment}
              />
            ))}
          </div>
        </Grow>
      </FlexBox>
    </Layout>
  );
}

export default Dashboard;
