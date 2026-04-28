import { d as defineComponent, r as ref, o as onMounted, c as createElementBlock, b as createBaseVNode, m as createCommentVNode, f as createVNode, n as normalizeClass, u as unref, t as toDisplayString, s as withModifiers, v as withDirectives, x as vModelText, B as vModelSelect, e as createStaticVNode, z as vModelCheckbox, k as createBlock, F as Fragment, h as renderList, j as createTextVNode, i as openBlock } from "./main-TSJawxZI.js";
import { l as librarianAPI } from "./librarianApi-DnqiajX-.js";
import { u as useSwal } from "./useSwal-J4kFABxt.js";
import { R as RefreshCw } from "./refresh-cw-8WNefZ9w.js";
import { P as Plus } from "./plus-gfXyPFE6.js";
import { X } from "./x-DS-hgcEd.js";
import { U as Users } from "./users-D373qUzk.js";
import { C as Calendar } from "./calendar-13efgUbN.js";
import { P as Pen } from "./pen-CAzAi5sQ.js";
import { T as Trash2 } from "./trash-2-DXwwi8Md.js";
/* empty css               */
import "./createLucideIcon-Dj92g2Ex.js";
const _hoisted_1 = { class: "p-6 space-y-6" };
const _hoisted_2 = { class: "flex items-center justify-between" };
const _hoisted_3 = { class: "flex items-center space-x-3" };
const _hoisted_4 = ["disabled"];
const _hoisted_5 = { class: "text-sm font-medium" };
const _hoisted_6 = {
  key: 0,
  class: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
};
const _hoisted_7 = { class: "bg-white rounded-2xl shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto" };
const _hoisted_8 = { class: "p-6 border-b border-gray-100 flex items-center justify-between sticky top-0 bg-white z-10" };
const _hoisted_9 = { class: "text-2xl font-bold text-gray-900" };
const _hoisted_10 = { class: "grid grid-cols-1 md:grid-cols-2 gap-6" };
const _hoisted_11 = { class: "space-y-4" };
const _hoisted_12 = { class: "space-y-4" };
const _hoisted_13 = { class: "grid grid-cols-2 gap-4" };
const _hoisted_14 = { class: "flex items-center space-x-2" };
const _hoisted_15 = { class: "flex items-center justify-end space-x-3 pt-4 border-t border-gray-100" };
const _hoisted_16 = ["disabled"];
const _hoisted_17 = {
  key: 1,
  class: "flex items-center justify-center py-20"
};
const _hoisted_18 = {
  key: 2,
  class: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
};
const _hoisted_19 = { class: "aspect-video relative overflow-hidden bg-gray-100" };
const _hoisted_20 = ["src", "alt"];
const _hoisted_21 = {
  key: 1,
  class: "w-full h-full flex items-center justify-center bg-gray-100 text-gray-400"
};
const _hoisted_22 = { class: "absolute top-2 right-2" };
const _hoisted_23 = { class: "p-4" };
const _hoisted_24 = { class: "flex justify-between items-start mb-2" };
const _hoisted_25 = { class: "text-xs font-bold text-purple-600 uppercase tracking-wider" };
const _hoisted_26 = { class: "text-xs text-gray-500" };
const _hoisted_27 = { class: "font-bold text-gray-900 mb-1 line-clamp-1" };
const _hoisted_28 = { class: "text-sm text-gray-600 mb-3 line-clamp-2" };
const _hoisted_29 = { class: "flex items-center justify-between pt-3 border-t border-gray-100" };
const _hoisted_30 = { class: "text-xs text-gray-500 flex items-center" };
const _hoisted_31 = { class: "flex items-center space-x-2" };
const _hoisted_32 = ["onClick"];
const _hoisted_33 = ["onClick"];
const _hoisted_34 = ["onClick"];
const _hoisted_35 = {
  key: 3,
  class: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
};
const _hoisted_36 = { class: "bg-white rounded-2xl shadow-xl w-full max-w-2xl max-h-[85vh] flex flex-col overflow-hidden animate-in fade-in zoom-in duration-200" };
const _hoisted_37 = { class: "p-6 border-b border-gray-100 flex items-center justify-between bg-gradient-to-r from-purple-600 to-indigo-600 text-white" };
const _hoisted_38 = { class: "text-2xl font-bold" };
const _hoisted_39 = { class: "flex-1 overflow-y-auto p-0" };
const _hoisted_40 = {
  key: 0,
  class: "flex flex-col items-center justify-center py-20 bg-gray-50"
};
const _hoisted_41 = {
  key: 1,
  class: "overflow-x-auto"
};
const _hoisted_42 = { class: "w-full text-left" };
const _hoisted_43 = { class: "divide-y divide-gray-100" };
const _hoisted_44 = { class: "px-6 py-4" };
const _hoisted_45 = { class: "flex items-center" };
const _hoisted_46 = { class: "w-8 h-8 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center font-bold text-xs mr-3" };
const _hoisted_47 = { class: "text-sm font-bold text-gray-900" };
const _hoisted_48 = { class: "text-xs text-gray-500" };
const _hoisted_49 = { class: "px-6 py-4 text-sm text-gray-600" };
const _hoisted_50 = { class: "px-6 py-4 text-sm text-gray-500 italic" };
const _hoisted_51 = {
  key: 2,
  class: "py-20 text-center bg-gray-50"
};
const _hoisted_52 = { class: "p-4 border-t border-gray-100 bg-gray-50 flex justify-between items-center" };
const _hoisted_53 = { class: "text-sm font-medium text-gray-600" };
const _hoisted_54 = { class: "text-purple-600 font-bold" };
const _hoisted_55 = {
  key: 4,
  class: "bg-white rounded-xl shadow-sm border border-gray-200 py-20 text-center"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "EventsPage",
  setup(__props) {
    const events = ref([]);
    const loading = ref(false);
    const submitting = ref(false);
    const isModalOpen = ref(false);
    const isEditing = ref(false);
    const editingId = ref(null);
    const isDetailsModalOpen = ref(false);
    const loadingDetails = ref(false);
    const selectedEvent = ref(null);
    const viewDetails = async (event) => {
      selectedEvent.value = { ...event };
      isDetailsModalOpen.value = true;
      loadingDetails.value = true;
      try {
        const data = await librarianAPI.getEvent(event.id);
        selectedEvent.value = data;
      } catch (error) {
        console.error("Error fetching event details:", error);
        showError("Error", "Failed to load participant list");
      } finally {
        loadingDetails.value = false;
      }
    };
    const eventForm = ref({
      title: "",
      type: "",
      description: "",
      date: "",
      start_time: "",
      end_time: "",
      venue: "",
      capacity: null,
      is_paid: false,
      price: null,
      image: null
    });
    const handleImageUpload = (event) => {
      eventForm.value.image = event.target.files[0];
    };
    const openCreateModal = () => {
      isEditing.value = false;
      editingId.value = null;
      resetForm();
      isModalOpen.value = true;
    };
    const editEvent = (event) => {
      isEditing.value = true;
      editingId.value = event.id;
      eventForm.value = {
        title: event.title,
        type: event.type,
        description: event.description || "",
        date: event.date || "",
        // Ensure date format matches input type="date"
        start_time: event.start_time?.substring(0, 5) || "",
        end_time: event.end_time?.substring(0, 5) || "",
        venue: event.venue || "",
        capacity: event.capacity || null,
        is_paid: event.is_paid,
        price: event.price || null,
        image: null
      };
      isModalOpen.value = true;
    };
    const closeModal = () => {
      isModalOpen.value = false;
      resetForm();
    };
    const resetForm = () => {
      eventForm.value = {
        title: "",
        type: "",
        description: "",
        date: "",
        start_time: "",
        end_time: "",
        venue: "",
        capacity: null,
        is_paid: false,
        price: null,
        image: null
      };
    };
    const { showConfirm, showSuccess, showError } = useSwal();
    const submitEvent = async () => {
      submitting.value = true;
      try {
        const formData = new FormData();
        formData.append("title", eventForm.value.title);
        formData.append("type", eventForm.value.type);
        formData.append("description", eventForm.value.description);
        formData.append("date", eventForm.value.date);
        formData.append("start_time", eventForm.value.start_time);
        formData.append("end_time", eventForm.value.end_time);
        formData.append("venue", eventForm.value.venue);
        if (eventForm.value.capacity) formData.append("capacity", eventForm.value.capacity.toString());
        formData.append("is_paid", eventForm.value.is_paid ? "1" : "0");
        if (eventForm.value.is_paid && eventForm.value.price) formData.append("price", eventForm.value.price.toString());
        if (eventForm.value.image) formData.append("image", eventForm.value.image);
        if (isEditing.value && editingId.value) {
          await librarianAPI.updateEvent(editingId.value, formData);
          showSuccess("Updated!", "Event updated successfully");
        } else {
          await librarianAPI.createEvent(formData);
          showSuccess("Created!", "Event created successfully");
        }
        await fetchEvents();
        closeModal();
      } catch (error) {
        console.error("Error saving event:", error);
        showError("Save Failed", "Failed to save event. Please check the form.");
      } finally {
        submitting.value = false;
      }
    };
    const deleteEvent = async (id) => {
      if (!await showConfirm("Delete Event", "Are you sure you want to delete this event?", "Yes, Delete")) return;
      try {
        await librarianAPI.deleteEvent(id);
        showSuccess("Deleted!", "Event deleted successfully");
        await fetchEvents();
      } catch (error) {
        console.error("Error deleting event:", error);
        showError("Delete Failed", "Failed to delete event.");
      }
    };
    const fetchEvents = async () => {
      loading.value = true;
      try {
        const data = await librarianAPI.getEvents();
        events.value = data;
      } catch (error) {
        console.error("Error fetching events:", error);
      } finally {
        loading.value = false;
      }
    };
    const formatDate = (dateString) => {
      if (!dateString) return "";
      return new Date(dateString).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric"
      });
    };
    onMounted(() => {
      fetchEvents();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          _cache[13] || (_cache[13] = createBaseVNode("div", null, [
            createBaseVNode("h1", { class: "text-3xl font-bold text-white" }, "Events Management"),
            createBaseVNode("p", { class: "text-gray-400 mt-1" }, "Organize and manage library events")
          ], -1)),
          createBaseVNode("div", _hoisted_3, [
            createBaseVNode("button", {
              onClick: fetchEvents,
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
              class: "px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg hover:shadow-lg transition-all flex items-center space-x-2"
            }, [
              createVNode(unref(Plus), { class: "w-4 h-4" }),
              _cache[12] || (_cache[12] = createBaseVNode("span", { class: "text-sm font-medium" }, "Create Event", -1))
            ])
          ])
        ]),
        isModalOpen.value ? (openBlock(), createElementBlock("div", _hoisted_6, [
          createBaseVNode("div", _hoisted_7, [
            createBaseVNode("div", _hoisted_8, [
              createBaseVNode("h2", _hoisted_9, toDisplayString(isEditing.value ? "Edit Event" : "Create New Event"), 1),
              createBaseVNode("button", {
                onClick: closeModal,
                class: "p-2 hover:bg-gray-100 rounded-lg transition-colors"
              }, [
                createVNode(unref(X), { class: "w-5 h-5 text-gray-500" })
              ])
            ]),
            createBaseVNode("form", {
              onSubmit: withModifiers(submitEvent, ["prevent"]),
              class: "p-6 space-y-6"
            }, [
              createBaseVNode("div", _hoisted_10, [
                createBaseVNode("div", _hoisted_11, [
                  createBaseVNode("div", null, [
                    _cache[14] || (_cache[14] = createBaseVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Event Title *", -1)),
                    withDirectives(createBaseVNode("input", {
                      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => eventForm.value.title = $event),
                      type: "text",
                      required: "",
                      class: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
                    }, null, 512), [
                      [vModelText, eventForm.value.title]
                    ])
                  ]),
                  createBaseVNode("div", null, [
                    _cache[16] || (_cache[16] = createBaseVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Type *", -1)),
                    withDirectives(createBaseVNode("select", {
                      "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => eventForm.value.type = $event),
                      required: "",
                      class: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
                    }, [..._cache[15] || (_cache[15] = [
                      createStaticVNode('<option value="">Select Type</option><option value="seminar">Seminar</option><option value="workshop">Workshop</option><option value="study_group">Study Group</option><option value="exam_prep">Exam Prep</option><option value="career_guidance">Career Guidance</option><option value="networking">Networking</option>', 7)
                    ])], 512), [
                      [vModelSelect, eventForm.value.type]
                    ])
                  ]),
                  createBaseVNode("div", null, [
                    _cache[17] || (_cache[17] = createBaseVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Venue", -1)),
                    withDirectives(createBaseVNode("input", {
                      "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => eventForm.value.venue = $event),
                      type: "text",
                      class: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
                    }, null, 512), [
                      [vModelText, eventForm.value.venue]
                    ])
                  ]),
                  createBaseVNode("div", null, [
                    _cache[18] || (_cache[18] = createBaseVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Capacity", -1)),
                    withDirectives(createBaseVNode("input", {
                      "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => eventForm.value.capacity = $event),
                      type: "number",
                      min: "1",
                      class: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
                    }, null, 512), [
                      [vModelText, eventForm.value.capacity]
                    ])
                  ])
                ]),
                createBaseVNode("div", _hoisted_12, [
                  createBaseVNode("div", null, [
                    _cache[19] || (_cache[19] = createBaseVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Date *", -1)),
                    withDirectives(createBaseVNode("input", {
                      "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => eventForm.value.date = $event),
                      type: "date",
                      required: "",
                      class: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
                    }, null, 512), [
                      [vModelText, eventForm.value.date]
                    ])
                  ]),
                  createBaseVNode("div", _hoisted_13, [
                    createBaseVNode("div", null, [
                      _cache[20] || (_cache[20] = createBaseVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Start Time *", -1)),
                      withDirectives(createBaseVNode("input", {
                        "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => eventForm.value.start_time = $event),
                        type: "time",
                        required: "",
                        class: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
                      }, null, 512), [
                        [vModelText, eventForm.value.start_time]
                      ])
                    ]),
                    createBaseVNode("div", null, [
                      _cache[21] || (_cache[21] = createBaseVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "End Time *", -1)),
                      withDirectives(createBaseVNode("input", {
                        "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => eventForm.value.end_time = $event),
                        type: "time",
                        required: "",
                        class: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
                      }, null, 512), [
                        [vModelText, eventForm.value.end_time]
                      ])
                    ])
                  ]),
                  createBaseVNode("div", null, [
                    _cache[23] || (_cache[23] = createBaseVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Price (if paid)", -1)),
                    createBaseVNode("div", _hoisted_14, [
                      withDirectives(createBaseVNode("input", {
                        "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => eventForm.value.is_paid = $event),
                        type: "checkbox",
                        class: "w-4 h-4 text-purple-600 rounded border-gray-300 focus:ring-purple-500"
                      }, null, 512), [
                        [vModelCheckbox, eventForm.value.is_paid]
                      ]),
                      _cache[22] || (_cache[22] = createBaseVNode("span", { class: "text-sm text-gray-700" }, "Paid Event", -1))
                    ]),
                    eventForm.value.is_paid ? withDirectives((openBlock(), createElementBlock("input", {
                      key: 0,
                      "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => eventForm.value.price = $event),
                      type: "number",
                      min: "0",
                      step: "0.01",
                      class: "mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none",
                      placeholder: "0.00"
                    }, null, 512)), [
                      [vModelText, eventForm.value.price]
                    ]) : createCommentVNode("", true)
                  ]),
                  createBaseVNode("div", null, [
                    _cache[24] || (_cache[24] = createBaseVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Event Image", -1)),
                    createBaseVNode("input", {
                      type: "file",
                      onChange: handleImageUpload,
                      accept: "image/*",
                      class: "w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-purple-50 file:text-purple-700 hover:file:bg-purple-100"
                    }, null, 32)
                  ])
                ])
              ]),
              createBaseVNode("div", null, [
                _cache[25] || (_cache[25] = createBaseVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Description", -1)),
                withDirectives(createBaseVNode("textarea", {
                  "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => eventForm.value.description = $event),
                  rows: "3",
                  class: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none resize-none"
                }, null, 512), [
                  [vModelText, eventForm.value.description]
                ])
              ]),
              createBaseVNode("div", _hoisted_15, [
                createBaseVNode("button", {
                  type: "button",
                  onClick: closeModal,
                  class: "px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                }, " Cancel "),
                createBaseVNode("button", {
                  type: "submit",
                  disabled: submitting.value,
                  class: "px-6 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg hover:shadow-lg transition-all disabled:opacity-50 flex items-center space-x-2"
                }, [
                  submitting.value ? (openBlock(), createBlock(unref(RefreshCw), {
                    key: 0,
                    class: "w-4 h-4 animate-spin"
                  })) : createCommentVNode("", true),
                  createBaseVNode("span", null, toDisplayString(submitting.value ? "Saving..." : isEditing.value ? "Update Event" : "Create Event"), 1)
                ], 8, _hoisted_16)
              ])
            ], 32)
          ])
        ])) : createCommentVNode("", true),
        loading.value ? (openBlock(), createElementBlock("div", _hoisted_17, [
          createVNode(unref(RefreshCw), { class: "w-8 h-8 text-purple-600 animate-spin" })
        ])) : events.value.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_18, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(events.value, (event) => {
            return openBlock(), createElementBlock("div", {
              key: event.id,
              class: "bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden group hover:shadow-md transition-all"
            }, [
              createBaseVNode("div", _hoisted_19, [
                event.image ? (openBlock(), createElementBlock("img", {
                  key: 0,
                  src: event.image,
                  alt: event.title,
                  class: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                }, null, 8, _hoisted_20)) : (openBlock(), createElementBlock("div", _hoisted_21, [
                  createVNode(unref(Calendar), { class: "w-12 h-12" })
                ])),
                createBaseVNode("div", _hoisted_22, [
                  createBaseVNode("span", {
                    class: normalizeClass([
                      "px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider shadow-sm",
                      event.is_paid ? "bg-yellow-500 text-white" : "bg-green-500 text-white"
                    ])
                  }, toDisplayString(event.is_paid ? "Paid" : "Free"), 3)
                ])
              ]),
              createBaseVNode("div", _hoisted_23, [
                createBaseVNode("div", _hoisted_24, [
                  createBaseVNode("span", _hoisted_25, toDisplayString(event.type.replace("_", " ")), 1),
                  createBaseVNode("span", _hoisted_26, toDisplayString(formatDate(event.date)), 1)
                ]),
                createBaseVNode("h3", _hoisted_27, toDisplayString(event.title), 1),
                createBaseVNode("p", _hoisted_28, toDisplayString(event.description), 1),
                createBaseVNode("div", _hoisted_29, [
                  createBaseVNode("div", _hoisted_30, [
                    createVNode(unref(Users), { class: "w-3 h-3 mr-1" }),
                    createTextVNode(" " + toDisplayString(event.registered_count || 0) + " / " + toDisplayString(event.capacity || "∞"), 1)
                  ]),
                  createBaseVNode("div", _hoisted_31, [
                    createBaseVNode("button", {
                      onClick: ($event) => viewDetails(event),
                      class: "px-3 py-1 text-xs font-medium bg-purple-50 text-purple-600 hover:bg-purple-100 rounded-lg transition-colors border border-purple-100"
                    }, " Details ", 8, _hoisted_32),
                    createBaseVNode("button", {
                      onClick: ($event) => editEvent(event),
                      class: "p-1.5 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                    }, [
                      createVNode(unref(Pen), { class: "w-4 h-4" })
                    ], 8, _hoisted_33),
                    createBaseVNode("button", {
                      onClick: ($event) => deleteEvent(event.id),
                      class: "p-1.5 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                    }, [
                      createVNode(unref(Trash2), { class: "w-4 h-4" })
                    ], 8, _hoisted_34)
                  ])
                ])
              ])
            ]);
          }), 128))
        ])) : createCommentVNode("", true),
        isDetailsModalOpen.value ? (openBlock(), createElementBlock("div", _hoisted_35, [
          createBaseVNode("div", _hoisted_36, [
            createBaseVNode("div", _hoisted_37, [
              createBaseVNode("div", null, [
                createBaseVNode("h2", _hoisted_38, toDisplayString(selectedEvent.value?.title), 1),
                _cache[26] || (_cache[26] = createBaseVNode("p", { class: "text-purple-100 text-sm mt-1" }, "Participants List", -1))
              ]),
              createBaseVNode("button", {
                onClick: _cache[10] || (_cache[10] = ($event) => isDetailsModalOpen.value = false),
                class: "p-2 hover:bg-white/20 rounded-lg transition-colors"
              }, [
                createVNode(unref(X), { class: "w-5 h-5" })
              ])
            ]),
            createBaseVNode("div", _hoisted_39, [
              loadingDetails.value ? (openBlock(), createElementBlock("div", _hoisted_40, [
                createVNode(unref(RefreshCw), { class: "w-8 h-8 text-purple-600 animate-spin mb-4" }),
                _cache[27] || (_cache[27] = createBaseVNode("p", { class: "text-gray-500 font-medium" }, "Loading participants...", -1))
              ])) : selectedEvent.value?.registrations?.length ? (openBlock(), createElementBlock("div", _hoisted_41, [
                createBaseVNode("table", _hoisted_42, [
                  _cache[28] || (_cache[28] = createBaseVNode("thead", { class: "bg-gray-50 sticky top-0 z-10" }, [
                    createBaseVNode("tr", null, [
                      createBaseVNode("th", { class: "px-6 py-3 text-xs font-bold text-gray-500 uppercase tracking-wider" }, "Student"),
                      createBaseVNode("th", { class: "px-6 py-3 text-xs font-bold text-gray-500 uppercase tracking-wider" }, "Level"),
                      createBaseVNode("th", { class: "px-6 py-3 text-xs font-bold text-gray-500 uppercase tracking-wider" }, "Registered At")
                    ])
                  ], -1)),
                  createBaseVNode("tbody", _hoisted_43, [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(selectedEvent.value.registrations, (reg) => {
                      return openBlock(), createElementBlock("tr", {
                        key: reg.id,
                        class: "hover:bg-gray-50 transition-colors"
                      }, [
                        createBaseVNode("td", _hoisted_44, [
                          createBaseVNode("div", _hoisted_45, [
                            createBaseVNode("div", _hoisted_46, toDisplayString(reg.user?.name?.charAt(0) || "?"), 1),
                            createBaseVNode("div", null, [
                              createBaseVNode("p", _hoisted_47, toDisplayString(reg.user?.name), 1),
                              createBaseVNode("p", _hoisted_48, toDisplayString(reg.user?.email), 1)
                            ])
                          ])
                        ]),
                        createBaseVNode("td", _hoisted_49, toDisplayString(reg.user?.ca_level || "N/A"), 1),
                        createBaseVNode("td", _hoisted_50, toDisplayString(formatDate(reg.created_at)), 1)
                      ]);
                    }), 128))
                  ])
                ])
              ])) : (openBlock(), createElementBlock("div", _hoisted_51, [
                createVNode(unref(Users), { class: "w-12 h-12 text-gray-300 mx-auto mb-4" }),
                _cache[29] || (_cache[29] = createBaseVNode("h3", { class: "text-lg font-medium text-gray-900" }, "No participants yet", -1)),
                _cache[30] || (_cache[30] = createBaseVNode("p", { class: "text-gray-500" }, "When students register, they will appear here.", -1))
              ]))
            ]),
            createBaseVNode("div", _hoisted_52, [
              createBaseVNode("div", _hoisted_53, [
                _cache[31] || (_cache[31] = createTextVNode(" Total: ", -1)),
                createBaseVNode("span", _hoisted_54, toDisplayString(selectedEvent.value?.registrations?.length || 0), 1)
              ]),
              createBaseVNode("button", {
                onClick: _cache[11] || (_cache[11] = ($event) => isDetailsModalOpen.value = false),
                class: "px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors text-sm font-bold"
              }, " Close ")
            ])
          ])
        ])) : (openBlock(), createElementBlock("div", _hoisted_55, [
          createVNode(unref(Calendar), { class: "w-12 h-12 text-gray-300 mx-auto mb-4" }),
          _cache[32] || (_cache[32] = createBaseVNode("h3", { class: "text-lg font-medium text-gray-900" }, "No events found", -1)),
          _cache[33] || (_cache[33] = createBaseVNode("p", { class: "text-gray-500" }, "Create your first event to get started", -1))
        ]))
      ]);
    };
  }
});
export {
  _sfc_main as default
};
