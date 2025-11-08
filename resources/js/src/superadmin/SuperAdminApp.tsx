import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from '@/shared/contexts/AuthContext';
import AdminLayout from '@/superadmin/components/AdminLayout';
import AdminDashboard from '@/superadmin/components/Admin/AdminDashboard';
import UserManagement from '@/superadmin/components/Admin/UserManagement';
import LibraryManagement from '@/superadmin/components/Admin/LibraryManagement';
import LibraryDetails from '@/superadmin/components/Admin/LibraryDetails';
import BookManagement from '@/superadmin/components/Admin/BookManagement';
import BookingManagement from '@/superadmin/components/Admin/BookingManagement';
import AnalyticsView from '@/superadmin/components/Admin/AnalyticsView';
import SuperAdminSettings from '@/superadmin/components/Admin/SuperAdminSettings';
import SubscriptionPlans from '@/superadmin/components/Admin/SubscriptionPlans';

const SuperAdminRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user } = useAuth();

  if (!user || (user.role !== 'super_admin')) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};

const SuperAdminApp: React.FC = () => {
  return (
    <Routes>
        <Route
          path="/"
          element={
            <SuperAdminRoute>
              <AdminLayout>
                <AdminDashboard />
              </AdminLayout>
            </SuperAdminRoute>
          }
        />
        <Route
          path="/users"
          element={
            <SuperAdminRoute>
              <AdminLayout>
                <UserManagement />
              </AdminLayout>
            </SuperAdminRoute>
          }
        />
        <Route
          path="/libraries"
          element={
            <SuperAdminRoute>
              <AdminLayout>
                <LibraryManagement />
              </AdminLayout>
            </SuperAdminRoute>
          }
        />
        <Route
          path="/libraries/:id"
          element={
            <SuperAdminRoute>
              <AdminLayout>
                <LibraryDetails />
              </AdminLayout>
            </SuperAdminRoute>
          }
        />
        <Route
          path="/books"
          element={
            <SuperAdminRoute>
              <AdminLayout>
                <BookManagement />
              </AdminLayout>
            </SuperAdminRoute>
          }
        />
        <Route
          path="/subscription-plans"
          element={
            <SuperAdminRoute>
              <AdminLayout>
                <SubscriptionPlans />
              </AdminLayout>
            </SuperAdminRoute>
          }
        />
        <Route
          path="/bookings"
          element={
            <SuperAdminRoute>
              <AdminLayout>
                <BookingManagement />
              </AdminLayout>
            </SuperAdminRoute>
          }
        />
        <Route
          path="/analytics"
          element={
            <SuperAdminRoute>
              <AdminLayout>
                <AnalyticsView />
              </AdminLayout>
            </SuperAdminRoute>
          }
        />
        <Route
          path="/settings"
          element={
            <SuperAdminRoute>
              <AdminLayout>
                <SuperAdminSettings />
              </AdminLayout>
            </SuperAdminRoute>
          }
        />
        <Route path="*" element={<Navigate to="/superadmin" replace />} />
      </Routes>
  );
};

export default SuperAdminApp;
