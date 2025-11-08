import React from 'react';
import Modal from '@/shared/components/Modal';

interface EditSeatModalProps {
  open: boolean;
  seat: any | null;
  loading: boolean;
  onClose: () => void;
  onSave: () => void;
  onChange: (seat: any) => void;
}

export default function EditSeatModal({
  open,
  seat,
  loading,
  onClose,
  onSave,
  onChange,
}: EditSeatModalProps) {
  if (!seat) return null;

  return (
    <Modal
      open={open}
      onClose={onClose}
      title={`Edit Seat: ${seat.seat_number}`}
      maxWidth="2xl"
      footer={
        <>
          <button
            type="button"
            onClick={onSave}
            className="inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 sm:ml-3 sm:w-auto"
            disabled={loading}
          >
            {loading ? 'Saving...' : 'Save Changes'}
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
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Seat Number</label>
            <input
              type="text"
              value={seat.seat_number}
              onChange={(e) => onChange({...seat, seat_number: e.target.value})}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 bg-gray-100 cursor-not-allowed"
              disabled
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Type</label>
            <select
              value={seat.type}
              onChange={(e) => onChange({...seat, type: e.target.value})}
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
            <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
            <select
              value={seat.status}
              onChange={(e) => onChange({...seat, status: e.target.value})}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            >
              <option value="available">Available</option>
              <option value="maintenance">Maintenance</option>
              <option value="booked">Booked</option>
              <option value="occupied">Occupied</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Floor</label>
            <input
              type="number"
              value={seat.floor}
              onChange={(e) => onChange({...seat, floor: parseInt(e.target.value)})}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Power Outlets</label>
            <input
              type="number"
              value={seat.power_outlets}
              onChange={(e) => onChange({...seat, power_outlets: parseInt(e.target.value)})}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Max Occupancy</label>
            <input
              type="number"
              value={seat.max_occupancy}
              onChange={(e) => onChange({...seat, max_occupancy: parseInt(e.target.value)})}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="checkbox"
              checked={seat.near_window}
              onChange={(e) => onChange({...seat, near_window: e.target.checked})}
              className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            />
            <span className="text-sm font-medium text-gray-700">Near Window</span>
          </label>

          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="checkbox"
              checked={seat.has_computer}
              onChange={(e) => onChange({...seat, has_computer: e.target.checked})}
              className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            />
            <span className="text-sm font-medium text-gray-700">Has Computer</span>
          </label>
        </div>
      </div>
    </Modal>
  );
}
