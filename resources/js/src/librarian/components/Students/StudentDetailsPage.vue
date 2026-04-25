<template>
  <div class="p-6 space-y-6">
    <!-- Header/Back -->
    <div class="flex items-center justify-between">
      <div class="flex items-center space-x-4">
        <button 
          @click="$router.push('/librarian/students')" 
          class="p-2 hover:bg-white rounded-lg transition-colors border border-gray-200 bg-gray-50"
        >
          <ChevronLeft class="w-5 h-5 text-gray-600" />
        </button>
        <div>
          <h1 class="text-3xl font-bold text-gray-900">Student Profile</h1>
          <p class="text-gray-500 text-sm">Detailed activity and history</p>
        </div>
      </div>
      <div v-if="student" class="flex items-center space-x-3">
        <button 
          @click="student.is_banned ? unbanStudent(student) : openBanModal" 
          :class="[
            'px-4 py-2 border rounded-lg transition-colors flex items-center space-x-2 font-medium text-sm',
            student.is_banned 
              ? 'border-green-200 text-green-600 bg-green-50 hover:bg-green-100' 
              : 'border-orange-200 text-orange-600 bg-orange-50 hover:bg-orange-100'
          ]"
        >
          <UserCheck v-if="student.is_banned" class="w-4 h-4" />
          <BanIcon v-else class="w-4 h-4" />
          <span>{{ student.is_banned ? 'Lift Restriction' : 'Restrict Student' }}</span>
        </button>
        <button  @click="openEditModal" class="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors flex items-center space-x-2 font-medium text-sm">
          <Edit2 class="w-4 h-4" />
          <span>Edit Details</span>
        </button>
      </div>
    </div>

    <div v-if="loading" class="flex flex-col items-center justify-center py-24">
      <RefreshCw class="w-10 h-10 text-indigo-600 animate-spin mb-4" />
      <p class="text-gray-500 font-medium">Fetching student data...</p>
    </div>

    <template v-else-if="student">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <!-- Sidebar: Info Card -->
        <div class="space-y-6">
          <div class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div class="h-24 bg-gradient-to-r from-indigo-600 to-purple-600"></div>
            <div class="px-6 pb-6 mt-[-3rem]">
              <div class="relative">
                <div class="w-24 h-24 rounded-2xl bg-white border-4 border-white shadow-lg flex items-center justify-center overflow-hidden mb-4">
                  <img v-if="student.profile_picture" :src="student.profile_picture" class="w-full h-full object-cover" />
                  <div v-else class="w-full h-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white text-3xl font-bold">
                    {{ student.name.charAt(0) }}
                  </div>
                </div>
                <div :class="[
                  'absolute bottom-4 right-[-4px] px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider',
                  student.is_banned ? 'bg-red-500 text-white' : (student.is_active ? 'bg-green-500 text-white' : 'bg-gray-400 text-white')
                ]">
                  {{ student.is_banned ? 'Banned' : (student.is_active ? 'Active' : 'Inactive') }}
                </div>
              </div>
              <h2 class="text-xl font-bold text-gray-900">{{ student.name }}</h2>
              <p class="text-sm font-medium text-gray-500">{{ student.crn }}</p>
              
              <div class="mt-6 space-y-3">
                <div class="flex items-center space-x-3 text-sm text-gray-600">
                  <div class="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center">
                    <Mail class="w-4 h-4 text-gray-400" />
                  </div>
                  <span class="truncate">{{ student.email }}</span>
                </div>
                <div class="flex items-center space-x-3 text-sm text-gray-600">
                  <div class="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center">
                    <Phone class="w-4 h-4 text-gray-400" />
                  </div>
                  <span>{{ student.phone || 'No phone' }}</span>
                </div>
                <div class="flex items-center space-x-3 text-sm text-gray-600">
                  <div class="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center">
                    <GraduationCap class="w-4 h-4 text-gray-400" />
                  </div>
                  <span>{{ student.ca_level || 'N/A' }}</span>
                </div>
                <div class="flex items-center space-x-3 text-sm text-gray-600">
                  <div class="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center">
                    <Calendar class="w-4 h-4 text-gray-400" />
                  </div>
                  <span>Joined {{ formatDate(student.created_at) }}</span>
                </div>
              </div>

              <div v-if="student.active_subscription" class="mt-6 p-4 bg-indigo-50 rounded-xl border border-indigo-100">
                <div class="flex items-center justify-between mb-2">
                  <span class="text-[10px] font-bold text-indigo-600 uppercase tracking-wider">Active Subscription</span>
                  <CheckCircle2 class="w-4 h-4 text-indigo-600" />
                </div>
                <p class="font-bold text-indigo-900">{{ student.active_subscription.subscription_plan?.name }}</p>
                <p class="text-xs text-indigo-600 mt-1">Expires {{ formatDate(student.active_subscription.expires_at) }}</p>
              </div>
            </div>
          </div>

          <!-- Stats Summary -->
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
              <p class="text-xs text-gray-500 font-medium">Bookings</p>
              <h3 class="text-xl font-bold text-gray-900 mt-1">{{ student.seat_bookings?.length || 0 }}</h3>
            </div>
            <div class="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
              <p class="text-xs text-gray-500 font-medium">Attendance</p>
              <h3 class="text-xl font-bold text-gray-900 mt-1">{{ student.attendance?.length || 0 }}</h3>
            </div>
            <div class="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
              <p class="text-xs text-gray-500 font-medium">Events</p>
              <h3 class="text-xl font-bold text-gray-900 mt-1">{{ student.event_registrations?.length || 0 }}</h3>
            </div>
            <div class="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
              <p class="text-xs text-gray-500 font-medium">Books</p>
              <h3 class="text-xl font-bold text-gray-900 mt-1">{{ student.book_reservations?.length || 0 }}</h3>
            </div>
          </div>
        </div>

        <!-- Main Content: Tabs/Lists -->
        <div class="lg:col-span-2 space-y-6">
          <div class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col min-h-[600px]">
            <!-- Tabs -->
            <div class="flex items-center border-b border-gray-100 px-6 overflow-x-auto">
              <button 
                v-for="tab in tabs" 
                :key="tab.id"
                @click="activeTab = tab.id"
                :class="[
                  'px-4 py-4 text-sm font-bold transition-all border-b-2 whitespace-nowrap',
                  activeTab === tab.id 
                    ? 'border-indigo-600 text-indigo-600' 
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                ]"
              >
                {{ tab.label }}
              </button>
            </div>

            <!-- Tab Content -->
            <div class="p-6 flex-1">
              <!-- Bookings Tab -->
              <div v-if="activeTab === 'bookings'" class="space-y-4">
                <template v-if="student.seat_bookings?.length">
                  <div v-for="booking in sortedBookings" :key="booking.id" class="flex items-center justify-between p-4 rounded-xl border border-gray-100 hover:bg-gray-50 transition-colors">
                    <div class="flex items-center space-x-4">
                      <div class="w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center">
                        <Square class="w-5 h-5 text-indigo-600" />
                      </div>
                      <div>
                        <p class="font-bold text-gray-900">Seat {{ booking.seat?.seat_number }} ({{ booking.seat?.library?.name }})</p>
                        <p class="text-xs text-gray-500">{{ formatDate(booking.booking_date) }} | {{ booking.start_time }} - {{ booking.end_time }}</p>
                      </div>
                    </div>
                    <span :class="[
                      'px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider',
                      booking.status === 'completed' ? 'bg-green-100 text-green-700' : (booking.status === 'cancelled' ? 'bg-red-100 text-red-700' : 'bg-blue-100 text-blue-700')
                    ]">
                      {{ booking.status }}
                    </span>
                  </div>
                </template>
                <div v-else class="flex flex-col items-center justify-center py-20 text-center">
                  <Search class="w-10 h-10 text-gray-200 mb-4" />
                  <p class="text-gray-500 font-medium">No booking history found</p>
                </div>
              </div>

              <!-- Attendance Tab -->
              <div v-if="activeTab === 'attendance'" class="space-y-4">
                <template v-if="student.attendance?.length">
                   <table class="w-full text-left">
                    <thead>
                      <tr class="text-xs text-gray-400 uppercase font-bold tracking-wider">
                        <th class="pb-4">Date</th>
                        <th class="pb-4">Check In</th>
                        <th class="pb-4">Check Out</th>
                        <th class="pb-4 text-right">Duration</th>
                      </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-50">
                      <tr v-for="log in sortedAttendance" :key="log.id" class="text-sm">
                        <td class="py-4 font-medium">{{ formatDate(log.date) }}</td>
                        <td class="py-4 text-green-600 font-medium">{{ log.check_in_time || '--:--' }}</td>
                        <td class="py-4 text-orange-600 font-medium">{{ log.check_out_time || 'Active' }}</td>
                        <td class="py-4 text-right font-bold text-gray-600">{{ calculateDuration(log) }}</td>
                      </tr>
                    </tbody>
                  </table>
                </template>
                <div v-else class="flex flex-col items-center justify-center py-20 text-center">
                  <Search class="w-10 h-10 text-gray-200 mb-4" />
                  <p class="text-gray-500 font-medium">No attendance logs found</p>
                </div>
              </div>

              <!-- Events Tab -->
              <div v-if="activeTab === 'events'" class="space-y-4">
                <template v-if="student.event_registrations?.length">
                  <div v-for="reg in student.event_registrations" :key="reg.id" class="flex items-center justify-between p-4 rounded-xl border border-gray-100 hover:bg-gray-50 transition-colors">
                    <div class="flex items-center space-x-4">
                      <div class="w-10 h-10 rounded-lg bg-purple-50 flex items-center justify-center">
                        <Calendar class="w-5 h-5 text-purple-600" />
                      </div>
                      <div>
                        <p class="font-bold text-gray-900">{{ reg.event?.title }}</p>
                        <p class="text-xs text-gray-500">{{ formatDate(reg.event?.date) }} | {{ reg.event?.venue }}</p>
                      </div>
                    </div>
                    <span :class="[
                      'px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider',
                      reg.attended ? 'bg-green-100 text-green-700' : 'bg-indigo-100 text-indigo-700'
                    ]">
                      {{ reg.attended ? 'Attended' : 'Registered' }}
                    </span>
                  </div>
                </template>
                <div v-else class="flex flex-col items-center justify-center py-20 text-center">
                  <Search class="w-10 h-10 text-gray-200 mb-4" />
                  <p class="text-gray-500 font-medium">No event history found</p>
                </div>
              </div>

              <!-- Books Tab -->
               <div v-if="activeTab === 'books'" class="space-y-4">
                <template v-if="student.book_reservations?.length">
                  <div v-for="res in student.book_reservations" :key="res.id" class="flex items-center justify-between p-4 rounded-xl border border-gray-100 hover:bg-gray-50 transition-colors">
                    <div class="flex items-center space-x-4">
                      <div class="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
                        <BookIcon class="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <p class="font-bold text-gray-900">{{ res.book?.title }}</p>
                        <p class="text-xs text-gray-500">Reserved: {{ formatDate(res.created_at) }} | Due: {{ formatDate(res.due_date) }}</p>
                      </div>
                    </div>
                    <span :class="[
                      'px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider',
                      res.status === 'returned' ? 'bg-green-100 text-green-700' : (res.status === 'overdue' ? 'bg-red-100 text-red-700' : 'bg-orange-100 text-orange-700')
                    ]">
                      {{ res.status }}
                    </span>
                  </div>
                </template>
                <div v-else class="flex flex-col items-center justify-center py-20 text-center">
                  <Search class="w-10 h-10 text-gray-200 mb-4" />
                  <p class="text-gray-500 font-medium">No book reservations found</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </div>

  <!-- Ban Modal (Simplified trigger to StudentsPage or implement here) -->
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { 
  ChevronLeft, 
  Mail, 
  Phone, 
  GraduationCap, 
  Calendar, 
  CheckCircle2, 
  Edit2, 
  RefreshCw,
  Search,
  Users,
  Square,
  BookOpen as BookIcon,
  Ban as BanIcon,
  UserCheck
} from 'lucide-vue-next';
import { librarianAPI } from '@/shared/services/api';
import { useSwal } from '@/shared/composables/useSwal';

