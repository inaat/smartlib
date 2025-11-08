import axios, { AxiosInstance } from 'axios';

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

// Auth API
export const authAPI = {
  login: async (crn: string, password: string) => {
    const response = await api.post('/auth/login', { crn, password });
    if (response.data.token) {
      localStorage.setItem('auth_token', response.data.token);
    }
    return response.data;
  },

  register: async (userData: any) => {
    const response = await api.post('/auth/register', userData);
    if (response.data.token) {
      localStorage.setItem('auth_token', response.data.token);
    }
    return response.data;
  },

  logout: async () => {
    const response = await api.post('/auth/logout');
    localStorage.removeItem('auth_token');
    return response.data;
  },

  getCurrentUser: async () => {
    const response = await api.get('/auth/user');
    return response.data;
  },
};

// Student API
export const studentAPI = {
  getNotifications: async () => {
    const response = await api.get('/student/notifications');
    return response.data;
  },

  markNotificationRead: async (notificationId: string) => {
    const response = await api.patch(`/student/notifications/${notificationId}/read`);
    return response.data;
  },

  updateProfile: async (userData: any) => {
    const response = await api.put('/student/profile', userData);
    return response.data;
  },

  getLibraries: async () => {
    const response = await api.get('/student/libraries');
    return response.data;
  },

  getBooks: async () => {
    const response = await api.get('/student/books');
    return response.data;
  },

  getEvents: async () => {
    const response = await api.get('/student/events');
    return response.data;
  },

  getBookings: async () => {
    const response = await api.get('/student/bookings');
    return response.data;
  },

  createBooking: async (bookingData: any) => {
    const response = await api.post('/student/bookings', bookingData);
    return response.data;
  },

  cancelBooking: async (bookingId: string) => {
    const response = await api.delete(`/student/bookings/${bookingId}`);
    return response.data;
  },

  reserveBook: async (bookId: string) => {
    const response = await api.post(`/student/books/${bookId}/reserve`);
    return response.data;
  },

  checkIn: async (bookingId: string, qrCode: string) => {
    const response = await api.post(`/student/bookings/${bookingId}/checkin`, { qr_code: qrCode });
    return response.data;
  },

  checkOut: async (bookingId: string) => {
    const response = await api.post(`/student/bookings/${bookingId}/checkout`);
    return response.data;
  },
};

// Admin API
export const adminAPI = {
  getUsers: async () => {
    const response = await api.get('/admin/users');
    return response.data;
  },

  updateUser: async (userId: string, userData: any) => {
    const response = await api.put(`/admin/users/${userId}`, userData);
    return response.data;
  },

  deleteUser: async (userId: string) => {
    const response = await api.delete(`/admin/users/${userId}`);
    return response.data;
  },

  approveUser: async (userId: string) => {
    const response = await api.patch(`/admin/users/${userId}/approve`);
    return response.data;
  },

  rejectUser: async (userId: string) => {
    const response = await api.delete(`/admin/users/${userId}/reject`);
    return response.data;
  },

  getLibraries: async () => {
    const response = await api.get('/admin/libraries');
    return response.data;
  },

  createLibrary: async (libraryData: any) => {
    const headers = libraryData instanceof FormData
      ? { 'Content-Type': 'multipart/form-data' }
      : {};
    const response = await api.post('/admin/libraries', libraryData, { headers });
    return response.data;
  },

  updateLibrary: async (libraryId: string, libraryData: any) => {
    const headers = libraryData instanceof FormData
      ? { 'Content-Type': 'multipart/form-data' }
      : {};

    // For FormData with PUT, we need to use POST with _method field
    if (libraryData instanceof FormData) {
      const response = await api.post(`/admin/libraries/${libraryId}`, libraryData, { headers });
      return response.data;
    } else {
      const response = await api.put(`/admin/libraries/${libraryId}`, libraryData);
      return response.data;
    }
  },

  deleteLibrary: async (libraryId: string) => {
    const response = await api.delete(`/admin/libraries/${libraryId}`);
    return response.data;
  },

  getBooks: async () => {
    const response = await api.get('/admin/books');
    return response.data;
  },

  createBook: async (bookData: any) => {
    const headers = bookData instanceof FormData
      ? { 'Content-Type': 'multipart/form-data' }
      : {};
    const response = await api.post('/admin/books', bookData, { headers });
    return response.data;
  },

  updateBook: async (bookId: string, bookData: any) => {
    const headers = bookData instanceof FormData
      ? { 'Content-Type': 'multipart/form-data' }
      : {};

    // For FormData with PUT, we need to use POST with _method field
    if (bookData instanceof FormData) {
      bookData.append('_method', 'PUT');
      const response = await api.post(`/admin/books/${bookId}`, bookData, { headers });
      return response.data;
    } else {
      const response = await api.put(`/admin/books/${bookId}`, bookData);
      return response.data;
    }
  },

  deleteBook: async (bookId: string) => {
    const response = await api.delete(`/admin/books/${bookId}`);
    return response.data;
  },

  getEvents: async () => {
    const response = await api.get('/admin/events');
    return response.data;
  },

  createEvent: async (eventData: any) => {
    const response = await api.post('/admin/events', eventData);
    return response.data;
  },

  updateEvent: async (eventId: string, eventData: any) => {
    const response = await api.put(`/admin/events/${eventId}`, eventData);
    return response.data;
  },

  deleteEvent: async (eventId: string) => {
    const response = await api.delete(`/admin/events/${eventId}`);
    return response.data;
  },

  getDashboardStats: async () => {
    const response = await api.get('/admin/dashboard/stats');
    return response.data;
  },

  getSeatSections: async (libraryId: string) => {
    const response = await api.get(`/admin/libraries/${libraryId}/sections`);
    return response.data;
  },

  createSeatSection: async (libraryId: string, sectionData: any) => {
    const response = await api.post(`/admin/libraries/${libraryId}/sections`, sectionData);
    return response.data;
  },

  updateSeatSection: async (libraryId: string, sectionId: string, sectionData: any) => {
    const response = await api.put(`/admin/libraries/${libraryId}/sections/${sectionId}`, sectionData);
    return response.data;
  },

  deleteSeatSection: async (libraryId: string, sectionId: string) => {
    const response = await api.delete(`/admin/libraries/${libraryId}/sections/${sectionId}`);
    return response.data;
  },

  getSeats: async (libraryId?: string) => {
    const url = libraryId ? `/admin/libraries/${libraryId}/seats` : '/admin/seats';
    const response = await api.get(url);
    return response.data;
  },

  createSeat: async (seatData: any) => {
    const response = await api.post('/admin/seats', seatData);
    return response.data;
  },

  updateSeat: async (seatId: string, seatData: any) => {
    const response = await api.put(`/admin/seats/${seatId}`, seatData);
    return response.data;
  },

  deleteSeat: async (seatId: string) => {
    const response = await api.delete(`/admin/seats/${seatId}`);
    return response.data;
  },

  getSubscriptionPlans: async () => {
    const response = await api.get('/admin/subscription-plans');
    return response.data;
  },

  createSubscriptionPlan: async (planData: any) => {
    const response = await api.post('/admin/subscription-plans', planData);
    return response.data;
  },

  updateSubscriptionPlan: async (planId: string, planData: any) => {
    const response = await api.put(`/admin/subscription-plans/${planId}`, planData);
    return response.data;
  },

  deleteSubscriptionPlan: async (planId: string) => {
    const response = await api.delete(`/admin/subscription-plans/${planId}`);
    return response.data;
  },
};

