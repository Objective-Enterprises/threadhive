import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';
// const API_BASE_URL = "https://w04-mls.onrender.com/api";

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');

  if (token) {
    config.headers.Authorization = 'Bearer ' + token;
  }

  return config;
});

export const fetchAPI = async (endpoint, options = {}) => {
  const response = await apiClient({
    url: endpoint,
    method: options.method || 'GET',
    data: options.body,
    headers: options.headers,
  });

  return response.data;
};

export default fetchAPI;
