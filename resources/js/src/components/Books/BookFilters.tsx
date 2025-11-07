import React from 'react';
import { Filter, X } from 'lucide-react';

interface BookFiltersProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  selectedType: 'all' | 'physical' | 'digital';
  onTypeChange: (type: 'all' | 'physical' | 'digital') => void;
  availabilityFilter: 'all' | 'available' | 'reserved';
  onAvailabilityChange: (availability: 'all' | 'available' | 'reserved') => void;
}

const BookFilters: React.FC<BookFiltersProps> = ({
  categories,
  selectedCategory,
  onCategoryChange,
  selectedType,
  onTypeChange,
  availabilityFilter,
  onAvailabilityChange
}) => {
  const clearFilters = () => {
    onCategoryChange('');
    onTypeChange('all');
    onAvailabilityChange('all');
  };

  const hasActiveFilters = selectedCategory || selectedType !== 'all' || availabilityFilter !== 'all';

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-800 flex items-center">
          <Filter className="w-5 h-5 mr-2" />
          Filters
        </h2>
        {hasActiveFilters && (
          <button
            onClick={clearFilters}
            className="text-sm text-blue-600 hover:text-blue-700 flex items-center"
          >
            <X className="w-4 h-4 mr-1" />
            Clear All
          </button>
        )}
      </div>

      <div className="space-y-4">
        {/* Category Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
          <select
            value={selectedCategory}
            onChange={(e) => onCategoryChange(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">All Categories</option>
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>

        {/* Type Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Type</label>
          <div className="space-y-2">
            {[
              { value: 'all', label: 'All Types' },
              { value: 'physical', label: 'Physical Books' },
              { value: 'digital', label: 'Digital Books' }
            ].map(option => (
              <label key={option.value} className="flex items-center">
                <input
                  type="radio"
                  name="type"
                  value={option.value}
                  checked={selectedType === option.value}
                  onChange={(e) => onTypeChange(e.target.value as any)}
                  className="text-blue-600 focus:ring-blue-500"
                />
                <span className="ml-2 text-sm text-gray-700">{option.label}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Availability Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Availability</label>
          <div className="space-y-2">
            {[
              { value: 'all', label: 'All Books' },
              { value: 'available', label: 'Available Only' },
              { value: 'reserved', label: 'Reserved Only' }
            ].map(option => (
              <label key={option.value} className="flex items-center">
                <input
                  type="radio"
                  name="availability"
                  value={option.value}
                  checked={availabilityFilter === option.value}
                  onChange={(e) => onAvailabilityChange(e.target.value as any)}
                  className="text-blue-600 focus:ring-blue-500"
                />
                <span className="ml-2 text-sm text-gray-700">{option.label}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookFilters;