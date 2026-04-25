<template>
  <div class="space-y-6">
    <!-- Stats Widgets -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div 
        @click="filterStatus = 'all'"
        :class="[
          'p-6 rounded-2xl border transition-all cursor-pointer shadow-sm hover:shadow-md',
          filterStatus === 'all' ? 'bg-blue-600 border-blue-600 text-white' : 'bg-white border-gray-100 text-gray-800'
        ]"
      >
        <div class="flex justify-between items-center">
          <div>
            <p :class="['text-sm font-medium opacity-80', filterStatus === 'all' ? 'text-blue-100' : 'text-gray-500']">Total Tickets</p>
            <h4 class="text-2xl font-bold tracking-tight">{{ stats.all }}</h4>
          </div>
          <div :class="['p-3 rounded-xl', filterStatus === 'all' ? 'bg-blue-500/50' : 'bg-blue-50 text-blue-600']">
            <Ticket class="w-6 h-6" />
          </div>
        </div>
      </div>

      <div 
        @click="filterStatus = 'open'"
        :class="[
          'p-6 rounded-2xl border transition-all cursor-pointer shadow-sm hover:shadow-md',
          filterStatus === 'open' ? 'bg-amber-500 border-amber-500 text-white' : 'bg-white border-gray-100 text-gray-800'
        ]"
      >
        <div class="flex justify-between items-center">
          <div>
            <p :class="['text-sm font-medium opacity-80', filterStatus === 'open' ? 'text-amber-100' : 'text-gray-500']">Open Tickets</p>
            <h4 class="text-2xl font-bold tracking-tight">{{ stats.open }}</h4>
          </div>
          <div :class="['p-3 rounded-xl', filterStatus === 'open' ? 'bg-amber-400/50' : 'bg-amber-50 text-amber-600']">
            <Clock class="w-6 h-6" />
          </div>
        </div>
      </div>

      <div 
        @click="filterStatus = 'closed'"
        :class="[
          'p-6 rounded-2xl border transition-all cursor-pointer shadow-sm hover:shadow-md',
          filterStatus === 'closed' ? 'bg-green-600 border-green-600 text-white' : 'bg-white border-gray-100 text-gray-800'
        ]"
      >
        <div class="flex justify-between items-center">
          <div>
            <p :class="['text-sm font-medium opacity-80', filterStatus === 'closed' ? 'text-green-100' : 'text-gray-500']">Closed/Resolved</p>
            <h4 class="text-2xl font-bold tracking-tight">{{ stats.closed }}</h4>
          </div>
          <div :class="['p-3 rounded-xl', filterStatus === 'closed' ? 'bg-green-500/50' : 'bg-green-50 text-green-600']">
            <CheckCircle2 class="w-6 h-6" />
          </div>
        </div>
      </div>
    </div>

    <div class="flex h-[calc(100vh-20rem)] bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
    <!-- Sidebar: Ticket List -->
    <div class="w-1/3 border-r border-gray-100 flex flex-col">
      <div class="p-4 border-b border-gray-100 flex justify-between items-center">
        <h2 class="text-lg font-bold text-gray-800">Support Tickets</h2>
        <button 
          v-if="userRole === 'student'"
          @click="showCreateModal = true"
          class="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          title="Create New Ticket"
        >
          <Plus class="w-5 h-5" />
        </button>
      </div>
      
      <div class="p-4 bg-gray-50 border-b border-gray-100">
        <div class="relative">
          <Search class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input 
            v-model="searchQuery"
            type="text" 
            placeholder="Search tickets..." 
            class="w-full pl-10 pr-4 py-2 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      <div class="flex-1 overflow-y-auto">
        <div v-if="loading" class="p-8 text-center">
          <Loader2 class="w-8 h-8 animate-spin text-blue-500 mx-auto mb-2" />
          <p class="text-sm text-gray-500">Loading tickets...</p>
        </div>
        
        <div v-else-if="filteredTickets.length === 0" class="p-8 text-center text-gray-500">
          <LifeBuoy class="w-12 h-12 text-gray-200 mx-auto mb-3" />
          <p>No tickets found</p>
        </div>

        <div v-else>
          <div 
            v-for="ticket in filteredTickets" 
            :key="ticket.id"
            @click="selectTicket(ticket)"
            :class="[
              'p-4 border-b border-gray-50 cursor-pointer hover:bg-gray-50 transition-colors relative',
              selectedTicket?.id === ticket.id ? 'bg-blue-50 border-l-4 border-l-blue-600' : ''
            ]"
          >
            <div class="flex justify-between items-start mb-1">
              <h3 class="font-semibold text-gray-900 truncate pr-2">{{ ticket.subject }}</h3>
            <div class="flex flex-wrap gap-1 mb-2">
              <span :class="[
                'text-[9px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider',
                ticket.ticket_type === 'library' ? 'bg-indigo-100 text-indigo-700' : 'bg-purple-100 text-purple-700'
              ]">
                {{ ticket.ticket_type }}
              </span>
              <span :class="[
                'text-[9px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider',
                getStatusClass(ticket.status)
              ]">
                {{ ticket.status }}
              </span>
            </div>
          </div>
          <div class="flex justify-between items-center text-xs text-gray-500">
              <span class="flex items-center">
                <User class="w-3 h-3 mr-1" />
                {{ ticket.user?.name || 'User' }}
              </span>
              <span>{{ formatDate(ticket.created_at) }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Main Content: Chat View -->
    <div class="flex-1 flex flex-col bg-gray-50">
      <template v-if="selectedTicket">
        <!-- Header -->
        <div class="bg-white p-4 border-b border-gray-100 flex justify-between items-center shadow-sm">
          <div class="flex items-center space-x-4">
            <div class="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
              <User class="w-6 h-6" />
            </div>
            <div>
              <h3 class="font-bold text-gray-900">{{ selectedTicket.subject }}</h3>
              <p class="text-xs text-gray-500">
                Ticket #{{ selectedTicket.id }} • From: {{ selectedTicket.user?.name }} 
                <span :class="[
                  'ml-2 px-2 py-0.5 rounded text-[10px] uppercase font-bold',
                  selectedTicket.ticket_type === 'library' ? 'bg-indigo-50 text-indigo-600' : 'bg-purple-50 text-purple-600'
                ]">
                  {{ selectedTicket.ticket_type === 'library' ? 'Library Issue' : 'System Issue' }}
                </span>
                <span v-if="selectedTicket.library" class="ml-2 font-medium text-gray-700"> • {{ selectedTicket.library.name }}</span>
              </p>
            </div>
          </div>

          <div class="flex items-center space-x-2">
            <select 
              v-if="userRole !== 'student'"
              @change="handleStatusChange($event)"
              :value="selectedTicket.status"
              class="text-xs border border-gray-200 rounded-lg px-2 py-1 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="open">Open</option>
              <option value="in_progress">In Progress</option>
              <option value="resolved">Resolved</option>
              <option value="closed">Closed</option>
            </select>
            <button 
              v-else-if="['open', 'in_progress'].includes(selectedTicket.status)"
              @click="handleCloseTicket"
              class="text-xs px-3 py-1 bg-red-50 text-red-600 border border-red-100 rounded-lg hover:bg-red-100 transition-colors font-medium"
            >
              Close Ticket
            </button>
            <button 
              @click="fetchTicketDetails(selectedTicket.id)"
              class="p-2 text-gray-400 hover:text-blue-600 transition-colors"
              title="Refresh"
            >
              <RefreshCw class="w-4 h-4" />
            </button>
          </div>
        </div>

        <!-- Messages -->
        <div class="flex-1 overflow-y-auto p-6 space-y-4" ref="messageContainer">
          <div 
            v-for="message in selectedTicket.messages" 
            :key="message.id"
            :class="[
              'flex',
              message.user_id === currentUser.id ? 'justify-end' : 'justify-start'
            ]"
          >
            <div :class="[
              'max-w-[70%] p-4 rounded-2xl shadow-sm text-sm',
              message.user_id === currentUser.id 
                ? 'bg-blue-600 text-white rounded-br-none' 
                : 'bg-white text-gray-800 rounded-bl-none border border-gray-100'
            ]">
              <div v-if="message.user_id !== currentUser.id" class="flex items-center space-x-1 mb-1 opacity-70">
                <span class="font-bold text-[10px] uppercase tracking-wider">{{ message.user?.role || 'Support' }}</span>
                <span class="text-[10px]">• {{ message.user?.name }}</span>
              </div>
              <p class="whitespace-pre-wrap">{{ message.message }}</p>
              <div :class="[
                'text-[10px] mt-2 text-right',
                message.user_id === currentUser.id ? 'text-blue-100' : 'text-gray-400'
              ]">
                {{ formatFullDate(message.created_at) }}
              </div>
            </div>
          </div>
        </div>

        <!-- Input -->
        <div class="p-4 bg-white border-t border-gray-100">
          <div class="flex items-end space-x-2">
            <div class="flex-1 relative">
              <textarea 
                v-model="newMessage"
                rows="1"
                placeholder="Type your message..."
                class="w-full px-4 py-2 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                @keydown.enter.prevent="handleSendMessage"
              ></textarea>
            </div>
            <button 
              @click="handleSendMessage"
              :disabled="!newMessage.trim() || sending"
              class="p-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send v-if="!sending" class="w-5 h-5" />
              <Loader2 v-else class="w-5 h-5 animate-spin" />
            </button>
          </div>
          <p class="text-[10px] text-gray-400 mt-2 text-center">Press Enter to send (Shift+Enter for newline)</p>
        </div>
      </template>

      <div v-else class="flex-1 flex flex-col items-center justify-center p-12 text-center">
        <div class="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center text-blue-300 mb-6 animate-pulse">
          <LifeBuoy class="w-10 h-10" />
        </div>
        <h3 class="text-xl font-bold text-gray-800 mb-2">Welcome to Support</h3>
        <p class="text-gray-500 max-w-sm">Select a ticket from the list to view the conversation or create a new one to get help.</p>
        <button 
          v-if="userRole === 'student'"
          @click="showCreateModal = true"
          class="mt-6 px-6 py-2 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-all shadow-md hover:shadow-lg"
        >
          Create Your First Ticket
        </button>
      </div>
    </div>
  </div>

  <!-- Create Ticket Modal -->
    <div v-if="showCreateModal" class="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <div class="absolute inset-0 bg-black/50 backdrop-blur-sm" @click="showCreateModal = false"></div>
      <div class="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden animate-in fade-in zoom-in duration-200">
        <div class="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50">
          <div>
            <h3 class="text-xl font-bold text-gray-900">Create Support Ticket</h3>
            <p class="text-sm text-gray-500">How can we help you today?</p>
          </div>
          <button @click="showCreateModal = false" class="text-gray-400 hover:text-gray-600 p-2 rounded-lg hover:bg-gray-100">
            <X class="w-6 h-6" />
          </button>
        </div>
        
        <form @submit.prevent="handleCreateTicket" class="p-6 space-y-4">
          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-1">Subject</label>
            <input 
              v-model="createForm.subject"
              type="text"
              required
              placeholder="e.g., Seat booking issue, Library access"
              class="w-full px-4 py-2 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div class="grid grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-semibold text-gray-700 mb-1">Category</label>
              <select 
                v-model="createForm.ticket_type"
                class="w-full px-4 py-2 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="library">Library Issue</option>
                <option value="system">System Issue</option>
              </select>
            </div>
            <div>
              <label class="block text-sm font-semibold text-gray-700 mb-1">Priority</label>
              <select 
                v-model="createForm.priority"
                class="w-full px-4 py-2 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
                <option value="urgent">Urgent</option>
              </select>
            </div>
          </div>

          <div v-if="createForm.ticket_type === 'library'">
            <label class="block text-sm font-semibold text-gray-700 mb-1">Select Library</label>
            <select 
              v-model="createForm.library_id"
              required
              class="w-full px-4 py-2 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option :value="null" disabled>Select a library</option>
              <option v-for="lib in libraries" :key="lib.id" :value="lib.id">{{ lib.name }}</option>
            </select>
          </div>

          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-1">Description</label>
            <textarea 
              v-model="createForm.message"
              required
              rows="4"
              placeholder="Please describe your problem in detail..."
              class="w-full px-4 py-2 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
            ></textarea>
          </div>

          <div class="pt-2 flex space-x-3">
            <button 
              type="button" 
              @click="showCreateModal = false"
              class="flex-1 px-4 py-2 text-gray-700 font-semibold hover:bg-gray-100 rounded-xl transition-colors"
            >
              Cancel
            </button>
            <button 
              type="submit"
              :disabled="creating"
              class="flex-1 px-4 py-2 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all shadow-md disabled:opacity-50"
            >
              <span v-if="!creating">Submit Ticket</span>
              <Loader2 v-else class="w-5 h-5 animate-spin mx-auto" />
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed, watch, nextTick } from 'vue';
import { 
  Plus, 
  Search, 
  User, 
  RefreshCw, 
  Send, 
  X, 
  Loader2, 
  LifeBuoy,
  Ticket,
  Clock,
  CheckCircle2
} from 'lucide-vue-next';
import { supportAPI, studentAPI } from '@/services/api';
import { useAuth } from '@/shared/composables/useAuth';
import { useSwal } from '@/shared/composables/useSwal';
import { SupportTicket, Library } from '@/shared/types';
import { format, formatDistanceToNow } from 'date-fns';

