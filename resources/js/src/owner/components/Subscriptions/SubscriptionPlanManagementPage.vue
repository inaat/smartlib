<template>
  <div class="p-6 space-y-6">
    <!-- Header -->
    <div class="flex items-center justify-between">
      <div>
        <h1 class="text-3xl font-bold text-gray-900">Subscription Plans</h1>
        <p class="text-gray-600 mt-1">Manage membership tiers and access levels</p>
      </div>
      <div class="flex items-center space-x-3">
        <button
          @click="fetchPlans"
          :disabled="loading"
          class="px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center space-x-2 disabled:opacity-50"
        >
          <RefreshCw :class="['w-4 h-4', loading ? 'animate-spin' : '']" />
          <span class="text-sm font-medium">{{ loading ? 'Refreshing...' : 'Refresh' }}</span>
        </button>
        <button
          @click="openCreateModal"
          class="px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all flex items-center space-x-2"
        >
          <Plus class="w-4 h-4" />
          <span class="text-sm font-medium">Create Plan</span>
        </button>
      </div>
    </div>

    <!-- Plans Grid -->
    <div v-if="loading && plans.length === 0" class="flex items-center justify-center py-20">
      <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
    </div>

    <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
      <div
        v-for="plan in plans"
        :key="plan.id"
        :class="[
          plan.name.toLowerCase().includes('premium') || plan.name.toLowerCase().includes('pro')
            ? 'bg-white border-2 border-indigo-650 rounded-3xl p-8 shadow-xl shadow-indigo-500/5 relative flex flex-col justify-between text-left transition-all duration-300 transform md:-translate-y-2'
            : 'bg-white border border-slate-200 rounded-3xl p-8 shadow-sm hover:border-slate-400 hover:shadow-md transition-all duration-300 flex flex-col justify-between text-left'
        ]"
      >
        <div class="absolute -top-3.5 right-6 flex items-center space-x-2">
          <!-- Status Badge -->
          <span
            :class="[
              'px-2.5 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider border',
              plan.status === 'active' 
                ? 'bg-green-50 border-green-200 text-green-700' 
                : 'bg-red-50 border-red-200 text-red-700'
            ]"
          >
            {{ plan.status === 'active' ? 'Active' : 'Inactive' }}
          </span>
          <!-- Featured Badge -->
          <span 
            v-if="plan.name.toLowerCase().includes('premium') || plan.name.toLowerCase().includes('pro')" 
            class="bg-indigo-600 text-white text-[9px] font-black uppercase tracking-widest px-2.5 py-0.5 rounded-full border border-indigo-700"
          >
            Featured
          </span>
        </div>

        <!-- Card Content -->
        <div class="flex-grow flex flex-col">
          <!-- Header Section (Plan title, Price, description) -->
          <div>
            <span class="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-1.5">{{ plan.duration_days }} Days Validity</span>
            <h3 class="text-xl font-extrabold text-slate-800">{{ plan.name }}</h3>
            <p v-if="plan.description" class="text-xs text-slate-500 mt-1 font-semibold leading-relaxed">
              {{ plan.description }}
            </p>
            
            <div class="price-box my-6 flex flex-col items-start justify-center">
              <div class="flex items-center gap-2 mb-1" v-if="plan.features?.discount_type && plan.features?.discount_type !== 'none'">
                <span class="text-xs text-slate-400 line-through">Rs. {{ plan.features?.original_price }}</span>
                <span class="text-[9px] font-black uppercase bg-green-50 border border-green-200 text-green-600 px-2 py-0.5 rounded">
                  {{ plan.features?.discount_type === 'percentage' ? `${plan.features?.discount_value}% OFF` : `Rs. ${plan.features?.discount_value} OFF` }}
                </span>
              </div>
              <div class="flex items-baseline">
                <span class="text-3xl font-black text-slate-900">Rs. {{ plan.price }}</span>
                <span class="text-xs font-semibold text-slate-550 ml-1.5">/ {{ plan.duration_days }} days</span>
              </div>
            </div>
          </div>

          <!-- Features List -->
          <ul class="w-full space-y-3.5 text-left border-t border-slate-100/80 pt-6">
            <li class="flex items-center space-x-2.5 text-xs text-slate-655 font-semibold">
              <Check class="h-4 w-4 text-indigo-650 flex-shrink-0" />
              <span>{{ plan.daily_seat_bookings_limit === -1 || !plan.daily_seat_bookings_limit ? 'Unlimited' : plan.daily_seat_bookings_limit }} Daily Seat Bookings</span>
            </li>
            <li class="flex items-center space-x-2.5 text-xs text-slate-655 font-semibold">
              <Check class="h-4 w-4 text-indigo-650 flex-shrink-0" />
              <span>{{ plan.monthly_seat_bookings_limit === -1 || !plan.monthly_seat_bookings_limit ? 'Unlimited' : plan.monthly_seat_bookings_limit }} Monthly Seat Bookings</span>
            </li>
            <li class="flex items-center space-x-2.5 text-xs text-slate-655 font-semibold">
              <Check class="h-4 w-4 text-indigo-655 flex-shrink-0" />
              <span>{{ plan.libraries_access_limit === -1 || !plan.libraries_access_limit ? 'Unlimited' : plan.libraries_access_limit }} Libraries Access</span>
            </li>
            <li class="flex items-center space-x-2.5 text-xs text-slate-655 font-semibold">
              <Check class="h-4 w-4 text-indigo-655 flex-shrink-0" />
              <span>{{ plan.books_access_limit === -1 || !plan.books_access_limit ? 'Unlimited' : plan.books_access_limit }} Books Access</span>
            </li>
            <li class="flex items-center space-x-2.5 text-xs text-slate-655 font-semibold">
              <Check class="h-4 w-4 text-indigo-655 flex-shrink-0" />
              <span>{{ plan.events_joining_limit === -1 || !plan.events_joining_limit ? 'Unlimited' : plan.events_joining_limit }} Events Joining</span>
            </li>
            <li class="flex items-center space-x-2.5 text-xs text-slate-655 font-semibold">
              <Check class="h-4 w-4 text-indigo-655 flex-shrink-0" />
              <span>
                <span v-if="plan.advance_booking_days === -1">Unlimited Advance Booking</span>
                <span v-else-if="plan.advance_booking_days === 0">Same Day Booking Only</span>
                <span v-else>{{ plan.advance_booking_days }} Days Advance Booking</span>
              </span>
            </li>
            <li v-if="plan.digital_books_access" class="flex items-center space-x-2.5 text-xs text-slate-655 font-semibold">
              <Check class="h-4 w-4 text-indigo-655 flex-shrink-0" />
              <span>Digital Books Access</span>
            </li>
            <li v-if="plan.priority_booking" class="flex items-center space-x-2.5 text-xs text-slate-655 font-semibold">
              <Check class="h-4 w-4 text-indigo-655 flex-shrink-0" />
              <span>Priority Seat Booking</span>
            </li>
          </ul>
        </div>

        <!-- Action Buttons Footer -->
        <div class="flex items-center justify-between border-t border-slate-100 pt-6 mt-8">
          <button
            @click="editPlan(plan)"
            class="text-xs font-bold text-indigo-600 hover:text-indigo-750 flex items-center bg-indigo-50 hover:bg-indigo-100/70 px-3.5 py-2 rounded-xl transition-all"
          >
            <Edit2 class="w-3.5 h-3.5 mr-1.5" />
            Edit Plan
          </button>
          <button
            @click="confirmDelete(plan)"
            class="text-xs font-bold text-rose-600 hover:text-rose-750 flex items-center bg-rose-50 hover:bg-rose-100/70 px-3.5 py-2 rounded-xl transition-all"
          >
            <Trash2 class="w-3.5 h-3.5 mr-1.5" />
            Delete
          </button>
        </div>
      </div>
    </div>

    <!-- Create/Edit Modal -->
    <div v-if="showModal" class="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div class="bg-white rounded-xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div class="p-6 border-b border-gray-200 flex items-center justify-between sticky top-0 bg-white z-10">
          <h3 class="text-xl font-bold text-gray-900">{{ isEditing ? 'Edit Subscription Plan' : 'Create New Plan' }}</h3>
          <button @click="showModal = false" class="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <X class="w-5 h-5 text-gray-500" />
          </button>
        </div>

        <form @submit.prevent="savePlan" class="p-6 space-y-6">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="md:col-span-2">
              <label class="block text-sm font-medium text-gray-700 mb-1">Plan Name</label>
              <input
                v-model="form.name"
                type="text"
                required
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                placeholder="e.g. Premium Monthly"
              />
            </div>

            <div class="md:col-span-2">
              <label class="block text-sm font-medium text-gray-700 mb-1">Description</label>
              <textarea
                v-model="form.description"
                rows="2"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                placeholder="Briefly describe what this plan offers..."
              ></textarea>
            </div>

            <!-- Plan Duration & Preset Selector -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Plan Duration</label>
              <select
                v-model="durationPresetInput"
                @change="onDurationPresetChange"
                class="w-full px-4 py-2.5 border border-gray-300 bg-white rounded-lg focus:ring-2 focus:ring-indigo-500 text-sm font-semibold"
              >
                <option value="7">1 Week (7 Days)</option>
                <option value="30">1 Month (30 Days)</option>
                <option value="90">Quarterly (90 Days)</option>
                <option value="365">Yearly (365 Days)</option>
                <option value="custom">Custom Days...</option>
              </select>
            </div>

            <div v-if="durationPresetInput === 'custom'">
              <label class="block text-sm font-medium text-gray-700 mb-1">Custom Duration (Days)</label>
              <input
                v-model.number="form.duration_days"
                type="number"
                required
                min="1"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 text-sm font-semibold"
              />
            </div>

            <!-- Pricing Model Selection -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Pricing Model</label>
              <div class="grid grid-cols-2 gap-3.5">
                <button
                  type="button"
                  @click="setFreeModel(true)"
                  :class="[
                    'px-4 py-2 border rounded-lg text-sm font-bold text-center transition-all',
                    isFreePlanInput
                      ? 'bg-emerald-50 border-emerald-300 text-emerald-700 shadow-sm'
                      : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'
                  ]"
                >
                  Free Plan
                </button>
                <button
                  type="button"
                  @click="setFreeModel(false)"
                  :class="[
                    'px-4 py-2 border rounded-lg text-sm font-bold text-center transition-all',
                    !isFreePlanInput
                      ? 'bg-indigo-50 border-indigo-300 text-indigo-700 shadow-sm'
                      : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'
                  ]"
                >
                  Paid Plan
                </button>
              </div>
            </div>

            <!-- Paid Plan Specific Inputs -->
            <template v-if="!isFreePlanInput">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Original Price (PKR)</label>
                <input
                  v-model.number="originalPriceInput"
                  type="number"
                  required
                  min="0"
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 text-sm font-semibold"
                />
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Apply Discount</label>
                <select
                  v-model="discountTypeInput"
                  class="w-full px-4 py-2.5 border border-gray-300 bg-white rounded-lg focus:ring-2 focus:ring-indigo-500 text-sm font-semibold"
                >
                  <option value="none">No Discount</option>
                  <option value="percentage">Percentage Discount (%)</option>
                  <option value="fixed">Fixed Amount Discount (Rs.)</option>
                </select>
              </div>

              <div v-if="discountTypeInput !== 'none'">
                <label class="block text-sm font-medium text-gray-700 mb-1">
                  Discount Value {{ discountTypeInput === 'percentage' ? '(%)' : '(Rs.)' }}
                </label>
                <input
                  v-model.number="discountValueInput"
                  type="number"
                  required
                  min="1"
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 text-sm font-semibold"
                />
              </div>
            </template>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Free Trial (Days)</label>
              <input
                v-model.number="form.free_trial_days"
                type="number"
                min="0"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                placeholder="0 for no trial"
              />
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Daily Seat Bookings Limit</label>
              <input
                v-model.number="form.daily_seat_bookings_limit"
                type="number"
                min="0"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                placeholder="0 for unlimited"
              />
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Monthly Seat Bookings Limit</label>
              <input
                v-model.number="form.monthly_seat_bookings_limit"
                type="number"
                min="0"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                placeholder="0 for unlimited"
              />
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Libraries Access Limit</label>
              <input
                v-model.number="form.libraries_access_limit"
                type="number"
                min="0"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                placeholder="0 for unlimited"
              />
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Books Access Limit</label>
              <input
                v-model.number="form.books_access_limit"
                type="number"
                min="0"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                placeholder="0 for unlimited"
              />
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Events Joining Limit</label>
              <input
                v-model.number="form.events_joining_limit"
                type="number"
                min="0"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                placeholder="0 for unlimited"
              />
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Advance Booking Days</label>
              <input
                v-model.number="form.advance_booking_days"
                type="number"
                min="-1"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                placeholder="0 for same day, -1 for unlimited"
              />
            </div>

            <div class="md:col-span-2 space-y-4">
              <h4 class="text-sm font-bold text-gray-900 uppercase tracking-wider">Plan Features</h4>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <label class="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                  <input
                    v-model="form.digital_books_access"
                    type="checkbox"
                    class="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                  />
                  <span class="text-sm text-gray-700">Digital Books Access</span>
                </label>
                <label class="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                  <input
                    v-model="form.priority_booking"
                    type="checkbox"
                    class="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                  />
                  <span class="text-sm text-gray-700">Priority Seat Booking</span>
                </label>
              </div>
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Status</label>
              <select
                v-model="form.status"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
              >
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
            </div>
          </div>

          <div class="flex items-center space-x-3 pt-6 border-t border-gray-100">
            <button
              type="submit"
              :disabled="saving"
              class="flex-1 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors disabled:opacity-50 flex items-center justify-center space-x-2 shadow-lg hover:shadow-indigo-500/30"
            >
              <span v-if="saving" class="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></span>
              <span class="font-bold">{{ saving ? 'Saving...' : (isEditing ? 'Update Plan' : 'Create Plan') }}</span>
            </button>
            <button
              type="button"
              @click="showModal = false"
              class="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-semibold"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { 
  CreditCard, 
  Plus, 
  X, 
  RefreshCw, 
  Edit2, 
  Trash2,
  CheckCircle2,
  AlertCircle,
  Check
} from 'lucide-vue-next';
import { ownerAPI } from '@/shared/services/api';
import { useSwal } from '@/shared/composables/useSwal';

