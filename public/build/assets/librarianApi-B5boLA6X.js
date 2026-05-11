import { N as api } from "./main-Dk2mUbjP.js";
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
const librarianAPI = {
  // Dashboard
  async getDashboard() {
    try {
      const response = await api.get("/librarian/dashboard");
      return response.data;
    } catch (error) {
      handleApiError(error);
      throw error;
    }
  },
  // Seats
  async getSeats() {
    try {
      const response = await api.get("/librarian/seats");
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
    }
  },
  // Books
  async getBooks() {
    try {
      const response = await api.get("/admin/books");
      return response.data;
    } catch (error) {
      handleApiError(error);
      throw error;
    }
  },
  async updateBook(bookId, updates) {
    try {
      const response = await api.put(`/admin/books/${bookId}`, updates);
      return response.data;
    } catch (error) {
      handleApiError(error);
      throw error;
    }
  },
  // Bookings
  async getBookings() {
    try {
      const response = await api.get("/admin/bookings");
      return response.data;
    } catch (error) {
      handleApiError(error);
      throw error;
    }
  },
  // Events
  async getEvents() {
    try {
      const response = await api.get("/librarian/events");
      return response.data;
    } catch (error) {
      handleApiError(error);
      throw error;
    }
  },
  async getEvent(eventId) {
    try {
      const response = await api.get(`/librarian/events/${eventId}`);
      return response.data;
    } catch (error) {
      handleApiError(error);
      throw error;
    }
  },
  async createEvent(event) {
    try {
      const response = await api.post("/librarian/events", event, {
        headers: event instanceof FormData ? { "Content-Type": "multipart/form-data" } : {}
      });
      return response.data.data;
    } catch (error) {
      handleApiError(error);
      throw error;
    }
  },
  async updateEvent(eventId, event) {
    try {
      if (event instanceof FormData) {
        event.append("_method", "PUT");
        const response = await api.post(`/librarian/events/${eventId}`, event, {
          headers: { "Content-Type": "multipart/form-data" }
        });
        return response.data.data;
      } else {
        const response = await api.put(`/librarian/events/${eventId}`, event);
        return response.data.data;
      }
    } catch (error) {
      handleApiError(error);
      throw error;
    }
  },
  async deleteEvent(eventId) {
    try {
      await api.delete(`/librarian/events/${eventId}`);
    } catch (error) {
      handleApiError(error);
    }
  },
  // Analytics
  async getAnalytics(timeRange = "week") {
    try {
      const response = await api.get("/librarian/analytics", { params: { timeRange } });
      return response.data;
    } catch (error) {
      handleApiError(error);
      throw error;
    }
  }
};
export {
  librarianAPI as l
};
