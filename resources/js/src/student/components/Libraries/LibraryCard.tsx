import React from 'react';
import { Link } from 'react-router-dom';
import { Library } from '@/shared/types';
import { MapPin, Clock, Users, Wifi, Car } from 'lucide-react';

interface LibraryCardProps {
  library: Library;
}

const LibraryCard: React.FC<LibraryCardProps> = ({ library }) => {
  const availabilityPercentage = (library.availableSeats / library.totalSeats) * 100;
  
  const getAvailabilityColor = () => {
    if (availabilityPercentage > 50) return 'text-green-600 bg-green-100';
    if (availabilityPercentage > 20) return 'text-orange-600 bg-orange-100';
    return 'text-red-600 bg-red-100';
  };

  const getFacilityIcon = (facility: string) => {
    switch (facility.toLowerCase()) {
      case 'wifi': return <Wifi className="w-4 h-4" />;
      case 'parking': return <Car className="w-4 h-4" />;
      default: return null;
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
      {/* Header */}
      <div className="p-6 pb-4">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="text-lg font-semibold text-gray-800">{library.name}</h3>
            <div className="flex items-center text-gray-600 text-sm mt-1">
              <MapPin className="w-4 h-4 mr-1" />
              {library.address}
            </div>
          </div>
          {library.distance && (
            <span className="text-sm text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
              {library.distance}km
            </span>
          )}
        </div>

        {/* Opening Hours */}
        <div className="flex items-center text-gray-600 text-sm mb-4">
          <Clock className="w-4 h-4 mr-1" />
          {library.openingHours}
        </div>

        {/* Availability */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <Users className="w-4 h-4 mr-2 text-gray-600" />
            <span className="text-sm text-gray-600">
              {library.availableSeats} of {library.totalSeats} seats available
            </span>
          </div>
          <span className={`text-xs font-medium px-2 py-1 rounded-full ${getAvailabilityColor()}`}>
            {Math.round(availabilityPercentage)}% available
          </span>
        </div>

        {/* Facilities */}
        <div className="flex flex-wrap gap-2 mb-4">
          {library.facilities.slice(0, 4).map(facility => (
            <div key={facility} className="flex items-center bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">
              {getFacilityIcon(facility)}
              <span className="ml-1">{facility}</span>
            </div>
          ))}
          {library.facilities.length > 4 && (
            <span className="text-xs text-gray-500 px-2 py-1">
              +{library.facilities.length - 4} more
            </span>
          )}
        </div>
      </div>

      {/* Actions */}
      <div className="px-6 pb-6 pt-2 border-t border-gray-100">
        <div className="flex space-x-3">
          <Link
            to={`/libraries/${library.id}/seats`}
            className="flex-1 bg-blue-600 text-white text-center py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm"
          >
            Book Seat
          </Link>
          <Link
            to={`/libraries/${library.id}`}
            className="flex-1 border border-gray-300 text-gray-700 text-center py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors font-medium text-sm"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LibraryCard;