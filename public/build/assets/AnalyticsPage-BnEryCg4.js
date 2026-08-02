const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/ReportsPage-CvrTj0Si.js","assets/main-BGbL_8Ba.js","assets/index-c0yHaQRF.css","assets/useSwal-pQW_XkRe.js","assets/calendar-DQ765muz.js","assets/createLucideIcon-v8VVJu1z.js","assets/circle-check-big-C7p1xlvr.js","assets/clock-Cir2UmjW.js","assets/refresh-cw-BcRrptjM.js","assets/sheet-DCc5Et0n.js","assets/file-text-BdyNFna-.js","assets/printer-BowoWZ1p.js","assets/book-marked-Q3GbPa2c.js","assets/history-QvQe7Bmv.js","assets/trash-2-DHi7U_Vy.js","assets/download-BLhfcpVu.js","assets/x-Cqc9Wc4f.js","assets/_plugin-vue_export-helper-1tPrXgE0.js","assets/ReportsPage-CZ9pkWxd.css"])))=>i.map(i=>d[i]);
import { d as defineComponent, r as ref, c as computed, E as watch, o as onMounted, a as createElementBlock, b as createBaseVNode, j as createCommentVNode, n as normalizeClass, f as createVNode, u as unref, p as withDirectives, D as vModelSelect, h as createBlock, i as createTextVNode, t as toDisplayString, F as Fragment, k as renderList, w as withCtx, g as resolveComponent, W as defineAsyncComponent, q as normalizeStyle, _ as __vitePreload, l as openBlock } from "./main-BGbL_8Ba.js";
import { l as librarianAPI } from "./librarianApi-xgcvaz1t.js";
import { C as ChartColumn } from "./chart-column-CEgAT3aE.js";
import { F as FileChartColumnIncreasing } from "./file-chart-column-increasing-B81DOA2a.js";
import { R as RefreshCw } from "./refresh-cw-BcRrptjM.js";
import { U as Users } from "./users-CTioSBhn.js";
import { T as TrendingUp } from "./trending-up-tRxTAamI.js";
import { T as TrendingDown } from "./trending-down-BPc3z8Ns.js";
import { C as Calendar } from "./calendar-DQ765muz.js";
import { C as Clock } from "./clock-Cir2UmjW.js";
import { G as GraduationCap } from "./graduation-cap-DaJqINnC.js";
import { A as Award } from "./award-Bw0969s5.js";
import { M as MapPin } from "./map-pin-BwNQ8wyg.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
/* empty css               */
import "./createLucideIcon-v8VVJu1z.js";
const _hoisted_1 = { class: "p-6 space-y-6 font-outfit text-slate-700" };
const _hoisted_2 = { class: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4" };
const _hoisted_3 = { class: "flex items-center space-x-1.5 bg-slate-100 rounded-xl p-1 w-fit" };
const _hoisted_4 = {
  key: 0,
  class: "flex items-center space-x-3 sm:ml-auto"
};
const _hoisted_5 = ["disabled"];
const _hoisted_6 = { key: 0 };
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
const _hoisted_41 = { class: "grid grid-cols-1 lg:grid-cols-2 gap-6 text-left mb-6" };
const _hoisted_42 = { class: "bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col justify-between min-h-[320px]" };
const _hoisted_43 = { class: "flex items-center justify-between mb-1" };
const _hoisted_44 = { class: "text-sm font-bold text-slate-800 uppercase tracking-wider flex items-center space-x-2" };
const _hoisted_45 = { class: "text-xs text-slate-400 font-semibold" };
const _hoisted_46 = { class: "flex flex-col sm:flex-row items-center justify-around space-y-6 sm:space-y-0 sm:space-x-4 py-4" };
const _hoisted_47 = { class: "relative w-36 h-36 flex items-center justify-center" };
const _hoisted_48 = {
  class: "w-full h-full transform -rotate-90",
  viewBox: "0 0 120 120"
};
const _hoisted_49 = ["stroke", "stroke-dasharray", "stroke-dashoffset"];
const _hoisted_50 = { class: "absolute flex flex-col items-center justify-center" };
const _hoisted_51 = { class: "text-3xl font-black text-slate-800 tracking-tight" };
const _hoisted_52 = { class: "space-y-3.5 text-left w-full sm:w-auto" };
const _hoisted_53 = { class: "flex items-center justify-between sm:justify-start sm:space-x-8" };
const _hoisted_54 = { class: "text-right" };
const _hoisted_55 = { class: "text-xs font-extrabold text-slate-800 mr-1.5" };
const _hoisted_56 = { class: "text-[10px] text-slate-400 font-bold" };
const _hoisted_57 = { class: "flex items-center justify-between sm:justify-start sm:space-x-8" };
const _hoisted_58 = { class: "text-right" };
const _hoisted_59 = { class: "text-xs font-extrabold text-slate-800 mr-1.5" };
const _hoisted_60 = { class: "text-[10px] text-slate-400 font-bold" };
const _hoisted_61 = { class: "bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col justify-between min-h-[320px]" };
const _hoisted_62 = { class: "flex items-center justify-between mb-1" };
const _hoisted_63 = { class: "text-sm font-bold text-slate-800 uppercase tracking-wider flex items-center space-x-2" };
const _hoisted_64 = { class: "text-xs text-slate-400 font-semibold" };
const _hoisted_65 = { class: "space-y-4 flex-1 flex flex-col justify-center" };
const _hoisted_66 = { class: "text-[11px] font-bold text-slate-600 w-24 uppercase tracking-wider truncate" };
const _hoisted_67 = { class: "flex-1 bg-slate-50 rounded-xl h-6 overflow-hidden border border-slate-100 relative" };
const _hoisted_68 = { class: "absolute inset-y-0 right-3 flex items-center text-[10px] font-extrabold text-slate-700" };
const _hoisted_69 = { class: "grid grid-cols-1 lg:grid-cols-2 gap-6 text-left mb-6" };
const _hoisted_70 = { class: "bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col justify-between min-h-[320px]" };
const _hoisted_71 = { class: "flex items-center justify-between mb-1" };
const _hoisted_72 = { class: "text-xs text-slate-400 font-semibold" };
const _hoisted_73 = { class: "flex flex-col sm:flex-row items-center justify-around space-y-6 sm:space-y-0 sm:space-x-4 py-4" };
const _hoisted_74 = { class: "relative w-36 h-36 flex items-center justify-center" };
const _hoisted_75 = {
  class: "w-full h-full transform -rotate-90",
  viewBox: "0 0 120 120"
};
const _hoisted_76 = ["stroke", "stroke-dasharray", "stroke-dashoffset"];
const _hoisted_77 = { class: "absolute flex flex-col items-center justify-center" };
const _hoisted_78 = { class: "text-3xl font-black text-slate-800 tracking-tight" };
const _hoisted_79 = { class: "space-y-3.5 text-left w-full sm:w-auto" };
const _hoisted_80 = { class: "flex items-center justify-between sm:justify-start sm:space-x-8" };
const _hoisted_81 = { class: "text-xs font-extrabold text-slate-700" };
const _hoisted_82 = { class: "flex items-center justify-between sm:justify-start sm:space-x-8" };
const _hoisted_83 = { class: "text-xs font-extrabold text-slate-700" };
const _hoisted_84 = { class: "flex items-center justify-between sm:justify-start sm:space-x-8" };
const _hoisted_85 = { class: "text-xs font-extrabold text-slate-700" };
const _hoisted_86 = { class: "flex justify-end pt-4 border-t border-slate-50 mt-4" };
const _hoisted_87 = { class: "bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col justify-between min-h-[320px]" };
const _hoisted_88 = { class: "flex items-center justify-between mb-1" };
const _hoisted_89 = { class: "text-xs text-slate-400 font-semibold" };
const _hoisted_90 = { class: "h-48 flex items-end justify-between space-x-4 border-b border-slate-100 pb-2 relative pl-10" };
const _hoisted_91 = { class: "absolute left-0 inset-y-0 w-8 flex flex-col justify-between text-[9px] font-bold text-slate-400 pr-2 border-r border-slate-100 pb-2" };
const _hoisted_92 = { class: "opacity-0 group-hover:opacity-100 transition-opacity bg-slate-800 text-white text-[9px] font-bold py-1 px-2 rounded absolute mb-2 -translate-y-16 shadow pointer-events-none z-20" };
const _hoisted_93 = { class: "w-3.5 h-full bg-slate-50/50 border border-slate-100 rounded-full flex items-end justify-center relative overflow-hidden" };
const _hoisted_94 = ["title"];
const _hoisted_95 = {
  key: 0,
  class: "w-full h-full flex items-center justify-center text-slate-400 text-xs italic"
};
const _hoisted_96 = { class: "grid grid-cols-1 lg:grid-cols-2 gap-6 text-left" };
const _hoisted_97 = { class: "bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden" };
const _hoisted_98 = { class: "p-5 space-y-3.5" };
const _hoisted_99 = {
  key: 0,
  class: "text-center py-8"
};
const _hoisted_100 = { class: "flex items-center space-x-3" };
const _hoisted_101 = { class: "w-7 h-7 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100 flex items-center justify-center font-bold text-xs" };
const _hoisted_102 = { class: "font-bold text-slate-700 text-xs" };
const _hoisted_103 = { class: "text-[10px] text-slate-400 font-semibold mt-0.5" };
const _hoisted_104 = { class: "bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden" };
const _hoisted_105 = { class: "p-5 space-y-3.5" };
const _hoisted_106 = {
  key: 0,
  class: "text-center py-8"
};
const _hoisted_107 = { class: "flex items-center space-x-3" };
const _hoisted_108 = { class: "p-2 bg-emerald-50 border border-emerald-100 rounded-lg text-emerald-700" };
const _hoisted_109 = { class: "font-bold text-slate-700 text-xs" };
const _hoisted_110 = { class: "text-[10px] text-slate-400 font-semibold mt-0.5" };
const _hoisted_111 = { class: "text-right" };
const _hoisted_112 = { class: "text-xs font-bold text-slate-700" };
const _hoisted_113 = { key: 1 };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "AnalyticsPage",
  setup(__props) {
    const ReportsPage = defineAsyncComponent(() => __vitePreload(() => import("./ReportsPage-CvrTj0Si.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]) : void 0));
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
    const genderStats = ref({
      male: 0,
      female: 0,
      mixed: 0,
      total: 0
    });
    const levelStats = ref({
      PRC: 0,
      CAF: 0,
      Final: 0,
      all: 0,
      total: 0
    });
    const genderTotal = computed(() => {
      if (genderStats.value.total && genderStats.value.total > 0) {
        return genderStats.value.total;
      }
      return (genderStats.value.male || 0) + (genderStats.value.female || 0);
    });
    const genderDonutSegments = computed(() => {
      const total = genderTotal.value;
      if (total === 0) return [];
      const segments = [];
      let accumulated = 0;
      if (genderStats.value.male > 0) {
        const len = genderStats.value.male / total * 314.159;
        const offset = accumulated / total * 314.159;
        segments.push({
          color: "#2563eb",
          strokeDasharray: `${len} 314.159`,
          strokeDashoffset: -offset
        });
        accumulated += genderStats.value.male;
      }
      if (genderStats.value.female > 0) {
        const len = genderStats.value.female / total * 314.159;
        const offset = accumulated / total * 314.159;
        segments.push({
          color: "#ec4899",
          strokeDasharray: `${len} 314.159`,
          strokeDashoffset: -offset
        });
        accumulated += genderStats.value.female;
      }
      return segments;
    });
    const levelTotal = computed(() => levelStats.value.PRC + levelStats.value.CAF + levelStats.value.Final);
    const levelBars = computed(() => {
      const total = levelTotal.value || 1;
      return [
        { name: "PRC Level", count: levelStats.value.PRC, percentage: Math.round(levelStats.value.PRC / total * 100), color: "from-indigo-600 to-indigo-400" },
        { name: "CAF Level", count: levelStats.value.CAF, percentage: Math.round(levelStats.value.CAF / total * 100), color: "from-amber-500 to-amber-400" },
        { name: "Final Level", count: levelStats.value.Final, percentage: Math.round(levelStats.value.Final / total * 100), color: "from-emerald-600 to-emerald-400" }
      ];
    });
    const bookStats = ref({
      issued: 0,
      returned: 0,
      pending: 0,
      total: 0
    });
    const mostIssuedBooks = ref([]);
    const timeRangeDescription = computed(() => {
      const mapping = {
        today: "Today",
        week: "Last 7 Days",
        month: "Last 30 Days",
        year: "Last Year"
      };
      return mapping[timeRange.value] || "Last 7 Days";
    });
    const yAxisMax = computed(() => {
      const max = Math.max(...mostIssuedBooks.value.map((b) => b.count), 0);
      if (max === 0) return 10;
      return Math.ceil(max / 5) * 5;
    });
    const donutSegments = computed(() => {
      const total = bookStats.value.total;
      if (total === 0) {
        return [];
      }
      const segments = [];
      let accumulated = 0;
      if (bookStats.value.issued > 0) {
        const len = bookStats.value.issued / total * 314.159;
        const offset = accumulated / total * 314.159;
        segments.push({
          color: "#2563eb",
          strokeDasharray: `${len} 314.159`,
          strokeDashoffset: -offset
        });
        accumulated += bookStats.value.issued;
      }
      if (bookStats.value.returned > 0) {
        const len = bookStats.value.returned / total * 314.159;
        const offset = accumulated / total * 314.159;
        segments.push({
          color: "#ea580c",
          strokeDasharray: `${len} 314.159`,
          strokeDashoffset: -offset
        });
        accumulated += bookStats.value.returned;
      }
      if (bookStats.value.pending > 0) {
        const len = bookStats.value.pending / total * 314.159;
        const offset = accumulated / total * 314.159;
        segments.push({
          color: "#10b981",
          strokeDasharray: `${len} 314.159`,
          strokeDashoffset: -offset
        });
        accumulated += bookStats.value.pending;
      }
      return segments;
    });
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
        genderStats.value = data.genderStats || { male: 0, female: 0, mixed: 0, total: 0 };
        levelStats.value = data.levelStats || { PRC: 0, CAF: 0, Final: 0, all: 0, total: 0 };
        bookStats.value = data.bookStats || { issued: 0, returned: 0, pending: 0, total: 0 };
        mostIssuedBooks.value = data.mostIssuedBooks || [];
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
      const _component_router_link = resolveComponent("router-link");
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("div", _hoisted_3, [
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
          activeView.value === "analytics" ? (openBlock(), createElementBlock("div", _hoisted_4, [
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
              class: "p-2.5 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 transition-all cursor-pointer shadow-sm flex items-center justify-center",
              title: "Refresh Statistics"
            }, [
              createVNode(unref(RefreshCw), {
                class: normalizeClass(["w-4 h-4 text-slate-500", loading.value ? "animate-spin" : ""])
              }, null, 8, ["class"])
            ], 8, _hoisted_5)
          ])) : createCommentVNode("", true)
        ]),
        activeView.value === "analytics" ? (openBlock(), createElementBlock("div", _hoisted_6, [
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
              createBaseVNode("div", null, [
                createBaseVNode("div", _hoisted_43, [
                  createBaseVNode("h2", _hoisted_44, [
                    createVNode(unref(Users), { class: "w-4 h-4 text-blue-600" }),
                    _cache[12] || (_cache[12] = createBaseVNode("span", null, "Gender-Wise Bookings", -1))
                  ]),
                  createBaseVNode("span", _hoisted_45, toDisplayString(timeRangeDescription.value), 1)
                ]),
                _cache[13] || (_cache[13] = createBaseVNode("p", { class: "text-[10px] text-slate-400 font-semibold mb-6" }, "Distribution of seat bookings by student & section gender.", -1))
              ]),
              createBaseVNode("div", _hoisted_46, [
                createBaseVNode("div", _hoisted_47, [
                  (openBlock(), createElementBlock("svg", _hoisted_48, [
                    _cache[14] || (_cache[14] = createBaseVNode("circle", {
                      cx: "60",
                      cy: "60",
                      r: "50",
                      fill: "transparent",
                      stroke: "#f8fafc",
                      "stroke-width": "12"
                    }, null, -1)),
                    (openBlock(true), createElementBlock(Fragment, null, renderList(genderDonutSegments.value, (seg, idx) => {
                      return openBlock(), createElementBlock("circle", {
                        key: idx,
                        cx: "60",
                        cy: "60",
                        r: "50",
                        fill: "transparent",
                        stroke: seg.color,
                        "stroke-width": "12",
                        "stroke-dasharray": seg.strokeDasharray,
                        "stroke-dashoffset": seg.strokeDashoffset,
                        "stroke-linecap": "round",
                        class: "transition-all duration-500"
                      }, null, 8, _hoisted_49);
                    }), 128))
                  ])),
                  createBaseVNode("div", _hoisted_50, [
                    createBaseVNode("span", _hoisted_51, toDisplayString(genderTotal.value), 1),
                    _cache[15] || (_cache[15] = createBaseVNode("span", { class: "text-[9px] font-bold text-slate-400 uppercase tracking-wider font-extrabold mt-0.5" }, "Bookings", -1))
                  ])
                ]),
                createBaseVNode("div", _hoisted_52, [
                  createBaseVNode("div", _hoisted_53, [
                    _cache[16] || (_cache[16] = createBaseVNode("div", { class: "flex items-center space-x-2.5" }, [
                      createBaseVNode("span", { class: "w-3 h-3 rounded-full bg-blue-600 ring-4 ring-blue-50" }),
                      createBaseVNode("span", { class: "text-xs font-bold text-slate-600" }, "Boys / Male")
                    ], -1)),
                    createBaseVNode("div", _hoisted_54, [
                      createBaseVNode("span", _hoisted_55, toDisplayString(genderStats.value.male), 1),
                      createBaseVNode("span", _hoisted_56, "(" + toDisplayString(genderTotal.value ? Math.round(genderStats.value.male / genderTotal.value * 100) : 0) + "%)", 1)
                    ])
                  ]),
                  createBaseVNode("div", _hoisted_57, [
                    _cache[17] || (_cache[17] = createBaseVNode("div", { class: "flex items-center space-x-2.5" }, [
                      createBaseVNode("span", { class: "w-3 h-3 rounded-full bg-pink-500 ring-4 ring-pink-50" }),
                      createBaseVNode("span", { class: "text-xs font-bold text-slate-600" }, "Girls / Female")
                    ], -1)),
                    createBaseVNode("div", _hoisted_58, [
                      createBaseVNode("span", _hoisted_59, toDisplayString(genderStats.value.female), 1),
                      createBaseVNode("span", _hoisted_60, "(" + toDisplayString(genderTotal.value ? Math.round(genderStats.value.female / genderTotal.value * 100) : 0) + "%)", 1)
                    ])
                  ])
                ])
              ])
            ]),
            createBaseVNode("div", _hoisted_61, [
              createBaseVNode("div", null, [
                createBaseVNode("div", _hoisted_62, [
                  createBaseVNode("h2", _hoisted_63, [
                    createVNode(unref(GraduationCap), { class: "w-4 h-4 text-emerald-600" }),
                    _cache[18] || (_cache[18] = createBaseVNode("span", null, "Level-Wise Bookings", -1))
                  ]),
                  createBaseVNode("span", _hoisted_64, toDisplayString(timeRangeDescription.value), 1)
                ]),
                _cache[19] || (_cache[19] = createBaseVNode("p", { class: "text-[10px] text-slate-400 font-semibold mb-6" }, "Breakdown of bookings by academic level (PRC, CAF, Final Year).", -1))
              ]),
              createBaseVNode("div", _hoisted_65, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(levelBars.value, (lvl) => {
                  return openBlock(), createElementBlock("div", {
                    key: lvl.name,
                    class: "flex items-center space-x-3"
                  }, [
                    createBaseVNode("span", _hoisted_66, toDisplayString(lvl.name), 1),
                    createBaseVNode("div", _hoisted_67, [
                      createBaseVNode("div", {
                        class: normalizeClass(["h-full bg-gradient-to-r transition-all duration-500", lvl.color]),
                        style: normalizeStyle({ width: lvl.percentage + "%" })
                      }, null, 6),
                      createBaseVNode("span", _hoisted_68, toDisplayString(lvl.count) + " Bookings (" + toDisplayString(lvl.percentage) + "%) ", 1)
                    ])
                  ]);
                }), 128))
              ])
            ])
          ]),
          createBaseVNode("div", _hoisted_69, [
            createBaseVNode("div", _hoisted_70, [
              createBaseVNode("div", null, [
                createBaseVNode("div", _hoisted_71, [
                  _cache[20] || (_cache[20] = createBaseVNode("h2", { class: "text-sm font-bold text-slate-800 uppercase tracking-wider" }, "Books", -1)),
                  createBaseVNode("span", _hoisted_72, toDisplayString(timeRangeDescription.value), 1)
                ]),
                _cache[21] || (_cache[21] = createBaseVNode("p", { class: "text-[10px] text-slate-400 font-semibold mb-6" }, "Overview of book borrowing activities and reservation statuses.", -1))
              ]),
              createBaseVNode("div", _hoisted_73, [
                createBaseVNode("div", _hoisted_74, [
                  (openBlock(), createElementBlock("svg", _hoisted_75, [
                    _cache[22] || (_cache[22] = createBaseVNode("circle", {
                      cx: "60",
                      cy: "60",
                      r: "50",
                      fill: "transparent",
                      stroke: "#f8fafc",
                      "stroke-width": "12"
                    }, null, -1)),
                    (openBlock(true), createElementBlock(Fragment, null, renderList(donutSegments.value, (seg, idx) => {
                      return openBlock(), createElementBlock("circle", {
                        key: idx,
                        cx: "60",
                        cy: "60",
                        r: "50",
                        fill: "transparent",
                        stroke: seg.color,
                        "stroke-width": "12",
                        "stroke-dasharray": seg.strokeDasharray,
                        "stroke-dashoffset": seg.strokeDashoffset,
                        "stroke-linecap": "round",
                        class: "transition-all duration-500"
                      }, null, 8, _hoisted_76);
                    }), 128))
                  ])),
                  createBaseVNode("div", _hoisted_77, [
                    createBaseVNode("span", _hoisted_78, toDisplayString(bookStats.value.total), 1),
                    _cache[23] || (_cache[23] = createBaseVNode("span", { class: "text-[9px] font-bold text-slate-400 uppercase tracking-wider font-extrabold mt-0.5" }, "Total", -1))
                  ])
                ]),
                createBaseVNode("div", _hoisted_79, [
                  createBaseVNode("div", _hoisted_80, [
                    _cache[24] || (_cache[24] = createBaseVNode("div", { class: "flex items-center space-x-2.5" }, [
                      createBaseVNode("span", { class: "w-3 h-3 rounded-full bg-blue-600 ring-4 ring-blue-50" }),
                      createBaseVNode("span", { class: "text-xs font-bold text-slate-500" }, "Issued")
                    ], -1)),
                    createBaseVNode("span", _hoisted_81, toDisplayString(bookStats.value.issued), 1)
                  ]),
                  createBaseVNode("div", _hoisted_82, [
                    _cache[25] || (_cache[25] = createBaseVNode("div", { class: "flex items-center space-x-2.5" }, [
                      createBaseVNode("span", { class: "w-3 h-3 rounded-full bg-orange-600 ring-4 ring-orange-50" }),
                      createBaseVNode("span", { class: "text-xs font-bold text-slate-500" }, "Returned")
                    ], -1)),
                    createBaseVNode("span", _hoisted_83, toDisplayString(bookStats.value.returned), 1)
                  ]),
                  createBaseVNode("div", _hoisted_84, [
                    _cache[26] || (_cache[26] = createBaseVNode("div", { class: "flex items-center space-x-2.5" }, [
                      createBaseVNode("span", { class: "w-3 h-3 rounded-full bg-emerald-600 ring-4 ring-emerald-50" }),
                      createBaseVNode("span", { class: "text-xs font-bold text-slate-500" }, "Pending")
                    ], -1)),
                    createBaseVNode("span", _hoisted_85, toDisplayString(bookStats.value.pending), 1)
                  ])
                ])
              ]),
              createBaseVNode("div", _hoisted_86, [
                createVNode(_component_router_link, {
                  to: { name: "librarian-reservations" },
                  class: "text-[10px] font-extrabold text-emerald-700 hover:text-emerald-800 transition-colors uppercase tracking-wider flex items-center space-x-1 cursor-pointer"
                }, {
                  default: withCtx(() => [..._cache[27] || (_cache[27] = [
                    createBaseVNode("span", null, "See list", -1),
                    createBaseVNode("span", null, "→", -1)
                  ])]),
                  _: 1
                })
              ])
            ]),
            createBaseVNode("div", _hoisted_87, [
              createBaseVNode("div", null, [
                createBaseVNode("div", _hoisted_88, [
                  _cache[28] || (_cache[28] = createBaseVNode("h2", { class: "text-sm font-bold text-slate-800 uppercase tracking-wider" }, "Most Issued", -1)),
                  createBaseVNode("span", _hoisted_89, toDisplayString(timeRangeDescription.value), 1)
                ]),
                _cache[29] || (_cache[29] = createBaseVNode("p", { class: "text-[10px] text-slate-400 font-semibold mb-6" }, "Top borrowed books in the selected library.", -1))
              ]),
              createBaseVNode("div", _hoisted_90, [
                createBaseVNode("div", _hoisted_91, [
                  createBaseVNode("span", null, toDisplayString(yAxisMax.value), 1),
                  createBaseVNode("span", null, toDisplayString(Math.round(yAxisMax.value * 0.75)), 1),
                  createBaseVNode("span", null, toDisplayString(Math.round(yAxisMax.value * 0.5)), 1),
                  createBaseVNode("span", null, toDisplayString(Math.round(yAxisMax.value * 0.25)), 1),
                  _cache[30] || (_cache[30] = createBaseVNode("span", null, "0", -1))
                ]),
                (openBlock(true), createElementBlock(Fragment, null, renderList(mostIssuedBooks.value, (book, index) => {
                  return openBlock(), createElementBlock("div", {
                    key: index,
                    class: "flex-1 h-full flex flex-col justify-end items-center group cursor-pointer relative"
                  }, [
                    createBaseVNode("div", _hoisted_92, toDisplayString(book.count) + " issued ", 1),
                    createBaseVNode("div", _hoisted_93, [
                      createBaseVNode("div", {
                        class: "w-full bg-gradient-to-t from-emerald-600 to-teal-500 rounded-full transition-all duration-500 group-hover:brightness-105",
                        style: normalizeStyle({ height: book.count / yAxisMax.value * 100 + "%" })
                      }, null, 4)
                    ]),
                    createBaseVNode("span", {
                      class: "text-[9px] font-bold text-slate-400 mt-2 truncate w-14 text-center",
                      title: book.title
                    }, toDisplayString(book.title), 9, _hoisted_94)
                  ]);
                }), 128)),
                mostIssuedBooks.value.length === 0 ? (openBlock(), createElementBlock("div", _hoisted_95, " No borrowing statistics for this period ")) : createCommentVNode("", true)
              ])
            ])
          ]),
          createBaseVNode("div", _hoisted_96, [
            createBaseVNode("div", _hoisted_97, [
              _cache[32] || (_cache[32] = createBaseVNode("div", { class: "p-5 border-b border-slate-50" }, [
                createBaseVNode("h2", { class: "text-sm font-bold text-slate-800 uppercase tracking-wider" }, "Top Active Students"),
                createBaseVNode("p", { class: "text-[10px] text-slate-400 font-semibold mt-0.5" }, "Registered students with most library study time.")
              ], -1)),
              createBaseVNode("div", _hoisted_98, [
                topStudents.value.length === 0 ? (openBlock(), createElementBlock("div", _hoisted_99, [
                  createVNode(unref(Award), { class: "w-8 h-8 text-slate-200 mx-auto mb-2" }),
                  _cache[31] || (_cache[31] = createBaseVNode("p", { class: "text-[11px] text-slate-400 font-bold uppercase tracking-wider" }, "No student data available", -1))
                ])) : (openBlock(true), createElementBlock(Fragment, { key: 1 }, renderList(topStudents.value, (student, index) => {
                  return openBlock(), createElementBlock("div", {
                    key: student.id,
                    class: "flex items-center justify-between p-3.5 bg-slate-50/50 hover:bg-slate-50 border border-slate-100 rounded-xl transition-colors"
                  }, [
                    createBaseVNode("div", _hoisted_100, [
                      createBaseVNode("div", _hoisted_101, " #" + toDisplayString(index + 1), 1),
                      createBaseVNode("div", null, [
                        createBaseVNode("h4", _hoisted_102, toDisplayString(student.name), 1),
                        createBaseVNode("p", _hoisted_103, toDisplayString(student.hours || 0) + " Hours Logged", 1)
                      ])
                    ])
                  ]);
                }), 128))
              ])
            ]),
            createBaseVNode("div", _hoisted_104, [
              _cache[35] || (_cache[35] = createBaseVNode("div", { class: "p-5 border-b border-slate-50" }, [
                createBaseVNode("h2", { class: "text-sm font-bold text-slate-800 uppercase tracking-wider" }, "Most Popular Seats"),
                createBaseVNode("p", { class: "text-[10px] text-slate-400 font-semibold mt-0.5" }, "Top reservation spots and seat utility percentage rates.")
              ], -1)),
              createBaseVNode("div", _hoisted_105, [
                popularSeats.value.length === 0 ? (openBlock(), createElementBlock("div", _hoisted_106, [
                  createVNode(unref(MapPin), { class: "w-8 h-8 text-slate-200 mx-auto mb-2" }),
                  _cache[33] || (_cache[33] = createBaseVNode("p", { class: "text-[11px] text-slate-400 font-bold uppercase tracking-wider" }, "No seat statistics available", -1))
                ])) : (openBlock(true), createElementBlock(Fragment, { key: 1 }, renderList(popularSeats.value, (seat) => {
                  return openBlock(), createElementBlock("div", {
                    key: seat.number,
                    class: "flex items-center justify-between p-3.5 bg-slate-50/50 hover:bg-slate-50 border border-slate-100 rounded-xl transition-colors"
                  }, [
                    createBaseVNode("div", _hoisted_107, [
                      createBaseVNode("div", _hoisted_108, [
                        createVNode(unref(MapPin), { class: "w-4 h-4" })
                      ]),
                      createBaseVNode("div", null, [
                        createBaseVNode("h4", _hoisted_109, "Seat " + toDisplayString(seat.number), 1),
                        createBaseVNode("p", _hoisted_110, toDisplayString(seat.bookings) + " total reservations", 1)
                      ])
                    ]),
                    createBaseVNode("div", _hoisted_111, [
                      createBaseVNode("span", _hoisted_112, toDisplayString(seat.utilization) + "%", 1),
                      _cache[34] || (_cache[34] = createBaseVNode("p", { class: "text-[9px] text-slate-400 font-bold uppercase tracking-wider" }, "utilization", -1))
                    ])
                  ]);
                }), 128))
              ])
            ])
          ])
        ])) : createCommentVNode("", true),
        activeView.value === "reports" ? (openBlock(), createElementBlock("div", _hoisted_113, [
          createVNode(unref(ReportsPage))
        ])) : createCommentVNode("", true)
      ]);
    };
  }
});
const AnalyticsPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-27b1630b"]]);
export {
  AnalyticsPage as default
};
