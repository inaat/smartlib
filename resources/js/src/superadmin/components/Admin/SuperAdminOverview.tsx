import React, { useState, useEffect } from 'react';
import { useAuth } from '@/shared/contexts/AuthContext';
import { useApp } from '@/shared/contexts/AppContext';
import { adminAPI } from '@/shared/services/api';
import {
  Crown,
  Database,
  Users,
  MapPin,
  BookOpen,
  CreditCard,
  BarChart3,
  Shield,
  Zap,
  Globe,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  Activity
} from 'lucide-react';

interface DashboardStats {
  total_students: number;
  active_students: number;
  total_libraries: number;
  total_seats: number;
  active_bookings: number;
  today_bookings: number;
  total_revenue: number;
  revenue_growth: number;
}

const SuperAdminOverview: React.FC = () => {
  const { user } = useAuth();
  const { libraries, bookings, books } = useApp();
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const data = await adminAPI.getDashboardStats();
        setStats(data);
      } catch (error) {
        console.error('Failed to fetch dashboard stats:', error);
        // Set default stats on error
        setStats({
          total_students: 0,
          active_students: 0,
          total_libraries: libraries.length || 0,
          total_seats: 0,
          active_bookings: bookings.length || 0,
          today_bookings: 0,
          total_revenue: 0,
          revenue_growth: 0
        });
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, [libraries.length, bookings.length]);

  if (loading || !stats) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  const systemStats = [
    {
      title: 'Total Libraries',
      value: stats.total_libraries?.toString() || '0',
      icon: MapPin,
      color: 'blue',
      change: `${libraries.length} active`,
      trend: 'up'
    },
    {
      title: 'Total Students',
      value: stats.total_students?.toString() || '0',
      icon: Users,
      color: 'green',
      change: `${stats.active_students || 0} approved`,
      trend: 'up'
    },
    {
      title: 'Total Revenue',
      value: `PKR ${((stats.total_revenue || 0) / 1000).toFixed(1)}K`,
      icon: CreditCard,
      color: 'purple',
      change: `${(stats.revenue_growth || 0) > 0 ? '+' : ''}${stats.revenue_growth || 0}% vs last month`,
      trend: (stats.revenue_growth || 0) >= 0 ? 'up' : 'down'
    },
    {
      title: 'Total Seats',
      value: stats.total_seats?.toString() || '0',
      icon: Database,
      color: 'orange',
      change: `${stats.active_bookings || 0} active bookings`,
      trend: 'up'
    }
  ];

  const globalMetrics = [
    {
      title: 'Active Students',
      value: stats.active_students?.toString() || '0',
      subtitle: 'Approved users',
      icon: Crown,
      color: 'bg-gradient-to-r from-purple-500 to-pink-500'
    },
    {
      title: 'Today Bookings',
      value: stats.today_bookings?.toString() || '0',
      subtitle: 'Bookings created today',
      icon: BarChart3,
      color: 'bg-gradient-to-r from-blue-500 to-cyan-500'
    },
    {
      title: 'Total Books',
      value: books.length.toString(),
      subtitle: 'Available titles',
      icon: BookOpen,
      color: 'bg-gradient-to-r from-green-500 to-teal-500'
    },
    {
      title: 'Active Bookings',
      value: stats.active_bookings?.toString() || '0',
      subtitle: 'Current reservations',
      icon: Shield,
      color: 'bg-gradient-to-r from-orange-500 to-red-500'
    }
  ];

  return (
    <div className="space-y-6">
    

      {/* System Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {systemStats.map((stat, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">{stat.title}</p>
                <p className="text-2xl font-bold text-gray-800 mt-1">{stat.value}</p>
                <div className="flex items-center mt-2">
                  <span className={`text-sm font-medium ${
                    stat.trend === 'up' ? 'text-green-600' : 
                    stat.trend === 'down' ? 'text-red-600' : 'text-blue-600'
                  }`}>
                    {stat.change}
                  </span>
                </div>
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

      {/* Global Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {globalMetrics.map((metric, index) => (
          <div key={index} className={`${metric.color} rounded-xl text-white p-6`}>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white text-opacity-90 text-sm font-medium">{metric.title}</p>
                <p className="text-2xl font-bold mt-1">{metric.value}</p>
                <p className="text-white text-opacity-75 text-xs mt-1">{metric.subtitle}</p>
              </div>
              <metric.icon className="w-8 h-8 text-white text-opacity-80" />
            </div>
          </div>
        ))}
      </div>

      {/* Libraries Overview */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
          <MapPin className="w-5 h-5 mr-2 text-blue-600" />
          Library Network ({libraries.length} Total)
        </h2>
        {libraries.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {libraries.slice(0, 6).map((library) => (
              <div key={library.id} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-medium text-gray-800 truncate">{library.name}</h3>
                  <span className={`w-3 h-3 rounded-full ${
                    library.is_active ? 'bg-green-500' : 'bg-gray-400'
                  }`}></span>
                </div>

                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Capacity:</span>
                    <span className="font-medium">{library.capacity || library.totalSeats}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Address:</span>
                    <span className="font-medium text-xs truncate max-w-[150px]">{library.address}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Status:</span>
                    <span className={`font-medium ${library.is_active ? 'text-green-600' : 'text-gray-500'}`}>
                      {library.is_active ? 'Active' : 'Inactive'}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8 text-gray-500">
            No libraries found. Add your first library to get started.
          </div>
        )}
      </div>
    </div>
  );
};

export default SuperAdminOverview;