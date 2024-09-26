import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000'; //

export const registerUser = async (userData: {
  username: string;
  email: string;
  password: string;
}) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/users/register`,
      userData,
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(error.response.data.message || 'Registration failed');
    }
    throw new Error('An unexpected error occurred');
  }
};
