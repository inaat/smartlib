// Core User and System Types
export interface User {
  id: string;
  crn: string;
  name: string;
  email: string;
  role: 'student' | 'admin' | 'super_admin';
  loyaltyPoints: number;
  subscriptionPlan: 'free' | 'premium_monthly' | 'premium_6month';
  avatar?: string;
  isApproved: boolean;
  registrationDate?: string;
  lastLogin?: string;
  libraryAccess?: string[]; // For library admins
  phoneNumber?: string;
  address?: string;
  emergencyContact?: string;
  studentId?: string;
  department?: string;
  semester?: string;
  profileCompleteness?: number;
  preferences: {
    notifications: boolean;
    emailUpdates: boolean;
    smsAlerts: boolean;
    preferredLibraries: string[];
    studyHours: string[];
  };
  subscription?: {
    planId: string;
    startDate: string;
    endDate: string;
    autoRenew: boolean;
    paymentMethod: string;
  };
}

// Library and Location Types
export interface Library {
  id: string;
  name: string;
  address: string;
  coordinates: { lat: number; lng: number };
  totalSeats: number;
  availableSeats: number;
  openingHours?: string;
  facilities: string[];
  distance?: number;
  adminId?: string;
  isActive: boolean;
  capacity?: number;
  currentOccupancy: number;
  images: string[];
  description: string;
  contactInfo: {
    phone: string;
    email: string;
    website?: string;
  };
  rules: string[];
  specialFeatures: string[];
  accessibilityFeatures: string[];
  parkingAvailable: boolean;
  wifiPassword?: string;
  operatingDays: string[];
  holidaySchedule?: { date: string; status: 'closed' | 'limited' }[];
}

// Seat and Booking Types
export interface Seat {
  id: string;
  libraryId: string;
  seatNumber: string;
  status: 'available' | 'booked' | 'occupied' | 'maintenance' | 'free_soon';
  position: { x: number; y: number };
  type: 'regular' | 'premium' | 'group' | 'silent' | 'collaborative';
  amenities?: string[];
  qrCode: string;
  nextAvailableTime?: string;
  currentBookingId?: string;
  floor: number;
  section: string;
  nearWindow: boolean;
  powerOutlets: number;
  hasComputer: boolean;
  maxOccupancy: number;
  hourlyRate?: number;
  restrictions?: string[];
}

// Book and Content Types
export interface Book {
  id: string;
  title: string;
  author: string;
  isbn: string;
  type: 'physical' | 'digital';
  category: string;
  cover?: string;
  description: string;
  availability: 'available' | 'reserved' | 'unavailable';
  libraryId?: string;
  location?: string;
  digitalAccess?: {
    subscriptionRequired: boolean;
    passphrase?: string;
    pdfUrl?: string;
    accessLevel: 'free' | 'premium' | 'premium_plus';
    downloadAllowed: boolean;
    printAllowed: boolean;
    offlineAccess: boolean;
    expiryDate?: string;
  };
  uploadedBy?: string;
  uploadDate?: string;
  downloadCount?: number;
  publisher: string;
  publicationYear: number;
  edition: string;
  language: string;
  pages: number;
  tags: string[];
  rating: number;
  reviews?: Review[];
  copiesTotal: number;
  copiesAvailable: number;
  reservationQueue: string[];
  borrowingPeriod: number; // days
  renewalLimit: number;
  finePerDay: number;
}

// Review and Rating Types
export interface Review {
  id: string;
  userId: string;
  userName: string;
  rating: number;
  comment: string;
  createdAt: string;
  helpful: number;
}

// Booking and Reservation Types
export interface Booking {
  id: string;
  userId: string;
  seatId: string;
  libraryId: string;
  date: string;
  startTime: string;
  endTime: string;
  status: 'upcoming' | 'active' | 'completed' | 'cancelled' | 'no_show';
  checkedIn: boolean;
  checkedInAt?: string;
  checkedOutAt?: string;
  qrCode?: string;
  autoReleaseTime?: string;
  loyaltyPointsEarned?: number;
  totalCost: number;
  paymentStatus: 'pending' | 'paid' | 'refunded';
  cancellationReason?: string;
  extendedTimes?: { newEndTime: string; additionalCost: number }[];
  guestCount: number;
  specialRequests?: string;
  remindersSent: number;
}

