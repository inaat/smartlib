<template>
  <div v-if="loading" class="flex items-center justify-center min-h-[400px]">
    <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
  </div>

  <div v-else-if="library" class="space-y-8 pb-12">
    <!-- Hero Section -->
    <div class="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-lg">
      <img 
        :src="library.photo || 'https://images.pexels.com/photos/159711/library-books-reading-study-159711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'" 
        class="w-full h-full object-cover"
        alt="Library Cover"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
      <div class="absolute bottom-0 left-0 p-8 text-white">
        <h1 class="text-3xl md:text-4xl font-bold mb-2">{{ library.name }}</h1>
        <div class="flex items-center text-white/90">
          <MapPin class="w-5 h-5 mr-2" />
          {{ library.address }}
        </div>
      </div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <!-- Left Column: Info & Facilities -->
      <div class="lg:col-span-2 space-y-8">
        <!-- About -->
        <section class="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
          <h2 class="text-xl font-bold text-gray-800 mb-4">About the Library</h2>
          <p class="text-gray-600 leading-relaxed">
            {{ library.description || 'Welcome to ' + library.name + '. We provide a quiet and productive environment for students to study and research. Our facilities are designed to cater to all your academic needs.' }}
          </p>
          
          <div class="grid grid-cols-2 md:grid-cols-3 gap-6 mt-8">
            <div class="flex items-center space-x-3">
              <div class="p-3 bg-blue-50 rounded-xl text-blue-600">
                <Users class="w-6 h-6" />
              </div>
              <div>
                <p class="text-sm text-gray-500">Capacity</p>
                <p class="font-semibold text-gray-800">{{ library.capacity }} Seats</p>
              </div>
            </div>
            <div class="flex items-center space-x-3">
              <div class="p-3 bg-green-50 rounded-xl text-green-600">
                <CheckCircle class="w-6 h-6" />
              </div>
              <div>
                <p class="text-sm text-gray-500">Available</p>
                <p class="font-semibold text-gray-800">{{ library.availableSeats }} Seats</p>
              </div>
            </div>
            <div class="flex items-center space-x-3">
              <div class="p-3 bg-purple-50 rounded-xl text-purple-600">
                <Clock class="w-6 h-6" />
              </div>
              <div>
                <p class="text-sm text-gray-500">Status</p>
                <p class="font-semibold text-gray-800">{{ isOpen ? 'Open Now' : 'Closed' }}</p>
              </div>
            </div>
          </div>
        </section>

        <!-- Facilities -->
        <section class="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
          <h2 class="text-xl font-bold text-gray-800 mb-6">Facilities & Amenities</h2>
          <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            <div 
              v-for="facility in library.facilities" 
              :key="facility"
              class="flex flex-col items-center p-4 rounded-xl bg-gray-50 border border-gray-100 hover:border-blue-200 hover:bg-blue-50 transition-all group"
            >
              <component :is="getFacilityIcon(facility)" class="w-8 h-8 text-gray-400 group-hover:text-blue-600 mb-2" />
              <span class="text-sm font-medium text-gray-700 text-center">{{ facility }}</span>
            </div>
          </div>
        </section>

        <!-- Rules -->
        <section v-if="library.rules && library.rules.length" class="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
          <h2 class="text-xl font-bold text-gray-800 mb-6">Library Rules</h2>
          <div class="space-y-4">
            <div v-for="(rule, index) in library.rules" :key="index" class="flex items-start space-x-3">
              <div class="mt-1 p-1 bg-orange-100 rounded-full text-orange-600">
                <AlertCircle class="w-4 h-4" />
              </div>
              <p class="text-gray-600">{{ rule.text }}</p>
            </div>
          </div>
        </section>
      </div>

      <!-- Right Column: Actions & Hours -->
      <div class="space-y-8">
        <!-- Booking Card -->
        <div class="bg-white rounded-2xl p-8 shadow-lg border border-blue-100 sticky top-24">
          <h3 class="text-xl font-bold text-gray-800 mb-2">Reserve a Seat</h3>
          <p class="text-gray-600 text-sm mb-6">Book your preferred spot in advance to ensure a productive study session.</p>
          
          <div class="space-y-4 mb-8">
            <div class="flex justify-between text-sm">
              <span class="text-gray-500">Available Seats</span>
              <span class="font-semibold text-green-600">{{ library.availableSeats }}</span>
            </div>
            <div class="w-full bg-gray-100 rounded-full h-2">
              <div 
                class="bg-blue-600 h-2 rounded-full transition-all duration-500" 
                :style="{ width: (library.availableSeats / library.totalSeats * 100) + '%' }"
              ></div>
            </div>
          </div>

          <router-link 
            :to="`/student/libraries/${library.id}/seats`"
            class="block w-full bg-blue-600 text-white text-center py-4 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 active:translate-y-0"
          >
            Book Now
          </router-link>
          
          <div class="mt-6 pt-6 border-t border-gray-100 space-y-4">
            <div class="flex items-center text-sm text-gray-600">
              <Phone class="w-4 h-4 mr-3 text-blue-500" />
              {{ library.contact_info?.phone || 'Not available' }}
            </div>
            <div class="flex items-center text-sm text-gray-600">
              <Mail class="w-4 h-4 mr-3 text-blue-500" />
              {{ library.contact_info?.email || 'Not available' }}
            </div>
          </div>
        </div>

        <!-- Operating Hours -->
        <div class="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
          <h3 class="text-lg font-bold text-gray-800 mb-4">Operating Hours</h3>
          <div class="space-y-3">
            <div 
              v-for="day in library.operating_days" 
              :key="day.day"
              class="flex justify-between items-center text-sm"
              :class="{'font-bold text-blue-600': isToday(day.day)}"
            >
              <span class="text-gray-600" :class="{'text-blue-600': isToday(day.day)}">{{ day.day }}</span>
              <span v-if="day.isOpen" class="text-gray-800">
                {{ day.openTime }} - {{ day.closeTime }}
              </span>
              <span v-else class="text-red-500 font-medium">Closed</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div v-else class="text-center py-20">
    <h2 class="text-2xl font-bold text-gray-800">Library not found</h2>
    <router-link to="/student/libraries" class="text-blue-600 hover:underline mt-4 inline-block">
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
  AlertCircle, Phone, Mail, ChevronLeft 
} from 'lucide-vue-next';

const route = useRoute();
const library = ref<any>(null);
const loading = ref(true);

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

onMounted(fetchLibrary);
</script>
