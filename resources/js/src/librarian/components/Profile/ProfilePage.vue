<template>
  <div class="p-6 space-y-6 font-outfit text-left">
    <!-- Header Hero Profile Card -->
    <div class="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden relative">
      <!-- Gradient Cover Banner -->
      <div class="h-36 bg-gradient-to-r from-emerald-800 via-emerald-700 to-teal-900 relative overflow-hidden">
        <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/15 via-transparent to-transparent"></div>
        <div class="absolute -right-10 -bottom-10 w-48 h-48 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>
        <div class="absolute top-1/2 left-10 w-36 h-36 bg-teal-400/10 rounded-full blur-xl pointer-events-none"></div>
      </div>

      <!-- Main Profile Banner Content -->
      <div class="px-6 pb-6 pt-0 relative">
        <div class="flex flex-col md:flex-row items-center md:items-start justify-between gap-6 mb-4">
          <!-- Avatar + Name Header Group -->
          <div class="flex flex-col md:flex-row items-center md:items-start gap-5 text-center md:text-left">
            <!-- Avatar Section with Glow & Camera Button (-mt-14 overlap) -->
            <div class="relative group flex-shrink-0 -mt-14">
              <div class="w-28 h-28 rounded-2xl bg-gradient-to-tr from-emerald-600 to-teal-600 flex items-center justify-center text-white text-3xl font-bold shadow-lg overflow-hidden border-4 border-white bg-slate-900">
                <img 
                  v-if="user?.profile_picture" 
                  :src="getProfilePictureUrl(user.profile_picture)" 
                  alt="Profile" 
                  class="w-full h-full object-cover"
                />
                <span v-else>{{ userInitials }}</span>
              </div>
              <button 
                @click="triggerFileInput"
                class="absolute -bottom-1 -right-1 p-2 bg-white rounded-xl shadow-md border border-slate-200 text-slate-700 hover:text-emerald-700 transition-all z-10 hover:scale-105 active:scale-95 cursor-pointer"
                title="Change Photo"
              >
                <Camera class="w-4 h-4" />
              </button>
              <input 
                type="file" 
                ref="fileInput" 
                class="hidden" 
                accept="image/*"
                @change="handleFileChange"
              />
            </div>

            <!-- Title & Badges -->
            <div class="pt-3">
              <div class="flex items-center justify-center md:justify-start space-x-2">
                <h1 class="text-xl font-bold text-slate-800 tracking-tight leading-tight">{{ user?.name }}</h1>
                <span v-if="user?.status === 'approved' || user?.isApproved" class="inline-flex items-center text-emerald-600" title="Verified Librarian Account">
                  <ShieldCheck class="w-4.5 h-4.5 fill-emerald-100" />
                </span>
              </div>
              
              <!-- Quick Badges Row -->
              <div class="flex flex-wrap items-center justify-center md:justify-start gap-2 mt-2">
                <!-- Staff ID Badge -->
                <span class="px-2.5 py-0.5 bg-emerald-50 text-emerald-700 rounded-lg text-[11px] font-bold tracking-wide border border-emerald-100 uppercase">
                  STAFF ID: #{{ user?.id || 'LIB' }}
                </span>

                <!-- Role Badge -->
                <span class="px-2.5 py-0.5 bg-purple-50 text-purple-700 rounded-lg text-[11px] font-semibold tracking-wide uppercase border border-purple-100">
                  {{ user?.role?.toUpperCase() || 'LIBRARIAN' }}
                </span>
              </div>
            </div>
          </div>
        </div>

        <!-- Contact & Location Metadata Bar -->
        <div class="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-center md:justify-start gap-y-2 gap-x-6 text-xs font-medium text-slate-600">
          <div class="flex items-center space-x-2">
            <Mail class="w-4 h-4 text-emerald-600" />
            <span>{{ user?.email }}</span>
          </div>

          <div class="flex items-center space-x-2" v-if="user?.phone">
            <Phone class="w-4 h-4 text-emerald-600" />
            <span>{{ user?.phone }}</span>
          </div>

          <div class="flex items-center space-x-2" v-if="user?.library">
            <Building2 class="w-4 h-4 text-emerald-600" />
            <span>{{ user.library.name }}</span>
          </div>

          <div class="flex items-center space-x-2">
            <Calendar class="w-4 h-4 text-emerald-600" />
            <span>Member since {{ formatDate(user?.created_at) }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Navigation Tabs Bar -->
    <div class="flex items-center space-x-2 border-b border-slate-200/80 pb-3 overflow-x-auto">
      <button
        v-for="tab in tabs"
        :key="tab.id"
        @click="activeTab = tab.id"
        :class="[
          'px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center space-x-2 cursor-pointer border',
          activeTab === tab.id
            ? 'bg-emerald-700 text-white border-emerald-700 shadow-sm font-bold'
            : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50 hover:text-emerald-700'
        ]"
      >
        <component :is="tab.icon" class="w-4 h-4" />
        <span>{{ tab.label }}</span>
      </button>
    </div>

    <!-- Tab 1: Personal Information -->
    <div v-if="activeTab === 'personal'" class="grid grid-cols-1 lg:grid-cols-3 gap-6 text-left animate-fade-in">
      <!-- Edit Profile Form -->
      <div class="lg:col-span-2 bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-slate-100 space-y-6">
        <div class="flex items-center justify-between border-b border-slate-100 pb-4">
          <div>
            <h3 class="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center space-x-2">
              <span class="w-2 h-2 rounded-full bg-blue-600"></span>
              <span>Personal Information</span>
            </h3>
            <p class="text-xs text-slate-400 font-medium mt-0.5">Manage your personal account contact details</p>
          </div>
          <button
            @click="isEditing = !isEditing"
            :class="[
              'px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer border flex items-center space-x-1.5',
              isEditing 
                ? 'bg-slate-100 text-slate-600 border-slate-200 hover:bg-slate-200' 
                : 'bg-emerald-50 text-emerald-700 border-emerald-100 hover:bg-emerald-100'
            ]"
          >
            <Edit2 class="w-3.5 h-3.5" />
            <span>{{ isEditing ? 'Cancel' : 'Edit Profile' }}</span>
          </button>
        </div>

        <form @submit.prevent="handleUpdateProfile" class="space-y-5">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
            <!-- Full Name -->
            <div>
              <label class="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5 ml-1">Full Name *</label>
              <div class="relative group">
                <UserIcon class="absolute left-3.5 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-emerald-600 transition-colors" />
                <input
                  v-model="form.name"
                  type="text"
                  required
                  :disabled="!isEditing"
                  class="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-700 focus:bg-white focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none disabled:bg-slate-100/50 disabled:text-slate-400 transition-all shadow-sm"
                  placeholder="Your full name"
                />
              </div>
            </div>

            <!-- Email Address -->
            <div>
              <label class="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5 ml-1">Email Address *</label>
              <div class="relative group">
                <Mail class="absolute left-3.5 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-emerald-600 transition-colors" />
                <input
                  v-model="form.email"
                  type="email"
                  required
                  :disabled="!isEditing"
                  class="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-700 focus:bg-white focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none disabled:bg-slate-100/50 disabled:text-slate-400 transition-all shadow-sm"
                  placeholder="name@smartlib.com"
                />
              </div>
            </div>

            <!-- Phone Number -->
            <div>
              <label class="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5 ml-1">Phone Number</label>
              <div class="relative group">
                <Phone class="absolute left-3.5 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-emerald-600 transition-colors" />
                <input
                  v-model="form.phone"
                  type="tel"
                  placeholder="e.g. +92 300 1234567"
                  :disabled="!isEditing"
                  class="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-700 focus:bg-white focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none disabled:bg-slate-100/50 disabled:text-slate-400 transition-all shadow-sm"
                />
              </div>
            </div>

            <!-- Role Level (Readonly) -->
            <div>
              <label class="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5 ml-1">Role Level</label>
              <div class="relative">
                <ShieldCheck class="absolute left-3.5 top-1/2 transform -translate-y-1/2 w-4 h-4 text-emerald-600" />
                <input
                  value="Librarian / Library Administrator"
                  disabled
                  class="w-full pl-10 pr-4 py-2.5 bg-slate-100/70 border border-slate-200 rounded-xl text-xs font-bold text-emerald-800 outline-none cursor-not-allowed shadow-sm"
                />
              </div>
            </div>
          </div>

          <!-- Save / Cancel Buttons -->
          <div v-if="isEditing" class="flex justify-end gap-3 pt-4 border-t border-slate-100">
            <button
              type="button"
              @click="cancelEdit"
              class="px-5 py-2.5 border border-slate-200 text-slate-600 font-bold rounded-xl hover:bg-slate-50 transition-colors text-xs cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              :disabled="isSaving"
              class="px-6 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white font-bold rounded-xl transition-all disabled:opacity-50 flex items-center space-x-2 text-xs cursor-pointer shadow-sm shadow-emerald-700/20"
            >
              <RefreshCw v-if="isSaving" class="w-4 h-4 animate-spin" />
              <Save v-else class="w-4 h-4" />
              <span>{{ isSaving ? 'Saving...' : 'Save Profile Changes' }}</span>
            </button>
          </div>
        </form>
      </div>

      <!-- Account Overview Side Cards -->
      <div class="space-y-6">
        <!-- Highlights Card -->
        <div class="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 space-y-4">
          <h3 class="text-xs font-bold text-slate-800 uppercase tracking-wider mb-5 flex items-center space-x-2">
            <span class="w-2 h-2 rounded-full bg-blue-600"></span>
            <span>Account Overview</span>
          </h3>

          <div class="space-y-3">
            <div class="flex items-center justify-between p-3.5 bg-slate-50 rounded-2xl border border-slate-100">
              <div class="flex items-center space-x-3">
                <div class="p-2.5 bg-emerald-50 text-emerald-700 rounded-xl border border-emerald-100">
                  <Building2 class="w-4 h-4" />
                </div>
                <div>
                  <div class="text-xs font-bold text-slate-800">Assigned Library</div>
                  <div class="text-[10px] font-semibold text-slate-500 mt-0.5">{{ user?.library?.name || 'Unassigned' }}</div>
                </div>
              </div>
              <router-link to="/librarian/library" class="text-xs font-bold text-emerald-700 hover:text-emerald-800">
                View →
              </router-link>
            </div>

            <div class="flex items-center justify-between p-3.5 bg-slate-50 rounded-2xl border border-slate-100">
              <div class="flex items-center space-x-3">
                <div class="p-2.5 bg-purple-50 text-purple-700 rounded-xl border border-purple-100">
                  <Calendar class="w-4 h-4" />
                </div>
                <div>
                  <div class="text-xs font-bold text-slate-800">Registration Date</div>
                  <div class="text-[10px] font-semibold text-slate-500 mt-0.5">{{ formatDate(user?.created_at) }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Quick Shortcuts Card -->
        <div class="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 space-y-3">
          <h3 class="text-xs font-bold text-slate-800 uppercase tracking-wider mb-5 flex items-center space-x-2">
            <span class="w-2 h-2 rounded-full bg-blue-600"></span>
            <span>Quick Management Tools</span>
          </h3>

          <router-link to="/librarian/seats" class="flex items-center justify-between p-3 bg-slate-50 hover:bg-emerald-50/60 rounded-2xl border border-slate-100 hover:border-emerald-200 transition-all cursor-pointer group">
            <span class="text-xs font-bold text-slate-700 group-hover:text-emerald-800">Seat Layout & Live Map</span>
            <ArrowRight class="w-4 h-4 text-slate-400 group-hover:text-emerald-700" />
          </router-link>

          <router-link to="/librarian/books" class="flex items-center justify-between p-3 bg-slate-50 hover:bg-emerald-50/60 rounded-2xl border border-slate-100 hover:border-emerald-200 transition-all cursor-pointer group">
            <span class="text-xs font-bold text-slate-700 group-hover:text-emerald-800">Book Inventory Catalog</span>
            <ArrowRight class="w-4 h-4 text-slate-400 group-hover:text-emerald-700" />
          </router-link>

          <router-link to="/librarian/reports" class="flex items-center justify-between p-3 bg-slate-50 hover:bg-emerald-50/60 rounded-2xl border border-slate-100 hover:border-emerald-200 transition-all cursor-pointer group">
            <span class="text-xs font-bold text-slate-700 group-hover:text-emerald-800">Scheduled Reports Hub</span>
            <ArrowRight class="w-4 h-4 text-slate-400 group-hover:text-emerald-700" />
          </router-link>
        </div>
      </div>
    </div>

    <!-- Tab 2: Security & Password -->
    <div v-if="activeTab === 'security'" class="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-slate-100 text-left max-w-2xl space-y-6 animate-fade-in">
      <div class="border-b border-slate-100 pb-4">
        <h3 class="text-xs font-bold text-slate-800 uppercase tracking-wider mb-5 flex items-center space-x-2">
          <span class="w-2 h-2 rounded-full bg-blue-600"></span>
          <span>Security & Password Management</span>
        </h3>
        <p class="text-xs text-slate-400 font-medium -mt-3">Update your account login password</p>
      </div>

      <form @submit.prevent="handleUpdatePassword" class="space-y-5">
        <div class="space-y-4">
          <div>
            <label class="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5 ml-1">New Password *</label>
            <div class="relative group">
              <Lock class="absolute left-3.5 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-emerald-600 transition-colors" />
              <input
                v-model="passwordForm.password"
                type="password"
                required
                placeholder="Enter at least 8 characters"
                class="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-700 focus:bg-white focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all shadow-sm"
              />
            </div>
          </div>

          <div>
            <label class="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5 ml-1">Confirm New Password *</label>
            <div class="relative group">
              <Lock class="absolute left-3.5 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-emerald-600 transition-colors" />
              <input
                v-model="passwordForm.password_confirmation"
                type="password"
                required
                placeholder="Re-type new password"
                class="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-700 focus:bg-white focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all shadow-sm"
              />
            </div>
          </div>
        </div>

        <div class="pt-4 border-t border-slate-100 flex justify-end">
          <button
            type="submit"
            :disabled="isSavingPassword"
            class="px-6 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white font-bold rounded-xl transition-all disabled:opacity-50 flex items-center space-x-2 text-xs cursor-pointer shadow-sm shadow-emerald-700/20"
          >
            <RefreshCw v-if="isSavingPassword" class="w-4 h-4 animate-spin" />
            <KeyRound v-else class="w-4 h-4" />
            <span>{{ isSavingPassword ? 'Updating Password...' : 'Update Password' }}</span>
          </button>
        </div>
      </form>
    </div>

    <!-- Tab 3: Assigned Library Workspace -->
    <div v-if="activeTab === 'library'" class="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-slate-100 text-left space-y-6 animate-fade-in">
      <div class="flex items-center justify-between border-b border-slate-100 pb-4">
        <div>
          <h3 class="text-xs font-bold text-slate-800 uppercase tracking-wider mb-5 flex items-center space-x-2">
            <span class="w-2 h-2 rounded-full bg-blue-600"></span>
            <span>Assigned Library Details</span>
          </h3>
          <p class="text-xs text-slate-400 font-medium -mt-3">Overview of the library facility managed by your account</p>
        </div>
        <router-link
          to="/librarian/library"
          class="px-4 py-2 bg-emerald-50 text-emerald-700 border border-emerald-100 hover:bg-emerald-100 rounded-xl text-xs font-bold transition-all flex items-center space-x-1.5"
        >
          <span>Manage Library Settings</span>
          <ArrowRight class="w-3.5 h-3.5" />
        </router-link>
      </div>

      <div v-if="user?.library" class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="p-5 bg-slate-50 rounded-2xl border border-slate-100 space-y-2">
          <div class="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Library Name</div>
          <div class="text-sm font-bold text-slate-800">{{ user.library.name }}</div>
        </div>

        <div class="p-5 bg-slate-50 rounded-2xl border border-slate-100 space-y-2">
          <div class="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Library Address</div>
          <div class="text-xs font-bold text-slate-700">{{ user.library.address || 'N/A' }}</div>
        </div>

        <div class="p-5 bg-slate-50 rounded-2xl border border-slate-100 space-y-2">
          <div class="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Library ID Code</div>
          <div class="text-xs font-bold text-emerald-700 font-mono">#{{ user.library.id }}</div>
        </div>
      </div>
      <div v-else class="text-center py-12 text-slate-400 text-xs font-semibold">
        No library currently assigned to your librarian account.
      </div>
    </div>

    <!-- Tab 4: Devices & Active Sessions -->
    <div v-if="activeTab === 'sessions'" class="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-slate-100 text-left space-y-6 animate-fade-in">
      <div class="border-b border-slate-100 pb-4">
        <h3 class="text-xs font-bold text-slate-800 uppercase tracking-wider mb-5 flex items-center space-x-2">
          <span class="w-2 h-2 rounded-full bg-blue-600"></span>
          <span>Device & Active Sessions</span>
        </h3>
        <p class="text-xs text-slate-400 font-medium -mt-3">Manage logged in browser sessions and security authorizations</p>
      </div>

      <SessionManagement />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { useAuth } from '@/shared/composables/useAuth';
import { studentAPI } from '@/shared/services/api';
import SessionManagement from '@/shared/components/Profile/SessionManagement.vue';
import { useSwal } from '@/shared/composables/useSwal';
import {
  User as UserIcon,
  Mail,
  Phone,
  Lock,
  Camera,
  ShieldCheck,
  Building2,
  Calendar,
  KeyRound,
  Save,
  RefreshCw,
  Edit2,
  ArrowRight
} from 'lucide-vue-next';

const { user, checkAuth } = useAuth();
const { showSuccess, showError, showWarning } = useSwal();

type TabId = 'personal' | 'security' | 'library' | 'sessions';

const activeTab = ref<TabId>('personal');
const isEditing = ref(false);
const isSaving = ref(false);
const isSavingPassword = ref(false);
const fileInput = ref<HTMLInputElement | null>(null);

const tabs: { id: TabId; label: string; icon: any }[] = [
  { id: 'personal', label: 'Personal Information', icon: UserIcon },
  { id: 'security', label: 'Security & Password', icon: Lock },
  { id: 'library', label: 'Assigned Library', icon: Building2 },
  { id: 'sessions', label: 'Active Sessions', icon: ShieldCheck }
];

const form = ref({
  name: '',
  email: '',
  phone: ''
});

const passwordForm = ref({
  password: '',
  password_confirmation: ''
});

const userInitials = computed(() => {
  if (!user.value?.name) return 'L';
  return user.value.name.charAt(0).toUpperCase();
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
  }
};

const handleUpdateProfile = async () => {
  isSaving.value = true;
  try {
    const updateData = {
      name: form.value.name,
      email: form.value.email,
      phone: form.value.phone
    };

    await studentAPI.updateProfile(updateData);
    await checkAuth();
    isEditing.value = false;
    showSuccess('Profile Updated!', 'Personal details updated successfully.');
  } catch (error: any) {
    console.error('Failed to update profile:', error);
    const message = error.response?.data?.message || 'Failed to update profile';
    showError('Update Failed', message);
  } finally {
    isSaving.value = false;
  }
};

const handleUpdatePassword = async () => {
  if (passwordForm.value.password !== passwordForm.value.password_confirmation) {
    showWarning('Password Mismatch', 'New passwords do not match');
    return;
  }

  isSavingPassword.value = true;
  try {
    await studentAPI.updateProfile({
      password: passwordForm.value.password,
      password_confirmation: passwordForm.value.password_confirmation
    });
    await checkAuth();
    passwordForm.value.password = '';
    passwordForm.value.password_confirmation = '';
    showSuccess('Password Updated!', 'Your account password has been changed successfully.');
  } catch (error: any) {
    console.error('Failed to update password:', error);
    const message = error.response?.data?.message || 'Failed to update password';
    showError('Update Failed', message);
  } finally {
    isSavingPassword.value = false;
  }
};

const triggerFileInput = () => {
  fileInput.value?.click();
};

const getProfilePictureUrl = (path: string) => {
  if (!path) return '';
  if (path.startsWith('http')) return path;
  return `/storage/${path}`;
};

const formatDate = (dateStr?: string) => {
  if (!dateStr) return 'N/A';
  return new Date(dateStr).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });
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
      await checkAuth();
      showSuccess('Photo Updated!', 'Profile picture updated successfully');
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

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(4px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-fade-in {
  animation: fadeIn 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}
</style>
