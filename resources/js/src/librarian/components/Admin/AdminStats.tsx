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
  Clock
} from 'lucide-react';

const AdminStats: React.FC = () => {
  const { user } = useAuth();
  const { libraries, bookings, books, seats, reservations } = useApp();

  // Filter data based on admin access
  const accessibleLibraries = user?.role === 'super_admin'
    ? libraries
    : libraries.filter(lib => user?.libraryAccess?.includes(lib.id));

  const accessibleLibraryIds = accessibleLibraries.map(lib => lib.id);
  const relevantBookings = bookings.filter(booking =>
    accessibleLibraryIds.includes(booking.libraryId)
  );
  const relevantSeats = seats.filter(seat =>
    accessibleLibraryIds.includes(seat.libraryId)
  );

  const stats = [
    {
      title: 'Total Libraries',
      value: accessibleLibraries.length,
      icon: MapPin,
      color: 'blue',
      change: '+2 this month'
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
    .slice(0, 2);

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

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'text-blue-600 bg-blue-100',
      green: 'text-green-600 bg-green-100',
      purple: 'text-purple-600 bg-purple-100',
      orange: 'text-orange-600 bg-orange-100'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <div className="space-y-6">
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
              <div className={`w-12 h-12 rounded-lg ${getColorClasses(stat.color)} flex items-center justify-center`}>
                <stat.icon className="w-6 h-6" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activity */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Recent Activity</h2>
          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                <div className={`w-8 h-8 rounded-full ${activity.color} flex items-center justify-center`}>
                  <activity.icon className="w-4 h-4" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-800">{activity.message}</p>
                  <p className="text-xs text-gray-500">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Alerts & Quick Actions */}
        <div className="space-y-6">
          {/* Alerts */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Alerts</h2>
            <div className="space-y-3">
              {alerts.map((alert, index) => (
                <div key={index} className={`p-3 rounded-lg border ${alert.color}`}>
                  <div className="flex items-start space-x-2">
                    <alert.icon className="w-4 h-4 mt-0.5" />
                    <div className="flex-1">
                      <p className="text-sm font-medium">{alert.message}</p>
                      <button className="text-xs font-medium mt-1 hover:underline">
                        {alert.action}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Quick Actions</h2>
            <div className="space-y-3">
              <button className="w-full text-left p-3 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors">
                <div className="flex items-center space-x-2">
                  <Users className="w-4 h-4 text-blue-600" />
                  <span className="text-sm font-medium text-blue-800">Approve Pending Users</span>
                </div>
              </button>
              
              <button className="w-full text-left p-3 bg-green-50 hover:bg-green-100 rounded-lg transition-colors">
                <div className="flex items-center space-x-2">
                  <BookOpen className="w-4 h-4 text-green-600" />
                  <span className="text-sm font-medium text-green-800">Add New Book</span>
                </div>
              </button>
              
              <button className="w-full text-left p-3 bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors">
                <div className="flex items-center space-x-2">
                  <TrendingUp className="w-4 h-4 text-purple-600" />
                  <span className="text-sm font-medium text-purple-800">View Analytics</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Library Status Overview */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Library Status Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {accessibleLibraries.map((library) => {
            const occupancyRate = ((library.totalSeats - library.availableSeats) / library.totalSeats) * 100;
            const statusColor = occupancyRate > 80 ? 'red' : occupancyRate > 60 ? 'orange' : 'green';
            
            return (
              <div key={library.id} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium text-gray-800">{library.name}</h3>
                  <span className={`w-3 h-3 rounded-full ${
                    statusColor === 'green' ? 'bg-green-500' :
                    statusColor === 'orange' ? 'bg-orange-500' : 'bg-red-500'
                  }`}></span>
                </div>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>Occupancy:</span>
                    <span className="font-medium">{Math.round(occupancyRate)}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Available:</span>
                    <span className="font-medium">{library.availableSeats}/{library.totalSeats}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${
                        statusColor === 'green' ? 'bg-green-500' :
                        statusColor === 'orange' ? 'bg-orange-500' : 'bg-red-500'
                      }`}
                      style={{ width: `${occupancyRate}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AdminStats;