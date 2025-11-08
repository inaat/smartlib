import React from 'react';
import { useApp } from '@/shared/contexts/AppContext';
import { Calendar, Clock, MapPin } from 'lucide-react';
import { format } from 'date-fns';

const UpcomingBookings: React.FC = () => {
  const { bookings, libraries, seats } = useApp();

  const upcomingBookings = bookings
    .filter(booking => booking.status === 'upcoming')
    .slice(0, 3);

  const getLibraryName = (libraryId: string) => {
    return libraries.find(lib => lib.id === libraryId)?.name || 'Unknown Library';
  };

  const getSeatNumber = (seatId: string) => {
    return seats.find(seat => seat.id === seatId)?.seatNumber || 'Unknown Seat';
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
        <Calendar className="w-5 h-5 mr-2 text-blue-600" />
        Upcoming Bookings
      </h2>
      
      {upcomingBookings.length === 0 ? (
        <div className="text-center py-8">
          <Calendar className="w-12 h-12 text-gray-300 mx-auto mb-3" />
          <p className="text-gray-500 text-sm">No upcoming bookings</p>
          <p className="text-gray-400 text-xs mt-1">Book a seat to get started!</p>
        </div>
      ) : (
        <div className="space-y-3">
          {upcomingBookings.map((booking) => (
            <div key={booking.id} className="p-3 bg-gray-50 rounded-lg border border-gray-200">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-medium text-gray-800 text-sm">
                  Seat {getSeatNumber(booking.seatId)}
                </h3>
                <span className="text-xs text-blue-600 bg-blue-100 px-2 py-1 rounded-full">
                  {booking.status}
                </span>
              </div>
              
              <div className="space-y-1 text-xs text-gray-600">
                <div className="flex items-center">
                  <MapPin className="w-3 h-3 mr-1" />
                  {getLibraryName(booking.libraryId)}
                </div>
                <div className="flex items-center">
                  <Calendar className="w-3 h-3 mr-1" />
                  {booking.date}
                </div>
                <div className="flex items-center">
                  <Clock className="w-3 h-3 mr-1" />
                  {booking.startTime} - {booking.endTime}
                </div>
              </div>
              
              {!booking.checkedIn && (
                <div className="mt-2 pt-2 border-t border-gray-200">
                  <button className="text-xs text-blue-600 hover:text-blue-700 font-medium">
                    Check In with QR
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UpcomingBookings;