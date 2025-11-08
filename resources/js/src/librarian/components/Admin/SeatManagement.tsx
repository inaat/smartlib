import React, { useState, useEffect } from 'react';
import { useAuth } from '@/shared/contexts/AuthContext';
import { useApp } from '@/shared/contexts/AppContext';
import { librarianAPI } from '@/shared/services/api';
import { Grid, Plus } from 'lucide-react';
import EditSectionModal from '@/librarian/components/Library/EditSectionModal';
import EditSeatModal from '@/librarian/components/Library/EditSeatModal';
import EditAllSeatsModal from '@/librarian/components/Library/EditAllSeatsModal';
import SectionCard from '@/librarian/components/Library/SectionCard';

interface SeatSection {
  id: number;
  name: string;
  total_seats: number;
  seats: any[];
  seats_count: number;
  available_seats: number;
  occupied_seats: number;
}

const SeatManagement: React.FC = () => {
  const { user } = useAuth();
  const { libraries } = useApp();
  const [sections, setSections] = useState<SeatSection[]>([]);

  // Get library from libraries array
  const library = libraries.find(lib => lib.id === user?.library_id);
  const [showAddSection, setShowAddSection] = useState(false);
  const [newSectionName, setNewSectionName] = useState('');
  const [newSectionSeats, setNewSectionSeats] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [editingSeat, setEditingSeat] = useState<any | null>(null);
  const [showEditSeat, setShowEditSeat] = useState(false);
  const [editingSection, setEditingSection] = useState<SeatSection | null>(null);
  const [showEditSection, setShowEditSection] = useState(false);
  const [editingAllSeatsSection, setEditingAllSeatsSection] = useState<SeatSection | null>(null);
  const [showEditAllSeats, setShowEditAllSeats] = useState(false);

  // Calculate total seats from sections
  const totalSeatsInSections = sections.reduce((sum, section) => sum + section.total_seats, 0);
  const maxCapacity = library?.capacity || library?.totalSeats || 100;

  useEffect(() => {
    if (user?.library_id) {
      loadSections();
    }
  }, [user?.library_id]);

  const loadSections = async () => {
    if (!user?.library_id) return;
    setLoading(true);
    setError('');
    try {
      const data = await librarianAPI.getSeatSections(user.library_id.toString());
      setSections(Array.isArray(data) ? data : []);
    } catch (err: any) {
      console.error('Failed to load sections:', err);
      setError(err.message || 'Failed to load sections');
      setSections([]);
    } finally {
      setLoading(false);
    }
  };

  const handleAddSection = async () => {
    if (!newSectionName.trim()) {
      alert('Please enter a section name');
      return;
    }
    if (newSectionSeats <= 0) {
      alert('Number of seats must be greater than 0');
      return;
    }
    if (totalSeatsInSections + newSectionSeats > maxCapacity) {
      alert(`Cannot add ${newSectionSeats} seats. Maximum capacity is ${maxCapacity}. Current total: ${totalSeatsInSections}`);
      return;
    }

    if (!user?.library_id) return;

    setLoading(true);
    setError('');
    try {
      await librarianAPI.createSeatSection(user.library_id.toString(), {
        name: newSectionName,
        total_seats: newSectionSeats,
      });
      setNewSectionName('');
      setNewSectionSeats(0);
      setShowAddSection(false);
      await loadSections();
    } catch (err: any) {
      console.error('Failed to create section:', err);
      alert(err.message || 'Failed to create section');
    } finally {
      setLoading(false);
    }
  };

  const handleEditSection = (section: SeatSection) => {
    setEditingSection(section);
    setShowEditSection(true);
  };

  const handleUpdateSection = async () => {
    if (!editingSection || !user?.library_id) return;

    if (!editingSection.name.trim()) {
      alert('Please enter a section name');
      return;
    }

    setLoading(true);
    setError('');
    try {
      await librarianAPI.updateSeatSection(
        user.library_id.toString(),
        editingSection.id.toString(),
        {
          name: editingSection.name,
          total_seats: editingSection.total_seats,
        }
      );
      setShowEditSection(false);
      setEditingSection(null);
      await loadSections();
    } catch (err: any) {
      console.error('Failed to update section:', err);
      alert(err.message || 'Failed to update section');
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteSection = async (sectionId: number) => {
    if (!confirm('Are you sure you want to delete this section? All seats in this section will be deleted.')) {
      return;
    }

    if (!user?.library_id) return;

    setLoading(true);
    setError('');
    try {
      await librarianAPI.deleteSeatSection(user.library_id.toString(), sectionId.toString());
      await loadSections();
    } catch (err: any) {
      console.error('Failed to delete section:', err);
      alert(err.message || 'Failed to delete section');
    } finally {
      setLoading(false);
    }
  };

  const handleEditSeat = (seat: any) => {
    setEditingSeat(seat);
    setShowEditSeat(true);
  };

  const handleSaveSeat = async () => {
    if (!editingSeat) return;

    setLoading(true);
    try {
      await librarianAPI.updateSeat(editingSeat.id.toString(), {
        type: editingSeat.type,
        status: editingSeat.status,
        floor: editingSeat.floor,
        near_window: editingSeat.near_window,
        power_outlets: editingSeat.power_outlets,
        has_computer: editingSeat.has_computer,
        max_occupancy: editingSeat.max_occupancy,
      });
      setShowEditSeat(false);
      setEditingSeat(null);
      await loadSections();
    } catch (err: any) {
      console.error('Failed to update seat:', err);
      alert(err.message || 'Failed to update seat');
    } finally {
      setLoading(false);
    }
  };

  const handleEditAllSeats = (section: SeatSection) => {
    setEditingAllSeatsSection(section);
    setShowEditAllSeats(true);
  };

  const handleSaveAllSeats = async (seatData: any) => {
    if (!editingAllSeatsSection) return;

    setLoading(true);
    try {
      // Update all seats in the section
      const updatePromises = editingAllSeatsSection.seats.map((seat) =>
        librarianAPI.updateSeat(seat.id.toString(), seatData)
      );
      await Promise.all(updatePromises);

      setShowEditAllSeats(false);
      setEditingAllSeatsSection(null);
      await loadSections();
    } catch (err: any) {
      console.error('Failed to update seats:', err);
      alert(err.message || 'Failed to update seats');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-xl font-semibold text-gray-800">
          {library?.name ? `${library.name} - Seat Management` : 'Seat Management'}
        </h2>
        <p className="text-gray-600 text-sm mt-1">Manage library seats organized by sections</p>
      </div>

      {/* Stats Summary */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          <div className="text-center">
            <p className="text-2xl font-bold text-gray-800">{maxCapacity}</p>
            <p className="text-sm text-gray-600">Max Capacity</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-blue-600">{totalSeatsInSections}</p>
            <p className="text-sm text-gray-600">Total Seats</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-green-600">
              {sections.reduce((sum, section) => {
                const available = section.seats?.filter(s => s.status === 'available').length || 0;
                return sum + available;
              }, 0)}
            </p>
            <p className="text-sm text-gray-600">Available</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-orange-600">
              {sections.reduce((sum, section) => {
                const booked = section.seats?.filter(s => s.status === 'booked').length || 0;
                return sum + booked;
              }, 0)}
            </p>
            <p className="text-sm text-gray-600">Booked</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-gray-600">
              {sections.reduce((sum, section) => {
                const occupied = section.seats?.filter(s => s.status === 'occupied').length || 0;
                return sum + occupied;
              }, 0)}
            </p>
            <p className="text-sm text-gray-600">Occupied</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-yellow-600">
              {sections.reduce((sum, section) => {
                const maintenance = section.seats?.filter(s => s.status === 'maintenance').length || 0;
                return sum + maintenance;
              }, 0)}
            </p>
            <p className="text-sm text-gray-600">Maintenance</p>
          </div>
        </div>

        {/* Capacity Warning */}
        {totalSeatsInSections > maxCapacity && (
          <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-sm text-red-700">
              Warning: Total seats ({totalSeatsInSections}) exceeds maximum capacity ({maxCapacity})
            </p>
          </div>
        )}
        {totalSeatsInSections < maxCapacity && (
          <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-sm text-blue-700">
              {maxCapacity - totalSeatsInSections} seats remaining to reach maximum capacity
            </p>
          </div>
        )}
      </div>

      {/* Add Section Button */}
      <div className="flex justify-end">
        <button
          onClick={() => setShowAddSection(!showAddSection)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
        >
          <Plus className="w-4 h-4" />
          <span>Add Section</span>
        </button>
      </div>

      {/* Add Section Form */}
      {showAddSection && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Add New Section</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Section Name
              </label>
              <input
                type="text"
                value={newSectionName}
                onChange={(e) => setNewSectionName(e.target.value)}
                placeholder="e.g., Silent Study Area"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Number of Seats
              </label>
              <input
                type="number"
                value={newSectionSeats || ''}
                onChange={(e) => setNewSectionSeats(parseInt(e.target.value) || 0)}
                min="1"
                max={maxCapacity - totalSeatsInSections}
                placeholder="e.g., 10"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <p className="text-xs text-gray-500 mt-1">
                Max: {maxCapacity - totalSeatsInSections} seats available
              </p>
            </div>
          </div>
          <div className="flex space-x-3 mt-4">
            <button
              onClick={handleAddSection}
              disabled={loading}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
            >
              Add Section
            </button>
            <button
              onClick={() => {
                setShowAddSection(false);
                setNewSectionName('');
                setNewSectionSeats(0);
              }}
              className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Loading State */}
      {loading && sections.length === 0 && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-12 text-center">
          <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading sections...</p>
        </div>
      )}

      {/* Error State */}
      {error && (
        <div className="bg-red-50 border border-red-200 rounded-xl p-4">
          <p className="text-red-700">{error}</p>
          <button
            onClick={loadSections}
            className="mt-2 text-red-600 hover:text-red-700 underline"
          >
            Try again
          </button>
        </div>
      )}

      {/* Sections List */}
      {!loading && !error && sections.length > 0 && (
        <div className="space-y-4">
          {sections.map((section) => (
            <SectionCard
              key={section.id}
              section={section}
              loading={loading}
              onEdit={handleEditSection}
              onDelete={handleDeleteSection}
              onSeatClick={handleEditSeat}
              onEditAllSeats={handleEditAllSeats}
            />
          ))}
        </div>
      )}

      {/* Empty State */}
      {!loading && !error && sections.length === 0 && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-12 text-center">
          <Grid className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-800 mb-2">No sections created yet</h3>
          <p className="text-gray-600 mb-4">
            Create sections to organize seats in your library
          </p>
          <button
            onClick={() => setShowAddSection(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center space-x-2"
          >
            <Plus className="w-4 h-4" />
            <span>Add First Section</span>
          </button>
        </div>
      )}

      {/* Legend */}
      {sections.length > 0 && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
          <div className="flex items-center justify-center flex-wrap gap-4">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 rounded border-2 border-green-500 bg-green-50"></div>
              <span className="text-sm text-gray-600">Available</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 rounded border-2 border-orange-500 bg-orange-50"></div>
              <span className="text-sm text-gray-600">Booked</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 rounded border-2 border-gray-300 bg-gray-100"></div>
              <span className="text-sm text-gray-600">Occupied</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 rounded border-2 border-yellow-500 bg-yellow-50"></div>
              <span className="text-sm text-gray-600">Maintenance</span>
            </div>
          </div>
        </div>
      )}

      {/* Edit Section Modal */}
      <EditSectionModal
        open={showEditSection}
        section={editingSection}
        loading={loading}
        onClose={() => {
          setShowEditSection(false);
          setEditingSection(null);
        }}
        onSave={handleUpdateSection}
        onChange={setEditingSection}
      />

      {/* Edit Seat Modal */}
      <EditSeatModal
        open={showEditSeat}
        seat={editingSeat}
        loading={loading}
        onClose={() => {
          setShowEditSeat(false);
          setEditingSeat(null);
        }}
        onSave={handleSaveSeat}
        onChange={setEditingSeat}
      />

      {/* Edit All Seats Modal */}
      <EditAllSeatsModal
        open={showEditAllSeats}
        section={editingAllSeatsSection}
        loading={loading}
        onClose={() => {
          setShowEditAllSeats(false);
          setEditingAllSeatsSection(null);
        }}
        onSave={handleSaveAllSeats}
      />
    </div>
  );
};

export default SeatManagement;
