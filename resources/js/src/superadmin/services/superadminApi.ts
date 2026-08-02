import api from '@/shared/services/api';
import { User, Library, Book, Event } from '@/shared/types';

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

export const superadminAPI = {
  async updateStudyTable(id: number | string, data: any): Promise<any> {
    try {
      const response = await api.put(`/admin/study-tables/${id}`, data);
      return response.data;
    } catch (error) {
      handleApiError(error);
      throw error;
    }
  },
  // Dashboard
  async getDashboard(params?: any): Promise<any> {
    try {
      const response = await api.get('/admin/dashboard', { params });
      return response.data;
    } catch (error) {
      handleApiError(error);
      throw error;
    }
  },

  // Users
  async getUsers(): Promise<User[]> {
    try {
      const response = await api.get('/admin/users');
      return response.data;
    } catch (error) {
      handleApiError(error);
      throw error;
    }
  },

  async getPendingUsers(): Promise<User[]> {
    try {
      const response = await api.get('/admin/users/pending');
      return response.data;
    } catch (error) {
      handleApiError(error);
      throw error;
    }
  },

  async approveUser(userId: string): Promise<void> {
    try {
      await api.post(`/admin/users/${userId}/approve`);
    } catch (error) {
      handleApiError(error);
    }
  },

  async rejectUser(userId: string): Promise<void> {
    try {
      await api.delete(`/admin/users/${userId}/reject`);
    } catch (error) {
      handleApiError(error);
    }
  },

  async updateUser(userId: string, updates: Partial<User>): Promise<User> {
    try {
      const response = await api.put(`/admin/users/${userId}`, updates);
      return response.data;
    } catch (error) {
      handleApiError(error);
      throw error;
    }
  },

  // Libraries
  async getLibraries(): Promise<Library[]> {
    try {
      const response = await api.get('/admin/libraries');
      return response.data;
    } catch (error) {
      handleApiError(error);
      throw error;
    }
  },

  async createLibrary(library: Omit<Library, 'id'>): Promise<Library> {
    try {
      const response = await api.post('/admin/libraries', library);
      return response.data;
    } catch (error) {
      handleApiError(error);
      throw error;
    }
  },

  async updateLibrary(libraryId: string, updates: Partial<Library>): Promise<Library> {
    try {
      const response = await api.put(`/admin/libraries/${libraryId}`, updates);
      return response.data;
    } catch (error) {
      handleApiError(error);
      throw error;
    }
  },

  async deleteLibrary(libraryId: string): Promise<void> {
    try {
      await api.delete(`/admin/libraries/${libraryId}`);
    } catch (error) {
      handleApiError(error);
    }
  },

  // Seat Sections
  async getSeatSections(libraryId: string): Promise<any[]> {
    try {
      const response = await api.get(`/admin/libraries/${libraryId}/sections`);
      return response.data;
    } catch (error) {
      handleApiError(error);
      throw error;
    }
  },

  async createSeatSection(libraryId: string, section: { name: string; total_seats: number; gender: string; description?: string; floor_id: number }): Promise<any> {
    try {
      const response = await api.post(`/admin/libraries/${libraryId}/sections`, section);
      return response.data;
    } catch (error) {
      handleApiError(error);
      throw error;
    }
  },

  async updateSeatSection(libraryId: string, sectionId: string, updates: any): Promise<any> {
    try {
      const response = await api.put(`/admin/libraries/${libraryId}/sections/${sectionId}`, updates);
      return response.data;
    } catch (error) {
      handleApiError(error);
      throw error;
    }
  },

  async deleteSeatSection(libraryId: string, sectionId: string): Promise<void> {
    try {
      await api.delete(`/admin/libraries/${libraryId}/sections/${sectionId}`);
    } catch (error) {
      handleApiError(error);
      throw error;
    }
  },

  // Books
  async getBooks(params?: any): Promise<Book[]> {
    try {
      const response = await api.get('/admin/books', { params });
      return response.data;
    } catch (error) {
      handleApiError(error);
      throw error;
    }
  },

  async createBook(book: Omit<Book, 'id'>): Promise<Book> {
    try {
      const response = await api.post('/admin/books', book);
      return response.data;
    } catch (error) {
      handleApiError(error);
      throw error;
    }
  },

  async updateBook(bookId: string, updates: any): Promise<Book> {
    try {
      if (updates instanceof FormData) {
        updates.append('_method', 'PUT');
        const response = await api.post(`/admin/books/${bookId}`, updates);
        return response.data;
      }
      const response = await api.put(`/admin/books/${bookId}`, updates);
      return response.data;
    } catch (error) {
      handleApiError(error);
      throw error;
    }
  },

  async deleteBook(bookId: string): Promise<void> {
    try {
      await api.delete(`/admin/books/${bookId}`);
    } catch (error) {
      handleApiError(error);
    }
  },

  // Events
  async getEvents(params?: any): Promise<Event[]> {
    try {
      const response = await api.get('/admin/events', { params });
      return response.data;
    } catch (error) {
      handleApiError(error);
      throw error;
    }
  },

  async createEvent(event: Omit<Event, 'id'>): Promise<Event> {
    try {
      const response = await api.post('/admin/events', event);
      return response.data;
    } catch (error) {
      handleApiError(error);
      throw error;
    }
  },

  async updateEvent(eventId: string, updates: Partial<Event>): Promise<Event> {
    try {
      const response = await api.put(`/admin/events/${eventId}`, updates);
      return response.data;
    } catch (error) {
      handleApiError(error);
      throw error;
    }
  },

  async deleteEvent(eventId: string): Promise<void> {
    try {
      await api.delete(`/admin/events/${eventId}`);
    } catch (error) {
      handleApiError(error);
    }
  },

  // Analytics
  async getAnalytics(params?: any): Promise<any> {
    try {
      const response = await api.get('/admin/analytics', { params });
      return response.data;
    } catch (error) {
      handleApiError(error);
      throw error;
    }
  },

  // Floors
  async getFloors(libraryId: number): Promise<any[]> {
    try {
      const response = await api.get(`/admin/libraries/${libraryId}/floors`);
      return response.data;
    } catch (error) {
      handleApiError(error);
      throw error;
    }
  },

  async createFloor(libraryId: number, floor: FormData): Promise<any> {
    try {
      const response = await api.post(`/admin/libraries/${libraryId}/floors`, floor);
      return response.data;
    } catch (error) {
      handleApiError(error);
      throw error;
    }
  },

  async updateFloor(libraryId: number, floorId: number, floor: FormData): Promise<any> {
    try {
      const response = await api.post(`/admin/libraries/${libraryId}/floors/${floorId}`, floor);
      return response.data;
    } catch (error) {
      handleApiError(error);
      throw error;
    }
  },

  async deleteFloor(libraryId: number, floorId: number): Promise<void> {
    try {
      await api.delete(`/admin/libraries/${libraryId}/floors/${floorId}`);
    } catch (error) {
      handleApiError(error);
      throw error;
    }
  },

  // Bookings
  async getBookings(params?: any): Promise<any> {
    try {
      const response = await api.get('/librarian/bookings', { params });
      return response.data;
    } catch (error) {
      handleApiError(error);
      throw error;
    }
  },

  async getBookingStats(params?: any): Promise<any> {
    try {
      const response = await api.get('/librarian/bookings/stats', { params });
      return response.data;
    } catch (error) {
      handleApiError(error);
      throw error;
    }
  },

  // Seats
  async getSeats(params?: any): Promise<any[]> {
    try {
      const response = await api.get('/librarian/seats', { params });
      return response.data;
    } catch (error) {
      handleApiError(error);
      throw error;
    }
  },

  async createSeat(seat: any): Promise<any> {
    try {
      const response = await api.post('/librarian/seats', seat);
      return response.data;
    } catch (error) {
      handleApiError(error);
      throw error;
    }
  },

  async updateSeat(seatId: number, updates: any): Promise<any> {
    try {
      const response = await api.put(`/librarian/seats/${seatId}`, updates);
      return response.data;
    } catch (error) {
      handleApiError(error);
      throw error;
    }
  },

  async deleteSeat(seatId: number): Promise<void> {
    try {
      await api.delete(`/librarian/seats/${seatId}`);
    } catch (error) {
      handleApiError(error);
      throw error;
    }
  },

  // Orders
  async getOrders(params?: any): Promise<any> {
    try {
      const response = await api.get('/admin/orders', { params });
      return response.data;
    } catch (error) {
      handleApiError(error);
      throw error;
    }
  },

  async approveOrder(orderId: number): Promise<void> {
    try {
      await api.post(`/admin/orders/${orderId}/approve`);
    } catch (error) {
      handleApiError(error);
      throw error;
    }
  },

  async rejectOrder(orderId: number, notes?: string): Promise<void> {
    try {
      await api.post(`/admin/orders/${orderId}/reject`, { notes });
    } catch (error) {
      handleApiError(error);
      throw error;
    }
  },

  async getUserSubscriptions(params?: any): Promise<any> {
    try {
      const response = await api.get('/admin/user-subscriptions', { params });
      return response.data;
    } catch (error) {
      handleApiError(error);
      throw error;
    }
  },

  // Scheduled Reports
  async getScheduledReports(params?: any): Promise<any> {
    try {
      const response = await api.get('/admin/scheduled-reports', { params });
      return response.data;
    } catch (error) {
      handleApiError(error);
      throw error;
    }
  },

  async getGeneratedReports(params?: any): Promise<any> {
    try {
      const response = await api.get('/admin/generated-reports', { params });
      return response.data;
    } catch (error) {
      handleApiError(error);
      throw error;
    }
  },

  async runScheduledReportNow(id: number): Promise<any> {
    try {
      const response = await api.post(`/admin/scheduled-reports/${id}/run-now`);
      return response.data;
    } catch (error) {
      handleApiError(error);
      throw error;
    }
  },
};
