<template>
  <div class="space-y-6 pb-12 font-outfit text-left">
    <!-- User Info Card -->
    <div class="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
      <div class="flex flex-col md:flex-row items-center gap-6">
        <!-- Avatar Section -->
        <div class="relative group flex-shrink-0">
          <div class="w-28 h-28 rounded-full bg-gradient-to-tr from-blue-600 to-blue-500 flex items-center justify-center text-white text-3xl font-bold shadow-md overflow-hidden border-2 border-slate-100">
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
            class="absolute bottom-0 right-0 p-2 bg-white rounded-full shadow-md border border-slate-200/50 text-slate-600 hover:text-blue-600 transition-colors z-10 hover:scale-105 active:scale-95"
            title="Upload Photo"
          >
            <Camera class="w-4.5 h-4.5" />
          </button>
          <input 
            type="file" 
            ref="fileInput" 
            class="hidden" 
            accept="image/*"
            @change="handleFileChange"
          />
        </div>
        
        <!-- Info Details -->
        <div class="flex-1 text-center md:text-left min-w-0">
          <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-2">
            <h1 class="text-xl font-semibold text-slate-800 leading-none truncate pr-2">{{ user?.name }}</h1>
            <button 
              @click="openEditModal"
              class="inline-flex items-center px-4 py-2 bg-white border border-slate-300 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-50 hover:text-slate-800 transition-all shadow-sm active:scale-98"
            >
              <Settings class="w-3.5 h-3.5 mr-1.5" />
              Edit Profile
            </button>
          </div>
          <div class="flex flex-wrap justify-center md:justify-start gap-x-4 gap-y-2 text-xs text-slate-500 font-semibold mt-3">
            <div class="flex items-center">
              <Mail class="w-4 h-4 mr-1.5 text-blue-500" />
              <span>{{ user?.email }}</span>
            </div>
            <div class="flex items-center" v-if="user?.phone">
              <Phone class="w-4 h-4 mr-1.5 text-blue-500" />
              <span>{{ user?.phone }}</span>
            </div>
            <div class="flex items-center">
              <UserIcon class="w-4 h-4 mr-1.5 text-blue-500" />
              <span>CRN: {{ user?.crn || 'N/A' }}</span>
            </div>
          </div>
          
          <div class="mt-5 flex flex-wrap justify-center md:justify-start gap-2">
            <span class="px-3 py-1 bg-blue-50/50 text-blue-700 rounded-lg text-[10px] font-semibold border border-blue-100/50 uppercase tracking-wide">
              {{ user?.ca_level || 'PRC' }} Level
            </span>
            <span class="px-3 py-1 bg-purple-50/50 text-purple-700 rounded-lg text-[10px] font-semibold border border-purple-100/50 uppercase tracking-wide">
              {{ user?.role?.toUpperCase() }}
            </span>
            <span v-if="user?.status === 'approved' || user?.isApproved" class="px-3 py-1 bg-green-50/50 text-green-700 rounded-lg text-[10px] font-semibold border border-green-100/50 uppercase tracking-wide">
              Verified Account
            </span>
          </div>
        </div>
      </div>
    </div>

    <!-- Edit Profile Modal -->
    <div v-if="showEditModal" class="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
      <div class="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden animate-fade-in text-left">
        <div class="p-5 border-b border-slate-100 flex justify-between items-center bg-slate-50/30">
          <div>
            <h3 class="text-base font-semibold text-slate-800">Edit Profile</h3>
            <p class="text-xs text-slate-400 mt-0.5">Update your account details</p>
          </div>
          <button @click="showEditModal = false" class="text-slate-400 hover:text-slate-700 p-2 rounded-xl hover:bg-slate-50 transition-colors">
            <X class="w-5 h-5" />
          </button>
        </div>

        <form @submit.prevent="handleUpdateProfile" class="p-6 space-y-4 font-outfit">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="space-y-1.5">
              <label class="text-[10px] font-semibold text-slate-400 uppercase tracking-wider ml-1">Full Name</label>
              <div class="relative group">
                <UserIcon class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-blue-600 transition-colors" />
                <input 
                  v-model="editForm.name"
                  type="text" 
                  required
                  class="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white transition-all shadow-sm"
                  placeholder="Your full name"
                />
              </div>
            </div>
            <div class="space-y-1.5">
              <label class="text-[10px] font-semibold text-slate-400 uppercase tracking-wider ml-1">Phone Number</label>
              <div class="relative group">
                <Phone class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-blue-600 transition-colors" />
                <input 
                  v-model="editForm.phone"
                  type="tel" 
                  class="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white transition-all shadow-sm"
                  placeholder="Your phone number"
                />
              </div>
            </div>
          </div>

          <div class="space-y-1.5">
            <label class="text-[10px] font-semibold text-slate-400 uppercase tracking-wider ml-1">Email Address</label>
            <div class="relative group">
              <Mail class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-blue-600 transition-colors" />
              <input 
                v-model="editForm.email"
                type="email" 
                required
                class="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white transition-all shadow-sm"
                placeholder="current@email.com"
              />
            </div>
          </div>

          <div class="pt-4 border-t border-slate-100">
            <div class="flex items-center justify-between mb-3">
              <h4 class="font-semibold text-slate-800 text-xs uppercase tracking-wide">Change Password</h4>
              <span class="text-[9px] text-slate-400 uppercase font-semibold tracking-wider">Optional</span>
            </div>
            <div class="relative group">
              <Lock class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-blue-600 transition-colors" />
              <input 
                v-model="editForm.password"
                type="password" 
                class="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white transition-all shadow-sm"
                placeholder="Enter new password (min 8 chars)"
              />
            </div>
            <p class="text-[10px] text-slate-400 mt-2 ml-1 italic font-semibold">Leave blank to keep your current password</p>
          </div>

          <div class="pt-4 flex gap-3">
            <button 
              type="button"
              @click="showEditModal = false"
              class="flex-1 py-2.5 border border-slate-200 text-slate-500 font-semibold rounded-xl hover:bg-slate-50 transition-all text-xs active:scale-98"
            >
              Cancel
            </button>
            <button 
              type="submit"
              :disabled="updating"
              class="flex-[2] py-2.5 bg-blue-600 hover:opacity-95 text-white font-semibold rounded-xl shadow-md shadow-blue-500/10 active:scale-98 transition-all disabled:opacity-50 text-xs flex items-center justify-center space-x-1.5"
            >
              <span v-if="!updating">Save Changes</span>
              <Loader2 v-else class="w-4 h-4 animate-spin" />
            </button>
          </div>
        </form>
      </div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <!-- Left Column: Subscription -->
      <div class="lg:col-span-2 space-y-6">
        <!-- Subscription Card -->
        <div class="bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-950 rounded-2xl p-6 text-white shadow-lg relative overflow-hidden">
          <div class="absolute -right-8 -top-8 w-32 h-32 bg-white/5 rounded-full blur-3xl pointer-events-none"></div>
          
          <div class="relative z-10">
            <div class="flex items-center justify-between mb-8">
              <Zap class="w-7 h-7 text-yellow-400 fill-current" />
              <span class="px-3 py-1 bg-white/10 rounded-full text-[10px] font-semibold uppercase tracking-wider border border-white/10">
                {{ user?.active_subscription ? 'Active Plan' : 'No Active Plan' }}
              </span>
            </div>
            
            <h3 class="text-xl font-semibold mb-1">{{ user?.active_subscription?.subscription_plan?.name || 'Basic Access' }}</h3>
            <p class="text-white/60 text-xs font-semibold mb-6">
              {{ user?.active_subscription ? `Valid until ${formatDate(user.active_subscription.expires_at)}` : 'Subscribe to unlock premium features' }}
            </p>
            
            <div v-if="user?.active_subscription" class="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 mb-6">
              <div class="flex justify-between text-xs border-b border-white/10 pb-2">
                <span class="text-white/60 font-semibold">Book Reservations</span>
                <span class="font-bold">{{ user.active_subscription.subscription_plan?.book_reservations_limit === -1 || !user.active_subscription.subscription_plan?.book_reservations_limit ? 'Unlimited' : user.active_subscription.subscription_plan?.book_reservations_limit }}</span>
              </div>
              <div class="flex justify-between text-xs border-b border-white/10 pb-2">
                <span class="text-white/60 font-semibold">Daily Seat Bookings</span>
                <span class="font-bold">{{ user.active_subscription.subscription_plan?.daily_seat_bookings_limit === -1 || !user.active_subscription.subscription_plan?.daily_seat_bookings_limit ? 'Unlimited' : user.active_subscription.subscription_plan?.daily_seat_bookings_limit }}</span>
              </div>
              <div class="flex justify-between text-xs border-b border-white/10 pb-2">
                <span class="text-white/60 font-semibold">Library Access</span>
                <span class="font-bold">{{ user.active_subscription.subscription_plan?.libraries_access_limit === -1 || !user.active_subscription.subscription_plan?.libraries_access_limit ? 'Unlimited' : user.active_subscription.subscription_plan?.libraries_access_limit }}</span>
              </div>
              <div class="flex justify-between text-xs border-b border-white/10 pb-2">
                <span class="text-white/60 font-semibold">Advance Booking</span>
                <span class="font-bold">
                  <span v-if="user.active_subscription.subscription_plan?.advance_booking_days === -1">Unlimited</span>
                  <span v-else-if="user.active_subscription.subscription_plan?.advance_booking_days === 0">Same Day</span>
                  <span v-else>{{ user.active_subscription.subscription_plan?.advance_booking_days }} Days</span>
                </span>
              </div>
            </div>

            <router-link 
              to="/student/subscription" 
              class="inline-block px-8 py-3 bg-white text-slate-800 rounded-xl text-xs font-semibold hover:bg-slate-50 transition-colors shadow-lg text-center active:scale-98 uppercase tracking-wider"
            >
              {{ user?.active_subscription ? 'Manage Plan' : 'View Plans' }}
            </router-link>
          </div>
        </div>
      </div>

      <!-- Right Column: Active Sessions -->
      <div class="lg:col-span-1 space-y-6">
        <!-- Session Management Section -->
        <div class="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
          <SessionManagement />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useAuth } from '@/shared/composables/useAuth';
import SessionManagement from '@/shared/components/Profile/SessionManagement.vue';
import { 
  Camera, Mail, Phone, User as UserIcon, Lock, Settings, 
  X, Loader2, Zap
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
  password: ''
});

const openEditModal = () => {
  if (user.value) {
    editForm.value = {
      name: user.value.name,
      email: user.value.email,
      phone: user.value.phone || '',
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
    showSuccess('Profile Updated', 'Your profile information has been successfully updated.');
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

.hover-lift {
  transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.25s cubic-bezier(0.16, 1, 0.3, 1);
}
.hover-lift:hover {
  transform: translateY(-4px);
}

.active\:scale-98:active {
  transform: scale(0.98);
}
.scale-102 {
  transform: scale(1.02);
}
.text-slate-600 {
  color: #475569;
}
.text-slate-655 {
  color: #475569;
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
