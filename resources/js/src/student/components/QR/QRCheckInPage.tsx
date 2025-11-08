import React, { useState } from 'react';
import { useApp } from '@/shared/contexts/AppContext';
import { useAuth } from '@/shared/contexts/AuthContext';
import QRScanner from './QRScanner';
import { CheckCircle, XCircle, Clock, MapPin, Calendar } from 'lucide-react';

const QRCheckInPage: React.FC = () => {
  const { bookings, libraries, seats } = useApp();
  const { user } = useAuth();
  const [scanResult, setScanResult] = useState<{ success: boolean; message: string } | null>(null);

  const activeBooking = bookings.find(b => 
    b.userId === user?.id && 
    (b.status === 'upcoming' || b.status === 'active')
  );

  const library = activeBooking ? libraries.find(lib => lib.id === activeBooking.libraryId) : null;
  const seat = activeBooking ? seats.find(s => s.id === activeBooking.seatId) : null;

  const handleScanComplete = (success: boolean, message: string) => {
    setScanResult({ success, message });
    
    // Clear result after 5 seconds
    setTimeout(() => {
      setScanResult(null);
    }, 5000);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-800">QR Check-In/Out</h1>
        <p className="text-gray-600 mt-1">Scan QR code to check in or check out of your seat</p>
      </div>

      {/* Scan Result */}
      {scanResult && (
        <div className={`rounded-lg p-4 ${
          scanResult.success 
            ? 'bg-green-50 border border-green-200' 
            : 'bg-red-50 border border-red-200'
        }`}>
          <div className="flex items-center">
            {scanResult.success ? (
              <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
            ) : (
              <XCircle className="w-5 h-5 text-red-600 mr-2" />
            )}
            <span className={`font-medium ${
              scanResult.success ? 'text-green-800' : 'text-red-800'
            }`}>
              {scanResult.message}
            </span>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* QR Scanner */}
        <div className="lg:col-span-2">
          <QRScanner onScanComplete={handleScanComplete} />
        </div>

        {/* Current Booking Info */}
        <div>
          {activeBooking ? (
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">Current Booking</h2>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Status</span>
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                    activeBooking.status === 'upcoming' 
                      ? 'bg-blue-100 text-blue-800'
                      : 'bg-green-100 text-green-800'
                  }`}>
                    {activeBooking.status === 'upcoming' ? 'Ready to Check In' : 'Checked In'}
                  </span>
                </div>

                <div className="space-y-3 text-sm">
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 text-gray-400 mr-2" />
                    <div>
                      <div className="font-medium text-gray-800">{library?.name}</div>
                      <div className="text-gray-600">Seat {seat?.seatNumber}</div>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 text-gray-400 mr-2" />
                    <div>
                      <div className="font-medium text-gray-800">{activeBooking.date}</div>
                      <div className="text-gray-600">
                        {activeBooking.startTime} - {activeBooking.endTime}
                      </div>
                    </div>
                  </div>

                  {activeBooking.status === 'upcoming' && activeBooking.autoReleaseTime && (
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 text-orange-400 mr-2" />
                      <div>
                        <div className="text-orange-600 text-xs">Auto-release in:</div>
                        <div className="text-orange-700 font-medium">
                          {new Date(activeBooking.autoReleaseTime).toLocaleTimeString()}
                        </div>
                      </div>
                    </div>
                  )}

                  {activeBooking.checkedInAt && (
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      <div>
                        <div className="text-green-600 text-xs">Checked in at:</div>
                        <div className="text-green-700 font-medium">
                          {new Date(activeBooking.checkedInAt).toLocaleTimeString()}
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* QR Code for this seat */}
                <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                  <div className="text-xs text-gray-600 mb-1">Expected QR Code:</div>
                  <div className="font-mono text-sm text-gray-800">{seat?.qrCode}</div>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="text-center py-8">
                <Clock className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                <h3 className="text-lg font-medium text-gray-800 mb-2">No Active Booking</h3>
                <p className="text-gray-600 text-sm">
                  You don't have any active bookings to check in to.
                </p>
                <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  Book a Seat
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Instructions */}
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-blue-800 mb-3">How to Use QR Check-In</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-blue-700">
          <div>
            <h4 className="font-medium mb-2">Check-In Process:</h4>
            <ol className="list-decimal list-inside space-y-1">
              <li>Arrive at your booked library</li>
              <li>Find your assigned seat</li>
              <li>Scan the QR code on the seat</li>
              <li>Confirm check-in successful</li>
            </ol>
          </div>
          <div>
            <h4 className="font-medium mb-2">Check-Out Process:</h4>
            <ol className="list-decimal list-inside space-y-1">
              <li>When ready to leave</li>
              <li>Scan the same QR code</li>
              <li>Confirm check-out</li>
              <li>Earn loyalty points!</li>
            </ol>
          </div>
        </div>
        
        <div className="mt-4 p-3 bg-blue-100 rounded-lg">
          <p className="text-blue-800 text-sm">
            <strong>Important:</strong> You must check in within 30 minutes of your booking time, 
            or your reservation will be automatically cancelled.
          </p>
        </div>
      </div>
    </div>
  );
};

export default QRCheckInPage;