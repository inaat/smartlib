import React, { useState, useEffect } from 'react';
import { librarianAPI } from '@/shared/services/api';
import {
  BarChart3,
  TrendingUp,
  Users,
  Calendar,
  Clock,
  BookOpen,
  Target,
  Activity
} from 'lucide-react';

interface AnalyticsData {
  library: {
    id: number;
    name: string;
  };
  stats: {
    total_bookings: number;
    active_bookings: number;
    completed_bookings: number;
    completion_rate: number;
    no_show_rate: number;
    avg_session_duration: number;
    total_seats: number;
    available_seats: number;
    occupancy_rate: number;
    total_books: number;
    digital_books: number;
    physical_books: number;
    total_events: number;
    upcoming_events: number;
    past_events: number;
  };
  dailyTrends: Array<{
    date: string;
    day: string;
    bookings: number;
    completed: number;
  }>;
  popularTimeSlots: Array<{
    time: string;
    bookings: number;
  }>;
  timeRange: string;
}

const AnalyticsView: React.FC = () => {
  const [analyticsData, setAnalyticsData] = useState<AnalyticsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [timeRange, setTimeRange] = useState<'today' | 'week' | 'month' | 'year'>('week');

  useEffect(() => {
    fetchAnalytics();
  }, [timeRange]);

  const fetchAnalytics = async () => {
    try {
      setLoading(true);
      const data = await librarianAPI.getAnalytics(timeRange);
      setAnalyticsData(data);
    } catch (error) {
      console.error('Failed to fetch analytics:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-gray-600">Loading analytics...</div>
      </div>
    );
  }

  if (!analyticsData) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-gray-600">No analytics data available</div>
      </div>
    );
  }

  const { library, stats, dailyTrends, popularTimeSlots } = analyticsData;

  const keyMetrics = [
    {
      title: 'Total Bookings',
      value: stats.total_bookings,
      change: `${stats.active_bookings} active`,
      trend: 'up',
      icon: Calendar,
      color: 'blue'
    },
    {
      title: 'Completion Rate',
      value: `${stats.completion_rate}%`,
      change: `${stats.completed_bookings} completed`,
      trend: 'up',
      icon: TrendingUp,
      color: 'green'
    },
    {
      title: 'No-Show Rate',
      value: `${stats.no_show_rate}%`,
      change: 'Track rate',
      trend: stats.no_show_rate < 10 ? 'down' : 'up',
      icon: Users,
      color: 'orange'
    },
    {
      title: 'Avg. Session',
      value: `${stats.avg_session_duration}h`,
      change: 'Average duration',
      trend: 'up',
      icon: Clock,
      color: 'purple'
    }
  ];

  const additionalStats = [
    {
      title: 'Seat Occupancy',
      value: `${stats.occupancy_rate}%`,
      subtitle: `${stats.total_seats - stats.available_seats} / ${stats.total_seats} occupied`,
      icon: Target,
      color: 'blue'
    },
    {
      title: 'Library Books',
      value: stats.total_books,
      subtitle: `${stats.digital_books} digital, ${stats.physical_books} physical`,
      icon: BookOpen,
      color: 'green'
    },
    {
      title: 'Events',
      value: stats.total_events,
      subtitle: `${stats.upcoming_events} upcoming, ${stats.past_events} past`,
      icon: Activity,
      color: 'purple'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-gray-800">
            {library.name} - Analytics Dashboard
          </h2>
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
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {keyMetrics.map((stat, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">{stat.title}</p>
                <p className="text-2xl font-bold text-gray-800 mt-1">{stat.value}</p>
                <div className="flex items-center mt-2">
                  <span className="text-xs text-gray-500">{stat.change}</span>
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

      {/* Additional Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {additionalStats.map((stat, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-medium text-gray-600">{stat.title}</h3>
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                stat.color === 'blue' ? 'bg-blue-100 text-blue-600' :
                stat.color === 'green' ? 'bg-green-100 text-green-600' :
                'bg-purple-100 text-purple-600'
              }`}>
                <stat.icon className="w-5 h-5" />
              </div>
            </div>
            <p className="text-3xl font-bold text-gray-800">{stat.value}</p>
            <p className="text-sm text-gray-500 mt-1">{stat.subtitle}</p>
          </div>
        ))}
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Daily Booking Trends */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Daily Booking Trends</h3>
          {dailyTrends.length > 0 ? (
            <div className="space-y-4">
              {dailyTrends.map((day, index) => {
                const maxBookings = Math.max(...dailyTrends.map(d => d.bookings), 1);
                return (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3 flex-1">
                      <span className="text-sm font-medium text-gray-700 w-8">{day.day}</span>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2">
                          <div className="flex-1 bg-gray-200 rounded-full h-2 max-w-xs">
                            <div
                              className="bg-blue-600 h-2 rounded-full"
                              style={{ width: `${(day.bookings / maxBookings) * 100}%` }}
                            ></div>
                          </div>
                          <span className="text-sm text-gray-600 w-8 text-right">{day.bookings}</span>
                        </div>
                      </div>
                    </div>
                    <span className="text-xs text-green-600 ml-4">{day.completed} completed</span>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-8 text-gray-500">
              No booking data for this period
            </div>
          )}
        </div>

        {/* Popular Time Slots */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Popular Time Slots</h3>
          {popularTimeSlots.length > 0 ? (
            <div className="space-y-4">
              {popularTimeSlots.map((slot, index) => {
                const maxBookings = Math.max(...popularTimeSlots.map(s => s.bookings), 1);
                return (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3 flex-1">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                        index === 0 ? 'bg-yellow-100 text-yellow-600' :
                        index === 1 ? 'bg-gray-100 text-gray-600' :
                        index === 2 ? 'bg-orange-100 text-orange-600' :
                        'bg-blue-100 text-blue-600'
                      }`}>
                        {index + 1}
                      </div>
                      <span className="text-sm font-medium text-gray-700 w-16">{slot.time}</span>
                      <div className="flex-1 bg-gray-200 rounded-full h-2 max-w-xs">
                        <div
                          className="bg-blue-600 h-2 rounded-full"
                          style={{ width: `${(slot.bookings / maxBookings) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                    <span className="text-sm text-gray-600 ml-4">{slot.bookings}</span>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-8 text-gray-500">
              No time slot data for this period
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AnalyticsView;