const { showConfirm, showSuccess, showError } = useSwal();

const plans = ref<any[]>([]);
const loading = ref(false);
const saving = ref(false);
const showModal = ref(false);
const isEditing = ref(false);

const originalPriceInput = ref(0);
const discountTypeInput = ref('none'); // 'none', 'percentage', 'fixed'
const discountValueInput = ref(0);
const durationPresetInput = ref('30'); // '7', '30', '90', '365', 'custom'
const isFreePlanInput = ref(false);

const setFreeModel = (val: boolean) => {
  isFreePlanInput.value = val;
  if (val) {
    originalPriceInput.value = 0;
    discountTypeInput.value = 'none';
    discountValueInput.value = 0;
  }
};

const onDurationPresetChange = () => {
  if (durationPresetInput.value !== 'custom') {
    form.value.duration_days = Number(durationPresetInput.value);
  }
};

const form = ref({
  id: null as number | null,
  name: '',
  description: '',
  price: 0,
  duration_days: 30,
  free_trial_days: 0,
  seat_bookings_limit: 0,
  daily_seat_bookings_limit: 0,
  monthly_seat_bookings_limit: 0,
  libraries_access_limit: 0,
  books_access_limit: 0,
  events_joining_limit: 0,
  advance_booking_days: 0,
  book_reservations_limit: 0,
  digital_books_access: false,
  priority_booking: false,
  status: 'active',
  features: {} as any
});