const route = useRoute();
const router = useRouter();
const { showError, showSuccess, showConfirm } = useSwal();

const studentId = Number(route.params.id);
const loading = ref(true);
const student = ref<any>(null);
const activeTab = ref('bookings');

const tabs = [
  { id: 'bookings', label: 'Seat Bookings' },
  { id: 'attendance', label: 'Attendance' },
  { id: 'events', label: 'Events' },
  { id: 'books', label: 'Books' },
];

const fetchStudentDetails = async () => {
  try {
    loading.value = true;
    const data = await librarianAPI.getStudent(studentId);
    student.value = data;
  } catch (error) {
    console.error('Error fetching student details:', error);
    showError('Error', 'Failed to load student profile');
    router.push('/librarian/students');
  } finally {
    loading.value = false;
  }
};

onMounted(fetchStudentDetails);

const sortedBookings = computed(() => {
  if (!student.value?.seat_bookings) return [];
  return [...student.value.seat_bookings].sort((a, b) => 
    new Date(b.booking_date).getTime() - new Date(a.booking_date).getTime()
  );
});

const sortedAttendance = computed(() => {
  if (!student.value?.attendance) return [];
  return [...student.value.attendance].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );
});

const formatDate = (dateString?: string) => {
  if (!dateString) return 'N/A';
  return new Date(dateString).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });
};

const calculateDuration = (log: any) => {
  if (!log.check_in_time || !log.check_out_time) return '--';
  // Simplified duration calculation
  return 'Calculated'; // In real app, calculate diff between times
};

// Reuse unban/ban logic from StudentsPage or navigate back
const unbanStudent = async (student: any) => {
  if (await showConfirm('Unban Student', `Are you sure you want to lift the restriction for ${student.name}?`, 'Yes, Unban')) {
    try {
      await librarianAPI.unbanStudent(student.id);
      showSuccess('Unbanned', 'Student access restored');
      fetchStudentDetails();
    } catch (error) {
      showError('Unban Failed', 'Failed to lift restriction');
    }
  }
};

const openBanModal = () => {
  // Navigation or local modal implementation
  showError('Restricting...', 'Please use the main students list to apply new restrictions');
};

const openEditModal = () => {
  // Navigation or local modal implementation
  showError('Editing...', 'Please use the main students list to edit profile data');
};
</script>
