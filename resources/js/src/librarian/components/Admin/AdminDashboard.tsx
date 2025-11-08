import React from 'react';
import { useAuth } from '@/shared/contexts/AuthContext';
import AdminOverview from './AdminOverview';
import SuperAdminOverview from './SuperAdminOverview';

const AdminDashboard: React.FC = () => {
  const { user } = useAuth();

  // Only librarian can access this dashboard
  if (!user || user.role !== 'librarian') {
    return (
      <div className="text-center py-12">
        <div className="text-xl font-semibold text-gray-800">Access Denied</div>
        <p className="text-gray-600">Librarian access required.</p>
      </div>
    );
  }

  return <AdminOverview />;
};

export default AdminDashboard;