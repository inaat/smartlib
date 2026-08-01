import { d as defineComponent, r as ref, E as watch, o as onMounted, G as useRoute, a as createElementBlock, b as createBaseVNode, j as createCommentVNode, n as normalizeClass, f as createVNode, u as unref, p as withDirectives, v as vModelText, D as vModelSelect, t as toDisplayString, F as Fragment, k as renderList, i as createTextVNode, O as librarianAPI, l as openBlock } from "./main-C124sHqx.js";
import { u as useSwal } from "./useSwal-pQW_XkRe.js";
import { A as Armchair } from "./armchair-B5NjzUmb.js";
import { S as ShieldAlert } from "./shield-alert-BocI33XQ.js";
import { S as Search } from "./search-gimRym8C.js";
import { R as RefreshCw } from "./refresh-cw-BECuebdg.js";
import { C as Calendar } from "./calendar-Bu5qRmqf.js";
import { X } from "./x-eq55W8eI.js";
import { M as MapPin } from "./map-pin-CvyXaBel.js";
import { U as UserCheck } from "./user-check-CH7ymdCq.js";
import { L as LogOut } from "./log-out-D5Qzh1gh.js";
import { E as Eye } from "./eye-DkEb11LU.js";
import { C as CircleX } from "./circle-x-DWsDTdCK.js";
import { f as format } from "./format-CerZa7QB.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
/* empty css               */
import "./createLucideIcon-8y9GOHiU.js";
import "./en-US-CtEcOBul.js";
const _hoisted_1 = { class: "p-6 space-y-6 font-outfit" };
const _hoisted_2 = { class: "flex items-center space-x-1.5 bg-slate-100 rounded-xl p-1 w-fit" };
const _hoisted_3 = {
  key: 0,
  class: "space-y-6"
};
const _hoisted_4 = { class: "bg-white rounded-2xl shadow-sm border border-slate-100 p-4" };
const _hoisted_5 = { class: "flex flex-col md:flex-row items-center gap-4" };
const _hoisted_6 = { class: "relative flex-1 w-full text-left" };
const _hoisted_7 = { value: "all" };
const _hoisted_8 = { value: "active" };
const _hoisted_9 = { value: "pending" };
const _hoisted_10 = { value: "completed" };
const _hoisted_11 = { value: "cancelled" };
const _hoisted_12 = { class: "bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden" };
const _hoisted_13 = {
  key: 0,
  class: "p-16 flex flex-col items-center justify-center"
};
const _hoisted_14 = {
  key: 1,
  class: "p-16 text-center text-slate-400"
};
const _hoisted_15 = {
  key: 2,
  class: "overflow-x-auto"
};
const _hoisted_16 = { class: "w-full divide-y divide-gray-100" };
const _hoisted_17 = { class: "divide-y divide-gray-100 bg-white" };
const _hoisted_18 = { class: "px-6 py-4 whitespace-nowrap" };
const _hoisted_19 = { class: "flex items-center space-x-3.5" };
const _hoisted_20 = { class: "w-10 h-10 rounded-lg overflow-hidden flex-shrink-0 flex items-center justify-center shadow-sm" };
const _hoisted_21 = ["src"];
const _hoisted_22 = {
  key: 1,
  class: "w-full h-full flex items-center justify-center bg-emerald-50 border border-emerald-600 rounded-lg text-emerald-600 font-bold text-sm"
};
const _hoisted_23 = { class: "text-left" };
const _hoisted_24 = { class: "text-sm font-medium text-slate-700" };
const _hoisted_25 = { class: "text-[10px] text-slate-400 font-semibold tracking-wide mt-0.5 uppercase" };
const _hoisted_26 = { class: "px-6 py-4 whitespace-nowrap text-left" };
const _hoisted_27 = { class: "flex items-center space-x-2 text-xs font-semibold text-slate-600" };
const _hoisted_28 = { class: "font-semibold text-slate-800" };
const _hoisted_29 = { class: "text-[10px] text-slate-400 font-semibold bg-slate-50 px-2 py-0.5 border border-gray-200 rounded-md" };
const _hoisted_30 = { class: "px-6 py-4 whitespace-nowrap text-left" };
const _hoisted_31 = { class: "text-xs font-semibold text-slate-800" };
const _hoisted_32 = { class: "text-[10px] text-slate-400 font-semibold mt-1 uppercase tracking-wider" };
const _hoisted_33 = { class: "px-6 py-4 whitespace-nowrap text-left" };
const _hoisted_34 = { class: "px-6 py-4 whitespace-nowrap text-left" };
const _hoisted_35 = {
  key: 0,
  class: "text-xs font-bold text-slate-700 flex items-center space-x-1"
};
const _hoisted_36 = {
  key: 1,
  class: "text-xs font-bold text-slate-700 flex items-center space-x-1"
};
const _hoisted_37 = {
  key: 2,
  class: "text-xs font-bold text-slate-500 flex items-center space-x-1"
};
const _hoisted_38 = {
  key: 3,
  class: "text-xs font-semibold text-slate-400"
};
const _hoisted_39 = { class: "px-6 py-4 whitespace-nowrap text-right text-xs font-medium" };
const _hoisted_40 = { class: "flex items-center justify-end space-x-2.5" };
const _hoisted_41 = ["onClick"];
const _hoisted_42 = ["onClick"];
const _hoisted_43 = ["onClick"];
const _hoisted_44 = ["onClick"];
const _hoisted_45 = {
  key: 3,
  class: "px-6 py-4 border-t border-gray-100 flex items-center justify-between font-outfit text-xs font-bold text-slate-500"
};
const _hoisted_46 = { class: "flex items-center space-x-2" };
const _hoisted_47 = ["disabled"];
const _hoisted_48 = { class: "px-3 py-1.5 bg-slate-100 rounded-lg text-emerald-700" };
const _hoisted_49 = ["disabled"];
const _hoisted_50 = {
  key: 1,
  class: "space-y-6 animate-fade-in"
};
const _hoisted_51 = { class: "bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden text-left" };
const _hoisted_52 = {
  key: 0,
  class: "p-16 flex flex-col items-center justify-center"
};
const _hoisted_53 = {
  key: 1,
  class: "p-16 text-center text-slate-400"
};
const _hoisted_54 = {
  key: 2,
  class: "overflow-x-auto"
};
const _hoisted_55 = { class: "w-full divide-y divide-gray-100" };
const _hoisted_56 = { class: "divide-y divide-gray-100 bg-white" };
const _hoisted_57 = { class: "px-6 py-4 whitespace-nowrap" };
const _hoisted_58 = { class: "flex items-center space-x-3.5" };
const _hoisted_59 = { class: "w-10 h-10 rounded-lg overflow-hidden flex-shrink-0 flex items-center justify-center shadow-sm" };
const _hoisted_60 = ["src"];
const _hoisted_61 = {
  key: 1,
  class: "w-full h-full flex items-center justify-center bg-emerald-50 border border-emerald-600 rounded-lg text-emerald-600 font-bold text-sm"
};
const _hoisted_62 = { class: "text-left" };
const _hoisted_63 = { class: "text-sm font-medium text-slate-700" };
const _hoisted_64 = { class: "text-[10px] text-slate-400 font-semibold tracking-wide mt-0.5 uppercase" };
const _hoisted_65 = { class: "px-6 py-4 whitespace-nowrap text-left" };
const _hoisted_66 = { class: "px-2.5 py-0.5 rounded text-[10px] font-bold uppercase bg-amber-50 border border-amber-100 text-amber-700" };
const _hoisted_67 = { class: "px-6 py-4 whitespace-nowrap text-left" };
const _hoisted_68 = { class: "space-y-1" };
const _hoisted_69 = { class: "flex items-center space-x-2 text-xs font-semibold text-slate-800" };
const _hoisted_70 = { class: "font-bold text-slate-800" };
const _hoisted_71 = { class: "text-[10px] text-slate-500 font-semibold bg-slate-100 px-2 py-0.5 border border-slate-200 rounded-md" };
const _hoisted_72 = { class: "text-[11px] text-slate-500 font-medium pl-6" };
const _hoisted_73 = { class: "font-semibold text-slate-700" };
const _hoisted_74 = {
  key: 0,
  class: "text-slate-400 font-normal"
};
const _hoisted_75 = { class: "px-6 py-4 whitespace-nowrap text-left" };
const _hoisted_76 = { class: "px-2.5 py-0.5 rounded text-[10px] font-bold uppercase bg-purple-50 border border-purple-100 text-purple-700" };
const _hoisted_77 = { class: "px-6 py-4 whitespace-nowrap text-left text-xs font-semibold text-slate-600" };
const _hoisted_78 = { class: "px-6 py-4 whitespace-nowrap text-left" };
const _hoisted_79 = { class: "px-6 py-4 whitespace-nowrap text-right text-sm font-medium" };
const _hoisted_80 = {
  key: 0,
  class: "flex items-center justify-end space-x-2"
};
const _hoisted_81 = ["onClick"];
const _hoisted_82 = ["onClick"];
const _hoisted_83 = {
  key: 1,
  class: "text-xs text-slate-400 font-bold uppercase italic pr-4"
};
const _hoisted_84 = {
  key: 2,
  class: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
};
const _hoisted_85 = { class: "bg-white rounded-xl shadow-xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in duration-200 border border-gray-200" };
const _hoisted_86 = { class: "p-6 border-b border-gray-100 flex items-center justify-between text-left" };
const _hoisted_87 = { class: "flex items-center space-x-3" };
const _hoisted_88 = { class: "w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600 border border-emerald-100/50 flex-shrink-0" };
const _hoisted_89 = { class: "text-[10px] font-semibold text-slate-400 uppercase tracking-wider mt-0.5" };
const _hoisted_90 = { class: "p-6 space-y-5 text-left font-outfit text-slate-700" };
const _hoisted_91 = { class: "flex items-center space-x-3.5 pb-4 border-b border-gray-100" };
const _hoisted_92 = { class: "w-12 h-12 rounded-xl overflow-hidden flex-shrink-0 flex items-center justify-center shadow-sm" };
const _hoisted_93 = ["src"];
const _hoisted_94 = {
  key: 1,
  class: "w-full h-full flex items-center justify-center bg-emerald-50 border border-emerald-600 rounded-xl text-emerald-600 font-bold text-base"
};
const _hoisted_95 = { class: "font-bold text-slate-700 text-sm leading-snug" };
const _hoisted_96 = { class: "text-[11px] text-slate-400 font-semibold mt-0.5" };
const _hoisted_97 = { class: "text-[10px] text-slate-400 font-semibold tracking-wider mt-0.5 uppercase" };
const _hoisted_98 = { class: "grid grid-cols-2 gap-4 pb-4 border-b border-gray-100" };
const _hoisted_99 = { class: "font-bold text-slate-700 text-sm" };
const _hoisted_100 = { class: "font-semibold text-slate-700 text-xs" };
const _hoisted_101 = { class: "pb-4 border-b border-gray-100 space-y-2" };
const _hoisted_102 = { class: "font-semibold text-slate-700 text-xs" };
const _hoisted_103 = { class: "font-semibold text-slate-700 text-xs" };
const _hoisted_104 = { class: "space-y-2.5 pb-1" };
const _hoisted_105 = { class: "text-[11px] text-slate-500 font-semibold space-y-1.5 pt-1" };
const _hoisted_106 = { key: 0 };
const _hoisted_107 = { class: "font-bold text-slate-700" };
const _hoisted_108 = { key: 1 };
const _hoisted_109 = { class: "font-bold text-slate-700" };
const _hoisted_110 = { class: "pt-4 flex items-center space-x-3 border-t border-gray-100" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "BookingsPage",
  setup(__props) {
    const { showError, showSuccess, showConfirm } = useSwal();
    const route = useRoute();
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
    const selectedBooking = ref(null);
    const pagination = ref({
      current_page: 1,
      last_page: 1,
      total: 0,
      from: 0,
      to: 0
    });
    const fetchBookings = async (page = 1) => {
      loading.value = true;
      try {
        const response = await librarianAPI.getBookings({
          page,
          status: activeFilter.value,
          search: searchQuery.value
        });
        bookings.value = response.data;
        pagination.value = {
          current_page: response.current_page,
          last_page: response.last_page,
          total: response.total,
          from: response.from,
          to: response.to
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
      }, 500);
    };
    const changePage = (page) => {
      if (page >= 1 && page <= pagination.value.last_page) {
        fetchBookings(page);
      }
    };
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
    const fetchOverrideRequests = async () => {
      loadingOverrides.value = true;
      try {
        const response = await librarianAPI.getOverrideRequests();
        overrideRequests.value = response;
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
        await fetchOverrideRequests();
      } catch (error) {
        console.error("Error processing override action:", error);
        showError("Error", "Failed to process request.");
      }
    };
    watch(activeSubView, (newVal) => {
      if (newVal === "override_requests") {
        fetchOverrideRequests();
      } else {
        fetchBookings(1);
        fetchStats();
      }
    });
    onMounted(() => {
      if (route.query.tab === "override_requests") {
        activeSubView.value = "override_requests";
        fetchOverrideRequests();
      } else {
        fetchBookings();
        fetchStats();
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("button", {
            onClick: _cache[0] || (_cache[0] = ($event) => activeSubView.value = "bookings"),
            class: normalizeClass([
              "px-5 py-2.5 text-xs font-bold rounded-lg transition-all cursor-pointer flex items-center space-x-2 border border-transparent",
              activeSubView.value === "bookings" ? "bg-white text-emerald-700 shadow-sm border-slate-200/40" : "text-slate-500 hover:text-slate-700"
            ])
          }, [
            createVNode(unref(Armchair), { class: "w-4 h-4" }),
            _cache[11] || (_cache[11] = createBaseVNode("span", null, "Bookings List", -1))
          ], 2),
          createBaseVNode("button", {
            onClick: _cache[1] || (_cache[1] = ($event) => activeSubView.value = "override_requests"),
            class: normalizeClass([
              "px-5 py-2.5 text-xs font-bold rounded-lg transition-all cursor-pointer flex items-center space-x-2 border border-transparent",
              activeSubView.value === "override_requests" ? "bg-white text-emerald-700 shadow-sm border-slate-200/40" : "text-slate-500 hover:text-slate-700"
            ])
          }, [
            createVNode(unref(ShieldAlert), { class: "w-4 h-4" }),
            _cache[12] || (_cache[12] = createBaseVNode("span", null, "Override Requests", -1))
          ], 2)
        ]),
        activeSubView.value === "bookings" ? (openBlock(), createElementBlock("div", _hoisted_3, [
          createBaseVNode("div", _hoisted_4, [
            createBaseVNode("div", _hoisted_5, [
              createBaseVNode("div", _hoisted_6, [
                createVNode(unref(Search), { class: "absolute left-3.5 top-1/2 transform -translate-y-1/2 w-4.5 h-4.5 text-slate-400" }),
                withDirectives(createBaseVNode("input", {
                  "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => searchQuery.value = $event),
                  type: "text",
                  placeholder: "Search student by name or ID...",
                  class: "w-full pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-xs font-semibold text-slate-655 focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none placeholder-slate-400",
                  onInput: debounceSearch
                }, null, 544), [
                  [vModelText, searchQuery.value]
                ])
              ]),
              withDirectives(createBaseVNode("select", {
                "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => activeFilter.value = $event),
                onChange: _cache[4] || (_cache[4] = ($event) => fetchBookings(1)),
                class: "w-full md:w-56 px-4 py-2 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-655 focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none cursor-pointer"
              }, [
                createBaseVNode("option", _hoisted_7, "All Bookings (" + toDisplayString(stats.value.all || 0) + ")", 1),
                createBaseVNode("option", _hoisted_8, "Active (" + toDisplayString(stats.value.active || 0) + ")", 1),
                createBaseVNode("option", _hoisted_9, "Pending (" + toDisplayString(stats.value.pending || 0) + ")", 1),
                createBaseVNode("option", _hoisted_10, "Completed (" + toDisplayString(stats.value.completed || 0) + ")", 1),
                createBaseVNode("option", _hoisted_11, "Cancelled (" + toDisplayString(stats.value.cancelled || 0) + ")", 1)
              ], 544), [
                [vModelSelect, activeFilter.value]
              ])
            ])
          ]),
          createBaseVNode("div", _hoisted_12, [
            loading.value ? (openBlock(), createElementBlock("div", _hoisted_13, [
              createVNode(unref(RefreshCw), { class: "w-10 h-10 text-emerald-600 animate-spin mb-4" }),
              _cache[13] || (_cache[13] = createBaseVNode("p", { class: "text-slate-500 font-semibold uppercase tracking-wider text-xs animate-pulse" }, "Loading reservations...", -1))
            ])) : bookings.value.length === 0 ? (openBlock(), createElementBlock("div", _hoisted_14, [
              createVNode(unref(Search), { class: "w-10 h-10 text-slate-200 mx-auto mb-4" }),
              _cache[14] || (_cache[14] = createBaseVNode("p", { class: "text-xs font-bold uppercase tracking-widest text-slate-400" }, "No bookings found", -1))
            ])) : (openBlock(), createElementBlock("div", _hoisted_15, [
              createBaseVNode("table", _hoisted_16, [
                _cache[15] || (_cache[15] = createBaseVNode("thead", { class: "bg-gray-50/50" }, [
                  createBaseVNode("tr", null, [
                    createBaseVNode("th", { class: "px-6 py-4 text-left text-xs font-semibold text-slate-400 uppercase tracking-widest font-bold" }, " Student "),
                    createBaseVNode("th", { class: "px-6 py-4 text-left text-xs font-semibold text-slate-400 uppercase tracking-widest font-bold" }, " Seat & Floor "),
                    createBaseVNode("th", { class: "px-6 py-4 text-left text-xs font-semibold text-slate-400 uppercase tracking-widest font-bold" }, " Date & Time "),
                    createBaseVNode("th", { class: "px-6 py-4 text-left text-xs font-semibold text-slate-400 uppercase tracking-widest font-bold" }, " Status "),
                    createBaseVNode("th", { class: "px-6 py-4 text-left text-xs font-semibold text-slate-400 uppercase tracking-widest font-bold" }, " Activity Logs "),
                    createBaseVNode("th", { class: "px-6 py-4 text-right text-xs font-semibold text-slate-400 uppercase tracking-widest font-bold" }, " Action ")
                  ])
                ], -1)),
                createBaseVNode("tbody", _hoisted_17, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(bookings.value, (booking) => {
                    return openBlock(), createElementBlock("tr", {
                      key: booking.id,
                      class: "hover:bg-slate-50/50 transition-colors"
                    }, [
                      createBaseVNode("td", _hoisted_18, [
                        createBaseVNode("div", _hoisted_19, [
                          createBaseVNode("div", _hoisted_20, [
                            booking.user?.profile_picture ? (openBlock(), createElementBlock("img", {
                              key: 0,
                              src: getProfilePictureUrl(booking.user.profile_picture),
                              class: "w-full h-full object-cover rounded-lg"
                            }, null, 8, _hoisted_21)) : (openBlock(), createElementBlock("div", _hoisted_22, toDisplayString(booking.user?.name?.charAt(0).toUpperCase()), 1))
                          ]),
                          createBaseVNode("div", _hoisted_23, [
                            createBaseVNode("div", _hoisted_24, toDisplayString(booking.user?.name), 1),
                            createBaseVNode("div", _hoisted_25, "CRN: " + toDisplayString(booking.user?.crn || "N/A"), 1)
                          ])
                        ])
                      ]),
                      createBaseVNode("td", _hoisted_26, [
                        createBaseVNode("div", _hoisted_27, [
                          createVNode(unref(MapPin), { class: "w-4 h-4 text-slate-400 flex-shrink-0" }),
                          createBaseVNode("span", _hoisted_28, "Seat " + toDisplayString(booking.seat?.seat_number), 1),
                          createBaseVNode("span", _hoisted_29, toDisplayString(booking.seat?.floor?.name), 1)
                        ])
                      ]),
                      createBaseVNode("td", _hoisted_30, [
                        createBaseVNode("div", _hoisted_31, toDisplayString(formatDate(booking.booking_time)), 1),
                        createBaseVNode("div", _hoisted_32, toDisplayString(formatTime(booking.booking_time)) + " - " + toDisplayString(formatTime(booking.scheduled_end_time)), 1)
                      ]),
                      createBaseVNode("td", _hoisted_33, [
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
                      createBaseVNode("td", _hoisted_34, [
                        booking.status === "checked_in" ? (openBlock(), createElementBlock("div", _hoisted_35, [
                          createVNode(unref(UserCheck), { class: "w-4 h-4 text-emerald-600" }),
                          createBaseVNode("span", null, "Checked-in at " + toDisplayString(formatTime(booking.check_in_time)), 1)
                        ])) : booking.status === "checked_out" ? (openBlock(), createElementBlock("div", _hoisted_36, [
                          createVNode(unref(LogOut), { class: "w-4 h-4 text-red-600" }),
                          createBaseVNode("span", null, "Checked-out at " + toDisplayString(formatTime(booking.check_out_time)), 1)
                        ])) : booking.status === "booked" ? (openBlock(), createElementBlock("div", _hoisted_37, [
                          createVNode(unref(Calendar), { class: "w-4 h-4 text-amber-500" }),
                          createBaseVNode("span", null, "Reserved for " + toDisplayString(formatTime(booking.booking_time)), 1)
                        ])) : (openBlock(), createElementBlock("div", _hoisted_38, " -- "))
                      ]),
                      createBaseVNode("td", _hoisted_39, [
                        createBaseVNode("div", _hoisted_40, [
                          createBaseVNode("button", {
                            onClick: ($event) => viewBookingDetails(booking),
                            class: "p-2 text-slate-655 hover:text-emerald-700 bg-slate-50 hover:bg-emerald-50/50 rounded-xl transition-all border border-slate-100 cursor-pointer shadow-sm",
                            title: "View Details"
                          }, [
                            createVNode(unref(Eye), { class: "w-4 h-4" })
                          ], 8, _hoisted_41),
                          booking.status === "booked" ? (openBlock(), createElementBlock("button", {
                            key: 0,
                            onClick: ($event) => handleCheckIn(booking.id),
                            class: "p-2 text-slate-655 hover:text-emerald-700 bg-slate-50 hover:bg-emerald-50/50 rounded-xl transition-all border border-slate-100 cursor-pointer shadow-sm",
                            title: "Check In"
                          }, [
                            createVNode(unref(UserCheck), { class: "w-4 h-4" })
                          ], 8, _hoisted_42)) : createCommentVNode("", true),
                          booking.status === "checked_in" ? (openBlock(), createElementBlock("button", {
                            key: 1,
                            onClick: ($event) => handleCheckOut(booking.id),
                            class: "p-2 text-slate-655 hover:text-red-700 bg-slate-50 hover:bg-red-100/50 rounded-xl transition-all border border-slate-100 cursor-pointer shadow-sm",
                            title: "Check Out"
                          }, [
                            createVNode(unref(LogOut), { class: "w-4 h-4" })
                          ], 8, _hoisted_43)) : createCommentVNode("", true),
                          booking.status === "booked" ? (openBlock(), createElementBlock("button", {
                            key: 2,
                            onClick: ($event) => handleCancel(booking.id),
                            class: "p-2 text-red-600 hover:text-red-700 bg-red-50 hover:bg-red-100 border border-red-100/50 rounded-xl shadow-sm transition-all cursor-pointer",
                            title: "Cancel Booking"
                          }, [
                            createVNode(unref(CircleX), { class: "w-4 h-4" })
                          ], 8, _hoisted_44)) : createCommentVNode("", true)
                        ])
                      ])
                    ]);
                  }), 128))
                ])
              ])
            ])),
            bookings.value.length > 0 && pagination.value.last_page > 1 ? (openBlock(), createElementBlock("div", _hoisted_45, [
              createBaseVNode("div", null, " Showing " + toDisplayString(pagination.value.from) + " to " + toDisplayString(pagination.value.to) + " of " + toDisplayString(pagination.value.total) + " reservations ", 1),
              createBaseVNode("div", _hoisted_46, [
                createBaseVNode("button", {
                  onClick: _cache[5] || (_cache[5] = ($event) => changePage(pagination.value.current_page - 1)),
                  disabled: pagination.value.current_page === 1,
                  class: "px-3 py-1.5 border border-slate-200 rounded-lg hover:bg-slate-50 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                }, " Previous ", 8, _hoisted_47),
                createBaseVNode("span", _hoisted_48, toDisplayString(pagination.value.current_page) + " of " + toDisplayString(pagination.value.last_page), 1),
                createBaseVNode("button", {
                  onClick: _cache[6] || (_cache[6] = ($event) => changePage(pagination.value.current_page + 1)),
                  disabled: pagination.value.current_page === pagination.value.last_page,
                  class: "px-3 py-1.5 border border-slate-200 rounded-lg hover:bg-slate-50 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                }, " Next ", 8, _hoisted_49)
              ])
            ])) : createCommentVNode("", true)
          ])
        ])) : activeSubView.value === "override_requests" ? (openBlock(), createElementBlock("div", _hoisted_50, [
          createBaseVNode("div", _hoisted_51, [
            loadingOverrides.value ? (openBlock(), createElementBlock("div", _hoisted_52, [
              createVNode(unref(RefreshCw), { class: "w-10 h-10 text-emerald-600 animate-spin mb-4" }),
              _cache[16] || (_cache[16] = createBaseVNode("p", { class: "text-slate-500 font-semibold uppercase tracking-wider text-xs animate-pulse" }, "Loading override requests...", -1))
            ])) : overrideRequests.value.length === 0 ? (openBlock(), createElementBlock("div", _hoisted_53, [
              createVNode(unref(ShieldAlert), { class: "w-10 h-10 text-slate-200 mx-auto mb-4" }),
              _cache[17] || (_cache[17] = createBaseVNode("p", { class: "text-xs font-bold uppercase tracking-widest text-slate-400" }, "No override requests found", -1))
            ])) : (openBlock(), createElementBlock("div", _hoisted_54, [
              createBaseVNode("table", _hoisted_55, [
                _cache[18] || (_cache[18] = createBaseVNode("thead", { class: "bg-gray-50/50 text-slate-400 font-bold uppercase tracking-wider border-b border-slate-100" }, [
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
                createBaseVNode("tbody", _hoisted_56, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(overrideRequests.value, (req) => {
                    return openBlock(), createElementBlock("tr", {
                      key: req.id,
                      class: "hover:bg-slate-50/50 transition-colors"
                    }, [
                      createBaseVNode("td", _hoisted_57, [
                        createBaseVNode("div", _hoisted_58, [
                          createBaseVNode("div", _hoisted_59, [
                            req.user?.profile_picture ? (openBlock(), createElementBlock("img", {
                              key: 0,
                              src: getProfilePictureUrl(req.user.profile_picture),
                              class: "w-full h-full object-cover rounded-lg"
                            }, null, 8, _hoisted_60)) : (openBlock(), createElementBlock("div", _hoisted_61, toDisplayString(req.user?.name?.charAt(0).toUpperCase()), 1))
                          ]),
                          createBaseVNode("div", _hoisted_62, [
                            createBaseVNode("div", _hoisted_63, toDisplayString(req.user?.name), 1),
                            createBaseVNode("div", _hoisted_64, "CRN: " + toDisplayString(req.user?.crn || "N/A"), 1)
                          ])
                        ])
                      ]),
                      createBaseVNode("td", _hoisted_65, [
                        createBaseVNode("span", _hoisted_66, toDisplayString(req.user?.ca_level || "N/A"), 1)
                      ]),
                      createBaseVNode("td", _hoisted_67, [
                        createBaseVNode("div", _hoisted_68, [
                          createBaseVNode("div", _hoisted_69, [
                            createVNode(unref(MapPin), { class: "w-4 h-4 text-emerald-600 flex-shrink-0" }),
                            createBaseVNode("span", _hoisted_70, "Seat " + toDisplayString(req.seat?.seat_number), 1),
                            createBaseVNode("span", _hoisted_71, toDisplayString(req.seat?.floor?.name), 1)
                          ]),
                          createBaseVNode("div", _hoisted_72, [
                            createBaseVNode("span", _hoisted_73, toDisplayString(req.seat?.seat_section?.name || "Section N/A"), 1),
                            req.seat?.seat_subsection?.name ? (openBlock(), createElementBlock("span", _hoisted_74, " • " + toDisplayString(req.seat?.seat_subsection?.name), 1)) : createCommentVNode("", true)
                          ])
                        ])
                      ]),
                      createBaseVNode("td", _hoisted_75, [
                        createBaseVNode("span", _hoisted_76, toDisplayString(req.seat?.seat_subsection?.academic_level && req.seat?.seat_subsection?.academic_level !== "all" ? req.seat.seat_subsection.academic_level : req.seat?.seat_section?.academic_level || "All Levels"), 1)
                      ]),
                      createBaseVNode("td", _hoisted_77, toDisplayString(formatDate(req.created_at)), 1),
                      createBaseVNode("td", _hoisted_78, [
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
                      createBaseVNode("td", _hoisted_79, [
                        req.status === "pending" ? (openBlock(), createElementBlock("div", _hoisted_80, [
                          createBaseVNode("button", {
                            onClick: ($event) => handleOverrideAction(req.id, "approve"),
                            class: "px-3 py-1.5 text-xs font-bold text-white bg-emerald-700 hover:bg-emerald-800 rounded-lg shadow-sm cursor-pointer transition-all"
                          }, " Approve ", 8, _hoisted_81),
                          createBaseVNode("button", {
                            onClick: ($event) => handleOverrideAction(req.id, "reject"),
                            class: "px-3 py-1.5 text-xs font-bold text-red-700 bg-red-50 hover:bg-red-100 border border-red-150 rounded-lg shadow-sm cursor-pointer transition-all"
                          }, " Reject ", 8, _hoisted_82)
                        ])) : (openBlock(), createElementBlock("div", _hoisted_83, " Processed "))
                      ])
                    ]);
                  }), 128))
                ])
              ])
            ]))
          ])
        ])) : createCommentVNode("", true),
        selectedBooking.value ? (openBlock(), createElementBlock("div", _hoisted_84, [
          createBaseVNode("div", _hoisted_85, [
            createBaseVNode("div", _hoisted_86, [
              createBaseVNode("div", _hoisted_87, [
                createBaseVNode("div", _hoisted_88, [
                  createVNode(unref(Calendar), { class: "w-5 h-5" })
                ]),
                createBaseVNode("div", null, [
                  _cache[19] || (_cache[19] = createBaseVNode("h2", { class: "text-base font-bold text-slate-800 leading-snug" }, "Booking Details", -1)),
                  createBaseVNode("p", _hoisted_89, "Booking identification #" + toDisplayString(selectedBooking.value.id), 1)
                ])
              ]),
              createBaseVNode("button", {
                onClick: _cache[7] || (_cache[7] = ($event) => selectedBooking.value = null),
                class: "p-2 hover:bg-slate-50 rounded-lg transition-colors cursor-pointer"
              }, [
                createVNode(unref(X), { class: "w-5 h-5 text-slate-400" })
              ])
            ]),
            createBaseVNode("div", _hoisted_90, [
              createBaseVNode("div", _hoisted_91, [
                createBaseVNode("div", _hoisted_92, [
                  selectedBooking.value.user?.profile_picture ? (openBlock(), createElementBlock("img", {
                    key: 0,
                    src: getProfilePictureUrl(selectedBooking.value.user.profile_picture),
                    class: "w-full h-full object-cover rounded-xl"
                  }, null, 8, _hoisted_93)) : (openBlock(), createElementBlock("div", _hoisted_94, toDisplayString(selectedBooking.value.user?.name?.charAt(0).toUpperCase()), 1))
                ]),
                createBaseVNode("div", null, [
                  createBaseVNode("h4", _hoisted_95, toDisplayString(selectedBooking.value.user?.name || "N/A"), 1),
                  createBaseVNode("p", _hoisted_96, toDisplayString(selectedBooking.value.user?.email || "N/A"), 1),
                  createBaseVNode("p", _hoisted_97, "CRN: " + toDisplayString(selectedBooking.value.user?.crn || "N/A"), 1)
                ])
              ]),
              createBaseVNode("div", _hoisted_98, [
                createBaseVNode("div", null, [
                  _cache[20] || (_cache[20] = createBaseVNode("span", { class: "text-slate-400 font-semibold block text-[9px] uppercase tracking-wider" }, "Seat Assigned", -1)),
                  createBaseVNode("span", _hoisted_99, "Seat " + toDisplayString(selectedBooking.value.seat?.seat_number || "N/A"), 1)
                ]),
                createBaseVNode("div", null, [
                  _cache[21] || (_cache[21] = createBaseVNode("span", { class: "text-slate-400 font-semibold block text-[9px] uppercase tracking-wider" }, "Location", -1)),
                  createBaseVNode("span", _hoisted_100, toDisplayString(selectedBooking.value.seat?.floor?.name || "N/A"), 1)
                ])
              ]),
              createBaseVNode("div", _hoisted_101, [
                createBaseVNode("div", null, [
                  _cache[22] || (_cache[22] = createBaseVNode("span", { class: "text-slate-400 font-semibold block text-[9px] uppercase tracking-wider" }, "Reservation Date", -1)),
                  createBaseVNode("span", _hoisted_102, toDisplayString(formatDate(selectedBooking.value.booking_time)), 1)
                ]),
                createBaseVNode("div", null, [
                  _cache[23] || (_cache[23] = createBaseVNode("span", { class: "text-slate-400 font-semibold block text-[9px] uppercase tracking-wider" }, "Scheduled Window", -1)),
                  createBaseVNode("span", _hoisted_103, toDisplayString(formatTime(selectedBooking.value.booking_time)) + " - " + toDisplayString(formatTime(selectedBooking.value.scheduled_end_time)), 1)
                ])
              ]),
              createBaseVNode("div", _hoisted_104, [
                _cache[26] || (_cache[26] = createBaseVNode("span", { class: "text-slate-400 font-semibold block text-[9px] uppercase tracking-wider" }, "Status & Timings", -1)),
                createBaseVNode("div", null, [
                  createBaseVNode("span", {
                    class: normalizeClass([
                      "text-[9px] font-semibold px-2.5 py-1 rounded-full uppercase tracking-wider border bg-white",
                      selectedBooking.value.status === "checked_in" ? "bg-green-50 text-green-700 border-green-200" : selectedBooking.value.status === "booked" ? "bg-orange-50 text-orange-700 border-orange-100" : selectedBooking.value.status === "checked_out" ? "bg-blue-50 text-blue-700 border-blue-100" : selectedBooking.value.status === "cancelled" ? "bg-red-50 text-red-700 border-red-200" : "bg-slate-50 border-slate-200 text-slate-505"
                    ])
                  }, toDisplayString(formatStatus(selectedBooking.value.status)), 3)
                ]),
                createBaseVNode("div", _hoisted_105, [
                  selectedBooking.value.check_in_time ? (openBlock(), createElementBlock("p", _hoisted_106, [
                    _cache[24] || (_cache[24] = createTextVNode("Checked In: ", -1)),
                    createBaseVNode("span", _hoisted_107, toDisplayString(formatTime(selectedBooking.value.check_in_time)), 1)
                  ])) : createCommentVNode("", true),
                  selectedBooking.value.check_out_time ? (openBlock(), createElementBlock("p", _hoisted_108, [
                    _cache[25] || (_cache[25] = createTextVNode("Checked Out: ", -1)),
                    createBaseVNode("span", _hoisted_109, toDisplayString(formatTime(selectedBooking.value.check_out_time)), 1)
                  ])) : createCommentVNode("", true)
                ])
              ]),
              createBaseVNode("div", _hoisted_110, [
                selectedBooking.value.status === "booked" ? (openBlock(), createElementBlock("button", {
                  key: 0,
                  onClick: _cache[8] || (_cache[8] = ($event) => {
                    handleCheckIn(selectedBooking.value.id);
                    selectedBooking.value = null;
                  }),
                  class: "flex-1 px-4 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl text-xs font-bold cursor-pointer transition-colors shadow-sm"
                }, " Check In Student ")) : createCommentVNode("", true),
                selectedBooking.value.status === "checked_in" ? (openBlock(), createElementBlock("button", {
                  key: 1,
                  onClick: _cache[9] || (_cache[9] = ($event) => {
                    handleCheckOut(selectedBooking.value.id);
                    selectedBooking.value = null;
                  }),
                  class: "flex-1 px-4 py-2.5 bg-red-500 hover:bg-red-750 text-white rounded-xl text-xs font-bold cursor-pointer transition-colors shadow-sm"
                }, " Check Out Student ")) : createCommentVNode("", true),
                createBaseVNode("button", {
                  type: "button",
                  onClick: _cache[10] || (_cache[10] = ($event) => selectedBooking.value = null),
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
const BookingsPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-1b358e15"]]);
export {
  BookingsPage as default
};
