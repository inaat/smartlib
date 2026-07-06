<template>
  <div v-if="loading" class="flex flex-col items-center justify-center py-24 space-y-4 font-outfit">
    <div class="animate-spin rounded-full h-10 w-10 border-2 border-blue-600 border-t-transparent"></div>
    <p class="text-xs font-semibold text-slate-400 uppercase tracking-wider animate-pulse">Loading details...</p>
  </div>

  <div v-else-if="library" class="space-y-6 pb-12 font-outfit">
    <!-- Breadcrumbs/Back Link -->
    <div class="flex items-center text-xs text-slate-400 font-semibold uppercase tracking-wide text-left">
      <router-link to="/student/libraries" class="hover:text-blue-650 transition-colors">Libraries</router-link>
      <ChevronRight class="w-3.5 h-3.5 mx-1 text-slate-300" />
      <span class="text-slate-500">{{ library.name }}</span>
    </div>

    <!-- Hero Section -->
    <div class="relative h-60 md:h-72 rounded-2xl overflow-hidden shadow-md">
      <img 
        :src="library.photo_url" 
        class="w-full h-full object-cover"
        alt="Library Cover"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent"></div>
      <div class="absolute bottom-0 left-0 p-6 md:p-8 text-white text-left">
        <h1 class="text-2xl md:text-3xl font-bold mb-2">{{ library.name }}</h1>
        <div class="flex items-center text-slate-200 text-xs font-semibold">
          <MapPin class="w-4.5 h-4.5 mr-1.5 text-red-500" />
          {{ library.address }}
        </div>
      </div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <!-- Left Column: Info & Facilities -->
      <div class="lg:col-span-2 space-y-6">
        <!-- About -->
        <section class="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 text-left">
          <h2 class="text-sm font-bold text-slate-700 uppercase tracking-wider mb-4">About the Library</h2>
          <p class="text-slate-600 text-xs md:text-sm leading-relaxed">
            {{ library.description || 'Welcome to ' + library.name + '. We provide a quiet and productive environment for students to study and research. Our facilities are designed to cater to all your academic needs.' }}
          </p>
          
          <div class="grid grid-cols-2 md:grid-cols-3 gap-5 mt-6 pt-6 border-t border-slate-50">
            <div class="flex items-center space-x-3">
              <div class="p-2.5 bg-blue-50/60 border border-blue-100/50 rounded-xl text-blue-600">
                <Users class="w-5.5 h-5.5" />
              </div>
              <div class="text-left leading-none">
                <p class="text-[9px] font-semibold text-slate-400 uppercase tracking-widest leading-none mb-1.5">Capacity</p>
                <p class="font-bold text-slate-800 text-sm leading-none">{{ library.capacity }} Seats</p>
              </div>
            </div>
            <div class="flex items-center space-x-3">
              <div class="p-2.5 bg-emerald-50/60 border border-emerald-100/50 rounded-xl text-emerald-600">
                <CheckCircle class="w-5.5 h-5.5" />
              </div>
              <div class="text-left leading-none">
                <p class="text-[9px] font-semibold text-slate-400 uppercase tracking-widest leading-none mb-1.5">Available</p>
                <p class="font-bold text-slate-800 text-sm leading-none">{{ library.availableSeats }} Seats</p>
              </div>
            </div>
            <div class="flex items-center space-x-3">
              <div class="p-2.5 bg-purple-50/60 border border-purple-100/50 rounded-xl text-purple-600">
                <Clock class="w-5.5 h-5.5" />
              </div>
              <div class="text-left leading-none">
                <p class="text-[9px] font-semibold text-slate-400 uppercase tracking-widest leading-none mb-1.5">Status</p>
                <p class="font-bold text-slate-800 text-sm leading-none" :class="isOpen ? 'text-emerald-600' : 'text-red-500'">{{ isOpen ? 'Open Now' : 'Closed' }}</p>
              </div>
            </div>
          </div>
        </section>

        <!-- Facilities -->
        <section class="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 text-left">
          <h2 class="text-sm font-bold text-slate-700 uppercase tracking-wider mb-5">Facilities & Amenities</h2>
          <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            <div 
              v-for="facility in library.facilities" 
              :key="facility"
              class="flex flex-col items-center p-4 rounded-xl bg-slate-50 border border-slate-100/50 hover:border-blue-200 hover:bg-blue-50/30 transition-all group"
            >
              <component :is="getFacilityIcon(facility)" class="w-7 h-7 text-slate-400 group-hover:text-blue-650 mb-2 transition-colors" />
              <span class="text-xs font-medium text-slate-700 text-center leading-none">{{ facility }}</span>
            </div>
          </div>
        </section>

        <!-- Rules -->
        <section v-if="library.rules && library.rules.length" class="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 text-left">
          <h2 class="text-sm font-bold text-slate-700 uppercase tracking-wider mb-4">Library Rules</h2>
          <div class="space-y-3.5">
            <div v-for="(rule, index) in library.rules" :key="index" class="flex items-start space-x-3">
              <div class="mt-0.5 p-1 bg-orange-50 border border-orange-100 text-orange-600 rounded-lg">
                <AlertCircle class="w-3.5 h-3.5" />
              </div>
              <p class="text-xs text-slate-600 leading-relaxed font-semibold">{{ rule.text }}</p>
            </div>
          </div>
        </section>

        <!-- Ratings & Feedback -->
        <section class="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 text-left">
          <div class="flex items-center justify-between mb-6">
            <h2 class="text-sm font-bold text-slate-700 uppercase tracking-wider">Ratings & Feedback</h2>
            <div class="flex items-center bg-yellow-50/50 px-3 py-1 rounded-lg border border-yellow-100/60 leading-none">
              <Star class="w-4.5 h-4.5 text-yellow-500 fill-yellow-500 mr-1.5" />
              <span class="text-base font-bold text-yellow-700">{{ library.average_rating || '0.0' }}</span>
              <span class="text-slate-400 text-xs font-medium ml-1.5">/ 5.0</span>
            </div>
          </div>

          <!-- Submit Review Form -->
          <div v-if="!userReview" class="bg-slate-50/50 rounded-xl p-5 mb-6 border border-slate-100">
            <h3 class="font-semibold text-slate-800 text-xs uppercase mb-3">Write a Review</h3>
            <div class="space-y-4">
              <div class="flex items-center space-x-1.5">
                <button 
                  v-for="star in 5" 
                  :key="star"
                  @click="newReview.rating = star"
                  class="focus:outline-none transition-transform active:scale-110"
                >
                  <Star 
                    :class="[
                      'w-7 h-7',
                      star <= newReview.rating ? 'text-yellow-500 fill-yellow-500' : 'text-slate-250'
                    ]" 
                  />
                </button>
              </div>
              <textarea 
                v-model="newReview.comment"
                placeholder="Share your study experience at this library..."
                class="w-full p-3 bg-white border border-slate-200 rounded-xl text-xs font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 min-h-[90px] shadow-sm placeholder-slate-400"
              ></textarea>
              <button 
                @click="submitReview"
                :disabled="submittingReview || !newReview.rating"
                class="bg-blue-600 hover:opacity-95 text-white text-xs font-semibold rounded-xl px-5 py-2 shadow-md shadow-blue-500/10 active:scale-98 transition-all disabled:opacity-50 flex items-center"
              >
                <RefreshCw v-if="submittingReview" class="w-3.5 h-3.5 mr-1.5 animate-spin" />
                <span>{{ submittingReview ? 'Submitting...' : 'Submit Review' }}</span>
              </button>
            </div>
          </div>

          <!-- User's Review (if exists) -->
          <div v-else class="bg-blue-50/40 rounded-xl p-4 mb-6 border border-blue-100/50 relative">
            <div class="flex justify-between items-start mb-2.5">
              <h3 class="font-semibold text-blue-900 text-xs uppercase tracking-wide">Your Review</h3>
              <button 
                @click="deleteReview(userReview.id)"
                class="text-red-500 hover:text-red-655 transition-colors p-1"
                title="Delete Review"
              >
                <Trash2 class="w-4 h-4" />
              </button>
            </div>
            <div class="flex items-center mb-2 leading-none">
              <Star 
                v-for="star in 5" 
                :key="star"
                :class="['w-3.5 h-3.5 mr-0.5', star <= userReview.rating ? 'text-yellow-500 fill-yellow-500' : 'text-slate-250']"
              />
            </div>
            <p class="text-xs text-blue-800 leading-relaxed font-semibold">{{ userReview.comment }}</p>
          </div>

          <!-- Other Reviews -->
          <div class="space-y-4">
            <div v-if="loadingReviews" class="flex justify-center py-6">
              <RefreshCw class="w-5 h-5 text-blue-600 animate-spin" />
            </div>
            <div v-else-if="reviews.length > 0" class="divide-y divide-slate-100">
              <div 
                v-for="review in reviews.filter(r => r.user_id !== user?.id)" 
                :key="review.id"
                class="py-4.5 first:pt-0 last:pb-0"
              >
                <div class="flex items-start space-x-3">
                  <img 
                    :src="review.user.profile_picture || `https://ui-avatars.com/api/?name=${encodeURIComponent(review.user.name)}&background=random`" 
                    class="w-9 h-9 rounded-full object-cover border border-slate-100"
                  />
                  <div class="flex-1 min-w-0">
                    <div class="flex items-center justify-between mb-1.5">
                      <h4 class="font-semibold text-slate-800 text-xs leading-none truncate pr-3">{{ review.user.name }}</h4>
                      <span class="text-[10px] text-slate-400 font-semibold flex-shrink-0">{{ formatDateRelative(review.created_at) }}</span>
                    </div>
                    <div class="flex items-center mb-1.5 leading-none">
                      <Star 
                        v-for="star in 5" 
                        :key="star"
                        :class="['w-3 h-3 mr-0.5', star <= review.rating ? 'text-yellow-500 fill-yellow-500' : 'text-slate-250']"
                      />
                    </div>
                    <p class="text-xs text-slate-500 leading-relaxed">{{ review.comment }}</p>
                  </div>
                </div>
              </div>
            </div>
            <div v-else-if="!userReview" class="text-center py-10 bg-slate-50/50 rounded-xl border border-dashed border-slate-200/80">
              <Star class="w-6 h-6 text-slate-300 mx-auto mb-2" />
              <p class="text-xs text-slate-400 font-medium uppercase tracking-wider">No reviews yet. Be the first to share your thoughts!</p>
            </div>
          </div>
        </section>
      </div>

      <!-- Right Column: Actions & Hours -->
      <div class="space-y-6">
        <!-- Booking Card -->
        <div class="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 sticky top-24 text-left">
          <h3 class="text-base font-semibold text-slate-800 mb-1.5">Reserve a Seat</h3>
          <p class="text-slate-500 text-xs mb-5 leading-relaxed font-semibold">Book your preferred spot in advance to ensure a productive study session.</p>
          
          <div class="space-y-2 mb-6">
            <div class="flex justify-between text-xs font-medium leading-none">
              <span class="text-slate-400 uppercase tracking-wide">Available Seats</span>
              <span class="text-green-600">{{ library.availableSeats }} / {{ library.capacity }}</span>
            </div>
            <div class="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden">
              <div 
                class="bg-blue-600 h-full rounded-full transition-all duration-500" 
                :style="{ width: (library.availableSeats / library.totalSeats * 100) + '%' }"
              ></div>
            </div>
          </div>

          <router-link 
            :to="`/student/libraries/${library.id}/seats`"
            class="block w-full bg-blue-600 text-white text-center py-3 rounded-xl text-xs font-semibold shadow-md shadow-blue-500/10 hover:opacity-95 active:scale-98 transition-all uppercase tracking-wider"
          >
            Select & Book Seat
          </router-link>
          
          <div class="mt-5 pt-5 border-t border-slate-100 space-y-3.5">
            <div class="flex items-center text-xs text-slate-600 font-semibold leading-none">
              <Phone class="w-4 h-4 mr-2.5 text-blue-500 flex-shrink-0" />
              <span>{{ library.contact_info?.phone || 'Not available' }}</span>
            </div>
            <div class="flex items-center text-xs text-slate-655 font-semibold leading-none">
              <Mail class="w-4 h-4 mr-2.5 text-blue-500 flex-shrink-0" />
              <span class="truncate">{{ library.contact_info?.email || 'Not available' }}</span>
            </div>
          </div>
        </div>

        <!-- Operating Hours -->
        <div class="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 text-left">
          <h3 class="text-xs font-bold text-slate-700 uppercase tracking-wider mb-4">Operating Hours</h3>
          <div class="space-y-3">
            <div 
              v-for="day in library.operating_days" 
              :key="day.day"
              class="flex justify-between items-center text-xs font-semibold"
              :class="{'font-bold text-blue-650': isToday(day.day)}"
            >
              <span class="text-slate-500" :class="{'text-blue-650': isToday(day.day)}">{{ day.day }}</span>
              <span v-if="day.isOpen" class="text-slate-800">
                {{ day.openTime }} - {{ day.closeTime }}
              </span>
              <span v-else class="text-red-500 font-semibold">Closed</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div v-else class="text-center py-20 font-outfit">
    <h2 class="text-lg font-semibold text-slate-800 mb-2">Library not found</h2>
    <router-link to="/student/libraries" class="text-blue-600 hover:underline text-xs font-semibold">
      Back to Libraries
    </router-link>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { useRoute } from 'vue-router';
