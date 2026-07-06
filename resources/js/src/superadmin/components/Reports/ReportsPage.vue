<template>
  <div class="space-y-8 pb-12">
    <!-- Page Header -->
    <div class="flex justify-end gap-4">
      <!-- Library Selector -->
      <div class="min-w-[280px]">
        <label class="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5 block ml-1">Active Library</label>
        <div class="relative group">
          <select 
            v-model="selectedLibraryId" 
            @change="handleLibraryChange"
            class="w-full pl-11 pr-10 py-2.5 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-700 focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 outline-none transition-all appearance-none cursor-pointer shadow-sm"
          >
            <option :value="null" disabled>Select a library...</option>
            <option v-for="lib in libraries" :key="lib.id" :value="lib.id">
              {{ lib.name }}
            </option>
          </select>
          <div class="absolute left-4 top-1/2 -translate-y-1/2 text-purple-600 transition-transform">
            <Library class="w-4 h-4" />
          </div>
          <div class="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
            <ChevronDown class="w-3.5 h-3.5" />
          </div>
        </div>
      </div>
    </div>

    <!-- Empty State -->
    <div v-if="!selectedLibraryId" class="bg-purple-50/50 border border-purple-100/80 rounded-3xl p-12 text-center">
      <div class="w-16 h-16 bg-white border border-purple-100 rounded-2xl flex items-center justify-center shadow-sm mx-auto mb-6">
        <MousePointer2 class="w-8 h-8 text-purple-600 animate-bounce" />
      </div>
      <h3 class="text-base font-bold text-slate-800 mb-2">Select a library to begin</h3>
      <p class="text-slate-550 max-w-sm mx-auto text-xs font-medium">Please choose a library from the dropdown above to access its specific reporting tools and data.</p>
    </div>

    <template v-else>
      <div class="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-8">
        <!-- Quick Generate Section -->
        <div>
          <h2 class="text-sm font-bold text-slate-700 mb-4 flex items-center uppercase tracking-wider">
            <Zap class="w-4.5 h-4.5 mr-2 text-amber-500" />
            Quick Generate ({{ selectedLibraryName }})
          </h2>
          <div class="space-y-3">
            <div
              v-for="summary in quickSummaries"
              :key="summary.label"
              class="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:shadow-md hover:border-purple-100/60 transition-all text-left"
            >
              <div class="flex items-center gap-3">
                <div :class="['w-10 h-10 rounded-xl flex items-center justify-center bg-slate-50', summary.bgColor]">
                  <component :is="summary.icon" :class="['w-5 h-5', summary.iconColor]" />
                </div>
                <span class="text-xs font-bold text-slate-700">{{ summary.label }}</span>
              </div>
              <div class="flex items-center gap-2 flex-wrap">
                <button
                  @click="exportReport(summary.type, 'pdf')"
                  class="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-red-655 bg-red-50 hover:bg-red-100/80 border border-red-100 transition-all cursor-pointer"
                >
                  <FileText class="w-3.5 h-3.5" />
                  Export PDF
                </button>
                <button
                  @click="exportReport(summary.type, 'excel')"
                  class="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-green-700 bg-green-50 hover:bg-green-150 border border-green-100 transition-all cursor-pointer"
                >
                  <Sheet class="w-3.5 h-3.5" />
                  Export Excel
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Report Categories -->
        <div>
          <h2 class="text-sm font-bold text-slate-700 mb-4 flex items-center uppercase tracking-wider">
            <LayoutGrid class="w-4.5 h-4.5 mr-2 text-purple-600" />
            Report Categories
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <div
              v-for="cat in reportCategories"
              :key="cat.type"
              class="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md hover:border-purple-100/60 transition-all flex flex-col justify-between text-left group"
            >
              <div>
                <div class="flex items-center gap-3 mb-3">
                  <div :class="['w-10 h-10 rounded-xl flex items-center justify-center bg-slate-50', cat.bgColor]">
                    <component :is="cat.icon" :class="['w-5 h-5', cat.iconColor]" />
                  </div>
                  <h3 class="font-bold text-slate-750 text-sm">{{ cat.label }}</h3>
                </div>
                <ul class="text-xs text-slate-500 mb-5 space-y-1 pl-1 font-medium leading-relaxed">
                  <li v-for="desc in cat.descriptions" :key="desc" class="flex items-start">
                    <span class="mr-1.5 text-slate-300">•</span>{{ desc }}
                  </li>
                </ul>
              </div>
              <div class="flex items-center gap-2 flex-wrap pt-2">
                <button
                  @click="openExportModal(cat.type, cat.label, 'pdf')"
                  class="inline-flex items-center gap-1 px-3.5 py-1.5 rounded-lg text-[10px] font-bold text-red-655 bg-red-50 hover:bg-red-100 border border-red-100 transition-all cursor-pointer"
                >
                  <FileText class="w-3 h-3" />
                  PDF
                </button>
                <button
                  @click="openExportModal(cat.type, cat.label, 'excel')"
                  class="inline-flex items-center gap-1 px-3.5 py-1.5 rounded-lg text-[10px] font-bold text-green-700 bg-green-50 hover:bg-green-100 border border-green-100 transition-all cursor-pointer"
                >
                  <Sheet class="w-3 h-3" />
                  Excel
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Report History Table -->
        <div class="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
          <div class="px-6 py-5 border-b border-slate-50 flex items-center justify-between text-left">
            <h3 class="text-sm font-bold text-slate-700 flex items-center uppercase tracking-wider">
              <History class="w-4 h-4 mr-2 text-slate-400" />
              Report History ({{ selectedLibraryName }})
            </h3>
          </div>
          <div class="p-6">
            <div v-if="libraryReportHistory.length === 0" class="text-center py-12">
              <History class="w-10 h-10 text-slate-200 mx-auto mb-3 animate-pulse" />
              <p class="text-slate-400 text-xs font-bold uppercase tracking-wider">No reports generated for this library yet.</p>
            </div>
            <div v-else class="overflow-x-auto">
              <table class="min-w-full divide-y divide-slate-100">
                <thead class="bg-slate-50/20">
                  <tr>
                    <th scope="col" class="px-4 py-3.5 text-left text-xs font-semibold text-slate-400 uppercase tracking-widest">Report</th>
                    <th scope="col" class="px-4 py-3.5 text-left text-xs font-semibold text-slate-400 uppercase tracking-widest">Format</th>
                    <th scope="col" class="px-4 py-3.5 text-left text-xs font-semibold text-slate-400 uppercase tracking-widest">Generated</th>
                    <th scope="col" class="px-4 py-3.5 text-right text-xs font-semibold text-slate-400 uppercase tracking-widest">Action</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-slate-50 bg-white">
                  <tr v-for="(h, idx) in libraryReportHistory" :key="idx" class="hover:bg-slate-50/50 transition-colors">
                    <td class="py-4 px-4 whitespace-nowrap text-left font-bold text-slate-700 text-xs">{{ h.name }}</td>
                    <td class="py-4 px-4 whitespace-nowrap text-left">
                      <span class="px-2 py-0.5 rounded text-[9px] font-bold uppercase border" :class="h.format === 'pdf' ? 'bg-red-50 border-red-100 text-red-655' : 'bg-green-50 border-green-100 text-green-700'">
                        {{ h.format }}
                      </span>
                    </td>
                    <td class="py-4 px-4 whitespace-nowrap text-left text-xs text-slate-500 font-medium">{{ h.generatedAt }}</td>
                    <td class="py-4 px-4 whitespace-nowrap text-right">
                      <button 
                        @click="downloadReport(h)" 
                        class="px-3 py-1.5 bg-white border border-slate-200 hover:bg-slate-50 rounded-lg text-purple-700 hover:text-purple-800 transition-all cursor-pointer shadow-sm text-xs font-bold inline-flex items-center gap-1.5"
                      >
                        <Download class="w-3.5 h-3.5" />
                        Download
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </template>

    <!-- Export Timespan Modal Dialog -->
    <div v-if="exportModal.show" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm" @click.self="exportModal.show = false">
      <div class="bg-white rounded-3xl p-6 max-w-sm w-full shadow-xl border border-slate-100 text-left flex flex-col animate-in fade-in zoom-in duration-200">
        <div class="flex items-center justify-between mb-5">
          <div>
            <h3 class="text-base font-bold text-slate-800">Export Report</h3>
            <p class="text-xs text-slate-500 mt-1 font-semibold">{{ exportModal.reportName }}</p>
          </div>
          <button @click="exportModal.show = false" class="p-2 rounded-xl hover:bg-slate-50 text-slate-450 transition-colors cursor-pointer">
            <X class="w-4.5 h-4.5" />
          </button>
        </div>

        <div class="mb-5">
          <label class="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-wider">Time Period</label>
          <div class="grid grid-cols-3 gap-2">
            <button
              v-for="ts in timespanOptions"
              :key="ts.value"
              @click="exportModal.timespan = ts.value"
              :class="[
                'py-2 rounded-xl font-bold text-xs transition-all border cursor-pointer',
                exportModal.timespan === ts.value
                  ? 'bg-purple-600 text-white border-purple-600 shadow-sm'
                  : 'bg-slate-50 text-slate-655 border-slate-200 hover:border-purple-250 hover:bg-purple-50'
              ]"
            >
              {{ ts.label }}
            </button>
          </div>
        </div>

        <div class="mb-5 p-4 rounded-xl border flex items-center gap-2.5" :class="exportModal.format === 'pdf' ? 'bg-red-50 border-red-100 text-red-700' : 'bg-green-50 border-green-100 text-green-700'">
          <FileText v-if="exportModal.format === 'pdf'" class="w-4 h-4 text-red-500" />
          <Sheet v-else class="w-4 h-4 text-green-500" />
          <span class="text-xs font-bold">{{ exportModal.format === 'pdf' ? 'PDF Document' : 'Excel Spreadsheet' }}</span>
        </div>

        <div class="flex gap-3 pt-2">
          <button @click="exportModal.show = false" class="flex-1 py-2.5 rounded-xl font-bold text-slate-550 bg-slate-100 hover:bg-slate-150 transition-all text-xs cursor-pointer border border-transparent">Cancel</button>
          <button @click="confirmExport" class="flex-1 py-2.5 rounded-xl font-bold text-white bg-purple-600 hover:bg-purple-750 transition-all text-xs cursor-pointer shadow-sm border border-transparent">Generate</button>
        </div>
      </div>
    </div>

    <!-- Notification Toast UI -->
    <Transition name="slide-up">
      <div v-if="exportToast.show" class="fixed bottom-6 right-6 z-50 bg-white rounded-2xl shadow-xl border border-slate-100 p-4 flex items-center gap-3.5 min-w-[320px]">
        <div v-if="exportToast.status === 'loading'" class="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center">
          <RefreshCw class="w-5 h-5 text-purple-650 animate-spin" />
        </div>
        <div v-else class="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center">
          <CheckCircle class="w-5 h-5 text-green-600" />
        </div>
        <div class="text-left">
          <p class="font-bold text-slate-800 text-xs">{{ exportToast.title }}</p>
          <p class="text-[10px] text-slate-450 mt-0.5 font-bold uppercase tracking-wider">{{ exportToast.subtitle }}</p>
        </div>
        <button @click="exportToast.show = false" class="ml-auto p-1 rounded-lg hover:bg-slate-50 text-slate-400 cursor-pointer"><X class="w-4 h-4" /></button>
      </div>
    </Transition>
  </div>
