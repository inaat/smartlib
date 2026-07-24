<template>
  <div class="auth-page">
    <!-- Left Brand Panel -->
    <div class="auth-brand-panel">
      <div class="brand-shape brand-shape--1"></div>
      <div class="brand-shape brand-shape--2"></div>
      <div class="brand-shape brand-shape--3"></div>

      <div class="brand-content">
        <router-link to="/" class="brand-logo-link">
          <div class="brand-logo-icon">
            <BookOpen class="h-6 w-6" />
          </div>
          <div class="brand-logo-text">
            <span class="brand-logo-name">SmartLib</span>
            <span class="brand-logo-sub">Library Hub</span>
          </div>
        </router-link>

        <p class="brand-tagline">Join SmartLib Today</p>
        <p class="brand-description">
          Create your account to unlock real-time seat reservations, browse the digital book catalogue, check library availability, and manage your student dashboard with ease.
        </p>

        <div class="brand-capabilities">
          <div class="brand-cap-item">
            <div class="brand-cap-dot"></div>
            <span>Real-time seat maps with instant QR check-in</span>
          </div>
          <div class="brand-cap-item">
            <div class="brand-cap-dot"></div>
            <span>Digitised book catalogue and reservations</span>
          </div>
          <div class="brand-cap-item">
            <div class="brand-cap-dot"></div>
            <span>Automated attendance and study analytics</span>
          </div>
          <div class="brand-cap-item">
            <div class="brand-cap-dot"></div>
            <span>Subscription plans and payment management</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Right Form Panel -->
    <div class="auth-form-panel">
      <div class="auth-form-wrapper">
        <router-link to="/" class="mobile-logo-link">
          <img :src="'/images/logo-blue.png'" alt="SmartLib" class="mobile-logo" />
        </router-link>

        <div class="form-header">
          <h2 class="form-title">Join SmartLib Today</h2>
          <p class="form-subtitle">Create your account and start your learning journey</p>
        </div>

        <!-- Error Alert -->
        <div v-if="errors.general" class="auth-alert">
          <AlertCircle class="auth-alert-icon" />
          <p class="auth-alert-msg">{{ errors.general }}</p>
        </div>

        <form class="auth-form" @submit.prevent="handleSubmit">
          <!-- Full Name -->
          <div class="field-group">
            <label for="name" class="field-label">Full Name</label>
            <div class="field-input-wrap">
              <User class="field-icon" />
              <input id="name" type="text" v-model="formData.name" @input="clearError('name')"
                :class="['field-input', errors.name && 'field-input--error']" placeholder="John Doe" />
            </div>
            <p v-if="errors.name" class="field-error">{{ errors.name }}</p>
          </div>

          <!-- Email -->
          <div class="field-group">
            <label for="reg-email" class="field-label">Email Address</label>
            <div class="field-input-wrap">
              <Mail class="field-icon" />
              <input id="reg-email" type="email" v-model="formData.email"
                @input="handleInput('email')" @blur="validateField('email')"
                :class="['field-input', errors.email && 'field-input--error']" placeholder="you@example.com" />
            </div>
            <p v-if="errors.email" class="field-error">{{ errors.email }}</p>
          </div>

          <!-- Phone & CRN -->
          <div class="field-row">
            <div class="field-group">
              <label for="phone" class="field-label">Phone</label>
              <input id="phone" type="tel" v-model="formData.phone" @input="clearError('phone')"
                :class="['field-input field-input--plain', errors.phone && 'field-input--error']" placeholder="03001234567" />
              <p v-if="errors.phone" class="field-error">{{ errors.phone }}</p>
            </div>
            <div class="field-group">
              <label for="crn" class="field-label">CRN</label>
              <input id="crn" type="number" v-model="formData.crn"
                @input="handleInput('crn')" @blur="validateField('crn')"
                :class="['field-input field-input--plain', errors.crn && 'field-input--error']" placeholder="e.g. 123456" />
              <p v-if="errors.crn" class="field-error">{{ errors.crn }}</p>
            </div>
          </div>

          <!-- CA Level & Gender -->
          <div class="field-row">
            <div class="field-group">
              <label for="ca_level" class="field-label">CA Level</label>
              <select id="ca_level" v-model="formData.ca_level" @change="clearError('ca_level')"
                :class="['field-input field-input--plain', errors.ca_level && 'field-input--error']">
                <option value="">Select Level</option>
                <option value="PRC">PRC</option>
                <option value="CAF">CAF</option>
                <option value="Final">Final</option>
              </select>
              <p v-if="errors.ca_level" class="field-error">{{ errors.ca_level }}</p>
            </div>
            <div class="field-group">
              <label for="gender" class="field-label">Gender</label>
              <select id="gender" v-model="formData.gender" @change="clearError('gender')"
                :class="['field-input field-input--plain', errors.gender && 'field-input--error']">
                <option value="">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
              <p v-if="errors.gender" class="field-error">{{ errors.gender }}</p>
            </div>
          </div>

          <!-- Password & Confirm -->
          <div class="field-row">
            <div class="field-group">
              <label for="reg-password" class="field-label">Password</label>
              <div class="field-input-wrap">
                <input id="reg-password" :type="showPassword ? 'text' : 'password'"
                  v-model="formData.password" @input="clearError('password')"
                  :class="['field-input field-input--plain field-input--pr', errors.password && 'field-input--error']"
                  placeholder="••••••••" />
                <button type="button" @click="showPassword = !showPassword" class="field-toggle">
                  <EyeOff v-if="showPassword" class="h-4 w-4" />
                  <Eye v-else class="h-4 w-4" />
                </button>
              </div>
              <p v-if="errors.password" class="field-error">{{ errors.password }}</p>
            </div>
            <div class="field-group">
              <label for="password_confirmation" class="field-label">Confirm</label>
              <div class="field-input-wrap">
                <input id="password_confirmation" :type="showConfirmPassword ? 'text' : 'password'"
                  v-model="formData.password_confirmation" @input="clearError('password_confirmation')"
                  :class="['field-input field-input--plain field-input--pr', errors.password_confirmation && 'field-input--error']"
                  placeholder="••••••••" />
                <button type="button" @click="showConfirmPassword = !showConfirmPassword" class="field-toggle">
                  <EyeOff v-if="showConfirmPassword" class="h-4 w-4" />
                  <Eye v-else class="h-4 w-4" />
                </button>
              </div>
              <p v-if="errors.password_confirmation" class="field-error">{{ errors.password_confirmation }}</p>
            </div>
          </div>

          <!-- Terms -->
          <div class="field-checkbox-row">
            <input id="terms" type="checkbox" v-model="formData.terms" @change="clearError('terms')" class="field-checkbox" />
            <label for="terms" class="field-checkbox-label">
              I agree to the <a href="#">Terms</a> and <a href="#">Privacy Policy</a>
            </label>
          </div>
          <p v-if="errors.terms" class="field-error" style="margin-top:-0.5rem">{{ errors.terms }}</p>

          <!-- Submit -->
          <button type="submit" :disabled="isLoading" class="auth-submit">
            <span v-if="isLoading" class="auth-submit-loading">
              <svg class="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <span>Creating account…</span>
            </span>
            <span v-else>Create Account</span>
          </button>

          <p class="auth-footer-link">
            Already have an account?
            <router-link to="/login">Sign in</router-link>
          </p>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useAuth } from '@/shared/composables/useAuth';
