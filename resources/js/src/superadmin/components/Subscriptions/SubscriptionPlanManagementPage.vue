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

    <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="plan in plans"
        :key="plan.id"
        class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden flex flex-col hover:shadow-md transition-shadow"
      >
        <div class="p-6 flex-1">
          <div class="flex items-center justify-between mb-4">
            <div class="p-2 bg-indigo-50 rounded-lg">
              <CreditCard class="w-6 h-6 text-indigo-600" />
            </div>
            <span
              :class="[
                'px-2 py-1 rounded-full text-xs font-medium',
                plan.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
              ]"
            >
              {{ plan.status === 'active' ? 'Active' : 'Inactive' }}
            </span>
          </div>

          <h3 class="text-xl font-bold text-gray-900 mb-1">{{ plan.name }}</h3>
          <p class="text-sm text-gray-500 mb-4 line-clamp-2">{{ plan.description }}</p>

          <div class="flex items-baseline space-x-1 mb-6">
            <span class="text-3xl font-bold text-gray-900">Rs. {{ plan.price }}</span>
            <span class="text-gray-500 text-sm">/ {{ plan.duration_days }} days</span>
          </div>

          <div class="space-y-3">
            <div class="flex items-center text-sm text-gray-600">
              <CheckCircle2 class="w-4 h-4 mr-2 text-green-500" />
              {{ plan.daily_seat_bookings_limit === -1 || !plan.daily_seat_bookings_limit ? 'Unlimited' : plan.daily_seat_bookings_limit }} Daily Seat Bookings
            </div>
            <div class="flex items-center text-sm text-gray-600">
              <CheckCircle2 class="w-4 h-4 mr-2 text-green-500" />
              {{ plan.monthly_seat_bookings_limit === -1 || !plan.monthly_seat_bookings_limit ? 'Unlimited' : plan.monthly_seat_bookings_limit }} Monthly Seat Bookings
            </div>
            <div class="flex items-center text-sm text-gray-600">
              <CheckCircle2 class="w-4 h-4 mr-2 text-green-500" />
              {{ plan.libraries_access_limit === -1 || !plan.libraries_access_limit ? 'Unlimited' : plan.libraries_access_limit }} Libraries Access
            </div>
            <div class="flex items-center text-sm text-gray-600">
              <CheckCircle2 class="w-4 h-4 mr-2 text-green-500" />
              {{ plan.books_access_limit === -1 || !plan.books_access_limit ? 'Unlimited' : plan.books_access_limit }} Books Access
            </div>
            <div class="flex items-center text-sm text-gray-600">
              <CheckCircle2 class="w-4 h-4 mr-2 text-green-500" />
              {{ plan.events_joining_limit === -1 || !plan.events_joining_limit ? 'Unlimited' : plan.events_joining_limit }} Events Joining
            </div>
            <div class="flex items-center text-sm text-gray-600">
              <CheckCircle2 class="w-4 h-4 mr-2 text-green-500" />
              <span v-if="plan.advance_booking_days === -1">Unlimited Advance Booking</span>
              <span v-else-if="plan.advance_booking_days === 0">Same Day Booking Only</span>
              <span v-else>{{ plan.advance_booking_days }} Days Advance Booking</span>
            </div>
            <div v-if="plan.digital_books_access" class="flex items-center text-sm text-gray-600">
              <CheckCircle2 class="w-4 h-4 mr-2 text-green-500" />
              Digital Books Access
            </div>
            <div v-if="plan.priority_booking" class="flex items-center text-sm text-gray-600">
              <CheckCircle2 class="w-4 h-4 mr-2 text-green-500" />
              Priority Seat Booking
            </div>
          </div>
        </div>

        <div class="px-6 py-4 bg-gray-50 border-t border-gray-100 flex items-center justify-between">
          <button
            @click="editPlan(plan)"
            class="text-sm font-medium text-indigo-600 hover:text-indigo-700 flex items-center"
          >
            <Edit2 class="w-4 h-4 mr-1" />
            Edit Plan
          </button>
          <button
            @click="confirmDelete(plan)"
            class="text-sm font-medium text-red-600 hover:text-red-700 flex items-center"
          >
            <Trash2 class="w-4 h-4 mr-1" />
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

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Price (Rs.)</label>
              <input
                v-model.number="form.price"
                type="number"
                required
                min="0"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Duration (Days)</label>
              <input
                v-model.number="form.duration_days"
                type="number"
                required
                min="1"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
              />
            </div>

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
              class="flex-1 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors disabled:opacity-50 flex items-center justify-center space-x-2"
            >
              <span v-if="saving" class="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></span>
              <span>{{ saving ? 'Saving...' : (isEditing ? 'Update Plan' : 'Create Plan') }}</span>
            </button>
            <button
              type="button"
              @click="showModal = false"
              class="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
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
  AlertCircle
} from 'lucide-vue-next';
import { adminAPI } from '@/shared/services/api';

const plans = ref<any[]>([]);
const loading = ref(false);
const saving = ref(false);
const showModal = ref(false);
const isEditing = ref(false);

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
  status: 'active'
});

const fetchPlans = async () => {
  loading.value = true;
  try {
    const response = await adminAPI.getSubscriptionPlans();
    plans.value = response;
  } catch (error) {
    console.error('Error fetching plans:', error);
  } finally {
    loading.value = false;
  }
};

const openCreateModal = () => {
  isEditing.value = false;
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
    status: 'active'
  };
  showModal.value = true;
};

const editPlan = (plan: any) => {
  isEditing.value = true;
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
    status: plan.status
  };
  showModal.value = true;
};

import { useSwal } from '@/shared/composables/useSwal';
const { showConfirm, showSuccess, showError } = useSwal();

const savePlan = async () => {
  saving.value = true;
  try {
    if (isEditing.value && form.value.id) {
      await adminAPI.updateSubscriptionPlan(form.value.id, form.value);
    } else {
      const { id, ...createData } = form.value;
      await adminAPI.createSubscriptionPlan(createData);
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
      await adminAPI.deleteSubscriptionPlan(plan.id);
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
