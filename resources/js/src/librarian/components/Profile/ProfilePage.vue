<template>
  <div class="p-6 space-y-8 pb-12 font-outfit">
    <!-- Header Section -->
    <div class="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
      <div class="flex flex-col md:flex-row items-center gap-8">
        <div class="relative group">
          <div class="w-32 h-32 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-700 flex items-center justify-center text-white text-4xl font-bold shadow-lg overflow-hidden">
            <img 
              v-if="user?.profile_picture" 
              :src="getProfilePictureUrl(user.profile_picture)" 
              alt="Profile" 
              class="w-full h-full object-cover animate-fade-in"
            />
            <span v-else class="animate-fade-in">{{ user?.name?.charAt(0).toUpperCase() }}</span>
          </div>
          <button 
            @click="triggerFileInput"
            class="absolute bottom-0 right-0 p-2.5 bg-white rounded-xl shadow-md border border-slate-200 text-slate-500 hover:text-emerald-700 transition-colors z-10 cursor-pointer"
            title="Upload Profile Picture"
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
          <h1 class="text-3xl font-bold text-slate-800 mb-2 tracking-tight">{{ user?.name }}</h1>
          <div class="flex flex-wrap justify-center md:justify-start gap-4 text-slate-500 text-sm font-semibold">
            <div class="flex items-center">
              <Mail class="w-4 h-4 mr-2 text-emerald-600/80" />
              {{ user?.email }}
            </div>
            <div class="flex items-center" v-if="user?.phone">
              <Phone class="w-4 h-4 mr-2 text-emerald-600/80" />
              {{ user?.phone }}
            </div>
          </div>
          
          <div class="mt-6 flex flex-wrap justify-center md:justify-start gap-3 text-xs font-bold">
            <span class="px-4 py-1.5 bg-emerald-50 text-emerald-700 rounded-full border border-emerald-100">
              LIBRARIAN
            </span>
            <span v-if="user?.library" class="px-4 py-1.5 bg-blue-50 text-blue-700 rounded-full border border-blue-100">
              {{ user.library.name }}
            </span>
          </div>
        </div>
      </div>
    </div>

    <!-- Personal Information Form -->
    <div class="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
      <div class="flex items-center justify-between mb-6">
        <h2 class="text-lg font-bold text-slate-800 flex items-center">
          <UserIcon class="w-5 h-5 mr-2 text-emerald-650" />
          Personal Information
        </h2>
        <button 
          @click="isEditing = !isEditing"
          class="text-xs font-bold text-emerald-700 hover:text-emerald-800 transition-colors cursor-pointer bg-emerald-50 px-3 py-1.5 rounded-xl border border-emerald-100"
        >
          {{ isEditing ? 'Cancel Editing' : 'Edit Details' }}
        </button>
      </div>

      <form @submit.prevent="handleUpdateProfile" class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label class="block text-xs font-bold text-slate-550 mb-1.5 uppercase tracking-wider">Full Name</label>
          <div class="relative">
            <UserIcon class="absolute left-3.5 top-1/2 transform -translate-y-1/2 w-4.5 h-4.5 text-slate-400" />
            <input 
              v-model="form.name"
              type="text" 
              :disabled="!isEditing"
              class="w-full pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-xs font-semibold focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none disabled:bg-slate-50/50 disabled:text-slate-400"
            />
          </div>
        </div>

        <div>
          <label class="block text-xs font-bold text-slate-550 mb-1.5 uppercase tracking-wider">Email Address</label>
          <div class="relative">
            <Mail class="absolute left-3.5 top-1/2 transform -translate-y-1/2 w-4.5 h-4.5 text-slate-400" />
            <input 
              v-model="form.email"
              type="email" 
              :disabled="!isEditing"
              class="w-full pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-xs font-semibold focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none disabled:bg-slate-50/50 disabled:text-slate-400"
            />
          </div>
        </div>

        <div>
          <label class="block text-xs font-bold text-slate-550 mb-1.5 uppercase tracking-wider">Phone Number</label>
          <div class="relative">
            <Phone class="absolute left-3.5 top-1/2 transform -translate-y-1/2 w-4.5 h-4.5 text-slate-400" />
            <input 
              v-model="form.phone"
              type="tel" 
              :disabled="!isEditing"
              class="w-full pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-xs font-semibold focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none disabled:bg-slate-50/50 disabled:text-slate-400"
            />
          </div>
        </div>

        <div v-if="isEditing" class="md:col-span-2 border-t border-slate-100 pt-6 mt-2 text-left">
          <h3 class="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Change Password (Optional)</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label class="block text-xs font-bold text-slate-550 mb-1.5 uppercase tracking-wider">New Password</label>
              <div class="relative">
                <Lock class="absolute left-3.5 top-1/2 transform -translate-y-1/2 w-4.5 h-4.5 text-slate-400" />
                <input 
                  v-model="form.password"
                  type="password" 
                  placeholder="Leave blank to keep current"
                  class="w-full pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-xs font-semibold focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none"
                />
              </div>
            </div>
            <div>
              <label class="block text-xs font-bold text-slate-550 mb-1.5 uppercase tracking-wider">Confirm Password</label>
              <div class="relative">
                <Lock class="absolute left-3.5 top-1/2 transform -translate-y-1/2 w-4.5 h-4.5 text-slate-400" />
                <input 
                  v-model="form.password_confirmation"
                  type="password" 
                  placeholder="Confirm new password"
                  class="w-full pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-xs font-semibold focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none"
                />
              </div>
            </div>
          </div>
        </div>

        <div v-if="isEditing" class="md:col-span-2 flex justify-end gap-3 pt-4">
          <button 
            type="button"
            @click="cancelEdit"
            class="px-5 py-2.5 border border-slate-200 text-slate-500 font-bold rounded-xl hover:bg-slate-50 transition-colors text-xs cursor-pointer shadow-sm"
          >
            Cancel
          </button>
          <button 
            type="submit"
            :disabled="isSaving"
            class="px-5 py-2.5 bg-emerald-700 text-white font-bold rounded-xl hover:bg-emerald-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center text-xs cursor-pointer shadow-sm"
          >
            <span v-if="isSaving" class="mr-2">
              <div class="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            </span>
            {{ isSaving ? 'Saving...' : 'Save Changes' }}
          </button>
        </div>
      </form>
    </div>
 
    <div class="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
      <h2 class="text-lg font-bold text-slate-800 flex items-center mb-6">
        <ShieldCheck class="w-5 h-5 mr-2 text-emerald-650" />
        Device & Session Management
      </h2>
      <SessionManagement />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useAuth } from '@/shared/composables/useAuth';
