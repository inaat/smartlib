import React, { useState } from 'react';
import { useApp } from '@/shared/contexts/AppContext';
import { useAuth } from '@/shared/contexts/AuthContext';
import { adminAPI } from '@/shared/services/api';
import {
  BookOpen,
  Plus,
  Search,
  Filter,
  Edit3,
  Trash2,
  Upload,
  Eye,
  Download,
  Lock
} from 'lucide-react';

const BookManagement: React.FC = () => {
  const { books } = useApp();
  const { user } = useAuth();
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingBook, setEditingBook] = useState<string | null>(null);
  const [editingBookData, setEditingBookData] = useState<any>(null);
  const [viewingBook, setViewingBook] = useState<any>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [coverImageFile, setCoverImageFile] = useState<File | null>(null);
  const [coverImagePreview, setCoverImagePreview] = useState<string>('');

  const [formData, setFormData] = useState({
    title: '',
    author: '',
    isbn: '',
    type: 'physical' as 'physical',
    category: '',
    description: '',
    cover: '',
    libraryId: user?.library_id || '',
    location: '',
    publisher: '',
    publication_year: '',
    edition: '',
    language: '',
    pages: '',
    copies_total: '',
    copies_available: '',
    borrowing_period: '',
    renewal_limit: ''
  });

  // Filter books to only show physical books from librarian's library
  const libraryBooks = books.filter(book => {
    // Check both libraryId and library_id for compatibility
    const bookLibraryId = book.library_id || book.libraryId;
    return book.type === 'physical' && bookLibraryId === user?.library_id;
  });

  const categories = Array.from(new Set(libraryBooks.map(book => book.category)));

  const filteredBooks = libraryBooks.filter(book => {
    const matchesSearch = book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         book.author.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = !categoryFilter || book.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Create FormData for file uploads
      const formDataToSend = new FormData();

      // Add basic fields
      formDataToSend.append('title', formData.title);
      formDataToSend.append('author', formData.author);
      formDataToSend.append('isbn', formData.isbn);
      formDataToSend.append('type', formData.type);
      formDataToSend.append('category', formData.category);
      formDataToSend.append('description', formData.description);
      formDataToSend.append('status', editingBookData?.availability || 'available');
      formDataToSend.append('library_id', user?.library_id?.toString() || '');
      formDataToSend.append('location', formData.location);

      // Add all the additional fields from the form
      if (formData.publisher) formDataToSend.append('publisher', formData.publisher);
      if (formData.publication_year) formDataToSend.append('publication_year', formData.publication_year);
      if (formData.edition) formDataToSend.append('edition', formData.edition);
      if (formData.language) formDataToSend.append('language', formData.language);
      if (formData.pages) formDataToSend.append('pages', formData.pages);
      if (formData.borrowing_period) formDataToSend.append('borrowing_period', formData.borrowing_period);
      if (formData.renewal_limit) formDataToSend.append('renewal_limit', formData.renewal_limit);
      if (formData.copies_total) formDataToSend.append('copies_total', formData.copies_total);
      if (formData.copies_available) formDataToSend.append('copies_available', formData.copies_available);

      

      // Add cover image if uploaded
      if (coverImageFile) {
        formDataToSend.append('cover_image', coverImageFile);
      } else if (formData.cover) {
        formDataToSend.append('cover_url', formData.cover);
      }

      // Call API
      if (editingBook) {
        await adminAPI.updateBook(editingBook, formDataToSend);
      } else {
        await adminAPI.createBook(formDataToSend);
      }

      setShowAddForm(false);
      resetForm();

      // Reload books list
      window.location.reload();
    } catch (error) {
      console.error('Failed to save book:', error);
      alert('Failed to save book. Please try again.');
    }
  };

  const resetForm = () => {
    setFormData({
      title: '',
      author: '',
      isbn: '',
      type: 'physical',
      category: '',
      description: '',
      cover: '',
      libraryId: user?.library_id || '',
      location: '',
      publisher: '',
      publication_year: '',
      edition: '',
      language: '',
      pages: '',
      copies_total: '',
      copies_available: '',
      borrowing_period: '',
      renewal_limit: ''
    });
    setCoverImageFile(null);
    setCoverImagePreview('');
    setEditingBookData(null);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setCoverImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setCoverImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleEdit = (book: any) => {
    setEditingBookData(book); // Store the full book data
    setFormData({
      title: book.title || '',
      author: book.author || '',
      isbn: book.isbn || '',
      type: 'physical',
      category: book.category || '',
      description: book.description || '',
      cover: book.cover_url || book.cover || '',
      libraryId: user?.library_id || '',
      location: book.location || '',
      publisher: book.publisher || '',
      publication_year: book.publication_year?.toString() || '',
      edition: book.edition || '',
      language: book.language || '',
      pages: book.pages?.toString() || '',
      copies_total: book.copies_total?.toString() || '',
      copies_available: book.copies_available?.toString() || '',
      borrowing_period: book.borrowing_period?.toString() || '',
      renewal_limit: book.renewal_limit?.toString() || ''
    });
    setCoverImageFile(null);
    setCoverImagePreview('');
    setEditingBook(book.id);
    setShowAddForm(true);
  };

  const getAvailabilityBadge = (availability: string) => {
    switch (availability) {
      case 'available':
        return <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">Available</span>;
      case 'reserved':
        return <span className="px-2 py-1 text-xs font-medium bg-orange-100 text-orange-800 rounded-full">Reserved</span>;
      case 'unavailable':
        return <span className="px-2 py-1 text-xs font-medium bg-red-100 text-red-800 rounded-full">Unavailable</span>;
      default:
        return <span className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded-full">Unknown</span>;
    }
  };

  const getTypeBadge = (type: string) => {
    return type === 'digital' 
      ? <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">Digital</span>
      : <span className="px-2 py-1 text-xs font-medium bg-teal-100 text-teal-800 rounded-full">Physical</span>;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-gray-800">Book Management</h2>
          <p className="text-gray-600 text-sm mt-1">Manage physical books in your library</p>
        </div>

        <button
          onClick={() => setShowAddForm(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
        >
          <Plus className="w-4 h-4" />
          <span>Add Physical Book</span>
        </button>
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search books by title or author..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">All Categories</option>
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Add/Edit Form */}
      {showAddForm && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            {editingBook ? 'Edit Book' : 'Add New Book'}
          </h3>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Author</label>
                <input
                  type="text"
                  value={formData.author}
                  onChange={(e) => setFormData(prev => ({ ...prev, author: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">ISBN</label>
                <input
                  type="text"
                  value={formData.isbn}
                  onChange={(e) => setFormData(prev => ({ ...prev, isbn: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                <input
                  type="text"
                  value={formData.category}
                  onChange={(e) => setFormData(prev => ({ ...prev, category: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Location in Library</label>
              <input
                type="text"
                value={formData.location}
                onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="e.g., Section A - Shelf 12"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Publisher</label>
                <input
                  type="text"
                  value={formData.publisher}
                  onChange={(e) => setFormData(prev => ({ ...prev, publisher: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="e.g., MIT Press"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Publication Year</label>
                <input
                  type="number"
                  value={formData.publication_year}
                  onChange={(e) => setFormData(prev => ({ ...prev, publication_year: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="e.g., 2009"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Edition</label>
                <input
                  type="text"
                  value={formData.edition}
                  onChange={(e) => setFormData(prev => ({ ...prev, edition: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="e.g., 3rd Edition"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Language</label>
                <input
                  type="text"
                  value={formData.language}
                  onChange={(e) => setFormData(prev => ({ ...prev, language: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="e.g., English"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Pages</label>
                <input
                  type="number"
                  value={formData.pages}
                  onChange={(e) => setFormData(prev => ({ ...prev, pages: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="e.g., 1312"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Total Copies</label>
                <input
                  type="number"
                  value={formData.copies_total}
                  onChange={(e) => setFormData(prev => ({ ...prev, copies_total: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="e.g., 5"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Available Copies</label>
                <input
                  type="number"
                  value={formData.copies_available}
                  onChange={(e) => setFormData(prev => ({ ...prev, copies_available: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="e.g., 5"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Borrowing Period (days)</label>
                <input
                  type="number"
                  value={formData.borrowing_period}
                  onChange={(e) => setFormData(prev => ({ ...prev, borrowing_period: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="e.g., 14"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Renewal Limit</label>
                <input
                  type="number"
                  value={formData.renewal_limit}
                  onChange={(e) => setFormData(prev => ({ ...prev, renewal_limit: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="e.g., 2"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Cover Image</label>
              <div className="flex items-center space-x-4">
                <div className="flex-1">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                  />
                </div>
                {(coverImagePreview || formData.cover) && (
                  <div className="flex-shrink-0">
                    <img
                      src={coverImagePreview || formData.cover}
                      alt="Cover preview"
                      className="w-16 h-20 object-cover rounded border border-gray-300"
                    />
                  </div>
                )}
              </div>
              <p className="text-xs text-gray-500 mt-1">Upload a book cover image (JPG, PNG, etc.)</p>
            </div>

            <div className="flex space-x-3 pt-4">
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                {editingBook ? 'Update Book' : 'Add Book'}
              </button>
              <button
                type="button"
                onClick={() => {
                  setShowAddForm(false);
                  setEditingBook(null);
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

      {/* View Book Modal */}
      {viewingBook && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center">
              <h3 className="text-xl font-semibold text-gray-800">Book Details</h3>
              <button
                onClick={() => setViewingBook(null)}
                className="text-gray-500 hover:text-gray-700"
              >
                <span className="text-2xl">&times;</span>
              </button>
            </div>

            <div className="p-6 space-y-6">
              {/* Cover Image and Basic Info */}
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <img
                    src={viewingBook.cover_url || viewingBook.cover || 'https://images.pexels.com/photos/159866/books-book-pages-read-literature-159866.jpeg?auto=compress&cs=tinysrgb&w=400'}
                    alt={viewingBook.title}
                    className="w-48 h-64 object-cover rounded-lg shadow-md"
                  />
                </div>

                <div className="flex-1 space-y-4">
                  <div>
                    <h4 className="text-2xl font-bold text-gray-800">{viewingBook.title}</h4>
                    <p className="text-lg text-gray-600 mt-1">{viewingBook.author}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <p className="text-sm text-gray-500">ISBN</p>
                      <p className="text-sm font-medium text-gray-800">{viewingBook.isbn}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Type</p>
                      <div className="mt-1">{getTypeBadge(viewingBook.type)}</div>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Category</p>
                      <p className="text-sm font-medium text-gray-800">{viewingBook.category}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Status</p>
                      <div className="mt-1">{getAvailabilityBadge(viewingBook.availability)}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div>
                <h5 className="text-sm font-semibold text-gray-700 mb-2">Description</h5>
                <p className="text-sm text-gray-600 leading-relaxed">{viewingBook.description}</p>
              </div>

              {/* Publication Details */}
              <div>
                <h5 className="text-sm font-semibold text-gray-700 mb-3">Publication Details</h5>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {viewingBook.publisher && (
                    <div>
                      <p className="text-xs text-gray-500">Publisher</p>
                      <p className="text-sm font-medium text-gray-800">{viewingBook.publisher}</p>
                    </div>
                  )}
                  {viewingBook.publication_year && (
                    <div>
                      <p className="text-xs text-gray-500">Publication Year</p>
                      <p className="text-sm font-medium text-gray-800">{viewingBook.publication_year}</p>
                    </div>
                  )}
                  {viewingBook.edition && (
                    <div>
                      <p className="text-xs text-gray-500">Edition</p>
                      <p className="text-sm font-medium text-gray-800">{viewingBook.edition}</p>
                    </div>
                  )}
                  {viewingBook.language && (
                    <div>
                      <p className="text-xs text-gray-500">Language</p>
                      <p className="text-sm font-medium text-gray-800">{viewingBook.language}</p>
                    </div>
                  )}
                  {viewingBook.pages && (
                    <div>
                      <p className="text-xs text-gray-500">Pages</p>
                      <p className="text-sm font-medium text-gray-800">{viewingBook.pages}</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Physical Book Details */}
              {viewingBook.type === 'physical' && (
                <div>
                  <h5 className="text-sm font-semibold text-gray-700 mb-3">Library Information</h5>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {viewingBook.location && (
                      <div>
                        <p className="text-xs text-gray-500">Location</p>
                        <p className="text-sm font-medium text-gray-800">{viewingBook.location}</p>
                      </div>
                    )}
                    {viewingBook.copies_total !== undefined && (
                      <div>
                        <p className="text-xs text-gray-500">Total Copies</p>
                        <p className="text-sm font-medium text-gray-800">{viewingBook.copies_total}</p>
                      </div>
                    )}
                    {viewingBook.copies_available !== undefined && (
                      <div>
                        <p className="text-xs text-gray-500">Available Copies</p>
                        <p className="text-sm font-medium text-gray-800">{viewingBook.copies_available}</p>
                      </div>
                    )}
                    {viewingBook.borrowing_period && (
                      <div>
                        <p className="text-xs text-gray-500">Borrowing Period</p>
                        <p className="text-sm font-medium text-gray-800">{viewingBook.borrowing_period} days</p>
                      </div>
                    )}
                    {viewingBook.renewal_limit !== undefined && (
                      <div>
                        <p className="text-xs text-gray-500">Renewal Limit</p>
                        <p className="text-sm font-medium text-gray-800">{viewingBook.renewal_limit} times</p>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            <div className="sticky bottom-0 bg-gray-50 border-t border-gray-200 px-6 py-4">
              <button
                onClick={() => setViewingBook(null)}
                className="w-full md:w-auto px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Books Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Book
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Category
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Location
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredBooks.map((book) => (
                <tr key={book.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <img
                        src={book.cover_url || book.cover || 'https://images.pexels.com/photos/159866/books-book-pages-read-literature-159866.jpeg?auto=compress&cs=tinysrgb&w=400'}
                        alt={book.title}
                        className="w-12 h-16 object-cover rounded mr-3"
                      />
                      <div>
                        <div className="text-sm font-medium text-gray-800">{book.title}</div>
                        <div className="text-sm text-gray-500">{book.author}</div>
                        <div className="text-xs text-gray-400">{book.isbn}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    {getTypeBadge(book.type)}
                    {book.type === 'digital' && book.digitalAccess?.subscriptionRequired && (
                      <Lock className="w-3 h-3 text-orange-500 ml-1 inline" />
                    )}
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-gray-800">{book.category}</span>
                  </td>
                  <td className="px-6 py-4">
                    {getAvailabilityBadge(book.availability)}
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-800">
                      {book.type === 'physical' 
                        ? book.location || 'Not specified'
                        : 'Digital Library'
                      }
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleEdit(book)}
                        className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => setViewingBook(book)}
                        className="text-green-600 hover:text-green-700 text-sm font-medium"
                      >
                        View
                      </button>
                      <button className="text-red-600 hover:text-red-700 text-sm font-medium">
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {filteredBooks.length === 0 && (
        <div className="text-center py-12">
          <BookOpen className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-800 mb-2">No books found</h3>
          <p className="text-gray-600">Try adjusting your search or filters</p>
        </div>
      )}
    </div>
  );
};

export default BookManagement;