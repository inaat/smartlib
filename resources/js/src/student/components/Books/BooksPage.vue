<template>
  <div class="space-y-6">
    <!-- Search and Filters -->
    <div class="bg-gradient-to-r from-slate-50 to-white rounded-2xl shadow-sm border border-slate-200/60 p-5 font-outfit">
      <div class="flex flex-col md:flex-row gap-4">
        <!-- Search bar -->
        <div class="flex-1 relative group">
          <Search class="absolute left-3.5 top-1/2 transform -translate-y-1/2 w-4.5 h-4.5 text-slate-400 group-focus-within:text-blue-600 transition-colors" />
          <input
            type="text"
            placeholder="Search by title, author, category, or ISBN..."
            v-model="searchQuery"
            class="w-full pl-11 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all shadow-sm text-sm text-slate-700 placeholder-slate-400"
          />
        </div>
        
        <!-- Filters -->
        <div class="flex gap-4">
          <!-- Category Filter -->
          <div class="relative min-w-[160px] group">
            <Filter class="absolute left-3.5 top-1/2 transform -translate-y-1/2 w-4.5 h-4.5 text-slate-400 group-focus-within:text-blue-600 transition-colors" />
            <select
              v-model="filterCategory"
              class="w-full pl-11 pr-10 py-2.5 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all shadow-sm text-sm text-slate-700 appearance-none cursor-pointer"
            >
              <option value="">All Categories</option>
              <option v-for="cat in categories" :key="cat" :value="cat">{{ cat }}</option>
            </select>
            <ChevronDown class="absolute right-3.5 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
          </div>

          <!-- Type Filter -->
          <div class="relative min-w-[140px] group">
            <BookOpen class="absolute left-3.5 top-1/2 transform -translate-y-1/2 w-4.5 h-4.5 text-slate-400 group-focus-within:text-blue-600 transition-colors" />
            <select
              v-model="filterType"
              class="w-full pl-11 pr-10 py-2.5 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all shadow-sm text-sm text-slate-700 appearance-none cursor-pointer"
            >
              <option value="">All Types</option>
              <option value="physical">Physical</option>
              <option value="digital">Digital</option>
            </select>
            <ChevronDown class="absolute right-3.5 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
          </div>

          <!-- Library Filter -->
          <div class="relative min-w-[160px] group">
            <LibraryIcon class="absolute left-3.5 top-1/2 transform -translate-y-1/2 w-4.5 h-4.5 text-slate-400 group-focus-within:text-blue-600 transition-colors" />
            <select
              v-model="filterLibrary"
              class="w-full pl-11 pr-10 py-2.5 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all shadow-sm text-sm text-slate-700 appearance-none cursor-pointer"
            >
              <option value="">All Libraries</option>
              <option v-for="lib in libraryOptions" :key="lib.id" :value="lib.id">{{ lib.name }}</option>
            </select>
            <ChevronDown class="absolute right-3.5 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
          </div>
        </div>
      </div>
    </div>

    <!-- Loading State -->
    <div v-if="loading" class="flex flex-col items-center justify-center py-24 space-y-4">
      <div class="animate-spin rounded-full h-10 w-10 border-2 border-blue-600 border-t-transparent"></div>
      <p class="text-xs font-semibold text-slate-400 font-outfit uppercase tracking-wider animate-pulse">Loading catalog...</p>
    </div>

    <!-- Books Grid -->
    <div v-else-if="filteredBooks.length > 0" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 font-outfit animate-fade-in">
      <div
        v-for="book in filteredBooks"
        :key="book.id"
        class="bg-white rounded-2xl border border-slate-100 hover:border-slate-200/80 transition-all duration-300 hover-lift hover:shadow-xl hover:shadow-slate-100/65 p-3.5 flex flex-col group h-full relative"
      >
        <!-- Book Cover Container -->
        <div @click="openDetailsModal(book)" class="aspect-[3/4.2] relative overflow-hidden bg-slate-50 rounded-xl shadow-inner border border-slate-100/40 mb-4 flex items-center justify-center cursor-pointer">
          <img
            v-if="book.cover_url"
            :src="book.cover_url"
            :alt="book.title"
            class="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500 ease-out"
          />
          <div v-else class="w-full h-full flex flex-col items-center justify-center bg-slate-50 text-slate-300">
            <BookIcon class="w-10 h-10 mb-2 stroke-1" />
            <span class="text-[10px] font-medium uppercase tracking-wider">No Cover</span>
          </div>
          <!-- Availability Badge -->
          <div class="absolute top-2.5 right-2.5">
            <span
              v-if="book.type?.toLowerCase() === 'digital'"
              class="px-2.5 py-1 bg-blue-600 text-white text-[9px] font-semibold uppercase tracking-wider rounded-lg shadow-sm border border-blue-500/20"
            >
              Digital
            </span>
            <span
              v-else-if="book.availability === 'available'"
              class="px-2.5 py-1 bg-emerald-500 text-white text-[9px] font-semibold uppercase tracking-wider rounded-lg shadow-sm border border-emerald-400/20"
            >
              Available
            </span>
            <span
              v-else
              class="px-2.5 py-1 bg-amber-500 text-white text-[9px] font-semibold uppercase tracking-wider rounded-lg shadow-sm border border-amber-400/20"
            >
              Reserved
            </span>
          </div>
        </div>

        <!-- Book Info -->
        <div class="flex-1 flex flex-col min-w-0">
          <div class="mb-4">
            <span class="inline-block text-[9px] font-semibold text-blue-600 bg-blue-50/50 px-2 py-0.5 rounded uppercase tracking-wider mb-2">
              {{ book.category }}
            </span>
            <h3 @click="openDetailsModal(book)" class="font-semibold text-slate-800 text-sm line-clamp-2 leading-snug group-hover:text-blue-600 transition-colors cursor-pointer" :title="book.title">
              {{ book.title }}
            </h3>
            <p class="text-xs text-slate-400 font-semibold mt-1">by {{ book.author }}</p>
          </div>

          <!-- Library details -->
          <div class="mt-auto mb-4 p-2 bg-slate-50 border border-slate-100/50 rounded-xl flex items-center space-x-2">
            <LibraryIcon class="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
            <span class="text-[10px] font-medium text-slate-500 truncate" :title="book.library?.name || 'Main Library'">
              {{ book.library?.name || 'Main Library' }}
            </span>
          </div>

          <!-- Actions -->
          <div class="pt-3 border-t border-slate-100 flex items-center space-x-2">
            <!-- Digital Books Actions -->
            <template v-if="book.type?.toLowerCase() === 'digital'">
              <button
                @click="readBook(book)"
                class="flex-1 py-2 px-3 bg-green-600 hover:opacity-95 text-white text-xs font-semibold rounded-xl transition-all shadow-md shadow-green-500/10 flex items-center justify-center space-x-1.5 active:scale-98"
              >
                <Eye class="w-3.5 h-3.5" />
                <span>Read</span>
              </button>
              <button
                @click="downloadBook(book)"
                class="py-2 px-2.5 bg-slate-50 hover:bg-slate-100 text-slate-600 rounded-xl text-xs font-semibold border border-slate-200/60 transition-all flex items-center justify-center active:scale-98"
                title="Download PDF"
              >
                <Download class="w-3.5 h-3.5" />
              </button>
            </template>

            <!-- Physical Books Actions -->
            <template v-else>
              <button
                @click="openDetailsModal(book)"
                class="w-full py-2 px-3 bg-blue-500 hover:opacity-95 text-white text-xs font-semibold rounded-xl shadow-md shadow-blue-500/10 border border-transparent transition-all flex items-center justify-center space-x-1.5 active:scale-98"
              >
                <span>{{ book.availability === 'available' ? 'Reserve Book' : 'View Details' }}</span>
              </button>
            </template>
          </div>
        </div>
      </div>
    </div>

    <!-- Empty State -->
    <div v-else class="text-center py-20 bg-slate-50/50 rounded-2xl border border-dashed border-slate-200/80 p-8 font-outfit">
      <div class="w-16 h-16 bg-slate-100 text-slate-400 rounded-full flex items-center justify-center mx-auto mb-4 border border-slate-200/50 shadow-inner animate-pulse-slow">
        <BookIcon class="w-7 h-7" />
      </div>
      <h3 class="text-base font-semibold text-slate-800 mb-1">No books found</h3>
      <p class="text-xs text-slate-400 max-w-sm mx-auto leading-relaxed">Try adjusting your search or filters to find what you're looking for.</p>
      <button @click="resetFilters" class="mt-4 px-4 py-2 bg-white hover:bg-slate-50 text-blue-600 rounded-xl text-xs font-semibold border border-slate-300 transition-all shadow-sm">
        Clear all filters
      </button>
    </div>

    <!-- Book Details & Reservation Modal -->
    <div v-if="isDetailsModalOpen" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-fade-in font-outfit">
      <div class="bg-white rounded-3xl shadow-2xl w-full max-w-2xl overflow-hidden border border-slate-100 flex flex-col max-h-[90vh] md:max-h-[85vh] animate-scale-up text-left">
        <!-- Header -->
        <div class="px-6 py-4 bg-gradient-to-r from-blue-600 to-indigo-700 text-white flex items-center justify-between">
          <h2 class="font-semibold text-sm uppercase tracking-wider">Book Details</h2>
          <button @click="isDetailsModalOpen = false" class="p-1.5 bg-white/10 hover:bg-white/20 rounded-full transition-colors">
            <X class="w-5 h-5 text-white" />
          </button>
        </div>

        <!-- Scrollable Content -->
        <div class="p-6 overflow-y-auto space-y-6 flex-1">
          <div class="flex flex-col md:flex-row gap-6">
            <!-- Left Side: Book Cover -->
            <div class="w-full md:w-44 aspect-[3/4.2] md:h-56 bg-slate-50 border border-slate-100 rounded-2xl overflow-hidden flex-shrink-0 flex items-center justify-center shadow-md">
              <img v-if="selectedBook.cover_url" :src="selectedBook.cover_url" :alt="selectedBook.title" class="w-full h-full object-cover" />
              <div v-else class="w-full h-full flex flex-col items-center justify-center text-slate-300">
                <BookIcon class="w-12 h-12 mb-2 stroke-1" />
                <span class="text-xs font-medium uppercase tracking-wider">No Cover</span>
              </div>
            </div>

            <!-- Right Side: Details -->
            <div class="flex-1 space-y-4">
              <div>
                <span class="px-2.5 py-1 bg-blue-50 text-blue-600 text-[10px] font-semibold uppercase tracking-wider rounded-lg border border-blue-100">
                  {{ selectedBook.category }}
                </span>
                <h3 class="font-semibold text-slate-800 text-lg leading-tight mt-2.5">{{ selectedBook.title }}</h3>
                <p class="text-xs text-slate-400 font-semibold mt-1">by <span class="text-slate-650 font-bold">{{ selectedBook.author }}</span></p>
              </div>

              <!-- Metadata Grid -->
              <div class="grid grid-cols-2 gap-3.5 bg-slate-50/50 p-3.5 border border-slate-100 rounded-2xl text-xs text-slate-500">
                <div>
                  <span class="block text-[10px] text-slate-400 uppercase font-semibold tracking-wider">ISBN</span>
                  <span class="font-bold text-slate-700">{{ selectedBook.isbn || 'N/A' }}</span>
                </div>
                <div>
                  <span class="block text-[10px] text-slate-400 uppercase font-semibold tracking-wider">Format / Type</span>
                  <span class="font-bold text-slate-700 capitalize">{{ selectedBook.type }}</span>
                </div>
                <div>
                  <span class="block text-[10px] text-slate-400 uppercase font-semibold tracking-wider">Availability</span>
                  <span 
                    :class="[
                      'font-semibold uppercase text-[9px] px-2 py-0.5 rounded-md border w-fit block mt-0.5',
                      selectedBook.availability === 'available' ? 'bg-emerald-50 text-emerald-600 border-emerald-100' : 'bg-amber-50 text-amber-600 border-amber-100'
                    ]"
                  >
                    {{ selectedBook.availability }}
                  </span>
                </div>
                <div>
                  <span class="block text-[10px] text-slate-400 uppercase font-semibold tracking-wider">Location / Shelf</span>
                  <span class="font-bold text-slate-700">{{ selectedBook.location || 'N/A' }}</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Description -->
          <div class="space-y-2">
            <h4 class="text-xs font-semibold uppercase tracking-wider text-slate-450">Synopsis / Description</h4>
            <p class="text-slate-600 text-xs leading-relaxed bg-slate-50/30 p-4 border border-slate-100 rounded-2xl whitespace-pre-line">{{ selectedBook.description || 'No description available for this book.' }}</p>
          </div>

          <!-- Reservation Duration Picker (Physical & Available Only) -->
          <div v-if="selectedBook.type?.toLowerCase() === 'physical' && selectedBook.availability === 'available'" class="bg-blue-50/30 border border-blue-100/50 p-5 rounded-2xl space-y-4">
            <div class="flex items-center justify-between">
              <div>
                <h4 class="text-xs font-semibold text-slate-800 uppercase tracking-wide">Reservation Duration</h4>
                <p class="text-[10px] text-slate-400 font-semibold mt-0.5">Select how many days you would like to reserve the book.</p>
              </div>
              <div class="text-right">
                <span class="block text-[9px] text-slate-400 uppercase font-semibold tracking-wider">Max Period</span>
                <span class="text-xs font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-lg border border-blue-100 mt-1 inline-block">
                  {{ maxAllowedDays }} Days
                </span>
              </div>
            </div>

            <!-- Slider + Number Input -->
            <div class="flex flex-col sm:flex-row items-center gap-4 bg-white p-4 rounded-xl border border-slate-100">
              <div class="flex-1 w-full flex items-center space-x-3.5">
                <span class="text-xs font-medium text-slate-400">1d</span>
                <input 
                  type="range" 
                  min="1" 
                  :max="maxAllowedDays" 
                  v-model.number="reservationDays" 
                  class="flex-1 accent-blue-650 h-1.5 bg-slate-100 rounded-lg cursor-pointer"
                />
                <span class="text-xs font-medium text-slate-400">{{ maxAllowedDays }}d</span>
              </div>
              
              <div class="flex items-center space-x-2">
                <input 
                  type="number" 
                  min="1" 
                  :max="maxAllowedDays" 
                  v-model.number="reservationDays" 
                  class="w-16 px-3 py-1.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-center font-bold text-slate-700 text-xs shadow-sm"
                />
                <span class="text-xs font-medium text-slate-500">Days</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Footer Actions -->
        <div class="px-6 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-end space-x-3">
          <button 
            @click="isDetailsModalOpen = false" 
            class="px-5 py-2.5 bg-white hover:bg-slate-100 text-slate-600 rounded-xl text-xs font-semibold border border-slate-200 transition-all active:scale-98"
          >
            Close
          </button>

          <!-- Digital Actions -->
          <template v-if="selectedBook.type?.toLowerCase() === 'digital'">
            <button 
              @click="readBook(selectedBook)" 
              class="px-5 py-2.5 bg-green-600 hover:bg-green-750 text-white rounded-xl text-xs font-semibold transition-all shadow-md shadow-green-500/10 flex items-center space-x-1.5 active:scale-98"
            >
              <Eye class="w-3.5 h-3.5" />
              <span>Read Online</span>
            </button>
            <button 
              @click="downloadBook(selectedBook)" 
              class="px-5 py-2.5 bg-slate-800 hover:bg-slate-900 text-white rounded-xl text-xs font-semibold transition-all shadow-md shadow-slate-800/10 flex items-center space-x-1.5 active:scale-98"
            >
              <Download class="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </button>
          </template>

          <!-- Physical Actions -->
          <template v-else-if="selectedBook.availability === 'available'">
            <button 
              @click="submitReservation" 
              :disabled="reserving === selectedBook.id"
              class="px-5 py-2.5 bg-blue-600 hover:opacity-95 text-white rounded-xl text-xs font-semibold transition-all shadow-md shadow-blue-500/15 flex items-center space-x-1.5 active:scale-98 disabled:opacity-50"
            >
              <span v-if="reserving === selectedBook.id" class="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
              <BookIcon v-else class="w-3.5 h-3.5" />
              <span>Request Reservation</span>
            </button>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { 
  Search, 
  Filter, 
  Book as BookIcon, 
  BookOpen, 
  Library as LibraryIcon,
  ChevronDown,
  Eye,
  Download,
  X
} from 'lucide-vue-next';
import { studentAPI } from '@/shared/services/api';
import { useSwal } from '@/shared/composables/useSwal';
import { useGeolocation } from '@/shared/composables/useGeolocation';

