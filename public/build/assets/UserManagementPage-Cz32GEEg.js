import { d as defineComponent, r as ref, c as computed, o as onMounted, a as createElementBlock, b as createBaseVNode, l as createCommentVNode, f as createVNode, n as normalizeClass, u as unref, t as toDisplayString, p as withDirectives, v as vModelText, D as vModelSelect, F as Fragment, j as renderList, e as createStaticVNode, z as withModifiers, h as createBlock, X as adminAPI, i as createTextVNode, k as openBlock } from "./main-DKJzpCzk.js";
import { n as normalizeDates } from "./en-US-CtEcOBul.js";
import { R as RefreshCw } from "./refresh-cw-vjkPNSrg.js";
import { P as Plus } from "./plus-CR_-MeGX.js";
import { U as Users } from "./users-3SVXGYtw.js";
import { T as TrendingUp } from "./trending-up-C06j2gIh.js";
import { C as CreditCard } from "./credit-card-8IDBwSuN.js";
import { C as Clock } from "./clock-xlNueMyC.js";
import { C as Calendar } from "./calendar-FTR2aUnV.js";
import { S as Search } from "./search-CJLoyzlx.js";
import { X } from "./x-BLKH3q-c.js";
import { U as UserCheck } from "./user-check-B9sfqqid.js";
import { P as Pen } from "./pen-D1juIi3p.js";
import { B as Ban } from "./ban-BSnG4d76.js";
import { T as Trash2 } from "./trash-2-Ca1vuTx4.js";
import { p as parseISO } from "./parseISO-CXjizkW6.js";
import { f as format } from "./format-CerZa7QB.js";
/* empty css               */
import "./createLucideIcon-TQ5d7bQA.js";
function isSameMonth(laterDate, earlierDate, options) {
  const [laterDate_, earlierDate_] = normalizeDates(
    options?.in,
    laterDate,
    earlierDate
  );
  return laterDate_.getFullYear() === earlierDate_.getFullYear() && laterDate_.getMonth() === earlierDate_.getMonth();
}
const _hoisted_1 = { class: "p-6 space-y-6 bg-gray-50 min-h-screen" };
const _hoisted_2 = { class: "flex flex-col md:flex-row md:items-center justify-between gap-4" };
const _hoisted_3 = { class: "flex items-center space-x-3" };
const _hoisted_4 = ["disabled"];
const _hoisted_5 = { class: "text-sm font-semibold text-gray-700" };
const _hoisted_6 = { class: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4" };
const _hoisted_7 = { class: "bg-white p-5 rounded-2xl shadow-sm border border-gray-100 transition-all hover:shadow-md" };
const _hoisted_8 = { class: "flex items-center justify-between" };
const _hoisted_9 = { class: "text-2xl font-bold text-gray-900 mt-1" };
const _hoisted_10 = { class: "p-3 bg-blue-50 rounded-xl" };
const _hoisted_11 = { class: "mt-4 flex items-center text-xs text-green-600 font-medium" };
const _hoisted_12 = { class: "bg-white p-5 rounded-2xl shadow-sm border border-gray-100 transition-all hover:shadow-md" };
const _hoisted_13 = { class: "flex items-center justify-between" };
const _hoisted_14 = { class: "text-2xl font-bold text-gray-900 mt-1" };
const _hoisted_15 = { class: "p-3 bg-green-50 rounded-xl" };
const _hoisted_16 = { class: "mt-4 flex items-center text-xs text-gray-500" };
const _hoisted_17 = { class: "bg-white p-5 rounded-2xl shadow-sm border border-gray-100 transition-all hover:shadow-md" };
const _hoisted_18 = { class: "flex items-center justify-between" };
const _hoisted_19 = { class: "text-2xl font-bold text-gray-900 mt-1" };
const _hoisted_20 = { class: "p-3 bg-amber-50 rounded-xl" };
const _hoisted_21 = { class: "bg-white p-5 rounded-2xl shadow-sm border border-gray-100 transition-all hover:shadow-md" };
const _hoisted_22 = { class: "flex items-center justify-between" };
const _hoisted_23 = { class: "text-2xl font-bold text-gray-900 mt-1" };
const _hoisted_24 = { class: "p-3 bg-purple-50 rounded-xl" };
const _hoisted_25 = { class: "bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex flex-col md:flex-row md:items-center gap-4" };
const _hoisted_26 = { class: "relative flex-1" };
const _hoisted_27 = { class: "flex items-center gap-3" };
const _hoisted_28 = ["value"];
const _hoisted_29 = { class: "bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden" };
const _hoisted_30 = {
  key: 0,
  class: "flex flex-col items-center justify-center py-24"
};
const _hoisted_31 = {
  key: 1,
  class: "flex flex-col items-center justify-center py-24"
};
const _hoisted_32 = { class: "p-4 bg-gray-50 rounded-full mb-4" };
const _hoisted_33 = {
  key: 2,
  class: "overflow-x-auto"
};
const _hoisted_34 = { class: "min-w-full divide-y divide-gray-100" };
const _hoisted_35 = { class: "bg-white divide-y divide-gray-50" };
const _hoisted_36 = { class: "px-6 py-4 whitespace-nowrap" };
const _hoisted_37 = { class: "flex items-center" };
const _hoisted_38 = { class: "relative" };
const _hoisted_39 = { class: "w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold shadow-sm" };
const _hoisted_40 = {
  key: 0,
  class: "absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 border-2 border-white rounded-full"
};
const _hoisted_41 = { class: "ml-4" };
const _hoisted_42 = { class: "text-sm font-bold text-gray-900" };
const _hoisted_43 = { class: "text-xs text-gray-500" };
const _hoisted_44 = { class: "px-6 py-4 whitespace-nowrap" };
const _hoisted_45 = { class: "text-sm font-medium text-gray-900" };
const _hoisted_46 = { class: "text-xs text-gray-500" };
const _hoisted_47 = { class: "px-6 py-4 whitespace-nowrap" };
const _hoisted_48 = {
  key: 0,
  class: "flex flex-col"
};
const _hoisted_49 = { class: "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-indigo-50 text-indigo-700" };
const _hoisted_50 = { class: "text-[10px] text-gray-500 mt-1" };
const _hoisted_51 = {
  key: 1,
  class: "text-xs text-gray-400"
};
const _hoisted_52 = { class: "px-6 py-4 whitespace-nowrap" };
const _hoisted_53 = ["onClick", "disabled"];
const _hoisted_54 = { class: "px-6 py-4 whitespace-nowrap text-right text-sm font-medium" };
const _hoisted_55 = { class: "flex items-center justify-end space-x-2 transition-opacity" };
const _hoisted_56 = ["onClick"];
const _hoisted_57 = ["onClick"];
const _hoisted_58 = ["onClick"];
const _hoisted_59 = ["onClick"];
const _hoisted_60 = {
  key: 0,
  class: "fixed inset-0 bg-gray-900/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
};
const _hoisted_61 = { class: "bg-white rounded-3xl shadow-2xl max-w-lg w-full overflow-hidden animate-in fade-in zoom-in duration-200" };
const _hoisted_62 = { class: "px-8 py-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-white flex items-center justify-between" };
const _hoisted_63 = { class: "text-xl font-bold" };
const _hoisted_64 = { class: "text-indigo-100 text-xs mt-1" };
const _hoisted_65 = { class: "grid grid-cols-1 md:grid-cols-2 gap-5" };
const _hoisted_66 = { class: "space-y-1.5" };
const _hoisted_67 = { class: "space-y-1.5" };
const _hoisted_68 = { class: "grid grid-cols-1 md:grid-cols-2 gap-5" };
const _hoisted_69 = { class: "space-y-1.5" };
const _hoisted_70 = { class: "space-y-1.5" };
const _hoisted_71 = {
  key: 0,
  class: "space-y-1.5"
};
const _hoisted_72 = { class: "grid grid-cols-1 md:grid-cols-2 gap-5" };
const _hoisted_73 = { class: "space-y-1.5" };
const _hoisted_74 = { class: "space-y-1.5" };
const _hoisted_75 = { class: "flex items-center space-x-4 pt-6" };
const _hoisted_76 = ["disabled"];
const _hoisted_77 = {
  key: 1,
  class: "fixed inset-0 bg-gray-900/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
};
const _hoisted_78 = { class: "bg-white rounded-3xl shadow-2xl max-w-md w-full overflow-hidden animate-in fade-in zoom-in duration-200" };
const _hoisted_79 = { class: "px-8 py-6 bg-gradient-to-r from-orange-500 to-red-600 text-white flex items-center justify-between" };
const _hoisted_80 = { class: "text-orange-100 text-xs mt-1" };
const _hoisted_81 = { class: "space-y-1.5" };
const _hoisted_82 = { class: "space-y-1.5" };
const _hoisted_83 = { class: "flex items-center space-x-4 pt-4" };
const _hoisted_84 = ["disabled"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "UserManagementPage",
  setup(__props) {
    const users = ref([]);
    const libraries = ref([]);
    const loading = ref(false);
    const saving = ref(false);
    const showModal = ref(false);
    const isEditing = ref(false);
    const statusUpdating = ref(null);
    const showBanModal = ref(false);
    const banning = ref(false);
    const banForm = ref({
      userId: null,
      userName: "",
      days: null,
      reason: ""
    });
    const searchQuery = ref("");
    const filterLibrary = ref("");
    const filterStatus = ref("");
    const form = ref({
      id: null,
      name: "",
      email: "",
      crn: "",
      ca_level: "",
      gender: "",
      password: "",
      status: "approved",
      library_id: null,
      role: "student"
    });
    const activeSubscriptionsCount = computed(() => {
      return users.value.filter((u) => u.active_subscription).length;
    });
    const pendingCount = computed(() => {
      return users.value.filter((u) => u.status === "pending").length;
    });
    const totalBookings = computed(() => {
      return users.value.reduce((acc, u) => acc + (u.bookings_count || 0), 0);
    });
    const newThisMonth = computed(() => {
      const now = /* @__PURE__ */ new Date();
      return users.value.filter((u) => {
        try {
          return isSameMonth(parseISO(u.created_at), now);
        } catch {
          return false;
        }
      }).length;
    });
    const filteredUsers = computed(() => {
      return users.value.filter((user) => {
        const matchesSearch = !searchQuery.value || user.name.toLowerCase().includes(searchQuery.value.toLowerCase()) || user.email.toLowerCase().includes(searchQuery.value.toLowerCase()) || user.crn && user.crn.toLowerCase().includes(searchQuery.value.toLowerCase());
        const matchesLibrary = !filterLibrary.value || user.library_id === Number(filterLibrary.value);
        const matchesStatus = !filterStatus.value || user.status === filterStatus.value;
        return matchesSearch && matchesLibrary && matchesStatus;
      });
    });
    const fetchUsers = async () => {
      loading.value = true;
      try {
        const data = await adminAPI.getUsers();
        users.value = data;
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        loading.value = false;
      }
    };
    const fetchLibraries = async () => {
      try {
        const data = await adminAPI.getLibraries();
        libraries.value = data;
      } catch (error) {
        console.error("Error fetching libraries:", error);
      }
    };
    const openCreateModal = () => {
      isEditing.value = false;
      form.value = {
        id: null,
        name: "",
        email: "",
        crn: "",
        ca_level: "",
        gender: "",
        password: "",
        status: "approved",
        library_id: null,
        role: "student"
      };
      showModal.value = true;
    };
    const editUser = (user) => {
      isEditing.value = true;
      form.value = {
        id: user.id,
        name: user.name,
        email: user.email,
        crn: user.crn || "",
        ca_level: user.ca_level || "",
        gender: user.gender || "",
        password: "",
        status: user.status,
        library_id: user.library_id,
        role: "student"
      };
      showModal.value = true;
    };
    const openBanModal = (user) => {
      banForm.value = {
        userId: user.id,
        userName: user.name,
        days: null,
        reason: ""
      };
      showBanModal.value = true;
    };
    const submitBan = async () => {
      if (!banForm.value.userId) return;
      banning.value = true;
      try {
        await adminAPI.banUser(banForm.value.userId, {
          days: banForm.value.days || void 0,
          reason: banForm.value.reason
        });
        showBanModal.value = false;
        alert(`User ${banForm.value.userName} banned successfully.`);
      } catch (error) {
        console.error("Error banning user:", error);
        alert("Failed to ban user.");
      } finally {
        banning.value = false;
      }
    };
    const saveUser = async () => {
      saving.value = true;
      try {
        if (isEditing.value && form.value.id) {
          await adminAPI.updateUser(form.value.id, form.value);
        } else {
          await adminAPI.createUser(form.value);
        }
        await fetchUsers();
        showModal.value = false;
      } catch (error) {
        console.error("Error saving student:", error);
      } finally {
        saving.value = false;
      }
    };
    const approveUser = async (user) => {
      try {
        await adminAPI.approveUser(user.id);
        await fetchUsers();
      } catch (error) {
        console.error("Error approving user:", error);
      }
    };
    const cycleUserStatus = async (user) => {
      if (statusUpdating.value) return;
      const statuses = ["approved", "suspended", "banned", "pending"];
      const currentIndex = statuses.indexOf(user.status);
      const nextStatus = statuses[(currentIndex + 1) % statuses.length];
      statusUpdating.value = user.id;
      try {
        await adminAPI.updateUser(user.id, { status: nextStatus });
        user.status = nextStatus;
      } catch (error) {
        console.error("Error cycling status:", error);
      } finally {
        statusUpdating.value = null;
      }
    };
    const confirmDelete = async (user) => {
      if (confirm(`Are you sure you want to delete student "${user.name}"? This action cannot be undone.`)) {
        try {
          await adminAPI.deleteUser(user.id);
          await fetchUsers();
        } catch (error) {
          console.error("Error deleting user:", error);
        }
      }
    };
    const resetFilters = () => {
      searchQuery.value = "";
      filterLibrary.value = "";
      filterStatus.value = "";
    };
    const formatDate = (date) => {
      if (!date) return "N/A";
      try {
        return format(parseISO(date), "MMM dd, yyyy");
      } catch {
        return "Invalid Date";
      }
    };
    onMounted(() => {
      fetchUsers();
      fetchLibraries();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          _cache[17] || (_cache[17] = createBaseVNode("div", null, [
            createBaseVNode("h1", { class: "text-3xl font-bold text-gray-900 tracking-tight" }, "Student Management"),
            createBaseVNode("p", { class: "text-gray-500 mt-1" }, "Manage all registered students, their subscriptions and library assignments")
          ], -1)),
          createBaseVNode("div", _hoisted_3, [
            createBaseVNode("button", {
              onClick: fetchUsers,
              disabled: loading.value,
              class: "px-4 py-2 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition-all flex items-center space-x-2 shadow-sm disabled:opacity-50"
            }, [
              createVNode(unref(RefreshCw), {
                class: normalizeClass(["w-4 h-4 text-gray-500", loading.value ? "animate-spin" : ""])
              }, null, 8, ["class"]),
              createBaseVNode("span", _hoisted_5, toDisplayString(loading.value ? "Refreshing..." : "Refresh"), 1)
            ], 8, _hoisted_4),
            createBaseVNode("button", {
              onClick: openCreateModal,
              class: "px-4 py-2 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-all flex items-center space-x-2 shadow-md hover:shadow-lg"
            }, [
              createVNode(unref(Plus), { class: "w-4 h-4" }),
              _cache[16] || (_cache[16] = createBaseVNode("span", { class: "text-sm font-semibold" }, "Add Student", -1))
            ])
          ])
        ]),
        createBaseVNode("div", _hoisted_6, [
          createBaseVNode("div", _hoisted_7, [
            createBaseVNode("div", _hoisted_8, [
              createBaseVNode("div", null, [
                _cache[18] || (_cache[18] = createBaseVNode("p", { class: "text-sm font-medium text-gray-500" }, "Total Students", -1)),
                createBaseVNode("p", _hoisted_9, toDisplayString(users.value.length), 1)
              ]),
              createBaseVNode("div", _hoisted_10, [
                createVNode(unref(Users), { class: "w-6 h-6 text-blue-600" })
              ])
            ]),
            createBaseVNode("div", _hoisted_11, [
              createVNode(unref(TrendingUp), { class: "w-3 h-3 mr-1" }),
              createBaseVNode("span", null, toDisplayString(newThisMonth.value) + " new this month", 1)
            ])
          ]),
          createBaseVNode("div", _hoisted_12, [
            createBaseVNode("div", _hoisted_13, [
              createBaseVNode("div", null, [
                _cache[19] || (_cache[19] = createBaseVNode("p", { class: "text-sm font-medium text-gray-500" }, "Active Plans", -1)),
                createBaseVNode("p", _hoisted_14, toDisplayString(activeSubscriptionsCount.value), 1)
              ]),
              createBaseVNode("div", _hoisted_15, [
                createVNode(unref(CreditCard), { class: "w-6 h-6 text-green-600" })
              ])
            ]),
            createBaseVNode("div", _hoisted_16, [
              createBaseVNode("span", null, toDisplayString(Math.round(activeSubscriptionsCount.value / (users.value.length || 1) * 100)) + "% conversion rate", 1)
            ])
          ]),
          createBaseVNode("div", _hoisted_17, [
            createBaseVNode("div", _hoisted_18, [
              createBaseVNode("div", null, [
                _cache[20] || (_cache[20] = createBaseVNode("p", { class: "text-sm font-medium text-gray-500" }, "Pending Approval", -1)),
                createBaseVNode("p", _hoisted_19, toDisplayString(pendingCount.value), 1)
              ]),
              createBaseVNode("div", _hoisted_20, [
                createVNode(unref(Clock), { class: "w-6 h-6 text-amber-600" })
              ])
            ]),
            _cache[21] || (_cache[21] = createBaseVNode("div", { class: "mt-4 flex items-center text-xs text-amber-600 font-medium" }, [
              createBaseVNode("span", null, "Requires attention")
            ], -1))
          ]),
          createBaseVNode("div", _hoisted_21, [
            createBaseVNode("div", _hoisted_22, [
              createBaseVNode("div", null, [
                _cache[22] || (_cache[22] = createBaseVNode("p", { class: "text-sm font-medium text-gray-500" }, "Total Bookings", -1)),
                createBaseVNode("p", _hoisted_23, toDisplayString(totalBookings.value), 1)
              ]),
              createBaseVNode("div", _hoisted_24, [
                createVNode(unref(Calendar), { class: "w-6 h-6 text-purple-600" })
              ])
            ]),
            _cache[23] || (_cache[23] = createBaseVNode("div", { class: "mt-4 flex items-center text-xs text-gray-500" }, [
              createBaseVNode("span", null, "Across all libraries")
            ], -1))
          ])
        ]),
        createBaseVNode("div", _hoisted_25, [
          createBaseVNode("div", _hoisted_26, [
            createVNode(unref(Search), { class: "absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" }),
            withDirectives(createBaseVNode("input", {
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => searchQuery.value = $event),
              type: "text",
              placeholder: "Search by name, email, or CRN...",
              class: "w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all outline-none"
            }, null, 512), [
              [vModelText, searchQuery.value]
            ])
          ]),
          createBaseVNode("div", _hoisted_27, [
            withDirectives(createBaseVNode("select", {
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => filterLibrary.value = $event),
              class: "px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none text-sm font-medium"
            }, [
              _cache[24] || (_cache[24] = createBaseVNode("option", { value: "" }, "All Libraries", -1)),
              (openBlock(true), createElementBlock(Fragment, null, renderList(libraries.value, (lib) => {
                return openBlock(), createElementBlock("option", {
                  key: lib.id,
                  value: lib.id
                }, toDisplayString(lib.name), 9, _hoisted_28);
              }), 128))
            ], 512), [
              [vModelSelect, filterLibrary.value]
            ]),
            withDirectives(createBaseVNode("select", {
              "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => filterStatus.value = $event),
              class: "px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none text-sm font-medium"
            }, [..._cache[25] || (_cache[25] = [
              createStaticVNode('<option value="">All Status</option><option value="approved">Approved</option><option value="pending">Pending</option><option value="suspended">Suspended</option><option value="banned">Banned</option>', 5)
            ])], 512), [
              [vModelSelect, filterStatus.value]
            ])
          ])
        ]),
        createBaseVNode("div", _hoisted_29, [
          loading.value && users.value.length === 0 ? (openBlock(), createElementBlock("div", _hoisted_30, [..._cache[26] || (_cache[26] = [
            createBaseVNode("div", { class: "animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mb-4" }, null, -1),
            createBaseVNode("p", { class: "text-gray-500 font-medium" }, "Loading students...", -1)
          ])])) : filteredUsers.value.length === 0 ? (openBlock(), createElementBlock("div", _hoisted_31, [
            createBaseVNode("div", _hoisted_32, [
              createVNode(unref(Search), { class: "w-8 h-8 text-gray-300" })
            ]),
            _cache[27] || (_cache[27] = createBaseVNode("p", { class: "text-gray-500 font-medium" }, "No students found matching your criteria", -1)),
            createBaseVNode("button", {
              onClick: resetFilters,
              class: "mt-2 text-indigo-600 hover:underline text-sm font-semibold"
            }, "Clear all filters")
          ])) : (openBlock(), createElementBlock("div", _hoisted_33, [
            createBaseVNode("table", _hoisted_34, [
              _cache[28] || (_cache[28] = createBaseVNode("thead", null, [
                createBaseVNode("tr", { class: "bg-gray-50/50" }, [
                  createBaseVNode("th", { class: "px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider" }, "Student"),
                  createBaseVNode("th", { class: "px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider" }, "CRN & Level"),
                  createBaseVNode("th", { class: "px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider" }, "Subscription"),
                  createBaseVNode("th", { class: "px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider" }, "Status"),
                  createBaseVNode("th", { class: "px-6 py-4 text-right text-xs font-bold text-gray-500 uppercase tracking-wider" }, "Actions")
                ])
              ], -1)),
              createBaseVNode("tbody", _hoisted_35, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(filteredUsers.value, (user) => {
                  return openBlock(), createElementBlock("tr", {
                    key: user.id,
                    class: "hover:bg-gray-50/80 transition-colors group"
                  }, [
                    createBaseVNode("td", _hoisted_36, [
                      createBaseVNode("div", _hoisted_37, [
                        createBaseVNode("div", _hoisted_38, [
                          createBaseVNode("div", _hoisted_39, toDisplayString(user.name.charAt(0)), 1),
                          user.is_active ? (openBlock(), createElementBlock("div", _hoisted_40)) : createCommentVNode("", true)
                        ]),
                        createBaseVNode("div", _hoisted_41, [
                          createBaseVNode("div", _hoisted_42, toDisplayString(user.name), 1),
                          createBaseVNode("div", _hoisted_43, toDisplayString(user.email), 1)
                        ])
                      ])
                    ]),
                    createBaseVNode("td", _hoisted_44, [
                      createBaseVNode("div", _hoisted_45, toDisplayString(user.crn), 1),
                      createBaseVNode("div", _hoisted_46, toDisplayString(user.ca_level || "No Level"), 1)
                    ]),
                    createBaseVNode("td", _hoisted_47, [
                      user.active_subscription ? (openBlock(), createElementBlock("div", _hoisted_48, [
                        createBaseVNode("span", _hoisted_49, toDisplayString(user.active_subscription.subscription_plan?.name), 1),
                        createBaseVNode("span", _hoisted_50, "Expires: " + toDisplayString(formatDate(user.active_subscription.expires_at)), 1)
                      ])) : (openBlock(), createElementBlock("div", _hoisted_51, "No active plan"))
                    ]),
                    createBaseVNode("td", _hoisted_52, [
                      createBaseVNode("button", {
                        onClick: withModifiers(($event) => cycleUserStatus(user), ["stop"]),
                        disabled: statusUpdating.value === user.id,
                        class: normalizeClass([
                          "px-2.5 py-1 inline-flex text-[10px] leading-4 font-bold uppercase tracking-wider rounded-full shadow-sm hover:opacity-80 transition-all disabled:opacity-50 cursor-pointer border-none",
                          user.status === "approved" ? "bg-green-100 text-green-700" : user.status === "pending" ? "bg-amber-100 text-amber-700" : user.status === "suspended" ? "bg-orange-100 text-orange-700" : "bg-red-100 text-red-700"
                        ])
                      }, [
                        statusUpdating.value === user.id ? (openBlock(), createBlock(unref(RefreshCw), {
                          key: 0,
                          class: "w-2.5 h-2.5 animate-spin mr-1"
                        })) : createCommentVNode("", true),
                        createTextVNode(" " + toDisplayString(user.status), 1)
                      ], 10, _hoisted_53)
                    ]),
                    createBaseVNode("td", _hoisted_54, [
                      createBaseVNode("div", _hoisted_55, [
                        user.status === "pending" ? (openBlock(), createElementBlock("button", {
                          key: 0,
                          onClick: ($event) => approveUser(user),
                          class: "p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors",
                          title: "Approve Student"
                        }, [
                          createVNode(unref(UserCheck), { class: "w-4 h-4" })
                        ], 8, _hoisted_56)) : createCommentVNode("", true),
                        createBaseVNode("button", {
                          onClick: ($event) => editUser(user),
                          class: "p-2 text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors",
                          title: "Edit Student"
                        }, [
                          createVNode(unref(Pen), { class: "w-4 h-4" })
                        ], 8, _hoisted_57),
                        createBaseVNode("button", {
                          onClick: ($event) => openBanModal(user),
                          class: "p-2 text-orange-600 hover:bg-orange-50 rounded-lg transition-colors",
                          title: "Ban Student"
                        }, [
                          createVNode(unref(Ban), { class: "w-4 h-4" })
                        ], 8, _hoisted_58),
                        createBaseVNode("button", {
                          onClick: ($event) => confirmDelete(user),
                          class: "p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors",
                          title: "Delete Student"
                        }, [
                          createVNode(unref(Trash2), { class: "w-4 h-4" })
                        ], 8, _hoisted_59)
                      ])
                    ])
                  ]);
                }), 128))
              ])
            ])
          ]))
        ]),
        showModal.value ? (openBlock(), createElementBlock("div", _hoisted_60, [
          createBaseVNode("div", _hoisted_61, [
            createBaseVNode("div", _hoisted_62, [
              createBaseVNode("div", null, [
                createBaseVNode("h3", _hoisted_63, toDisplayString(isEditing.value ? "Edit Student" : "Add New Student"), 1),
                createBaseVNode("p", _hoisted_64, toDisplayString(isEditing.value ? "Update student profile information" : "Register a new student in the system"), 1)
              ]),
              createBaseVNode("button", {
                onClick: _cache[3] || (_cache[3] = ($event) => showModal.value = false),
                class: "p-2 hover:bg-white/20 rounded-xl transition-colors"
              }, [
                createVNode(unref(X), { class: "w-6 h-6" })
              ])
            ]),
            createBaseVNode("form", {
              onSubmit: withModifiers(saveUser, ["prevent"]),
              class: "p-8 space-y-5"
            }, [
              createBaseVNode("div", _hoisted_65, [
                createBaseVNode("div", _hoisted_66, [
                  _cache[29] || (_cache[29] = createBaseVNode("label", { class: "text-xs font-bold text-gray-700 uppercase tracking-wider" }, "Full Name", -1)),
                  withDirectives(createBaseVNode("input", {
                    "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => form.value.name = $event),
                    type: "text",
                    required: "",
                    placeholder: "e.g. John Doe",
                    class: "w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all outline-none"
                  }, null, 512), [
                    [vModelText, form.value.name]
                  ])
                ]),
                createBaseVNode("div", _hoisted_67, [
                  _cache[30] || (_cache[30] = createBaseVNode("label", { class: "text-xs font-bold text-gray-700 uppercase tracking-wider" }, "Email Address", -1)),
                  withDirectives(createBaseVNode("input", {
                    "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => form.value.email = $event),
                    type: "email",
                    required: "",
                    placeholder: "john@example.com",
                    class: "w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all outline-none"
                  }, null, 512), [
                    [vModelText, form.value.email]
                  ])
                ])
              ]),
              createBaseVNode("div", _hoisted_68, [
                createBaseVNode("div", _hoisted_69, [
                  _cache[31] || (_cache[31] = createBaseVNode("label", { class: "text-xs font-bold text-gray-700 uppercase tracking-wider" }, "CRN / Student ID", -1)),
                  withDirectives(createBaseVNode("input", {
                    "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => form.value.crn = $event),
                    type: "number",
                    required: "",
                    placeholder: "e.g. 12345",
                    class: "w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all outline-none"
                  }, null, 512), [
                    [vModelText, form.value.crn]
                  ])
                ]),
                createBaseVNode("div", _hoisted_70, [
                  _cache[33] || (_cache[33] = createBaseVNode("label", { class: "text-xs font-bold text-gray-700 uppercase tracking-wider" }, "CA Level", -1)),
                  withDirectives(createBaseVNode("select", {
                    "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => form.value.ca_level = $event),
                    class: "w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
                  }, [..._cache[32] || (_cache[32] = [
                    createBaseVNode("option", { value: "" }, "Select Level", -1),
                    createBaseVNode("option", { value: "PRC" }, "PRC", -1),
                    createBaseVNode("option", { value: "CAF" }, "CAF", -1),
                    createBaseVNode("option", { value: "Final" }, "Final", -1)
                  ])], 512), [
                    [vModelSelect, form.value.ca_level]
                  ])
                ])
              ]),
              !isEditing.value ? (openBlock(), createElementBlock("div", _hoisted_71, [
                _cache[34] || (_cache[34] = createBaseVNode("label", { class: "text-xs font-bold text-gray-700 uppercase tracking-wider" }, "Password", -1)),
                withDirectives(createBaseVNode("input", {
                  "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => form.value.password = $event),
                  type: "password",
                  required: "",
                  placeholder: "Minimum 8 characters",
                  class: "w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all outline-none"
                }, null, 512), [
                  [vModelText, form.value.password]
                ])
              ])) : createCommentVNode("", true),
              createBaseVNode("div", _hoisted_72, [
                createBaseVNode("div", _hoisted_73, [
                  _cache[36] || (_cache[36] = createBaseVNode("label", { class: "text-xs font-bold text-gray-700 uppercase tracking-wider" }, "Account Status", -1)),
                  withDirectives(createBaseVNode("select", {
                    "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => form.value.status = $event),
                    class: "w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
                  }, [..._cache[35] || (_cache[35] = [
                    createBaseVNode("option", { value: "pending" }, "Pending", -1),
                    createBaseVNode("option", { value: "approved" }, "Approved", -1),
                    createBaseVNode("option", { value: "suspended" }, "Suspended", -1),
                    createBaseVNode("option", { value: "banned" }, "Banned", -1)
                  ])], 512), [
                    [vModelSelect, form.value.status]
                  ])
                ]),
                createBaseVNode("div", _hoisted_74, [
                  _cache[38] || (_cache[38] = createBaseVNode("label", { class: "text-xs font-bold text-gray-700 uppercase tracking-wider" }, "Gender", -1)),
                  withDirectives(createBaseVNode("select", {
                    "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => form.value.gender = $event),
                    class: "w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
                  }, [..._cache[37] || (_cache[37] = [
                    createBaseVNode("option", { value: "" }, "Select Gender", -1),
                    createBaseVNode("option", { value: "male" }, "Male", -1),
                    createBaseVNode("option", { value: "female" }, "Female", -1)
                  ])], 512), [
                    [vModelSelect, form.value.gender]
                  ])
                ])
              ]),
              createBaseVNode("div", _hoisted_75, [
                createBaseVNode("button", {
                  type: "button",
                  onClick: _cache[11] || (_cache[11] = ($event) => showModal.value = false),
                  class: "flex-1 px-6 py-3 border border-gray-200 text-gray-700 rounded-2xl hover:bg-gray-50 font-bold transition-all"
                }, " Cancel "),
                createBaseVNode("button", {
                  type: "submit",
                  disabled: saving.value,
                  class: "flex-1 px-6 py-3 bg-indigo-600 text-white rounded-2xl hover:bg-indigo-700 font-bold shadow-lg shadow-indigo-200 transition-all disabled:opacity-50 flex items-center justify-center space-x-2"
                }, [
                  saving.value ? (openBlock(), createBlock(unref(RefreshCw), {
                    key: 0,
                    class: "w-4 h-4 animate-spin"
                  })) : createCommentVNode("", true),
                  createBaseVNode("span", null, toDisplayString(saving.value ? "Saving..." : isEditing.value ? "Update Student" : "Create Student"), 1)
                ], 8, _hoisted_76)
              ])
            ], 32)
          ])
        ])) : createCommentVNode("", true),
        showBanModal.value ? (openBlock(), createElementBlock("div", _hoisted_77, [
          createBaseVNode("div", _hoisted_78, [
            createBaseVNode("div", _hoisted_79, [
              createBaseVNode("div", null, [
                _cache[39] || (_cache[39] = createBaseVNode("h3", { class: "text-xl font-bold" }, "Ban Student", -1)),
                createBaseVNode("p", _hoisted_80, "Restrict " + toDisplayString(banForm.value.userName) + " from accessing libraries", 1)
              ]),
              createBaseVNode("button", {
                onClick: _cache[12] || (_cache[12] = ($event) => showBanModal.value = false),
                class: "p-2 hover:bg-white/20 rounded-xl transition-colors"
              }, [
                createVNode(unref(X), { class: "w-6 h-6" })
              ])
            ]),
            createBaseVNode("form", {
              onSubmit: withModifiers(submitBan, ["prevent"]),
              class: "p-8 space-y-5"
            }, [
              createBaseVNode("div", _hoisted_81, [
                _cache[40] || (_cache[40] = createBaseVNode("label", { class: "text-xs font-bold text-gray-700 uppercase tracking-wider" }, "Ban Duration (Days)", -1)),
                withDirectives(createBaseVNode("input", {
                  "onUpdate:modelValue": _cache[13] || (_cache[13] = ($event) => banForm.value.days = $event),
                  type: "number",
                  min: "1",
                  placeholder: "Leave empty for lifetime ban",
                  class: "w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:bg-white transition-all outline-none"
                }, null, 512), [
                  [vModelText, banForm.value.days]
                ])
              ]),
              createBaseVNode("div", _hoisted_82, [
                _cache[41] || (_cache[41] = createBaseVNode("label", { class: "text-xs font-bold text-gray-700 uppercase tracking-wider" }, "Reason", -1)),
                withDirectives(createBaseVNode("textarea", {
                  "onUpdate:modelValue": _cache[14] || (_cache[14] = ($event) => banForm.value.reason = $event),
                  rows: "3",
                  placeholder: "Reason for banning",
                  class: "w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:bg-white transition-all outline-none resize-none"
                }, null, 512), [
                  [vModelText, banForm.value.reason]
                ])
              ]),
              createBaseVNode("div", _hoisted_83, [
                createBaseVNode("button", {
                  type: "button",
                  onClick: _cache[15] || (_cache[15] = ($event) => showBanModal.value = false),
                  class: "flex-1 px-6 py-3 border border-gray-200 text-gray-700 rounded-2xl hover:bg-gray-50 font-bold transition-all"
                }, " Cancel "),
                createBaseVNode("button", {
                  type: "submit",
                  disabled: banning.value,
                  class: "flex-1 px-6 py-3 bg-red-600 text-white rounded-2xl hover:bg-red-700 font-bold shadow-lg shadow-red-200 transition-all disabled:opacity-50 flex items-center justify-center space-x-2"
                }, [
                  banning.value ? (openBlock(), createBlock(unref(RefreshCw), {
                    key: 0,
                    class: "w-4 h-4 animate-spin"
                  })) : createCommentVNode("", true),
                  createBaseVNode("span", null, toDisplayString(banning.value ? "Banning..." : "Confirm Ban"), 1)
                ], 8, _hoisted_84)
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
