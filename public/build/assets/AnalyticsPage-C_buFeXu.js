const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/ReportsPage-DIxwyWRG.js","assets/main-CP29_5Dg.js","assets/index-BtTtlEUl.css","assets/superadminApi-CcmpLCnf.js","assets/useSwal-pQW_XkRe.js","assets/library-BE73C1XE.js","assets/createLucideIcon-DTPudzWg.js","assets/chevron-down-Dov5TrDl.js","assets/zap-Cw81dnaS.js","assets/refresh-cw-DjzDyWQP.js","assets/sheet-BqlqKBOM.js","assets/file-text-CEutq3ZC.js","assets/printer-M9N6zifG.js","assets/book-marked-C5I1JbSo.js","assets/history-rVbaSFy5.js","assets/download-DNzBS0lf.js","assets/_plugin-vue_export-helper-1tPrXgE0.js","assets/ReportsPage-BloFjOCU.css"])))=>i.map(i=>d[i]);
import { d as defineComponent, r as ref, c as computed, E as watch, o as onMounted, a as createElementBlock, b as createBaseVNode, j as createCommentVNode, n as normalizeClass, f as createVNode, u as unref, p as withDirectives, D as vModelSelect, F as Fragment, k as renderList, t as toDisplayString, W as defineAsyncComponent, _ as __vitePreload, h as createBlock, m as resolveDynamicComponent, q as normalizeStyle, l as openBlock } from "./main-CP29_5Dg.js";
import { s as superadminAPI } from "./superadminApi-CcmpLCnf.js";
import { U as Users } from "./users-BL5Ms-cb.js";
import { B as BookOpen } from "./book-open-C5CD1i_v.js";
import { B as Building2 } from "./building-2-BCZNb8vB.js";
import { C as ChartColumn } from "./chart-column-DGWJzY33.js";
import { F as FileChartColumnIncreasing } from "./file-chart-column-increasing-B5HmjUSg.js";
import { R as RefreshCw } from "./refresh-cw-DjzDyWQP.js";
import { f as format } from "./format-CerZa7QB.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
/* empty css               */
import "./createLucideIcon-DTPudzWg.js";
import "./en-US-CtEcOBul.js";
const _hoisted_1 = { class: "space-y-6" };
const _hoisted_2 = { class: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4" };
const _hoisted_3 = { class: "flex items-center space-x-1.5 bg-slate-100 rounded-xl p-1 w-fit" };
const _hoisted_4 = {
  key: 0,
  class: "flex items-center space-x-3 sm:ml-auto"
};
const _hoisted_5 = ["disabled"];
const _hoisted_6 = {
  key: 0,
  class: "space-y-6"
};
const _hoisted_7 = { class: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" };
const _hoisted_8 = { class: "text-left" };
const _hoisted_9 = { class: "text-xs font-bold text-slate-400 uppercase tracking-widest" };
const _hoisted_10 = { class: "text-2xl font-black text-slate-800 mt-1.5" };
const _hoisted_11 = { class: "grid grid-cols-1 lg:grid-cols-3 gap-6" };
const _hoisted_12 = { class: "lg:col-span-2 bg-white rounded-2xl border border-slate-100 shadow-sm p-6 flex flex-col justify-between" };
const _hoisted_13 = { class: "flex items-center justify-between mb-6 text-left" };
const _hoisted_14 = { class: "h-64 flex items-end justify-between space-x-1.5 px-2" };
const _hoisted_15 = { class: "absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2.5 py-1.5 bg-slate-900 text-white text-[10px] rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-25 shadow-md font-bold" };
const _hoisted_16 = { class: "flex justify-between mt-4 text-[10px] text-slate-400 font-bold uppercase tracking-wider px-2" };
const _hoisted_17 = { class: "bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden flex flex-col justify-between" };
const _hoisted_18 = { class: "flex-1 flex flex-col justify-center min-h-[200px]" };
const _hoisted_19 = {
  key: 0,
  class: "p-8 text-center text-slate-400 font-medium"
};
const _hoisted_20 = {
  key: 1,
  class: "divide-y divide-slate-50 flex-1"
};
const _hoisted_21 = { class: "flex items-center space-x-3.5" };
const _hoisted_22 = { class: "w-8 h-8 rounded-lg bg-purple-50 flex items-center justify-center" };
const _hoisted_23 = { class: "text-xs font-bold text-slate-750" };
const _hoisted_24 = { class: "text-[10px] font-extrabold text-purple-700 bg-purple-50 border border-purple-100/60 px-2.5 py-1 rounded-full uppercase tracking-wider" };
const _hoisted_25 = { class: "bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden" };
const _hoisted_26 = { class: "overflow-x-auto" };
const _hoisted_27 = { class: "min-w-full divide-y divide-slate-100" };
const _hoisted_28 = { class: "divide-y divide-slate-50 bg-white" };
const _hoisted_29 = { class: "px-6 py-4 whitespace-nowrap" };
const _hoisted_30 = { class: "flex items-center space-x-3.5" };
const _hoisted_31 = { class: "w-8 h-8 rounded-lg bg-purple-50 border border-purple-200 text-purple-600 flex items-center justify-center text-xs font-bold" };
const _hoisted_32 = { class: "text-xs font-bold text-slate-700" };
const _hoisted_33 = { class: "px-6 py-4 whitespace-nowrap text-left text-xs font-semibold text-slate-600" };
const _hoisted_34 = { class: "px-6 py-4 whitespace-nowrap text-left text-xs font-semibold text-slate-600" };
const _hoisted_35 = { class: "px-6 py-4 whitespace-nowrap text-left" };
const _hoisted_36 = { class: "px-6 py-4 whitespace-nowrap text-left text-xs text-slate-500 font-medium" };
const _hoisted_37 = { key: 0 };
const _hoisted_38 = { key: 1 };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "AnalyticsPage",
  setup(__props) {
    const ReportsPage = defineAsyncComponent(() => __vitePreload(() => import("./ReportsPage-DIxwyWRG.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]) : void 0));
    const activeView = ref("analytics");
    const loading = ref(true);
    const analyticsData = ref(null);
    const monthlyBookings = ref([]);
    const topLibraries = ref([]);
    const recentBookings = ref([]);
    const selectedTrendRange = ref("month");
    const statsCards = computed(() => [
      {
        label: "Total Users",
        value: analyticsData.value?.total_users || 0,
        icon: Users,
        iconClass: "text-blue-600"
      },
      {
        label: "Total Bookings",
        value: analyticsData.value?.total_bookings || 0,
        icon: BookOpen,
        iconClass: "text-purple-600"
      },
      {
        label: "Active Libraries",
        value: analyticsData.value?.total_libraries || 0,
        icon: Building2,
        iconClass: "text-amber-600"
      }
    ]);
    const maxBookingCount = computed(() => {
      if (monthlyBookings.value.length === 0) return 1;
      return Math.max(...monthlyBookings.value.map((d) => d.count), 1);
    });
    const fetchAnalytics = async () => {
      try {
        loading.value = true;
        const data = await superadminAPI.getAnalytics({ range: selectedTrendRange.value });
        analyticsData.value = data.analytics;
        monthlyBookings.value = data.monthlyBookings || [];
        topLibraries.value = data.topLibraries || [];
        recentBookings.value = data.recentBookings || [];
      } catch (error) {
        console.error("Failed to fetch analytics:", error);
      } finally {
        loading.value = false;
      }
    };
    watch(selectedTrendRange, () => {
      fetchAnalytics();
    });
    const getStatusClass = (status) => {
      switch (status.toLowerCase()) {
        case "completed":
          return "bg-green-50 border-green-100 text-green-700";
        case "active":
        case "checked_in":
          return "bg-blue-50 border-blue-100 text-blue-700";
        case "pending":
        case "booked":
          return "bg-amber-55 border-amber-100 text-amber-700";
        case "cancelled":
          return "bg-red-50 border-red-100 text-red-700";
        default:
          return "bg-slate-50 border-slate-200 text-slate-500";
      }
    };
    const formatDate = (dateStr) => {
      if (!dateStr) return "";
      return format(new Date(dateStr), "MMM d, h:mm a");
    };
    onMounted(() => {
      fetchAnalytics();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("div", _hoisted_3, [
            createBaseVNode("button", {
              onClick: _cache[0] || (_cache[0] = ($event) => activeView.value = "analytics"),
              class: normalizeClass([
                "px-5 py-2.5 text-xs font-bold rounded-lg transition-all cursor-pointer flex items-center space-x-2",
                activeView.value === "analytics" ? "bg-white text-purple-700 shadow-sm border border-slate-200/40" : "text-slate-500 hover:text-slate-700"
              ])
            }, [
              createVNode(unref(ChartColumn), { class: "w-4 h-4" }),
              _cache[4] || (_cache[4] = createBaseVNode("span", null, "Analytics", -1))
            ], 2),
            createBaseVNode("button", {
              onClick: _cache[1] || (_cache[1] = ($event) => activeView.value = "reports"),
              class: normalizeClass([
                "px-5 py-2.5 text-xs font-bold rounded-lg transition-all cursor-pointer flex items-center space-x-2",
                activeView.value === "reports" ? "bg-white text-purple-700 shadow-sm border border-slate-200/40" : "text-slate-500 hover:text-slate-700"
              ])
            }, [
              createVNode(unref(FileChartColumnIncreasing), { class: "w-4 h-4" }),
              _cache[5] || (_cache[5] = createBaseVNode("span", null, "Reports", -1))
            ], 2)
          ]),
          activeView.value === "analytics" ? (openBlock(), createElementBlock("div", _hoisted_4, [
            withDirectives(createBaseVNode("select", {
              "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => selectedTrendRange.value = $event),
              class: "px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-400 bg-white text-xs font-semibold text-slate-600 cursor-pointer shadow-sm appearance-none pr-8 relative"
            }, [..._cache[6] || (_cache[6] = [
              createBaseVNode("option", { value: "today" }, "Today", -1),
              createBaseVNode("option", { value: "week" }, "Last 7 Days", -1),
              createBaseVNode("option", { value: "month" }, "Last 30 Days", -1),
              createBaseVNode("option", { value: "year" }, "Last Year", -1)
            ])], 512), [
              [vModelSelect, selectedTrendRange.value]
            ]),
            createBaseVNode("button", {
              onClick: fetchAnalytics,
              disabled: loading.value,
              class: "p-2.5 bg-white border border-slate-200 rounded-xl hover:bg-purple-50 hover:text-purple-600 transition-all cursor-pointer shadow-sm flex items-center justify-center disabled:opacity-50",
              title: "Refresh Data"
            }, [
              createVNode(unref(RefreshCw), {
                class: normalizeClass(["w-4 h-4 text-slate-500", loading.value ? "animate-spin" : ""])
              }, null, 8, ["class"])
            ], 8, _hoisted_5)
          ])) : createCommentVNode("", true)
        ]),
        activeView.value === "analytics" ? (openBlock(), createElementBlock("div", _hoisted_6, [
          createBaseVNode("div", _hoisted_7, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(statsCards.value, (stat) => {
              return openBlock(), createElementBlock("div", {
                key: stat.label,
                class: "bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex items-center justify-between"
              }, [
                createBaseVNode("div", _hoisted_8, [
                  createBaseVNode("p", _hoisted_9, toDisplayString(stat.label), 1),
                  createBaseVNode("h3", _hoisted_10, toDisplayString(stat.value), 1)
                ]),
                createBaseVNode("div", {
                  class: normalizeClass(["p-3.5 rounded-xl bg-slate-50", stat.iconClass])
                }, [
                  (openBlock(), createBlock(resolveDynamicComponent(stat.icon), { class: "w-5 h-5" }))
                ], 2)
              ]);
            }), 128))
          ]),
          createBaseVNode("div", _hoisted_11, [
            createBaseVNode("div", _hoisted_12, [
              createBaseVNode("div", _hoisted_13, [
                _cache[8] || (_cache[8] = createBaseVNode("h3", { class: "text-sm font-bold text-slate-700 uppercase tracking-wider" }, "Booking Trends", -1)),
                withDirectives(createBaseVNode("select", {
                  "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => selectedTrendRange.value = $event),
                  class: "px-3.5 py-1.5 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-600 focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 outline-none cursor-pointer"
                }, [..._cache[7] || (_cache[7] = [
                  createBaseVNode("option", { value: "today" }, "Today", -1),
                  createBaseVNode("option", { value: "week" }, "Last 7 Days", -1),
                  createBaseVNode("option", { value: "month" }, "Last 30 Days", -1),
                  createBaseVNode("option", { value: "year" }, "Last Year", -1)
                ])], 512), [
                  [vModelSelect, selectedTrendRange.value]
                ])
              ]),
              createBaseVNode("div", _hoisted_14, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(monthlyBookings.value, (day, index) => {
                  return openBlock(), createElementBlock("div", {
                    key: index,
                    class: "flex-1 flex flex-col items-center group relative h-full justify-end"
                  }, [
                    createBaseVNode("div", {
                      class: "w-full bg-gradient-to-t from-purple-600 to-fuchsia-600 rounded-t-lg transition-all duration-300 hover:from-purple-700 hover:to-fuchsia-700 cursor-pointer shadow-sm",
                      style: normalizeStyle({ height: day.count / maxBookingCount.value * 100 + "%" })
                    }, [
                      createBaseVNode("div", _hoisted_15, toDisplayString(day.date) + ": " + toDisplayString(day.count) + " bookings ", 1)
                    ], 4)
                  ]);
                }), 128))
              ]),
              createBaseVNode("div", _hoisted_16, [
                createBaseVNode("span", null, toDisplayString(monthlyBookings.value[0]?.date), 1),
                createBaseVNode("span", null, toDisplayString(monthlyBookings.value[Math.floor(monthlyBookings.value.length / 2)]?.date), 1),
                createBaseVNode("span", null, toDisplayString(monthlyBookings.value[monthlyBookings.value.length - 1]?.date), 1)
              ])
            ]),
            createBaseVNode("div", _hoisted_17, [
              _cache[10] || (_cache[10] = createBaseVNode("div", { class: "px-6 py-5 border-b border-slate-50 text-left" }, [
                createBaseVNode("h3", { class: "text-sm font-bold text-slate-700 uppercase tracking-wider" }, "Top Libraries")
              ], -1)),
              createBaseVNode("div", _hoisted_18, [
                topLibraries.value.length === 0 ? (openBlock(), createElementBlock("div", _hoisted_19, [
                  createVNode(unref(Building2), { class: "w-8 h-8 text-slate-350 mx-auto mb-2" }),
                  _cache[9] || (_cache[9] = createBaseVNode("span", null, "No data available", -1))
                ])) : (openBlock(), createElementBlock("div", _hoisted_20, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(topLibraries.value, (library) => {
                    return openBlock(), createElementBlock("div", {
                      key: library.id,
                      class: "px-6 py-4.5 flex items-center justify-between hover:bg-slate-50/30 transition-colors"
                    }, [
                      createBaseVNode("div", _hoisted_21, [
                        createBaseVNode("div", _hoisted_22, [
                          createVNode(unref(Building2), { class: "w-4 h-4 text-purple-600" })
                        ]),
                        createBaseVNode("span", _hoisted_23, toDisplayString(library.name), 1)
                      ]),
                      createBaseVNode("span", _hoisted_24, toDisplayString(library.seat_bookings_count) + " Bookings ", 1)
                    ]);
                  }), 128))
                ]))
              ])
            ])
          ]),
          createBaseVNode("div", _hoisted_25, [
            _cache[13] || (_cache[13] = createBaseVNode("div", { class: "px-6 py-5 border-b border-slate-50 text-left" }, [
              createBaseVNode("h3", { class: "text-sm font-bold text-slate-700 uppercase tracking-wider" }, "Recent System Activity")
            ], -1)),
            createBaseVNode("div", _hoisted_26, [
              createBaseVNode("table", _hoisted_27, [
                _cache[12] || (_cache[12] = createBaseVNode("thead", { class: "bg-gray-50/50" }, [
                  createBaseVNode("tr", null, [
                    createBaseVNode("th", {
                      scope: "col",
                      class: "px-6 py-4 text-left text-xs font-semibold text-slate-400 uppercase tracking-widest"
                    }, "User"),
                    createBaseVNode("th", {
                      scope: "col",
                      class: "px-6 py-4 text-left text-xs font-semibold text-slate-400 uppercase tracking-widest"
                    }, "Library"),
                    createBaseVNode("th", {
                      scope: "col",
                      class: "px-6 py-4 text-left text-xs font-semibold text-slate-400 uppercase tracking-widest"
                    }, "Seat"),
                    createBaseVNode("th", {
                      scope: "col",
                      class: "px-6 py-4 text-left text-xs font-semibold text-slate-400 uppercase tracking-widest"
                    }, "Status"),
                    createBaseVNode("th", {
                      scope: "col",
                      class: "px-6 py-4 text-left text-xs font-semibold text-slate-400 uppercase tracking-widest"
                    }, "Date")
                  ])
                ], -1)),
                createBaseVNode("tbody", _hoisted_28, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(recentBookings.value, (booking) => {
                    return openBlock(), createElementBlock("tr", {
                      key: booking.id,
                      class: "hover:bg-slate-50/50 transition-colors"
                    }, [
                      createBaseVNode("td", _hoisted_29, [
                        createBaseVNode("div", _hoisted_30, [
                          createBaseVNode("div", _hoisted_31, toDisplayString(booking.user?.name?.charAt(0).toUpperCase()), 1),
                          createBaseVNode("span", _hoisted_32, toDisplayString(booking.user?.name), 1)
                        ])
                      ]),
                      createBaseVNode("td", _hoisted_33, toDisplayString(booking.library?.name), 1),
                      createBaseVNode("td", _hoisted_34, " Seat " + toDisplayString(booking.seat?.seat_number), 1),
                      createBaseVNode("td", _hoisted_35, [
                        createBaseVNode("span", {
                          class: normalizeClass([
                            "text-[9px] font-semibold px-2.5 py-1 rounded-full uppercase tracking-wider border",
                            getStatusClass(booking.status)
                          ])
                        }, toDisplayString(booking.status), 3)
                      ]),
                      createBaseVNode("td", _hoisted_36, toDisplayString(formatDate(booking.created_at)), 1)
                    ]);
                  }), 128)),
                  recentBookings.value.length === 0 && !loading.value ? (openBlock(), createElementBlock("tr", _hoisted_37, [..._cache[11] || (_cache[11] = [
                    createBaseVNode("td", {
                      colspan: "5",
                      class: "px-6 py-12 text-center text-slate-400 font-medium"
                    }, " No recent activity records available. ", -1)
                  ])])) : createCommentVNode("", true)
                ])
              ])
            ])
          ])
        ])) : createCommentVNode("", true),
        activeView.value === "reports" ? (openBlock(), createElementBlock("div", _hoisted_38, [
          createVNode(unref(ReportsPage))
        ])) : createCommentVNode("", true)
      ]);
    };
  }
});
const AnalyticsPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-1d5f6dbb"]]);
export {
  AnalyticsPage as default
};