const route = useRoute();
const { showSuccess, showError, showWarning } = useSwal();
const { latitude, longitude } = useGeolocation();

const books = ref<any[]>([]);
const loading = ref(true);
const reserving = ref<number | null>(null);

// Modal states
const isDetailsModalOpen = ref(false);
const selectedBook = ref<any>({});
const reservationDays = ref(14);

const maxAllowedDays = computed(() => {
  return selectedBook.value?.borrowing_period || 14;
});

const openDetailsModal = (book: any) => {
  selectedBook.value = book;
  reservationDays.value = book.borrowing_period || 14;
  isDetailsModalOpen.value = true;
};

// Filter states
const searchQuery = ref('');
const filterCategory = ref('');
const filterType = ref('');
const filterLibrary = ref<string | number>('');

// Computed filtered books
const filteredBooks = computed(() => {
  return books.value.filter(book => {
    const matchesSearch = 
      book.title?.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      book.author?.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      book.isbn?.includes(searchQuery.value);
    
    const matchesCategory = !filterCategory.value || book.category === filterCategory.value;
    const matchesType = !filterType.value || book.type?.toLowerCase() === filterType.value.toLowerCase();

    const matchesLibrary = !filterLibrary.value || book.library_id == filterLibrary.value || book.library?.id == filterLibrary.value;

    return matchesSearch && matchesCategory && matchesType && matchesLibrary;
  });
});

