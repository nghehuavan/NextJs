import useAxios from './useAxios';

const sampleApi = {
  getData: async (params?: {}) => {
    const url = '/photos';
    const data = await useAxios().get(url, { params });
    return data;
  },
};

export default sampleApi;
