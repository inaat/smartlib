import { d as defineComponent, p as useAuth, r as ref, E as computed, o as onMounted, c as createElementBlock, b as createBaseVNode, t as toDisplayString, u as unref, m as createCommentVNode, f as createVNode, w as withCtx, g as resolveComponent, F as Fragment, h as renderList, e as createStaticVNode, I as normalizeStyle, O as librarianAPI, j as createTextVNode, n as normalizeClass, k as createBlock, l as resolveDynamicComponent, i as openBlock } from "./main-Dk2mUbjP.js";
import { B as Building2 } from "./building-2-DPMW20Et.js";
import { C as Calendar } from "./calendar-e6msfKJ3.js";
import { T as TrendingUp } from "./trending-up-_qi7NglU.js";
import { U as UserCheck } from "./user-check-CY9CiNFu.js";
import { U as Users } from "./users-BK7GPR5d.js";
import { C as Clock } from "./clock-DHHRCinm.js";
import { C as CircleAlert } from "./circle-alert-BSTnPYhV.js";
import { M as MessageSquare } from "./message-square-Cer3P7Rf.js";
import { B as BookOpen } from "./book-open-DFp6gl31.js";
import { c as createLucideIcon } from "./createLucideIcon-6n-23kmf.js";
import { f as format } from "./format-CerZa7QB.js";
/* empty css               */
import "./en-US-CtEcOBul.js";
const EllipsisVertical = createLucideIcon("ellipsis-vertical", [
  ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
  ["circle", { cx: "12", cy: "5", r: "1", key: "gxeob9" }],
  ["circle", { cx: "12", cy: "19", r: "1", key: "lyex9k" }]
]);
const _hoisted_1 = { class: "p-6 space-y-6" };
const _hoisted_2 = { class: "flex items-center justify-between" };
const _hoisted_3 = { class: "text-gray-600 mt-1" };
const _hoisted_4 = { class: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative" };
const _hoisted_5 = {
  key: 0,
  class: "absolute inset-0 bg-blue bg-opacity-10 backdrop-blur-[1px] flex items-center justify-center z-10 rounded-xl"
};
const _hoisted_6 = { class: "bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white shadow-lg hover:shadow-xl transition-shadow" };
const _hoisted_7 = { class: "flex items-center justify-between mb-4" };
const _hoisted_8 = { class: "p-3 bg-blue bg-opacity-20 rounded-lg" };
const _hoisted_9 = { class: "space-y-1" };
const _hoisted_10 = { class: "text-2xl font-bold" };
const _hoisted_11 = { class: "mt-4 flex items-center text-sm" };
const _hoisted_12 = { class: "bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-6 text-white shadow-lg hover:shadow-xl transition-shadow" };
const _hoisted_13 = { class: "flex items-center justify-between mb-4" };
const _hoisted_14 = { class: "p-3 bg-blue bg-opacity-20 rounded-lg" };
const _hoisted_15 = { class: "space-y-1" };
const _hoisted_16 = { class: "text-2xl font-bold" };
const _hoisted_17 = { class: "mt-4 flex items-center text-sm" };
const _hoisted_18 = { class: "bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl p-6 text-white shadow-lg hover:shadow-xl transition-shadow" };
const _hoisted_19 = { class: "flex items-center justify-between mb-4" };
const _hoisted_20 = { class: "p-3 bg-blue bg-opacity-20 rounded-lg" };
const _hoisted_21 = { class: "space-y-1" };
const _hoisted_22 = { class: "text-2xl font-bold" };
const _hoisted_23 = { class: "mt-4 flex items-center text-sm" };
const _hoisted_24 = { class: "flex items-center justify-between mb-4" };
const _hoisted_25 = { class: "p-3 bg-white bg-opacity-20 rounded-lg group-hover:scale-110 transition-transform" };
const _hoisted_26 = {
  key: 0,
  class: "flex h-2 w-2 relative"
};
const _hoisted_27 = { class: "space-y-1" };
const _hoisted_28 = { class: "text-2xl font-bold" };
const _hoisted_29 = { class: "mt-4 flex items-center text-sm" };
const _hoisted_30 = { class: "grid grid-cols-1 lg:grid-cols-3 gap-6" };
const _hoisted_31 = { class: "lg:col-span-2 bg-blue rounded-xl shadow-sm border border-gray-200 relative" };
const _hoisted_32 = {
  key: 0,
  class: "absolute inset-0 bg-blue bg-opacity-50 flex items-center justify-center z-10 rounded-xl"
};
const _hoisted_33 = { class: "p-6 border-b border-gray-200" };
const _hoisted_34 = { class: "flex items-center justify-between" };
const _hoisted_35 = { class: "p-6" };
const _hoisted_36 = {
  key: 0,
  class: "text-center py-8 text-gray-500"
};
const _hoisted_37 = { class: "space-y-4" };
const _hoisted_38 = { class: "flex items-center space-x-4" };
const _hoisted_39 = { class: "w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 flex items-center justify-center text-white font-bold" };
const _hoisted_40 = { class: "font-medium text-gray-900" };
const _hoisted_41 = { class: "text-sm text-gray-500" };
const _hoisted_42 = { class: "flex items-center space-x-3" };
const _hoisted_43 = { class: "p-2 hover:bg-gray-200 rounded-lg transition-colors" };
const _hoisted_44 = { class: "space-y-6" };
const _hoisted_45 = { class: "bg-blue rounded-xl shadow-sm border border-gray-200" };
const _hoisted_46 = { class: "p-6 space-y-4" };
const _hoisted_47 = { class: "flex items-start space-x-3 p-3 bg-red-50 rounded-lg" };
const _hoisted_48 = { class: "text-xs text-red-700 mt-1" };
const _hoisted_49 = { class: "flex items-start space-x-3 p-3 bg-yellow-50 rounded-lg" };
const _hoisted_50 = { class: "text-xs text-yellow-700 mt-1" };
const _hoisted_51 = { class: "flex items-start space-x-3 p-3 bg-blue-50 rounded-lg" };
const _hoisted_52 = { class: "bg-blue rounded-xl shadow-sm border border-gray-200" };
const _hoisted_53 = { class: "p-6" };
const _hoisted_54 = { class: "relative pt-1" };
const _hoisted_55 = { class: "flex mb-2 items-center justify-between" };
const _hoisted_56 = { class: "text-xs font-semibold inline-block text-purple-600" };
const _hoisted_57 = { class: "text-right" };
const _hoisted_58 = { class: "text-xs font-semibold inline-block text-gray-600" };
const _hoisted_59 = { class: "overflow-hidden h-3 mb-4 text-xs flex rounded-full bg-purple-100" };
const _hoisted_60 = { class: "bg-blue rounded-xl shadow-sm border border-gray-200 relative" };
const _hoisted_61 = {
  key: 0,
  class: "absolute inset-0 bg-blue bg-opacity-50 flex items-center justify-center z-10 rounded-xl"
};
const _hoisted_62 = { class: "p-6" };
const _hoisted_63 = { class: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4" };
const _hoisted_64 = { class: "flex items-center justify-between mb-2" };
const _hoisted_65 = { class: "text-xs font-medium text-gray-500" };
const _hoisted_66 = { class: "font-medium text-gray-900" };
const _hoisted_67 = { class: "text-sm text-gray-600 mt-1" };
const _hoisted_68 = {
  key: 0,
  class: "mt-2 flex items-center text-xs text-gray-500"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Dashboard",
  setup(__props) {
    const { user } = useAuth();
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
      maintenanceSeats: 0
    });
    const recentBookings = ref([]);
    const upcomingEvents = ref([]);
    const occupancyRate = computed(() => {
      if (!stats.value.totalSeats) return 0;
      return Math.round(stats.value.activeStudents / stats.value.totalSeats * 100);
    });
    const fetchDashboardData = async () => {
      loading.value = true;
      try {
        const data = await librarianAPI.getDashboard();
        stats.value = {
          todayBookings: data.stats.today_bookings,
          activeStudents: data.stats.active_bookings,
          pendingCheckIns: data.stats.pending_bookings,
          overdueCheckIns: data.stats.overdue_bookings,
          availableSeats: data.stats.available_seats,
          totalSeats: data.stats.total_seats,
          totalBooks: data.stats.total_books,
          totalEvents: data.stats.total_events,
          maintenanceSeats: data.stats.maintenance_seats
        };
        recentBookings.value = data.recentBookings.map((b) => ({
          id: b.id,
          studentName: b.user?.name || "Unknown",
          seatNumber: b.seat?.seat_number || "N/A",
          time: `${formatTime(b.booking_time)} - ${formatTime(b.scheduled_end_time)}`,
          status: b.status === "checked_in" ? "active" : b.status === "booked" ? "pending" : b.status
        }));
        upcomingEvents.value = data.upcomingEvents.map((e) => {
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
            color: "border-purple-500"
          };
        });
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      } finally {
        loading.value = false;
      }
    };
    const formatTime = (dateString) => {
      if (!dateString) return "N/A";
      return format(new Date(dateString), "hh:mm a");
    };
    onMounted(() => {
      fetchDashboardData();
    });
    const todaySchedule = computed(() => {
      const schedule = [
        {
          id: "open",
          time: "08:00 AM",
          title: "Library Opens",
          description: "Regular opening hours",
          icon: Building2,
          color: "border-blue-500",
          joinedCount: void 0
        },
        ...upcomingEvents.value
      ];
      return schedule;
    });
    return (_ctx, _cache) => {
      const _component_router_link = resolveComponent("router-link");
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("div", null, [
            _cache[1] || (_cache[1] = createBaseVNode("h1", { class: "text-3xl font-bold text-gray-900" }, "Dashboard", -1)),
            createBaseVNode("p", _hoisted_3, "Welcome back, " + toDisplayString(unref(user)?.name) + "! Here's what's happening today.", 1)
          ])
        ]),
        createBaseVNode("div", _hoisted_4, [
          loading.value ? (openBlock(), createElementBlock("div", _hoisted_5, [..._cache[2] || (_cache[2] = [
            createBaseVNode("div", { class: "animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600" }, null, -1)
          ])])) : createCommentVNode("", true),
          createBaseVNode("div", _hoisted_6, [
            createBaseVNode("div", _hoisted_7, [
              createBaseVNode("div", _hoisted_8, [
                createVNode(unref(Calendar), { class: "w-6 h-6" })
              ]),
              _cache[3] || (_cache[3] = createBaseVNode("span", { class: "text-sm font-medium bg-blue bg-opacity-20 px-3 py-1 rounded-full" }, "Today", -1))
            ]),
            createBaseVNode("div", _hoisted_9, [
              createBaseVNode("h3", _hoisted_10, toDisplayString(stats.value.todayBookings), 1),
              _cache[4] || (_cache[4] = createBaseVNode("p", { class: "text-blue-100 text-sm" }, "Total Bookings", -1))
            ]),
            createBaseVNode("div", _hoisted_11, [
              createVNode(unref(TrendingUp), { class: "w-4 h-4 mr-1" }),
              _cache[5] || (_cache[5] = createBaseVNode("span", null, "Updated live", -1))
            ])
          ]),
          createBaseVNode("div", _hoisted_12, [
            createBaseVNode("div", _hoisted_13, [
              createBaseVNode("div", _hoisted_14, [
                createVNode(unref(UserCheck), { class: "w-6 h-6" })
              ]),
              _cache[6] || (_cache[6] = createBaseVNode("span", { class: "text-sm font-medium bg-blue bg-opacity-20 px-3 py-1 rounded-full" }, "Live", -1))
            ]),
            createBaseVNode("div", _hoisted_15, [
              createBaseVNode("h3", _hoisted_16, toDisplayString(stats.value.activeStudents), 1),
              _cache[7] || (_cache[7] = createBaseVNode("p", { class: "text-green-100 text-sm" }, "Active Students", -1))
            ]),
            createBaseVNode("div", _hoisted_17, [
              createVNode(unref(Users), { class: "w-4 h-4 mr-1" }),
              createBaseVNode("span", null, toDisplayString(stats.value.totalSeats) + " total seats", 1)
            ])
          ]),
          createBaseVNode("div", _hoisted_18, [
            createBaseVNode("div", _hoisted_19, [
              createBaseVNode("div", _hoisted_20, [
                createVNode(unref(Clock), { class: "w-6 h-6" })
              ]),
              _cache[8] || (_cache[8] = createBaseVNode("span", { class: "text-sm font-medium bg-blue bg-opacity-20 px-3 py-1 rounded-full" }, "Pending", -1))
            ]),
            createBaseVNode("div", _hoisted_21, [
              createBaseVNode("h3", _hoisted_22, toDisplayString(stats.value.pendingCheckIns), 1),
              _cache[9] || (_cache[9] = createBaseVNode("p", { class: "text-orange-100 text-sm" }, "Pending Check-ins", -1))
            ]),
            createBaseVNode("div", _hoisted_23, [
              createVNode(unref(CircleAlert), { class: "w-4 h-4 mr-1" }),
              _cache[10] || (_cache[10] = createBaseVNode("span", null, "Awaiting arrival", -1))
            ])
          ]),
          createBaseVNode("div", {
            onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$router.push("/librarian/support")),
            class: "bg-gradient-to-br from-red-500 to-red-600 rounded-xl p-6 text-white shadow-lg hover:shadow-xl transition-all cursor-pointer group"
          }, [
            createBaseVNode("div", _hoisted_24, [
              createBaseVNode("div", _hoisted_25, [
                createVNode(unref(MessageSquare), { class: "w-6 h-6" })
              ]),
              stats.value.pending_tickets > 0 ? (openBlock(), createElementBlock("span", _hoisted_26, [..._cache[11] || (_cache[11] = [
                createBaseVNode("span", { class: "animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" }, null, -1),
                createBaseVNode("span", { class: "relative inline-flex rounded-full h-2 w-2 bg-white" }, null, -1)
              ])])) : createCommentVNode("", true)
            ]),
            createBaseVNode("div", _hoisted_27, [
              createBaseVNode("h3", _hoisted_28, toDisplayString(stats.value.pending_tickets), 1),
              _cache[12] || (_cache[12] = createBaseVNode("p", { class: "text-red-100 text-sm" }, "Pending Complaints", -1))
            ]),
            createBaseVNode("div", _hoisted_29, [
              createVNode(unref(CircleAlert), { class: "w-4 h-4 mr-1" }),
              _cache[13] || (_cache[13] = createBaseVNode("span", null, "Need immediate attention", -1))
            ])
          ])
        ]),
        createBaseVNode("div", _hoisted_30, [
          createBaseVNode("div", _hoisted_31, [
            loading.value ? (openBlock(), createElementBlock("div", _hoisted_32, [..._cache[14] || (_cache[14] = [
              createBaseVNode("div", { class: "animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600" }, null, -1)
            ])])) : createCommentVNode("", true),
            createBaseVNode("div", _hoisted_33, [
              createBaseVNode("div", _hoisted_34, [
                _cache[16] || (_cache[16] = createBaseVNode("h2", { class: "text-lg font-bold text-gray-900" }, "Recent Bookings", -1)),
                createVNode(_component_router_link, {
                  to: "/librarian/bookings",
                  class: "text-sm text-purple-600 hover:text-purple-700 font-medium"
                }, {
                  default: withCtx(() => [..._cache[15] || (_cache[15] = [
                    createTextVNode(" View All → ", -1)
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
                    class: "flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  }, [
                    createBaseVNode("div", _hoisted_38, [
                      createBaseVNode("div", _hoisted_39, toDisplayString(booking.studentName.charAt(0)), 1),
                      createBaseVNode("div", null, [
                        createBaseVNode("h4", _hoisted_40, toDisplayString(booking.studentName), 1),
                        createBaseVNode("p", _hoisted_41, "Seat " + toDisplayString(booking.seatNumber) + " • " + toDisplayString(booking.time), 1)
                      ])
                    ]),
                    createBaseVNode("div", _hoisted_42, [
                      createBaseVNode("span", {
                        class: normalizeClass([
                          "px-3 py-1 rounded-full text-xs font-medium capitalize",
                          booking.status === "active" ? "bg-green-100 text-green-700" : booking.status === "pending" ? "bg-orange-100 text-orange-700" : "bg-gray-100 text-gray-700"
                        ])
                      }, toDisplayString(booking.status), 3),
                      createBaseVNode("button", _hoisted_43, [
                        createVNode(unref(EllipsisVertical), { class: "w-4 h-4 text-gray-600" })
                      ])
                    ])
                  ]);
                }), 128))
              ])
            ])
          ]),
          createBaseVNode("div", _hoisted_44, [
            createBaseVNode("div", _hoisted_45, [
              _cache[20] || (_cache[20] = createBaseVNode("div", { class: "p-6 border-b border-gray-200" }, [
                createBaseVNode("h2", { class: "text-lg font-bold text-gray-900" }, "Alerts")
              ], -1)),
              createBaseVNode("div", _hoisted_46, [
                createBaseVNode("div", _hoisted_47, [
                  createVNode(unref(CircleAlert), { class: "w-5 h-5 text-red-600 mt-0.5" }),
                  createBaseVNode("div", null, [
                    _cache[17] || (_cache[17] = createBaseVNode("h4", { class: "text-sm font-medium text-red-900" }, "Overdue Check-ins", -1)),
                    createBaseVNode("p", _hoisted_48, toDisplayString(stats.value.overdueCheckIns) + " students haven't checked in", 1)
                  ])
                ]),
                createBaseVNode("div", _hoisted_49, [
                  createVNode(unref(CircleAlert), { class: "w-5 h-5 text-yellow-600 mt-0.5" }),
                  createBaseVNode("div", null, [
                    _cache[18] || (_cache[18] = createBaseVNode("h4", { class: "text-sm font-medium text-yellow-900" }, "Maintenance Due", -1)),
                    createBaseVNode("p", _hoisted_50, toDisplayString(stats.value.maintenanceSeats) + " seats need maintenance", 1)
                  ])
                ]),
                createBaseVNode("div", _hoisted_51, [
                  createVNode(unref(CircleAlert), { class: "w-5 h-5 text-blue-600 mt-0.5" }),
                  _cache[19] || (_cache[19] = createBaseVNode("div", null, [
                    createBaseVNode("h4", { class: "text-sm font-medium text-blue-900" }, "Event Today"),
                    createBaseVNode("p", { class: "text-xs text-blue-700 mt-1" }, "Study Workshop at 3:00 PM")
                  ], -1))
                ])
              ])
            ]),
            createBaseVNode("div", _hoisted_52, [
              _cache[22] || (_cache[22] = createBaseVNode("div", { class: "p-6 border-b border-gray-200" }, [
                createBaseVNode("h2", { class: "text-lg font-bold text-gray-900" }, "Occupancy Rate")
              ], -1)),
              createBaseVNode("div", _hoisted_53, [
                createBaseVNode("div", _hoisted_54, [
                  createBaseVNode("div", _hoisted_55, [
                    createBaseVNode("div", null, [
                      createBaseVNode("span", _hoisted_56, toDisplayString(occupancyRate.value) + "% ", 1)
                    ]),
                    createBaseVNode("div", _hoisted_57, [
                      createBaseVNode("span", _hoisted_58, toDisplayString(stats.value.activeStudents) + "/" + toDisplayString(stats.value.totalSeats), 1)
                    ])
                  ]),
                  createBaseVNode("div", _hoisted_59, [
                    createBaseVNode("div", {
                      style: normalizeStyle({ width: occupancyRate.value + "%" }),
                      class: "shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gradient-to-r from-purple-600 to-indigo-600 transition-all duration-500"
                    }, null, 4)
                  ])
                ]),
                _cache[21] || (_cache[21] = createStaticVNode('<div class="mt-4 space-y-2"><div class="flex items-center justify-between text-sm"><span class="text-gray-600">Peak Hours</span><span class="font-medium text-gray-900">2:00 PM - 6:00 PM</span></div><div class="flex items-center justify-between text-sm"><span class="text-gray-600">Avg. Duration</span><span class="font-medium text-gray-900">3.5 hours</span></div></div>', 1))
              ])
            ])
          ])
        ]),
        createBaseVNode("div", _hoisted_60, [
          loading.value ? (openBlock(), createElementBlock("div", _hoisted_61, [..._cache[23] || (_cache[23] = [
            createBaseVNode("div", { class: "animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600" }, null, -1)
          ])])) : createCommentVNode("", true),
          _cache[24] || (_cache[24] = createStaticVNode('<div class="p-6 border-b border-gray-200"><div class="flex items-center justify-between"><h2 class="text-lg font-bold text-gray-900">Upcoming Schedule</h2><div class="flex items-center space-x-2"><button class="px-3 py-1 text-sm bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"> All </button><button class="px-3 py-1 text-sm text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"> Events </button><button class="px-3 py-1 text-sm text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"> Maintenance </button></div></div></div>', 1)),
          createBaseVNode("div", _hoisted_62, [
            createBaseVNode("div", _hoisted_63, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(todaySchedule.value, (event) => {
                return openBlock(), createElementBlock("div", {
                  key: event.id,
                  class: normalizeClass(["p-4 border-l-4 bg-gray-50 rounded-lg hover:shadow-md transition-shadow", event.color])
                }, [
                  createBaseVNode("div", _hoisted_64, [
                    createBaseVNode("span", _hoisted_65, toDisplayString(event.time), 1),
                    (openBlock(), createBlock(resolveDynamicComponent(event.icon), { class: "w-4 h-4 text-gray-600" }))
                  ]),
                  createBaseVNode("h4", _hoisted_66, toDisplayString(event.title), 1),
                  createBaseVNode("p", _hoisted_67, toDisplayString(event.description), 1),
                  event.joinedCount !== void 0 ? (openBlock(), createElementBlock("div", _hoisted_68, [
                    createVNode(unref(Users), { class: "w-3 h-3 mr-1" }),
                    createBaseVNode("span", null, toDisplayString(event.joinedCount) + " joined", 1)
                  ])) : createCommentVNode("", true)
                ], 2);
              }), 128))
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