import { studentAPI } from '@/shared/services/api';
import { 
  MapPin, Clock, Users, CheckCircle, Wifi, Coffee, 
  Printer, BookOpen, Zap, Wind, Lock, Camera, 
  AlertCircle, Phone, Mail, ChevronRight, Star,
  RefreshCw, Trash2
} from 'lucide-vue-next';
import { useAuth } from '@/shared/composables/useAuth';
import { useSwal } from '@/shared/composables/useSwal';
import { formatDistanceToNow } from 'date-fns';

const route = useRoute();
const { user } = useAuth();
const { showSuccess, showError, showConfirm } = useSwal();

const library = ref<any>(null);
const loading = ref(true);

const reviews = ref<any[]>([]);
const loadingReviews = ref(false);
const submittingReview = ref(false);
const newReview = ref({
  rating: 0,
  comment: ''
});

const userReview = computed(() => {
  return reviews.value.find(r => r.user_id === user.value?.id);
});

const fetchReviews = async () => {
  loadingReviews.value = true;
  try {
    const id = parseInt(route.params.libraryId as string);
    reviews.value = await studentAPI.getLibraryReviews(id);
  } catch (error) {
    console.error('Failed to fetch reviews:', error);
  } finally {
    loadingReviews.value = false;
  }
};

const submitReview = async () => {
  if (newReview.value.rating === 0) return;
  
  submittingReview.value = true;
  try {
    const id = parseInt(route.params.libraryId as string);
    const response = await studentAPI.submitReview(id, newReview.value);
    
    const index = reviews.value.findIndex(r => r.user_id === user.value?.id);
    if (index !== -1) {
      reviews.value[index] = response.review;
    } else {
      reviews.value.unshift(response.review);
    }
    
    await fetchLibrary();
    newReview.value = { rating: 0, comment: '' };
    showSuccess('Submitted', 'Your review has been saved.');
  } catch (error) {
    console.error('Failed to submit review:', error);
    showError('Submission Failed', 'Could not save your review. Please try again.');
  } finally {
    submittingReview.value = false;
  }
};

