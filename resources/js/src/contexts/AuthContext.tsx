import React, { createContext, useContext, useState, useEffect } from 'react';
import { User, Notification } from '../types';
import { authAPI, studentAPI } from '../services/api';

interface AuthContextType {
  user: User | null;
  login: (crn: string, password: string) => Promise<boolean>;
  register: (userData: Partial<User> & { password: string }) => Promise<boolean>;
  logout: () => void;
  isLoading: boolean;
  updateUser: (userData: Partial<User>) => void;
  notifications: Notification[];
  markNotificationAsRead: (notificationId: string) => void;
  unreadCount: number;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [notifications, setNotifications] = useState<Notification[]>([]);

  useEffect(() => {
    // Check for stored auth token and get current user
    const checkAuth = async () => {
      const token = localStorage.getItem('auth_token');
      if (token) {
        try {
          const userData = await authAPI.getCurrentUser();
          setUser(userData);
          await loadNotifications(userData);
        } catch (error) {
          console.error('Failed to load user:', error);
          localStorage.removeItem('auth_token');
          localStorage.removeItem('smart-lib-user');
        }
      }
      setIsLoading(false);
    };

    checkAuth();
  }, []);

  const loadNotifications = async (userData?: User) => {
    try {
      // Only load notifications for students
      const userRole = userData?.role || userData?.user_type;
      if (userRole === 'student') {
        const notifs = await studentAPI.getNotifications();
        setNotifications(notifs);
      } else {
        setNotifications([]);
      }
    } catch (error) {
      console.error('Failed to load notifications:', error);
      // Fallback to empty array if API fails
      setNotifications([]);
    }
  };

  const login = async (crn: string, password: string): Promise<boolean> => {
    setIsLoading(true);
    try {
      const response = await authAPI.login(crn, password);
      setUser(response.user);
      localStorage.setItem('smart-lib-user', JSON.stringify(response.user));
      await loadNotifications(response.user);
      return true;
    } catch (error) {
      console.error('Login failed:', error);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (userData: Partial<User> & { password: string }): Promise<boolean> => {
    setIsLoading(true);
    try {
      const response = await authAPI.register(userData);
      setUser(response.user);
      localStorage.setItem('smart-lib-user', JSON.stringify(response.user));
      await loadNotifications(response.user);
      return true;
    } catch (error) {
      console.error('Registration failed:', error);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const updateUser = async (userData: Partial<User>) => {
    if (user) {
      try {
        const updatedUser = await studentAPI.updateProfile(userData);
        setUser(updatedUser);
        localStorage.setItem('smart-lib-user', JSON.stringify(updatedUser));
      } catch (error) {
        console.error('Failed to update user:', error);
      }
    }
  };

  const markNotificationAsRead = async (notificationId: string) => {
    try {
      await studentAPI.markNotificationRead(notificationId);
      setNotifications(prev =>
        prev.map(notif =>
          notif.id === notificationId ? { ...notif, isRead: true } : notif
        )
      );
    } catch (error) {
      console.error('Failed to mark notification as read:', error);
    }
  };

  const logout = async () => {
    try {
      await authAPI.logout();
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      setUser(null);
      setNotifications([]);
      localStorage.removeItem('smart-lib-user');
    }
  };

  const unreadCount = notifications.filter(n => !n.isRead).length;

  return (
    <AuthContext.Provider value={{ 
      user, 
      login, 
      register, 
      logout, 
      isLoading, 
      updateUser,
      notifications,
      markNotificationAsRead,
      unreadCount
    }}>
      {children}
    </AuthContext.Provider>
  );
};