</template>e>

<script setup lang="ts">
import { ref, reactive, onMounted, computed, watch } from 'vue';
import { superadminAPI } from '../../services/superadminApi';
import { librarianAPI } from '@/shared/services/api';
import { useSwal } from '@/shared/composables/useSwal';
import {
  Zap, FileText, Sheet, Clock, LayoutGrid,
  CalendarClock, History, Download, Trash2,
  Pause, Play, RefreshCw, X, CheckCircle,
  Users, Calendar, Armchair, AlertTriangle, BookMarked, CalendarDays,
  Library, ChevronDown, MousePointer2
} from 'lucide-vue-next';

const { showSuccess, showError } = useSwal();

const libraries = ref<any[]>([]);
const selectedLibraryId = ref<number | null>(null);

const selectedLibraryName = computed(() => {
  return libraries.value.find(l => l.id === selectedLibraryId.value)?.name || 'Library';
});

const handleLibraryChange = () => {
  loadHistory();
};

// ---------- Quick Generate ----------
const quickSummaries = [
  { label: 'Generate Today Summary', type: 'today', icon: CalendarDays, bgColor: 'bg-blue-100', iconColor: 'text-blue-650' },
  { label: 'Generate Weekly Summary', type: 'weekly', icon: Calendar, bgColor: 'bg-emerald-100', iconColor: 'text-emerald-600' },
  { label: 'Generate Monthly Summary', type: 'monthly', icon: CalendarClock, bgColor: 'bg-purple-105', iconColor: 'text-purple-600' },
];

