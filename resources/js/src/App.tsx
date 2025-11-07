import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { AppProvider } from './contexts/AppContext';
import Layout from './components/Layout/Layout';
import AdminLayout from './components/Layout/AdminLayout';
import LoginForm from './components/Auth/LoginForm';
import RegisterForm from './components/Auth/RegisterForm';
import Dashboard from './components/Dashboard/Dashboard';
import LibrariesPage from './components/Libraries/LibrariesPage';
import SeatBookingPage from './components/Seats/SeatBookingPage';
import BooksPage from './components/Books/BooksPage';
import EventsPage from './components/Events/EventsPage';
import ProfilePage from './components/Profile/ProfilePage';
import AdminDashboard from './components/Admin/AdminDashboard';
import UserManagement from './components/Admin/UserManagement';
import LibraryManagement from './components/Admin/LibraryManagement';
import LibraryDetails from './components/Admin/LibraryDetails';
import BookManagement from './components/Admin/BookManagement';
import BookingManagement from './components/Admin/BookingManagement';
import AnalyticsView from './components/Admin/AnalyticsView';
import SuperAdminSettings from './components/Admin/SuperAdminSettings';
import QRCheckInPage from './components/QR/QRCheckInPage';

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (!user.isApproved) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto p-6">
          <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Account Pending Approval</h2>
          <p className="text-gray-600 mb-4">
            Your account is waiting for admin approval. You'll receive an email once approved.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Check Status
          </button>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};

const StudentRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user } = useAuth();

  if (!user || user.role !== 'student') {
    return <Navigate to="/admin" replace />;
  }

  return <>{children}</>;
};

const AdminRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user } = useAuth();

  if (!user || (user.role !== 'admin' && user.role !== 'super_admin' && user.role !== 'librarian')) {
    return <Navigate to="/dashboard" replace />;
  }

  return <>{children}</>;
};

const AppRoutes: React.FC = () => {
  const { user } = useAuth();

  // Redirect based on user role after login
  const getDefaultRoute = () => {
    if (!user) return '/login';
    if (user.role === 'admin' || user.role === 'super_admin' || user.role === 'librarian') return '/admin';
    return '/dashboard';
  };

  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route 
          path="/login" 
          element={user ? <Navigate to={getDefaultRoute()} replace /> : <LoginForm />} 
        />
        <Route 
          path="/register" 
          element={user ? <Navigate to={getDefaultRoute()} replace /> : <RegisterForm />} 
        />

        {/* Student Routes */}
        <Route 
          path="/dashboard" 
          element={
            <ProtectedRoute>
              <StudentRoute>
                <Layout>
                  <Dashboard />
                </Layout>
              </StudentRoute>
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/libraries" 
          element={
            <ProtectedRoute>
              <StudentRoute>
                <Layout>
                  <LibrariesPage />
                </Layout>
              </StudentRoute>
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/libraries/:libraryId/seats" 
          element={
            <ProtectedRoute>
              <StudentRoute>
                <Layout>
                  <SeatBookingPage />
                </Layout>
              </StudentRoute>
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/books" 
          element={
            <ProtectedRoute>
              <StudentRoute>
                <Layout>
                  <BooksPage />
                </Layout>
              </StudentRoute>
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/events" 
          element={
            <ProtectedRoute>
              <StudentRoute>
                <Layout>
                  <EventsPage />
                </Layout>
              </StudentRoute>
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/profile" 
          element={
            <ProtectedRoute>
              <StudentRoute>
                <Layout>
                  <ProfilePage />
                </Layout>
              </StudentRoute>
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/qr-checkin" 
          element={
            <ProtectedRoute>
              <StudentRoute>
                <Layout>
                  <QRCheckInPage />
                </Layout>
              </StudentRoute>
            </ProtectedRoute>
          } 
        />

        {/* Admin Routes */}
        <Route 
          path="/admin" 
          element={
            <ProtectedRoute>
              <AdminRoute>
                <AdminLayout>
                  <AdminDashboard />
                </AdminLayout>
              </AdminRoute>
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/admin/users" 
          element={
            <ProtectedRoute>
              <AdminRoute>
                <AdminLayout>
                  <UserManagement />
                </AdminLayout>
              </AdminRoute>
            </ProtectedRoute>
          } 
        />
        <Route
          path="/admin/libraries"
          element={
            <ProtectedRoute>
              <AdminRoute>
                <AdminLayout>
                  <LibraryManagement />
                </AdminLayout>
              </AdminRoute>
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/libraries/:id"
          element={
            <ProtectedRoute>
              <AdminRoute>
                <AdminLayout>
                  <LibraryDetails />
                </AdminLayout>
              </AdminRoute>
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/books" 
          element={
            <ProtectedRoute>
              <AdminRoute>
                <AdminLayout>
                  <BookManagement />
                </AdminLayout>
              </AdminRoute>
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/admin/bookings" 
          element={
            <ProtectedRoute>
              <AdminRoute>
                <AdminLayout>
                  <BookingManagement />
                </AdminLayout>
              </AdminRoute>
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/admin/analytics" 
          element={
            <ProtectedRoute>
              <AdminRoute>
                <AdminLayout>
                  <AnalyticsView />
                </AdminLayout>
              </AdminRoute>
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/admin/settings" 
          element={
            <ProtectedRoute>
              <AdminRoute>
                <AdminLayout>
                  <SuperAdminSettings />
                </AdminLayout>
              </AdminRoute>
            </ProtectedRoute>
          } 
        />

        {/* Default Route */}
        <Route path="/" element={<Navigate to={getDefaultRoute()} replace />} />
        
        {/* Catch all route */}
        <Route path="*" element={<Navigate to={getDefaultRoute()} replace />} />
      </Routes>
    </Router>
  );
};

function App() {
  return (
    <AuthProvider>
      <AppProvider>
        <AppRoutes />
      </AppProvider>
    </AuthProvider>
  );
}

export default App;