import { BookOpen, User, Mail, Eye, EyeOff, AlertCircle } from 'lucide-vue-next';

const router = useRouter();
const { register, checkUniqueness } = useAuth();

const formData = reactive({
  name: '', email: '', phone: '', crn: '', gender: '', ca_level: '',
  password: '', password_confirmation: '', otp: '', terms: false, plan_id: null as number | null,
});

onMounted(() => {
  const planId = router.currentRoute.value.query.plan_id;
  if (planId) formData.plan_id = Number(planId);
});

const errors = reactive<any>({
  name: undefined, email: undefined, phone: undefined, crn: undefined,
  gender: undefined, ca_level: undefined, password: undefined,
  password_confirmation: undefined, terms: undefined, general: undefined
});
const isLoading = ref(false);
const showPassword = ref(false);
const showConfirmPassword = ref(false);

const clearError = (name: string) => { errors[name] = undefined; };

let debounceTimer: any = null;
const handleInput = (field: string) => {
  clearError(field);
  if (field === 'email' || field === 'crn') {
    if (debounceTimer) clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => { validateField(field as 'email' | 'crn'); }, 600);
  }
};

const validateField = async (field: 'email' | 'crn') => {
  const value = formData[field];
  if (!value) return;
  if (field === 'email' && !/\S+@\S+\.\S+/.test(value)) { errors.email = 'Email is invalid'; return; }
  if (field === 'crn' && !/^\d+$/.test(value)) { errors.crn = 'CRN must be a number'; return; }
  try {
    const response = await checkUniqueness(field, String(value));
    errors[field] = response.exists ? response.message : undefined;
  } catch (error) { console.error(`Error validating ${field}:`, error); }
};

