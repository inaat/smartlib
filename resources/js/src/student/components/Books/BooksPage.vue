<template>
  <div class="space-y-6">
    <!-- Header -->
    <div class="flex items-center justify-between">
      <div>
        <h1 class="text-2xl font-bold text-gray-800">Library Catalog</h1>
        <p class="text-gray-600 mt-1">Browse and reserve books from our collection</p>
      </div>
    </div>

    <!-- Search and Filters -->
    <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div class="flex flex-col md:flex-row gap-4">
        <div class="flex-1 relative">
          <Search class="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search by title, author, or ISBN..."
            v-model="searchQuery"
            class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        
        <div class="flex gap-4">
          <div class="relative min-w-[150px]">
            <Filter class="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <select
              v-model="filterCategory"
              class="w-full pl-10 pr-8 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
            >
              <option value="">All Categories</option>
              <option v-for="cat in categories" :key="cat" :value="cat">{{ cat }}</option>
            </select>
          </div>

          <div class="relative min-w-[150px]">
            <BookOpen class="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <select
              v-model="filterType"
              class="w-full pl-10 pr-8 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
            >
              <option value="">All Types</option>
              <option value="physical">Physical</option>
              <option value="digital">Digital</option>
            </select>
          </div>
        </div>
      </div>
    </div>

    <!-- Loading State -->
    <div v-if="loading" class="flex items-center justify-center py-20">
      <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
    </div>

    <!-- Books Grid -->
    <div v-else-if="filteredBooks.length > 0" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      <div
        v-for="book in filteredBooks"
        :key="book.id"
        class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-all group flex flex-col"
      >
        <div class="aspect-[3/4] relative overflow-hidden bg-gray-100">
          <img
            :src="book.cover_url"
            :alt="book.title"
            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div class="absolute top-2 right-2">
            <span
              :class="[
                'px-2 py-1 rounded-full text-xs font-medium shadow-sm',
                book.type?.toLowerCase() === 'digital' ? 'bg-blue-100 text-blue-700' : (book.availability === 'available' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700')
              ]"
            >
              {{ book.type?.toLowerCase() === 'digital' ? 'Digital' : (book.availability === 'available' ? 'Available' : 'Reserved') }}
            </span>
          </div>

        </div>

        <div class="p-4 flex-1 flex flex-col">
          <div class="mb-2">
            <span class="text-[10px] font-bold text-blue-600 uppercase tracking-widest">{{ book.category }}</span>
            <h3 class="font-bold text-gray-900 line-clamp-1 group-hover:text-blue-600 transition-colors">{{ book.title }}</h3>
            <p class="text-sm text-gray-500">by {{ book.author }}</p>
          </div>

          <div class="mt-auto pt-4 flex items-center justify-between border-t border-gray-50">
            <div class="flex items-center text-xs text-gray-500">
              <LibraryIcon class="w-3 h-3 mr-1" />
              <span class="line-clamp-1">{{ book.library?.name || 'Main Library' }}</span>
            </div>
            <div v-if="book.type?.toLowerCase() === 'digital'" class="flex items-center space-x-2">
              <button
                @click="readBook(book)"
                class="px-3 py-1.5 bg-indigo-600 text-white text-xs font-medium rounded-lg hover:bg-indigo-700 transition-colors flex items-center space-x-1"
              >
                <Eye class="w-3 h-3" />
                <span>Read</span>
              </button>
              <button
                @click="downloadBook(book)"
                class="px-3 py-1.5 bg-green-600 text-white text-xs font-medium rounded-lg hover:bg-green-700 transition-colors flex items-center space-x-1"
              >
                <Download class="w-3 h-3" />
                <span>Download</span>
              </button>
            </div>
            <button
              v-else
              @click="reserveBook(book)"
              :disabled="book.availability !== 'available' || reserving === book.id"
              class="px-3 py-1.5 bg-blue-600 text-white text-xs font-medium rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {{ reserving === book.id ? '...' : 'Reserve' }}
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Empty State -->
    <div v-else class="text-center py-20 bg-white rounded-xl border border-dashed border-gray-300">
      <BookIcon class="w-16 h-16 text-gray-300 mx-auto mb-4" />
      <h3 class="text-lg font-medium text-gray-800 mb-2">No books found</h3>
      <p class="text-gray-600">Try adjusting your search or filters to find what you're looking for.</p>
      <button @click="resetFilters" class="mt-4 text-blue-600 font-medium hover:underline">
        Clear all filters
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { 
  Search, 
  Filter, 
  Book as BookIcon, 
  BookOpen, 
  Library as LibraryIcon,
  ChevronRight,
  Eye,
  Download
} from 'lucide-vue-next';
import { studentAPI } from '@/shared/services/api';

const books = ref<any[]>([]);
const loading = ref(true);
const reserving = ref<number | null>(null);
const searchQuery = ref('');
const filterCategory = ref('');
const filterType = ref('');

const categories = computed(() => {
  const cats = new Set(books.value.map(b => b.category).filter(Boolean));
  return Array.from(cats).sort();
});

const filteredBooks = computed(() => {
  return books.value.filter(book => {
    const matchesSearch = !searchQuery.value || 
      book.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      book.author.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      book.isbn?.toLowerCase().includes(searchQuery.value.toLowerCase());
    
    const matchesCategory = !filterCategory.value || book.category === filterCategory.value;
    const matchesType = !filterType.value || book.type?.toLowerCase() === filterType.value.toLowerCase();
    
    return matchesSearch && matchesCategory && matchesType;
  });
});

const fetchBooks = async () => {
  loading.value = true;
  try {
    const data = await studentAPI.getBooks();
    books.value = data;
  } catch (error) {
    console.error('Error fetching books:', error);
  } finally {
    loading.value = false;
  }
};

import { useSwal } from '@/shared/composables/useSwal';
const { showConfirm, showSuccess, showError, showWarning } = useSwal();

const reserveBook = async (book: any) => {
  if (!await showConfirm('Reserve Book', `Are you sure you want to reserve "${book.title}"?`, 'Yes, Reserve')) return;
  
  reserving.value = book.id;
  try {
    await studentAPI.reserveBook(book.id);
    showSuccess('Reserved!', 'Book reserved successfully! You can pick it up within 7 days.');
    await fetchBooks();
  } catch (error: any) {
    console.error('Error reserving book:', error);
    showError('Reservation Failed', error.response?.data?.message || 'Failed to reserve book.');
  } finally {
    reserving.value = null;
  }
};

const readBook = (book: any) => {
  if (book.digital_access?.file_url) {
    window.open(book.digital_access.file_url, '_blank');
  } else {
    showWarning('Not Available', 'This digital book is not yet available for reading.');
  }
};

const downloadBook = (book: any) => {
  if (book.digital_access?.file_url) {
    const link = document.createElement('a');
    link.href = book.digital_access.file_url;
    link.download = `${book.title}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } else {
    showWarning('Not Available', 'This digital book is not yet available for download.');
  }
};

const resetFilters = () => {
  searchQuery.value = '';
  filterCategory.value = '';
  filterType.value = '';
};

onMounted(() => {
  fetchBooks();
});
</script>
