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

import { useSettings } from '@/shared/composables/useSettings';

// Response interceptor to handle errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 503 || error.response?.data?.maintenance_mode) {
      useSettings().setMaintenanceMode(true);
    }
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

  async getSessions() {
    const response = await api.get('/auth/sessions');
    return response.data;
  },

  async revokeSession(id: number) {
    const response = await api.delete(`/auth/sessions/${id}`);
    return response.data;
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

  async getNearbyLibraries(lat: number, lng: number, radiusKm: number = 50) {
    const response = await api.get('/student/libraries/nearby', {
      params: { lat, lng, radius_km: radiusKm }
    });
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

  async checkIn(bookingId: any, qrCode: string, latitude?: number, longitude?: number) {
    const response = await api.post(`/student/bookings/${bookingId}/checkin`, {
      qr_code: qrCode,
      latitude,
      longitude
    });
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

  async requestOverride(seatId: number) {
    const response = await api.post('/student/bookings/override-requests', { seat_id: seatId });
    return response.data;
  },

  async getStudentOverrideRequests() {
    const response = await api.get('/student/bookings/override-requests');
    return response.data;
  },

  async cancelBooking(bookingId: number) {
    const response = await api.post(`/student/bookings/${bookingId}/cancel`);
    return response.data;
  },

  async joinQueue(seatId: number) {
    const response = await api.post('/student/bookings/join-queue', { seat_id: seatId });
    return response.data;
  },

  async getMyQueue() {
    const response = await api.get('/student/my-queue');
    return response.data;
  },

  async leaveQueue(id: number) {
    const response = await api.delete(`/student/my-queue/${id}`);
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

  async reserveBook(bookId: number, days?: number, latitude?: number, longitude?: number) {
    const response = await api.post(`/student/books/${bookId}/reserve`, { days, latitude, longitude });
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

  async markAllNotificationsRead() {
    const response = await api.post('/notifications/read-all');
    return response.data;
  },

  async clearAllNotifications() {
    const response = await api.post('/notifications/clear-all');
    return response.data;
  },

  async deleteNotification(notificationId: number | string) {
    const response = await api.delete(`/notifications/${notificationId}`);
    return response.data;
  },
  async getAnalytics(params?: any) {
    const response = await api.get('/student/analytics', { params });
    return response.data;
  },

  async updateStudyGoals(data: { weekly_goal_hours: number; monthly_goal_hours: number }) {
    const response = await api.post('/student/study-goals', data);
    return response.data;
  },

  async getSubscriptionPlans() {
    const response = await api.get('/student/subscription-plans');
    return response.data;
  },

  async subscribe(planId: number) {
    const response = await api.post('/student/subscriptions', { plan_id: planId });
    return response.data;
  },

  async getAttendance() {
    const response = await api.get('/student/attendance');
    return response.data;
  },

  async getAttendanceStats() {
    const response = await api.get('/student/attendance/stats');
    return response.data;
  },

  async getAttendanceCalendar(year: number, month: number) {
    const response = await api.get('/student/attendance/calendar', { params: { year, month } });
    return response.data;
  },

  async getLibraryReviews(libraryId: number) {
    const response = await api.get(`/student/libraries/${libraryId}/reviews`);
    return response.data;
  },

  async submitReview(libraryId: number, data: { rating: number, comment: string }) {
    const response = await api.post(`/student/libraries/${libraryId}/reviews`, data);
    return response.data;
  },

  async deleteReview(reviewId: number) {
    const response = await api.delete(`/student/reviews/${reviewId}`);
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

  async banUser(userId: number, data: { days?: number, reason?: string }) {
    const response = await api.post(`/admin/users/${userId}/ban`, data);
    return response.data;
  },

  async unbanUser(userId: number) {
    const response = await api.post(`/admin/users/${userId}/unban`);
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

  async resetSettings() {
    const response = await api.post('/admin/settings/reset');
    return response.data;
  },

  async getAllBookingStats() {
    const response = await api.get('/admin/bookings/stats');
    return response.data;
  },

  async getReviews(params?: any) {
    const response = await api.get('/admin/reviews', { params });
    return response.data;
  },

  async getLibraryReviews(libraryId: number) {
    const response = await api.get(`/admin/libraries/${libraryId}/reviews`);
    return response.data;
  },

  async deleteReview(reviewId: number) {
    const response = await api.delete(`/admin/reviews/${reviewId}`);
    return response.data;
  },
};

// Librarian API
export const librarianAPI = {
  async getDashboard(params: any = {}) {
    const response = await api.get('/librarian/dashboard', { params });
    return response.data;
  },

  async getSeats() {
    const response = await api.get('/librarian/seats');
    return response.data;
  },

  async getActiveFloors() {
    const response = await api.get('/librarian/active-floors');
    return response.data;
  },

  async getActiveSections() {
    const response = await api.get('/librarian/active-sections');
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

  async bulkUpdateSeats(data: any) {
    const response = await api.post('/librarian/seats/bulk-update', data);
    return response.data;
  },

  async deleteSeat(id: number) {
    const response = await api.delete(`/librarian/seats/${id}`);
    return response.data;
  },

  async getStudyTables() {
    const response = await api.get('/librarian/study-tables');
    return response.data;
  },

  async createStudyTable(data: any) {
    const response = await api.post('/librarian/study-tables', data);
    return response.data;
  },

  async updateStudyTable(id: number, data: any) {
    const response = await api.put(`/librarian/study-tables/${id}`, data);
    return response.data;
  },

  async deleteStudyTable(id: number) {
    const response = await api.delete(`/librarian/study-tables/${id}`);
    return response.data;
  },

  async getEvents(params: any = {}) {
    const response = await api.get('/librarian/events', { params });
    return response.data;
  },

  async createEvent(data: any) {
    const response = await api.post('/librarian/events', data);
    return response.data;
  },

  async getBooks(params: any = {}) {
    const response = await api.get('/librarian/books', { params });
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

  async getReservedBooks(params?: any) {
    const response = await api.get('/librarian/books/reservations', { params });
    return response.data;
  },

  async approveReturn(reservationId: number) {
    const response = await api.post(`/librarian/books/reservations/${reservationId}/approve-return`);
    return response.data;
  },

  async approveReservation(reservationId: number) {
    const response = await api.post(`/librarian/books/reservations/${reservationId}/approve`);
    return response.data;
  },

  async rejectReservation(reservationId: number) {
    const response = await api.post(`/librarian/books/reservations/${reservationId}/reject`);
    return response.data;
  },

  async notifyStudent(reservationId: number) {
    const response = await api.post(`/librarian/books/reservations/${reservationId}/notify`);
    return response.data;
  },

  async getAnalytics(params?: any) {
    const response = await api.get('/librarian/analytics', { params });
    return response.data;
  },

  async getFloors() {
    const response = await api.get('/librarian/floors');
    return response.data;
  },

  async createFloor(data: FormData) {
    const response = await api.post('/librarian/floors', data);
    return response.data;
  },

  async updateFloor(floorId: number, data: FormData) {
    // Use POST with _method=PUT for FormData support
    data.append('_method', 'PUT');
    const response = await api.post(`/librarian/floors/${floorId}`, data);
    return response.data;
  },

  async deleteFloor(floorId: number) {
    const response = await api.delete(`/librarian/floors/${floorId}`);
    return response.data;
  },

  async getSections(floorId?: number) {
    const response = await api.get('/librarian/sections', {
      params: { floor_id: floorId }
    });
    return response.data;
  },

  async createSection(data: any) {
    const response = await api.post('/librarian/sections', data);
    return response.data;
  },

  async updateSection(sectionId: number, data: any) {
    const response = await api.put(`/librarian/sections/${sectionId}`, data);
    return response.data;
  },

  async deleteSection(sectionId: number) {
    const response = await api.delete(`/librarian/sections/${sectionId}`);
    return response.data;
  },

  async getSubsections(sectionId: number) {
    const response = await api.get(`/librarian/sections/${sectionId}/subsections`);
    return response.data;
  },

  async createSubsection(sectionId: number, data: any) {
    const response = await api.post(`/librarian/sections/${sectionId}/subsections`, data);
    return response.data;
  },

  async updateSubsection(sectionId: number, id: number, data: any) {
    const response = await api.put(`/librarian/sections/${sectionId}/subsections/${id}`, data);
    return response.data;
  },

  async deleteSubsection(sectionId: number, id: number) {
    const response = await api.delete(`/librarian/sections/${sectionId}/subsections/${id}`);
    return response.data;
  },

  async toggleSubsectionActive(sectionId: number, id: number) {
    const response = await api.post(`/librarian/sections/${sectionId}/subsections/${id}/toggle-active`);
    return response.data;
  },

  async syncSubsectionSeats(sectionId: number, id: number) {
    const response = await api.post(`/librarian/sections/${sectionId}/subsections/${id}/sync-seats`);
    return response.data;
  },

  async getOverrideRequests(params: any = {}) {
    const response = await api.get('/librarian/override-requests', { params });
    return response.data;
  },

  async approveOverrideRequest(id: number) {
    const response = await api.post(`/librarian/override-requests/${id}/approve`);
    return response.data;
  },

  async rejectOverrideRequest(id: number) {
    const response = await api.post(`/librarian/override-requests/${id}/reject`);
    return response.data;
  },


  async getStudents(params?: any) {
    const response = await api.get('/librarian/students', { params });
    return response.data;
  },
  async getStudentStats() {
    const response = await api.get('/librarian/students/stats');
    return response.data;
  },
  async getStudent(id: number) {
    const response = await api.get(`/librarian/students/${id}`);
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
  async banStudent(id: number, data: { days?: number, reason?: string }) {
    const response = await api.post(`/librarian/students/${id}/ban`, data);
    return response.data;
  },
  async unbanStudent(id: number) {
    const response = await api.post(`/librarian/students/${id}/unban`);
    return response.data;
  },
  async getLibraryInfo() {
    const response = await api.get('/librarian/library');
    return response.data;
  },
  async updateLibraryInfo(data: any) {
    if (data instanceof FormData) {
      data.append('_method', 'PUT');
      const response = await api.post('/librarian/library', data);
      return response.data;
    }
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
  async getAttendanceCalendar(params: { year: number, month: number, user_id?: number }) {
    const response = await api.get('/librarian/attendance/calendar', { params });
    return response.data;
  },

  async getReviews() {
    const response = await api.get('/librarian/reviews');
    return response.data;
  },

  async getScheduledReports() {
    const response = await api.get('/librarian/scheduled-reports');
    return response.data;
  },
  async createScheduledReport(data: { report_type: string; frequency: string; format: string; recipient_email: string; send_time?: string }) {
    const response = await api.post('/librarian/scheduled-reports', data);
    return response.data;
  },
  async toggleScheduledReport(id: number) {
    const response = await api.post(`/librarian/scheduled-reports/${id}/toggle`);
    return response.data;
  },
  async deleteScheduledReport(id: number) {
    const response = await api.delete(`/librarian/scheduled-reports/${id}`);
    return response.data;
  },
};

// Owner API
export const ownerAPI = {
  // SuperAdmins
  async getSuperAdmins() {
    const response = await api.get('/owner/superadmins');
    return response.data;
  },
  async createSuperAdmin(data: any) {
    const response = await api.post('/owner/superadmins', data);
    return response.data;
  },
  async updateSuperAdmin(id: number, data: any) {
    const response = await api.put(`/owner/superadmins/${id}`, data);
    return response.data;
  },
  async deleteSuperAdmin(id: number) {
    const response = await api.delete(`/owner/superadmins/${id}`);
    return response.data;
  },

  // Analytics
  async getAnalytics(params?: any) {
    const response = await api.get('/owner/analytics', { params });
    return response.data;
  },

  // Subscription Plans
  async getSubscriptionPlans() {
    const response = await api.get('/owner/subscription-plans');
    return response.data;
  },
  async createSubscriptionPlan(data: any) {
    const response = await api.post('/owner/subscription-plans', data);
    return response.data;
  },
  async updateSubscriptionPlan(id: number, data: any) {
    const response = await api.put(`/owner/subscription-plans/${id}`, data);
    return response.data;
  },
  async deleteSubscriptionPlan(id: number) {
    const response = await api.delete(`/owner/subscription-plans/${id}`);
    return response.data;
  },

  // Orders
  async getOrders(params: any = {}) {
    const response = await api.get('/owner/orders', { params });
    return response.data;
  },
  async approveOrder(id: number) {
    const response = await api.post(`/owner/orders/${id}/approve`);
    return response.data;
  },
  async rejectOrder(id: number, data: any) {
    const response = await api.post(`/owner/orders/${id}/reject`, data);
    return response.data;
  },
  async getSubscriptions(params: any = {}) {
    const response = await api.get('/owner/user-subscriptions', { params });
    return response.data;
  },

  // App Settings
  async getSettings() {
    const response = await api.get('/owner/settings');
    return response.data;
  },
  async updateSettings(data: FormData) {
    const response = await api.post('/owner/settings', data);
    return response.data;
  },
  async getPublicSettings() {
    const response = await api.get('/settings/public');
    return response.data;
  },
};

// Support API
export const supportAPI = {
  async getTickets(role: 'student' | 'librarian' | 'admin', params?: any) {
    const response = await api.get(`/${role}/support-tickets`, { params });
    return response.data;
  },

  async createTicket(ticket: { subject: string; message: string; priority: string; library_id?: number | null }) {
    const response = await api.post('/student/support-tickets', ticket);
    return response.data;
  },

  async getTicket(role: 'student' | 'librarian' | 'admin', id: number) {
    const response = await api.get(`/${role}/support-tickets/${id}`);
    return response.data;
  },

  async sendMessage(role: 'student' | 'librarian' | 'admin', ticketId: number, message: string) {
    const response = await api.post(`/${role}/support-tickets/${ticketId}/messages`, { message });
    return response.data;
  },

  async updateStatus(role: 'student' | 'librarian' | 'admin', ticketId: number, status: string) {
    const response = await api.put(`/${role}/support-tickets/${ticketId}/status`, { status });
    return response.data;
  },
};

export default api;
