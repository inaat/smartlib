<template>
  <div class="h-screen w-full flex bg-white font-sans antialiased text-slate-900 overflow-hidden">
    <!-- Left Column (50% Desktop) -->
    <div class="w-full lg:w-1/2 h-full flex flex-col justify-center items-center px-6 sm:px-10 lg:px-14 py-6 overflow-y-auto bg-white">
      <div class="w-full max-w-sm sm:max-w-md lg:max-w-lg my-auto">
        <!-- Logo Header -->
        <router-link to="/" class="inline-flex items-center space-x-2 mb-5 group">
          <div class="h-8 w-8 rounded-lg bg-blue-600 flex items-center justify-center text-white shadow-sm group-hover:scale-105 transition-transform">
            <BookOpen class="h-4.5 w-4.5" />
          </div>
          <span class="text-lg font-bold text-slate-900 tracking-tight">{{ appName }}</span>
        </router-link>

        <!-- Welcome Title & Subtitle -->
        <div class="mb-4">
          <h1 class="text-2xl font-bold text-slate-900 tracking-tight mb-1">Create an account</h1>
          <p class="text-slate-500 font-normal text-xs">Join {{ appName }} to start reserving your seats and books</p>
        </div>

        <!-- Registration Disabled Alert -->
        <transition name="fade">
          <div v-if="!allowUserRegistration" class="mb-4 p-3 rounded-lg bg-amber-50 border border-amber-200 flex items-start space-x-2.5 text-left">
            <AlertCircle class="h-4 w-4 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <h5 class="text-[11px] font-semibold text-amber-800 uppercase tracking-wide">Registration Disabled</h5>
              <p class="text-xs text-amber-700 mt-0.5 leading-relaxed">Student self-registration is currently disabled by system administrator.</p>
            </div>
          </div>
        </transition>

        <!-- Error Alert Banner -->
        <transition name="fade">
          <div v-if="errors.general" class="mb-4 p-3 rounded-lg bg-rose-50 border border-rose-200 flex items-start space-x-2.5">
            <AlertCircle class="h-4 w-4 text-rose-600 flex-shrink-0 mt-0.5" />
            <div>
              <h5 class="text-[11px] font-semibold text-rose-800 uppercase tracking-wide">Registration Failed</h5>
              <p class="text-xs text-rose-700 mt-0.5 leading-relaxed">{{ errors.general }}</p>
            </div>
          </div>
        </transition>

        <!-- Register Form -->
        <form @submit.prevent="handleSubmit" class="space-y-3">
          <!-- Full Name -->
          <div>
            <label for="name" class="block text-xs font-semibold text-slate-700 mb-1">Full Name</label>
            <div class="relative">
              <User class="absolute left-3 top-2.5 h-4 w-4 text-slate-400 pointer-events-none" />
              <input
                id="name"
                type="text"
                v-model="formData.name"
                @input="clearError('name')"
                :class="[
                  'w-full pl-9 pr-3.5 py-2 rounded-lg border bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-500/10 text-xs font-normal transition-all',
                  errors.name ? 'border-rose-400 bg-rose-50/20' : 'border-slate-200'
                ]"
                placeholder="e.g. Muhammad Ali"
              />
            </div>
            <p v-if="errors.name" class="text-[11px] font-medium text-rose-600 mt-0.5 pl-1">{{ errors.name }}</p>
          </div>

          <!-- Email Address -->
          <div>
            <label for="reg-email" class="block text-xs font-semibold text-slate-700 mb-1">Email address</label>
            <div class="relative">
              <Mail class="absolute left-3 top-2.5 h-4 w-4 text-slate-400 pointer-events-none" />
              <input
                id="reg-email"
                type="email"
                v-model="formData.email"
                @input="handleInput('email')"
                @blur="validateField('email')"
                :class="[
                  'w-full pl-9 pr-9 py-2 rounded-lg border bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-500/10 text-xs font-normal transition-all',
                  errors.email ? 'border-rose-400 bg-rose-50/20' : 'border-slate-200'
                ]"
                placeholder="you@example.com"
              />
              <Loader2 v-if="validatingField === 'email'" class="h-3.5 w-3.5 text-blue-600 animate-spin absolute right-3 top-2.5" />
            </div>
            <p v-if="errors.email" class="text-[11px] font-medium text-rose-600 mt-0.5 pl-1">{{ errors.email }}</p>
          </div>

          <!-- Row 1: Phone & CRN -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label for="phone" class="block text-xs font-semibold text-slate-700 mb-1">Phone Number</label>
              <div class="relative">
                <Phone class="absolute left-3 top-2.5 h-4 w-4 text-slate-400 pointer-events-none" />
                <input
                  id="phone"
                  type="tel"
                  v-model="formData.phone"
                  @input="clearError('phone')"
                  :class="[
                    'w-full pl-9 pr-3.5 py-2 rounded-lg border bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-500/10 text-xs font-normal transition-all',
                    errors.phone ? 'border-rose-400 bg-rose-50/20' : 'border-slate-200'
                  ]"
                  placeholder="03001234567"
                />
              </div>
              <p v-if="errors.phone" class="text-[11px] font-medium text-rose-600 mt-0.5 pl-1">{{ errors.phone }}</p>
            </div>

            <div>
              <label for="crn" class="block text-xs font-semibold text-slate-700 mb-1">ICAP CRN Number</label>
              <div class="relative">
                <BadgeCheck class="absolute left-3 top-2.5 h-4 w-4 text-slate-400 pointer-events-none" />
                <input
                  id="crn"
                  type="number"
                  v-model="formData.crn"
                  @input="handleInput('crn')"
                  @blur="validateField('crn')"
                  :class="[
                    'w-full pl-9 pr-9 py-2 rounded-lg border bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-500/10 text-xs font-normal transition-all',
                    errors.crn ? 'border-rose-400 bg-rose-50/20' : 'border-slate-200'
                  ]"
                  placeholder="e.g. 123456"
                />
                <Loader2 v-if="validatingField === 'crn'" class="h-3.5 w-3.5 text-blue-600 animate-spin absolute right-3 top-2.5" />
              </div>
              <p v-if="errors.crn" class="text-[11px] font-medium text-rose-600 mt-0.5 pl-1">{{ errors.crn }}</p>
            </div>
          </div>

          <!-- Row 2: CA Level & Gender -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label for="ca_level" class="block text-xs font-semibold text-slate-700 mb-1">CA Level</label>
              <div class="relative">
                <GraduationCap class="absolute left-3 top-2.5 h-4 w-4 text-slate-400 pointer-events-none" />
                <select
                  id="ca_level"
                  v-model="formData.ca_level"
                  @change="clearError('ca_level')"
                  :class="[
                    'w-full pl-9 pr-3.5 py-2 rounded-lg border bg-white text-slate-900 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-500/10 text-xs font-normal transition-all cursor-pointer',
                    errors.ca_level ? 'border-rose-400 bg-rose-50/20' : 'border-slate-200'
                  ]"
                >
                  <option value="" disabled selected>Select Level</option>
                  <option value="PRC">PRC</option>
                  <option value="CAF">CAF</option>
                  <option value="Final">Final</option>
                </select>
              </div>
              <p v-if="errors.ca_level" class="text-[11px] font-medium text-rose-600 mt-0.5 pl-1">{{ errors.ca_level }}</p>
            </div>

            <div>
              <label for="gender" class="block text-xs font-semibold text-slate-700 mb-1">Gender</label>
              <div class="relative">
                <UserCheck class="absolute left-3 top-2.5 h-4 w-4 text-slate-400 pointer-events-none" />
                <select
                  id="gender"
                  v-model="formData.gender"
                  @change="clearError('gender')"
                  :class="[
                    'w-full pl-9 pr-3.5 py-2 rounded-lg border bg-white text-slate-900 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-500/10 text-xs font-normal transition-all cursor-pointer',
                    errors.gender ? 'border-rose-400 bg-rose-50/20' : 'border-slate-200'
                  ]"
                >
                  <option value="" disabled selected>Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
              <p v-if="errors.gender" class="text-[11px] font-medium text-rose-600 mt-0.5 pl-1">{{ errors.gender }}</p>
            </div>
          </div>

          <!-- Row 3: Password & Confirmation -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label for="reg-password" class="block text-xs font-semibold text-slate-700 mb-1">Password</label>
              <div class="relative">
                <Lock class="absolute left-3 top-2.5 h-4 w-4 text-slate-400 pointer-events-none" />
                <input
                  id="reg-password"
                  :type="showPassword ? 'text' : 'password'"
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
              <p v-if="errors.password" class="text-[11px] font-medium text-rose-600 mt-0.5 pl-1">{{ errors.password }}</p>
            </div>

            <div>
              <label for="password_confirmation" class="block text-xs font-semibold text-slate-700 mb-1">Confirm Password</label>
              <div class="relative">
                <Lock class="absolute left-3 top-2.5 h-4 w-4 text-slate-400 pointer-events-none" />
                <input
                  id="password_confirmation"
                  :type="showConfirmPassword ? 'text' : 'password'"
                  v-model="formData.password_confirmation"
                  @input="clearError('password_confirmation')"
                  :class="[
                    'w-full pl-9 pr-9 py-2 rounded-lg border bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-500/10 text-xs font-normal transition-all',
                    errors.password_confirmation ? 'border-rose-400 bg-rose-50/20' : 'border-slate-200'
                  ]"
                  placeholder="••••••••"
                />
                <button type="button" @click="showConfirmPassword = !showConfirmPassword" class="absolute right-3 top-2.5 text-slate-400 hover:text-slate-600 transition-colors">
                  <EyeOff v-if="showConfirmPassword" class="h-4 w-4" />
                  <Eye v-else class="h-4 w-4" />
                </button>
              </div>
              <p v-if="errors.password_confirmation" class="text-[11px] font-medium text-rose-600 mt-0.5 pl-1">{{ errors.password_confirmation }}</p>
            </div>
          </div>

          <!-- Terms Agreement Checkbox -->
          <div class="flex items-start space-x-2 pt-0.5">
            <input
              id="terms"
              type="checkbox"
              v-model="formData.terms"
              @change="clearError('terms')"
              class="h-3.5 w-3.5 rounded border-slate-300 text-blue-600 focus:ring-blue-500 cursor-pointer mt-0.5"
            />
            <label for="terms" class="text-xs font-normal text-slate-600 cursor-pointer select-none leading-normal">
              I agree to the <a href="#" class="font-semibold text-blue-600 hover:underline">Terms of Service</a> & <a href="#" class="font-semibold text-blue-600 hover:underline">Privacy Policy</a>
            </label>
          </div>
          <p v-if="errors.terms" class="text-[11px] font-medium text-rose-600 pl-1">{{ errors.terms }}</p>

          <!-- Submit Button -->
          <button
            type="submit"
            :disabled="isLoading || !allowUserRegistration"
            class="w-full py-2.5 px-4 rounded-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 active:scale-[0.99] shadow-sm transition-all text-xs flex items-center justify-center space-x-1.5 mt-1 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
          >
            <span v-if="isLoading" class="flex items-center space-x-1.5">
              <svg class="animate-spin h-3.5 w-3.5 text-white" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <span>Creating account...</span>
            </span>
            <span v-else class="flex items-center space-x-1.5">
              <span>Create account</span>
              <ArrowRight class="h-3.5 w-3.5" />
            </span>
          </button>

          <p v-if="requireStudentApproval" class="text-[11px] font-medium text-amber-700 text-center pt-1">
            Note: Admin approval is required for newly registered student accounts.
          </p>

          <!-- Footer Link -->
          <p class="text-center text-xs font-normal text-slate-500 pt-1">
            Already have an account?
            <router-link to="/login" class="font-semibold text-blue-600 hover:text-blue-700 hover:underline ml-1">Sign in</router-link>
          </p>
        </form>
      </div>
    </div>

    <!-- Right Solid Blue Column (50% Desktop) -->
    <div class="hidden lg:flex lg:w-1/2 h-full bg-blue-600 p-10 lg:p-14 flex-col justify-center items-center text-white relative overflow-y-auto">
      <div class="max-w-md w-full my-auto">
        <!-- Headline -->
        <h2 class="text-2xl sm:text-3xl font-bold text-white leading-snug tracking-tight mb-3">
          Unlock smart study spaces
        </h2>

        <!-- Subtitle Paragraph -->
        <p class="text-xs sm:text-sm text-blue-100/90 font-normal leading-relaxed mb-6">
          Experience seamless seat booking, instant QR entrance check-in, and automated study analytics designed specifically for ICAP students and institutions.
        </p>

        <!-- Bullet List with Checkmarks -->
        <div class="space-y-3 mb-8">
          <div class="flex items-center space-x-3">
            <div class="h-4.5 w-4.5 rounded-full bg-white/20 flex items-center justify-center text-white flex-shrink-0">
              <Check class="h-2.5 w-2.5 stroke-[3]" />
            </div>
            <span class="text-xs sm:text-sm font-medium text-white">Instant seat reservation & floor map</span>
          </div>

          <div class="flex items-center space-x-3">
            <div class="h-4.5 w-4.5 rounded-full bg-white/20 flex items-center justify-center text-white flex-shrink-0">
              <Check class="h-2.5 w-2.5 stroke-[3]" />
            </div>
            <span class="text-xs sm:text-sm font-medium text-white">Touchless QR entrance check-in system</span>
          </div>

          <div class="flex items-center space-x-3">
            <div class="h-4.5 w-4.5 rounded-full bg-white/20 flex items-center justify-center text-white flex-shrink-0">
              <Check class="h-2.5 w-2.5 stroke-[3]" />
            </div>
            <span class="text-xs sm:text-sm font-medium text-white">Digitised book borrowing & reserve tracking</span>
          </div>

          <div class="flex items-center space-x-3">
            <div class="h-4.5 w-4.5 rounded-full bg-white/20 flex items-center justify-center text-white flex-shrink-0">
              <Check class="h-2.5 w-2.5 stroke-[3]" />
            </div>
            <span class="text-xs sm:text-sm font-medium text-white">Personal study analytics & reward badges</span>
          </div>
        </div>

        <!-- Glass Testimonial Box -->
        <div class="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 shadow-md">
          <p class="text-xs italic font-normal text-white/95 leading-relaxed mb-3">
            "Creating a SmartLib account made my daily study routine so much easier. I can book my desk before even reaching the library."
          </p>
          <div class="flex items-center space-x-2.5">
            <div class="h-8 w-8 rounded-full bg-white/20 border border-white/30 flex items-center justify-center font-bold text-white text-xs">
              SL
            </div>
            <div>
              <h4 class="text-xs font-semibold text-white leading-none">SmartLib Student Community</h4>
              <p class="text-[11px] text-blue-200 font-normal mt-0.5">ICAP Digital Learning Hub</p>
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
  User,
  Mail,
  Lock,
  Phone,
  BadgeCheck,
  GraduationCap,
  UserCheck,
  Eye,
  EyeOff,
  AlertCircle,
  ArrowRight,
  Check,
  Loader2
} from 'lucide-vue-next';

