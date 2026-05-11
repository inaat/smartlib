<template>
  <div class="space-y-8 pb-12">
    <!-- Page Header -->
    <div>
      <h1 class="text-3xl font-black text-gray-900">Reports</h1>
      <p class="text-gray-500 mt-1">Generate, schedule, and export library reports</p>
    </div>

    <!-- Quick Generate Section -->
    <div>
      <h2 class="text-lg font-bold text-gray-800 mb-4 flex items-center">
        <Zap class="w-5 h-5 mr-2 text-amber-500" />
        Quick Generate
      </h2>
      <div class="space-y-3">
        <div
          v-for="summary in quickSummaries"
          :key="summary.label"
          class="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:shadow-md hover:border-purple-100 transition-all"
        >
          <div class="flex items-center gap-3">
            <div :class="['w-10 h-10 rounded-xl flex items-center justify-center', summary.bgColor]">
              <component :is="summary.icon" :class="['w-5 h-5', summary.iconColor]" />
            </div>
            <span class="font-bold text-gray-800">{{ summary.label }}</span>
          </div>
          <div class="flex items-center gap-2 flex-wrap">
            <button
              @click="exportReport(summary.type, 'pdf')"
              class="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-red-600 bg-red-50 hover:bg-red-100 border border-red-100 transition-all"
            >
              <FileText class="w-3.5 h-3.5" />
              Export PDF
            </button>
            <button
              @click="exportReport(summary.type, 'excel')"
              class="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-green-600 bg-green-50 hover:bg-green-100 border border-green-100 transition-all"
            >
              <Sheet class="w-3.5 h-3.5" />
              Export Excel
            </button>
            <button
              @click="openScheduleModal(summary.type, summary.label)"
              class="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-purple-600 bg-purple-50 hover:bg-purple-100 border border-purple-100 transition-all"
            >
              <Clock class="w-3.5 h-3.5" />
              Schedule
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Report Categories -->
    <div>
      <h2 class="text-lg font-bold text-gray-800 mb-4 flex items-center">
        <LayoutGrid class="w-5 h-5 mr-2 text-indigo-500" />
        Report Categories
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <div
          v-for="cat in reportCategories"
          :key="cat.type"
          class="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-lg hover:border-purple-100 transition-all group"
        >
          <div class="flex items-center gap-3 mb-3">
            <div :class="['w-10 h-10 rounded-xl flex items-center justify-center', cat.bgColor]">
              <component :is="cat.icon" :class="['w-5 h-5', cat.iconColor]" />
            </div>
            <h3 class="font-bold text-gray-900 text-base">{{ cat.label }}</h3>
          </div>
          <ul class="text-xs text-gray-500 mb-5 space-y-1 pl-1">
            <li v-for="desc in cat.descriptions" :key="desc" class="flex items-start">
              <span class="mr-1.5 text-gray-300">•</span>{{ desc }}
            </li>
          </ul>
          <div class="flex items-center gap-2 flex-wrap">
            <button
              @click="openExportModal(cat.type, cat.label, 'pdf')"
              class="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-[11px] font-bold text-red-600 bg-red-50 hover:bg-red-100 border border-red-100 transition-all"
            >
              <FileText class="w-3 h-3" />
              Export PDF
            </button>
            <button
              @click="openExportModal(cat.type, cat.label, 'excel')"
              class="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-[11px] font-bold text-green-600 bg-green-50 hover:bg-green-100 border border-green-100 transition-all"
            >
              <Sheet class="w-3 h-3" />
              Excel
            </button>
            <button
              @click="openScheduleModal(cat.type, cat.label)"
              class="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-[11px] font-bold text-purple-600 bg-purple-50 hover:bg-purple-100 border border-purple-100 transition-all"
            >
              <CalendarClock class="w-3 h-3" />
              Schedule
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Scheduled Reports / Report History Tabs -->
    <div class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
      <div class="flex border-b border-gray-100">
        <button
          @click="activeTab = 'scheduled'"
          :class="[
            'flex-1 sm:flex-none px-6 py-4 text-sm font-bold transition-all border-b-2',
            activeTab === 'scheduled' ? 'border-purple-600 text-purple-700 bg-purple-50/50' : 'border-transparent text-gray-500 hover:text-gray-700'
          ]"
        >
          <CalendarClock class="w-4 h-4 inline mr-1.5 -mt-0.5" />
          Scheduled Reports
        </button>
        <button
          @click="activeTab = 'history'"
          :class="[
            'flex-1 sm:flex-none px-6 py-4 text-sm font-bold transition-all border-b-2',
            activeTab === 'history' ? 'border-purple-600 text-purple-700 bg-purple-50/50' : 'border-transparent text-gray-500 hover:text-gray-700'
          ]"
        >
          <History class="w-4 h-4 inline mr-1.5 -mt-0.5" />
          Report History
        </button>
      </div>

      <!-- Scheduled Reports Table -->
      <div v-if="activeTab === 'scheduled'" class="p-6">
        <div v-if="scheduledReports.length === 0" class="text-center py-16">
          <CalendarClock class="w-12 h-12 text-gray-200 mx-auto mb-4" />
          <p class="text-gray-400 font-medium">No scheduled reports yet.</p>
          <p class="text-xs text-gray-300 mt-1">Click "Schedule" on any report above to create one.</p>
        </div>
        <div v-else class="overflow-x-auto">
          <table class="w-full text-sm">
            <thead>
              <tr class="text-xs text-gray-400 font-bold uppercase tracking-wider border-b border-gray-100">
                <th class="text-left py-3 px-3">Name</th>
                <th class="text-left py-3 px-3">Frequency</th>
                <th class="text-left py-3 px-3">Format</th>
                <th class="text-left py-3 px-3">Recipient</th>
                <th class="text-left py-3 px-3">Status</th>
                <th class="text-right py-3 px-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(sr, idx) in scheduledReports" :key="idx" class="border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
                <td class="py-3 px-3 font-bold text-gray-800">{{ sr.name }}</td>
                <td class="py-3 px-3 text-gray-600 capitalize">{{ sr.frequency }}</td>
                <td class="py-3 px-3">
                  <span class="px-2 py-0.5 rounded-md text-[10px] font-bold uppercase" :class="sr.format === 'pdf' ? 'bg-red-50 text-red-600' : 'bg-green-50 text-green-600'">
                    {{ sr.format }}
                  </span>
                </td>
                <td class="py-3 px-3 text-gray-500 text-xs">{{ sr.recipient }}</td>
                <td class="py-3 px-3">
                  <span :class="[
                    'inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase',
                    sr.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                  ]">
                    <span :class="['w-1.5 h-1.5 rounded-full', sr.status === 'active' ? 'bg-green-500' : 'bg-yellow-500']"></span>
                    {{ sr.status }}
                  </span>
                </td>
                <td class="py-3 px-3 text-right">
                  <div class="flex items-center justify-end gap-1">
                    <button @click="toggleScheduleStatus(idx)" class="p-1.5 rounded-lg hover:bg-purple-50 text-gray-400 hover:text-purple-600 transition-colors" :title="sr.status === 'active' ? 'Pause' : 'Resume'">
                      <Pause v-if="sr.status === 'active'" class="w-3.5 h-3.5" />
                      <Play v-else class="w-3.5 h-3.5" />
                    </button>
                    <button @click="runScheduledNow(idx)" class="p-1.5 rounded-lg hover:bg-blue-50 text-gray-400 hover:text-blue-600 transition-colors" title="Run Now">
                      <RefreshCw class="w-3.5 h-3.5" />
                    </button>
                    <button @click="deleteScheduled(idx)" class="p-1.5 rounded-lg hover:bg-red-50 text-gray-400 hover:text-red-600 transition-colors" title="Delete">
                      <Trash2 class="w-3.5 h-3.5" />
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Report History Table -->
      <div v-if="activeTab === 'history'" class="p-6">
        <div v-if="reportHistory.length === 0" class="text-center py-16">
          <History class="w-12 h-12 text-gray-200 mx-auto mb-4" />
          <p class="text-gray-400 font-medium">No reports generated yet.</p>
          <p class="text-xs text-gray-300 mt-1">Export a report above to see it here.</p>
        </div>
        <div v-else class="overflow-x-auto">
          <table class="w-full text-sm">
            <thead>
              <tr class="text-xs text-gray-400 font-bold uppercase tracking-wider border-b border-gray-100">
                <th class="text-left py-3 px-3">Report</th>
                <th class="text-left py-3 px-3">Type</th>
                <th class="text-left py-3 px-3">Format</th>
                <th class="text-left py-3 px-3">Generated</th>
                <th class="text-right py-3 px-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(h, idx) in reportHistory" :key="idx" class="border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
                <td class="py-3 px-3 font-bold text-gray-800">{{ h.name }}</td>
                <td class="py-3 px-3 text-gray-600 capitalize">{{ h.type }}</td>
                <td class="py-3 px-3">
                  <span class="px-2 py-0.5 rounded-md text-[10px] font-bold uppercase" :class="h.format === 'pdf' ? 'bg-red-50 text-red-600' : 'bg-green-50 text-green-600'">
                    {{ h.format }}
                  </span>
                </td>
                <td class="py-3 px-3 text-gray-500 text-xs">{{ h.generatedAt }}</td>
                <td class="py-3 px-3 text-right">
                  <button @click="downloadReport(h)" class="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-[11px] font-bold text-purple-600 bg-purple-50 hover:bg-purple-100 transition-all">
                    <Download class="w-3 h-3" />
                    Download
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <!-- Schedule Modal -->
    <div v-if="scheduleModal.show" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm" @click.self="scheduleModal.show = false">
      <div class="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl">
        <div class="flex items-center justify-between mb-6">
          <div>
            <h3 class="text-xl font-black text-gray-900">Schedule Report</h3>
            <p class="text-sm text-gray-500 mt-1">{{ scheduleModal.reportName }}</p>
          </div>
          <button @click="scheduleModal.show = false" class="p-2 rounded-xl hover:bg-gray-100 text-gray-400 transition-colors">
            <X class="w-5 h-5" />
          </button>
        </div>

        <div class="space-y-5">
          <!-- Frequency -->
          <div>
            <label class="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 block">Frequency</label>
            <div class="grid grid-cols-3 gap-2">
              <button
                v-for="f in ['daily', 'weekly', 'monthly']"
                :key="f"
                @click="scheduleModal.frequency = f"
                :class="[
                  'py-2.5 rounded-xl font-bold text-sm transition-all border-2 capitalize',
                  scheduleModal.frequency === f
                    ? 'bg-purple-600 text-white border-purple-600 shadow-lg shadow-purple-100'
                    : 'bg-gray-50 text-gray-600 border-gray-100 hover:border-purple-200'
                ]"
              >
                {{ f }}
              </button>
            </div>
          </div>

          <!-- Format -->
          <div>
            <label class="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 block">Format</label>
            <div class="grid grid-cols-2 gap-2">
              <button
                @click="scheduleModal.format = 'pdf'"
                :class="[
                  'py-2.5 rounded-xl font-bold text-sm transition-all border-2 flex items-center justify-center gap-2',
                  scheduleModal.format === 'pdf'
                    ? 'bg-red-50 text-red-700 border-red-300 shadow-sm'
                    : 'bg-gray-50 text-gray-600 border-gray-100 hover:border-red-200'
                ]"
              >
                <FileText class="w-4 h-4" /> PDF
              </button>
              <button
                @click="scheduleModal.format = 'excel'"
                :class="[
                  'py-2.5 rounded-xl font-bold text-sm transition-all border-2 flex items-center justify-center gap-2',
                  scheduleModal.format === 'excel'
                    ? 'bg-green-50 text-green-700 border-green-300 shadow-sm'
                    : 'bg-gray-50 text-gray-600 border-gray-100 hover:border-green-200'
                ]"
              >
                <Sheet class="w-4 h-4" /> Excel
              </button>
            </div>
          </div>

          <!-- Recipient Email -->
          <div>
            <label class="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 block">Recipient Email</label>
            <input
              v-model="scheduleModal.recipient"
              type="email"
              placeholder="admin@example.com"
              class="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
            />
          </div>

          <!-- Time -->
          <div>
            <label class="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 block">Send At</label>
            <input
              v-model="scheduleModal.time"
              type="time"
              class="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
            />
          </div>
        </div>

        <div class="flex gap-3 mt-8">
          <button
            @click="scheduleModal.show = false"
            class="flex-1 py-3 rounded-2xl font-bold text-gray-600 bg-gray-100 hover:bg-gray-200 transition-all"
          >
            Cancel
          </button>
          <button
            @click="saveSchedule"
            class="flex-1 py-3 rounded-2xl font-bold text-white bg-purple-600 hover:bg-purple-700 transition-all shadow-lg shadow-purple-100"
          >
            Save Schedule
          </button>
        </div>
      </div>
    </div>

    <!-- Export Timespan Modal -->
    <div v-if="exportModal.show" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm" @click.self="exportModal.show = false">
      <div class="bg-white rounded-3xl p-8 max-w-sm w-full shadow-2xl">
        <div class="flex items-center justify-between mb-6">
          <div>
            <h3 class="text-xl font-black text-gray-900">Export Report</h3>
            <p class="text-sm text-gray-500 mt-1">{{ exportModal.reportName }}</p>
          </div>
          <button @click="exportModal.show = false" class="p-2 rounded-xl hover:bg-gray-100 text-gray-400 transition-colors">
            <X class="w-5 h-5" />
          </button>
        </div>

        <!-- Timespan -->
        <div class="mb-6">
          <label class="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3 block">Time Period</label>
          <div class="grid grid-cols-3 gap-2">
            <button
              v-for="ts in timespanOptions"
              :key="ts.value"
              @click="exportModal.timespan = ts.value"
              :class="[
                'py-3 rounded-xl font-bold text-sm transition-all border-2',
                exportModal.timespan === ts.value
                  ? 'bg-purple-600 text-white border-purple-600 shadow-lg shadow-purple-100 scale-105'
                  : 'bg-gray-50 text-gray-600 border-gray-100 hover:border-purple-200 hover:bg-purple-50'
              ]"
            >
              {{ ts.label }}
            </button>
          </div>
        </div>

        <!-- Format indicator -->
        <div class="mb-6 p-4 rounded-2xl border" :class="exportModal.format === 'pdf' ? 'bg-red-50 border-red-100' : 'bg-green-50 border-green-100'">
          <div class="flex items-center gap-2">
            <FileText v-if="exportModal.format === 'pdf'" class="w-4 h-4 text-red-500" />
            <Sheet v-else class="w-4 h-4 text-green-500" />
            <span class="text-sm font-bold" :class="exportModal.format === 'pdf' ? 'text-red-700' : 'text-green-700'">{{ exportModal.format === 'pdf' ? 'PDF Document' : 'Excel Spreadsheet' }}</span>
          </div>
        </div>

        <div class="flex gap-3">
          <button
            @click="exportModal.show = false"
            class="flex-1 py-3 rounded-2xl font-bold text-gray-600 bg-gray-100 hover:bg-gray-200 transition-all"
          >
            Cancel
          </button>
          <button
            @click="confirmExport"
            class="flex-1 py-3 rounded-2xl font-bold text-white bg-purple-600 hover:bg-purple-700 transition-all shadow-lg shadow-purple-100"
          >
            Generate
          </button>
        </div>
      </div>
    </div>

    <!-- Export Progress Toast -->
    <Transition name="slide-up">
      <div v-if="exportToast.show" class="fixed bottom-6 right-6 z-50 bg-white rounded-2xl shadow-2xl border border-gray-100 p-5 flex items-center gap-4 min-w-[320px]">
        <div v-if="exportToast.status === 'loading'" class="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center">
          <RefreshCw class="w-5 h-5 text-purple-600 animate-spin" />
        </div>
        <div v-else class="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center">
          <CheckCircle class="w-5 h-5 text-green-600" />
        </div>
        <div>
          <p class="font-bold text-gray-800 text-sm">{{ exportToast.title }}</p>
          <p class="text-xs text-gray-500">{{ exportToast.subtitle }}</p>
        </div>
        <button @click="exportToast.show = false" class="ml-auto p-1 rounded-lg hover:bg-gray-100 text-gray-400">
          <X class="w-4 h-4" />
        </button>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue';
