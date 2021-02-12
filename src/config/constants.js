// eslint-disable-next-line import/prefer-default-export
export const isIOS =
  /iPad|iPhone|iPod/.test(navigator.platform) ||
  (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1 && !window.MSStream);
