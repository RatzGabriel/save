import axios from 'axios';
import { toast } from 'react-toastify';
import logger from './logService';

axios.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response && error.response.state >= 400 && error.response.state < 500;
  if (expectedError) return Promise.reject(error);
  toast.error('ALARM');
  logger.log(error);
  return Promise.reject(error);
});

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};
