import React, { useState } from 'react';
import { useApp } from '@/shared/contexts/AppContext';
import { useAuth } from '@/shared/contexts/AuthContext';
import { Book } from '@/shared/types';
import { 
  Book as BookIcon, 
  MapPin, 
  Calendar, 
  Lock, 
  CheckCircle,
  Clock,
  User
} from 'lucide-react';

interface BookCardProps {
  book: Book;
}

const BookCard: React.FC<BookCardProps> = ({ book }) => {
  const { addReservation, libraries } = useApp();
  const { user } = useAuth();
  const [isReserving, setIsReserving] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  const library = book.libraryId ? libraries.find(lib => lib.id === book.libraryId) : null;

  const getAvailabilityColor = () => {
    switch (book.availability) {
      case 'available': return 'text-green-600 bg-green-100';
      case 'reserved': return 'text-orange-600 bg-orange-100';
      case 'unavailable': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getTypeColor = () => {
    return book.type === 'digital' ? 'text-blue-600 bg-blue-100' : 'text-teal-600 bg-teal-100';
  };

  const handleReserve = async () => {
    if (!user || book.availability !== 'available') return;

    setIsReserving(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const reservation = {
        userId: user.id,
        bookId: book.id,
        reservedAt: new Date().toISOString(),
        expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(), // 7 days
        status: 'active' as const
      };

      addReservation(reservation);
    } catch (error) {
      console.error('Reservation failed:', error);
    } finally {
      setIsReserving(false);
    }
  };

  const handleDigitalAccess = () => {
    if (book.type === 'digital') {
      if (book.digitalAccess?.subscriptionRequired && user?.subscriptionPlan === 'free') {
        alert('Premium subscription required for this digital book');
        return;
      }
      // In a real app, this would open the digital book viewer
      alert('Opening digital book viewer...');
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
      {/* Book Cover */}
      <div className="relative h-48 bg-gray-100">
        <img
          src={book.cover}
          alt={book.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-3 left-3 flex gap-2">
          <span className={`text-xs font-medium px-2 py-1 rounded-full ${getTypeColor()}`}>
            {book.type}
          </span>
          <span className={`text-xs font-medium px-2 py-1 rounded-full ${getAvailabilityColor()}`}>
            {book.availability}
          </span>
        </div>
        {book.type === 'digital' && book.digitalAccess?.subscriptionRequired && (
          <div className="absolute top-3 right-3">
            <Lock className="w-5 h-5 text-orange-500" />
          </div>
        )}
      </div>

      {/* Book Info */}
      <div className="p-4">
        <div className="mb-3">
          <h3 className="font-semibold text-gray-800 text-sm line-clamp-2 mb-1">
            {book.title}
          </h3>
          <div className="flex items-center text-gray-600 text-xs">
            <User className="w-3 h-3 mr-1" />
            {book.author}
          </div>
        </div>

        <div className="space-y-2 text-xs text-gray-600 mb-4">
          <div className="flex items-center">
            <BookIcon className="w-3 h-3 mr-1" />
            {book.category}
          </div>
          {book.type === 'physical' && library && (
            <div className="flex items-center">
              <MapPin className="w-3 h-3 mr-1" />
              {library.name}
            </div>
          )}
          {book.location && (
            <div className="text-xs text-gray-500">
              Location: {book.location}
            </div>
          )}
        </div>

        {/* Description */}
        <p className="text-xs text-gray-600 line-clamp-2 mb-4">
          {book.description}
        </p>

        {/* Actions */}
        <div className="space-y-2">
          {book.type === 'physical' ? (
            <button
              onClick={handleReserve}
              disabled={isReserving || book.availability !== 'available'}
              className={`w-full py-2 px-3 rounded-lg text-sm font-medium transition-colors ${
                book.availability === 'available'
                  ? 'bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50'
                  : 'bg-gray-100 text-gray-500 cursor-not-allowed'
              }`}
            >
              {isReserving ? 'Reserving...' : 
               book.availability === 'available' ? 'Reserve Book' : 
               book.availability === 'reserved' ? 'Already Reserved' : 'Unavailable'}
            </button>
          ) : (
            <button
              onClick={handleDigitalAccess}
              className="w-full bg-teal-600 text-white py-2 px-3 rounded-lg text-sm font-medium hover:bg-teal-700 transition-colors"
            >
              {book.digitalAccess?.subscriptionRequired ? 'Access (Premium)' : 'Read Online'}
            </button>
          )}
          
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="w-full border border-gray-300 text-gray-700 py-2 px-3 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors"
          >
            {showDetails ? 'Hide Details' : 'View Details'}
          </button>
        </div>

        {/* Extended Details */}
        {showDetails && (
          <div className="mt-4 pt-4 border-t border-gray-200 space-y-2 text-xs text-gray-600">
            <div><strong>ISBN:</strong> {book.isbn}</div>
            {book.type === 'digital' && book.digitalAccess?.passphrase && (
              <div><strong>Access Code:</strong> {book.digitalAccess.passphrase}</div>
            )}
            <div className="pt-2">
              <strong>Full Description:</strong>
              <p className="mt-1">{book.description}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookCard;