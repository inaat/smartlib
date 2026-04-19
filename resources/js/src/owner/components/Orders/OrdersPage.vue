<template>
  <div class="space-y-6">
    <!-- Header -->
    <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
      <div>
        <h1 class="text-2xl font-bold text-gray-900">Order & Subscription Management</h1>
        <p class="text-gray-500 text-sm">Manage subscription orders and track active user subscriptions.</p>
      </div>
      <div class="flex items-center space-x-3">
        <div class="relative">
          <Search class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input 
            v-model="search"
            type="text" 
            placeholder="Search..." 
            class="pl-10 pr-4 py-2 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 w-64"
            @input="debounceSearch"
          />
        </div>
        <select 
          v-model="statusFilter"
          class="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          @change="fetchData"
        >
          <option value="all">All Status</option>
          <template v-if="activeTab === 'orders'">
            <option value="pending">Pending</option>
            <option value="approved">Approved</option>
            <option value="rejected">Rejected</option>
          </template>
          <template v-else>
            <option value="active">Active</option>
            <option value="expired">Expired</option>
            <option value="cancelled">Cancelled</option>
          </template>
        </select>
      </div>
    </div>

    <!-- Tabs -->
    <div class="flex items-center space-x-1 bg-gray-100 p-1 rounded-xl w-fit">
      <button 
        @click="switchTab('orders')"
        :class="['px-4 py-2 text-sm font-medium rounded-lg transition-all', activeTab === 'orders' ? 'bg-white text-indigo-600 shadow-sm' : 'text-gray-500 hover:text-gray-700']"
      >
        Orders
      </button>
      <button 
        @click="switchTab('subscriptions')"
        :class="['px-4 py-2 text-sm font-medium rounded-lg transition-all', activeTab === 'subscriptions' ? 'bg-white text-indigo-600 shadow-sm' : 'text-gray-500 hover:text-gray-700']"
      >
        User Subscriptions
      </button>
    </div>

    <!-- Orders Table -->
    <div v-if="activeTab === 'orders'" class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden text-sm">
      <div class="overflow-x-auto">
        <table class="w-full text-left border-collapse">
          <thead>
            <tr class="bg-gray-50/50">
              <th class="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Order ID</th>
              <th class="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Student</th>
              <th class="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Plan</th>
              <th class="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Amount</th>
              <th class="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Date</th>
              <th class="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Status</th>
              <th class="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider text-right">Actions</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-50">
            <tr v-if="loading" v-for="i in 5" :key="i" class="animate-pulse">
              <td colspan="7" class="px-6 py-4"><div class="h-4 bg-gray-100 rounded w-full"></div></td>
            </tr>
            <tr v-else-if="orders.length === 0">
              <td colspan="7" class="px-6 py-12 text-center text-gray-500 uppercase font-bold tracking-widest text-xs">No orders found matching your criteria.</td>
            </tr>
            <tr v-for="order in orders" :key="order.id" class="hover:bg-gray-50/50 transition-colors">
              <td class="px-6 py-4">
                <span class="text-sm font-medium text-gray-900 font-mono tracking-tighter">#ORD-{{ order.id }}</span>
              </td>
              <td class="px-6 py-4">
                <div class="flex items-center space-x-3">
                  <div class="w-8 h-8 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 font-bold text-xs border border-indigo-100 shadow-sm">
                    {{ order.user?.name?.charAt(0) }}
                  </div>
                  <div>
                    <p class="text-sm font-bold text-gray-900">{{ order.user?.name }}</p>
                    <p class="text-[10px] text-gray-400 font-medium">{{ order.user?.email }}</p>
                  </div>
                </div>
              </td>
              <td class="px-6 py-4">
                <span class="text-xs font-bold text-gray-600 uppercase">{{ order.plan?.name || 'N/A' }}</span>
              </td>
              <td class="px-6 py-4">
                <span class="text-sm font-extrabold text-indigo-600">Rs. {{ order.amount?.toLocaleString() }}</span>
              </td>
              <td class="px-6 py-4">
                <span class="text-xs text-gray-400 font-semibold">{{ formatDate(order.created_at) }}</span>
              </td>
              <td class="px-6 py-4">
                <span :class="['px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider', getStatusClass(order.status)]">
                  {{ order.status }}
                </span>
              </td>
              <td class="px-6 py-4 text-right">
                <div v-if="order.status === 'pending'" class="flex items-center justify-end space-x-2">
                  <button 
                    @click="handleApprove(order)"
                    class="p-1.5 text-green-600 hover:bg-green-50 rounded-lg transition-colors"
                    title="Approve Order"
                  >
                    <CheckCircle class="w-5 h-5" />
                  </button>
                  <button 
                    @click="handleReject(order)"
                    class="p-1.5 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                    title="Reject Order"
                  >
                    <XCircle class="w-5 h-5" />
                  </button>
                </div>
                <button v-else class="p-1.5 text-gray-400 hover:bg-gray-50 rounded-lg transition-colors">
                  <Eye class="w-5 h-5 opacity-40" />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Pagination -->
      <div v-if="pagination.total > pagination.per_page" class="px-6 py-4 border-t border-gray-50 flex items-center justify-between">
        <p class="text-sm text-gray-500">
          Showing {{ pagination.from }} to {{ pagination.to }} of {{ pagination.total }} orders
        </p>
        <div class="flex items-center space-x-2">
          <button 
            :disabled="pagination.current_page === 1"
            @click="changePage(pagination.current_page - 1)"
            class="p-2 border border-gray-200 rounded-lg disabled:opacity-50 hover:bg-gray-50 transition-colors"
          >
            <ChevronLeft class="w-4 h-4" />
          </button>
          <button 
            :disabled="pagination.current_page === pagination.last_page"
            @click="changePage(pagination.current_page + 1)"
            class="p-2 border border-gray-200 rounded-lg disabled:opacity-50 hover:bg-gray-50 transition-colors"
          >
            <ChevronRight class="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>

    <!-- Subscriptions Table -->
    <div v-else class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden text-sm">
      <div class="overflow-x-auto">
        <table class="w-full text-left border-collapse">
          <thead>
            <tr class="bg-gray-50/50">
              <th class="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">ID</th>
              <th class="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Student</th>
              <th class="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Plan</th>
              <th class="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Started At</th>
              <th class="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Expires At</th>
              <th class="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Status</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-50 font-medium">
            <tr v-if="loading" v-for="i in 5" :key="i" class="animate-pulse">
              <td colspan="6" class="px-6 py-4"><div class="h-4 bg-gray-100 rounded w-full"></div></td>
            </tr>
            <tr v-else-if="subscriptions.length === 0">
              <td colspan="6" class="px-6 py-12 text-center text-gray-500 font-bold uppercase tracking-widest text-xs">No subscriptions found.</td>
            </tr>
            <tr v-for="sub in subscriptions" :key="sub.id" class="hover:bg-gray-50/50 transition-colors">
              <td class="px-6 py-4">
                <span class="text-sm font-semibold text-gray-900 font-mono tracking-tighter">#SUB-{{ sub.id }}</span>
              </td>
              <td class="px-6 py-4">
                <div class="flex items-center space-x-3">
                  <div class="w-8 h-8 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 font-bold text-xs border border-indigo-100 shadow-sm">
                    {{ sub.user?.name?.charAt(0) }}
                  </div>
                  <div>
                    <p class="text-sm font-bold text-gray-900">{{ sub.user?.name }}</p>
                    <p class="text-[10px] text-gray-400 font-medium">{{ sub.user?.email }}</p>
                  </div>
                </div>
              </td>
              <td class="px-6 py-4">
                <span class="text-xs font-bold text-indigo-600 uppercase">{{ sub.subscription_plan?.name || 'N/A' }}</span>
              </td>
              <td class="px-6 py-4">
                <span class="text-xs text-gray-500 font-semibold">{{ formatDate(sub.started_at) }}</span>
              </td>
              <td class="px-6 py-4">
                <span class="text-xs text-gray-500 font-semibold">{{ formatDate(sub.expires_at) }}</span>
              </td>
              <td class="px-6 py-4">
                <span :class="['px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider', getStatusClass(sub.status)]">
                  {{ sub.status }}
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Pagination -->
      <div v-if="pagination.total > pagination.per_page" class="px-6 py-4 border-t border-gray-50 flex items-center justify-between">
        <p class="text-sm text-gray-500">
          Showing {{ pagination.from }} to {{ pagination.to }} of {{ pagination.total }} subscriptions
        </p>
        <div class="flex items-center space-x-2">
          <button 
            :disabled="pagination.current_page === 1"
            @click="changePage(pagination.current_page - 1)"
            class="p-2 border border-gray-200 rounded-lg disabled:opacity-50 hover:bg-gray-50 transition-colors"
          >
            <ChevronLeft class="w-4 h-4" />
          </button>
          <button 
            :disabled="pagination.current_page === pagination.last_page"
            @click="changePage(pagination.current_page + 1)"
            class="p-2 border border-gray-200 rounded-lg disabled:opacity-50 hover:bg-gray-50 transition-colors"
          >
            <ChevronRight class="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>

    <!-- Reject Modal -->
    <div v-if="showRejectModal" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md">
      <div class="bg-white rounded-3xl w-full max-w-md overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-200">
        <div class="px-8 py-6 border-b border-gray-50 flex items-center justify-between bg-indigo-600 text-white">
          <h3 class="font-bold text-lg">Reject Order #{{ selectedOrder?.id }}</h3>
          <button @click="showRejectModal = false" class="p-2 hover:bg-white/10 rounded-xl transition-colors">
            <X class="w-5 h-5" />
          </button>
        </div>
        <div class="p-8 space-y-4">
          <div>
            <label class="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Reason for Rejection</label>
            <textarea 
              v-model="rejectReason"
              rows="3"
              class="w-full px-4 py-3 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-indigo-500 text-sm outline-none transition-all"
              placeholder="e.g. Proof of payment is invalid..."
            ></textarea>
          </div>
        </div>
        <div class="px-8 py-6 bg-gray-50/50 flex items-center justify-end space-x-3">
          <button 
            @click="showRejectModal = false"
            class="px-6 py-2.5 text-sm font-bold text-gray-500 hover:text-gray-700 transition-colors"
          >
            Cancel
          </button>
          <button 
            @click="confirmReject"
            :disabled="rejecting"
            class="px-6 py-2.5 bg-red-600 text-white text-sm font-bold rounded-xl hover:bg-red-700 hover:shadow-lg transition-all disabled:opacity-50 flex items-center space-x-2"
          >
            <Loader2 v-if="rejecting" class="w-4 h-4 animate-spin" />
            <span>Confirm Reject</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { 
  Search, 
  CheckCircle, 
  XCircle, 
  Eye, 
  ChevronLeft, 
  ChevronRight,
  X,
  Loader2
} from 'lucide-vue-next';
import { ownerAPI } from '@/shared/services/api';
import { format } from 'date-fns';
import { useSwal } from '@/shared/composables/useSwal';

