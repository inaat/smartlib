import api from '@/shared/services/api';
import { User } from '@/shared/types';

const handleApiError = (error: any) => {
  if (error.response) {
    console.error('API Error:', error.response.data);
    throw new Error(error.response.data.message || 'An error occurred');
  } else if (error.request) {
    console.error('Network Error:', error.request);
    throw new Error('Network error. Please check your connection.');
  } else {
    console.error('Error:', error.message);
    throw new Error(error.message);
  }
};

export const authAPI = {
  async login(crn: string, password: string): Promise<{ user: User; token: string }> {
    try {
      const response = await api.post('/auth/login', { crn, password });
      if (response.data.token) {
        localStorage.setItem('auth_token', response.data.token);
      }
      return response.data;
    } catch (error) {
      handleApiError(error);
      throw error;
    }
  },

  async register(userData: Partial<User> & { password: string }): Promise<{ user: User; token: string }> {
    try {
      const response = await api.post('/auth/register', userData);
      if (response.data.token) {
        localStorage.setItem('auth_token', response.data.token);
      }
      return response.data;
    } catch (error) {
      handleApiError(error);
      throw error;
    }
  },

  async logout(): Promise<void> {
    try {
      await api.post('/auth/logout');
      localStorage.removeItem('auth_token');
      localStorage.removeItem('smart-lib-user');
    } catch (error) {
      handleApiError(error);
    }
  },

  async getCurrentUser(): Promise<User> {
    try {
      const response = await api.get('/auth/user');
      return response.data;
    } catch (error) {
      handleApiError(error);
      throw error;
    }
  },
};
