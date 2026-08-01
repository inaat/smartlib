<template>
  <div class="p-6 space-y-6">
    <!-- Loading State -->
    <div v-if="loading" class="flex items-center justify-center py-20">
      <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
    </div>

    <!-- Library Details -->
    <div v-else-if="library" class="space-y-6">
      <!-- Header -->
      <div class="flex items-center justify-between mb-6">
        <div class="flex items-center space-x-4">
          <router-link
            to="/superadmin/libraries"
            class="p-2 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer"
          >
            <ArrowLeft class="w-5 h-5 text-gray-600" />
          </router-link>
          <div class="text-left">
            <h1 class="text-3xl font-bold text-gray-900">{{ library.name }}</h1>
            <p class="text-gray-600 mt-1 text-xs">Library Details, Statistics & Student Reviews</p>
          </div>
        </div>
        <div class="flex items-center space-x-3">
          <span
            :class="[
              'px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider',
              library.is_active ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
            ]"
          >
            {{ library.is_active ? 'Active' : 'Inactive' }}
          </span>
        </div>
      </div>

      <!-- Library Info Card -->
      <div class="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
        <div class="h-48 bg-gradient-to-br from-purple-50 to-fuchsia-50 relative">
          <img
            v-if="library.photo"
            :src="library.photo_url"
            class="w-full h-full object-cover"
            alt="Library cover"
          />
          <div v-else class="w-full h-full flex items-center justify-center">
            <Building2 class="w-16 h-16 text-purple-300" />
          </div>
        </div>

        <div class="p-6 text-left">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 class="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Address</h3>
              <p class="text-gray-900 text-sm flex items-start font-medium">
                <MapPin class="w-4 h-4 mr-2 mt-0.5 text-gray-400 flex-shrink-0" />
                {{ library.address }}
              </p>
            </div>
            <div>
              <h3 class="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Opening Hours</h3>
              <p class="text-gray-900 text-sm flex items-center font-medium">
                <Clock class="w-4 h-4 mr-2 text-gray-400 flex-shrink-0" />
                {{ library.opening_hours }}
              </p>
            </div>
            <div>
              <h3 class="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Total Capacity</h3>
              <p class="text-gray-900 text-sm flex items-center font-medium">
                <Users class="w-4 h-4 mr-2 text-gray-400 flex-shrink-0" />
                {{ library.capacity }} seats
              </p>
            </div>
            <div v-if="library.wifi_password">
              <h3 class="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">WiFi Password</h3>
              <p class="text-gray-900 text-sm flex items-center font-medium">
                <Wifi class="w-4 h-4 mr-2 text-gray-400 flex-shrink-0" />
                {{ library.wifi_password }}
              </p>
            </div>
            <div v-if="library.description" class="md:col-span-2">
              <h3 class="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Description</h3>
              <p class="text-gray-900 text-sm font-normal">{{ library.description }}</p>
            </div>
          </div>

          <div class="flex items-center space-x-4 mt-6 pt-6 border-t border-gray-200">
            <div v-if="library.parking_available" class="flex items-center text-xs font-semibold text-gray-600">
              <Car class="w-4 h-4 mr-2 text-green-600" />
              Parking Available
            </div>
            <div v-if="library.latitude && library.longitude" class="flex items-center text-xs font-semibold text-gray-600">
              <MapPin class="w-4 h-4 mr-2 text-purple-600" />
              {{ library.latitude }}, {{ library.longitude }}
            </div>
          </div>
        </div>
      </div>

      <!-- Statistics Grid (5 cards) -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
        <div class="bg-white rounded-2xl shadow-sm border border-gray-200 p-5 text-left">
          <div class="flex items-center justify-between mb-2">
            <h3 class="text-xs font-bold text-gray-400 uppercase tracking-wider">Total Seats</h3>
            <div class="p-2 bg-blue-100 rounded-lg">
              <Users class="w-4 h-4 text-blue-600" />
            </div>
          </div>
          <p class="text-2xl font-extrabold text-gray-900">{{ library.totalSeats || library.capacity }}</p>
        </div>

        <div class="bg-white rounded-2xl shadow-sm border border-gray-200 p-5 text-left">
          <div class="flex items-center justify-between mb-2">
            <h3 class="text-xs font-bold text-gray-400 uppercase tracking-wider">Available</h3>
            <div class="p-2 bg-green-100 rounded-lg">
              <CheckCircle class="w-4 h-4 text-green-600" />
            </div>
          </div>
          <p class="text-2xl font-extrabold text-green-600">{{ library.availableSeats || 0 }}</p>
        </div>

        <div class="bg-white rounded-2xl shadow-sm border border-gray-200 p-5 text-left">
          <div class="flex items-center justify-between mb-2">
            <h3 class="text-xs font-bold text-gray-400 uppercase tracking-wider">Occupied</h3>
            <div class="p-2 bg-orange-100 rounded-lg">
              <UserCheck class="w-4 h-4 text-orange-600" />
            </div>
          </div>
          <p class="text-2xl font-extrabold text-orange-600">{{ (library.totalSeats || library.capacity) - (library.availableSeats || 0) }}</p>
        </div>

        <div class="bg-white rounded-2xl shadow-sm border border-gray-200 p-5 text-left">
          <div class="flex items-center justify-between mb-2">
            <h3 class="text-xs font-bold text-gray-400 uppercase tracking-wider">Occupancy Rate</h3>
            <div class="p-2 bg-purple-100 rounded-lg">
              <TrendingUp class="w-4 h-4 text-purple-600" />
            </div>
          </div>
          <p class="text-2xl font-extrabold text-purple-600">
            {{ library.totalSeats ? Math.round(((library.totalSeats - (library.availableSeats || 0)) / library.totalSeats) * 100) : 0 }}%
          </p>
        </div>

        <div class="bg-white rounded-2xl shadow-sm border border-gray-200 p-5 text-left">
          <div class="flex items-center justify-between mb-2">
            <h3 class="text-xs font-bold text-gray-400 uppercase tracking-wider">Rating</h3>
            <div class="p-2 bg-amber-100 rounded-lg">
              <Star class="w-4 h-4 fill-amber-500 text-amber-500" />
            </div>
          </div>
          <div class="flex items-baseline space-x-1.5">
            <p class="text-2xl font-extrabold text-amber-600">{{ reviewsData.average_rating || library.average_rating || '0.0' }}</p>
            <span class="text-xs font-semibold text-gray-400">({{ reviewsData.total_reviews }} reviews)</span>
          </div>
        </div>
      </div>

      <!-- Student Reviews & Ratings Section -->
      <div class="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 space-y-6 text-left">
        <div class="flex items-center justify-between">
          <div>
            <h2 class="text-lg font-bold text-gray-900">Student Reviews & Ratings</h2>
            <p class="text-xs text-gray-500 mt-0.5">Feedback and ratings submitted by students for {{ library.name }}</p>
          </div>
          <button
            @click="fetchReviews"
            :disabled="reviewsLoading"
            class="px-3 py-1.5 bg-gray-50 border border-gray-200 hover:bg-gray-100 rounded-xl text-xs font-semibold text-gray-600 flex items-center space-x-1.5 transition-colors cursor-pointer"
          >
            <RefreshCw :class="['w-3.5 h-3.5', reviewsLoading ? 'animate-spin' : '']" />
            <span>Refresh</span>
          </button>
        </div>

        <!-- Rating Summary Card -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 bg-slate-50/70 p-6 rounded-2xl border border-slate-100">
          <!-- Left: Score Box -->
          <div class="flex flex-col items-center justify-center p-5 bg-white rounded-xl shadow-sm border border-slate-100 text-center">
            <span class="text-4xl font-extrabold text-gray-800 tracking-tight">{{ reviewsData.average_rating || '0.0' }}</span>
            <div class="flex items-center space-x-1 my-2">
              <Star
                v-for="star in 5"
                :key="star"
                :class="[
                  'w-5 h-5',
                  star <= Math.round(reviewsData.average_rating)
                    ? 'fill-amber-400 text-amber-400'
                    : 'fill-slate-100 text-slate-200'
                ]"
              />
            </div>
            <p class="text-xs font-semibold text-gray-500 uppercase tracking-wider">
              Based on {{ reviewsData.total_reviews }} student {{ reviewsData.total_reviews === 1 ? 'review' : 'reviews' }}
            </p>
          </div>

          <!-- Right: Rating Breakdown Bars -->
          <div class="md:col-span-2 space-y-2.5 flex flex-col justify-center">
            <div v-for="star in [5, 4, 3, 2, 1]" :key="star" class="flex items-center space-x-3 text-xs">
              <span class="w-12 font-bold text-gray-600 flex items-center justify-end">
                {{ star }} <Star class="w-3.5 h-3.5 fill-amber-400 text-amber-400 ml-1 inline" />
              </span>
              <div class="flex-1 h-2.5 bg-slate-200/80 rounded-full overflow-hidden">
                <div
                  class="h-full bg-purple-600 rounded-full transition-all duration-500"
                  :style="{ width: getStarPercent(star) + '%' }"
                ></div>
              </div>
              <span class="w-10 text-right font-semibold text-gray-400">
                {{ reviewsData.rating_breakdown[star] || 0 }}
              </span>
            </div>
          </div>
        </div>

        <!-- Reviews List -->
        <div v-if="reviewsLoading" class="flex justify-center py-12">
          <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600"></div>
        </div>

        <div v-else-if="reviewsData.reviews.length === 0" class="text-center py-12 bg-slate-50/50 rounded-2xl border border-dashed border-slate-200">
          <MessageSquare class="w-12 h-12 text-slate-300 mx-auto mb-3" />
          <p class="text-xs font-bold text-slate-400 uppercase tracking-widest">No student reviews submitted for this library yet.</p>
        </div>

        <div v-else class="space-y-4">
          <div
            v-for="review in reviewsData.reviews"
            :key="review.id"
            class="p-5 rounded-2xl border border-slate-100 hover:border-purple-100/80 bg-white shadow-sm transition-all text-left space-y-3"
          >
            <div class="flex items-start justify-between">
              <!-- Student Info -->
              <div class="flex items-center space-x-3.5">
                <div class="w-10 h-10 rounded-full overflow-hidden bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-700 font-bold text-sm flex-shrink-0">
                  <img v-if="review.user?.profile_picture" :src="`/storage/${review.user.profile_picture}`" class="w-full h-full object-cover" />
                  <span v-else>{{ review.user?.name ? review.user.name.charAt(0).toUpperCase() : 'S' }}</span>
                </div>
                <div>
                  <h4 class="text-sm font-bold text-gray-800 leading-snug">{{ review.user?.name || 'Anonymous Student' }}</h4>
                  <div class="flex items-center space-x-2 text-[10px] font-semibold text-gray-400 mt-0.5">
                    <span v-if="review.user?.crn" class="uppercase">CRN: {{ review.user.crn }}</span>
                    <span v-if="review.user?.ca_level">• {{ review.user.ca_level }}</span>
                  </div>
                </div>
              </div>

              <!-- Rating, Date & Admin Actions -->
              <div class="flex items-center space-x-4">
                <div class="text-right">
                  <div class="flex items-center space-x-0.5 justify-end">
                    <Star
                      v-for="s in 5"
                      :key="s"
                      :class="[
                        'w-4 h-4',
                        s <= review.rating ? 'fill-amber-400 text-amber-400' : 'fill-slate-100 text-slate-200'
                      ]"
                    />
                  </div>
                  <span class="text-[10px] font-medium text-gray-400 mt-1 block">
                    {{ new Date(review.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) }}
                  </span>
                </div>
                <button
                  @click="deleteReview(review.id)"
                  class="p-2 hover:bg-red-50 text-red-500 rounded-xl transition-colors cursor-pointer"
                  title="Delete Inappropriate Review"
                >
                  <Trash2 class="w-4 h-4" />
                </button>
              </div>
            </div>

            <!-- Comment Body -->
            <p class="text-xs text-gray-600 font-normal leading-relaxed pl-1">
              {{ review.comment || 'No written comment provided.' }}
            </p>
          </div>
        </div>

      </div>

    </div>

    <!-- Error State -->
    <div v-else class="bg-white rounded-xl shadow-sm border border-gray-200 py-20 text-center">
      <AlertCircle class="w-12 h-12 text-gray-300 mx-auto mb-4" />
      <h3 class="text-lg font-medium text-gray-900">Library not found</h3>
      <p class="text-gray-500 mt-2">The library you're looking for doesn't exist.</p>
      <router-link
        to="/superadmin/libraries"
        class="mt-4 inline-flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
      >
        <ArrowLeft class="w-4 h-4 mr-2" />
        Back to Libraries
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import {
  Building2,
  MapPin,
  Clock,
  Users,
  Wifi,
  Car,
  ArrowLeft,
  CheckCircle,
  UserCheck,
  TrendingUp,
  AlertCircle,
  Star,
  Trash2,
  MessageSquare,
  RefreshCw
} from 'lucide-vue-next';
import { adminAPI } from '@/shared/services/api';
import { useSwal } from '@/shared/composables/useSwal';

