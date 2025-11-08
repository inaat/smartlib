import api from '@/shared/services/api';
import { Seat, Library, User, Book, Event } from '@/shared/types';

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

export const librarianAPI = {
  // Dashboard
  async getDashboard(): Promise<any> {
    try {
      const response = await api.get('/librarian/dashboard');
      return response.data;
    } catch (error) {
      handleApiError(error);
      throw error;
    }
  },

  // Seats
  async getSeats(): Promise<Seat[]> {
    try {
      const response = await api.get('/librarian/seats');
      return response.data;
    } catch (error) {
      handleApiError(error);
      throw error;
    }
  },

  async createSeat(seat: Omit<Seat, 'id'>): Promise<Seat> {
    try {
      const response = await api.post('/librarian/seats', seat);
      return response.data;
    } catch (error) {
      handleApiError(error);
      throw error;
    }
  },

  async updateSeat(seatId: string, updates: Partial<Seat>): Promise<Seat> {
    try {
      const response = await api.put(`/librarian/seats/${seatId}`, updates);
      return response.data;
    } catch (error) {
      handleApiError(error);
      throw error;
    }
  },

  async deleteSeat(seatId: string): Promise<void> {
    try {
      await api.delete(`/librarian/seats/${seatId}`);
    } catch (error) {
      handleApiError(error);
    }
  },

  


 


  // Books
  async getBooks(): Promise<Book[]> {
    try {
      const response = await api.get('/admin/books');
      return response.data;
    } catch (error) {
      handleApiError(error);
      throw error;
    }
  },

  async updateBook(bookId: string, updates: Partial<Book>): Promise<Book> {
    try {
      const response = await api.put(`/admin/books/${bookId}`, updates);
      return response.data;
    } catch (error) {
      handleApiError(error);
      throw error;
    }
  },

  // Bookings
  async getBookings(): Promise<any[]> {
    try {
      const response = await api.get('/admin/bookings');
      return response.data;
    } catch (error) {
      handleApiError(error);
      throw error;
    }
  },
};
