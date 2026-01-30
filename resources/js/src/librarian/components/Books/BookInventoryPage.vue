<template>
  <div class="p-6 space-y-6">
    <!-- Header -->
    <div class="flex items-center justify-between">
      <div>
        <h1 class="text-3xl font-bold text-gray-900">Book Inventory</h1>
        <p class="text-gray-600 mt-1">Manage your library's book collection</p>
      </div>
      <div class="flex items-center space-x-3">
        <button 
          @click="fetchBooks"
          :disabled="loading"
          class="px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center space-x-2 disabled:opacity-50"
        >
          <RefreshCw :class="['w-4 h-4', loading ? 'animate-spin' : '']" />
          <span class="text-sm font-medium">{{ loading ? 'Refreshing...' : 'Refresh' }}</span>
        </button>
        <button 
          @click="isEditing = false; resetForm(); isAddModalOpen = true"
          class="px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg hover:shadow-lg transition-all flex items-center space-x-2"
        >
          <Plus class="w-4 h-4" />
          <span class="text-sm font-medium">Add New Book</span>
        </button>
      </div>
    </div>

    <!-- Add Book Modal -->
    <div v-if="isAddModalOpen" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div class="bg-white rounded-2xl shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div class="p-6 border-b border-gray-100 flex items-center justify-between sticky top-0 bg-white z-10">
          <h2 class="text-2xl font-bold text-gray-900">{{ isEditing ? 'Edit Book' : 'Add New Book' }}</h2>
          <button @click="isAddModalOpen = false" class="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <X class="w-5 h-5 text-gray-500" />
          </button>
        </div>

        <form @submit.prevent="submitBook" class="p-6 space-y-6">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <!-- Basic Info -->
            <div class="space-y-4">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Book Title *</label>
                <input v-model="newBook.title" type="text" required class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none">
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Author *</label>
                <input v-model="newBook.author" type="text" required class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none">
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">ISBN *</label>
                <input v-model="newBook.isbn" type="text" required class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none">
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Category *</label>
                <select v-model="newBook.category" required class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none">
                  <option value="">Select Category</option>
                  <option value="Accounting">Accounting</option>
                  <option value="Audit">Audit</option>
                  <option value="Taxation">Taxation</option>
                  <option value="Law">Law</option>
                  <option value="Finance">Finance</option>
                  <option value="Management">Management</option>
                  <option value="Economics">Economics</option>
                </select>
              </div>
            </div>

            <!-- Type & Status -->
            <div class="space-y-4">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Book Type *</label>
                <div class="flex space-x-4">
                  <label class="flex items-center space-x-2 cursor-pointer">
                    <input type="radio" v-model="newBook.type" value="physical" class="text-purple-600 focus:ring-purple-500">
                    <span class="text-sm text-gray-700">Physical</span>
                  </label>
                  <label class="flex items-center space-x-2 cursor-pointer">
                    <input type="radio" v-model="newBook.type" value="digital" class="text-purple-600 focus:ring-purple-500">
                    <span class="text-sm text-gray-700">Digital</span>
                  </label>
                </div>
              </div>

              <div v-if="newBook.type === 'physical'">
                <label class="block text-sm font-medium text-gray-700 mb-1">Shelf Location</label>
                <input v-model="newBook.location" type="text" placeholder="e.g. A-12-3" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none">
              </div>

              <div v-if="newBook.type === 'digital'">
                <label class="block text-sm font-medium text-gray-700 mb-1">PDF File *</label>
                <input type="file" @change="handlePdfUpload" accept=".pdf" required class="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-purple-50 file:text-purple-700 hover:file:bg-purple-100">
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Cover Image</label>
                <input type="file" @change="handleCoverUpload" accept="image/*" class="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-purple-50 file:text-purple-700 hover:file:bg-purple-100">
              </div>

              <div v-if="newBook.type === 'physical'">
                <label class="block text-sm font-medium text-gray-700 mb-1">Reservation Period (Days)</label>
                <input v-model.number="newBook.borrowing_period" type="number" min="1" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none" placeholder="e.g. 7">
              </div>
            </div>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Description *</label>
            <textarea v-model="newBook.description" rows="3" required class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none resize-none"></textarea>
          </div>

          <div class="flex items-center justify-end space-x-3 pt-4 border-t border-gray-100">
            <button type="button" @click="isAddModalOpen = false" class="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">
              Cancel
            </button>
            <button type="submit" :disabled="submitting" class="px-6 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg hover:shadow-lg transition-all disabled:opacity-50 flex items-center space-x-2">
              <RefreshCw v-if="submitting" class="w-4 h-4 animate-spin" />
              <span>{{ submitting ? (isEditing ? 'Updating...' : 'Adding...') : (isEditing ? 'Update Book' : 'Add Book') }}</span>
            </button>
          </div>
        </form>
      </div>
    </div>

    <!-- Stats Overview -->
    <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
      <div class="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
        <div class="flex items-center space-x-3">
          <div class="p-2 bg-blue-100 rounded-lg">
            <BookMarked class="w-5 h-5 text-blue-600" />
          </div>
          <div>
            <p class="text-xs text-gray-600">Total Books</p>
            <p class="text-xl font-bold text-gray-900">{{ bookStats.total }}</p>
          </div>
        </div>
      </div>
      <div class="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
        <div class="flex items-center space-x-3">
          <div class="p-2 bg-green-100 rounded-lg">
            <CheckCircle class="w-5 h-5 text-green-600" />
          </div>
          <div>
            <p class="text-xs text-gray-600">Available</p>
            <p class="text-xl font-bold text-green-600">{{ bookStats.available }}</p>
          </div>
        </div>
      </div>
      <div class="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
        <div class="flex items-center space-x-3">
          <div class="p-2 bg-purple-100 rounded-lg">
            <Smartphone class="w-5 h-5 text-purple-600" />
          </div>
          <div>
            <p class="text-xs text-gray-600">Digital</p>
            <p class="text-xl font-bold text-purple-600">{{ bookStats.digital }}</p>
          </div>
        </div>
      </div>
      <div class="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
        <div class="flex items-center space-x-3">
          <div class="p-2 bg-orange-100 rounded-lg">
            <AlertCircle class="w-5 h-5 text-orange-600" />
          </div>
          <div>
            <p class="text-xs text-gray-600">Reserved</p>
            <p class="text-xl font-bold text-orange-600">{{ bookStats.reserved }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Search and Filter -->
    <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
      <div class="flex flex-col md:flex-row md:items-center space-y-3 md:space-y-0 md:space-x-4">
        <div class="flex-1 relative">
          <Search class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input 
            v-model="searchQuery"
            type="text" 
            placeholder="Search by title, author, or ISBN..."
            class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
        </div>
        <div class="flex items-center space-x-3">
          <select 
            v-model="filterType"
            class="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            <option value="all">All Types</option>
            <option value="physical">Physical</option>
            <option value="digital">Digital</option>
          </select>
          <select 
            v-model="filterCategory"
            class="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            <option value="all">All Categories</option>
            <option v-for="cat in categories" :key="cat" :value="cat">{{ cat }}</option>
          </select>
        </div>
      </div>
    </div>

    <!-- Books Grid -->
    <div v-if="loading" class="flex items-center justify-center py-20">
      <RefreshCw class="w-8 h-8 text-purple-600 animate-spin" />
    </div>
    
    <div v-else-if="filteredBooks.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      <div 
        v-for="book in filteredBooks" 
        :key="book.id"
        class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden group hover:shadow-md transition-all"
      >
        <div class="aspect-[3/4] relative overflow-hidden bg-gray-100">
          <img 
            :src="book.cover_url" 
            :alt="book.title"
            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          >
          <div class="absolute top-2 right-2 flex flex-col space-y-2">
            <span :class="[
              'px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider shadow-sm',
              book.type === 'digital' ? 'bg-purple-600 text-white' : 'bg-blue-600 text-white'
            ]">
              {{ book.type }}
            </span>
            <span :class="[
              'px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider shadow-sm',
              book.availability === 'available' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
            ]">
              {{ book.availability }}
            </span>
          </div>
        </div>
        <div class="p-4">
          <p class="text-xs font-medium text-purple-600 mb-1">{{ book.category }}</p>
          <h3 class="font-bold text-gray-900 line-clamp-1">{{ book.title }}</h3>
          <p class="text-sm text-gray-600 mb-3">{{ book.author }}</p>
          
          <div class="flex items-center justify-between pt-3 border-t border-gray-100">
            <div class="text-xs text-gray-500">
              <span v-if="book.type === 'physical'">Loc: {{ book.location || 'N/A' }}</span>
              <span v-else>Digital Access</span>
            </div>
            <div class="flex items-center space-x-2">
              <button @click="handleEdit(book)" class="p-1.5 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                <Edit2 class="w-4 h-4" />
              </button>
              <button @click="handleDelete(book.id)" class="p-1.5 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                <Trash2 class="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-else class="bg-white rounded-xl shadow-sm border border-gray-200 py-20 text-center">
      <BookMarked class="w-12 h-12 text-gray-300 mx-auto mb-4" />
      <h3 class="text-lg font-medium text-gray-900">No books found</h3>
      <p class="text-gray-500">Try adjusting your search or filters</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import {
  Plus,
  Search,
  BookMarked,
  CheckCircle,
  Smartphone,
  AlertCircle,
  RefreshCw,
  Edit2,
  Trash2,
  X
} from 'lucide-vue-next';
import { librarianAPI } from '@/shared/services/api';

