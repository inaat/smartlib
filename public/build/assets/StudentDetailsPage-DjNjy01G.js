import { d as defineComponent, G as useRoute, r as ref, o as onMounted, c as computed, a as createElementBlock, b as createBaseVNode, j as createCommentVNode, f as createVNode, u as unref, n as normalizeClass, h as createBlock, t as toDisplayString, F as Fragment, k as renderList, z as withModifiers, p as withDirectives, v as vModelText, D as vModelSelect, e as createStaticVNode, B as vModelCheckbox, O as librarianAPI, C as useRouter, l as openBlock } from "./main-D4odWxzi.js";
import { u as useSwal } from "./useSwal-pQW_XkRe.js";
import { C as ChevronLeft } from "./chevron-left-CFNqWwp3.js";
import { U as UserCheck } from "./user-check-BH-29a_L.js";
import { B as Ban } from "./ban-C7fKI8Je.js";
import { P as Pen } from "./pen-DXnFNmwC.js";
import { T as Trash2 } from "./trash-2-D2rUsr0z.js";
import { R as RefreshCw } from "./refresh-cw-BuoaK0_N.js";
import { M as Mail } from "./mail-AYleBLoz.js";
import { P as Phone } from "./phone-BUZAZ662.js";
import { G as GraduationCap } from "./graduation-cap-Do2yosE9.js";
import { C as Calendar } from "./calendar-lJfe3rfu.js";
import { C as CircleCheck } from "./circle-check-CyCLMAA6.js";
import { S as Search } from "./search-DQSDGQmf.js";
import { X } from "./x-C9--2uVT.js";
import { T as TriangleAlert } from "./triangle-alert-SquaIONa.js";
import { C as CircleAlert } from "./circle-alert-C5Ue85PY.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
/* empty css               */
import "./createLucideIcon-BgnXjtcZ.js";
const _hoisted_1 = { class: "p-6 space-y-6 font-outfit" };
const _hoisted_2 = { class: "flex items-center justify-between" };
const _hoisted_3 = { class: "flex items-center space-x-4" };
const _hoisted_4 = {
  key: 0,
  class: "flex items-center space-x-2.5"
};
const _hoisted_5 = {
  key: 0,
  class: "flex flex-col items-center justify-center py-24"
};
const _hoisted_6 = {
  key: 1,
  class: "grid grid-cols-1 lg:grid-cols-3 gap-6"
};
const _hoisted_7 = { class: "space-y-6" };
const _hoisted_8 = { class: "bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden text-left" };
const _hoisted_9 = { class: "px-6 pb-6 relative" };
const _hoisted_10 = { class: "relative w-28 h-28 -mt-14 mb-4 z-10" };
const _hoisted_11 = { class: "w-full h-full rounded-2xl bg-white border-4 border-white shadow-lg flex items-center justify-center overflow-hidden" };
const _hoisted_12 = ["src"];
const _hoisted_13 = {
  key: 1,
  class: "w-full h-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center text-white text-3xl font-bold"
};
const _hoisted_14 = { class: "text-lg font-bold text-slate-800 tracking-tight leading-snug" };
const _hoisted_15 = { class: "text-xs font-semibold text-slate-400 mt-1" };
const _hoisted_16 = { class: "mt-6 space-y-3.5" };
const _hoisted_17 = { class: "flex items-center space-x-3.5 text-xs font-semibold text-slate-600" };
const _hoisted_18 = { class: "w-8 h-8 rounded-lg bg-emerald-50/50 border border-emerald-100/30 flex items-center justify-center flex-shrink-0 text-emerald-600" };
const _hoisted_19 = { class: "truncate" };
const _hoisted_20 = { class: "flex items-center space-x-3.5 text-xs font-semibold text-slate-600" };
const _hoisted_21 = { class: "w-8 h-8 rounded-lg bg-emerald-50/50 border border-emerald-100/30 flex items-center justify-center flex-shrink-0 text-emerald-600" };
const _hoisted_22 = { class: "flex items-center space-x-3.5 text-xs font-semibold text-slate-600" };
const _hoisted_23 = { class: "w-8 h-8 rounded-lg bg-emerald-50/50 border border-emerald-100/30 flex items-center justify-center flex-shrink-0 text-emerald-600" };
const _hoisted_24 = { class: "flex items-center space-x-3.5 text-xs font-semibold text-slate-600" };
const _hoisted_25 = { class: "w-8 h-8 rounded-lg bg-emerald-50/50 border border-emerald-100/30 flex items-center justify-center flex-shrink-0 text-emerald-600" };
const _hoisted_26 = {
  key: 0,
  class: "mt-6 p-4 bg-gradient-to-br from-emerald-50 to-teal-50/40 rounded-xl border border-emerald-100/60 text-left relative overflow-hidden"
};
const _hoisted_27 = { class: "flex items-center justify-between mb-3 relative z-10" };
const _hoisted_28 = { class: "font-bold text-emerald-900 text-sm relative z-10" };
const _hoisted_29 = { class: "text-[10px] text-emerald-600 font-semibold mt-1.5 relative z-10" };
const _hoisted_30 = { class: "lg:col-span-2 space-y-6" };
const _hoisted_31 = { class: "bg-white rounded-xl p-6 shadow-sm border border-gray-100" };
const _hoisted_32 = { class: "flex items-center space-x-1.5 bg-slate-50 border border-slate-100 p-1 rounded-xl w-max mb-6" };
const _hoisted_33 = ["onClick"];
const _hoisted_34 = { class: "space-y-4" };
const _hoisted_35 = {
  key: 0,
  class: "space-y-4"
};
const _hoisted_36 = { class: "font-bold text-slate-800 text-xs" };
const _hoisted_37 = { class: "text-[10px] text-slate-400 font-semibold mt-0.5 uppercase" };
const _hoisted_38 = {
  key: 1,
  class: "flex flex-col items-center justify-center py-20 text-center"
};
const _hoisted_39 = {
  key: 1,
  class: "space-y-4"
};
const _hoisted_40 = { class: "grid grid-cols-2 gap-4 mb-2" };
const _hoisted_41 = { class: "p-4 bg-slate-50/60 border border-slate-100 rounded-xl text-left shadow-sm" };
const _hoisted_42 = { class: "text-xl font-bold text-slate-700 mt-1" };
const _hoisted_43 = { class: "p-4 bg-slate-50/60 border border-slate-100 rounded-xl text-left shadow-sm" };
const _hoisted_44 = { class: "text-xl font-bold text-slate-700 mt-1" };
const _hoisted_45 = { class: "font-bold text-slate-800 text-xs" };
const _hoisted_46 = { class: "text-[10px] text-slate-400 font-semibold mt-0.5 uppercase" };
const _hoisted_47 = {
  key: 1,
  class: "flex flex-col items-center justify-center py-20 text-center"
};
const _hoisted_48 = {
  key: 2,
  class: "space-y-4"
};
const _hoisted_49 = { class: "font-bold text-slate-800 text-xs" };
const _hoisted_50 = { class: "text-[10px] text-slate-400 font-semibold mt-0.5 uppercase" };
const _hoisted_51 = {
  key: 1,
  class: "flex flex-col items-center justify-center py-20 text-center"
};
const _hoisted_52 = {
  key: 3,
  class: "space-y-4"
};
const _hoisted_53 = { class: "font-bold text-slate-800 text-xs" };
const _hoisted_54 = { class: "text-[10px] text-slate-400 font-semibold mt-0.5 uppercase" };
const _hoisted_55 = {
  key: 1,
  class: "flex flex-col items-center justify-center py-20 text-center"
};
const _hoisted_56 = {
  key: 2,
  class: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
};
const _hoisted_57 = { class: "bg-white rounded-xl shadow-xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in duration-200 border border-gray-200" };
const _hoisted_58 = { class: "p-6 border-b border-slate-100 flex items-center justify-between text-left" };
const _hoisted_59 = { class: "grid grid-cols-2 gap-4" };
const _hoisted_60 = { class: "grid grid-cols-2 gap-4" };
const _hoisted_61 = { key: 0 };
const _hoisted_62 = { class: "flex items-center space-x-2 pt-1" };
const _hoisted_63 = { class: "flex items-center space-x-2" };
const _hoisted_64 = { class: "pt-4 flex items-center space-x-3" };
const _hoisted_65 = ["disabled"];
const _hoisted_66 = { key: 0 };
const _hoisted_67 = { key: 1 };
const _hoisted_68 = {
  key: 3,
  class: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
};
const _hoisted_69 = { class: "bg-white rounded-xl shadow-xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in duration-200 border border-gray-200" };
const _hoisted_70 = { class: "p-6 border-b border-gray-100 flex items-center justify-between text-left" };
const _hoisted_71 = { class: "flex items-center space-x-3" };
const _hoisted_72 = { class: "w-10 h-10 rounded-lg bg-rose-50 flex items-center justify-center text-rose-600 border border-rose-100/50 flex-shrink-0" };
const _hoisted_73 = { class: "text-[10px] font-semibold text-slate-400 uppercase tracking-wider mt-0.5" };
const _hoisted_74 = { class: "flex items-start space-x-2.5 p-3.5 bg-rose-50/50 text-rose-700 border border-rose-100/65 rounded-xl text-[11px] font-semibold leading-relaxed" };
const _hoisted_75 = { class: "pt-2 flex items-center space-x-3" };
const _hoisted_76 = ["disabled"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "StudentDetailsPage",
  setup(__props) {
    const route = useRoute();
    const router = useRouter();
    const { showError, showSuccess, showConfirm } = useSwal();
    const studentId = Number(route.params.id);
    const loading = ref(true);
    const student = ref(null);
    const activeTab = ref("bookings");
    const showModal = ref(false);
    const saving = ref(false);
    const changePassword = ref(false);
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
    const showBanModal = ref(false);
    const banning = ref(false);
    const banForm = ref({
      days: null,
      reason: ""
    });
    const tabs = [
      { id: "bookings", label: "Seat Bookings" },
      { id: "attendance", label: "Attendance" },
      { id: "events", label: "Events" },
      { id: "books", label: "Books" }
    ];
    const fetchStudentDetails = async () => {
      try {
        loading.value = true;
        const data = await librarianAPI.getStudent(studentId);
        student.value = data;
      } catch (error) {
        console.error("Error fetching student details:", error);
        showError("Error", "Failed to load student profile");
        router.push("/librarian/students");
      } finally {
        loading.value = false;
      }
    };
    onMounted(fetchStudentDetails);
    const sortedBookings = computed(() => {
      if (!student.value?.seat_bookings) return [];
      return [...student.value.seat_bookings].sort(
        (a, b) => new Date(b.booking_date).getTime() - new Date(a.booking_date).getTime()
      );
    });
    const sortedAttendance = computed(() => {
      if (!student.value?.attendance) return [];
      return [...student.value.attendance].sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      );
    });
    const uniqueAttendanceDays = computed(() => {
      if (!student.value?.attendance) return 0;
      const dates = student.value.attendance.map((a) => {
        if (!a.date) return null;
        const raw = typeof a.date === "string" ? a.date : String(a.date);
        return raw.split("T")[0].split(" ")[0];
      }).filter(Boolean);
      return new Set(dates).size;
    });
    const formatDate = (dateString) => {
      if (!dateString) return "N/A";
      return new Date(dateString).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric"
      });
    };
    const formatTime = (dateString) => {
      if (!dateString) return "N/A";
      return new Date(dateString).toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true
      });
    };
    const openEditModal = () => {
      if (!student.value) return;
      changePassword.value = false;
      form.value = {
        name: student.value.name,
        email: student.value.email,
        phone: student.value.phone || "",
        crn: student.value.crn || "",
        gender: student.value.gender || "",
        ca_level: student.value.ca_level || "",
        password: "",
        is_active: !!student.value.is_active
      };
      showModal.value = true;
    };
    const saveStudent = async () => {
      try {
        saving.value = true;
        const payload = { ...form.value };
        if (!changePassword.value) {
          delete payload.password;
        }
        await librarianAPI.updateStudent(studentId, payload);
        showSuccess("Updated!", "Student details updated successfully");
        showModal.value = false;
        fetchStudentDetails();
      } catch (error) {
        console.error("Error saving student:", error);
        const message = error.response?.data?.message || "Failed to save details";
        showError("Save Failed", message);
      } finally {
        saving.value = false;
      }
    };
    const openBanModal = () => {
      banForm.value = {
        days: null,
        reason: ""
      };
      showBanModal.value = true;
    };
    const submitBan = async () => {
      try {
        banning.value = true;
        await librarianAPI.banStudent(studentId, {
          days: banForm.value.days || void 0,
          reason: banForm.value.reason
        });
        showBanModal.value = false;
        showSuccess("Restricted", "Student access restriction applied");
        fetchStudentDetails();
      } catch (error) {
        showError("Failed", "Failed to restrict student");
      } finally {
        banning.value = false;
      }
    };
    const unbanStudent = async (student2) => {
      if (await showConfirm("Unban Student", `Are you sure you want to lift the restriction for ${student2.name}?`, "Yes, Unban")) {
        try {
          await librarianAPI.unbanStudent(student2.id);
          showSuccess("Unbanned", "Student access restored");
          fetchStudentDetails();
        } catch (error) {
          showError("Unban Failed", "Failed to lift restriction");
        }
      }
    };
    const confirmDelete = async () => {
      if (!student.value) return;
      if (await showConfirm("Delete Student", `Are you sure you want to delete ${student.value.name}? This action is irreversible.`, "Yes, Delete")) {
        try {
          await librarianAPI.deleteStudent(studentId);
          showSuccess("Deleted!", "Student deleted successfully");
          router.push("/librarian/students");
        } catch (error) {
          console.error("Error deleting student:", error);
          showError("Delete Failed", "Failed to delete student");
        }
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
              onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$router.push("/librarian/students")),
              class: "p-2 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 text-slate-550 transition-colors cursor-pointer shadow-sm",
              title: "Back to Students List"
            }, [
              createVNode(unref(ChevronLeft), { class: "w-5 h-5" })
            ]),
            _cache[17] || (_cache[17] = createBaseVNode("div", { class: "text-left" }, [
              createBaseVNode("h2", { class: "text-lg font-bold text-slate-800" }, "Student Profile"),
              createBaseVNode("p", { class: "text-slate-400 text-xs mt-0.5 font-medium" }, "Detailed activity and history")
            ], -1))
          ]),
          student.value ? (openBlock(), createElementBlock("div", _hoisted_4, [
            createBaseVNode("button", {
              onClick: _cache[1] || (_cache[1] = ($event) => student.value.is_banned ? unbanStudent(student.value) : openBanModal()),
              class: normalizeClass([
                "px-4 py-2 border rounded-xl transition-all flex items-center space-x-2 text-xs font-bold cursor-pointer shadow-sm",
                student.value.is_banned ? "border-green-200 text-green-700 bg-green-50 hover:bg-green-100" : "border-orange-200 text-orange-700 bg-orange-50 hover:bg-orange-100"
              ])
            }, [
              student.value.is_banned ? (openBlock(), createBlock(unref(UserCheck), {
                key: 0,
                class: "w-4 h-4"
              })) : (openBlock(), createBlock(unref(Ban), {
                key: 1,
                class: "w-4 h-4"
              })),
              createBaseVNode("span", null, toDisplayString(student.value.is_banned ? "Lift Restriction" : "Restrict Student"), 1)
            ], 2),
            createBaseVNode("button", {
              onClick: openEditModal,
              class: "px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl transition-colors flex items-center space-x-2 text-xs font-bold cursor-pointer shadow-sm"
            }, [
              createVNode(unref(Pen), { class: "w-4 h-4" }),
              _cache[18] || (_cache[18] = createBaseVNode("span", null, "Edit Details", -1))
            ]),
            createBaseVNode("button", {
              onClick: confirmDelete,
              class: "px-4 py-2 bg-red-50 border border-red-200 rounded-xl text-red-500 hover:bg-red-100 transition-all flex items-center space-x-2 text-xs font-bold cursor-pointer shadow-sm",
              title: "Delete Student"
            }, [
              createVNode(unref(Trash2), { class: "w-4 h-4" }),
              _cache[19] || (_cache[19] = createBaseVNode("span", null, "Delete Student", -1))
            ])
          ])) : createCommentVNode("", true)
        ]),
        loading.value ? (openBlock(), createElementBlock("div", _hoisted_5, [
          createVNode(unref(RefreshCw), { class: "w-10 h-10 text-emerald-600 animate-spin mb-4" }),
          _cache[20] || (_cache[20] = createBaseVNode("p", { class: "text-slate-500 font-semibold uppercase tracking-wider text-xs animate-pulse" }, "Fetching student data...", -1))
        ])) : student.value ? (openBlock(), createElementBlock("div", _hoisted_6, [
          createBaseVNode("div", _hoisted_7, [
            createBaseVNode("div", _hoisted_8, [
              _cache[23] || (_cache[23] = createBaseVNode("div", { class: "h-32 bg-gradient-to-br from-emerald-600 to-teal-700 relative overflow-hidden" }, [
                createBaseVNode("div", { class: "absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16" }),
                createBaseVNode("div", { class: "absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full -ml-12 -mb-12" })
              ], -1)),
              createBaseVNode("div", _hoisted_9, [
                createBaseVNode("div", _hoisted_10, [
                  createBaseVNode("div", _hoisted_11, [
                    student.value.profile_picture ? (openBlock(), createElementBlock("img", {
                      key: 0,
                      src: getProfilePictureUrl(student.value.profile_picture),
                      class: "w-full h-full object-cover"
                    }, null, 8, _hoisted_12)) : (openBlock(), createElementBlock("div", _hoisted_13, toDisplayString(student.value.name.charAt(0).toUpperCase()), 1))
                  ]),
                  createBaseVNode("div", {
                    class: normalizeClass([
                      "absolute bottom-1 right-[-6px] px-2.5 py-0.5 rounded-lg text-[9px] font-bold uppercase tracking-widest text-white border border-white shadow-sm",
                      student.value.is_banned ? "bg-red-500" : student.value.is_active ? "bg-green-500" : "bg-slate-400"
                    ])
                  }, toDisplayString(student.value.is_banned ? "Banned" : student.value.is_active ? "Active" : "Inactive"), 3)
                ]),
                createBaseVNode("h2", _hoisted_14, toDisplayString(student.value.name), 1),
                createBaseVNode("p", _hoisted_15, "Student CRN: " + toDisplayString(student.value.crn), 1),
                createBaseVNode("div", _hoisted_16, [
                  createBaseVNode("div", _hoisted_17, [
                    createBaseVNode("div", _hoisted_18, [
                      createVNode(unref(Mail), { class: "w-4 h-4" })
                    ]),
                    createBaseVNode("span", _hoisted_19, toDisplayString(student.value.email), 1)
                  ]),
                  createBaseVNode("div", _hoisted_20, [
                    createBaseVNode("div", _hoisted_21, [
                      createVNode(unref(Phone), { class: "w-4 h-4" })
                    ]),
                    createBaseVNode("span", null, toDisplayString(student.value.phone || "No phone number"), 1)
                  ]),
                  createBaseVNode("div", _hoisted_22, [
                    createBaseVNode("div", _hoisted_23, [
                      createVNode(unref(GraduationCap), { class: "w-4 h-4" })
                    ]),
                    createBaseVNode("span", null, "Level: " + toDisplayString(student.value.ca_level || "N/A"), 1)
                  ]),
                  createBaseVNode("div", _hoisted_24, [
                    createBaseVNode("div", _hoisted_25, [
                      createVNode(unref(Calendar), { class: "w-4 h-4" })
                    ]),
                    createBaseVNode("span", null, "Joined " + toDisplayString(formatDate(student.value.created_at)), 1)
                  ])
                ]),
                student.value.active_subscription ? (openBlock(), createElementBlock("div", _hoisted_26, [
                  createBaseVNode("div", _hoisted_27, [
                    _cache[21] || (_cache[21] = createBaseVNode("span", { class: "text-[9px] font-semibold text-emerald-600 uppercase tracking-widest bg-white/80 border border-emerald-100 px-2 py-0.5 rounded-md" }, "Membership Pass", -1)),
                    createVNode(unref(CircleCheck), { class: "w-4 h-4 text-emerald-600" })
                  ]),
                  createBaseVNode("p", _hoisted_28, toDisplayString(student.value.active_subscription.subscription_plan?.name), 1),
                  createBaseVNode("p", _hoisted_29, "Expires " + toDisplayString(formatDate(student.value.active_subscription.expires_at)), 1),
                  _cache[22] || (_cache[22] = createBaseVNode("div", { class: "absolute bottom-0 right-0 w-16 h-16 bg-emerald-100/10 rounded-full translate-x-4 translate-y-4" }, null, -1))
                ])) : createCommentVNode("", true)
              ])
            ])
          ]),
          createBaseVNode("div", _hoisted_30, [
            createBaseVNode("div", _hoisted_31, [
              createBaseVNode("div", _hoisted_32, [
                (openBlock(), createElementBlock(Fragment, null, renderList(tabs, (tab) => {
                  return createBaseVNode("button", {
                    key: tab.id,
                    onClick: ($event) => activeTab.value = tab.id,
                    class: normalizeClass([
                      "px-4 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer",
                      activeTab.value === tab.id ? "bg-white text-emerald-700 shadow-sm border border-slate-200/40" : "text-slate-500 hover:text-slate-800"
                    ])
                  }, toDisplayString(tab.label), 11, _hoisted_33);
                }), 64))
              ]),
              createBaseVNode("div", _hoisted_34, [
                activeTab.value === "bookings" ? (openBlock(), createElementBlock("div", _hoisted_35, [
                  sortedBookings.value.length > 0 ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(sortedBookings.value, (booking) => {
                    return openBlock(), createElementBlock("div", {
                      key: booking.id,
                      class: normalizeClass(["p-4 bg-white border border-gray-100 rounded-xl hover:border-slate-200 transition-all flex items-center justify-between text-left shadow-sm", [
                        booking.status === "checked_in" ? "border-l-4 border-l-green-500" : booking.status === "booked" ? "border-l-4 border-l-orange-500" : "border-l-4 border-l-slate-300"
                      ]])
                    }, [
                      createBaseVNode("div", null, [
                        createBaseVNode("h4", _hoisted_36, "Seat " + toDisplayString(booking.seat?.seat_number || "N/A") + " (" + toDisplayString(booking.seat?.floor?.name || booking.seat?.section?.floor?.name || "1st Floor") + ")", 1),
                        createBaseVNode("p", _hoisted_37, toDisplayString(formatDate(booking.booking_time)) + " • " + toDisplayString(formatTime(booking.booking_time)) + " - " + toDisplayString(formatTime(booking.scheduled_end_time)), 1)
                      ]),
                      createBaseVNode("span", {
                        class: normalizeClass([
                          "text-[9px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider border bg-white",
                          booking.status === "checked_in" ? "border-green-200 text-green-700" : booking.status === "booked" ? "border-orange-100 text-orange-700" : "border-slate-200 text-slate-550"
                        ])
                      }, toDisplayString(booking.status === "checked_in" ? "Active" : booking.status === "booked" ? "Pending" : booking.status), 3)
                    ], 2);
                  }), 128)) : (openBlock(), createElementBlock("div", _hoisted_38, [
                    createVNode(unref(Search), { class: "w-10 h-10 text-slate-200 mb-4" }),
                    _cache[24] || (_cache[24] = createBaseVNode("p", { class: "text-xs font-bold text-slate-400 uppercase tracking-widest" }, "No seat bookings found", -1))
                  ]))
                ])) : createCommentVNode("", true),
                activeTab.value === "attendance" ? (openBlock(), createElementBlock("div", _hoisted_39, [
                  createBaseVNode("div", _hoisted_40, [
                    createBaseVNode("div", _hoisted_41, [
                      _cache[25] || (_cache[25] = createBaseVNode("p", { class: "text-[9px] font-bold text-slate-400 uppercase tracking-widest" }, "Total Visits", -1)),
                      createBaseVNode("h4", _hoisted_42, toDisplayString(student.value.attendance?.length || 0), 1)
                    ]),
                    createBaseVNode("div", _hoisted_43, [
                      _cache[26] || (_cache[26] = createBaseVNode("p", { class: "text-[9px] font-bold text-slate-400 uppercase tracking-widest" }, "Unique Days", -1)),
                      createBaseVNode("h4", _hoisted_44, toDisplayString(uniqueAttendanceDays.value), 1)
                    ])
                  ]),
                  sortedAttendance.value.length > 0 ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(sortedAttendance.value, (log) => {
                    return openBlock(), createElementBlock("div", {
                      key: log.id,
                      class: normalizeClass(["p-4 bg-white border border-gray-100 rounded-xl hover:border-slate-200 transition-all flex items-center justify-between text-left shadow-sm", [
                        log.status === "present" ? "border-l-4 border-l-green-500" : "border-l-4 border-l-red-500"
                      ]])
                    }, [
                      createBaseVNode("div", null, [
                        createBaseVNode("h4", _hoisted_45, toDisplayString(formatDate(log.date)), 1),
                        createBaseVNode("p", _hoisted_46, " In: " + toDisplayString(log.check_in_time || "--") + " • Out: " + toDisplayString(log.check_out_time || "--"), 1)
                      ]),
                      createBaseVNode("span", {
                        class: normalizeClass([
                          "text-[9px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider border bg-white",
                          log.status === "present" ? "border-green-200 text-green-700" : "border-red-200 text-red-700"
                        ])
                      }, toDisplayString(log.status), 3)
                    ], 2);
                  }), 128)) : (openBlock(), createElementBlock("div", _hoisted_47, [
                    createVNode(unref(Search), { class: "w-10 h-10 text-slate-200 mb-4" }),
                    _cache[27] || (_cache[27] = createBaseVNode("p", { class: "text-xs font-bold text-slate-455 uppercase tracking-widest" }, "No attendance history found", -1))
                  ]))
                ])) : createCommentVNode("", true),
                activeTab.value === "events" ? (openBlock(), createElementBlock("div", _hoisted_48, [
                  student.value.events && student.value.events.length > 0 ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(student.value.events, (event) => {
                    return openBlock(), createElementBlock("div", {
                      key: event.id,
                      class: "p-4 bg-white border border-gray-100 rounded-xl hover:border-slate-200 transition-all flex items-center justify-between text-left shadow-sm border-l-4 border-l-green-500"
                    }, [
                      createBaseVNode("div", null, [
                        createBaseVNode("h4", _hoisted_49, toDisplayString(event.title), 1),
                        createBaseVNode("p", _hoisted_50, toDisplayString(formatDate(event.start_time)) + " • " + toDisplayString(event.location || "Library Hall"), 1)
                      ]),
                      _cache[28] || (_cache[28] = createBaseVNode("span", { class: "text-[9px] font-bold px-2.5 py-1 rounded-full border border-green-200 text-green-700 bg-white uppercase tracking-wider" }, " Joined ", -1))
                    ]);
                  }), 128)) : (openBlock(), createElementBlock("div", _hoisted_51, [
                    createVNode(unref(Search), { class: "w-10 h-10 text-slate-200 mb-4" }),
                    _cache[29] || (_cache[29] = createBaseVNode("p", { class: "text-xs font-bold text-slate-455 uppercase tracking-widest" }, "No events registered", -1))
                  ]))
                ])) : createCommentVNode("", true),
                activeTab.value === "books" ? (openBlock(), createElementBlock("div", _hoisted_52, [
                  student.value.reservations && student.value.reservations.length > 0 ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(student.value.reservations, (res) => {
                    return openBlock(), createElementBlock("div", {
                      key: res.id,
                      class: normalizeClass(["p-4 bg-white border border-gray-100 rounded-xl hover:border-slate-200 transition-all flex items-center justify-between text-left shadow-sm", [
                        res.status === "approved" ? "border-l-4 border-l-green-500" : res.status === "pending" ? "border-l-4 border-l-orange-500" : "border-l-4 border-l-slate-300"
                      ]])
                    }, [
                      createBaseVNode("div", null, [
                        createBaseVNode("h4", _hoisted_53, toDisplayString(res.book?.title), 1),
                        createBaseVNode("p", _hoisted_54, " Author: " + toDisplayString(res.book?.author) + " • Reserved: " + toDisplayString(formatDate(res.reserved_at)), 1)
                      ]),
                      createBaseVNode("span", {
                        class: normalizeClass([
                          "text-[9px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider border bg-white",
                          res.status === "approved" ? "border-green-200 text-green-700" : res.status === "pending" ? "border-orange-100 text-orange-700" : "border-slate-200 text-slate-550"
                        ])
                      }, toDisplayString(res.status), 3)
                    ], 2);
                  }), 128)) : (openBlock(), createElementBlock("div", _hoisted_55, [
                    createVNode(unref(Search), { class: "w-10 h-10 text-slate-200 mb-4" }),
                    _cache[30] || (_cache[30] = createBaseVNode("p", { class: "text-xs font-bold text-slate-400 uppercase tracking-widest" }, "No book reservations found", -1))
                  ]))
                ])) : createCommentVNode("", true)
              ])
            ])
          ])
        ])) : createCommentVNode("", true),
        showModal.value ? (openBlock(), createElementBlock("div", _hoisted_56, [
          createBaseVNode("div", _hoisted_57, [
            createBaseVNode("div", _hoisted_58, [
              _cache[31] || (_cache[31] = createBaseVNode("h2", { class: "text-lg font-bold text-slate-800" }, "Edit Student", -1)),
              createBaseVNode("button", {
                onClick: _cache[2] || (_cache[2] = ($event) => showModal.value = false),
                class: "p-2 hover:bg-slate-50 rounded-xl transition-colors cursor-pointer"
              }, [
                createVNode(unref(X), { class: "w-5 h-5 text-slate-400" })
              ])
            ]),
            createBaseVNode("form", {
              onSubmit: withModifiers(saveStudent, ["prevent"]),
              class: "p-6 space-y-4 text-left"
            }, [
              createBaseVNode("div", null, [
                _cache[32] || (_cache[32] = createBaseVNode("label", { class: "block text-xs font-bold text-slate-500 mb-1.5 uppercase tracking-wider" }, "Full Name", -1)),
                withDirectives(createBaseVNode("input", {
                  "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => form.value.name = $event),
                  type: "text",
                  required: "",
                  class: "w-full px-4 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none text-xs font-semibold text-slate-655 bg-white",
                  placeholder: "e.g. Ahmed Khan"
                }, null, 512), [
                  [vModelText, form.value.name]
                ])
              ]),
              createBaseVNode("div", _hoisted_59, [
                createBaseVNode("div", null, [
                  _cache[33] || (_cache[33] = createBaseVNode("label", { class: "block text-xs font-bold text-slate-500 mb-1.5 uppercase tracking-wider" }, "Student ID (CRN)", -1)),
                  withDirectives(createBaseVNode("input", {
                    "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => form.value.crn = $event),
                    type: "text",
                    required: "",
                    class: "w-full px-4 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none text-xs font-semibold text-slate-655 bg-white",
                    placeholder: "e.g. 123456"
                  }, null, 512), [
                    [vModelText, form.value.crn]
                  ])
                ]),
                createBaseVNode("div", null, [
                  _cache[35] || (_cache[35] = createBaseVNode("label", { class: "block text-xs font-bold text-slate-500 mb-1.5 uppercase tracking-wider" }, "CA Level", -1)),
                  withDirectives(createBaseVNode("select", {
                    "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => form.value.ca_level = $event),
                    class: "w-full px-4 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none text-xs font-bold text-slate-655 bg-white cursor-pointer"
                  }, [..._cache[34] || (_cache[34] = [
                    createStaticVNode('<option value="" data-v-4b9a9421>Select Level</option><option value="PRC" data-v-4b9a9421>PRC</option><option value="CAF" data-v-4b9a9421>CAF</option><option value="CFAP" data-v-4b9a9421>CFAP</option><option value="MSA" data-v-4b9a9421>MSA</option>', 5)
                  ])], 512), [
                    [vModelSelect, form.value.ca_level]
                  ])
                ])
              ]),
              createBaseVNode("div", _hoisted_60, [
                createBaseVNode("div", null, [
                  _cache[36] || (_cache[36] = createBaseVNode("label", { class: "block text-xs font-bold text-slate-500 mb-1.5 uppercase tracking-wider" }, "Email Address", -1)),
                  withDirectives(createBaseVNode("input", {
                    "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => form.value.email = $event),
                    type: "email",
                    required: "",
                    class: "w-full px-4 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none text-xs font-semibold text-slate-655 bg-white",
                    placeholder: "email@example.com"
                  }, null, 512), [
                    [vModelText, form.value.email]
                  ])
                ]),
                createBaseVNode("div", null, [
                  _cache[37] || (_cache[37] = createBaseVNode("label", { class: "block text-xs font-bold text-slate-500 mb-1.5 uppercase tracking-wider" }, "Phone Number", -1)),
                  withDirectives(createBaseVNode("input", {
                    "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => form.value.phone = $event),
                    type: "tel",
                    class: "w-full px-4 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none text-xs font-semibold text-slate-655 bg-white",
                    placeholder: "+92 3XX XXXXXXX"
                  }, null, 512), [
                    [vModelText, form.value.phone]
                  ])
                ])
              ]),
              createBaseVNode("div", null, [
                _cache[39] || (_cache[39] = createBaseVNode("label", { class: "block text-xs font-bold text-slate-500 mb-1.5 uppercase tracking-wider" }, "Gender", -1)),
                withDirectives(createBaseVNode("select", {
                  "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => form.value.gender = $event),
                  class: "w-full px-4 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none text-xs font-bold text-slate-655 bg-white cursor-pointer"
                }, [..._cache[38] || (_cache[38] = [
                  createBaseVNode("option", { value: "" }, "Select Gender", -1),
                  createBaseVNode("option", { value: "male" }, "Male", -1),
                  createBaseVNode("option", { value: "female" }, "Female", -1)
                ])], 512), [
                  [vModelSelect, form.value.gender]
                ])
              ]),
              changePassword.value ? (openBlock(), createElementBlock("div", _hoisted_61, [
                _cache[40] || (_cache[40] = createBaseVNode("label", { class: "block text-xs font-bold text-slate-500 mb-1.5 uppercase tracking-wider" }, "Password", -1)),
                withDirectives(createBaseVNode("input", {
                  "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => form.value.password = $event),
                  type: "password",
                  class: "w-full px-4 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none text-xs font-semibold text-slate-655 bg-white",
                  placeholder: "••••••••"
                }, null, 512), [
                  [vModelText, form.value.password]
                ])
              ])) : createCommentVNode("", true),
              createBaseVNode("div", _hoisted_62, [
                withDirectives(createBaseVNode("input", {
                  type: "checkbox",
                  "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => changePassword.value = $event),
                  id: "changePwd",
                  class: "rounded text-emerald-650 focus:ring-emerald-500 cursor-pointer"
                }, null, 512), [
                  [vModelCheckbox, changePassword.value]
                ]),
                _cache[41] || (_cache[41] = createBaseVNode("label", {
                  for: "changePwd",
                  class: "text-xs font-bold text-slate-550 cursor-pointer"
                }, "Change Password", -1))
              ]),
              createBaseVNode("div", _hoisted_63, [
                withDirectives(createBaseVNode("input", {
                  type: "checkbox",
                  "onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => form.value.is_active = $event),
                  id: "isActive",
                  class: "rounded text-emerald-600 focus:ring-emerald-500 cursor-pointer"
                }, null, 512), [
                  [vModelCheckbox, form.value.is_active]
                ]),
                _cache[42] || (_cache[42] = createBaseVNode("label", {
                  for: "isActive",
                  class: "text-xs font-bold text-slate-550 cursor-pointer"
                }, "Account Active", -1))
              ]),
              createBaseVNode("div", _hoisted_64, [
                createBaseVNode("button", {
                  type: "button",
                  onClick: _cache[12] || (_cache[12] = ($event) => showModal.value = false),
                  class: "flex-1 px-4 py-2.5 border border-slate-200 text-slate-500 font-bold rounded-xl hover:bg-slate-50 transition-colors text-xs cursor-pointer"
                }, " Cancel "),
                createBaseVNode("button", {
                  type: "submit",
                  disabled: saving.value,
                  class: "flex-1 px-4 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl transition-all disabled:opacity-50 text-xs font-bold cursor-pointer"
                }, [
                  saving.value ? (openBlock(), createElementBlock("span", _hoisted_66, "Saving...")) : (openBlock(), createElementBlock("span", _hoisted_67, "Update Details"))
                ], 8, _hoisted_65)
              ])
            ], 32)
          ])
        ])) : createCommentVNode("", true),
        showBanModal.value ? (openBlock(), createElementBlock("div", _hoisted_68, [
          createBaseVNode("div", _hoisted_69, [
            createBaseVNode("div", _hoisted_70, [
              createBaseVNode("div", _hoisted_71, [
                createBaseVNode("div", _hoisted_72, [
                  createVNode(unref(TriangleAlert), { class: "w-5 h-5" })
                ]),
                createBaseVNode("div", null, [
                  _cache[43] || (_cache[43] = createBaseVNode("h2", { class: "text-base font-bold text-slate-800 leading-snug" }, "Restrict Student", -1)),
                  createBaseVNode("p", _hoisted_73, "Restrict access for " + toDisplayString(student.value.name), 1)
                ])
              ]),
              createBaseVNode("button", {
                onClick: _cache[13] || (_cache[13] = ($event) => showBanModal.value = false),
                class: "p-2 hover:bg-slate-50 rounded-lg transition-colors cursor-pointer"
              }, [
                createVNode(unref(X), { class: "w-5 h-5 text-slate-400" })
              ])
            ]),
            createBaseVNode("form", {
              onSubmit: withModifiers(submitBan, ["prevent"]),
              class: "p-6 space-y-5 text-left"
            }, [
              createBaseVNode("div", null, [
                _cache[44] || (_cache[44] = createBaseVNode("label", { class: "block text-xs font-semibold text-slate-550 mb-1.5 uppercase tracking-wider" }, "Duration (Days)", -1)),
                withDirectives(createBaseVNode("input", {
                  "onUpdate:modelValue": _cache[14] || (_cache[14] = ($event) => banForm.value.days = $event),
                  type: "number",
                  min: "1",
                  class: "w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-rose-550/20 focus:border-rose-500 outline-none text-xs font-semibold text-slate-655 bg-white",
                  placeholder: "Leave empty for lifetime ban"
                }, null, 512), [
                  [vModelText, banForm.value.days]
                ])
              ]),
              createBaseVNode("div", null, [
                _cache[45] || (_cache[45] = createBaseVNode("label", { class: "block text-xs font-semibold text-slate-550 mb-1.5 uppercase tracking-wider" }, "Reason", -1)),
                withDirectives(createBaseVNode("textarea", {
                  "onUpdate:modelValue": _cache[15] || (_cache[15] = ($event) => banForm.value.reason = $event),
                  rows: "3",
                  class: "w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-rose-550/20 focus:border-rose-500 outline-none text-xs font-semibold text-slate-655 bg-white resize-none",
                  placeholder: "Enter reason for restriction"
                }, null, 512), [
                  [vModelText, banForm.value.reason]
                ])
              ]),
              createBaseVNode("div", _hoisted_74, [
                createVNode(unref(CircleAlert), { class: "w-4 h-4 mt-0.5 text-rose-600 flex-shrink-0" }),
                _cache[46] || (_cache[46] = createBaseVNode("p", null, "Restricting this student will block their seat bookings, check-in access, and library requests for the specified duration.", -1))
              ]),
              createBaseVNode("div", _hoisted_75, [
                createBaseVNode("button", {
                  type: "button",
                  onClick: _cache[16] || (_cache[16] = ($event) => showBanModal.value = false),
                  class: "flex-1 px-4 py-2.5 border border-gray-200 text-slate-505 font-bold rounded-lg hover:bg-slate-50 transition-colors text-xs cursor-pointer"
                }, " Cancel "),
                createBaseVNode("button", {
                  type: "submit",
                  disabled: banning.value,
                  class: "flex-1 px-4 py-2.5 bg-rose-600 hover:bg-rose-700 text-white rounded-lg shadow-sm transition-all disabled:opacity-50 text-xs font-bold cursor-pointer"
                }, toDisplayString(banning.value ? "Restricting..." : "Confirm Restriction"), 9, _hoisted_76)
              ])
            ], 32)
          ])
        ])) : createCommentVNode("", true)
      ]);
    };
  }
});
const StudentDetailsPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-4b9a9421"]]);
export {
  StudentDetailsPage as default
};
