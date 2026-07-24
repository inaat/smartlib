import { d as defineComponent, r as ref, o as onMounted, a as createElementBlock, b as createBaseVNode, j as createCommentVNode, f as createVNode, n as normalizeClass, u as unref, t as toDisplayString, F as Fragment, k as renderList, z as withModifiers, p as withDirectives, v as vModelText, D as vModelSelect, e as createStaticVNode, B as vModelCheckbox, Y as ownerAPI, i as createTextVNode, l as openBlock } from "./main-CP29_5Dg.js";
import { u as useSwal } from "./useSwal-pQW_XkRe.js";
import { R as RefreshCw } from "./refresh-cw-DjzDyWQP.js";
import { P as Plus } from "./plus-mxaUQNm6.js";
import { X } from "./x-BFxoMqPZ.js";
import { C as Check } from "./check-B1xhaSFI.js";
import { P as Pen } from "./pen-lnaG7kd1.js";
import { T as Trash2 } from "./trash-2-ml0ufkck.js";
/* empty css               */
import "./createLucideIcon-DTPudzWg.js";
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
  class: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch"
};
const _hoisted_8 = { class: "absolute -top-3.5 right-6 flex items-center space-x-2" };
const _hoisted_9 = {
  key: 0,
  class: "bg-indigo-600 text-white text-[9px] font-black uppercase tracking-widest px-2.5 py-0.5 rounded-full border border-indigo-700"
};
const _hoisted_10 = { class: "flex-grow flex flex-col" };
const _hoisted_11 = { class: "text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-1.5" };
const _hoisted_12 = { class: "text-xl font-extrabold text-slate-800" };
const _hoisted_13 = {
  key: 0,
  class: "text-xs text-slate-500 mt-1 font-semibold leading-relaxed"
};
const _hoisted_14 = { class: "price-box my-6 flex flex-col items-start justify-center" };
const _hoisted_15 = {
  key: 0,
  class: "flex items-center gap-2 mb-1"
};
const _hoisted_16 = { class: "text-xs text-slate-400 line-through" };
const _hoisted_17 = { class: "text-[9px] font-black uppercase bg-green-50 border border-green-200 text-green-600 px-2 py-0.5 rounded" };
const _hoisted_18 = { class: "flex items-baseline" };
const _hoisted_19 = { class: "text-3xl font-black text-slate-900" };
const _hoisted_20 = { class: "text-xs font-semibold text-slate-550 ml-1.5" };
const _hoisted_21 = { class: "w-full space-y-3.5 text-left border-t border-slate-100/80 pt-6" };
const _hoisted_22 = { class: "flex items-center space-x-2.5 text-xs text-slate-655 font-semibold" };
const _hoisted_23 = { class: "flex items-center space-x-2.5 text-xs text-slate-655 font-semibold" };
const _hoisted_24 = { class: "flex items-center space-x-2.5 text-xs text-slate-655 font-semibold" };
const _hoisted_25 = { class: "flex items-center space-x-2.5 text-xs text-slate-655 font-semibold" };
const _hoisted_26 = { class: "flex items-center space-x-2.5 text-xs text-slate-655 font-semibold" };
const _hoisted_27 = { class: "flex items-center space-x-2.5 text-xs text-slate-655 font-semibold" };
const _hoisted_28 = { key: 0 };
const _hoisted_29 = { key: 1 };
const _hoisted_30 = { key: 2 };
const _hoisted_31 = {
  key: 0,
  class: "flex items-center space-x-2.5 text-xs text-slate-655 font-semibold"
};
const _hoisted_32 = {
  key: 1,
  class: "flex items-center space-x-2.5 text-xs text-slate-655 font-semibold"
};
const _hoisted_33 = { class: "flex items-center justify-between border-t border-slate-100 pt-6 mt-8" };
const _hoisted_34 = ["onClick"];
const _hoisted_35 = ["onClick"];
const _hoisted_36 = {
  key: 2,
  class: "fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
};
const _hoisted_37 = { class: "bg-white rounded-xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto" };
const _hoisted_38 = { class: "p-6 border-b border-gray-200 flex items-center justify-between sticky top-0 bg-white z-10" };
const _hoisted_39 = { class: "text-xl font-bold text-gray-900" };
const _hoisted_40 = { class: "grid grid-cols-1 md:grid-cols-2 gap-6" };
const _hoisted_41 = { class: "md:col-span-2" };
const _hoisted_42 = { class: "md:col-span-2" };
const _hoisted_43 = { key: 0 };
const _hoisted_44 = { class: "grid grid-cols-2 gap-3.5" };
const _hoisted_45 = { key: 0 };
const _hoisted_46 = { class: "block text-sm font-medium text-gray-700 mb-1" };
const _hoisted_47 = { class: "md:col-span-2 space-y-4" };
const _hoisted_48 = { class: "grid grid-cols-1 md:grid-cols-2 gap-4" };
const _hoisted_49 = { class: "flex items-center space-x-3 p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors" };
const _hoisted_50 = { class: "flex items-center space-x-3 p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors" };
const _hoisted_51 = { class: "flex items-center space-x-3 pt-6 border-t border-gray-100" };
const _hoisted_52 = ["disabled"];
const _hoisted_53 = {
  key: 0,
  class: "animate-spin rounded-full h-4 w-4 border-b-2 border-white"
};
const _hoisted_54 = { class: "font-bold" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "SubscriptionPlanManagementPage",
  setup(__props) {
    const { showConfirm, showSuccess, showError } = useSwal();
    const plans = ref([]);
    const loading = ref(false);
    const saving = ref(false);
    const showModal = ref(false);
    const isEditing = ref(false);
    const originalPriceInput = ref(0);
    const discountTypeInput = ref("none");
    const discountValueInput = ref(0);
    const durationPresetInput = ref("30");
    const isFreePlanInput = ref(false);
    const setFreeModel = (val) => {
      isFreePlanInput.value = val;
      if (val) {
        originalPriceInput.value = 0;
        discountTypeInput.value = "none";
        discountValueInput.value = 0;
      }
    };
    const onDurationPresetChange = () => {
      if (durationPresetInput.value !== "custom") {
        form.value.duration_days = Number(durationPresetInput.value);
      }
    };
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
      status: "active",
      features: {}
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
      originalPriceInput.value = 0;
      discountTypeInput.value = "none";
      discountValueInput.value = 0;
      durationPresetInput.value = "30";
      isFreePlanInput.value = false;
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
        status: "active",
        features: {}
      };
      showModal.value = true;
    };
    const editPlan = (plan) => {
      isEditing.value = true;
      let features = plan.features;
      if (typeof features === "string") {
        try {
          features = JSON.parse(features);
        } catch (e) {
          features = {};
        }
      }
      if (!features) features = {};
      isFreePlanInput.value = features.is_free === "true" || Number(plan.price) === 0;
      originalPriceInput.value = features.original_price !== void 0 ? Number(features.original_price) : Number(plan.price);
      discountTypeInput.value = features.discount_type || "none";
      discountValueInput.value = features.discount_value !== void 0 ? Number(features.discount_value) : 0;
      const days = plan.duration_days;
      if ([7, 30, 90, 365].includes(days)) {
        durationPresetInput.value = String(days);
      } else {
        durationPresetInput.value = "custom";
      }
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
        status: plan.status,
        features
      };
      showModal.value = true;
    };
    const savePlan = async () => {
      saving.value = true;
      let finalPrice = 0;
      if (isFreePlanInput.value) {
        finalPrice = 0;
      } else {
        const orig = Number(originalPriceInput.value) || 0;
        const val = Number(discountValueInput.value) || 0;
        if (discountTypeInput.value === "percentage") {
          finalPrice = Math.max(0, orig * (1 - val / 100));
        } else if (discountTypeInput.value === "fixed") {
          finalPrice = Math.max(0, orig - val);
        } else {
          finalPrice = orig;
        }
      }
      form.value.price = finalPrice;
      form.value.features = {
        original_price: String(originalPriceInput.value),
        discount_type: String(discountTypeInput.value),
        discount_value: String(discountValueInput.value),
        is_free: String(isFreePlanInput.value)
      };
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
          _cache[22] || (_cache[22] = createBaseVNode("div", null, [
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
              _cache[21] || (_cache[21] = createBaseVNode("span", { class: "text-sm font-medium" }, "Create Plan", -1))
            ])
          ])
        ]),
        loading.value && plans.value.length === 0 ? (openBlock(), createElementBlock("div", _hoisted_6, [..._cache[23] || (_cache[23] = [
          createBaseVNode("div", { class: "animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600" }, null, -1)
        ])])) : (openBlock(), createElementBlock("div", _hoisted_7, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(plans.value, (plan) => {
            return openBlock(), createElementBlock("div", {
              key: plan.id,
              class: normalizeClass([
                plan.name.toLowerCase().includes("premium") || plan.name.toLowerCase().includes("pro") ? "bg-white border-2 border-indigo-650 rounded-3xl p-8 shadow-xl shadow-indigo-500/5 relative flex flex-col justify-between text-left transition-all duration-300 transform md:-translate-y-2" : "bg-white border border-slate-200 rounded-3xl p-8 shadow-sm hover:border-slate-400 hover:shadow-md transition-all duration-300 flex flex-col justify-between text-left"
              ])
            }, [
              createBaseVNode("div", _hoisted_8, [
                createBaseVNode("span", {
                  class: normalizeClass([
                    "px-2.5 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider border",
                    plan.status === "active" ? "bg-green-50 border-green-200 text-green-700" : "bg-red-50 border-red-200 text-red-700"
                  ])
                }, toDisplayString(plan.status === "active" ? "Active" : "Inactive"), 3),
                plan.name.toLowerCase().includes("premium") || plan.name.toLowerCase().includes("pro") ? (openBlock(), createElementBlock("span", _hoisted_9, " Featured ")) : createCommentVNode("", true)
              ]),
              createBaseVNode("div", _hoisted_10, [
                createBaseVNode("div", null, [
                  createBaseVNode("span", _hoisted_11, toDisplayString(plan.duration_days) + " Days Validity", 1),
                  createBaseVNode("h3", _hoisted_12, toDisplayString(plan.name), 1),
                  plan.description ? (openBlock(), createElementBlock("p", _hoisted_13, toDisplayString(plan.description), 1)) : createCommentVNode("", true),
                  createBaseVNode("div", _hoisted_14, [
                    plan.features?.discount_type && plan.features?.discount_type !== "none" ? (openBlock(), createElementBlock("div", _hoisted_15, [
                      createBaseVNode("span", _hoisted_16, "Rs. " + toDisplayString(plan.features?.original_price), 1),
                      createBaseVNode("span", _hoisted_17, toDisplayString(plan.features?.discount_type === "percentage" ? `${plan.features?.discount_value}% OFF` : `Rs. ${plan.features?.discount_value} OFF`), 1)
                    ])) : createCommentVNode("", true),
                    createBaseVNode("div", _hoisted_18, [
                      createBaseVNode("span", _hoisted_19, "Rs. " + toDisplayString(plan.price), 1),
                      createBaseVNode("span", _hoisted_20, "/ " + toDisplayString(plan.duration_days) + " days", 1)
                    ])
                  ])
                ]),
                createBaseVNode("ul", _hoisted_21, [
                  createBaseVNode("li", _hoisted_22, [
                    createVNode(unref(Check), { class: "h-4 w-4 text-indigo-650 flex-shrink-0" }),
                    createBaseVNode("span", null, toDisplayString(plan.daily_seat_bookings_limit === -1 || !plan.daily_seat_bookings_limit ? "Unlimited" : plan.daily_seat_bookings_limit) + " Daily Seat Bookings", 1)
                  ]),
                  createBaseVNode("li", _hoisted_23, [
                    createVNode(unref(Check), { class: "h-4 w-4 text-indigo-650 flex-shrink-0" }),
                    createBaseVNode("span", null, toDisplayString(plan.monthly_seat_bookings_limit === -1 || !plan.monthly_seat_bookings_limit ? "Unlimited" : plan.monthly_seat_bookings_limit) + " Monthly Seat Bookings", 1)
                  ]),
                  createBaseVNode("li", _hoisted_24, [
                    createVNode(unref(Check), { class: "h-4 w-4 text-indigo-655 flex-shrink-0" }),
                    createBaseVNode("span", null, toDisplayString(plan.libraries_access_limit === -1 || !plan.libraries_access_limit ? "Unlimited" : plan.libraries_access_limit) + " Libraries Access", 1)
                  ]),
                  createBaseVNode("li", _hoisted_25, [
                    createVNode(unref(Check), { class: "h-4 w-4 text-indigo-655 flex-shrink-0" }),
                    createBaseVNode("span", null, toDisplayString(plan.books_access_limit === -1 || !plan.books_access_limit ? "Unlimited" : plan.books_access_limit) + " Books Access", 1)
                  ]),
                  createBaseVNode("li", _hoisted_26, [
                    createVNode(unref(Check), { class: "h-4 w-4 text-indigo-655 flex-shrink-0" }),
                    createBaseVNode("span", null, toDisplayString(plan.events_joining_limit === -1 || !plan.events_joining_limit ? "Unlimited" : plan.events_joining_limit) + " Events Joining", 1)
                  ]),
                  createBaseVNode("li", _hoisted_27, [
                    createVNode(unref(Check), { class: "h-4 w-4 text-indigo-655 flex-shrink-0" }),
                    createBaseVNode("span", null, [
                      plan.advance_booking_days === -1 ? (openBlock(), createElementBlock("span", _hoisted_28, "Unlimited Advance Booking")) : plan.advance_booking_days === 0 ? (openBlock(), createElementBlock("span", _hoisted_29, "Same Day Booking Only")) : (openBlock(), createElementBlock("span", _hoisted_30, toDisplayString(plan.advance_booking_days) + " Days Advance Booking", 1))
                    ])
                  ]),
                  plan.digital_books_access ? (openBlock(), createElementBlock("li", _hoisted_31, [
                    createVNode(unref(Check), { class: "h-4 w-4 text-indigo-655 flex-shrink-0" }),
                    _cache[24] || (_cache[24] = createBaseVNode("span", null, "Digital Books Access", -1))
                  ])) : createCommentVNode("", true),
                  plan.priority_booking ? (openBlock(), createElementBlock("li", _hoisted_32, [
                    createVNode(unref(Check), { class: "h-4 w-4 text-indigo-655 flex-shrink-0" }),
                    _cache[25] || (_cache[25] = createBaseVNode("span", null, "Priority Seat Booking", -1))
                  ])) : createCommentVNode("", true)
                ])
              ]),
              createBaseVNode("div", _hoisted_33, [
                createBaseVNode("button", {
                  onClick: ($event) => editPlan(plan),
                  class: "text-xs font-bold text-indigo-600 hover:text-indigo-750 flex items-center bg-indigo-50 hover:bg-indigo-100/70 px-3.5 py-2 rounded-xl transition-all"
                }, [
                  createVNode(unref(Pen), { class: "w-3.5 h-3.5 mr-1.5" }),
                  _cache[26] || (_cache[26] = createTextVNode(" Edit Plan ", -1))
                ], 8, _hoisted_34),
                createBaseVNode("button", {
                  onClick: ($event) => confirmDelete(plan),
                  class: "text-xs font-bold text-rose-600 hover:text-rose-750 flex items-center bg-rose-50 hover:bg-rose-100/70 px-3.5 py-2 rounded-xl transition-all"
                }, [
                  createVNode(unref(Trash2), { class: "w-3.5 h-3.5 mr-1.5" }),
                  _cache[27] || (_cache[27] = createTextVNode(" Delete ", -1))
                ], 8, _hoisted_35)
              ])
            ], 2);
          }), 128))
        ])),
        showModal.value ? (openBlock(), createElementBlock("div", _hoisted_36, [
          createBaseVNode("div", _hoisted_37, [
            createBaseVNode("div", _hoisted_38, [
              createBaseVNode("h3", _hoisted_39, toDisplayString(isEditing.value ? "Edit Subscription Plan" : "Create New Plan"), 1),
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
              createBaseVNode("div", _hoisted_40, [
                createBaseVNode("div", _hoisted_41, [
                  _cache[28] || (_cache[28] = createBaseVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Plan Name", -1)),
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
                createBaseVNode("div", _hoisted_42, [
                  _cache[29] || (_cache[29] = createBaseVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Description", -1)),
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
                  _cache[31] || (_cache[31] = createBaseVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Plan Duration", -1)),
                  withDirectives(createBaseVNode("select", {
                    "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => durationPresetInput.value = $event),
                    onChange: onDurationPresetChange,
                    class: "w-full px-4 py-2.5 border border-gray-300 bg-white rounded-lg focus:ring-2 focus:ring-indigo-500 text-sm font-semibold"
                  }, [..._cache[30] || (_cache[30] = [
                    createStaticVNode('<option value="7">1 Week (7 Days)</option><option value="30">1 Month (30 Days)</option><option value="90">Quarterly (90 Days)</option><option value="365">Yearly (365 Days)</option><option value="custom">Custom Days...</option>', 5)
                  ])], 544), [
                    [vModelSelect, durationPresetInput.value]
                  ])
                ]),
                durationPresetInput.value === "custom" ? (openBlock(), createElementBlock("div", _hoisted_43, [
                  _cache[32] || (_cache[32] = createBaseVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Custom Duration (Days)", -1)),
                  withDirectives(createBaseVNode("input", {
                    "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => form.value.duration_days = $event),
                    type: "number",
                    required: "",
                    min: "1",
                    class: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 text-sm font-semibold"
                  }, null, 512), [
                    [
                      vModelText,
                      form.value.duration_days,
                      void 0,
                      { number: true }
                    ]
                  ])
                ])) : createCommentVNode("", true),
                createBaseVNode("div", null, [
                  _cache[33] || (_cache[33] = createBaseVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Pricing Model", -1)),
                  createBaseVNode("div", _hoisted_44, [
                    createBaseVNode("button", {
                      type: "button",
                      onClick: _cache[5] || (_cache[5] = ($event) => setFreeModel(true)),
                      class: normalizeClass([
                        "px-4 py-2 border rounded-lg text-sm font-bold text-center transition-all",
                        isFreePlanInput.value ? "bg-emerald-50 border-emerald-300 text-emerald-700 shadow-sm" : "bg-white border-gray-300 text-gray-700 hover:bg-gray-50"
                      ])
                    }, " Free Plan ", 2),
                    createBaseVNode("button", {
                      type: "button",
                      onClick: _cache[6] || (_cache[6] = ($event) => setFreeModel(false)),
                      class: normalizeClass([
                        "px-4 py-2 border rounded-lg text-sm font-bold text-center transition-all",
                        !isFreePlanInput.value ? "bg-indigo-50 border-indigo-300 text-indigo-700 shadow-sm" : "bg-white border-gray-300 text-gray-700 hover:bg-gray-50"
                      ])
                    }, " Paid Plan ", 2)
                  ])
                ]),
                !isFreePlanInput.value ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                  createBaseVNode("div", null, [
                    _cache[34] || (_cache[34] = createBaseVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Original Price (PKR)", -1)),
                    withDirectives(createBaseVNode("input", {
                      "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => originalPriceInput.value = $event),
                      type: "number",
                      required: "",
                      min: "0",
                      class: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 text-sm font-semibold"
                    }, null, 512), [
                      [
                        vModelText,
                        originalPriceInput.value,
                        void 0,
                        { number: true }
                      ]
                    ])
                  ]),
                  createBaseVNode("div", null, [
                    _cache[36] || (_cache[36] = createBaseVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Apply Discount", -1)),
                    withDirectives(createBaseVNode("select", {
                      "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => discountTypeInput.value = $event),
                      class: "w-full px-4 py-2.5 border border-gray-300 bg-white rounded-lg focus:ring-2 focus:ring-indigo-500 text-sm font-semibold"
                    }, [..._cache[35] || (_cache[35] = [
                      createBaseVNode("option", { value: "none" }, "No Discount", -1),
                      createBaseVNode("option", { value: "percentage" }, "Percentage Discount (%)", -1),
                      createBaseVNode("option", { value: "fixed" }, "Fixed Amount Discount (Rs.)", -1)
                    ])], 512), [
                      [vModelSelect, discountTypeInput.value]
                    ])
                  ]),
                  discountTypeInput.value !== "none" ? (openBlock(), createElementBlock("div", _hoisted_45, [
                    createBaseVNode("label", _hoisted_46, " Discount Value " + toDisplayString(discountTypeInput.value === "percentage" ? "(%)" : "(Rs.)"), 1),
                    withDirectives(createBaseVNode("input", {
                      "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => discountValueInput.value = $event),
                      type: "number",
                      required: "",
                      min: "1",
                      class: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 text-sm font-semibold"
                    }, null, 512), [
                      [
                        vModelText,
                        discountValueInput.value,
                        void 0,
                        { number: true }
                      ]
                    ])
                  ])) : createCommentVNode("", true)
                ], 64)) : createCommentVNode("", true),
                createBaseVNode("div", null, [
                  _cache[37] || (_cache[37] = createBaseVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Free Trial (Days)", -1)),
                  withDirectives(createBaseVNode("input", {
                    "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => form.value.free_trial_days = $event),
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
                  _cache[38] || (_cache[38] = createBaseVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Daily Seat Bookings Limit", -1)),
                  withDirectives(createBaseVNode("input", {
                    "onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => form.value.daily_seat_bookings_limit = $event),
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
                  _cache[39] || (_cache[39] = createBaseVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Monthly Seat Bookings Limit", -1)),
                  withDirectives(createBaseVNode("input", {
                    "onUpdate:modelValue": _cache[12] || (_cache[12] = ($event) => form.value.monthly_seat_bookings_limit = $event),
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
                  _cache[40] || (_cache[40] = createBaseVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Libraries Access Limit", -1)),
                  withDirectives(createBaseVNode("input", {
                    "onUpdate:modelValue": _cache[13] || (_cache[13] = ($event) => form.value.libraries_access_limit = $event),
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
                  _cache[41] || (_cache[41] = createBaseVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Books Access Limit", -1)),
                  withDirectives(createBaseVNode("input", {
                    "onUpdate:modelValue": _cache[14] || (_cache[14] = ($event) => form.value.books_access_limit = $event),
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
                  _cache[42] || (_cache[42] = createBaseVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Events Joining Limit", -1)),
                  withDirectives(createBaseVNode("input", {
                    "onUpdate:modelValue": _cache[15] || (_cache[15] = ($event) => form.value.events_joining_limit = $event),
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
                  _cache[43] || (_cache[43] = createBaseVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Advance Booking Days", -1)),
                  withDirectives(createBaseVNode("input", {
                    "onUpdate:modelValue": _cache[16] || (_cache[16] = ($event) => form.value.advance_booking_days = $event),
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
                createBaseVNode("div", _hoisted_47, [
                  _cache[46] || (_cache[46] = createBaseVNode("h4", { class: "text-sm font-bold text-gray-900 uppercase tracking-wider" }, "Plan Features", -1)),
                  createBaseVNode("div", _hoisted_48, [
                    createBaseVNode("label", _hoisted_49, [
                      withDirectives(createBaseVNode("input", {
                        "onUpdate:modelValue": _cache[17] || (_cache[17] = ($event) => form.value.digital_books_access = $event),
                        type: "checkbox",
                        class: "w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                      }, null, 512), [
                        [vModelCheckbox, form.value.digital_books_access]
                      ]),
                      _cache[44] || (_cache[44] = createBaseVNode("span", { class: "text-sm text-gray-700" }, "Digital Books Access", -1))
                    ]),
                    createBaseVNode("label", _hoisted_50, [
                      withDirectives(createBaseVNode("input", {
                        "onUpdate:modelValue": _cache[18] || (_cache[18] = ($event) => form.value.priority_booking = $event),
                        type: "checkbox",
                        class: "w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                      }, null, 512), [
                        [vModelCheckbox, form.value.priority_booking]
                      ]),
                      _cache[45] || (_cache[45] = createBaseVNode("span", { class: "text-sm text-gray-700" }, "Priority Seat Booking", -1))
                    ])
                  ])
                ]),
                createBaseVNode("div", null, [
                  _cache[48] || (_cache[48] = createBaseVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Status", -1)),
                  withDirectives(createBaseVNode("select", {
                    "onUpdate:modelValue": _cache[19] || (_cache[19] = ($event) => form.value.status = $event),
                    class: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                  }, [..._cache[47] || (_cache[47] = [
                    createBaseVNode("option", { value: "active" }, "Active", -1),
                    createBaseVNode("option", { value: "inactive" }, "Inactive", -1)
                  ])], 512), [
                    [vModelSelect, form.value.status]
                  ])
                ])
              ]),
              createBaseVNode("div", _hoisted_51, [
                createBaseVNode("button", {
                  type: "submit",
                  disabled: saving.value,
                  class: "flex-1 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors disabled:opacity-50 flex items-center justify-center space-x-2 shadow-lg hover:shadow-indigo-500/30"
                }, [
                  saving.value ? (openBlock(), createElementBlock("span", _hoisted_53)) : createCommentVNode("", true),
                  createBaseVNode("span", _hoisted_54, toDisplayString(saving.value ? "Saving..." : isEditing.value ? "Update Plan" : "Create Plan"), 1)
                ], 8, _hoisted_52),
                createBaseVNode("button", {
                  type: "button",
                  onClick: _cache[20] || (_cache[20] = ($event) => showModal.value = false),
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
