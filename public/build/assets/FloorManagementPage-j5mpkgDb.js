import { d as defineComponent, r as ref, E as watch, o as onMounted, a as createElementBlock, b as createBaseVNode, f as createVNode, j as createCommentVNode, F as Fragment, k as renderList, t as toDisplayString, u as unref, z as withModifiers, p as withDirectives, v as vModelText, D as vModelSelect, e as createStaticVNode, B as vModelCheckbox, n as normalizeClass, l as openBlock } from "./main-D4odWxzi.js";
import { s as superadminAPI } from "./superadminApi-BOvsQyYv.js";
import { _ as _sfc_main$1 } from "./LibrarySelector.vue_vue_type_script_setup_true_lang-YqbukitK.js";
import { X } from "./x-C9--2uVT.js";
/* empty css               */
import "./library-BS-z0puv.js";
import "./createLucideIcon-BgnXjtcZ.js";
const _hoisted_1 = { class: "space-y-6" };
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
const _hoisted_13 = { class: "px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800 capitalize" };
const _hoisted_14 = { class: "px-6 py-4 whitespace-nowrap" };
const _hoisted_15 = { class: "text-sm text-gray-500" };
const _hoisted_16 = { class: "px-6 py-4 whitespace-nowrap" };
const _hoisted_17 = { class: "px-6 py-4 whitespace-nowrap text-right text-sm font-medium" };
const _hoisted_18 = ["onClick"];
const _hoisted_19 = ["onClick"];
const _hoisted_20 = { key: 0 };
const _hoisted_21 = {
  key: 1,
  class: "bg-white rounded-xl shadow-sm border border-gray-200 p-12 text-center text-gray-500"
};
const _hoisted_22 = {
  key: 2,
  class: "fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
};
const _hoisted_23 = { class: "bg-white rounded-xl shadow-xl max-w-md w-full mx-4 p-6" };
const _hoisted_24 = { class: "flex items-center justify-between mb-4" };
const _hoisted_25 = { class: "text-xl font-bold text-gray-900" };
const _hoisted_26 = { class: "grid grid-cols-2 gap-4" };
const _hoisted_27 = {
  key: 0,
  class: "mt-1 text-xs text-gray-500"
};
const _hoisted_28 = { class: "flex items-center space-x-2" };
const _hoisted_29 = { class: "flex items-center space-x-3 pt-4" };
const _hoisted_30 = ["disabled"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "FloorManagementPage",
  setup(__props) {
    const selectedLibraryId = ref(null);
    const floors = ref([]);
    const showModal = ref(false);
    const isEditing = ref(false);
    const loading = ref(false);
    const form = ref({
      id: null,
      name: "",
      level: 0,
      description: "",
      type: "mixed",
      capacity: 0,
      map_image: null,
      map_image_url: "",
      is_active: true
    });
    const fetchFloors = async () => {
      if (!selectedLibraryId.value) {
        floors.value = [];
        return;
      }
      try {
        const data = await superadminAPI.getFloors(selectedLibraryId.value);
        floors.value = data;
      } catch (error) {
        console.error("Error fetching floors:", error);
      }
    };
    watch(selectedLibraryId, fetchFloors);
    const handleFileUpload = (event) => {
      const target = event.target;
      if (target.files && target.files[0]) {
        form.value.map_image = target.files[0];
      }
    };
    const openCreateModal = () => {
      isEditing.value = false;
      form.value = {
        id: null,
        name: "",
        level: 0,
        description: "",
        type: "mixed",
        capacity: 0,
        map_image: null,
        map_image_url: "",
        is_active: true
      };
      showModal.value = true;
    };
    const editFloor = (floor) => {
      isEditing.value = true;
      form.value = {
        id: floor.id,
        name: floor.name,
        level: floor.level,
        description: floor.description,
        type: floor.type || "mixed",
        capacity: floor.capacity || 0,
        map_image: null,
        map_image_url: floor.map_image,
        is_active: floor.is_active
      };
      showModal.value = true;
    };
    const closeModal = () => {
      showModal.value = false;
    };
    const saveFloor = async () => {
      if (!selectedLibraryId.value) return;
      loading.value = true;
      try {
        const formData = new FormData();
        formData.append("name", form.value.name);
        formData.append("level", form.value.level.toString());
        formData.append("description", form.value.description || "");
        formData.append("type", form.value.type);
        formData.append("capacity", form.value.capacity.toString());
        formData.append("is_active", form.value.is_active ? "1" : "0");
        if (form.value.map_image) {
          formData.append("map_image", form.value.map_image);
        }
        if (isEditing.value && form.value.id) {
          await superadminAPI.updateFloor(selectedLibraryId.value, form.value.id, formData);
        } else {
          await superadminAPI.createFloor(selectedLibraryId.value, formData);
        }
        await fetchFloors();
        closeModal();
      } catch (error) {
        console.error("Error saving floor:", error);
      } finally {
        loading.value = false;
      }
    };
    const confirmDelete = async (floor) => {
      if (!selectedLibraryId.value) return;
      if (confirm("Are you sure you want to delete this floor?")) {
        try {
          await superadminAPI.deleteFloor(selectedLibraryId.value, floor.id);
          await fetchFloors();
        } catch (error) {
          console.error("Error deleting floor:", error);
        }
      }
    };
    onMounted(() => {
      fetchFloors();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          _cache[8] || (_cache[8] = createBaseVNode("div", null, [
            createBaseVNode("h1", { class: "text-3xl font-bold text-gray-900" }, "Floor Management"),
            createBaseVNode("p", { class: "text-gray-600 mt-1" }, "Manage library floors and levels across all libraries")
          ], -1)),
          selectedLibraryId.value ? (openBlock(), createElementBlock("button", {
            key: 0,
            onClick: openCreateModal,
            class: "px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg hover:shadow-lg transition-all flex items-center space-x-2"
          }, [..._cache[7] || (_cache[7] = [
            createBaseVNode("span", { class: "text-sm font-medium" }, "Add Floor", -1)
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
                  createBaseVNode("th", { class: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" }, "Level"),
                  createBaseVNode("th", { class: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" }, "Type"),
                  createBaseVNode("th", { class: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" }, "Capacity"),
                  createBaseVNode("th", { class: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" }, "Status"),
                  createBaseVNode("th", { class: "px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider" }, "Actions")
                ])
              ], -1)),
              createBaseVNode("tbody", _hoisted_6, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(floors.value, (floor) => {
                  return openBlock(), createElementBlock("tr", {
                    key: floor.id,
                    class: "hover:bg-gray-50"
                  }, [
                    createBaseVNode("td", _hoisted_7, [
                      createBaseVNode("div", _hoisted_8, toDisplayString(floor.name), 1),
                      createBaseVNode("div", _hoisted_9, toDisplayString(floor.description || "No description"), 1)
                    ]),
                    createBaseVNode("td", _hoisted_10, [
                      createBaseVNode("div", _hoisted_11, toDisplayString(floor.level), 1)
                    ]),
                    createBaseVNode("td", _hoisted_12, [
                      createBaseVNode("span", _hoisted_13, toDisplayString((floor.type || "mixed").replace("_", " ")), 1)
                    ]),
                    createBaseVNode("td", _hoisted_14, [
                      createBaseVNode("div", _hoisted_15, toDisplayString(floor.capacity || 0) + " seats", 1)
                    ]),
                    createBaseVNode("td", _hoisted_16, [
                      createBaseVNode("span", {
                        class: normalizeClass([
                          "px-2 inline-flex text-xs leading-5 font-semibold rounded-full",
                          floor.is_active ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                        ])
                      }, toDisplayString(floor.is_active ? "Active" : "Inactive"), 3)
                    ]),
                    createBaseVNode("td", _hoisted_17, [
                      createBaseVNode("button", {
                        onClick: ($event) => editFloor(floor),
                        class: "text-indigo-600 hover:text-indigo-900 mr-4"
                      }, "Edit", 8, _hoisted_18),
                      createBaseVNode("button", {
                        onClick: ($event) => confirmDelete(floor),
                        class: "text-red-600 hover:text-red-900"
                      }, "Delete", 8, _hoisted_19)
                    ])
                  ]);
                }), 128)),
                floors.value.length === 0 ? (openBlock(), createElementBlock("tr", _hoisted_20, [..._cache[9] || (_cache[9] = [
                  createBaseVNode("td", {
                    colspan: "6",
                    class: "px-6 py-12 text-center text-gray-500"
                  }, " No floors found for this library. Add a new floor to get started. ", -1)
                ])])) : createCommentVNode("", true)
              ])
            ])
          ])
        ])) : (openBlock(), createElementBlock("div", _hoisted_21, " Please select a library to manage its floors. ")),
        showModal.value ? (openBlock(), createElementBlock("div", _hoisted_22, [
          createBaseVNode("div", _hoisted_23, [
            createBaseVNode("div", _hoisted_24, [
              createBaseVNode("h3", _hoisted_25, toDisplayString(isEditing.value ? "Edit Floor" : "Add New Floor"), 1),
              createBaseVNode("button", {
                onClick: closeModal,
                class: "p-2 hover:bg-gray-100 rounded-lg transition-colors"
              }, [
                createVNode(unref(X), { class: "w-5 h-5" })
              ])
            ]),
            createBaseVNode("form", {
              onSubmit: withModifiers(saveFloor, ["prevent"]),
              class: "space-y-4"
            }, [
              createBaseVNode("div", null, [
                _cache[11] || (_cache[11] = createBaseVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Floor Name", -1)),
                withDirectives(createBaseVNode("input", {
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => form.value.name = $event),
                  type: "text",
                  required: "",
                  class: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500",
                  placeholder: "e.g. First Floor"
                }, null, 512), [
                  [vModelText, form.value.name]
                ])
              ]),
              createBaseVNode("div", _hoisted_26, [
                createBaseVNode("div", null, [
                  _cache[12] || (_cache[12] = createBaseVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Level Number", -1)),
                  withDirectives(createBaseVNode("input", {
                    "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => form.value.level = $event),
                    type: "number",
                    required: "",
                    class: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500",
                    placeholder: "e.g. 1"
                  }, null, 512), [
                    [
                      vModelText,
                      form.value.level,
                      void 0,
                      { number: true }
                    ]
                  ])
                ]),
                createBaseVNode("div", null, [
                  _cache[13] || (_cache[13] = createBaseVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Capacity", -1)),
                  withDirectives(createBaseVNode("input", {
                    "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => form.value.capacity = $event),
                    type: "number",
                    class: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500",
                    placeholder: "e.g. 50"
                  }, null, 512), [
                    [
                      vModelText,
                      form.value.capacity,
                      void 0,
                      { number: true }
                    ]
                  ])
                ])
              ]),
              createBaseVNode("div", null, [
                _cache[15] || (_cache[15] = createBaseVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Floor Type", -1)),
                withDirectives(createBaseVNode("select", {
                  "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => form.value.type = $event),
                  class: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                }, [..._cache[14] || (_cache[14] = [
                  createStaticVNode('<option value="mixed">Mixed</option><option value="quiet_zone">Quiet Zone</option><option value="discussion_area">Discussion Area</option><option value="girls_only">Girls Only</option><option value="boys_only">Boys Only</option>', 5)
                ])], 512), [
                  [vModelSelect, form.value.type]
                ])
              ]),
              createBaseVNode("div", null, [
                _cache[16] || (_cache[16] = createBaseVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Description", -1)),
                withDirectives(createBaseVNode("textarea", {
                  "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => form.value.description = $event),
                  rows: "3",
                  class: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500",
                  placeholder: "Optional description..."
                }, null, 512), [
                  [vModelText, form.value.description]
                ])
              ]),
              createBaseVNode("div", null, [
                _cache[17] || (_cache[17] = createBaseVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Map Image", -1)),
                createBaseVNode("input", {
                  type: "file",
                  onChange: handleFileUpload,
                  accept: "image/*",
                  class: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                }, null, 32),
                form.value.map_image_url ? (openBlock(), createElementBlock("p", _hoisted_27, "Current: " + toDisplayString(form.value.map_image_url), 1)) : createCommentVNode("", true)
              ]),
              createBaseVNode("div", _hoisted_28, [
                withDirectives(createBaseVNode("input", {
                  "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => form.value.is_active = $event),
                  type: "checkbox",
                  id: "is_active",
                  class: "w-4 h-4 text-purple-600 rounded focus:ring-purple-500"
                }, null, 512), [
                  [vModelCheckbox, form.value.is_active]
                ]),
                _cache[18] || (_cache[18] = createBaseVNode("label", {
                  for: "is_active",
                  class: "text-sm font-medium text-gray-700"
                }, "Active", -1))
              ]),
              createBaseVNode("div", _hoisted_29, [
                createBaseVNode("button", {
                  type: "submit",
                  disabled: loading.value,
                  class: "flex-1 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors disabled:opacity-50"
                }, toDisplayString(loading.value ? "Saving..." : isEditing.value ? "Update Floor" : "Create Floor"), 9, _hoisted_30),
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
