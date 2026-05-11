import { d as defineComponent, r as ref, o as onMounted, E as computed, c as createElementBlock, b as createBaseVNode, m as createCommentVNode, f as createVNode, u as unref, F as Fragment, h as renderList, v as withDirectives, x as vModelText, B as vModelSelect, t as toDisplayString, s as withModifiers, z as vModelCheckbox, O as librarianAPI, n as normalizeClass, k as createBlock, l as resolveDynamicComponent, g as resolveComponent, i as openBlock } from "./main-Dk2mUbjP.js";
import { u as useSwal } from "./useSwal-J4kFABxt.js";
import { D as Download } from "./download-BCNs_knP.js";
import { U as UserPlus } from "./user-plus-hzCGaCTn.js";
import { S as Search } from "./search-CtCRD_3L.js";
import { U as Users } from "./users-BK7GPR5d.js";
import { X } from "./x-YsebUqOw.js";
import { U as UserCheck } from "./user-check-CY9CiNFu.js";
import { C as Clock } from "./clock-DHHRCinm.js";
import { T as TrendingUp } from "./trending-up-_qi7NglU.js";
import { P as Pen } from "./pen-sB2k7vRA.js";
import { T as Trash2 } from "./trash-2-jL_HLZPz.js";
import { M as Mail } from "./mail-CfIgijJY.js";
import { P as Phone } from "./phone-BeWBBpz0.js";
import { C as Calendar } from "./calendar-e6msfKJ3.js";
import { B as Ban } from "./ban-BXjJCiiA.js";
/* empty css               */
import "./createLucideIcon-6n-23kmf.js";
const _hoisted_1 = { class: "p-6 space-y-6" };
const _hoisted_2 = { class: "flex items-center justify-between" };
const _hoisted_3 = { class: "flex items-center space-x-3" };
const _hoisted_4 = { class: "grid grid-cols-1 md:grid-cols-4 gap-6" };
const _hoisted_5 = { class: "flex items-center justify-between" };
const _hoisted_6 = { class: "text-sm text-gray-600" };
const _hoisted_7 = { class: "text-2xl font-bold text-gray-900 mt-1" };
const _hoisted_8 = { class: "bg-white rounded-xl shadow-sm border border-gray-200 p-4" };
const _hoisted_9 = { class: "flex items-center space-x-4" };
const _hoisted_10 = { class: "relative flex-1" };
const _hoisted_11 = {
  key: 0,
  class: "flex justify-center py-12"
};
const _hoisted_12 = {
  key: 1,
  class: "text-center py-12 bg-white rounded-xl border border-dashed border-gray-300"
};
const _hoisted_13 = {
  key: 2,
  class: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
};
const _hoisted_14 = { class: "h-24 bg-gradient-to-r from-purple-600 to-indigo-600 relative" };
const _hoisted_15 = { class: "absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity" };
const _hoisted_16 = { class: "flex space-x-1" };
const _hoisted_17 = ["onClick"];
const _hoisted_18 = ["onClick"];
const _hoisted_19 = { class: "p-6 -mt-12" };
const _hoisted_20 = { class: "flex items-start justify-between" };
const _hoisted_21 = { class: "w-20 h-20 rounded-full bg-white border-4 border-white shadow-lg flex items-center justify-center overflow-hidden" };
const _hoisted_22 = ["src"];
const _hoisted_23 = {
  key: 1,
  class: "w-full h-full bg-gradient-to-r from-purple-600 to-indigo-600 flex items-center justify-center text-white text-2xl font-bold"
};
const _hoisted_24 = { class: "mt-4" };
const _hoisted_25 = { class: "text-lg font-bold text-gray-900" };
const _hoisted_26 = { class: "text-sm text-gray-500" };
const _hoisted_27 = { class: "mt-4 space-y-2" };
const _hoisted_28 = { class: "flex items-center space-x-2 text-sm text-gray-600" };
const _hoisted_29 = { class: "truncate" };
const _hoisted_30 = { class: "flex items-center space-x-2 text-sm text-gray-600" };
const _hoisted_31 = { class: "flex items-center space-x-2 text-sm text-gray-600" };
const _hoisted_32 = {
  key: 0,
  class: "flex items-center space-x-2 text-sm text-gray-600"
};
const _hoisted_33 = { class: "capitalize" };
const _hoisted_34 = { class: "mt-4 pt-4 border-t border-gray-200" };
const _hoisted_35 = { class: "flex items-center justify-between text-sm" };
const _hoisted_36 = { class: "font-bold text-gray-900" };
const _hoisted_37 = { class: "font-bold text-gray-900" };
const _hoisted_38 = { class: "font-bold text-purple-600" };
const _hoisted_39 = { class: "mt-4 flex items-center space-x-2" };
const _hoisted_40 = ["onClick"];
const _hoisted_41 = ["onClick", "title"];
const _hoisted_42 = {
  key: 3,
  class: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
};
const _hoisted_43 = { class: "bg-white rounded-2xl shadow-xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in duration-200" };
const _hoisted_44 = { class: "p-6 border-b border-gray-100 flex items-center justify-between" };
const _hoisted_45 = { class: "text-xl font-bold text-gray-900" };
const _hoisted_46 = { class: "grid grid-cols-2 gap-4" };
const _hoisted_47 = { class: "grid grid-cols-2 gap-4" };
const _hoisted_48 = { key: 0 };
const _hoisted_49 = ["required"];
const _hoisted_50 = {
  key: 1,
  class: "flex items-center space-x-2"
};
const _hoisted_51 = {
  key: 2,
  class: "flex items-center space-x-2"
};
const _hoisted_52 = { class: "pt-4 flex items-center space-x-3" };
const _hoisted_53 = ["disabled"];
const _hoisted_54 = { key: 0 };
const _hoisted_55 = { key: 1 };
const _hoisted_56 = {
  key: 4,
  class: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
};
const _hoisted_57 = { class: "bg-white rounded-2xl shadow-xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in duration-200" };
const _hoisted_58 = { class: "p-6 bg-gradient-to-r from-orange-500 to-red-600 text-white flex items-center justify-between" };
const _hoisted_59 = { class: "text-orange-100 text-xs mt-1" };
const _hoisted_60 = { class: "pt-4 flex items-center space-x-3" };
const _hoisted_61 = ["disabled"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "StudentsPage",
  setup(__props) {
    const loading = ref(true);
    const saving = ref(false);
    const searchQuery = ref("");
    const statusFilter = ref("all");
    const showModal = ref(false);
    const isEditing = ref(false);
    const changePassword = ref(false);
    const currentStudentId = ref(null);
    const showBanModal = ref(false);
    const banning = ref(false);
    const banForm = ref({
      userId: null,
      userName: "",
      days: null,
      reason: ""
    });
    const stats = ref({
      total: 0,
      activeToday: 0,
      pending: 0,
      newThisMonth: 0
    });
    const statsConfig = [
      { key: "total", label: "Total Students", icon: Users, bgClass: "bg-blue-100", iconClass: "text-blue-600" },
      { key: "activeToday", label: "Active Today", icon: UserCheck, bgClass: "bg-green-100", iconClass: "text-green-600" },
      { key: "pending", label: "Pending Approval", icon: Clock, bgClass: "bg-orange-100", iconClass: "text-orange-600" },
      { key: "newThisMonth", label: "New This Month", icon: TrendingUp, bgClass: "bg-purple-100", iconClass: "text-purple-600" }
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
    const { showConfirm, showSuccess, showError, showWarning } = useSwal();
    const fetchStudents = async () => {
      try {
        loading.value = true;
        const [studentsData, statsData] = await Promise.all([
          librarianAPI.getStudents(),
          librarianAPI.getStudentStats()
        ]);
        students.value = studentsData;
        stats.value = statsData;
      } catch (error) {
        console.error("Error fetching students:", error);
        showError("Load Failed", "Failed to load students");
      } finally {
        loading.value = false;
      }
    };
    onMounted(fetchStudents);
    const filteredStudents = computed(() => {
      let filtered = students.value;
      if (statusFilter.value !== "all") {
        const isActive = statusFilter.value === "active";
        filtered = filtered.filter((s) => s.is_active === isActive);
      }
      if (searchQuery.value) {
        const query = searchQuery.value.toLowerCase();
        filtered = filtered.filter(
          (s) => s.name.toLowerCase().includes(query) || s.crn && s.crn.toLowerCase().includes(query) || s.email.toLowerCase().includes(query)
        );
      }
      return filtered;
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
    const openEditModal = (student) => {
      isEditing.value = true;
      currentStudentId.value = student.id;
      changePassword.value = false;
      form.value = {
        name: student.name,
        email: student.email,
        phone: student.phone || "",
        crn: student.crn || "",
        gender: student.gender || "",
        ca_level: student.ca_level || "",
        password: "",
        is_active: !!student.is_active
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
    const confirmDelete = async (student) => {
      if (await showConfirm("Delete Student", `Are you sure you want to delete ${student.name}?`, "Yes, Delete")) {
        try {
          await librarianAPI.deleteStudent(student.id);
          showSuccess("Deleted!", "Student deleted successfully");
          fetchStudents();
        } catch (error) {
          console.error("Error deleting student:", error);
          showError("Delete Failed", "Failed to delete student");
        }
      }
    };
    const openBanModal = (student) => {
      banForm.value = {
        userId: student.id,
        userName: student.name,
        days: null,
        reason: ""
      };
      showBanModal.value = true;
    };
    const submitBan = async () => {
      if (!banForm.value.userId) return;
      try {
        banning.value = true;
        await librarianAPI.banStudent(banForm.value.userId, {
          days: banForm.value.days || void 0,
          reason: banForm.value.reason
        });
        showBanModal.value = false;
        showSuccess("Banned", `${banForm.value.userName} has been restricted`);
        fetchStudents();
      } catch (error) {
        showError("Ban Failed", "Failed to restrict student");
      } finally {
        banning.value = false;
      }
    };
    const unbanStudent = async (student) => {
      if (await showConfirm("Unban Student", `Are you sure you want to lift the restriction for ${student.name}?`, "Yes, Unban")) {
        try {
          await librarianAPI.unbanStudent(student.id);
          showSuccess("Unbanned", `${student.name} can now access the library again`);
          fetchStudents();
        } catch (error) {
          showError("Unban Failed", "Failed to lift restriction");
        }
      }
    };
    const formatDate = (dateStr) => {
      if (!dateStr) return "N/A";
      return new Date(dateStr).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric"
      });
    };
    const exportStudents = () => {
      showWarning("Coming Soon", "Export functionality coming soon");
    };
    return (_ctx, _cache) => {
      const _component_User = resolveComponent("User");
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          _cache[19] || (_cache[19] = createBaseVNode("div", null, [
            createBaseVNode("h1", { class: "text-3xl font-bold text-gray-900" }, "Students"),
            createBaseVNode("p", { class: "text-gray-600 mt-1" }, "Manage student registrations and profiles")
          ], -1)),
          createBaseVNode("div", _hoisted_3, [
            createBaseVNode("button", {
              onClick: exportStudents,
              class: "px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center space-x-2"
            }, [
              createVNode(unref(Download), { class: "w-4 h-4" }),
              _cache[17] || (_cache[17] = createBaseVNode("span", { class: "text-sm font-medium" }, "Export", -1))
            ]),
            createBaseVNode("button", {
              onClick: openAddModal,
              class: "px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg hover:shadow-lg transition-all flex items-center space-x-2"
            }, [
              createVNode(unref(UserPlus), { class: "w-4 h-4" }),
              _cache[18] || (_cache[18] = createBaseVNode("span", { class: "text-sm font-medium" }, "Add Student", -1))
            ])
          ])
        ]),
        createBaseVNode("div", _hoisted_4, [
          (openBlock(), createElementBlock(Fragment, null, renderList(statsConfig, (stat) => {
            return createBaseVNode("div", {
              key: stat.key,
              class: "bg-white rounded-xl p-6 shadow-sm border border-gray-200"
            }, [
              createBaseVNode("div", _hoisted_5, [
                createBaseVNode("div", null, [
                  createBaseVNode("p", _hoisted_6, toDisplayString(stat.label), 1),
                  createBaseVNode("h3", _hoisted_7, toDisplayString(stats.value[stat.key]), 1)
                ]),
                createBaseVNode("div", {
                  class: normalizeClass(["p-3 rounded-lg", stat.bgClass])
                }, [
                  (openBlock(), createBlock(resolveDynamicComponent(stat.icon), {
                    class: normalizeClass(["w-6 h-6", stat.iconClass])
                  }, null, 8, ["class"]))
                ], 2)
              ])
            ]);
          }), 64))
        ]),
        createBaseVNode("div", _hoisted_8, [
          createBaseVNode("div", _hoisted_9, [
            createBaseVNode("div", _hoisted_10, [
              createVNode(unref(Search), { class: "absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" }),
              withDirectives(createBaseVNode("input", {
                type: "text",
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => searchQuery.value = $event),
                placeholder: "Search by name, ID, or email...",
                class: "w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              }, null, 512), [
                [vModelText, searchQuery.value]
              ])
            ]),
            withDirectives(createBaseVNode("select", {
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => statusFilter.value = $event),
              class: "px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            }, [..._cache[20] || (_cache[20] = [
              createBaseVNode("option", { value: "all" }, "All Status", -1),
              createBaseVNode("option", { value: "active" }, "Active", -1),
              createBaseVNode("option", { value: "inactive" }, "Inactive", -1)
            ])], 512), [
              [vModelSelect, statusFilter.value]
            ])
          ])
        ]),
        loading.value ? (openBlock(), createElementBlock("div", _hoisted_11, [..._cache[21] || (_cache[21] = [
          createBaseVNode("div", { class: "animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600" }, null, -1)
        ])])) : filteredStudents.value.length === 0 ? (openBlock(), createElementBlock("div", _hoisted_12, [
          createVNode(unref(Users), { class: "w-12 h-12 text-gray-400 mx-auto mb-4" }),
          _cache[22] || (_cache[22] = createBaseVNode("p", { class: "text-gray-500" }, "No students found matching your criteria.", -1))
        ])) : (openBlock(), createElementBlock("div", _hoisted_13, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(filteredStudents.value, (student) => {
            return openBlock(), createElementBlock("div", {
              key: student.id,
              class: "bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow group"
            }, [
              createBaseVNode("div", _hoisted_14, [
                createBaseVNode("div", _hoisted_15, [
                  createBaseVNode("div", _hoisted_16, [
                    createBaseVNode("button", {
                      onClick: ($event) => openEditModal(student),
                      class: "p-1.5 bg-white/20 hover:bg-white/30 rounded text-white backdrop-blur-sm"
                    }, [
                      createVNode(unref(Pen), { class: "w-4 h-4" })
                    ], 8, _hoisted_17),
                    createBaseVNode("button", {
                      onClick: ($event) => confirmDelete(student),
                      class: "p-1.5 bg-red-500/20 hover:bg-red-500/40 rounded text-white backdrop-blur-sm"
                    }, [
                      createVNode(unref(Trash2), { class: "w-4 h-4" })
                    ], 8, _hoisted_18)
                  ])
                ])
              ]),
              createBaseVNode("div", _hoisted_19, [
                createBaseVNode("div", _hoisted_20, [
                  createBaseVNode("div", _hoisted_21, [
                    student.profile_picture ? (openBlock(), createElementBlock("img", {
                      key: 0,
                      src: student.profile_picture,
                      class: "w-full h-full object-cover"
                    }, null, 8, _hoisted_22)) : (openBlock(), createElementBlock("div", _hoisted_23, toDisplayString(student.name.charAt(0)), 1))
                  ]),
                  createBaseVNode("span", {
                    class: normalizeClass([
                      "px-3 py-1 rounded-full text-xs font-medium",
                      student.is_banned ? "bg-red-100 text-red-700" : student.is_active ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-700"
                    ])
                  }, toDisplayString(student.is_banned ? "Banned" : student.is_active ? "Active" : "Inactive"), 3)
                ]),
                createBaseVNode("div", _hoisted_24, [
                  createBaseVNode("h3", _hoisted_25, toDisplayString(student.name), 1),
                  createBaseVNode("p", _hoisted_26, toDisplayString(student.crn), 1)
                ]),
                createBaseVNode("div", _hoisted_27, [
                  createBaseVNode("div", _hoisted_28, [
                    createVNode(unref(Mail), { class: "w-4 h-4" }),
                    createBaseVNode("span", _hoisted_29, toDisplayString(student.email), 1)
                  ]),
                  createBaseVNode("div", _hoisted_30, [
                    createVNode(unref(Phone), { class: "w-4 h-4" }),
                    createBaseVNode("span", null, toDisplayString(student.phone || "N/A"), 1)
                  ]),
                  createBaseVNode("div", _hoisted_31, [
                    createVNode(unref(Calendar), { class: "w-4 h-4" }),
                    createBaseVNode("span", null, "Joined " + toDisplayString(formatDate(student.created_at)), 1)
                  ]),
                  student.gender ? (openBlock(), createElementBlock("div", _hoisted_32, [
                    createVNode(_component_User, { class: "w-4 h-4" }),
                    createBaseVNode("span", _hoisted_33, toDisplayString(student.gender), 1)
                  ])) : createCommentVNode("", true)
                ]),
                createBaseVNode("div", _hoisted_34, [
                  createBaseVNode("div", _hoisted_35, [
                    createBaseVNode("div", null, [
                      _cache[23] || (_cache[23] = createBaseVNode("p", { class: "text-gray-500" }, "Bookings", -1)),
                      createBaseVNode("p", _hoisted_36, toDisplayString(student.seat_bookings_count || 0), 1)
                    ]),
                    createBaseVNode("div", null, [
                      _cache[24] || (_cache[24] = createBaseVNode("p", { class: "text-gray-500" }, "Level", -1)),
                      createBaseVNode("p", _hoisted_37, toDisplayString(student.ca_level || "N/A"), 1)
                    ]),
                    createBaseVNode("div", null, [
                      _cache[25] || (_cache[25] = createBaseVNode("p", { class: "text-gray-500" }, "Points", -1)),
                      createBaseVNode("p", _hoisted_38, toDisplayString(student.loyalty_points || 0), 1)
                    ])
                  ])
                ]),
                createBaseVNode("div", _hoisted_39, [
                  createBaseVNode("button", {
                    onClick: ($event) => _ctx.$router.push({ name: "librarian-student-details", params: { id: student.id } }),
                    class: "flex-1 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm font-medium"
                  }, " View Profile ", 8, _hoisted_40),
                  createBaseVNode("button", {
                    onClick: ($event) => student.is_banned ? unbanStudent(student) : openBanModal(student),
                    class: normalizeClass([
                      "p-2 border rounded-lg transition-colors",
                      student.is_banned ? "border-green-200 text-green-600 hover:bg-green-50" : "border-orange-200 text-orange-600 hover:bg-orange-50"
                    ]),
                    title: student.is_banned ? "Unban Student" : "Ban Student"
                  }, [
                    student.is_banned ? (openBlock(), createBlock(unref(UserCheck), {
                      key: 0,
                      class: "w-4 h-4"
                    })) : (openBlock(), createBlock(unref(Ban), {
                      key: 1,
                      class: "w-4 h-4"
                    }))
                  ], 10, _hoisted_41)
                ])
              ])
            ]);
          }), 128))
        ])),
        showModal.value ? (openBlock(), createElementBlock("div", _hoisted_42, [
          createBaseVNode("div", _hoisted_43, [
            createBaseVNode("div", _hoisted_44, [
              createBaseVNode("h2", _hoisted_45, toDisplayString(isEditing.value ? "Edit Student" : "Add New Student"), 1),
              createBaseVNode("button", {
                onClick: _cache[2] || (_cache[2] = ($event) => showModal.value = false),
                class: "p-2 hover:bg-gray-100 rounded-full transition-colors"
              }, [
                createVNode(unref(X), { class: "w-5 h-5 text-gray-500" })
              ])
            ]),
            createBaseVNode("form", {
              onSubmit: withModifiers(saveStudent, ["prevent"]),
              class: "p-6 space-y-4"
            }, [
              createBaseVNode("div", null, [
                _cache[26] || (_cache[26] = createBaseVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Full Name", -1)),
                withDirectives(createBaseVNode("input", {
                  "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => form.value.name = $event),
                  type: "text",
                  required: "",
                  class: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent",
                  placeholder: "e.g. Ahmed Khan"
                }, null, 512), [
                  [vModelText, form.value.name]
                ])
              ]),
              createBaseVNode("div", _hoisted_46, [
                createBaseVNode("div", null, [
                  _cache[27] || (_cache[27] = createBaseVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Student ID (CRN)", -1)),
                  withDirectives(createBaseVNode("input", {
                    "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => form.value.crn = $event),
                    type: "number",
                    required: "",
                    class: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent",
                    placeholder: "e.g. 123456"
                  }, null, 512), [
                    [vModelText, form.value.crn]
                  ])
                ]),
                createBaseVNode("div", null, [
                  _cache[29] || (_cache[29] = createBaseVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "CA Level", -1)),
                  withDirectives(createBaseVNode("select", {
                    "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => form.value.ca_level = $event),
                    class: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  }, [..._cache[28] || (_cache[28] = [
                    createBaseVNode("option", { value: "" }, "Select Level", -1),
                    createBaseVNode("option", { value: "PRC" }, "PRC", -1),
                    createBaseVNode("option", { value: "CAF" }, "CAF", -1),
                    createBaseVNode("option", { value: "Final" }, "Final", -1)
                  ])], 512), [
                    [vModelSelect, form.value.ca_level]
                  ])
                ])
              ]),
              createBaseVNode("div", _hoisted_47, [
                createBaseVNode("div", null, [
                  _cache[30] || (_cache[30] = createBaseVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Email Address", -1)),
                  withDirectives(createBaseVNode("input", {
                    "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => form.value.email = $event),
                    type: "email",
                    required: "",
                    class: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent",
                    placeholder: "email@example.com"
                  }, null, 512), [
                    [vModelText, form.value.email]
                  ])
                ]),
                createBaseVNode("div", null, [
                  _cache[31] || (_cache[31] = createBaseVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Phone Number", -1)),
                  withDirectives(createBaseVNode("input", {
                    "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => form.value.phone = $event),
                    type: "tel",
                    class: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent",
                    placeholder: "+92 3XX XXXXXXX"
                  }, null, 512), [
                    [vModelText, form.value.phone]
                  ])
                ])
              ]),
              createBaseVNode("div", null, [
                _cache[33] || (_cache[33] = createBaseVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Gender", -1)),
                withDirectives(createBaseVNode("select", {
                  "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => form.value.gender = $event),
                  class: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                }, [..._cache[32] || (_cache[32] = [
                  createBaseVNode("option", { value: "" }, "Select Gender", -1),
                  createBaseVNode("option", { value: "male" }, "Male", -1),
                  createBaseVNode("option", { value: "female" }, "Female", -1)
                ])], 512), [
                  [vModelSelect, form.value.gender]
                ])
              ]),
              !isEditing.value || changePassword.value ? (openBlock(), createElementBlock("div", _hoisted_48, [
                _cache[34] || (_cache[34] = createBaseVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Password", -1)),
                withDirectives(createBaseVNode("input", {
                  "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => form.value.password = $event),
                  type: "password",
                  required: !isEditing.value,
                  class: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent",
                  placeholder: "••••••••"
                }, null, 8, _hoisted_49), [
                  [vModelText, form.value.password]
                ])
              ])) : createCommentVNode("", true),
              isEditing.value ? (openBlock(), createElementBlock("div", _hoisted_50, [
                withDirectives(createBaseVNode("input", {
                  type: "checkbox",
                  "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => changePassword.value = $event),
                  id: "changePwd",
                  class: "rounded text-purple-600 focus:ring-purple-500"
                }, null, 512), [
                  [vModelCheckbox, changePassword.value]
                ]),
                _cache[35] || (_cache[35] = createBaseVNode("label", {
                  for: "changePwd",
                  class: "text-sm text-gray-600"
                }, "Change Password", -1))
              ])) : createCommentVNode("", true),
              isEditing.value ? (openBlock(), createElementBlock("div", _hoisted_51, [
                withDirectives(createBaseVNode("input", {
                  type: "checkbox",
                  "onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => form.value.is_active = $event),
                  id: "isActive",
                  class: "rounded text-purple-600 focus:ring-purple-500"
                }, null, 512), [
                  [vModelCheckbox, form.value.is_active]
                ]),
                _cache[36] || (_cache[36] = createBaseVNode("label", {
                  for: "isActive",
                  class: "text-sm text-gray-600"
                }, "Account Active", -1))
              ])) : createCommentVNode("", true),
              createBaseVNode("div", _hoisted_52, [
                createBaseVNode("button", {
                  type: "button",
                  onClick: _cache[12] || (_cache[12] = ($event) => showModal.value = false),
                  class: "flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                }, " Cancel "),
                createBaseVNode("button", {
                  type: "submit",
                  disabled: saving.value,
                  class: "flex-1 px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg hover:shadow-lg transition-all disabled:opacity-50"
                }, [
                  saving.value ? (openBlock(), createElementBlock("span", _hoisted_54, "Saving...")) : (openBlock(), createElementBlock("span", _hoisted_55, toDisplayString(isEditing.value ? "Update Student" : "Create Student"), 1))
                ], 8, _hoisted_53)
              ])
            ], 32)
          ])
        ])) : createCommentVNode("", true),
        showBanModal.value ? (openBlock(), createElementBlock("div", _hoisted_56, [
          createBaseVNode("div", _hoisted_57, [
            createBaseVNode("div", _hoisted_58, [
              createBaseVNode("div", null, [
                _cache[37] || (_cache[37] = createBaseVNode("h2", { class: "text-xl font-bold" }, "Ban Student", -1)),
                createBaseVNode("p", _hoisted_59, "Restrict access for " + toDisplayString(banForm.value.userName), 1)
              ]),
              createBaseVNode("button", {
                onClick: _cache[13] || (_cache[13] = ($event) => showBanModal.value = false),
                class: "p-2 hover:bg-white/20 rounded-full transition-colors"
              }, [
                createVNode(unref(X), { class: "w-5 h-5" })
              ])
            ]),
            createBaseVNode("form", {
              onSubmit: withModifiers(submitBan, ["prevent"]),
              class: "p-6 space-y-4"
            }, [
              createBaseVNode("div", null, [
                _cache[38] || (_cache[38] = createBaseVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Duration (Days)", -1)),
                withDirectives(createBaseVNode("input", {
                  "onUpdate:modelValue": _cache[14] || (_cache[14] = ($event) => banForm.value.days = $event),
                  type: "number",
                  min: "1",
                  class: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent",
                  placeholder: "Leave empty for lifetime ban"
                }, null, 512), [
                  [vModelText, banForm.value.days]
                ])
              ]),
              createBaseVNode("div", null, [
                _cache[39] || (_cache[39] = createBaseVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Reason", -1)),
                withDirectives(createBaseVNode("textarea", {
                  "onUpdate:modelValue": _cache[15] || (_cache[15] = ($event) => banForm.value.reason = $event),
                  rows: "3",
                  class: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent",
                  placeholder: "Enter reason for ban"
                }, null, 512), [
                  [vModelText, banForm.value.reason]
                ])
              ]),
              createBaseVNode("div", _hoisted_60, [
                createBaseVNode("button", {
                  type: "button",
                  onClick: _cache[16] || (_cache[16] = ($event) => showBanModal.value = false),
                  class: "flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                }, " Cancel "),
                createBaseVNode("button", {
                  type: "submit",
                  disabled: banning.value,
                  class: "flex-1 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 shadow-lg transition-all disabled:opacity-50"
                }, toDisplayString(banning.value ? "Banning..." : "Confirm Ban"), 9, _hoisted_61)
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
