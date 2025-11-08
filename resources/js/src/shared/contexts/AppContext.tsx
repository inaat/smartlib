import React, { createContext, useContext, useState, useEffect } from 'react';
import { Library, Seat, Book, Booking, Event, Reservation, Analytics, AIRecommendation, Payment } from '@/shared/types';
import { studentAPI, adminAPI, librarianAPI } from '@/shared/services/api';

interface AppContextType {
  libraries: Library[];
  seats: Seat[];
  books: Book[];
  events: Event[];
  bookings: Booking[];
  reservations: Reservation[];
  analytics: Analytics[];
  recommendations: AIRecommendation[];
  payments: Payment[];
  selectedLibrary: Library | null;
  setSelectedLibrary: (library: Library | null) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  addBooking: (booking: Omit<Booking, 'id'>) => Promise<void>;
  addReservation: (bookId: string) => Promise<void>;
  updateSeatStatus: (seatId: string, status: Seat['status']) => Promise<void>;
  checkInSeat: (bookingId: string, qrCode: string) => Promise<boolean>;
  checkOutSeat: (bookingId: string) => Promise<boolean>;
  autoReleaseExpiredBookings: () => void;
  generateAIRecommendations: (userId: string) => AIRecommendation[];
  addLibrary: (library: Omit<Library, 'id'>) => Promise<void>;
  updateLibrary: (libraryId: string, updates: Partial<Library>) => Promise<void>;
  addBook: (book: Omit<Book, 'id'>) => Promise<void>;
  updateBook: (bookId: string, updates: Partial<Book>) => Promise<void>;
  approveUser: (userId: string) => Promise<void>;
  getLibraryAnalytics: (libraryId: string) => Analytics | null;
  loadLibraries: () => Promise<void>;
  loadBooks: () => Promise<void>;
  loadEvents: () => Promise<void>;
  loadBookings: () => Promise<void>;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [libraries, setLibraries] = useState<Library[]>([]);
  const [seats, setSeats] = useState<Seat[]>([]);
  const [books, setBooks] = useState<Book[]>([]);
  const [events, setEvents] = useState<Event[]>([]);
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [reservations, setReservations] = useState<Reservation[]>([]);
  const [analytics, setAnalytics] = useState<Analytics[]>([]);
  const [recommendations, setRecommendations] = useState<AIRecommendation[]>([]);
  const [payments, setPayments] = useState<Payment[]>([]);
  const [selectedLibrary, setSelectedLibrary] = useState<Library | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Load data on mount
  useEffect(() => {
    const token = localStorage.getItem('auth_token');
    const userStr = localStorage.getItem('smart-lib-user');
    if (token && userStr) {
      try {
        const user = JSON.parse(userStr);
        const userRole = user.role || user.user_type;

        // Load libraries for all authenticated users
        loadLibraries();

        // Only load student-specific data for students
        if (userRole === 'student') {
          loadBooks();
          loadEvents();
          loadBookings();
        }

        // Load admin-specific data for admins/librarians
        if (userRole === 'admin' || userRole === 'super_admin' || userRole === 'librarian') {
          loadBooks(); // Admins need books too
          loadEvents(); // Admins need events too
        }
      } catch (error) {
        console.error('Failed to parse user data:', error);
      }
    }
  }, []);

  // Auto-release expired bookings every minute
  useEffect(() => {
    const interval = setInterval(autoReleaseExpiredBookings, 60000);
    return () => clearInterval(interval);
  }, []);

  // Load functions
  const loadLibraries = async () => {
    try {
      const userStr = localStorage.getItem('smart-lib-user');
      if (userStr) {
        const user = JSON.parse(userStr);
        const userRole = user.role || user.user_type;

        // Use admin API for admins/librarians, student API for students
        if (userRole === 'admin' || userRole === 'super_admin' || userRole === 'librarian') {
          const data = await adminAPI.getLibraries();
          setLibraries(data);
        } else {
          const data = await studentAPI.getLibraries();
          setLibraries(data);
        }
      }
    } catch (error) {
      console.error('Failed to load libraries:', error);
    }
  };

  const loadBooks = async () => {
    try {
      const userStr = localStorage.getItem('smart-lib-user');
      if (userStr) {
        const user = JSON.parse(userStr);
        const userRole = user.role || user.user_type;

        // Use admin API for admins/librarians, student API for students
        if (userRole === 'admin' || userRole === 'super_admin' || userRole === 'librarian') {
          const data = await adminAPI.getBooks();
          setBooks(data);
        } else {
          const data = await studentAPI.getBooks();
          setBooks(data);
        }
      }
    } catch (error) {
      console.error('Failed to load books:', error);
    }
  };

  const loadEvents = async () => {
    try {
      const userStr = localStorage.getItem('smart-lib-user');
      if (userStr) {
        const user = JSON.parse(userStr);
        const userRole = user.role || user.user_type;

        // Use admin API for admins/librarians, student API for students
        if (userRole === 'admin' || userRole === 'super_admin' || userRole === 'librarian') {
          const data = await adminAPI.getEvents();
          setEvents(data);
        } else {
          const data = await studentAPI.getEvents();
          setEvents(data);
        }
      }
    } catch (error) {
      console.error('Failed to load events:', error);
    }
  };

