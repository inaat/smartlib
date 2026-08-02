import { N as api } from "./main-BGbL_8Ba.js";
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
const superadminAPI = {
  async updateStudyTable(id, data) {
    try {
      const response = await api.put(`/admin/study-tables/${id}`, data);
      return response.data;
    } catch (error) {
      handleApiError(error);
      throw error;
    }
  },
  // Dashboard
  async getDashboard(params) {
    try {
      const response = await api.get("/admin/dashboard", { params });
      return response.data;
    } catch (error) {
      handleApiError(error);
      throw error;
    }
  },
  // Users
  async getUsers() {
    try {
      const response = await api.get("/admin/users");
      return response.data;
    } catch (error) {
      handleApiError(error);
      throw error;
    }
  },
  async getPendingUsers() {
    try {
      const response = await api.get("/admin/users/pending");
      return response.data;
    } catch (error) {
      handleApiError(error);
      throw error;
    }
  },
  async approveUser(userId) {
    try {
      await api.post(`/admin/users/${userId}/approve`);
    } catch (error) {
      handleApiError(error);
    }
  },
  async rejectUser(userId) {
    try {
      await api.delete(`/admin/users/${userId}/reject`);
    } catch (error) {
      handleApiError(error);
    }
  },
  async updateUser(userId, updates) {
    try {
      const response = await api.put(`/admin/users/${userId}`, updates);
      return response.data;
    } catch (error) {
      handleApiError(error);
      throw error;
    }
  },
  // Libraries
  async getLibraries() {
    try {
      const response = await api.get("/admin/libraries");
      return response.data;
    } catch (error) {
      handleApiError(error);
      throw error;
    }
  },
  async createLibrary(library) {
    try {
      const response = await api.post("/admin/libraries", library);
      return response.data;
    } catch (error) {
      handleApiError(error);
      throw error;
    }
  },
  async updateLibrary(libraryId, updates) {
    try {
      const response = await api.put(`/admin/libraries/${libraryId}`, updates);
      return response.data;
    } catch (error) {
      handleApiError(error);
      throw error;
    }
  },
  async deleteLibrary(libraryId) {
    try {
      await api.delete(`/admin/libraries/${libraryId}`);
    } catch (error) {
      handleApiError(error);
    }
  },
  // Seat Sections
  async getSeatSections(libraryId) {
    try {
      const response = await api.get(`/admin/libraries/${libraryId}/sections`);
      return response.data;
    } catch (error) {
      handleApiError(error);
      throw error;
    }
  },
  async createSeatSection(libraryId, section) {
    try {
      const response = await api.post(`/admin/libraries/${libraryId}/sections`, section);
      return response.data;
    } catch (error) {
      handleApiError(error);
      throw error;
    }
  },
  async updateSeatSection(libraryId, sectionId, updates) {
    try {
      const response = await api.put(`/admin/libraries/${libraryId}/sections/${sectionId}`, updates);
      return response.data;
    } catch (error) {
      handleApiError(error);
      throw error;
    }
  },
  async deleteSeatSection(libraryId, sectionId) {
    try {
      await api.delete(`/admin/libraries/${libraryId}/sections/${sectionId}`);
    } catch (error) {
      handleApiError(error);
      throw error;
    }
  },
  // Books
  async getBooks(params) {
    try {
      const response = await api.get("/admin/books", { params });
      return response.data;
    } catch (error) {
      handleApiError(error);
      throw error;
    }
  },
  async createBook(book) {
    try {
      const response = await api.post("/admin/books", book);
      return response.data;
    } catch (error) {
      handleApiError(error);
      throw error;
    }
  },
  async updateBook(bookId, updates) {
    try {
      if (updates instanceof FormData) {
        updates.append("_method", "PUT");
        const response2 = await api.post(`/admin/books/${bookId}`, updates);
        return response2.data;
      }
      const response = await api.put(`/admin/books/${bookId}`, updates);
      return response.data;
    } catch (error) {
      handleApiError(error);
      throw error;
    }
  },
  async deleteBook(bookId) {
    try {
      await api.delete(`/admin/books/${bookId}`);
    } catch (error) {
      handleApiError(error);
    }
  },
  // Events
  async getEvents(params) {
    try {
      const response = await api.get("/admin/events", { params });
      return response.data;
    } catch (error) {
      handleApiError(error);
      throw error;
    }
  },
  async createEvent(event) {
    try {
      const response = await api.post("/admin/events", event);
      return response.data;
    } catch (error) {
      handleApiError(error);
      throw error;
    }
  },
  async updateEvent(eventId, updates) {
    try {
      const response = await api.put(`/admin/events/${eventId}`, updates);
      return response.data;
    } catch (error) {
      handleApiError(error);
      throw error;
    }
  },
  async deleteEvent(eventId) {
    try {
      await api.delete(`/admin/events/${eventId}`);
    } catch (error) {
      handleApiError(error);
    }
  },
  // Analytics
  async getAnalytics(params) {
    try {
      const response = await api.get("/admin/analytics", { params });
      return response.data;
    } catch (error) {
      handleApiError(error);
      throw error;
    }
  },
  // Floors
  async getFloors(libraryId) {
    try {
      const response = await api.get(`/admin/libraries/${libraryId}/floors`);
      return response.data;
    } catch (error) {
      handleApiError(error);
      throw error;
    }
  },
  async createFloor(libraryId, floor) {
    try {
      const response = await api.post(`/admin/libraries/${libraryId}/floors`, floor);
      return response.data;
    } catch (error) {
      handleApiError(error);
      throw error;
    }
  },
  async updateFloor(libraryId, floorId, floor) {
    try {
      const response = await api.post(`/admin/libraries/${libraryId}/floors/${floorId}`, floor);
      return response.data;
    } catch (error) {
      handleApiError(error);
      throw error;
    }
  },
  async deleteFloor(libraryId, floorId) {
    try {
      await api.delete(`/admin/libraries/${libraryId}/floors/${floorId}`);
    } catch (error) {
      handleApiError(error);
      throw error;
    }
  },
  // Bookings
  async getBookings(params) {
    try {
      const response = await api.get("/librarian/bookings", { params });
      return response.data;
    } catch (error) {
      handleApiError(error);
      throw error;
    }
  },
  async getBookingStats(params) {
    try {
      const response = await api.get("/librarian/bookings/stats", { params });
      return response.data;
    } catch (error) {
      handleApiError(error);
      throw error;
    }
  },
  // Seats
  async getSeats(params) {
    try {
      const response = await api.get("/librarian/seats", { params });
      return response.data;
    } catch (error) {
      handleApiError(error);
      throw error;
    }
  },
  async createSeat(seat) {
    try {
      const response = await api.post("/librarian/seats", seat);
      return response.data;
    } catch (error) {
      handleApiError(error);
      throw error;
    }
  },
  async updateSeat(seatId, updates) {
    try {
      const response = await api.put(`/librarian/seats/${seatId}`, updates);
      return response.data;
    } catch (error) {
      handleApiError(error);
      throw error;
    }
  },
  async deleteSeat(seatId) {
    try {
      await api.delete(`/librarian/seats/${seatId}`);
    } catch (error) {
      handleApiError(error);
      throw error;
    }
  },
  // Orders
  async getOrders(params) {
    try {
      const response = await api.get("/admin/orders", { params });
      return response.data;
    } catch (error) {
      handleApiError(error);
      throw error;
    }
  },
  async approveOrder(orderId) {
    try {
      await api.post(`/admin/orders/${orderId}/approve`);
    } catch (error) {
      handleApiError(error);
      throw error;
    }
  },
  async rejectOrder(orderId, notes) {
    try {
      await api.post(`/admin/orders/${orderId}/reject`, { notes });
    } catch (error) {
      handleApiError(error);
      throw error;
    }
  },
  async getUserSubscriptions(params) {
    try {
      const response = await api.get("/admin/user-subscriptions", { params });
      return response.data;
    } catch (error) {
      handleApiError(error);
      throw error;
    }
  },
  // Scheduled Reports
  async getScheduledReports(params) {
    try {
      const response = await api.get("/admin/scheduled-reports", { params });
      return response.data;
    } catch (error) {
      handleApiError(error);
      throw error;
    }
  },
  async getGeneratedReports(params) {
    try {
      const response = await api.get("/admin/generated-reports", { params });
      return response.data;
    } catch (error) {
      handleApiError(error);
      throw error;
    }
  },
  async runScheduledReportNow(id) {
    try {
      const response = await api.post(`/admin/scheduled-reports/${id}/run-now`);
      return response.data;
    } catch (error) {
      handleApiError(error);
      throw error;
    }
  }
};
export {
  superadminAPI as s
};
