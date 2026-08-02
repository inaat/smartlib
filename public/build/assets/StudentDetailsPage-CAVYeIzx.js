import { d as defineComponent, G as useRoute, r as ref, o as onMounted, c as computed, a as createElementBlock, b as createBaseVNode, j as createCommentVNode, f as createVNode, u as unref, n as normalizeClass, h as createBlock, t as toDisplayString, F as Fragment, k as renderList, z as withModifiers, p as withDirectives, v as vModelText, D as vModelSelect, e as createStaticVNode, B as vModelCheckbox, O as librarianAPI, C as useRouter, i as createTextVNode, l as openBlock } from "./main-BGbL_8Ba.js";
import { u as useSwal } from "./useSwal-pQW_XkRe.js";
import { C as ChevronLeft } from "./chevron-left-XU0Mhy50.js";
import { U as UserCheck } from "./user-check-CLXiS-e-.js";
import { B as Ban } from "./ban-h9S75VPx.js";
import { P as Pen } from "./pen-BsrhS65y.js";
import { T as Trash2 } from "./trash-2-DHi7U_Vy.js";
import { R as RefreshCw } from "./refresh-cw-BcRrptjM.js";
import { M as Mail } from "./mail-DK7Xx2m3.js";
import { P as Phone } from "./phone-rQywUwfB.js";
import { G as GraduationCap } from "./graduation-cap-DaJqINnC.js";
import { C as Calendar } from "./calendar-DQ765muz.js";
import { C as CircleCheck } from "./circle-check-IdV0ifmT.js";
import { S as Search } from "./search-BSjzd8ZF.js";
import { C as Clock } from "./clock-Cir2UmjW.js";
import { Z as Zap } from "./zap-DwN4yWwn.js";
import { X } from "./x-Cqc9Wc4f.js";
import { T as TriangleAlert } from "./triangle-alert-4H5SUbvt.js";
import { C as CircleAlert } from "./circle-alert-CbhTHhAn.js";
import { A as Armchair } from "./armchair-enLzRy9P.js";
import { c as createLucideIcon } from "./createLucideIcon-v8VVJu1z.js";
import { L as LogOut } from "./log-out-BntReOTK.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
/* empty css               */
const LogIn = createLucideIcon("log-in", [
  ["path", { d: "m10 17 5-5-5-5", key: "1bsop3" }],
  ["path", { d: "M15 12H3", key: "6jk70r" }],
  ["path", { d: "M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4", key: "u53s6r" }]
]);
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
  class: "space-y-3"
};
const _hoisted_36 = { class: "flex items-center justify-between border-b border-slate-50 pb-2.5" };
const _hoisted_37 = { class: "flex items-center space-x-2.5" };
const _hoisted_38 = { class: "w-8 h-8 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 font-bold text-xs" };
const _hoisted_39 = { class: "font-bold text-slate-800 text-xs leading-none" };
const _hoisted_40 = { class: "text-slate-400 font-normal text-[11px]" };
const _hoisted_41 = { class: "text-[10px] font-medium text-slate-400 mt-0.5 block" };
const _hoisted_42 = { class: "flex items-center space-x-2" };
const _hoisted_43 = {
  key: 0,
  class: "w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"
};
const _hoisted_44 = { class: "grid grid-cols-1 sm:grid-cols-4 gap-2.5 pt-0.5" };
const _hoisted_45 = { class: "flex items-center space-x-2 bg-slate-50/60 p-2.5 rounded-xl border border-slate-100" };
const _hoisted_46 = { class: "w-7 h-7 rounded-lg bg-blue-100/70 text-blue-700 flex items-center justify-center flex-shrink-0" };
const _hoisted_47 = { class: "text-[11px] font-bold text-slate-800 leading-none" };
const _hoisted_48 = { class: "flex items-center space-x-2 bg-slate-50/60 p-2.5 rounded-xl border border-slate-100" };
const _hoisted_49 = { class: "w-7 h-7 rounded-lg bg-emerald-100/70 text-emerald-700 flex items-center justify-center flex-shrink-0" };
const _hoisted_50 = { class: "text-[11px] font-bold text-slate-800 leading-none" };
const _hoisted_51 = { class: "flex items-center space-x-2 bg-slate-50/60 p-2.5 rounded-xl border border-slate-100" };
const _hoisted_52 = { class: "w-7 h-7 rounded-lg bg-rose-100/70 text-rose-700 flex items-center justify-center flex-shrink-0" };
const _hoisted_53 = { class: "text-[11px] font-bold text-slate-800 leading-none" };
const _hoisted_54 = { class: "flex items-center space-x-2 bg-slate-50/60 p-2.5 rounded-xl border border-slate-100" };
const _hoisted_55 = { class: "w-7 h-7 rounded-lg bg-indigo-100/70 text-indigo-700 flex items-center justify-center flex-shrink-0" };
const _hoisted_56 = { class: "text-[11px] font-bold text-slate-800 leading-none" };
const _hoisted_57 = {
  key: 1,
  class: "flex flex-col items-center justify-center py-16 bg-white rounded-3xl border border-dashed border-slate-200 text-center"
};
const _hoisted_58 = {
  key: 1,
  class: "space-y-5"
};
const _hoisted_59 = { class: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4" };
const _hoisted_60 = { class: "p-4 bg-slate-50/70 border border-slate-100 rounded-2xl flex items-center space-x-3 text-left" };
const _hoisted_61 = { class: "w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0" };
const _hoisted_62 = { class: "text-base font-bold text-slate-800" };
const _hoisted_63 = { class: "p-4 bg-slate-50/70 border border-slate-100 rounded-2xl flex items-center space-x-3 text-left" };
const _hoisted_64 = { class: "w-10 h-10 rounded-xl bg-purple-50 border border-purple-100 text-purple-600 flex items-center justify-center flex-shrink-0" };
const _hoisted_65 = { class: "text-base font-bold text-slate-800" };
const _hoisted_66 = { class: "p-4 bg-slate-50/70 border border-slate-100 rounded-2xl flex items-center space-x-3 text-left" };
const _hoisted_67 = { class: "w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0" };
const _hoisted_68 = { class: "text-base font-bold text-slate-800" };
const _hoisted_69 = { class: "p-4 bg-slate-50/70 border border-slate-100 rounded-2xl flex items-center space-x-3 text-left" };
const _hoisted_70 = { class: "w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 text-indigo-600 flex items-center justify-center flex-shrink-0" };
const _hoisted_71 = { class: "text-base font-bold text-slate-800" };
const _hoisted_72 = { class: "space-y-3" };
const _hoisted_73 = { class: "flex items-center justify-between border-b border-slate-50 pb-2.5" };
const _hoisted_74 = { class: "flex items-center space-x-2.5" };
const _hoisted_75 = { class: "w-8 h-8 rounded-xl bg-slate-100 border border-slate-200/60 flex items-center justify-center text-slate-500 font-bold text-xs" };
const _hoisted_76 = { class: "font-bold text-slate-800 text-xs leading-none" };
const _hoisted_77 = { class: "text-[10px] font-medium text-slate-400 mt-0.5 block" };
const _hoisted_78 = { class: "flex items-center space-x-2" };
const _hoisted_79 = {
  key: 0,
  class: "w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"
};
const _hoisted_80 = { class: "grid grid-cols-1 sm:grid-cols-3 gap-3 pt-0.5" };
const _hoisted_81 = { class: "flex items-center space-x-2 bg-slate-50/60 p-2.5 rounded-xl border border-slate-100" };
const _hoisted_82 = { class: "w-7 h-7 rounded-lg bg-emerald-100/70 text-emerald-700 flex items-center justify-center flex-shrink-0" };
const _hoisted_83 = { class: "text-xs font-bold text-slate-800 leading-none" };
const _hoisted_84 = { class: "flex items-center space-x-2 bg-slate-50/60 p-2.5 rounded-xl border border-slate-100" };
const _hoisted_85 = { class: "w-7 h-7 rounded-lg bg-rose-100/70 text-rose-700 flex items-center justify-center flex-shrink-0" };
const _hoisted_86 = { class: "text-xs font-bold text-slate-800 leading-none" };
const _hoisted_87 = { class: "flex items-center space-x-2 bg-slate-50/60 p-2.5 rounded-xl border border-slate-100" };
const _hoisted_88 = { class: "w-7 h-7 rounded-lg bg-blue-100/70 text-blue-700 flex items-center justify-center flex-shrink-0" };
const _hoisted_89 = { class: "text-xs font-bold text-slate-800 leading-none" };
const _hoisted_90 = {
  key: 0,
  class: "flex flex-col sm:flex-row items-center justify-between border-t border-slate-100 pt-4 mt-2 gap-3 text-left"
};
const _hoisted_91 = { class: "text-xs font-semibold text-slate-500" };
const _hoisted_92 = { class: "flex items-center space-x-2" };
const _hoisted_93 = ["disabled"];
const _hoisted_94 = { class: "text-xs font-bold text-slate-700 px-2" };
const _hoisted_95 = ["disabled"];
const _hoisted_96 = {
  key: 1,
  class: "flex flex-col items-center justify-center py-16 bg-white rounded-3xl border border-dashed border-slate-200 text-center"
};
const _hoisted_97 = {
  key: 2,
  class: "space-y-4"
};
const _hoisted_98 = { class: "font-bold text-slate-800 text-xs" };
const _hoisted_99 = { class: "text-[10px] text-slate-400 font-semibold mt-0.5 uppercase" };
const _hoisted_100 = {
  key: 1,
  class: "flex flex-col items-center justify-center py-20 text-center"
};
const _hoisted_101 = {
  key: 3,
  class: "space-y-4"
};
const _hoisted_102 = { class: "font-bold text-slate-800 text-xs" };
const _hoisted_103 = { class: "text-[10px] text-slate-400 font-semibold mt-0.5 uppercase" };
const _hoisted_104 = {
  key: 1,
  class: "flex flex-col items-center justify-center py-20 text-center"
};
const _hoisted_105 = {
  key: 2,
  class: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
};
const _hoisted_106 = { class: "bg-white rounded-xl shadow-xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in duration-200 border border-gray-200" };
const _hoisted_107 = { class: "p-6 border-b border-slate-100 flex items-center justify-between text-left" };
const _hoisted_108 = { class: "grid grid-cols-2 gap-4" };
const _hoisted_109 = { class: "grid grid-cols-2 gap-4" };
const _hoisted_110 = { key: 0 };
const _hoisted_111 = { class: "flex items-center space-x-2 pt-1" };
const _hoisted_112 = { class: "flex items-center space-x-2" };
const _hoisted_113 = { class: "pt-4 flex items-center space-x-3" };
const _hoisted_114 = ["disabled"];
const _hoisted_115 = { key: 0 };
const _hoisted_116 = { key: 1 };
const _hoisted_117 = {
  key: 3,
  class: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
};
const _hoisted_118 = { class: "bg-white rounded-xl shadow-xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in duration-200 border border-gray-200" };
const _hoisted_119 = { class: "p-6 border-b border-gray-100 flex items-center justify-between text-left" };
const _hoisted_120 = { class: "flex items-center space-x-3" };
const _hoisted_121 = { class: "w-10 h-10 rounded-lg bg-rose-50 flex items-center justify-center text-rose-600 border border-rose-100/50 flex-shrink-0" };
const _hoisted_122 = { class: "text-[10px] font-semibold text-slate-400 uppercase tracking-wider mt-0.5" };
const _hoisted_123 = { class: "flex items-start space-x-2.5 p-3.5 bg-rose-50/50 text-rose-700 border border-rose-100/65 rounded-xl text-[11px] font-semibold leading-relaxed" };
const _hoisted_124 = { class: "pt-2 flex items-center space-x-3" };
const _hoisted_125 = ["disabled"];
const attendancePerPage = 3;
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
    computed(() => {
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
    const attendancePage = ref(1);
    const attendanceThisMonth = computed(() => {
      if (!student.value?.attendance) return 0;
      const currentMonth = (/* @__PURE__ */ new Date()).getMonth();
      const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
      return student.value.attendance.filter((log) => {
        if (!log.date) return false;
        const d = new Date(log.date);
        return d.getMonth() === currentMonth && d.getFullYear() === currentYear;
      }).length;
    });
    const currentMonthAttendance = computed(() => {
      if (!student.value?.attendance) return [];
      const now = /* @__PURE__ */ new Date();
      const currentMonth = now.getMonth();
      const currentYear = now.getFullYear();
      return student.value.attendance.filter((log) => {
        if (!log.date) return false;
        const d = new Date(log.date);
        return d.getMonth() === currentMonth && d.getFullYear() === currentYear;
      }).sort((a, b) => {
        const dateA = new Date(a.date).getTime();
        const dateB = new Date(b.date).getTime();
        if (dateB !== dateA) return dateB - dateA;
        const timeA = a.check_in_time || "";
        const timeB = b.check_in_time || "";
        return timeB.localeCompare(timeA);
      });
    });
    const totalAttendancePages = computed(() => {
      return Math.ceil(currentMonthAttendance.value.length / attendancePerPage) || 1;
    });
    const paginatedAttendance = computed(() => {
      const start = (attendancePage.value - 1) * attendancePerPage;
      return currentMonthAttendance.value.slice(start, start + attendancePerPage);
    });
    const totalAttendanceMinutes = computed(() => {
      if (!student.value?.attendance) return 0;
      return student.value.attendance.reduce((sum, log) => sum + (log.total_minutes || 0), 0);
    });
    const formattedTotalHours = computed(() => {
      const mins = totalAttendanceMinutes.value;
      const hours = Math.floor(mins / 60);
      const remainingMins = mins % 60;
      if (hours > 0) {
        return `${hours}h ${remainingMins}m`;
      }
      return `${remainingMins}m`;
    });
    const formatLogTime = (timeStr) => {
      if (!timeStr) return "--:--";
      if (timeStr.length === 5) {
        const [h, m] = timeStr.split(":");
        const hourNum = parseInt(h, 10);
        const ampm = hourNum >= 12 ? "PM" : "AM";
        const h12 = hourNum % 12 || 12;
        return `${h12}:${m} ${ampm}`;
      }
      return timeStr;
    };
    const formatDuration = (mins) => {
      if (!mins || mins <= 0) return null;
      const h = Math.floor(mins / 60);
      const m = mins % 60;
      if (h > 0) return `${h}h ${m}m`;
      return `${m} mins`;
    };
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
            _cache[19] || (_cache[19] = createBaseVNode("div", { class: "text-left" }, [
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
              _cache[20] || (_cache[20] = createBaseVNode("span", null, "Edit Details", -1))
            ]),
            createBaseVNode("button", {
              onClick: confirmDelete,
              class: "px-4 py-2 bg-red-50 border border-red-200 rounded-xl text-red-500 hover:bg-red-100 transition-all flex items-center space-x-2 text-xs font-bold cursor-pointer shadow-sm",
              title: "Delete Student"
            }, [
              createVNode(unref(Trash2), { class: "w-4 h-4" }),
              _cache[21] || (_cache[21] = createBaseVNode("span", null, "Delete Student", -1))
            ])
          ])) : createCommentVNode("", true)
        ]),
        loading.value ? (openBlock(), createElementBlock("div", _hoisted_5, [
          createVNode(unref(RefreshCw), { class: "w-10 h-10 text-emerald-600 animate-spin mb-4" }),
          _cache[22] || (_cache[22] = createBaseVNode("p", { class: "text-slate-500 font-semibold uppercase tracking-wider text-xs animate-pulse" }, "Fetching student data...", -1))
        ])) : student.value ? (openBlock(), createElementBlock("div", _hoisted_6, [
          createBaseVNode("div", _hoisted_7, [
            createBaseVNode("div", _hoisted_8, [
              _cache[25] || (_cache[25] = createBaseVNode("div", { class: "h-32 bg-gradient-to-br from-emerald-600 to-teal-700 relative overflow-hidden" }, [
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
                    _cache[23] || (_cache[23] = createBaseVNode("span", { class: "text-[9px] font-semibold text-emerald-600 uppercase tracking-widest bg-white/80 border border-emerald-100 px-2 py-0.5 rounded-md" }, "Membership Pass", -1)),
                    createVNode(unref(CircleCheck), { class: "w-4 h-4 text-emerald-600" })
                  ]),
                  createBaseVNode("p", _hoisted_28, toDisplayString(student.value.active_subscription.subscription_plan?.name), 1),
                  createBaseVNode("p", _hoisted_29, "Expires " + toDisplayString(formatDate(student.value.active_subscription.expires_at)), 1),
                  _cache[24] || (_cache[24] = createBaseVNode("div", { class: "absolute bottom-0 right-0 w-16 h-16 bg-emerald-100/10 rounded-full translate-x-4 translate-y-4" }, null, -1))
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
                      class: "p-4 bg-white border border-slate-100 rounded-2xl hover:border-slate-200 transition-all text-left shadow-sm space-y-3"
                    }, [
                      createBaseVNode("div", _hoisted_36, [
                        createBaseVNode("div", _hoisted_37, [
                          createBaseVNode("div", _hoisted_38, [
                            createVNode(unref(Armchair), { class: "w-4 h-4" })
                          ]),
                          createBaseVNode("div", null, [
                            createBaseVNode("h4", _hoisted_39, [
                              createTextVNode(" Seat " + toDisplayString(booking.seat?.seat_number || "N/A") + " ", 1),
                              createBaseVNode("span", _hoisted_40, "(" + toDisplayString(booking.seat?.floor?.name || booking.seat?.section?.floor?.name || "1st Floor") + ")", 1)
                            ]),
                            createBaseVNode("span", _hoisted_41, toDisplayString(booking.seat?.library?.name || "Library Booking") + " • " + toDisplayString(formatDate(booking.booking_time)), 1)
                          ])
                        ]),
                        createBaseVNode("div", _hoisted_42, [
                          createBaseVNode("span", {
                            class: normalizeClass([
                              "text-[9px] font-semibold px-2.5 py-0.5 rounded-full uppercase tracking-wider border inline-flex items-center space-x-1.5",
                              booking.status === "checked_in" ? "bg-emerald-50 text-emerald-700 border-emerald-200" : booking.status === "booked" ? "bg-amber-50 text-amber-700 border-amber-200" : booking.status === "checked_out" ? "bg-slate-50 text-slate-600 border-slate-200" : "bg-rose-50 text-rose-700 border-rose-200"
                            ])
                          }, [
                            booking.status === "checked_in" ? (openBlock(), createElementBlock("span", _hoisted_43)) : createCommentVNode("", true),
                            createBaseVNode("span", null, toDisplayString(booking.status === "checked_in" ? "Active Now" : booking.status === "booked" ? "Pending Check-in" : booking.status.replace("_", " ")), 1)
                          ], 2)
                        ])
                      ]),
                      createBaseVNode("div", _hoisted_44, [
                        createBaseVNode("div", _hoisted_45, [
                          createBaseVNode("div", _hoisted_46, [
                            createVNode(unref(Calendar), { class: "w-3.5 h-3.5" })
                          ]),
                          createBaseVNode("div", null, [
                            _cache[26] || (_cache[26] = createBaseVNode("span", { class: "text-[9px] font-semibold text-slate-400 uppercase tracking-wider block leading-none mb-0.5" }, "Slot Time", -1)),
                            createBaseVNode("span", _hoisted_47, toDisplayString(formatTime(booking.booking_time)) + " - " + toDisplayString(formatTime(booking.scheduled_end_time)), 1)
                          ])
                        ]),
                        createBaseVNode("div", _hoisted_48, [
                          createBaseVNode("div", _hoisted_49, [
                            createVNode(unref(LogIn), { class: "w-3.5 h-3.5" })
                          ]),
                          createBaseVNode("div", null, [
                            _cache[27] || (_cache[27] = createBaseVNode("span", { class: "text-[9px] font-semibold text-slate-400 uppercase tracking-wider block leading-none mb-0.5" }, "Check In", -1)),
                            createBaseVNode("span", _hoisted_50, toDisplayString(booking.check_in_time ? formatTime(booking.check_in_time) : booking.status === "checked_in" ? "Checked In" : "--:--"), 1)
                          ])
                        ]),
                        createBaseVNode("div", _hoisted_51, [
                          createBaseVNode("div", _hoisted_52, [
                            createVNode(unref(LogOut), { class: "w-3.5 h-3.5" })
                          ]),
                          createBaseVNode("div", null, [
                            _cache[28] || (_cache[28] = createBaseVNode("span", { class: "text-[9px] font-semibold text-slate-400 uppercase tracking-wider block leading-none mb-0.5" }, "Check Out", -1)),
                            createBaseVNode("span", _hoisted_53, toDisplayString(booking.check_out_time ? formatTime(booking.check_out_time) : booking.status === "checked_in" ? "In Session" : "--:--"), 1)
                          ])
                        ]),
                        createBaseVNode("div", _hoisted_54, [
                          createBaseVNode("div", _hoisted_55, [
                            createVNode(unref(Clock), { class: "w-3.5 h-3.5" })
                          ]),
                          createBaseVNode("div", null, [
                            _cache[29] || (_cache[29] = createBaseVNode("span", { class: "text-[9px] font-semibold text-slate-400 uppercase tracking-wider block leading-none mb-0.5" }, "Duration", -1)),
                            createBaseVNode("span", _hoisted_56, toDisplayString(formatDuration(booking.total_minutes) || (booking.status === "checked_in" ? "Active" : "--")), 1)
                          ])
                        ])
                      ])
                    ]);
                  }), 128)) : (openBlock(), createElementBlock("div", _hoisted_57, [
                    createVNode(unref(Search), { class: "w-10 h-10 text-slate-200 mb-3" }),
                    _cache[30] || (_cache[30] = createBaseVNode("p", { class: "text-xs font-bold text-slate-400 uppercase tracking-widest" }, "No seat bookings found", -1))
                  ]))
                ])) : createCommentVNode("", true),
                activeTab.value === "attendance" ? (openBlock(), createElementBlock("div", _hoisted_58, [
                  createBaseVNode("div", _hoisted_59, [
                    createBaseVNode("div", _hoisted_60, [
                      createBaseVNode("div", _hoisted_61, [
                        createVNode(unref(Clock), { class: "w-5 h-5" })
                      ]),
                      createBaseVNode("div", null, [
                        _cache[31] || (_cache[31] = createBaseVNode("span", { class: "text-[10px] font-semibold text-slate-400 uppercase tracking-wider block" }, "Total Visits", -1)),
                        createBaseVNode("span", _hoisted_62, toDisplayString(student.value.attendance?.length || 0) + " Sessions", 1)
                      ])
                    ]),
                    createBaseVNode("div", _hoisted_63, [
                      createBaseVNode("div", _hoisted_64, [
                        createVNode(unref(Calendar), { class: "w-5 h-5" })
                      ]),
                      createBaseVNode("div", null, [
                        _cache[32] || (_cache[32] = createBaseVNode("span", { class: "text-[10px] font-semibold text-slate-400 uppercase tracking-wider block" }, "This Month", -1)),
                        createBaseVNode("span", _hoisted_65, toDisplayString(attendanceThisMonth.value) + " Visits", 1)
                      ])
                    ]),
                    createBaseVNode("div", _hoisted_66, [
                      createBaseVNode("div", _hoisted_67, [
                        createVNode(unref(Zap), { class: "w-5 h-5" })
                      ]),
                      createBaseVNode("div", null, [
                        _cache[33] || (_cache[33] = createBaseVNode("span", { class: "text-[10px] font-semibold text-slate-400 uppercase tracking-wider block" }, "Total Hours", -1)),
                        createBaseVNode("span", _hoisted_68, toDisplayString(formattedTotalHours.value), 1)
                      ])
                    ]),
                    createBaseVNode("div", _hoisted_69, [
                      createBaseVNode("div", _hoisted_70, [
                        createVNode(unref(Calendar), { class: "w-5 h-5" })
                      ]),
                      createBaseVNode("div", null, [
                        _cache[34] || (_cache[34] = createBaseVNode("span", { class: "text-[10px] font-semibold text-slate-400 uppercase tracking-wider block" }, "Active Days", -1)),
                        createBaseVNode("span", _hoisted_71, toDisplayString(uniqueAttendanceDays.value) + " Days", 1)
                      ])
                    ])
                  ]),
                  currentMonthAttendance.value.length > 0 ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                    createBaseVNode("div", _hoisted_72, [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(paginatedAttendance.value, (log) => {
                        return openBlock(), createElementBlock("div", {
                          key: log.id,
                          class: "p-4 bg-white border border-slate-100 rounded-2xl hover:border-slate-200 transition-all text-left shadow-sm space-y-3"
                        }, [
                          createBaseVNode("div", _hoisted_73, [
                            createBaseVNode("div", _hoisted_74, [
                              createBaseVNode("div", _hoisted_75, [
                                createVNode(unref(Calendar), { class: "w-4 h-4" })
                              ]),
                              createBaseVNode("div", null, [
                                createBaseVNode("h4", _hoisted_76, toDisplayString(formatDate(log.date)), 1),
                                createBaseVNode("span", _hoisted_77, toDisplayString(log.library?.name || "Library Entry"), 1)
                              ])
                            ]),
                            createBaseVNode("div", _hoisted_78, [
                              createBaseVNode("span", {
                                class: normalizeClass([
                                  "text-[9px] font-semibold px-2 py-0.5 rounded-lg border uppercase tracking-wider",
                                  log.marked_manually ? "bg-purple-50 text-purple-700 border-purple-200" : "bg-blue-50 text-blue-700 border-blue-200"
                                ])
                              }, toDisplayString(log.marked_manually ? "Manual Check" : "QR Code"), 3),
                              createBaseVNode("span", {
                                class: normalizeClass([
                                  "text-[9px] font-semibold px-2.5 py-0.5 rounded-full uppercase tracking-wider border inline-flex items-center space-x-1.5",
                                  !log.check_out_time ? "bg-emerald-50 text-emerald-700 border-emerald-200" : "bg-slate-50 text-slate-600 border-slate-200"
                                ])
                              }, [
                                !log.check_out_time ? (openBlock(), createElementBlock("span", _hoisted_79)) : createCommentVNode("", true),
                                createBaseVNode("span", null, toDisplayString(!log.check_out_time ? "Active Now" : "Completed"), 1)
                              ], 2)
                            ])
                          ]),
                          createBaseVNode("div", _hoisted_80, [
                            createBaseVNode("div", _hoisted_81, [
                              createBaseVNode("div", _hoisted_82, [
                                createVNode(unref(LogIn), { class: "w-3.5 h-3.5" })
                              ]),
                              createBaseVNode("div", null, [
                                _cache[35] || (_cache[35] = createBaseVNode("span", { class: "text-[9px] font-semibold text-slate-400 uppercase tracking-wider block leading-none mb-0.5" }, "Check In", -1)),
                                createBaseVNode("span", _hoisted_83, toDisplayString(formatLogTime(log.check_in_time)), 1)
                              ])
                            ]),
                            createBaseVNode("div", _hoisted_84, [
                              createBaseVNode("div", _hoisted_85, [
                                createVNode(unref(LogOut), { class: "w-3.5 h-3.5" })
                              ]),
                              createBaseVNode("div", null, [
                                _cache[36] || (_cache[36] = createBaseVNode("span", { class: "text-[9px] font-semibold text-slate-400 uppercase tracking-wider block leading-none mb-0.5" }, "Check Out", -1)),
                                createBaseVNode("span", _hoisted_86, toDisplayString(log.check_out_time ? formatLogTime(log.check_out_time) : "In Progress"), 1)
                              ])
                            ]),
                            createBaseVNode("div", _hoisted_87, [
                              createBaseVNode("div", _hoisted_88, [
                                createVNode(unref(Clock), { class: "w-3.5 h-3.5" })
                              ]),
                              createBaseVNode("div", null, [
                                _cache[37] || (_cache[37] = createBaseVNode("span", { class: "text-[9px] font-semibold text-slate-400 uppercase tracking-wider block leading-none mb-0.5" }, "Session Duration", -1)),
                                createBaseVNode("span", _hoisted_89, toDisplayString(formatDuration(log.total_minutes) || (log.check_out_time ? "N/A" : "Active")), 1)
                              ])
                            ])
                          ])
                        ]);
                      }), 128))
                    ]),
                    currentMonthAttendance.value.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_90, [
                      createBaseVNode("span", _hoisted_91, " Showing " + toDisplayString((attendancePage.value - 1) * attendancePerPage + 1) + " to " + toDisplayString(Math.min(attendancePage.value * attendancePerPage, currentMonthAttendance.value.length)) + " of " + toDisplayString(currentMonthAttendance.value.length) + " entries (This Month) ", 1),
                      createBaseVNode("div", _hoisted_92, [
                        createBaseVNode("button", {
                          onClick: _cache[2] || (_cache[2] = ($event) => attendancePage.value--),
                          disabled: attendancePage.value === 1,
                          class: "px-3.5 py-1.5 bg-white border border-slate-200 text-slate-600 rounded-xl text-xs font-bold hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition-all cursor-pointer shadow-sm"
                        }, " Previous ", 8, _hoisted_93),
                        createBaseVNode("span", _hoisted_94, " Page " + toDisplayString(attendancePage.value) + " of " + toDisplayString(totalAttendancePages.value), 1),
                        createBaseVNode("button", {
                          onClick: _cache[3] || (_cache[3] = ($event) => attendancePage.value++),
                          disabled: attendancePage.value >= totalAttendancePages.value,
                          class: "px-3.5 py-1.5 bg-white border border-slate-200 text-slate-600 rounded-xl text-xs font-bold hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition-all cursor-pointer shadow-sm"
                        }, " Next ", 8, _hoisted_95)
                      ])
                    ])) : createCommentVNode("", true)
                  ], 64)) : (openBlock(), createElementBlock("div", _hoisted_96, [
                    createVNode(unref(Clock), { class: "w-10 h-10 text-slate-300 mb-3" }),
                    _cache[38] || (_cache[38] = createBaseVNode("p", { class: "text-xs font-bold text-slate-400 uppercase tracking-wider" }, "No attendance logs recorded for this month", -1))
                  ]))
                ])) : createCommentVNode("", true),
                activeTab.value === "events" ? (openBlock(), createElementBlock("div", _hoisted_97, [
                  student.value.events && student.value.events.length > 0 ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(student.value.events, (event) => {
                    return openBlock(), createElementBlock("div", {
                      key: event.id,
                      class: "p-4 bg-white border border-gray-100 rounded-xl hover:border-slate-200 transition-all flex items-center justify-between text-left shadow-sm border-l-4 border-l-green-500"
                    }, [
                      createBaseVNode("div", null, [
                        createBaseVNode("h4", _hoisted_98, toDisplayString(event.title), 1),
                        createBaseVNode("p", _hoisted_99, toDisplayString(formatDate(event.start_time)) + " • " + toDisplayString(event.location || "Library Hall"), 1)
                      ]),
                      _cache[39] || (_cache[39] = createBaseVNode("span", { class: "text-[9px] font-bold px-2.5 py-1 rounded-full border border-green-200 text-green-700 bg-white uppercase tracking-wider" }, " Joined ", -1))
                    ]);
                  }), 128)) : (openBlock(), createElementBlock("div", _hoisted_100, [
                    createVNode(unref(Search), { class: "w-10 h-10 text-slate-200 mb-4" }),
                    _cache[40] || (_cache[40] = createBaseVNode("p", { class: "text-xs font-bold text-slate-455 uppercase tracking-widest" }, "No events registered", -1))
                  ]))
                ])) : createCommentVNode("", true),
                activeTab.value === "books" ? (openBlock(), createElementBlock("div", _hoisted_101, [
                  student.value.reservations && student.value.reservations.length > 0 ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(student.value.reservations, (res) => {
                    return openBlock(), createElementBlock("div", {
                      key: res.id,
                      class: normalizeClass(["p-4 bg-white border border-gray-100 rounded-xl hover:border-slate-200 transition-all flex items-center justify-between text-left shadow-sm", [
                        res.status === "approved" ? "border-l-4 border-l-green-500" : res.status === "pending" ? "border-l-4 border-l-orange-500" : "border-l-4 border-l-slate-300"
                      ]])
                    }, [
                      createBaseVNode("div", null, [
                        createBaseVNode("h4", _hoisted_102, toDisplayString(res.book?.title), 1),
                        createBaseVNode("p", _hoisted_103, " Author: " + toDisplayString(res.book?.author) + " • Reserved: " + toDisplayString(formatDate(res.reserved_at)), 1)
                      ]),
                      createBaseVNode("span", {
                        class: normalizeClass([
                          "text-[9px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider border bg-white",
                          res.status === "approved" ? "border-green-200 text-green-700" : res.status === "pending" ? "border-orange-100 text-orange-700" : "border-slate-200 text-slate-550"
                        ])
                      }, toDisplayString(res.status), 3)
                    ], 2);
                  }), 128)) : (openBlock(), createElementBlock("div", _hoisted_104, [
                    createVNode(unref(Search), { class: "w-10 h-10 text-slate-200 mb-4" }),
                    _cache[41] || (_cache[41] = createBaseVNode("p", { class: "text-xs font-bold text-slate-400 uppercase tracking-widest" }, "No book reservations found", -1))
                  ]))
                ])) : createCommentVNode("", true)
              ])
            ])
          ])
        ])) : createCommentVNode("", true),
        showModal.value ? (openBlock(), createElementBlock("div", _hoisted_105, [
          createBaseVNode("div", _hoisted_106, [
            createBaseVNode("div", _hoisted_107, [
              _cache[42] || (_cache[42] = createBaseVNode("h2", { class: "text-lg font-bold text-slate-800" }, "Edit Student", -1)),
              createBaseVNode("button", {
                onClick: _cache[4] || (_cache[4] = ($event) => showModal.value = false),
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
                _cache[43] || (_cache[43] = createBaseVNode("label", { class: "block text-xs font-bold text-slate-500 mb-1.5 uppercase tracking-wider" }, "Full Name", -1)),
                withDirectives(createBaseVNode("input", {
                  "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => form.value.name = $event),
                  type: "text",
                  required: "",
                  class: "w-full px-4 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none text-xs font-semibold text-slate-655 bg-white",
                  placeholder: "e.g. Ahmed Khan"
                }, null, 512), [
                  [vModelText, form.value.name]
                ])
              ]),
              createBaseVNode("div", _hoisted_108, [
                createBaseVNode("div", null, [
                  _cache[44] || (_cache[44] = createBaseVNode("label", { class: "block text-xs font-bold text-slate-500 mb-1.5 uppercase tracking-wider" }, "Student ID (CRN)", -1)),
                  withDirectives(createBaseVNode("input", {
                    "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => form.value.crn = $event),
                    type: "text",
                    required: "",
                    class: "w-full px-4 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none text-xs font-semibold text-slate-655 bg-white",
                    placeholder: "e.g. 123456"
                  }, null, 512), [
                    [vModelText, form.value.crn]
                  ])
                ]),
                createBaseVNode("div", null, [
                  _cache[46] || (_cache[46] = createBaseVNode("label", { class: "block text-xs font-bold text-slate-500 mb-1.5 uppercase tracking-wider" }, "CA Level", -1)),
                  withDirectives(createBaseVNode("select", {
                    "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => form.value.ca_level = $event),
                    class: "w-full px-4 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none text-xs font-bold text-slate-655 bg-white cursor-pointer"
                  }, [..._cache[45] || (_cache[45] = [
                    createStaticVNode('<option value="" data-v-7f83d204>Select Level</option><option value="PRC" data-v-7f83d204>PRC</option><option value="CAF" data-v-7f83d204>CAF</option><option value="CFAP" data-v-7f83d204>CFAP</option><option value="MSA" data-v-7f83d204>MSA</option>', 5)
                  ])], 512), [
                    [vModelSelect, form.value.ca_level]
                  ])
                ])
              ]),
              createBaseVNode("div", _hoisted_109, [
                createBaseVNode("div", null, [
                  _cache[47] || (_cache[47] = createBaseVNode("label", { class: "block text-xs font-bold text-slate-500 mb-1.5 uppercase tracking-wider" }, "Email Address", -1)),
                  withDirectives(createBaseVNode("input", {
                    "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => form.value.email = $event),
                    type: "email",
                    required: "",
                    class: "w-full px-4 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none text-xs font-semibold text-slate-655 bg-white",
                    placeholder: "email@example.com"
                  }, null, 512), [
                    [vModelText, form.value.email]
                  ])
                ]),
                createBaseVNode("div", null, [
                  _cache[48] || (_cache[48] = createBaseVNode("label", { class: "block text-xs font-bold text-slate-500 mb-1.5 uppercase tracking-wider" }, "Phone Number", -1)),
                  withDirectives(createBaseVNode("input", {
                    "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => form.value.phone = $event),
                    type: "tel",
                    class: "w-full px-4 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none text-xs font-semibold text-slate-655 bg-white",
                    placeholder: "+92 3XX XXXXXXX"
                  }, null, 512), [
                    [vModelText, form.value.phone]
                  ])
                ])
              ]),
              createBaseVNode("div", null, [
                _cache[50] || (_cache[50] = createBaseVNode("label", { class: "block text-xs font-bold text-slate-500 mb-1.5 uppercase tracking-wider" }, "Gender", -1)),
                withDirectives(createBaseVNode("select", {
                  "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => form.value.gender = $event),
                  class: "w-full px-4 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none text-xs font-bold text-slate-655 bg-white cursor-pointer"
                }, [..._cache[49] || (_cache[49] = [
                  createBaseVNode("option", { value: "" }, "Select Gender", -1),
                  createBaseVNode("option", { value: "male" }, "Male", -1),
                  createBaseVNode("option", { value: "female" }, "Female", -1)
                ])], 512), [
                  [vModelSelect, form.value.gender]
                ])
              ]),
              changePassword.value ? (openBlock(), createElementBlock("div", _hoisted_110, [
                _cache[51] || (_cache[51] = createBaseVNode("label", { class: "block text-xs font-bold text-slate-500 mb-1.5 uppercase tracking-wider" }, "Password", -1)),
                withDirectives(createBaseVNode("input", {
                  "onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => form.value.password = $event),
                  type: "password",
                  class: "w-full px-4 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none text-xs font-semibold text-slate-655 bg-white",
                  placeholder: "••••••••"
                }, null, 512), [
                  [vModelText, form.value.password]
                ])
              ])) : createCommentVNode("", true),
              createBaseVNode("div", _hoisted_111, [
                withDirectives(createBaseVNode("input", {
                  type: "checkbox",
                  "onUpdate:modelValue": _cache[12] || (_cache[12] = ($event) => changePassword.value = $event),
                  id: "changePwd",
                  class: "rounded text-emerald-650 focus:ring-emerald-500 cursor-pointer"
                }, null, 512), [
                  [vModelCheckbox, changePassword.value]
                ]),
                _cache[52] || (_cache[52] = createBaseVNode("label", {
                  for: "changePwd",
                  class: "text-xs font-bold text-slate-550 cursor-pointer"
                }, "Change Password", -1))
              ]),
              createBaseVNode("div", _hoisted_112, [
                withDirectives(createBaseVNode("input", {
                  type: "checkbox",
                  "onUpdate:modelValue": _cache[13] || (_cache[13] = ($event) => form.value.is_active = $event),
                  id: "isActive",
                  class: "rounded text-emerald-600 focus:ring-emerald-500 cursor-pointer"
                }, null, 512), [
                  [vModelCheckbox, form.value.is_active]
                ]),
                _cache[53] || (_cache[53] = createBaseVNode("label", {
                  for: "isActive",
                  class: "text-xs font-bold text-slate-550 cursor-pointer"
                }, "Account Active", -1))
              ]),
              createBaseVNode("div", _hoisted_113, [
                createBaseVNode("button", {
                  type: "button",
                  onClick: _cache[14] || (_cache[14] = ($event) => showModal.value = false),
                  class: "flex-1 px-4 py-2.5 border border-slate-200 text-slate-500 font-bold rounded-xl hover:bg-slate-50 transition-colors text-xs cursor-pointer"
                }, " Cancel "),
                createBaseVNode("button", {
                  type: "submit",
                  disabled: saving.value,
                  class: "flex-1 px-4 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl transition-all disabled:opacity-50 text-xs font-bold cursor-pointer"
                }, [
                  saving.value ? (openBlock(), createElementBlock("span", _hoisted_115, "Saving...")) : (openBlock(), createElementBlock("span", _hoisted_116, "Update Details"))
                ], 8, _hoisted_114)
              ])
            ], 32)
          ])
        ])) : createCommentVNode("", true),
        showBanModal.value ? (openBlock(), createElementBlock("div", _hoisted_117, [
          createBaseVNode("div", _hoisted_118, [
            createBaseVNode("div", _hoisted_119, [
              createBaseVNode("div", _hoisted_120, [
                createBaseVNode("div", _hoisted_121, [
                  createVNode(unref(TriangleAlert), { class: "w-5 h-5" })
                ]),
                createBaseVNode("div", null, [
                  _cache[54] || (_cache[54] = createBaseVNode("h2", { class: "text-base font-bold text-slate-800 leading-snug" }, "Restrict Student", -1)),
                  createBaseVNode("p", _hoisted_122, "Restrict access for " + toDisplayString(student.value.name), 1)
                ])
              ]),
              createBaseVNode("button", {
                onClick: _cache[15] || (_cache[15] = ($event) => showBanModal.value = false),
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
                _cache[55] || (_cache[55] = createBaseVNode("label", { class: "block text-xs font-semibold text-slate-550 mb-1.5 uppercase tracking-wider" }, "Duration (Days)", -1)),
                withDirectives(createBaseVNode("input", {
                  "onUpdate:modelValue": _cache[16] || (_cache[16] = ($event) => banForm.value.days = $event),
                  type: "number",
                  min: "1",
                  class: "w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-rose-550/20 focus:border-rose-500 outline-none text-xs font-semibold text-slate-655 bg-white",
                  placeholder: "Leave empty for lifetime ban"
                }, null, 512), [
                  [vModelText, banForm.value.days]
                ])
              ]),
              createBaseVNode("div", null, [
                _cache[56] || (_cache[56] = createBaseVNode("label", { class: "block text-xs font-semibold text-slate-550 mb-1.5 uppercase tracking-wider" }, "Reason", -1)),
                withDirectives(createBaseVNode("textarea", {
                  "onUpdate:modelValue": _cache[17] || (_cache[17] = ($event) => banForm.value.reason = $event),
                  rows: "3",
                  class: "w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-rose-550/20 focus:border-rose-500 outline-none text-xs font-semibold text-slate-655 bg-white resize-none",
                  placeholder: "Enter reason for restriction"
                }, null, 512), [
                  [vModelText, banForm.value.reason]
                ])
              ]),
              createBaseVNode("div", _hoisted_123, [
                createVNode(unref(CircleAlert), { class: "w-4 h-4 mt-0.5 text-rose-600 flex-shrink-0" }),
                _cache[57] || (_cache[57] = createBaseVNode("p", null, "Restricting this student will block their seat bookings, check-in access, and library requests for the specified duration.", -1))
              ]),
              createBaseVNode("div", _hoisted_124, [
                createBaseVNode("button", {
                  type: "button",
                  onClick: _cache[18] || (_cache[18] = ($event) => showBanModal.value = false),
                  class: "flex-1 px-4 py-2.5 border border-gray-200 text-slate-505 font-bold rounded-lg hover:bg-slate-50 transition-colors text-xs cursor-pointer"
                }, " Cancel "),
                createBaseVNode("button", {
                  type: "submit",
                  disabled: banning.value,
                  class: "flex-1 px-4 py-2.5 bg-rose-600 hover:bg-rose-700 text-white rounded-lg shadow-sm transition-all disabled:opacity-50 text-xs font-bold cursor-pointer"
                }, toDisplayString(banning.value ? "Restricting..." : "Confirm Restriction"), 9, _hoisted_125)
              ])
            ], 32)
          ])
        ])) : createCommentVNode("", true)
      ]);
    };
  }
});
const StudentDetailsPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-7f83d204"]]);
export {
  StudentDetailsPage as default
};
