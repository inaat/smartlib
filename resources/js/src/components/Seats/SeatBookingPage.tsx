import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useApp } from '../../contexts/AppContext';
import { useAuth } from '../../contexts/AuthContext';
import SeatMap from './SeatMap';
import BookingForm from './BookingForm';
import { ArrowLeft, MapPin, Users, Clock, Calendar } from 'lucide-react';

const SeatBookingPage: React.FC = () => {
  const { libraryId } = useParams<{ libraryId: string }>();
  const { libraries, seats } = useApp();
  const { user } = useAuth();
  const [selectedSeat, setSelectedSeat] = useState<string | null>(null);
  const [showBookingForm, setShowBookingForm] = useState(false);

  const library = libraries.find(lib => lib.id === libraryId);
  const librarySeats = seats.filter(seat => seat.libraryId === libraryId);
  const selectedSeatData = librarySeats.find(seat => seat.id === selectedSeat);

  if (!library) {
    return (
      <div className="text-center py-12">
        <h2 className="text-xl font-semibold text-gray-800">Library not found</h2>
        <Link to="/libraries" className="text-blue-600 hover:text-blue-700 mt-2 inline-block">
          Back to Libraries
        </Link>
      </div>
    );
  }

  const handleSeatSelect = (seatId: string) => {
    setSelectedSeat(seatId);
    setShowBookingForm(true);
  };

  const handleBookingComplete = () => {
    setSelectedSeat(null);
    setShowBookingForm(false);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center space-x-4">
        <Link
          to="/libraries"
          className="p-2 text-gray-600 hover:text-blue-600 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-gray-800">{library.name}</h1>
          <div className="flex items-center text-gray-600 text-sm mt-1">
            <MapPin className="w-4 h-4 mr-1" />
            {library.address}
          </div>
        </div>
      </div>

      {/* Library Info */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-center">
            <Users className="w-8 h-8 text-blue-600 mr-3" />
            <div>
              <div className="text-sm text-gray-600">Available Seats</div>
              <div className="text-xl font-semibold text-gray-800">
                {library.availableSeats} / {library.totalSeats}
              </div>
            </div>
          </div>
          
          <div className="flex items-center">
            <Clock className="w-8 h-8 text-teal-600 mr-3" />
            <div>
              <div className="text-sm text-gray-600">Opening Hours</div>
              <div className="text-lg font-semibold text-gray-800">{library.openingHours}</div>
            </div>
          </div>
          
          <div className="flex items-center">
            <Calendar className="w-8 h-8 text-orange-600 mr-3" />
            <div>
              <div className="text-sm text-gray-600">Today's Date</div>
              <div className="text-lg font-semibold text-gray-800">
                {new Date().toLocaleDateString()}
              </div>
            </div>
          </div>
        </div>

        {/* Facilities */}
        <div className="mt-6 pt-6 border-t border-gray-200">
          <h3 className="text-sm font-medium text-gray-700 mb-2">Facilities</h3>
          <div className="flex flex-wrap gap-2">
            {library.facilities.map(facility => (
              <span
                key={facility}
                className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full"
              >
                {facility}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Seat Selection */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Seat Map */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-gray-800">Select Your Seat</h2>
              <div className="flex items-center space-x-4 text-sm">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-green-500 rounded mr-2"></div>
                  <span className="text-gray-600">Available</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-red-500 rounded mr-2"></div>
                  <span className="text-gray-600">Occupied</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-orange-500 rounded mr-2"></div>
                  <span className="text-gray-600">Booked</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-gray-400 rounded mr-2"></div>
                  <span className="text-gray-600">Maintenance</span>
                </div>
              </div>
            </div>
            
            <SeatMap
              seats={librarySeats}
              selectedSeat={selectedSeat}
              onSeatSelect={handleSeatSelect}
            />
          </div>
        </div>

        {/* Booking Form */}
        <div>
          {showBookingForm && selectedSeatData ? (
            <BookingForm
              seat={selectedSeatData}
              library={library}
              onComplete={handleBookingComplete}
            />
          ) : (
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-lg font-medium text-gray-800 mb-2">Select a Seat</h3>
                <p className="text-gray-600 text-sm">
                  Click on an available seat in the map to start booking
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SeatBookingPage;