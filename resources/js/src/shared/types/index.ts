// ============================================
// GENERATED FROM LARAVEL API MODELS
// Do not hardcode - types match backend
// ============================================

// Core User Type - Matches Laravel User Model
export interface User {
  id: number;
  name: string;
  email: string;
  crn: string;
  icap_id_card_photo?: string;
  phone?: string;
  profile_photo?: string;
  user_type: 'student' | 'librarian' | 'super_admin';
  status: 'pending' | 'approved' | 'rejected';
  library_id?: number;
  loyalty_points: number;
  email_verified_at?: string;
  created_at: string;
  updated_at: string;

  // Appended attributes from backend (computed by Laravel)
  isApproved: boolean;
  role: 'student' | 'librarian' | 'super_admin';
  loyaltyPoints: number;
  subscriptionPlan: string; // Dynamic from activeSubscription relationship
}

// Library Type - Matches Laravel Library Model
export interface Library {
  id: number;
  name: string;
  address: string;
  latitude: number;
  longitude: number;
  coordinates?: { lat: number; lng: number }; // Computed for map display
  phone?: string;
  email?: string;
  opening_hours?: string;
  closing_hours?: string;
  capacity: number;
  facilities?: string[] | string; // JSON field
  status: 'active' | 'inactive';
  created_at: string;
  updated_at: string;

  // Computed attributes
  totalSeats?: number;
  availableSeats?: number;
  currentOccupancy?: number;
  distance?: number;
  images?: string[];
  description?: string;
}

// Seat Type - Matches Laravel Seat Model
export interface Seat {
  id: number;
  library_id: number;
  seat_number: string;
  status: 'available' | 'booked' | 'occupied' | 'maintenance' | 'free_soon';
  type: 'regular' | 'premium' | 'group' | 'silent' | 'collaborative';
  qr_code?: string;
  next_available_time?: string;
  current_booking_id?: string;
  floor: number;
  section_id?: number;
  near_window: boolean;
  power_outlets: number;
  has_computer: boolean;
  max_occupancy: number;
  created_at: string;
  updated_at: string;

  // For UI display
  seatNumber?: string;
  libraryId?: number;
  position?: { x: number; y: number }; // Computed for seat map
}

// Book Type - Matches Laravel Book Model
export interface Book {
  id: number;
  title: string;
  author: string;
  isbn?: string;
  publisher?: string;
  publication_year?: number;
  category?: string;
  description?: string;
  cover_image?: string;
  language?: string;
  pages?: number;
  type: 'physical' | 'digital';
  library_id?: number;
  location?: string;
  total_copies: number;
  available_copies: number;
  digital_url?: string;
  access_level?: 'free' | 'premium';
  status: 'available' | 'unavailable';
  created_at: string;
  updated_at: string;

  // Computed for UI
  availability?: 'available' | 'reserved' | 'unavailable';
  cover?: string;
}

// Seat Booking Type - Matches Laravel SeatBooking Model
export interface Booking {
  id: number;
  user_id: number;
  seat_id: number;
  library_id: number;
  booking_date: string;
  start_time: string;
  end_time: string;
  status: 'pending' | 'active' | 'completed' | 'cancelled' | 'no_show';
  check_in_time?: string;
  check_out_time?: string;
  qr_code?: string;
  total_amount?: number;
  payment_status?: 'pending' | 'paid' | 'refunded';
  created_at: string;
  updated_at: string;

  // For UI compatibility
  userId?: number;
  seatId?: number;
  libraryId?: number;
  date?: string;
  startTime?: string;
  endTime?: string;
  checkedIn?: boolean;
  checkedInAt?: string;
  checkedOutAt?: string;
  totalCost?: number;
}

// Event Type - Matches Laravel Event Model
export interface Event {
  id: number;
  title: string;
  description?: string;
  event_date: string;
  start_time: string;
  end_time: string;
  venue?: string;
  capacity?: number;
  registered_count?: number;
  type: 'seminar' | 'workshop' | 'study_group' | 'exam_prep' | 'career_guidance' | 'networking';
  is_paid: boolean;
  price?: number;
  image?: string;
  organizer_id?: number;
  registration_deadline?: string;
  status: 'upcoming' | 'ongoing' | 'completed' | 'cancelled';
  created_at: string;
  updated_at: string;

  // For UI
  date?: string;
  startTime?: string;
  endTime?: string;
  registered?: number;
  waitlist?: number;
  isActive?: boolean;
}

// Book Reservation Type - Matches Laravel BookReservation Model
export interface Reservation {
  id: number;
  user_id: number;
  book_id: number;
  reservation_date: string;
  due_date?: string;
  return_date?: string;
  status: 'reserved' | 'borrowed' | 'returned' | 'overdue' | 'cancelled';
  fine_amount?: number;
  created_at: string;
  updated_at: string;

