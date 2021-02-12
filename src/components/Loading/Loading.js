import React from 'react';
import PropTypes from 'prop-types';
import FlexBox from 'components/FlexBox/FlexBox';
import Lottie from 'react-lottie';
import animationData from 'assets/lottie/truck.json';

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

function Loading({ isLoading, ...more }) {
  return (
    isLoading && (
      <FlexBox {...more}>
        <Lottie options={defaultOptions} width={300} />
      </FlexBox>
    )
  );
}

Loading.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};

export default Loading;
