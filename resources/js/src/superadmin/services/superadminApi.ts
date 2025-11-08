import api from '@/shared/services/api';
import { User, Library, Book, Event, Analytics } from '@/shared/types';

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
  // Dashboard
  async getDashboard(): Promise<any> {
    try {
      const response = await api.get('/admin/dashboard');
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

  async createSeatSection(libraryId: string, section: { name: string; total_seats: number; description?: string }): Promise<any> {
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
  async getBooks(): Promise<Book[]> {
    try {
      const response = await api.get('/admin/books');
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

  async updateBook(bookId: string, updates: Partial<Book>): Promise<Book> {
    try {
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
  async getEvents(): Promise<Event[]> {
    try {
      const response = await api.get('/admin/events');
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
  async getAnalytics(): Promise<Analytics[]> {
    try {
      const response = await api.get('/admin/analytics');
      return response.data;
    } catch (error) {
      handleApiError(error);
      throw error;
    }
  },
};
