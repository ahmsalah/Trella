import Layout from 'components/Layout/Layout';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadShipments } from 'redux/features/shipments.feature';
import Typography from '@material-ui/core/Typography';
import Grow from '@material-ui/core/Grow';
import FlexBox from 'components/FlexBox/FlexBox';
import Loading from 'components/Loading/Loading';
import useStyles from './styles';

function Dashboard() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { list, loading } = useSelector(state => state.shipments);

  useEffect(() => {
    dispatch(loadShipments());
  }, [dispatch]);

  console.log({ list, loading });

  return (
    <Layout>
      <Typography variant="h4" className={classes.title}>
        All Shipments
      </Typography>
      <Loading isLoading={loading} />
      <FlexBox>
        <Grow in={!loading} timeout={800}>
          <div>List Goes Here</div>
        </Grow>
      </FlexBox>
    </Layout>
  );
}

export default Dashboard;
