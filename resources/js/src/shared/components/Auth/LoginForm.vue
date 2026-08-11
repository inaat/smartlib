<template>
  <div class="h-screen w-full flex bg-white font-sans antialiased text-slate-900 overflow-hidden">
    <!-- Left Column (50% Desktop) -->
    <div class="w-full lg:w-1/2 h-full flex flex-col justify-center items-center px-6 sm:px-10 lg:px-14 py-6 overflow-y-auto bg-white">
      <div class="w-full max-w-sm my-auto">
        <!-- Logo Header -->
        <router-link to="/" class="inline-flex items-center space-x-2 mb-6 group">
          <div class="h-8 w-8 rounded-lg bg-blue-600 flex items-center justify-center text-white shadow-sm group-hover:scale-105 transition-transform">
            <BookOpen class="h-4.5 w-4.5" />
          </div>
          <span class="text-lg font-bold text-slate-900 tracking-tight">{{ appName }}</span>
        </router-link>

        <!-- Welcome Title & Subtitle -->
        <div class="mb-5">
          <h1 class="text-2xl font-bold text-slate-900 tracking-tight mb-1">Welcome back</h1>
          <p class="text-slate-500 font-normal text-xs">Sign in to your {{ appName }} account to continue</p>
        </div>

        <!-- Maintenance Mode Alert -->
        <transition name="fade">
          <div v-if="maintenanceMode" class="mb-4 p-3 rounded-lg bg-amber-50 border border-amber-200 flex items-start space-x-2.5 text-left">
            <AlertCircle class="h-4 w-4 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <h5 class="text-[11px] font-semibold text-amber-800 uppercase tracking-wide">Maintenance Mode Active</h5>
              <p class="text-xs text-amber-700 mt-0.5 leading-relaxed">System is under maintenance. Access is currently restricted to administrators.</p>
            </div>
          </div>
        </transition>

        <!-- Error Alert Banner -->
        <transition name="fade">
          <div v-if="errors.general" class="mb-4 p-3 rounded-lg bg-rose-50 border border-rose-200 flex items-start space-x-2.5">
            <AlertCircle class="h-4 w-4 text-rose-600 flex-shrink-0 mt-0.5" />
            <div>
              <h5 class="text-[11px] font-semibold text-rose-800 uppercase tracking-wide">Sign In Failed</h5>
              <p class="text-xs text-rose-700 mt-0.5 leading-relaxed">{{ errors.general }}</p>
            </div>
          </div>
        </transition>

        <!-- Login Form -->
        <form @submit.prevent="handleSubmit" class="space-y-3.5">
          <!-- Email Field -->
          <div>
            <label for="email" class="block text-xs font-semibold text-slate-700 mb-1">Email address</label>
            <div class="relative">
              <Mail class="absolute left-3 top-2.5 h-4 w-4 text-slate-400 pointer-events-none" />
              <input
                id="email"
                type="email"
                autocomplete="email"
                v-model="formData.email"
                @input="clearError('email')"
                :class="[
                  'w-full pl-9 pr-3.5 py-2 rounded-lg border bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-500/10 text-xs font-normal transition-all',
                  errors.email ? 'border-rose-400 bg-rose-50/20' : 'border-slate-200'
                ]"
                placeholder="student1@smartlib.com"
              />
            </div>
            <p v-if="errors.email" class="text-[11px] font-medium text-rose-600 mt-1 pl-1">{{ errors.email }}</p>
          </div>

          <!-- Password Field -->
          <div>
            <div class="flex items-center justify-between mb-1">
              <label for="password" class="block text-xs font-semibold text-slate-700">Password</label>
              <a href="#" class="text-xs font-semibold text-blue-600 hover:text-blue-700 hover:underline">Forgot password?</a>
            </div>
            <div class="relative">
              <Lock class="absolute left-3 top-2.5 h-4 w-4 text-slate-400 pointer-events-none" />
              <input
                id="password"
                :type="showPassword ? 'text' : 'password'"
                autocomplete="current-password"
                v-model="formData.password"
                @input="clearError('password')"
                :class="[
                  'w-full pl-9 pr-9 py-2 rounded-lg border bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-500/10 text-xs font-normal transition-all',
                  errors.password ? 'border-rose-400 bg-rose-50/20' : 'border-slate-200'
                ]"
                placeholder="••••••••"
              />
              <button type="button" @click="showPassword = !showPassword" class="absolute right-3 top-2.5 text-slate-400 hover:text-slate-600 transition-colors">
                <EyeOff v-if="showPassword" class="h-4 w-4" />
                <Eye v-else class="h-4 w-4" />
              </button>
            </div>
            <p v-if="errors.password" class="text-[11px] font-medium text-rose-600 mt-1 pl-1">{{ errors.password }}</p>
          </div>

          <!-- Remember Me Checkbox -->
          <div class="flex items-center space-x-2 pt-0.5">
            <input
              id="remember"
              type="checkbox"
              v-model="formData.remember"
              class="h-3.5 w-3.5 rounded border-slate-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
            />
            <label for="remember" class="text-xs font-medium text-slate-600 cursor-pointer select-none">Remember me</label>
          </div>

          <!-- Submit Button -->
          <button
            type="submit"
            :disabled="isLoading"
            class="w-full py-2.5 px-4 rounded-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 active:scale-[0.99] shadow-sm transition-all text-xs flex items-center justify-center space-x-1.5"
          >
            <span v-if="isLoading" class="flex items-center space-x-1.5">
              <svg class="animate-spin h-3.5 w-3.5 text-white" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <span>Signing in...</span>
            </span>
            <span v-else class="flex items-center space-x-1.5">
              <span>Sign in</span>
              <ArrowRight class="h-3.5 w-3.5" />
            </span>
          </button>
        </form>

        <!-- Divider Line -->
        <div class="relative my-5 text-center">
          <div class="absolute inset-0 flex items-center"><div class="w-full border-t border-slate-200"></div></div>
          <span class="relative px-2.5 text-[11px] font-medium text-slate-400 bg-white">Quick Demo Logins</span>
        </div>

        <!-- Quick Demo Account Buttons -->
        <div class="grid grid-cols-2 gap-2.5">
          <button
            type="button"
            @click="quickFill('student')"
            class="py-2 px-3 border border-slate-200 hover:border-slate-300 rounded-lg bg-white text-xs font-medium text-slate-700 flex items-center justify-center space-x-2 transition-all shadow-2xs group"
          >
            <span class="h-1.5 w-1.5 rounded-full bg-blue-600"></span>
            <span>Student Demo</span>
          </button>
          <button
            type="button"
            @click="quickFill('librarian')"
            class="py-2 px-3 border border-slate-200 hover:border-slate-300 rounded-lg bg-white text-xs font-medium text-slate-700 flex items-center justify-center space-x-2 transition-all shadow-2xs group"
          >
            <span class="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
            <span>Librarian Demo</span>
          </button>
        </div>

        <!-- Footer Link -->
        <p class="text-center text-xs font-normal text-slate-500 mt-5">
          Don't have an account?
          <router-link to="/register" class="font-semibold text-blue-600 hover:text-blue-700 hover:underline ml-1">Sign up for free</router-link>
        </p>
      </div>
    </div>

    <!-- Right Solid Blue Column (50% Desktop) -->
    <div class="hidden lg:flex lg:w-1/2 h-full bg-blue-600 p-10 lg:p-14 flex-col justify-center items-center text-white relative overflow-y-auto">
      <div class="max-w-md w-full my-auto">
        <!-- Headline -->
        <h2 class="text-2xl sm:text-3xl font-bold text-white leading-snug tracking-tight mb-3">
          Empowering Modern Libraries & Students
        </h2>

        <!-- Subtitle Paragraph -->
        <p class="text-xs sm:text-sm text-blue-100/90 font-normal leading-relaxed mb-6">
          SmartLib is an intelligent library management platform built to streamline seat bookings, digitise book catalogues, automate QR entrance attendance, and deliver real-time study analytics for students and administrators.
        </p>

        <!-- Bullet List with Checkmarks -->
        <div class="space-y-3 mb-8">
          <div class="flex items-center space-x-3">
            <div class="h-4.5 w-4.5 rounded-full bg-white/20 flex items-center justify-center text-white flex-shrink-0">
              <Check class="h-2.5 w-2.5 stroke-[3]" />
            </div>
            <span class="text-xs sm:text-sm font-medium text-white">Real-time floor seat map & desk reservations</span>
          </div>

          <div class="flex items-center space-x-3">
            <div class="h-4.5 w-4.5 rounded-full bg-white/20 flex items-center justify-center text-white flex-shrink-0">
              <Check class="h-2.5 w-2.5 stroke-[3]" />
            </div>
            <span class="text-xs sm:text-sm font-medium text-white">Touchless QR code entrance check-in</span>
          </div>

          <div class="flex items-center space-x-3">
            <div class="h-4.5 w-4.5 rounded-full bg-white/20 flex items-center justify-center text-white flex-shrink-0">
              <Check class="h-2.5 w-2.5 stroke-[3]" />
            </div>
            <span class="text-xs sm:text-sm font-medium text-white">Digitised catalogue search & book reservations</span>
          </div>

          <div class="flex items-center space-x-3">
            <div class="h-4.5 w-4.5 rounded-full bg-white/20 flex items-center justify-center text-white flex-shrink-0">
              <Check class="h-2.5 w-2.5 stroke-[3]" />
            </div>
            <span class="text-xs sm:text-sm font-medium text-white">Automated attendance logging & study analytics</span>
          </div>
        </div>

        <!-- Glass Testimonial Box -->
        <div class="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 shadow-md">
          <p class="text-xs italic font-normal text-white/95 leading-relaxed mb-3">
            "SmartLib has modernized our entire library workflow. Students can check seat availability in real time while administrators manage attendance effortlessly."
          </p>
          <div class="flex items-center space-x-2.5">
            <div class="h-8 w-8 rounded-full bg-white/20 border border-white/30 flex items-center justify-center font-bold text-white text-xs">
              SL
            </div>
            <div>
              <h4 class="text-xs font-semibold text-white leading-none">SmartLib Hub</h4>
              <p class="text-[11px] text-blue-200 font-normal mt-0.5">ICAP Library Management Platform</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useAuth } from '@/shared/composables/useAuth';
