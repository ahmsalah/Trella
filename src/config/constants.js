export const isIOS =
  /iPad|iPhone|iPod/.test(navigator.platform) ||
  (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1 && !window.MSStream);

// Cairo coordinates
export const initialLocation = {
  lat: 30.04735861255239,
  lng: 31.235888303861767,
};
