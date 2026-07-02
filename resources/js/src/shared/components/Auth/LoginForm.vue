<template>
  <div class="min-h-screen flex font-sans bg-white text-slate-800">
    
    <!-- Left Panel: Form Container -->
    <div class="flex-1 flex flex-col justify-center py-12 px-6 sm:px-12 lg:flex-none lg:w-[480px] xl:w-[540px] bg-slate-50/30 border-r border-slate-100">
      <div class="mx-auto w-full max-w-md">
        
        <!-- Brand / Logo -->
        <div class="flex flex-col items-start text-left mb-10">
          <router-link to="/" class="flex items-center space-x-2.5 group">
            <div class="h-11 w-11 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
              <BookOpen class="h-6 w-6" />
            </div>
            <div class="flex flex-col">
              <span class="text-xl font-extrabold text-slate-900 leading-none tracking-tight">SmartLib</span>
              <span class="text-[10px] font-semibold text-blue-600 tracking-wider uppercase mt-0.5">ICAP Library Hub</span>
            </div>
          </router-link>
        </div>

        <!-- Header -->
        <div class="text-left mb-8">
          <h2 class="text-3xl font-black text-slate-900 tracking-tight">Welcome Back</h2>
          <p class="text-sm text-slate-500 mt-2 font-medium">
            Sign in to access your study desk and digital catalog account.
          </p>
        </div>

        <!-- Alert Notification -->
        <transition name="fade">
          <div v-if="errors.general" class="mb-6 p-4 bg-red-500/10 border border-red-200/60 rounded-2xl flex items-start space-x-3 text-red-800 animate-shake">
            <AlertCircle class="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
            <div>
              <h4 class="text-xs font-bold">Authentication Failed</h4>
              <p class="text-xs text-red-700/90 mt-1 leading-relaxed">{{ errors.general }}</p>
            </div>
          </div>
        </transition>

        <!-- Form -->
        <form class="space-y-5 text-left" @submit.prevent="handleSubmit">
          
          <!-- Email Input -->
          <div class="space-y-2">
            <label for="email" class="text-xs font-bold text-slate-500 uppercase tracking-wider">Email Address</label>
            <div class="relative">
              <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                <Mail class="h-4.5 w-4.5" />
              </div>
              <input 
                id="email" 
                name="email" 
                type="email" 
                autocomplete="email"
                v-model="formData.email"
                @input="clearError('email')"
                :class="[
                  'block w-full pl-11 pr-4 py-3.5 bg-white border rounded-2xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-4 focus:ring-blue-500/10 transition-all text-sm font-semibold',
                  errors.email ? 'border-red-400 focus:border-red-550' : 'border-slate-200 focus:border-blue-600'
                ]"
                placeholder="student@icap.org.pk"
              />
            </div>
            <p v-if="errors.email" class="text-[11px] font-semibold text-red-600 pl-1">{{ errors.email }}</p>
          </div>

          <!-- Password Input -->
          <div class="space-y-2">
            <div class="flex justify-between items-center">
              <label for="password" class="text-xs font-bold text-slate-500 uppercase tracking-wider">Password</label>
              <a href="#" class="text-xs font-bold text-blue-600 hover:text-blue-700 transition-colors">Forgot?</a>
            </div>
            <div class="relative">
              <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                <Lock class="h-4.5 w-4.5" />
              </div>
              <input 
                id="password" 
                name="password" 
                :type="showPassword ? 'text' : 'password'" 
                autocomplete="current-password"
                v-model="formData.password"
                @input="clearError('password')"
                :class="[
                  'block w-full pl-11 pr-11 py-3.5 bg-white border rounded-2xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-4 focus:ring-blue-500/10 transition-all text-sm font-semibold',
                  errors.password ? 'border-red-400 focus:border-red-550' : 'border-slate-200 focus:border-blue-600'
                ]"
                placeholder="••••••••"
              />
              <button 
                type="button" 
                @click="showPassword = !showPassword"
                class="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-slate-600 transition-colors"
              >
                <EyeOff v-if="showPassword" class="h-4.5 w-4.5" />
                <Eye v-else class="h-4.5 w-4.5" />
              </button>
            </div>
            <p v-if="errors.password" class="text-[11px] font-semibold text-red-600 pl-1">{{ errors.password }}</p>
          </div>

          <!-- Remember option -->
          <div class="flex items-center">
            <input 
              id="remember" 
              type="checkbox" 
              v-model="formData.remember"
              class="h-4.5 w-4.5 text-blue-600 border-slate-400 rounded focus:ring-blue-500/20 cursor-pointer"
            />
            <label for="remember" class="ml-2.5 block text-xs font-bold text-slate-600 cursor-pointer">
              Keep me signed in
            </label>
          </div>

          <!-- Submit Button -->
          <button 
            type="submit" 
            :disabled="isLoading"
            class="w-full py-4 rounded-2xl text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 active:scale-98 shadow-lg shadow-blue-500/15 hover:shadow-blue-500/25 transition-all flex items-center justify-center space-x-2 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            <span v-if="isLoading" class="flex items-center space-x-2">
              <svg class="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <span>Signing in...</span>
            </span>
            <span v-else>Sign In</span>
          </button>

          <!-- Register link -->
          <p class="text-xs font-semibold text-slate-500 text-center mt-6">
            Don't have an account? 
            <router-link to="/register" class="text-blue-600 font-bold hover:text-blue-700 transition-colors">Create Free Account</router-link>
          </p>

        </form>

        <!-- Demo Credentials Help -->
        <div class="mt-8 p-4 bg-slate-50 border border-slate-200/80 rounded-2xl text-left">
          <p class="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">Academic Demo Logins</p>
          <div class="grid grid-cols-2 gap-4 text-[11px] text-slate-600">
            <div>
              <p class="font-bold text-slate-800">Librarian Access</p>
              <p class="mt-0.5 text-slate-500 select-all">librarian1@smartlib.com</p>
            </div>
            <div>
              <p class="font-bold text-slate-800">Student Access</p>
              <p class="mt-0.5 text-slate-500 select-all">student1@smartlib.com</p>
            </div>
          </div>
          <div class="border-t border-slate-200/80 mt-3 pt-2.5 flex justify-between items-center text-[10px]">
            <span class="font-bold text-slate-500">Demo Password:</span>
            <span class="font-bold bg-blue-50 text-blue-600 border border-blue-200 px-2.5 py-0.5 rounded-full select-all">password</span>
          </div>
        </div>

      </div>
    </div>

    <!-- Right Panel: Visual Brand Panel -->
    <div class="hidden lg:flex lg:flex-1 bg-blue-600 relative overflow-hidden items-center justify-center p-12">
      <!-- Glow Gradients -->
      <div class="absolute inset-0 z-0">
        <div class="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-blue-500 rounded-full blur-3xl opacity-40"></div>
        <div class="absolute bottom-[-10%] right-[-10%] w-[65%] h-[65%] bg-blue-400 rounded-full blur-3xl opacity-30"></div>
      </div>

      <!-- Content Container -->
      <div class="relative z-10 max-w-md text-white text-left">
        <!-- Subtitle badge -->
        <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold bg-white/10 border border-white/15 text-blue-100 uppercase tracking-widest mb-8">
          <Sparkles class="h-3 w-3 text-blue-300 animate-pulse" />
          <span>Optimize Study Sessions</span>
        </div>

        <h1 class="text-4xl xl:text-5xl font-black leading-none tracking-tight mb-5">
          Elevate Your Academic Focus
        </h1>
        <p class="text-base text-blue-100/90 leading-relaxed font-medium mb-12">
          Reserve your preferred study desk, check resource catalogs, and track study milestones in a cohesive digital workspace.
        </p>

        <!-- Perspective Visual Mockup Card -->
        <div class="perspective-box relative w-full">
          <!-- Background shadow glow -->
          <div class="absolute -inset-2 bg-blue-300/30 rounded-3xl blur-2xl opacity-40"></div>
          
          <!-- Mock Card -->
          <div class="visual-mock-card-3d bg-white/95 backdrop-blur-md border border-white/20 rounded-3xl p-6 shadow-2xl text-slate-800 text-left">
            <div class="flex justify-between items-center border-b border-slate-100 pb-3.5 mb-4">
              <div class="flex items-center space-x-2">
                <div class="w-3 h-3 rounded-full bg-blue-600/20 flex items-center justify-center">
                  <div class="w-1.5 h-1.5 rounded-full bg-blue-600"></div>
                </div>
                <span class="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Desk Reservation</span>
              </div>
              <span class="text-[9px] font-extrabold bg-green-50 border border-green-200 text-green-600 px-2.5 py-0.5 rounded-full uppercase">Active</span>
            </div>

            <div class="space-y-3">
              <!-- Seat reservation details -->
              <div class="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100">
                <div class="flex items-center space-x-3">
                  <div class="h-8.5 w-8.5 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600">
                    <MapPin class="h-4.5 w-4.5" />
                  </div>
                  <div>
                    <p class="text-[10px] text-slate-400 font-bold uppercase tracking-wide">Reserved Desk</p>
                    <p class="text-xs font-bold text-slate-800 mt-0.5">Hall B • Desk 14</p>
                  </div>
                </div>
              </div>

              <!-- Time details -->
              <div class="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100">
                <div class="flex items-center space-x-3">
                  <div class="h-8.5 w-8.5 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600">
                    <Clock class="h-4.5 w-4.5" />
                  </div>
                  <div>
                    <p class="text-[10px] text-slate-400 font-bold uppercase tracking-wide">Remaining Session</p>
                    <p class="text-xs font-bold text-slate-800 mt-0.5">03 hours 42 minutes</p>
                  </div>
                </div>
              </div>
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
import { BookOpen, Mail, Lock, Eye, EyeOff, AlertCircle, Sparkles, MapPin, Clock } from 'lucide-vue-next';

