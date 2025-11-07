import React, { useState } from 'react';
import { useApp } from '../../contexts/AppContext';
import { useAuth } from '../../contexts/AuthContext';
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  Calendar,
  Clock,
  MapPin,
  BookOpen,
  Award
} from 'lucide-react';

const AnalyticsView: React.FC = () => {
  const { bookings, libraries, books, reservations } = useApp();
  const { user } = useAuth();
  const [timeRange, setTimeRange] = useState<'today' | 'week' | 'month' | 'year'>('week');
  const [selectedLibrary, setSelectedLibrary] = useState<string>('all');

  // Filter data based on admin access
  const accessibleLibraries = user?.role === 'super_admin' 
    ? libraries 
    : libraries.filter(lib => user?.libraryAccess?.includes(lib.id));

  const accessibleLibraryIds = accessibleLibraries.map(lib => lib.id);
  const relevantBookings = bookings.filter(booking => 
    accessibleLibraryIds.includes(booking.libraryId) &&
    (selectedLibrary === 'all' || booking.libraryId === selectedLibrary)
  );

  // Calculate analytics data
  const totalBookings = relevantBookings.length;
  const completedBookings = relevantBookings.filter(b => b.status === 'completed').length;
  const noShowRate = relevantBookings.length > 0 
    ? (relevantBookings.filter(b => b.status === 'no_show').length / relevantBookings.length) * 100 
    : 0;
  
  const averageSessionDuration = completedBookings > 0
    ? relevantBookings
        .filter(b => b.status === 'completed' && b.checkedInAt && b.checkedOutAt)
        .reduce((acc, booking) => {
          const checkIn = new Date(booking.checkedInAt!);
          const checkOut = new Date(booking.checkedOutAt!);
          return acc + (checkOut.getTime() - checkIn.getTime());
        }, 0) / completedBookings / (1000 * 60 * 60) // Convert to hours
    : 0;

  // Popular time slots
  const timeSlotData = relevantBookings.reduce((acc, booking) => {
    const hour = parseInt(booking.startTime.split(':')[0]);
    acc[hour] = (acc[hour] || 0) + 1;
    return acc;
  }, {} as Record<number, number>);

  const popularTimeSlots = Object.entries(timeSlotData)
    .sort(([,a], [,b]) => b - a)
    .slice(0, 5)
    .map(([hour, count]) => ({
      time: `${hour}:00`,
      bookings: count
    }));

  // Library occupancy data
  const libraryOccupancy = accessibleLibraries.map(library => {
    const libraryBookings = relevantBookings.filter(b => b.libraryId === library.id);
    const occupancyRate = ((library.totalSeats - library.availableSeats) / library.totalSeats) * 100;
    
    return {
      name: library.name,
      occupancy: Math.round(occupancyRate),
      totalBookings: libraryBookings.length,
      activeBookings: libraryBookings.filter(b => b.status === 'active').length
    };
  });

  // Calculate daily booking trends from real data
  const dailyTrends = [];
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const today = new Date();

  for (let i = 6; i >= 0; i--) {
    const date = new Date(today);
    date.setDate(date.getDate() - i);
    const dateStr = date.toISOString().split('T')[0];

    const dayBookings = relevantBookings.filter(b => b.date === dateStr);
    const dayCompleted = dayBookings.filter(b => b.status === 'completed');

    dailyTrends.push({
      day: daysOfWeek[date.getDay()],
      bookings: dayBookings.length,
      completed: dayCompleted.length
    });
  }

  const stats = [
    {
      title: 'Total Bookings',
      value: totalBookings,
      change: '+12%',
      trend: 'up',
      icon: Calendar,
      color: 'blue'
    },
    {
      title: 'Completion Rate',
      value: `${totalBookings > 0 ? Math.round((completedBookings / totalBookings) * 100) : 0}%`,
      change: '+5%',
      trend: 'up',
      icon: TrendingUp,
      color: 'green'
    },
    {
      title: 'No-Show Rate',
      value: `${Math.round(noShowRate)}%`,
      change: '-3%',
      trend: 'down',
      icon: Users,
      color: 'orange'
    },
    {
      title: 'Avg. Session',
      value: `${averageSessionDuration.toFixed(1)}h`,
      change: '+0.5h',
      trend: 'up',
      icon: Clock,
      color: 'purple'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-gray-800">Analytics Dashboard</h2>
          <p className="text-gray-600 text-sm mt-1">Insights and performance metrics</p>
        </div>
        
        <div className="flex gap-3">
          <select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value as any)}
            className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="today">Today</option>
            <option value="week">This Week</option>
            <option value="month">This Month</option>
            <option value="year">This Year</option>
          </select>
          
          <select
            value={selectedLibrary}
            onChange={(e) => setSelectedLibrary(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="all">All Libraries</option>
            {accessibleLibraries.map(library => (
              <option key={library.id} value={library.id}>{library.name}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">{stat.title}</p>
                <p className="text-2xl font-bold text-gray-800 mt-1">{stat.value}</p>
                <div className="flex items-center mt-2">
                  <span className={`text-sm font-medium ${
                    stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {stat.change}
                  </span>
                  <span className="text-xs text-gray-500 ml-1">vs last {timeRange}</span>
                </div>
              </div>
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                stat.color === 'blue' ? 'bg-blue-100 text-blue-600' :
                stat.color === 'green' ? 'bg-green-100 text-green-600' :
                stat.color === 'orange' ? 'bg-orange-100 text-orange-600' :
                'bg-purple-100 text-purple-600'
              }`}>
                <stat.icon className="w-6 h-6" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Daily Booking Trends */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Daily Booking Trends</h3>
          <div className="space-y-4">
            {dailyTrends.map((day, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <span className="text-sm font-medium text-gray-700 w-8">{day.day}</span>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2">
                      <div className="w-32 bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-blue-600 h-2 rounded-full"
                          style={{ width: `${(day.bookings / 70) * 100}%` }}
                        ></div>
                      </div>
                      <span className="text-sm text-gray-600">{day.bookings}</span>
                    </div>
                  </div>
                </div>
                <span className="text-xs text-green-600">{day.completed} completed</span>
              </div>
            ))}
          </div>
        </div>

        {/* Popular Time Slots */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Popular Time Slots</h3>
          <div className="space-y-4">
            {popularTimeSlots.map((slot, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                    index === 0 ? 'bg-gold-100 text-gold-600' :
                    index === 1 ? 'bg-gray-100 text-gray-600' :
                    index === 2 ? 'bg-orange-100 text-orange-600' :
                    'bg-blue-100 text-blue-600'
                  }`}>
                    {index + 1}
                  </div>
                  <span className="text-sm font-medium text-gray-700">{slot.time}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-20 bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full"
                      style={{ width: `${(slot.bookings / Math.max(...popularTimeSlots.map(s => s.bookings))) * 100}%` }}
                    ></div>
                  </div>
                  <span className="text-sm text-gray-600">{slot.bookings}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Library Performance */}
      <div className="bg-white rounde-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Library Performance</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {libraryOccupancy.map((library, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-medium text-gray-800">{library.name}</h4>
                <span className={`w-3 h-3 rounded-full ${
                  library.occupancy > 80 ? 'bg-red-500' :
                  library.occupancy > 60 ? 'bg-orange-500' : 'bg-green-500'
                }`}></span>
              </div>
              
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Occupancy:</span>
                  <span className="font-medium">{library.occupancy}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Total Bookings:</span>
                  <span className="font-medium">{library.totalBookings}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Active Now:</span>
                  <span className="font-medium">{library.activeBookings}</span>
                </div>
              </div>
              
              <div className="mt-3">
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full ${
                      library.occupancy > 80 ? 'bg-red-500' :
                      library.occupancy > 60 ? 'bg-orange-500' : 'bg-green-500'
                    }`}
                    style={{ width: `${library.occupancy}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Additional Insights */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Book Reservations */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
            <BookOpen className="w-5 h-5 mr-2 text-blue-600" />
            Book Reservations
          </h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600">Total Reservations:</span>
              <span className="font-medium">{reservations.length}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Active:</span>
              <span className="font-medium">{reservations.filter(r => r.status === 'active').length}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Collected:</span>
              <span className="font-medium">{reservations.filter(r => r.status === 'collected').length}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Expired:</span>
              <span className="font-medium">{reservations.filter(r => r.status === 'expired').length}</span>
            </div>
          </div>
        </div>

        {/* System Health */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
            <Award className="w-5 h-5 mr-2 text-green-600" />
            System Health
          </h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600">Uptime:</span>
              <span className="font-medium text-green-600">99.9%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Active Users:</span>
              <span className="font-medium">1,247</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">API Response:</span>
              <span className="font-medium text-green-600">145ms</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Error Rate:</span>
              <span className="font-medium text-green-600">0.02%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsView;