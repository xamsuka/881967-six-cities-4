import axios from 'axios';
import axiosRetry from 'axios-retry';
import {toast} from 'react-toastify';

toast.configure();

const Error = {
  UNAUTHORIZED: 401,
  BADREQUEST: 400,
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
      if (response.status === Error.UNAUTHORIZED) {
        onNoAuth();

        throw error;
      } else if (response.status === Error.BADREQUEST) {
        toast.error(`"email" должен быть действительным адресом электронной почты`, {
          position: `top-right`,
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });

        throw error;
      }
    } else if (error.request) {
      onInternetConnection();

      toast.error(`Не удалось выполнить запрос. Проверьте подключение к интернету`, {
        position: `top-right`,
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      throw error;
    }

    if (error.request) {
      onInternetConnection();

      toast.error(`Отсутствует интернет соединение, попробуйте ещё раз!`, {
        position: `top-right`,
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }

    throw error;
  };

  api.interceptors.response.use(onSuccess, onError);

  return api;
};

export default createAPI;
