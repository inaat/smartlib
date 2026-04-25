import { O as api } from "./main-DCJXrkf-.js";
const handleApiError = (error) => {
  if (error.response) {
    console.error("API Error:", error.response.data);
    throw new Error(error.response.data.message || "An error occurred");
  } else if (error.request) {
    console.error("Network Error:", error.request);
    throw new Error("Network error. Please check your connection.");
  } else {
    console.error("Error:", error.message);
    throw new Error(error.message);
  }
};
const studentAPI = {
  // Dashboard
  async getDashboard() {
    try {
      const response = await api.get("/student/dashboard");
      return response.data;
    } catch (error) {
      handleApiError(error);
      throw error;
    }
  },
  // Libraries
  async getLibraries() {
    try {
      const response = await api.get("/student/libraries");
      return response.data;
    } catch (error) {
      handleApiError(error);
      throw error;
    }
  },
  async getLibrary(id) {
    try {
      const response = await api.get(`/student/libraries/${id}`);
      return response.data;
    } catch (error) {
      handleApiError(error);
      throw error;
    }
  },
  async getLibrarySeats(libraryId) {
    try {
      const response = await api.get(`/student/libraries/${libraryId}/seats`);
      return response.data;
    } catch (error) {
      handleApiError(error);
      throw error;
    }
  },
  // Bookings
  async getBookings() {
    try {
      const response = await api.get("/student/bookings");
      return response.data;
    } catch (error) {
      handleApiError(error);
      throw error;
    }
  },
  async createBooking(booking) {
    try {
      const response = await api.post("/student/bookings", booking);
      return response.data;
    } catch (error) {
      handleApiError(error);
      throw error;
    }
  },
  async extendBooking(bookingId, minutes) {
    try {
      const response = await api.post(`/student/bookings/${bookingId}/extend`, { minutes });
      return response.data;
    } catch (error) {
      handleApiError(error);
      throw error;
    }
  },
  async joinQueue(seatId) {
    try {
      const response = await api.post("/student/bookings/join-queue", { seat_id: seatId });
      return response.data;
    } catch (error) {
      handleApiError(error);
      throw error;
    }
  },
  async checkIn(bookingId, qrCode, latitude, longitude) {
    try {
      const response = await api.post(`/student/bookings/${bookingId}/checkin`, {
        qrCode,
        latitude,
        longitude
      });
      return response.data;
    } catch (error) {
      handleApiError(error);
      throw error;
    }
  },
  async checkOut(bookingId) {
    try {
      const response = await api.post(`/student/bookings/${bookingId}/checkout`);
      return response.data;
    } catch (error) {
      handleApiError(error);
      throw error;
    }
  },
  // Books
  async getBooks() {
    try {
      const response = await api.get("/student/books");
      return response.data;
    } catch (error) {
      handleApiError(error);
      throw error;
    }
  },
  async getBook(id) {
    try {
      const response = await api.get(`/student/books/${id}`);
      return response.data;
    } catch (error) {
      handleApiError(error);
      throw error;
    }
  },
  async reserveBook(bookId) {
    try {
      const response = await api.post(`/student/books/${bookId}/reserve`);
      return response.data;
    } catch (error) {
      handleApiError(error);
      throw error;
    }
  },
  // Events
  async getEvents() {
    try {
      const response = await api.get("/student/events");
      return response.data;
    } catch (error) {
      handleApiError(error);
      throw error;
    }
  },
  async getEvent(id) {
    try {
      const response = await api.get(`/student/events/${id}`);
      return response.data;
    } catch (error) {
      handleApiError(error);
      throw error;
    }
  },
  async registerForEvent(eventId) {
    try {
      const response = await api.post(`/student/events/${eventId}/register`);
      return response.data;
    } catch (error) {
      handleApiError(error);
      throw error;
    }
  },
  // Profile
  async getProfile() {
    try {
      const response = await api.get("/student/profile");
      return response.data;
    } catch (error) {
      handleApiError(error);
      throw error;
    }
  },
  async updateProfile(userData) {
    try {
      const response = await api.put("/student/profile", userData);
      return response.data;
    } catch (error) {
      handleApiError(error);
      throw error;
    }
  },
  // Notifications
  async getNotifications() {
    try {
      const response = await api.get("/student/notifications");
      return response.data;
    } catch (error) {
      handleApiError(error);
      throw error;
    }
  },
  async markNotificationRead(notificationId) {
    try {
      await api.post(`/student/notifications/${notificationId}/read`);
    } catch (error) {
      handleApiError(error);
    }
  },
  // Loyalty
  async getLoyaltyTransactions() {
    try {
      const response = await api.get("/student/profile/loyalty-transactions");
      return response.data;
    } catch (error) {
      handleApiError(error);
      throw error;
    }
  },
  // Subscriptions
  async getSubscriptionPlans() {
    try {
      const response = await api.get("/student/subscription-plans");
      return response.data;
    } catch (error) {
      handleApiError(error);
      throw error;
    }
  },
  async subscribe(planId) {
    try {
      const response = await api.post("/student/subscriptions", { plan_id: planId });
      return response.data;
    } catch (error) {
      handleApiError(error);
      throw error;
    }
  },
  // Reviews
  async getLibraryReviews(libraryId) {
    try {
      const response = await api.get(`/student/libraries/${libraryId}/reviews`);
      return response.data;
    } catch (error) {
      handleApiError(error);
      throw error;
    }
  },
  async submitReview(libraryId, review) {
    try {
      const response = await api.post(`/student/libraries/${libraryId}/reviews`, review);
      return response.data;
    } catch (error) {
      handleApiError(error);
      throw error;
    }
  },
  async deleteReview(reviewId) {
    try {
      const response = await api.delete(`/student/reviews/${reviewId}`);
      return response.data;
    } catch (error) {
      handleApiError(error);
      throw error;
    }
  }
};
export {
  studentAPI as s
};
