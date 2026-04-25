<template>
  <div class="space-y-8 pb-12">
   
    <div class="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
      <div class="flex flex-col md:flex-row items-center gap-8">
        <div class="relative group">
          <div class="w-32 h-32 rounded-full bg-gradient-to-tr from-blue-600 to-purple-600 flex items-center justify-center text-white text-4xl font-bold shadow-lg overflow-hidden">
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
            class="absolute bottom-0 right-0 p-2 bg-white rounded-full shadow-md border border-gray-100 text-gray-600 hover:text-blue-600 transition-colors z-10"
          >
            <Camera class="w-5 h-5" />
          </button>
          <input 
            type="file" 
            ref="fileInput" 
            class="hidden" 
            accept="image/*"
            @change="handleFileChange"
          />
        </div>
        
        <div class="flex-1 text-center md:text-left">
          <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-2">
            <h1 class="text-3xl font-bold text-gray-800">{{ user?.name }}</h1>
            <button 
              @click="openEditModal"
              class="inline-flex items-center px-4 py-2 bg-white border border-gray-200 rounded-xl text-sm font-bold text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-all shadow-sm"
            >
              <Settings class="w-4 h-4 mr-2" />
              Edit Profile
            </button>
          </div>
          <div class="flex flex-wrap justify-center md:justify-start gap-4 text-gray-600">
            <div class="flex items-center">
              <Mail class="w-4 h-4 mr-2 text-blue-500" />
              {{ user?.email }}
            </div>
            <div class="flex items-center" v-if="user?.phone">
              <Phone class="w-4 h-4 mr-2 text-blue-500" />
              {{ user?.phone }}
            </div>
            <div class="flex items-center">
              <UserIcon class="w-4 h-4 mr-2 text-blue-500" />
              CRN: {{ user?.crn || 'N/A' }}
            </div>
          </div>
          
          <div class="mt-6 flex flex-wrap justify-center md:justify-start gap-3">
            <span class="px-4 py-1.5 bg-blue-50 text-blue-700 rounded-full text-sm font-bold border border-blue-100">
              {{ user?.ca_level || 'PRC' }} Level
            </span>
            <span class="px-4 py-1.5 bg-purple-50 text-purple-700 rounded-full text-sm font-bold border border-purple-100">
              {{ user?.role?.toUpperCase() }}
            </span>
            <span v-if="user?.status === 'approved' || user?.isApproved" class="px-4 py-1.5 bg-green-50 text-green-700 rounded-full text-sm font-bold border border-green-100">
              Verified Account
            </span>
          </div>
        </div>
      </div>
    </div>

    <!-- Edit Profile Modal -->
    <div v-if="showEditModal" class="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div class="bg-white rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden animate-in fade-in zoom-in duration-200">
        <div class="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50">
          <div>
            <h3 class="text-xl font-bold text-gray-900">Edit Profile</h3>
            <p class="text-sm text-gray-500">Update your account information</p>
          </div>
          <button @click="showEditModal = false" class="text-gray-400 hover:text-gray-600 p-2 rounded-lg hover:bg-gray-100 transition-colors">
            <X class="w-6 h-6" />
          </button>
        </div>

        <form @submit.prevent="handleUpdateProfile" class="p-6 space-y-4">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="space-y-1">
              <label class="text-sm font-bold text-gray-700 ml-1">Full Name</label>
              <div class="relative">
                <UserIcon class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input 
                  v-model="editForm.name"
                  type="text" 
                  required
                  class="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                  placeholder="Your full name"
                />
              </div>
            </div>
            <div class="space-y-1">
              <label class="text-sm font-bold text-gray-700 ml-1">Phone Number</label>
              <div class="relative">
                <Phone class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input 
                  v-model="editForm.phone"
                  type="tel" 
                  class="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                  placeholder="Your phone number"
                />
              </div>
            </div>
          </div>

          <div class="space-y-1">
            <label class="text-sm font-bold text-gray-700 ml-1">Email Address</label>
            <div class="relative">
              <Mail class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input 
                v-model="editForm.email"
                type="email" 
                required
                class="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                placeholder="current@email.com"
              />
            </div>
          </div>

          <div class="pt-4 border-t border-gray-100">
            <div class="flex items-center justify-between mb-4">
              <h4 class="font-bold text-gray-800">Change Password</h4>
              <span class="text-[10px] text-gray-400 uppercase font-bold tracking-widest">Optional</span>
            </div>
            <div class="relative">
              <Lock class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input 
                v-model="editForm.password"
                type="password" 
                class="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                placeholder="Enter new password (min 8 chars)"
              />
            </div>
            <p class="text-[10px] text-gray-500 mt-2 ml-1 italic">Leave blank to keep your current password</p>
          </div>

          <div class="pt-6 flex gap-3">
            <button 
              type="button"
              @click="showEditModal = false"
              class="flex-1 px-6 py-3 border border-gray-200 text-gray-700 font-bold rounded-xl hover:bg-gray-50 transition-all"
            >
              Cancel
            </button>
            <button 
              type="submit"
              :disabled="updating"
              class="flex-[2] px-6 py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:scale-95"
            >
              <span v-if="!updating">Save Changes</span>
              <Loader2 v-else class="w-5 h-5 animate-spin mx-auto" />
            </button>
          </div>
        </form>
      </div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <!-- Left Column: Subscription -->
      <div class="lg:col-span-2 space-y-8">
        <!-- Subscription Card -->
        <div class="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 text-white shadow-xl relative overflow-hidden">
          <div class="absolute -right-8 -top-8 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
          
          <div class="relative z-10">
            <div class="flex items-center justify-between mb-8">
              <Zap class="w-8 h-8 text-yellow-400" />
              <span class="px-3 py-1 bg-white/20 rounded-full text-xs font-bold uppercase tracking-widest">
                {{ user?.active_subscription ? 'Active Plan' : 'No Active Plan' }}
              </span>
            </div>
            
            <h3 class="text-2xl font-black mb-1">{{ user?.active_subscription?.subscription_plan?.name || 'Basic Access' }}</h3>
            <p class="text-white/60 text-sm mb-8">
              {{ user?.active_subscription ? `Valid until ${formatDate(user.active_subscription.expires_at)}` : 'Subscribe to unlock premium features' }}
            </p>
            
            <div v-if="user?.active_subscription" class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div class="flex justify-between text-sm border-b border-white/10 pb-2">
                <span class="text-white/60">Book Reservations</span>
                <span class="font-bold">{{ user.active_subscription.subscription_plan?.book_reservations_limit === -1 ? 'Unlimited' : user.active_subscription.subscription_plan?.book_reservations_limit || 'N/A' }}</span>
              </div>
              <div class="flex justify-between text-sm border-b border-white/10 pb-2">
                <span class="text-white/60">Daily Seat Bookings</span>
                <span class="font-bold">{{ user.active_subscription.subscription_plan?.daily_seat_bookings_limit === -1 ? 'Unlimited' : user.active_subscription.subscription_plan?.daily_seat_bookings_limit || 'N/A' }}</span>
              </div>
              <div class="flex justify-between text-sm border-b border-white/10 pb-2">
                <span class="text-white/60">Library Access</span>
                <span class="font-bold">{{ user.active_subscription.subscription_plan?.libraries_access_limit === -1 ? 'Unlimited' : user.active_subscription.subscription_plan?.libraries_access_limit || 'N/A' }}</span>
              </div>
              <div class="flex justify-between text-sm border-b border-white/10 pb-2">
                <span class="text-white/60">Advance Booking</span>
                <span class="font-bold">
                  <span v-if="user.active_subscription.subscription_plan?.advance_booking_days === -1">Unlimited</span>
                  <span v-else-if="user.active_subscription.subscription_plan?.advance_booking_days === 0">Same Day</span>
                  <span v-else>{{ user.active_subscription.subscription_plan?.advance_booking_days }} Days</span>
                </span>
              </div>
            </div>

            <router-link 
              to="/student/subscription" 
              class="inline-block px-12 py-4 bg-white text-gray-900 rounded-xl font-bold hover:bg-gray-100 transition-colors shadow-lg text-center"
            >
              {{ user?.active_subscription ? 'Manage Plan' : 'View Plans' }}
            </router-link>
          </div>
        </div>
      </div>

      <!-- Right Column: Active Sessions -->
      <div class="lg:col-span-1 space-y-8">
        <!-- Session Management Section -->
        <div class="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
          <SessionManagement />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useAuth } from '@/shared/composables/useAuth';
