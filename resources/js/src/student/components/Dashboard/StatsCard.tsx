import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface StatsCardProps {
  title: string;
  value: string;
  icon: LucideIcon;
  color: 'blue' | 'teal' | 'orange' | 'green';
  subtitle?: string;
}

const StatsCard: React.FC<StatsCardProps> = ({ title, value, icon: Icon, color, subtitle }) => {
  const colorClasses = {
    blue: 'bg-blue-500 text-white',
    teal: 'bg-teal-500 text-white',
    orange: 'bg-orange-500 text-white',
    green: 'bg-green-500 text-white'
  };

  const bgColorClasses = {
    blue: 'bg-blue-50',
    teal: 'bg-teal-50',
    orange: 'bg-orange-50',
    green: 'bg-green-50'
  };

  return (
    <div className={`${bgColorClasses[color]} rounded-xl p-6 border border-gray-200`}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-600 text-sm font-medium">{title}</p>
          <p className="text-2xl font-bold text-gray-800 mt-1">{value}</p>
          {subtitle && (
            <p className="text-gray-500 text-xs mt-1">{subtitle}</p>
          )}
        </div>
        <div className={`w-12 h-12 rounded-lg ${colorClasses[color]} flex items-center justify-center`}>
          <Icon className="w-6 h-6" />
        </div>
      </div>
    </div>
  );
};

export default StatsCard;