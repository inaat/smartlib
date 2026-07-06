import { d as defineComponent, J as useApp, r as ref, c as computed, o as onMounted, H as onUnmounted, a as createElementBlock, b as createBaseVNode, f as createVNode, w as withCtx, g as resolveComponent, i as createTextVNode, u as unref, F as Fragment, j as renderList, l as createCommentVNode, n as normalizeClass, t as toDisplayString, C as useRouter, k as openBlock } from "./main-BV94XoeK.js";
import { u as useSwal } from "./useSwal-pQW_XkRe.js";
import { S as SeatExtensionModal } from "./SeatExtensionModal-D8SmcOA7.js";
import { C as Clock } from "./clock-BERatuZr.js";
import { A as Armchair } from "./armchair-oevKaUmI.js";
import { H as History } from "./history-D4w_5i1N.js";
import { P as Plus } from "./plus-32ROcMxt.js";
import { M as MapPin } from "./map-pin-CW-zEwb2.js";
import { M as Monitor } from "./monitor-BweJssGa.js";
import { P as PanelsTopLeft } from "./panels-top-left-DtWQRakP.js";
import { Z as Zap } from "./zap-BWrOejdU.js";
import { C as Calendar } from "./calendar-Ds3wHnE9.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
/* empty css               */
import "./x-C8j8JQlQ.js";
import "./createLucideIcon-CmaEOm5I.js";
import "./circle-alert-G71fn9_g.js";
import "./triangle-alert-m_nCFHGq.js";
import "./arrow-right-BDYEf8RJ.js";
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
const _hoisted_9 = {
  key: 0,
  class: "absolute top-0 right-0 px-3.5 py-1 bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-[9px] font-bold uppercase tracking-widest rounded-bl-xl shadow-sm border border-emerald-400/20"
};
const _hoisted_10 = { class: "flex flex-col lg:flex-row lg:items-center justify-between gap-6" };
const _hoisted_11 = { class: "flex items-start gap-4" };
const _hoisted_12 = { class: "space-y-1 min-w-0" };
const _hoisted_13 = { class: "flex items-center gap-2" };
const _hoisted_14 = { class: "font-bold text-slate-800 text-lg" };
const _hoisted_15 = { class: "text-slate-500 text-xs flex items-center font-semibold" };
const _hoisted_16 = { class: "flex flex-wrap gap-1.5 pt-2" };
const _hoisted_17 = {
  key: 0,
  class: "flex items-center text-[10px] bg-blue-50 text-blue-600 border border-blue-100/50 px-2.5 py-1 rounded-lg font-bold"
};
const _hoisted_18 = {
  key: 1,
  class: "flex items-center text-[10px] bg-yellow-50 text-yellow-700 border border-yellow-100/50 px-2.5 py-1 rounded-lg font-bold"
};
const _hoisted_19 = {
  key: 2,
  class: "flex items-center text-[10px] bg-green-50 text-green-700 border border-green-100/50 px-2.5 py-1 rounded-lg font-bold"
};
const _hoisted_20 = { class: "flex flex-col lg:items-end gap-4 border-t lg:border-t-0 pt-4 lg:pt-0 border-slate-50 flex-shrink-0" };
const _hoisted_21 = { class: "lg:text-right" };
const _hoisted_22 = { class: "flex flex-wrap gap-2.5" };
const _hoisted_23 = ["onClick"];
const _hoisted_24 = ["onClick"];
const _hoisted_25 = ["onClick"];
const _hoisted_26 = ["onClick"];
const _hoisted_27 = { class: "pt-6" };
const _hoisted_28 = { class: "flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6" };
const _hoisted_29 = { class: "text-sm font-bold text-slate-700 uppercase tracking-wider flex items-center px-1" };
const _hoisted_30 = { class: "flex items-center gap-1.5 bg-slate-100 p-1 rounded-xl w-fit" };
const _hoisted_31 = ["onClick"];
const _hoisted_32 = {
  key: 0,
  class: "bg-slate-50/30 rounded-2xl p-16 text-center border border-slate-100"
};
const _hoisted_33 = {
  key: 1,
  class: "overflow-x-auto bg-white rounded-2xl border border-slate-100 shadow-sm"
};
const _hoisted_34 = { class: "w-full text-left" };
const _hoisted_35 = { class: "divide-y divide-slate-50" };
const _hoisted_36 = { class: "px-6 py-4 whitespace-nowrap" };
const _hoisted_37 = { class: "flex items-center space-x-3" };
const _hoisted_38 = { class: "text-left" };
const _hoisted_39 = { class: "text-xs font-bold text-slate-800 leading-snug" };
const _hoisted_40 = { class: "text-[9px] text-slate-400 font-bold uppercase mt-0.5 leading-none" };
const _hoisted_41 = { class: "px-6 py-4 text-left whitespace-nowrap" };
const _hoisted_42 = { class: "text-xs font-bold text-slate-700 flex items-center" };
const _hoisted_43 = { class: "px-6 py-4 whitespace-nowrap" };
const _hoisted_44 = { class: "flex items-center text-xs font-bold text-slate-700" };
const _hoisted_45 = { class: "px-6 py-4 whitespace-nowrap" };
const _hoisted_46 = { class: "flex items-center text-xs font-semibold text-slate-500" };
const _hoisted_47 = { class: "px-6 py-4 text-center whitespace-nowrap" };
const _hoisted_48 = {
  key: 0,
  class: "flex items-center justify-center text-xs font-bold text-blue-600"
};
const _hoisted_49 = {
  key: 1,
  class: "text-xs text-slate-400"
};
const _hoisted_50 = { class: "px-6 py-4 text-right whitespace-nowrap" };
const _hoisted_51 = {
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
                class: "bg-white rounded-2xl p-5 border border-slate-100 hover:border-slate-200/80 shadow-sm hover:shadow-xl hover:shadow-slate-100/50 transition-all duration-350 group relative overflow-hidden text-left"
              }, [
                booking.status === "checked_in" ? (openBlock(), createElementBlock("div", _hoisted_9, " Active Now ")) : createCommentVNode("", true),
                createBaseVNode("div", _hoisted_10, [
                  createBaseVNode("div", _hoisted_11, [
                    createBaseVNode("div", {
                      class: normalizeClass([
                        "p-4 rounded-xl border flex-shrink-0 transition-all duration-300",
                        booking.status === "checked_in" ? "bg-emerald-50/60 border-emerald-100 text-emerald-600" : "bg-blue-50/60 border-blue-100 text-blue-600 group-hover:bg-gradient-to-br group-hover:from-blue-600 group-hover:to-cyan-500 group-hover:text-white group-hover:border-blue-500"
                      ])
                    }, [
                      createVNode(unref(Armchair), { class: "w-8 h-8" })
                    ], 2),
                    createBaseVNode("div", _hoisted_12, [
                      createBaseVNode("div", _hoisted_13, [
                        createBaseVNode("h3", _hoisted_14, "Seat " + toDisplayString(booking.seat?.seat_number), 1),
                        createBaseVNode("span", {
                          class: normalizeClass([
                            "px-2 py-0.5 rounded-md text-[9px] font-bold uppercase tracking-wide border",
                            booking.status === "checked_in" ? "bg-emerald-50 text-emerald-700 border-emerald-100" : "bg-blue-50 text-blue-700 border-blue-100"
                          ])
                        }, " #" + toDisplayString(booking.id), 3)
                      ]),
                      createBaseVNode("p", _hoisted_15, [
                        createVNode(unref(MapPin), { class: "w-4 h-4 mr-1 text-slate-400" }),
                        createTextVNode(" " + toDisplayString(booking.seat?.library?.name), 1)
                      ]),
                      createBaseVNode("div", _hoisted_16, [
                        booking.seat?.has_computer ? (openBlock(), createElementBlock("span", _hoisted_17, [
                          createVNode(unref(Monitor), { class: "w-3.5 h-3.5 mr-1" }),
                          _cache[6] || (_cache[6] = createTextVNode(" PC Included ", -1))
                        ])) : createCommentVNode("", true),
                        booking.seat?.near_window ? (openBlock(), createElementBlock("span", _hoisted_18, [
                          createVNode(unref(PanelsTopLeft), { class: "w-3.5 h-3.5 mr-1" }),
                          _cache[7] || (_cache[7] = createTextVNode(" Near Window ", -1))
                        ])) : createCommentVNode("", true),
                        booking.seat && booking.seat.socket_count > 0 ? (openBlock(), createElementBlock("span", _hoisted_19, [
                          createVNode(unref(Zap), { class: "w-3.5 h-3.5 mr-1" }),
                          createTextVNode(" " + toDisplayString(booking.seat.socket_count) + " Socket ", 1)
                        ])) : createCommentVNode("", true)
                      ])
                    ])
                  ]),
                  createBaseVNode("div", _hoisted_20, [
                    createBaseVNode("div", _hoisted_21, [
                      createBaseVNode("p", {
                        class: normalizeClass(["text-[9px] font-bold uppercase tracking-widest mb-1", isOverdue(booking) ? "text-red-550" : "text-slate-400"])
                      }, toDisplayString(getTimerLabel(booking)), 3),
                      createBaseVNode("p", {
                        class: normalizeClass(["text-3xl font-bold font-mono tracking-tight leading-none", isOverdue(booking) ? "text-red-550" : "text-slate-800"])
                      }, toDisplayString(getRemainingTime(booking)), 3)
                    ]),
                    createBaseVNode("div", _hoisted_22, [
                      booking.status === "booked" ? (openBlock(), createElementBlock("button", {
                        key: 0,
                        onClick: ($event) => handleCheckIn(booking.id),
                        class: "flex-1 lg:flex-none px-5 py-2 bg-blue-600 text-white rounded-xl text-xs font-bold shadow-md shadow-emerald-500/10 hover:opacity-95 active:scale-98 transition-all"
                      }, " Check In ", 8, _hoisted_23)) : createCommentVNode("", true),
                      booking.status === "booked" ? (openBlock(), createElementBlock("button", {
                        key: 1,
                        onClick: ($event) => handleCancel(booking.id),
                        class: "flex-1 lg:flex-none px-5 py-2 bg-white border border-red-200 text-red-500 rounded-xl text-xs font-bold hover:bg-red-50 active:scale-98 transition-all"
                      }, " Cancel ", 8, _hoisted_24)) : createCommentVNode("", true),
                      booking.status === "checked_in" ? (openBlock(), createElementBlock("button", {
                        key: 2,
                        onClick: ($event) => handleCheckOut(booking.id),
                        class: "flex-1 lg:flex-none px-5 py-2 bg-red-500 text-white rounded-xl text-xs font-bold shadow-md shadow-orange-500/10 hover:opacity-95 active:scale-98 transition-all whitespace-nowrap"
                      }, " Check Out ", 8, _hoisted_25)) : createCommentVNode("", true),
                      booking.status === "checked_in" ? (openBlock(), createElementBlock("button", {
                        key: 3,
                        onClick: ($event) => handleExtend(booking),
                        class: "flex-1 lg:flex-none px-5 py-2 bg-green-600 text-white rounded-xl text-xs font-bold shadow-md shadow-indigo-500/10 hover:opacity-95 active:scale-98 transition-all whitespace-nowrap"
                      }, " Extend Time ", 8, _hoisted_26)) : createCommentVNode("", true)
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
        createBaseVNode("div", _hoisted_27, [
          createBaseVNode("div", _hoisted_28, [
            createBaseVNode("h2", _hoisted_29, [
              createVNode(unref(History), { class: "w-4 h-4 mr-2 text-purple-600" }),
              _cache[8] || (_cache[8] = createTextVNode(" Booking History ", -1))
            ]),
            createBaseVNode("div", _hoisted_30, [
              (openBlock(), createElementBlock(Fragment, null, renderList(["all", "completed", "cancelled"], (filter) => {
                return createBaseVNode("button", {
                  key: filter,
                  onClick: ($event) => historyFilter.value = filter,
                  class: normalizeClass([
                    "px-4 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-wide transition-all",
                    historyFilter.value === filter ? "bg-white shadow-sm text-slate-800" : "text-slate-400 hover:text-slate-700"
                  ])
                }, toDisplayString(filter), 11, _hoisted_31);
              }), 64))
            ])
          ]),
          !filteredHistory.value || filteredHistory.value.length === 0 ? (openBlock(), createElementBlock("div", _hoisted_32, [
            createVNode(unref(Clock), { class: "w-12 h-12 text-slate-300 mx-auto mb-3" }),
            _cache[9] || (_cache[9] = createBaseVNode("p", { class: "text-xs text-slate-400 font-bold uppercase tracking-wider" }, "No past bookings found.", -1))
          ])) : (openBlock(), createElementBlock("div", _hoisted_33, [
            createBaseVNode("table", _hoisted_34, [
              _cache[10] || (_cache[10] = createBaseVNode("thead", null, [
                createBaseVNode("tr", { class: "bg-slate-50/50 border-b border-slate-100 text-[10px] uppercase font-bold tracking-wider text-slate-400" }, [
                  createBaseVNode("th", { class: "px-6 py-3.5" }, "Seat"),
                  createBaseVNode("th", { class: "px-6 py-3.5" }, "Library"),
                  createBaseVNode("th", { class: "px-6 py-3.5" }, "Date"),
                  createBaseVNode("th", { class: "px-6 py-3.5" }, "Scheduled Time"),
                  createBaseVNode("th", { class: "px-6 py-3.5 text-center" }, "Duration"),
                  createBaseVNode("th", { class: "px-6 py-3.5 text-right" }, "Status")
                ])
              ], -1)),
              createBaseVNode("tbody", _hoisted_35, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(filteredHistory.value, (booking) => {
                  return openBlock(), createElementBlock("tr", {
                    key: booking.id,
                    class: "hover:bg-slate-50/30 transition-colors group"
                  }, [
                    createBaseVNode("td", _hoisted_36, [
                      createBaseVNode("div", _hoisted_37, [
                        createBaseVNode("div", {
                          class: normalizeClass([
                            "w-9 h-9 rounded-xl border flex items-center justify-center font-bold text-xs transition-all duration-300",
                            booking.status === "checked_out" ? "bg-emerald-50 border-emerald-100 text-emerald-600" : booking.status === "cancelled" ? "bg-red-50 border-red-100 text-red-600" : "bg-slate-50 border-slate-100 text-slate-500"
                          ])
                        }, [
                          createVNode(unref(Armchair), { class: "w-4 h-4" })
                        ], 2),
                        createBaseVNode("div", _hoisted_38, [
                          createBaseVNode("div", _hoisted_39, "Seat " + toDisplayString(booking.seat?.seat_number), 1),
                          createBaseVNode("div", _hoisted_40, "ID #" + toDisplayString(booking.id), 1)
                        ])
                      ])
                    ]),
                    createBaseVNode("td", _hoisted_41, [
                      createBaseVNode("div", _hoisted_42, [
                        createVNode(unref(MapPin), { class: "w-3.5 h-3.5 mr-1 text-slate-400 flex-shrink-0" }),
                        createTextVNode(" " + toDisplayString(booking.seat?.library?.name || "N/A"), 1)
                      ])
                    ]),
                    createBaseVNode("td", _hoisted_43, [
                      createBaseVNode("div", _hoisted_44, [
                        createVNode(unref(Calendar), { class: "w-3.5 h-3.5 mr-1 text-slate-400 flex-shrink-0" }),
                        createTextVNode(" " + toDisplayString(formatDate(booking.booking_time)), 1)
                      ])
                    ]),
                    createBaseVNode("td", _hoisted_45, [
                      createBaseVNode("div", _hoisted_46, [
                        createVNode(unref(Clock), { class: "w-3.5 h-3.5 mr-1.5 text-slate-400 flex-shrink-0" }),
                        createTextVNode(" " + toDisplayString(formatTime(booking.booking_time)) + " - " + toDisplayString(formatTime(booking.scheduled_end_time)), 1)
                      ])
                    ]),
                    createBaseVNode("td", _hoisted_47, [
                      booking.total_minutes ? (openBlock(), createElementBlock("div", _hoisted_48, [
                        createVNode(unref(Zap), { class: "w-3.5 h-3.5 mr-1 text-blue-500" }),
                        createTextVNode(" " + toDisplayString(formatDuration(booking.total_minutes)), 1)
                      ])) : (openBlock(), createElementBlock("div", _hoisted_49, "--"))
                    ]),
                    createBaseVNode("td", _hoisted_50, [
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
          filteredHistory.value && filteredHistory.value.length >= 10 ? (openBlock(), createElementBlock("div", _hoisted_51, [..._cache[11] || (_cache[11] = [
            createBaseVNode("button", { class: "px-8 py-3 text-xs font-bold text-slate-600 hover:bg-slate-50 rounded-xl transition-all border border-slate-200/80 active:scale-98 shadow-sm" }, " Load More History ", -1)
          ])])) : createCommentVNode("", true)
        ])
      ]);
    };
  }
});
const MyBookingsPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-9cbebb44"]]);
export {
  MyBookingsPage as default
};
