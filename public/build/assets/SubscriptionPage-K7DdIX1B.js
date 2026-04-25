import { d as defineComponent, p as useAuth, r as ref, D as computed, o as onMounted, c as createElementBlock, b as createBaseVNode, m as createCommentVNode, u as unref, f as createVNode, t as toDisplayString, j as createTextVNode, F as Fragment, h as renderList, n as normalizeClass, k as createBlock, A as useRouter, i as openBlock } from "./main-DCJXrkf-.js";
import { s as studentAPI } from "./studentApi-C-eDUX1w.js";
import { u as useSwal } from "./useSwal-BUxo5JBv.js";
import { T as TriangleAlert } from "./triangle-alert-8zFUiR58.js";
import { C as Calendar } from "./calendar-DLVGkrUu.js";
import { C as CreditCard } from "./credit-card-DI3qwLf2.js";
import { C as CircleCheckBig } from "./circle-check-big-ExLl7Lif.js";
import { L as LoaderCircle } from "./loader-circle-Ipy8Qm_y.js";
import { C as Clock } from "./clock-B7PYed5-.js";
import { Z as Zap } from "./zap-CE81Tw0M.js";
import { R as RefreshCw } from "./refresh-cw-DCq6mbXe.js";
/* empty css               */
import "./createLucideIcon-CDsoUk2K.js";
const _hoisted_1 = { class: "space-y-6" };
const _hoisted_2 = {
  key: 0,
  class: "flex justify-center py-12"
};
const _hoisted_3 = {
  key: 1,
  class: "bg-red-50 border-l-4 border-red-500 p-6 rounded-xl mb-8 shadow-sm"
};
const _hoisted_4 = { class: "flex items-center" };
const _hoisted_5 = {
  key: 2,
  class: "bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 text-white shadow-xl relative overflow-hidden mb-12"
};
const _hoisted_6 = { class: "relative z-10" };
const _hoisted_7 = { class: "flex flex-col md:flex-row md:items-center justify-between gap-6" };
const _hoisted_8 = { class: "text-3xl font-bold mb-2" };
const _hoisted_9 = { class: "text-blue-100 mb-4" };
const _hoisted_10 = { class: "flex flex-wrap gap-4 text-sm" };
const _hoisted_11 = { class: "flex items-center" };
const _hoisted_12 = { class: "flex items-center" };
const _hoisted_13 = { class: "flex flex-col items-end gap-2" };
const _hoisted_14 = { class: "text-4xl font-bold" };
const _hoisted_15 = { class: "mt-8 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 pt-8 border-t border-white/20" };
const _hoisted_16 = { class: "bg-white/10 rounded-xl p-3 text-center" };
const _hoisted_17 = { class: "font-bold" };
const _hoisted_18 = { class: "bg-white/10 rounded-xl p-3 text-center" };
const _hoisted_19 = { class: "font-bold" };
const _hoisted_20 = { class: "bg-white/10 rounded-xl p-3 text-center" };
const _hoisted_21 = { class: "font-bold" };
const _hoisted_22 = { class: "bg-white/10 rounded-xl p-3 text-center" };
const _hoisted_23 = { class: "font-bold" };
const _hoisted_24 = { class: "bg-white/10 rounded-xl p-3 text-center" };
const _hoisted_25 = { class: "font-bold" };
const _hoisted_26 = { class: "bg-white/10 rounded-xl p-3 text-center" };
const _hoisted_27 = { class: "font-bold" };
const _hoisted_28 = { key: 0 };
const _hoisted_29 = { key: 1 };
const _hoisted_30 = { key: 2 };
const _hoisted_31 = { class: "grid grid-cols-1 md:grid-cols-3 gap-8" };
const _hoisted_32 = { class: "p-8" };
const _hoisted_33 = { class: "text-xl font-semibold text-gray-900 dark:text-white" };
const _hoisted_34 = { class: "mt-4 text-gray-500 dark:text-gray-400 text-sm" };
const _hoisted_35 = { class: "mt-6 flex items-baseline" };
const _hoisted_36 = { class: "text-4xl font-extrabold text-gray-900 dark:text-white" };
const _hoisted_37 = { class: "ml-1 text-xl font-medium text-gray-500 dark:text-gray-400" };
const _hoisted_38 = { class: "mt-6 space-y-4" };
const _hoisted_39 = { class: "ml-3 text-base text-gray-700 dark:text-gray-300" };
const _hoisted_40 = { class: "flex items-start" };
const _hoisted_41 = { class: "ml-3 text-base text-gray-700 dark:text-gray-300" };
const _hoisted_42 = { class: "flex items-start" };
const _hoisted_43 = { class: "ml-3 text-base text-gray-700 dark:text-gray-300" };
const _hoisted_44 = { class: "flex items-start" };
const _hoisted_45 = { class: "ml-3 text-base text-gray-700 dark:text-gray-300" };
const _hoisted_46 = { class: "flex items-start" };
const _hoisted_47 = { class: "ml-3 text-base text-gray-700 dark:text-gray-300" };
const _hoisted_48 = { class: "flex items-start" };
const _hoisted_49 = { class: "ml-3 text-base text-gray-700 dark:text-gray-300" };
const _hoisted_50 = { class: "flex items-start" };
const _hoisted_51 = { class: "ml-3 text-base text-gray-700 dark:text-gray-300" };
const _hoisted_52 = { key: 0 };
const _hoisted_53 = { key: 1 };
const _hoisted_54 = { key: 2 };
const _hoisted_55 = {
  key: 0,
  class: "flex items-start"
};
const _hoisted_56 = {
  key: 1,
  class: "flex items-start"
};
const _hoisted_57 = { class: "mt-8" };
const _hoisted_58 = {
  key: 0,
  disabled: "",
  class: "w-full bg-green-600 text-white rounded-lg px-4 py-3 font-semibold cursor-default shadow-md flex items-center justify-center space-x-2"
};
const _hoisted_59 = ["onClick", "disabled"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "SubscriptionPage",
  setup(__props) {
    const { user, checkAuth, isPlanExpired } = useAuth();
    useRouter();
    const plans = ref([]);
    const isLoading = ref(true);
    const subscribingPlanId = ref(null);
    const hasActiveSubscription = computed(() => {
      return !!user.value?.active_subscription;
    });
    const isCurrentPlan = (planId) => {
      return user.value?.active_subscription?.subscription_plan_id === planId;
    };
    const parseFeatures = (features) => {
      if (Array.isArray(features)) return features;
      if (typeof features === "string") {
        try {
          return JSON.parse(features);
        } catch (e) {
          return [features];
        }
      }
      return [];
    };
    const formatDate = (dateString) => {
      if (!dateString) return "N/A";
      return new Date(dateString).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric"
      });
    };
    const calculateRemainingDays = (expiryDate) => {
      if (!expiryDate) return 0;
      const diff = new Date(expiryDate).getTime() - (/* @__PURE__ */ new Date()).getTime();
      const days = Math.ceil(diff / (1e3 * 60 * 60 * 24));
      return Math.max(0, days);
    };
    const fetchPlans = async () => {
      try {
        isLoading.value = true;
        plans.value = await studentAPI.getSubscriptionPlans();
      } catch (error) {
        console.error("Error fetching plans:", error);
      } finally {
        isLoading.value = false;
      }
    };
    const { showConfirm, showSuccess, showError } = useSwal();
    const subscribe = async (plan) => {
      if (!await showConfirm("Confirm Subscription", `Are you sure you want to subscribe to the ${plan.name} plan for Rs. ${plan.price}?`, "Yes, Subscribe")) {
        return;
      }
      try {
        subscribingPlanId.value = plan.id;
        const response = await studentAPI.subscribe(plan.id);
        await checkAuth();
        showSuccess("Request Sent!", response.message || "Subscription request submitted successfully!");
      } catch (error) {
        console.error("Subscription error:", error);
        showError("Subscription Failed", error.message || "Failed to subscribe. Please try again.");
      } finally {
        subscribingPlanId.value = null;
      }
    };
    onMounted(() => {
      fetchPlans();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        _cache[23] || (_cache[23] = createBaseVNode("div", { class: "flex justify-between items-center" }, [
          createBaseVNode("h1", { class: "text-2xl font-bold text-gray-900 dark:text-white" }, "Subscription Plans")
        ], -1)),
        isLoading.value ? (openBlock(), createElementBlock("div", _hoisted_2, [..._cache[0] || (_cache[0] = [
          createBaseVNode("div", { class: "animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600" }, null, -1)
        ])])) : createCommentVNode("", true),
        unref(isPlanExpired) ? (openBlock(), createElementBlock("div", _hoisted_3, [
          createBaseVNode("div", _hoisted_4, [
            createVNode(unref(TriangleAlert), { class: "w-8 h-8 text-red-500 mr-4" }),
            _cache[1] || (_cache[1] = createBaseVNode("div", null, [
              createBaseVNode("h3", { class: "text-lg font-bold text-red-800" }, "Your plan has expired"),
              createBaseVNode("p", { class: "text-red-700" }, "Please choose a plan below to continue accessing library services.")
            ], -1))
          ])
        ])) : createCommentVNode("", true),
        unref(user)?.active_subscription ? (openBlock(), createElementBlock("div", _hoisted_5, [
          _cache[10] || (_cache[10] = createBaseVNode("div", { class: "absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mr-32 -mt-32" }, null, -1)),
          createBaseVNode("div", _hoisted_6, [
            createBaseVNode("div", _hoisted_7, [
              createBaseVNode("div", null, [
                _cache[2] || (_cache[2] = createBaseVNode("div", { class: "inline-flex items-center px-3 py-1 rounded-full bg-white/20 text-xs font-medium mb-4" }, " Active Subscription ", -1)),
                createBaseVNode("h2", _hoisted_8, toDisplayString(unref(user).active_subscription.subscription_plan?.name), 1),
                createBaseVNode("p", _hoisted_9, toDisplayString(unref(user).active_subscription.subscription_plan?.description), 1),
                createBaseVNode("div", _hoisted_10, [
                  createBaseVNode("div", _hoisted_11, [
                    createVNode(unref(Calendar), { class: "w-4 h-4 mr-2 opacity-75" }),
                    createTextVNode(" Expires on: " + toDisplayString(formatDate(unref(user).active_subscription.expires_at)), 1)
                  ]),
                  createBaseVNode("div", _hoisted_12, [
                    createVNode(unref(CreditCard), { class: "w-4 h-4 mr-2 opacity-75" }),
                    createTextVNode(" Rs. " + toDisplayString(unref(user).active_subscription.amount_paid) + " paid ", 1)
                  ])
                ])
              ]),
              createBaseVNode("div", _hoisted_13, [
                _cache[3] || (_cache[3] = createBaseVNode("div", { class: "text-sm opacity-75" }, "Remaining Days", -1)),
                createBaseVNode("div", _hoisted_14, toDisplayString(calculateRemainingDays(unref(user).active_subscription.expires_at)), 1)
              ])
            ]),
            createBaseVNode("div", _hoisted_15, [
              createBaseVNode("div", _hoisted_16, [
                _cache[4] || (_cache[4] = createBaseVNode("div", { class: "text-xs opacity-75 mb-1" }, "Daily Seats", -1)),
                createBaseVNode("div", _hoisted_17, toDisplayString(unref(user).active_subscription.subscription_plan?.daily_seat_bookings_limit || "∞"), 1)
              ]),
              createBaseVNode("div", _hoisted_18, [
                _cache[5] || (_cache[5] = createBaseVNode("div", { class: "text-xs opacity-75 mb-1" }, "Monthly Seats", -1)),
                createBaseVNode("div", _hoisted_19, toDisplayString(unref(user).active_subscription.subscription_plan?.monthly_seat_bookings_limit || "∞"), 1)
              ]),
              createBaseVNode("div", _hoisted_20, [
                _cache[6] || (_cache[6] = createBaseVNode("div", { class: "text-xs opacity-75 mb-1" }, "Libraries", -1)),
                createBaseVNode("div", _hoisted_21, toDisplayString(unref(user).active_subscription.subscription_plan?.libraries_access_limit || "∞"), 1)
              ]),
              createBaseVNode("div", _hoisted_22, [
                _cache[7] || (_cache[7] = createBaseVNode("div", { class: "text-xs opacity-75 mb-1" }, "Books", -1)),
                createBaseVNode("div", _hoisted_23, toDisplayString(unref(user).active_subscription.subscription_plan?.books_access_limit || "∞"), 1)
              ]),
              createBaseVNode("div", _hoisted_24, [
                _cache[8] || (_cache[8] = createBaseVNode("div", { class: "text-xs opacity-75 mb-1" }, "Events", -1)),
                createBaseVNode("div", _hoisted_25, toDisplayString(unref(user).active_subscription.subscription_plan?.events_joining_limit || "∞"), 1)
              ]),
              createBaseVNode("div", _hoisted_26, [
                _cache[9] || (_cache[9] = createBaseVNode("div", { class: "text-xs opacity-75 mb-1" }, "Adv. Booking", -1)),
                createBaseVNode("div", _hoisted_27, [
                  unref(user).active_subscription.subscription_plan?.advance_booking_days === -1 ? (openBlock(), createElementBlock("span", _hoisted_28, "∞")) : unref(user).active_subscription.subscription_plan?.advance_booking_days === 0 ? (openBlock(), createElementBlock("span", _hoisted_29, "Today")) : (openBlock(), createElementBlock("span", _hoisted_30, toDisplayString(unref(user).active_subscription.subscription_plan?.advance_booking_days) + "d", 1))
                ])
              ])
            ])
          ])
        ])) : createCommentVNode("", true),
        createBaseVNode("div", _hoisted_31, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(plans.value, (plan) => {
            return openBlock(), createElementBlock("div", {
              key: plan.id,
              class: normalizeClass(["bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden border transition-transform hover:-translate-y-1", [
                isCurrentPlan(plan.id) ? "border-blue-500 ring-2 ring-blue-500" : "border-gray-200 dark:border-gray-700"
              ]])
            }, [
              createBaseVNode("div", _hoisted_32, [
                createBaseVNode("h3", _hoisted_33, toDisplayString(plan.name), 1),
                createBaseVNode("p", _hoisted_34, toDisplayString(plan.description), 1),
                createBaseVNode("div", _hoisted_35, [
                  createBaseVNode("span", _hoisted_36, "Rs. " + toDisplayString(plan.price), 1),
                  createBaseVNode("span", _hoisted_37, "/" + toDisplayString(plan.duration_days) + " days", 1)
                ]),
                createBaseVNode("ul", _hoisted_38, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(parseFeatures(plan.features), (feature, index) => {
                    return openBlock(), createElementBlock("li", {
                      key: index,
                      class: "flex items-start"
                    }, [
                      _cache[11] || (_cache[11] = createBaseVNode("div", { class: "flex-shrink-0" }, [
                        createBaseVNode("svg", {
                          class: "h-6 w-6 text-green-500",
                          fill: "none",
                          viewBox: "0 0 24 24",
                          stroke: "currentColor"
                        }, [
                          createBaseVNode("path", {
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            "stroke-width": "2",
                            d: "M5 13l4 4L19 7"
                          })
                        ])
                      ], -1)),
                      createBaseVNode("p", _hoisted_39, toDisplayString(feature), 1)
                    ]);
                  }), 128)),
                  createBaseVNode("li", _hoisted_40, [
                    _cache[12] || (_cache[12] = createBaseVNode("div", { class: "flex-shrink-0" }, [
                      createBaseVNode("svg", {
                        class: "h-6 w-6 text-green-500",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor"
                      }, [
                        createBaseVNode("path", {
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          "stroke-width": "2",
                          d: "M5 13l4 4L19 7"
                        })
                      ])
                    ], -1)),
                    createBaseVNode("p", _hoisted_41, toDisplayString(plan.daily_seat_bookings_limit || "Unlimited") + " Daily Seat Bookings ", 1)
                  ]),
                  createBaseVNode("li", _hoisted_42, [
                    _cache[13] || (_cache[13] = createBaseVNode("div", { class: "flex-shrink-0" }, [
                      createBaseVNode("svg", {
                        class: "h-6 w-6 text-green-500",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor"
                      }, [
                        createBaseVNode("path", {
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          "stroke-width": "2",
                          d: "M5 13l4 4L19 7"
                        })
                      ])
                    ], -1)),
                    createBaseVNode("p", _hoisted_43, toDisplayString(plan.monthly_seat_bookings_limit || "Unlimited") + " Monthly Seat Bookings ", 1)
                  ]),
                  createBaseVNode("li", _hoisted_44, [
                    _cache[14] || (_cache[14] = createBaseVNode("div", { class: "flex-shrink-0" }, [
                      createBaseVNode("svg", {
                        class: "h-6 w-6 text-green-500",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor"
                      }, [
                        createBaseVNode("path", {
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          "stroke-width": "2",
                          d: "M5 13l4 4L19 7"
                        })
                      ])
                    ], -1)),
                    createBaseVNode("p", _hoisted_45, toDisplayString(plan.libraries_access_limit || "Unlimited") + " Libraries Access ", 1)
                  ]),
                  createBaseVNode("li", _hoisted_46, [
                    _cache[15] || (_cache[15] = createBaseVNode("div", { class: "flex-shrink-0" }, [
                      createBaseVNode("svg", {
                        class: "h-6 w-6 text-green-500",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor"
                      }, [
                        createBaseVNode("path", {
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          "stroke-width": "2",
                          d: "M5 13l4 4L19 7"
                        })
                      ])
                    ], -1)),
                    createBaseVNode("p", _hoisted_47, toDisplayString(plan.books_access_limit || "Unlimited") + " Books Access ", 1)
                  ]),
                  createBaseVNode("li", _hoisted_48, [
                    _cache[16] || (_cache[16] = createBaseVNode("div", { class: "flex-shrink-0" }, [
                      createBaseVNode("svg", {
                        class: "h-6 w-6 text-green-500",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor"
                      }, [
                        createBaseVNode("path", {
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          "stroke-width": "2",
                          d: "M5 13l4 4L19 7"
                        })
                      ])
                    ], -1)),
                    createBaseVNode("p", _hoisted_49, toDisplayString(plan.events_joining_limit || "Unlimited") + " Events Joining ", 1)
                  ]),
                  createBaseVNode("li", _hoisted_50, [
                    _cache[17] || (_cache[17] = createBaseVNode("div", { class: "flex-shrink-0" }, [
                      createBaseVNode("svg", {
                        class: "h-6 w-6 text-green-500",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor"
                      }, [
                        createBaseVNode("path", {
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          "stroke-width": "2",
                          d: "M5 13l4 4L19 7"
                        })
                      ])
                    ], -1)),
                    createBaseVNode("p", _hoisted_51, [
                      plan.advance_booking_days === -1 ? (openBlock(), createElementBlock("span", _hoisted_52, "Unlimited Advance Booking")) : plan.advance_booking_days === 0 ? (openBlock(), createElementBlock("span", _hoisted_53, "Same Day Booking Only")) : (openBlock(), createElementBlock("span", _hoisted_54, toDisplayString(plan.advance_booking_days) + " Days Advance Booking", 1))
                    ])
                  ]),
                  plan.priority_booking ? (openBlock(), createElementBlock("li", _hoisted_55, [..._cache[18] || (_cache[18] = [
                    createBaseVNode("div", { class: "flex-shrink-0" }, [
                      createBaseVNode("svg", {
                        class: "h-6 w-6 text-green-500",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor"
                      }, [
                        createBaseVNode("path", {
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          "stroke-width": "2",
                          d: "M5 13l4 4L19 7"
                        })
                      ])
                    ], -1),
                    createBaseVNode("p", { class: "ml-3 text-base text-gray-700 dark:text-gray-300" }, "Priority Seat Booking", -1)
                  ])])) : createCommentVNode("", true),
                  plan.digital_books_access ? (openBlock(), createElementBlock("li", _hoisted_56, [..._cache[19] || (_cache[19] = [
                    createBaseVNode("div", { class: "flex-shrink-0" }, [
                      createBaseVNode("svg", {
                        class: "h-6 w-6 text-green-500",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor"
                      }, [
                        createBaseVNode("path", {
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          "stroke-width": "2",
                          d: "M5 13l4 4L19 7"
                        })
                      ])
                    ], -1),
                    createBaseVNode("p", { class: "ml-3 text-base text-gray-700 dark:text-gray-300" }, "Digital Books Access", -1)
                  ])])) : createCommentVNode("", true)
                ]),
                createBaseVNode("div", _hoisted_57, [
                  isCurrentPlan(plan.id) ? (openBlock(), createElementBlock("button", _hoisted_58, [
                    createVNode(unref(CircleCheckBig), { class: "w-4 h-4" }),
                    _cache[20] || (_cache[20] = createBaseVNode("span", null, "Current Plan", -1))
                  ])) : (openBlock(), createElementBlock("button", {
                    key: 1,
                    onClick: ($event) => subscribe(plan),
                    disabled: subscribingPlanId.value !== null || !!unref(user)?.pending_order,
                    class: normalizeClass([
                      "w-full rounded-lg px-4 py-3 font-semibold transition-all shadow-md flex items-center justify-center space-x-2",
                      unref(user)?.pending_order?.plan_id === plan.id ? "bg-orange-100 text-orange-600 cursor-not-allowed border border-orange-200" : !!unref(user)?.pending_order ? "bg-gray-100 text-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700 text-white hover:shadow-lg active:scale-[0.98]"
                    ])
                  }, [
                    subscribingPlanId.value === plan.id ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                      createVNode(unref(LoaderCircle), { class: "w-4 h-4 animate-spin" }),
                      _cache[21] || (_cache[21] = createBaseVNode("span", null, "Processing...", -1))
                    ], 64)) : unref(user)?.pending_order?.plan_id === plan.id ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                      createVNode(unref(Clock), { class: "w-4 h-4" }),
                      _cache[22] || (_cache[22] = createBaseVNode("span", null, "Pending Approval", -1))
                    ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 2 }, [
                      !hasActiveSubscription.value ? (openBlock(), createBlock(unref(Zap), {
                        key: 0,
                        class: "w-4 h-4"
                      })) : (openBlock(), createBlock(unref(RefreshCw), {
                        key: 1,
                        class: "w-4 h-4"
                      })),
                      createBaseVNode("span", null, toDisplayString(hasActiveSubscription.value ? "Switch Plan" : "Subscribe Now"), 1)
                    ], 64))
                  ], 10, _hoisted_59))
                ])
              ])
            ], 2);
          }), 128))
        ])
      ]);
    };
  }
});
export {
  _sfc_main as default
};
