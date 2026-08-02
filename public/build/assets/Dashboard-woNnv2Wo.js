import { d as defineComponent, x as useAuth, c as computed, r as ref, o as onMounted, H as onUnmounted, a as createElementBlock, b as createBaseVNode, t as toDisplayString, u as unref, j as createCommentVNode, f as createVNode, i as createTextVNode, w as withCtx, g as resolveComponent, F as Fragment, k as renderList, e as createStaticVNode, q as normalizeStyle, O as librarianAPI, n as normalizeClass, l as openBlock } from "./main-BGbL_8Ba.js";
import { C as Calendar } from "./calendar-DQ765muz.js";
import { U as UserCheck } from "./user-check-CLXiS-e-.js";
import { C as Clock } from "./clock-Cir2UmjW.js";
import { M as MessageSquare } from "./message-square-B-XlPlTp.js";
import { T as TriangleAlert } from "./triangle-alert-4H5SUbvt.js";
import { S as ShieldAlert } from "./shield-alert-DwdheLh4.js";
import { B as BookOpen } from "./book-open-yrTzE3s9.js";
import { E as EllipsisVertical } from "./ellipsis-vertical-BMONDrHo.js";
import { M as MapPin } from "./map-pin-BwNQ8wyg.js";
import { P as Printer } from "./printer-BowoWZ1p.js";
import { f as format } from "./format-CerZa7QB.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
/* empty css               */
import "./createLucideIcon-v8VVJu1z.js";
import "./en-US-CtEcOBul.js";
const _hoisted_1 = { class: "p-6 space-y-6 font-outfit" };
const _hoisted_2 = { class: "bg-gradient-to-r from-emerald-700 via-emerald-800 to-teal-900 rounded-2xl text-white px-6 py-5 shadow-sm relative overflow-hidden" };
const _hoisted_3 = { class: "relative z-10 flex items-center justify-between" };
const _hoisted_4 = { class: "text-left" };
const _hoisted_5 = { class: "text-2xl font-bold mt-2 mb-1 tracking-tight" };
const _hoisted_6 = { class: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative" };
const _hoisted_7 = {
  key: 0,
  class: "absolute inset-0 bg-white bg-opacity-10 backdrop-blur-[1px] flex items-center justify-center z-10 rounded-xl"
};
const _hoisted_8 = { class: "bg-white rounded-xl shadow-sm border border-gray-100 p-5 flex flex-col space-y-2 hover:shadow-md transition-shadow" };
const _hoisted_9 = { class: "flex items-center justify-between" };
const _hoisted_10 = { class: "flex items-center space-x-2" };
const _hoisted_11 = { class: "p-2 bg-blue-50/60 rounded-lg text-blue-600" };
const _hoisted_12 = { class: "text-3xl font-bold text-slate-700 text-left tracking-tight" };
const _hoisted_13 = { class: "bg-white rounded-xl shadow-sm border border-gray-100 p-5 flex flex-col space-y-2 hover:shadow-md transition-shadow" };
const _hoisted_14 = { class: "flex items-center justify-between" };
const _hoisted_15 = { class: "flex items-center space-x-2" };
const _hoisted_16 = { class: "p-2 bg-emerald-50/60 rounded-lg text-emerald-600" };
const _hoisted_17 = { class: "text-3xl font-bold text-slate-700 text-left tracking-tight" };
const _hoisted_18 = { class: "text-[10px] text-slate-400 font-medium text-left uppercase" };
const _hoisted_19 = { class: "bg-white rounded-xl shadow-sm border border-gray-100 p-5 flex flex-col space-y-2 hover:shadow-md transition-shadow" };
const _hoisted_20 = { class: "flex items-center justify-between" };
const _hoisted_21 = { class: "flex items-center space-x-2" };
const _hoisted_22 = { class: "p-2 bg-orange-50/60 rounded-lg text-orange-600" };
const _hoisted_23 = { class: "text-3xl font-bold text-slate-700 text-left tracking-tight" };
const _hoisted_24 = { class: "flex items-center justify-between" };
const _hoisted_25 = { class: "flex items-center space-x-2" };
const _hoisted_26 = { class: "p-2 bg-rose-50/60 rounded-lg text-rose-600 group-hover:scale-105 transition-transform" };
const _hoisted_27 = {
  key: 0,
  class: "flex h-2 w-2 relative"
};
const _hoisted_28 = {
  key: 1,
  class: "text-xs font-semibold bg-slate-50 text-slate-500 px-2 py-0.5 rounded-full"
};
const _hoisted_29 = { class: "text-3xl font-bold text-slate-700 text-left tracking-tight" };
const _hoisted_30 = { class: "grid grid-cols-1 lg:grid-cols-3 gap-6" };
const _hoisted_31 = { class: "lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-100 relative" };
const _hoisted_32 = {
  key: 0,
  class: "absolute inset-0 bg-white bg-opacity-50 flex items-center justify-center z-10 rounded-xl"
};
const _hoisted_33 = { class: "p-6 border-b border-gray-100" };
const _hoisted_34 = { class: "flex items-center justify-between" };
const _hoisted_35 = { class: "p-6" };
const _hoisted_36 = {
  key: 0,
  class: "text-center py-8 text-slate-400 text-sm"
};
const _hoisted_37 = { class: "space-y-3" };
const _hoisted_38 = { class: "flex items-center space-x-3.5" };
const _hoisted_39 = { class: "w-10 h-10 rounded-xl overflow-hidden flex-shrink-0 flex items-center justify-center shadow-sm" };
const _hoisted_40 = ["src"];
const _hoisted_41 = {
  key: 1,
  class: "w-full h-full flex items-center justify-center bg-emerald-50 border border-emerald-600 rounded-xl text-emerald-600 font-bold text-sm"
};
const _hoisted_42 = { class: "text-left" };
const _hoisted_43 = { class: "font-bold text-slate-700 text-sm" };
const _hoisted_44 = { class: "text-[11px] text-slate-500 mt-0.5 font-semibold" };
const _hoisted_45 = { class: "flex items-center space-x-3" };
const _hoisted_46 = { class: "p-1.5 hover:bg-slate-200/60 rounded-lg transition-colors text-slate-400 hover:text-slate-600" };
const _hoisted_47 = { class: "space-y-6" };
const _hoisted_48 = { class: "bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden text-left" };
const _hoisted_49 = { class: "p-6 space-y-3.5" };
const _hoisted_50 = { class: "text-[11px] text-rose-700 mt-0.5 font-medium leading-relaxed" };
const _hoisted_51 = { class: "text-[11px] text-amber-700 mt-0.5 font-medium leading-relaxed" };
const _hoisted_52 = { class: "text-[11px] text-purple-700 mt-0.5 font-medium leading-relaxed" };
const _hoisted_53 = { class: "bg-white rounded-xl shadow-sm border border-gray-100" };
const _hoisted_54 = { class: "p-6" };
const _hoisted_55 = { class: "relative pt-1 text-left" };
const _hoisted_56 = { class: "flex mb-2 items-center justify-between text-xs font-bold" };
const _hoisted_57 = { class: "text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100 font-semibold" };
const _hoisted_58 = { class: "text-right text-slate-500 font-semibold" };
const _hoisted_59 = { class: "overflow-hidden h-3 mb-4 text-xs flex rounded-full bg-slate-100" };
const _hoisted_60 = { class: "bg-white rounded-xl shadow-sm border border-gray-100 relative text-left" };
const _hoisted_61 = {
  key: 0,
  class: "absolute inset-0 bg-white bg-opacity-50 flex items-center justify-center z-10 rounded-xl"
};
const _hoisted_62 = { class: "p-6" };
const _hoisted_63 = { class: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4" };
const _hoisted_64 = { class: "flex items-center justify-between mb-3" };
const _hoisted_65 = { class: "flex items-center justify-between mb-3" };
const _hoisted_66 = { class: "flex items-center justify-between mb-3" };
const _hoisted_67 = { class: "flex items-center justify-between mb-3" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Dashboard",
  setup(__props) {
    const { user } = useAuth();
    const greeting = computed(() => {
      const hour = (/* @__PURE__ */ new Date()).getHours();
      if (hour < 12) {
        return "Good morning";
      } else if (hour < 17) {
        return "Good afternoon";
      } else if (hour < 21) {
        return "Good evening";
      } else {
        return "Welcome back";
      }
    });
    const loading = ref(true);
    const stats = ref({
      todayBookings: 0,
      activeStudents: 0,
      pendingCheckIns: 0,
      overdueCheckIns: 0,
      availableSeats: 0,
      totalSeats: 0,
      totalBooks: 0,
      totalEvents: 0,
      maintenanceSeats: 0,
      pending_tickets: 0,
      pending_overrides: 0,
      overstay_count: 0
    });
    const recentBookings = ref([]);
    const upcomingEvents = ref([]);
    const occupancyRate = computed(() => {
      if (!stats.value.totalSeats) return 0;
      return Math.round(stats.value.activeStudents / stats.value.totalSeats * 100);
    });
    const fetchDashboardData = async (isSilent = false) => {
      if (!isSilent) loading.value = true;
      try {
        const data = await librarianAPI.getDashboard();
        stats.value = {
          todayBookings: data.stats.today_bookings || 0,
          activeStudents: data.stats.active_bookings || 0,
          pendingCheckIns: data.stats.pending_bookings || 0,
          overdueCheckIns: data.stats.overdue_bookings || 0,
          availableSeats: data.stats.available_seats || 0,
          totalSeats: data.stats.total_seats || 0,
          totalBooks: data.stats.total_books || 0,
          totalEvents: data.stats.total_events || 0,
          maintenanceSeats: data.stats.maintenance_seats || 0,
          pending_tickets: data.stats.pending_tickets || 0,
          pending_overrides: data.stats.pending_overrides || 0,
          overstay_count: data.stats.overstay_count || 0
        };
        recentBookings.value = (data.recentBookings || []).map((b) => ({
          id: b.id,
          studentName: b.user?.name || "Unknown",
          profilePicture: b.user?.profile_picture,
          seatNumber: b.seat?.seat_number || "N/A",
          time: `${formatTime(b.booking_time)} - ${formatTime(b.scheduled_end_time)}`,
          status: b.status === "checked_in" ? "active" : b.status === "booked" ? "pending" : b.status
        }));
        upcomingEvents.value = (data.upcomingEvents || []).map((e) => {
          const date = new Date(e.start_time);
          const isToday = (/* @__PURE__ */ new Date()).toDateString() === date.toDateString();
          const timeStr = format(date, "hh:mm a");
          return {
            id: e.id,
            time: isToday ? timeStr : `${format(date, "MMM d")} • ${timeStr}`,
            title: e.title,
            description: e.description || e.location || "No details provided",
            joinedCount: e.joined_count,
            icon: BookOpen,
            color: "border-l-emerald-500"
          };
        });
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      } finally {
        if (!isSilent) loading.value = false;
      }
    };
    const formatTime = (dateString) => {
      if (!dateString) return "N/A";
      return format(new Date(dateString), "hh:mm a");
    };
    const getProfilePictureUrl = (path) => {
      if (!path) return "";
      if (path.startsWith("http")) return path;
      return `/storage/${path}`;
    };
    let pollDashboardTimer = null;
    onMounted(() => {
      fetchDashboardData();
      pollDashboardTimer = setInterval(() => {
        fetchDashboardData(true);
      }, 5e3);
    });
    onUnmounted(() => {
      if (pollDashboardTimer) clearInterval(pollDashboardTimer);
    });
    return (_ctx, _cache) => {
      const _component_router_link = resolveComponent("router-link");
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          _cache[6] || (_cache[6] = createBaseVNode("div", { class: "absolute top-0 right-0 w-80 h-80 bg-white opacity-[0.03] rounded-full -mr-32 -mt-32" }, null, -1)),
          _cache[7] || (_cache[7] = createBaseVNode("div", { class: "absolute bottom-0 left-0 w-64 h-64 bg-white opacity-[0.03] rounded-full -ml-24 -mb-24" }, null, -1)),
          createBaseVNode("div", _hoisted_3, [
            createBaseVNode("div", _hoisted_4, [
              _cache[4] || (_cache[4] = createBaseVNode("span", { class: "text-[10px] font-semibold tracking-wider text-emerald-300 uppercase bg-white/10 px-2.5 py-0.5 rounded-full" }, "Librarian Workspace", -1)),
              createBaseVNode("h1", _hoisted_5, toDisplayString(greeting.value) + ", " + toDisplayString(unref(user)?.name) + "! 👋", 1),
              _cache[5] || (_cache[5] = createBaseVNode("p", { class: "text-emerald-100/90 text-xs font-normal" }, "Space occupancy, seat reservations, and catalog overview today.", -1))
            ])
          ])
        ]),
        createBaseVNode("div", _hoisted_6, [
          loading.value ? (openBlock(), createElementBlock("div", _hoisted_7, [..._cache[8] || (_cache[8] = [
            createBaseVNode("div", { class: "animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600" }, null, -1)
          ])])) : createCommentVNode("", true),
          createBaseVNode("div", _hoisted_8, [
            createBaseVNode("div", _hoisted_9, [
              createBaseVNode("div", _hoisted_10, [
                createBaseVNode("div", _hoisted_11, [
                  createVNode(unref(Calendar), { class: "w-5 h-5" })
                ]),
                _cache[9] || (_cache[9] = createBaseVNode("span", { class: "text-xs font-bold text-slate-400 uppercase tracking-wider" }, "Bookings Today", -1))
              ]),
              _cache[10] || (_cache[10] = createBaseVNode("span", { class: "text-xs font-semibold bg-blue-55/60 text-blue-700 px-2 py-0.5 rounded-full" }, "Today", -1))
            ]),
            createBaseVNode("div", _hoisted_12, toDisplayString(stats.value.todayBookings), 1),
            _cache[11] || (_cache[11] = createBaseVNode("div", { class: "text-[10px] text-slate-400 font-medium text-left uppercase" }, "Total seat reservations", -1))
          ]),
          createBaseVNode("div", _hoisted_13, [
            createBaseVNode("div", _hoisted_14, [
              createBaseVNode("div", _hoisted_15, [
                createBaseVNode("div", _hoisted_16, [
                  createVNode(unref(UserCheck), { class: "w-5 h-5" })
                ]),
                _cache[12] || (_cache[12] = createBaseVNode("span", { class: "text-xs font-bold text-slate-400 uppercase tracking-wider" }, "Active Students", -1))
              ]),
              _cache[13] || (_cache[13] = createBaseVNode("span", { class: "text-xs font-semibold bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-full flex items-center" }, [
                createBaseVNode("span", { class: "w-1.5 h-1.5 rounded-full bg-emerald-500 mr-1 animate-pulse" }),
                createTextVNode(" Live ")
              ], -1))
            ]),
            createBaseVNode("div", _hoisted_17, toDisplayString(stats.value.activeStudents), 1),
            createBaseVNode("div", _hoisted_18, toDisplayString(stats.value.totalSeats) + " Library Seats", 1)
          ]),
          createBaseVNode("div", _hoisted_19, [
            createBaseVNode("div", _hoisted_20, [
              createBaseVNode("div", _hoisted_21, [
                createBaseVNode("div", _hoisted_22, [
                  createVNode(unref(Clock), { class: "w-5 h-5" })
                ]),
                _cache[14] || (_cache[14] = createBaseVNode("span", { class: "text-xs font-bold text-slate-400 uppercase tracking-wider" }, "Pending Arrivals", -1))
              ]),
              _cache[15] || (_cache[15] = createBaseVNode("span", { class: "text-xs font-semibold bg-orange-55/60 text-orange-700 px-2 py-0.5 rounded-full" }, "Arrivals", -1))
            ]),
            createBaseVNode("div", _hoisted_23, toDisplayString(stats.value.pendingCheckIns), 1),
            _cache[16] || (_cache[16] = createBaseVNode("div", { class: "text-[10px] text-slate-400 font-medium text-left uppercase" }, "Awaiting Check-in", -1))
          ]),
          createBaseVNode("div", {
            onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$router.push("/librarian/support")),
            class: "bg-white rounded-xl shadow-sm border border-gray-100 p-5 flex flex-col space-y-2 hover:shadow-md hover:border-red-100 transition-all cursor-pointer group"
          }, [
            createBaseVNode("div", _hoisted_24, [
              createBaseVNode("div", _hoisted_25, [
                createBaseVNode("div", _hoisted_26, [
                  createVNode(unref(MessageSquare), { class: "w-5 h-5" })
                ]),
                _cache[17] || (_cache[17] = createBaseVNode("span", { class: "text-xs font-bold text-slate-400 uppercase tracking-wider" }, "Complaints", -1))
              ]),
              stats.value.pending_tickets > 0 ? (openBlock(), createElementBlock("span", _hoisted_27, [..._cache[18] || (_cache[18] = [
                createBaseVNode("span", { class: "animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-450 opacity-75" }, null, -1),
                createBaseVNode("span", { class: "relative inline-flex rounded-full h-2 w-2 bg-rose-500" }, null, -1)
              ])])) : (openBlock(), createElementBlock("span", _hoisted_28, "None"))
            ]),
            createBaseVNode("div", _hoisted_29, toDisplayString(stats.value.pending_tickets), 1),
            _cache[19] || (_cache[19] = createBaseVNode("div", { class: "text-[10px] text-slate-400 font-medium text-left group-hover:text-rose-600 transition-colors" }, "Needs Attention", -1))
          ])
        ]),
        createBaseVNode("div", _hoisted_30, [
          createBaseVNode("div", _hoisted_31, [
            loading.value ? (openBlock(), createElementBlock("div", _hoisted_32, [..._cache[20] || (_cache[20] = [
              createBaseVNode("div", { class: "animate-spin rounded-full h-8 w-8 border-b-2 border-emerald-600" }, null, -1)
            ])])) : createCommentVNode("", true),
            createBaseVNode("div", _hoisted_33, [
              createBaseVNode("div", _hoisted_34, [
                _cache[22] || (_cache[22] = createBaseVNode("h2", { class: "text-lg font-bold text-slate-700" }, "Recent Bookings", -1)),
                createVNode(_component_router_link, {
                  to: "/librarian/bookings",
                  class: "text-xs text-emerald-600 hover:text-emerald-600 font-bold flex items-center"
                }, {
                  default: withCtx(() => [..._cache[21] || (_cache[21] = [
                    createTextVNode(" View All ", -1),
                    createBaseVNode("span", { class: "ml-1" }, "→", -1)
                  ])]),
                  _: 1
                })
              ])
            ]),
            createBaseVNode("div", _hoisted_35, [
              recentBookings.value.length === 0 && !loading.value ? (openBlock(), createElementBlock("div", _hoisted_36, " No recent bookings found. ")) : createCommentVNode("", true),
              createBaseVNode("div", _hoisted_37, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(recentBookings.value, (booking) => {
                  return openBlock(), createElementBlock("div", {
                    key: booking.id,
                    class: "flex items-center justify-between p-4 bg-slate-50 border border-slate-100/60 rounded-2xl hover:border-slate-200/80 hover:bg-slate-100/30 transition-all flex items-start space-x-3.5"
                  }, [
                    createBaseVNode("div", _hoisted_38, [
                      createBaseVNode("div", _hoisted_39, [
                        booking.profilePicture ? (openBlock(), createElementBlock("img", {
                          key: 0,
                          src: getProfilePictureUrl(booking.profilePicture),
                          class: "w-full h-full object-cover rounded-xl"
                        }, null, 8, _hoisted_40)) : (openBlock(), createElementBlock("div", _hoisted_41, toDisplayString(booking.studentName.charAt(0).toUpperCase()), 1))
                      ]),
                      createBaseVNode("div", _hoisted_42, [
                        createBaseVNode("h4", _hoisted_43, toDisplayString(booking.studentName), 1),
                        createBaseVNode("p", _hoisted_44, "Seat " + toDisplayString(booking.seatNumber) + " • " + toDisplayString(booking.time), 1)
                      ])
                    ]),
                    createBaseVNode("div", _hoisted_45, [
                      createBaseVNode("span", {
                        class: normalizeClass([
                          "px-2.5 py-1 rounded-full text-[10px] font-bold capitalize tracking-wide border",
                          booking.status === "active" ? "bg-green-50 text-green-700 border-green-100" : booking.status === "pending" ? "bg-orange-50 text-orange-700 border-orange-100" : "bg-slate-50 text-slate-500 border border-slate-200"
                        ])
                      }, toDisplayString(booking.status === "active" ? "Live" : booking.status), 3),
                      createBaseVNode("button", _hoisted_46, [
                        createVNode(unref(EllipsisVertical), { class: "w-4 h-4" })
                      ])
                    ])
                  ]);
                }), 128))
              ])
            ])
          ]),
          createBaseVNode("div", _hoisted_47, [
            createBaseVNode("div", _hoisted_48, [
              _cache[26] || (_cache[26] = createBaseVNode("div", { class: "p-6 border-b border-gray-100 flex items-center justify-between" }, [
                createBaseVNode("h2", { class: "text-lg font-bold text-slate-700" }, "System Alerts"),
                createBaseVNode("span", { class: "text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-100" }, "Live Status")
              ], -1)),
              createBaseVNode("div", _hoisted_49, [
                createBaseVNode("div", {
                  onClick: _cache[1] || (_cache[1] = ($event) => _ctx.$router.push({ name: "librarian-live-map" })),
                  class: "flex items-start space-x-3 p-3.5 bg-rose-50/60 border border-rose-100 rounded-2xl cursor-pointer hover:bg-rose-50 transition-all group"
                }, [
                  createVNode(unref(TriangleAlert), { class: "w-4.5 h-4.5 text-rose-600 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" }),
                  createBaseVNode("div", null, [
                    _cache[23] || (_cache[23] = createBaseVNode("h4", { class: "text-xs font-bold text-rose-900 uppercase tracking-wider" }, "Overstay Alerts", -1)),
                    createBaseVNode("p", _hoisted_50, toDisplayString(stats.value.overstay_count) + " students currently in overstay or serious overstay. ", 1)
                  ])
                ]),
                createBaseVNode("div", {
                  onClick: _cache[2] || (_cache[2] = ($event) => _ctx.$router.push({ path: "/librarian/bookings", query: { tab: "override_requests" } })),
                  class: "flex items-start space-x-3 p-3.5 bg-amber-50/60 border border-amber-100 rounded-2xl cursor-pointer hover:bg-amber-50 transition-all group"
                }, [
                  createVNode(unref(ShieldAlert), { class: "w-4.5 h-4.5 text-amber-600 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" }),
                  createBaseVNode("div", null, [
                    _cache[24] || (_cache[24] = createBaseVNode("h4", { class: "text-xs font-bold text-amber-900 uppercase tracking-wider" }, "Level Override Requests", -1)),
                    createBaseVNode("p", _hoisted_51, toDisplayString(stats.value.pending_overrides) + " student override requests awaiting librarian approval. ", 1)
                  ])
                ]),
                createBaseVNode("div", {
                  onClick: _cache[3] || (_cache[3] = ($event) => _ctx.$router.push("/librarian/support")),
                  class: "flex items-start space-x-3 p-3.5 bg-purple-50/60 border border-purple-100 rounded-2xl cursor-pointer hover:bg-purple-50 transition-all group"
                }, [
                  createVNode(unref(MessageSquare), { class: "w-4.5 h-4.5 text-purple-600 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" }),
                  createBaseVNode("div", null, [
                    _cache[25] || (_cache[25] = createBaseVNode("h4", { class: "text-xs font-bold text-purple-900 uppercase tracking-wider" }, "Helpdesk Tickets", -1)),
                    createBaseVNode("p", _hoisted_52, toDisplayString(stats.value.pending_tickets) + " student support tickets need attention. ", 1)
                  ])
                ])
              ])
            ]),
            createBaseVNode("div", _hoisted_53, [
              _cache[28] || (_cache[28] = createBaseVNode("div", { class: "p-6 border-b border-gray-100 text-left" }, [
                createBaseVNode("h2", { class: "text-lg font-bold text-slate-700" }, "Library Occupancy")
              ], -1)),
              createBaseVNode("div", _hoisted_54, [
                createBaseVNode("div", _hoisted_55, [
                  createBaseVNode("div", _hoisted_56, [
                    createBaseVNode("div", null, [
                      createBaseVNode("span", _hoisted_57, toDisplayString(occupancyRate.value) + "% Occupied ", 1)
                    ]),
                    createBaseVNode("div", _hoisted_58, toDisplayString(stats.value.activeStudents) + " / " + toDisplayString(stats.value.totalSeats) + " Seats ", 1)
                  ]),
                  createBaseVNode("div", _hoisted_59, [
                    createBaseVNode("div", {
                      style: normalizeStyle({ width: occupancyRate.value + "%" }),
                      class: "shadow-sm flex flex-col text-center whitespace-nowrap text-white justify-center bg-gradient-to-r from-emerald-600 to-teal-650 transition-all duration-500 rounded-full"
                    }, null, 4)
                  ])
                ]),
                _cache[27] || (_cache[27] = createStaticVNode('<div class="mt-4 space-y-2 pt-2 border-t border-slate-100" data-v-a9f0ee94><div class="flex items-center justify-between text-xs font-semibold" data-v-a9f0ee94><span class="text-slate-500" data-v-a9f0ee94>Peak Hours Today</span><span class="font-bold text-gray-700 bg-slate-100 px-2 py-0.5 rounded-lg" data-v-a9f0ee94>2:00 PM - 6:00 PM</span></div><div class="flex items-center justify-between text-xs font-semibold" data-v-a9f0ee94><span class="text-slate-500" data-v-a9f0ee94>Avg. Study Duration</span><span class="font-bold text-gray-700 bg-slate-100 px-2 py-0.5 rounded-lg" data-v-a9f0ee94>3.5 Hours</span></div></div>', 1))
              ])
            ])
          ])
        ]),
        createBaseVNode("div", _hoisted_60, [
          loading.value ? (openBlock(), createElementBlock("div", _hoisted_61, [..._cache[29] || (_cache[29] = [
            createBaseVNode("div", { class: "animate-spin rounded-full h-8 w-8 border-b-2 border-emerald-600" }, null, -1)
          ])])) : createCommentVNode("", true),
          _cache[46] || (_cache[46] = createBaseVNode("div", { class: "p-6 border-b border-gray-100 flex items-center justify-between" }, [
            createBaseVNode("div", null, [
              createBaseVNode("h2", { class: "text-lg font-bold text-slate-700" }, "Librarian Operations & Quick Tools"),
              createBaseVNode("p", { class: "text-[11px] text-slate-400 font-medium mt-0.5" }, "Quick access to essential library management features")
            ])
          ], -1)),
          createBaseVNode("div", _hoisted_62, [
            createBaseVNode("div", _hoisted_63, [
              createVNode(_component_router_link, {
                to: { name: "librarian-live-map" },
                class: "p-5 bg-emerald-50/40 hover:bg-emerald-50/90 border border-emerald-100/80 rounded-2xl transition-all group flex flex-col justify-between"
              }, {
                default: withCtx(() => [
                  createBaseVNode("div", null, [
                    createBaseVNode("div", _hoisted_64, [
                      _cache[30] || (_cache[30] = createBaseVNode("span", { class: "inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-emerald-100/80 text-emerald-800 rounded-full text-[10px] font-bold uppercase tracking-wider" }, [
                        createBaseVNode("span", { class: "w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" }),
                        createTextVNode(" Live View ")
                      ], -1)),
                      createVNode(unref(MapPin), { class: "w-5 h-5 text-emerald-600 group-hover:scale-110 transition-transform" })
                    ]),
                    _cache[31] || (_cache[31] = createBaseVNode("h4", { class: "font-bold text-slate-800 text-sm mb-1" }, "Live Seat Map", -1)),
                    _cache[32] || (_cache[32] = createBaseVNode("p", { class: "text-[11px] text-slate-500 font-medium leading-relaxed" }, "Real-time seat occupancy & layout monitor across all floors.", -1))
                  ]),
                  _cache[33] || (_cache[33] = createBaseVNode("div", { class: "mt-4 flex items-center text-xs font-bold text-emerald-700" }, [
                    createBaseVNode("span", null, "Open Seat Map"),
                    createBaseVNode("span", { class: "ml-1 group-hover:translate-x-1 transition-transform" }, "→")
                  ], -1))
                ]),
                _: 1
              }),
              createVNode(_component_router_link, {
                to: "/librarian/attendance",
                class: "p-5 bg-blue-50/40 hover:bg-blue-50/90 border border-blue-100/80 rounded-2xl transition-all group flex flex-col justify-between"
              }, {
                default: withCtx(() => [
                  createBaseVNode("div", null, [
                    createBaseVNode("div", _hoisted_65, [
                      _cache[34] || (_cache[34] = createBaseVNode("span", { class: "px-2.5 py-0.5 bg-blue-100/80 text-blue-800 rounded-full text-[10px] font-bold uppercase tracking-wider" }, " Today's Logs ", -1)),
                      createVNode(unref(UserCheck), { class: "w-5 h-5 text-blue-600 group-hover:scale-110 transition-transform" })
                    ]),
                    _cache[35] || (_cache[35] = createBaseVNode("h4", { class: "font-bold text-slate-800 text-sm mb-1" }, "Student Attendance", -1)),
                    _cache[36] || (_cache[36] = createBaseVNode("p", { class: "text-[11px] text-slate-500 font-medium leading-relaxed" }, "Track student check-in times, check-outs, and active durations.", -1))
                  ]),
                  _cache[37] || (_cache[37] = createBaseVNode("div", { class: "mt-4 flex items-center text-xs font-bold text-blue-700" }, [
                    createBaseVNode("span", null, "View Attendance"),
                    createBaseVNode("span", { class: "ml-1 group-hover:translate-x-1 transition-transform" }, "→")
                  ], -1))
                ]),
                _: 1
              }),
              createVNode(_component_router_link, {
                to: "/librarian/sections",
                class: "p-5 bg-amber-50/40 hover:bg-amber-50/90 border border-amber-100/80 rounded-2xl transition-all group flex flex-col justify-between"
              }, {
                default: withCtx(() => [
                  createBaseVNode("div", null, [
                    createBaseVNode("div", _hoisted_66, [
                      _cache[38] || (_cache[38] = createBaseVNode("span", { class: "px-2.5 py-0.5 bg-amber-100/80 text-amber-800 rounded-full text-[10px] font-bold uppercase tracking-wider" }, " QR Cards ", -1)),
                      createVNode(unref(Printer), { class: "w-5 h-5 text-amber-600 group-hover:scale-110 transition-transform" })
                    ]),
                    _cache[39] || (_cache[39] = createBaseVNode("h4", { class: "font-bold text-slate-800 text-sm mb-1" }, "Print QR Codes", -1)),
                    _cache[40] || (_cache[40] = createBaseVNode("p", { class: "text-[11px] text-slate-500 font-medium leading-relaxed" }, "Print subsection QR codes with seat names & academic levels.", -1))
                  ]),
                  _cache[41] || (_cache[41] = createBaseVNode("div", { class: "mt-4 flex items-center text-xs font-bold text-amber-700" }, [
                    createBaseVNode("span", null, "Print Cards"),
                    createBaseVNode("span", { class: "ml-1 group-hover:translate-x-1 transition-transform" }, "→")
                  ], -1))
                ]),
                _: 1
              }),
              createVNode(_component_router_link, {
                to: "/librarian/support",
                class: "p-5 bg-rose-50/40 hover:bg-rose-50/90 border border-rose-100/80 rounded-2xl transition-all group flex flex-col justify-between"
              }, {
                default: withCtx(() => [
                  createBaseVNode("div", null, [
                    createBaseVNode("div", _hoisted_67, [
                      _cache[42] || (_cache[42] = createBaseVNode("span", { class: "px-2.5 py-0.5 bg-rose-100/80 text-rose-800 rounded-full text-[10px] font-bold uppercase tracking-wider" }, " Helpdesk ", -1)),
                      createVNode(unref(MessageSquare), { class: "w-5 h-5 text-rose-600 group-hover:scale-110 transition-transform" })
                    ]),
                    _cache[43] || (_cache[43] = createBaseVNode("h4", { class: "font-bold text-slate-800 text-sm mb-1" }, "Student Complaints", -1)),
                    _cache[44] || (_cache[44] = createBaseVNode("p", { class: "text-[11px] text-slate-500 font-medium leading-relaxed" }, "Review and resolve reported seat or library issues.", -1))
                  ]),
                  _cache[45] || (_cache[45] = createBaseVNode("div", { class: "mt-4 flex items-center text-xs font-bold text-rose-700" }, [
                    createBaseVNode("span", null, "Manage Helpdesk"),
                    createBaseVNode("span", { class: "ml-1 group-hover:translate-x-1 transition-transform" }, "→")
                  ], -1))
                ]),
                _: 1
              })
            ])
          ])
        ])
      ]);
    };
  }
});
const Dashboard = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-a9f0ee94"]]);
export {
  Dashboard as default
};
