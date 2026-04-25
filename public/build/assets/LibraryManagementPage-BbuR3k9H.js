import { d as defineComponent, r as ref, o as onMounted, c as createElementBlock, b as createBaseVNode, m as createCommentVNode, f as createVNode, n as normalizeClass, u as unref, t as toDisplayString, F as Fragment, h as renderList, s as withModifiers, v as withDirectives, x as vModelText, z as vModelCheckbox, a0 as adminAPI, j as createTextVNode, w as withCtx, g as resolveComponent, i as openBlock } from "./main-DCJXrkf-.js";
import { u as useSwal } from "./useSwal-BUxo5JBv.js";
import { R as RefreshCw } from "./refresh-cw-DCq6mbXe.js";
import { P as Plus } from "./plus-D04LIZ3g.js";
import { X } from "./x-BkNPvJ70.js";
import { W as Wifi } from "./wifi-B7TBiogM.js";
import { B as Building2 } from "./building-2-DcNTcpv2.js";
import { M as MapPin } from "./map-pin-YMhwiUzx.js";
import { P as Pen } from "./pen-BpnhwJUf.js";
import { T as Trash2 } from "./trash-2-CV7tnsqU.js";
import { C as ChevronRight } from "./chevron-right-SSQMZ9HW.js";
/* empty css               */
import "./createLucideIcon-CDsoUk2K.js";
const _hoisted_1 = { class: "p-6 space-y-6" };
const _hoisted_2 = { class: "flex items-center justify-between" };
const _hoisted_3 = { class: "flex items-center space-x-3" };
const _hoisted_4 = ["disabled"];
const _hoisted_5 = { class: "text-sm font-medium" };
const _hoisted_6 = {
  key: 0,
  class: "flex items-center justify-center py-20"
};
const _hoisted_7 = {
  key: 1,
  class: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
};
const _hoisted_8 = { class: "h-40 bg-gray-100 relative" };
const _hoisted_9 = ["src"];
const _hoisted_10 = {
  key: 1,
  class: "w-full h-full flex items-center justify-center text-gray-400 bg-gradient-to-br from-indigo-50 to-purple-50"
};
const _hoisted_11 = { class: "absolute top-4 right-4" };
const _hoisted_12 = { class: "p-6 flex-1 flex flex-col" };
const _hoisted_13 = { class: "flex items-start justify-between mb-2" };
const _hoisted_14 = { class: "text-lg font-bold text-gray-900" };
const _hoisted_15 = { class: "text-sm text-gray-500 flex items-center mt-1" };
const _hoisted_16 = { class: "text-sm text-gray-600 line-clamp-2 mb-4 flex-1" };
const _hoisted_17 = { class: "grid grid-cols-2 gap-4 my-4" };
const _hoisted_18 = { class: "p-3 bg-indigo-50 rounded-lg" };
const _hoisted_19 = { class: "text-lg font-bold text-indigo-900" };
const _hoisted_20 = { class: "p-3 bg-purple-50 rounded-lg" };
const _hoisted_21 = { class: "text-lg font-bold text-purple-900" };
const _hoisted_22 = { class: "flex items-center justify-between pt-4 border-t border-gray-100" };
const _hoisted_23 = { class: "flex items-center space-x-2" };
const _hoisted_24 = ["onClick"];
const _hoisted_25 = ["onClick"];
const _hoisted_26 = {
  key: 2,
  class: "fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
};
const _hoisted_27 = { class: "bg-white rounded-xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto" };
const _hoisted_28 = { class: "p-6 border-b border-gray-200 flex items-center justify-between sticky top-0 bg-white z-10" };
const _hoisted_29 = { class: "text-xl font-bold text-gray-900" };
const _hoisted_30 = { class: "grid grid-cols-1 md:grid-cols-2 gap-6" };
const _hoisted_31 = { class: "md:col-span-2" };
const _hoisted_32 = { class: "md:col-span-2" };
const _hoisted_33 = { class: "md:col-span-2" };
const _hoisted_34 = { class: "md:col-span-2" };
const _hoisted_35 = { class: "relative" };
const _hoisted_36 = { class: "flex items-center space-x-6 h-full pt-6" };
const _hoisted_37 = { class: "flex items-center space-x-2 cursor-pointer group" };
const _hoisted_38 = { class: "relative flex items-center" };
const _hoisted_39 = { class: "flex items-center space-x-2 cursor-pointer group" };
const _hoisted_40 = { class: "relative flex items-center" };
const _hoisted_41 = { class: "flex items-center space-x-3 pt-6 border-t border-gray-100" };
const _hoisted_42 = ["disabled"];
const _hoisted_43 = {
  key: 0,
  class: "animate-spin rounded-full h-4 w-4 border-b-2 border-white"
};
const _hoisted_44 = { class: "font-medium" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "LibraryManagementPage",
  setup(__props) {
    const libraries = ref([]);
    const loading = ref(false);
    const saving = ref(false);
    const showModal = ref(false);
    const isEditing = ref(false);
    const form = ref({
      id: null,
      name: "",
      address: "",
      latitude: null,
      longitude: null,
      opening_hours: "08:00 AM - 10:00 PM",
      description: "",
      wifi_password: "",
      parking_available: true,
      is_active: true,
      photo: null
    });
    const handlePhotoUpload = (event) => {
      form.value.photo = event.target.files[0];
    };
    const fetchLibraries = async () => {
      loading.value = true;
      try {
        const data = await adminAPI.getLibraries();
        libraries.value = data;
      } catch (error) {
        console.error("Error fetching libraries:", error);
      } finally {
        loading.value = false;
      }
    };
    const openCreateModal = () => {
      isEditing.value = false;
      form.value = {
        id: null,
        name: "",
        address: "",
        latitude: null,
        longitude: null,
        opening_hours: "08:00 AM - 10:00 PM",
        description: "",
        wifi_password: "",
        parking_available: true,
        is_active: true,
        photo: null
      };
      showModal.value = true;
    };
    const editLibrary = (library) => {
      isEditing.value = true;
      form.value = {
        id: library.id,
        name: library.name,
        address: library.address,
        latitude: library.latitude,
        longitude: library.longitude,
        opening_hours: library.opening_hours,
        description: library.description || "",
        wifi_password: library.wifi_password || "",
        parking_available: !!library.parking_available,
        is_active: !!library.is_active,
        photo: null
      };
      showModal.value = true;
    };
    const { showConfirm, showSuccess, showError } = useSwal();
    const saveLibrary = async () => {
      saving.value = true;
      try {
        const formData = new FormData();
        formData.append("name", form.value.name);
        formData.append("address", form.value.address);
        if (form.value.latitude) formData.append("latitude", form.value.latitude.toString());
        if (form.value.longitude) formData.append("longitude", form.value.longitude.toString());
        formData.append("opening_hours", form.value.opening_hours);
        formData.append("description", form.value.description || "");
        formData.append("wifi_password", form.value.wifi_password || "");
        formData.append("parking_available", form.value.parking_available ? "1" : "0");
        formData.append("is_active", form.value.is_active ? "1" : "0");
        if (form.value.photo) formData.append("photo", form.value.photo);
        if (isEditing.value && form.value.id) {
          await adminAPI.updateLibrary(form.value.id, formData);
          showSuccess("Updated!", "Library updated successfully");
        } else {
          await adminAPI.createLibrary(formData);
          showSuccess("Created!", "Library created successfully");
        }
        await fetchLibraries();
        showModal.value = false;
      } catch (error) {
        console.error("Error saving library:", error);
        showError("Save Failed", error.response?.data?.message || "An error occurred while saving the library.");
      } finally {
        saving.value = false;
      }
    };
    const confirmDelete = async (library) => {
      if (await showConfirm("Delete Library", `Are you sure you want to delete "${library.name}"? This action cannot be undone.`, "Yes, Delete")) {
        try {
          await adminAPI.deleteLibrary(library.id);
          showSuccess("Deleted!", "Library deleted successfully");
          await fetchLibraries();
        } catch (error) {
          console.error("Error deleting library:", error);
          showError("Delete Failed", error.response?.data?.message || "An error occurred while deleting the library.");
        }
      }
    };
    onMounted(() => {
      fetchLibraries();
    });
    return (_ctx, _cache) => {
      const _component_router_link = resolveComponent("router-link");
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          _cache[12] || (_cache[12] = createBaseVNode("div", null, [
            createBaseVNode("h1", { class: "text-3xl font-bold text-gray-900" }, "Library Management"),
            createBaseVNode("p", { class: "text-gray-600 mt-1" }, "Manage all registered libraries in the system")
          ], -1)),
          createBaseVNode("div", _hoisted_3, [
            createBaseVNode("button", {
              onClick: fetchLibraries,
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
              _cache[11] || (_cache[11] = createBaseVNode("span", { class: "text-sm font-medium" }, "Add Library", -1))
            ])
          ])
        ]),
        loading.value && libraries.value.length === 0 ? (openBlock(), createElementBlock("div", _hoisted_6, [..._cache[13] || (_cache[13] = [
          createBaseVNode("div", { class: "animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600" }, null, -1)
        ])])) : (openBlock(), createElementBlock("div", _hoisted_7, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(libraries.value, (library) => {
            return openBlock(), createElementBlock("div", {
              key: library.id,
              class: "bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow flex flex-col"
            }, [
              createBaseVNode("div", _hoisted_8, [
                library.photo ? (openBlock(), createElementBlock("img", {
                  key: 0,
                  src: "/storage/" + library.photo,
                  class: "w-full h-full object-cover",
                  alt: "Library cover"
                }, null, 8, _hoisted_9)) : (openBlock(), createElementBlock("div", _hoisted_10, [
                  createVNode(unref(Building2), { class: "w-12 h-12" })
                ])),
                createBaseVNode("div", _hoisted_11, [
                  createBaseVNode("span", {
                    class: normalizeClass([
                      "px-2 py-1 rounded-full text-xs font-medium shadow-sm",
                      library.is_active ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                    ])
                  }, toDisplayString(library.is_active ? "Active" : "Inactive"), 3)
                ])
              ]),
              createBaseVNode("div", _hoisted_12, [
                createBaseVNode("div", _hoisted_13, [
                  createBaseVNode("div", null, [
                    createBaseVNode("h3", _hoisted_14, toDisplayString(library.name), 1),
                    createBaseVNode("p", _hoisted_15, [
                      createVNode(unref(MapPin), { class: "w-3 h-3 mr-1" }),
                      createTextVNode(" " + toDisplayString(library.address), 1)
                    ])
                  ])
                ]),
                createBaseVNode("p", _hoisted_16, toDisplayString(library.description || "No description provided."), 1),
                createBaseVNode("div", _hoisted_17, [
                  createBaseVNode("div", _hoisted_18, [
                    _cache[14] || (_cache[14] = createBaseVNode("div", { class: "text-xs text-indigo-600 font-medium" }, "Total Seats", -1)),
                    createBaseVNode("div", _hoisted_19, toDisplayString(library.totalSeats), 1)
                  ]),
                  createBaseVNode("div", _hoisted_20, [
                    _cache[15] || (_cache[15] = createBaseVNode("div", { class: "text-xs text-purple-600 font-medium" }, "Available", -1)),
                    createBaseVNode("div", _hoisted_21, toDisplayString(library.availableSeats), 1)
                  ])
                ]),
                createBaseVNode("div", _hoisted_22, [
                  createBaseVNode("div", _hoisted_23, [
                    createBaseVNode("button", {
                      onClick: ($event) => editLibrary(library),
                      class: "p-2 text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors",
                      title: "Edit Library"
                    }, [
                      createVNode(unref(Pen), { class: "w-4 h-4" })
                    ], 8, _hoisted_24),
                    createBaseVNode("button", {
                      onClick: ($event) => confirmDelete(library),
                      class: "p-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors",
                      title: "Delete Library"
                    }, [
                      createVNode(unref(Trash2), { class: "w-4 h-4" })
                    ], 8, _hoisted_25)
                  ]),
                  createVNode(_component_router_link, {
                    to: "/superadmin/libraries/" + library.id,
                    class: "text-sm font-medium text-indigo-600 hover:text-indigo-700 flex items-center"
                  }, {
                    default: withCtx(() => [
                      _cache[16] || (_cache[16] = createTextVNode(" View Details ", -1)),
                      createVNode(unref(ChevronRight), { class: "w-4 h-4 ml-1" })
                    ]),
                    _: 1
                  }, 8, ["to"])
                ])
              ])
            ]);
          }), 128))
        ])),
        showModal.value ? (openBlock(), createElementBlock("div", _hoisted_26, [
          createBaseVNode("div", _hoisted_27, [
            createBaseVNode("div", _hoisted_28, [
              createBaseVNode("h3", _hoisted_29, toDisplayString(isEditing.value ? "Edit Library" : "Add New Library"), 1),
              createBaseVNode("button", {
                onClick: _cache[0] || (_cache[0] = ($event) => showModal.value = false),
                class: "p-2 hover:bg-gray-100 rounded-lg transition-colors"
              }, [
                createVNode(unref(X), { class: "w-5 h-5 text-gray-500" })
              ])
            ]),
            createBaseVNode("form", {
              onSubmit: withModifiers(saveLibrary, ["prevent"]),
              class: "p-6 space-y-6"
            }, [
              createBaseVNode("div", _hoisted_30, [
                createBaseVNode("div", _hoisted_31, [
                  _cache[17] || (_cache[17] = createBaseVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Library Name", -1)),
                  withDirectives(createBaseVNode("input", {
                    "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => form.value.name = $event),
                    type: "text",
                    required: "",
                    class: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500",
                    placeholder: "e.g. Central Library"
                  }, null, 512), [
                    [vModelText, form.value.name]
                  ])
                ]),
                createBaseVNode("div", _hoisted_32, [
                  _cache[18] || (_cache[18] = createBaseVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Address", -1)),
                  withDirectives(createBaseVNode("input", {
                    "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => form.value.address = $event),
                    type: "text",
                    required: "",
                    class: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500",
                    placeholder: "Full address of the library"
                  }, null, 512), [
                    [vModelText, form.value.address]
                  ])
                ]),
                createBaseVNode("div", null, [
                  _cache[19] || (_cache[19] = createBaseVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Latitude", -1)),
                  withDirectives(createBaseVNode("input", {
                    "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => form.value.latitude = $event),
                    type: "number",
                    step: "any",
                    class: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500",
                    placeholder: "e.g. 31.5204"
                  }, null, 512), [
                    [
                      vModelText,
                      form.value.latitude,
                      void 0,
                      { number: true }
                    ]
                  ])
                ]),
                createBaseVNode("div", null, [
                  _cache[20] || (_cache[20] = createBaseVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Longitude", -1)),
                  withDirectives(createBaseVNode("input", {
                    "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => form.value.longitude = $event),
                    type: "number",
                    step: "any",
                    class: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500",
                    placeholder: "e.g. 74.3587"
                  }, null, 512), [
                    [
                      vModelText,
                      form.value.longitude,
                      void 0,
                      { number: true }
                    ]
                  ])
                ]),
                createBaseVNode("div", null, [
                  _cache[21] || (_cache[21] = createBaseVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Opening Hours", -1)),
                  withDirectives(createBaseVNode("input", {
                    "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => form.value.opening_hours = $event),
                    type: "text",
                    required: "",
                    class: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500",
                    placeholder: "e.g. 08:00 AM - 10:00 PM"
                  }, null, 512), [
                    [vModelText, form.value.opening_hours]
                  ])
                ]),
                createBaseVNode("div", _hoisted_33, [
                  _cache[22] || (_cache[22] = createBaseVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Library Photo", -1)),
                  createBaseVNode("input", {
                    type: "file",
                    onChange: handlePhotoUpload,
                    accept: "image/*",
                    class: "w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
                  }, null, 32)
                ]),
                createBaseVNode("div", _hoisted_34, [
                  _cache[23] || (_cache[23] = createBaseVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Description", -1)),
                  withDirectives(createBaseVNode("textarea", {
                    "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => form.value.description = $event),
                    rows: "3",
                    class: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500",
                    placeholder: "Brief description of the library..."
                  }, null, 512), [
                    [vModelText, form.value.description]
                  ])
                ]),
                createBaseVNode("div", null, [
                  _cache[24] || (_cache[24] = createBaseVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "WiFi Password (Optional)", -1)),
                  createBaseVNode("div", _hoisted_35, [
                    createVNode(unref(Wifi), { class: "absolute left-3 top-2.5 w-4 h-4 text-gray-400" }),
                    withDirectives(createBaseVNode("input", {
                      "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => form.value.wifi_password = $event),
                      type: "text",
                      class: "w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500",
                      placeholder: "Password"
                    }, null, 512), [
                      [vModelText, form.value.wifi_password]
                    ])
                  ])
                ]),
                createBaseVNode("div", _hoisted_36, [
                  createBaseVNode("label", _hoisted_37, [
                    createBaseVNode("div", _hoisted_38, [
                      withDirectives(createBaseVNode("input", {
                        "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => form.value.parking_available = $event),
                        type: "checkbox",
                        class: "w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                      }, null, 512), [
                        [vModelCheckbox, form.value.parking_available]
                      ])
                    ]),
                    _cache[25] || (_cache[25] = createBaseVNode("span", { class: "text-sm text-gray-700 group-hover:text-indigo-600 transition-colors" }, "Parking Available", -1))
                  ]),
                  createBaseVNode("label", _hoisted_39, [
                    createBaseVNode("div", _hoisted_40, [
                      withDirectives(createBaseVNode("input", {
                        "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => form.value.is_active = $event),
                        type: "checkbox",
                        class: "w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                      }, null, 512), [
                        [vModelCheckbox, form.value.is_active]
                      ])
                    ]),
                    _cache[26] || (_cache[26] = createBaseVNode("span", { class: "text-sm text-gray-700 group-hover:text-indigo-600 transition-colors" }, "Active", -1))
                  ])
                ])
              ]),
              createBaseVNode("div", _hoisted_41, [
                createBaseVNode("button", {
                  type: "submit",
                  disabled: saving.value,
                  class: "flex-1 px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all disabled:opacity-50 flex items-center justify-center space-x-2"
                }, [
                  saving.value ? (openBlock(), createElementBlock("span", _hoisted_43)) : createCommentVNode("", true),
                  createBaseVNode("span", _hoisted_44, toDisplayString(saving.value ? "Saving..." : isEditing.value ? "Update Library" : "Create Library"), 1)
                ], 8, _hoisted_42),
                createBaseVNode("button", {
                  type: "button",
                  onClick: _cache[10] || (_cache[10] = ($event) => showModal.value = false),
                  class: "px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-medium"
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