import { librarianAPI } from '@/shared/services/api';
import { useSwal } from '@/shared/composables/useSwal';
import {
  Zap, FileText, Sheet, Clock, LayoutGrid,
  CalendarClock, History, Download, Trash2,
  Pause, Play, RefreshCw, X, CheckCircle,
  Users, Calendar, Armchair, AlertTriangle, BookMarked, CalendarDays
} from 'lucide-vue-next';

const { showSuccess, showError } = useSwal();

const activeTab = ref<'scheduled' | 'history'>('scheduled');

// ---------- Quick Generate ----------
const quickSummaries = [
  { label: 'Generate Today Summary', type: 'today', icon: CalendarDays, bgColor: 'bg-blue-100', iconColor: 'text-blue-600' },
  { label: 'Generate Weekly Summary', type: 'weekly', icon: Calendar, bgColor: 'bg-emerald-100', iconColor: 'text-emerald-600' },
  { label: 'Generate Monthly Summary', type: 'monthly', icon: CalendarClock, bgColor: 'bg-purple-100', iconColor: 'text-purple-600' },
];

// ---------- Categories ----------
const reportCategories = [
  {
    label: 'Attendance', type: 'attendance', icon: Users,
    bgColor: 'bg-violet-100', iconColor: 'text-violet-600',
    descriptions: ['Reports, present/absent approx.', 'Daily and weekly summaries']
  },
  {
    label: 'Bookings', type: 'bookings', icon: Calendar,
    bgColor: 'bg-blue-100', iconColor: 'text-blue-600',
    descriptions: ['Reports, list, statistics', 'Peak hours analysis']
  },
  {
    label: 'Seat Utilization', type: 'seat_utilization', icon: Armchair,
    bgColor: 'bg-teal-100', iconColor: 'text-teal-600',
    descriptions: ['Search: seat, usage & utilizers', 'Availability heatmaps']
  },
  {
    label: 'Complaints', type: 'complaints', icon: AlertTriangle,
    bgColor: 'bg-red-100', iconColor: 'text-red-600',
    descriptions: ['Reports, mishapances & complaints', 'Resolution tracking']
  },
  {
    label: 'Books', type: 'books', icon: BookMarked,
    bgColor: 'bg-amber-100', iconColor: 'text-amber-600',
    descriptions: ['Report: books, genre, status', 'Reservation analytics']
  },
  {
    label: 'Events', type: 'events', icon: CalendarDays,
    bgColor: 'bg-indigo-100', iconColor: 'text-indigo-600',
    descriptions: ['View: scheduled, attendance stats', 'Participation tracking']
  },
];

