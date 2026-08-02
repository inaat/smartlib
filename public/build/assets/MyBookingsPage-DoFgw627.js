import { d as defineComponent, J as useApp, r as ref, c as computed, E as watch, o as onMounted, H as onUnmounted, a as createElementBlock, b as createBaseVNode, f as createVNode, w as withCtx, g as resolveComponent, u as unref, F as Fragment, k as renderList, i as createTextVNode, j as createCommentVNode, t as toDisplayString, n as normalizeClass, C as useRouter, l as openBlock } from "./main-BGbL_8Ba.js";
import { u as useSwal } from "./useSwal-pQW_XkRe.js";
import { S as SeatExtensionModal } from "./SeatExtensionModal-DBtCzVWv.js";
import { A as Armchair } from "./armchair-enLzRy9P.js";
import { H as History } from "./history-QvQe7Bmv.js";
import { C as Clock } from "./clock-Cir2UmjW.js";
import { P as Plus } from "./plus-C--9TlXh.js";
import { M as MapPin } from "./map-pin-BwNQ8wyg.js";
import { M as Monitor } from "./monitor-cSjE3eN2.js";
import { P as PanelsTopLeft } from "./panels-top-left-8LZJl8pP.js";
import { Z as Zap } from "./zap-DwN4yWwn.js";
import { C as Calendar } from "./calendar-DQ765muz.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
/* empty css               */
import "./x-Cqc9Wc4f.js";
import "./createLucideIcon-v8VVJu1z.js";
import "./circle-alert-CbhTHhAn.js";
import "./triangle-alert-4H5SUbvt.js";
import "./arrow-right-DQLFZvPB.js";
const _hoisted_1 = { class: "space-y-6 pb-12 font-outfit" };
const _hoisted_2 = { class: "flex justify-end" };
const _hoisted_3 = { class: "space-y-4" };
const _hoisted_4 = {
  key: 0,
  class: "bg-white rounded-3xl p-12 text-center border border-dashed border-slate-200 shadow-sm"
};
const _hoisted_5 = { class: "w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-blue-100 shadow-inner" };
const _hoisted_6 = {
  key: 1,
  class: "grid grid-cols-1 gap-6"
};
const _hoisted_7 = { class: "absolute top-5 right-6 flex items-center gap-2" };
const _hoisted_8 = {
  key: 0,
  class: "inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-full text-[10px] font-semibold uppercase tracking-wider"
};
const _hoisted_9 = {
  key: 1,
  class: "inline-flex items-center gap-1.5 px-3 py-1 bg-blue-50 text-blue-700 border border-blue-200 rounded-full text-[10px] font-semibold uppercase tracking-wider"
};
const _hoisted_10 = { class: "flex flex-col lg:flex-row lg:items-center justify-between gap-6" };
const _hoisted_11 = { class: "flex flex-col sm:flex-row sm:items-center gap-5 flex-1 min-w-0" };
const _hoisted_12 = { class: "space-y-1 min-w-0" };
const _hoisted_13 = { class: "flex items-center gap-2" };
const _hoisted_14 = { class: "font-bold text-slate-800 text-lg tracking-tight" };
const _hoisted_15 = { class: "text-xs font-semibold text-slate-400 bg-slate-50 px-2 py-0.5 rounded-lg border border-slate-100 font-mono" };
const _hoisted_16 = { class: "text-slate-600 text-xs flex items-center font-medium" };
const _hoisted_17 = { class: "flex flex-wrap gap-1.5 pt-1.5" };
const _hoisted_18 = {
  key: 0,
  class: "flex items-center text-[10px] bg-slate-50 text-slate-600 border border-slate-100 px-2.5 py-0.5 rounded-lg font-semibold"
};
const _hoisted_19 = {
  key: 1,
  class: "flex items-center text-[10px] bg-slate-50 text-slate-600 border border-slate-100 px-2.5 py-0.5 rounded-lg font-semibold"
};
const _hoisted_20 = {
  key: 2,
  class: "flex items-center text-[10px] bg-slate-50 text-slate-600 border border-slate-100 px-2.5 py-0.5 rounded-lg font-semibold"
};
const _hoisted_21 = { class: "flex flex-col sm:flex-row sm:items-center gap-4 flex-shrink-0 border-t lg:border-t-0 pt-4 lg:pt-0 border-slate-100" };
const _hoisted_22 = { class: "bg-slate-50/80 border border-slate-100 rounded-2xl px-5 py-3 min-w-[150px] text-center sm:text-left flex flex-col justify-center" };
const _hoisted_23 = { class: "flex sm:flex-row gap-2.5 items-center justify-center sm:justify-start" };
const _hoisted_24 = ["onClick"];
const _hoisted_25 = ["onClick"];
const _hoisted_26 = ["onClick"];
const _hoisted_27 = ["onClick"];
const _hoisted_28 = { class: "pt-6" };
const _hoisted_29 = { class: "flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6" };
const _hoisted_30 = { class: "text-sm font-bold text-slate-700 uppercase tracking-wider flex items-center px-1" };
const _hoisted_31 = { class: "flex items-center gap-1.5 bg-slate-100 p-1 rounded-xl w-fit" };
const _hoisted_32 = ["onClick"];
const _hoisted_33 = {
  key: 0,
  class: "bg-slate-50/30 rounded-2xl p-16 text-center border border-slate-100"
};
const _hoisted_34 = {
  key: 1,
  class: "bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden text-left"
};
const _hoisted_35 = { class: "overflow-x-auto" };
const _hoisted_36 = { class: "w-full text-left" };
const _hoisted_37 = { class: "divide-y divide-slate-50" };
const _hoisted_38 = { class: "px-6 py-4 whitespace-nowrap" };
const _hoisted_39 = { class: "flex items-center space-x-3" };
const _hoisted_40 = { class: "text-left" };
const _hoisted_41 = { class: "text-xs font-bold text-slate-800 leading-snug" };
const _hoisted_42 = { class: "text-[9px] text-slate-400 font-bold uppercase mt-0.5 leading-none" };
const _hoisted_43 = { class: "px-6 py-4 text-left whitespace-nowrap" };
const _hoisted_44 = { class: "text-xs font-bold text-slate-700 flex items-center" };
const _hoisted_45 = { class: "px-6 py-4 whitespace-nowrap" };
const _hoisted_46 = { class: "flex items-center text-xs font-bold text-slate-700" };
const _hoisted_47 = { class: "px-6 py-4 whitespace-nowrap" };
const _hoisted_48 = { class: "flex items-center text-xs font-semibold text-slate-500" };
const _hoisted_49 = { class: "px-6 py-4 text-center whitespace-nowrap" };
const _hoisted_50 = {
  key: 0,
  class: "flex items-center justify-center text-xs font-bold text-blue-600"
};
const _hoisted_51 = {
  key: 1,
  class: "text-xs text-slate-400"
};
const _hoisted_52 = { class: "px-6 py-4 text-right whitespace-nowrap" };
const _hoisted_53 = {
  key: 0,
  class: "px-6 py-4 bg-slate-50/30 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-[10px] font-semibold text-slate-400 uppercase tracking-widest"
};
const _hoisted_54 = { class: "flex items-center space-x-1.5" };
const _hoisted_55 = ["disabled"];
const _hoisted_56 = ["onClick"];
const _hoisted_57 = ["disabled"];
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
          _cache[10] || (_cache[10] = createBaseVNode("h3", { class: "text-xs font-bold text-slate-800 uppercase tracking-wider mb-5 flex items-center space-x-2 px-1" }, [
            createBaseVNode("span", { class: "w-2 h-2 rounded-full bg-blue-600" }),
            createBaseVNode("span", null, "Current & Upcoming")
          ], -1)),
          activeBookings.value.length === 0 ? (openBlock(), createElementBlock("div", _hoisted_4, [
            createBaseVNode("div", _hoisted_5, [
              createVNode(unref(Armchair), { class: "w-7 h-7" })
            ]),
            _cache[5] || (_cache[5] = createBaseVNode("h3", { class: "text-base font-bold text-slate-800 mb-1" }, "No Active Bookings", -1)),
            _cache[6] || (_cache[6] = createBaseVNode("p", { class: "text-xs text-slate-500 max-w-xs mx-auto mb-6 font-medium leading-relaxed" }, "You don't have any active seat reservations at the moment. Find a library to book your spot!", -1)),
            createVNode(_component_router_link, {
              to: "/student/libraries",
              class: "inline-flex items-center px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-semibold active:scale-98 transition-all shadow-sm cursor-pointer"
            }, {
              default: withCtx(() => [..._cache[4] || (_cache[4] = [
                createTextVNode(" Explore Libraries ", -1)
              ])]),
              _: 1
            })
          ])) : (openBlock(), createElementBlock("div", _hoisted_6, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(activeBookings.value, (booking) => {
              return openBlock(), createElementBlock("div", {
                key: booking.id,
                class: "bg-white rounded-3xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 group relative overflow-hidden text-left"
              }, [
                createBaseVNode("div", _hoisted_7, [
                  booking.status === "checked_in" ? (openBlock(), createElementBlock("span", _hoisted_8, [..._cache[7] || (_cache[7] = [
                    createBaseVNode("span", { class: "w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" }, null, -1),
                    createTextVNode(" Active Now ", -1)
                  ])])) : (openBlock(), createElementBlock("span", _hoisted_9, " Upcoming Session "))
                ]),
                createBaseVNode("div", _hoisted_10, [
                  createBaseVNode("div", _hoisted_11, [
                    createBaseVNode("div", {
                      class: normalizeClass([
                        "w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 transition-all border shadow-sm",
                        booking.status === "checked_in" ? "bg-emerald-50 text-emerald-600 border-emerald-200" : "bg-blue-50 text-blue-600 border-blue-200"
                      ])
                    }, [
                      createVNode(unref(Armchair), { class: "w-6 h-6" })
                    ], 2),
                    createBaseVNode("div", _hoisted_12, [
                      createBaseVNode("div", _hoisted_13, [
                        createBaseVNode("h4", _hoisted_14, "Seat " + toDisplayString(booking.seat?.seat_number), 1),
                        createBaseVNode("span", _hoisted_15, " #" + toDisplayString(booking.id), 1)
                      ]),
                      createBaseVNode("p", _hoisted_16, [
                        createVNode(unref(MapPin), { class: "w-3.5 h-3.5 mr-1.5 text-blue-600" }),
                        createTextVNode(" " + toDisplayString(booking.seat?.library?.name), 1)
                      ]),
                      createBaseVNode("div", _hoisted_17, [
                        booking.seat?.has_computer ? (openBlock(), createElementBlock("span", _hoisted_18, [
                          createVNode(unref(Monitor), { class: "w-3 h-3 mr-1 text-slate-400" }),
                          _cache[8] || (_cache[8] = createTextVNode(" PC Included ", -1))
                        ])) : createCommentVNode("", true),
                        booking.seat?.near_window ? (openBlock(), createElementBlock("span", _hoisted_19, [
                          createVNode(unref(PanelsTopLeft), { class: "w-3 h-3 mr-1 text-slate-400" }),
                          _cache[9] || (_cache[9] = createTextVNode(" Window ", -1))
                        ])) : createCommentVNode("", true),
                        booking.seat && booking.seat.socket_count > 0 ? (openBlock(), createElementBlock("span", _hoisted_20, [
                          createVNode(unref(Zap), { class: "w-3 h-3 mr-1 text-slate-400" }),
                          createTextVNode(" " + toDisplayString(booking.seat.socket_count) + " Plug ", 1)
                        ])) : createCommentVNode("", true)
                      ])
                    ])
                  ]),
                  createBaseVNode("div", _hoisted_21, [
                    createBaseVNode("div", _hoisted_22, [
                      createBaseVNode("span", {
                        class: normalizeClass(["text-[10px] font-semibold uppercase tracking-wider block mb-1", isOverdue(booking) ? "text-rose-600" : "text-slate-400"])
                      }, toDisplayString(getTimerLabel(booking)), 3),
                      createBaseVNode("span", {
                        class: normalizeClass(["text-2xl font-bold font-mono tracking-tight leading-none", isOverdue(booking) ? "text-rose-600" : "text-blue-600"])
                      }, toDisplayString(getRemainingTime(booking)), 3)
                    ]),
                    createBaseVNode("div", _hoisted_23, [
                      booking.status === "booked" ? (openBlock(), createElementBlock("button", {
                        key: 0,
                        onClick: ($event) => handleCheckIn(booking.id),
                        class: "px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-semibold shadow-sm active:scale-98 transition-all cursor-pointer"
                      }, " Check In ", 8, _hoisted_24)) : createCommentVNode("", true),
                      booking.status === "booked" ? (openBlock(), createElementBlock("button", {
                        key: 1,
                        onClick: ($event) => handleCancel(booking.id),
                        class: "px-4 py-2.5 bg-slate-50 border border-slate-200 text-slate-600 hover:bg-slate-100 rounded-xl text-xs font-semibold transition-all cursor-pointer"
                      }, " Cancel ", 8, _hoisted_25)) : createCommentVNode("", true),
                      booking.status === "checked_in" ? (openBlock(), createElementBlock("button", {
                        key: 2,
                        onClick: ($event) => handleCheckOut(booking.id),
                        class: "px-5 py-2.5 bg-rose-50 text-rose-600 border border-rose-100 hover:bg-rose-100 rounded-xl text-xs font-semibold transition-all cursor-pointer whitespace-nowrap"
                      }, " Check Out ", 8, _hoisted_26)) : createCommentVNode("", true),
                      booking.status === "checked_in" ? (openBlock(), createElementBlock("button", {
                        key: 3,
                        onClick: ($event) => handleExtend(booking),
                        class: "px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-semibold shadow-sm active:scale-98 transition-all cursor-pointer whitespace-nowrap"
                      }, " Extend Time ", 8, _hoisted_27)) : createCommentVNode("", true)
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
        createBaseVNode("div", _hoisted_28, [
          createBaseVNode("div", _hoisted_29, [
            createBaseVNode("h2", _hoisted_30, [
              createVNode(unref(History), { class: "w-4 h-4 mr-2 text-purple-600" }),
              _cache[11] || (_cache[11] = createTextVNode(" Booking History ", -1))
            ]),
            createBaseVNode("div", _hoisted_31, [
              (openBlock(), createElementBlock(Fragment, null, renderList(["all", "completed", "cancelled"], (filter) => {
                return createBaseVNode("button", {
                  key: filter,
                  onClick: ($event) => historyFilter.value = filter,
                  class: normalizeClass([
                    "px-4 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-wide transition-all",
                    historyFilter.value === filter ? "bg-white shadow-sm text-slate-800" : "text-slate-400 hover:text-slate-700"
                  ])
                }, toDisplayString(filter), 11, _hoisted_32);
              }), 64))
            ])
          ]),
          !filteredHistory.value || filteredHistory.value.length === 0 ? (openBlock(), createElementBlock("div", _hoisted_33, [
            createVNode(unref(Clock), { class: "w-12 h-12 text-slate-300 mx-auto mb-3" }),
            _cache[12] || (_cache[12] = createBaseVNode("p", { class: "text-xs text-slate-400 font-bold uppercase tracking-wider" }, "No past bookings found.", -1))
          ])) : (openBlock(), createElementBlock("div", _hoisted_34, [
            createBaseVNode("div", _hoisted_35, [
              createBaseVNode("table", _hoisted_36, [
                _cache[13] || (_cache[13] = createBaseVNode("thead", null, [
                  createBaseVNode("tr", { class: "bg-slate-50/50 border-b border-slate-100 text-[10px] uppercase font-bold tracking-wider text-slate-400" }, [
                    createBaseVNode("th", { class: "px-6 py-3.5" }, "Seat"),
                    createBaseVNode("th", { class: "px-6 py-3.5" }, "Library"),
                    createBaseVNode("th", { class: "px-6 py-3.5" }, "Date"),
                    createBaseVNode("th", { class: "px-6 py-3.5" }, "Scheduled Time"),
                    createBaseVNode("th", { class: "px-6 py-3.5 text-center" }, "Duration"),
                    createBaseVNode("th", { class: "px-6 py-3.5 text-right" }, "Status")
                  ])
                ], -1)),
                createBaseVNode("tbody", _hoisted_37, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(paginatedHistory.value, (booking) => {
                    return openBlock(), createElementBlock("tr", {
                      key: booking.id,
                      class: "hover:bg-slate-50/30 transition-colors group"
                    }, [
                      createBaseVNode("td", _hoisted_38, [
                        createBaseVNode("div", _hoisted_39, [
                          createBaseVNode("div", {
                            class: normalizeClass([
                              "w-9 h-9 rounded-xl border flex items-center justify-center font-bold text-xs transition-all duration-300",
                              booking.status === "checked_out" ? "bg-emerald-50 border-emerald-100 text-emerald-600" : booking.status === "cancelled" ? "bg-red-50 border-red-100 text-red-600" : "bg-slate-50 border-slate-100 text-slate-500"
                            ])
                          }, [
                            createVNode(unref(Armchair), { class: "w-4 h-4" })
                          ], 2),
                          createBaseVNode("div", _hoisted_40, [
                            createBaseVNode("div", _hoisted_41, "Seat " + toDisplayString(booking.seat?.seat_number || "N/A"), 1),
                            createBaseVNode("div", _hoisted_42, "ID #" + toDisplayString(booking.id), 1)
                          ])
                        ])
                      ]),
                      createBaseVNode("td", _hoisted_43, [
                        createBaseVNode("div", _hoisted_44, [
                          createVNode(unref(MapPin), { class: "w-3.5 h-3.5 mr-1 text-slate-400 flex-shrink-0" }),
                          createTextVNode(" " + toDisplayString(booking.seat?.library?.name || "N/A"), 1)
                        ])
                      ]),
                      createBaseVNode("td", _hoisted_45, [
                        createBaseVNode("div", _hoisted_46, [
                          createVNode(unref(Calendar), { class: "w-3.5 h-3.5 mr-1 text-slate-400 flex-shrink-0" }),
                          createTextVNode(" " + toDisplayString(formatDate(booking.booking_time)), 1)
                        ])
                      ]),
                      createBaseVNode("td", _hoisted_47, [
                        createBaseVNode("div", _hoisted_48, [
                          createVNode(unref(Clock), { class: "w-3.5 h-3.5 mr-1.5 text-slate-400 flex-shrink-0" }),
                          createTextVNode(" " + toDisplayString(formatTime(booking.booking_time)) + " - " + toDisplayString(formatTime(booking.scheduled_end_time)), 1)
                        ])
                      ]),
                      createBaseVNode("td", _hoisted_49, [
                        booking.total_minutes ? (openBlock(), createElementBlock("div", _hoisted_50, [
                          createVNode(unref(Zap), { class: "w-3.5 h-3.5 mr-1 text-blue-500" }),
                          createTextVNode(" " + toDisplayString(formatDuration(booking.total_minutes)), 1)
                        ])) : (openBlock(), createElementBlock("div", _hoisted_51, "--"))
                      ]),
                      createBaseVNode("td", _hoisted_52, [
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
            filteredHistory.value.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_53, [
              createBaseVNode("div", null, "Showing " + toDisplayString(historyStartIndex.value) + " to " + toDisplayString(historyEndIndex.value) + " of " + toDisplayString(filteredHistory.value.length) + " entries", 1),
              createBaseVNode("div", _hoisted_54, [
                createBaseVNode("button", {
                  onClick: _cache[1] || (_cache[1] = ($event) => historyPage.value--),
                  disabled: historyPage.value === 1,
                  class: "px-3 py-1.5 border border-slate-200 bg-white rounded-xl text-slate-600 font-bold hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition-all text-xs cursor-pointer shadow-2xs"
                }, " Previous ", 8, _hoisted_55),
                (openBlock(true), createElementBlock(Fragment, null, renderList(totalHistoryPages.value, (page) => {
                  return openBlock(), createElementBlock("button", {
                    key: page,
                    onClick: ($event) => historyPage.value = page,
                    class: normalizeClass([
                      "w-8 h-8 rounded-xl text-xs font-bold transition-all cursor-pointer shadow-2xs",
                      historyPage.value === page ? "bg-blue-600 text-white shadow-sm" : "border border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
                    ])
                  }, toDisplayString(page), 11, _hoisted_56);
                }), 128)),
                createBaseVNode("button", {
                  onClick: _cache[2] || (_cache[2] = ($event) => historyPage.value++),
                  disabled: historyPage.value === totalHistoryPages.value,
                  class: "px-3 py-1.5 border border-slate-200 bg-white rounded-xl text-slate-600 font-bold hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition-all text-xs cursor-pointer shadow-2xs"
                }, " Next ", 8, _hoisted_57)
              ])
            ])) : createCommentVNode("", true)
          ]))
        ])
      ]);
    };
  }
});
const MyBookingsPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-8b1f0b22"]]);
export {
  MyBookingsPage as default
};
