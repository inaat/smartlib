<template>
  <div class="p-6 space-y-6 font-outfit text-slate-700">
    
    <!-- Top Action Header -->
    <div class="flex justify-end items-center mb-6">
      <div class="flex items-center space-x-3 w-full sm:w-auto">
        <button 
          @click="fetchBooks"
          :disabled="loading"
          class="flex-1 sm:flex-none px-4 py-2.5 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 hover:border-slate-300 transition-all flex items-center justify-center space-x-2 disabled:opacity-50 text-xs font-bold text-slate-600 shadow-sm cursor-pointer"
        >
          <RefreshCw :class="['w-3.5 h-3.5', loading ? 'animate-spin' : '']" />
          <span>{{ loading ? 'Refreshing...' : 'Refresh' }}</span>
        </button>
        <button 
          @click="isEditing = false; resetForm(); isAddModalOpen = true"
          class="flex-1 sm:flex-none px-4 py-2.5 bg-emerald-600 border border-emerald-600 hover:bg-emerald-700 text-white rounded-xl transition-all flex items-center justify-center space-x-2 text-xs font-bold shadow-sm cursor-pointer"
        >
          <Plus class="w-4 h-4" />
          <span>Add Book</span>
        </button>
      </div>
    </div>

    <!-- Stats Cards Overview Grid -->
    <div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
      
      <!-- Total Books -->
      <div class="bg-white rounded-2xl p-5 shadow-sm border border-slate-100/80 flex items-center space-x-4">
        <div class="p-3 bg-blue-50 border border-blue-100/50 rounded-xl text-blue-600">
          <BookMarked class="w-5 h-5" />
        </div>
        <div class="text-left">
          <p class="text-[10px] text-slate-400 font-bold uppercase tracking-wider leading-none">Total Books</p>
          <h3 class="text-2xl font-bold text-slate-800 mt-2 leading-none">{{ bookStats.total }}</h3>
        </div>
      </div>

      <!-- Available Books -->
      <div class="bg-white rounded-2xl p-5 shadow-sm border border-slate-100/80 flex items-center space-x-4">
        <div class="p-3 bg-green-50 border border-green-100/50 rounded-xl text-green-600">
          <CheckCircle class="w-5 h-5" />
        </div>
        <div class="text-left">
          <p class="text-[10px] text-slate-400 font-bold uppercase tracking-wider leading-none">Available</p>
          <h3 class="text-2xl font-bold text-green-600 mt-2 leading-none">{{ bookStats.available }}</h3>
        </div>
      </div>

      <!-- Digital Publications -->
      <div class="bg-white rounded-2xl p-5 shadow-sm border border-slate-100/80 flex items-center space-x-4">
        <div class="p-3 bg-emerald-50 border border-emerald-100/50 rounded-xl text-emerald-650">
          <Smartphone class="w-5 h-5" />
        </div>
        <div class="text-left">
          <p class="text-[10px] text-slate-400 font-bold uppercase tracking-wider leading-none">Digital Access</p>
          <h3 class="text-2xl font-bold text-emerald-650 mt-2 leading-none">{{ bookStats.digital }}</h3>
        </div>
      </div>

      <!-- Reserved / Lent Out -->
      <div class="bg-white rounded-2xl p-5 shadow-sm border border-slate-100/80 flex items-center space-x-4">
        <div class="p-3 bg-amber-50 border border-amber-100/50 rounded-xl text-amber-600">
          <AlertCircle class="w-5 h-5" />
        </div>
        <div class="text-left">
          <p class="text-[10px] text-slate-400 font-bold uppercase tracking-wider leading-none">Reserved</p>
          <h3 class="text-2xl font-bold text-amber-600 mt-2 leading-none">{{ bookStats.reserved }}</h3>
        </div>
      </div>
    </div>

    <!-- Search Filters Panel -->
    <div class="bg-white rounded-2xl shadow-sm border border-slate-100/80 p-4">
      <div class="flex flex-col md:flex-row md:items-center gap-3">
        <!-- Search bar input -->
        <div class="flex-1 relative">
          <Search class="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input 
            v-model="searchQuery"
            type="text" 
            placeholder="Search by title, author, or ISBN number..."
            class="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 focus:border-slate-300 focus:bg-white rounded-xl text-xs font-semibold focus:outline-none focus:ring-4 focus:ring-slate-100 transition-all outline-none"
          >
        </div>
        <!-- Dropdown filters -->
        <div class="flex items-center gap-3">
          <select 
            v-model="filterType"
            class="px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold focus:outline-none focus:ring-4 focus:ring-slate-100 cursor-pointer transition-all outline-none"
          >
            <option value="all">All Formats</option>
            <option value="physical">Physical Book</option>
            <option value="digital">Digital PDF</option>
          </select>
          <select 
            v-model="filterCategory"
            class="px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold focus:outline-none focus:ring-4 focus:ring-slate-100 cursor-pointer transition-all outline-none"
          >
            <option value="all">All Categories</option>
            <option v-for="cat in categories" :key="cat" :value="cat">{{ cat }}</option>
          </select>
        </div>
      </div>
    </div>

    <!-- Books Card Grid List -->
    <div v-if="loading" class="flex flex-col items-center justify-center py-24">
      <RefreshCw class="w-8 h-8 text-emerald-600 animate-spin mb-3" />
      <p class="text-[10px] text-slate-400 font-bold uppercase tracking-widest leading-none">Loading publications...</p>
    </div>
    
    <div v-else-if="filteredBooks.length > 0" class="space-y-6">
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div 
          v-for="book in filteredBooks" 
          :key="book.id"
          class="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden group hover:shadow-md hover:translate-y-[-1px] transition-all flex flex-col justify-between"
        >
          <!-- Card Image Header -->
          <div class="aspect-[3/4] relative overflow-hidden bg-slate-50">
            <img 
              :src="book.cover_url" 
              :alt="book.title"
              class="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300"
            >
            <!-- Status Tag Badges -->
            <div class="absolute top-3.5 right-3.5 flex flex-col items-end gap-1.5 z-10">
              <span :class="[
                'px-2 py-0.5 rounded-md text-[8px] font-bold uppercase tracking-wider border shadow-sm',
                book.type === 'digital' ? 'bg-emerald-600 border-emerald-600 text-white' : 'bg-indigo-600 border-indigo-700 text-white'
              ]">
                {{ book.type }}
              </span>
              <span :class="[
                'px-2 py-0.5 rounded-md text-[8px] font-bold uppercase tracking-wider border shadow-sm',
                book.availability === 'available' ? 'bg-green-500 border-green-600 text-white' : 'bg-red-500 border-red-600 text-white'
              ]">
                {{ book.availability }}
              </span>
            </div>
          </div>

          <!-- Card Body Content -->
          <div class="p-4 flex-1 flex flex-col justify-between text-left">
            <div>
              <p class="text-[9px] font-bold text-emerald-650 uppercase tracking-widest mb-1">{{ book.category }}</p>
              <h3 class="font-bold text-slate-800 text-sm line-clamp-1 mb-0.5" :title="book.title">{{ book.title }}</h3>
              <p class="text-xs text-slate-400 font-semibold mb-3">{{ book.author }}</p>
            </div>
            
            <div class="flex items-center justify-between pt-3 border-t border-slate-100/80">
              <div class="text-[10px] text-slate-450 font-bold uppercase tracking-wide flex items-center">
                <span v-if="book.type === 'physical'">Loc: {{ book.location || 'N/A' }}</span>
                <span v-else class="text-emerald-650 flex items-center">Digital PDF</span>
              </div>
              <div class="flex items-center space-x-1.5">
                <button 
                  @click="handleEdit(book)" 
                  class="p-1.5 text-slate-400 hover:text-slate-655 hover:bg-slate-50 border border-transparent hover:border-slate-100 rounded-xl transition-all cursor-pointer"
                  title="Edit Book"
                >
                  <Edit2 class="w-3.5 h-3.5" />
                </button>
                <button 
                  @click="handleDelete(book.id)" 
                  class="p-1.5 text-rose-500 hover:text-rose-655 hover:bg-rose-50 border border-transparent hover:border-rose-100 rounded-xl transition-all cursor-pointer"
                  title="Remove Book"
                >
                  <Trash2 class="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Empty State -->
    <div v-else class="bg-white rounded-2xl shadow-sm border border-slate-100/80 py-20 text-center flex flex-col items-center justify-center">
      <div class="w-16 h-16 border border-slate-100 rounded-2xl flex items-center justify-center mb-5 bg-white text-slate-400 shadow-sm">
        <BookMarked class="w-6 h-6 text-slate-350" />
      </div>
      <h3 class="text-sm font-bold text-slate-800 uppercase tracking-wider mb-1">No Books Found</h3>
      <p class="text-xs text-slate-400 font-semibold max-w-xs leading-relaxed">Try adjusting your search query, format type filter, or category search parameters.</p>
    </div>

    <!-- Add / Edit Book Modal Dialog -->
    <div v-if="isAddModalOpen" class="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <div class="absolute inset-0 bg-slate-900/60 backdrop-blur-md animate-fade-in" @click="isAddModalOpen = false"></div>
      <div class="relative bg-white rounded-2xl shadow-2xl w-full max-w-xl overflow-hidden border border-slate-100 text-left animate-in duration-200">
        
        <!-- Modal Header (Sleek Green Gradient) -->
        <div class="px-6 py-5 bg-gradient-to-r from-emerald-800 via-emerald-700 to-teal-800 text-white flex items-center justify-between text-left">
          <div class="flex items-center space-x-3">
            <div class="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
              <BookOpen class="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 class="text-base font-bold text-white tracking-wide">{{ isEditing ? 'Edit Book Details' : 'Add New Book' }}</h3>
              <p class="text-[11px] text-emerald-100/80 font-medium">Provide the inventory parameters for this publication.</p>
            </div>
          </div>
          <button @click="isAddModalOpen = false" class="p-2 hover:bg-white/10 rounded-xl transition-colors cursor-pointer text-white/80 hover:text-white">
            <X class="w-5 h-5" />
          </button>
        </div>

        <!-- Form fields -->
        <form @submit.prevent="submitBook" class="p-6 space-y-4 max-h-[70vh] overflow-y-auto">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            <!-- Basic Info column -->
            <div class="space-y-4 text-left">
              <div>
                <label class="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1.5">Book Title *</label>
                <input 
                  v-model="newBook.title" 
                  type="text" 
                  required 
                  placeholder="e.g., Financial Audit Essentials"
                  class="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-600 focus:outline-none focus:ring-4 focus:ring-slate-100/50 focus:border-slate-300 focus:bg-white transition-all outline-none"
                />
              </div>
              <div>
                <label class="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1.5">Author Name *</label>
                <input 
                  v-model="newBook.author" 
                  type="text" 
                  required 
                  placeholder="e.g., Dr. John Doe"
                  class="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-600 focus:outline-none focus:ring-4 focus:ring-slate-100/50 focus:border-slate-300 focus:bg-white transition-all outline-none"
                />
              </div>
              <div>
                <label class="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1.5">ISBN Number *</label>
                <input 
                  v-model="newBook.isbn" 
                  type="text" 
                  required 
                  placeholder="e.g., 978-3-16-148410-0"
                  class="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-600 focus:outline-none focus:ring-4 focus:ring-slate-100/50 focus:border-slate-300 focus:bg-white transition-all outline-none"
                />
              </div>
              <div>
                <label class="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1.5">Category *</label>
                <select 
                  v-model="newBook.category" 
                  required
                  class="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-600 focus:outline-none focus:ring-4 focus:ring-slate-100/50 focus:border-slate-300 focus:bg-white transition-all outline-none cursor-pointer"
                >
                  <option value="" disabled>Select Category</option>
                  <option value="Accounting">Accounting</option>
                  <option value="Audit">Audit</option>
                  <option value="Taxation">Taxation</option>
                  <option value="Law">Law</option>
                  <option value="Finance">Finance</option>
                  <option value="Management">Management</option>
                  <option value="Economics">Economics</option>
                  <option value="Other">Other</option>
                </select>

                <!-- Custom Category Input if Other selected -->
                <div v-if="newBook.category === 'Other'" class="mt-2.5">
                  <label class="block text-[10px] font-bold text-emerald-700 uppercase tracking-widest mb-1.5">Enter Category Name *</label>
                  <input 
                    v-model="customCategory" 
                    type="text" 
                    required 
                    placeholder="e.g. Computer Science, General Knowledge"
                    class="w-full px-4 py-2.5 bg-white border border-emerald-300 rounded-xl text-xs font-semibold text-slate-700 focus:outline-none focus:ring-4 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all outline-none"
                  />
                </div>
              </div>
            </div>

            <!-- Media / Format details column -->
            <div class="space-y-4 text-left">
              <div>
                <label class="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2.5">Format Type *</label>
                <div class="flex items-center space-x-5 py-1.5">
                  <label class="flex items-center space-x-2 cursor-pointer select-none text-xs font-bold text-slate-600">
                    <input type="radio" v-model="newBook.type" value="physical" class="w-4 h-4 text-emerald-650 focus:ring-emerald-500/20 border-slate-200 rounded-full">
                    <span>Physical</span>
                  </label>
                  <label class="flex items-center space-x-2 cursor-pointer select-none text-xs font-bold text-slate-600">
                    <input type="radio" v-model="newBook.type" value="digital" class="w-4 h-4 text-emerald-650 focus:ring-emerald-500/20 border-slate-200 rounded-full">
                    <span>Digital PDF</span>
                  </label>
                </div>
              </div>

              <!-- Location (Physical only) -->
              <div v-if="newBook.type === 'physical'">
                <label class="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1.5">Shelf Location</label>
                <input 
                  v-model="newBook.location" 
                  type="text" 
                  placeholder="e.g. Row A, Shelf 3"
                  class="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-600 focus:outline-none focus:ring-4 focus:ring-slate-100/50 focus:border-slate-300 focus:bg-white transition-all outline-none"
                />
              </div>

              <!-- PDF Upload (Digital only) -->
              <div v-if="newBook.type === 'digital'">
                <label class="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1.5">PDF File *</label>
                <input 
                  type="file" 
                  @change="handlePdfUpload" 
                  accept=".pdf" 
                  :required="!isEditing"
                  class="w-full text-xs text-slate-500 file:mr-4 file:py-1.5 file:px-3.5 file:rounded-xl file:border file:border-slate-200 file:text-[10px] file:font-bold file:uppercase file:tracking-wider file:bg-white file:text-slate-600 hover:file:bg-slate-50 transition-all cursor-pointer file:cursor-pointer"
                />
              </div>

              <div>
                <label class="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1.5">Cover Image</label>
                <input 
                  type="file" 
                  @change="handleCoverUpload" 
                  accept="image/*" 
                  class="w-full text-xs text-slate-500 file:mr-4 file:py-1.5 file:px-3.5 file:rounded-xl file:border file:border-slate-200 file:text-[10px] file:font-bold file:uppercase file:tracking-wider file:bg-white file:text-slate-600 hover:file:bg-slate-50 transition-all cursor-pointer file:cursor-pointer"
                />
              </div>

              <div v-if="newBook.type === 'physical'">
                <label class="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1.5">Borrowing Period (Days)</label>
                <input 
                  v-model.number="newBook.borrowing_period" 
                  type="number" 
                  min="1" 
                  class="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-600 focus:outline-none focus:ring-4 focus:ring-slate-100/50 focus:border-slate-300 focus:bg-white transition-all outline-none"
                />
              </div>
            </div>
          </div>

          <div class="text-left">
            <label class="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1.5">Summary / Description *</label>
            <textarea 
              v-model="newBook.description" 
              rows="3" 
              required
              placeholder="Describe the topics, summary, or content of the publication..."
              class="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-600 focus:outline-none focus:ring-4 focus:ring-slate-100/50 focus:border-slate-300 focus:bg-white transition-all outline-none resize-none"
            ></textarea>
          </div>

          <!-- Buttons -->
          <div class="pt-4 flex space-x-3 border-t border-slate-100">
            <button 
              type="button" 
              @click="isAddModalOpen = false" 
              class="flex-1 px-4 py-2.5 text-xs text-slate-550 font-bold bg-white hover:bg-slate-50 border border-slate-200 rounded-xl transition-all cursor-pointer"
            >
              Cancel
            </button>
            <button 
              type="submit" 
              :disabled="submitting" 
              class="flex-1 px-4 py-2.5 bg-emerald-600 border border-emerald-600 hover:bg-emerald-750 text-white text-xs font-bold rounded-xl transition-all shadow-sm active:scale-98 disabled:opacity-50 cursor-pointer flex items-center justify-center space-x-1.5"
            >
              <RefreshCw v-if="submitting" class="w-3.5 h-3.5 animate-spin" />
              <span>{{ submitting ? (isEditing ? 'Updating...' : 'Adding...') : (isEditing ? 'Update Book' : 'Add Book') }}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue';
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
  X,
  BookOpen
} from 'lucide-vue-next';
import { librarianAPI } from '@/shared/services/api';
import { useSwal } from '@/shared/composables/useSwal';

