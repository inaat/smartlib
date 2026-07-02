import { d as defineComponent, x as useAuth, c as computed, r as ref, o as onMounted, a as createElementBlock, b as createBaseVNode, l as createCommentVNode, p as withDirectives, D as vModelSelect, F as Fragment, j as renderList, f as createVNode, u as unref, n as normalizeClass, z as withModifiers, t as toDisplayString, v as vModelText, B as vModelCheckbox, P as librarianAPI, i as createTextVNode, k as openBlock } from "./main-DKJzpCzk.js";
import { u as useSwal } from "./useSwal-pQW_XkRe.js";
import { C as ChevronDown } from "./chevron-down-CfHstygd.js";
import { R as RefreshCw } from "./refresh-cw-vjkPNSrg.js";
import { P as Printer } from "./printer-CjSAh7W-.js";
import { P as Plus } from "./plus-CR_-MeGX.js";
import { B as Building2 } from "./building-2-BtkbfY_f.js";
import { X } from "./x-BLKH3q-c.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
/* empty css               */
import "./createLucideIcon-TQ5d7bQA.js";
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
const _hoisted_25 = { class: "px-6 py-4 text-right" };
const _hoisted_26 = { class: "flex items-center justify-end space-x-2" };
const _hoisted_27 = ["onClick"];
const _hoisted_28 = ["onClick"];
const _hoisted_29 = ["onClick"];
const _hoisted_30 = { key: 0 };
const _hoisted_31 = {
  colspan: "6",
  class: "px-6 py-16 text-center"
};
const _hoisted_32 = { class: "bg-white rounded-xl shadow-xl max-w-md w-full mx-4 overflow-hidden border border-gray-200 animate-in fade-in zoom-in duration-200" };
const _hoisted_33 = { class: "p-6 border-b border-slate-150 flex items-center justify-between text-left" };
const _hoisted_34 = { class: "text-base font-bold text-slate-800" };
const _hoisted_35 = ["value"];
const _hoisted_36 = ["disabled"];
const _hoisted_37 = {
  key: 0,
  class: "mt-1 text-[10px] text-slate-400 font-bold"
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
        showError("Save Failed", "Failed to save section.");
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
          <button onclick="window.print()" style="padding: 10px 20px; background: #059669; color: white; border: none; border-radius: 6px; cursor: pointer; font-weight: bold; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
            Print QR Codes
          </button>
        </div>
        <div class="header">
          <h1 style="margin: 0; color: #1a1a1a;">Seat QR Codes</h1>
          <p style="margin: 5px 0; color: #666;">Section: ${section.name} | Floor: ${section.floor?.name || "N/A"}</p>
        </div>
        <div class="qr-grid">
  `;
      seats.forEach((seat) => {
        html += `
      <div class="qr-item">
        <img src="${seat.qr_code_url || "/storage/qrcodes/seats/seat-" + seat.id + ".svg"}" class="qr-image" onerror="this.src='https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(seat.qr_code || seat.seat_number)}'" />
        <div class="seat-number">Seat ${seat.seat_number}</div>
        <div class="section-info">${section.name} - ${section.floor?.name || ""}</div>
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
      let html = `
    <html>
      <head>
        <title>Print All QR Codes</title>
        <style>
          body { font-family: sans-serif; margin: 0; padding: 20px; }
          .header { text-align: center; margin-bottom: 30px; border-bottom: 2px solid #eee; padding-bottom: 10px; }
          .section-block { margin-bottom: 50px; }
          .section-title { font-size: 20px; font-bold; margin-bottom: 15px; padding-left: 10px; border-left: 4px solid #059669; }
          .qr-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; }
          .qr-item { border: 1px solid #ddd; padding: 15px; text-align: center; page-break-inside: avoid; border-radius: 8px; }
          .qr-image { width: 140px; height: 140px; object-fit: contain; }
          .seat-number { font-weight: bold; margin-top: 10px; font-size: 16px; color: #333; }
          .section-info { font-size: 12px; color: #666; margin-top: 4px; }
          @media print {
            .no-print { display: none; }
            .section-block { page-break-after: always; }
            body { padding: 0; }
          }
        </style>
      </head>
      <body>
        <div class="no-print" style="position: fixed; top: 20px; right: 20px; z-index: 100;">
          <button onclick="window.print()" style="padding: 10px 20px; background: #059669; color: white; border: none; border-radius: 6px; cursor: pointer; font-weight: bold; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
            Print All QR Codes
          </button>
        </div>
        <div class="header">
          <h1 style="margin: 0; color: #1a1a1a;">Library Seat QR Codes</h1>
          <p style="margin: 5px 0; color: #666;">Bulk Export - All Sections</p>
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
          html += `
        <div class="qr-item">
          <img src="${seat.qr_code_url || "/storage/qrcodes/seats/seat-" + seat.id + ".svg"}" class="qr-image" onerror="this.src='https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(seat.qr_code || seat.seat_number)}'" />
          <div class="seat-number">Seat ${seat.seat_number}</div>
          <div class="section-info">${section.name} - ${section.floor?.name || ""}</div>
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
                _cache[11] || (_cache[11] = createBaseVNode("label", { class: "block text-[10px] font-bold text-slate-400 mb-1 uppercase tracking-wider" }, "Filter by Floor", -1)),
                createBaseVNode("div", _hoisted_6, [
                  withDirectives(createBaseVNode("select", {
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => selectedFloorId.value = $event),
                    onChange: fetchSections,
                    class: "w-full px-4 py-2 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-400 transition-all text-xs text-slate-600 font-semibold bg-white appearance-none cursor-pointer shadow-sm"
                  }, [
                    _cache[10] || (_cache[10] = createBaseVNode("option", { value: null }, "All Floors", -1)),
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
                _cache[12] || (_cache[12] = createBaseVNode("span", null, "Print All Bulk", -1))
              ]),
              createBaseVNode("button", {
                onClick: openCreateModal,
                class: "px-4 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl transition-colors flex items-center space-x-2 text-xs font-bold shadow-sm cursor-pointer"
              }, [
                createVNode(unref(Plus), { class: "w-4 h-4" }),
                _cache[13] || (_cache[13] = createBaseVNode("span", null, "Add Section", -1))
              ])
            ])
          ])
        ]),
        createBaseVNode("div", _hoisted_10, [
          createBaseVNode("div", _hoisted_11, [
            createBaseVNode("table", _hoisted_12, [
              _cache[17] || (_cache[17] = createBaseVNode("thead", null, [
                createBaseVNode("tr", { class: "bg-slate-50/50 text-slate-400 font-bold uppercase tracking-wider border-b border-slate-100" }, [
                  createBaseVNode("th", { class: "px-6 py-4 font-semibold" }, "Section details"),
                  createBaseVNode("th", { class: "px-6 py-4 font-semibold" }, "Floor level"),
                  createBaseVNode("th", { class: "px-6 py-4 font-semibold" }, "Seat stats"),
                  createBaseVNode("th", { class: "px-6 py-4 font-semibold" }, "Gender Rule"),
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
                    createBaseVNode("td", _hoisted_25, [
                      createBaseVNode("div", _hoisted_26, [
                        createBaseVNode("button", {
                          onClick: ($event) => printSectionQRs(section),
                          class: "px-2.5 py-1.5 text-slate-600 bg-slate-50 hover:bg-slate-100 rounded-lg font-bold border border-slate-200/40 cursor-pointer inline-flex items-center gap-1"
                        }, [
                          createVNode(unref(Printer), { class: "w-3.5 h-3.5" }),
                          _cache[14] || (_cache[14] = createBaseVNode("span", null, "Print QR", -1))
                        ], 8, _hoisted_27),
                        createBaseVNode("button", {
                          onClick: ($event) => editSection(section),
                          class: "px-2.5 py-1.5 text-emerald-700 bg-emerald-50 hover:bg-emerald-100 rounded-lg font-bold border border-emerald-100 cursor-pointer"
                        }, " Edit ", 8, _hoisted_28),
                        createBaseVNode("button", {
                          onClick: ($event) => confirmDelete(section),
                          class: "px-2.5 py-1.5 text-red-600 bg-red-50 hover:bg-red-100 rounded-lg font-bold border border-red-100 cursor-pointer"
                        }, " Delete ", 8, _hoisted_29)
                      ])
                    ])
                  ]);
                }), 128)),
                sections.value.length === 0 && !loading.value ? (openBlock(), createElementBlock("tr", _hoisted_30, [
                  createBaseVNode("td", _hoisted_31, [
                    createVNode(unref(Building2), { class: "w-10 h-10 text-slate-200 mx-auto mb-3" }),
                    _cache[15] || (_cache[15] = createBaseVNode("p", { class: "text-slate-400 font-semibold uppercase tracking-wider text-[11px]" }, "No sections found", -1)),
                    _cache[16] || (_cache[16] = createBaseVNode("p", { class: "text-[10px] text-slate-400 mt-0.5" }, 'Click "Add Section" to configure library space partitions.', -1))
                  ])
                ])) : createCommentVNode("", true)
              ])
            ])
          ])
        ]),
        showModal.value ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: "fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50",
          onClick: _cache[9] || (_cache[9] = withModifiers(($event) => showModal.value = false, ["self"]))
        }, [
          createBaseVNode("div", _hoisted_32, [
            createBaseVNode("div", _hoisted_33, [
              createBaseVNode("h3", _hoisted_34, toDisplayString(isEditing.value ? "Edit Section Settings" : "Add New Section"), 1),
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
                _cache[18] || (_cache[18] = createBaseVNode("label", { class: "block text-[10px] font-semibold text-slate-400 mb-1.5 uppercase tracking-wider" }, "Floor Level", -1)),
                withDirectives(createBaseVNode("select", {
                  "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => form.value.floor_id = $event),
                  required: "",
                  class: "w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-400 transition-all text-sm text-slate-700 font-medium bg-slate-50/50 cursor-pointer"
                }, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(floors.value, (floor) => {
                    return openBlock(), createElementBlock("option", {
                      key: floor.id,
                      value: floor.id
                    }, toDisplayString(floor.name) + " (Level " + toDisplayString(floor.level) + ") ", 9, _hoisted_35);
                  }), 128))
                ], 512), [
                  [vModelSelect, form.value.floor_id]
                ])
              ]),
              createBaseVNode("div", null, [
                _cache[19] || (_cache[19] = createBaseVNode("label", { class: "block text-[10px] font-semibold text-slate-400 mb-1.5 uppercase tracking-wider" }, "Section Name", -1)),
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
                _cache[21] || (_cache[21] = createBaseVNode("label", { class: "block text-[10px] font-semibold text-slate-400 mb-1.5 uppercase tracking-wider" }, "Gender Restriction", -1)),
                withDirectives(createBaseVNode("select", {
                  "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => form.value.gender = $event),
                  required: "",
                  class: "w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-400 transition-all text-sm text-slate-700 font-medium bg-slate-50/50 cursor-pointer"
                }, [..._cache[20] || (_cache[20] = [
                  createBaseVNode("option", { value: "mixed" }, "Mixed (All)", -1),
                  createBaseVNode("option", { value: "male" }, "Male Only", -1),
                  createBaseVNode("option", { value: "female" }, "Female Only", -1)
                ])], 512), [
                  [vModelSelect, form.value.gender]
                ])
              ]),
              createBaseVNode("div", null, [
                _cache[22] || (_cache[22] = createBaseVNode("label", { class: "block text-[10px] font-semibold text-slate-400 mb-1.5 uppercase tracking-wider" }, "Total Seats", -1)),
                withDirectives(createBaseVNode("input", {
                  "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => form.value.total_seats = $event),
                  type: "number",
                  required: "",
                  disabled: isEditing.value,
                  class: "w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-400 transition-all text-sm text-slate-700 font-medium bg-slate-50/50 disabled:bg-slate-100/50 disabled:text-slate-400",
                  placeholder: "e.g. 20"
                }, null, 8, _hoisted_36), [
                  [
                    vModelText,
                    form.value.total_seats,
                    void 0,
                    { number: true }
                  ]
                ]),
                isEditing.value ? (openBlock(), createElementBlock("p", _hoisted_37, "Total seats count cannot be modified after creation.")) : createCommentVNode("", true)
              ]),
              createBaseVNode("div", null, [
                _cache[23] || (_cache[23] = createBaseVNode("label", { class: "block text-[10px] font-semibold text-slate-400 mb-1.5 uppercase tracking-wider" }, "Description", -1)),
                withDirectives(createBaseVNode("textarea", {
                  "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => form.value.description = $event),
                  rows: "3",
                  class: "w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-400 transition-all text-sm text-slate-700 font-medium bg-slate-50/50 resize-none",
                  placeholder: "e.g. Near window, quiet zone"
                }, null, 512), [
                  [vModelText, form.value.description]
                ])
              ]),
              createBaseVNode("div", _hoisted_38, [
                withDirectives(createBaseVNode("input", {
                  "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => form.value.is_active = $event),
                  type: "checkbox",
                  id: "is_active",
                  class: "rounded text-emerald-600 focus:ring-emerald-500 cursor-pointer"
                }, null, 512), [
                  [vModelCheckbox, form.value.is_active]
                ]),
                _cache[24] || (_cache[24] = createBaseVNode("label", {
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
                  onClick: _cache[8] || (_cache[8] = ($event) => showModal.value = false),
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
const SectionManagementPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-6ec35777"]]);
export {
  SectionManagementPage as default
};
