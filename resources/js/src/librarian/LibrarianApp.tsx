import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from '@/shared/contexts/AuthContext';
import AdminLayout from '@/librarian/components/AdminLayout';
import AdminDashboard from '@/librarian/components/Admin/AdminDashboard';
import UserManagement from '@/librarian/components/Admin/UserManagement';
import LibraryManagement from '@/librarian/components/Admin/LibraryManagement';
import LibraryDetails from '@/librarian/components/Admin/LibraryDetails';
import BookManagement from '@/librarian/components/Admin/BookManagement';
import SeatManagement from '@/librarian/components/Admin/SeatManagement';
import EventManagement from '@/librarian/components/Admin/EventManagement';
import BookingManagement from '@/librarian/components/Admin/BookingManagement';
import AnalyticsView from '@/librarian/components/Admin/AnalyticsView';

const LibrarianRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user } = useAuth();

  if (!user || user.role !== 'librarian') {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};

const LibrarianApp: React.FC = () => {
  return (
    <Routes>
        <Route
          path="/"
          element={
            <LibrarianRoute>
              <AdminLayout>
                <AdminDashboard />
              </AdminLayout>
            </LibrarianRoute>
          }
        />
        <Route
          path="/users"
          element={
            <LibrarianRoute>
              <AdminLayout>
                <UserManagement />
              </AdminLayout>
            </LibrarianRoute>
          }
        />
        <Route
          path="/libraries"
          element={
            <LibrarianRoute>
              <AdminLayout>
                <LibraryManagement />
              </AdminLayout>
            </LibrarianRoute>
          }
        />
        <Route
          path="/libraries/:id"
          element={
            <LibrarianRoute>
              <AdminLayout>
                <LibraryDetails />
              </AdminLayout>
            </LibrarianRoute>
          }
        />
        <Route
          path="/books"
          element={
            <LibrarianRoute>
              <AdminLayout>
                <BookManagement />
              </AdminLayout>
            </LibrarianRoute>
          }
        />
        <Route
          path="/seats"
          element={
            <LibrarianRoute>
              <AdminLayout>
                <SeatManagement />
              </AdminLayout>
            </LibrarianRoute>
          }
        />
        <Route
          path="/events"
          element={
            <LibrarianRoute>
              <AdminLayout>
                <EventManagement />
              </AdminLayout>
            </LibrarianRoute>
          }
        />
        <Route
          path="/bookings"
          element={
            <LibrarianRoute>
              <AdminLayout>
                <BookingManagement />
              </AdminLayout>
            </LibrarianRoute>
          }
        />
        <Route
          path="/analytics"
          element={
            <LibrarianRoute>
              <AdminLayout>
                <AnalyticsView />
              </AdminLayout>
            </LibrarianRoute>
          }
        />
        <Route path="*" element={<Navigate to="/librarian" replace />} />
      </Routes>
  );
};

export default LibrarianApp;