// ---------- Scheduled Reports ----------
interface ScheduledReport {
  name: string;
  type: string;
  frequency: string;
  format: string;
  recipient: string;
  time: string;
  status: string;
}

const scheduledReports = ref<ScheduledReport[]>([]);

// Load from localStorage
const loadScheduledReports = () => {
  const saved = localStorage.getItem('librarian-scheduled-reports');
  if (saved) scheduledReports.value = JSON.parse(saved);
};

const saveScheduledReports = () => {
  localStorage.setItem('librarian-scheduled-reports', JSON.stringify(scheduledReports.value));
};

const toggleScheduleStatus = (idx: number) => {
  scheduledReports.value[idx].status = scheduledReports.value[idx].status === 'active' ? 'paused' : 'active';
  saveScheduledReports();
};

const deleteScheduled = (idx: number) => {
  scheduledReports.value.splice(idx, 1);
  saveScheduledReports();
  showSuccess('Deleted', 'Scheduled report removed.');
};

const runScheduledNow = (idx: number) => {
  const sr = scheduledReports.value[idx];
  exportReport(sr.type, sr.format as 'pdf' | 'excel');
};

// ---------- Report History ----------
interface ReportHistoryEntry {
  name: string;
  type: string;
  format: string;
  generatedAt: string;
}

