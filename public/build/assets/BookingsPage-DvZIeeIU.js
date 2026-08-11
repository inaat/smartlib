import { d as defineComponent, r as ref, a as computed, I as watch, o as onMounted, J as useRoute, b as createElementBlock, e as createBaseVNode, p as createCommentVNode, n as normalizeClass, g as createVNode, u as unref, i as createBlock, s as withDirectives, v as vModelText, R as RefreshCw, H as vModelSelect, t as toDisplayString, F as Fragment, k as renderList, j as createTextVNode, W as librarianAPI, M as LogOut, m as openBlock, _ as _export_sfc } from "./main-BeUqjoax.js";
import { _ as _sfc_main$1 } from "./TimeFrameSelector.vue_vue_type_script_setup_true_lang-CX4H30D4.js";
import { u as useSwal } from "./useSwal-pQW_XkRe.js";
import { A as Armchair } from "./armchair-Ci3hmWMF.js";
import { S as ShieldAlert } from "./shield-alert-DqG2Fymx.js";
import { S as Search } from "./search-CAjRd0eY.js";
import { C as Calendar } from "./calendar-C4MEAYqh.js";
import { X } from "./x-Dj9LNodU.js";
import { M as MapPin } from "./map-pin-hjTU3OTG.js";
import { U as UserCheck } from "./user-check-gjs1HmON.js";
import { E as Eye } from "./eye-DWPQPwXh.js";
import { C as CircleX } from "./circle-x-OW-_BhWX.js";
import { f as format } from "./format-DBvmWExF.js";
/* empty css               */
import "./chevron-down-DgPiBWjn.js";
import "./check-CZ9YO2_d.js";
import "./en-US-Cfx__x1z.js";
import "./normalizeDates-KHLYxtAK.js";
const _hoisted_1 = { class: "p-6 space-y-6 font-outfit" };
const _hoisted_2 = { class: "flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4" };
const _hoisted_3 = { class: "flex items-center space-x-1.5 bg-slate-100 rounded-xl p-1 w-fit" };
const _hoisted_4 = { class: "flex items-center gap-2" };
const _hoisted_5 = {
  key: 2,
  class: "flex items-center gap-1.5"
};
const _hoisted_6 = {
  key: 3,
  class: "flex items-center gap-1.5"
};
const _hoisted_7 = {
  key: 0,
  class: "space-y-6"
};
const _hoisted_8 = { class: "bg-white rounded-2xl shadow-sm border border-slate-100 p-4" };
const _hoisted_9 = { class: "flex flex-col sm:flex-row items-center gap-3" };
const _hoisted_10 = { class: "relative flex-1 w-full text-left" };
const _hoisted_11 = { value: "all" };
const _hoisted_12 = { value: "active" };
const _hoisted_13 = { value: "pending" };
const _hoisted_14 = { value: "completed" };
const _hoisted_15 = { value: "cancelled" };
const _hoisted_16 = { class: "bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden" };
const _hoisted_17 = {
  key: 0,
  class: "p-16 flex flex-col items-center justify-center"
};
const _hoisted_18 = {
  key: 1,
  class: "p-16 text-center text-slate-400"
};
const _hoisted_19 = {
  key: 2,
  class: "overflow-x-auto"
};
const _hoisted_20 = { class: "w-full divide-y divide-gray-100" };
const _hoisted_21 = { class: "divide-y divide-gray-100 bg-white" };
const _hoisted_22 = { class: "px-6 py-4 whitespace-nowrap" };
const _hoisted_23 = { class: "flex items-center space-x-3.5" };
const _hoisted_24 = { class: "w-10 h-10 rounded-lg overflow-hidden flex-shrink-0 flex items-center justify-center shadow-sm" };
const _hoisted_25 = ["src"];
const _hoisted_26 = {
  key: 1,
  class: "w-full h-full flex items-center justify-center bg-emerald-50 border border-emerald-600 rounded-lg text-emerald-600 font-bold text-sm"
};
const _hoisted_27 = { class: "text-left" };
const _hoisted_28 = { class: "text-sm font-medium text-slate-700" };
const _hoisted_29 = { class: "text-[10px] text-slate-400 font-semibold tracking-wide mt-0.5 uppercase" };
const _hoisted_30 = { class: "px-6 py-4 whitespace-nowrap text-left" };
const _hoisted_31 = { class: "flex items-center space-x-2 text-xs font-semibold text-slate-600" };
const _hoisted_32 = { class: "font-semibold text-slate-800" };
const _hoisted_33 = { class: "text-[10px] text-slate-400 font-semibold bg-slate-50 px-2 py-0.5 border border-gray-200 rounded-md" };
const _hoisted_34 = { class: "px-6 py-4 whitespace-nowrap text-left" };
const _hoisted_35 = { class: "text-xs font-semibold text-slate-800" };
const _hoisted_36 = { class: "text-[10px] text-slate-400 font-semibold mt-1 uppercase tracking-wider" };
const _hoisted_37 = { class: "px-6 py-4 whitespace-nowrap text-left" };
const _hoisted_38 = { class: "px-6 py-4 whitespace-nowrap text-left" };
const _hoisted_39 = {
  key: 0,
  class: "text-xs font-bold text-slate-700 flex items-center space-x-1"
};
const _hoisted_40 = {
  key: 1,
  class: "text-xs font-bold text-slate-700 flex items-center space-x-1"
};
const _hoisted_41 = {
  key: 2,
  class: "text-xs font-bold text-slate-500 flex items-center space-x-1"
};
const _hoisted_42 = {
  key: 3,
  class: "text-xs font-semibold text-slate-400"
};
const _hoisted_43 = { class: "px-6 py-4 whitespace-nowrap text-right text-xs font-medium" };
const _hoisted_44 = { class: "flex items-center justify-end space-x-2.5" };
const _hoisted_45 = ["onClick"];
const _hoisted_46 = ["onClick"];
const _hoisted_47 = ["onClick"];
const _hoisted_48 = ["onClick"];
const _hoisted_49 = {
  key: 3,
  class: "px-6 py-4 bg-gray-50/50 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 font-outfit text-xs font-semibold text-slate-500"
};
const _hoisted_50 = { class: "flex items-center space-x-3" };
const _hoisted_51 = { class: "relative flex items-center space-x-1.5 border-l border-slate-200 pl-3" };
const _hoisted_52 = { class: "flex items-center space-x-2" };
const _hoisted_53 = ["disabled"];
const _hoisted_54 = { class: "flex items-center space-x-1" };
const _hoisted_55 = ["onClick", "disabled"];
const _hoisted_56 = ["disabled"];
const _hoisted_57 = {
  key: 1,
  class: "space-y-6 animate-fade-in"
};
const _hoisted_58 = { class: "bg-white rounded-2xl shadow-sm border border-slate-100 p-4" };
const _hoisted_59 = { class: "flex flex-col sm:flex-row items-center gap-3" };
const _hoisted_60 = { class: "relative flex-1 w-full text-left" };
const _hoisted_61 = { class: "bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden text-left" };
const _hoisted_62 = {
  key: 0,
  class: "p-16 flex flex-col items-center justify-center"
};
const _hoisted_63 = {
  key: 1,
  class: "p-16 text-center text-slate-400"
};
const _hoisted_64 = {
  key: 2,
  class: "overflow-x-auto"
};
const _hoisted_65 = { class: "w-full divide-y divide-gray-100" };
const _hoisted_66 = { class: "divide-y divide-gray-100 bg-white" };
const _hoisted_67 = { class: "px-6 py-4 whitespace-nowrap" };
const _hoisted_68 = { class: "flex items-center space-x-3.5" };
const _hoisted_69 = { class: "w-10 h-10 rounded-lg overflow-hidden flex-shrink-0 flex items-center justify-center shadow-sm" };
const _hoisted_70 = ["src"];
const _hoisted_71 = {
  key: 1,
  class: "w-full h-full flex items-center justify-center bg-emerald-50 border border-emerald-600 rounded-lg text-emerald-600 font-bold text-sm"
};
const _hoisted_72 = { class: "text-left" };
const _hoisted_73 = { class: "text-sm font-medium text-slate-700" };
const _hoisted_74 = { class: "text-[10px] text-slate-400 font-semibold tracking-wide mt-0.5 uppercase" };
const _hoisted_75 = { class: "px-6 py-4 whitespace-nowrap text-left" };
const _hoisted_76 = { class: "px-2.5 py-0.5 rounded text-[10px] font-bold uppercase bg-blue-50 border border-blue-100 text-blue-700" };
const _hoisted_77 = { class: "px-6 py-4 whitespace-nowrap text-left" };
const _hoisted_78 = { class: "space-y-0.5" };
const _hoisted_79 = { class: "flex items-center space-x-2 text-xs font-semibold text-slate-600" };
const _hoisted_80 = { class: "font-semibold text-slate-800" };
const _hoisted_81 = { class: "text-[10px] text-slate-400 font-semibold bg-slate-50 px-2 py-0.5 border border-gray-200 rounded-md" };
const _hoisted_82 = { class: "text-[11px] text-slate-500 font-medium pl-6" };
const _hoisted_83 = { class: "font-semibold text-slate-700" };
const _hoisted_84 = {
  key: 0,
  class: "text-slate-400 font-normal"
};
const _hoisted_85 = { class: "px-6 py-4 whitespace-nowrap text-left" };
const _hoisted_86 = { class: "px-2.5 py-0.5 rounded text-[10px] font-bold uppercase bg-purple-50 border border-purple-100 text-purple-700" };
const _hoisted_87 = { class: "px-6 py-4 whitespace-nowrap text-left text-xs font-semibold text-slate-600" };
const _hoisted_88 = { class: "px-6 py-4 whitespace-nowrap text-left" };
const _hoisted_89 = { class: "px-6 py-4 whitespace-nowrap text-right text-sm font-medium" };
const _hoisted_90 = {
  key: 0,
  class: "flex items-center justify-end space-x-2"
};
const _hoisted_91 = ["onClick"];
const _hoisted_92 = ["onClick"];
const _hoisted_93 = {
  key: 1,
  class: "text-xs text-slate-400 font-bold uppercase italic pr-4"
};
const _hoisted_94 = {
  key: 3,
  class: "px-6 py-4 bg-gray-50/50 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 font-outfit text-xs font-semibold text-slate-500"
};
const _hoisted_95 = { class: "flex items-center space-x-3" };
const _hoisted_96 = { class: "relative flex items-center space-x-1.5 border-l border-slate-200 pl-3" };
const _hoisted_97 = { class: "flex items-center space-x-2" };
const _hoisted_98 = ["disabled"];
const _hoisted_99 = { class: "flex items-center space-x-1" };
const _hoisted_100 = ["onClick", "disabled"];
const _hoisted_101 = ["disabled"];
const _hoisted_102 = {
  key: 2,
  class: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
};
const _hoisted_103 = { class: "bg-white rounded-xl shadow-xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in duration-200 border border-gray-200" };
const _hoisted_104 = { class: "p-6 border-b border-gray-100 flex items-center justify-between text-left" };
const _hoisted_105 = { class: "flex items-center space-x-3" };
const _hoisted_106 = { class: "w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600 border border-emerald-100/50 flex-shrink-0" };
const _hoisted_107 = { class: "text-[10px] font-semibold text-slate-400 uppercase tracking-wider mt-0.5" };
const _hoisted_108 = { class: "p-6 space-y-5 text-left font-outfit text-slate-700" };
const _hoisted_109 = { class: "flex items-center space-x-3.5 pb-4 border-b border-gray-100" };
const _hoisted_110 = { class: "w-12 h-12 rounded-xl overflow-hidden flex-shrink-0 flex items-center justify-center shadow-sm" };
const _hoisted_111 = ["src"];
const _hoisted_112 = {
  key: 1,
  class: "w-full h-full flex items-center justify-center bg-emerald-50 border border-emerald-600 rounded-xl text-emerald-600 font-bold text-base"
};
const _hoisted_113 = { class: "font-bold text-slate-700 text-sm leading-snug" };
const _hoisted_114 = { class: "text-[11px] text-slate-400 font-semibold mt-0.5" };
const _hoisted_115 = { class: "text-[10px] text-slate-400 font-semibold tracking-wider mt-0.5 uppercase" };
const _hoisted_116 = { class: "grid grid-cols-2 gap-4 pb-4 border-b border-gray-100" };
const _hoisted_117 = { class: "font-bold text-slate-700 text-sm" };
const _hoisted_118 = { class: "font-semibold text-slate-700 text-xs" };
const _hoisted_119 = { class: "pb-4 border-b border-gray-100 space-y-2" };
const _hoisted_120 = { class: "font-semibold text-slate-700 text-xs" };
const _hoisted_121 = { class: "font-semibold text-slate-700 text-xs" };
const _hoisted_122 = { class: "space-y-2.5 pb-1" };
const _hoisted_123 = { class: "text-[11px] text-slate-500 font-semibold space-y-1.5 pt-1" };
const _hoisted_124 = { key: 0 };
const _hoisted_125 = { class: "font-bold text-slate-700" };
const _hoisted_126 = { key: 1 };
const _hoisted_127 = { class: "font-bold text-slate-700" };
const _hoisted_128 = { class: "pt-4 flex items-center space-x-3 border-t border-gray-100" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "BookingsPage",
  setup(__props) {
    const { showError, showSuccess, showConfirm } = useSwal();
    const route = useRoute();
    const todayStr = format(/* @__PURE__ */ new Date(), "yyyy-MM-dd");
    const loading = ref(false);
    const activeSubView = ref("bookings");
    const overrideRequests = ref([]);
    const loadingOverrides = ref(false);
    const bookings = ref([]);
    const stats = ref({
      all: 0,
      active: 0,
      pending: 0,
      completed: 0,
      cancelled: 0
    });
    const activeFilter = ref("all");
    const searchQuery = ref("");
    const timeRange = ref("today");
    const fromDate = ref(todayStr);
    const toDate = ref(todayStr);
    const perPage = ref("20");
    const selectedBooking = ref(null);
    const pagination = ref({
      current_page: 1,
      last_page: 1,
      total: 0,
      from: 0,
      to: 0
    });
    const overrideSearchQuery = ref("");
    const overrideTimeRange = ref("today");
    const overrideFromDate = ref(todayStr);
    const overrideToDate = ref(todayStr);
    const overrideStatusFilter = ref("all");
    const overridePerPage = ref("20");
    const overridePagination = ref({
      current_page: 1,
      last_page: 1,
      total: 0,
      from: 0,
      to: 0
    });
    const handleTimeRangeChange = () => {
      fetchBookings(1);
    };
    const handleOverrideTimeRangeChange = () => {
      fetchOverrideRequests(1);
    };
    const refreshData = () => {
      if (activeSubView.value === "override_requests") {
        fetchOverrideRequests(overridePagination.value.current_page);
      } else {
        fetchBookings(pagination.value.current_page);
        fetchStats();
      }
    };
    const fetchBookings = async (page = 1) => {
      loading.value = true;
      try {
        const params = {
          page,
          status: activeFilter.value,
          search: searchQuery.value,
          time_range: timeRange.value,
          per_page: perPage.value
        };
        if (timeRange.value === "custom" && fromDate.value && toDate.value) {
          params.from_date = fromDate.value;
          params.to_date = toDate.value;
        }
        const response = await librarianAPI.getBookings(params);
        bookings.value = response.data || [];
        pagination.value = {
          current_page: response.current_page || 1,
          last_page: response.last_page || 1,
          total: response.total || 0,
          from: response.from || 0,
          to: response.to || 0
        };
      } catch (error) {
        console.error("Error fetching bookings:", error);
      } finally {
        loading.value = false;
      }
    };
    const fetchStats = async () => {
      try {
        stats.value = await librarianAPI.getBookingStats();
      } catch (error) {
        console.error("Error fetching booking stats:", error);
      }
    };
    let searchTimeout = null;
    const debounceSearch = () => {
      if (searchTimeout) clearTimeout(searchTimeout);
      searchTimeout = setTimeout(() => {
        fetchBookings(1);
      }, 400);
    };
    let overrideSearchTimeout = null;
    const debounceOverrideSearch = () => {
      if (overrideSearchTimeout) clearTimeout(overrideSearchTimeout);
      overrideSearchTimeout = setTimeout(() => {
        fetchOverrideRequests(1);
      }, 400);
    };
    const visiblePages = computed(() => {
      const total = pagination.value.last_page;
      const current = pagination.value.current_page;
      if (total <= 7) {
        return Array.from({ length: total }, (_, i) => i + 1);
      }
      const pages = [1];
      if (current > 3) pages.push("...");
      const start = Math.max(2, current - 1);
      const end = Math.min(total - 1, current + 1);
      for (let i = start; i <= end; i++) {
        pages.push(i);
      }
      if (current < total - 2) pages.push("...");
      pages.push(total);
      return pages;
    });
    const overrideVisiblePages = computed(() => {
      const total = overridePagination.value.last_page;
      const current = overridePagination.value.current_page;
      if (total <= 7) {
        return Array.from({ length: total }, (_, i) => i + 1);
      }
      const pages = [1];
      if (current > 3) pages.push("...");
      const start = Math.max(2, current - 1);
      const end = Math.min(total - 1, current + 1);
      for (let i = start; i <= end; i++) {
        pages.push(i);
      }
      if (current < total - 2) pages.push("...");
      pages.push(total);
      return pages;
    });
    const handleCheckIn = async (id) => {
      if (!await showConfirm("Check In", "Are you sure you want to check in this student?", "Yes, Check In")) return;
      try {
        await librarianAPI.checkInBooking(id);
        showSuccess("Checked In", "Student checked in successfully.");
        await fetchBookings(pagination.value.current_page);
        await fetchStats();
      } catch (error) {
        console.error("Error checking in:", error);
        showError("Failed", "Failed to check in. Please try again.");
      }
    };
    const handleCheckOut = async (id) => {
      if (!await showConfirm("Check Out", "Are you sure you want to check out this student?", "Yes, Check Out")) return;
      try {
        await librarianAPI.checkOutBooking(id);
        showSuccess("Checked Out", "Student checked out successfully.");
        await fetchBookings(pagination.value.current_page);
        await fetchStats();
      } catch (error) {
        console.error("Error checking out:", error);
        showError("Failed", "Failed to check out. Please try again.");
      }
    };
    const handleCancel = async (id) => {
      if (!await showConfirm("Cancel Booking", "Are you sure you want to cancel this booking?", "Yes, Cancel")) return;
      try {
        await librarianAPI.cancelBooking(id);
        showSuccess("Cancelled", "Booking cancelled successfully.");
        await fetchBookings(pagination.value.current_page);
        await fetchStats();
      } catch (error) {
        console.error("Error cancelling booking:", error);
        showError("Failed", "Failed to cancel booking. Please try again.");
      }
    };
    const formatDate = (dateString) => {
      if (!dateString) return "N/A";
      return format(new Date(dateString), "MMM dd, yyyy");
    };
    const formatTime = (dateString) => {
      if (!dateString) return "N/A";
      const d = new Date(dateString);
      if (isNaN(d.getTime())) return "N/A";
      return format(d, "hh:mm a");
    };
    const formatStatus = (status) => {
      if (status === "checked_in") return "Active";
      if (status === "booked") return "Pending";
      if (status === "checked_out") return "Completed";
      return status;
    };
    const getStatusClass = (status) => {
      switch (status) {
        case "checked_in":
          return "bg-green-50 border-green-200 text-green-700";
        case "booked":
          return "bg-orange-50 border-orange-100 text-orange-700";
        case "checked_out":
          return "bg-blue-50 border-blue-100 text-blue-700";
        case "cancelled":
          return "bg-red-50 border-red-200 text-red-700";
        case "no_show":
          return "bg-gray-50 border-slate-200 text-gray-550";
        default:
          return "bg-gray-50 border-slate-200 text-gray-550";
      }
    };
    const viewBookingDetails = (booking) => {
      selectedBooking.value = booking;
    };
    const getProfilePictureUrl = (path) => {
      if (!path) return "";
      if (path.startsWith("http")) return path;
      return `/storage/${path}`;
    };
    const fetchOverrideRequests = async (page = 1) => {
      loadingOverrides.value = true;
      try {
        const params = {
          page,
          status: overrideStatusFilter.value,
          search: overrideSearchQuery.value,
          time_range: overrideTimeRange.value,
          per_page: overridePerPage.value
        };
        if (overrideTimeRange.value === "custom" && overrideFromDate.value && overrideToDate.value) {
          params.from_date = overrideFromDate.value;
          params.to_date = overrideToDate.value;
        }
        const response = await librarianAPI.getOverrideRequests(params);
        if (response && response.data) {
          overrideRequests.value = response.data;
          overridePagination.value = {
            current_page: response.current_page || 1,
            last_page: response.last_page || 1,
            total: response.total || 0,
            from: response.from || 0,
            to: response.to || 0
          };
        } else {
          overrideRequests.value = Array.isArray(response) ? response : [];
          overridePagination.value = {
            current_page: 1,
            last_page: 1,
            total: overrideRequests.value.length,
            from: overrideRequests.value.length ? 1 : 0,
            to: overrideRequests.value.length
          };
        }
      } catch (error) {
        console.error("Error fetching override requests:", error);
      } finally {
        loadingOverrides.value = false;
      }
    };
    const handleOverrideAction = async (id, action) => {
      const confirmMsg = action === "approve" ? "Are you sure you want to approve this override request?" : "Are you sure you want to reject this override request?";
      const confirmBtn = action === "approve" ? "Yes, Approve" : "Yes, Reject";
      if (!await showConfirm(action === "approve" ? "Approve Request" : "Reject Request", confirmMsg, confirmBtn)) return;
      try {
        if (action === "approve") {
          await librarianAPI.approveOverrideRequest(id);
          showSuccess("Approved!", "Override request has been approved.");
        } else {
          await librarianAPI.rejectOverrideRequest(id);
          showSuccess("Rejected", "Override request has been rejected.");
        }
        await fetchOverrideRequests(overridePagination.value.current_page);
      } catch (error) {
        console.error("Error processing override action:", error);
        showError("Error", "Failed to process request.");
      }
    };
    watch(activeSubView, (newVal) => {
      if (newVal === "override_requests") {
        fetchOverrideRequests(1);
      } else {
        fetchBookings(1);
        fetchStats();
      }
    });
    onMounted(() => {
      if (route.query.tab === "override_requests") {
        activeSubView.value = "override_requests";
        fetchOverrideRequests(1);
      } else {
        fetchBookings(1);
        fetchStats();
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("div", _hoisted_3, [
            createBaseVNode("button", {
              onClick: _cache[0] || (_cache[0] = ($event) => activeSubView.value = "bookings"),
              class: normalizeClass([
                "px-5 py-2.5 text-xs font-bold rounded-lg transition-all cursor-pointer flex items-center space-x-2 border border-transparent",
                activeSubView.value === "bookings" ? "bg-white text-emerald-700 shadow-sm border-slate-200/40" : "text-slate-500 hover:text-slate-700"
              ])
            }, [
              createVNode(unref(Armchair), { class: "w-4 h-4" }),
              _cache[30] || (_cache[30] = createBaseVNode("span", null, "Bookings List", -1))
            ], 2),
            createBaseVNode("button", {
              onClick: _cache[1] || (_cache[1] = ($event) => activeSubView.value = "override_requests"),
              class: normalizeClass([
                "px-5 py-2.5 text-xs font-bold rounded-lg transition-all cursor-pointer flex items-center space-x-2 border border-transparent",
                activeSubView.value === "override_requests" ? "bg-white text-emerald-700 shadow-sm border-slate-200/40" : "text-slate-500 hover:text-slate-700"
              ])
            }, [
              createVNode(unref(ShieldAlert), { class: "w-4 h-4" }),
              _cache[31] || (_cache[31] = createBaseVNode("span", null, "Override Requests", -1))
            ], 2)
          ]),
          createBaseVNode("div", _hoisted_4, [
            activeSubView.value === "bookings" ? (openBlock(), createBlock(_sfc_main$1, {
              key: 0,
              modelValue: timeRange.value,
              "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => timeRange.value = $event),
              color: "emerald",
              onChange: handleTimeRangeChange
            }, null, 8, ["modelValue"])) : (openBlock(), createBlock(_sfc_main$1, {
              key: 1,
              modelValue: overrideTimeRange.value,
              "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => overrideTimeRange.value = $event),
              color: "emerald",
              onChange: handleOverrideTimeRangeChange
            }, null, 8, ["modelValue"])),
            activeSubView.value === "bookings" && timeRange.value === "custom" ? (openBlock(), createElementBlock("div", _hoisted_5, [
              withDirectives(createBaseVNode("input", {
                type: "date",
                "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => fromDate.value = $event),
                onChange: _cache[5] || (_cache[5] = ($event) => fetchBookings(1)),
                class: "px-3 py-1.5 bg-white border border-slate-200 rounded-xl text-xs font-semibold text-slate-700 outline-none focus:ring-2 focus:ring-emerald-500/20 shadow-2xs"
              }, null, 544), [
                [vModelText, fromDate.value]
              ]),
              _cache[32] || (_cache[32] = createBaseVNode("span", { class: "text-xs text-slate-400 font-bold" }, "to", -1)),
              withDirectives(createBaseVNode("input", {
                type: "date",
                "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => toDate.value = $event),
                onChange: _cache[7] || (_cache[7] = ($event) => fetchBookings(1)),
                class: "px-3 py-1.5 bg-white border border-slate-200 rounded-xl text-xs font-semibold text-slate-700 outline-none focus:ring-2 focus:ring-emerald-500/20 shadow-2xs"
              }, null, 544), [
                [vModelText, toDate.value]
              ])
            ])) : createCommentVNode("", true),
            activeSubView.value === "override_requests" && overrideTimeRange.value === "custom" ? (openBlock(), createElementBlock("div", _hoisted_6, [
              withDirectives(createBaseVNode("input", {
                type: "date",
                "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => overrideFromDate.value = $event),
                onChange: _cache[9] || (_cache[9] = ($event) => fetchOverrideRequests(1)),
                class: "px-3 py-1.5 bg-white border border-slate-200 rounded-xl text-xs font-semibold text-slate-700 outline-none focus:ring-2 focus:ring-emerald-500/20 shadow-2xs"
              }, null, 544), [
                [vModelText, overrideFromDate.value]
              ]),
              _cache[33] || (_cache[33] = createBaseVNode("span", { class: "text-xs text-slate-400 font-bold" }, "to", -1)),
              withDirectives(createBaseVNode("input", {
                type: "date",
                "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => overrideToDate.value = $event),
                onChange: _cache[11] || (_cache[11] = ($event) => fetchOverrideRequests(1)),
                class: "px-3 py-1.5 bg-white border border-slate-200 rounded-xl text-xs font-semibold text-slate-700 outline-none focus:ring-2 focus:ring-emerald-500/20 shadow-2xs"
              }, null, 544), [
                [vModelText, overrideToDate.value]
              ])
            ])) : createCommentVNode("", true),
            createBaseVNode("button", {
              onClick: refreshData,
              class: "p-2.5 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors cursor-pointer shadow-sm flex items-center justify-center",
              title: "Refresh List"
            }, [
              createVNode(unref(RefreshCw), {
                class: normalizeClass(["w-4 h-4 text-slate-500", loading.value || loadingOverrides.value ? "animate-spin text-emerald-600" : ""])
              }, null, 8, ["class"])
            ])
          ])
        ]),
        activeSubView.value === "bookings" ? (openBlock(), createElementBlock("div", _hoisted_7, [
          createBaseVNode("div", _hoisted_8, [
            createBaseVNode("div", _hoisted_9, [
              createBaseVNode("div", _hoisted_10, [
                createVNode(unref(Search), { class: "absolute left-3.5 top-1/2 transform -translate-y-1/2 w-4.5 h-4.5 text-slate-400" }),
                withDirectives(createBaseVNode("input", {
                  "onUpdate:modelValue": _cache[12] || (_cache[12] = ($event) => searchQuery.value = $event),
                  type: "text",
                  placeholder: "Search student by name or CRN...",
                  class: "w-full pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-xs font-semibold text-slate-655 focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none placeholder-slate-400",
                  onInput: debounceSearch
                }, null, 544), [
                  [vModelText, searchQuery.value]
                ])
              ]),
              withDirectives(createBaseVNode("select", {
                "onUpdate:modelValue": _cache[13] || (_cache[13] = ($event) => activeFilter.value = $event),
                onChange: _cache[14] || (_cache[14] = ($event) => fetchBookings(1)),
                class: "w-full sm:w-56 px-4 py-2 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-655 focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none cursor-pointer"
              }, [
                createBaseVNode("option", _hoisted_11, "All Statuses (" + toDisplayString(stats.value.all || 0) + ")", 1),
                createBaseVNode("option", _hoisted_12, "Active (" + toDisplayString(stats.value.active || 0) + ")", 1),
                createBaseVNode("option", _hoisted_13, "Pending (" + toDisplayString(stats.value.pending || 0) + ")", 1),
                createBaseVNode("option", _hoisted_14, "Completed (" + toDisplayString(stats.value.completed || 0) + ")", 1),
                createBaseVNode("option", _hoisted_15, "Cancelled (" + toDisplayString(stats.value.cancelled || 0) + ")", 1)
              ], 544), [
                [vModelSelect, activeFilter.value]
              ])
            ])
          ]),
          createBaseVNode("div", _hoisted_16, [
            loading.value ? (openBlock(), createElementBlock("div", _hoisted_17, [
              createVNode(unref(RefreshCw), { class: "w-10 h-10 text-emerald-600 animate-spin mb-4" }),
              _cache[34] || (_cache[34] = createBaseVNode("p", { class: "text-slate-500 font-semibold uppercase tracking-wider text-xs animate-pulse" }, "Loading reservations...", -1))
            ])) : bookings.value.length === 0 ? (openBlock(), createElementBlock("div", _hoisted_18, [
              createVNode(unref(Search), { class: "w-10 h-10 text-slate-200 mx-auto mb-4" }),
              _cache[35] || (_cache[35] = createBaseVNode("p", { class: "text-xs font-bold uppercase tracking-widest text-slate-400" }, "No bookings found for the selected range", -1))
            ])) : (openBlock(), createElementBlock("div", _hoisted_19, [
              createBaseVNode("table", _hoisted_20, [
                _cache[36] || (_cache[36] = createBaseVNode("thead", { class: "bg-gray-50/50" }, [
                  createBaseVNode("tr", null, [
                    createBaseVNode("th", { class: "px-6 py-4 text-left text-xs font-semibold text-slate-400 uppercase tracking-widest font-bold" }, " Student "),
                    createBaseVNode("th", { class: "px-6 py-4 text-left text-xs font-semibold text-slate-400 uppercase tracking-widest font-bold" }, " Seat & Floor "),
                    createBaseVNode("th", { class: "px-6 py-4 text-left text-xs font-semibold text-slate-400 uppercase tracking-widest font-bold" }, " Date & Time "),
                    createBaseVNode("th", { class: "px-6 py-4 text-left text-xs font-semibold text-slate-400 uppercase tracking-widest font-bold" }, " Status "),
                    createBaseVNode("th", { class: "px-6 py-4 text-left text-xs font-semibold text-slate-400 uppercase tracking-widest font-bold" }, " Activity Logs "),
                    createBaseVNode("th", { class: "px-6 py-4 text-right text-xs font-semibold text-slate-400 uppercase tracking-widest font-bold" }, " Action ")
                  ])
                ], -1)),
                createBaseVNode("tbody", _hoisted_21, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(bookings.value, (booking) => {
                    return openBlock(), createElementBlock("tr", {
                      key: booking.id,
                      class: "hover:bg-slate-50/50 transition-colors"
                    }, [
                      createBaseVNode("td", _hoisted_22, [
                        createBaseVNode("div", _hoisted_23, [
                          createBaseVNode("div", _hoisted_24, [
                            booking.user?.profile_picture ? (openBlock(), createElementBlock("img", {
                              key: 0,
                              src: getProfilePictureUrl(booking.user.profile_picture),
                              class: "w-full h-full object-cover rounded-lg"
                            }, null, 8, _hoisted_25)) : (openBlock(), createElementBlock("div", _hoisted_26, toDisplayString(booking.user?.name?.charAt(0).toUpperCase()), 1))
                          ]),
                          createBaseVNode("div", _hoisted_27, [
                            createBaseVNode("div", _hoisted_28, toDisplayString(booking.user?.name), 1),
                            createBaseVNode("div", _hoisted_29, "CRN: " + toDisplayString(booking.user?.crn || "N/A"), 1)
                          ])
                        ])
                      ]),
                      createBaseVNode("td", _hoisted_30, [
                        createBaseVNode("div", _hoisted_31, [
                          createVNode(unref(MapPin), { class: "w-4 h-4 text-slate-400 flex-shrink-0" }),
                          createBaseVNode("span", _hoisted_32, "Seat " + toDisplayString(booking.seat?.seat_number), 1),
                          createBaseVNode("span", _hoisted_33, toDisplayString(booking.seat?.floor?.name), 1)
                        ])
                      ]),
                      createBaseVNode("td", _hoisted_34, [
                        createBaseVNode("div", _hoisted_35, toDisplayString(formatDate(booking.booking_time)), 1),
                        createBaseVNode("div", _hoisted_36, toDisplayString(formatTime(booking.booking_time)) + " - " + toDisplayString(formatTime(booking.scheduled_end_time)), 1)
                      ]),
                      createBaseVNode("td", _hoisted_37, [
                        createBaseVNode("span", {
                          class: normalizeClass([
                            "px-2.5 py-1 rounded-full text-[10px] font-bold border inline-flex items-center gap-1.5 uppercase",
                            getStatusClass(booking.status)
                          ])
                        }, [
                          createBaseVNode("span", {
                            class: normalizeClass([
                              "w-1.5 h-1.5 rounded-full",
                              booking.status === "checked_in" ? "bg-green-500" : booking.status === "booked" ? "bg-orange-500" : booking.status === "checked_out" ? "bg-blue-500" : "bg-red-500"
                            ])
                          }, null, 2),
                          createTextVNode(" " + toDisplayString(formatStatus(booking.status)), 1)
                        ], 2)
                      ]),
                      createBaseVNode("td", _hoisted_38, [
                        booking.status === "checked_in" ? (openBlock(), createElementBlock("div", _hoisted_39, [
                          createVNode(unref(UserCheck), { class: "w-4 h-4 text-emerald-600" }),
                          createBaseVNode("span", null, "Checked-in at " + toDisplayString(formatTime(booking.check_in_time)), 1)
                        ])) : booking.status === "checked_out" ? (openBlock(), createElementBlock("div", _hoisted_40, [
                          createVNode(unref(LogOut), { class: "w-4 h-4 text-red-600" }),
                          createBaseVNode("span", null, "Checked-out at " + toDisplayString(formatTime(booking.check_out_time)), 1)
                        ])) : booking.status === "booked" ? (openBlock(), createElementBlock("div", _hoisted_41, [
                          createVNode(unref(Calendar), { class: "w-4 h-4 text-amber-500" }),
                          createBaseVNode("span", null, "Reserved for " + toDisplayString(formatTime(booking.booking_time)), 1)
                        ])) : (openBlock(), createElementBlock("div", _hoisted_42, " -- "))
                      ]),
                      createBaseVNode("td", _hoisted_43, [
                        createBaseVNode("div", _hoisted_44, [
                          createBaseVNode("button", {
                            onClick: ($event) => viewBookingDetails(booking),
                            class: "p-2 text-slate-655 hover:text-emerald-700 bg-slate-50 hover:bg-emerald-50/50 rounded-xl transition-all border border-slate-100 cursor-pointer shadow-sm",
                            title: "View Details"
                          }, [
                            createVNode(unref(Eye), { class: "w-4 h-4" })
                          ], 8, _hoisted_45),
                          booking.status === "booked" ? (openBlock(), createElementBlock("button", {
                            key: 0,
                            onClick: ($event) => handleCheckIn(booking.id),
                            class: "p-2 text-slate-655 hover:text-emerald-700 bg-slate-50 hover:bg-emerald-50/50 rounded-xl transition-all border border-slate-100 cursor-pointer shadow-sm",
                            title: "Check In"
                          }, [
                            createVNode(unref(UserCheck), { class: "w-4 h-4" })
                          ], 8, _hoisted_46)) : createCommentVNode("", true),
                          booking.status === "checked_in" ? (openBlock(), createElementBlock("button", {
                            key: 1,
                            onClick: ($event) => handleCheckOut(booking.id),
                            class: "p-2 text-slate-655 hover:text-red-700 bg-slate-50 hover:bg-red-100/50 rounded-xl transition-all border border-slate-100 cursor-pointer shadow-sm",
                            title: "Check Out"
                          }, [
                            createVNode(unref(LogOut), { class: "w-4 h-4" })
                          ], 8, _hoisted_47)) : createCommentVNode("", true),
                          booking.status === "booked" ? (openBlock(), createElementBlock("button", {
                            key: 2,
                            onClick: ($event) => handleCancel(booking.id),
                            class: "p-2 text-red-600 hover:text-red-700 bg-red-50 hover:bg-red-100 border border-red-100/50 rounded-xl shadow-sm transition-all cursor-pointer",
                            title: "Cancel Booking"
                          }, [
                            createVNode(unref(CircleX), { class: "w-4 h-4" })
                          ], 8, _hoisted_48)) : createCommentVNode("", true)
                        ])
                      ])
                    ]);
                  }), 128))
                ])
              ])
            ])),
            pagination.value.total > 0 ? (openBlock(), createElementBlock("div", _hoisted_49, [
              createBaseVNode("div", _hoisted_50, [
                createBaseVNode("span", null, "Showing " + toDisplayString(pagination.value.from || 0) + " to " + toDisplayString(pagination.value.to || 0) + " of " + toDisplayString(pagination.value.total) + " entries", 1),
                createBaseVNode("div", _hoisted_51, [
                  _cache[38] || (_cache[38] = createBaseVNode("span", { class: "text-slate-400 font-medium" }, "Show", -1)),
                  withDirectives(createBaseVNode("select", {
                    "onUpdate:modelValue": _cache[15] || (_cache[15] = ($event) => perPage.value = $event),
                    onChange: _cache[16] || (_cache[16] = ($event) => fetchBookings(1)),
                    class: "px-2 py-1 bg-white border border-slate-200 rounded-lg text-xs font-bold text-slate-700 focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none cursor-pointer shadow-2xs"
                  }, [..._cache[37] || (_cache[37] = [
                    createBaseVNode("option", { value: "20" }, "20", -1),
                    createBaseVNode("option", { value: "50" }, "50", -1),
                    createBaseVNode("option", { value: "100" }, "100", -1)
                  ])], 544), [
                    [vModelSelect, perPage.value]
                  ]),
                  _cache[39] || (_cache[39] = createBaseVNode("span", { class: "text-slate-400 font-medium" }, "per page", -1))
                ])
              ]),
              createBaseVNode("div", _hoisted_52, [
                createBaseVNode("button", {
                  onClick: _cache[17] || (_cache[17] = ($event) => fetchBookings(pagination.value.current_page - 1)),
                  disabled: pagination.value.current_page === 1,
                  class: "px-3.5 py-1.5 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-2xs cursor-pointer"
                }, " Previous ", 8, _hoisted_53),
                createBaseVNode("div", _hoisted_54, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(visiblePages.value, (p) => {
                    return openBlock(), createElementBlock("button", {
                      key: p,
                      onClick: ($event) => typeof p === "number" && fetchBookings(p),
                      disabled: typeof p !== "number",
                      class: normalizeClass([
                        "px-3 py-1.5 text-xs font-bold rounded-xl transition-all cursor-pointer",
                        p === pagination.value.current_page ? "bg-emerald-600 text-white shadow-2xs" : typeof p === "number" ? "bg-white border border-slate-200 text-slate-600 hover:bg-slate-50" : "bg-transparent text-slate-400 cursor-default"
                      ])
                    }, toDisplayString(p), 11, _hoisted_55);
                  }), 128))
                ]),
                createBaseVNode("button", {
                  onClick: _cache[18] || (_cache[18] = ($event) => fetchBookings(pagination.value.current_page + 1)),
                  disabled: pagination.value.current_page === pagination.value.last_page,
                  class: "px-3.5 py-1.5 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-2xs cursor-pointer"
                }, " Next ", 8, _hoisted_56)
              ])
            ])) : createCommentVNode("", true)
          ])
        ])) : activeSubView.value === "override_requests" ? (openBlock(), createElementBlock("div", _hoisted_57, [
          createBaseVNode("div", _hoisted_58, [
            createBaseVNode("div", _hoisted_59, [
              createBaseVNode("div", _hoisted_60, [
                createVNode(unref(Search), { class: "absolute left-3.5 top-1/2 transform -translate-y-1/2 w-4.5 h-4.5 text-slate-400" }),
                withDirectives(createBaseVNode("input", {
                  "onUpdate:modelValue": _cache[19] || (_cache[19] = ($event) => overrideSearchQuery.value = $event),
                  type: "text",
                  placeholder: "Search override request by student...",
                  class: "w-full pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-xs font-semibold text-slate-655 focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none placeholder-slate-400",
                  onInput: debounceOverrideSearch
                }, null, 544), [
                  [vModelText, overrideSearchQuery.value]
                ])
              ]),
              withDirectives(createBaseVNode("select", {
                "onUpdate:modelValue": _cache[20] || (_cache[20] = ($event) => overrideStatusFilter.value = $event),
                onChange: _cache[21] || (_cache[21] = ($event) => fetchOverrideRequests(1)),
                class: "w-full sm:w-56 px-4 py-2 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-655 focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none cursor-pointer"
              }, [..._cache[40] || (_cache[40] = [
                createBaseVNode("option", { value: "all" }, "All Statuses", -1),
                createBaseVNode("option", { value: "pending" }, "Pending", -1),
                createBaseVNode("option", { value: "approved" }, "Approved", -1),
                createBaseVNode("option", { value: "rejected" }, "Rejected", -1)
              ])], 544), [
                [vModelSelect, overrideStatusFilter.value]
              ])
            ])
          ]),
          createBaseVNode("div", _hoisted_61, [
            loadingOverrides.value ? (openBlock(), createElementBlock("div", _hoisted_62, [
              createVNode(unref(RefreshCw), { class: "w-10 h-10 text-emerald-600 animate-spin mb-4" }),
              _cache[41] || (_cache[41] = createBaseVNode("p", { class: "text-slate-500 font-semibold uppercase tracking-wider text-xs animate-pulse" }, "Loading override requests...", -1))
            ])) : overrideRequests.value.length === 0 ? (openBlock(), createElementBlock("div", _hoisted_63, [
              createVNode(unref(ShieldAlert), { class: "w-10 h-10 text-slate-200 mx-auto mb-4" }),
              _cache[42] || (_cache[42] = createBaseVNode("p", { class: "text-xs font-bold uppercase tracking-widest text-slate-400" }, "No override requests found for the selected range", -1))
            ])) : (openBlock(), createElementBlock("div", _hoisted_64, [
              createBaseVNode("table", _hoisted_65, [
                _cache[43] || (_cache[43] = createBaseVNode("thead", { class: "bg-gray-50/50 text-slate-400 font-bold uppercase tracking-wider border-b border-slate-100" }, [
                  createBaseVNode("tr", null, [
                    createBaseVNode("th", { class: "px-6 py-4 text-left text-xs font-semibold text-slate-400 uppercase tracking-widest font-bold" }, "Student"),
                    createBaseVNode("th", { class: "px-6 py-4 text-left text-xs font-semibold text-slate-400 uppercase tracking-widest font-bold" }, "Student Level"),
                    createBaseVNode("th", { class: "px-6 py-4 text-left text-xs font-semibold text-slate-400 uppercase tracking-widest font-bold" }, "Target Seat"),
                    createBaseVNode("th", { class: "px-6 py-4 text-left text-xs font-semibold text-slate-400 uppercase tracking-widest font-bold" }, "Seat Level"),
                    createBaseVNode("th", { class: "px-6 py-4 text-left text-xs font-semibold text-slate-400 uppercase tracking-widest font-bold" }, "Requested Date"),
                    createBaseVNode("th", { class: "px-6 py-4 text-left text-xs font-semibold text-slate-400 uppercase tracking-widest font-bold" }, "Status"),
                    createBaseVNode("th", { class: "px-6 py-4 text-right text-xs font-semibold text-slate-400 uppercase tracking-widest font-bold" }, "Action")
                  ])
                ], -1)),
                createBaseVNode("tbody", _hoisted_66, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(overrideRequests.value, (req) => {
                    return openBlock(), createElementBlock("tr", {
                      key: req.id,
                      class: "hover:bg-slate-50/50 transition-colors"
                    }, [
                      createBaseVNode("td", _hoisted_67, [
                        createBaseVNode("div", _hoisted_68, [
                          createBaseVNode("div", _hoisted_69, [
                            req.user?.profile_picture ? (openBlock(), createElementBlock("img", {
                              key: 0,
                              src: getProfilePictureUrl(req.user.profile_picture),
                              class: "w-full h-full object-cover rounded-lg"
                            }, null, 8, _hoisted_70)) : (openBlock(), createElementBlock("div", _hoisted_71, toDisplayString(req.user?.name?.charAt(0).toUpperCase()), 1))
                          ]),
                          createBaseVNode("div", _hoisted_72, [
                            createBaseVNode("div", _hoisted_73, toDisplayString(req.user?.name), 1),
                            createBaseVNode("div", _hoisted_74, "CRN: " + toDisplayString(req.user?.crn || "N/A"), 1)
                          ])
                        ])
                      ]),
                      createBaseVNode("td", _hoisted_75, [
                        createBaseVNode("span", _hoisted_76, toDisplayString(req.user?.ca_level || req.user_level || "N/A"), 1)
                      ]),
                      createBaseVNode("td", _hoisted_77, [
                        createBaseVNode("div", _hoisted_78, [
                          createBaseVNode("div", _hoisted_79, [
                            createVNode(unref(MapPin), { class: "w-4 h-4 text-slate-400 flex-shrink-0" }),
                            createBaseVNode("span", _hoisted_80, "Seat " + toDisplayString(req.seat?.seat_number), 1),
                            createBaseVNode("span", _hoisted_81, toDisplayString(req.seat?.floor?.name), 1)
                          ]),
                          createBaseVNode("div", _hoisted_82, [
                            createBaseVNode("span", _hoisted_83, toDisplayString(req.seat?.seat_section?.name || "Section N/A"), 1),
                            req.seat?.seat_subsection?.name ? (openBlock(), createElementBlock("span", _hoisted_84, " • " + toDisplayString(req.seat?.seat_subsection?.name), 1)) : createCommentVNode("", true)
                          ])
                        ])
                      ]),
                      createBaseVNode("td", _hoisted_85, [
                        createBaseVNode("span", _hoisted_86, toDisplayString(req.seat?.seat_subsection?.academic_level && req.seat?.seat_subsection?.academic_level !== "all" ? req.seat.seat_subsection.academic_level : req.seat?.seat_section?.academic_level || "All Levels"), 1)
                      ]),
                      createBaseVNode("td", _hoisted_87, toDisplayString(formatDate(req.created_at)), 1),
                      createBaseVNode("td", _hoisted_88, [
                        createBaseVNode("span", {
                          class: normalizeClass([
                            "px-2.5 py-0.5 rounded-full text-[9px] font-bold uppercase border inline-flex items-center gap-1",
                            req.status === "approved" ? "bg-green-50 border-green-100 text-green-700" : req.status === "rejected" ? "bg-red-50 border-red-100 text-red-700" : "bg-amber-50 border-amber-100 text-amber-700"
                          ])
                        }, [
                          createBaseVNode("span", {
                            class: normalizeClass(["w-1.5 h-1.5 rounded-full", req.status === "approved" ? "bg-green-500" : req.status === "rejected" ? "bg-red-500" : "bg-amber-500"])
                          }, null, 2),
                          createTextVNode(" " + toDisplayString(req.status), 1)
                        ], 2)
                      ]),
                      createBaseVNode("td", _hoisted_89, [
                        req.status === "pending" ? (openBlock(), createElementBlock("div", _hoisted_90, [
                          createBaseVNode("button", {
                            onClick: ($event) => handleOverrideAction(req.id, "approve"),
                            class: "px-3 py-1.5 text-xs font-bold text-white bg-emerald-700 hover:bg-emerald-800 rounded-lg shadow-sm cursor-pointer transition-all"
                          }, " Approve ", 8, _hoisted_91),
                          createBaseVNode("button", {
                            onClick: ($event) => handleOverrideAction(req.id, "reject"),
                            class: "px-3 py-1.5 text-xs font-bold text-red-700 bg-red-50 hover:bg-red-100 border border-red-150 rounded-lg shadow-sm cursor-pointer transition-all"
                          }, " Reject ", 8, _hoisted_92)
                        ])) : (openBlock(), createElementBlock("div", _hoisted_93, " Processed "))
                      ])
                    ]);
                  }), 128))
                ])
              ])
            ])),
            overridePagination.value.total > 0 ? (openBlock(), createElementBlock("div", _hoisted_94, [
              createBaseVNode("div", _hoisted_95, [
                createBaseVNode("span", null, "Showing " + toDisplayString(overridePagination.value.from || 0) + " to " + toDisplayString(overridePagination.value.to || 0) + " of " + toDisplayString(overridePagination.value.total) + " entries", 1),
                createBaseVNode("div", _hoisted_96, [
                  _cache[45] || (_cache[45] = createBaseVNode("span", { class: "text-slate-400 font-medium" }, "Show", -1)),
                  withDirectives(createBaseVNode("select", {
                    "onUpdate:modelValue": _cache[22] || (_cache[22] = ($event) => overridePerPage.value = $event),
                    onChange: _cache[23] || (_cache[23] = ($event) => fetchOverrideRequests(1)),
                    class: "px-2 py-1 bg-white border border-slate-200 rounded-lg text-xs font-bold text-slate-700 focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none cursor-pointer shadow-2xs"
                  }, [..._cache[44] || (_cache[44] = [
                    createBaseVNode("option", { value: "20" }, "20", -1),
                    createBaseVNode("option", { value: "50" }, "50", -1),
                    createBaseVNode("option", { value: "100" }, "100", -1)
                  ])], 544), [
                    [vModelSelect, overridePerPage.value]
                  ]),
                  _cache[46] || (_cache[46] = createBaseVNode("span", { class: "text-slate-400 font-medium" }, "per page", -1))
                ])
              ]),
              createBaseVNode("div", _hoisted_97, [
                createBaseVNode("button", {
                  onClick: _cache[24] || (_cache[24] = ($event) => fetchOverrideRequests(overridePagination.value.current_page - 1)),
                  disabled: overridePagination.value.current_page === 1,
                  class: "px-3.5 py-1.5 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-2xs cursor-pointer"
                }, " Previous ", 8, _hoisted_98),
                createBaseVNode("div", _hoisted_99, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(overrideVisiblePages.value, (p) => {
                    return openBlock(), createElementBlock("button", {
                      key: p,
                      onClick: ($event) => typeof p === "number" && fetchOverrideRequests(p),
                      disabled: typeof p !== "number",
                      class: normalizeClass([
                        "px-3 py-1.5 text-xs font-bold rounded-xl transition-all cursor-pointer",
                        p === overridePagination.value.current_page ? "bg-emerald-600 text-white shadow-2xs" : typeof p === "number" ? "bg-white border border-slate-200 text-slate-600 hover:bg-slate-50" : "bg-transparent text-slate-400 cursor-default"
                      ])
                    }, toDisplayString(p), 11, _hoisted_100);
                  }), 128))
                ]),
                createBaseVNode("button", {
                  onClick: _cache[25] || (_cache[25] = ($event) => fetchOverrideRequests(overridePagination.value.current_page + 1)),
                  disabled: overridePagination.value.current_page === overridePagination.value.last_page,
                  class: "px-3.5 py-1.5 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-2xs cursor-pointer"
                }, " Next ", 8, _hoisted_101)
              ])
            ])) : createCommentVNode("", true)
          ])
        ])) : createCommentVNode("", true),
        selectedBooking.value ? (openBlock(), createElementBlock("div", _hoisted_102, [
          createBaseVNode("div", _hoisted_103, [
            createBaseVNode("div", _hoisted_104, [
              createBaseVNode("div", _hoisted_105, [
                createBaseVNode("div", _hoisted_106, [
                  createVNode(unref(Calendar), { class: "w-5 h-5" })
                ]),
                createBaseVNode("div", null, [
                  _cache[47] || (_cache[47] = createBaseVNode("h2", { class: "text-base font-bold text-slate-800 leading-snug" }, "Booking Details", -1)),
                  createBaseVNode("p", _hoisted_107, "Booking identification #" + toDisplayString(selectedBooking.value.id), 1)
                ])
              ]),
              createBaseVNode("button", {
                onClick: _cache[26] || (_cache[26] = ($event) => selectedBooking.value = null),
                class: "p-2 hover:bg-slate-50 rounded-lg transition-colors cursor-pointer"
              }, [
                createVNode(unref(X), { class: "w-5 h-5 text-slate-400" })
              ])
            ]),
            createBaseVNode("div", _hoisted_108, [
              createBaseVNode("div", _hoisted_109, [
                createBaseVNode("div", _hoisted_110, [
                  selectedBooking.value.user?.profile_picture ? (openBlock(), createElementBlock("img", {
                    key: 0,
                    src: getProfilePictureUrl(selectedBooking.value.user.profile_picture),
                    class: "w-full h-full object-cover rounded-xl"
                  }, null, 8, _hoisted_111)) : (openBlock(), createElementBlock("div", _hoisted_112, toDisplayString(selectedBooking.value.user?.name?.charAt(0).toUpperCase()), 1))
                ]),
                createBaseVNode("div", null, [
                  createBaseVNode("h4", _hoisted_113, toDisplayString(selectedBooking.value.user?.name || "N/A"), 1),
                  createBaseVNode("p", _hoisted_114, toDisplayString(selectedBooking.value.user?.email || "N/A"), 1),
                  createBaseVNode("p", _hoisted_115, "CRN: " + toDisplayString(selectedBooking.value.user?.crn || "N/A"), 1)
                ])
              ]),
              createBaseVNode("div", _hoisted_116, [
                createBaseVNode("div", null, [
                  _cache[48] || (_cache[48] = createBaseVNode("span", { class: "text-slate-400 font-semibold block text-[9px] uppercase tracking-wider" }, "Seat Assigned", -1)),
                  createBaseVNode("span", _hoisted_117, "Seat " + toDisplayString(selectedBooking.value.seat?.seat_number || "N/A"), 1)
                ]),
                createBaseVNode("div", null, [
                  _cache[49] || (_cache[49] = createBaseVNode("span", { class: "text-slate-400 font-semibold block text-[9px] uppercase tracking-wider" }, "Location", -1)),
                  createBaseVNode("span", _hoisted_118, toDisplayString(selectedBooking.value.seat?.floor?.name || "N/A"), 1)
                ])
              ]),
              createBaseVNode("div", _hoisted_119, [
                createBaseVNode("div", null, [
                  _cache[50] || (_cache[50] = createBaseVNode("span", { class: "text-slate-400 font-semibold block text-[9px] uppercase tracking-wider" }, "Reservation Date", -1)),
                  createBaseVNode("span", _hoisted_120, toDisplayString(formatDate(selectedBooking.value.booking_time)), 1)
                ]),
                createBaseVNode("div", null, [
                  _cache[51] || (_cache[51] = createBaseVNode("span", { class: "text-slate-400 font-semibold block text-[9px] uppercase tracking-wider" }, "Scheduled Window", -1)),
                  createBaseVNode("span", _hoisted_121, toDisplayString(formatTime(selectedBooking.value.booking_time)) + " - " + toDisplayString(formatTime(selectedBooking.value.scheduled_end_time)), 1)
                ])
              ]),
              createBaseVNode("div", _hoisted_122, [
                _cache[54] || (_cache[54] = createBaseVNode("span", { class: "text-slate-400 font-semibold block text-[9px] uppercase tracking-wider" }, "Status & Timings", -1)),
                createBaseVNode("div", null, [
                  createBaseVNode("span", {
                    class: normalizeClass([
                      "text-[9px] font-semibold px-2.5 py-1 rounded-full uppercase tracking-wider border bg-white",
                      selectedBooking.value.status === "checked_in" ? "bg-green-50 text-green-700 border-green-200" : selectedBooking.value.status === "booked" ? "bg-orange-50 text-orange-700 border-orange-100" : selectedBooking.value.status === "checked_out" ? "bg-blue-50 text-blue-700 border-blue-100" : selectedBooking.value.status === "cancelled" ? "bg-red-50 text-red-700 border-red-200" : "bg-slate-50 border-slate-200 text-slate-505"
                    ])
                  }, toDisplayString(formatStatus(selectedBooking.value.status)), 3)
                ]),
                createBaseVNode("div", _hoisted_123, [
                  selectedBooking.value.check_in_time ? (openBlock(), createElementBlock("p", _hoisted_124, [
                    _cache[52] || (_cache[52] = createTextVNode("Checked In: ", -1)),
                    createBaseVNode("span", _hoisted_125, toDisplayString(formatTime(selectedBooking.value.check_in_time)), 1)
                  ])) : createCommentVNode("", true),
                  selectedBooking.value.check_out_time ? (openBlock(), createElementBlock("p", _hoisted_126, [
                    _cache[53] || (_cache[53] = createTextVNode("Checked Out: ", -1)),
                    createBaseVNode("span", _hoisted_127, toDisplayString(formatTime(selectedBooking.value.check_out_time)), 1)
                  ])) : createCommentVNode("", true)
                ])
              ]),
              createBaseVNode("div", _hoisted_128, [
                selectedBooking.value.status === "booked" ? (openBlock(), createElementBlock("button", {
                  key: 0,
                  onClick: _cache[27] || (_cache[27] = ($event) => {
                    handleCheckIn(selectedBooking.value.id);
                    selectedBooking.value = null;
                  }),
                  class: "flex-1 px-4 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl text-xs font-bold cursor-pointer transition-colors shadow-sm"
                }, " Check In Student ")) : createCommentVNode("", true),
                selectedBooking.value.status === "checked_in" ? (openBlock(), createElementBlock("button", {
                  key: 1,
                  onClick: _cache[28] || (_cache[28] = ($event) => {
                    handleCheckOut(selectedBooking.value.id);
                    selectedBooking.value = null;
                  }),
                  class: "flex-1 px-4 py-2.5 bg-red-500 hover:bg-red-750 text-white rounded-xl text-xs font-bold cursor-pointer transition-colors shadow-sm"
                }, " Check Out Student ")) : createCommentVNode("", true),
                createBaseVNode("button", {
                  type: "button",
                  onClick: _cache[29] || (_cache[29] = ($event) => selectedBooking.value = null),
                  class: "flex-1 px-4 py-2.5 border border-slate-200 text-slate-505 font-bold rounded-xl hover:bg-slate-50 transition-colors text-xs cursor-pointer text-center"
                }, " Close Details ")
              ])
            ])
          ])
        ])) : createCommentVNode("", true)
      ]);
    };
  }
});
const BookingsPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-a6b93454"]]);
export {
  BookingsPage as default
};
