import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, BookOpen, Calendar, User } from 'lucide-react';

const QuickActions: React.FC = () => {
  const actions = [
    {
      title: 'Find Library',
      description: 'Locate nearby libraries',
      icon: MapPin,
      link: '/libraries',
      color: 'bg-blue-500 hover:bg-blue-600'
    },
    {
      title: 'Browse Books',
      description: 'Search for books',
      icon: BookOpen,
      link: '/books',
      color: 'bg-teal-500 hover:bg-teal-600'
    },
    {
      title: 'View Events',
      description: 'Check upcoming events',
      icon: Calendar,
      link: '/events',
      color: 'bg-orange-500 hover:bg-orange-600'
    },
    {
      title: 'My Profile',
      description: 'Manage your account',
      icon: User,
      link: '/profile',
      color: 'bg-green-500 hover:bg-green-600'
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Quick Actions</h2>
      <div className="grid grid-cols-2 gap-3">
        {actions.map((action, index) => (
          <Link
            key={index}
            to={action.link}
            className="group block"
          >
            <div className="p-4 rounded-lg border border-gray-200 hover:border-gray-300 transition-colors group-hover:shadow-sm">
              <div className={`w-8 h-8 rounded-lg ${action.color} flex items-center justify-center mb-2 transition-colors`}>
                <action.icon className="w-4 h-4 text-white" />
              </div>
              <h3 className="font-medium text-gray-800 text-sm">{action.title}</h3>
              <p className="text-xs text-gray-500 mt-1">{action.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;