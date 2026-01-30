import axios, { AxiosInstance } from 'axios';

// Create axios instance
const api: AxiosInstance = axios.create({
  baseURL: '/api',
  headers: {
    'Accept': 'application/json',
  },
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
  (error) => {
    if (error.response?.status === 401) {
      // Unauthorized - clear token and redirect to login
      localStorage.removeItem('auth_token');
      localStorage.removeItem('smart-lib-user');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// Auth API
export const authAPI = {
  async login(email: string, password: string, remember: boolean = false) {
    const response = await api.post('/auth/login', { email, password, remember });
    if (response.data.token) {
      localStorage.setItem('auth_token', response.data.token);
    }
    return response.data;
  },

  async sendOTP(phone: string, crn: string) {
    const response = await api.post('/auth/send-otp', { phone, crn });
    return response.data;
  },

  async checkUniqueness(field: 'email' | 'crn', value: string) {
    const response = await api.post('/auth/check-uniqueness', { field, value });
    return response.data;
  },

  async register(userData: any) {
    const response = await api.post('/auth/register', userData);
    if (response.data.token) {
      localStorage.setItem('auth_token', response.data.token);
    }
    return response.data;
  },

  async getCurrentUser() {
    const response = await api.get('/auth/me');
    return response.data;
  },

  async getPublicSettings() {
    const response = await api.get('/settings/public');
    return response.data;
  },

  async logout() {
    await api.post('/auth/logout');
    localStorage.removeItem('auth_token');
    localStorage.removeItem('smart-lib-user');
  },

  async logoutAll() {
    await api.post('/auth/logout-all');
    localStorage.removeItem('auth_token');
    localStorage.removeItem('smart-lib-user');
  },
};

// Student API
export const studentAPI = {
  async getDashboard() {
    const response = await api.get('/student/dashboard');
    return response.data;
  },

  async getLibraries() {
    const response = await api.get('/student/libraries');
    return response.data;
  },

  async getLibrary(id: number) {
    const response = await api.get(`/student/libraries/${id}`);
    return response.data;
  },

  async getSeats(libraryId: number) {
    const response = await api.get(`/student/libraries/${libraryId}/seats`);
    return response.data;
  },

  async getBookings() {
    const response = await api.get('/student/bookings');
    return response.data;
  },

  async createBooking(data: any) {
    const response = await api.post('/student/bookings', data);
    return response.data;
  },

  async checkIn(bookingId: number, qrCode: string) {
    const response = await api.post(`/student/bookings/${bookingId}/checkin`, { qr_code: qrCode });
    return response.data;
  },

  async checkOut(bookingId: number) {
    const response = await api.post(`/student/bookings/${bookingId}/checkout`);
    return response.data;
  },

  async extendBooking(bookingId: number, minutes: number) {
    const response = await api.post(`/student/bookings/${bookingId}/extend`, { minutes });
    return response.data;
  },

  async cancelBooking(bookingId: number) {
    const response = await api.post(`/student/bookings/${bookingId}/cancel`);
    return response.data;
  },



  async getEvents() {
    const response = await api.get('/student/events');
    return response.data;
  },

  async registerForEvent(eventId: number) {
    const response = await api.post(`/student/events/${eventId}/register`);
    return response.data;
  },

  async getBooks() {
    const response = await api.get('/student/books');
    return response.data;
  },

  async reserveBook(bookId: number) {
    const response = await api.post(`/student/books/${bookId}/reserve`);
    return response.data;
  },

  async getMyReservations() {
    const response = await api.get('/student/books/reservations');
    return response.data;
  },

  async returnBook(reservationId: number) {
    const response = await api.post(`/student/books/reservations/${reservationId}/return`);
    return response.data;
  },

  async pickUpBook(reservationId: number) {
    const response = await api.post(`/student/books/reservations/${reservationId}/pick-up`);
    return response.data;
  },

  async getProfile() {
    const response = await api.get('/profile');
    return response.data;
  },

  async updateProfile(data: any) {
    if (data instanceof FormData) {
      data.append('_method', 'PUT');
      const response = await api.post('/profile', data);
      return response.data;
    }
    const response = await api.put('/profile', data);
    return response.data;
  },

  async getNotifications() {
    const response = await api.get('/notifications');
    return response.data;
  },

  async markNotificationRead(notificationId: number) {
    const response = await api.post(`/notifications/${notificationId}/read`);
    return response.data;
  },
  async getAnalytics() {
    const response = await api.get('/student/analytics');
    return response.data;
  },
};

// Admin API
export const adminAPI = {
  async getDashboard() {
    const response = await api.get('/admin/dashboard');
    return response.data;
  },

  async getStats() {
    const response = await api.get('/admin/dashboard/stats');
    return response.data;
  },

  async getUsers() {
    const response = await api.get('/admin/users');
    return response.data;
  },

  async getPendingUsers() {
    const response = await api.get('/admin/users/pending');
    return response.data;
  },

  async approveUser(userId: number) {
    const response = await api.post(`/admin/users/${userId}/approve`);
    return response.data;
  },

  async rejectUser(userId: number) {
    const response = await api.delete(`/admin/users/${userId}/reject`);
    return response.data;
  },

  async createUser(data: any) {
    const response = await api.post('/admin/users', data);
    return response.data;
  },

  async updateUser(id: number, data: any) {
    const response = await api.put(`/admin/users/${id}`, data);
    return response.data;
  },

  async deleteUser(id: number) {
    const response = await api.delete(`/admin/users/${id}`);
    return response.data;
  },

  async getLibraries() {
    const response = await api.get('/admin/libraries');
    return response.data;
  },

  async createLibrary(data: any) {
    const response = await api.post('/admin/libraries', data);
    return response.data;
  },

  async updateLibrary(id: number, data: any) {
    if (data instanceof FormData) {
      data.append('_method', 'PUT');
      const response = await api.post(`/admin/libraries/${id}`, data);
      return response.data;
    }
    const response = await api.put(`/admin/libraries/${id}`, data);
    return response.data;
  },

  async deleteLibrary(id: number) {
    const response = await api.delete(`/admin/libraries/${id}`);
    return response.data;
  },

  async getAnalytics() {
    const response = await api.get('/admin/analytics');
    return response.data;
  },

  async getBooks() {
    const response = await api.get('/admin/books');
    return response.data;
  },

  async createBook(data: any) {
    const response = await api.post('/admin/books', data);
    return response.data;
  },

  async updateBook(id: number, data: any) {
    const response = await api.put(`/admin/books/${id}`, data);
    return response.data;
  },

  async getEvents() {
    const response = await api.get('/admin/events');
    return response.data;
  },

  async getLibrarians() {
    const response = await api.get('/admin/users/librarians');
    return response.data;
  },

  async createLibrarian(data: any) {
    const response = await api.post('/admin/users', { ...data, role: 'librarian' });
    return response.data;
  },

  async updateLibrarian(id: number, data: any) {
    const response = await api.put(`/admin/users/${id}`, data);
    return response.data;
  },

  async deleteLibrarian(id: number) {
    const response = await api.delete(`/admin/users/${id}`);
    return response.data;
  },

  async getSubscriptionPlans() {
    const response = await api.get('/admin/subscription-plans');
    return response.data;
  },

  async createSubscriptionPlan(data: any) {
    const response = await api.post('/admin/subscription-plans', data);
    return response.data;
  },

  async updateSubscriptionPlan(id: number, data: any) {
    const response = await api.put(`/admin/subscription-plans/${id}`, data);
    return response.data;
  },

  async deleteSubscriptionPlan(id: number) {
    const response = await api.delete(`/admin/subscription-plans/${id}`);
    return response.data;
  },

  async getSettings() {
    const response = await api.get('/admin/settings');
    return response.data;
  },

  async updateSettings(settings: any[]) {
    const response = await api.put('/admin/settings', { settings });
    return response.data;
  },

  async getAllBookingStats() {
    const response = await api.get('/admin/bookings/stats');
    return response.data;
  },
};

// Librarian API
export const librarianAPI = {
  async getDashboard() {
    const response = await api.get('/librarian/dashboard');
    return response.data;
  },

  async getSeats() {
    const response = await api.get('/librarian/seats');
    return response.data;
  },

  async createSeat(data: any) {
    const response = await api.post('/librarian/seats', data);
    return response.data;
  },

  async updateSeat(id: number, data: any) {
    const response = await api.put(`/librarian/seats/${id}`, data);
    return response.data;
  },

  async deleteSeat(id: number) {
    const response = await api.delete(`/librarian/seats/${id}`);
    return response.data;
  },

  async getEvents() {
    const response = await api.get('/librarian/events');
    return response.data;
  },

  async createEvent(data: any) {
    const response = await api.post('/librarian/events', data);
    return response.data;
  },

  async getBooks() {
    const response = await api.get('/librarian/books');
    return response.data;
  },

  async createBook(data: FormData) {
    const response = await api.post('/librarian/books', data);
    return response.data;
  },

  async updateBook(id: number, data: any) {
    if (data instanceof FormData) {
      data.append('_method', 'PUT');
      const response = await api.post(`/librarian/books/${id}`, data);
      return response.data;
    }
    const response = await api.put(`/librarian/books/${id}`, data);
    return response.data;
  },

  async deleteBook(id: number) {
    const response = await api.delete(`/librarian/books/${id}`);
    return response.data;
  },

  async getReservedBooks() {
    const response = await api.get('/librarian/books/reservations');
    return response.data;
  },

  async approveReturn(reservationId: number) {
    const response = await api.post(`/librarian/books/reservations/${reservationId}/approve-return`);
    return response.data;
  },

  async getAnalytics(params?: any) {
    const response = await api.get('/librarian/analytics', { params });
    return response.data;
  },

  async getFloors(libraryId: number) {
    const response = await api.get(`/librarian/libraries/${libraryId}/floors`);
    return response.data;
  },

  async createFloor(libraryId: number, data: FormData) {
    const response = await api.post(`/librarian/libraries/${libraryId}/floors`, data);
    return response.data;
  },

  async updateFloor(libraryId: number, floorId: number, data: FormData) {
    // Use POST with _method=PUT for FormData support
    data.append('_method', 'PUT');
    const response = await api.post(`/librarian/libraries/${libraryId}/floors/${floorId}`, data);
    return response.data;
  },

  async deleteFloor(libraryId: number, floorId: number) {
    const response = await api.delete(`/librarian/libraries/${libraryId}/floors/${floorId}`);
    return response.data;
  },

  async getSections(libraryId: number, floorId?: number) {
    const response = await api.get(`/librarian/libraries/${libraryId}/sections`, {
      params: { floor_id: floorId }
    });
    return response.data;
  },

  async createSection(libraryId: number, data: any) {
    const response = await api.post(`/librarian/libraries/${libraryId}/sections`, data);
    return response.data;
  },

  async updateSection(libraryId: number, sectionId: number, data: any) {
    const response = await api.put(`/librarian/libraries/${libraryId}/sections/${sectionId}`, data);
    return response.data;
  },

  async deleteSection(libraryId: number, sectionId: number) {
    const response = await api.delete(`/librarian/libraries/${libraryId}/sections/${sectionId}`);
    return response.data;
  },


  async getStudents() {
    const response = await api.get('/librarian/students');
    return response.data;
  },
  async getStudentStats() {
    const response = await api.get('/librarian/students/stats');
    return response.data;
  },
  async createStudent(data: any) {
    const response = await api.post('/librarian/students', data);
    return response.data;
  },
  async updateStudent(id: number, data: any) {
    const response = await api.put(`/librarian/students/${id}`, data);
    return response.data;
  },
  async deleteStudent(id: number) {
    const response = await api.delete(`/librarian/students/${id}`);
    return response.data;
  },
  async getLibraryInfo() {
    const response = await api.get('/librarian/library');
    return response.data;
  },
  async updateLibraryInfo(data: any) {
    const response = await api.put('/librarian/library', data);
    return response.data;
  },
  async getBookings(params: any = {}) {
    const response = await api.get('/librarian/bookings', { params });
    return response.data;
  },
  async getBookingStats() {
    const response = await api.get('/librarian/bookings/stats');
    return response.data;
  },
  async checkInBooking(id: number) {
    const response = await api.post(`/librarian/bookings/${id}/check-in`);
    return response.data;
  },
  async checkOutBooking(id: number) {
    const response = await api.post(`/librarian/bookings/${id}/check-out`);
    return response.data;
  },
  async cancelBooking(id: number) {
    const response = await api.post(`/librarian/bookings/${id}/cancel`);
    return response.data;
  },
  async getAttendance(params: any = {}) {
    const response = await api.get('/librarian/attendance', { params });
    return response.data;
  },
  async getAttendanceStats(params: any = {}) {
    const response = await api.get('/librarian/attendance/stats', { params });
    return response.data;
  },
  async markAttendance(data: { crn: string, type: 'check_in' | 'check_out' }) {
    const response = await api.post('/librarian/attendance/mark', data);
    return response.data;
  },
};

export default api;
