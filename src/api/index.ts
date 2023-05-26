import axios from 'axios';
import Cookies from 'js-cookie';

const axiosInstance = axios.create({
  baseURL: process.env.BACKEND_URI,
  headers: {
    Authorization: `Bearer ${Cookies.get('token') || ''}`,
  },
});

export default axiosInstance;
