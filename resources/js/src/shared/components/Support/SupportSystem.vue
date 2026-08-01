<template>
  <div class="space-y-6 text-slate-700">
    
    <!-- Stats Cards Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-5">
      
      <!-- Total Tickets Card -->
      <div 
        @click="filterStatus = 'all'"
        :class="[
          'p-5 rounded-2xl border transition-all cursor-pointer shadow-sm relative overflow-hidden group text-left flex flex-col justify-between min-h-[110px]',
          filterStatus === 'all' 
            ? (userRole === 'student' 
                ? 'bg-gradient-to-br from-blue-600 to-blue-700 border-blue-700 text-white shadow-blue-500/10' 
                : (userRole === 'admin' 
                    ? 'bg-gradient-to-br from-purple-600 to-purple-700 border-purple-650 text-white shadow-purple-500/10' 
                    : 'bg-gradient-to-br from-emerald-600 to-teal-700 border-emerald-600 text-white shadow-emerald-500/10'))
            : 'bg-white border-slate-100 hover:border-slate-200 hover:translate-y-[-1px] text-slate-800'
        ]"
      >
        <div class="absolute -right-6 -top-6 text-slate-50/10 group-hover:scale-105 transition-transform duration-500 pointer-events-none">
          <Ticket class="w-20 h-20 stroke-1" :class="filterStatus === 'all' ? 'text-white/5' : 'text-slate-100'" />
        </div>
        <div class="flex justify-between items-start relative z-10">
          <div>
            <p :class="['text-[10px] font-bold uppercase tracking-wider', filterStatus === 'all' ? 'text-white/80' : 'text-slate-400']">Total Tickets</p>
            <h4 class="text-3xl font-extrabold mt-2 tracking-tight">{{ stats.all }}</h4>
          </div>
          <div :class="['p-2.5 rounded-xl border', filterStatus === 'all' ? 'bg-white/10 border-white/20 text-white' : 'bg-slate-50 border-slate-100 text-slate-500']">
            <Ticket class="w-4 h-4" />
          </div>
        </div>
      </div>

      <!-- Open Tickets Card -->
      <div 
        @click="filterStatus = 'open'"
        :class="[
          'p-5 rounded-2xl border transition-all cursor-pointer shadow-sm relative overflow-hidden group text-left flex flex-col justify-between min-h-[110px]',
          filterStatus === 'open'
            ? (userRole === 'student' 
                ? 'bg-gradient-to-br from-blue-600 to-blue-700 border-blue-700 text-white shadow-blue-500/10' 
                : (userRole === 'admin' 
                    ? 'bg-gradient-to-br from-purple-600 to-purple-700 border-purple-650 text-white shadow-purple-500/10' 
                    : 'bg-gradient-to-br from-emerald-600 to-teal-700 border-emerald-600 text-white shadow-emerald-500/10'))
            : 'bg-white border-slate-100 hover:border-slate-200 hover:translate-y-[-1px] text-slate-800'
        ]"
      >
        <div class="absolute -right-6 -top-6 text-slate-50/10 group-hover:scale-105 transition-transform duration-500 pointer-events-none">
          <Clock class="w-20 h-20 stroke-1" :class="filterStatus === 'open' ? 'text-white/5' : 'text-slate-100'" />
        </div>
        <div class="flex justify-between items-start relative z-10">
          <div>
            <p :class="['text-[10px] font-bold uppercase tracking-wider', filterStatus === 'open' ? 'text-white/80' : 'text-slate-400']">Open Tickets</p>
            <h4 class="text-3xl font-extrabold mt-2 tracking-tight">{{ stats.open }}</h4>
          </div>
          <div :class="['p-2.5 rounded-xl border', filterStatus === 'open' ? 'bg-white/10 border-white/20 text-white' : 'bg-amber-50 border-amber-100/80 text-amber-600']">
            <Clock class="w-4 h-4" />
          </div>
        </div>
      </div>

      <!-- Resolved Tickets Card -->
      <div 
        @click="filterStatus = 'closed'"
        :class="[
          'p-5 rounded-2xl border transition-all cursor-pointer shadow-sm relative overflow-hidden group text-left flex flex-col justify-between min-h-[110px]',
          filterStatus === 'closed'
            ? (userRole === 'student' 
                ? 'bg-gradient-to-br from-blue-600 to-blue-700 border-blue-700 text-white shadow-blue-500/10' 
                : (userRole === 'admin' 
                    ? 'bg-gradient-to-br from-purple-600 to-purple-700 border-purple-650 text-white shadow-purple-500/10' 
                    : 'bg-gradient-to-br from-emerald-600 to-teal-700 border-emerald-600 text-white shadow-emerald-500/10'))
            : 'bg-white border-slate-100 hover:border-slate-200 hover:translate-y-[-1px] text-slate-800'
        ]"
      >
        <div class="absolute -right-6 -top-6 text-slate-50/10 group-hover:scale-105 transition-transform duration-500 pointer-events-none">
          <CheckCircle2 class="w-20 h-20 stroke-1" :class="filterStatus === 'closed' ? 'text-white/5' : 'text-slate-100'" />
        </div>
        <div class="flex justify-between items-start relative z-10">
          <div>
            <p :class="['text-[10px] font-bold uppercase tracking-wider', filterStatus === 'closed' ? 'text-white/80' : 'text-slate-400']">Resolved / Closed</p>
            <h4 class="text-3xl font-extrabold mt-2 tracking-tight">{{ stats.closed }}</h4>
          </div>
          <div :class="['p-2.5 rounded-xl border', filterStatus === 'closed' ? 'bg-white/10 border-white/20 text-white' : 'bg-emerald-50 border-emerald-100/80 text-emerald-600']">
            <CheckCircle2 class="w-4 h-4" />
          </div>
        </div>
      </div>
    </div>

    <!-- Main Live Chat Dashboard Container -->
    <div class="flex h-[calc(100vh-22rem)] min-h-[500px] bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
      
      <!-- Left sidebar: Ticket List -->
      <div class="w-1/3 border-r border-slate-100 flex flex-col bg-slate-50/20">
        
        <!-- List Header -->
        <div class="p-4 border-b border-slate-100 flex justify-between items-center bg-white text-left">
          <h2 class="text-xs font-bold text-slate-850 uppercase tracking-wider">Tickets</h2>
          <button 
            v-if="userRole === 'student'"
            @click="showCreateModal = true"
            class="p-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow-sm hover:shadow active:scale-95 transition-all flex items-center justify-center cursor-pointer border border-transparent"
            title="Create New Ticket"
          >
            <Plus class="w-4 h-4" />
          </button>
        </div>
        
        <!-- Search bar -->
        <div class="p-3 bg-white border-b border-slate-50">
          <div class="relative">
            <Search class="absolute left-3.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400" />
            <input 
              v-model="searchQuery"
              type="text" 
              placeholder="Search tickets..." 
              class="w-full pl-9 pr-4 py-2 border border-slate-200 focus:border-slate-350 focus:bg-white rounded-xl text-xs font-semibold focus:outline-none focus:ring-4 focus:ring-slate-100/50 bg-slate-50/50 transition-all outline-none"
            />
          </div>
        </div>

        <!-- Ticket Rows -->
        <div class="flex-1 overflow-y-auto divide-y divide-slate-100/50">
          
          <div v-if="loading" class="p-8 text-center flex flex-col items-center justify-center h-full">
            <Loader2 class="w-6 h-6 animate-spin text-slate-400 mb-2" />
            <p class="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Loading tickets...</p>
          </div>
          
          <div v-else-if="filteredTickets.length === 0" class="p-8 text-center text-slate-400 flex flex-col items-center justify-center h-full">
            <LifeBuoy class="w-8 h-8 text-slate-200 mb-3" />
            <p class="text-xs font-semibold tracking-wide italic text-slate-400">No tickets found.</p>
          </div>

          <template v-else>
            <div 
              v-for="ticket in filteredTickets" 
              :key="ticket.id"
              @click="selectTicket(ticket)"
              :class="[
                'p-4 cursor-pointer hover:bg-slate-50/50 transition-all text-left border-l-4 relative',
                selectedTicket?.id === ticket.id 
                  ? (userRole === 'student' 
                      ? 'bg-blue-50/30 border-blue-600' 
                      : (userRole === 'admin' ? 'bg-purple-50/30 border-purple-600' : 'bg-emerald-50/30 border-emerald-600'))
                  : 'border-transparent'
              ]"
            >
              <!-- Ticket Title and status pills -->
              <div class="flex justify-between items-start gap-2 mb-2">
                <h3 :class="['text-xs font-bold truncate pr-1', selectedTicket?.id === ticket.id ? 'text-slate-800' : 'text-slate-750']">
                  {{ ticket.subject }}
                </h3>
                <div class="flex flex-shrink-0 gap-1.5 items-center">
                  <!-- Category -->
                  <span :class="[
                    'text-[8px] px-2 py-0.5 rounded-md font-bold uppercase tracking-wide border',
                    ticket.ticket_type === 'library' ? 'bg-indigo-50 border-indigo-100 text-indigo-700' : 'bg-amber-50 border-amber-100 text-amber-700'
                  ]">
                    {{ ticket.ticket_type }}
                  </span>
                  <!-- Status -->
                  <span :class="[
                    'text-[8px] px-2 py-0.5 rounded-md font-bold uppercase tracking-wide border',
                    getStatusClass(ticket.status)
                  ]">
                    {{ ticket.status.replace('_', ' ') }}
                  </span>
                </div>
              </div>

              <!-- Ticket description snippet / author details -->
              <p class="text-[10px] text-slate-400 line-clamp-1 mb-3 pr-2 font-medium">{{ ticket.messages?.[0]?.message || 'No messages' }}</p>

              <!-- Footer with author & date -->
              <div class="flex justify-between items-center text-[10px] text-slate-450 font-semibold mt-1">
                <span class="flex items-center text-slate-500">
                  <User class="w-3.5 h-3.5 mr-1 text-slate-400" />
                  {{ ticket.user?.name || 'User' }}
                </span>
                <span class="text-slate-400">{{ formatDate(ticket.created_at) }}</span>
              </div>

              <!-- Priority Indicator Dot -->
              <span 
                :class="[
                  'absolute right-3 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full',
                  ticket.priority === 'urgent' ? 'bg-red-500' :
                  ticket.priority === 'high' ? 'bg-orange-500' :
                  ticket.priority === 'medium' ? 'bg-blue-500' : 'bg-slate-300'
                ]"
                :title="`Priority: ${ticket.priority}`"
              ></span>
            </div>
          </template>
        </div>
      </div>

      <!-- Right Main Content Area: Chat View -->
      <div class="flex-1 flex flex-col bg-slate-50/30">
        <template v-if="selectedTicket">
          
          <!-- Conversation Header -->
          <div class="bg-white p-4 border-b border-slate-100 flex justify-between items-center shadow-sm relative z-10 text-left">
            <div class="flex items-center space-x-3.5">
              <div class="w-9 h-9 border border-slate-100 rounded-xl bg-slate-50 flex items-center justify-center text-slate-600">
                <User class="w-4 h-4" />
              </div>
              <div>
                <h3 class="font-bold text-slate-800 text-sm leading-tight">{{ selectedTicket.subject }}</h3>
                <p class="text-[10px] text-slate-400 mt-1 font-semibold flex flex-wrap items-center gap-1.5 leading-none">
                  Ticket #{{ selectedTicket.id }} • From: <span class="font-bold text-slate-500">{{ selectedTicket.user?.name }}</span>
                  <span class="px-1.5 py-0.5 rounded bg-slate-50 border border-slate-100 text-[8px] uppercase font-bold text-slate-500">
                    {{ selectedTicket.ticket_type }}
                  </span>
                  <span v-if="selectedTicket.library" class="text-slate-550 font-bold">• {{ selectedTicket.library.name }}</span>
                </p>
              </div>
            </div>

            <!-- Header Action Controls -->
            <div class="flex items-center space-x-2">
              <select 
                v-if="userRole !== 'student'"
                @change="handleStatusChange($event)"
                :value="selectedTicket.status"
                :disabled="selectedTicket.status === 'closed'"
                class="text-[11px] font-bold text-slate-600 bg-slate-50 border border-slate-200 rounded-xl px-2.5 py-1.5 focus:outline-none focus:ring-4 focus:ring-slate-100/50 cursor-pointer transition-all disabled:opacity-75 disabled:cursor-not-allowed"
              >
                <option value="open">Open</option>
                <option value="in_progress">In Progress</option>
                <option value="resolved">Resolved</option>
                <option value="closed">Closed</option>
              </select>
              
              <button 
                v-else-if="['open', 'in_progress', 'resolved'].includes(selectedTicket.status)"
                @click="handleCloseTicket"
                class="text-[10px] px-3 py-1.5 bg-rose-50 hover:bg-rose-100 text-rose-600 border border-rose-200/50 rounded-xl transition-all font-bold uppercase tracking-wider cursor-pointer"
              >
                Close Ticket
              </button>
              
              <span v-if="selectedTicket.status === 'closed'" class="px-2.5 py-1 rounded-xl bg-slate-100 border border-slate-200 text-slate-500 text-[10px] font-bold uppercase tracking-wider flex items-center gap-1">
                <Lock class="w-3 h-3 text-slate-400" />
                Locked
              </span>

              <button 
                @click="fetchTicketDetails(selectedTicket.id)"
                class="p-2 text-slate-400 hover:text-slate-600 transition-colors cursor-pointer"
                title="Refresh Conversation"
              >
                <RefreshCw class="w-4 h-4" />
              </button>
            </div>
          </div>

          <!-- Chat Conversation Message Window -->
          <div class="flex-1 overflow-y-auto p-6 space-y-4 bg-slate-50/30" ref="messageContainer">
            <div 
              v-for="message in selectedTicket.messages" 
              :key="message.id"
              :class="[
                'flex text-left',
                message.user_id === currentUser?.id ? 'justify-end' : 'justify-start'
              ]"
            >
              <div :class="[
                'max-w-[70%] p-4 rounded-2xl text-xs font-medium leading-relaxed shadow-sm text-left relative',
                message.user_id === currentUser?.id 
                  ? (userRole === 'student' 
                      ? 'bg-blue-600 text-white rounded-br-none' 
                      : (userRole === 'admin' ? 'bg-purple-650 text-white rounded-br-none' : 'bg-emerald-700 text-white rounded-br-none'))
                  : 'bg-white text-slate-700 rounded-bl-none border border-slate-100/70'
              ]">
                <!-- Sender Metadata -->
                <div v-if="message.user_id !== currentUser?.id" class="flex items-center space-x-1 mb-1.5 opacity-80 text-[8px] font-bold text-slate-400 uppercase tracking-wider">
                  <span>{{ message.user?.role || 'Support' }}</span>
                  <span>•</span>
                  <span class="font-extrabold">{{ message.user?.name }}</span>
                </div>
                
                <p class="whitespace-pre-wrap">{{ message.message }}</p>
                
                <div :class="[
                  'text-[9px] font-bold mt-2 text-right',
                  message.user_id === currentUser?.id ? 'text-white/70' : 'text-slate-400'
                ]">
                  {{ formatFullDate(message.created_at) }}
                </div>
              </div>
            </div>
          </div>

          <!-- Chat Input Editor Window -->
          <div v-if="selectedTicket.status === 'closed'" class="p-4 bg-slate-100/80 border-t border-slate-200 text-center">
            <p class="text-xs font-bold text-slate-500 flex items-center justify-center gap-1.5">
              <Lock class="w-4 h-4 text-slate-400" />
              This complaint is completely closed and locked. No further messages can be sent.
            </p>
          </div>
          <div v-else class="p-4 bg-white border-t border-slate-100">
            <div class="flex items-end space-x-2">
              <div class="flex-1 relative">
                <textarea 
                  v-model="newMessage"
                  rows="1"
                  placeholder="Type your message..."
                  class="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 focus:border-slate-350 focus:bg-white rounded-xl text-xs font-semibold focus:outline-none focus:ring-4 focus:ring-slate-100/50 resize-none transition-all outline-none"
                  @keydown.enter.prevent="handleSendMessage"
                ></textarea>
              </div>
              <button 
                @click="handleSendMessage"
                :disabled="!newMessage.trim() || sending"
                :class="[
                  'p-2.5 text-white rounded-xl transition-all shadow-sm active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer border border-transparent',
                  userRole === 'student' 
                    ? 'bg-blue-600 hover:bg-blue-700' 
                    : (userRole === 'admin' ? 'bg-purple-650 hover:bg-purple-700' : 'bg-emerald-700 hover:bg-emerald-800')
                ]"
              >
                <Send v-if="!sending" class="w-4 h-4" />
                <Loader2 v-else class="w-4 h-4 animate-spin" />
              </button>
            </div>
            <p class="text-[9px] font-extrabold text-slate-400 uppercase tracking-widest mt-2.5 text-center">Press Enter to send (Shift+Enter for newline)</p>
          </div>
        </template>

        <!-- No Ticket Selected Empty State -->
        <div v-else class="flex-1 flex flex-col items-center justify-center p-12 text-center h-full">
          <div class="w-16 h-16 border border-slate-100 rounded-2xl flex items-center justify-center mb-5 bg-white text-slate-400">
            <LifeBuoy class="w-6 h-6 animate-pulse" />
          </div>
          <h3 class="text-sm font-bold text-slate-800 mb-1 uppercase tracking-wider">Support Desk</h3>
          <p class="text-xs text-slate-400 max-w-xs leading-relaxed font-semibold">Select a ticket from the left panel to open the conversation, or submit a new ticket for assistance.</p>
          <button 
            v-if="userRole === 'student'"
            @click="showCreateModal = true"
            class="mt-6 px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold transition-all shadow hover:shadow-md cursor-pointer border border-transparent"
          >
            New Support Ticket
          </button>
        </div>
      </div>
    </div>

    <!-- Create Ticket Modal -->
    <div v-if="showCreateModal" class="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
      <div class="relative bg-white rounded-3xl shadow-xl w-full max-w-md overflow-hidden border border-slate-100 text-left animate-in duration-200">
        
        <!-- Modal Header -->
        <div class="p-6 border-b border-slate-100 flex justify-between items-center text-left">
          <div>
            <h2 class="text-lg font-bold text-slate-800">Submit Support Ticket</h2>
          </div>
          <button @click="showCreateModal = false" class="p-2 hover:bg-slate-50 rounded-xl transition-colors cursor-pointer">
            <X class="w-5 h-5 text-slate-450" />
          </button>
        </div>
        
        <!-- Modal Form -->
        <form @submit.prevent="handleCreateTicket" class="p-6 space-y-4 text-left">
          <div>
            <label class="block text-xs font-bold text-slate-500 mb-1.5 uppercase tracking-wider">Subject</label>
            <input 
              v-model="createForm.subject"
              type="text"
              required
              placeholder="e.g., Seat Booking Issue, Library Card Access"
              class="w-full px-4 py-2 border border-slate-200 rounded-xl text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white transition-all outline-none bg-white"
            />
          </div>

          <div class="grid grid-cols-2 gap-4">
            <div>
              <label class="block text-xs font-bold text-slate-500 mb-1.5 uppercase tracking-wider">Category</label>
              <select 
                v-model="createForm.ticket_type"
                class="w-full px-4 py-2 border border-slate-200 rounded-xl text-xs font-bold text-slate-655 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white transition-all outline-none bg-white cursor-pointer"
              >
                <option value="library">Library Issue</option>
                <option value="system">System Issue</option>
              </select>
            </div>
            <div>
              <label class="block text-xs font-bold text-slate-500 mb-1.5 uppercase tracking-wider">Priority</label>
              <select 
                v-model="createForm.priority"
                class="w-full px-4 py-2 border border-slate-200 rounded-xl text-xs font-bold text-slate-655 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white transition-all outline-none bg-white cursor-pointer"
              >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
                <option value="urgent">Urgent</option>
              </select>
            </div>
          </div>

          <!-- Select Library (Conditional) -->
          <div v-if="createForm.ticket_type === 'library'">
            <label class="block text-xs font-bold text-slate-500 mb-1.5 uppercase tracking-wider">Select Library</label>
            <select 
              v-model="createForm.library_id"
              required
              class="w-full px-4 py-2 border border-slate-200 rounded-xl text-xs font-bold text-slate-655 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white transition-all outline-none bg-white cursor-pointer"
            >
              <option :value="null" disabled>Select a library</option>
              <option v-for="lib in libraries" :key="lib.id" :value="lib.id">{{ lib.name }}</option>
            </select>
          </div>

          <div>
            <label class="block text-xs font-bold text-slate-500 mb-1.5 uppercase tracking-wider">Description</label>
            <textarea 
              v-model="createForm.message"
              required
              rows="4"
              placeholder="Describe your issue in detail..."
              class="w-full px-4 py-2 border border-slate-200 rounded-xl text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white transition-all outline-none bg-white resize-none"
            ></textarea>
          </div>

          <div class="pt-2 flex space-x-3">
            <button 
              type="button" 
              @click="showCreateModal = false"
              class="flex-1 px-4 py-2.5 text-xs text-slate-550 font-bold bg-white hover:bg-slate-50 border border-slate-200 rounded-xl transition-all cursor-pointer"
            >
              Cancel
            </button>
            <button 
              type="submit"
              :disabled="creating"
              class="flex-1 px-4 py-2.5 bg-blue-600 border border-blue-700 text-white text-xs font-bold rounded-xl hover:bg-blue-750 transition-all shadow-sm active:scale-98 disabled:opacity-50 cursor-pointer"
            >
              <span v-if="!creating">Submit Ticket</span>
              <Loader2 v-else class="w-4 h-4 animate-spin mx-auto" />
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
  CheckCircle2,
  Building2,
  Lock
} from 'lucide-vue-next';
import { supportAPI, studentAPI } from '@/shared/services/api';
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

  if (selectedTicket.value.status === 'closed') {
    toast('Closed Complaint', 'This complaint is closed and cannot receive new messages.', 'warning');
    return;
  }

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
  } catch (error: any) {
    const msg = error.response?.data?.message || 'Could not send message';
    toast('Error', msg, 'error');
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
    const payload = { ...createForm.value };
    if (payload.ticket_type === 'system') payload.library_id = null;
    
    const ticket = await supportAPI.createTicket(payload);
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

  if (selectedTicket.value.status === 'closed' && newStatus !== 'closed') {
    toast('Closed Complaint', 'This complaint is permanently closed and cannot be reopened.', 'warning');
    event.target.value = 'closed';
    return;
  }

  try {
    await supportAPI.updateStatus(userRole.value, selectedTicket.value.id, newStatus);
    selectedTicket.value.status = newStatus;
    // Update in list too
    const index = tickets.value.findIndex(t => t.id === selectedTicket.value!.id);
    if (index !== -1) tickets.value[index].status = newStatus;
    toast('Status Updated', `Ticket is now ${newStatus}`, 'success');
  } catch (error: any) {
    const msg = error.response?.data?.message || 'Could not update status';
    toast('Error', msg, 'error');
  }
};

