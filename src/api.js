import axios from 'axios';
import axiosRetry from 'axios-retry';
import {toast} from 'react-toastify';

toast.configure();

const Error = {
  UNAUTHORIZED: 401
};

const createAPI = (onNoAuth, onInternetConnection) => {
  const api = axios.create({
    baseURL: `https://4.react.pages.academy/six-cities`,
    timeout: 1000 * 5,
    withCredentials: true,
  });

  axiosRetry(axios, {
    retries: 2,
    retryDelay: (retryCount) => {
      return retryCount * 1000;
    },
    retryCondition: axiosRetry.isRetryableError,
  });

  const onSuccess = (response) => {
    return response;
  };

  const onError = (error) => {
    const {response} = error;
    if (error.response) {
      toast.error(`Wow so easy!`, {
        position: `top-right`,
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      toast(`Wow so easy !`);
    } else if (error.request) {
      onInternetConnection();

      toast.error(`Wow so easy!`, {
        position: `top-right`,
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }

    if (response.status === Error.UNAUTHORIZED) {
      onNoAuth();

      throw error;
    }

    throw error;
  };

  api.interceptors.response.use(onSuccess, onError);

  return api;
};

export default createAPI;