const { showSuccess, showError, showConfirm } = useSwal();

const books = ref<any[]>([]);
const loading = ref(false);
const submitting = ref(false);
const isAddModalOpen = ref(false);
const isEditing = ref(false);
const editingBookId = ref<number | null>(null);
const customCategory = ref('');
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

const submitBook = async () => {
  submitting.value = true;
  try {
    const formData = new FormData();
    const finalCategory = newBook.value.category === 'Other' ? customCategory.value.trim() : newBook.value.category;
    formData.append('title', newBook.value.title);
    formData.append('author', newBook.value.author);
    formData.append('isbn', newBook.value.isbn);
    formData.append('category', finalCategory);
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
    const message = error.response?.data?.message || 'Failed to save book parameters. Please try again.';
    const errors = error.response?.data?.errors;
    
    if (errors) {
      const errorMessages = Object.values(errors).flat().join('\n');
      showError('Save Failed', `${message}\n\n${errorMessages}`);
    } else {
      showError('Save Failed', message);
    }
  } finally {
    submitting.value = false;
  }
};

const resetForm = () => {
  isEditing.value = false;
  editingBookId.value = null;
  customCategory.value = '';
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
  
  const standardCategories = ['Accounting', 'Audit', 'Taxation', 'Law', 'Finance', 'Management', 'Economics'];
  const isStandard = standardCategories.includes(book.category);
  customCategory.value = isStandard ? '' : (book.category || '');

  newBook.value = {
    title: book.title,
    author: book.author,
    isbn: book.isbn,
    category: isStandard ? book.category : 'Other',
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

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap');

.font-outfit {
  font-family: 'Outfit', sans-serif;
}

.line-clamp-1 {
  display: -webkit-box;
  -webkit-line-clamp: 1;
  line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.animate-fade-in {
  animation: fade-in 0.22s ease-out;
}

.animate-in {
  animation: animate-in 0.22s cubic-bezier(0.34, 1.56, 0.64, 1);
}

@keyframes animate-in {
  from {
    opacity: 0;
    transform: scale(0.96);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