const props = defineProps<{
  role: 'student' | 'librarian' | 'admin';
}>();

const { user: currentUser } = useAuth();
const { toast } = useSwal();

const userRole = computed(() => props.role);
const tickets = ref<SupportTicket[]>([]);
const libraries = ref<Library[]>([]);
const loading = ref(true);
const selectedTicket = ref<SupportTicket | null>(null);
const searchQuery = ref('');
const newMessage = ref('');
const sending = ref(false);
const creating = ref(false);
const showCreateModal = ref(false);
const messageContainer = ref<HTMLElement | null>(null);
const filterStatus = ref<'all' | 'open' | 'closed'>('all');

const stats = computed(() => {
  const all = tickets.value.length;
  const open = tickets.value.filter(t => ['open', 'in_progress'].includes(t.status)).length;
  const closed = tickets.value.filter(t => ['resolved', 'closed'].includes(t.status)).length;
  return { all, open, closed };
});

const createForm = ref({
  subject: '',
  message: '',
  priority: 'medium',
  ticket_type: 'library' as 'library' | 'system',
  library_id: null as number | null,
});

const filteredTickets = computed(() => {
  let list = tickets.value;
  
  if (filterStatus.value === 'open') {
    list = list.filter(t => ['open', 'in_progress'].includes(t.status));
  } else if (filterStatus.value === 'closed') {
    list = list.filter(t => ['resolved', 'closed'].includes(t.status));
  }

  if (!searchQuery.value) return list;
  const query = searchQuery.value.toLowerCase();
  return list.filter(t => 
    t.subject.toLowerCase().includes(query) || 
    t.user?.name.toLowerCase().includes(query)
  );
});