// Event and Activity Types
export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  startTime: string;
  endTime: string;
  venue: string;
  capacity: number;
  registered: number;
  waitlist: number;
  type: 'seminar' | 'workshop' | 'study_group' | 'exam_prep' | 'career_guidance' | 'networking';
  isPaid: boolean;
  price?: number;
  image?: string;
  organizerId: string;
  registrationDeadline: string;
  isActive: boolean;
  speakers: Speaker[];
  agenda: AgendaItem[];
  materials: EventMaterial[];
  prerequisites?: string[];
  certificateProvided: boolean;
  recordingAvailable: boolean;
  tags: string[];
  targetAudience: string[];
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  feedback: EventFeedback[];
  attendanceTracking: boolean;
}

// Event Related Types
export interface Speaker {
  id: string;
  name: string;
  title: string;
  bio: string;
  image: string;
  expertise: string[];
}

export interface AgendaItem {
  id: string;
  time: string;
  title: string;
  description: string;
  speaker?: string;
  duration: number;
}

export interface EventMaterial {
  id: string;
  title: string;
  type: 'pdf' | 'video' | 'link' | 'presentation';
  url: string;
  description: string;
  accessLevel: 'free' | 'registered' | 'premium';
}

export interface EventFeedback {
  id: string;
  userId: string;
  rating: number;
  comment: string;
  createdAt: string;
  aspects: {
    content: number;
    speaker: number;
    organization: number;
    venue: number;
  };
}

// Reservation and Library Services
export interface Reservation {
  id: string;
  userId: string;
  bookId: string;
  reservedAt: string;
  expiresAt: string;
  status: 'active' | 'collected' | 'expired' | 'cancelled';
  pickupDeadline: string;
  renewalCount: number;
  borrowedAt?: string;
  returnDueDate?: string;
  returnedAt?: string;
  fineAmount: number;
  renewalHistory: { date: string; newDueDate: string }[];
  pickupReminders: number;
  notes?: string;
}

// Notification and Communication Types
export interface Notification {
  id: string;
  userId: string;
  title: string;
  message: string;
  type: 'booking' | 'reservation' | 'event' | 'system' | 'payment' | 'reminder' | 'promotion';
  isRead: boolean;
  createdAt: string;
  actionUrl?: string;
  priority: 'low' | 'medium' | 'high' | 'urgent';
  category: string;
  expiresAt?: string;
  metadata?: any;
}

// Payment and Financial Types
export interface Payment {
  id: string;
  userId: string;
  amount: number;
  currency: string;
  type: 'subscription' | 'event' | 'book_access' | 'fine' | 'seat_booking' | 'extension';
  status: 'pending' | 'completed' | 'failed' | 'refunded' | 'cancelled';
  paymentMethod: string;
  transactionId?: string;
  createdAt: string;
  description: string;
  refundAmount?: number;
  refundReason?: string;
  invoice?: {
    number: string;
    url: string;
  };
  metadata?: any;
}

// Analytics and Reporting Types
export interface Analytics {
  id: string;
  libraryId?: string;
  date: string;
  totalBookings: number;
  totalUsers: number;
  occupancyRate: number;
  popularTimeSlots: { time: string; bookings: number }[];
  topBooks: { bookId: string; reservations: number }[];
  noShowRate: number;
  averageSessionDuration: number;
  revenue: number;
  newRegistrations: number;
  activeSubscriptions: number;
  eventAttendance: number;
  userSatisfaction: number;
  peakHours: string[];
  deviceUsage: { desktop: number; mobile: number; tablet: number };
}

// AI and Recommendation Types
export interface AIRecommendation {
  id: string;
  userId: string;
  type: 'seat' | 'book' | 'event' | 'time_slot' | 'library' | 'study_plan';
  title: string;
  description: string;
  confidence: number;
  data: any;
  isActive: boolean;
  createdAt: string;
  expiresAt?: string;
  category: string;
  priority: number;
  actionTaken: boolean;
  feedback?: 'helpful' | 'not_helpful' | 'irrelevant';
}