// ---------- Categories ----------
const reportCategories = [
  {
    label: 'Attendance', type: 'attendance', icon: Users,
    bgColor: 'bg-purple-50', iconColor: 'text-purple-600',
    descriptions: ['Reports, present/absent approx.', 'Daily and weekly summaries']
  },
  {
    label: 'Bookings', type: 'bookings', icon: Calendar,
    bgColor: 'bg-blue-50', iconColor: 'text-blue-600',
    descriptions: ['Reports, list, statistics', 'Peak hours analysis']
  },
  {
    label: 'Seat Utilization', type: 'seat_utilization', icon: Armchair,
    bgColor: 'bg-teal-50', iconColor: 'text-teal-600',
    descriptions: ['Search: seat, usage & utilizers', 'Availability heatmaps']
  },
  {
    label: 'Complaints', type: 'complaints', icon: AlertTriangle,
    bgColor: 'bg-red-50', iconColor: 'text-red-600',
    descriptions: ['Reports, mishapances & complaints', 'Resolution tracking']
  },
  {
    label: 'Books', type: 'books', icon: BookMarked,
    bgColor: 'bg-amber-50', iconColor: 'text-amber-600',
    descriptions: ['Report: books, genre, status', 'Reservation analytics']
  },
  {
    label: 'Events', type: 'events', icon: CalendarDays,
    bgColor: 'bg-purple-50', iconColor: 'text-purple-600',
    descriptions: ['View: scheduled, attendance stats', 'Participation tracking']
  },
];