  const loadBookings = async () => {
    try {
      const data = await studentAPI.getBookings();
      setBookings(data);
    } catch (error) {
      console.error('Failed to load bookings:', error);
    }
  };

  const addBooking = async (booking: Omit<Booking, 'id'>) => {
    try {
      const newBooking = await studentAPI.createBooking(booking);
      setBookings(prev => [...prev, newBooking]);
      await loadLibraries(); // Refresh library data for occupancy
    } catch (error) {
      console.error('Failed to create booking:', error);
      throw error;
    }
  };

  const addReservation = async (bookId: string) => {
    try {
      const newReservation = await studentAPI.reserveBook(bookId);
      setReservations(prev => [...prev, newReservation]);
      await loadBooks(); // Refresh book availability
    } catch (error) {
      console.error('Failed to reserve book:', error);
      throw error;
    }
  };

  const updateSeatStatus = async (seatId: string, status: Seat['status']) => {
    try {
      await librarianAPI.updateSeat(seatId, { status });
      setSeats(prev => prev.map(seat =>
        seat.id === seatId ? { ...seat, status } : seat
      ));
    } catch (error) {
      console.error('Failed to update seat status:', error);
    }
  };

  const checkInSeat = async (bookingId: string, qrCode: string): Promise<boolean> => {
    try {
      const result = await studentAPI.checkIn(bookingId, qrCode);
      if (result.success) {
        await loadBookings();
        return true;
      }
      return false;
    } catch (error) {
      console.error('Check-in failed:', error);
      return false;
    }
  };

  const checkOutSeat = async (bookingId: string): Promise<boolean> => {
    try {
      const result = await studentAPI.checkOut(bookingId);
      if (result.success) {
        await loadBookings();
        await loadLibraries();
        return true;
      }
      return false;
    } catch (error) {
      console.error('Check-out failed:', error);
      return false;
    }
  };

  const autoReleaseExpiredBookings = () => {
    const now = new Date();
    
    setBookings(prev => prev.map(booking => {
      // Auto-release if not checked in within 30 minutes
      if (
        booking.status === 'upcoming' && 
        !booking.checkedIn && 
        booking.autoReleaseTime && 
        new Date(booking.autoReleaseTime) < now
      ) {
        // Release the seat
        updateSeatStatus(booking.seatId, 'available');
        
        // Update library occupancy
        setLibraries(prevLibs => prevLibs.map(lib => 
          lib.id === booking.libraryId 
            ? { ...lib, availableSeats: lib.availableSeats + 1 }
            : lib
        ));

        return { ...booking, status: 'no_show' as const };
      }
      
      // Auto-complete if session time has ended
      if (
        booking.status === 'active' && 
        booking.checkedIn
      ) {
        const endTime = new Date(`${booking.date}T${booking.endTime}`);
        if (endTime < now) {
          updateSeatStatus(booking.seatId, 'available');
          
          setLibraries(prevLibs => prevLibs.map(lib => 
            lib.id === booking.libraryId 
              ? { ...lib, availableSeats: lib.availableSeats + 1, currentOccupancy: lib.currentOccupancy - 1 }
              : lib
          ));

          return { 
            ...booking, 
            status: 'completed' as const,
            checkedOutAt: endTime.toISOString(),
            loyaltyPointsEarned: 10
          };
        }
      }
      
      return booking;
    }));

    // Update seats that will be free soon
    setSeats(prev => prev.map(seat => {
      const activeBooKing = bookings.find(b => 
        b.seatId === seat.id && 
        b.status === 'active' && 
        b.checkedIn
      );
      
      if (activeBooKing) {
        const endTime = new Date(`${activeBooKing.date}T${activeBooKing.endTime}`);
        const thirtyMinutesFromNow = new Date(now.getTime() + 30 * 60 * 1000);
        
        if (endTime <= thirtyMinutesFromNow && endTime > now) {
          return { 
            ...seat, 
            status: 'free_soon' as const,
            nextAvailableTime: endTime.toISOString()
          };
        }
      }
      
      return seat;
    }));
  };

  const generateAIRecommendations = (userId: string): AIRecommendation[] => {
    const userBookings = bookings.filter(b => b.userId === userId);
    const recommendations: AIRecommendation[] = [];

    // Recommend best time slots based on history
    if (userBookings.length > 0) {
      const popularTimes = userBookings.reduce((acc, booking) => {
        const hour = parseInt(booking.startTime.split(':')[0]);
        acc[hour] = (acc[hour] || 0) + 1;
        return acc;
      }, {} as Record<number, number>);

      const bestTime = Object.entries(popularTimes)
        .sort(([,a], [,b]) => b - a)[0];

      if (bestTime) {
        recommendations.push({
          id: `rec-time-${Date.now()}`,
          userId,
          type: 'time_slot',
          title: 'Your Preferred Time Slot',
          description: `Based on your history, you prefer booking at ${bestTime[0]}:00. A seat is available today!`,
          confidence: 0.8,
          data: { recommendedTime: `${bestTime[0]}:00` },
          isActive: true,
          createdAt: new Date().toISOString()
        });
      }
    }

    // Recommend seats that will be free soon
    const soonToBeFreeSeat = seats.find(s => s.status === 'free_soon');
    if (soonToBeFreeSeat) {
      recommendations.push({
        id: `rec-seat-${Date.now()}`,
        userId,
        type: 'seat',
        title: 'Seat Available Soon',
        description: `Seat ${soonToBeFreeSeat.seatNumber} will be free at ${soonToBeFreeSeat.nextAvailableTime}`,
        confidence: 0.9,
        data: { seatId: soonToBeFreeSeat.id },
        isActive: true,
        createdAt: new Date().toISOString()
      });
    }

    return recommendations;
  };