const fetchPlans = async () => {
  loading.value = true;
  try {
    const response = await ownerAPI.getSubscriptionPlans();
    plans.value = response;
  } catch (error) {
    console.error('Error fetching plans:', error);
  } finally {
    loading.value = false;
  }
};

const openCreateModal = () => {
  isEditing.value = false;
  originalPriceInput.value = 0;
  discountTypeInput.value = 'none';
  discountValueInput.value = 0;
  durationPresetInput.value = '30';
  isFreePlanInput.value = false;

  form.value = {
    id: null,
    name: '',
    description: '',
    price: 0,
    duration_days: 30,
    free_trial_days: 0,
    seat_bookings_limit: 0,
    daily_seat_bookings_limit: 0,
    monthly_seat_bookings_limit: 0,
    libraries_access_limit: 0,
    books_access_limit: 0,
    events_joining_limit: 0,
    advance_booking_days: 0,
    book_reservations_limit: 0,
    digital_books_access: false,
    priority_booking: false,
    status: 'active',
    features: {}
  };
  showModal.value = true;
};

const editPlan = (plan: any) => {
  isEditing.value = true;
  
  let features = plan.features;
  if (typeof features === 'string') {
    try {
      features = JSON.parse(features);
    } catch (e) {
      features = {};
    }
  }
  if (!features) features = {};

  isFreePlanInput.value = features.is_free === 'true' || Number(plan.price) === 0;
  originalPriceInput.value = features.original_price !== undefined ? Number(features.original_price) : Number(plan.price);
  discountTypeInput.value = features.discount_type || 'none';
  discountValueInput.value = features.discount_value !== undefined ? Number(features.discount_value) : 0;

  const days = plan.duration_days;
  if ([7, 30, 90, 365].includes(days)) {
    durationPresetInput.value = String(days);
  } else {
    durationPresetInput.value = 'custom';
  }

  form.value = {
    id: plan.id,
    name: plan.name,
    description: plan.description || '',
    price: plan.price,
    duration_days: plan.duration_days,
    free_trial_days: plan.free_trial_days || 0,
    seat_bookings_limit: plan.seat_bookings_limit || 0,
    daily_seat_bookings_limit: plan.daily_seat_bookings_limit || 0,
    monthly_seat_bookings_limit: plan.monthly_seat_bookings_limit || 0,
    libraries_access_limit: plan.libraries_access_limit || 0,
    books_access_limit: plan.books_access_limit || 0,
    events_joining_limit: plan.events_joining_limit || 0,
    advance_booking_days: plan.advance_booking_days || 0,
    book_reservations_limit: plan.book_reservations_limit || 0,
    digital_books_access: !!plan.digital_books_access,
    priority_booking: !!plan.priority_booking,
    status: plan.status,
    features: features
  };
  showModal.value = true;
};