  // For UI
  userId?: number;
  bookId?: number;
  reservedAt?: string;
  expiresAt?: string;
  pickupDeadline?: string;
}

// Notification Type
export interface Notification {
  id: number;
  user_id: number;
  title: string;
  message: string;
  type: 'booking' | 'reservation' | 'event' | 'system' | 'payment' | 'reminder';
  is_read: boolean;
  action_url?: string;
  created_at: string;
  updated_at: string;

  // For UI
  userId?: number;
  isRead?: boolean;
  createdAt?: string;
}

// Subscription Plan Type - Matches Laravel SubscriptionPlan Model
export interface SubscriptionPlan {
  id: number;
  name: string;
  description?: string;
  price: number;
  duration_days: number;
  seat_bookings_limit?: number;
  book_reservations_limit?: number;
  digital_books_access: boolean;
  priority_booking: boolean;
  event_discounts?: number;
  features?: string[] | string; // JSON field
  status: 'active' | 'inactive';
  created_at: string;
  updated_at: string;

  // For UI
  duration?: number;
  bookingLimit?: number;
  digitalBookAccess?: boolean;
  prioritySupport?: boolean;
  isActive?: boolean;
}

// User Subscription Type
export interface UserSubscription {
  id: number;
  user_id: number;
  subscription_plan_id: number;
  start_date: string;
  end_date: string;
  status: 'active' | 'expired' | 'cancelled';
  bookings_used: number;
  reservations_used: number;
  payment_method?: string;
  auto_renew: boolean;
  created_at: string;
  updated_at: string;
}

// Loyalty Transaction Type - Matches Laravel LoyaltyTransaction Model
export interface LoyaltyTransaction {
  id: number;
  user_id: number;
  points: number;
  type: 'earned' | 'redeemed' | 'expired';
  description?: string;
  related_type?: string;
  related_id?: number;
  created_at: string;
  updated_at: string;

  // For UI
  reason?: string;
  date?: string;
}

// Payment Type
export interface Payment {
  id: number;
  user_id: number;
  amount: number;
  currency: string;
  type: 'subscription' | 'event' | 'booking' | 'fine';
  status: 'pending' | 'completed' | 'failed' | 'refunded';
  payment_method: string;
  transaction_id?: string;
  description?: string;
  created_at: string;
  updated_at: string;

  // For UI
  userId?: number;
  createdAt?: string;
}

// Analytics Type
export interface Analytics {
  id: number;
  library_id?: number;
  date: string;
  total_bookings: number;
  total_users: number;
  occupancy_rate: number;
  revenue: number;
  created_at: string;
  updated_at: string;

  // Computed
  totalBookings?: number;
  totalUsers?: number;
  occupancyRate?: number;
  libraryId?: number;
}

// AI Recommendation Type
export interface AIRecommendation {
  id: number;
  user_id: number;
  type: 'seat' | 'book' | 'event' | 'time_slot';
  title: string;
  description?: string;
  confidence: number;
  data?: any; // JSON field
  status: 'active' | 'dismissed';
  created_at: string;
  updated_at: string;

  // For UI
  userId?: number;
  isActive?: boolean;
  expiresAt?: string;
}

// Event Registration Type - Matches Laravel EventRegistration Model
export interface EventRegistration {
  id: number;
  user_id: number;
  event_id: number;
  registration_date: string;
  status: 'registered' | 'attended' | 'cancelled' | 'no_show';
  payment_status?: 'pending' | 'paid';
  created_at: string;
  updated_at: string;
}

// Seat Section Type
export interface SeatSection {
  id: number;
  library_id: number;
  name: string;
  description?: string;
  total_seats: number;
  created_at: string;
  updated_at: string;
}

// Review Type
export interface Review {
  id: number;
  user_id: number;
  book_id?: number;
  event_id?: number;
  rating: number;
  comment?: string;
  created_at: string;
  updated_at: string;

  // For UI
  userId?: number;
  userName?: string;
  helpful?: number;
}

// System Settings Type
export interface SystemSettings {
  id: number;
  key: string;
  value: string | any; // Can be JSON
  created_at: string;
  updated_at: string;
}

// ============================================
// HELPER TYPES FOR API RESPONSES
// ============================================

export interface ApiResponse<T = any> {
  data: T;
  message?: string;
  status: 'success' | 'error';
}

export interface PaginatedResponse<T = any> {
  data: T[];
  current_page: number;
  last_page: number;
  per_page: number;
  total: number;
  from: number;
  to: number;
}

export interface ValidationError {
  message: string;
  errors: {
    [field: string]: string[];
  };
}