const handleCloseTicket = async () => {
  if (!selectedTicket.value) return;
  try {
    await supportAPI.updateStatus(userRole.value, selectedTicket.value.id, 'closed');
    selectedTicket.value.status = 'closed';
    const index = tickets.value.findIndex(t => t.id === selectedTicket.value!.id);
    if (index !== -1) tickets.value[index].status = 'closed';
    toast('Success', 'Complaint closed successfully', 'success');
  } catch (error: any) {
    const msg = error.response?.data?.message || 'Could not close complaint';
    toast('Error', msg, 'error');
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
    case 'open': return 'bg-emerald-50 border-emerald-100 text-emerald-650';
    case 'in_progress': return 'bg-blue-50 border-blue-100 text-blue-650';
    case 'resolved': return 'bg-slate-50 border-slate-200 text-slate-500';
    case 'closed': return 'bg-red-50 border-red-100 text-red-650';
    default: return 'bg-slate-50 border-slate-200 text-slate-500';
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
.animate-fade-in {
  animation: fade-in 0.22s ease-out;
}

.animate-in {
  animation: animate-in 0.22s cubic-bezier(0.34, 1.56, 0.64, 1);
}

@keyframes animate-in {
  from {
    opacity: 0;
    transform: scale(0.96);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.bg-purple-650 {
  background-color: #8B5CF6;
}
.text-indigo-700 {
  color: #4338CA;
}
.text-indigo-650 {
  color: #4F46E5;
}
.text-amber-650 {
  color: #D97706;
}
.text-slate-850 {
  color: #1e293b;
}
.text-slate-550 {
  color: #64748b;
}
.text-slate-455 {
  color: #475569;
}
.text-slate-505 {
  color: #334155;
}
.text-red-655 {
  color: #ef4444;
}
</style>
