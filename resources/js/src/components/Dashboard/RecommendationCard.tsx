import React from 'react';
import { Clock, MapPin, User, Calendar } from 'lucide-react';

interface RecommendationCardProps {
  type: 'seat' | 'book' | 'event';
  title: string;
  description: string;
  action: string;
  time?: string;
  location?: string;
  author?: string;
  date?: string;
}

const RecommendationCard: React.FC<RecommendationCardProps> = ({
  type,
  title,
  description,
  action,
  time,
  location,
  author,
  date
}) => {
  const getTypeColor = () => {
    switch (type) {
      case 'seat': return 'bg-blue-50 border-blue-200 text-blue-800';
      case 'book': return 'bg-teal-50 border-teal-200 text-teal-800';
      case 'event': return 'bg-orange-50 border-orange-200 text-orange-800';
      default: return 'bg-gray-50 border-gray-200 text-gray-800';
    }
  };

  const getButtonColor = () => {
    switch (type) {
      case 'seat': return 'bg-blue-600 hover:bg-blue-700';
      case 'book': return 'bg-teal-600 hover:bg-teal-700';
      case 'event': return 'bg-orange-600 hover:bg-orange-700';
      default: return 'bg-gray-600 hover:bg-gray-700';
    }
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className={`inline-flex px-2 py-1 rounded-full text-xs font-medium ${getTypeColor()} mb-2`}>
            {type.charAt(0).toUpperCase() + type.slice(1)} Recommendation
          </div>
          <h3 className="font-semibold text-gray-800 mb-1">{title}</h3>
          <p className="text-gray-600 text-sm mb-3">{description}</p>
          
          <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
            {time && (
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                {time}
              </div>
            )}
            {location && (
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-1" />
                {location}
              </div>
            )}
            {author && (
              <div className="flex items-center">
                <User className="w-4 h-4 mr-1" />
                {author}
              </div>
            )}
            {date && (
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-1" />
                {date}
              </div>
            )}
          </div>
        </div>
        
        <button 
          className={`px-4 py-2 rounded-lg text-white text-sm font-medium transition-colors ${getButtonColor()}`}
        >
          {action}
        </button>
      </div>
    </div>
  );
};

export default RecommendationCard;