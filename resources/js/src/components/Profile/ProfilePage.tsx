import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { useSearchParams } from 'react-router-dom';
import { useApp } from '../../contexts/AppContext';
import SubscriptionManagement from './SubscriptionManagement';
import LoyaltyProgram from './LoyaltyProgram';
import StudyAnalytics from './StudyAnalytics';
import { 
  User, 
  Mail, 
  Award, 
  CreditCard, 
  Calendar, 
  BookMarked,
  Settings,
  Edit3,
  Save,
  X,
  BarChart3,
  Gift,
  Bell,
  Shield,
  Download,
  Camera
} from 'lucide-react';

const ProfilePage: React.FC = () => {
  const { user } = useAuth();
  const { bookings, reservations } = useApp();
  const [searchParams] = useSearchParams();
  const tabFromUrl = searchParams.get('tab') || 'profile';
  const [activeTab, setActiveTab] = useState(tabFromUrl);
  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState(user);

  if (!user) return null;

  const tabs = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'subscription', label: 'Subscription', icon: CreditCard },
    { id: 'loyalty', label: 'Loyalty Program', icon: Gift },
    { id: 'analytics', label: 'Study Analytics', icon: BarChart3 },
    { id: 'settings', label: 'Settings', icon: Settings }
  ];

  const handleSave = () => {
    // In a real app, this would update the user profile
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedUser(user);
    setIsEditing(false);
  };

  const getSubscriptionColor = () => {
    switch (user.subscriptionPlan) {
      case 'premium_6month': return 'text-purple-600 bg-purple-100';
      case 'premium_monthly': return 'text-blue-600 bg-blue-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const stats = [
    {
      title: 'Total Bookings',
      value: bookings.length,
      icon: Calendar,
      color: 'text-blue-600'
    },
    {
      title: 'Book Reservations',
      value: reservations.length,
      icon: BookMarked,
      color: 'text-teal-600'
    },
    {
      title: 'Loyalty Points',
      value: user.loyaltyPoints,
      icon: Award,
      color: 'text-orange-600'
    }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'profile':
        return (
          <div className="space-y-6">
            {/* Profile Information */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-gray-800">Profile Information</h2>
                {!isEditing ? (
                  <button
                    onClick={() => setIsEditing(true)}
                    className="flex items-center space-x-2 text-blue-600 hover:text-blue-700"
                  >
                    <Edit3 className="w-4 h-4" />
                    <span>Edit</span>
                  </button>
                ) : (
                  <div className="flex space-x-2">
                    <button
                      onClick={handleSave}
                      className="flex items-center space-x-1 bg-blue-600 text-white px-3 py-1 rounded-lg hover:bg-blue-700"
                    >
                      <Save className="w-4 h-4" />
                      <span>Save</span>
                    </button>
                    <button
                      onClick={handleCancel}
                      className="flex items-center space-x-1 border border-gray-300 text-gray-700 px-3 py-1 rounded-lg hover:bg-gray-50"
                    >
                      <X className="w-4 h-4" />
                      <span>Cancel</span>
                    </button>
                  </div>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Avatar and Basic Info */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center">
                        <User className="w-10 h-10 text-blue-600" />
                      </div>
                      {isEditing && (
                        <button className="absolute -bottom-1 -right-1 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700">
                          <Camera className="w-3 h-3" />
                        </button>
                      )}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800">{user.name}</h3>
                      <p className="text-gray-600 capitalize">{user.role}</p>
                      <span className={`inline-flex px-2 py-1 rounded-full text-xs font-medium ${getSubscriptionColor()}`}>
                        {user.subscriptionPlan.replace('_', ' ')}
                      </span>
                    </div>
                  </div>
                  
                  {/* Profile Completeness */}
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700">Profile Completeness</span>
                      <span className="text-sm text-gray-600">{user.profileCompleteness || 75}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full"
                        style={{ width: `${user.profileCompleteness || 75}%` }}
                      ></div>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      Complete your profile to unlock more features
                    </p>
                  </div>
                </div>

                {/* Contact Info */}
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">CRN</label>
                    {isEditing ? (
                      <input
                        type="text"
                        value={editedUser?.crn || ''}
                        onChange={(e) => setEditedUser(prev => prev ? {...prev, crn: e.target.value} : null)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    ) : (
                      <p className="text-gray-800">{user.crn}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    {isEditing ? (
                      <input
                        type="email"
                        value={editedUser?.email || ''}
                        onChange={(e) => setEditedUser(prev => prev ? {...prev, email: e.target.value} : null)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    ) : (
                      <p className="text-gray-800">{user.email}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    {isEditing ? (
                      <input
                        type="text"
                        value={editedUser?.name || ''}
                        onChange={(e) => setEditedUser(prev => prev ? {...prev, name: e.target.value} : null)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    ) : (
                      <p className="text-gray-800">{user.name}</p>
                    )}
                  </div>

                  {isEditing && (
                    <>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                        <input
                          type="tel"
                          value={editedUser?.phoneNumber || ''}
                          onChange={(e) => setEditedUser(prev => prev ? {...prev, phoneNumber: e.target.value} : null)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="+92 300 1234567"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Department</label>
                        <select
                          value={editedUser?.department || ''}
                          onChange={(e) => setEditedUser(prev => prev ? {...prev, department: e.target.value} : null)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                          <option value="">Select Department</option>
                          <option value="ca">Chartered Accountancy</option>
                          <option value="acca">ACCA</option>
                          <option value="cma">CMA</option>
                          <option value="cfa">CFA</option>
                        </select>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-600 text-sm font-medium">{stat.title}</p>
                      <p className="text-2xl font-bold text-gray-800 mt-1">{stat.value}</p>
                    </div>
                    <div className={`w-12 h-12 rounded-lg bg-gray-50 flex items-center justify-center ${stat.color}`}>
                      <stat.icon className="w-6 h-6" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">Recent Activity</h2>
              
              {bookings.length === 0 && reservations.length === 0 ? (
                <div className="text-center py-8">
                  <Settings className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                  <p className="text-gray-500">No recent activity</p>
                  <p className="text-gray-400 text-sm mt-1">Start booking seats or reserving books!</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {bookings.slice(0, 3).map((booking, index) => (
                    <div key={index} className="flex items-center justify-between py-3 border-b border-gray-100">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                          <Calendar className="w-4 h-4 text-blue-600" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-800">Seat Booking</p>
                          <p className="text-xs text-gray-500">Seat {booking.seatId} on {booking.date}</p>
                        </div>
                      </div>
                      <span className="text-xs text-blue-600 bg-blue-100 px-2 py-1 rounded-full">
                        {booking.status}
                      </span>
                    </div>
                  ))}
                  
                  {reservations.slice(0, 2).map((reservation, index) => (
                    <div key={index} className="flex items-center justify-between py-3 border-b border-gray-100">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center">
                          <BookMarked className="w-4 h-4 text-teal-600" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-800">Book Reservation</p>
                          <p className="text-xs text-gray-500">Reserved on {reservation.reservedAt.split('T')[0]}</p>
                        </div>
                      </div>
                      <span className="text-xs text-teal-600 bg-teal-100 px-2 py-1 rounded-full">
                        {reservation.status}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        );

      case 'subscription':
        return <SubscriptionManagement />;

      case 'loyalty':
        return <LoyaltyProgram />;

      case 'analytics':
        return <StudyAnalytics />;

      case 'settings':
        return (
          <div className="space-y-6">
            {/* Notification Preferences */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                <Bell className="w-5 h-5 mr-2" />
                Notification Preferences
              </h3>
              <div className="space-y-4">
                {[
                  { id: 'booking_reminders', label: 'Booking Reminders', description: 'Get notified before your booking starts' },
                  { id: 'book_due', label: 'Book Due Dates', description: 'Reminders when books are due for return' },
                  { id: 'event_updates', label: 'Event Updates', description: 'Updates about events you\'re registered for' },
                  { id: 'promotional', label: 'Promotional Offers', description: 'Special offers and discounts' },
                  { id: 'system_updates', label: 'System Updates', description: 'Important system announcements' }
                ].map((pref) => (
                  <div key={pref.id} className="flex items-center justify-between">
                    <div>
                      <div className="font-medium text-gray-800">{pref.label}</div>
                      <div className="text-sm text-gray-600">{pref.description}</div>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" defaultChecked />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Privacy Settings */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                <Shield className="w-5 h-5 mr-2" />
                Privacy & Security
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium text-gray-800">Profile Visibility</div>
                    <div className="text-sm text-gray-600">Control who can see your profile information</div>
                  </div>
                  <select className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option>Public</option>
                    <option>Friends Only</option>
                    <option>Private</option>
                  </select>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium text-gray-800">Study Analytics</div>
                    <div className="text-sm text-gray-600">Share anonymous study data to improve recommendations</div>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" defaultChecked />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <button className="text-red-600 hover:text-red-700 font-medium">
                    Change Password
                  </button>
                </div>
              </div>
            </div>

            {/* Data Export */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                <Download className="w-5 h-5 mr-2" />
                Data Export
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Download your data including bookings, reservations, and study analytics.
              </p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Request Data Export
              </button>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-800">My Profile</h1>
        <p className="text-gray-600 mt-1">Manage your account and view your activity</p>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="flex overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-6 py-4 font-medium text-sm whitespace-nowrap border-b-2 transition-colors ${
                activeTab === tab.id
                  ? 'border-blue-500 text-blue-600 bg-blue-50'
                  : 'border-transparent text-gray-600 hover:text-blue-600 hover:bg-gray-50'
              }`}
            >
              <tab.icon className="w-4 h-4" />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="min-h-96">
        {renderTabContent()}
      </div>
    </div>
  );
};

export default ProfilePage;