import SessionManagement from '@/shared/components/Profile/SessionManagement.vue';
import { 
  Camera, Mail, Phone, User as UserIcon, Lock, Settings, 
  X, Loader2, Zap
} from 'lucide-vue-next';
import { studentAPI } from '@/shared/services/api';

const { user, checkAuth } = useAuth();
const fileInput = ref<HTMLInputElement | null>(null);

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
    
    // Remove password if blank
    if (!updateData.password) {
      delete updateData.password;
    }

    await studentAPI.updateProfile(updateData);
    await checkAuth(); // Refresh global user state
    showEditModal.value = false;
    showSuccess('Profile Updated', 'Your profile information has been successfully updated.');
  } catch (error: any) {
    console.error('Failed to update profile:', error);
    showError('Update Failed', error.message || 'Failed to update profile');
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

import { useSwal } from '@/shared/composables/useSwal';
const { showSuccess, showError, showWarning } = useSwal();

const handleFileChange = async (event: Event) => {
  const target = event.target as HTMLInputElement;
  if (target.files && target.files[0]) {
    const file = target.files[0];
    
    // Validate file size (max 2MB)
    if (file.size > 2 * 1024 * 1024) {
      showWarning('File too large', 'File size must be less than 2MB');
      return;
    }

    try {
      const formData = new FormData();
      formData.append('profile_picture', file);
      
      await studentAPI.updateProfile(formData);
      await checkAuth(); // Refresh user data to show new image
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

onMounted(async () => {
});
</script>
