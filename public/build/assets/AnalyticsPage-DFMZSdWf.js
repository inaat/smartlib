import { d as defineComponent, r as ref, E as computed, o as onMounted, c as createElementBlock, b as createBaseVNode, f as createVNode, n as normalizeClass, u as unref, F as Fragment, h as renderList, t as toDisplayString, w as withCtx, g as resolveComponent, m as createCommentVNode, J as studentAPI, k as createBlock, l as resolveDynamicComponent, I as normalizeStyle, j as createTextVNode, i as openBlock } from "./main-Dk2mUbjP.js";
import { C as Calendar } from "./calendar-e6msfKJ3.js";
import { C as Clock } from "./clock-DHHRCinm.js";
import { B as BookMarked } from "./book-marked-CJInohzw.js";
import { F as Flame } from "./flame-CMRjmMFx.js";
import { R as RefreshCw } from "./refresh-cw-D9O5gUrY.js";
import { T as TrendingUp } from "./trending-up-_qi7NglU.js";
import { M as MapPin } from "./map-pin-CGJFb8uL.js";
import { L as Library } from "./library-J5KQH6oi.js";
import { A as Activity } from "./activity-XAemk1Fl.js";
import { B as Building2 } from "./building-2-DPMW20Et.js";
import { C as ChevronRight } from "./chevron-right-C2YUMIZW.js";
import { f as format } from "./format-CerZa7QB.js";
/* empty css               */
import "./createLucideIcon-6n-23kmf.js";
import "./en-US-CtEcOBul.js";
const _hoisted_1 = { class: "p-6 space-y-6" };
const _hoisted_2 = { class: "flex flex-col md:flex-row md:items-center md:justify-between gap-4" };
const _hoisted_3 = { class: "flex items-center space-x-3" };
const _hoisted_4 = ["disabled"];
const _hoisted_5 = {
  key: 0,
  class: "flex items-center justify-center py-20"
};
const _hoisted_6 = { class: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" };
const _hoisted_7 = { class: "absolute top-0 right-0 p-4 -mr-4 -mt-4 opacity-10 group-hover:opacity-20 transition-opacity" };
const _hoisted_8 = { class: "flex items-center justify-between mb-4 relative z-10" };
const _hoisted_9 = { class: "relative z-10" };
const _hoisted_10 = { class: "text-xs font-bold text-gray-400 uppercase tracking-widest" };
const _hoisted_11 = { class: "text-3xl font-black text-gray-900 mt-1" };
const _hoisted_12 = { class: "grid grid-cols-1 lg:grid-cols-3 gap-6" };
const _hoisted_13 = { class: "lg:col-span-2 bg-white rounded-3xl border border-gray-100 shadow-sm p-8 relative overflow-hidden" };
const _hoisted_14 = { class: "flex items-center justify-between mb-8" };
const _hoisted_15 = { class: "flex items-center space-x-3" };
const _hoisted_16 = { class: "p-2 bg-blue-50 rounded-lg text-blue-600" };
const _hoisted_17 = { class: "h-64 flex items-end justify-between space-x-2" };
const _hoisted_18 = { class: "absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 text-white text-[10px] rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10 shadow-xl" };
const _hoisted_19 = { class: "flex justify-between mt-6 px-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest" };
const _hoisted_20 = { class: "bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden relative" };
const _hoisted_21 = { class: "px-8 py-6 border-b border-gray-50 flex items-center space-x-3" };
const _hoisted_22 = { class: "p-2 bg-purple-50 rounded-lg text-purple-600" };
const _hoisted_23 = { class: "p-4" };
const _hoisted_24 = {
  key: 0,
  class: "p-8 text-center"
};
const _hoisted_25 = { class: "mx-auto w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-4" };
const _hoisted_26 = {
  key: 1,
  class: "space-y-3"
};
const _hoisted_27 = { class: "flex items-center space-x-3" };
const _hoisted_28 = { class: "w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-all" };
const _hoisted_29 = { class: "text-sm font-bold text-gray-900 block" };
const _hoisted_30 = { class: "text-[10px] uppercase font-bold text-gray-400 tracking-wider" };
const _hoisted_31 = { class: "bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden relative" };
const _hoisted_32 = { class: "px-8 py-6 border-b border-gray-50 flex items-center justify-between" };
const _hoisted_33 = { class: "flex items-center space-x-3" };
const _hoisted_34 = { class: "p-2 bg-emerald-50 rounded-lg text-emerald-600" };
const _hoisted_35 = { class: "overflow-x-auto" };
const _hoisted_36 = { class: "w-full text-left" };
const _hoisted_37 = { class: "divide-y divide-gray-50" };
const _hoisted_38 = { key: 0 };
const _hoisted_39 = { class: "px-8 py-5" };
const _hoisted_40 = { class: "flex items-center space-x-3" };
const _hoisted_41 = { class: "w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center text-xs text-gray-500 group-hover:bg-emerald-100 group-hover:text-emerald-600 transition-all" };
const _hoisted_42 = { class: "text-sm font-bold text-gray-900" };
const _hoisted_43 = { class: "px-8 py-5 text-sm font-medium text-gray-600" };
const _hoisted_44 = { class: "px-8 py-5" };
const _hoisted_45 = { class: "px-8 py-5 text-sm font-bold text-gray-400 text-right" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "AnalyticsPage",
  setup(__props) {
    const loading = ref(true);
    const analyticsData = ref(null);
    const monthlyTrends = ref([]);
    const topLibraries = ref([]);
    const recentBookings = ref([]);
    const statsCards = computed(() => [
      {
        label: "Total Sessions",
        value: analyticsData.value?.total_bookings || 0,
        icon: Calendar,
        bgClass: "bg-blue-50",
        iconClass: "text-blue-600"
      },
      {
        label: "Study Hours",
        value: analyticsData.value?.total_study_hours || 0,
        icon: Clock,
        bgClass: "bg-purple-50",
        iconClass: "text-purple-600"
      },
      {
        label: "Active Books",
        value: analyticsData.value?.active_reservations || 0,
        icon: BookMarked,
        bgClass: "bg-amber-50",
        iconClass: "text-amber-600"
      },
      {
        label: "Study Streak",
        value: (analyticsData.value?.study_streak || 0) + " Days",
        icon: Flame,
        bgClass: "bg-orange-50",
        iconClass: "text-orange-600"
      }
    ]);
    const maxTrendCount = computed(() => {
      if (monthlyTrends.value.length === 0) return 1;
      return Math.max(...monthlyTrends.value.map((d) => d.count), 1);
    });
    const fetchAnalytics = async () => {
      try {
        loading.value = true;
        const data = await studentAPI.getAnalytics();
        analyticsData.value = data.stats;
        monthlyTrends.value = data.monthlyTrends || [];
        topLibraries.value = data.topLibraries || [];
        recentBookings.value = data.recentBookings || [];
      } catch (error) {
        console.error("Failed to fetch analytics:", error);
      } finally {
        loading.value = false;
      }
    };
    const getStatusClass = (status) => {
      switch (status.toLowerCase()) {
        case "completed":
          return "bg-emerald-100 text-emerald-700";
        case "active":
        case "checked_in":
          return "bg-blue-100 text-blue-700";
        case "pending":
        case "booked":
          return "bg-amber-100 text-amber-700";
        case "cancelled":
          return "bg-red-100 text-red-700";
        default:
          return "bg-gray-100 text-gray-700";
      }
    };
    const formatDate = (dateStr) => {
      if (!dateStr) return "";
      return format(new Date(dateStr), "MMM d, yyyy");
    };
    const formatDateShort = (dateStr) => {
      if (!dateStr) return "";
      return format(new Date(dateStr), "MMM d");
    };
    onMounted(() => {
      fetchAnalytics();
    });
    return (_ctx, _cache) => {
      const _component_router_link = resolveComponent("router-link");
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          _cache[0] || (_cache[0] = createBaseVNode("div", null, [
            createBaseVNode("h1", { class: "text-3xl font-bold text-gray-900" }, "My Analytics"),
            createBaseVNode("p", { class: "text-gray-500 text-sm" }, "Track your study progress and library activity.")
          ], -1)),
          createBaseVNode("div", _hoisted_3, [
            createBaseVNode("button", {
              onClick: fetchAnalytics,
              disabled: loading.value,
              class: "p-2.5 text-gray-500 hover:bg-gray-100 rounded-xl transition-all disabled:opacity-50",
              title: "Refresh Data"
            }, [
              createVNode(unref(RefreshCw), {
                class: normalizeClass(["w-5 h-5", loading.value ? "animate-spin" : ""])
              }, null, 8, ["class"])
            ], 8, _hoisted_4)
          ])
        ]),
        loading.value && !analyticsData.value ? (openBlock(), createElementBlock("div", _hoisted_5, [..._cache[1] || (_cache[1] = [
          createBaseVNode("div", { class: "animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600" }, null, -1)
        ])])) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
          createBaseVNode("div", _hoisted_6, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(statsCards.value, (stat) => {
              return openBlock(), createElementBlock("div", {
                key: stat.label,
                class: "bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all group overflow-hidden relative"
              }, [
                createBaseVNode("div", _hoisted_7, [
                  (openBlock(), createBlock(resolveDynamicComponent(stat.icon), { class: "w-24 h-24" }))
                ]),
                createBaseVNode("div", _hoisted_8, [
                  createBaseVNode("div", {
                    class: normalizeClass(["p-3 rounded-2xl", stat.bgClass])
                  }, [
                    (openBlock(), createBlock(resolveDynamicComponent(stat.icon), {
                      class: normalizeClass(["w-6 h-6", stat.iconClass])
                    }, null, 8, ["class"]))
                  ], 2)
                ]),
                createBaseVNode("div", _hoisted_9, [
                  createBaseVNode("p", _hoisted_10, toDisplayString(stat.label), 1),
                  createBaseVNode("h3", _hoisted_11, toDisplayString(stat.value), 1)
                ])
              ]);
            }), 128))
          ]),
          createBaseVNode("div", _hoisted_12, [
            createBaseVNode("div", _hoisted_13, [
              _cache[3] || (_cache[3] = createBaseVNode("div", { class: "absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-teal-500" }, null, -1)),
              createBaseVNode("div", _hoisted_14, [
                createBaseVNode("div", _hoisted_15, [
                  createBaseVNode("div", _hoisted_16, [
                    createVNode(unref(TrendingUp), { class: "w-5 h-5" })
                  ]),
                  _cache[2] || (_cache[2] = createBaseVNode("h3", { class: "font-bold text-gray-900" }, "Study Frequency (Last 30 Days)", -1))
                ])
              ]),
              createBaseVNode("div", _hoisted_17, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(monthlyTrends.value, (day, index) => {
                  return openBlock(), createElementBlock("div", {
                    key: index,
                    class: "flex-1 flex flex-col items-center group relative h-full justify-end"
                  }, [
                    createBaseVNode("div", {
                      class: "w-full bg-blue-500/80 rounded-t-lg transition-all group-hover:bg-blue-600 hover:scale-x-110",
                      style: normalizeStyle({ height: day.count / maxTrendCount.value * 100 + "%" })
                    }, [
                      createBaseVNode("div", _hoisted_18, toDisplayString(formatDateShort(day.date)) + ": " + toDisplayString(day.count) + " Bookings ", 1)
                    ], 4)
                  ]);
                }), 128))
              ]),
              createBaseVNode("div", _hoisted_19, [
                createBaseVNode("span", null, toDisplayString(formatDateShort(monthlyTrends.value[0]?.date)), 1),
                createBaseVNode("span", null, toDisplayString(formatDateShort(monthlyTrends.value[monthlyTrends.value.length - 1]?.date)), 1)
              ])
            ]),
            createBaseVNode("div", _hoisted_20, [
              _cache[6] || (_cache[6] = createBaseVNode("div", { class: "absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-indigo-500" }, null, -1)),
              createBaseVNode("div", _hoisted_21, [
                createBaseVNode("div", _hoisted_22, [
                  createVNode(unref(MapPin), { class: "w-5 h-5" })
                ]),
                _cache[4] || (_cache[4] = createBaseVNode("h3", { class: "font-bold text-gray-900" }, "Favorite Spots", -1))
              ]),
              createBaseVNode("div", _hoisted_23, [
                topLibraries.value.length === 0 ? (openBlock(), createElementBlock("div", _hoisted_24, [
                  createBaseVNode("div", _hoisted_25, [
                    createVNode(unref(Library), { class: "w-8 h-8 text-gray-300" })
                  ]),
                  _cache[5] || (_cache[5] = createBaseVNode("p", { class: "text-sm text-gray-400 italic" }, "No library visits yet.", -1))
                ])) : (openBlock(), createElementBlock("div", _hoisted_26, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(topLibraries.value, (lib) => {
                    return openBlock(), createElementBlock("div", {
                      key: lib.id,
                      class: "p-4 rounded-2xl bg-gray-50 border border-transparent hover:border-purple-200 hover:bg-white transition-all flex items-center justify-between group"
                    }, [
                      createBaseVNode("div", _hoisted_27, [
                        createBaseVNode("div", _hoisted_28, [
                          createVNode(unref(Building2), { class: "w-5 h-5" })
                        ]),
                        createBaseVNode("div", null, [
                          createBaseVNode("span", _hoisted_29, toDisplayString(lib.name), 1),
                          createBaseVNode("span", _hoisted_30, toDisplayString(lib.bookings_count) + " Visits", 1)
                        ])
                      ]),
                      createVNode(unref(ChevronRight), { class: "w-4 h-4 text-gray-300 group-hover:text-purple-500" })
                    ]);
                  }), 128))
                ]))
              ])
            ])
          ]),
          createBaseVNode("div", _hoisted_31, [
            _cache[11] || (_cache[11] = createBaseVNode("div", { class: "absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-teal-500" }, null, -1)),
            createBaseVNode("div", _hoisted_32, [
              createBaseVNode("div", _hoisted_33, [
                createBaseVNode("div", _hoisted_34, [
                  createVNode(unref(Activity), { class: "w-5 h-5" })
                ]),
                _cache[7] || (_cache[7] = createBaseVNode("h3", { class: "font-bold text-gray-900" }, "Recent Activity", -1))
              ]),
              createVNode(_component_router_link, {
                to: "/student/libraries",
                class: "text-xs font-bold text-emerald-600 hover:text-emerald-700 uppercase tracking-widest"
              }, {
                default: withCtx(() => [..._cache[8] || (_cache[8] = [
                  createTextVNode("Book New Seat", -1)
                ])]),
                _: 1
              })
            ]),
            createBaseVNode("div", _hoisted_35, [
              createBaseVNode("table", _hoisted_36, [
                _cache[10] || (_cache[10] = createBaseVNode("thead", null, [
                  createBaseVNode("tr", { class: "bg-gray-50/50 text-gray-400 text-[10px] font-black uppercase tracking-[0.2em]" }, [
                    createBaseVNode("th", { class: "px-8 py-4" }, "Library"),
                    createBaseVNode("th", { class: "px-8 py-4" }, "Seat"),
                    createBaseVNode("th", { class: "px-8 py-4" }, "Status"),
                    createBaseVNode("th", { class: "px-8 py-4 text-right" }, "Date")
                  ])
                ], -1)),
                createBaseVNode("tbody", _hoisted_37, [
                  recentBookings.value.length === 0 ? (openBlock(), createElementBlock("tr", _hoisted_38, [..._cache[9] || (_cache[9] = [
                    createBaseVNode("td", {
                      colspan: "4",
                      class: "px-8 py-12 text-center text-gray-400 italic text-sm"
                    }, "No recent bookings found.", -1)
                  ])])) : createCommentVNode("", true),
                  (openBlock(true), createElementBlock(Fragment, null, renderList(recentBookings.value, (booking) => {
                    return openBlock(), createElementBlock("tr", {
                      key: booking.id,
                      class: "hover:bg-gray-50/50 transition-colors group"
                    }, [
                      createBaseVNode("td", _hoisted_39, [
                        createBaseVNode("div", _hoisted_40, [
                          createBaseVNode("div", _hoisted_41, [
                            createVNode(unref(Building2), { class: "w-4 h-4" })
                          ]),
                          createBaseVNode("span", _hoisted_42, toDisplayString(booking.library?.name), 1)
                        ])
                      ]),
                      createBaseVNode("td", _hoisted_43, "Seat #" + toDisplayString(booking.seat?.seat_number), 1),
                      createBaseVNode("td", _hoisted_44, [
                        createBaseVNode("span", {
                          class: normalizeClass(["px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest", getStatusClass(booking.status)])
                        }, toDisplayString(booking.status.replace("_", " ")), 3)
                      ]),
                      createBaseVNode("td", _hoisted_45, toDisplayString(formatDate(booking.created_at)), 1)
                    ]);
                  }), 128))
                ])
              ])
            ])
          ])
        ], 64))
      ]);
    };
  }
});
export {
  _sfc_main as default
};
