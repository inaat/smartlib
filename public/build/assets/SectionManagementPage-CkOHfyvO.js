import { d as defineComponent, x as useAuth, c as computed, r as ref, o as onMounted, a as createElementBlock, b as createBaseVNode, j as createCommentVNode, p as withDirectives, D as vModelSelect, F as Fragment, k as renderList, f as createVNode, u as unref, n as normalizeClass, z as withModifiers, t as toDisplayString, v as vModelText, B as vModelCheckbox, O as librarianAPI, i as createTextVNode, l as openBlock } from "./main-CP29_5Dg.js";
import { u as useSwal } from "./useSwal-pQW_XkRe.js";
import { C as ChevronDown } from "./chevron-down-Dov5TrDl.js";
import { R as RefreshCw } from "./refresh-cw-DjzDyWQP.js";
import { P as Printer } from "./printer-M9N6zifG.js";
import { P as Plus } from "./plus-mxaUQNm6.js";
import { B as Building2 } from "./building-2-BCZNb8vB.js";
import { X } from "./x-BFxoMqPZ.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
/* empty css               */
import "./createLucideIcon-DTPudzWg.js";
const _hoisted_1 = { class: "p-6 space-y-6 font-outfit text-slate-700" };
const _hoisted_2 = { class: "bg-white rounded-2xl shadow-sm border border-slate-100 p-4" };
const _hoisted_3 = { class: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4" };
const _hoisted_4 = { class: "flex items-center space-x-3 w-full sm:max-w-xs text-left" };
const _hoisted_5 = { class: "w-full" };
const _hoisted_6 = { class: "relative" };
const _hoisted_7 = ["value"];
const _hoisted_8 = { class: "absolute inset-y-0 right-3 flex items-center pointer-events-none text-slate-400" };
const _hoisted_9 = { class: "flex items-center space-x-3 sm:ml-auto" };
const _hoisted_10 = { class: "bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden text-left" };
const _hoisted_11 = { class: "overflow-x-auto" };
const _hoisted_12 = { class: "min-w-full divide-y divide-slate-100 text-xs" };
const _hoisted_13 = { class: "divide-y divide-slate-50" };
const _hoisted_14 = { class: "px-6 py-4" };
const _hoisted_15 = { class: "font-bold text-slate-800 text-sm" };
const _hoisted_16 = { class: "text-[11px] text-slate-400 font-medium mt-0.5" };
const _hoisted_17 = { class: "px-6 py-4" };
const _hoisted_18 = { class: "font-bold text-slate-700" };
const _hoisted_19 = { class: "text-[10px] text-slate-400 font-semibold mt-0.5" };
const _hoisted_20 = { class: "px-6 py-4" };
const _hoisted_21 = { class: "font-bold text-slate-700" };
const _hoisted_22 = { class: "text-[10px] text-green-600 font-bold mt-0.5" };
const _hoisted_23 = { class: "px-6 py-4" };
const _hoisted_24 = { class: "px-6 py-4" };
const _hoisted_25 = { class: "px-6 py-4" };
const _hoisted_26 = { class: "px-6 py-4 text-right" };
const _hoisted_27 = { class: "flex items-center justify-end space-x-2" };
const _hoisted_28 = ["onClick"];
const _hoisted_29 = ["onClick"];
const _hoisted_30 = ["onClick"];
const _hoisted_31 = { key: 0 };
const _hoisted_32 = {
  colspan: "6",
  class: "px-6 py-16 text-center"
};
const _hoisted_33 = { class: "bg-white rounded-xl shadow-xl max-w-md w-full mx-4 overflow-hidden border border-gray-200 animate-in fade-in zoom-in duration-200" };
const _hoisted_34 = { class: "p-6 border-b border-slate-150 flex items-center justify-between text-left" };
const _hoisted_35 = { class: "text-base font-bold text-slate-800" };
const _hoisted_36 = ["value"];
const _hoisted_37 = {
  key: 0,
  class: "mt-1 text-[10px] text-slate-450 font-bold text-slate-400"
};
const _hoisted_38 = { class: "flex items-center space-x-2 pt-1" };
const _hoisted_39 = { class: "flex items-center space-x-3 pt-4 border-t border-slate-100" };
const _hoisted_40 = ["disabled"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "SectionManagementPage",
  setup(__props) {
    const { showConfirm, showSuccess, showError } = useSwal();
    const { user } = useAuth();
    computed(() => user.value?.library_id || 1);
    const sections = ref([]);
    const floors = ref([]);
    const loading = ref(false);
    const showModal = ref(false);
    const isEditing = ref(false);
    const selectedFloorId = ref(null);
    const form = ref({
      id: null,
      floor_id: null,
      name: "",
      gender: "mixed",
      academic_level: "all",
      total_seats: 0,
      description: "",
      is_active: true
    });
    const fetchFloors = async () => {
      try {
        const data = await librarianAPI.getFloors();
        floors.value = data;
      } catch (error) {
        console.error("Error fetching floors:", error);
      }
    };
    const fetchSections = async () => {
      loading.value = true;
      try {
        const data = await librarianAPI.getSections(selectedFloorId.value || void 0);
        sections.value = data;
      } catch (error) {
        console.error("Error fetching sections:", error);
      } finally {
        loading.value = false;
      }
    };
    const openCreateModal = () => {
      isEditing.value = false;
      form.value = {
        id: null,
        floor_id: floors.value[0]?.id || null,
        name: "",
        gender: "mixed",
        academic_level: "all",
        total_seats: 0,
        description: "",
        is_active: true
      };
      showModal.value = true;
    };
    const editSection = (section) => {
      isEditing.value = true;
      form.value = {
        id: section.id,
        floor_id: section.floor_id,
        name: section.name,
        gender: section.gender || "mixed",
        academic_level: section.academic_level || "all",
        total_seats: section.total_seats,
        description: section.description || "",
        is_active: section.is_active
      };
      showModal.value = true;
    };
    const saveSection = async () => {
      loading.value = true;
      try {
        if (isEditing.value && form.value.id) {
          await librarianAPI.updateSection(form.value.id, form.value);
          showSuccess("Updated!", "Section updated successfully.");
        } else {
          await librarianAPI.createSection(form.value);
          showSuccess("Created!", "New section created successfully.");
        }
        await fetchSections();
        showModal.value = false;
      } catch (error) {
        console.error("Error saving section:", error);
        const message = error.response?.data?.message || "Failed to save section.";
        showError("Save Failed", message);
      } finally {
        loading.value = false;
      }
    };
    const confirmDelete = async (section) => {
      if (!await showConfirm("Delete Section", `Are you sure you want to delete "${section.name}"? This will delete all seats in this section.`, "Yes, Delete")) return;
      try {
        await librarianAPI.deleteSection(section.id);
        showSuccess("Deleted!", "Section has been successfully deleted.");
        await fetchSections();
      } catch (error) {
        console.error("Error deleting section:", error);
        showError("Delete Failed", "Failed to delete section.");
      }
    };
    const printSectionQRs = (section) => {
      const printWindow = window.open("", "_blank");
      if (!printWindow) return;
      const seats = section.seats || [];
      const libraryName = user.value?.library?.name || "SmartLib";
      let html = `
    <html>
      <head>
        <title>Print QR Codes - ${section.name}</title>
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;800;900&display=swap" rel="stylesheet">
        <style>
          body { font-family: 'Outfit', sans-serif; margin: 0; padding: 40px 20px; background-color: #f8fafc; }
          .no-print { text-align: right; max-width: 1200px; margin: 0 auto 20px auto; }
          .no-print button { padding: 10px 20px; background: #059669; color: white; border: none; border-radius: 8px; cursor: pointer; font-weight: bold; font-size: 13px; box-shadow: 0 4px 6px rgba(0,0,0,0.05); transition: background 0.2s; }
          .no-print button:hover { background: #047857; }
          .header { text-align: center; margin-bottom: 40px; }
          .header h1 { font-size: 28px; font-weight: 900; color: #0f172a; margin: 0; letter-spacing: -0.025em; }
          .header p { font-size: 14px; color: #64748b; margin: 6px 0 0 0; }
          .qr-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; max-width: 1200px; margin: 0 auto; }
          .qr-card { background: white; border: 1px solid #e2e8f0; border-radius: 16px; padding: 24px; text-align: center; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.02); page-break-inside: avoid; display: flex; flex-direction: column; align-items: center; }
          .brand-header { width: 100%; border-bottom: 1.5px dashed #e2e8f0; padding-bottom: 12px; margin-bottom: 16px; }
          .brand-name { font-size: 10px; font-weight: 800; text-transform: uppercase; color: #0f172a; letter-spacing: 0.15em; margin: 0; }
          .library-name { font-size: 12px; font-weight: 600; color: #059669; margin: 4px 0 0 0; }
          .qr-wrapper { background: #f8fafc; border: 1px solid #f1f5f9; border-radius: 12px; padding: 16px; display: inline-block; }
          .qr-image { width: 150px; height: 150px; object-fit: contain; display: block; }
          .seat-badge { font-size: 20px; font-weight: 900; color: #0f172a; margin: 16px 0 0 0; letter-spacing: -0.025em; }
          .meta-info { font-size: 11px; font-weight: 600; color: #64748b; margin: 4px 0 0 0; text-transform: uppercase; letter-spacing: 0.05em; }
          .scan-footer { font-size: 9px; font-weight: 700; text-transform: uppercase; color: #94a3b8; letter-spacing: 0.08em; margin-top: 14px; border-top: 1px solid #f1f5f9; padding-top: 8px; width: 100%; }
          @media print {
            .no-print { display: none; }
            body { background: white; padding: 0; }
            .qr-grid { grid-template-columns: repeat(3, 1fr); gap: 20px; }
            .qr-card { box-shadow: none; border: 1px solid #cbd5e1; }
          }
        </style>
      </head>
      <body>
        <div class="no-print">
          <button onclick="window.print()">Print QR Codes</button>
        </div>
        <div class="header">
          <h1>Seat QR Codes</h1>
          <p>Section: ${section.name} | Floor: ${section.floor?.name || "N/A"}</p>
        </div>
        <div class="qr-grid">
  `;
      seats.forEach((seat) => {
        const simpleSeatNum = String(seat.seat_number).replace(/\D/g, "") || seat.seat_number;
        html += `
      <div class="qr-card">
        <div class="brand-header">
          <div class="brand-name">SMARTLIB SYSTEM</div>
          <div class="library-name">${libraryName}</div>
        </div>
        <div class="qr-wrapper">
          <img src="${seat.qr_code_url || "/storage/qrcodes/seats/seat-" + seat.id + ".svg"}" class="qr-image" onerror="this.src='https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(seat.qr_code || seat.seat_number)}'" />
        </div>
        <div class="seat-badge">SEAT ${simpleSeatNum}</div>
        <div class="meta-info">${section.name} &bull; ${section.floor?.name || ""}</div>
        <div class="scan-footer">Scan to Check-In / Check-Out</div>
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
    const printAllQRs = () => {
      const printWindow = window.open("", "_blank");
      if (!printWindow) return;
      const libraryName = user.value?.library?.name || "SmartLib";
      let html = `
    <html>
      <head>
        <title>Print All QR Codes</title>
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;800;900&display=swap" rel="stylesheet">
        <style>
          body { font-family: 'Outfit', sans-serif; margin: 0; padding: 40px 20px; background-color: #f8fafc; }
          .no-print { text-align: right; max-width: 1200px; margin: 0 auto 20px auto; }
          .no-print button { padding: 10px 20px; background: #059669; color: white; border: none; border-radius: 8px; cursor: pointer; font-weight: bold; font-size: 13px; box-shadow: 0 4px 6px rgba(0,0,0,0.05); transition: background 0.2s; }
          .no-print button:hover { background: #047857; }
          .header { text-align: center; margin-bottom: 40px; }
          .header h1 { font-size: 28px; font-weight: 900; color: #0f172a; margin: 0; letter-spacing: -0.025em; }
          .header p { font-size: 14px; color: #64748b; margin: 6px 0 0 0; }
          .section-block { margin-bottom: 50px; page-break-after: always; }
          .section-title { font-size: 20px; font-weight: 800; color: #0f172a; margin-bottom: 20px; padding-left: 12px; border-left: 4px solid #059669; }
          .qr-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; max-width: 1200px; margin: 0 auto; }
          .qr-card { background: white; border: 1px solid #e2e8f0; border-radius: 16px; padding: 24px; text-align: center; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.02); page-break-inside: avoid; display: flex; flex-direction: column; align-items: center; }
          .brand-header { width: 100%; border-bottom: 1.5px dashed #e2e8f0; padding-bottom: 12px; margin-bottom: 16px; }
          .brand-name { font-size: 10px; font-weight: 800; text-transform: uppercase; color: #0f172a; letter-spacing: 0.15em; margin: 0; }
          .library-name { font-size: 12px; font-weight: 600; color: #059669; margin: 4px 0 0 0; }
          .qr-wrapper { background: #f8fafc; border: 1px solid #f1f5f9; border-radius: 12px; padding: 16px; display: inline-block; }
          .qr-image { width: 150px; height: 150px; object-fit: contain; display: block; }
          .seat-badge { font-size: 20px; font-weight: 900; color: #0f172a; margin: 16px 0 0 0; letter-spacing: -0.025em; }
          .meta-info { font-size: 11px; font-weight: 600; color: #64748b; margin: 4px 0 0 0; text-transform: uppercase; letter-spacing: 0.05em; }
          .scan-footer { font-size: 9px; font-weight: 700; text-transform: uppercase; color: #94a3b8; letter-spacing: 0.08em; margin-top: 14px; border-top: 1px solid #f1f5f9; padding-top: 8px; width: 100%; }
          @media print {
            .no-print { display: none; }
            body { background: white; padding: 0; }
            .qr-grid { grid-template-columns: repeat(3, 1fr); gap: 20px; }
            .qr-card { box-shadow: none; border: 1px solid #cbd5e1; }
          }
        </style>
      </head>
      <body>
        <div class="no-print">
          <button onclick="window.print()">Print All QR Codes</button>
        </div>
        <div class="header">
          <h1>Library Seat QR Codes</h1>
          <p>Bulk Export - All Sections</p>
        </div>
  `;
      sections.value.forEach((section) => {
        if (!section.seats || section.seats.length === 0) return;
        html += `
      <div class="section-block">
        <div class="section-title">${section.name} (${section.floor?.name || "N/A"})</div>
        <div class="qr-grid">
    `;
        section.seats.forEach((seat) => {
          const simpleSeatNum = String(seat.seat_number).replace(/\D/g, "") || seat.seat_number;
          html += `
        <div class="qr-card">
          <div class="brand-header">
            <div class="brand-name">SMARTLIB SYSTEM</div>
            <div class="library-name">${libraryName}</div>
          </div>
          <div class="qr-wrapper">
            <img src="${seat.qr_code_url || "/storage/qrcodes/seats/seat-" + seat.id + ".svg"}" class="qr-image" onerror="this.src='https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(seat.qr_code || seat.seat_number)}'" />
          </div>
          <div class="seat-badge">SEAT ${simpleSeatNum}</div>
          <div class="meta-info">${section.name} &bull; ${section.floor?.name || ""}</div>
          <div class="scan-footer">Scan to Check-In / Check-Out</div>
        </div>
      `;
        });
        html += `
        </div>
      </div>
    `;
      });
      html += `
      </body>
    </html>
  `;
      printWindow.document.write(html);
      printWindow.document.close();
    };
    onMounted(() => {
      fetchFloors();
      fetchSections();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("div", _hoisted_3, [
            createBaseVNode("div", _hoisted_4, [
              createBaseVNode("div", _hoisted_5, [
                _cache[12] || (_cache[12] = createBaseVNode("label", { class: "block text-[10px] font-bold text-slate-400 mb-1 uppercase tracking-wider" }, "Filter by Floor", -1)),
                createBaseVNode("div", _hoisted_6, [
                  withDirectives(createBaseVNode("select", {
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => selectedFloorId.value = $event),
                    onChange: fetchSections,
                    class: "w-full px-4 py-2 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-400 transition-all text-xs text-slate-600 font-semibold bg-white appearance-none cursor-pointer shadow-sm"
                  }, [
                    _cache[11] || (_cache[11] = createBaseVNode("option", { value: null }, "All Floors", -1)),
                    (openBlock(true), createElementBlock(Fragment, null, renderList(floors.value, (floor) => {
                      return openBlock(), createElementBlock("option", {
                        key: floor.id,
                        value: floor.id
                      }, toDisplayString(floor.name) + " (Level " + toDisplayString(floor.level) + ") ", 9, _hoisted_7);
                    }), 128))
                  ], 544), [
                    [vModelSelect, selectedFloorId.value]
                  ]),
                  createBaseVNode("div", _hoisted_8, [
                    createVNode(unref(ChevronDown), { class: "w-3.5 h-3.5" })
                  ])
                ])
              ])
            ]),
            createBaseVNode("div", _hoisted_9, [
              createBaseVNode("button", {
                onClick: fetchSections,
                class: "p-2.5 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors cursor-pointer shadow-sm",
                title: "Refresh List"
              }, [
                createVNode(unref(RefreshCw), {
                  class: normalizeClass(["w-4 h-4 text-slate-500", loading.value ? "animate-spin" : ""])
                }, null, 8, ["class"])
              ]),
              createBaseVNode("button", {
                onClick: printAllQRs,
                class: "px-4 py-2.5 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors flex items-center space-x-2 text-xs font-semibold text-slate-600 cursor-pointer shadow-sm"
              }, [
                createVNode(unref(Printer), { class: "w-4 h-4 text-slate-500" }),
                _cache[13] || (_cache[13] = createBaseVNode("span", null, "Print All Bulk", -1))
              ]),
              createBaseVNode("button", {
                onClick: openCreateModal,
                class: "px-4 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl transition-colors flex items-center space-x-2 text-xs font-bold shadow-sm cursor-pointer"
              }, [
                createVNode(unref(Plus), { class: "w-4 h-4" }),
                _cache[14] || (_cache[14] = createBaseVNode("span", null, "Add Section", -1))
              ])
            ])
          ])
        ]),
        createBaseVNode("div", _hoisted_10, [
          createBaseVNode("div", _hoisted_11, [
            createBaseVNode("table", _hoisted_12, [
              _cache[18] || (_cache[18] = createBaseVNode("thead", null, [
                createBaseVNode("tr", { class: "bg-slate-50/50 text-slate-400 font-bold uppercase tracking-wider border-b border-slate-100" }, [
                  createBaseVNode("th", { class: "px-6 py-4 font-semibold" }, "Section details"),
                  createBaseVNode("th", { class: "px-6 py-4 font-semibold" }, "Floor level"),
                  createBaseVNode("th", { class: "px-6 py-4 font-semibold" }, "Seat stats"),
                  createBaseVNode("th", { class: "px-6 py-4 font-semibold" }, "Gender Rule"),
                  createBaseVNode("th", { class: "px-6 py-4 font-semibold" }, "Academic Level"),
                  createBaseVNode("th", { class: "px-6 py-4 font-semibold" }, "Status"),
                  createBaseVNode("th", { class: "px-6 py-4 text-right font-semibold" }, "Actions")
                ])
              ], -1)),
              createBaseVNode("tbody", _hoisted_13, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(sections.value, (section) => {
                  return openBlock(), createElementBlock("tr", {
                    key: section.id,
                    class: "hover:bg-slate-50/50 transition-colors"
                  }, [
                    createBaseVNode("td", _hoisted_14, [
                      createBaseVNode("div", _hoisted_15, toDisplayString(section.name), 1),
                      createBaseVNode("div", _hoisted_16, toDisplayString(section.description || "No description provided"), 1)
                    ]),
                    createBaseVNode("td", _hoisted_17, [
                      createBaseVNode("div", _hoisted_18, toDisplayString(section.floor?.name || "N/A"), 1),
                      createBaseVNode("div", _hoisted_19, "Level " + toDisplayString(section.floor?.level ?? "0"), 1)
                    ]),
                    createBaseVNode("td", _hoisted_20, [
                      createBaseVNode("div", _hoisted_21, toDisplayString(section.total_seats) + " total", 1),
                      createBaseVNode("div", _hoisted_22, toDisplayString(section.available_seats) + " available", 1)
                    ]),
                    createBaseVNode("td", _hoisted_23, [
                      createBaseVNode("span", {
                        class: normalizeClass([
                          "px-2.5 py-0.5 rounded text-[9px] font-bold uppercase border",
                          section.gender === "male" ? "bg-blue-50 border-blue-100 text-blue-700" : section.gender === "female" ? "bg-pink-50 border-pink-100 text-pink-700" : "bg-emerald-50 border-emerald-100 text-emerald-700"
                        ])
                      }, toDisplayString(section.gender === "male" ? "Male Only" : section.gender === "female" ? "Female Only" : "Mixed"), 3)
                    ]),
                    createBaseVNode("td", _hoisted_24, [
                      createBaseVNode("span", {
                        class: normalizeClass([
                          "px-2.5 py-0.5 rounded text-[9px] font-bold uppercase border",
                          section.academic_level === "PRC" ? "bg-amber-50 border-amber-100 text-amber-700" : section.academic_level === "CAF" ? "bg-cyan-50 border-cyan-100 text-cyan-700" : section.academic_level === "Final" ? "bg-purple-50 border-purple-100 text-purple-700" : "bg-slate-50 border-slate-200 text-slate-600"
                        ])
                      }, toDisplayString(section.academic_level === "all" || !section.academic_level ? "All Levels" : section.academic_level), 3)
                    ]),
                    createBaseVNode("td", _hoisted_25, [
                      createBaseVNode("span", {
                        class: normalizeClass([
                          "px-2.5 py-0.5 rounded-full text-[9px] font-bold uppercase border inline-flex items-center gap-1",
                          section.is_active ? "bg-green-50 border-green-100 text-green-700" : "bg-red-50 border-red-100 text-red-700"
                        ])
                      }, [
                        createBaseVNode("span", {
                          class: normalizeClass(["w-1.5 h-1.5 rounded-full", section.is_active ? "bg-green-500" : "bg-red-500"])
                        }, null, 2),
                        createTextVNode(" " + toDisplayString(section.is_active ? "Active" : "Inactive"), 1)
                      ], 2)
                    ]),
                    createBaseVNode("td", _hoisted_26, [
                      createBaseVNode("div", _hoisted_27, [
                        createBaseVNode("button", {
                          onClick: ($event) => printSectionQRs(section),
                          class: "px-2.5 py-1.5 text-slate-600 bg-slate-50 hover:bg-slate-100 rounded-lg font-bold border border-slate-200/40 cursor-pointer inline-flex items-center gap-1"
                        }, [
                          createVNode(unref(Printer), { class: "w-3.5 h-3.5" }),
                          _cache[15] || (_cache[15] = createBaseVNode("span", null, "Print QR", -1))
                        ], 8, _hoisted_28),
                        createBaseVNode("button", {
                          onClick: ($event) => editSection(section),
                          class: "px-2.5 py-1.5 text-emerald-700 bg-emerald-50 hover:bg-emerald-100 rounded-lg font-bold border border-emerald-100 cursor-pointer"
                        }, " Edit ", 8, _hoisted_29),
                        createBaseVNode("button", {
                          onClick: ($event) => confirmDelete(section),
                          class: "px-2.5 py-1.5 text-red-600 bg-red-50 hover:bg-red-100 rounded-lg font-bold border border-red-100 cursor-pointer"
                        }, " Delete ", 8, _hoisted_30)
                      ])
                    ])
                  ]);
                }), 128)),
                sections.value.length === 0 && !loading.value ? (openBlock(), createElementBlock("tr", _hoisted_31, [
                  createBaseVNode("td", _hoisted_32, [
                    createVNode(unref(Building2), { class: "w-10 h-10 text-slate-200 mx-auto mb-3" }),
                    _cache[16] || (_cache[16] = createBaseVNode("p", { class: "text-slate-400 font-semibold uppercase tracking-wider text-[11px]" }, "No sections found", -1)),
                    _cache[17] || (_cache[17] = createBaseVNode("p", { class: "text-[10px] text-slate-400 mt-0.5" }, 'Click "Add Section" to configure library space partitions.', -1))
                  ])
                ])) : createCommentVNode("", true)
              ])
            ])
          ])
        ]),
        showModal.value ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: "fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50",
          onClick: _cache[10] || (_cache[10] = withModifiers(($event) => showModal.value = false, ["self"]))
        }, [
          createBaseVNode("div", _hoisted_33, [
            createBaseVNode("div", _hoisted_34, [
              createBaseVNode("h3", _hoisted_35, toDisplayString(isEditing.value ? "Edit Section Settings" : "Add New Section"), 1),
              createBaseVNode("button", {
                onClick: _cache[1] || (_cache[1] = ($event) => showModal.value = false),
                class: "p-2 hover:bg-slate-50 rounded-lg transition-colors cursor-pointer text-slate-400"
              }, [
                createVNode(unref(X), { class: "w-4 h-4" })
              ])
            ]),
            createBaseVNode("form", {
              onSubmit: withModifiers(saveSection, ["prevent"]),
              class: "p-6 space-y-4 text-left"
            }, [
              createBaseVNode("div", null, [
                _cache[19] || (_cache[19] = createBaseVNode("label", { class: "block text-[10px] font-semibold text-slate-400 mb-1.5 uppercase tracking-wider" }, "Floor Level", -1)),
                withDirectives(createBaseVNode("select", {
                  "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => form.value.floor_id = $event),
                  required: "",
                  class: "w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-400 transition-all text-sm text-slate-700 font-medium bg-slate-50/50 cursor-pointer"
                }, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(floors.value, (floor) => {
                    return openBlock(), createElementBlock("option", {
                      key: floor.id,
                      value: floor.id
                    }, toDisplayString(floor.name) + " (Level " + toDisplayString(floor.level) + ") ", 9, _hoisted_36);
                  }), 128))
                ], 512), [
                  [vModelSelect, form.value.floor_id]
                ])
              ]),
              createBaseVNode("div", null, [
                _cache[20] || (_cache[20] = createBaseVNode("label", { class: "block text-[10px] font-semibold text-slate-400 mb-1.5 uppercase tracking-wider" }, "Section Name", -1)),
                withDirectives(createBaseVNode("input", {
                  "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => form.value.name = $event),
                  type: "text",
                  required: "",
                  class: "w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-400 transition-all text-sm text-slate-700 font-medium bg-slate-50/50",
                  placeholder: "e.g. Zone A"
                }, null, 512), [
                  [vModelText, form.value.name]
                ])
              ]),
              createBaseVNode("div", null, [
                _cache[22] || (_cache[22] = createBaseVNode("label", { class: "block text-[10px] font-semibold text-slate-400 mb-1.5 uppercase tracking-wider" }, "Gender Restriction", -1)),
                withDirectives(createBaseVNode("select", {
                  "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => form.value.gender = $event),
                  required: "",
                  class: "w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-400 transition-all text-sm text-slate-700 font-medium bg-slate-50/50 cursor-pointer"
                }, [..._cache[21] || (_cache[21] = [
                  createBaseVNode("option", { value: "mixed" }, "Mixed (All)", -1),
                  createBaseVNode("option", { value: "male" }, "Male Only", -1),
                  createBaseVNode("option", { value: "female" }, "Female Only", -1)
                ])], 512), [
                  [vModelSelect, form.value.gender]
                ])
              ]),
              createBaseVNode("div", null, [
                _cache[24] || (_cache[24] = createBaseVNode("label", { class: "block text-[10px] font-semibold text-slate-400 mb-1.5 uppercase tracking-wider" }, "Academic Level Restriction", -1)),
                withDirectives(createBaseVNode("select", {
                  "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => form.value.academic_level = $event),
                  required: "",
                  class: "w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-400 transition-all text-sm text-slate-700 font-medium bg-slate-50/50 cursor-pointer"
                }, [..._cache[23] || (_cache[23] = [
                  createBaseVNode("option", { value: "all" }, "Available for All", -1),
                  createBaseVNode("option", { value: "PRC" }, "PRC Students Only", -1),
                  createBaseVNode("option", { value: "CAF" }, "CAF Students Only", -1),
                  createBaseVNode("option", { value: "Final" }, "Final Year Students Only", -1)
                ])], 512), [
                  [vModelSelect, form.value.academic_level]
                ])
              ]),
              createBaseVNode("div", null, [
                _cache[25] || (_cache[25] = createBaseVNode("label", { class: "block text-[10px] font-semibold text-slate-400 mb-1.5 uppercase tracking-wider" }, "Total Seats", -1)),
                withDirectives(createBaseVNode("input", {
                  "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => form.value.total_seats = $event),
                  type: "number",
                  required: "",
                  class: "w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-400 transition-all text-sm text-slate-700 font-medium bg-slate-50/50 disabled:bg-slate-100/50 disabled:text-slate-400",
                  placeholder: "e.g. 20"
                }, null, 512), [
                  [
                    vModelText,
                    form.value.total_seats,
                    void 0,
                    { number: true }
                  ]
                ]),
                isEditing.value ? (openBlock(), createElementBlock("p", _hoisted_37, "Note: Changing the count will automatically create new seat records or delete excess ones to match.")) : createCommentVNode("", true)
              ]),
              createBaseVNode("div", null, [
                _cache[26] || (_cache[26] = createBaseVNode("label", { class: "block text-[10px] font-semibold text-slate-400 mb-1.5 uppercase tracking-wider" }, "Description", -1)),
                withDirectives(createBaseVNode("textarea", {
                  "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => form.value.description = $event),
                  rows: "3",
                  class: "w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-400 transition-all text-sm text-slate-700 font-medium bg-slate-50/50 resize-none",
                  placeholder: "e.g. Near window, quiet zone"
                }, null, 512), [
                  [vModelText, form.value.description]
                ])
              ]),
              createBaseVNode("div", _hoisted_38, [
                withDirectives(createBaseVNode("input", {
                  "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => form.value.is_active = $event),
                  type: "checkbox",
                  id: "is_active",
                  class: "rounded text-emerald-600 focus:ring-emerald-500 cursor-pointer"
                }, null, 512), [
                  [vModelCheckbox, form.value.is_active]
                ]),
                _cache[27] || (_cache[27] = createBaseVNode("label", {
                  for: "is_active",
                  class: "text-xs font-bold text-slate-500 cursor-pointer select-none"
                }, "Mark Active", -1))
              ]),
              createBaseVNode("div", _hoisted_39, [
                createBaseVNode("button", {
                  type: "submit",
                  disabled: loading.value,
                  class: "flex-1 px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl transition-all disabled:opacity-50 text-xs font-bold cursor-pointer"
                }, toDisplayString(loading.value ? "Saving..." : isEditing.value ? "Update Section" : "Create Section"), 9, _hoisted_40),
                createBaseVNode("button", {
                  type: "button",
                  onClick: _cache[9] || (_cache[9] = ($event) => showModal.value = false),
                  class: "px-4 py-2 border border-slate-200 text-slate-500 font-bold rounded-xl hover:bg-slate-50 transition-all text-xs cursor-pointer"
                }, " Cancel ")
              ])
            ], 32)
          ])
        ])) : createCommentVNode("", true)
      ]);
    };
  }
});
const SectionManagementPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-8a4535ad"]]);
export {
  SectionManagementPage as default
};
