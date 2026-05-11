import { d as defineComponent, r as ref, o as onMounted, c as createElementBlock, b as createBaseVNode, m as createCommentVNode, f as createVNode, n as normalizeClass, u as unref, t as toDisplayString, F as Fragment, h as renderList, s as withModifiers, v as withDirectives, x as vModelText, z as vModelCheckbox, B as vModelSelect, V as ownerAPI, j as createTextVNode, i as openBlock } from "./main-Dk2mUbjP.js";
import { u as useSwal } from "./useSwal-J4kFABxt.js";
import { R as RefreshCw } from "./refresh-cw-D9O5gUrY.js";
import { P as Plus } from "./plus-DLXboEx4.js";
import { X } from "./x-YsebUqOw.js";
import { C as CreditCard } from "./credit-card-Bxu1JJxU.js";
import { C as CircleCheck } from "./circle-check-DYTBJZUl.js";
import { P as Pen } from "./pen-sB2k7vRA.js";
import { T as Trash2 } from "./trash-2-jL_HLZPz.js";
/* empty css               */
import "./createLucideIcon-6n-23kmf.js";
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
const _hoisted_8 = { class: "p-6 flex-1" };
const _hoisted_9 = { class: "flex items-center justify-between mb-4" };
const _hoisted_10 = { class: "p-2 bg-indigo-50 rounded-lg" };
const _hoisted_11 = { class: "text-xl font-bold text-gray-900 mb-1" };
const _hoisted_12 = { class: "text-sm text-gray-500 mb-4 line-clamp-2" };
const _hoisted_13 = { class: "flex items-baseline space-x-1 mb-6" };
const _hoisted_14 = { class: "text-3xl font-bold text-gray-900" };
const _hoisted_15 = { class: "text-gray-500 text-sm" };
const _hoisted_16 = { class: "space-y-3 font-medium" };
const _hoisted_17 = { class: "flex items-center text-sm text-gray-600" };
const _hoisted_18 = { class: "flex items-center text-sm text-gray-600" };
const _hoisted_19 = { class: "flex items-center text-sm text-gray-600" };
const _hoisted_20 = { class: "flex items-center text-sm text-gray-600" };
const _hoisted_21 = { class: "flex items-center text-sm text-gray-600" };
const _hoisted_22 = { class: "flex items-center text-sm text-gray-600" };
const _hoisted_23 = { key: 0 };
const _hoisted_24 = { key: 1 };
const _hoisted_25 = { key: 2 };
const _hoisted_26 = {
  key: 0,
  class: "flex items-center text-sm text-gray-600"
};
const _hoisted_27 = {
  key: 1,
  class: "flex items-center text-sm text-gray-600"
};
const _hoisted_28 = { class: "px-6 py-4 bg-gray-50 border-t border-gray-100 flex items-center justify-between" };
const _hoisted_29 = ["onClick"];
const _hoisted_30 = ["onClick"];
const _hoisted_31 = {
  key: 2,
  class: "fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
};
const _hoisted_32 = { class: "bg-white rounded-xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto" };
const _hoisted_33 = { class: "p-6 border-b border-gray-200 flex items-center justify-between sticky top-0 bg-white z-10" };
const _hoisted_34 = { class: "text-xl font-bold text-gray-900" };
const _hoisted_35 = { class: "grid grid-cols-1 md:grid-cols-2 gap-6" };
const _hoisted_36 = { class: "md:col-span-2" };
const _hoisted_37 = { class: "md:col-span-2" };
const _hoisted_38 = { class: "md:col-span-2 space-y-4" };
const _hoisted_39 = { class: "grid grid-cols-1 md:grid-cols-2 gap-4" };
const _hoisted_40 = { class: "flex items-center space-x-3 p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors" };
const _hoisted_41 = { class: "flex items-center space-x-3 p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors" };
const _hoisted_42 = { class: "flex items-center space-x-3 pt-6 border-t border-gray-100" };
const _hoisted_43 = ["disabled"];
const _hoisted_44 = {
  key: 0,
  class: "animate-spin rounded-full h-4 w-4 border-b-2 border-white"
};
const _hoisted_45 = { class: "font-bold" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "SubscriptionPlanManagementPage",
  setup(__props) {
    const { showConfirm, showSuccess, showError } = useSwal();
    const plans = ref([]);
    const loading = ref(false);
    const saving = ref(false);
    const showModal = ref(false);
    const isEditing = ref(false);
    const form = ref({
      id: null,
      name: "",
      description: "",
      price: 0,
      duration_days: 30,
      free_trial_days: 0,
      seat_bookings_limit: 0,
      daily_seat_bookings_limit: 0,
      monthly_seat_bookings_limit: 0,
      libraries_access_limit: 0,
      books_access_limit: 0,
      events_joining_limit: 0,
      advance_booking_days: 0,
      book_reservations_limit: 0,
      digital_books_access: false,
      priority_booking: false,
      status: "active"
    });
    const fetchPlans = async () => {
      loading.value = true;
      try {
        const response = await ownerAPI.getSubscriptionPlans();
        plans.value = response;
      } catch (error) {
        console.error("Error fetching plans:", error);
      } finally {
        loading.value = false;
      }
    };
    const openCreateModal = () => {
      isEditing.value = false;
      form.value = {
        id: null,
        name: "",
        description: "",
        price: 0,
        duration_days: 30,
        free_trial_days: 0,
        seat_bookings_limit: 0,
        daily_seat_bookings_limit: 0,
        monthly_seat_bookings_limit: 0,
        libraries_access_limit: 0,
        books_access_limit: 0,
        events_joining_limit: 0,
        advance_booking_days: 0,
        book_reservations_limit: 0,
        digital_books_access: false,
        priority_booking: false,
        status: "active"
      };
      showModal.value = true;
    };
    const editPlan = (plan) => {
      isEditing.value = true;
      form.value = {
        id: plan.id,
        name: plan.name,
        description: plan.description || "",
        price: plan.price,
        duration_days: plan.duration_days,
        free_trial_days: plan.free_trial_days || 0,
        seat_bookings_limit: plan.seat_bookings_limit || 0,
        daily_seat_bookings_limit: plan.daily_seat_bookings_limit || 0,
        monthly_seat_bookings_limit: plan.monthly_seat_bookings_limit || 0,
        libraries_access_limit: plan.libraries_access_limit || 0,
        books_access_limit: plan.books_access_limit || 0,
        events_joining_limit: plan.events_joining_limit || 0,
        advance_booking_days: plan.advance_booking_days || 0,
        book_reservations_limit: plan.book_reservations_limit || 0,
        digital_books_access: !!plan.digital_books_access,
        priority_booking: !!plan.priority_booking,
        status: plan.status
      };
      showModal.value = true;
    };
    const savePlan = async () => {
      saving.value = true;
      try {
        if (isEditing.value && form.value.id) {
          await ownerAPI.updateSubscriptionPlan(form.value.id, form.value);
        } else {
          const { id, ...createData } = form.value;
          await ownerAPI.createSubscriptionPlan(createData);
        }
        await fetchPlans();
        showModal.value = false;
        showSuccess("Saved!", isEditing.value ? "Plan updated successfully!" : "Plan created successfully!");
      } catch (error) {
        console.error("Error saving plan:", error);
        const message = error.response?.data?.message || error.response?.data?.errors ? Object.values(error.response.data.errors).flat().join("\n") : "An error occurred while saving the plan.";
        showError("Save Failed", message);
      } finally {
        saving.value = false;
      }
    };
    const confirmDelete = async (plan) => {
      if (await showConfirm("Delete Plan", `Are you sure you want to delete the plan "${plan.name}"? This will only work if there are no active subscribers.`, "Yes, Delete")) {
        try {
          await ownerAPI.deleteSubscriptionPlan(plan.id);
          await fetchPlans();
          showSuccess("Deleted!", "Plan deleted successfully");
        } catch (error) {
          showError("Delete Failed", error.response?.data?.message || "Error deleting plan");
        }
      }
    };
    onMounted(() => {
      fetchPlans();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          _cache[17] || (_cache[17] = createBaseVNode("div", null, [
            createBaseVNode("h1", { class: "text-3xl font-bold text-gray-900" }, "Subscription Plans"),
            createBaseVNode("p", { class: "text-gray-600 mt-1" }, "Manage membership tiers and access levels")
          ], -1)),
          createBaseVNode("div", _hoisted_3, [
            createBaseVNode("button", {
              onClick: fetchPlans,
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
              _cache[16] || (_cache[16] = createBaseVNode("span", { class: "text-sm font-medium" }, "Create Plan", -1))
            ])
          ])
        ]),
        loading.value && plans.value.length === 0 ? (openBlock(), createElementBlock("div", _hoisted_6, [..._cache[18] || (_cache[18] = [
          createBaseVNode("div", { class: "animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600" }, null, -1)
        ])])) : (openBlock(), createElementBlock("div", _hoisted_7, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(plans.value, (plan) => {
            return openBlock(), createElementBlock("div", {
              key: plan.id,
              class: "bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden flex flex-col hover:shadow-md transition-shadow"
            }, [
              createBaseVNode("div", _hoisted_8, [
                createBaseVNode("div", _hoisted_9, [
                  createBaseVNode("div", _hoisted_10, [
                    createVNode(unref(CreditCard), { class: "w-6 h-6 text-indigo-600" })
                  ]),
                  createBaseVNode("span", {
                    class: normalizeClass([
                      "px-2 py-1 rounded-full text-xs font-medium",
                      plan.status === "active" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                    ])
                  }, toDisplayString(plan.status === "active" ? "Active" : "Inactive"), 3)
                ]),
                createBaseVNode("h3", _hoisted_11, toDisplayString(plan.name), 1),
                createBaseVNode("p", _hoisted_12, toDisplayString(plan.description), 1),
                createBaseVNode("div", _hoisted_13, [
                  createBaseVNode("span", _hoisted_14, "Rs. " + toDisplayString(plan.price), 1),
                  createBaseVNode("span", _hoisted_15, "/ " + toDisplayString(plan.duration_days) + " days", 1)
                ]),
                createBaseVNode("div", _hoisted_16, [
                  createBaseVNode("div", _hoisted_17, [
                    createVNode(unref(CircleCheck), { class: "w-4 h-4 mr-2 text-green-500" }),
                    createTextVNode(" " + toDisplayString(plan.daily_seat_bookings_limit || "Unlimited") + " Daily Seat Bookings ", 1)
                  ]),
                  createBaseVNode("div", _hoisted_18, [
                    createVNode(unref(CircleCheck), { class: "w-4 h-4 mr-2 text-green-500" }),
                    createTextVNode(" " + toDisplayString(plan.monthly_seat_bookings_limit || "Unlimited") + " Monthly Seat Bookings ", 1)
                  ]),
                  createBaseVNode("div", _hoisted_19, [
                    createVNode(unref(CircleCheck), { class: "w-4 h-4 mr-2 text-green-500" }),
                    createTextVNode(" " + toDisplayString(plan.libraries_access_limit || "Unlimited") + " Libraries Access ", 1)
                  ]),
                  createBaseVNode("div", _hoisted_20, [
                    createVNode(unref(CircleCheck), { class: "w-4 h-4 mr-2 text-green-500" }),
                    createTextVNode(" " + toDisplayString(plan.books_access_limit || "Unlimited") + " Books Access ", 1)
                  ]),
                  createBaseVNode("div", _hoisted_21, [
                    createVNode(unref(CircleCheck), { class: "w-4 h-4 mr-2 text-green-500" }),
                    createTextVNode(" " + toDisplayString(plan.events_joining_limit || "Unlimited") + " Events Joining ", 1)
                  ]),
                  createBaseVNode("div", _hoisted_22, [
                    createVNode(unref(CircleCheck), { class: "w-4 h-4 mr-2 text-green-500" }),
                    plan.advance_booking_days === -1 ? (openBlock(), createElementBlock("span", _hoisted_23, "Unlimited Advance Booking")) : plan.advance_booking_days === 0 ? (openBlock(), createElementBlock("span", _hoisted_24, "Same Day Booking Only")) : (openBlock(), createElementBlock("span", _hoisted_25, toDisplayString(plan.advance_booking_days) + " Days Advance Booking", 1))
                  ]),
                  plan.digital_books_access ? (openBlock(), createElementBlock("div", _hoisted_26, [
                    createVNode(unref(CircleCheck), { class: "w-4 h-4 mr-2 text-green-500" }),
                    _cache[19] || (_cache[19] = createTextVNode(" Digital Books Access ", -1))
                  ])) : createCommentVNode("", true),
                  plan.priority_booking ? (openBlock(), createElementBlock("div", _hoisted_27, [
                    createVNode(unref(CircleCheck), { class: "w-4 h-4 mr-2 text-green-500" }),
                    _cache[20] || (_cache[20] = createTextVNode(" Priority Seat Booking ", -1))
                  ])) : createCommentVNode("", true)
                ])
              ]),
              createBaseVNode("div", _hoisted_28, [
                createBaseVNode("button", {
                  onClick: ($event) => editPlan(plan),
                  class: "text-sm font-medium text-indigo-600 hover:text-indigo-700 flex items-center"
                }, [
                  createVNode(unref(Pen), { class: "w-4 h-4 mr-1" }),
                  _cache[21] || (_cache[21] = createTextVNode(" Edit Plan ", -1))
                ], 8, _hoisted_29),
                createBaseVNode("button", {
                  onClick: ($event) => confirmDelete(plan),
                  class: "text-sm font-medium text-red-600 hover:text-red-700 flex items-center"
                }, [
                  createVNode(unref(Trash2), { class: "w-4 h-4 mr-1" }),
                  _cache[22] || (_cache[22] = createTextVNode(" Delete ", -1))
                ], 8, _hoisted_30)
              ])
            ]);
          }), 128))
        ])),
        showModal.value ? (openBlock(), createElementBlock("div", _hoisted_31, [
          createBaseVNode("div", _hoisted_32, [
            createBaseVNode("div", _hoisted_33, [
              createBaseVNode("h3", _hoisted_34, toDisplayString(isEditing.value ? "Edit Subscription Plan" : "Create New Plan"), 1),
              createBaseVNode("button", {
                onClick: _cache[0] || (_cache[0] = ($event) => showModal.value = false),
                class: "p-2 hover:bg-gray-100 rounded-lg transition-colors"
              }, [
                createVNode(unref(X), { class: "w-5 h-5 text-gray-500" })
              ])
            ]),
            createBaseVNode("form", {
              onSubmit: withModifiers(savePlan, ["prevent"]),
              class: "p-6 space-y-6"
            }, [
              createBaseVNode("div", _hoisted_35, [
                createBaseVNode("div", _hoisted_36, [
                  _cache[23] || (_cache[23] = createBaseVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Plan Name", -1)),
                  withDirectives(createBaseVNode("input", {
                    "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => form.value.name = $event),
                    type: "text",
                    required: "",
                    class: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500",
                    placeholder: "e.g. Premium Monthly"
                  }, null, 512), [
                    [vModelText, form.value.name]
                  ])
                ]),
                createBaseVNode("div", _hoisted_37, [
                  _cache[24] || (_cache[24] = createBaseVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Description", -1)),
                  withDirectives(createBaseVNode("textarea", {
                    "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => form.value.description = $event),
                    rows: "2",
                    class: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500",
                    placeholder: "Briefly describe what this plan offers..."
                  }, null, 512), [
                    [vModelText, form.value.description]
                  ])
                ]),
                createBaseVNode("div", null, [
                  _cache[25] || (_cache[25] = createBaseVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Price (Rs.)", -1)),
                  withDirectives(createBaseVNode("input", {
                    "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => form.value.price = $event),
                    type: "number",
                    required: "",
                    min: "0",
                    class: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                  }, null, 512), [
                    [
                      vModelText,
                      form.value.price,
                      void 0,
                      { number: true }
                    ]
                  ])
                ]),
                createBaseVNode("div", null, [
                  _cache[26] || (_cache[26] = createBaseVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Duration (Days)", -1)),
                  withDirectives(createBaseVNode("input", {
                    "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => form.value.duration_days = $event),
                    type: "number",
                    required: "",
                    min: "1",
                    class: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                  }, null, 512), [
                    [
                      vModelText,
                      form.value.duration_days,
                      void 0,
                      { number: true }
                    ]
                  ])
                ]),
                createBaseVNode("div", null, [
                  _cache[27] || (_cache[27] = createBaseVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Free Trial (Days)", -1)),
                  withDirectives(createBaseVNode("input", {
                    "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => form.value.free_trial_days = $event),
                    type: "number",
                    min: "0",
                    class: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500",
                    placeholder: "0 for no trial"
                  }, null, 512), [
                    [
                      vModelText,
                      form.value.free_trial_days,
                      void 0,
                      { number: true }
                    ]
                  ])
                ]),
                createBaseVNode("div", null, [
                  _cache[28] || (_cache[28] = createBaseVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Daily Seat Bookings Limit", -1)),
                  withDirectives(createBaseVNode("input", {
                    "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => form.value.daily_seat_bookings_limit = $event),
                    type: "number",
                    min: "0",
                    class: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500",
                    placeholder: "0 for unlimited"
                  }, null, 512), [
                    [
                      vModelText,
                      form.value.daily_seat_bookings_limit,
                      void 0,
                      { number: true }
                    ]
                  ])
                ]),
                createBaseVNode("div", null, [
                  _cache[29] || (_cache[29] = createBaseVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Monthly Seat Bookings Limit", -1)),
                  withDirectives(createBaseVNode("input", {
                    "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => form.value.monthly_seat_bookings_limit = $event),
                    type: "number",
                    min: "0",
                    class: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500",
                    placeholder: "0 for unlimited"
                  }, null, 512), [
                    [
                      vModelText,
                      form.value.monthly_seat_bookings_limit,
                      void 0,
                      { number: true }
                    ]
                  ])
                ]),
                createBaseVNode("div", null, [
                  _cache[30] || (_cache[30] = createBaseVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Libraries Access Limit", -1)),
                  withDirectives(createBaseVNode("input", {
                    "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => form.value.libraries_access_limit = $event),
                    type: "number",
                    min: "0",
                    class: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500",
                    placeholder: "0 for unlimited"
                  }, null, 512), [
                    [
                      vModelText,
                      form.value.libraries_access_limit,
                      void 0,
                      { number: true }
                    ]
                  ])
                ]),
                createBaseVNode("div", null, [
                  _cache[31] || (_cache[31] = createBaseVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Books Access Limit", -1)),
                  withDirectives(createBaseVNode("input", {
                    "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => form.value.books_access_limit = $event),
                    type: "number",
                    min: "0",
                    class: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500",
                    placeholder: "0 for unlimited"
                  }, null, 512), [
                    [
                      vModelText,
                      form.value.books_access_limit,
                      void 0,
                      { number: true }
                    ]
                  ])
                ]),
                createBaseVNode("div", null, [
                  _cache[32] || (_cache[32] = createBaseVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Events Joining Limit", -1)),
                  withDirectives(createBaseVNode("input", {
                    "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => form.value.events_joining_limit = $event),
                    type: "number",
                    min: "0",
                    class: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500",
                    placeholder: "0 for unlimited"
                  }, null, 512), [
                    [
                      vModelText,
                      form.value.events_joining_limit,
                      void 0,
                      { number: true }
                    ]
                  ])
                ]),
                createBaseVNode("div", null, [
                  _cache[33] || (_cache[33] = createBaseVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Advance Booking Days", -1)),
                  withDirectives(createBaseVNode("input", {
                    "onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => form.value.advance_booking_days = $event),
                    type: "number",
                    min: "-1",
                    class: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500",
                    placeholder: "0 for same day, -1 for unlimited"
                  }, null, 512), [
                    [
                      vModelText,
                      form.value.advance_booking_days,
                      void 0,
                      { number: true }
                    ]
                  ])
                ]),
                createBaseVNode("div", _hoisted_38, [
                  _cache[36] || (_cache[36] = createBaseVNode("h4", { class: "text-sm font-bold text-gray-900 uppercase tracking-wider" }, "Plan Features", -1)),
                  createBaseVNode("div", _hoisted_39, [
                    createBaseVNode("label", _hoisted_40, [
                      withDirectives(createBaseVNode("input", {
                        "onUpdate:modelValue": _cache[12] || (_cache[12] = ($event) => form.value.digital_books_access = $event),
                        type: "checkbox",
                        class: "w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                      }, null, 512), [
                        [vModelCheckbox, form.value.digital_books_access]
                      ]),
                      _cache[34] || (_cache[34] = createBaseVNode("span", { class: "text-sm text-gray-700" }, "Digital Books Access", -1))
                    ]),
                    createBaseVNode("label", _hoisted_41, [
                      withDirectives(createBaseVNode("input", {
                        "onUpdate:modelValue": _cache[13] || (_cache[13] = ($event) => form.value.priority_booking = $event),
                        type: "checkbox",
                        class: "w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                      }, null, 512), [
                        [vModelCheckbox, form.value.priority_booking]
                      ]),
                      _cache[35] || (_cache[35] = createBaseVNode("span", { class: "text-sm text-gray-700" }, "Priority Seat Booking", -1))
                    ])
                  ])
                ]),
                createBaseVNode("div", null, [
                  _cache[38] || (_cache[38] = createBaseVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Status", -1)),
                  withDirectives(createBaseVNode("select", {
                    "onUpdate:modelValue": _cache[14] || (_cache[14] = ($event) => form.value.status = $event),
                    class: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                  }, [..._cache[37] || (_cache[37] = [
                    createBaseVNode("option", { value: "active" }, "Active", -1),
                    createBaseVNode("option", { value: "inactive" }, "Inactive", -1)
                  ])], 512), [
                    [vModelSelect, form.value.status]
                  ])
                ])
              ]),
              createBaseVNode("div", _hoisted_42, [
                createBaseVNode("button", {
                  type: "submit",
                  disabled: saving.value,
                  class: "flex-1 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors disabled:opacity-50 flex items-center justify-center space-x-2 shadow-lg hover:shadow-indigo-500/30"
                }, [
                  saving.value ? (openBlock(), createElementBlock("span", _hoisted_44)) : createCommentVNode("", true),
                  createBaseVNode("span", _hoisted_45, toDisplayString(saving.value ? "Saving..." : isEditing.value ? "Update Plan" : "Create Plan"), 1)
                ], 8, _hoisted_43),
                createBaseVNode("button", {
                  type: "button",
                  onClick: _cache[15] || (_cache[15] = ($event) => showModal.value = false),
                  class: "px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-semibold"
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
