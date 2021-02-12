import axios from 'axios';
import * as Sentry from '@sentry/react';

const baseURL = process.env.REACT_APP_API_BASEURL;
const Authorization = process.env.REACT_APP_API_AUTHORIZATION_EMAIL;

const instance = axios.create({
  baseURL,
});

/* axios interceptors */
instance.interceptors.request.use(config => {
  return {
    ...config,
    headers: {
      ...config.headers,
      Authorization,
    },
  };
});

instance.interceptors.response.use(
  response => response,
  error => {
    // Send the error to sentry
    Sentry.captureException(error, {
      extra: {
        // with any extra details
        error_response: error.response,
      },
    });

    return Promise.reject(error.message);
  },
);

export default instance;
