import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '@/shared/contexts/AuthContext';
import { 
  BookOpen, 
  Home, 
  MapPin,
  Calendar,
  QrCode,
  User,
  LogOut,
  X,
  ChevronRight,
  Bell,
  CreditCard,
  Award,
  BarChart3,
  Gift
} from 'lucide-react';

interface StudentSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const StudentSidebar: React.FC<StudentSidebarProps> = ({ isOpen, onClose }) => {
  const { user, logout } = useAuth();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path || location.pathname.startsWith(path + '/');

  const mainNavItems = [
    { path: '/student/dashboard', label: 'Dashboard', icon: Home, exact: true },
    { path: '/student/libraries', label: 'Find Libraries', icon: MapPin },
    { path: '/student/books', label: 'Browse Books', icon: BookOpen },
    { path: '/student/events', label: 'Events & Seminars', icon: Calendar },
    { path: '/student/qr-checkin', label: 'QR Check-In', icon: QrCode },
    { path: '/student/profile', label: 'My Profile', icon: User },
  ];

  const quickAccessItems = [
    { path: '/student/profile?tab=subscription', label: 'Subscription', icon: CreditCard },
    { path: '/student/profile?tab=loyalty', label: 'Loyalty Points', icon: Gift },
    { path: '/student/profile?tab=analytics', label: 'Study Analytics', icon: BarChart3 },
  ];

  return (
    <>
      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-xl transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0 ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-teal-600 text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white hover:bg-white hover:bg-opacity-20 rounded-lg p-1 lg:hidden"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-lg font-bold">Smart Lib</h1>
              <p className="text-xs opacity-90">Student Portal</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-full bg-white bg-opacity-20 flex items-center justify-center">
              <User className="w-5 h-5 text-blue-300" />
            </div>
            <div>
              <div className="font-medium text-sm">{user?.name}</div>
              <div className="text-xs opacity-90">Student</div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-6 space-y-6">
          {/* Main Navigation */}
          <div>
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 px-3">
              Main Menu
            </h3>
            <div className="space-y-1">
              {mainNavItems.map((item) => {
                const active = item.exact ? location.pathname === item.path : isActive(item.path);
                
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={onClose}
                    className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-all duration-200 group ${
                      active
                        ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-600'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-blue-600'
                    }`}
                  >
                    <item.icon className={`w-5 h-5 ${active ? 'text-blue-600' : 'text-gray-400 group-hover:text-blue-500'}`} />
                    <span className="font-medium text-sm">{item.label}</span>
                    {active && <ChevronRight className="w-4 h-4 ml-auto text-blue-600" />}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Quick Access */}
          <div>
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 px-3">
              Quick Access
            </h3>
            <div className="space-y-1">
              {quickAccessItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={onClose}
                  className="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-50 hover:text-blue-600 transition-all duration-200 group"
                >
                  <item.icon className="w-4 h-4 text-gray-400 group-hover:text-blue-500" />
                  <span className="font-medium text-sm">{item.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </nav>

        {/* Footer */}
        <div className="border-t border-gray-200 p-4">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-2">
              <Bell className="w-4 h-4 text-gray-400" />
              <span className="text-sm text-gray-600">Notifications</span>
            </div>
            <span className="bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">3</span>
          </div>
          
          <button
            onClick={logout}
            className="w-full flex items-center space-x-2 px-3 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
          >
            <LogOut className="w-4 h-4" />
            <span className="text-sm font-medium">Sign Out</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default StudentSidebar;