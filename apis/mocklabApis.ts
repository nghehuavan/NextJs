import axiosClient from './axiosClient';

const mocklasbApis = {
  getData: async (params: any = null) => {
    const url = '/photos';
    const data = await axiosClient.get(url, params);
    return data;
  },
};

export default mocklasbApis;
