import { d as defineComponent, r as ref, c as computed, o as onMounted, a as createElementBlock, b as createBaseVNode, j as createCommentVNode, f as createVNode, u as unref, p as withDirectives, v as vModelText, D as vModelSelect, n as normalizeClass, F as Fragment, k as renderList, t as toDisplayString, z as withModifiers, h as createBlock, B as vModelCheckbox, X as adminAPI, i as createTextVNode, q as normalizeStyle, w as withCtx, g as resolveComponent, l as openBlock } from "./main-D4odWxzi.js";
import { u as useSwal } from "./useSwal-pQW_XkRe.js";
import { P as Plus } from "./plus-zxxEdYDr.js";
import { S as Search } from "./search-DQSDGQmf.js";
import { R as RefreshCw } from "./refresh-cw-BuoaK0_N.js";
import { B as Building2 } from "./building-2-CXGh2OGX.js";
import { X } from "./x-C9--2uVT.js";
import { M as MapPin } from "./map-pin-BD7G2pqo.js";
import { S as Star } from "./star-BHcoTH9N.js";
import { P as Pen } from "./pen-DXnFNmwC.js";
import { T as Trash2 } from "./trash-2-D2rUsr0z.js";
import { C as ChevronRight } from "./chevron-right-C6CYt5q_.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
/* empty css               */
import "./createLucideIcon-BgnXjtcZ.js";
const _hoisted_1 = { class: "space-y-6" };
const _hoisted_2 = { class: "flex justify-end items-center mb-6" };
const _hoisted_3 = { class: "flex items-center space-x-3" };
const _hoisted_4 = { class: "bg-white rounded-2xl shadow-sm border border-slate-100 p-4" };
const _hoisted_5 = { class: "flex flex-col md:flex-row items-center gap-4" };
const _hoisted_6 = { class: "relative flex-1 w-full" };
const _hoisted_7 = ["disabled"];
const _hoisted_8 = {
  key: 0,
  class: "flex justify-center py-12"
};
const _hoisted_9 = {
  key: 1,
  class: "text-center py-12 bg-white rounded-2xl border border-dashed border-slate-200"
};
const _hoisted_10 = {
  key: 2,
  class: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
};
const _hoisted_11 = { class: "h-40 bg-slate-50 relative" };
const _hoisted_12 = ["src"];
const _hoisted_13 = {
  key: 1,
  class: "w-full h-full flex items-center justify-center text-slate-400 bg-gradient-to-br from-purple-50 to-fuchsia-50/30"
};
const _hoisted_14 = { class: "absolute top-4 right-4" };
const _hoisted_15 = { class: "p-5 flex-1 flex flex-col justify-between" };
const _hoisted_16 = { class: "space-y-3" };
const _hoisted_17 = { class: "flex items-start justify-between text-left" };
const _hoisted_18 = { class: "text-sm font-bold text-slate-700" };
const _hoisted_19 = { class: "text-[10px] text-slate-505 font-medium flex items-center mt-1" };
const _hoisted_20 = { class: "flex items-center space-x-1 px-2 py-0.5 bg-amber-50 border border-amber-100 rounded-lg text-amber-700 text-xs font-bold flex-shrink-0" };
const _hoisted_21 = { class: "text-[10px] text-amber-600/70 font-medium" };
const _hoisted_22 = { class: "text-xs text-slate-500 line-clamp-2 mt-2 leading-relaxed text-left" };
const _hoisted_23 = { class: "space-y-1 pt-1 text-left" };
const _hoisted_24 = { class: "flex items-center justify-between text-[10px] font-bold text-slate-400 uppercase tracking-wider" };
const _hoisted_25 = { class: "w-full bg-slate-100 rounded-full h-2 overflow-hidden" };
const _hoisted_26 = { class: "grid grid-cols-2 gap-3 my-2 pt-1" };
const _hoisted_27 = { class: "p-3 bg-purple-50/50 rounded-xl flex flex-col text-left border border-slate-100" };
const _hoisted_28 = { class: "text-base font-black text-purple-700 mt-1" };
const _hoisted_29 = { class: "p-3 bg-fuchsia-50/40 rounded-xl flex flex-col text-left border border-slate-100" };
const _hoisted_30 = { class: "text-base font-black text-fuchsia-700 mt-1" };
const _hoisted_31 = { class: "flex items-center justify-between pt-4 mt-4 border-t border-slate-100" };
const _hoisted_32 = { class: "flex items-center space-x-1.5" };
const _hoisted_33 = ["onClick"];
const _hoisted_34 = ["onClick"];
const _hoisted_35 = {
  key: 3,
  class: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
};
const _hoisted_36 = { class: "bg-white rounded-3xl shadow-xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in duration-200 border border-slate-100 flex flex-col" };
const _hoisted_37 = { class: "p-6 border-b border-slate-100 flex items-center justify-between text-left" };
const _hoisted_38 = { class: "text-lg font-bold text-slate-800" };
const _hoisted_39 = { class: "grid grid-cols-2 gap-4" };
const _hoisted_40 = { class: "flex items-center space-x-4 mt-1" };
const _hoisted_41 = { class: "w-12 h-12 rounded-lg border border-slate-200 bg-slate-50 overflow-hidden flex items-center justify-center flex-shrink-0" };
const _hoisted_42 = ["src"];
const _hoisted_43 = { class: "flex items-center space-x-4 pt-1" };
const _hoisted_44 = { class: "flex items-center space-x-2 cursor-pointer" };
const _hoisted_45 = { class: "flex items-center space-x-2 cursor-pointer" };
const _hoisted_46 = { class: "pt-4 flex items-center space-x-3" };
const _hoisted_47 = ["disabled"];
const _hoisted_48 = { key: 0 };
const _hoisted_49 = { key: 1 };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "LibraryManagementPage",
  setup(__props) {
    const { showConfirm, showSuccess, showError } = useSwal();
    const libraries = ref([]);
    const loading = ref(false);
    const saving = ref(false);
    const showModal = ref(false);
    const isEditing = ref(false);
    const searchQuery = ref("");
    const filterStatus = ref("");
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
      photo: null,
      photo_url: ""
    });
    const adminPhotoPreview = ref(null);
    const handlePhotoUpload = (event) => {
      const file = event.target.files[0];
      if (file) {
        form.value.photo = file;
        adminPhotoPreview.value = URL.createObjectURL(file);
      }
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
    const filteredLibraries = computed(() => {
      return libraries.value.filter((lib) => {
        const matchesSearch = lib.name.toLowerCase().includes(searchQuery.value.toLowerCase()) || lib.address.toLowerCase().includes(searchQuery.value.toLowerCase());
        const matchesStatus = filterStatus.value === "" || filterStatus.value === "active" && lib.is_active || filterStatus.value === "inactive" && !lib.is_active;
        return matchesSearch && matchesStatus;
      });
    });
    const getUtilizationPercentage = (lib) => {
      const total = lib.totalSeats || lib.capacity || 0;
      if (total <= 0) return 0;
      const occupied = total - (lib.availableSeats || 0);
      return Math.min(100, Math.max(0, Math.round(occupied / total * 100)));
    };
    const getProgressBarClass = (lib) => {
      const percentage = getUtilizationPercentage(lib);
      if (percentage > 85) return "bg-red-500";
      if (percentage > 60) return "bg-amber-500";
      return "bg-purple-650";
    };
    const openCreateModal = () => {
      isEditing.value = false;
      adminPhotoPreview.value = null;
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
        photo: null,
        photo_url: ""
      };
      showModal.value = true;
    };
    const editLibrary = (library) => {
      isEditing.value = true;
      adminPhotoPreview.value = null;
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
        photo: null,
        photo_url: library.photo_url || (library.photo ? "/storage/" + library.photo : "")
      };
      showModal.value = true;
    };
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
          createBaseVNode("div", _hoisted_3, [
            createBaseVNode("button", {
              onClick: openCreateModal,
              class: "px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-xl transition-colors flex items-center space-x-2 text-xs font-bold shadow-sm cursor-pointer"
            }, [
              createVNode(unref(Plus), { class: "w-4 h-4" }),
              _cache[13] || (_cache[13] = createBaseVNode("span", null, "Add Library", -1))
            ])
          ])
        ]),
        createBaseVNode("div", _hoisted_4, [
          createBaseVNode("div", _hoisted_5, [
            createBaseVNode("div", _hoisted_6, [
              createVNode(unref(Search), { class: "absolute left-3.5 top-1/2 transform -translate-y-1/2 w-4.5 h-4.5 text-slate-400" }),
              withDirectives(createBaseVNode("input", {
                type: "text",
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => searchQuery.value = $event),
                placeholder: "Search by library name or address...",
                class: "w-full pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-xs font-semibold text-slate-655 focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 outline-none placeholder-slate-400"
              }, null, 512), [
                [vModelText, searchQuery.value]
              ])
            ]),
            withDirectives(createBaseVNode("select", {
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => filterStatus.value = $event),
              class: "w-full md:w-48 px-4 py-2 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-655 focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 outline-none cursor-pointer"
            }, [..._cache[14] || (_cache[14] = [
              createBaseVNode("option", { value: "" }, "All Status", -1),
              createBaseVNode("option", { value: "active" }, "Active Only", -1),
              createBaseVNode("option", { value: "inactive" }, "Inactive Only", -1)
            ])], 512), [
              [vModelSelect, filterStatus.value]
            ]),
            createBaseVNode("button", {
              onClick: fetchLibraries,
              disabled: loading.value,
              class: "p-2 bg-white border border-slate-200 hover:bg-slate-50 text-slate-500 rounded-xl transition-colors cursor-pointer shadow-sm",
              title: "Refresh Data"
            }, [
              createVNode(unref(RefreshCw), {
                class: normalizeClass(["w-4 h-4", loading.value ? "animate-spin" : ""])
              }, null, 8, ["class"])
            ], 8, _hoisted_7)
          ])
        ]),
        loading.value && libraries.value.length === 0 ? (openBlock(), createElementBlock("div", _hoisted_8, [..._cache[15] || (_cache[15] = [
          createBaseVNode("div", { class: "animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600" }, null, -1)
        ])])) : filteredLibraries.value.length === 0 ? (openBlock(), createElementBlock("div", _hoisted_9, [
          createVNode(unref(Building2), { class: "w-12 h-12 text-slate-300 mx-auto mb-4" }),
          _cache[16] || (_cache[16] = createBaseVNode("p", { class: "text-xs font-bold text-slate-455 uppercase tracking-widest" }, "No libraries found matching your criteria.", -1))
        ])) : (openBlock(), createElementBlock("div", _hoisted_10, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(filteredLibraries.value, (library) => {
            return openBlock(), createElementBlock("div", {
              key: library.id,
              class: "bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-md transition-shadow flex flex-col group"
            }, [
              createBaseVNode("div", _hoisted_11, [
                library.photo ? (openBlock(), createElementBlock("img", {
                  key: 0,
                  src: library.photo_url,
                  class: "w-full h-full object-cover",
                  alt: "Library cover"
                }, null, 8, _hoisted_12)) : (openBlock(), createElementBlock("div", _hoisted_13, [
                  createVNode(unref(Building2), { class: "w-12 h-12 text-purple-300" })
                ])),
                createBaseVNode("div", _hoisted_14, [
                  createBaseVNode("span", {
                    class: normalizeClass([
                      "text-[9px] font-semibold px-2.5 py-1 rounded-full uppercase tracking-wider border shadow-sm bg-white",
                      library.is_active ? "bg-green-50/80 border-green-100 text-green-700" : "bg-red-50/80 border-red-100 text-red-700"
                    ])
                  }, toDisplayString(library.is_active ? "Active" : "Inactive"), 3)
                ])
              ]),
              createBaseVNode("div", _hoisted_15, [
                createBaseVNode("div", _hoisted_16, [
                  createBaseVNode("div", _hoisted_17, [
                    createBaseVNode("div", null, [
                      createBaseVNode("h3", _hoisted_18, toDisplayString(library.name), 1),
                      createBaseVNode("p", _hoisted_19, [
                        createVNode(unref(MapPin), { class: "w-3.5 h-3.5 mr-1 text-slate-400 flex-shrink-0" }),
                        createTextVNode(" " + toDisplayString(library.address), 1)
                      ])
                    ]),
                    createBaseVNode("div", _hoisted_20, [
                      createVNode(unref(Star), { class: "w-3.5 h-3.5 fill-amber-400 text-amber-400" }),
                      createBaseVNode("span", null, toDisplayString(library.averageRating || library.average_rating || "0.0"), 1),
                      createBaseVNode("span", _hoisted_21, "(" + toDisplayString(library.reviewsCount || library.reviews_count || 0) + ")", 1)
                    ])
                  ]),
                  createBaseVNode("p", _hoisted_22, toDisplayString(library.description || "No description provided."), 1),
                  createBaseVNode("div", _hoisted_23, [
                    createBaseVNode("div", _hoisted_24, [
                      _cache[17] || (_cache[17] = createBaseVNode("span", null, "Occupancy", -1)),
                      createBaseVNode("span", null, toDisplayString(getUtilizationPercentage(library)) + "%", 1)
                    ]),
                    createBaseVNode("div", _hoisted_25, [
                      createBaseVNode("div", {
                        class: normalizeClass(["h-2 rounded-full transition-all duration-500", getProgressBarClass(library)]),
                        style: normalizeStyle({ width: getUtilizationPercentage(library) + "%" })
                      }, null, 6)
                    ])
                  ]),
                  createBaseVNode("div", _hoisted_26, [
                    createBaseVNode("div", _hoisted_27, [
                      _cache[18] || (_cache[18] = createBaseVNode("span", { class: "text-[9px] text-slate-400 font-bold uppercase tracking-wider" }, "Total Seats", -1)),
                      createBaseVNode("span", _hoisted_28, toDisplayString(library.totalSeats || library.capacity), 1)
                    ]),
                    createBaseVNode("div", _hoisted_29, [
                      _cache[19] || (_cache[19] = createBaseVNode("span", { class: "text-[9px] text-slate-400 font-bold uppercase tracking-wider" }, "Available", -1)),
                      createBaseVNode("span", _hoisted_30, toDisplayString(library.availableSeats || 0), 1)
                    ])
                  ])
                ]),
                createBaseVNode("div", _hoisted_31, [
                  createBaseVNode("div", _hoisted_32, [
                    createBaseVNode("button", {
                      onClick: ($event) => editLibrary(library),
                      class: "p-2 bg-white border border-slate-200 hover:bg-slate-50 rounded-lg text-purple-700 hover:text-purple-800 transition-all cursor-pointer shadow-sm",
                      title: "Edit Library"
                    }, [
                      createVNode(unref(Pen), { class: "w-4 h-4" })
                    ], 8, _hoisted_33),
                    createBaseVNode("button", {
                      onClick: ($event) => confirmDelete(library),
                      class: "p-2 bg-white border border-slate-200 hover:bg-slate-50 rounded-lg text-red-655 hover:text-red-700 transition-all cursor-pointer shadow-sm",
                      title: "Delete Library"
                    }, [
                      createVNode(unref(Trash2), { class: "w-4 h-4" })
                    ], 8, _hoisted_34)
                  ]),
                  createVNode(_component_router_link, {
                    to: "/superadmin/libraries/" + library.id,
                    class: "px-3.5 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-xl transition-colors flex items-center space-x-2 text-xs font-bold shadow-sm cursor-pointer"
                  }, {
                    default: withCtx(() => [
                      _cache[20] || (_cache[20] = createBaseVNode("span", null, "Manage Seats", -1)),
                      createVNode(unref(ChevronRight), { class: "w-3.5 h-3.5" })
                    ]),
                    _: 1
                  }, 8, ["to"])
                ])
              ])
            ]);
          }), 128))
        ])),
        showModal.value ? (openBlock(), createElementBlock("div", _hoisted_35, [
          createBaseVNode("div", _hoisted_36, [
            createBaseVNode("div", _hoisted_37, [
              createBaseVNode("h2", _hoisted_38, toDisplayString(isEditing.value ? "Edit Library" : "Add New Library"), 1),
              createBaseVNode("button", {
                onClick: _cache[2] || (_cache[2] = ($event) => showModal.value = false),
                class: "p-2 hover:bg-slate-50 rounded-xl transition-colors cursor-pointer"
              }, [
                createVNode(unref(X), { class: "w-5 h-5 text-slate-450" })
              ])
            ]),
            createBaseVNode("form", {
              onSubmit: withModifiers(saveLibrary, ["prevent"]),
              class: "p-6 space-y-4 text-left max-h-[75vh] overflow-y-auto"
            }, [
              createBaseVNode("div", null, [
                _cache[21] || (_cache[21] = createBaseVNode("label", { class: "block text-xs font-bold text-slate-500 mb-1.5 uppercase tracking-wider" }, "Library Name", -1)),
                withDirectives(createBaseVNode("input", {
                  "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => form.value.name = $event),
                  type: "text",
                  required: "",
                  class: "w-full px-4 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 outline-none text-xs font-semibold text-slate-655 bg-white",
                  placeholder: "e.g. Central Library"
                }, null, 512), [
                  [vModelText, form.value.name]
                ])
              ]),
              createBaseVNode("div", null, [
                _cache[22] || (_cache[22] = createBaseVNode("label", { class: "block text-xs font-bold text-slate-500 mb-1.5 uppercase tracking-wider" }, "Address", -1)),
                withDirectives(createBaseVNode("input", {
                  "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => form.value.address = $event),
                  type: "text",
                  required: "",
                  class: "w-full px-4 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 outline-none text-xs font-semibold text-slate-655 bg-white",
                  placeholder: "Full address of the library"
                }, null, 512), [
                  [vModelText, form.value.address]
                ])
              ]),
              createBaseVNode("div", _hoisted_39, [
                createBaseVNode("div", null, [
                  _cache[23] || (_cache[23] = createBaseVNode("label", { class: "block text-xs font-bold text-slate-500 mb-1.5 uppercase tracking-wider" }, "Latitude", -1)),
                  withDirectives(createBaseVNode("input", {
                    "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => form.value.latitude = $event),
                    type: "number",
                    step: "any",
                    class: "w-full px-4 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 outline-none text-xs font-semibold text-slate-655 bg-white",
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
                  _cache[24] || (_cache[24] = createBaseVNode("label", { class: "block text-xs font-bold text-slate-500 mb-1.5 uppercase tracking-wider" }, "Longitude", -1)),
                  withDirectives(createBaseVNode("input", {
                    "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => form.value.longitude = $event),
                    type: "number",
                    step: "any",
                    class: "w-full px-4 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 outline-none text-xs font-semibold text-slate-655 bg-white",
                    placeholder: "e.g. 74.3587"
                  }, null, 512), [
                    [
                      vModelText,
                      form.value.longitude,
                      void 0,
                      { number: true }
                    ]
                  ])
                ])
              ]),
              createBaseVNode("div", null, [
                _cache[25] || (_cache[25] = createBaseVNode("label", { class: "block text-xs font-bold text-slate-500 mb-1.5 uppercase tracking-wider" }, "Opening Hours", -1)),
                withDirectives(createBaseVNode("input", {
                  "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => form.value.opening_hours = $event),
                  type: "text",
                  required: "",
                  class: "w-full px-4 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 outline-none text-xs font-semibold text-slate-655 bg-white",
                  placeholder: "e.g. 08:00 AM - 10:00 PM"
                }, null, 512), [
                  [vModelText, form.value.opening_hours]
                ])
              ]),
              createBaseVNode("div", null, [
                _cache[26] || (_cache[26] = createBaseVNode("label", { class: "block text-xs font-bold text-slate-500 mb-1.5 uppercase tracking-wider" }, "Library Cover Photo", -1)),
                createBaseVNode("div", _hoisted_40, [
                  createBaseVNode("div", _hoisted_41, [
                    adminPhotoPreview.value || form.value.photo_url ? (openBlock(), createElementBlock("img", {
                      key: 0,
                      src: adminPhotoPreview.value || form.value.photo_url,
                      class: "w-full h-full object-cover",
                      alt: "Library preview"
                    }, null, 8, _hoisted_42)) : (openBlock(), createBlock(unref(Building2), {
                      key: 1,
                      class: "w-6 h-6 text-slate-400"
                    }))
                  ]),
                  createBaseVNode("input", {
                    type: "file",
                    onChange: handlePhotoUpload,
                    accept: "image/*",
                    class: "w-full text-xs text-slate-505 file:mr-4 file:py-1.5 file:px-3 file:rounded-xl file:border-0 file:text-[11px] file:font-bold file:bg-purple-50 file:text-purple-700 hover:file:bg-purple-100 cursor-pointer"
                  }, null, 32)
                ])
              ]),
              createBaseVNode("div", null, [
                _cache[27] || (_cache[27] = createBaseVNode("label", { class: "block text-xs font-bold text-slate-500 mb-1.5 uppercase tracking-wider" }, "Description", -1)),
                withDirectives(createBaseVNode("textarea", {
                  "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => form.value.description = $event),
                  rows: "3",
                  class: "w-full px-4 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 outline-none text-xs font-semibold text-slate-655 bg-white",
                  placeholder: "Brief description of the library location..."
                }, null, 512), [
                  [vModelText, form.value.description]
                ])
              ]),
              createBaseVNode("div", null, [
                _cache[28] || (_cache[28] = createBaseVNode("label", { class: "block text-xs font-bold text-slate-500 mb-1.5 uppercase tracking-wider" }, "WiFi Password (Optional)", -1)),
                withDirectives(createBaseVNode("input", {
                  "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => form.value.wifi_password = $event),
                  type: "text",
                  class: "w-full px-4 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 outline-none text-xs font-semibold text-slate-655 bg-white",
                  placeholder: "Password"
                }, null, 512), [
                  [vModelText, form.value.wifi_password]
                ])
              ]),
              createBaseVNode("div", _hoisted_43, [
                createBaseVNode("label", _hoisted_44, [
                  withDirectives(createBaseVNode("input", {
                    type: "checkbox",
                    "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => form.value.parking_available = $event),
                    id: "parking",
                    class: "rounded text-purple-655 focus:ring-purple-500 cursor-pointer"
                  }, null, 512), [
                    [vModelCheckbox, form.value.parking_available]
                  ]),
                  _cache[29] || (_cache[29] = createBaseVNode("label", {
                    for: "parking",
                    class: "text-xs font-bold text-slate-550 cursor-pointer"
                  }, "Parking Available", -1))
                ]),
                createBaseVNode("label", _hoisted_45, [
                  withDirectives(createBaseVNode("input", {
                    type: "checkbox",
                    "onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => form.value.is_active = $event),
                    id: "isActive",
                    class: "rounded text-purple-655 focus:ring-purple-500 cursor-pointer"
                  }, null, 512), [
                    [vModelCheckbox, form.value.is_active]
                  ]),
                  _cache[30] || (_cache[30] = createBaseVNode("label", {
                    for: "isActive",
                    class: "text-xs font-bold text-slate-550 cursor-pointer"
                  }, "Library Active", -1))
                ])
              ]),
              createBaseVNode("div", _hoisted_46, [
                createBaseVNode("button", {
                  type: "button",
                  onClick: _cache[12] || (_cache[12] = ($event) => showModal.value = false),
                  class: "flex-1 px-4 py-2.5 border border-slate-200 text-slate-500 font-bold rounded-xl hover:bg-slate-50 transition-colors text-xs cursor-pointer"
                }, " Cancel "),
                createBaseVNode("button", {
                  type: "submit",
                  disabled: saving.value,
                  class: "flex-1 px-4 py-2.5 bg-purple-600 hover:bg-purple-700 text-white rounded-xl transition-all disabled:opacity-50 text-xs font-bold cursor-pointer"
                }, [
                  saving.value ? (openBlock(), createElementBlock("span", _hoisted_48, "Saving...")) : (openBlock(), createElementBlock("span", _hoisted_49, toDisplayString(isEditing.value ? "Update Library" : "Create Library"), 1))
                ], 8, _hoisted_47)
              ])
            ], 32)
          ])
        ])) : createCommentVNode("", true)
      ]);
    };
  }
});
const LibraryManagementPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b42bcd4f"]]);
export {
  LibraryManagementPage as default
};
