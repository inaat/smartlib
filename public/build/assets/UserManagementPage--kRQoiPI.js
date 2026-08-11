import { d as defineComponent, r as ref, a as computed, o as onMounted, b as createElementBlock, e as createBaseVNode, p as createCommentVNode, g as createVNode, u as unref, t as toDisplayString, C as Clock, s as withDirectives, v as vModelText, H as vModelSelect, F as Fragment, k as renderList, f as createStaticVNode, n as normalizeClass, R as RefreshCw, B as withModifiers, a3 as adminAPI, i as createBlock, j as createTextVNode, m as openBlock, _ as _export_sfc } from "./main-BeUqjoax.js";
import { n as normalizeDates } from "./normalizeDates-KHLYxtAK.js";
import { P as Plus } from "./plus-R3pbBkbH.js";
import { U as Users } from "./users-DgA2REmn.js";
import { U as UserX } from "./user-x-ABG_NlBS.js";
import { C as Calendar } from "./calendar-C4MEAYqh.js";
import { S as Search } from "./search-CAjRd0eY.js";
import { X } from "./x-Dj9LNodU.js";
import { U as UserCheck } from "./user-check-gjs1HmON.js";
import { P as Pen } from "./pen-Du3LExGD.js";
import { T as Trash2 } from "./trash-2-CnFs5eVz.js";
import { p as parseISO } from "./parseISO-L4DZC0_Z.js";
/* empty css               */
function isSameMonth(laterDate, earlierDate, options) {
  const [laterDate_, earlierDate_] = normalizeDates(
    options?.in,
    laterDate,
    earlierDate
  );
  return laterDate_.getFullYear() === earlierDate_.getFullYear() && laterDate_.getMonth() === earlierDate_.getMonth();
}
const _hoisted_1 = { class: "space-y-6" };
const _hoisted_2 = { class: "flex justify-end items-center mb-6" };
const _hoisted_3 = { class: "flex items-center space-x-3" };
const _hoisted_4 = { class: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" };
const _hoisted_5 = { class: "bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex items-center justify-between" };
const _hoisted_6 = { class: "text-left" };
const _hoisted_7 = { class: "text-2xl font-black text-slate-800 mt-1.5" };
const _hoisted_8 = { class: "p-3.5 rounded-xl bg-purple-50 text-purple-600" };
const _hoisted_9 = { class: "bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex items-center justify-between" };
const _hoisted_10 = { class: "text-left" };
const _hoisted_11 = { class: "text-2xl font-black text-slate-800 mt-1.5" };
const _hoisted_12 = { class: "p-3.5 rounded-xl bg-orange-50 text-orange-600" };
const _hoisted_13 = { class: "bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex items-center justify-between" };
const _hoisted_14 = { class: "text-left" };
const _hoisted_15 = { class: "text-2xl font-black text-slate-800 mt-1.5" };
const _hoisted_16 = { class: "p-3.5 rounded-xl bg-amber-50 text-amber-600" };
const _hoisted_17 = { class: "bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex items-center justify-between" };
const _hoisted_18 = { class: "text-left" };
const _hoisted_19 = { class: "text-2xl font-black text-slate-800 mt-1.5" };
const _hoisted_20 = { class: "p-3.5 rounded-xl bg-blue-50 text-blue-600" };
const _hoisted_21 = { class: "bg-white rounded-2xl shadow-sm border border-slate-100 p-4" };
const _hoisted_22 = { class: "flex flex-col md:flex-row items-center gap-4" };
const _hoisted_23 = { class: "relative flex-1 w-full" };
const _hoisted_24 = ["value"];
const _hoisted_25 = ["disabled"];
const _hoisted_26 = {
  key: 0,
  class: "flex justify-center py-12"
};
const _hoisted_27 = {
  key: 1,
  class: "text-center py-12 bg-white rounded-2xl border border-dashed border-slate-200"
};
const _hoisted_28 = {
  key: 2,
  class: "bg-white rounded-2xl shadow-sm border border-slate-100/80 overflow-hidden"
};
const _hoisted_29 = { class: "overflow-x-auto" };
const _hoisted_30 = { class: "min-w-full divide-y divide-gray-100" };
const _hoisted_31 = { class: "divide-y divide-gray-100 bg-white" };
const _hoisted_32 = { class: "px-6 py-4 whitespace-nowrap" };
const _hoisted_33 = { class: "flex items-center space-x-3.5" };
const _hoisted_34 = { class: "w-10 h-10 rounded-lg overflow-hidden flex-shrink-0 flex items-center justify-center shadow-sm" };
const _hoisted_35 = ["src"];
const _hoisted_36 = {
  key: 1,
  class: "w-full h-full flex items-center justify-center bg-purple-50 border border-purple-200 text-purple-600 font-bold text-sm rounded-lg"
};
const _hoisted_37 = { class: "text-left" };
const _hoisted_38 = { class: "text-sm font-medium text-slate-700" };
const _hoisted_39 = { class: "text-[10px] text-slate-400 font-semibold tracking-wide mt-0.5 uppercase" };
const _hoisted_40 = { class: "px-6 py-4 whitespace-nowrap text-left font-bold text-xs text-slate-700" };
const _hoisted_41 = { class: "px-6 py-4 whitespace-nowrap text-left" };
const _hoisted_42 = { class: "px-6 py-4 whitespace-nowrap text-left" };
const _hoisted_43 = ["onClick", "disabled"];
const _hoisted_44 = { class: "px-6 py-4 whitespace-nowrap text-right" };
const _hoisted_45 = { class: "flex items-center justify-end space-x-2" };
const _hoisted_46 = ["onClick"];
const _hoisted_47 = ["onClick"];
const _hoisted_48 = ["onClick"];
const _hoisted_49 = {
  key: 3,
  class: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
};
const _hoisted_50 = { class: "bg-white rounded-3xl shadow-xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in duration-200 border border-slate-100 flex flex-col" };
const _hoisted_51 = { class: "p-6 border-b border-slate-100 flex items-center justify-between text-left" };
const _hoisted_52 = { class: "text-lg font-bold text-slate-800" };
const _hoisted_53 = { class: "grid grid-cols-2 gap-4" };
const _hoisted_54 = { key: 0 };
const _hoisted_55 = { class: "grid grid-cols-2 gap-4" };
const _hoisted_56 = { class: "pt-4 flex items-center space-x-3" };
const _hoisted_57 = ["disabled"];
const _hoisted_58 = { key: 0 };
const _hoisted_59 = { key: 1 };
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
    const suspendedCount = computed(() => {
      return users.value.filter((u) => u.status === "suspended").length;
    });
    computed(() => {
      return users.value.filter((u) => u.active_subscription).length;
    });
    const pendingCount = computed(() => {
      return users.value.filter((u) => u.status === "pending").length;
    });
    const totalBookings = computed(() => {
      return users.value.reduce((acc, u) => acc + (u.bookings_count || 0), 0);
    });
    computed(() => {
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
    const saveUser = async () => {
      saving.value = true;
      try {
        const payload = { ...form.value };
        if (!payload.ca_level) delete payload.ca_level;
        if (!payload.crn) delete payload.crn;
        if (!payload.gender) delete payload.gender;
        if (isEditing.value && !payload.password) {
          delete payload.password;
        }
        if (isEditing.value && form.value.id) {
          await adminAPI.updateUser(form.value.id, payload);
        } else {
          await adminAPI.createUser(payload);
        }
        await fetchUsers();
        showModal.value = false;
      } catch (error) {
        console.error("Error saving student:", error);
        const errData = error.response?.data;
        if (errData?.errors) {
          const messages = Object.values(errData.errors).flat().join("\n");
          alert(messages);
        } else if (errData?.message) {
          alert(errData.message);
        }
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
      const nextStatus = user.status === "approved" ? "suspended" : "approved";
      statusUpdating.value = user.id;
      try {
        await adminAPI.updateUser(user.id, { status: nextStatus });
        user.status = nextStatus;
      } catch (error) {
        console.error("Error updating status:", error);
      } finally {
        statusUpdating.value = null;
      }
    };
    const confirmDelete = async (user) => {
      if (confirm(`Are you sure you want to delete student "${user.name}"?`)) {
        try {
          await adminAPI.deleteUser(user.id);
          await fetchUsers();
        } catch (error) {
          console.error("Error deleting student:", error);
        }
      }
    };
    const getProfilePictureUrl = (path) => {
      if (!path) return "";
      if (path.startsWith("http")) return path;
      return `/storage/${path}`;
    };
    onMounted(() => {
      fetchUsers();
      fetchLibraries();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("div", _hoisted_3, [
            createBaseVNode("button", {
              onClick: openCreateModal,
              class: "px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-xl transition-colors flex items-center space-x-2 text-xs font-bold shadow-sm cursor-pointer animate-in fade-in duration-200"
            }, [
              createVNode(unref(Plus), { class: "w-4 h-4" }),
              _cache[12] || (_cache[12] = createBaseVNode("span", null, "Add Student", -1))
            ])
          ])
        ]),
        createBaseVNode("div", _hoisted_4, [
          createBaseVNode("div", _hoisted_5, [
            createBaseVNode("div", _hoisted_6, [
              _cache[13] || (_cache[13] = createBaseVNode("p", { class: "text-xs font-bold text-slate-400 uppercase tracking-widest" }, "Total Students", -1)),
              createBaseVNode("h3", _hoisted_7, toDisplayString(users.value.length), 1)
            ]),
            createBaseVNode("div", _hoisted_8, [
              createVNode(unref(Users), { class: "w-5 h-5" })
            ])
          ]),
          createBaseVNode("div", _hoisted_9, [
            createBaseVNode("div", _hoisted_10, [
              _cache[14] || (_cache[14] = createBaseVNode("p", { class: "text-xs font-bold text-slate-400 uppercase tracking-widest" }, "Suspended Students", -1)),
              createBaseVNode("h3", _hoisted_11, toDisplayString(suspendedCount.value), 1)
            ]),
            createBaseVNode("div", _hoisted_12, [
              createVNode(unref(UserX), { class: "w-5 h-5" })
            ])
          ]),
          createBaseVNode("div", _hoisted_13, [
            createBaseVNode("div", _hoisted_14, [
              _cache[15] || (_cache[15] = createBaseVNode("p", { class: "text-xs font-bold text-slate-400 uppercase tracking-widest" }, "Pending", -1)),
              createBaseVNode("h3", _hoisted_15, toDisplayString(pendingCount.value), 1)
            ]),
            createBaseVNode("div", _hoisted_16, [
              createVNode(unref(Clock), { class: "w-5 h-5" })
            ])
          ]),
          createBaseVNode("div", _hoisted_17, [
            createBaseVNode("div", _hoisted_18, [
              _cache[16] || (_cache[16] = createBaseVNode("p", { class: "text-xs font-bold text-slate-400 uppercase tracking-widest" }, "Total Bookings", -1)),
              createBaseVNode("h3", _hoisted_19, toDisplayString(totalBookings.value), 1)
            ]),
            createBaseVNode("div", _hoisted_20, [
              createVNode(unref(Calendar), { class: "w-5 h-5" })
            ])
          ])
        ]),
        createBaseVNode("div", _hoisted_21, [
          createBaseVNode("div", _hoisted_22, [
            createBaseVNode("div", _hoisted_23, [
              createVNode(unref(Search), { class: "absolute left-3.5 top-1/2 transform -translate-y-1/2 w-4.5 h-4.5 text-slate-400" }),
              withDirectives(createBaseVNode("input", {
                type: "text",
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => searchQuery.value = $event),
                placeholder: "Search by name, CRN, or email...",
                class: "w-full pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-xs font-semibold text-slate-655 focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 outline-none placeholder-slate-400"
              }, null, 512), [
                [vModelText, searchQuery.value]
              ])
            ]),
            withDirectives(createBaseVNode("select", {
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => filterLibrary.value = $event),
              class: "w-full md:w-48 px-4 py-2 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-655 focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 outline-none cursor-pointer"
            }, [
              _cache[17] || (_cache[17] = createBaseVNode("option", { value: "" }, "All Libraries", -1)),
              (openBlock(true), createElementBlock(Fragment, null, renderList(libraries.value, (lib) => {
                return openBlock(), createElementBlock("option", {
                  key: lib.id,
                  value: lib.id
                }, toDisplayString(lib.name), 9, _hoisted_24);
              }), 128))
            ], 512), [
              [vModelSelect, filterLibrary.value]
            ]),
            withDirectives(createBaseVNode("select", {
              "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => filterStatus.value = $event),
              class: "w-full md:w-48 px-4 py-2 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-655 focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 outline-none cursor-pointer"
            }, [..._cache[18] || (_cache[18] = [
              createStaticVNode('<option value="" data-v-09fde46c>All Status</option><option value="approved" data-v-09fde46c>Approved</option><option value="pending" data-v-09fde46c>Pending</option><option value="suspended" data-v-09fde46c>Suspended</option><option value="banned" data-v-09fde46c>Banned</option>', 5)
            ])], 512), [
              [vModelSelect, filterStatus.value]
            ]),
            createBaseVNode("button", {
              onClick: fetchUsers,
              disabled: loading.value,
              class: "p-2 bg-white border border-slate-200 hover:bg-slate-50 text-slate-500 rounded-xl transition-colors cursor-pointer shadow-sm",
              title: "Refresh Data"
            }, [
              createVNode(unref(RefreshCw), {
                class: normalizeClass(["w-4 h-4", loading.value ? "animate-spin" : ""])
              }, null, 8, ["class"])
            ], 8, _hoisted_25)
          ])
        ]),
        loading.value && users.value.length === 0 ? (openBlock(), createElementBlock("div", _hoisted_26, [..._cache[19] || (_cache[19] = [
          createBaseVNode("div", { class: "animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600" }, null, -1)
        ])])) : filteredUsers.value.length === 0 ? (openBlock(), createElementBlock("div", _hoisted_27, [
          createVNode(unref(Users), { class: "w-12 h-12 text-slate-300 mx-auto mb-4" }),
          _cache[20] || (_cache[20] = createBaseVNode("p", { class: "text-xs font-bold text-slate-455 uppercase tracking-widest" }, "No students found matching your criteria.", -1))
        ])) : (openBlock(), createElementBlock("div", _hoisted_28, [
          createBaseVNode("div", _hoisted_29, [
            createBaseVNode("table", _hoisted_30, [
              _cache[21] || (_cache[21] = createBaseVNode("thead", { class: "bg-gray-50/50" }, [
                createBaseVNode("tr", null, [
                  createBaseVNode("th", {
                    scope: "col",
                    class: "px-6 py-4 text-left text-xs font-semibold text-slate-400 uppercase tracking-widest"
                  }, "Student"),
                  createBaseVNode("th", {
                    scope: "col",
                    class: "px-6 py-4 text-left text-xs font-semibold text-slate-400 uppercase tracking-widest"
                  }, "Student CRN"),
                  createBaseVNode("th", {
                    scope: "col",
                    class: "px-6 py-4 text-left text-xs font-semibold text-slate-400 uppercase tracking-widest"
                  }, "CA Level"),
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
              createBaseVNode("tbody", _hoisted_31, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(filteredUsers.value, (user) => {
                  return openBlock(), createElementBlock("tr", {
                    key: user.id,
                    class: "hover:bg-slate-50/50 transition-colors"
                  }, [
                    createBaseVNode("td", _hoisted_32, [
                      createBaseVNode("div", _hoisted_33, [
                        createBaseVNode("div", _hoisted_34, [
                          user.profile_picture ? (openBlock(), createElementBlock("img", {
                            key: 0,
                            src: getProfilePictureUrl(user.profile_picture),
                            class: "w-full h-full object-cover rounded-lg"
                          }, null, 8, _hoisted_35)) : (openBlock(), createElementBlock("div", _hoisted_36, toDisplayString(user.name.charAt(0).toUpperCase()), 1))
                        ]),
                        createBaseVNode("div", _hoisted_37, [
                          createBaseVNode("div", _hoisted_38, toDisplayString(user.name), 1),
                          createBaseVNode("div", _hoisted_39, toDisplayString(user.email), 1)
                        ])
                      ])
                    ]),
                    createBaseVNode("td", _hoisted_40, " CRN: " + toDisplayString(user.crn || "N/A"), 1),
                    createBaseVNode("td", _hoisted_41, [
                      createBaseVNode("span", {
                        class: normalizeClass([
                          "inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold border uppercase tracking-wider",
                          user.ca_level === "PRC" ? "bg-blue-50 text-blue-700 border-blue-100" : user.ca_level === "CAF" ? "bg-purple-50 text-purple-700 border-purple-100" : user.ca_level === "Final" ? "bg-amber-50 text-amber-700 border-amber-100" : "bg-slate-50 text-slate-500 border-slate-100"
                        ])
                      }, toDisplayString(user.ca_level || "No Level"), 3)
                    ]),
                    createBaseVNode("td", _hoisted_42, [
                      createBaseVNode("button", {
                        onClick: withModifiers(($event) => cycleUserStatus(user), ["stop"]),
                        disabled: statusUpdating.value === user.id,
                        class: normalizeClass([
                          "text-[9px] font-semibold px-2.5 py-1 rounded-full uppercase tracking-wider border transition-all disabled:opacity-50 cursor-pointer bg-white",
                          user.status === "approved" ? "bg-green-50 border-green-100 text-green-700" : user.status === "pending" ? "bg-amber-55 border-amber-100 text-amber-700" : user.status === "suspended" ? "bg-orange-50 border-orange-100 text-orange-700" : "bg-red-50 border-red-100 text-red-700"
                        ])
                      }, [
                        statusUpdating.value === user.id ? (openBlock(), createBlock(unref(RefreshCw), {
                          key: 0,
                          class: "w-2.5 h-2.5 animate-spin mr-1 inline-block"
                        })) : createCommentVNode("", true),
                        createTextVNode(" " + toDisplayString(user.status), 1)
                      ], 10, _hoisted_43)
                    ]),
                    createBaseVNode("td", _hoisted_44, [
                      createBaseVNode("div", _hoisted_45, [
                        user.status === "pending" ? (openBlock(), createElementBlock("button", {
                          key: 0,
                          onClick: ($event) => approveUser(user),
                          class: "p-2 bg-white border border-slate-200 hover:bg-slate-50 rounded-lg text-green-700 hover:text-green-800 transition-all cursor-pointer shadow-sm",
                          title: "Approve Student"
                        }, [
                          createVNode(unref(UserCheck), { class: "w-4 h-4" })
                        ], 8, _hoisted_46)) : createCommentVNode("", true),
                        createBaseVNode("button", {
                          onClick: ($event) => editUser(user),
                          class: "p-2 bg-white border border-slate-200 hover:bg-slate-50 rounded-lg text-purple-700 hover:text-purple-800 transition-all cursor-pointer shadow-sm",
                          title: "Edit Student"
                        }, [
                          createVNode(unref(Pen), { class: "w-4 h-4" })
                        ], 8, _hoisted_47),
                        createBaseVNode("button", {
                          onClick: ($event) => confirmDelete(user),
                          class: "p-2 bg-white border border-slate-200 hover:bg-slate-50 rounded-lg text-red-655 hover:text-red-700 transition-all cursor-pointer shadow-sm",
                          title: "Delete Student"
                        }, [
                          createVNode(unref(Trash2), { class: "w-4 h-4" })
                        ], 8, _hoisted_48)
                      ])
                    ])
                  ]);
                }), 128))
              ])
            ])
          ])
        ])),
        showModal.value ? (openBlock(), createElementBlock("div", _hoisted_49, [
          createBaseVNode("div", _hoisted_50, [
            createBaseVNode("div", _hoisted_51, [
              createBaseVNode("h2", _hoisted_52, toDisplayString(isEditing.value ? "Edit Student" : "Add New Student"), 1),
              createBaseVNode("button", {
                onClick: _cache[3] || (_cache[3] = ($event) => showModal.value = false),
                class: "p-2 hover:bg-slate-50 rounded-xl transition-colors cursor-pointer"
              }, [
                createVNode(unref(X), { class: "w-5 h-5 text-slate-450" })
              ])
            ]),
            createBaseVNode("form", {
              onSubmit: withModifiers(saveUser, ["prevent"]),
              class: "p-6 space-y-4 text-left"
            }, [
              createBaseVNode("div", null, [
                _cache[22] || (_cache[22] = createBaseVNode("label", { class: "block text-xs font-bold text-slate-500 mb-1.5 uppercase tracking-wider" }, "Full Name", -1)),
                withDirectives(createBaseVNode("input", {
                  "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => form.value.name = $event),
                  type: "text",
                  required: "",
                  class: "w-full px-4 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 outline-none text-xs font-semibold text-slate-655 bg-white",
                  placeholder: "e.g. John Doe"
                }, null, 512), [
                  [vModelText, form.value.name]
                ])
              ]),
              createBaseVNode("div", null, [
                _cache[23] || (_cache[23] = createBaseVNode("label", { class: "block text-xs font-bold text-slate-500 mb-1.5 uppercase tracking-wider" }, "Email Address", -1)),
                withDirectives(createBaseVNode("input", {
                  "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => form.value.email = $event),
                  type: "email",
                  required: "",
                  class: "w-full px-4 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 outline-none text-xs font-semibold text-slate-655 bg-white",
                  placeholder: "john@example.com"
                }, null, 512), [
                  [vModelText, form.value.email]
                ])
              ]),
              createBaseVNode("div", _hoisted_53, [
                createBaseVNode("div", null, [
                  _cache[24] || (_cache[24] = createBaseVNode("label", { class: "block text-xs font-bold text-slate-500 mb-1.5 uppercase tracking-wider" }, "Student ID (CRN)", -1)),
                  withDirectives(createBaseVNode("input", {
                    "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => form.value.crn = $event),
                    type: "text",
                    required: "",
                    class: "w-full px-4 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 outline-none text-xs font-semibold text-slate-655 bg-white",
                    placeholder: "e.g. 12345"
                  }, null, 512), [
                    [vModelText, form.value.crn]
                  ])
                ]),
                createBaseVNode("div", null, [
                  _cache[26] || (_cache[26] = createBaseVNode("label", { class: "block text-xs font-bold text-slate-500 mb-1.5 uppercase tracking-wider" }, "CA Level", -1)),
                  withDirectives(createBaseVNode("select", {
                    "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => form.value.ca_level = $event),
                    class: "w-full px-4 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 outline-none text-xs font-bold text-slate-655 bg-white cursor-pointer"
                  }, [..._cache[25] || (_cache[25] = [
                    createBaseVNode("option", { value: "" }, "Select Level", -1),
                    createBaseVNode("option", { value: "PRC" }, "PRC", -1),
                    createBaseVNode("option", { value: "CAF" }, "CAF", -1),
                    createBaseVNode("option", { value: "Final" }, "Final", -1)
                  ])], 512), [
                    [vModelSelect, form.value.ca_level]
                  ])
                ])
              ]),
              !isEditing.value ? (openBlock(), createElementBlock("div", _hoisted_54, [
                _cache[27] || (_cache[27] = createBaseVNode("label", { class: "block text-xs font-bold text-slate-500 mb-1.5 uppercase tracking-wider" }, "Password", -1)),
                withDirectives(createBaseVNode("input", {
                  "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => form.value.password = $event),
                  type: "password",
                  required: "",
                  minlength: "8",
                  class: "w-full px-4 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 outline-none text-xs font-semibold text-slate-655 bg-white",
                  placeholder: "Min. 8 characters"
                }, null, 512), [
                  [vModelText, form.value.password]
                ])
              ])) : createCommentVNode("", true),
              createBaseVNode("div", _hoisted_55, [
                createBaseVNode("div", null, [
                  _cache[29] || (_cache[29] = createBaseVNode("label", { class: "block text-xs font-bold text-slate-500 mb-1.5 uppercase tracking-wider" }, "Account Status", -1)),
                  withDirectives(createBaseVNode("select", {
                    "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => form.value.status = $event),
                    required: "",
                    class: "w-full px-4 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 outline-none text-xs font-bold text-slate-655 bg-white cursor-pointer"
                  }, [..._cache[28] || (_cache[28] = [
                    createBaseVNode("option", { value: "pending" }, "Pending", -1),
                    createBaseVNode("option", { value: "approved" }, "Approved", -1),
                    createBaseVNode("option", { value: "suspended" }, "Suspended", -1)
                  ])], 512), [
                    [vModelSelect, form.value.status]
                  ])
                ]),
                createBaseVNode("div", null, [
                  _cache[31] || (_cache[31] = createBaseVNode("label", { class: "block text-xs font-bold text-slate-500 mb-1.5 uppercase tracking-wider" }, "Gender", -1)),
                  withDirectives(createBaseVNode("select", {
                    "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => form.value.gender = $event),
                    class: "w-full px-4 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 outline-none text-xs font-bold text-slate-655 bg-white cursor-pointer"
                  }, [..._cache[30] || (_cache[30] = [
                    createBaseVNode("option", { value: "" }, "Select Gender", -1),
                    createBaseVNode("option", { value: "male" }, "Male", -1),
                    createBaseVNode("option", { value: "female" }, "Female", -1)
                  ])], 512), [
                    [vModelSelect, form.value.gender]
                  ])
                ])
              ]),
              createBaseVNode("div", _hoisted_56, [
                createBaseVNode("button", {
                  type: "button",
                  onClick: _cache[11] || (_cache[11] = ($event) => showModal.value = false),
                  class: "flex-1 px-4 py-2.5 border border-slate-200 text-slate-500 font-bold rounded-xl hover:bg-slate-50 transition-colors text-xs cursor-pointer"
                }, " Cancel "),
                createBaseVNode("button", {
                  type: "submit",
                  disabled: saving.value,
                  class: "flex-1 px-4 py-2.5 bg-purple-600 hover:bg-purple-700 text-white rounded-xl transition-all disabled:opacity-50 text-xs font-bold cursor-pointer"
                }, [
                  saving.value ? (openBlock(), createElementBlock("span", _hoisted_58, "Saving...")) : (openBlock(), createElementBlock("span", _hoisted_59, toDisplayString(isEditing.value ? "Update Student" : "Create Student"), 1))
                ], 8, _hoisted_57)
              ])
            ], 32)
          ])
        ])) : createCommentVNode("", true)
      ]);
    };
  }
});
const UserManagementPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-09fde46c"]]);
export {
  UserManagementPage as default
};
