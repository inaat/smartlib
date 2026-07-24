import { d as defineComponent, r as ref, E as watch, a as createElementBlock, j as createCommentVNode, z as withModifiers, b as createBaseVNode, t as toDisplayString, f as createVNode, u as unref, p as withDirectives, v as vModelText, D as vModelSelect, B as vModelCheckbox, F as Fragment, k as renderList, n as normalizeClass, i as createTextVNode, O as librarianAPI, l as openBlock, x as useAuth, o as onMounted, e as createStaticVNode } from "./main-CP29_5Dg.js";
import { u as useSwal } from "./useSwal-pQW_XkRe.js";
import { X } from "./x-BFxoMqPZ.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import { P as Plus } from "./plus-mxaUQNm6.js";
import { B as Building2 } from "./building-2-BCZNb8vB.js";
/* empty css               */
import "./createLucideIcon-DTPudzWg.js";
const _hoisted_1$1 = { class: "bg-white rounded-xl shadow-xl max-w-4xl w-full mx-4 overflow-hidden max-h-[90vh] flex flex-col border border-gray-200 animate-in fade-in zoom-in duration-200 font-outfit text-slate-700" };
const _hoisted_2$1 = { class: "p-6 border-b border-slate-150 flex items-center justify-between text-left" };
const _hoisted_3$1 = { class: "text-base font-bold text-slate-800" };
const _hoisted_4$1 = { class: "p-6 overflow-y-auto space-y-6 flex-1 text-left" };
const _hoisted_5$1 = { class: "bg-slate-50/50 rounded-xl p-5 border border-slate-100" };
const _hoisted_6$1 = { class: "text-xs font-bold text-slate-700 uppercase tracking-wider mb-4" };
const _hoisted_7$1 = { class: "grid grid-cols-1 md:grid-cols-3 gap-4" };
const _hoisted_8$1 = ["disabled"];
const _hoisted_9$1 = { class: "flex items-center justify-between pt-2" };
const _hoisted_10$1 = { class: "flex items-center space-x-2" };
const _hoisted_11$1 = { class: "flex items-center space-x-2" };
const _hoisted_12$1 = ["disabled"];
const _hoisted_13$1 = { class: "overflow-x-auto border border-slate-100 rounded-xl" };
const _hoisted_14$1 = { class: "min-w-full divide-y divide-slate-100 text-xs" };
const _hoisted_15$1 = { class: "divide-y divide-slate-50" };
const _hoisted_16$1 = { class: "px-4 py-3" };
const _hoisted_17$1 = { class: "font-bold text-slate-800" };
const _hoisted_18$1 = { class: "text-[10px] text-slate-400 font-medium mt-0.5" };
const _hoisted_19$1 = { class: "px-4 py-3" };
const _hoisted_20$1 = { class: "font-bold text-slate-600" };
const _hoisted_21$1 = { class: "text-[10px] text-green-600 font-bold mt-0.5" };
const _hoisted_22$1 = { class: "px-4 py-3" };
const _hoisted_23$1 = { class: "px-4 py-3" };
const _hoisted_24$1 = { class: "px-4 py-3" };
const _hoisted_25$1 = { class: "px-4 py-3 text-right" };
const _hoisted_26$1 = { class: "flex items-center justify-end space-x-2" };
const _hoisted_27$1 = ["onClick"];
const _hoisted_28$1 = ["onClick"];
const _hoisted_29$1 = { key: 0 };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "SectionManagementModal",
  props: {
    isOpen: { type: Boolean },
    floor: {}
  },
  emits: ["close", "updated"],
  setup(__props, { emit: __emit }) {
    const { showConfirm, showSuccess, showError } = useSwal();
    const props = __props;
    const emit = __emit;
    const sections = ref([]);
    const loading = ref(false);
    const isEditing = ref(false);
    const form = ref({
      id: null,
      name: "",
      gender: "mixed",
      academic_level: "all",
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
        academic_level: "all",
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
        academic_level: section.academic_level || "all",
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
          showSuccess("Updated!", "Section updated successfully.");
        } else {
          await librarianAPI.createSection(payload);
          showSuccess("Created!", "New section added successfully.");
        }
        await fetchSections();
        resetForm();
        emit("updated");
      } catch (error) {
        console.error("Error saving section:", error);
        const message = error.response?.data?.message || "Failed to save section.";
        showError("Save Failed", message);
      } finally {
        loading.value = false;
      }
    };
    const deleteSection = async (id) => {
      if (!await showConfirm("Delete Section", "Are you sure you want to delete this section? This will delete all seats in this section.", "Yes, Delete")) return;
      try {
        await librarianAPI.deleteSection(id);
        showSuccess("Deleted!", "Section has been successfully deleted.");
        await fetchSections();
        emit("updated");
      } catch (error) {
        console.error("Error deleting section:", error);
        showError("Delete Failed", "Failed to delete section.");
      }
    };
    watch(() => props.isOpen, (newVal) => {
      if (newVal) {
        fetchSections();
        resetForm();
      }
    });
    return (_ctx, _cache) => {
      return __props.isOpen ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: "fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50",
        onClick: _cache[7] || (_cache[7] = withModifiers(($event) => _ctx.$emit("close"), ["self"]))
      }, [
        createBaseVNode("div", _hoisted_1$1, [
          createBaseVNode("div", _hoisted_2$1, [
            createBaseVNode("div", null, [
              createBaseVNode("h3", _hoisted_3$1, "Sections for " + toDisplayString(__props.floor?.name), 1),
              _cache[8] || (_cache[8] = createBaseVNode("p", { class: "text-[11px] text-slate-400 font-medium mt-0.5" }, "Manage seating zones and layouts for this floor", -1))
            ]),
            createBaseVNode("button", {
              onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("close")),
              class: "p-2 hover:bg-slate-50 rounded-lg transition-colors cursor-pointer text-slate-400"
            }, [
              createVNode(unref(X), { class: "w-4 h-4" })
            ])
          ]),
          createBaseVNode("div", _hoisted_4$1, [
            createBaseVNode("div", _hoisted_5$1, [
              createBaseVNode("h4", _hoisted_6$1, toDisplayString(isEditing.value ? "Edit Section Settings" : "Add New Section to Floor"), 1),
              createBaseVNode("form", {
                onSubmit: withModifiers(saveSection, ["prevent"]),
                class: "space-y-4"
              }, [
                createBaseVNode("div", _hoisted_7$1, [
                  createBaseVNode("div", null, [
                    _cache[9] || (_cache[9] = createBaseVNode("label", { class: "block text-[10px] font-semibold text-slate-400 mb-1.5 uppercase tracking-wider" }, "Section Name", -1)),
                    withDirectives(createBaseVNode("input", {
                      "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => form.value.name = $event),
                      type: "text",
                      required: "",
                      class: "w-full px-3 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-400 transition-all text-xs text-slate-700 font-medium bg-white",
                      placeholder: "e.g. Zone A"
                    }, null, 512), [
                      [vModelText, form.value.name]
                    ])
                  ]),
                  createBaseVNode("div", null, [
                    _cache[10] || (_cache[10] = createBaseVNode("label", { class: "block text-[10px] font-semibold text-slate-400 mb-1.5 uppercase tracking-wider" }, "Total Seats", -1)),
                    withDirectives(createBaseVNode("input", {
                      "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => form.value.total_seats = $event),
                      type: "number",
                      required: "",
                      disabled: isEditing.value,
                      class: "w-full px-3 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-400 transition-all text-xs text-slate-700 font-medium bg-white disabled:bg-slate-100/50 disabled:text-slate-400",
                      placeholder: "e.g. 10"
                    }, null, 8, _hoisted_8$1), [
                      [
                        vModelText,
                        form.value.total_seats,
                        void 0,
                        { number: true }
                      ]
                    ])
                  ]),
                  createBaseVNode("div", null, [
                    _cache[12] || (_cache[12] = createBaseVNode("label", { class: "block text-[10px] font-semibold text-slate-400 mb-1.5 uppercase tracking-wider" }, "Gender Restriction", -1)),
                    withDirectives(createBaseVNode("select", {
                      "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => form.value.gender = $event),
                      required: "",
                      class: "w-full px-3 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-400 transition-all text-xs text-slate-700 font-semibold bg-white cursor-pointer"
                    }, [..._cache[11] || (_cache[11] = [
                      createBaseVNode("option", { value: "mixed" }, "Mixed (All)", -1),
                      createBaseVNode("option", { value: "male" }, "Male Only", -1),
                      createBaseVNode("option", { value: "female" }, "Female Only", -1)
                    ])], 512), [
                      [vModelSelect, form.value.gender]
                    ])
                  ]),
                  createBaseVNode("div", null, [
                    _cache[14] || (_cache[14] = createBaseVNode("label", { class: "block text-[10px] font-semibold text-slate-400 mb-1.5 uppercase tracking-wider" }, "Academic Level", -1)),
                    withDirectives(createBaseVNode("select", {
                      "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => form.value.academic_level = $event),
                      required: "",
                      class: "w-full px-3 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-400 transition-all text-xs text-slate-700 font-semibold bg-white cursor-pointer"
                    }, [..._cache[13] || (_cache[13] = [
                      createBaseVNode("option", { value: "all" }, "Available for All", -1),
                      createBaseVNode("option", { value: "PRC" }, "PRC Students Only", -1),
                      createBaseVNode("option", { value: "CAF" }, "CAF Students Only", -1),
                      createBaseVNode("option", { value: "Final" }, "Final Year Students Only", -1)
                    ])], 512), [
                      [vModelSelect, form.value.academic_level]
                    ])
                  ])
                ]),
                createBaseVNode("div", null, [
                  _cache[15] || (_cache[15] = createBaseVNode("label", { class: "block text-[10px] font-semibold text-slate-400 mb-1.5 uppercase tracking-wider" }, "Description (Optional)", -1)),
                  withDirectives(createBaseVNode("input", {
                    "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => form.value.description = $event),
                    type: "text",
                    class: "w-full px-3 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-400 transition-all text-xs text-slate-700 font-medium bg-white",
                    placeholder: "e.g. Near the window, quiet area"
                  }, null, 512), [
                    [vModelText, form.value.description]
                  ])
                ]),
                createBaseVNode("div", _hoisted_9$1, [
                  createBaseVNode("div", _hoisted_10$1, [
                    withDirectives(createBaseVNode("input", {
                      "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => form.value.is_active = $event),
                      type: "checkbox",
                      id: "modal_is_active",
                      class: "rounded text-emerald-600 focus:ring-emerald-500 cursor-pointer"
                    }, null, 512), [
                      [vModelCheckbox, form.value.is_active]
                    ]),
                    _cache[16] || (_cache[16] = createBaseVNode("label", {
                      for: "modal_is_active",
                      class: "text-xs font-bold text-slate-500 cursor-pointer select-none"
                    }, "Mark Active", -1))
                  ]),
                  createBaseVNode("div", _hoisted_11$1, [
                    isEditing.value ? (openBlock(), createElementBlock("button", {
                      key: 0,
                      type: "button",
                      onClick: resetForm,
                      class: "px-4 py-2 border border-slate-200 text-slate-500 font-bold rounded-xl hover:bg-slate-50 transition-all text-xs cursor-pointer"
                    }, " Cancel Edit ")) : createCommentVNode("", true),
                    createBaseVNode("button", {
                      type: "submit",
                      disabled: loading.value,
                      class: "px-5 py-2 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl transition-all disabled:opacity-50 text-xs font-bold cursor-pointer"
                    }, toDisplayString(loading.value ? "Saving..." : isEditing.value ? "Update Section" : "Add Section"), 9, _hoisted_12$1)
                  ])
                ])
              ], 32)
            ]),
            createBaseVNode("div", _hoisted_13$1, [
              createBaseVNode("table", _hoisted_14$1, [
                _cache[18] || (_cache[18] = createBaseVNode("thead", null, [
                  createBaseVNode("tr", { class: "bg-slate-50/50 text-slate-400 font-bold uppercase tracking-wider border-b border-slate-100" }, [
                    createBaseVNode("th", { class: "px-4 py-3 text-left font-semibold" }, "Name details"),
                    createBaseVNode("th", { class: "px-4 py-3 text-left font-semibold" }, "Seat capacity"),
                    createBaseVNode("th", { class: "px-4 py-3 text-left font-semibold" }, "Gender Rule"),
                    createBaseVNode("th", { class: "px-4 py-3 text-left font-semibold" }, "Academic Level"),
                    createBaseVNode("th", { class: "px-4 py-3 text-left font-semibold" }, "Status"),
                    createBaseVNode("th", { class: "px-4 py-3 text-right font-semibold" }, "Actions")
                  ])
                ], -1)),
                createBaseVNode("tbody", _hoisted_15$1, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(sections.value, (section) => {
                    return openBlock(), createElementBlock("tr", {
                      key: section.id,
                      class: "hover:bg-slate-50/50 transition-colors"
                    }, [
                      createBaseVNode("td", _hoisted_16$1, [
                        createBaseVNode("div", _hoisted_17$1, toDisplayString(section.name), 1),
                        createBaseVNode("div", _hoisted_18$1, toDisplayString(section.description || "No description provided"), 1)
                      ]),
                      createBaseVNode("td", _hoisted_19$1, [
                        createBaseVNode("div", _hoisted_20$1, toDisplayString(section.total_seats) + " total", 1),
                        createBaseVNode("div", _hoisted_21$1, toDisplayString(section.available_seats) + " available", 1)
                      ]),
                      createBaseVNode("td", _hoisted_22$1, [
                        createBaseVNode("span", {
                          class: normalizeClass([
                            "px-2 py-0.5 rounded text-[9px] font-bold uppercase border",
                            section.gender === "male" ? "bg-blue-50 border-blue-100 text-blue-700" : section.gender === "female" ? "bg-pink-50 border-pink-100 text-pink-700" : "bg-emerald-50 border-emerald-100 text-emerald-700"
                          ])
                        }, toDisplayString(section.gender || "mixed"), 3)
                      ]),
                      createBaseVNode("td", _hoisted_23$1, [
                        createBaseVNode("span", {
                          class: normalizeClass([
                            "px-2 py-0.5 rounded text-[9px] font-bold uppercase border",
                            section.academic_level === "PRC" ? "bg-amber-50 border-amber-100 text-amber-700" : section.academic_level === "CAF" ? "bg-cyan-50 border-cyan-100 text-cyan-700" : section.academic_level === "Final" ? "bg-purple-50 border-purple-100 text-purple-700" : "bg-slate-50 border-slate-200 text-slate-600"
                          ])
                        }, toDisplayString(section.academic_level === "all" || !section.academic_level ? "All Levels" : section.academic_level), 3)
                      ]),
                      createBaseVNode("td", _hoisted_24$1, [
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
                      createBaseVNode("td", _hoisted_25$1, [
                        createBaseVNode("div", _hoisted_26$1, [
                          createBaseVNode("button", {
                            onClick: ($event) => editSection(section),
                            class: "px-2.5 py-1.5 text-emerald-700 bg-emerald-50 hover:bg-emerald-100 rounded-lg font-bold border border-emerald-100 cursor-pointer"
                          }, " Edit ", 8, _hoisted_27$1),
                          createBaseVNode("button", {
                            onClick: ($event) => deleteSection(section.id),
                            class: "px-2.5 py-1.5 text-red-600 bg-red-50 hover:bg-red-100 rounded-lg font-bold border border-red-100 cursor-pointer"
                          }, " Delete ", 8, _hoisted_28$1)
                        ])
                      ])
                    ]);
                  }), 128)),
                  sections.value.length === 0 ? (openBlock(), createElementBlock("tr", _hoisted_29$1, [..._cache[17] || (_cache[17] = [
                    createBaseVNode("td", {
                      colspan: "5",
                      class: "px-4 py-8 text-center text-slate-400 font-bold uppercase tracking-wider text-[10px]"
                    }, " No sections found for this floor layout. ", -1)
                  ])])) : createCommentVNode("", true)
                ])
              ])
            ])
          ])
        ])
      ])) : createCommentVNode("", true);
    };
  }
});
const SectionManagementModal = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-b71221bd"]]);
const _hoisted_1 = { class: "p-6 space-y-6 font-outfit text-slate-700" };
const _hoisted_2 = { class: "flex justify-end items-center mb-6" };
const _hoisted_3 = { class: "bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden text-left" };
const _hoisted_4 = { class: "overflow-x-auto" };
const _hoisted_5 = { class: "min-w-full divide-y divide-slate-100 text-xs" };
const _hoisted_6 = { class: "divide-y divide-slate-50" };
const _hoisted_7 = { class: "px-6 py-4" };
const _hoisted_8 = { class: "font-bold text-slate-800 text-sm" };
const _hoisted_9 = { class: "text-[11px] text-slate-400 font-medium mt-0.5" };
const _hoisted_10 = { class: "px-6 py-4 font-bold text-slate-600" };
const _hoisted_11 = { class: "px-6 py-4" };
const _hoisted_12 = { class: "px-2.5 py-0.5 rounded text-[10px] font-bold uppercase border bg-blue-50 border-blue-100 text-blue-700" };
const _hoisted_13 = { class: "px-6 py-4 font-bold text-slate-600" };
const _hoisted_14 = { class: "px-6 py-4" };
const _hoisted_15 = { class: "px-6 py-4 text-right" };
const _hoisted_16 = { class: "flex items-center justify-end space-x-2" };
const _hoisted_17 = ["onClick"];
const _hoisted_18 = ["onClick"];
const _hoisted_19 = ["onClick"];
const _hoisted_20 = { key: 0 };
const _hoisted_21 = {
  colspan: "6",
  class: "px-6 py-16 text-center"
};
const _hoisted_22 = { class: "bg-white rounded-xl shadow-xl max-w-md w-full mx-4 overflow-hidden border border-gray-200 animate-in fade-in zoom-in duration-200" };
const _hoisted_23 = { class: "p-6 border-b border-slate-150 flex items-center justify-between text-left" };
const _hoisted_24 = { class: "text-base font-bold text-slate-800" };
const _hoisted_25 = { class: "grid grid-cols-2 gap-4" };
const _hoisted_26 = {
  key: 0,
  class: "mt-1.5 text-[10px] text-slate-400 font-bold truncate"
};
const _hoisted_27 = { class: "flex items-center space-x-2 pt-1" };
const _hoisted_28 = { class: "flex items-center space-x-3 pt-4 border-t border-slate-100" };
const _hoisted_29 = ["disabled"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "FloorManagementPage",
  setup(__props) {
    const { showConfirm, showSuccess, showError } = useSwal();
    useAuth();
    const floors = ref([]);
    const showModal = ref(false);
    const showSectionsModal = ref(false);
    const selectedFloor = ref(null);
    const isEditing = ref(false);
    const loading = ref(false);
    const openSectionsModal = (floor) => {
      selectedFloor.value = floor;
      showSectionsModal.value = true;
    };
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
          showSuccess("Updated!", "Floor details updated successfully.");
        } else {
          await librarianAPI.createFloor(formData);
          showSuccess("Created!", "New floor created successfully.");
        }
        await fetchFloors();
        closeModal();
      } catch (error) {
        console.error("Error saving floor:", error);
        showError("Save Failed", "Failed to save floor details.");
      } finally {
        loading.value = false;
      }
    };
    const confirmDelete = async (floor) => {
      if (!await showConfirm("Delete Floor", `Are you sure you want to delete "${floor.name}"? This action cannot be undone.`, "Yes, Delete")) return;
      try {
        await librarianAPI.deleteFloor(floor.id);
        showSuccess("Deleted!", "Floor has been successfully deleted.");
        await fetchFloors();
      } catch (error) {
        console.error("Error deleting floor:", error);
        showError("Delete Failed", "Failed to delete floor.");
      }
    };
    onMounted(() => {
      fetchFloors();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("button", {
            onClick: openCreateModal,
            class: "px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl transition-colors flex items-center space-x-2 text-xs font-bold shadow-sm cursor-pointer"
          }, [
            createVNode(unref(Plus), { class: "w-4 h-4" }),
            _cache[7] || (_cache[7] = createBaseVNode("span", null, "Add Floor", -1))
          ])
        ]),
        createBaseVNode("div", _hoisted_3, [
          createBaseVNode("div", _hoisted_4, [
            createBaseVNode("table", _hoisted_5, [
              _cache[10] || (_cache[10] = createBaseVNode("thead", null, [
                createBaseVNode("tr", { class: "bg-slate-50/50 text-slate-400 font-bold uppercase tracking-wider border-b border-slate-100" }, [
                  createBaseVNode("th", { class: "px-6 py-4 font-semibold" }, "Floor details"),
                  createBaseVNode("th", { class: "px-6 py-4 font-semibold" }, "Level Number"),
                  createBaseVNode("th", { class: "px-6 py-4 font-semibold" }, "Zone Type"),
                  createBaseVNode("th", { class: "px-6 py-4 font-semibold" }, "Total Capacity"),
                  createBaseVNode("th", { class: "px-6 py-4 font-semibold" }, "Status"),
                  createBaseVNode("th", { class: "px-6 py-4 text-right font-semibold" }, "Actions")
                ])
              ], -1)),
              createBaseVNode("tbody", _hoisted_6, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(floors.value, (floor) => {
                  return openBlock(), createElementBlock("tr", {
                    key: floor.id,
                    class: "hover:bg-slate-50/50 transition-colors"
                  }, [
                    createBaseVNode("td", _hoisted_7, [
                      createBaseVNode("div", _hoisted_8, toDisplayString(floor.name), 1),
                      createBaseVNode("div", _hoisted_9, toDisplayString(floor.description || "No description provided"), 1)
                    ]),
                    createBaseVNode("td", _hoisted_10, " Lvl " + toDisplayString(floor.level), 1),
                    createBaseVNode("td", _hoisted_11, [
                      createBaseVNode("span", _hoisted_12, toDisplayString((floor.type || "mixed").replace("_", " ")), 1)
                    ]),
                    createBaseVNode("td", _hoisted_13, toDisplayString(floor.capacity || 0) + " Seats ", 1),
                    createBaseVNode("td", _hoisted_14, [
                      createBaseVNode("span", {
                        class: normalizeClass([
                          "px-2.5 py-0.5 rounded-full text-[9px] font-bold uppercase border inline-flex items-center gap-1",
                          floor.is_active ? "bg-green-50 border-green-100 text-green-700" : "bg-red-50 border-red-100 text-red-700"
                        ])
                      }, [
                        createBaseVNode("span", {
                          class: normalizeClass(["w-1.5 h-1.5 rounded-full", floor.is_active ? "bg-green-500" : "bg-red-500"])
                        }, null, 2),
                        createTextVNode(" " + toDisplayString(floor.is_active ? "Active" : "Inactive"), 1)
                      ], 2)
                    ]),
                    createBaseVNode("td", _hoisted_15, [
                      createBaseVNode("div", _hoisted_16, [
                        createBaseVNode("button", {
                          onClick: ($event) => openSectionsModal(floor),
                          class: "px-2.5 py-1.5 text-slate-600 bg-slate-50 hover:bg-slate-100 rounded-lg font-bold border border-slate-200/40 cursor-pointer"
                        }, " Sections ", 8, _hoisted_17),
                        createBaseVNode("button", {
                          onClick: ($event) => editFloor(floor),
                          class: "px-2.5 py-1.5 text-emerald-700 bg-emerald-50 hover:bg-emerald-100 rounded-lg font-bold border border-emerald-100 cursor-pointer"
                        }, " Edit ", 8, _hoisted_18),
                        createBaseVNode("button", {
                          onClick: ($event) => confirmDelete(floor),
                          class: "px-2.5 py-1.5 text-red-600 bg-red-50 hover:bg-red-100 rounded-lg font-bold border border-red-100 cursor-pointer"
                        }, " Delete ", 8, _hoisted_19)
                      ])
                    ])
                  ]);
                }), 128)),
                floors.value.length === 0 ? (openBlock(), createElementBlock("tr", _hoisted_20, [
                  createBaseVNode("td", _hoisted_21, [
                    createVNode(unref(Building2), { class: "w-10 h-10 text-slate-200 mx-auto mb-3" }),
                    _cache[8] || (_cache[8] = createBaseVNode("p", { class: "text-slate-400 font-semibold uppercase tracking-wider text-[11px]" }, "No floors added yet", -1)),
                    _cache[9] || (_cache[9] = createBaseVNode("p", { class: "text-[10px] text-slate-400 mt-0.5" }, 'Click "Add Floor" to create your first layout floor.', -1))
                  ])
                ])) : createCommentVNode("", true)
              ])
            ])
          ])
        ]),
        showModal.value ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: "fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50",
          onClick: withModifiers(closeModal, ["self"])
        }, [
          createBaseVNode("div", _hoisted_22, [
            createBaseVNode("div", _hoisted_23, [
              createBaseVNode("h3", _hoisted_24, toDisplayString(isEditing.value ? "Edit Floor Settings" : "Add New Floor"), 1),
              createBaseVNode("button", {
                onClick: closeModal,
                class: "p-2 hover:bg-slate-50 rounded-lg transition-colors cursor-pointer text-slate-400"
              }, [
                createVNode(unref(X), { class: "w-4 h-4" })
              ])
            ]),
            createBaseVNode("form", {
              onSubmit: withModifiers(saveFloor, ["prevent"]),
              class: "p-6 space-y-4 text-left"
            }, [
              createBaseVNode("div", null, [
                _cache[11] || (_cache[11] = createBaseVNode("label", { class: "block text-[10px] font-semibold text-slate-400 mb-1.5 uppercase tracking-wider" }, "Floor Name", -1)),
                withDirectives(createBaseVNode("input", {
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => form.value.name = $event),
                  type: "text",
                  required: "",
                  class: "w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-400 transition-all text-sm text-slate-700 font-medium bg-slate-50/50",
                  placeholder: "e.g. First Floor"
                }, null, 512), [
                  [vModelText, form.value.name]
                ])
              ]),
              createBaseVNode("div", _hoisted_25, [
                createBaseVNode("div", null, [
                  _cache[12] || (_cache[12] = createBaseVNode("label", { class: "block text-[10px] font-semibold text-slate-400 mb-1.5 uppercase tracking-wider" }, "Level Number", -1)),
                  withDirectives(createBaseVNode("input", {
                    "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => form.value.level = $event),
                    type: "number",
                    required: "",
                    class: "w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-400 transition-all text-sm text-slate-700 font-medium bg-slate-50/50",
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
                  _cache[13] || (_cache[13] = createBaseVNode("label", { class: "block text-[10px] font-semibold text-slate-400 mb-1.5 uppercase tracking-wider" }, "Capacity", -1)),
                  withDirectives(createBaseVNode("input", {
                    "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => form.value.capacity = $event),
                    type: "number",
                    class: "w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-400 transition-all text-sm text-slate-700 font-medium bg-slate-50/50",
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
                _cache[15] || (_cache[15] = createBaseVNode("label", { class: "block text-[10px] font-semibold text-slate-400 mb-1.5 uppercase tracking-wider" }, "Floor Type", -1)),
                withDirectives(createBaseVNode("select", {
                  "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => form.value.type = $event),
                  class: "w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-400 transition-all text-sm text-slate-700 font-medium bg-slate-50/50"
                }, [..._cache[14] || (_cache[14] = [
                  createStaticVNode('<option value="mixed" data-v-17a1526d>Mixed</option><option value="quiet_zone" data-v-17a1526d>Quiet Zone</option><option value="discussion_area" data-v-17a1526d>Discussion Area</option><option value="girls_only" data-v-17a1526d>Girls Only</option><option value="boys_only" data-v-17a1526d>Boys Only</option>', 5)
                ])], 512), [
                  [vModelSelect, form.value.type]
                ])
              ]),
              createBaseVNode("div", null, [
                _cache[16] || (_cache[16] = createBaseVNode("label", { class: "block text-[10px] font-semibold text-slate-400 mb-1.5 uppercase tracking-wider" }, "Description", -1)),
                withDirectives(createBaseVNode("textarea", {
                  "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => form.value.description = $event),
                  rows: "3",
                  class: "w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-400 transition-all text-sm text-slate-700 font-medium bg-slate-50/50 resize-none",
                  placeholder: "Optional description details..."
                }, null, 512), [
                  [vModelText, form.value.description]
                ])
              ]),
              createBaseVNode("div", null, [
                _cache[17] || (_cache[17] = createBaseVNode("label", { class: "block text-[10px] font-semibold text-slate-400 mb-1.5 uppercase tracking-wider" }, "Map Image Layout", -1)),
                createBaseVNode("input", {
                  type: "file",
                  onChange: handleFileUpload,
                  accept: "image/*",
                  class: "w-full text-xs text-slate-500 file:mr-3 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-xs file:font-semibold file:bg-emerald-50 file:text-emerald-700 hover:file:bg-emerald-100 cursor-pointer"
                }, null, 32),
                form.value.map_image_url ? (openBlock(), createElementBlock("p", _hoisted_26, "Current: " + toDisplayString(form.value.map_image_url.split("/").pop()), 1)) : createCommentVNode("", true)
              ]),
              createBaseVNode("div", _hoisted_27, [
                withDirectives(createBaseVNode("input", {
                  "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => form.value.is_active = $event),
                  type: "checkbox",
                  id: "is_active",
                  class: "rounded text-emerald-600 focus:ring-emerald-500 cursor-pointer"
                }, null, 512), [
                  [vModelCheckbox, form.value.is_active]
                ]),
                _cache[18] || (_cache[18] = createBaseVNode("label", {
                  for: "is_active",
                  class: "text-xs font-bold text-slate-500 cursor-pointer select-none"
                }, "Mark Active", -1))
              ]),
              createBaseVNode("div", _hoisted_28, [
                createBaseVNode("button", {
                  type: "submit",
                  disabled: loading.value,
                  class: "flex-1 px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl transition-all disabled:opacity-50 text-xs font-bold cursor-pointer"
                }, toDisplayString(loading.value ? "Saving..." : isEditing.value ? "Update Floor" : "Create Floor"), 9, _hoisted_29),
                createBaseVNode("button", {
                  type: "button",
                  onClick: closeModal,
                  class: "px-4 py-2 border border-slate-200 text-slate-500 font-bold rounded-xl hover:bg-slate-50 transition-all text-xs cursor-pointer"
                }, " Cancel ")
              ])
            ], 32)
          ])
        ])) : createCommentVNode("", true),
        createVNode(SectionManagementModal, {
          "is-open": showSectionsModal.value,
          floor: selectedFloor.value,
          onClose: _cache[6] || (_cache[6] = ($event) => showSectionsModal.value = false),
          onUpdated: fetchFloors
        }, null, 8, ["is-open", "floor"])
      ]);
    };
  }
});
const FloorManagementPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-17a1526d"]]);
export {
  FloorManagementPage as default
};
