<template>
  <div class="min-h-screen flex font-sans bg-white">
    <!-- Left Side - Hero Section -->
    <div class="hidden lg:flex lg:flex-1 bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-900 relative overflow-hidden items-center justify-center p-12">
      <!-- Background glows -->
      <div class="absolute inset-0">
        <div class="absolute top-20 left-20 w-80 h-80 bg-blue-400 opacity-20 rounded-full blur-3xl animate-pulse"></div>
        <div class="absolute bottom-20 right-20 w-[450px] h-[450px] bg-sky-300 opacity-25 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      <!-- Content -->
      <div class="relative z-10 max-w-lg text-white">
        <router-link to="/" class="inline-block mb-12">
          <img :src="'/images/logo-white.png'" alt="SmartLib Logo" class="h-16 w-auto transform hover:scale-105 transition-transform duration-300 filter drop-shadow-sm" />
        </router-link>
        
        <h1 class="text-5xl font-black mb-6 leading-tight tracking-tight text-white">
          Join SmartLib<br />Today
        </h1>
        <p class="text-lg text-blue-100/90 mb-10 leading-relaxed">
          Start your journey to smarter studying with our intelligent library management system.
        </p>

        <!-- Benefits -->
        <div class="space-y-6">
          <div class="flex items-start space-x-4 bg-white/5 backdrop-blur-md p-4 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors duration-200">
            <div class="flex-shrink-0 w-12 h-12 bg-blue-500/20 flex items-center justify-center border border-blue-400/30 rounded-xl">
              <svg class="w-6 h-6 text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
              </svg>
            </div>
            <div>
              <h4 class="text-base font-bold text-white mb-1">7-Day Free Trial</h4>
              <p class="text-sm text-blue-100/80">Get started with full access for all new students</p>
            </div>
          </div>
          <div class="flex items-start space-x-4 bg-white/5 backdrop-blur-md p-4 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors duration-200">
            <div class="flex-shrink-0 w-12 h-12 bg-sky-500/20 flex items-center justify-center border border-sky-400/30 rounded-xl">
              <svg class="w-6 h-6 text-sky-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <div>
              <h4 class="text-base font-bold text-white mb-1">Track Your Progress</h4>
              <p class="text-sm text-blue-100/80">Monitor study progress & maintain streaks</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Right Side - Registration Form -->
    <div class="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50/20 py-12">
      <div class="max-w-md w-full space-y-8 bg-white/80 backdrop-blur-xl border border-slate-100 p-8 sm:p-10 rounded-3xl shadow-xl shadow-slate-100/50">
        <!-- Logo and Header -->
        <div class="text-center">
          <router-link to="/" class="inline-block lg:hidden">
            <img :src="'/images/logo-blue.png'" alt="SmartLib Logo" class="h-16 w-auto mx-auto mb-6 transform hover:scale-105 transition-transform duration-300 filter drop-shadow-sm" />
          </router-link>
          <h2 class="text-3xl font-extrabold text-slate-950 tracking-tight mb-2">
            Create Account
          </h2>
          <p class="text-sm text-slate-500">
            Fill in your details to get started
          </p>
        </div>

        <!-- Error Alert -->
        <div v-if="errors.general" class="bg-red-50 border-l-4 border-red-500 p-4 rounded-xl animate-shake">
          <div class="flex items-center">
            <svg class="w-5 h-5 text-red-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
            </svg>
            <p class="text-sm font-medium text-red-800">{{ errors.general }}</p>
          </div>
        </div>

        <!-- Registration Form -->
        <form class="space-y-6" @submit.prevent="handleSubmit">
          <div class="space-y-4">
            <!-- Name Field -->
            <div>
              <label for="name" class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                v-model="formData.name"
                @input="clearError('name')"
                :class="[
                  'block w-full px-4 py-3 bg-slate-50/50 border rounded-2xl placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 transition-all duration-200 text-slate-900',
                  errors.name ? 'border-red-300 focus:ring-red-500/20 focus:border-red-500' : 'border-slate-200 focus:ring-blue-600/20 focus:border-blue-600'
                ]"
                placeholder="John Doe"
              />
              <p v-if="errors.name" class="mt-1 text-xs font-medium text-red-600">{{ errors.name }}</p>
            </div>

            <!-- Email Field -->
            <div>
              <label for="email" class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                v-model="formData.email"
                @input="handleInput('email')"
                @blur="validateField('email')"
                :class="[
                  'block w-full px-4 py-3 bg-slate-50/50 border rounded-2xl placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 transition-all duration-200 text-slate-900',
                  errors.email ? 'border-red-300 focus:ring-red-500/20 focus:border-red-500' : 'border-slate-200 focus:ring-blue-600/20 focus:border-blue-600'
                ]"
                placeholder="you@example.com"
              />
              <p v-if="errors.email" class="mt-1 text-xs font-medium text-red-600">{{ errors.email }}</p>
            </div>

            <!-- Phone & CRN Row -->
            <div class="grid grid-cols-2 gap-4">
              <div>
                <label for="phone" class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Phone Number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  v-model="formData.phone"
                  @input="clearError('phone')"
                  :class="[
                    'block w-full px-4 py-3 bg-slate-50/50 border rounded-2xl placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 transition-all duration-200 text-slate-900',
                    errors.phone ? 'border-red-300 focus:ring-red-500/20 focus:border-red-500' : 'border-slate-200 focus:ring-blue-600/20 focus:border-blue-600'
                  ]"
                  placeholder="03001234567"
                />
                <p v-if="errors.phone" class="mt-1 text-xs font-medium text-red-600">{{ errors.phone }}</p>
              </div>

              <div>
                <label for="crn" class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  CRN
                </label>
                <input
                  id="crn"
                  name="crn"
                  type="number"
                  v-model="formData.crn"
                  @input="handleInput('crn')"
                  @blur="validateField('crn')"
                  :class="[
                    'block w-full px-4 py-3 bg-slate-50/50 border rounded-2xl placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 transition-all duration-200 text-slate-900',
                    errors.crn ? 'border-red-300 focus:ring-red-500/20 focus:border-red-500' : 'border-slate-200 focus:ring-blue-600/20 focus:border-blue-600'
                  ]"
                  placeholder="e.g. 123456"
                />
                <p v-if="errors.crn" class="mt-1 text-xs font-medium text-red-600">{{ errors.crn }}</p>
              </div>
            </div>

            <!-- CA Level & Gender -->
            <div class="grid grid-cols-2 gap-4">
              <div>
                <label for="ca_level" class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  CA Level
                </label>
                <select
                  id="ca_level"
                  name="ca_level"
                  v-model="formData.ca_level"
                  @change="clearError('ca_level')"
                  :class="[
                    'block w-full px-4 py-3 bg-slate-50/50 border rounded-2xl focus:bg-white focus:outline-none focus:ring-2 transition-all duration-200 text-slate-900',
                    errors.ca_level ? 'border-red-300 focus:ring-red-500/20 focus:border-red-500' : 'border-slate-200 focus:ring-blue-600/20 focus:border-blue-600'
                  ]"
                >
                  <option value="">Select Level</option>
                  <option value="PRC">PRC</option>
                  <option value="CAF">CAF</option>
                  <option value="Final">Final</option>
                </select>
                <p v-if="errors.ca_level" class="mt-1 text-xs font-medium text-red-600">{{ errors.ca_level }}</p>
              </div>

              <div>
                <label for="gender" class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Gender
                </label>
                <select
                  id="gender"
                  name="gender"
                  v-model="formData.gender"
                  @change="clearError('gender')"
                  :class="[
                    'block w-full px-4 py-3 bg-slate-50/50 border rounded-2xl focus:bg-white focus:outline-none focus:ring-2 transition-all duration-200 text-slate-900',
                    errors.gender ? 'border-red-300 focus:ring-red-500/20 focus:border-red-500' : 'border-slate-200 focus:ring-blue-600/20 focus:border-blue-600'
                  ]"
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
                <p v-if="errors.gender" class="mt-1 text-xs font-medium text-red-600">{{ errors.gender }}</p>
              </div>
            </div>

            <!-- Password Fields -->
            <div>
              <label for="password" class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Password
              </label>
              <div class="relative">
                <input
                  id="password"
                  name="password"
                  :type="showPassword ? 'text' : 'password'"
                  v-model="formData.password"
                  @input="clearError('password')"
                  :class="[
                    'block w-full px-4 py-3 pr-10 bg-slate-50/50 border rounded-2xl placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 transition-all duration-200 text-slate-900',
                    errors.password ? 'border-red-300 focus:ring-red-500/20 focus:border-red-500' : 'border-slate-200 focus:ring-blue-600/20 focus:border-blue-600'
                  ]"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  @click="showPassword = !showPassword"
                  class="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600"
                >
                  <svg v-if="showPassword" class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268-2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                  </svg>
                  <svg v-else class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </button>
              </div>
              <p v-if="errors.password" class="mt-1 text-xs font-medium text-red-600">{{ errors.password }}</p>
            </div>

            <div>
              <label for="password_confirmation" class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Confirm Password
              </label>
              <div class="relative">
                <input
                  id="password_confirmation"
                  name="password_confirmation"
                  :type="showConfirmPassword ? 'text' : 'password'"
                  v-model="formData.password_confirmation"
                  @input="clearError('password_confirmation')"
                  :class="[
                    'block w-full px-4 py-3 pr-10 bg-slate-50/50 border rounded-2xl placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 transition-all duration-200 text-slate-900',
                    errors.password_confirmation ? 'border-red-300 focus:ring-red-500/20 focus:border-red-500' : 'border-slate-200 focus:ring-blue-600/20 focus:border-blue-600'
                  ]"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  @click="showConfirmPassword = !showConfirmPassword"
                  class="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600"
                >
                  <svg v-if="showConfirmPassword" class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268-2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                  </svg>
                  <svg v-else class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268-2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </button>
              </div>
              <p v-if="errors.password_confirmation" class="mt-1 text-xs font-medium text-red-600">{{ errors.password_confirmation }}</p>
            </div>

            <!-- Terms & Conditions -->
            <div class="flex items-start">
              <input
                id="terms"
                name="terms"
                type="checkbox"
                v-model="formData.terms"
                @change="clearError('terms')"
                class="h-4 w-4 text-blue-600 focus:ring-blue-600/30 border-slate-300 rounded mt-1 cursor-pointer transition-colors"
              />
              <label for="terms" class="ml-2 block text-sm text-slate-700 cursor-pointer font-medium">
                I agree to the
                <a href="#" class="font-semibold text-blue-600 hover:text-blue-700 transition-colors">Terms</a>
                and
                <a href="#" class="font-semibold text-blue-600 hover:text-blue-700 transition-colors">Privacy Policy</a>
              </label>
            </div>
            <p v-if="errors.terms" class="text-xs font-medium text-red-600">{{ errors.terms }}</p>
          </div>

          <!-- Submit Button -->
          <button
            type="submit"
            :disabled="isLoading"
            class="group w-full flex justify-center py-3 px-4 border border-transparent text-sm font-bold rounded-2xl text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-500/20 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-blue-500/10 hover:shadow-blue-500/20 transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-150"
          >
            <div v-if="isLoading" class="flex items-center">
              <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Creating Account...
            </div>
            <span v-else>Create Account</span>
          </button>

          <!-- Sign In Link -->
          <div class="text-center">
            <p class="text-sm text-slate-600 font-medium">
              Already have an account?
              <router-link to="/login" class="font-bold text-blue-600 hover:text-blue-700 transition-colors">
                Sign in
              </router-link>
            </p>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useAuth } from '@/shared/composables/useAuth';