const deleteReview = async (id: number) => {
  if (!await showConfirm('Delete Review', 'Are you sure you want to remove your review?', 'Delete')) return;

  try {
    await studentAPI.deleteReview(id);
    reviews.value = reviews.value.filter(r => r.id !== id);
    await fetchLibrary();
    showSuccess('Deleted', 'Your review has been removed.');
  } catch (error) {
    console.error('Failed to delete review:', error);
    showError('Delete Failed', 'Could not remove your review.');
  }
};

const fetchLibrary = async () => {
  try {
    const id = parseInt(route.params.libraryId as string);
    library.value = await studentAPI.getLibrary(id);
  } catch (error) {
    console.error('Failed to fetch library:', error);
  } finally {
    loading.value = false;
  }
};

const isOpen = computed(() => {
  if (!library.value?.operating_days) return false;
  const now = new Date();
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const todayName = days[now.getDay()];
  const todayHours = library.value.operating_days.find((d: any) => d.day === todayName);
  
  if (!todayHours || !todayHours.isOpen) return false;
  
  const currentTime = now.getHours() * 60 + now.getMinutes();
  const [openH, openM] = todayHours.openTime.split(':').map(Number);
  const [closeH, closeM] = todayHours.closeTime.split(':').map(Number);
  
  const openMinutes = openH * 60 + openM;
  const closeMinutes = closeH * 60 + closeM;
  
  return currentTime >= openMinutes && currentTime <= closeMinutes;
});