const books = ref<any[]>([]);
const loading = ref(false);
const submitting = ref(false);
const isAddModalOpen = ref(false);
const isEditing = ref(false);
const editingBookId = ref<number | null>(null);
const searchQuery = ref('');
const filterType = ref('all');
const filterCategory = ref('all');

const newBook = ref({
  title: '',
  author: '',
  isbn: '',
  category: '',
  type: 'physical',
  description: '',
  location: '',
  cover_image: null as File | null,
  pdf_file: null as File | null,
  status: 'available',
  borrowing_period: 7
});

const handleCoverUpload = (event: any) => {
  newBook.value.cover_image = event.target.files[0];
};

const handlePdfUpload = (event: any) => {
  newBook.value.pdf_file = event.target.files[0];
};

import { useSwal } from '@/shared/composables/useSwal';
const { showSuccess, showError } = useSwal();

const submitBook = async () => {
  submitting.value = true;
  try {
    const formData = new FormData();
    formData.append('title', newBook.value.title);
    formData.append('author', newBook.value.author);
    formData.append('isbn', newBook.value.isbn);
    formData.append('category', newBook.value.category);
    formData.append('type', newBook.value.type);
    formData.append('description', newBook.value.description);
    formData.append('status', newBook.value.status);
    formData.append('borrowing_period', newBook.value.borrowing_period.toString());
    
    if (newBook.value.type === 'physical') {
      formData.append('location', newBook.value.location);
    }
    
    if (newBook.value.cover_image instanceof File) {
      formData.append('cover_image', newBook.value.cover_image);
    }
    
    if (newBook.value.type === 'digital' && newBook.value.pdf_file instanceof File) {
      formData.append('pdf_file', newBook.value.pdf_file);
    }

    console.log('Submitting Book FormData:', {
      title: newBook.value.title,
      type: newBook.value.type,
      hasCover: newBook.value.cover_image instanceof File,
      hasPdf: newBook.value.pdf_file instanceof File
    });

    if (isEditing.value && editingBookId.value) {
      await librarianAPI.updateBook(editingBookId.value, formData);
      showSuccess('Updated!', 'Book updated successfully');
    } else {
      await librarianAPI.createBook(formData);
      showSuccess('Added!', 'Book added successfully');
    }
    await fetchBooks();
    isAddModalOpen.value = false;
    resetForm();
  } catch (error: any) {
    console.error('Error adding book:', error);
    const message = error.response?.data?.message || 'Failed to add book. Please check the form and try again.';
    const errors = error.response?.data?.errors;
    
    if (errors) {
      const errorMessages = Object.values(errors).flat().join('\n');
      showError('Add Failed', `${message}\n\n${errorMessages}`);
    } else {
      showError('Add Failed', message);
    }
  } finally {
    submitting.value = false;
  }
};

