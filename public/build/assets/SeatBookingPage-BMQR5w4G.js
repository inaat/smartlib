import { d as defineComponent, r as ref, x as useAuth, c as computed, G as watch, o as onMounted, a as createElementBlock, b as createBaseVNode, l as createCommentVNode, e as createStaticVNode, f as createVNode, w as withCtx, g as resolveComponent, u as unref, t as toDisplayString, F as Fragment, p as withDirectives, D as vModelSelect, j as renderList, v as vModelText, h as createBlock, C as useRouter, E as useRoute, L as studentAPI, i as createTextVNode, k as openBlock } from "./main-DKJzpCzk.js";
import { _ as _sfc_main$1 } from "./SeatMap.vue_vue_type_script_setup_true_lang-c8kguErQ.js";
import { u as useSwal } from "./useSwal-pQW_XkRe.js";
import { C as ChevronRight } from "./chevron-right-BRYuVDg3.js";
import { A as Armchair } from "./armchair-B9aMc4Sz.js";
import { U as UserX } from "./user-x-DsAA1oIv.js";
import { C as CircleAlert } from "./circle-alert-CKXiS_Iq.js";
import { C as Clock } from "./clock-xlNueMyC.js";
import { Z as Zap } from "./zap-DcK6AMGO.js";
import { C as CircleCheckBig } from "./circle-check-big-D9EkHUxc.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
/* empty css               */
import "./user-Cmc8aXsW.js";
import "./createLucideIcon-TQ5d7bQA.js";
import "./monitor-Dsfpvccc.js";
import "./panels-top-left-C9jwGWRX.js";
import "./building-2-BtkbfY_f.js";
import "./chevron-down-CfHstygd.js";
const _hoisted_1 = {
  key: 0,
  class: "flex flex-col items-center justify-center py-24 space-y-4 font-outfit"
};
const _hoisted_2 = {
  key: 1,
  class: "space-y-6 font-outfit"
};
const _hoisted_3 = { class: "flex flex-col md:flex-row md:items-center justify-between gap-4 text-left" };
const _hoisted_4 = { class: "flex items-center text-xs text-slate-400 font-extrabold uppercase tracking-wide mb-1.5" };
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
const _hoisted_13 = { class: "font-extrabold text-blue-900 text-sm" };
const _hoisted_14 = { class: "text-[10px] text-blue-600/90 font-extrabold uppercase tracking-wide leading-none" };
const _hoisted_15 = { class: "text-[10px] text-blue-500 font-bold mt-1.5 uppercase tracking-wide capitalize leading-none" };
const _hoisted_16 = {
  key: 0,
  class: "p-3 bg-red-50/60 rounded-xl border border-red-100/50 flex items-start space-x-2"
};
const _hoisted_17 = { class: "space-y-4" };
const _hoisted_18 = ["disabled"];
const _hoisted_19 = ["value"];
const _hoisted_20 = {
  key: 0,
  class: "p-3 bg-amber-50 border border-amber-100 rounded-xl flex items-start space-x-2"
};
const _hoisted_21 = { class: "text-[10px] text-amber-800 font-bold leading-normal m-0" };
const _hoisted_22 = {
  key: 1,
  class: "p-3 bg-red-50 border border-red-100 rounded-xl flex items-start space-x-2"
};
const _hoisted_23 = { class: "grid grid-cols-2 gap-3" };
const _hoisted_24 = ["min", "max"];
const _hoisted_25 = { class: "pt-4 border-t border-slate-100" };
const _hoisted_26 = ["disabled"];
const _hoisted_27 = {
  key: 0,
  class: "w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin"
};
const _hoisted_28 = {
  key: 1,
  class: "space-y-3"
};
const _hoisted_29 = { class: "p-5 bg-gradient-to-br from-slate-50 to-white rounded-xl border border-slate-100 text-center relative overflow-hidden" };
const _hoisted_30 = { class: "flex items-center justify-center space-x-1.5 mb-3.5 leading-none" };
const _hoisted_31 = { class: "text-xl font-black text-slate-800 leading-none" };
const _hoisted_32 = { class: "space-y-3" };
const _hoisted_33 = ["disabled"];
const _hoisted_34 = {
  key: 1,
  class: "w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin"
};
const _hoisted_35 = {
  key: 1,
  class: "text-center py-10"
};
const _hoisted_36 = { class: "w-12 h-12 bg-slate-50 border border-slate-200 rounded-full flex items-center justify-center mx-auto mb-3 text-slate-400 shadow-inner" };
const _hoisted_37 = { class: "bg-orange-50/50 p-5 rounded-2xl border border-orange-100 text-left" };
const _hoisted_38 = { class: "flex items-center mb-2" };
const _hoisted_39 = {
  key: 0,
  class: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
};
const _hoisted_40 = { class: "bg-white rounded-2xl p-6 max-w-sm w-full text-center shadow-2xl border border-slate-100 animate-fade-in" };
const _hoisted_41 = { class: "w-16 h-16 bg-emerald-50 border border-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "SeatBookingPage",
  setup(__props) {
    const route = useRoute();
    const router = useRouter();
    const { showError, showSuccess } = useSwal();
    const loading = ref(true);
    const submitting = ref(false);
    const showSuccessModal = ref(false);
    const library = ref(null);
    const floors = ref([]);
    const sections = ref([]);
    const seats = ref([]);
    const selectedSeat = ref(null);
    const bookingDuration = ref(2);
    const { user, isTrialActive } = useAuth();
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
      if (newMax > 0 && newDuration > newMax) {
        bookingDuration.value = newMax;
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
    const fetchSeats = async () => {
      try {
        const id = parseInt(route.params.libraryId);
        const response = await studentAPI.getSeats(id);
        library.value = response.library;
        floors.value = response.floors;
        sections.value = response.sections;
        seats.value = response.seats;
      } catch (error) {
        console.error("Failed to fetch seats:", error);
      } finally {
        loading.value = false;
      }
    };
    const getFloorName = (id) => floors.value.find((f) => f.id === id)?.name || "";
    const getSectionName = (id) => sections.value.find((s) => s.id === id)?.name || "";
    const isGenderMismatch = (seat) => {
      const section = sections.value.find((s) => s.id === seat.section_id);
      if (!section || !section.gender || section.gender === "mixed") return false;
      const studentUser = user.value;
      if (!studentUser || !studentUser.gender) return true;
      return studentUser.gender !== section.gender;
    };
    const handleSeatClick = (seat) => {
      selectedSeat.value = selectedSeat.value?.id === seat.id ? null : seat;
    };
    const confirmBooking = async () => {
      if (!selectedSeat.value) return;
      const startTime = /* @__PURE__ */ new Date(`${selectedDate.value}T${selectedTime.value}`);
      const endTime = new Date(startTime.getTime() + bookingDuration.value * 60 * 60 * 1e3);
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
      if (startTime < openDate || endTime > closeDate) {
        showError("Outside Operation Hours", `This library is only open from ${operatingHour.openTime} to ${operatingHour.closeTime} on ${dayName}s.`);
        return;
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
          scheduled_end_time: formatLocalDatetime(endTime)
        });
        showSuccessModal.value = true;
      } catch (error) {
        console.error("Booking failed:", error);
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
        const errorMessage = error.response?.data?.message || error.message || "Could not join the queue.";
        showError("Queue Error", errorMessage);
      } finally {
        submitting.value = false;
      }
    };
    const goToBookings = () => {
      router.push("/student/my-bookings");
    };
    onMounted(fetchSeats);
    return (_ctx, _cache) => {
      const _component_router_link = resolveComponent("router-link");
      return loading.value ? (openBlock(), createElementBlock("div", _hoisted_1, [..._cache[4] || (_cache[4] = [
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
                default: withCtx(() => [..._cache[5] || (_cache[5] = [
                  createTextVNode("Libraries", -1)
                ])]),
                _: 1
              }),
              createVNode(unref(ChevronRight), { class: "w-3.5 h-3.5 mx-1 text-slate-300" }),
              createBaseVNode("span", _hoisted_5, toDisplayString(library.value?.name), 1)
            ]),
            _cache[6] || (_cache[6] = createBaseVNode("h1", { class: "text-xl font-extrabold text-slate-800 leading-none" }, "Select Your Seat", -1))
          ]),
          _cache[7] || (_cache[7] = createStaticVNode('<div class="flex flex-wrap items-center gap-2 bg-slate-50 border border-slate-100 p-1.5 rounded-xl" data-v-95f8161d><div class="flex items-center px-3 py-1 text-[10px] font-extrabold text-slate-500 uppercase tracking-wider" data-v-95f8161d><div class="w-2.5 h-2.5 rounded-full bg-[#29B072] mr-2" data-v-95f8161d></div><span data-v-95f8161d>Available</span></div><div class="flex items-center px-3 py-1 text-[10px] font-extrabold text-slate-500 uppercase tracking-wider" data-v-95f8161d><div class="w-2.5 h-2.5 rounded-full bg-[#FF9D43] mr-2" data-v-95f8161d></div><span data-v-95f8161d>Occupied</span></div><div class="flex items-center px-3 py-1 text-[10px] font-extrabold text-slate-500 uppercase tracking-wider" data-v-95f8161d><div class="w-2.5 h-2.5 rounded-full bg-[#617DFF] mr-2" data-v-95f8161d></div><span data-v-95f8161d>Reserved</span></div><div class="flex items-center px-3 py-1 text-[10px] font-extrabold text-slate-500 uppercase tracking-wider" data-v-95f8161d><div class="w-2.5 h-2.5 rounded-full bg-blue-600 mr-2" data-v-95f8161d></div><span data-v-95f8161d>Selected</span></div></div>', 1))
        ]),
        createBaseVNode("div", _hoisted_6, [
          createBaseVNode("div", _hoisted_7, [
            createVNode(_sfc_main$1, {
              seats: seats.value,
              floors: floors.value,
              sections: sections.value,
              "selected-seat": selectedSeat.value,
              "seat-clickable": true,
              draggable: false,
              "layout-mode": library.value?.seat_layout_mode,
              onSeatClick: handleSeatClick
            }, null, 8, ["seats", "floors", "sections", "selected-seat", "layout-mode"])
          ]),
          createBaseVNode("div", _hoisted_8, [
            createBaseVNode("div", _hoisted_9, [
              _cache[17] || (_cache[17] = createBaseVNode("h3", { class: "text-sm font-extrabold text-slate-700 uppercase tracking-wider mb-5" }, "Booking Summary", -1)),
              selectedSeat.value ? (openBlock(), createElementBlock("div", _hoisted_10, [
                createBaseVNode("div", _hoisted_11, [
                  createBaseVNode("div", _hoisted_12, [
                    createVNode(unref(Armchair), { class: "w-4.5 h-4.5 text-blue-600 mr-2" }),
                    createBaseVNode("span", _hoisted_13, "Seat " + toDisplayString(selectedSeat.value.seat_number), 1)
                  ]),
                  createBaseVNode("p", _hoisted_14, toDisplayString(getFloorName(selectedSeat.value.floor_id)) + " • " + toDisplayString(getSectionName(selectedSeat.value.section_id)), 1),
                  createBaseVNode("p", _hoisted_15, toDisplayString(selectedSeat.value.seat_type) + " Seat", 1)
                ]),
                isGenderMismatch(selectedSeat.value) ? (openBlock(), createElementBlock("div", _hoisted_16, [
                  createVNode(unref(UserX), { class: "w-4.5 h-4.5 text-red-500 flex-shrink-0" }),
                  _cache[8] || (_cache[8] = createBaseVNode("p", { class: "text-[11px] text-red-600 font-bold leading-normal" }, "This section is restricted to another gender.", -1))
                ])) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                  createBaseVNode("div", _hoisted_17, [
                    createBaseVNode("div", null, [
                      _cache[9] || (_cache[9] = createBaseVNode("label", { class: "text-[10px] font-extrabold text-slate-400 uppercase tracking-wider mb-1.5 block" }, "Duration", -1)),
                      withDirectives(createBaseVNode("select", {
                        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => bookingDuration.value = $event),
                        disabled: maxAvailableHours.value === 0,
                        class: "w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all shadow-sm cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                      }, [
                        (openBlock(true), createElementBlock(Fragment, null, renderList(durationOptions.value, (opt) => {
                          return openBlock(), createElementBlock("option", {
                            key: opt.value,
                            value: opt.value
                          }, toDisplayString(opt.label), 9, _hoisted_19);
                        }), 128))
                      ], 8, _hoisted_18), [
                        [vModelSelect, bookingDuration.value]
                      ])
                    ]),
                    showClosingTimeNotice.value ? (openBlock(), createElementBlock("div", _hoisted_20, [
                      createVNode(unref(CircleAlert), { class: "w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" }),
                      createBaseVNode("p", _hoisted_21, " You can book this seat for a maximum of " + toDisplayString(formatHours(maxAvailableHours.value)) + " because the library closes at " + toDisplayString(formatTimeOnly(libraryClosingTime.value)) + ". ", 1)
                    ])) : createCommentVNode("", true),
                    maxAvailableHours.value === 0 ? (openBlock(), createElementBlock("div", _hoisted_22, [
                      createVNode(unref(CircleAlert), { class: "w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" }),
                      _cache[10] || (_cache[10] = createBaseVNode("p", { class: "text-[10px] text-red-650 font-bold leading-normal m-0" }, " The library is closed during the selected start time. Please choose another date or time. ", -1))
                    ])) : createCommentVNode("", true),
                    createBaseVNode("div", _hoisted_23, [
                      createBaseVNode("div", null, [
                        _cache[11] || (_cache[11] = createBaseVNode("label", { class: "text-[10px] font-extrabold text-slate-400 uppercase tracking-wider mb-1.5 block" }, "Date", -1)),
                        withDirectives(createBaseVNode("input", {
                          type: "date",
                          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => selectedDate.value = $event),
                          min: minDate.value,
                          max: maxDate.value,
                          class: "w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all shadow-sm"
                        }, null, 8, _hoisted_24), [
                          [vModelText, selectedDate.value]
                        ])
                      ]),
                      createBaseVNode("div", null, [
                        _cache[12] || (_cache[12] = createBaseVNode("label", { class: "text-[10px] font-extrabold text-slate-400 uppercase tracking-wider mb-1.5 block" }, "Start Time", -1)),
                        withDirectives(createBaseVNode("input", {
                          type: "time",
                          "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => selectedTime.value = $event),
                          class: "w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all shadow-sm"
                        }, null, 512), [
                          [vModelText, selectedTime.value]
                        ])
                      ])
                    ])
                  ]),
                  createBaseVNode("div", _hoisted_25, [
                    selectedSeat.value.status === "available" ? (openBlock(), createElementBlock("button", {
                      key: 0,
                      onClick: confirmBooking,
                      disabled: submitting.value || maxAvailableHours.value === 0,
                      class: "w-full py-3 bg-blue-600 text-white rounded-xl text-xs font-extrabold shadow-md shadow-blue-500/10 hover:opacity-95 active:scale-98 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-1.5"
                    }, [
                      submitting.value ? (openBlock(), createElementBlock("span", _hoisted_27)) : createCommentVNode("", true),
                      createBaseVNode("span", null, toDisplayString(submitting.value ? "Confirming..." : "Confirm Booking"), 1)
                    ], 8, _hoisted_26)) : (openBlock(), createElementBlock("div", _hoisted_28, [
                      createBaseVNode("div", _hoisted_29, [
                        _cache[14] || (_cache[14] = createBaseVNode("div", { class: "absolute top-0 right-0 w-16 h-16 bg-orange-500/5 rounded-full -mr-8 -mt-8" }, null, -1)),
                        _cache[15] || (_cache[15] = createBaseVNode("p", { class: "text-[9px] text-slate-400 font-extrabold uppercase tracking-widest mb-2.5 leading-none" }, "Seat Occupied", -1)),
                        createBaseVNode("div", _hoisted_30, [
                          createVNode(unref(Clock), { class: "w-4.5 h-4.5 text-orange-500" }),
                          createBaseVNode("p", _hoisted_31, toDisplayString(Math.floor(selectedSeat.value.remaining_minutes / 60)) + "h " + toDisplayString(Math.floor(selectedSeat.value.remaining_minutes % 60)) + "m ", 1)
                        ]),
                        createBaseVNode("div", _hoisted_32, [
                          _cache[13] || (_cache[13] = createBaseVNode("div", { class: "p-2.5 bg-orange-50 border border-orange-100 rounded-xl text-center leading-normal" }, [
                            createBaseVNode("p", { class: "text-[9px] text-orange-700 font-black uppercase tracking-wider" }, "Waitlist Active"),
                            createBaseVNode("p", { class: "text-[8.5px] text-orange-655 font-bold uppercase mt-0.5 tracking-tighter" }, "Claim spot to secure this seat next")
                          ], -1)),
                          createBaseVNode("button", {
                            onClick: joinQueue,
                            disabled: submitting.value,
                            class: "w-full py-2.5 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-xl text-xs font-extrabold shadow-md shadow-orange-500/10 hover:opacity-95 active:scale-98 transition-all flex items-center justify-center space-x-1.5 disabled:opacity-50 disabled:cursor-not-allowed"
                          }, [
                            !submitting.value ? (openBlock(), createBlock(unref(Zap), {
                              key: 0,
                              class: "w-4 h-4 text-white fill-current"
                            })) : (openBlock(), createElementBlock("span", _hoisted_34)),
                            createBaseVNode("span", null, toDisplayString(submitting.value ? "Claiming..." : "Claim Priority Spot"), 1)
                          ], 8, _hoisted_33),
                          createBaseVNode("button", {
                            onClick: _cache[3] || (_cache[3] = ($event) => unref(router).push("/student/my-queue")),
                            class: "text-[9px] text-blue-600 font-extrabold hover:underline uppercase tracking-tight w-full text-center mt-1 block leading-none"
                          }, " View My Waitlists → ")
                        ])
                      ])
                    ]))
                  ])
                ], 64))
              ])) : (openBlock(), createElementBlock("div", _hoisted_35, [
                createBaseVNode("div", _hoisted_36, [
                  createVNode(unref(Armchair), { class: "w-6 h-6" })
                ]),
                _cache[16] || (_cache[16] = createBaseVNode("p", { class: "text-xs text-slate-400 max-w-[180px] mx-auto leading-normal" }, "Please select a seat from the map to continue", -1))
              ]))
            ]),
            createBaseVNode("div", _hoisted_37, [
              createBaseVNode("div", _hoisted_38, [
                createVNode(unref(Zap), { class: "w-4.5 h-4.5 text-orange-600 mr-2 fill-current" }),
                _cache[18] || (_cache[18] = createBaseVNode("h4", { class: "font-extrabold text-orange-900 text-xs uppercase tracking-wide" }, "Quick Tip", -1))
              ]),
              _cache[19] || (_cache[19] = createBaseVNode("p", { class: "text-[11px] text-orange-800/90 leading-relaxed font-semibold" }, " Seats near windows are popular in the morning. Group study areas require all members to check in within 15 minutes. ", -1))
            ])
          ])
        ]),
        showSuccessModal.value ? (openBlock(), createElementBlock("div", _hoisted_39, [
          createBaseVNode("div", _hoisted_40, [
            createBaseVNode("div", _hoisted_41, [
              createVNode(unref(CircleCheckBig), { class: "w-8 h-8" })
            ]),
            _cache[20] || (_cache[20] = createBaseVNode("h2", { class: "text-lg font-extrabold text-slate-800 mb-1" }, "Booking Confirmed!", -1)),
            _cache[21] || (_cache[21] = createBaseVNode("p", { class: "text-xs text-slate-400 mb-6 leading-relaxed" }, "Your seat has been reserved. Please check in within 15 minutes of your start time.", -1)),
            createBaseVNode("button", {
              onClick: goToBookings,
              class: "w-full py-3 bg-blue-600 text-white rounded-xl text-xs font-extrabold shadow-md shadow-blue-500/10 hover:opacity-95 active:scale-98 transition-all"
            }, " View My Bookings ")
          ])
        ])) : createCommentVNode("", true)
      ]));
    };
  }
});
const SeatBookingPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-95f8161d"]]);
export {
  SeatBookingPage as default
};
