import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000';

export const getBooks = async () => {
  const response = await axios.get(`${API_BASE_URL}/books`);
  return response.data;
};
