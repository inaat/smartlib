<template>
  <div class="auth-page">
    <!-- Left Brand Panel -->
    <div class="auth-brand-panel">
      <!-- Decorative shapes -->
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

        <p class="brand-tagline">Intelligent Library Management System</p>
        <p class="brand-description">
          SmartLib is a complete digital platform designed for ICAP libraries to streamline seat booking, automate attendance, manage book catalogues, and provide real-time analytics — empowering both students and administrators with a modern, paperless experience.
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
        <!-- Mobile logo -->
        <router-link to="/" class="mobile-logo-link">
          <img :src="'/images/logo-blue.png'" alt="SmartLib" class="mobile-logo" />
        </router-link>

        <div class="form-header">
          <h2 class="form-title">Welcome back</h2>
          <p class="form-subtitle">Enter your credentials to access your dashboard</p>
        </div>

        <!-- Error Alert -->
        <transition name="fade">
          <div v-if="errors.general" class="auth-alert">
            <AlertCircle class="auth-alert-icon" />
            <div>
              <span class="auth-alert-title">Sign in failed</span>
              <p class="auth-alert-msg">{{ errors.general }}</p>
            </div>
          </div>
        </transition>

        <form class="auth-form" @submit.prevent="handleSubmit">
          <!-- Email -->
          <div class="field-group">
            <label for="email" class="field-label">Email</label>
            <div class="field-input-wrap">
              <Mail class="field-icon" />
              <input
                id="email"
                type="email"
                autocomplete="email"
                v-model="formData.email"
                @input="clearError('email')"
                :class="['field-input', errors.email && 'field-input--error']"
                placeholder="student@icap.org.pk"
              />
            </div>
            <p v-if="errors.email" class="field-error">{{ errors.email }}</p>
          </div>

          <!-- Password -->
          <div class="field-group">
            <div class="field-label-row">
              <label for="password" class="field-label">Password</label>
              <a href="#" class="field-link">Forgot password?</a>
            </div>
            <div class="field-input-wrap">
              <Lock class="field-icon" />
              <input
                id="password"
                :type="showPassword ? 'text' : 'password'"
                autocomplete="current-password"
                v-model="formData.password"
                @input="clearError('password')"
                :class="['field-input field-input--password', errors.password && 'field-input--error']"
                placeholder="••••••••"
              />
              <button type="button" @click="showPassword = !showPassword" class="field-toggle">
                <EyeOff v-if="showPassword" class="h-4 w-4" />
                <Eye v-else class="h-4 w-4" />
              </button>
            </div>
            <p v-if="errors.password" class="field-error">{{ errors.password }}</p>
          </div>

          <!-- Remember -->
          <div class="field-checkbox-row">
            <input id="remember" type="checkbox" v-model="formData.remember" class="field-checkbox" />
            <label for="remember" class="field-checkbox-label">Keep me signed in</label>
          </div>

          <!-- Submit -->
          <button type="submit" :disabled="isLoading" class="auth-submit">
            <span v-if="isLoading" class="auth-submit-loading">
              <svg class="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <span>Signing in…</span>
            </span>
            <span v-else>Sign In</span>
          </button>

          <p class="auth-footer-link">
            Don't have an account?
            <router-link to="/register">Create free account</router-link>
          </p>
        </form>

        <!-- Demo Logins -->
        <div class="demo-section">
          <span class="demo-label">Demo Logins</span>
          <div class="demo-buttons">
            <button type="button" @click="quickFill('student')" class="demo-btn">
              <div class="demo-btn-dot demo-btn-dot--blue"></div>
              <span>Student</span>
            </button>
            <button type="button" @click="quickFill('librarian')" class="demo-btn">
              <div class="demo-btn-dot demo-btn-dot--emerald"></div>
              <span>Librarian</span>
            </button>
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
import { BookOpen, Mail, Lock, Eye, EyeOff, AlertCircle } from 'lucide-vue-next';

const router = useRouter();
const { login, settings, fetchSettings } = useAuth();

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
  clearError('email'); clearError('password'); clearError('general');
};

const validate = () => {
  const e: any = {};
  if (!formData.email) e.email = 'Email address is required';
  else if (!/\S+@\S+\.\S+/.test(formData.email)) e.email = 'Enter a valid email address';
  if (!formData.password) e.password = 'Password is required';
  else if (formData.password.length < 6) e.password = 'Minimum 6 characters';
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
    console.log('LOGIN CATCH - full error response:', error.response);
    console.log('LOGIN CATCH - error.response.data:', error.response?.data);
    console.log('LOGIN CATCH - error.response.data.errors:', error.response?.data?.errors);
    const be = error.response?.data?.errors;
    if (be) {
      errors.value.email = be.email ? (Array.isArray(be.email) ? be.email[0] : be.email) : '';
      errors.value.password = be.password ? (Array.isArray(be.password) ? be.password[0] : be.password) : '';
      if (!errors.value.email && !errors.value.password) {
        errors.value.general = error.response?.data?.message || 'Invalid email or password.';
      }
    } else {
      errors.value.general = 'Invalid email or password.';
    }
  } finally { isLoading.value = false; }
};

onMounted(() => { fetchSettings(); });
</script>

