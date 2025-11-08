import React from 'react';
import { useAuth } from '@/shared/contexts/AuthContext';
import { useApp } from '@/shared/contexts/AppContext';
import StatsCard from './StatsCard';
import RecommendationSlider from './RecommendationSlider';
import UpcomingBookings from './UpcomingBookings';
import QuickActions from './QuickActions';
import { 
  BookMarked, 
  Calendar, 
  MapPin, 
  Award,
  Clock,
  Users,
  TrendingUp
} from 'lucide-react';

const Dashboard: React.FC = () => {
  const { user } = useAuth();
  const { bookings, reservations, libraries, books, events, generateAIRecommendations } = useApp();

  const stats = [
    {
      title: 'Total Bookings',
      value: bookings.length.toString(),
      icon: Calendar,
      color: 'blue',
      subtitle: 'This month'
    },
    {
      title: 'Reserved Books',
      value: reservations.length.toString(),
      icon: BookMarked,
      color: 'teal',
      subtitle: 'Active reservations'
    },
    {
      title: 'Loyalty Points',
      value: user?.loyaltyPoints.toString() || '0',
      icon: Award,
      color: 'orange',
      subtitle: 'Earned points'
    },
    {
      title: 'Available Libraries',
      value: libraries.length.toString(),
      icon: MapPin,
      color: 'green',
      subtitle: 'In your area'
    }
  ];

  // Generate AI recommendations based on user data
  const aiRecommendations = user?.id ? generateAIRecommendations(user.id) : [];

  // Convert AI recommendations to the format expected by RecommendationSlider
  const recommendations = aiRecommendations.slice(0, 3).map(rec => {
    if (rec.type === 'time_slot') {
      return {
        type: 'seat',
        title: rec.title,
        description: rec.description,
        action: 'Book Now',
        time: rec.data?.recommendedTime || '',
        location: rec.data?.libraryName || 'ICAP Library'
      };
    } else if (rec.type === 'book') {
      return {
        type: 'book',
        title: rec.title,
        description: rec.description,
        action: 'Reserve',
        author: rec.data?.author || 'Unknown'
      };
    } else {
      return {
        type: 'event',
        title: rec.title,
        description: rec.description,
        action: 'Register',
        date: rec.data?.date || ''
      };
    }
  });

  // If no AI recommendations, show default recommendations with real data
  if (recommendations.length === 0) {
    const defaultRecs: any[] = [];

    // Add available book recommendation
    if (books.length > 0) {
      const latestBook = books[0];
      defaultRecs.push({
        type: 'book',
        title: 'New Book Available',
        description: `${latestBook.title} is now available for pickup.`,
        action: 'Reserve',
        author: latestBook.author || 'Unknown Author'
      });
    }

    // Add upcoming event recommendation
    if (events.length > 0) {
      const upcomingEvent = events[0];
      defaultRecs.push({
        type: 'event',
        title: upcomingEvent.name || 'Upcoming Event',
        description: upcomingEvent.description || 'Join us for this event.',
        action: 'Register',
        date: new Date(upcomingEvent.date).toLocaleDateString()
      });
    }

    // Add library recommendation
    if (libraries.length > 0) {
      defaultRecs.push({
        type: 'seat',
        title: 'Book a Study Seat',
        description: `Visit ${libraries[0].name} and secure your spot for productive studying.`,
        action: 'Book Now',
        location: libraries[0].name
      });
    }

    recommendations.push(...defaultRecs);
  }

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-blue-600 to-teal-600 rounded-xl text-white p-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Welcome back, {user?.name}!</h1>
            <p className="text-blue-100 mt-1">
              {user?.role === 'student' ? 'Ready to continue your studies?' : 'Manage your library efficiently'}
            </p>
          </div>
          <div className="text-right">
            <div className="text-sm text-blue-100">Your Plan</div>
            <div className="text-lg font-semibold capitalize">
              {user?.subscriptionPlan?.replace('_', ' ')}
            </div>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <StatsCard key={index} {...stat} />
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* AI Recommendations */}
        <div className="lg:col-span-2 space-y-4">
          <RecommendationSlider recommendations={recommendations} />
        </div>

        {/* Quick Actions & Upcoming */}
        <div className="space-y-6">
          <QuickActions />
          <UpcomingBookings />
        </div>
      </div>

      {/* Activity Feed */}
      {user?.role === 'admin' && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
            <Users className="w-5 h-5 mr-2 text-blue-600" />
            Recent Activity
          </h2>
          <div className="space-y-3">
            <div className="flex items-center justify-between py-3 border-b border-gray-100">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <Clock className="w-4 h-4 text-green-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-800">New seat booking</p>
                  <p className="text-xs text-gray-500">Ahmad Hassan booked seat A03</p>
                </div>
              </div>
              <span className="text-xs text-gray-400">2 mins ago</span>
            </div>
            <div className="flex items-center justify-between py-3 border-b border-gray-100">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <BookMarked className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-800">Book reserved</p>
                  <p className="text-xs text-gray-500">Fatima Ali reserved Corporate Finance</p>
                </div>
              </div>
              <span className="text-xs text-gray-400">15 mins ago</span>
            </div>
            <div className="flex items-center justify-between py-3">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                  <Calendar className="w-4 h-4 text-orange-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-800">Event registration</p>
                  <p className="text-xs text-gray-500">New registration for CA Workshop</p>
                </div>
              </div>
              <span className="text-xs text-gray-400">1 hour ago</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;