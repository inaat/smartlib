import { d as defineComponent, r as ref, o as onMounted, c as computed, E as watch, a as createElementBlock, b as createBaseVNode, j as createCommentVNode, f as createVNode, u as unref, p as withDirectives, D as vModelSelect, n as normalizeClass, F as Fragment, k as renderList, t as toDisplayString, v as vModelText, B as vModelCheckbox, z as withModifiers, O as librarianAPI, l as openBlock } from "./main-D4odWxzi.js";
import { S as SeatLayoutRenderer } from "./SeatLayoutRenderer-CwwdXUOF.js";
import { u as useSwal } from "./useSwal-pQW_XkRe.js";
import { A as Armchair } from "./armchair-DKdV929b.js";
import { C as ChevronDown } from "./chevron-down-DGoXiOPy.js";
import { P as Plus } from "./plus-zxxEdYDr.js";
import { R as RefreshCw } from "./refresh-cw-BuoaK0_N.js";
import { T as Trash2 } from "./trash-2-D2rUsr0z.js";
/* empty css               */
import "./user-B1vMR7MU.js";
import "./createLucideIcon-BgnXjtcZ.js";
import "./clock-DbxW0WRH.js";
import "./monitor-B0QdLhBZ.js";
import "./panels-top-left-Da8DkFNO.js";
import "./zap-RZ_B5mGE.js";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./building-2-CXGh2OGX.js";
const _hoisted_1 = { class: "p-6 space-y-6 font-outfit" };
const _hoisted_2 = { class: "flex flex-col md:flex-row md:items-center justify-between bg-white p-5 rounded-3xl shadow-sm border border-slate-100 gap-4 text-left" };
const _hoisted_3 = { class: "flex items-center space-x-3" };
const _hoisted_4 = { class: "w-10 h-10 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600" };
const _hoisted_5 = { class: "flex items-center space-x-3" };
const _hoisted_6 = {
  key: 0,
  class: "relative"
};
const _hoisted_7 = ["disabled"];
const _hoisted_8 = { class: "grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3" };
const _hoisted_9 = { class: "text-[10px] font-bold uppercase text-slate-400 tracking-wider leading-none mb-1.5" };
const _hoisted_10 = { class: "grid grid-cols-1 lg:grid-cols-4 gap-6" };
const _hoisted_11 = { class: "lg:col-span-3" };
const _hoisted_12 = { class: "space-y-6 text-left" };
const _hoisted_13 = { class: "bg-white p-5 rounded-3xl shadow-sm border border-slate-100 sticky top-24" };
const _hoisted_14 = { class: "text-xs font-bold text-slate-400 uppercase tracking-widest mb-5" };
const _hoisted_15 = {
  key: 0,
  class: "space-y-5"
};
const _hoisted_16 = { class: "p-4 bg-slate-50/50 rounded-2xl border border-slate-100" };
const _hoisted_17 = { class: "text-sm font-bold text-slate-800 uppercase tracking-tight flex items-center gap-2" };
const _hoisted_18 = ["value"];
const _hoisted_19 = ["value"];
const _hoisted_20 = { key: 0 };
const _hoisted_21 = ["value"];
const _hoisted_22 = {
  key: 1,
  class: "p-4 bg-cyan-50/20 border border-cyan-150 rounded-2xl space-y-3"
};
const _hoisted_23 = { class: "flex items-center gap-2 text-xs font-bold text-slate-700 cursor-pointer" };
const _hoisted_24 = { class: "flex items-center gap-2 text-xs font-bold text-slate-700 cursor-pointer" };
const _hoisted_25 = { class: "flex items-center gap-2 text-xs font-bold text-slate-700 cursor-pointer" };
const _hoisted_26 = { class: "flex items-center gap-2 text-xs font-bold text-slate-700 cursor-pointer" };
const _hoisted_27 = {
  key: 2,
  class: "space-y-2.5 pt-2"
};
const _hoisted_28 = { class: "flex items-center gap-2 text-xs font-bold text-slate-700 cursor-pointer" };
const _hoisted_29 = { class: "flex items-center gap-2 text-xs font-bold text-slate-700 cursor-pointer" };
const _hoisted_30 = { class: "flex items-center justify-between bg-slate-50 p-2.5 rounded-xl border border-slate-100 mt-2" };
const _hoisted_31 = { class: "flex flex-col gap-2 pt-4 border-t border-slate-100" };
const _hoisted_32 = {
  key: 1,
  class: "space-y-5"
};
const _hoisted_33 = { class: "p-4 bg-amber-50/20 rounded-2xl border border-amber-100" };
const _hoisted_34 = { class: "text-sm font-bold text-slate-800 uppercase tracking-tight" };
const _hoisted_35 = ["value"];
const _hoisted_36 = { class: "flex flex-col gap-2 pt-4 border-t border-slate-100" };
const _hoisted_37 = {
  key: 2,
  class: "text-center py-12"
};
const _hoisted_38 = { class: "w-12 h-12 bg-slate-50 border border-slate-200 rounded-full flex items-center justify-center mx-auto mb-3.5 text-slate-400 shadow-inner" };
const _hoisted_39 = {
  key: 0,
  class: "fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4"
};
const _hoisted_40 = { class: "bg-white rounded-3xl shadow-xl max-w-sm w-full p-6 text-left border border-slate-100" };
const _hoisted_41 = ["value"];
const _hoisted_42 = ["value"];
const _hoisted_43 = { key: 0 };
const _hoisted_44 = ["value"];
const _hoisted_45 = { class: "flex items-center space-x-3 pt-4" };
const _hoisted_46 = {
  key: 1,
  class: "fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4"
};
const _hoisted_47 = { class: "bg-white rounded-3xl shadow-xl max-w-sm w-full p-6 text-left border border-slate-100" };
const _hoisted_48 = ["value"];
const _hoisted_49 = ["value"];
const _hoisted_50 = { class: "flex items-center space-x-3 pt-4" };
const _hoisted_51 = {
  key: 2,
  class: "fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4"
};
const _hoisted_52 = { class: "bg-white rounded-3xl shadow-xl max-w-sm w-full p-6 text-left border border-slate-100" };
const _hoisted_53 = ["value"];
const _hoisted_54 = ["value"];
const _hoisted_55 = { class: "flex items-center space-x-3 pt-4" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "SeatManagementPage",
  setup(__props) {
    const { toast, showSuccess, showError, showConfirm } = useSwal();
    const loading = ref(false);
    const isLayoutMode = ref(true);
    const gridSnap = ref(true);
    const globalTableCapacity = ref(4);
    onMounted(() => {
      try {
        const saved = localStorage.getItem("smartlib_global_table_capacity");
        if (saved) {
          const parsed = parseInt(saved, 10);
          if ([2, 4, 6, 8, 10, 12, 14, 16].includes(parsed)) {
            globalTableCapacity.value = parsed;
          }
        }
      } catch (e) {
      }
    });
    const onTableCapacityChange = async () => {
      try {
        localStorage.setItem("smartlib_global_table_capacity", globalTableCapacity.value.toString());
        window.dispatchEvent(new Event("smartlib_table_capacity_changed"));
        window.dispatchEvent(new Event("storage"));
        await librarianAPI.updateLibraryInfo({ table_capacity: globalTableCapacity.value });
        toast("Table capacity updated and synced to server", "success");
      } catch (e) {
        console.error("Failed to sync table capacity to backend:", e);
        toast("Capacity saved locally, but failed to sync to server", "warning");
      }
    };
    const seats = ref([]);
    const floors = ref([]);
    const sections = ref([]);
    const tables = ref([]);
    const selectedSeat = ref(null);
    const selectedTable = ref(null);
    const layoutRenderer = ref(null);
    const showSeatModal = ref(false);
    const showTableModal = ref(false);
    const showCabinModal = ref(false);
    const seatForm = ref({ seat_number: "", seat_type: "regular", floor_id: null, section_id: null, subsection_id: null });
    const tableForm = ref({ label: "", capacity: 4, floor_id: null, section_id: null });
    const cabinForm = ref({ cabin_number: "", floor_id: null, section_id: null });
    const selectedSectionForSeat = computed(() => {
      if (!seatForm.value.section_id) return null;
      return sections.value.find((s) => s.id === seatForm.value.section_id) || null;
    });
    const selectedSectionForSelectedSeat = computed(() => {
      if (!selectedSeat.value?.section_id) return null;
      return sections.value.find((s) => s.id === selectedSeat.value.section_id) || null;
    });
    const activeFloorId = computed(() => layoutRenderer.value?.activeFloorId || null);
    const activeSectionId = computed(() => layoutRenderer.value?.activeSectionId || null);
    const activeLayoutMode = ref(localStorage.getItem("smartlib_active_layout_mode") || "tables");
    watch(activeLayoutMode, (newVal) => {
      if (newVal) {
        try {
          localStorage.setItem("smartlib_active_layout_mode", newVal);
        } catch (e) {
        }
      }
    }, { immediate: true });
    const cabinFeatures = computed({
      get: () => {
        if (!selectedSeat.value) return {};
        return selectedSeat.value.cabin_features || {};
      },
      set: (val) => {
        if (selectedSeat.value) {
          selectedSeat.value.cabin_features = val;
        }
      }
    });
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
    const suggestNextSeatNumber = (floorId, sectionId, subsectionId = null) => {
      if (!floorId) return "";
      const section = sections.value.find((s) => s.id === sectionId);
      let prefix = section ? section.name : "Seat";
      if (subsectionId && section?.subsections) {
        const sub = section.subsections.find((s) => s.id === subsectionId);
        if (sub) {
          prefix = sub.code ? sub.code : sub.name;
        }
      }
      const matchingSeats = seats.value.filter(
        (s) => s.floor_id === floorId && s.section_id === sectionId && (subsectionId ? s.subsection_id === subsectionId : true)
      );
      let maxSuffix = 0;
      matchingSeats.forEach((s) => {
        if (s.table_id) return;
        const parts = s.seat_number.split("-");
        const lastPart = parts[parts.length - 1];
        const num = parseInt(lastPart, 10);
        if (!isNaN(num) && num > maxSuffix) {
          maxSuffix = num;
        }
      });
      return `${prefix}-${maxSuffix + 1}`;
    };
    const suggestNextTableLabel = (floorId, sectionId) => {
      if (!floorId) return "";
      const section = sections.value.find((s) => s.id === sectionId);
      const sectionPrefix = section ? `${section.name}-` : "";
      const sectionTables = tables.value.filter((t) => t.floor_id === floorId && t.section_id === sectionId);
      let maxSuffix = 0;
      sectionTables.forEach((t) => {
        const parts = t.label.split(" ");
        const lastPart = parts[parts.length - 1];
        const num = parseInt(lastPart, 10);
        if (!isNaN(num) && num > maxSuffix) {
          maxSuffix = num;
        } else {
          const partsHyphen = t.label.split("-");
          const lastPartHyphen = partsHyphen[partsHyphen.length - 1];
          const numHyphen = parseInt(lastPartHyphen, 10);
          if (!isNaN(numHyphen) && numHyphen > maxSuffix) {
            maxSuffix = numHyphen;
          }
        }
      });
      return `${sectionPrefix}Table ${maxSuffix + 1}`;
    };
    const suggestNextCabinNumber = (floorId, sectionId) => {
      if (!floorId) return "";
      const sectionCabins = seats.value.filter(
        (s) => s.floor_id === floorId && s.section_id === sectionId && s.seat_type === "private_room"
      );
      let maxSuffix = 0;
      sectionCabins.forEach((s) => {
        if (s.cabin_number) {
          const num = parseInt(s.cabin_number.replace(/\D/g, ""), 10);
          if (!isNaN(num) && num > maxSuffix) {
            maxSuffix = num;
          }
        } else {
          const num = parseInt(s.seat_number.replace(/\D/g, ""), 10);
          if (!isNaN(num) && num > maxSuffix) {
            maxSuffix = num;
          }
        }
      });
      return `${maxSuffix + 1}`;
    };
    watch(
      () => [seatForm.value.floor_id, seatForm.value.section_id, seatForm.value.subsection_id],
      ([newFloor, newSection, newSub]) => {
        if (showSeatModal.value && newFloor) {
          seatForm.value.seat_number = suggestNextSeatNumber(newFloor, newSection, newSub);
        }
      }
    );
    watch(
      () => [tableForm.value.floor_id, tableForm.value.section_id],
      ([newFloor, newSection]) => {
        if (showTableModal.value) {
          tableForm.value.label = suggestNextTableLabel(newFloor, newSection);
        }
      }
    );
    watch(
      () => [cabinForm.value.floor_id, cabinForm.value.section_id],
      ([newFloor, newSection]) => {
        if (showCabinModal.value) {
          cabinForm.value.cabin_number = suggestNextCabinNumber(newFloor, newSection);
        }
      }
    );
    const fetchData = async () => {
      loading.value = true;
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
          localStorage.setItem("smartlib_global_table_capacity", libraryInfo.table_capacity.toString());
        }
      } catch (error) {
        console.error("Failed to load seats manager data:", error);
        showError("Error", "Failed to load visual layout designer data");
      } finally {
        loading.value = false;
      }
    };
    const handleSeatClick = (seat) => {
      selectedTable.value = null;
      if (selectedSeat.value?.id === seat.id) {
        selectedSeat.value = null;
      } else {
        selectedSeat.value = { ...seat };
        if (seat.seat_type === "private_room" && !selectedSeat.value.cabin_features) {
          selectedSeat.value.cabin_features = {
            computer: seat.has_computer,
            power_outlet: seat.socket_count > 0,
            ac: true,
            wifi: true
          };
        }
      }
    };
    const handleTableClick = (table) => {
      selectedSeat.value = null;
      if (selectedTable.value?.id === table.id) {
        selectedTable.value = null;
      } else {
        selectedTable.value = { ...table };
      }
    };
    const handleSeatDrag = async (seatId, x, y) => {
      const seat = seats.value.find((s) => s.id === seatId);
      if (seat) {
        seat.position_x = x;
        seat.position_y = y;
      }
      try {
        await librarianAPI.updateSeat(seatId, { position_x: x, position_y: y });
        toast("Position Saved", `Seat moved to ${x}, ${y}`, "success");
      } catch (err) {
        console.error("Failed to update seat position:", err);
      }
    };
    const handleTableDrag = async (tableId, x, y) => {
      const table = tables.value.find((t) => t.id === tableId);
      if (table) {
        table.position_x = x;
        table.position_y = y;
      }
      try {
        await librarianAPI.updateStudyTable(tableId, { position_x: x, position_y: y });
        toast("Position Saved", `Table moved to ${x}, ${y}`, "success");
      } catch (err) {
        console.error("Failed to update table position:", err);
      }
    };
    const openAddSeatModal = () => {
      if (!activeFloorId.value) {
        showError("Error", "Please select or add a floor level first.");
        return;
      }
      seatForm.value = {
        seat_number: "",
        seat_type: "regular",
        floor_id: activeFloorId.value,
        section_id: activeSectionId.value,
        subsection_id: null
      };
      seatForm.value.seat_number = suggestNextSeatNumber(activeFloorId.value, activeSectionId.value);
      showSeatModal.value = true;
    };
    const createSeat = async () => {
      try {
        const data = {
          floor_id: seatForm.value.floor_id,
          section_id: seatForm.value.section_id,
          seat_number: seatForm.value.seat_number,
          seat_type: seatForm.value.seat_type,
          status: "available",
          position_x: 0,
          position_y: 0
        };
        await librarianAPI.createSeat(data);
        showSeatModal.value = false;
        showSuccess("Created", "Seat created successfully");
        fetchData();
      } catch (err) {
        showError("Failed", err.message || "Failed to create seat");
      }
    };
    const createTable = async () => {
      try {
        const data = {
          floor_id: tableForm.value.floor_id,
          section_id: tableForm.value.section_id,
          capacity: tableForm.value.capacity,
          label: tableForm.value.label,
          position_x: 0,
          position_y: 0
        };
        await librarianAPI.createStudyTable(data);
        showTableModal.value = false;
        showSuccess("Created", "Study table added successfully with linked seats");
        fetchData();
      } catch (err) {
        showError("Failed", err.message || "Failed to add study table");
      }
    };
    const createCabin = async () => {
      try {
        const data = {
          floor_id: cabinForm.value.floor_id,
          section_id: cabinForm.value.section_id,
          seat_number: `Cabin ${cabinForm.value.cabin_number}`,
          seat_type: "private_room",
          cabin_number: cabinForm.value.cabin_number,
          cabin_features: {
            power_outlet: true,
            computer: false,
            ac: true,
            wifi: true
          },
          status: "available",
          position_x: 0,
          position_y: 0
        };
        await librarianAPI.createSeat(data);
        showCabinModal.value = false;
        showSuccess("Created", "Personal study cabin created successfully");
        fetchData();
      } catch (err) {
        showError("Failed", err.message || "Failed to create cabin");
      }
    };
    const saveSeat = async () => {
      if (!selectedSeat.value) return;
      try {
        if (selectedSeat.value.seat_type === "private_room") {
          selectedSeat.value.has_computer = selectedSeat.value.cabin_features?.computer || false;
          selectedSeat.value.socket_count = selectedSeat.value.cabin_features?.power_outlet ? 1 : 0;
        }
        await librarianAPI.updateSeat(selectedSeat.value.id, {
          seat_number: selectedSeat.value.seat_number,
          floor_id: selectedSeat.value.floor_id,
          section_id: selectedSeat.value.section_id,
          seat_type: selectedSeat.value.seat_type,
          status: selectedSeat.value.status,
          has_computer: selectedSeat.value.has_computer,
          near_window: selectedSeat.value.near_window,
          socket_count: selectedSeat.value.socket_count,
          cabin_number: selectedSeat.value.cabin_number,
          cabin_features: selectedSeat.value.cabin_features
        });
        selectedSeat.value = null;
        showSuccess("Saved", "Seat properties updated successfully");
        fetchData();
      } catch (err) {
        showError("Failed", err.message || "Failed to update seat properties");
      }
    };
    const deleteSeat = async (id) => {
      const confirm = await showConfirm("Delete Seat?", "Are you sure you want to permanently delete this seat?");
      if (!confirm) return;
      try {
        await librarianAPI.deleteSeat(id);
        selectedSeat.value = null;
        showSuccess("Deleted", "Seat removed successfully");
        fetchData();
      } catch (err) {
        showError("Failed", err.message || "Failed to delete seat");
      }
    };
    const saveTable = async () => {
      if (!selectedTable.value) return;
      try {
        await librarianAPI.updateStudyTable(selectedTable.value.id, {
          label: selectedTable.value.label,
          capacity: selectedTable.value.capacity,
          section_id: selectedTable.value.section_id
        });
        selectedTable.value = null;
        showSuccess("Saved", "Table properties saved successfully");
        fetchData();
      } catch (err) {
        showError("Failed", err.message || "Failed to save table");
      }
    };
    const deleteTable = async (id) => {
      const confirm = await showConfirm("Delete Table?", "Warning: deleting this table will permanently delete all associated seats. Continue?");
      if (!confirm) return;
      try {
        await librarianAPI.deleteStudyTable(id);
        selectedTable.value = null;
        showSuccess("Deleted", "Table and linked seats deleted successfully");
        fetchData();
      } catch (err) {
        showError("Failed", err.message || "Failed to delete table");
      }
    };
    onMounted(fetchData);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("div", _hoisted_3, [
            createBaseVNode("div", _hoisted_4, [
              createVNode(unref(Armchair), { class: "w-5 h-5" })
            ]),
            _cache[32] || (_cache[32] = createBaseVNode("div", null, [
              createBaseVNode("h1", { class: "text-xl font-bold text-slate-800 tracking-tight" }, "Seat Layout Manager"),
              createBaseVNode("p", { class: "text-xs text-slate-400 font-medium" }, "Manage and arrange library seating layout")
            ], -1))
          ]),
          createBaseVNode("div", _hoisted_5, [
            activeLayoutMode.value === "tables" ? (openBlock(), createElementBlock("div", _hoisted_6, [
              withDirectives(createBaseVNode("select", {
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => globalTableCapacity.value = $event),
                onChange: onTableCapacityChange,
                class: "appearance-none bg-slate-50 border border-slate-200 rounded-2xl text-xs font-bold text-slate-700 py-2.5 pl-4 pr-9 cursor-pointer focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all shadow-xs"
              }, [..._cache[33] || (_cache[33] = [
                createBaseVNode("option", { value: 2 }, "2 Seats per Table", -1),
                createBaseVNode("option", { value: 4 }, "4 Seats per Table", -1),
                createBaseVNode("option", { value: 6 }, "6 Seats per Table", -1),
                createBaseVNode("option", { value: 8 }, "8 Seats per Table", -1),
                createBaseVNode("option", { value: 10 }, "10 Seats per Table", -1),
                createBaseVNode("option", { value: 12 }, "12 Seats per Table", -1),
                createBaseVNode("option", { value: 14 }, "14 Seats per Table", -1),
                createBaseVNode("option", { value: 16 }, "16 Seats per Table", -1)
              ])], 544), [
                [vModelSelect, globalTableCapacity.value]
              ]),
              createVNode(unref(ChevronDown), { class: "absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" })
            ])) : createCommentVNode("", true),
            createBaseVNode("button", {
              onClick: openAddSeatModal,
              class: "px-5 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-2xl transition-all duration-300 flex items-center space-x-2 text-xs font-bold uppercase tracking-wider cursor-pointer shadow-md shadow-blue-500/20 active:scale-98"
            }, [
              createVNode(unref(Plus), { class: "w-4.5 h-4.5" }),
              _cache[34] || (_cache[34] = createBaseVNode("span", null, "Add Seat", -1))
            ]),
            createBaseVNode("button", {
              onClick: fetchData,
              disabled: loading.value,
              class: "p-2.5 bg-slate-50 text-slate-600 hover:bg-slate-100 rounded-2xl transition-all border border-slate-200 cursor-pointer shadow-sm active:scale-98",
              title: "Refresh Data"
            }, [
              createVNode(unref(RefreshCw), {
                class: normalizeClass(["w-4 h-4", loading.value ? "animate-spin" : ""])
              }, null, 8, ["class"])
            ], 8, _hoisted_7)
          ])
        ]),
        createBaseVNode("div", _hoisted_8, [
          (openBlock(true), createElementBlock(Fragment, null, renderList([
            { label: "Total Seats", count: seatStats.value.total, color: "blue", bg: "bg-blue-50", text: "text-blue-600" },
            { label: "Available", count: seatStats.value.available, color: "green", bg: "bg-emerald-50", text: "text-emerald-600" },
            { label: "Occupied", count: seatStats.value.occupied, color: "red", bg: "bg-rose-50", text: "text-rose-600" },
            { label: "Reserved", count: seatStats.value.reserved, color: "teal", bg: "bg-indigo-50", text: "text-indigo-650" },
            { label: "Overstay", count: seatStats.value.overstay, color: "orange", bg: "bg-orange-50", text: "text-orange-600" },
            { label: "Serious Overstay", count: seatStats.value.serious_overstay, color: "purple", bg: "bg-purple-50", text: "text-purple-650" },
            { label: "Maintenance", count: seatStats.value.maintenance, color: "gray", bg: "bg-slate-100", text: "text-slate-600" }
          ], (stat, key) => {
            return openBlock(), createElementBlock("div", {
              key,
              class: "bg-white p-3 rounded-2xl border border-slate-100 shadow-sm flex items-center space-x-3.5 text-left"
            }, [
              createBaseVNode("div", {
                class: normalizeClass(["w-10 h-10 rounded-xl flex items-center justify-center font-bold text-lg", stat.bg, stat.text])
              }, toDisplayString(stat.count), 3),
              createBaseVNode("div", null, [
                createBaseVNode("p", _hoisted_9, toDisplayString(stat.label), 1),
                createBaseVNode("div", {
                  class: normalizeClass(["w-1.5 h-1.5 rounded-full", stat.text.replace("text-", "bg-")])
                }, null, 2)
              ])
            ]);
          }), 128))
        ]),
        createBaseVNode("div", _hoisted_10, [
          createBaseVNode("div", _hoisted_11, [
            createVNode(SeatLayoutRenderer, {
              ref_key: "layoutRenderer",
              ref: layoutRenderer,
              seats: seats.value,
              floors: floors.value,
              sections: sections.value,
              tables: tables.value,
              "selected-seat": selectedSeat.value,
              draggable: isLayoutMode.value,
              "seat-clickable": true,
              "layout-mode": activeLayoutMode.value,
              "tables-per-row": 3,
              "table-capacity": globalTableCapacity.value,
              "grid-snap": gridSnap.value,
              onSeatClick: handleSeatClick,
              onTableClick: handleTableClick,
              onLayoutChange: handleSeatDrag,
              onTableLayoutChange: handleTableDrag
            }, null, 8, ["seats", "floors", "sections", "tables", "selected-seat", "draggable", "layout-mode", "table-capacity", "grid-snap"])
          ]),
          createBaseVNode("div", _hoisted_12, [
            createBaseVNode("div", _hoisted_13, [
              createBaseVNode("h3", _hoisted_14, toDisplayString(selectedSeat.value ? "Seat properties" : selectedTable.value ? "Table Properties" : "Select Component"), 1),
              selectedSeat.value ? (openBlock(), createElementBlock("div", _hoisted_15, [
                createBaseVNode("div", _hoisted_16, [
                  _cache[35] || (_cache[35] = createBaseVNode("span", { class: "text-[10px] font-bold uppercase text-slate-400 block mb-1" }, "Editing Seat", -1)),
                  createBaseVNode("div", _hoisted_17, [
                    createVNode(unref(Armchair), { class: "w-4 h-4 text-emerald-600" }),
                    createBaseVNode("span", null, "Seat " + toDisplayString(selectedSeat.value.seat_number), 1)
                  ])
                ]),
                createBaseVNode("div", null, [
                  _cache[36] || (_cache[36] = createBaseVNode("label", { class: "block text-[10px] font-bold uppercase text-slate-400 mb-1.5 tracking-wider" }, "Seat Number", -1)),
                  withDirectives(createBaseVNode("input", {
                    "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => selectedSeat.value.seat_number = $event),
                    type: "text",
                    class: "w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-700 outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
                  }, null, 512), [
                    [vModelText, selectedSeat.value.seat_number]
                  ])
                ]),
                createBaseVNode("div", null, [
                  _cache[37] || (_cache[37] = createBaseVNode("label", { class: "block text-[10px] font-bold uppercase text-slate-400 mb-1.5 tracking-wider" }, "Floor Level", -1)),
                  withDirectives(createBaseVNode("select", {
                    "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => selectedSeat.value.floor_id = $event),
                    class: "w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-700 outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all cursor-pointer"
                  }, [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(floors.value, (floor) => {
                      return openBlock(), createElementBlock("option", {
                        key: floor.id,
                        value: floor.id
                      }, toDisplayString(floor.name), 9, _hoisted_18);
                    }), 128))
                  ], 512), [
                    [vModelSelect, selectedSeat.value.floor_id]
                  ])
                ]),
                createBaseVNode("div", null, [
                  _cache[39] || (_cache[39] = createBaseVNode("label", { class: "block text-[10px] font-bold uppercase text-slate-400 mb-1.5 tracking-wider" }, "Floor Section", -1)),
                  withDirectives(createBaseVNode("select", {
                    "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => selectedSeat.value.section_id = $event),
                    class: "w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-700 outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all cursor-pointer"
                  }, [
                    _cache[38] || (_cache[38] = createBaseVNode("option", { value: null }, "No Section", -1)),
                    (openBlock(true), createElementBlock(Fragment, null, renderList(sections.value, (sec) => {
                      return openBlock(), createElementBlock("option", {
                        key: sec.id,
                        value: sec.id
                      }, toDisplayString(sec.name), 9, _hoisted_19);
                    }), 128))
                  ], 512), [
                    [vModelSelect, selectedSeat.value.section_id]
                  ])
                ]),
                selectedSectionForSelectedSeat.value?.subsections?.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_20, [
                  _cache[41] || (_cache[41] = createBaseVNode("label", { class: "block text-[10px] font-bold uppercase text-slate-400 mb-1.5 tracking-wider" }, "Subsection", -1)),
                  withDirectives(createBaseVNode("select", {
                    "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => selectedSeat.value.subsection_id = $event),
                    class: "w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-700 outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all cursor-pointer"
                  }, [
                    _cache[40] || (_cache[40] = createBaseVNode("option", { value: null }, "No Subsection", -1)),
                    (openBlock(true), createElementBlock(Fragment, null, renderList(selectedSectionForSelectedSeat.value.subsections, (sub) => {
                      return openBlock(), createElementBlock("option", {
                        key: sub.id,
                        value: sub.id
                      }, toDisplayString(sub.name), 9, _hoisted_21);
                    }), 128))
                  ], 512), [
                    [vModelSelect, selectedSeat.value.subsection_id]
                  ])
                ])) : createCommentVNode("", true),
                selectedSeat.value.cabin_number || selectedSeat.value.seat_type === "private_room" ? (openBlock(), createElementBlock("div", _hoisted_22, [
                  _cache[46] || (_cache[46] = createBaseVNode("span", { class: "text-[10px] font-bold uppercase text-cyan-600 tracking-wider block" }, "Cabin Features", -1)),
                  createBaseVNode("label", _hoisted_23, [
                    withDirectives(createBaseVNode("input", {
                      type: "checkbox",
                      "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => cabinFeatures.value.computer = $event),
                      class: "w-4 h-4 rounded text-cyan-600 focus:ring-0"
                    }, null, 512), [
                      [vModelCheckbox, cabinFeatures.value.computer]
                    ]),
                    _cache[42] || (_cache[42] = createBaseVNode("span", null, "Computer Available", -1))
                  ]),
                  createBaseVNode("label", _hoisted_24, [
                    withDirectives(createBaseVNode("input", {
                      type: "checkbox",
                      "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => cabinFeatures.value.power_outlet = $event),
                      class: "w-4 h-4 rounded text-cyan-600 focus:ring-0"
                    }, null, 512), [
                      [vModelCheckbox, cabinFeatures.value.power_outlet]
                    ]),
                    _cache[43] || (_cache[43] = createBaseVNode("span", null, "Power Outlets", -1))
                  ]),
                  createBaseVNode("label", _hoisted_25, [
                    withDirectives(createBaseVNode("input", {
                      type: "checkbox",
                      "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => cabinFeatures.value.ac = $event),
                      class: "w-4 h-4 rounded text-cyan-600 focus:ring-0"
                    }, null, 512), [
                      [vModelCheckbox, cabinFeatures.value.ac]
                    ]),
                    _cache[44] || (_cache[44] = createBaseVNode("span", null, "Air Conditioned (AC)", -1))
                  ]),
                  createBaseVNode("label", _hoisted_26, [
                    withDirectives(createBaseVNode("input", {
                      type: "checkbox",
                      "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => cabinFeatures.value.wifi = $event),
                      class: "w-4 h-4 rounded text-cyan-600 focus:ring-0"
                    }, null, 512), [
                      [vModelCheckbox, cabinFeatures.value.wifi]
                    ]),
                    _cache[45] || (_cache[45] = createBaseVNode("span", null, "High Speed WiFi", -1))
                  ])
                ])) : (openBlock(), createElementBlock("div", _hoisted_27, [
                  createBaseVNode("label", _hoisted_28, [
                    withDirectives(createBaseVNode("input", {
                      type: "checkbox",
                      "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => selectedSeat.value.has_computer = $event),
                      class: "w-4 h-4 rounded text-emerald-600 focus:ring-0"
                    }, null, 512), [
                      [vModelCheckbox, selectedSeat.value.has_computer]
                    ]),
                    _cache[47] || (_cache[47] = createBaseVNode("span", null, "Computer Installed", -1))
                  ]),
                  createBaseVNode("label", _hoisted_29, [
                    withDirectives(createBaseVNode("input", {
                      type: "checkbox",
                      "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => selectedSeat.value.near_window = $event),
                      class: "w-4 h-4 rounded text-emerald-600 focus:ring-0"
                    }, null, 512), [
                      [vModelCheckbox, selectedSeat.value.near_window]
                    ]),
                    _cache[48] || (_cache[48] = createBaseVNode("span", null, "Near Window", -1))
                  ]),
                  createBaseVNode("div", _hoisted_30, [
                    _cache[49] || (_cache[49] = createBaseVNode("span", { class: "text-xs font-bold text-slate-650" }, "Power Sockets:", -1)),
                    withDirectives(createBaseVNode("input", {
                      type: "number",
                      "onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => selectedSeat.value.socket_count = $event),
                      min: "0",
                      class: "w-16 px-2 py-1 bg-white border border-slate-200 rounded-lg text-center font-bold text-xs text-slate-700"
                    }, null, 512), [
                      [
                        vModelText,
                        selectedSeat.value.socket_count,
                        void 0,
                        { number: true }
                      ]
                    ])
                  ])
                ])),
                createBaseVNode("div", null, [
                  _cache[51] || (_cache[51] = createBaseVNode("label", { class: "block text-[10px] font-bold uppercase text-slate-400 mb-1.5 tracking-wider" }, "Status Override", -1)),
                  withDirectives(createBaseVNode("select", {
                    "onUpdate:modelValue": _cache[12] || (_cache[12] = ($event) => selectedSeat.value.status = $event),
                    class: "w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-700 outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all cursor-pointer"
                  }, [..._cache[50] || (_cache[50] = [
                    createBaseVNode("option", { value: "available" }, "🟢 Available", -1),
                    createBaseVNode("option", { value: "maintenance" }, "⚫ Maintenance", -1),
                    createBaseVNode("option", { value: "occupied" }, "🔴 Occupied", -1),
                    createBaseVNode("option", { value: "reserved" }, "🔵 Reserved", -1)
                  ])], 512), [
                    [vModelSelect, selectedSeat.value.status]
                  ])
                ]),
                createBaseVNode("div", _hoisted_31, [
                  createBaseVNode("button", {
                    onClick: saveSeat,
                    class: "w-full py-3 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl text-xs font-bold uppercase tracking-wider shadow-sm transition-all active:scale-98 cursor-pointer"
                  }, " Save Changes "),
                  createBaseVNode("button", {
                    onClick: _cache[13] || (_cache[13] = ($event) => deleteSeat(selectedSeat.value.id)),
                    class: "w-full py-3 bg-rose-50 hover:bg-rose-100 text-rose-600 rounded-xl text-xs font-bold uppercase tracking-wider transition-all active:scale-98 cursor-pointer flex items-center justify-center space-x-1.5"
                  }, [
                    createVNode(unref(Trash2), { class: "w-4 h-4" }),
                    _cache[52] || (_cache[52] = createBaseVNode("span", null, "Delete Seat", -1))
                  ])
                ])
              ])) : selectedTable.value ? (openBlock(), createElementBlock("div", _hoisted_32, [
                createBaseVNode("div", _hoisted_33, [
                  _cache[53] || (_cache[53] = createBaseVNode("span", { class: "text-[10px] font-bold uppercase text-amber-600 block mb-1" }, "Editing Study Table", -1)),
                  createBaseVNode("div", _hoisted_34, ' Table "' + toDisplayString(selectedTable.value.label) + '" ', 1)
                ]),
                createBaseVNode("div", null, [
                  _cache[54] || (_cache[54] = createBaseVNode("label", { class: "block text-[10px] font-bold uppercase text-slate-400 mb-1.5 tracking-wider" }, "Table Label", -1)),
                  withDirectives(createBaseVNode("input", {
                    "onUpdate:modelValue": _cache[14] || (_cache[14] = ($event) => selectedTable.value.label = $event),
                    type: "text",
                    class: "w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-700 outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
                  }, null, 512), [
                    [vModelText, selectedTable.value.label]
                  ])
                ]),
                createBaseVNode("div", null, [
                  _cache[56] || (_cache[56] = createBaseVNode("label", { class: "block text-[10px] font-bold uppercase text-slate-400 mb-1.5 tracking-wider" }, "Capacity (Pax)", -1)),
                  withDirectives(createBaseVNode("select", {
                    "onUpdate:modelValue": _cache[15] || (_cache[15] = ($event) => selectedTable.value.capacity = $event),
                    class: "w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-700 outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all cursor-pointer"
                  }, [..._cache[55] || (_cache[55] = [
                    createBaseVNode("option", { value: 2 }, "2-Person Table", -1),
                    createBaseVNode("option", { value: 4 }, "4-Person Table", -1),
                    createBaseVNode("option", { value: 6 }, "6-Person Table", -1),
                    createBaseVNode("option", { value: 8 }, "8-Person Table", -1)
                  ])], 512), [
                    [
                      vModelSelect,
                      selectedTable.value.capacity,
                      void 0,
                      { number: true }
                    ]
                  ])
                ]),
                createBaseVNode("div", null, [
                  _cache[58] || (_cache[58] = createBaseVNode("label", { class: "block text-[10px] font-bold uppercase text-slate-400 mb-1.5 tracking-wider" }, "Floor Section", -1)),
                  withDirectives(createBaseVNode("select", {
                    "onUpdate:modelValue": _cache[16] || (_cache[16] = ($event) => selectedTable.value.section_id = $event),
                    class: "w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-700 outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all cursor-pointer"
                  }, [
                    _cache[57] || (_cache[57] = createBaseVNode("option", { value: null }, "No Section", -1)),
                    (openBlock(true), createElementBlock(Fragment, null, renderList(sections.value, (sec) => {
                      return openBlock(), createElementBlock("option", {
                        key: sec.id,
                        value: sec.id
                      }, toDisplayString(sec.name), 9, _hoisted_35);
                    }), 128))
                  ], 512), [
                    [vModelSelect, selectedTable.value.section_id]
                  ])
                ]),
                createBaseVNode("div", _hoisted_36, [
                  createBaseVNode("button", {
                    onClick: saveTable,
                    class: "w-full py-3 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl text-xs font-bold uppercase tracking-wider shadow-sm transition-all active:scale-98 cursor-pointer"
                  }, " Save Table "),
                  createBaseVNode("button", {
                    onClick: _cache[17] || (_cache[17] = ($event) => deleteTable(selectedTable.value.id)),
                    class: "w-full py-3 bg-rose-50 hover:bg-rose-100 text-rose-600 rounded-xl text-xs font-bold uppercase tracking-wider transition-all active:scale-98 cursor-pointer flex items-center justify-center space-x-1.5"
                  }, [
                    createVNode(unref(Trash2), { class: "w-4 h-4" }),
                    _cache[59] || (_cache[59] = createBaseVNode("span", null, "Delete Table & Seats", -1))
                  ])
                ])
              ])) : (openBlock(), createElementBlock("div", _hoisted_37, [
                createBaseVNode("div", _hoisted_38, [
                  createVNode(unref(Armchair), { class: "w-6 h-6" })
                ]),
                _cache[60] || (_cache[60] = createBaseVNode("p", { class: "text-xs text-slate-400 max-w-[180px] mx-auto leading-normal" }, " Click any seat, table, or cabin on the plan to configure properties ", -1))
              ]))
            ])
          ])
        ]),
        showSeatModal.value ? (openBlock(), createElementBlock("div", _hoisted_39, [
          createBaseVNode("div", _hoisted_40, [
            _cache[68] || (_cache[68] = createBaseVNode("h3", { class: "text-sm font-bold uppercase text-slate-800 tracking-wider mb-4" }, "Add Individual Seat", -1)),
            createBaseVNode("form", {
              onSubmit: withModifiers(createSeat, ["prevent"]),
              class: "space-y-4"
            }, [
              createBaseVNode("div", null, [
                _cache[61] || (_cache[61] = createBaseVNode("label", { class: "block text-[10px] font-bold uppercase text-slate-450 mb-1" }, "Seat Number", -1)),
                withDirectives(createBaseVNode("input", {
                  "onUpdate:modelValue": _cache[18] || (_cache[18] = ($event) => seatForm.value.seat_number = $event),
                  type: "text",
                  required: "",
                  placeholder: "e.g. 101",
                  class: "w-full px-4 py-2 border border-slate-200 rounded-xl text-xs font-bold text-slate-700 outline-none"
                }, null, 512), [
                  [vModelText, seatForm.value.seat_number]
                ])
              ]),
              createBaseVNode("div", null, [
                _cache[62] || (_cache[62] = createBaseVNode("label", { class: "block text-[10px] font-bold uppercase text-slate-455 mb-1" }, "Target Floor", -1)),
                withDirectives(createBaseVNode("select", {
                  "onUpdate:modelValue": _cache[19] || (_cache[19] = ($event) => seatForm.value.floor_id = $event),
                  required: "",
                  class: "w-full px-4 py-2 border border-slate-200 rounded-xl text-xs font-bold text-slate-700 outline-none cursor-pointer"
                }, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(floors.value, (floor) => {
                    return openBlock(), createElementBlock("option", {
                      key: floor.id,
                      value: floor.id
                    }, toDisplayString(floor.name), 9, _hoisted_41);
                  }), 128))
                ], 512), [
                  [vModelSelect, seatForm.value.floor_id]
                ])
              ]),
              createBaseVNode("div", null, [
                _cache[64] || (_cache[64] = createBaseVNode("label", { class: "block text-[10px] font-bold uppercase text-slate-455 mb-1" }, "Target Section", -1)),
                withDirectives(createBaseVNode("select", {
                  "onUpdate:modelValue": _cache[20] || (_cache[20] = ($event) => seatForm.value.section_id = $event),
                  class: "w-full px-4 py-2 border border-slate-200 rounded-xl text-xs font-bold text-slate-700 outline-none cursor-pointer"
                }, [
                  _cache[63] || (_cache[63] = createBaseVNode("option", { value: null }, "No Section / Shared Zone", -1)),
                  (openBlock(true), createElementBlock(Fragment, null, renderList(sections.value.filter((s) => s.floor_id === seatForm.value.floor_id), (sec) => {
                    return openBlock(), createElementBlock("option", {
                      key: sec.id,
                      value: sec.id
                    }, toDisplayString(sec.name), 9, _hoisted_42);
                  }), 128))
                ], 512), [
                  [vModelSelect, seatForm.value.section_id]
                ])
              ]),
              selectedSectionForSeat.value?.subsections?.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_43, [
                _cache[66] || (_cache[66] = createBaseVNode("label", { class: "block text-[10px] font-bold uppercase text-slate-455 mb-1" }, "Target Subsection", -1)),
                withDirectives(createBaseVNode("select", {
                  "onUpdate:modelValue": _cache[21] || (_cache[21] = ($event) => seatForm.value.subsection_id = $event),
                  class: "w-full px-4 py-2 border border-slate-200 rounded-xl text-xs font-bold text-slate-700 outline-none cursor-pointer"
                }, [
                  _cache[65] || (_cache[65] = createBaseVNode("option", { value: null }, "No Subsection", -1)),
                  (openBlock(true), createElementBlock(Fragment, null, renderList(selectedSectionForSeat.value.subsections, (sub) => {
                    return openBlock(), createElementBlock("option", {
                      key: sub.id,
                      value: sub.id
                    }, toDisplayString(sub.name), 9, _hoisted_44);
                  }), 128))
                ], 512), [
                  [vModelSelect, seatForm.value.subsection_id]
                ])
              ])) : createCommentVNode("", true),
              createBaseVNode("div", _hoisted_45, [
                _cache[67] || (_cache[67] = createBaseVNode("button", {
                  type: "submit",
                  class: "flex-1 py-3 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl text-xs font-bold uppercase tracking-wider cursor-pointer"
                }, "Create", -1)),
                createBaseVNode("button", {
                  type: "button",
                  onClick: _cache[22] || (_cache[22] = ($event) => showSeatModal.value = false),
                  class: "px-5 py-3 border border-slate-200 hover:bg-slate-50 text-slate-500 rounded-xl text-xs font-bold uppercase cursor-pointer"
                }, "Cancel")
              ])
            ], 32)
          ])
        ])) : createCommentVNode("", true),
        showTableModal.value ? (openBlock(), createElementBlock("div", _hoisted_46, [
          createBaseVNode("div", _hoisted_47, [
            _cache[76] || (_cache[76] = createBaseVNode("h3", { class: "text-sm font-bold uppercase text-slate-800 tracking-wider mb-4" }, "Add Study Table", -1)),
            createBaseVNode("form", {
              onSubmit: withModifiers(createTable, ["prevent"]),
              class: "space-y-4"
            }, [
              createBaseVNode("div", null, [
                _cache[69] || (_cache[69] = createBaseVNode("label", { class: "block text-[10px] font-bold uppercase text-slate-450 mb-1" }, "Table Prefix / Label", -1)),
                withDirectives(createBaseVNode("input", {
                  "onUpdate:modelValue": _cache[23] || (_cache[23] = ($event) => tableForm.value.label = $event),
                  type: "text",
                  required: "",
                  placeholder: "e.g. T-1",
                  class: "w-full px-4 py-2 border border-slate-200 rounded-xl text-xs font-bold text-slate-700 outline-none"
                }, null, 512), [
                  [vModelText, tableForm.value.label]
                ])
              ]),
              createBaseVNode("div", null, [
                _cache[71] || (_cache[71] = createBaseVNode("label", { class: "block text-[10px] font-bold uppercase text-slate-450 mb-1" }, "Capacity", -1)),
                withDirectives(createBaseVNode("select", {
                  "onUpdate:modelValue": _cache[24] || (_cache[24] = ($event) => tableForm.value.capacity = $event),
                  class: "w-full px-4 py-2 border border-slate-200 rounded-xl text-xs font-bold text-slate-700 outline-none cursor-pointer"
                }, [..._cache[70] || (_cache[70] = [
                  createBaseVNode("option", { value: 2 }, "2-Person Table", -1),
                  createBaseVNode("option", { value: 4 }, "4-Person Table", -1),
                  createBaseVNode("option", { value: 6 }, "6-Person Table", -1),
                  createBaseVNode("option", { value: 8 }, "8-Person Table", -1)
                ])], 512), [
                  [
                    vModelSelect,
                    tableForm.value.capacity,
                    void 0,
                    { number: true }
                  ]
                ])
              ]),
              createBaseVNode("div", null, [
                _cache[72] || (_cache[72] = createBaseVNode("label", { class: "block text-[10px] font-bold uppercase text-slate-455 mb-1" }, "Target Floor", -1)),
                withDirectives(createBaseVNode("select", {
                  "onUpdate:modelValue": _cache[25] || (_cache[25] = ($event) => tableForm.value.floor_id = $event),
                  required: "",
                  class: "w-full px-4 py-2 border border-slate-200 rounded-xl text-xs font-bold text-slate-700 outline-none cursor-pointer"
                }, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(floors.value, (floor) => {
                    return openBlock(), createElementBlock("option", {
                      key: floor.id,
                      value: floor.id
                    }, toDisplayString(floor.name), 9, _hoisted_48);
                  }), 128))
                ], 512), [
                  [vModelSelect, tableForm.value.floor_id]
                ])
              ]),
              createBaseVNode("div", null, [
                _cache[74] || (_cache[74] = createBaseVNode("label", { class: "block text-[10px] font-bold uppercase text-slate-455 mb-1" }, "Target Section", -1)),
                withDirectives(createBaseVNode("select", {
                  "onUpdate:modelValue": _cache[26] || (_cache[26] = ($event) => tableForm.value.section_id = $event),
                  class: "w-full px-4 py-2 border border-slate-200 rounded-xl text-xs font-bold text-slate-700 outline-none cursor-pointer"
                }, [
                  _cache[73] || (_cache[73] = createBaseVNode("option", { value: null }, "No Section / Shared Zone", -1)),
                  (openBlock(true), createElementBlock(Fragment, null, renderList(sections.value.filter((s) => s.floor_id === tableForm.value.floor_id), (sec) => {
                    return openBlock(), createElementBlock("option", {
                      key: sec.id,
                      value: sec.id
                    }, toDisplayString(sec.name), 9, _hoisted_49);
                  }), 128))
                ], 512), [
                  [vModelSelect, tableForm.value.section_id]
                ])
              ]),
              createBaseVNode("div", _hoisted_50, [
                _cache[75] || (_cache[75] = createBaseVNode("button", {
                  type: "submit",
                  class: "flex-1 py-3 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl text-xs font-bold uppercase tracking-wider cursor-pointer"
                }, "Add Table", -1)),
                createBaseVNode("button", {
                  type: "button",
                  onClick: _cache[27] || (_cache[27] = ($event) => showTableModal.value = false),
                  class: "px-5 py-3 border border-slate-200 hover:bg-slate-50 text-slate-500 rounded-xl text-xs font-bold uppercase cursor-pointer"
                }, "Cancel")
              ])
            ], 32)
          ])
        ])) : createCommentVNode("", true),
        showCabinModal.value ? (openBlock(), createElementBlock("div", _hoisted_51, [
          createBaseVNode("div", _hoisted_52, [
            _cache[82] || (_cache[82] = createBaseVNode("h3", { class: "text-sm font-bold uppercase text-slate-800 tracking-wider mb-4" }, "Add Study Cabin", -1)),
            createBaseVNode("form", {
              onSubmit: withModifiers(createCabin, ["prevent"]),
              class: "space-y-4"
            }, [
              createBaseVNode("div", null, [
                _cache[77] || (_cache[77] = createBaseVNode("label", { class: "block text-[10px] font-bold uppercase text-slate-450 mb-1" }, "Cabin Identifier", -1)),
                withDirectives(createBaseVNode("input", {
                  "onUpdate:modelValue": _cache[28] || (_cache[28] = ($event) => cabinForm.value.cabin_number = $event),
                  type: "text",
                  required: "",
                  placeholder: "e.g. C1",
                  class: "w-full px-4 py-2 border border-slate-200 rounded-xl text-xs font-bold text-slate-700 outline-none"
                }, null, 512), [
                  [vModelText, cabinForm.value.cabin_number]
                ])
              ]),
              createBaseVNode("div", null, [
                _cache[78] || (_cache[78] = createBaseVNode("label", { class: "block text-[10px] font-bold uppercase text-slate-455 mb-1" }, "Target Floor", -1)),
                withDirectives(createBaseVNode("select", {
                  "onUpdate:modelValue": _cache[29] || (_cache[29] = ($event) => cabinForm.value.floor_id = $event),
                  required: "",
                  class: "w-full px-4 py-2 border border-slate-200 rounded-xl text-xs font-bold text-slate-700 outline-none cursor-pointer"
                }, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(floors.value, (floor) => {
                    return openBlock(), createElementBlock("option", {
                      key: floor.id,
                      value: floor.id
                    }, toDisplayString(floor.name), 9, _hoisted_53);
                  }), 128))
                ], 512), [
                  [vModelSelect, cabinForm.value.floor_id]
                ])
              ]),
              createBaseVNode("div", null, [
                _cache[80] || (_cache[80] = createBaseVNode("label", { class: "block text-[10px] font-bold uppercase text-slate-455 mb-1" }, "Target Section", -1)),
                withDirectives(createBaseVNode("select", {
                  "onUpdate:modelValue": _cache[30] || (_cache[30] = ($event) => cabinForm.value.section_id = $event),
                  class: "w-full px-4 py-2 border border-slate-200 rounded-xl text-xs font-bold text-slate-700 outline-none cursor-pointer"
                }, [
                  _cache[79] || (_cache[79] = createBaseVNode("option", { value: null }, "No Section / Shared Zone", -1)),
                  (openBlock(true), createElementBlock(Fragment, null, renderList(sections.value.filter((s) => s.floor_id === cabinForm.value.floor_id), (sec) => {
                    return openBlock(), createElementBlock("option", {
                      key: sec.id,
                      value: sec.id
                    }, toDisplayString(sec.name), 9, _hoisted_54);
                  }), 128))
                ], 512), [
                  [vModelSelect, cabinForm.value.section_id]
                ])
              ]),
              createBaseVNode("div", _hoisted_55, [
                _cache[81] || (_cache[81] = createBaseVNode("button", {
                  type: "submit",
                  class: "flex-1 py-3 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl text-xs font-bold uppercase tracking-wider cursor-pointer"
                }, "Create Cabin", -1)),
                createBaseVNode("button", {
                  type: "button",
                  onClick: _cache[31] || (_cache[31] = ($event) => showCabinModal.value = false),
                  class: "px-5 py-3 border border-slate-200 hover:bg-slate-50 text-slate-500 rounded-xl text-xs font-bold uppercase cursor-pointer"
                }, "Cancel")
              ])
            ], 32)
          ])
        ])) : createCommentVNode("", true)
      ]);
    };
  }
});
export {
  _sfc_main as default
};
