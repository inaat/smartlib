<template>
  <div class="space-y-6 pb-12 font-outfit text-left">
    <!-- Header Hero Profile Card -->
    <div class="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden relative">
      <!-- Gradient Cover Banner -->
      <div class="h-32 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 relative overflow-hidden">
        <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent"></div>
        <div class="absolute -right-10 -bottom-10 w-44 h-44 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>
      </div>

      <!-- Main Profile Banner Content -->
      <div class="px-6 pb-6 pt-0 relative">
        <div class="flex flex-col md:flex-row items-center md:items-start justify-between gap-6 mb-4">
          <!-- Avatar + Name Header Group -->
          <div class="flex flex-col md:flex-row items-center md:items-start gap-5 text-center md:text-left">
            <!-- Avatar Section with Glow & Camera Button (ONLY Avatar has negative top margin overlap) -->
            <div class="relative group flex-shrink-0 -mt-12">
              <div class="w-24 h-24 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white text-2xl font-bold shadow-lg overflow-hidden border-4 border-white">
                <img 
                  v-if="user?.profile_picture" 
                  :src="getProfilePictureUrl(user.profile_picture)" 
                  alt="Profile" 
                  class="w-full h-full object-cover"
                />
                <span v-else>{{ user?.name?.charAt(0).toUpperCase() }}</span>
              </div>
              <button 
                @click="triggerFileInput"
                class="absolute -bottom-1 -right-1 p-2 bg-white rounded-xl shadow-md border border-slate-200 text-slate-600 hover:text-blue-600 transition-all z-10 hover:scale-105 active:scale-95 cursor-pointer"
                title="Change Photo"
              >
                <Camera class="w-3.5 h-3.5" />
              </button>
              <input 
                type="file" 
                ref="fileInput" 
                class="hidden" 
                accept="image/*"
                @change="handleFileChange"
              />
            </div>

            <!-- Title & Badges (Positioned cleanly on white background) -->
            <div class="pt-3">
              <div class="flex items-center justify-center md:justify-start space-x-2">
                <h1 class="text-xl font-bold text-slate-800 tracking-tight leading-tight">{{ user?.name }}</h1>
                <span v-if="user?.status === 'approved' || user?.isApproved" class="inline-flex items-center text-emerald-600" title="Verified Account">
                  <ShieldCheck class="w-4.5 h-4.5 fill-emerald-100" />
                </span>
              </div>
              
              <!-- Quick Tag Line -->
              <div class="flex flex-wrap items-center justify-center md:justify-start gap-2 mt-2">
                <!-- CRN Tag -->
                <span class="px-2.5 py-0.5 bg-slate-100 text-slate-700 rounded-lg text-[11px] font-semibold tracking-wide">
                  CRN: {{ user?.crn || 'N/A' }}
                </span>
                
                <!-- Academic Level Tag -->
                <span class="px-2.5 py-0.5 bg-blue-50 text-blue-700 rounded-lg text-[11px] font-semibold tracking-wide border border-blue-100">
                  {{ user?.ca_level || 'PRC' }} Level
                </span>

                <!-- Gender Badge -->
                <span 
                  :class="[
                    'px-2.5 py-0.5 rounded-lg text-[11px] font-semibold tracking-wide flex items-center space-x-1 border',
                    userGenderNormalized === 'female' 
                      ? 'bg-pink-50 text-pink-700 border-pink-200' 
                      : 'bg-indigo-50 text-indigo-700 border-indigo-200'
                  ]"
                >
                  <Users class="w-3 h-3" />
                  <span>{{ formattedGender }}</span>
                </span>

                <!-- Role Badge -->
                <span class="px-2.5 py-0.5 bg-purple-50 text-purple-700 rounded-lg text-[11px] font-semibold tracking-wide uppercase border border-purple-100">
                  {{ user?.role?.toUpperCase() || 'STUDENT' }}
                </span>
              </div>
            </div>
          </div>

          <!-- Edit Profile Action Button -->
          <div class="pt-3">
            <button 
              @click="openEditModal"
              class="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-semibold transition-all shadow-sm shadow-blue-500/20 active:scale-98 flex-shrink-0 cursor-pointer"
            >
              <Settings class="w-3.5 h-3.5 mr-1.5" />
              Edit Profile
            </button>
          </div>
        </div>

        <!-- Contact & Location Metadata Bar -->
        <div class="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-center md:justify-start gap-y-2 gap-x-6 text-xs font-medium text-slate-600">
          <div class="flex items-center space-x-2">
            <Mail class="w-4 h-4 text-blue-600" />
            <span>{{ user?.email }}</span>
          </div>

          <div class="flex items-center space-x-2" v-if="user?.phone">
            <Phone class="w-4 h-4 text-blue-600" />
            <span>{{ user?.phone }}</span>
          </div>

          <div class="flex items-center space-x-2" v-if="user?.library">
            <Building2 class="w-4 h-4 text-blue-600" />
            <span>{{ user.library.name }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Edit Profile Modal -->
    <div v-if="showEditModal" class="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
      <div class="bg-white rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden animate-fade-in text-left">
        <div class="p-5 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
          <div>
            <h3 class="text-base font-bold text-slate-800">Edit Personal Profile</h3>
            <p class="text-xs text-slate-400 mt-0.5 font-normal">Update your account info and preferences</p>
          </div>
          <button @click="showEditModal = false" class="text-slate-400 hover:text-slate-700 p-2 rounded-xl hover:bg-slate-100 transition-colors cursor-pointer">
            <X class="w-5 h-5" />
          </button>
        </div>

        <form @submit.prevent="handleUpdateProfile" class="p-6 space-y-4 font-outfit">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <!-- Full Name -->
            <div class="space-y-1.5">
              <label class="text-[10px] font-semibold text-slate-400 uppercase tracking-wider ml-1">Full Name</label>
              <div class="relative group">
                <UserIcon class="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-blue-600 transition-colors" />
                <input 
                  v-model="editForm.name"
                  type="text" 
                  required
                  class="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white transition-all shadow-sm"
                  placeholder="Your full name"
                />
              </div>
            </div>

            <!-- Gender Selector -->
            <div class="space-y-1.5">
              <label class="text-[10px] font-semibold text-slate-400 uppercase tracking-wider ml-1">Gender</label>
              <div class="relative group">
                <Users class="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-blue-600 transition-colors" />
                <select 
                  v-model="editForm.gender"
                  required
                  class="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white transition-all shadow-sm appearance-none cursor-pointer"
                >
                  <option value="" disabled>Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <!-- Email -->
            <div class="space-y-1.5">
              <label class="text-[10px] font-semibold text-slate-400 uppercase tracking-wider ml-1">Email Address</label>
              <div class="relative group">
                <Mail class="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-blue-600 transition-colors" />
                <input 
                  v-model="editForm.email"
                  type="email" 
                  required
                  class="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white transition-all shadow-sm"
                  placeholder="student@example.com"
                />
              </div>
            </div>

            <!-- Phone -->
            <div class="space-y-1.5">
              <label class="text-[10px] font-semibold text-slate-400 uppercase tracking-wider ml-1">Phone Number</label>
              <div class="relative group">
                <Phone class="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-blue-600 transition-colors" />
                <input 
                  v-model="editForm.phone"
                  type="tel" 
                  class="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white transition-all shadow-sm"
                  placeholder="03001234567"
                />
              </div>
            </div>
          </div>

          <!-- Password Change -->
          <div class="pt-4 border-t border-slate-100">
            <div class="flex items-center justify-between mb-2">
              <h4 class="font-semibold text-slate-800 text-xs uppercase tracking-wide">Update Security Password</h4>
              <span class="text-[10px] text-slate-400 uppercase font-medium tracking-wider">Optional</span>
            </div>
            <div class="relative group">
              <Lock class="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-blue-600 transition-colors" />
              <input 
                v-model="editForm.password"
                type="password" 
                class="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white transition-all shadow-sm"
                placeholder="New Password (min. 8 characters)"
              />
            </div>
            <p class="text-[10px] text-slate-400 mt-1.5 ml-1 italic font-normal">Leave empty if you do not wish to change your password</p>
          </div>

          <!-- Action Buttons -->
          <div class="pt-4 flex gap-3">
            <button 
              type="button"
              @click="showEditModal = false"
              class="flex-1 py-2.5 border border-slate-200 text-slate-600 font-medium rounded-xl hover:bg-slate-50 transition-all text-xs cursor-pointer active:scale-98"
            >
              Cancel
            </button>
            <button 
              type="submit"
              :disabled="updating"
              class="flex-[2] py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-sm shadow-blue-500/20 active:scale-98 transition-all disabled:opacity-50 text-xs flex items-center justify-center space-x-2 cursor-pointer"
            >
              <span v-if="!updating">Save Profile Changes</span>
              <Loader2 v-else class="w-4 h-4 animate-spin" />
            </button>
          </div>
        </form>
      </div>
    </div>

    <!-- Main Profile Content Grid -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <!-- Left 2 Columns: Personal Details & Subscription Plan -->
      <div class="lg:col-span-2 space-y-6">
        <!-- Personal & Academic Details Card -->
        <div class="bg-white rounded-3xl p-6 shadow-sm border border-slate-100">
          <h3 class="text-xs font-bold text-slate-800 uppercase tracking-wider mb-5 flex items-center space-x-2">
            <span class="w-2 h-2 rounded-full bg-blue-600"></span>
            <span>Account Details</span>
          </h3>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <!-- Full Name -->
            <div class="p-4 rounded-2xl bg-slate-50/70 border border-slate-100">
              <span class="block text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-1">Full Name</span>
              <span class="text-sm font-semibold text-slate-800 block truncate">{{ user?.name || 'N/A' }}</span>
            </div>

            <!-- Gender -->
            <div class="p-4 rounded-2xl bg-slate-50/70 border border-slate-100">
              <span class="block text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-1">Gender</span>
              <div class="flex items-center space-x-2">
                <span 
                  :class="[
                    'px-2.5 py-0.5 rounded-lg text-xs font-semibold capitalize inline-flex items-center space-x-1.5 border',
                    userGenderNormalized === 'female'
                      ? 'bg-pink-50 text-pink-700 border-pink-200'
                      : 'bg-indigo-50 text-indigo-700 border-indigo-200'
                  ]"
                >
                  <Users class="w-3.5 h-3.5" />
                  <span>{{ formattedGender }}</span>
                </span>
              </div>
            </div>

            <!-- Email Address -->
            <div class="p-4 rounded-2xl bg-slate-50/70 border border-slate-100">
              <span class="block text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-1">Email Address</span>
              <span class="text-sm font-semibold text-slate-800 block truncate">{{ user?.email || 'N/A' }}</span>
            </div>

            <!-- Phone Number -->
            <div class="p-4 rounded-2xl bg-slate-50/70 border border-slate-100">
              <span class="block text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-1">Phone Number</span>
              <span class="text-sm font-semibold text-slate-800 block truncate">{{ user?.phone || 'Not Provided' }}</span>
            </div>

            <!-- Student CRN -->
            <div class="p-4 rounded-2xl bg-slate-50/70 border border-slate-100">
              <span class="block text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-1">Student CRN Number</span>
              <span class="text-sm font-semibold text-slate-800 block truncate">{{ user?.crn || 'N/A' }}</span>
            </div>

            <!-- Academic Level -->
            <div class="p-4 rounded-2xl bg-slate-50/70 border border-slate-100">
              <span class="block text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-1">CA Academic Level</span>
              <span class="text-sm font-semibold text-slate-800 block truncate">{{ user?.ca_level || 'PRC' }} Level</span>
            </div>
          </div>
        </div>

        <!-- Subscription Plan Card (Redesigned Light Mode) -->
        <div class="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 relative overflow-hidden">
          <!-- Subtle Top Accent Strip -->
          <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500"></div>

          <div class="flex items-center justify-between mb-5">
            <h3 class="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center space-x-2">
              <span class="w-2 h-2 rounded-full bg-blue-600"></span>
              <span>Subscription Status</span>
            </h3>

            <span 
              :class="[
                'px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider border',
                user?.active_subscription 
                  ? 'bg-emerald-50 text-emerald-700 border-emerald-200' 
                  : 'bg-amber-50 text-amber-700 border-amber-200'
              ]"
            >
              {{ user?.active_subscription ? 'Active Plan' : 'No Active Plan' }}
            </span>
          </div>

          <!-- Membership Details Banner Box -->
          <div class="bg-gradient-to-r from-blue-50/80 to-indigo-50/80 border border-blue-100/80 rounded-2xl p-5 mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span class="text-[10px] font-semibold text-blue-600 uppercase tracking-wider block mb-1">Current Membership Plan</span>
              <h4 class="text-lg font-bold text-slate-900 leading-tight">
                {{ user?.active_subscription?.subscription_plan?.name || 'Basic Membership' }}
              </h4>
              <p class="text-slate-600 text-xs font-medium mt-1">
                {{ user?.active_subscription ? `Valid until ${formatDate(user.active_subscription.expires_at)}` : 'Subscribe to a plan to unlock seat & book reservation access' }}
              </p>
            </div>

            <router-link 
              to="/student/subscription" 
              class="inline-flex items-center justify-center px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-semibold transition-all shadow-sm shadow-blue-500/20 active:scale-98 flex-shrink-0 cursor-pointer"
            >
              <span>{{ user?.active_subscription ? 'Manage Plan' : 'Explore Plans' }}</span>
            </router-link>
          </div>

          <!-- Feature Limits Grid -->
          <div v-if="user?.active_subscription" class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div class="p-3.5 rounded-2xl bg-slate-50/80 border border-slate-100 flex items-center justify-between">
              <span class="text-xs font-medium text-slate-600">Book Reservations</span>
              <span class="text-xs font-bold text-slate-900">{{ user.active_subscription.subscription_plan?.book_reservations_limit === -1 || !user.active_subscription.subscription_plan?.book_reservations_limit ? 'Unlimited' : user.active_subscription.subscription_plan?.book_reservations_limit }}</span>
            </div>

            <div class="p-3.5 rounded-2xl bg-slate-50/80 border border-slate-100 flex items-center justify-between">
              <span class="text-xs font-medium text-slate-600">Daily Seat Bookings</span>
              <span class="text-xs font-bold text-slate-900">{{ user.active_subscription.subscription_plan?.daily_seat_bookings_limit === -1 || !user.active_subscription.subscription_plan?.daily_seat_bookings_limit ? 'Unlimited' : user.active_subscription.subscription_plan?.daily_seat_bookings_limit }}</span>
            </div>

            <div class="p-3.5 rounded-2xl bg-slate-50/80 border border-slate-100 flex items-center justify-between">
              <span class="text-xs font-medium text-slate-600">Library Access</span>
              <span class="text-xs font-bold text-slate-900">{{ user.active_subscription.subscription_plan?.libraries_access_limit === -1 || !user.active_subscription.subscription_plan?.libraries_access_limit ? 'Unlimited' : user.active_subscription.subscription_plan?.libraries_access_limit }}</span>
            </div>

            <div class="p-3.5 rounded-2xl bg-slate-50/80 border border-slate-100 flex items-center justify-between">
              <span class="text-xs font-medium text-slate-600">Advance Booking</span>
              <span class="text-xs font-bold text-slate-900">
                <span v-if="user.active_subscription.subscription_plan?.advance_booking_days === -1">Unlimited</span>
                <span v-else-if="user.active_subscription.subscription_plan?.advance_booking_days === 0">Same Day</span>
                <span v-else>{{ user.active_subscription.subscription_plan?.advance_booking_days }} Days</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- Right 1 Column: Security & Active Sessions -->
      <div class="lg:col-span-1 space-y-6">
        <!-- Active Devices & Sessions Section -->
        <div class="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
          <SessionManagement />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useAuth } from '@/shared/composables/useAuth';
