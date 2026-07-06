import { d as defineComponent, r as ref, c as computed, o as onMounted, a as createElementBlock, b as createBaseVNode, f as createVNode, n as normalizeClass, u as unref, t as toDisplayString, F as Fragment, j as renderList, w as withCtx, g as resolveComponent, l as createCommentVNode, L as studentAPI, h as createBlock, m as resolveDynamicComponent, q as normalizeStyle, i as createTextVNode, k as openBlock } from "./main-BV94XoeK.js";
import { C as Calendar } from "./calendar-Ds3wHnE9.js";
import { C as Clock } from "./clock-BERatuZr.js";
import { B as BookMarked } from "./book-marked-Cobj7ayd.js";
import { F as Flame } from "./flame-CGbNW9kB.js";
import { R as RefreshCw } from "./refresh-cw-C6EhchCZ.js";
import { T as TrendingUp } from "./trending-up-PIRBVTma.js";
import { M as MapPin } from "./map-pin-CW-zEwb2.js";
import { L as Library } from "./library-BL7Qw1Tw.js";
import { A as Activity } from "./activity-By-ount1.js";
import { B as Building2 } from "./building-2-CoiD_Ne8.js";
import { C as ChevronRight } from "./chevron-right-CMoJDVXY.js";
import { f as format } from "./format-CerZa7QB.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
/* empty css               */
import "./createLucideIcon-CmaEOm5I.js";
import "./en-US-CtEcOBul.js";
const _hoisted_1 = { class: "space-y-6" };
const _hoisted_2 = { class: "flex justify-end font-outfit" };
const _hoisted_3 = ["disabled"];
const _hoisted_4 = {
  key: 0,
  class: "flex flex-col items-center justify-center py-24 space-y-4"
};
const _hoisted_5 = { class: "grid grid-cols-2 lg:grid-cols-4 gap-4 font-outfit" };
const _hoisted_6 = { class: "flex items-center space-x-3.5" };
const _hoisted_7 = { class: "min-w-0" };
const _hoisted_8 = { class: "text-[10px] font-semibold text-slate-400 uppercase tracking-widest leading-none truncate" };
const _hoisted_9 = { class: "text-xl font-bold text-slate-800 mt-1 leading-none" };
const _hoisted_10 = { class: "grid grid-cols-1 lg:grid-cols-3 gap-6" };
const _hoisted_11 = { class: "lg:col-span-2 bg-white rounded-2xl border border-slate-100 shadow-sm p-6 relative overflow-hidden font-outfit text-left" };
const _hoisted_12 = { class: "flex items-center justify-between mb-6" };
const _hoisted_13 = { class: "flex items-center space-x-2.5" };
const _hoisted_14 = { class: "p-2 bg-blue-50/60 border border-blue-100/50 rounded-xl text-blue-600" };
const _hoisted_15 = { class: "h-64 flex items-end justify-between space-x-1.5 px-2" };
const _hoisted_16 = { class: "absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2.5 py-1.5 bg-slate-800 text-white text-[10px] rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-10 shadow-lg font-medium border border-slate-700" };
const _hoisted_17 = { class: "flex justify-between mt-5 px-2 text-[10px] font-semibold text-slate-400 uppercase tracking-wider" };
const _hoisted_18 = { class: "bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden relative font-outfit text-left" };
const _hoisted_19 = { class: "px-6 py-5 border-b border-slate-100 flex items-center space-x-2.5 bg-slate-50/30" };
const _hoisted_20 = { class: "p-2 bg-purple-50/60 border border-purple-100/50 rounded-xl text-purple-600" };
const _hoisted_21 = { class: "p-5" };
const _hoisted_22 = {
  key: 0,
  class: "py-12 text-center"
};
const _hoisted_23 = { class: "mx-auto w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center mb-3 border border-slate-200" };
const _hoisted_24 = {
  key: 1,
  class: "space-y-3"
};
const _hoisted_25 = { class: "flex items-center space-x-3 min-w-0" };
const _hoisted_26 = { class: "w-9 h-9 rounded-xl bg-purple-50/80 border border-purple-100/50 text-purple-600 flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-purple-600 group-hover:to-indigo-500 group-hover:text-white transition-all duration-350 flex-shrink-0" };
const _hoisted_27 = { class: "min-w-0 text-left" };
const _hoisted_28 = { class: "text-xs font-semibold text-slate-800 block truncate leading-snug" };
const _hoisted_29 = { class: "text-[9px] uppercase font-semibold text-slate-400 tracking-wider leading-none mt-1 block" };
const _hoisted_30 = { class: "bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden relative font-outfit text-left" };
const _hoisted_31 = { class: "px-6 py-5 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-slate-50/30" };
const _hoisted_32 = { class: "flex items-center space-x-2.5" };
const _hoisted_33 = { class: "p-2 bg-emerald-50/60 border border-emerald-100/50 rounded-xl text-emerald-600" };
const _hoisted_34 = { class: "overflow-x-auto" };
const _hoisted_35 = { class: "w-full text-left" };
const _hoisted_36 = { class: "divide-y divide-slate-50" };
const _hoisted_37 = { key: 0 };
const _hoisted_38 = { class: "px-6 py-4.5" };
const _hoisted_39 = { class: "flex items-center space-x-3" };
const _hoisted_40 = { class: "w-8 h-8 rounded-xl bg-slate-50 border border-slate-100 text-slate-400 flex items-center justify-center group-hover:bg-emerald-50 group-hover:text-emerald-600 group-hover:border-emerald-100 transition-all duration-300" };
const _hoisted_41 = { class: "text-xs font-semibold text-slate-800" };
const _hoisted_42 = { class: "px-6 py-4.5 text-xs font-semibold text-slate-600" };
const _hoisted_43 = { class: "px-6 py-4.5" };
const _hoisted_44 = { class: "px-6 py-4.5 text-xs font-semibold text-slate-400 text-right" };
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
        bgClass: "bg-blue-50/50 border-blue-100/50",
        iconClass: "text-blue-600"
      },
      {
        label: "Study Hours",
        value: analyticsData.value?.total_study_hours || 0,
        icon: Clock,
        bgClass: "bg-purple-50/50 border-purple-100/50",
        iconClass: "text-purple-600"
      },
      {
        label: "Active Books",
        value: analyticsData.value?.active_reservations || 0,
        icon: BookMarked,
        bgClass: "bg-amber-50/50 border-amber-100/50",
        iconClass: "text-amber-600"
      },
      {
        label: "Study Streak",
        value: (analyticsData.value?.study_streak || 0) + " Days",
        icon: Flame,
        bgClass: "bg-orange-50/50 border-orange-100/50",
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
          return "bg-emerald-50 text-emerald-700 border-emerald-100/50";
        case "active":
        case "checked_in":
          return "bg-blue-50 text-blue-700 border-blue-100/50";
        case "pending":
        case "booked":
          return "bg-amber-50 text-amber-700 border-amber-100/50";
        case "cancelled":
          return "bg-red-50 text-red-700 border-red-100/50";
        default:
          return "bg-slate-50 text-slate-700 border-slate-100/50";
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
          createBaseVNode("button", {
            onClick: fetchAnalytics,
            disabled: loading.value,
            class: "flex items-center space-x-2 px-3.5 py-2 bg-white hover:bg-slate-50 text-slate-600 rounded-xl text-xs font-semibold border border-slate-200 shadow-sm active:scale-98 transition-all disabled:opacity-50",
            title: "Refresh Data"
          }, [
            createVNode(unref(RefreshCw), {
              class: normalizeClass(["w-3.5 h-3.5 text-slate-500", loading.value ? "animate-spin" : ""])
            }, null, 8, ["class"]),
            createBaseVNode("span", null, toDisplayString(loading.value ? "Refreshing..." : "Refresh Data"), 1)
          ], 8, _hoisted_3)
        ]),
        loading.value && !analyticsData.value ? (openBlock(), createElementBlock("div", _hoisted_4, [..._cache[0] || (_cache[0] = [
          createBaseVNode("div", { class: "animate-spin rounded-full h-10 w-10 border-2 border-blue-600 border-t-transparent" }, null, -1),
          createBaseVNode("p", { class: "text-xs font-semibold text-slate-400 font-outfit uppercase tracking-wider animate-pulse" }, "Loading analytics...", -1)
        ])])) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
          createBaseVNode("div", _hoisted_5, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(statsCards.value, (stat) => {
              return openBlock(), createElementBlock("div", {
                key: stat.label,
                class: "bg-white px-4 py-4 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 hover-lift group text-left"
              }, [
                createBaseVNode("div", _hoisted_6, [
                  createBaseVNode("div", {
                    class: normalizeClass(["p-2.5 rounded-xl border flex-shrink-0", stat.bgClass])
                  }, [
                    (openBlock(), createBlock(resolveDynamicComponent(stat.icon), {
                      class: normalizeClass(["w-5 h-5", stat.iconClass])
                    }, null, 8, ["class"]))
                  ], 2),
                  createBaseVNode("div", _hoisted_7, [
                    createBaseVNode("p", _hoisted_8, toDisplayString(stat.label), 1),
                    createBaseVNode("h3", _hoisted_9, toDisplayString(stat.value), 1)
                  ])
                ])
              ]);
            }), 128))
          ]),
          createBaseVNode("div", _hoisted_10, [
            createBaseVNode("div", _hoisted_11, [
              createBaseVNode("div", _hoisted_12, [
                createBaseVNode("div", _hoisted_13, [
                  createBaseVNode("div", _hoisted_14, [
                    createVNode(unref(TrendingUp), { class: "w-4.5 h-4.5" })
                  ]),
                  _cache[1] || (_cache[1] = createBaseVNode("h3", { class: "font-semibold text-slate-800 text-sm" }, "Study Frequency (Last 30 Days)", -1))
                ])
              ]),
              createBaseVNode("div", _hoisted_15, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(monthlyTrends.value, (day, index) => {
                  return openBlock(), createElementBlock("div", {
                    key: index,
                    class: "flex-1 flex flex-col items-center group relative h-full justify-end"
                  }, [
                    createBaseVNode("div", {
                      class: "w-full bg-gradient-to-t from-blue-600 to-blue-400 rounded-t-md transition-all duration-300 hover:opacity-85 hover:scale-x-105 cursor-pointer",
                      style: normalizeStyle({ height: day.count / maxTrendCount.value * 100 + "%" })
                    }, [
                      createBaseVNode("div", _hoisted_16, toDisplayString(formatDateShort(day.date)) + ": " + toDisplayString(day.count) + " Bookings ", 1)
                    ], 4)
                  ]);
                }), 128))
              ]),
              createBaseVNode("div", _hoisted_17, [
                createBaseVNode("span", null, toDisplayString(formatDateShort(monthlyTrends.value[0]?.date)), 1),
                createBaseVNode("span", null, toDisplayString(formatDateShort(monthlyTrends.value[monthlyTrends.value.length - 1]?.date)), 1)
              ])
            ]),
            createBaseVNode("div", _hoisted_18, [
              createBaseVNode("div", _hoisted_19, [
                createBaseVNode("div", _hoisted_20, [
                  createVNode(unref(MapPin), { class: "w-4.5 h-4.5" })
                ]),
                _cache[2] || (_cache[2] = createBaseVNode("h3", { class: "font-semibold text-slate-800 text-sm" }, "Favorite Spots", -1))
              ]),
              createBaseVNode("div", _hoisted_21, [
                topLibraries.value.length === 0 ? (openBlock(), createElementBlock("div", _hoisted_22, [
                  createBaseVNode("div", _hoisted_23, [
                    createVNode(unref(Library), { class: "w-5 h-5 text-slate-400" })
                  ]),
                  _cache[3] || (_cache[3] = createBaseVNode("p", { class: "text-xs text-slate-400 italic" }, "No library visits yet.", -1))
                ])) : (openBlock(), createElementBlock("div", _hoisted_24, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(topLibraries.value, (lib) => {
                    return openBlock(), createBlock(_component_router_link, {
                      key: lib.id,
                      to: `/student/libraries/${lib.id}`,
                      class: "p-3.5 rounded-xl border border-slate-100 bg-slate-50/50 hover:border-purple-200 hover:bg-white transition-all duration-300 flex items-center justify-between group cursor-pointer block"
                    }, {
                      default: withCtx(() => [
                        createBaseVNode("div", _hoisted_25, [
                          createBaseVNode("div", _hoisted_26, [
                            createVNode(unref(Building2), { class: "w-4.5 h-4.5" })
                          ]),
                          createBaseVNode("div", _hoisted_27, [
                            createBaseVNode("span", _hoisted_28, toDisplayString(lib.name), 1),
                            createBaseVNode("span", _hoisted_29, toDisplayString(lib.bookings_count) + " Visits", 1)
                          ])
                        ]),
                        createVNode(unref(ChevronRight), { class: "w-4 h-4 text-slate-300 group-hover:text-purple-600 group-hover:translate-x-0.5 transition-all" })
                      ]),
                      _: 2
                    }, 1032, ["to"]);
                  }), 128))
                ]))
              ])
            ])
          ]),
          createBaseVNode("div", _hoisted_30, [
            createBaseVNode("div", _hoisted_31, [
              createBaseVNode("div", _hoisted_32, [
                createBaseVNode("div", _hoisted_33, [
                  createVNode(unref(Activity), { class: "w-4.5 h-4.5" })
                ]),
                _cache[4] || (_cache[4] = createBaseVNode("h3", { class: "font-semibold text-slate-800 text-sm" }, "Recent Activity", -1))
              ]),
              createVNode(_component_router_link, {
                to: "/student/libraries",
                class: "text-[10px] font-semibold text-emerald-600 hover:text-emerald-700 uppercase tracking-widest bg-emerald-50 hover:bg-emerald-100 px-3 py-1.5 rounded-lg border border-emerald-200 transition-colors"
              }, {
                default: withCtx(() => [..._cache[5] || (_cache[5] = [
                  createTextVNode(" Book New Seat ", -1)
                ])]),
                _: 1
              })
            ]),
            createBaseVNode("div", _hoisted_34, [
              createBaseVNode("table", _hoisted_35, [
                _cache[7] || (_cache[7] = createBaseVNode("thead", null, [
                  createBaseVNode("tr", { class: "bg-slate-50/50 border-b border-slate-100 text-slate-400 text-[10px] font-semibold uppercase tracking-wider" }, [
                    createBaseVNode("th", { class: "px-6 py-3.5" }, "Library"),
                    createBaseVNode("th", { class: "px-6 py-3.5" }, "Seat"),
                    createBaseVNode("th", { class: "px-6 py-3.5" }, "Status"),
                    createBaseVNode("th", { class: "px-6 py-3.5 text-right" }, "Date")
                  ])
                ], -1)),
                createBaseVNode("tbody", _hoisted_36, [
                  recentBookings.value.length === 0 ? (openBlock(), createElementBlock("tr", _hoisted_37, [..._cache[6] || (_cache[6] = [
                    createBaseVNode("td", {
                      colspan: "4",
                      class: "px-6 py-10 text-center text-slate-400 italic text-xs"
                    }, "No recent bookings found.", -1)
                  ])])) : createCommentVNode("", true),
                  (openBlock(true), createElementBlock(Fragment, null, renderList(recentBookings.value, (booking) => {
                    return openBlock(), createElementBlock("tr", {
                      key: booking.id,
                      class: "hover:bg-slate-50/30 transition-colors group"
                    }, [
                      createBaseVNode("td", _hoisted_38, [
                        createBaseVNode("div", _hoisted_39, [
                          createBaseVNode("div", _hoisted_40, [
                            createVNode(unref(Building2), { class: "w-4.5 h-4.5" })
                          ]),
                          createBaseVNode("span", _hoisted_41, toDisplayString(booking.library?.name), 1)
                        ])
                      ]),
                      createBaseVNode("td", _hoisted_42, "Seat #" + toDisplayString(booking.seat?.seat_number), 1),
                      createBaseVNode("td", _hoisted_43, [
                        createBaseVNode("span", {
                          class: normalizeClass(["px-2.5 py-1 rounded-lg text-[9px] font-semibold uppercase tracking-wider border", getStatusClass(booking.status)])
                        }, toDisplayString(booking.status.replace("_", " ")), 3)
                      ]),
                      createBaseVNode("td", _hoisted_44, toDisplayString(formatDate(booking.created_at)), 1)
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
const AnalyticsPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-f85baa08"]]);
export {
  AnalyticsPage as default
};
