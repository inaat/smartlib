<template>
  <div class="space-y-6">
    <!-- Header -->
    <div class="flex items-center justify-between">
      <div>
        <h1 class="text-3xl font-bold text-gray-900">Book Inventory</h1>
        <p class="text-gray-600 mt-1">Manage library books across all libraries</p>
      </div>
      <button
        @click="openCreateModal"
        class="px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all flex items-center space-x-2"
      >
        <span class="text-sm font-medium">Add New Book</span>
      </button>
    </div>

    <!-- Library Selector -->
    <LibrarySelector v-model="selectedLibraryId" />

    <!-- Filters Bar -->
    <div class="bg-white p-4 rounded-xl shadow-sm border border-gray-200 mb-6">
      <div class="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-4">
        <div class="flex-1">
          <label class="block text-xs font-semibold text-gray-500 uppercase mb-1 ml-1">Search Books</label>
          <div class="relative">
            <Search class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              v-model="searchQuery"
              type="text"
              placeholder="Search by title, author, or ISBN..."
              class="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm transition-all"
              @input="debounceSearch"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- Books List -->
    <div class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      <div class="overflow-x-auto">
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-gray-50">
            <tr>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Book</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Details</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Library</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <tr v-for="book in books" :key="book.id" class="hover:bg-gray-50">
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex items-center">
                  <div class="w-10 h-14 bg-gray-100 rounded overflow-hidden flex-shrink-0">
                    <img v-if="book.cover" :src="book.cover" class="w-full h-full object-cover" />
                    <BookIcon v-else class="w-full h-full p-2 text-gray-400" />
                  </div>
                  <div class="ml-4">
                    <div class="text-sm font-medium text-gray-900">{{ book.title }}</div>
                    <div class="text-xs text-gray-500">by {{ book.author }}</div>
                  </div>
                </div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-xs text-gray-900">ISBN: {{ book.isbn }}</div>
                <div class="text-xs text-gray-500 capitalize">{{ book.category }} • {{ book.type }}</div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-gray-900">{{ book.library?.name || 'Global' }}</div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <span
                  :class="[
                    'px-2 inline-flex text-xs leading-5 font-semibold rounded-full',
                    book.availability === 'available' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                  ]"
                >
                  {{ book.availability }}
                </span>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <button @click="editBook(book)" class="text-indigo-600 hover:text-indigo-900 mr-4">Edit</button>
                <button @click="confirmDelete(book)" class="text-red-600 hover:text-red-900">Delete</button>
              </td>
            </tr>
            <tr v-if="books.length === 0">
              <td colspan="5" class="px-6 py-12 text-center text-gray-500">
                No books found. Try adjusting your search or library filter.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Create/Edit Modal -->
    <div v-if="showModal" class="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 overflow-y-auto">
      <div class="bg-white rounded-xl shadow-xl max-w-2xl w-full mx-4 my-8 p-6">
        <div class="flex items-center justify-between mb-4">
          <h3 class="text-xl font-bold text-gray-900">{{ isEditing ? 'Edit Book' : 'Add New Book' }}</h3>
          <button @click="closeModal" class="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <X class="w-5 h-5" />
          </button>
        </div>

        <form @submit.prevent="saveBook" class="space-y-4">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Title</label>
              <input v-model="form.title" type="text" required class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Author</label>
              <input v-model="form.author" type="text" required class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" />
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">ISBN</label>
              <input v-model="form.isbn" type="text" required class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Category</label>
              <input v-model="form.category" type="text" required class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" placeholder="e.g. Science, Fiction" />
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Library</label>
              <select v-model="form.library_id" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500">
                <option :value="null">Global (No Library)</option>
                <option v-for="lib in libraries" :key="lib.id" :value="lib.id">{{ lib.name }}</option>
              </select>
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Type</label>
              <select v-model="form.type" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500">
                <option value="physical">Physical</option>
                <option value="digital">Digital</option>
              </select>
            </div>
            <div v-if="form.type === 'physical'">
              <label class="block text-sm font-medium text-gray-700 mb-1">Borrowing Period (Days)</label>
              <input v-model.number="form.borrowing_period" type="number" min="1" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" placeholder="e.g. 7" />
            </div>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Description</label>
            <textarea v-model="form.description" rows="3" required class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"></textarea>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Cover Image</label>
              <input type="file" @change="handleCoverUpload" accept="image/*" class="w-full px-4 py-2 border border-gray-300 rounded-lg" />
            </div>
            <div v-if="form.type === 'digital'">
              <label class="block text-sm font-medium text-gray-700 mb-1">PDF File</label>
              <input type="file" @change="handlePdfUpload" accept="application/pdf" required class="w-full px-4 py-2 border border-gray-300 rounded-lg" />
            </div>
            <div v-else>
              <label class="block text-sm font-medium text-gray-700 mb-1">Location (Shelf/Row)</label>
              <input v-model="form.location" type="text" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" placeholder="e.g. A-12" />
            </div>
          </div>

          <div class="flex items-center space-x-3 pt-4">
            <button
              type="submit"
              :disabled="loading"
              class="flex-1 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors disabled:opacity-50"
            >
              {{ loading ? 'Saving...' : (isEditing ? 'Update Book' : 'Create Book') }}
            </button>
            <button
              type="button"
              @click="closeModal"
              class="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from 'vue';
