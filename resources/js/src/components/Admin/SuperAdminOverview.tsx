import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { useApp } from '../../contexts/AppContext';
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

const SuperAdminOverview: React.FC = () => {
  const { user } = useAuth();
  const { libraries, bookings, books } = useApp();

  const systemStats = [
    {
      title: 'Total Libraries',
      value: libraries.length,
      icon: MapPin,
      color: 'blue',
      change: '+2 this month',
      trend: 'up'
    },
    {
      title: 'System Users',
      value: '1,247',
      icon: Users,
      color: 'green',
      change: '+156 this week',
      trend: 'up'
    },
    {
      title: 'Total Revenue',
      value: 'PKR 2.4M',
      icon: CreditCard,
      color: 'purple',
      change: '+18% vs last month',
      trend: 'up'
    },
    {
      title: 'System Health',
      value: '99.9%',
      icon: Activity,
      color: 'orange',
      change: 'Uptime',
      trend: 'stable'
    }
  ];

  const globalMetrics = [
    {
      title: 'Active Subscriptions',
      value: '892',
      subtitle: 'Premium users',
      icon: Crown,
      color: 'bg-gradient-to-r from-purple-500 to-pink-500'
    },
    {
      title: 'Daily Bookings',
      value: '1,456',
      subtitle: 'Across all libraries',
      icon: BarChart3,
      color: 'bg-gradient-to-r from-blue-500 to-cyan-500'
    },
    {
      title: 'Digital Books',
      value: '2,847',
      subtitle: 'Available titles',
      icon: BookOpen,
      color: 'bg-gradient-to-r from-green-500 to-teal-500'
    },
    {
      title: 'System Admins',
      value: '24',
      subtitle: 'Active administrators',
      icon: Shield,
      color: 'bg-gradient-to-r from-orange-500 to-red-500'
    }
  ];

  const systemAlerts = [
    {
      type: 'critical',
      message: 'Database backup completed successfully',
      time: '5 minutes ago',
      icon: Database,
      color: 'text-green-600 bg-green-100'
    },
    {
      type: 'warning',
      message: 'High traffic detected - auto-scaling activated',
      time: '12 minutes ago',
      icon: TrendingUp,
      color: 'text-orange-600 bg-orange-100'
    },
    {
      type: 'info',
      message: 'New integration request from payment gateway',
      time: '1 hour ago',
      icon: Zap,
      color: 'text-blue-600 bg-blue-100'
    }
  ];

  const networkOverview = [
    {
      region: 'Karachi Central',
      libraries: 8,
      users: 456,
      occupancy: 78,
      status: 'optimal'
    },
    {
      region: 'Karachi North',
      libraries: 5,
      users: 312,
      occupancy: 65,
      status: 'good'
    },
    {
      region: 'Karachi South',
      libraries: 6,
      users: 289,
      occupancy: 82,
      status: 'high'
    },
    {
      region: 'Lahore',
      libraries: 4,
      users: 190,
      occupancy: 45,
      status: 'low'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Super Admin Header */}
      <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 rounded-xl text-white p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Crown className="w-8 h-8 text-yellow-300" />
            <div>
              <h1 className="text-2xl font-bold">Super Admin Command Center</h1>
              <p className="text-purple-100 mt-1">Complete system oversight and control</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-sm text-purple-100">System Status</div>
            <div className="text-lg font-semibold flex items-center">
              <CheckCircle className="w-5 h-5 text-green-300 mr-2" />
              All Systems Operational
            </div>
            <div className="text-xs text-purple-200 mt-1">Last updated: 2 minutes ago</div>
          </div>
        </div>
      </div>

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

      {/* Main Dashboard Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* System Alerts */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
            <AlertTriangle className="w-5 h-5 mr-2 text-orange-600" />
            System Alerts & Activity
          </h2>
          <div className="space-y-4">
            {systemAlerts.map((alert, index) => (
              <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                <div className={`w-8 h-8 rounded-full ${alert.color} flex items-center justify-center`}>
                  <alert.icon className="w-4 h-4" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-800">{alert.message}</p>
                  <p className="text-xs text-gray-500">{alert.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick System Controls */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
            <Zap className="w-5 h-5 mr-2 text-purple-600" />
            System Controls
          </h2>
          <div className="space-y-3">
            <button className="w-full text-left p-3 bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors">
              <div className="flex items-center space-x-2">
                <Database className="w-4 h-4 text-purple-600" />
                <span className="text-sm font-medium text-purple-800">System Backup</span>
              </div>
            </button>
            
            <button className="w-full text-left p-3 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors">
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-medium text-blue-800">User Analytics</span>
              </div>
            </button>
            
            <button className="w-full text-left p-3 bg-green-50 hover:bg-green-100 rounded-lg transition-colors">
              <div className="flex items-center space-x-2">
                <Globe className="w-4 h-4 text-green-600" />
                <span className="text-sm font-medium text-green-800">Global Settings</span>
              </div>
            </button>

            <button className="w-full text-left p-3 bg-orange-50 hover:bg-orange-100 rounded-lg transition-colors">
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4 text-orange-600" />
                <span className="text-sm font-medium text-orange-800">Security Center</span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Network Overview */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
          <Globe className="w-5 h-5 mr-2 text-blue-600" />
          Library Network Overview
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {networkOverview.map((region, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-medium text-gray-800">{region.region}</h3>
                <span className={`w-3 h-3 rounded-full ${
                  region.status === 'optimal' ? 'bg-green-500' :
                  region.status === 'good' ? 'bg-blue-500' :
                  region.status === 'high' ? 'bg-orange-500' : 'bg-gray-500'
                }`}></span>
              </div>
              
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Libraries:</span>
                  <span className="font-medium">{region.libraries}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Users:</span>
                  <span className="font-medium">{region.users}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Occupancy:</span>
                  <span className="font-medium">{region.occupancy}%</span>
                </div>
              </div>
              
              <div className="mt-3">
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full ${
                      region.status === 'optimal' ? 'bg-green-500' :
                      region.status === 'good' ? 'bg-blue-500' :
                      region.status === 'high' ? 'bg-orange-500' : 'bg-gray-500'
                    }`}
                    style={{ width: `${region.occupancy}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SuperAdminOverview;