const { showConfirm, showSuccess, showError } = useSwal();

const activeTab = ref('orders');
const loading = ref(true);
const orders = ref<any[]>([]);
const subscriptions = ref<any[]>([]);
const search = ref('');
const statusFilter = ref('all');
const pagination = ref({
  current_page: 1,
  last_page: 1,
  total: 0,
  per_page: 15,
  from: 0,
  to: 0
});

const showRejectModal = ref(false);
const selectedOrder = ref<any>(null);
const rejectReason = ref('');
const rejecting = ref(false);

const switchTab = (tab: string) => {
  activeTab.value = tab;
  statusFilter.value = 'all';
  search.value = '';
  fetchData(1);
};

const fetchData = async (page = 1) => {
  if (activeTab.value === 'orders') {
    await fetchOrders(page);
  } else {
    await fetchSubscriptions(page);
  }
};

const fetchOrders = async (page = 1) => {
  try {
    loading.value = true;
    const response = await ownerAPI.getOrders({
      page,
      search: search.value,
      status: statusFilter.value
    });
    orders.value = response.data;
    updatePagination(response);
  } catch (error) {
    console.error('Failed to fetch orders:', error);
  } finally {
    loading.value = false;
  }
};

const fetchSubscriptions = async (page = 1) => {
  try {
    loading.value = true;
    const response = await ownerAPI.getSubscriptions({
      page,
      search: search.value,
      status: statusFilter.value
    });
    subscriptions.value = response.data;
    updatePagination(response);
  } catch (error) {
    console.error('Failed to fetch subscriptions:', error);
  } finally {
    loading.value = false;
  }
};

