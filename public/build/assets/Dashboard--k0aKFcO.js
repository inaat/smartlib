import { d as defineComponent, r as ref, o as onMounted, H as onUnmounted, E as watch, a as createElementBlock, b as createBaseVNode, f as createVNode, u as unref, F as Fragment, k as renderList, q as normalizeStyle, t as toDisplayString, n as normalizeClass, j as createCommentVNode, l as openBlock, J as useApp, c as computed, i as createTextVNode, g as resolveComponent, w as withCtx, C as useRouter, h as createBlock, m as resolveDynamicComponent, x as useAuth, L as studentAPI } from "./main-CP29_5Dg.js";
import { S as Sparkles } from "./sparkles-DbVCJw-C.js";
import { C as ChevronLeft } from "./chevron-left-aEA9JtRc.js";
import { C as ChevronRight } from "./chevron-right-Cl2toq80.js";
import { C as Clock } from "./clock-Bt9n9pGR.js";
import { M as MapPin } from "./map-pin-3HAewkcf.js";
import { U as User } from "./user-q-rSNpCr.js";
import { C as Calendar } from "./calendar-OYhy8Nsc.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import { u as useSwal } from "./useSwal-pQW_XkRe.js";
import { S as SeatExtensionModal } from "./SeatExtensionModal-u5jSCFnd.js";
import { A as Armchair } from "./armchair-DBZRU5n1.js";
import { T as TriangleAlert } from "./triangle-alert-Coh8QMyg.js";
import { M as Monitor } from "./monitor-wfxbPFep.js";
import { P as PanelsTopLeft } from "./panels-top-left-BCXG0zkT.js";
import { Z as Zap } from "./zap-Cw81dnaS.js";
import { U as Users } from "./users-BL5Ms-cb.js";
import { A as ArrowRight } from "./arrow-right-BPpJSKOe.js";
import { B as BookOpen } from "./book-open-C5CD1i_v.js";
import { c as createLucideIcon } from "./createLucideIcon-DTPudzWg.js";
import { F as Flame } from "./flame-CoYxfIds.js";
import { T as TrendingUp } from "./trending-up-_Yvz0yIh.js";
import { B as BookMarked } from "./book-marked-C5I1JbSo.js";
import { C as ChartColumn } from "./chart-column-DGWJzY33.js";
import { A as Activity } from "./activity-CW6bhswl.js";
/* empty css               */
import "./x-BFxoMqPZ.js";
import "./circle-alert-CkJil15G.js";
const Target = createLucideIcon("target", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["circle", { cx: "12", cy: "12", r: "6", key: "1vlfrh" }],
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }]
]);
const _hoisted_1$5 = {
  key: 0,
  class: "bg-white rounded-2xl shadow-sm border border-slate-100 p-8 text-center font-outfit"
};
const _hoisted_2$5 = {
  key: 1,
  class: "bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden font-outfit text-left"
};
const _hoisted_3$5 = { class: "px-6 py-4.5 border-b border-slate-100 flex items-center justify-between" };
const _hoisted_4$5 = { class: "flex items-center space-x-2.5" };
const _hoisted_5$5 = { class: "p-2 text-orange-500" };
const _hoisted_6$5 = { class: "flex items-center space-x-2" };
const _hoisted_7$5 = { class: "flex space-x-1.5" };
const _hoisted_8$4 = ["onClick"];
const _hoisted_9$4 = { class: "flex space-x-1 ml-3.5" };
const _hoisted_10$4 = ["disabled"];
const _hoisted_11$4 = ["disabled"];
const _hoisted_12$4 = { class: "relative overflow-hidden" };
const _hoisted_13$3 = { class: "flex flex-col md:flex-row md:items-center justify-between gap-5" };
const _hoisted_14$3 = { class: "flex-1" };
const _hoisted_15$3 = { class: "font-semibold text-slate-800 text-base mb-2 tracking-tight leading-snug" };
const _hoisted_16$3 = { class: "text-xs text-slate-500 mb-4.5 leading-relaxed font-normal max-w-xl" };
const _hoisted_17$3 = { class: "flex flex-wrap items-center gap-x-5 gap-y-2 text-[10px] font-medium text-slate-400" };
const _hoisted_18$3 = {
  key: 0,
  class: "flex items-center"
};
const _hoisted_19$3 = {
  key: 1,
  class: "flex items-center"
};
const _hoisted_20$3 = {
  key: 2,
  class: "flex items-center"
};
const _hoisted_21$3 = {
  key: 3,
  class: "flex items-center"
};
const _hoisted_22$3 = { class: "flex-shrink-0 text-left md:text-right" };
const _hoisted_23$3 = ["onClick"];
const _hoisted_24$3 = { class: "px-6 pb-4" };
const _hoisted_25$2 = { class: "w-full bg-slate-100 border border-slate-200/50 rounded-full h-1 overflow-hidden" };
const _hoisted_26$2 = { class: "flex justify-between text-[10px] font-semibold text-slate-400 uppercase tracking-widest mt-2 leading-none" };
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "RecommendationSlider",
  props: {
    recommendations: {}
  },
  emits: ["action"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const currentIndex = ref(0);
    const isAutoPlaying = ref(true);
    let interval = null;
    let resumeTimeout = null;
    const startAutoPlay = () => {
      if (props.recommendations.length <= 1) return;
      interval = setInterval(() => {
        currentIndex.value = currentIndex.value === props.recommendations.length - 1 ? 0 : currentIndex.value + 1;
      }, 5e3);
    };
    const stopAutoPlay = () => {
      if (interval) clearInterval(interval);
    };
    const goToSlide = (index) => {
      currentIndex.value = index;
      isAutoPlaying.value = false;
      if (resumeTimeout) clearTimeout(resumeTimeout);
      resumeTimeout = setTimeout(() => {
        isAutoPlaying.value = true;
      }, 1e4);
    };
    const goToPrevious = () => {
      const newIndex = currentIndex.value === 0 ? props.recommendations.length - 1 : currentIndex.value - 1;
      goToSlide(newIndex);
    };
    const goToNext = () => {
      const newIndex = currentIndex.value === props.recommendations.length - 1 ? 0 : currentIndex.value + 1;
      goToSlide(newIndex);
    };
    const getTypeColor = (type) => {
      switch (type) {
        case "seat":
          return "bg-blue-50 border-blue-100 text-blue-700";
        case "book":
          return "bg-teal-50 border-teal-100 text-teal-700";
        case "event":
          return "bg-amber-50 border-amber-100 text-amber-700";
        default:
          return "bg-slate-50 border-slate-100 text-slate-700";
      }
    };
    const getButtonColor = (type) => {
      switch (type) {
        case "seat":
          return "bg-blue-600 hover:bg-blue-700 border border-blue-700";
        case "book":
          return "bg-teal-600 hover:bg-teal-700 border border-teal-700";
        case "event":
          return "bg-amber-600 hover:bg-amber-700 border border-amber-700";
        default:
          return "bg-slate-600 hover:bg-slate-700 border border-slate-700";
      }
    };
    onMounted(() => {
      if (isAutoPlaying.value) startAutoPlay();
    });
    onUnmounted(() => {
      stopAutoPlay();
      if (resumeTimeout) clearTimeout(resumeTimeout);
    });
    watch(isAutoPlaying, (newVal) => {
      if (newVal) startAutoPlay();
      else stopAutoPlay();
    });
    return (_ctx, _cache) => {
      return __props.recommendations.length === 0 ? (openBlock(), createElementBlock("div", _hoisted_1$5, [..._cache[0] || (_cache[0] = [
        createBaseVNode("div", { class: "text-xs font-semibold text-slate-400 uppercase tracking-wider" }, "No recommendations available", -1)
      ])])) : (openBlock(), createElementBlock("div", _hoisted_2$5, [
        createBaseVNode("div", _hoisted_3$5, [
          createBaseVNode("div", _hoisted_4$5, [
            createBaseVNode("div", _hoisted_5$5, [
              createVNode(unref(Sparkles), { class: "w-4 h-4" })
            ]),
            _cache[1] || (_cache[1] = createBaseVNode("h2", { class: "text-sm font-semibold text-slate-700 uppercase tracking-wider" }, "Recommendations", -1))
          ]),
          createBaseVNode("div", _hoisted_6$5, [
            createBaseVNode("div", _hoisted_7$5, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(__props.recommendations, (_, index) => {
                return openBlock(), createElementBlock("button", {
                  key: index,
                  onClick: ($event) => goToSlide(index),
                  class: normalizeClass([
                    "w-1.5 h-1.5 rounded-full transition-all duration-300",
                    index === currentIndex.value ? "bg-blue-600 w-4" : "bg-slate-200 hover:bg-slate-300"
                  ])
                }, null, 10, _hoisted_8$4);
              }), 128))
            ]),
            createBaseVNode("div", _hoisted_9$4, [
              createBaseVNode("button", {
                onClick: goToPrevious,
                class: "p-1.5 bg-slate-50 border border-slate-200/80 rounded-xl hover:bg-slate-100 transition-colors disabled:opacity-40",
                disabled: __props.recommendations.length <= 1,
                title: "Previous Slide"
              }, [
                createVNode(unref(ChevronLeft), { class: "w-3.5 h-3.5 text-slate-600" })
              ], 8, _hoisted_10$4),
              createBaseVNode("button", {
                onClick: goToNext,
                class: "p-1.5 bg-slate-50 border border-slate-200/80 rounded-xl hover:bg-slate-100 transition-colors disabled:opacity-40",
                disabled: __props.recommendations.length <= 1,
                title: "Next Slide"
              }, [
                createVNode(unref(ChevronRight), { class: "w-3.5 h-3.5 text-slate-600" })
              ], 8, _hoisted_11$4)
            ])
          ])
        ]),
        createBaseVNode("div", _hoisted_12$4, [
          createBaseVNode("div", {
            class: "flex transition-transform duration-500 ease-in-out",
            style: normalizeStyle({ transform: `translateX(-${currentIndex.value * 100}%)` })
          }, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(__props.recommendations, (recommendation, index) => {
              return openBlock(), createElementBlock("div", {
                key: index,
                class: "w-full flex-shrink-0 p-6"
              }, [
                createBaseVNode("div", _hoisted_13$3, [
                  createBaseVNode("div", _hoisted_14$3, [
                    createBaseVNode("div", {
                      class: normalizeClass(["inline-flex px-2.5 py-0.5 rounded-full text-[9px] font-semibold uppercase tracking-wider mb-3 border", getTypeColor(recommendation.type)])
                    }, toDisplayString(recommendation.type) + " Recommendation ", 3),
                    createBaseVNode("h3", _hoisted_15$3, toDisplayString(recommendation.title), 1),
                    createBaseVNode("p", _hoisted_16$3, toDisplayString(recommendation.description), 1),
                    createBaseVNode("div", _hoisted_17$3, [
                      recommendation.time ? (openBlock(), createElementBlock("div", _hoisted_18$3, [
                        createVNode(unref(Clock), { class: "w-3.5 h-3.5 mr-1.5 text-slate-400" }),
                        createBaseVNode("span", null, toDisplayString(recommendation.time), 1)
                      ])) : createCommentVNode("", true),
                      recommendation.location ? (openBlock(), createElementBlock("div", _hoisted_19$3, [
                        createVNode(unref(MapPin), { class: "w-3.5 h-3.5 mr-1.5 text-slate-400" }),
                        createBaseVNode("span", null, toDisplayString(recommendation.location), 1)
                      ])) : createCommentVNode("", true),
                      recommendation.author ? (openBlock(), createElementBlock("div", _hoisted_20$3, [
                        createVNode(unref(User), { class: "w-3.5 h-3.5 mr-1.5 text-slate-400" }),
                        createBaseVNode("span", null, toDisplayString(recommendation.author), 1)
                      ])) : createCommentVNode("", true),
                      recommendation.date ? (openBlock(), createElementBlock("div", _hoisted_21$3, [
                        createVNode(unref(Calendar), { class: "w-3.5 h-3.5 mr-1.5 text-slate-400" }),
                        createBaseVNode("span", null, toDisplayString(recommendation.date), 1)
                      ])) : createCommentVNode("", true)
                    ])
                  ]),
                  createBaseVNode("div", _hoisted_22$3, [
                    createBaseVNode("button", {
                      onClick: ($event) => emit("action", recommendation),
                      class: normalizeClass(["px-5 py-2.5 rounded-xl text-white text-xs font-semibold uppercase tracking-wider transition-all duration-200 hover-lift active:scale-98 shadow-sm", getButtonColor(recommendation.type)])
                    }, toDisplayString(recommendation.action), 11, _hoisted_23$3)
                  ])
                ])
              ]);
            }), 128))
          ], 4)
        ]),
        createBaseVNode("div", _hoisted_24$3, [
          createBaseVNode("div", _hoisted_25$2, [
            createBaseVNode("div", {
              class: "bg-blue-600 h-full rounded-full transition-all duration-500 ease-in-out",
              style: normalizeStyle({ width: `${(currentIndex.value + 1) / __props.recommendations.length * 100}%` })
            }, null, 4)
          ]),
          createBaseVNode("div", _hoisted_26$2, [
            createBaseVNode("span", null, toDisplayString(currentIndex.value + 1) + " of " + toDisplayString(__props.recommendations.length), 1),
            createBaseVNode("span", null, toDisplayString(isAutoPlaying.value ? "Auto-playing" : "Paused"), 1)
          ])
        ])
      ]));
    };
  }
});
const RecommendationSlider = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-6a3026a8"]]);
const _hoisted_1$4 = { class: "bg-white rounded-xl shadow-sm border border-gray-200 p-6 relative overflow-hidden" };
const _hoisted_2$4 = { class: "text-sm font-bold text-slate-800 uppercase tracking-wider mb-5 flex items-center" };
const _hoisted_3$4 = {
  key: 0,
  class: "text-center py-10 bg-slate-50/50 rounded-2xl border border-dashed border-slate-200"
};
const _hoisted_4$4 = { class: "w-12 h-12 bg-white border border-slate-100 rounded-full flex items-center justify-center mx-auto mb-3.5 shadow-sm" };
const _hoisted_5$4 = {
  key: 1,
  class: "space-y-4"
};
const _hoisted_6$4 = { class: "flex items-start justify-between mb-4" };
const _hoisted_7$4 = { class: "flex items-center space-x-3" };
const _hoisted_8$3 = { class: "font-bold text-slate-800 text-sm" };
const _hoisted_9$3 = { class: "text-right" };
const _hoisted_10$3 = { class: "text-[9px] font-bold text-slate-400 uppercase tracking-widest leading-none mb-1" };
const _hoisted_11$3 = {
  key: 0,
  class: "mb-3.5 p-3 bg-red-50 border border-red-100 rounded-xl flex items-center text-red-700 animate-pulse-slow text-xs"
};
const _hoisted_12$3 = { class: "space-y-2.5 text-xs text-slate-500 border-t border-slate-100/60 pt-3.5" };
const _hoisted_13$2 = { class: "flex items-center" };
const _hoisted_14$2 = { class: "font-semibold text-slate-700" };
const _hoisted_15$2 = { class: "flex items-center" };
const _hoisted_16$2 = { class: "flex flex-wrap gap-2 pt-1.5" };
const _hoisted_17$2 = {
  key: 0,
  class: "flex items-center text-[9px] bg-blue-50 text-blue-700 border border-blue-100/40 px-2 py-0.5 rounded-md font-bold"
};
const _hoisted_18$2 = {
  key: 1,
  class: "flex items-center text-[9px] bg-yellow-50 text-yellow-700 border border-yellow-100/40 px-2 py-0.5 rounded-md font-bold"
};
const _hoisted_19$2 = {
  key: 2,
  class: "flex items-center text-[9px] bg-emerald-50 text-emerald-700 border border-emerald-100/40 px-2 py-0.5 rounded-md font-bold"
};
const _hoisted_20$2 = { class: "mt-4.5 flex gap-2.5 pt-3 border-t border-slate-100/60" };
const _hoisted_21$2 = ["onClick"];
const _hoisted_22$2 = ["onClick"];
const _hoisted_23$2 = ["onClick"];
const _hoisted_24$2 = ["onClick"];
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "UpcomingBookings",
  setup(__props) {
    const { bookings, loadBookings, checkOutSeat, cancelBooking } = useApp();
    const router = useRouter();
    const { showConfirm, showSuccess } = useSwal();
    const now = ref(/* @__PURE__ */ new Date());
    const extensionModal = ref({
      show: false,
      booking: null
    });
    let timer = null;
    const activeBookings = computed(
      () => bookings.value.filter((b) => b.status === "booked" || b.status === "checked_in").slice(0, 3)
    );
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
        return isOverdue(booking) ? "Overtime" : "Remaining";
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
        return "00:00:00";
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
    const formatTime = (dateStr) => {
      return new Date(dateStr).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    };
    const handleCheckIn = (id) => {
      router.push({ name: "student-qr-checkin", query: { booking_id: id.toString() } });
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
    const isEndingSoon = (booking) => {
      const endTimeStr = booking.scheduled_end_time || booking.endTime;
      if (!endTimeStr) return false;
      const end = new Date(endTimeStr);
      const diffMinutes = (end.getTime() - now.value.getTime()) / 6e4;
      return diffMinutes > 0 && diffMinutes <= 15;
    };
    const handleExtend = (booking) => {
      extensionModal.value = {
        show: true,
        booking
      };
    };
    onMounted(() => {
      timer = setInterval(() => {
        now.value = /* @__PURE__ */ new Date();
      }, 1e3);
    });
    onUnmounted(() => {
      if (timer) clearInterval(timer);
    });
    return (_ctx, _cache) => {
      const _component_router_link = resolveComponent("router-link");
      return openBlock(), createElementBlock("div", _hoisted_1$4, [
        createBaseVNode("h2", _hoisted_2$4, [
          createVNode(unref(Calendar), { class: "w-4 h-4 mr-2 text-blue-600" }),
          _cache[1] || (_cache[1] = createTextVNode(" Active & Upcoming ", -1))
        ]),
        activeBookings.value.length === 0 ? (openBlock(), createElementBlock("div", _hoisted_3$4, [
          createBaseVNode("div", _hoisted_4$4, [
            createVNode(unref(Calendar), { class: "w-5.5 h-5.5 text-slate-400" })
          ]),
          _cache[3] || (_cache[3] = createBaseVNode("p", { class: "text-slate-500 text-xs font-semibold" }, "No active reservations at the moment", -1)),
          createVNode(_component_router_link, {
            to: "/student/libraries",
            class: "text-xs text-blue-600 font-bold hover:text-blue-700 hover:underline mt-2.5 inline-block"
          }, {
            default: withCtx(() => [..._cache[2] || (_cache[2] = [
              createTextVNode(" Book a Study Seat ", -1)
            ])]),
            _: 1
          })
        ])) : (openBlock(), createElementBlock("div", _hoisted_5$4, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(activeBookings.value, (booking) => {
            return openBlock(), createElementBlock("div", {
              key: booking.id,
              class: "p-4.5 bg-slate-50/40 border border-slate-100 hover:border-slate-200/80 hover:bg-white rounded-2xl transition-all duration-300 hover:shadow-lg hover:shadow-slate-100/50 text-left relative group overflow-hidden"
            }, [
              createBaseVNode("div", {
                class: normalizeClass(["absolute top-0 left-0 right-0 h-1 transition-all", booking.status === "checked_in" ? "bg-gradient-to-r from-emerald-500 to-teal-400" : "bg-gradient-to-r from-blue-600 to-cyan-400"])
              }, null, 2),
              createBaseVNode("div", _hoisted_6$4, [
                createBaseVNode("div", _hoisted_7$4, [
                  createBaseVNode("div", {
                    class: normalizeClass(["w-10 h-10 rounded-xl flex items-center justify-center shadow-inner relative flex-shrink-0", booking.status === "checked_in" ? "bg-emerald-50 text-emerald-600 border border-emerald-100/50" : "bg-blue-50 text-blue-600 border border-blue-100/50"])
                  }, [
                    createVNode(unref(Armchair), { class: "w-5 h-5" }),
                    createBaseVNode("span", {
                      class: normalizeClass(["absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full border border-white", booking.status === "checked_in" ? "bg-emerald-500 animate-ping-fast" : "bg-blue-500 animate-ping-fast"])
                    }, null, 2),
                    createBaseVNode("span", {
                      class: normalizeClass(["absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full border border-white", booking.status === "checked_in" ? "bg-emerald-500" : "bg-blue-500"])
                    }, null, 2)
                  ], 2),
                  createBaseVNode("div", null, [
                    createBaseVNode("h3", _hoisted_8$3, " Seat " + toDisplayString(booking.seat?.seat_number), 1),
                    createBaseVNode("span", {
                      class: normalizeClass(["inline-block text-[9px] font-extrabold uppercase tracking-widest px-2 py-0.5 rounded-md mt-1 border", booking.status === "checked_in" ? "bg-emerald-50 text-emerald-700 border-emerald-100" : "bg-blue-50 text-blue-700 border-blue-100"])
                    }, toDisplayString(booking.status === "checked_in" ? "Active Now" : "Reserved"), 3)
                  ])
                ]),
                createBaseVNode("div", _hoisted_9$3, [
                  createBaseVNode("p", _hoisted_10$3, toDisplayString(getTimerLabel(booking)), 1),
                  createBaseVNode("p", {
                    class: normalizeClass(["text-sm font-black font-mono tracking-tight leading-none", isOverdue(booking) ? "text-red-500" : booking.status === "checked_in" ? "text-emerald-600" : "text-blue-600"])
                  }, toDisplayString(getRemainingTime(booking)), 3)
                ])
              ]),
              booking.status === "checked_in" && isEndingSoon(booking) ? (openBlock(), createElementBlock("div", _hoisted_11$3, [
                createVNode(unref(TriangleAlert), { class: "w-4 h-4 mr-2 text-red-500 flex-shrink-0" }),
                _cache[4] || (_cache[4] = createBaseVNode("span", { class: "font-bold" }, "Your session ends in less than 15 minutes!", -1))
              ])) : createCommentVNode("", true),
              createBaseVNode("div", _hoisted_12$3, [
                createBaseVNode("div", _hoisted_13$2, [
                  createVNode(unref(MapPin), { class: "w-3.5 h-3.5 mr-2 text-slate-400" }),
                  createBaseVNode("span", _hoisted_14$2, toDisplayString(booking.seat?.library?.name), 1)
                ]),
                createBaseVNode("div", _hoisted_15$2, [
                  createVNode(unref(Clock), { class: "w-3.5 h-3.5 mr-2 text-slate-400" }),
                  createBaseVNode("span", null, toDisplayString(formatTime(booking.booking_time)) + " - " + toDisplayString(formatTime(booking.scheduled_end_time)), 1)
                ]),
                createBaseVNode("div", _hoisted_16$2, [
                  booking.seat?.has_computer ? (openBlock(), createElementBlock("span", _hoisted_17$2, [
                    createVNode(unref(Monitor), { class: "w-2.5 h-2.5 mr-1 text-blue-500" }),
                    _cache[5] || (_cache[5] = createTextVNode(" PC Workspace ", -1))
                  ])) : createCommentVNode("", true),
                  booking.seat?.near_window ? (openBlock(), createElementBlock("span", _hoisted_18$2, [
                    createVNode(unref(PanelsTopLeft), { class: "w-2.5 h-2.5 mr-1 text-yellow-600" }),
                    _cache[6] || (_cache[6] = createTextVNode(" Window Seat ", -1))
                  ])) : createCommentVNode("", true),
                  booking.seat && (booking.seat.socket_count ?? 0) > 0 ? (openBlock(), createElementBlock("span", _hoisted_19$2, [
                    createVNode(unref(Zap), { class: "w-2.5 h-2.5 mr-1 text-emerald-600" }),
                    createTextVNode(" Power Socket (" + toDisplayString(booking.seat.socket_count) + ") ", 1)
                  ])) : createCommentVNode("", true)
                ])
              ]),
              createBaseVNode("div", _hoisted_20$2, [
                booking.status === "booked" ? (openBlock(), createElementBlock("button", {
                  key: 0,
                  onClick: ($event) => handleCheckIn(booking.id),
                  class: "flex-1 py-2 px-3 bg-blue-600 text-white rounded-xl text-xs font-extrabold shadow-md shadow-blue-500/10 transition-all flex items-center justify-center space-x-1"
                }, [..._cache[7] || (_cache[7] = [
                  createBaseVNode("span", null, "Check In", -1)
                ])], 8, _hoisted_21$2)) : createCommentVNode("", true),
                booking.status === "booked" ? (openBlock(), createElementBlock("button", {
                  key: 1,
                  onClick: ($event) => handleCancel(booking.id),
                  class: "flex-1 py-2 px-3 bg-white border border-red-200 hover:bg-red-50 text-red-500 rounded-xl text-xs font-bold transition-all"
                }, " Cancel ", 8, _hoisted_22$2)) : createCommentVNode("", true),
                booking.status === "checked_in" ? (openBlock(), createElementBlock("button", {
                  key: 2,
                  onClick: ($event) => handleCheckOut(booking.id),
                  class: "flex-1 py-2 px-3 bg-red-50/50 text-red-600 border border-red-600 rounded-xl text-xs font-extrabold shadow-md shadow-orange-500/10 transition-all"
                }, " Check Out ", 8, _hoisted_23$2)) : createCommentVNode("", true),
                booking.status === "checked_in" ? (openBlock(), createElementBlock("button", {
                  key: 3,
                  onClick: ($event) => handleExtend(booking),
                  class: "flex-1 py-2 px-3 bg-emerald-50/50 text-emerald-600 border border-emerled-600 rounded-xl text-xs font-extrabold shadow-md shadow-indigo-500/10 transition-all"
                }, " Extend ", 8, _hoisted_24$2)) : createCommentVNode("", true)
              ])
            ]);
          }), 128))
        ])),
        createVNode(SeatExtensionModal, {
          show: extensionModal.value.show,
          booking: extensionModal.value.booking,
          onClose: _cache[0] || (_cache[0] = ($event) => extensionModal.value.show = false),
          onSuccess: unref(loadBookings)
        }, null, 8, ["show", "booking", "onSuccess"])
      ]);
    };
  }
});
const UpcomingBookings = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-fb8e724a"]]);
const _hoisted_1$3 = {
  key: 0,
  class: "bg-white rounded-xl shadow-sm border border-orange-200 p-6"
};
const _hoisted_2$3 = { class: "text-lg font-bold text-gray-800 mb-4 flex items-center" };
const _hoisted_3$3 = { class: "space-y-4" };
const _hoisted_4$3 = { class: "flex items-center justify-between" };
const _hoisted_5$3 = { class: "flex items-center" };
const _hoisted_6$3 = { class: "p-2 bg-white rounded-lg shadow-sm mr-3" };
const _hoisted_7$3 = { class: "font-bold text-gray-800 text-sm" };
const _hoisted_8$2 = { class: "text-[10px] text-gray-500 font-bold uppercase tracking-wider" };
const _hoisted_9$2 = { class: "text-right" };
const _hoisted_10$2 = {
  key: 0,
  class: "text-[9px] text-green-600 font-bold"
};
const _hoisted_11$2 = {
  key: 0,
  class: "mt-4"
};
const _hoisted_12$2 = {
  key: 1,
  class: "mt-4 flex items-center justify-between text-[10px] text-gray-500 italic"
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "QueueStatus",
  props: {
    queues: {}
  },
  setup(__props) {
    const formatTime = (dateStr) => {
      if (!dateStr) return "";
      return new Date(dateStr).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    };
    return (_ctx, _cache) => {
      const _component_router_link = resolveComponent("router-link");
      return __props.queues.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_1$3, [
        createBaseVNode("h2", _hoisted_2$3, [
          createVNode(unref(Users), { class: "w-5 h-5 mr-2 text-orange-600" }),
          _cache[0] || (_cache[0] = createTextVNode(" Seat Waiting List ", -1))
        ]),
        createBaseVNode("div", _hoisted_3$3, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(__props.queues, (queue) => {
            return openBlock(), createElementBlock("div", {
              key: queue.id,
              class: "p-4 bg-orange-50 rounded-xl border border-orange-100 group transition-all hover:shadow-md"
            }, [
              createBaseVNode("div", _hoisted_4$3, [
                createBaseVNode("div", _hoisted_5$3, [
                  createBaseVNode("div", _hoisted_6$3, [
                    createVNode(unref(Armchair), { class: "w-4 h-4 text-orange-600" })
                  ]),
                  createBaseVNode("div", null, [
                    createBaseVNode("h3", _hoisted_7$3, " Seat " + toDisplayString(queue.seat?.seat_number), 1),
                    createBaseVNode("p", _hoisted_8$2, toDisplayString(queue.seat?.library?.name), 1)
                  ])
                ]),
                createBaseVNode("div", _hoisted_9$2, [
                  createBaseVNode("div", {
                    class: normalizeClass([
                      "px-2 py-1 rounded text-[10px] font-black uppercase tracking-widest mb-1 inline-block",
                      queue.status === "notified" ? "bg-green-100 text-green-700 animate-pulse" : "bg-orange-100 text-orange-700"
                    ])
                  }, toDisplayString(queue.status === "notified" ? "Seat Ready!" : `Pos #${queue.queue_position}`), 3),
                  queue.status === "notified" ? (openBlock(), createElementBlock("p", _hoisted_10$2, "Expires in 10m")) : createCommentVNode("", true)
                ])
              ]),
              queue.status === "notified" ? (openBlock(), createElementBlock("div", _hoisted_11$2, [
                createVNode(_component_router_link, {
                  to: { name: "student-qr-checkin", query: { booking_id: "auto" } },
                  class: "w-full py-2 bg-green-600 text-white rounded-lg text-xs font-bold hover:bg-green-700 transition-colors shadow-sm flex items-center justify-center"
                }, {
                  default: withCtx(() => [..._cache[1] || (_cache[1] = [
                    createTextVNode(" Check In Now ", -1)
                  ])]),
                  _: 1
                })
              ])) : (openBlock(), createElementBlock("div", _hoisted_12$2, [
                createBaseVNode("span", null, "Joined " + toDisplayString(formatTime(queue.joined_at)), 1),
                _cache[2] || (_cache[2] = createBaseVNode("span", { class: "text-orange-600 font-bold" }, "Estimated wait: ~15m", -1))
              ]))
            ]);
          }), 128))
        ])
      ])) : createCommentVNode("", true);
    };
  }
});
const _hoisted_1$2 = { class: "bg-white rounded-xl shadow-sm border border-gray-200 p-6 relative overflow-hidden" };
const _hoisted_2$2 = { class: "text-sm font-semibold text-slate-800 uppercase tracking-wider mb-5 flex items-center" };
const _hoisted_3$2 = { class: "grid grid-cols-2 gap-3.5" };
const _hoisted_4$2 = { class: "p-4 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:border-slate-200/80 transition-all duration-300 hover-lift hover:shadow-lg hover:shadow-slate-100/60 flex flex-col justify-between h-full min-h-[110px] text-left" };
const _hoisted_5$2 = { class: "font-semibold text-slate-800 text-xs tracking-wide" };
const _hoisted_6$2 = { class: "text-[10px] text-slate-400 font-medium mt-1 leading-normal" };
const _hoisted_7$2 = { class: "flex justify-end mt-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" };
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "QuickActions",
  setup(__props) {
    const actions = [
      {
        title: "Find Library",
        description: "Locate partner study spaces",
        icon: MapPin,
        link: "/student/libraries",
        gradient: "from-blue-600 to-blue-500 shadow-blue-500/10"
      },
      {
        title: "Browse Books",
        description: "Search & request physical books",
        icon: BookOpen,
        link: "/student/books",
        gradient: "from-emerald-600 to-emerald-500 shadow-emerald-500/10"
      },
      {
        title: "View Events",
        description: "Check academic seminars",
        icon: Calendar,
        link: "/student/events",
        gradient: "from-purple-600 to-purple-500 shadow-purple-500/10"
      },
      {
        title: "My Profile",
        description: "Manage details & settings",
        icon: User,
        link: "/student/profile",
        gradient: "from-orange-500 to-orange-400 shadow-orange-500/10"
      }
    ];
    return (_ctx, _cache) => {
      const _component_router_link = resolveComponent("router-link");
      return openBlock(), createElementBlock("div", _hoisted_1$2, [
        createBaseVNode("h2", _hoisted_2$2, [
          createVNode(unref(Zap), { class: "w-4 h-4 mr-2 text-blue-600 fill-current" }),
          _cache[0] || (_cache[0] = createTextVNode(" Quick Actions ", -1))
        ]),
        createBaseVNode("div", _hoisted_3$2, [
          (openBlock(), createElementBlock(Fragment, null, renderList(actions, (action, index) => {
            return createVNode(_component_router_link, {
              key: index,
              to: action.link,
              class: "group block relative"
            }, {
              default: withCtx(() => [
                createBaseVNode("div", _hoisted_4$2, [
                  createBaseVNode("div", null, [
                    createBaseVNode("div", {
                      class: normalizeClass(["w-9 h-9 rounded-xl flex items-center justify-center mb-3.5 shadow-sm text-white bg-gradient-to-br", action.gradient])
                    }, [
                      (openBlock(), createBlock(resolveDynamicComponent(action.icon), { class: "w-4.5 h-4.5" }))
                    ], 2),
                    createBaseVNode("h3", _hoisted_5$2, toDisplayString(action.title), 1),
                    createBaseVNode("p", _hoisted_6$2, toDisplayString(action.description), 1)
                  ]),
                  createBaseVNode("div", _hoisted_7$2, [
                    createVNode(unref(ArrowRight), { class: "w-3.5 h-3.5 text-slate-400" })
                  ])
                ])
              ]),
              _: 2
            }, 1032, ["to"]);
          }), 64))
        ])
      ]);
    };
  }
});
const _hoisted_1$1 = { class: "bg-white rounded-xl shadow-sm border border-gray-200 p-6 overflow-hidden relative group" };
const _hoisted_2$1 = { class: "relative z-10 flex flex-col space-y-5" };
const _hoisted_3$1 = { class: "flex items-center justify-between" };
const _hoisted_4$1 = { class: "text-sm font-bold text-slate-800 uppercase tracking-wider flex items-center" };
const _hoisted_5$1 = { class: "flex items-center space-x-6" };
const _hoisted_6$1 = { class: "relative flex items-center justify-center flex-shrink-0" };
const _hoisted_7$1 = { class: "w-24 h-24 transform -rotate-90" };
const _hoisted_8$1 = ["stroke-dashoffset"];
const _hoisted_9$1 = { class: "absolute flex flex-col items-center justify-center" };
const _hoisted_10$1 = { class: "text-lg font-black text-slate-800" };
const _hoisted_11$1 = { class: "flex-1 space-y-3.5" };
const _hoisted_12$1 = { class: "flex justify-between items-baseline mb-1" };
const _hoisted_13$1 = { class: "text-sm font-black text-slate-700" };
const _hoisted_14$1 = { class: "w-full bg-slate-100 rounded-full h-1.5 overflow-hidden" };
const _hoisted_15$1 = { class: "flex items-center justify-between p-2.5 bg-gradient-to-r from-orange-50/50 to-amber-50/30 border border-orange-100/50 rounded-xl" };
const _hoisted_16$1 = { class: "flex items-center space-x-2" };
const _hoisted_17$1 = { class: "w-8 h-8 rounded-lg bg-orange-100/80 flex items-center justify-center text-orange-600 animate-pulse-slow" };
const _hoisted_18$1 = { class: "text-left" };
const _hoisted_19$1 = { class: "text-xs font-extrabold text-orange-700 mt-1 leading-none" };
const _hoisted_20$1 = {
  key: 0,
  class: "text-[9px] font-bold text-orange-600 bg-orange-100/50 px-2 py-0.5 rounded border border-orange-200"
};
const _hoisted_21$1 = { class: "grid grid-cols-2 gap-3 pt-3 border-t border-slate-100" };
const _hoisted_22$1 = { class: "bg-slate-50 border border-slate-100 rounded-xl p-3 text-left" };
const _hoisted_23$1 = { class: "flex items-center space-x-1.5 text-slate-400 mb-1" };
const _hoisted_24$1 = { class: "text-sm font-extrabold text-slate-700" };
const _hoisted_25$1 = { class: "bg-slate-50 border border-slate-100 rounded-xl p-3 text-left" };
const _hoisted_26$1 = { class: "flex items-center space-x-1.5 text-slate-400 mb-1" };
const _hoisted_27$1 = { class: "text-sm font-extrabold text-slate-700" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "StudyGoal",
  props: {
    streak: { default: 0 },
    progress: { default: 0 },
    weeklyHours: { default: 0 },
    hoursToday: { default: 0 }
  },
  setup(__props) {
    const props = __props;
    const dashOffset = computed(() => {
      const percent = Math.min(100, Math.max(0, props.progress ?? 0));
      const circumference = 251.2;
      return circumference - percent / 100 * circumference;
    });
    const formattedWeeklyHours = computed(() => {
      const hrs = props.weeklyHours ?? 0;
      return hrs.toFixed(1);
    });
    const formattedHoursToday = computed(() => {
      const hrs = props.hoursToday ?? 0;
      return hrs.toFixed(1);
    });
    const formattedRemainingHours = computed(() => {
      const hrs = props.weeklyHours ?? 0;
      return Math.max(0, 20 - hrs).toFixed(1);
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        _cache[9] || (_cache[9] = createBaseVNode("div", { class: "absolute -right-16 -top-16 w-36 h-36 bg-blue-50 rounded-full blur-2xl group-hover:bg-blue-100/50 transition-colors duration-500" }, null, -1)),
        createBaseVNode("div", _hoisted_2$1, [
          createBaseVNode("div", _hoisted_3$1, [
            createBaseVNode("h2", _hoisted_4$1, [
              createVNode(unref(Target), { class: "w-4 h-4 mr-2 text-blue-600" }),
              _cache[0] || (_cache[0] = createTextVNode(" Weekly Target Progress ", -1))
            ]),
            _cache[1] || (_cache[1] = createBaseVNode("span", { class: "text-xs bg-blue-50 text-blue-700 font-bold px-2.5 py-1 rounded-full border border-blue-100" }, " Goal: 20 hrs ", -1))
          ]),
          createBaseVNode("div", _hoisted_5$1, [
            createBaseVNode("div", _hoisted_6$1, [
              (openBlock(), createElementBlock("svg", _hoisted_7$1, [
                _cache[2] || (_cache[2] = createBaseVNode("circle", {
                  cx: "48",
                  cy: "48",
                  r: "40",
                  stroke: "#e2e8f0",
                  "stroke-width": "7",
                  fill: "transparent"
                }, null, -1)),
                createBaseVNode("circle", {
                  cx: "48",
                  cy: "48",
                  r: "40",
                  stroke: "url(#blueGradient)",
                  "stroke-width": "8",
                  fill: "transparent",
                  "stroke-dasharray": 251.2,
                  "stroke-dashoffset": dashOffset.value,
                  "stroke-linecap": "round",
                  class: "transition-all duration-1000 ease-out"
                }, null, 8, _hoisted_8$1),
                _cache[3] || (_cache[3] = createBaseVNode("defs", null, [
                  createBaseVNode("linearGradient", {
                    id: "blueGradient",
                    x1: "0%",
                    y1: "0%",
                    x2: "100%",
                    y2: "100%"
                  }, [
                    createBaseVNode("stop", {
                      offset: "0%",
                      "stop-color": "#2563eb"
                    }),
                    createBaseVNode("stop", {
                      offset: "100%",
                      "stop-color": "#06b6d4"
                    })
                  ])
                ], -1))
              ])),
              createBaseVNode("div", _hoisted_9$1, [
                createBaseVNode("span", _hoisted_10$1, toDisplayString(__props.progress) + "%", 1),
                _cache[4] || (_cache[4] = createBaseVNode("span", { class: "text-[9px] text-slate-400 font-bold uppercase" }, "Done", -1))
              ])
            ]),
            createBaseVNode("div", _hoisted_11$1, [
              createBaseVNode("div", null, [
                createBaseVNode("div", _hoisted_12$1, [
                  _cache[5] || (_cache[5] = createBaseVNode("span", { class: "text-xs text-slate-400 font-bold uppercase tracking-wider" }, "Total Studied", -1)),
                  createBaseVNode("span", _hoisted_13$1, toDisplayString(formattedWeeklyHours.value) + "h", 1)
                ]),
                createBaseVNode("div", _hoisted_14$1, [
                  createBaseVNode("div", {
                    class: "bg-blue-600 h-full rounded-full transition-all duration-1000",
                    style: normalizeStyle({ width: `${__props.progress ?? 0}%` })
                  }, null, 4)
                ])
              ]),
              createBaseVNode("div", _hoisted_15$1, [
                createBaseVNode("div", _hoisted_16$1, [
                  createBaseVNode("div", _hoisted_17$1, [
                    createVNode(unref(Flame), { class: "w-4.5 h-4.5 text-orange-600 fill-current" })
                  ]),
                  createBaseVNode("div", _hoisted_18$1, [
                    _cache[6] || (_cache[6] = createBaseVNode("p", { class: "text-[10px] text-slate-400 font-bold uppercase tracking-wide leading-none" }, "Daily Streak", -1)),
                    createBaseVNode("p", _hoisted_19$1, toDisplayString(__props.streak ?? 0) + " Days active", 1)
                  ])
                ]),
                (__props.streak ?? 0) >= 3 ? (openBlock(), createElementBlock("span", _hoisted_20$1, " On Fire! ")) : createCommentVNode("", true)
              ])
            ])
          ]),
          createBaseVNode("div", _hoisted_21$1, [
            createBaseVNode("div", _hoisted_22$1, [
              createBaseVNode("div", _hoisted_23$1, [
                createVNode(unref(Clock), { class: "w-3.5 h-3.5 text-slate-400" }),
                _cache[7] || (_cache[7] = createBaseVNode("span", { class: "text-[9px] font-bold uppercase tracking-wider leading-none" }, "Studied Today", -1))
              ]),
              createBaseVNode("span", _hoisted_24$1, toDisplayString(formattedHoursToday.value) + " hrs", 1)
            ]),
            createBaseVNode("div", _hoisted_25$1, [
              createBaseVNode("div", _hoisted_26$1, [
                createVNode(unref(TrendingUp), { class: "w-3.5 h-3.5 text-slate-400" }),
                _cache[8] || (_cache[8] = createBaseVNode("span", { class: "text-[9px] font-bold uppercase tracking-wider leading-none" }, "Remaining", -1))
              ]),
              createBaseVNode("span", _hoisted_27$1, toDisplayString(formattedRemainingHours.value) + " hrs", 1)
            ])
          ])
        ])
      ]);
    };
  }
});
const StudyGoal = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-f4618c47"]]);
const _hoisted_1 = { class: "space-y-5" };
const _hoisted_2 = { class: "bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 rounded-2xl text-white px-6 py-5 shadow-xl relative overflow-hidden" };
const _hoisted_3 = { class: "relative z-10 flex items-center justify-between" };
const _hoisted_4 = { class: "text-left" };
const _hoisted_5 = { class: "text-2xl font-bold mt-2 mb-1 tracking-tight" };
const _hoisted_6 = { class: "grid grid-cols-2 md:grid-cols-4 gap-4" };
const _hoisted_7 = { class: "bg-white rounded-xl shadow-sm border border-gray-100 p-5 flex flex-col space-y-2 hover:shadow-md transition-shadow" };
const _hoisted_8 = { class: "flex items-center space-x-2" };
const _hoisted_9 = { class: "p-2 bg-blue-50 rounded-lg" };
const _hoisted_10 = { class: "text-3xl font-bold text-slate-800" };
const _hoisted_11 = { class: "bg-white rounded-xl shadow-sm border border-gray-100 p-5 flex flex-col space-y-2 hover:shadow-md transition-shadow" };
const _hoisted_12 = { class: "flex items-center space-x-2" };
const _hoisted_13 = { class: "p-2 bg-purple-50 rounded-lg" };
const _hoisted_14 = { class: "text-3xl font-bold text-slate-800" };
const _hoisted_15 = { class: "bg-white rounded-xl shadow-sm border border-gray-100 p-5 flex flex-col space-y-2 hover:shadow-md transition-shadow" };
const _hoisted_16 = { class: "flex items-center space-x-2" };
const _hoisted_17 = { class: "p-2 bg-emerald-50 rounded-lg" };
const _hoisted_18 = { class: "text-3xl font-bold text-slate-800" };
const _hoisted_19 = { class: "bg-white rounded-xl shadow-sm border border-gray-100 p-5 flex flex-col space-y-2 hover:shadow-md transition-shadow" };
const _hoisted_20 = { class: "flex items-center space-x-2" };
const _hoisted_21 = { class: "p-2 bg-orange-50 rounded-lg" };
const _hoisted_22 = { class: "text-3xl font-bold text-slate-800" };
const _hoisted_23 = { class: "grid grid-cols-1 lg:grid-cols-3 gap-6" };
const _hoisted_24 = { class: "lg:col-span-2 space-y-6" };
const _hoisted_25 = { class: "bg-white rounded-xl shadow-sm border border-gray-200 p-6" };
const _hoisted_26 = { class: "flex items-center justify-between mb-6" };
const _hoisted_27 = { class: "text-xl font-bold text-gray-900 flex items-center" };
const _hoisted_28 = { class: "flex items-center space-x-1 bg-slate-100 p-1 rounded-xl" };
const _hoisted_29 = { class: "mb-6" };
const _hoisted_30 = { class: "flex items-center justify-between mb-4" };
const _hoisted_31 = { class: "text-sm font-semibold text-slate-500 uppercase tracking-wider" };
const _hoisted_32 = { class: "text-xs font-bold text-blue-600 bg-blue-50 border border-blue-100 px-2.5 py-1 rounded-full shadow-sm" };
const _hoisted_33 = { class: "relative h-48 mb-3" };
const _hoisted_34 = { class: "absolute inset-0 flex flex-col justify-between pointer-events-none" };
const _hoisted_35 = { class: "absolute inset-0 flex items-end justify-between space-x-3.5 pt-4" };
const _hoisted_36 = { class: "absolute -top-10 left-1/2 transform -translate-x-1/2 bg-slate-800 text-white text-[10px] font-bold px-2.5 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-200 whitespace-nowrap shadow-lg border border-slate-700 pointer-events-none z-20" };
const _hoisted_37 = { class: "flex justify-between px-2 pt-2 border-t border-slate-100 text-[10px] font-bold text-slate-400 uppercase tracking-widest" };
const _hoisted_38 = { class: "grid grid-cols-3 gap-4 pt-4 border-t border-gray-200" };
const _hoisted_39 = { class: "text-center" };
const _hoisted_40 = { class: "text-2xl font-bold text-gray-900" };
const _hoisted_41 = { class: "text-center" };
const _hoisted_42 = { class: "text-2xl font-bold text-gray-900" };
const _hoisted_43 = { class: "text-center" };
const _hoisted_44 = { class: "text-2xl font-bold text-gray-900" };
const _hoisted_45 = { class: "bg-white rounded-xl shadow-sm border border-gray-200 p-6 relative overflow-hidden" };
const _hoisted_46 = { class: "text-lg font-bold text-slate-800 mb-6 flex items-center" };
const _hoisted_47 = { class: "relative pl-6 border-l-2 border-slate-100 space-y-6 ml-3 text-left" };
const _hoisted_48 = { class: "p-4 bg-slate-50 border border-slate-100 rounded-2xl hover:border-slate-200/80 hover:bg-slate-50/80 transition-all hover-lift flex items-start space-x-3.5 relative" };
const _hoisted_49 = { class: "flex-1 min-w-0" };
const _hoisted_50 = { class: "text-xs font-bold text-slate-800" };
const _hoisted_51 = { class: "text-[11px] text-slate-500 mt-0.5 leading-relaxed" };
const _hoisted_52 = { class: "text-[10px] font-semibold text-slate-400 text-right whitespace-nowrap self-start" };
const _hoisted_53 = { class: "space-y-6" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Dashboard",
  setup(__props) {
    const { user } = useAuth();
    const { bookings, libraries, books, events, generateAIRecommendations } = useApp();
    const router = useRouter();
    const checkedInBookingsCount = computed(() => {
      return bookings.value.filter((b) => b.check_in_time !== null && b.check_in_time !== void 0).length;
    });
    watch(bookings, () => {
      loadDashboardData();
    }, { deep: true });
    const activeChartData = computed(() => {
      if (activeTab.value === "weekly") {
        return weeklyStudyData.value.map((d) => ({
          label: d.day,
          hours: d.hours
        }));
      } else {
        return monthlyStudyData.value.map((d) => ({
          label: d.month,
          hours: d.hours
        }));
      }
    });
    const maxChartHours = computed(() => {
      if (activeChartData.value.length === 0) return 1;
      return Math.max(...activeChartData.value.map((d) => d.hours), 1);
    });
    const chartTotalHours = computed(() => {
      const sum = activeChartData.value.reduce((acc, curr) => acc + curr.hours, 0);
      return Math.round(sum * 10) / 10;
    });
    const handleRecommendationAction = (recommendation) => {
      switch (recommendation.type) {
        case "seat":
          router.push("/student/libraries");
          break;
        case "book":
          router.push("/student/books");
          break;
        case "event":
          router.push("/student/events");
          break;
      }
    };
    const dashboardData = ref(null);
    const loading = ref(true);
    const studyStreak = ref(0);
    const hoursToday = ref(0);
    const weeklyProgress = ref(0);
    const userRank = ref(0);
    const totalWeeklyHours = ref(0);
    const avgSessionDuration = ref(0);
    const totalSessions = ref(0);
    const focusScore = ref(0);
    const reservedBooksCount = ref(0);
    const weeklyStudyData = ref([]);
    const monthlyStudyData = ref([]);
    const activeTab = ref("weekly");
    const recentActivities = ref([]);
    const activeQueues = ref([]);
    const loadDashboardData = async () => {
      try {
        loading.value = true;
        const data = await studentAPI.getDashboard();
        dashboardData.value = data;
        if (data.stats) {
          reservedBooksCount.value = data.stats.active_reservations || 0;
        }
        if (data.analytics) {
          studyStreak.value = data.analytics.study_streak || 0;
          hoursToday.value = data.analytics.hours_today || 0;
          weeklyProgress.value = data.analytics.weekly_progress || 0;
          totalWeeklyHours.value = data.analytics.weekly_hours || 0;
          avgSessionDuration.value = data.analytics.avg_session_duration || 0;
          totalSessions.value = data.analytics.total_sessions || 0;
          focusScore.value = data.analytics.focus_score || 0;
          weeklyStudyData.value = data.analytics.weekly_study_data || [];
          monthlyStudyData.value = data.analytics.monthly_study_data || [];
        }
        if (data.active_queue) {
          activeQueues.value = data.active_queue;
        }
        if (data.recent_activity) {
          recentActivities.value = data.recent_activity.map((activity) => {
            if (activity.type === "booking") {
              return {
                id: activity.data.id,
                type: "booking",
                icon: Calendar,
                title: "Seat Booked",
                description: `Seat ${activity.data.seat?.seat_number} at ${activity.data.seat?.library?.name || "Library"}`,
                time: formatTimeAgo(activity.created_at)
              };
            } else if (activity.type === "reservation") {
              return {
                id: activity.data.id,
                type: "book",
                icon: BookMarked,
                title: "Book Reserved",
                description: activity.data.book?.title || "Book",
                time: formatTimeAgo(activity.created_at)
              };
            }
            return null;
          }).filter(Boolean);
        }
        userRank.value = Math.max(1, Math.floor(Math.random() * 50));
      } catch (error) {
        console.error("Failed to load dashboard data:", error);
      } finally {
        loading.value = false;
      }
    };
    const formatTimeAgo = (dateString) => {
      const date = new Date(dateString);
      const now = /* @__PURE__ */ new Date();
      const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1e3);
      if (diffInSeconds < 60) return "Just now";
      if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)} minutes ago`;
      if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)} hours ago`;
      return `${Math.floor(diffInSeconds / 86400)} days ago`;
    };
    const recommendations = computed(() => {
      const aiRecs = user.value?.id ? generateAIRecommendations(user.value.id) : [];
      const mappedRecs = aiRecs.slice(0, 3).map((rec) => {
        if (rec.type === "time_slot") {
          return {
            type: "seat",
            title: rec.title,
            description: rec.description,
            action: "Book Now",
            time: rec.data?.recommendedTime || "",
            location: rec.data?.libraryName || "ICAP Library"
          };
        } else if (rec.type === "book") {
          return {
            type: "book",
            title: rec.title,
            description: rec.description,
            action: "Reserve",
            author: rec.data?.author || "Unknown"
          };
        } else {
          return {
            type: "event",
            title: rec.title,
            description: rec.description,
            action: "Register",
            date: rec.data?.date || ""
          };
        }
      });
      if (mappedRecs.length === 0) {
        const defaultRecs = [];
        if (books.value.length > 0) {
          const latestBook = books.value[0];
          defaultRecs.push({
            type: "book",
            title: "New Book Available",
            description: `${latestBook.title} is now available for pickup.`,
            action: "Reserve",
            author: latestBook.author || "Unknown Author"
          });
        }
        if (events.value.length > 0) {
          const upcomingEvent = events.value[0];
          defaultRecs.push({
            type: "event",
            title: upcomingEvent.title || "Upcoming Event",
            description: upcomingEvent.description || "Join us for this event.",
            action: "Register",
            date: upcomingEvent.event_date ? new Date(upcomingEvent.event_date).toLocaleDateString() : ""
          });
        }
        if (libraries.value.length > 0) {
          defaultRecs.push({
            type: "seat",
            title: "Book a Study Seat",
            description: `Visit ${libraries.value[0].name} and secure your spot for productive studying.`,
            action: "Book Now",
            location: libraries.value[0].name
          });
        }
        return defaultRecs;
      }
      return mappedRecs;
    });
    onMounted(() => {
      loadDashboardData();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          _cache[4] || (_cache[4] = createBaseVNode("div", { class: "absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mr-32 -mt-32" }, null, -1)),
          _cache[5] || (_cache[5] = createBaseVNode("div", { class: "absolute bottom-0 left-0 w-48 h-48 bg-white opacity-5 rounded-full -ml-24 -mb-24" }, null, -1)),
          createBaseVNode("div", _hoisted_3, [
            createBaseVNode("div", _hoisted_4, [
              _cache[2] || (_cache[2] = createBaseVNode("span", { class: "text-[10px] font-semibold tracking-wider text-blue-200 uppercase bg-white/10 px-2.5 py-0.5 rounded-full" }, "Student Workspace", -1)),
              createBaseVNode("h1", _hoisted_5, "Welcome back, " + toDisplayString(unref(user)?.name) + "! 👋", 1),
              _cache[3] || (_cache[3] = createBaseVNode("p", { class: "text-blue-100/90 text-xs font-normal" }, "Ready to continue your learning journey? Your library world awaits.", -1))
            ])
          ])
        ]),
        createBaseVNode("div", _hoisted_6, [
          createBaseVNode("div", _hoisted_7, [
            createBaseVNode("div", _hoisted_8, [
              createBaseVNode("div", _hoisted_9, [
                createVNode(unref(Calendar), { class: "w-4 h-4 text-blue-600" })
              ]),
              _cache[6] || (_cache[6] = createBaseVNode("span", { class: "text-xs font-bold text-slate-400 uppercase tracking-wider" }, "Total Bookings", -1))
            ]),
            createBaseVNode("div", _hoisted_10, toDisplayString(checkedInBookingsCount.value), 1),
            _cache[7] || (_cache[7] = createBaseVNode("div", { class: "text-[10px] text-slate-400 font-medium" }, "Reservations completed this month", -1))
          ]),
          createBaseVNode("div", _hoisted_11, [
            createBaseVNode("div", _hoisted_12, [
              createBaseVNode("div", _hoisted_13, [
                createVNode(unref(Clock), { class: "w-4 h-4 text-purple-600" })
              ]),
              _cache[8] || (_cache[8] = createBaseVNode("span", { class: "text-xs font-bold text-slate-400 uppercase tracking-wider" }, "Hours Today", -1))
            ]),
            createBaseVNode("div", _hoisted_14, toDisplayString(hoursToday.value) + "h", 1),
            _cache[9] || (_cache[9] = createBaseVNode("div", { class: "text-[10px] text-slate-400 font-medium" }, "Study hours logged in libraries", -1))
          ]),
          createBaseVNode("div", _hoisted_15, [
            createBaseVNode("div", _hoisted_16, [
              createBaseVNode("div", _hoisted_17, [
                createVNode(unref(BookMarked), { class: "w-4 h-4 text-emerald-600" })
              ]),
              _cache[10] || (_cache[10] = createBaseVNode("span", { class: "text-xs font-bold text-slate-400 uppercase tracking-wider" }, "Reserved Books", -1))
            ]),
            createBaseVNode("div", _hoisted_18, toDisplayString(reservedBooksCount.value), 1),
            _cache[11] || (_cache[11] = createBaseVNode("div", { class: "text-[10px] text-slate-400 font-medium" }, "Catalog items ready at desk", -1))
          ]),
          createBaseVNode("div", _hoisted_19, [
            createBaseVNode("div", _hoisted_20, [
              createBaseVNode("div", _hoisted_21, [
                createVNode(unref(MapPin), { class: "w-4 h-4 text-orange-500" })
              ]),
              _cache[12] || (_cache[12] = createBaseVNode("span", { class: "text-xs font-bold text-slate-400 uppercase tracking-wider" }, "Available Libraries", -1))
            ]),
            createBaseVNode("div", _hoisted_22, toDisplayString(unref(libraries).length), 1),
            _cache[13] || (_cache[13] = createBaseVNode("div", { class: "text-[10px] text-slate-400 font-medium" }, "National partner locations", -1))
          ])
        ]),
        createBaseVNode("div", _hoisted_23, [
          createBaseVNode("div", _hoisted_24, [
            createVNode(RecommendationSlider, {
              recommendations: recommendations.value,
              onAction: handleRecommendationAction
            }, null, 8, ["recommendations"]),
            createBaseVNode("div", _hoisted_25, [
              createBaseVNode("div", _hoisted_26, [
                createBaseVNode("h2", _hoisted_27, [
                  createVNode(unref(ChartColumn), { class: "w-5 h-5 mr-2 text-blue-600" }),
                  _cache[14] || (_cache[14] = createTextVNode(" Study Analytics ", -1))
                ]),
                createBaseVNode("div", _hoisted_28, [
                  createBaseVNode("button", {
                    onClick: _cache[0] || (_cache[0] = ($event) => activeTab.value = "weekly"),
                    class: normalizeClass([
                      "px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all duration-300",
                      activeTab.value === "weekly" ? "bg-white text-blue-600 shadow-sm" : "text-slate-500 hover:text-slate-700"
                    ])
                  }, " Weekly ", 2),
                  createBaseVNode("button", {
                    onClick: _cache[1] || (_cache[1] = ($event) => activeTab.value = "monthly"),
                    class: normalizeClass([
                      "px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all duration-300",
                      activeTab.value === "monthly" ? "bg-white text-blue-600 shadow-sm" : "text-slate-500 hover:text-slate-700"
                    ])
                  }, " Monthly ", 2)
                ])
              ]),
              createBaseVNode("div", _hoisted_29, [
                createBaseVNode("div", _hoisted_30, [
                  createBaseVNode("span", _hoisted_31, toDisplayString(activeTab.value === "weekly" ? "Weekly Study Hours" : "Monthly Study Hours"), 1),
                  createBaseVNode("span", _hoisted_32, toDisplayString(chartTotalHours.value) + "h total ", 1)
                ]),
                createBaseVNode("div", _hoisted_33, [
                  createBaseVNode("div", _hoisted_34, [
                    (openBlock(), createElementBlock(Fragment, null, renderList(4, (i) => {
                      return createBaseVNode("div", {
                        key: i,
                        class: "w-full border-t border-slate-100"
                      });
                    }), 64))
                  ]),
                  createBaseVNode("div", _hoisted_35, [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(activeChartData.value, (item, index) => {
                      return openBlock(), createElementBlock("div", {
                        key: index,
                        class: "flex-1 flex flex-col items-center group h-full justify-end"
                      }, [
                        createBaseVNode("div", {
                          class: "w-full bg-gradient-to-t from-blue-600 to-cyan-500 rounded-t-lg transition-all duration-500 hover:from-blue-500 hover:to-cyan-400 cursor-pointer relative shadow-sm hover:shadow-md group-hover:scale-x-105",
                          style: normalizeStyle({ height: item.hours / maxChartHours.value * 100 + "%" })
                        }, [
                          createBaseVNode("div", _hoisted_36, toDisplayString(item.hours) + "h ", 1)
                        ], 4)
                      ]);
                    }), 128))
                  ])
                ]),
                createBaseVNode("div", _hoisted_37, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(activeChartData.value, (item, index) => {
                    return openBlock(), createElementBlock("span", {
                      key: index,
                      class: "flex-1 text-center truncate"
                    }, toDisplayString(item.label), 1);
                  }), 128))
                ])
              ]),
              createBaseVNode("div", _hoisted_38, [
                createBaseVNode("div", _hoisted_39, [
                  createBaseVNode("div", _hoisted_40, toDisplayString(avgSessionDuration.value) + "h", 1),
                  _cache[15] || (_cache[15] = createBaseVNode("div", { class: "text-xs text-gray-600" }, "Avg. Session", -1))
                ]),
                createBaseVNode("div", _hoisted_41, [
                  createBaseVNode("div", _hoisted_42, toDisplayString(totalSessions.value), 1),
                  _cache[16] || (_cache[16] = createBaseVNode("div", { class: "text-xs text-gray-600" }, "Total Sessions", -1))
                ]),
                createBaseVNode("div", _hoisted_43, [
                  createBaseVNode("div", _hoisted_44, toDisplayString(focusScore.value) + "%", 1),
                  _cache[17] || (_cache[17] = createBaseVNode("div", { class: "text-xs text-gray-600" }, "Focus Score", -1))
                ])
              ])
            ]),
            createBaseVNode("div", _hoisted_45, [
              createBaseVNode("h2", _hoisted_46, [
                createVNode(unref(Activity), { class: "w-5 h-5 mr-2 text-blue-600" }),
                _cache[18] || (_cache[18] = createTextVNode(" Recent Activity ", -1))
              ]),
              createBaseVNode("div", _hoisted_47, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(recentActivities.value, (activity) => {
                  return openBlock(), createElementBlock("div", {
                    key: activity.id,
                    class: "relative group"
                  }, [
                    createBaseVNode("span", {
                      class: normalizeClass(["absolute -left-[31px] top-1.5 w-4 h-4 rounded-full border-2 border-white flex items-center justify-center shadow-sm z-10 transition-colors duration-300", [
                        activity.type === "booking" ? "bg-blue-600 group-hover:bg-blue-500" : activity.type === "book" ? "bg-emerald-600 group-hover:bg-emerald-500" : activity.type === "event" ? "bg-purple-600 group-hover:bg-purple-500" : "bg-orange-500 group-hover:bg-orange-400"
                      ]])
                    }, null, 2),
                    createBaseVNode("div", _hoisted_48, [
                      createBaseVNode("div", {
                        class: normalizeClass([
                          "w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 border",
                          activity.type === "booking" ? "bg-blue-50/50 border-blue-100 text-blue-600" : activity.type === "book" ? "bg-emerald-50/50 border-emerald-100 text-emerald-600" : activity.type === "event" ? "bg-purple-50/50 border-purple-100 text-purple-600" : "bg-orange-50/50 border-orange-100 text-orange-600"
                        ])
                      }, [
                        (openBlock(), createBlock(resolveDynamicComponent(activity.icon), { class: "w-4.5 h-4.5" }))
                      ], 2),
                      createBaseVNode("div", _hoisted_49, [
                        createBaseVNode("p", _hoisted_50, toDisplayString(activity.title), 1),
                        createBaseVNode("p", _hoisted_51, toDisplayString(activity.description), 1)
                      ]),
                      createBaseVNode("div", _hoisted_52, toDisplayString(activity.time), 1)
                    ])
                  ]);
                }), 128))
              ])
            ])
          ]),
          createBaseVNode("div", _hoisted_53, [
            createVNode(_sfc_main$2),
            createVNode(UpcomingBookings),
            createVNode(_sfc_main$3, { queues: activeQueues.value }, null, 8, ["queues"]),
            createVNode(StudyGoal, {
              streak: studyStreak.value,
              progress: weeklyProgress.value,
              "weekly-hours": totalWeeklyHours.value,
              "hours-today": hoursToday.value
            }, null, 8, ["streak", "progress", "weekly-hours", "hours-today"])
          ])
        ])
      ]);
    };
  }
});
export {
  _sfc_main as default
};