const fetchTickets = async () => {
  try {
    loading.value = true;
    tickets.value = await supportAPI.getTickets(userRole.value);
  } catch (error) {
    toast('Error', 'Could not load tickets', 'error');
  } finally {
    loading.value = false;
  }
};

const fetchLibraries = async () => {
  if (userRole.value !== 'student') return;
  try {
    libraries.value = await studentAPI.getLibraries();
  } catch (error) {
    console.error('Error loading libraries', error);
  }
};

const selectTicket = async (ticket: SupportTicket) => {
  selectedTicket.value = ticket;
  await fetchTicketDetails(ticket.id);
};

const fetchTicketDetails = async (id: number) => {
  try {
    const details = await supportAPI.getTicket(userRole.value, id);
    selectedTicket.value = details;
    scrollToBottom();
  } catch (error) {
    toast('Error', 'Could not load ticket details', 'error');
  }
};

const handleSendMessage = async () => {
  if (!newMessage.value.trim() || !selectedTicket.value || sending.value) return;

  try {
    sending.value = true;
    const message = await supportAPI.sendMessage(
      userRole.value, 
      selectedTicket.value.id, 
      newMessage.value
    );
    
    if (selectedTicket.value.messages) {
      selectedTicket.value.messages.push(message);
    } else {
      selectedTicket.value.messages = [message];
    }
    
    newMessage.value = '';
    scrollToBottom();
  } catch (error) {
    toast('Error', 'Could not send message', 'error');
  } finally {
    sending.value = false;
  }
};

