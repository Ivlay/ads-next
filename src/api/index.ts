import axios from 'axios';
import Cookies from 'js-cookie';

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URI,
  headers: {
    Authorization: `Bearer ${Cookies.get('token') || ''}`,
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
