import React, { useEffect, useState } from 'react';
import { useAuth } from '@/shared/contexts/AuthContext';
import { useApp } from '@/shared/contexts/AppContext';
import { studentAPI } from '@/shared/services/api';
import {
  Award,
  Star,
  Gift,
  Trophy,
  Target,
  TrendingUp,
  Calendar,
  BookOpen,
  Users,
  Zap
} from 'lucide-react';

const LoyaltyProgram: React.FC = () => {
  const { user } = useAuth();
  const { bookings, reservations, events } = useApp();
  const [recentTransactions, setRecentTransactions] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const totalPoints = user?.loyaltyPoints || 0;

  // Calculate user stats for achievements
  const userBookings = bookings.filter(b => b.userId === user?.id) || [];
  const completedBookings = userBookings.filter(b => b.status === 'completed');
  const userReservations = reservations.filter(r => r.userId === user?.id) || [];
  const userEvents = events.filter(e => e.registrations?.some((reg: any) => reg.userId === user?.id)) || [];

  useEffect(() => {
    loadLoyaltyTransactions();
  }, []);

  const loadLoyaltyTransactions = async () => {
    try {
      const transactions = await studentAPI.getLoyaltyTransactions();
      setRecentTransactions(transactions);
    } catch (error) {
      console.error('Failed to load loyalty transactions:', error);
    } finally {
      setLoading(false);
    }
  };

  const tiers = [
    { name: 'Bronze', min: 0, max: 499, color: 'text-orange-600 bg-orange-100', icon: Award },
    { name: 'Silver', min: 500, max: 1499, color: 'text-gray-600 bg-gray-100', icon: Star },
    { name: 'Gold', min: 1500, max: 2999, color: 'text-yellow-600 bg-yellow-100', icon: Trophy },
    { name: 'Platinum', min: 3000, max: Infinity, color: 'text-purple-600 bg-purple-100', icon: Zap }
  ];

  // Calculate achievements from real data
  const uniqueBooks = new Set(userReservations.map(r => r.bookId)).size;

  const achievements = [
    {
      id: 'first_booking',
      title: 'First Steps',
      description: 'Made your first seat booking',
      icon: Calendar,
      unlocked: userBookings.length >= 1,
      points: 50,
      rarity: 'common',
      progress: userBookings.length >= 1 ? 10 : Math.min(10, userBookings.length * 10)
    },
    {
      id: 'booking_master',
      title: 'Booking Master',
      description: 'Complete 10 seat bookings',
      icon: Target,
      unlocked: completedBookings.length >= 10,
      points: 100,
      rarity: 'rare',
      progress: Math.min(10, completedBookings.length)
    },
    {
      id: 'book_lover',
      title: 'Book Lover',
      description: 'Reserved 10 different books',
      icon: BookOpen,
      unlocked: uniqueBooks >= 10,
      points: 150,
      rarity: 'epic',
      progress: uniqueBooks
    },
    {
      id: 'social_butterfly',
      title: 'Social Butterfly',
      description: 'Attended 5 events',
      icon: Users,
      unlocked: userEvents.length >= 5,
      points: 200,
      rarity: 'legendary',
      progress: userEvents.length
    }
  ];


  const availableRewards = [
    {
      id: 'coffee_voucher',
      title: 'Free Coffee',
      description: 'Get a free coffee at library cafe',
      points: 50,
      type: 'voucher',
      available: 5
    },
    {
      id: 'premium_seat',
      title: 'Premium Seat Access',
      description: '1 day access to premium seats',
      points: 100,
      type: 'access',
      available: 3
    },
    {
      id: 'book_extension',
      title: 'Book Extension',
      description: 'Extend book reservation by 7 days',
      points: 75,
      type: 'service',
      available: 10
    },
    {
      id: 'event_discount',
      title: '50% Event Discount',
      description: 'Half price on next paid event',
      points: 200,
      type: 'discount',
      available: 2
    }
  ];

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'common': return 'text-gray-600 bg-gray-100';
      case 'rare': return 'text-blue-600 bg-blue-100';
      case 'epic': return 'text-purple-600 bg-purple-100';
      case 'legendary': return 'text-orange-600 bg-orange-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getCurrentTier = () => {
    return tiers.find(tier => totalPoints >= tier.min && totalPoints <= tier.max) || tiers[0];
  };

  const getNextTier = () => {
    const current = getCurrentTier();
    const currentIndex = tiers.findIndex(tier => tier.name === current.name);
    return currentIndex < tiers.length - 1 ? tiers[currentIndex + 1] : null;
  };

  const currentTierData = getCurrentTier();
  const nextTierData = getNextTier();

  return (
    <div className="space-y-6">
      {/* Tier Progress */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl text-white p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-xl font-bold">Loyalty Status</h2>
            <div className="flex items-center mt-2">
              <currentTierData.icon className="w-6 h-6 mr-2" />
              <span className="text-lg font-semibold">{currentTierData.name} Member</span>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold">{totalPoints}</div>
            <div className="text-blue-100 text-sm">Total Points</div>
          </div>
        </div>

        {nextTierData && (
          <div>
            <div className="flex justify-between text-sm mb-2">
              <span>Progress to {nextTierData.name}</span>
              <span>{pointsToNextTier} points to go</span>
            </div>
            <div className="w-full bg-blue-400 rounded-full h-2">
              <div
                className="bg-white h-2 rounded-full transition-all duration-300"
                style={{ 
                  width: `${((totalPoints - currentTierData.min) / (nextTierData.min - currentTierData.min)) * 100}%` 
                }}
              ></div>
            </div>
          </div>
        )}
      </div>

      {/* Tier Benefits */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Tier Benefits</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {tiers.map((tier) => {
            const isCurrentTier = tier.name === currentTierData.name;
            const isUnlocked = totalPoints >= tier.min;
            
            return (
              <div
                key={tier.name}
                className={`p-4 rounded-lg border-2 transition-all ${
                  isCurrentTier
                    ? 'border-blue-500 bg-blue-50'
                    : isUnlocked
                    ? 'border-green-300 bg-green-50'
                    : 'border-gray-200 bg-gray-50'
                }`}
              >
                <div className="text-center">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2 ${tier.color}`}>
                    <tier.icon className="w-6 h-6" />
                  </div>
                  <h4 className="font-semibold text-gray-800">{tier.name}</h4>
                  <p className="text-xs text-gray-600 mt-1">
                    {tier.min} - {tier.max === Infinity ? '∞' : tier.max} points
                  </p>
                  {isCurrentTier && (
                    <span className="inline-block mt-2 text-xs bg-blue-600 text-white px-2 py-1 rounded-full">
                      Current
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Achievements */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Achievements</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {achievements.map((achievement) => (
            <div
              key={achievement.id}
              className={`p-4 rounded-lg border ${
                achievement.unlocked
                  ? 'border-green-300 bg-green-50'
                  : 'border-gray-200 bg-gray-50'
              }`}
            >
              <div className="flex items-start">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-3 ${
                  achievement.unlocked ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-400'
                }`}>
                  <achievement.icon className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium text-gray-800">{achievement.title}</h4>
                    <span className={`text-xs px-2 py-1 rounded-full ${getRarityColor(achievement.rarity)}`}>
                      {achievement.rarity}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">{achievement.description}</p>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-sm font-medium text-blue-600">
                      +{achievement.points} points
                    </span>
                    {!achievement.unlocked && achievement.progress && (
                      <span className="text-xs text-gray-500">
                        {achievement.progress}/10
                      </span>
                    )}
                  </div>
                  {!achievement.unlocked && achievement.progress && (
                    <div className="w-full bg-gray-200 rounded-full h-1 mt-2">
                      <div
                        className="bg-blue-600 h-1 rounded-full"
                        style={{ width: `${(achievement.progress / 10) * 100}%` }}
                      ></div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Available Rewards */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Redeem Rewards</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {availableRewards.map((reward) => {
            const canAfford = totalPoints >= reward.points;
            
            return (
              <div
                key={reward.id}
                className="p-4 rounded-lg border border-gray-200 hover:border-blue-300 transition-colors"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-800">{reward.title}</h4>
                    <p className="text-sm text-gray-600 mt-1">{reward.description}</p>
                    <div className="flex items-center justify-between mt-3">
                      <span className="text-lg font-bold text-blue-600">
                        {reward.points} points
                      </span>
                      <span className="text-xs text-gray-500">
                        {reward.available} available
                      </span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <Gift className="w-8 h-8 text-gray-400" />
                  </div>
                </div>
                <button
                  disabled={!canAfford || reward.available === 0}
                  className={`w-full mt-3 py-2 px-4 rounded-lg font-medium transition-colors ${
                    canAfford && reward.available > 0
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-gray-100 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  {!canAfford ? 'Insufficient Points' : 
                   reward.available === 0 ? 'Out of Stock' : 'Redeem'}
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Points History */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Recent Activity</h3>
        {loading ? (
          <div className="text-center py-8 text-gray-500">Loading...</div>
        ) : recentTransactions.length === 0 ? (
          <div className="text-center py-8 text-gray-500">No transactions yet</div>
        ) : (
          <div className="space-y-3">
            {recentTransactions.map((transaction, index) => (
              <div key={index} className="flex items-center justify-between py-2 border-b border-gray-100">
                <div className="flex items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${
                    transaction.type === 'earned' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
                  }`}>
                    {transaction.type === 'earned' ? (
                      <TrendingUp className="w-4 h-4" />
                    ) : (
                      <Gift className="w-4 h-4" />
                    )}
                  </div>
                  <div>
                    <div className="font-medium text-gray-800">{transaction.description || 'Transaction'}</div>
                    <div className="text-sm text-gray-600">{new Date(transaction.created_at).toLocaleDateString()}</div>
                  </div>
                </div>
                <div className={`font-bold ${
                  transaction.type === 'earned' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {transaction.type === 'earned' ? '+' : ''}{transaction.points}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default LoyaltyProgram;