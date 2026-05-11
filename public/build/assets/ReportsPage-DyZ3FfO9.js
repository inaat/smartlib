import { d as defineComponent, r as ref, q as reactive, o as onMounted, c as createElementBlock, b as createBaseVNode, m as createCommentVNode, f as createVNode, j as createTextVNode, u as unref, F as Fragment, h as renderList, n as normalizeClass, s as withModifiers, t as toDisplayString, v as withDirectives, x as vModelText, k as createBlock, w as withCtx, T as Transition, O as librarianAPI, l as resolveDynamicComponent, i as openBlock } from "./main-Dk2mUbjP.js";
import { u as useSwal } from "./useSwal-J4kFABxt.js";
import { Z as Zap } from "./zap-DSIh5NSP.js";
import { L as LayoutGrid } from "./layout-grid-DOhNO0pp.js";
import { C as CalendarClock, S as Sheet, a as CalendarDays } from "./sheet-DsMI3jAH.js";
import { H as History } from "./history-Daw3vwPa.js";
import { X } from "./x-YsebUqOw.js";
import { F as FileText } from "./file-text-Co_qvAEm.js";
import { C as Calendar } from "./calendar-e6msfKJ3.js";
import { U as Users } from "./users-BK7GPR5d.js";
import { A as Armchair } from "./armchair-BFgkZ4D5.js";
import { T as TriangleAlert } from "./triangle-alert-5gSvUsq_.js";
import { B as BookMarked } from "./book-marked-CJInohzw.js";
import { C as Clock } from "./clock-DHHRCinm.js";
import { c as createLucideIcon } from "./createLucideIcon-6n-23kmf.js";
import { R as RefreshCw } from "./refresh-cw-D9O5gUrY.js";
import { T as Trash2 } from "./trash-2-jL_HLZPz.js";
import { D as Download } from "./download-BCNs_knP.js";
import { C as CircleCheckBig } from "./circle-check-big-CgVU7jsB.js";
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
const _hoisted_1 = { class: "space-y-8 pb-12" };
const _hoisted_2 = { class: "text-lg font-bold text-gray-800 mb-4 flex items-center" };
const _hoisted_3 = { class: "space-y-3" };
const _hoisted_4 = { class: "flex items-center gap-3" };
const _hoisted_5 = { class: "font-bold text-gray-800" };
const _hoisted_6 = { class: "flex items-center gap-2 flex-wrap" };
const _hoisted_7 = ["onClick"];
const _hoisted_8 = ["onClick"];
const _hoisted_9 = ["onClick"];
const _hoisted_10 = { class: "text-lg font-bold text-gray-800 mb-4 flex items-center" };
const _hoisted_11 = { class: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5" };
const _hoisted_12 = { class: "flex items-center gap-3 mb-3" };
const _hoisted_13 = { class: "font-bold text-gray-900 text-base" };
const _hoisted_14 = { class: "text-xs text-gray-500 mb-5 space-y-1 pl-1" };
const _hoisted_15 = { class: "flex items-center gap-2 flex-wrap" };
const _hoisted_16 = ["onClick"];
const _hoisted_17 = ["onClick"];
const _hoisted_18 = ["onClick"];
const _hoisted_19 = { class: "bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden" };
const _hoisted_20 = { class: "flex border-b border-gray-100" };
const _hoisted_21 = {
  key: 0,
  class: "p-6"
};
const _hoisted_22 = {
  key: 0,
  class: "text-center py-16"
};
const _hoisted_23 = {
  key: 1,
  class: "overflow-x-auto"
};
const _hoisted_24 = { class: "w-full text-sm" };
const _hoisted_25 = { class: "py-3 px-3 font-bold text-gray-800" };
const _hoisted_26 = { class: "py-3 px-3 text-gray-600 capitalize" };
const _hoisted_27 = { class: "py-3 px-3" };
const _hoisted_28 = { class: "py-3 px-3 text-gray-500 text-xs" };
const _hoisted_29 = { class: "py-3 px-3" };
const _hoisted_30 = { class: "py-3 px-3 text-right" };
const _hoisted_31 = { class: "flex items-center justify-end gap-1" };
const _hoisted_32 = ["onClick", "title"];
const _hoisted_33 = ["onClick"];
const _hoisted_34 = ["onClick"];
const _hoisted_35 = {
  key: 1,
  class: "p-6"
};
const _hoisted_36 = {
  key: 0,
  class: "text-center py-16"
};
const _hoisted_37 = {
  key: 1,
  class: "overflow-x-auto"
};
const _hoisted_38 = { class: "w-full text-sm" };
const _hoisted_39 = { class: "py-3 px-3 font-bold text-gray-800" };
const _hoisted_40 = { class: "py-3 px-3 text-gray-600 capitalize" };
const _hoisted_41 = { class: "py-3 px-3" };
const _hoisted_42 = { class: "py-3 px-3 text-gray-500 text-xs" };
const _hoisted_43 = { class: "py-3 px-3 text-right" };
const _hoisted_44 = ["onClick"];
const _hoisted_45 = { class: "bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl" };
const _hoisted_46 = { class: "flex items-center justify-between mb-6" };
const _hoisted_47 = { class: "text-sm text-gray-500 mt-1" };
const _hoisted_48 = { class: "space-y-5" };
const _hoisted_49 = { class: "grid grid-cols-3 gap-2" };
const _hoisted_50 = ["onClick"];
const _hoisted_51 = { class: "grid grid-cols-2 gap-2" };
const _hoisted_52 = { class: "flex gap-3 mt-8" };
const _hoisted_53 = { class: "bg-white rounded-3xl p-8 max-w-sm w-full shadow-2xl" };
const _hoisted_54 = { class: "flex items-center justify-between mb-6" };
const _hoisted_55 = { class: "text-sm text-gray-500 mt-1" };
const _hoisted_56 = { class: "mb-6" };
const _hoisted_57 = { class: "grid grid-cols-3 gap-2" };
const _hoisted_58 = ["onClick"];
const _hoisted_59 = { class: "flex items-center gap-2" };
const _hoisted_60 = { class: "flex gap-3" };
const _hoisted_61 = {
  key: 0,
  class: "fixed bottom-6 right-6 z-50 bg-white rounded-2xl shadow-2xl border border-gray-100 p-5 flex items-center gap-4 min-w-[320px]"
};
const _hoisted_62 = {
  key: 0,
  class: "w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center"
};
const _hoisted_63 = {
  key: 1,
  class: "w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center"
};
const _hoisted_64 = { class: "font-bold text-gray-800 text-sm" };
const _hoisted_65 = { class: "text-xs text-gray-500" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ReportsPage",
  setup(__props) {
    const { showSuccess, showError } = useSwal();
    const activeTab = ref("scheduled");
    const quickSummaries = [
      { label: "Generate Today Summary", type: "today", icon: CalendarDays, bgColor: "bg-blue-100", iconColor: "text-blue-600" },
      { label: "Generate Weekly Summary", type: "weekly", icon: Calendar, bgColor: "bg-emerald-100", iconColor: "text-emerald-600" },
      { label: "Generate Monthly Summary", type: "monthly", icon: CalendarClock, bgColor: "bg-purple-100", iconColor: "text-purple-600" }
    ];
    const reportCategories = [
      {
        label: "Attendance",
        type: "attendance",
        icon: Users,
        bgColor: "bg-violet-100",
        iconColor: "text-violet-600",
        descriptions: ["Reports, present/absent approx.", "Daily and weekly summaries"]
      },
      {
        label: "Bookings",
        type: "bookings",
        icon: Calendar,
        bgColor: "bg-blue-100",
        iconColor: "text-blue-600",
        descriptions: ["Reports, list, statistics", "Peak hours analysis"]
      },
      {
        label: "Seat Utilization",
        type: "seat_utilization",
        icon: Armchair,
        bgColor: "bg-teal-100",
        iconColor: "text-teal-600",
        descriptions: ["Search: seat, usage & utilizers", "Availability heatmaps"]
      },
      {
        label: "Complaints",
        type: "complaints",
        icon: TriangleAlert,
        bgColor: "bg-red-100",
        iconColor: "text-red-600",
        descriptions: ["Reports, mishapances & complaints", "Resolution tracking"]
      },
      {
        label: "Books",
        type: "books",
        icon: BookMarked,
        bgColor: "bg-amber-100",
        iconColor: "text-amber-600",
        descriptions: ["Report: books, genre, status", "Reservation analytics"]
      },
      {
        label: "Events",
        type: "events",
        icon: CalendarDays,
        bgColor: "bg-indigo-100",
        iconColor: "text-indigo-600",
        descriptions: ["View: scheduled, attendance stats", "Participation tracking"]
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
      return '<!DOCTYPE html><html><head><meta charset="UTF-8"><title>Daily End-of-Day Report — ' + libName + '</title><style>@page{size:A4;margin:20mm}*{box-sizing:border-box}body{font-family:"Segoe UI",system-ui,sans-serif;max-width:780px;margin:0 auto;color:#1e293b;padding:30px 20px;font-size:13px}.header{display:flex;align-items:center;justify-content:space-between;margin-bottom:30px;padding-bottom:16px;border-bottom:3px solid #1e3a5f}.header .logo{display:flex;align-items:center;gap:12px}.header .logo-icon{width:48px;height:48px;background:#1e3a5f;border-radius:12px;display:flex;align-items:center;justify-content:center;color:#fff;font-size:22px;font-weight:800}.header .lib-name{font-size:22px;font-weight:800;color:#1e3a5f}.header .meta{text-align:right;font-size:11px;color:#64748b;line-height:1.6}.header .meta strong{color:#1e3a5f}h1{font-size:22px;color:#1e3a5f;margin:0 0 24px 0}h2{font-size:15px;color:#1e3a5f;margin:28px 0 12px 0;display:flex;align-items:center;gap:8px}h2 .icon{width:24px;height:24px;border-radius:6px;display:inline-flex;align-items:center;justify-content:center;font-size:13px}.stat-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin:0 0 8px 0}.stat-card{padding:16px;border-radius:10px;background:#f8fafc;border:1px solid #e2e8f0;text-align:center}.stat-card .value{font-size:32px;font-weight:800;color:#1e3a5f}.stat-card .label{font-size:11px;color:#64748b;margin-top:2px;text-transform:uppercase;letter-spacing:.05em;font-weight:600}.stat-card .icon-sm{font-size:16px;margin-bottom:4px}table{width:100%;border-collapse:collapse;margin:8px 0 20px 0;font-size:12px}th{background:#1e3a5f;color:#fff;padding:8px 12px;text-align:left;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.04em}td{padding:8px 12px;border-bottom:1px solid #e2e8f0}tr:nth-child(even){background:#f8fafc}.util-row{display:flex;align-items:center;margin-bottom:6px;font-size:12px}.util-row .lbl{width:100px;color:#64748b;font-weight:600}.util-row .val{width:60px;font-weight:700;color:#1e3a5f;text-align:right;margin-right:12px}.bar-track{flex:1;height:22px;background:#e2e8f0;border-radius:6px;overflow:hidden}.bar-fill{height:100%;border-radius:6px;display:flex;align-items:center;justify-content:flex-end;padding-right:8px;font-size:11px;font-weight:700;color:#fff}.bar-green{background:#059669}.bar-amber{background:#d97706}.footer{margin-top:40px;padding-top:12px;border-top:1px solid #e2e8f0;text-align:center;font-size:10px;color:#94a3b8}</style></head><body><div class="header"><div class="logo"><div class="logo-icon">📚</div><span class="lib-name">' + libName + '</span></div><div class="meta">Date Generated: <strong>' + dateStr + "</strong><br>Generated By: <strong>Librarian</strong></div></div><h1>" + _label + " Report</h1>" + (isSummary ? '<h2><span class="icon" style="background:#dbeafe;color:#2563eb">📊</span> Summary</h2><div class="stat-grid"><div class="stat-card"><div class="icon-sm">👥</div><div class="value">' + totalSeats + '</div><div class="label">Total Seats</div></div><div class="stat-card"><div class="icon-sm">📋</div><div class="value">' + (stats.today_bookings || bookings.length) + '</div><div class="label">Total Bookings</div></div><div class="stat-card"><div class="icon-sm">💺</div><div class="value">' + utilPct + '%</div><div class="label">Seats Utilized</div></div></div><div class="stat-grid"><div class="stat-card"><div class="icon-sm">🚨</div><div class="value">' + (stats.pending_tickets || 0) + '</div><div class="label">Complaints</div></div><div class="stat-card"><div class="icon-sm">📚</div><div class="value">' + (stats.total_books || books.length) + '</div><div class="label">Books</div></div><div class="stat-card"><div class="icon-sm">🎉</div><div class="value">' + (stats.total_events || events.length) + '</div><div class="label">Events Held</div></div></div>' : "") + (isSummary || _type === "attendance" ? '<h2><span class="icon" style="background:#ede9fe;color:#7c3aed">✓</span> Attendance</h2>' + (attendance.length > 0 ? "<table><thead><tr><th>Seat</th><th>Student</th><th>Time Slot</th><th>Status</th></tr></thead><tbody>" + attendRows + "</tbody></table>" : '<p style="color:#94a3b8;font-size:12px">No attendance records for this period.</p>') : "") + (isSummary || _type === "bookings" ? '<h2><span class="icon" style="background:#dbeafe;color:#2563eb">📅</span> Bookings</h2>' + (bookings.length > 0 ? "<table><thead><tr><th>Seat No</th><th>Student</th><th>Time Slot</th><th>Status</th></tr></thead><tbody>" + bookingRows + "</tbody></table>" : '<p style="color:#94a3b8;font-size:12px">No bookings for this period.</p>') : "") + (isSummary || _type === "seat_utilization" ? '<h2><span class="icon" style="background:#d1fae5;color:#059669">💺</span> Seat Utilization</h2><div style="margin:12px 0 20px 0"><div class="util-row"><span class="lbl">Total Seats:</span><span class="val">' + totalSeats + '</span><div class="bar-track"><div class="bar-fill bar-green" style="width:100%">&nbsp;</div></div></div><div class="util-row"><span class="lbl">Occupied:</span><span class="val">' + occupied + '</span><div class="bar-track"><div class="bar-fill bar-amber" style="width:' + utilPct + '%">' + utilPct + '%</div></div></div><div class="util-row"><span class="lbl">Available:</span><span class="val">' + available + '</span><div class="bar-track"><div class="bar-fill bar-green" style="width:' + availPct + '%">' + availPct + "%</div></div></div></div>" : "") + (isSummary || _type === "complaints" ? '<h2><span class="icon" style="background:#fee2e2;color:#dc2626">🚨</span> Complaints</h2><div class="stat-grid"><div class="stat-card"><div class="value">' + (stats.pending_tickets || 0) + '</div><div class="label">Open / In Progress</div></div></div><p style="color:#64748b;font-size:12px;margin-top:8px">Detailed complaint reports can be viewed in the Support &amp; Complaints section.</p>' : "") + (isSummary || _type === "books" ? '<h2><span class="icon" style="background:#fef3c7;color:#d97706">📖</span> Books</h2>' + (books.length > 0 ? "<table><thead><tr><th>Book Name</th><th>Author</th><th>Date</th></tr></thead><tbody>" + bookRows + "</tbody></table>" : '<p style="color:#94a3b8;font-size:12px">No book records.</p>') : "") + (isSummary || _type === "events" ? '<h2><span class="icon" style="background:#e0e7ff;color:#4f46e5">🎉</span> Events</h2>' + (events.length > 0 ? "<table><thead><tr><th>Event Name</th><th>Date</th><th>Participants</th></tr></thead><tbody>" + eventRows + "</tbody></table>" : '<p style="color:#94a3b8;font-size:12px">No events scheduled.</p>') : "") + '<div class="footer">Generated Automatically by Smart Lib — Library Management System &nbsp;|&nbsp; Page 1 of 1</div></body></html>';
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
        _cache[40] || (_cache[40] = createBaseVNode("div", null, [
          createBaseVNode("h1", { class: "text-3xl font-black text-gray-900" }, "Reports"),
          createBaseVNode("p", { class: "text-gray-500 mt-1" }, "Generate, schedule, and export library reports")
        ], -1)),
        createBaseVNode("div", null, [
          createBaseVNode("h2", _hoisted_2, [
            createVNode(unref(Zap), { class: "w-5 h-5 mr-2 text-amber-500" }),
            _cache[13] || (_cache[13] = createTextVNode(" Quick Generate ", -1))
          ]),
          createBaseVNode("div", _hoisted_3, [
            (openBlock(), createElementBlock(Fragment, null, renderList(quickSummaries, (summary) => {
              return createBaseVNode("div", {
                key: summary.label,
                class: "bg-white rounded-2xl p-5 border border-gray-100 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:shadow-md hover:border-purple-100 transition-all"
              }, [
                createBaseVNode("div", _hoisted_4, [
                  createBaseVNode("div", {
                    class: normalizeClass(["w-10 h-10 rounded-xl flex items-center justify-center", summary.bgColor])
                  }, [
                    (openBlock(), createBlock(resolveDynamicComponent(summary.icon), {
                      class: normalizeClass(["w-5 h-5", summary.iconColor])
                    }, null, 8, ["class"]))
                  ], 2),
                  createBaseVNode("span", _hoisted_5, toDisplayString(summary.label), 1)
                ]),
                createBaseVNode("div", _hoisted_6, [
                  createBaseVNode("button", {
                    onClick: ($event) => exportReport(summary.type, "pdf"),
                    class: "inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-red-600 bg-red-50 hover:bg-red-100 border border-red-100 transition-all"
                  }, [
                    createVNode(unref(FileText), { class: "w-3.5 h-3.5" }),
                    _cache[14] || (_cache[14] = createTextVNode(" Export PDF ", -1))
                  ], 8, _hoisted_7),
                  createBaseVNode("button", {
                    onClick: ($event) => exportReport(summary.type, "excel"),
                    class: "inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-green-600 bg-green-50 hover:bg-green-100 border border-green-100 transition-all"
                  }, [
                    createVNode(unref(Sheet), { class: "w-3.5 h-3.5" }),
                    _cache[15] || (_cache[15] = createTextVNode(" Export Excel ", -1))
                  ], 8, _hoisted_8),
                  createBaseVNode("button", {
                    onClick: ($event) => openScheduleModal(summary.type, summary.label),
                    class: "inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-purple-600 bg-purple-50 hover:bg-purple-100 border border-purple-100 transition-all"
                  }, [
                    createVNode(unref(Clock), { class: "w-3.5 h-3.5" }),
                    _cache[16] || (_cache[16] = createTextVNode(" Schedule ", -1))
                  ], 8, _hoisted_9)
                ])
              ]);
            }), 64))
          ])
        ]),
        createBaseVNode("div", null, [
          createBaseVNode("h2", _hoisted_10, [
            createVNode(unref(LayoutGrid), { class: "w-5 h-5 mr-2 text-indigo-500" }),
            _cache[17] || (_cache[17] = createTextVNode(" Report Categories ", -1))
          ]),
          createBaseVNode("div", _hoisted_11, [
            (openBlock(), createElementBlock(Fragment, null, renderList(reportCategories, (cat) => {
              return createBaseVNode("div", {
                key: cat.type,
                class: "bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-lg hover:border-purple-100 transition-all group"
              }, [
                createBaseVNode("div", _hoisted_12, [
                  createBaseVNode("div", {
                    class: normalizeClass(["w-10 h-10 rounded-xl flex items-center justify-center", cat.bgColor])
                  }, [
                    (openBlock(), createBlock(resolveDynamicComponent(cat.icon), {
                      class: normalizeClass(["w-5 h-5", cat.iconColor])
                    }, null, 8, ["class"]))
                  ], 2),
                  createBaseVNode("h3", _hoisted_13, toDisplayString(cat.label), 1)
                ]),
                createBaseVNode("ul", _hoisted_14, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(cat.descriptions, (desc) => {
                    return openBlock(), createElementBlock("li", {
                      key: desc,
                      class: "flex items-start"
                    }, [
                      _cache[18] || (_cache[18] = createBaseVNode("span", { class: "mr-1.5 text-gray-300" }, "•", -1)),
                      createTextVNode(toDisplayString(desc), 1)
                    ]);
                  }), 128))
                ]),
                createBaseVNode("div", _hoisted_15, [
                  createBaseVNode("button", {
                    onClick: ($event) => openExportModal(cat.type, cat.label, "pdf"),
                    class: "inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-[11px] font-bold text-red-600 bg-red-50 hover:bg-red-100 border border-red-100 transition-all"
                  }, [
                    createVNode(unref(FileText), { class: "w-3 h-3" }),
                    _cache[19] || (_cache[19] = createTextVNode(" Export PDF ", -1))
                  ], 8, _hoisted_16),
                  createBaseVNode("button", {
                    onClick: ($event) => openExportModal(cat.type, cat.label, "excel"),
                    class: "inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-[11px] font-bold text-green-600 bg-green-50 hover:bg-green-100 border border-green-100 transition-all"
                  }, [
                    createVNode(unref(Sheet), { class: "w-3 h-3" }),
                    _cache[20] || (_cache[20] = createTextVNode(" Excel ", -1))
                  ], 8, _hoisted_17),
                  createBaseVNode("button", {
                    onClick: ($event) => openScheduleModal(cat.type, cat.label),
                    class: "inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-[11px] font-bold text-purple-600 bg-purple-50 hover:bg-purple-100 border border-purple-100 transition-all"
                  }, [
                    createVNode(unref(CalendarClock), { class: "w-3 h-3" }),
                    _cache[21] || (_cache[21] = createTextVNode(" Schedule ", -1))
                  ], 8, _hoisted_18)
                ])
              ]);
            }), 64))
          ])
        ]),
        createBaseVNode("div", _hoisted_19, [
          createBaseVNode("div", _hoisted_20, [
            createBaseVNode("button", {
              onClick: _cache[0] || (_cache[0] = ($event) => activeTab.value = "scheduled"),
              class: normalizeClass([
                "flex-1 sm:flex-none px-6 py-4 text-sm font-bold transition-all border-b-2",
                activeTab.value === "scheduled" ? "border-purple-600 text-purple-700 bg-purple-50/50" : "border-transparent text-gray-500 hover:text-gray-700"
              ])
            }, [
              createVNode(unref(CalendarClock), { class: "w-4 h-4 inline mr-1.5 -mt-0.5" }),
              _cache[22] || (_cache[22] = createTextVNode(" Scheduled Reports ", -1))
            ], 2),
            createBaseVNode("button", {
              onClick: _cache[1] || (_cache[1] = ($event) => activeTab.value = "history"),
              class: normalizeClass([
                "flex-1 sm:flex-none px-6 py-4 text-sm font-bold transition-all border-b-2",
                activeTab.value === "history" ? "border-purple-600 text-purple-700 bg-purple-50/50" : "border-transparent text-gray-500 hover:text-gray-700"
              ])
            }, [
              createVNode(unref(History), { class: "w-4 h-4 inline mr-1.5 -mt-0.5" }),
              _cache[23] || (_cache[23] = createTextVNode(" Report History ", -1))
            ], 2)
          ]),
          activeTab.value === "scheduled" ? (openBlock(), createElementBlock("div", _hoisted_21, [
            scheduledReports.value.length === 0 ? (openBlock(), createElementBlock("div", _hoisted_22, [
              createVNode(unref(CalendarClock), { class: "w-12 h-12 text-gray-200 mx-auto mb-4" }),
              _cache[24] || (_cache[24] = createBaseVNode("p", { class: "text-gray-400 font-medium" }, "No scheduled reports yet.", -1)),
              _cache[25] || (_cache[25] = createBaseVNode("p", { class: "text-xs text-gray-300 mt-1" }, 'Click "Schedule" on any report above to create one.', -1))
            ])) : (openBlock(), createElementBlock("div", _hoisted_23, [
              createBaseVNode("table", _hoisted_24, [
                _cache[26] || (_cache[26] = createBaseVNode("thead", null, [
                  createBaseVNode("tr", { class: "text-xs text-gray-400 font-bold uppercase tracking-wider border-b border-gray-100" }, [
                    createBaseVNode("th", { class: "text-left py-3 px-3" }, "Name"),
                    createBaseVNode("th", { class: "text-left py-3 px-3" }, "Frequency"),
                    createBaseVNode("th", { class: "text-left py-3 px-3" }, "Format"),
                    createBaseVNode("th", { class: "text-left py-3 px-3" }, "Recipient"),
                    createBaseVNode("th", { class: "text-left py-3 px-3" }, "Status"),
                    createBaseVNode("th", { class: "text-right py-3 px-3" }, "Actions")
                  ])
                ], -1)),
                createBaseVNode("tbody", null, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(scheduledReports.value, (sr, idx) => {
                    return openBlock(), createElementBlock("tr", {
                      key: idx,
                      class: "border-b border-gray-50 hover:bg-gray-50/50 transition-colors"
                    }, [
                      createBaseVNode("td", _hoisted_25, toDisplayString(sr.name), 1),
                      createBaseVNode("td", _hoisted_26, toDisplayString(sr.frequency), 1),
                      createBaseVNode("td", _hoisted_27, [
                        createBaseVNode("span", {
                          class: normalizeClass(["px-2 py-0.5 rounded-md text-[10px] font-bold uppercase", sr.format === "pdf" ? "bg-red-50 text-red-600" : "bg-green-50 text-green-600"])
                        }, toDisplayString(sr.format), 3)
                      ]),
                      createBaseVNode("td", _hoisted_28, toDisplayString(sr.recipient), 1),
                      createBaseVNode("td", _hoisted_29, [
                        createBaseVNode("span", {
                          class: normalizeClass([
                            "inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase",
                            sr.status === "active" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"
                          ])
                        }, [
                          createBaseVNode("span", {
                            class: normalizeClass(["w-1.5 h-1.5 rounded-full", sr.status === "active" ? "bg-green-500" : "bg-yellow-500"])
                          }, null, 2),
                          createTextVNode(" " + toDisplayString(sr.status), 1)
                        ], 2)
                      ]),
                      createBaseVNode("td", _hoisted_30, [
                        createBaseVNode("div", _hoisted_31, [
                          createBaseVNode("button", {
                            onClick: ($event) => toggleScheduleStatus(idx),
                            class: "p-1.5 rounded-lg hover:bg-purple-50 text-gray-400 hover:text-purple-600 transition-colors",
                            title: sr.status === "active" ? "Pause" : "Resume"
                          }, [
                            sr.status === "active" ? (openBlock(), createBlock(unref(Pause), {
                              key: 0,
                              class: "w-3.5 h-3.5"
                            })) : (openBlock(), createBlock(unref(Play), {
                              key: 1,
                              class: "w-3.5 h-3.5"
                            }))
                          ], 8, _hoisted_32),
                          createBaseVNode("button", {
                            onClick: ($event) => runScheduledNow(idx),
                            class: "p-1.5 rounded-lg hover:bg-blue-50 text-gray-400 hover:text-blue-600 transition-colors",
                            title: "Run Now"
                          }, [
                            createVNode(unref(RefreshCw), { class: "w-3.5 h-3.5" })
                          ], 8, _hoisted_33),
                          createBaseVNode("button", {
                            onClick: ($event) => deleteScheduled(idx),
                            class: "p-1.5 rounded-lg hover:bg-red-50 text-gray-400 hover:text-red-600 transition-colors",
                            title: "Delete"
                          }, [
                            createVNode(unref(Trash2), { class: "w-3.5 h-3.5" })
                          ], 8, _hoisted_34)
                        ])
                      ])
                    ]);
                  }), 128))
                ])
              ])
            ]))
          ])) : createCommentVNode("", true),
          activeTab.value === "history" ? (openBlock(), createElementBlock("div", _hoisted_35, [
            reportHistory.value.length === 0 ? (openBlock(), createElementBlock("div", _hoisted_36, [
              createVNode(unref(History), { class: "w-12 h-12 text-gray-200 mx-auto mb-4" }),
              _cache[27] || (_cache[27] = createBaseVNode("p", { class: "text-gray-400 font-medium" }, "No reports generated yet.", -1)),
              _cache[28] || (_cache[28] = createBaseVNode("p", { class: "text-xs text-gray-300 mt-1" }, "Export a report above to see it here.", -1))
            ])) : (openBlock(), createElementBlock("div", _hoisted_37, [
              createBaseVNode("table", _hoisted_38, [
                _cache[30] || (_cache[30] = createBaseVNode("thead", null, [
                  createBaseVNode("tr", { class: "text-xs text-gray-400 font-bold uppercase tracking-wider border-b border-gray-100" }, [
                    createBaseVNode("th", { class: "text-left py-3 px-3" }, "Report"),
                    createBaseVNode("th", { class: "text-left py-3 px-3" }, "Type"),
                    createBaseVNode("th", { class: "text-left py-3 px-3" }, "Format"),
                    createBaseVNode("th", { class: "text-left py-3 px-3" }, "Generated"),
                    createBaseVNode("th", { class: "text-right py-3 px-3" }, "Actions")
                  ])
                ], -1)),
                createBaseVNode("tbody", null, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(reportHistory.value, (h, idx) => {
                    return openBlock(), createElementBlock("tr", {
                      key: idx,
                      class: "border-b border-gray-50 hover:bg-gray-50/50 transition-colors"
                    }, [
                      createBaseVNode("td", _hoisted_39, toDisplayString(h.name), 1),
                      createBaseVNode("td", _hoisted_40, toDisplayString(h.type), 1),
                      createBaseVNode("td", _hoisted_41, [
                        createBaseVNode("span", {
                          class: normalizeClass(["px-2 py-0.5 rounded-md text-[10px] font-bold uppercase", h.format === "pdf" ? "bg-red-50 text-red-600" : "bg-green-50 text-green-600"])
                        }, toDisplayString(h.format), 3)
                      ]),
                      createBaseVNode("td", _hoisted_42, toDisplayString(h.generatedAt), 1),
                      createBaseVNode("td", _hoisted_43, [
                        createBaseVNode("button", {
                          onClick: ($event) => downloadReport(h),
                          class: "inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-[11px] font-bold text-purple-600 bg-purple-50 hover:bg-purple-100 transition-all"
                        }, [
                          createVNode(unref(Download), { class: "w-3 h-3" }),
                          _cache[29] || (_cache[29] = createTextVNode(" Download ", -1))
                        ], 8, _hoisted_44)
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
          createBaseVNode("div", _hoisted_45, [
            createBaseVNode("div", _hoisted_46, [
              createBaseVNode("div", null, [
                _cache[31] || (_cache[31] = createBaseVNode("h3", { class: "text-xl font-black text-gray-900" }, "Schedule Report", -1)),
                createBaseVNode("p", _hoisted_47, toDisplayString(scheduleModal.reportName), 1)
              ]),
              createBaseVNode("button", {
                onClick: _cache[2] || (_cache[2] = ($event) => scheduleModal.show = false),
                class: "p-2 rounded-xl hover:bg-gray-100 text-gray-400 transition-colors"
              }, [
                createVNode(unref(X), { class: "w-5 h-5" })
              ])
            ]),
            createBaseVNode("div", _hoisted_48, [
              createBaseVNode("div", null, [
                _cache[32] || (_cache[32] = createBaseVNode("label", { class: "text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 block" }, "Frequency", -1)),
                createBaseVNode("div", _hoisted_49, [
                  (openBlock(), createElementBlock(Fragment, null, renderList(["daily", "weekly", "monthly"], (f) => {
                    return createBaseVNode("button", {
                      key: f,
                      onClick: ($event) => scheduleModal.frequency = f,
                      class: normalizeClass([
                        "py-2.5 rounded-xl font-bold text-sm transition-all border-2 capitalize",
                        scheduleModal.frequency === f ? "bg-purple-600 text-white border-purple-600 shadow-lg shadow-purple-100" : "bg-gray-50 text-gray-600 border-gray-100 hover:border-purple-200"
                      ])
                    }, toDisplayString(f), 11, _hoisted_50);
                  }), 64))
                ])
              ]),
              createBaseVNode("div", null, [
                _cache[35] || (_cache[35] = createBaseVNode("label", { class: "text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 block" }, "Format", -1)),
                createBaseVNode("div", _hoisted_51, [
                  createBaseVNode("button", {
                    onClick: _cache[3] || (_cache[3] = ($event) => scheduleModal.format = "pdf"),
                    class: normalizeClass([
                      "py-2.5 rounded-xl font-bold text-sm transition-all border-2 flex items-center justify-center gap-2",
                      scheduleModal.format === "pdf" ? "bg-red-50 text-red-700 border-red-300 shadow-sm" : "bg-gray-50 text-gray-600 border-gray-100 hover:border-red-200"
                    ])
                  }, [
                    createVNode(unref(FileText), { class: "w-4 h-4" }),
                    _cache[33] || (_cache[33] = createTextVNode(" PDF ", -1))
                  ], 2),
                  createBaseVNode("button", {
                    onClick: _cache[4] || (_cache[4] = ($event) => scheduleModal.format = "excel"),
                    class: normalizeClass([
                      "py-2.5 rounded-xl font-bold text-sm transition-all border-2 flex items-center justify-center gap-2",
                      scheduleModal.format === "excel" ? "bg-green-50 text-green-700 border-green-300 shadow-sm" : "bg-gray-50 text-gray-600 border-gray-100 hover:border-green-200"
                    ])
                  }, [
                    createVNode(unref(Sheet), { class: "w-4 h-4" }),
                    _cache[34] || (_cache[34] = createTextVNode(" Excel ", -1))
                  ], 2)
                ])
              ]),
              createBaseVNode("div", null, [
                _cache[36] || (_cache[36] = createBaseVNode("label", { class: "text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 block" }, "Recipient Email", -1)),
                withDirectives(createBaseVNode("input", {
                  "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => scheduleModal.recipient = $event),
                  type: "email",
                  placeholder: "admin@example.com",
                  class: "w-full p-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
                }, null, 512), [
                  [vModelText, scheduleModal.recipient]
                ])
              ]),
              createBaseVNode("div", null, [
                _cache[37] || (_cache[37] = createBaseVNode("label", { class: "text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 block" }, "Send At", -1)),
                withDirectives(createBaseVNode("input", {
                  "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => scheduleModal.time = $event),
                  type: "time",
                  class: "w-full p-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
                }, null, 512), [
                  [vModelText, scheduleModal.time]
                ])
              ])
            ]),
            createBaseVNode("div", _hoisted_52, [
              createBaseVNode("button", {
                onClick: _cache[7] || (_cache[7] = ($event) => scheduleModal.show = false),
                class: "flex-1 py-3 rounded-2xl font-bold text-gray-600 bg-gray-100 hover:bg-gray-200 transition-all"
              }, " Cancel "),
              createBaseVNode("button", {
                onClick: saveSchedule,
                class: "flex-1 py-3 rounded-2xl font-bold text-white bg-purple-600 hover:bg-purple-700 transition-all shadow-lg shadow-purple-100"
              }, " Save Schedule ")
            ])
          ])
        ])) : createCommentVNode("", true),
        exportModal.show ? (openBlock(), createElementBlock("div", {
          key: 1,
          class: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm",
          onClick: _cache[11] || (_cache[11] = withModifiers(($event) => exportModal.show = false, ["self"]))
        }, [
          createBaseVNode("div", _hoisted_53, [
            createBaseVNode("div", _hoisted_54, [
              createBaseVNode("div", null, [
                _cache[38] || (_cache[38] = createBaseVNode("h3", { class: "text-xl font-black text-gray-900" }, "Export Report", -1)),
                createBaseVNode("p", _hoisted_55, toDisplayString(exportModal.reportName), 1)
              ]),
              createBaseVNode("button", {
                onClick: _cache[9] || (_cache[9] = ($event) => exportModal.show = false),
                class: "p-2 rounded-xl hover:bg-gray-100 text-gray-400 transition-colors"
              }, [
                createVNode(unref(X), { class: "w-5 h-5" })
              ])
            ]),
            createBaseVNode("div", _hoisted_56, [
              _cache[39] || (_cache[39] = createBaseVNode("label", { class: "text-xs font-bold text-gray-500 uppercase tracking-wider mb-3 block" }, "Time Period", -1)),
              createBaseVNode("div", _hoisted_57, [
                (openBlock(), createElementBlock(Fragment, null, renderList(timespanOptions, (ts) => {
                  return createBaseVNode("button", {
                    key: ts.value,
                    onClick: ($event) => exportModal.timespan = ts.value,
                    class: normalizeClass([
                      "py-3 rounded-xl font-bold text-sm transition-all border-2",
                      exportModal.timespan === ts.value ? "bg-purple-600 text-white border-purple-600 shadow-lg shadow-purple-100 scale-105" : "bg-gray-50 text-gray-600 border-gray-100 hover:border-purple-200 hover:bg-purple-50"
                    ])
                  }, toDisplayString(ts.label), 11, _hoisted_58);
                }), 64))
              ])
            ]),
            createBaseVNode("div", {
              class: normalizeClass(["mb-6 p-4 rounded-2xl border", exportModal.format === "pdf" ? "bg-red-50 border-red-100" : "bg-green-50 border-green-100"])
            }, [
              createBaseVNode("div", _hoisted_59, [
                exportModal.format === "pdf" ? (openBlock(), createBlock(unref(FileText), {
                  key: 0,
                  class: "w-4 h-4 text-red-500"
                })) : (openBlock(), createBlock(unref(Sheet), {
                  key: 1,
                  class: "w-4 h-4 text-green-500"
                })),
                createBaseVNode("span", {
                  class: normalizeClass(["text-sm font-bold", exportModal.format === "pdf" ? "text-red-700" : "text-green-700"])
                }, toDisplayString(exportModal.format === "pdf" ? "PDF Document" : "Excel Spreadsheet"), 3)
              ])
            ], 2),
            createBaseVNode("div", _hoisted_60, [
              createBaseVNode("button", {
                onClick: _cache[10] || (_cache[10] = ($event) => exportModal.show = false),
                class: "flex-1 py-3 rounded-2xl font-bold text-gray-600 bg-gray-100 hover:bg-gray-200 transition-all"
              }, " Cancel "),
              createBaseVNode("button", {
                onClick: confirmExport,
                class: "flex-1 py-3 rounded-2xl font-bold text-white bg-purple-600 hover:bg-purple-700 transition-all shadow-lg shadow-purple-100"
              }, " Generate ")
            ])
          ])
        ])) : createCommentVNode("", true),
        createVNode(Transition, { name: "slide-up" }, {
          default: withCtx(() => [
            exportToast.show ? (openBlock(), createElementBlock("div", _hoisted_61, [
              exportToast.status === "loading" ? (openBlock(), createElementBlock("div", _hoisted_62, [
                createVNode(unref(RefreshCw), { class: "w-5 h-5 text-purple-600 animate-spin" })
              ])) : (openBlock(), createElementBlock("div", _hoisted_63, [
                createVNode(unref(CircleCheckBig), { class: "w-5 h-5 text-green-600" })
              ])),
              createBaseVNode("div", null, [
                createBaseVNode("p", _hoisted_64, toDisplayString(exportToast.title), 1),
                createBaseVNode("p", _hoisted_65, toDisplayString(exportToast.subtitle), 1)
              ]),
              createBaseVNode("button", {
                onClick: _cache[12] || (_cache[12] = ($event) => exportToast.show = false),
                class: "ml-auto p-1 rounded-lg hover:bg-gray-100 text-gray-400"
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
const ReportsPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-8303d088"]]);
export {
  ReportsPage as default
};
