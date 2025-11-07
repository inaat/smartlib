import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { useApp } from '../../contexts/AppContext';
import {
  CreditCard,
  Check,
  Star,
  Calendar,
  DollarSign,
  Gift,
  Crown,
  Zap
} from 'lucide-react';

interface SubscriptionPlan {
  id: string;
  name: string;
  price: number;
  duration: string;
  features: string[];
  bookingLimit: number;
  popular?: boolean;
  recommended?: boolean;
}

const SubscriptionManagement: React.FC = () => {
  const { user } = useAuth();
  const { bookings } = useApp();
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [isUpgrading, setIsUpgrading] = useState(false);

  // Define plans first (before using them)
  const plans: SubscriptionPlan[] = [
    {
      id: 'free',
      name: 'Free Plan',
      price: 0,
      duration: 'Forever',
      features: [
        '5 seat bookings per month',
        'Basic book search',
        'Event notifications',
        'Standard support'
      ],
      bookingLimit: 5
    },
    {
      id: 'premium_monthly',
      name: 'Premium Monthly',
      price: 500,
      duration: 'Per Month',
      features: [
        '30 seat bookings per month',
        'Priority booking',
        'Digital book access',
        'Event early registration',
        'Priority support',
        'Study analytics'
      ],
      bookingLimit: 30,
      popular: true
    },
    {
      id: 'premium_6month',
      name: 'Premium 6-Month',
      price: 2500,
      duration: '6 Months',
      features: [
        'Unlimited seat bookings',
        'Premium seat access',
        'Full digital library',
        'Exclusive events',
        '24/7 priority support',
        'Advanced analytics',
        'Personal study assistant',
        'Offline book downloads'
      ],
      bookingLimit: -1,
      recommended: true
    },
    {
      id: 'student_annual',
      name: 'Student Annual',
      price: 4000,
      duration: '12 Months',
      features: [
        'Everything in 6-Month plan',
        'Exam preparation materials',
        'One-on-one mentoring sessions',
        'Career guidance workshops',
        'Industry networking events',
        'Certification courses',
        'Resume building tools'
      ],
      bookingLimit: -1
    }
  ];

  // Calculate real usage statistics (needs to come AFTER plans definition)
  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();

  const userBookings = bookings.filter(b => b.userId === user?.id);
  const monthlyBookings = userBookings.filter(b => {
    const bookingDate = new Date(b.date);
    return bookingDate.getMonth() === currentMonth && bookingDate.getFullYear() === currentYear;
  });

  const completedBookings = userBookings.filter(b => b.status === 'completed');

  // Calculate study hours from completed bookings
  const calculateStudyHours = (booking: any) => {
    if (!booking.startTime || !booking.endTime) return 0;
    const start = new Date(`2000-01-01 ${booking.startTime}`);
    const end = new Date(`2000-01-01 ${booking.endTime}`);
    return (end.getTime() - start.getTime()) / (1000 * 60 * 60);
  };

  const monthlyStudyHours = completedBookings
    .filter(b => {
      const bookingDate = new Date(b.date);
      return bookingDate.getMonth() === currentMonth && bookingDate.getFullYear() === currentYear;
    })
    .reduce((sum, b) => sum + calculateStudyHours(b), 0);

  // Get current plan details
  const currentPlan = plans.find(p => p.id === user?.subscriptionPlan) || plans[0];
  const bookingsRemaining = currentPlan.bookingLimit === -1
    ? 'Unlimited'
    : Math.max(0, currentPlan.bookingLimit - monthlyBookings.length);

  const handleUpgrade = async (planId: string) => {
    setSelectedPlan(planId);
    setIsUpgrading(true);

    try {
      // Simulate payment process
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // In real app, integrate with payment gateway
      alert(`Successfully upgraded to ${plans.find(p => p.id === planId)?.name}!`);
    } catch (error) {
      alert('Payment failed. Please try again.');
    } finally {
      setIsUpgrading(false);
      setSelectedPlan(null);
    }
  };

  const getPlanBadge = (plan: SubscriptionPlan) => {
    if (plan.recommended) {
      return (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center">
            <Crown className="w-4 h-4 mr-1" />
            Recommended
          </span>
        </div>
      );
    }
    if (plan.popular) {
      return (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center">
            <Star className="w-4 h-4 mr-1" />
            Most Popular
          </span>
        </div>
      );
    }
    return null;
  };

  const isCurrentPlan = (planId: string) => {
    return user?.subscriptionPlan === planId;
  };

  return (
    <div className="space-y-8">
      {/* Current Subscription Status */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl text-white p-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold">Current Plan</h2>
            <p className="text-blue-100 mt-1 capitalize">
              {user?.subscriptionPlan?.replace('_', ' ')} Plan
            </p>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold">{user?.loyaltyPoints}</div>
            <div className="text-blue-100 text-sm">Loyalty Points</div>
          </div>
        </div>
        
        {user?.subscription && (
          <div className="mt-4 pt-4 border-t border-blue-400">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <div className="text-blue-100">Next Billing</div>
                <div className="font-medium">{user.subscription.endDate}</div>
              </div>
              <div>
                <div className="text-blue-100">Auto Renew</div>
                <div className="font-medium">
                  {user.subscription.autoRenew ? 'Enabled' : 'Disabled'}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Subscription Plans */}
      <div>
        <h3 className="text-xl font-semibold text-gray-800 mb-6">Choose Your Plan</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative bg-white rounded-xl border-2 p-6 transition-all duration-300 ${
                plan.recommended
                  ? 'border-purple-500 shadow-lg scale-105'
                  : plan.popular
                  ? 'border-orange-500 shadow-md'
                  : 'border-gray-200 hover:border-blue-300 hover:shadow-md'
              }`}
            >
              {getPlanBadge(plan)}
              
              <div className="text-center mb-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-2">
                  {plan.name}
                </h4>
                <div className="mb-2">
                  <span className="text-3xl font-bold text-gray-800">
                    PKR {plan.price.toLocaleString()}
                  </span>
                  <span className="text-gray-600 text-sm ml-1">
                    /{plan.duration.toLowerCase()}
                  </span>
                </div>
                <div className="text-sm text-gray-600">
                  {plan.bookingLimit === -1 
                    ? 'Unlimited bookings' 
                    : `${plan.bookingLimit} bookings`}
                </div>
              </div>

              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => handleUpgrade(plan.id)}
                disabled={isCurrentPlan(plan.id) || isUpgrading}
                className={`w-full py-3 px-4 rounded-lg font-semibold transition-colors ${
                  isCurrentPlan(plan.id)
                    ? 'bg-gray-100 text-gray-500 cursor-not-allowed'
                    : plan.recommended
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700'
                    : plan.popular
                    ? 'bg-orange-500 text-white hover:bg-orange-600'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                } ${isUpgrading && selectedPlan === plan.id ? 'opacity-50' : ''}`}
              >
                {isUpgrading && selectedPlan === plan.id
                  ? 'Processing...'
                  : isCurrentPlan(plan.id)
                  ? 'Current Plan'
                  : plan.price === 0
                  ? 'Current Plan'
                  : 'Upgrade Now'}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Usage Statistics */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">This Month's Usage</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Calendar className="w-8 h-8 text-blue-600" />
            </div>
            <div className="text-2xl font-bold text-gray-800">{monthlyBookings.length}</div>
            <div className="text-sm text-gray-600">Seat Bookings</div>
            <div className="text-xs text-green-600 mt-1">
              {bookingsRemaining === 'Unlimited' ? 'Unlimited' : `${bookingsRemaining} remaining`}
            </div>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Gift className="w-8 h-8 text-teal-600" />
            </div>
            <div className="text-2xl font-bold text-gray-800">{user?.loyaltyPoints || 0}</div>
            <div className="text-sm text-gray-600">Total Points</div>
            <div className="text-xs text-blue-600 mt-1">Lifetime earned</div>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Zap className="w-8 h-8 text-orange-600" />
            </div>
            <div className="text-2xl font-bold text-gray-800">{Math.round(monthlyStudyHours)}h</div>
            <div className="text-sm text-gray-600">Study Time</div>
            <div className="text-xs text-green-600 mt-1">This month</div>
          </div>
        </div>
      </div>

      {/* Payment History */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Payment History</h3>
        {user?.subscriptionPlan === 'free' ? (
          <div className="text-center py-8">
            <DollarSign className="w-12 h-12 text-gray-300 mx-auto mb-3" />
            <p className="text-gray-500">No payment history</p>
            <p className="text-gray-400 text-sm mt-1">You are currently on the free plan</p>
          </div>
        ) : (
          <div className="text-center py-8">
            <DollarSign className="w-12 h-12 text-gray-300 mx-auto mb-3" />
            <p className="text-gray-500">Payment history coming soon</p>
            <p className="text-gray-400 text-sm mt-1">Your subscription is active</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SubscriptionManagement;