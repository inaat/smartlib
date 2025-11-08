import React, { useState, useEffect } from 'react';
import { useAuth } from '@/shared/contexts/AuthContext';
import { useApp } from '@/shared/contexts/AppContext';
import { librarianAPI } from '@/shared/services/api';
import {
  Calendar,
  Plus,
  Search,
  Edit3,
  Trash2,
  Eye,
  MapPin,
  Clock,
  Users,
  DollarSign,
  Image as ImageIcon
} from 'lucide-react';

const EventManagement: React.FC = () => {
  const { user } = useAuth();
  const { libraries } = useApp();
  const [events, setEvents] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingEvent, setEditingEvent] = useState<string | null>(null);
  const [viewingEvent, setViewingEvent] = useState<any>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>('');

  const library = libraries.find(lib => lib.id === user?.library_id);

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '',
    start_time: '',
    end_time: '',
    venue: '',
    type: 'Workshop',
    capacity: '',
    is_paid: false,
    price: '',
    is_active: true,
  });

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      setLoading(true);
      const data = await librarianAPI.getEvents();
      setEvents(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error('Failed to fetch events:', error);
      setEvents([]);
    } finally {
      setLoading(false);
    }
  };

  const filteredEvents = events.filter(event =>
    event.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    event.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    event.venue?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('title', formData.title);
      formDataToSend.append('description', formData.description);
      formDataToSend.append('date', formData.date);
      formDataToSend.append('start_time', formData.start_time);
      formDataToSend.append('end_time', formData.end_time);
      formDataToSend.append('venue', formData.venue);
      formDataToSend.append('type', formData.type);
      formDataToSend.append('capacity', formData.capacity);
      formDataToSend.append('is_paid', formData.is_paid ? '1' : '0');
      if (formData.is_paid && formData.price) {
        formDataToSend.append('price', formData.price);
      }
      formDataToSend.append('is_active', formData.is_active ? '1' : '0');

      if (imageFile) {
        formDataToSend.append('image', imageFile);
      }

      if (editingEvent) {
        await librarianAPI.updateEvent(editingEvent, formDataToSend);
      } else {
        await librarianAPI.createEvent(formDataToSend);
      }

      setShowAddForm(false);
      resetForm();
      fetchEvents();
    } catch (error: any) {
      console.error('Failed to save event:', error);
      alert(error.response?.data?.message || 'Failed to save event. Please try again.');
    }
  };

  const resetForm = () => {
    setFormData({
      title: '',
      description: '',
      date: '',
      start_time: '',
      end_time: '',
      venue: '',
      type: 'Workshop',
      capacity: '',
      is_paid: false,
      price: '',
      is_active: true,
    });
    setImageFile(null);
    setImagePreview('');
    setEditingEvent(null);
  };

  const handleEdit = (event: any) => {
    // Format date to YYYY-MM-DD for HTML5 date input
    let formattedDate = '';
    if (event.date) {
      // Parse the date and format it to YYYY-MM-DD
      const dateObj = new Date(event.date);
      if (!isNaN(dateObj.getTime())) {
        const year = dateObj.getFullYear();
        const month = String(dateObj.getMonth() + 1).padStart(2, '0');
        const day = String(dateObj.getDate()).padStart(2, '0');
        formattedDate = `${year}-${month}-${day}`;
      }
    }

    setFormData({
      title: event.title || '',
      description: event.description || '',
      date: formattedDate,
      start_time: event.start_time || '',
      end_time: event.end_time || '',
      venue: event.venue || '',
      type: event.type || 'Workshop',
      capacity: event.capacity?.toString() || '',
      is_paid: event.is_paid || false,
      price: event.price?.toString() || '',
      is_active: event.is_active !== false,
    });
    setImageFile(null);
    setImagePreview('');
    if (event.image) {
      setImagePreview(`/storage/${event.image}`);
    }
    setEditingEvent(event.id);
    setShowAddForm(true);
  };

  const handleDelete = async (eventId: string) => {
    if (!confirm('Are you sure you want to delete this event?')) return;

    try {
      await librarianAPI.deleteEvent(eventId);
      fetchEvents();
    } catch (error) {
      console.error('Failed to delete event:', error);
      alert('Failed to delete event. Please try again.');
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const formatTime = (timeString: string) => {
    return timeString || '';
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-gray-600">Loading events...</div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-gray-800">
            {library?.name ? `${library.name} - Event Management` : 'Event Management'}
          </h2>
          <p className="text-gray-600 text-sm mt-1">Manage library events and activities</p>
        </div>

        <button
          onClick={() => {
            resetForm();
            setShowAddForm(true);
          }}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
        >
          <Plus className="w-4 h-4" />
          <span>Add Event</span>
        </button>
      </div>

      {/* Search */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search events by title, description, or venue..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* Add/Edit Form */}
      {showAddForm && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            {editingEvent ? 'Edit Event' : 'Add New Event'}
          </h3>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Title *</label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Type</label>
                <select
                  value={formData.type}
                  onChange={(e) => setFormData(prev => ({ ...prev, type: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="Workshop">Workshop</option>
                  <option value="Seminar">Seminar</option>
                  <option value="Book Club">Book Club</option>
                  <option value="Reading Session">Reading Session</option>
                  <option value="Author Meet">Author Meet</option>
                  <option value="Training">Training</option>
                  <option value="Conference">Conference</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Date *</label>
                <input
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData(prev => ({ ...prev, date: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Start Time *</label>
                <input
                  type="time"
                  value={formData.start_time}
                  onChange={(e) => setFormData(prev => ({ ...prev, start_time: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">End Time *</label>
                <input
                  type="time"
                  value={formData.end_time}
                  onChange={(e) => setFormData(prev => ({ ...prev, end_time: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Venue</label>
                <input
                  type="text"
                  value={formData.venue}
                  onChange={(e) => setFormData(prev => ({ ...prev, venue: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="e.g., Main Hall, Room 201"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Capacity</label>
                <input
                  type="number"
                  value={formData.capacity}
                  onChange={(e) => setFormData(prev => ({ ...prev, capacity: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="e.g., 50"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center space-x-4">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.is_paid}
                    onChange={(e) => setFormData(prev => ({ ...prev, is_paid: e.target.checked }))}
                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <span className="text-sm text-gray-700">Paid Event</span>
                </label>
              </div>

              {formData.is_paid && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Price</label>
                  <input
                    type="number"
                    step="0.01"
                    value={formData.price}
                    onChange={(e) => setFormData(prev => ({ ...prev, price: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="0.00"
                  />
                </div>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Event Image</label>
              <div className="flex items-center space-x-4">
                <div className="flex-1">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                  />
                </div>
                {imagePreview && (
                  <div className="flex-shrink-0">
                    <img
                      src={imagePreview}
                      alt="Preview"
                      className="w-20 h-20 object-cover rounded border border-gray-300"
                    />
                  </div>
                )}
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="is_active"
                checked={formData.is_active}
                onChange={(e) => setFormData(prev => ({ ...prev, is_active: e.target.checked }))}
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <label htmlFor="is_active" className="text-sm text-gray-700 cursor-pointer">
                Event is Active
              </label>
            </div>

            <div className="flex space-x-3 pt-4">
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                {editingEvent ? 'Update Event' : 'Add Event'}
              </button>
              <button
                type="button"
                onClick={() => {
                  setShowAddForm(false);
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

      {/* View Event Modal */}
      {viewingEvent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center">
              <h3 className="text-xl font-semibold text-gray-800">Event Details</h3>
              <button
                onClick={() => setViewingEvent(null)}
                className="text-gray-500 hover:text-gray-700"
              >
                <span className="text-2xl">&times;</span>
              </button>
            </div>

            <div className="p-6 space-y-4">
              {viewingEvent.image && (
                <img
                  src={`/storage/${viewingEvent.image}`}
                  alt={viewingEvent.title}
                  className="w-full h-64 object-cover rounded-lg"
                />
              )}
              <div>
                <h4 className="text-2xl font-bold text-gray-800">{viewingEvent.title}</h4>
                <span className="inline-block mt-2 px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                  {viewingEvent.type}
                </span>
              </div>

              <p className="text-gray-600">{viewingEvent.description}</p>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center text-gray-600">
                  <Calendar className="w-5 h-5 mr-2" />
                  <span>{formatDate(viewingEvent.date)}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Clock className="w-5 h-5 mr-2" />
                  <span>{formatTime(viewingEvent.start_time)} - {formatTime(viewingEvent.end_time)}</span>
                </div>
                {viewingEvent.venue && (
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-5 h-5 mr-2" />
                    <span>{viewingEvent.venue}</span>
                  </div>
                )}
                {viewingEvent.capacity && (
                  <div className="flex items-center text-gray-600">
                    <Users className="w-5 h-5 mr-2" />
                    <span>{viewingEvent.registered || 0} / {viewingEvent.capacity} registered</span>
                  </div>
                )}
                {viewingEvent.is_paid && (
                  <div className="flex items-center text-gray-600">
                    <DollarSign className="w-5 h-5 mr-2" />
                    <span>${viewingEvent.price}</span>
                  </div>
                )}
              </div>

              <div>
                <span className={`px-3 py-1 text-sm font-medium rounded-full ${
                  viewingEvent.is_active ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                }`}>
                  {viewingEvent.is_active ? 'Active' : 'Inactive'}
                </span>
              </div>
            </div>

            <div className="sticky bottom-0 bg-gray-50 border-t border-gray-200 px-6 py-4">
              <button
                onClick={() => setViewingEvent(null)}
                className="w-full md:w-auto px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Events Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredEvents.map((event) => (
          <div key={event.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
            {event.image ? (
              <img
                src={`/storage/${event.image}`}
                alt={event.title}
                className="w-full h-48 object-cover"
              />
            ) : (
              <div className="w-full h-48 bg-gray-100 flex items-center justify-center">
                <ImageIcon className="w-16 h-16 text-gray-300" />
              </div>
            )}

            <div className="p-4">
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-lg font-semibold text-gray-800 flex-1">{event.title}</h3>
                <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                  event.is_active ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                }`}>
                  {event.is_active ? 'Active' : 'Inactive'}
                </span>
              </div>

              <span className="inline-block mb-2 px-2 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded">
                {event.type}
              </span>

              <p className="text-sm text-gray-600 mb-3 line-clamp-2">{event.description}</p>

              <div className="space-y-1 mb-3">
                <div className="flex items-center text-sm text-gray-600">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{formatDate(event.date)}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>{formatTime(event.start_time)} - {formatTime(event.end_time)}</span>
                </div>
                {event.venue && (
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>{event.venue}</span>
                  </div>
                )}
                {event.capacity && (
                  <div className="flex items-center text-sm text-gray-600">
                    <Users className="w-4 h-4 mr-2" />
                    <span>{event.registered || 0} / {event.capacity}</span>
                  </div>
                )}
                {event.is_paid && (
                  <div className="flex items-center text-sm text-gray-600">
                    <DollarSign className="w-4 h-4 mr-2" />
                    <span>${event.price}</span>
                  </div>
                )}
              </div>

              <div className="flex space-x-2 pt-3 border-t border-gray-100">
                <button
                  onClick={() => handleEdit(event)}
                  className="flex-1 flex items-center justify-center space-x-1 text-blue-600 hover:text-blue-700 text-sm font-medium py-2 hover:bg-blue-50 rounded transition-colors"
                >
                  <Edit3 className="w-4 h-4" />
                  <span>Edit</span>
                </button>
                <button
                  onClick={() => setViewingEvent(event)}
                  className="flex-1 flex items-center justify-center space-x-1 text-green-600 hover:text-green-700 text-sm font-medium py-2 hover:bg-green-50 rounded transition-colors"
                >
                  <Eye className="w-4 h-4" />
                  <span>View</span>
                </button>
                <button
                  onClick={() => handleDelete(event.id)}
                  className="flex-1 flex items-center justify-center space-x-1 text-red-600 hover:text-red-700 text-sm font-medium py-2 hover:bg-red-50 rounded transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                  <span>Delete</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredEvents.length === 0 && (
        <div className="text-center py-12 bg-white rounded-xl shadow-sm border border-gray-200">
          <Calendar className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-800 mb-2">No events found</h3>
          <p className="text-gray-600">Create your first event to get started</p>
        </div>
      )}
    </div>
  );
};

export default EventManagement;
