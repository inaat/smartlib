import { d as defineComponent, N as useApp, r as ref, a as computed, I as watch, o as onMounted, K as onUnmounted, b as createElementBlock, p as createCommentVNode, B as withModifiers, e as createBaseVNode, g as createVNode, u as unref, t as toDisplayString, F as Fragment, k as renderList, s as withDirectives, v as vModelText, n as normalizeClass, m as openBlock, _ as _export_sfc, w as withCtx, h as resolveComponent, j as createTextVNode, C as Clock, G as useRouter } from "./main-BeUqjoax.js";
import { u as useSwal } from "./useSwal-pQW_XkRe.js";
import { X } from "./x-Dj9LNodU.js";
import { A as Armchair } from "./armchair-Ci3hmWMF.js";
import { C as CircleAlert } from "./circle-alert-jeFdHGPj.js";
import { T as TriangleAlert } from "./triangle-alert-DRsnuOI3.js";
import { A as ArrowRight } from "./arrow-right-IyqLp6mR.js";
import { H as History } from "./history-CghJOSE1.js";
import { P as Plus } from "./plus-R3pbBkbH.js";
import { M as MapPin } from "./map-pin-hjTU3OTG.js";
import { M as Monitor } from "./monitor-D7ior5eo.js";
import { P as PanelsTopLeft } from "./panels-top-left-COwzpnN2.js";
import { Z as Zap } from "./zap-1J--HJED.js";
import { C as Calendar } from "./calendar-C4MEAYqh.js";
/* empty css               */
const _hoisted_1$1 = { class: "bg-white rounded-[2rem] p-8 max-w-md w-full shadow-2xl border border-slate-100 animate-fade-in text-left relative overflow-hidden font-outfit" };
const _hoisted_2$1 = { class: "flex items-center justify-between mb-6 relative z-10" };
const _hoisted_3$1 = { class: "flex flex-col items-center mb-6 relative z-10" };
const _hoisted_4$1 = { class: "w-full bg-slate-50 border border-slate-100/80 rounded-2xl p-4 flex items-center gap-3.5 mb-6" };
const _hoisted_5$1 = { class: "w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0" };
const _hoisted_6$1 = { class: "min-w-0 flex-1" };
const _hoisted_7$1 = { class: "text-xs font-semibold text-slate-700" };
const _hoisted_8$1 = { class: "text-[10px] text-slate-400 font-semibold truncate" };
const _hoisted_9$1 = {
  key: 0,
  class: "text-right flex-shrink-0"
};
const _hoisted_10$1 = { class: "text-xs font-semibold text-slate-650" };
const _hoisted_11$1 = {
  key: 0,
  class: "w-full p-4 bg-rose-50 border border-rose-100 rounded-2xl mb-6 flex gap-3 text-left"
};
const _hoisted_12$1 = {
  key: 1,
  class: "w-full p-4 bg-amber-50 border border-amber-100 rounded-2xl mb-6 flex gap-3 text-left"
};
const _hoisted_13$1 = {
  key: 2,
  class: "w-full space-y-6 text-left"
};
const _hoisted_14$1 = { class: "grid grid-cols-3 gap-3" };
const _hoisted_15$1 = ["onClick", "disabled"];
const _hoisted_16$1 = { class: "flex items-center justify-between mb-2.5" };
const _hoisted_17$1 = { class: "flex items-center gap-1.5" };
const _hoisted_18$1 = ["max"];
const _hoisted_19$1 = { class: "space-y-1.5" };
const _hoisted_20$1 = ["max"];
const _hoisted_21$1 = { class: "flex justify-between text-[10px] font-semibold text-slate-400/80 font-mono leading-none" };
const _hoisted_22$1 = { class: "bg-blue-50/40 border border-blue-100/50 rounded-2xl p-4.5 space-y-3" };
const _hoisted_23$1 = { class: "grid grid-cols-3 items-center text-center gap-1" };
const _hoisted_24$1 = { class: "text-xs font-semibold text-slate-700 font-mono" };
const _hoisted_25$1 = { class: "flex flex-col items-center" };
const _hoisted_26$1 = { class: "text-[10px] font-bold text-blue-650 mt-0.5 bg-blue-50 px-2 py-0.5 rounded-md font-mono" };
const _hoisted_27$1 = { class: "text-xs font-black text-slate-800 font-mono" };
const _hoisted_28$1 = { class: "flex gap-4 relative z-10 pt-2 border-t border-slate-100" };
const _hoisted_29$1 = ["disabled"];
const _hoisted_30$1 = {
  key: 0,
  class: "w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin"
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "SeatExtensionModal",
  props: {
    show: { type: Boolean },
    booking: {}
  },
  emits: ["close", "success"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const { extendSeatBooking } = useApp();
    const { showSuccess, showError } = useSwal();
    const now = ref(/* @__PURE__ */ new Date());
    let timer = null;
    const loading = ref(false);
    const extensionDuration = ref(30);
    const quickOptions = [
      { label: "+15 Min", value: 15 },
      { label: "+30 Min", value: 30 },
      { label: "+1 Hour", value: 60 }
    ];
    const setDuration = (val) => {
      extensionDuration.value = Math.min(val, maxExtensionMinutes.value);
    };
    const currentEndTime = computed(() => {
      if (!props.booking) return null;
      const timeStr = props.booking.scheduled_end_time || props.booking.endTime;
      return timeStr ? new Date(timeStr.replace(" ", "T")) : null;
    });
    const getDayName = (date) => {
      const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      return days[date.getDay()];
    };
    const parseOpeningHoursStr = (openingHoursStr, baseDate) => {
      if (!openingHoursStr) return null;
      const parts = openingHoursStr.split("-");
      if (parts.length < 2) return null;
      const closePart = parts[1].trim();
      const match = closePart.match(/(\d+):(\d+)\s*(AM|PM)/i);
      if (!match) return null;
      let h = parseInt(match[1]);
      const m = parseInt(match[2]);
      const ampm = match[3].toUpperCase();
      if (ampm === "PM" && h < 12) h += 12;
      if (ampm === "AM" && h === 12) h = 0;
      const closingDate = new Date(baseDate);
      closingDate.setHours(h, m, 0, 0);
      return closingDate;
    };
    const libraryClosingTime = computed(() => {
      if (!props.booking?.seat?.library) return null;
      const library = props.booking.seat.library;
      const end = currentEndTime.value;
      if (!end) return null;
      const dayName = getDayName(end);
      const opHours = library.operating_hours || library.operatingHours || [];
      const opHour = opHours.find((oh) => oh.day_of_week === dayName && oh.is_open);
      let closingDate = null;
      if (opHour && opHour.close_time) {
        const [h, m, s] = opHour.close_time.split(":").map(Number);
        closingDate = new Date(end);
        closingDate.setHours(h, m, s || 0, 0);
      } else if (library.opening_hours) {
        closingDate = parseOpeningHoursStr(library.opening_hours, end);
      }
      if (closingDate) {
        if (closingDate.getTime() < end.getTime()) {
          closingDate.setDate(closingDate.getDate() + 1);
        }
      }
      return closingDate;
    });
    const maxExtensionMinutes = computed(() => {
      const end = currentEndTime.value;
      const close = libraryClosingTime.value;
      if (!end || !close) return 1440;
      const diffMs = close.getTime() - end.getTime();
      return Math.max(0, Math.floor(diffMs / 6e4));
    });
    const remainingMinutes = computed(() => {
      const end = currentEndTime.value;
      if (!end) return 0;
      return Math.max(0, (end.getTime() - now.value.getTime()) / 6e4);
    });
    const totalSessionMinutes = computed(() => {
      if (!props.booking) return 120;
      const start = new Date(props.booking.booking_time);
      const end = currentEndTime.value;
      if (!start || !end) return 120;
      return Math.max(1, (end.getTime() - start.getTime()) / 6e4);
    });
    computed(() => {
      if (totalSessionMinutes.value <= 0) return 0;
      return Math.min(100, Math.max(0, remainingMinutes.value / totalSessionMinutes.value * 100));
    });
    const isExtensionRestricted = computed(() => {
      return remainingMinutes.value < 10;
    });
    const isLibraryClosingSoon = computed(() => {
      const close = libraryClosingTime.value;
      if (!close) return false;
      const diffMs = close.getTime() - now.value.getTime();
      return diffMs / 6e4 < 10;
    });
    const isExtensionAllowed = computed(() => {
      return !isExtensionRestricted.value && maxExtensionMinutes.value >= 10 && !isLibraryClosingSoon.value;
    });
    const newEndTime = computed(() => {
      const end = currentEndTime.value;
      if (!end) return null;
      const extended = new Date(end.getTime());
      extended.setMinutes(extended.getMinutes() + (extensionDuration.value || 0));
      return extended;
    });
    const formatAddedTime = computed(() => {
      const mins = extensionDuration.value;
      if (mins < 60) return `+${mins}m`;
      const h = Math.floor(mins / 60);
      const m = mins % 60;
      return m > 0 ? `+${h}h ${m}m` : `+${h}h`;
    });
    computed(() => {
      const end = currentEndTime.value;
      if (!end) return "00:00:00";
      const diffMs = end.getTime() - now.value.getTime();
      if (diffMs <= 0) return "00:00:00";
      const h = Math.floor(diffMs / 36e5);
      const m = Math.floor(diffMs % 36e5 / 6e4);
      const s = Math.floor(diffMs % 6e4 / 1e3);
      return `${h.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
    });
    const formatTimeOnly = (date) => {
      if (!date) return "--";
      return date.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true
      });
    };
    const formatMinutes = (mins) => {
      if (!mins || isNaN(mins)) return "0 minutes";
      if (mins < 60) {
        return `${mins} minutes`;
      }
      const h = Math.floor(mins / 60);
      const m = mins % 60;
      if (h === 1) {
        if (m === 0) return "1 hour";
        return `1 hour ${m} minutes`;
      } else {
        if (m === 0) return `${h} hours`;
        return `${h} hours ${m} minutes`;
      }
    };
    const closeModal = () => {
      emit("close");
    };
    const handleConfirm = async () => {
      if (!props.booking || !isExtensionAllowed.value) return;
      loading.value = true;
      try {
        const success = await extendSeatBooking(props.booking.id, extensionDuration.value);
        if (success) {
          showSuccess("Session Extended!", `Your session has been extended by ${formatAddedTime.value}.`);
          emit("success");
          closeModal();
        }
      } catch (error) {
        showError(
          "Extension Failed",
          error.response?.data?.message || "Could not extend session. The seat might be booked by someone else."
        );
      } finally {
        loading.value = false;
      }
    };
    watch(maxExtensionMinutes, (newMax) => {
      if (extensionDuration.value > newMax) {
        extensionDuration.value = Math.max(10, newMax);
      }
    });
    watch(extensionDuration, (newVal) => {
      if (typeof newVal === "number" && !isNaN(newVal)) {
        if (newVal > maxExtensionMinutes.value) {
          extensionDuration.value = maxExtensionMinutes.value;
        }
      }
    });
    watch(() => props.booking, () => {
      extensionDuration.value = Math.min(30, maxExtensionMinutes.value);
    }, { immediate: true });
    onMounted(() => {
      timer = setInterval(() => {
        now.value = /* @__PURE__ */ new Date();
      }, 1e3);
    });
    onUnmounted(() => {
      if (timer) clearInterval(timer);
    });
    return (_ctx, _cache) => {
      return __props.show ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-md",
        onClick: withModifiers(closeModal, ["self"])
      }, [
        createBaseVNode("div", _hoisted_1$1, [
          _cache[13] || (_cache[13] = createBaseVNode("div", { class: "absolute top-0 right-0 -mr-16 -mt-16 w-36 h-36 rounded-full bg-blue-500/5 blur-3xl" }, null, -1)),
          _cache[14] || (_cache[14] = createBaseVNode("div", { class: "absolute bottom-0 left-0 -ml-16 -mb-16 w-36 h-36 rounded-full bg-blue-500/5 blur-3xl" }, null, -1)),
          createBaseVNode("div", _hoisted_2$1, [
            _cache[2] || (_cache[2] = createBaseVNode("div", null, [
              createBaseVNode("h3", { class: "text-xl font-bold text-slate-800" }, "Extend Session"),
              createBaseVNode("p", { class: "text-xs text-slate-400 mt-1" }, "Adjust and preview your session extension")
            ], -1)),
            createBaseVNode("button", {
              onClick: closeModal,
              class: "p-2 rounded-xl hover:bg-slate-100 text-slate-400 hover:text-slate-700 transition-colors"
            }, [
              createVNode(unref(X), { class: "w-5 h-5" })
            ])
          ]),
          createBaseVNode("div", _hoisted_3$1, [
            createBaseVNode("div", _hoisted_4$1, [
              createBaseVNode("div", _hoisted_5$1, [
                createVNode(unref(Armchair), { class: "w-5 h-5" })
              ]),
              createBaseVNode("div", _hoisted_6$1, [
                createBaseVNode("h4", _hoisted_7$1, "Seat " + toDisplayString(__props.booking?.seat?.seat_number), 1),
                createBaseVNode("p", _hoisted_8$1, toDisplayString(__props.booking?.seat?.library?.name), 1)
              ]),
              libraryClosingTime.value ? (openBlock(), createElementBlock("div", _hoisted_9$1, [
                _cache[3] || (_cache[3] = createBaseVNode("p", { class: "text-[9px] font-semibold uppercase tracking-wider text-slate-400" }, "Library Closes", -1)),
                createBaseVNode("p", _hoisted_10$1, toDisplayString(formatTimeOnly(libraryClosingTime.value)), 1)
              ])) : createCommentVNode("", true)
            ]),
            isExtensionRestricted.value ? (openBlock(), createElementBlock("div", _hoisted_11$1, [
              createVNode(unref(CircleAlert), { class: "w-5 h-5 text-rose-500 flex-shrink-0 mt-0.5" }),
              _cache[4] || (_cache[4] = createBaseVNode("div", null, [
                createBaseVNode("h5", { class: "text-xs font-semibold text-rose-800" }, "Extension Locked"),
                createBaseVNode("p", { class: "text-[10.5px] text-rose-600 mt-1 leading-relaxed" }, " Cannot extend booking with less than 10 minutes remaining. Priority is shifted to the queue. ")
              ], -1))
            ])) : maxExtensionMinutes.value < 10 || isLibraryClosingSoon.value ? (openBlock(), createElementBlock("div", _hoisted_12$1, [
              createVNode(unref(TriangleAlert), { class: "w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" }),
              _cache[5] || (_cache[5] = createBaseVNode("div", null, [
                createBaseVNode("h5", { class: "text-xs font-semibold text-amber-800" }, "Closing Soon"),
                createBaseVNode("p", { class: "text-[10.5px] text-amber-600 mt-1 leading-relaxed" }, " Cannot extend: The library is closing in less than 10 minutes. ")
              ], -1))
            ])) : createCommentVNode("", true),
            isExtensionAllowed.value ? (openBlock(), createElementBlock("div", _hoisted_13$1, [
              createBaseVNode("div", null, [
                _cache[6] || (_cache[6] = createBaseVNode("label", { class: "text-[10px] font-semibold uppercase tracking-widest text-slate-400 block mb-2.5" }, "Quick Add Extension", -1)),
                createBaseVNode("div", _hoisted_14$1, [
                  (openBlock(), createElementBlock(Fragment, null, renderList(quickOptions, (btn) => {
                    return createBaseVNode("button", {
                      key: btn.value,
                      onClick: ($event) => setDuration(btn.value),
                      disabled: btn.value > maxExtensionMinutes.value,
                      class: normalizeClass([
                        "py-3 rounded-xl font-semibold text-xs transition-all border flex flex-col items-center justify-center gap-0.5",
                        extensionDuration.value === btn.value ? "bg-blue-600 text-white border-transparent shadow-lg shadow-blue-500/15 scale-[1.02]" : "bg-slate-50 text-slate-700 border-slate-100 hover:border-slate-200 hover:bg-slate-100/60 disabled:opacity-40 disabled:cursor-not-allowed"
                      ])
                    }, [
                      createBaseVNode("span", null, toDisplayString(btn.label), 1)
                    ], 10, _hoisted_15$1);
                  }), 64))
                ])
              ]),
              createBaseVNode("div", null, [
                createBaseVNode("div", _hoisted_16$1, [
                  _cache[8] || (_cache[8] = createBaseVNode("label", { class: "text-[10px] font-semibold uppercase tracking-widest text-slate-400" }, "Custom Duration", -1)),
                  createBaseVNode("div", _hoisted_17$1, [
                    withDirectives(createBaseVNode("input", {
                      type: "number",
                      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => extensionDuration.value = $event),
                      min: 10,
                      max: maxExtensionMinutes.value,
                      class: "w-16 text-center py-1 px-1.5 border border-slate-200 rounded-lg text-xs font-medium text-slate-750 focus:outline-none focus:border-blue-500 font-mono"
                    }, null, 8, _hoisted_18$1), [
                      [
                        vModelText,
                        extensionDuration.value,
                        void 0,
                        { number: true }
                      ]
                    ]),
                    _cache[7] || (_cache[7] = createBaseVNode("span", { class: "text-[10px] font-medium text-slate-400" }, "min", -1))
                  ])
                ]),
                createBaseVNode("div", _hoisted_19$1, [
                  withDirectives(createBaseVNode("input", {
                    type: "range",
                    "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => extensionDuration.value = $event),
                    min: 10,
                    max: maxExtensionMinutes.value,
                    class: "w-full accent-blue-600 h-1.5 bg-slate-100 rounded-lg appearance-none cursor-pointer"
                  }, null, 8, _hoisted_20$1), [
                    [
                      vModelText,
                      extensionDuration.value,
                      void 0,
                      { number: true }
                    ]
                  ]),
                  createBaseVNode("div", _hoisted_21$1, [
                    createBaseVNode("span", null, "Min: " + toDisplayString(formatMinutes(10)), 1),
                    createBaseVNode("span", null, "Max: " + toDisplayString(formatMinutes(maxExtensionMinutes.value)), 1)
                  ])
                ])
              ]),
              createBaseVNode("div", _hoisted_22$1, [
                _cache[11] || (_cache[11] = createBaseVNode("h5", { class: "text-[9.5px] font-semibold text-blue-500 uppercase tracking-widest" }, "Time Extension Preview", -1)),
                createBaseVNode("div", _hoisted_23$1, [
                  createBaseVNode("div", null, [
                    _cache[9] || (_cache[9] = createBaseVNode("p", { class: "text-[9px] text-slate-400 font-semibold uppercase mb-0.5" }, "Current End", -1)),
                    createBaseVNode("p", _hoisted_24$1, toDisplayString(formatTimeOnly(currentEndTime.value)), 1)
                  ]),
                  createBaseVNode("div", _hoisted_25$1, [
                    createVNode(unref(ArrowRight), { class: "w-4 h-4 text-blue-400" }),
                    createBaseVNode("span", _hoisted_26$1, toDisplayString(formatAddedTime.value), 1)
                  ]),
                  createBaseVNode("div", null, [
                    _cache[10] || (_cache[10] = createBaseVNode("p", { class: "text-[9px] text-slate-400 font-semibold uppercase mb-0.5" }, "New End Time", -1)),
                    createBaseVNode("p", _hoisted_27$1, toDisplayString(formatTimeOnly(newEndTime.value)), 1)
                  ])
                ])
              ])
            ])) : createCommentVNode("", true)
          ]),
          createBaseVNode("div", _hoisted_28$1, [
            createBaseVNode("button", {
              onClick: closeModal,
              class: "flex-1 py-3.5 rounded-xl font-semibold text-slate-550 bg-slate-50 hover:bg-slate-100 border border-slate-200/60 transition-all text-xs"
            }, " Cancel "),
            createBaseVNode("button", {
              onClick: handleConfirm,
              disabled: !isExtensionAllowed.value || loading.value,
              class: "flex-1 py-3.5 rounded-xl font-semibold text-white bg-blue-600 hover:bg-blue-700 disabled:opacity-40 disabled:cursor-not-allowed shadow-lg shadow-blue-500/10 transition-all text-xs flex items-center justify-center space-x-1.5"
            }, [
              loading.value ? (openBlock(), createElementBlock("span", _hoisted_30$1)) : createCommentVNode("", true),
              _cache[12] || (_cache[12] = createBaseVNode("span", null, "Confirm Extension", -1))
            ], 8, _hoisted_29$1)
          ])
        ])
      ])) : createCommentVNode("", true);
    };
  }
});
const SeatExtensionModal = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-ed172058"]]);
const _hoisted_1 = { class: "space-y-6 pb-12 font-outfit" };
const _hoisted_2 = { class: "flex justify-end" };
const _hoisted_3 = { class: "space-y-5" };
const _hoisted_4 = { class: "flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100/80 pb-4" };
const _hoisted_5 = { class: "flex items-center space-x-3 text-left" };
const _hoisted_6 = { class: "w-9 h-9 rounded-xl bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0 shadow-2xs" };
const _hoisted_7 = {
  key: 0,
  class: "flex items-center space-x-2 self-start sm:self-auto"
};
const _hoisted_8 = { class: "inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-700 border border-blue-200 shadow-2xs" };
const _hoisted_9 = {
  key: 0,
  class: "bg-white rounded-3xl p-12 text-center border border-dashed border-slate-200 shadow-sm"
};
const _hoisted_10 = { class: "w-16 h-16 bg-slate-50 text-slate-600 rounded-4xl flex items-center justify-center mx-auto mb-4 border border-slate-200 shadow-inner" };
const _hoisted_11 = {
  key: 1,
  class: "grid grid-cols-1 gap-6"
};
const _hoisted_12 = { class: "absolute top-5 right-6 flex items-center gap-2" };
const _hoisted_13 = {
  key: 0,
  class: "inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-full text-[10px] font-semibold uppercase tracking-wider"
};
const _hoisted_14 = {
  key: 1,
  class: "inline-flex items-center gap-1.5 px-3 py-1 bg-blue-50 text-blue-700 border border-blue-200 rounded-full text-[10px] font-semibold uppercase tracking-wider"
};
const _hoisted_15 = { class: "flex flex-col lg:flex-row lg:items-center justify-between gap-6" };
const _hoisted_16 = { class: "flex flex-col sm:flex-row sm:items-center gap-5 flex-1 min-w-0" };
const _hoisted_17 = { class: "space-y-1 min-w-0" };
const _hoisted_18 = { class: "flex items-center gap-2" };
const _hoisted_19 = { class: "font-bold text-slate-800 text-lg tracking-tight" };
const _hoisted_20 = { class: "text-xs font-semibold text-slate-400 bg-slate-50 px-2 py-0.5 rounded-lg border border-slate-100 font-mono" };
const _hoisted_21 = { class: "text-slate-600 text-xs flex items-center font-medium" };
const _hoisted_22 = { class: "flex flex-wrap gap-1.5 pt-1.5" };
const _hoisted_23 = {
  key: 0,
  class: "flex items-center text-[10px] bg-slate-50 text-slate-600 border border-slate-100 px-2.5 py-0.5 rounded-lg font-semibold"
};
const _hoisted_24 = {
  key: 1,
  class: "flex items-center text-[10px] bg-slate-50 text-slate-600 border border-slate-100 px-2.5 py-0.5 rounded-lg font-semibold"
};
const _hoisted_25 = {
  key: 2,
  class: "flex items-center text-[10px] bg-slate-50 text-slate-600 border border-slate-100 px-2.5 py-0.5 rounded-lg font-semibold"
};
const _hoisted_26 = { class: "flex flex-col sm:flex-row sm:items-center gap-4 flex-shrink-0 border-t lg:border-t-0 pt-4 lg:pt-0 border-slate-100" };
const _hoisted_27 = { class: "bg-slate-50/80 border border-slate-100 rounded-2xl px-5 py-3 min-w-[150px] text-center sm:text-left flex flex-col justify-center" };
const _hoisted_28 = { class: "flex sm:flex-row gap-2.5 items-center justify-center sm:justify-start" };
const _hoisted_29 = ["onClick"];
const _hoisted_30 = ["onClick"];
const _hoisted_31 = ["onClick"];
const _hoisted_32 = ["onClick"];
const _hoisted_33 = { class: "pt-8" };
const _hoisted_34 = { class: "flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100/80 pb-4 mb-6" };
const _hoisted_35 = { class: "flex items-center space-x-3 text-left" };
const _hoisted_36 = { class: "w-9 h-9 rounded-xl bg-purple-50 border border-purple-100 text-purple-600 flex items-center justify-center flex-shrink-0 shadow-2xs" };
const _hoisted_37 = { class: "flex items-center gap-1 bg-slate-100/80 p-1 rounded-xl w-full sm:w-auto" };
const _hoisted_38 = ["onClick"];
const _hoisted_39 = {
  key: 0,
  class: "bg-slate-50/30 rounded-2xl p-16 text-center border border-slate-100"
};
const _hoisted_40 = {
  key: 1,
  class: "bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden text-left"
};
const _hoisted_41 = { class: "overflow-x-auto" };
const _hoisted_42 = { class: "w-full text-left" };
const _hoisted_43 = { class: "divide-y divide-slate-50" };
const _hoisted_44 = { class: "px-6 py-4 whitespace-nowrap" };
const _hoisted_45 = { class: "flex items-center space-x-3" };
const _hoisted_46 = { class: "text-left" };
const _hoisted_47 = { class: "text-xs font-bold text-slate-800 leading-snug" };
const _hoisted_48 = { class: "text-[9px] text-slate-400 font-bold uppercase mt-0.5 leading-none" };
const _hoisted_49 = { class: "px-6 py-4 text-left whitespace-nowrap" };
const _hoisted_50 = { class: "text-xs font-bold text-slate-700 flex items-center" };
const _hoisted_51 = { class: "px-6 py-4 whitespace-nowrap" };
const _hoisted_52 = { class: "flex items-center text-xs font-bold text-slate-700" };
const _hoisted_53 = { class: "px-6 py-4 whitespace-nowrap" };
const _hoisted_54 = { class: "flex items-center text-xs font-semibold text-slate-500" };
const _hoisted_55 = { class: "px-6 py-4 text-center whitespace-nowrap" };
const _hoisted_56 = {
  key: 0,
  class: "flex items-center justify-center text-xs font-bold text-blue-600"
};
const _hoisted_57 = {
  key: 1,
  class: "text-xs text-slate-400"
};
const _hoisted_58 = { class: "px-6 py-4 text-right whitespace-nowrap" };
const _hoisted_59 = {
  key: 0,
  class: "px-6 py-4 bg-slate-50/30 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-[10px] font-semibold text-slate-400 uppercase tracking-widest"
};
const _hoisted_60 = { class: "flex items-center space-x-1.5" };
const _hoisted_61 = ["disabled"];
const _hoisted_62 = ["onClick"];
const _hoisted_63 = ["disabled"];
const historyItemsPerPage = 10;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "MyBookingsPage",
  setup(__props) {
    const router = useRouter();
    const { bookings, loadBookings, checkOutSeat, cancelBooking } = useApp();
    const { showConfirm, showSuccess } = useSwal();
    const now = ref(/* @__PURE__ */ new Date());
    let timer = null;
    const historyFilter = ref("all");
    const activeBookings = computed(() => {
      return bookings.value.filter(
        (b) => b.status === "booked" || b.status === "checked_in"
      ).sort((a, b) => new Date(a.booking_time).getTime() - new Date(b.booking_time).getTime());
    });
    const filteredHistory = computed(() => {
      const pastBookings = bookings.value.filter(
        (b) => b.status === "checked_out" || b.status === "cancelled" || b.status === "expired"
      ).sort((a, b) => new Date(b.booking_time).getTime() - new Date(a.booking_time).getTime());
      if (historyFilter.value === "all") return pastBookings;
      if (historyFilter.value === "completed") return pastBookings.filter((b) => b.status === "checked_out");
      if (historyFilter.value === "cancelled") return pastBookings.filter((b) => b.status === "cancelled" || b.status === "expired");
      return pastBookings;
    });
    const historyPage = ref(1);
    watch(historyFilter, () => {
      historyPage.value = 1;
    });
    watch(filteredHistory, () => {
      if (historyPage.value > totalHistoryPages.value) {
        historyPage.value = Math.max(1, totalHistoryPages.value);
      }
    });
    const totalHistoryPages = computed(() => {
      return Math.ceil(filteredHistory.value.length / historyItemsPerPage) || 1;
    });
    const paginatedHistory = computed(() => {
      const start = (historyPage.value - 1) * historyItemsPerPage;
      return filteredHistory.value.slice(start, start + historyItemsPerPage);
    });
    const historyStartIndex = computed(() => {
      if (filteredHistory.value.length === 0) return 0;
      return (historyPage.value - 1) * historyItemsPerPage + 1;
    });
    const historyEndIndex = computed(() => {
      return Math.min(historyPage.value * historyItemsPerPage, filteredHistory.value.length);
    });
    const getTargetTime = (booking) => {
      if (booking.status === "checked_in") {
        const timeStr2 = booking.scheduled_end_time || booking.endTime;
        if (!timeStr2) return null;
        try {
          const normalized = timeStr2.includes("T") ? timeStr2 : timeStr2.replace(" ", "T");
          const d = new Date(normalized);
          return isNaN(d.getTime()) ? null : d;
        } catch {
          return null;
        }
      }
      const timeStr = booking.booking_time || booking.startTime;
      if (!timeStr) return null;
      try {
        const normalized = timeStr.includes("T") ? timeStr : timeStr.replace(" ", "T");
        const d = new Date(normalized);
        if (isNaN(d.getTime())) return null;
        return new Date(d.getTime() + 15 * 60 * 1e3);
      } catch {
        return null;
      }
    };
    const isOverdue = (booking) => {
      const t = getTargetTime(booking);
      if (!t) return false;
      return t.getTime() <= now.value.getTime();
    };
    const getTimerLabel = (booking) => {
      if (booking.status === "checked_in") {
        return isOverdue(booking) ? "Session Overtime" : "Session Ends In";
      }
      return isOverdue(booking) ? "Expired" : "Check-in Time Left";
    };
    const getRemainingTime = (booking) => {
      const target = getTargetTime(booking);
      if (!target) return "--:--:--";
      const diff = target.getTime() - now.value.getTime();
      if (diff <= 0) {
        if (booking.status === "checked_in") {
          const elapsed = Math.abs(diff);
          const h2 = Math.floor(elapsed / 36e5);
          const m2 = Math.floor(elapsed % 36e5 / 6e4);
          const s2 = Math.floor(elapsed % 6e4 / 1e3);
          return `+${h2.toString().padStart(2, "0")}:${m2.toString().padStart(2, "0")}:${s2.toString().padStart(2, "0")}`;
        }
        return "00:00";
      }
      const h = Math.floor(diff / 36e5);
      const m = Math.floor(diff % 36e5 / 6e4);
      const s = Math.floor(diff % 6e4 / 1e3);
      if (booking.status === "booked") {
        if (h > 0) {
          return `${h.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
        }
        return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
      }
      return `${h.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
    };
    const formatDate = (date) => {
      if (!date) return "N/A";
      return new Date(date).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric"
      });
    };
    const formatTime = (date) => {
      if (!date) return "N/A";
      return new Date(date).toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true
      });
    };
    const formatDuration = (minutes) => {
      const hours = Math.floor(minutes / 60);
      const mins = minutes % 60;
      return hours > 0 ? `${hours}h ${mins}m` : `${mins}m`;
    };
    const handleCheckIn = (id) => {
      router.push({
        name: "student-qr-checkin",
        query: { booking_id: id.toString() }
      });
    };
    const handleCheckOut = async (id) => {
      if (await showConfirm("Check Out", "Check out from this seat?", "Yes, Check Out")) {
        await checkOutSeat(id);
        await loadBookings();
        showSuccess("Checked Out", "You have successfully checked out.");
      }
    };
    const handleCancel = async (id) => {
      if (await showConfirm("Cancel Booking", "Are you sure you want to cancel this booking?", "Yes, Cancel")) {
        await cancelBooking(id);
        await loadBookings();
        showSuccess("Cancelled", "Booking cancelled successfully.");
      }
    };
    const extendModal = ref({
      show: false,
      booking: null
    });
    const handleExtend = (booking) => {
      extendModal.value = { show: true, booking };
    };
    let pollBookingsTimer = null;
    onMounted(async () => {
      await loadBookings();
      timer = setInterval(() => {
        now.value = /* @__PURE__ */ new Date();
      }, 1e3);
      pollBookingsTimer = setInterval(() => {
        loadBookings();
      }, 5e3);
    });
    onUnmounted(() => {
      if (timer) clearInterval(timer);
      if (pollBookingsTimer) clearInterval(pollBookingsTimer);
    });
    return (_ctx, _cache) => {
      const _component_router_link = resolveComponent("router-link");
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createVNode(_component_router_link, {
            to: "/student/libraries",
            class: "inline-flex items-center px-4 py-2.5 bg-blue-600 hover:from-blue-700 hover:to-cyan-600 text-white rounded-xl text-xs font-bold shadow-md shadow-blue-500/10 active:scale-98 transition-all uppercase tracking-wider"
          }, {
            default: withCtx(() => [
              createVNode(unref(Plus), { class: "w-4.5 h-4.5 mr-1.5" }),
              _cache[3] || (_cache[3] = createTextVNode(" Book New Seat ", -1))
            ]),
            _: 1
          })
        ]),
        createBaseVNode("div", _hoisted_3, [
          createBaseVNode("div", _hoisted_4, [
            createBaseVNode("div", _hoisted_5, [
              createBaseVNode("div", _hoisted_6, [
                createVNode(unref(Armchair), { class: "w-4.5 h-4.5" })
              ]),
              _cache[4] || (_cache[4] = createBaseVNode("div", null, [
                createBaseVNode("h3", { class: "text-base font-bold text-slate-800 tracking-tight leading-snug" }, "Current & Upcoming"),
                createBaseVNode("p", { class: "text-[11px] text-slate-400 font-medium" }, "Your active seat reservations and upcoming scheduled sessions.")
              ], -1))
            ]),
            activeBookings.value.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_7, [
              createBaseVNode("span", _hoisted_8, [
                _cache[5] || (_cache[5] = createBaseVNode("span", { class: "w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse mr-1.5" }, null, -1)),
                createTextVNode(" " + toDisplayString(activeBookings.value.length) + " Active Session" + toDisplayString(activeBookings.value.length > 1 ? "s" : ""), 1)
              ])
            ])) : createCommentVNode("", true)
          ]),
          activeBookings.value.length === 0 ? (openBlock(), createElementBlock("div", _hoisted_9, [
            createBaseVNode("div", _hoisted_10, [
              createVNode(unref(Armchair), { class: "w-7 h-7" })
            ]),
            _cache[7] || (_cache[7] = createBaseVNode("h3", { class: "text-base font-bold text-slate-800 mb-1" }, "No Active Bookings", -1)),
            _cache[8] || (_cache[8] = createBaseVNode("p", { class: "text-xs text-slate-500 max-w-xs mx-auto mb-6 font-medium leading-relaxed" }, "You don't have any active seat reservations at the moment. Find a library to book your spot!", -1)),
            createVNode(_component_router_link, {
              to: "/student/libraries",
              class: "inline-flex items-center px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-semibold active:scale-98 transition-all shadow-sm cursor-pointer"
            }, {
              default: withCtx(() => [..._cache[6] || (_cache[6] = [
                createTextVNode(" Explore Libraries ", -1)
              ])]),
              _: 1
            })
          ])) : (openBlock(), createElementBlock("div", _hoisted_11, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(activeBookings.value, (booking) => {
              return openBlock(), createElementBlock("div", {
                key: booking.id,
                class: "bg-white rounded-3xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 group relative overflow-hidden text-left"
              }, [
                createBaseVNode("div", _hoisted_12, [
                  booking.status === "checked_in" ? (openBlock(), createElementBlock("span", _hoisted_13, [..._cache[9] || (_cache[9] = [
                    createBaseVNode("span", { class: "w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" }, null, -1),
                    createTextVNode(" Active Now ", -1)
                  ])])) : (openBlock(), createElementBlock("span", _hoisted_14, " Upcoming Session "))
                ]),
                createBaseVNode("div", _hoisted_15, [
                  createBaseVNode("div", _hoisted_16, [
                    createBaseVNode("div", {
                      class: normalizeClass([
                        "w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 transition-all border shadow-sm",
                        booking.status === "checked_in" ? "bg-emerald-50 text-emerald-600 border-emerald-200" : "bg-blue-50 text-blue-600 border-blue-200"
                      ])
                    }, [
                      createVNode(unref(Armchair), { class: "w-6 h-6" })
                    ], 2),
                    createBaseVNode("div", _hoisted_17, [
                      createBaseVNode("div", _hoisted_18, [
                        createBaseVNode("h4", _hoisted_19, "Seat " + toDisplayString(booking.seat?.seat_number), 1),
                        createBaseVNode("span", _hoisted_20, " #" + toDisplayString(booking.id), 1)
                      ]),
                      createBaseVNode("p", _hoisted_21, [
                        createVNode(unref(MapPin), { class: "w-3.5 h-3.5 mr-1.5 text-blue-600" }),
                        createTextVNode(" " + toDisplayString(booking.seat?.library?.name), 1)
                      ]),
                      createBaseVNode("div", _hoisted_22, [
                        booking.seat?.has_computer ? (openBlock(), createElementBlock("span", _hoisted_23, [
                          createVNode(unref(Monitor), { class: "w-3 h-3 mr-1 text-slate-400" }),
                          _cache[10] || (_cache[10] = createTextVNode(" PC Included ", -1))
                        ])) : createCommentVNode("", true),
                        booking.seat?.near_window ? (openBlock(), createElementBlock("span", _hoisted_24, [
                          createVNode(unref(PanelsTopLeft), { class: "w-3 h-3 mr-1 text-slate-400" }),
                          _cache[11] || (_cache[11] = createTextVNode(" Window ", -1))
                        ])) : createCommentVNode("", true),
                        booking.seat && booking.seat.socket_count > 0 ? (openBlock(), createElementBlock("span", _hoisted_25, [
                          createVNode(unref(Zap), { class: "w-3 h-3 mr-1 text-slate-400" }),
                          createTextVNode(" " + toDisplayString(booking.seat.socket_count) + " Plug ", 1)
                        ])) : createCommentVNode("", true)
                      ])
                    ])
                  ]),
                  createBaseVNode("div", _hoisted_26, [
                    createBaseVNode("div", _hoisted_27, [
                      createBaseVNode("span", {
                        class: normalizeClass(["text-[10px] font-semibold uppercase tracking-wider block mb-1", isOverdue(booking) ? "text-rose-600" : "text-slate-400"])
                      }, toDisplayString(getTimerLabel(booking)), 3),
                      createBaseVNode("span", {
                        class: normalizeClass(["text-2xl font-bold font-mono tracking-tight leading-none", isOverdue(booking) ? "text-rose-600" : "text-blue-600"])
                      }, toDisplayString(getRemainingTime(booking)), 3)
                    ]),
                    createBaseVNode("div", _hoisted_28, [
                      booking.status === "booked" ? (openBlock(), createElementBlock("button", {
                        key: 0,
                        onClick: ($event) => handleCheckIn(booking.id),
                        class: "px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-semibold shadow-sm active:scale-98 transition-all cursor-pointer"
                      }, " Check In ", 8, _hoisted_29)) : createCommentVNode("", true),
                      booking.status === "booked" ? (openBlock(), createElementBlock("button", {
                        key: 1,
                        onClick: ($event) => handleCancel(booking.id),
                        class: "px-4 py-2.5 bg-slate-50 border border-slate-200 text-slate-600 hover:bg-slate-100 rounded-xl text-xs font-semibold transition-all cursor-pointer"
                      }, " Cancel ", 8, _hoisted_30)) : createCommentVNode("", true),
                      booking.status === "checked_in" ? (openBlock(), createElementBlock("button", {
                        key: 2,
                        onClick: ($event) => handleCheckOut(booking.id),
                        class: "px-5 py-2.5 bg-rose-50 text-rose-600 border border-rose-100 hover:bg-rose-100 rounded-xl text-xs font-semibold transition-all cursor-pointer whitespace-nowrap"
                      }, " Check Out ", 8, _hoisted_31)) : createCommentVNode("", true),
                      booking.status === "checked_in" ? (openBlock(), createElementBlock("button", {
                        key: 3,
                        onClick: ($event) => handleExtend(booking),
                        class: "px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-semibold shadow-sm active:scale-98 transition-all cursor-pointer whitespace-nowrap"
                      }, " Extend Time ", 8, _hoisted_32)) : createCommentVNode("", true)
                    ])
                  ])
                ])
              ]);
            }), 128))
          ]))
        ]),
        createVNode(SeatExtensionModal, {
          show: extendModal.value.show,
          booking: extendModal.value.booking,
          onClose: _cache[0] || (_cache[0] = ($event) => extendModal.value.show = false),
          onSuccess: unref(loadBookings)
        }, null, 8, ["show", "booking", "onSuccess"]),
        createBaseVNode("div", _hoisted_33, [
          createBaseVNode("div", _hoisted_34, [
            createBaseVNode("div", _hoisted_35, [
              createBaseVNode("div", _hoisted_36, [
                createVNode(unref(History), { class: "w-4.5 h-4.5" })
              ]),
              _cache[12] || (_cache[12] = createBaseVNode("div", null, [
                createBaseVNode("h3", { class: "text-base font-bold text-slate-800 tracking-tight leading-snug" }, "Booking History"),
                createBaseVNode("p", { class: "text-[11px] text-slate-400 font-medium" }, "Past completed and cancelled seat reservation records.")
              ], -1))
            ]),
            createBaseVNode("div", _hoisted_37, [
              (openBlock(), createElementBlock(Fragment, null, renderList(["all", "completed", "cancelled"], (filter) => {
                return createBaseVNode("button", {
                  key: filter,
                  onClick: ($event) => historyFilter.value = filter,
                  class: normalizeClass([
                    "flex-1 sm:flex-none px-3.5 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-wider transition-all cursor-pointer text-center",
                    historyFilter.value === filter ? "bg-white shadow-xs text-slate-800" : "text-slate-500 hover:text-slate-700"
                  ])
                }, toDisplayString(filter), 11, _hoisted_38);
              }), 64))
            ])
          ]),
          !filteredHistory.value || filteredHistory.value.length === 0 ? (openBlock(), createElementBlock("div", _hoisted_39, [
            createVNode(unref(Clock), { class: "w-12 h-12 text-slate-300 mx-auto mb-3" }),
            _cache[13] || (_cache[13] = createBaseVNode("p", { class: "text-xs text-slate-400 font-bold uppercase tracking-wider" }, "No past bookings found.", -1))
          ])) : (openBlock(), createElementBlock("div", _hoisted_40, [
            createBaseVNode("div", _hoisted_41, [
              createBaseVNode("table", _hoisted_42, [
                _cache[14] || (_cache[14] = createBaseVNode("thead", null, [
                  createBaseVNode("tr", { class: "bg-slate-50/50 border-b border-slate-100 text-[10px] uppercase font-bold tracking-wider text-slate-400" }, [
                    createBaseVNode("th", { class: "px-6 py-3.5" }, "Seat"),
                    createBaseVNode("th", { class: "px-6 py-3.5" }, "Library"),
                    createBaseVNode("th", { class: "px-6 py-3.5" }, "Date"),
                    createBaseVNode("th", { class: "px-6 py-3.5" }, "Scheduled Time"),
                    createBaseVNode("th", { class: "px-6 py-3.5 text-center" }, "Duration"),
                    createBaseVNode("th", { class: "px-6 py-3.5 text-right" }, "Status")
                  ])
                ], -1)),
                createBaseVNode("tbody", _hoisted_43, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(paginatedHistory.value, (booking) => {
                    return openBlock(), createElementBlock("tr", {
                      key: booking.id,
                      class: "hover:bg-slate-50/30 transition-colors group"
                    }, [
                      createBaseVNode("td", _hoisted_44, [
                        createBaseVNode("div", _hoisted_45, [
                          createBaseVNode("div", {
                            class: normalizeClass([
                              "w-9 h-9 rounded-xl border flex items-center justify-center font-bold text-xs transition-all duration-300",
                              booking.status === "checked_out" ? "bg-emerald-50 border-emerald-100 text-emerald-600" : booking.status === "cancelled" ? "bg-red-50 border-red-100 text-red-600" : "bg-slate-50 border-slate-100 text-slate-500"
                            ])
                          }, [
                            createVNode(unref(Armchair), { class: "w-4 h-4" })
                          ], 2),
                          createBaseVNode("div", _hoisted_46, [
                            createBaseVNode("div", _hoisted_47, "Seat " + toDisplayString(booking.seat?.seat_number || "N/A"), 1),
                            createBaseVNode("div", _hoisted_48, "ID #" + toDisplayString(booking.id), 1)
                          ])
                        ])
                      ]),
                      createBaseVNode("td", _hoisted_49, [
                        createBaseVNode("div", _hoisted_50, [
                          createVNode(unref(MapPin), { class: "w-3.5 h-3.5 mr-1 text-slate-400 flex-shrink-0" }),
                          createTextVNode(" " + toDisplayString(booking.seat?.library?.name || "N/A"), 1)
                        ])
                      ]),
                      createBaseVNode("td", _hoisted_51, [
                        createBaseVNode("div", _hoisted_52, [
                          createVNode(unref(Calendar), { class: "w-3.5 h-3.5 mr-1 text-slate-400 flex-shrink-0" }),
                          createTextVNode(" " + toDisplayString(formatDate(booking.booking_time)), 1)
                        ])
                      ]),
                      createBaseVNode("td", _hoisted_53, [
                        createBaseVNode("div", _hoisted_54, [
                          createVNode(unref(Clock), { class: "w-3.5 h-3.5 mr-1.5 text-slate-400 flex-shrink-0" }),
                          createTextVNode(" " + toDisplayString(formatTime(booking.booking_time)) + " - " + toDisplayString(formatTime(booking.scheduled_end_time)), 1)
                        ])
                      ]),
                      createBaseVNode("td", _hoisted_55, [
                        booking.total_minutes ? (openBlock(), createElementBlock("div", _hoisted_56, [
                          createVNode(unref(Zap), { class: "w-3.5 h-3.5 mr-1 text-blue-500" }),
                          createTextVNode(" " + toDisplayString(formatDuration(booking.total_minutes)), 1)
                        ])) : (openBlock(), createElementBlock("div", _hoisted_57, "--"))
                      ]),
                      createBaseVNode("td", _hoisted_58, [
                        createBaseVNode("span", {
                          class: normalizeClass([
                            "text-[9px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-lg border",
                            booking.status === "checked_out" ? "bg-emerald-50 text-emerald-700 border-emerald-100" : booking.status === "cancelled" ? "bg-red-50 text-red-700 border-red-100" : "bg-slate-50 text-slate-700 border-slate-100"
                          ])
                        }, toDisplayString(booking.status.replace("_", " ")), 3)
                      ])
                    ]);
                  }), 128))
                ])
              ])
            ]),
            filteredHistory.value.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_59, [
              createBaseVNode("div", null, "Showing " + toDisplayString(historyStartIndex.value) + " to " + toDisplayString(historyEndIndex.value) + " of " + toDisplayString(filteredHistory.value.length) + " entries", 1),
              createBaseVNode("div", _hoisted_60, [
                createBaseVNode("button", {
                  onClick: _cache[1] || (_cache[1] = ($event) => historyPage.value--),
                  disabled: historyPage.value === 1,
                  class: "px-3 py-1.5 border border-slate-200 bg-white rounded-xl text-slate-600 font-bold hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition-all text-xs cursor-pointer shadow-2xs"
                }, " Previous ", 8, _hoisted_61),
                (openBlock(true), createElementBlock(Fragment, null, renderList(totalHistoryPages.value, (page) => {
                  return openBlock(), createElementBlock("button", {
                    key: page,
                    onClick: ($event) => historyPage.value = page,
                    class: normalizeClass([
                      "w-8 h-8 rounded-xl text-xs font-bold transition-all cursor-pointer shadow-2xs",
                      historyPage.value === page ? "bg-blue-600 text-white shadow-sm" : "border border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
                    ])
                  }, toDisplayString(page), 11, _hoisted_62);
                }), 128)),
                createBaseVNode("button", {
                  onClick: _cache[2] || (_cache[2] = ($event) => historyPage.value++),
                  disabled: historyPage.value === totalHistoryPages.value,
                  class: "px-3 py-1.5 border border-slate-200 bg-white rounded-xl text-slate-600 font-bold hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition-all text-xs cursor-pointer shadow-2xs"
                }, " Next ", 8, _hoisted_63)
              ])
            ])) : createCommentVNode("", true)
          ]))
        ])
      ]);
    };
  }
});
const MyBookingsPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-ccb1a45c"]]);
export {
  MyBookingsPage as default
};
