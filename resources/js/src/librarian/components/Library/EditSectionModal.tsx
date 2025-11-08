import React from 'react';
import Modal from '@/shared/components/Modal';

interface SeatSection {
  id: number;
  name: string;
  total_seats: number;
  seats: any[];
  seats_count: number;
  available_seats: number;
  occupied_seats: number;
}

interface EditSectionModalProps {
  open: boolean;
  section: SeatSection | null;
  loading: boolean;
  onClose: () => void;
  onSave: () => void;
  onChange: (section: SeatSection) => void;
}

export default function EditSectionModal({
  open,
  section,
  loading,
  onClose,
  onSave,
  onChange,
}: EditSectionModalProps) {
  if (!section) return null;

  return (
    <Modal
      open={open}
      onClose={onClose}
      title="Edit Section"
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
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Section Name
          </label>
          <input
            type="text"
            value={section.name}
            onChange={(e) => onChange({ ...section, name: e.target.value })}
            placeholder="e.g., Silent Study Area"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Number of Seats
          </label>
          <input
            type="number"
            value={section.total_seats}
            onChange={(e) => onChange({ ...section, total_seats: parseInt(e.target.value) || 0 })}
            min="1"
            className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100 cursor-not-allowed"
            disabled
          />
          <p className="text-xs text-gray-500 mt-1">
            Note: Changing seat count is not allowed. Delete and recreate the section if needed.
          </p>
        </div>
      </div>
    </Modal>
  );
}