import SessionManagement from '@/shared/components/Profile/SessionManagement.vue';
import { 
  Camera, Mail, Phone, User as UserIcon, Lock, Settings, 
  X, Loader2, ShieldCheck, Building2, Users
} from 'lucide-vue-next';
import { studentAPI } from '@/shared/services/api';
import { useSwal } from '@/shared/composables/useSwal';

const { user, checkAuth } = useAuth();
const fileInput = ref<HTMLInputElement | null>(null);

const { showSuccess, showError, showWarning } = useSwal();

// Edit Profile State
const showEditModal = ref(false);
const updating = ref(false);
const editForm = ref({
  name: '',
  email: '',
  phone: '',
  gender: 'male',
  password: ''
});

// Normalized Gender calculation
const userGenderNormalized = computed(() => {
  const g = user.value?.gender ? String(user.value.gender).toLowerCase().trim() : '';
  if (g === 'female') return 'female';
  if (g === 'male') return 'male';
  return 'male';
});

const formattedGender = computed(() => {
  return userGenderNormalized.value === 'female' ? 'Female' : 'Male';
});

const openEditModal = () => {
  if (user.value) {
    editForm.value = {
      name: user.value.name,
      email: user.value.email,
      phone: user.value.phone || '',
      gender: userGenderNormalized.value,
      password: ''
    };
    showEditModal.value = true;
  }
};

