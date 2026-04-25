import { d as defineComponent, r as ref, H as watch, c as createElementBlock, m as createCommentVNode, b as createBaseVNode, t as toDisplayString, f as createVNode, u as unref, s as withModifiers, v as withDirectives, x as vModelText, B as vModelSelect, F as Fragment, h as renderList, j as createTextVNode, n as normalizeClass, Q as librarianAPI, i as openBlock, p as useAuth, D as computed, o as onMounted, e as createStaticVNode, z as vModelCheckbox } from "./main-DCJXrkf-.js";
import { X } from "./x-BkNPvJ70.js";
/* empty css               */
import "./createLucideIcon-CDsoUk2K.js";
const _hoisted_1$1 = {
  key: 0,
  class: "fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
};
const _hoisted_2$1 = { class: "bg-white rounded-xl shadow-xl max-w-4xl w-full mx-4 p-6 max-h-[90vh] overflow-y-auto" };
const _hoisted_3$1 = { class: "flex items-center justify-between mb-6" };
const _hoisted_4$1 = { class: "text-xl font-bold text-gray-900" };
const _hoisted_5$1 = { class: "bg-gray-50 rounded-lg p-4 mb-6" };
const _hoisted_6$1 = { class: "text-sm font-bold text-gray-700 mb-4" };
const _hoisted_7$1 = ["disabled"];
const _hoisted_8$1 = { class: "flex items-end space-x-2" };
const _hoisted_9$1 = ["disabled"];
const _hoisted_10$1 = { class: "md:col-span-3" };
const _hoisted_11$1 = { class: "overflow-x-auto" };
const _hoisted_12$1 = { class: "min-w-full divide-y divide-gray-200" };
const _hoisted_13$1 = { class: "bg-white divide-y divide-gray-200" };
const _hoisted_14$1 = { class: "px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900" };
const _hoisted_15$1 = { class: "text-xs text-gray-500" };
const _hoisted_16$1 = { class: "px-4 py-4 whitespace-nowrap text-sm text-gray-500" };
const _hoisted_17$1 = { class: "text-xs text-green-600" };
const _hoisted_18$1 = { class: "px-4 py-4 whitespace-nowrap" };
const _hoisted_19$1 = { class: "px-4 py-4 whitespace-nowrap" };
const _hoisted_20$1 = { class: "px-4 py-4 whitespace-nowrap text-right text-sm font-medium" };
const _hoisted_21$1 = ["onClick"];
const _hoisted_22$1 = ["onClick"];
const _hoisted_23$1 = { key: 0 };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "SectionManagementModal",
  props: {
    isOpen: { type: Boolean },
    floor: {}
  },
  emits: ["close", "updated"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const sections = ref([]);
    const loading = ref(false);
    const isEditing = ref(false);
    const form = ref({
      id: null,
      name: "",
      gender: "mixed",
      total_seats: 0,
      description: "",
      is_active: true
    });
    const fetchSections = async () => {
      if (!props.floor) return;
      try {
        const data = await librarianAPI.getSections(props.floor.id);
        sections.value = data;
      } catch (error) {
        console.error("Error fetching sections:", error);
      }
    };
    const resetForm = () => {
      form.value = {
        id: null,
        name: "",
        gender: "mixed",
        total_seats: 0,
        description: "",
        is_active: true
      };
      isEditing.value = false;
    };
    const editSection = (section) => {
      isEditing.value = true;
      form.value = {
        id: section.id,
        name: section.name,
        gender: section.gender || "mixed",
        total_seats: section.total_seats,
        description: section.description || "",
        is_active: section.is_active
      };
    };
    const saveSection = async () => {
      loading.value = true;
      try {
        const payload = {
          ...form.value,
          floor_id: props.floor.id
        };
        if (isEditing.value && form.value.id) {
          await librarianAPI.updateSection(form.value.id, payload);
        } else {
          await librarianAPI.createSection(payload);
        }
        await fetchSections();
        resetForm();
        emit("updated");
      } catch (error) {
        console.error("Error saving section:", error);
      } finally {
        loading.value = false;
      }
    };
    const deleteSection = async (id) => {
      if (confirm("Are you sure? This will also delete all seats in this section.")) {
        try {
          await librarianAPI.deleteSection(id);
          await fetchSections();
          emit("updated");
        } catch (error) {
          console.error("Error deleting section:", error);
        }
      }
    };
    watch(() => props.isOpen, (newVal) => {
      if (newVal) {
        fetchSections();
        resetForm();
      }
    });
    return (_ctx, _cache) => {
      return __props.isOpen ? (openBlock(), createElementBlock("div", _hoisted_1$1, [
        createBaseVNode("div", _hoisted_2$1, [
          createBaseVNode("div", _hoisted_3$1, [
            createBaseVNode("div", null, [
              createBaseVNode("h3", _hoisted_4$1, "Sections for " + toDisplayString(__props.floor?.name), 1),
              _cache[5] || (_cache[5] = createBaseVNode("p", { class: "text-sm text-gray-600" }, "Manage seating sections for this floor", -1))
            ]),
            createBaseVNode("button", {
              onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("close")),
              class: "p-2 hover:bg-gray-100 rounded-lg transition-colors"
            }, [
              createVNode(unref(X), { class: "w-5 h-5 text-gray-500" })
            ])
          ]),
          createBaseVNode("div", _hoisted_5$1, [
            createBaseVNode("h4", _hoisted_6$1, toDisplayString(isEditing.value ? "Edit Section" : "Add New Section"), 1),
            createBaseVNode("form", {
              onSubmit: withModifiers(saveSection, ["prevent"]),
              class: "grid grid-cols-1 md:grid-cols-3 gap-4"
            }, [
              createBaseVNode("div", null, [
                _cache[6] || (_cache[6] = createBaseVNode("label", { class: "block text-xs font-medium text-gray-700 mb-1" }, "Section Name", -1)),
                withDirectives(createBaseVNode("input", {
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => form.value.name = $event),
                  type: "text",
                  required: "",
                  class: "w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-purple-500",
                  placeholder: "e.g. Zone A"
                }, null, 512), [
                  [vModelText, form.value.name]
                ])
              ]),
              createBaseVNode("div", null, [
                _cache[7] || (_cache[7] = createBaseVNode("label", { class: "block text-xs font-medium text-gray-700 mb-1" }, "Total Seats", -1)),
                withDirectives(createBaseVNode("input", {
                  "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => form.value.total_seats = $event),
                  type: "number",
                  required: "",
                  disabled: isEditing.value,
                  class: "w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-purple-500 disabled:bg-gray-100",
                  placeholder: "e.g. 10"
                }, null, 8, _hoisted_7$1), [
                  [
                    vModelText,
                    form.value.total_seats,
                    void 0,
                    { number: true }
                  ]
                ])
              ]),
              createBaseVNode("div", null, [
                _cache[9] || (_cache[9] = createBaseVNode("label", { class: "block text-xs font-medium text-gray-700 mb-1" }, "Gender Restriction", -1)),
                withDirectives(createBaseVNode("select", {
                  "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => form.value.gender = $event),
                  required: "",
                  class: "w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-purple-500"
                }, [..._cache[8] || (_cache[8] = [
                  createBaseVNode("option", { value: "mixed" }, "Mixed (All)", -1),
                  createBaseVNode("option", { value: "male" }, "Male Only", -1),
                  createBaseVNode("option", { value: "female" }, "Female Only", -1)
                ])], 512), [
                  [vModelSelect, form.value.gender]
                ])
              ]),
              createBaseVNode("div", _hoisted_8$1, [
                createBaseVNode("button", {
                  type: "submit",
                  disabled: loading.value,
                  class: "flex-1 px-4 py-2 bg-purple-600 text-white rounded-lg text-sm font-medium hover:bg-purple-700 transition-colors disabled:opacity-50"
                }, toDisplayString(loading.value ? "Saving..." : isEditing.value ? "Update" : "Add Section"), 9, _hoisted_9$1),
                isEditing.value ? (openBlock(), createElementBlock("button", {
                  key: 0,
                  type: "button",
                  onClick: resetForm,
                  class: "px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors"
                }, " Cancel ")) : createCommentVNode("", true)
              ]),
              createBaseVNode("div", _hoisted_10$1, [
                _cache[10] || (_cache[10] = createBaseVNode("label", { class: "block text-xs font-medium text-gray-700 mb-1" }, "Description (Optional)", -1)),
                withDirectives(createBaseVNode("input", {
                  "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => form.value.description = $event),
                  type: "text",
                  class: "w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-purple-500",
                  placeholder: "e.g. Near the window"
                }, null, 512), [
                  [vModelText, form.value.description]
                ])
              ])
            ], 32)
          ]),
          createBaseVNode("div", _hoisted_11$1, [
            createBaseVNode("table", _hoisted_12$1, [
              _cache[12] || (_cache[12] = createBaseVNode("thead", { class: "bg-gray-50" }, [
                createBaseVNode("tr", null, [
                  createBaseVNode("th", { class: "px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase" }, "Name"),
                  createBaseVNode("th", { class: "px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase" }, "Seats"),
                  createBaseVNode("th", { class: "px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase" }, "Gender"),
                  createBaseVNode("th", { class: "px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase" }, "Status"),
                  createBaseVNode("th", { class: "px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase" }, "Actions")
                ])
              ], -1)),
              createBaseVNode("tbody", _hoisted_13$1, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(sections.value, (section) => {
                  return openBlock(), createElementBlock("tr", {
                    key: section.id,
                    class: "hover:bg-gray-50"
                  }, [
                    createBaseVNode("td", _hoisted_14$1, [
                      createTextVNode(toDisplayString(section.name) + " ", 1),
                      createBaseVNode("div", _hoisted_15$1, toDisplayString(section.description), 1)
                    ]),
                    createBaseVNode("td", _hoisted_16$1, [
                      createTextVNode(toDisplayString(section.total_seats) + " total ", 1),
                      createBaseVNode("div", _hoisted_17$1, toDisplayString(section.available_seats) + " available", 1)
                    ]),
                    createBaseVNode("td", _hoisted_18$1, [
                      createBaseVNode("span", {
                        class: normalizeClass([
                          "px-2 py-1 text-xs font-semibold rounded-full capitalize",
                          section.gender === "male" ? "bg-blue-100 text-blue-800" : section.gender === "female" ? "bg-pink-100 text-pink-800" : "bg-gray-100 text-gray-800"
                        ])
                      }, toDisplayString(section.gender || "mixed"), 3)
                    ]),
                    createBaseVNode("td", _hoisted_19$1, [
                      createBaseVNode("span", {
                        class: normalizeClass([
                          "px-2 py-1 text-xs font-semibold rounded-full",
                          section.is_active ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                        ])
                      }, toDisplayString(section.is_active ? "Active" : "Inactive"), 3)
                    ]),
                    createBaseVNode("td", _hoisted_20$1, [
                      createBaseVNode("button", {
                        onClick: ($event) => editSection(section),
                        class: "text-indigo-600 hover:text-indigo-900 mr-3"
                      }, "Edit", 8, _hoisted_21$1),
                      createBaseVNode("button", {
                        onClick: ($event) => deleteSection(section.id),
                        class: "text-red-600 hover:text-red-900"
                      }, "Delete", 8, _hoisted_22$1)
                    ])
                  ]);
                }), 128)),
                sections.value.length === 0 ? (openBlock(), createElementBlock("tr", _hoisted_23$1, [..._cache[11] || (_cache[11] = [
                  createBaseVNode("td", {
                    colspan: "4",
                    class: "px-4 py-8 text-center text-gray-500 text-sm"
                  }, " No sections found for this floor. ", -1)
                ])])) : createCommentVNode("", true)
              ])
            ])
          ])
        ])
      ])) : createCommentVNode("", true);
    };
  }
});
const _hoisted_1 = { class: "p-6 space-y-6" };
const _hoisted_2 = { class: "bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden" };
const _hoisted_3 = { class: "overflow-x-auto" };
const _hoisted_4 = { class: "min-w-full divide-y divide-gray-200" };
const _hoisted_5 = { class: "bg-white divide-y divide-gray-200" };
const _hoisted_6 = { class: "px-6 py-4 whitespace-nowrap" };
const _hoisted_7 = { class: "text-sm font-medium text-gray-900" };
const _hoisted_8 = { class: "text-xs text-gray-500" };
const _hoisted_9 = { class: "px-6 py-4 whitespace-nowrap" };
const _hoisted_10 = { class: "text-sm text-gray-500" };
const _hoisted_11 = { class: "px-6 py-4 whitespace-nowrap" };
const _hoisted_12 = { class: "px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800 capitalize" };
const _hoisted_13 = { class: "px-6 py-4 whitespace-nowrap" };
const _hoisted_14 = { class: "text-sm text-gray-500" };
const _hoisted_15 = { class: "px-6 py-4 whitespace-nowrap" };
const _hoisted_16 = { class: "px-6 py-4 whitespace-nowrap text-right text-sm font-medium" };
const _hoisted_17 = ["onClick"];
const _hoisted_18 = ["onClick"];
const _hoisted_19 = { key: 0 };
const _hoisted_20 = {
  key: 0,
  class: "fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
};
const _hoisted_21 = { class: "bg-white rounded-xl shadow-xl max-w-md w-full mx-4 p-6" };
const _hoisted_22 = { class: "flex items-center justify-between mb-4" };
const _hoisted_23 = { class: "text-xl font-bold text-gray-900" };
const _hoisted_24 = { class: "grid grid-cols-2 gap-4" };
const _hoisted_25 = {
  key: 0,
  class: "mt-1 text-xs text-gray-500"
};
const _hoisted_26 = { class: "flex items-center space-x-2" };
const _hoisted_27 = { class: "flex items-center space-x-3 pt-4" };
const _hoisted_28 = ["disabled"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "FloorManagementPage",
  setup(__props) {
    const { user } = useAuth();
    const floors = ref([]);
    const showModal = ref(false);
    const showSectionsModal = ref(false);
    const selectedFloor = ref(null);
    const isEditing = ref(false);
    const loading = ref(false);
    computed(() => user.value?.library_id || 1);
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
      try {
        const data = await librarianAPI.getFloors();
        floors.value = data;
      } catch (error) {
        console.error("Error fetching floors:", error);
      }
    };
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
          await librarianAPI.updateFloor(form.value.id, formData);
        } else {
          await librarianAPI.createFloor(formData);
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
      if (confirm("Are you sure you want to delete this floor?")) {
        try {
          await librarianAPI.deleteFloor(floor.id);
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
        createBaseVNode("div", { class: "flex items-center justify-between" }, [
          _cache[8] || (_cache[8] = createBaseVNode("div", null, [
            createBaseVNode("h1", { class: "text-3xl font-bold text-gray-900" }, "Floor Management"),
            createBaseVNode("p", { class: "text-gray-600 mt-1" }, "Manage library floors and levels")
          ], -1)),
          createBaseVNode("button", {
            onClick: openCreateModal,
            class: "px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg hover:shadow-lg transition-all flex items-center space-x-2"
          }, [..._cache[7] || (_cache[7] = [
            createBaseVNode("span", { class: "text-sm font-medium" }, "Add Floor", -1)
          ])])
        ]),
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("div", _hoisted_3, [
            createBaseVNode("table", _hoisted_4, [
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
              createBaseVNode("tbody", _hoisted_5, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(floors.value, (floor) => {
                  return openBlock(), createElementBlock("tr", {
                    key: floor.id,
                    class: "hover:bg-gray-50"
                  }, [
                    createBaseVNode("td", _hoisted_6, [
                      createBaseVNode("div", _hoisted_7, toDisplayString(floor.name), 1),
                      createBaseVNode("div", _hoisted_8, toDisplayString(floor.description || "No description"), 1)
                    ]),
                    createBaseVNode("td", _hoisted_9, [
                      createBaseVNode("div", _hoisted_10, toDisplayString(floor.level), 1)
                    ]),
                    createBaseVNode("td", _hoisted_11, [
                      createBaseVNode("span", _hoisted_12, toDisplayString((floor.type || "mixed").replace("_", " ")), 1)
                    ]),
                    createBaseVNode("td", _hoisted_13, [
                      createBaseVNode("div", _hoisted_14, toDisplayString(floor.capacity || 0) + " seats", 1)
                    ]),
                    createBaseVNode("td", _hoisted_15, [
                      createBaseVNode("span", {
                        class: normalizeClass([
                          "px-2 inline-flex text-xs leading-5 font-semibold rounded-full",
                          floor.is_active ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                        ])
                      }, toDisplayString(floor.is_active ? "Active" : "Inactive"), 3)
                    ]),
                    createBaseVNode("td", _hoisted_16, [
                      createBaseVNode("button", {
                        onClick: ($event) => editFloor(floor),
                        class: "text-indigo-600 hover:text-indigo-900 mr-4"
                      }, "Edit", 8, _hoisted_17),
                      createBaseVNode("button", {
                        onClick: ($event) => confirmDelete(floor),
                        class: "text-red-600 hover:text-red-900"
                      }, "Delete", 8, _hoisted_18)
                    ])
                  ]);
                }), 128)),
                floors.value.length === 0 ? (openBlock(), createElementBlock("tr", _hoisted_19, [..._cache[9] || (_cache[9] = [
                  createBaseVNode("td", {
                    colspan: "6",
                    class: "px-6 py-12 text-center text-gray-500"
                  }, " No floors found. Add a new floor to get started. ", -1)
                ])])) : createCommentVNode("", true)
              ])
            ])
          ])
        ]),
        showModal.value ? (openBlock(), createElementBlock("div", _hoisted_20, [
          createBaseVNode("div", _hoisted_21, [
            createBaseVNode("div", _hoisted_22, [
              createBaseVNode("h3", _hoisted_23, toDisplayString(isEditing.value ? "Edit Floor" : "Add New Floor"), 1),
              createBaseVNode("button", {
                onClick: closeModal,
                class: "p-2 hover:bg-gray-100 rounded-lg transition-colors"
              }, " Close ")
            ]),
            createBaseVNode("form", {
              onSubmit: withModifiers(saveFloor, ["prevent"]),
              class: "space-y-4"
            }, [
              createBaseVNode("div", null, [
                _cache[11] || (_cache[11] = createBaseVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Floor Name", -1)),
                withDirectives(createBaseVNode("input", {
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => form.value.name = $event),
                  type: "text",
                  required: "",
                  class: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500",
                  placeholder: "e.g. First Floor"
                }, null, 512), [
                  [vModelText, form.value.name]
                ])
              ]),
              createBaseVNode("div", _hoisted_24, [
                createBaseVNode("div", null, [
                  _cache[12] || (_cache[12] = createBaseVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Level Number", -1)),
                  withDirectives(createBaseVNode("input", {
                    "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => form.value.level = $event),
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
                    "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => form.value.capacity = $event),
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
                  "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => form.value.type = $event),
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
                  "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => form.value.description = $event),
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
                form.value.map_image_url ? (openBlock(), createElementBlock("p", _hoisted_25, "Current: " + toDisplayString(form.value.map_image_url), 1)) : createCommentVNode("", true)
              ]),
              createBaseVNode("div", _hoisted_26, [
                withDirectives(createBaseVNode("input", {
                  "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => form.value.is_active = $event),
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
              createBaseVNode("div", _hoisted_27, [
                createBaseVNode("button", {
                  type: "submit",
                  disabled: loading.value,
                  class: "flex-1 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors disabled:opacity-50"
                }, toDisplayString(loading.value ? "Saving..." : isEditing.value ? "Update Floor" : "Create Floor"), 9, _hoisted_28),
                createBaseVNode("button", {
                  type: "button",
                  onClick: closeModal,
                  class: "px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                }, " Cancel ")
              ])
            ], 32)
          ])
        ])) : createCommentVNode("", true),
        createVNode(_sfc_main$1, {
          "is-open": showSectionsModal.value,
          floor: selectedFloor.value,
          onClose: _cache[6] || (_cache[6] = ($event) => showSectionsModal.value = false),
          onUpdated: fetchFloors
        }, null, 8, ["is-open", "floor"])
      ]);
    };
  }
});
export {
  _sfc_main as default
};
