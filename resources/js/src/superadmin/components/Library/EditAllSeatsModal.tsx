import React, { useState } from 'react';
import Modal from '@/shared/components/Modal';

interface SeatSection {
  id: number;
  name: string;
  total_seats: number;
  seats: any[];
}

interface EditAllSeatsModalProps {
  open: boolean;
  section: SeatSection | null;
  loading: boolean;
  onClose: () => void;
  onSave: (seatData: any) => void;
}

export default function EditAllSeatsModal({
  open,
  section,
  loading,
  onClose,
  onSave,
}: EditAllSeatsModalProps) {
  const [seatData, setSeatData] = useState({
    type: 'regular',
    floor: 1,
    near_window: false,
    power_outlets: 0,
    has_computer: false,
    max_occupancy: 1,
  });

  if (!section) return null;

  const handleSave = () => {
    onSave(seatData);
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      title={`Edit All Seats in ${section.name}`}
      maxWidth="2xl"
      footer={
        <>
          <button
            type="button"
            onClick={handleSave}
            className="inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 sm:ml-3 sm:w-auto"
            disabled={loading}
          >
            {loading ? 'Updating...' : 'Update All Seats'}
          </button>
          <button
            type="button"
            onClick={onClose}
            className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
            disabled={loading}
          >
            Cancel
          </button>
        </>
      }
    >
      <div className="space-y-4">
        <p className="text-sm text-gray-600">
          This will update all {section.total_seats} seats in this section with the same properties.
        </p>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Type</label>
            <select
              value={seatData.type}
              onChange={(e) => setSeatData({...seatData, type: e.target.value})}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            >
              <option value="regular">Regular</option>
              <option value="premium">Premium</option>
              <option value="group">Group</option>
              <option value="silent">Silent</option>
              <option value="collaborative">Collaborative</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Floor</label>
            <input
              type="number"
              value={seatData.floor}
              onChange={(e) => setSeatData({...seatData, floor: parseInt(e.target.value)})}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Power Outlets</label>
            <input
              type="number"
              value={seatData.power_outlets}
              onChange={(e) => setSeatData({...seatData, power_outlets: parseInt(e.target.value)})}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Max Occupancy</label>
            <input
              type="number"
              value={seatData.max_occupancy}
              onChange={(e) => setSeatData({...seatData, max_occupancy: parseInt(e.target.value)})}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="checkbox"
              checked={seatData.near_window}
              onChange={(e) => setSeatData({...seatData, near_window: e.target.checked})}
              className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            />
            <span className="text-sm font-medium text-gray-700">Near Window</span>
          </label>

          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="checkbox"
              checked={seatData.has_computer}
              onChange={(e) => setSeatData({...seatData, has_computer: e.target.checked})}
              className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            />
            <span className="text-sm font-medium text-gray-700">Has Computer</span>
          </label>
        </div>
      </div>
    </Modal>
  );
}