const handleCreateTicket = async () => {
  if (createForm.value.ticket_type === 'library' && !createForm.value.library_id) {
    toast('Wait', 'Please select a library for library issues', 'warning');
    return;
  }

  try {
    creating.value = true;
    const ticket = await supportAPI.createTicket(createForm.value);
    tickets.value.unshift(ticket);
    selectedTicket.value = ticket;
    showCreateModal.value = false;
    createForm.value = { 
      subject: '', 
      message: '', 
      priority: 'medium', 
      ticket_type: 'library',
      library_id: null 
    };
    toast('Success', 'Ticket created successfully', 'success');
  } catch (error) {
    toast('Error', 'Could not create ticket', 'error');
  } finally {
    creating.value = false;
  }
};

const handleStatusChange = async (event: any) => {
  if (!selectedTicket.value) return;
  const newStatus = event.target.value;
  try {
    await supportAPI.updateStatus(userRole.value, selectedTicket.value.id, newStatus);
    selectedTicket.value.status = newStatus;
    // Update in list too
    const index = tickets.value.findIndex(t => t.id === selectedTicket.value!.id);
    if (index !== -1) tickets.value[index].status = newStatus;
    toast('Status Updated', `Ticket is now ${newStatus}`, 'success');
  } catch (error) {
    toast('Error', 'Could not update status', 'error');
  }
};