const reportHistory = ref<ReportHistoryEntry[]>([]);

const loadReportHistory = () => {
  const saved = localStorage.getItem('librarian-report-history');
  if (saved) reportHistory.value = JSON.parse(saved);
};

const saveReportHistory = () => {
  localStorage.setItem('librarian-report-history', JSON.stringify(reportHistory.value));
};

const addToHistory = (name: string, type: string, format: string) => {
  const now = new Date();
  reportHistory.value.unshift({
    name,
    type,
    format,
    generatedAt: now.toLocaleString('en-PK', { dateStyle: 'medium', timeStyle: 'short' }),
  });
  if (reportHistory.value.length > 50) reportHistory.value.pop();
  saveReportHistory();
};

// ---------- Schedule Modal ----------
const scheduleModal = reactive({
  show: false,
  reportType: '',
  reportName: '',
  frequency: 'daily',
  format: 'pdf',
  recipient: '',
  time: '08:00',
});

const openScheduleModal = (type: string, name: string) => {
  scheduleModal.show = true;
  scheduleModal.reportType = type;
  scheduleModal.reportName = name;
  scheduleModal.frequency = 'daily';
  scheduleModal.format = 'pdf';
  scheduleModal.recipient = '';
  scheduleModal.time = '08:00';
};

const saveSchedule = () => {
  if (!scheduleModal.recipient) {
    showError('Missing Email', 'Please enter a recipient email address.');
    return;
  }
  scheduledReports.value.push({
    name: scheduleModal.reportName,
    type: scheduleModal.reportType,
    frequency: scheduleModal.frequency,
    format: scheduleModal.format,
    recipient: scheduleModal.recipient,
    time: scheduleModal.time,
    status: 'active',
  });
  saveScheduledReports();
  scheduleModal.show = false;
  showSuccess('Scheduled!', `${scheduleModal.reportName} will be sent ${scheduleModal.frequency} at ${scheduleModal.time}.`);
};

