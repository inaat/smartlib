import { ref, onMounted, onUnmounted } from 'vue';
import { Library, Seat, Book, Booking, Event, Reservation, Analytics, AIRecommendation, Payment } from '@/shared/types';
import { studentAPI, adminAPI, librarianAPI } from '@/shared/services/api';
import { parseISO } from 'date-fns';

const libraries = ref<Library[]>([]);
const seats = ref<Seat[]>([]);
const books = ref<Book[]>([]);
const events = ref<Event[]>([]);
const bookings = ref<Booking[]>([]);
const reservations = ref<Reservation[]>([]);
const analytics = ref<Analytics[]>([]);
const recommendations = ref<AIRecommendation[]>([]);
const payments = ref<Payment[]>([]);
const selectedLibrary = ref<Library | null>(null);
const searchQuery = ref('');

// Global Extension Modal State
const showExtensionModal = ref(false);
const expiredBooking = ref<any>(null);
const extensionAlertShown = ref<Record<string | number, boolean>>({});

export function useApp() {
    const now = ref(new Date());
    let globalTimer: any = null;

    const startGlobalTimer = () => {
        if (globalTimer) return;
        globalTimer = setInterval(() => {
            now.value = new Date();
            checkBookingsForExtension();
            // autoReleaseExpiredBookings(); // Disabled to prevent frontend from prematurely hiding active bookings
        }, 10000); // Check every 10 seconds
    };

    const checkBookingsForExtension = () => {
        // Auto-extension modal disabled as per user request.
        // Students should use the "Extend Time" button in My Bookings instead.
        return;
    };
    const loadLibraries = async () => {
        try {
            const userStr = localStorage.getItem('smart-lib-user');
            if (userStr) {
                const user = JSON.parse(userStr);
                const userRole = user.role || user.user_type;

                if (userRole === 'admin' || userRole === 'super_admin' || userRole === 'librarian') {
                    const data = await adminAPI.getLibraries();
                    libraries.value = data;
                } else {
                    const data = await studentAPI.getLibraries();
                    libraries.value = Array.isArray(data) ? data : [];
                }
            } else {
                const token = localStorage.getItem('auth_token');
                if (token) {
                    const data = await studentAPI.getLibraries();
                    libraries.value = Array.isArray(data) ? data : [];
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

                if (userRole === 'admin' || userRole === 'super_admin' || userRole === 'librarian') {
                    const data = await adminAPI.getBooks();
                    books.value = data;
                } else {
                    const data = await studentAPI.getBooks();
                    books.value = data;
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

                if (userRole === 'admin' || userRole === 'super_admin' || userRole === 'librarian') {
                    const data = await adminAPI.getEvents();
                    events.value = data;
                } else {
                    const data = await studentAPI.getEvents();
                    events.value = data;
                }
            }
        } catch (error) {
            console.error('Failed to load events:', error);
        }
    };

    const loadBookings = async () => {
        try {
            const data = await studentAPI.getBookings();
            bookings.value = data;
        } catch (error) {
            console.error('Failed to load bookings:', error);
        }
    };

    const addBooking = async (booking: Omit<Booking, 'id'>) => {
        try {
            const newBooking = await studentAPI.createBooking(booking);
            bookings.value = [...bookings.value, newBooking];
            await loadLibraries();
        } catch (error) {
            console.error('Failed to create booking:', error);
            throw error;
        }
    };

    const addReservation = async (bookId: number) => {
        try {
            const newReservation = await studentAPI.reserveBook(bookId);
            reservations.value = [...reservations.value, newReservation];
            await loadBooks();
        } catch (error) {
            console.error('Failed to reserve book:', error);
            throw error;
        }
    };

    const updateSeatStatus = async (seatId: number, status: Seat['status']) => {
        try {
            await librarianAPI.updateSeat(seatId, { status });
            seats.value = seats.value.map(seat =>
                seat.id === seatId ? { ...seat, status } : seat
            );
        } catch (error) {
            console.error('Failed to update seat status:', error);
        }
    };

    const checkInSeat = async (bookingId: number, qrCode: string): Promise<boolean> => {
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

    const checkOutSeat = async (bookingId: number): Promise<boolean> => {
        try {
            const result = await studentAPI.checkOut(bookingId);
            if (result.success) {
                delete extensionAlertShown.value[bookingId];
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

    const extendSeatBooking = async (bookingId: number, minutes: number): Promise<boolean> => {
        try {
            const result = await studentAPI.extendBooking(bookingId, minutes);
            if (result.success) {
                delete extensionAlertShown.value[bookingId];
                await loadBookings();
                return true;
            }
            return false;
        } catch (error) {
            console.error('Extension failed:', error);
            throw error; // Re-throw so the component can show the backend error message
        }
    };

    const cancelBooking = async (bookingId: number): Promise<boolean> => {
        try {
            const result = await studentAPI.cancelBooking(bookingId);
            if (result.success) {
                await loadBookings();
                return true;
            }
            return false;
        } catch (error) {
            console.error('Cancellation failed:', error);
            return false;
        }
    };

    const autoReleaseExpiredBookings = () => {
        const currentTime = new Date();

        bookings.value = bookings.value.map(booking => {
            if (
                (booking.status === 'upcoming' || booking.status === 'booked') &&
                !booking.checkedIn &&
                booking.autoReleaseTime &&
                new Date(booking.autoReleaseTime) < currentTime
            ) {
                if (booking.seatId) updateSeatStatus(booking.seatId, 'available');
                libraries.value = libraries.value.map(lib =>
                    lib.id === booking.libraryId
                        ? { ...lib, availableSeats: (lib.availableSeats || 0) + 1 }
                        : lib
                );
                return { ...booking, status: 'no_show' as const };
            }

            if ((booking.status === 'active' || booking.status === 'checked_in') && (booking.checkedIn || booking.status === 'checked_in')) {
                const endStr = booking.scheduled_end_time || (booking.date && booking.endTime ? `${booking.date}T${booking.endTime}` : null);
                if (!endStr) return booking;

                const endTime = new Date(endStr);
                if (isNaN(endTime.getTime())) return booking;

                if (endTime < currentTime) {
                    if (booking.seatId) updateSeatStatus(booking.seatId, 'available');
                    libraries.value = libraries.value.map(lib =>
                        lib.id === booking.libraryId
                            ? { ...lib, availableSeats: (lib.availableSeats || 0) + 1, currentOccupancy: (lib.currentOccupancy || 0) - 1 }
                            : lib
                    );
                    return {
                        ...booking,
                        status: 'completed' as const,
                        checkedOutAt: endTime.toISOString(),
                        loyaltyPointsEarned: 10
                    };
                }
            }
            return booking;
        });

        seats.value = seats.value.map(seat => {
            const activeBooking = bookings.value.find(b =>
                b.seatId === seat.id &&
                b.status === 'active' &&
                b.checkedIn
            );

            if (activeBooking) {
                const endTime = new Date(`${activeBooking.date}T${activeBooking.endTime}`);
                const thirtyMinutesFromNow = new Date(currentTime.getTime() + 30 * 60 * 1000);

                if (endTime <= thirtyMinutesFromNow && endTime > currentTime) {
                    return {
                        ...seat,
                        status: 'free_soon' as const,
                        nextAvailableTime: endTime.toISOString()
                    };
                }
            }
            return seat;
        });
    };

    const generateAIRecommendations = (userId: number): AIRecommendation[] => {
        const userBookings = bookings.value.filter(b => b.userId === userId);
        const recs: AIRecommendation[] = [];

        if (userBookings.length > 0) {
            const popularTimes = userBookings.reduce((acc, booking) => {
                if (booking.startTime) {
                    const hour = parseInt(booking.startTime.split(':')[0]);
                    acc[hour] = (acc[hour] || 0) + 1;
                }
                return acc;
            }, {} as Record<number, number>);

            const bestTime = Object.entries(popularTimes)
                .sort(([, a], [, b]) => b - a)[0];

            if (bestTime) {
                recs.push({
                    id: Date.now(),
                    user_id: userId,
                    userId,
                    type: 'time_slot',
                    title: 'Your Preferred Time Slot',
                    description: `Based on your history, you prefer booking at ${bestTime[0]}:00. A seat is available today!`,
                    confidence: 0.8,
                    data: { recommendedTime: `${bestTime[0]}:00` },
                    status: 'active',
                    isActive: true,
                    created_at: new Date().toISOString(),
                    updated_at: new Date().toISOString()
                });
            }
        }

        const soonToBeFreeSeat = seats.value.find(s => s.status === 'free_soon');
        if (soonToBeFreeSeat) {
            recs.push({
                id: Date.now() + 1,
                user_id: userId,
                userId,
                type: 'seat',
                title: 'Seat Available Soon',
                description: `Seat ${soonToBeFreeSeat.seatNumber} will be free at ${soonToBeFreeSeat.nextAvailableTime}`,
                confidence: 0.9,
                data: { seatId: soonToBeFreeSeat.id },
                status: 'active',
                isActive: true,
                created_at: new Date().toISOString(),
                updated_at: new Date().toISOString()
            });
        }

        return recs;
    };

    const addLibrary = async (library: Omit<Library, 'id'>) => {
        try {
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
            libraries.value = [...libraries.value, newLibrary];
            await loadLibraries();
        } catch (error) {
            console.error('Failed to add library:', error);
            throw error;
        }
    };

    const updateLibrary = async (libraryId: number, updates: Partial<Library>) => {
        try {
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
            libraries.value = libraries.value.map(lib =>
                lib.id === libraryId ? updatedLibrary : lib
            );
            await loadLibraries();
        } catch (error) {
            console.error('Failed to update library:', error);
            throw error;
        }
    };

    const addBook = async (book: Omit<Book, 'id'>) => {
        try {
            const newBook = await adminAPI.createBook(book);
            books.value = [...books.value, newBook];
        } catch (error) {
            console.error('Failed to add book:', error);
            throw error;
        }
    };

    const updateBook = async (bookId: number, updates: Partial<Book>) => {
        try {
            const updatedBook = await adminAPI.updateBook(bookId, updates);
            books.value = books.value.map(book =>
                book.id === bookId ? updatedBook : book
            );
        } catch (error) {
            console.error('Failed to update book:', error);
            throw error;
        }
    };

    const approveUser = async (userId: number) => {
        try {
            await adminAPI.approveUser(userId);
        } catch (error) {
            console.error('Failed to approve user:', error);
            throw error;
        }
    };

    const getLibraryAnalytics = (libraryId: number): Analytics | null => {
        return analytics.value.find(a => a.libraryId === libraryId) || null;
    };

    const init = async () => {
        const token = localStorage.getItem('auth_token');
        const userStr = localStorage.getItem('smart-lib-user');
        if (token && userStr) {
            try {
                const user = JSON.parse(userStr);
                const userRole = user.role || user.user_type;

                await loadLibraries();

                if (userRole === 'student') {
                    await Promise.all([loadBooks(), loadEvents(), loadBookings()]);
                    startGlobalTimer();
                }

                if (userRole === 'admin' || userRole === 'super_admin' || userRole === 'librarian') {
                    await Promise.all([loadBooks(), loadEvents()]);
                }
            } catch (error) {
                console.error('Failed to initialize app data:', error);
            }
        }
    };

    return {
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
        searchQuery,
        showExtensionModal,
        expiredBooking,
        loadLibraries,
        loadBooks,
        loadEvents,
        loadBookings,
        addBooking,
        addReservation,
        updateSeatStatus,
        checkInSeat,
        checkOutSeat,
        extendSeatBooking,
        cancelBooking,
        autoReleaseExpiredBookings,
        generateAIRecommendations,
        addLibrary,
        updateLibrary,
        addBook,
        updateBook,
        approveUser,
        getLibraryAnalytics,
        init
    };
}
