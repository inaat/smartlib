import { d as defineComponent, r as ref, a as computed, I as watch, o as onMounted, b as createElementBlock, e as createBaseVNode, g as createVNode, p as createCommentVNode, u as unref, t as toDisplayString, F as Fragment, k as renderList, B as withModifiers, s as withDirectives, v as vModelText, H as vModelSelect, E as vModelCheckbox, n as normalizeClass, j as createTextVNode, C as Clock, m as openBlock, _ as _export_sfc } from "./main-BeUqjoax.js";
import { s as superadminAPI } from "./superadminApi-BP2wsBez.js";
import { _ as _sfc_main$1 } from "./LibrarySelector.vue_vue_type_script_setup_true_lang-LmpfO1lJ.js";
import { u as useSwal } from "./useSwal-pQW_XkRe.js";
import { P as Plus } from "./plus-R3pbBkbH.js";
import { C as Calendar } from "./calendar-C4MEAYqh.js";
import { X } from "./x-Dj9LNodU.js";
import { B as Building2 } from "./building-2-obFScNkw.js";
import { U as Users } from "./users-DgA2REmn.js";
/* empty css               */
import "./library-mCkj7erK.js";
const _hoisted_1 = { class: "space-y-6" };
const _hoisted_2 = { class: "flex justify-end items-center mb-6" };
const _hoisted_3 = { class: "flex items-center space-x-3" };
const _hoisted_4 = {
  key: 0,
  class: "flex justify-center py-12"
};
const _hoisted_5 = {
  key: 1,
  class: "text-center py-12 px-4 bg-white rounded-2xl border border-dashed border-slate-200 flex flex-col items-center"
};
const _hoisted_6 = { class: "w-16 h-16 rounded-full bg-purple-50 flex items-center justify-center mb-4" };
const _hoisted_7 = { class: "text-sm font-bold text-slate-800 uppercase tracking-wider mb-1" };
const _hoisted_8 = { class: "text-xs text-slate-500 font-medium max-w-sm mb-6" };
const _hoisted_9 = {
  key: 2,
  class: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
};
const _hoisted_10 = { class: "h-40 bg-slate-50 relative overflow-hidden" };
const _hoisted_11 = ["src"];
const _hoisted_12 = {
  key: 1,
  class: "w-full h-full flex items-center justify-center text-slate-400 bg-gradient-to-br from-purple-50 to-fuchsia-50/20"
};
const _hoisted_13 = { class: "absolute top-3 right-3" };
const _hoisted_14 = { class: "p-5 flex-1 flex flex-col justify-between text-left" };
const _hoisted_15 = { class: "space-y-3" };
const _hoisted_16 = { class: "flex items-center justify-between text-[10px] font-bold text-slate-400 uppercase tracking-widest" };
const _hoisted_17 = { class: "text-purple-750 font-extrabold" };
const _hoisted_18 = { class: "flex items-center font-bold" };
const _hoisted_19 = { class: "text-sm font-bold text-slate-700 group-hover:text-purple-700 transition-colors" };
const _hoisted_20 = { class: "text-xs text-slate-500 line-clamp-2 leading-relaxed" };
const _hoisted_21 = { class: "space-y-2 pt-2" };
const _hoisted_22 = { class: "flex items-center text-xs font-semibold text-slate-550" };
const _hoisted_23 = { class: "flex items-center text-xs font-semibold text-slate-550" };
const _hoisted_24 = { class: "flex items-center text-xs font-semibold text-slate-550" };
const _hoisted_25 = {
  key: 0,
  class: "flex items-center text-xs font-bold text-slate-655 mt-1"
};
const _hoisted_26 = { class: "ml-2 text-slate-700 font-extrabold" };
const _hoisted_27 = { class: "flex items-center justify-end space-x-2 pt-4 mt-4 border-t border-slate-100" };
const _hoisted_28 = ["onClick"];
const _hoisted_29 = ["onClick"];
const _hoisted_30 = {
  key: 3,
  class: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
};
const _hoisted_31 = { class: "bg-white rounded-3xl shadow-xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in duration-200 border border-slate-100 flex flex-col" };
const _hoisted_32 = { class: "p-6 border-b border-slate-100 flex items-center justify-between text-left" };
const _hoisted_33 = { class: "text-lg font-bold text-slate-800" };
const _hoisted_34 = ["value"];
const _hoisted_35 = { class: "grid grid-cols-2 gap-4" };
const _hoisted_36 = { class: "grid grid-cols-3 gap-2" };
const _hoisted_37 = { class: "col-span-1" };
const _hoisted_38 = { class: "grid grid-cols-2 gap-4" };
const _hoisted_39 = { class: "flex items-center space-x-4 pt-6 justify-center" };
const _hoisted_40 = { class: "flex items-center space-x-2 cursor-pointer" };
const _hoisted_41 = { class: "flex items-center space-x-2 cursor-pointer" };
const _hoisted_42 = { key: 0 };
const _hoisted_43 = { class: "pt-4 flex items-center space-x-3 border-t border-slate-100" };
const _hoisted_44 = ["disabled"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "EventsPage",
  setup(__props) {
    const { showConfirm, showSuccess, showError } = useSwal();
    const selectedLibraryId = ref(null);
    const events = ref([]);
    const libraries = ref([]);
    const showModal = ref(false);
    const isEditing = ref(false);
    const loading = ref(false);
    const selectedLibrary = computed(() => {
      if (!selectedLibraryId.value) return null;
      return libraries.value.find((l) => Number(l.id) === Number(selectedLibraryId.value)) || null;
    });
    const form = ref({
      id: null,
      title: "",
      description: "",
      library_id: null,
      date: "",
      start_time: "",
      end_time: "",
      venue: "",
      capacity: 0,
      type: "General",
      is_active: true,
      is_paid: false,
      price: 0,
      image: null
    });
    const fetchEvents = async () => {
      loading.value = true;
      try {
        const params = {};
        if (selectedLibraryId.value) params.library_id = selectedLibraryId.value;
        events.value = await superadminAPI.getEvents(params);
      } catch (error) {
        console.error("Error fetching events:", error);
      } finally {
        loading.value = false;
      }
    };
    const fetchLibraries = async () => {
      try {
        libraries.value = await superadminAPI.getLibraries();
      } catch (error) {
        console.error("Error fetching libraries:", error);
      }
    };
    watch(selectedLibraryId, fetchEvents);
    const handleImageUpload = (event) => {
      const target = event.target;
      if (target.files && target.files[0]) {
        form.value.image = target.files[0];
      }
    };
    const openCreateModal = () => {
      isEditing.value = false;
      const initialLibId = selectedLibraryId.value ? Number(selectedLibraryId.value) : libraries.value.length > 0 ? libraries.value[0].id : null;
      form.value = {
        id: null,
        title: "",
        description: "",
        library_id: initialLibId,
        date: "",
        start_time: "",
        end_time: "",
        venue: "",
        capacity: 0,
        type: "General",
        is_active: true,
        is_paid: false,
        price: 0,
        image: null
      };
      showModal.value = true;
    };
    const editEvent = (event) => {
      isEditing.value = true;
      form.value = {
        id: event.id,
        title: event.title,
        description: event.description,
        library_id: event.library_id ? Number(event.library_id) : null,
        date: event.date ? event.date.substring(0, 10) : "",
        start_time: event.start_time,
        end_time: event.end_time,
        venue: event.venue,
        capacity: event.capacity,
        type: event.type || "General",
        is_active: event.is_active,
        is_paid: event.is_paid,
        price: event.price,
        image: null
      };
      showModal.value = true;
    };
    const closeModal = () => {
      showModal.value = false;
    };
    const saveEvent = async () => {
      if (!form.value.library_id) {
        showError("Library Required", "Please select a library venue for this event.");
        return;
      }
      loading.value = true;
      try {
        const formData = new FormData();
        formData.append("title", form.value.title);
        formData.append("description", form.value.description || "");
        formData.append("library_id", form.value.library_id.toString());
        formData.append("date", form.value.date);
        formData.append("start_time", form.value.start_time);
        formData.append("end_time", form.value.end_time);
        formData.append("venue", form.value.venue || "");
        formData.append("capacity", form.value.capacity.toString());
        formData.append("type", form.value.type);
        formData.append("is_active", form.value.is_active ? "1" : "0");
        formData.append("is_paid", form.value.is_paid ? "1" : "0");
        formData.append("price", form.value.price.toString());
        if (form.value.image) formData.append("image", form.value.image);
        if (isEditing.value && form.value.id) {
          await superadminAPI.updateEvent(form.value.id.toString(), formData);
          showSuccess("Updated!", "Event updated successfully.");
        } else {
          await superadminAPI.createEvent(formData);
          showSuccess("Created!", "Event created successfully.");
        }
        await fetchEvents();
        closeModal();
      } catch (error) {
        console.error("Error saving event:", error);
        const errData = error.response?.data;
        let msg = "Failed to save event details.";
        if (errData?.errors) {
          msg = Object.values(errData.errors).flat().join(" ");
        } else if (errData?.message) {
          msg = errData.message;
        }
        showError("Save Failed", msg);
      } finally {
        loading.value = false;
      }
    };
    const confirmDelete = async (event) => {
      if (await showConfirm("Delete Event", `Are you sure you want to delete "${event.title}"?`, "Yes, Delete")) {
        try {
          await superadminAPI.deleteEvent(event.id.toString());
          showSuccess("Deleted!", "Event deleted successfully.");
          await fetchEvents();
        } catch (error) {
          console.error("Error deleting event:", error);
          showError("Delete Failed", error.response?.data?.message || "Could not delete event.");
        }
      }
    };
    const formatDate = (dateString) => {
      if (!dateString) return "";
      return new Date(dateString).toLocaleDateString("en-US", {
        weekday: "short",
        year: "numeric",
        month: "short",
        day: "numeric"
      });
    };
    onMounted(() => {
      fetchEvents();
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
              _cache[13] || (_cache[13] = createBaseVNode("span", null, "Create Event", -1))
            ])
          ])
        ]),
        createVNode(_sfc_main$1, {
          modelValue: selectedLibraryId.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => selectedLibraryId.value = $event)
        }, null, 8, ["modelValue"]),
        loading.value && events.value.length === 0 ? (openBlock(), createElementBlock("div", _hoisted_4, [..._cache[14] || (_cache[14] = [
          createBaseVNode("div", { class: "animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600" }, null, -1)
        ])])) : events.value.length === 0 ? (openBlock(), createElementBlock("div", _hoisted_5, [
          createBaseVNode("div", _hoisted_6, [
            createVNode(unref(Calendar), { class: "w-8 h-8 text-purple-600 animate-pulse" })
          ]),
          createBaseVNode("h3", _hoisted_7, toDisplayString(selectedLibrary.value ? `No Events for ${selectedLibrary.value.name}` : "No Events Found"), 1),
          createBaseVNode("p", _hoisted_8, toDisplayString(selectedLibrary.value ? `No events have been created for ${selectedLibrary.value.name} yet.` : "No events created across any library yet. Create your first event to get started."), 1),
          createBaseVNode("button", {
            onClick: openCreateModal,
            class: "px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-xl transition-colors flex items-center space-x-2 text-xs font-bold shadow-sm cursor-pointer"
          }, [
            createVNode(unref(Plus), { class: "w-4 h-4" }),
            createBaseVNode("span", null, toDisplayString(selectedLibrary.value ? `Create Event for ${selectedLibrary.value.name}` : "Create Event"), 1)
          ])
        ])) : (openBlock(), createElementBlock("div", _hoisted_9, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(events.value, (event) => {
            return openBlock(), createElementBlock("div", {
              key: event.id,
              class: "bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-md transition-all duration-300 flex flex-col group"
            }, [
              createBaseVNode("div", _hoisted_10, [
                event.image ? (openBlock(), createElementBlock("img", {
                  key: 0,
                  src: event.image,
                  class: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                }, null, 8, _hoisted_11)) : (openBlock(), createElementBlock("div", _hoisted_12, [
                  createVNode(unref(Calendar), { class: "w-12 h-12 text-purple-300" })
                ])),
                createBaseVNode("div", _hoisted_13, [
                  createBaseVNode("span", {
                    class: normalizeClass([
                      "text-[9px] font-semibold px-2.5 py-1 rounded-full uppercase tracking-wider border shadow-sm bg-white",
                      event.is_active ? "bg-green-50 border-green-100 text-green-700" : "bg-red-50 border-red-100 text-red-700"
                    ])
                  }, toDisplayString(event.is_active ? "Active" : "Inactive"), 3)
                ])
              ]),
              createBaseVNode("div", _hoisted_14, [
                createBaseVNode("div", _hoisted_15, [
                  createBaseVNode("div", _hoisted_16, [
                    createBaseVNode("span", _hoisted_17, toDisplayString(event.type || "General"), 1),
                    createBaseVNode("span", _hoisted_18, [
                      createVNode(unref(Building2), { class: "w-3.5 h-3.5 mr-1 text-slate-450" }),
                      createTextVNode(" " + toDisplayString(event.library?.name), 1)
                    ])
                  ]),
                  createBaseVNode("h3", _hoisted_19, toDisplayString(event.title), 1),
                  createBaseVNode("p", _hoisted_20, toDisplayString(event.description || "No description provided."), 1),
                  createBaseVNode("div", _hoisted_21, [
                    createBaseVNode("div", _hoisted_22, [
                      createVNode(unref(Calendar), { class: "w-4 h-4 mr-2 text-slate-400 flex-shrink-0" }),
                      createTextVNode(" " + toDisplayString(formatDate(event.date)), 1)
                    ]),
                    createBaseVNode("div", _hoisted_23, [
                      createVNode(unref(Clock), { class: "w-4 h-4 mr-2 text-slate-400 flex-shrink-0" }),
                      createTextVNode(" " + toDisplayString(event.start_time) + " - " + toDisplayString(event.end_time), 1)
                    ]),
                    createBaseVNode("div", _hoisted_24, [
                      createVNode(unref(Users), { class: "w-4 h-4 mr-2 text-slate-400 flex-shrink-0" }),
                      createTextVNode(" " + toDisplayString(event.registered_count || 0) + " / " + toDisplayString(event.capacity || "∞") + " Registered ", 1)
                    ]),
                    event.is_paid ? (openBlock(), createElementBlock("div", _hoisted_25, [
                      _cache[15] || (_cache[15] = createBaseVNode("span", { class: "px-2 py-0.5 rounded bg-purple-50 border border-purple-100 text-purple-700 text-[10px] font-extrabold uppercase" }, "Paid", -1)),
                      createBaseVNode("span", _hoisted_26, "Rs. " + toDisplayString(event.price), 1)
                    ])) : createCommentVNode("", true)
                  ])
                ]),
                createBaseVNode("div", _hoisted_27, [
                  createBaseVNode("button", {
                    onClick: ($event) => editEvent(event),
                    class: "px-3.5 py-1.5 bg-white border border-slate-200 hover:bg-slate-50 rounded-lg text-purple-700 hover:text-purple-800 transition-all cursor-pointer shadow-sm text-xs font-bold"
                  }, " Edit ", 8, _hoisted_28),
                  createBaseVNode("button", {
                    onClick: ($event) => confirmDelete(event),
                    class: "px-3.5 py-1.5 bg-white border border-slate-200 hover:bg-slate-50 rounded-lg text-red-655 hover:text-red-700 transition-all cursor-pointer shadow-sm text-xs font-bold"
                  }, " Delete ", 8, _hoisted_29)
                ])
              ])
            ]);
          }), 128))
        ])),
        showModal.value ? (openBlock(), createElementBlock("div", _hoisted_30, [
          createBaseVNode("div", _hoisted_31, [
            createBaseVNode("div", _hoisted_32, [
              createBaseVNode("h2", _hoisted_33, toDisplayString(isEditing.value ? "Edit Event" : "Create New Event"), 1),
              createBaseVNode("button", {
                onClick: closeModal,
                class: "p-2 hover:bg-slate-50 rounded-xl transition-colors cursor-pointer"
              }, [
                createVNode(unref(X), { class: "w-5 h-5 text-slate-450" })
              ])
            ]),
            createBaseVNode("form", {
              onSubmit: withModifiers(saveEvent, ["prevent"]),
              class: "p-6 space-y-4 text-left max-h-[75vh] overflow-y-auto"
            }, [
              createBaseVNode("div", null, [
                _cache[16] || (_cache[16] = createBaseVNode("label", { class: "block text-xs font-bold text-slate-500 mb-1.5 uppercase tracking-wider" }, "Event Title", -1)),
                withDirectives(createBaseVNode("input", {
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => form.value.title = $event),
                  type: "text",
                  required: "",
                  class: "w-full px-4 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 outline-none text-xs font-semibold text-slate-655 bg-white",
                  placeholder: "e.g. Workshop on CA"
                }, null, 512), [
                  [vModelText, form.value.title]
                ])
              ]),
              createBaseVNode("div", null, [
                _cache[18] || (_cache[18] = createBaseVNode("label", { class: "block text-xs font-bold text-slate-500 mb-1.5 uppercase tracking-wider" }, "Library Venue", -1)),
                withDirectives(createBaseVNode("select", {
                  "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => form.value.library_id = $event),
                  required: "",
                  class: "w-full px-4 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 outline-none text-xs font-bold text-slate-655 bg-white cursor-pointer"
                }, [
                  _cache[17] || (_cache[17] = createBaseVNode("option", {
                    value: null,
                    disabled: ""
                  }, "-- Select Library Venue --", -1)),
                  (openBlock(true), createElementBlock(Fragment, null, renderList(libraries.value, (lib) => {
                    return openBlock(), createElementBlock("option", {
                      key: lib.id,
                      value: lib.id
                    }, toDisplayString(lib.name), 9, _hoisted_34);
                  }), 128))
                ], 512), [
                  [vModelSelect, form.value.library_id]
                ])
              ]),
              createBaseVNode("div", _hoisted_35, [
                createBaseVNode("div", null, [
                  _cache[19] || (_cache[19] = createBaseVNode("label", { class: "block text-xs font-bold text-slate-500 mb-1.5 uppercase tracking-wider" }, "Specific Room/Venue", -1)),
                  withDirectives(createBaseVNode("input", {
                    "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => form.value.venue = $event),
                    type: "text",
                    class: "w-full px-4 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 outline-none text-xs font-semibold text-slate-655 bg-white",
                    placeholder: "e.g. Main Hall"
                  }, null, 512), [
                    [vModelText, form.value.venue]
                  ])
                ]),
                createBaseVNode("div", null, [
                  _cache[21] || (_cache[21] = createBaseVNode("label", { class: "block text-xs font-bold text-slate-500 mb-1.5 uppercase tracking-wider" }, "Event Category", -1)),
                  withDirectives(createBaseVNode("select", {
                    "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => form.value.type = $event),
                    required: "",
                    class: "w-full px-4 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 outline-none text-xs font-bold text-slate-655 bg-white cursor-pointer"
                  }, [..._cache[20] || (_cache[20] = [
                    createBaseVNode("option", { value: "General" }, "General", -1),
                    createBaseVNode("option", { value: "Seminar" }, "Seminar", -1),
                    createBaseVNode("option", { value: "Workshop" }, "Workshop", -1),
                    createBaseVNode("option", { value: "Guest Lecture" }, "Guest Lecture", -1)
                  ])], 512), [
                    [vModelSelect, form.value.type]
                  ])
                ])
              ]),
              createBaseVNode("div", _hoisted_36, [
                createBaseVNode("div", _hoisted_37, [
                  _cache[22] || (_cache[22] = createBaseVNode("label", { class: "block text-xs font-bold text-slate-500 mb-1.5 uppercase tracking-wider" }, "Date", -1)),
                  withDirectives(createBaseVNode("input", {
                    "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => form.value.date = $event),
                    type: "date",
                    required: "",
                    class: "w-full px-3 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 outline-none text-xs font-semibold text-slate-655 bg-white"
                  }, null, 512), [
                    [vModelText, form.value.date]
                  ])
                ]),
                createBaseVNode("div", null, [
                  _cache[23] || (_cache[23] = createBaseVNode("label", { class: "block text-xs font-bold text-slate-500 mb-1.5 uppercase tracking-wider" }, "Start", -1)),
                  withDirectives(createBaseVNode("input", {
                    "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => form.value.start_time = $event),
                    type: "time",
                    required: "",
                    class: "w-full px-3 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 outline-none text-xs font-semibold text-slate-655 bg-white"
                  }, null, 512), [
                    [vModelText, form.value.start_time]
                  ])
                ]),
                createBaseVNode("div", null, [
                  _cache[24] || (_cache[24] = createBaseVNode("label", { class: "block text-xs font-bold text-slate-500 mb-1.5 uppercase tracking-wider" }, "End", -1)),
                  withDirectives(createBaseVNode("input", {
                    "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => form.value.end_time = $event),
                    type: "time",
                    required: "",
                    class: "w-full px-3 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 outline-none text-xs font-semibold text-slate-655 bg-white"
                  }, null, 512), [
                    [vModelText, form.value.end_time]
                  ])
                ])
              ]),
              createBaseVNode("div", _hoisted_38, [
                createBaseVNode("div", null, [
                  _cache[25] || (_cache[25] = createBaseVNode("label", { class: "block text-xs font-bold text-slate-500 mb-1.5 uppercase tracking-wider" }, "Capacity Limit", -1)),
                  withDirectives(createBaseVNode("input", {
                    "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => form.value.capacity = $event),
                    type: "number",
                    class: "w-full px-4 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 outline-none text-xs font-semibold text-slate-655 bg-white",
                    placeholder: "e.g. 50"
                  }, null, 512), [
                    [
                      vModelText,
                      form.value.capacity,
                      void 0,
                      { number: true }
                    ]
                  ])
                ]),
                createBaseVNode("div", _hoisted_39, [
                  createBaseVNode("label", _hoisted_40, [
                    withDirectives(createBaseVNode("input", {
                      "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => form.value.is_active = $event),
                      type: "checkbox",
                      class: "rounded text-purple-600 focus:ring-purple-500 cursor-pointer"
                    }, null, 512), [
                      [vModelCheckbox, form.value.is_active]
                    ]),
                    _cache[26] || (_cache[26] = createBaseVNode("span", { class: "text-xs font-bold text-slate-550 cursor-pointer" }, "Active", -1))
                  ]),
                  createBaseVNode("label", _hoisted_41, [
                    withDirectives(createBaseVNode("input", {
                      "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => form.value.is_paid = $event),
                      type: "checkbox",
                      class: "rounded text-purple-600 focus:ring-purple-500 cursor-pointer"
                    }, null, 512), [
                      [vModelCheckbox, form.value.is_paid]
                    ]),
                    _cache[27] || (_cache[27] = createBaseVNode("span", { class: "text-xs font-bold text-slate-550 cursor-pointer" }, "Paid", -1))
                  ])
                ])
              ]),
              form.value.is_paid ? (openBlock(), createElementBlock("div", _hoisted_42, [
                _cache[28] || (_cache[28] = createBaseVNode("label", { class: "block text-xs font-bold text-slate-500 mb-1.5 uppercase tracking-wider" }, "Ticket Price (Rs.)", -1)),
                withDirectives(createBaseVNode("input", {
                  "onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => form.value.price = $event),
                  type: "number",
                  step: "0.01",
                  required: "",
                  class: "w-full px-4 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 outline-none text-xs font-semibold text-slate-655 bg-white"
                }, null, 512), [
                  [
                    vModelText,
                    form.value.price,
                    void 0,
                    { number: true }
                  ]
                ])
              ])) : createCommentVNode("", true),
              createBaseVNode("div", null, [
                _cache[29] || (_cache[29] = createBaseVNode("label", { class: "block text-xs font-bold text-slate-500 mb-1.5 uppercase tracking-wider" }, "Event Image Cover", -1)),
                createBaseVNode("input", {
                  type: "file",
                  onChange: handleImageUpload,
                  accept: "image/*",
                  class: "w-full text-xs text-slate-505 file:mr-4 file:py-1.5 file:px-3 file:rounded-xl file:border-0 file:text-[11px] file:font-bold file:bg-purple-50 file:text-purple-700 hover:file:bg-purple-100 cursor-pointer"
                }, null, 32)
              ]),
              createBaseVNode("div", null, [
                _cache[30] || (_cache[30] = createBaseVNode("label", { class: "block text-xs font-bold text-slate-500 mb-1.5 uppercase tracking-wider" }, "Description", -1)),
                withDirectives(createBaseVNode("textarea", {
                  "onUpdate:modelValue": _cache[12] || (_cache[12] = ($event) => form.value.description = $event),
                  rows: "3",
                  class: "w-full px-4 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 outline-none text-xs font-semibold text-slate-655 bg-white resize-none",
                  placeholder: "Brief description of the event details..."
                }, null, 512), [
                  [vModelText, form.value.description]
                ])
              ]),
              createBaseVNode("div", _hoisted_43, [
                createBaseVNode("button", {
                  type: "button",
                  onClick: closeModal,
                  class: "flex-1 px-4 py-2.5 border border-slate-200 text-slate-500 font-bold rounded-xl hover:bg-slate-50 transition-colors text-xs cursor-pointer"
                }, " Cancel "),
                createBaseVNode("button", {
                  type: "submit",
                  disabled: loading.value,
                  class: "flex-1 px-4 py-2.5 bg-purple-600 hover:bg-purple-700 text-white rounded-xl transition-all disabled:opacity-50 text-xs font-bold cursor-pointer"
                }, [
                  createBaseVNode("span", null, toDisplayString(loading.value ? "Saving..." : isEditing.value ? "Update Event" : "Create Event"), 1)
                ], 8, _hoisted_44)
              ])
            ], 32)
          ])
        ])) : createCommentVNode("", true)
      ]);
    };
  }
});
const EventsPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-16cfab4c"]]);
export {
  EventsPage as default
};