const updatePagination = (response: any) => {
  pagination.value = {
    current_page: response.current_page,
    last_page: response.last_page,
    total: response.total,
    per_page: response.per_page,
    from: response.from,
    to: response.to
  };
};

let searchTimeout: any = null;
const debounceSearch = () => {
  if (searchTimeout) clearTimeout(searchTimeout);
  searchTimeout = setTimeout(() => {
    fetchData(1);
  }, 500);
};

const changePage = (page: number) => {
  fetchData(page);
};

const handleApprove = async (order: any) => {
  if (await showConfirm('Approve Order', `Are you sure you want to approve order #ORD-${order.id}?`, 'Yes, Approve')) {
    try {
      await ownerAPI.approveOrder(order.id);
      showSuccess('Approved!', 'Order approved successfully');
      fetchOrders(pagination.value.current_page);
    } catch (error) {
      showError('Approval Failed', 'Failed to approve order');
    }
  }
};

const handleReject = (order: any) => {
  selectedOrder.value = order;
  rejectReason.value = '';
  showRejectModal.value = true;
};

const confirmReject = async () => {
  if (!selectedOrder.value) return;
  
  try {
    rejecting.value = true;
    await ownerAPI.rejectOrder(selectedOrder.value.id, { notes: rejectReason.value });
    showRejectModal.value = false;
    showSuccess('Rejected!', 'Order rejected successfully');
    fetchOrders(pagination.value.current_page);
  } catch (error) {
    showError('Rejection Failed', 'Failed to reject order');
  } finally {
    rejecting.value = false;
  }
};

const getStatusClass = (status: string) => {
  switch (status) {
    case 'pending': return 'bg-amber-100 text-amber-700';
    case 'approved': 
    case 'active': return 'bg-green-100 text-green-700';
    case 'rejected': 
    case 'expired': return 'bg-red-100 text-red-700';
    case 'cancelled': return 'bg-gray-100 text-gray-700';
    default: return 'bg-gray-100 text-gray-700';
  }
};

const formatDate = (dateString: string) => {
  if (!dateString) return 'N/A';
  return format(new Date(dateString), 'MMM dd, yyyy HH:mm');
};

onMounted(() => {
  fetchData();
});
</script>