const router = useRouter();
const { register, checkUniqueness } = useAuth();
const { appName, allowUserRegistration, requireStudentApproval, fetchPublicSettings } = useSettings();

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
  plan_id: null as number | null
});

onMounted(() => {
  fetchPublicSettings();
  const planId = router.currentRoute.value.query.plan_id;
  if (planId) formData.plan_id = Number(planId);
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
const validatingField = ref<'email' | 'crn' | null>(null);

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
  if (field === 'email' && !/\S+@\S+\.\S+/.test(value)) {
    errors.email = 'Enter a valid email address';
    return;
  }
  if (field === 'crn' && !/^\d+$/.test(value)) {
    errors.crn = 'CRN must contain numbers only';
    return;
  }

  validatingField.value = field;
  try {
    const response = await checkUniqueness(field, String(value));
    errors[field] = response.exists ? response.message : undefined;
  } catch (error) {
    console.error(`Error validating ${field}:`, error);
  } finally {
    validatingField.value = null;
  }
};

const validate = () => {
  const e: any = {};
  if (!formData.name) e.name = 'Full name is required';
  if (!formData.email) e.email = 'Email address is required';
  else if (!/\S+@\S+\.\S+/.test(formData.email)) e.email = 'Enter a valid email address';
  if (!formData.phone) e.phone = 'Phone number is required';
  else if (!/^03\d{9}$/.test(formData.phone)) e.phone = 'Format: 03XXXXXXXXX (11 digits)';
  if (!formData.crn) e.crn = 'ICAP CRN number is required';
  else if (!/^\d+$/.test(formData.crn)) e.crn = 'Must contain numbers only';
  if (!formData.ca_level) e.ca_level = 'Required';
  if (!formData.gender) e.gender = 'Required';
  if (!formData.password) e.password = 'Password is required';
  else if (formData.password.length < 8) e.password = 'Min 8 characters required';
  if (formData.password !== formData.password_confirmation) e.password_confirmation = 'Passwords do not match';
  if (!formData.terms) e.terms = 'You must accept terms & conditions';
  return e;
};

const handleSubmit = async () => {
  Object.keys(errors).forEach(key => (errors[key] = undefined));
  const ne = validate();
  Object.assign(errors, ne);
  if (Object.keys(ne).length > 0) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }

  isLoading.value = true;
  try {
    await register({ ...formData, otp: '0000' });
    await router.push('/home');
  } catch (error: any) {
    if (error.response?.data?.errors) {
      const be = error.response.data.errors;
      Object.keys(be).forEach(key => {
        const msg = Array.isArray(be[key]) ? be[key][0] : be[key];
        if (Object.prototype.hasOwnProperty.call(errors, key)) errors[key] = msg;
        else errors.general = errors.general ? `${errors.general} ${msg}` : msg;
      });
    } else {
      errors.general = error.response?.data?.message || 'Registration failed. Please check your details.';
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } finally {
    isLoading.value = false;
  }
};
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