const { showConfirm, showSuccess, showError } = useSwal();
const route = useRoute();
const library = ref<any>(null);
const loading = ref(true);

const reviewsLoading = ref(false);
const reviewsData = ref({
  average_rating: 0,
  total_reviews: 0,
  rating_breakdown: { '5': 0, '4': 0, '3': 0, '2': 0, '1': 0 } as Record<string | number, number>,
  reviews: [] as any[]
});

const getStarPercent = (star: number) => {
  if (!reviewsData.value.total_reviews) return 0;
  const count = reviewsData.value.rating_breakdown[star] || 0;
  return Math.round((count / reviewsData.value.total_reviews) * 100);
};

const fetchLibrary = async () => {
  loading.value = true;
  try {
    const libraries = await adminAPI.getLibraries();
    library.value = libraries.find((lib: any) => lib.id === parseInt(route.params.id as string));
  } catch (error) {
    console.error('Error fetching library:', error);
  } finally {
    loading.value = false;
  }
};

const fetchReviews = async () => {
  const libId = parseInt(route.params.id as string);
  if (!libId) return;

  reviewsLoading.value = true;
  try {
    const data = await adminAPI.getLibraryReviews(libId);
    reviewsData.value = {
      average_rating: data.average_rating || 0,
      total_reviews: data.total_reviews || 0,
      rating_breakdown: data.rating_breakdown || { '5': 0, '4': 0, '3': 0, '2': 0, '1': 0 },
      reviews: data.reviews || []
    };
  } catch (error) {
    console.error('Error fetching library reviews:', error);
  } finally {
    reviewsLoading.value = false;
  }
};

const deleteReview = async (reviewId: number) => {
  if (await showConfirm('Delete Review', 'Are you sure you want to delete this student review?', 'Yes, Delete')) {
    try {
      await adminAPI.deleteReview(reviewId);
      showSuccess('Deleted!', 'Review has been removed.');
      fetchReviews();
      fetchLibrary();
    } catch (error: any) {
      showError('Delete Failed', error.response?.data?.message || 'Could not delete review');
    }
  }
};

onMounted(() => {
  fetchLibrary();
  fetchReviews();
});
</script>
