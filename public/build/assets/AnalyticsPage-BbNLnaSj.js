const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/ReportsPage-Cmywk_BK.js","assets/main-BeUqjoax.js","assets/main-DIdg1lwS.css","assets/index-CdXM3XfH.css","assets/useSwal-pQW_XkRe.js","assets/calendar-C4MEAYqh.js","assets/circle-check-big-BPDnuG2V.js","assets/sheet-BBAcFLQm.js","assets/file-text-C-8QcjRK.js","assets/printer-qHWgtc5c.js","assets/book-marked-BJVQnqwP.js","assets/history-CghJOSE1.js","assets/trash-2-CnFs5eVz.js","assets/download-DDe5Tczq.js","assets/x-Dj9LNodU.js","assets/ReportsPage-CZ9pkWxd.css"])))=>i.map(i=>d[i]);
import { d as defineComponent, r as ref, a as computed, b as createElementBlock, e as createBaseVNode, g as createVNode, u as unref, C as Clock, f as createStaticVNode, F as Fragment, k as renderList, T as Transition, w as withCtx, t as toDisplayString, p as createCommentVNode, x as normalizeStyle, m as openBlock, _ as _export_sfc, I as watch, o as onMounted, n as normalizeClass, s as withDirectives, v as vModelText, R as RefreshCw, i as createBlock, j as createTextVNode, h as resolveComponent, a2 as defineAsyncComponent, Y as __vitePreload } from "./main-BeUqjoax.js";
import { l as librarianAPI } from "./librarianApi-DxBLXVlm.js";
import { _ as _sfc_main$2 } from "./TimeFrameSelector.vue_vue_type_script_setup_true_lang-CX4H30D4.js";
import { B as BookingTrendsChart } from "./BookingTrendsChart-D-MZ0rBP.js";
import { C as ChartColumn } from "./chart-column-Du0EUu8B.js";
import { F as FileChartColumnIncreasing } from "./file-chart-column-increasing-DH5Z-6gC.js";
import { U as Users } from "./users-DgA2REmn.js";
import { T as TrendingUp } from "./trending-up-BPT833jM.js";
import { T as TrendingDown } from "./trending-down-DuPTMCVb.js";
import { C as Calendar } from "./calendar-C4MEAYqh.js";
import { G as GraduationCap } from "./graduation-cap-D3FeWUk2.js";
import { B as BookOpen } from "./book-open-DpY8sw2V.js";
import { B as BookMarked } from "./book-marked-BJVQnqwP.js";
import { A as Award } from "./award-BrUvNM4x.js";
import { f as format } from "./format-DBvmWExF.js";
/* empty css               */
import "./chevron-down-DgPiBWjn.js";
import "./check-CZ9YO2_d.js";
import "./en-US-Cfx__x1z.js";
import "./normalizeDates-KHLYxtAK.js";
const _hoisted_1$1 = { class: "bg-white rounded-3xl shadow-sm border border-slate-100/90 p-6 flex flex-col justify-between font-outfit" };
const _hoisted_2$1 = { class: "flex items-center justify-between mb-4 text-left" };
const _hoisted_3$1 = { class: "text-sm font-bold text-slate-800 uppercase tracking-wider flex items-center space-x-2" };
const _hoisted_4$1 = { class: "relative w-full h-64 mt-2" };
const _hoisted_5$1 = { class: "grid-lines" };
const _hoisted_6$1 = ["y1", "y2"];
const _hoisted_7$1 = ["y"];
const _hoisted_8$1 = { class: "bars" };
const _hoisted_9$1 = ["onMouseenter"];
const _hoisted_10$1 = ["x", "y", "height", "fill"];
const _hoisted_11$1 = ["x", "fill", "font-weight"];
const _hoisted_12$1 = { class: "font-bold text-emerald-400" };
const _hoisted_13$1 = { class: "text-[11px] text-slate-200" };
const chartTop = 20;
const chartBottom = 190;
const barWidth = 18;
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "PeakTrafficHoursChart",
  props: {
    data: {},
    totalBookings: {}
  },
  setup(__props) {
    const props = __props;
    const hoveredIndex = ref(null);
    const defaultData = [
      { hour: 8, label: "8a", fullTime: "8:00 AM", bookings: 45 },
      { hour: 9, label: "9a", fullTime: "9:00 AM", bookings: 80 },
      { hour: 10, label: "10a", fullTime: "10:00 AM", bookings: 135 },
      { hour: 11, label: "11a", fullTime: "11:00 AM", bookings: 165 },
      { hour: 12, label: "12p", fullTime: "12:00 PM", bookings: 210 },
      { hour: 13, label: "1p", fullTime: "1:00 PM", bookings: 190 },
      { hour: 14, label: "2p", fullTime: "2:00 PM", bookings: 245 },
      { hour: 15, label: "3p", fullTime: "3:00 PM", bookings: 310 },
      { hour: 16, label: "4p", fullTime: "4:00 PM", bookings: 375 },
      { hour: 17, label: "5p", fullTime: "5:00 PM", bookings: 420 },
      { hour: 18, label: "6p", fullTime: "6:00 PM", bookings: 350 },
      { hour: 19, label: "7p", fullTime: "7:00 PM", bookings: 250 },
      { hour: 20, label: "8p", fullTime: "8:00 PM", bookings: 140 }
    ];
    const chartData = computed(() => {
      if (props.data && props.data.length > 0) {
        return props.data;
      }
      return defaultData;
    });
    const maxVal = computed(() => {
      const max = Math.max(...chartData.value.map((d) => d.bookings), 0);
      if (max === 0) return 10;
      if (max <= 5) return 5;
      if (max <= 10) return 10;
      if (max <= 50) return Math.ceil(max / 5) * 5;
      if (max <= 100) return Math.ceil(max / 10) * 10;
      return Math.ceil(max / 50) * 50;
    });
    const yTicks = computed(() => {
      const max = maxVal.value;
      const step = max / 4;
      return [0, Math.round(step), Math.round(step * 2), Math.round(step * 3), max];
    });
    const peakIndex = computed(() => {
      let maxIdx = 0;
      let maxB = -1;
      chartData.value.forEach((item, idx) => {
        if (item.bookings > maxB) {
          maxB = item.bookings;
          maxIdx = idx;
        }
      });
      return maxIdx;
    });
    const isPeak = (index) => index === peakIndex.value && (chartData.value[index]?.bookings || 0) > 0;
    const chartHeight = chartBottom - chartTop;
    const getY = (val) => {
      const ratio = val / maxVal.value;
      return chartBottom - ratio * chartHeight;
    };
    const getBarX = (index) => {
      const totalBars = chartData.value.length;
      const availableWidth = 590 - 40;
      const gap = (availableWidth - totalBars * barWidth) / (totalBars + 1);
      return 40 + gap + index * (barWidth + gap);
    };
    const getBarY = (val) => {
      const h = getBarHeight(val);
      return chartBottom - h;
    };
    const getBarHeight = (val) => {
      if (val <= 0) return 4;
      const ratio = val / maxVal.value;
      return Math.max(ratio * chartHeight, 4);
    };
    const getTooltipLeft = (index) => {
      const x = getBarX(index) + barWidth / 2;
      return `${x / 600 * 100}%`;
    };
    const getTooltipTop = (index) => {
      const item = chartData.value[index];
      const y = getBarY(item ? item.bookings : 0);
      return `${y / 220 * 100 - 4}%`;
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        createBaseVNode("div", _hoisted_2$1, [
          createBaseVNode("div", null, [
            createBaseVNode("h2", _hoisted_3$1, [
              createVNode(unref(Clock), { class: "w-4 h-4 text-emerald-600" }),
              _cache[1] || (_cache[1] = createBaseVNode("span", null, "Peak Traffic Hours", -1))
            ]),
            _cache[2] || (_cache[2] = createBaseVNode("p", { class: "text-[10px] text-slate-400 font-semibold mt-0.5" }, "Footfall & seat bookings distribution across peak hours.", -1))
          ])
        ]),
        createBaseVNode("div", _hoisted_4$1, [
          (openBlock(), createElementBlock("svg", {
            class: "w-full h-full overflow-visible",
            viewBox: "0 0 600 220",
            preserveAspectRatio: "none",
            onMouseleave: _cache[0] || (_cache[0] = ($event) => hoveredIndex.value = null)
          }, [
            _cache[3] || (_cache[3] = createStaticVNode('<defs data-v-292b2f3f><linearGradient id="regularBarGradGreen" x1="0" y1="0" x2="0" y2="1" data-v-292b2f3f><stop offset="0%" stop-color="#6ee7b7" stop-opacity="0.85" data-v-292b2f3f></stop><stop offset="100%" stop-color="#ecfdf5" stop-opacity="0.35" data-v-292b2f3f></stop></linearGradient><linearGradient id="regularBarHoverGradGreen" x1="0" y1="0" x2="0" y2="1" data-v-292b2f3f><stop offset="0%" stop-color="#34d399" stop-opacity="0.95" data-v-292b2f3f></stop><stop offset="100%" stop-color="#d1fae5" stop-opacity="0.5" data-v-292b2f3f></stop></linearGradient><linearGradient id="peakBarGradGreen" x1="0" y1="0" x2="0" y2="1" data-v-292b2f3f><stop offset="0%" stop-color="#059669" stop-opacity="1" data-v-292b2f3f></stop><stop offset="100%" stop-color="#047857" stop-opacity="0.9" data-v-292b2f3f></stop></linearGradient></defs>', 1)),
            createBaseVNode("g", _hoisted_5$1, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(yTicks.value, (yVal, idx) => {
                return openBlock(), createElementBlock("g", { key: idx }, [
                  createBaseVNode("line", {
                    x1: "35",
                    y1: getY(yVal),
                    x2: "590",
                    y2: getY(yVal),
                    stroke: "#f1f5f9",
                    "stroke-width": "1.2"
                  }, null, 8, _hoisted_6$1),
                  createBaseVNode("text", {
                    x: "25",
                    y: getY(yVal) + 4,
                    "text-anchor": "end",
                    fill: "#94a3b8",
                    "font-size": "11",
                    "font-weight": "500",
                    class: "font-outfit"
                  }, toDisplayString(yVal), 9, _hoisted_7$1)
                ]);
              }), 128))
            ]),
            createBaseVNode("g", _hoisted_8$1, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(chartData.value, (item, index) => {
                return openBlock(), createElementBlock("g", {
                  key: index,
                  onMouseenter: ($event) => hoveredIndex.value = index,
                  class: "cursor-pointer group"
                }, [
                  createBaseVNode("rect", {
                    x: getBarX(index),
                    y: getBarY(item.bookings),
                    width: barWidth,
                    height: getBarHeight(item.bookings),
                    rx: "9",
                    ry: "9",
                    fill: isPeak(index) ? "url(#peakBarGradGreen)" : hoveredIndex.value === index ? "url(#regularBarHoverGradGreen)" : "url(#regularBarGradGreen)",
                    class: "transition-all duration-300"
                  }, null, 8, _hoisted_10$1),
                  createBaseVNode("text", {
                    x: getBarX(index) + barWidth / 2,
                    y: "212",
                    "text-anchor": "middle",
                    fill: isPeak(index) ? "#047857" : "#94a3b8",
                    "font-weight": isPeak(index) ? "700" : "500",
                    "font-size": "11",
                    class: "font-outfit transition-colors"
                  }, toDisplayString(item.label), 9, _hoisted_11$1)
                ], 40, _hoisted_9$1);
              }), 128))
            ])
          ], 32)),
          createVNode(Transition, { name: "fade" }, {
            default: withCtx(() => [
              hoveredIndex.value !== null && chartData.value[hoveredIndex.value] ? (openBlock(), createElementBlock("div", {
                key: 0,
                class: "absolute z-20 pointer-events-none bg-slate-900/90 text-white text-xs px-3 py-1.5 rounded-xl shadow-lg backdrop-blur-sm transition-all duration-150 transform -translate-x-1/2 -translate-y-full border border-slate-700/50",
                style: normalizeStyle({
                  left: getTooltipLeft(hoveredIndex.value),
                  top: getTooltipTop(hoveredIndex.value)
                })
              }, [
                createBaseVNode("div", _hoisted_12$1, toDisplayString(chartData.value[hoveredIndex.value].fullTime), 1),
                createBaseVNode("div", _hoisted_13$1, toDisplayString(chartData.value[hoveredIndex.value].bookings) + " Bookings", 1)
              ], 4)) : createCommentVNode("", true)
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
});
const PeakTrafficHoursChart = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-292b2f3f"]]);
const _hoisted_1 = { class: "p-6 space-y-6 font-outfit text-slate-700" };
const _hoisted_2 = { class: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4" };
const _hoisted_3 = { class: "flex items-center space-x-1.5 bg-slate-100 rounded-xl p-1 w-fit" };
const _hoisted_4 = {
  key: 0,
  class: "flex items-center gap-2 sm:ml-auto"
};
const _hoisted_5 = {
  key: 0,
  class: "flex items-center gap-1.5"
};
const _hoisted_6 = ["disabled"];
const _hoisted_7 = { key: 0 };
const _hoisted_8 = { class: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left mb-6" };
const _hoisted_9 = { class: "bg-white rounded-xl p-5 shadow-sm border border-gray-100 flex flex-col justify-between min-h-[140px] hover:translate-y-[-2px] transition-all" };
const _hoisted_10 = { class: "flex items-center justify-between" };
const _hoisted_11 = { class: "p-3 bg-blue-50 border border-blue-100 rounded-xl text-blue-600" };
const _hoisted_12 = { class: "mt-4" };
const _hoisted_13 = { class: "text-2xl font-bold text-slate-800 tracking-tight" };
const _hoisted_14 = { class: "bg-white rounded-xl p-5 shadow-sm border border-gray-100 flex flex-col justify-between min-h-[140px] hover:translate-y-[-2px] transition-all" };
const _hoisted_15 = { class: "flex items-center justify-between" };
const _hoisted_16 = { class: "p-3 bg-green-50 border border-green-100 rounded-xl text-green-600" };
const _hoisted_17 = { class: "mt-4" };
const _hoisted_18 = { class: "text-2xl font-bold text-slate-800 tracking-tight" };
const _hoisted_19 = { class: "bg-white rounded-xl p-5 shadow-sm border border-gray-100 flex flex-col justify-between min-h-[140px] hover:translate-y-[-2px] transition-all" };
const _hoisted_20 = { class: "flex items-center justify-between" };
const _hoisted_21 = { class: "p-3 bg-emerald-50 border border-emerald-100 rounded-xl text-emerald-600" };
const _hoisted_22 = { class: "mt-4" };
const _hoisted_23 = { class: "text-2xl font-bold text-slate-800 tracking-tight" };
const _hoisted_24 = { class: "bg-white rounded-xl p-5 shadow-sm border border-gray-100 flex flex-col justify-between min-h-[140px] hover:translate-y-[-2px] transition-all" };
const _hoisted_25 = { class: "flex items-center justify-between" };
const _hoisted_26 = { class: "p-3 bg-orange-50 border border-orange-100 rounded-xl text-orange-600" };
const _hoisted_27 = { class: "mt-4" };
const _hoisted_28 = { class: "text-2xl font-bold text-slate-800 tracking-tight" };
const _hoisted_29 = { class: "mb-6" };
const _hoisted_30 = { class: "bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col justify-between" };
const _hoisted_31 = { class: "mb-2" };
const _hoisted_32 = { class: "flex items-center justify-between mb-1" };
const _hoisted_33 = { class: "text-sm font-bold text-slate-800 uppercase tracking-wider flex items-center space-x-2" };
const _hoisted_34 = { class: "text-xs text-slate-400 font-semibold" };
const _hoisted_35 = { class: "grid grid-cols-1 lg:grid-cols-2 gap-6 text-left mb-6" };
const _hoisted_36 = { class: "bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col justify-between min-h-[320px]" };
const _hoisted_37 = { class: "flex items-center justify-between mb-1" };
const _hoisted_38 = { class: "text-sm font-bold text-slate-800 uppercase tracking-wider flex items-center space-x-2" };
const _hoisted_39 = { class: "text-xs text-slate-400 font-semibold" };
const _hoisted_40 = { class: "flex flex-col sm:flex-row items-center justify-around space-y-6 sm:space-y-0 sm:space-x-4 py-4" };
const _hoisted_41 = { class: "relative w-36 h-36 flex items-center justify-center" };
const _hoisted_42 = {
  class: "w-full h-full transform -rotate-90",
  viewBox: "0 0 120 120"
};
const _hoisted_43 = ["stroke", "stroke-dasharray", "stroke-dashoffset"];
const _hoisted_44 = { class: "absolute flex flex-col items-center justify-center" };
const _hoisted_45 = { class: "text-3xl font-black text-slate-800 tracking-tight" };
const _hoisted_46 = { class: "space-y-3.5 text-left w-full sm:w-auto" };
const _hoisted_47 = { class: "flex items-center justify-between sm:justify-start sm:space-x-8" };
const _hoisted_48 = { class: "text-right" };
const _hoisted_49 = { class: "text-xs font-extrabold text-slate-800 mr-1.5" };
const _hoisted_50 = { class: "text-[10px] text-slate-400 font-bold" };
const _hoisted_51 = { class: "flex items-center justify-between sm:justify-start sm:space-x-8" };
const _hoisted_52 = { class: "text-right" };
const _hoisted_53 = { class: "text-xs font-extrabold text-slate-800 mr-1.5" };
const _hoisted_54 = { class: "text-[10px] text-slate-400 font-bold" };
const _hoisted_55 = { class: "bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col justify-between min-h-[320px]" };
const _hoisted_56 = { class: "flex items-center justify-between mb-1" };
const _hoisted_57 = { class: "text-sm font-bold text-slate-800 uppercase tracking-wider flex items-center space-x-2" };
const _hoisted_58 = { class: "text-xs text-slate-400 font-semibold" };
const _hoisted_59 = { class: "space-y-4 flex-1 flex flex-col justify-center" };
const _hoisted_60 = { class: "text-[11px] font-bold text-slate-600 w-24 uppercase tracking-wider truncate" };
const _hoisted_61 = { class: "flex-1 bg-slate-50 rounded-xl h-6 overflow-hidden border border-slate-100 relative" };
const _hoisted_62 = { class: "absolute inset-y-0 right-3 flex items-center text-[10px] font-extrabold text-slate-700" };
const _hoisted_63 = { class: "grid grid-cols-1 lg:grid-cols-2 gap-6 text-left mb-6" };
const _hoisted_64 = { class: "bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col justify-between min-h-[320px]" };
const _hoisted_65 = { class: "flex items-center justify-between mb-1" };
const _hoisted_66 = { class: "text-sm font-bold text-slate-800 uppercase tracking-wider flex items-center space-x-2" };
const _hoisted_67 = { class: "text-xs text-slate-400 font-semibold" };
const _hoisted_68 = { class: "flex flex-col sm:flex-row items-center justify-around space-y-6 sm:space-y-0 sm:space-x-4 py-4" };
const _hoisted_69 = { class: "relative w-36 h-36 flex items-center justify-center" };
const _hoisted_70 = {
  class: "w-full h-full transform -rotate-90",
  viewBox: "0 0 120 120"
};
const _hoisted_71 = ["stroke", "stroke-dasharray", "stroke-dashoffset"];
const _hoisted_72 = { class: "absolute flex flex-col items-center justify-center" };
const _hoisted_73 = { class: "text-3xl font-black text-slate-800 tracking-tight" };
const _hoisted_74 = { class: "space-y-3.5 text-left w-full sm:w-auto" };
const _hoisted_75 = { class: "flex items-center justify-between sm:justify-start sm:space-x-8" };
const _hoisted_76 = { class: "text-xs font-extrabold text-slate-700" };
const _hoisted_77 = { class: "flex items-center justify-between sm:justify-start sm:space-x-8" };
const _hoisted_78 = { class: "text-xs font-extrabold text-slate-700" };
const _hoisted_79 = { class: "flex items-center justify-between sm:justify-start sm:space-x-8" };
const _hoisted_80 = { class: "text-xs font-extrabold text-slate-700" };
const _hoisted_81 = { class: "flex justify-end pt-4 border-t border-slate-50 mt-4" };
const _hoisted_82 = { class: "bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col justify-between min-h-[320px]" };
const _hoisted_83 = { class: "flex items-center justify-between mb-1" };
const _hoisted_84 = { class: "text-sm font-bold text-slate-800 uppercase tracking-wider flex items-center space-x-2" };
const _hoisted_85 = { class: "text-xs text-slate-400 font-semibold" };
const _hoisted_86 = { class: "h-48 flex items-end justify-between space-x-4 border-b border-slate-100 pb-2 relative pl-10" };
const _hoisted_87 = { class: "absolute left-0 inset-y-0 w-8 flex flex-col justify-between text-[9px] font-bold text-slate-400 pr-2 border-r border-slate-100 pb-2" };
const _hoisted_88 = { class: "opacity-0 group-hover:opacity-100 transition-opacity bg-slate-800 text-white text-[9px] font-bold py-1 px-2 rounded absolute mb-2 -translate-y-16 shadow pointer-events-none z-20" };
const _hoisted_89 = { class: "w-3.5 h-full bg-slate-50/50 border border-slate-100 rounded-full flex items-end justify-center relative overflow-hidden" };
const _hoisted_90 = ["title"];
const _hoisted_91 = {
  key: 0,
  class: "w-full h-full flex items-center justify-center text-slate-400 text-xs italic"
};
const _hoisted_92 = { class: "grid grid-cols-1 lg:grid-cols-2 gap-6 text-left" };
const _hoisted_93 = { class: "bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden" };
const _hoisted_94 = { class: "p-5 border-b border-slate-50" };
const _hoisted_95 = { class: "text-sm font-bold text-slate-800 uppercase tracking-wider flex items-center space-x-2" };
const _hoisted_96 = { class: "p-5 space-y-3.5" };
const _hoisted_97 = {
  key: 0,
  class: "text-center py-8"
};
const _hoisted_98 = { class: "flex items-center space-x-3" };
const _hoisted_99 = { class: "w-7 h-7 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100 flex items-center justify-center font-bold text-xs" };
const _hoisted_100 = { class: "font-bold text-slate-700 text-xs" };
const _hoisted_101 = { class: "text-[10px] text-slate-400 font-semibold mt-0.5" };
const _hoisted_102 = { key: 1 };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "AnalyticsPage",
  setup(__props) {
    const ReportsPage = defineAsyncComponent(() => __vitePreload(() => import("./ReportsPage-Cmywk_BK.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]) : void 0));
    const todayStr = format(/* @__PURE__ */ new Date(), "yyyy-MM-dd");
    const activeView = ref("analytics");
    const loading = ref(false);
    const timeRange = ref("this_month");
    const fromDate = ref(todayStr);
    const toDate = ref(todayStr);
    const timeRangeDescription = computed(() => {
      const mapping = {
        today: "Today",
        yesterday: "Yesterday",
        this_month: "This Month",
        last_month: "Last Month",
        this_year: "This Year",
        custom: "Custom Range",
        all: "All Time",
        week: "Last 7 Days",
        month: "Last 30 Days",
        year: "Last Year"
      };
      return mapping[timeRange.value] || "Today";
    });
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
    const hourlyDistribution = ref([]);
    const maxTrendValue = computed(() => {
      if (!bookingTrends.value || bookingTrends.value.length === 0) return 5;
      const max = Math.max(...bookingTrends.value.map((d) => d.value), 0);
      return max === 0 ? 5 : Math.ceil(max * 1.25);
    });
    const trendLinePoints = computed(() => {
      if (!bookingTrends.value || bookingTrends.value.length === 0) return [];
      const max = maxTrendValue.value;
      const width = 800;
      const height = 220;
      const paddingX = 40;
      const paddingY = 25;
      const count = bookingTrends.value.length;
      const stepX = count > 1 ? (width - paddingX * 2) / (count - 1) : 0;
      return bookingTrends.value.map((item, idx) => {
        const x = count === 1 ? width / 2 : paddingX + idx * stepX;
        const y = height - paddingY - item.value / max * (height - paddingY * 2);
        return { x, y, label: item.label, value: item.value };
      });
    });
    const linePathD = computed(() => {
      const points = trendLinePoints.value;
      if (points.length === 0) return "";
      if (points.length === 1) return `M ${points[0].x} ${points[0].y}`;
      return points.reduce((acc, point, idx) => {
        if (idx === 0) return `M ${point.x} ${point.y}`;
        const prev = points[idx - 1];
        const cp1x = prev.x + (point.x - prev.x) / 2;
        const cp1y = prev.y;
        const cp2x = prev.x + (point.x - prev.x) / 2;
        const cp2y = point.y;
        return `${acc} C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${point.x} ${point.y}`;
      }, "");
    });
    computed(() => {
      const lineD = linePathD.value;
      if (!lineD) return "";
      const points = trendLinePoints.value;
      if (points.length === 0) return "";
      const lastX = points[points.length - 1].x;
      const firstX = points[0].x;
      const bottomY = 220;
      return `${lineD} L ${lastX} ${bottomY} L ${firstX} ${bottomY} Z`;
    });
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
    const formatTime = (timeStr) => {
      if (!timeStr) return "";
      const [hours] = timeStr.split(":");
      const h = parseInt(hours);
      if (isNaN(h)) return timeStr;
      const ampm = h >= 12 ? "PM" : "AM";
      const hour12 = h % 12 || 12;
      return `${hour12}:00 ${ampm}`;
    };
    const fetchAnalytics = async () => {
      loading.value = true;
      try {
        const params = {
          timeRange: timeRange.value,
          range: timeRange.value
        };
        if (timeRange.value === "custom" && fromDate.value && toDate.value) {
          params.from_date = fromDate.value;
          params.to_date = toDate.value;
        }
        const data = await librarianAPI.getAnalytics(params);
        stats.value = data?.stats || {
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
        };
        bookingTrends.value = (data?.dailyTrends || []).map((d) => ({
          label: d.day,
          value: d.bookings
        }));
        hourlyDistribution.value = data?.hourlyDistribution || [];
        const slots = data?.popularTimeSlots || [];
        const maxBookings = slots.length > 0 ? Math.max(...slots.map((s) => s.bookings), 1) : 1;
        peakHours.value = slots.map((s) => ({
          time: formatTime(s.time),
          bookings: s.bookings,
          percentage: Math.round(s.bookings / maxBookings * 100)
        }));
        topStudents.value = data?.topStudents || [];
        popularSeats.value = data?.popularSeats || [];
        genderStats.value = data?.genderStats || { male: 0, female: 0, mixed: 0, total: 0 };
        levelStats.value = data?.levelStats || { PRC: 0, CAF: 0, Final: 0, all: 0, total: 0 };
        bookStats.value = data?.bookStats || { issued: 0, returned: 0, pending: 0, total: 0 };
        mostIssuedBooks.value = data?.mostIssuedBooks || [];
      } catch (error) {
        console.error("Error fetching analytics:", error);
      } finally {
        loading.value = false;
      }
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
              _cache[5] || (_cache[5] = createBaseVNode("span", null, "Analytics", -1))
            ], 2),
            createBaseVNode("button", {
              onClick: _cache[1] || (_cache[1] = ($event) => activeView.value = "reports"),
              class: normalizeClass([
                "px-5 py-2.5 text-xs font-bold rounded-lg transition-all cursor-pointer flex items-center space-x-2",
                activeView.value === "reports" ? "bg-white text-emerald-700 shadow-sm border border-slate-200/40" : "text-slate-500 hover:text-slate-700"
              ])
            }, [
              createVNode(unref(FileChartColumnIncreasing), { class: "w-4 h-4" }),
              _cache[6] || (_cache[6] = createBaseVNode("span", null, "Reports", -1))
            ], 2)
          ]),
          activeView.value === "analytics" ? (openBlock(), createElementBlock("div", _hoisted_4, [
            createVNode(_sfc_main$2, {
              modelValue: timeRange.value,
              "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => timeRange.value = $event),
              color: "emerald",
              onChange: fetchAnalytics
            }, null, 8, ["modelValue"]),
            timeRange.value === "custom" ? (openBlock(), createElementBlock("div", _hoisted_5, [
              withDirectives(createBaseVNode("input", {
                type: "date",
                "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => fromDate.value = $event),
                onChange: fetchAnalytics,
                class: "px-3 py-1.5 bg-white border border-slate-200 rounded-xl text-xs font-semibold text-slate-700 outline-none focus:ring-2 focus:ring-emerald-500/20 shadow-2xs"
              }, null, 544), [
                [vModelText, fromDate.value]
              ]),
              _cache[7] || (_cache[7] = createBaseVNode("span", { class: "text-xs text-slate-400 font-bold" }, "to", -1)),
              withDirectives(createBaseVNode("input", {
                type: "date",
                "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => toDate.value = $event),
                onChange: fetchAnalytics,
                class: "px-3 py-1.5 bg-white border border-slate-200 rounded-xl text-xs font-semibold text-slate-700 outline-none focus:ring-2 focus:ring-emerald-500/20 shadow-2xs"
              }, null, 544), [
                [vModelText, toDate.value]
              ])
            ])) : createCommentVNode("", true),
            createBaseVNode("button", {
              onClick: fetchAnalytics,
              disabled: loading.value,
              class: "p-2.5 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors cursor-pointer shadow-sm flex items-center justify-center",
              title: "Refresh Statistics"
            }, [
              createVNode(unref(RefreshCw), {
                class: normalizeClass(["w-4 h-4 text-slate-500", loading.value ? "animate-spin text-emerald-600" : ""])
              }, null, 8, ["class"])
            ], 8, _hoisted_6)
          ])) : createCommentVNode("", true)
        ]),
        activeView.value === "analytics" ? (openBlock(), createElementBlock("div", _hoisted_7, [
          createBaseVNode("div", _hoisted_8, [
            createBaseVNode("div", _hoisted_9, [
              createBaseVNode("div", _hoisted_10, [
                createBaseVNode("div", _hoisted_11, [
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
              createBaseVNode("div", _hoisted_12, [
                createBaseVNode("h3", _hoisted_13, toDisplayString(stats.value.total_bookings), 1),
                _cache[8] || (_cache[8] = createBaseVNode("p", { class: "text-[11px] text-slate-400 font-bold uppercase tracking-wider mt-0.5" }, "Total Bookings", -1))
              ])
            ]),
            createBaseVNode("div", _hoisted_14, [
              createBaseVNode("div", _hoisted_15, [
                createBaseVNode("div", _hoisted_16, [
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
              createBaseVNode("div", _hoisted_17, [
                createBaseVNode("h3", _hoisted_18, toDisplayString(stats.value.completed_bookings), 1),
                _cache[9] || (_cache[9] = createBaseVNode("p", { class: "text-[11px] text-slate-400 font-bold uppercase tracking-wider mt-0.5" }, "Completed Sessions", -1))
              ])
            ]),
            createBaseVNode("div", _hoisted_19, [
              createBaseVNode("div", _hoisted_20, [
                createBaseVNode("div", _hoisted_21, [
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
              createBaseVNode("div", _hoisted_22, [
                createBaseVNode("h3", _hoisted_23, toDisplayString(stats.value.avg_session_duration) + "h", 1),
                _cache[10] || (_cache[10] = createBaseVNode("p", { class: "text-[11px] text-slate-400 font-bold uppercase tracking-wider mt-0.5" }, "Avg. Session Duration", -1))
              ])
            ]),
            createBaseVNode("div", _hoisted_24, [
              createBaseVNode("div", _hoisted_25, [
                createBaseVNode("div", _hoisted_26, [
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
              createBaseVNode("div", _hoisted_27, [
                createBaseVNode("h3", _hoisted_28, toDisplayString(stats.value.occupancy_rate) + "%", 1),
                _cache[11] || (_cache[11] = createBaseVNode("p", { class: "text-[11px] text-slate-400 font-bold uppercase tracking-wider mt-0.5" }, "Avg. Occupancy Rate", -1))
              ])
            ])
          ]),
          createBaseVNode("div", _hoisted_29, [
            createBaseVNode("div", _hoisted_30, [
              createBaseVNode("div", _hoisted_31, [
                createBaseVNode("div", _hoisted_32, [
                  createBaseVNode("h2", _hoisted_33, [
                    createVNode(unref(TrendingUp), { class: "w-4 h-4 text-emerald-600" }),
                    _cache[12] || (_cache[12] = createBaseVNode("span", null, "Booking Trends", -1))
                  ]),
                  createBaseVNode("span", _hoisted_34, toDisplayString(timeRangeDescription.value), 1)
                ]),
                _cache[13] || (_cache[13] = createBaseVNode("p", { class: "text-[10px] text-slate-400 font-semibold" }, "Total bookings distribution over selected time duration.", -1))
              ]),
              createVNode(BookingTrendsChart, {
                data: bookingTrends.value,
                "x-key": "label",
                "y-key": "value",
                label: "Bookings",
                color: "#059669"
              }, null, 8, ["data"])
            ])
          ]),
          createBaseVNode("div", _hoisted_35, [
            createBaseVNode("div", _hoisted_36, [
              createBaseVNode("div", null, [
                createBaseVNode("div", _hoisted_37, [
                  createBaseVNode("h2", _hoisted_38, [
                    createVNode(unref(Users), { class: "w-4 h-4 text-blue-600" }),
                    _cache[14] || (_cache[14] = createBaseVNode("span", null, "Gender-Wise Bookings", -1))
                  ]),
                  createBaseVNode("span", _hoisted_39, toDisplayString(timeRangeDescription.value), 1)
                ]),
                _cache[15] || (_cache[15] = createBaseVNode("p", { class: "text-[10px] text-slate-400 font-semibold mb-6" }, "Distribution of seat bookings by student & section gender.", -1))
              ]),
              createBaseVNode("div", _hoisted_40, [
                createBaseVNode("div", _hoisted_41, [
                  (openBlock(), createElementBlock("svg", _hoisted_42, [
                    _cache[16] || (_cache[16] = createBaseVNode("circle", {
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
                      }, null, 8, _hoisted_43);
                    }), 128))
                  ])),
                  createBaseVNode("div", _hoisted_44, [
                    createBaseVNode("span", _hoisted_45, toDisplayString(genderTotal.value), 1),
                    _cache[17] || (_cache[17] = createBaseVNode("span", { class: "text-[9px] font-bold text-slate-400 uppercase tracking-wider font-extrabold mt-0.5" }, "Bookings", -1))
                  ])
                ]),
                createBaseVNode("div", _hoisted_46, [
                  createBaseVNode("div", _hoisted_47, [
                    _cache[18] || (_cache[18] = createBaseVNode("div", { class: "flex items-center space-x-2.5" }, [
                      createBaseVNode("span", { class: "w-3 h-3 rounded-full bg-blue-600 ring-4 ring-blue-50" }),
                      createBaseVNode("span", { class: "text-xs font-bold text-slate-600" }, "Boys / Male")
                    ], -1)),
                    createBaseVNode("div", _hoisted_48, [
                      createBaseVNode("span", _hoisted_49, toDisplayString(genderStats.value.male), 1),
                      createBaseVNode("span", _hoisted_50, "(" + toDisplayString(genderTotal.value ? Math.round(genderStats.value.male / genderTotal.value * 100) : 0) + "%)", 1)
                    ])
                  ]),
                  createBaseVNode("div", _hoisted_51, [
                    _cache[19] || (_cache[19] = createBaseVNode("div", { class: "flex items-center space-x-2.5" }, [
                      createBaseVNode("span", { class: "w-3 h-3 rounded-full bg-pink-500 ring-4 ring-pink-50" }),
                      createBaseVNode("span", { class: "text-xs font-bold text-slate-600" }, "Girls / Female")
                    ], -1)),
                    createBaseVNode("div", _hoisted_52, [
                      createBaseVNode("span", _hoisted_53, toDisplayString(genderStats.value.female), 1),
                      createBaseVNode("span", _hoisted_54, "(" + toDisplayString(genderTotal.value ? Math.round(genderStats.value.female / genderTotal.value * 100) : 0) + "%)", 1)
                    ])
                  ])
                ])
              ])
            ]),
            createBaseVNode("div", _hoisted_55, [
              createBaseVNode("div", null, [
                createBaseVNode("div", _hoisted_56, [
                  createBaseVNode("h2", _hoisted_57, [
                    createVNode(unref(GraduationCap), { class: "w-4 h-4 text-emerald-600" }),
                    _cache[20] || (_cache[20] = createBaseVNode("span", null, "Level-Wise Bookings", -1))
                  ]),
                  createBaseVNode("span", _hoisted_58, toDisplayString(timeRangeDescription.value), 1)
                ]),
                _cache[21] || (_cache[21] = createBaseVNode("p", { class: "text-[10px] text-slate-400 font-semibold mb-6" }, "Breakdown of bookings by academic level (PRC, CAF, Final Year).", -1))
              ]),
              createBaseVNode("div", _hoisted_59, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(levelBars.value, (lvl) => {
                  return openBlock(), createElementBlock("div", {
                    key: lvl.name,
                    class: "flex items-center space-x-3"
                  }, [
                    createBaseVNode("span", _hoisted_60, toDisplayString(lvl.name), 1),
                    createBaseVNode("div", _hoisted_61, [
                      createBaseVNode("div", {
                        class: normalizeClass(["h-full bg-gradient-to-r transition-all duration-500", lvl.color]),
                        style: normalizeStyle({ width: lvl.percentage + "%" })
                      }, null, 6),
                      createBaseVNode("span", _hoisted_62, toDisplayString(lvl.count) + " Bookings (" + toDisplayString(lvl.percentage) + "%) ", 1)
                    ])
                  ]);
                }), 128))
              ])
            ])
          ]),
          createBaseVNode("div", _hoisted_63, [
            createBaseVNode("div", _hoisted_64, [
              createBaseVNode("div", null, [
                createBaseVNode("div", _hoisted_65, [
                  createBaseVNode("h2", _hoisted_66, [
                    createVNode(unref(BookOpen), { class: "w-4 h-4 text-emerald-600" }),
                    _cache[22] || (_cache[22] = createBaseVNode("span", null, "Books", -1))
                  ]),
                  createBaseVNode("span", _hoisted_67, toDisplayString(timeRangeDescription.value), 1)
                ]),
                _cache[23] || (_cache[23] = createBaseVNode("p", { class: "text-[10px] text-slate-400 font-semibold mb-6" }, "Overview of book borrowing activities and reservation statuses.", -1))
              ]),
              createBaseVNode("div", _hoisted_68, [
                createBaseVNode("div", _hoisted_69, [
                  (openBlock(), createElementBlock("svg", _hoisted_70, [
                    _cache[24] || (_cache[24] = createBaseVNode("circle", {
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
                      }, null, 8, _hoisted_71);
                    }), 128))
                  ])),
                  createBaseVNode("div", _hoisted_72, [
                    createBaseVNode("span", _hoisted_73, toDisplayString(bookStats.value.total), 1),
                    _cache[25] || (_cache[25] = createBaseVNode("span", { class: "text-[9px] font-bold text-slate-400 uppercase tracking-wider font-extrabold mt-0.5" }, "Total", -1))
                  ])
                ]),
                createBaseVNode("div", _hoisted_74, [
                  createBaseVNode("div", _hoisted_75, [
                    _cache[26] || (_cache[26] = createBaseVNode("div", { class: "flex items-center space-x-2.5" }, [
                      createBaseVNode("span", { class: "w-3 h-3 rounded-full bg-blue-600 ring-4 ring-blue-50" }),
                      createBaseVNode("span", { class: "text-xs font-bold text-slate-500" }, "Issued")
                    ], -1)),
                    createBaseVNode("span", _hoisted_76, toDisplayString(bookStats.value.issued), 1)
                  ]),
                  createBaseVNode("div", _hoisted_77, [
                    _cache[27] || (_cache[27] = createBaseVNode("div", { class: "flex items-center space-x-2.5" }, [
                      createBaseVNode("span", { class: "w-3 h-3 rounded-full bg-orange-600 ring-4 ring-orange-50" }),
                      createBaseVNode("span", { class: "text-xs font-bold text-slate-500" }, "Returned")
                    ], -1)),
                    createBaseVNode("span", _hoisted_78, toDisplayString(bookStats.value.returned), 1)
                  ]),
                  createBaseVNode("div", _hoisted_79, [
                    _cache[28] || (_cache[28] = createBaseVNode("div", { class: "flex items-center space-x-2.5" }, [
                      createBaseVNode("span", { class: "w-3 h-3 rounded-full bg-emerald-600 ring-4 ring-emerald-50" }),
                      createBaseVNode("span", { class: "text-xs font-bold text-slate-500" }, "Pending")
                    ], -1)),
                    createBaseVNode("span", _hoisted_80, toDisplayString(bookStats.value.pending), 1)
                  ])
                ])
              ]),
              createBaseVNode("div", _hoisted_81, [
                createVNode(_component_router_link, {
                  to: { name: "librarian-reservations" },
                  class: "text-[10px] font-extrabold text-emerald-700 hover:text-emerald-800 transition-colors uppercase tracking-wider flex items-center space-x-1 cursor-pointer"
                }, {
                  default: withCtx(() => [..._cache[29] || (_cache[29] = [
                    createBaseVNode("span", null, "See list", -1),
                    createBaseVNode("span", null, "→", -1)
                  ])]),
                  _: 1
                })
              ])
            ]),
            createBaseVNode("div", _hoisted_82, [
              createBaseVNode("div", null, [
                createBaseVNode("div", _hoisted_83, [
                  createBaseVNode("h2", _hoisted_84, [
                    createVNode(unref(BookMarked), { class: "w-4 h-4 text-emerald-600" }),
                    _cache[30] || (_cache[30] = createBaseVNode("span", null, "Most Issued", -1))
                  ]),
                  createBaseVNode("span", _hoisted_85, toDisplayString(timeRangeDescription.value), 1)
                ]),
                _cache[31] || (_cache[31] = createBaseVNode("p", { class: "text-[10px] text-slate-400 font-semibold mb-6" }, "Top borrowed books in the selected library.", -1))
              ]),
              createBaseVNode("div", _hoisted_86, [
                createBaseVNode("div", _hoisted_87, [
                  createBaseVNode("span", null, toDisplayString(yAxisMax.value), 1),
                  createBaseVNode("span", null, toDisplayString(Math.round(yAxisMax.value * 0.75)), 1),
                  createBaseVNode("span", null, toDisplayString(Math.round(yAxisMax.value * 0.5)), 1),
                  createBaseVNode("span", null, toDisplayString(Math.round(yAxisMax.value * 0.25)), 1),
                  _cache[32] || (_cache[32] = createBaseVNode("span", null, "0", -1))
                ]),
                (openBlock(true), createElementBlock(Fragment, null, renderList(mostIssuedBooks.value, (book, index) => {
                  return openBlock(), createElementBlock("div", {
                    key: index,
                    class: "flex-1 h-full flex flex-col justify-end items-center group cursor-pointer relative"
                  }, [
                    createBaseVNode("div", _hoisted_88, toDisplayString(book.count) + " issued ", 1),
                    createBaseVNode("div", _hoisted_89, [
                      createBaseVNode("div", {
                        class: "w-full bg-gradient-to-t from-emerald-600 to-teal-500 rounded-full transition-all duration-500 group-hover:brightness-105",
                        style: normalizeStyle({ height: book.count / yAxisMax.value * 100 + "%" })
                      }, null, 4)
                    ]),
                    createBaseVNode("span", {
                      class: "text-[9px] font-bold text-slate-400 mt-2 truncate w-14 text-center",
                      title: book.title
                    }, toDisplayString(book.title), 9, _hoisted_90)
                  ]);
                }), 128)),
                mostIssuedBooks.value.length === 0 ? (openBlock(), createElementBlock("div", _hoisted_91, " No borrowing statistics for this period ")) : createCommentVNode("", true)
              ])
            ])
          ]),
          createBaseVNode("div", _hoisted_92, [
            createBaseVNode("div", _hoisted_93, [
              createBaseVNode("div", _hoisted_94, [
                createBaseVNode("h2", _hoisted_95, [
                  createVNode(unref(Award), { class: "w-4 h-4 text-emerald-600" }),
                  _cache[33] || (_cache[33] = createBaseVNode("span", null, "Top Active Students", -1))
                ]),
                _cache[34] || (_cache[34] = createBaseVNode("p", { class: "text-[10px] text-slate-400 font-semibold mt-0.5" }, "Registered students with most library study time.", -1))
              ]),
              createBaseVNode("div", _hoisted_96, [
                topStudents.value.length === 0 ? (openBlock(), createElementBlock("div", _hoisted_97, [
                  createVNode(unref(Award), { class: "w-8 h-8 text-slate-200 mx-auto mb-2" }),
                  _cache[35] || (_cache[35] = createBaseVNode("p", { class: "text-[11px] text-slate-400 font-bold uppercase tracking-wider" }, "No student data available", -1))
                ])) : (openBlock(true), createElementBlock(Fragment, { key: 1 }, renderList(topStudents.value, (student, index) => {
                  return openBlock(), createElementBlock("div", {
                    key: student.id,
                    class: "flex items-center justify-between p-3.5 bg-slate-50/50 hover:bg-slate-50 border border-slate-100 rounded-xl transition-colors"
                  }, [
                    createBaseVNode("div", _hoisted_98, [
                      createBaseVNode("div", _hoisted_99, " #" + toDisplayString(index + 1), 1),
                      createBaseVNode("div", null, [
                        createBaseVNode("h4", _hoisted_100, toDisplayString(student.name), 1),
                        createBaseVNode("p", _hoisted_101, toDisplayString(student.hours || 0) + " Hours Logged", 1)
                      ])
                    ])
                  ]);
                }), 128))
              ])
            ]),
            createVNode(PeakTrafficHoursChart, {
              data: hourlyDistribution.value,
              "total-bookings": stats.value.total_bookings
            }, null, 8, ["data", "total-bookings"])
          ])
        ])) : createCommentVNode("", true),
        activeView.value === "reports" ? (openBlock(), createElementBlock("div", _hoisted_102, [
          createVNode(unref(ReportsPage))
        ])) : createCommentVNode("", true)
      ]);
    };
  }
});
const AnalyticsPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-ccfa6660"]]);
export {
  AnalyticsPage as default
};