// ---------- History ----------
interface HistoryEntry {
  name: string;
  type: string;
  format: string;
  generatedAt: string;
  libraryId: number;
}
const reportHistory = ref<HistoryEntry[]>([]);
const libraryReportHistory = computed(() => {
  return reportHistory.value.filter(h => h.libraryId === selectedLibraryId.value);
});

const loadHistory = () => {
  const saved = localStorage.getItem('superadmin-report-history');
  if (saved) reportHistory.value = JSON.parse(saved);
};

const saveHistory = () => {
  localStorage.setItem('superadmin-report-history', JSON.stringify(reportHistory.value));
};

const addToHistory = (name: string, type: string, format: string) => {
  if (!selectedLibraryId.value) return;
  reportHistory.value.unshift({
    name, type, format, libraryId: selectedLibraryId.value,
    generatedAt: new Date().toLocaleString('en-PK', { dateStyle: 'medium', timeStyle: 'short' })
  });
  if (reportHistory.value.length > 100) reportHistory.value.pop();
  saveHistory();
};

const downloadReport = (h: any) => {
  // Since we don't store actual files, we show the toast again as "re-generating"
  exportReport(h.type, h.format as any);
};

// ---------- Export Modal ----------
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
  exportReport(exportModal.reportType, exportModal.format, tsLabel);
};

// ---------- Export Logic ----------
const exportToast = reactive({ show: false, status: 'loading' as any, title: '', subtitle: '' });

