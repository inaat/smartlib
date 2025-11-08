import api from '@/shared/services/api';
import { Library, Seat, Book, Event, Booking, Reservation, Notification } from '@/shared/types';

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

export const studentAPI = {
  // Dashboard
  async getDashboard(): Promise<any> {
    try {
      const response = await api.get('/student/dashboard');
      return response.data;
    } catch (error) {
      handleApiError(error);
      throw error;
    }
  },

  // Libraries
  async getLibraries(): Promise<Library[]> {
    try {
      const response = await api.get('/student/libraries');
      return response.data;
    } catch (error) {
      handleApiError(error);
      throw error;
    }
  },

  async getLibrary(id: string): Promise<Library> {
    try {
      const response = await api.get(`/student/libraries/${id}`);
      return response.data;
    } catch (error) {
      handleApiError(error);
      throw error;
    }
  },

  async getLibrarySeats(libraryId: string): Promise<Seat[]> {
    try {
      const response = await api.get(`/student/libraries/${libraryId}/seats`);
      return response.data;
    } catch (error) {
      handleApiError(error);
      throw error;
    }
  },

  // Bookings
  async getBookings(): Promise<Booking[]> {
    try {
      const response = await api.get('/student/bookings');
      return response.data;
    } catch (error) {
      handleApiError(error);
      throw error;
    }
  },

  async createBooking(booking: Omit<Booking, 'id'>): Promise<Booking> {
    try {
      const response = await api.post('/student/bookings', booking);
      return response.data;
    } catch (error) {
      handleApiError(error);
      throw error;
    }
  },

  async checkIn(bookingId: string, qrCode: string): Promise<{ success: boolean }> {
    try {
      const response = await api.post(`/student/bookings/${bookingId}/checkin`, { qrCode });
      return response.data;
    } catch (error) {
      handleApiError(error);
      throw error;
    }
  },

  async checkOut(bookingId: string): Promise<{ success: boolean }> {
    try {
      const response = await api.post(`/student/bookings/${bookingId}/checkout`);
      return response.data;
    } catch (error) {
      handleApiError(error);
      throw error;
    }
  },

  // Books
  async getBooks(): Promise<Book[]> {
    try {
      const response = await api.get('/student/books');
      return response.data;
    } catch (error) {
      handleApiError(error);
      throw error;
    }
  },

  async getBook(id: string): Promise<Book> {
    try {
      const response = await api.get(`/student/books/${id}`);
      return response.data;
    } catch (error) {
      handleApiError(error);
      throw error;
    }
  },

  async reserveBook(bookId: string): Promise<Reservation> {
    try {
      const response = await api.post(`/student/books/${bookId}/reserve`);
      return response.data;
    } catch (error) {
      handleApiError(error);
      throw error;
    }
  },

  // Events
  async getEvents(): Promise<Event[]> {
    try {
      const response = await api.get('/student/events');
      return response.data;
    } catch (error) {
      handleApiError(error);
      throw error;
    }
  },

  async getEvent(id: string): Promise<Event> {
    try {
      const response = await api.get(`/student/events/${id}`);
      return response.data;
    } catch (error) {
      handleApiError(error);
      throw error;
    }
  },

  async registerForEvent(eventId: string): Promise<{ success: boolean }> {
    try {
      const response = await api.post(`/student/events/${eventId}/register`);
      return response.data;
    } catch (error) {
      handleApiError(error);
      throw error;
    }
  },

  // Profile
  async getProfile(): Promise<any> {
    try {
      const response = await api.get('/student/profile');
      return response.data;
    } catch (error) {
      handleApiError(error);
      throw error;
    }
  },

  async updateProfile(userData: any): Promise<any> {
    try {
      const response = await api.put('/student/profile', userData);
      return response.data;
    } catch (error) {
      handleApiError(error);
      throw error;
    }
  },

  // Notifications
  async getNotifications(): Promise<Notification[]> {
    try {
      const response = await api.get('/student/notifications');
      return response.data;
    } catch (error) {
      handleApiError(error);
      throw error;
    }
  },

  async markNotificationRead(notificationId: string): Promise<void> {
    try {
      await api.post(`/student/notifications/${notificationId}/read`);
    } catch (error) {
      handleApiError(error);
    }
  },

  // Loyalty
  async getLoyaltyTransactions(): Promise<any[]> {
    try {
      const response = await api.get('/student/profile/loyalty-transactions');
      return response.data;
    } catch (error) {
      handleApiError(error);
      throw error;
    }
  },
};
