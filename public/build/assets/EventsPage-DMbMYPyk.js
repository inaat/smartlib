import { d as defineComponent, r as ref, G as watch, o as onMounted, a as createElementBlock, b as createBaseVNode, f as createVNode, l as createCommentVNode, F as Fragment, j as renderList, t as toDisplayString, u as unref, z as withModifiers, p as withDirectives, v as vModelText, D as vModelSelect, B as vModelCheckbox, n as normalizeClass, i as createTextVNode, k as openBlock } from "./main-DKJzpCzk.js";
import { s as superadminAPI } from "./superadminApi-RBkuQ_58.js";
import { _ as _sfc_main$1 } from "./LibrarySelector.vue_vue_type_script_setup_true_lang-BUkIeLnQ.js";
import { X } from "./x-BLKH3q-c.js";
import { C as Calendar } from "./calendar-FTR2aUnV.js";
import { C as Clock } from "./clock-xlNueMyC.js";
import { U as Users } from "./users-3SVXGYtw.js";
/* empty css               */
import "./library-Bkji8mTt.js";
import "./createLucideIcon-TQ5d7bQA.js";
const _hoisted_1 = { class: "p-6 space-y-6" };
const _hoisted_2 = { class: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" };
const _hoisted_3 = { class: "h-40 bg-gray-100 relative" };
const _hoisted_4 = ["src"];
const _hoisted_5 = {
  key: 1,
  class: "w-full h-full flex items-center justify-center text-gray-400"
};
const _hoisted_6 = { class: "absolute top-3 right-3" };
const _hoisted_7 = { class: "p-4" };
const _hoisted_8 = { class: "flex items-center justify-between mb-2" };
const _hoisted_9 = { class: "text-xs font-semibold text-indigo-600 uppercase" };
const _hoisted_10 = { class: "text-xs text-gray-500" };
const _hoisted_11 = { class: "text-lg font-bold text-gray-900 mb-2" };
const _hoisted_12 = { class: "space-y-2 mb-4" };
const _hoisted_13 = { class: "flex items-center text-sm text-gray-600" };
const _hoisted_14 = { class: "flex items-center text-sm text-gray-600" };
const _hoisted_15 = { class: "flex items-center text-sm text-gray-600" };
const _hoisted_16 = { class: "flex items-center justify-end space-x-3 pt-4 border-t border-gray-100" };
const _hoisted_17 = ["onClick"];
const _hoisted_18 = ["onClick"];
const _hoisted_19 = {
  key: 0,
  class: "col-span-full bg-white rounded-xl border border-dashed border-gray-300 p-12 text-center text-gray-500"
};
const _hoisted_20 = {
  key: 0,
  class: "fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 overflow-y-auto"
};
const _hoisted_21 = { class: "bg-white rounded-xl shadow-xl max-w-2xl w-full mx-4 my-8 p-6" };
const _hoisted_22 = { class: "flex items-center justify-between mb-4" };
const _hoisted_23 = { class: "text-xl font-bold text-gray-900" };
const _hoisted_24 = { class: "grid grid-cols-1 md:grid-cols-2 gap-4" };
const _hoisted_25 = ["value"];
const _hoisted_26 = { class: "grid grid-cols-1 md:grid-cols-3 gap-4" };
const _hoisted_27 = { class: "grid grid-cols-1 md:grid-cols-2 gap-4" };
const _hoisted_28 = { class: "grid grid-cols-1 md:grid-cols-2 gap-4" };
const _hoisted_29 = { class: "flex items-center space-x-4 pt-6" };
const _hoisted_30 = { class: "flex items-center space-x-2" };
const _hoisted_31 = { class: "flex items-center space-x-2" };
const _hoisted_32 = { key: 0 };
const _hoisted_33 = { class: "flex items-center space-x-3 pt-4" };
const _hoisted_34 = ["disabled"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "EventsPage",
  setup(__props) {
    const selectedLibraryId = ref(null);
    const events = ref([]);
    const libraries = ref([]);
    const showModal = ref(false);
    const isEditing = ref(false);
    const loading = ref(false);
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
      try {
        const params = {};
        if (selectedLibraryId.value) params.library_id = selectedLibraryId.value;
        events.value = await superadminAPI.getEvents(params);
      } catch (error) {
        console.error("Error fetching events:", error);
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
      form.value = {
        id: null,
        title: "",
        description: "",
        library_id: selectedLibraryId.value || (libraries.value.length > 0 ? libraries.value[0].id : null),
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
        library_id: event.library_id,
        date: event.date,
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
      loading.value = true;
      try {
        const formData = new FormData();
        formData.append("title", form.value.title);
        formData.append("description", form.value.description || "");
        formData.append("library_id", form.value.library_id?.toString() || "");
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
          formData.append("_method", "PUT");
          await superadminAPI.updateEvent(form.value.id.toString(), formData);
        } else {
          await superadminAPI.createEvent(formData);
        }
        await fetchEvents();
        closeModal();
      } catch (error) {
        console.error("Error saving event:", error);
      } finally {
        loading.value = false;
      }
    };
    const confirmDelete = async (event) => {
      if (confirm("Are you sure you want to delete this event?")) {
        try {
          await superadminAPI.deleteEvent(event.id.toString());
          await fetchEvents();
        } catch (error) {
          console.error("Error deleting event:", error);
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
        createBaseVNode("div", { class: "flex items-center justify-between" }, [
          _cache[13] || (_cache[13] = createBaseVNode("div", null, [
            createBaseVNode("h1", { class: "text-3xl font-bold text-gray-900" }, "Event Management"),
            createBaseVNode("p", { class: "text-gray-600 mt-1" }, "Manage library events across all libraries")
          ], -1)),
          createBaseVNode("button", {
            onClick: openCreateModal,
            class: "px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg hover:shadow-lg transition-all flex items-center space-x-2"
          }, [..._cache[12] || (_cache[12] = [
            createBaseVNode("span", { class: "text-sm font-medium" }, "Create Event", -1)
          ])])
        ]),
        createVNode(_sfc_main$1, {
          modelValue: selectedLibraryId.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => selectedLibraryId.value = $event)
        }, null, 8, ["modelValue"]),
        createBaseVNode("div", _hoisted_2, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(events.value, (event) => {
            return openBlock(), createElementBlock("div", {
              key: event.id,
              class: "bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
            }, [
              createBaseVNode("div", _hoisted_3, [
                event.image ? (openBlock(), createElementBlock("img", {
                  key: 0,
                  src: event.image,
                  class: "w-full h-full object-cover"
                }, null, 8, _hoisted_4)) : (openBlock(), createElementBlock("div", _hoisted_5, [
                  createVNode(unref(Calendar), { class: "w-12 h-12" })
                ])),
                createBaseVNode("div", _hoisted_6, [
                  createBaseVNode("span", {
                    class: normalizeClass(["px-2 py-1 rounded-full text-xs font-bold", event.is_active ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"])
                  }, toDisplayString(event.is_active ? "Active" : "Inactive"), 3)
                ])
              ]),
              createBaseVNode("div", _hoisted_7, [
                createBaseVNode("div", _hoisted_8, [
                  createBaseVNode("span", _hoisted_9, toDisplayString(event.type || "General"), 1),
                  createBaseVNode("span", _hoisted_10, toDisplayString(event.library?.name), 1)
                ]),
                createBaseVNode("h3", _hoisted_11, toDisplayString(event.title), 1),
                createBaseVNode("div", _hoisted_12, [
                  createBaseVNode("div", _hoisted_13, [
                    createVNode(unref(Calendar), { class: "w-4 h-4 mr-2" }),
                    createTextVNode(" " + toDisplayString(formatDate(event.date)), 1)
                  ]),
                  createBaseVNode("div", _hoisted_14, [
                    createVNode(unref(Clock), { class: "w-4 h-4 mr-2" }),
                    createTextVNode(" " + toDisplayString(event.start_time) + " - " + toDisplayString(event.end_time), 1)
                  ]),
                  createBaseVNode("div", _hoisted_15, [
                    createVNode(unref(Users), { class: "w-4 h-4 mr-2" }),
                    createTextVNode(" " + toDisplayString(event.registered_count || 0) + " / " + toDisplayString(event.capacity || "∞") + " Registered ", 1)
                  ])
                ]),
                createBaseVNode("div", _hoisted_16, [
                  createBaseVNode("button", {
                    onClick: ($event) => editEvent(event),
                    class: "text-sm font-medium text-indigo-600 hover:text-indigo-800"
                  }, "Edit", 8, _hoisted_17),
                  createBaseVNode("button", {
                    onClick: ($event) => confirmDelete(event),
                    class: "text-sm font-medium text-red-600 hover:text-red-800"
                  }, "Delete", 8, _hoisted_18)
                ])
              ])
            ]);
          }), 128)),
          events.value.length === 0 ? (openBlock(), createElementBlock("div", _hoisted_19, " No events found. Create your first event to get started. ")) : createCommentVNode("", true)
        ]),
        showModal.value ? (openBlock(), createElementBlock("div", _hoisted_20, [
          createBaseVNode("div", _hoisted_21, [
            createBaseVNode("div", _hoisted_22, [
              createBaseVNode("h3", _hoisted_23, toDisplayString(isEditing.value ? "Edit Event" : "Create New Event"), 1),
              createBaseVNode("button", {
                onClick: closeModal,
                class: "p-2 hover:bg-gray-100 rounded-lg transition-colors"
              }, [
                createVNode(unref(X), { class: "w-5 h-5" })
              ])
            ]),
            createBaseVNode("form", {
              onSubmit: withModifiers(saveEvent, ["prevent"]),
              class: "space-y-4"
            }, [
              createBaseVNode("div", _hoisted_24, [
                createBaseVNode("div", null, [
                  _cache[14] || (_cache[14] = createBaseVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Event Title", -1)),
                  withDirectives(createBaseVNode("input", {
                    "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => form.value.title = $event),
                    type: "text",
                    required: "",
                    class: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                  }, null, 512), [
                    [vModelText, form.value.title]
                  ])
                ]),
                createBaseVNode("div", null, [
                  _cache[15] || (_cache[15] = createBaseVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Library", -1)),
                  withDirectives(createBaseVNode("select", {
                    "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => form.value.library_id = $event),
                    required: "",
                    class: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                  }, [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(libraries.value, (lib) => {
                      return openBlock(), createElementBlock("option", {
                        key: lib.id,
                        value: lib.id
                      }, toDisplayString(lib.name), 9, _hoisted_25);
                    }), 128))
                  ], 512), [
                    [vModelSelect, form.value.library_id]
                  ])
                ])
              ]),
              createBaseVNode("div", _hoisted_26, [
                createBaseVNode("div", null, [
                  _cache[16] || (_cache[16] = createBaseVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Date", -1)),
                  withDirectives(createBaseVNode("input", {
                    "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => form.value.date = $event),
                    type: "date",
                    required: "",
                    class: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                  }, null, 512), [
                    [vModelText, form.value.date]
                  ])
                ]),
                createBaseVNode("div", null, [
                  _cache[17] || (_cache[17] = createBaseVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Start Time", -1)),
                  withDirectives(createBaseVNode("input", {
                    "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => form.value.start_time = $event),
                    type: "time",
                    required: "",
                    class: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                  }, null, 512), [
                    [vModelText, form.value.start_time]
                  ])
                ]),
                createBaseVNode("div", null, [
                  _cache[18] || (_cache[18] = createBaseVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "End Time", -1)),
                  withDirectives(createBaseVNode("input", {
                    "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => form.value.end_time = $event),
                    type: "time",
                    required: "",
                    class: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                  }, null, 512), [
                    [vModelText, form.value.end_time]
                  ])
                ])
              ]),
              createBaseVNode("div", _hoisted_27, [
                createBaseVNode("div", null, [
                  _cache[19] || (_cache[19] = createBaseVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Venue", -1)),
                  withDirectives(createBaseVNode("input", {
                    "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => form.value.venue = $event),
                    type: "text",
                    class: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500",
                    placeholder: "e.g. Main Hall"
                  }, null, 512), [
                    [vModelText, form.value.venue]
                  ])
                ]),
                createBaseVNode("div", null, [
                  _cache[20] || (_cache[20] = createBaseVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Capacity", -1)),
                  withDirectives(createBaseVNode("input", {
                    "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => form.value.capacity = $event),
                    type: "number",
                    class: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500",
                    placeholder: "e.g. 50"
                  }, null, 512), [
                    [
                      vModelText,
                      form.value.capacity,
                      void 0,
                      { number: true }
                    ]
                  ])
                ])
              ]),
              createBaseVNode("div", null, [
                _cache[21] || (_cache[21] = createBaseVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Description", -1)),
                withDirectives(createBaseVNode("textarea", {
                  "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => form.value.description = $event),
                  rows: "3",
                  class: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                }, null, 512), [
                  [vModelText, form.value.description]
                ])
              ]),
              createBaseVNode("div", _hoisted_28, [
                createBaseVNode("div", null, [
                  _cache[22] || (_cache[22] = createBaseVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Event Image", -1)),
                  createBaseVNode("input", {
                    type: "file",
                    onChange: handleImageUpload,
                    accept: "image/*",
                    class: "w-full px-4 py-2 border border-gray-300 rounded-lg"
                  }, null, 32)
                ]),
                createBaseVNode("div", _hoisted_29, [
                  createBaseVNode("label", _hoisted_30, [
                    withDirectives(createBaseVNode("input", {
                      "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => form.value.is_active = $event),
                      type: "checkbox",
                      class: "w-4 h-4 text-indigo-600 rounded"
                    }, null, 512), [
                      [vModelCheckbox, form.value.is_active]
                    ]),
                    _cache[23] || (_cache[23] = createBaseVNode("span", { class: "text-sm font-medium text-gray-700" }, "Active", -1))
                  ]),
                  createBaseVNode("label", _hoisted_31, [
                    withDirectives(createBaseVNode("input", {
                      "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => form.value.is_paid = $event),
                      type: "checkbox",
                      class: "w-4 h-4 text-indigo-600 rounded"
                    }, null, 512), [
                      [vModelCheckbox, form.value.is_paid]
                    ]),
                    _cache[24] || (_cache[24] = createBaseVNode("span", { class: "text-sm font-medium text-gray-700" }, "Paid Event", -1))
                  ])
                ])
              ]),
              form.value.is_paid ? (openBlock(), createElementBlock("div", _hoisted_32, [
                _cache[25] || (_cache[25] = createBaseVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Price", -1)),
                withDirectives(createBaseVNode("input", {
                  "onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => form.value.price = $event),
                  type: "number",
                  step: "0.01",
                  class: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                }, null, 512), [
                  [
                    vModelText,
                    form.value.price,
                    void 0,
                    { number: true }
                  ]
                ])
              ])) : createCommentVNode("", true),
              createBaseVNode("div", _hoisted_33, [
                createBaseVNode("button", {
                  type: "submit",
                  disabled: loading.value,
                  class: "flex-1 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors disabled:opacity-50"
                }, toDisplayString(loading.value ? "Saving..." : isEditing.value ? "Update Event" : "Create Event"), 9, _hoisted_34),
                createBaseVNode("button", {
                  type: "button",
                  onClick: closeModal,
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
