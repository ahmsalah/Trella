import React from 'react';
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

export default Loading;
