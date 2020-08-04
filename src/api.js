import axios from 'axios';
import axiosRetry from 'axios-retry';

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
      // client received an error response (5xx, 4xx)
    } else if (error.request) {
      onInternetConnection();
    } else {
      // anything else
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
