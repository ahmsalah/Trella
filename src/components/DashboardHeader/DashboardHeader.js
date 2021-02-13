import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Fade from '@material-ui/core/Fade';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import FlexBox from 'components/FlexBox/FlexBox';
import PublicRoundedIcon from '@material-ui/icons/PublicRounded';
import KeyboardBackspaceRoundedIcon from '@material-ui/icons/KeyboardBackspaceRounded';

function DashboardHeader({ loading, filteredView, address, loadAllShipments, openLocationDialog }) {
  const up600 = useMediaQuery('(min-width:600px)');

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
          onClick={openLocationDialog}
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
    </>
  );
}

DashboardHeader.propTypes = {
  loading: PropTypes.bool.isRequired,
  filteredView: PropTypes.bool.isRequired,
  address: PropTypes.string,
  loadAllShipments: PropTypes.func,
  openLocationDialog: PropTypes.func,
};

export default DashboardHeader;
