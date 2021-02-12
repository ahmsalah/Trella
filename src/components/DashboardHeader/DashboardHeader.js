import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { loadShipments } from 'redux/features/shipments.feature';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Fade from '@material-ui/core/Fade';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import FlexBox from 'components/FlexBox/FlexBox';
import Loading from 'components/Loading/Loading';
import PublicRoundedIcon from '@material-ui/icons/PublicRounded';
import KeyboardBackspaceRoundedIcon from '@material-ui/icons/KeyboardBackspaceRounded';
import Modal from 'components/Modal/Modal';
import InteractiveMap from 'components/InteractiveMap/InteractiveMap';
import { initialLocation } from 'config/constants';

function DashboardHeader({ loading }) {
  const dispatch = useDispatch();
  const up600 = useMediaQuery('(min-width:600px)');
  const [filteredView, setFilteredView] = useState(false);
  const [address, setAddress] = useState(false);
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
    <>
      <FlexBox row jc="space-between" ai="flex-start" mt={4} mb={filteredView ? 0 : 5} color="#fff">
        {filteredView ? (
          <Button
            size={up600 ? 'large' : 'small'}
            variant="contained"
            startIcon={<KeyboardBackspaceRoundedIcon />}
            onClick={loadAllShipments}
            disabled={loading}
          >
            All Shipments
          </Button>
        ) : (
          <Typography variant="h4" color="inherit">
            <b>All Shipments</b>
          </Typography>
        )}

        <Button
          size={up600 ? 'large' : 'small'}
          variant="contained"
          endIcon={<PublicRoundedIcon />}
          onClick={() => setOpen(true)}
          disabled={loading}
        >
          {filteredView ? 'Change Location' : 'Filter By Location'}
        </Button>
      </FlexBox>

      {filteredView && !loading && (
        <Fade in={!loading} timeout={1000}>
          <Box mt={3.5} mb={5} color="common.white" clone fontWeight={300}>
            <Typography variant="h5" color="inherit">
              Viewing shipments near <b>{address}</b>
            </Typography>
          </Box>
        </Fade>
      )}

      <Loading isLoading={loading} mt={-12} />
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
    </>
  );
}

DashboardHeader.propTypes = {
  loading: PropTypes.bool.isRequired,
};

export default DashboardHeader;