  const addLibrary = async (library: Omit<Library, 'id'>) => {
    try {
      // Transform camelCase to snake_case for API
      const apiData: any = {
        name: library.name,
        description: library.description,
        address: library.address,
        capacity: library.totalSeats || library.capacity,
        opening_hours: library.openingHours,
        facilities: library.facilities,
        latitude: library.latitude,
        longitude: library.longitude,
        wifi_password: library.wifiPassword,
        parking_available: library.parkingAvailable,
        operating_days: library.operatingDays,
        rules: library.rules,
        special_features: library.specialFeatures,
        contact_info: library.contactInfo,
      };

      const newLibrary = await adminAPI.createLibrary(apiData);
      setLibraries(prev => [...prev, newLibrary]);
      await loadLibraries(); // Refresh to get computed properties
    } catch (error) {
      console.error('Failed to add library:', error);
      throw error;
    }
  };

  const updateLibrary = async (libraryId: string, updates: Partial<Library>) => {
    try {
      // Transform camelCase to snake_case for API
      const apiData: any = {};

      if (updates.name) apiData.name = updates.name;
      if (updates.description !== undefined) apiData.description = updates.description;
      if (updates.address) apiData.address = updates.address;
      if (updates.totalSeats) apiData.capacity = updates.totalSeats;
      if (updates.openingHours) apiData.opening_hours = updates.openingHours;
      if (updates.facilities) apiData.facilities = updates.facilities;
      if (updates.latitude !== undefined) apiData.latitude = updates.latitude;
      if (updates.longitude !== undefined) apiData.longitude = updates.longitude;
      if (updates.wifiPassword !== undefined) apiData.wifi_password = updates.wifiPassword;
      if (updates.parkingAvailable !== undefined) apiData.parking_available = updates.parkingAvailable;
      if (updates.operatingDays) apiData.operating_days = updates.operatingDays;
      if (updates.rules) apiData.rules = updates.rules;
      if (updates.specialFeatures) apiData.special_features = updates.specialFeatures;
      if (updates.contactInfo) apiData.contact_info = updates.contactInfo;
      if (updates.isActive !== undefined) apiData.is_active = updates.isActive;

      const updatedLibrary = await adminAPI.updateLibrary(libraryId, apiData);
      setLibraries(prev => prev.map(lib =>
        lib.id === libraryId ? updatedLibrary : lib
      ));
      await loadLibraries(); // Refresh to get computed properties
    } catch (error) {
      console.error('Failed to update library:', error);
      throw error;
    }
  };

  const addBook = async (book: Omit<Book, 'id'>) => {
    try {
      const newBook = await adminAPI.createBook(book);
      setBooks(prev => [...prev, newBook]);
    } catch (error) {
      console.error('Failed to add book:', error);
      throw error;
    }
  };

  const updateBook = async (bookId: string, updates: Partial<Book>) => {
    try {
      const updatedBook = await adminAPI.updateBook(bookId, updates);
      setBooks(prev => prev.map(book =>
        book.id === bookId ? updatedBook : book
      ));
    } catch (error) {
      console.error('Failed to update book:', error);
      throw error;
    }
  };

  const approveUser = async (userId: string) => {
    try {
      await adminAPI.approveUser(userId);
      console.log(`User ${userId} approved`);
    } catch (error) {
      console.error('Failed to approve user:', error);
      throw error;
    }
  };

  const getLibraryAnalytics = (libraryId: string): Analytics | null => {
    return analytics.find(a => a.libraryId === libraryId) || null;
  };

  return (
    <AppContext.Provider value={{
      libraries,
      seats,
      books,
      events,
      bookings,
      reservations,
      analytics,
      recommendations,
      payments,
      selectedLibrary,
      setSelectedLibrary,
      searchQuery,
      setSearchQuery,
      addBooking,
      addReservation,
      updateSeatStatus,
      checkInSeat,
      checkOutSeat,
      autoReleaseExpiredBookings,
      generateAIRecommendations,
      addLibrary,
      updateLibrary,
      addBook,
      updateBook,
      approveUser,
      getLibraryAnalytics,
      loadLibraries,
      loadBooks,
      loadEvents,
      loadBookings
    }}>
      {children}
    </AppContext.Provider>
  );
};