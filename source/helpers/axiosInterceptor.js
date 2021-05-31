import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import envs from '../config/env';

let headers = {};

const axiosInstance = axios.create({
  baseURL: envs.BACKEND_URL,
  headers,
});

axiosInstance.interceptors.request.use(
  async config => {
    // if (config.method === 'post') {
    //   config.headers.post['Content-Type'] = 'application/json';
    // }
    const token = await AsyncStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    // console.log(config.baseURL + config.url);
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

export default axiosInstance;