const savePlan = async () => {
  saving.value = true;
  
  let finalPrice = 0;
  if (isFreePlanInput.value) {
    finalPrice = 0;
  } else {
    const orig = Number(originalPriceInput.value) || 0;
    const val = Number(discountValueInput.value) || 0;
    if (discountTypeInput.value === 'percentage') {
      finalPrice = Math.max(0, orig * (1 - val / 100));
    } else if (discountTypeInput.value === 'fixed') {
      finalPrice = Math.max(0, orig - val);
    } else {
      finalPrice = orig;
    }
  }

  form.value.price = finalPrice;
  form.value.features = {
    original_price: String(originalPriceInput.value),
    discount_type: String(discountTypeInput.value),
    discount_value: String(discountValueInput.value),
    is_free: String(isFreePlanInput.value)
  };

  try {
    if (isEditing.value && form.value.id) {
      await ownerAPI.updateSubscriptionPlan(form.value.id, form.value);
    } else {
      const { id, ...createData } = form.value;
      await ownerAPI.createSubscriptionPlan(createData);
    }
    await fetchPlans();
    showModal.value = false;
    showSuccess('Saved!', isEditing.value ? 'Plan updated successfully!' : 'Plan created successfully!');
  } catch (error: any) {
    console.error('Error saving plan:', error);
    const message = error.response?.data?.message || error.response?.data?.errors 
      ? Object.values(error.response.data.errors).flat().join('\n')
      : 'An error occurred while saving the plan.';
    showError('Save Failed', message);
  } finally {
    saving.value = false;
  }
};

const confirmDelete = async (plan: any) => {
  if (await showConfirm('Delete Plan', `Are you sure you want to delete the plan "${plan.name}"? This will only work if there are no active subscribers.`, 'Yes, Delete')) {
    try {
      await ownerAPI.deleteSubscriptionPlan(plan.id);
      await fetchPlans();
      showSuccess('Deleted!', 'Plan deleted successfully');
    } catch (error: any) {
      showError('Delete Failed', error.response?.data?.message || 'Error deleting plan');
    }
  }
};

onMounted(() => {
  fetchPlans();
});
</script>
