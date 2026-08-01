import { d as defineComponent, J as useApp, r as ref, c as computed, E as watch, o as onMounted, H as onUnmounted, a as createElementBlock, j as createCommentVNode, z as withModifiers, b as createBaseVNode, f as createVNode, u as unref, t as toDisplayString, F as Fragment, k as renderList, p as withDirectives, v as vModelText, n as normalizeClass, l as openBlock } from "./main-C124sHqx.js";
import { u as useSwal } from "./useSwal-pQW_XkRe.js";
import { X } from "./x-eq55W8eI.js";
import { A as Armchair } from "./armchair-B5NjzUmb.js";
import { C as CircleAlert } from "./circle-alert-j0S5RkVw.js";
import { T as TriangleAlert } from "./triangle-alert-Db300I4d.js";
import { A as ArrowRight } from "./arrow-right-DHXcY5jv.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _hoisted_1 = { class: "bg-white rounded-[2rem] p-8 max-w-md w-full shadow-2xl border border-slate-100 animate-fade-in text-left relative overflow-hidden font-outfit" };
const _hoisted_2 = { class: "flex items-center justify-between mb-6 relative z-10" };
const _hoisted_3 = { class: "flex flex-col items-center mb-6 relative z-10" };
const _hoisted_4 = { class: "w-full bg-slate-50 border border-slate-100/80 rounded-2xl p-4 flex items-center gap-3.5 mb-6" };
const _hoisted_5 = { class: "w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0" };
const _hoisted_6 = { class: "min-w-0 flex-1" };
const _hoisted_7 = { class: "text-xs font-semibold text-slate-700" };
const _hoisted_8 = { class: "text-[10px] text-slate-400 font-semibold truncate" };
const _hoisted_9 = {
  key: 0,
  class: "text-right flex-shrink-0"
};
const _hoisted_10 = { class: "text-xs font-semibold text-slate-650" };
const _hoisted_11 = {
  key: 0,
  class: "w-full p-4 bg-rose-50 border border-rose-100 rounded-2xl mb-6 flex gap-3 text-left"
};
const _hoisted_12 = {
  key: 1,
  class: "w-full p-4 bg-amber-50 border border-amber-100 rounded-2xl mb-6 flex gap-3 text-left"
};
const _hoisted_13 = {
  key: 2,
  class: "w-full space-y-6 text-left"
};
const _hoisted_14 = { class: "grid grid-cols-3 gap-3" };
const _hoisted_15 = ["onClick", "disabled"];
const _hoisted_16 = { class: "flex items-center justify-between mb-2.5" };
const _hoisted_17 = { class: "flex items-center gap-1.5" };
const _hoisted_18 = ["max"];
const _hoisted_19 = { class: "space-y-1.5" };
const _hoisted_20 = ["max"];
const _hoisted_21 = { class: "flex justify-between text-[10px] font-semibold text-slate-400/80 font-mono leading-none" };
const _hoisted_22 = { class: "bg-blue-50/40 border border-blue-100/50 rounded-2xl p-4.5 space-y-3" };
const _hoisted_23 = { class: "grid grid-cols-3 items-center text-center gap-1" };
const _hoisted_24 = { class: "text-xs font-semibold text-slate-700 font-mono" };
const _hoisted_25 = { class: "flex flex-col items-center" };
const _hoisted_26 = { class: "text-[10px] font-bold text-blue-650 mt-0.5 bg-blue-50 px-2 py-0.5 rounded-md font-mono" };
const _hoisted_27 = { class: "text-xs font-black text-slate-800 font-mono" };
const _hoisted_28 = { class: "flex gap-4 relative z-10 pt-2 border-t border-slate-100" };
const _hoisted_29 = ["disabled"];
const _hoisted_30 = {
  key: 0,
  class: "w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
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
        createBaseVNode("div", _hoisted_1, [
          _cache[13] || (_cache[13] = createBaseVNode("div", { class: "absolute top-0 right-0 -mr-16 -mt-16 w-36 h-36 rounded-full bg-blue-500/5 blur-3xl" }, null, -1)),
          _cache[14] || (_cache[14] = createBaseVNode("div", { class: "absolute bottom-0 left-0 -ml-16 -mb-16 w-36 h-36 rounded-full bg-blue-500/5 blur-3xl" }, null, -1)),
          createBaseVNode("div", _hoisted_2, [
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
          createBaseVNode("div", _hoisted_3, [
            createBaseVNode("div", _hoisted_4, [
              createBaseVNode("div", _hoisted_5, [
                createVNode(unref(Armchair), { class: "w-5 h-5" })
              ]),
              createBaseVNode("div", _hoisted_6, [
                createBaseVNode("h4", _hoisted_7, "Seat " + toDisplayString(__props.booking?.seat?.seat_number), 1),
                createBaseVNode("p", _hoisted_8, toDisplayString(__props.booking?.seat?.library?.name), 1)
              ]),
              libraryClosingTime.value ? (openBlock(), createElementBlock("div", _hoisted_9, [
                _cache[3] || (_cache[3] = createBaseVNode("p", { class: "text-[9px] font-semibold uppercase tracking-wider text-slate-400" }, "Library Closes", -1)),
                createBaseVNode("p", _hoisted_10, toDisplayString(formatTimeOnly(libraryClosingTime.value)), 1)
              ])) : createCommentVNode("", true)
            ]),
            isExtensionRestricted.value ? (openBlock(), createElementBlock("div", _hoisted_11, [
              createVNode(unref(CircleAlert), { class: "w-5 h-5 text-rose-500 flex-shrink-0 mt-0.5" }),
              _cache[4] || (_cache[4] = createBaseVNode("div", null, [
                createBaseVNode("h5", { class: "text-xs font-semibold text-rose-800" }, "Extension Locked"),
                createBaseVNode("p", { class: "text-[10.5px] text-rose-600 mt-1 leading-relaxed" }, " Cannot extend booking with less than 10 minutes remaining. Priority is shifted to the queue. ")
              ], -1))
            ])) : maxExtensionMinutes.value < 10 || isLibraryClosingSoon.value ? (openBlock(), createElementBlock("div", _hoisted_12, [
              createVNode(unref(TriangleAlert), { class: "w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" }),
              _cache[5] || (_cache[5] = createBaseVNode("div", null, [
                createBaseVNode("h5", { class: "text-xs font-semibold text-amber-800" }, "Closing Soon"),
                createBaseVNode("p", { class: "text-[10.5px] text-amber-600 mt-1 leading-relaxed" }, " Cannot extend: The library is closing in less than 10 minutes. ")
              ], -1))
            ])) : createCommentVNode("", true),
            isExtensionAllowed.value ? (openBlock(), createElementBlock("div", _hoisted_13, [
              createBaseVNode("div", null, [
                _cache[6] || (_cache[6] = createBaseVNode("label", { class: "text-[10px] font-semibold uppercase tracking-widest text-slate-400 block mb-2.5" }, "Quick Add Extension", -1)),
                createBaseVNode("div", _hoisted_14, [
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
                    ], 10, _hoisted_15);
                  }), 64))
                ])
              ]),
              createBaseVNode("div", null, [
                createBaseVNode("div", _hoisted_16, [
                  _cache[8] || (_cache[8] = createBaseVNode("label", { class: "text-[10px] font-semibold uppercase tracking-widest text-slate-400" }, "Custom Duration", -1)),
                  createBaseVNode("div", _hoisted_17, [
                    withDirectives(createBaseVNode("input", {
                      type: "number",
                      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => extensionDuration.value = $event),
                      min: 10,
                      max: maxExtensionMinutes.value,
                      class: "w-16 text-center py-1 px-1.5 border border-slate-200 rounded-lg text-xs font-medium text-slate-750 focus:outline-none focus:border-blue-500 font-mono"
                    }, null, 8, _hoisted_18), [
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
                createBaseVNode("div", _hoisted_19, [
                  withDirectives(createBaseVNode("input", {
                    type: "range",
                    "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => extensionDuration.value = $event),
                    min: 10,
                    max: maxExtensionMinutes.value,
                    class: "w-full accent-blue-600 h-1.5 bg-slate-100 rounded-lg appearance-none cursor-pointer"
                  }, null, 8, _hoisted_20), [
                    [
                      vModelText,
                      extensionDuration.value,
                      void 0,
                      { number: true }
                    ]
                  ]),
                  createBaseVNode("div", _hoisted_21, [
                    createBaseVNode("span", null, "Min: " + toDisplayString(formatMinutes(10)), 1),
                    createBaseVNode("span", null, "Max: " + toDisplayString(formatMinutes(maxExtensionMinutes.value)), 1)
                  ])
                ])
              ]),
              createBaseVNode("div", _hoisted_22, [
                _cache[11] || (_cache[11] = createBaseVNode("h5", { class: "text-[9.5px] font-semibold text-blue-500 uppercase tracking-widest" }, "Time Extension Preview", -1)),
                createBaseVNode("div", _hoisted_23, [
                  createBaseVNode("div", null, [
                    _cache[9] || (_cache[9] = createBaseVNode("p", { class: "text-[9px] text-slate-400 font-semibold uppercase mb-0.5" }, "Current End", -1)),
                    createBaseVNode("p", _hoisted_24, toDisplayString(formatTimeOnly(currentEndTime.value)), 1)
                  ]),
                  createBaseVNode("div", _hoisted_25, [
                    createVNode(unref(ArrowRight), { class: "w-4 h-4 text-blue-400" }),
                    createBaseVNode("span", _hoisted_26, toDisplayString(formatAddedTime.value), 1)
                  ]),
                  createBaseVNode("div", null, [
                    _cache[10] || (_cache[10] = createBaseVNode("p", { class: "text-[9px] text-slate-400 font-semibold uppercase mb-0.5" }, "New End Time", -1)),
                    createBaseVNode("p", _hoisted_27, toDisplayString(formatTimeOnly(newEndTime.value)), 1)
                  ])
                ])
              ])
            ])) : createCommentVNode("", true)
          ]),
          createBaseVNode("div", _hoisted_28, [
            createBaseVNode("button", {
              onClick: closeModal,
              class: "flex-1 py-3.5 rounded-xl font-semibold text-slate-550 bg-slate-50 hover:bg-slate-100 border border-slate-200/60 transition-all text-xs"
            }, " Cancel "),
            createBaseVNode("button", {
              onClick: handleConfirm,
              disabled: !isExtensionAllowed.value || loading.value,
              class: "flex-1 py-3.5 rounded-xl font-semibold text-white bg-blue-600 hover:bg-blue-700 disabled:opacity-40 disabled:cursor-not-allowed shadow-lg shadow-blue-500/10 transition-all text-xs flex items-center justify-center space-x-1.5"
            }, [
              loading.value ? (openBlock(), createElementBlock("span", _hoisted_30)) : createCommentVNode("", true),
              _cache[12] || (_cache[12] = createBaseVNode("span", null, "Confirm Extension", -1))
            ], 8, _hoisted_29)
          ])
        ])
      ])) : createCommentVNode("", true);
    };
  }
});
const SeatExtensionModal = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-48e65ddd"]]);
export {
  SeatExtensionModal as S
};
