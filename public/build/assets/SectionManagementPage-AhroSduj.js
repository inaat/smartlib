import { d as defineComponent, p as useAuth, D as computed, r as ref, o as onMounted, c as createElementBlock, b as createBaseVNode, m as createCommentVNode, f as createVNode, n as normalizeClass, u as unref, v as withDirectives, B as vModelSelect, F as Fragment, h as renderList, t as toDisplayString, s as withModifiers, x as vModelText, z as vModelCheckbox, Q as librarianAPI, j as createTextVNode, i as openBlock } from "./main-DCJXrkf-.js";
import { R as RefreshCw } from "./refresh-cw-DCq6mbXe.js";
import { P as Printer } from "./printer-ClKtIZ53.js";
import { P as Plus } from "./plus-D04LIZ3g.js";
import { X } from "./x-BkNPvJ70.js";
/* empty css               */
import "./createLucideIcon-CDsoUk2K.js";
const _hoisted_1 = { class: "p-6 space-y-6" };
const _hoisted_2 = { class: "flex items-center justify-between" };
const _hoisted_3 = { class: "flex items-center space-x-3" };
const _hoisted_4 = { class: "bg-white rounded-xl shadow-sm border border-gray-200 p-4" };
const _hoisted_5 = { class: "flex items-center space-x-4" };
const _hoisted_6 = { class: "flex-1 max-w-xs" };
const _hoisted_7 = ["value"];
const _hoisted_8 = { class: "bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden" };
const _hoisted_9 = { class: "min-w-full divide-y divide-gray-200" };
const _hoisted_10 = { class: "bg-white divide-y divide-gray-200" };
const _hoisted_11 = { class: "px-6 py-4 whitespace-nowrap" };
const _hoisted_12 = { class: "text-sm font-medium text-gray-900" };
const _hoisted_13 = { class: "text-xs text-gray-500" };
const _hoisted_14 = { class: "px-6 py-4 whitespace-nowrap" };
const _hoisted_15 = { class: "text-sm text-gray-900" };
const _hoisted_16 = { class: "text-xs text-gray-500" };
const _hoisted_17 = { class: "px-6 py-4 whitespace-nowrap" };
const _hoisted_18 = { class: "text-sm text-gray-900" };
const _hoisted_19 = { class: "text-xs text-green-600" };
const _hoisted_20 = { class: "px-6 py-4 whitespace-nowrap" };
const _hoisted_21 = { class: "px-6 py-4 whitespace-nowrap" };
const _hoisted_22 = { class: "px-6 py-4 whitespace-nowrap text-right text-sm font-medium" };
const _hoisted_23 = ["onClick"];
const _hoisted_24 = ["onClick"];
const _hoisted_25 = ["onClick"];
const _hoisted_26 = { key: 0 };
const _hoisted_27 = {
  key: 0,
  class: "fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
};
const _hoisted_28 = { class: "bg-white rounded-xl shadow-xl max-w-md w-full mx-4 p-6" };
const _hoisted_29 = { class: "flex items-center justify-between mb-6" };
const _hoisted_30 = { class: "text-xl font-bold text-gray-900" };
const _hoisted_31 = ["value"];
const _hoisted_32 = ["disabled"];
const _hoisted_33 = {
  key: 0,
  class: "mt-1 text-xs text-gray-500"
};
const _hoisted_34 = { class: "flex items-center" };
const _hoisted_35 = { class: "flex items-center space-x-3 pt-4" };
const _hoisted_36 = ["disabled"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "SectionManagementPage",
  setup(__props) {
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
        } else {
          await librarianAPI.createSection(form.value);
        }
        await fetchSections();
        showModal.value = false;
      } catch (error) {
        console.error("Error saving section:", error);
      } finally {
        loading.value = false;
      }
    };
    const confirmDelete = async (section) => {
      if (confirm(`Are you sure you want to delete section "${section.name}"? This will also delete all seats in this section.`)) {
        try {
          await librarianAPI.deleteSection(section.id);
          await fetchSections();
        } catch (error) {
          console.error("Error deleting section:", error);
        }
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
          <button onclick="window.print()" style="padding: 10px 20px; background: #7c3aed; color: white; border: none; border-radius: 6px; cursor: pointer; font-weight: bold; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
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
          .section-title { font-size: 20px; font-bold; margin-bottom: 15px; padding-left: 10px; border-left: 4px solid #7c3aed; }
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
          <button onclick="window.print()" style="padding: 10px 20px; background: #7c3aed; color: white; border: none; border-radius: 6px; cursor: pointer; font-weight: bold; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
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
          _cache[11] || (_cache[11] = createBaseVNode("div", null, [
            createBaseVNode("h1", { class: "text-3xl font-bold text-gray-900" }, "Section Management"),
            createBaseVNode("p", { class: "text-gray-600 mt-1" }, "Manage seating sections across all floors")
          ], -1)),
          createBaseVNode("div", _hoisted_3, [
            createBaseVNode("button", {
              onClick: fetchSections,
              class: "p-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors",
              title: "Refresh"
            }, [
              createVNode(unref(RefreshCw), {
                class: normalizeClass(["w-5 h-5 text-gray-600", loading.value ? "animate-spin" : ""])
              }, null, 8, ["class"])
            ]),
            createBaseVNode("button", {
              onClick: printAllQRs,
              class: "px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center space-x-2"
            }, [
              createVNode(unref(Printer), { class: "w-4 h-4 text-gray-600" }),
              _cache[9] || (_cache[9] = createBaseVNode("span", { class: "text-sm font-medium text-gray-700" }, "Print All Bulk", -1))
            ]),
            createBaseVNode("button", {
              onClick: openCreateModal,
              class: "px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg hover:shadow-lg transition-all flex items-center space-x-2"
            }, [
              createVNode(unref(Plus), { class: "w-4 h-4" }),
              _cache[10] || (_cache[10] = createBaseVNode("span", { class: "text-sm font-medium" }, "Add Section", -1))
            ])
          ])
        ]),
        createBaseVNode("div", _hoisted_4, [
          createBaseVNode("div", _hoisted_5, [
            createBaseVNode("div", _hoisted_6, [
              _cache[13] || (_cache[13] = createBaseVNode("label", { class: "block text-xs font-medium text-gray-700 mb-1" }, "Filter by Floor", -1)),
              withDirectives(createBaseVNode("select", {
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => selectedFloorId.value = $event),
                onChange: fetchSections,
                class: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
              }, [
                _cache[12] || (_cache[12] = createBaseVNode("option", { value: null }, "All Floors", -1)),
                (openBlock(true), createElementBlock(Fragment, null, renderList(floors.value, (floor) => {
                  return openBlock(), createElementBlock("option", {
                    key: floor.id,
                    value: floor.id
                  }, toDisplayString(floor.name) + " (Level " + toDisplayString(floor.level) + ") ", 9, _hoisted_7);
                }), 128))
              ], 544), [
                [vModelSelect, selectedFloorId.value]
              ])
            ])
          ])
        ]),
        createBaseVNode("div", _hoisted_8, [
          createBaseVNode("table", _hoisted_9, [
            _cache[16] || (_cache[16] = createBaseVNode("thead", { class: "bg-gray-50" }, [
              createBaseVNode("tr", null, [
                createBaseVNode("th", { class: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" }, "Section Name"),
                createBaseVNode("th", { class: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" }, "Floor"),
                createBaseVNode("th", { class: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" }, "Seats"),
                createBaseVNode("th", { class: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" }, "Gender"),
                createBaseVNode("th", { class: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" }, "Status"),
                createBaseVNode("th", { class: "px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider" }, "Actions")
              ])
            ], -1)),
            createBaseVNode("tbody", _hoisted_10, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(sections.value, (section) => {
                return openBlock(), createElementBlock("tr", {
                  key: section.id,
                  class: "hover:bg-gray-50"
                }, [
                  createBaseVNode("td", _hoisted_11, [
                    createBaseVNode("div", _hoisted_12, toDisplayString(section.name), 1),
                    createBaseVNode("div", _hoisted_13, toDisplayString(section.description || "No description"), 1)
                  ]),
                  createBaseVNode("td", _hoisted_14, [
                    createBaseVNode("div", _hoisted_15, toDisplayString(section.floor?.name || "N/A"), 1),
                    createBaseVNode("div", _hoisted_16, "Level " + toDisplayString(section.floor?.level), 1)
                  ]),
                  createBaseVNode("td", _hoisted_17, [
                    createBaseVNode("div", _hoisted_18, toDisplayString(section.total_seats) + " total", 1),
                    createBaseVNode("div", _hoisted_19, toDisplayString(section.available_seats) + " available", 1)
                  ]),
                  createBaseVNode("td", _hoisted_20, [
                    createBaseVNode("span", {
                      class: normalizeClass([
                        "px-2 inline-flex text-xs leading-5 font-semibold rounded-full",
                        section.gender === "male" ? "bg-blue-100 text-blue-800" : section.gender === "female" ? "bg-pink-100 text-pink-800" : "bg-purple-100 text-purple-800"
                      ])
                    }, toDisplayString(section.gender === "male" ? "Male Only" : section.gender === "female" ? "Female Only" : "Mixed"), 3)
                  ]),
                  createBaseVNode("td", _hoisted_21, [
                    createBaseVNode("span", {
                      class: normalizeClass([
                        "px-2 inline-flex text-xs leading-5 font-semibold rounded-full",
                        section.is_active ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                      ])
                    }, toDisplayString(section.is_active ? "Active" : "Inactive"), 3)
                  ]),
                  createBaseVNode("td", _hoisted_22, [
                    createBaseVNode("button", {
                      onClick: ($event) => printSectionQRs(section),
                      class: "text-green-600 hover:text-green-900 mr-4 flex items-center inline-flex"
                    }, [
                      createVNode(unref(Printer), { class: "w-3 h-3 mr-1" }),
                      _cache[14] || (_cache[14] = createTextVNode(" Print QR ", -1))
                    ], 8, _hoisted_23),
                    createBaseVNode("button", {
                      onClick: ($event) => editSection(section),
                      class: "text-indigo-600 hover:text-indigo-900 mr-4"
                    }, "Edit", 8, _hoisted_24),
                    createBaseVNode("button", {
                      onClick: ($event) => confirmDelete(section),
                      class: "text-red-600 hover:text-red-900"
                    }, "Delete", 8, _hoisted_25)
                  ])
                ]);
              }), 128)),
              sections.value.length === 0 && !loading.value ? (openBlock(), createElementBlock("tr", _hoisted_26, [..._cache[15] || (_cache[15] = [
                createBaseVNode("td", {
                  colspan: "5",
                  class: "px-6 py-12 text-center text-gray-500"
                }, " No sections found. Add a new section to get started. ", -1)
              ])])) : createCommentVNode("", true)
            ])
          ])
        ]),
        showModal.value ? (openBlock(), createElementBlock("div", _hoisted_27, [
          createBaseVNode("div", _hoisted_28, [
            createBaseVNode("div", _hoisted_29, [
              createBaseVNode("h3", _hoisted_30, toDisplayString(isEditing.value ? "Edit Section" : "Add New Section"), 1),
              createBaseVNode("button", {
                onClick: _cache[1] || (_cache[1] = ($event) => showModal.value = false),
                class: "p-2 hover:bg-gray-100 rounded-lg transition-colors"
              }, [
                createVNode(unref(X), { class: "w-5 h-5 text-gray-500" })
              ])
            ]),
            createBaseVNode("form", {
              onSubmit: withModifiers(saveSection, ["prevent"]),
              class: "space-y-4"
            }, [
              createBaseVNode("div", null, [
                _cache[17] || (_cache[17] = createBaseVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Floor", -1)),
                withDirectives(createBaseVNode("select", {
                  "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => form.value.floor_id = $event),
                  required: "",
                  class: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                }, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(floors.value, (floor) => {
                    return openBlock(), createElementBlock("option", {
                      key: floor.id,
                      value: floor.id
                    }, toDisplayString(floor.name) + " (Level " + toDisplayString(floor.level) + ") ", 9, _hoisted_31);
                  }), 128))
                ], 512), [
                  [vModelSelect, form.value.floor_id]
                ])
              ]),
              createBaseVNode("div", null, [
                _cache[18] || (_cache[18] = createBaseVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Section Name", -1)),
                withDirectives(createBaseVNode("input", {
                  "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => form.value.name = $event),
                  type: "text",
                  required: "",
                  class: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500",
                  placeholder: "e.g. Zone A"
                }, null, 512), [
                  [vModelText, form.value.name]
                ])
              ]),
              createBaseVNode("div", null, [
                _cache[20] || (_cache[20] = createBaseVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Gender Restriction", -1)),
                withDirectives(createBaseVNode("select", {
                  "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => form.value.gender = $event),
                  required: "",
                  class: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                }, [..._cache[19] || (_cache[19] = [
                  createBaseVNode("option", { value: "mixed" }, "Mixed (All)", -1),
                  createBaseVNode("option", { value: "male" }, "Male Only", -1),
                  createBaseVNode("option", { value: "female" }, "Female Only", -1)
                ])], 512), [
                  [vModelSelect, form.value.gender]
                ])
              ]),
              createBaseVNode("div", null, [
                _cache[21] || (_cache[21] = createBaseVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Total Seats", -1)),
                withDirectives(createBaseVNode("input", {
                  "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => form.value.total_seats = $event),
                  type: "number",
                  required: "",
                  disabled: isEditing.value,
                  class: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 disabled:bg-gray-100",
                  placeholder: "e.g. 20"
                }, null, 8, _hoisted_32), [
                  [
                    vModelText,
                    form.value.total_seats,
                    void 0,
                    { number: true }
                  ]
                ]),
                isEditing.value ? (openBlock(), createElementBlock("p", _hoisted_33, "Total seats cannot be changed after creation.")) : createCommentVNode("", true)
              ]),
              createBaseVNode("div", null, [
                _cache[22] || (_cache[22] = createBaseVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Description", -1)),
                withDirectives(createBaseVNode("textarea", {
                  "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => form.value.description = $event),
                  rows: "3",
                  class: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500",
                  placeholder: "e.g. Near the window, quiet area"
                }, null, 512), [
                  [vModelText, form.value.description]
                ])
              ]),
              createBaseVNode("div", _hoisted_34, [
                withDirectives(createBaseVNode("input", {
                  "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => form.value.is_active = $event),
                  type: "checkbox",
                  id: "is_active",
                  class: "w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
                }, null, 512), [
                  [vModelCheckbox, form.value.is_active]
                ]),
                _cache[23] || (_cache[23] = createBaseVNode("label", {
                  for: "is_active",
                  class: "ml-2 text-sm text-gray-700"
                }, "Active", -1))
              ]),
              createBaseVNode("div", _hoisted_35, [
                createBaseVNode("button", {
                  type: "submit",
                  disabled: loading.value,
                  class: "flex-1 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors disabled:opacity-50"
                }, toDisplayString(loading.value ? "Saving..." : isEditing.value ? "Update Section" : "Create Section"), 9, _hoisted_36),
                createBaseVNode("button", {
                  type: "button",
                  onClick: _cache[8] || (_cache[8] = ($event) => showModal.value = false),
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
