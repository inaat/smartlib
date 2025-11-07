import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { 
  BookOpen, 
  Home, 
  Users, 
  MapPin,
  Calendar,
  BarChart3,
  Settings,
  LogOut,
  Shield,
  Crown,
  X,
  ChevronRight,
  Bell,
  CreditCard,
  Database,
  UserCheck,
  FileText,
  Zap
} from 'lucide-react';

interface AdminSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const AdminSidebar: React.FC<AdminSidebarProps> = ({ isOpen, onClose }) => {
  const { user, logout } = useAuth();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path || location.pathname.startsWith(path + '/');

  const adminNavItems = [
    { path: '/admin', label: 'Dashboard', icon: Home, exact: true },
    { path: '/admin/users', label: 'User Management', icon: Users },
    { path: '/admin/libraries', label: 'Library Management', icon: MapPin },
    { path: '/admin/books', label: 'Book Management', icon: BookOpen },
    { path: '/admin/bookings', label: 'Booking Management', icon: Calendar },
    { path: '/admin/analytics', label: 'Analytics & Reports', icon: BarChart3 },
  ];

  const superAdminNavItems = [
    { path: '/admin', label: 'Super Dashboard', icon: Home, exact: true },
    { path: '/admin/system', label: 'System Overview', icon: Database },
    { path: '/admin/users', label: 'User Management', icon: Users },
    { path: '/admin/admins', label: 'Admin Management', icon: UserCheck },
    { path: '/admin/libraries', label: 'Library Network', icon: MapPin },
    { path: '/admin/books', label: 'Content Management', icon: BookOpen },
    { path: '/admin/subscriptions', label: 'Subscriptions', icon: CreditCard },
    { path: '/admin/analytics', label: 'Global Analytics', icon: BarChart3 },
    { path: '/admin/reports', label: 'System Reports', icon: FileText },
    { path: '/admin/integrations', label: 'Integrations', icon: Zap },
    { path: '/admin/settings', label: 'System Settings', icon: Settings },
  ];

  const navItems = user?.role === 'super_admin' ? superAdminNavItems : adminNavItems;

  const getRoleInfo = () => {
    if (user?.role === 'super_admin') {
      return {
        title: 'Super Administrator',
        subtitle: 'System-wide access',
        icon: Crown,
        bgColor: 'bg-gradient-to-r from-purple-600 to-blue-600',
        iconColor: 'text-yellow-300'
      };
    }
    return {
      title: 'Library Administrator',
      subtitle: 'Library management',
      icon: Shield,
      bgColor: 'bg-gradient-to-r from-blue-600 to-teal-600',
      iconColor: 'text-blue-300'
    };
  };

  const roleInfo = getRoleInfo();

  return (
    <>
      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-xl transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0 ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        
        {/* Header */}
        <div className={`${roleInfo.bgColor} text-white p-6 relative`}>
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
              <p className="text-xs opacity-90">Admin Panel</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <div className={`w-8 h-8 rounded-full bg-white bg-opacity-20 flex items-center justify-center ${roleInfo.iconColor}`}>
              <roleInfo.icon className="w-5 h-5" />
            </div>
            <div>
              <div className="font-medium text-sm">{user?.name}</div>
              <div className="text-xs opacity-90">{roleInfo.title}</div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-6 space-y-2">
          {navItems.map((item) => {
            const active = item.exact ? location.pathname === item.path : isActive(item.path);
            
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={onClose}
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 group ${
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
            className="w-full flex items-center space-x-2 px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
          >
            <LogOut className="w-4 h-4" />
            <span className="text-sm font-medium">Sign Out</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default AdminSidebar;