import { useSettings } from '@/shared/composables/useSettings';
import {
  BookOpen,
  Mail,
  Lock,
  Eye,
  EyeOff,
  AlertCircle,
  ArrowRight,
  Check
} from 'lucide-vue-next';

const router = useRouter();
const { login, fetchSettings } = useAuth();

const formData = reactive({ email: '', password: '', remember: false });
const errors = ref({
  email: '',
  password: '',
  general: ''
});
const isLoading = ref(false);
const showPassword = ref(false);

const clearError = (name: 'email' | 'password' | 'general') => {
  errors.value[name] = '';
};

const quickFill = (role: 'student' | 'librarian') => {
  formData.email = role === 'student' ? 'student1@smartlib.com' : 'librarian@smartlib.com';
  formData.password = 'password';
  clearError('email');
  clearError('password');
  clearError('general');
};

const validate = () => {
  const e: any = {};
  if (!formData.email) e.email = 'Email address is required';
  else if (!/\S+@\S+\.\S+/.test(formData.email)) e.email = 'Enter a valid email address';
  if (!formData.password) e.password = 'Password is required';
  else if (formData.password.length < 6) e.password = 'Minimum 6 characters required';
  return e;
};

const handleSubmit = async () => {
  errors.value = { email: '', password: '', general: '' };
  const ne = validate();
  if (Object.keys(ne).length > 0) {
    errors.value.email = ne.email || '';
    errors.value.password = ne.password || '';
    return;
  }
  isLoading.value = true;
  try {
    await login(formData.email, formData.password, formData.remember);
    router.push('/home');
  } catch (error: any) {
    const be = error.response?.data?.errors;
    if (be) {
      errors.value.email = be.email ? (Array.isArray(be.email) ? be.email[0] : be.email) : '';
      errors.value.password = be.password ? (Array.isArray(be.password) ? be.password[0] : be.password) : '';
      if (!errors.value.email && !errors.value.password) {
        errors.value.general = error.response?.data?.message || 'Invalid email or password.';
      }
    } else {
      errors.value.general = error.response?.data?.message || 'Invalid email or password credentials.';
    }
  } finally {
    isLoading.value = false;
  }
};

onMounted(() => {
  fetchSettings();
});
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
