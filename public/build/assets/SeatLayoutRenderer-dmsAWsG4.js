import { d as defineComponent, c as computed, a as createElementBlock, n as normalizeClass, e as createStaticVNode, l as openBlock, h as createBlock, I as Teleport, j as createCommentVNode, q as normalizeStyle, b as createBaseVNode, t as toDisplayString, f as createVNode, u as unref, r as ref, z as withModifiers, F as Fragment, k as renderList, E as watch, p as withDirectives, D as vModelSelect, i as createTextVNode } from "./main-CP29_5Dg.js";
import { U as User } from "./user-q-rSNpCr.js";
import { C as Clock } from "./clock-Bt9n9pGR.js";
import { M as Monitor } from "./monitor-wfxbPFep.js";
import { P as PanelsTopLeft } from "./panels-top-left-BCXG0zkT.js";
import { Z as Zap } from "./zap-Cw81dnaS.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import { W as Wind } from "./wind-Ct9NGm91.js";
import { W as Wifi } from "./wifi-CaA-xCol.js";
import { B as Building2 } from "./building-2-BCZNb8vB.js";
import { C as ChevronDown } from "./chevron-down-Dov5TrDl.js";
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "SeatSvg",
  props: {
    rotate: { type: Boolean, default: false },
    highlighted: { type: Boolean, default: false },
    status: { default: "available" }
  },
  setup(__props) {
    const props = __props;
    const statusColor = computed(() => {
      switch (props.status) {
        case "available":
          return "text-[#29B072]";
        // Green
        case "occupied":
          return "text-[#E95252]";
        // Red
        case "free_soon":
          return "text-[#F4D339]";
        // Yellow
        case "reserved":
          return "text-[#617DFF]";
        // Blue
        case "maintenance":
        case "disabled":
          return "text-[#9CA3AF]";
        // Gray
        case "overstay":
          return "text-[#FF9D43]";
        // Orange
        case "serious_overstay":
          return "text-[#A855F7]";
        // Purple
        default:
          return "text-slate-400";
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("svg", {
        viewBox: "0 0 100 100",
        class: normalizeClass(["w-full h-full transition-all duration-300", __props.rotate ? "rotate-180" : "", __props.highlighted ? "text-blue-500 scale-105" : statusColor.value]),
        xmlns: "http://www.w3.org/2000/svg"
      }, [..._cache[0] || (_cache[0] = [
        createStaticVNode('<path d="M 20 15 Q 50 5 80 15 L 75 30 Q 50 20 25 30 Z" fill="currentColor" style="filter:brightness(0.85);"></path><rect x="10" y="25" width="12" height="40" rx="4" fill="#E2E8F0" stroke="#CBD5E1" stroke-width="1.5"></rect><rect x="78" y="25" width="12" height="40" rx="4" fill="#E2E8F0" stroke="#CBD5E1" stroke-width="1.5"></rect><rect x="12" y="30" width="8" height="30" rx="3" fill="#F8FAFC"></rect><rect x="80" y="30" width="8" height="30" rx="3" fill="#F8FAFC"></rect><rect x="22" y="25" width="56" height="45" rx="10" fill="currentColor"></rect><rect x="26" y="33" width="48" height="30" rx="6" fill="#FFFFFF" opacity="0.15"></rect>', 7)
      ])], 2);
    };
  }
});
const _hoisted_1$7 = { class: "p-3 space-y-2.5" };
const _hoisted_2$7 = { class: "flex items-center justify-between" };
const _hoisted_3$6 = { class: "text-xs font-bold text-slate-800 uppercase tracking-tight" };
const _hoisted_4$5 = { class: "flex items-center space-x-2 bg-slate-50/50 p-2 rounded-lg border border-slate-100/50" };
const _hoisted_5$3 = { class: "flex-1 min-w-0" };
const _hoisted_6$3 = { class: "text-[10px] font-bold text-slate-800 truncate leading-none mb-0.5" };
const _hoisted_7$3 = { class: "text-[8px] font-medium text-slate-400 flex items-center gap-0.5" };
const _hoisted_8$3 = { class: "flex items-center justify-between pt-2 border-t border-slate-100/60" };
const _hoisted_9$3 = { class: "flex items-center gap-2" };
const _hoisted_10$3 = { class: "text-[8px] font-bold text-slate-400 bg-slate-100 px-1.5 py-0.5 rounded lowercase" };
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
            createBaseVNode("div", _hoisted_4$5, [
              createVNode(unref(User), { class: "w-3.5 h-3.5 text-slate-450 flex-shrink-0" }),
              createBaseVNode("div", _hoisted_5$3, [
                createBaseVNode("p", _hoisted_6$3, toDisplayString(occupancyLabel.value), 1),
                createBaseVNode("p", _hoisted_7$3, [
                  createVNode(unref(Clock), { class: "w-2.5 h-2.5 text-slate-350 flex-shrink-0" }),
                  createBaseVNode("span", null, toDisplayString(displayTimeLeft.value !== null ? formatTimeLeft(displayTimeLeft.value) : isAvailable.value ? "Ready" : "In Use"), 1)
                ])
              ])
            ]),
            createBaseVNode("div", _hoisted_8$3, [
              createBaseVNode("div", _hoisted_9$3, [
                createVNode(unref(Monitor), {
                  class: normalizeClass(["w-3.5 h-3.5 transition-colors", __props.seat.has_computer ? "text-emerald-600" : "text-slate-300"])
                }, null, 8, ["class"]),
                createVNode(unref(PanelsTopLeft), {
                  class: normalizeClass(["w-3.5 h-3.5 transition-colors", __props.seat.near_window ? "text-sky-500" : "text-slate-300"])
                }, null, 8, ["class"]),
                createVNode(unref(Zap), {
                  class: normalizeClass(["w-3.5 h-3.5 transition-colors", __props.seat.socket_count > 0 ? "text-amber-500" : "text-slate-300"])
                }, null, 8, ["class"])
              ]),
              createBaseVNode("span", _hoisted_10$3, toDisplayString(__props.seat.seat_type), 1)
            ])
          ])
        ], 4)) : createCommentVNode("", true)
      ]);
    };
  }
});
const SeatPopover = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-3118f6a7"]]);
const _hoisted_1$6 = { class: "relative w-full overflow-auto bg-slate-50/40 p-6 rounded-3xl border border-slate-100/80 min-h-[500px]" };
const _hoisted_2$6 = ["draggable", "onDragstart", "onClick", "onMouseenter"];
const _hoisted_3$5 = { class: "absolute -bottom-1 left-1/2 -translate-x-1/2 bg-white/95 border border-slate-200/80 px-2 py-0.5 rounded shadow-sm scale-90 z-20 pointer-events-none" };
const _hoisted_4$4 = { class: "block text-[9.5px] font-bold text-slate-800 leading-none" };
const _hoisted_5$2 = {
  key: 1,
  class: "space-y-8 text-left"
};
const _hoisted_6$2 = { class: "text-xs font-bold uppercase tracking-wider text-slate-400 border-b border-slate-100 pb-2 flex items-center space-x-1.5" };
const _hoisted_7$2 = { class: "text-[10px] font-bold text-slate-350" };
const _hoisted_8$2 = { class: "grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6 justify-items-center" };
const _hoisted_9$2 = ["onClick", "onMouseenter"];
const _hoisted_10$2 = { class: "w-10 h-10 mt-1" };
const _hoisted_11$2 = { class: "text-center w-full" };
const _hoisted_12$2 = { class: "absolute top-1.5 right-1.5 flex space-x-0.5" };
const _hoisted_13$2 = {
  key: 0,
  class: "w-1.5 h-1.5 rounded-full bg-indigo-500"
};
const _hoisted_14$2 = {
  key: 1,
  class: "w-1.5 h-1.5 rounded-full bg-sky-400"
};
const _hoisted_15$1 = {
  key: 2,
  class: "w-1.5 h-1.5 rounded-full bg-orange-400"
};
const _hoisted_16$1 = {
  key: 1,
  class: "grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6 justify-items-center"
};
const _hoisted_17$1 = ["onClick", "onMouseenter"];
const _hoisted_18 = { class: "w-10 h-10 mt-1" };
const _hoisted_19 = { class: "text-center w-full" };
const _hoisted_20 = { class: "absolute top-1.5 right-1.5 flex space-x-0.5" };
const _hoisted_21 = {
  key: 0,
  class: "w-1.5 h-1.5 rounded-full bg-indigo-500"
};
const _hoisted_22 = {
  key: 1,
  class: "w-1.5 h-1.5 rounded-full bg-sky-400"
};
const _hoisted_23 = {
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
    const fallbackSeat = { id: 0, seat_number: "", status: "available", has_computer: false, near_window: false, socket_count: 0, seat_type: "open" };
    const onSeatHover = (event, seat) => {
      hoveredSeatId.value = seat.id;
      hoveredSeat.value = seat;
      const el = event.currentTarget;
      const rect = el.getBoundingClientRect();
      hoveredAnchorRect.value = {
        top: rect.top,
        left: rect.left,
        width: rect.width,
        height: rect.height
      };
    };
    const onSeatLeave = () => {
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
    const getSimpleSeatNumber = (num) => {
      return String(num).replace(/\D/g, "") || num;
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
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$6, [
        __props.useCanvas ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: "relative mx-auto bg-white rounded-3xl border border-slate-150 shadow-lg transition-all overflow-visible",
          style: normalizeStyle({ width: __props.canvasWidth + "px", height: __props.canvasHeight + "px" }),
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
                highlighted: __props.selectedSeat?.id === seat.id
              }, null, 8, ["status", "highlighted"]),
              createBaseVNode("div", _hoisted_3$5, [
                createBaseVNode("span", _hoisted_4$4, toDisplayString(getSimpleSeatNumber(seat.seat_number)), 1)
              ])
            ], 46, _hoisted_2$6);
          }), 128))
        ], 36)) : (openBlock(), createElementBlock("div", _hoisted_5$2, [
          isAllSections.value && groupedSections.value.length > 0 ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(groupedSections.value, (group) => {
            return openBlock(), createElementBlock("div", {
              key: group.id,
              class: "space-y-4"
            }, [
              createBaseVNode("h3", _hoisted_6$2, [
                _cache[2] || (_cache[2] = createBaseVNode("span", { class: "w-1.5 h-3 bg-emerald-600 rounded-sm" }, null, -1)),
                createBaseVNode("span", null, toDisplayString(group.name) + " Section", 1),
                createBaseVNode("span", _hoisted_7$2, "(" + toDisplayString(group.seats.length) + " seats)", 1)
              ]),
              createBaseVNode("div", _hoisted_8$2, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(group.seats, (seat) => {
                  return openBlock(), createElementBlock("div", {
                    key: seat.id,
                    onClick: withModifiers(($event) => _ctx.$emit("seat-click", seat), ["stop"]),
                    onMouseenter: ($event) => onSeatHover($event, seat),
                    onMouseleave: onSeatLeave,
                    class: normalizeClass([
                      "relative w-20 h-24 rounded-2xl transition-all duration-300 flex flex-col items-center justify-between p-2 cursor-pointer shadow-sm select-none border border-slate-100",
                      hoveredSeatId.value === seat.id ? "z-50 shadow-lg" : "z-10",
                      __props.selectedSeat?.id === seat.id ? "bg-blue-50/50 border-blue-600 text-blue-600 shadow-md ring-2 ring-blue-500" : getStatusBgClass(seat.status) + " hover:shadow-md hover:-translate-y-0.5"
                    ])
                  }, [
                    createBaseVNode("div", _hoisted_10$2, [
                      createVNode(_sfc_main$8, {
                        status: seat.status,
                        highlighted: __props.selectedSeat?.id === seat.id
                      }, null, 8, ["status", "highlighted"])
                    ]),
                    createBaseVNode("div", _hoisted_11$2, [
                      createBaseVNode("span", {
                        class: normalizeClass(["block text-[10px] font-bold tracking-tight leading-none mb-1.5", __props.selectedSeat?.id === seat.id ? "text-blue-600" : "text-slate-800"])
                      }, toDisplayString(seat.seat_number), 3)
                    ]),
                    createBaseVNode("div", _hoisted_12$2, [
                      seat.has_computer ? (openBlock(), createElementBlock("span", _hoisted_13$2)) : createCommentVNode("", true),
                      seat.near_window ? (openBlock(), createElementBlock("span", _hoisted_14$2)) : createCommentVNode("", true),
                      seat.socket_count > 0 ? (openBlock(), createElementBlock("span", _hoisted_15$1)) : createCommentVNode("", true)
                    ])
                  ], 42, _hoisted_9$2);
                }), 128))
              ])
            ]);
          }), 128)) : (openBlock(), createElementBlock("div", _hoisted_16$1, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(sortedSeats.value, (seat) => {
              return openBlock(), createElementBlock("div", {
                key: seat.id,
                onClick: withModifiers(($event) => _ctx.$emit("seat-click", seat), ["stop"]),
                onMouseenter: ($event) => onSeatHover($event, seat),
                onMouseleave: onSeatLeave,
                class: normalizeClass([
                  "relative w-20 h-24 rounded-2xl transition-all duration-300 flex flex-col items-center justify-between p-2 cursor-pointer shadow-sm select-none border border-slate-100",
                  hoveredSeatId.value === seat.id ? "z-50 shadow-lg" : "z-10",
                  __props.selectedSeat?.id === seat.id ? "bg-blue-50/50 border-blue-600 text-blue-700 shadow-md ring-2 ring-blue-500" : getStatusBgClass(seat.status) + " hover:shadow-md hover:-translate-y-0.5"
                ])
              }, [
                createBaseVNode("div", _hoisted_18, [
                  createVNode(_sfc_main$8, {
                    status: seat.status,
                    highlighted: __props.selectedSeat?.id === seat.id
                  }, null, 8, ["status", "highlighted"])
                ]),
                createBaseVNode("div", _hoisted_19, [
                  createBaseVNode("span", {
                    class: normalizeClass(["block text-[10px] font-bold tracking-tight leading-none mb-1.5", __props.selectedSeat?.id === seat.id ? "text-blue-600" : "text-slate-800"])
                  }, toDisplayString(seat.seat_number), 3)
                ]),
                createBaseVNode("div", _hoisted_20, [
                  seat.has_computer ? (openBlock(), createElementBlock("span", _hoisted_21)) : createCommentVNode("", true),
                  seat.near_window ? (openBlock(), createElementBlock("span", _hoisted_22)) : createCommentVNode("", true),
                  seat.socket_count > 0 ? (openBlock(), createElementBlock("span", _hoisted_23)) : createCommentVNode("", true)
                ])
              ], 42, _hoisted_17$1);
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
const _hoisted_1$5 = { class: "flex items-center justify-center gap-2.5 mb-2" };
const _hoisted_2$5 = ["onClick"];
const _hoisted_3$4 = { class: "w-9.5 h-9.5" };
const _hoisted_4$3 = { class: "absolute -bottom-1.5 left-1/2 -translate-x-1/2 px-1.5 py-0.5 text-[8px] font-bold rounded-md bg-white border border-slate-200 shadow-sm text-slate-800 leading-none" };
const _hoisted_5$1 = { class: "w-full h-10 rounded-2xl bg-white border-2 border-slate-100 shadow-sm relative flex items-center justify-center overflow-hidden" };
const _hoisted_6$1 = { class: "absolute inset-0 flex items-center justify-center pointer-events-none opacity-5" };
const _hoisted_7$1 = { class: "flex space-x-4" };
const _hoisted_8$1 = { class: "text-center z-10 px-2" };
const _hoisted_9$1 = { class: "text-[9.5px] font-bold tracking-wider text-slate-800 uppercase leading-none block" };
const _hoisted_10$1 = { class: "text-[7.5px] font-bold text-slate-400 uppercase tracking-widest leading-none mt-1 block" };
const _hoisted_11$1 = { class: "flex items-center justify-center gap-2.5 mt-3.5" };
const _hoisted_12$1 = ["onClick"];
const _hoisted_13$1 = { class: "absolute -top-1.5 left-1/2 -translate-x-1/2 px-1.5 py-0.5 text-[8px] font-bold rounded-md bg-white border border-slate-200 shadow-sm text-slate-800 leading-none z-10" };
const _hoisted_14$1 = { class: "w-9.5 h-9.5" };
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "TableSvg",
  props: {
    capacity: {},
    label: {},
    seats: {},
    selectedSeatId: { default: null }
  },
  emits: ["seat-click"],
  setup(__props) {
    const props = __props;
    const tableWidth = computed(() => {
      switch (props.capacity) {
        case 2:
          return "130px";
        case 4:
          return "200px";
        case 6:
          return "270px";
        case 8:
          return "340px";
        default:
          return "200px";
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
    const getSimpleNumber = (num) => {
      const parts = num.split("-");
      return parts[parts.length - 1] || num;
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: "flex flex-col items-center justify-center p-3 border border-dashed border-slate-200/60 rounded-3xl bg-slate-50/20 shadow-inner select-none transition-all duration-300 hover:shadow-md hover:border-slate-350",
        style: normalizeStyle({ width: tableWidth.value })
      }, [
        createBaseVNode("div", _hoisted_1$5, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(topSeats.value, (seat) => {
            return openBlock(), createElementBlock("div", {
              key: seat.id,
              class: "relative cursor-pointer transition-all duration-200 hover:scale-110",
              onClick: withModifiers(($event) => _ctx.$emit("seat-click", seat), ["stop"])
            }, [
              createBaseVNode("div", _hoisted_3$4, [
                createVNode(_sfc_main$8, {
                  status: seat.status,
                  highlighted: __props.selectedSeatId === seat.id,
                  rotate: false
                }, null, 8, ["status", "highlighted"])
              ]),
              createBaseVNode("span", _hoisted_4$3, toDisplayString(getSimpleNumber(seat.seat_number)), 1)
            ], 8, _hoisted_2$5);
          }), 128))
        ]),
        createBaseVNode("div", _hoisted_5$1, [
          _cache[0] || (_cache[0] = createBaseVNode("div", { class: "absolute inset-x-3 h-[2px] bg-slate-50 top-1.5" }, null, -1)),
          _cache[1] || (_cache[1] = createBaseVNode("div", { class: "absolute inset-x-3 h-[2px] bg-slate-50 bottom-1.5" }, null, -1)),
          createBaseVNode("div", _hoisted_6$1, [
            createBaseVNode("div", _hoisted_7$1, [
              (openBlock(), createElementBlock(Fragment, null, renderList(3, (i) => {
                return createBaseVNode("div", {
                  key: i,
                  class: "w-8 h-1 bg-slate-400 rounded-full"
                });
              }), 64))
            ])
          ]),
          createBaseVNode("div", _hoisted_8$1, [
            createBaseVNode("span", _hoisted_9$1, toDisplayString(__props.label), 1),
            createBaseVNode("span", _hoisted_10$1, toDisplayString(__props.capacity) + " Pax ", 1)
          ])
        ]),
        createBaseVNode("div", _hoisted_11$1, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(bottomSeats.value, (seat) => {
            return openBlock(), createElementBlock("div", {
              key: seat.id,
              class: "relative cursor-pointer transition-all duration-200 hover:scale-110",
              onClick: withModifiers(($event) => _ctx.$emit("seat-click", seat), ["stop"])
            }, [
              createBaseVNode("span", _hoisted_13$1, toDisplayString(getSimpleNumber(seat.seat_number)), 1),
              createBaseVNode("div", _hoisted_14$1, [
                createVNode(_sfc_main$8, {
                  status: seat.status,
                  highlighted: __props.selectedSeatId === seat.id,
                  rotate: true
                }, null, 8, ["status", "highlighted"])
              ])
            ], 8, _hoisted_12$1);
          }), 128))
        ])
      ], 4);
    };
  }
});
const _hoisted_1$4 = { class: "relative w-full overflow-auto bg-slate-50/40 p-6 rounded-3xl border border-slate-100/80 min-h-[500px]" };
const _hoisted_2$4 = ["draggable", "onDragstart", "onClick"];
const _hoisted_3$3 = {
  key: 1,
  class: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center"
};
const _hoisted_4$2 = ["onClick"];
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
    gridSnap: { type: Boolean, default: true }
  },
  emits: ["seat-click", "table-click", "table-layout-change"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const draggedTable = ref(null);
    const dragOffset = ref({ x: 0, y: 0 });
    const getTableSeats = (table) => {
      return props.seats.filter((s) => s.table_id === table.id);
    };
    const onSeatClick = (seat) => {
      if (props.isDesigner) return;
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
      let tableWidth = 200;
      if (draggedTable.value.capacity === 2) tableWidth = 130;
      else if (draggedTable.value.capacity === 6) tableWidth = 270;
      else if (draggedTable.value.capacity === 8) tableWidth = 340;
      const finalX = Math.max(0, Math.min(x, props.canvasWidth - tableWidth));
      const finalY = Math.max(0, Math.min(y, props.canvasHeight - 130));
      emit("table-layout-change", draggedTable.value.id, finalX, finalY);
      draggedTable.value = null;
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$4, [
        __props.useCanvas ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: "relative mx-auto bg-white rounded-3xl border border-slate-150 shadow-lg overflow-hidden transition-all",
          style: normalizeStyle({ width: __props.canvasWidth + "px", height: __props.canvasHeight + "px" }),
          onDragover: _cache[0] || (_cache[0] = withModifiers(() => {
          }, ["prevent"])),
          onDrop: _cache[1] || (_cache[1] = ($event) => onDrop($event))
        }, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(__props.tables, (table, index) => {
            return openBlock(), createElementBlock("div", {
              key: table.id,
              draggable: __props.isDesigner,
              onDragstart: ($event) => onDragStart($event, table),
              style: normalizeStyle({
                position: "absolute",
                left: `${table.position_x !== null && table.position_x !== void 0 && table.position_x !== 0 ? table.position_x : 60 + index % 3 * 240}px`,
                top: `${table.position_y !== null && table.position_y !== void 0 && table.position_y !== 0 ? table.position_y : 60 + Math.floor(index / 3) * 160}px`
              }),
              class: normalizeClass([
                "z-10 transition-shadow",
                __props.isDesigner ? "cursor-move active:scale-98" : ""
              ]),
              onClick: withModifiers(($event) => _ctx.$emit("table-click", table), ["stop"])
            }, [
              createVNode(_sfc_main$5, {
                capacity: table.capacity,
                label: table.label,
                seats: getTableSeats(table),
                selectedSeatId: __props.selectedSeat?.id,
                onSeatClick
              }, null, 8, ["capacity", "label", "seats", "selectedSeatId"])
            ], 46, _hoisted_2$4);
          }), 128))
        ], 36)) : (openBlock(), createElementBlock("div", _hoisted_3$3, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(__props.tables, (table) => {
            return openBlock(), createElementBlock("div", {
              key: table.id,
              class: "p-2",
              onClick: withModifiers(($event) => _ctx.$emit("table-click", table), ["stop"])
            }, [
              createVNode(_sfc_main$5, {
                capacity: table.capacity,
                label: table.label,
                seats: getTableSeats(table),
                selectedSeatId: __props.selectedSeat?.id,
                onSeatClick
              }, null, 8, ["capacity", "label", "seats", "selectedSeatId"])
            ], 8, _hoisted_4$2);
          }), 128))
        ]))
      ]);
    };
  }
});
const _hoisted_1$3 = { class: "flex items-center justify-between mt-1" };
const _hoisted_2$3 = { class: "text-[10.5px] font-bold uppercase text-slate-800 tracking-tight leading-none block" };
const _hoisted_3$2 = { class: "flex items-center justify-between border-t border-slate-100 pt-2" };
const _hoisted_4$1 = { class: "flex items-center gap-1" };
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "CabinSvg",
  props: {
    number: {},
    status: {},
    features: { default: () => ({ power_outlet: true, computer: false, ac: true, wifi: true }) },
    socketCount: { default: 1 },
    highlighted: { type: Boolean, default: false }
  },
  emits: ["click"],
  setup(__props) {
    const props = __props;
    const statusLabel = computed(() => {
      switch (props.status) {
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
    const statusColor = computed(() => {
      switch (props.status) {
        case "available":
          return { hex: "#22C55E" };
        case "occupied":
          return { hex: "#EF4444" };
        case "free_soon":
          return { hex: "#EAB308" };
        case "reserved":
          return { hex: "#3B82F6" };
        case "maintenance":
          return { hex: "#6B7280" };
        case "overstay":
          return { hex: "#F97316" };
        case "serious_overstay":
          return { hex: "#A855F7" };
        default:
          return { hex: "#6B7280" };
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("click")),
        class: normalizeClass([
          "relative w-32 h-36 rounded-2.5xl border transition-all duration-300 flex flex-col p-2.5 select-none cursor-pointer",
          __props.highlighted ? "border-emerald-600 bg-emerald-50/40 shadow-lg shadow-emerald-500/10 scale-102 ring-4 ring-emerald-500/10" : "border-slate-200 bg-white hover:border-slate-350 hover:shadow-md hover:-translate-y-0.5"
        ])
      }, [
        createBaseVNode("div", {
          class: "absolute top-0 inset-x-6 h-1.5 rounded-b-full transition-colors duration-300",
          style: normalizeStyle({ backgroundColor: statusColor.value.hex, boxShadow: "0 2px 8px " + statusColor.value.hex })
        }, null, 4),
        createBaseVNode("div", _hoisted_1$3, [
          createBaseVNode("div", null, [
            createBaseVNode("span", _hoisted_2$3, " Cabin " + toDisplayString(__props.number), 1),
            createBaseVNode("span", {
              class: "text-[7.5px] font-bold uppercase tracking-wider block mt-1 transition-colors duration-300",
              style: normalizeStyle({ color: statusColor.value.hex })
            }, toDisplayString(statusLabel.value), 5)
          ]),
          createBaseVNode("span", {
            class: "w-2 h-2 rounded-full border border-white",
            style: normalizeStyle({ backgroundColor: statusColor.value.hex })
          }, null, 4)
        ]),
        _cache[2] || (_cache[2] = createStaticVNode('<div class="flex-1 my-2 bg-slate-50/50 rounded-xl border border-slate-100 flex flex-col items-center justify-center relative overflow-hidden" data-v-aa010bd1><div class="w-16 h-2.5 bg-slate-200 border border-slate-300 rounded-sm absolute top-2" data-v-aa010bd1></div><div class="w-7 h-7 absolute bottom-2 flex items-center justify-center opacity-70" data-v-aa010bd1><svg viewBox="0 0 100 100" class="w-full h-full text-slate-400" xmlns="http://www.w3.org/2000/svg" data-v-aa010bd1><rect x="25" y="25" width="50" height="40" rx="8" fill="currentColor" data-v-aa010bd1></rect><rect x="35" y="65" width="30" height="10" rx="3" fill="currentColor" data-v-aa010bd1></rect></svg></div><div class="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-cyan-400/20 via-transparent to-cyan-400/20" data-v-aa010bd1></div></div>', 1)),
        createBaseVNode("div", _hoisted_3$2, [
          createBaseVNode("div", _hoisted_4$1, [
            __props.features?.power_outlet !== false && __props.socketCount > 0 ? (openBlock(), createBlock(unref(Zap), {
              key: 0,
              class: "w-3 h-3 text-slate-400",
              title: "Power Outlet"
            })) : createCommentVNode("", true),
            __props.features?.computer ? (openBlock(), createBlock(unref(Monitor), {
              key: 1,
              class: "w-3 h-3 text-slate-400",
              title: "Computer Available"
            })) : createCommentVNode("", true),
            __props.features?.ac ? (openBlock(), createBlock(unref(Wind), {
              key: 2,
              class: "w-3 h-3 text-slate-400",
              title: "Air Conditioned"
            })) : createCommentVNode("", true),
            __props.features?.wifi !== false ? (openBlock(), createBlock(unref(Wifi), {
              key: 3,
              class: "w-3 h-3 text-slate-400",
              title: "High Speed WiFi"
            })) : createCommentVNode("", true)
          ]),
          _cache[1] || (_cache[1] = createBaseVNode("span", { class: "text-[7.5px] font-bold text-slate-400 uppercase tracking-widest leading-none" }, " Private ", -1))
        ])
      ], 2);
    };
  }
});
const CabinSvg = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-aa010bd1"]]);
const _hoisted_1$2 = { class: "relative w-full overflow-auto bg-slate-50/40 p-6 rounded-3xl border border-slate-100/80 min-h-[500px]" };
const _hoisted_2$2 = ["draggable", "onDragstart"];
const _hoisted_3$1 = {
  key: 1,
  class: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center"
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "CabinGrid",
  props: {
    seats: {},
    selectedSeat: { default: null },
    isDesigner: { type: Boolean, default: false },
    useCanvas: { type: Boolean, default: true },
    canvasWidth: { default: 800 },
    canvasHeight: { default: 600 },
    gridSnap: { type: Boolean, default: true }
  },
  emits: ["seat-click", "layout-change"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const draggedSeat = ref(null);
    const dragOffset = ref({ x: 0, y: 0 });
    const cabinSeats = computed(() => {
      return props.seats.filter((s) => s.seat_type === "private_room" || s.cabin_number !== null);
    });
    const getCabinFeatures = (seat) => {
      if (seat.cabin_features) return seat.cabin_features;
      return {
        power_outlet: seat.socket_count > 0,
        computer: seat.has_computer,
        ac: true,
        wifi: true
      };
    };
    const getSimpleCabinNumber = (num) => {
      return String(num).replace(/\D/g, "") || num;
    };
    const onCabinClick = (seat) => {
      emit("seat-click", seat);
    };
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
      const finalX = Math.max(0, Math.min(x, props.canvasWidth - 128));
      const finalY = Math.max(0, Math.min(y, props.canvasHeight - 144));
      emit("layout-change", draggedSeat.value.id, finalX, finalY);
      draggedSeat.value = null;
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$2, [
        __props.useCanvas ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: "relative mx-auto bg-white rounded-3xl border border-slate-150 shadow-lg overflow-hidden transition-all",
          style: normalizeStyle({ width: __props.canvasWidth + "px", height: __props.canvasHeight + "px" }),
          onDragover: _cache[0] || (_cache[0] = withModifiers(() => {
          }, ["prevent"])),
          onDrop: _cache[1] || (_cache[1] = ($event) => onDrop($event))
        }, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(cabinSeats.value, (seat, index) => {
            return openBlock(), createElementBlock("div", {
              key: seat.id,
              draggable: __props.isDesigner,
              onDragstart: ($event) => onDragStart($event, seat),
              style: normalizeStyle({
                position: "absolute",
                left: `${seat.position_x !== null && seat.position_x !== void 0 && seat.position_x !== 0 ? seat.position_x : 50 + index % 5 * 145}px`,
                top: `${seat.position_y !== null && seat.position_y !== void 0 && seat.position_y !== 0 ? seat.position_y : 60 + Math.floor(index / 5) * 190}px`
              }),
              class: "z-10"
            }, [
              createVNode(CabinSvg, {
                number: seat.cabin_number || getSimpleCabinNumber(seat.seat_number),
                status: seat.status,
                features: getCabinFeatures(seat),
                "socket-count": seat.socket_count,
                highlighted: __props.selectedSeat?.id === seat.id,
                onClick: ($event) => onCabinClick(seat)
              }, null, 8, ["number", "status", "features", "socket-count", "highlighted", "onClick"])
            ], 44, _hoisted_2$2);
          }), 128))
        ], 36)) : (openBlock(), createElementBlock("div", _hoisted_3$1, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(cabinSeats.value, (seat) => {
            return openBlock(), createElementBlock("div", {
              key: seat.id
            }, [
              createVNode(CabinSvg, {
                number: seat.cabin_number || getSimpleCabinNumber(seat.seat_number),
                status: seat.status,
                features: getCabinFeatures(seat),
                "socket-count": seat.socket_count,
                highlighted: __props.selectedSeat?.id === seat.id,
                onClick: ($event) => onCabinClick(seat)
              }, null, 8, ["number", "status", "features", "socket-count", "highlighted", "onClick"])
            ]);
          }), 128))
        ]))
      ]);
    };
  }
});
const _hoisted_1$1 = { class: "bg-slate-50/80 backdrop-blur-sm border border-slate-100 rounded-3xl px-6 py-4 flex flex-wrap items-center justify-center gap-6 shadow-sm" };
const _hoisted_2$1 = { class: "text-xs font-bold text-slate-650 tracking-tight" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "SeatStatusLegend",
  setup(__props) {
    const legendItems = [
      { label: "Available", color: "#22C55E" },
      { label: "Occupied", color: "#EF4444" },
      { label: "Free Soon", color: "#EAB308" },
      { label: "Reserved", color: "#3B82F6" },
      { label: "Overstay", color: "#F97316" },
      { label: "Serious Overstay", color: "#A855F7" },
      { label: "Maintenance", color: "#6B7280" }
    ];
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        (openBlock(), createElementBlock(Fragment, null, renderList(legendItems, (item) => {
          return createBaseVNode("div", {
            key: item.label,
            class: "flex items-center space-x-2 select-none"
          }, [
            createBaseVNode("span", {
              class: "w-3 h-3 rounded-full transition-shadow duration-300",
              style: normalizeStyle({
                backgroundColor: item.color,
                boxShadow: "0 0 6px " + item.color + "80"
              })
            }, null, 4),
            createBaseVNode("span", _hoisted_2$1, toDisplayString(item.label), 1)
          ]);
        }), 64))
      ]);
    };
  }
});
const _hoisted_1 = { class: "space-y-6 font-outfit" };
const _hoisted_2 = { class: "bg-white p-4 rounded-3xl shadow-sm border border-slate-100 flex flex-wrap items-center gap-4 text-left" };
const _hoisted_3 = {
  key: 0,
  class: "relative"
};
const _hoisted_4 = ["value"];
const _hoisted_5 = {
  key: 1,
  class: "flex items-center bg-slate-100 p-1 rounded-xl w-fit gap-1"
};
const _hoisted_6 = ["onClick"];
const _hoisted_7 = { class: "bg-white rounded-3xl border border-slate-50 shadow-sm px-6 py-4 flex items-center justify-between" };
const _hoisted_8 = { class: "text-sm font-bold text-slate-800 uppercase tracking-wider" };
const _hoisted_9 = { class: "text-slate-400 font-bold lowercase" };
const _hoisted_10 = { class: "text-xs text-slate-400 font-bold uppercase tracking-widest" };
const _hoisted_11 = { class: "relative" };
const _hoisted_12 = {
  key: 0,
  class: "space-y-10"
};
const _hoisted_13 = { class: "border-b border-slate-100 pb-3 flex items-center justify-between text-left" };
const _hoisted_14 = { class: "text-xs font-bold uppercase text-slate-700 tracking-wider flex items-center space-x-1.5" };
const _hoisted_15 = { class: "text-[10px] text-slate-400 font-bold uppercase tracking-wider bg-slate-50 px-2 py-0.5 rounded-full" };
const _hoisted_16 = { class: "relative" };
const _hoisted_17 = { key: 1 };
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
    canvasWidth: { default: 800 },
    canvasHeight: { default: 600 },
    gridSnap: { type: Boolean, default: true }
  },
  emits: ["seat-click", "table-click", "layout-change", "table-layout-change"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const activeFloorId = ref(null);
    const activeSectionId = ref(null);
    watch(() => props.floors, (newFloors) => {
      if (newFloors.length > 0 && !activeFloorId.value) {
        activeFloorId.value = newFloors[0].id;
      }
    }, { immediate: true });
    const currentFloorSections = computed(() => {
      if (!activeFloorId.value) return props.sections;
      return props.sections.filter((s) => s.floor_id === activeFloorId.value);
    });
    watch(currentFloorSections, (newSections) => {
    }, { immediate: true });
    const activeSectionName = computed(() => {
      if (activeSectionId.value === null) return "All Sections";
      const section = props.sections.find((s) => s.id === activeSectionId.value);
      return section ? section.name : "Unknown Section";
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
    const getSectionTables = (sectionId) => {
      let filtered = props.tables;
      if (activeFloorId.value) {
        filtered = filtered.filter((t) => t.floor_id === activeFloorId.value);
      }
      return filtered.filter((t) => t.section_id === sectionId);
    };
    __expose({ activeFloorId, activeSectionId });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          __props.floors.length > 1 ? (openBlock(), createElementBlock("div", _hoisted_3, [
            withDirectives(createBaseVNode("select", {
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => activeFloorId.value = $event),
              class: "appearance-none bg-slate-50 border border-slate-100 rounded-xl text-sm font-semibold text-slate-700 py-2 pl-9 pr-8 cursor-pointer focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
            }, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(__props.floors, (floor) => {
                return openBlock(), createElementBlock("option", {
                  key: floor.id,
                  value: floor.id
                }, toDisplayString(floor.name), 9, _hoisted_4);
              }), 128))
            ], 512), [
              [vModelSelect, activeFloorId.value]
            ]),
            createVNode(unref(Building2), { class: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" }),
            createVNode(unref(ChevronDown), { class: "absolute right-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400 pointer-events-none" })
          ])) : createCommentVNode("", true),
          currentFloorSections.value.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_5, [
            createBaseVNode("button", {
              onClick: _cache[1] || (_cache[1] = ($event) => activeSectionId.value = null),
              class: normalizeClass([
                "px-4 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap active:scale-98 cursor-pointer border border-transparent",
                activeSectionId.value === null ? "bg-white text-emerald-700 shadow-sm border-slate-200/40" : "text-slate-500 hover:text-slate-700"
              ])
            }, " All Seats ", 2),
            (openBlock(true), createElementBlock(Fragment, null, renderList(currentFloorSections.value, (section) => {
              return openBlock(), createElementBlock("button", {
                key: section.id,
                onClick: ($event) => activeSectionId.value = section.id,
                class: normalizeClass([
                  "px-4 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap active:scale-98 cursor-pointer border border-transparent",
                  activeSectionId.value === section.id ? "bg-white text-emerald-700 shadow-sm border-slate-200/40" : "text-slate-500 hover:text-slate-700"
                ])
              }, toDisplayString(section.name), 11, _hoisted_6);
            }), 128))
          ])) : createCommentVNode("", true)
        ]),
        createBaseVNode("div", _hoisted_7, [
          createBaseVNode("h2", _hoisted_8, [
            _cache[2] || (_cache[2] = createTextVNode(" Layout View — ", -1)),
            createBaseVNode("span", _hoisted_9, toDisplayString(activeSectionName.value), 1)
          ]),
          createBaseVNode("div", _hoisted_10, toDisplayString(filteredSeats.value.length) + " Seats / " + toDisplayString(currentLayoutMode.value) + " Layout ", 1)
        ]),
        createBaseVNode("div", _hoisted_11, [
          activeSectionId.value === null ? (openBlock(), createElementBlock("div", _hoisted_12, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(currentFloorSections.value, (section) => {
              return openBlock(), createElementBlock("div", {
                key: section.id,
                class: "bg-white p-5 rounded-3xl border border-slate-100 shadow-sm space-y-4"
              }, [
                createBaseVNode("div", _hoisted_13, [
                  createBaseVNode("h3", _hoisted_14, [
                    _cache[3] || (_cache[3] = createBaseVNode("span", { class: "w-1.5 h-3 bg-emerald-600 rounded-sm" }, null, -1)),
                    createBaseVNode("span", null, toDisplayString(section.name) + " Section", 1)
                  ]),
                  createBaseVNode("span", _hoisted_15, toDisplayString(getSectionSeats(section.id).length) + " Seats ", 1)
                ]),
                createBaseVNode("div", _hoisted_16, [
                  currentLayoutMode.value === "individual" ? (openBlock(), createBlock(_sfc_main$6, {
                    key: 0,
                    seats: getSectionSeats(section.id),
                    sections: __props.sections,
                    "selected-seat": __props.selectedSeat,
                    "is-designer": __props.draggable,
                    "use-canvas": !isDesignerListView.value,
                    "canvas-width": __props.canvasWidth,
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
                    "canvas-width": __props.canvasWidth,
                    "canvas-height": __props.canvasHeight,
                    "grid-snap": __props.gridSnap,
                    onSeatClick,
                    onTableClick,
                    onTableLayoutChange
                  }, null, 8, ["tables", "seats", "selected-seat", "is-designer", "use-canvas", "canvas-width", "canvas-height", "grid-snap"])) : currentLayoutMode.value === "cabins" ? (openBlock(), createBlock(_sfc_main$2, {
                    key: 2,
                    seats: getSectionSeats(section.id),
                    "selected-seat": __props.selectedSeat,
                    "is-designer": __props.draggable,
                    "use-canvas": !isDesignerListView.value,
                    "canvas-width": __props.canvasWidth,
                    "canvas-height": __props.canvasHeight,
                    "grid-snap": __props.gridSnap,
                    onSeatClick,
                    onLayoutChange: onSeatLayoutChange
                  }, null, 8, ["seats", "selected-seat", "is-designer", "use-canvas", "canvas-width", "canvas-height", "grid-snap"])) : createCommentVNode("", true)
                ])
              ]);
            }), 128))
          ])) : (openBlock(), createElementBlock("div", _hoisted_17, [
            currentLayoutMode.value === "individual" ? (openBlock(), createBlock(_sfc_main$6, {
              key: 0,
              seats: filteredSeats.value,
              sections: __props.sections,
              "selected-seat": __props.selectedSeat,
              "is-designer": __props.draggable,
              "use-canvas": !isDesignerListView.value,
              "canvas-width": __props.canvasWidth,
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
              "canvas-width": __props.canvasWidth,
              "canvas-height": __props.canvasHeight,
              "grid-snap": __props.gridSnap,
              onSeatClick,
              onTableClick,
              onTableLayoutChange
            }, null, 8, ["tables", "seats", "selected-seat", "is-designer", "use-canvas", "canvas-width", "canvas-height", "grid-snap"])) : currentLayoutMode.value === "cabins" ? (openBlock(), createBlock(_sfc_main$2, {
              key: 2,
              seats: filteredSeats.value,
              "selected-seat": __props.selectedSeat,
              "is-designer": __props.draggable,
              "use-canvas": !isDesignerListView.value,
              "canvas-width": __props.canvasWidth,
              "canvas-height": __props.canvasHeight,
              "grid-snap": __props.gridSnap,
              onSeatClick,
              onLayoutChange: onSeatLayoutChange
            }, null, 8, ["seats", "selected-seat", "is-designer", "use-canvas", "canvas-width", "canvas-height", "grid-snap"])) : createCommentVNode("", true)
          ]))
        ]),
        createVNode(_sfc_main$1)
      ]);
    };
  }
});
const SeatLayoutRenderer = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-9977090f"]]);
export {
  SeatLayoutRenderer as S
};
