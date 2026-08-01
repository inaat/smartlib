import { d as defineComponent, x as useAuth, r as ref, y as reactive, c as computed, o as onMounted, a as createElementBlock, b as createBaseVNode, p as withDirectives, D as vModelSelect, F as Fragment, k as renderList, t as toDisplayString, f as createVNode, u as unref, j as createCommentVNode, n as normalizeClass, e as createStaticVNode, v as vModelText, i as createTextVNode, O as librarianAPI, S as supportAPI, l as openBlock } from "./main-C124sHqx.js";
import { s as superadminAPI } from "./superadminApi-BiOZJAv8.js";
import { u as useSwal } from "./useSwal-pQW_XkRe.js";
import { L as Library } from "./library-CIS_dh0-.js";
import { C as ChevronDown } from "./chevron-down-CR7XalXd.js";
import { Z as Zap } from "./zap-BnJNWk3w.js";
import { R as RefreshCw } from "./refresh-cw-BECuebdg.js";
import { S as Sheet } from "./sheet-D2SMrbTD.js";
import { F as FileText } from "./file-text-CVv4Q_Ym.js";
import { P as Printer } from "./printer-DvpO9at_.js";
import { B as BookMarked } from "./book-marked-CBQ76S2R.js";
import { H as History } from "./history-C5Q1JIiT.js";
import { D as Download } from "./download-BR9ltr61.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
/* empty css               */
import "./createLucideIcon-8y9GOHiU.js";
const _hoisted_1 = { class: "space-y-8 pb-12 font-outfit text-slate-700" };
const _hoisted_2 = { class: "flex justify-end gap-4" };
const _hoisted_3 = { class: "min-w-[280px]" };
const _hoisted_4 = { class: "relative group" };
const _hoisted_5 = ["value"];
const _hoisted_6 = { class: "absolute left-4 top-1/2 -translate-y-1/2 text-purple-600 transition-transform pointer-events-none" };
const _hoisted_7 = { class: "absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" };
const _hoisted_8 = { class: "bg-white rounded-2xl border border-slate-100 shadow-sm p-6 text-left space-y-6" };
const _hoisted_9 = { class: "text-sm font-bold text-slate-800 uppercase tracking-wider flex items-center gap-2" };
const _hoisted_10 = ["value"];
const _hoisted_11 = { key: 0 };
const _hoisted_12 = { key: 1 };
const _hoisted_13 = {
  key: 0,
  class: "bg-slate-50/50 p-5 rounded-2xl border border-slate-100 space-y-4"
};
const _hoisted_14 = { class: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4" };
const _hoisted_15 = {
  key: 1,
  class: "bg-slate-50/50 p-5 rounded-2xl border border-slate-100 space-y-4"
};
const _hoisted_16 = { class: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4" };
const _hoisted_17 = {
  key: 2,
  class: "bg-slate-50/50 p-5 rounded-2xl border border-slate-100 space-y-4 text-left"
};
const _hoisted_18 = { class: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4" };
const _hoisted_19 = {
  key: 3,
  class: "bg-slate-50/50 p-5 rounded-2xl border border-slate-100 space-y-4 text-left"
};
const _hoisted_20 = { class: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4" };
const _hoisted_21 = {
  key: 4,
  class: "bg-slate-50/50 p-5 rounded-2xl border border-slate-100 space-y-4 text-left"
};
const _hoisted_22 = { class: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4" };
const _hoisted_23 = { class: "flex justify-end gap-3 mt-6 pt-5 border-t border-slate-55" };
const _hoisted_24 = ["disabled"];
const _hoisted_25 = {
  key: 0,
  class: "space-y-5 animate-in fade-in duration-300"
};
const _hoisted_26 = { class: "bg-white rounded-2xl border border-slate-100 shadow-sm p-4 flex items-center justify-between" };
const _hoisted_27 = { class: "flex items-center gap-2 text-left" };
const _hoisted_28 = { class: "text-xs font-bold text-slate-655" };
const _hoisted_29 = { class: "flex items-center gap-2" };
const _hoisted_30 = { class: "bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden relative" };
const _hoisted_31 = { class: "p-8 space-y-6" };
const _hoisted_32 = { class: "flex flex-col md:flex-row md:justify-between items-start border-b border-slate-100 pb-6 gap-6 text-left" };
const _hoisted_33 = { class: "flex items-start gap-4" };
const _hoisted_34 = { class: "w-14 h-14 rounded-2xl bg-purple-50 border border-purple-200/60 flex items-center justify-center text-purple-700 shadow-sm flex-shrink-0" };
const _hoisted_35 = { class: "text-xl font-black text-slate-800 leading-snug" };
const _hoisted_36 = { class: "text-xs font-medium text-slate-500 mt-1 max-w-sm" };
const _hoisted_37 = { class: "flex flex-wrap gap-x-4 gap-y-1 mt-2 text-[10px] font-bold text-slate-400" };
const _hoisted_38 = { class: "flex items-center gap-1" };
const _hoisted_39 = { class: "flex items-center gap-1" };
const _hoisted_40 = { class: "md:text-right flex-shrink-0 space-y-1" };
const _hoisted_41 = { class: "text-sm font-black uppercase tracking-wider text-purple-700" };
const _hoisted_42 = { class: "text-xs font-bold text-slate-700" };
const _hoisted_43 = { key: 0 };
const _hoisted_44 = { key: 1 };
const _hoisted_45 = { class: "text-[10px] font-bold text-slate-400" };
const _hoisted_46 = { class: "bg-slate-50 rounded-xl p-3 flex flex-wrap items-center justify-between text-xs font-bold text-slate-500 text-left gap-2 border border-slate-100" };
const _hoisted_47 = { class: "text-slate-800" };
const _hoisted_48 = { class: "text-purple-700 uppercase tracking-widest text-[9px]" };
const _hoisted_49 = { class: "text-slate-800" };
const _hoisted_50 = { class: "grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-7 gap-3 text-left" };
const _hoisted_51 = { class: "text-[8px] font-black text-slate-400 uppercase tracking-wider block" };
const _hoisted_52 = { class: "text-xl font-black text-slate-800 mt-1 block leading-none" };
const _hoisted_53 = { class: "overflow-x-auto rounded-xl border border-slate-100 shadow-sm" };
const _hoisted_54 = { class: "w-full text-xs text-left" };
const _hoisted_55 = { class: "bg-purple-700 text-white font-bold uppercase tracking-wider" };
const _hoisted_56 = { class: "divide-y divide-slate-100 bg-white" };
const _hoisted_57 = { class: "py-3 px-4 font-bold text-slate-800 whitespace-nowrap" };
const _hoisted_58 = { class: "text-[10px] text-slate-400 font-semibold mt-0.5" };
const _hoisted_59 = { class: "py-3 px-4 font-semibold text-slate-655 whitespace-nowrap" };
const _hoisted_60 = { class: "py-3 px-4 font-bold text-purple-800 whitespace-nowrap" };
const _hoisted_61 = { class: "text-[9px] text-slate-400 mt-0.5 font-bold" };
const _hoisted_62 = { class: "py-3 px-4 font-semibold text-slate-500 whitespace-nowrap" };
const _hoisted_63 = { class: "py-3 px-4 font-semibold text-slate-500 whitespace-nowrap" };
const _hoisted_64 = { class: "py-3 px-4 font-semibold text-slate-600 whitespace-nowrap" };
const _hoisted_65 = { class: "flex flex-col gap-0.5 text-[10px]" };
const _hoisted_66 = {
  key: 0,
  class: "text-purple-600 font-bold"
};
const _hoisted_67 = { class: "text-slate-800 font-bold" };
const _hoisted_68 = { class: "py-3 px-4 whitespace-nowrap" };
const _hoisted_69 = ["innerHTML"];
const _hoisted_70 = { class: "py-3 px-4 font-bold text-slate-800 whitespace-nowrap" };
const _hoisted_71 = { class: "text-[10px] text-slate-400 font-semibold mt-0.5" };
const _hoisted_72 = { class: "py-3 px-4 font-bold text-slate-850 whitespace-nowrap" };
const _hoisted_73 = ["title"];
const _hoisted_74 = { class: "text-[10px] text-slate-400 font-semibold mt-0.5" };
const _hoisted_75 = { class: "text-[9px] text-purple-700 font-black mt-0.5 uppercase tracking-wider" };
const _hoisted_76 = { class: "py-3 px-4 text-slate-500 whitespace-nowrap" };
const _hoisted_77 = { class: "text-[10px] space-y-0.5 font-semibold" };
const _hoisted_78 = { class: "py-3 px-4 text-slate-500 whitespace-nowrap" };
const _hoisted_79 = { class: "text-[10px] space-y-0.5 font-semibold" };
const _hoisted_80 = { class: "py-3 px-4 font-semibold text-slate-655 whitespace-nowrap" };
const _hoisted_81 = { class: "py-3 px-4 whitespace-nowrap" };
const _hoisted_82 = ["innerHTML"];
const _hoisted_83 = ["innerHTML"];
const _hoisted_84 = { class: "py-3 px-4 font-bold text-slate-800 whitespace-nowrap" };
const _hoisted_85 = { class: "text-[10px] text-slate-400 font-semibold mt-0.5" };
const _hoisted_86 = { class: "py-3 px-4 font-bold text-slate-850 whitespace-nowrap text-left" };
const _hoisted_87 = { class: "font-extrabold text-slate-800" };
const _hoisted_88 = ["title"];
const _hoisted_89 = { class: "text-[9px] text-slate-450 mt-0.5" };
const _hoisted_90 = { class: "text-[9px] text-purple-700 font-black mt-0.5 uppercase tracking-wider" };
const _hoisted_91 = { class: "py-3 px-4 text-slate-500 whitespace-nowrap" };
const _hoisted_92 = { class: "text-[10px] space-y-0.5 font-semibold" };
const _hoisted_93 = {
  key: 0,
  class: "font-bold text-purple-700"
};
const _hoisted_94 = { class: "py-3 px-4 whitespace-nowrap" };
const _hoisted_95 = ["innerHTML"];
const _hoisted_96 = { class: "py-3 px-4 font-bold text-slate-800 whitespace-nowrap" };
const _hoisted_97 = { class: "text-[10px] text-slate-400 font-semibold mt-0.5" };
const _hoisted_98 = { class: "py-3 px-4 font-semibold text-slate-700 whitespace-nowrap" };
const _hoisted_99 = { class: "py-3 px-4 font-bold text-slate-700 whitespace-nowrap" };
const _hoisted_100 = { class: "py-3 px-4 text-slate-500 whitespace-nowrap" };
const _hoisted_101 = { class: "text-[10px] space-y-0.5" };
const _hoisted_102 = { class: "py-3 px-4 text-slate-655 whitespace-nowrap" };
const _hoisted_103 = { class: "py-3 px-4 text-slate-500 whitespace-nowrap" };
const _hoisted_104 = { class: "text-[10px] space-y-0.5 font-bold" };
const _hoisted_105 = {
  key: 0,
  class: "text-purple-700 font-extrabold"
};
const _hoisted_106 = { class: "py-3 px-4 text-slate-500 whitespace-nowrap" };
const _hoisted_107 = { class: "text-[10px] space-y-0.5" };
const _hoisted_108 = { class: "font-bold text-slate-850" };
const _hoisted_109 = {
  key: 0,
  class: "text-purple-700 font-bold"
};
const _hoisted_110 = {
  key: 0,
  class: "font-bold"
};
const _hoisted_111 = { class: "py-3 px-4 whitespace-nowrap" };
const _hoisted_112 = ["innerHTML"];
const _hoisted_113 = ["innerHTML"];
const _hoisted_114 = { class: "py-3 px-4 font-bold text-slate-800 whitespace-nowrap" };
const _hoisted_115 = { class: "text-[10px] text-slate-400 font-semibold mt-0.5" };
const _hoisted_116 = { class: "py-3 px-4 font-bold text-purple-700 whitespace-nowrap" };
const _hoisted_117 = { class: "py-3 px-4 font-semibold text-slate-700 whitespace-nowrap" };
const _hoisted_118 = { class: "text-[10px] text-slate-400 font-medium mt-0.5" };
const _hoisted_119 = { class: "py-3 px-4 font-bold text-slate-800 whitespace-nowrap" };
const _hoisted_120 = { class: "py-3 px-4 text-slate-500 whitespace-nowrap" };
const _hoisted_121 = { class: "text-[10px] space-y-0.5 font-bold" };
const _hoisted_122 = { class: "text-slate-800" };
const _hoisted_123 = { class: "text-slate-800" };
const _hoisted_124 = { class: "py-3 px-4 font-semibold text-slate-700 whitespace-nowrap" };
const _hoisted_125 = { class: "py-3 px-4 text-slate-655 font-bold whitespace-nowrap" };
const _hoisted_126 = { class: "py-3 px-4 whitespace-nowrap" };
const _hoisted_127 = ["innerHTML"];
const _hoisted_128 = ["innerHTML"];
const _hoisted_129 = { key: 1 };
const _hoisted_130 = { key: 6 };
const _hoisted_131 = ["colspan"];
const _hoisted_132 = { class: "flex flex-col sm:flex-row items-center justify-between gap-4 pt-3 border-t border-slate-100 text-xs font-bold text-slate-500" };
const _hoisted_133 = { class: "text-left flex items-center gap-4" };
const _hoisted_134 = { class: "text-slate-800" };
const _hoisted_135 = { key: 0 };
const _hoisted_136 = { class: "text-purple-750" };
const _hoisted_137 = {
  key: 0,
  class: "flex items-center gap-1.5"
};
const _hoisted_138 = ["disabled"];
const _hoisted_139 = { class: "px-2" };
const _hoisted_140 = ["disabled"];
const _hoisted_141 = { class: "bg-slate-50/80 px-8 py-4 border-t border-slate-100 flex flex-wrap items-center justify-between text-[10px] font-bold text-slate-400 text-left gap-3" };
const _hoisted_142 = {
  key: 1,
  class: "bg-slate-50 border border-slate-100 rounded-3xl p-16 text-center"
};
const _hoisted_143 = { class: "w-14 h-14 rounded-2xl bg-white border border-slate-100 shadow-sm flex items-center justify-center mx-auto mb-5 text-purple-600" };
const _hoisted_144 = { class: "bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden text-left" };
const _hoisted_145 = { class: "px-6 py-5 border-b border-slate-50 flex items-center justify-between" };
const _hoisted_146 = { class: "text-sm font-bold text-slate-700 flex items-center uppercase tracking-wider" };
const _hoisted_147 = { class: "p-6" };
const _hoisted_148 = {
  key: 0,
  class: "text-center py-12"
};
const _hoisted_149 = {
  key: 1,
  class: "overflow-x-auto rounded-xl border border-slate-100"
};
const _hoisted_150 = { class: "min-w-full text-xs" };
const _hoisted_151 = { class: "divide-y divide-slate-100 bg-white" };
const _hoisted_152 = { class: "py-3 px-4 font-bold text-slate-800" };
const _hoisted_153 = { class: "py-3 px-4" };
const _hoisted_154 = { class: "py-3 px-4 text-slate-500 font-medium" };
const _hoisted_155 = { class: "py-3 px-4 text-right" };
const _hoisted_156 = ["onClick"];
const itemsPerPage = 10;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ReportsPage",
  setup(__props) {
    const { showError } = useSwal();
    const { user } = useAuth();
    const libraries = ref([]);
    const selectedLibraryId = ref("all");
    const generating = ref(false);
    const currentPage = ref(1);
    const filters = reactive({
      category: "bookings",
      timeRange: "month",
      fromDate: new Date((/* @__PURE__ */ new Date()).getFullYear(), (/* @__PURE__ */ new Date()).getMonth(), 1).toISOString().split("T")[0],
      toDate: (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
      // Bookings advanced parameters
      studentSearch: "",
      seatNumber: "",
      bookingStatus: "all",
      checkInStatus: "all",
      overstayStatus: "all",
      // Book Reservations advanced parameters
      bookSearch: "",
      bookCategory: "all",
      reservationStatus: "all",
      returnStatus: "all",
      // Complaints advanced parameters
      complaintCategory: "all",
      complaintPriority: "all",
      complaintStatus: "all",
      // Events advanced parameters
      eventSearch: "",
      eventType: "all",
      eventPricing: "all",
      eventCapacityStatus: "all",
      eventStatus: "all",
      // Attendance advanced parameters
      attendanceSearch: "",
      attendanceStatus: "all",
      attendanceMethod: "all",
      attendanceSeat: ""
    });
    const reportCategories = [
      { label: "Seat Bookings Log", type: "bookings" },
      { label: "Book Reservation Report", type: "book_reservations" },
      { label: "Attendance Audit", type: "attendance" },
      { label: "Section Utilization", type: "seat_utilization" },
      { label: "Support & Complaints", type: "complaints" },
      { label: "Book Catalog", type: "books" },
      { label: "Campus Workshops", type: "events" }
    ];
    const generatedReport = ref(null);
    const reportHistory = ref([]);
    const libraryReportHistory = computed(() => {
      const libKey = selectedLibraryId.value;
      return reportHistory.value.filter((h) => h.libraryId === libKey);
    });
    const loadHistory = () => {
      const saved = localStorage.getItem("superadmin-report-history");
      if (saved) reportHistory.value = JSON.parse(saved);
    };
    const saveHistory = () => {
      localStorage.setItem("superadmin-report-history", JSON.stringify(reportHistory.value));
    };
    const handleLibraryChange = () => {
      generatedReport.value = null;
    };
    const handleTimeRangeChange = () => {
      const todayStr = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
      const now = /* @__PURE__ */ new Date();
      if (filters.timeRange === "today") {
        filters.fromDate = todayStr;
        filters.toDate = todayStr;
      } else if (filters.timeRange === "week") {
        const day = now.getDay();
        const diff = now.getDate() - day + (day === 0 ? -6 : 1);
        const startOfWeek = new Date(now.setDate(diff));
        filters.fromDate = startOfWeek.toISOString().split("T")[0];
        filters.toDate = todayStr;
      } else if (filters.timeRange === "month") {
        const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
        filters.fromDate = startOfMonth.toISOString().split("T")[0];
        filters.toDate = todayStr;
      } else if (filters.timeRange === "year") {
        const startOfYear = new Date(now.getFullYear(), 0, 1);
        filters.fromDate = startOfYear.toISOString().split("T")[0];
        filters.toDate = todayStr;
      }
    };
    const fmtDuration = (mins) => {
      if (mins <= 0) return "0m";
      const hrs = Math.floor(mins / 60);
      const rem = mins % 60;
      if (hrs > 0) {
        return `${hrs}h${rem > 0 ? " " + rem + "m" : ""}`;
      }
      return `${rem}m`;
    };
    const formatAttendanceDuration = (minutes) => {
      if (minutes === null || minutes === void 0) return "—";
      const mins = Math.round(minutes);
      if (mins < 60) {
        return `${mins} Minute${mins !== 1 ? "s" : ""}`;
      }
      const hours = Math.floor(mins / 60);
      const remainingMins = mins % 60;
      if (hours < 24) {
        return remainingMins > 0 ? `${hours} Hour${hours !== 1 ? "s" : ""} ${remainingMins} Minute${remainingMins !== 1 ? "s" : ""}` : `${hours} Hour${hours !== 1 ? "s" : ""}`;
      }
      const days = Math.floor(hours / 24);
      const remainingHours = hours % 24;
      return remainingHours > 0 ? `${days} Day${days !== 1 ? "s" : ""} ${remainingHours} Hour${remainingHours !== 1 ? "s" : ""}` : `${days} Day${days !== 1 ? "s" : ""}`;
    };
    const getOverstayDetailedStatus = (b) => {
      if (b.status === "cancelled") {
        return "Auto Cancelled";
      }
      if (!b.check_in_time) {
        return "Unclaimed";
      }
      if (!b.check_out_time) {
        const reservedEnd2 = new Date(b.extended_until || b.scheduled_end_time);
        const now = /* @__PURE__ */ new Date();
        if (now > reservedEnd2) {
          const diffMins2 = Math.floor((now.getTime() - reservedEnd2.getTime()) / (60 * 1e3));
          if (diffMins2 >= 60) return "Serious Overstay";
          return "Overstay";
        }
        return "Checked In";
      }
      const reservedEnd = new Date(b.extended_until || b.scheduled_end_time);
      const checkOut = new Date(b.check_out_time);
      const diffMins = Math.floor((checkOut.getTime() - reservedEnd.getTime()) / (60 * 1e3));
      if (diffMins >= 60) {
        return "Serious Overstay";
      } else if (diffMins > 5) {
        return "Overstay";
      } else {
        const checkIn = new Date(b.check_in_time);
        const bookedMinutes = Math.floor((reservedEnd.getTime() - checkIn.getTime()) / (60 * 1e3));
        const usedMinutes = Math.floor((checkOut.getTime() - checkIn.getTime()) / (60 * 1e3));
        const leftEarlyMinutes = bookedMinutes - usedMinutes;
        if (leftEarlyMinutes >= 30) {
          return "Early Check-out";
        }
        return "Checked Out On Time";
      }
    };
    const generateOnScreenReport = async () => {
      generating.value = true;
      currentPage.value = 1;
      try {
        let libraryInfo = {
          name: "SmartLib Multi-Library Network",
          address: "Consolidated System Audit",
          contact_info: {
            phone: "SmartLib Operations",
            email: "admin@smartlib.com"
          }
        };
        if (selectedLibraryId.value !== "all") {
          const activeLib = libraries.value.find((l) => l.id === Number(selectedLibraryId.value));
          if (activeLib) {
            libraryInfo = {
              name: activeLib.name,
              address: activeLib.address || "SmartLib Campus",
              contact_info: activeLib.contact_info || { phone: "N/A", email: "N/A" }
            };
          }
        }
        const catLabel = reportCategories.find((r) => r.type === filters.category)?.label || filters.category;
        const params = {
          from_date: filters.fromDate,
          to_date: filters.toDate,
          per_page: "all"
        };
        if (selectedLibraryId.value !== "all") {
          params.library_id = selectedLibraryId.value;
        }
        if (filters.category === "attendance") {
          if (filters.attendanceSearch) params.search = filters.attendanceSearch;
          if (filters.attendanceStatus !== "all") params.status = filters.attendanceStatus;
        }
        let items = [];
        const now = /* @__PURE__ */ new Date();
        const genDate = now.toLocaleDateString("en-PK", { dateStyle: "long" });
        const genTime = now.toLocaleTimeString("en-PK", { timeStyle: "short" });
        if (filters.category === "bookings") {
          const res = await librarianAPI.getBookings(params);
          const list = res.data || res || [];
          items = list.map((b) => {
            const start = new Date(b.booking_time);
            const endPlanned = new Date(b.scheduled_end_time);
            const endExtended = b.extended_until ? new Date(b.extended_until) : null;
            const endActual = endExtended || endPlanned;
            const origMins = Math.floor((endPlanned.getTime() - start.getTime()) / (60 * 1e3));
            const extMins = endExtended ? Math.max(0, Math.floor((endExtended.getTime() - endPlanned.getTime()) / (60 * 1e3))) : 0;
            const reservedMins = origMins + extMins;
            let usedMins = 0;
            if (b.check_in_time && b.check_out_time) {
              usedMins = Math.floor((new Date(b.check_out_time).getTime() - new Date(b.check_in_time).getTime()) / (60 * 1e3));
            } else if (b.check_in_time) {
              usedMins = Math.floor(((/* @__PURE__ */ new Date()).getTime() - new Date(b.check_in_time).getTime()) / (60 * 1e3));
            }
            const calcStatus = getOverstayDetailedStatus(b);
            return {
              id: `B-${b.id}`,
              studentName: b.user?.name || "—",
              crn: b.user?.crn || "—",
              libraryName: b.library?.name || "SmartLib",
              bookingDate: start.toLocaleDateString("en-US", { day: "numeric", month: "short" }),
              seatNumber: b.seat?.seat_number || "—",
              startTime: start.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: true }),
              endTime: endPlanned.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: true }),
              actualCheckIn: b.check_in_time ? new Date(b.check_in_time).toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: true }) : "—",
              actualCheckOut: b.check_out_time ? new Date(b.check_out_time).toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: true }) : b.check_in_time ? "Active" : "—",
              bookedDuration: fmtDuration(origMins),
              extendedTime: fmtDuration(extMins),
              reservedDuration: fmtDuration(reservedMins),
              usedDuration: b.check_in_time ? fmtDuration(usedMins) : "0m",
              usedMinutesRaw: usedMins,
              calculatedStatus: calcStatus,
              rawStatus: b.status,
              hasCheckIn: !!b.check_in_time,
              hasCheckOut: !!b.check_out_time
            };
          });
        } else if (filters.category === "book_reservations") {
          const res = await librarianAPI.getReservedBooks(params);
          const list = res.data || res || [];
          items = list.map((b) => {
            const created = new Date(b.created_at);
            const due = new Date(b.due_date);
            const requestedDays = Math.max(1, Math.ceil((due.getTime() - created.getTime()) / (1e3 * 60 * 60 * 24)));
            let actualBorrowedDays = 0;
            let daysEarlyLate = 0;
            let fineAmount = 0;
            let timeAnalysisStatus = "Borrowed";
            if (b.status === "pending") {
              timeAnalysisStatus = "Pending Approval";
            } else if (b.status === "rejected") {
              timeAnalysisStatus = "Rejected";
            } else if (b.status === "approved") {
              timeAnalysisStatus = due < /* @__PURE__ */ new Date() ? "Not Picked Up" : "Approved";
            } else {
              const pickup = new Date(b.updated_at);
              const returnedDate = b.returned_at ? new Date(b.returned_at) : null;
              if (returnedDate) {
                actualBorrowedDays = Math.max(0, Math.ceil((returnedDate.getTime() - pickup.getTime()) / (1e3 * 60 * 60 * 24)));
                const diffDays = Math.ceil((returnedDate.getTime() - due.getTime()) / (1e3 * 60 * 60 * 24));
                if (diffDays > 0) {
                  daysEarlyLate = diffDays;
                  fineAmount = diffDays * 50;
                  timeAnalysisStatus = "Returned Late";
                } else if (diffDays < 0) {
                  daysEarlyLate = Math.abs(diffDays);
                  timeAnalysisStatus = "Returned Early";
                } else {
                  timeAnalysisStatus = "Returned On Time";
                }
              } else {
                actualBorrowedDays = Math.max(0, Math.ceil(((/* @__PURE__ */ new Date()).getTime() - pickup.getTime()) / (1e3 * 60 * 60 * 24)));
                const diffDays = Math.ceil(((/* @__PURE__ */ new Date()).getTime() - due.getTime()) / (1e3 * 60 * 60 * 24));
                if (diffDays > 0) {
                  daysEarlyLate = diffDays;
                  fineAmount = diffDays * 50;
                  timeAnalysisStatus = "Returned Late";
                } else {
                  timeAnalysisStatus = "Borrowed";
                }
              }
            }
            let reservationStatus = "Pending Approval";
            if (b.status === "approved") reservationStatus = "Approved";
            else if (b.status === "rejected") reservationStatus = "Rejected";
            else if (["collected", "pending_return", "returned", "overdue"].includes(b.status)) reservationStatus = "Collected";
            const libUsers = b.book?.library?.users || [];
            const librarian = libUsers.find((u) => u.role === "librarian" || u.role === "admin");
            const approvedBy = b.status !== "pending" && b.status !== "rejected" ? librarian ? librarian.name : "Admin Librarian" : "—";
            let returnStatusToShow = "";
            if (timeAnalysisStatus === "Returned On Time" || timeAnalysisStatus === "Returned Early" || timeAnalysisStatus === "Returned Late" || timeAnalysisStatus === "Not Picked Up") {
              returnStatusToShow = timeAnalysisStatus;
            }
            return {
              id: `R-${b.id}`,
              studentName: b.user?.name || "—",
              crn: b.user?.crn || "—",
              bookTitle: b.book?.title || "—",
              isbn: b.book?.isbn || "—",
              libraryName: b.book?.library?.name || "SmartLib",
              reservationDate: created.toLocaleDateString("en-US", { day: "numeric", month: "short", year: "numeric" }),
              approvalDate: b.status !== "pending" && b.status !== "rejected" ? new Date(b.updated_at).toLocaleDateString("en-US", { day: "numeric", month: "short", year: "numeric" }) : "—",
              pickupDate: ["collected", "pending_return", "returned", "overdue"].includes(b.status) ? new Date(b.updated_at).toLocaleDateString("en-US", { day: "numeric", month: "short", year: "numeric" }) : "—",
              returnDate: b.returned_at ? new Date(b.returned_at).toLocaleDateString("en-US", { day: "numeric", month: "short", year: "numeric" }) : "—",
              requestedDays,
              actualBorrowedDays,
              daysEarlyLate,
              fineAmount,
              approvedBy,
              timeAnalysisStatus,
              returnStatusToShow,
              reservationStatus,
              bookCategory: b.book?.category || "Standard"
            };
          });
        } else {
          if (filters.category === "attendance") {
            const res = await librarianAPI.getAttendance(params);
            const list = res.data || res || [];
            items = list.map((a) => {
              const seatNum = a.seat_number || a.seat?.seat_number || a.seat_booking?.seat?.seat_number || "—";
              const methodStr = a.marked_manually ? "Manual Check-in" : a.seat_booking_id ? "Seat Booking" : "QR Scan / Auto";
              return {
                id: `A-${a.id}`,
                attendanceId: `A-${a.id}`,
                studentName: a.user?.name || "—",
                crn: a.user?.crn || "—",
                seatNumber: seatNum,
                libraryName: a.library?.name || "—",
                checkInTime: a.check_in_time ? fmtTime12(a.check_in_time) : "—",
                checkOutTime: a.check_out_time ? fmtTime12(a.check_out_time) : "—",
                date: a.date ? fmtDate(a.date) : "—",
                durationRaw: a.total_minutes || 0,
                durationStr: a.check_out_time ? formatAttendanceDuration(a.total_minutes) : "Active Session",
                method: methodStr,
                rawStatus: a.check_out_time ? "left" : "present",
                calculatedStatus: a.check_out_time ? "Left" : "Present"
              };
            });
          } else if (filters.category === "seat_utilization") {
            const res = await superadminAPI.getSeats(params);
            const list = Array.isArray(res) ? res : [];
            items = list.map((s) => ({
              col1: s.floor?.library?.name || "—",
              col2: s.floor?.name || "—",
              col3: s.seat_number || "—",
              col4: `${s.has_computer ? "PC" : ""} ${s.near_window ? "Window" : ""}`.trim() || "Standard",
              calculatedStatus: s.status
            }));
          } else if (filters.category === "complaints") {
            const queryParams = { ...params };
            if (selectedLibraryId.value === "all") {
              queryParams.all_types = 1;
            }
            const res = await supportAPI.getTickets("admin", queryParams);
            const list = Array.isArray(res) ? res : res?.data || [];
            items = list.map((t) => {
              const submitted = new Date(t.created_at);
              const userMsgs = t.messages || [];
              const staffMsg = userMsgs.find((m) => m.user_id !== t.user_id);
              const responseDate = staffMsg ? new Date(staffMsg.created_at) : null;
              const responseDateStr = responseDate ? responseDate.toLocaleDateString("en-US", { day: "numeric", month: "short", year: "numeric" }) + ", " + responseDate.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: true }) : "No response yet";
              const isResolvedOrClosed = ["resolved", "closed"].includes(t.status);
              const resolutionDate = isResolvedOrClosed ? new Date(t.updated_at) : null;
              const resolutionDateStr = resolutionDate ? resolutionDate.toLocaleDateString("en-US", { day: "numeric", month: "short", year: "numeric" }) + ", " + resolutionDate.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: true }) : "—";
              let resolutionTimeStr = "—";
              if (isResolvedOrClosed && resolutionDate) {
                const diffMs = resolutionDate.getTime() - submitted.getTime();
                const diffMinsTotal = Math.max(0, Math.floor(diffMs / (1e3 * 60)));
                if (diffMinsTotal < 60) {
                  resolutionTimeStr = `${diffMinsTotal} Minute${diffMinsTotal !== 1 ? "s" : ""}`;
                } else {
                  const diffHrsTotal = Math.floor(diffMinsTotal / 60);
                  const remMins = diffMinsTotal % 60;
                  if (diffHrsTotal < 24) {
                    if (remMins === 0) {
                      resolutionTimeStr = `${diffHrsTotal} Hour${diffHrsTotal !== 1 ? "s" : ""}`;
                    } else {
                      resolutionTimeStr = `${diffHrsTotal} Hour${diffHrsTotal !== 1 ? "s" : ""} ${remMins} Minute${remMins !== 1 ? "s" : ""}`;
                    }
                  } else {
                    const diffDays = Math.floor(diffHrsTotal / 24);
                    const remHrs = diffHrsTotal % 24;
                    if (remHrs === 0) {
                      resolutionTimeStr = `${diffDays} Day${diffDays !== 1 ? "s" : ""}`;
                    } else {
                      resolutionTimeStr = `${diffDays} Day${diffDays !== 1 ? "s" : ""} ${remHrs} Hour${remHrs !== 1 ? "s" : ""}`;
                    }
                  }
                }
              } else {
                resolutionTimeStr = "Still Pending";
              }
              let displayStatus = "Pending";
              if (t.status === "in_progress") displayStatus = "In Progress";
              else if (t.status === "resolved") displayStatus = "Resolved";
              else if (t.status === "closed") displayStatus = "Closed";
              else if (t.status === "rejected") displayStatus = "Rejected";
              return {
                id: `TKT-${t.id}`,
                studentName: t.user?.name || "—",
                crn: t.user?.crn || "—",
                complaintId: `TKT-${t.id}`,
                submittedDate: submitted.toLocaleDateString("en-US", { day: "numeric", month: "short", year: "numeric" }) + ", " + submitted.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: true }),
                priority: t.priority ? t.priority.charAt(0).toUpperCase() + t.priority.slice(1) : "Medium",
                subject: t.subject || "—",
                status: displayStatus,
                rawStatus: t.status || "open",
                rawPriority: t.priority || "medium",
                category: t.ticket_type || "system",
                responseDate: responseDateStr,
                resolutionDate: resolutionDateStr,
                resolutionTime: resolutionTimeStr,
                libraryName: t.library?.name || "System Support"
              };
            });
          } else if (filters.category === "books") {
            const res = await superadminAPI.getBooks(params);
            const list = Array.isArray(res) ? res : res?.data || [];
            items = list.map((b) => ({
              col1: `BK-${b.id}`,
              col2: b.title || "—",
              col3: b.author || "—",
              col4: b.library?.name || "Shared",
              col5: b.type || "Physical",
              calculatedStatus: b.availability || "available"
            }));
          } else if (filters.category === "events") {
            const res = await superadminAPI.getEvents(params);
            const list = Array.isArray(res) ? res : res?.data || [];
            items = list.map((e) => {
              const regs = e.registrations || [];
              const totalRegistered = regs.length;
              const attendedCount = regs.filter((r) => r.attended || r.status === "attended").length;
              const totalRevenue = regs.reduce((sum, r) => {
                const amt = parseFloat(r.amount_paid || 0);
                const isCompleted = r.payment_status === "completed" || r.payment_status === "paid" || r.status === "approved" || r.status === "attended";
                return sum + (isCompleted ? amt : 0);
              }, 0);
              const isPaid = e.is_paid || parseFloat(e.price || 0) > 0;
              const price = parseFloat(e.price || 0);
              const priceStr = isPaid ? `PKR ${price.toFixed(2)}` : "Free";
              const capacity = e.capacity || e.max_participants || null;
              const capacityStr = capacity ? `${capacity} Seats` : "Unlimited";
              const fillRate = capacity ? Math.round(totalRegistered / capacity * 100) : 100;
              const attendanceRate = totalRegistered > 0 ? Math.round(attendedCount / totalRegistered * 100) : 0;
              let capStatus = "Open";
              if (capacity && totalRegistered >= capacity) {
                capStatus = "Full";
              } else if (!capacity) {
                capStatus = "Unlimited";
              }
              let displayStatus = "Upcoming";
              const now2 = /* @__PURE__ */ new Date();
              const evtDate = e.date ? new Date(e.date) : null;
              if (e.status === "cancelled") {
                displayStatus = "Cancelled";
              } else if (e.status === "completed" || evtDate && evtDate < now2) {
                displayStatus = "Completed";
              } else if (e.status === "ongoing") {
                displayStatus = "Ongoing";
              } else {
                displayStatus = "Upcoming";
              }
              return {
                id: `EV-${e.id}`,
                eventId: `EV-${e.id}`,
                title: e.title || "—",
                type: e.type || e.event_type || "Workshop",
                libraryName: e.library?.name || "—",
                date: e.date ? fmtDate(e.date) : "—",
                time: `${e.start_time || "—"} - ${e.end_time || "—"}`,
                venue: e.venue || e.location || "Campus Main",
                capacity,
                capacityStr,
                registered: totalRegistered,
                attended: attendedCount,
                revenue: totalRevenue,
                price,
                priceStr,
                isPaid,
                fillRate,
                attendanceRate,
                capacityStatus: capStatus,
                calculatedStatus: displayStatus,
                rawStatus: e.status || "upcoming"
              };
            });
          }
        }
        generatedReport.value = {
          type: filters.category,
          label: catLabel,
          fromDate: filters.fromDate,
          toDate: filters.toDate,
          timeRange: filters.timeRange,
          libraryInfo,
          items,
          generationDate: genDate,
          generationTime: genTime,
          generatedBy: {
            name: user.value?.name || "System Admin",
            role: "Super Admin",
            staffId: user.value?.crn || `ID-${user.value?.id || ""}`
          }
        };
      } catch (error) {
        console.error(error);
        showError("Generation Error", "Failed to compile console report logs.");
      } finally {
        generating.value = false;
      }
    };
    const processedItems = computed(() => {
      if (!generatedReport.value) return [];
      const list = generatedReport.value.items;
      if (filters.category === "book_reservations") {
        return list.filter((item) => {
          if (filters.studentSearch) {
            const q = filters.studentSearch.toLowerCase();
            const matchName = item.studentName.toLowerCase().includes(q);
            const matchCrn = item.crn.toLowerCase().includes(q);
            if (!matchName && !matchCrn) return false;
          }
          if (filters.bookSearch) {
            const q = filters.bookSearch.toLowerCase();
            const matchTitle = item.bookTitle.toLowerCase().includes(q);
            const matchIsbn = item.isbn.toLowerCase().includes(q);
            if (!matchTitle && !matchIsbn) return false;
          }
          if (filters.bookCategory !== "all") {
            if (item.bookCategory !== filters.bookCategory) return false;
          }
          if (filters.reservationStatus !== "all") {
            const statusMap = {
              "pending": "pending approval",
              "approved": "approved",
              "rejected": "rejected",
              "collected": "collected"
            };
            const target = statusMap[filters.reservationStatus] || filters.reservationStatus;
            if (item.reservationStatus.toLowerCase() !== target.toLowerCase()) return false;
          }
          if (filters.returnStatus !== "all") {
            if (item.timeAnalysisStatus.toLowerCase() !== filters.returnStatus.toLowerCase()) return false;
          }
          return true;
        });
      }
      if (filters.category === "complaints") {
        return list.filter((item) => {
          if (filters.studentSearch) {
            const q = filters.studentSearch.toLowerCase();
            const matchName = item.studentName.toLowerCase().includes(q);
            const matchCrn = item.crn.toLowerCase().includes(q);
            if (!matchName && !matchCrn) return false;
          }
          if (filters.complaintCategory !== "all") {
            if (item.category !== filters.complaintCategory) return false;
          }
          if (filters.complaintPriority !== "all") {
            if (item.rawPriority !== filters.complaintPriority) return false;
          }
          if (filters.complaintStatus !== "all") {
            if (item.rawStatus !== filters.complaintStatus) return false;
          }
          return true;
        });
      }
      if (filters.category === "events") {
        return list.filter((item) => {
          if (filters.eventSearch) {
            const q = filters.eventSearch.toLowerCase();
            const matchTitle = item.title.toLowerCase().includes(q);
            const matchVenue = item.venue.toLowerCase().includes(q);
            const matchType = item.type.toLowerCase().includes(q);
            if (!matchTitle && !matchVenue && !matchType) return false;
          }
          if (filters.eventType !== "all") {
            if (item.type.toLowerCase() !== filters.eventType.toLowerCase()) return false;
          }
          if (filters.eventPricing !== "all") {
            if (filters.eventPricing === "free" && item.isPaid) return false;
            if (filters.eventPricing === "paid" && !item.isPaid) return false;
          }
          if (filters.eventCapacityStatus !== "all") {
            if (filters.eventCapacityStatus === "full" && item.capacityStatus !== "Full") return false;
            if (filters.eventCapacityStatus === "open" && item.capacityStatus !== "Open") return false;
            if (filters.eventCapacityStatus === "unlimited" && item.capacityStatus !== "Unlimited") return false;
          }
          if (filters.eventStatus !== "all") {
            if (item.calculatedStatus.toLowerCase() !== filters.eventStatus.toLowerCase()) return false;
          }
          return true;
        });
      }
      if (filters.category === "attendance") {
        return list.filter((item) => {
          if (filters.attendanceSearch) {
            const q = filters.attendanceSearch.toLowerCase();
            const matchName = item.studentName.toLowerCase().includes(q);
            const matchCrn = item.crn.toLowerCase().includes(q);
            if (!matchName && !matchCrn) return false;
          }
          if (filters.attendanceStatus !== "all") {
            if (item.rawStatus !== filters.attendanceStatus) return false;
          }
          if (filters.attendanceMethod !== "all") {
            const methodMap = {
              "manual": "manual check-in",
              "booking": "seat booking",
              "auto": "qr scan / auto"
            };
            const target = methodMap[filters.attendanceMethod];
            if (item.method.toLowerCase() !== target) return false;
          }
          if (filters.attendanceSeat) {
            if (!item.seatNumber.toLowerCase().includes(filters.attendanceSeat.toLowerCase())) return false;
          }
          return true;
        });
      }
      if (filters.category !== "bookings") return list;
      return list.filter((item) => {
        if (filters.studentSearch) {
          const q = filters.studentSearch.toLowerCase();
          const matchName = item.studentName.toLowerCase().includes(q);
          const matchCrn = item.crn.toLowerCase().includes(q);
          if (!matchName && !matchCrn) return false;
        }
        if (filters.seatNumber) {
          if (!item.seatNumber.toLowerCase().includes(filters.seatNumber.toLowerCase())) {
            return false;
          }
        }
        if (filters.bookingStatus !== "all") {
          if (item.rawStatus !== filters.bookingStatus) return false;
        }
        if (filters.checkInStatus !== "all") {
          if (filters.checkInStatus === "checked_in" && !item.hasCheckIn) return false;
          if (filters.checkInStatus === "not_checked_in" && item.hasCheckIn) return false;
        }
        if (filters.overstayStatus !== "all") {
          const matchStatus = filters.overstayStatus.toLowerCase();
          const itemStatus = item.calculatedStatus.toLowerCase();
          if (matchStatus === "on_time" && itemStatus !== "checked out on time") return false;
          if (matchStatus === "early" && itemStatus !== "early check-out") return false;
          if (matchStatus === "overstay" && itemStatus !== "overstay") return false;
          if (matchStatus === "serious_overstay" && itemStatus !== "serious overstay") return false;
          if (matchStatus === "cancelled" && itemStatus !== "auto cancelled") return false;
        }
        return true;
      });
    });
    const paginatedItems = computed(() => {
      if (!generatedReport.value) return [];
      const start = (currentPage.value - 1) * itemsPerPage;
      return processedItems.value.slice(start, start + itemsPerPage);
    });
    const totalPages = computed(() => {
      return Math.ceil(processedItems.value.length / itemsPerPage) || 1;
    });
    const totalHoursUsed = computed(() => {
      if (filters.category !== "bookings") return 0;
      const totalMins = processedItems.value.reduce((acc, item) => acc + item.usedMinutesRaw, 0);
      return (totalMins / 60).toFixed(1);
    });
    const summaryStats = computed(() => {
      if (!generatedReport.value) return [];
      if (filters.category === "book_reservations") {
        const list2 = processedItems.value;
        const total2 = list2.length;
        const pending = list2.filter((r) => r.reservationStatus === "Pending Approval").length;
        const approved = list2.filter((r) => r.reservationStatus === "Approved").length;
        const rejected = list2.filter((r) => r.reservationStatus === "Rejected").length;
        const collected = list2.filter((r) => r.reservationStatus === "Collected").length;
        return [
          { label: "Total Requests", value: total2 },
          { label: "Pending Requests", value: pending },
          { label: "Approved Requests", value: approved },
          { label: "Rejected Requests", value: rejected },
          { label: "Books Collected", value: collected }
        ];
      }
      if (filters.category === "complaints") {
        const list2 = processedItems.value;
        const total2 = list2.length;
        const pending = list2.filter((c) => c.rawStatus === "open").length;
        const inProgress = list2.filter((c) => c.rawStatus === "in_progress").length;
        const resolved = list2.filter((c) => c.rawStatus === "resolved").length;
        const closed = list2.filter((c) => c.rawStatus === "closed").length;
        const rejected = list2.filter((c) => c.rawStatus === "rejected").length;
        return [
          { label: "Total Complaints", value: total2 },
          { label: "Pending Complaints", value: pending },
          { label: "In Progress", value: inProgress },
          { label: "Resolved Complaints", value: resolved },
          { label: "Closed Complaints", value: closed },
          { label: "Rejected Complaints", value: rejected }
        ];
      }
      if (filters.category === "events") {
        const list2 = processedItems.value;
        const total2 = list2.length;
        const totalRegistrations = list2.reduce((sum, e) => sum + (e.registered || 0), 0);
        const totalAttended = list2.reduce((sum, e) => sum + (e.attended || 0), 0);
        const totalRevenue = list2.reduce((sum, e) => sum + (e.revenue || 0), 0);
        const capacityRestrictedEvents = list2.filter((e) => e.capacity && e.capacity > 0);
        const avgFillRate = capacityRestrictedEvents.length > 0 ? Math.round(capacityRestrictedEvents.reduce((sum, e) => sum + (e.fillRate || 0), 0) / capacityRestrictedEvents.length) : 100;
        return [
          { label: "Total Events", value: total2 },
          { label: "Total Registrations", value: totalRegistrations },
          { label: "Total Attended", value: totalAttended },
          { label: "Total Revenue", value: `PKR ${totalRevenue.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}` },
          { label: "Avg Capacity Fill", value: `${avgFillRate}%` }
        ];
      }
      if (filters.category === "attendance") {
        const list2 = processedItems.value;
        const total2 = list2.length;
        const currentlyPresent = list2.filter((a) => a.rawStatus === "present").length;
        const manualCheckins = list2.filter((a) => a.method === "Manual Check-in").length;
        const seatBookings = list2.filter((a) => a.method === "Seat Booking").length;
        const completedSessions = list2.filter((a) => a.rawStatus === "left");
        const avgMins = completedSessions.length > 0 ? Math.round(completedSessions.reduce((acc, s) => acc + s.durationRaw, 0) / completedSessions.length) : 0;
        const avgDurationStr = avgMins > 0 ? formatAttendanceDuration(avgMins) : "—";
        return [
          { label: "Total Logs", value: total2 },
          { label: "Currently Present", value: currentlyPresent },
          { label: "Manual Check-ins", value: manualCheckins },
          { label: "Seat Booking Entries", value: seatBookings },
          { label: "Avg Session Duration", value: avgDurationStr }
        ];
      }
      if (filters.category !== "bookings") {
        const total2 = processedItems.value.length;
        return [
          { label: "Total Logs", value: total2 },
          { label: "Filtered", value: "Active" }
        ];
      }
      const list = processedItems.value;
      const total = list.filter((b) => b.rawStatus !== "cancelled").length;
      const completed = list.filter((b) => b.hasCheckOut).length;
      const early = list.filter((b) => b.calculatedStatus === "Early Check-out").length;
      const onTime = list.filter((b) => b.calculatedStatus === "Checked Out On Time").length;
      const overstays = list.filter((b) => b.calculatedStatus === "Overstay").length;
      const seriousOverstays = list.filter((b) => b.calculatedStatus === "Serious Overstay").length;
      const cancelled = list.filter((b) => b.calculatedStatus === "Auto Cancelled").length;
      return [
        { label: "Seat Bookings", value: total },
        { label: "Completed", value: completed },
        { label: "Early Check-outs", value: early },
        { label: "On-Time Check-outs", value: onTime },
        { label: "Total Overstays", value: overstays },
        { label: "Serious Overstays", value: seriousOverstays },
        { label: "Auto-Cancelled", value: cancelled }
      ];
    });
    const tableHeaders = computed(() => {
      if (filters.category === "bookings") {
        return ["Student Information", "Booking Date", "Seat & Library", "Planned Time (Start/End)", "Actual Time (Check-In/Out)", "Duration Details", "Status"];
      }
      if (filters.category === "book_reservations") {
        return ["Student Information", "Book & Library", "Reservation Details", "Days Details", "Approved By", "Status"];
      }
      if (filters.category === "complaints") {
        return ["Student Information", "Complaint Details", "Resolution Details", "Status"];
      }
      if (filters.category === "attendance") {
        return ["Student Details", "Library Location", "Date", "Seat Designation", "Check-In / Out", "Session Duration", "Check-in Method", "Status"];
      }
      if (filters.category === "seat_utilization") {
        return ["Library Name", "Floor Level", "Seat Number", "Amenities", "Status"];
      }
      if (filters.category === "books") {
        return ["Book ID", "Title", "Author", "Library", "Type Format", "Availability"];
      }
      if (filters.category === "events") {
        return ["Event Information", "Event Type", "Library", "Date & Time", "Venue", "Participants", "Capacity & Revenue", "Status"];
      }
      return ["Event ID", "Event Title", "Library", "Date Scheduled", "Venue", "Participants", "Capacity Status"];
    });
    const isStatusField = (val) => {
      const statuses = [
        "booked",
        "checked_in",
        "checked_out",
        "cancelled",
        "available",
        "occupied",
        "maintenance",
        "open",
        "resolved",
        "in_progress",
        "left",
        "present",
        "checked out on time",
        "early check-out",
        "overstay",
        "serious overstay",
        "auto cancelled",
        "unclaimed",
        "pending approval",
        "approved",
        "rejected",
        "collected",
        "returned early",
        "returned on time",
        "returned late",
        "overdue",
        "not picked up",
        "borrowed",
        "pending",
        "in progress",
        "closed",
        "upcoming",
        "ongoing",
        "completed",
        "full"
      ];
      return typeof val === "string" && statuses.includes(val.toLowerCase());
    };
    const statusBadgeHtml = (status) => {
      const colors = {
        "checked out on time": "#059669",
        "early check-out": "#6366f1",
        "overstay": "#d97706",
        "serious overstay": "#dc2626",
        "auto cancelled": "#475569",
        "unclaimed": "#94a3b8",
        "checked in": "#7c3aed",
        "present": "#059669",
        "left": "#6366f1",
        "available": "#059669",
        "occupied": "#d97706",
        "maintenance": "#dc2626",
        "open": "#d97706",
        "resolved": "#059669",
        "in_progress": "#7c3aed",
        // Book Reservations Statuses
        "pending approval": "#d97706",
        "approved": "#059669",
        "rejected": "#dc2626",
        "collected": "#3b82f6",
        "returned early": "#6366f1",
        "returned on time": "#059669",
        "returned late": "#dc2626",
        "overdue": "#dc2626",
        "not picked up": "#475569",
        "borrowed": "#7c3aed",
        // Support/Complaints Statuses
        "pending": "#d97706",
        "in progress": "#7c3aed",
        "closed": "#475569",
        // Events Statuses
        "upcoming": "#3b82f6",
        "ongoing": "#7c3aed",
        "completed": "#059669",
        "cancelled": "#dc2626",
        "full": "#ef4444"
      };
      const c = colors[status.toLowerCase()] || "#6b7280";
      return `<span class="px-2 py-0.5 rounded text-[10px] font-black text-white uppercase tracking-wider block text-center" style="background: ${c}">${status.replace(/_/g, " ")}</span>`;
    };
    const exportReport = (format) => {
      if (!generatedReport.value) return;
      const label = `${generatedReport.value.label} Report`;
      if (format === "pdf") {
        const html = buildPremiumHTML(generatedReport.value);
        printHTML(html);
      } else {
        const csv = buildPremiumCSV(generatedReport.value);
        downloadAsCSV(`${label.replace(/\s+/g, "_")}_${Date.now()}.csv`, csv);
      }
      reportHistory.value.unshift({
        name: label,
        type: generatedReport.value.type,
        format,
        libraryId: selectedLibraryId.value,
        generatedAt: (/* @__PURE__ */ new Date()).toLocaleString("en-PK", { dateStyle: "medium", timeStyle: "short" })
      });
      if (reportHistory.value.length > 100) reportHistory.value.pop();
      saveHistory();
    };
    const buildPremiumHTML = (report) => {
      const isBookings = report.type === "bookings";
      const statsHTML = summaryStats.value.map((s) => `
    <div class="stat-box">
      <div class="stat-lbl">${s.label}</div>
      <div class="stat-val">${s.value}</div>
    </div>
  `).join("");
      const tableHeadersHtml = tableHeaders.value.map((h) => `<th>${h}</th>`).join("");
      const tableRowsHtml = processedItems.value.map((row) => {
        if (isBookings) {
          return `
        <tr>
          <td>
            <strong>${row.studentName}</strong><br/>
            <span style="color:#64748b;font-size:8px;">CRN: ${row.crn}</span>
          </td>
          <td>${row.bookingDate}</td>
          <td>
            <strong>Seat ${row.seatNumber}</strong><br/>
            <span style="color:#64748b;font-size:8px;">${row.libraryName}</span>
          </td>
          <td>${row.startTime} - ${row.endTime}</td>
          <td>${row.actualCheckIn} - ${row.actualCheckOut}</td>
          <td>
            Orig: ${row.bookedDuration}<br/>
            Ext: ${row.extendedTime}<br/>
            Res: ${row.reservedDuration}<br/>
            Used: ${row.usedDuration}
          </td>
          <td>${statusBadgeHtml(row.calculatedStatus)}</td>
        </tr>
      `;
        } else if (report.type === "book_reservations") {
          return `
        <tr>
          <td>
            <strong>${row.studentName}</strong><br/>
            <span style="color:#64748b;font-size:8px;">CRN: ${row.crn}</span>
          </td>
          <td>
            <strong>${row.bookTitle}</strong><br/>
            <span style="color:#64748b;font-size:8px;">ISBN: ${row.isbn}</span><br/>
            <span style="color:#7c3aed;font-size:8px;font-weight:bold;">${row.libraryName}</span>
          </td>
          <td>
            Res: ${row.reservationDate}<br/>
            Appr: ${row.approvalDate}<br/>
            Pickup: ${row.pickupDate}<br/>
            Return: ${row.returnDate}
          </td>
          <td>
            Req: ${row.requestedDays} days<br/>
            Act: ${row.actualBorrowedDays} days
          </td>
          <td>${row.approvedBy}</td>
          <td>
            ${statusBadgeHtml(row.reservationStatus)}
            ${row.returnStatusToShow ? `<div style="margin-top: 4px;">${statusBadgeHtml(row.returnStatusToShow)}</div>` : ""}
          </td>
        </tr>
      `;
        } else if (report.type === "complaints") {
          return `
        <tr>
          <td>
            <strong>${row.studentName}</strong><br/>
            <span style="color:#64748b;font-size:8px;">CRN: ${row.crn}</span>
          </td>
          <td>
            <strong>#${row.complaintId}</strong><br/>
            <span style="color:#1e293b;font-weight:600;">${row.subject}</span><br/>
            <span style="color:#64748b;font-size:8px;">Filed: ${row.submittedDate}</span><br/>
            <span style="color:#7c3aed;font-size:8px;font-weight:bold;">${row.libraryName}</span><br/>
            <span style="font-size:8px;font-weight:bold;color:${row.priority.toLowerCase() === "urgent" || row.priority.toLowerCase() === "high" ? "#dc2626" : "#64748b"};">Priority: ${row.priority}</span>
          </td>
          <td>
            First Response: ${row.responseDate}<br/>
            Resolved: ${row.resolutionDate}<br/>
            ${row.resolutionTime !== "—" ? `<span style="color:#7c3aed;font-weight:bold;">Time Taken: ${row.resolutionTime}</span>` : ""}
          </td>
          <td>${statusBadgeHtml(row.status)}</td>
        </tr>
      `;
        } else if (report.type === "events") {
          return `
        <tr>
          <td>
            <strong>${row.title}</strong><br/>
            <span style="color:#64748b;font-size:8px;">${row.eventId}</span>
          </td>
          <td>${row.type}</td>
          <td><strong>${row.libraryName}</strong></td>
          <td>
            Date: ${row.date}<br/>
            Time: ${row.time}
          </td>
          <td>${row.venue}</td>
          <td>
            Reg: ${row.registered}<br/>
            Attended: ${row.attended}<br/>
            ${row.registered > 0 ? `<span style="color:#7c3aed;font-weight:bold;">Rate: ${row.attendanceRate}%</span>` : ""}
          </td>
          <td>
            Price: ${row.priceStr}<br/>
            ${row.isPaid ? `<span style="color:#7c3aed;font-weight:bold;">Rev: PKR ${row.revenue.toFixed(2)}</span><br/>` : ""}
            Cap: ${row.capacityStr} ${row.capacity ? `(${row.fillRate}% filled)` : ""}
          </td>
          <td>
            ${statusBadgeHtml(row.calculatedStatus)}
            ${row.capacityStatus === "Full" ? `<div style="margin-top: 4px;">${statusBadgeHtml("full")}</div>` : ""}
          </td>
        </tr>
      `;
        } else if (report.type === "attendance") {
          return `
        <tr>
          <td>
            <strong>${row.studentName}</strong><br/>
            <span style="color:#64748b;font-size:8px;">CRN: ${row.crn}</span>
          </td>
          <td><strong>${row.libraryName}</strong></td>
          <td>
            <strong>${row.date}</strong><br/>
            <span style="color:#64748b;font-size:8px;">${row.attendanceId}</span>
          </td>
          <td><strong>Seat ${row.seatNumber}</strong></td>
          <td>
            In: ${row.checkInTime}<br/>
            Out: ${row.checkOutTime}
          </td>
          <td>
            <span style="font-weight:bold;color:${row.rawStatus === "present" ? "#7c3aed" : "#1e293b"};">
              ${row.durationStr}
            </span>
          </td>
          <td><strong>${row.method}</strong></td>
          <td>${statusBadgeHtml(row.calculatedStatus)}</td>
        </tr>
      `;
        } else {
          const cols = Object.values(row).map((col, colIdx) => {
            if (colIdx === Object.keys(row).length - 1 && isStatusField(col)) {
              return `<td>${statusBadgeHtml(col)}</td>`;
            }
            return `<td>${col}</td>`;
          }).join("");
          return `<tr>${cols}</tr>`;
        }
      }).join("");
      return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <title>${report.label} Report</title>
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;800;900&display=swap" rel="stylesheet">
        <style>
          @page { size: A4; margin: 15mm; }
          body { font-family: 'Outfit', sans-serif; color: #1e293b; font-size: 10px; line-height: 1.4; margin: 0; padding: 0; background: #fff; }
          .header-container { display: flex; justify-content: space-between; border-bottom: 2px solid #7c3aed; padding-bottom: 12px; margin-bottom: 16px; }
          .logo-area { display: flex; gap: 10px; align-items: center; }
          .logo-icon { width: 32px; height: 32px; background: #7c3aed; border-radius: 8px; color: #fff; display: flex; align-items: center; justify-content: center; font-size: 18px; font-weight: bold; }
          .lib-title { font-size: 16px; font-weight: 800; color: #0f172a; margin: 0; }
          .lib-meta { font-size: 9px; color: #64748b; margin-top: 2px; }
          .report-meta { text-align: right; }
          .report-meta h1 { font-size: 14px; font-weight: 900; color: #7c3aed; margin: 0; text-transform: uppercase; letter-spacing: 0.05em; }
          .report-meta p { font-size: 9px; color: #475569; margin: 2px 0 0 0; }
          
          .generated-by-bar { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 8px 12px; display: flex; justify-content: space-between; font-weight: 600; color: #475569; font-size: 9px; margin-bottom: 16px; }
          .generated-by-bar span { color: #0f172a; }
          
          .summary-title { font-size: 10px; font-weight: 800; text-transform: uppercase; color: #7c3aed; margin-bottom: 8px; tracking-spacing: 0.05em; }
          .stat-grid { display: grid; grid-template-columns: repeat(${summaryStats.value.length}, 1fr); gap: 6px; margin-bottom: 18px; }
          .stat-box { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 8px; text-align: center; }
          .stat-lbl { font-size: 7px; font-weight: 800; color: #64748b; text-transform: uppercase; }
          .stat-val { font-size: 14px; font-weight: 900; color: #0f172a; margin-top: 2px; }
          
          table { width: 100%; border-collapse: collapse; margin-bottom: 20px; page-break-inside: auto; }
          tr { page-break-inside: avoid; page-break-after: auto; }
          th { background: #7c3aed; color: #fff; padding: 6px 10px; font-size: 8px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.05em; text-align: left; }
          td { padding: 6px 10px; border-bottom: 1px solid #e2e8f0; color: #334155; font-size: 8px; }
          tr:nth-child(even) { background: #f8fafc; }
          
          .footer-container { display: flex; justify-content: space-between; border-top: 1px solid #e2e8f0; padding-top: 8px; font-size: 8px; color: #94a3b8; font-weight: bold; position: fixed; bottom: 0; left: 0; right: 0; background: #fff; }
          @media print {
            .no-print { display: none; }
            body { padding-bottom: 30px; }
          }
        </style>
      </head>
      <body>
        <div class="no-print" style="position: fixed; top: 12px; right: 12px; z-index: 1000;">
          <button onclick="window.print()" style="padding: 8px 16px; background: #7c3aed; color: white; border: none; border-radius: 6px; cursor: pointer; font-weight: bold; font-size: 11px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">Print / Save PDF</button>
        </div>

        <div class="header-container">
          <div class="logo-area">
            <div class="logo-icon">📚</div>
            <div>
              <h2 class="lib-title">${report.libraryInfo?.name}</h2>
              <div class="lib-meta">${report.libraryInfo?.address} &bull; Phone: ${report.libraryInfo?.contact_info?.phone || "N/A"} &bull; Email: ${report.libraryInfo?.contact_info?.email || "N/A"}</div>
            </div>
          </div>
          <div class="report-meta">
            <h1>${report.label} Report</h1>
            <p>Date Range: ${fmtDate(report.fromDate)} - ${fmtDate(report.toDate)}</p>
          </div>
        </div>

        <div class="generated-by-bar">
          <div>Generated By: <span>${report.generatedBy.name}</span></div>
          <div>Role: <span>${report.generatedBy.role}</span></div>
          <div>Staff ID: <span>${report.generatedBy.staffId}</span></div>
          <div>Date Generated: <span>${report.generationDate} ${report.generationTime}</span></div>
        </div>

        <div class="summary-title">Consolidated Summary Statistics</div>
        <div class="stat-grid">
          ${statsHTML}
        </div>

        <div class="summary-title">Report Content Details</div>
        <table>
          <thead>
            <tr>${tableHeadersHtml}</tr>
          </thead>
          <tbody>
            ${tableRowsHtml}
          </tbody>
        </table>

        <div class="footer-container">
          <div>SmartLib System &bull; Consolidated Audit</div>
          <div style="font-style: italic;">This report was generated automatically by SmartLib.</div>
          <div>Timestamp: ${report.generationDate} ${report.generationTime}</div>
        </div>
      </body>
    </html>
  `;
    };
    const buildPremiumCSV = (report) => {
      const isBookings = report.type === "bookings";
      let csv = `"Library Target","${report.libraryInfo?.name}"
`;
      csv += `"Address","${report.libraryInfo?.address}"
`;
      csv += `"Phone","${report.libraryInfo?.contact_info?.phone || ""}"
`;
      csv += `"Email","${report.libraryInfo?.contact_info?.email || ""}"

`;
      csv += `"Report Title","${report.label} Report"
`;
      csv += `"Time Period","${fmtDate(report.fromDate)} to ${fmtDate(report.toDate)}"
`;
      csv += `"Generated By","${report.generatedBy.name} (${report.generatedBy.role})"
`;
      csv += `"Staff ID","${report.generatedBy.staffId}"
`;
      csv += `"Generation Date","${report.generationDate} ${report.generationTime}"

`;
      csv += `"=== EXECUTIVE SUMMARY ==="
`;
      summaryStats.value.forEach((s) => {
        csv += `"${s.label}","${s.value}"
`;
      });
      csv += `
`;
      csv += `"=== REPORT DETAILS ==="
`;
      csv += `"${tableHeaders.value.join('","')}"
`;
      if (isBookings) {
        processedItems.value.forEach((row) => {
          csv += `"${row.studentName} (CRN: ${row.crn})","${row.bookingDate}","Seat ${row.seatNumber} (${row.libraryName})","${row.startTime} - ${row.endTime}","${row.actualCheckIn} - ${row.actualCheckOut}","Orig:${row.bookedDuration} Ext:${row.extendedTime} Res:${row.reservedDuration} Used:${row.usedDuration}","${row.calculatedStatus}"
`;
        });
      } else if (report.type === "book_reservations") {
        processedItems.value.forEach((row) => {
          csv += `"${row.studentName} (CRN: ${row.crn})","${row.bookTitle} (ISBN: ${row.isbn}) (${row.libraryName})","Res:${row.reservationDate} Appr:${row.approvalDate} Pickup:${row.pickupDate} Return:${row.returnDate}","Req:${row.requestedDays} Act:${row.actualBorrowedDays} Early/Late:${row.daysEarlyLate}","${row.approvedBy}","Reservation:${row.reservationStatus} TimeAnalysis:${row.returnStatusToShow || "—"}"
`;
        });
      } else if (report.type === "complaints") {
        processedItems.value.forEach((row) => {
          csv += `"${row.studentName} (CRN: ${row.crn})","ID:${row.complaintId} Subject:${row.subject.replace(/"/g, '""')} Filed:${row.submittedDate} Library:${row.libraryName} Priority:${row.priority}","First Response:${row.responseDate} Resolved:${row.resolutionDate} Time Taken:${row.resolutionTime}","${row.status}"
`;
        });
      } else if (report.type === "events") {
        processedItems.value.forEach((row) => {
          csv += `"${row.title} (${row.eventId})","${row.type}","${row.libraryName}","Date:${row.date} Time:${row.time}","${row.venue}","Reg:${row.registered} Attended:${row.attended} Rate:${row.attendanceRate}%","Price:${row.priceStr} Revenue:PKR ${row.revenue.toFixed(2)} Cap:${row.capacityStr} Fill:${row.fillRate}%","Status:${row.calculatedStatus} CapacityStatus:${row.capacityStatus}"
`;
        });
      } else if (report.type === "attendance") {
        processedItems.value.forEach((row) => {
          csv += `"${row.studentName} (CRN: ${row.crn})","${row.libraryName}","${row.date} (${row.attendanceId})","Seat ${row.seatNumber}","In:${row.checkInTime} Out:${row.checkOutTime}","${row.durationStr}","${row.method}","${row.calculatedStatus}"
`;
        });
      } else {
        processedItems.value.forEach((row) => {
          const vals = Object.values(row).map((v) => String(v).replace(/"/g, '""'));
          csv += `"${vals.join('","')}"
`;
        });
      }
      return csv;
    };
    const printHTML = (html) => {
      const printWindow = window.open("", "_blank");
      if (!printWindow) {
        showError("Popup Blocked", "Please allow popups to open the print layout.");
        return;
      }
      printWindow.document.write(html);
      printWindow.document.close();
      printWindow.onload = () => {
        setTimeout(() => printWindow.print(), 350);
      };
    };
    const downloadAsCSV = (filename, content) => {
      const blob = new Blob([content], { type: "text/csv;charset=utf-8;" });
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
      exportReport(entry.format);
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
    onMounted(async () => {
      try {
        libraries.value = await superadminAPI.getLibraries();
        loadHistory();
      } catch (error) {
        showError("Error", "Failed to load system libraries.");
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("div", _hoisted_3, [
            _cache[34] || (_cache[34] = createBaseVNode("label", { class: "text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5 block ml-1 text-left" }, "Active Library", -1)),
            createBaseVNode("div", _hoisted_4, [
              withDirectives(createBaseVNode("select", {
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => selectedLibraryId.value = $event),
                onChange: handleLibraryChange,
                class: "w-full pl-11 pr-10 py-2.5 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-700 focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 outline-none transition-all appearance-none cursor-pointer shadow-sm"
              }, [
                _cache[33] || (_cache[33] = createBaseVNode("option", { value: "all" }, "All Libraries (Combined)", -1)),
                (openBlock(true), createElementBlock(Fragment, null, renderList(libraries.value, (lib) => {
                  return openBlock(), createElementBlock("option", {
                    key: lib.id,
                    value: lib.id
                  }, toDisplayString(lib.name), 9, _hoisted_5);
                }), 128))
              ], 544), [
                [vModelSelect, selectedLibraryId.value]
              ]),
              createBaseVNode("div", _hoisted_6, [
                createVNode(unref(Library), { class: "w-4 h-4" })
              ]),
              createBaseVNode("div", _hoisted_7, [
                createVNode(unref(ChevronDown), { class: "w-3.5 h-3.5" })
              ])
            ])
          ])
        ]),
        createBaseVNode("div", _hoisted_8, [
          createBaseVNode("h2", _hoisted_9, [
            createVNode(unref(Zap), { class: "w-4.5 h-4.5 text-amber-500" }),
            _cache[35] || (_cache[35] = createBaseVNode("span", null, "Configure Consolidated Parameters", -1))
          ]),
          createBaseVNode("div", {
            class: normalizeClass(filters.timeRange === "custom" ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5" : "grid grid-cols-1 md:grid-cols-2 gap-5")
          }, [
            createBaseVNode("div", null, [
              _cache[36] || (_cache[36] = createBaseVNode("label", { class: "text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 block ml-1" }, "Report Category", -1)),
              withDirectives(createBaseVNode("select", {
                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => filters.category = $event),
                onChange: handleLibraryChange,
                class: "w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-700 focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 outline-none cursor-pointer"
              }, [
                (openBlock(), createElementBlock(Fragment, null, renderList(reportCategories, (cat) => {
                  return createBaseVNode("option", {
                    key: cat.type,
                    value: cat.type
                  }, toDisplayString(cat.label), 9, _hoisted_10);
                }), 64))
              ], 544), [
                [vModelSelect, filters.category]
              ])
            ]),
            createBaseVNode("div", null, [
              _cache[38] || (_cache[38] = createBaseVNode("label", { class: "text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 block ml-1" }, "Time Range", -1)),
              withDirectives(createBaseVNode("select", {
                "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => filters.timeRange = $event),
                onChange: handleTimeRangeChange,
                class: "w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-700 focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 outline-none cursor-pointer"
              }, [..._cache[37] || (_cache[37] = [
                createStaticVNode('<option value="today" data-v-5e6e0389>Today</option><option value="week" data-v-5e6e0389>This Week</option><option value="month" data-v-5e6e0389>This Month</option><option value="year" data-v-5e6e0389>This Year</option><option value="custom" data-v-5e6e0389>Custom Range</option>', 5)
              ])], 544), [
                [vModelSelect, filters.timeRange]
              ])
            ]),
            filters.timeRange === "custom" ? (openBlock(), createElementBlock("div", _hoisted_11, [
              _cache[39] || (_cache[39] = createBaseVNode("label", { class: "text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 block ml-1" }, "From Date", -1)),
              withDirectives(createBaseVNode("input", {
                "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => filters.fromDate = $event),
                type: "date",
                class: "w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-700 focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 outline-none"
              }, null, 512), [
                [vModelText, filters.fromDate]
              ])
            ])) : createCommentVNode("", true),
            filters.timeRange === "custom" ? (openBlock(), createElementBlock("div", _hoisted_12, [
              _cache[40] || (_cache[40] = createBaseVNode("label", { class: "text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 block ml-1" }, "To Date", -1)),
              withDirectives(createBaseVNode("input", {
                "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => filters.toDate = $event),
                type: "date",
                class: "w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-700 focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 outline-none"
              }, null, 512), [
                [vModelText, filters.toDate]
              ])
            ])) : createCommentVNode("", true)
          ], 2),
          filters.category === "bookings" ? (openBlock(), createElementBlock("div", _hoisted_13, [
            _cache[49] || (_cache[49] = createBaseVNode("span", { class: "text-[10px] font-black text-purple-800 uppercase tracking-widest block" }, "Advanced Search & Filter Parameters", -1)),
            createBaseVNode("div", _hoisted_14, [
              createBaseVNode("div", null, [
                _cache[41] || (_cache[41] = createBaseVNode("label", { class: "text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1.5 block" }, "Student (Name / CRN)", -1)),
                withDirectives(createBaseVNode("input", {
                  "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => filters.studentSearch = $event),
                  type: "text",
                  placeholder: "Search student...",
                  class: "w-full px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs font-semibold text-slate-700 focus:ring-2 focus:ring-purple-500/10 focus:border-purple-500 outline-none"
                }, null, 512), [
                  [vModelText, filters.studentSearch]
                ])
              ]),
              createBaseVNode("div", null, [
                _cache[42] || (_cache[42] = createBaseVNode("label", { class: "text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1.5 block" }, "Seat Number", -1)),
                withDirectives(createBaseVNode("input", {
                  "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => filters.seatNumber = $event),
                  type: "text",
                  placeholder: "e.g. S-101",
                  class: "w-full px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs font-semibold text-slate-700 focus:ring-2 focus:ring-purple-500/10 focus:border-purple-500 outline-none"
                }, null, 512), [
                  [vModelText, filters.seatNumber]
                ])
              ]),
              createBaseVNode("div", null, [
                _cache[44] || (_cache[44] = createBaseVNode("label", { class: "text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1.5 block" }, "Booking Status", -1)),
                withDirectives(createBaseVNode("select", {
                  "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => filters.bookingStatus = $event),
                  class: "w-full px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-700 focus:ring-2 focus:ring-purple-500/10 focus:border-purple-500 outline-none cursor-pointer"
                }, [..._cache[43] || (_cache[43] = [
                  createStaticVNode('<option value="all" data-v-5e6e0389>All Statuses</option><option value="booked" data-v-5e6e0389>Booked</option><option value="checked_in" data-v-5e6e0389>Checked In</option><option value="checked_out" data-v-5e6e0389>Checked Out</option><option value="cancelled" data-v-5e6e0389>Cancelled</option>', 5)
                ])], 512), [
                  [vModelSelect, filters.bookingStatus]
                ])
              ]),
              createBaseVNode("div", null, [
                _cache[46] || (_cache[46] = createBaseVNode("label", { class: "text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1.5 block" }, "Check-in Status", -1)),
                withDirectives(createBaseVNode("select", {
                  "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => filters.checkInStatus = $event),
                  class: "w-full px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-700 focus:ring-2 focus:ring-purple-500/10 focus:border-purple-500 outline-none cursor-pointer"
                }, [..._cache[45] || (_cache[45] = [
                  createBaseVNode("option", { value: "all" }, "All Check-ins", -1),
                  createBaseVNode("option", { value: "checked_in" }, "Checked In", -1),
                  createBaseVNode("option", { value: "not_checked_in" }, "Not Checked In", -1)
                ])], 512), [
                  [vModelSelect, filters.checkInStatus]
                ])
              ]),
              createBaseVNode("div", null, [
                _cache[48] || (_cache[48] = createBaseVNode("label", { class: "text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1.5 block" }, "Overstay Status", -1)),
                withDirectives(createBaseVNode("select", {
                  "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => filters.overstayStatus = $event),
                  class: "w-full px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-700 focus:ring-2 focus:ring-purple-500/10 focus:border-purple-500 outline-none cursor-pointer"
                }, [..._cache[47] || (_cache[47] = [
                  createStaticVNode('<option value="all" data-v-5e6e0389>All Overstays</option><option value="on_time" data-v-5e6e0389>Checked Out On Time</option><option value="early" data-v-5e6e0389>Early Check-out</option><option value="overstay" data-v-5e6e0389>Overstay (&lt; 1 Hour)</option><option value="serious_overstay" data-v-5e6e0389>Serious Overstay (≥ 1 Hour)</option><option value="cancelled" data-v-5e6e0389>Auto Cancelled</option>', 6)
                ])], 512), [
                  [vModelSelect, filters.overstayStatus]
                ])
              ])
            ])
          ])) : createCommentVNode("", true),
          filters.category === "book_reservations" ? (openBlock(), createElementBlock("div", _hoisted_15, [
            _cache[58] || (_cache[58] = createBaseVNode("span", { class: "text-[10px] font-black text-purple-800 uppercase tracking-widest block" }, "Advanced Book Reservation Filter Parameters", -1)),
            createBaseVNode("div", _hoisted_16, [
              createBaseVNode("div", null, [
                _cache[50] || (_cache[50] = createBaseVNode("label", { class: "text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1.5 block" }, "Student (Name / CRN)", -1)),
                withDirectives(createBaseVNode("input", {
                  "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => filters.studentSearch = $event),
                  type: "text",
                  placeholder: "Search student...",
                  class: "w-full px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs font-semibold text-slate-700 focus:ring-2 focus:ring-purple-500/10 focus:border-purple-500 outline-none"
                }, null, 512), [
                  [vModelText, filters.studentSearch]
                ])
              ]),
              createBaseVNode("div", null, [
                _cache[51] || (_cache[51] = createBaseVNode("label", { class: "text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1.5 block" }, "Book (Title / ISBN)", -1)),
                withDirectives(createBaseVNode("input", {
                  "onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => filters.bookSearch = $event),
                  type: "text",
                  placeholder: "Search title/ISBN...",
                  class: "w-full px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs font-semibold text-slate-700 focus:ring-2 focus:ring-purple-500/10 focus:border-purple-500 outline-none"
                }, null, 512), [
                  [vModelText, filters.bookSearch]
                ])
              ]),
              createBaseVNode("div", null, [
                _cache[53] || (_cache[53] = createBaseVNode("label", { class: "text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1.5 block" }, "Book Category", -1)),
                withDirectives(createBaseVNode("select", {
                  "onUpdate:modelValue": _cache[12] || (_cache[12] = ($event) => filters.bookCategory = $event),
                  class: "w-full px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-700 focus:ring-2 focus:ring-purple-500/10 focus:border-purple-500 outline-none cursor-pointer"
                }, [..._cache[52] || (_cache[52] = [
                  createStaticVNode('<option value="all" data-v-5e6e0389>All Categories</option><option value="Fiction" data-v-5e6e0389>Fiction</option><option value="Science" data-v-5e6e0389>Science</option><option value="Technology" data-v-5e6e0389>Technology</option><option value="Mathematics" data-v-5e6e0389>Mathematics</option><option value="History" data-v-5e6e0389>History</option><option value="Biography" data-v-5e6e0389>Biography</option>', 7)
                ])], 512), [
                  [vModelSelect, filters.bookCategory]
                ])
              ]),
              createBaseVNode("div", null, [
                _cache[55] || (_cache[55] = createBaseVNode("label", { class: "text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1.5 block" }, "Reservation Status", -1)),
                withDirectives(createBaseVNode("select", {
                  "onUpdate:modelValue": _cache[13] || (_cache[13] = ($event) => filters.reservationStatus = $event),
                  class: "w-full px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-700 focus:ring-2 focus:ring-purple-500/10 focus:border-purple-500 outline-none cursor-pointer"
                }, [..._cache[54] || (_cache[54] = [
                  createStaticVNode('<option value="all" data-v-5e6e0389>All Statuses</option><option value="pending" data-v-5e6e0389>Pending Approval</option><option value="approved" data-v-5e6e0389>Approved</option><option value="rejected" data-v-5e6e0389>Rejected</option><option value="collected" data-v-5e6e0389>Collected</option>', 5)
                ])], 512), [
                  [vModelSelect, filters.reservationStatus]
                ])
              ]),
              createBaseVNode("div", null, [
                _cache[57] || (_cache[57] = createBaseVNode("label", { class: "text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1.5 block" }, "Return Status (Time Analysis)", -1)),
                withDirectives(createBaseVNode("select", {
                  "onUpdate:modelValue": _cache[14] || (_cache[14] = ($event) => filters.returnStatus = $event),
                  class: "w-full px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-700 focus:ring-2 focus:ring-purple-500/10 focus:border-purple-500 outline-none cursor-pointer"
                }, [..._cache[56] || (_cache[56] = [
                  createStaticVNode('<option value="all" data-v-5e6e0389>All Returns</option><option value="Returned On Time" data-v-5e6e0389>Returned On Time</option><option value="Returned Early" data-v-5e6e0389>Returned Early</option><option value="Returned Late" data-v-5e6e0389>Returned Late</option><option value="Not Picked Up" data-v-5e6e0389>Not Picked Up</option><option value="Borrowed" data-v-5e6e0389>Borrowed (Active)</option><option value="Overdue" data-v-5e6e0389>Overdue (Active)</option>', 7)
                ])], 512), [
                  [vModelSelect, filters.returnStatus]
                ])
              ])
            ])
          ])) : createCommentVNode("", true),
          filters.category === "complaints" ? (openBlock(), createElementBlock("div", _hoisted_17, [
            _cache[66] || (_cache[66] = createBaseVNode("span", { class: "text-[10px] font-black text-purple-800 uppercase tracking-widest block" }, "Advanced Support Ticket / Complaints Filter Parameters", -1)),
            createBaseVNode("div", _hoisted_18, [
              createBaseVNode("div", null, [
                _cache[59] || (_cache[59] = createBaseVNode("label", { class: "text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1.5 block" }, "Student (Name / CRN)", -1)),
                withDirectives(createBaseVNode("input", {
                  "onUpdate:modelValue": _cache[15] || (_cache[15] = ($event) => filters.studentSearch = $event),
                  type: "text",
                  placeholder: "Search student...",
                  class: "w-full px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs font-semibold text-slate-700 focus:ring-2 focus:ring-purple-500/10 focus:border-purple-500 outline-none"
                }, null, 512), [
                  [vModelText, filters.studentSearch]
                ])
              ]),
              createBaseVNode("div", null, [
                _cache[61] || (_cache[61] = createBaseVNode("label", { class: "text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1.5 block" }, "Complaint Category", -1)),
                withDirectives(createBaseVNode("select", {
                  "onUpdate:modelValue": _cache[16] || (_cache[16] = ($event) => filters.complaintCategory = $event),
                  class: "w-full px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-700 focus:ring-2 focus:ring-purple-500/10 focus:border-purple-500 outline-none cursor-pointer"
                }, [..._cache[60] || (_cache[60] = [
                  createBaseVNode("option", { value: "all" }, "All Categories", -1),
                  createBaseVNode("option", { value: "library" }, "Library Complaint", -1),
                  createBaseVNode("option", { value: "system" }, "System Audit / Admin", -1)
                ])], 512), [
                  [vModelSelect, filters.complaintCategory]
                ])
              ]),
              createBaseVNode("div", null, [
                _cache[63] || (_cache[63] = createBaseVNode("label", { class: "text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1.5 block" }, "Priority", -1)),
                withDirectives(createBaseVNode("select", {
                  "onUpdate:modelValue": _cache[17] || (_cache[17] = ($event) => filters.complaintPriority = $event),
                  class: "w-full px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-700 focus:ring-2 focus:ring-purple-500/10 focus:border-purple-500 outline-none cursor-pointer"
                }, [..._cache[62] || (_cache[62] = [
                  createStaticVNode('<option value="all" data-v-5e6e0389>All Priorities</option><option value="low" data-v-5e6e0389>Low</option><option value="medium" data-v-5e6e0389>Medium</option><option value="high" data-v-5e6e0389>High</option><option value="urgent" data-v-5e6e0389>Urgent</option>', 5)
                ])], 512), [
                  [vModelSelect, filters.complaintPriority]
                ])
              ]),
              createBaseVNode("div", null, [
                _cache[65] || (_cache[65] = createBaseVNode("label", { class: "text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1.5 block" }, "Complaint Status", -1)),
                withDirectives(createBaseVNode("select", {
                  "onUpdate:modelValue": _cache[18] || (_cache[18] = ($event) => filters.complaintStatus = $event),
                  class: "w-full px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-700 focus:ring-2 focus:ring-purple-500/10 focus:border-purple-500 outline-none cursor-pointer"
                }, [..._cache[64] || (_cache[64] = [
                  createStaticVNode('<option value="all" data-v-5e6e0389>All Statuses</option><option value="open" data-v-5e6e0389>Pending</option><option value="in_progress" data-v-5e6e0389>In Progress</option><option value="resolved" data-v-5e6e0389>Resolved</option><option value="closed" data-v-5e6e0389>Closed</option>', 5)
                ])], 512), [
                  [vModelSelect, filters.complaintStatus]
                ])
              ])
            ])
          ])) : createCommentVNode("", true),
          filters.category === "events" ? (openBlock(), createElementBlock("div", _hoisted_19, [
            _cache[76] || (_cache[76] = createBaseVNode("span", { class: "text-[10px] font-black text-purple-800 uppercase tracking-widest block" }, "Advanced Campus Events Filter Parameters", -1)),
            createBaseVNode("div", _hoisted_20, [
              createBaseVNode("div", null, [
                _cache[67] || (_cache[67] = createBaseVNode("label", { class: "text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1.5 block" }, "Search Event (Title/Venue)", -1)),
                withDirectives(createBaseVNode("input", {
                  "onUpdate:modelValue": _cache[19] || (_cache[19] = ($event) => filters.eventSearch = $event),
                  type: "text",
                  placeholder: "Search event...",
                  class: "w-full px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs font-semibold text-slate-700 focus:ring-2 focus:ring-purple-500/10 focus:border-purple-500 outline-none"
                }, null, 512), [
                  [vModelText, filters.eventSearch]
                ])
              ]),
              createBaseVNode("div", null, [
                _cache[69] || (_cache[69] = createBaseVNode("label", { class: "text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1.5 block" }, "Event Type", -1)),
                withDirectives(createBaseVNode("select", {
                  "onUpdate:modelValue": _cache[20] || (_cache[20] = ($event) => filters.eventType = $event),
                  class: "w-full px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-700 focus:ring-2 focus:ring-purple-500/10 focus:border-purple-500 outline-none cursor-pointer"
                }, [..._cache[68] || (_cache[68] = [
                  createStaticVNode('<option value="all" data-v-5e6e0389>All Types</option><option value="seminar" data-v-5e6e0389>Seminar</option><option value="workshop" data-v-5e6e0389>Workshop</option><option value="study_group" data-v-5e6e0389>Study Group</option><option value="exam_prep" data-v-5e6e0389>Exam Prep</option><option value="career_guidance" data-v-5e6e0389>Career Guidance</option><option value="networking" data-v-5e6e0389>Networking</option>', 7)
                ])], 512), [
                  [vModelSelect, filters.eventType]
                ])
              ]),
              createBaseVNode("div", null, [
                _cache[71] || (_cache[71] = createBaseVNode("label", { class: "text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1.5 block" }, "Pricing Type", -1)),
                withDirectives(createBaseVNode("select", {
                  "onUpdate:modelValue": _cache[21] || (_cache[21] = ($event) => filters.eventPricing = $event),
                  class: "w-full px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-700 focus:ring-2 focus:ring-purple-500/10 focus:border-purple-500 outline-none cursor-pointer"
                }, [..._cache[70] || (_cache[70] = [
                  createBaseVNode("option", { value: "all" }, "All Pricing", -1),
                  createBaseVNode("option", { value: "free" }, "Free", -1),
                  createBaseVNode("option", { value: "paid" }, "Paid", -1)
                ])], 512), [
                  [vModelSelect, filters.eventPricing]
                ])
              ]),
              createBaseVNode("div", null, [
                _cache[73] || (_cache[73] = createBaseVNode("label", { class: "text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1.5 block" }, "Capacity Status", -1)),
                withDirectives(createBaseVNode("select", {
                  "onUpdate:modelValue": _cache[22] || (_cache[22] = ($event) => filters.eventCapacityStatus = $event),
                  class: "w-full px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-700 focus:ring-2 focus:ring-purple-500/10 focus:border-purple-500 outline-none cursor-pointer"
                }, [..._cache[72] || (_cache[72] = [
                  createBaseVNode("option", { value: "all" }, "All Capacity Statuses", -1),
                  createBaseVNode("option", { value: "open" }, "Open (Slots Available)", -1),
                  createBaseVNode("option", { value: "full" }, "Full (Sold Out)", -1),
                  createBaseVNode("option", { value: "unlimited" }, "Unlimited Capacity", -1)
                ])], 512), [
                  [vModelSelect, filters.eventCapacityStatus]
                ])
              ]),
              createBaseVNode("div", null, [
                _cache[75] || (_cache[75] = createBaseVNode("label", { class: "text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1.5 block" }, "Event Status", -1)),
                withDirectives(createBaseVNode("select", {
                  "onUpdate:modelValue": _cache[23] || (_cache[23] = ($event) => filters.eventStatus = $event),
                  class: "w-full px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-700 focus:ring-2 focus:ring-purple-500/10 focus:border-purple-500 outline-none cursor-pointer"
                }, [..._cache[74] || (_cache[74] = [
                  createStaticVNode('<option value="all" data-v-5e6e0389>All Statuses</option><option value="upcoming" data-v-5e6e0389>Upcoming</option><option value="ongoing" data-v-5e6e0389>Ongoing</option><option value="completed" data-v-5e6e0389>Completed</option><option value="cancelled" data-v-5e6e0389>Cancelled</option>', 5)
                ])], 512), [
                  [vModelSelect, filters.eventStatus]
                ])
              ])
            ])
          ])) : createCommentVNode("", true),
          filters.category === "attendance" ? (openBlock(), createElementBlock("div", _hoisted_21, [
            _cache[83] || (_cache[83] = createBaseVNode("span", { class: "text-[10px] font-black text-purple-800 uppercase tracking-widest block" }, "Advanced Student Attendance Filter Parameters", -1)),
            createBaseVNode("div", _hoisted_22, [
              createBaseVNode("div", null, [
                _cache[77] || (_cache[77] = createBaseVNode("label", { class: "text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1.5 block" }, "Search Student (Name / CRN)", -1)),
                withDirectives(createBaseVNode("input", {
                  "onUpdate:modelValue": _cache[24] || (_cache[24] = ($event) => filters.attendanceSearch = $event),
                  type: "text",
                  placeholder: "Search student...",
                  class: "w-full px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs font-semibold text-slate-700 focus:ring-2 focus:ring-purple-500/10 focus:border-purple-500 outline-none"
                }, null, 512), [
                  [vModelText, filters.attendanceSearch]
                ])
              ]),
              createBaseVNode("div", null, [
                _cache[79] || (_cache[79] = createBaseVNode("label", { class: "text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1.5 block" }, "Attendance Status", -1)),
                withDirectives(createBaseVNode("select", {
                  "onUpdate:modelValue": _cache[25] || (_cache[25] = ($event) => filters.attendanceStatus = $event),
                  class: "w-full px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-700 focus:ring-2 focus:ring-purple-500/10 focus:border-purple-500 outline-none cursor-pointer"
                }, [..._cache[78] || (_cache[78] = [
                  createBaseVNode("option", { value: "all" }, "All Statuses", -1),
                  createBaseVNode("option", { value: "present" }, "Currently Present", -1),
                  createBaseVNode("option", { value: "left" }, "Checked Out / Left", -1)
                ])], 512), [
                  [vModelSelect, filters.attendanceStatus]
                ])
              ]),
              createBaseVNode("div", null, [
                _cache[81] || (_cache[81] = createBaseVNode("label", { class: "text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1.5 block" }, "Check-in Method", -1)),
                withDirectives(createBaseVNode("select", {
                  "onUpdate:modelValue": _cache[26] || (_cache[26] = ($event) => filters.attendanceMethod = $event),
                  class: "w-full px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-700 focus:ring-2 focus:ring-purple-500/10 focus:border-purple-500 outline-none cursor-pointer"
                }, [..._cache[80] || (_cache[80] = [
                  createBaseVNode("option", { value: "all" }, "All Methods", -1),
                  createBaseVNode("option", { value: "manual" }, "Manual Check-in", -1),
                  createBaseVNode("option", { value: "booking" }, "Seat Booking", -1),
                  createBaseVNode("option", { value: "auto" }, "QR Scan / Auto", -1)
                ])], 512), [
                  [vModelSelect, filters.attendanceMethod]
                ])
              ]),
              createBaseVNode("div", null, [
                _cache[82] || (_cache[82] = createBaseVNode("label", { class: "text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1.5 block" }, "Seat Designation", -1)),
                withDirectives(createBaseVNode("input", {
                  "onUpdate:modelValue": _cache[27] || (_cache[27] = ($event) => filters.attendanceSeat = $event),
                  type: "text",
                  placeholder: "e.g. S-101",
                  class: "w-full px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs font-semibold text-slate-700 focus:ring-2 focus:ring-purple-500/10 focus:border-purple-500 outline-none"
                }, null, 512), [
                  [vModelText, filters.attendanceSeat]
                ])
              ])
            ])
          ])) : createCommentVNode("", true),
          createBaseVNode("div", _hoisted_23, [
            createBaseVNode("button", {
              onClick: generateOnScreenReport,
              disabled: generating.value,
              class: "px-6 py-2.5 bg-purple-600 hover:bg-purple-750 text-white text-xs font-bold rounded-xl transition-all disabled:opacity-50 cursor-pointer shadow-sm flex items-center gap-2"
            }, [
              createVNode(unref(RefreshCw), {
                class: normalizeClass(["w-4 h-4", generating.value ? "animate-spin" : ""])
              }, null, 8, ["class"]),
              createBaseVNode("span", null, toDisplayString(generating.value ? "Analyzing System Logs..." : "Generate Report"), 1)
            ], 8, _hoisted_24)
          ])
        ]),
        generatedReport.value ? (openBlock(), createElementBlock("div", _hoisted_25, [
          createBaseVNode("div", _hoisted_26, [
            createBaseVNode("div", _hoisted_27, [
              _cache[84] || (_cache[84] = createBaseVNode("span", { class: "w-2.5 h-2.5 rounded-full bg-purple-500 animate-ping" }, null, -1)),
              createBaseVNode("span", _hoisted_28, "Consolidated Report Compiled (" + toDisplayString(processedItems.value.length) + " Records)", 1)
            ]),
            createBaseVNode("div", _hoisted_29, [
              createBaseVNode("button", {
                onClick: _cache[28] || (_cache[28] = ($event) => exportReport("excel")),
                class: "px-4 py-2 rounded-xl text-xs font-bold text-green-700 bg-green-50 hover:bg-green-100 border border-green-100 transition-all cursor-pointer flex items-center gap-1.5"
              }, [
                createVNode(unref(Sheet), { class: "w-4 h-4 text-green-600" }),
                _cache[85] || (_cache[85] = createBaseVNode("span", null, "Export CSV", -1))
              ]),
              createBaseVNode("button", {
                onClick: _cache[29] || (_cache[29] = ($event) => exportReport("pdf")),
                class: "px-4 py-2 rounded-xl text-xs font-bold text-red-700 bg-red-50 hover:bg-red-100 border border-red-100 transition-all cursor-pointer flex items-center gap-1.5"
              }, [
                createVNode(unref(FileText), { class: "w-4 h-4 text-red-500" }),
                _cache[86] || (_cache[86] = createBaseVNode("span", null, "Download PDF", -1))
              ]),
              createBaseVNode("button", {
                onClick: _cache[30] || (_cache[30] = ($event) => exportReport("pdf")),
                class: "px-4 py-2 rounded-xl text-xs font-bold text-slate-700 bg-slate-50 hover:bg-slate-100 border border-slate-200 transition-all cursor-pointer flex items-center gap-1.5"
              }, [
                createVNode(unref(Printer), { class: "w-4 h-4 text-slate-500" }),
                _cache[87] || (_cache[87] = createBaseVNode("span", null, "Print Report", -1))
              ])
            ])
          ]),
          createBaseVNode("div", _hoisted_30, [
            createBaseVNode("div", _hoisted_31, [
              createBaseVNode("div", _hoisted_32, [
                createBaseVNode("div", _hoisted_33, [
                  createBaseVNode("div", _hoisted_34, [
                    createVNode(unref(BookMarked), { class: "w-8 h-8" })
                  ]),
                  createBaseVNode("div", null, [
                    createBaseVNode("h3", _hoisted_35, toDisplayString(generatedReport.value.libraryInfo?.name), 1),
                    createBaseVNode("p", _hoisted_36, toDisplayString(generatedReport.value.libraryInfo?.address), 1),
                    createBaseVNode("div", _hoisted_37, [
                      createBaseVNode("span", _hoisted_38, "📞 " + toDisplayString(generatedReport.value.libraryInfo?.contact_info?.phone || "N/A"), 1),
                      createBaseVNode("span", _hoisted_39, "✉️ " + toDisplayString(generatedReport.value.libraryInfo?.contact_info?.email || "N/A"), 1)
                    ])
                  ])
                ]),
                createBaseVNode("div", _hoisted_40, [
                  createBaseVNode("h4", _hoisted_41, toDisplayString(generatedReport.value.label) + " Report", 1),
                  createBaseVNode("p", _hoisted_42, [
                    _cache[88] || (_cache[88] = createTextVNode(" Period: ", -1)),
                    generatedReport.value.timeRange === "custom" ? (openBlock(), createElementBlock("span", _hoisted_43, " From " + toDisplayString(fmtDate(generatedReport.value.fromDate)) + " To " + toDisplayString(fmtDate(generatedReport.value.toDate)), 1)) : (openBlock(), createElementBlock("span", _hoisted_44, toDisplayString(fmtDate(generatedReport.value.fromDate)) + " — " + toDisplayString(fmtDate(generatedReport.value.toDate)), 1))
                  ]),
                  createBaseVNode("div", _hoisted_45, [
                    createBaseVNode("p", null, "Run Time: " + toDisplayString(generatedReport.value.generationTime), 1),
                    createBaseVNode("p", null, "Run Date: " + toDisplayString(generatedReport.value.generationDate), 1)
                  ])
                ])
              ]),
              createBaseVNode("div", _hoisted_46, [
                createBaseVNode("div", null, [
                  _cache[89] || (_cache[89] = createTextVNode("Generated By: ", -1)),
                  createBaseVNode("span", _hoisted_47, toDisplayString(generatedReport.value.generatedBy.name), 1)
                ]),
                createBaseVNode("div", null, [
                  _cache[90] || (_cache[90] = createTextVNode("Role: ", -1)),
                  createBaseVNode("span", _hoisted_48, toDisplayString(generatedReport.value.generatedBy.role), 1)
                ]),
                createBaseVNode("div", null, [
                  _cache[91] || (_cache[91] = createTextVNode("Staff ID: ", -1)),
                  createBaseVNode("span", _hoisted_49, toDisplayString(generatedReport.value.generatedBy.staffId), 1)
                ])
              ]),
              createBaseVNode("div", _hoisted_50, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(summaryStats.value, (stat) => {
                  return openBlock(), createElementBlock("div", {
                    key: stat.label,
                    class: "p-3 bg-slate-50/50 border border-slate-100 rounded-xl shadow-sm"
                  }, [
                    createBaseVNode("span", _hoisted_51, toDisplayString(stat.label), 1),
                    createBaseVNode("span", _hoisted_52, toDisplayString(stat.value), 1)
                  ]);
                }), 128))
              ]),
              createBaseVNode("div", _hoisted_53, [
                createBaseVNode("table", _hoisted_54, [
                  createBaseVNode("thead", null, [
                    createBaseVNode("tr", _hoisted_55, [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(tableHeaders.value, (header) => {
                        return openBlock(), createElementBlock("th", {
                          key: header,
                          class: "py-3 px-4 font-bold text-[9px] tracking-widest whitespace-nowrap"
                        }, toDisplayString(header), 1);
                      }), 128))
                    ])
                  ]),
                  createBaseVNode("tbody", _hoisted_56, [
                    filters.category === "bookings" ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(paginatedItems.value, (row, idx) => {
                      return openBlock(), createElementBlock("tr", {
                        key: idx,
                        class: "hover:bg-slate-50/60 transition-colors"
                      }, [
                        createBaseVNode("td", _hoisted_57, [
                          createBaseVNode("div", null, toDisplayString(row.studentName), 1),
                          createBaseVNode("div", _hoisted_58, "CRN: " + toDisplayString(row.crn), 1)
                        ]),
                        createBaseVNode("td", _hoisted_59, toDisplayString(row.bookingDate), 1),
                        createBaseVNode("td", _hoisted_60, [
                          createBaseVNode("div", null, "Seat " + toDisplayString(row.seatNumber), 1),
                          createBaseVNode("div", _hoisted_61, toDisplayString(row.libraryName), 1)
                        ]),
                        createBaseVNode("td", _hoisted_62, [
                          createBaseVNode("div", null, toDisplayString(row.startTime) + " - " + toDisplayString(row.endTime), 1)
                        ]),
                        createBaseVNode("td", _hoisted_63, [
                          createBaseVNode("div", null, toDisplayString(row.actualCheckIn) + " - " + toDisplayString(row.actualCheckOut), 1)
                        ]),
                        createBaseVNode("td", _hoisted_64, [
                          createBaseVNode("div", _hoisted_65, [
                            createBaseVNode("div", null, "Booked: " + toDisplayString(row.bookedDuration), 1),
                            row.extendedTime !== "0m" ? (openBlock(), createElementBlock("div", _hoisted_66, "Extended: " + toDisplayString(row.extendedTime), 1)) : createCommentVNode("", true),
                            createBaseVNode("div", null, "Total Reserved: " + toDisplayString(row.reservedDuration), 1),
                            createBaseVNode("div", _hoisted_67, "Used: " + toDisplayString(row.usedDuration), 1)
                          ])
                        ]),
                        createBaseVNode("td", _hoisted_68, [
                          createBaseVNode("span", {
                            innerHTML: statusBadgeHtml(row.calculatedStatus)
                          }, null, 8, _hoisted_69)
                        ])
                      ]);
                    }), 128)) : filters.category === "book_reservations" ? (openBlock(true), createElementBlock(Fragment, { key: 1 }, renderList(paginatedItems.value, (row, idx) => {
                      return openBlock(), createElementBlock("tr", {
                        key: idx,
                        class: "hover:bg-slate-50/60 transition-colors"
                      }, [
                        createBaseVNode("td", _hoisted_70, [
                          createBaseVNode("div", null, toDisplayString(row.studentName), 1),
                          createBaseVNode("div", _hoisted_71, "CRN: " + toDisplayString(row.crn), 1)
                        ]),
                        createBaseVNode("td", _hoisted_72, [
                          createBaseVNode("div", {
                            class: "max-w-[200px] truncate",
                            title: row.bookTitle
                          }, toDisplayString(row.bookTitle), 9, _hoisted_73),
                          createBaseVNode("div", _hoisted_74, "ISBN: " + toDisplayString(row.isbn), 1),
                          createBaseVNode("div", _hoisted_75, toDisplayString(row.libraryName), 1)
                        ]),
                        createBaseVNode("td", _hoisted_76, [
                          createBaseVNode("div", _hoisted_77, [
                            createBaseVNode("div", null, "Res: " + toDisplayString(row.reservationDate), 1),
                            createBaseVNode("div", null, "Appr: " + toDisplayString(row.approvalDate), 1),
                            createBaseVNode("div", null, "Pickup: " + toDisplayString(row.pickupDate), 1),
                            createBaseVNode("div", null, "Return: " + toDisplayString(row.returnDate), 1)
                          ])
                        ]),
                        createBaseVNode("td", _hoisted_78, [
                          createBaseVNode("div", _hoisted_79, [
                            createBaseVNode("div", null, "Req: " + toDisplayString(row.requestedDays) + " days", 1),
                            createBaseVNode("div", null, "Act: " + toDisplayString(row.actualBorrowedDays) + " days", 1),
                            row.daysEarlyLate > 0 ? (openBlock(), createElementBlock("div", {
                              key: 0,
                              class: normalizeClass(row.timeAnalysisStatus.toLowerCase().includes("late") || row.timeAnalysisStatus.toLowerCase().includes("overdue") ? "text-red-600 font-bold" : "text-emerald-600 font-bold")
                            }, toDisplayString(row.timeAnalysisStatus.toLowerCase().includes("late") || row.timeAnalysisStatus.toLowerCase().includes("overdue") ? "Late" : "Early") + ": " + toDisplayString(row.daysEarlyLate) + " days ", 3)) : createCommentVNode("", true)
                          ])
                        ]),
                        createBaseVNode("td", _hoisted_80, toDisplayString(row.approvedBy), 1),
                        createBaseVNode("td", _hoisted_81, [
                          createBaseVNode("span", {
                            innerHTML: statusBadgeHtml(row.reservationStatus)
                          }, null, 8, _hoisted_82),
                          row.returnStatusToShow ? (openBlock(), createElementBlock("span", {
                            key: 0,
                            class: "mt-1 block",
                            innerHTML: statusBadgeHtml(row.returnStatusToShow)
                          }, null, 8, _hoisted_83)) : createCommentVNode("", true)
                        ])
                      ]);
                    }), 128)) : filters.category === "complaints" ? (openBlock(true), createElementBlock(Fragment, { key: 2 }, renderList(paginatedItems.value, (row, idx) => {
                      return openBlock(), createElementBlock("tr", {
                        key: idx,
                        class: "hover:bg-slate-50/60 transition-colors"
                      }, [
                        createBaseVNode("td", _hoisted_84, [
                          createBaseVNode("div", null, toDisplayString(row.studentName), 1),
                          createBaseVNode("div", _hoisted_85, "CRN: " + toDisplayString(row.crn), 1)
                        ]),
                        createBaseVNode("td", _hoisted_86, [
                          createBaseVNode("div", _hoisted_87, "#" + toDisplayString(row.complaintId), 1),
                          createBaseVNode("div", {
                            class: "text-[10px] text-slate-550 font-bold mt-0.5 truncate max-w-[220px]",
                            title: row.subject
                          }, toDisplayString(row.subject), 9, _hoisted_88),
                          createBaseVNode("div", _hoisted_89, "Filed: " + toDisplayString(row.submittedDate), 1),
                          createBaseVNode("div", _hoisted_90, toDisplayString(row.libraryName), 1),
                          createBaseVNode("div", {
                            class: normalizeClass(["text-[9px] font-black uppercase tracking-wider mt-1", row.priority.toLowerCase() === "urgent" || row.priority.toLowerCase() === "high" ? "text-red-600" : "text-slate-500"])
                          }, "Priority: " + toDisplayString(row.priority), 3)
                        ]),
                        createBaseVNode("td", _hoisted_91, [
                          createBaseVNode("div", _hoisted_92, [
                            createBaseVNode("div", null, "First Response: " + toDisplayString(row.responseDate), 1),
                            createBaseVNode("div", null, "Resolved: " + toDisplayString(row.resolutionDate), 1),
                            row.resolutionTime !== "—" ? (openBlock(), createElementBlock("div", _hoisted_93, "Time taken: " + toDisplayString(row.resolutionTime), 1)) : createCommentVNode("", true)
                          ])
                        ]),
                        createBaseVNode("td", _hoisted_94, [
                          createBaseVNode("span", {
                            innerHTML: statusBadgeHtml(row.status)
                          }, null, 8, _hoisted_95)
                        ])
                      ]);
                    }), 128)) : filters.category === "events" ? (openBlock(true), createElementBlock(Fragment, { key: 3 }, renderList(paginatedItems.value, (row, idx) => {
                      return openBlock(), createElementBlock("tr", {
                        key: idx,
                        class: "hover:bg-slate-50/60 transition-colors"
                      }, [
                        createBaseVNode("td", _hoisted_96, [
                          createBaseVNode("div", null, toDisplayString(row.title), 1),
                          createBaseVNode("div", _hoisted_97, toDisplayString(row.eventId), 1)
                        ]),
                        createBaseVNode("td", _hoisted_98, [
                          createBaseVNode("div", null, toDisplayString(row.type), 1)
                        ]),
                        createBaseVNode("td", _hoisted_99, [
                          createBaseVNode("div", null, toDisplayString(row.libraryName), 1)
                        ]),
                        createBaseVNode("td", _hoisted_100, [
                          createBaseVNode("div", _hoisted_101, [
                            createBaseVNode("div", null, "Date: " + toDisplayString(row.date), 1),
                            createBaseVNode("div", null, "Time: " + toDisplayString(row.time), 1)
                          ])
                        ]),
                        createBaseVNode("td", _hoisted_102, [
                          createBaseVNode("div", null, toDisplayString(row.venue), 1)
                        ]),
                        createBaseVNode("td", _hoisted_103, [
                          createBaseVNode("div", _hoisted_104, [
                            createBaseVNode("div", null, "Reg: " + toDisplayString(row.registered) + " students", 1),
                            createBaseVNode("div", null, "Attended: " + toDisplayString(row.attended) + " students", 1),
                            row.registered > 0 ? (openBlock(), createElementBlock("div", _hoisted_105, "Attended Rate: " + toDisplayString(row.attendanceRate) + "%", 1)) : createCommentVNode("", true)
                          ])
                        ]),
                        createBaseVNode("td", _hoisted_106, [
                          createBaseVNode("div", _hoisted_107, [
                            createBaseVNode("div", null, [
                              _cache[92] || (_cache[92] = createTextVNode("Price: ", -1)),
                              createBaseVNode("span", _hoisted_108, toDisplayString(row.priceStr), 1)
                            ]),
                            row.isPaid ? (openBlock(), createElementBlock("div", _hoisted_109, "Rev: PKR " + toDisplayString(row.revenue.toFixed(2)), 1)) : createCommentVNode("", true),
                            createBaseVNode("div", null, [
                              createTextVNode("Cap: " + toDisplayString(row.capacityStr) + " ", 1),
                              row.capacity ? (openBlock(), createElementBlock("span", _hoisted_110, "(" + toDisplayString(row.fillRate) + "% filled)", 1)) : createCommentVNode("", true)
                            ])
                          ])
                        ]),
                        createBaseVNode("td", _hoisted_111, [
                          createBaseVNode("span", {
                            innerHTML: statusBadgeHtml(row.calculatedStatus)
                          }, null, 8, _hoisted_112),
                          row.capacityStatus === "Full" ? (openBlock(), createElementBlock("span", {
                            key: 0,
                            class: "mt-1 block",
                            innerHTML: statusBadgeHtml("full")
                          }, null, 8, _hoisted_113)) : createCommentVNode("", true)
                        ])
                      ]);
                    }), 128)) : filters.category === "attendance" ? (openBlock(true), createElementBlock(Fragment, { key: 4 }, renderList(paginatedItems.value, (row, idx) => {
                      return openBlock(), createElementBlock("tr", {
                        key: idx,
                        class: "hover:bg-slate-50/60 transition-colors"
                      }, [
                        createBaseVNode("td", _hoisted_114, [
                          createBaseVNode("div", null, toDisplayString(row.studentName), 1),
                          createBaseVNode("div", _hoisted_115, "CRN: " + toDisplayString(row.crn), 1)
                        ]),
                        createBaseVNode("td", _hoisted_116, [
                          createBaseVNode("div", null, toDisplayString(row.libraryName), 1)
                        ]),
                        createBaseVNode("td", _hoisted_117, [
                          createBaseVNode("div", null, toDisplayString(row.date), 1),
                          createBaseVNode("div", _hoisted_118, toDisplayString(row.id), 1)
                        ]),
                        createBaseVNode("td", _hoisted_119, [
                          createBaseVNode("div", null, "Seat " + toDisplayString(row.seatNumber), 1)
                        ]),
                        createBaseVNode("td", _hoisted_120, [
                          createBaseVNode("div", _hoisted_121, [
                            createBaseVNode("div", null, [
                              _cache[93] || (_cache[93] = createTextVNode("In: ", -1)),
                              createBaseVNode("span", _hoisted_122, toDisplayString(row.checkInTime), 1)
                            ]),
                            createBaseVNode("div", null, [
                              _cache[94] || (_cache[94] = createTextVNode("Out: ", -1)),
                              createBaseVNode("span", _hoisted_123, toDisplayString(row.checkOutTime), 1)
                            ])
                          ])
                        ]),
                        createBaseVNode("td", _hoisted_124, [
                          createBaseVNode("div", {
                            class: normalizeClass(row.rawStatus === "present" ? "text-purple-700 font-extrabold animate-pulse" : "text-slate-800 font-bold")
                          }, toDisplayString(row.durationStr), 3)
                        ]),
                        createBaseVNode("td", _hoisted_125, [
                          createBaseVNode("div", null, toDisplayString(row.method), 1)
                        ]),
                        createBaseVNode("td", _hoisted_126, [
                          createBaseVNode("span", {
                            innerHTML: statusBadgeHtml(row.calculatedStatus)
                          }, null, 8, _hoisted_127)
                        ])
                      ]);
                    }), 128)) : (openBlock(true), createElementBlock(Fragment, { key: 5 }, renderList(paginatedItems.value, (row, idx) => {
                      return openBlock(), createElementBlock("tr", {
                        key: idx,
                        class: "hover:bg-slate-50/60 transition-colors"
                      }, [
                        (openBlock(true), createElementBlock(Fragment, null, renderList(Object.values(row).slice(1), (val, colIdx) => {
                          return openBlock(), createElementBlock("td", {
                            key: colIdx,
                            class: "py-3 px-4 font-semibold text-slate-655 whitespace-nowrap"
                          }, [
                            colIdx === Object.keys(row).length - 2 && isStatusField(val) ? (openBlock(), createElementBlock("span", {
                              key: 0,
                              innerHTML: statusBadgeHtml(val)
                            }, null, 8, _hoisted_128)) : (openBlock(), createElementBlock("span", _hoisted_129, toDisplayString(val), 1))
                          ]);
                        }), 128))
                      ]);
                    }), 128)),
                    processedItems.value.length === 0 ? (openBlock(), createElementBlock("tr", _hoisted_130, [
                      createBaseVNode("td", {
                        colspan: tableHeaders.value.length,
                        class: "text-center py-10 font-bold text-slate-400"
                      }, " No bookings match the selected filters. ", 8, _hoisted_131)
                    ])) : createCommentVNode("", true)
                  ])
                ])
              ]),
              createBaseVNode("div", _hoisted_132, [
                createBaseVNode("div", _hoisted_133, [
                  createBaseVNode("div", null, [
                    _cache[95] || (_cache[95] = createTextVNode("Total Records: ", -1)),
                    createBaseVNode("span", _hoisted_134, toDisplayString(processedItems.value.length), 1)
                  ]),
                  filters.category === "bookings" ? (openBlock(), createElementBlock("div", _hoisted_135, [
                    _cache[96] || (_cache[96] = createTextVNode("Total Hours Used: ", -1)),
                    createBaseVNode("span", _hoisted_136, toDisplayString(totalHoursUsed.value) + " Hours", 1)
                  ])) : createCommentVNode("", true)
                ]),
                totalPages.value > 1 ? (openBlock(), createElementBlock("div", _hoisted_137, [
                  createBaseVNode("button", {
                    onClick: _cache[31] || (_cache[31] = ($event) => currentPage.value = Math.max(1, currentPage.value - 1)),
                    disabled: currentPage.value === 1,
                    class: "px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg hover:bg-slate-100 disabled:opacity-50 transition-all cursor-pointer"
                  }, " Previous ", 8, _hoisted_138),
                  createBaseVNode("span", _hoisted_139, "Page " + toDisplayString(currentPage.value) + " of " + toDisplayString(totalPages.value), 1),
                  createBaseVNode("button", {
                    onClick: _cache[32] || (_cache[32] = ($event) => currentPage.value = Math.min(totalPages.value, currentPage.value + 1)),
                    disabled: currentPage.value === totalPages.value,
                    class: "px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg hover:bg-slate-100 disabled:opacity-50 transition-all cursor-pointer"
                  }, " Next ", 8, _hoisted_140)
                ])) : createCommentVNode("", true)
              ])
            ]),
            createBaseVNode("div", _hoisted_141, [
              _cache[97] || (_cache[97] = createBaseVNode("div", null, "SmartLib Consolidated Audit Log", -1)),
              _cache[98] || (_cache[98] = createBaseVNode("div", { class: "text-center italic" }, "This report was generated automatically by SmartLib.", -1)),
              createBaseVNode("div", null, "Page " + toDisplayString(currentPage.value) + " of " + toDisplayString(totalPages.value), 1)
            ])
          ])
        ])) : (openBlock(), createElementBlock("div", _hoisted_142, [
          createBaseVNode("div", _hoisted_143, [
            createVNode(unref(FileText), { class: "w-7 h-7" })
          ]),
          _cache[99] || (_cache[99] = createBaseVNode("h3", { class: "text-base font-bold text-slate-850" }, "No Consolidations Running", -1)),
          _cache[100] || (_cache[100] = createBaseVNode("p", { class: "text-slate-455 text-xs mt-1.5 max-w-sm mx-auto font-medium leading-relaxed" }, " Select target library, category, configure parameters and click **Generate Report** to view console logs. ", -1))
        ])),
        createBaseVNode("div", _hoisted_144, [
          createBaseVNode("div", _hoisted_145, [
            createBaseVNode("h3", _hoisted_146, [
              createVNode(unref(History), { class: "w-4 h-4 mr-2 text-slate-400" }),
              _cache[101] || (_cache[101] = createTextVNode(" Report History Logs ", -1))
            ])
          ]),
          createBaseVNode("div", _hoisted_147, [
            libraryReportHistory.value.length === 0 ? (openBlock(), createElementBlock("div", _hoisted_148, [
              createVNode(unref(History), { class: "w-10 h-10 text-slate-200 mx-auto mb-3" }),
              _cache[102] || (_cache[102] = createBaseVNode("p", { class: "text-slate-400 text-xs font-bold uppercase tracking-wider" }, "No history logged for this library configuration", -1))
            ])) : (openBlock(), createElementBlock("div", _hoisted_149, [
              createBaseVNode("table", _hoisted_150, [
                _cache[104] || (_cache[104] = createBaseVNode("thead", null, [
                  createBaseVNode("tr", { class: "bg-slate-50 text-slate-400 font-bold uppercase tracking-wider border-b border-slate-100" }, [
                    createBaseVNode("th", { class: "py-3 px-4 font-bold text-left" }, "Report Title"),
                    createBaseVNode("th", { class: "py-3 px-4 font-bold text-left" }, "Format"),
                    createBaseVNode("th", { class: "py-3 px-4 font-bold text-left" }, "Generated On"),
                    createBaseVNode("th", { class: "py-3 px-4 font-bold text-right" }, "Action")
                  ])
                ], -1)),
                createBaseVNode("tbody", _hoisted_151, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(libraryReportHistory.value, (h, idx) => {
                    return openBlock(), createElementBlock("tr", {
                      key: idx,
                      class: "hover:bg-slate-50/40 font-semibold text-slate-655"
                    }, [
                      createBaseVNode("td", _hoisted_152, toDisplayString(h.name), 1),
                      createBaseVNode("td", _hoisted_153, [
                        createBaseVNode("span", {
                          class: normalizeClass(["px-2 py-0.5 rounded text-[9px] font-bold border uppercase", h.format === "pdf" ? "bg-red-50 border-red-100 text-red-655" : "bg-green-50 border-green-100 text-green-700"])
                        }, toDisplayString(h.format), 3)
                      ]),
                      createBaseVNode("td", _hoisted_154, toDisplayString(h.generatedAt), 1),
                      createBaseVNode("td", _hoisted_155, [
                        createBaseVNode("button", {
                          onClick: ($event) => downloadReport(h),
                          class: "px-3 py-1.5 bg-white border border-slate-200 hover:bg-slate-50 rounded-lg text-purple-700 hover:text-purple-800 transition-all cursor-pointer font-bold inline-flex items-center gap-1.5 shadow-sm"
                        }, [
                          createVNode(unref(Download), { class: "w-3.5 h-3.5" }),
                          _cache[103] || (_cache[103] = createBaseVNode("span", null, "Download", -1))
                        ], 8, _hoisted_156)
                      ])
                    ]);
                  }), 128))
                ])
              ])
            ]))
          ])
        ])
      ]);
    };
  }
});
const ReportsPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-5e6e0389"]]);
export {
  ReportsPage as default
};
