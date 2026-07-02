import { d as defineComponent, x as useAuth, r as ref, c as computed, o as onMounted, a as createElementBlock, b as createBaseVNode, F as Fragment, l as createCommentVNode, u as unref, f as createVNode, i as createTextVNode, t as toDisplayString, j as renderList, n as normalizeClass, C as useRouter, k as openBlock } from "./main-DKJzpCzk.js";
import { s as studentAPI } from "./studentApi-Bcm9q6Cm.js";
import { u as useSwal } from "./useSwal-pQW_XkRe.js";
import { T as TriangleAlert } from "./triangle-alert-BLFAvrrP.js";
import { C as Calendar } from "./calendar-FTR2aUnV.js";
import { C as CreditCard } from "./credit-card-8IDBwSuN.js";
import { L as LoaderCircle } from "./loader-circle-CjoQpJHU.js";
import { C as Clock } from "./clock-xlNueMyC.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
/* empty css               */
import "./createLucideIcon-TQ5d7bQA.js";
const _hoisted_1 = { class: "space-y-6 font-outfit" };
const _hoisted_2 = {
  key: 0,
  class: "flex flex-col items-center justify-center py-24 space-y-4"
};
const _hoisted_3 = {
  key: 0,
  class: "bg-rose-50/60 border border-rose-200 p-5 rounded-2xl mb-8 flex items-center shadow-sm text-left"
};
const _hoisted_4 = { class: "p-3 bg-rose-100 border border-rose-200 rounded-xl text-rose-600 mr-4" };
const _hoisted_5 = {
  key: 1,
  class: "bg-blue-600 rounded-3xl p-8 text-white shadow-lg relative overflow-hidden mb-12 border border-blue-700"
};
const _hoisted_6 = { class: "relative z-10 text-left" };
const _hoisted_7 = { class: "flex flex-col md:flex-row md:items-center justify-between gap-6" };
const _hoisted_8 = { class: "text-left" };
const _hoisted_9 = { class: "text-3xl font-black tracking-tight mb-2 text-white leading-tight" };
const _hoisted_10 = { class: "text-blue-100 text-sm max-w-xl mb-5 font-normal leading-relaxed" };
const _hoisted_11 = { class: "flex flex-wrap gap-4 text-xs font-semibold text-white/90" };
const _hoisted_12 = { class: "flex items-center bg-white/10 border border-white/15 px-3 py-1.5 rounded-xl" };
const _hoisted_13 = { class: "flex items-center bg-white/10 border border-white/15 px-3 py-1.5 rounded-xl" };
const _hoisted_14 = { class: "flex flex-col items-start md:items-end gap-1 bg-white/10 border border-white/15 rounded-2xl p-4 md:p-6 min-w-[140px] text-left md:text-right" };
const _hoisted_15 = { class: "text-4xl font-black text-white mt-1.5 leading-none" };
const _hoisted_16 = { class: "mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 pt-8 border-t border-white/15" };
const _hoisted_17 = { class: "bg-white/10 border border-white/15 rounded-2xl p-4 hover:bg-white/15 transition-colors duration-200" };
const _hoisted_18 = { class: "text-xl font-bold text-white leading-none" };
const _hoisted_19 = { class: "bg-white/10 border border-white/15 rounded-2xl p-4 hover:bg-white/15 transition-colors duration-200" };
const _hoisted_20 = { class: "text-xl font-bold text-white leading-none" };
const _hoisted_21 = { class: "bg-white/10 border border-white/15 rounded-2xl p-4 hover:bg-white/15 transition-colors duration-200" };
const _hoisted_22 = { class: "text-xl font-bold text-white leading-none" };
const _hoisted_23 = { class: "bg-white/10 border border-white/15 rounded-2xl p-4 hover:bg-white/15 transition-colors duration-200" };
const _hoisted_24 = { class: "text-xl font-bold text-white leading-none" };
const _hoisted_25 = { class: "bg-white/10 border border-white/15 rounded-2xl p-4 hover:bg-white/15 transition-colors duration-200" };
const _hoisted_26 = { class: "text-xl font-bold text-white leading-none" };
const _hoisted_27 = { class: "bg-white/10 border border-white/15 rounded-2xl p-4 hover:bg-white/15 transition-colors duration-200" };
const _hoisted_28 = { class: "text-xl font-bold text-white leading-none" };
const _hoisted_29 = { key: 0 };
const _hoisted_30 = { key: 1 };
const _hoisted_31 = { key: 2 };
const _hoisted_32 = { class: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 font-outfit items-stretch mb-12" };
const _hoisted_33 = {
  key: 0,
  class: "absolute -top-3.5 left-1/2 transform -translate-x-1/2 bg-[#f97316] text-white px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-wider flex items-center space-x-1.5 shadow-md shadow-orange-500/15 border border-orange-400/20 z-10 whitespace-nowrap animate-pulse-slow"
};
const _hoisted_34 = {
  key: 1,
  class: "absolute -top-3.5 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-wider flex items-center space-x-1.5 shadow-md shadow-blue-500/15 border border-blue-400/20 z-10 whitespace-nowrap animate-pulse-slow"
};
const _hoisted_35 = { class: "p-8 flex-grow flex flex-col" };
const _hoisted_36 = { class: "text-center w-full mb-6" };
const _hoisted_37 = { class: "text-sm font-extrabold text-slate-800 tracking-tight uppercase leading-none mb-3.5" };
const _hoisted_38 = { class: "flex flex-col items-center justify-center" };
const _hoisted_39 = { class: "flex items-baseline justify-center" };
const _hoisted_40 = { class: "text-3xl font-black text-slate-900" };
const _hoisted_41 = { class: "ml-1 text-slate-400 text-xs font-semibold" };
const _hoisted_42 = { class: "text-xs font-bold text-slate-500 mt-2.5 leading-none" };
const _hoisted_43 = {
  key: 0,
  class: "text-xs text-slate-500/80 mt-3 line-clamp-2 max-w-[220px] text-center font-medium leading-relaxed"
};
const _hoisted_44 = { class: "w-full space-y-3.5 text-left border-t border-slate-100/80 pt-6" };
const _hoisted_45 = { class: "flex items-start" };
const _hoisted_46 = { class: "ml-3 text-xs text-slate-600 font-bold leading-normal text-left" };
const _hoisted_47 = { class: "flex items-start" };
const _hoisted_48 = { class: "ml-3 text-xs text-slate-600 font-bold leading-normal text-left" };
const _hoisted_49 = { class: "flex items-start" };
const _hoisted_50 = { class: "ml-3 text-xs text-slate-600 font-bold leading-normal text-left" };
const _hoisted_51 = { class: "flex items-start" };
const _hoisted_52 = { class: "ml-3 text-xs text-slate-600 font-bold leading-normal text-left" };
const _hoisted_53 = { class: "flex items-start" };
const _hoisted_54 = { class: "ml-3 text-xs text-slate-600 font-bold leading-normal text-left" };
const _hoisted_55 = { class: "flex items-start" };
const _hoisted_56 = { class: "ml-3 text-xs text-slate-600 font-bold leading-normal text-left" };
const _hoisted_57 = { key: 0 };
const _hoisted_58 = { key: 1 };
const _hoisted_59 = { key: 2 };
const _hoisted_60 = {
  key: 0,
  class: "flex items-start"
};
const _hoisted_61 = {
  key: 1,
  class: "flex items-start"
};
const _hoisted_62 = { class: "p-8 pt-0 mt-auto w-full" };
const _hoisted_63 = {
  key: 0,
  disabled: "",
  class: "w-full bg-[#f1f5f9] border border-slate-200 text-slate-400 rounded-xl px-4 py-3.5 text-xs font-black uppercase tracking-wider cursor-default flex items-center justify-center space-x-2"
};
const _hoisted_64 = ["onClick", "disabled"];
const _hoisted_65 = { key: 2 };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "SubscriptionPage",
  setup(__props) {
    const { user, checkAuth, isPlanExpired } = useAuth();
    useRouter();
    const plans = ref([]);
    const isLoading = ref(true);
    const subscribingPlanId = ref(null);
    computed(() => {
      return !!user.value?.active_subscription;
    });
    const isCurrentPlan = (planId) => {
      return user.value?.active_subscription?.subscription_plan_id === planId;
    };
    const formatPrice = (price) => {
      const val = Number(price);
      if (isNaN(val)) return price;
      return val.toLocaleString("en-US", { minimumFractionDigits: 0, maximumFractionDigits: 0 });
    };
    const formatDuration = (days) => {
      if (!days) return "";
      if (days === 30) return "/per month";
      if (days === 90) return "/3 months";
      if (days === 180) return "/6 months";
      if (days === 365) return "/12 months";
      return `/ ${days} days`;
    };
    const getPlanBtnClass = (planName) => {
      const name = planName.toLowerCase();
      if (name.includes("premium") && name.includes("monthly")) {
        return "bg-[#f97316] hover:bg-[#ea580c] border-[#f97316] text-white hover:shadow-md hover-lift active:scale-98";
      } else if (name.includes("premium")) {
        return "bg-gradient-to-r from-[#8b5cf6] to-[#3b82f6] hover:opacity-95 border-transparent text-white hover:shadow-md hover-lift active:scale-98";
      } else if (name.includes("annual") || name.includes("yearly")) {
        return "bg-[#2563eb] hover:bg-[#1d4ed8] border-[#2563eb] text-white hover:shadow-md hover-lift active:scale-98";
      }
      return "bg-[#f1f5f9] hover:bg-[#e2e8f0] border-slate-200 text-slate-700 active:scale-98";
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
        isLoading.value ? (openBlock(), createElementBlock("div", _hoisted_2, [..._cache[0] || (_cache[0] = [
          createBaseVNode("div", { class: "animate-spin rounded-full h-10 w-10 border-2 border-blue-600 border-t-transparent" }, null, -1),
          createBaseVNode("p", { class: "text-xs font-semibold text-slate-400 uppercase tracking-wider animate-pulse" }, "Loading subscription plans...", -1)
        ])])) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
          unref(isPlanExpired) ? (openBlock(), createElementBlock("div", _hoisted_3, [
            createBaseVNode("div", _hoisted_4, [
              createVNode(unref(TriangleAlert), { class: "w-5 h-5" })
            ]),
            _cache[1] || (_cache[1] = createBaseVNode("div", null, [
              createBaseVNode("h3", { class: "text-sm font-bold text-rose-800 uppercase tracking-wider" }, "Your subscription has expired"),
              createBaseVNode("p", { class: "text-xs text-rose-605/90 mt-1" }, "Please select and subscribe to a plan below to resume library and seat booking access.")
            ], -1))
          ])) : createCommentVNode("", true),
          unref(user)?.active_subscription ? (openBlock(), createElementBlock("div", _hoisted_5, [
            _cache[10] || (_cache[10] = createBaseVNode("div", { class: "absolute -right-10 -top-10 w-56 h-56 bg-white/10 rounded-full blur-2xl pointer-events-none" }, null, -1)),
            _cache[11] || (_cache[11] = createBaseVNode("div", { class: "absolute -left-10 -bottom-10 w-56 h-56 bg-white/5 rounded-full blur-xl pointer-events-none" }, null, -1)),
            createBaseVNode("div", _hoisted_6, [
              createBaseVNode("div", _hoisted_7, [
                createBaseVNode("div", _hoisted_8, [
                  _cache[2] || (_cache[2] = createBaseVNode("div", { class: "inline-flex items-center px-3 py-1 rounded-full bg-white/15 border border-white/20 text-white text-[10px] font-bold uppercase tracking-wider mb-4" }, [
                    createBaseVNode("span", { class: "w-1.5 h-1.5 rounded-full bg-emerald-400 mr-1.5 animate-pulse" }),
                    createTextVNode(" Active Subscription ")
                  ], -1)),
                  createBaseVNode("h2", _hoisted_9, toDisplayString(unref(user).active_subscription.subscription_plan?.name), 1),
                  createBaseVNode("p", _hoisted_10, toDisplayString(unref(user).active_subscription.subscription_plan?.description), 1),
                  createBaseVNode("div", _hoisted_11, [
                    createBaseVNode("div", _hoisted_12, [
                      createVNode(unref(Calendar), { class: "w-3.5 h-3.5 mr-2 text-blue-200" }),
                      createBaseVNode("span", null, "Expires: " + toDisplayString(formatDate(unref(user).active_subscription.expires_at)), 1)
                    ]),
                    createBaseVNode("div", _hoisted_13, [
                      createVNode(unref(CreditCard), { class: "w-3.5 h-3.5 mr-2 text-emerald-300" }),
                      createBaseVNode("span", null, "Paid: Rs. " + toDisplayString(unref(user).active_subscription.amount_paid), 1)
                    ])
                  ])
                ]),
                createBaseVNode("div", _hoisted_14, [
                  _cache[3] || (_cache[3] = createBaseVNode("div", { class: "text-[10px] font-extrabold text-blue-200 uppercase tracking-widest leading-none" }, "Days Remaining", -1)),
                  createBaseVNode("div", _hoisted_15, toDisplayString(calculateRemainingDays(unref(user).active_subscription.expires_at)), 1)
                ])
              ]),
              createBaseVNode("div", _hoisted_16, [
                createBaseVNode("div", _hoisted_17, [
                  _cache[4] || (_cache[4] = createBaseVNode("div", { class: "text-[10px] font-extrabold text-blue-200 uppercase tracking-widest mb-1.5 leading-none" }, "Daily Seats", -1)),
                  createBaseVNode("div", _hoisted_18, toDisplayString(unref(user).active_subscription.subscription_plan?.daily_seat_bookings_limit || "∞"), 1)
                ]),
                createBaseVNode("div", _hoisted_19, [
                  _cache[5] || (_cache[5] = createBaseVNode("div", { class: "text-[10px] font-extrabold text-blue-200 uppercase tracking-widest mb-1.5 leading-none" }, "Monthly Seats", -1)),
                  createBaseVNode("div", _hoisted_20, toDisplayString(unref(user).active_subscription.subscription_plan?.monthly_seat_bookings_limit || "∞"), 1)
                ]),
                createBaseVNode("div", _hoisted_21, [
                  _cache[6] || (_cache[6] = createBaseVNode("div", { class: "text-[10px] font-extrabold text-blue-200 uppercase tracking-widest mb-1.5 leading-none" }, "Libraries Access", -1)),
                  createBaseVNode("div", _hoisted_22, toDisplayString(unref(user).active_subscription.subscription_plan?.libraries_access_limit || "∞"), 1)
                ]),
                createBaseVNode("div", _hoisted_23, [
                  _cache[7] || (_cache[7] = createBaseVNode("div", { class: "text-[10px] font-extrabold text-blue-200 uppercase tracking-widest mb-1.5 leading-none" }, "Books Access", -1)),
                  createBaseVNode("div", _hoisted_24, toDisplayString(unref(user).active_subscription.subscription_plan?.books_access_limit || "∞"), 1)
                ]),
                createBaseVNode("div", _hoisted_25, [
                  _cache[8] || (_cache[8] = createBaseVNode("div", { class: "text-[10px] font-extrabold text-blue-200 uppercase tracking-widest mb-1.5 leading-none" }, "Events Limit", -1)),
                  createBaseVNode("div", _hoisted_26, toDisplayString(unref(user).active_subscription.subscription_plan?.events_joining_limit || "∞"), 1)
                ]),
                createBaseVNode("div", _hoisted_27, [
                  _cache[9] || (_cache[9] = createBaseVNode("div", { class: "text-[10px] font-extrabold text-blue-200 uppercase tracking-widest mb-1.5 leading-none" }, "Adv. Booking", -1)),
                  createBaseVNode("div", _hoisted_28, [
                    unref(user).active_subscription.subscription_plan?.advance_booking_days === -1 ? (openBlock(), createElementBlock("span", _hoisted_29, "∞")) : unref(user).active_subscription.subscription_plan?.advance_booking_days === 0 ? (openBlock(), createElementBlock("span", _hoisted_30, "Today")) : (openBlock(), createElementBlock("span", _hoisted_31, toDisplayString(unref(user).active_subscription.subscription_plan?.advance_booking_days) + "d", 1))
                  ])
                ])
              ])
            ])
          ])) : createCommentVNode("", true),
          _cache[25] || (_cache[25] = createBaseVNode("div", { class: "text-left mt-10 mb-8" }, [
            createBaseVNode("h2", { class: "text-2xl font-black text-slate-800 tracking-tight font-outfit" }, "Choose Your Plan")
          ], -1)),
          createBaseVNode("div", _hoisted_32, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(plans.value, (plan) => {
              return openBlock(), createElementBlock("div", {
                key: plan.id,
                class: normalizeClass(["bg-white rounded-3xl shadow-sm hover:shadow-xl hover:shadow-slate-100/80 border transition-all duration-300 hover-lift relative text-left flex flex-col justify-between", [
                  plan.name.toLowerCase().includes("premium") && plan.name.toLowerCase().includes("monthly") ? "border-[#f97316] ring-4 ring-[#f97316]/5" : plan.name.toLowerCase().includes("premium") ? "border-[#8b5cf6] ring-4 ring-[#8b5cf6]/5" : "border-slate-200/80"
                ]])
              }, [
                plan.name.toLowerCase().includes("premium") && plan.name.toLowerCase().includes("monthly") ? (openBlock(), createElementBlock("div", _hoisted_33, [..._cache[12] || (_cache[12] = [
                  createBaseVNode("span", { class: "text-[10px]" }, "⭐", -1),
                  createBaseVNode("span", null, "Most Popular", -1)
                ])])) : plan.name.toLowerCase().includes("premium") ? (openBlock(), createElementBlock("div", _hoisted_34, [..._cache[13] || (_cache[13] = [
                  createBaseVNode("span", { class: "text-[10px]" }, "👑", -1),
                  createBaseVNode("span", null, "Recommended", -1)
                ])])) : createCommentVNode("", true),
                createBaseVNode("div", _hoisted_35, [
                  createBaseVNode("div", _hoisted_36, [
                    createBaseVNode("h3", _hoisted_37, toDisplayString(plan.name), 1),
                    createBaseVNode("div", _hoisted_38, [
                      createBaseVNode("div", _hoisted_39, [
                        createBaseVNode("span", _hoisted_40, "PKR " + toDisplayString(formatPrice(plan.price)), 1),
                        createBaseVNode("span", _hoisted_41, toDisplayString(plan.price == 0 ? "/forever" : formatDuration(plan.duration_days)), 1)
                      ]),
                      createBaseVNode("p", _hoisted_42, toDisplayString(plan.monthly_seat_bookings_limit ? `${plan.monthly_seat_bookings_limit} bookings` : plan.daily_seat_bookings_limit ? `${plan.daily_seat_bookings_limit} bookings/day` : "Unlimited bookings"), 1),
                      plan.description ? (openBlock(), createElementBlock("p", _hoisted_43, toDisplayString(plan.description), 1)) : createCommentVNode("", true)
                    ])
                  ]),
                  createBaseVNode("ul", _hoisted_44, [
                    createBaseVNode("li", _hoisted_45, [
                      _cache[14] || (_cache[14] = createBaseVNode("svg", {
                        class: "h-4 w-4 text-[#22c55e] flex-shrink-0 mt-0.5",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor",
                        "stroke-width": "3"
                      }, [
                        createBaseVNode("path", {
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          d: "M5 13l4 4L19 7"
                        })
                      ], -1)),
                      createBaseVNode("span", _hoisted_46, toDisplayString(plan.daily_seat_bookings_limit ? `${plan.daily_seat_bookings_limit} Daily Seat Bookings` : "Unlimited Daily Seat Bookings"), 1)
                    ]),
                    createBaseVNode("li", _hoisted_47, [
                      _cache[15] || (_cache[15] = createBaseVNode("svg", {
                        class: "h-4 w-4 text-[#22c55e] flex-shrink-0 mt-0.5",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor",
                        "stroke-width": "3"
                      }, [
                        createBaseVNode("path", {
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          d: "M5 13l4 4L19 7"
                        })
                      ], -1)),
                      createBaseVNode("span", _hoisted_48, toDisplayString(plan.monthly_seat_bookings_limit ? `${plan.monthly_seat_bookings_limit} Monthly Seat Bookings` : "Unlimited Monthly Seat Bookings"), 1)
                    ]),
                    createBaseVNode("li", _hoisted_49, [
                      _cache[16] || (_cache[16] = createBaseVNode("svg", {
                        class: "h-4 w-4 text-[#22c55e] flex-shrink-0 mt-0.5",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor",
                        "stroke-width": "3"
                      }, [
                        createBaseVNode("path", {
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          d: "M5 13l4 4L19 7"
                        })
                      ], -1)),
                      createBaseVNode("span", _hoisted_50, toDisplayString(plan.libraries_access_limit ? `${plan.libraries_access_limit} Libraries Access` : "Unlimited Libraries Access"), 1)
                    ]),
                    createBaseVNode("li", _hoisted_51, [
                      _cache[17] || (_cache[17] = createBaseVNode("svg", {
                        class: "h-4 w-4 text-[#22c55e] flex-shrink-0 mt-0.5",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor",
                        "stroke-width": "3"
                      }, [
                        createBaseVNode("path", {
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          d: "M5 13l4 4L19 7"
                        })
                      ], -1)),
                      createBaseVNode("span", _hoisted_52, toDisplayString(plan.books_access_limit ? `${plan.books_access_limit} Books Access` : "Unlimited Books Access"), 1)
                    ]),
                    createBaseVNode("li", _hoisted_53, [
                      _cache[18] || (_cache[18] = createBaseVNode("svg", {
                        class: "h-4 w-4 text-[#22c55e] flex-shrink-0 mt-0.5",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor",
                        "stroke-width": "3"
                      }, [
                        createBaseVNode("path", {
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          d: "M5 13l4 4L19 7"
                        })
                      ], -1)),
                      createBaseVNode("span", _hoisted_54, toDisplayString(plan.events_joining_limit ? `${plan.events_joining_limit} Events Joining` : "Unlimited Events Joining"), 1)
                    ]),
                    createBaseVNode("li", _hoisted_55, [
                      _cache[19] || (_cache[19] = createBaseVNode("svg", {
                        class: "h-4 w-4 text-[#22c55e] flex-shrink-0 mt-0.5",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor",
                        "stroke-width": "3"
                      }, [
                        createBaseVNode("path", {
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          d: "M5 13l4 4L19 7"
                        })
                      ], -1)),
                      createBaseVNode("span", _hoisted_56, [
                        plan.advance_booking_days === -1 ? (openBlock(), createElementBlock("span", _hoisted_57, "Unlimited Advance Booking")) : plan.advance_booking_days === 0 ? (openBlock(), createElementBlock("span", _hoisted_58, "Same Day Booking Only")) : (openBlock(), createElementBlock("span", _hoisted_59, toDisplayString(plan.advance_booking_days) + " Days Advance Booking", 1))
                      ])
                    ]),
                    plan.digital_books_access ? (openBlock(), createElementBlock("li", _hoisted_60, [..._cache[20] || (_cache[20] = [
                      createBaseVNode("svg", {
                        class: "h-4 w-4 text-[#22c55e] flex-shrink-0 mt-0.5",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor",
                        "stroke-width": "3"
                      }, [
                        createBaseVNode("path", {
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          d: "M5 13l4 4L19 7"
                        })
                      ], -1),
                      createBaseVNode("span", { class: "ml-3 text-xs text-slate-600 font-bold leading-normal text-left" }, " Digital Books Access ", -1)
                    ])])) : createCommentVNode("", true),
                    plan.priority_booking ? (openBlock(), createElementBlock("li", _hoisted_61, [..._cache[21] || (_cache[21] = [
                      createBaseVNode("svg", {
                        class: "h-4 w-4 text-[#22c55e] flex-shrink-0 mt-0.5",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor",
                        "stroke-width": "3"
                      }, [
                        createBaseVNode("path", {
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          d: "M5 13l4 4L19 7"
                        })
                      ], -1),
                      createBaseVNode("span", { class: "ml-3 text-xs text-slate-600 font-bold leading-normal text-left" }, " Priority Seat Booking ", -1)
                    ])])) : createCommentVNode("", true)
                  ])
                ]),
                createBaseVNode("div", _hoisted_62, [
                  isCurrentPlan(plan.id) && !unref(isPlanExpired) ? (openBlock(), createElementBlock("button", _hoisted_63, [..._cache[22] || (_cache[22] = [
                    createBaseVNode("span", null, "Current Plan", -1)
                  ])])) : (openBlock(), createElementBlock("button", {
                    key: 1,
                    onClick: ($event) => subscribe(plan),
                    disabled: subscribingPlanId.value !== null || !!unref(user)?.pending_order,
                    class: normalizeClass([
                      "w-full rounded-xl px-4 py-3.5 text-xs font-black uppercase tracking-wider transition-all flex items-center justify-center space-x-2 border shadow-sm duration-200",
                      unref(user)?.pending_order?.plan_id === plan.id ? "bg-amber-50 text-amber-700 border-amber-300 cursor-not-allowed shadow-none" : !!unref(user)?.pending_order ? "bg-slate-50 text-slate-400 border-slate-200 cursor-not-allowed shadow-none" : getPlanBtnClass(plan.name)
                    ])
                  }, [
                    subscribingPlanId.value === plan.id ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                      createVNode(unref(LoaderCircle), { class: "w-3.5 h-3.5 animate-spin" }),
                      _cache[23] || (_cache[23] = createBaseVNode("span", null, "Processing...", -1))
                    ], 64)) : unref(user)?.pending_order?.plan_id === plan.id ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                      createVNode(unref(Clock), { class: "w-3.5 h-3.5 text-amber-500" }),
                      _cache[24] || (_cache[24] = createBaseVNode("span", null, "Pending Approval", -1))
                    ], 64)) : (openBlock(), createElementBlock("span", _hoisted_65, toDisplayString(isCurrentPlan(plan.id) ? "Renew Now" : "Upgrade Now"), 1))
                  ], 10, _hoisted_64))
                ])
              ], 2);
            }), 128))
          ])
        ], 64))
      ]);
    };
  }
});
const SubscriptionPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-45d1da6c"]]);
export {
  SubscriptionPage as default
};
