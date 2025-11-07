import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Clock, MapPin, User, Calendar } from 'lucide-react';

interface Recommendation {
  type: 'seat' | 'book' | 'event';
  title: string;
  description: string;
  action: string;
  time?: string;
  location?: string;
  author?: string;
  date?: string;
}

interface RecommendationSliderProps {
  recommendations: Recommendation[];
}

const RecommendationSlider: React.FC<RecommendationSliderProps> = ({ recommendations }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-slide every 5 seconds
  useEffect(() => {
    if (!isAutoPlaying || recommendations.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === recommendations.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, recommendations.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    // Resume auto-play after 10 seconds of inactivity
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? recommendations.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  };

  const goToNext = () => {
    const newIndex = currentIndex === recommendations.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'seat': return 'bg-blue-50 border-blue-200 text-blue-800';
      case 'book': return 'bg-teal-50 border-teal-200 text-teal-800';
      case 'event': return 'bg-orange-50 border-orange-200 text-orange-800';
      default: return 'bg-gray-50 border-gray-200 text-gray-800';
    }
  };

  const getButtonColor = (type: string) => {
    switch (type) {
      case 'seat': return 'bg-blue-600 hover:bg-blue-700';
      case 'book': return 'bg-teal-600 hover:bg-teal-700';
      case 'event': return 'bg-orange-600 hover:bg-orange-700';
      default: return 'bg-gray-600 hover:bg-gray-700';
    }
  };

  if (recommendations.length === 0) {
    return (
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 text-center">
        <div className="text-gray-500">No recommendations available</div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      {/* Header */}
      <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-800">AI Recommendations</h2>
        <div className="flex items-center space-x-2">
          {/* Slide indicators */}
          <div className="flex space-x-1">
            {recommendations.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-blue-600 w-6' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
          
          {/* Navigation buttons */}
          <div className="flex space-x-1 ml-4">
            <button
              onClick={goToPrevious}
              className="p-1 rounded-full hover:bg-gray-100 transition-colors"
              disabled={recommendations.length <= 1}
            >
              <ChevronLeft className="w-4 h-4 text-gray-600" />
            </button>
            <button
              onClick={goToNext}
              className="p-1 rounded-full hover:bg-gray-100 transition-colors"
              disabled={recommendations.length <= 1}
            >
              <ChevronRight className="w-4 h-4 text-gray-600" />
            </button>
          </div>
        </div>
      </div>

      {/* Slider Container */}
      <div className="relative overflow-hidden">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {recommendations.map((recommendation, index) => (
            <div key={index} className="w-full flex-shrink-0 p-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(recommendation.type)} mb-3`}>
                    {recommendation.type.charAt(0).toUpperCase() + recommendation.type.slice(1)} Recommendation
                  </div>
                  
                  <h3 className="font-semibold text-gray-800 text-lg mb-2">
                    {recommendation.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {recommendation.description}
                  </p>
                  
                  <div className="flex items-center space-x-6 text-sm text-gray-500 mb-4">
                    {recommendation.time && (
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {recommendation.time}
                      </div>
                    )}
                    {recommendation.location && (
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {recommendation.location}
                      </div>
                    )}
                    {recommendation.author && (
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        {recommendation.author}
                      </div>
                    )}
                    {recommendation.date && (
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {recommendation.date}
                      </div>
                    )}
                  </div>
                </div>
                
                <button 
                  className={`px-6 py-3 rounded-lg text-white font-medium transition-all duration-200 transform hover:scale-105 ${getButtonColor(recommendation.type)}`}
                >
                  {recommendation.action}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Progress bar */}
      <div className="px-6 pb-4">
        <div className="w-full bg-gray-200 rounded-full h-1">
          <div 
            className="bg-blue-600 h-1 rounded-full transition-all duration-500 ease-in-out"
            style={{ width: `${((currentIndex + 1) / recommendations.length) * 100}%` }}
          />
        </div>
        <div className="flex justify-between text-xs text-gray-500 mt-1">
          <span>{currentIndex + 1} of {recommendations.length}</span>
          <span>{isAutoPlaying ? 'Auto-playing' : 'Paused'}</span>
        </div>
      </div>
    </div>
  );
};

export default RecommendationSlider;