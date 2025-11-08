import React, { useState } from 'react';
import { useApp } from '@/shared/contexts/AppContext';
import { useAuth } from '@/shared/contexts/AuthContext';
import { QrCode, Camera, CheckCircle, XCircle } from 'lucide-react';

interface QRScannerProps {
  onScanComplete: (success: boolean, message: string) => void;
}

const QRScanner: React.FC<QRScannerProps> = ({ onScanComplete }) => {
  const { checkInSeat, checkOutSeat, bookings } = useApp();
  const { user } = useAuth();
  const [isScanning, setIsScanning] = useState(false);
  const [manualCode, setManualCode] = useState('');

  // Mock QR scanner - in real app, this would use camera
  const handleScan = async (qrCode: string) => {
    setIsScanning(true);
    
    try {
      // Find active booking for this user
      const activeBooking = bookings.find(b => 
        b.userId === user?.id && 
        (b.status === 'upcoming' || b.status === 'active')
      );

      if (!activeBooking) {
        onScanComplete(false, 'No active booking found');
        return;
      }

      if (activeBooking.status === 'upcoming') {
        // Check in
        const success = await checkInSeat(activeBooking.id, qrCode);
        if (success) {
          onScanComplete(true, 'Successfully checked in!');
        } else {
          onScanComplete(false, 'Invalid QR code or seat mismatch');
        }
      } else if (activeBooking.status === 'active') {
        // Check out
        const success = await checkOutSeat(activeBooking.id);
        if (success) {
          onScanComplete(true, 'Successfully checked out!');
        } else {
          onScanComplete(false, 'Check out failed');
        }
      }
    } catch (error) {
      onScanComplete(false, 'Scan failed. Please try again.');
    } finally {
      setIsScanning(false);
    }
  };

  const handleManualEntry = () => {
    if (manualCode.trim()) {
      handleScan(manualCode.trim());
      setManualCode('');
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="text-center">
        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <QrCode className="w-8 h-8 text-blue-600" />
        </div>
        
        <h2 className="text-lg font-semibold text-gray-800 mb-2">QR Code Scanner</h2>
        <p className="text-gray-600 text-sm mb-6">
          Scan the QR code on your seat to check in or check out
        </p>

        {/* Mock Camera View */}
        <div className="bg-gray-100 rounded-lg p-8 mb-6 border-2 border-dashed border-gray-300">
          <Camera className="w-12 h-12 text-gray-400 mx-auto mb-3" />
          <p className="text-gray-500 text-sm">Camera view would appear here</p>
          <p className="text-gray-400 text-xs mt-1">Point camera at QR code</p>
        </div>

        {/* Manual Entry */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Or enter QR code manually:
            </label>
            <div className="flex space-x-2">
              <input
                type="text"
                value={manualCode}
                onChange={(e) => setManualCode(e.target.value)}
                placeholder="Enter QR code (e.g., QR-A01)"
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button
                onClick={handleManualEntry}
                disabled={isScanning || !manualCode.trim()}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isScanning ? 'Processing...' : 'Scan'}
              </button>
            </div>
          </div>

          {/* Demo QR Codes */}
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <h3 className="text-sm font-medium text-gray-700 mb-2">Demo QR Codes:</h3>
            <div className="flex flex-wrap gap-2">
              {['QR-A01', 'QR-A02', 'QR-A03', 'QR-B01', 'QR-B02'].map(code => (
                <button
                  key={code}
                  onClick={() => setManualCode(code)}
                  className="text-xs bg-white border border-gray-200 px-2 py-1 rounded hover:bg-gray-50 transition-colors"
                >
                  {code}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QRScanner;