const router = useRouter();
const { login, settings, fetchSettings } = useAuth();

const formData = reactive({
  email: '',
  password: '',
  remember: false,
});

const errors = reactive<{ email?: string; password?: string; general?: string }>({});
const isLoading = ref(false);
const showPassword = ref(false);

const clearError = (name: keyof typeof errors) => {
  errors[name] = undefined;
};

const validate = () => {
  const newErrors: any = {};

  if (!formData.email) {
    newErrors.email = 'Email address is required';
  } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
    newErrors.email = 'Enter a valid email address';
  }

  if (!formData.password) {
    newErrors.password = 'Password is required';
  } else if (formData.password.length < 6) {
    newErrors.password = 'Password must be at least 6 characters';
  }

  return newErrors;
};

const handleSubmit = async () => {
  const newErrors = validate();
  Object.assign(errors, { email: undefined, password: undefined, general: undefined }, newErrors);

  if (Object.keys(newErrors).length > 0) {
    return;
  }

  isLoading.value = true;

  try {
    await login(formData.email, formData.password, formData.remember);
    router.push('/home');
  } catch (error: any) {
    errors.general = error.response?.data?.message || 'The email or password you entered is incorrect. Please verify and try again.';
  } finally {
    isLoading.value = false;
  }
};

onMounted(() => {
  fetchSettings();
});
</script>

<style scoped>
/* 3D Visual Mockup inside login panel */
.perspective-box {
  perspective: 1000px;
}

.visual-mock-card-3d {
  transform: rotateY(-10deg) rotateX(6deg) rotateZ(-1deg);
  transform-style: preserve-3d;
  box-shadow: 
    -8px 12px 25px -4px rgba(0, 0, 0, 0.12),
    -18px 25px 45px -10px rgba(0, 0, 0, 0.18);
  transition: all 0.5s ease;
}

.visual-mock-card-3d:hover {
  transform: rotateY(-4deg) rotateX(3deg) rotateZ(0deg) translateY(-2px);
  box-shadow: 
    -4px 8px 15px -2px rgba(0, 0, 0, 0.08),
    -10px 15px 30px -6px rgba(0, 0, 0, 0.14);
}

@keyframes shake {
  0%, 100% { transform: translateX(0); }
  10%, 30%, 50%, 70%, 90% { transform: translateX(-3px); }
  20%, 40%, 60%, 80% { transform: translateX(3px); }
}

.animate-shake {
  animation: shake 0.4s cubic-bezier(.36,.07,.19,.97) both;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
