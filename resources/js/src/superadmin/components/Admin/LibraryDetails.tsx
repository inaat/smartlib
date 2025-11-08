import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, useSearchParams } from 'react-router-dom';
import { useApp } from '@/shared/contexts/AppContext';
import { adminAPI } from '@/shared/services/api';
import { ArrowLeft, MapPin, Clock, Wifi, Phone, Mail, Globe, Calendar, Grid, Plus } from 'lucide-react';
import EditSectionModal from '@/superadmin/components/Library/EditSectionModal';
import EditSeatModal from '@/superadmin/components/Library/EditSeatModal';
import EditAllSeatsModal from '@/superadmin/components/Library/EditAllSeatsModal';
import SectionCard from '@/superadmin/components/Library/SectionCard';

interface SeatSection {
  id: number;
  name: string;
  total_seats: number;
  seats: any[];
  seats_count: number;
  available_seats: number;
  occupied_seats: number;
}

const LibraryDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { libraries } = useApp();
  const [activeTab, setActiveTab] = useState<'details' | 'seats'>('details');
  const [sections, setSections] = useState<SeatSection[]>([]);
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

  const library = libraries.find(lib => lib.id === parseInt(id || '0'));

  // Calculate total seats from sections
  const totalSeatsInSections = sections.reduce((sum, section) => sum + section.total_seats, 0);
  const maxCapacity = library?.capacity || library?.totalSeats || 100;

  // Load sections when tab changes to seats
  useEffect(() => {
    if (activeTab === 'seats' && id) {
      loadSections();
    }
  }, [activeTab, id]);

  // Check URL params for tab
  useEffect(() => {
    const tab = searchParams.get('tab');
    if (tab === 'seats') {
      setActiveTab('seats');
    }
  }, [searchParams]);

  const loadSections = async () => {
    if (!id) return;
    setLoading(true);
    setError('');
    try {
      const data = await adminAPI.getSeatSections(id);
      setSections(data);
    } catch (err: any) {
      console.error('Failed to load sections:', err);
      setError(err.message || 'Failed to load sections');
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

    if (!id) return;

    setLoading(true);
    setError('');
    try {
      await adminAPI.createSeatSection(id, {
        name: newSectionName,
        total_seats: newSectionSeats,
      });
      setNewSectionName('');
      setNewSectionSeats(0);
      setShowAddSection(false);
      await loadSections(); // Reload sections
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
    if (!editingSection || !id) return;

    if (!editingSection.name.trim()) {
      alert('Please enter a section name');
      return;
    }

    setLoading(true);
    setError('');
    try {
      await adminAPI.updateSeatSection(id, editingSection.id.toString(), {
        name: editingSection.name,
        total_seats: editingSection.total_seats,
      });
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

    if (!id) return;

    setLoading(true);
    setError('');
    try {
      await adminAPI.deleteSeatSection(id, sectionId.toString());
      await loadSections(); // Reload sections
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
      await adminAPI.updateSeat(editingSeat.id.toString(), {
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
        adminAPI.updateSeat(seat.id.toString(), seatData)
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

  if (!library) {
    return (
      <div className="text-center py-12">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Library not found</h2>
        <button
          onClick={() => navigate('/admin/libraries')}
          className="text-blue-600 hover:text-blue-700"
        >
          Back to Libraries
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center space-x-4">
        <button
          onClick={() => navigate('/admin/libraries')}
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <div>
          <h2 className="text-2xl font-semibold text-gray-800">{library.name}</h2>
          <p className="text-gray-600 text-sm mt-1">Library Management</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="flex border-b border-gray-200">
          <button
            onClick={() => setActiveTab('details')}
            className={`flex-1 px-6 py-3 text-sm font-medium transition-colors ${
              activeTab === 'details'
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            Details
          </button>
          <button
            onClick={() => setActiveTab('seats')}
            className={`flex-1 px-6 py-3 text-sm font-medium transition-colors ${
              activeTab === 'seats'
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            Seats Management
          </button>
        </div>
      </div>

      {/* Tab Content */}
      {activeTab === 'details' ? (
        /* Details Tab Content */
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Main Info */}
        <div className="lg:col-span-2 space-y-6">
          {/* Photo */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            {library.photo ? (
              <img
                src={`/storage/${library.photo}`}
                alt={library.name}
                className="w-full h-80 object-cover"
                onError={(e) => {
                  // Prevent infinite loop - only replace once
                  if (!e.currentTarget.dataset.fallback) {
                    e.currentTarget.dataset.fallback = 'true';
                    e.currentTarget.style.display = 'none';
                    // Show fallback div instead
                    const fallbackDiv = e.currentTarget.nextElementSibling as HTMLElement;
                    if (fallbackDiv) {
                      fallbackDiv.style.display = 'flex';
                    }
                  }
                }}
              />
            ) : null}
            <div className="w-full h-80 bg-gray-100 flex items-center justify-center" style={{ display: library.photo ? 'none' : 'flex' }}>
              <div className="text-center">
                <svg className="w-16 h-16 text-gray-400 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="text-gray-500 text-sm">No photo available</p>
              </div>
            </div>
          </div>

          {/* Description */}
          {library.description && (
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">About</h3>
              <p className="text-gray-600 leading-relaxed">{library.description}</p>
            </div>
          )}

          {/* Facilities */}
          {library.facilities && library.facilities.length > 0 && (
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Facilities</h3>
              <div className="flex flex-wrap gap-2">
                {library.facilities.map((facility: string, index: number) => (
                  <span key={`facility-${index}-${facility}`} className="bg-blue-50 text-blue-700 px-4 py-2 rounded-lg text-sm font-medium">
                    {facility}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Rules */}
          {library.rules && library.rules.length > 0 && (
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Library Rules</h3>
              <ul className="space-y-2">
                {library.rules.map((rule: string, index: number) => (
                  <li key={index} className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span className="text-gray-600">{rule}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Special Features */}
          {library.special_features && library.special_features.length > 0 && (
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Special Features</h3>
              <div className="flex flex-wrap gap-2">
                {library.special_features.map((feature: string, index: number) => (
                  <span key={`feature-${index}-${feature}`} className="bg-green-50 text-green-700 px-4 py-2 rounded-lg text-sm font-medium">
                    ✨ {feature}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right Column - Quick Info */}
        <div className="space-y-6">
          {/* Quick Stats */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Stats</h3>
            <div className="space-y-4">
              <div>
                <span className="text-sm text-gray-600">Total Capacity</span>
                <p className="text-2xl font-bold text-gray-800">{library.capacity || library.totalSeats}</p>
              </div>
              <div>
                <span className="text-sm text-gray-600">Available Now</span>
                <p className="text-2xl font-bold text-green-600">{library.availableSeats}</p>
              </div>
              <div>
                <span className="text-sm text-gray-600">Current Occupancy</span>
                <p className="text-2xl font-bold text-orange-600">{library.currentOccupancy}</p>
              </div>
            </div>
          </div>

          {/* Location & Contact */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Location & Contact</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-gray-400 mt-0.5" />
                <div>
                  <span className="text-sm text-gray-600">Address</span>
                  <p className="text-gray-800">{library.address}</p>
                </div>
              </div>

              {library.contact_info?.phone && (
                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-gray-400 mt-0.5" />
                  <div>
                    <span className="text-sm text-gray-600">Phone</span>
                    <p className="text-gray-800">{library.contact_info.phone}</p>
                  </div>
                </div>
              )}

              {library.contact_info?.email && (
                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-gray-400 mt-0.5" />
                  <div>
                    <span className="text-sm text-gray-600">Email</span>
                    <p className="text-gray-800">{library.contact_info.email}</p>
                  </div>
                </div>
              )}

              {library.contact_info?.website && (
                <div className="flex items-start space-x-3">
                  <Globe className="w-5 h-5 text-gray-400 mt-0.5" />
                  <div>
                    <span className="text-sm text-gray-600">Website</span>
                    <a href={library.contact_info.website} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700">
                      Visit Website
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Operating Hours */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Operating Hours</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-gray-400" />
                <p className="text-gray-800">{library.opening_hours}</p>
              </div>

              {library.operating_days && library.operating_days.length > 0 && (
                <div className="flex items-start space-x-3">
                  <Calendar className="w-5 h-5 text-gray-400 mt-0.5" />
                  <div>
                    <span className="text-sm text-gray-600">Operating Days</span>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {library.operating_days.map((day: string) => (
                        <span key={day} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                          {day.substring(0, 3)}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* WiFi & Parking */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Amenities</h3>
            <div className="space-y-3">
              {library.wifi_password && (
                <div>
                  <div className="flex items-center space-x-2 mb-1">
                    <Wifi className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-600">WiFi Password</span>
                  </div>
                  <p className="text-gray-800 font-mono bg-gray-50 px-3 py-2 rounded text-sm">
                    {library.wifi_password}
                  </p>
                </div>
              )}

              <div>
                <span className="text-sm text-gray-600">Parking</span>
                <p className="text-gray-800 font-medium">
                  {library.parking_available ? '✅ Available' : '❌ Not Available'}
                </p>
              </div>
            </div>
          </div>

          {/* Coordinates */}
          {library.latitude && library.longitude && (
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Coordinates</h3>
              <div className="space-y-2">
                <div>
                  <span className="text-sm text-gray-600">Latitude</span>
                  <p className="text-gray-800 font-mono">{library.latitude}</p>
                </div>
                <div>
                  <span className="text-sm text-gray-600">Longitude</span>
                  <p className="text-gray-800 font-mono">{library.longitude}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      ) : (
        /* Seats Tab Content */
        <div className="space-y-6">
          {/* Stats Summary */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="grid grid-cols-4 gap-4">
              <div className="text-center">
                <p className="text-2xl font-bold text-gray-800">{maxCapacity}</p>
                <p className="text-sm text-gray-600">Max Capacity</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-blue-600">{totalSeatsInSections}</p>
                <p className="text-sm text-gray-600">Total Seats</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-green-600">{library.availableSeats}</p>
                <p className="text-sm text-gray-600">Available</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-orange-600">{library.currentOccupancy}</p>
                <p className="text-sm text-gray-600">Occupied</p>
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
              <div className="grid grid-cols-2 gap-4">
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
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
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
          {loading && (
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
          {!loading && !error && (
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

          {sections.length === 0 && (
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
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
            <div className="flex items-center justify-center space-x-6">
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 rounded border-2 border-green-500 bg-green-50"></div>
                <span className="text-sm text-gray-600">Available</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 rounded border-2 border-gray-300 bg-gray-100"></div>
                <span className="text-sm text-gray-600">Occupied</span>
              </div>
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

export default LibraryDetails;