const validate = () => {
  const e: any = {};
  if (!formData.name) e.name = 'Name is required';
  if (!formData.email) e.email = 'Email is required';
  else if (!/\S+@\S+\.\S+/.test(formData.email)) e.email = 'Email is invalid';
  if (!formData.phone) e.phone = 'Phone is required';
  else if (!/^03\d{9}$/.test(formData.phone)) e.phone = 'Format: 03XXXXXXXXX';
  if (!formData.crn) e.crn = 'CRN is required';
  else if (!/^\d+$/.test(formData.crn)) e.crn = 'Must be a number';
  if (!formData.ca_level) e.ca_level = 'Required';
  if (!formData.gender) e.gender = 'Required';
  if (!formData.password) e.password = 'Required';
  else if (formData.password.length < 8) e.password = 'Min 8 characters';
  if (formData.password !== formData.password_confirmation) e.password_confirmation = 'Passwords don\'t match';
  if (!formData.terms) e.terms = 'You must accept the terms';
  return e;
};

const handleSubmit = async () => {
  Object.keys(errors).forEach(key => errors[key] = undefined);
  const ne = validate();
  Object.assign(errors, ne);
  if (Object.keys(ne).length > 0) { window.scrollTo({ top: 0, behavior: 'smooth' }); return; }

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
      errors.general = error.response?.data?.message || 'Registration failed.';
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } finally { isLoading.value = false; }
};
</script>

<style scoped>
/* ── Layout ── */
.auth-page {
  display: flex;
  min-height: 100vh;
  font-family: 'Outfit', sans-serif;
}

/* ── Brand Panel ── */
.auth-brand-panel {
  display: none;
  position: relative;
  flex: 1;
  background: linear-gradient(160deg, #2563eb 0%, #1d4ed8 40%, #1e40af 100%);
  overflow: hidden;
  padding: 3.5rem;
  align-items: flex-end;
}
@media (min-width: 1024px) {
  .auth-brand-panel { display: flex; }
}

.brand-shape {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
}
.brand-shape--1 {
  width: 420px; height: 420px;
  top: -80px; right: -100px;
  background: radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%);
}
.brand-shape--2 {
  width: 300px; height: 300px;
  bottom: 15%; left: -60px;
  background: radial-gradient(circle, rgba(255,255,255,0.06) 0%, transparent 70%);
}
.brand-shape--3 {
  width: 180px; height: 180px;
  top: 40%; right: 20%;
  border: 1px solid rgba(255,255,255,0.06);
}

.brand-content {
  position: relative;
  z-index: 1;
  max-width: 460px;
}
.brand-logo-link {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  text-decoration: none;
  margin-bottom: 2.5rem;
}
.brand-logo-icon {
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: rgba(255,255,255,0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  transition: transform 0.2s;
}
.brand-logo-link:hover .brand-logo-icon { transform: scale(1.05); }
.brand-logo-name {
  display: block;
  font-size: 1.25rem;
  font-weight: 700;
  color: #fff;
  letter-spacing: -0.02em;
  line-height: 1.1;
}
.brand-logo-sub {
  display: block;
  font-size: 0.75rem;
  font-weight: 600;
  color: rgba(255,255,255,0.65);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-top: 2px;
}
.brand-tagline {
  font-size: 1.15rem;
  font-weight: 600;
  color: rgba(255,255,255,0.85);
  margin-bottom: 1.5rem;
  letter-spacing: -0.01em;
}
.brand-description {
  font-size: 0.95rem;
  line-height: 1.75;
  color: rgba(255,255,255,0.7);
  font-weight: 500;
  margin-bottom: 2.5rem;
  max-width: 400px;
}

.brand-capabilities {
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
  padding-top: 1.75rem;
  border-top: 1px solid rgba(255,255,255,0.15);
}
.brand-cap-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.9rem;
  font-weight: 500;
  color: rgba(255,255,255,0.75);
}
.brand-cap-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: rgba(255,255,255,0.5);
  flex-shrink: 0;
}

/* ── Form Panel ── */
.auth-form-panel {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 1.5rem;
  background: #fafbfc;
  overflow-y: auto;
}
@media (min-width: 1024px) {
  .auth-form-panel {
    max-width: 560px;
    padding: 2.5rem 3rem;
  }
}

.auth-form-wrapper {
  width: 100%;
  max-width: 420px;
}

.mobile-logo-link { display: block; margin-bottom: 2rem; }
@media (min-width: 1024px) { .mobile-logo-link { display: none; } }
.mobile-logo { height: 36px; width: auto; }

