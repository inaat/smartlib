import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import AdminOverview from './AdminOverview';
import SuperAdminOverview from './SuperAdminOverview';

const AdminDashboard: React.FC = () => {
  const { user } = useAuth();

  if (!user || (user.role !== 'admin' && user.role !== 'super_admin' && user.role !== 'librarian')) {
    return (
      <div className="text-center py-12">
        <div className="text-xl font-semibold text-gray-800">Access Denied</div>
        <p className="text-gray-600">You don't have permission to access this page.</p>
      </div>
    );
  }

  // Render different dashboards based on role
  if (user.role === 'super_admin') {
    return <SuperAdminOverview />;
  }

  // Both admin and librarian use the same AdminOverview
  return <AdminOverview />;
};

export default AdminDashboard;