import { d as defineComponent, r as ref, E as watch, o as onMounted, c as computed, x as useAuth, H as onUnmounted, a as createElementBlock, b as createBaseVNode, j as createCommentVNode, f as createVNode, w as withCtx, g as resolveComponent, u as unref, t as toDisplayString, n as normalizeClass, i as createTextVNode, h as createBlock, F as Fragment, p as withDirectives, D as vModelSelect, k as renderList, v as vModelText, C as useRouter, G as useRoute, L as studentAPI, l as openBlock } from "./main-BGbL_8Ba.js";
import { _ as _sfc_main$1, S as SeatLayoutRenderer } from "./SeatLayoutRenderer-DKfRoJ-Y.js";
import { u as useSwal } from "./useSwal-pQW_XkRe.js";
import { u as useGeolocation } from "./useGeolocation-CEzCH0iM.js";
import { C as ChevronRight } from "./chevron-right-CJ29BZct.js";
import { A as Armchair } from "./armchair-enLzRy9P.js";
import { C as CircleCheckBig } from "./circle-check-big-C7p1xlvr.js";
import { U as UserX } from "./user-x-BHFY5IZq.js";
import { C as CircleAlert } from "./circle-alert-CbhTHhAn.js";
import { S as ShieldAlert } from "./shield-alert-DwdheLh4.js";
import { C as Clock } from "./clock-Cir2UmjW.js";
import { Z as Zap } from "./zap-DwN4yWwn.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
/* empty css               */
import "./user-C1TGaPSp.js";
import "./createLucideIcon-v8VVJu1z.js";
import "./monitor-cSjE3eN2.js";
import "./panels-top-left-8LZJl8pP.js";
import "./building-2-BD5xFb_R.js";
import "./chevron-down-G9GrT3uG.js";
const _hoisted_1 = {
  key: 0,
  class: "flex flex-col items-center justify-center py-24 space-y-4 font-outfit"
};
const _hoisted_2 = {
  key: 1,
  class: "space-y-6 font-outfit"
};
const _hoisted_3 = { class: "flex flex-col md:flex-row md:items-center justify-between gap-4 text-left" };
const _hoisted_4 = { class: "flex items-center text-xs text-slate-400 font-semibold uppercase tracking-wide mb-1.5" };
const _hoisted_5 = { class: "text-slate-500" };
const _hoisted_6 = { class: "grid grid-cols-1 lg:grid-cols-4 gap-6" };
const _hoisted_7 = { class: "lg:col-span-3" };
const _hoisted_8 = { class: "space-y-6" };
const _hoisted_9 = { class: "bg-white p-5 rounded-2xl shadow-sm border border-slate-100 sticky top-24 text-left" };
const _hoisted_10 = {
  key: 0,
  class: "space-y-5"
};
const _hoisted_11 = { class: "p-3.5 bg-blue-50/50 rounded-xl border border-blue-100/50" };
const _hoisted_12 = { class: "flex items-center mb-1.5" };
const _hoisted_13 = { class: "font-bold text-blue-900 text-sm" };
const _hoisted_14 = { class: "text-[10px] text-blue-600/90 font-semibold uppercase tracking-wide leading-none" };
const _hoisted_15 = {
  key: 0,
  class: "p-3 bg-emerald-50 rounded-xl border border-emerald-200 flex items-center space-x-2"
};
const _hoisted_16 = {
  key: 1,
  class: "p-3.5 bg-red-50 rounded-xl border border-red-100 flex items-start space-x-2.5"
};
const _hoisted_17 = { class: "flex items-start space-x-2" };
const _hoisted_18 = {
  key: 0,
  class: "text-[11px] font-bold text-amber-700 mt-1 m-0"
};
const _hoisted_19 = {
  key: 1,
  class: "text-[11px] font-bold text-rose-700 mt-1 m-0"
};
const _hoisted_20 = {
  key: 2,
  class: "text-[11px] font-bold text-amber-800 mt-1 m-0"
};
const _hoisted_21 = ["disabled"];
const _hoisted_22 = {
  key: 0,
  class: "w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin"
};
const _hoisted_23 = { class: "space-y-4" };
const _hoisted_24 = { class: "flex items-center justify-between mb-1.5" };
const _hoisted_25 = ["disabled"];
const _hoisted_26 = ["value"];
const _hoisted_27 = {
  key: 1,
  class: "space-y-2.5 p-3 bg-slate-50/80 rounded-2xl border border-slate-200/80"
};
const _hoisted_28 = { class: "grid grid-cols-2 gap-2.5" };
const _hoisted_29 = { class: "relative" };
const _hoisted_30 = ["max"];
const _hoisted_31 = { class: "relative" };
const _hoisted_32 = { class: "flex items-center gap-1.5 flex-wrap" };
const _hoisted_33 = { class: "text-[11px] font-bold text-blue-900 bg-white p-2 rounded-xl border border-blue-100 flex items-center justify-between shadow-2xs" };
const _hoisted_34 = { class: "text-blue-700 font-bold" };
const _hoisted_35 = {
  key: 0,
  class: "p-3 bg-slate-50 border border-slate-100 rounded-xl flex items-start space-x-2"
};
const _hoisted_36 = { class: "text-[10px] text-slate-800 font-medium leading-normal m-0" };
const _hoisted_37 = {
  key: 1,
  class: "p-3 bg-red-50 border border-red-100 rounded-xl flex items-start space-x-2"
};
const _hoisted_38 = { class: "grid grid-cols-2 gap-3" };
const _hoisted_39 = ["min", "max"];
const _hoisted_40 = { class: "text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-1.5 flex items-center justify-between" };
const _hoisted_41 = {
  key: 0,
  class: "text-[8.5px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-100 uppercase tracking-tight flex items-center gap-1"
};
const _hoisted_42 = { class: "pt-4 border-t border-slate-100" };
const _hoisted_43 = ["disabled"];
const _hoisted_44 = {
  key: 0,
  class: "w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin"
};
const _hoisted_45 = {
  key: 1,
  class: "space-y-3"
};
const _hoisted_46 = { class: "p-5 bg-gradient-to-br from-slate-50 to-white rounded-xl border border-slate-100 text-center relative overflow-hidden" };
const _hoisted_47 = { class: "flex items-center justify-center space-x-1.5 mb-3.5 leading-none" };
const _hoisted_48 = { class: "text-xl font-black text-slate-800 leading-none" };
const _hoisted_49 = { class: "space-y-3" };
const _hoisted_50 = ["disabled"];
const _hoisted_51 = {
  key: 1,
  class: "w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin"
};
const _hoisted_52 = {
  key: 1,
  class: "text-center py-10"
};
const _hoisted_53 = { class: "w-12 h-12 bg-slate-50 border border-slate-200 rounded-full flex items-center justify-center mx-auto mb-3 text-slate-400 shadow-inner" };
const _hoisted_54 = { class: "bg-orange-50/50 p-5 rounded-2xl border border-orange-100 text-left" };
const _hoisted_55 = { class: "flex items-center mb-2" };
const _hoisted_56 = {
  key: 0,
  class: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
};
const _hoisted_57 = { class: "bg-white rounded-2xl p-6 max-w-sm w-full text-center shadow-2xl border border-slate-100 animate-fade-in" };
const _hoisted_58 = { class: "w-16 h-16 bg-emerald-50 border border-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "SeatBookingPage",
  setup(__props) {
    const route = useRoute();
    const router = useRouter();
    const { showError, showSuccess, showConfirm } = useSwal();
    const { latitude, longitude } = useGeolocation();
    const loading = ref(true);
    const submitting = ref(false);
    const library = ref(null);
    const floors = ref([]);
    const sections = ref([]);
    const seats = ref([]);
    const tables = ref([]);
    const globalTableCapacity = ref(4);
    const loadGlobalTableCapacity = () => {
      try {
        if (library.value?.table_capacity) {
          globalTableCapacity.value = library.value.table_capacity;
          return;
        }
        const saved = localStorage.getItem("smartlib_global_table_capacity") || localStorage.getItem("smartlib_table_capacity");
        if (saved) {
          const parsed = parseInt(saved, 10);
          if ([2, 4, 6, 8, 10, 12, 14, 16].includes(parsed)) {
            globalTableCapacity.value = parsed;
          }
        }
      } catch (e) {
      }
    };
    watch(() => library.value, (newLib) => {
      if (newLib?.table_capacity) {
        globalTableCapacity.value = newLib.table_capacity;
        try {
          localStorage.setItem("smartlib_global_table_capacity", newLib.table_capacity.toString());
        } catch (e) {
        }
      }
    }, { deep: true, immediate: true });
    onMounted(() => {
      loadGlobalTableCapacity();
      window.addEventListener("storage", loadGlobalTableCapacity);
      window.addEventListener("smartlib_table_capacity_changed", loadGlobalTableCapacity);
    });
    const effectiveLayoutMode = computed(() => {
      return localStorage.getItem("smartlib_active_layout_mode") || library.value?.seat_layout_mode || "tables";
    });
    const showSuccessModal = ref(false);
    const selectedSeat = ref(null);
    const bookingDuration = ref(2);
    const isCustomDuration = ref(false);
    const customHours = ref(1);
    const customMinutes = ref(0);
    const maxHoursAllowed = computed(() => {
      return Math.max(0, Math.floor(maxAvailableHours.value));
    });
    const handleDurationChange = (e) => {
      const val = e.target.value;
      if (val === "custom") {
        isCustomDuration.value = true;
        updateCustomDuration();
      } else {
        isCustomDuration.value = false;
      }
    };
    const toggleCustomDuration = () => {
      isCustomDuration.value = !isCustomDuration.value;
      if (isCustomDuration.value) {
        const total = typeof bookingDuration.value === "number" ? bookingDuration.value : parseFloat(String(bookingDuration.value)) || 1;
        customHours.value = Math.floor(total);
        customMinutes.value = Math.round((total - customHours.value) * 60);
        updateCustomDuration();
      } else {
        bookingDuration.value = 1;
      }
    };
    const updateCustomDuration = () => {
      let h = typeof customHours.value === "number" && !isNaN(customHours.value) ? customHours.value : 0;
      let m = typeof customMinutes.value === "number" && !isNaN(customMinutes.value) ? customMinutes.value : 0;
      if (h < 0) h = 0;
      if (m < 0) m = 0;
      if (m > 59) m = 59;
      let total = h + m / 60;
      if (maxAvailableHours.value > 0 && total > maxAvailableHours.value) {
        total = maxAvailableHours.value;
        h = Math.floor(total);
        m = Math.round((total - h) * 60);
        customHours.value = h;
        customMinutes.value = m;
      }
      if (total <= 0) {
        total = 0.25;
      }
      bookingDuration.value = total;
    };
    const { user, isTrialActive } = useAuth();
    const now = ref(/* @__PURE__ */ new Date());
    let timer = null;
    const isManualTime = ref(false);
    const toLocalDateStr = (d) => {
      const pad = (n) => String(n).padStart(2, "0");
      return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
    };
    const toLocalTimeStr = (d) => {
      const pad = (n) => String(n).padStart(2, "0");
      return `${pad(d.getHours())}:${pad(d.getMinutes())}`;
    };
    const selectedDate = ref(toLocalDateStr(/* @__PURE__ */ new Date()));
    const selectedTime = ref(toLocalTimeStr(/* @__PURE__ */ new Date()));
    const updateLiveTime = () => {
      now.value = /* @__PURE__ */ new Date();
      const todayStr = toLocalDateStr(now.value);
      const currentTimeStr = toLocalTimeStr(now.value);
      if (selectedDate.value === todayStr) {
        if (!isManualTime.value || selectedTime.value < currentTimeStr) {
          isManualTime.value = false;
          selectedTime.value = currentTimeStr;
        }
      } else if (selectedDate.value < todayStr) {
        selectedDate.value = todayStr;
        selectedTime.value = currentTimeStr;
        isManualTime.value = false;
      }
    };
    const onDateChange = () => {
      const todayStr = toLocalDateStr(/* @__PURE__ */ new Date());
      if (selectedDate.value < todayStr) {
        selectedDate.value = todayStr;
      }
      if (selectedDate.value === todayStr) {
        const currentTimeStr = toLocalTimeStr(/* @__PURE__ */ new Date());
        if (selectedTime.value <= currentTimeStr) {
          isManualTime.value = false;
          selectedTime.value = currentTimeStr;
        } else {
          isManualTime.value = true;
        }
      } else {
        isManualTime.value = true;
      }
    };
    const onTimeInputChange = () => {
      const todayStr = toLocalDateStr(/* @__PURE__ */ new Date());
      const currentTimeStr = toLocalTimeStr(/* @__PURE__ */ new Date());
      if (selectedDate.value === todayStr) {
        if (selectedTime.value <= currentTimeStr) {
          isManualTime.value = false;
          selectedTime.value = currentTimeStr;
        } else {
          isManualTime.value = true;
        }
      } else {
        isManualTime.value = true;
      }
    };
    const libraryClosingTime = computed(() => {
      if (!library.value?.operating_days) return null;
      const startTime = /* @__PURE__ */ new Date(`${selectedDate.value}T${selectedTime.value}`);
      const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      const dayName = days[startTime.getDay()];
      const operatingHour = library.value.operating_days.find((d) => d.day === dayName);
      if (!operatingHour || !operatingHour.isOpen) return null;
      const [closeH, closeM] = operatingHour.closeTime.split(":").map(Number);
      const closeDate = new Date(startTime);
      closeDate.setHours(closeH, closeM, 0, 0);
      const [openH, openM] = operatingHour.openTime.split(":").map(Number);
      const openDate = new Date(startTime);
      openDate.setHours(openH, openM, 0, 0);
      if (closeDate <= openDate) {
        closeDate.setDate(closeDate.getDate() + 1);
      }
      return closeDate;
    });
    const maxAvailableHours = computed(() => {
      if (!library.value?.operating_days) return 8;
      const startTime = /* @__PURE__ */ new Date(`${selectedDate.value}T${selectedTime.value}`);
      const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      const dayName = days[startTime.getDay()];
      const operatingHour = library.value.operating_days.find((d) => d.day === dayName);
      if (!operatingHour || !operatingHour.isOpen) return 0;
      const [closeH, closeM] = operatingHour.closeTime.split(":").map(Number);
      const closeDate = new Date(startTime);
      closeDate.setHours(closeH, closeM, 0, 0);
      const [openH, openM] = operatingHour.openTime.split(":").map(Number);
      const openDate = new Date(startTime);
      openDate.setHours(openH, openM, 0, 0);
      if (closeDate <= openDate) {
        closeDate.setDate(closeDate.getDate() + 1);
      }
      if (startTime < openDate || startTime >= closeDate) {
        return 0;
      }
      const diffMs = closeDate.getTime() - startTime.getTime();
      return Math.max(0, diffMs / (3600 * 1e3));
    });
    const durationOptions = computed(() => {
      const max = maxAvailableHours.value;
      const standard = [
        { label: "1 Hour", value: 1 },
        { label: "2 Hours", value: 2 },
        { label: "4 Hours", value: 4 },
        { label: "8 Hours", value: 8 }
      ];
      const filtered = standard.filter((opt) => opt.value <= max);
      if (max > 0 && !standard.some((opt) => opt.value === max)) {
        const hours = Math.floor(max);
        const mins = Math.round((max - hours) * 60);
        let label = "";
        if (hours > 0) {
          label = `${hours} Hour${hours > 1 ? "s" : ""}`;
          if (mins > 0) label += ` ${mins} Min`;
        } else {
          label = `${mins} Min`;
        }
        filtered.push({ label: `${label} (Max until Close)`, value: max });
      }
      return filtered.sort((a, b) => a.value - b.value);
    });
    const showClosingTimeNotice = computed(() => {
      return maxAvailableHours.value > 0 && maxAvailableHours.value < 8;
    });
    const formatHours = (hours) => {
      const h = Math.floor(hours);
      const m = Math.round((hours - h) * 60);
      if (h > 0) {
        return `${h} hour${h > 1 ? "s" : ""}${m > 0 ? ` ${m} minutes` : ""}`;
      }
      return `${m} minutes`;
    };
    const formatTimeOnly = (date) => {
      if (!date) return "";
      return date.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true
      });
    };
    watch([maxAvailableHours, bookingDuration], ([newMax, newDuration]) => {
      const numDur = typeof newDuration === "number" ? newDuration : parseFloat(String(newDuration)) || 0;
      if (newMax > 0 && numDur > newMax) {
        bookingDuration.value = newMax;
        if (isCustomDuration.value) {
          customHours.value = Math.floor(newMax);
          customMinutes.value = Math.round((newMax - customHours.value) * 60);
        }
      }
    });
    const minDate = computed(() => toLocalDateStr(/* @__PURE__ */ new Date()));
    const maxDate = computed(() => {
      const today = /* @__PURE__ */ new Date();
      if (!user.value) return toLocalDateStr(today);
      let allowedDays = 0;
      if (user.value.active_subscription?.subscription_plan) {
        const planDays = user.value.active_subscription.subscription_plan.advance_booking_days;
        if (planDays === -1) {
          const nextYear = new Date(today);
          nextYear.setFullYear(today.getFullYear() + 1);
          return toLocalDateStr(nextYear);
        }
        allowedDays = planDays;
      } else if (isTrialActive.value) {
        allowedDays = 0;
      }
      const max = new Date(today);
      max.setDate(today.getDate() + allowedDays);
      return toLocalDateStr(max);
    });
    const userOverrideRequests = ref([]);
    const fetchSeats = async (isSilent = false) => {
      if (!isSilent) loading.value = true;
      try {
        const id = parseInt(route.params.libraryId);
        const response = await studentAPI.getSeats(id);
        library.value = response.library;
        floors.value = response.floors;
        sections.value = response.sections;
        seats.value = response.seats;
        tables.value = response.tables || [];
        try {
          const overrides = await studentAPI.getStudentOverrideRequests();
          userOverrideRequests.value = overrides || [];
        } catch (oErr) {
          console.error("Error fetching student override requests:", oErr);
        }
      } catch (error) {
        console.error("Failed to fetch seats:", error);
      } finally {
        if (!isSilent) loading.value = false;
      }
    };
    const getSeatOverrideStatus = (seatId) => {
      const req = userOverrideRequests.value.find((r) => r.seat_id === seatId);
      return req ? req.status : null;
    };
    const getFloorName = (seatOrId) => {
      if (!seatOrId) return floors.value[0]?.name || "1st Floor";
      const floorId = typeof seatOrId === "object" ? seatOrId.floor_id : seatOrId;
      if (floorId) {
        const found = floors.value.find((f) => f.id === floorId);
        if (found) return found.name;
      }
      if (typeof seatOrId === "object" && seatOrId.section_id) {
        const sec = sections.value.find((s) => s.id === seatOrId.section_id);
        if (sec && sec.floor_id) {
          const found = floors.value.find((f) => f.id === sec.floor_id);
          if (found) return found.name;
        }
      }
      return floors.value[0]?.name || "1st Floor";
    };
    const getSectionName = (id) => sections.value.find((s) => s.id === id)?.name || "";
    const getSubsectionName = (seat) => {
      if (!seat?.subsection_id) return "";
      const section = sections.value.find((s) => s.id === seat.section_id);
      const sub = section?.subsections?.find((s) => s.id === seat.subsection_id);
      return sub ? sub.name : "";
    };
    const isGenderMismatch = (seat) => {
      const section = sections.value.find((s) => s.id === seat.section_id);
      if (!section) return false;
      const sub = section.subsections?.find((s) => s.id === seat.subsection_id);
      let secGender = sub?.gender && sub.gender !== "mixed" ? String(sub.gender).toLowerCase().trim() : section.gender && section.gender !== "mixed" ? String(section.gender).toLowerCase().trim() : "mixed";
      const combinedName = `${section.name || ""} ${sub?.name || ""}`.toLowerCase();
      if (combinedName.includes("girls") || combinedName.includes("girl") || combinedName.includes("female") || combinedName.includes("women")) {
        secGender = "female";
      } else if (combinedName.includes("boys") || combinedName.includes("boy") || combinedName.includes("male") || combinedName.includes("men")) {
        secGender = "male";
      }
      if (secGender === "mixed" || secGender === "all") return false;
      const studentUser = user.value;
      const rawGender = studentUser?.gender || "male";
      const userGender = String(rawGender).toLowerCase().trim();
      const isMaleSection = ["male", "boys", "boy", "men"].includes(secGender);
      const isFemaleSection = ["female", "girls", "girl", "women"].includes(secGender);
      const isMaleUser = ["male", "boys", "boy", "men"].includes(userGender);
      const isFemaleUser = ["female", "girls", "girl", "women"].includes(userGender);
      if (isMaleSection && !isMaleUser) return true;
      if (isFemaleSection && !isFemaleUser) return true;
      return false;
    };
    const isLevelMismatch = (seat) => {
      if (!seat) return false;
      if (getSeatOverrideStatus(seat.id) === "approved") {
        return false;
      }
      const section = sections.value.find((s) => s.id === seat.section_id);
      const sub = section?.subsections?.find((s) => s.id === seat.subsection_id);
      const requiredLevel = sub?.academic_level && sub.academic_level !== "all" ? sub.academic_level : section?.academic_level !== "all" ? section?.academic_level : null;
      if (!requiredLevel) return false;
      const studentUser = user.value;
      if (!studentUser || !studentUser.ca_level) return true;
      return studentUser.ca_level !== requiredLevel;
    };
    const getSectionLevelName = (seat) => {
      if (!seat) return "All Levels";
      const section = sections.value.find((s) => s.id === seat.section_id);
      const sub = section?.subsections?.find((s) => s.id === seat.subsection_id);
      if (sub?.academic_level && sub.academic_level !== "all") return sub.academic_level;
      return section?.academic_level || "All Levels";
    };
    const getSeatLocationSummary = (seat) => {
      if (!seat) return "";
      const floorName = getFloorName(seat);
      const secName = getSectionName(seat.section_id);
      const subName = getSubsectionName(seat);
      const levelName = getSectionLevelName(seat);
      const parts = [floorName, secName];
      if (subName) {
        parts.push(subName);
      }
      if (levelName && levelName.toLowerCase() !== "all levels") {
        const isLevelInSub = subName && subName.toLowerCase().includes(levelName.toLowerCase());
        const isLevelInSec = secName && secName.toLowerCase().includes(levelName.toLowerCase());
        if (!isLevelInSub && !isLevelInSec) {
          parts.push(levelName);
        }
      }
      return parts.filter(Boolean).join(" • ");
    };
    const handleSeatClick = (seat) => {
      if (seat.status !== "available" && seat.status !== "free_soon") {
        showError("Seat Unavailable", "You can only select seats that are Available or Free Soon.");
        return;
      }
      selectedSeat.value = selectedSeat.value?.id === seat.id ? null : seat;
    };
    const confirmBooking = async () => {
      if (!selectedSeat.value) return;
      const confirmNow = /* @__PURE__ */ new Date();
      const todayStr = toLocalDateStr(confirmNow);
      const currentTimeStr = toLocalTimeStr(confirmNow);
      let startTime;
      if (selectedDate.value === todayStr) {
        const chosenTime = /* @__PURE__ */ new Date(`${selectedDate.value}T${selectedTime.value}`);
        if (!isManualTime.value || chosenTime.getTime() <= confirmNow.getTime() + 6e4) {
          startTime = confirmNow;
          selectedTime.value = currentTimeStr;
          isManualTime.value = false;
        } else {
          startTime = chosenTime;
        }
      } else if (selectedDate.value < todayStr) {
        selectedDate.value = todayStr;
        selectedTime.value = currentTimeStr;
        isManualTime.value = false;
        startTime = confirmNow;
      } else {
        startTime = /* @__PURE__ */ new Date(`${selectedDate.value}T${selectedTime.value}`);
      }
      if (startTime.getTime() < confirmNow.getTime() - 6e4) {
        startTime = confirmNow;
        selectedDate.value = todayStr;
        selectedTime.value = currentTimeStr;
        isManualTime.value = false;
      }
      const durationInHours = typeof bookingDuration.value === "number" ? bookingDuration.value : parseFloat(String(bookingDuration.value)) || 1;
      const endTime = new Date(startTime.getTime() + durationInHours * 60 * 60 * 1e3);
      const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      const dayName = days[startTime.getDay()];
      const operatingHour = library.value?.operating_days?.find((d) => d.day === dayName);
      if (!operatingHour || !operatingHour.isOpen) {
        showError("Library Closed", `The library is closed on ${dayName}s. Please select another day.`);
        return;
      }
      const [openH, openM] = operatingHour.openTime.split(":").map(Number);
      const [closeH, closeM] = operatingHour.closeTime.split(":").map(Number);
      const openDate = new Date(startTime);
      openDate.setHours(openH, openM, 0, 0);
      const closeDate = new Date(startTime);
      closeDate.setHours(closeH, closeM, 0, 0);
      if (closeDate <= openDate) {
        closeDate.setDate(closeDate.getDate() + 1);
      }
      if (startTime < openDate || startTime >= closeDate) {
        showError("Outside Operation Hours", `This library is only open from ${operatingHour.openTime} to ${operatingHour.closeTime} on ${dayName}s.`);
        return;
      }
      let actualEndTime = endTime;
      if (actualEndTime > closeDate) {
        actualEndTime = closeDate;
      }
      submitting.value = true;
      try {
        const formatLocalDatetime = (d) => {
          const pad = (n) => String(n).padStart(2, "0");
          return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
        };
        await studentAPI.createBooking({
          seat_id: selectedSeat.value.id,
          library_id: library.value.id,
          booking_time: formatLocalDatetime(startTime),
          scheduled_end_time: formatLocalDatetime(actualEndTime),
          latitude: latitude.value,
          longitude: longitude.value
        });
        showSuccessModal.value = true;
      } catch (error) {
        console.error("Booking failed:", error);
        if (error.response?.status === 403 && error.response?.data?.restricted) {
          const data = error.response.data;
          if (data.can_request_override) {
            const confirmRequest = await showConfirm(
              "Seat Restricted",
              `${data.message} Since all seats for your level (${data.user_level}) are currently occupied, you can submit an override request to the librarian.`,
              "Request Override"
            );
            if (confirmRequest) {
              submitting.value = true;
              try {
                await studentAPI.requestOverride(selectedSeat.value.id);
                showSuccess("Request Sent", "Your override request has been submitted to the librarian for approval.");
              } catch (reqErr) {
                showError("Request Failed", reqErr.response?.data?.message || "Failed to submit override request.");
              } finally {
                submitting.value = false;
              }
            }
          } else {
            showError("Seat Restricted", `${data.message} You cannot request an override because there are still available seats assigned to your level (${data.user_level}).`);
          }
          return;
        }
        const errorMessage = error.response?.data?.message || error.message || "Failed to create booking. Please try again.";
        showError("Booking Failed", errorMessage);
      } finally {
        submitting.value = false;
      }
    };
    const joinQueue = async () => {
      if (!selectedSeat.value) return;
      submitting.value = true;
      try {
        const response = await studentAPI.joinQueue(selectedSeat.value.id);
        showSuccess("Queue Joined", `You are at position #${response.position} in the queue. We'll notify you when the seat is free.`);
        selectedSeat.value = null;
        fetchSeats();
      } catch (error) {
        console.error("Queue joining failed:", error);
        if (error.response?.status === 403 && error.response?.data?.restricted) {
          const data = error.response.data;
          if (data.can_request_override) {
            const confirmRequest = await showConfirm(
              "Seat Restricted",
              `${data.message} Since all seats for your level (${data.user_level}) are currently occupied, you can submit an override request to the librarian.`,
              "Request Override"
            );
            if (confirmRequest) {
              submitting.value = true;
              try {
                await studentAPI.requestOverride(selectedSeat.value.id);
                showSuccess("Request Sent", "Your override request has been submitted to the librarian for approval.");
              } catch (reqErr) {
                showError("Request Failed", reqErr.response?.data?.message || "Failed to submit override request.");
              } finally {
                submitting.value = false;
              }
            }
          } else {
            showError("Seat Restricted", `${data.message} You cannot request an override because there are still available seats assigned to your level (${data.user_level}).`);
          }
          return;
        }
        const errorMessage = error.response?.data?.message || error.message || "Could not join the queue.";
        showError("Queue Error", errorMessage);
      } finally {
        submitting.value = false;
      }
    };
    const sendOverrideRequest = async () => {
      if (!selectedSeat.value) return;
      submitting.value = true;
      try {
        await studentAPI.requestOverride(selectedSeat.value.id);
        showSuccess("Override Request Sent!", "Your request has been submitted to the librarian for approval.");
        const overrides = await studentAPI.getStudentOverrideRequests();
        userOverrideRequests.value = overrides || [];
      } catch (reqErr) {
        showError("Request Failed", reqErr.response?.data?.message || "Failed to submit override request.");
      } finally {
        submitting.value = false;
      }
    };
    const goToBookings = () => {
      router.push("/student/my-bookings");
    };
    let seatsPollTimer = null;
    onMounted(() => {
      fetchSeats();
      timer = setInterval(() => {
        updateLiveTime();
      }, 1e3);
      seatsPollTimer = setInterval(() => {
        fetchSeats(true);
      }, 5e3);
    });
    onUnmounted(() => {
      if (timer) clearInterval(timer);
      if (seatsPollTimer) clearInterval(seatsPollTimer);
    });
    return (_ctx, _cache) => {
      const _component_router_link = resolveComponent("router-link");
      return loading.value ? (openBlock(), createElementBlock("div", _hoisted_1, [..._cache[10] || (_cache[10] = [
        createBaseVNode("div", { class: "animate-spin rounded-full h-10 w-10 border-2 border-blue-600 border-t-transparent" }, null, -1),
        createBaseVNode("p", { class: "text-xs font-semibold text-slate-400 uppercase tracking-wider animate-pulse" }, "Loading seat layout...", -1)
      ])])) : (openBlock(), createElementBlock("div", _hoisted_2, [
        createBaseVNode("div", _hoisted_3, [
          createBaseVNode("div", null, [
            createBaseVNode("div", _hoisted_4, [
              createVNode(_component_router_link, {
                to: "/student/libraries",
                class: "hover:text-blue-650 transition-colors"
              }, {
                default: withCtx(() => [..._cache[11] || (_cache[11] = [
                  createTextVNode("Libraries", -1)
                ])]),
                _: 1
              }),
              createVNode(unref(ChevronRight), { class: "w-3.5 h-3.5 mx-1 text-slate-300" }),
              createBaseVNode("span", _hoisted_5, toDisplayString(library.value?.name), 1)
            ]),
            _cache[12] || (_cache[12] = createBaseVNode("h1", { class: "text-xl font-bold text-slate-800 leading-none" }, "Select Your Seat", -1))
          ]),
          createVNode(_sfc_main$1)
        ]),
        createBaseVNode("div", _hoisted_6, [
          createBaseVNode("div", _hoisted_7, [
            createVNode(SeatLayoutRenderer, {
              seats: seats.value,
              floors: floors.value,
              sections: sections.value,
              tables: tables.value,
              "selected-seat": selectedSeat.value,
              "seat-clickable": true,
              draggable: false,
              "layout-mode": effectiveLayoutMode.value,
              "tables-per-row": 4,
              "table-capacity": globalTableCapacity.value,
              "show-legend": false,
              onSeatClick: handleSeatClick
            }, null, 8, ["seats", "floors", "sections", "tables", "selected-seat", "layout-mode", "table-capacity"])
          ]),
          createBaseVNode("div", _hoisted_8, [
            createBaseVNode("div", _hoisted_9, [
              _cache[32] || (_cache[32] = createBaseVNode("h3", { class: "text-sm font-bold text-slate-700 uppercase tracking-wider mb-5" }, "Booking Summary", -1)),
              selectedSeat.value ? (openBlock(), createElementBlock("div", _hoisted_10, [
                createBaseVNode("div", _hoisted_11, [
                  createBaseVNode("div", _hoisted_12, [
                    createVNode(unref(Armchair), { class: "w-4.5 h-4.5 text-blue-600 mr-2" }),
                    createBaseVNode("span", _hoisted_13, "Seat " + toDisplayString(selectedSeat.value.seat_number), 1)
                  ]),
                  createBaseVNode("p", _hoisted_14, toDisplayString(getSeatLocationSummary(selectedSeat.value)), 1)
                ]),
                getSeatOverrideStatus(selectedSeat.value.id) === "approved" ? (openBlock(), createElementBlock("div", _hoisted_15, [
                  createVNode(unref(CircleCheckBig), { class: "w-4.5 h-4.5 text-emerald-600 flex-shrink-0" }),
                  _cache[13] || (_cache[13] = createBaseVNode("p", { class: "text-[11px] text-emerald-900 font-bold leading-tight m-0" }, " Override Request Approved! You can now reserve this seat for today. ", -1))
                ])) : createCommentVNode("", true),
                isGenderMismatch(selectedSeat.value) ? (openBlock(), createElementBlock("div", _hoisted_16, [
                  createVNode(unref(UserX), { class: "w-4.5 h-4.5 text-red-500 flex-shrink-0 mt-0.5" }),
                  _cache[14] || (_cache[14] = createBaseVNode("div", null, [
                    createBaseVNode("p", { class: "text-xs text-red-700 font-bold leading-tight" }, "Gender Restriction"),
                    createBaseVNode("p", { class: "text-[11px] text-red-600 font-medium leading-normal mt-0.5 m-0" }, "This section is restricted to another gender. ")
                  ], -1))
                ])) : isLevelMismatch(selectedSeat.value) ? (openBlock(), createElementBlock("div", {
                  key: 2,
                  class: normalizeClass(["p-4 rounded-2xl border space-y-3", [
                    getSeatOverrideStatus(selectedSeat.value.id) === "pending" ? "bg-amber-50/90 border-amber-200/60" : getSeatOverrideStatus(selectedSeat.value.id) === "rejected" ? "bg-rose-50/90 border-rose-200/60" : "bg-amber-50/90 border-amber-200/60"
                  ]])
                }, [
                  createBaseVNode("div", _hoisted_17, [
                    createVNode(unref(CircleAlert), {
                      class: normalizeClass(["w-4.5 h-4.5 flex-shrink-0 mt-0.5", [
                        getSeatOverrideStatus(selectedSeat.value.id) === "rejected" ? "text-rose-600" : "text-amber-600"
                      ]])
                    }, null, 8, ["class"]),
                    createBaseVNode("div", null, [
                      createBaseVNode("p", {
                        class: normalizeClass(["text-xs font-medium leading-normal m-0", [
                          getSeatOverrideStatus(selectedSeat.value.id) === "rejected" ? "text-rose-900" : "text-amber-900"
                        ]])
                      }, [
                        _cache[15] || (_cache[15] = createTextVNode(" This seat is restricted to ", -1)),
                        createBaseVNode("span", {
                          class: normalizeClass(["font-bold uppercase", [getSeatOverrideStatus(selectedSeat.value.id) === "rejected" ? "text-rose-800" : "text-amber-800"]])
                        }, toDisplayString(getSectionLevelName(selectedSeat.value)), 3),
                        _cache[16] || (_cache[16] = createTextVNode(" students. ", -1))
                      ], 2),
                      getSeatOverrideStatus(selectedSeat.value.id) === "pending" ? (openBlock(), createElementBlock("p", _hoisted_18, " ⏳ Request Pending: Your request is currently under librarian review. ")) : getSeatOverrideStatus(selectedSeat.value.id) === "rejected" ? (openBlock(), createElementBlock("p", _hoisted_19, " ❌ Request Rejected: The librarian rejected your override request for this seat. ")) : userOverrideRequests.value.length > 0 ? (openBlock(), createElementBlock("p", _hoisted_20, " You have already submitted an override request (" + toDisplayString(userOverrideRequests.value[0]?.seat?.seat_number || userOverrideRequests.value[0]?.seat_id) + "). ", 1)) : createCommentVNode("", true)
                    ])
                  ]),
                  userOverrideRequests.value.length === 0 ? (openBlock(), createElementBlock("button", {
                    key: 0,
                    onClick: sendOverrideRequest,
                    disabled: submitting.value,
                    class: "w-full py-2.5 px-3 bg-amber-600 hover:bg-amber-700 text-white rounded-xl text-xs font-bold transition-all shadow-md shadow-amber-600/10 flex items-center justify-center space-x-1.5 cursor-pointer disabled:opacity-50 active:scale-98"
                  }, [
                    submitting.value ? (openBlock(), createElementBlock("span", _hoisted_22)) : (openBlock(), createBlock(unref(ShieldAlert), {
                      key: 1,
                      class: "w-4 h-4"
                    })),
                    createBaseVNode("span", null, toDisplayString(submitting.value ? "Submitting Request..." : "Request Override"), 1)
                  ], 8, _hoisted_21)) : createCommentVNode("", true)
                ], 2)) : !isGenderMismatch(selectedSeat.value) ? (openBlock(), createElementBlock(Fragment, { key: 3 }, [
                  createBaseVNode("div", _hoisted_23, [
                    createBaseVNode("div", null, [
                      createBaseVNode("div", _hoisted_24, [
                        _cache[17] || (_cache[17] = createBaseVNode("label", { class: "text-[10px] font-semibold text-slate-400 uppercase tracking-wider block" }, "Duration", -1)),
                        createBaseVNode("button", {
                          type: "button",
                          onClick: toggleCustomDuration,
                          class: "text-[10px] font-bold text-blue-600 hover:text-blue-800 uppercase tracking-wider underline cursor-pointer"
                        }, toDisplayString(isCustomDuration.value ? "← Presets" : "+ Custom Time"), 1)
                      ]),
                      !isCustomDuration.value ? withDirectives((openBlock(), createElementBlock("select", {
                        key: 0,
                        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => bookingDuration.value = $event),
                        onChange: handleDurationChange,
                        disabled: maxAvailableHours.value === 0,
                        class: "w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all shadow-sm cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                      }, [
                        (openBlock(true), createElementBlock(Fragment, null, renderList(durationOptions.value, (opt) => {
                          return openBlock(), createElementBlock("option", {
                            key: opt.value,
                            value: opt.value
                          }, toDisplayString(opt.label), 9, _hoisted_26);
                        }), 128)),
                        _cache[18] || (_cache[18] = createBaseVNode("option", { value: "custom" }, "Custom Time", -1))
                      ], 40, _hoisted_25)), [
                        [vModelSelect, bookingDuration.value]
                      ]) : (openBlock(), createElementBlock("div", _hoisted_27, [
                        createBaseVNode("div", _hoisted_28, [
                          createBaseVNode("div", null, [
                            _cache[20] || (_cache[20] = createBaseVNode("label", { class: "text-[9.5px] font-bold text-slate-500 uppercase tracking-wider block mb-1" }, "Hours", -1)),
                            createBaseVNode("div", _hoisted_29, [
                              withDirectives(createBaseVNode("input", {
                                type: "number",
                                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => customHours.value = $event),
                                min: "0",
                                max: maxHoursAllowed.value,
                                onInput: updateCustomDuration,
                                class: "w-full p-2 pr-7 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-800 text-center shadow-2xs focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none",
                                placeholder: "0"
                              }, null, 40, _hoisted_30), [
                                [
                                  vModelText,
                                  customHours.value,
                                  void 0,
                                  { number: true }
                                ]
                              ]),
                              _cache[19] || (_cache[19] = createBaseVNode("span", { class: "absolute right-2 top-1/2 -translate-y-1/2 text-[9px] font-bold text-slate-400 pointer-events-none" }, "hrs", -1))
                            ])
                          ]),
                          createBaseVNode("div", null, [
                            _cache[22] || (_cache[22] = createBaseVNode("label", { class: "text-[9.5px] font-bold text-slate-500 uppercase tracking-wider block mb-1" }, "Minutes", -1)),
                            createBaseVNode("div", _hoisted_31, [
                              withDirectives(createBaseVNode("input", {
                                type: "number",
                                "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => customMinutes.value = $event),
                                min: "0",
                                max: "59",
                                step: "5",
                                onInput: updateCustomDuration,
                                class: "w-full p-2 pr-7 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-800 text-center shadow-2xs focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none",
                                placeholder: "0"
                              }, null, 544), [
                                [
                                  vModelText,
                                  customMinutes.value,
                                  void 0,
                                  { number: true }
                                ]
                              ]),
                              _cache[21] || (_cache[21] = createBaseVNode("span", { class: "absolute right-2 top-1/2 -translate-y-1/2 text-[9px] font-bold text-slate-400 pointer-events-none" }, "mins", -1))
                            ])
                          ])
                        ]),
                        createBaseVNode("div", _hoisted_32, [
                          createBaseVNode("button", {
                            type: "button",
                            onClick: _cache[3] || (_cache[3] = ($event) => {
                              customHours.value = 0;
                              customMinutes.value = 30;
                              updateCustomDuration();
                            }),
                            class: "px-2 py-0.5 rounded-lg bg-white border border-slate-200 text-[9.5px] font-bold text-slate-600 hover:bg-slate-100 cursor-pointer"
                          }, " 30m "),
                          createBaseVNode("button", {
                            type: "button",
                            onClick: _cache[4] || (_cache[4] = ($event) => {
                              customHours.value = 1;
                              customMinutes.value = 30;
                              updateCustomDuration();
                            }),
                            class: "px-2 py-0.5 rounded-lg bg-white border border-slate-200 text-[9.5px] font-bold text-slate-600 hover:bg-slate-100 cursor-pointer"
                          }, " 1h 30m "),
                          createBaseVNode("button", {
                            type: "button",
                            onClick: _cache[5] || (_cache[5] = ($event) => {
                              customHours.value = 3;
                              customMinutes.value = 0;
                              updateCustomDuration();
                            }),
                            class: "px-2 py-0.5 rounded-lg bg-white border border-slate-200 text-[9.5px] font-bold text-slate-600 hover:bg-slate-100 cursor-pointer"
                          }, " 3h "),
                          createBaseVNode("button", {
                            type: "button",
                            onClick: _cache[6] || (_cache[6] = ($event) => {
                              customHours.value = Math.floor(maxAvailableHours.value);
                              customMinutes.value = Math.round((maxAvailableHours.value - Math.floor(maxAvailableHours.value)) * 60);
                              updateCustomDuration();
                            }),
                            class: "px-2 py-0.5 rounded-lg bg-blue-50 border border-blue-200 text-[9.5px] font-bold text-blue-700 hover:bg-blue-100 cursor-pointer ml-auto"
                          }, " Max Until Close ")
                        ]),
                        createBaseVNode("div", _hoisted_33, [
                          _cache[23] || (_cache[23] = createBaseVNode("span", { class: "text-slate-500 font-semibold text-[10px] uppercase tracking-wider" }, "Total Duration:", -1)),
                          createBaseVNode("span", _hoisted_34, toDisplayString(formatHours(typeof bookingDuration.value === "number" ? bookingDuration.value : 1)), 1)
                        ])
                      ]))
                    ]),
                    showClosingTimeNotice.value ? (openBlock(), createElementBlock("div", _hoisted_35, [
                      createVNode(unref(CircleAlert), { class: "w-4 h-4 text-slate-600 flex-shrink-0 mt-0.5" }),
                      createBaseVNode("p", _hoisted_36, " You can book this seat for a maximum of " + toDisplayString(formatHours(maxAvailableHours.value)) + " because the library closes at " + toDisplayString(formatTimeOnly(libraryClosingTime.value)) + ". ", 1)
                    ])) : createCommentVNode("", true),
                    maxAvailableHours.value === 0 ? (openBlock(), createElementBlock("div", _hoisted_37, [
                      createVNode(unref(CircleAlert), { class: "w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" }),
                      _cache[24] || (_cache[24] = createBaseVNode("p", { class: "text-[10px] text-red-650 font-medium leading-normal m-0" }, " The library is closed during the selected start time. Please choose another date or time. ", -1))
                    ])) : createCommentVNode("", true),
                    createBaseVNode("div", _hoisted_38, [
                      createBaseVNode("div", null, [
                        _cache[25] || (_cache[25] = createBaseVNode("label", { class: "text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-1.5 flex items-center justify-between" }, [
                          createBaseVNode("span", null, "Date")
                        ], -1)),
                        withDirectives(createBaseVNode("input", {
                          type: "date",
                          "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => selectedDate.value = $event),
                          min: minDate.value,
                          max: maxDate.value,
                          onChange: onDateChange,
                          class: "w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all shadow-sm"
                        }, null, 40, _hoisted_39), [
                          [vModelText, selectedDate.value]
                        ])
                      ]),
                      createBaseVNode("div", null, [
                        createBaseVNode("label", _hoisted_40, [
                          _cache[27] || (_cache[27] = createBaseVNode("span", null, "Start Time", -1)),
                          !isManualTime.value && selectedDate.value === minDate.value ? (openBlock(), createElementBlock("span", _hoisted_41, [..._cache[26] || (_cache[26] = [
                            createBaseVNode("span", { class: "w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" }, null, -1),
                            createTextVNode(" Live ", -1)
                          ])])) : createCommentVNode("", true)
                        ]),
                        withDirectives(createBaseVNode("input", {
                          type: "time",
                          "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => selectedTime.value = $event),
                          onChange: onTimeInputChange,
                          class: "w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all shadow-sm"
                        }, null, 544), [
                          [vModelText, selectedTime.value]
                        ])
                      ])
                    ])
                  ]),
                  createBaseVNode("div", _hoisted_42, [
                    selectedSeat.value.status === "available" ? (openBlock(), createElementBlock("button", {
                      key: 0,
                      onClick: confirmBooking,
                      disabled: submitting.value || maxAvailableHours.value === 0,
                      class: "w-full py-3 bg-blue-600 text-white rounded-xl text-xs font-semibold shadow-md shadow-blue-500/10 hover:opacity-95 active:scale-98 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-1.5"
                    }, [
                      submitting.value ? (openBlock(), createElementBlock("span", _hoisted_44)) : createCommentVNode("", true),
                      createBaseVNode("span", null, toDisplayString(submitting.value ? "Confirming..." : "Confirm Booking"), 1)
                    ], 8, _hoisted_43)) : (openBlock(), createElementBlock("div", _hoisted_45, [
                      createBaseVNode("div", _hoisted_46, [
                        _cache[29] || (_cache[29] = createBaseVNode("div", { class: "absolute top-0 right-0 w-16 h-16 bg-orange-500/5 rounded-full -mr-8 -mt-8" }, null, -1)),
                        _cache[30] || (_cache[30] = createBaseVNode("p", { class: "text-[9px] font-bold uppercase tracking-widest mb-2.5 leading-none text-amber-600" }, "Free Soon", -1)),
                        createBaseVNode("div", _hoisted_47, [
                          createVNode(unref(Clock), { class: "w-4.5 h-4.5 text-orange-500" }),
                          createBaseVNode("p", _hoisted_48, toDisplayString(Math.floor(selectedSeat.value.remaining_minutes / 60)) + "h " + toDisplayString(Math.floor(selectedSeat.value.remaining_minutes % 60)) + "m ", 1)
                        ]),
                        createBaseVNode("div", _hoisted_49, [
                          _cache[28] || (_cache[28] = createBaseVNode("div", { class: "p-2.5 bg-orange-50 border border-orange-100 rounded-xl text-center leading-normal" }, [
                            createBaseVNode("p", { class: "text-[9px] text-orange-700 font-semibold uppercase tracking-wider" }, "Waitlist Active"),
                            createBaseVNode("p", { class: "text-[8.5px] text-orange-655 font-medium uppercase mt-0.5 tracking-tighter" }, "Claim spot to secure this seat next")
                          ], -1)),
                          createBaseVNode("button", {
                            onClick: joinQueue,
                            disabled: submitting.value,
                            class: "w-full py-2.5 bg-orange-500 text-white rounded-xl text-xs font-semibold shadow-md shadow-orange-500/10 hover:bg-orange-600 active:scale-98 transition-all flex items-center justify-center space-x-1.5 disabled:opacity-50 disabled:cursor-not-allowed"
                          }, [
                            !submitting.value ? (openBlock(), createBlock(unref(Zap), {
                              key: 0,
                              class: "w-4 h-4 text-white fill-current"
                            })) : (openBlock(), createElementBlock("span", _hoisted_51)),
                            createBaseVNode("span", null, toDisplayString(submitting.value ? "Claiming..." : "Claim Priority Spot"), 1)
                          ], 8, _hoisted_50),
                          createBaseVNode("button", {
                            onClick: _cache[9] || (_cache[9] = ($event) => unref(router).push("/student/my-queue")),
                            class: "text-[9px] text-blue-600 font-semibold hover:underline uppercase tracking-tight w-full text-center mt-1 block leading-none"
                          }, " View My Waitlists → ")
                        ])
                      ])
                    ]))
                  ])
                ], 64)) : createCommentVNode("", true)
              ])) : (openBlock(), createElementBlock("div", _hoisted_52, [
                createBaseVNode("div", _hoisted_53, [
                  createVNode(unref(Armchair), { class: "w-6 h-6" })
                ]),
                _cache[31] || (_cache[31] = createBaseVNode("p", { class: "text-xs text-slate-400 max-w-[180px] mx-auto leading-normal" }, "Please select a seat from the map to continue", -1))
              ]))
            ]),
            createBaseVNode("div", _hoisted_54, [
              createBaseVNode("div", _hoisted_55, [
                createVNode(unref(Zap), { class: "w-4.5 h-4.5 text-orange-600 mr-2 fill-current" }),
                _cache[33] || (_cache[33] = createBaseVNode("h4", { class: "font-semibold text-orange-900 text-xs uppercase tracking-wide" }, "Quick Tip", -1))
              ]),
              _cache[34] || (_cache[34] = createBaseVNode("p", { class: "text-[11px] text-orange-800/90 leading-relaxed font-semibold" }, " Seats near windows are popular in the morning. Group study areas require all members to check in within 15 minutes. ", -1))
            ])
          ])
        ]),
        showSuccessModal.value ? (openBlock(), createElementBlock("div", _hoisted_56, [
          createBaseVNode("div", _hoisted_57, [
            createBaseVNode("div", _hoisted_58, [
              createVNode(unref(CircleCheckBig), { class: "w-8 h-8" })
            ]),
            _cache[35] || (_cache[35] = createBaseVNode("h2", { class: "text-lg font-semibold text-slate-800 mb-1" }, "Booking Confirmed!", -1)),
            _cache[36] || (_cache[36] = createBaseVNode("p", { class: "text-xs text-slate-400 mb-6 leading-relaxed" }, "Your seat has been reserved. Please check in within 15 minutes of your start time.", -1)),
            createBaseVNode("button", {
              onClick: goToBookings,
              class: "w-full py-3 bg-blue-600 text-white rounded-xl text-xs font-semibold shadow-md shadow-blue-500/10 hover:opacity-95 active:scale-98 transition-all"
            }, " View My Bookings ")
          ])
        ])) : createCommentVNode("", true)
      ]));
    };
  }
});
const SeatBookingPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-ff94280f"]]);
export {
  SeatBookingPage as default
};
