import { d as defineComponent, r as ref, E as watch, a as createElementBlock, j as createCommentVNode, z as withModifiers, b as createBaseVNode, f as createVNode, u as unref, t as toDisplayString, p as withDirectives, v as vModelText, D as vModelSelect, B as vModelCheckbox, F as Fragment, k as renderList, n as normalizeClass, i as createTextVNode, O as librarianAPI, l as openBlock, o as onMounted, e as createStaticVNode, h as createBlock } from "./main-BGbL_8Ba.js";
import { u as useSwal } from "./useSwal-pQW_XkRe.js";
import { L as Layers } from "./layers-BEYprH12.js";
import { X } from "./x-Cqc9Wc4f.js";
import { P as Plus } from "./plus-C--9TlXh.js";
import { T as TriangleAlert } from "./triangle-alert-4H5SUbvt.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import { B as Building2 } from "./building-2-BD5xFb_R.js";
import { A as Armchair } from "./armchair-enLzRy9P.js";
import { c as createLucideIcon } from "./createLucideIcon-v8VVJu1z.js";
import { U as Upload } from "./upload-vvzNkn7J.js";
import { R as RefreshCw } from "./refresh-cw-BcRrptjM.js";
/* empty css               */
const Compass = createLucideIcon("compass", [
  [
    "path",
    {
      d: "m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",
      key: "9ktpf1"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
]);
const _hoisted_1$1 = { class: "bg-white rounded-xl shadow-xl max-w-5xl w-full mx-4 overflow-hidden max-h-[92vh] flex flex-col border border-gray-200 animate-in fade-in zoom-in duration-200 font-outfit text-slate-700" };
const _hoisted_2$1 = { class: "px-6 py-5 bg-gradient-to-r from-emerald-800 via-emerald-700 to-teal-800 text-white flex items-center justify-between text-left" };
const _hoisted_3$1 = { class: "flex items-center space-x-3" };
const _hoisted_4$1 = { class: "w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20" };
const _hoisted_5$1 = { class: "text-base font-bold text-white tracking-wide" };
const _hoisted_6$1 = { class: "p-6 overflow-y-auto space-y-6 flex-1 text-left" };
const _hoisted_7$1 = { class: "bg-slate-50/50 rounded-xl p-5 border border-slate-100" };
const _hoisted_8$1 = { class: "text-xs font-bold text-slate-700 uppercase tracking-wider mb-4" };
const _hoisted_9$1 = { class: "grid grid-cols-1 md:grid-cols-4 gap-4" };
const _hoisted_10$1 = ["disabled"];
const _hoisted_11$1 = { class: "flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-slate-100" };
const _hoisted_12$1 = { class: "flex items-center space-x-4" };
const _hoisted_13$1 = { class: "flex items-center space-x-2 cursor-pointer select-none" };
const _hoisted_14$1 = { class: "flex items-center space-x-2 cursor-pointer select-none" };
const _hoisted_15$1 = { class: "flex items-center space-x-2" };
const _hoisted_16$1 = ["disabled"];
const _hoisted_17$1 = { class: "overflow-x-auto border border-slate-100 rounded-xl" };
const _hoisted_18$1 = { class: "min-w-full divide-y divide-slate-100 text-xs" };
const _hoisted_19$1 = { class: "divide-y divide-slate-50" };
const _hoisted_20$1 = { class: "hover:bg-slate-50/50 transition-colors" };
const _hoisted_21$1 = { class: "px-4 py-3" };
const _hoisted_22$1 = { class: "font-bold text-slate-800" };
const _hoisted_23$1 = { class: "text-[10px] text-slate-400 font-medium mt-0.5" };
const _hoisted_24$1 = { class: "px-4 py-3" };
const _hoisted_25$1 = { class: "font-bold text-slate-600" };
const _hoisted_26$1 = { class: "text-[10px] text-green-600 font-bold mt-0.5" };
const _hoisted_27$1 = { class: "px-4 py-3 space-y-1" };
const _hoisted_28$1 = { class: "px-4 py-3" };
const _hoisted_29$1 = ["onClick"];
const _hoisted_30$1 = { class: "px-4 py-3" };
const _hoisted_31$1 = { class: "px-4 py-3 text-right" };
const _hoisted_32$1 = { class: "flex items-center justify-end space-x-2" };
const _hoisted_33$1 = ["onClick"];
const _hoisted_34$1 = ["onClick"];
const _hoisted_35$1 = {
  key: 0,
  class: "bg-blue-50/30 border-t border-b border-blue-100"
};
const _hoisted_36$1 = {
  colspan: "6",
  class: "p-4"
};
const _hoisted_37$1 = { class: "bg-white rounded-2xl p-5 border border-slate-200/80 shadow-md space-y-5" };
const _hoisted_38 = { class: "flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-100 pb-4 gap-3" };
const _hoisted_39 = { class: "flex items-center space-x-2.5" };
const _hoisted_40 = { class: "p-2 bg-blue-50 text-blue-600 rounded-xl border border-blue-100" };
const _hoisted_41 = { class: "font-bold text-slate-700 text-sm" };
const _hoisted_42 = { class: "flex items-center space-x-3" };
const _hoisted_43 = { class: "flex items-center space-x-1.5 text-[11px] font-bold" };
const _hoisted_44 = { class: "bg-slate-100 text-slate-700 px-2.5 py-1 rounded-lg" };
const _hoisted_45 = { class: "bg-emerald-50 text-emerald-700 px-2.5 py-1 rounded-lg border border-emerald-100" };
const _hoisted_46 = { class: "bg-blue-50 text-blue-700 px-2.5 py-1 rounded-lg border border-blue-100" };
const _hoisted_47 = {
  key: 0,
  class: "bg-amber-50/90 p-4 rounded-2xl border border-amber-200/80 flex flex-col sm:flex-row items-center justify-between gap-3"
};
const _hoisted_48 = { class: "flex items-center space-x-3 text-left" };
const _hoisted_49 = { class: "p-2 bg-amber-100 text-amber-700 rounded-xl border border-amber-200/50" };
const _hoisted_50 = { class: "text-xs font-bold text-amber-900" };
const _hoisted_51 = ["onClick", "disabled"];
const _hoisted_52 = ["onSubmit"];
const _hoisted_53 = { class: "flex items-center justify-between border-b border-blue-100/60 pb-3" };
const _hoisted_54 = { class: "text-xs font-bold uppercase tracking-wider text-blue-900 flex items-center space-x-1.5" };
const _hoisted_55 = { class: "space-y-3" };
const _hoisted_56 = { class: "md:col-span-3" };
const _hoisted_57 = ["onUpdate:modelValue", "onInput"];
const _hoisted_58 = { class: "md:col-span-3" };
const _hoisted_59 = ["onUpdate:modelValue"];
const _hoisted_60 = { class: "md:col-span-2" };
const _hoisted_61 = ["onUpdate:modelValue", "max"];
const _hoisted_62 = ["onUpdate:modelValue"];
const _hoisted_63 = {
  key: 0,
  class: "md:col-span-1 flex justify-end"
};
const _hoisted_64 = ["onClick"];
const _hoisted_65 = { class: "flex items-center justify-between pt-2" };
const _hoisted_66 = { key: 1 };
const _hoisted_67 = ["disabled"];
const _hoisted_68 = { class: "space-y-3" };
const _hoisted_69 = { class: "flex items-center justify-between p-3.5 bg-slate-50/50" };
const _hoisted_70 = { class: "flex items-center space-x-3" };
const _hoisted_71 = { class: "font-bold text-slate-800 flex items-center gap-2 flex-wrap" };
const _hoisted_72 = {
  key: 0,
  class: "text-[9px] font-extrabold bg-blue-50 text-blue-700 px-1.5 py-0.5 rounded border border-blue-100 uppercase"
};
const _hoisted_73 = {
  key: 1,
  class: "text-[9px] font-bold bg-amber-50 text-amber-700 px-1.5 py-0.5 rounded border border-amber-100 uppercase"
};
const _hoisted_74 = { class: "text-[9px] font-bold bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded border border-emerald-100 uppercase" };
const _hoisted_75 = { class: "text-[10px] text-slate-400 mt-0.5" };
const _hoisted_76 = { class: "flex items-center space-x-2" };
const _hoisted_77 = ["onClick"];
const _hoisted_78 = ["onClick"];
const _hoisted_79 = {
  key: 0,
  class: "text-center py-4 text-[10px] font-bold text-slate-400 uppercase tracking-wider"
};
const _hoisted_80 = { key: 0 };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "SectionManagementModal",
  props: {
    isOpen: { type: Boolean },
    floor: {}
  },
  emits: ["close", "updated"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const { showConfirm, showSuccess, showError } = useSwal();
    const props = __props;
    const emit = __emit;
    const sections = ref([]);
    const loading = ref(false);
    const isEditing = ref(false);
    const activeSubsectionSectionId = ref(null);
    const subLoading = ref(false);
    const isSubEditing = ref(false);
    const showAddSubForm = ref(false);
    const openAddSubForm = () => {
      resetSubForm();
      showAddSubForm.value = true;
    };
    const closeAddSubForm = () => {
      resetSubForm();
      showAddSubForm.value = false;
    };
    const form = ref({
      id: null,
      name: "",
      gender: "mixed",
      academic_level: "all",
      total_seats: 0,
      description: "",
      has_subsections: false,
      is_active: true
    });
    const subFormRows = ref([
      {
        id: null,
        name: "",
        code: "",
        gender: "mixed",
        academic_level: "all",
        total_seats: 0,
        auto_generate_seats: true,
        description: "",
        is_active: true
      }
    ]);
    const addSubRow = () => {
      subFormRows.value.push({
        id: null,
        name: "",
        code: "",
        gender: "mixed",
        academic_level: "all",
        total_seats: 0,
        auto_generate_seats: true,
        description: "",
        is_active: true
      });
    };
    const removeSubRow = (index) => {
      if (subFormRows.value.length > 1) {
        subFormRows.value.splice(index, 1);
      }
    };
    const onSubRowNameInput = (row) => {
      if (!row.code) {
        row.code = row.name;
      }
    };
    const getAllocatedSubSeats = (section) => {
      if (!section || !section.subsections || section.subsections.length === 0) return 0;
      return section.subsections.reduce((sum, sub) => sum + (sub.total_seats || 0), 0);
    };
    const autoDistributeSubSeats = (section) => {
      if (!section) return;
      const allocated = isSubEditing.value ? 0 : getAllocatedSubSeats(section);
      const unallocated = Math.max(0, section.total_seats - allocated);
      const numRows = subFormRows.value.length;
      if (numRows === 0 || unallocated === 0) return;
      const baseCount = Math.floor(unallocated / numRows);
      let remainder = unallocated % numRows;
      subFormRows.value.forEach((row) => {
        row.total_seats = baseCount + (remainder > 0 ? 1 : 0);
        if (remainder > 0) remainder--;
      });
    };
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
        has_subsections: false,
        is_active: true
      };
      isEditing.value = false;
    };
    const resetSubForm = () => {
      subFormRows.value = [
        {
          id: null,
          name: "",
          code: "",
          gender: "mixed",
          academic_level: "all",
          total_seats: 0,
          auto_generate_seats: true,
          description: "",
          is_active: true
        }
      ];
      isSubEditing.value = false;
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
        has_subsections: !!section.has_subsections,
        is_active: section.is_active
      };
    };
    const editSubsection = (sub) => {
      isSubEditing.value = true;
      showAddSubForm.value = true;
      subFormRows.value = [
        {
          id: sub.id,
          name: sub.name,
          code: sub.code || sub.name,
          gender: sub.gender || "mixed",
          academic_level: sub.academic_level || "all",
          total_seats: sub.total_seats || 0,
          auto_generate_seats: true,
          description: sub.description || "",
          is_active: sub.is_active
        }
      ];
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
    const enableSubsectionsForSection = async (section) => {
      subLoading.value = true;
      try {
        const payload = {
          ...section,
          has_subsections: true
        };
        await librarianAPI.updateSection(section.id, payload);
        section.has_subsections = true;
        showSuccess("Subsections Enabled!", `Subsections are now enabled for ${section.name}.`);
        await fetchSections();
        showAddSubForm.value = true;
        emit("updated");
      } catch (error) {
        showError("Failed", error.response?.data?.message || "Failed to enable subsections.");
      } finally {
        subLoading.value = false;
      }
    };
    const toggleSubsectionDrawer = (section) => {
      if (activeSubsectionSectionId.value === section.id) {
        activeSubsectionSectionId.value = null;
      } else {
        activeSubsectionSectionId.value = section.id;
        resetSubForm();
        showAddSubForm.value = !!section.has_subsections && (!section.subsections || section.subsections.length === 0);
      }
    };
    const saveSubsection = async (sectionId) => {
      subLoading.value = true;
      try {
        if (isSubEditing.value && subFormRows.value[0]?.id) {
          const row = subFormRows.value[0];
          row.auto_generate_seats = true;
          await librarianAPI.updateSubsection(sectionId, row.id, row);
          showSuccess("Updated!", "Subsection updated successfully.");
        } else {
          for (const row of subFormRows.value) {
            if (row.name.trim()) {
              row.auto_generate_seats = true;
              await librarianAPI.createSubsection(sectionId, row);
            }
          }
          showSuccess("Created!", "Subsections created successfully.");
        }
        await fetchSections();
        resetSubForm();
        showAddSubForm.value = false;
        emit("updated");
      } catch (error) {
        console.error("Error saving subsection:", error);
        showError("Save Failed", error.response?.data?.message || "Failed to save subsection.");
      } finally {
        subLoading.value = false;
      }
    };
    const deleteSubsection = async (sectionId, id) => {
      if (!await showConfirm("Delete Subsection", "Are you sure you want to delete this subsection?", "Yes, Delete")) return;
      try {
        await librarianAPI.deleteSubsection(sectionId, id);
        showSuccess("Deleted!", "Subsection deleted successfully.");
        await fetchSections();
        emit("updated");
      } catch (error) {
        console.error("Error deleting subsection:", error);
        showError("Delete Failed", "Failed to delete subsection.");
      }
    };
    watch(() => props.isOpen, (newVal) => {
      if (newVal) {
        fetchSections();
        resetForm();
        activeSubsectionSectionId.value = null;
      }
    });
    __expose({
      autoDistributeSubSeats
    });
    return (_ctx, _cache) => {
      return __props.isOpen ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: "fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50",
        onClick: _cache[9] || (_cache[9] = withModifiers(($event) => _ctx.$emit("close"), ["self"]))
      }, [
        createBaseVNode("div", _hoisted_1$1, [
          createBaseVNode("div", _hoisted_2$1, [
            createBaseVNode("div", _hoisted_3$1, [
              createBaseVNode("div", _hoisted_4$1, [
                createVNode(unref(Layers), { class: "w-5 h-5 text-white" })
              ]),
              createBaseVNode("div", null, [
                createBaseVNode("h3", _hoisted_5$1, "Sections & Subsections for " + toDisplayString(__props.floor?.name), 1),
                _cache[10] || (_cache[10] = createBaseVNode("p", { class: "text-[11px] text-emerald-100/80 font-medium" }, "Manage seating zones, subsections, and layout rules", -1))
              ])
            ]),
            createBaseVNode("button", {
              onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("close")),
              class: "p-2 hover:bg-white/10 rounded-xl transition-colors cursor-pointer text-white/80 hover:text-white"
            }, [
              createVNode(unref(X), { class: "w-5 h-5" })
            ])
          ]),
          createBaseVNode("div", _hoisted_6$1, [
            createBaseVNode("div", _hoisted_7$1, [
              createBaseVNode("h4", _hoisted_8$1, toDisplayString(isEditing.value ? "Edit Section Settings" : "Add New Section to Floor"), 1),
              createBaseVNode("form", {
                onSubmit: withModifiers(saveSection, ["prevent"]),
                class: "space-y-4"
              }, [
                createBaseVNode("div", _hoisted_9$1, [
                  createBaseVNode("div", null, [
                    _cache[11] || (_cache[11] = createBaseVNode("label", { class: "block text-[10px] font-semibold text-slate-400 mb-1.5 uppercase tracking-wider" }, "Section Name", -1)),
                    withDirectives(createBaseVNode("input", {
                      "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => form.value.name = $event),
                      type: "text",
                      required: "",
                      class: "w-full px-3 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-400 transition-all text-xs text-slate-700 font-medium bg-white",
                      placeholder: "e.g. Boys Section"
                    }, null, 512), [
                      [vModelText, form.value.name]
                    ])
                  ]),
                  createBaseVNode("div", null, [
                    _cache[12] || (_cache[12] = createBaseVNode("label", { class: "block text-[10px] font-semibold text-slate-400 mb-1.5 uppercase tracking-wider" }, "Total Seats", -1)),
                    withDirectives(createBaseVNode("input", {
                      "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => form.value.total_seats = $event),
                      type: "number",
                      required: "",
                      disabled: isEditing.value,
                      class: "w-full px-3 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-400 transition-all text-xs text-slate-700 font-medium bg-white disabled:bg-slate-100/50 disabled:text-slate-400",
                      placeholder: "e.g. 50"
                    }, null, 8, _hoisted_10$1), [
                      [
                        vModelText,
                        form.value.total_seats,
                        void 0,
                        { number: true }
                      ]
                    ])
                  ]),
                  createBaseVNode("div", null, [
                    _cache[14] || (_cache[14] = createBaseVNode("label", { class: "block text-[10px] font-semibold text-slate-400 mb-1.5 uppercase tracking-wider" }, "Gender Restriction", -1)),
                    withDirectives(createBaseVNode("select", {
                      "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => form.value.gender = $event),
                      required: "",
                      class: "w-full px-3 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-400 transition-all text-xs text-slate-700 font-semibold bg-white cursor-pointer"
                    }, [..._cache[13] || (_cache[13] = [
                      createBaseVNode("option", { value: "mixed" }, "Mixed (All)", -1),
                      createBaseVNode("option", { value: "male" }, "Male Only", -1),
                      createBaseVNode("option", { value: "female" }, "Female Only", -1)
                    ])], 512), [
                      [vModelSelect, form.value.gender]
                    ])
                  ]),
                  createBaseVNode("div", null, [
                    _cache[16] || (_cache[16] = createBaseVNode("label", { class: "block text-[10px] font-semibold text-slate-400 mb-1.5 uppercase tracking-wider" }, "Academic Level", -1)),
                    withDirectives(createBaseVNode("select", {
                      "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => form.value.academic_level = $event),
                      required: "",
                      class: "w-full px-3 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-400 transition-all text-xs text-slate-700 font-semibold bg-white cursor-pointer"
                    }, [..._cache[15] || (_cache[15] = [
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
                  _cache[17] || (_cache[17] = createBaseVNode("label", { class: "block text-[10px] font-semibold text-slate-400 mb-1.5 uppercase tracking-wider" }, "Description (Optional)", -1)),
                  withDirectives(createBaseVNode("input", {
                    "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => form.value.description = $event),
                    type: "text",
                    class: "w-full px-3 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-400 transition-all text-xs text-slate-700 font-medium bg-white",
                    placeholder: "e.g. Ground Floor Boys Study Area"
                  }, null, 512), [
                    [vModelText, form.value.description]
                  ])
                ]),
                createBaseVNode("div", _hoisted_11$1, [
                  createBaseVNode("div", _hoisted_12$1, [
                    createBaseVNode("label", _hoisted_13$1, [
                      withDirectives(createBaseVNode("input", {
                        "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => form.value.is_active = $event),
                        type: "checkbox",
                        class: "rounded text-emerald-600 focus:ring-emerald-500 cursor-pointer"
                      }, null, 512), [
                        [vModelCheckbox, form.value.is_active]
                      ]),
                      _cache[18] || (_cache[18] = createBaseVNode("span", { class: "text-xs font-bold text-slate-600" }, "Mark Active", -1))
                    ]),
                    createBaseVNode("label", _hoisted_14$1, [
                      withDirectives(createBaseVNode("input", {
                        "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => form.value.has_subsections = $event),
                        type: "checkbox",
                        class: "rounded text-blue-600 focus:ring-blue-500 cursor-pointer"
                      }, null, 512), [
                        [vModelCheckbox, form.value.has_subsections]
                      ]),
                      _cache[19] || (_cache[19] = createBaseVNode("span", { class: "text-xs font-bold text-blue-700" }, "Enable Subsections", -1))
                    ])
                  ]),
                  createBaseVNode("div", _hoisted_15$1, [
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
                    }, toDisplayString(loading.value ? "Saving..." : isEditing.value ? "Update Section" : "Add Section"), 9, _hoisted_16$1)
                  ])
                ])
              ], 32)
            ]),
            createBaseVNode("div", _hoisted_17$1, [
              createBaseVNode("table", _hoisted_18$1, [
                _cache[32] || (_cache[32] = createBaseVNode("thead", null, [
                  createBaseVNode("tr", { class: "bg-slate-50/50 text-slate-400 font-bold uppercase tracking-wider border-b border-slate-100" }, [
                    createBaseVNode("th", { class: "px-4 py-3 text-left font-semibold" }, "Name Details"),
                    createBaseVNode("th", { class: "px-4 py-3 text-left font-semibold" }, "Capacity"),
                    createBaseVNode("th", { class: "px-4 py-3 text-left font-semibold" }, "Gender / Level"),
                    createBaseVNode("th", { class: "px-4 py-3 text-left font-semibold" }, "Subsections"),
                    createBaseVNode("th", { class: "px-4 py-3 text-left font-semibold" }, "Status"),
                    createBaseVNode("th", { class: "px-4 py-3 text-right font-semibold" }, "Actions")
                  ])
                ], -1)),
                createBaseVNode("tbody", _hoisted_19$1, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(sections.value, (section) => {
                    return openBlock(), createElementBlock(Fragment, {
                      key: section.id
                    }, [
                      createBaseVNode("tr", _hoisted_20$1, [
                        createBaseVNode("td", _hoisted_21$1, [
                          createBaseVNode("div", _hoisted_22$1, toDisplayString(section.name), 1),
                          createBaseVNode("div", _hoisted_23$1, toDisplayString(section.description || "No description provided"), 1)
                        ]),
                        createBaseVNode("td", _hoisted_24$1, [
                          createBaseVNode("div", _hoisted_25$1, toDisplayString(section.total_seats) + " total", 1),
                          createBaseVNode("div", _hoisted_26$1, toDisplayString(section.available_seats) + " available", 1)
                        ]),
                        createBaseVNode("td", _hoisted_27$1, [
                          createBaseVNode("span", {
                            class: normalizeClass([
                              "px-2 py-0.5 rounded text-[9px] font-bold uppercase border inline-block mr-1",
                              section.gender === "male" ? "bg-blue-50 border-blue-100 text-blue-700" : section.gender === "female" ? "bg-pink-50 border-pink-100 text-pink-700" : "bg-emerald-50 border-emerald-100 text-emerald-700"
                            ])
                          }, toDisplayString(section.gender || "mixed"), 3),
                          createBaseVNode("span", {
                            class: normalizeClass([
                              "px-2 py-0.5 rounded text-[9px] font-bold uppercase border inline-block",
                              section.academic_level === "PRC" ? "bg-amber-50 border-amber-100 text-amber-700" : section.academic_level === "CAF" ? "bg-cyan-50 border-cyan-100 text-cyan-700" : section.academic_level === "Final" ? "bg-purple-50 border-purple-100 text-purple-700" : "bg-slate-50 border-slate-200 text-slate-600"
                            ])
                          }, toDisplayString(section.academic_level === "all" || !section.academic_level ? "All Levels" : section.academic_level), 3)
                        ]),
                        createBaseVNode("td", _hoisted_28$1, [
                          createBaseVNode("button", {
                            onClick: ($event) => toggleSubsectionDrawer(section),
                            class: normalizeClass([
                              "px-2.5 py-1 rounded-lg text-[10px] font-bold border transition-all flex items-center space-x-1 cursor-pointer",
                              section.has_subsections ? "bg-blue-50 border-blue-200 text-blue-700 hover:bg-blue-100" : "bg-slate-50 border-slate-200 text-slate-500 hover:bg-slate-100"
                            ])
                          }, [
                            createVNode(unref(Layers), { class: "w-3.5 h-3.5" }),
                            createBaseVNode("span", null, toDisplayString(section.subsections?.length ? `${section.subsections.length} Subsections` : section.has_subsections ? "+ Add Subsections" : "Disabled"), 1)
                          ], 10, _hoisted_29$1)
                        ]),
                        createBaseVNode("td", _hoisted_30$1, [
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
                        createBaseVNode("td", _hoisted_31$1, [
                          createBaseVNode("div", _hoisted_32$1, [
                            createBaseVNode("button", {
                              onClick: ($event) => editSection(section),
                              class: "px-2.5 py-1.5 text-emerald-700 bg-emerald-50 hover:bg-emerald-100 rounded-lg font-bold border border-emerald-100 cursor-pointer"
                            }, " Edit ", 8, _hoisted_33$1),
                            createBaseVNode("button", {
                              onClick: ($event) => deleteSection(section.id),
                              class: "px-2.5 py-1.5 text-red-600 bg-red-50 hover:bg-red-100 rounded-lg font-bold border border-red-100 cursor-pointer"
                            }, " Delete ", 8, _hoisted_34$1)
                          ])
                        ])
                      ]),
                      activeSubsectionSectionId.value === section.id ? (openBlock(), createElementBlock("tr", _hoisted_35$1, [
                        createBaseVNode("td", _hoisted_36$1, [
                          createBaseVNode("div", _hoisted_37$1, [
                            createBaseVNode("div", _hoisted_38, [
                              createBaseVNode("div", _hoisted_39, [
                                createBaseVNode("div", _hoisted_40, [
                                  createVNode(unref(Layers), { class: "w-5 h-5" })
                                ]),
                                createBaseVNode("div", null, [
                                  createBaseVNode("h5", _hoisted_41, " Subsections under " + toDisplayString(section.name), 1),
                                  _cache[20] || (_cache[20] = createBaseVNode("p", { class: "text-[11px] text-slate-400 font-medium" }, "Divide section capacity into specific subsections", -1))
                                ])
                              ]),
                              createBaseVNode("div", _hoisted_42, [
                                createBaseVNode("div", _hoisted_43, [
                                  createBaseVNode("span", _hoisted_44, " Capacity: " + toDisplayString(section.total_seats) + " Seats ", 1),
                                  createBaseVNode("span", _hoisted_45, " Allocated: " + toDisplayString(getAllocatedSubSeats(section)), 1),
                                  createBaseVNode("span", _hoisted_46, " Unallocated: " + toDisplayString(Math.max(0, section.total_seats - getAllocatedSubSeats(section))), 1)
                                ]),
                                !!section.has_subsections && !showAddSubForm.value && section.subsections && section.subsections.length > 0 ? (openBlock(), createElementBlock("button", {
                                  key: 0,
                                  onClick: openAddSubForm,
                                  class: "px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-bold transition-all flex items-center space-x-1 cursor-pointer shadow-xs"
                                }, [
                                  createVNode(unref(Plus), { class: "w-3.5 h-3.5" }),
                                  _cache[21] || (_cache[21] = createBaseVNode("span", null, "+ Add Subsection", -1))
                                ])) : createCommentVNode("", true),
                                createBaseVNode("button", {
                                  onClick: _cache[8] || (_cache[8] = ($event) => activeSubsectionSectionId.value = null),
                                  class: "px-2.5 py-1 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg text-xs font-bold transition-all cursor-pointer"
                                }, " Close × ")
                              ])
                            ]),
                            !section.has_subsections ? (openBlock(), createElementBlock("div", _hoisted_47, [
                              createBaseVNode("div", _hoisted_48, [
                                createBaseVNode("div", _hoisted_49, [
                                  createVNode(unref(TriangleAlert), { class: "w-5 h-5" })
                                ]),
                                createBaseVNode("div", null, [
                                  createBaseVNode("h6", _hoisted_50, "Subsections are currently disabled for " + toDisplayString(section.name), 1),
                                  _cache[22] || (_cache[22] = createBaseVNode("p", { class: "text-[11px] text-amber-700 font-medium mt-0.5" }, "Enable subsections first to add and assign subsections to this section.", -1))
                                ])
                              ]),
                              createBaseVNode("button", {
                                onClick: ($event) => enableSubsectionsForSection(section),
                                disabled: subLoading.value,
                                class: "px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-xl text-xs font-bold transition-all shrink-0 cursor-pointer shadow-xs disabled:opacity-50 flex items-center space-x-1.5"
                              }, [
                                createVNode(unref(Plus), { class: "w-3.5 h-3.5" }),
                                _cache[23] || (_cache[23] = createBaseVNode("span", null, "Enable Subsections Now", -1))
                              ], 8, _hoisted_51)
                            ])) : createCommentVNode("", true),
                            !!section.has_subsections && (showAddSubForm.value || !section.subsections || section.subsections.length === 0) ? (openBlock(), createElementBlock("form", {
                              key: 1,
                              onSubmit: withModifiers(($event) => saveSubsection(section.id), ["prevent"]),
                              class: "bg-blue-50/40 p-4 rounded-2xl border border-blue-100/80 space-y-4"
                            }, [
                              createBaseVNode("div", _hoisted_53, [
                                createBaseVNode("span", _hoisted_54, [
                                  _cache[24] || (_cache[24] = createBaseVNode("span", { class: "w-2 h-2 rounded-full bg-blue-600" }, null, -1)),
                                  createBaseVNode("span", null, toDisplayString(isSubEditing.value ? "Edit Subsection" : "Add Subsections"), 1)
                                ]),
                                createBaseVNode("button", {
                                  type: "button",
                                  onClick: closeAddSubForm,
                                  class: "text-[11px] text-slate-500 hover:text-slate-700 font-bold cursor-pointer bg-white px-2.5 py-1 rounded-lg border border-slate-200"
                                }, " Cancel ")
                              ]),
                              createBaseVNode("div", _hoisted_55, [
                                (openBlock(true), createElementBlock(Fragment, null, renderList(subFormRows.value, (subRow, index) => {
                                  return openBlock(), createElementBlock("div", {
                                    key: index,
                                    class: "grid grid-cols-1 md:grid-cols-12 gap-3 items-end bg-white p-3 rounded-xl border border-slate-200/80 shadow-xs"
                                  }, [
                                    createBaseVNode("div", _hoisted_56, [
                                      _cache[25] || (_cache[25] = createBaseVNode("label", { class: "block text-[10px] font-bold text-slate-500 uppercase mb-1" }, "Subsection Name", -1)),
                                      withDirectives(createBaseVNode("input", {
                                        "onUpdate:modelValue": ($event) => subRow.name = $event,
                                        onInput: ($event) => onSubRowNameInput(subRow),
                                        type: "text",
                                        required: "",
                                        placeholder: "e.g. PRC, CAF, Final",
                                        class: "w-full px-3 py-2 border border-slate-200 rounded-xl text-xs font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                                      }, null, 40, _hoisted_57), [
                                        [vModelText, subRow.name]
                                      ])
                                    ]),
                                    createBaseVNode("div", _hoisted_58, [
                                      _cache[26] || (_cache[26] = createBaseVNode("label", { class: "block text-[10px] font-bold text-slate-500 uppercase mb-1" }, "Seat Code / Prefix", -1)),
                                      withDirectives(createBaseVNode("input", {
                                        "onUpdate:modelValue": ($event) => subRow.code = $event,
                                        type: "text",
                                        required: "",
                                        placeholder: "e.g. PRC, CAF, Final",
                                        class: "w-full px-3 py-2 border border-slate-200 rounded-xl text-xs font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                                      }, null, 8, _hoisted_59), [
                                        [vModelText, subRow.code]
                                      ])
                                    ]),
                                    createBaseVNode("div", _hoisted_60, [
                                      _cache[27] || (_cache[27] = createBaseVNode("label", { class: "block text-[10px] font-bold text-slate-500 uppercase mb-1" }, "Seats Allocated", -1)),
                                      withDirectives(createBaseVNode("input", {
                                        "onUpdate:modelValue": ($event) => subRow.total_seats = $event,
                                        type: "number",
                                        min: "0",
                                        max: section.total_seats,
                                        placeholder: "e.g. 20",
                                        class: "w-full px-3 py-2 border border-slate-200 rounded-xl text-xs font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                                      }, null, 8, _hoisted_61), [
                                        [
                                          vModelText,
                                          subRow.total_seats,
                                          void 0,
                                          { number: true }
                                        ]
                                      ])
                                    ]),
                                    createBaseVNode("div", {
                                      class: normalizeClass(subFormRows.value.length > 1 && !isSubEditing.value ? "md:col-span-3" : "md:col-span-4")
                                    }, [
                                      _cache[29] || (_cache[29] = createBaseVNode("label", { class: "block text-[10px] font-bold text-slate-500 uppercase mb-1" }, "Academic Level", -1)),
                                      withDirectives(createBaseVNode("select", {
                                        "onUpdate:modelValue": ($event) => subRow.academic_level = $event,
                                        class: "w-full px-3 py-2 border border-slate-200 rounded-xl text-xs font-bold text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 cursor-pointer"
                                      }, [..._cache[28] || (_cache[28] = [
                                        createBaseVNode("option", { value: "all" }, "Inherit / All Students", -1),
                                        createBaseVNode("option", { value: "PRC" }, "PRC Students Only", -1),
                                        createBaseVNode("option", { value: "CAF" }, "CAF Students Only", -1),
                                        createBaseVNode("option", { value: "Final" }, "Final Year Students Only", -1)
                                      ])], 8, _hoisted_62), [
                                        [vModelSelect, subRow.academic_level]
                                      ])
                                    ], 2),
                                    subFormRows.value.length > 1 && !isSubEditing.value ? (openBlock(), createElementBlock("div", _hoisted_63, [
                                      createBaseVNode("button", {
                                        type: "button",
                                        onClick: ($event) => removeSubRow(index),
                                        class: "p-2 text-rose-500 hover:bg-rose-50 rounded-lg transition-colors cursor-pointer",
                                        title: "Remove row"
                                      }, [
                                        createVNode(unref(X), { class: "w-4 h-4" })
                                      ], 8, _hoisted_64)
                                    ])) : createCommentVNode("", true)
                                  ]);
                                }), 128))
                              ]),
                              createBaseVNode("div", _hoisted_65, [
                                !isSubEditing.value ? (openBlock(), createElementBlock("button", {
                                  key: 0,
                                  type: "button",
                                  onClick: addSubRow,
                                  class: "px-3.5 py-2 bg-blue-100 hover:bg-blue-200 text-blue-700 rounded-xl text-xs font-bold transition-all flex items-center space-x-1.5 cursor-pointer"
                                }, [
                                  createVNode(unref(Plus), { class: "w-4 h-4" }),
                                  _cache[30] || (_cache[30] = createBaseVNode("span", null, "+ Add Another Subsection", -1))
                                ])) : (openBlock(), createElementBlock("div", _hoisted_66)),
                                createBaseVNode("button", {
                                  type: "submit",
                                  disabled: subLoading.value,
                                  class: "px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold transition-all disabled:opacity-50 shadow-sm cursor-pointer"
                                }, toDisplayString(subLoading.value ? "Saving..." : isSubEditing.value ? "Save Changes" : "Save Subsections"), 9, _hoisted_67)
                              ])
                            ], 40, _hoisted_52)) : createCommentVNode("", true),
                            createBaseVNode("div", _hoisted_68, [
                              (openBlock(true), createElementBlock(Fragment, null, renderList(section.subsections, (sub) => {
                                return openBlock(), createElementBlock("div", {
                                  key: sub.id,
                                  class: "bg-white border border-slate-100 rounded-xl overflow-hidden shadow-xs transition-all hover:border-blue-200"
                                }, [
                                  createBaseVNode("div", _hoisted_69, [
                                    createBaseVNode("div", _hoisted_70, [
                                      createBaseVNode("span", {
                                        class: normalizeClass(["w-2.5 h-2.5 rounded-full", sub.is_active ? "bg-emerald-500" : "bg-rose-400"])
                                      }, null, 2),
                                      createBaseVNode("div", null, [
                                        createBaseVNode("div", _hoisted_71, [
                                          createBaseVNode("span", null, toDisplayString(sub.name), 1),
                                          sub.code && sub.code.toLowerCase() !== sub.name.toLowerCase() ? (openBlock(), createElementBlock("span", _hoisted_72, "Prefix: " + toDisplayString(sub.code), 1)) : createCommentVNode("", true),
                                          sub.academic_level && sub.academic_level !== "all" && sub.academic_level.toLowerCase() !== sub.name.toLowerCase() ? (openBlock(), createElementBlock("span", _hoisted_73, toDisplayString(sub.academic_level), 1)) : createCommentVNode("", true),
                                          createBaseVNode("span", _hoisted_74, toDisplayString(sub.total_seats || 0) + " Seats Allocated", 1)
                                        ]),
                                        createBaseVNode("div", _hoisted_75, toDisplayString(sub.description || "No description") + " • " + toDisplayString(sub.seats?.length || sub.seats_count || 0) + " assigned seats", 1)
                                      ])
                                    ]),
                                    createBaseVNode("div", _hoisted_76, [
                                      createBaseVNode("button", {
                                        onClick: ($event) => editSubsection(sub),
                                        class: "px-3 py-1.5 text-xs text-blue-600 hover:bg-blue-50 rounded-lg font-bold transition-colors cursor-pointer"
                                      }, " Edit ", 8, _hoisted_77),
                                      createBaseVNode("button", {
                                        onClick: ($event) => deleteSubsection(section.id, sub.id),
                                        class: "px-3 py-1.5 text-xs text-rose-600 hover:bg-rose-50 rounded-lg font-bold transition-colors cursor-pointer"
                                      }, " Delete ", 8, _hoisted_78)
                                    ])
                                  ])
                                ]);
                              }), 128)),
                              !section.subsections || section.subsections.length === 0 ? (openBlock(), createElementBlock("div", _hoisted_79, " No subsections created yet. Add one above. ")) : createCommentVNode("", true)
                            ])
                          ])
                        ])
                      ])) : createCommentVNode("", true)
                    ], 64);
                  }), 128)),
                  sections.value.length === 0 ? (openBlock(), createElementBlock("tr", _hoisted_80, [..._cache[31] || (_cache[31] = [
                    createBaseVNode("td", {
                      colspan: "6",
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
const SectionManagementModal = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-03931d66"]]);
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
const _hoisted_22 = { class: "bg-white rounded-2xl shadow-2xl max-w-lg w-full mx-auto overflow-hidden border border-slate-100 animate-in fade-in zoom-in duration-200 flex flex-col max-h-[90vh]" };
const _hoisted_23 = { class: "px-6 py-5 bg-gradient-to-r from-emerald-800 via-emerald-700 to-teal-800 text-white flex items-center justify-between text-left" };
const _hoisted_24 = { class: "flex items-center space-x-3" };
const _hoisted_25 = { class: "w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20" };
const _hoisted_26 = { class: "text-base font-bold text-white tracking-wide" };
const _hoisted_27 = { class: "block text-[10px] font-bold text-slate-400 mb-1.5 uppercase tracking-wider flex items-center gap-1.5" };
const _hoisted_28 = { class: "grid grid-cols-2 gap-4" };
const _hoisted_29 = { class: "block text-[10px] font-bold text-slate-400 mb-1.5 uppercase tracking-wider flex items-center gap-1.5" };
const _hoisted_30 = { class: "block text-[10px] font-bold text-slate-400 mb-1.5 uppercase tracking-wider flex items-center gap-1.5" };
const _hoisted_31 = { class: "block text-[10px] font-bold text-slate-400 mb-1.5 uppercase tracking-wider flex items-center gap-1.5" };
const _hoisted_32 = { class: "block text-[10px] font-bold text-slate-400 mb-1.5 uppercase tracking-wider flex items-center gap-1.5" };
const _hoisted_33 = {
  key: 0,
  class: "mt-1.5 text-[10px] text-slate-400 font-bold truncate"
};
const _hoisted_34 = { class: "p-3.5 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-between" };
const _hoisted_35 = { class: "flex items-center space-x-2.5 cursor-pointer select-none" };
const _hoisted_36 = { class: "flex items-center justify-end space-x-3 pt-4 border-t border-slate-100" };
const _hoisted_37 = ["disabled"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "FloorManagementPage",
  setup(__props) {
    const { showConfirm, showSuccess, showError } = useSwal();
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
          class: "fixed inset-0 bg-slate-900/60 backdrop-blur-md flex items-center justify-center z-50 p-4",
          onClick: withModifiers(closeModal, ["self"])
        }, [
          createBaseVNode("div", _hoisted_22, [
            createBaseVNode("div", _hoisted_23, [
              createBaseVNode("div", _hoisted_24, [
                createBaseVNode("div", _hoisted_25, [
                  createVNode(unref(Building2), { class: "w-5 h-5 text-white" })
                ]),
                createBaseVNode("div", null, [
                  createBaseVNode("h3", _hoisted_26, toDisplayString(isEditing.value ? "Edit Floor Settings" : "Add New Floor"), 1),
                  _cache[11] || (_cache[11] = createBaseVNode("p", { class: "text-[11px] text-emerald-100/80 font-medium" }, "Configure floor level, seating capacity, and zone type", -1))
                ])
              ]),
              createBaseVNode("button", {
                onClick: closeModal,
                class: "p-2 hover:bg-white/10 rounded-xl transition-colors cursor-pointer text-white/80 hover:text-white"
              }, [
                createVNode(unref(X), { class: "w-5 h-5" })
              ])
            ]),
            createBaseVNode("form", {
              onSubmit: withModifiers(saveFloor, ["prevent"]),
              class: "p-6 overflow-y-auto space-y-4 text-left flex-1"
            }, [
              createBaseVNode("div", null, [
                createBaseVNode("label", _hoisted_27, [
                  createVNode(unref(Building2), { class: "w-3.5 h-3.5 text-emerald-600" }),
                  _cache[12] || (_cache[12] = createTextVNode(" Floor Name ", -1))
                ]),
                withDirectives(createBaseVNode("input", {
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => form.value.name = $event),
                  type: "text",
                  required: "",
                  class: "w-full px-3.5 py-2.5 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all text-xs text-slate-700 font-semibold bg-slate-50/50 placeholder:font-normal",
                  placeholder: "e.g. Ground Floor / First Floor"
                }, null, 512), [
                  [vModelText, form.value.name]
                ])
              ]),
              createBaseVNode("div", _hoisted_28, [
                createBaseVNode("div", null, [
                  createBaseVNode("label", _hoisted_29, [
                    createVNode(unref(Layers), { class: "w-3.5 h-3.5 text-emerald-600" }),
                    _cache[13] || (_cache[13] = createTextVNode(" Level Number ", -1))
                  ]),
                  withDirectives(createBaseVNode("input", {
                    "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => form.value.level = $event),
                    type: "number",
                    required: "",
                    class: "w-full px-3.5 py-2.5 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all text-xs text-slate-700 font-semibold bg-slate-50/50",
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
                  createBaseVNode("label", _hoisted_30, [
                    createVNode(unref(Armchair), { class: "w-3.5 h-3.5 text-emerald-600" }),
                    _cache[14] || (_cache[14] = createTextVNode(" Capacity (Seats) ", -1))
                  ]),
                  withDirectives(createBaseVNode("input", {
                    "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => form.value.capacity = $event),
                    type: "number",
                    class: "w-full px-3.5 py-2.5 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all text-xs text-slate-700 font-bold bg-slate-50/50",
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
                createBaseVNode("label", _hoisted_31, [
                  createVNode(unref(Compass), { class: "w-3.5 h-3.5 text-emerald-600" }),
                  _cache[15] || (_cache[15] = createTextVNode(" Floor Zone Type ", -1))
                ]),
                withDirectives(createBaseVNode("select", {
                  "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => form.value.type = $event),
                  class: "w-full px-3.5 py-2.5 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all text-xs text-slate-700 font-semibold bg-slate-50/50 cursor-pointer"
                }, [..._cache[16] || (_cache[16] = [
                  createStaticVNode('<option value="mixed" data-v-2db92caf>Mixed Zone</option><option value="quiet_zone" data-v-2db92caf>Quiet Zone</option><option value="discussion_area" data-v-2db92caf>Discussion Area</option><option value="girls_only" data-v-2db92caf>Girls Only Zone</option><option value="boys_only" data-v-2db92caf>Boys Only Zone</option>', 5)
                ])], 512), [
                  [vModelSelect, form.value.type]
                ])
              ]),
              createBaseVNode("div", null, [
                _cache[17] || (_cache[17] = createBaseVNode("label", { class: "block text-[10px] font-bold text-slate-400 mb-1.5 uppercase tracking-wider" }, "Description (Optional)", -1)),
                withDirectives(createBaseVNode("textarea", {
                  "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => form.value.description = $event),
                  rows: "2",
                  class: "w-full px-3.5 py-2.5 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all text-xs text-slate-700 font-medium bg-slate-50/50 resize-none placeholder:font-normal",
                  placeholder: "e.g. Main entrance floor with silent reading section"
                }, null, 512), [
                  [vModelText, form.value.description]
                ])
              ]),
              createBaseVNode("div", null, [
                createBaseVNode("label", _hoisted_32, [
                  createVNode(unref(Upload), { class: "w-3.5 h-3.5 text-emerald-600" }),
                  _cache[18] || (_cache[18] = createTextVNode(" Map Layout Image (Optional) ", -1))
                ]),
                createBaseVNode("input", {
                  type: "file",
                  onChange: handleFileUpload,
                  accept: "image/*",
                  class: "w-full text-xs text-slate-500 file:mr-3 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-semibold file:bg-emerald-50 file:text-emerald-700 hover:file:bg-emerald-100 cursor-pointer"
                }, null, 32),
                form.value.map_image_url ? (openBlock(), createElementBlock("p", _hoisted_33, "Current: " + toDisplayString(form.value.map_image_url.split("/").pop()), 1)) : createCommentVNode("", true)
              ]),
              createBaseVNode("div", _hoisted_34, [
                createBaseVNode("label", _hoisted_35, [
                  withDirectives(createBaseVNode("input", {
                    "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => form.value.is_active = $event),
                    type: "checkbox",
                    id: "is_active",
                    class: "w-4 h-4 rounded text-emerald-600 focus:ring-emerald-500 cursor-pointer"
                  }, null, 512), [
                    [vModelCheckbox, form.value.is_active]
                  ]),
                  _cache[19] || (_cache[19] = createBaseVNode("span", { class: "text-xs font-bold text-slate-700" }, "Mark Floor Active", -1))
                ])
              ]),
              createBaseVNode("div", _hoisted_36, [
                createBaseVNode("button", {
                  type: "button",
                  onClick: closeModal,
                  class: "px-5 py-2.5 border border-slate-200 text-slate-600 font-bold rounded-xl hover:bg-slate-100 transition-all text-xs cursor-pointer"
                }, " Cancel "),
                createBaseVNode("button", {
                  type: "submit",
                  disabled: loading.value,
                  class: "px-6 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl transition-all disabled:opacity-50 text-xs font-bold shadow-md shadow-emerald-700/10 cursor-pointer flex items-center space-x-2"
                }, [
                  loading.value ? (openBlock(), createBlock(unref(RefreshCw), {
                    key: 0,
                    class: "w-3.5 h-3.5 animate-spin"
                  })) : createCommentVNode("", true),
                  createBaseVNode("span", null, toDisplayString(loading.value ? "Saving..." : isEditing.value ? "Update Floor" : "Create Floor"), 1)
                ], 8, _hoisted_37)
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
const FloorManagementPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-2db92caf"]]);
export {
  FloorManagementPage as default
};
