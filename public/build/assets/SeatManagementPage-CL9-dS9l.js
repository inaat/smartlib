import { d as defineComponent, r as ref, D as computed, H as watch, o as onMounted, c as createElementBlock, b as createBaseVNode, f as createVNode, m as createCommentVNode, n as normalizeClass, u as unref, t as toDisplayString, g as resolveComponent, F as Fragment, h as renderList, w as withCtx, T as Transition, v as withDirectives, B as vModelSelect, z as vModelCheckbox, x as vModelText, s as withModifiers, j as createTextVNode, _ as __vitePreload, i as openBlock } from "./main-DCJXrkf-.js";
import { u as useSwal } from "./useSwal-BUxo5JBv.js";
import { s as superadminAPI } from "./superadminApi-4s8-GH5P.js";
import { _ as _sfc_main$1 } from "./LibrarySelector.vue_vue_type_script_setup_true_lang-jZxnvv8I.js";
import { _ as _sfc_main$2 } from "./SeatMap.vue_vue_type_script_setup_true_lang-CA_LGztT.js";
import { R as RefreshCw } from "./refresh-cw-DCq6mbXe.js";
import { M as Move, W as WandSparkles } from "./wand-sparkles-rGUFPYZi.js";
import { P as Plus } from "./plus-D04LIZ3g.js";
import { B as Building2 } from "./building-2-DcNTcpv2.js";
import { C as CircleCheckBig } from "./circle-check-big-ExLl7Lif.js";
import { X } from "./x-BkNPvJ70.js";
import { T as TriangleAlert } from "./triangle-alert-8zFUiR58.js";
import { P as Printer } from "./printer-ClKtIZ53.js";
import { c as createLucideIcon } from "./createLucideIcon-CDsoUk2K.js";
/* empty css               */
import "./library-CO2Mqfde.js";
import "./user-C8gwTBBi.js";
import "./monitor-MB0i7ldh.js";
import "./panels-top-left-DmkC30__.js";
import "./zap-CE81Tw0M.js";
import "./chevron-down-Bg0y50h0.js";
const Info = createLucideIcon("info", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
]);
const _hoisted_1 = { class: "p-6 space-y-6" };
const _hoisted_2 = { class: "flex items-center justify-between" };
const _hoisted_3 = { class: "flex items-center space-x-3" };
const _hoisted_4 = ["disabled"];
const _hoisted_5 = { class: "text-sm font-medium" };
const _hoisted_6 = { class: "text-sm font-medium" };
const _hoisted_7 = {
  key: 0,
  class: "grid grid-cols-1 md:grid-cols-5 gap-4"
};
const _hoisted_8 = { class: "bg-white rounded-xl p-4 shadow-sm border border-gray-200" };
const _hoisted_9 = { class: "flex items-center space-x-3" };
const _hoisted_10 = { class: "p-2 bg-blue-100 rounded-lg" };
const _hoisted_11 = { class: "text-xl font-bold text-gray-900" };
const _hoisted_12 = { class: "bg-white rounded-xl p-4 shadow-sm border border-gray-200" };
const _hoisted_13 = { class: "flex items-center space-x-3" };
const _hoisted_14 = { class: "p-2 bg-green-100 rounded-lg" };
const _hoisted_15 = { class: "text-xl font-bold text-green-600" };
const _hoisted_16 = { class: "bg-white rounded-xl p-4 shadow-sm border border-gray-200" };
const _hoisted_17 = { class: "flex items-center space-x-3" };
const _hoisted_18 = { class: "p-2 bg-red-100 rounded-lg" };
const _hoisted_19 = { class: "text-xl font-bold text-red-600" };
const _hoisted_20 = { class: "bg-white rounded-xl p-4 shadow-sm border border-gray-200" };
const _hoisted_21 = { class: "flex items-center space-x-3" };
const _hoisted_22 = { class: "p-2 bg-orange-100 rounded-lg" };
const _hoisted_23 = { class: "text-xl font-bold text-orange-600" };
const _hoisted_24 = { class: "bg-white rounded-xl p-4 shadow-sm border border-gray-200" };
const _hoisted_25 = { class: "flex items-center space-x-3" };
const _hoisted_26 = { class: "p-2 bg-gray-100 rounded-lg" };
const _hoisted_27 = { class: "text-xl font-bold text-gray-600" };
const _hoisted_28 = {
  key: 1,
  class: "bg-white rounded-xl shadow-sm border border-gray-200 p-4 flex items-center justify-between"
};
const _hoisted_29 = { class: "flex items-center space-x-2 overflow-x-auto pb-1" };
const _hoisted_30 = ["onClick"];
const _hoisted_31 = {
  key: 0,
  class: "bg-white p-2 rounded-xl border border-purple-100 shadow-sm flex items-center justify-between mt-4"
};
const _hoisted_32 = { class: "flex items-center space-x-1" };
const _hoisted_33 = ["disabled"];
const _hoisted_34 = { class: "text-sm font-semibold whitespace-nowrap" };
const _hoisted_35 = {
  class: "p-2 hover:bg-gray-50 text-gray-400 rounded-lg transition-all relative group",
  title: "More tools coming soon..."
};
const _hoisted_36 = { class: "text-[10px] text-gray-400 font-medium px-4 italic flex items-center" };
const _hoisted_37 = {
  key: 2,
  class: "relative mt-4"
};
const _hoisted_38 = {
  key: 3,
  class: "bg-white rounded-xl shadow-sm border border-gray-200 p-12 text-center text-gray-500"
};
const _hoisted_39 = {
  key: 4,
  class: "fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 overflow-y-auto"
};
const _hoisted_40 = { class: "bg-white rounded-xl shadow-xl max-w-md w-full mx-4 my-8 p-6" };
const _hoisted_41 = { class: "flex items-center justify-between mb-4" };
const _hoisted_42 = { class: "text-xl font-bold text-gray-900" };
const _hoisted_43 = { class: "flex items-center space-x-2" };
const _hoisted_44 = { class: "space-y-4" };
const _hoisted_45 = { class: "grid grid-cols-2 gap-4" };
const _hoisted_46 = { class: "grid grid-cols-2 gap-4" };
const _hoisted_47 = ["value"];
const _hoisted_48 = ["value"];
const _hoisted_49 = { class: "space-y-3" };
const _hoisted_50 = { class: "flex items-center space-x-2" };
const _hoisted_51 = { class: "flex items-center space-x-2" };
const _hoisted_52 = { class: "flex items-center space-x-4" };
const _hoisted_53 = { class: "flex items-center space-x-3 pt-4" };
const _hoisted_54 = ["disabled"];
const _hoisted_55 = {
  key: 5,
  class: "fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 overflow-y-auto"
};
const _hoisted_56 = { class: "bg-white rounded-xl shadow-xl max-w-md w-full mx-4 my-8 p-6" };
const _hoisted_57 = { class: "flex items-center justify-between mb-4" };
const _hoisted_58 = { class: "grid grid-cols-2 gap-4" };
const _hoisted_59 = ["value"];
const _hoisted_60 = ["value"];
const _hoisted_61 = { class: "grid grid-cols-2 gap-4" };
const _hoisted_62 = { class: "space-y-3" };
const _hoisted_63 = { class: "flex items-center space-x-2" };
const _hoisted_64 = { class: "flex items-center space-x-2" };
const _hoisted_65 = { class: "flex items-center space-x-4" };
const _hoisted_66 = { class: "flex items-center space-x-3 pt-4" };
const _hoisted_67 = ["disabled"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "SeatManagementPage",
  setup(__props) {
    const { toast } = useSwal();
    const selectedLibraryId = ref(null);
    const searchQuery = ref("");
    const seats = ref([]);
    const floors = ref([]);
    const sections = ref([]);
    const showCreateModal = ref(false);
    const selectedSeat = ref(null);
    const loading = ref(false);
    const isLayoutMode = ref(false);
    const isArranging = ref(false);
    const activeSectionId = ref(null);
    const draggedSeat = ref(null);
    const dragOffset = ref({ x: 0, y: 0 });
    const eShapeCoordinates = [
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
    const form = ref({
      seat_number: "",
      floor_id: null,
      section_id: null,
      seat_type: "open",
      status: "available",
      has_computer: false,
      near_window: false,
      socket_count: 0
    });
    const seatStats = computed(() => {
      return {
        total: seats.value.length,
        available: seats.value.filter((s) => s.status === "available").length,
        occupied: seats.value.filter((s) => s.status === "occupied").length,
        reserved: seats.value.filter((s) => s.status === "reserved").length,
        maintenance: seats.value.filter((s) => s.status === "maintenance").length
      };
    });
    const fetchData = async () => {
      if (!selectedLibraryId.value) {
        seats.value = [];
        floors.value = [];
        sections.value = [];
        return;
      }
      loading.value = true;
      try {
        const params = { library_id: selectedLibraryId.value };
        if (searchQuery.value) params.search = searchQuery.value;
        const [seatsData, floorsData, sectionsData] = await Promise.all([
          superadminAPI.getSeats(params),
          superadminAPI.getFloors(selectedLibraryId.value),
          superadminAPI.getSeatSections(selectedLibraryId.value.toString())
        ]);
        seats.value = seatsData;
        floors.value = floorsData;
        sections.value = sectionsData;
        if (!activeSectionId.value) {
          activeSectionId.value = null;
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        loading.value = false;
      }
    };
    watch(selectedLibraryId, () => {
      activeSectionId.value = null;
      fetchData();
    });
    const autoArrangeLayout = async () => {
      if (!selectedLibraryId.value) return;
      const SwalInstance = (await __vitePreload(async () => {
        const { default: __vite_default__ } = await import("./useSwal-BUxo5JBv.js").then((n) => n.s);
        return { default: __vite_default__ };
      }, true ? [] : void 0)).default;
      const result = await SwalInstance.fire({
        title: `Auto-Arrange Layout?`,
        text: `This will automatically set X/Y positions for ${seats.value.length} seats to fit a standard desk layout. Existing manual positions will be overwritten.`,
        icon: "question",
        showCancelButton: true,
        confirmButtonText: "Yes, arrange them!",
        confirmButtonColor: "#7C3AED"
      });
      if (!result.isConfirmed) return;
      isArranging.value = true;
      try {
        const coords = eShapeCoordinates;
        const seatsToUpdate = seats.value.slice(0, coords.length);
        const promises = seatsToUpdate.map((seat, index) => {
          const coord = coords[index];
          seat.position_x = coord.x;
          seat.position_y = coord.y;
          return superadminAPI.updateSeat(seat.id, {
            position_x: coord.x,
            position_y: coord.y
          });
        });
        await Promise.all(promises);
        toast("Arrangement Complete", `${seatsToUpdate.length} seats snapped into layout.`, "success");
      } catch (error) {
        console.error("Error auto-arranging seats:", error);
        toast("Error", "Failed to auto-arrange some seats", "error");
      } finally {
        isArranging.value = false;
      }
    };
    computed(() => {
      const groups = {};
      filteredSectionSeats.value.forEach((seat) => {
        const floorName = seat.floor?.name || "Unknown Floor";
        const sectionName = seat.seat_section?.name || "No Section";
        if (!groups[floorName]) groups[floorName] = {};
        if (!groups[floorName][sectionName]) groups[floorName][sectionName] = [];
        groups[floorName][sectionName].push(seat);
      });
      return groups;
    });
    computed(() => {
      const section = sections.value.find((s) => s.id === activeSectionId.value);
      return section ? section.name : "All Seats";
    });
    const selectSeat = (seat) => {
      selectedSeat.value = { ...seat };
    };
    const openCreateModal = () => {
      form.value = {
        seat_number: "",
        floor_id: floors.value.length > 0 ? floors.value[0].id : null,
        section_id: activeSectionId.value,
        seat_type: "open",
        status: "available",
        has_computer: false,
        near_window: false,
        socket_count: 0
      };
      showCreateModal.value = true;
    };
    const createSeat = async () => {
      loading.value = true;
      try {
        await superadminAPI.createSeat(form.value);
        await fetchData();
        showCreateModal.value = false;
      } catch (error) {
        console.error("Error creating seat:", error);
      } finally {
        loading.value = false;
      }
    };
    const saveSeat = async () => {
      if (!selectedSeat.value) return;
      loading.value = true;
      try {
        await superadminAPI.updateSeat(selectedSeat.value.id, selectedSeat.value);
        await fetchData();
        selectedSeat.value = null;
      } catch (error) {
        console.error("Error saving seat:", error);
      } finally {
        loading.value = false;
      }
    };
    const confirmDelete = async (seat) => {
      if (confirm("Are you sure you want to delete this seat?")) {
        try {
          await superadminAPI.deleteSeat(seat.id);
          await fetchData();
          selectedSeat.value = null;
        } catch (error) {
          console.error("Error deleting seat:", error);
        }
      }
    };
    const onDragStart = (event, seat) => {
      if (!isLayoutMode.value) return;
      draggedSeat.value = seat;
      const rect = event.target.getBoundingClientRect();
      dragOffset.value = {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top
      };
      event.dataTransfer?.setData("text/plain", seat.id.toString());
    };
    const onDrop = async (event, sectionSeats) => {
      if (!isLayoutMode.value || !draggedSeat.value) return;
      const container = event.currentTarget.getBoundingClientRect();
      const x = Math.round(event.clientX - container.left - dragOffset.value.x);
      const y = Math.round(event.clientY - container.top - dragOffset.value.y);
      const finalX = Math.max(0, Math.min(x, container.width - 60));
      const finalY = Math.max(0, Math.min(y, container.height - 60));
      try {
        draggedSeat.value.position_x = finalX;
        draggedSeat.value.position_y = finalY;
        await superadminAPI.updateSeat(draggedSeat.value.id, {
          position_x: finalX,
          position_y: finalY
        });
        toast("Layout Updated", `Seat ${draggedSeat.value.seat_number} repositioned`, "success");
      } catch (error) {
        console.error("Error saving seat position:", error);
        toast("Error", "Could not save seat position", "error");
        fetchData();
      } finally {
        draggedSeat.value = null;
      }
    };
    const printQRCode = (seat) => {
      const printWindow = window.open("", "_blank");
      if (!printWindow) return;
      const html = `
    <html>
      <head>
        <title>Print QR Code - Seat ${seat.seat_number}</title>
        <style>
          body { display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100vh; margin: 0; font-family: sans-serif; }
          .container { text-align: center; border: 2px solid #eee; padding: 40px; border-radius: 20px; }
          img { width: 300px; height: 300px; margin-bottom: 20px; }
          h1 { margin: 0; color: #333; font-size: 24px; }
          p { margin: 5px 0; color: #666; font-size: 16px; }
          .library { font-weight: bold; color: #4f46e5; margin-top: 10px; }
        </style>
      </head>
      <body>
        <div class="container">
          <img src="${seat.qr_code_url}" onload="window.print(); window.close();" />
          <h1>Seat ${seat.seat_number}</h1>
          <p>${seat.seat_type.toUpperCase()} SEAT</p>
          <p class="library">${seat.floor?.name} - ${seat.seat_section?.name || ""}</p>
        </div>
      </body>
    </html>
  `;
      printWindow.document.write(html);
      printWindow.document.close();
    };
    const printActiveSectionQRs = () => {
      const section = activeSectionId.value ? sections.value.find((s) => s.id === activeSectionId.value) : { name: "All Sections" };
      if (!section && activeSectionId.value) return;
      const printWindow = window.open("", "_blank");
      if (!printWindow) {
        toast("Error", "Popup blocked! Please allow popups to print.", "error");
        return;
      }
      const sectionSeats = filteredSectionSeats.value;
      let html = `
    <html>
      <head>
        <title>Print QR Codes - ${section.name}</title>
        <style>
          body { font-family: sans-serif; margin: 0; padding: 20px; }
          .header { text-align: center; margin-bottom: 30px; border-bottom: 2px solid #eee; padding-bottom: 10px; }
          .qr-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; }
          .qr-item { border: 1px solid #ddd; padding: 15px; text-align: center; page-break-inside: avoid; border-radius: 8px; }
          .qr-image { width: 140px; height: 140px; object-fit: contain; }
          .seat-number { font-weight: bold; margin-top: 10px; font-size: 16px; color: #333; }
          .section-info { font-size: 12px; color: #666; margin-top: 4px; }
          @media print {
            .no-print { display: none; }
            body { padding: 0; }
          }
        </style>
      </head>
      <body>
        <div class="no-print" style="position: fixed; top: 20px; right: 20px; z-index: 100;">
          <button onclick="window.print()" style="padding: 10px 20px; background: #7c3aed; color: white; border: none; border-radius: 6px; cursor: pointer; font-weight: bold; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
            Print QR Codes
          </button>
        </div>
        <div class="header">
          <h1 style="margin: 0; color: #1a1a1a;">Seat QR Codes</h1>
          <p style="margin: 5px 0; color: #666;">Section: ${section.name}</p>
        </div>
        <div class="qr-grid">
  `;
      sectionSeats.forEach((seat) => {
        const seatSectionName = seat.seat_section?.name || section.name;
        html += `
      <div class="qr-item">
        <img src="${seat.qr_code_url}" class="qr-image" onerror="this.src='https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(seat.qr_code || seat.seat_number)}'" />
        <div class="seat-number">Seat ${seat.seat_number}</div>
        <div class="section-info">${seatSectionName}</div>
      </div>
    `;
      });
      html += `
        </div>
      </body>
    </html>
  `;
      printWindow.document.write(html);
      printWindow.document.close();
    };
    onMounted(() => {
      fetchData();
    });
    return (_ctx, _cache) => {
      const _component_Tool = resolveComponent("Tool");
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          _cache[24] || (_cache[24] = createBaseVNode("div", null, [
            createBaseVNode("h1", { class: "text-3xl font-bold text-gray-900" }, "Seat Management"),
            createBaseVNode("p", { class: "text-gray-600 mt-1" }, "Monitor and manage library seats in real-time")
          ], -1)),
          createBaseVNode("div", _hoisted_3, [
            createBaseVNode("button", {
              onClick: fetchData,
              disabled: loading.value,
              class: "px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center space-x-2 disabled:opacity-50"
            }, [
              createVNode(unref(RefreshCw), {
                class: normalizeClass(["w-4 h-4", loading.value ? "animate-spin" : ""])
              }, null, 8, ["class"]),
              createBaseVNode("span", _hoisted_5, toDisplayString(loading.value ? "Refreshing..." : "Refresh"), 1)
            ], 8, _hoisted_4),
            selectedLibraryId.value ? (openBlock(), createElementBlock("button", {
              key: 0,
              onClick: _cache[0] || (_cache[0] = ($event) => isLayoutMode.value = !isLayoutMode.value),
              class: normalizeClass([
                "px-4 py-2 rounded-lg transition-all flex items-center space-x-2 border shadow-sm",
                isLayoutMode.value ? "bg-purple-600 text-white border-purple-600" : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
              ])
            }, [
              createVNode(unref(Move), { class: "w-4 h-4" }),
              createBaseVNode("span", _hoisted_6, toDisplayString(isLayoutMode.value ? "View Mode" : "Layout Mode"), 1)
            ], 2)) : createCommentVNode("", true),
            selectedLibraryId.value ? (openBlock(), createElementBlock("button", {
              key: 1,
              onClick: openCreateModal,
              class: "px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all flex items-center space-x-2"
            }, [
              createVNode(unref(Plus), { class: "w-4 h-4" }),
              _cache[23] || (_cache[23] = createBaseVNode("span", { class: "text-sm font-medium" }, "Add Seat", -1))
            ])) : createCommentVNode("", true)
          ])
        ]),
        createVNode(_sfc_main$1, {
          modelValue: selectedLibraryId.value,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => selectedLibraryId.value = $event)
        }, null, 8, ["modelValue"]),
        selectedLibraryId.value ? (openBlock(), createElementBlock("div", _hoisted_7, [
          createBaseVNode("div", _hoisted_8, [
            createBaseVNode("div", _hoisted_9, [
              createBaseVNode("div", _hoisted_10, [
                createVNode(unref(Building2), { class: "w-5 h-5 text-blue-600" })
              ]),
              createBaseVNode("div", null, [
                _cache[25] || (_cache[25] = createBaseVNode("p", { class: "text-xs text-gray-600" }, "Total Seats", -1)),
                createBaseVNode("p", _hoisted_11, toDisplayString(seatStats.value.total), 1)
              ])
            ])
          ]),
          createBaseVNode("div", _hoisted_12, [
            createBaseVNode("div", _hoisted_13, [
              createBaseVNode("div", _hoisted_14, [
                createVNode(unref(CircleCheckBig), { class: "w-5 h-5 text-green-600" })
              ]),
              createBaseVNode("div", null, [
                _cache[26] || (_cache[26] = createBaseVNode("p", { class: "text-xs text-gray-600" }, "Available", -1)),
                createBaseVNode("p", _hoisted_15, toDisplayString(seatStats.value.available), 1)
              ])
            ])
          ]),
          createBaseVNode("div", _hoisted_16, [
            createBaseVNode("div", _hoisted_17, [
              createBaseVNode("div", _hoisted_18, [
                createVNode(unref(X), { class: "w-5 h-5 text-red-600" })
              ]),
              createBaseVNode("div", null, [
                _cache[27] || (_cache[27] = createBaseVNode("p", { class: "text-xs text-gray-600" }, "Occupied", -1)),
                createBaseVNode("p", _hoisted_19, toDisplayString(seatStats.value.occupied), 1)
              ])
            ])
          ]),
          createBaseVNode("div", _hoisted_20, [
            createBaseVNode("div", _hoisted_21, [
              createBaseVNode("div", _hoisted_22, [
                createVNode(unref(TriangleAlert), { class: "w-5 h-5 text-orange-600" })
              ]),
              createBaseVNode("div", null, [
                _cache[28] || (_cache[28] = createBaseVNode("p", { class: "text-xs text-gray-600" }, "Reserved", -1)),
                createBaseVNode("p", _hoisted_23, toDisplayString(seatStats.value.reserved), 1)
              ])
            ])
          ]),
          createBaseVNode("div", _hoisted_24, [
            createBaseVNode("div", _hoisted_25, [
              createBaseVNode("div", _hoisted_26, [
                createVNode(_component_Tool, { class: "w-5 h-5 text-gray-600" })
              ]),
              createBaseVNode("div", null, [
                _cache[29] || (_cache[29] = createBaseVNode("p", { class: "text-xs text-gray-600" }, "Maintenance", -1)),
                createBaseVNode("p", _hoisted_27, toDisplayString(seatStats.value.maintenance), 1)
              ])
            ])
          ])
        ])) : createCommentVNode("", true),
        selectedLibraryId.value && sections.value.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_28, [
          createBaseVNode("div", _hoisted_29, [
            createBaseVNode("button", {
              onClick: _cache[2] || (_cache[2] = ($event) => activeSectionId.value = null),
              class: normalizeClass([
                "px-4 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap",
                activeSectionId.value === null ? "bg-purple-100 text-purple-700" : "text-gray-600 hover:bg-gray-100"
              ])
            }, " All Seats ", 2),
            (openBlock(true), createElementBlock(Fragment, null, renderList(sections.value, (section) => {
              return openBlock(), createElementBlock("button", {
                key: section.id,
                onClick: ($event) => activeSectionId.value = section.id,
                class: normalizeClass([
                  "px-4 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap",
                  activeSectionId.value === section.id ? "bg-purple-100 text-purple-700" : "text-gray-600 hover:bg-gray-100"
                ])
              }, toDisplayString(section.name), 11, _hoisted_30);
            }), 128))
          ]),
          createBaseVNode("button", {
            onClick: printActiveSectionQRs,
            class: "ml-4 px-4 py-2 text-sm font-medium text-purple-600 hover:bg-purple-50 rounded-lg transition-colors flex items-center space-x-2 border border-purple-200"
          }, [
            createVNode(unref(Printer), { class: "w-4 h-4" }),
            _cache[30] || (_cache[30] = createBaseVNode("span", { class: "hidden sm:inline" }, "Print Section QR", -1))
          ])
        ])) : createCommentVNode("", true),
        createVNode(Transition, {
          "enter-active-class": "transition duration-300 ease-out",
          "enter-from-class": "transform -translate-y-4 opacity-0",
          "enter-to-class": "transform translate-y-0 opacity-100",
          "leave-active-class": "transition duration-200 ease-in",
          "leave-from-class": "transform translate-y-0 opacity-100",
          "leave-to-class": "transform -translate-y-4 opacity-0"
        }, {
          default: withCtx(() => [
            isLayoutMode.value && selectedLibraryId.value ? (openBlock(), createElementBlock("div", _hoisted_31, [
              createBaseVNode("div", _hoisted_32, [
                _cache[31] || (_cache[31] = createBaseVNode("div", { class: "px-3 border-r border-gray-100 mr-2 py-1" }, [
                  createBaseVNode("span", { class: "text-[10px] font-bold text-purple-600 uppercase tracking-widest whitespace-nowrap" }, "Layout Toolbar")
                ], -1)),
                createBaseVNode("button", {
                  onClick: autoArrangeLayout,
                  disabled: isArranging.value,
                  class: "px-4 py-2 hover:bg-purple-50 text-gray-700 hover:text-purple-600 rounded-lg transition-all flex items-center space-x-2 group disabled:opacity-50"
                }, [
                  createVNode(unref(WandSparkles), {
                    class: normalizeClass(["w-4 h-4 transition-transform group-hover:rotate-12", isArranging.value ? "animate-pulse" : ""])
                  }, null, 8, ["class"]),
                  createBaseVNode("span", _hoisted_34, toDisplayString(isArranging.value ? "Arranging..." : "Auto-Arrange"), 1)
                ], 8, _hoisted_33),
                _cache[32] || (_cache[32] = createBaseVNode("div", { class: "w-px h-6 bg-gray-100 mx-2" }, null, -1)),
                createBaseVNode("button", _hoisted_35, [
                  createVNode(unref(Plus), { class: "w-4 h-4" })
                ])
              ]),
              createBaseVNode("div", _hoisted_36, [
                createVNode(unref(Info), { class: "w-3 h-3 mr-1" }),
                _cache[33] || (_cache[33] = createTextVNode(" Drag seats to reposition or use auto-arrange for standard layouts ", -1))
              ])
            ])) : createCommentVNode("", true)
          ]),
          _: 1
        }),
        selectedLibraryId.value ? (openBlock(), createElementBlock("div", _hoisted_37, [
          createVNode(_sfc_main$2, {
            seats: seats.value,
            floors: floors.value,
            sections: sections.value,
            "selected-seat": selectedSeat.value,
            draggable: isLayoutMode.value,
            "seat-clickable": !isLayoutMode.value,
            "layout-mode": isLayoutMode.value ? "layout" : "grid",
            onSeatClick: selectSeat,
            onDragStart,
            onDrop
          }, null, 8, ["seats", "floors", "sections", "selected-seat", "draggable", "seat-clickable", "layout-mode"])
        ])) : (openBlock(), createElementBlock("div", _hoisted_38, " Please select a library to monitor its seats. ")),
        selectedSeat.value ? (openBlock(), createElementBlock("div", _hoisted_39, [
          createBaseVNode("div", _hoisted_40, [
            createBaseVNode("div", _hoisted_41, [
              createBaseVNode("h3", _hoisted_42, "Seat " + toDisplayString(selectedSeat.value.seat_number), 1),
              createBaseVNode("div", _hoisted_43, [
                selectedSeat.value.qr_code_url ? (openBlock(), createElementBlock("button", {
                  key: 0,
                  onClick: _cache[3] || (_cache[3] = ($event) => printQRCode(selectedSeat.value)),
                  class: "p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors",
                  title: "Print QR"
                }, [
                  createVNode(unref(Printer), { class: "w-5 h-5" })
                ])) : createCommentVNode("", true),
                createBaseVNode("button", {
                  onClick: _cache[4] || (_cache[4] = ($event) => selectedSeat.value = null),
                  class: "p-2 hover:bg-gray-100 rounded-lg transition-colors"
                }, [
                  createVNode(unref(X), { class: "w-5 h-5" })
                ])
              ])
            ]),
            createBaseVNode("div", _hoisted_44, [
              createBaseVNode("div", _hoisted_45, [
                createBaseVNode("div", null, [
                  _cache[35] || (_cache[35] = createBaseVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Status", -1)),
                  withDirectives(createBaseVNode("select", {
                    "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => selectedSeat.value.status = $event),
                    class: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                  }, [..._cache[34] || (_cache[34] = [
                    createBaseVNode("option", { value: "available" }, "Available", -1),
                    createBaseVNode("option", { value: "maintenance" }, "Maintenance", -1),
                    createBaseVNode("option", { value: "reserved" }, "Reserved", -1),
                    createBaseVNode("option", { value: "occupied" }, "Occupied", -1)
                  ])], 512), [
                    [vModelSelect, selectedSeat.value.status]
                  ])
                ]),
                createBaseVNode("div", null, [
                  _cache[37] || (_cache[37] = createBaseVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Type", -1)),
                  withDirectives(createBaseVNode("select", {
                    "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => selectedSeat.value.seat_type = $event),
                    class: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                  }, [..._cache[36] || (_cache[36] = [
                    createBaseVNode("option", { value: "open" }, "Open", -1),
                    createBaseVNode("option", { value: "cubicle" }, "Cubicle", -1),
                    createBaseVNode("option", { value: "private_room" }, "Private Room", -1)
                  ])], 512), [
                    [vModelSelect, selectedSeat.value.seat_type]
                  ])
                ])
              ]),
              createBaseVNode("div", _hoisted_46, [
                createBaseVNode("div", null, [
                  _cache[38] || (_cache[38] = createBaseVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Floor", -1)),
                  withDirectives(createBaseVNode("select", {
                    "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => selectedSeat.value.floor_id = $event),
                    class: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                  }, [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(floors.value, (floor) => {
                      return openBlock(), createElementBlock("option", {
                        key: floor.id,
                        value: floor.id
                      }, toDisplayString(floor.name), 9, _hoisted_47);
                    }), 128))
                  ], 512), [
                    [vModelSelect, selectedSeat.value.floor_id]
                  ])
                ]),
                createBaseVNode("div", null, [
                  _cache[40] || (_cache[40] = createBaseVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Section", -1)),
                  withDirectives(createBaseVNode("select", {
                    "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => selectedSeat.value.section_id = $event),
                    class: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                  }, [
                    _cache[39] || (_cache[39] = createBaseVNode("option", { value: null }, "No Section", -1)),
                    (openBlock(true), createElementBlock(Fragment, null, renderList(sections.value, (section) => {
                      return openBlock(), createElementBlock("option", {
                        key: section.id,
                        value: section.id
                      }, toDisplayString(section.name), 9, _hoisted_48);
                    }), 128))
                  ], 512), [
                    [vModelSelect, selectedSeat.value.section_id]
                  ])
                ])
              ]),
              createBaseVNode("div", _hoisted_49, [
                createBaseVNode("label", _hoisted_50, [
                  withDirectives(createBaseVNode("input", {
                    "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => selectedSeat.value.has_computer = $event),
                    type: "checkbox",
                    class: "w-4 h-4 text-indigo-600 rounded"
                  }, null, 512), [
                    [vModelCheckbox, selectedSeat.value.has_computer]
                  ]),
                  _cache[41] || (_cache[41] = createBaseVNode("span", { class: "text-sm font-medium text-gray-700" }, "Has Computer", -1))
                ]),
                createBaseVNode("label", _hoisted_51, [
                  withDirectives(createBaseVNode("input", {
                    "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => selectedSeat.value.near_window = $event),
                    type: "checkbox",
                    class: "w-4 h-4 text-indigo-600 rounded"
                  }, null, 512), [
                    [vModelCheckbox, selectedSeat.value.near_window]
                  ]),
                  _cache[42] || (_cache[42] = createBaseVNode("span", { class: "text-sm font-medium text-gray-700" }, "Near Window", -1))
                ]),
                createBaseVNode("div", _hoisted_52, [
                  _cache[43] || (_cache[43] = createBaseVNode("span", { class: "text-sm font-medium text-gray-700" }, "Socket Count:", -1)),
                  withDirectives(createBaseVNode("input", {
                    "onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => selectedSeat.value.socket_count = $event),
                    type: "number",
                    min: "0",
                    class: "w-20 px-2 py-1 border border-gray-300 rounded-lg"
                  }, null, 512), [
                    [
                      vModelText,
                      selectedSeat.value.socket_count,
                      void 0,
                      { number: true }
                    ]
                  ])
                ])
              ]),
              createBaseVNode("div", _hoisted_53, [
                createBaseVNode("button", {
                  onClick: saveSeat,
                  disabled: loading.value,
                  class: "flex-1 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors disabled:opacity-50"
                }, toDisplayString(loading.value ? "Saving..." : "Update Seat"), 9, _hoisted_54),
                createBaseVNode("button", {
                  onClick: _cache[12] || (_cache[12] = ($event) => confirmDelete(selectedSeat.value)),
                  class: "px-4 py-2 border border-red-300 text-red-600 rounded-lg hover:bg-red-50 transition-colors"
                }, " Delete ")
              ])
            ])
          ])
        ])) : createCommentVNode("", true),
        showCreateModal.value ? (openBlock(), createElementBlock("div", _hoisted_55, [
          createBaseVNode("div", _hoisted_56, [
            createBaseVNode("div", _hoisted_57, [
              _cache[44] || (_cache[44] = createBaseVNode("h3", { class: "text-xl font-bold text-gray-900" }, "Add New Seat", -1)),
              createBaseVNode("button", {
                onClick: _cache[13] || (_cache[13] = ($event) => showCreateModal.value = false),
                class: "p-2 hover:bg-gray-100 rounded-lg transition-colors"
              }, [
                createVNode(unref(X), { class: "w-5 h-5" })
              ])
            ]),
            createBaseVNode("form", {
              onSubmit: withModifiers(createSeat, ["prevent"]),
              class: "space-y-4"
            }, [
              createBaseVNode("div", null, [
                _cache[45] || (_cache[45] = createBaseVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Seat Number", -1)),
                withDirectives(createBaseVNode("input", {
                  "onUpdate:modelValue": _cache[14] || (_cache[14] = ($event) => form.value.seat_number = $event),
                  type: "text",
                  required: "",
                  class: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                }, null, 512), [
                  [vModelText, form.value.seat_number]
                ])
              ]),
              createBaseVNode("div", _hoisted_58, [
                createBaseVNode("div", null, [
                  _cache[46] || (_cache[46] = createBaseVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Floor", -1)),
                  withDirectives(createBaseVNode("select", {
                    "onUpdate:modelValue": _cache[15] || (_cache[15] = ($event) => form.value.floor_id = $event),
                    required: "",
                    class: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                  }, [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(floors.value, (floor) => {
                      return openBlock(), createElementBlock("option", {
                        key: floor.id,
                        value: floor.id
                      }, toDisplayString(floor.name), 9, _hoisted_59);
                    }), 128))
                  ], 512), [
                    [vModelSelect, form.value.floor_id]
                  ])
                ]),
                createBaseVNode("div", null, [
                  _cache[48] || (_cache[48] = createBaseVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Section", -1)),
                  withDirectives(createBaseVNode("select", {
                    "onUpdate:modelValue": _cache[16] || (_cache[16] = ($event) => form.value.section_id = $event),
                    class: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                  }, [
                    _cache[47] || (_cache[47] = createBaseVNode("option", { value: null }, "No Section", -1)),
                    (openBlock(true), createElementBlock(Fragment, null, renderList(sections.value, (section) => {
                      return openBlock(), createElementBlock("option", {
                        key: section.id,
                        value: section.id
                      }, toDisplayString(section.name), 9, _hoisted_60);
                    }), 128))
                  ], 512), [
                    [vModelSelect, form.value.section_id]
                  ])
                ])
              ]),
              createBaseVNode("div", _hoisted_61, [
                createBaseVNode("div", null, [
                  _cache[50] || (_cache[50] = createBaseVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Type", -1)),
                  withDirectives(createBaseVNode("select", {
                    "onUpdate:modelValue": _cache[17] || (_cache[17] = ($event) => form.value.seat_type = $event),
                    class: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                  }, [..._cache[49] || (_cache[49] = [
                    createBaseVNode("option", { value: "open" }, "Open", -1),
                    createBaseVNode("option", { value: "cubicle" }, "Cubicle", -1),
                    createBaseVNode("option", { value: "private_room" }, "Private Room", -1)
                  ])], 512), [
                    [vModelSelect, form.value.seat_type]
                  ])
                ]),
                createBaseVNode("div", null, [
                  _cache[52] || (_cache[52] = createBaseVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Status", -1)),
                  withDirectives(createBaseVNode("select", {
                    "onUpdate:modelValue": _cache[18] || (_cache[18] = ($event) => form.value.status = $event),
                    class: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                  }, [..._cache[51] || (_cache[51] = [
                    createBaseVNode("option", { value: "available" }, "Available", -1),
                    createBaseVNode("option", { value: "maintenance" }, "Maintenance", -1),
                    createBaseVNode("option", { value: "reserved" }, "Reserved", -1),
                    createBaseVNode("option", { value: "occupied" }, "Occupied", -1)
                  ])], 512), [
                    [vModelSelect, form.value.status]
                  ])
                ])
              ]),
              createBaseVNode("div", _hoisted_62, [
                createBaseVNode("label", _hoisted_63, [
                  withDirectives(createBaseVNode("input", {
                    "onUpdate:modelValue": _cache[19] || (_cache[19] = ($event) => form.value.has_computer = $event),
                    type: "checkbox",
                    class: "w-4 h-4 text-indigo-600 rounded"
                  }, null, 512), [
                    [vModelCheckbox, form.value.has_computer]
                  ]),
                  _cache[53] || (_cache[53] = createBaseVNode("span", { class: "text-sm font-medium text-gray-700" }, "Has Computer", -1))
                ]),
                createBaseVNode("label", _hoisted_64, [
                  withDirectives(createBaseVNode("input", {
                    "onUpdate:modelValue": _cache[20] || (_cache[20] = ($event) => form.value.near_window = $event),
                    type: "checkbox",
                    class: "w-4 h-4 text-indigo-600 rounded"
                  }, null, 512), [
                    [vModelCheckbox, form.value.near_window]
                  ]),
                  _cache[54] || (_cache[54] = createBaseVNode("span", { class: "text-sm font-medium text-gray-700" }, "Near Window", -1))
                ]),
                createBaseVNode("div", _hoisted_65, [
                  _cache[55] || (_cache[55] = createBaseVNode("span", { class: "text-sm font-medium text-gray-700" }, "Socket Count:", -1)),
                  withDirectives(createBaseVNode("input", {
                    "onUpdate:modelValue": _cache[21] || (_cache[21] = ($event) => form.value.socket_count = $event),
                    type: "number",
                    min: "0",
                    class: "w-20 px-2 py-1 border border-gray-300 rounded-lg"
                  }, null, 512), [
                    [
                      vModelText,
                      form.value.socket_count,
                      void 0,
                      { number: true }
                    ]
                  ])
                ])
              ]),
              createBaseVNode("div", _hoisted_66, [
                createBaseVNode("button", {
                  type: "submit",
                  disabled: loading.value,
                  class: "flex-1 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors disabled:opacity-50"
                }, toDisplayString(loading.value ? "Creating..." : "Create Seat"), 9, _hoisted_67),
                createBaseVNode("button", {
                  type: "button",
                  onClick: _cache[22] || (_cache[22] = ($event) => showCreateModal.value = false),
                  class: "px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                }, " Cancel ")
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