import { studentAPI } from '@/shared/services/api';
import SessionManagement from '@/shared/components/Profile/SessionManagement.vue';
import { 
  User as UserIcon, 
  Mail, 
  Phone, 
  Lock, 
  Camera,
  ShieldCheck
} from 'lucide-vue-next';

const { user, checkAuth } = useAuth();
const isEditing = ref(false);
const isSaving = ref(false);
const fileInput = ref<HTMLInputElement | null>(null);

const form = ref({
  name: '',
  email: '',
  phone: '',
  password: '',
  password_confirmation: ''
});

onMounted(() => {
  if (user.value) {
    form.value.name = user.value.name;
    form.value.email = user.value.email;
    form.value.phone = user.value.phone || '';
  }
});

const cancelEdit = () => {
  isEditing.value = false;
  if (user.value) {
    form.value.name = user.value.name;
    form.value.email = user.value.email;
    form.value.phone = user.value.phone || '';
    form.value.password = '';
    form.value.password_confirmation = '';
  }
};

import { useSwal } from '@/shared/composables/useSwal';
const { showSuccess, showError, showWarning } = useSwal();

const handleUpdateProfile = async () => {
  if (form.value.password && form.value.password !== form.value.password_confirmation) {
    showWarning('Password Mismatch', 'Passwords do not match');
    return;
  }

  isSaving.value = true;
  try {
    const updateData: any = {
      name: form.value.name,
      email: form.value.email,
      phone: form.value.phone
    };

    if (form.value.password) {
      updateData.password = form.value.password;
    }

    await studentAPI.updateProfile(updateData);
    await checkAuth();
    isEditing.value = false;
    showSuccess('Updated!', 'Profile updated successfully');
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
    isSaving.value = false;
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
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap');

.font-outfit {
  font-family: 'Outfit', sans-serif;
}
</style>
