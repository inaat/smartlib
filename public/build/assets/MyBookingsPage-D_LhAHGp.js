import { d as defineComponent, D as useApp, r as ref, E as computed, o as onMounted, C as onUnmounted, c as createElementBlock, b as createBaseVNode, m as createCommentVNode, f as createVNode, w as withCtx, g as resolveComponent, j as createTextVNode, u as unref, F as Fragment, h as renderList, s as withModifiers, t as toDisplayString, n as normalizeClass, A as useRouter, i as openBlock } from "./main-Dk2mUbjP.js";
import { u as useSwal } from "./useSwal-J4kFABxt.js";
import { C as Clock } from "./clock-DHHRCinm.js";
import { A as Armchair } from "./armchair-BFgkZ4D5.js";
import { H as History } from "./history-Daw3vwPa.js";
import { P as Plus } from "./plus-DLXboEx4.js";
import { M as MapPin } from "./map-pin-CGJFb8uL.js";
import { M as Monitor } from "./monitor-E_O9_Anu.js";
import { P as PanelsTopLeft } from "./panels-top-left-CTY1cFxw.js";
import { Z as Zap } from "./zap-DSIh5NSP.js";
import { C as Calendar } from "./calendar-e6msfKJ3.js";
/* empty css               */
import "./createLucideIcon-6n-23kmf.js";
const _hoisted_1 = { class: "space-y-8 pb-12" };
const _hoisted_2 = { class: "bg-white rounded-3xl p-8 shadow-sm border border-gray-100" };
const _hoisted_3 = { class: "flex items-center justify-between" };
const _hoisted_4 = { class: "space-y-6" };
const _hoisted_5 = { class: "flex items-center justify-between px-2" };
const _hoisted_6 = { class: "text-xl font-bold text-gray-800 flex items-center" };
const _hoisted_7 = {
  key: 0,
  class: "bg-white rounded-3xl p-16 text-center border border-dashed border-gray-200"
};
const _hoisted_8 = { class: "w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6" };
const _hoisted_9 = {
  key: 1,
  class: "grid grid-cols-1 gap-6"
};
const _hoisted_10 = {
  key: 0,
  class: "absolute top-0 right-0 px-4 py-1 bg-green-500 text-white text-[10px] font-black uppercase tracking-widest rounded-bl-xl shadow-sm"
};
const _hoisted_11 = { class: "flex flex-col lg:flex-row lg:items-center justify-between gap-8" };
const _hoisted_12 = { class: "flex items-start gap-6" };
const _hoisted_13 = { class: "space-y-1" };
const _hoisted_14 = { class: "flex items-center gap-2" };
const _hoisted_15 = { class: "font-black text-gray-900 text-2xl" };
const _hoisted_16 = { class: "text-gray-500 text-lg flex items-center font-medium" };
const _hoisted_17 = { class: "flex flex-wrap gap-2 mt-4" };
const _hoisted_18 = {
  key: 0,
  class: "flex items-center text-xs bg-blue-50 text-blue-600 px-3 py-1.5 rounded-xl font-bold"
};
const _hoisted_19 = {
  key: 1,
  class: "flex items-center text-xs bg-yellow-50 text-yellow-700 px-3 py-1.5 rounded-xl font-bold"
};
const _hoisted_20 = {
  key: 2,
  class: "flex items-center text-xs bg-green-50 text-green-700 px-3 py-1.5 rounded-xl font-bold"
};
const _hoisted_21 = { class: "flex flex-col lg:items-end gap-6 border-t lg:border-t-0 pt-6 lg:pt-0 border-gray-50" };
const _hoisted_22 = { class: "lg:text-right" };
const _hoisted_23 = { class: "flex flex-wrap gap-3" };
const _hoisted_24 = ["onClick"];
const _hoisted_25 = ["onClick"];
const _hoisted_26 = ["onClick"];
const _hoisted_27 = ["onClick"];
const _hoisted_28 = { class: "bg-white rounded-3xl p-8 max-w-sm w-full shadow-2xl transform transition-all" };
const _hoisted_29 = { class: "flex items-center justify-between mb-6" };
const _hoisted_30 = { class: "grid grid-cols-3 gap-3 mb-6" };
const _hoisted_31 = ["onClick"];
const _hoisted_32 = {
  key: 0,
  class: "mb-6 p-4 bg-indigo-50 rounded-2xl border border-indigo-100"
};
const _hoisted_33 = { class: "text-lg font-black text-indigo-800" };
const _hoisted_34 = { class: "flex gap-3" };
const _hoisted_35 = ["disabled"];
const _hoisted_36 = { class: "pt-8" };
const _hoisted_37 = { class: "flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8" };
const _hoisted_38 = { class: "text-xl font-bold text-gray-800 flex items-center px-2" };
const _hoisted_39 = { class: "flex items-center gap-2 bg-gray-100 p-1 rounded-2xl" };
const _hoisted_40 = ["onClick"];
const _hoisted_41 = {
  key: 0,
  class: "bg-white rounded-3xl p-16 text-center border border-gray-100"
};
const _hoisted_42 = {
  key: 1,
  class: "grid grid-cols-1 md:grid-cols-2 gap-6"
};
const _hoisted_43 = { class: "flex items-start justify-between mb-4" };
const _hoisted_44 = { class: "flex items-center gap-3" };
const _hoisted_45 = { class: "font-bold text-gray-800" };
const _hoisted_46 = { class: "text-[10px] text-gray-400 font-black uppercase" };
const _hoisted_47 = { class: "space-y-3 pt-3 border-t border-gray-50 text-sm text-gray-600" };
const _hoisted_48 = { class: "flex items-center" };
const _hoisted_49 = { class: "font-medium" };
const _hoisted_50 = { class: "flex items-center" };
const _hoisted_51 = { class: "font-medium" };
const _hoisted_52 = { class: "flex items-center" };
const _hoisted_53 = { class: "font-medium" };
const _hoisted_54 = {
  key: 0,
  class: "flex items-center text-blue-600 font-bold"
};
const _hoisted_55 = {
  key: 2,
  class: "mt-12 text-center"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "MyBookingsPage",
  setup(__props) {
    const router = useRouter();
    const { bookings, loadBookings, checkOutSeat, cancelBooking, extendSeatBooking } = useApp();
    const { showConfirm, showSuccess, showError } = useSwal();
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
      const timeStr = booking.status === "checked_in" ? booking.scheduled_end_time || booking.endTime : booking.booking_time || booking.startTime;
      if (!timeStr) return null;
      try {
        const normalized = timeStr.includes("T") ? timeStr : timeStr.replace(" ", "T");
        const d = new Date(normalized);
        return isNaN(d.getTime()) ? null : d;
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
      return isOverdue(booking) ? "Session Started" : "Starts In";
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
        return "--:--:--";
      }
      const h = Math.floor(diff / 36e5);
      const m = Math.floor(diff % 36e5 / 6e4);
      const s = Math.floor(diff % 6e4 / 1e3);
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
    const extendOptions = [
      { label: "5 min", value: 5 },
      { label: "10 min", value: 10 },
      { label: "15 min", value: 15 },
      { label: "30 min", value: 30 },
      { label: "45 min", value: 45 },
      { label: "1 hour", value: 60 }
    ];
    const extendModal = ref({
      show: false,
      booking: null,
      selectedMinutes: 30,
      loading: false
    });
    const getNewEndTime = (booking, addMinutes) => {
      const endStr = booking.scheduled_end_time || booking.endTime;
      if (!endStr) return "--";
      const end = new Date(endStr);
      end.setMinutes(end.getMinutes() + addMinutes);
      return end.toLocaleTimeString("en-PK", { hour: "2-digit", minute: "2-digit", hour12: true });
    };
    const handleExtend = (booking) => {
      extendModal.value = { show: true, booking, selectedMinutes: 30, loading: false };
    };
    const confirmExtend = async () => {
      const { booking, selectedMinutes } = extendModal.value;
      extendModal.value.loading = true;
      try {
        const success = await extendSeatBooking(booking.id, selectedMinutes);
        if (success) {
          extendModal.value.show = false;
          await loadBookings();
          showSuccess("Extended!", `Your session has been extended by ${selectedMinutes < 60 ? selectedMinutes + " minutes" : "1 hour"}.`);
        }
      } catch (error) {
        showError("Extension Failed", error.response?.data?.message || "Could not extend session. The seat might be booked by someone else or library is closing.");
      } finally {
        extendModal.value.loading = false;
      }
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
          createBaseVNode("div", _hoisted_3, [
            _cache[4] || (_cache[4] = createBaseVNode("div", null, [
              createBaseVNode("h1", { class: "text-3xl font-bold text-gray-800" }, "My Bookings"),
              createBaseVNode("p", { class: "text-gray-500 mt-1" }, "Manage your active and past seat reservations")
            ], -1)),
            createVNode(_component_router_link, {
              to: "/student/libraries",
              class: "inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-2xl font-bold hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-200"
            }, {
              default: withCtx(() => [
                createVNode(unref(Plus), { class: "w-5 h-5 mr-2" }),
                _cache[3] || (_cache[3] = createTextVNode(" Book New Seat ", -1))
              ]),
              _: 1
            })
          ])
        ]),
        createBaseVNode("div", _hoisted_4, [
          createBaseVNode("div", _hoisted_5, [
            createBaseVNode("h2", _hoisted_6, [
              createVNode(unref(Clock), { class: "w-5 h-5 mr-2 text-blue-500" }),
              _cache[5] || (_cache[5] = createTextVNode(" Current & Upcoming ", -1))
            ])
          ]),
          activeBookings.value.length === 0 ? (openBlock(), createElementBlock("div", _hoisted_7, [
            createBaseVNode("div", _hoisted_8, [
              createVNode(unref(Armchair), { class: "w-10 h-10 text-gray-200" })
            ]),
            _cache[7] || (_cache[7] = createBaseVNode("h3", { class: "text-xl font-bold text-gray-800 mb-2" }, "No Active Bookings", -1)),
            _cache[8] || (_cache[8] = createBaseVNode("p", { class: "text-gray-500 max-w-xs mx-auto mb-8" }, "You don't have any active seat reservations at the moment. Find a library to book your spot!", -1)),
            createVNode(_component_router_link, {
              to: "/student/libraries",
              class: "inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-xl font-bold hover:bg-black transition-all"
            }, {
              default: withCtx(() => [..._cache[6] || (_cache[6] = [
                createTextVNode(" Explore Libraries ", -1)
              ])]),
              _: 1
            })
          ])) : (openBlock(), createElementBlock("div", _hoisted_9, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(activeBookings.value, (booking) => {
              return openBlock(), createElementBlock("div", {
                key: booking.id,
                class: "bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:border-blue-100 transition-all group relative overflow-hidden"
              }, [
                booking.status === "checked_in" ? (openBlock(), createElementBlock("div", _hoisted_10, " Active Now ")) : createCommentVNode("", true),
                createBaseVNode("div", _hoisted_11, [
                  createBaseVNode("div", _hoisted_12, [
                    createBaseVNode("div", {
                      class: normalizeClass([
                        "p-5 rounded-2xl transition-all duration-300",
                        booking.status === "checked_in" ? "bg-green-100 text-green-600" : "bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white"
                      ])
                    }, [
                      createVNode(unref(Armchair), { class: "w-10 h-10" })
                    ], 2),
                    createBaseVNode("div", _hoisted_13, [
                      createBaseVNode("div", _hoisted_14, [
                        createBaseVNode("h3", _hoisted_15, "Seat " + toDisplayString(booking.seat?.seat_number), 1),
                        createBaseVNode("span", {
                          class: normalizeClass([
                            "px-2 py-0.5 rounded-full text-[10px] font-black uppercase tracking-tighter",
                            booking.status === "checked_in" ? "bg-green-100 text-green-700" : "bg-blue-100 text-blue-700"
                          ])
                        }, " #" + toDisplayString(booking.id), 3)
                      ]),
                      createBaseVNode("p", _hoisted_16, [
                        createVNode(unref(MapPin), { class: "w-5 h-5 mr-1.5 text-red-400" }),
                        createTextVNode(" " + toDisplayString(booking.seat?.library?.name), 1)
                      ]),
                      createBaseVNode("div", _hoisted_17, [
                        booking.seat?.has_computer ? (openBlock(), createElementBlock("span", _hoisted_18, [
                          createVNode(unref(Monitor), { class: "w-4 h-4 mr-1.5" }),
                          _cache[9] || (_cache[9] = createTextVNode(" Computer Available ", -1))
                        ])) : createCommentVNode("", true),
                        booking.seat?.near_window ? (openBlock(), createElementBlock("span", _hoisted_19, [
                          createVNode(unref(PanelsTopLeft), { class: "w-4 h-4 mr-1.5" }),
                          _cache[10] || (_cache[10] = createTextVNode(" Near Window ", -1))
                        ])) : createCommentVNode("", true),
                        booking.seat?.socket_count > 0 ? (openBlock(), createElementBlock("span", _hoisted_20, [
                          createVNode(unref(Zap), { class: "w-4 h-4 mr-1.5" }),
                          createTextVNode(" " + toDisplayString(booking.seat.socket_count) + " Power Outlets ", 1)
                        ])) : createCommentVNode("", true)
                      ])
                    ])
                  ]),
                  createBaseVNode("div", _hoisted_21, [
                    createBaseVNode("div", _hoisted_22, [
                      createBaseVNode("p", {
                        class: normalizeClass(["text-xs font-black uppercase tracking-widest mb-1", isOverdue(booking) ? "text-red-400" : "text-gray-400"])
                      }, toDisplayString(getTimerLabel(booking)), 3),
                      createBaseVNode("p", {
                        class: normalizeClass(["text-4xl font-black font-mono tracking-tighter", isOverdue(booking) ? "text-red-500" : "text-gray-800"])
                      }, toDisplayString(getRemainingTime(booking)), 3)
                    ]),
                    createBaseVNode("div", _hoisted_23, [
                      booking.status === "booked" ? (openBlock(), createElementBlock("button", {
                        key: 0,
                        onClick: ($event) => handleCheckIn(booking.id),
                        class: "flex-1 lg:flex-none px-8 py-3 bg-green-600 text-white rounded-2xl font-bold hover:bg-green-700 transition-all shadow-lg shadow-green-100 active:scale-95"
                      }, " Check In ", 8, _hoisted_24)) : createCommentVNode("", true),
                      booking.status === "booked" ? (openBlock(), createElementBlock("button", {
                        key: 1,
                        onClick: ($event) => handleCancel(booking.id),
                        class: "flex-1 lg:flex-none px-8 py-3 bg-white border-2 border-red-100 text-red-600 rounded-2xl font-bold hover:bg-red-50 transition-all active:scale-95"
                      }, " Cancel ", 8, _hoisted_25)) : createCommentVNode("", true),
                      booking.status === "checked_in" ? (openBlock(), createElementBlock("button", {
                        key: 2,
                        onClick: ($event) => handleCheckOut(booking.id),
                        class: "flex-1 lg:flex-none px-8 py-3 bg-orange-600 text-white rounded-2xl font-bold hover:bg-orange-700 transition-all shadow-lg shadow-orange-100 active:scale-95"
                      }, " Check Out ", 8, _hoisted_26)) : createCommentVNode("", true),
                      booking.status === "checked_in" ? (openBlock(), createElementBlock("button", {
                        key: 3,
                        onClick: ($event) => handleExtend(booking),
                        class: "flex-1 lg:flex-none px-8 py-3 bg-indigo-600 text-white rounded-2xl font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100 active:scale-95 whitespace-nowrap"
                      }, " Extend Time ", 8, _hoisted_27)) : createCommentVNode("", true)
                    ])
                  ])
                ])
              ]);
            }), 128))
          ]))
        ]),
        extendModal.value.show ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm",
          onClick: _cache[2] || (_cache[2] = withModifiers(($event) => extendModal.value.show = false, ["self"]))
        }, [
          createBaseVNode("div", _hoisted_28, [
            createBaseVNode("div", _hoisted_29, [
              _cache[12] || (_cache[12] = createBaseVNode("div", null, [
                createBaseVNode("h3", { class: "text-xl font-black text-gray-900" }, "Extend Session"),
                createBaseVNode("p", { class: "text-sm text-gray-500 mt-1" }, "How long would you like to extend?")
              ], -1)),
              createBaseVNode("button", {
                onClick: _cache[0] || (_cache[0] = ($event) => extendModal.value.show = false),
                class: "p-2 rounded-xl hover:bg-gray-100 text-gray-400 transition-colors"
              }, [..._cache[11] || (_cache[11] = [
                createBaseVNode("svg", {
                  class: "w-5 h-5",
                  fill: "none",
                  stroke: "currentColor",
                  viewBox: "0 0 24 24"
                }, [
                  createBaseVNode("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    "stroke-width": "2",
                    d: "M6 18L18 6M6 6l12 12"
                  })
                ], -1)
              ])])
            ]),
            createBaseVNode("div", _hoisted_30, [
              (openBlock(), createElementBlock(Fragment, null, renderList(extendOptions, (opt) => {
                return createBaseVNode("button", {
                  key: opt.value,
                  onClick: ($event) => extendModal.value.selectedMinutes = opt.value,
                  class: normalizeClass([
                    "py-3 rounded-2xl font-bold text-sm transition-all border-2",
                    extendModal.value.selectedMinutes === opt.value ? "bg-indigo-600 text-white border-indigo-600 shadow-lg shadow-indigo-100 scale-105" : "bg-gray-50 text-gray-700 border-gray-100 hover:border-indigo-200 hover:bg-indigo-50"
                  ])
                }, toDisplayString(opt.label), 11, _hoisted_31);
              }), 64))
            ]),
            extendModal.value.booking ? (openBlock(), createElementBlock("div", _hoisted_32, [
              _cache[13] || (_cache[13] = createBaseVNode("p", { class: "text-xs text-indigo-500 font-black uppercase tracking-widest mb-1" }, "New Session End", -1)),
              createBaseVNode("p", _hoisted_33, toDisplayString(getNewEndTime(extendModal.value.booking, extendModal.value.selectedMinutes)), 1)
            ])) : createCommentVNode("", true),
            createBaseVNode("div", _hoisted_34, [
              createBaseVNode("button", {
                onClick: _cache[1] || (_cache[1] = ($event) => extendModal.value.show = false),
                class: "flex-1 py-3 rounded-2xl font-bold text-gray-600 bg-gray-100 hover:bg-gray-200 transition-all"
              }, " Cancel "),
              createBaseVNode("button", {
                onClick: confirmExtend,
                disabled: extendModal.value.loading,
                class: "flex-1 py-3 rounded-2xl font-bold text-white bg-indigo-600 hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100 disabled:opacity-60 disabled:cursor-not-allowed"
              }, toDisplayString(extendModal.value.loading ? "Extending..." : "Confirm"), 9, _hoisted_35)
            ])
          ])
        ])) : createCommentVNode("", true),
        createBaseVNode("div", _hoisted_36, [
          createBaseVNode("div", _hoisted_37, [
            createBaseVNode("h2", _hoisted_38, [
              createVNode(unref(History), { class: "w-5 h-5 mr-2 text-purple-500" }),
              _cache[14] || (_cache[14] = createTextVNode(" Booking History ", -1))
            ]),
            createBaseVNode("div", _hoisted_39, [
              (openBlock(), createElementBlock(Fragment, null, renderList(["all", "completed", "cancelled"], (filter) => {
                return createBaseVNode("button", {
                  key: filter,
                  onClick: ($event) => historyFilter.value = filter,
                  class: normalizeClass([
                    "px-6 py-2 rounded-xl text-xs font-bold capitalize transition-all",
                    historyFilter.value === filter ? "bg-white shadow-sm text-gray-900" : "text-gray-500 hover:text-gray-700"
                  ])
                }, toDisplayString(filter), 11, _hoisted_40);
              }), 64))
            ])
          ]),
          !filteredHistory.value || filteredHistory.value.length === 0 ? (openBlock(), createElementBlock("div", _hoisted_41, [
            createVNode(unref(Clock), { class: "w-16 h-16 text-gray-200 mx-auto mb-4" }),
            _cache[15] || (_cache[15] = createBaseVNode("p", { class: "text-gray-500 font-medium" }, "No past bookings found.", -1))
          ])) : (openBlock(), createElementBlock("div", _hoisted_42, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(filteredHistory.value, (booking) => {
              return openBlock(), createElementBlock("div", {
                key: booking.id,
                class: "bg-white rounded-3xl p-6 shadow-sm border border-gray-50 hover:shadow-md transition-all group"
              }, [
                createBaseVNode("div", _hoisted_43, [
                  createBaseVNode("div", _hoisted_44, [
                    createBaseVNode("div", {
                      class: normalizeClass([
                        "p-3 rounded-xl",
                        booking.status === "checked_out" ? "bg-green-50 text-green-600" : booking.status === "cancelled" ? "bg-red-50 text-red-600" : "bg-gray-50 text-gray-600"
                      ])
                    }, [
                      createVNode(unref(Armchair), { class: "w-6 h-6" })
                    ], 2),
                    createBaseVNode("div", null, [
                      createBaseVNode("h3", _hoisted_45, "Seat " + toDisplayString(booking.seat?.seat_number), 1),
                      createBaseVNode("p", _hoisted_46, "ID #" + toDisplayString(booking.id), 1)
                    ])
                  ]),
                  createBaseVNode("span", {
                    class: normalizeClass([
                      "px-2.5 py-1 rounded-lg text-[10px] font-black uppercase tracking-wider",
                      booking.status === "checked_out" ? "bg-green-100 text-green-700" : booking.status === "cancelled" ? "bg-red-100 text-red-700" : "bg-gray-100 text-gray-700"
                    ])
                  }, toDisplayString(booking.status.replace("_", " ")), 3)
                ]),
                createBaseVNode("div", _hoisted_47, [
                  createBaseVNode("div", _hoisted_48, [
                    createVNode(unref(MapPin), { class: "w-4 h-4 mr-2.5 text-gray-400" }),
                    createBaseVNode("span", _hoisted_49, toDisplayString(booking.seat?.library?.name), 1)
                  ]),
                  createBaseVNode("div", _hoisted_50, [
                    createVNode(unref(Calendar), { class: "w-4 h-4 mr-2.5 text-gray-400" }),
                    createBaseVNode("span", _hoisted_51, toDisplayString(formatDate(booking.booking_time)), 1)
                  ]),
                  createBaseVNode("div", _hoisted_52, [
                    createVNode(unref(Clock), { class: "w-4 h-4 mr-2.5 text-gray-400" }),
                    createBaseVNode("span", _hoisted_53, toDisplayString(formatTime(booking.booking_time)) + " - " + toDisplayString(formatTime(booking.scheduled_end_time)), 1)
                  ]),
                  booking.total_minutes ? (openBlock(), createElementBlock("div", _hoisted_54, [
                    createVNode(unref(Zap), { class: "w-4 h-4 mr-2.5" }),
                    createTextVNode(" Duration: " + toDisplayString(formatDuration(booking.total_minutes)), 1)
                  ])) : createCommentVNode("", true)
                ])
              ]);
            }), 128))
          ])),
          filteredHistory.value && filteredHistory.value.length >= 10 ? (openBlock(), createElementBlock("div", _hoisted_55, [..._cache[16] || (_cache[16] = [
            createBaseVNode("button", { class: "px-12 py-4 text-sm font-black text-gray-700 hover:bg-gray-50 rounded-2xl transition-all border-2 border-gray-100" }, " Load More History ", -1)
          ])])) : createCommentVNode("", true)
        ])
      ]);
    };
  }
});
export {
  _sfc_main as default
};