// ---------- Export Toast ----------
const exportToast = reactive({
  show: false,
  status: 'loading' as 'loading' | 'done',
  title: '',
  subtitle: '',
});

// ---------- Export Modal (Timespan) ----------
const timespanOptions = [
  { label: 'Today', value: 'today' },
  { label: 'Weekly', value: 'weekly' },
  { label: 'Monthly', value: 'monthly' },
];

const exportModal = reactive({
  show: false,
  reportType: '',
  reportName: '',
  format: 'pdf' as 'pdf' | 'excel',
  timespan: 'today',
});

const openExportModal = (type: string, name: string, format: 'pdf' | 'excel') => {
  exportModal.show = true;
  exportModal.reportType = type;
  exportModal.reportName = name;
  exportModal.format = format;
  exportModal.timespan = 'today';
};

const confirmExport = () => {
  const tsLabel = timespanOptions.find(t => t.value === exportModal.timespan)?.label || '';
  exportModal.show = false;
  // Pass combined label: e.g. "Attendance (Today)"
  exportReport(exportModal.reportType, exportModal.format, tsLabel);
};

// ---------- Export Report ----------
const getReportLabel = (type: string) => {
  const all = [...quickSummaries, ...reportCategories];
  return all.find(r => r.type === type)?.label || type;
};

const exportReport = async (type: string, format: 'pdf' | 'excel', timespanLabel?: string) => {
  const baseLabel = getReportLabel(type);
  const label = timespanLabel ? `${baseLabel} (${timespanLabel})` : baseLabel;
  exportToast.show = true;
  exportToast.status = 'loading';
  exportToast.title = `Generating ${label}...`;
  exportToast.subtitle = `Format: ${format.toUpperCase()}`;

  try {
    // Fetch all data in parallel
    const [dashboard, bookingsRes, attendanceRes, booksRes, eventsRes] = await Promise.allSettled([
      librarianAPI.getDashboard(),
      librarianAPI.getBookings({ per_page: 50 }),
      librarianAPI.getAttendance({ per_page: 50 }),
      librarianAPI.getBooks(),
      librarianAPI.getEvents(),
    ]);

    const dash = dashboard.status === 'fulfilled' ? dashboard.value : {};
    const bookings = bookingsRes.status === 'fulfilled' ? (bookingsRes.value?.data || bookingsRes.value || []) : [];
    const attendance = attendanceRes.status === 'fulfilled' ? (attendanceRes.value?.data || attendanceRes.value || []) : [];
    const books = booksRes.status === 'fulfilled' ? (Array.isArray(booksRes.value) ? booksRes.value : []) : [];
    const events = eventsRes.status === 'fulfilled' ? (Array.isArray(eventsRes.value) ? eventsRes.value : []) : [];

    const reportData = { dash, bookings, attendance, books, events };

    if (format === 'pdf') {
      const html = buildHTMLReport(type, label, reportData);
      printHTMLReport(html);
    } else {
      const csv = buildCSVReport(type, label, reportData);
      downloadAsFile(`${label.replace(/\s+/g, '_')}_${Date.now()}.csv`, csv, 'text/csv');
    }

    addToHistory(label, type, format);
    exportToast.status = 'done';
    exportToast.title = 'Report Generated!';
    exportToast.subtitle = `${label} (${format.toUpperCase()}) is ready.`;
    setTimeout(() => { exportToast.show = false; }, 3000);
  } catch (error) {
    exportToast.show = false;
    showError('Export Failed', 'Could not generate report. Please try again.');
  }
};

// ---------- Helpers ----------
const fmtDate = (d: any) => {
  if (!d) return '\u2014';
  const dt = new Date(d);
  return isNaN(dt.getTime()) ? String(d) : dt.toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' });
};
const fmtTime12 = (d: any) => {
  if (!d) return '\u2014';
  const dt = new Date(d);
  return isNaN(dt.getTime()) ? String(d) : dt.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });
};
const statusBadge = (status: string) => {
  const colors: Record<string, string> = {
    checked_in: '#059669', booked: '#d97706', checked_out: '#6366f1', cancelled: '#dc2626',
    confirmed: '#059669', completed: '#6366f1', pending: '#d97706', resolved: '#059669',
    open: '#d97706', available: '#059669',
  };
  const c = colors[status] || '#6b7280';
  return '<span style="display:inline-block;padding:2px 10px;border-radius:6px;font-size:11px;font-weight:700;color:#fff;background:' + c + ';text-transform:capitalize">' + status.replace(/_/g, ' ') + '</span>';
};