// Librarian API
export const librarianAPI = {
  getLibraryStats: async (libraryId: string) => {
    const response = await api.get(`/librarian/libraries/${libraryId}/stats`);
    return response.data;
  },

  getLibraryBookings: async (libraryId: string) => {
    const response = await api.get(`/librarian/libraries/${libraryId}/bookings`);
    return response.data;
  },

  updateBooking: async (bookingId: string, bookingData: any) => {
    const response = await api.put(`/librarian/bookings/${bookingId}`, bookingData);
    return response.data;
  },

  getSeatSections: async (libraryId: string) => {
    const response = await api.get(`/librarian/libraries/${libraryId}/sections`);
    return response.data;
  },

  createSeatSection: async (libraryId: string, sectionData: any) => {
    const response = await api.post(`/librarian/libraries/${libraryId}/sections`, sectionData);
    return response.data;
  },

  updateSeatSection: async (libraryId: string, sectionId: string, sectionData: any) => {
    const response = await api.put(`/librarian/libraries/${libraryId}/sections/${sectionId}`, sectionData);
    return response.data;
  },

  deleteSeatSection: async (libraryId: string, sectionId: string) => {
    const response = await api.delete(`/librarian/libraries/${libraryId}/sections/${sectionId}`);
    return response.data;
  },

  getSeats: async () => {
    const response = await api.get('/librarian/seats');
    return response.data;
  },

  createSeat: async (seatData: any) => {
    const response = await api.post('/librarian/seats', seatData);
    return response.data;
  },

  updateSeat: async (seatId: string, seatData: any) => {
    const response = await api.put(`/librarian/seats/${seatId}`, seatData);
    return response.data;
  },

  deleteSeat: async (seatId: string) => {
    const response = await api.delete(`/librarian/seats/${seatId}`);
    return response.data;
  },

  getEvents: async () => {
    const response = await api.get('/librarian/events');
    return response.data;
  },

  createEvent: async (eventData: any) => {
    const headers = eventData instanceof FormData
      ? { 'Content-Type': 'multipart/form-data' }
      : {};
    const response = await api.post('/librarian/events', eventData, { headers });
    return response.data;
  },

  updateEvent: async (eventId: string, eventData: any) => {
    const headers = eventData instanceof FormData
      ? { 'Content-Type': 'multipart/form-data' }
      : {};

    if (eventData instanceof FormData) {
      eventData.append('_method', 'PUT');
      const response = await api.post(`/librarian/events/${eventId}`, eventData, { headers });
      return response.data;
    } else {
      const response = await api.put(`/librarian/events/${eventId}`, eventData);
      return response.data;
    }
  },

  deleteEvent: async (eventId: string) => {
    const response = await api.delete(`/librarian/events/${eventId}`);
    return response.data;
  },

  getAnalytics: async (timeRange?: string) => {
    const params = timeRange ? { timeRange } : {};
    const response = await api.get('/librarian/analytics', { params });
    return response.data;
  },
};

export default api;
