import { d as defineComponent, c as createElementBlock, n as normalizeClass, e as createStaticVNode, i as openBlock, E as computed, b as createBaseVNode, t as toDisplayString, f as createVNode, u as unref, r as ref, H as watch, m as createCommentVNode, v as withDirectives, B as vModelSelect, F as Fragment, h as renderList, j as createTextVNode, s as withModifiers, k as createBlock, I as normalizeStyle } from "./main-Dk2mUbjP.js";
import { U as User } from "./user-CnueMG7y.js";
import { M as Monitor } from "./monitor-E_O9_Anu.js";
import { P as PanelsTopLeft } from "./panels-top-left-CTY1cFxw.js";
import { Z as Zap } from "./zap-DSIh5NSP.js";
import { B as Building2 } from "./building-2-DPMW20Et.js";
import { C as ChevronDown } from "./chevron-down-e5XzB-KD.js";
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "SeatSvg",
  props: {
    rotate: { type: Boolean },
    highlighted: { type: Boolean }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("svg", {
        viewBox: "0 0 100 100",
        class: normalizeClass(["w-full h-full", __props.rotate ? "rotate-180" : ""]),
        xmlns: "http://www.w3.org/2000/svg"
      }, [..._cache[0] || (_cache[0] = [
        createStaticVNode('<path d="M 20 15 Q 50 5 80 15 L 75 30 Q 50 20 25 30 Z" fill="currentColor" style="filter:brightness(0.85);"></path><rect x="10" y="25" width="12" height="40" rx="4" fill="#CBD5E1" stroke="#94A3B8" stroke-width="1.5"></rect><rect x="78" y="25" width="12" height="40" rx="4" fill="#CBD5E1" stroke="#94A3B8" stroke-width="1.5"></rect><rect x="12" y="30" width="8" height="30" rx="3" fill="#F1F5F9"></rect><rect x="80" y="30" width="8" height="30" rx="3" fill="#F1F5F9"></rect><rect x="22" y="25" width="56" height="45" rx="10" fill="currentColor"></rect><rect x="26" y="33" width="48" height="30" rx="6" fill="#FFFFFF" opacity="0.15"></rect>', 7)
      ])], 2);
    };
  }
});
const _hoisted_1$1 = { class: "px-4 py-3 bg-gray-50 border-b border-gray-100 flex items-center justify-between" };
const _hoisted_2$1 = { class: "text-sm font-bold text-gray-800" };
const _hoisted_3$1 = { class: "p-4 space-y-4" };
const _hoisted_4$1 = { class: "flex items-center space-x-3" };
const _hoisted_5$1 = { class: "flex-1 min-w-0" };
const _hoisted_6$1 = { class: "text-sm font-bold text-gray-900 truncate" };
const _hoisted_7$1 = { class: "text-xs font-medium text-gray-500" };
const _hoisted_8$1 = { class: "grid grid-cols-3 gap-2 pt-3 border-t border-gray-100" };
const _hoisted_9$1 = { class: "text-[8px] font-black uppercase tracking-tighter" };
const _hoisted_10$1 = { class: "text-[10px] font-black text-gray-400 uppercase tracking-widest pt-2 flex items-center justify-between" };
const _hoisted_11$1 = { class: "capitalize" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "SeatPopover",
  props: {
    seat: {},
    sectionName: {},
    position: {}
  },
  setup(__props) {
    const props = __props;
    const isAvailable = computed(() => props.seat.status === "available");
    const occupancyLabel = computed(() => {
      if (props.seat.current_booking?.user_name) return props.seat.current_booking.user_name;
      if (isAvailable.value) return "Available";
      if (props.seat.status === "maintenance") return "Under Maintenance";
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
    const statusDot = computed(() => {
      const map = {
        available: "bg-[#29B072]",
        occupied: "bg-[#FF9D43]",
        reserved: "bg-[#617DFF]",
        overstay: "bg-[#F4D339]",
        serious_overstay: "bg-[#E95252]",
        maintenance: "bg-[#9CA3AF]"
      };
      return map[props.seat?.status] || "bg-gray-400";
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([
          "absolute left-1/2 -translate-x-1/2 w-64 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-[100] transition-all duration-300",
          __props.position === "top" ? "bottom-[110%]" : "top-[110%]"
        ])
      }, [
        createBaseVNode("div", _hoisted_1$1, [
          createBaseVNode("span", _hoisted_2$1, "Seat " + toDisplayString(__props.seat.seat_number), 1),
          createBaseVNode("div", {
            class: normalizeClass(["w-2 h-2 rounded-full", statusDot.value])
          }, null, 2)
        ]),
        createBaseVNode("div", _hoisted_3$1, [
          createBaseVNode("div", _hoisted_4$1, [
            createBaseVNode("div", {
              class: normalizeClass(["w-10 h-10 rounded-xl flex items-center justify-center border transition-colors", isAvailable.value ? "bg-green-50 text-green-600 border-green-100" : "bg-indigo-50 text-indigo-600 border-indigo-100"])
            }, [
              createVNode(unref(User), { class: "w-5 h-5" })
            ], 2),
            createBaseVNode("div", _hoisted_5$1, [
              createBaseVNode("p", _hoisted_6$1, toDisplayString(occupancyLabel.value), 1),
              createBaseVNode("p", _hoisted_7$1, toDisplayString(displayTimeLeft.value !== null ? displayTimeLeft.value + " mins left" : isAvailable.value ? "Ready for booking" : "Currently Unavailable"), 1)
            ])
          ]),
          createBaseVNode("div", _hoisted_8$1, [
            createBaseVNode("div", {
              class: normalizeClass(["flex flex-col items-center p-2 rounded-xl transition-colors", __props.seat.has_computer ? "bg-indigo-50 text-indigo-600" : "bg-gray-50 text-gray-400"])
            }, [
              createVNode(unref(Monitor), { class: "w-4 h-4 mb-1" }),
              _cache[0] || (_cache[0] = createBaseVNode("span", { class: "text-[8px] font-black uppercase tracking-tighter" }, "PC", -1))
            ], 2),
            createBaseVNode("div", {
              class: normalizeClass(["flex flex-col items-center p-2 rounded-xl transition-colors", __props.seat.near_window ? "bg-sky-50 text-sky-600" : "bg-gray-50 text-gray-400"])
            }, [
              createVNode(unref(PanelsTopLeft), { class: "w-4 h-4 mb-1" }),
              _cache[1] || (_cache[1] = createBaseVNode("span", { class: "text-[8px] font-black uppercase tracking-tighter" }, "Window", -1))
            ], 2),
            createBaseVNode("div", {
              class: normalizeClass(["flex flex-col items-center p-2 rounded-xl transition-colors", __props.seat.socket_count > 0 ? "bg-orange-50 text-orange-600" : "bg-gray-50 text-gray-400"])
            }, [
              createVNode(unref(Zap), { class: "w-4 h-4 mb-1" }),
              createBaseVNode("span", _hoisted_9$1, toDisplayString(__props.seat.socket_count) + " Slots", 1)
            ], 2)
          ]),
          createBaseVNode("div", _hoisted_10$1, [
            createBaseVNode("span", null, toDisplayString(__props.sectionName), 1),
            createBaseVNode("span", _hoisted_11$1, toDisplayString(__props.seat.seat_type), 1)
          ])
        ])
      ], 2);
    };
  }
});
const _hoisted_1 = { class: "space-y-6" };
const _hoisted_2 = { class: "bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-wrap items-center gap-4" };
const _hoisted_3 = {
  key: 0,
  class: "relative"
};
const _hoisted_4 = ["value"];
const _hoisted_5 = {
  key: 1,
  class: "flex items-center bg-gray-50 p-1 rounded-lg border border-gray-200 overflow-x-auto no-scrollbar gap-1"
};
const _hoisted_6 = ["onClick"];
const _hoisted_7 = { class: "bg-white rounded-2xl shadow-sm border border-gray-200 overflow-visible" };
const _hoisted_8 = { class: "px-6 py-4 border-b border-gray-100 flex items-center justify-between" };
const _hoisted_9 = { class: "font-bold text-gray-800" };
const _hoisted_10 = { class: "text-gray-500" };
const _hoisted_11 = { class: "flex items-center space-x-2 text-xs text-gray-400 font-semibold" };
const _hoisted_12 = { class: "relative bg-gray-50 p-10 min-h-[500px]" };
const _hoisted_13 = {
  key: 0,
  class: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16 p-8 justify-items-center"
};
const _hoisted_14 = { class: "flex items-center space-x-1 justify-center" };
const _hoisted_15 = ["onMouseenter", "onClick"];
const _hoisted_16 = { class: "absolute inset-0 flex items-center justify-center pointer-events-none" };
const _hoisted_17 = { class: "mt-3 px-1.5 py-0.5 rounded shadow-sm border border-black/5 bg-white/95" };
const _hoisted_18 = { class: "block text-[9px] font-bold text-gray-700 leading-none" };
const _hoisted_19 = {
  key: 0,
  class: "absolute inset-[-4px] rounded-full border-2 border-blue-500 pointer-events-none"
};
const _hoisted_20 = { class: "w-48 h-10 bg-white border-2 border-gray-100 rounded-sm shadow-sm flex items-center justify-center relative mx-auto" };
const _hoisted_21 = { class: "flex space-x-4 opacity-10" };
const _hoisted_22 = { class: "flex items-center space-x-1 justify-center" };
const _hoisted_23 = ["onMouseenter", "onClick"];
const _hoisted_24 = { class: "absolute inset-0 flex items-center justify-center pointer-events-none" };
const _hoisted_25 = { class: "mb-3 px-1.5 py-0.5 rounded shadow-sm border border-black/5 bg-white/95" };
const _hoisted_26 = { class: "block text-[9px] font-bold text-gray-700 leading-none" };
const _hoisted_27 = {
  key: 0,
  class: "absolute inset-[-4px] rounded-full border-2 border-blue-500 pointer-events-none"
};
const _hoisted_28 = {
  key: 1,
  class: "relative w-full overflow-x-auto bg-gray-50/50 flex flex-col items-center justify-start p-8 rounded-2xl border border-gray-100 shadow-inner"
};
const _hoisted_29 = ["draggable", "onDragstart", "onMouseenter", "onClick"];
const _hoisted_30 = { class: "absolute inset-0 flex items-center justify-center pointer-events-none" };
const _hoisted_31 = { class: "mt-3 px-1.5 py-0.5 rounded shadow-sm border border-black/5 bg-white/95" };
const _hoisted_32 = { class: "block text-[9px] font-bold text-gray-700 leading-none" };
const _hoisted_33 = {
  key: 0,
  class: "absolute inset-[-4px] rounded-full border-2 border-blue-500 pointer-events-none"
};
const _hoisted_34 = { class: "bg-gray-50/80 border-t border-gray-100 px-8 py-4 flex flex-wrap items-center gap-6" };
const _hoisted_35 = { class: "text-xs font-semibold text-gray-500" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "SeatMap",
  props: {
    seats: {},
    floors: {},
    sections: {},
    selectedSeat: {},
    activeSectionName: {},
    draggable: { type: Boolean },
    seatClickable: { type: Boolean },
    layoutMode: {}
  },
  emits: ["seat-click", "drag-start", "drop"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const activeFloorId = ref(null);
    const activeSectionId = ref(null);
    const hoveredSeatId = ref(null);
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
      if (newSections.length > 0 && !activeSectionId.value) {
        activeSectionId.value = newSections[0].id;
      }
    }, { immediate: true });
    const activeSectionName = computed(() => {
      const section = props.sections.find((s) => s.id === activeSectionId.value);
      return section ? section.name : "All Seats";
    });
    const sectionSeats = computed(() => {
      let filtered = props.seats;
      if (activeFloorId.value) {
        filtered = filtered.filter((s) => s.floor_id === activeFloorId.value);
      }
      if (activeSectionId.value) {
        filtered = filtered.filter((s) => s.section_id === activeSectionId.value);
      } else if (currentFloorSections.value.length > 0) {
        filtered = filtered.filter((s) => s.section_id === currentFloorSections.value[0].id);
      }
      return filtered;
    });
    const isLayoutView = computed(() => {
      if (props.layoutMode) {
        return props.layoutMode === "layout";
      }
      return sectionSeats.value.some((s) => s.position_x || s.position_y);
    });
    const legendItems = [
      { label: "Available", text: "text-[#29B072]" },
      { label: "Reserved", text: "text-[#617DFF]" },
      { label: "Occupied", text: "text-[#FF9D43]" },
      { label: "Overstay", text: "text-[#F4D339]" },
      { label: "Serious Overstay", text: "text-[#E95252]" },
      { label: "Maintenance", text: "text-[#9CA3AF]" }
    ];
    const getStatusColors = (seat) => {
      switch (seat.status) {
        case "available":
          return { text: "text-[#29B072]", dotBg: "bg-[#29B072]" };
        case "occupied":
          return { text: "text-[#FF9D43]", dotBg: "bg-[#FF9D43]" };
        case "reserved":
          return { text: "text-[#617DFF]", dotBg: "bg-[#617DFF]" };
        case "overstay":
          return { text: "text-[#F4D339]", dotBg: "bg-[#F4D339]" };
        case "serious_overstay":
          return { text: "text-[#E95252]", dotBg: "bg-[#E95252]" };
        case "maintenance":
          return { text: "text-[#9CA3AF]", dotBg: "bg-[#9CA3AF]" };
        default:
          return { text: "text-gray-400", dotBg: "bg-gray-400" };
      }
    };
    const isSelected = (seat) => props.selectedSeat?.id === seat.id;
    __expose({ activeFloorId, activeSectionId });
    const eShapeCoordinates = [
      // Top Row (0-19) - 20 seats
      { x: 50, y: 30 },
      { x: 85, y: 30 },
      { x: 120, y: 30 },
      { x: 155, y: 30 },
      { x: 190, y: 30 },
      { x: 225, y: 30 },
      { x: 260, y: 30 },
      { x: 295, y: 30 },
      { x: 330, y: 30 },
      { x: 365, y: 30 },
      { x: 400, y: 30 },
      { x: 435, y: 30 },
      { x: 470, y: 30 },
      { x: 505, y: 30 },
      { x: 540, y: 30 },
      { x: 575, y: 30 },
      { x: 610, y: 30 },
      { x: 645, y: 30 },
      { x: 680, y: 30 },
      { x: 715, y: 30 },
      // Left Desk Column (20-45) - 26 seats
      { x: 75, y: 150 },
      { x: 185, y: 150 },
      { x: 75, y: 185 },
      { x: 185, y: 185 },
      { x: 75, y: 220 },
      { x: 185, y: 220 },
      { x: 75, y: 255 },
      { x: 185, y: 255 },
      { x: 75, y: 290 },
      { x: 185, y: 290 },
      { x: 75, y: 325 },
      { x: 185, y: 325 },
      { x: 75, y: 360 },
      { x: 185, y: 360 },
      { x: 75, y: 395 },
      { x: 185, y: 395 },
      { x: 60, y: 445 },
      { x: 95, y: 445 },
      { x: 130, y: 445 },
      { x: 165, y: 445 },
      { x: 200, y: 445 },
      // Center Desk Column (46-71) - 26 seats
      { x: 325, y: 150 },
      { x: 435, y: 150 },
      { x: 325, y: 185 },
      { x: 435, y: 185 },
      { x: 325, y: 220 },
      { x: 435, y: 220 },
      { x: 325, y: 255 },
      { x: 435, y: 255 },
      { x: 325, y: 290 },
      { x: 435, y: 290 },
      { x: 325, y: 325 },
      { x: 435, y: 325 },
      { x: 325, y: 360 },
      { x: 435, y: 360 },
      { x: 325, y: 395 },
      { x: 435, y: 395 },
      { x: 310, y: 445 },
      { x: 345, y: 445 },
      { x: 380, y: 445 },
      { x: 415, y: 445 },
      { x: 450, y: 445 },
      // Right Desk Column (72-97) - 26 seats
      { x: 575, y: 150 },
      { x: 685, y: 150 },
      { x: 575, y: 185 },
      { x: 685, y: 185 },
      { x: 575, y: 220 },
      { x: 685, y: 220 },
      { x: 575, y: 255 },
      { x: 685, y: 255 },
      { x: 575, y: 290 },
      { x: 685, y: 290 },
      { x: 575, y: 325 },
      { x: 685, y: 325 },
      { x: 575, y: 360 },
      { x: 685, y: 360 },
      { x: 575, y: 395 },
      { x: 685, y: 395 },
      { x: 560, y: 445 },
      { x: 595, y: 445 },
      { x: 630, y: 445 },
      { x: 665, y: 445 },
      { x: 700, y: 445 }
    ];
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          __props.floors.length > 1 ? (openBlock(), createElementBlock("div", _hoisted_3, [
            withDirectives(createBaseVNode("select", {
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => activeFloorId.value = $event),
              class: "appearance-none bg-gray-50 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 py-1.5 pl-9 pr-8 cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500"
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
            createVNode(unref(Building2), { class: "absolute left-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" }),
            createVNode(unref(ChevronDown), { class: "absolute right-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400 pointer-events-none" })
          ])) : createCommentVNode("", true),
          currentFloorSections.value.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_5, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(currentFloorSections.value, (section) => {
              return openBlock(), createElementBlock("button", {
                key: section.id,
                onClick: ($event) => activeSectionId.value = section.id,
                class: normalizeClass([
                  "px-4 py-1.5 rounded-md text-sm font-medium transition-all whitespace-nowrap",
                  activeSectionId.value === section.id ? "bg-white text-indigo-600 shadow-sm" : "text-gray-500 hover:text-gray-700"
                ])
              }, toDisplayString(section.name), 11, _hoisted_6);
            }), 128))
          ])) : createCommentVNode("", true)
        ]),
        createBaseVNode("div", _hoisted_7, [
          createBaseVNode("div", _hoisted_8, [
            createBaseVNode("h2", _hoisted_9, [
              _cache[6] || (_cache[6] = createTextVNode(" Seat Map — ", -1)),
              createBaseVNode("span", _hoisted_10, toDisplayString(activeSectionName.value), 1)
            ]),
            createBaseVNode("div", _hoisted_11, [
              createBaseVNode("span", null, toDisplayString(sectionSeats.value.length) + " seats", 1)
            ])
          ]),
          createBaseVNode("div", _hoisted_12, [
            _cache[10] || (_cache[10] = createStaticVNode('<div class="absolute inset-0 pointer-events-none opacity-20"><div class="absolute top-0 bottom-0 left-[5%] w-[2px] bg-gray-300"></div><div class="absolute top-[10%] bottom-[10%] left-0 w-[5%] border-y-2 border-r-2 border-gray-300 rounded-r-3xl"></div><div class="absolute top-0 bottom-0 right-[5%] w-[2px] bg-gray-300"></div><div class="absolute top-[40%] bottom-[40%] right-0 w-[5%] border-y-2 border-l-2 border-gray-300 rounded-l-3xl"></div></div><div class="absolute top-[10%] left-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Exit</div><div class="absolute bottom-[10%] left-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Exit</div><div class="absolute top-[40%] right-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Exit</div>', 4)),
            !isLayoutView.value ? (openBlock(), createElementBlock("div", _hoisted_13, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(Math.ceil(sectionSeats.value.length / 8), (tableIndex) => {
                return openBlock(), createElementBlock("div", {
                  key: tableIndex,
                  class: "space-y-1"
                }, [
                  createBaseVNode("div", _hoisted_14, [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(sectionSeats.value.slice((tableIndex - 1) * 8, (tableIndex - 1) * 8 + 4), (seat) => {
                      return openBlock(), createElementBlock("div", {
                        key: seat.id,
                        class: "relative group",
                        onMouseenter: ($event) => hoveredSeatId.value = seat.id,
                        onMouseleave: _cache[1] || (_cache[1] = ($event) => hoveredSeatId.value = null),
                        onClick: ($event) => _ctx.$emit("seat-click", seat)
                      }, [
                        createBaseVNode("div", {
                          class: normalizeClass(["w-10 h-10 flex items-center justify-center transition-all drop-shadow-sm", __props.seatClickable ? "cursor-pointer hover:scale-110" : "", getStatusColors(seat).text, isSelected(seat) ? "scale-110" : ""])
                        }, [
                          createVNode(_sfc_main$2, {
                            rotate: false,
                            highlighted: isSelected(seat)
                          }, null, 8, ["highlighted"]),
                          createBaseVNode("div", _hoisted_16, [
                            createBaseVNode("div", _hoisted_17, [
                              createBaseVNode("span", _hoisted_18, toDisplayString(String(seat.seat_number).replace(/\D/g, "") || seat.seat_number), 1)
                            ])
                          ]),
                          isSelected(seat) ? (openBlock(), createElementBlock("div", _hoisted_19)) : createCommentVNode("", true)
                        ], 2),
                        hoveredSeatId.value === seat.id ? (openBlock(), createBlock(_sfc_main$1, {
                          key: 0,
                          seat,
                          "section-name": activeSectionName.value,
                          position: "top"
                        }, null, 8, ["seat", "section-name"])) : createCommentVNode("", true)
                      ], 40, _hoisted_15);
                    }), 128))
                  ]),
                  createBaseVNode("div", _hoisted_20, [
                    _cache[7] || (_cache[7] = createBaseVNode("div", { class: "absolute inset-x-4 h-[2px] bg-gray-50 top-2" }, null, -1)),
                    _cache[8] || (_cache[8] = createBaseVNode("div", { class: "absolute inset-x-4 h-[2px] bg-gray-50 bottom-2" }, null, -1)),
                    createBaseVNode("div", _hoisted_21, [
                      (openBlock(), createElementBlock(Fragment, null, renderList(3, (i) => {
                        return createBaseVNode("div", {
                          key: i,
                          class: "w-8 h-1 bg-gray-400 rounded-full"
                        });
                      }), 64))
                    ])
                  ]),
                  createBaseVNode("div", _hoisted_22, [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(sectionSeats.value.slice((tableIndex - 1) * 8 + 4, (tableIndex - 1) * 8 + 8), (seat) => {
                      return openBlock(), createElementBlock("div", {
                        key: seat.id,
                        class: "relative group",
                        onMouseenter: ($event) => hoveredSeatId.value = seat.id,
                        onMouseleave: _cache[2] || (_cache[2] = ($event) => hoveredSeatId.value = null),
                        onClick: ($event) => _ctx.$emit("seat-click", seat)
                      }, [
                        createBaseVNode("div", {
                          class: normalizeClass(["w-10 h-10 flex items-center justify-center transition-all drop-shadow-sm", __props.seatClickable ? "cursor-pointer hover:scale-110" : "", getStatusColors(seat).text, isSelected(seat) ? "scale-110" : ""])
                        }, [
                          createVNode(_sfc_main$2, {
                            rotate: true,
                            highlighted: isSelected(seat)
                          }, null, 8, ["highlighted"]),
                          createBaseVNode("div", _hoisted_24, [
                            createBaseVNode("div", _hoisted_25, [
                              createBaseVNode("span", _hoisted_26, toDisplayString(String(seat.seat_number).replace(/\D/g, "") || seat.seat_number), 1)
                            ])
                          ]),
                          isSelected(seat) ? (openBlock(), createElementBlock("div", _hoisted_27)) : createCommentVNode("", true)
                        ], 2),
                        hoveredSeatId.value === seat.id ? (openBlock(), createBlock(_sfc_main$1, {
                          key: 0,
                          seat,
                          "section-name": activeSectionName.value,
                          position: "bottom"
                        }, null, 8, ["seat", "section-name"])) : createCommentVNode("", true)
                      ], 40, _hoisted_23);
                    }), 128))
                  ])
                ]);
              }), 128))
            ])) : (openBlock(), createElementBlock("div", _hoisted_28, [
              createBaseVNode("div", {
                class: "relative flex-none w-[800px] h-[600px] bg-white rounded-2xl border-[6px] border-gray-900 shadow-md overflow-hidden",
                onDragover: _cache[4] || (_cache[4] = withModifiers(() => {
                }, ["prevent"])),
                onDrop: _cache[5] || (_cache[5] = ($event) => _ctx.$emit("drop", $event))
              }, [
                _cache[9] || (_cache[9] = createStaticVNode('<div class="absolute inset-0 pointer-events-none"><div class="absolute top-0 left-[25%] w-[15%] h-2 bg-blue-100 border-x border-b border-gray-400 rounded-b-sm"></div><div class="absolute top-0 right-[25%] w-[15%] h-2 bg-blue-100 border-x border-b border-gray-400 rounded-b-sm"></div><div class="absolute top-[45%] left-0 w-2 h-[15%] bg-blue-100 border-y border-r border-gray-400 rounded-r-sm"></div><div class="absolute top-[20%] right-0 w-2 h-[40%] bg-blue-100 border-y border-l border-gray-400 rounded-l-sm"></div><div class="absolute top-0 left-0 w-20 h-20 border-b-2 border-r-2 border-gray-800 rounded-br-full opacity-40"></div><div class="absolute bottom-0 right-0 w-20 h-20 border-t-2 border-l-2 border-gray-800 rounded-tl-full opacity-40"></div><div class="absolute top-[80px] left-[10%] right-[10%] h-[60px] bg-white border-[2px] border-gray-600 shadow-sm z-10"></div><div class="absolute top-[140px] left-[15%] w-[60px] h-[300px] bg-white border-[2px] border-t-0 border-gray-600 shadow-sm z-0"></div><div class="absolute top-[140px] left-1/2 -translate-x-1/2 w-[60px] h-[300px] bg-white border-[2px] border-t-0 border-gray-600 shadow-sm z-0"></div><div class="absolute top-[140px] right-[15%] w-[60px] h-[300px] bg-white border-[2px] border-t-0 border-gray-600 shadow-sm z-0"></div><div class="absolute bottom-[20px] left-[12%] right-[25%] h-[40px] bg-white border-[2px] border-gray-600 shadow-sm"></div><svg class="absolute top-[220px] left-[32%] w-14 h-14 text-green-700/70 drop-shadow-sm" viewBox="0 0 100 100" fill="currentColor"><path d="M50 20Q65 35 50 50Q35 35 50 20Z"></path><path d="M50 80Q65 65 50 50Q35 65 50 80Z"></path><path d="M20 50Q35 65 50 50Q35 35 20 50Z"></path><path d="M80 50Q65 65 50 50Q65 35 80 50Z"></path><path d="M28 28Q50 35 50 50Q35 50 28 28Z"></path><path d="M72 72Q50 65 50 50Q65 50 72 72Z"></path><path d="M28 72Q35 50 50 50Q50 65 28 72Z"></path><path d="M72 28Q65 50 50 50Q50 35 72 28Z"></path><circle cx="50" cy="50" r="4" fill="#064e3b"></circle></svg><svg class="absolute top-[380px] left-[32%] w-14 h-14 text-green-700/70 drop-shadow-sm" viewBox="0 0 100 100" fill="currentColor"><path d="M50 20Q65 35 50 50Q35 35 50 20Z"></path><path d="M50 80Q65 65 50 50Q35 65 50 80Z"></path><path d="M20 50Q35 65 50 50Q35 35 20 50Z"></path><path d="M80 50Q65 65 50 50Q65 35 80 50Z"></path><path d="M28 28Q50 35 50 50Q35 50 28 28Z"></path><path d="M72 72Q50 65 50 50Q65 50 72 72Z"></path><path d="M28 72Q35 50 50 50Q50 65 28 72Z"></path><path d="M72 28Q65 50 50 50Q50 35 72 28Z"></path><circle cx="50" cy="50" r="4" fill="#064e3b"></circle></svg><svg class="absolute top-[220px] right-[32%] w-14 h-14 text-green-700/70 drop-shadow-sm" viewBox="0 0 100 100" fill="currentColor"><path d="M50 20Q65 35 50 50Q35 35 50 20Z"></path><path d="M50 80Q65 65 50 50Q35 65 50 80Z"></path><path d="M20 50Q35 65 50 50Q35 35 20 50Z"></path><path d="M80 50Q65 65 50 50Q65 35 80 50Z"></path><path d="M28 28Q50 35 50 50Q35 50 28 28Z"></path><path d="M72 72Q50 65 50 50Q65 50 72 72Z"></path><path d="M28 72Q35 50 50 50Q50 65 28 72Z"></path><path d="M72 28Q65 50 50 50Q50 35 72 28Z"></path><circle cx="50" cy="50" r="4" fill="#064e3b"></circle></svg><svg class="absolute top-[380px] right-[32%] w-14 h-14 text-green-700/70 drop-shadow-sm" viewBox="0 0 100 100" fill="currentColor"><path d="M50 20Q65 35 50 50Q35 35 50 20Z"></path><path d="M50 80Q65 65 50 50Q35 65 50 80Z"></path><path d="M20 50Q35 65 50 50Q35 35 20 50Z"></path><path d="M80 50Q65 65 50 50Q65 35 80 50Z"></path><path d="M28 28Q50 35 50 50Q35 50 28 28Z"></path><path d="M72 72Q50 65 50 50Q65 50 72 72Z"></path><path d="M28 72Q35 50 50 50Q50 65 28 72Z"></path><path d="M72 28Q65 50 50 50Q50 35 72 28Z"></path><circle cx="50" cy="50" r="4" fill="#064e3b"></circle></svg><svg class="absolute bottom-[20px] left-[3%] w-14 h-14 text-green-700/70 drop-shadow-sm" viewBox="0 0 100 100" fill="currentColor"><path d="M50 20Q65 35 50 50Q35 35 50 20Z"></path><path d="M50 80Q65 65 50 50Q35 65 50 80Z"></path><path d="M20 50Q35 65 50 50Q35 35 20 50Z"></path><path d="M80 50Q65 65 50 50Q65 35 80 50Z"></path><path d="M28 28Q50 35 50 50Q35 50 28 28Z"></path><path d="M72 72Q50 65 50 50Q65 50 72 72Z"></path><path d="M28 72Q35 50 50 50Q50 65 28 72Z"></path><path d="M72 28Q65 50 50 50Q50 35 72 28Z"></path><circle cx="50" cy="50" r="4" fill="#064e3b"></circle></svg><svg class="absolute bottom-[20px] right-[13%] w-14 h-14 text-green-700/70 drop-shadow-sm" viewBox="0 0 100 100" fill="currentColor"><path d="M50 20Q65 35 50 50Q35 35 50 20Z"></path><path d="M50 80Q65 65 50 50Q35 65 50 80Z"></path><path d="M20 50Q35 65 50 50Q35 35 20 50Z"></path><path d="M80 50Q65 65 50 50Q65 35 80 50Z"></path><path d="M28 28Q50 35 50 50Q35 50 28 28Z"></path><path d="M72 72Q50 65 50 50Q65 50 72 72Z"></path><path d="M28 72Q35 50 50 50Q50 65 28 72Z"></path><path d="M72 28Q65 50 50 50Q50 35 72 28Z"></path><circle cx="50" cy="50" r="4" fill="#064e3b"></circle></svg></div>', 1)),
                (openBlock(true), createElementBlock(Fragment, null, renderList(sectionSeats.value, (seat, idx) => {
                  return openBlock(), createElementBlock("div", {
                    key: seat.id,
                    draggable: __props.draggable,
                    onDragstart: ($event) => _ctx.$emit("drag-start", $event, seat),
                    onMouseenter: ($event) => hoveredSeatId.value = seat.id,
                    onMouseleave: _cache[3] || (_cache[3] = ($event) => hoveredSeatId.value = null),
                    onClick: ($event) => _ctx.$emit("seat-click", seat),
                    style: normalizeStyle({
                      position: "absolute",
                      left: seat.position_x || seat.position_y ? `${seat.position_x}px` : `${eShapeCoordinates[idx]?.x || 20 + idx * 60 % 700}px`,
                      top: seat.position_x || seat.position_y ? `${seat.position_y}px` : `${eShapeCoordinates[idx]?.y || 500}px`
                    }),
                    class: normalizeClass([
                      "w-[52px] h-[52px] flex items-center justify-center transition-all drop-shadow-sm relative",
                      __props.draggable ? "cursor-move active:scale-95" : __props.seatClickable ? "cursor-pointer hover:scale-110" : "",
                      getStatusColors(seat).text,
                      isSelected(seat) ? "scale-110" : ""
                    ])
                  }, [
                    createVNode(_sfc_main$2, {
                      rotate: false,
                      highlighted: isSelected(seat)
                    }, null, 8, ["highlighted"]),
                    createBaseVNode("div", _hoisted_30, [
                      createBaseVNode("div", _hoisted_31, [
                        createBaseVNode("span", _hoisted_32, toDisplayString(String(seat.seat_number).replace(/\D/g, "") || seat.seat_number), 1)
                      ])
                    ]),
                    isSelected(seat) ? (openBlock(), createElementBlock("div", _hoisted_33)) : createCommentVNode("", true),
                    hoveredSeatId.value === seat.id ? (openBlock(), createBlock(_sfc_main$1, {
                      key: 1,
                      seat,
                      "section-name": activeSectionName.value,
                      position: "top"
                    }, null, 8, ["seat", "section-name"])) : createCommentVNode("", true)
                  ], 46, _hoisted_29);
                }), 128))
              ], 32)
            ]))
          ]),
          createBaseVNode("div", _hoisted_34, [
            _cache[12] || (_cache[12] = createBaseVNode("span", { class: "text-sm font-bold text-gray-400 uppercase tracking-widest" }, "Legend", -1)),
            (openBlock(), createElementBlock(Fragment, null, renderList(legendItems, (item) => {
              return createBaseVNode("div", {
                key: item.label,
                class: "flex items-center space-x-2"
              }, [
                (openBlock(), createElementBlock("svg", {
                  viewBox: "0 0 100 100",
                  class: normalizeClass(["w-5 h-5", item.text]),
                  xmlns: "http://www.w3.org/2000/svg"
                }, [..._cache[11] || (_cache[11] = [
                  createBaseVNode("path", {
                    d: "M 20 15 Q 50 5 80 15 L 75 30 Q 50 20 25 30 Z",
                    fill: "currentColor",
                    style: { "filter": "brightness(0.85)" }
                  }, null, -1),
                  createBaseVNode("rect", {
                    x: "22",
                    y: "25",
                    width: "56",
                    height: "45",
                    rx: "10",
                    fill: "currentColor"
                  }, null, -1)
                ])], 2)),
                createBaseVNode("span", _hoisted_35, toDisplayString(item.label), 1)
              ]);
            }), 64))
          ])
        ])
      ]);
    };
  }
});
export {
  _sfc_main as _
};
