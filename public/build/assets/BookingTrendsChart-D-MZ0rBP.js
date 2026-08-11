import { d as defineComponent, r as ref, a as computed, b as createElementBlock, p as createCommentVNode, e as createBaseVNode, F as Fragment, k as renderList, x as normalizeStyle, t as toDisplayString, m as openBlock, _ as _export_sfc } from "./main-BeUqjoax.js";
const _hoisted_1 = { class: "relative w-full font-outfit select-none" };
const _hoisted_2 = {
  key: 0,
  class: "h-64 flex items-center justify-center text-slate-400 text-xs italic"
};
const _hoisted_3 = {
  key: 1,
  class: "relative w-full"
};
const _hoisted_4 = {
  id: "smartAreaGrad",
  x1: "0",
  y1: "0",
  x2: "0",
  y2: "1"
};
const _hoisted_5 = ["stop-color"];
const _hoisted_6 = ["stop-color"];
const _hoisted_7 = ["y1", "x2", "y2"];
const _hoisted_8 = ["y1", "x2", "y2"];
const _hoisted_9 = ["x", "y"];
const _hoisted_10 = ["x", "y"];
const _hoisted_11 = ["d"];
const _hoisted_12 = ["d", "stroke"];
const _hoisted_13 = { key: 2 };
const _hoisted_14 = ["x1", "x2", "y2"];
const _hoisted_15 = ["cx", "cy", "fill"];
const _hoisted_16 = { class: "text-[10px] font-semibold uppercase tracking-wider text-slate-400 mb-0.5" };
const _hoisted_17 = { class: "flex items-center space-x-2" };
const _hoisted_18 = { class: "text-xs font-semibold text-slate-700" };
const paddingLeft = 45;
const paddingRight = 30;
const paddingTop = 25;
const paddingBottom = 40;
const chartWidth = 700;
const chartHeight = 260;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "BookingTrendsChart",
  props: {
    data: {},
    xKey: { default: "label" },
    yKey: { default: "value" },
    label: { default: "Bookings" },
    color: { default: "#059669" },
    height: { default: 280 }
  },
  setup(__props) {
    const props = __props;
    const activeIndex = ref(null);
    const tooltipX = ref(0);
    const tooltipY = ref(0);
    const innerWidth = chartWidth - paddingLeft - paddingRight;
    const innerHeight = chartHeight - paddingTop - paddingBottom;
    const maxVal = computed(() => {
      if (!props.data || props.data.length === 0) return 5;
      let max = 0;
      props.data.forEach((item) => {
        const val = Number(item[props.yKey] || 0);
        if (val > max) max = val;
      });
      if (max === 0) return 5;
      return Math.ceil(max * 1.2);
    });
    const yTicks = computed(() => {
      const max = maxVal.value;
      return [0, Math.round(max * 0.25), Math.round(max * 0.5), Math.round(max * 0.75), max];
    });
    const points = computed(() => {
      if (!props.data || props.data.length === 0) return [];
      const max = maxVal.value;
      const count = props.data.length;
      return props.data.map((item, index) => {
        const x = paddingLeft + (count > 1 ? index * innerWidth / (count - 1) : innerWidth / 2);
        const val = Number(item[props.yKey] || 0);
        const y = chartHeight - paddingBottom - val * innerHeight / max;
        return { x, y, value: val, label: String(item[props.xKey] || "") };
      });
    });
    const linePath = computed(() => {
      const pts = points.value;
      if (pts.length === 0) return "";
      if (pts.length === 1) return `M ${pts[0].x} ${pts[0].y}`;
      return pts.reduce((acc, point, idx) => {
        if (idx === 0) return `M ${point.x} ${point.y}`;
        const prev = pts[idx - 1];
        const cp1x = prev.x + (point.x - prev.x) / 2;
        const cp1y = prev.y;
        const cp2x = prev.x + (point.x - prev.x) / 2;
        const cp2y = point.y;
        return `${acc} C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${point.x} ${point.y}`;
      }, "");
    });
    const areaPath = computed(() => {
      const line = linePath.value;
      if (!line) return "";
      const pts = points.value;
      if (pts.length === 0) return "";
      const firstPt = pts[0];
      const lastPt = pts[pts.length - 1];
      const bottomY = chartHeight - paddingBottom;
      return `${line} L ${lastPt.x} ${bottomY} L ${firstPt.x} ${bottomY} Z`;
    });
    const handleMouseMove = (event) => {
      if (!props.data || props.data.length === 0) return;
      const svg = event.currentTarget;
      const rect = svg.getBoundingClientRect();
      const clientX = event.clientX - rect.left;
      const scaleX = chartWidth / rect.width;
      const svgX = clientX * scaleX;
      let nearestIdx = 0;
      let minDist = Infinity;
      const pts = points.value;
      for (let i = 0; i < pts.length; i++) {
        const dist = Math.abs(pts[i].x - svgX);
        if (dist < minDist) {
          minDist = dist;
          nearestIdx = i;
        }
      }
      activeIndex.value = nearestIdx;
      if (pts[nearestIdx]) {
        tooltipX.value = pts[nearestIdx].x;
        tooltipY.value = pts[nearestIdx].y;
      }
    };
    const handleTouchMove = (event) => {
      if (!props.data || props.data.length === 0 || !event.touches[0]) return;
      const svg = event.currentTarget;
      const rect = svg.getBoundingClientRect();
      const clientX = event.touches[0].clientX - rect.left;
      const scaleX = chartWidth / rect.width;
      const svgX = clientX * scaleX;
      let nearestIdx = 0;
      let minDist = Infinity;
      const pts = points.value;
      for (let i = 0; i < pts.length; i++) {
        const dist = Math.abs(pts[i].x - svgX);
        if (dist < minDist) {
          minDist = dist;
          nearestIdx = i;
        }
      }
      activeIndex.value = nearestIdx;
      if (pts[nearestIdx]) {
        tooltipX.value = pts[nearestIdx].x;
        tooltipY.value = pts[nearestIdx].y;
      }
    };
    const handleMouseLeave = () => {
      activeIndex.value = null;
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        !__props.data || __props.data.length === 0 ? (openBlock(), createElementBlock("div", _hoisted_2, " No booking trend data for this period ")) : (openBlock(), createElementBlock("div", _hoisted_3, [
          (openBlock(), createElementBlock("svg", {
            viewBox: "0 0 700 260",
            class: "w-full h-auto overflow-visible cursor-crosshair touch-none",
            onMousemove: handleMouseMove,
            onMouseleave: handleMouseLeave,
            onTouchstartPassive: handleTouchMove,
            onTouchmovePassive: handleTouchMove,
            onTouchend: handleMouseLeave
          }, [
            createBaseVNode("defs", null, [
              createBaseVNode("linearGradient", _hoisted_4, [
                createBaseVNode("stop", {
                  offset: "0%",
                  "stop-color": __props.color,
                  "stop-opacity": "0.14"
                }, null, 8, _hoisted_5),
                createBaseVNode("stop", {
                  offset: "100%",
                  "stop-color": __props.color,
                  "stop-opacity": "0.0"
                }, null, 8, _hoisted_6)
              ])
            ]),
            (openBlock(true), createElementBlock(Fragment, null, renderList(yTicks.value, (tick, idx) => {
              return openBlock(), createElementBlock("line", {
                key: idx,
                x1: paddingLeft,
                y1: chartHeight - paddingBottom - tick * innerHeight / maxVal.value,
                x2: chartWidth - paddingRight,
                y2: chartHeight - paddingBottom - tick * innerHeight / maxVal.value,
                stroke: "#f1f5f9",
                "stroke-width": "1",
                "stroke-dasharray": "4 4"
              }, null, 8, _hoisted_7);
            }), 128)),
            createBaseVNode("line", {
              x1: paddingLeft,
              y1: chartHeight - paddingBottom,
              x2: chartWidth - paddingRight,
              y2: chartHeight - paddingBottom,
              stroke: "#e2e8f0",
              "stroke-width": "1"
            }, null, 8, _hoisted_8),
            (openBlock(true), createElementBlock(Fragment, null, renderList(yTicks.value, (tick, idx) => {
              return openBlock(), createElementBlock("text", {
                key: "lbl-y-" + idx,
                x: paddingLeft - 10,
                y: chartHeight - paddingBottom - tick * innerHeight / maxVal.value + 4,
                "text-anchor": "end",
                "font-size": "9.5",
                fill: "#64748b",
                "font-weight": "500"
              }, toDisplayString(tick), 9, _hoisted_9);
            }), 128)),
            (openBlock(true), createElementBlock(Fragment, null, renderList(points.value.filter((_, i) => i % Math.max(1, Math.floor(points.value.length / 8)) === 0 || i === points.value.length - 1), (pt, idx) => {
              return openBlock(), createElementBlock("text", {
                key: "lbl-x-" + idx,
                x: pt.x,
                y: chartHeight - paddingBottom + 20,
                "text-anchor": "middle",
                "font-size": "9.5",
                fill: "#64748b",
                "font-weight": "500"
              }, toDisplayString(pt.label), 9, _hoisted_10);
            }), 128)),
            areaPath.value ? (openBlock(), createElementBlock("path", {
              key: 0,
              d: areaPath.value,
              fill: "url(#smartAreaGrad)"
            }, null, 8, _hoisted_11)) : createCommentVNode("", true),
            linePath.value ? (openBlock(), createElementBlock("path", {
              key: 1,
              d: linePath.value,
              fill: "none",
              stroke: __props.color,
              "stroke-width": "1.8",
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              class: "transition-all duration-300"
            }, null, 8, _hoisted_12)) : createCommentVNode("", true),
            activeIndex.value !== null && points.value[activeIndex.value] ? (openBlock(), createElementBlock("g", _hoisted_13, [
              createBaseVNode("line", {
                x1: tooltipX.value,
                y1: paddingTop,
                x2: tooltipX.value,
                y2: chartHeight - paddingBottom,
                stroke: "#cbd5e1",
                "stroke-width": "1.2",
                "stroke-dasharray": "3 3"
              }, null, 8, _hoisted_14),
              createBaseVNode("circle", {
                cx: tooltipX.value,
                cy: points.value[activeIndex.value].y,
                r: "3.5",
                fill: __props.color,
                stroke: "#ffffff",
                "stroke-width": "1.8",
                class: "shadow"
              }, null, 8, _hoisted_15)
            ])) : createCommentVNode("", true)
          ], 32)),
          activeIndex.value !== null && points.value[activeIndex.value] ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: "absolute z-50 rounded-xl border border-slate-200/80 bg-white/95 backdrop-blur-md px-3.5 py-2 shadow-lg pointer-events-none transition-all duration-150 text-left",
            style: normalizeStyle({
              left: tooltipX.value / chartWidth * 100 > 70 ? "auto" : `${tooltipX.value / chartWidth * 100}%`,
              right: tooltipX.value / chartWidth * 100 > 70 ? `${100 - tooltipX.value / chartWidth * 100}%` : "auto",
              top: "12px"
            })
          }, [
            createBaseVNode("p", _hoisted_16, toDisplayString(points.value[activeIndex.value].label), 1),
            createBaseVNode("div", _hoisted_17, [
              createBaseVNode("span", {
                class: "w-2 h-2 rounded-full",
                style: normalizeStyle({ backgroundColor: __props.color })
              }, null, 4),
              createBaseVNode("span", _hoisted_18, toDisplayString(points.value[activeIndex.value].value) + " " + toDisplayString(__props.label), 1)
            ])
          ], 4)) : createCommentVNode("", true)
        ]))
      ]);
    };
  }
});
const BookingTrendsChart = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-0e08e68b"]]);
export {
  BookingTrendsChart as B
};
