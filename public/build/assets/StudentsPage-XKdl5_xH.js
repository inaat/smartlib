import { d as defineComponent, r as ref, I as watch, o as onMounted, a as computed, b as createElementBlock, e as createBaseVNode, p as createCommentVNode, g as createVNode, u as unref, F as Fragment, k as renderList, s as withDirectives, v as vModelText, H as vModelSelect, t as toDisplayString, B as withModifiers, f as createStaticVNode, E as vModelCheckbox, W as librarianAPI, n as normalizeClass, i as createBlock, q as resolveDynamicComponent, C as Clock, j as createTextVNode, m as openBlock, _ as _export_sfc } from "./main-BeUqjoax.js";
import { u as useSwal, S as Swal } from "./useSwal-pQW_XkRe.js";
import { E } from "./jspdf.es.min-D1YaxGZx.js";
import { D as Download } from "./download-DDe5Tczq.js";
import { U as UserPlus } from "./user-plus-BNSWS0xt.js";
import { S as Search } from "./search-CAjRd0eY.js";
import { U as Users } from "./users-DgA2REmn.js";
import { X } from "./x-Dj9LNodU.js";
import { U as UserCheck } from "./user-check-gjs1HmON.js";
import { T as TrendingUp } from "./trending-up-BPT833jM.js";
import { M as Mail } from "./mail-CdJEFECh.js";
import { P as Phone } from "./phone-DeUaZgMM.js";
import { E as Eye } from "./eye-DWPQPwXh.js";
/* empty css               */
const _hoisted_1 = { class: "p-6 space-y-6 font-outfit" };
const _hoisted_2 = { class: "flex justify-end items-center mb-6" };
const _hoisted_3 = { class: "flex items-center space-x-3" };
const _hoisted_4 = { class: "grid grid-cols-1 md:grid-cols-4 gap-6" };
const _hoisted_5 = { class: "text-left" };
const _hoisted_6 = { class: "text-xs font-bold text-slate-400 uppercase tracking-widest" };
const _hoisted_7 = { class: "text-2xl font-black text-slate-800 mt-1.5" };
const _hoisted_8 = { class: "bg-white rounded-2xl shadow-sm border border-slate-100 p-4" };
const _hoisted_9 = { class: "flex flex-col md:flex-row items-center gap-4" };
const _hoisted_10 = { class: "relative flex-1 w-full" };
const _hoisted_11 = {
  key: 0,
  class: "flex justify-center py-12"
};
const _hoisted_12 = {
  key: 1,
  class: "text-center py-12 bg-white rounded-2xl border border-dashed border-slate-200"
};
const _hoisted_13 = {
  key: 2,
  class: "bg-white rounded-2xl shadow-sm border border-slate-100/80 overflow-hidden"
};
const _hoisted_14 = { class: "overflow-x-auto" };
const _hoisted_15 = { class: "min-w-full divide-y divide-gray-100" };
const _hoisted_16 = { class: "divide-y divide-gray-100 bg-white" };
const _hoisted_17 = { class: "px-6 py-4 whitespace-nowrap" };
const _hoisted_18 = { class: "flex items-center space-x-3.5" };
const _hoisted_19 = { class: "w-10 h-10 rounded-lg overflow-hidden flex-shrink-0 flex items-center justify-center shadow-sm" };
const _hoisted_20 = ["src"];
const _hoisted_21 = {
  key: 1,
  class: "w-full h-full flex items-center justify-center bg-emerald-50 border border-emerald-600 rounded-lg text-emerald-600 font-bold text-sm"
};
const _hoisted_22 = { class: "text-left" };
const _hoisted_23 = { class: "text-sm font-medium text-slate-700" };
const _hoisted_24 = { class: "text-[10px] text-slate-400 font-semibold tracking-wide mt-0.5 uppercase" };
const _hoisted_25 = { class: "px-6 py-4 whitespace-nowrap text-left" };
const _hoisted_26 = { class: "text-xs font-normal text-slate-555 flex items-center" };
const _hoisted_27 = { class: "text-xs font-normal text-slate-555 flex items-center mt-1" };
const _hoisted_28 = { class: "px-6 py-4 whitespace-nowrap text-left text-xs font-semibold text-slate-600" };
const _hoisted_29 = { class: "px-6 py-4 whitespace-nowrap text-left" };
const _hoisted_30 = { class: "px-6 py-4 whitespace-nowrap text-right" };
const _hoisted_31 = { class: "flex items-center justify-end space-x-2" };
const _hoisted_32 = ["onClick"];
const _hoisted_33 = {
  key: 0,
  class: "px-6 py-4 bg-gray-50/50 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 font-outfit text-xs font-semibold text-slate-500"
};
const _hoisted_34 = { class: "flex items-center space-x-3" };
const _hoisted_35 = { class: "relative flex items-center space-x-1.5 border-l border-slate-200 pl-3" };
const _hoisted_36 = { class: "flex items-center space-x-2" };
const _hoisted_37 = ["disabled"];
const _hoisted_38 = { class: "flex items-center space-x-1" };
const _hoisted_39 = ["onClick", "disabled"];
const _hoisted_40 = ["disabled"];
const _hoisted_41 = {
  key: 3,
  class: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
};
const _hoisted_42 = { class: "bg-white rounded-3xl shadow-xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in duration-200 border border-slate-100" };
const _hoisted_43 = { class: "p-6 border-b border-slate-100 flex items-center justify-between text-left" };
const _hoisted_44 = { class: "text-lg font-bold text-slate-800" };
const _hoisted_45 = { class: "grid grid-cols-2 gap-4" };
const _hoisted_46 = { class: "grid grid-cols-2 gap-4" };
const _hoisted_47 = { key: 0 };
const _hoisted_48 = ["required"];
const _hoisted_49 = {
  key: 1,
  class: "flex items-center space-x-2 pt-1"
};
const _hoisted_50 = {
  key: 2,
  class: "flex items-center space-x-2"
};
const _hoisted_51 = { class: "pt-4 flex items-center space-x-3" };
const _hoisted_52 = ["disabled"];
const _hoisted_53 = { key: 0 };
const _hoisted_54 = { key: 1 };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "StudentsPage",
  setup(__props) {
    const loading = ref(true);
    const saving = ref(false);
    const searchQuery = ref("");
    const statusFilter = ref("all");
    const levelFilter = ref("all");
    const perPage = ref("20");
    const showModal = ref(false);
    const isEditing = ref(false);
    const changePassword = ref(false);
    const currentStudentId = ref(null);
    const pagination = ref({
      current_page: 1,
      last_page: 1,
      total: 0,
      from: 0,
      to: 0
    });
    const stats = ref({
      total: 0,
      activeToday: 0,
      pending: 0,
      newThisMonth: 0
    });
    const statsConfig = [
      { key: "total", label: "Total Students", icon: Users, bgClass: "bg-blue-105/50", iconClass: "text-blue-600" },
      { key: "activeToday", label: "Active Today", icon: UserCheck, bgClass: "bg-green-150/40", iconClass: "text-green-600" },
      { key: "pending", label: "Pending Approval", icon: Clock, bgClass: "bg-orange-100/50", iconClass: "text-orange-600" },
      { key: "newThisMonth", label: "New This Month", icon: TrendingUp, bgClass: "bg-emerald-100/50", iconClass: "text-emerald-600" }
    ];
    const students = ref([]);
    const form = ref({
      name: "",
      email: "",
      phone: "",
      crn: "",
      gender: "",
      ca_level: "",
      password: "",
      is_active: true
    });
    const { showSuccess, showError, showWarning } = useSwal();
    const fetchStudents = async (page = 1) => {
      try {
        loading.value = true;
        const params = {
          page,
          per_page: perPage.value
        };
        if (searchQuery.value) params.search = searchQuery.value;
        if (statusFilter.value !== "all") params.status = statusFilter.value;
        if (levelFilter.value !== "all") params.ca_level = levelFilter.value;
        const [res, statsData] = await Promise.all([
          librarianAPI.getStudents(params),
          librarianAPI.getStudentStats()
        ]);
        if (res && res.data) {
          students.value = res.data;
          pagination.value = {
            current_page: res.current_page || 1,
            last_page: res.last_page || 1,
            total: res.total || 0,
            from: res.from || 0,
            to: res.to || 0
          };
        } else {
          students.value = Array.isArray(res) ? res : [];
        }
        stats.value = statsData;
      } catch (error) {
        console.error("Error fetching students:", error);
        showError("Load Failed", "Failed to load students");
      } finally {
        loading.value = false;
      }
    };
    watch([searchQuery, statusFilter, levelFilter, perPage], () => {
      fetchStudents(1);
    });
    onMounted(() => {
      fetchStudents(1);
    });
    const visiblePages = computed(() => {
      const total = pagination.value.last_page;
      const current = pagination.value.current_page;
      if (total <= 7) {
        return Array.from({ length: total }, (_, i) => i + 1);
      }
      const pages = [1];
      if (current > 3) pages.push("...");
      const start = Math.max(2, current - 1);
      const end = Math.min(total - 1, current + 1);
      for (let i = start; i <= end; i++) {
        pages.push(i);
      }
      if (current < total - 2) pages.push("...");
      pages.push(total);
      return pages;
    });
    const openAddModal = () => {
      isEditing.value = false;
      currentStudentId.value = null;
      form.value = {
        name: "",
        email: "",
        phone: "",
        crn: "",
        gender: "",
        ca_level: "",
        password: "",
        is_active: true
      };
      showModal.value = true;
    };
    const saveStudent = async () => {
      try {
        saving.value = true;
        const payload = { ...form.value };
        if (isEditing.value && !changePassword.value) {
          delete payload.password;
        }
        if (isEditing.value && currentStudentId.value) {
          await librarianAPI.updateStudent(currentStudentId.value, payload);
          showSuccess("Updated!", "Student updated successfully");
        } else {
          await librarianAPI.createStudent(payload);
          showSuccess("Created!", "Student created successfully");
        }
        showModal.value = false;
        fetchStudents();
      } catch (error) {
        console.error("Error saving student:", error);
        const message = error.response?.data?.message || "Failed to save student";
        showError("Save Failed", message);
      } finally {
        saving.value = false;
      }
    };
    const exportToCSV = () => {
      const headers = ["Name", "Email", "Phone", "Student ID (CRN)", "CA Level", "Status"];
      const rows = students.value.map((student) => [
        `"${(student.name || "").replace(/"/g, '""')}"`,
        `"${(student.email || "").replace(/"/g, '""')}"`,
        `"${(student.phone || "N/A").replace(/"/g, '""')}"`,
        `"${(student.crn || "N/A").replace(/"/g, '""')}"`,
        `"${(student.ca_level || "N/A").replace(/"/g, '""')}"`,
        `"${student.is_banned ? "Banned" : student.is_active ? "Active" : "Inactive"}"`
      ]);
      const csvContent = [headers.join(","), ...rows.map((row) => row.join(","))].join("\n");
      const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.setAttribute("href", url);
      const dateStr = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
      link.setAttribute("download", `students_export_${dateStr}.csv`);
      link.style.visibility = "hidden";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      showSuccess("Exported!", "Students list has been exported to CSV successfully.");
    };
    const exportToPDF = () => {
      const doc = new E();
      doc.setFont("helvetica", "bold");
      doc.setFontSize(18);
      doc.setTextColor(4, 120, 87);
      doc.text("Students Directory List", 14, 20);
      doc.setFontSize(9);
      doc.setFont("helvetica", "normal");
      doc.setTextColor(100);
      const dateStr = (/* @__PURE__ */ new Date()).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit"
      });
      doc.text(`Generated on: ${dateStr}`, 14, 27);
      doc.text(`Total Records: ${students.value.length}`, 14, 32);
      doc.setDrawColor(226, 232, 240);
      doc.line(14, 36, 196, 36);
      doc.setFont("helvetica", "bold");
      doc.setFontSize(9);
      doc.setTextColor(71, 85, 105);
      doc.text("Student Name", 16, 43);
      doc.text("Email", 65, 43);
      doc.text("CRN (ID)", 115, 43);
      doc.text("CA Level", 145, 43);
      doc.text("Status", 175, 43);
      doc.line(14, 46, 196, 46);
      doc.setFont("helvetica", "normal");
      doc.setTextColor(51, 65, 85);
      let y = 52;
      const pageHeight = doc.internal.pageSize.height;
      students.value.forEach((student, index) => {
        if (y > pageHeight - 20) {
          doc.addPage();
          y = 20;
          doc.setFont("helvetica", "bold");
          doc.setFontSize(9);
          doc.setTextColor(71, 85, 105);
          doc.text("Student Name", 16, y);
          doc.text("Email", 65, y);
          doc.text("CRN (ID)", 115, y);
          doc.text("CA Level", 145, y);
          doc.text("Status", 175, y);
          doc.line(14, y + 3, 196, y + 3);
          doc.setFont("helvetica", "normal");
          doc.setTextColor(51, 65, 85);
          y += 9;
        }
        const name = student.name || "N/A";
        const email = student.email || "N/A";
        const crn = student.crn || "N/A";
        const caLevel = student.ca_level || "N/A";
        const status = student.is_banned ? "Banned" : student.is_active ? "Active" : "Inactive";
        if (index % 2 === 1) {
          doc.setFillColor(248, 250, 252);
          doc.rect(14, y - 4, 182, 6, "F");
        }
        doc.text(name, 16, y);
        doc.text(email, 65, y);
        doc.text(crn, 115, y);
        doc.text(caLevel, 145, y);
        doc.text(status, 175, y);
        y += 7;
      });
      const fileDate = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
      doc.save(`students_export_${fileDate}.pdf`);
      showSuccess("Exported!", "Students list has been exported to PDF successfully.");
    };
    const exportStudents = async () => {
      if (students.value.length === 0) {
        showWarning("No Data", "There are no student records to export.");
        return;
      }
      const result = await Swal.fire({
        title: "Export Students List",
        text: "Select your preferred export format:",
        icon: "question",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Excel (CSV)",
        denyButtonText: "PDF Document",
        cancelButtonText: "Cancel",
        confirmButtonColor: "#047857",
        // emerald-700
        denyButtonColor: "#2563eb",
        // blue-600
        cancelButtonColor: "#64748b"
        // slate-500
      });
      if (result.isConfirmed) {
        exportToCSV();
      } else if (result.isDenied) {
        exportToPDF();
      }
    };
    const getProfilePictureUrl = (path) => {
      if (!path) return "";
      if (path.startsWith("http")) return path;
      return `/storage/${path}`;
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("div", _hoisted_3, [
            createBaseVNode("button", {
              onClick: exportStudents,
              class: "px-4 py-2 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors flex items-center space-x-2 text-xs font-bold text-slate-550 cursor-pointer shadow-sm"
            }, [
              createVNode(unref(Download), { class: "w-4 h-4 text-slate-455" }),
              _cache[18] || (_cache[18] = createBaseVNode("span", null, "Export", -1))
            ]),
            createBaseVNode("button", {
              onClick: openAddModal,
              class: "px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl transition-colors flex items-center space-x-2 text-xs font-bold shadow-sm cursor-pointer"
            }, [
              createVNode(unref(UserPlus), { class: "w-4 h-4" }),
              _cache[19] || (_cache[19] = createBaseVNode("span", null, "Add Student", -1))
            ])
          ])
        ]),
        createBaseVNode("div", _hoisted_4, [
          (openBlock(), createElementBlock(Fragment, null, renderList(statsConfig, (stat) => {
            return createBaseVNode("div", {
              key: stat.key,
              class: "bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex items-center justify-between"
            }, [
              createBaseVNode("div", _hoisted_5, [
                createBaseVNode("p", _hoisted_6, toDisplayString(stat.label), 1),
                createBaseVNode("h3", _hoisted_7, toDisplayString(stats.value[stat.key]), 1)
              ]),
              createBaseVNode("div", {
                class: normalizeClass(["p-3.5 rounded-xl", stat.bgClass])
              }, [
                (openBlock(), createBlock(resolveDynamicComponent(stat.icon), {
                  class: normalizeClass(["w-5 h-5", stat.iconClass])
                }, null, 8, ["class"]))
              ], 2)
            ]);
          }), 64))
        ]),
        createBaseVNode("div", _hoisted_8, [
          createBaseVNode("div", _hoisted_9, [
            createBaseVNode("div", _hoisted_10, [
              createVNode(unref(Search), { class: "absolute left-3.5 top-1/2 transform -translate-y-1/2 w-4.5 h-4.5 text-slate-400" }),
              withDirectives(createBaseVNode("input", {
                type: "text",
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => searchQuery.value = $event),
                placeholder: "Search by name, CRN, or email...",
                class: "w-full pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-xs font-semibold text-slate-655 focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none placeholder-slate-400"
              }, null, 512), [
                [vModelText, searchQuery.value]
              ])
            ]),
            withDirectives(createBaseVNode("select", {
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => statusFilter.value = $event),
              class: "w-full md:w-48 px-4 py-2 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-655 focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none cursor-pointer"
            }, [..._cache[20] || (_cache[20] = [
              createBaseVNode("option", { value: "all" }, "All Status", -1),
              createBaseVNode("option", { value: "active" }, "Active", -1),
              createBaseVNode("option", { value: "inactive" }, "Inactive", -1)
            ])], 512), [
              [vModelSelect, statusFilter.value]
            ]),
            withDirectives(createBaseVNode("select", {
              "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => levelFilter.value = $event),
              class: "w-full md:w-48 px-4 py-2 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-655 focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none cursor-pointer"
            }, [..._cache[21] || (_cache[21] = [
              createBaseVNode("option", { value: "all" }, "All Levels", -1),
              createBaseVNode("option", { value: "PRC" }, "PRC", -1),
              createBaseVNode("option", { value: "CAF" }, "CAF", -1),
              createBaseVNode("option", { value: "Final" }, "Final", -1)
            ])], 512), [
              [vModelSelect, levelFilter.value]
            ])
          ])
        ]),
        loading.value ? (openBlock(), createElementBlock("div", _hoisted_11, [..._cache[22] || (_cache[22] = [
          createBaseVNode("div", { class: "animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600" }, null, -1)
        ])])) : students.value.length === 0 ? (openBlock(), createElementBlock("div", _hoisted_12, [
          createVNode(unref(Users), { class: "w-12 h-12 text-slate-300 mx-auto mb-4" }),
          _cache[23] || (_cache[23] = createBaseVNode("p", { class: "text-xs font-bold text-slate-455 uppercase tracking-widest" }, "No students found matching your criteria.", -1))
        ])) : (openBlock(), createElementBlock("div", _hoisted_13, [
          createBaseVNode("div", _hoisted_14, [
            createBaseVNode("table", _hoisted_15, [
              _cache[24] || (_cache[24] = createBaseVNode("thead", { class: "bg-gray-50/50" }, [
                createBaseVNode("tr", null, [
                  createBaseVNode("th", {
                    scope: "col",
                    class: "px-6 py-4 text-left text-xs font-semibold text-slate-400 uppercase tracking-widest"
                  }, "Student"),
                  createBaseVNode("th", {
                    scope: "col",
                    class: "px-6 py-4 text-left text-xs font-semibold text-slate-400 uppercase tracking-widest"
                  }, "Contact Info"),
                  createBaseVNode("th", {
                    scope: "col",
                    class: "px-6 py-4 text-left text-xs font-semibold text-slate-400 uppercase tracking-widest"
                  }, "Level"),
                  createBaseVNode("th", {
                    scope: "col",
                    class: "px-6 py-4 text-left text-xs font-semibold text-slate-400 uppercase tracking-widest"
                  }, "Status"),
                  createBaseVNode("th", {
                    scope: "col",
                    class: "px-6 py-4 text-right text-xs font-semibold text-slate-400 uppercase tracking-widest"
                  }, "Action")
                ])
              ], -1)),
              createBaseVNode("tbody", _hoisted_16, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(students.value, (student) => {
                  return openBlock(), createElementBlock("tr", {
                    key: student.id,
                    class: "hover:bg-slate-50/50 transition-colors"
                  }, [
                    createBaseVNode("td", _hoisted_17, [
                      createBaseVNode("div", _hoisted_18, [
                        createBaseVNode("div", _hoisted_19, [
                          student.profile_picture ? (openBlock(), createElementBlock("img", {
                            key: 0,
                            src: getProfilePictureUrl(student.profile_picture),
                            class: "w-full h-full object-cover rounded-lg"
                          }, null, 8, _hoisted_20)) : (openBlock(), createElementBlock("div", _hoisted_21, toDisplayString(student.name.charAt(0).toUpperCase()), 1))
                        ]),
                        createBaseVNode("div", _hoisted_22, [
                          createBaseVNode("div", _hoisted_23, toDisplayString(student.name), 1),
                          createBaseVNode("div", _hoisted_24, "CRN: " + toDisplayString(student.crn || "N/A"), 1)
                        ])
                      ])
                    ]),
                    createBaseVNode("td", _hoisted_25, [
                      createBaseVNode("div", _hoisted_26, [
                        createVNode(unref(Mail), { class: "w-3.5 h-3.5 mr-1.5 text-slate-400" }),
                        createTextVNode(" " + toDisplayString(student.email), 1)
                      ]),
                      createBaseVNode("div", _hoisted_27, [
                        createVNode(unref(Phone), { class: "w-3.5 h-3.5 mr-1.5 text-slate-400" }),
                        createTextVNode(" " + toDisplayString(student.phone || "N/A"), 1)
                      ])
                    ]),
                    createBaseVNode("td", _hoisted_28, toDisplayString(student.ca_level || "N/A"), 1),
                    createBaseVNode("td", _hoisted_29, [
                      createBaseVNode("span", {
                        class: normalizeClass([
                          "text-[9px] font-semibold px-2.5 py-1 rounded-full uppercase tracking-wider border",
                          student.is_banned ? "bg-red-50 border-red-100 text-red-700" : student.is_active ? "bg-green-50 border-green-100 text-green-700" : "bg-slate-50 border-slate-200 text-slate-500"
                        ])
                      }, toDisplayString(student.is_banned ? "Banned" : student.is_active ? "Active" : "Inactive"), 3)
                    ]),
                    createBaseVNode("td", _hoisted_30, [
                      createBaseVNode("div", _hoisted_31, [
                        createBaseVNode("button", {
                          onClick: ($event) => _ctx.$router.push({ name: "librarian-student-details", params: { id: student.id } }),
                          class: "p-2 bg-white border border-gray-200 hover:bg-slate-50 rounded-lg text-emerald-700 hover:text-emerald-800 transition-all cursor-pointer shadow-sm",
                          title: "View Profile Details"
                        }, [
                          createVNode(unref(Eye), { class: "w-4 h-4" })
                        ], 8, _hoisted_32)
                      ])
                    ])
                  ]);
                }), 128))
              ])
            ])
          ]),
          pagination.value.total > 0 ? (openBlock(), createElementBlock("div", _hoisted_33, [
            createBaseVNode("div", _hoisted_34, [
              createBaseVNode("span", null, "Showing " + toDisplayString(pagination.value.from || 0) + " to " + toDisplayString(pagination.value.to || 0) + " of " + toDisplayString(pagination.value.total) + " entries", 1),
              createBaseVNode("div", _hoisted_35, [
                _cache[26] || (_cache[26] = createBaseVNode("span", { class: "text-slate-400 font-medium" }, "Show", -1)),
                withDirectives(createBaseVNode("select", {
                  "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => perPage.value = $event),
                  onChange: _cache[4] || (_cache[4] = ($event) => fetchStudents(1)),
                  class: "px-2 py-1 bg-white border border-slate-200 rounded-lg text-xs font-bold text-slate-700 focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none cursor-pointer shadow-2xs"
                }, [..._cache[25] || (_cache[25] = [
                  createBaseVNode("option", { value: "20" }, "20", -1),
                  createBaseVNode("option", { value: "50" }, "50", -1),
                  createBaseVNode("option", { value: "100" }, "100", -1)
                ])], 544), [
                  [vModelSelect, perPage.value]
                ]),
                _cache[27] || (_cache[27] = createBaseVNode("span", { class: "text-slate-400 font-medium" }, "per page", -1))
              ])
            ]),
            createBaseVNode("div", _hoisted_36, [
              createBaseVNode("button", {
                onClick: _cache[5] || (_cache[5] = ($event) => fetchStudents(pagination.value.current_page - 1)),
                disabled: pagination.value.current_page === 1,
                class: "px-3.5 py-1.5 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-2xs cursor-pointer"
              }, " Previous ", 8, _hoisted_37),
              createBaseVNode("div", _hoisted_38, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(visiblePages.value, (p) => {
                  return openBlock(), createElementBlock("button", {
                    key: p,
                    onClick: ($event) => typeof p === "number" && fetchStudents(p),
                    disabled: typeof p !== "number",
                    class: normalizeClass([
                      "px-3 py-1.5 text-xs font-bold rounded-xl transition-all cursor-pointer",
                      p === pagination.value.current_page ? "bg-emerald-600 text-white shadow-2xs" : typeof p === "number" ? "bg-white border border-slate-200 text-slate-600 hover:bg-slate-50" : "bg-transparent text-slate-400 cursor-default"
                    ])
                  }, toDisplayString(p), 11, _hoisted_39);
                }), 128))
              ]),
              createBaseVNode("button", {
                onClick: _cache[6] || (_cache[6] = ($event) => fetchStudents(pagination.value.current_page + 1)),
                disabled: pagination.value.current_page === pagination.value.last_page,
                class: "px-3.5 py-1.5 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-2xs cursor-pointer"
              }, " Next ", 8, _hoisted_40)
            ])
          ])) : createCommentVNode("", true)
        ])),
        showModal.value ? (openBlock(), createElementBlock("div", _hoisted_41, [
          createBaseVNode("div", _hoisted_42, [
            createBaseVNode("div", _hoisted_43, [
              createBaseVNode("h2", _hoisted_44, toDisplayString(isEditing.value ? "Edit Student" : "Add New Student"), 1),
              createBaseVNode("button", {
                onClick: _cache[7] || (_cache[7] = ($event) => showModal.value = false),
                class: "p-2 hover:bg-slate-50 rounded-xl transition-colors cursor-pointer"
              }, [
                createVNode(unref(X), { class: "w-5 h-5 text-slate-450" })
              ])
            ]),
            createBaseVNode("form", {
              onSubmit: withModifiers(saveStudent, ["prevent"]),
              class: "p-6 space-y-4 text-left"
            }, [
              createBaseVNode("div", null, [
                _cache[28] || (_cache[28] = createBaseVNode("label", { class: "block text-xs font-bold text-slate-500 mb-1.5 uppercase tracking-wider" }, "Full Name", -1)),
                withDirectives(createBaseVNode("input", {
                  "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => form.value.name = $event),
                  type: "text",
                  required: "",
                  class: "w-full px-4 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none text-xs font-semibold text-slate-655 bg-white",
                  placeholder: "e.g. Ahmed Khan"
                }, null, 512), [
                  [vModelText, form.value.name]
                ])
              ]),
              createBaseVNode("div", _hoisted_45, [
                createBaseVNode("div", null, [
                  _cache[29] || (_cache[29] = createBaseVNode("label", { class: "block text-xs font-bold text-slate-500 mb-1.5 uppercase tracking-wider" }, "Student ID (CRN)", -1)),
                  withDirectives(createBaseVNode("input", {
                    "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => form.value.crn = $event),
                    type: "text",
                    required: "",
                    class: "w-full px-4 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none text-xs font-semibold text-slate-655 bg-white",
                    placeholder: "e.g. 123456"
                  }, null, 512), [
                    [vModelText, form.value.crn]
                  ])
                ]),
                createBaseVNode("div", null, [
                  _cache[31] || (_cache[31] = createBaseVNode("label", { class: "block text-xs font-bold text-slate-500 mb-1.5 uppercase tracking-wider" }, "CA Level", -1)),
                  withDirectives(createBaseVNode("select", {
                    "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => form.value.ca_level = $event),
                    class: "w-full px-4 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none text-xs font-bold text-slate-655 bg-white cursor-pointer"
                  }, [..._cache[30] || (_cache[30] = [
                    createStaticVNode('<option value="" data-v-abf00527>Select Level</option><option value="PRC" data-v-abf00527>PRC</option><option value="CAF" data-v-abf00527>CAF</option><option value="CFAP" data-v-abf00527>CFAP</option><option value="MSA" data-v-abf00527>MSA</option>', 5)
                  ])], 512), [
                    [vModelSelect, form.value.ca_level]
                  ])
                ])
              ]),
              createBaseVNode("div", _hoisted_46, [
                createBaseVNode("div", null, [
                  _cache[32] || (_cache[32] = createBaseVNode("label", { class: "block text-xs font-bold text-slate-500 mb-1.5 uppercase tracking-wider" }, "Email Address", -1)),
                  withDirectives(createBaseVNode("input", {
                    "onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => form.value.email = $event),
                    type: "email",
                    required: "",
                    class: "w-full px-4 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none text-xs font-semibold text-slate-655 bg-white",
                    placeholder: "email@example.com"
                  }, null, 512), [
                    [vModelText, form.value.email]
                  ])
                ]),
                createBaseVNode("div", null, [
                  _cache[33] || (_cache[33] = createBaseVNode("label", { class: "block text-xs font-bold text-slate-500 mb-1.5 uppercase tracking-wider" }, "Phone Number", -1)),
                  withDirectives(createBaseVNode("input", {
                    "onUpdate:modelValue": _cache[12] || (_cache[12] = ($event) => form.value.phone = $event),
                    type: "tel",
                    class: "w-full px-4 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none text-xs font-semibold text-slate-655 bg-white",
                    placeholder: "+92 3XX XXXXXXX"
                  }, null, 512), [
                    [vModelText, form.value.phone]
                  ])
                ])
              ]),
              createBaseVNode("div", null, [
                _cache[35] || (_cache[35] = createBaseVNode("label", { class: "block text-xs font-bold text-slate-500 mb-1.5 uppercase tracking-wider" }, "Gender", -1)),
                withDirectives(createBaseVNode("select", {
                  "onUpdate:modelValue": _cache[13] || (_cache[13] = ($event) => form.value.gender = $event),
                  class: "w-full px-4 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none text-xs font-bold text-slate-655 bg-white cursor-pointer"
                }, [..._cache[34] || (_cache[34] = [
                  createBaseVNode("option", { value: "" }, "Select Gender", -1),
                  createBaseVNode("option", { value: "male" }, "Male", -1),
                  createBaseVNode("option", { value: "female" }, "Female", -1)
                ])], 512), [
                  [vModelSelect, form.value.gender]
                ])
              ]),
              !isEditing.value || changePassword.value ? (openBlock(), createElementBlock("div", _hoisted_47, [
                _cache[36] || (_cache[36] = createBaseVNode("label", { class: "block text-xs font-bold text-slate-500 mb-1.5 uppercase tracking-wider" }, "Password", -1)),
                withDirectives(createBaseVNode("input", {
                  "onUpdate:modelValue": _cache[14] || (_cache[14] = ($event) => form.value.password = $event),
                  type: "password",
                  required: !isEditing.value,
                  class: "w-full px-4 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none text-xs font-semibold text-slate-655 bg-white",
                  placeholder: "••••••••"
                }, null, 8, _hoisted_48), [
                  [vModelText, form.value.password]
                ])
              ])) : createCommentVNode("", true),
              isEditing.value ? (openBlock(), createElementBlock("div", _hoisted_49, [
                withDirectives(createBaseVNode("input", {
                  type: "checkbox",
                  "onUpdate:modelValue": _cache[15] || (_cache[15] = ($event) => changePassword.value = $event),
                  id: "changePwd",
                  class: "rounded text-emerald-655 focus:ring-emerald-500 cursor-pointer"
                }, null, 512), [
                  [vModelCheckbox, changePassword.value]
                ]),
                _cache[37] || (_cache[37] = createBaseVNode("label", {
                  for: "changePwd",
                  class: "text-xs font-bold text-slate-550 cursor-pointer"
                }, "Change Password", -1))
              ])) : createCommentVNode("", true),
              isEditing.value ? (openBlock(), createElementBlock("div", _hoisted_50, [
                withDirectives(createBaseVNode("input", {
                  type: "checkbox",
                  "onUpdate:modelValue": _cache[16] || (_cache[16] = ($event) => form.value.is_active = $event),
                  id: "isActive",
                  class: "rounded text-emerald-655 focus:ring-emerald-500 cursor-pointer"
                }, null, 512), [
                  [vModelCheckbox, form.value.is_active]
                ]),
                _cache[38] || (_cache[38] = createBaseVNode("label", {
                  for: "isActive",
                  class: "text-xs font-bold text-slate-550 cursor-pointer"
                }, "Account Active", -1))
              ])) : createCommentVNode("", true),
              createBaseVNode("div", _hoisted_51, [
                createBaseVNode("button", {
                  type: "button",
                  onClick: _cache[17] || (_cache[17] = ($event) => showModal.value = false),
                  class: "flex-1 px-4 py-2.5 border border-slate-200 text-slate-500 font-bold rounded-xl hover:bg-slate-50 transition-colors text-xs cursor-pointer"
                }, " Cancel "),
                createBaseVNode("button", {
                  type: "submit",
                  disabled: saving.value,
                  class: "flex-1 px-4 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl transition-all disabled:opacity-50 text-xs font-bold cursor-pointer"
                }, [
                  saving.value ? (openBlock(), createElementBlock("span", _hoisted_53, "Saving...")) : (openBlock(), createElementBlock("span", _hoisted_54, toDisplayString(isEditing.value ? "Update Student" : "Create Student"), 1))
                ], 8, _hoisted_52)
              ])
            ], 32)
          ])
        ])) : createCommentVNode("", true)
      ]);
    };
  }
});
const StudentsPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-abf00527"]]);
export {
  StudentsPage as default
};
