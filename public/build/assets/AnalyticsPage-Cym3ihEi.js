import { d as defineComponent, r as ref, a as computed, C as Clock, o as onMounted, b as createElementBlock, e as createBaseVNode, g as createVNode, p as createCommentVNode, s as withDirectives, v as vModelText, n as normalizeClass, u as unref, R as RefreshCw, F as Fragment, k as renderList, t as toDisplayString, w as withCtx, h as resolveComponent, j as createTextVNode, S as studentAPI, i as createBlock, q as resolveDynamicComponent, m as openBlock, _ as _export_sfc } from "./main-BeUqjoax.js";
import { _ as _sfc_main$1 } from "./TimeFrameSelector.vue_vue_type_script_setup_true_lang-CX4H30D4.js";
import { B as BookingTrendsChart } from "./BookingTrendsChart-D-MZ0rBP.js";
import { C as Calendar } from "./calendar-C4MEAYqh.js";
import { B as BookMarked } from "./book-marked-BJVQnqwP.js";
import { F as Flame } from "./flame-9rjklnu_.js";
import { T as TrendingUp } from "./trending-up-BPT833jM.js";
import { M as MapPin } from "./map-pin-hjTU3OTG.js";
import { L as Library } from "./library-mCkj7erK.js";
import { A as Activity } from "./activity-CEq8i_lQ.js";
import { C as ChevronLeft } from "./chevron-left-BTBU4JGM.js";
import { C as ChevronRight } from "./chevron-right-DeJ1LBg1.js";
import { B as Building2 } from "./building-2-obFScNkw.js";
import { f as format } from "./format-DBvmWExF.js";
/* empty css               */
import "./chevron-down-DgPiBWjn.js";
import "./check-CZ9YO2_d.js";
import "./en-US-Cfx__x1z.js";
import "./normalizeDates-KHLYxtAK.js";
const _hoisted_1 = { class: "space-y-6" };
const _hoisted_2 = { class: "flex flex-col sm:flex-row sm:items-center justify-end gap-3 font-outfit" };
const _hoisted_3 = { class: "flex flex-wrap items-center gap-2 sm:ml-auto" };
const _hoisted_4 = {
  key: 0,
  class: "flex items-center gap-1.5"
};
const _hoisted_5 = ["disabled"];
const _hoisted_6 = {
  key: 0,
  class: "flex flex-col items-center justify-center py-24 space-y-4"
};
const _hoisted_7 = { class: "grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 font-outfit" };
const _hoisted_8 = { class: "flex items-center justify-between gap-1.5 mb-1.5" };
const _hoisted_9 = { class: "text-[10px] sm:text-[11px] font-bold text-slate-400 uppercase tracking-wider leading-snug" };
const _hoisted_10 = { class: "mt-auto" };
const _hoisted_11 = { class: "text-xl sm:text-2xl md:text-3xl font-bold text-slate-800 leading-tight tracking-tight" };
const _hoisted_12 = { class: "grid grid-cols-1 lg:grid-cols-3 gap-6" };
const _hoisted_13 = { class: "lg:col-span-2 bg-white rounded-2xl border border-slate-100 shadow-sm p-6 relative overflow-hidden font-outfit text-left" };
const _hoisted_14 = { class: "flex items-center justify-between mb-4" };
const _hoisted_15 = { class: "flex items-center space-x-2.5" };
const _hoisted_16 = { class: "p-2 bg-blue-50/60 border border-blue-100/50 rounded-xl text-blue-600" };
const _hoisted_17 = { class: "font-bold text-slate-800 text-sm" };
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
const _hoisted_31 = { class: "px-5 py-4 sm:px-6 sm:py-5 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-slate-50/30" };
const _hoisted_32 = { class: "flex items-center space-x-2.5" };
const _hoisted_33 = { class: "p-2 bg-emerald-50/60 border border-emerald-100/50 rounded-xl text-emerald-600" };
const _hoisted_34 = { class: "block md:hidden p-3.5 space-y-3 bg-slate-50/60" };
const _hoisted_35 = {
  key: 0,
  class: "p-6 text-center text-slate-400 italic text-xs bg-white rounded-xl border border-slate-200/70"
};
const _hoisted_36 = { class: "flex items-center justify-between gap-2" };
const _hoisted_37 = { class: "flex items-center space-x-2.5 min-w-0" };
const _hoisted_38 = { class: "w-8 h-8 rounded-xl bg-blue-50/70 border border-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0" };
const _hoisted_39 = { class: "text-xs font-bold text-slate-800 truncate" };
const _hoisted_40 = { class: "flex items-center justify-between text-[11px] pt-2 border-t border-slate-100" };
const _hoisted_41 = { class: "flex items-center space-x-1.5" };
const _hoisted_42 = { class: "font-bold text-slate-700 bg-slate-100 px-2 py-0.5 rounded-md text-[10px] border border-slate-200/60" };
const _hoisted_43 = { class: "font-semibold text-slate-400 text-[10px] uppercase tracking-wider" };
const _hoisted_44 = { class: "hidden md:block overflow-x-auto" };
const _hoisted_45 = { class: "w-full text-left" };
const _hoisted_46 = { class: "divide-y divide-slate-50" };
const _hoisted_47 = { key: 0 };
const _hoisted_48 = { class: "px-6 py-4.5" };
const _hoisted_49 = { class: "flex items-center space-x-3" };
const _hoisted_50 = { class: "w-8 h-8 rounded-xl bg-slate-50 border border-slate-100 text-slate-400 flex items-center justify-center group-hover:bg-emerald-50 group-hover:text-emerald-600 group-hover:border-emerald-100 transition-all duration-300" };
const _hoisted_51 = { class: "text-xs font-bold text-slate-800" };
const _hoisted_52 = { class: "px-6 py-4.5 text-xs font-bold text-slate-600" };
const _hoisted_53 = { class: "px-6 py-4.5" };
const _hoisted_54 = { class: "px-6 py-4.5 text-xs font-bold text-slate-400 text-right" };
const _hoisted_55 = {
  key: 0,
  class: "px-6 py-3.5 bg-slate-50/50 border-t border-slate-100 flex items-center justify-between font-outfit"
};
const _hoisted_56 = { class: "text-xs text-slate-500 font-medium" };
const _hoisted_57 = { class: "font-bold text-slate-700" };
const _hoisted_58 = { class: "font-bold text-slate-700" };
const _hoisted_59 = { class: "font-bold text-slate-700" };
const _hoisted_60 = { class: "flex items-center space-x-1.5" };
const _hoisted_61 = ["disabled"];
const _hoisted_62 = { class: "text-xs font-bold text-slate-700 px-3 py-1 bg-white border border-slate-200 rounded-lg shadow-2xs" };
const _hoisted_63 = ["disabled"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "AnalyticsPage",
  setup(__props) {
    const loading = ref(true);
    const timeRange = ref("this_month");
    const fromDate = ref("");
    const toDate = ref("");
    const analyticsData = ref(null);
    const monthlyTrends = ref([]);
    const topLibraries = ref([]);
    const recentBookings = ref([]);
    const currentPage = ref(1);
    const itemsPerPage = ref(5);
    const totalPages = computed(() => Math.ceil(recentBookings.value.length / itemsPerPage.value) || 1);
    const paginatedBookings = computed(() => {
      const start = (currentPage.value - 1) * itemsPerPage.value;
      return recentBookings.value.slice(start, start + itemsPerPage.value);
    });
    const paginationStart = computed(() => {
      if (recentBookings.value.length === 0) return 0;
      return (currentPage.value - 1) * itemsPerPage.value + 1;
    });
    const paginationEnd = computed(() => {
      return Math.min(currentPage.value * itemsPerPage.value, recentBookings.value.length);
    });
    const monthlyTrendsChartData = computed(() => {
      return monthlyTrends.value.map((item) => ({
        label: item.label || formatDateShort(item.date),
        value: item.count || 0
      }));
    });
    const chartTitle = computed(() => {
      switch (timeRange.value) {
        case "today":
        case "this_month":
          return "Study Frequency (This Month)";
        case "yesterday":
          return "Study Frequency (Yesterday)";
        case "last_month":
          return "Study Frequency (Last Month)";
        case "this_year":
          return "Study Frequency (This Year)";
        case "custom":
          return "Study Frequency (Custom Range)";
        case "all":
          return "Study Frequency (All Time)";
        default:
          return "Study Frequency";
      }
    });
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
    computed(() => {
      if (monthlyTrends.value.length === 0) return 1;
      return Math.max(...monthlyTrends.value.map((d) => d.count), 1);
    });
    const fetchAnalytics = async () => {
      try {
        loading.value = true;
        const params = {
          timeRange: timeRange.value,
          range: timeRange.value
        };
        if (timeRange.value === "custom" && fromDate.value && toDate.value) {
          params.from_date = fromDate.value;
          params.to_date = toDate.value;
        }
        const data = await studentAPI.getAnalytics(params);
        analyticsData.value = data.stats;
        monthlyTrends.value = data.monthlyTrends || [];
        topLibraries.value = data.topLibraries || [];
        recentBookings.value = data.recentBookings || [];
        currentPage.value = 1;
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
          createBaseVNode("div", _hoisted_3, [
            createVNode(_sfc_main$1, {
              modelValue: timeRange.value,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => timeRange.value = $event),
              onChange: fetchAnalytics
            }, null, 8, ["modelValue"]),
            timeRange.value === "custom" ? (openBlock(), createElementBlock("div", _hoisted_4, [
              withDirectives(createBaseVNode("input", {
                type: "date",
                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => fromDate.value = $event),
                onChange: fetchAnalytics,
                class: "px-3 py-1.5 bg-white border border-slate-200 rounded-xl text-xs font-semibold text-slate-700 outline-none focus:ring-2 focus:ring-blue-500/20 shadow-2xs"
              }, null, 544), [
                [vModelText, fromDate.value]
              ]),
              _cache[5] || (_cache[5] = createBaseVNode("span", { class: "text-xs text-slate-400 font-bold" }, "to", -1)),
              withDirectives(createBaseVNode("input", {
                type: "date",
                "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => toDate.value = $event),
                onChange: fetchAnalytics,
                class: "px-3 py-1.5 bg-white border border-slate-200 rounded-xl text-xs font-semibold text-slate-700 outline-none focus:ring-2 focus:ring-blue-500/20 shadow-2xs"
              }, null, 544), [
                [vModelText, toDate.value]
              ])
            ])) : createCommentVNode("", true),
            createBaseVNode("button", {
              onClick: fetchAnalytics,
              disabled: loading.value,
              class: "p-2.5 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors cursor-pointer shadow-sm flex items-center justify-center text-slate-600",
              title: "Refresh Data"
            }, [
              createVNode(unref(RefreshCw), {
                class: normalizeClass(["w-4 h-4 text-slate-500", loading.value ? "animate-spin" : ""])
              }, null, 8, ["class"])
            ], 8, _hoisted_5)
          ])
        ]),
        loading.value && !analyticsData.value ? (openBlock(), createElementBlock("div", _hoisted_6, [..._cache[6] || (_cache[6] = [
          createBaseVNode("div", { class: "animate-spin rounded-full h-10 w-10 border-2 border-blue-600 border-t-transparent" }, null, -1),
          createBaseVNode("p", { class: "text-xs font-semibold text-slate-400 font-outfit uppercase tracking-wider animate-pulse" }, "Loading analytics...", -1)
        ])])) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
          createBaseVNode("div", _hoisted_7, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(statsCards.value, (stat) => {
              return openBlock(), createElementBlock("div", {
                key: stat.label,
                class: "bg-white p-3.5 sm:p-5 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 hover-lift group text-left flex flex-col justify-between"
              }, [
                createBaseVNode("div", _hoisted_8, [
                  createBaseVNode("span", _hoisted_9, toDisplayString(stat.label), 1),
                  createBaseVNode("div", {
                    class: normalizeClass(["p-1.5 sm:p-2.5 rounded-xl border flex-shrink-0", stat.bgClass])
                  }, [
                    (openBlock(), createBlock(resolveDynamicComponent(stat.icon), {
                      class: normalizeClass(["w-4 h-4 sm:w-5 sm:h-5", stat.iconClass])
                    }, null, 8, ["class"]))
                  ], 2)
                ]),
                createBaseVNode("div", _hoisted_10, [
                  createBaseVNode("h3", _hoisted_11, toDisplayString(stat.value), 1)
                ])
              ]);
            }), 128))
          ]),
          createBaseVNode("div", _hoisted_12, [
            createBaseVNode("div", _hoisted_13, [
              createBaseVNode("div", _hoisted_14, [
                createBaseVNode("div", _hoisted_15, [
                  createBaseVNode("div", _hoisted_16, [
                    createVNode(unref(TrendingUp), { class: "w-4.5 h-4.5" })
                  ]),
                  createBaseVNode("h3", _hoisted_17, toDisplayString(chartTitle.value), 1)
                ])
              ]),
              createVNode(BookingTrendsChart, {
                data: monthlyTrendsChartData.value,
                "x-key": "label",
                "y-key": "value",
                label: "Bookings",
                color: "#2563eb"
              }, null, 8, ["data"])
            ]),
            createBaseVNode("div", _hoisted_18, [
              createBaseVNode("div", _hoisted_19, [
                createBaseVNode("div", _hoisted_20, [
                  createVNode(unref(MapPin), { class: "w-4.5 h-4.5" })
                ]),
                _cache[7] || (_cache[7] = createBaseVNode("h3", { class: "font-bold text-slate-800 text-sm" }, "Favorite Spots", -1))
              ]),
              createBaseVNode("div", _hoisted_21, [
                topLibraries.value.length === 0 ? (openBlock(), createElementBlock("div", _hoisted_22, [
                  createBaseVNode("div", _hoisted_23, [
                    createVNode(unref(Library), { class: "w-5 h-5 text-slate-400" })
                  ]),
                  _cache[8] || (_cache[8] = createBaseVNode("p", { class: "text-xs text-slate-400 italic" }, "No library visits yet.", -1))
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
                _cache[9] || (_cache[9] = createBaseVNode("h3", { class: "font-bold text-slate-800 text-sm" }, "Recent Activity", -1))
              ]),
              createVNode(_component_router_link, {
                to: "/student/libraries",
                class: "text-[10px] font-semibold text-emerald-600 hover:text-emerald-700 uppercase tracking-widest bg-emerald-50 hover:bg-emerald-100 px-3 py-1.5 rounded-lg border border-emerald-200 transition-colors w-fit"
              }, {
                default: withCtx(() => [..._cache[10] || (_cache[10] = [
                  createTextVNode(" Book New Seat ", -1)
                ])]),
                _: 1
              })
            ]),
            createBaseVNode("div", _hoisted_34, [
              paginatedBookings.value.length === 0 ? (openBlock(), createElementBlock("div", _hoisted_35, " No recent bookings found. ")) : createCommentVNode("", true),
              (openBlock(true), createElementBlock(Fragment, null, renderList(paginatedBookings.value, (booking) => {
                return openBlock(), createElementBlock("div", {
                  key: "mobile-" + booking.id,
                  class: "bg-white rounded-xl border border-slate-200/90 p-3.5 shadow-xs hover:border-slate-300 transition-all flex flex-col gap-2.5"
                }, [
                  createBaseVNode("div", _hoisted_36, [
                    createBaseVNode("div", _hoisted_37, [
                      createBaseVNode("div", _hoisted_38, [
                        createVNode(unref(Building2), { class: "w-4 h-4" })
                      ]),
                      createBaseVNode("span", _hoisted_39, toDisplayString(booking.library?.name || "Library"), 1)
                    ]),
                    createBaseVNode("span", {
                      class: normalizeClass(["px-2.5 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider border flex-shrink-0 shadow-2xs", getStatusClass(booking.status)])
                    }, toDisplayString(booking.status.replace("_", " ")), 3)
                  ]),
                  createBaseVNode("div", _hoisted_40, [
                    createBaseVNode("div", _hoisted_41, [
                      _cache[11] || (_cache[11] = createBaseVNode("span", { class: "text-[10px] font-bold text-slate-400 uppercase tracking-wider" }, "Seat:", -1)),
                      createBaseVNode("span", _hoisted_42, " #" + toDisplayString(booking.seat?.seat_number || "N/A"), 1)
                    ]),
                    createBaseVNode("span", _hoisted_43, toDisplayString(formatDate(booking.created_at)), 1)
                  ])
                ]);
              }), 128))
            ]),
            createBaseVNode("div", _hoisted_44, [
              createBaseVNode("table", _hoisted_45, [
                _cache[13] || (_cache[13] = createBaseVNode("thead", null, [
                  createBaseVNode("tr", { class: "bg-slate-50/50 border-b border-slate-100 text-slate-400 text-[10px] font-semibold uppercase tracking-wider" }, [
                    createBaseVNode("th", { class: "px-6 py-3.5" }, "Library"),
                    createBaseVNode("th", { class: "px-6 py-3.5" }, "Seat"),
                    createBaseVNode("th", { class: "px-6 py-3.5" }, "Status"),
                    createBaseVNode("th", { class: "px-6 py-3.5 text-right" }, "Date")
                  ])
                ], -1)),
                createBaseVNode("tbody", _hoisted_46, [
                  paginatedBookings.value.length === 0 ? (openBlock(), createElementBlock("tr", _hoisted_47, [..._cache[12] || (_cache[12] = [
                    createBaseVNode("td", {
                      colspan: "4",
                      class: "px-6 py-10 text-center text-slate-400 italic text-xs"
                    }, "No recent bookings found.", -1)
                  ])])) : createCommentVNode("", true),
                  (openBlock(true), createElementBlock(Fragment, null, renderList(paginatedBookings.value, (booking) => {
                    return openBlock(), createElementBlock("tr", {
                      key: booking.id,
                      class: "hover:bg-slate-50/30 transition-colors group"
                    }, [
                      createBaseVNode("td", _hoisted_48, [
                        createBaseVNode("div", _hoisted_49, [
                          createBaseVNode("div", _hoisted_50, [
                            createVNode(unref(Building2), { class: "w-4.5 h-4.5" })
                          ]),
                          createBaseVNode("span", _hoisted_51, toDisplayString(booking.library?.name), 1)
                        ])
                      ]),
                      createBaseVNode("td", _hoisted_52, "Seat #" + toDisplayString(booking.seat?.seat_number), 1),
                      createBaseVNode("td", _hoisted_53, [
                        createBaseVNode("span", {
                          class: normalizeClass(["px-2.5 py-1 rounded-lg text-[9px] font-bold uppercase tracking-wider border", getStatusClass(booking.status)])
                        }, toDisplayString(booking.status.replace("_", " ")), 3)
                      ]),
                      createBaseVNode("td", _hoisted_54, toDisplayString(formatDate(booking.created_at)), 1)
                    ]);
                  }), 128))
                ])
              ])
            ]),
            recentBookings.value.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_55, [
              createBaseVNode("p", _hoisted_56, [
                _cache[14] || (_cache[14] = createTextVNode(" Showing ", -1)),
                createBaseVNode("span", _hoisted_57, toDisplayString(paginationStart.value), 1),
                _cache[15] || (_cache[15] = createTextVNode(" to ", -1)),
                createBaseVNode("span", _hoisted_58, toDisplayString(paginationEnd.value), 1),
                _cache[16] || (_cache[16] = createTextVNode(" of ", -1)),
                createBaseVNode("span", _hoisted_59, toDisplayString(recentBookings.value.length), 1),
                _cache[17] || (_cache[17] = createTextVNode(" entries ", -1))
              ]),
              createBaseVNode("div", _hoisted_60, [
                createBaseVNode("button", {
                  onClick: _cache[3] || (_cache[3] = ($event) => currentPage.value--),
                  disabled: currentPage.value === 1,
                  class: "p-1.5 rounded-lg border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition-all cursor-pointer shadow-xs",
                  title: "Previous Page"
                }, [
                  createVNode(unref(ChevronLeft), { class: "w-4 h-4" })
                ], 8, _hoisted_61),
                createBaseVNode("span", _hoisted_62, toDisplayString(currentPage.value) + " / " + toDisplayString(totalPages.value), 1),
                createBaseVNode("button", {
                  onClick: _cache[4] || (_cache[4] = ($event) => currentPage.value++),
                  disabled: currentPage.value === totalPages.value,
                  class: "p-1.5 rounded-lg border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition-all cursor-pointer shadow-xs",
                  title: "Next Page"
                }, [
                  createVNode(unref(ChevronRight), { class: "w-4 h-4" })
                ], 8, _hoisted_63)
              ])
            ])) : createCommentVNode("", true)
          ])
        ], 64))
      ]);
    };
  }
});
const AnalyticsPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-ef85f6ac"]]);
export {
  AnalyticsPage as default
};
