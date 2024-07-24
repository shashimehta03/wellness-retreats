import axios from 'axios';

const API_BASE_URL = 'https://669f704cb132e2c136fdd9a0.mockapi.io/api/v1/retreats';

export const getRetreats = async (page, limit) => {
  const response = await axios.get(`${API_BASE_URL}?page=${page}&limit=${limit}`);
  return response.data;
};

export const searchRetreats = async (query) => {
  const response = await axios.get(`${API_BASE_URL}?search=${query}`);
  return response.data;
};

export const filterRetreats = async (field, value) => {
  const response = await axios.get(`${API_BASE_URL}?${field}=${value}`);
  return response.data;
};
