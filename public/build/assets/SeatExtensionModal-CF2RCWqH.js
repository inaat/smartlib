import { d as defineComponent, J as useApp, r as ref, c as computed, G as watch, o as onMounted, H as onUnmounted, a as createElementBlock, l as createCommentVNode, z as withModifiers, b as createBaseVNode, f as createVNode, u as unref, n as normalizeClass, t as toDisplayString, F as Fragment, j as renderList, p as withDirectives, v as vModelText, k as openBlock } from "./main-DKJzpCzk.js";
import { u as useSwal } from "./useSwal-pQW_XkRe.js";
import { X } from "./x-BLKH3q-c.js";
import { A as Armchair } from "./armchair-B9aMc4Sz.js";
import { C as CircleAlert } from "./circle-alert-CKXiS_Iq.js";
import { T as TriangleAlert } from "./triangle-alert-BLFAvrrP.js";
import { A as ArrowRight } from "./arrow-right-Y0RouQBR.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _hoisted_1 = { class: "bg-white rounded-[2rem] p-8 max-w-md w-full shadow-2xl border border-slate-100 animate-fade-in text-left relative overflow-hidden font-outfit" };
const _hoisted_2 = { class: "flex items-center justify-between mb-6 relative z-10" };
const _hoisted_3 = { class: "flex flex-col items-center mb-6 relative z-10" };
const _hoisted_4 = { class: "relative w-36 h-36 mb-6 flex items-center justify-center" };
const _hoisted_5 = { class: "w-36 h-36 transform -rotate-90" };
const _hoisted_6 = ["stroke-dasharray", "stroke-dashoffset"];
const _hoisted_7 = { class: "absolute inset-0 flex flex-col items-center justify-center" };
const _hoisted_8 = { class: "w-full bg-slate-50 border border-slate-100/80 rounded-2xl p-4 flex items-center gap-3.5 mb-6" };
const _hoisted_9 = { class: "w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0" };
const _hoisted_10 = { class: "min-w-0 flex-1" };
const _hoisted_11 = { class: "text-xs font-bold text-slate-700" };
const _hoisted_12 = { class: "text-[10px] text-slate-400 font-semibold truncate" };
const _hoisted_13 = {
  key: 0,
  class: "text-right flex-shrink-0"
};
const _hoisted_14 = { class: "text-xs font-bold text-slate-650" };
const _hoisted_15 = {
  key: 0,
  class: "w-full p-4 bg-rose-50 border border-rose-100 rounded-2xl mb-6 flex gap-3 text-left"
};
const _hoisted_16 = {
  key: 1,
  class: "w-full p-4 bg-amber-50 border border-amber-100 rounded-2xl mb-6 flex gap-3 text-left"
};
const _hoisted_17 = {
  key: 2,
  class: "w-full space-y-6 text-left"
};
const _hoisted_18 = { class: "grid grid-cols-3 gap-3" };
const _hoisted_19 = ["onClick", "disabled"];
const _hoisted_20 = { class: "flex items-center justify-between mb-2" };
const _hoisted_21 = { class: "flex items-center gap-1.5" };
const _hoisted_22 = ["max"];
const _hoisted_23 = { class: "flex items-center gap-4" };
const _hoisted_24 = ["max"];
const _hoisted_25 = { class: "text-[10px] font-extrabold text-slate-450 font-mono" };
const _hoisted_26 = { class: "bg-indigo-50/40 border border-indigo-100/50 rounded-2xl p-4.5 space-y-3" };
const _hoisted_27 = { class: "grid grid-cols-3 items-center text-center gap-1" };
const _hoisted_28 = { class: "text-xs font-bold text-slate-700 font-mono" };
const _hoisted_29 = { class: "flex flex-col items-center" };
const _hoisted_30 = { class: "text-[10px] font-black text-indigo-650 mt-0.5 bg-indigo-50 px-2 py-0.5 rounded-md font-mono" };
const _hoisted_31 = { class: "text-xs font-black text-slate-800 font-mono" };
const _hoisted_32 = { class: "flex gap-4 relative z-10 pt-2 border-t border-slate-100" };
const _hoisted_33 = ["disabled"];
const _hoisted_34 = {
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
    const libraryClosingTime = computed(() => {
      if (!props.booking?.seat?.library) return null;
      const library = props.booking.seat.library;
      const end = currentEndTime.value;
      if (!end) return null;
      const dayName = getDayName(end);
      const opHours = library.operating_hours || library.operatingHours || [];
      const opHour = opHours.find((oh) => oh.day_of_week === dayName && oh.is_open);
      if (!opHour || !opHour.close_time) return null;
      const [h, m, s] = opHour.close_time.split(":").map(Number);
      const closingDate = new Date(end);
      closingDate.setHours(h, m, s || 0, 0);
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
    const percentageRemaining = computed(() => {
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
    const formatRemainingTime = computed(() => {
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
          _cache[16] || (_cache[16] = createBaseVNode("div", { class: "absolute top-0 right-0 -mr-16 -mt-16 w-36 h-36 rounded-full bg-blue-500/5 blur-3xl" }, null, -1)),
          _cache[17] || (_cache[17] = createBaseVNode("div", { class: "absolute bottom-0 left-0 -ml-16 -mb-16 w-36 h-36 rounded-full bg-purple-500/5 blur-3xl" }, null, -1)),
          createBaseVNode("div", _hoisted_2, [
            _cache[2] || (_cache[2] = createBaseVNode("div", null, [
              createBaseVNode("h3", { class: "text-xl font-black text-slate-800" }, "Extend Session"),
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
              (openBlock(), createElementBlock("svg", _hoisted_5, [
                _cache[3] || (_cache[3] = createBaseVNode("circle", {
                  cx: "72",
                  cy: "72",
                  r: "60",
                  class: "stroke-slate-100",
                  "stroke-width": "8",
                  fill: "transparent"
                }, null, -1)),
                createBaseVNode("circle", {
                  cx: "72",
                  cy: "72",
                  r: "60",
                  class: normalizeClass([
                    "transition-all duration-1000 ease-out",
                    remainingMinutes.value < 15 ? "stroke-rose-500" : "stroke-blue-600"
                  ]),
                  "stroke-width": "8",
                  fill: "transparent",
                  "stroke-dasharray": 2 * Math.PI * 60,
                  "stroke-dashoffset": (100 - percentageRemaining.value) / 100 * (2 * Math.PI * 60),
                  "stroke-linecap": "round"
                }, null, 10, _hoisted_6)
              ])),
              createBaseVNode("div", _hoisted_7, [
                _cache[4] || (_cache[4] = createBaseVNode("span", { class: "text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none" }, "Remaining", -1)),
                createBaseVNode("span", {
                  class: normalizeClass(["text-xl font-black font-mono mt-1", remainingMinutes.value < 15 ? "text-rose-500" : "text-slate-800"])
                }, toDisplayString(formatRemainingTime.value), 3)
              ])
            ]),
            createBaseVNode("div", _hoisted_8, [
              createBaseVNode("div", _hoisted_9, [
                createVNode(unref(Armchair), { class: "w-5 h-5" })
              ]),
              createBaseVNode("div", _hoisted_10, [
                createBaseVNode("h4", _hoisted_11, "Seat " + toDisplayString(__props.booking?.seat?.seat_number), 1),
                createBaseVNode("p", _hoisted_12, toDisplayString(__props.booking?.seat?.library?.name), 1)
              ]),
              libraryClosingTime.value ? (openBlock(), createElementBlock("div", _hoisted_13, [
                _cache[5] || (_cache[5] = createBaseVNode("p", { class: "text-[9px] font-extrabold uppercase tracking-wider text-slate-400" }, "Library Closes", -1)),
                createBaseVNode("p", _hoisted_14, toDisplayString(formatTimeOnly(libraryClosingTime.value)), 1)
              ])) : createCommentVNode("", true)
            ]),
            isExtensionRestricted.value ? (openBlock(), createElementBlock("div", _hoisted_15, [
              createVNode(unref(CircleAlert), { class: "w-5 h-5 text-rose-500 flex-shrink-0 mt-0.5" }),
              _cache[6] || (_cache[6] = createBaseVNode("div", null, [
                createBaseVNode("h5", { class: "text-xs font-bold text-rose-800" }, "Extension Locked"),
                createBaseVNode("p", { class: "text-[10.5px] text-rose-600 mt-1 leading-relaxed" }, " Cannot extend booking with less than 10 minutes remaining. Priority is shifted to the queue. ")
              ], -1))
            ])) : maxExtensionMinutes.value < 10 || isLibraryClosingSoon.value ? (openBlock(), createElementBlock("div", _hoisted_16, [
              createVNode(unref(TriangleAlert), { class: "w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" }),
              _cache[7] || (_cache[7] = createBaseVNode("div", null, [
                createBaseVNode("h5", { class: "text-xs font-bold text-amber-800" }, "Closing Soon"),
                createBaseVNode("p", { class: "text-[10.5px] text-amber-600 mt-1 leading-relaxed" }, " Cannot extend: The library is closing in less than 10 minutes. ")
              ], -1))
            ])) : createCommentVNode("", true),
            isExtensionAllowed.value ? (openBlock(), createElementBlock("div", _hoisted_17, [
              createBaseVNode("div", null, [
                _cache[8] || (_cache[8] = createBaseVNode("label", { class: "text-[10px] font-extrabold uppercase tracking-widest text-slate-400 block mb-2.5" }, "Quick Add Extension", -1)),
                createBaseVNode("div", _hoisted_18, [
                  (openBlock(), createElementBlock(Fragment, null, renderList(quickOptions, (btn) => {
                    return createBaseVNode("button", {
                      key: btn.value,
                      onClick: ($event) => setDuration(btn.value),
                      disabled: btn.value > maxExtensionMinutes.value,
                      class: normalizeClass([
                        "py-3 rounded-xl font-extrabold text-xs transition-all border flex flex-col items-center justify-center gap-0.5",
                        extensionDuration.value === btn.value ? "bg-blue-600 text-white border-transparent shadow-lg shadow-blue-500/15 scale-[1.02]" : "bg-slate-50 text-slate-700 border-slate-100 hover:border-slate-200 hover:bg-slate-100/60 disabled:opacity-40 disabled:cursor-not-allowed"
                      ])
                    }, [
                      createBaseVNode("span", null, toDisplayString(btn.label), 1)
                    ], 10, _hoisted_19);
                  }), 64))
                ])
              ]),
              createBaseVNode("div", null, [
                createBaseVNode("div", _hoisted_20, [
                  _cache[10] || (_cache[10] = createBaseVNode("label", { class: "text-[10px] font-extrabold uppercase tracking-widest text-slate-400" }, "Custom Duration", -1)),
                  createBaseVNode("div", _hoisted_21, [
                    withDirectives(createBaseVNode("input", {
                      type: "number",
                      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => extensionDuration.value = $event),
                      min: 10,
                      max: maxExtensionMinutes.value,
                      class: "w-16 text-center py-1 px-1.5 border border-slate-200 rounded-lg text-xs font-bold text-slate-750 focus:outline-none focus:border-blue-500 font-mono"
                    }, null, 8, _hoisted_22), [
                      [
                        vModelText,
                        extensionDuration.value,
                        void 0,
                        { number: true }
                      ]
                    ]),
                    _cache[9] || (_cache[9] = createBaseVNode("span", { class: "text-[10px] font-bold text-slate-400" }, "min", -1))
                  ])
                ]),
                createBaseVNode("div", _hoisted_23, [
                  _cache[11] || (_cache[11] = createBaseVNode("span", { class: "text-[10px] font-extrabold text-slate-450 font-mono" }, "10m", -1)),
                  withDirectives(createBaseVNode("input", {
                    type: "range",
                    "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => extensionDuration.value = $event),
                    min: 10,
                    max: maxExtensionMinutes.value,
                    class: "flex-1 accent-blue-600 h-1.5 bg-slate-100 rounded-lg appearance-none cursor-pointer"
                  }, null, 8, _hoisted_24), [
                    [
                      vModelText,
                      extensionDuration.value,
                      void 0,
                      { number: true }
                    ]
                  ]),
                  createBaseVNode("span", _hoisted_25, toDisplayString(maxExtensionMinutes.value) + "m", 1)
                ])
              ]),
              createBaseVNode("div", _hoisted_26, [
                _cache[14] || (_cache[14] = createBaseVNode("h5", { class: "text-[9.5px] font-extrabold text-indigo-500 uppercase tracking-widest" }, "Time Extension Preview", -1)),
                createBaseVNode("div", _hoisted_27, [
                  createBaseVNode("div", null, [
                    _cache[12] || (_cache[12] = createBaseVNode("p", { class: "text-[9px] text-slate-400 font-semibold uppercase mb-0.5" }, "Current End", -1)),
                    createBaseVNode("p", _hoisted_28, toDisplayString(formatTimeOnly(currentEndTime.value)), 1)
                  ]),
                  createBaseVNode("div", _hoisted_29, [
                    createVNode(unref(ArrowRight), { class: "w-4 h-4 text-indigo-400" }),
                    createBaseVNode("span", _hoisted_30, toDisplayString(formatAddedTime.value), 1)
                  ]),
                  createBaseVNode("div", null, [
                    _cache[13] || (_cache[13] = createBaseVNode("p", { class: "text-[9px] text-slate-400 font-semibold uppercase mb-0.5" }, "New End Time", -1)),
                    createBaseVNode("p", _hoisted_31, toDisplayString(formatTimeOnly(newEndTime.value)), 1)
                  ])
                ])
              ])
            ])) : createCommentVNode("", true)
          ]),
          createBaseVNode("div", _hoisted_32, [
            createBaseVNode("button", {
              onClick: closeModal,
              class: "flex-1 py-3.5 rounded-xl font-bold text-slate-550 bg-slate-50 hover:bg-slate-100 border border-slate-200/60 transition-all text-xs"
            }, " Cancel "),
            createBaseVNode("button", {
              onClick: handleConfirm,
              disabled: !isExtensionAllowed.value || loading.value,
              class: "flex-1 py-3.5 rounded-xl font-extrabold text-white bg-blue-600 hover:bg-blue-700 disabled:opacity-40 disabled:cursor-not-allowed shadow-lg shadow-blue-500/10 transition-all text-xs flex items-center justify-center space-x-1.5"
            }, [
              loading.value ? (openBlock(), createElementBlock("span", _hoisted_34)) : createCommentVNode("", true),
              _cache[15] || (_cache[15] = createBaseVNode("span", null, "Confirm Extension", -1))
            ], 8, _hoisted_33)
          ])
        ])
      ])) : createCommentVNode("", true);
    };
  }
});
const SeatExtensionModal = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-04a87c85"]]);
export {
  SeatExtensionModal as S
};