const exportReport = async (type: string, format: 'pdf' | 'excel', timespanLabel?: string) => {
  if (!selectedLibraryId.value) return;
  const baseLabel = [...quickSummaries, ...reportCategories].find(r => r.type === type)?.label || type;
  const label = timespanLabel ? `${baseLabel} (${timespanLabel})` : baseLabel;
  const libId = selectedLibraryId.value;

  exportToast.show = true;
  exportToast.status = 'loading';
  exportToast.title = `Generating ${label}...`;
  exportToast.subtitle = `Library: ${selectedLibraryName.value}`;

  try {
    // Fetch specifically for this library
    const [dashboard, bookingsRes, attendanceRes, booksRes, eventsRes] = await Promise.allSettled([
      // Note: we use librarianAPI but pass library_id
      librarianAPI.getDashboard({ library_id: libId }),
      librarianAPI.getBookings({ library_id: libId, per_page: 50 }),
      librarianAPI.getAttendance({ library_id: libId, per_page: 50 }),
      librarianAPI.getBooks({ library_id: libId }),
      librarianAPI.getEvents({ library_id: libId }),
    ]);

    const dash = dashboard.status === 'fulfilled' ? ((dashboard.value as any).data || dashboard.value) : {};
    const bookings = bookingsRes.status === 'fulfilled' ? ((bookingsRes.value as any)?.data || bookingsRes.value || []) : [];
    const attendance = attendanceRes.status === 'fulfilled' ? ((attendanceRes.value as any)?.data || attendanceRes.value || []) : [];
    const books = booksRes.status === 'fulfilled' ? (Array.isArray(booksRes.value) ? booksRes.value : ((booksRes.value as any)?.data || [])) : [];
    const events = eventsRes.status === 'fulfilled' ? (Array.isArray(eventsRes.value) ? eventsRes.value : ((eventsRes.value as any)?.data || [])) : [];

    // Correcting for likely wrapper shape
    const cleanDash = dash.stats ? dash : { stats: dash, library: { name: selectedLibraryName.value } };

    const reportData = { dash: cleanDash, bookings, attendance, books, events };

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
    exportToast.subtitle = `${label} is ready.`;
    setTimeout(() => { exportToast.show = false; }, 3000);
  } catch (error) {
    console.error(error);
    exportToast.show = false;
    showError('Export Failed', 'An error occurred while generating the report.');
  }
};

// ---------- HTML/CSV Generators (Copied & Minimal Tweaks) ----------
const fmtDate = (d: any) => { if (!d) return '\u2014'; const dt = new Date(d); return isNaN(dt.getTime()) ? String(d) : dt.toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' }); };
const fmtTime12 = (d: any) => { if (!d) return '\u2014'; const dt = new Date(d); return isNaN(dt.getTime()) ? String(d) : dt.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true }); };
const statusBadge = (s: string) => {
  const colors: Record<string, string> = { checked_in: '#059669', booked: '#d97706', checked_out: '#6366f1', cancelled: '#dc2626', available: '#059669' };
  const c = colors[s] || '#6b7280';
  return `<span style="display:inline-block;padding:2px 10px;border-radius:6px;font-size:11px;font-weight:700;color:#fff;background:${c};text-transform:capitalize">${s.replace(/_/g, ' ')}</span>`;
};

