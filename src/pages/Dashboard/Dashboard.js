import React, { useEffect, useState, useCallback } from 'react';
import Layout from 'components/Layout/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { loadShipments } from 'redux/features/shipments.feature';
import DashboardHeader from 'components/DashboardHeader/DashboardHeader';
import ShipmentsList from 'components/ShipmentsList/ShipmentsList';
import Loading from 'components/Loading/Loading';
import Modal from 'components/Modal/Modal';
import InteractiveMap from 'components/InteractiveMap/InteractiveMap';
import Box from '@material-ui/core/Box';
import { initialLocation } from 'config/constants';

function Dashboard() {
  const dispatch = useDispatch();
  const { list, loading } = useSelector(state => state.shipments);

  useEffect(() => {
    dispatch(loadShipments());
  }, [dispatch]);

  const [filteredView, setFilteredView] = useState(false);
  const [address, setAddress] = useState('');
  const [coordinates, setCoordinates] = useState(initialLocation);
  const [open, setOpen] = useState(false);

  const loadAllShipments = useCallback(() => {
    setFilteredView(false);
    dispatch(loadShipments());
  }, [dispatch]);

  const loadShipmentsWithLocation = useCallback(() => {
    setOpen(false);
    dispatch(loadShipments(coordinates));
    setFilteredView(true);
  }, [dispatch, coordinates]);

  return (
    <Layout>
      <DashboardHeader
        loading={loading}
        filteredView={filteredView}
        address={address}
        loadAllShipments={loadAllShipments}
        openLocationDialog={() => setOpen(true)}
      />
      <Loading isLoading={loading} mt={-12} />
      <ShipmentsList loading={loading} list={list} />
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        onProceed={loadShipmentsWithLocation}
        onProceedLabel="Select Location"
        title={
          <>
            <Box component="span" fontWeight={400}>
              View shipments near
            </Box>{' '}
            <b>{address}</b>
          </>
        }
      >
        <InteractiveMap
          setAddress={setAddress}
          coordinates={coordinates}
          setCoordinates={setCoordinates}
        />
      </Modal>
    </Layout>
  );
}

export default Dashboard;
