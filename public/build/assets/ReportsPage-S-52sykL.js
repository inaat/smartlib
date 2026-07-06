import { d as defineComponent, r as ref, y as reactive, o as onMounted, a as createElementBlock, k as openBlock, e as createStaticVNode, b as createBaseVNode, l as createCommentVNode, f as createVNode, u as unref, F as Fragment, j as renderList, n as normalizeClass, h as createBlock, m as resolveDynamicComponent, t as toDisplayString, i as createTextVNode, z as withModifiers, p as withDirectives, v as vModelText, w as withCtx, T as Transition, P as librarianAPI } from "./main-BV94XoeK.js";
import { u as useSwal } from "./useSwal-pQW_XkRe.js";
import { Z as Zap } from "./zap-BWrOejdU.js";
import { F as FileText } from "./file-text-CN8a-Gdx.js";
import { S as Sheet, C as CalendarDays, a as CalendarClock } from "./sheet-NxbEqmx8.js";
import { C as Clock } from "./clock-BERatuZr.js";
import { C as Calendar } from "./calendar-Ds3wHnE9.js";
import { L as LayoutGrid } from "./layout-grid-CcOh4JZB.js";
import { U as Users } from "./users-D3Vt8zfj.js";
import { A as Armchair } from "./armchair-oevKaUmI.js";
import { T as TriangleAlert } from "./triangle-alert-m_nCFHGq.js";
import { B as BookMarked } from "./book-marked-Cobj7ayd.js";
import { H as History } from "./history-D4w_5i1N.js";
import { c as createLucideIcon } from "./createLucideIcon-CmaEOm5I.js";
import { R as RefreshCw } from "./refresh-cw-C6EhchCZ.js";
import { T as Trash2 } from "./trash-2-Dh2Znunm.js";
import { D as Download } from "./download-CD9Isul1.js";
import { X } from "./x-C8j8JQlQ.js";
import { C as CircleCheckBig } from "./circle-check-big-S4PoNnB6.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
/* empty css               */
const Pause = createLucideIcon("pause", [
  ["rect", { x: "14", y: "3", width: "5", height: "18", rx: "1", key: "kaeet6" }],
  ["rect", { x: "5", y: "3", width: "5", height: "18", rx: "1", key: "1wsw3u" }]
]);
const Play = createLucideIcon("play", [
  [
    "path",
    {
      d: "M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",
      key: "10ikf1"
    }
  ]
]);
const _hoisted_1 = { class: "space-y-6 pb-12 font-outfit text-slate-700" };
const _hoisted_2 = { class: "space-y-4" };
const _hoisted_3 = { class: "text-sm font-bold text-slate-800 uppercase tracking-wider flex items-center gap-2" };
const _hoisted_4 = { class: "grid grid-cols-1 md:grid-cols-3 gap-4" };
const _hoisted_5 = { class: "flex items-center gap-3 mb-3" };
const _hoisted_6 = { class: "font-bold text-sm text-slate-800" };
const _hoisted_7 = { class: "grid grid-cols-3 gap-2" };
const _hoisted_8 = ["onClick"];
const _hoisted_9 = ["onClick"];
const _hoisted_10 = ["onClick"];
const _hoisted_11 = { class: "space-y-4" };
const _hoisted_12 = { class: "text-sm font-bold text-slate-800 uppercase tracking-wider flex items-center gap-2" };
const _hoisted_13 = { class: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 text-left" };
const _hoisted_14 = { class: "flex items-center gap-3 mb-3" };
const _hoisted_15 = { class: "font-bold text-slate-800 text-sm" };
const _hoisted_16 = { class: "text-[11px] text-slate-400 font-semibold mb-6 space-y-1.5 pl-1" };
const _hoisted_17 = { class: "grid grid-cols-3 gap-1.5 pt-3 border-t border-slate-50" };
const _hoisted_18 = ["onClick"];
const _hoisted_19 = ["onClick"];
const _hoisted_20 = ["onClick"];
const _hoisted_21 = { class: "bg-white rounded-xl border border-slate-100 shadow-sm overflow-hidden text-left" };
const _hoisted_22 = { class: "flex items-center space-x-1.5 bg-slate-50/50 border-b border-slate-100 p-2" };
const _hoisted_23 = {
  key: 0,
  class: "p-6"
};
const _hoisted_24 = {
  key: 0,
  class: "text-center py-16"
};
const _hoisted_25 = { class: "w-12 h-12 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center mx-auto mb-3 text-slate-300" };
const _hoisted_26 = {
  key: 1,
  class: "overflow-x-auto"
};
const _hoisted_27 = { class: "w-full text-xs" };
const _hoisted_28 = { class: "divide-y divide-slate-50" };
const _hoisted_29 = { class: "py-3.5 px-4 font-bold text-slate-800" };
const _hoisted_30 = { class: "py-3.5 px-4 text-slate-500 font-medium capitalize" };
const _hoisted_31 = { class: "py-3.5 px-4" };
const _hoisted_32 = { class: "py-3.5 px-4 text-slate-500 font-medium" };
const _hoisted_33 = { class: "py-3.5 px-4" };
const _hoisted_34 = { class: "py-3.5 px-4 text-right" };
const _hoisted_35 = { class: "flex items-center justify-end gap-1.5" };
const _hoisted_36 = ["onClick", "title"];
const _hoisted_37 = ["onClick"];
const _hoisted_38 = ["onClick"];
const _hoisted_39 = {
  key: 1,
  class: "p-6"
};
const _hoisted_40 = {
  key: 0,
  class: "text-center py-16"
};
const _hoisted_41 = { class: "w-12 h-12 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center mx-auto mb-3 text-slate-300" };
const _hoisted_42 = {
  key: 1,
  class: "overflow-x-auto"
};
const _hoisted_43 = { class: "w-full text-xs" };
const _hoisted_44 = { class: "divide-y divide-slate-50" };
const _hoisted_45 = { class: "py-3.5 px-4 font-bold text-slate-800" };
const _hoisted_46 = { class: "py-3.5 px-4 text-slate-500 font-medium capitalize" };
const _hoisted_47 = { class: "py-3.5 px-4" };
const _hoisted_48 = { class: "py-3.5 px-4 text-slate-400 font-semibold" };
const _hoisted_49 = { class: "py-3.5 px-4 text-right" };
const _hoisted_50 = ["onClick"];
const _hoisted_51 = { class: "bg-white rounded-xl shadow-xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in duration-200 border border-gray-200" };
const _hoisted_52 = { class: "p-6 border-b border-gray-100 flex items-center justify-between text-left" };
const _hoisted_53 = { class: "flex items-center space-x-3" };
const _hoisted_54 = { class: "w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600 border border-emerald-100/50 flex-shrink-0" };
const _hoisted_55 = { class: "text-[10px] font-semibold text-slate-400 uppercase mt-0.5" };
const _hoisted_56 = { class: "p-6 space-y-5 text-left font-outfit text-slate-700" };
const _hoisted_57 = { class: "grid grid-cols-3 gap-2" };
const _hoisted_58 = ["onClick"];
const _hoisted_59 = { class: "grid grid-cols-2 gap-2" };
const _hoisted_60 = { class: "p-6 border-t border-gray-100 bg-slate-50/50 flex gap-3" };
const _hoisted_61 = { class: "bg-white rounded-xl shadow-xl w-full max-w-sm overflow-hidden animate-in fade-in zoom-in duration-200 border border-gray-200" };
const _hoisted_62 = { class: "p-6 border-b border-gray-100 flex items-center justify-between text-left" };
const _hoisted_63 = { class: "flex items-center space-x-3" };
const _hoisted_64 = { class: "w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600 border border-emerald-100/50 flex-shrink-0" };
const _hoisted_65 = { class: "text-[10px] font-semibold text-slate-400 uppercase mt-0.5" };
const _hoisted_66 = { class: "p-6 space-y-5 text-left font-outfit text-slate-700" };
const _hoisted_67 = { class: "grid grid-cols-3 gap-2" };
const _hoisted_68 = ["onClick"];
const _hoisted_69 = { class: "text-xs font-bold" };
const _hoisted_70 = { class: "p-6 border-t border-gray-100 bg-slate-50/50 flex gap-3" };
const _hoisted_71 = {
  key: 0,
  class: "fixed bottom-6 right-6 z-50 bg-white rounded-xl shadow-xl border border-gray-100 p-5 flex items-center gap-4 min-w-[320px] text-left"
};
const _hoisted_72 = {
  key: 0,
  class: "w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center flex-shrink-0"
};
const _hoisted_73 = {
  key: 1,
  class: "w-10 h-10 rounded-xl bg-green-50 border border-green-100 flex items-center justify-center flex-shrink-0"
};
const _hoisted_74 = { class: "font-bold text-slate-800 text-xs" };
const _hoisted_75 = { class: "text-[10px] text-slate-400 font-semibold mt-0.5" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ReportsPage",
  setup(__props) {
    const { showSuccess, showError } = useSwal();
    const activeTab = ref("scheduled");
    const quickSummaries = [
      { label: "Today Summary", type: "today", icon: CalendarDays, bgColor: "bg-blue-50 border-blue-100", iconColor: "text-blue-500" },
      { label: "Weekly Summary", type: "weekly", icon: Calendar, bgColor: "bg-emerald-50 border-emerald-100", iconColor: "text-emerald-500" },
      { label: "Monthly Summary", type: "monthly", icon: CalendarClock, bgColor: "bg-teal-50 border-teal-100", iconColor: "text-teal-500" }
    ];
    const reportCategories = [
      {
        label: "Attendance",
        type: "attendance",
        icon: Users,
        bgColor: "bg-indigo-50 border-indigo-100",
        iconColor: "text-indigo-500",
        descriptions: ["Present/absent status list", "Daily/weekly attendee count"]
      },
      {
        label: "Bookings",
        type: "bookings",
        icon: Calendar,
        bgColor: "bg-blue-50 border-blue-100",
        iconColor: "text-blue-500",
        descriptions: ["Reservation lists & status logs", "Peak seat usage hours"]
      },
      {
        label: "Seat Utilization",
        type: "seat_utilization",
        icon: Armchair,
        bgColor: "bg-emerald-50 border-emerald-100",
        iconColor: "text-emerald-500",
        descriptions: ["Section/floor seat usage rates", "Utilization percentage summaries"]
      },
      {
        label: "Complaints",
        type: "complaints",
        icon: TriangleAlert,
        bgColor: "bg-rose-50 border-rose-100",
        iconColor: "text-rose-500",
        descriptions: ["Support tickets & complaints", "Current ticket resolution speed"]
      },
      {
        label: "Books",
        type: "books",
        icon: BookMarked,
        bgColor: "bg-amber-50 border-amber-100",
        iconColor: "text-amber-500",
        descriptions: ["Inventory counts & status lists", "Reservation request totals"]
      },
      {
        label: "Events",
        type: "events",
        icon: CalendarDays,
        bgColor: "bg-teal-50 border-teal-100",
        iconColor: "text-teal-500",
        descriptions: ["Scheduled library workshops", "Student participant logs"]
      }
    ];
    const scheduledReports = ref([]);
    const loadScheduledReports = () => {
      const saved = localStorage.getItem("librarian-scheduled-reports");
      if (saved) scheduledReports.value = JSON.parse(saved);
    };
    const saveScheduledReports = () => {
      localStorage.setItem("librarian-scheduled-reports", JSON.stringify(scheduledReports.value));
    };
    const toggleScheduleStatus = (idx) => {
      scheduledReports.value[idx].status = scheduledReports.value[idx].status === "active" ? "paused" : "active";
      saveScheduledReports();
    };
    const deleteScheduled = (idx) => {
      scheduledReports.value.splice(idx, 1);
      saveScheduledReports();
      showSuccess("Deleted", "Scheduled report removed.");
    };
    const runScheduledNow = (idx) => {
      const sr = scheduledReports.value[idx];
      exportReport(sr.type, sr.format);
    };
    const reportHistory = ref([]);
    const loadReportHistory = () => {
      const saved = localStorage.getItem("librarian-report-history");
      if (saved) reportHistory.value = JSON.parse(saved);
    };
    const saveReportHistory = () => {
      localStorage.setItem("librarian-report-history", JSON.stringify(reportHistory.value));
    };
    const addToHistory = (name, type, format) => {
      const now = /* @__PURE__ */ new Date();
      reportHistory.value.unshift({
        name,
        type,
        format,
        generatedAt: now.toLocaleString("en-PK", { dateStyle: "medium", timeStyle: "short" })
      });
      if (reportHistory.value.length > 50) reportHistory.value.pop();
      saveReportHistory();
    };
    const scheduleModal = reactive({
      show: false,
      reportType: "",
      reportName: "",
      frequency: "daily",
      format: "pdf",
      recipient: "",
      time: "08:00"
    });
    const openScheduleModal = (type, name) => {
      scheduleModal.show = true;
      scheduleModal.reportType = type;
      scheduleModal.reportName = name;
      scheduleModal.frequency = "daily";
      scheduleModal.format = "pdf";
      scheduleModal.recipient = "";
      scheduleModal.time = "08:00";
    };
    const saveSchedule = () => {
      if (!scheduleModal.recipient) {
        showError("Missing Email", "Please enter a recipient email address.");
        return;
      }
      scheduledReports.value.push({
        name: scheduleModal.reportName,
        type: scheduleModal.reportType,
        frequency: scheduleModal.frequency,
        format: scheduleModal.format,
        recipient: scheduleModal.recipient,
        time: scheduleModal.time,
        status: "active"
      });
      saveScheduledReports();
      scheduleModal.show = false;
      showSuccess("Scheduled!", `${scheduleModal.reportName} will be sent ${scheduleModal.frequency} at ${scheduleModal.time}.`);
    };
    const exportToast = reactive({
      show: false,
      status: "loading",
      title: "",
      subtitle: ""
    });
    const timespanOptions = [
      { label: "Today", value: "today" },
      { label: "Weekly", value: "weekly" },
      { label: "Monthly", value: "monthly" }
    ];
    const exportModal = reactive({
      show: false,
      reportType: "",
      reportName: "",
      format: "pdf",
      timespan: "today"
    });
    const openExportModal = (type, name, format) => {
      exportModal.show = true;
      exportModal.reportType = type;
      exportModal.reportName = name;
      exportModal.format = format;
      exportModal.timespan = "today";
    };
    const confirmExport = () => {
      const tsLabel = timespanOptions.find((t) => t.value === exportModal.timespan)?.label || "";
      exportModal.show = false;
      exportReport(exportModal.reportType, exportModal.format, tsLabel);
    };
    const getReportLabel = (type) => {
      const all = [...quickSummaries, ...reportCategories];
      return all.find((r) => r.type === type)?.label || type;
    };
    const exportReport = async (type, format, timespanLabel) => {
      const baseLabel = getReportLabel(type);
      const label = timespanLabel ? `${baseLabel} (${timespanLabel})` : baseLabel;
      exportToast.show = true;
      exportToast.status = "loading";
      exportToast.title = `Generating ${label}...`;
      exportToast.subtitle = `Format: ${format.toUpperCase()}`;
      try {
        const [dashboard, bookingsRes, attendanceRes, booksRes, eventsRes] = await Promise.allSettled([
          librarianAPI.getDashboard(),
          librarianAPI.getBookings({ per_page: 50 }),
          librarianAPI.getAttendance({ per_page: 50 }),
          librarianAPI.getBooks(),
          librarianAPI.getEvents()
        ]);
        const dash = dashboard.status === "fulfilled" ? dashboard.value : {};
        const bookings = bookingsRes.status === "fulfilled" ? bookingsRes.value?.data || bookingsRes.value || [] : [];
        const attendance = attendanceRes.status === "fulfilled" ? attendanceRes.value?.data || attendanceRes.value || [] : [];
        const books = booksRes.status === "fulfilled" ? Array.isArray(booksRes.value) ? booksRes.value : [] : [];
        const events = eventsRes.status === "fulfilled" ? Array.isArray(eventsRes.value) ? eventsRes.value : [] : [];
        const reportData = { dash, bookings, attendance, books, events };
        if (format === "pdf") {
          const html = buildHTMLReport(type, label, reportData);
          printHTMLReport(html);
        } else {
          const csv = buildCSVReport(type, label, reportData);
          downloadAsFile(`${label.replace(/\s+/g, "_")}_${Date.now()}.csv`, csv, "text/csv");
        }
        addToHistory(label, type, format);
        exportToast.status = "done";
        exportToast.title = "Report Generated!";
        exportToast.subtitle = `${label} (${format.toUpperCase()}) is ready.`;
        setTimeout(() => {
          exportToast.show = false;
        }, 3e3);
      } catch (error) {
        exportToast.show = false;
        showError("Export Failed", "Could not generate report. Please try again.");
      }
    };
    const fmtDate = (d) => {
      if (!d) return "—";
      const dt = new Date(d);
      return isNaN(dt.getTime()) ? String(d) : dt.toLocaleDateString("en-US", { day: "numeric", month: "short", year: "numeric" });
    };
    const fmtTime12 = (d) => {
      if (!d) return "—";
      const dt = new Date(d);
      return isNaN(dt.getTime()) ? String(d) : dt.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: true });
    };
    const statusBadge = (status) => {
      const colors = {
        checked_in: "#059669",
        booked: "#d97706",
        checked_out: "#6366f1",
        cancelled: "#dc2626",
        confirmed: "#059669",
        completed: "#6366f1",
        pending: "#d97706",
        resolved: "#059669",
        open: "#d97706",
        available: "#059669"
      };
      const c = colors[status] || "#6b7280";
      return '<span style="display:inline-block;padding:2px 10px;border-radius:6px;font-size:11px;font-weight:700;color:#fff;background:' + c + ';text-transform:capitalize">' + status.replace(/_/g, " ") + "</span>";
    };
    const buildHTMLReport = (_type, _label, d) => {
      const now = /* @__PURE__ */ new Date();
      const dateStr = now.toLocaleDateString("en-US", { day: "numeric", month: "long", year: "numeric" });
      const libName = d.dash?.library?.name || "Library";
      const stats = d.dash?.stats || {};
      const bookings = Array.isArray(d.bookings) ? d.bookings : [];
      const attendance = Array.isArray(d.attendance) ? d.attendance : [];
      const books = Array.isArray(d.books) ? d.books : [];
      const events = Array.isArray(d.events) ? d.events : [];
      const totalSeats = stats.total_seats || 0;
      const occupied = (stats.active_bookings || 0) + (stats.pending_bookings || 0);
      const available = stats.available_seats || 0;
      const utilPct = totalSeats > 0 ? Math.round(occupied / totalSeats * 100) : 0;
      const availPct = totalSeats > 0 ? Math.round(available / totalSeats * 100) : 0;
      const isSummary = ["today", "weekly", "monthly"].includes(_type);
      const attendRows = attendance.slice(0, 15).map(
        (a) => "<tr><td>" + (a.seat_number || a.seat?.seat_number || "—") + "</td><td>" + (a.user?.name || a.student_name || "—") + "</td><td>" + fmtTime12(a.check_in_time) + "</td><td>" + (a.status ? statusBadge(a.status) : a.check_out_time ? statusBadge("completed") : statusBadge("checked_in")) + "</td></tr>"
      ).join("");
      const bookingRows = bookings.slice(0, 15).map(
        (b) => "<tr><td>" + (b.seat?.seat_number || "—") + "</td><td>" + (b.user?.name || "—") + "</td><td>" + fmtTime12(b.booking_time) + " - " + fmtTime12(b.scheduled_end_time) + "</td><td>" + statusBadge(b.status) + "</td></tr>"
      ).join("");
      const bookRows = books.slice(0, 10).map(
        (bk) => "<tr><td>" + (bk.title || "—") + "</td><td>" + (bk.author || "—") + "</td><td>" + fmtDate(bk.created_at) + "</td></tr>"
      ).join("");
      const eventRows = events.slice(0, 10).map(
        (ev) => "<tr><td>" + (ev.title || "—") + "</td><td>" + fmtDate(ev.date) + "</td><td>" + (ev.registrations_count ?? ev.joined_count ?? "—") + "</td></tr>"
      ).join("");
      return '<!DOCTYPE html><html><head><meta charset="UTF-8"><title>Daily End-of-Day Report — ' + libName + '</title><style>@page{size:A4;margin:20mm}*{box-sizing:border-box}body{font-family:"Segoe UI",system-ui,sans-serif;max-width:780px;margin:0 auto;color:#1e293b;padding:30px 20px;font-size:13px}.header{display:flex;align-items:center;justify-content:space-between;margin-bottom:30px;padding-bottom:16px;border-bottom:3px solid #047857}.header .logo{display:flex;align-items:center;gap:12px}.header .logo-icon{width:48px;height:48px;background:#047857;border-radius:12px;display:flex;align-items:center;justify-content:center;color:#fff;font-size:22px;font-weight:800}.header .lib-name{font-size:22px;font-weight:800;color:#047857}.header .meta{text-align:right;font-size:11px;color:#64748b;line-height:1.6}.header .meta strong{color:#047857}h1{font-size:22px;color:#047857;margin:0 0 24px 0}h2{font-size:15px;color:#047857;margin:28px 0 12px 0;display:flex;align-items:center;gap:8px}h2 .icon{width:24px;height:24px;border-radius:6px;display:inline-flex;align-items:center;justify-content:center;font-size:13px}.stat-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin:0 0 8px 0}.stat-card{padding:16px;border-radius:10px;background:#f8fafc;border:1px solid #e2e8f0;text-align:center}.stat-card .value{font-size:32px;font-weight:800;color:#047857}.stat-card .label{font-size:11px;color:#64748b;margin-top:2px;text-transform:uppercase;letter-spacing:.05em;font-weight:600}.stat-card .icon-sm{font-size:16px;margin-bottom:4px}table{width:100%;border-collapse:collapse;margin:8px 0 20px 0;font-size:12px}th{background:#047857;color:#fff;padding:8px 12px;text-align:left;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.04em}td{padding:8px 12px;border-bottom:1px solid #e2e8f0}tr:nth-child(even){background:#f8fafc}.util-row{display:flex;align-items:center;margin-bottom:6px;font-size:12px}.util-row .lbl{width:100px;color:#64748b;font-weight:600}.util-row .val{width:60px;font-weight:700;color:#047857;text-align:right;margin-right:12px}.bar-track{flex:1;height:22px;background:#e2e8f0;border-radius:6px;overflow:hidden}.bar-fill{height:100%;border-radius:6px;display:flex;align-items:center;justify-content:flex-end;padding-right:8px;font-size:11px;font-weight:700;color:#fff}.bar-green{background:#059669}.bar-amber{background:#d97706}.footer{margin-top:40px;padding-top:12px;border-top:1px solid #e2e8f0;text-align:center;font-size:10px;color:#94a3b8}</style></head><body><div class="header"><div class="logo"><div class="logo-icon">📚</div><span class="lib-name">' + libName + '</span></div><div class="meta">Date Generated: <strong>' + dateStr + "</strong><br>Generated By: <strong>Librarian</strong></div></div><h1>" + _label + " Report</h1>" + (isSummary ? '<h2><span class="icon" style="background:#dbeafe;color:#2563eb">📊</span> Summary</h2><div class="stat-grid"><div class="stat-card"><div class="icon-sm">👤</div><div class="value">' + totalSeats + '</div><div class="label">Total Seats</div></div><div class="stat-card"><div class="icon-sm">📅</div><div class="value">' + (stats.today_bookings || bookings.length) + '</div><div class="label">Total Bookings</div></div><div class="stat-card"><div class="icon-sm">🪑</div><div class="value">' + utilPct + '%</div><div class="label">Seats Utilized</div></div></div><div class="stat-grid"><div class="stat-card"><div class="icon-sm">🚨</div><div class="value">' + (stats.pending_tickets || 0) + '</div><div class="label">Complaints</div></div><div class="stat-card"><div class="icon-sm">📚</div><div class="value">' + (stats.total_books || books.length) + '</div><div class="label">Books</div></div><div class="stat-card"><div class="icon-sm">🎉</div><div class="value">' + (stats.total_events || events.length) + '</div><div class="label">Events Held</div></div></div>' : "") + (isSummary || _type === "attendance" ? '<h2><span class="icon" style="background:#ede9fe;color:#7c3aed">✓</span> Attendance</h2>' + (attendance.length > 0 ? "<table><thead><tr><th>Seat</th><th>Student</th><th>Time Slot</th><th>Status</th></tr></thead><tbody>" + attendRows + "</tbody></table>" : '<p style="color:#94a3b8;font-size:12px">No attendance records for this period.</p>') : "") + (isSummary || _type === "bookings" ? '<h2><span class="icon" style="background:#dbeafe;color:#2563eb">📅</span> Bookings</h2>' + (bookings.length > 0 ? "<table><thead><tr><th>Seat No</th><th>Student</th><th>Time Slot</th><th>Status</th></tr></thead><tbody>" + bookingRows + "</tbody></table>" : '<p style="color:#94a3b8;font-size:12px">No bookings for this period.</p>') : "") + (isSummary || _type === "seat_utilization" ? '<h2><span class="icon" style="background:#d1fae5;color:#059669">🪑</span> Seat Utilization</h2><div style="margin:12px 0 20px 0"><div class="util-row"><span class="lbl">Total Seats:</span><span class="val">' + totalSeats + '</span><div class="bar-track"><div class="bar-fill bar-green" style="width:100%">&nbsp;</div></div></div><div class="util-row"><span class="lbl">Occupied:</span><span class="val">' + occupied + '</span><div class="bar-track"><div class="bar-fill bar-amber" style="width:' + utilPct + '%">' + utilPct + '%</div></div></div><div class="util-row"><span class="lbl">Available:</span><span class="val">' + available + '</span><div class="bar-track"><div class="bar-fill bar-green" style="width:' + availPct + '%">' + availPct + "%</div></div></div></div>" : "") + (isSummary || _type === "complaints" ? '<h2><span class="icon" style="background:#fee2e2;color:#dc2626">🚨</span> Complaints</h2><div class="stat-grid"><div class="stat-card"><div class="value">' + (stats.pending_tickets || 0) + '</div><div class="label">Open / In Progress</div></div></div><p style="color:#64748b;font-size:12px;margin-top:8px">Detailed complaint reports can be viewed in the Support &amp; Complaints section.</p>' : "") + (isSummary || _type === "books" ? '<h2><span class="icon" style="background:#fef3c7;color:#d97706">📖</span> Books</h2>' + (books.length > 0 ? "<table><thead><tr><th>Book Name</th><th>Author</th><th>Date</th></tr></thead><tbody>" + bookRows + "</tbody></table>" : '<p style="color:#94a3b8;font-size:12px">No book records.</p>') : "") + (isSummary || _type === "events" ? '<h2><span class="icon" style="background:#e0e7ff;color:#4f46e5">🎉</span> Events</h2>' + (events.length > 0 ? "<table><thead><tr><th>Event Name</th><th>Date</th><th>Participants</th></tr></thead><tbody>" + eventRows + "</tbody></table>" : '<p style="color:#94a3b8;font-size:12px">No events scheduled.</p>') : "") + '<div class="footer">Generated Automatically by Smart Lib — Library Management System &nbsp;|&nbsp; Page 1 of 1</div></body></html>';
    };
    const buildCSVReport = (_type, label, d) => {
      const now = (/* @__PURE__ */ new Date()).toLocaleString();
      const libName = d.dash?.library?.name || "Library";
      const stats = d.dash?.stats || {};
      const bookings = Array.isArray(d.bookings) ? d.bookings : [];
      const attendance = Array.isArray(d.attendance) ? d.attendance : [];
      const books = Array.isArray(d.books) ? d.books : [];
      const events = Array.isArray(d.events) ? d.events : [];
      const totalSeats = stats.total_seats || 0;
      const occupied = (stats.active_bookings || 0) + (stats.pending_bookings || 0);
      const utilPct = totalSeats > 0 ? Math.round(occupied / totalSeats * 100) : 0;
      let csv = '"' + libName + " — " + label + '"\n"Generated","' + now + '"\n\n';
      const isSummary = ["today", "weekly", "monthly"].includes(_type);
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
      if (isSummary || _type === "attendance") {
        csv += '\n"=== ATTENDANCE ==="\n"Seat","Student","Check-in","Status"\n';
        attendance.forEach((a) => {
          csv += '"' + (a.seat_number || a.seat?.seat_number || "") + '","' + (a.user?.name || a.student_name || "") + '","' + fmtTime12(a.check_in_time) + '","' + (a.status || (a.check_out_time ? "completed" : "checked_in")) + '"\n';
        });
      }
      if (isSummary || _type === "bookings") {
        csv += '\n"=== BOOKINGS ==="\n"Seat No","Student","Time Slot","Status"\n';
        bookings.forEach((b) => {
          csv += '"' + (b.seat?.seat_number || "") + '","' + (b.user?.name || "") + '","' + fmtTime12(b.booking_time) + " - " + fmtTime12(b.scheduled_end_time) + '","' + b.status + '"\n';
        });
      }
      if (isSummary || _type === "books") {
        csv += '\n"=== BOOKS ==="\n"Title","Author","Date"\n';
        books.forEach((bk) => {
          csv += '"' + (bk.title || "") + '","' + (bk.author || "") + '","' + fmtDate(bk.created_at) + '"\n';
        });
      }
      if (isSummary || _type === "events") {
        csv += '\n"=== EVENTS ==="\n"Event Name","Date","Participants"\n';
        events.forEach((ev) => {
          csv += '"' + (ev.title || "") + '","' + fmtDate(ev.date) + '","' + (ev.registrations_count ?? ev.joined_count ?? "") + '"\n';
        });
      }
      return csv;
    };
    const printHTMLReport = (html) => {
      const printWindow = window.open("", "_blank");
      if (!printWindow) {
        showError("Popup Blocked", "Please allow popups for this site to generate PDF reports.");
        return;
      }
      printWindow.document.write(html);
      printWindow.document.close();
      printWindow.onload = () => {
        setTimeout(() => {
          printWindow.print();
        }, 300);
      };
      setTimeout(() => {
        printWindow.print();
      }, 1e3);
    };
    const downloadAsFile = (filename, content, mimeType) => {
      const blob = new Blob([content], { type: mimeType });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    };
    const downloadReport = (entry) => {
      exportReport(entry.type, entry.format);
    };
    onMounted(() => {
      loadScheduledReports();
      loadReportHistory();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        _cache[42] || (_cache[42] = createStaticVNode('<div class="relative overflow-hidden rounded-xl bg-gradient-to-br from-emerald-700 via-emerald-800 to-teal-900 p-8 text-white shadow-lg text-left" data-v-496956bd><div class="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3" data-v-496956bd></div><div class="absolute bottom-0 left-16 w-40 h-40 bg-white/5 rounded-full translate-y-1/2" data-v-496956bd></div><div class="absolute top-8 right-32 w-20 h-20 bg-white/5 rounded-full" data-v-496956bd></div><div class="relative z-10 max-w-2xl" data-v-496956bd><h1 class="text-2xl font-bold tracking-tight leading-tight" data-v-496956bd>Library Reports Center</h1><p class="text-white/70 mt-2 text-xs font-medium leading-relaxed" data-v-496956bd> Generate real-time analytics, export data spreadsheets, or configure automated report delivery directly to your inbox. </p></div></div>', 1)),
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("h2", _hoisted_3, [
            createVNode(unref(Zap), { class: "w-4 h-4 text-amber-500" }),
            _cache[13] || (_cache[13] = createBaseVNode("span", null, "Quick Generate", -1))
          ]),
          createBaseVNode("div", _hoisted_4, [
            (openBlock(), createElementBlock(Fragment, null, renderList(quickSummaries, (summary) => {
              return createBaseVNode("div", {
                key: summary.label,
                class: "bg-white rounded-xl p-5 border border-slate-100 shadow-sm flex flex-col justify-between hover:shadow-md hover:border-emerald-200 transition-all text-left group"
              }, [
                createBaseVNode("div", null, [
                  createBaseVNode("div", _hoisted_5, [
                    createBaseVNode("div", {
                      class: normalizeClass(["w-9 h-9 rounded-lg flex items-center justify-center border", summary.bgColor])
                    }, [
                      (openBlock(), createBlock(resolveDynamicComponent(summary.icon), {
                        class: normalizeClass(["w-4.5 h-4.5", summary.iconColor])
                      }, null, 8, ["class"]))
                    ], 2),
                    createBaseVNode("span", _hoisted_6, toDisplayString(summary.label), 1)
                  ]),
                  _cache[14] || (_cache[14] = createBaseVNode("p", { class: "text-[11px] text-slate-400 font-medium mb-5" }, "Instant compilation of key metrics, bookings, and active stats.", -1))
                ]),
                createBaseVNode("div", _hoisted_7, [
                  createBaseVNode("button", {
                    onClick: ($event) => exportReport(summary.type, "pdf"),
                    class: "inline-flex items-center justify-center gap-1 py-2 rounded-lg text-[10px] font-bold text-red-600 bg-red-50 hover:bg-red-100 border border-red-100 transition-all cursor-pointer shadow-sm",
                    title: "Download PDF"
                  }, [
                    createVNode(unref(FileText), { class: "w-3.5 h-3.5" }),
                    _cache[15] || (_cache[15] = createBaseVNode("span", null, "PDF", -1))
                  ], 8, _hoisted_8),
                  createBaseVNode("button", {
                    onClick: ($event) => exportReport(summary.type, "excel"),
                    class: "inline-flex items-center justify-center gap-1 py-2 rounded-lg text-[10px] font-bold text-green-600 bg-green-50 hover:bg-green-100 border border-green-100 transition-all cursor-pointer shadow-sm",
                    title: "Download Excel"
                  }, [
                    createVNode(unref(Sheet), { class: "w-3.5 h-3.5" }),
                    _cache[16] || (_cache[16] = createBaseVNode("span", null, "Excel", -1))
                  ], 8, _hoisted_9),
                  createBaseVNode("button", {
                    onClick: ($event) => openScheduleModal(summary.type, summary.label),
                    class: "inline-flex items-center justify-center gap-1 py-2 rounded-lg text-[10px] font-bold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-100 transition-all cursor-pointer shadow-sm",
                    title: "Schedule Report"
                  }, [
                    createVNode(unref(Clock), { class: "w-3.5 h-3.5" }),
                    _cache[17] || (_cache[17] = createBaseVNode("span", null, "Schedule", -1))
                  ], 8, _hoisted_10)
                ])
              ]);
            }), 64))
          ])
        ]),
        createBaseVNode("div", _hoisted_11, [
          createBaseVNode("h2", _hoisted_12, [
            createVNode(unref(LayoutGrid), { class: "w-4 h-4 text-teal-500" }),
            _cache[18] || (_cache[18] = createBaseVNode("span", null, "Report Categories", -1))
          ]),
          createBaseVNode("div", _hoisted_13, [
            (openBlock(), createElementBlock(Fragment, null, renderList(reportCategories, (cat) => {
              return createBaseVNode("div", {
                key: cat.type,
                class: "bg-white rounded-xl p-5 border border-slate-100 shadow-sm hover:shadow-md hover:border-emerald-200 transition-all flex flex-col justify-between"
              }, [
                createBaseVNode("div", null, [
                  createBaseVNode("div", _hoisted_14, [
                    createBaseVNode("div", {
                      class: normalizeClass(["w-9 h-9 rounded-lg flex items-center justify-center border", cat.bgColor])
                    }, [
                      (openBlock(), createBlock(resolveDynamicComponent(cat.icon), {
                        class: normalizeClass(["w-4.5 h-4.5", cat.iconColor])
                      }, null, 8, ["class"]))
                    ], 2),
                    createBaseVNode("h3", _hoisted_15, toDisplayString(cat.label), 1)
                  ]),
                  createBaseVNode("ul", _hoisted_16, [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(cat.descriptions, (desc) => {
                      return openBlock(), createElementBlock("li", {
                        key: desc,
                        class: "flex items-start"
                      }, [
                        _cache[19] || (_cache[19] = createBaseVNode("span", { class: "mr-2 text-emerald-500" }, "•", -1)),
                        createTextVNode(toDisplayString(desc), 1)
                      ]);
                    }), 128))
                  ])
                ]),
                createBaseVNode("div", _hoisted_17, [
                  createBaseVNode("button", {
                    onClick: ($event) => openExportModal(cat.type, cat.label, "pdf"),
                    class: "inline-flex items-center justify-center gap-1 py-1.5 rounded-lg text-[10px] font-bold text-red-600 bg-red-50 hover:bg-red-100 border border-red-100 transition-all cursor-pointer"
                  }, [
                    createVNode(unref(FileText), { class: "w-3 h-3" }),
                    _cache[20] || (_cache[20] = createBaseVNode("span", null, "PDF", -1))
                  ], 8, _hoisted_18),
                  createBaseVNode("button", {
                    onClick: ($event) => openExportModal(cat.type, cat.label, "excel"),
                    class: "inline-flex items-center justify-center gap-1 py-1.5 rounded-lg text-[10px] font-bold text-green-600 bg-green-50 hover:bg-green-100 border border-green-100 transition-all cursor-pointer"
                  }, [
                    createVNode(unref(Sheet), { class: "w-3 h-3" }),
                    _cache[21] || (_cache[21] = createBaseVNode("span", null, "Excel", -1))
                  ], 8, _hoisted_19),
                  createBaseVNode("button", {
                    onClick: ($event) => openScheduleModal(cat.type, cat.label),
                    class: "inline-flex items-center justify-center gap-1 py-1.5 rounded-lg text-[10px] font-bold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-100 transition-all cursor-pointer"
                  }, [
                    createVNode(unref(CalendarClock), { class: "w-3 h-3" }),
                    _cache[22] || (_cache[22] = createBaseVNode("span", null, "Schedule", -1))
                  ], 8, _hoisted_20)
                ])
              ]);
            }), 64))
          ])
        ]),
        createBaseVNode("div", _hoisted_21, [
          createBaseVNode("div", _hoisted_22, [
            createBaseVNode("button", {
              onClick: _cache[0] || (_cache[0] = ($event) => activeTab.value = "scheduled"),
              class: normalizeClass([
                "px-4 py-2 text-xs font-semibold rounded-xl transition-all cursor-pointer flex items-center space-x-2",
                activeTab.value === "scheduled" ? "bg-white text-emerald-700 shadow-sm border border-slate-200/40" : "text-slate-500 hover:text-slate-700"
              ])
            }, [
              createVNode(unref(CalendarClock), { class: "w-3.5 h-3.5" }),
              _cache[23] || (_cache[23] = createBaseVNode("span", null, "Scheduled Reports", -1))
            ], 2),
            createBaseVNode("button", {
              onClick: _cache[1] || (_cache[1] = ($event) => activeTab.value = "history"),
              class: normalizeClass([
                "px-4 py-2 text-xs font-semibold rounded-xl transition-all cursor-pointer flex items-center space-x-2",
                activeTab.value === "history" ? "bg-white text-emerald-700 shadow-sm border border-slate-200/40" : "text-slate-500 hover:text-slate-700"
              ])
            }, [
              createVNode(unref(History), { class: "w-3.5 h-3.5" }),
              _cache[24] || (_cache[24] = createBaseVNode("span", null, "Report History", -1))
            ], 2)
          ]),
          activeTab.value === "scheduled" ? (openBlock(), createElementBlock("div", _hoisted_23, [
            scheduledReports.value.length === 0 ? (openBlock(), createElementBlock("div", _hoisted_24, [
              createBaseVNode("div", _hoisted_25, [
                createVNode(unref(CalendarClock), { class: "w-6 h-6" })
              ]),
              _cache[25] || (_cache[25] = createBaseVNode("p", { class: "text-slate-400 font-semibold text-xs uppercase tracking-wider" }, "No scheduled reports yet", -1)),
              _cache[26] || (_cache[26] = createBaseVNode("p", { class: "text-[11px] text-slate-400 mt-1" }, 'Configure automated notifications by clicking "Schedule" above.', -1))
            ])) : (openBlock(), createElementBlock("div", _hoisted_26, [
              createBaseVNode("table", _hoisted_27, [
                _cache[27] || (_cache[27] = createBaseVNode("thead", null, [
                  createBaseVNode("tr", { class: "text-slate-400 font-bold uppercase tracking-wider border-b border-slate-100" }, [
                    createBaseVNode("th", { class: "text-left py-3.5 px-4 font-semibold" }, "Report Name"),
                    createBaseVNode("th", { class: "text-left py-3.5 px-4 font-semibold" }, "Frequency"),
                    createBaseVNode("th", { class: "text-left py-3.5 px-4 font-semibold" }, "Format"),
                    createBaseVNode("th", { class: "text-left py-3.5 px-4 font-semibold" }, "Recipient"),
                    createBaseVNode("th", { class: "text-left py-3.5 px-4 font-semibold" }, "Status"),
                    createBaseVNode("th", { class: "text-right py-3.5 px-4 font-semibold" }, "Actions")
                  ])
                ], -1)),
                createBaseVNode("tbody", _hoisted_28, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(scheduledReports.value, (sr, idx) => {
                    return openBlock(), createElementBlock("tr", {
                      key: idx,
                      class: "hover:bg-slate-50/50 transition-colors"
                    }, [
                      createBaseVNode("td", _hoisted_29, toDisplayString(sr.name), 1),
                      createBaseVNode("td", _hoisted_30, toDisplayString(sr.frequency), 1),
                      createBaseVNode("td", _hoisted_31, [
                        createBaseVNode("span", {
                          class: normalizeClass([
                            "px-2 py-0.5 rounded text-[9px] font-bold uppercase border",
                            sr.format === "pdf" ? "bg-red-50 border-red-100 text-red-600" : "bg-green-50 border-green-100 text-green-600"
                          ])
                        }, toDisplayString(sr.format), 3)
                      ]),
                      createBaseVNode("td", _hoisted_32, toDisplayString(sr.recipient), 1),
                      createBaseVNode("td", _hoisted_33, [
                        createBaseVNode("span", {
                          class: normalizeClass([
                            "inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[9px] font-bold uppercase border",
                            sr.status === "active" ? "bg-green-50 border-green-100 text-green-700" : "bg-yellow-50 border-yellow-100 text-yellow-700"
                          ])
                        }, [
                          createBaseVNode("span", {
                            class: normalizeClass(["w-1.5 h-1.5 rounded-full", sr.status === "active" ? "bg-green-500" : "bg-yellow-500"])
                          }, null, 2),
                          createTextVNode(" " + toDisplayString(sr.status), 1)
                        ], 2)
                      ]),
                      createBaseVNode("td", _hoisted_34, [
                        createBaseVNode("div", _hoisted_35, [
                          createBaseVNode("button", {
                            onClick: ($event) => toggleScheduleStatus(idx),
                            class: "p-2 rounded-lg hover:bg-emerald-50 text-slate-400 hover:text-emerald-600 transition-colors border border-transparent hover:border-emerald-100 cursor-pointer",
                            title: sr.status === "active" ? "Pause" : "Resume"
                          }, [
                            sr.status === "active" ? (openBlock(), createBlock(unref(Pause), {
                              key: 0,
                              class: "w-3.5 h-3.5"
                            })) : (openBlock(), createBlock(unref(Play), {
                              key: 1,
                              class: "w-3.5 h-3.5"
                            }))
                          ], 8, _hoisted_36),
                          createBaseVNode("button", {
                            onClick: ($event) => runScheduledNow(idx),
                            class: "p-2 rounded-lg hover:bg-blue-50 text-slate-400 hover:text-blue-600 transition-colors border border-transparent hover:border-blue-100 cursor-pointer",
                            title: "Run Now"
                          }, [
                            createVNode(unref(RefreshCw), { class: "w-3.5 h-3.5" })
                          ], 8, _hoisted_37),
                          createBaseVNode("button", {
                            onClick: ($event) => deleteScheduled(idx),
                            class: "p-2 rounded-lg hover:bg-red-50 text-slate-400 hover:text-red-600 transition-colors border border-transparent hover:border-red-100 cursor-pointer",
                            title: "Delete"
                          }, [
                            createVNode(unref(Trash2), { class: "w-3.5 h-3.5" })
                          ], 8, _hoisted_38)
                        ])
                      ])
                    ]);
                  }), 128))
                ])
              ])
            ]))
          ])) : createCommentVNode("", true),
          activeTab.value === "history" ? (openBlock(), createElementBlock("div", _hoisted_39, [
            reportHistory.value.length === 0 ? (openBlock(), createElementBlock("div", _hoisted_40, [
              createBaseVNode("div", _hoisted_41, [
                createVNode(unref(History), { class: "w-6 h-6" })
              ]),
              _cache[28] || (_cache[28] = createBaseVNode("p", { class: "text-slate-400 font-semibold text-xs uppercase tracking-wider" }, "No reports generated yet", -1)),
              _cache[29] || (_cache[29] = createBaseVNode("p", { class: "text-[11px] text-slate-400 mt-1" }, "Export any reports above to initialize generation log history.", -1))
            ])) : (openBlock(), createElementBlock("div", _hoisted_42, [
              createBaseVNode("table", _hoisted_43, [
                _cache[31] || (_cache[31] = createBaseVNode("thead", null, [
                  createBaseVNode("tr", { class: "text-slate-400 font-bold uppercase tracking-wider border-b border-slate-100" }, [
                    createBaseVNode("th", { class: "text-left py-3.5 px-4 font-semibold" }, "Report Title"),
                    createBaseVNode("th", { class: "text-left py-3.5 px-4 font-semibold" }, "Category Type"),
                    createBaseVNode("th", { class: "text-left py-3.5 px-4 font-semibold" }, "Format"),
                    createBaseVNode("th", { class: "text-left py-3.5 px-4 font-semibold" }, "Generated Timestamp"),
                    createBaseVNode("th", { class: "text-right py-3.5 px-4 font-semibold" }, "Actions")
                  ])
                ], -1)),
                createBaseVNode("tbody", _hoisted_44, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(reportHistory.value, (h, idx) => {
                    return openBlock(), createElementBlock("tr", {
                      key: idx,
                      class: "hover:bg-slate-50/50 transition-colors"
                    }, [
                      createBaseVNode("td", _hoisted_45, toDisplayString(h.name), 1),
                      createBaseVNode("td", _hoisted_46, toDisplayString(h.type), 1),
                      createBaseVNode("td", _hoisted_47, [
                        createBaseVNode("span", {
                          class: normalizeClass([
                            "px-2 py-0.5 rounded text-[9px] font-bold uppercase border",
                            h.format === "pdf" ? "bg-red-50 border-red-100 text-red-600" : "bg-green-50 border-green-100 text-green-600"
                          ])
                        }, toDisplayString(h.format), 3)
                      ]),
                      createBaseVNode("td", _hoisted_48, toDisplayString(h.generatedAt), 1),
                      createBaseVNode("td", _hoisted_49, [
                        createBaseVNode("button", {
                          onClick: ($event) => downloadReport(h),
                          class: "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[10px] font-bold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-100 transition-all cursor-pointer shadow-sm"
                        }, [
                          createVNode(unref(Download), { class: "w-3.5 h-3.5" }),
                          _cache[30] || (_cache[30] = createBaseVNode("span", null, "Download", -1))
                        ], 8, _hoisted_50)
                      ])
                    ]);
                  }), 128))
                ])
              ])
            ]))
          ])) : createCommentVNode("", true)
        ]),
        scheduleModal.show ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm",
          onClick: _cache[8] || (_cache[8] = withModifiers(($event) => scheduleModal.show = false, ["self"]))
        }, [
          createBaseVNode("div", _hoisted_51, [
            createBaseVNode("div", _hoisted_52, [
              createBaseVNode("div", _hoisted_53, [
                createBaseVNode("div", _hoisted_54, [
                  createVNode(unref(CalendarClock), { class: "w-5 h-5" })
                ]),
                createBaseVNode("div", null, [
                  _cache[32] || (_cache[32] = createBaseVNode("h3", { class: "text-base font-bold text-slate-800 leading-snug" }, "Schedule Report", -1)),
                  createBaseVNode("p", _hoisted_55, toDisplayString(scheduleModal.reportName), 1)
                ])
              ]),
              createBaseVNode("button", {
                onClick: _cache[2] || (_cache[2] = ($event) => scheduleModal.show = false),
                class: "p-2 hover:bg-slate-50 rounded-lg transition-colors cursor-pointer"
              }, [
                createVNode(unref(X), { class: "w-5 h-5 text-slate-400" })
              ])
            ]),
            createBaseVNode("div", _hoisted_56, [
              createBaseVNode("div", null, [
                _cache[33] || (_cache[33] = createBaseVNode("label", { class: "text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-2 block" }, "Delivery Frequency", -1)),
                createBaseVNode("div", _hoisted_57, [
                  (openBlock(), createElementBlock(Fragment, null, renderList(["daily", "weekly", "monthly"], (f) => {
                    return createBaseVNode("button", {
                      key: f,
                      onClick: ($event) => scheduleModal.frequency = f,
                      class: normalizeClass([
                        "py-2.5 rounded-xl font-bold text-xs transition-all border-2 capitalize cursor-pointer",
                        scheduleModal.frequency === f ? "bg-emerald-600 text-white border-emerald-600 shadow-sm" : "bg-slate-50 text-slate-600 border-transparent hover:border-emerald-100"
                      ])
                    }, toDisplayString(f), 11, _hoisted_58);
                  }), 64))
                ])
              ]),
              createBaseVNode("div", null, [
                _cache[36] || (_cache[36] = createBaseVNode("label", { class: "text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-2 block" }, "Document Format", -1)),
                createBaseVNode("div", _hoisted_59, [
                  createBaseVNode("button", {
                    onClick: _cache[3] || (_cache[3] = ($event) => scheduleModal.format = "pdf"),
                    class: normalizeClass([
                      "py-2.5 rounded-xl font-bold text-xs transition-all border-2 flex items-center justify-center gap-2 cursor-pointer",
                      scheduleModal.format === "pdf" ? "bg-red-55 border-red-200 text-red-700" : "bg-slate-50 text-slate-600 border-transparent hover:border-red-200"
                    ])
                  }, [
                    createVNode(unref(FileText), { class: "w-4 h-4 text-red-500" }),
                    _cache[34] || (_cache[34] = createTextVNode(" PDF ", -1))
                  ], 2),
                  createBaseVNode("button", {
                    onClick: _cache[4] || (_cache[4] = ($event) => scheduleModal.format = "excel"),
                    class: normalizeClass([
                      "py-2.5 rounded-xl font-bold text-xs transition-all border-2 flex items-center justify-center gap-2 cursor-pointer",
                      scheduleModal.format === "excel" ? "bg-green-55 border-green-200 text-green-700" : "bg-slate-50 text-slate-600 border-transparent hover:border-green-200"
                    ])
                  }, [
                    createVNode(unref(Sheet), { class: "w-4 h-4 text-green-500" }),
                    _cache[35] || (_cache[35] = createTextVNode(" Excel ", -1))
                  ], 2)
                ])
              ]),
              createBaseVNode("div", null, [
                _cache[37] || (_cache[37] = createBaseVNode("label", { class: "text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-2 block" }, "Recipient Email Address", -1)),
                withDirectives(createBaseVNode("input", {
                  "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => scheduleModal.recipient = $event),
                  type: "email",
                  placeholder: "admin@example.com",
                  class: "w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-400 transition-all text-sm text-slate-700 font-medium bg-slate-50/50"
                }, null, 512), [
                  [vModelText, scheduleModal.recipient]
                ])
              ]),
              createBaseVNode("div", null, [
                _cache[38] || (_cache[38] = createBaseVNode("label", { class: "text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-2 block" }, "Preferred Send Time", -1)),
                withDirectives(createBaseVNode("input", {
                  "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => scheduleModal.time = $event),
                  type: "time",
                  class: "w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-400 transition-all text-sm text-slate-700 font-medium bg-slate-50/50"
                }, null, 512), [
                  [vModelText, scheduleModal.time]
                ])
              ])
            ]),
            createBaseVNode("div", _hoisted_60, [
              createBaseVNode("button", {
                onClick: _cache[7] || (_cache[7] = ($event) => scheduleModal.show = false),
                class: "flex-1 px-4 py-2.5 border border-slate-200 text-slate-500 font-bold rounded-xl hover:bg-slate-50 transition-all text-xs cursor-pointer"
              }, " Cancel "),
              createBaseVNode("button", {
                onClick: saveSchedule,
                class: "flex-1 px-4 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl transition-all disabled:opacity-50 text-xs font-bold cursor-pointer"
              }, " Save Schedule ")
            ])
          ])
        ])) : createCommentVNode("", true),
        exportModal.show ? (openBlock(), createElementBlock("div", {
          key: 1,
          class: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm",
          onClick: _cache[11] || (_cache[11] = withModifiers(($event) => exportModal.show = false, ["self"]))
        }, [
          createBaseVNode("div", _hoisted_61, [
            createBaseVNode("div", _hoisted_62, [
              createBaseVNode("div", _hoisted_63, [
                createBaseVNode("div", _hoisted_64, [
                  createVNode(unref(FileText), { class: "w-5 h-5" })
                ]),
                createBaseVNode("div", null, [
                  _cache[39] || (_cache[39] = createBaseVNode("h3", { class: "text-base font-bold text-slate-800 leading-snug" }, "Export Report", -1)),
                  createBaseVNode("p", _hoisted_65, toDisplayString(exportModal.reportName), 1)
                ])
              ]),
              createBaseVNode("button", {
                onClick: _cache[9] || (_cache[9] = ($event) => exportModal.show = false),
                class: "p-2 hover:bg-slate-50 rounded-lg transition-colors cursor-pointer"
              }, [
                createVNode(unref(X), { class: "w-5 h-5 text-slate-400" })
              ])
            ]),
            createBaseVNode("div", _hoisted_66, [
              createBaseVNode("div", null, [
                _cache[40] || (_cache[40] = createBaseVNode("label", { class: "text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-2.5 block" }, "Time Period", -1)),
                createBaseVNode("div", _hoisted_67, [
                  (openBlock(), createElementBlock(Fragment, null, renderList(timespanOptions, (ts) => {
                    return createBaseVNode("button", {
                      key: ts.value,
                      onClick: ($event) => exportModal.timespan = ts.value,
                      class: normalizeClass([
                        "py-2.5 rounded-xl font-bold text-xs transition-all border-2 cursor-pointer",
                        exportModal.timespan === ts.value ? "bg-emerald-600 text-white border-emerald-600 shadow-sm" : "bg-slate-50 text-slate-600 border-transparent hover:border-emerald-100"
                      ])
                    }, toDisplayString(ts.label), 11, _hoisted_68);
                  }), 64))
                ])
              ]),
              createBaseVNode("div", {
                class: normalizeClass(["p-4 rounded-xl border flex items-center gap-3", exportModal.format === "pdf" ? "bg-red-50/50 border-red-100 text-red-700" : "bg-green-50/50 border-green-100 text-green-700"])
              }, [
                createBaseVNode("div", {
                  class: normalizeClass(["w-8 h-8 rounded-lg flex items-center justify-center bg-white border", exportModal.format === "pdf" ? "border-red-100" : "border-green-100"])
                }, [
                  exportModal.format === "pdf" ? (openBlock(), createBlock(unref(FileText), {
                    key: 0,
                    class: "w-4 h-4 text-red-500"
                  })) : (openBlock(), createBlock(unref(Sheet), {
                    key: 1,
                    class: "w-4 h-4 text-green-500"
                  }))
                ], 2),
                createBaseVNode("div", null, [
                  createBaseVNode("p", _hoisted_69, toDisplayString(exportModal.format === "pdf" ? "PDF Document" : "Excel Spreadsheet"), 1),
                  _cache[41] || (_cache[41] = createBaseVNode("p", { class: "text-[10px] text-slate-400 font-semibold mt-0.5" }, "High-fidelity layout report format.", -1))
                ])
              ], 2)
            ]),
            createBaseVNode("div", _hoisted_70, [
              createBaseVNode("button", {
                onClick: _cache[10] || (_cache[10] = ($event) => exportModal.show = false),
                class: "flex-1 px-4 py-2.5 border border-slate-200 text-slate-500 font-bold rounded-xl hover:bg-slate-50 transition-all text-xs cursor-pointer"
              }, " Cancel "),
              createBaseVNode("button", {
                onClick: confirmExport,
                class: "flex-1 px-4 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl transition-all disabled:opacity-50 text-xs font-bold cursor-pointer"
              }, " Generate ")
            ])
          ])
        ])) : createCommentVNode("", true),
        createVNode(Transition, { name: "slide-up" }, {
          default: withCtx(() => [
            exportToast.show ? (openBlock(), createElementBlock("div", _hoisted_71, [
              exportToast.status === "loading" ? (openBlock(), createElementBlock("div", _hoisted_72, [
                createVNode(unref(RefreshCw), { class: "w-5 h-5 text-emerald-600 animate-spin" })
              ])) : (openBlock(), createElementBlock("div", _hoisted_73, [
                createVNode(unref(CircleCheckBig), { class: "w-5 h-5 text-green-600" })
              ])),
              createBaseVNode("div", null, [
                createBaseVNode("p", _hoisted_74, toDisplayString(exportToast.title), 1),
                createBaseVNode("p", _hoisted_75, toDisplayString(exportToast.subtitle), 1)
              ]),
              createBaseVNode("button", {
                onClick: _cache[12] || (_cache[12] = ($event) => exportToast.show = false),
                class: "ml-auto p-1.5 hover:bg-slate-50 rounded-lg text-slate-400 transition-colors cursor-pointer"
              }, [
                createVNode(unref(X), { class: "w-4 h-4" })
              ])
            ])) : createCommentVNode("", true)
          ]),
          _: 1
        })
      ]);
    };
  }
});
const ReportsPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-496956bd"]]);
export {
  ReportsPage as default
};
