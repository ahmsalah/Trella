import React, { memo } from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import ObjectToQueryString from 'utils/helperFns/ObjectToQueryString';

function EmbeddedMap({ height, mapMode, mapParams, ...more }) {
  const key = process.env.REACT_APP_GOOGLE_MAPS_EMBEDDED_KEY;

  const queryString = ObjectToQueryString({ key, ...mapParams });

  return (
    <Box clone border={0} width="100%" height={height} {...more}>
      <iframe
        title="map"
        frameBorder="0"
        allowFullScreen
        aria-hidden="false"
        src={`https://www.google.com/maps/embed/v1/${mapMode}?${queryString}`}
      />
    </Box>
  );
}

EmbeddedMap.defaultProps = {
  mapMode: 'directions',
};

EmbeddedMap.propTypes = {
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  mapMode: PropTypes.string,
  mapParams: PropTypes.shape({
    origin: PropTypes.string.isRequired,
    destination: PropTypes.string.isRequired,
    maptype: PropTypes.string,
    mode: PropTypes.string,
  }).isRequired,
};

export default memo(EmbeddedMap);
