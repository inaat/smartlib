import React, { useState } from 'react';
import { useApp } from '../../contexts/AppContext';
import { useAuth } from '../../contexts/AuthContext';
import { 
  Calendar, 
  Search, 
  Filter,
  Clock,
  MapPin,
  User,
  CheckCircle,
  XCircle,
  AlertTriangle
} from 'lucide-react';

const BookingManagement: React.FC = () => {
  const { bookings, libraries, seats, checkInSeat, checkOutSeat } = useApp();
  const { user } = useAuth();
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'upcoming' | 'active' | 'completed' | 'cancelled' | 'no_show'>('all');
  const [dateFilter, setDateFilter] = useState('');

  // Filter bookings based on admin access
  const accessibleLibraryIds = user?.role === 'super_admin' 
    ? libraries.map(lib => lib.id)
    : user?.libraryAccess || [];

  const filteredBookings = bookings.filter(booking => {
    const matchesAccess = accessibleLibraryIds.includes(booking.libraryId);
    const matchesSearch = booking.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         booking.userId.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'all' || booking.status === statusFilter;
    const matchesDate = !dateFilter || booking.date === dateFilter;
    
    return matchesAccess && matchesSearch && matchesStatus && matchesDate;
  });

  const getLibraryName = (libraryId: string) => {
    return libraries.find(lib => lib.id === libraryId)?.name || 'Unknown Library';
  };

  const getSeatNumber = (seatId: string) => {
    return seats.find(seat => seat.id === seatId)?.seatNumber || 'Unknown Seat';
  };

  const getStatusBadge = (status: string, checkedIn: boolean) => {
    switch (status) {
      case 'upcoming':
        return <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">Upcoming</span>;
      case 'active':
        return <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">Active</span>;
      case 'completed':
        return <span className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded-full">Completed</span>;
      case 'cancelled':
        return <span className="px-2 py-1 text-xs font-medium bg-red-100 text-red-800 rounded-full">Cancelled</span>;
      case 'no_show':
        return <span className="px-2 py-1 text-xs font-medium bg-orange-100 text-orange-800 rounded-full">No Show</span>;
      default:
        return <span className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded-full">Unknown</span>;
    }
  };

  const handleForceCheckIn = async (bookingId: string) => {
    const booking = bookings.find(b => b.id === bookingId);
    if (booking) {
      const seat = seats.find(s => s.id === booking.seatId);
      if (seat) {
        await checkInSeat(bookingId, seat.qrCode);
      }
    }
  };

  const handleForceCheckOut = async (bookingId: string) => {
    await checkOutSeat(bookingId);
  };

  const stats = [
    {
      title: 'Total Bookings',
      value: filteredBookings.length,
      icon: Calendar,
      color: 'blue'
    },
    {
      title: 'Active Sessions',
      value: filteredBookings.filter(b => b.status === 'active').length,
      icon: CheckCircle,
      color: 'green'
    },
    {
      title: 'No Shows',
      value: filteredBookings.filter(b => b.status === 'no_show').length,
      icon: AlertTriangle,
      color: 'orange'
    },
    {
      title: 'Completed Today',
      value: filteredBookings.filter(b => 
        b.status === 'completed' && 
        b.date === new Date().toISOString().split('T')[0]
      ).length,
      icon: XCircle,
      color: 'gray'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">{stat.title}</p>
                <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
              </div>
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                stat.color === 'blue' ? 'bg-blue-100 text-blue-600' :
                stat.color === 'green' ? 'bg-green-100 text-green-600' :
                stat.color === 'orange' ? 'bg-orange-100 text-orange-600' :
                'bg-gray-100 text-gray-600'
              }`}>
                <stat.icon className="w-5 h-5" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search bookings by ID or user..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          
          <div className="flex gap-3">
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value as any)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">All Status</option>
              <option value="upcoming">Upcoming</option>
              <option value="active">Active</option>
              <option value="completed">Completed</option>
              <option value="cancelled">Cancelled</option>
              <option value="no_show">No Show</option>
            </select>

            <input
              type="date"
              value={dateFilter}
              onChange={(e) => setDateFilter(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>
      </div>

      {/* Bookings Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Booking Details
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  User
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Location
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Time
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredBookings.map((booking) => (
                <tr key={booking.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div>
                      <div className="text-sm font-medium text-gray-800">#{booking.id.slice(-8)}</div>
                      <div className="text-sm text-gray-500">{booking.date}</div>
                      <div className="text-xs text-gray-400">
                        {booking.checkedIn ? `Checked in: ${new Date(booking.checkedInAt!).toLocaleTimeString()}` : 'Not checked in'}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center mr-2">
                        <User className="w-4 h-4 text-gray-600" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-800">User #{booking.userId.slice(-6)}</div>
                        {booking.loyaltyPointsEarned && (
                          <div className="text-xs text-green-600">+{booking.loyaltyPointsEarned} points</div>
                        )}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div>
                      <div className="text-sm font-medium text-gray-800">{getLibraryName(booking.libraryId)}</div>
                      <div className="text-sm text-gray-500">Seat {getSeatNumber(booking.seatId)}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div>
                      <div className="text-sm text-gray-800">{booking.startTime} - {booking.endTime}</div>
                      {booking.autoReleaseTime && !booking.checkedIn && (
                        <div className="text-xs text-orange-600">
                          Auto-release: {new Date(booking.autoReleaseTime).toLocaleTimeString()}
                        </div>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    {getStatusBadge(booking.status, booking.checkedIn)}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex space-x-2">
                      {booking.status === 'upcoming' && !booking.checkedIn && (
                        <button
                          onClick={() => handleForceCheckIn(booking.id)}
                          className="text-green-600 hover:text-green-700 text-sm font-medium"
                        >
                          Force Check-in
                        </button>
                      )}
                      
                      {booking.status === 'active' && booking.checkedIn && (
                        <button
                          onClick={() => handleForceCheckOut(booking.id)}
                          className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                        >
                          Force Check-out
                        </button>
                      )}
                      
                      <button className="text-gray-600 hover:text-gray-700 text-sm font-medium">
                        View Details
                      </button>
                      
                      {booking.status === 'upcoming' && (
                        <button className="text-red-600 hover:text-red-700 text-sm font-medium">
                          Cancel
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {filteredBookings.length === 0 && (
        <div className="text-center py-12">
          <Calendar className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-800 mb-2">No bookings found</h3>
          <p className="text-gray-600">Try adjusting your search or filters</p>
        </div>
      )}
    </div>
  );
};

export default BookingManagement;