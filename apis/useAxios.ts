import axios from 'axios';

const isServer = process.version ? true : false;

const useAxios = () => {
  const axiosClient = axios.create({
    baseURL: isServer
      ? process.env.API_BASE_URL
      : process.env.NEXT_PUBLIC_API_BASE_URL,
    headers: {
      'Content-type': 'application/json',
    },
  });

  // Request interceptor for API calls
  axiosClient.interceptors.request.use(
    async (config) => {
      const token = isServer
        ? process.env.API_TOKEN
        : localStorage.getItem('access_token');

      config.headers = {
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
      };

      if (token && token !== '')
        config.headers = {
          ...config.headers,
          Authorization: `Bearer ${token}`,
        };

      return config;
    },
    (error) => {}
  );

  axiosClient.interceptors.response.use(
    async (response) => {
      if (response && response.data) return response.data;
      return response;
    },
    function (error) {
      return Promise.reject(error);
    }
  );

  return axiosClient;
};

export default useAxios;
