import { d as defineComponent, r as ref, H as watch, o as onMounted, c as createElementBlock, b as createBaseVNode, f as createVNode, m as createCommentVNode, F as Fragment, h as renderList, t as toDisplayString, u as unref, s as withModifiers, v as withDirectives, x as vModelText, B as vModelSelect, z as vModelCheckbox, n as normalizeClass, i as openBlock } from "./main-Dk2mUbjP.js";
import { s as superadminAPI } from "./superadminApi-BmBoCTjE.js";
import { _ as _sfc_main$1 } from "./LibrarySelector.vue_vue_type_script_setup_true_lang-BaekKMbb.js";
import { u as useSwal } from "./useSwal-J4kFABxt.js";
import { X } from "./x-YsebUqOw.js";
/* empty css               */
import "./library-J5KQH6oi.js";
import "./createLucideIcon-6n-23kmf.js";
const _hoisted_1 = { class: "p-6 space-y-6" };
const _hoisted_2 = { class: "flex items-center justify-between" };
const _hoisted_3 = {
  key: 0,
  class: "bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
};
const _hoisted_4 = { class: "overflow-x-auto" };
const _hoisted_5 = { class: "min-w-full divide-y divide-gray-200" };
const _hoisted_6 = { class: "bg-white divide-y divide-gray-200" };
const _hoisted_7 = { class: "px-6 py-4 whitespace-nowrap" };
const _hoisted_8 = { class: "text-sm font-medium text-gray-900" };
const _hoisted_9 = { class: "text-xs text-gray-500" };
const _hoisted_10 = { class: "px-6 py-4 whitespace-nowrap" };
const _hoisted_11 = { class: "text-sm text-gray-500" };
const _hoisted_12 = { class: "px-6 py-4 whitespace-nowrap" };
const _hoisted_13 = { class: "text-sm text-gray-500" };
const _hoisted_14 = { class: "px-6 py-4 whitespace-nowrap" };
const _hoisted_15 = { class: "px-6 py-4 whitespace-nowrap" };
const _hoisted_16 = { class: "text-sm text-gray-500" };
const _hoisted_17 = { class: "px-6 py-4 whitespace-nowrap" };
const _hoisted_18 = { class: "px-6 py-4 whitespace-nowrap text-right text-sm font-medium" };
const _hoisted_19 = ["onClick"];
const _hoisted_20 = ["onClick"];
const _hoisted_21 = ["onClick"];
const _hoisted_22 = { key: 0 };
const _hoisted_23 = {
  key: 1,
  class: "bg-white rounded-xl shadow-sm border border-gray-200 p-12 text-center text-gray-500"
};
const _hoisted_24 = {
  key: 2,
  class: "fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
};
const _hoisted_25 = { class: "bg-white rounded-xl shadow-xl max-w-md w-full mx-4 p-6" };
const _hoisted_26 = { class: "flex items-center justify-between mb-4" };
const _hoisted_27 = { class: "text-xl font-bold text-gray-900" };
const _hoisted_28 = ["value"];
const _hoisted_29 = { key: 0 };
const _hoisted_30 = { class: "flex items-center space-x-2" };
const _hoisted_31 = { class: "flex items-center space-x-3 pt-4" };
const _hoisted_32 = ["disabled"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "SectionManagementPage",
  setup(__props) {
    const selectedLibraryId = ref(null);
    const sections = ref([]);
    const floors = ref([]);
    const showModal = ref(false);
    const isEditing = ref(false);
    const loading = ref(false);
    const form = ref({
      id: null,
      name: "",
      floor_id: null,
      gender: "mixed",
      total_seats: 10,
      description: "",
      is_active: true
    });
    const fetchData = async () => {
      if (!selectedLibraryId.value) {
        sections.value = [];
        floors.value = [];
        return;
      }
      try {
        const [sectionsData, floorsData] = await Promise.all([
          superadminAPI.getSeatSections(selectedLibraryId.value.toString()),
          superadminAPI.getFloors(selectedLibraryId.value)
        ]);
        sections.value = sectionsData;
        floors.value = floorsData;
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    watch(selectedLibraryId, fetchData);
    const openCreateModal = () => {
      isEditing.value = false;
      form.value = {
        id: null,
        name: "",
        floor_id: floors.value.length > 0 ? floors.value[0].id : null,
        gender: "mixed",
        total_seats: 10,
        description: "",
        is_active: true
      };
      showModal.value = true;
    };
    const editSection = (section) => {
      isEditing.value = true;
      form.value = {
        id: section.id,
        name: section.name,
        floor_id: section.floor_id,
        gender: section.gender || "mixed",
        total_seats: section.total_seats,
        description: section.description,
        is_active: section.is_active
      };
      showModal.value = true;
    };
    const closeModal = () => {
      showModal.value = false;
    };
    const { showConfirm, showSuccess, showError, showWarning } = useSwal();
    const saveSection = async () => {
      if (!selectedLibraryId.value) return;
      loading.value = true;
      try {
        if (isEditing.value && form.value.id) {
          await superadminAPI.updateSeatSection(selectedLibraryId.value.toString(), form.value.id.toString(), {
            ...form.value
          });
          showSuccess("Updated!", "Section updated successfully");
        } else {
          await superadminAPI.createSeatSection(selectedLibraryId.value.toString(), {
            ...form.value,
            floor_id: form.value.floor_id
          });
          showSuccess("Created!", "Section created successfully");
        }
        await fetchData();
        closeModal();
      } catch (error) {
        console.error("Error saving section:", error);
        showError("Save Failed", "Failed to save section");
      } finally {
        loading.value = false;
      }
    };
    const confirmDelete = async (section) => {
      if (!selectedLibraryId.value) return;
      if (await showConfirm("Delete Section", "Are you sure you want to delete this section? All associated seats will also be deleted.", "Yes, Delete")) {
        try {
          await superadminAPI.deleteSeatSection(selectedLibraryId.value.toString(), section.id.toString());
          showSuccess("Deleted!", "Section deleted successfully");
          await fetchData();
        } catch (error) {
          console.error("Error deleting section:", error);
          showError("Delete Failed", "Failed to delete section");
        }
      }
    };
    const printSectionQRs = async (section) => {
      try {
        const seats = await superadminAPI.getSeats({ section_id: section.id });
        if (seats.length === 0) {
          showWarning("No Seats", "No seats found in this section.");
          return;
        }
        const printWindow = window.open("", "_blank");
        if (!printWindow) return;
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
        seats.forEach((seat) => {
          html += `
        <div class="qr-item">
          <img src="${seat.qr_code_url}" class="qr-image" />
          <div class="seat-number">Seat ${seat.seat_number}</div>
          <div class="section-info">${section.name}</div>
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
      } catch (error) {
        console.error("Error printing section QRs:", error);
        showError("Print Failed", "Failed to fetch seats for printing.");
      }
    };
    onMounted(() => {
      fetchData();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          _cache[8] || (_cache[8] = createBaseVNode("div", null, [
            createBaseVNode("h1", { class: "text-3xl font-bold text-gray-900" }, "Section Management"),
            createBaseVNode("p", { class: "text-gray-600 mt-1" }, "Manage library sections and zones across all libraries")
          ], -1)),
          selectedLibraryId.value ? (openBlock(), createElementBlock("button", {
            key: 0,
            onClick: openCreateModal,
            class: "px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg hover:shadow-lg transition-all flex items-center space-x-2"
          }, [..._cache[7] || (_cache[7] = [
            createBaseVNode("span", { class: "text-sm font-medium" }, "Add Section", -1)
          ])])) : createCommentVNode("", true)
        ]),
        createVNode(_sfc_main$1, {
          modelValue: selectedLibraryId.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => selectedLibraryId.value = $event)
        }, null, 8, ["modelValue"]),
        selectedLibraryId.value ? (openBlock(), createElementBlock("div", _hoisted_3, [
          createBaseVNode("div", _hoisted_4, [
            createBaseVNode("table", _hoisted_5, [
              _cache[10] || (_cache[10] = createBaseVNode("thead", { class: "bg-gray-50" }, [
                createBaseVNode("tr", null, [
                  createBaseVNode("th", { class: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" }, "Name"),
                  createBaseVNode("th", { class: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" }, "Floor"),
                  createBaseVNode("th", { class: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" }, "Total Seats"),
                  createBaseVNode("th", { class: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" }, "Gender"),
                  createBaseVNode("th", { class: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" }, "Available"),
                  createBaseVNode("th", { class: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" }, "Status"),
                  createBaseVNode("th", { class: "px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider" }, "Actions")
                ])
              ], -1)),
              createBaseVNode("tbody", _hoisted_6, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(sections.value, (section) => {
                  return openBlock(), createElementBlock("tr", {
                    key: section.id,
                    class: "hover:bg-gray-50"
                  }, [
                    createBaseVNode("td", _hoisted_7, [
                      createBaseVNode("div", _hoisted_8, toDisplayString(section.name), 1),
                      createBaseVNode("div", _hoisted_9, toDisplayString(section.description || "No description"), 1)
                    ]),
                    createBaseVNode("td", _hoisted_10, [
                      createBaseVNode("div", _hoisted_11, toDisplayString(section.floor?.name || "N/A"), 1)
                    ]),
                    createBaseVNode("td", _hoisted_12, [
                      createBaseVNode("div", _hoisted_13, toDisplayString(section.total_seats), 1)
                    ]),
                    createBaseVNode("td", _hoisted_14, [
                      createBaseVNode("span", {
                        class: normalizeClass([
                          "px-2 inline-flex text-xs leading-5 font-semibold rounded-full capitalize",
                          section.gender === "male" ? "bg-blue-100 text-blue-800" : section.gender === "female" ? "bg-pink-100 text-pink-800" : "bg-gray-100 text-gray-800"
                        ])
                      }, toDisplayString(section.gender || "mixed"), 3)
                    ]),
                    createBaseVNode("td", _hoisted_15, [
                      createBaseVNode("div", _hoisted_16, toDisplayString(section.available_seats), 1)
                    ]),
                    createBaseVNode("td", _hoisted_17, [
                      createBaseVNode("span", {
                        class: normalizeClass([
                          "px-2 inline-flex text-xs leading-5 font-semibold rounded-full",
                          section.is_active ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                        ])
                      }, toDisplayString(section.is_active ? "Active" : "Inactive"), 3)
                    ]),
                    createBaseVNode("td", _hoisted_18, [
                      createBaseVNode("button", {
                        onClick: ($event) => printSectionQRs(section),
                        class: "text-green-600 hover:text-green-900 mr-4"
                      }, "Print QR", 8, _hoisted_19),
                      createBaseVNode("button", {
                        onClick: ($event) => editSection(section),
                        class: "text-indigo-600 hover:text-indigo-900 mr-4"
                      }, "Edit", 8, _hoisted_20),
                      createBaseVNode("button", {
                        onClick: ($event) => confirmDelete(section),
                        class: "text-red-600 hover:text-red-900"
                      }, "Delete", 8, _hoisted_21)
                    ])
                  ]);
                }), 128)),
                sections.value.length === 0 ? (openBlock(), createElementBlock("tr", _hoisted_22, [..._cache[9] || (_cache[9] = [
                  createBaseVNode("td", {
                    colspan: "6",
                    class: "px-6 py-12 text-center text-gray-500"
                  }, " No sections found for this library. Add a new section to get started. ", -1)
                ])])) : createCommentVNode("", true)
              ])
            ])
          ])
        ])) : (openBlock(), createElementBlock("div", _hoisted_23, " Please select a library to manage its sections. ")),
        showModal.value ? (openBlock(), createElementBlock("div", _hoisted_24, [
          createBaseVNode("div", _hoisted_25, [
            createBaseVNode("div", _hoisted_26, [
              createBaseVNode("h3", _hoisted_27, toDisplayString(isEditing.value ? "Edit Section" : "Add New Section"), 1),
              createBaseVNode("button", {
                onClick: closeModal,
                class: "p-2 hover:bg-gray-100 rounded-lg transition-colors"
              }, [
                createVNode(unref(X), { class: "w-5 h-5" })
              ])
            ]),
            createBaseVNode("form", {
              onSubmit: withModifiers(saveSection, ["prevent"]),
              class: "space-y-4"
            }, [
              createBaseVNode("div", null, [
                _cache[11] || (_cache[11] = createBaseVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Section Name", -1)),
                withDirectives(createBaseVNode("input", {
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => form.value.name = $event),
                  type: "text",
                  required: "",
                  class: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500",
                  placeholder: "e.g. Quiet Zone A"
                }, null, 512), [
                  [vModelText, form.value.name]
                ])
              ]),
              createBaseVNode("div", null, [
                _cache[12] || (_cache[12] = createBaseVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Floor", -1)),
                withDirectives(createBaseVNode("select", {
                  "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => form.value.floor_id = $event),
                  required: "",
                  class: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                }, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(floors.value, (floor) => {
                    return openBlock(), createElementBlock("option", {
                      key: floor.id,
                      value: floor.id
                    }, toDisplayString(floor.name) + " (Level " + toDisplayString(floor.level) + ") ", 9, _hoisted_28);
                  }), 128))
                ], 512), [
                  [vModelSelect, form.value.floor_id]
                ])
              ]),
              createBaseVNode("div", null, [
                _cache[14] || (_cache[14] = createBaseVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Gender Restriction", -1)),
                withDirectives(createBaseVNode("select", {
                  "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => form.value.gender = $event),
                  required: "",
                  class: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                }, [..._cache[13] || (_cache[13] = [
                  createBaseVNode("option", { value: "mixed" }, "Mixed (All)", -1),
                  createBaseVNode("option", { value: "male" }, "Male Only", -1),
                  createBaseVNode("option", { value: "female" }, "Female Only", -1)
                ])], 512), [
                  [vModelSelect, form.value.gender]
                ])
              ]),
              !isEditing.value ? (openBlock(), createElementBlock("div", _hoisted_29, [
                _cache[15] || (_cache[15] = createBaseVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Total Seats to Create", -1)),
                withDirectives(createBaseVNode("input", {
                  "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => form.value.total_seats = $event),
                  type: "number",
                  required: "",
                  min: "1",
                  class: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500",
                  placeholder: "e.g. 10"
                }, null, 512), [
                  [
                    vModelText,
                    form.value.total_seats,
                    void 0,
                    { number: true }
                  ]
                ]),
                _cache[16] || (_cache[16] = createBaseVNode("p", { class: "mt-1 text-xs text-gray-500" }, "Seats will be automatically generated for this section.", -1))
              ])) : createCommentVNode("", true),
              createBaseVNode("div", null, [
                _cache[17] || (_cache[17] = createBaseVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Description", -1)),
                withDirectives(createBaseVNode("textarea", {
                  "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => form.value.description = $event),
                  rows: "3",
                  class: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500",
                  placeholder: "Optional description..."
                }, null, 512), [
                  [vModelText, form.value.description]
                ])
              ]),
              createBaseVNode("div", _hoisted_30, [
                withDirectives(createBaseVNode("input", {
                  "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => form.value.is_active = $event),
                  type: "checkbox",
                  id: "is_active",
                  class: "w-4 h-4 text-indigo-600 rounded focus:ring-indigo-500"
                }, null, 512), [
                  [vModelCheckbox, form.value.is_active]
                ]),
                _cache[18] || (_cache[18] = createBaseVNode("label", {
                  for: "is_active",
                  class: "text-sm font-medium text-gray-700"
                }, "Active", -1))
              ]),
              createBaseVNode("div", _hoisted_31, [
                createBaseVNode("button", {
                  type: "submit",
                  disabled: loading.value,
                  class: "flex-1 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors disabled:opacity-50"
                }, toDisplayString(loading.value ? "Saving..." : isEditing.value ? "Update Section" : "Create Section"), 9, _hoisted_32),
                createBaseVNode("button", {
                  type: "button",
                  onClick: closeModal,
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
