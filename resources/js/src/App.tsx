import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from '@/shared/contexts/AuthContext';
import { AppProvider } from '@/shared/contexts/AppContext';
import LoginForm from '@/shared/components/Auth/LoginForm';
import RegisterForm from '@/shared/components/Auth/RegisterForm';
import StudentApp from '@/student/StudentApp';
import LibrarianApp from '@/librarian/LibrarianApp';
import SuperAdminApp from '@/superadmin/SuperAdminApp';

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

const AppRoutes: React.FC = () => {
  const { user } = useAuth();

  // Redirect based on user role after login
  const getDefaultRoute = () => {
    if (!user) return '/login';
    if (user.role === 'super_admin') return '/superadmin';
    if (user.role === 'librarian') return '/librarian';
    return '/student/dashboard';
  };

  return (
    <Router>
      <Routes>
        {/* ========== PUBLIC ROUTES ========== */}
        <Route
          path="/login"
          element={user ? <Navigate to={getDefaultRoute()} replace /> : <LoginForm />}
        />
        <Route
          path="/register"
          element={user ? <Navigate to={getDefaultRoute()} replace /> : <RegisterForm />}
        />

        {/* ========== STUDENT ROUTES ========== */}
        <Route
          path="/student/*"
          element={
            <ProtectedRoute>
              <StudentApp />
            </ProtectedRoute>
          }
        />

        {/* ========== LIBRARIAN ROUTES ========== */}
        <Route
          path="/librarian/*"
          element={
            <ProtectedRoute>
              <LibrarianApp />
            </ProtectedRoute>
          }
        />

        {/* ========== SUPER ADMIN ROUTES ========== */}
        <Route
          path="/superadmin/*"
          element={
            <ProtectedRoute>
              <SuperAdminApp />
            </ProtectedRoute>
          }
        />

        {/* ========== DEFAULT & FALLBACK ========== */}
        <Route path="/" element={<Navigate to={getDefaultRoute()} replace />} />
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
