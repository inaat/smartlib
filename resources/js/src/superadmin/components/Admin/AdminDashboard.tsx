import React from 'react';
import { useAuth } from '@/shared/contexts/AuthContext';
import AdminOverview from './AdminOverview';
import SuperAdminOverview from './SuperAdminOverview';

const AdminDashboard: React.FC = () => {
  const { user } = useAuth();

  // Only super_admin can access this dashboard
  if (!user || user.role !== 'super_admin') {
    return (
      <div className="text-center py-12">
        <div className="text-xl font-semibold text-gray-800">Access Denied</div>
        <p className="text-gray-600">Super Administrator access required.</p>
      </div>
    );
  }

  return <SuperAdminOverview />;
};

export default AdminDashboard;