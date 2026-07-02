const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/ReportsPage-VjsV8NIh.js","assets/main-DKJzpCzk.js","assets/index-CXOeT5TG.css","assets/useSwal-pQW_XkRe.js","assets/zap-DcK6AMGO.js","assets/createLucideIcon-TQ5d7bQA.js","assets/file-text-CTSpt0IO.js","assets/sheet-WhptHG3D.js","assets/clock-xlNueMyC.js","assets/calendar-FTR2aUnV.js","assets/layout-grid-x4L-y5ND.js","assets/users-3SVXGYtw.js","assets/armchair-B9aMc4Sz.js","assets/triangle-alert-BLFAvrrP.js","assets/book-marked-BStkIjFC.js","assets/history-CCCaaEm2.js","assets/refresh-cw-vjkPNSrg.js","assets/trash-2-Ca1vuTx4.js","assets/download-DNf0rv9l.js","assets/x-BLKH3q-c.js","assets/circle-check-big-D9EkHUxc.js","assets/_plugin-vue_export-helper-1tPrXgE0.js","assets/ReportsPage-BrsXut-T.css"])))=>i.map(i=>d[i]);
import { d as defineComponent, r as ref, G as watch, o as onMounted, a as createElementBlock, b as createBaseVNode, l as createCommentVNode, n as normalizeClass, f as createVNode, u as unref, p as withDirectives, D as vModelSelect, h as createBlock, i as createTextVNode, t as toDisplayString, F as Fragment, j as renderList, W as defineAsyncComponent, q as normalizeStyle, _ as __vitePreload, k as openBlock } from "./main-DKJzpCzk.js";
import { l as librarianAPI } from "./librarianApi-DnZxHCiW.js";
import { C as ChartColumn } from "./chart-column-I-lCG69q.js";
import { F as FileChartColumnIncreasing } from "./file-chart-column-increasing-BFrKjbCc.js";
import { R as RefreshCw } from "./refresh-cw-vjkPNSrg.js";
import { U as Users } from "./users-3SVXGYtw.js";
import { T as TrendingUp } from "./trending-up-C06j2gIh.js";
import { T as TrendingDown } from "./trending-down-jH_EpMUh.js";
import { C as Calendar } from "./calendar-FTR2aUnV.js";
import { C as Clock } from "./clock-xlNueMyC.js";
import { A as Award } from "./award-DoGBFhhw.js";
import { M as MapPin } from "./map-pin-Bg3PL_MU.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
/* empty css               */
import "./createLucideIcon-TQ5d7bQA.js";
const _hoisted_1 = { class: "p-6 space-y-6 font-outfit text-slate-700" };
const _hoisted_2 = { class: "flex items-center space-x-1.5 bg-slate-100 rounded-xl p-1 w-fit" };
const _hoisted_3 = { key: 0 };
const _hoisted_4 = { class: "flex justify-end items-center mb-6" };
const _hoisted_5 = { class: "flex items-center space-x-3" };
const _hoisted_6 = ["disabled"];
const _hoisted_7 = { class: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left mb-6" };
const _hoisted_8 = { class: "bg-white rounded-xl p-5 shadow-sm border border-gray-100 flex flex-col justify-between min-h-[140px] hover:translate-y-[-2px] transition-all" };
const _hoisted_9 = { class: "flex items-center justify-between" };
const _hoisted_10 = { class: "p-3 bg-blue-50 border border-blue-100 rounded-xl text-blue-600" };
const _hoisted_11 = { class: "mt-4" };
const _hoisted_12 = { class: "text-2xl font-bold text-slate-800 tracking-tight" };
const _hoisted_13 = { class: "bg-white rounded-xl p-5 shadow-sm border border-gray-100 flex flex-col justify-between min-h-[140px] hover:translate-y-[-2px] transition-all" };
const _hoisted_14 = { class: "flex items-center justify-between" };
const _hoisted_15 = { class: "p-3 bg-green-50 border border-green-100 rounded-xl text-green-600" };
const _hoisted_16 = { class: "mt-4" };
const _hoisted_17 = { class: "text-2xl font-bold text-slate-800 tracking-tight" };
const _hoisted_18 = { class: "bg-white rounded-xl p-5 shadow-sm border border-gray-100 flex flex-col justify-between min-h-[140px] hover:translate-y-[-2px] transition-all" };
const _hoisted_19 = { class: "flex items-center justify-between" };
const _hoisted_20 = { class: "p-3 bg-emerald-50 border border-emerald-100 rounded-xl text-emerald-600" };
const _hoisted_21 = { class: "mt-4" };
const _hoisted_22 = { class: "text-2xl font-bold text-slate-800 tracking-tight" };
const _hoisted_23 = { class: "bg-white rounded-xl p-5 shadow-sm border border-gray-100 flex flex-col justify-between min-h-[140px] hover:translate-y-[-2px] transition-all" };
const _hoisted_24 = { class: "flex items-center justify-between" };
const _hoisted_25 = { class: "p-3 bg-orange-50 border border-orange-100 rounded-xl text-orange-600" };
const _hoisted_26 = { class: "mt-4" };
const _hoisted_27 = { class: "text-2xl font-bold text-slate-800 tracking-tight" };
const _hoisted_28 = { class: "grid grid-cols-1 lg:grid-cols-2 gap-6 text-left mb-6" };
const _hoisted_29 = { class: "bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col justify-between" };
const _hoisted_30 = { class: "h-64 flex items-end justify-between space-x-2 border-b border-slate-100 pb-2" };
const _hoisted_31 = { class: "opacity-0 group-hover:opacity-100 transition-opacity bg-slate-800 text-white text-[9px] font-bold py-1 px-2 rounded absolute mb-2 -translate-y-16 shadow pointer-events-none z-20" };
const _hoisted_32 = { class: "w-full h-44 flex items-end relative" };
const _hoisted_33 = { class: "text-[10px] font-bold text-slate-400 mt-2 truncate w-full text-center" };
const _hoisted_34 = {
  key: 0,
  class: "w-full h-full flex items-center justify-center text-slate-400 text-xs italic"
};
const _hoisted_35 = { class: "bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col justify-between" };
const _hoisted_36 = { class: "space-y-4 flex-1 flex flex-col justify-center" };
const _hoisted_37 = { class: "text-[11px] font-bold text-slate-500 w-16 uppercase tracking-wider" };
const _hoisted_38 = { class: "flex-1 bg-slate-50 rounded-xl h-6 overflow-hidden border border-slate-100 relative" };
const _hoisted_39 = { class: "absolute inset-y-0 right-3 flex items-center text-[10px] font-bold text-slate-600" };
const _hoisted_40 = {
  key: 0,
  class: "text-center py-8 text-slate-400 text-xs italic"
};
const _hoisted_41 = { class: "grid grid-cols-1 lg:grid-cols-2 gap-6 text-left" };
const _hoisted_42 = { class: "bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden" };
const _hoisted_43 = { class: "p-5 space-y-3.5" };
const _hoisted_44 = {
  key: 0,
  class: "text-center py-8"
};
const _hoisted_45 = { class: "flex items-center space-x-3" };
const _hoisted_46 = { class: "w-7 h-7 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100 flex items-center justify-center font-bold text-xs" };
const _hoisted_47 = { class: "font-bold text-slate-700 text-xs" };
const _hoisted_48 = { class: "text-[10px] text-slate-400 font-semibold mt-0.5" };
const _hoisted_49 = { class: "flex items-center space-x-1.5 px-3 py-1 bg-white border border-slate-100 rounded-lg text-amber-600" };
const _hoisted_50 = { class: "text-[10px] font-bold" };
const _hoisted_51 = { class: "bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden" };
const _hoisted_52 = { class: "p-5 space-y-3.5" };
const _hoisted_53 = {
  key: 0,
  class: "text-center py-8"
};
const _hoisted_54 = { class: "flex items-center space-x-3" };
const _hoisted_55 = { class: "p-2 bg-emerald-50 border border-emerald-100 rounded-lg text-emerald-700" };
const _hoisted_56 = { class: "font-bold text-slate-700 text-xs" };
const _hoisted_57 = { class: "text-[10px] text-slate-400 font-semibold mt-0.5" };
const _hoisted_58 = { class: "text-right" };
const _hoisted_59 = { class: "text-xs font-bold text-slate-700" };
const _hoisted_60 = { key: 1 };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "AnalyticsPage",
  setup(__props) {
    const ReportsPage = defineAsyncComponent(() => __vitePreload(() => import("./ReportsPage-VjsV8NIh.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22]) : void 0));
    const activeView = ref("analytics");
    const loading = ref(false);
    const timeRange = ref("week");
    const stats = ref({
      total_bookings: 0,
      total_bookings_change: 0,
      active_bookings: 0,
      completed_bookings: 0,
      completed_bookings_change: 0,
      completion_rate: 0,
      no_show_rate: 0,
      avg_session_duration: 0,
      avg_session_duration_change: 0,
      total_seats: 0,
      available_seats: 0,
      occupancy_rate: 0,
      occupancy_rate_change: 0
    });
    const bookingTrends = ref([]);
    const peakHours = ref([]);
    const topStudents = ref([]);
    const popularSeats = ref([]);
    const fetchAnalytics = async () => {
      loading.value = true;
      try {
        const data = await librarianAPI.getAnalytics(timeRange.value);
        stats.value = data.stats;
        bookingTrends.value = data.dailyTrends.map((d) => ({
          label: d.day,
          value: d.bookings
        }));
        const maxBookings = Math.max(...data.popularTimeSlots.map((s) => s.bookings), 1);
        peakHours.value = data.popularTimeSlots.map((s) => ({
          time: formatTime(s.time),
          bookings: s.bookings,
          percentage: Math.round(s.bookings / maxBookings * 100)
        }));
        topStudents.value = data.topStudents;
        popularSeats.value = data.popularSeats;
      } catch (error) {
        console.error("Error fetching analytics:", error);
      } finally {
        loading.value = false;
      }
    };
    const formatTime = (timeStr) => {
      const [hours] = timeStr.split(":");
      const h = parseInt(hours);
      const ampm = h >= 12 ? "PM" : "AM";
      const hour12 = h % 12 || 12;
      return `${hour12}:00 ${ampm}`;
    };
    watch(timeRange, () => {
      fetchAnalytics();
    });
    onMounted(() => {
      fetchAnalytics();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("button", {
            onClick: _cache[0] || (_cache[0] = ($event) => activeView.value = "analytics"),
            class: normalizeClass([
              "px-5 py-2.5 text-xs font-bold rounded-lg transition-all cursor-pointer flex items-center space-x-2",
              activeView.value === "analytics" ? "bg-white text-emerald-700 shadow-sm border border-slate-200/40" : "text-slate-500 hover:text-slate-700"
            ])
          }, [
            createVNode(unref(ChartColumn), { class: "w-4 h-4" }),
            _cache[3] || (_cache[3] = createBaseVNode("span", null, "Analytics", -1))
          ], 2),
          createBaseVNode("button", {
            onClick: _cache[1] || (_cache[1] = ($event) => activeView.value = "reports"),
            class: normalizeClass([
              "px-5 py-2.5 text-xs font-bold rounded-lg transition-all cursor-pointer flex items-center space-x-2",
              activeView.value === "reports" ? "bg-white text-emerald-700 shadow-sm border border-slate-200/40" : "text-slate-500 hover:text-slate-700"
            ])
          }, [
            createVNode(unref(FileChartColumnIncreasing), { class: "w-4 h-4" }),
            _cache[4] || (_cache[4] = createBaseVNode("span", null, "Reports", -1))
          ], 2)
        ]),
        activeView.value === "analytics" ? (openBlock(), createElementBlock("div", _hoisted_3, [
          createBaseVNode("div", _hoisted_4, [
            createBaseVNode("div", _hoisted_5, [
              withDirectives(createBaseVNode("select", {
                "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => timeRange.value = $event),
                class: "px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-400 bg-white text-xs font-semibold text-slate-600 cursor-pointer shadow-sm appearance-none pr-8 relative"
              }, [..._cache[5] || (_cache[5] = [
                createBaseVNode("option", { value: "today" }, "Today", -1),
                createBaseVNode("option", { value: "week" }, "Last 7 Days", -1),
                createBaseVNode("option", { value: "month" }, "Last 30 Days", -1),
                createBaseVNode("option", { value: "year" }, "Last Year", -1)
              ])], 512), [
                [vModelSelect, timeRange.value]
              ]),
              createBaseVNode("button", {
                onClick: fetchAnalytics,
                disabled: loading.value,
                class: "p-2.5 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 transition-all cursor-pointer shadow-sm",
                title: "Refresh Statistics"
              }, [
                createVNode(unref(RefreshCw), {
                  class: normalizeClass(["w-4 h-4 text-slate-500", loading.value ? "animate-spin" : ""])
                }, null, 8, ["class"])
              ], 8, _hoisted_6)
            ])
          ]),
          createBaseVNode("div", _hoisted_7, [
            createBaseVNode("div", _hoisted_8, [
              createBaseVNode("div", _hoisted_9, [
                createBaseVNode("div", _hoisted_10, [
                  createVNode(unref(Users), { class: "w-5 h-5" })
                ]),
                createBaseVNode("span", {
                  class: normalizeClass([
                    "text-sm font-semibold flex items-center",
                    stats.value.total_bookings_change >= 0 ? "text-green-600" : "text-rose-600"
                  ])
                }, [
                  stats.value.total_bookings_change >= 0 ? (openBlock(), createBlock(unref(TrendingUp), {
                    key: 0,
                    class: "w-4 h-4 mr-1"
                  })) : (openBlock(), createBlock(unref(TrendingDown), {
                    key: 1,
                    class: "w-4 h-4 mr-1"
                  })),
                  createTextVNode(" " + toDisplayString(stats.value.total_bookings_change >= 0 ? "+" : "") + toDisplayString(stats.value.total_bookings_change) + "% ", 1)
                ], 2)
              ]),
              createBaseVNode("div", _hoisted_11, [
                createBaseVNode("h3", _hoisted_12, toDisplayString(stats.value.total_bookings), 1),
                _cache[6] || (_cache[6] = createBaseVNode("p", { class: "text-[11px] text-slate-400 font-bold uppercase tracking-wider mt-0.5" }, "Total Bookings", -1))
              ])
            ]),
            createBaseVNode("div", _hoisted_13, [
              createBaseVNode("div", _hoisted_14, [
                createBaseVNode("div", _hoisted_15, [
                  createVNode(unref(Calendar), { class: "w-5 h-5" })
                ]),
                createBaseVNode("span", {
                  class: normalizeClass([
                    "text-sm font-semibold flex items-center",
                    stats.value.completed_bookings_change >= 0 ? "text-green-600" : "text-rose-600"
                  ])
                }, [
                  stats.value.completed_bookings_change >= 0 ? (openBlock(), createBlock(unref(TrendingUp), {
                    key: 0,
                    class: "w-4 h-4 mr-1"
                  })) : (openBlock(), createBlock(unref(TrendingDown), {
                    key: 1,
                    class: "w-4 h-4 mr-1"
                  })),
                  createTextVNode(" " + toDisplayString(stats.value.completed_bookings_change >= 0 ? "+" : "") + toDisplayString(stats.value.completed_bookings_change) + "% ", 1)
                ], 2)
              ]),
              createBaseVNode("div", _hoisted_16, [
                createBaseVNode("h3", _hoisted_17, toDisplayString(stats.value.completed_bookings), 1),
                _cache[7] || (_cache[7] = createBaseVNode("p", { class: "text-[11px] text-slate-400 font-bold uppercase tracking-wider mt-0.5" }, "Completed Sessions", -1))
              ])
            ]),
            createBaseVNode("div", _hoisted_18, [
              createBaseVNode("div", _hoisted_19, [
                createBaseVNode("div", _hoisted_20, [
                  createVNode(unref(Clock), { class: "w-5 h-5" })
                ]),
                createBaseVNode("span", {
                  class: normalizeClass([
                    "text-sm font-semibold flex items-center",
                    stats.value.avg_session_duration_change >= 0 ? "text-green-600" : "text-rose-600"
                  ])
                }, [
                  stats.value.avg_session_duration_change >= 0 ? (openBlock(), createBlock(unref(TrendingUp), {
                    key: 0,
                    class: "w-4 h-4 mr-1"
                  })) : (openBlock(), createBlock(unref(TrendingDown), {
                    key: 1,
                    class: "w-4 h-4 mr-1"
                  })),
                  createTextVNode(" " + toDisplayString(stats.value.avg_session_duration_change >= 0 ? "+" : "") + toDisplayString(stats.value.avg_session_duration_change) + "% ", 1)
                ], 2)
              ]),
              createBaseVNode("div", _hoisted_21, [
                createBaseVNode("h3", _hoisted_22, toDisplayString(stats.value.avg_session_duration) + "h", 1),
                _cache[8] || (_cache[8] = createBaseVNode("p", { class: "text-[11px] text-slate-400 font-bold uppercase tracking-wider mt-0.5" }, "Avg. Session Duration", -1))
              ])
            ]),
            createBaseVNode("div", _hoisted_23, [
              createBaseVNode("div", _hoisted_24, [
                createBaseVNode("div", _hoisted_25, [
                  createVNode(unref(ChartColumn), { class: "w-5 h-5" })
                ]),
                createBaseVNode("span", {
                  class: normalizeClass([
                    "text-sm font-semibold flex items-center",
                    stats.value.occupancy_rate_change >= 0 ? "text-green-600" : "text-rose-600"
                  ])
                }, [
                  stats.value.occupancy_rate_change >= 0 ? (openBlock(), createBlock(unref(TrendingUp), {
                    key: 0,
                    class: "w-4 h-4 mr-1"
                  })) : (openBlock(), createBlock(unref(TrendingDown), {
                    key: 1,
                    class: "w-4 h-4 mr-1"
                  })),
                  createTextVNode(" " + toDisplayString(stats.value.occupancy_rate_change >= 0 ? "+" : "") + toDisplayString(stats.value.occupancy_rate_change) + "% ", 1)
                ], 2)
              ]),
              createBaseVNode("div", _hoisted_26, [
                createBaseVNode("h3", _hoisted_27, toDisplayString(stats.value.occupancy_rate) + "%", 1),
                _cache[9] || (_cache[9] = createBaseVNode("p", { class: "text-[11px] text-slate-400 font-bold uppercase tracking-wider mt-0.5" }, "Avg. Occupancy Rate", -1))
              ])
            ])
          ]),
          createBaseVNode("div", _hoisted_28, [
            createBaseVNode("div", _hoisted_29, [
              _cache[10] || (_cache[10] = createBaseVNode("div", null, [
                createBaseVNode("h2", { class: "text-sm font-bold text-slate-800 uppercase tracking-wider mb-1" }, "Booking Trends"),
                createBaseVNode("p", { class: "text-[10px] text-slate-400 font-semibold mb-6" }, "Total bookings distribution over selected time duration.")
              ], -1)),
              createBaseVNode("div", _hoisted_30, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(bookingTrends.value, (day, index) => {
                  return openBlock(), createElementBlock("div", {
                    key: index,
                    class: "flex-1 h-full flex flex-col justify-end items-center group cursor-pointer relative"
                  }, [
                    createBaseVNode("div", _hoisted_31, toDisplayString(day.value) + " bookings ", 1),
                    createBaseVNode("div", _hoisted_32, [
                      createBaseVNode("div", {
                        class: "w-full bg-gradient-to-t from-emerald-600 to-teal-500 rounded-t-md transition-all group-hover:brightness-105",
                        style: normalizeStyle({ height: day.value / (Math.max(...bookingTrends.value.map((d) => d.value)) || 1) * 100 + "%" })
                      }, null, 4)
                    ]),
                    createBaseVNode("span", _hoisted_33, toDisplayString(day.label), 1)
                  ]);
                }), 128)),
                bookingTrends.value.length === 0 ? (openBlock(), createElementBlock("div", _hoisted_34, " No booking trend data for this period ")) : createCommentVNode("", true)
              ])
            ]),
            createBaseVNode("div", _hoisted_35, [
              _cache[11] || (_cache[11] = createBaseVNode("div", null, [
                createBaseVNode("h2", { class: "text-sm font-bold text-slate-800 uppercase tracking-wider mb-1" }, "Peak Occupancy Hours"),
                createBaseVNode("p", { class: "text-[10px] text-slate-400 font-semibold mb-6" }, "Distribution of session booking times across high-traffic hours.")
              ], -1)),
              createBaseVNode("div", _hoisted_36, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(peakHours.value, (hour) => {
                  return openBlock(), createElementBlock("div", {
                    key: hour.time,
                    class: "flex items-center space-x-3"
                  }, [
                    createBaseVNode("span", _hoisted_37, toDisplayString(hour.time), 1),
                    createBaseVNode("div", _hoisted_38, [
                      createBaseVNode("div", {
                        class: "h-full bg-gradient-to-r from-emerald-600 to-teal-500 rounded-xl transition-all",
                        style: normalizeStyle({ width: hour.percentage + "%" })
                      }, null, 4),
                      createBaseVNode("span", _hoisted_39, toDisplayString(hour.bookings) + " Bookings", 1)
                    ])
                  ]);
                }), 128)),
                peakHours.value.length === 0 ? (openBlock(), createElementBlock("div", _hoisted_40, " No traffic data available for this range ")) : createCommentVNode("", true)
              ])
            ])
          ]),
          createBaseVNode("div", _hoisted_41, [
            createBaseVNode("div", _hoisted_42, [
              _cache[13] || (_cache[13] = createBaseVNode("div", { class: "p-5 border-b border-slate-50" }, [
                createBaseVNode("h2", { class: "text-sm font-bold text-slate-800 uppercase tracking-wider" }, "Top Active Students"),
                createBaseVNode("p", { class: "text-[10px] text-slate-400 font-semibold mt-0.5" }, "Registered students with most library study time.")
              ], -1)),
              createBaseVNode("div", _hoisted_43, [
                topStudents.value.length === 0 ? (openBlock(), createElementBlock("div", _hoisted_44, [
                  createVNode(unref(Award), { class: "w-8 h-8 text-slate-200 mx-auto mb-2" }),
                  _cache[12] || (_cache[12] = createBaseVNode("p", { class: "text-[11px] text-slate-400 font-bold uppercase tracking-wider" }, "No student data available", -1))
                ])) : (openBlock(true), createElementBlock(Fragment, { key: 1 }, renderList(topStudents.value, (student, index) => {
                  return openBlock(), createElementBlock("div", {
                    key: student.id,
                    class: "flex items-center justify-between p-3.5 bg-slate-50/50 hover:bg-slate-50 border border-slate-100 rounded-xl transition-colors"
                  }, [
                    createBaseVNode("div", _hoisted_45, [
                      createBaseVNode("div", _hoisted_46, " #" + toDisplayString(index + 1), 1),
                      createBaseVNode("div", null, [
                        createBaseVNode("h4", _hoisted_47, toDisplayString(student.name), 1),
                        createBaseVNode("p", _hoisted_48, toDisplayString(student.hours || 0) + " Hours Logged", 1)
                      ])
                    ]),
                    createBaseVNode("div", _hoisted_49, [
                      createVNode(unref(Award), { class: "w-3.5 h-3.5" }),
                      createBaseVNode("span", _hoisted_50, toDisplayString(student.points || 0) + " pts", 1)
                    ])
                  ]);
                }), 128))
              ])
            ]),
            createBaseVNode("div", _hoisted_51, [
              _cache[16] || (_cache[16] = createBaseVNode("div", { class: "p-5 border-b border-slate-50" }, [
                createBaseVNode("h2", { class: "text-sm font-bold text-slate-800 uppercase tracking-wider" }, "Most Popular Seats"),
                createBaseVNode("p", { class: "text-[10px] text-slate-400 font-semibold mt-0.5" }, "Top reservation spots and seat utility percentage rates.")
              ], -1)),
              createBaseVNode("div", _hoisted_52, [
                popularSeats.value.length === 0 ? (openBlock(), createElementBlock("div", _hoisted_53, [
                  createVNode(unref(MapPin), { class: "w-8 h-8 text-slate-200 mx-auto mb-2" }),
                  _cache[14] || (_cache[14] = createBaseVNode("p", { class: "text-[11px] text-slate-400 font-bold uppercase tracking-wider" }, "No seat statistics available", -1))
                ])) : (openBlock(true), createElementBlock(Fragment, { key: 1 }, renderList(popularSeats.value, (seat) => {
                  return openBlock(), createElementBlock("div", {
                    key: seat.number,
                    class: "flex items-center justify-between p-3.5 bg-slate-50/50 hover:bg-slate-50 border border-slate-100 rounded-xl transition-colors"
                  }, [
                    createBaseVNode("div", _hoisted_54, [
                      createBaseVNode("div", _hoisted_55, [
                        createVNode(unref(MapPin), { class: "w-4 h-4" })
                      ]),
                      createBaseVNode("div", null, [
                        createBaseVNode("h4", _hoisted_56, "Seat " + toDisplayString(seat.number), 1),
                        createBaseVNode("p", _hoisted_57, toDisplayString(seat.bookings) + " total reservations", 1)
                      ])
                    ]),
                    createBaseVNode("div", _hoisted_58, [
                      createBaseVNode("span", _hoisted_59, toDisplayString(seat.utilization) + "%", 1),
                      _cache[15] || (_cache[15] = createBaseVNode("p", { class: "text-[9px] text-slate-400 font-bold uppercase tracking-wider" }, "utilization", -1))
                    ])
                  ]);
                }), 128))
              ])
            ])
          ])
        ])) : createCommentVNode("", true),
        activeView.value === "reports" ? (openBlock(), createElementBlock("div", _hoisted_60, [
          createVNode(unref(ReportsPage))
        ])) : createCommentVNode("", true)
      ]);
    };
  }
});
const AnalyticsPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-f4624816"]]);
export {
  AnalyticsPage as default
};