.form-header { margin-bottom: 1.75rem; }
.form-title {
  font-size: 1.85rem;
  font-weight: 700;
  color: #0f172a;
  letter-spacing: -0.025em;
  margin-bottom: 0.4rem;
}
.form-subtitle {
  font-size: 0.95rem;
  color: #64748b;
  font-weight: 500;
  line-height: 1.5;
}

/* ── Alert ── */
.auth-alert {
  display: flex;
  align-items: flex-start;
  gap: 0.65rem;
  background: #fff5f5;
  border: 1px solid #fecdd3;
  border-radius: 12px;
  padding: 0.85rem 1rem;
  margin-bottom: 1.25rem;
}
.auth-alert-icon {
  width: 16px; height: 16px;
  color: #e11d48;
  flex-shrink: 0;
  margin-top: 1px;
}
.auth-alert-msg {
  font-size: 0.85rem;
  color: #e11d48;
  line-height: 1.4;
  font-weight: 600;
}

/* ── Form ── */
.auth-form { display: flex; flex-direction: column; gap: 1rem; }

.field-group { display: flex; flex-direction: column; gap: 0.35rem; }
.field-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.75rem;
}
@media (max-width: 480px) {
  .field-row { grid-template-columns: 1fr; }
}

.field-label {
  font-size: 0.875rem;
  font-weight: 700;
  color: #334155;
  letter-spacing: 0.02em;
}

.field-input-wrap {
  position: relative;
  display: flex;
  align-items: center;
}
.field-icon {
  position: absolute;
  left: 14px;
  width: 16px; height: 16px;
  color: #94a3b8;
  pointer-events: none;
}
.field-input {
  width: 100%;
  padding: 0.6rem 0.875rem 0.6rem 2.5rem;
  border: 1px solid #cbd5e1;
  border-radius: 10px;
  font-size: 0.95rem;
  font-weight: 600;
  color: #334155;
  background: #fff;
  outline: none;
  transition: border-color 0.15s, box-shadow 0.15s;
}
.field-input--plain { padding-left: 0.875rem; }
.field-input--pr { padding-right: 2.5rem; }
.field-input::placeholder { color: #94a3b8; font-weight: 500; }
.field-input:focus {
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59,130,246,0.08);
}
.field-input--error { border-color: #fda4af; }
.field-input--error:focus {
  border-color: #f43f5e;
  box-shadow: 0 0 0 3px rgba(244,63,94,0.08);
}
select.field-input { cursor: pointer; }

.field-toggle {
  position: absolute;
  right: 10px;
  background: none;
  border: none;
  color: #94a3b8;
  cursor: pointer;
  padding: 4px;
  transition: color 0.15s;
}
.field-toggle:hover { color: #64748b; }

.field-error {
  font-size: 0.85rem;
  font-weight: 600;
  color: #e11d48;
  padding-left: 2px;
  margin-top: 4px;
}

.field-checkbox-row {
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
}
.field-checkbox {
  width: 16px; height: 16px;
  accent-color: #3b82f6;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 2px;
}
.field-checkbox-label {
  font-size: 0.9rem;
  font-weight: 600;
  color: #475569;
  cursor: pointer;
  line-height: 1.5;
}
.field-checkbox-label a {
  color: #3b82f6;
  font-weight: 700;
  text-decoration: none;
}
.field-checkbox-label a:hover { color: #2563eb; }

/* ── Submit ── */
.auth-submit {
  width: 100%;
  padding: 0.7rem 1.5rem;
  margin-top: 0.25rem;
  background: #2563eb;
  color: #fff;
  border: none;
  border-radius: 10px;
  font-size: 0.95rem;
  font-weight: 700;
  letter-spacing: 0.01em;
  cursor: pointer;
  transition: background 0.15s, transform 0.1s;
  display: flex;
  align-items: center;
  justify-content: center;
}
.auth-submit:hover { background: #1d4ed8; }
.auth-submit:active { transform: scale(0.99); }
.auth-submit:disabled { opacity: 0.55; cursor: not-allowed; }
.auth-submit-loading { display: flex; align-items: center; gap: 0.5rem; }

.auth-footer-link {
  text-align: center;
  font-size: 0.9rem;
  color: #64748b;
  font-weight: 600;
  margin-top: 0.5rem;
}
.auth-footer-link a {
  color: #3b82f6;
  font-weight: 700;
  text-decoration: none;
  margin-left: 4px;
  transition: color 0.15s;
}
.auth-footer-link a:hover { color: #2563eb; }
</style>
