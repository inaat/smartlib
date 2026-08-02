import { d as defineComponent, c as computed, a as createElementBlock, n as normalizeClass, b as createBaseVNode, j as createCommentVNode, t as toDisplayString, l as openBlock, h as createBlock, I as Teleport, q as normalizeStyle, f as createVNode, u as unref, r as ref, z as withModifiers, F as Fragment, k as renderList, H as onUnmounted, e as createStaticVNode, E as watch, o as onMounted, p as withDirectives, D as vModelSelect, i as createTextVNode, s as vShow } from "./main-BGbL_8Ba.js";
import { U as User } from "./user-C1TGaPSp.js";
import { C as Clock } from "./clock-Cir2UmjW.js";
import { M as Monitor } from "./monitor-cSjE3eN2.js";
import { P as PanelsTopLeft } from "./panels-top-left-8LZJl8pP.js";
import { Z as Zap } from "./zap-DwN4yWwn.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import { B as Building2 } from "./building-2-BD5xFb_R.js";
import { C as ChevronDown } from "./chevron-down-G9GrT3uG.js";
const _hoisted_1$8 = { key: 0 };
const _hoisted_2$8 = ["fill"];
const _hoisted_3$7 = ["fill"];
const _hoisted_4$7 = {
  key: 0,
  x: "23",
  y: "44",
  width: "54",
  height: "28",
  rx: "8",
  fill: "#FFFFFF",
  stroke: "#E2E8F0",
  "stroke-width": "1.2",
  filter: "url(#pillShadow)"
};
const _hoisted_5$6 = {
  key: 1,
  x: "50",
  y: "64",
  "text-anchor": "middle",
  fill: "#1E293B",
  "font-size": "18",
  "font-weight": "800",
  "font-family": "'Outfit', sans-serif, system-ui"
};
const _hoisted_6$6 = { key: 1 };
const _hoisted_7$6 = ["fill"];
const _hoisted_8$6 = ["fill"];
const _hoisted_9$6 = {
  key: 0,
  x: "23",
  y: "28",
  width: "54",
  height: "28",
  rx: "8",
  fill: "#FFFFFF",
  stroke: "#E2E8F0",
  "stroke-width": "1.2",
  filter: "url(#pillShadow)"
};
const _hoisted_10$3 = {
  key: 1,
  x: "50",
  y: "48",
  "text-anchor": "middle",
  fill: "#1E293B",
  "font-size": "18",
  "font-weight": "800",
  "font-family": "'Outfit', sans-serif, system-ui"
};
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "SeatSvg",
  props: {
    rotate: { type: Boolean, default: false },
    highlighted: { type: Boolean, default: false },
    status: { default: "available" },
    seatNumber: { default: "" }
  },
  setup(__props) {
    const props = __props;
    const displaySeatNumber = computed(() => {
      if (props.seatNumber === void 0 || props.seatNumber === null || props.seatNumber === "") return "";
      const str = String(props.seatNumber);
      const parts = str.split("-");
      return parts[parts.length - 1] || str;
    });
    const primaryStatusColor = computed(() => {
      switch (props.status) {
        case "available":
          return "#10B981";
        // Emerald
        case "occupied":
          return "#EF4444";
        // Red
        case "free_soon":
          return "#F59E0B";
        // Amber
        case "reserved":
          return "#3B82F6";
        // Blue
        case "maintenance":
        case "disabled":
          return "#94A3B8";
        // Slate
        case "overstay":
          return "#F97316";
        // Orange
        case "serious_overstay":
          return "#A855F7";
        // Purple
        default:
          return "#94A3B8";
      }
    });
    const darkStatusColor = computed(() => {
      switch (props.status) {
        case "available":
          return "#047857";
        case "occupied":
          return "#B91C1C";
        case "free_soon":
          return "#B45309";
        case "reserved":
          return "#1D4ED8";
        case "maintenance":
        case "disabled":
          return "#475569";
        case "overstay":
          return "#C2410C";
        case "serious_overstay":
          return "#7E22CE";
        default:
          return "#475569";
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("svg", {
        viewBox: "0 0 100 100",
        class: normalizeClass(["w-full h-full transition-all duration-300 select-none", __props.highlighted ? "scale-105 filter drop-shadow-md" : ""]),
        xmlns: "http://www.w3.org/2000/svg"
      }, [
        _cache[10] || (_cache[10] = createBaseVNode("defs", null, [
          createBaseVNode("filter", {
            id: "pillShadow",
            x: "-10%",
            y: "-10%",
            width: "120%",
            height: "130%"
          }, [
            createBaseVNode("feDropShadow", {
              dx: "0",
              dy: "2",
              stdDeviation: "2",
              "flood-color": "#0f172a",
              "flood-opacity": "0.15"
            })
          ])
        ], -1)),
        !__props.rotate ? (openBlock(), createElementBlock("g", _hoisted_1$8, [
          createBaseVNode("path", {
            d: "M 18 8 Q 50 -2 82 8 L 76 25 Q 50 15 24 25 Z",
            fill: darkStatusColor.value
          }, null, 8, _hoisted_2$8),
          _cache[0] || (_cache[0] = createBaseVNode("rect", {
            x: "7",
            y: "22",
            width: "13",
            height: "46",
            rx: "6",
            fill: "#E2E8F0",
            stroke: "#CBD5E1",
            "stroke-width": "1.5"
          }, null, -1)),
          _cache[1] || (_cache[1] = createBaseVNode("rect", {
            x: "80",
            y: "22",
            width: "13",
            height: "46",
            rx: "6",
            fill: "#E2E8F0",
            stroke: "#CBD5E1",
            "stroke-width": "1.5"
          }, null, -1)),
          _cache[2] || (_cache[2] = createBaseVNode("rect", {
            x: "9",
            y: "26",
            width: "9",
            height: "38",
            rx: "4.5",
            fill: "#F8FAFC"
          }, null, -1)),
          _cache[3] || (_cache[3] = createBaseVNode("rect", {
            x: "82",
            y: "26",
            width: "9",
            height: "38",
            rx: "4.5",
            fill: "#F8FAFC"
          }, null, -1)),
          createBaseVNode("rect", {
            x: "20",
            y: "22",
            width: "60",
            height: "56",
            rx: "14",
            fill: primaryStatusColor.value
          }, null, 8, _hoisted_3$7),
          _cache[4] || (_cache[4] = createBaseVNode("rect", {
            x: "23",
            y: "25",
            width: "54",
            height: "20",
            rx: "8",
            fill: "#FFFFFF",
            opacity: "0.15"
          }, null, -1)),
          displaySeatNumber.value ? (openBlock(), createElementBlock("rect", _hoisted_4$7)) : createCommentVNode("", true),
          displaySeatNumber.value ? (openBlock(), createElementBlock("text", _hoisted_5$6, toDisplayString(displaySeatNumber.value), 1)) : createCommentVNode("", true)
        ])) : (openBlock(), createElementBlock("g", _hoisted_6$6, [
          createBaseVNode("path", {
            d: "M 18 92 Q 50 102 82 92 L 76 75 Q 50 85 24 75 Z",
            fill: darkStatusColor.value
          }, null, 8, _hoisted_7$6),
          _cache[5] || (_cache[5] = createBaseVNode("rect", {
            x: "7",
            y: "32",
            width: "13",
            height: "46",
            rx: "6",
            fill: "#E2E8F0",
            stroke: "#CBD5E1",
            "stroke-width": "1.5"
          }, null, -1)),
          _cache[6] || (_cache[6] = createBaseVNode("rect", {
            x: "80",
            y: "32",
            width: "13",
            height: "46",
            rx: "6",
            fill: "#E2E8F0",
            stroke: "#CBD5E1",
            "stroke-width": "1.5"
          }, null, -1)),
          _cache[7] || (_cache[7] = createBaseVNode("rect", {
            x: "9",
            y: "36",
            width: "9",
            height: "38",
            rx: "4.5",
            fill: "#F8FAFC"
          }, null, -1)),
          _cache[8] || (_cache[8] = createBaseVNode("rect", {
            x: "82",
            y: "36",
            width: "9",
            height: "38",
            rx: "4.5",
            fill: "#F8FAFC"
          }, null, -1)),
          createBaseVNode("rect", {
            x: "20",
            y: "22",
            width: "60",
            height: "56",
            rx: "14",
            fill: primaryStatusColor.value
          }, null, 8, _hoisted_8$6),
          _cache[9] || (_cache[9] = createBaseVNode("rect", {
            x: "23",
            y: "53",
            width: "54",
            height: "20",
            rx: "8",
            fill: "#FFFFFF",
            opacity: "0.15"
          }, null, -1)),
          displaySeatNumber.value ? (openBlock(), createElementBlock("rect", _hoisted_9$6)) : createCommentVNode("", true),
          displaySeatNumber.value ? (openBlock(), createElementBlock("text", _hoisted_10$3, toDisplayString(displaySeatNumber.value), 1)) : createCommentVNode("", true)
        ]))
      ], 2);
    };
  }
});
const _hoisted_1$7 = { class: "p-3 space-y-2.5" };
const _hoisted_2$7 = { class: "flex items-center justify-between" };
const _hoisted_3$6 = { class: "text-xs font-bold text-slate-800 uppercase tracking-tight" };
const _hoisted_4$6 = { class: "flex items-center space-x-2 bg-slate-50/50 p-2 rounded-lg border border-slate-100/50" };
const _hoisted_5$5 = { class: "flex-1 min-w-0" };
const _hoisted_6$5 = { class: "text-[10px] font-bold text-slate-800 truncate leading-none mb-0.5" };
const _hoisted_7$5 = { class: "text-[8px] font-medium text-slate-400 flex items-center gap-0.5" };
const _hoisted_8$5 = { class: "flex items-center justify-between pt-2 border-t border-slate-100/60" };
const _hoisted_9$5 = { class: "flex items-center gap-2" };
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "SeatPopover",
  props: {
    seat: {},
    sectionName: {},
    visible: { type: Boolean },
    anchorRect: {}
  },
  setup(__props) {
    const props = __props;
    const isAvailable = computed(() => props.seat.status === "available");
    const popoverStyle = computed(() => {
      if (!props.anchorRect) return {};
      const popW = 192;
      const popH = 180;
      const gap = 8;
      let left = props.anchorRect.left + props.anchorRect.width / 2 - popW / 2;
      left = Math.max(8, Math.min(left, window.innerWidth - popW - 8));
      const spaceAbove = props.anchorRect.top;
      let top;
      if (spaceAbove > popH + gap) {
        top = props.anchorRect.top - popH - gap;
      } else {
        top = props.anchorRect.top + props.anchorRect.height + gap;
      }
      top = Math.max(8, Math.min(top, window.innerHeight - popH - 8));
      return {
        top: top + "px",
        left: left + "px"
      };
    });
    const statusLabel = computed(() => {
      switch (props.seat.status) {
        case "available":
          return "Available";
        case "occupied":
          return "Occupied";
        case "free_soon":
          return "Free Soon";
        case "reserved":
          return "Reserved";
        case "maintenance":
          return "Maintenance";
        case "overstay":
          return "Overstay";
        case "serious_overstay":
          return "Serious Overstay";
        default:
          return "Available";
      }
    });
    const occupancyLabel = computed(() => {
      if (props.seat.current_booking?.user_name) return props.seat.current_booking.user_name;
      if (isAvailable.value) return "No Active User";
      if (props.seat.status === "maintenance") return "Maintenance";
      if (props.seat.status === "free_soon") return "Free Soon";
      if (props.seat.status === "reserved") return "Reserved";
      if (props.seat.status === "overstay") return "Overstay Alert";
      if (props.seat.status === "serious_overstay") return "Critical Overstay";
      return "Occupied";
    });
    const displayTimeLeft = computed(() => {
      if (props.seat.current_booking?.minutes_left !== void 0 && props.seat.current_booking?.minutes_left !== null) {
        return props.seat.current_booking.minutes_left;
      }
      if (props.seat.remaining_minutes !== void 0 && props.seat.remaining_minutes !== null) {
        return props.seat.remaining_minutes;
      }
      return null;
    });
    const formatTimeLeft = (minutes) => {
      if (minutes < 0) return "Expired";
      if (minutes < 60) return `${minutes}m left`;
      const hrs = Math.floor(minutes / 60);
      const mins = minutes % 60;
      return mins > 0 ? `${hrs}h ${mins}m left` : `${hrs}h left`;
    };
    const statusTheme = computed(() => {
      const map = {
        available: { bg: "bg-emerald-50", text: "text-emerald-700", border: "border-emerald-100", hex: "#10B981" },
        occupied: { bg: "bg-rose-50", text: "text-rose-700", border: "border-rose-100", hex: "#F43F5E" },
        free_soon: { bg: "bg-amber-50", text: "text-amber-700", border: "border-amber-100", hex: "#F59E0B" },
        reserved: { bg: "bg-blue-50", text: "text-blue-700", border: "border-blue-100", hex: "#3B82F6" },
        overstay: { bg: "bg-orange-50", text: "text-orange-700", border: "border-orange-100", hex: "#F97316" },
        serious_overstay: { bg: "bg-purple-50", text: "text-purple-700", border: "border-purple-100", hex: "#A855F7" },
        maintenance: { bg: "bg-slate-50", text: "text-slate-650", border: "border-slate-100", hex: "#6B7280" }
      };
      return map[props.seat?.status] || { bg: "bg-slate-50", text: "text-slate-650", border: "border-slate-100", hex: "#6B7280" };
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Teleport, { to: "body" }, [
        __props.visible ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: "fixed w-48 bg-white/95 backdrop-blur-md rounded-xl shadow-[0_8px_24px_rgba(15,23,42,0.12)] border border-slate-100 overflow-hidden z-[9999] pointer-events-none animate-popover-in text-left",
          style: normalizeStyle(popoverStyle.value)
        }, [
          createBaseVNode("div", {
            class: "h-[2px] w-full",
            style: normalizeStyle({ backgroundColor: statusTheme.value.hex })
          }, null, 4),
          createBaseVNode("div", _hoisted_1$7, [
            createBaseVNode("div", _hoisted_2$7, [
              createBaseVNode("span", _hoisted_3$6, "Seat " + toDisplayString(__props.seat.seat_number), 1),
              createBaseVNode("span", {
                class: normalizeClass(["text-[8px] font-bold px-1.5 py-0.5 rounded-full border uppercase tracking-wider", statusTheme.value.bg, statusTheme.value.text, statusTheme.value.border])
              }, toDisplayString(statusLabel.value), 3)
            ]),
            createBaseVNode("div", _hoisted_4$6, [
              createVNode(unref(User), { class: "w-3.5 h-3.5 text-slate-450 flex-shrink-0" }),
              createBaseVNode("div", _hoisted_5$5, [
                createBaseVNode("p", _hoisted_6$5, toDisplayString(occupancyLabel.value), 1),
                createBaseVNode("p", _hoisted_7$5, [
                  createVNode(unref(Clock), { class: "w-2.5 h-2.5 text-slate-350 flex-shrink-0" }),
                  createBaseVNode("span", null, toDisplayString(displayTimeLeft.value !== null ? formatTimeLeft(displayTimeLeft.value) : isAvailable.value ? "Ready" : "In Use"), 1)
                ])
              ])
            ]),
            createBaseVNode("div", _hoisted_8$5, [
              createBaseVNode("div", _hoisted_9$5, [
                createVNode(unref(Monitor), {
                  class: normalizeClass(["w-3.5 h-3.5 transition-colors", __props.seat.has_computer ? "text-emerald-600" : "text-slate-300"])
                }, null, 8, ["class"]),
                createVNode(unref(PanelsTopLeft), {
                  class: normalizeClass(["w-3.5 h-3.5 transition-colors", __props.seat.near_window ? "text-sky-500" : "text-slate-300"])
                }, null, 8, ["class"]),
                createVNode(unref(Zap), {
                  class: normalizeClass(["w-3.5 h-3.5 transition-colors", __props.seat.socket_count > 0 ? "text-amber-500" : "text-slate-300"])
                }, null, 8, ["class"])
              ])
            ])
          ])
        ], 4)) : createCommentVNode("", true)
      ]);
    };
  }
});
const SeatPopover = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-ce34296e"]]);
const _hoisted_1$6 = { class: "relative w-full overflow-auto" };
const _hoisted_2$6 = ["draggable", "onDragstart", "onClick", "onMouseenter"];
const _hoisted_3$5 = {
  key: 1,
  class: "space-y-8 text-left"
};
const _hoisted_4$5 = { class: "text-xs font-bold uppercase tracking-wider text-slate-400 border-b border-slate-100 pb-2 flex items-center space-x-1.5" };
const _hoisted_5$4 = { class: "text-[10px] font-bold text-slate-350" };
const _hoisted_6$4 = { class: "grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6 justify-items-center p-2 pt-3 pb-2" };
const _hoisted_7$4 = ["onClick", "onMouseenter"];
const _hoisted_8$4 = { class: "w-10 h-10 mt-1" };
const _hoisted_9$4 = { class: "text-center w-full" };
const _hoisted_10$2 = { class: "absolute top-1.5 right-1.5 flex space-x-0.5" };
const _hoisted_11$2 = {
  key: 0,
  class: "w-1.5 h-1.5 rounded-full bg-indigo-500"
};
const _hoisted_12$2 = {
  key: 1,
  class: "w-1.5 h-1.5 rounded-full bg-sky-400"
};
const _hoisted_13$2 = {
  key: 2,
  class: "w-1.5 h-1.5 rounded-full bg-orange-400"
};
const _hoisted_14$2 = {
  key: 1,
  class: "grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6 justify-items-center p-2 pt-3 pb-2"
};
const _hoisted_15$2 = ["onClick", "onMouseenter"];
const _hoisted_16$2 = { class: "w-10 h-10 mt-1" };
const _hoisted_17$2 = { class: "text-center w-full" };
const _hoisted_18$2 = { class: "absolute top-1.5 right-1.5 flex space-x-0.5" };
const _hoisted_19$2 = {
  key: 0,
  class: "w-1.5 h-1.5 rounded-full bg-indigo-500"
};
const _hoisted_20$2 = {
  key: 1,
  class: "w-1.5 h-1.5 rounded-full bg-sky-400"
};
const _hoisted_21$1 = {
  key: 2,
  class: "w-1.5 h-1.5 rounded-full bg-orange-400"
};
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "IndividualSeatGrid",
  props: {
    seats: {},
    selectedSeat: { default: null },
    isDesigner: { type: Boolean, default: false },
    useCanvas: { type: Boolean, default: true },
    canvasWidth: { default: 800 },
    canvasHeight: { default: 600 },
    gridSnap: { type: Boolean, default: true },
    sectionName: { default: "Main Section" },
    sections: { default: () => [] }
  },
  emits: ["seat-click", "layout-change"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const hoveredSeatId = ref(null);
    const hoveredSeat = ref(null);
    const hoveredAnchorRect = ref(null);
    const draggedSeat = ref(null);
    const dragOffset = ref({ x: 0, y: 0 });
    let hoverTimer = null;
    const fallbackSeat = { id: 0, seat_number: "", status: "available", has_computer: false, near_window: false, socket_count: 0, seat_type: "open" };
    const onSeatHover = (event, seat) => {
      if (hoverTimer) clearTimeout(hoverTimer);
      const el = event.currentTarget;
      const rect = el.getBoundingClientRect();
      hoverTimer = setTimeout(() => {
        hoveredSeatId.value = seat.id;
        hoveredSeat.value = seat;
        hoveredAnchorRect.value = {
          top: rect.top,
          left: rect.left,
          width: rect.width,
          height: rect.height
        };
      }, 1500);
    };
    const onSeatLeave = () => {
      if (hoverTimer) {
        clearTimeout(hoverTimer);
        hoverTimer = null;
      }
      hoveredSeatId.value = null;
      hoveredSeat.value = null;
      hoveredAnchorRect.value = null;
    };
    const isAllSections = computed(() => props.sectionName === "All Sections");
    const groupedSections = computed(() => {
      if (!props.sections || props.sections.length === 0) return [];
      const groupsMap = /* @__PURE__ */ new Map();
      props.seats.forEach((seat) => {
        if (seat.section_id) {
          if (!groupsMap.has(seat.section_id)) {
            groupsMap.set(seat.section_id, []);
          }
          groupsMap.get(seat.section_id).push(seat);
        }
      });
      const sortedSections = [...props.sections].sort((a, b) => a.name.localeCompare(b.name, void 0, { numeric: true, sensitivity: "base" }));
      return sortedSections.map((sec) => ({
        id: sec.id,
        name: sec.name,
        seats: (groupsMap.get(sec.id) || []).sort((a, b) => naturalCompare(a.seat_number, b.seat_number))
      })).filter((g) => g.seats.length > 0);
    });
    const onDragStart = (event, seat) => {
      if (!props.isDesigner) return;
      draggedSeat.value = seat;
      const rect = event.target.getBoundingClientRect();
      dragOffset.value = {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top
      };
      event.dataTransfer?.setData("text/plain", seat.id.toString());
    };
    const onDrop = (event) => {
      if (!props.isDesigner || !draggedSeat.value) return;
      const container = event.currentTarget.getBoundingClientRect();
      let x = Math.round(event.clientX - container.left - dragOffset.value.x);
      let y = Math.round(event.clientY - container.top - dragOffset.value.y);
      if (props.gridSnap) {
        x = Math.round(x / 20) * 20;
        y = Math.round(y / 20) * 20;
      }
      const finalX = Math.max(0, Math.min(x, props.canvasWidth - 64));
      const finalY = Math.max(0, Math.min(y, props.canvasHeight - 64));
      emit("layout-change", draggedSeat.value.id, finalX, finalY);
      draggedSeat.value = null;
    };
    const getStatusBgClass = (status) => {
      switch (status) {
        case "available":
          return "bg-emerald-50/40 border-emerald-100/50 text-emerald-700";
        case "occupied":
          return "bg-rose-50/40 border-rose-100/50 text-rose-700";
        case "free_soon":
          return "bg-amber-50/40 border-amber-100/50 text-amber-700";
        case "reserved":
          return "bg-blue-50/40 border-blue-100/50 text-blue-700";
        case "maintenance":
          return "bg-slate-100/40 border-slate-200/50 text-slate-500";
        case "overstay":
          return "bg-orange-50/40 border-orange-100/50 text-orange-700";
        case "serious_overstay":
          return "bg-purple-50/40 border-purple-100/50 text-purple-700";
        default:
          return "bg-slate-50 border-slate-200 text-slate-650";
      }
    };
    const naturalCompare = (a, b) => {
      const ax = [];
      const bx = [];
      a.replace(/(\d+)|(\D+)/g, function() {
        ax.push([arguments[1] ? parseInt(arguments[1], 10) : Infinity, arguments[2] || ""]);
        return "";
      });
      b.replace(/(\d+)|(\D+)/g, function() {
        bx.push([arguments[1] ? parseInt(arguments[1], 10) : Infinity, arguments[2] || ""]);
        return "";
      });
      while (ax.length && bx.length) {
        const an = ax.shift();
        const bn = bx.shift();
        const nn = an[0] !== bn[0] ? an[0] - bn[0] : an[1].localeCompare(bn[1], void 0, { sensitivity: "base" });
        if (nn) return nn;
      }
      return ax.length - bx.length;
    };
    const sortedSeats = computed(() => {
      return [...props.seats].sort((a, b) => naturalCompare(a.seat_number, b.seat_number));
    });
    const computedCanvasHeight = computed(() => {
      if (!sortedSeats.value || sortedSeats.value.length === 0) {
        return 100;
      }
      let maxY = 0;
      sortedSeats.value.forEach((seat, index) => {
        const y = seat.position_y !== null && seat.position_y !== void 0 && seat.position_y !== 0 ? seat.position_y : 50 + Math.floor(index / 10) * 95;
        if (y > maxY) {
          maxY = y;
        }
      });
      return Math.max(120, maxY + 110);
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$6, [
        __props.useCanvas ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: "relative mx-auto bg-white rounded-3xl border border-slate-150 shadow-lg transition-all overflow-visible",
          style: normalizeStyle({ width: __props.canvasWidth + "px", height: computedCanvasHeight.value + "px" }),
          onDragover: _cache[0] || (_cache[0] = withModifiers(() => {
          }, ["prevent"])),
          onDrop: _cache[1] || (_cache[1] = ($event) => onDrop($event))
        }, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(sortedSeats.value, (seat, index) => {
            return openBlock(), createElementBlock("div", {
              key: seat.id,
              draggable: __props.isDesigner,
              onDragstart: ($event) => onDragStart($event, seat),
              onClick: withModifiers(($event) => _ctx.$emit("seat-click", seat), ["stop"]),
              onMouseenter: ($event) => onSeatHover($event, seat),
              onMouseleave: onSeatLeave,
              style: normalizeStyle({
                position: "absolute",
                left: `${seat.position_x !== null && seat.position_x !== void 0 && seat.position_x !== 0 ? seat.position_x : 45 + index % 10 * 78}px`,
                top: `${seat.position_y !== null && seat.position_y !== void 0 && seat.position_y !== 0 ? seat.position_y : 50 + Math.floor(index / 10) * 95}px`
              }),
              class: normalizeClass([
                "w-16 h-16 flex items-center justify-center transition-all duration-200 select-none z-10",
                __props.isDesigner ? "cursor-move active:scale-95" : "cursor-pointer hover:scale-110 active:scale-95"
              ])
            }, [
              createVNode(_sfc_main$8, {
                status: seat.status,
                "seat-number": seat.seat_number,
                highlighted: __props.selectedSeat?.id === seat.id
              }, null, 8, ["status", "seat-number", "highlighted"])
            ], 46, _hoisted_2$6);
          }), 128))
        ], 36)) : (openBlock(), createElementBlock("div", _hoisted_3$5, [
          isAllSections.value && groupedSections.value.length > 0 ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(groupedSections.value, (group) => {
            return openBlock(), createElementBlock("div", {
              key: group.id,
              class: "space-y-4"
            }, [
              createBaseVNode("h3", _hoisted_4$5, [
                _cache[2] || (_cache[2] = createBaseVNode("span", { class: "w-1.5 h-3 bg-emerald-600 rounded-sm" }, null, -1)),
                createBaseVNode("span", null, toDisplayString(group.name) + " Section", 1),
                createBaseVNode("span", _hoisted_5$4, "(" + toDisplayString(group.seats.length) + " seats)", 1)
              ]),
              createBaseVNode("div", _hoisted_6$4, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(group.seats, (seat) => {
                  return openBlock(), createElementBlock("div", {
                    key: seat.id,
                    onClick: withModifiers(($event) => _ctx.$emit("seat-click", seat), ["stop"]),
                    onMouseenter: ($event) => onSeatHover($event, seat),
                    onMouseleave: onSeatLeave,
                    class: normalizeClass([
                      "relative w-20 h-24 rounded-2xl transition-all duration-300 flex flex-col items-center justify-between p-2 cursor-pointer shadow-sm select-none border border-slate-100",
                      hoveredSeatId.value === seat.id ? "z-50 shadow-lg" : "z-10",
                      __props.selectedSeat?.id === seat.id ? "bg-blue-50/70 border-2 border-blue-600 text-blue-700 shadow-md ring-2 ring-inset ring-blue-500/50" : getStatusBgClass(seat.status) + " hover:shadow-md hover:-translate-y-0.5"
                    ])
                  }, [
                    createBaseVNode("div", _hoisted_8$4, [
                      createVNode(_sfc_main$8, {
                        status: seat.status,
                        highlighted: __props.selectedSeat?.id === seat.id
                      }, null, 8, ["status", "highlighted"])
                    ]),
                    createBaseVNode("div", _hoisted_9$4, [
                      createBaseVNode("span", {
                        class: normalizeClass(["block text-[10px] font-bold tracking-tight leading-none mb-1.5", __props.selectedSeat?.id === seat.id ? "text-blue-600" : "text-slate-800"])
                      }, toDisplayString(seat.seat_number), 3)
                    ]),
                    createBaseVNode("div", _hoisted_10$2, [
                      seat.has_computer ? (openBlock(), createElementBlock("span", _hoisted_11$2)) : createCommentVNode("", true),
                      seat.near_window ? (openBlock(), createElementBlock("span", _hoisted_12$2)) : createCommentVNode("", true),
                      seat.socket_count > 0 ? (openBlock(), createElementBlock("span", _hoisted_13$2)) : createCommentVNode("", true)
                    ])
                  ], 42, _hoisted_7$4);
                }), 128))
              ])
            ]);
          }), 128)) : (openBlock(), createElementBlock("div", _hoisted_14$2, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(sortedSeats.value, (seat) => {
              return openBlock(), createElementBlock("div", {
                key: seat.id,
                onClick: withModifiers(($event) => _ctx.$emit("seat-click", seat), ["stop"]),
                onMouseenter: ($event) => onSeatHover($event, seat),
                onMouseleave: onSeatLeave,
                class: normalizeClass([
                  "relative w-20 h-24 rounded-2xl transition-all duration-300 flex flex-col items-center justify-between p-2 cursor-pointer shadow-sm select-none border border-slate-100",
                  hoveredSeatId.value === seat.id ? "z-50 shadow-lg" : "z-10",
                  __props.selectedSeat?.id === seat.id ? "bg-blue-50/70 border-2 border-blue-600 text-blue-700 shadow-md ring-2 ring-inset ring-blue-500/50" : getStatusBgClass(seat.status) + " hover:shadow-md hover:-translate-y-0.5"
                ])
              }, [
                createBaseVNode("div", _hoisted_16$2, [
                  createVNode(_sfc_main$8, {
                    status: seat.status,
                    highlighted: __props.selectedSeat?.id === seat.id
                  }, null, 8, ["status", "highlighted"])
                ]),
                createBaseVNode("div", _hoisted_17$2, [
                  createBaseVNode("span", {
                    class: normalizeClass(["block text-[10px] font-bold tracking-tight leading-none mb-1.5", __props.selectedSeat?.id === seat.id ? "text-blue-600" : "text-slate-800"])
                  }, toDisplayString(seat.seat_number), 3)
                ]),
                createBaseVNode("div", _hoisted_18$2, [
                  seat.has_computer ? (openBlock(), createElementBlock("span", _hoisted_19$2)) : createCommentVNode("", true),
                  seat.near_window ? (openBlock(), createElementBlock("span", _hoisted_20$2)) : createCommentVNode("", true),
                  seat.socket_count > 0 ? (openBlock(), createElementBlock("span", _hoisted_21$1)) : createCommentVNode("", true)
                ])
              ], 42, _hoisted_15$2);
            }), 128))
          ]))
        ])),
        createVNode(SeatPopover, {
          seat: hoveredSeat.value || fallbackSeat,
          "section-name": __props.sectionName,
          visible: hoveredSeatId.value !== null && !__props.isDesigner,
          "anchor-rect": hoveredAnchorRect.value
        }, null, 8, ["seat", "section-name", "visible", "anchor-rect"])
      ]);
    };
  }
});
const _hoisted_1$5 = { class: "flex items-center justify-center gap-2.5 -mb-1.5 z-20" };
const _hoisted_2$5 = ["onClick", "onMouseenter"];
const _hoisted_3$4 = { class: "w-9.5 h-9.5" };
const _hoisted_4$4 = { class: "w-full h-10 rounded-xl bg-white border border-slate-200/90 shadow-sm relative flex items-center justify-center overflow-hidden my-0 z-10" };
const _hoisted_5$3 = { class: "text-center z-10 px-2.5 py-0.5 bg-white border border-slate-200/60 rounded-md" };
const _hoisted_6$3 = { class: "text-[9.5px] font-semibold tracking-wider text-slate-500 uppercase leading-none block" };
const _hoisted_7$3 = { class: "flex items-center justify-center gap-2.5 -mt-1.5 z-20" };
const _hoisted_8$3 = ["onClick", "onMouseenter"];
const _hoisted_9$3 = { class: "w-9.5 h-9.5" };
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "TableSvg",
  props: {
    capacity: {},
    label: {},
    seats: {},
    selectedSeatId: { default: null }
  },
  emits: ["seat-click", "seat-hover", "seat-leave"],
  setup(__props) {
    const props = __props;
    const tableWidth = computed(() => {
      switch (props.capacity) {
        case 2:
          return "75px";
        case 4:
          return "125px";
        case 6:
          return "175px";
        case 8:
          return "225px";
        case 10:
          return "275px";
        case 12:
          return "325px";
        case 14:
          return "375px";
        case 16:
          return "425px";
        default:
          return "125px";
      }
    });
    const sortedSeats = computed(() => {
      return [...props.seats].sort((a, b) => a.seat_number.localeCompare(b.seat_number, void 0, { numeric: true, sensitivity: "base" }));
    });
    const topSeats = computed(() => {
      const half = Math.ceil(sortedSeats.value.length / 2);
      return sortedSeats.value.slice(0, half);
    });
    const bottomSeats = computed(() => {
      const half = Math.ceil(sortedSeats.value.length / 2);
      return sortedSeats.value.slice(half);
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: "flex flex-col items-center justify-center p-1 select-none transition-all duration-300 group hover:scale-[1.02]",
        style: normalizeStyle({ width: tableWidth.value })
      }, [
        createBaseVNode("div", _hoisted_1$5, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(topSeats.value, (seat) => {
            return openBlock(), createElementBlock("div", {
              key: seat.id,
              class: normalizeClass([
                "relative cursor-pointer transition-all duration-200 hover:scale-115 hover:-translate-y-1 active:scale-95 rounded-lg",
                __props.selectedSeatId === seat.id ? "ring-2 ring-emerald-500 ring-offset-1 scale-110 shadow-md z-30" : ""
              ]),
              onClick: withModifiers(($event) => _ctx.$emit("seat-click", seat), ["stop"]),
              onMouseenter: ($event) => _ctx.$emit("seat-hover", $event, seat),
              onMouseleave: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("seat-leave"))
            }, [
              createBaseVNode("div", _hoisted_3$4, [
                createVNode(_sfc_main$8, {
                  status: seat.status,
                  "seat-number": seat.seat_number,
                  highlighted: __props.selectedSeatId === seat.id,
                  rotate: false
                }, null, 8, ["status", "seat-number", "highlighted"])
              ])
            ], 42, _hoisted_2$5);
          }), 128))
        ]),
        createBaseVNode("div", _hoisted_4$4, [
          _cache[2] || (_cache[2] = createBaseVNode("div", { class: "absolute inset-x-4 h-[2px] top-1/2 -translate-y-1/2 flex items-center justify-around pointer-events-none opacity-30" }, [
            createBaseVNode("span", { class: "w-6 h-[2px] bg-slate-300 rounded-full" }),
            createBaseVNode("span", { class: "w-6 h-[2px] bg-slate-300 rounded-full" }),
            createBaseVNode("span", { class: "w-6 h-[2px] bg-slate-300 rounded-full" })
          ], -1)),
          createBaseVNode("div", _hoisted_5$3, [
            createBaseVNode("span", _hoisted_6$3, toDisplayString(__props.label), 1)
          ])
        ]),
        createBaseVNode("div", _hoisted_7$3, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(bottomSeats.value, (seat) => {
            return openBlock(), createElementBlock("div", {
              key: seat.id,
              class: normalizeClass([
                "relative cursor-pointer transition-all duration-200 hover:scale-115 hover:translate-y-1 active:scale-95 rounded-lg",
                __props.selectedSeatId === seat.id ? "ring-2 ring-emerald-500 ring-offset-1 scale-110 shadow-md z-30" : ""
              ]),
              onClick: withModifiers(($event) => _ctx.$emit("seat-click", seat), ["stop"]),
              onMouseenter: ($event) => _ctx.$emit("seat-hover", $event, seat),
              onMouseleave: _cache[1] || (_cache[1] = ($event) => _ctx.$emit("seat-leave"))
            }, [
              createBaseVNode("div", _hoisted_9$3, [
                createVNode(_sfc_main$8, {
                  status: seat.status,
                  "seat-number": seat.seat_number,
                  highlighted: __props.selectedSeatId === seat.id,
                  rotate: true
                }, null, 8, ["status", "seat-number", "highlighted"])
              ])
            ], 42, _hoisted_8$3);
          }), 128))
        ])
      ], 4);
    };
  }
});
const _hoisted_1$4 = { class: "w-full" };
const _hoisted_2$4 = {
  key: 0,
  class: "w-full flex flex-wrap justify-center items-center gap-x-8 sm:gap-x-12 gap-y-10 py-4 px-4 sm:px-8 mx-auto"
};
const _hoisted_3$3 = ["onClick"];
const _hoisted_4$3 = ["draggable", "onDragstart", "onClick"];
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "StudyTableGrid",
  props: {
    tables: {},
    seats: {},
    selectedSeat: { default: null },
    isDesigner: { type: Boolean, default: false },
    useCanvas: { type: Boolean, default: true },
    canvasWidth: { default: 800 },
    canvasHeight: { default: 600 },
    gridSnap: { type: Boolean, default: true },
    sectionName: { default: "Main Section" },
    tableCapacity: { default: 4 },
    tablesPerRow: { default: 3 }
  },
  emits: ["seat-click", "table-click", "table-layout-change"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const hoveredSeatId = ref(null);
    const hoveredSeat = ref(null);
    const hoveredAnchorRect = ref(null);
    const draggedTable = ref(null);
    const dragOffset = ref({ x: 0, y: 0 });
    let hoverTimer = null;
    const fallbackSeat = { id: 0, seat_number: "", status: "available", has_computer: false, near_window: false, socket_count: 0, seat_type: "open" };
    const onSeatHover = (event, seat) => {
      if (hoverTimer) clearTimeout(hoverTimer);
      const el = event.currentTarget;
      const rect = el.getBoundingClientRect();
      hoverTimer = setTimeout(() => {
        hoveredSeatId.value = seat.id;
        hoveredSeat.value = seat;
        hoveredAnchorRect.value = {
          top: rect.top,
          left: rect.left,
          width: rect.width,
          height: rect.height
        };
      }, 1500);
    };
    const onSeatLeave = () => {
      if (hoverTimer) {
        clearTimeout(hoverTimer);
        hoverTimer = null;
      }
      hoveredSeatId.value = null;
      hoveredSeat.value = null;
      hoveredAnchorRect.value = null;
    };
    onUnmounted(() => {
      if (hoverTimer) clearTimeout(hoverTimer);
    });
    const selectedCapacity = computed(() => props.tableCapacity || 4);
    const naturalCompare = (a, b) => {
      const ax = [];
      const bx = [];
      a.replace(/(\d+)|(\D+)/g, function() {
        ax.push([arguments[1] ? parseInt(arguments[1], 10) : Infinity, arguments[2] || ""]);
        return "";
      });
      b.replace(/(\d+)|(\D+)/g, function() {
        bx.push([arguments[1] ? parseInt(arguments[1], 10) : Infinity, arguments[2] || ""]);
        return "";
      });
      while (ax.length && bx.length) {
        const an = ax.shift();
        const bn = bx.shift();
        const nn = an[0] !== bn[0] ? an[0] - bn[0] : an[1].localeCompare(bn[1], void 0, { sensitivity: "base" });
        if (nn) return nn;
      }
      return ax.length - bx.length;
    };
    const sortedSeats = computed(() => {
      return [...props.seats].sort((a, b) => naturalCompare(a.seat_number || "", b.seat_number || ""));
    });
    const displayTables = computed(() => {
      if (sortedSeats.value.length === 0) {
        return props.tables || [];
      }
      const cap = selectedCapacity.value;
      const tableCount = Math.ceil(sortedSeats.value.length / cap);
      const virtualTables = [];
      for (let i = 0; i < tableCount; i++) {
        virtualTables.push({
          id: 9e3 + i,
          label: `Table ${i + 1}`,
          capacity: cap,
          table_number: `T-${i + 1}`,
          position_x: null,
          position_y: null
        });
      }
      return virtualTables;
    });
    const getTableSeats = (table) => {
      const cap = table.capacity;
      const index = displayTables.value.findIndex((t) => t.id === table.id);
      if (index === -1) return [];
      const start = index * cap;
      return sortedSeats.value.slice(start, start + cap);
    };
    const getTableWidthPx = (capacity) => {
      switch (capacity) {
        case 2:
          return 75;
        case 4:
          return 125;
        case 6:
          return 175;
        case 8:
          return 225;
        case 10:
          return 275;
        case 12:
          return 325;
        case 14:
          return 375;
        case 16:
          return 425;
        default:
          return 125;
      }
    };
    const getTableScale = (capacity) => {
      const tableWidthPx = getTableWidthPx(capacity);
      const availableWidth = Math.max(320, props.canvasWidth || 320);
      const neededWidth = tableWidthPx + 32;
      if (neededWidth > availableWidth) {
        return availableWidth / neededWidth;
      }
      return 1;
    };
    const autoPositions = computed(() => {
      const positions = {};
      const availableWidth = Math.max(700, props.canvasWidth || 700);
      const rowSpacing = 165;
      const colGap = 24;
      const rows = [];
      let currentRow = [];
      let currentRowWidth = 0;
      displayTables.value.forEach((table) => {
        const tableWidthPx = getTableWidthPx(table.capacity);
        const neededWidth = currentRow.length === 0 ? tableWidthPx : tableWidthPx + colGap;
        if (currentRowWidth + neededWidth + 32 > availableWidth) {
          rows.push(currentRow);
          currentRow = [table];
          currentRowWidth = tableWidthPx;
        } else {
          currentRow.push(table);
          currentRowWidth += neededWidth;
        }
      });
      if (currentRow.length > 0) {
        rows.push(currentRow);
      }
      let currentY = 20;
      rows.forEach((row) => {
        let rowWidth = 0;
        row.forEach((table, index) => {
          const tableWidthPx = getTableWidthPx(table.capacity);
          rowWidth += index === 0 ? tableWidthPx : tableWidthPx + colGap;
        });
        const leftover = availableWidth - rowWidth;
        let startX = Math.max(16, Math.round(leftover / 2));
        row.forEach((table) => {
          positions[table.id] = { left: startX, top: currentY };
          startX += getTableWidthPx(table.capacity) + colGap;
        });
        currentY += rowSpacing;
      });
      return positions;
    });
    const computedCanvasHeight = computed(() => {
      if (!displayTables.value || displayTables.value.length === 0) {
        return 160;
      }
      let maxBottom = 160;
      displayTables.value.forEach((table) => {
        const y = table.position_y !== null && table.position_y !== void 0 && table.position_y !== 0 ? table.position_y : autoPositions.value[table.id]?.top || 20;
        const bottom = y + 160;
        if (bottom > maxBottom) {
          maxBottom = bottom;
        }
      });
      return Math.max(180, maxBottom + 20);
    });
    const onSeatClick = (seat) => {
      emit("seat-click", seat);
    };
    const onDragStart = (event, table) => {
      if (!props.isDesigner) return;
      draggedTable.value = table;
      const rect = event.target.getBoundingClientRect();
      dragOffset.value = {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top
      };
      event.dataTransfer?.setData("text/plain", table.id.toString());
    };
    const onDrop = (event) => {
      if (!props.isDesigner || !draggedTable.value) return;
      const container = event.currentTarget.getBoundingClientRect();
      let x = Math.round(event.clientX - container.left - dragOffset.value.x);
      let y = Math.round(event.clientY - container.top - dragOffset.value.y);
      if (props.gridSnap) {
        x = Math.round(x / 20) * 20;
        y = Math.round(y / 20) * 20;
      }
      emit("table-layout-change", draggedTable.value.id, x, y);
      draggedTable.value = null;
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$4, [
        !__props.isDesigner ? (openBlock(), createElementBlock("div", _hoisted_2$4, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(displayTables.value, (table) => {
            return openBlock(), createElementBlock("div", {
              key: table.id,
              class: "transition-all duration-300 hover:scale-[1.02] flex justify-center items-center shrink-0",
              style: normalizeStyle({
                transform: getTableScale(table.capacity) < 1 ? `scale(${getTableScale(table.capacity)})` : void 0,
                transformOrigin: "center center"
              }),
              onClick: withModifiers(($event) => _ctx.$emit("table-click", table), ["stop"])
            }, [
              createVNode(_sfc_main$5, {
                capacity: table.capacity,
                label: table.label,
                seats: getTableSeats(table),
                selectedSeatId: __props.selectedSeat?.id,
                onSeatClick,
                onSeatHover,
                onSeatLeave
              }, null, 8, ["capacity", "label", "seats", "selectedSeatId"])
            ], 12, _hoisted_3$3);
          }), 128))
        ])) : (openBlock(), createElementBlock("div", {
          key: 1,
          class: "relative w-full overflow-visible transition-all py-3",
          style: normalizeStyle({ height: computedCanvasHeight.value + "px" }),
          onDragover: _cache[0] || (_cache[0] = withModifiers(() => {
          }, ["prevent"])),
          onDrop: _cache[1] || (_cache[1] = ($event) => onDrop($event))
        }, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(displayTables.value, (table, index) => {
            return openBlock(), createElementBlock("div", {
              key: table.id,
              draggable: __props.isDesigner,
              onDragstart: ($event) => onDragStart($event, table),
              style: normalizeStyle({
                position: "absolute",
                left: `${table.position_x !== null && table.position_x !== void 0 && table.position_x !== 0 ? table.position_x : autoPositions.value[table.id]?.left || 16}px`,
                top: `${table.position_y !== null && table.position_y !== void 0 && table.position_y !== 0 ? table.position_y : autoPositions.value[table.id]?.top || 20}px`,
                transform: getTableScale(table.capacity) < 1 ? `scale(${getTableScale(table.capacity)})` : void 0,
                transformOrigin: "top left"
              }),
              class: "z-10 transition-all duration-300 cursor-move active:scale-98",
              onClick: withModifiers(($event) => _ctx.$emit("table-click", table), ["stop"])
            }, [
              createVNode(_sfc_main$5, {
                capacity: table.capacity,
                label: table.label,
                seats: getTableSeats(table),
                selectedSeatId: __props.selectedSeat?.id,
                onSeatClick,
                onSeatHover,
                onSeatLeave
              }, null, 8, ["capacity", "label", "seats", "selectedSeatId"])
            ], 44, _hoisted_4$3);
          }), 128))
        ], 36)),
        createVNode(SeatPopover, {
          seat: hoveredSeat.value || fallbackSeat,
          "section-name": __props.sectionName,
          visible: hoveredSeatId.value !== null && !__props.isDesigner,
          "anchor-rect": hoveredAnchorRect.value
        }, null, 8, ["seat", "section-name", "visible", "anchor-rect"])
      ]);
    };
  }
});
const _hoisted_1$3 = { class: "absolute top-0 right-0 flex items-center gap-1 z-10" };
const _hoisted_2$3 = { class: "w-full h-[72px] relative flex items-center justify-center" };
const _hoisted_3$2 = {
  viewBox: "0 0 100 110",
  class: "w-full h-full drop-shadow-xs transition-all",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_4$2 = ["id"];
const _hoisted_5$2 = ["id"];
const _hoisted_6$2 = ["stop-color"];
const _hoisted_7$2 = ["id"];
const _hoisted_8$2 = ["id"];
const _hoisted_9$2 = ["id"];
const _hoisted_10$1 = ["fill", "stroke", "stroke-width"];
const _hoisted_11$1 = ["fill", "stroke", "stroke-width"];
const _hoisted_12$1 = ["stroke"];
const _hoisted_13$1 = ["fill"];
const _hoisted_14$1 = ["fill"];
const _hoisted_15$1 = ["fill"];
const _hoisted_16$1 = ["fill"];
const _hoisted_17$1 = ["fill"];
const _hoisted_18$1 = ["fill"];
const _hoisted_19$1 = ["fill"];
const _hoisted_20$1 = { class: "text-center w-full" };
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "CabinSvg",
  props: {
    number: {},
    status: {},
    highlighted: { type: Boolean, default: false }
  },
  emits: ["click"],
  setup(__props) {
    const props = __props;
    const componentId = Math.random().toString(36).substring(2, 9);
    const statusTheme = computed(() => {
      switch (props.status) {
        case "available":
          return { hex: "#22c55e", chairBg: "#f0fdf4", label: "Available" };
        case "occupied":
          return { hex: "#ef4444", chairBg: "#fef2f2", label: "Occupied" };
        case "free_soon":
          return { hex: "#eab308", chairBg: "#fefce8", label: "Free Soon" };
        case "reserved":
          return { hex: "#3b82f6", chairBg: "#eff6ff", label: "Reserved" };
        case "maintenance":
          return { hex: "#64748b", chairBg: "#f1f5f9", label: "Maintenance" };
        case "overstay":
          return { hex: "#f97316", chairBg: "#fff7ed", label: "Overstay" };
        case "serious_overstay":
          return { hex: "#a855f7", chairBg: "#faf5ff", label: "Serious Overstay" };
        default:
          return { hex: "#22c55e", chairBg: "#f0fdf4", label: "Available" };
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("click")),
        class: normalizeClass([
          "relative w-[68px] h-[88px] flex flex-col items-center justify-between cursor-pointer select-none transition-all duration-200 group",
          __props.highlighted ? "scale-105 z-20" : "hover:scale-105"
        ])
      }, [
        createBaseVNode("div", _hoisted_1$3, [
          createBaseVNode("span", {
            class: "w-1.5 h-1.5 rounded-full border border-white shadow-xs transition-colors duration-200",
            style: normalizeStyle({
              backgroundColor: __props.highlighted ? "#2563eb" : statusTheme.value.hex,
              boxShadow: __props.highlighted ? "0 0 6px #2563eb" : "0 0 6px " + statusTheme.value.hex
            })
          }, null, 4)
        ]),
        createBaseVNode("div", _hoisted_2$3, [
          (openBlock(), createElementBlock("svg", _hoisted_3$2, [
            createBaseVNode("defs", null, [
              createBaseVNode("pattern", {
                id: "frontSlats-" + unref(componentId),
                width: "8",
                height: "20",
                patternUnits: "userSpaceOnUse"
              }, [..._cache[1] || (_cache[1] = [
                createBaseVNode("line", {
                  x1: "4",
                  y1: "0",
                  x2: "4",
                  y2: "20",
                  stroke: "#cbd5e1",
                  "stroke-width": "1",
                  "stroke-dasharray": "3,2"
                }, null, -1)
              ])], 8, _hoisted_4$2),
              createBaseVNode("radialGradient", {
                id: "frontLightGlow-" + unref(componentId),
                cx: "50%",
                cy: "15%",
                r: "70%"
              }, [
                createBaseVNode("stop", {
                  offset: "0%",
                  "stop-color": __props.highlighted ? "#3b82f6" : statusTheme.value.hex,
                  "stop-opacity": "0.35"
                }, null, 8, _hoisted_6$2),
                _cache[2] || (_cache[2] = createBaseVNode("stop", {
                  offset: "100%",
                  "stop-color": "#ffffff",
                  "stop-opacity": "0"
                }, null, -1))
              ], 8, _hoisted_5$2),
              createBaseVNode("linearGradient", {
                id: "frontDeskGrad-" + unref(componentId),
                x1: "0",
                y1: "0",
                x2: "0",
                y2: "1"
              }, [..._cache[3] || (_cache[3] = [
                createBaseVNode("stop", {
                  offset: "0%",
                  "stop-color": "#ffffff"
                }, null, -1),
                createBaseVNode("stop", {
                  offset: "100%",
                  "stop-color": "#e2e8f0"
                }, null, -1)
              ])], 8, _hoisted_7$2),
              createBaseVNode("linearGradient", {
                id: "leftSideWall-" + unref(componentId),
                x1: "0",
                y1: "0",
                x2: "1",
                y2: "0"
              }, [..._cache[4] || (_cache[4] = [
                createBaseVNode("stop", {
                  offset: "0%",
                  "stop-color": "#94a3b8"
                }, null, -1),
                createBaseVNode("stop", {
                  offset: "100%",
                  "stop-color": "#cbd5e1"
                }, null, -1)
              ])], 8, _hoisted_8$2),
              createBaseVNode("linearGradient", {
                id: "rightSideWall-" + unref(componentId),
                x1: "0",
                y1: "0",
                x2: "1",
                y2: "0"
              }, [..._cache[5] || (_cache[5] = [
                createBaseVNode("stop", {
                  offset: "0%",
                  "stop-color": "#cbd5e1"
                }, null, -1),
                createBaseVNode("stop", {
                  offset: "100%",
                  "stop-color": "#94a3b8"
                }, null, -1)
              ])], 8, _hoisted_9$2)
            ]),
            _cache[10] || (_cache[10] = createBaseVNode("ellipse", {
              cx: "50",
              cy: "102",
              rx: "46",
              ry: "4",
              fill: "#0f172a",
              opacity: "0.08"
            }, null, -1)),
            createBaseVNode("rect", {
              x: "2",
              y: "4",
              width: "6",
              height: "96",
              rx: "1",
              fill: __props.highlighted ? "#3b82f6" : "url(#leftSideWall-" + unref(componentId) + ")",
              stroke: __props.highlighted ? "#1d4ed8" : "#64748b",
              "stroke-width": __props.highlighted ? 1.5 : 0.8
            }, null, 8, _hoisted_10$1),
            createBaseVNode("rect", {
              x: "92",
              y: "4",
              width: "6",
              height: "96",
              rx: "1",
              fill: __props.highlighted ? "#3b82f6" : "url(#rightSideWall-" + unref(componentId) + ")",
              stroke: __props.highlighted ? "#1d4ed8" : "#64748b",
              "stroke-width": __props.highlighted ? 1.5 : 0.8
            }, null, 8, _hoisted_11$1),
            createBaseVNode("rect", {
              x: "8",
              y: "4",
              width: "84",
              height: "96",
              fill: "#faf8f6",
              stroke: __props.highlighted ? "#93c5fd" : "#cbd5e1",
              "stroke-width": "0.6"
            }, null, 8, _hoisted_12$1),
            createBaseVNode("rect", {
              x: "8",
              y: "4",
              width: "84",
              height: "96",
              fill: "url(#frontSlats-" + unref(componentId) + ")",
              opacity: "0.35"
            }, null, 8, _hoisted_13$1),
            createBaseVNode("rect", {
              x: "8",
              y: "4",
              width: "84",
              height: "54",
              fill: "url(#frontLightGlow-" + unref(componentId) + ")"
            }, null, 8, _hoisted_14$1),
            _cache[11] || (_cache[11] = createBaseVNode("rect", {
              x: "25",
              y: "8",
              width: "50",
              height: "4",
              rx: "2",
              fill: "#334155"
            }, null, -1)),
            createBaseVNode("rect", {
              x: "28",
              y: "9",
              width: "44",
              height: "2",
              rx: "1",
              fill: __props.highlighted ? "#2563eb" : statusTheme.value.hex
            }, null, 8, _hoisted_15$1),
            _cache[12] || (_cache[12] = createBaseVNode("rect", {
              x: "8",
              y: "20",
              width: "84",
              height: "4",
              fill: "#cbd5e1",
              stroke: "#94a3b8",
              "stroke-width": "0.8"
            }, null, -1)),
            createBaseVNode("rect", {
              x: "6",
              y: "50",
              width: "88",
              height: "6",
              rx: "1",
              fill: "url(#frontDeskGrad-" + unref(componentId) + ")",
              stroke: "#64748b",
              "stroke-width": "1"
            }, null, 8, _hoisted_16$1),
            _cache[13] || (_cache[13] = createStaticVNode('<line x1="6" y1="56" x2="94" y2="56" stroke="#475569" stroke-width="1.2"></line><rect x="40" y="41" width="20" height="9" rx="1" fill="#ffffff" stroke="#94a3b8" stroke-width="0.8"></rect><line x1="38" y1="50" x2="62" y2="50" stroke="#64748b" stroke-width="1"></line><rect x="14" y="41" width="12" height="6" rx="1" fill="#ffffff" stroke="#cbd5e1" stroke-width="0.8"></rect><circle cx="18" cy="44" r="0.8" fill="#475569"></circle>', 5)),
            createBaseVNode("circle", {
              cx: "22",
              cy: "44",
              r: "0.8",
              fill: __props.highlighted ? "#2563eb" : statusTheme.value.hex
            }, null, 8, _hoisted_17$1),
            createBaseVNode("g", null, [
              _cache[6] || (_cache[6] = createBaseVNode("line", {
                x1: "34",
                y1: "78",
                x2: "34",
                y2: "98",
                stroke: "#475569",
                "stroke-width": "2",
                "stroke-linecap": "round"
              }, null, -1)),
              _cache[7] || (_cache[7] = createBaseVNode("line", {
                x1: "66",
                y1: "78",
                x2: "66",
                y2: "98",
                stroke: "#475569",
                "stroke-width": "2",
                "stroke-linecap": "round"
              }, null, -1)),
              createBaseVNode("rect", {
                x: "26",
                y: "74",
                width: "48",
                height: "6",
                rx: "2",
                fill: statusTheme.value.chairBg,
                stroke: "#475569",
                "stroke-width": "1.2"
              }, null, 8, _hoisted_18$1),
              createBaseVNode("rect", {
                x: "30",
                y: "59",
                width: "40",
                height: "15",
                rx: "3",
                fill: __props.highlighted ? "#2563eb" : statusTheme.value.hex,
                stroke: "#334155",
                "stroke-width": "1.2"
              }, null, 8, _hoisted_19$1),
              _cache[8] || (_cache[8] = createBaseVNode("line", {
                x1: "38",
                y1: "74",
                x2: "38",
                y2: "78",
                stroke: "#475569",
                "stroke-width": "1.5"
              }, null, -1)),
              _cache[9] || (_cache[9] = createBaseVNode("line", {
                x1: "62",
                y1: "74",
                x2: "62",
                y2: "78",
                stroke: "#475569",
                "stroke-width": "1.5"
              }, null, -1))
            ])
          ]))
        ]),
        createBaseVNode("div", _hoisted_20$1, [
          createBaseVNode("span", {
            class: normalizeClass(["block text-[9.5px] font-medium tracking-tight leading-none mb-0.5 truncate", __props.highlighted ? "text-blue-600 font-extrabold" : "text-slate-700"])
          }, toDisplayString(__props.number), 3)
        ])
      ], 2);
    };
  }
});
const _hoisted_1$2 = { class: "relative w-full overflow-visible" };
const _hoisted_2$2 = ["draggable", "onDragstart", "onClick", "onMouseenter"];
const _hoisted_3$1 = {
  key: 1,
  class: "space-y-8 text-left"
};
const _hoisted_4$1 = { class: "text-xs font-bold uppercase tracking-wider text-slate-400 border-b border-slate-100 pb-2 flex items-center space-x-1.5" };
const _hoisted_5$1 = { class: "text-[10px] font-bold text-slate-350" };
const _hoisted_6$1 = { class: "grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-2 justify-items-center p-2 pt-3 pb-2" };
const _hoisted_7$1 = ["onClick", "onMouseenter"];
const _hoisted_8$1 = {
  key: 1,
  class: "grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-2 justify-items-center p-2 pt-3 pb-2"
};
const _hoisted_9$1 = ["onClick", "onMouseenter"];
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "CabinGrid",
  props: {
    seats: {},
    selectedSeat: { default: null },
    isDesigner: { type: Boolean, default: false },
    useCanvas: { type: Boolean, default: true },
    canvasWidth: { default: 800 },
    canvasHeight: { default: 600 },
    gridSnap: { type: Boolean, default: true },
    sectionName: { default: "Main Section" },
    sections: { default: () => [] }
  },
  emits: ["seat-click", "layout-change"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const hoveredSeatId = ref(null);
    const hoveredSeat = ref(null);
    const hoveredAnchorRect = ref(null);
    const draggedSeat = ref(null);
    const dragOffset = ref({ x: 0, y: 0 });
    let hoverTimer = null;
    const fallbackSeat = { id: 0, seat_number: "", status: "available", has_computer: false, near_window: false, socket_count: 0, seat_type: "private_room" };
    const onSeatHover = (event, seat) => {
      if (hoverTimer) clearTimeout(hoverTimer);
      const el = event.currentTarget;
      const rect = el.getBoundingClientRect();
      hoverTimer = setTimeout(() => {
        hoveredSeatId.value = seat.id;
        hoveredSeat.value = seat;
        hoveredAnchorRect.value = {
          top: rect.top,
          left: rect.left,
          width: rect.width,
          height: rect.height
        };
      }, 1500);
    };
    const onSeatLeave = () => {
      if (hoverTimer) {
        clearTimeout(hoverTimer);
        hoverTimer = null;
      }
      hoveredSeatId.value = null;
      hoveredSeat.value = null;
      hoveredAnchorRect.value = null;
    };
    const isAllSections = computed(() => props.sectionName === "All Sections");
    const naturalCompare = (a, b) => {
      const ax = [];
      const bx = [];
      a.replace(/(\d+)|(\D+)/g, function() {
        ax.push([arguments[1] ? parseInt(arguments[1], 10) : Infinity, arguments[2] || ""]);
        return "";
      });
      b.replace(/(\d+)|(\D+)/g, function() {
        bx.push([arguments[1] ? parseInt(arguments[1], 10) : Infinity, arguments[2] || ""]);
        return "";
      });
      while (ax.length && bx.length) {
        const an = ax.shift();
        const bn = bx.shift();
        const nn = an[0] !== bn[0] ? an[0] - bn[0] : an[1].localeCompare(bn[1], void 0, { sensitivity: "base" });
        if (nn) return nn;
      }
      return ax.length - bx.length;
    };
    const cabinSeats = computed(() => {
      const filtered = props.seats.filter((s) => !s.table_id);
      return filtered.sort((a, b) => {
        const numA = a.cabin_number || a.seat_number || "";
        const numB = b.cabin_number || b.seat_number || "";
        return naturalCompare(numA, numB);
      });
    });
    const groupedSections = computed(() => {
      if (!props.sections || props.sections.length === 0) return [];
      const groupsMap = /* @__PURE__ */ new Map();
      cabinSeats.value.forEach((seat) => {
        if (seat.section_id) {
          if (!groupsMap.has(seat.section_id)) {
            groupsMap.set(seat.section_id, []);
          }
          groupsMap.get(seat.section_id).push(seat);
        }
      });
      const sortedSections = [...props.sections].sort((a, b) => a.name.localeCompare(b.name, void 0, { numeric: true, sensitivity: "base" }));
      return sortedSections.map((sec) => ({
        id: sec.id,
        name: sec.name,
        seats: (groupsMap.get(sec.id) || []).sort((a, b) => naturalCompare(a.cabin_number || a.seat_number, b.cabin_number || b.seat_number))
      })).filter((g) => g.seats.length > 0);
    });
    const computedCanvasHeight = computed(() => {
      if (!cabinSeats.value || cabinSeats.value.length === 0) {
        return 120;
      }
      let maxY = 0;
      cabinSeats.value.forEach((seat, index) => {
        const y = seat.position_y !== null && seat.position_y !== void 0 && seat.position_y !== 0 ? seat.position_y : 45 + Math.floor(index / 10) * 94;
        if (y > maxY) {
          maxY = y;
        }
      });
      return Math.max(160, maxY + 120);
    });
    const onDragStart = (event, seat) => {
      if (!props.isDesigner) return;
      draggedSeat.value = seat;
      const rect = event.target.getBoundingClientRect();
      dragOffset.value = {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top
      };
      event.dataTransfer?.setData("text/plain", seat.id.toString());
    };
    const onDrop = (event) => {
      if (!props.isDesigner || !draggedSeat.value) return;
      const container = event.currentTarget.getBoundingClientRect();
      let x = Math.round(event.clientX - container.left - dragOffset.value.x);
      let y = Math.round(event.clientY - container.top - dragOffset.value.y);
      if (props.gridSnap) {
        x = Math.round(x / 20) * 20;
        y = Math.round(y / 20) * 20;
      }
      const finalX = Math.max(0, Math.min(x, props.canvasWidth - 80));
      const finalY = Math.max(0, Math.min(y, props.canvasHeight - 96));
      emit("layout-change", draggedSeat.value.id, finalX, finalY);
      draggedSeat.value = null;
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$2, [
        __props.useCanvas ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: "relative mx-auto bg-white rounded-3xl border border-slate-150 shadow-lg transition-all overflow-visible",
          style: normalizeStyle({ width: __props.canvasWidth + "px", height: computedCanvasHeight.value + "px" }),
          onDragover: _cache[0] || (_cache[0] = withModifiers(() => {
          }, ["prevent"])),
          onDrop: _cache[1] || (_cache[1] = ($event) => onDrop($event))
        }, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(cabinSeats.value, (seat, index) => {
            return openBlock(), createElementBlock("div", {
              key: seat.id,
              draggable: __props.isDesigner,
              onDragstart: ($event) => onDragStart($event, seat),
              onClick: withModifiers(($event) => _ctx.$emit("seat-click", seat), ["stop"]),
              onMouseenter: ($event) => onSeatHover($event, seat),
              onMouseleave: onSeatLeave,
              style: normalizeStyle({
                position: "absolute",
                left: `${seat.position_x !== null && seat.position_x !== void 0 && seat.position_x !== 0 ? seat.position_x : 35 + index % 10 * 68}px`,
                top: `${seat.position_y !== null && seat.position_y !== void 0 && seat.position_y !== 0 ? seat.position_y : 45 + Math.floor(index / 10) * 94}px`
              }),
              class: normalizeClass([
                "w-[68px] h-[88px] flex items-center justify-center transition-all duration-200 select-none z-10",
                __props.isDesigner ? "cursor-move active:scale-95" : "cursor-pointer hover:scale-105 active:scale-95"
              ])
            }, [
              createVNode(_sfc_main$3, {
                number: seat.cabin_number || seat.seat_number,
                status: seat.status,
                highlighted: __props.selectedSeat?.id === seat.id
              }, null, 8, ["number", "status", "highlighted"])
            ], 46, _hoisted_2$2);
          }), 128))
        ], 36)) : (openBlock(), createElementBlock("div", _hoisted_3$1, [
          isAllSections.value && groupedSections.value.length > 0 ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(groupedSections.value, (group) => {
            return openBlock(), createElementBlock("div", {
              key: group.id,
              class: "space-y-4"
            }, [
              createBaseVNode("h3", _hoisted_4$1, [
                _cache[2] || (_cache[2] = createBaseVNode("span", { class: "w-1.5 h-3 bg-emerald-600 rounded-sm" }, null, -1)),
                createBaseVNode("span", null, toDisplayString(group.name) + " Section", 1),
                createBaseVNode("span", _hoisted_5$1, "(" + toDisplayString(group.seats.length) + " cabins)", 1)
              ]),
              createBaseVNode("div", _hoisted_6$1, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(group.seats, (seat) => {
                  return openBlock(), createElementBlock("div", {
                    key: seat.id,
                    onClick: withModifiers(($event) => _ctx.$emit("seat-click", seat), ["stop"]),
                    onMouseenter: ($event) => onSeatHover($event, seat),
                    onMouseleave: onSeatLeave,
                    class: "cursor-pointer transition-all duration-150 select-none"
                  }, [
                    createVNode(_sfc_main$3, {
                      number: seat.cabin_number || seat.seat_number,
                      status: seat.status,
                      highlighted: __props.selectedSeat?.id === seat.id
                    }, null, 8, ["number", "status", "highlighted"])
                  ], 40, _hoisted_7$1);
                }), 128))
              ])
            ]);
          }), 128)) : (openBlock(), createElementBlock("div", _hoisted_8$1, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(cabinSeats.value, (seat) => {
              return openBlock(), createElementBlock("div", {
                key: seat.id,
                onClick: withModifiers(($event) => _ctx.$emit("seat-click", seat), ["stop"]),
                onMouseenter: ($event) => onSeatHover($event, seat),
                onMouseleave: onSeatLeave,
                class: "cursor-pointer transition-all duration-150 select-none"
              }, [
                createVNode(_sfc_main$3, {
                  number: seat.cabin_number || seat.seat_number,
                  status: seat.status,
                  highlighted: __props.selectedSeat?.id === seat.id
                }, null, 8, ["number", "status", "highlighted"])
              ], 40, _hoisted_9$1);
            }), 128))
          ]))
        ])),
        createVNode(SeatPopover, {
          seat: hoveredSeat.value || fallbackSeat,
          "section-name": __props.sectionName,
          visible: hoveredSeatId.value !== null && !__props.isDesigner,
          "anchor-rect": hoveredAnchorRect.value
        }, null, 8, ["seat", "section-name", "visible", "anchor-rect"])
      ]);
    };
  }
});
const _hoisted_1$1 = { class: "bg-slate-50/80 backdrop-blur-sm border border-slate-100 rounded-2xl px-3 sm:px-4 py-2 flex flex-wrap items-center justify-center gap-2.5 sm:gap-4.5 shadow-2xs" };
const _hoisted_2$1 = { class: "text-[10px] font-semibold text-slate-500 uppercase tracking-wider" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "SeatStatusLegend",
  setup(__props) {
    const legendItems = [
      { label: "Available", color: "#29B072" },
      { label: "Occupied", color: "#E95252" },
      { label: "Free Soon", color: "#F4D339" },
      { label: "Reserved", color: "#617DFF" },
      { label: "Overstay", color: "#FF9D43" },
      { label: "Serious Overstay", color: "#A855F7" },
      { label: "Maintenance", color: "#9CA3AF" }
    ];
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        (openBlock(), createElementBlock(Fragment, null, renderList(legendItems, (item) => {
          return createBaseVNode("div", {
            key: item.label,
            class: "flex items-center space-x-2 select-none"
          }, [
            createBaseVNode("span", {
              class: "w-2.5 h-2.5 rounded-full transition-shadow duration-300",
              style: normalizeStyle({
                backgroundColor: item.color,
                boxShadow: "0 0 5px " + item.color + "80"
              })
            }, null, 4),
            createBaseVNode("span", _hoisted_2$1, toDisplayString(item.label), 1)
          ]);
        }), 64))
      ]);
    };
  }
});
const _hoisted_1 = { class: "bg-white p-4 rounded-3xl shadow-sm border border-slate-100 flex flex-wrap items-center gap-4 text-left" };
const _hoisted_2 = {
  key: 0,
  class: "relative"
};
const _hoisted_3 = ["value"];
const _hoisted_4 = {
  key: 1,
  class: "flex items-center bg-slate-100/90 p-1 rounded-2xl max-w-full overflow-x-auto gap-1 border border-slate-200/50 flex-shrink-0 no-scrollbar",
  style: { "scrollbar-width": "none", "-ms-overflow-style": "none" }
};
const _hoisted_5 = ["onClick"];
const _hoisted_6 = {
  key: 2,
  class: "flex items-center bg-blue-50/80 p-1 rounded-2xl max-w-full overflow-x-auto gap-1 border border-blue-100 flex-shrink-0 no-scrollbar",
  style: { "scrollbar-width": "none", "-ms-overflow-style": "none" }
};
const _hoisted_7 = ["onClick"];
const _hoisted_8 = { class: "bg-white rounded-3xl border border-slate-100 shadow-sm px-6 py-4 flex items-center justify-between" };
const _hoisted_9 = { class: "text-sm font-bold text-slate-800 uppercase tracking-wider" };
const _hoisted_10 = { class: "text-emerald-700 font-bold capitalize" };
const _hoisted_11 = { class: "text-xs text-slate-400 font-bold uppercase tracking-widest flex items-center space-x-2" };
const _hoisted_12 = { class: "relative" };
const _hoisted_13 = {
  key: 0,
  class: "space-y-10"
};
const _hoisted_14 = { class: "border-b border-slate-100 pb-3 flex items-center justify-between text-left" };
const _hoisted_15 = { class: "text-xs font-bold uppercase text-slate-700 tracking-wider flex items-center space-x-1.5" };
const _hoisted_16 = { class: "text-[10px] text-slate-400 font-bold uppercase tracking-wider bg-slate-50 px-2 py-0.5 rounded-full" };
const _hoisted_17 = {
  key: 0,
  class: "space-y-8"
};
const _hoisted_18 = { class: "flex items-center justify-between text-left border-b border-blue-100/80 pb-2" };
const _hoisted_19 = { class: "flex items-center space-x-2" };
const _hoisted_20 = { class: "text-xs font-bold uppercase tracking-wider text-blue-900" };
const _hoisted_21 = { class: "text-[10px] font-bold text-blue-700 bg-white border border-blue-200 px-2.5 py-0.5 rounded-full" };
const _hoisted_22 = {
  key: 0,
  class: "space-y-3 pt-2"
};
const _hoisted_23 = { class: "flex items-center justify-between text-left border-b border-slate-100 pb-2" };
const _hoisted_24 = { class: "text-[10px] font-bold text-slate-500 bg-white border border-slate-200 px-2.5 py-0.5 rounded-full" };
const _hoisted_25 = {
  key: 1,
  class: "relative"
};
const _hoisted_26 = {
  key: 1,
  class: "space-y-6"
};
const _hoisted_27 = {
  key: 0,
  class: "bg-white p-6 rounded-3xl border border-slate-100 shadow-sm space-y-8"
};
const _hoisted_28 = { class: "flex items-center justify-between text-left border-b border-blue-100 pb-2.5" };
const _hoisted_29 = { class: "flex items-center space-x-2" };
const _hoisted_30 = { class: "text-xs font-bold uppercase tracking-wider text-blue-900" };
const _hoisted_31 = { class: "text-[10px] font-bold text-blue-700 bg-blue-50 border border-blue-200 px-2.5 py-0.5 rounded-full" };
const _hoisted_32 = {
  key: 0,
  class: "space-y-3 pt-2"
};
const _hoisted_33 = { class: "flex items-center justify-between text-left border-b border-slate-100 pb-2.5" };
const _hoisted_34 = { class: "text-[10px] font-bold text-slate-500 bg-slate-50 border border-slate-200 px-2.5 py-0.5 rounded-full" };
const _hoisted_35 = { key: 1 };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "SeatLayoutRenderer",
  props: {
    seats: {},
    floors: {},
    sections: {},
    tables: { default: () => [] },
    selectedSeat: { default: null },
    seatClickable: { type: Boolean, default: true },
    draggable: { type: Boolean, default: false },
    layoutMode: { default: "individual" },
    canvasWidth: { default: 780 },
    canvasHeight: { default: 600 },
    gridSnap: { type: Boolean, default: true },
    tablesPerRow: { default: 3 },
    tableCapacity: { default: 4 },
    showLegend: { type: Boolean, default: true }
  },
  emits: ["seat-click", "table-click", "layout-change", "table-layout-change"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const activeFloorId = ref(null);
    const activeSectionId = ref(null);
    const activeSubsectionId = ref(null);
    const globalTableCapacity = ref(props.tableCapacity || 4);
    watch(() => props.tableCapacity, (newVal) => {
      if (newVal && [2, 4, 6, 8, 10, 12, 14, 16].includes(newVal)) {
        globalTableCapacity.value = newVal;
      }
    });
    const loadGlobalTableCapacity = () => {
      try {
        const saved = localStorage.getItem("smartlib_global_table_capacity") || localStorage.getItem("smartlib_table_capacity");
        if (saved) {
          const parsed = parseInt(saved, 10);
          if ([2, 4, 6, 8, 10, 12, 14, 16].includes(parsed)) {
            globalTableCapacity.value = parsed;
          }
        } else if (props.tableCapacity) {
          globalTableCapacity.value = props.tableCapacity;
        }
      } catch (e) {
      }
    };
    const rootContainer = ref(null);
    const dynamicCanvasWidth = ref(780);
    const updateWidth = () => {
      if (rootContainer.value) {
        const rect = rootContainer.value.getBoundingClientRect();
        const width = Math.floor(rect.width - 48);
        dynamicCanvasWidth.value = Math.max(350, width);
      }
    };
    const resolvedCanvasWidth = computed(() => {
      if (props.canvasWidth !== 780) {
        return props.canvasWidth;
      }
      return dynamicCanvasWidth.value;
    });
    onMounted(() => {
      loadGlobalTableCapacity();
      updateWidth();
      window.addEventListener("resize", updateWidth);
      window.addEventListener("storage", loadGlobalTableCapacity);
      window.addEventListener("smartlib_table_capacity_changed", loadGlobalTableCapacity);
    });
    onUnmounted(() => {
      window.removeEventListener("resize", updateWidth);
      window.removeEventListener("storage", loadGlobalTableCapacity);
      window.removeEventListener("smartlib_table_capacity_changed", loadGlobalTableCapacity);
    });
    watch([activeSectionId, activeFloorId, () => props.layoutMode], () => {
      setTimeout(updateWidth, 80);
    });
    watch(() => props.floors, (newFloors) => {
      if (newFloors.length > 0 && !activeFloorId.value) {
        activeFloorId.value = newFloors[0].id;
      }
    }, { immediate: true });
    const currentFloorSections = computed(() => {
      if (!activeFloorId.value) return props.sections;
      return props.sections.filter((s) => s.floor_id === activeFloorId.value);
    });
    const currentSubsections = computed(() => {
      if (!activeSectionId.value) return [];
      const section = props.sections.find((s) => s.id === activeSectionId.value);
      if (!section || section.has_subsections === false) return [];
      return section.subsections || [];
    });
    watch(activeSectionId, () => {
      activeSubsectionId.value = null;
    });
    watch(currentFloorSections, (newSections) => {
    }, { immediate: true });
    const activeSectionName = computed(() => {
      if (activeSectionId.value === null) return "All Sections";
      const section = props.sections.find((s) => s.id === activeSectionId.value);
      if (!section) return "Unknown Section";
      if (activeSubsectionId.value) {
        const sub = section.subsections?.find((sub2) => sub2.id === activeSubsectionId.value);
        if (sub) return `${section.name} — ${sub.name}`;
      }
      return section.name;
    });
    const currentLayoutMode = computed(() => {
      const mode = props.layoutMode;
      if (mode === "layout" || mode === "grid") {
        return "individual";
      }
      return mode || "individual";
    });
    const isDesignerListView = computed(() => {
      if (currentLayoutMode.value === "individual") {
        return props.seats.length > 0 && !props.seats.some((s) => s.position_x || s.position_y);
      } else if (currentLayoutMode.value === "tables") {
        return props.tables.length > 0 && !props.tables.some((t) => t.position_x || t.position_y);
      } else if (currentLayoutMode.value === "cabins") {
        return props.seats.length > 0 && !props.seats.some((s) => s.position_x || s.position_y);
      }
      return false;
    });
    const filteredSeats = computed(() => {
      let filtered = props.seats;
      if (activeFloorId.value) {
        filtered = filtered.filter((s) => s.floor_id === activeFloorId.value);
      }
      if (activeSectionId.value) {
        filtered = filtered.filter((s) => s.section_id === activeSectionId.value);
      }
      if (activeSubsectionId.value) {
        filtered = filtered.filter((s) => s.subsection_id === activeSubsectionId.value);
      }
      return filtered;
    });
    const filteredTables = computed(() => {
      let filtered = props.tables;
      if (activeFloorId.value) {
        filtered = filtered.filter((t) => t.floor_id === activeFloorId.value);
      }
      if (activeSectionId.value) {
        filtered = filtered.filter((t) => t.section_id === activeSectionId.value);
      }
      return filtered;
    });
    const onSeatClick = (seat) => {
      if (props.seatClickable) {
        emit("seat-click", seat);
      }
    };
    const onTableClick = (table) => {
      emit("table-click", table);
    };
    const onSeatLayoutChange = (seatId, x, y) => {
      emit("layout-change", seatId, x, y);
    };
    const onTableLayoutChange = (tableId, x, y) => {
      emit("table-layout-change", tableId, x, y);
    };
    const getSectionSeats = (sectionId) => {
      let filtered = props.seats;
      if (activeFloorId.value) {
        filtered = filtered.filter((s) => s.floor_id === activeFloorId.value);
      }
      return filtered.filter((s) => s.section_id === sectionId);
    };
    const getSubsectionSeats = (sectionId, subsectionId) => {
      let filtered = props.seats;
      if (activeFloorId.value) {
        filtered = filtered.filter((s) => s.floor_id === activeFloorId.value);
      }
      return filtered.filter((s) => s.section_id === sectionId && s.subsection_id === subsectionId);
    };
    const getUnassignedSubSeats = (sectionId) => {
      let filtered = props.seats;
      if (activeFloorId.value) {
        filtered = filtered.filter((s) => s.floor_id === activeFloorId.value);
      }
      return filtered.filter((s) => s.section_id === sectionId && !s.subsection_id);
    };
    const getSectionTables = (sectionId) => {
      let filtered = props.tables;
      if (activeFloorId.value) {
        filtered = filtered.filter((t) => t.floor_id === activeFloorId.value);
      }
      return filtered.filter((t) => t.section_id === sectionId);
    };
    __expose({ activeFloorId, activeSectionId });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref_key: "rootContainer",
        ref: rootContainer,
        class: "space-y-6 font-outfit w-full"
      }, [
        createBaseVNode("div", _hoisted_1, [
          __props.floors.length > 1 ? (openBlock(), createElementBlock("div", _hoisted_2, [
            withDirectives(createBaseVNode("select", {
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => activeFloorId.value = $event),
              class: "appearance-none bg-slate-50 border border-slate-100 rounded-xl text-sm font-semibold text-slate-700 py-2 pl-9 pr-8 cursor-pointer focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
            }, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(__props.floors, (floor) => {
                return openBlock(), createElementBlock("option", {
                  key: floor.id,
                  value: floor.id
                }, toDisplayString(floor.name), 9, _hoisted_3);
              }), 128))
            ], 512), [
              [vModelSelect, activeFloorId.value]
            ]),
            createVNode(unref(Building2), { class: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" }),
            createVNode(unref(ChevronDown), { class: "absolute right-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400 pointer-events-none" })
          ])) : createCommentVNode("", true),
          currentFloorSections.value.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_4, [
            createBaseVNode("button", {
              onClick: _cache[1] || (_cache[1] = ($event) => activeSectionId.value = null),
              class: normalizeClass([
                "px-3.5 py-1.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap flex-shrink-0 active:scale-98 cursor-pointer border border-transparent",
                activeSectionId.value === null ? "bg-white text-emerald-700 shadow-sm border-slate-200/60" : "text-slate-500 hover:text-slate-700"
              ])
            }, " All Seats ", 2),
            (openBlock(true), createElementBlock(Fragment, null, renderList(currentFloorSections.value, (section) => {
              return openBlock(), createElementBlock("button", {
                key: section.id,
                onClick: ($event) => activeSectionId.value = section.id,
                class: normalizeClass([
                  "px-3.5 py-1.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap flex-shrink-0 active:scale-98 cursor-pointer border border-transparent",
                  activeSectionId.value === section.id ? "bg-white text-emerald-700 shadow-sm border-slate-200/60" : "text-slate-500 hover:text-slate-700"
                ])
              }, toDisplayString(section.name), 11, _hoisted_5);
            }), 128))
          ])) : createCommentVNode("", true),
          currentSubsections.value.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_6, [
            createBaseVNode("button", {
              onClick: _cache[2] || (_cache[2] = ($event) => activeSubsectionId.value = null),
              class: normalizeClass([
                "px-3 py-1 rounded-xl text-[11px] font-bold uppercase tracking-wider transition-all whitespace-nowrap flex-shrink-0 active:scale-98 cursor-pointer border border-transparent",
                activeSubsectionId.value === null ? "bg-white text-blue-700 shadow-sm border-blue-200/60" : "text-blue-600/80 hover:text-blue-900"
              ])
            }, " All Subsections ", 2),
            (openBlock(true), createElementBlock(Fragment, null, renderList(currentSubsections.value, (sub) => {
              return openBlock(), createElementBlock("button", {
                key: sub.id,
                onClick: ($event) => activeSubsectionId.value = sub.id,
                class: normalizeClass([
                  "px-3.5 py-1 rounded-xl text-[11px] font-bold uppercase tracking-wider transition-all whitespace-nowrap flex-shrink-0 active:scale-98 cursor-pointer border border-transparent",
                  activeSubsectionId.value === sub.id ? "bg-white text-blue-700 shadow-sm border-blue-200/60" : "text-blue-600/80 hover:text-blue-900"
                ])
              }, [
                createBaseVNode("span", null, toDisplayString(sub.name), 1)
              ], 10, _hoisted_7);
            }), 128))
          ])) : createCommentVNode("", true)
        ]),
        createBaseVNode("div", _hoisted_8, [
          createBaseVNode("h2", _hoisted_9, [
            _cache[3] || (_cache[3] = createTextVNode(" Seat Map — ", -1)),
            createBaseVNode("span", _hoisted_10, toDisplayString(activeSectionName.value), 1)
          ]),
          createBaseVNode("div", _hoisted_11, [
            _cache[4] || (_cache[4] = createBaseVNode("span", { class: "w-2 h-2 rounded-full bg-emerald-500 animate-pulse" }, null, -1)),
            createBaseVNode("span", null, toDisplayString(filteredSeats.value.length) + " Seats / " + toDisplayString(currentLayoutMode.value) + " Layout", 1)
          ])
        ]),
        createBaseVNode("div", _hoisted_12, [
          activeSectionId.value === null ? (openBlock(), createElementBlock("div", _hoisted_13, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(currentFloorSections.value, (section) => {
              return openBlock(), createElementBlock("div", {
                key: section.id,
                class: "bg-white p-5 rounded-3xl border border-slate-100 shadow-sm space-y-6"
              }, [
                createBaseVNode("div", _hoisted_14, [
                  createBaseVNode("h3", _hoisted_15, [
                    _cache[5] || (_cache[5] = createBaseVNode("span", { class: "w-1.5 h-3 bg-emerald-600 rounded-sm" }, null, -1)),
                    createBaseVNode("span", null, toDisplayString(section.name.toLowerCase().includes("section") ? section.name : `${section.name} Section`), 1)
                  ]),
                  createBaseVNode("span", _hoisted_16, toDisplayString(getSectionSeats(section.id).length) + " Seats ", 1)
                ]),
                !!section.has_subsections && section.subsections && section.subsections.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_17, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(section.subsections, (sub) => {
                    return withDirectives((openBlock(), createElementBlock("div", {
                      key: sub.id,
                      class: "space-y-3"
                    }, [
                      createBaseVNode("div", _hoisted_18, [
                        createBaseVNode("div", _hoisted_19, [
                          _cache[6] || (_cache[6] = createBaseVNode("span", { class: "w-2 h-2 rounded-full bg-blue-600" }, null, -1)),
                          createBaseVNode("h4", _hoisted_20, toDisplayString(sub.name), 1)
                        ]),
                        createBaseVNode("span", _hoisted_21, toDisplayString(getSubsectionSeats(section.id, sub.id).length) + " Seats ", 1)
                      ]),
                      currentLayoutMode.value === "individual" ? (openBlock(), createBlock(_sfc_main$6, {
                        key: 0,
                        seats: getSubsectionSeats(section.id, sub.id),
                        sections: __props.sections,
                        "selected-seat": __props.selectedSeat,
                        "is-designer": __props.draggable,
                        "use-canvas": !isDesignerListView.value,
                        "canvas-width": resolvedCanvasWidth.value,
                        "canvas-height": __props.canvasHeight,
                        "grid-snap": __props.gridSnap,
                        "section-name": `${section.name} — ${sub.name}`,
                        onSeatClick,
                        onLayoutChange: onSeatLayoutChange
                      }, null, 8, ["seats", "sections", "selected-seat", "is-designer", "use-canvas", "canvas-width", "canvas-height", "grid-snap", "section-name"])) : currentLayoutMode.value === "tables" ? (openBlock(), createBlock(_sfc_main$4, {
                        key: 1,
                        tables: getSectionTables(section.id),
                        seats: getSubsectionSeats(section.id, sub.id),
                        "selected-seat": __props.selectedSeat,
                        "is-designer": __props.draggable,
                        "use-canvas": !isDesignerListView.value,
                        "canvas-width": resolvedCanvasWidth.value,
                        "canvas-height": __props.canvasHeight,
                        "grid-snap": __props.gridSnap,
                        "table-capacity": globalTableCapacity.value,
                        "tables-per-row": __props.tablesPerRow,
                        onSeatClick,
                        onTableClick,
                        onTableLayoutChange
                      }, null, 8, ["tables", "seats", "selected-seat", "is-designer", "use-canvas", "canvas-width", "canvas-height", "grid-snap", "table-capacity", "tables-per-row"])) : currentLayoutMode.value === "cabins" ? (openBlock(), createBlock(_sfc_main$2, {
                        key: 2,
                        seats: getSubsectionSeats(section.id, sub.id),
                        sections: __props.sections,
                        "selected-seat": __props.selectedSeat,
                        "is-designer": __props.draggable,
                        "use-canvas": !isDesignerListView.value,
                        "canvas-width": resolvedCanvasWidth.value,
                        "canvas-height": __props.canvasHeight,
                        "grid-snap": __props.gridSnap,
                        "section-name": `${section.name} — ${sub.name}`,
                        onSeatClick,
                        onLayoutChange: onSeatLayoutChange
                      }, null, 8, ["seats", "sections", "selected-seat", "is-designer", "use-canvas", "canvas-width", "canvas-height", "grid-snap", "section-name"])) : createCommentVNode("", true)
                    ])), [
                      [vShow, getSubsectionSeats(section.id, sub.id).length > 0]
                    ]);
                  }), 128)),
                  getUnassignedSubSeats(section.id).length > 0 ? (openBlock(), createElementBlock("div", _hoisted_22, [
                    createBaseVNode("div", _hoisted_23, [
                      _cache[7] || (_cache[7] = createBaseVNode("h4", { class: "text-xs font-bold uppercase tracking-wider text-slate-600 flex items-center space-x-2" }, [
                        createBaseVNode("span", { class: "w-2 h-2 rounded-full bg-slate-400" }),
                        createBaseVNode("span", null, "General / Unassigned Seats")
                      ], -1)),
                      createBaseVNode("span", _hoisted_24, toDisplayString(getUnassignedSubSeats(section.id).length) + " Seats ", 1)
                    ]),
                    currentLayoutMode.value === "individual" ? (openBlock(), createBlock(_sfc_main$6, {
                      key: 0,
                      seats: getUnassignedSubSeats(section.id),
                      sections: __props.sections,
                      "selected-seat": __props.selectedSeat,
                      "is-designer": __props.draggable,
                      "use-canvas": !isDesignerListView.value,
                      "canvas-width": resolvedCanvasWidth.value,
                      "canvas-height": __props.canvasHeight,
                      "grid-snap": __props.gridSnap,
                      "section-name": section.name,
                      onSeatClick,
                      onLayoutChange: onSeatLayoutChange
                    }, null, 8, ["seats", "sections", "selected-seat", "is-designer", "use-canvas", "canvas-width", "canvas-height", "grid-snap", "section-name"])) : currentLayoutMode.value === "cabins" ? (openBlock(), createBlock(_sfc_main$2, {
                      key: 1,
                      seats: getUnassignedSubSeats(section.id),
                      sections: __props.sections,
                      "selected-seat": __props.selectedSeat,
                      "is-designer": __props.draggable,
                      "use-canvas": !isDesignerListView.value,
                      "canvas-width": resolvedCanvasWidth.value,
                      "canvas-height": __props.canvasHeight,
                      "grid-snap": __props.gridSnap,
                      "section-name": section.name,
                      onSeatClick,
                      onLayoutChange: onSeatLayoutChange
                    }, null, 8, ["seats", "sections", "selected-seat", "is-designer", "use-canvas", "canvas-width", "canvas-height", "grid-snap", "section-name"])) : createCommentVNode("", true)
                  ])) : createCommentVNode("", true)
                ])) : (openBlock(), createElementBlock("div", _hoisted_25, [
                  currentLayoutMode.value === "individual" ? (openBlock(), createBlock(_sfc_main$6, {
                    key: 0,
                    seats: getSectionSeats(section.id),
                    sections: __props.sections,
                    "selected-seat": __props.selectedSeat,
                    "is-designer": __props.draggable,
                    "use-canvas": !isDesignerListView.value,
                    "canvas-width": resolvedCanvasWidth.value,
                    "canvas-height": __props.canvasHeight,
                    "grid-snap": __props.gridSnap,
                    "section-name": section.name,
                    onSeatClick,
                    onLayoutChange: onSeatLayoutChange
                  }, null, 8, ["seats", "sections", "selected-seat", "is-designer", "use-canvas", "canvas-width", "canvas-height", "grid-snap", "section-name"])) : currentLayoutMode.value === "tables" ? (openBlock(), createBlock(_sfc_main$4, {
                    key: 1,
                    tables: getSectionTables(section.id),
                    seats: getSectionSeats(section.id),
                    "selected-seat": __props.selectedSeat,
                    "is-designer": __props.draggable,
                    "use-canvas": !isDesignerListView.value,
                    "canvas-width": resolvedCanvasWidth.value,
                    "canvas-height": __props.canvasHeight,
                    "grid-snap": __props.gridSnap,
                    "table-capacity": globalTableCapacity.value,
                    "tables-per-row": __props.tablesPerRow,
                    onSeatClick,
                    onTableClick,
                    onTableLayoutChange
                  }, null, 8, ["tables", "seats", "selected-seat", "is-designer", "use-canvas", "canvas-width", "canvas-height", "grid-snap", "table-capacity", "tables-per-row"])) : currentLayoutMode.value === "cabins" ? (openBlock(), createBlock(_sfc_main$2, {
                    key: 2,
                    seats: getSectionSeats(section.id),
                    sections: __props.sections,
                    "selected-seat": __props.selectedSeat,
                    "is-designer": __props.draggable,
                    "use-canvas": !isDesignerListView.value,
                    "canvas-width": resolvedCanvasWidth.value,
                    "canvas-height": __props.canvasHeight,
                    "grid-snap": __props.gridSnap,
                    "section-name": section.name,
                    onSeatClick,
                    onLayoutChange: onSeatLayoutChange
                  }, null, 8, ["seats", "sections", "selected-seat", "is-designer", "use-canvas", "canvas-width", "canvas-height", "grid-snap", "section-name"])) : createCommentVNode("", true)
                ]))
              ]);
            }), 128))
          ])) : (openBlock(), createElementBlock("div", _hoisted_26, [
            activeSubsectionId.value === null && currentSubsections.value.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_27, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(currentSubsections.value, (sub) => {
                return withDirectives((openBlock(), createElementBlock("div", {
                  key: sub.id,
                  class: "space-y-3"
                }, [
                  createBaseVNode("div", _hoisted_28, [
                    createBaseVNode("div", _hoisted_29, [
                      _cache[8] || (_cache[8] = createBaseVNode("span", { class: "w-2.5 h-2.5 rounded-full bg-blue-600" }, null, -1)),
                      createBaseVNode("h3", _hoisted_30, toDisplayString(sub.name), 1)
                    ]),
                    createBaseVNode("span", _hoisted_31, toDisplayString(getSubsectionSeats(activeSectionId.value, sub.id).length) + " Seats ", 1)
                  ]),
                  currentLayoutMode.value === "individual" ? (openBlock(), createBlock(_sfc_main$6, {
                    key: 0,
                    seats: getSubsectionSeats(activeSectionId.value, sub.id),
                    sections: __props.sections,
                    "selected-seat": __props.selectedSeat,
                    "is-designer": __props.draggable,
                    "use-canvas": !isDesignerListView.value,
                    "canvas-width": resolvedCanvasWidth.value,
                    "canvas-height": __props.canvasHeight,
                    "grid-snap": __props.gridSnap,
                    "section-name": `${activeSectionName.value} — ${sub.name}`,
                    onSeatClick,
                    onLayoutChange: onSeatLayoutChange
                  }, null, 8, ["seats", "sections", "selected-seat", "is-designer", "use-canvas", "canvas-width", "canvas-height", "grid-snap", "section-name"])) : currentLayoutMode.value === "tables" ? (openBlock(), createBlock(_sfc_main$4, {
                    key: 1,
                    tables: filteredTables.value,
                    seats: getSubsectionSeats(activeSectionId.value, sub.id),
                    "selected-seat": __props.selectedSeat,
                    "is-designer": __props.draggable,
                    "use-canvas": !isDesignerListView.value,
                    "canvas-width": resolvedCanvasWidth.value,
                    "canvas-height": __props.canvasHeight,
                    "grid-snap": __props.gridSnap,
                    "table-capacity": globalTableCapacity.value,
                    "tables-per-row": __props.tablesPerRow,
                    onSeatClick,
                    onTableClick,
                    onTableLayoutChange
                  }, null, 8, ["tables", "seats", "selected-seat", "is-designer", "use-canvas", "canvas-width", "canvas-height", "grid-snap", "table-capacity", "tables-per-row"])) : currentLayoutMode.value === "cabins" ? (openBlock(), createBlock(_sfc_main$2, {
                    key: 2,
                    seats: getSubsectionSeats(activeSectionId.value, sub.id),
                    sections: __props.sections,
                    "selected-seat": __props.selectedSeat,
                    "is-designer": __props.draggable,
                    "use-canvas": !isDesignerListView.value,
                    "canvas-width": resolvedCanvasWidth.value,
                    "canvas-height": __props.canvasHeight,
                    "grid-snap": __props.gridSnap,
                    "section-name": `${activeSectionName.value} — ${sub.name}`,
                    onSeatClick,
                    onLayoutChange: onSeatLayoutChange
                  }, null, 8, ["seats", "sections", "selected-seat", "is-designer", "use-canvas", "canvas-width", "canvas-height", "grid-snap", "section-name"])) : createCommentVNode("", true)
                ])), [
                  [vShow, getSubsectionSeats(activeSectionId.value, sub.id).length > 0]
                ]);
              }), 128)),
              getUnassignedSubSeats(activeSectionId.value).length > 0 ? (openBlock(), createElementBlock("div", _hoisted_32, [
                createBaseVNode("div", _hoisted_33, [
                  _cache[9] || (_cache[9] = createBaseVNode("h3", { class: "text-xs font-bold uppercase tracking-wider text-slate-600 flex items-center space-x-2" }, [
                    createBaseVNode("span", { class: "w-2.5 h-2.5 rounded-full bg-slate-400" }),
                    createBaseVNode("span", null, "General / Unassigned Seats")
                  ], -1)),
                  createBaseVNode("span", _hoisted_34, toDisplayString(getUnassignedSubSeats(activeSectionId.value).length) + " Seats ", 1)
                ]),
                currentLayoutMode.value === "individual" ? (openBlock(), createBlock(_sfc_main$6, {
                  key: 0,
                  seats: getUnassignedSubSeats(activeSectionId.value),
                  sections: __props.sections,
                  "selected-seat": __props.selectedSeat,
                  "is-designer": __props.draggable,
                  "use-canvas": !isDesignerListView.value,
                  "canvas-width": resolvedCanvasWidth.value,
                  "canvas-height": __props.canvasHeight,
                  "grid-snap": __props.gridSnap,
                  "section-name": activeSectionName.value,
                  onSeatClick,
                  onLayoutChange: onSeatLayoutChange
                }, null, 8, ["seats", "sections", "selected-seat", "is-designer", "use-canvas", "canvas-width", "canvas-height", "grid-snap", "section-name"])) : currentLayoutMode.value === "cabins" ? (openBlock(), createBlock(_sfc_main$2, {
                  key: 1,
                  seats: getUnassignedSubSeats(activeSectionId.value),
                  sections: __props.sections,
                  "selected-seat": __props.selectedSeat,
                  "is-designer": __props.draggable,
                  "use-canvas": !isDesignerListView.value,
                  "canvas-width": resolvedCanvasWidth.value,
                  "canvas-height": __props.canvasHeight,
                  "grid-snap": __props.gridSnap,
                  "section-name": activeSectionName.value,
                  onSeatClick,
                  onLayoutChange: onSeatLayoutChange
                }, null, 8, ["seats", "sections", "selected-seat", "is-designer", "use-canvas", "canvas-width", "canvas-height", "grid-snap", "section-name"])) : createCommentVNode("", true)
              ])) : createCommentVNode("", true)
            ])) : (openBlock(), createElementBlock("div", _hoisted_35, [
              currentLayoutMode.value === "individual" ? (openBlock(), createBlock(_sfc_main$6, {
                key: 0,
                seats: filteredSeats.value,
                sections: __props.sections,
                "selected-seat": __props.selectedSeat,
                "is-designer": __props.draggable,
                "use-canvas": !isDesignerListView.value,
                "canvas-width": resolvedCanvasWidth.value,
                "canvas-height": __props.canvasHeight,
                "grid-snap": __props.gridSnap,
                "section-name": activeSectionName.value,
                onSeatClick,
                onLayoutChange: onSeatLayoutChange
              }, null, 8, ["seats", "sections", "selected-seat", "is-designer", "use-canvas", "canvas-width", "canvas-height", "grid-snap", "section-name"])) : currentLayoutMode.value === "tables" ? (openBlock(), createBlock(_sfc_main$4, {
                key: 1,
                tables: filteredTables.value,
                seats: filteredSeats.value,
                "selected-seat": __props.selectedSeat,
                "is-designer": __props.draggable,
                "use-canvas": !isDesignerListView.value,
                "canvas-width": resolvedCanvasWidth.value,
                "canvas-height": __props.canvasHeight,
                "grid-snap": __props.gridSnap,
                "table-capacity": globalTableCapacity.value,
                "tables-per-row": __props.tablesPerRow,
                onSeatClick,
                onTableClick,
                onTableLayoutChange
              }, null, 8, ["tables", "seats", "selected-seat", "is-designer", "use-canvas", "canvas-width", "canvas-height", "grid-snap", "table-capacity", "tables-per-row"])) : currentLayoutMode.value === "cabins" ? (openBlock(), createBlock(_sfc_main$2, {
                key: 2,
                seats: filteredSeats.value,
                sections: __props.sections,
                "selected-seat": __props.selectedSeat,
                "is-designer": __props.draggable,
                "use-canvas": !isDesignerListView.value,
                "canvas-width": resolvedCanvasWidth.value,
                "canvas-height": __props.canvasHeight,
                "grid-snap": __props.gridSnap,
                "section-name": activeSectionName.value,
                onSeatClick,
                onLayoutChange: onSeatLayoutChange
              }, null, 8, ["seats", "sections", "selected-seat", "is-designer", "use-canvas", "canvas-width", "canvas-height", "grid-snap", "section-name"])) : createCommentVNode("", true)
            ]))
          ]))
        ]),
        __props.showLegend ? (openBlock(), createBlock(_sfc_main$1, { key: 0 })) : createCommentVNode("", true)
      ], 512);
    };
  }
});
const SeatLayoutRenderer = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b4bd7082"]]);
export {
  SeatLayoutRenderer as S,
  _sfc_main$1 as _
};
