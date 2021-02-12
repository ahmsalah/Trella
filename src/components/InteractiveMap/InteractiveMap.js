import React, { useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { withGoogleMap, GoogleMap, withScriptjs, Marker } from 'react-google-maps';
import Geocode from 'react-geocode';
import snackbar from 'utils/snackbar';

Geocode.setApiKey(process.env.REACT_APP_GOOGLE_JS_KEY);
Geocode.enableDebug();

const MemoizedMap = memo(
  withScriptjs(
    withGoogleMap(({ zoom, coordinates, onMarkerDragEnd }) => (
      <GoogleMap defaultZoom={zoom} defaultCenter={coordinates}>
        <Marker position={coordinates} draggable onDragEnd={onMarkerDragEnd} />
      </GoogleMap>
    )),
  ),
);

function InteractiveMap({ zoom, coordinates, setCoordinates, setAddress }) {
  useEffect(() => {
    (async () => {
      try {
        const { results } = await Geocode.fromLatLng(coordinates.lat, coordinates.lng);
        const addressArr = results[0].formatted_address.split(',');
        setAddress(addressArr.slice(Math.max(addressArr.length - 3, 1)).join(','));
      } catch (error) {
        snackbar.error('Oops, something went wrong!');
      }
    })();
  }, [coordinates, setAddress]);

  const onMarkerDragEnd = ({ latLng }) => {
    setCoordinates({ lat: latLng.lat(), lng: latLng.lng() });
  };

  return (
    <MemoizedMap
      zoom={zoom}
      coordinates={coordinates}
      googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_JS_KEY}&libraries=places`}
      loadingElement={<div style={{ height: '100%' }} />}
      containerElement={<div style={{ height: '100%', minHeight: 300 }} />}
      mapElement={<div style={{ height: '100%' }} />}
      onMarkerDragEnd={onMarkerDragEnd}
    />
  );
}

InteractiveMap.defaultProps = {
  zoom: 11,
};

InteractiveMap.propTypes = {
  coordinates: PropTypes.exact({
    lat: PropTypes.number,
    lng: PropTypes.number,
  }).isRequired,
  setCoordinates: PropTypes.func.isRequired,
  setAddress: PropTypes.func.isRequired,
  zoom: PropTypes.number,
};

export default InteractiveMap;