const libraryOptions = computed(() => {
  const seen = new Map<number, string>();
  books.value.forEach(b => {
    const lib = b.library;
    if (lib && lib.id && !seen.has(lib.id)) {
      seen.set(lib.id, lib.name);
    }
  });
  return Array.from(seen.entries()).map(([id, name]) => ({ id, name }));
});

// Categories list
const categories = computed(() => {
  const all = books.value.map(b => b.category).filter(Boolean);
  return [...new Set(all)];
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

const submitReservation = async () => {
  if (reservationDays.value < 1 || reservationDays.value > maxAllowedDays.value) {
    showError('Invalid Duration', `Reservation days must be between 1 and ${maxAllowedDays.value} days.`);
    return;
  }

  reserving.value = selectedBook.value.id;
  try {
    await studentAPI.reserveBook(selectedBook.value.id, reservationDays.value, latitude.value ?? undefined, longitude.value ?? undefined);
    showSuccess('Requested!', 'Your reservation request was submitted. Awaiting librarian approval.');
    isDetailsModalOpen.value = false;
    await fetchBooks();
  } catch (error: any) {
    console.error('Error reserving book:', error);
    showError('Reservation Failed', error.response?.data?.message || 'Failed to request reservation.');
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
  filterLibrary.value = '';
};

onMounted(() => {
  // Pre-set library filter from query params (from 'Reserve Book' on library card)
  const libraryParam = route.query.library;
  if (libraryParam) {
    filterLibrary.value = Number(libraryParam);
  }
  fetchBooks();
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap');

.font-outfit {
  font-family: 'Outfit', sans-serif;
}

@keyframes pulseSlow {
  0%, 100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.03);
    opacity: 0.9;
  }
}
.animate-pulse-slow {
  animation: pulseSlow 3s infinite ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(12px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-fade-in {
  animation: fadeIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

@keyframes scaleUp {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
.animate-scale-up {
  animation: scaleUp 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.hover-lift {
  transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.25s cubic-bezier(0.16, 1, 0.3, 1);
}
.hover-lift:hover {
  transform: translateY(-4px);
}

.active\:scale-98:active {
  transform: scale(0.98);
}
.text-slate-650 {
  color: #475569;
}
.bg-green-750 {
  background-color: #15803d;
}
.accent-blue-650 {
  accent-color: #2563eb;
}
.text-slate-450 {
  color: #64748b;
}
</style>
