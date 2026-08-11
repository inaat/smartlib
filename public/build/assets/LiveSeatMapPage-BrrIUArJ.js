import { c as createLucideIcon, d as defineComponent, r as ref, a as computed, o as onMounted, K as onUnmounted, b as createElementBlock, e as createBaseVNode, i as createBlock, g as createVNode, u as unref, f as createStaticVNode, n as normalizeClass, R as RefreshCw, t as toDisplayString, F as Fragment, k as renderList, w as withCtx, T as Transition, L as Teleport, W as librarianAPI, p as createCommentVNode, B as withModifiers, j as createTextVNode, X as Wrench, m as openBlock, _ as _export_sfc } from "./main-BeUqjoax.js";
import { S as SeatLayoutRenderer } from "./SeatLayoutRenderer-crVBqvSA.js";
import { M as MapPin } from "./map-pin-hjTU3OTG.js";
import { X } from "./x-Dj9LNodU.js";
import { M as Monitor } from "./monitor-D7ior5eo.js";
import { Z as Zap } from "./zap-1J--HJED.js";
import { U as UserCheck } from "./user-check-gjs1HmON.js";
import { C as CircleCheckBig } from "./circle-check-big-BPDnuG2V.js";
import { G as Grid3x3 } from "./grid-3x3-CDc9XQJM.js";
/* empty css               */
import "./user-Jwf_R05Y.js";
import "./panels-top-left-COwzpnN2.js";
import "./building-2-obFScNkw.js";
import "./chevron-down-DgPiBWjn.js";
const Sun = createLucideIcon("sun", [
  ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
  ["path", { d: "M12 2v2", key: "tus03m" }],
  ["path", { d: "M12 20v2", key: "1lh1kg" }],
  ["path", { d: "m4.93 4.93 1.41 1.41", key: "149t6j" }],
  ["path", { d: "m17.66 17.66 1.41 1.41", key: "ptbguv" }],
  ["path", { d: "M2 12h2", key: "1t8f8n" }],
  ["path", { d: "M20 12h2", key: "1q8mjw" }],
  ["path", { d: "m6.34 17.66-1.41 1.41", key: "1m8zz5" }],
  ["path", { d: "m19.07 4.93-1.41 1.41", key: "1shlcs" }]
]);
const _hoisted_1 = { class: "p-4 md:p-6 lg:p-8 space-y-6 font-outfit min-h-screen bg-gray-50" };
const _hoisted_2 = { class: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4" };
const _hoisted_3 = { class: "text-left" };
const _hoisted_4 = { class: "text-xl md:text-2xl font-extrabold text-slate-800 tracking-tight flex items-center space-x-2.5" };
const _hoisted_5 = { class: "w-9 h-9 rounded-xl bg-emerald-100 flex items-center justify-center flex-shrink-0" };
const _hoisted_6 = { class: "flex items-center space-x-3 flex-shrink-0" };
const _hoisted_7 = { class: "text-[10px] text-slate-400 font-semibold uppercase tracking-wider flex items-center space-x-1.5 bg-white border border-slate-100 rounded-full px-3 py-2" };
const _hoisted_8 = { class: "grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3" };
const _hoisted_9 = { class: "text-[10px] font-bold uppercase text-slate-400 tracking-wider leading-none" };
const _hoisted_10 = {
  key: 0,
  class: "flex items-center justify-center h-96"
};
const _hoisted_11 = { key: 1 };
const _hoisted_12 = { class: "relative w-full sm:w-[420px] bg-white rounded-t-3xl sm:rounded-3xl shadow-2xl border border-slate-100 overflow-hidden z-10 max-h-[80vh] overflow-y-auto" };
const _hoisted_13 = { class: "px-6 pt-4 pb-3 border-b border-slate-100 flex items-center justify-between" };
const _hoisted_14 = { class: "flex items-center space-x-3" };
const _hoisted_15 = { class: "text-left" };
const _hoisted_16 = { class: "text-sm font-bold text-slate-800 tracking-tight" };
const _hoisted_17 = { class: "px-6 py-4 space-y-4" };
const _hoisted_18 = { class: "grid grid-cols-2 gap-3" };
const _hoisted_19 = { class: "bg-slate-50 rounded-xl px-3.5 py-2.5 text-left" };
const _hoisted_20 = { class: "text-xs font-bold text-slate-700 mt-0.5" };
const _hoisted_21 = { class: "bg-slate-50 rounded-xl px-3.5 py-2.5 text-left" };
const _hoisted_22 = { class: "text-xs font-bold text-slate-700 mt-0.5" };
const _hoisted_23 = {
  key: 0,
  class: "text-slate-400 font-semibold"
};
const _hoisted_24 = {
  key: 0,
  class: "flex items-center flex-wrap gap-2"
};
const _hoisted_25 = {
  key: 0,
  class: "inline-flex items-center px-2.5 py-1 bg-blue-50 text-blue-600 rounded-lg text-[10px] font-bold uppercase tracking-wider"
};
const _hoisted_26 = {
  key: 1,
  class: "inline-flex items-center px-2.5 py-1 bg-amber-50 text-amber-600 rounded-lg text-[10px] font-bold uppercase tracking-wider"
};
const _hoisted_27 = {
  key: 2,
  class: "inline-flex items-center px-2.5 py-1 bg-purple-50 text-purple-600 rounded-lg text-[10px] font-bold uppercase tracking-wider"
};
const _hoisted_28 = { class: "flex items-center justify-between" };
const _hoisted_29 = { class: "flex items-center space-x-2" };
const _hoisted_30 = { class: "space-y-2.5" };
const _hoisted_31 = { class: "flex items-center justify-between" };
const _hoisted_32 = { class: "text-xs font-bold text-slate-700" };
const _hoisted_33 = {
  key: 0,
  class: "flex items-center justify-between"
};
const _hoisted_34 = { class: "text-xs font-bold text-slate-700" };
const _hoisted_35 = {
  key: 1,
  class: "flex items-center justify-between"
};
const _hoisted_36 = { class: "text-[10px] text-slate-400 font-bold uppercase" };
const _hoisted_37 = { class: "text-xs font-bold text-slate-600" };
const _hoisted_38 = {
  key: 2,
  class: "flex items-center justify-between"
};
const _hoisted_39 = { class: "text-xs font-bold text-slate-600" };
const _hoisted_40 = {
  key: 3,
  class: "flex items-center justify-between"
};
const _hoisted_41 = {
  key: 2,
  class: "bg-emerald-50 rounded-2xl border border-emerald-100 p-4 text-center"
};
const _hoisted_42 = {
  key: 3,
  class: "bg-slate-50 rounded-2xl border border-slate-200 p-4 text-center"
};
const _hoisted_43 = { class: "relative w-full sm:w-[440px] bg-white rounded-t-3xl sm:rounded-3xl shadow-2xl border border-slate-100 overflow-hidden z-10 max-h-[80vh] overflow-y-auto font-outfit" };
const _hoisted_44 = { class: "px-6 pt-4 pb-3 border-b border-slate-100 flex items-center justify-between" };
const _hoisted_45 = { class: "flex items-center space-x-3" };
const _hoisted_46 = { class: "w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 font-bold" };
const _hoisted_47 = { class: "text-left" };
const _hoisted_48 = { class: "text-sm font-extrabold text-slate-800 tracking-tight" };
const _hoisted_49 = { class: "text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full uppercase tracking-wider" };
const _hoisted_50 = { class: "px-6 py-4 space-y-4" };
const _hoisted_51 = { class: "grid grid-cols-2 gap-3" };
const _hoisted_52 = { class: "bg-slate-50 rounded-xl px-3.5 py-2.5 text-left border border-slate-100" };
const _hoisted_53 = { class: "text-xs font-bold text-slate-700 mt-0.5" };
const _hoisted_54 = { class: "bg-slate-50 rounded-xl px-3.5 py-2.5 text-left border border-slate-100" };
const _hoisted_55 = { class: "text-xs font-bold text-slate-700 mt-0.5" };
const _hoisted_56 = { class: "space-y-2 text-left" };
const _hoisted_57 = { class: "flex items-center justify-between" };
const _hoisted_58 = { class: "text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full" };
const _hoisted_59 = {
  key: 0,
  class: "grid grid-cols-2 gap-2"
};
const _hoisted_60 = ["onClick"];
const _hoisted_61 = { class: "flex items-center space-x-2 truncate" };
const _hoisted_62 = { class: "truncate" };
const _hoisted_63 = { class: "text-[9px] font-bold uppercase tracking-wider opacity-80 ml-1" };
const _hoisted_64 = {
  key: 1,
  class: "bg-slate-50 border border-slate-100 rounded-xl p-4 text-center"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "LiveSeatMapPage",
  setup(__props) {
    const seats = ref([]);
    const floors = ref([]);
    const sections = ref([]);
    const tables = ref([]);
    const selectedSeat = ref(null);
    const selectedTable = ref(null);
    const loading = ref(true);
    const refreshing = ref(false);
    const activeLayoutMode = ref("individual");
    const globalTableCapacity = ref(4);
    const lastRefreshTime = ref(/* @__PURE__ */ new Date());
    const lastUpdatedText = ref("Just now");
    const seatStats = computed(() => {
      return {
        total: seats.value.length,
        available: seats.value.filter((s) => s.status === "available").length,
        occupied: seats.value.filter((s) => s.status === "occupied").length,
        reserved: seats.value.filter((s) => s.status === "reserved").length,
        overstay: seats.value.filter((s) => s.status === "overstay").length,
        serious_overstay: seats.value.filter((s) => s.status === "serious_overstay").length,
        maintenance: seats.value.filter((s) => s.status === "maintenance" || s.is_maintenance).length
      };
    });
    const seatStatusColor = (status) => {
      const map = {
        "available": "bg-emerald-500",
        "occupied": "bg-red-500",
        "reserved": "bg-blue-500",
        "free_soon": "bg-amber-400",
        "overstay": "bg-orange-500",
        "serious_overstay": "bg-purple-600",
        "maintenance": "bg-slate-400"
      };
      return map[status] || "bg-slate-400";
    };
    const seatStatusBadge = (status) => {
      const map = {
        "available": "bg-emerald-50 text-emerald-700 border-emerald-100",
        "occupied": "bg-red-50 text-red-700 border-red-100",
        "reserved": "bg-blue-50 text-blue-700 border-blue-100",
        "free_soon": "bg-amber-50 text-amber-700 border-amber-100",
        "overstay": "bg-orange-50 text-orange-700 border-orange-100",
        "serious_overstay": "bg-purple-50 text-purple-700 border-purple-100",
        "maintenance": "bg-slate-100 text-slate-600 border-slate-200"
      };
      return map[status] || "bg-slate-100 text-slate-600 border-slate-200";
    };
    const seatStatusDot = (status) => {
      const map = {
        "available": "bg-emerald-500",
        "occupied": "bg-red-500",
        "reserved": "bg-blue-500",
        "free_soon": "bg-amber-400",
        "overstay": "bg-orange-500",
        "serious_overstay": "bg-purple-600",
        "maintenance": "bg-slate-400"
      };
      return map[status] || "bg-slate-400";
    };
    const getSeatDisplayTitle = (seat) => {
      if (!seat) return "";
      const num = seat.seat_number || "";
      const secName = seat.seat_section?.name || getSectionName(seat.section_id);
      const subName = seat.seat_subsection?.name || seat.seat_subsection?.code || "";
      if (subName) {
        if (num.toLowerCase().includes(subName.toLowerCase())) {
          return num;
        }
        return `${subName} ${secName && secName !== "N/A" ? secName + "-" : ""}${num}`;
      } else if (secName && secName !== "N/A") {
        if (num.toLowerCase().includes(secName.toLowerCase())) {
          return num;
        }
        return `${secName}-${num}`;
      }
      return num;
    };
    const formatStatus = (status) => {
      const map = {
        "available": "Available",
        "occupied": "Occupied",
        "reserved": "Reserved",
        "free_soon": "Free Soon",
        "overstay": "Overstay",
        "serious_overstay": "Serious Overstay",
        "maintenance": "Maintenance"
      };
      return map[status] || status;
    };
    const formatTime = (time) => {
      if (!time) return "N/A";
      const d = new Date(time);
      return d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", hour12: true });
    };
    const formatDuration = (totalMinutes, suffix = "left") => {
      if (totalMinutes === null || totalMinutes === void 0 || isNaN(totalMinutes)) return "";
      const mins = Math.abs(Math.round(totalMinutes));
      if (mins === 0) return `0m ${suffix}`;
      const hours = Math.floor(mins / 60);
      const remainingMins = mins % 60;
      if (hours > 0) {
        if (remainingMins > 0) {
          return `${hours}h ${remainingMins}m ${suffix}`;
        }
        return `${hours}h ${suffix}`;
      }
      return `${mins}m ${suffix}`;
    };
    const getFloorName = (floorId) => {
      if (!floorId) return "";
      const f = floors.value.find((x) => String(x.id) === String(floorId));
      return f?.name || "";
    };
    const getSectionName = (sectionId) => {
      if (!sectionId) return "";
      const s = sections.value.find((x) => String(x.id) === String(sectionId));
      return s?.name || "";
    };
    const getTableSeats = (table) => {
      if (!table) return [];
      const tableId = typeof table === "object" ? table.id : table;
      if (typeof table === "object" && Array.isArray(table.seats) && table.seats.length > 0) {
        return table.seats;
      }
      return seats.value.filter((s) => s.table_id && String(s.table_id) === String(tableId));
    };
    const getTableDisplayTitle = (table) => {
      if (!table) return "";
      const label = table.label || "";
      if (label) {
        if (label.toLowerCase().startsWith("table")) {
          return label;
        }
        return `Table ${label}`;
      }
      return `Table ${table.id}`;
    };
    const getTableFloorName = (table) => {
      if (!table) return "N/A";
      if (table.floor_id) {
        const name = getFloorName(table.floor_id);
        if (name) return name;
      }
      const tableSeats = getTableSeats(table);
      if (tableSeats.length > 0) {
        const firstSeat = tableSeats[0];
        if (firstSeat.floor?.name) return firstSeat.floor.name;
        if (firstSeat.floor_id) {
          const name = getFloorName(firstSeat.floor_id);
          if (name) return name;
        }
      }
      return "N/A";
    };
    const getTableSectionName = (table) => {
      if (!table) return "N/A";
      const tableSeats = getTableSeats(table);
      let secId = table.section_id;
      if (!secId && tableSeats.length > 0) {
        secId = tableSeats[0].section_id;
      }
      let secName = secId ? getSectionName(secId) : "";
      if (!secName && tableSeats.length > 0 && tableSeats[0].seat_section?.name) {
        secName = tableSeats[0].seat_section.name;
      }
      if (!secName) secName = "N/A";
      const subSeat = tableSeats.find((s) => s.seat_subsection?.name || s.seat_subsection?.code);
      const subName = subSeat?.seat_subsection?.name || subSeat?.seat_subsection?.code;
      if (subName) {
        return secName !== "N/A" ? `${secName} - ${subName}` : subName;
      }
      return secName;
    };
    const handleSeatClickFromTable = (seat) => {
      selectedTable.value = null;
      selectedSeat.value = seat;
    };
    const handleSeatClick = (seat) => {
      selectedTable.value = null;
      selectedSeat.value = seat;
    };
    const handleTableClick = (table) => {
      selectedSeat.value = null;
      selectedTable.value = table;
    };
    const fetchData = async (silent = false) => {
      if (!silent) loading.value = true;
      refreshing.value = true;
      try {
        const [seatsData, floorsData, sectionsData, tablesData, libraryInfo] = await Promise.all([
          librarianAPI.getSeats(),
          librarianAPI.getActiveFloors(),
          librarianAPI.getActiveSections(),
          librarianAPI.getStudyTables(),
          librarianAPI.getLibraryInfo()
        ]);
        seats.value = seatsData;
        floors.value = floorsData.sort((a, b) => a.level - b.level);
        sections.value = sectionsData;
        tables.value = tablesData;
        activeLayoutMode.value = libraryInfo.seat_layout_mode || "individual";
        if (libraryInfo.table_capacity) {
          globalTableCapacity.value = libraryInfo.table_capacity;
        }
        lastRefreshTime.value = /* @__PURE__ */ new Date();
      } catch (error) {
        console.error("Failed to load live seat map data:", error);
      } finally {
        loading.value = false;
        refreshing.value = false;
      }
    };
    const updateLastUpdatedText = () => {
      const now = /* @__PURE__ */ new Date();
      const diffSec = Math.floor((now.getTime() - lastRefreshTime.value.getTime()) / 1e3);
      if (diffSec < 5) {
        lastUpdatedText.value = "Just now";
      } else if (diffSec < 60) {
        lastUpdatedText.value = `${diffSec}s ago`;
      } else {
        const mins = Math.floor(diffSec / 60);
        lastUpdatedText.value = `${mins}m ago`;
      }
    };
    let refreshInterval = null;
    let textInterval = null;
    onMounted(() => {
      fetchData();
      refreshInterval = setInterval(() => fetchData(true), 5e3);
      textInterval = setInterval(updateLastUpdatedText, 5e3);
    });
    onUnmounted(() => {
      if (refreshInterval) clearInterval(refreshInterval);
      if (textInterval) clearInterval(textInterval);
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("div", _hoisted_3, [
            createBaseVNode("h1", _hoisted_4, [
              createBaseVNode("div", _hoisted_5, [
                createVNode(unref(MapPin), { class: "w-5 h-5 text-emerald-600" })
              ]),
              _cache[6] || (_cache[6] = createBaseVNode("span", null, "Live Seat Map", -1))
            ]),
            _cache[7] || (_cache[7] = createBaseVNode("p", { class: "text-xs text-slate-400 font-medium mt-1.5 ml-[46px]" }, "Real-time seat occupancy monitoring across all floors and sections", -1))
          ]),
          createBaseVNode("div", _hoisted_6, [
            _cache[8] || (_cache[8] = createStaticVNode('<div class="flex items-center space-x-2 px-3.5 py-2 bg-emerald-50 border border-emerald-200 rounded-full" data-v-9334d2c0><span class="relative flex h-2.5 w-2.5" data-v-9334d2c0><span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" data-v-9334d2c0></span><span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" data-v-9334d2c0></span></span><span class="text-xs font-bold text-emerald-700 uppercase tracking-wider" data-v-9334d2c0>Live</span></div>', 1)),
            createBaseVNode("div", _hoisted_7, [
              createVNode(unref(RefreshCw), {
                class: normalizeClass(["w-3 h-3", refreshing.value ? "animate-spin text-emerald-500" : "text-slate-400"])
              }, null, 8, ["class"]),
              createBaseVNode("span", null, toDisplayString(lastUpdatedText.value), 1)
            ])
          ])
        ]),
        createBaseVNode("div", _hoisted_8, [
          (openBlock(true), createElementBlock(Fragment, null, renderList([
            { label: "Total Seats", count: seatStats.value.total, bg: "bg-blue-50", text: "text-blue-600" },
            { label: "Available", count: seatStats.value.available, bg: "bg-emerald-50", text: "text-emerald-600" },
            { label: "Occupied", count: seatStats.value.occupied, bg: "bg-rose-50", text: "text-rose-600" },
            { label: "Reserved", count: seatStats.value.reserved, bg: "bg-indigo-50", text: "text-indigo-650" },
            { label: "Overstay", count: seatStats.value.overstay, bg: "bg-orange-50", text: "text-orange-600" },
            { label: "Serious Overstay", count: seatStats.value.serious_overstay, bg: "bg-purple-50", text: "text-purple-650" },
            { label: "Maintenance", count: seatStats.value.maintenance, bg: "bg-slate-100", text: "text-slate-600" }
          ], (stat, key) => {
            return openBlock(), createElementBlock("div", {
              key,
              class: "bg-white p-3 rounded-2xl border border-slate-100 shadow-sm flex items-center space-x-3.5 text-left"
            }, [
              createBaseVNode("div", {
                class: normalizeClass(["w-10 h-10 rounded-xl flex items-center justify-center font-bold text-lg", stat.bg, stat.text])
              }, toDisplayString(stat.count), 3),
              createBaseVNode("div", null, [
                createBaseVNode("p", _hoisted_9, toDisplayString(stat.label), 1)
              ])
            ]);
          }), 128))
        ]),
        loading.value && seats.value.length === 0 ? (openBlock(), createElementBlock("div", _hoisted_10, [..._cache[9] || (_cache[9] = [
          createBaseVNode("div", { class: "flex flex-col items-center space-y-4" }, [
            createBaseVNode("div", { class: "w-12 h-12 border-4 border-emerald-200 border-t-emerald-600 rounded-full animate-spin" }),
            createBaseVNode("span", { class: "text-sm text-slate-400 font-semibold" }, "Loading seat map...")
          ], -1)
        ])])) : (openBlock(), createElementBlock("div", _hoisted_11, [
          createVNode(SeatLayoutRenderer, {
            seats: seats.value,
            floors: floors.value,
            sections: sections.value,
            tables: tables.value,
            "selected-seat": selectedSeat.value,
            draggable: false,
            "seat-clickable": true,
            "layout-mode": activeLayoutMode.value,
            "tables-per-row": 3,
            "table-capacity": globalTableCapacity.value,
            "grid-snap": false,
            "show-legend": true,
            onSeatClick: handleSeatClick,
            onTableClick: handleTableClick
          }, null, 8, ["seats", "floors", "sections", "tables", "selected-seat", "layout-mode", "table-capacity"])
        ])),
        (openBlock(), createBlock(Teleport, { to: "body" }, [
          createVNode(Transition, { name: "slide-up" }, {
            default: withCtx(() => [
              selectedSeat.value ? (openBlock(), createElementBlock("div", {
                key: 0,
                class: "fixed inset-0 z-[100] flex items-end sm:items-center justify-center",
                onClick: _cache[2] || (_cache[2] = withModifiers(($event) => selectedSeat.value = null, ["self"]))
              }, [
                createBaseVNode("div", {
                  class: "absolute inset-0 bg-black/30 backdrop-blur-sm",
                  onClick: _cache[0] || (_cache[0] = ($event) => selectedSeat.value = null)
                }),
                createBaseVNode("div", _hoisted_12, [
                  _cache[22] || (_cache[22] = createBaseVNode("div", { class: "flex justify-center pt-3 pb-1 sm:hidden" }, [
                    createBaseVNode("div", { class: "w-10 h-1 bg-slate-200 rounded-full" })
                  ], -1)),
                  createBaseVNode("div", _hoisted_13, [
                    createBaseVNode("div", _hoisted_14, [
                      createBaseVNode("div", {
                        class: normalizeClass([
                          "w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-sm shadow-sm",
                          seatStatusColor(selectedSeat.value.status)
                        ])
                      }, toDisplayString(selectedSeat.value.seat_number?.replace(/\D/g, "").slice(-2) || selectedSeat.value.seat_number), 3),
                      createBaseVNode("div", _hoisted_15, [
                        createBaseVNode("h3", _hoisted_16, toDisplayString(getSeatDisplayTitle(selectedSeat.value)), 1),
                        createBaseVNode("span", {
                          class: normalizeClass([
                            "inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider mt-0.5",
                            seatStatusBadge(selectedSeat.value.status)
                          ])
                        }, [
                          createBaseVNode("span", {
                            class: normalizeClass(["w-1.5 h-1.5 rounded-full mr-1", seatStatusDot(selectedSeat.value.status)])
                          }, null, 2),
                          createTextVNode(" " + toDisplayString(formatStatus(selectedSeat.value.status)), 1)
                        ], 2)
                      ])
                    ]),
                    createBaseVNode("button", {
                      onClick: _cache[1] || (_cache[1] = ($event) => selectedSeat.value = null),
                      class: "p-2 hover:bg-slate-50 rounded-xl transition-colors cursor-pointer"
                    }, [
                      createVNode(unref(X), { class: "w-4 h-4 text-slate-400" })
                    ])
                  ]),
                  createBaseVNode("div", _hoisted_17, [
                    createBaseVNode("div", _hoisted_18, [
                      createBaseVNode("div", _hoisted_19, [
                        _cache[10] || (_cache[10] = createBaseVNode("div", { class: "text-[10px] font-bold text-slate-400 uppercase tracking-wider" }, "Floor", -1)),
                        createBaseVNode("div", _hoisted_20, toDisplayString(selectedSeat.value.floor?.name || getFloorName(selectedSeat.value.floor_id)), 1)
                      ]),
                      createBaseVNode("div", _hoisted_21, [
                        _cache[11] || (_cache[11] = createBaseVNode("div", { class: "text-[10px] font-bold text-slate-400 uppercase tracking-wider" }, "Section", -1)),
                        createBaseVNode("div", _hoisted_22, [
                          createTextVNode(toDisplayString(selectedSeat.value.seat_section?.name || getSectionName(selectedSeat.value.section_id)) + " ", 1),
                          selectedSeat.value.seat_subsection?.name ? (openBlock(), createElementBlock("span", _hoisted_23, " - " + toDisplayString(selectedSeat.value.seat_subsection.name), 1)) : createCommentVNode("", true)
                        ])
                      ])
                    ]),
                    selectedSeat.value.has_computer || selectedSeat.value.near_window || selectedSeat.value.socket_count > 0 ? (openBlock(), createElementBlock("div", _hoisted_24, [
                      selectedSeat.value.has_computer ? (openBlock(), createElementBlock("span", _hoisted_25, [
                        createVNode(unref(Monitor), { class: "w-3 h-3 mr-1" }),
                        _cache[12] || (_cache[12] = createTextVNode(" Computer ", -1))
                      ])) : createCommentVNode("", true),
                      selectedSeat.value.near_window ? (openBlock(), createElementBlock("span", _hoisted_26, [
                        createVNode(unref(Sun), { class: "w-3 h-3 mr-1" }),
                        _cache[13] || (_cache[13] = createTextVNode(" Window ", -1))
                      ])) : createCommentVNode("", true),
                      selectedSeat.value.socket_count > 0 ? (openBlock(), createElementBlock("span", _hoisted_27, [
                        createVNode(unref(Zap), { class: "w-3 h-3 mr-1" }),
                        createTextVNode(" " + toDisplayString(selectedSeat.value.socket_count) + " Socket" + toDisplayString(selectedSeat.value.socket_count > 1 ? "s" : ""), 1)
                      ])) : createCommentVNode("", true)
                    ])) : createCommentVNode("", true),
                    selectedSeat.value.current_booking ? (openBlock(), createElementBlock("div", {
                      key: 1,
                      class: normalizeClass([
                        "rounded-2xl border p-4 space-y-3 text-left",
                        selectedSeat.value.status === "reserved" ? "bg-blue-50/60 border-blue-100" : selectedSeat.value.status === "occupied" ? "bg-red-50/60 border-red-100" : selectedSeat.value.status === "free_soon" ? "bg-amber-50/60 border-amber-100" : selectedSeat.value.status === "overstay" ? "bg-orange-50/60 border-orange-100" : selectedSeat.value.status === "serious_overstay" ? "bg-purple-50/60 border-purple-100" : "bg-slate-50 border-slate-100"
                      ])
                    }, [
                      createBaseVNode("div", _hoisted_28, [
                        createBaseVNode("div", _hoisted_29, [
                          createVNode(unref(UserCheck), {
                            class: normalizeClass([
                              "w-4 h-4",
                              selectedSeat.value.status === "reserved" ? "text-blue-600" : selectedSeat.value.status === "occupied" ? "text-red-600" : selectedSeat.value.status === "free_soon" ? "text-amber-600" : selectedSeat.value.status === "overstay" ? "text-orange-600" : selectedSeat.value.status === "serious_overstay" ? "text-purple-600" : "text-slate-600"
                            ])
                          }, null, 8, ["class"]),
                          createBaseVNode("span", {
                            class: normalizeClass([
                              "text-xs font-bold uppercase tracking-wider",
                              selectedSeat.value.status === "reserved" ? "text-blue-700" : selectedSeat.value.status === "occupied" ? "text-red-700" : selectedSeat.value.status === "free_soon" ? "text-amber-700" : selectedSeat.value.status === "overstay" ? "text-orange-700" : selectedSeat.value.status === "serious_overstay" ? "text-purple-700" : "text-slate-700"
                            ])
                          }, toDisplayString(selectedSeat.value.status === "reserved" ? "Reserved Booking" : "Current Occupant"), 3)
                        ]),
                        createBaseVNode("span", {
                          class: normalizeClass([
                            "text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider",
                            seatStatusBadge(selectedSeat.value.status)
                          ])
                        }, toDisplayString(formatStatus(selectedSeat.value.status)), 3)
                      ]),
                      createBaseVNode("div", _hoisted_30, [
                        createBaseVNode("div", _hoisted_31, [
                          _cache[14] || (_cache[14] = createBaseVNode("span", { class: "text-[10px] text-slate-400 font-bold uppercase" }, "Student", -1)),
                          createBaseVNode("span", _hoisted_32, toDisplayString(selectedSeat.value.current_booking.user_name), 1)
                        ]),
                        selectedSeat.value.current_booking.user_crn ? (openBlock(), createElementBlock("div", _hoisted_33, [
                          _cache[15] || (_cache[15] = createBaseVNode("span", { class: "text-[10px] text-slate-400 font-bold uppercase" }, "CRN / Roll", -1)),
                          createBaseVNode("span", _hoisted_34, toDisplayString(selectedSeat.value.current_booking.user_crn), 1)
                        ])) : createCommentVNode("", true),
                        selectedSeat.value.current_booking.check_in_time || selectedSeat.value.current_booking.start_time ? (openBlock(), createElementBlock("div", _hoisted_35, [
                          createBaseVNode("span", _hoisted_36, toDisplayString(selectedSeat.value.status === "reserved" ? "Reserved At" : "Checked In"), 1),
                          createBaseVNode("span", _hoisted_37, toDisplayString(formatTime(selectedSeat.value.current_booking.check_in_time || selectedSeat.value.current_booking.start_time)), 1)
                        ])) : createCommentVNode("", true),
                        selectedSeat.value.current_booking.end_time || selectedSeat.value.current_booking.scheduled_end_time ? (openBlock(), createElementBlock("div", _hoisted_38, [
                          _cache[16] || (_cache[16] = createBaseVNode("span", { class: "text-[10px] text-slate-400 font-bold uppercase" }, "Session Ends", -1)),
                          createBaseVNode("span", _hoisted_39, toDisplayString(formatTime(selectedSeat.value.current_booking.end_time || selectedSeat.value.current_booking.scheduled_end_time)), 1)
                        ])) : createCommentVNode("", true),
                        selectedSeat.value.current_booking.minutes_left !== null && selectedSeat.value.current_booking.minutes_left !== void 0 ? (openBlock(), createElementBlock("div", _hoisted_40, [
                          _cache[17] || (_cache[17] = createBaseVNode("span", { class: "text-[10px] text-slate-400 font-bold uppercase" }, "Time Details", -1)),
                          createBaseVNode("span", {
                            class: normalizeClass([
                              "text-xs font-semibold px-2.5 py-0.5 rounded-full",
                              selectedSeat.value.status === "serious_overstay" ? "bg-purple-100 text-purple-700" : selectedSeat.value.status === "overstay" ? "bg-orange-100 text-orange-700" : selectedSeat.value.status === "free_soon" ? "bg-amber-100 text-amber-700" : "bg-emerald-100 text-emerald-700"
                            ])
                          }, [
                            selectedSeat.value.current_booking.overstay_minutes > 0 ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                              createTextVNode(toDisplayString(formatDuration(selectedSeat.value.current_booking.overstay_minutes, "overstayed")), 1)
                            ], 64)) : selectedSeat.value.current_booking.minutes_left <= 0 ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                              createTextVNode(toDisplayString(formatDuration(Math.abs(selectedSeat.value.current_booking.minutes_left), "overstayed")), 1)
                            ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 2 }, [
                              createTextVNode(toDisplayString(formatDuration(selectedSeat.value.current_booking.minutes_left, "left")), 1)
                            ], 64))
                          ], 2)
                        ])) : createCommentVNode("", true)
                      ])
                    ], 2)) : selectedSeat.value.status === "available" ? (openBlock(), createElementBlock("div", _hoisted_41, [
                      createVNode(unref(CircleCheckBig), { class: "w-8 h-8 text-emerald-400 mx-auto" }),
                      _cache[18] || (_cache[18] = createBaseVNode("p", { class: "text-xs font-bold text-emerald-600 mt-2" }, "This seat is available", -1)),
                      _cache[19] || (_cache[19] = createBaseVNode("p", { class: "text-[10px] text-emerald-400 mt-0.5" }, "Ready for check-in", -1))
                    ])) : selectedSeat.value.status === "maintenance" || selectedSeat.value.is_maintenance ? (openBlock(), createElementBlock("div", _hoisted_42, [
                      createVNode(unref(Wrench), { class: "w-8 h-8 text-slate-400 mx-auto" }),
                      _cache[20] || (_cache[20] = createBaseVNode("p", { class: "text-xs font-bold text-slate-600 mt-2" }, "Under Maintenance", -1)),
                      _cache[21] || (_cache[21] = createBaseVNode("p", { class: "text-[10px] text-slate-400 mt-0.5" }, "This seat is temporarily unavailable", -1))
                    ])) : createCommentVNode("", true)
                  ])
                ])
              ])) : createCommentVNode("", true)
            ]),
            _: 1
          })
        ])),
        (openBlock(), createBlock(Teleport, { to: "body" }, [
          createVNode(Transition, { name: "slide-up" }, {
            default: withCtx(() => [
              selectedTable.value ? (openBlock(), createElementBlock("div", {
                key: 0,
                class: "fixed inset-0 z-[100] flex items-end sm:items-center justify-center",
                onClick: _cache[5] || (_cache[5] = withModifiers(($event) => selectedTable.value = null, ["self"]))
              }, [
                createBaseVNode("div", {
                  class: "absolute inset-0 bg-black/30 backdrop-blur-sm",
                  onClick: _cache[3] || (_cache[3] = ($event) => selectedTable.value = null)
                }),
                createBaseVNode("div", _hoisted_43, [
                  _cache[27] || (_cache[27] = createBaseVNode("div", { class: "flex justify-center pt-3 pb-1 sm:hidden" }, [
                    createBaseVNode("div", { class: "w-10 h-1 bg-slate-200 rounded-full" })
                  ], -1)),
                  createBaseVNode("div", _hoisted_44, [
                    createBaseVNode("div", _hoisted_45, [
                      createBaseVNode("div", _hoisted_46, [
                        createVNode(unref(Grid3x3), { class: "w-5 h-5" })
                      ]),
                      createBaseVNode("div", _hoisted_47, [
                        createBaseVNode("h3", _hoisted_48, toDisplayString(getTableDisplayTitle(selectedTable.value)), 1),
                        createBaseVNode("span", _hoisted_49, toDisplayString(getTableSeats(selectedTable.value).length || selectedTable.value.capacity || 0) + " Seats Capacity ", 1)
                      ])
                    ]),
                    createBaseVNode("button", {
                      onClick: _cache[4] || (_cache[4] = ($event) => selectedTable.value = null),
                      class: "p-2 hover:bg-slate-50 rounded-xl transition-colors cursor-pointer"
                    }, [
                      createVNode(unref(X), { class: "w-4 h-4 text-slate-400" })
                    ])
                  ]),
                  createBaseVNode("div", _hoisted_50, [
                    createBaseVNode("div", _hoisted_51, [
                      createBaseVNode("div", _hoisted_52, [
                        _cache[23] || (_cache[23] = createBaseVNode("div", { class: "text-[10px] font-bold text-slate-400 uppercase tracking-wider" }, "Floor", -1)),
                        createBaseVNode("div", _hoisted_53, toDisplayString(getTableFloorName(selectedTable.value)), 1)
                      ]),
                      createBaseVNode("div", _hoisted_54, [
                        _cache[24] || (_cache[24] = createBaseVNode("div", { class: "text-[10px] font-bold text-slate-400 uppercase tracking-wider" }, "Section", -1)),
                        createBaseVNode("div", _hoisted_55, toDisplayString(getTableSectionName(selectedTable.value)), 1)
                      ])
                    ]),
                    createBaseVNode("div", _hoisted_56, [
                      createBaseVNode("div", _hoisted_57, [
                        _cache[25] || (_cache[25] = createBaseVNode("span", { class: "text-[10px] font-bold text-slate-400 uppercase tracking-wider" }, "Table Seats Status", -1)),
                        createBaseVNode("span", _hoisted_58, toDisplayString(getTableSeats(selectedTable.value).filter((s) => s.status === "occupied").length) + " Occupied / " + toDisplayString(getTableSeats(selectedTable.value).length) + " Total ", 1)
                      ]),
                      getTableSeats(selectedTable.value).length > 0 ? (openBlock(), createElementBlock("div", _hoisted_59, [
                        (openBlock(true), createElementBlock(Fragment, null, renderList(getTableSeats(selectedTable.value), (seat) => {
                          return openBlock(), createElementBlock("div", {
                            key: seat.id,
                            onClick: ($event) => handleSeatClickFromTable(seat),
                            class: normalizeClass([
                              "flex items-center justify-between px-3 py-2 rounded-xl border text-xs font-bold transition-all cursor-pointer hover:shadow-xs",
                              seatStatusBadge(seat.status)
                            ])
                          }, [
                            createBaseVNode("div", _hoisted_61, [
                              createBaseVNode("span", {
                                class: normalizeClass(["w-2 h-2 rounded-full flex-shrink-0", seatStatusDot(seat.status)])
                              }, null, 2),
                              createBaseVNode("span", _hoisted_62, toDisplayString(seat.seat_number), 1)
                            ]),
                            createBaseVNode("span", _hoisted_63, toDisplayString(formatStatus(seat.status)), 1)
                          ], 10, _hoisted_60);
                        }), 128))
                      ])) : (openBlock(), createElementBlock("div", _hoisted_64, [..._cache[26] || (_cache[26] = [
                        createBaseVNode("p", { class: "text-xs text-slate-400 font-semibold" }, "No individual seat records attached to this table", -1)
                      ])]))
                    ])
                  ])
                ])
              ])) : createCommentVNode("", true)
            ]),
            _: 1
          })
        ]))
      ]);
    };
  }
});
const LiveSeatMapPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-9334d2c0"]]);
export {
  LiveSeatMapPage as default
};
