import { d as defineComponent, x as useAuth, r as ref, o as onMounted, a as createElementBlock, b as createBaseVNode, j as createCommentVNode, p as withDirectives, f as createVNode, D as vModelSelect, F as Fragment, k as renderList, u as unref, n as normalizeClass, z as withModifiers, t as toDisplayString, i as createTextVNode, v as vModelText, B as vModelCheckbox, h as createBlock, O as librarianAPI, l as openBlock } from "./main-D4odWxzi.js";
import { u as useSwal } from "./useSwal-pQW_XkRe.js";
import { B as Building2 } from "./building-2-CXGh2OGX.js";
import { C as ChevronDown } from "./chevron-down-DGoXiOPy.js";
import { R as RefreshCw } from "./refresh-cw-BuoaK0_N.js";
import { P as Printer } from "./printer-DzehZHse.js";
import { P as Plus } from "./plus-zxxEdYDr.js";
import { L as Layers } from "./layers-CzBHPR_A.js";
import { X } from "./x-C9--2uVT.js";
import { U as Users } from "./users-CpFvLwmr.js";
import { G as GraduationCap } from "./graduation-cap-Do2yosE9.js";
import { A as Armchair } from "./armchair-DKdV929b.js";
import { T as TriangleAlert } from "./triangle-alert-SquaIONa.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
/* empty css               */
import "./createLucideIcon-BgnXjtcZ.js";
const _hoisted_1 = { class: "p-6 space-y-6 font-outfit text-slate-700" };
const _hoisted_2 = { class: "bg-white rounded-2xl shadow-sm border border-slate-100 p-4" };
const _hoisted_3 = { class: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4" };
const _hoisted_4 = { class: "flex items-center space-x-3 w-full sm:max-w-xs text-left" };
const _hoisted_5 = { class: "w-full" };
const _hoisted_6 = { class: "relative" };
const _hoisted_7 = ["value"];
const _hoisted_8 = { class: "absolute inset-y-0 right-3 flex items-center pointer-events-none text-slate-400" };
const _hoisted_9 = { class: "flex items-center space-x-3 sm:ml-auto" };
const _hoisted_10 = { class: "bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden text-left" };
const _hoisted_11 = { class: "overflow-x-auto" };
const _hoisted_12 = { class: "min-w-full divide-y divide-slate-100 text-xs" };
const _hoisted_13 = { class: "divide-y divide-slate-50" };
const _hoisted_14 = { class: "hover:bg-slate-50/50 transition-colors" };
const _hoisted_15 = { class: "px-6 py-4" };
const _hoisted_16 = { class: "font-bold text-slate-800 text-sm flex items-center gap-2" };
const _hoisted_17 = {
  key: 0,
  class: "text-[9px] font-bold bg-blue-50 text-blue-700 px-2 py-0.5 rounded-md border border-blue-100 uppercase"
};
const _hoisted_18 = { class: "text-[11px] text-slate-400 font-medium mt-0.5" };
const _hoisted_19 = { class: "px-6 py-4" };
const _hoisted_20 = { class: "font-bold text-slate-700" };
const _hoisted_21 = { class: "text-[10px] text-slate-400 font-semibold mt-0.5" };
const _hoisted_22 = { class: "px-6 py-4" };
const _hoisted_23 = { class: "font-bold text-slate-700" };
const _hoisted_24 = { class: "text-[10px] text-green-600 font-bold mt-0.5" };
const _hoisted_25 = { class: "px-6 py-4" };
const _hoisted_26 = ["onClick"];
const _hoisted_27 = { class: "px-6 py-4 space-y-1" };
const _hoisted_28 = { class: "px-6 py-4" };
const _hoisted_29 = { class: "px-6 py-4 text-right" };
const _hoisted_30 = { class: "flex items-center justify-end space-x-2" };
const _hoisted_31 = ["onClick"];
const _hoisted_32 = ["onClick"];
const _hoisted_33 = ["onClick"];
const _hoisted_34 = {
  key: 0,
  class: "bg-blue-50/20 border-t border-b border-blue-100"
};
const _hoisted_35 = {
  colspan: "7",
  class: "p-4"
};
const _hoisted_36 = { class: "bg-white rounded-2xl p-5 border border-slate-200/80 shadow-md space-y-5" };
const _hoisted_37 = { class: "flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-100 pb-4 gap-3" };
const _hoisted_38 = { class: "flex items-center space-x-2.5" };
const _hoisted_39 = { class: "p-2 bg-blue-50 text-blue-600 rounded-xl border border-blue-100" };
const _hoisted_40 = { class: "font-bold text-slate-700 text-sm" };
const _hoisted_41 = { class: "flex items-center space-x-3" };
const _hoisted_42 = { class: "flex items-center space-x-1.5 text-[11px] font-bold" };
const _hoisted_43 = { class: "bg-slate-100 text-slate-700 px-2.5 py-1 rounded-lg" };
const _hoisted_44 = { class: "bg-emerald-50 text-emerald-700 px-2.5 py-1 rounded-lg border border-emerald-100" };
const _hoisted_45 = { class: "bg-blue-50 text-blue-700 px-2.5 py-1 rounded-lg border border-blue-100" };
const _hoisted_46 = {
  key: 0,
  class: "bg-amber-50/90 p-4 rounded-2xl border border-amber-200/80 flex flex-col sm:flex-row items-center justify-between gap-3"
};
const _hoisted_47 = { class: "flex items-center space-x-3 text-left" };
const _hoisted_48 = { class: "p-2 bg-amber-100 text-amber-700 rounded-xl border border-amber-200/50" };
const _hoisted_49 = { class: "text-xs font-bold text-amber-900" };
const _hoisted_50 = ["onClick", "disabled"];
const _hoisted_51 = ["onSubmit"];
const _hoisted_52 = { class: "flex items-center justify-between border-b border-blue-100/60 pb-3" };
const _hoisted_53 = { class: "text-xs font-bold uppercase tracking-wider text-blue-900 flex items-center space-x-1.5" };
const _hoisted_54 = { class: "space-y-3" };
const _hoisted_55 = { class: "md:col-span-3" };
const _hoisted_56 = ["onUpdate:modelValue", "onInput"];
const _hoisted_57 = { class: "md:col-span-3" };
const _hoisted_58 = ["onUpdate:modelValue"];
const _hoisted_59 = { class: "md:col-span-2" };
const _hoisted_60 = ["onUpdate:modelValue", "max"];
const _hoisted_61 = ["onUpdate:modelValue"];
const _hoisted_62 = {
  key: 0,
  class: "md:col-span-1 flex justify-end"
};
const _hoisted_63 = ["onClick"];
const _hoisted_64 = { class: "flex items-center justify-between pt-2" };
const _hoisted_65 = { key: 1 };
const _hoisted_66 = ["disabled"];
const _hoisted_67 = { class: "space-y-3" };
const _hoisted_68 = { class: "flex items-center justify-between p-3.5 bg-slate-50/50" };
const _hoisted_69 = { class: "flex items-center space-x-3" };
const _hoisted_70 = { class: "font-bold text-slate-800 flex items-center gap-2 flex-wrap" };
const _hoisted_71 = {
  key: 0,
  class: "text-[9px] font-extrabold bg-blue-50 text-blue-700 px-1.5 py-0.5 rounded border border-blue-100 uppercase"
};
const _hoisted_72 = {
  key: 1,
  class: "text-[9px] font-bold bg-amber-50 text-amber-700 px-1.5 py-0.5 rounded border border-amber-100 uppercase"
};
const _hoisted_73 = { class: "text-[9px] font-bold bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded border border-emerald-100 uppercase" };
const _hoisted_74 = { class: "text-[10px] text-slate-400 mt-0.5" };
const _hoisted_75 = { class: "flex items-center space-x-2" };
const _hoisted_76 = ["onClick"];
const _hoisted_77 = ["onClick"];
const _hoisted_78 = {
  key: 0,
  class: "text-center py-4 text-[10px] font-bold text-slate-400 uppercase tracking-wider"
};
const _hoisted_79 = { key: 0 };
const _hoisted_80 = {
  colspan: "7",
  class: "px-6 py-16 text-center"
};
const _hoisted_81 = { class: "bg-white rounded-2xl shadow-2xl max-w-2xl w-full mx-auto overflow-hidden border border-slate-100 animate-in fade-in zoom-in duration-200 flex flex-col max-h-[90vh]" };
const _hoisted_82 = { class: "px-6 py-5 bg-gradient-to-r from-emerald-800 via-emerald-700 to-teal-800 text-white flex items-center justify-between text-left" };
const _hoisted_83 = { class: "flex items-center space-x-3" };
const _hoisted_84 = { class: "w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20" };
const _hoisted_85 = { class: "text-base font-bold text-white tracking-wide" };
const _hoisted_86 = { class: "grid grid-cols-1 md:grid-cols-2 gap-4" };
const _hoisted_87 = { class: "block text-[10px] font-bold text-slate-400 mb-1.5 uppercase tracking-wider flex items-center gap-1.5" };
const _hoisted_88 = ["value"];
const _hoisted_89 = { class: "block text-[10px] font-bold text-slate-400 mb-1.5 uppercase tracking-wider flex items-center gap-1.5" };
const _hoisted_90 = { class: "block text-[10px] font-bold text-slate-400 mb-1.5 uppercase tracking-wider flex items-center gap-1.5" };
const _hoisted_91 = { class: "block text-[10px] font-bold text-slate-400 mb-1.5 uppercase tracking-wider flex items-center gap-1.5" };
const _hoisted_92 = { class: "block text-[10px] font-bold text-slate-400 mb-1.5 uppercase tracking-wider flex items-center gap-1.5" };
const _hoisted_93 = {
  key: 0,
  class: "mt-2.5 p-3 bg-amber-50/80 border border-amber-200/60 rounded-xl flex items-start space-x-2.5"
};
const _hoisted_94 = { class: "p-3.5 bg-slate-50 rounded-xl border border-slate-100 flex flex-wrap items-center justify-between gap-3" };
const _hoisted_95 = { class: "flex items-center space-x-2.5 cursor-pointer select-none" };
const _hoisted_96 = { class: "flex items-center space-x-2.5 cursor-pointer select-none" };
const _hoisted_97 = { class: "flex items-center justify-end space-x-3 pt-4 border-t border-slate-100" };
const _hoisted_98 = ["disabled"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "SectionManagementPage",
  setup(__props) {
    const { showConfirm, showSuccess, showError } = useSwal();
    const { user } = useAuth();
    const sections = ref([]);
    const floors = ref([]);
    const loading = ref(false);
    const showModal = ref(false);
    const isEditing = ref(false);
    const selectedFloorId = ref(null);
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
      floor_id: null,
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
        has_subsections: false,
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
        has_subsections: !!section.has_subsections,
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
    const enableSubsectionsForSection = async (section) => {
      subLoading.value = true;
      try {
        const updatedPayload = {
          ...section,
          has_subsections: true
        };
        await librarianAPI.updateSection(section.id, updatedPayload);
        section.has_subsections = true;
        showSuccess("Subsections Enabled!", `Subsections are now enabled for ${section.name}.`);
        await fetchSections();
        showAddSubForm.value = true;
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
      } catch (error) {
        console.error("Error deleting subsection:", error);
        showError("Delete Failed", "Failed to delete subsection.");
      }
    };
    const buildQRPrintHTML = (title, subtitle, sectionBlocks) => {
      const libraryName = user.value?.library?.name || "SmartLib Library";
      let html = `
    <html>
      <head>
        <title>${title}</title>
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;800;900&display=swap" rel="stylesheet">
        <style>
          body { font-family: 'Outfit', sans-serif; margin: 0; padding: 40px 20px; background-color: #f8fafc; }
          .no-print { text-align: right; max-width: 1200px; margin: 0 auto 20px auto; }
          .no-print button { padding: 10px 20px; background: #059669; color: white; border: none; border-radius: 8px; cursor: pointer; font-weight: bold; font-size: 13px; box-shadow: 0 4px 6px rgba(0,0,0,0.05); transition: background 0.2s; }
          .no-print button:hover { background: #047857; }
          .page-header { text-align: center; margin-bottom: 30px; border-bottom: 2px solid #e2e8f0; padding-bottom: 20px; }
          .page-header h1 { font-size: 26px; font-weight: 900; color: #0f172a; margin: 0; letter-spacing: -0.025em; }
          .page-header p { font-size: 13px; color: #64748b; margin: 6px 0 0 0; font-weight: 600; }
          
          .section-block { margin-bottom: 45px; }
          .section-title { font-size: 20px; font-weight: 900; color: #0f172a; margin-bottom: 16px; padding-left: 12px; border-left: 4px solid #059669; text-transform: uppercase; letter-spacing: 0.025em; }
          
          .sub-block { margin-bottom: 30px; page-break-inside: avoid; }
          .sub-title { font-size: 13px; font-weight: 800; color: #0369a1; margin-bottom: 14px; background: #e0f2fe; padding: 6px 14px; border-radius: 8px; display: inline-block; border: 1px solid #bae6fd; text-transform: uppercase; letter-spacing: 0.05em; }
          
          .qr-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 28px; max-width: 1100px; margin: 0 auto 20px auto; }
          .qr-card { 
            background: white; 
            border: 2px solid #e2e8f0; 
            border-radius: 20px; 
            padding: 24px 20px 20px 20px; 
            text-align: center; 
            box-shadow: 0 4px 12px rgba(0,0,0,0.03); 
            page-break-inside: avoid; 
            display: flex; 
            flex-direction: column; 
            align-items: center; 
            justify-content: space-between; 
            min-height: 430px; 
            width: 100%; 
            max-width: 310px; 
            margin: 0 auto; 
            box-sizing: border-box; 
          }
          
          .card-top { width: 100%; border-bottom: 1.5px dashed #cbd5e1; padding-bottom: 12px; margin-bottom: 14px; text-align: center; display: flex; flex-direction: column; align-items: center; gap: 6px; }
          .top-library-name { font-size: 15px; font-weight: 900; color: #059669; text-transform: uppercase; letter-spacing: 0.08em; margin: 0; }
          
          .academic-badge { display: inline-block; padding: 4px 12px; font-size: 11px; font-weight: 800; border-radius: 9999px; letter-spacing: 0.08em; text-transform: uppercase; }
          .badge-prc { background: #dbeafe; color: #1e40af; border: 1px solid #93c5fd; }
          .badge-caf { background: #f3e8ff; color: #6b21a8; border: 1px solid #d8b4fe; }
          .badge-final { background: #fef3c7; color: #92400e; border: 1px solid #fde68a; }
          .badge-all { background: #f1f5f9; color: #475569; border: 1px solid #cbd5e1; }

          .qr-wrapper { background: #f8fafc; border: 1px solid #f1f5f9; border-radius: 14px; padding: 14px; display: inline-block; }
          .qr-image { width: 150px; height: 150px; object-fit: contain; display: block; }
          
          .seat-badge { font-size: 22px; font-weight: 900; color: #0f172a; margin: 12px 0 0 0; letter-spacing: -0.025em; text-transform: uppercase; }
          .meta-info { font-size: 11px; font-weight: 700; color: #64748b; margin: 4px 0 0 0; text-transform: uppercase; letter-spacing: 0.05em; }
          .scan-footer { font-size: 9px; font-weight: 700; text-transform: uppercase; color: #94a3b8; letter-spacing: 0.08em; margin-top: 14px; border-top: 1px solid #f1f5f9; padding-top: 8px; width: 100%; }
          
          @media print {
            .no-print { display: none; }
            body { background: white; padding: 0; }
            .qr-grid { grid-template-columns: repeat(3, 1fr); gap: 20px; }
            .qr-card { box-shadow: none; border: 2px solid #94a3b8; }
            .section-block { page-break-after: always; }
          }
        </style>
      </head>
      <body>
        <div class="no-print">
          <button onclick="window.print()">Print QR Codes</button>
        </div>
        <div class="page-header">
          <h1>${title}</h1>
          <p>${subtitle}</p>
        </div>
  `;
      sectionBlocks.forEach((sec) => {
        html += `<div class="section-block">`;
        html += `<div class="section-title">${sec.name} ${sec.floorName ? `(${sec.floorName})` : ""}</div>`;
        const subMap = /* @__PURE__ */ new Map();
        if (sec.subsections && Array.isArray(sec.subsections)) {
          sec.subsections.forEach((sub) => subMap.set(sub.id, sub));
        }
        const subGroups = {};
        (sec.seats || []).forEach((seat) => {
          const subId = seat.seat_subsection_id || seat.subsection_id || seat.seat_subsection?.id;
          const subObj = seat.seat_subsection || seat.subsection || (subId ? subMap.get(subId) : null);
          if (subObj && !seat.seat_subsection) {
            seat.seat_subsection = subObj;
          }
          const subName = subObj?.name || subObj?.code || null;
          const key = subName ? `${subName} Subsection` : `${sec.name} (General Seats)`;
          if (!subGroups[key]) subGroups[key] = [];
          subGroups[key].push(seat);
        });
        Object.keys(subGroups).forEach((subKey) => {
          const seats = subGroups[subKey];
          html += `
        <div class="sub-block">
          <div class="sub-title">${subKey} (${seats.length} Seats)</div>
          <div class="qr-grid">
      `;
          seats.forEach((seat) => {
            const qrUrl = seat.qr_code_url || `/storage/qrcodes/seats/seat-${seat.id}.svg`;
            const displaySeatName = seat.seat_type === "private_room" ? `CABIN ${seat.cabin_number || seat.seat_number}` : seat.seat_number;
            const subObj = seat.seat_subsection || seat.subsection || null;
            const rawLevel = String(seat.academic_level || subObj?.academic_level || (subObj ? null : sec.academic_level) || "all").toUpperCase();
            let levelClass = "badge-all";
            let levelLabel = "ALL LEVELS";
            if (rawLevel.includes("PRC")) {
              levelClass = "badge-prc";
              levelLabel = "PRC";
            } else if (rawLevel.includes("CAF")) {
              levelClass = "badge-caf";
              levelLabel = "CAF";
            } else if (rawLevel.includes("FINAL")) {
              levelClass = "badge-final";
              levelLabel = "FINAL";
            }
            html += `
          <div class="qr-card">
            <div class="card-top">
              <div class="top-library-name">${libraryName}</div>
              <div class="academic-badge ${levelClass}">${levelLabel}</div>
            </div>
            <div class="qr-wrapper">
              <img src="${qrUrl}" class="qr-image" onerror="this.src='https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(seat.qr_code || seat.seat_number)}'" />
            </div>
            <div>
              <div class="seat-badge">${displaySeatName}</div>
              <div class="meta-info">${sec.name} &bull; ${sec.floorName || ""}</div>
            </div>
            <div class="scan-footer">Scan to Check-In / Check-Out</div>
          </div>
        `;
          });
          html += `
          </div>
        </div>
      `;
        });
        html += `</div>`;
      });
      html += `
      </body>
    </html>
  `;
      return html;
    };
    const printSectionQRs = (section) => {
      const printWindow = window.open("", "_blank");
      if (!printWindow) return;
      const libraryName = user.value?.library?.name || "SmartLib Library";
      const html = buildQRPrintHTML(
        `Section QR Codes - ${section.name}`,
        `${libraryName} • Floor: ${section.floor?.name || "N/A"}`,
        [{
          name: section.name,
          floorName: section.floor?.name || "N/A",
          seats: section.seats || []
        }]
      );
      printWindow.document.write(html);
      printWindow.document.close();
    };
    const printAllQRs = () => {
      const printWindow = window.open("", "_blank");
      if (!printWindow) return;
      const libraryName = user.value?.library?.name || "SmartLib Library";
      const blocks = sections.value.map((sec) => ({
        name: sec.name,
        floorName: sec.floor?.name || "N/A",
        seats: sec.seats || []
      }));
      const html = buildQRPrintHTML(
        "Library Seat QR Codes (Bulk Export)",
        `${libraryName} • All Sections & Subsections`,
        blocks
      );
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
                _cache[14] || (_cache[14] = createBaseVNode("label", { class: "block text-[10px] font-bold text-slate-400 mb-1 uppercase tracking-wider" }, "Filter by Floor", -1)),
                createBaseVNode("div", _hoisted_6, [
                  withDirectives(createBaseVNode("select", {
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => selectedFloorId.value = $event),
                    onChange: fetchSections,
                    class: "w-full pl-9 pr-8 py-2.5 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-400 transition-all text-xs text-slate-700 font-semibold bg-slate-50/50 appearance-none cursor-pointer shadow-sm"
                  }, [
                    _cache[13] || (_cache[13] = createBaseVNode("option", { value: null }, "All Floors", -1)),
                    (openBlock(true), createElementBlock(Fragment, null, renderList(floors.value, (floor) => {
                      return openBlock(), createElementBlock("option", {
                        key: floor.id,
                        value: floor.id
                      }, toDisplayString(floor.name) + " (Level " + toDisplayString(floor.level) + ") ", 9, _hoisted_7);
                    }), 128))
                  ], 544), [
                    [vModelSelect, selectedFloorId.value]
                  ]),
                  createVNode(unref(Building2), { class: "w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" }),
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
                _cache[15] || (_cache[15] = createBaseVNode("span", null, "Print All Bulk", -1))
              ]),
              createBaseVNode("button", {
                onClick: openCreateModal,
                class: "px-4.5 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl transition-all flex items-center space-x-2 text-xs font-bold shadow-md shadow-emerald-700/10 cursor-pointer active:scale-98"
              }, [
                createVNode(unref(Plus), { class: "w-4 h-4" }),
                _cache[16] || (_cache[16] = createBaseVNode("span", null, "Add Section", -1))
              ])
            ])
          ])
        ]),
        createBaseVNode("div", _hoisted_10, [
          createBaseVNode("div", _hoisted_11, [
            createBaseVNode("table", _hoisted_12, [
              _cache[31] || (_cache[31] = createBaseVNode("thead", null, [
                createBaseVNode("tr", { class: "bg-slate-50/70 text-slate-400 font-bold uppercase tracking-wider border-b border-slate-100" }, [
                  createBaseVNode("th", { class: "px-6 py-4 font-semibold" }, "Section details"),
                  createBaseVNode("th", { class: "px-6 py-4 font-semibold" }, "Floor level"),
                  createBaseVNode("th", { class: "px-6 py-4 font-semibold" }, "Seat stats"),
                  createBaseVNode("th", { class: "px-6 py-4 font-semibold" }, "Subsections"),
                  createBaseVNode("th", { class: "px-6 py-4 font-semibold" }, "Restrictions"),
                  createBaseVNode("th", { class: "px-6 py-4 font-semibold" }, "Status"),
                  createBaseVNode("th", { class: "px-6 py-4 text-right font-semibold" }, "Actions")
                ])
              ], -1)),
              createBaseVNode("tbody", _hoisted_13, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(sections.value, (section) => {
                  return openBlock(), createElementBlock(Fragment, {
                    key: section.id
                  }, [
                    createBaseVNode("tr", _hoisted_14, [
                      createBaseVNode("td", _hoisted_15, [
                        createBaseVNode("div", _hoisted_16, [
                          createBaseVNode("span", null, toDisplayString(section.name), 1),
                          section.has_subsections ? (openBlock(), createElementBlock("span", _hoisted_17, "Subsections Enabled")) : createCommentVNode("", true)
                        ]),
                        createBaseVNode("div", _hoisted_18, toDisplayString(section.description || "No description provided"), 1)
                      ]),
                      createBaseVNode("td", _hoisted_19, [
                        createBaseVNode("div", _hoisted_20, toDisplayString(section.floor?.name || "N/A"), 1),
                        createBaseVNode("div", _hoisted_21, "Level " + toDisplayString(section.floor?.level ?? "0"), 1)
                      ]),
                      createBaseVNode("td", _hoisted_22, [
                        createBaseVNode("div", _hoisted_23, toDisplayString(section.total_seats) + " total", 1),
                        createBaseVNode("div", _hoisted_24, toDisplayString(section.available_seats) + " available", 1)
                      ]),
                      createBaseVNode("td", _hoisted_25, [
                        createBaseVNode("button", {
                          onClick: ($event) => toggleSubsectionDrawer(section),
                          class: normalizeClass([
                            "px-2.5 py-1 rounded-lg text-[10px] font-bold border transition-all flex items-center space-x-1 cursor-pointer",
                            section.has_subsections ? "bg-blue-50 border-blue-200 text-blue-700 hover:bg-blue-100" : "bg-slate-50 border-slate-200 text-slate-500 hover:bg-slate-100"
                          ])
                        }, [
                          createVNode(unref(Layers), { class: "w-3.5 h-3.5" }),
                          createBaseVNode("span", null, toDisplayString(section.subsections?.length ? `${section.subsections.length} Subsections` : section.has_subsections ? "+ Manage" : "Disabled"), 1)
                        ], 10, _hoisted_26)
                      ]),
                      createBaseVNode("td", _hoisted_27, [
                        createBaseVNode("div", null, [
                          createBaseVNode("span", {
                            class: normalizeClass([
                              "px-2 py-0.5 rounded text-[9px] font-bold uppercase border inline-block mr-1",
                              section.gender === "male" ? "bg-blue-50 border-blue-100 text-blue-700" : section.gender === "female" ? "bg-pink-50 border-pink-100 text-pink-700" : "bg-emerald-50 border-emerald-100 text-emerald-700"
                            ])
                          }, toDisplayString(section.gender === "male" ? "Male Only" : section.gender === "female" ? "Female Only" : "Mixed (All)"), 3)
                        ]),
                        createBaseVNode("div", null, [
                          createBaseVNode("span", {
                            class: normalizeClass([
                              "px-2 py-0.5 rounded text-[9px] font-bold uppercase border inline-block",
                              section.academic_level === "PRC" ? "bg-amber-50 border-amber-100 text-amber-700" : section.academic_level === "CAF" ? "bg-cyan-50 border-cyan-100 text-cyan-700" : section.academic_level === "Final" ? "bg-purple-50 border-purple-100 text-purple-700" : "bg-slate-50 border-slate-200 text-slate-600"
                            ])
                          }, toDisplayString(section.academic_level === "all" || !section.academic_level ? "All Academic Levels" : section.academic_level), 3)
                        ])
                      ]),
                      createBaseVNode("td", _hoisted_28, [
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
                      createBaseVNode("td", _hoisted_29, [
                        createBaseVNode("div", _hoisted_30, [
                          createBaseVNode("button", {
                            onClick: ($event) => printSectionQRs(section),
                            class: "px-2.5 py-1.5 text-slate-600 bg-slate-50 hover:bg-slate-100 rounded-lg font-bold border border-slate-200/60 cursor-pointer inline-flex items-center gap-1"
                          }, [
                            createVNode(unref(Printer), { class: "w-3.5 h-3.5" }),
                            _cache[17] || (_cache[17] = createBaseVNode("span", null, "Print QR", -1))
                          ], 8, _hoisted_31),
                          createBaseVNode("button", {
                            onClick: ($event) => editSection(section),
                            class: "px-2.5 py-1.5 text-emerald-700 bg-emerald-50 hover:bg-emerald-100 rounded-lg font-bold border border-emerald-100 cursor-pointer"
                          }, " Edit ", 8, _hoisted_32),
                          createBaseVNode("button", {
                            onClick: ($event) => confirmDelete(section),
                            class: "px-2.5 py-1.5 text-red-600 bg-red-50 hover:bg-red-100 rounded-lg font-bold border border-red-100 cursor-pointer"
                          }, " Delete ", 8, _hoisted_33)
                        ])
                      ])
                    ]),
                    activeSubsectionSectionId.value === section.id ? (openBlock(), createElementBlock("tr", _hoisted_34, [
                      createBaseVNode("td", _hoisted_35, [
                        createBaseVNode("div", _hoisted_36, [
                          createBaseVNode("div", _hoisted_37, [
                            createBaseVNode("div", _hoisted_38, [
                              createBaseVNode("div", _hoisted_39, [
                                createVNode(unref(Layers), { class: "w-5 h-5" })
                              ]),
                              createBaseVNode("div", null, [
                                createBaseVNode("h5", _hoisted_40, " Subsections under " + toDisplayString(section.name), 1),
                                _cache[18] || (_cache[18] = createBaseVNode("p", { class: "text-[11px] text-slate-400 font-medium" }, "Divide section capacity into specific subsections (e.g. PRC, CAF, Final Level)", -1))
                              ])
                            ]),
                            createBaseVNode("div", _hoisted_41, [
                              createBaseVNode("div", _hoisted_42, [
                                createBaseVNode("span", _hoisted_43, " Capacity: " + toDisplayString(section.total_seats) + " Seats ", 1),
                                createBaseVNode("span", _hoisted_44, " Allocated: " + toDisplayString(getAllocatedSubSeats(section)), 1),
                                createBaseVNode("span", _hoisted_45, " Unallocated: " + toDisplayString(Math.max(0, section.total_seats - getAllocatedSubSeats(section))), 1)
                              ]),
                              !!section.has_subsections && !showAddSubForm.value && section.subsections && section.subsections.length > 0 ? (openBlock(), createElementBlock("button", {
                                key: 0,
                                onClick: openAddSubForm,
                                class: "px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-bold transition-all flex items-center space-x-1 cursor-pointer shadow-xs"
                              }, [
                                createVNode(unref(Plus), { class: "w-3.5 h-3.5" }),
                                _cache[19] || (_cache[19] = createBaseVNode("span", null, "+ Add Subsection", -1))
                              ])) : createCommentVNode("", true),
                              createBaseVNode("button", {
                                onClick: _cache[1] || (_cache[1] = ($event) => activeSubsectionSectionId.value = null),
                                class: "px-2.5 py-1 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg text-xs font-bold transition-all cursor-pointer"
                              }, " Close × ")
                            ])
                          ]),
                          !section.has_subsections ? (openBlock(), createElementBlock("div", _hoisted_46, [
                            createBaseVNode("div", _hoisted_47, [
                              createBaseVNode("div", _hoisted_48, [
                                createVNode(unref(TriangleAlert), { class: "w-5 h-5" })
                              ]),
                              createBaseVNode("div", null, [
                                createBaseVNode("h6", _hoisted_49, "Subsections are currently disabled for " + toDisplayString(section.name), 1),
                                _cache[20] || (_cache[20] = createBaseVNode("p", { class: "text-[11px] text-amber-700 font-medium mt-0.5" }, "Enable subsections first to add and assign subsections to this section.", -1))
                              ])
                            ]),
                            createBaseVNode("button", {
                              onClick: ($event) => enableSubsectionsForSection(section),
                              disabled: subLoading.value,
                              class: "px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-xl text-xs font-bold transition-all shrink-0 cursor-pointer shadow-xs disabled:opacity-50 flex items-center space-x-1.5"
                            }, [
                              createVNode(unref(Plus), { class: "w-3.5 h-3.5" }),
                              _cache[21] || (_cache[21] = createBaseVNode("span", null, "Enable Subsections Now", -1))
                            ], 8, _hoisted_50)
                          ])) : createCommentVNode("", true),
                          !!section.has_subsections && (showAddSubForm.value || !section.subsections || section.subsections.length === 0) ? (openBlock(), createElementBlock("form", {
                            key: 1,
                            onSubmit: withModifiers(($event) => saveSubsection(section.id), ["prevent"]),
                            class: "bg-blue-50/40 p-4 rounded-2xl border border-blue-100/80 space-y-4"
                          }, [
                            createBaseVNode("div", _hoisted_52, [
                              createBaseVNode("span", _hoisted_53, [
                                _cache[22] || (_cache[22] = createBaseVNode("span", { class: "w-2 h-2 rounded-full bg-blue-600" }, null, -1)),
                                createBaseVNode("span", null, toDisplayString(isSubEditing.value ? "Edit Subsection" : "Add Subsections"), 1)
                              ]),
                              createBaseVNode("button", {
                                type: "button",
                                onClick: closeAddSubForm,
                                class: "text-[11px] text-slate-500 hover:text-slate-700 font-bold cursor-pointer bg-white px-2.5 py-1 rounded-lg border border-slate-200"
                              }, " Cancel ")
                            ]),
                            createBaseVNode("div", _hoisted_54, [
                              (openBlock(true), createElementBlock(Fragment, null, renderList(subFormRows.value, (subRow, index) => {
                                return openBlock(), createElementBlock("div", {
                                  key: index,
                                  class: "grid grid-cols-1 md:grid-cols-12 gap-3 items-end bg-white p-3 rounded-xl border border-slate-200/80 shadow-xs"
                                }, [
                                  createBaseVNode("div", _hoisted_55, [
                                    _cache[23] || (_cache[23] = createBaseVNode("label", { class: "block text-[10px] font-bold text-slate-500 uppercase mb-1" }, "Subsection Name", -1)),
                                    withDirectives(createBaseVNode("input", {
                                      "onUpdate:modelValue": ($event) => subRow.name = $event,
                                      onInput: ($event) => onSubRowNameInput(subRow),
                                      type: "text",
                                      required: "",
                                      placeholder: "e.g. PRC, CAF, Final",
                                      class: "w-full px-3 py-2 border border-slate-200 rounded-xl text-xs font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                                    }, null, 40, _hoisted_56), [
                                      [vModelText, subRow.name]
                                    ])
                                  ]),
                                  createBaseVNode("div", _hoisted_57, [
                                    _cache[24] || (_cache[24] = createBaseVNode("label", { class: "block text-[10px] font-bold text-slate-500 uppercase mb-1" }, "Seat Code / Prefix", -1)),
                                    withDirectives(createBaseVNode("input", {
                                      "onUpdate:modelValue": ($event) => subRow.code = $event,
                                      type: "text",
                                      required: "",
                                      placeholder: "e.g. PRC, CAF, Final",
                                      class: "w-full px-3 py-2 border border-slate-200 rounded-xl text-xs font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                                    }, null, 8, _hoisted_58), [
                                      [vModelText, subRow.code]
                                    ])
                                  ]),
                                  createBaseVNode("div", _hoisted_59, [
                                    _cache[25] || (_cache[25] = createBaseVNode("label", { class: "block text-[10px] font-bold text-slate-500 uppercase mb-1" }, "Seats Allocated", -1)),
                                    withDirectives(createBaseVNode("input", {
                                      "onUpdate:modelValue": ($event) => subRow.total_seats = $event,
                                      type: "number",
                                      min: "0",
                                      max: section.total_seats,
                                      placeholder: "e.g. 20",
                                      class: "w-full px-3 py-2 border border-slate-200 rounded-xl text-xs font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                                    }, null, 8, _hoisted_60), [
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
                                    _cache[27] || (_cache[27] = createBaseVNode("label", { class: "block text-[10px] font-bold text-slate-500 uppercase mb-1" }, "Academic Level", -1)),
                                    withDirectives(createBaseVNode("select", {
                                      "onUpdate:modelValue": ($event) => subRow.academic_level = $event,
                                      class: "w-full px-3 py-2 border border-slate-200 rounded-xl text-xs font-bold text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 cursor-pointer"
                                    }, [..._cache[26] || (_cache[26] = [
                                      createBaseVNode("option", { value: "all" }, "Inherit / All Students", -1),
                                      createBaseVNode("option", { value: "PRC" }, "PRC Students Only", -1),
                                      createBaseVNode("option", { value: "CAF" }, "CAF Students Only", -1),
                                      createBaseVNode("option", { value: "Final" }, "Final Year Students Only", -1)
                                    ])], 8, _hoisted_61), [
                                      [vModelSelect, subRow.academic_level]
                                    ])
                                  ], 2),
                                  subFormRows.value.length > 1 && !isSubEditing.value ? (openBlock(), createElementBlock("div", _hoisted_62, [
                                    createBaseVNode("button", {
                                      type: "button",
                                      onClick: ($event) => removeSubRow(index),
                                      class: "p-2 text-rose-500 hover:bg-rose-50 rounded-lg transition-colors cursor-pointer",
                                      title: "Remove row"
                                    }, [
                                      createVNode(unref(X), { class: "w-4 h-4" })
                                    ], 8, _hoisted_63)
                                  ])) : createCommentVNode("", true)
                                ]);
                              }), 128))
                            ]),
                            createBaseVNode("div", _hoisted_64, [
                              !isSubEditing.value ? (openBlock(), createElementBlock("button", {
                                key: 0,
                                type: "button",
                                onClick: addSubRow,
                                class: "px-3.5 py-2 bg-blue-100 hover:bg-blue-200 text-blue-700 rounded-xl text-xs font-bold transition-all flex items-center space-x-1.5 cursor-pointer"
                              }, [
                                createVNode(unref(Plus), { class: "w-4 h-4" }),
                                _cache[28] || (_cache[28] = createBaseVNode("span", null, "+ Add Another Subsection", -1))
                              ])) : (openBlock(), createElementBlock("div", _hoisted_65)),
                              createBaseVNode("button", {
                                type: "submit",
                                disabled: subLoading.value,
                                class: "px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold transition-all disabled:opacity-50 shadow-sm cursor-pointer"
                              }, toDisplayString(subLoading.value ? "Saving..." : isSubEditing.value ? "Save Changes" : "Save Subsections"), 9, _hoisted_66)
                            ])
                          ], 40, _hoisted_51)) : createCommentVNode("", true),
                          createBaseVNode("div", _hoisted_67, [
                            (openBlock(true), createElementBlock(Fragment, null, renderList(section.subsections, (sub) => {
                              return openBlock(), createElementBlock("div", {
                                key: sub.id,
                                class: "bg-white border border-slate-100 rounded-xl overflow-hidden shadow-xs transition-all hover:border-blue-200"
                              }, [
                                createBaseVNode("div", _hoisted_68, [
                                  createBaseVNode("div", _hoisted_69, [
                                    createBaseVNode("span", {
                                      class: normalizeClass(["w-2.5 h-2.5 rounded-full", sub.is_active ? "bg-emerald-500" : "bg-rose-400"])
                                    }, null, 2),
                                    createBaseVNode("div", null, [
                                      createBaseVNode("div", _hoisted_70, [
                                        createBaseVNode("span", null, toDisplayString(sub.name), 1),
                                        sub.code && sub.code.toLowerCase() !== sub.name.toLowerCase() ? (openBlock(), createElementBlock("span", _hoisted_71, "Prefix: " + toDisplayString(sub.code), 1)) : createCommentVNode("", true),
                                        sub.academic_level && sub.academic_level !== "all" && sub.academic_level.toLowerCase() !== sub.name.toLowerCase() ? (openBlock(), createElementBlock("span", _hoisted_72, toDisplayString(sub.academic_level), 1)) : createCommentVNode("", true),
                                        createBaseVNode("span", _hoisted_73, toDisplayString(sub.total_seats || 0) + " Seats Allocated", 1)
                                      ]),
                                      createBaseVNode("div", _hoisted_74, toDisplayString(sub.description || "No description") + " • " + toDisplayString(sub.seats?.length || sub.seats_count || 0) + " assigned seats", 1)
                                    ])
                                  ]),
                                  createBaseVNode("div", _hoisted_75, [
                                    createBaseVNode("button", {
                                      onClick: ($event) => editSubsection(sub),
                                      class: "px-3 py-1.5 text-xs text-blue-600 hover:bg-blue-50 rounded-lg font-bold transition-colors cursor-pointer"
                                    }, " Edit ", 8, _hoisted_76),
                                    createBaseVNode("button", {
                                      onClick: ($event) => deleteSubsection(section.id, sub.id),
                                      class: "px-3 py-1.5 text-xs text-rose-600 hover:bg-rose-50 rounded-lg font-bold transition-colors cursor-pointer"
                                    }, " Delete ", 8, _hoisted_77)
                                  ])
                                ])
                              ]);
                            }), 128)),
                            !section.subsections || section.subsections.length === 0 ? (openBlock(), createElementBlock("div", _hoisted_78, " No subsections created yet. Add one above. ")) : createCommentVNode("", true)
                          ])
                        ])
                      ])
                    ])) : createCommentVNode("", true)
                  ], 64);
                }), 128)),
                sections.value.length === 0 && !loading.value ? (openBlock(), createElementBlock("tr", _hoisted_79, [
                  createBaseVNode("td", _hoisted_80, [
                    createVNode(unref(Building2), { class: "w-10 h-10 text-slate-200 mx-auto mb-3" }),
                    _cache[29] || (_cache[29] = createBaseVNode("p", { class: "text-slate-400 font-semibold uppercase tracking-wider text-[11px]" }, "No sections found", -1)),
                    _cache[30] || (_cache[30] = createBaseVNode("p", { class: "text-[10px] text-slate-400 mt-0.5" }, 'Click "Add Section" to configure library space partitions.', -1))
                  ])
                ])) : createCommentVNode("", true)
              ])
            ])
          ])
        ]),
        showModal.value ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: "fixed inset-0 bg-slate-900/60 backdrop-blur-md flex items-center justify-center z-50 p-4",
          onClick: _cache[12] || (_cache[12] = withModifiers(($event) => showModal.value = false, ["self"]))
        }, [
          createBaseVNode("div", _hoisted_81, [
            createBaseVNode("div", _hoisted_82, [
              createBaseVNode("div", _hoisted_83, [
                createBaseVNode("div", _hoisted_84, [
                  createVNode(unref(Layers), { class: "w-5 h-5 text-white" })
                ]),
                createBaseVNode("div", null, [
                  createBaseVNode("h3", _hoisted_85, toDisplayString(isEditing.value ? "Edit Section Settings" : "Add New Section"), 1),
                  _cache[32] || (_cache[32] = createBaseVNode("p", { class: "text-[11px] text-emerald-100/80 font-medium" }, "Configure seating capacity, floor level, and access rules", -1))
                ])
              ]),
              createBaseVNode("button", {
                onClick: _cache[2] || (_cache[2] = ($event) => showModal.value = false),
                class: "p-2 hover:bg-white/10 rounded-xl transition-colors cursor-pointer text-white/80 hover:text-white"
              }, [
                createVNode(unref(X), { class: "w-5 h-5" })
              ])
            ]),
            createBaseVNode("form", {
              onSubmit: withModifiers(saveSection, ["prevent"]),
              class: "p-6 overflow-y-auto space-y-5 text-left flex-1"
            }, [
              createBaseVNode("div", _hoisted_86, [
                createBaseVNode("div", null, [
                  createBaseVNode("label", _hoisted_87, [
                    createVNode(unref(Building2), { class: "w-3.5 h-3.5 text-emerald-600" }),
                    _cache[33] || (_cache[33] = createTextVNode(" Floor Level ", -1))
                  ]),
                  withDirectives(createBaseVNode("select", {
                    "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => form.value.floor_id = $event),
                    required: "",
                    class: "w-full px-3.5 py-2.5 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all text-xs text-slate-700 font-semibold bg-slate-50/50 cursor-pointer"
                  }, [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(floors.value, (floor) => {
                      return openBlock(), createElementBlock("option", {
                        key: floor.id,
                        value: floor.id
                      }, toDisplayString(floor.name) + " (Level " + toDisplayString(floor.level) + ") ", 9, _hoisted_88);
                    }), 128))
                  ], 512), [
                    [vModelSelect, form.value.floor_id]
                  ])
                ]),
                createBaseVNode("div", null, [
                  createBaseVNode("label", _hoisted_89, [
                    createVNode(unref(Layers), { class: "w-3.5 h-3.5 text-emerald-600" }),
                    _cache[34] || (_cache[34] = createTextVNode(" Section Name ", -1))
                  ]),
                  withDirectives(createBaseVNode("input", {
                    "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => form.value.name = $event),
                    type: "text",
                    required: "",
                    class: "w-full px-3.5 py-2.5 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all text-xs text-slate-700 font-semibold bg-slate-50/50 placeholder:font-normal",
                    placeholder: "e.g. Boys Section / Quiet Study Zone"
                  }, null, 512), [
                    [vModelText, form.value.name]
                  ])
                ]),
                createBaseVNode("div", null, [
                  createBaseVNode("label", _hoisted_90, [
                    createVNode(unref(Users), { class: "w-3.5 h-3.5 text-emerald-600" }),
                    _cache[35] || (_cache[35] = createTextVNode(" Gender Restriction ", -1))
                  ]),
                  withDirectives(createBaseVNode("select", {
                    "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => form.value.gender = $event),
                    required: "",
                    class: "w-full px-3.5 py-2.5 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all text-xs text-slate-700 font-semibold bg-slate-50/50 cursor-pointer"
                  }, [..._cache[36] || (_cache[36] = [
                    createBaseVNode("option", { value: "mixed" }, "Mixed (Available for All)", -1),
                    createBaseVNode("option", { value: "male" }, "Male Only", -1),
                    createBaseVNode("option", { value: "female" }, "Female Only", -1)
                  ])], 512), [
                    [vModelSelect, form.value.gender]
                  ])
                ]),
                createBaseVNode("div", null, [
                  createBaseVNode("label", _hoisted_91, [
                    createVNode(unref(GraduationCap), { class: "w-3.5 h-3.5 text-emerald-600" }),
                    _cache[37] || (_cache[37] = createTextVNode(" Academic Level Restriction ", -1))
                  ]),
                  withDirectives(createBaseVNode("select", {
                    "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => form.value.academic_level = $event),
                    required: "",
                    class: "w-full px-3.5 py-2.5 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all text-xs text-slate-700 font-semibold bg-slate-50/50 cursor-pointer"
                  }, [..._cache[38] || (_cache[38] = [
                    createBaseVNode("option", { value: "all" }, "Available for All Levels", -1),
                    createBaseVNode("option", { value: "PRC" }, "PRC Students Only", -1),
                    createBaseVNode("option", { value: "CAF" }, "CAF Students Only", -1),
                    createBaseVNode("option", { value: "Final" }, "Final Year Students Only", -1)
                  ])], 512), [
                    [vModelSelect, form.value.academic_level]
                  ])
                ])
              ]),
              createBaseVNode("div", null, [
                createBaseVNode("label", _hoisted_92, [
                  createVNode(unref(Armchair), { class: "w-3.5 h-3.5 text-emerald-600" }),
                  _cache[39] || (_cache[39] = createTextVNode(" Total Seats ", -1))
                ]),
                withDirectives(createBaseVNode("input", {
                  "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => form.value.total_seats = $event),
                  type: "number",
                  required: "",
                  class: "w-full px-3.5 py-2.5 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all text-xs text-slate-700 font-bold bg-slate-50/50",
                  placeholder: "e.g. 50"
                }, null, 512), [
                  [
                    vModelText,
                    form.value.total_seats,
                    void 0,
                    { number: true }
                  ]
                ]),
                isEditing.value ? (openBlock(), createElementBlock("div", _hoisted_93, [
                  createVNode(unref(TriangleAlert), { class: "w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" }),
                  _cache[40] || (_cache[40] = createBaseVNode("p", { class: "text-[11px] text-amber-800 font-medium leading-relaxed" }, [
                    createBaseVNode("span", { class: "font-bold" }, "Important Note:"),
                    createTextVNode(" Changing total seat count will automatically sync and generate or prune seat records for this section. ")
                  ], -1))
                ])) : createCommentVNode("", true)
              ]),
              createBaseVNode("div", null, [
                _cache[41] || (_cache[41] = createBaseVNode("label", { class: "block text-[10px] font-bold text-slate-400 mb-1.5 uppercase tracking-wider" }, "Description (Optional)", -1)),
                withDirectives(createBaseVNode("textarea", {
                  "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => form.value.description = $event),
                  rows: "2",
                  class: "w-full px-3.5 py-2.5 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all text-xs text-slate-700 font-medium bg-slate-50/50 resize-none placeholder:font-normal",
                  placeholder: "e.g. Near window, quiet area for intensive study"
                }, null, 512), [
                  [vModelText, form.value.description]
                ])
              ]),
              createBaseVNode("div", _hoisted_94, [
                createBaseVNode("label", _hoisted_95, [
                  withDirectives(createBaseVNode("input", {
                    "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => form.value.is_active = $event),
                    type: "checkbox",
                    class: "w-4 h-4 rounded text-emerald-600 focus:ring-emerald-500 cursor-pointer"
                  }, null, 512), [
                    [vModelCheckbox, form.value.is_active]
                  ]),
                  _cache[42] || (_cache[42] = createBaseVNode("span", { class: "text-xs font-bold text-slate-700" }, "Mark Section Active", -1))
                ]),
                createBaseVNode("label", _hoisted_96, [
                  withDirectives(createBaseVNode("input", {
                    "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => form.value.has_subsections = $event),
                    type: "checkbox",
                    class: "w-4 h-4 rounded text-blue-600 focus:ring-blue-500 cursor-pointer"
                  }, null, 512), [
                    [vModelCheckbox, form.value.has_subsections]
                  ]),
                  _cache[43] || (_cache[43] = createBaseVNode("span", { class: "text-xs font-bold text-blue-700" }, "Enable Subsections", -1))
                ])
              ]),
              createBaseVNode("div", _hoisted_97, [
                createBaseVNode("button", {
                  type: "button",
                  onClick: _cache[11] || (_cache[11] = ($event) => showModal.value = false),
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
                  createBaseVNode("span", null, toDisplayString(loading.value ? "Saving..." : isEditing.value ? "Update Section" : "Create Section"), 1)
                ], 8, _hoisted_98)
              ])
            ], 32)
          ])
        ])) : createCommentVNode("", true)
      ]);
    };
  }
});
const SectionManagementPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-131b04d8"]]);
export {
  SectionManagementPage as default
};
