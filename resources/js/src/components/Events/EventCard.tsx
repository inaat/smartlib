import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { Event } from '../../types';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Users, 
  DollarSign,
  CheckCircle,
  AlertCircle
} from 'lucide-react';
import { format } from 'date-fns';

interface EventCardProps {
  event: Event;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  const { user } = useAuth();
  const [isRegistering, setIsRegistering] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);

  const getTypeColor = () => {
    switch (event.type) {
      case 'seminar': return 'text-blue-600 bg-blue-100';
      case 'workshop': return 'text-orange-600 bg-orange-100';
      case 'study_group': return 'text-teal-600 bg-teal-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getAvailabilityStatus = () => {
    const spotsLeft = event.capacity - event.registered;
    if (spotsLeft === 0) return { text: 'Full', color: 'text-red-600 bg-red-100' };
    if (spotsLeft <= 5) return { text: `${spotsLeft} spots left`, color: 'text-orange-600 bg-orange-100' };
    return { text: 'Available', color: 'text-green-600 bg-green-100' };
  };

  const handleRegister = async () => {
    if (!user || event.registered >= event.capacity) return;

    setIsRegistering(true);
    try {
      // Simulate registration process
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      if (event.isPaid) {
        // In a real app, this would integrate with payment gateway
        alert(`Payment of PKR ${event.price} required. Redirecting to payment...`);
      }
      
      setIsRegistered(true);
    } catch (error) {
      console.error('Registration failed:', error);
    } finally {
      setIsRegistering(false);
    }
  };

  const availabilityStatus = getAvailabilityStatus();
  const eventDate = new Date(event.date);
  const isEventFull = event.registered >= event.capacity;

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
      {/* Event Image */}
      <div className="relative h-48 bg-gray-100">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-3 left-3 flex gap-2">
          <span className={`text-xs font-medium px-2 py-1 rounded-full ${getTypeColor()}`}>
            {event.type.replace('_', ' ')}
          </span>
          {event.isPaid && (
            <span className="text-xs font-medium px-2 py-1 rounded-full bg-green-100 text-green-600">
              PKR {event.price}
            </span>
          )}
          {!event.isPaid && (
            <span className="text-xs font-medium px-2 py-1 rounded-full bg-blue-100 text-blue-600">
              Free
            </span>
          )}
        </div>
        <div className="absolute top-3 right-3">
          <span className={`text-xs font-medium px-2 py-1 rounded-full ${availabilityStatus.color}`}>
            {availabilityStatus.text}
          </span>
        </div>
      </div>

      {/* Event Details */}
      <div className="p-6">
        <h3 className="font-semibold text-gray-800 text-lg mb-2 line-clamp-2">
          {event.title}
        </h3>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {event.description}
        </p>

        {/* Event Info */}
        <div className="space-y-2 text-sm text-gray-600 mb-4">
          <div className="flex items-center">
            <Calendar className="w-4 h-4 mr-2" />
            {format(eventDate, 'EEEE, MMMM d, yyyy')}
          </div>
          
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-2" />
            {event.startTime} - {event.endTime}
          </div>
          
          <div className="flex items-center">
            <MapPin className="w-4 h-4 mr-2" />
            {event.venue}
          </div>
          
          <div className="flex items-center">
            <Users className="w-4 h-4 mr-2" />
            {event.registered} / {event.capacity} registered
          </div>
          
          {event.isPaid && (
            <div className="flex items-center">
              <DollarSign className="w-4 h-4 mr-2" />
              PKR {event.price}
            </div>
          )}
        </div>

        {/* Registration Progress */}
        <div className="mb-4">
          <div className="flex justify-between text-xs text-gray-600 mb-1">
            <span>Registration Progress</span>
            <span>{Math.round((event.registered / event.capacity) * 100)}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(event.registered / event.capacity) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Action Button */}
        {isRegistered ? (
          <div className="flex items-center justify-center py-3 px-4 bg-green-50 border border-green-200 rounded-lg">
            <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
            <span className="text-green-700 font-medium">Registered Successfully</span>
          </div>
        ) : (
          <button
            onClick={handleRegister}
            disabled={isRegistering || isEventFull}
            className={`w-full py-3 px-4 rounded-lg font-semibold transition-colors ${
              isEventFull
                ? 'bg-gray-100 text-gray-500 cursor-not-allowed'
                : event.isPaid
                ? 'bg-green-600 text-white hover:bg-green-700 disabled:opacity-50'
                : 'bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50'
            }`}
          >
            {isRegistering ? 'Registering...' : 
             isEventFull ? 'Event Full' :
             event.isPaid ? `Register - PKR ${event.price}` : 'Register Free'}
          </button>
        )}

        {isEventFull && (
          <div className="mt-3 flex items-center justify-center text-sm text-orange-600">
            <AlertCircle className="w-4 h-4 mr-1" />
            Join waitlist for cancellations
          </div>
        )}
      </div>
    </div>
  );
};

export default EventCard;