// ---------- HTML Report ----------
const buildHTMLReport = (_type: string, _label: string, d: any) => {
  const now = new Date();
  const dateStr = now.toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' });
  const libName = d.dash?.library?.name || 'Library';
  const stats = d.dash?.stats || {};
  const bookings: any[] = Array.isArray(d.bookings) ? d.bookings : [];
  const attendance: any[] = Array.isArray(d.attendance) ? d.attendance : [];
  const books: any[] = Array.isArray(d.books) ? d.books : [];
  const events: any[] = Array.isArray(d.events) ? d.events : [];

  const totalSeats = stats.total_seats || 0;
  const occupied = (stats.active_bookings || 0) + (stats.pending_bookings || 0);
  const available = stats.available_seats || 0;
  const utilPct = totalSeats > 0 ? Math.round((occupied / totalSeats) * 100) : 0;
  const availPct = totalSeats > 0 ? Math.round((available / totalSeats) * 100) : 0;

  const isSummary = ['today', 'weekly', 'monthly'].includes(_type);

  const attendRows = attendance.slice(0, 15).map((a: any) =>
    '<tr><td>' + (a.seat_number || a.seat?.seat_number || '\u2014') + '</td><td>' + (a.user?.name || a.student_name || '\u2014') + '</td><td>' + fmtTime12(a.check_in_time) + '</td><td>' + (a.status ? statusBadge(a.status) : (a.check_out_time ? statusBadge('completed') : statusBadge('checked_in'))) + '</td></tr>'
  ).join('');

  const bookingRows = bookings.slice(0, 15).map((b: any) =>
    '<tr><td>' + (b.seat?.seat_number || '\u2014') + '</td><td>' + (b.user?.name || '\u2014') + '</td><td>' + fmtTime12(b.booking_time) + ' - ' + fmtTime12(b.scheduled_end_time) + '</td><td>' + statusBadge(b.status) + '</td></tr>'
  ).join('');

  const bookRows = books.slice(0, 10).map((bk: any) =>
    '<tr><td>' + (bk.title || '\u2014') + '</td><td>' + (bk.author || '\u2014') + '</td><td>' + fmtDate(bk.created_at) + '</td></tr>'
  ).join('');

  const eventRows = events.slice(0, 10).map((ev: any) =>
    '<tr><td>' + (ev.title || '\u2014') + '</td><td>' + fmtDate(ev.date) + '</td><td>' + (ev.registrations_count ?? ev.joined_count ?? '\u2014') + '</td></tr>'
  ).join('');

  return '<!DOCTYPE html><html><head><meta charset="UTF-8"><title>Daily End-of-Day Report \u2014 ' + libName + '</title>' +
    '<style>' +
    '@page{size:A4;margin:20mm}' +
    '*{box-sizing:border-box}' +
    'body{font-family:"Segoe UI",system-ui,sans-serif;max-width:780px;margin:0 auto;color:#1e293b;padding:30px 20px;font-size:13px}' +
    '.header{display:flex;align-items:center;justify-content:space-between;margin-bottom:30px;padding-bottom:16px;border-bottom:3px solid #1e3a5f}' +
    '.header .logo{display:flex;align-items:center;gap:12px}' +
    '.header .logo-icon{width:48px;height:48px;background:#1e3a5f;border-radius:12px;display:flex;align-items:center;justify-content:center;color:#fff;font-size:22px;font-weight:800}' +
    '.header .lib-name{font-size:22px;font-weight:800;color:#1e3a5f}' +
    '.header .meta{text-align:right;font-size:11px;color:#64748b;line-height:1.6}' +
    '.header .meta strong{color:#1e3a5f}' +
    'h1{font-size:22px;color:#1e3a5f;margin:0 0 24px 0}' +
    'h2{font-size:15px;color:#1e3a5f;margin:28px 0 12px 0;display:flex;align-items:center;gap:8px}' +
    'h2 .icon{width:24px;height:24px;border-radius:6px;display:inline-flex;align-items:center;justify-content:center;font-size:13px}' +
    '.stat-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin:0 0 8px 0}' +
    '.stat-card{padding:16px;border-radius:10px;background:#f8fafc;border:1px solid #e2e8f0;text-align:center}' +
    '.stat-card .value{font-size:32px;font-weight:800;color:#1e3a5f}' +
    '.stat-card .label{font-size:11px;color:#64748b;margin-top:2px;text-transform:uppercase;letter-spacing:.05em;font-weight:600}' +
    '.stat-card .icon-sm{font-size:16px;margin-bottom:4px}' +
    'table{width:100%;border-collapse:collapse;margin:8px 0 20px 0;font-size:12px}' +
    'th{background:#1e3a5f;color:#fff;padding:8px 12px;text-align:left;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.04em}' +
    'td{padding:8px 12px;border-bottom:1px solid #e2e8f0}' +
    'tr:nth-child(even){background:#f8fafc}' +
    '.util-row{display:flex;align-items:center;margin-bottom:6px;font-size:12px}' +
    '.util-row .lbl{width:100px;color:#64748b;font-weight:600}' +
    '.util-row .val{width:60px;font-weight:700;color:#1e3a5f;text-align:right;margin-right:12px}' +
    '.bar-track{flex:1;height:22px;background:#e2e8f0;border-radius:6px;overflow:hidden}' +
    '.bar-fill{height:100%;border-radius:6px;display:flex;align-items:center;justify-content:flex-end;padding-right:8px;font-size:11px;font-weight:700;color:#fff}' +
    '.bar-green{background:#059669}' +
    '.bar-amber{background:#d97706}' +
    '.footer{margin-top:40px;padding-top:12px;border-top:1px solid #e2e8f0;text-align:center;font-size:10px;color:#94a3b8}' +
    '</style></head><body>' +
    '<div class="header"><div class="logo"><div class="logo-icon">\ud83d\udcda</div><span class="lib-name">' + libName + '</span></div>' +
    '<div class="meta">Date Generated: <strong>' + dateStr + '</strong><br>Generated By: <strong>Librarian</strong></div></div>' +
    '<h1>' + _label + ' Report</h1>' +
    (isSummary ? (
    '<h2><span class="icon" style="background:#dbeafe;color:#2563eb">\ud83d\udcca</span> Summary</h2>' +
    '<div class="stat-grid">' +
    '<div class="stat-card"><div class="icon-sm">\ud83d\udc65</div><div class="value">' + totalSeats + '</div><div class="label">Total Seats</div></div>' +
    '<div class="stat-card"><div class="icon-sm">\ud83d\udccb</div><div class="value">' + (stats.today_bookings || bookings.length) + '</div><div class="label">Total Bookings</div></div>' +
    '<div class="stat-card"><div class="icon-sm">\ud83d\udcba</div><div class="value">' + utilPct + '%</div><div class="label">Seats Utilized</div></div>' +
    '</div><div class="stat-grid">' +
    '<div class="stat-card"><div class="icon-sm">\ud83d\udea8</div><div class="value">' + (stats.pending_tickets || 0) + '</div><div class="label">Complaints</div></div>' +
    '<div class="stat-card"><div class="icon-sm">\ud83d\udcda</div><div class="value">' + (stats.total_books || books.length) + '</div><div class="label">Books</div></div>' +
    '<div class="stat-card"><div class="icon-sm">\ud83c\udf89</div><div class="value">' + (stats.total_events || events.length) + '</div><div class="label">Events Held</div></div>' +
    '</div>'
    ) : '') +
    (isSummary || _type === 'attendance' ? (
    '<h2><span class="icon" style="background:#ede9fe;color:#7c3aed">\u2713</span> Attendance</h2>' +
    (attendance.length > 0 ? '<table><thead><tr><th>Seat</th><th>Student</th><th>Time Slot</th><th>Status</th></tr></thead><tbody>' + attendRows + '</tbody></table>' : '<p style="color:#94a3b8;font-size:12px">No attendance records for this period.</p>')
    ) : '') +
    (isSummary || _type === 'bookings' ? (
    '<h2><span class="icon" style="background:#dbeafe;color:#2563eb">\ud83d\udcc5</span> Bookings</h2>' +
    (bookings.length > 0 ? '<table><thead><tr><th>Seat No</th><th>Student</th><th>Time Slot</th><th>Status</th></tr></thead><tbody>' + bookingRows + '</tbody></table>' : '<p style="color:#94a3b8;font-size:12px">No bookings for this period.</p>')
    ) : '') +
    (isSummary || _type === 'seat_utilization' ? (
    '<h2><span class="icon" style="background:#d1fae5;color:#059669">\ud83d\udcba</span> Seat Utilization</h2>' +
    '<div style="margin:12px 0 20px 0">' +
    '<div class="util-row"><span class="lbl">Total Seats:</span><span class="val">' + totalSeats + '</span><div class="bar-track"><div class="bar-fill bar-green" style="width:100%">&nbsp;</div></div></div>' +
    '<div class="util-row"><span class="lbl">Occupied:</span><span class="val">' + occupied + '</span><div class="bar-track"><div class="bar-fill bar-amber" style="width:' + utilPct + '%">' + utilPct + '%</div></div></div>' +
    '<div class="util-row"><span class="lbl">Available:</span><span class="val">' + available + '</span><div class="bar-track"><div class="bar-fill bar-green" style="width:' + availPct + '%">' + availPct + '%</div></div></div>' +
    '</div>'
    ) : '') +
    (isSummary || _type === 'complaints' ? (
    '<h2><span class="icon" style="background:#fee2e2;color:#dc2626">\ud83d\udea8</span> Complaints</h2>' +
    '<div class="stat-grid"><div class="stat-card"><div class="value">' + (stats.pending_tickets || 0) + '</div><div class="label">Open / In Progress</div></div></div>' +
    '<p style="color:#64748b;font-size:12px;margin-top:8px">Detailed complaint reports can be viewed in the Support &amp; Complaints section.</p>'
    ) : '') +
    (isSummary || _type === 'books' ? (
    '<h2><span class="icon" style="background:#fef3c7;color:#d97706">\ud83d\udcd6</span> Books</h2>' +
    (books.length > 0 ? '<table><thead><tr><th>Book Name</th><th>Author</th><th>Date</th></tr></thead><tbody>' + bookRows + '</tbody></table>' : '<p style="color:#94a3b8;font-size:12px">No book records.</p>')
    ) : '') +
    (isSummary || _type === 'events' ? (
    '<h2><span class="icon" style="background:#e0e7ff;color:#4f46e5">\ud83c\udf89</span> Events</h2>' +
    (events.length > 0 ? '<table><thead><tr><th>Event Name</th><th>Date</th><th>Participants</th></tr></thead><tbody>' + eventRows + '</tbody></table>' : '<p style="color:#94a3b8;font-size:12px">No events scheduled.</p>')
    ) : '') +
    '<div class="footer">Generated Automatically by Smart Lib \u2014 Library Management System &nbsp;|&nbsp; Page 1 of 1</div>' +
    '</body></html>';
};

