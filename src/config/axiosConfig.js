import axios from 'axios';

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

export default instance;
