import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from '@/shared/contexts/AuthContext';
import Layout from '@/student/components/Layout';
import Dashboard from '@/student/components/Dashboard/Dashboard';
import LibrariesPage from '@/student/components/Libraries/LibrariesPage';
import SeatBookingPage from '@/student/components/Seats/SeatBookingPage';
import BooksPage from '@/student/components/Books/BooksPage';
import EventsPage from '@/student/components/Events/EventsPage';
import ProfilePage from '@/student/components/Profile/ProfilePage';
import QRCheckInPage from '@/student/components/QR/QRCheckInPage';

const StudentRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user } = useAuth();

  if (!user || user.role !== 'student') {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};

const StudentApp: React.FC = () => {
  return (
    <Routes>
        <Route
          path="/dashboard"
          element={
            <StudentRoute>
              <Layout>
                <Dashboard />
              </Layout>
            </StudentRoute>
          }
        />
        <Route
          path="/libraries"
          element={
            <StudentRoute>
              <Layout>
                <LibrariesPage />
              </Layout>
            </StudentRoute>
          }
        />
        <Route
          path="/libraries/:libraryId/seats"
          element={
            <StudentRoute>
              <Layout>
                <SeatBookingPage />
              </Layout>
            </StudentRoute>
          }
        />
        <Route
          path="/books"
          element={
            <StudentRoute>
              <Layout>
                <BooksPage />
              </Layout>
            </StudentRoute>
          }
        />
        <Route
          path="/events"
          element={
            <StudentRoute>
              <Layout>
                <EventsPage />
              </Layout>
            </StudentRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <StudentRoute>
              <Layout>
                <ProfilePage />
              </Layout>
            </StudentRoute>
          }
        />
        <Route
          path="/qr-checkin"
          element={
            <StudentRoute>
              <Layout>
                <QRCheckInPage />
              </Layout>
            </StudentRoute>
          }
        />
        <Route path="/" element={<Navigate to="/student/dashboard" replace />} />
        <Route path="*" element={<Navigate to="/student/dashboard" replace />} />
      </Routes>
  );
};

export default StudentApp;