const router = useRouter();
const { register, checkUniqueness } = useAuth();

const formData = reactive({
  name: '',
  email: '',
  phone: '',
  crn: '',
  gender: '',
  ca_level: '',
  password: '',
  password_confirmation: '',
  otp: '',
  terms: false,
  plan_id: null as number | null,
});

onMounted(() => {
  const planId = router.currentRoute.value.query.plan_id;
  if (planId) {
    formData.plan_id = Number(planId);
  }
});

const errors = reactive<any>({
  name: undefined,
  email: undefined,
  phone: undefined,
  crn: undefined,
  gender: undefined,
  ca_level: undefined,
  password: undefined,
  password_confirmation: undefined,
  terms: undefined,
  general: undefined
});
const isLoading = ref(false);
const showPassword = ref(false);
const showConfirmPassword = ref(false);

const clearError = (name: string) => {
  errors[name] = undefined;
};

let debounceTimer: any = null;
const handleInput = (field: string) => {
  clearError(field);
  
  if (field === 'email' || field === 'crn') {
    if (debounceTimer) clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      validateField(field as 'email' | 'crn');
    }, 600);
  }
};

const validateField = async (field: 'email' | 'crn') => {
  const value = formData[field];
  if (!value) return;

  // Basic client-side validation first
  if (field === 'email' && !/\S+@\S+\.\S+/.test(value)) {
    errors.email = 'Email is invalid';
    return;
  }
  if (field === 'crn' && !/^\d+$/.test(value)) {
    errors.crn = 'CRN must be a valid number';
    return;
  }

  try {
    const response = await checkUniqueness(field, String(value));
    console.log(`Uniqueness check for ${field}:`, response);
    if (response.exists) {
      errors[field] = response.message;
    } else {
      errors[field] = undefined;
    }
  } catch (error) {
    console.error(`Error validating ${field}:`, error);
  }
};

