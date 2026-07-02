import { d as defineComponent, r as ref, o as onMounted, a as createElementBlock, b as createBaseVNode, l as createCommentVNode, f as createVNode, n as normalizeClass, u as unref, t as toDisplayString, F as Fragment, j as renderList, z as withModifiers, p as withDirectives, v as vModelText, D as vModelSelect, X as adminAPI, i as createTextVNode, k as openBlock } from "./main-DKJzpCzk.js";
import { R as RefreshCw } from "./refresh-cw-vjkPNSrg.js";
import { P as Plus } from "./plus-CR_-MeGX.js";
import { X } from "./x-BLKH3q-c.js";
import { B as Building2 } from "./building-2-BtkbfY_f.js";
import { C as CircleAlert } from "./circle-alert-CKXiS_Iq.js";
/* empty css               */
import "./createLucideIcon-TQ5d7bQA.js";
const _hoisted_1 = { class: "p-6 space-y-6" };
const _hoisted_2 = { class: "flex items-center justify-between" };
const _hoisted_3 = { class: "flex items-center space-x-3" };
const _hoisted_4 = ["disabled"];
const _hoisted_5 = { class: "text-sm font-medium" };
const _hoisted_6 = { class: "bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden" };
const _hoisted_7 = {
  key: 0,
  class: "flex items-center justify-center py-20"
};
const _hoisted_8 = {
  key: 1,
  class: "min-w-full divide-y divide-gray-200"
};
const _hoisted_9 = { class: "bg-white divide-y divide-gray-200" };
const _hoisted_10 = { class: "px-6 py-4 whitespace-nowrap" };
const _hoisted_11 = { class: "flex items-center" };
const _hoisted_12 = { class: "w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold" };
const _hoisted_13 = { class: "ml-4" };
const _hoisted_14 = { class: "text-sm font-medium text-gray-900" };
const _hoisted_15 = { class: "text-xs text-gray-500" };
const _hoisted_16 = { class: "px-6 py-4 whitespace-nowrap" };
const _hoisted_17 = {
  key: 0,
  class: "flex items-center text-sm text-gray-900"
};
const _hoisted_18 = {
  key: 1,
  class: "text-sm text-red-500 italic flex items-center"
};
const _hoisted_19 = { class: "px-6 py-4 whitespace-nowrap" };
const _hoisted_20 = { class: "text-sm text-gray-900" };
const _hoisted_21 = { class: "text-xs text-gray-500" };
const _hoisted_22 = { class: "px-6 py-4 whitespace-nowrap" };
const _hoisted_23 = { class: "px-6 py-4 whitespace-nowrap text-right text-sm font-medium" };
const _hoisted_24 = ["onClick"];
const _hoisted_25 = ["onClick"];
const _hoisted_26 = { key: 0 };
const _hoisted_27 = {
  key: 0,
  class: "fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
};
const _hoisted_28 = { class: "bg-white rounded-xl shadow-xl max-w-md w-full" };
const _hoisted_29 = { class: "p-6 border-b border-gray-200 flex items-center justify-between" };
const _hoisted_30 = { class: "text-xl font-bold text-gray-900" };
const _hoisted_31 = { key: 0 };
const _hoisted_32 = { key: 1 };
const _hoisted_33 = ["value"];
const _hoisted_34 = { class: "flex items-center space-x-3 pt-6 border-t border-gray-100" };
const _hoisted_35 = ["disabled"];
const _hoisted_36 = {
  key: 0,
  class: "animate-spin rounded-full h-4 w-4 border-b-2 border-white"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "LibrarianManagementPage",
  setup(__props) {
    const librarians = ref([]);
    const libraries = ref([]);
    const loading = ref(false);
    const saving = ref(false);
    const showModal = ref(false);
    const isEditing = ref(false);
    const form = ref({
      id: null,
      name: "",
      email: "",
      crn: "",
      password: "",
      library_id: null,
      status: "approved"
    });
    const fetchLibrarians = async () => {
      loading.value = true;
      try {
        const data = await adminAPI.getLibrarians();
        librarians.value = data;
      } catch (error) {
        console.error("Error fetching librarians:", error);
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
        password: "",
        library_id: libraries.value[0]?.id || null,
        status: "approved"
      };
      showModal.value = true;
    };
    const editLibrarian = (librarian) => {
      isEditing.value = true;
      form.value = {
        id: librarian.id,
        name: librarian.name,
        email: librarian.email,
        crn: librarian.crn,
        password: "",
        library_id: librarian.library_id,
        status: librarian.status
      };
      showModal.value = true;
    };
    const saveLibrarian = async () => {
      saving.value = true;
      try {
        if (isEditing.value && form.value.id) {
          await adminAPI.updateLibrarian(form.value.id, form.value);
        } else {
          await adminAPI.createLibrarian(form.value);
        }
        await fetchLibrarians();
        showModal.value = false;
      } catch (error) {
        console.error("Error saving librarian:", error);
      } finally {
        saving.value = false;
      }
    };
    const confirmDelete = async (librarian) => {
      if (confirm(`Are you sure you want to delete librarian "${librarian.name}"?`)) {
        try {
          await adminAPI.deleteLibrarian(librarian.id);
          await fetchLibrarians();
        } catch (error) {
          console.error("Error deleting librarian:", error);
        }
      }
    };
    onMounted(() => {
      fetchLibrarians();
      fetchLibraries();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          _cache[8] || (_cache[8] = createBaseVNode("div", null, [
            createBaseVNode("h1", { class: "text-3xl font-bold text-gray-900" }, "Librarian Management"),
            createBaseVNode("p", { class: "text-gray-600 mt-1" }, "Manage library staff and their assignments")
          ], -1)),
          createBaseVNode("div", _hoisted_3, [
            createBaseVNode("button", {
              onClick: fetchLibrarians,
              disabled: loading.value,
              class: "px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center space-x-2 disabled:opacity-50"
            }, [
              createVNode(unref(RefreshCw), {
                class: normalizeClass(["w-4 h-4", loading.value ? "animate-spin" : ""])
              }, null, 8, ["class"]),
              createBaseVNode("span", _hoisted_5, toDisplayString(loading.value ? "Refreshing..." : "Refresh"), 1)
            ], 8, _hoisted_4),
            createBaseVNode("button", {
              onClick: openCreateModal,
              class: "px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all flex items-center space-x-2"
            }, [
              createVNode(unref(Plus), { class: "w-4 h-4" }),
              _cache[7] || (_cache[7] = createBaseVNode("span", { class: "text-sm font-medium" }, "Add Librarian", -1))
            ])
          ])
        ]),
        createBaseVNode("div", _hoisted_6, [
          loading.value && librarians.value.length === 0 ? (openBlock(), createElementBlock("div", _hoisted_7, [..._cache[9] || (_cache[9] = [
            createBaseVNode("div", { class: "animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600" }, null, -1)
          ])])) : (openBlock(), createElementBlock("table", _hoisted_8, [
            _cache[12] || (_cache[12] = createBaseVNode("thead", { class: "bg-gray-50" }, [
              createBaseVNode("tr", null, [
                createBaseVNode("th", { class: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" }, "Librarian"),
                createBaseVNode("th", { class: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" }, "Assigned Library"),
                createBaseVNode("th", { class: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" }, "Contact"),
                createBaseVNode("th", { class: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" }, "Status"),
                createBaseVNode("th", { class: "px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider" }, "Actions")
              ])
            ], -1)),
            createBaseVNode("tbody", _hoisted_9, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(librarians.value, (librarian) => {
                return openBlock(), createElementBlock("tr", {
                  key: librarian.id,
                  class: "hover:bg-gray-50 transition-colors"
                }, [
                  createBaseVNode("td", _hoisted_10, [
                    createBaseVNode("div", _hoisted_11, [
                      createBaseVNode("div", _hoisted_12, toDisplayString(librarian.name.charAt(0)), 1),
                      createBaseVNode("div", _hoisted_13, [
                        createBaseVNode("div", _hoisted_14, toDisplayString(librarian.name), 1),
                        createBaseVNode("div", _hoisted_15, "CRN: " + toDisplayString(librarian.crn), 1)
                      ])
                    ])
                  ]),
                  createBaseVNode("td", _hoisted_16, [
                    librarian.library ? (openBlock(), createElementBlock("div", _hoisted_17, [
                      createVNode(unref(Building2), { class: "w-4 h-4 mr-2 text-gray-400" }),
                      createTextVNode(" " + toDisplayString(librarian.library.name), 1)
                    ])) : (openBlock(), createElementBlock("div", _hoisted_18, [
                      createVNode(unref(CircleAlert), { class: "w-4 h-4 mr-2" }),
                      _cache[10] || (_cache[10] = createTextVNode(" Unassigned ", -1))
                    ]))
                  ]),
                  createBaseVNode("td", _hoisted_19, [
                    createBaseVNode("div", _hoisted_20, toDisplayString(librarian.email), 1),
                    createBaseVNode("div", _hoisted_21, toDisplayString(librarian.phone || "No phone"), 1)
                  ]),
                  createBaseVNode("td", _hoisted_22, [
                    createBaseVNode("span", {
                      class: normalizeClass([
                        "px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full",
                        librarian.status === "approved" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                      ])
                    }, toDisplayString(librarian.status), 3)
                  ]),
                  createBaseVNode("td", _hoisted_23, [
                    createBaseVNode("button", {
                      onClick: ($event) => editLibrarian(librarian),
                      class: "text-indigo-600 hover:text-indigo-900 mr-4"
                    }, "Edit", 8, _hoisted_24),
                    createBaseVNode("button", {
                      onClick: ($event) => confirmDelete(librarian),
                      class: "text-red-600 hover:text-red-900"
                    }, "Delete", 8, _hoisted_25)
                  ])
                ]);
              }), 128)),
              librarians.value.length === 0 && !loading.value ? (openBlock(), createElementBlock("tr", _hoisted_26, [..._cache[11] || (_cache[11] = [
                createBaseVNode("td", {
                  colspan: "5",
                  class: "px-6 py-12 text-center text-gray-500"
                }, " No librarians found. ", -1)
              ])])) : createCommentVNode("", true)
            ])
          ]))
        ]),
        showModal.value ? (openBlock(), createElementBlock("div", _hoisted_27, [
          createBaseVNode("div", _hoisted_28, [
            createBaseVNode("div", _hoisted_29, [
              createBaseVNode("h3", _hoisted_30, toDisplayString(isEditing.value ? "Edit Librarian" : "Add New Librarian"), 1),
              createBaseVNode("button", {
                onClick: _cache[0] || (_cache[0] = ($event) => showModal.value = false),
                class: "p-2 hover:bg-gray-100 rounded-lg transition-colors"
              }, [
                createVNode(unref(X), { class: "w-5 h-5 text-gray-500" })
              ])
            ]),
            createBaseVNode("form", {
              onSubmit: withModifiers(saveLibrarian, ["prevent"]),
              class: "p-6 space-y-4"
            }, [
              createBaseVNode("div", null, [
                _cache[13] || (_cache[13] = createBaseVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Full Name", -1)),
                withDirectives(createBaseVNode("input", {
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => form.value.name = $event),
                  type: "text",
                  required: "",
                  class: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500",
                  placeholder: "e.g. John Doe"
                }, null, 512), [
                  [vModelText, form.value.name]
                ])
              ]),
              createBaseVNode("div", null, [
                _cache[14] || (_cache[14] = createBaseVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Email Address", -1)),
                withDirectives(createBaseVNode("input", {
                  "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => form.value.email = $event),
                  type: "email",
                  required: "",
                  class: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500",
                  placeholder: "john@example.com"
                }, null, 512), [
                  [vModelText, form.value.email]
                ])
              ]),
              !isEditing.value ? (openBlock(), createElementBlock("div", _hoisted_31, [
                _cache[15] || (_cache[15] = createBaseVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "CRN / Staff ID", -1)),
                withDirectives(createBaseVNode("input", {
                  "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => form.value.crn = $event),
                  type: "text",
                  required: "",
                  class: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500",
                  placeholder: "e.g. LIB001"
                }, null, 512), [
                  [vModelText, form.value.crn]
                ])
              ])) : createCommentVNode("", true),
              !isEditing.value ? (openBlock(), createElementBlock("div", _hoisted_32, [
                _cache[16] || (_cache[16] = createBaseVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Password", -1)),
                withDirectives(createBaseVNode("input", {
                  "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => form.value.password = $event),
                  type: "password",
                  required: "",
                  class: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500",
                  placeholder: "Min. 8 characters"
                }, null, 512), [
                  [vModelText, form.value.password]
                ])
              ])) : createCommentVNode("", true),
              createBaseVNode("div", null, [
                _cache[18] || (_cache[18] = createBaseVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Assign Library", -1)),
                withDirectives(createBaseVNode("select", {
                  "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => form.value.library_id = $event),
                  required: "",
                  class: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                }, [
                  _cache[17] || (_cache[17] = createBaseVNode("option", { value: null }, "Select a Library", -1)),
                  (openBlock(true), createElementBlock(Fragment, null, renderList(libraries.value, (library) => {
                    return openBlock(), createElementBlock("option", {
                      key: library.id,
                      value: library.id
                    }, toDisplayString(library.name), 9, _hoisted_33);
                  }), 128))
                ], 512), [
                  [vModelSelect, form.value.library_id]
                ])
              ]),
              createBaseVNode("div", _hoisted_34, [
                createBaseVNode("button", {
                  type: "submit",
                  disabled: saving.value,
                  class: "flex-1 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors disabled:opacity-50 flex items-center justify-center space-x-2"
                }, [
                  saving.value ? (openBlock(), createElementBlock("span", _hoisted_36)) : createCommentVNode("", true),
                  createBaseVNode("span", null, toDisplayString(saving.value ? "Saving..." : isEditing.value ? "Update Librarian" : "Create Librarian"), 1)
                ], 8, _hoisted_35),
                createBaseVNode("button", {
                  type: "button",
                  onClick: _cache[6] || (_cache[6] = ($event) => showModal.value = false),
                  class: "px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                }, " Cancel ")
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
