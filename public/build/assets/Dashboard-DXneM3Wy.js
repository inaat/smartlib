import { d as defineComponent, r as ref, o as onMounted, G as onUnmounted, H as watch, c as createElementBlock, b as createBaseVNode, F as Fragment, h as renderList, f as createVNode, u as unref, I as normalizeStyle, t as toDisplayString, n as normalizeClass, m as createCommentVNode, j as createTextVNode, i as openBlock, C as useApp, D as computed, g as resolveComponent, w as withCtx, A as useRouter, k as createBlock, l as resolveDynamicComponent, p as useAuth, J as studentAPI } from "./main-DCJXrkf-.js";
import { C as ChevronLeft } from "./chevron-left-yVVTSIYo.js";
import { C as ChevronRight } from "./chevron-right-SSQMZ9HW.js";
import { C as Clock } from "./clock-B7PYed5-.js";
import { M as MapPin } from "./map-pin-YMhwiUzx.js";
import { U as User } from "./user-C8gwTBBi.js";
import { C as Calendar } from "./calendar-DLVGkrUu.js";
import { u as useSwal } from "./useSwal-BUxo5JBv.js";
import { A as Armchair } from "./armchair-BF2GfIuy.js";
import { T as TriangleAlert } from "./triangle-alert-8zFUiR58.js";
import { M as Monitor } from "./monitor-MB0i7ldh.js";
import { P as PanelsTopLeft } from "./panels-top-left-DmkC30__.js";
import { Z as Zap } from "./zap-CE81Tw0M.js";
import { U as Users } from "./users-23JKef0Y.js";
import { B as BookOpen } from "./book-open-CmZbSzMF.js";
import { B as BookMarked } from "./book-marked-DzgVwKLt.js";
import { A as Award } from "./award-Dj6jr86d.js";
import { F as Flame } from "./flame-BAWOvQif.js";
import { C as ChartColumn } from "./chart-column-D_Bhh0Vi.js";
import { A as Activity } from "./activity-D1xHcvyv.js";
import { c as createLucideIcon } from "./createLucideIcon-CDsoUk2K.js";
/* empty css               */
const Lightbulb = createLucideIcon("lightbulb", [
  [
    "path",
    {
      d: "M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",
      key: "1gvzjb"
    }
  ],
  ["path", { d: "M9 18h6", key: "x1upvd" }],
  ["path", { d: "M10 22h4", key: "ceow96" }]
]);
const Trophy = createLucideIcon("trophy", [
  ["path", { d: "M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978", key: "1n3hpd" }],
  ["path", { d: "M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978", key: "rfe1zi" }],
  ["path", { d: "M18 9h1.5a1 1 0 0 0 0-5H18", key: "7xy6bh" }],
  ["path", { d: "M4 22h16", key: "57wxv0" }],
  ["path", { d: "M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z", key: "1mhfuq" }],
  ["path", { d: "M6 9H4.5a1 1 0 0 1 0-5H6", key: "tex48p" }]
]);
const _hoisted_1$4 = {
  key: 0,
  class: "bg-white rounded-xl shadow-sm border border-gray-200 p-8 text-center"
};
const _hoisted_2$4 = {
  key: 1,
  class: "bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
};
const _hoisted_3$4 = { class: "px-6 py-4 border-b border-gray-200 flex items-center justify-between" };
const _hoisted_4$4 = { class: "flex items-center space-x-2" };
const _hoisted_5$4 = { class: "flex space-x-1" };
const _hoisted_6$3 = ["onClick"];
const _hoisted_7$3 = { class: "flex space-x-1 ml-4" };
const _hoisted_8$3 = ["disabled"];
const _hoisted_9$3 = ["disabled"];
const _hoisted_10$3 = { class: "relative overflow-hidden" };
const _hoisted_11$3 = { class: "flex items-start justify-between" };
const _hoisted_12$3 = { class: "flex-1" };
const _hoisted_13$2 = { class: "font-semibold text-gray-800 text-lg mb-2" };
const _hoisted_14$2 = { class: "text-gray-600 mb-4 leading-relaxed" };
const _hoisted_15$2 = { class: "flex items-center space-x-6 text-sm text-gray-500 mb-4" };
const _hoisted_16$2 = {
  key: 0,
  class: "flex items-center"
};
const _hoisted_17$2 = {
  key: 1,
  class: "flex items-center"
};
const _hoisted_18$2 = {
  key: 2,
  class: "flex items-center"
};
const _hoisted_19$2 = {
  key: 3,
  class: "flex items-center"
};
const _hoisted_20$2 = ["onClick"];
const _hoisted_21$2 = { class: "px-6 pb-4" };
const _hoisted_22$2 = { class: "w-full bg-gray-200 rounded-full h-1" };
const _hoisted_23$2 = { class: "flex justify-between text-xs text-gray-500 mt-1" };
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
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
          return "bg-blue-50 border-blue-200 text-blue-800";
        case "book":
          return "bg-teal-50 border-teal-200 text-teal-800";
        case "event":
          return "bg-orange-50 border-orange-200 text-orange-800";
        default:
          return "bg-gray-50 border-gray-200 text-gray-800";
      }
    };
    const getButtonColor = (type) => {
      switch (type) {
        case "seat":
          return "bg-blue-600 hover:bg-blue-700";
        case "book":
          return "bg-teal-600 hover:bg-teal-700";
        case "event":
          return "bg-orange-600 hover:bg-orange-700";
        default:
          return "bg-gray-600 hover:bg-gray-700";
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
      return __props.recommendations.length === 0 ? (openBlock(), createElementBlock("div", _hoisted_1$4, [..._cache[0] || (_cache[0] = [
        createBaseVNode("div", { class: "text-gray-500" }, "No recommendations available", -1)
      ])])) : (openBlock(), createElementBlock("div", _hoisted_2$4, [
        createBaseVNode("div", _hoisted_3$4, [
          _cache[1] || (_cache[1] = createBaseVNode("h2", { class: "text-lg font-semibold text-gray-800" }, "AI Recommendations", -1)),
          createBaseVNode("div", _hoisted_4$4, [
            createBaseVNode("div", _hoisted_5$4, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(__props.recommendations, (_, index) => {
                return openBlock(), createElementBlock("button", {
                  key: index,
                  onClick: ($event) => goToSlide(index),
                  class: normalizeClass([
                    "w-2 h-2 rounded-full transition-all duration-300",
                    index === currentIndex.value ? "bg-blue-600 w-6" : "bg-gray-300 hover:bg-gray-400"
                  ])
                }, null, 10, _hoisted_6$3);
              }), 128))
            ]),
            createBaseVNode("div", _hoisted_7$3, [
              createBaseVNode("button", {
                onClick: goToPrevious,
                class: "p-1 rounded-full hover:bg-gray-100 transition-colors",
                disabled: __props.recommendations.length <= 1
              }, [
                createVNode(unref(ChevronLeft), { class: "w-4 h-4 text-gray-600" })
              ], 8, _hoisted_8$3),
              createBaseVNode("button", {
                onClick: goToNext,
                class: "p-1 rounded-full hover:bg-gray-100 transition-colors",
                disabled: __props.recommendations.length <= 1
              }, [
                createVNode(unref(ChevronRight), { class: "w-4 h-4 text-gray-600" })
              ], 8, _hoisted_9$3)
            ])
          ])
        ]),
        createBaseVNode("div", _hoisted_10$3, [
          createBaseVNode("div", {
            class: "flex transition-transform duration-500 ease-in-out",
            style: normalizeStyle({ transform: `translateX(-${currentIndex.value * 100}%)` })
          }, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(__props.recommendations, (recommendation, index) => {
              return openBlock(), createElementBlock("div", {
                key: index,
                class: "w-full flex-shrink-0 p-6"
              }, [
                createBaseVNode("div", _hoisted_11$3, [
                  createBaseVNode("div", _hoisted_12$3, [
                    createBaseVNode("div", {
                      class: normalizeClass(["inline-flex px-3 py-1 rounded-full text-xs font-medium mb-3", getTypeColor(recommendation.type)])
                    }, toDisplayString(recommendation.type.charAt(0).toUpperCase() + recommendation.type.slice(1)) + " Recommendation ", 3),
                    createBaseVNode("h3", _hoisted_13$2, toDisplayString(recommendation.title), 1),
                    createBaseVNode("p", _hoisted_14$2, toDisplayString(recommendation.description), 1),
                    createBaseVNode("div", _hoisted_15$2, [
                      recommendation.time ? (openBlock(), createElementBlock("div", _hoisted_16$2, [
                        createVNode(unref(Clock), { class: "w-4 h-4 mr-1" }),
                        createTextVNode(" " + toDisplayString(recommendation.time), 1)
                      ])) : createCommentVNode("", true),
                      recommendation.location ? (openBlock(), createElementBlock("div", _hoisted_17$2, [
                        createVNode(unref(MapPin), { class: "w-4 h-4 mr-1" }),
                        createTextVNode(" " + toDisplayString(recommendation.location), 1)
                      ])) : createCommentVNode("", true),
                      recommendation.author ? (openBlock(), createElementBlock("div", _hoisted_18$2, [
                        createVNode(unref(User), { class: "w-4 h-4 mr-1" }),
                        createTextVNode(" " + toDisplayString(recommendation.author), 1)
                      ])) : createCommentVNode("", true),
                      recommendation.date ? (openBlock(), createElementBlock("div", _hoisted_19$2, [
                        createVNode(unref(Calendar), { class: "w-4 h-4 mr-1" }),
                        createTextVNode(" " + toDisplayString(recommendation.date), 1)
                      ])) : createCommentVNode("", true)
                    ])
                  ]),
                  createBaseVNode("button", {
                    onClick: ($event) => emit("action", recommendation),
                    class: normalizeClass(["px-6 py-3 rounded-lg text-white font-medium transition-all duration-200 transform hover:scale-105", getButtonColor(recommendation.type)])
                  }, toDisplayString(recommendation.action), 11, _hoisted_20$2)
                ])
              ]);
            }), 128))
          ], 4)
        ]),
        createBaseVNode("div", _hoisted_21$2, [
          createBaseVNode("div", _hoisted_22$2, [
            createBaseVNode("div", {
              class: "bg-blue-600 h-1 rounded-full transition-all duration-500 ease-in-out",
              style: normalizeStyle({ width: `${(currentIndex.value + 1) / __props.recommendations.length * 100}%` })
            }, null, 4)
          ]),
          createBaseVNode("div", _hoisted_23$2, [
            createBaseVNode("span", null, toDisplayString(currentIndex.value + 1) + " of " + toDisplayString(__props.recommendations.length), 1),
            createBaseVNode("span", null, toDisplayString(isAutoPlaying.value ? "Auto-playing" : "Paused"), 1)
          ])
        ])
      ]));
    };
  }
});
const _hoisted_1$3 = { class: "bg-white rounded-xl shadow-sm border border-gray-200 p-6" };
const _hoisted_2$3 = { class: "text-lg font-bold text-gray-800 mb-4 flex items-center" };
const _hoisted_3$3 = {
  key: 0,
  class: "text-center py-8"
};
const _hoisted_4$3 = { class: "w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-3" };
const _hoisted_5$3 = {
  key: 1,
  class: "space-y-4"
};
const _hoisted_6$2 = { class: "flex items-center justify-between mb-3" };
const _hoisted_7$2 = { class: "flex items-center" };
const _hoisted_8$2 = { class: "p-2 bg-white rounded-lg shadow-sm mr-3 group-hover:text-blue-600" };
const _hoisted_9$2 = { class: "font-bold text-gray-800 text-sm" };
const _hoisted_10$2 = { class: "text-[10px] text-gray-400 font-bold uppercase tracking-wider" };
const _hoisted_11$2 = { class: "text-right" };
const _hoisted_12$2 = { class: "text-sm font-black text-blue-600 font-mono" };
const _hoisted_13$1 = { class: "space-y-2 text-xs text-gray-600" };
const _hoisted_14$1 = {
  key: 0,
  class: "mb-3 p-2 bg-orange-50 border border-orange-200 rounded-lg flex items-center text-orange-700"
};
const _hoisted_15$1 = { class: "flex items-center" };
const _hoisted_16$1 = { class: "flex items-center" };
const _hoisted_17$1 = { class: "flex flex-wrap gap-2 mt-1" };
const _hoisted_18$1 = {
  key: 0,
  class: "flex items-center text-[9px] bg-blue-50 text-blue-600 px-1.5 py-0.5 rounded-md"
};
const _hoisted_19$1 = {
  key: 1,
  class: "flex items-center text-[9px] bg-yellow-50 text-yellow-700 px-1.5 py-0.5 rounded-md"
};
const _hoisted_20$1 = {
  key: 2,
  class: "flex items-center text-[9px] bg-green-50 text-green-700 px-1.5 py-0.5 rounded-md"
};
const _hoisted_21$1 = { class: "mt-4 flex gap-2" };
const _hoisted_22$1 = ["onClick"];
const _hoisted_23$1 = ["onClick"];
const _hoisted_24$1 = ["onClick"];
const _hoisted_25$1 = ["onClick"];
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "UpcomingBookings",
  setup(__props) {
    const { bookings, loadBookings, checkOutSeat, extendSeatBooking, cancelBooking } = useApp();
    const router = useRouter();
    const now = ref(/* @__PURE__ */ new Date());
    let timer = null;
    const activeBookings = computed(
      () => bookings.value.filter((b) => b.status === "booked" || b.status === "checked_in").slice(0, 3)
    );
    const getRemainingTime = (booking) => {
      const endTimeStr = booking.scheduled_end_time || booking.endTime;
      if (!endTimeStr) return "00:00:00";
      try {
        const end = new Date(endTimeStr);
        if (isNaN(end.getTime())) return "00:00:00";
        const diff = end.getTime() - now.value.getTime();
        if (diff <= 0) return "00:00:00";
        const h = Math.floor(diff / 36e5);
        const m = Math.floor(diff % 36e5 / 6e4);
        const s = Math.floor(diff % 6e4 / 1e3);
        return `${h.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
      } catch (e) {
        return "00:00:00";
      }
    };
    const formatTime = (dateStr) => {
      return new Date(dateStr).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    };
    const { showConfirm, showSuccess, showError } = useSwal();
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
    const canExtend = (booking) => {
      const endTimeStr = booking.scheduled_end_time || booking.endTime;
      if (!endTimeStr) return false;
      const end = new Date(endTimeStr);
      const diffMinutes = (end.getTime() - now.value.getTime()) / 6e4;
      return diffMinutes >= 10;
    };
    const handleExtend = async (booking) => {
      if (await showConfirm("Extend Session", "Do you want to extend your session by 30 minutes?", "Yes, Extend")) {
        try {
          await extendSeatBooking(booking.id, 30);
          await loadBookings();
          showSuccess("Extended", "Your session has been extended by 30 minutes.");
        } catch (error) {
          showError("Extension Failed", error.message || "Could not extend session. The seat might be booked by someone else.");
        }
      }
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
      return openBlock(), createElementBlock("div", _hoisted_1$3, [
        createBaseVNode("h2", _hoisted_2$3, [
          createVNode(unref(Calendar), { class: "w-5 h-5 mr-2 text-blue-600" }),
          _cache[0] || (_cache[0] = createTextVNode(" Active & Upcoming ", -1))
        ]),
        activeBookings.value.length === 0 ? (openBlock(), createElementBlock("div", _hoisted_3$3, [
          createBaseVNode("div", _hoisted_4$3, [
            createVNode(unref(Calendar), { class: "w-6 h-6 text-gray-300" })
          ]),
          _cache[2] || (_cache[2] = createBaseVNode("p", { class: "text-gray-500 text-sm" }, "No active bookings", -1)),
          createVNode(_component_router_link, {
            to: "/student/libraries",
            class: "text-xs text-blue-600 hover:underline mt-2 inline-block"
          }, {
            default: withCtx(() => [..._cache[1] || (_cache[1] = [
              createTextVNode("Book a seat now", -1)
            ])]),
            _: 1
          })
        ])) : (openBlock(), createElementBlock("div", _hoisted_5$3, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(activeBookings.value, (booking) => {
            return openBlock(), createElementBlock("div", {
              key: booking.id,
              class: "p-4 bg-gray-50 rounded-xl border border-gray-100 hover:border-blue-100 transition-colors group"
            }, [
              createBaseVNode("div", _hoisted_6$2, [
                createBaseVNode("div", _hoisted_7$2, [
                  createBaseVNode("div", _hoisted_8$2, [
                    createVNode(unref(Armchair), { class: "w-4 h-4" })
                  ]),
                  createBaseVNode("div", null, [
                    createBaseVNode("h3", _hoisted_9$2, " Seat " + toDisplayString(booking.seat?.seat_number), 1),
                    createBaseVNode("p", _hoisted_10$2, toDisplayString(booking.status === "checked_in" ? "Active Now" : "Reserved"), 1)
                  ])
                ]),
                createBaseVNode("div", _hoisted_11$2, [
                  _cache[3] || (_cache[3] = createBaseVNode("p", { class: "text-[10px] text-gray-400 font-bold uppercase" }, "Remaining", -1)),
                  createBaseVNode("p", _hoisted_12$2, toDisplayString(getRemainingTime(booking)), 1)
                ])
              ]),
              createBaseVNode("div", _hoisted_13$1, [
                booking.status === "checked_in" && isEndingSoon(booking) ? (openBlock(), createElementBlock("div", _hoisted_14$1, [
                  createVNode(unref(TriangleAlert), { class: "w-4 h-4 mr-2" }),
                  _cache[4] || (_cache[4] = createBaseVNode("span", { class: "font-bold" }, "Session Ending Soon!", -1))
                ])) : createCommentVNode("", true),
                createBaseVNode("div", _hoisted_15$1, [
                  createVNode(unref(MapPin), { class: "w-3.5 h-3.5 mr-2 text-gray-400" }),
                  createTextVNode(" " + toDisplayString(booking.seat?.library?.name), 1)
                ]),
                createBaseVNode("div", _hoisted_16$1, [
                  createVNode(unref(Clock), { class: "w-3.5 h-3.5 mr-2 text-gray-400" }),
                  createTextVNode(" " + toDisplayString(formatTime(booking.booking_time)) + " - " + toDisplayString(formatTime(booking.scheduled_end_time)), 1)
                ]),
                createBaseVNode("div", _hoisted_17$1, [
                  booking.seat?.has_computer ? (openBlock(), createElementBlock("span", _hoisted_18$1, [
                    createVNode(unref(Monitor), { class: "w-2.5 h-2.5 mr-1" }),
                    _cache[5] || (_cache[5] = createTextVNode(" PC ", -1))
                  ])) : createCommentVNode("", true),
                  booking.seat?.near_window ? (openBlock(), createElementBlock("span", _hoisted_19$1, [
                    createVNode(unref(PanelsTopLeft), { class: "w-2.5 h-2.5 mr-1" }),
                    _cache[6] || (_cache[6] = createTextVNode(" Window ", -1))
                  ])) : createCommentVNode("", true),
                  booking.seat && (booking.seat.socket_count ?? 0) > 0 ? (openBlock(), createElementBlock("span", _hoisted_20$1, [
                    createVNode(unref(Zap), { class: "w-2.5 h-2.5 mr-1" }),
                    createTextVNode(" " + toDisplayString(booking.seat.socket_count) + " Sockets ", 1)
                  ])) : createCommentVNode("", true)
                ])
              ]),
              createBaseVNode("div", _hoisted_21$1, [
                booking.status === "booked" ? (openBlock(), createElementBlock("button", {
                  key: 0,
                  onClick: ($event) => handleCheckIn(booking.id),
                  class: "flex-1 py-2 bg-blue-600 text-white rounded-lg text-xs font-bold hover:bg-blue-700 transition-colors shadow-sm"
                }, " Check In ", 8, _hoisted_22$1)) : createCommentVNode("", true),
                booking.status === "booked" ? (openBlock(), createElementBlock("button", {
                  key: 1,
                  onClick: ($event) => handleCancel(booking.id),
                  class: "flex-1 py-2 bg-red-600 text-white rounded-lg text-xs font-bold hover:bg-red-700 transition-colors shadow-sm"
                }, " Cancel ", 8, _hoisted_23$1)) : createCommentVNode("", true),
                booking.status === "checked_in" ? (openBlock(), createElementBlock("button", {
                  key: 2,
                  onClick: ($event) => handleCheckOut(booking.id),
                  class: "flex-1 py-2 bg-orange-600 text-white rounded-lg text-xs font-bold hover:bg-orange-700 transition-colors shadow-sm"
                }, " Check Out ", 8, _hoisted_24$1)) : createCommentVNode("", true),
                booking.status === "checked_in" && canExtend(booking) ? (openBlock(), createElementBlock("button", {
                  key: 3,
                  onClick: ($event) => handleExtend(booking),
                  class: "flex-1 py-2 bg-indigo-600 text-white rounded-lg text-xs font-bold hover:bg-indigo-700 transition-colors shadow-sm"
                }, " Extend ", 8, _hoisted_25$1)) : createCommentVNode("", true)
              ])
            ]);
          }), 128))
        ]))
      ]);
    };
  }
});
const _hoisted_1$2 = {
  key: 0,
  class: "bg-white rounded-xl shadow-sm border border-orange-200 p-6"
};
const _hoisted_2$2 = { class: "text-lg font-bold text-gray-800 mb-4 flex items-center" };
const _hoisted_3$2 = { class: "space-y-4" };
const _hoisted_4$2 = { class: "flex items-center justify-between" };
const _hoisted_5$2 = { class: "flex items-center" };
const _hoisted_6$1 = { class: "p-2 bg-white rounded-lg shadow-sm mr-3" };
const _hoisted_7$1 = { class: "font-bold text-gray-800 text-sm" };
const _hoisted_8$1 = { class: "text-[10px] text-gray-500 font-bold uppercase tracking-wider" };
const _hoisted_9$1 = { class: "text-right" };
const _hoisted_10$1 = {
  key: 0,
  class: "text-[9px] text-green-600 font-bold"
};
const _hoisted_11$1 = {
  key: 0,
  class: "mt-4"
};
const _hoisted_12$1 = {
  key: 1,
  class: "mt-4 flex items-center justify-between text-[10px] text-gray-500 italic"
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
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
      return __props.queues.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_1$2, [
        createBaseVNode("h2", _hoisted_2$2, [
          createVNode(unref(Users), { class: "w-5 h-5 mr-2 text-orange-600" }),
          _cache[0] || (_cache[0] = createTextVNode(" Seat Waiting List ", -1))
        ]),
        createBaseVNode("div", _hoisted_3$2, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(__props.queues, (queue) => {
            return openBlock(), createElementBlock("div", {
              key: queue.id,
              class: "p-4 bg-orange-50 rounded-xl border border-orange-100 group transition-all hover:shadow-md"
            }, [
              createBaseVNode("div", _hoisted_4$2, [
                createBaseVNode("div", _hoisted_5$2, [
                  createBaseVNode("div", _hoisted_6$1, [
                    createVNode(unref(Armchair), { class: "w-4 h-4 text-orange-600" })
                  ]),
                  createBaseVNode("div", null, [
                    createBaseVNode("h3", _hoisted_7$1, " Seat " + toDisplayString(queue.seat?.seat_number), 1),
                    createBaseVNode("p", _hoisted_8$1, toDisplayString(queue.seat?.library?.name), 1)
                  ])
                ]),
                createBaseVNode("div", _hoisted_9$1, [
                  createBaseVNode("div", {
                    class: normalizeClass([
                      "px-2 py-1 rounded text-[10px] font-black uppercase tracking-widest mb-1 inline-block",
                      queue.status === "notified" ? "bg-green-100 text-green-700 animate-pulse" : "bg-orange-100 text-orange-700"
                    ])
                  }, toDisplayString(queue.status === "notified" ? "Seat Ready!" : `Pos #${queue.queue_position}`), 3),
                  queue.status === "notified" ? (openBlock(), createElementBlock("p", _hoisted_10$1, "Expires in 10m")) : createCommentVNode("", true)
                ])
              ]),
              queue.status === "notified" ? (openBlock(), createElementBlock("div", _hoisted_11$1, [
                createVNode(_component_router_link, {
                  to: { name: "student-qr-checkin", query: { booking_id: "auto" } },
                  class: "w-full py-2 bg-green-600 text-white rounded-lg text-xs font-bold hover:bg-green-700 transition-colors shadow-sm flex items-center justify-center"
                }, {
                  default: withCtx(() => [..._cache[1] || (_cache[1] = [
                    createTextVNode(" Check In Now ", -1)
                  ])]),
                  _: 1
                })
              ])) : (openBlock(), createElementBlock("div", _hoisted_12$1, [
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
const _hoisted_1$1 = { class: "bg-white rounded-xl shadow-sm border border-gray-200 p-6" };
const _hoisted_2$1 = { class: "grid grid-cols-2 gap-3" };
const _hoisted_3$1 = { class: "p-4 rounded-lg border border-gray-200 hover:border-gray-300 transition-colors group-hover:shadow-sm" };
const _hoisted_4$1 = { class: "font-medium text-gray-800 text-sm" };
const _hoisted_5$1 = { class: "text-xs text-gray-500 mt-1" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "QuickActions",
  setup(__props) {
    const actions = [
      {
        title: "Find Library",
        description: "Locate nearby libraries",
        icon: MapPin,
        link: "/student/libraries",
        color: "bg-blue-500 hover:bg-blue-600"
      },
      {
        title: "Browse Books",
        description: "Search for books",
        icon: BookOpen,
        link: "/student/books",
        color: "bg-teal-500 hover:bg-teal-600"
      },
      {
        title: "View Events",
        description: "Check upcoming events",
        icon: Calendar,
        link: "/student/events",
        color: "bg-orange-500 hover:bg-orange-600"
      },
      {
        title: "My Profile",
        description: "Manage your account",
        icon: User,
        link: "/student/profile",
        color: "bg-green-500 hover:bg-green-600"
      }
    ];
    return (_ctx, _cache) => {
      const _component_router_link = resolveComponent("router-link");
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        _cache[0] || (_cache[0] = createBaseVNode("h2", { class: "text-lg font-semibold text-gray-800 mb-4" }, "Quick Actions", -1)),
        createBaseVNode("div", _hoisted_2$1, [
          (openBlock(), createElementBlock(Fragment, null, renderList(actions, (action, index) => {
            return createVNode(_component_router_link, {
              key: index,
              to: action.link,
              class: "group block"
            }, {
              default: withCtx(() => [
                createBaseVNode("div", _hoisted_3$1, [
                  createBaseVNode("div", {
                    class: normalizeClass(["w-8 h-8 rounded-lg flex items-center justify-center mb-2 transition-colors", action.color])
                  }, [
                    (openBlock(), createBlock(resolveDynamicComponent(action.icon), { class: "w-4 h-4 text-white" }))
                  ], 2),
                  createBaseVNode("h3", _hoisted_4$1, toDisplayString(action.title), 1),
                  createBaseVNode("p", _hoisted_5$1, toDisplayString(action.description), 1)
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
const _hoisted_1 = { class: "p-6 space-y-6" };
const _hoisted_2 = { class: "bg-gradient-to-r from-blue-600 via-teal-600 to-cyan-600 rounded-2xl text-white p-8 shadow-xl relative overflow-hidden" };
const _hoisted_3 = { class: "relative z-10" };
const _hoisted_4 = { class: "flex items-center justify-between mb-6" };
const _hoisted_5 = { class: "text-3xl font-bold mb-2" };
const _hoisted_6 = { class: "grid grid-cols-2 md:grid-cols-4 gap-4" };
const _hoisted_7 = { class: "bg-gradient-to-br from-blue-500/30 to-indigo-500/20 backdrop-blur-md rounded-xl p-4 border border-white/30 hover:scale-105 transition-transform" };
const _hoisted_8 = { class: "flex items-center space-x-2 mb-2" };
const _hoisted_9 = { class: "p-2 bg-white/20 rounded-lg" };
const _hoisted_10 = { class: "text-3xl font-bold text-white" };
const _hoisted_11 = { class: "bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-md rounded-xl p-4 border border-white/30 hover:scale-105 transition-transform" };
const _hoisted_12 = { class: "flex items-center space-x-2 mb-2" };
const _hoisted_13 = { class: "p-2 bg-white/20 rounded-lg" };
const _hoisted_14 = { class: "text-3xl font-bold text-white" };
const _hoisted_15 = { class: "bg-gradient-to-br from-emerald-500/30 to-teal-500/20 backdrop-blur-md rounded-xl p-4 border border-white/30 hover:scale-105 transition-transform" };
const _hoisted_16 = { class: "flex items-center space-x-2 mb-2" };
const _hoisted_17 = { class: "p-2 bg-white/20 rounded-lg" };
const _hoisted_18 = { class: "text-3xl font-bold text-white" };
const _hoisted_19 = { class: "bg-gradient-to-br from-amber-500/30 to-orange-500/20 backdrop-blur-md rounded-xl p-4 border border-white/30 hover:scale-105 transition-transform" };
const _hoisted_20 = { class: "flex items-center space-x-2 mb-2" };
const _hoisted_21 = { class: "p-2 bg-white/20 rounded-lg" };
const _hoisted_22 = { class: "text-3xl font-bold text-white" };
const _hoisted_23 = { class: "bg-gradient-to-br from-orange-500/30 to-red-500/20 backdrop-blur-md rounded-xl p-4 border border-white/30 hover:scale-105 transition-transform col-span-2 md:col-span-1" };
const _hoisted_24 = { class: "flex items-center space-x-2 mb-2" };
const _hoisted_25 = { class: "p-2 bg-white/20 rounded-lg" };
const _hoisted_26 = { class: "flex items-baseline space-x-2" };
const _hoisted_27 = { class: "text-3xl font-bold text-white" };
const _hoisted_28 = { class: "grid grid-cols-1 lg:grid-cols-3 gap-6" };
const _hoisted_29 = { class: "lg:col-span-2 space-y-6" };
const _hoisted_30 = { class: "bg-white rounded-xl shadow-sm border border-gray-200 p-6" };
const _hoisted_31 = { class: "flex items-center justify-between mb-6" };
const _hoisted_32 = { class: "text-xl font-bold text-gray-900 flex items-center" };
const _hoisted_33 = { class: "mb-6" };
const _hoisted_34 = { class: "flex items-center justify-between mb-3" };
const _hoisted_35 = { class: "text-sm font-bold text-blue-600" };
const _hoisted_36 = { class: "h-48 flex items-end justify-between space-x-2" };
const _hoisted_37 = { class: "absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap" };
const _hoisted_38 = { class: "text-xs text-gray-600 mt-2" };
const _hoisted_39 = { class: "grid grid-cols-3 gap-4 pt-4 border-t border-gray-200" };
const _hoisted_40 = { class: "text-center" };
const _hoisted_41 = { class: "text-2xl font-bold text-gray-900" };
const _hoisted_42 = { class: "text-center" };
const _hoisted_43 = { class: "text-2xl font-bold text-gray-900" };
const _hoisted_44 = { class: "text-center" };
const _hoisted_45 = { class: "text-2xl font-bold text-gray-900" };
const _hoisted_46 = { class: "bg-white rounded-xl shadow-sm border border-gray-200 p-6" };
const _hoisted_47 = { class: "text-xl font-bold text-gray-900 mb-4 flex items-center" };
const _hoisted_48 = { class: "space-y-3" };
const _hoisted_49 = { class: "flex-1" };
const _hoisted_50 = { class: "text-sm font-medium text-gray-900" };
const _hoisted_51 = { class: "text-xs text-gray-600" };
const _hoisted_52 = { class: "text-xs text-gray-400" };
const _hoisted_53 = { class: "space-y-6" };
const _hoisted_54 = { class: "bg-white rounded-xl shadow-sm border border-gray-200 p-6" };
const _hoisted_55 = { class: "text-lg font-bold text-gray-900 mb-4 flex items-center" };
const _hoisted_56 = { class: "space-y-4" };
const _hoisted_57 = { class: "flex items-center justify-between mb-2" };
const _hoisted_58 = { class: "flex items-center space-x-2" };
const _hoisted_59 = { class: "text-sm font-medium text-gray-900" };
const _hoisted_60 = { class: "text-xs text-gray-600" };
const _hoisted_61 = { class: "w-full bg-gray-200 rounded-full h-2" };
const _hoisted_62 = { class: "bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-6 border border-purple-200" };
const _hoisted_63 = { class: "text-lg font-bold text-gray-900 mb-3 flex items-center" };
const _hoisted_64 = { class: "text-sm text-gray-700 leading-relaxed" };
const _hoisted_65 = { class: "mt-4 text-sm text-purple-600 hover:text-purple-700 font-medium flex items-center" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Dashboard",
  setup(__props) {
    const { user } = useAuth();
    const { bookings, reservations, libraries, books, events, generateAIRecommendations } = useApp();
    const router = useRouter();
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
    const weeklyStudyData = ref([]);
    const recentActivities = ref([]);
    const activeQueues = ref([]);
    const loadDashboardData = async () => {
      try {
        loading.value = true;
        const data = await studentAPI.getDashboard();
        dashboardData.value = data;
        if (data.analytics) {
          studyStreak.value = data.analytics.study_streak || 0;
          hoursToday.value = data.analytics.hours_today || 0;
          weeklyProgress.value = data.analytics.weekly_progress || 0;
          totalWeeklyHours.value = data.analytics.weekly_hours || 0;
          avgSessionDuration.value = data.analytics.avg_session_duration || 0;
          totalSessions.value = data.analytics.total_sessions || 0;
          focusScore.value = data.analytics.focus_score || 0;
          weeklyStudyData.value = data.analytics.weekly_study_data || [];
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
    const achievements = ref([
      {
        id: 1,
        name: "Early Bird",
        icon: Clock,
        progress: Math.min(totalSessions.value, 10),
        target: 10,
        description: "Complete 10 study sessions"
      },
      {
        id: 2,
        name: "Bookworm",
        icon: BookOpen,
        progress: Math.min(reservations.value.length, 15),
        target: 15,
        description: "Reserve 15 books"
      }
    ]);
    const studyTip = ref(
      "The Pomodoro Technique: Study for 25 minutes, then take a 5-minute break. After 4 sessions, take a longer 15-30 minute break. This helps maintain focus and prevents burnout."
    );
    computed(() => [
      {
        title: "Total Bookings",
        value: bookings.value.length.toString(),
        icon: Calendar,
        color: "blue",
        subtitle: "This month"
      },
      {
        title: "Reserved Books",
        value: reservations.value.length.toString(),
        icon: BookMarked,
        color: "teal",
        subtitle: "Active reservations"
      },
      {
        title: "Loyalty Points",
        value: (user.value?.loyalty_points || 0).toString(),
        icon: Award,
        color: "orange",
        subtitle: "Earned points"
      },
      {
        title: "Available Libraries",
        value: libraries.value.length.toString(),
        icon: MapPin,
        color: "green",
        subtitle: "In your area"
      }
    ]);
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
          _cache[12] || (_cache[12] = createBaseVNode("div", { class: "absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mr-32 -mt-32" }, null, -1)),
          _cache[13] || (_cache[13] = createBaseVNode("div", { class: "absolute bottom-0 left-0 w-48 h-48 bg-white opacity-5 rounded-full -ml-24 -mb-24" }, null, -1)),
          createBaseVNode("div", _hoisted_3, [
            createBaseVNode("div", _hoisted_4, [
              createBaseVNode("div", null, [
                createBaseVNode("h1", _hoisted_5, "Welcome back, " + toDisplayString(unref(user)?.name) + "! 👋", 1),
                _cache[0] || (_cache[0] = createBaseVNode("p", { class: "text-blue-100 text-lg" }, "Ready to continue your learning journey?", -1))
              ])
            ]),
            createBaseVNode("div", _hoisted_6, [
              createBaseVNode("div", _hoisted_7, [
                createBaseVNode("div", _hoisted_8, [
                  createBaseVNode("div", _hoisted_9, [
                    createVNode(unref(Calendar), { class: "w-4 h-4 text-white" })
                  ]),
                  _cache[1] || (_cache[1] = createBaseVNode("span", { class: "text-sm font-medium text-white/90" }, "Total Bookings", -1))
                ]),
                createBaseVNode("div", _hoisted_10, toDisplayString(unref(bookings).length), 1),
                _cache[2] || (_cache[2] = createBaseVNode("div", { class: "text-xs text-white/70 mt-1" }, "This month", -1))
              ]),
              createBaseVNode("div", _hoisted_11, [
                createBaseVNode("div", _hoisted_12, [
                  createBaseVNode("div", _hoisted_13, [
                    createVNode(unref(Clock), { class: "w-4 h-4 text-white" })
                  ]),
                  _cache[3] || (_cache[3] = createBaseVNode("span", { class: "text-sm font-medium text-white/90" }, "Hours Today", -1))
                ]),
                createBaseVNode("div", _hoisted_14, toDisplayString(hoursToday.value) + "h", 1),
                _cache[4] || (_cache[4] = createBaseVNode("div", { class: "text-xs text-white/70 mt-1" }, "Keep it up!", -1))
              ]),
              createBaseVNode("div", _hoisted_15, [
                createBaseVNode("div", _hoisted_16, [
                  createBaseVNode("div", _hoisted_17, [
                    createVNode(unref(BookMarked), { class: "w-4 h-4 text-white" })
                  ]),
                  _cache[5] || (_cache[5] = createBaseVNode("span", { class: "text-sm font-medium text-white/90" }, "Reserved Books", -1))
                ]),
                createBaseVNode("div", _hoisted_18, toDisplayString(unref(reservations).length), 1),
                _cache[6] || (_cache[6] = createBaseVNode("div", { class: "text-xs text-white/70 mt-1" }, "Active reservations", -1))
              ]),
              createBaseVNode("div", _hoisted_19, [
                createBaseVNode("div", _hoisted_20, [
                  createBaseVNode("div", _hoisted_21, [
                    createVNode(unref(MapPin), { class: "w-4 h-4 text-white" })
                  ]),
                  _cache[7] || (_cache[7] = createBaseVNode("span", { class: "text-sm font-medium text-white/90" }, "Available Libraries", -1))
                ]),
                createBaseVNode("div", _hoisted_22, toDisplayString(unref(libraries).length), 1),
                _cache[8] || (_cache[8] = createBaseVNode("div", { class: "text-xs text-white/70 mt-1" }, "In your area", -1))
              ]),
              createBaseVNode("div", _hoisted_23, [
                createBaseVNode("div", _hoisted_24, [
                  createBaseVNode("div", _hoisted_25, [
                    createVNode(unref(Flame), { class: "w-4 h-4 text-white" })
                  ]),
                  _cache[9] || (_cache[9] = createBaseVNode("span", { class: "text-sm font-medium text-white/90" }, "Study Streak", -1))
                ]),
                createBaseVNode("div", _hoisted_26, [
                  createBaseVNode("div", _hoisted_27, toDisplayString(studyStreak.value), 1),
                  _cache[10] || (_cache[10] = createBaseVNode("div", { class: "text-xs text-white/70 font-bold uppercase tracking-widest" }, "Days", -1))
                ]),
                _cache[11] || (_cache[11] = createBaseVNode("div", { class: "text-xs text-white/70 mt-1" }, "Don't break it!", -1))
              ])
            ])
          ])
        ]),
        createBaseVNode("div", _hoisted_28, [
          createBaseVNode("div", _hoisted_29, [
            createVNode(_sfc_main$4, {
              recommendations: recommendations.value,
              onAction: handleRecommendationAction
            }, null, 8, ["recommendations"]),
            createBaseVNode("div", _hoisted_30, [
              createBaseVNode("div", _hoisted_31, [
                createBaseVNode("h2", _hoisted_32, [
                  createVNode(unref(ChartColumn), { class: "w-5 h-5 mr-2 text-blue-600" }),
                  _cache[14] || (_cache[14] = createTextVNode(" Study Analytics ", -1))
                ]),
                _cache[15] || (_cache[15] = createBaseVNode("select", { class: "px-3 py-1 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" }, [
                  createBaseVNode("option", null, "Last 7 Days"),
                  createBaseVNode("option", null, "Last 30 Days"),
                  createBaseVNode("option", null, "This Month")
                ], -1))
              ]),
              createBaseVNode("div", _hoisted_33, [
                createBaseVNode("div", _hoisted_34, [
                  _cache[16] || (_cache[16] = createBaseVNode("span", { class: "text-sm font-medium text-gray-600" }, "Weekly Study Hours", -1)),
                  createBaseVNode("span", _hoisted_35, toDisplayString(totalWeeklyHours.value) + "h total", 1)
                ]),
                createBaseVNode("div", _hoisted_36, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(weeklyStudyData.value, (day, index) => {
                    return openBlock(), createElementBlock("div", {
                      key: index,
                      class: "flex-1 flex flex-col items-center group"
                    }, [
                      createBaseVNode("div", {
                        class: "w-full bg-gradient-to-t from-blue-600 to-cyan-500 rounded-t-lg transition-all hover:opacity-80 cursor-pointer relative",
                        style: normalizeStyle({ height: day.hours / Math.max(...weeklyStudyData.value.map((d) => d.hours)) * 100 + "%" })
                      }, [
                        createBaseVNode("div", _hoisted_37, toDisplayString(day.hours) + "h ", 1)
                      ], 4),
                      createBaseVNode("span", _hoisted_38, toDisplayString(day.day), 1)
                    ]);
                  }), 128))
                ])
              ]),
              createBaseVNode("div", _hoisted_39, [
                createBaseVNode("div", _hoisted_40, [
                  createBaseVNode("div", _hoisted_41, toDisplayString(avgSessionDuration.value) + "h", 1),
                  _cache[17] || (_cache[17] = createBaseVNode("div", { class: "text-xs text-gray-600" }, "Avg. Session", -1))
                ]),
                createBaseVNode("div", _hoisted_42, [
                  createBaseVNode("div", _hoisted_43, toDisplayString(totalSessions.value), 1),
                  _cache[18] || (_cache[18] = createBaseVNode("div", { class: "text-xs text-gray-600" }, "Total Sessions", -1))
                ]),
                createBaseVNode("div", _hoisted_44, [
                  createBaseVNode("div", _hoisted_45, toDisplayString(focusScore.value) + "%", 1),
                  _cache[19] || (_cache[19] = createBaseVNode("div", { class: "text-xs text-gray-600" }, "Focus Score", -1))
                ])
              ])
            ]),
            createBaseVNode("div", _hoisted_46, [
              createBaseVNode("h2", _hoisted_47, [
                createVNode(unref(Activity), { class: "w-5 h-5 mr-2 text-blue-600" }),
                _cache[20] || (_cache[20] = createTextVNode(" Recent Activity ", -1))
              ]),
              createBaseVNode("div", _hoisted_48, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(recentActivities.value, (activity) => {
                  return openBlock(), createElementBlock("div", {
                    key: activity.id,
                    class: "flex items-start space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  }, [
                    createBaseVNode("div", {
                      class: normalizeClass([
                        "w-10 h-10 rounded-full flex items-center justify-center",
                        activity.type === "booking" ? "bg-blue-100" : activity.type === "book" ? "bg-green-100" : activity.type === "event" ? "bg-purple-100" : "bg-orange-100"
                      ])
                    }, [
                      (openBlock(), createBlock(resolveDynamicComponent(activity.icon), {
                        class: normalizeClass([
                          "w-5 h-5",
                          activity.type === "booking" ? "text-blue-600" : activity.type === "book" ? "text-green-600" : activity.type === "event" ? "text-purple-600" : "text-orange-600"
                        ])
                      }, null, 8, ["class"]))
                    ], 2),
                    createBaseVNode("div", _hoisted_49, [
                      createBaseVNode("p", _hoisted_50, toDisplayString(activity.title), 1),
                      createBaseVNode("p", _hoisted_51, toDisplayString(activity.description), 1),
                      createBaseVNode("span", _hoisted_52, toDisplayString(activity.time), 1)
                    ])
                  ]);
                }), 128))
              ])
            ])
          ]),
          createBaseVNode("div", _hoisted_53, [
            createVNode(_sfc_main$1),
            createVNode(_sfc_main$3),
            createVNode(_sfc_main$2, { queues: activeQueues.value }, null, 8, ["queues"]),
            createBaseVNode("div", _hoisted_54, [
              createBaseVNode("h2", _hoisted_55, [
                createVNode(unref(Trophy), { class: "w-5 h-5 mr-2 text-yellow-600" }),
                _cache[21] || (_cache[21] = createTextVNode(" Achievements ", -1))
              ]),
              createBaseVNode("div", _hoisted_56, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(achievements.value, (achievement) => {
                  return openBlock(), createElementBlock("div", {
                    key: achievement.id,
                    class: "relative"
                  }, [
                    createBaseVNode("div", _hoisted_57, [
                      createBaseVNode("div", _hoisted_58, [
                        (openBlock(), createBlock(resolveDynamicComponent(achievement.icon), { class: "w-4 h-4 text-gray-600" })),
                        createBaseVNode("span", _hoisted_59, toDisplayString(achievement.name), 1)
                      ]),
                      createBaseVNode("span", _hoisted_60, toDisplayString(achievement.progress) + "/" + toDisplayString(achievement.target), 1)
                    ]),
                    createBaseVNode("div", _hoisted_61, [
                      createBaseVNode("div", {
                        class: "bg-gradient-to-r from-blue-600 to-cyan-500 h-2 rounded-full transition-all",
                        style: normalizeStyle({ width: achievement.progress / achievement.target * 100 + "%" })
                      }, null, 4)
                    ])
                  ]);
                }), 128))
              ])
            ]),
            createBaseVNode("div", _hoisted_62, [
              createBaseVNode("h3", _hoisted_63, [
                createVNode(unref(Lightbulb), { class: "w-5 h-5 mr-2 text-purple-600" }),
                _cache[22] || (_cache[22] = createTextVNode(" Study Tip of the Day ", -1))
              ]),
              createBaseVNode("p", _hoisted_64, toDisplayString(studyTip.value), 1),
              createBaseVNode("button", _hoisted_65, [
                _cache[23] || (_cache[23] = createTextVNode(" Learn more ", -1)),
                createVNode(unref(ChevronRight), { class: "w-4 h-4 ml-1" })
              ])
            ])
          ])
        ])
      ]);
    };
  }
});
export {
  _sfc_main as default
};
