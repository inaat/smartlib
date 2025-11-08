import React from 'react';
import { useAuth } from '@/shared/contexts/AuthContext';
import { useApp } from '@/shared/contexts/AppContext';
import { 
  Users, 
  MapPin, 
  BookOpen, 
  Calendar,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  Clock,
  Shield,
  BarChart3
} from 'lucide-react';

const AdminOverview: React.FC = () => {
  const { user } = useAuth();
  const { libraries, bookings, books, seats, reservations, events } = useApp();

  // Filter data based on admin access
  const accessibleLibraries = user?.libraryAccess
    ? libraries.filter(lib => user.libraryAccess?.includes(lib.id))
    : libraries; // Show all libraries for super_admin

  const accessibleLibraryIds = accessibleLibraries.map(lib => lib.id);
  const relevantBookings = bookings.filter(booking =>
    accessibleLibraryIds.includes(booking.libraryId)
  );
  const relevantSeats = seats.filter(seat =>
    accessibleLibraryIds.includes(seat.libraryId)
  );

  const stats = [
    {
      title: 'My Libraries',
      value: accessibleLibraries.length,
      icon: MapPin,
      color: 'blue',
      change: 'Managing libraries'
    },
    {
      title: 'Active Bookings',
      value: relevantBookings.filter(b => b.status === 'active').length,
      icon: Calendar,
      color: 'green',
      change: '+15% from yesterday'
    },
    {
      title: 'Total Books',
      value: books.length,
      icon: BookOpen,
      color: 'purple',
      change: '+8 new books'
    },
    {
      title: 'Available Seats',
      value: relevantSeats.filter(s => s.status === 'available').length,
      icon: Users,
      color: 'orange',
      change: `${Math.round((relevantSeats.filter(s => s.status === 'available').length / relevantSeats.length) * 100)}% capacity`
    }
  ];

  // Generate real-time activity from actual data
  const recentActivity = [];

  // Add recent bookings
  const recentBookings = [...relevantBookings]
    .sort((a, b) => new Date(b.createdAt || b.date).getTime() - new Date(a.createdAt || a.date).getTime())
    .slice(0, 2);

  recentBookings.forEach(booking => {
    const library = libraries.find(l => l.id === booking.libraryId);
    const timeAgo = getTimeAgo(booking.createdAt || booking.date);
    recentActivity.push({
      type: 'booking',
      message: `New seat booking at ${library?.name || 'Library'}`,
      time: timeAgo,
      icon: Calendar,
      color: 'text-blue-600 bg-blue-100'
    });
  });

  // Add recent book reservations
  const recentReservations = [...reservations]
    .sort((a, b) => new Date(b.createdAt || b.reservationDate).getTime() - new Date(a.createdAt || a.reservationDate).getTime())
    .slice(0, 1);

  recentReservations.forEach(reservation => {
    const book = books.find(b => b.id === reservation.bookId);
    const timeAgo = getTimeAgo(reservation.createdAt || reservation.reservationDate);
    recentActivity.push({
      type: 'book',
      message: `Book "${book?.title || 'Unknown'}" reserved`,
      time: timeAgo,
      icon: BookOpen,
      color: 'text-green-600 bg-green-100'
    });
  });

  // Generate alerts based on real data
  const alerts = [];

  // Check capacity alerts
  accessibleLibraries.forEach(library => {
    const librarySeats = relevantSeats.filter(s => s.libraryId === library.id);
    const occupiedSeats = librarySeats.filter(s => s.status !== 'available').length;
    const capacityPercent = librarySeats.length > 0 ? (occupiedSeats / librarySeats.length) * 100 : 0;

    if (capacityPercent > 80) {
      alerts.push({
        type: 'warning',
        message: `${library.name} at ${Math.round(capacityPercent)}% capacity`,
        action: 'View Details',
        icon: AlertTriangle,
        color: 'text-orange-600 bg-orange-50 border-orange-200'
      });
    }
  });

  // Check for expiring book reservations
  const expiringReservations = reservations.filter(r => {
    if (!r.dueDate) return false;
    const dueDate = new Date(r.dueDate);
    const today = new Date();
    const daysUntilDue = Math.ceil((dueDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
    return daysUntilDue <= 2 && daysUntilDue >= 0;
  });

  if (expiringReservations.length > 0) {
    alerts.push({
      type: 'info',
      message: `${expiringReservations.length} book reservation(s) expiring soon`,
      action: 'Review',
      icon: Clock,
      color: 'text-blue-600 bg-blue-50 border-blue-200'
    });
  }

  // Helper function to calculate time ago
  function getTimeAgo(dateString: string): string {
    const date = new Date(dateString);
    const now = new Date();
    const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);

    if (seconds < 60) return `${seconds} seconds ago`;
    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    const days = Math.floor(hours / 24);
    return `${days} day${days > 1 ? 's' : ''} ago`;
  }

  return (
    <div className="space-y-6">
      {/* Welcome Header */}
      <div className="bg-gradient-to-r from-blue-600 to-teal-600 rounded-xl text-white p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Shield className="w-8 h-8 text-blue-300" />
            <div>
              <h1 className="text-2xl font-bold">Library Admin Dashboard</h1>
              <p className="text-blue-100 mt-1">Manage your assigned libraries efficiently</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-sm text-blue-100">Welcome back</div>
            <div className="text-lg font-semibold">{user?.name}</div>
            <div className="text-xs text-blue-200 mt-1">Library Administrator</div>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">{stat.title}</p>
                <p className="text-2xl font-bold text-gray-800 mt-1">{stat.value}</p>
                <p className="text-xs text-gray-500 mt-1">{stat.change}</p>
              </div>
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                stat.color === 'blue' ? 'bg-blue-100 text-blue-600' :
                stat.color === 'green' ? 'bg-green-100 text-green-600' :
                stat.color === 'purple' ? 'bg-purple-100 text-purple-600' :
                'bg-orange-100 text-orange-600'
              }`}>
                <stat.icon className="w-6 h-6" />
              </div>
            </div>
          </div>
        ))}
      </div>

 
    
    </div>
  );
};

export default AdminOverview;