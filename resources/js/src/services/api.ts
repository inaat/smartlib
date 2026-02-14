import axios, { AxiosInstance, AxiosError } from 'axios';
import { User, Library, Seat, Book, Event, Booking, Reservation, Notification, Analytics, SupportTicket, SupportMessage } from '../shared/types';


// Create axios instance with default config
const api: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:8000/api',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
  withCredentials: true, // Enable credentials for CSRF token
});

// Request interceptor to add auth token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('auth_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor to handle errors
api.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    if (error.response?.status === 401) {
      // Clear token and redirect to login
      localStorage.removeItem('auth_token');
      localStorage.removeItem('smart-lib-user');
      window.location.href = '/';
    }
    return Promise.reject(error);
  }
);

// Helper function to handle API errors
const handleApiError = (error: any) => {
  if (error.response) {
    // Server responded with error
    console.error('API Error:', error.response.data);
    throw new Error(error.response.data.message || 'An error occurred');
  } else if (error.request) {
    // Request made but no response
    console.error('Network Error:', error.request);
    throw new Error('Network error. Please check your connection.');
  } else {
    // Something else happened
    console.error('Error:', error.message);
    throw new Error(error.message);
  }
};

// ============= Auth API =============
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

// ============= Student API =============
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

  async joinQueue(seatId: number): Promise<any> {
    try {
      const response = await api.post('/student/bookings/join-queue', { seat_id: seatId });
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
  async getProfile(): Promise<User> {
    try {
      const response = await api.get('/student/profile');
      return response.data;
    } catch (error) {
      handleApiError(error);
      throw error;
    }
  },

  async updateProfile(userData: Partial<User>): Promise<User> {
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

// ============= Admin API =============
export const adminAPI = {
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

// ============= Librarian API =============
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

  async updateSeatAdmin(seatId: string, updates: Partial<Seat>): Promise<Seat> {
    try {
      const response = await api.put(`/librarian/seats/${seatId}`, updates);
      return response.data;
    } catch (error) {
      handleApiError(error);
      throw error;
    }
  },
};

// ============= Support API =============
export const supportAPI = {
  async getTickets(role: 'student' | 'librarian' | 'admin'): Promise<SupportTicket[]> {
    try {
      const response = await api.get(`/${role}/support-tickets`);
      return response.data;
    } catch (error) {
      handleApiError(error);
      throw error;
    }
  },

  async createTicket(ticket: { subject: string; message: string; priority: string; library_id?: number }): Promise<SupportTicket> {
    try {
      const response = await api.post('/student/support-tickets', ticket);
      return response.data;
    } catch (error) {
      handleApiError(error);
      throw error;
    }
  },

  async getTicket(role: 'student' | 'librarian' | 'admin', id: number): Promise<SupportTicket> {
    try {
      const response = await api.get(`/${role}/support-tickets/${id}`);
      return response.data;
    } catch (error) {
      handleApiError(error);
      throw error;
    }
  },

  async sendMessage(role: 'student' | 'librarian' | 'admin', ticketId: number, message: string): Promise<SupportMessage> {
    try {
      const response = await api.post(`/${role}/support-tickets/${ticketId}/messages`, { message });
      return response.data;
    } catch (error) {
      handleApiError(error);
      throw error;
    }
  },

  async updateStatus(role: 'student' | 'librarian' | 'admin', ticketId: number, status: string): Promise<SupportTicket> {
    try {
      const response = await api.put(`/${role}/support-tickets/${ticketId}/status`, { status });
      return response.data;
    } catch (error) {
      handleApiError(error);
      throw error;
    }
  },
};

export default api;