import { Search, Book as BookIcon, X } from 'lucide-vue-next';
import { superadminAPI } from '../../services/superadminApi';
import LibrarySelector from '../Shared/LibrarySelector.vue';

const selectedLibraryId = ref<number | null>(null);
const searchQuery = ref('');
const books = ref<any[]>([]);
const libraries = ref<any[]>([]);
const showModal = ref(false);
const isEditing = ref(false);
const loading = ref(false);

const form = ref({
  id: null as number | null,
  title: '',
  author: '',
  isbn: '',
  description: '',
  category: '',
  type: 'physical',
  library_id: null as number | null,
  location: '',
  cover_image: null as File | null,
  pdf_file: null as File | null,
  status: 'available',
  borrowing_period: 7
});

const fetchBooks = async () => {
  try {
    const params: any = {};
    if (selectedLibraryId.value) params.library_id = selectedLibraryId.value;
    if (searchQuery.value) params.search = searchQuery.value;
    
    books.value = await superadminAPI.getBooks(params);
  } catch (error) {
    console.error('Error fetching books:', error);
  }
};

const fetchLibraries = async () => {
  try {
    libraries.value = await superadminAPI.getLibraries();
  } catch (error) {
    console.error('Error fetching libraries:', error);
  }
};

watch(selectedLibraryId, fetchBooks);

let searchTimeout: any = null;
const debounceSearch = () => {
  clearTimeout(searchTimeout);
  searchTimeout = setTimeout(fetchBooks, 500);
};

const handleCoverUpload = (event: Event) => {
  const target = event.target as HTMLInputElement;
  if (target.files && target.files[0]) {
    form.value.cover_image = target.files[0];
  }
};

const handlePdfUpload = (event: Event) => {
  const target = event.target as HTMLInputElement;
  if (target.files && target.files[0]) {
    form.value.pdf_file = target.files[0];
  }
};

const openCreateModal = () => {
  isEditing.value = false;
  form.value = {
    id: null,
    title: '',
    author: '',
    isbn: '',
    description: '',
    category: '',
    type: 'physical',
    library_id: selectedLibraryId.value,
    location: '',
    cover_image: null,
    pdf_file: null,
    status: 'available',
    borrowing_period: 7
  };
  showModal.value = true;
};

const editBook = (book: any) => {
  isEditing.value = true;
  form.value = {
    id: book.id,
    title: book.title,
    author: book.author,
    isbn: book.isbn,
    description: book.description,
    category: book.category,
    type: book.type,
    library_id: book.library_id,
    location: book.location,
    cover_image: null,
    pdf_file: null,
    status: book.availability,
    borrowing_period: book.borrowing_period || 7
  };
  showModal.value = true;
};

const closeModal = () => {
  showModal.value = false;
};

import { useSwal } from '@/shared/composables/useSwal';
const { showConfirm, showSuccess, showError } = useSwal();

const saveBook = async () => {
  loading.value = true;
  try {
    const formData = new FormData();
    formData.append('title', form.value.title);
    formData.append('author', form.value.author);
    formData.append('isbn', form.value.isbn);
    formData.append('description', form.value.description);
    formData.append('category', form.value.category);
    formData.append('type', form.value.type);
    formData.append('library_id', form.value.library_id ? form.value.library_id.toString() : '');
    formData.append('location', form.value.location || '');
    formData.append('status', form.value.status);
    formData.append('borrowing_period', form.value.borrowing_period.toString());
    
    if (form.value.cover_image instanceof File) formData.append('cover_image', form.value.cover_image);
    if (form.value.pdf_file instanceof File) formData.append('pdf_file', form.value.pdf_file);

    if (isEditing.value && form.value.id) {
      await superadminAPI.updateBook(form.value.id.toString(), formData as any);
      showSuccess('Updated!', 'Book updated successfully');
    } else {
      await superadminAPI.createBook(formData as any);
      showSuccess('Created!', 'Book created successfully');
    }
    await fetchBooks();
    closeModal();
  } catch (error: any) {
    console.error('Error saving book:', error);
    const message = error.response?.data?.message || 'Failed to save book. Please check the form and try again.';
    const errors = error.response?.data?.errors;
    
    if (errors) {
      const errorMessages = Object.values(errors).flat().join('\n');
      showError('Save Failed', `${message}\n\n${errorMessages}`);
    } else {
      showError('Save Failed', message);
    }
  } finally {
    loading.value = false;
  }
};

const confirmDelete = async (book: any) => {
  if (await showConfirm('Delete Book', 'Are you sure you want to delete this book?', 'Yes, Delete')) {
    try {
      await superadminAPI.deleteBook(book.id.toString());
      showSuccess('Deleted!', 'Book deleted successfully');
      await fetchBooks();
    } catch (error) {
      console.error('Error deleting book:', error);
      showError('Delete Failed', 'Failed to delete book');
    }
  }
};

onMounted(() => {
  fetchBooks();
  fetchLibraries();
});
</script>
