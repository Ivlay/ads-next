import axios from 'axios';
import Cookies from 'js-cookie';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8080/api/v1',
  headers: {
    Authorization: `Bearer ${Cookies.get('token') || ''}`,
  },
});

export default axiosInstance;
