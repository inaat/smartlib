import React, { useState } from 'react';
import { useApp } from '@/shared/contexts/AppContext';
import EventCard from './EventCard';
import { Calendar, Filter, Search } from 'lucide-react';

const EventsPage: React.FC = () => {
  const { events } = useApp();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState<'all' | 'seminar' | 'workshop' | 'study_group'>('all');
  const [selectedPayment, setSelectedPayment] = useState<'all' | 'free' | 'paid'>('all');

  const filteredEvents = events.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = selectedType === 'all' || event.type === selectedType;
    const matchesPayment = selectedPayment === 'all' || 
                          (selectedPayment === 'free' && !event.isPaid) ||
                          (selectedPayment === 'paid' && event.isPaid);
    
    return matchesSearch && matchesType && matchesPayment;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-800">Events & Seminars</h1>
        <p className="text-gray-600 mt-1">Join workshops, seminars, and study groups</p>
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Search */}
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search events..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Filters */}
          <div className="flex gap-3">
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value as any)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">All Types</option>
              <option value="seminar">Seminars</option>
              <option value="workshop">Workshops</option>
              <option value="study_group">Study Groups</option>
            </select>

            <select
              value={selectedPayment}
              onChange={(e) => setSelectedPayment(e.target.value as any)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">All Events</option>
              <option value="free">Free Events</option>
              <option value="paid">Paid Events</option>
            </select>
          </div>
        </div>
      </div>

      {/* Events Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredEvents.map(event => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>

      {filteredEvents.length === 0 && (
        <div className="text-center py-12">
          <Calendar className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-800 mb-2">No events found</h3>
          <p className="text-gray-600">Try adjusting your search or filters</p>
        </div>
      )}
    </div>
  );
};

export default EventsPage;