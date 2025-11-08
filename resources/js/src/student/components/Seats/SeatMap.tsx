import React from 'react';
import { Seat } from '@/shared/types';

interface SeatMapProps {
  seats: Seat[];
  selectedSeat: string | null;
  onSeatSelect: (seatId: string) => void;
}

const SeatMap: React.FC<SeatMapProps> = ({ seats, selectedSeat, onSeatSelect }) => {
  const getSeatColor = (seat: Seat) => {
    if (seat.id === selectedSeat) return 'bg-blue-600 border-blue-700';
    
    switch (seat.status) {
      case 'available': return 'bg-green-500 hover:bg-green-600 border-green-600';
      case 'booked': return 'bg-orange-500 border-orange-600 cursor-not-allowed';
      case 'occupied': return 'bg-red-500 border-red-600 cursor-not-allowed';
      case 'maintenance': return 'bg-gray-400 border-gray-500 cursor-not-allowed';
      default: return 'bg-gray-300 border-gray-400';
    }
  };

  const getSeatTypeIcon = (type: Seat['type']) => {
    switch (type) {
      case 'premium': return '⭐';
      case 'group': return '👥';
      default: return '';
    }
  };

  const canSelectSeat = (seat: Seat) => {
    return seat.status === 'available';
  };

  return (
    <div className="relative bg-gray-50 rounded-lg p-8 min-h-96">
      {/* Room Layout */}
      <div className="relative w-full h-80">
        {/* Entrance */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-gray-300 text-gray-700 px-4 py-2 rounded-b-lg text-sm font-medium">
          Entrance
        </div>

        {/* Study Areas */}
        <div className="absolute top-8 left-4 right-4 bottom-4">
          {/* Area Labels */}
          <div className="absolute top-4 left-8 text-sm font-medium text-gray-600">Section A</div>
          <div className="absolute top-20 left-8 text-sm font-medium text-gray-600">Section B</div>
          <div className="absolute top-36 left-8 text-sm font-medium text-gray-600">Section C</div>

          {/* Seats */}
          {seats.map(seat => (
            <button
              key={seat.id}
              onClick={() => canSelectSeat(seat) && onSeatSelect(seat.id)}
              className={`absolute w-8 h-8 rounded border-2 text-white text-xs font-bold flex items-center justify-center transition-all duration-200 transform hover:scale-110 ${getSeatColor(seat)}`}
              style={{
                left: `${seat.position.x}px`,
                top: `${seat.position.y}px`
              }}
              disabled={!canSelectSeat(seat)}
              title={`Seat ${seat.seatNumber} - ${seat.status} ${seat.type !== 'regular' ? `(${seat.type})` : ''}`}
            >
              <span className="relative">
                {seat.seatNumber.slice(-2)}
                {getSeatTypeIcon(seat.type) && (
                  <span className="absolute -top-1 -right-1 text-xs">
                    {getSeatTypeIcon(seat.type)}
                  </span>
                )}
              </span>
            </button>
          ))}
        </div>

        {/* Legend */}
        <div className="absolute bottom-2 right-4 bg-white p-3 rounded-lg shadow-sm border border-gray-200">
          <div className="text-xs font-medium text-gray-700 mb-2">Seat Types</div>
          <div className="space-y-1 text-xs">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-green-500 rounded mr-2"></div>
              <span>Regular</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-green-500 rounded mr-2 relative">
                <span className="absolute -top-1 -right-1 text-xs">⭐</span>
              </div>
              <span>Premium</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-green-500 rounded mr-2 relative">
                <span className="absolute -top-1 -right-1 text-xs">👥</span>
              </div>
              <span>Group</span>
            </div>
          </div>
        </div>
      </div>

      {/* Selected Seat Info */}
      {selectedSeat && (
        <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <h3 className="font-medium text-blue-800 mb-2">
            Selected: Seat {seats.find(s => s.id === selectedSeat)?.seatNumber}
          </h3>
          <div className="text-sm text-blue-700">
            <div>Type: {seats.find(s => s.id === selectedSeat)?.type}</div>
            <div className="mt-1">
              Amenities: {seats.find(s => s.id === selectedSeat)?.amenities.join(', ')}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SeatMap;