const handleCloseTicket = async () => {
  if (!selectedTicket.value) return;
  try {
    const result = await supportAPI.updateStatus(userRole.value, selectedTicket.value.id, 'closed');
    selectedTicket.value.status = 'closed';
    const index = tickets.value.findIndex(t => t.id === selectedTicket.value!.id);
    if (index !== -1) tickets.value[index].status = 'closed';
    toast('Success', 'Ticket closed successfully', 'success');
  } catch (error) {
    toast('Error', 'Could not close ticket', 'error');
  }
};

const scrollToBottom = () => {
  nextTick(() => {
    if (messageContainer.value) {
      messageContainer.value.scrollTop = messageContainer.value.scrollHeight;
    }
  });
};

const formatDate = (dateString: string) => {
  return formatDistanceToNow(new Date(dateString), { addSuffix: true });
};

const formatFullDate = (dateString: string) => {
  return format(new Date(dateString), 'MMM d, yyyy h:mm a');
};

const getStatusClass = (status: string) => {
  switch (status) {
    case 'open': return 'bg-green-100 text-green-700';
    case 'in_progress': return 'bg-blue-100 text-blue-700';
    case 'resolved': return 'bg-gray-100 text-gray-700';
    case 'closed': return 'bg-red-100 text-red-700';
    default: return 'bg-gray-100 text-gray-700';
  }
};

onMounted(() => {
  fetchTickets();
  fetchLibraries();
});

watch(selectedTicket, () => {
  scrollToBottom();
});
</script>

<style scoped>
.animate-in {
  animation: animate-in 0.2s ease-out;
}

@keyframes animate-in {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
</style>
