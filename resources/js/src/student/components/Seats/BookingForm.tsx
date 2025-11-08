import React, { useState } from 'react';
import { useApp } from '@/shared/contexts/AppContext';
import { useAuth } from '@/shared/contexts/AuthContext';
import { Seat, Library } from '@/shared/types';
import { Calendar, Clock, User, CreditCard, QrCode } from 'lucide-react';
import { format, addDays } from 'date-fns';

interface BookingFormProps {
  seat: Seat;
  library: Library;
  onComplete: () => void;
}

const BookingForm: React.FC<BookingFormProps> = ({ seat, library, onComplete }) => {
  const { addBooking } = useApp();
  const { user } = useAuth();
  const [formData, setFormData] = useState({
    date: format(new Date(), 'yyyy-MM-dd'),
    startTime: '09:00',
    duration: '2'
  });
  const [isBooking, setIsBooking] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const timeSlots = [
    '08:00', '09:00', '10:00', '11:00', '12:00', '13:00',
    '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00'
  ];

  const durations = [
    { value: '1', label: '1 hour' },
    { value: '2', label: '2 hours' },
    { value: '3', label: '3 hours' },
    { value: '4', label: '4 hours' },
    { value: '6', label: '6 hours' },
    { value: '8', label: '8 hours' }
  ];

  const calculateEndTime = (startTime: string, duration: string) => {
    const [hours, minutes] = startTime.split(':').map(Number);
    const endHours = hours + parseInt(duration);
    return `${endHours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsBooking(true);

    try {
      // Simulate booking process
      await new Promise(resolve => setTimeout(resolve, 2000));

      const booking = {
        userId: user!.id,
        seatId: seat.id,
        libraryId: library.id,
        date: formData.date,
        startTime: formData.startTime,
        endTime: calculateEndTime(formData.startTime, formData.duration),
        status: 'upcoming' as const,
        checkedIn: false,
        qrCode: `QR-${Date.now()}`
      };

      addBooking(booking);
      setShowSuccess(true);
      
      setTimeout(() => {
        onComplete();
      }, 3000);
    } catch (error) {
      console.error('Booking failed:', error);
    } finally {
      setIsBooking(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (showSuccess) {
    return (
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="text-center py-8">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <QrCode className="w-8 h-8 text-green-600" />
          </div>
          <h3 className="text-lg font-semibold text-green-800 mb-2">Booking Confirmed!</h3>
          <p className="text-green-600 text-sm mb-4">
            Your seat has been successfully booked.
          </p>
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-sm text-green-700">
            <div><strong>Seat:</strong> {seat.seatNumber}</div>
            <div><strong>Date:</strong> {formData.date}</div>
            <div><strong>Time:</strong> {formData.startTime} - {calculateEndTime(formData.startTime, formData.duration)}</div>
            <div className="mt-2 text-xs text-green-600">
              Check in with QR code when you arrive
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Book Your Seat</h2>
      
      {/* Seat Info */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
        <h3 className="font-medium text-blue-800 mb-2">Seat {seat.seatNumber}</h3>
        <div className="text-sm text-blue-700 space-y-1">
          <div>Type: {seat.type}</div>
          <div>Amenities: {seat.amenities.join(', ')}</div>
          <div>Library: {library.name}</div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Date Selection */}
        <div>
          <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">
            <Calendar className="w-4 h-4 inline mr-1" />
            Select Date
          </label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            min={format(new Date(), 'yyyy-MM-dd')}
            max={format(addDays(new Date(), 7), 'yyyy-MM-dd')}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
        </div>

        {/* Time Selection */}
        <div>
          <label htmlFor="startTime" className="block text-sm font-medium text-gray-700 mb-2">
            <Clock className="w-4 h-4 inline mr-1" />
            Start Time
          </label>
          <select
            id="startTime"
            name="startTime"
            value={formData.startTime}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          >
            {timeSlots.map(time => (
              <option key={time} value={time}>{time}</option>
            ))}
          </select>
        </div>

        {/* Duration Selection */}
        <div>
          <label htmlFor="duration" className="block text-sm font-medium text-gray-700 mb-2">
            Duration
          </label>
          <select
            id="duration"
            name="duration"
            value={formData.duration}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          >
            {durations.map(duration => (
              <option key={duration.value} value={duration.value}>
                {duration.label}
              </option>
            ))}
          </select>
        </div>

        {/* Booking Summary */}
        <div className="bg-gray-50 rounded-lg p-4">
          <h3 className="font-medium text-gray-800 mb-2">Booking Summary</h3>
          <div className="text-sm text-gray-600 space-y-1">
            <div>Date: {formData.date}</div>
            <div>Time: {formData.startTime} - {calculateEndTime(formData.startTime, formData.duration)}</div>
            <div>Duration: {formData.duration} hours</div>
            <div>Seat: {seat.seatNumber} ({seat.type})</div>
          </div>
        </div>

        {/* Subscription Info */}
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm font-medium text-green-800">Your Plan: {user?.subscriptionPlan?.replace('_', ' ')}</div>
              <div className="text-xs text-green-600 mt-1">This booking is included in your plan</div>
            </div>
            <CreditCard className="w-5 h-5 text-green-600" />
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isBooking}
          className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isBooking ? 'Booking...' : 'Confirm Booking'}
        </button>
      </form>
    </div>
  );
};

export default BookingForm;