<style scoped>
/* ── Layout ── */
/* ── Layout ── */
.auth-page {
  display: flex;
  min-height: 100vh;
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
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
}
@media (min-width: 1024px) {
  .auth-form-panel {
    max-width: 540px;
    padding: 3rem;
  }
}

.auth-form-wrapper {
  width: 100%;
  max-width: 380px;
}

.mobile-logo-link {
  display: block;
  margin-bottom: 2rem;
}
@media (min-width: 1024px) {
  .mobile-logo-link { display: none; }
}
.mobile-logo { height: 36px; width: auto; }

.form-header { margin-bottom: 2rem; }
.form-title {
  font-size: 1.85rem;
  font-weight: 700;
  color: #0f172a;
  letter-spacing: -0.025em;
  margin-bottom: 0.5rem;
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
  margin-bottom: 1.5rem;
  animation: shake 0.4s cubic-bezier(.36,.07,.19,.97) both;
}
.auth-alert-icon {
  width: 16px; height: 16px;
  color: #e11d48;
  flex-shrink: 0;
  margin-top: 1px;
}
.auth-alert-title {
  display: block;
  font-size: 0.85rem;
  font-weight: 700;
  color: #9f1239;
}
.auth-alert-msg {
  font-size: 0.85rem;
  color: #e11d48;
  margin-top: 2px;
  line-height: 1.4;
  font-weight: 500;
}

/* ── Form ── */
.auth-form { display: flex; flex-direction: column; gap: 1.25rem; }

.field-group { display: flex; flex-direction: column; gap: 0.4rem; }
.field-label {
  font-size: 0.875rem;
  font-weight: 700;
  color: #334155;
  letter-spacing: 0.02em;
}
.field-label-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.field-link {
  font-size: 0.875rem;
  font-weight: 600;
  color: #3b82f6;
  text-decoration: none;
  transition: color 0.15s;
}
.field-link:hover { color: #2563eb; }

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
  padding: 0.7rem 0.875rem 0.7rem 2.5rem;
  border: 1px solid #cbd5e1;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 600;
  color: #0f172a;
  background: #fff;
  outline: none;
  transition: border-color 0.15s, box-shadow 0.15s;
}
.field-input::placeholder { color: #94a3b8; font-weight: 500; }
.field-input:focus {
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59,130,246,0.08);
}
.field-input--error {
  border-color: #fda4af;
}
.field-input--error:focus {
  border-color: #f43f5e;
  box-shadow: 0 0 0 3px rgba(244,63,94,0.08);
}
.field-input--password { padding-right: 2.75rem; }

.field-toggle {
  position: absolute;
  right: 12px;
  background: none;
  border: none;
  color: #94a3b8;
  cursor: pointer;
  padding: 4px;
  transition: color 0.15s;
}
.field-toggle:hover { color: #64748b; }

.field-error {
  font-size: 0.8rem;
  font-weight: 600;
  color: #e11d48;
  padding-left: 2px;
  margin-top: 6px;
  animation: errorShake 0.35s ease;
}

@keyframes errorShake {
  0%, 100% { transform: translateX(0); }
  20% { transform: translateX(-4px); }
  40% { transform: translateX(4px); }
  60% { transform: translateX(-2px); }
  80% { transform: translateX(2px); }
}

.field-checkbox-row {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.field-checkbox {
  width: 16px; height: 16px;
  accent-color: #3b82f6;
  border-radius: 4px;
  cursor: pointer;
}
.field-checkbox-label {
  font-size: 0.75rem;
  font-weight: 600;
  color: #475569;
  cursor: pointer;
}

/* ── Submit Button ── */
.auth-submit {
  width: 100%;
  padding: 0.75rem 1.5rem;
  background: #2563eb;
  color: #fff;
  border: none;
  border-radius: 12px;
  font-size: 0.8rem;
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
.auth-submit-loading {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.auth-footer-link {
  text-align: center;
  font-size: 0.75rem;
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

/* ── Demo ── */
.demo-section {
  margin-top: 2.5rem;
  padding-top: 1.75rem;
  border-top: 1px solid #f1f5f9;
  text-align: center;
}
.demo-label {
  display: block;
  font-size: 0.6rem;
  font-weight: 700;
  color: #64748b;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 0.75rem;
}
.demo-buttons {
  display: flex;
  gap: 0.6rem;
}
.demo-btn {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  padding: 0.55rem 0.75rem;
  background: #fff;
  border: 1px solid #cbd5e1;
  border-radius: 10px;
  font-size: 0.72rem;
  font-weight: 600;
  color: #334155;
  cursor: pointer;
  transition: all 0.15s;
}
.demo-btn:hover {
  background: #f8fafc;
  border-color: #94a3b8;
}
.demo-btn:active { transform: scale(0.98); }
.demo-btn-dot {
  width: 7px; height: 7px;
  border-radius: 50%;
}
.demo-btn-dot--blue { background: #3b82f6; }
.demo-btn-dot--emerald { background: #10b981; }

/* ── Animations ── */
@keyframes shake {
  0%, 100% { transform: translateX(0); }
  10%, 30%, 50%, 70%, 90% { transform: translateX(-3px); }
  20%, 40%, 60%, 80% { transform: translateX(3px); }
}
.fade-enter-active, .fade-leave-active { transition: opacity 0.2s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>
