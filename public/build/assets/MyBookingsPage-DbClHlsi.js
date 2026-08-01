import { d as defineComponent, J as useApp, r as ref, c as computed, o as onMounted, H as onUnmounted, a as createElementBlock, b as createBaseVNode, f as createVNode, w as withCtx, g as resolveComponent, i as createTextVNode, u as unref, F as Fragment, k as renderList, j as createCommentVNode, n as normalizeClass, t as toDisplayString, C as useRouter, l as openBlock } from "./main-D4odWxzi.js";
import { u as useSwal } from "./useSwal-pQW_XkRe.js";
import { S as SeatExtensionModal } from "./SeatExtensionModal-CSfzEG8m.js";
import { C as Clock } from "./clock-DbxW0WRH.js";
import { A as Armchair } from "./armchair-DKdV929b.js";
import { H as History } from "./history-DqD4R3wi.js";
import { P as Plus } from "./plus-zxxEdYDr.js";
import { M as MapPin } from "./map-pin-BD7G2pqo.js";
import { M as Monitor } from "./monitor-B0QdLhBZ.js";
import { P as PanelsTopLeft } from "./panels-top-left-Da8DkFNO.js";
import { Z as Zap } from "./zap-RZ_B5mGE.js";
import { C as Calendar } from "./calendar-lJfe3rfu.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
/* empty css               */
import "./x-C9--2uVT.js";
import "./createLucideIcon-BgnXjtcZ.js";
import "./circle-alert-C5Ue85PY.js";
import "./triangle-alert-SquaIONa.js";
import "./arrow-right-PLGxtZrt.js";
const _hoisted_1 = { class: "space-y-6 pb-12 font-outfit" };
const _hoisted_2 = { class: "flex justify-end" };
const _hoisted_3 = { class: "space-y-4" };
const _hoisted_4 = { class: "flex items-center justify-between px-1" };
const _hoisted_5 = { class: "text-sm font-bold text-slate-700 uppercase tracking-wider flex items-center" };
const _hoisted_6 = {
  key: 0,
  class: "bg-slate-100 rounded-2xl p-16 text-center border border-dashed border-slate-200/80"
};
const _hoisted_7 = { class: "w-16 h-16 bg-slate-100 text-slate-400 rounded-full flex items-center justify-center mx-auto mb-4 border border-slate-200 shadow-inner" };
const _hoisted_8 = {
  key: 1,
  class: "grid grid-cols-1 gap-6"
};
const _hoisted_9 = { class: "absolute top-4 right-4 flex items-center gap-2" };
const _hoisted_10 = {
  key: 0,
  class: "inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 text-emerald-700 border border-emerald-100/60 rounded-full text-[10px] font-bold uppercase tracking-wider"
};
const _hoisted_11 = {
  key: 1,
  class: "inline-flex items-center gap-1.5 px-3 py-1 bg-blue-50 text-blue-700 border border-blue-100/60 rounded-full text-[10px] font-bold uppercase tracking-wider"
};
const _hoisted_12 = { class: "flex flex-col lg:flex-row lg:items-center justify-between gap-6" };
const _hoisted_13 = { class: "flex flex-col sm:flex-row sm:items-center gap-5 flex-1 min-w-0" };
const _hoisted_14 = { class: "space-y-1.5 min-w-0" };
const _hoisted_15 = { class: "flex items-center gap-2.5" };
const _hoisted_16 = { class: "font-bold text-slate-800 text-xl tracking-tight" };
const _hoisted_17 = { class: "text-xs font-semibold text-slate-400 bg-slate-50 px-2 py-0.5 rounded-lg border border-slate-100/70 font-mono" };
const _hoisted_18 = { class: "text-slate-500 text-xs flex items-center font-semibold" };
const _hoisted_19 = { class: "flex flex-wrap gap-1.5 pt-1" };
const _hoisted_20 = {
  key: 0,
  class: "flex items-center text-[10px] bg-slate-50 text-slate-600 border border-slate-150/50 px-2.5 py-0.5 rounded-lg font-bold"
};
const _hoisted_21 = {
  key: 1,
  class: "flex items-center text-[10px] bg-slate-50 text-slate-600 border border-slate-150/50 px-2.5 py-0.5 rounded-lg font-bold"
};
const _hoisted_22 = {
  key: 2,
  class: "flex items-center text-[10px] bg-slate-50 text-slate-600 border border-slate-150/50 px-2.5 py-0.5 rounded-lg font-bold"
};
const _hoisted_23 = { class: "flex flex-col sm:flex-row sm:items-center gap-5 flex-shrink-0 border-t lg:border-t-0 pt-5 lg:pt-0 border-slate-50" };
const _hoisted_24 = { class: "bg-slate-50/70 border border-slate-100/80 rounded-2xl px-5 py-3.5 min-w-[160px] text-center sm:text-left flex flex-col justify-center" };
const _hoisted_25 = { class: "flex sm:flex-col lg:flex-row gap-2.5 justify-center sm:justify-start min-w-[140px]" };
const _hoisted_26 = ["onClick"];
const _hoisted_27 = ["onClick"];
const _hoisted_28 = ["onClick"];
const _hoisted_29 = ["onClick"];
const _hoisted_30 = { class: "pt-6" };
const _hoisted_31 = { class: "flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6" };
const _hoisted_32 = { class: "text-sm font-bold text-slate-700 uppercase tracking-wider flex items-center px-1" };
const _hoisted_33 = { class: "flex items-center gap-1.5 bg-slate-100 p-1 rounded-xl w-fit" };
const _hoisted_34 = ["onClick"];
const _hoisted_35 = {
  key: 0,
  class: "bg-slate-50/30 rounded-2xl p-16 text-center border border-slate-100"
};
const _hoisted_36 = {
  key: 1,
  class: "overflow-x-auto bg-white rounded-2xl border border-slate-100 shadow-sm"
};
const _hoisted_37 = { class: "w-full text-left" };
const _hoisted_38 = { class: "divide-y divide-slate-50" };
const _hoisted_39 = { class: "px-6 py-4 whitespace-nowrap" };
const _hoisted_40 = { class: "flex items-center space-x-3" };
const _hoisted_41 = { class: "text-left" };
const _hoisted_42 = { class: "text-xs font-bold text-slate-800 leading-snug" };
const _hoisted_43 = { class: "text-[9px] text-slate-400 font-bold uppercase mt-0.5 leading-none" };
const _hoisted_44 = { class: "px-6 py-4 text-left whitespace-nowrap" };
const _hoisted_45 = { class: "text-xs font-bold text-slate-700 flex items-center" };
const _hoisted_46 = { class: "px-6 py-4 whitespace-nowrap" };
const _hoisted_47 = { class: "flex items-center text-xs font-bold text-slate-700" };
const _hoisted_48 = { class: "px-6 py-4 whitespace-nowrap" };
const _hoisted_49 = { class: "flex items-center text-xs font-semibold text-slate-500" };
const _hoisted_50 = { class: "px-6 py-4 text-center whitespace-nowrap" };
const _hoisted_51 = {
  key: 0,
  class: "flex items-center justify-center text-xs font-bold text-blue-600"
};
const _hoisted_52 = {
  key: 1,
  class: "text-xs text-slate-400"
};
const _hoisted_53 = { class: "px-6 py-4 text-right whitespace-nowrap" };
const _hoisted_54 = {
  key: 2,
  class: "mt-8 text-center"
};
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
    onMounted(async () => {
      await loadBookings();
      timer = setInterval(() => {
        now.value = /* @__PURE__ */ new Date();
      }, 1e3);
    });
    onUnmounted(() => {
      if (timer) clearInterval(timer);
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
              _cache[1] || (_cache[1] = createTextVNode(" Book New Seat ", -1))
            ]),
            _: 1
          })
        ]),
        createBaseVNode("div", _hoisted_3, [
          createBaseVNode("div", _hoisted_4, [
            createBaseVNode("h2", _hoisted_5, [
              createVNode(unref(Clock), { class: "w-4 h-4 mr-2 text-blue-600" }),
              _cache[2] || (_cache[2] = createTextVNode(" Current & Upcoming ", -1))
            ])
          ]),
          activeBookings.value.length === 0 ? (openBlock(), createElementBlock("div", _hoisted_6, [
            createBaseVNode("div", _hoisted_7, [
              createVNode(unref(Armchair), { class: "w-7 h-7" })
            ]),
            _cache[4] || (_cache[4] = createBaseVNode("h3", { class: "text-base font-bold text-slate-800 mb-1" }, "No Active Bookings", -1)),
            _cache[5] || (_cache[5] = createBaseVNode("p", { class: "text-xs text-slate-400 max-w-xs mx-auto mb-6 leading-relaxed" }, "You don't have any active seat reservations at the moment. Find a library to book your spot!", -1)),
            createVNode(_component_router_link, {
              to: "/student/libraries",
              class: "inline-flex items-center px-5 py-2.5 bg-slate-900 text-white rounded-xl text-xs font-bold hover:opacity-90 active:scale-98 transition-all uppercase tracking-wider"
            }, {
              default: withCtx(() => [..._cache[3] || (_cache[3] = [
                createTextVNode(" Explore Libraries ", -1)
              ])]),
              _: 1
            })
          ])) : (openBlock(), createElementBlock("div", _hoisted_8, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(activeBookings.value, (booking) => {
              return openBlock(), createElementBlock("div", {
                key: booking.id,
                class: "bg-white rounded-3xl p-6 border border-slate-100/60 shadow-lg shadow-slate-100/50 hover:shadow-xl hover:shadow-slate-100/80 transition-all duration-350 group relative overflow-hidden text-left"
              }, [
                createBaseVNode("div", _hoisted_9, [
                  booking.status === "checked_in" ? (openBlock(), createElementBlock("span", _hoisted_10, [..._cache[6] || (_cache[6] = [
                    createBaseVNode("span", { class: "w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" }, null, -1),
                    createTextVNode(" Active Now ", -1)
                  ])])) : (openBlock(), createElementBlock("span", _hoisted_11, " Upcoming Session "))
                ]),
                createBaseVNode("div", _hoisted_12, [
                  createBaseVNode("div", _hoisted_13, [
                    createBaseVNode("div", {
                      class: normalizeClass([
                        "w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 transition-all duration-300 shadow-inner",
                        booking.status === "checked_in" ? "bg-gradient-to-br from-emerald-50 to-teal-50 text-emerald-600 border border-emerald-100/70" : "bg-gradient-to-br from-blue-50 to-cyan-50 text-blue-600 border border-blue-100/70 group-hover:from-blue-600 group-hover:to-blue-700 group-hover:text-white"
                      ])
                    }, [
                      createVNode(unref(Armchair), { class: "w-7 h-7" })
                    ], 2),
                    createBaseVNode("div", _hoisted_14, [
                      createBaseVNode("div", _hoisted_15, [
                        createBaseVNode("h3", _hoisted_16, "Seat " + toDisplayString(booking.seat?.seat_number), 1),
                        createBaseVNode("span", _hoisted_17, " #" + toDisplayString(booking.id), 1)
                      ]),
                      createBaseVNode("p", _hoisted_18, [
                        createVNode(unref(MapPin), { class: "w-4 h-4 mr-1 text-slate-400" }),
                        createTextVNode(" " + toDisplayString(booking.seat?.library?.name), 1)
                      ]),
                      createBaseVNode("div", _hoisted_19, [
                        booking.seat?.has_computer ? (openBlock(), createElementBlock("span", _hoisted_20, [
                          createVNode(unref(Monitor), { class: "w-3.5 h-3.5 mr-1 text-slate-450" }),
                          _cache[7] || (_cache[7] = createTextVNode(" PC Included ", -1))
                        ])) : createCommentVNode("", true),
                        booking.seat?.near_window ? (openBlock(), createElementBlock("span", _hoisted_21, [
                          createVNode(unref(PanelsTopLeft), { class: "w-3.5 h-3.5 mr-1 text-slate-450" }),
                          _cache[8] || (_cache[8] = createTextVNode(" Window ", -1))
                        ])) : createCommentVNode("", true),
                        booking.seat && booking.seat.socket_count > 0 ? (openBlock(), createElementBlock("span", _hoisted_22, [
                          createVNode(unref(Zap), { class: "w-3.5 h-3.5 mr-1 text-slate-450" }),
                          createTextVNode(" " + toDisplayString(booking.seat.socket_count) + " Plug ", 1)
                        ])) : createCommentVNode("", true)
                      ])
                    ])
                  ]),
                  createBaseVNode("div", _hoisted_23, [
                    createBaseVNode("div", _hoisted_24, [
                      createBaseVNode("p", {
                        class: normalizeClass(["text-[9px] font-bold uppercase tracking-widest mb-1.5", isOverdue(booking) ? "text-red-550" : "text-slate-400"])
                      }, toDisplayString(getTimerLabel(booking)), 3),
                      createBaseVNode("p", {
                        class: normalizeClass(["text-2xl font-black font-mono tracking-tight leading-none", isOverdue(booking) ? "text-red-550" : "text-slate-800"])
                      }, toDisplayString(getRemainingTime(booking)), 3)
                    ]),
                    createBaseVNode("div", _hoisted_25, [
                      booking.status === "booked" ? (openBlock(), createElementBlock("button", {
                        key: 0,
                        onClick: ($event) => handleCheckIn(booking.id),
                        class: "flex-1 px-5 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold active:scale-98 transition-all uppercase tracking-wider text-center"
                      }, " Check In ", 8, _hoisted_26)) : createCommentVNode("", true),
                      booking.status === "booked" ? (openBlock(), createElementBlock("button", {
                        key: 1,
                        onClick: ($event) => handleCancel(booking.id),
                        class: "flex-1 px-5 py-3 bg-white border border-slate-200 text-slate-500 rounded-xl text-xs font-bold hover:bg-slate-50 active:scale-98 transition-all uppercase tracking-wider text-center"
                      }, " Cancel ", 8, _hoisted_27)) : createCommentVNode("", true),
                      booking.status === "checked_in" ? (openBlock(), createElementBlock("button", {
                        key: 2,
                        onClick: ($event) => handleCheckOut(booking.id),
                        class: "flex-1 px-5 py-3 bg-rose-50 text-rose-600 border border-rose-100/60 rounded-xl text-xs font-bold hover:bg-rose-100/60 active:scale-98 transition-all uppercase tracking-wider text-center whitespace-nowrap"
                      }, " Check Out ", 8, _hoisted_28)) : createCommentVNode("", true),
                      booking.status === "checked_in" ? (openBlock(), createElementBlock("button", {
                        key: 3,
                        onClick: ($event) => handleExtend(booking),
                        class: "flex-1 px-5 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold active:scale-98 transition-all uppercase tracking-wider text-center whitespace-nowrap"
                      }, " Extend Time ", 8, _hoisted_29)) : createCommentVNode("", true)
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
        createBaseVNode("div", _hoisted_30, [
          createBaseVNode("div", _hoisted_31, [
            createBaseVNode("h2", _hoisted_32, [
              createVNode(unref(History), { class: "w-4 h-4 mr-2 text-purple-600" }),
              _cache[9] || (_cache[9] = createTextVNode(" Booking History ", -1))
            ]),
            createBaseVNode("div", _hoisted_33, [
              (openBlock(), createElementBlock(Fragment, null, renderList(["all", "completed", "cancelled"], (filter) => {
                return createBaseVNode("button", {
                  key: filter,
                  onClick: ($event) => historyFilter.value = filter,
                  class: normalizeClass([
                    "px-4 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-wide transition-all",
                    historyFilter.value === filter ? "bg-white shadow-sm text-slate-800" : "text-slate-400 hover:text-slate-700"
                  ])
                }, toDisplayString(filter), 11, _hoisted_34);
              }), 64))
            ])
          ]),
          !filteredHistory.value || filteredHistory.value.length === 0 ? (openBlock(), createElementBlock("div", _hoisted_35, [
            createVNode(unref(Clock), { class: "w-12 h-12 text-slate-300 mx-auto mb-3" }),
            _cache[10] || (_cache[10] = createBaseVNode("p", { class: "text-xs text-slate-400 font-bold uppercase tracking-wider" }, "No past bookings found.", -1))
          ])) : (openBlock(), createElementBlock("div", _hoisted_36, [
            createBaseVNode("table", _hoisted_37, [
              _cache[11] || (_cache[11] = createBaseVNode("thead", null, [
                createBaseVNode("tr", { class: "bg-slate-50/50 border-b border-slate-100 text-[10px] uppercase font-bold tracking-wider text-slate-400" }, [
                  createBaseVNode("th", { class: "px-6 py-3.5" }, "Seat"),
                  createBaseVNode("th", { class: "px-6 py-3.5" }, "Library"),
                  createBaseVNode("th", { class: "px-6 py-3.5" }, "Date"),
                  createBaseVNode("th", { class: "px-6 py-3.5" }, "Scheduled Time"),
                  createBaseVNode("th", { class: "px-6 py-3.5 text-center" }, "Duration"),
                  createBaseVNode("th", { class: "px-6 py-3.5 text-right" }, "Status")
                ])
              ], -1)),
              createBaseVNode("tbody", _hoisted_38, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(filteredHistory.value, (booking) => {
                  return openBlock(), createElementBlock("tr", {
                    key: booking.id,
                    class: "hover:bg-slate-50/30 transition-colors group"
                  }, [
                    createBaseVNode("td", _hoisted_39, [
                      createBaseVNode("div", _hoisted_40, [
                        createBaseVNode("div", {
                          class: normalizeClass([
                            "w-9 h-9 rounded-xl border flex items-center justify-center font-bold text-xs transition-all duration-300",
                            booking.status === "checked_out" ? "bg-emerald-50 border-emerald-100 text-emerald-600" : booking.status === "cancelled" ? "bg-red-50 border-red-100 text-red-600" : "bg-slate-50 border-slate-100 text-slate-500"
                          ])
                        }, [
                          createVNode(unref(Armchair), { class: "w-4 h-4" })
                        ], 2),
                        createBaseVNode("div", _hoisted_41, [
                          createBaseVNode("div", _hoisted_42, "Seat " + toDisplayString(booking.seat?.seat_number), 1),
                          createBaseVNode("div", _hoisted_43, "ID #" + toDisplayString(booking.id), 1)
                        ])
                      ])
                    ]),
                    createBaseVNode("td", _hoisted_44, [
                      createBaseVNode("div", _hoisted_45, [
                        createVNode(unref(MapPin), { class: "w-3.5 h-3.5 mr-1 text-slate-400 flex-shrink-0" }),
                        createTextVNode(" " + toDisplayString(booking.seat?.library?.name || "N/A"), 1)
                      ])
                    ]),
                    createBaseVNode("td", _hoisted_46, [
                      createBaseVNode("div", _hoisted_47, [
                        createVNode(unref(Calendar), { class: "w-3.5 h-3.5 mr-1 text-slate-400 flex-shrink-0" }),
                        createTextVNode(" " + toDisplayString(formatDate(booking.booking_time)), 1)
                      ])
                    ]),
                    createBaseVNode("td", _hoisted_48, [
                      createBaseVNode("div", _hoisted_49, [
                        createVNode(unref(Clock), { class: "w-3.5 h-3.5 mr-1.5 text-slate-400 flex-shrink-0" }),
                        createTextVNode(" " + toDisplayString(formatTime(booking.booking_time)) + " - " + toDisplayString(formatTime(booking.scheduled_end_time)), 1)
                      ])
                    ]),
                    createBaseVNode("td", _hoisted_50, [
                      booking.total_minutes ? (openBlock(), createElementBlock("div", _hoisted_51, [
                        createVNode(unref(Zap), { class: "w-3.5 h-3.5 mr-1 text-blue-500" }),
                        createTextVNode(" " + toDisplayString(formatDuration(booking.total_minutes)), 1)
                      ])) : (openBlock(), createElementBlock("div", _hoisted_52, "--"))
                    ]),
                    createBaseVNode("td", _hoisted_53, [
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
          ])),
          filteredHistory.value && filteredHistory.value.length >= 10 ? (openBlock(), createElementBlock("div", _hoisted_54, [..._cache[12] || (_cache[12] = [
            createBaseVNode("button", { class: "px-8 py-3 text-xs font-bold text-slate-600 hover:bg-slate-50 rounded-xl transition-all border border-slate-200/80 active:scale-98 shadow-sm" }, " Load More History ", -1)
          ])])) : createCommentVNode("", true)
        ])
      ]);
    };
  }
});
const MyBookingsPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-60fb6703"]]);
export {
  MyBookingsPage as default
};