// QR and Check-in Types
export interface QRCheckIn {
  id: string;
  bookingId: string;
  seatId: string;
  userId: string;
  action: 'check_in' | 'check_out';
  timestamp: string;
  location: { lat: number; lng: number };
  deviceInfo: string;
  verificationMethod: 'qr' | 'nfc' | 'manual';
  success: boolean;
  errorReason?: string;
}

// Study and Learning Types
export interface StudySession {
  id: string;
  userId: string;
  bookingId: string;
  startTime: string;
  endTime?: string;
  duration?: number;
  productivity: number;
  breaks: { start: string; end: string }[];
  goals: string[];
  achievements: string[];
  notes?: string;
}

// Loyalty and Rewards Types
export interface LoyaltyProgram {
  id: string;
  userId: string;
  totalPoints: number;
  currentTier: 'bronze' | 'silver' | 'gold' | 'platinum';
  pointsToNextTier: number;
  history: LoyaltyTransaction[];
  rewards: LoyaltyReward[];
  achievements: Achievement[];
}

export interface LoyaltyTransaction {
  id: string;
  type: 'earned' | 'redeemed';
  points: number;
  reason: string;
  date: string;
  relatedId?: string;
}

export interface LoyaltyReward {
  id: string;
  title: string;
  description: string;
  pointsCost: number;
  type: 'discount' | 'free_booking' | 'premium_access' | 'merchandise';
  isRedeemed: boolean;
  redeemedAt?: string;
  expiresAt?: string;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  unlockedAt: string;
  category: 'booking' | 'study' | 'social' | 'loyalty';
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
}

// Subscription and Plan Types
export interface SubscriptionPlan {
  id: string;
  name: string;
  description: string;
  price: number;
  duration: number; // days
  features: string[];
  bookingLimit: number;
  digitalBookAccess: boolean;
  prioritySupport: boolean;
  eventDiscounts: number; // percentage
  isActive: boolean;
  trialPeriod?: number; // days
}

// System and Configuration Types
export interface SystemSettings {
  id: string;
  autoReleaseTimeout: number; // minutes
  bookingAdvanceLimit: number; // days
  maxBookingDuration: number; // hours
  finePerDay: number;
  loyaltyPointsPerHour: number;
  maintenanceMode: boolean;
  supportContact: {
    email: string;
    phone: string;
    hours: string;
  };
  features: {
    aiRecommendations: boolean;
    loyaltyProgram: boolean;
    eventRegistration: boolean;
    digitalBooks: boolean;
    mobileApp: boolean;
  };
}

// Reporting and Documentation Types
export interface Report {
  id: string;
  title: string;
  type: 'usage' | 'financial' | 'user_activity' | 'library_performance';
  generatedBy: string;
  generatedAt: string;
  dateRange: { start: string; end: string };
  data: any;
  format: 'pdf' | 'excel' | 'csv';
  downloadUrl?: string;
  isScheduled: boolean;
  frequency?: 'daily' | 'weekly' | 'monthly';
}

// Feedback and Support Types
export interface Feedback {
  id: string;
  userId: string;
  type: 'bug' | 'feature_request' | 'general' | 'complaint' | 'compliment';
  title: string;
  description: string;
  category: string;
  priority: 'low' | 'medium' | 'high';
  status: 'open' | 'in_progress' | 'resolved' | 'closed';
  createdAt: string;
  updatedAt: string;
  assignedTo?: string;
  resolution?: string;
  attachments: string[];
}

// FAQ and Help Types
export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
  isPublished: boolean;
  viewCount: number;
  helpful: number;
  notHelpful: number;
  createdAt: string;
  updatedAt: string;
  tags: string[];
}

// Announcement and Communication Types
export interface Announcement {
  id: string;
  title: string;
  content: string;
  type: 'general' | 'maintenance' | 'new_feature' | 'policy_change';
  priority: 'low' | 'medium' | 'high';
  targetAudience: 'all' | 'students' | 'admins';
  isActive: boolean;
  publishedAt: string;
  expiresAt?: string;
  createdBy: string;
  attachments: string[];
}