import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '@/shared/contexts/AppContext';
import { useAuth } from '@/shared/contexts/AuthContext';
import { adminAPI } from '@/shared/services/api';
import {
  MapPin,
  Plus,
  Edit3,
  Trash2,
  Users,
  Clock,
  Wifi,
  Car,
  Coffee,
  BookOpen,
  Settings
} from 'lucide-react';

const LibraryManagement: React.FC = () => {
  const navigate = useNavigate();
  const { libraries, addLibrary, updateLibrary } = useApp();
  const { user } = useAuth();
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingLibrary, setEditingLibrary] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    photo: '',
    address: '',
    totalSeats: 100,
    openingHours: '8:00 AM - 10:00 PM',
    facilities: [] as string[],
    latitude: 24.8607,
    longitude: 67.0011,
    wifiPassword: '',
    parkingAvailable: false,
    operatingDays: [] as string[],
    rules: [] as string[],
    specialFeatures: [] as string[],
    contactInfo: { phone: '', email: '', website: '' },
  });
  const [photoFile, setPhotoFile] = useState<File | null>(null);
  const [newRule, setNewRule] = useState('');
  const [newFeature, setNewFeature] = useState('');

  // Debug logs
  console.log('LibraryManagement - libraries:', libraries);
  console.log('LibraryManagement - libraries.length:', libraries.length);
  console.log('LibraryManagement - user:', user);

  // Filter libraries based on admin access
  const accessibleLibraries = user?.role === 'super_admin'
    ? libraries
    : libraries.filter(lib => user?.libraryAccess?.includes(lib.id));

  console.log('LibraryManagement - accessibleLibraries:', accessibleLibraries);
  console.log('LibraryManagement - accessibleLibraries.length:', accessibleLibraries.length);

  const facilityOptions = [
    { id: 'wifi', label: 'WiFi', icon: Wifi },
    { id: 'ac', label: 'Air Conditioning', icon: Settings },
    { id: 'parking', label: 'Parking', icon: Car },
    { id: 'cafe', label: 'Cafe', icon: Coffee },
    { id: 'printing', label: 'Printing', icon: BookOpen },
    { id: 'study_rooms', label: 'Study Rooms', icon: Users },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      if (photoFile) {
        // Handle file upload with FormData
        const formDataToSend = new FormData();
        formDataToSend.append('name', formData.name);
        formDataToSend.append('description', formData.description);
        formDataToSend.append('address', formData.address);
        formDataToSend.append('capacity', formData.totalSeats.toString());
        formDataToSend.append('opening_hours', formData.openingHours);
        formDataToSend.append('latitude', formData.latitude.toString());
        formDataToSend.append('longitude', formData.longitude.toString());
        formDataToSend.append('wifi_password', formData.wifiPassword);
        formDataToSend.append('parking_available', formData.parkingAvailable ? '1' : '0');

        // Append array fields properly for Laravel
        formData.facilities.forEach((facility, index) => {
          formDataToSend.append(`facilities[${index}]`, facility);
        });
        formData.operatingDays.forEach((day, index) => {
          formDataToSend.append(`operating_days[${index}]`, day);
        });
        formData.rules.forEach((rule, index) => {
          formDataToSend.append(`rules[${index}]`, rule);
        });
        formData.specialFeatures.forEach((feature, index) => {
          formDataToSend.append(`special_features[${index}]`, feature);
        });

        // Append contact info as nested fields
        formDataToSend.append('contact_info[phone]', formData.contactInfo.phone);
        formDataToSend.append('contact_info[email]', formData.contactInfo.email);
        formDataToSend.append('contact_info[website]', formData.contactInfo.website);

        formDataToSend.append('photo', photoFile);

        if (editingLibrary) {
          formDataToSend.append('_method', 'PUT'); // Laravel method spoofing for file uploads
          await adminAPI.updateLibrary(editingLibrary, formDataToSend);
        } else {
          await adminAPI.createLibrary(formDataToSend);
        }
      } else {
        // Handle without file upload (JSON)
        if (editingLibrary) {
          updateLibrary(editingLibrary, {
            ...formData,
            availableSeats: formData.totalSeats
          });
        } else {
          addLibrary({
            ...formData,
            availableSeats: formData.totalSeats,
            capacity: formData.totalSeats,
            currentOccupancy: 0,
            isActive: true
          });
        }
      }

      setShowAddForm(false);
      setEditingLibrary(null);
      resetForm();

      // Refresh the libraries list
      window.location.reload();
    } catch (error: any) {
      console.error('Failed to save library:', error);
      alert(error.response?.data?.message || 'Failed to save library');
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      description: '',
      photo: '',
      address: '',
      totalSeats: 100,
      openingHours: '8:00 AM - 10:00 PM',
      facilities: [],
      latitude: 24.8607,
      longitude: 67.0011,
      wifiPassword: '',
      parkingAvailable: false,
      operatingDays: [],
      rules: [],
      specialFeatures: [],
      contactInfo: { phone: '', email: '', website: '' },
    });
    setPhotoFile(null);
    setNewRule('');
    setNewFeature('');
  };

  const handleEdit = (library: any) => {
    console.log('=== EDITING LIBRARY ===');
    console.log('Full library object:', library);
    console.log('library.name:', library.name);
    console.log('library.address:', library.address);
    console.log('library.totalSeats:', library.totalSeats);
    console.log('library.capacity:', library.capacity);
    console.log('library.opening_hours:', library.opening_hours);
    console.log('library.openingHours:', library.openingHours);
    console.log('library.facilities:', library.facilities);
    console.log('library.coordinates:', library.coordinates);
    console.log('library.latitude:', library.latitude);
    console.log('library.longitude:', library.longitude);

    // Map facility names to facility IDs
    const facilityMap: Record<string, string> = {
      'WiFi': 'wifi',
      'Air Conditioning': 'ac',
      'AC': 'ac',
      'Parking': 'parking',
      'Cafe': 'cafe',
      'Printing': 'printing',
      'Study Rooms': 'study_rooms',
      'Group Study Rooms': 'study_rooms',
      'Silent Zone': 'study_rooms',
      'Computer Lab': 'printing',
      'Research Lab': 'study_rooms'
    };

    // Convert library facilities array to facility IDs
    const libraryFacilities = library.facilities || [];
    console.log('libraryFacilities:', libraryFacilities);
    const mappedFacilities = libraryFacilities.map((f: string) => facilityMap[f] || f).filter(Boolean);
    console.log('mappedFacilities:', mappedFacilities);

    const newFormData = {
      name: library.name || '',
      description: library.description || '',
      photo: library.photo || '',
      address: library.address || '',
      totalSeats: library.totalSeats || library.capacity || 100,
      openingHours: library.opening_hours || library.openingHours || '8:00 AM - 10:00 PM',
      facilities: mappedFacilities,
      latitude: parseFloat(library.latitude) || 24.8607,
      longitude: parseFloat(library.longitude) || 67.0011,
      wifiPassword: library.wifi_password || library.wifiPassword || '',
      parkingAvailable: library.parking_available || library.parkingAvailable || false,
      operatingDays: library.operating_days || library.operatingDays || [],
      rules: library.rules || [],
      specialFeatures: library.special_features || library.specialFeatures || [],
      contactInfo: library.contact_info || library.contactInfo || { phone: '', email: '', website: '' },
    };

    console.log('New form data:', newFormData);
    setFormData(newFormData);
    setPhotoFile(null);
    setNewRule('');
    setNewFeature('');
    setEditingLibrary(library.id);
    setShowAddForm(true);
  };

  const handleFacilityToggle = (facilityId: string) => {
    setFormData(prev => ({
      ...prev,
      facilities: prev.facilities.includes(facilityId)
        ? prev.facilities.filter(f => f !== facilityId)
        : [...prev.facilities, facilityId]
    }));
  };

  const getOccupancyColor = (occupancyRate: number) => {
    if (occupancyRate > 80) return 'text-red-600 bg-red-100';
    if (occupancyRate > 60) return 'text-orange-600 bg-orange-100';
    return 'text-green-600 bg-green-100';
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-gray-800">Library Management</h2>
          <p className="text-gray-600 text-sm mt-1">
            {user?.role === 'super_admin' ? 'Manage all libraries' : 'Manage your assigned libraries'}
          </p>
        </div>
        
        {user?.role === 'super_admin' && (
          <button
            onClick={() => setShowAddForm(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
          >
            <Plus className="w-4 h-4" />
            <span>Add Library</span>
          </button>
        )}
      </div>

      {/* Add/Edit Form */}
      {showAddForm && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            {editingLibrary ? 'Edit Library' : 'Add New Library'}
          </h3>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Library Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Total Seats
                </label>
                <input
                  type="number"
                  value={formData.totalSeats}
                  onChange={(e) => setFormData(prev => ({ ...prev, totalSeats: parseInt(e.target.value) }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                  min="1"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Description
              </label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                rows={3}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Photo
              </label>
              {formData.photo && !photoFile && (
                <div className="mb-2">
                  <img src={`/storage/${formData.photo}`} alt="Library" className="h-20 w-20 object-cover rounded" />
                </div>
              )}
              <input
                type="file"
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) {
                    setPhotoFile(file);
                  }
                }}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              {photoFile && (
                <p className="text-sm text-gray-600 mt-1">Selected: {photoFile.name}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Address
              </label>
              <input
                type="text"
                value={formData.address}
                onChange={(e) => setFormData(prev => ({ ...prev, address: e.target.value }))}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Latitude
                </label>
                <input
                  type="number"
                  step="0.000001"
                  value={formData.latitude}
                  onChange={(e) => setFormData(prev => ({ ...prev, latitude: parseFloat(e.target.value) }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Longitude
                </label>
                <input
                  type="number"
                  step="0.000001"
                  value={formData.longitude}
                  onChange={(e) => setFormData(prev => ({ ...prev, longitude: parseFloat(e.target.value) }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Opening Hours
              </label>
              <input
                type="text"
                value={formData.openingHours}
                onChange={(e) => setFormData(prev => ({ ...prev, openingHours: e.target.value }))}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="e.g., 8:00 AM - 10:00 PM"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  WiFi Password
                </label>
                <input
                  type="text"
                  value={formData.wifiPassword}
                  onChange={(e) => setFormData(prev => ({ ...prev, wifiPassword: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="flex items-center space-x-2 cursor-pointer mt-8">
                  <input
                    type="checkbox"
                    checked={formData.parkingAvailable}
                    onChange={(e) => setFormData(prev => ({ ...prev, parkingAvailable: e.target.checked }))}
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-sm font-medium text-gray-700">Parking Available</span>
                </label>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Facilities
              </label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {facilityOptions.map((facility) => (
                  <label key={facility.id} className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.facilities.includes(facility.id)}
                      onChange={() => handleFacilityToggle(facility.id)}
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <facility.icon className="w-4 h-4 text-gray-600" />
                    <span className="text-sm text-gray-700">{facility.label}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Operating Days
              </label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day) => (
                  <label key={day} className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.operatingDays.includes(day)}
                      onChange={() => {
                        setFormData(prev => ({
                          ...prev,
                          operatingDays: prev.operatingDays.includes(day)
                            ? prev.operatingDays.filter(d => d !== day)
                            : [...prev.operatingDays, day]
                        }));
                      }}
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="text-sm text-gray-700">{day}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  value={formData.contactInfo.phone}
                  onChange={(e) => setFormData(prev => ({ ...prev, contactInfo: { ...prev.contactInfo, phone: e.target.value } }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={formData.contactInfo.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, contactInfo: { ...prev.contactInfo, email: e.target.value } }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Website
                </label>
                <input
                  type="url"
                  value={formData.contactInfo.website}
                  onChange={(e) => setFormData(prev => ({ ...prev, contactInfo: { ...prev.contactInfo, website: e.target.value } }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Rules
              </label>
              <div className="space-y-2">
                {formData.rules.map((rule, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <span className="flex-1 px-3 py-2 bg-gray-50 rounded border">{rule}</span>
                    <button
                      type="button"
                      onClick={() => setFormData(prev => ({ ...prev, rules: prev.rules.filter((_, i) => i !== index) }))}
                      className="text-red-600 hover:text-red-700"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
                <div className="flex space-x-2">
                  <input
                    type="text"
                    value={newRule}
                    onChange={(e) => setNewRule(e.target.value)}
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        e.preventDefault();
                        if (newRule.trim()) {
                          setFormData(prev => ({ ...prev, rules: [...prev.rules, newRule.trim()] }));
                          setNewRule('');
                        }
                      }
                    }}
                    placeholder="Add a rule..."
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      if (newRule.trim()) {
                        setFormData(prev => ({ ...prev, rules: [...prev.rules, newRule.trim()] }));
                        setNewRule('');
                      }
                    }}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center"
                    disabled={!newRule.trim()}
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Special Features
              </label>
              <div className="space-y-2">
                {formData.specialFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <span className="flex-1 px-3 py-2 bg-gray-50 rounded border">{feature}</span>
                    <button
                      type="button"
                      onClick={() => setFormData(prev => ({ ...prev, specialFeatures: prev.specialFeatures.filter((_, i) => i !== index) }))}
                      className="text-red-600 hover:text-red-700"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
                <div className="flex space-x-2">
                  <input
                    type="text"
                    value={newFeature}
                    onChange={(e) => setNewFeature(e.target.value)}
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        e.preventDefault();
                        if (newFeature.trim()) {
                          setFormData(prev => ({ ...prev, specialFeatures: [...prev.specialFeatures, newFeature.trim()] }));
                          setNewFeature('');
                        }
                      }
                    }}
                    placeholder="Add a special feature..."
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      if (newFeature.trim()) {
                        setFormData(prev => ({ ...prev, specialFeatures: [...prev.specialFeatures, newFeature.trim()] }));
                        setNewFeature('');
                      }
                    }}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center"
                    disabled={!newFeature.trim()}
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            <div className="flex space-x-3 pt-4">
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                {editingLibrary ? 'Update Library' : 'Add Library'}
              </button>
              <button
                type="button"
                onClick={() => {
                  setShowAddForm(false);
                  setEditingLibrary(null);
                  resetForm();
                }}
                className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}


      {/* Libraries Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {accessibleLibraries.map((library) => {
          const totalSeats = library.totalSeats || library.capacity || 0;
          const availableSeats = library.availableSeats ?? 0;
          const currentOccupancy = library.currentOccupancy ?? 0;
          const occupancyRate = totalSeats > 0 ? (currentOccupancy / totalSeats) * 100 : 0;
          
          return (
            <div key={library.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-semibold text-gray-800">{library.name}</h3>
                  <div className="flex items-center text-gray-600 text-sm mt-1">
                    <MapPin className="w-4 h-4 mr-1" />
                    {library.address}
                  </div>
                </div>
                
                {user?.role === 'super_admin' && (
                  <div className="flex space-x-1">
                    <button
                      onClick={() => handleEdit(library)}
                      className="p-1 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded"
                    >
                      <Edit3 className="w-4 h-4" />
                    </button>
                    <button className="p-1 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                )}
              </div>

              {/* Stats */}
              <div className="space-y-3 mb-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Capacity</span>
                  <span className="text-sm font-medium text-gray-800">
                    {totalSeats}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Occupancy</span>
                  <span className={`text-xs font-medium px-2 py-1 rounded-full ${getOccupancyColor(occupancyRate)}`}>
                    {Math.round(occupancyRate)}%
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Available Now</span>
                  <span className="text-sm font-medium text-green-600">
                    {availableSeats}
                  </span>
                </div>

                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full transition-all duration-300 ${
                      occupancyRate > 80 ? 'bg-red-500' :
                      occupancyRate > 60 ? 'bg-orange-500' : 'bg-green-500'
                    }`}
                    style={{ width: `${occupancyRate}%` }}
                  ></div>
                </div>
              </div>

              {/* Opening Hours */}
              <div className="flex items-center text-gray-600 text-sm mb-4">
                <Clock className="w-4 h-4 mr-1" />
                {library.opening_hours || library.openingHours || 'Not specified'}
              </div>

              {/* Facilities */}
              <div className="mb-4">
                <div className="flex flex-wrap gap-1">
                  {(() => {
                    const facilities = Array.isArray(library.facilities)
                      ? library.facilities
                      : typeof library.facilities === 'string'
                      ? JSON.parse(library.facilities || '[]')
                      : [];

                    return (
                      <>
                        {facilities.slice(0, 3).map((facility, idx) => (
                          <span key={idx} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">
                            {facility}
                          </span>
                        ))}
                        {facilities.length > 3 && (
                          <span className="text-xs text-gray-500 px-2 py-1">
                            +{facilities.length - 3} more
                          </span>
                        )}
                        {facilities.length === 0 && (
                          <span className="text-xs text-gray-400">No facilities listed</span>
                        )}
                      </>
                    );
                  })()}
                </div>
              </div>

              {/* Actions */}
              <div className="flex space-x-2">
                <button
                  onClick={() => navigate(`/superadmin/libraries/${library.id}`)}
                  className="flex-1 bg-blue-600 text-white py-2 px-3 rounded-lg hover:bg-blue-700 transition-colors text-sm"
                >
                  View Details
                </button>
                <button
                  onClick={() => navigate(`/superadmin/libraries/${library.id}?tab=seats`)}
                  className="flex-1 border border-gray-300 text-gray-700 py-2 px-3 rounded-lg hover:bg-gray-50 transition-colors text-sm"
                >
                  Manage Seats
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {accessibleLibraries.length === 0 && (
        <div className="text-center py-12">
          <MapPin className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-800 mb-2">No libraries found</h3>
          <p className="text-gray-600">
            {user?.role === 'super_admin' 
              ? 'Add your first library to get started' 
              : 'No libraries assigned to you'}
          </p>
        </div>
      )}
    </div>
  );
};

export default LibraryManagement;