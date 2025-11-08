import React from 'react';
import { Grid, Edit3, Trash2, Settings } from 'lucide-react';

interface SeatSection {
  id: number;
  name: string;
  total_seats: number;
  seats: any[];
  seats_count: number;
  available_seats: number;
  occupied_seats: number;
}

interface SectionCardProps {
  section: SeatSection;
  loading: boolean;
  onEdit: (section: SeatSection) => void;
  onDelete: (sectionId: number) => void;
  onSeatClick: (seat: any) => void;
  onEditAllSeats?: (section: SeatSection) => void;
}

export default function SectionCard({
  section,
  loading,
  onEdit,
  onDelete,
  onSeatClick,
  onEditAllSeats,
}: SectionCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-800">{section.name}</h3>
          <p className="text-sm text-gray-600 mt-1">
            {section.total_seats} seats | {section.available_seats} available | {section.occupied_seats} occupied
          </p>
        </div>
        <div className="flex space-x-2">
          {onEditAllSeats && (
            <button
              onClick={() => onEditAllSeats(section)}
              className="p-2 text-purple-600 hover:bg-purple-50 rounded-lg transition-colors"
              disabled={loading}
              title="Edit all seats in section"
            >
              <Settings className="w-5 h-5" />
            </button>
          )}
          <button
            onClick={() => onEdit(section)}
            className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
            disabled={loading}
            title="Edit section name"
          >
            <Edit3 className="w-5 h-5" />
          </button>
          <button
            onClick={() => onDelete(section.id)}
            className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
            disabled={loading}
            title="Delete section"
          >
            <Trash2 className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Seats Grid for this section */}
      <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-2">
        {section.seats && section.seats.length > 0 ? (
          section.seats.map((seat) => {
            const isAvailable = seat.status === 'available';
            return (
              <div
                key={seat.id}
                onClick={() => onSeatClick(seat)}
                className={`aspect-square rounded-lg border-2 flex flex-col items-center justify-center p-1 cursor-pointer transition-all ${
                  isAvailable
                    ? 'border-green-500 bg-green-50 hover:bg-green-100'
                    : 'border-gray-300 bg-gray-100 hover:bg-gray-200'
                }`}
                title={`${seat.seat_number} - ${seat.type} - ${seat.status}`}
              >
                <Grid className={`w-4 h-4 mb-1 ${isAvailable ? 'text-green-600' : 'text-gray-400'}`} />
                <span className={`text-xs font-medium ${isAvailable ? 'text-green-700' : 'text-gray-600'}`}>
                  {seat.seat_number.split('-').pop()}
                </span>
              </div>
            );
          })
        ) : (
          <div className="col-span-full text-center py-4 text-gray-500">
            No seats in this section
          </div>
        )}
      </div>
    </div>
  );
}
