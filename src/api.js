import axios from 'axios';

const Error = {
  UNAUTHORIZED: 401
};

const createAPI = (onNoAuth, onInternetConnection) => {
  const api = axios.create({
    baseURL: `https://4.react.pages.academy/six-cities`,
    timeout: 1000 * 5,
    withCredentials: true,
  });

  const onSuccess = (response) => {
    return response;
  };

  const onError = (error) => {
    const {response} = error;
    debugger;
    onInternetConnection();

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
