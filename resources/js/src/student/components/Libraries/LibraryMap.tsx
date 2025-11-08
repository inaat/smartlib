import React from 'react';
import { Library } from '@/shared/types';
import { MapPin, Users, Clock } from 'lucide-react';

interface LibraryMapProps {
  libraries: Library[];
}

const LibraryMap: React.FC<LibraryMapProps> = ({ libraries }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      {/* Map Placeholder */}
      <div className="h-96 bg-gradient-to-br from-blue-50 to-teal-50 relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <MapPin className="w-16 h-16 text-blue-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Interactive Map</h3>
            <p className="text-gray-500">Map integration would be implemented here</p>
            <p className="text-sm text-gray-400 mt-1">Using Google Maps or similar service</p>
          </div>
        </div>
        
        {/* Mock map pins */}
        {libraries.map((library, index) => (
          <div
            key={library.id}
            className="absolute bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shadow-lg cursor-pointer hover:bg-blue-700 transition-colors"
            style={{
              left: `${20 + index * 25}%`,
              top: `${30 + index * 15}%`
            }}
            title={library.name}
          >
            {index + 1}
          </div>
        ))}
      </div>

      {/* Library List */}
      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          Libraries on Map ({libraries.length})
        </h3>
        <div className="space-y-3">
          {libraries.map((library, index) => (
            <div key={library.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold">
                  {index + 1}
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">{library.name}</h4>
                  <div className="flex items-center space-x-4 text-sm text-gray-600 mt-1">
                    <div className="flex items-center">
                      <Users className="w-3 h-3 mr-1" />
                      {library.availableSeats}/{library.totalSeats}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      {library.openingHours}
                    </div>
                  </div>
                </div>
              </div>
              <button className="bg-blue-600 text-white px-3 py-1 rounded-lg text-sm hover:bg-blue-700 transition-colors">
                Select
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LibraryMap;