const validate = () => {
  const newErrors: any = {};

  if (!formData.name) newErrors.name = 'Name is required';
  if (!formData.email) {
    newErrors.email = 'Email is required';
  } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
    newErrors.email = 'Email is invalid';
  }
  if (!formData.phone) {
    newErrors.phone = 'Phone number is required';
  } else if (!/^03\d{9}$/.test(formData.phone)) {
    newErrors.phone = 'Phone must be in format 03XXXXXXXXX';
  }
  if (!formData.crn) {
    newErrors.crn = 'CRN is required';
  } else if (!/^\d+$/.test(formData.crn)) {
    newErrors.crn = 'CRN must be a valid number';
  }
  if (!formData.ca_level) newErrors.ca_level = 'CA Level is required';
  if (!formData.gender) newErrors.gender = 'Gender is required';
  if (!formData.password) {
    newErrors.password = 'Password is required';
  } else if (formData.password.length < 8) {
    newErrors.password = 'Password must be at least 8 characters';
  }
  if (formData.password !== formData.password_confirmation) {
    newErrors.password_confirmation = 'Passwords do not match';
  }
  if (!formData.terms) {
    newErrors.terms = 'You must accept the terms and conditions';
  }

  return newErrors;
};

const handleSubmit = async () => {
  // Clear all previous errors
  Object.keys(errors).forEach(key => errors[key] = undefined);
  
  const newErrors = validate();
  Object.assign(errors, newErrors);
  
  if (Object.keys(newErrors).length > 0) {
    // Scroll to top to ensure errors are visible
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }

  isLoading.value = true;

  try {
    // We are skipping OTP verification for now as per request
    // Just passing a dummy OTP since backend still requires it
    const registrationData = { ...formData, otp: '0000' };
    await register(registrationData);
    await router.push('/home');
  } catch (error: any) {
    console.error('Registration error object:', error);
    
    if (error.response?.data) {
      console.log('Error Response Data:', error.response.data);
    }

    if (error.response?.data?.errors) {
      const backendErrors = error.response.data.errors;
      let hasFieldErrors = false;

      Object.keys(backendErrors).forEach(key => {
        const msg = Array.isArray(backendErrors[key]) ? backendErrors[key][0] : backendErrors[key];
        
        // Check if the key exists in our reactive errors object
        if (Object.prototype.hasOwnProperty.call(errors, key)) {
          console.log(`Setting error for field ${key}:`, msg);
          errors[key] = msg;
          hasFieldErrors = true;
        } else {
          console.log(`Field ${key} not found in errors object, adding to general`);
          errors.general = errors.general ? `${errors.general} ${msg}` : msg;
        }
      });
      
      if (!hasFieldErrors && !errors.general) {
        errors.general = error.response.data.message || 'Validation failed';
      }
      
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      errors.general = error.response?.data?.message || 'Registration failed. Please try again.';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  } finally {
    isLoading.value = false;
  }
};
</script>

<style scoped>
@keyframes shake {
  0%, 100% { transform: translateX(0); }
  10%, 30%, 50%, 70%, 90% { transform: translateX(-4px); }
  20%, 40%, 60%, 80% { transform: translateX(4px); }
}

.animate-shake {
  animation: shake 0.5s cubic-bezier(.36,.07,.19,.97) both;
}
</style>
