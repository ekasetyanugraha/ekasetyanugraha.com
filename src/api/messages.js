import axios from 'axios';

const API_HOST = 'http://localhost:3000';
const BASE_URL = '/messages';

export const getMessages = () => {
  return axios.get(`${API_HOST}${BASE_URL}`);
};
