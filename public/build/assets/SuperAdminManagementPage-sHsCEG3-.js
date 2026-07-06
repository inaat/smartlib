import { d as defineComponent, x as useAuth, r as ref, o as onMounted, a as createElementBlock, b as createBaseVNode, l as createCommentVNode, f as createVNode, n as normalizeClass, u as unref, t as toDisplayString, F as Fragment, j as renderList, z as withModifiers, p as withDirectives, v as vModelText, h as createBlock, Y as ownerAPI, i as createTextVNode, k as openBlock } from "./main-BV94XoeK.js";
import { u as useSwal } from "./useSwal-pQW_XkRe.js";
import { R as RefreshCw } from "./refresh-cw-C6EhchCZ.js";
import { P as Plus } from "./plus-32ROcMxt.js";
import { S as ShieldAlert } from "./shield-alert-BGmvvtT8.js";
import { U as UserCheck } from "./user-check-DalWmYEE.js";
import { U as UserX } from "./user-x-CKfV5V-M.js";
import { c as createLucideIcon } from "./createLucideIcon-CmaEOm5I.js";
import { X } from "./x-C8j8JQlQ.js";
import { U as User } from "./user-CVhi9PXD.js";
import { M as Mail } from "./mail-t4jE-yzG.js";
import { L as Lock } from "./lock-D4S5aIlI.js";
import { L as LoaderCircle } from "./loader-circle-DjQu_eNR.js";
import { P as Pen } from "./pen-CsM_EZw_.js";
import { T as Trash2 } from "./trash-2-Dh2Znunm.js";
/* empty css               */
const ShieldOff = createLucideIcon("shield-off", [
  ["path", { d: "m2 2 20 20", key: "1ooewy" }],
  [
    "path",
    {
      d: "M5 5a1 1 0 0 0-1 1v7c0 5 3.5 7.5 7.67 8.94a1 1 0 0 0 .67.01c2.35-.82 4.48-1.97 5.9-3.71",
      key: "1jlk70"
    }
  ],
  [
    "path",
    {
      d: "M9.309 3.652A12.252 12.252 0 0 0 11.24 2.28a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1v7a9.784 9.784 0 0 1-.08 1.264",
      key: "18rp1v"
    }
  ]
]);
const _hoisted_1 = { class: "p-6 space-y-6" };
const _hoisted_2 = { class: "flex flex-col md:flex-row md:items-center justify-between gap-4" };
const _hoisted_3 = { class: "flex items-center space-x-3" };
const _hoisted_4 = ["disabled"];
const _hoisted_5 = { class: "grid grid-cols-1 md:grid-cols-3 gap-6" };
const _hoisted_6 = { class: "bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center space-x-4" };
const _hoisted_7 = { class: "p-3 bg-indigo-50 rounded-xl text-indigo-600" };
const _hoisted_8 = { class: "text-2xl font-bold text-gray-900" };
const _hoisted_9 = { class: "bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center space-x-4" };
const _hoisted_10 = { class: "p-3 bg-green-50 rounded-xl text-green-600" };
const _hoisted_11 = { class: "text-2xl font-bold text-gray-900" };
const _hoisted_12 = { class: "bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center space-x-4" };
const _hoisted_13 = { class: "p-3 bg-red-50 rounded-xl text-red-600" };
const _hoisted_14 = { class: "text-2xl font-bold text-gray-900" };
const _hoisted_15 = { class: "bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden" };
const _hoisted_16 = {
  key: 0,
  class: "flex flex-col items-center justify-center py-24 space-y-4"
};
const _hoisted_17 = {
  key: 1,
  class: "overflow-x-auto"
};
const _hoisted_18 = { class: "min-w-full divide-y divide-gray-200" };
const _hoisted_19 = { class: "bg-white divide-y divide-gray-100" };
const _hoisted_20 = { class: "px-6 py-4 whitespace-nowrap" };
const _hoisted_21 = { class: "flex items-center" };
const _hoisted_22 = { class: "w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-50 to-purple-50 flex items-center justify-center text-indigo-600 font-bold border border-indigo-100" };
const _hoisted_23 = { class: "ml-4" };
const _hoisted_24 = { class: "text-sm font-bold text-gray-900" };
const _hoisted_25 = { class: "text-xs text-gray-400" };
const _hoisted_26 = { class: "px-6 py-4 whitespace-nowrap" };
const _hoisted_27 = { class: "flex items-center text-sm text-gray-600" };
const _hoisted_28 = { class: "px-6 py-4 whitespace-nowrap" };
const _hoisted_29 = { class: "px-6 py-4 whitespace-nowrap text-sm text-gray-500" };
const _hoisted_30 = { class: "px-6 py-4 whitespace-nowrap text-right text-sm" };
const _hoisted_31 = { class: "flex items-center justify-end space-x-2" };
const _hoisted_32 = ["onClick"];
const _hoisted_33 = ["onClick", "disabled"];
const _hoisted_34 = { key: 0 };
const _hoisted_35 = {
  colspan: "5",
  class: "px-6 py-12 text-center"
};
const _hoisted_36 = { class: "flex flex-col items-center justify-center space-y-3" };
const _hoisted_37 = { class: "w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center" };
const _hoisted_38 = {
  key: 0,
  class: "fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
};
const _hoisted_39 = { class: "bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden animate-in fade-in zoom-in duration-200" };
const _hoisted_40 = { class: "p-6 bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-between" };
const _hoisted_41 = { class: "text-xl font-bold text-white" };
const _hoisted_42 = {
  key: 0,
  class: "bg-red-50 border-l-4 border-red-500 p-4 rounded-xl flex items-center mb-4"
};
const _hoisted_43 = { class: "text-sm text-red-700 font-medium" };
const _hoisted_44 = { class: "relative" };
const _hoisted_45 = {
  key: 0,
  class: "mt-1 text-xs text-red-600 font-bold"
};
const _hoisted_46 = { class: "relative" };
const _hoisted_47 = {
  key: 0,
  class: "mt-1 text-xs text-red-600 font-bold"
};
const _hoisted_48 = { key: 1 };
const _hoisted_49 = { class: "block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2" };
const _hoisted_50 = { class: "relative" };
const _hoisted_51 = ["required"];
const _hoisted_52 = {
  key: 0,
  class: "mt-1 text-xs text-red-600 font-bold"
};
const _hoisted_53 = {
  key: 2,
  class: "flex items-center space-x-3 pt-2"
};
const _hoisted_54 = { class: "flex items-center space-x-4 pt-4" };
const _hoisted_55 = ["disabled"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "SuperAdminManagementPage",
  setup(__props) {
    const { user: currentUser } = useAuth();
    const { showSuccess, showError, showConfirm } = useSwal();
    const superAdmins = ref([]);
    const loading = ref(false);
    const saving = ref(false);
    const showModal = ref(false);
    const isEditing = ref(false);
    const form = ref({
      id: null,
      name: "",
      email: "",
      password: "",
      is_active: true
    });
    const errors = ref({});
    const clearError = (field) => {
      if (errors.value[field]) {
        delete errors.value[field];
      }
      if (errors.value.general) {
        errors.value.general = null;
      }
    };
    const fetchSuperAdmins = async () => {
      loading.value = true;
      try {
        const data = await ownerAPI.getSuperAdmins();
        superAdmins.value = data;
      } catch (error) {
        console.error("Error fetching superadmins:", error);
      } finally {
        loading.value = false;
      }
    };
    const openCreateModal = () => {
      isEditing.value = false;
      errors.value = {};
      form.value = {
        id: null,
        name: "",
        email: "",
        password: "",
        is_active: true
      };
      showModal.value = true;
    };
    const editAdmin = (admin) => {
      isEditing.value = true;
      errors.value = {};
      form.value = {
        id: admin.id,
        name: admin.name,
        email: admin.email,
        password: "",
        is_active: !!admin.is_active
      };
      showModal.value = true;
    };
    const saveAdmin = async () => {
      saving.value = true;
      errors.value = {};
      try {
        if (isEditing.value && form.value.id) {
          await ownerAPI.updateSuperAdmin(form.value.id, form.value);
          showSuccess("Success", "Superadmin updated successfully");
        } else {
          await ownerAPI.createSuperAdmin(form.value);
          showSuccess("Success", "Superadmin created successfully");
        }
        await fetchSuperAdmins();
        showModal.value = false;
      } catch (error) {
        if (error.response?.status === 422) {
          const backendErrors = error.response.data.errors;
          Object.keys(backendErrors).forEach((key) => {
            errors.value[key] = backendErrors[key][0];
          });
          errors.value.general = "Please correct the errors below.";
        } else {
          showError("Error", "An unexpected error occurred. Please try again.");
        }
        console.error("Error saving superadmin:", error);
      } finally {
        saving.value = false;
      }
    };
    const confirmDelete = async (admin) => {
      if (await showConfirm("Delete Superadmin", `Are you sure you want to delete superadmin "${admin.name}"? This action cannot be undone.`, "Yes, delete")) {
        try {
          await ownerAPI.deleteSuperAdmin(admin.id);
          showSuccess("Deleted", "Superadmin has been deleted.");
          await fetchSuperAdmins();
        } catch (error) {
          showError("Error", "Failed to delete superadmin.");
          console.error("Error deleting superadmin:", error);
        }
      }
    };
    onMounted(() => {
      fetchSuperAdmins();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          _cache[9] || (_cache[9] = createBaseVNode("div", null, [
            createBaseVNode("h1", { class: "text-3xl font-extrabold text-gray-900 tracking-tight" }, "Superadmin Management"),
            createBaseVNode("p", { class: "text-gray-500 mt-1" }, "Add, update, and manage high-level system administrators")
          ], -1)),
          createBaseVNode("div", _hoisted_3, [
            createBaseVNode("button", {
              onClick: fetchSuperAdmins,
              disabled: loading.value,
              class: "p-2.5 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition-all shadow-sm flex items-center space-x-2 disabled:opacity-50",
              title: "Refresh List"
            }, [
              createVNode(unref(RefreshCw), {
                class: normalizeClass(["w-5 h-5 text-gray-600", loading.value ? "animate-spin" : ""])
              }, null, 8, ["class"])
            ], 8, _hoisted_4),
            createBaseVNode("button", {
              onClick: openCreateModal,
              class: "px-5 py-2.5 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 hover:shadow-lg transition-all flex items-center space-x-2 font-semibold"
            }, [
              createVNode(unref(Plus), { class: "w-5 h-5" }),
              _cache[8] || (_cache[8] = createBaseVNode("span", null, "New Superadmin", -1))
            ])
          ])
        ]),
        createBaseVNode("div", _hoisted_5, [
          createBaseVNode("div", _hoisted_6, [
            createBaseVNode("div", _hoisted_7, [
              createVNode(unref(ShieldAlert), { class: "w-6 h-6" })
            ]),
            createBaseVNode("div", null, [
              _cache[10] || (_cache[10] = createBaseVNode("p", { class: "text-sm font-medium text-gray-500" }, "Total Superadmins", -1)),
              createBaseVNode("h3", _hoisted_8, toDisplayString(superAdmins.value.length), 1)
            ])
          ]),
          createBaseVNode("div", _hoisted_9, [
            createBaseVNode("div", _hoisted_10, [
              createVNode(unref(UserCheck), { class: "w-6 h-6" })
            ]),
            createBaseVNode("div", null, [
              _cache[11] || (_cache[11] = createBaseVNode("p", { class: "text-sm font-medium text-gray-500" }, "Active Admins", -1)),
              createBaseVNode("h3", _hoisted_11, toDisplayString(superAdmins.value.filter((a) => a.is_active).length), 1)
            ])
          ]),
          createBaseVNode("div", _hoisted_12, [
            createBaseVNode("div", _hoisted_13, [
              createVNode(unref(UserX), { class: "w-6 h-6" })
            ]),
            createBaseVNode("div", null, [
              _cache[12] || (_cache[12] = createBaseVNode("p", { class: "text-sm font-medium text-gray-500" }, "Disabled Accounts", -1)),
              createBaseVNode("h3", _hoisted_14, toDisplayString(superAdmins.value.filter((a) => !a.is_active).length), 1)
            ])
          ])
        ]),
        createBaseVNode("div", _hoisted_15, [
          loading.value && superAdmins.value.length === 0 ? (openBlock(), createElementBlock("div", _hoisted_16, [..._cache[13] || (_cache[13] = [
            createBaseVNode("div", { class: "animate-spin rounded-full h-12 w-12 border-4 border-indigo-600/20 border-t-indigo-600" }, null, -1),
            createBaseVNode("p", { class: "text-gray-400 font-medium animate-pulse" }, "Loading amazing admins...", -1)
          ])])) : (openBlock(), createElementBlock("div", _hoisted_17, [
            createBaseVNode("table", _hoisted_18, [
              _cache[15] || (_cache[15] = createBaseVNode("thead", { class: "bg-gray-50/50" }, [
                createBaseVNode("tr", null, [
                  createBaseVNode("th", { class: "px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-widest" }, "Admin Details"),
                  createBaseVNode("th", { class: "px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-widest" }, "Email"),
                  createBaseVNode("th", { class: "px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-widest" }, "Status"),
                  createBaseVNode("th", { class: "px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-widest" }, "Created At"),
                  createBaseVNode("th", { class: "px-6 py-4 text-right text-xs font-bold text-gray-500 uppercase tracking-widest" }, "Actions")
                ])
              ], -1)),
              createBaseVNode("tbody", _hoisted_19, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(superAdmins.value, (admin) => {
                  return openBlock(), createElementBlock("tr", {
                    key: admin.id,
                    class: "hover:bg-indigo-50/30 transition-colors"
                  }, [
                    createBaseVNode("td", _hoisted_20, [
                      createBaseVNode("div", _hoisted_21, [
                        createBaseVNode("div", _hoisted_22, toDisplayString(admin.name.charAt(0)), 1),
                        createBaseVNode("div", _hoisted_23, [
                          createBaseVNode("div", _hoisted_24, toDisplayString(admin.name), 1),
                          createBaseVNode("div", _hoisted_25, "ID: #" + toDisplayString(admin.id), 1)
                        ])
                      ])
                    ]),
                    createBaseVNode("td", _hoisted_26, [
                      createBaseVNode("div", _hoisted_27, [
                        createVNode(unref(Mail), { class: "w-4 h-4 mr-2 text-gray-400" }),
                        createTextVNode(" " + toDisplayString(admin.email), 1)
                      ])
                    ]),
                    createBaseVNode("td", _hoisted_28, [
                      createBaseVNode("span", {
                        class: normalizeClass([
                          "px-3 py-1 text-xs font-bold rounded-full",
                          admin.is_active ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                        ])
                      }, toDisplayString(admin.is_active ? "Active" : "Disabled"), 3)
                    ]),
                    createBaseVNode("td", _hoisted_29, toDisplayString(new Date(admin.created_at).toLocaleDateString()), 1),
                    createBaseVNode("td", _hoisted_30, [
                      createBaseVNode("div", _hoisted_31, [
                        createBaseVNode("button", {
                          onClick: ($event) => editAdmin(admin),
                          class: "p-2 text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors"
                        }, [
                          createVNode(unref(Pen), { class: "w-4 h-4" })
                        ], 8, _hoisted_32),
                        createBaseVNode("button", {
                          onClick: ($event) => confirmDelete(admin),
                          class: "p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors",
                          disabled: admin.id === unref(currentUser)?.id
                        }, [
                          createVNode(unref(Trash2), { class: "w-4 h-4" })
                        ], 8, _hoisted_33)
                      ])
                    ])
                  ]);
                }), 128)),
                superAdmins.value.length === 0 && !loading.value ? (openBlock(), createElementBlock("tr", _hoisted_34, [
                  createBaseVNode("td", _hoisted_35, [
                    createBaseVNode("div", _hoisted_36, [
                      createBaseVNode("div", _hoisted_37, [
                        createVNode(unref(ShieldOff), { class: "w-8 h-8 text-gray-300" })
                      ]),
                      _cache[14] || (_cache[14] = createBaseVNode("p", { class: "text-gray-500 font-medium" }, "No superadmins found.", -1))
                    ])
                  ])
                ])) : createCommentVNode("", true)
              ])
            ])
          ]))
        ]),
        showModal.value ? (openBlock(), createElementBlock("div", _hoisted_38, [
          createBaseVNode("div", _hoisted_39, [
            createBaseVNode("div", _hoisted_40, [
              createBaseVNode("h3", _hoisted_41, toDisplayString(isEditing.value ? "Update Admin" : "New Superadmin"), 1),
              createBaseVNode("button", {
                onClick: _cache[0] || (_cache[0] = ($event) => showModal.value = false),
                class: "p-2 hover:bg-white/10 rounded-lg transition-colors"
              }, [
                createVNode(unref(X), { class: "w-5 h-5 text-white" })
              ])
            ]),
            createBaseVNode("form", {
              onSubmit: withModifiers(saveAdmin, ["prevent"]),
              class: "p-8 space-y-5"
            }, [
              errors.value.general ? (openBlock(), createElementBlock("div", _hoisted_42, [
                createVNode(unref(ShieldAlert), { class: "w-5 h-5 text-red-500 mr-3 shrink-0" }),
                createBaseVNode("p", _hoisted_43, toDisplayString(errors.value.general), 1)
              ])) : createCommentVNode("", true),
              createBaseVNode("div", null, [
                _cache[16] || (_cache[16] = createBaseVNode("label", { class: "block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2" }, "Display Name", -1)),
                createBaseVNode("div", _hoisted_44, [
                  createVNode(unref(User), { class: "absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-300" }),
                  withDirectives(createBaseVNode("input", {
                    "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => form.value.name = $event),
                    onInput: _cache[2] || (_cache[2] = ($event) => clearError("name")),
                    type: "text",
                    required: "",
                    class: "w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all outline-none",
                    placeholder: "e.g. Admin Extraordinaire"
                  }, null, 544), [
                    [vModelText, form.value.name]
                  ])
                ]),
                errors.value.name ? (openBlock(), createElementBlock("p", _hoisted_45, toDisplayString(errors.value.name), 1)) : createCommentVNode("", true)
              ]),
              createBaseVNode("div", null, [
                _cache[17] || (_cache[17] = createBaseVNode("label", { class: "block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2" }, "Email Address", -1)),
                createBaseVNode("div", _hoisted_46, [
                  createVNode(unref(Mail), { class: "absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-300" }),
                  withDirectives(createBaseVNode("input", {
                    "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => form.value.email = $event),
                    onInput: _cache[4] || (_cache[4] = ($event) => clearError("email")),
                    type: "email",
                    required: "",
                    class: "w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all outline-none",
                    placeholder: "admin@smartlib.com"
                  }, null, 544), [
                    [vModelText, form.value.email]
                  ])
                ]),
                errors.value.email ? (openBlock(), createElementBlock("p", _hoisted_47, toDisplayString(errors.value.email), 1)) : createCommentVNode("", true)
              ]),
              !isEditing.value || form.value.password ? (openBlock(), createElementBlock("div", _hoisted_48, [
                createBaseVNode("label", _hoisted_49, toDisplayString(isEditing.value ? "Update Password (optional)" : "Secure Password"), 1),
                createBaseVNode("div", _hoisted_50, [
                  createVNode(unref(Lock), { class: "absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-300" }),
                  withDirectives(createBaseVNode("input", {
                    "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => form.value.password = $event),
                    onInput: _cache[6] || (_cache[6] = ($event) => clearError("password")),
                    type: "password",
                    required: !isEditing.value,
                    class: "w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all outline-none",
                    placeholder: "••••••••"
                  }, null, 40, _hoisted_51), [
                    [vModelText, form.value.password]
                  ])
                ]),
                errors.value.password ? (openBlock(), createElementBlock("p", _hoisted_52, toDisplayString(errors.value.password), 1)) : createCommentVNode("", true)
              ])) : createCommentVNode("", true),
              isEditing.value ? (openBlock(), createElementBlock("div", _hoisted_53, [
                createBaseVNode("button", {
                  type: "button",
                  onClick: _cache[7] || (_cache[7] = ($event) => form.value.is_active = !form.value.is_active),
                  class: normalizeClass([
                    "w-12 h-6 rounded-full relative transition-colors duration-200 outline-none",
                    form.value.is_active ? "bg-indigo-600" : "bg-gray-200"
                  ])
                }, [
                  createBaseVNode("div", {
                    class: normalizeClass(["absolute top-1 w-4 h-4 bg-white rounded-full transition-all duration-200", form.value.is_active ? "left-7" : "left-1"])
                  }, null, 2)
                ], 2),
                _cache[18] || (_cache[18] = createBaseVNode("span", { class: "text-sm font-bold text-gray-700" }, "Account Active", -1))
              ])) : createCommentVNode("", true),
              createBaseVNode("div", _hoisted_54, [
                createBaseVNode("button", {
                  type: "submit",
                  disabled: saving.value,
                  class: "flex-1 px-6 py-3 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 hover:shadow-lg transition-all disabled:opacity-50 flex items-center justify-center space-x-2 shadow-indigo-100"
                }, [
                  saving.value ? (openBlock(), createBlock(unref(LoaderCircle), {
                    key: 0,
                    class: "w-5 h-5 animate-spin"
                  })) : createCommentVNode("", true),
                  createBaseVNode("span", null, toDisplayString(saving.value ? "Processing..." : isEditing.value ? "Save Changes" : "Create Account"), 1)
                ], 8, _hoisted_55)
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