const resetForm = () => {
  isEditing.value = false;
  editingBookId.value = null;
  newBook.value = {
    title: '',
    author: '',
    isbn: '',
    category: '',
    type: 'physical',
    description: '',
    location: '',
    cover_image: null,
    pdf_file: null,
    status: 'available',
    borrowing_period: 7
  };
};

const handleEdit = (book: any) => {
  isEditing.value = true;
  editingBookId.value = book.id;
  newBook.value = {
    title: book.title,
    author: book.author,
    isbn: book.isbn,
    category: book.category,
    type: book.type,
    description: book.description,
    location: book.location || '',
    cover_image: null,
    pdf_file: null,
    status: book.availability,
    borrowing_period: book.borrowing_period || 7
  };
  isAddModalOpen.value = true;
};

const { showConfirm } = useSwal();
const handleDelete = async (id: number) => {
  const confirmed = await showConfirm('Are you sure?', 'This book will be permanently removed from inventory.');
  if (confirmed) {
    try {
      await librarianAPI.deleteBook(id);
      showSuccess('Deleted!', 'Book removed successfully');
      fetchBooks();
    } catch (error) {
      showError('Delete Failed', 'Could not delete the book. Please try again.');
    }
  }
};

const fetchBooks = async () => {
  loading.value = true;
  try {
    const data = await librarianAPI.getBooks();
    books.value = data;
  } catch (error) {
    console.error('Error fetching books:', error);
  } finally {
    loading.value = false;
  }
};

const bookStats = computed(() => {
  return {
    total: books.value.length,
    available: books.value.filter(b => b.availability === 'available').length,
    digital: books.value.filter(b => b.type === 'digital').length,
    reserved: books.value.filter(b => b.availability === 'reserved').length
  };
});

const categories = computed(() => {
  const cats = new Set(books.value.map(b => b.category));
  return Array.from(cats).filter(Boolean).sort();
});

const filteredBooks = computed(() => {
  return books.value.filter(book => {
    const matchesSearch = 
      book.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      book.author.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      book.isbn?.toLowerCase().includes(searchQuery.value.toLowerCase());
    
    const matchesType = filterType.value === 'all' || book.type === filterType.value;
    const matchesCategory = filterCategory.value === 'all' || book.category === filterCategory.value;
    
    return matchesSearch && matchesType && matchesCategory;
  });
});

onMounted(() => {
  fetchBooks();
});
</script>