// ---------- CSV/Excel Report ----------
const buildCSVReport = (_type: string, label: string, d: any) => {
  const now = new Date().toLocaleString();
  const libName = d.dash?.library?.name || 'Library';
  const stats = d.dash?.stats || {};
  const bookings: any[] = Array.isArray(d.bookings) ? d.bookings : [];
  const attendance: any[] = Array.isArray(d.attendance) ? d.attendance : [];
  const books: any[] = Array.isArray(d.books) ? d.books : [];
  const events: any[] = Array.isArray(d.events) ? d.events : [];

  const totalSeats = stats.total_seats || 0;
  const occupied = (stats.active_bookings || 0) + (stats.pending_bookings || 0);
  const utilPct = totalSeats > 0 ? Math.round((occupied / totalSeats) * 100) : 0;

  let csv = '"' + libName + ' \u2014 ' + label + '"\n"Generated","' + now + '"\n\n';
  const isSummary = ['today', 'weekly', 'monthly'].includes(_type);

  if (isSummary) {
    csv += '"=== SUMMARY ==="\n"Metric","Value"\n';
    csv += '"Total Seats","' + totalSeats + '"\n';
    csv += '"Total Bookings","' + (stats.today_bookings || bookings.length) + '"\n';
    csv += '"Seat Utilization","' + utilPct + '%"\n';
    csv += '"Active Bookings","' + (stats.active_bookings || 0) + '"\n';
    csv += '"Pending Bookings","' + (stats.pending_bookings || 0) + '"\n';
    csv += '"Available Seats","' + (stats.available_seats || 0) + '"\n';
    csv += '"Complaints","' + (stats.pending_tickets || 0) + '"\n';
    csv += '"Total Books","' + (stats.total_books || books.length) + '"\n';
    csv += '"Total Events","' + (stats.total_events || events.length) + '"\n\n';
  }

  if (isSummary || _type === 'attendance') {
    csv += '\n"=== ATTENDANCE ==="\n"Seat","Student","Check-in","Status"\n';
    attendance.forEach((a: any) => {
      csv += '"' + (a.seat_number || a.seat?.seat_number || '') + '","' + (a.user?.name || a.student_name || '') + '","' + fmtTime12(a.check_in_time) + '","' + (a.status || (a.check_out_time ? 'completed' : 'checked_in')) + '"\n';
    });
  }

  if (isSummary || _type === 'bookings') {
    csv += '\n"=== BOOKINGS ==="\n"Seat No","Student","Time Slot","Status"\n';
    bookings.forEach((b: any) => {
      csv += '"' + (b.seat?.seat_number || '') + '","' + (b.user?.name || '') + '","' + fmtTime12(b.booking_time) + ' - ' + fmtTime12(b.scheduled_end_time) + '","' + b.status + '"\n';
    });
  }

  if (isSummary || _type === 'books') {
    csv += '\n"=== BOOKS ==="\n"Title","Author","Date"\n';
    books.forEach((bk: any) => {
      csv += '"' + (bk.title || '') + '","' + (bk.author || '') + '","' + fmtDate(bk.created_at) + '"\n';
    });
  }

  if (isSummary || _type === 'events') {
    csv += '\n"=== EVENTS ==="\n"Event Name","Date","Participants"\n';
    events.forEach((ev: any) => {
      csv += '"' + (ev.title || '') + '","' + fmtDate(ev.date) + '","' + (ev.registrations_count ?? ev.joined_count ?? '') + '"\n';
    });
  }

  return csv;
};

const printHTMLReport = (html: string) => {
  const printWindow = window.open('', '_blank');
  if (!printWindow) {
    showError('Popup Blocked', 'Please allow popups for this site to generate PDF reports.');
    return;
  }
  printWindow.document.write(html);
  printWindow.document.close();
  // Wait for content to render, then trigger print
  printWindow.onload = () => {
    setTimeout(() => {
      printWindow.print();
    }, 300);
  };
  // Fallback if onload doesn't fire
  setTimeout(() => {
    printWindow.print();
  }, 1000);
};

const downloadAsFile = (filename: string, content: string, mimeType: string) => {
  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};

const downloadReport = (entry: ReportHistoryEntry) => {
  exportReport(entry.type, entry.format as 'pdf' | 'excel');
};

onMounted(() => {
  loadScheduledReports();
  loadReportHistory();
});
</script>

<style scoped>
.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.3s ease;
}
.slide-up-enter-from,
.slide-up-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>