const buildHTMLReport = (type: string, label: string, d: any) => {
  const isSummary = ['today', 'weekly', 'monthly'].includes(type);
  const stats = d.dash?.stats || {};
  const libName = d.dash?.library?.name || selectedLibraryName.value;
  
  const attendRows = d.attendance.slice(0, 20).map((a: any) => `<tr><td>${a.seat?.seat_number || '\u2014'}</td><td>${a.user?.name || '\u2014'}</td><td>${fmtTime12(a.check_in_time)}</td><td>${statusBadge(a.status || 'checked_in')}</td></tr>`).join('');
  const bookingRows = d.bookings.slice(0, 20).map((b: any) => `<tr><td>${b.seat?.seat_number || '\u2014'}</td><td>${b.user?.name || '\u2014'}</td><td>${fmtTime12(b.booking_time)}</td><td>${statusBadge(b.status)}</td></tr>`).join('');

  return `
    <html>
      <head>
        <style>
          body { font-family: sans-serif; color: #1e293b; padding: 40px; }
          .header { border-bottom: 2px solid #edeff2; padding-bottom: 20px; margin-bottom: 30px; display: flex; justify-content: space-between; }
          .lib-info h1 { margin: 0; color: #4338ca; }
          .report-meta { text-align: right; font-size: 12px; color: #64748b; }
          h2 { font-size: 18px; border-left: 4px solid #4338ca; padding-left: 12px; margin: 30px 0 15px; }
          table { width: 100%; border-collapse: collapse; }
          th { background: #f8fafc; text-align: left; padding: 12px; font-size: 12px; border-bottom: 2px solid #edeff2; }
          td { padding: 12px; font-size: 13px; border-bottom: 1px solid #edeff2; }
          .stat-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin-bottom: 30px; }
          .stat-card { background: #f1f5f9; padding: 20px; border-radius: 12px; text-align: center; }
          .stat-val { font-size: 24px; font-weight: 800; color: #4338ca; }
          .stat-lbl { font-size: 11px; font-weight: 600; color: #64748b; margin-top: 4px; }
        </style>
      </head>
      <body>
        <div class="header">
          <div class="lib-info">
            <h1>${libName}</h1>
            <div style="font-size: 14px; color: #64748b;">${label} Report</div>
          </div>
          <div class="report-meta">
            Generated: ${new Date().toLocaleString()}<br>
            By: Super Admin
          </div>
        </div>

        ${isSummary ? `
          <h2>Summary Stats</h2>
          <div class="stat-grid">
            <div class="stat-card"><div class="stat-val">${stats.total_seats || 0}</div><div class="stat-lbl">Total Seats</div></div>
            <div class="stat-card"><div class="stat-val">${stats.today_bookings || d.bookings.length}</div><div class="stat-lbl">Bookings</div></div>
            <div class="stat-card"><div class="stat-val">${stats.pending_tickets || 0}</div><div class="stat-lbl">Complaints</div></div>
          </div>
        ` : ''}

        ${(isSummary || type === 'attendance') ? `
          <h2>Attendance</h2>
          <table><thead><tr><th>Seat</th><th>Student</th><th>Time</th><th>Status</th></tr></thead>
          <tbody>${attendRows || '<tr><td colspan="4" style="text-align:center">No data</td></tr>'}</tbody></table>
        ` : ''}

        ${(isSummary || type === 'bookings') ? `
          <h2>Bookings</h2>
          <table><thead><tr><th>Seat</th><th>Student</th><th>Time</th><th>Status</th></tr></thead>
          <tbody>${bookingRows || '<tr><td colspan="4" style="text-align:center">No data</td></tr>'}</tbody></table>
        ` : ''}

        <div style="margin-top: 50px; text-align: center; font-size: 10px; color: #cbd5e1;">Generated by Smart Lib Management System</div>
      </body>
    </html>
  `;
};

const buildCSVReport = (type: string, label: string, d: any) => {
  let csv = `"Library","${selectedLibraryName.value}"\n"Report","${label}"\n"Generated","${new Date().toLocaleString()}"\n\n`;
  const isSummary = ['today', 'weekly', 'monthly'].includes(type);

  if (isSummary || type === 'attendance') {
    csv += `"=== ATTENDANCE ==="\n"Seat","Student","Time","Status"\n`;
    d.attendance.forEach((a: any) => { csv += `"${a.seat?.seat_number || ''}","${a.user?.name || ''}","${fmtTime12(a.check_in_time)}","${a.status || 'checked_in'}"\n`; });
    csv += "\n";
  }
  if (isSummary || type === 'bookings') {
    csv += `"=== BOOKINGS ==="\n"Seat","Student","Time","Status"\n`;
    d.bookings.forEach((b: any) => { csv += `"${b.seat?.seat_number || ''}","${b.user?.name || ''}","${fmtTime12(b.booking_time)}","${b.status}"\n`; });
  }
  return csv;
};

const printHTMLReport = (html: string) => {
  const w = window.open('', '_blank');
  if (!w) return;
  w.document.write(html);
  w.document.close();
  w.onload = () => { setTimeout(() => w.print(), 500); };
};

const downloadAsFile = (name: string, content: string, type: string) => {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a'); a.href = url; a.download = name; a.click();
};

onMounted(async () => {
  try {
    libraries.value = await superadminAPI.getLibraries();
    loadHistory();
  } catch (error) {
    showError('Error', 'Failed to load libraries.');
  }
});
</script>

<style scoped>
.slide-up-enter-active, .slide-up-leave-active { transition: all 0.3s ease-out; }
.slide-up-enter-from { opacity: 0; transform: translateY(20px); }
.slide-up-leave-to { opacity: 0; transform: translateY(20px); }
</style>