const handleUpdateProfile = async () => {
  try {
    updating.value = true;
    const updateData: any = { ...editForm.value };
    
    if (!updateData.password) {
      delete updateData.password;
    }

    await studentAPI.updateProfile(updateData);
    await checkAuth(); // Refresh global user state
    showEditModal.value = false;
    showSuccess('Profile Updated', 'Your profile information and gender have been successfully updated.');
  } catch (error: any) {
    console.error('Failed to update profile:', error);
    const message = error.response?.data?.message || 'Failed to update profile';
    const errors = error.response?.data?.errors;
    if (errors) {
      const errorMessages = Object.values(errors).flat().join('\n');
      showError('Update Failed', `${message}\n\n${errorMessages}`);
    } else {
      showError('Update Failed', message);
    }
  } finally {
    updating.value = false;
  }
};

const triggerFileInput = () => {
  fileInput.value?.click();
};

const getProfilePictureUrl = (path: string) => {
  if (path.startsWith('http')) return path;
  return `/storage/${path}`;
};

const handleFileChange = async (event: Event) => {
  const target = event.target as HTMLInputElement;
  if (target.files && target.files[0]) {
    const file = target.files[0];
    
    if (file.size > 2 * 1024 * 1024) {
      showWarning('File too large', 'File size must be less than 2MB');
      return;
    }

    try {
      const formData = new FormData();
      formData.append('profile_picture', file);
      
      await studentAPI.updateProfile(formData);
      await checkAuth(); // Refresh user data
      showSuccess('Updated!', 'Profile picture updated successfully');
    } catch (error) {
      console.error('Failed to update profile picture:', error);
      showError('Update Failed', 'Failed to update profile picture');
    }
  }
};

const formatDate = (date: string | undefined) => {
  if (!date) return 'N/A';
  return new Date(date).toLocaleDateString('en-US', { 
    month: 'short', 
    day: 'numeric', 
    year: 'numeric' 
  });
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap');

.font-outfit {
  font-family: 'Outfit', sans-serif;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(6px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-fade-in {
  animation: fadeIn 0.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}
</style>