const isToday = (dayName: string) => {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  return days[new Date().getDay()] === dayName;
};

const getFacilityIcon = (facility: string) => {
  const name = facility.toLowerCase();
  if (name.includes('wifi')) return Wifi;
  if (name.includes('cafeteria') || name.includes('coffee')) return Coffee;
  if (name.includes('printing')) return Printer;
  if (name.includes('book')) return BookOpen;
  if (name.includes('power') || name.includes('outlet')) return Zap;
  if (name.includes('air') || name.includes('ac')) return Wind;
  if (name.includes('locker')) return Lock;
  if (name.includes('cctv') || name.includes('security')) return Camera;
  return CheckCircle;
};

const formatDateRelative = (date: string) => {
  return formatDistanceToNow(new Date(date), { addSuffix: true });
};

onMounted(() => {
  fetchLibrary();
  fetchReviews();
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap');

.font-outfit {
  font-family: 'Outfit', sans-serif;
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
.text-yellow-700 {
  color: #a16207;
}
.bg-blue-600 {
  background-color: #2563eb;
}
.text-blue-655 {
  color: #2563eb;
}
.text-red-655 {
  color: #dc2626;
}
.text-slate-655 {
  color: #475569;
}
.text-slate-600 {
  color: #475569;
}
.border-green-200 {
  border-color: #a7f3d0;
}
</style>
