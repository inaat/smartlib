import { d as defineComponent, x as useAuth, r as ref, c as computed, o as onMounted, a as createElementBlock, b as createBaseVNode, F as Fragment, j as createCommentVNode, u as unref, f as createVNode, i as createTextVNode, t as toDisplayString, k as renderList, n as normalizeClass, C as useRouter, l as openBlock } from "./main-C124sHqx.js";
import { s as studentAPI } from "./studentApi-DfByQrAO.js";
import { u as useSwal } from "./useSwal-pQW_XkRe.js";
import { T as TriangleAlert } from "./triangle-alert-Db300I4d.js";
import { C as Calendar } from "./calendar-Bu5qRmqf.js";
import { C as CreditCard } from "./credit-card-DHJlnnPv.js";
import { c as createLucideIcon } from "./createLucideIcon-8y9GOHiU.js";
import { L as LoaderCircle } from "./loader-circle-B5MOPo2J.js";
import { C as ChevronLeft } from "./chevron-left-Cx2xK3nf.js";
import { C as ChevronRight } from "./chevron-right-CULPaQVn.js";
import { C as Check } from "./check-B_2imYTv.js";
import { C as Clock } from "./clock-B_R0d3h4.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
/* empty css               */
const Receipt = createLucideIcon("receipt", [
  [
    "path",
    { d: "M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z", key: "q3az6g" }
  ],
  ["path", { d: "M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8", key: "1h4pet" }],
  ["path", { d: "M12 17.5v-11", key: "1jc1ny" }]
]);
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
const _hoisted_9 = { class: "text-3xl font-bold tracking-tight mb-2 text-white leading-tight" };
const _hoisted_10 = { class: "text-blue-100 text-sm max-w-xl mb-5 font-normal leading-relaxed" };
const _hoisted_11 = { class: "flex flex-wrap gap-4 text-xs font-semibold text-white/90" };
const _hoisted_12 = { class: "flex items-center bg-white/10 border border-white/15 px-3 py-1.5 rounded-xl" };
const _hoisted_13 = { class: "flex items-center bg-white/10 border border-white/15 px-3 py-1.5 rounded-xl" };
const _hoisted_14 = { class: "flex flex-col items-start md:items-end gap-1 bg-white/10 border border-white/15 rounded-2xl p-4 md:p-6 min-w-[140px] text-left md:text-right" };
const _hoisted_15 = { class: "text-4xl font-bold text-white mt-1.5 leading-none" };
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
const _hoisted_32 = { class: "text-left mt-10 mb-8" };
const _hoisted_33 = { class: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch mb-12" };
const _hoisted_34 = {
  key: 0,
  class: "absolute -top-3.5 right-6 bg-blue-600 text-white text-[9.5px] font-extrabold uppercase tracking-wider px-3.5 py-1 rounded-full shadow-md shadow-blue-500/20 border border-blue-400"
};
const _hoisted_35 = { class: "flex-grow flex flex-col" };
const _hoisted_36 = { class: "text-xl font-extrabold text-slate-800 tracking-tight" };
const _hoisted_37 = {
  key: 0,
  class: "text-xs text-slate-500 mt-1 font-medium leading-relaxed"
};
const _hoisted_38 = { class: "price-box my-6 flex flex-col items-start justify-center" };
const _hoisted_39 = {
  key: 0,
  class: "flex items-center gap-2 mb-1"
};
const _hoisted_40 = { class: "text-xs text-slate-400 line-through" };
const _hoisted_41 = { class: "text-[9px] font-black uppercase bg-emerald-50 border border-emerald-200 text-emerald-600 px-2 py-0.5 rounded" };
const _hoisted_42 = { class: "flex items-baseline flex-wrap gap-1" };
const _hoisted_43 = { class: "text-3xl font-black text-slate-900 tracking-tight" };
const _hoisted_44 = { class: "text-xs font-semibold text-slate-500 ml-1 whitespace-nowrap" };
const _hoisted_45 = { class: "w-full space-y-3.5 text-left border-t border-slate-100/80 pt-6" };
const _hoisted_46 = { class: "flex items-center space-x-2.5 text-xs text-slate-600 font-medium" };
const _hoisted_47 = { class: "flex items-center space-x-2.5 text-xs text-slate-600 font-medium" };
const _hoisted_48 = { class: "flex items-center space-x-2.5 text-xs text-slate-600 font-medium" };
const _hoisted_49 = { class: "flex items-center space-x-2.5 text-xs text-slate-600 font-medium" };
const _hoisted_50 = { class: "flex items-center space-x-2.5 text-xs text-slate-600 font-medium" };
const _hoisted_51 = { class: "flex items-center space-x-2.5 text-xs text-slate-600 font-medium" };
const _hoisted_52 = { key: 0 };
const _hoisted_53 = { key: 1 };
const _hoisted_54 = { key: 2 };
const _hoisted_55 = {
  key: 0,
  class: "flex items-center space-x-2.5 text-xs text-slate-600 font-medium"
};
const _hoisted_56 = {
  key: 1,
  class: "flex items-center space-x-2.5 text-xs text-slate-600 font-medium"
};
const _hoisted_57 = { class: "mt-8 w-full" };
const _hoisted_58 = {
  key: 0,
  disabled: "",
  class: "w-full bg-slate-100 border border-slate-200 text-slate-400 rounded-2xl py-3.5 text-xs font-bold uppercase tracking-wider cursor-default flex items-center justify-center space-x-2"
};
const _hoisted_59 = ["onClick", "disabled"];
const _hoisted_60 = { key: 2 };
const _hoisted_61 = { class: "mt-16 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm text-left font-outfit" };
const _hoisted_62 = { class: "flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 border-b border-slate-100 pb-5" };
const _hoisted_63 = { class: "flex items-center space-x-3" };
const _hoisted_64 = { class: "w-10 h-10 bg-blue-50 border border-blue-100 rounded-2xl flex items-center justify-center text-blue-600 flex-shrink-0" };
const _hoisted_65 = { class: "flex items-center bg-slate-100 p-1 rounded-xl w-fit" };
const _hoisted_66 = {
  key: 0,
  class: "text-[9px] bg-slate-200 text-slate-700 px-1.5 py-0.2 rounded-full font-bold"
};
const _hoisted_67 = {
  key: 0,
  class: "text-[9px] bg-slate-200 text-slate-700 px-1.5 py-0.2 rounded-full font-bold"
};
const _hoisted_68 = {
  key: 0,
  class: "py-12 text-center flex flex-col items-center justify-center space-y-3"
};
const _hoisted_69 = {
  key: 0,
  class: "py-12 text-center bg-slate-50/50 rounded-2xl border border-dashed border-slate-200 p-8"
};
const _hoisted_70 = { key: 1 };
const _hoisted_71 = { class: "overflow-x-auto" };
const _hoisted_72 = { class: "w-full text-left border-collapse min-w-[640px]" };
const _hoisted_73 = { class: "divide-y divide-slate-100 text-xs text-slate-700" };
const _hoisted_74 = { class: "py-3.5 px-4 font-bold text-slate-800" };
const _hoisted_75 = { class: "py-3.5 px-4 font-medium text-slate-500" };
const _hoisted_76 = { class: "py-3.5 px-4 font-bold text-slate-900" };
const _hoisted_77 = { class: "py-3.5 px-4 font-medium text-slate-600 capitalize" };
const _hoisted_78 = { class: "py-3.5 px-4 font-mono text-[11px] text-slate-400" };
const _hoisted_79 = { class: "py-3.5 px-4 text-right" };
const _hoisted_80 = {
  key: 0,
  class: "flex flex-col sm:flex-row items-center justify-between gap-3 pt-5 mt-4 border-t border-slate-100 text-xs"
};
const _hoisted_81 = { class: "text-slate-400 font-medium text-[11px]" };
const _hoisted_82 = { class: "font-bold text-slate-700" };
const _hoisted_83 = { class: "font-bold text-slate-700" };
const _hoisted_84 = { class: "font-bold text-slate-700" };
const _hoisted_85 = { class: "flex items-center space-x-1.5" };
const _hoisted_86 = ["disabled"];
const _hoisted_87 = ["onClick"];
const _hoisted_88 = ["disabled"];
const _hoisted_89 = {
  key: 0,
  class: "py-12 text-center bg-slate-50/50 rounded-2xl border border-dashed border-slate-200 p-8"
};
const _hoisted_90 = { key: 1 };
const _hoisted_91 = { class: "overflow-x-auto" };
const _hoisted_92 = { class: "w-full text-left border-collapse min-w-[640px]" };
const _hoisted_93 = { class: "divide-y divide-slate-100 text-xs text-slate-700" };
const _hoisted_94 = { class: "py-3.5 px-4 font-bold text-slate-800" };
const _hoisted_95 = { class: "py-3.5 px-4 font-medium text-slate-500" };
const _hoisted_96 = { class: "py-3.5 px-4 font-medium text-slate-500" };
const _hoisted_97 = { class: "py-3.5 px-4 font-bold text-slate-900" };
const _hoisted_98 = { class: "py-3.5 px-4 text-right" };
const _hoisted_99 = {
  key: 0,
  class: "flex flex-col sm:flex-row items-center justify-between gap-3 pt-5 mt-4 border-t border-slate-100 text-xs"
};
const _hoisted_100 = { class: "text-slate-400 font-medium text-[11px]" };
const _hoisted_101 = { class: "font-bold text-slate-700" };
const _hoisted_102 = { class: "font-bold text-slate-700" };
const _hoisted_103 = { class: "font-bold text-slate-700" };
const _hoisted_104 = { class: "flex items-center space-x-1.5" };
const _hoisted_105 = ["disabled"];
const _hoisted_106 = ["onClick"];
const _hoisted_107 = ["disabled"];
const itemsPerPage = 10;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "SubscriptionPage",
  setup(__props) {
    const { user, checkAuth, isPlanExpired } = useAuth();
    useRouter();
    const plans = ref([]);
    const isLoading = ref(true);
    const subscribingPlanId = ref(null);
    const historyLoading = ref(false);
    const orders = ref([]);
    const subscriptionsHistory = ref([]);
    const activeHistoryTab = ref("orders");
    const ordersPage = ref(1);
    const subscriptionsPage = ref(1);
    const totalOrdersPages = computed(() => Math.ceil(orders.value.length / itemsPerPage) || 1);
    const paginatedOrders = computed(() => {
      const start = (ordersPage.value - 1) * itemsPerPage;
      return orders.value.slice(start, start + itemsPerPage);
    });
    const totalSubscriptionsPages = computed(() => Math.ceil(subscriptionsHistory.value.length / itemsPerPage) || 1);
    const paginatedSubscriptions = computed(() => {
      const start = (subscriptionsPage.value - 1) * itemsPerPage;
      return subscriptionsHistory.value.slice(start, start + itemsPerPage);
    });
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
      if (!days) return "forever";
      if (days === 30) return "month";
      if (days === 90) return "3 months";
      if (days === 180) return "6 months";
      if (days === 365) return "year";
      return `${days} days`;
    };
    const formatDate = (dateString) => {
      if (!dateString) return "N/A";
      return new Date(dateString).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric"
      });
    };
    const formatDateTime = (dateStr) => {
      if (!dateStr) return "N/A";
      return new Date(dateStr).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit"
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
    const fetchHistory = async () => {
      try {
        historyLoading.value = true;
        const res = await studentAPI.getSubscriptionHistory();
        orders.value = res.orders || [];
        subscriptionsHistory.value = res.subscriptions || [];
      } catch (err) {
        console.error("Failed to load subscription history:", err);
      } finally {
        historyLoading.value = false;
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
        await fetchHistory();
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
      fetchHistory();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        isLoading.value ? (openBlock(), createElementBlock("div", _hoisted_2, [..._cache[6] || (_cache[6] = [
          createBaseVNode("div", { class: "animate-spin rounded-full h-10 w-10 border-2 border-blue-600 border-t-transparent" }, null, -1),
          createBaseVNode("p", { class: "text-xs font-semibold text-slate-400 uppercase tracking-wider animate-pulse" }, "Loading subscription plans...", -1)
        ])])) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
          unref(isPlanExpired) ? (openBlock(), createElementBlock("div", _hoisted_3, [
            createBaseVNode("div", _hoisted_4, [
              createVNode(unref(TriangleAlert), { class: "w-5 h-5" })
            ]),
            _cache[7] || (_cache[7] = createBaseVNode("div", null, [
              createBaseVNode("h3", { class: "text-sm font-semibold text-rose-800 uppercase tracking-wider" }, "Your subscription has expired"),
              createBaseVNode("p", { class: "text-xs text-rose-605/90 mt-1" }, "Please select and subscribe to a plan below to resume library and seat booking access.")
            ], -1))
          ])) : createCommentVNode("", true),
          unref(user)?.active_subscription ? (openBlock(), createElementBlock("div", _hoisted_5, [
            _cache[16] || (_cache[16] = createBaseVNode("div", { class: "absolute -right-10 -top-10 w-56 h-56 bg-white/10 rounded-full blur-2xl pointer-events-none" }, null, -1)),
            _cache[17] || (_cache[17] = createBaseVNode("div", { class: "absolute -left-10 -bottom-10 w-56 h-56 bg-white/5 rounded-full blur-xl pointer-events-none" }, null, -1)),
            createBaseVNode("div", _hoisted_6, [
              createBaseVNode("div", _hoisted_7, [
                createBaseVNode("div", _hoisted_8, [
                  _cache[8] || (_cache[8] = createBaseVNode("div", { class: "inline-flex items-center px-3 py-1 rounded-full bg-white/15 border border-white/20 text-white text-[10px] font-medium uppercase tracking-wider mb-4" }, [
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
                  _cache[9] || (_cache[9] = createBaseVNode("div", { class: "text-[10px] font-semibold text-blue-200 uppercase tracking-widest leading-none" }, "Days Remaining", -1)),
                  createBaseVNode("div", _hoisted_15, toDisplayString(calculateRemainingDays(unref(user).active_subscription.expires_at)), 1)
                ])
              ]),
              createBaseVNode("div", _hoisted_16, [
                createBaseVNode("div", _hoisted_17, [
                  _cache[10] || (_cache[10] = createBaseVNode("div", { class: "text-[10px] font-extrabold text-blue-200 uppercase tracking-widest mb-1.5 leading-none" }, "Daily Seats", -1)),
                  createBaseVNode("div", _hoisted_18, toDisplayString(unref(user).active_subscription.subscription_plan?.daily_seat_bookings_limit === -1 || !unref(user).active_subscription.subscription_plan?.daily_seat_bookings_limit ? "∞" : unref(user).active_subscription.subscription_plan?.daily_seat_bookings_limit), 1)
                ]),
                createBaseVNode("div", _hoisted_19, [
                  _cache[11] || (_cache[11] = createBaseVNode("div", { class: "text-[10px] font-extrabold text-blue-200 uppercase tracking-widest mb-1.5 leading-none" }, "Monthly Seats", -1)),
                  createBaseVNode("div", _hoisted_20, toDisplayString(unref(user).active_subscription.subscription_plan?.monthly_seat_bookings_limit === -1 || !unref(user).active_subscription.subscription_plan?.monthly_seat_bookings_limit ? "∞" : unref(user).active_subscription.subscription_plan?.monthly_seat_bookings_limit), 1)
                ]),
                createBaseVNode("div", _hoisted_21, [
                  _cache[12] || (_cache[12] = createBaseVNode("div", { class: "text-[10px] font-extrabold text-blue-200 uppercase tracking-widest mb-1.5 leading-none" }, "Libraries Access", -1)),
                  createBaseVNode("div", _hoisted_22, toDisplayString(unref(user).active_subscription.subscription_plan?.libraries_access_limit === -1 || !unref(user).active_subscription.subscription_plan?.libraries_access_limit ? "∞" : unref(user).active_subscription.subscription_plan?.libraries_access_limit), 1)
                ]),
                createBaseVNode("div", _hoisted_23, [
                  _cache[13] || (_cache[13] = createBaseVNode("div", { class: "text-[10px] font-extrabold text-blue-200 uppercase tracking-widest mb-1.5 leading-none" }, "Books Access", -1)),
                  createBaseVNode("div", _hoisted_24, toDisplayString(unref(user).active_subscription.subscription_plan?.books_access_limit === -1 || !unref(user).active_subscription.subscription_plan?.books_access_limit ? "∞" : unref(user).active_subscription.subscription_plan?.books_access_limit), 1)
                ]),
                createBaseVNode("div", _hoisted_25, [
                  _cache[14] || (_cache[14] = createBaseVNode("div", { class: "text-[10px] font-extrabold text-blue-200 uppercase tracking-widest mb-1.5 leading-none" }, "Events Limit", -1)),
                  createBaseVNode("div", _hoisted_26, toDisplayString(unref(user).active_subscription.subscription_plan?.events_joining_limit === -1 || !unref(user).active_subscription.subscription_plan?.events_joining_limit ? "∞" : unref(user).active_subscription.subscription_plan?.events_joining_limit), 1)
                ]),
                createBaseVNode("div", _hoisted_27, [
                  _cache[15] || (_cache[15] = createBaseVNode("div", { class: "text-[10px] font-extrabold text-blue-200 uppercase tracking-widest mb-1.5 leading-none" }, "Adv. Booking", -1)),
                  createBaseVNode("div", _hoisted_28, [
                    unref(user).active_subscription.subscription_plan?.advance_booking_days === -1 ? (openBlock(), createElementBlock("span", _hoisted_29, "∞")) : unref(user).active_subscription.subscription_plan?.advance_booking_days === 0 ? (openBlock(), createElementBlock("span", _hoisted_30, "Today")) : (openBlock(), createElementBlock("span", _hoisted_31, toDisplayString(unref(user).active_subscription.subscription_plan?.advance_booking_days) + "d", 1))
                  ])
                ])
              ])
            ])
          ])) : createCommentVNode("", true),
          createBaseVNode("div", _hoisted_32, [
            _cache[23] || (_cache[23] = createBaseVNode("h2", { class: "text-2xl font-bold text-slate-800 tracking-tight font-outfit" }, "Choose Your Plan", -1)),
            createBaseVNode("div", _hoisted_33, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(plans.value, (plan) => {
                return openBlock(), createElementBlock("div", {
                  key: plan.id,
                  class: normalizeClass([
                    plan.name.toLowerCase().includes("premium") || plan.name.toLowerCase().includes("pro") ? "bg-white border-2 border-blue-600 rounded-3xl p-7 shadow-xl shadow-blue-500/10 flex flex-col justify-between text-left relative transform lg:-translate-y-2" : "bg-white border border-slate-200/90 rounded-3xl p-7 shadow-sm hover:border-blue-300 hover:shadow-md transition-all duration-300 flex flex-col justify-between text-left"
                  ])
                }, [
                  plan.name.toLowerCase().includes("premium") || plan.name.toLowerCase().includes("pro") ? (openBlock(), createElementBlock("div", _hoisted_34, " Popular Choice ")) : createCommentVNode("", true),
                  createBaseVNode("div", _hoisted_35, [
                    createBaseVNode("div", null, [
                      createBaseVNode("h3", _hoisted_36, toDisplayString(plan.name), 1),
                      plan.description ? (openBlock(), createElementBlock("p", _hoisted_37, toDisplayString(plan.description), 1)) : createCommentVNode("", true),
                      createBaseVNode("div", _hoisted_38, [
                        plan.features?.discount_type && plan.features?.discount_type !== "none" ? (openBlock(), createElementBlock("div", _hoisted_39, [
                          createBaseVNode("span", _hoisted_40, "PKR " + toDisplayString(formatPrice(plan.features?.original_price)), 1),
                          createBaseVNode("span", _hoisted_41, toDisplayString(plan.features?.discount_type === "percentage" ? `${plan.features?.discount_value}% OFF` : `PKR ${plan.features?.discount_value} OFF`), 1)
                        ])) : createCommentVNode("", true),
                        createBaseVNode("div", _hoisted_42, [
                          createBaseVNode("span", _hoisted_43, "PKR " + toDisplayString(formatPrice(plan.price)), 1),
                          createBaseVNode("span", _hoisted_44, " / " + toDisplayString(formatDuration(plan.duration_days)), 1)
                        ])
                      ])
                    ]),
                    createBaseVNode("ul", _hoisted_45, [
                      createBaseVNode("li", _hoisted_46, [
                        createVNode(unref(Check), { class: "h-4 w-4 text-blue-600 flex-shrink-0" }),
                        createBaseVNode("span", null, toDisplayString(plan.daily_seat_bookings_limit === -1 || !plan.daily_seat_bookings_limit ? "Unlimited Daily Seat Bookings" : `${plan.daily_seat_bookings_limit} Daily Seat Bookings`), 1)
                      ]),
                      createBaseVNode("li", _hoisted_47, [
                        createVNode(unref(Check), { class: "h-4 w-4 text-blue-600 flex-shrink-0" }),
                        createBaseVNode("span", null, toDisplayString(plan.monthly_seat_bookings_limit === -1 || !plan.monthly_seat_bookings_limit ? "Unlimited Monthly Seat Bookings" : `${plan.monthly_seat_bookings_limit} Monthly Seat Bookings`), 1)
                      ]),
                      createBaseVNode("li", _hoisted_48, [
                        createVNode(unref(Check), { class: "h-4 w-4 text-blue-600 flex-shrink-0" }),
                        createBaseVNode("span", null, toDisplayString(plan.libraries_access_limit === -1 || !plan.libraries_access_limit ? "Unlimited Libraries Access" : `${plan.libraries_access_limit} Libraries Access`), 1)
                      ]),
                      createBaseVNode("li", _hoisted_49, [
                        createVNode(unref(Check), { class: "h-4 w-4 text-blue-600 flex-shrink-0" }),
                        createBaseVNode("span", null, toDisplayString(plan.books_access_limit === -1 || !plan.books_access_limit ? "Unlimited Books Access" : `${plan.books_access_limit} Books Access`), 1)
                      ]),
                      createBaseVNode("li", _hoisted_50, [
                        createVNode(unref(Check), { class: "h-4 w-4 text-blue-600 flex-shrink-0" }),
                        createBaseVNode("span", null, toDisplayString(plan.events_joining_limit === -1 || !plan.events_joining_limit ? "Unlimited Events Joining" : `${plan.events_joining_limit} Events Joining`), 1)
                      ]),
                      createBaseVNode("li", _hoisted_51, [
                        createVNode(unref(Check), { class: "h-4 w-4 text-blue-600 flex-shrink-0" }),
                        createBaseVNode("span", null, [
                          plan.advance_booking_days === -1 ? (openBlock(), createElementBlock("span", _hoisted_52, "Unlimited Advance Booking")) : plan.advance_booking_days === 0 ? (openBlock(), createElementBlock("span", _hoisted_53, "Same Day Booking Only")) : (openBlock(), createElementBlock("span", _hoisted_54, toDisplayString(plan.advance_booking_days) + " Days Advance Booking", 1))
                        ])
                      ]),
                      plan.digital_books_access ? (openBlock(), createElementBlock("li", _hoisted_55, [
                        createVNode(unref(Check), { class: "h-4 w-4 text-blue-600 flex-shrink-0" }),
                        _cache[18] || (_cache[18] = createBaseVNode("span", null, "Digital Books Access", -1))
                      ])) : createCommentVNode("", true),
                      plan.priority_booking ? (openBlock(), createElementBlock("li", _hoisted_56, [
                        createVNode(unref(Check), { class: "h-4 w-4 text-blue-600 flex-shrink-0" }),
                        _cache[19] || (_cache[19] = createBaseVNode("span", null, "Priority Seat Booking", -1))
                      ])) : createCommentVNode("", true)
                    ])
                  ]),
                  createBaseVNode("div", _hoisted_57, [
                    isCurrentPlan(plan.id) && !unref(isPlanExpired) ? (openBlock(), createElementBlock("button", _hoisted_58, [..._cache[20] || (_cache[20] = [
                      createBaseVNode("span", null, "Current Plan", -1)
                    ])])) : (openBlock(), createElementBlock("button", {
                      key: 1,
                      onClick: ($event) => subscribe(plan),
                      disabled: subscribingPlanId.value !== null || !!unref(user)?.pending_order,
                      class: normalizeClass([
                        "w-full py-3.5 rounded-2xl text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center space-x-2 border shadow-sm duration-200 cursor-pointer",
                        unref(user)?.pending_order?.plan_id === plan.id ? "bg-amber-50 text-amber-700 border-amber-300 cursor-not-allowed shadow-none" : !!unref(user)?.pending_order ? "bg-slate-50 text-slate-400 border-slate-200 cursor-not-allowed shadow-none" : plan.name.toLowerCase().includes("premium") || plan.name.toLowerCase().includes("pro") ? "bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-500/15 border-transparent" : "bg-slate-100 hover:bg-slate-200 text-slate-700 border-transparent"
                      ])
                    }, [
                      subscribingPlanId.value === plan.id ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                        createVNode(unref(LoaderCircle), { class: "w-3.5 h-3.5 animate-spin" }),
                        _cache[21] || (_cache[21] = createBaseVNode("span", null, "Processing...", -1))
                      ], 64)) : unref(user)?.pending_order?.plan_id === plan.id ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                        createVNode(unref(Clock), { class: "w-3.5 h-3.5 text-amber-500" }),
                        _cache[22] || (_cache[22] = createBaseVNode("span", null, "Pending Approval", -1))
                      ], 64)) : (openBlock(), createElementBlock("span", _hoisted_60, toDisplayString(isCurrentPlan(plan.id) ? "Renew Now" : "Upgrade Now"), 1))
                    ], 10, _hoisted_59))
                  ])
                ], 2);
              }), 128))
            ])
          ]),
          createBaseVNode("div", _hoisted_61, [
            createBaseVNode("div", _hoisted_62, [
              createBaseVNode("div", _hoisted_63, [
                createBaseVNode("div", _hoisted_64, [
                  createVNode(unref(Receipt), { class: "w-5 h-5" })
                ]),
                _cache[24] || (_cache[24] = createBaseVNode("div", null, [
                  createBaseVNode("h3", { class: "text-lg font-bold text-slate-800 tracking-tight leading-snug" }, "Billing & Subscription History"),
                  createBaseVNode("p", { class: "text-xs text-slate-400 font-medium mt-0.5" }, "Track your subscription purchase requests, payment receipts, and membership history.")
                ], -1))
              ]),
              createBaseVNode("div", _hoisted_65, [
                createBaseVNode("button", {
                  onClick: _cache[0] || (_cache[0] = ($event) => activeHistoryTab.value = "orders"),
                  class: normalizeClass([
                    "px-4 py-1.5 rounded-lg text-[11px] font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center space-x-1.5",
                    activeHistoryTab.value === "orders" ? "bg-white shadow-sm text-slate-800" : "text-slate-500 hover:text-slate-700"
                  ])
                }, [
                  createVNode(unref(CreditCard), { class: "w-3.5 h-3.5" }),
                  _cache[25] || (_cache[25] = createBaseVNode("span", null, "Orders & Receipts", -1)),
                  orders.value.length > 0 ? (openBlock(), createElementBlock("span", _hoisted_66, toDisplayString(orders.value.length), 1)) : createCommentVNode("", true)
                ], 2),
                createBaseVNode("button", {
                  onClick: _cache[1] || (_cache[1] = ($event) => activeHistoryTab.value = "subscriptions"),
                  class: normalizeClass([
                    "px-4 py-1.5 rounded-lg text-[11px] font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center space-x-1.5",
                    activeHistoryTab.value === "subscriptions" ? "bg-white shadow-sm text-slate-800" : "text-slate-500 hover:text-slate-700"
                  ])
                }, [
                  createVNode(unref(Calendar), { class: "w-3.5 h-3.5" }),
                  _cache[26] || (_cache[26] = createBaseVNode("span", null, "Membership Cycles", -1)),
                  subscriptionsHistory.value.length > 0 ? (openBlock(), createElementBlock("span", _hoisted_67, toDisplayString(subscriptionsHistory.value.length), 1)) : createCommentVNode("", true)
                ], 2)
              ])
            ]),
            historyLoading.value ? (openBlock(), createElementBlock("div", _hoisted_68, [
              createVNode(unref(LoaderCircle), { class: "w-6 h-6 animate-spin text-blue-600" }),
              _cache[27] || (_cache[27] = createBaseVNode("p", { class: "text-xs font-semibold text-slate-400 uppercase tracking-wider animate-pulse" }, "Loading history...", -1))
            ])) : activeHistoryTab.value === "orders" ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
              orders.value.length === 0 ? (openBlock(), createElementBlock("div", _hoisted_69, [
                createVNode(unref(CreditCard), { class: "w-10 h-10 text-slate-300 mx-auto mb-3" }),
                _cache[28] || (_cache[28] = createBaseVNode("h4", { class: "text-sm font-semibold text-slate-700 mb-1" }, "No Orders Found", -1)),
                _cache[29] || (_cache[29] = createBaseVNode("p", { class: "text-xs text-slate-400 max-w-sm mx-auto" }, "You have not purchased any subscription plans yet.", -1))
              ])) : (openBlock(), createElementBlock("div", _hoisted_70, [
                createBaseVNode("div", _hoisted_71, [
                  createBaseVNode("table", _hoisted_72, [
                    _cache[30] || (_cache[30] = createBaseVNode("thead", null, [
                      createBaseVNode("tr", { class: "border-b border-slate-100 text-[10px] font-bold uppercase tracking-wider text-slate-400" }, [
                        createBaseVNode("th", { class: "py-3 px-4" }, "Plan Name"),
                        createBaseVNode("th", { class: "py-3 px-4" }, "Date & Time"),
                        createBaseVNode("th", { class: "py-3 px-4" }, "Amount"),
                        createBaseVNode("th", { class: "py-3 px-4" }, "Payment Method"),
                        createBaseVNode("th", { class: "py-3 px-4" }, "Transaction / Ref"),
                        createBaseVNode("th", { class: "py-3 px-4 text-right" }, "Status")
                      ])
                    ], -1)),
                    createBaseVNode("tbody", _hoisted_73, [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(paginatedOrders.value, (order) => {
                        return openBlock(), createElementBlock("tr", {
                          key: order.id,
                          class: "hover:bg-slate-50/50 transition-colors"
                        }, [
                          createBaseVNode("td", _hoisted_74, toDisplayString(order.plan?.name || order.notes || "Subscription Request"), 1),
                          createBaseVNode("td", _hoisted_75, toDisplayString(formatDateTime(order.created_at)), 1),
                          createBaseVNode("td", _hoisted_76, " PKR " + toDisplayString(formatPrice(order.amount)), 1),
                          createBaseVNode("td", _hoisted_77, toDisplayString(order.payment_method === "manual" ? "Manual / Offline" : order.payment_method), 1),
                          createBaseVNode("td", _hoisted_78, toDisplayString(order.transaction_id || "#" + order.id), 1),
                          createBaseVNode("td", _hoisted_79, [
                            createBaseVNode("span", {
                              class: normalizeClass([
                                "px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider inline-flex items-center gap-1",
                                order.status === "completed" || order.status === "approved" ? "bg-emerald-50 text-emerald-700 border border-emerald-200" : order.status === "pending" ? "bg-amber-50 text-amber-700 border border-amber-200" : "bg-rose-50 text-rose-700 border border-rose-200"
                              ])
                            }, [
                              createBaseVNode("span", {
                                class: normalizeClass([
                                  "w-1.5 h-1.5 rounded-full",
                                  order.status === "completed" || order.status === "approved" ? "bg-emerald-500" : order.status === "pending" ? "bg-amber-500 animate-pulse" : "bg-rose-500"
                                ])
                              }, null, 2),
                              createTextVNode(" " + toDisplayString(order.status === "completed" || order.status === "approved" ? "Approved" : order.status === "pending" ? "Pending" : "Rejected"), 1)
                            ], 2)
                          ])
                        ]);
                      }), 128))
                    ])
                  ])
                ]),
                orders.value.length > itemsPerPage ? (openBlock(), createElementBlock("div", _hoisted_80, [
                  createBaseVNode("div", _hoisted_81, [
                    _cache[31] || (_cache[31] = createTextVNode(" Showing ", -1)),
                    createBaseVNode("span", _hoisted_82, toDisplayString((ordersPage.value - 1) * itemsPerPage + 1), 1),
                    _cache[32] || (_cache[32] = createTextVNode(" to ", -1)),
                    createBaseVNode("span", _hoisted_83, toDisplayString(Math.min(ordersPage.value * itemsPerPage, orders.value.length)), 1),
                    _cache[33] || (_cache[33] = createTextVNode(" of ", -1)),
                    createBaseVNode("span", _hoisted_84, toDisplayString(orders.value.length), 1),
                    _cache[34] || (_cache[34] = createTextVNode(" orders ", -1))
                  ]),
                  createBaseVNode("div", _hoisted_85, [
                    createBaseVNode("button", {
                      onClick: _cache[2] || (_cache[2] = ($event) => ordersPage.value > 1 ? ordersPage.value-- : null),
                      disabled: ordersPage.value === 1,
                      class: "px-2.5 py-1.5 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition-all flex items-center space-x-1"
                    }, [
                      createVNode(unref(ChevronLeft), { class: "w-3.5 h-3.5" }),
                      _cache[35] || (_cache[35] = createBaseVNode("span", null, "Prev", -1))
                    ], 8, _hoisted_86),
                    (openBlock(true), createElementBlock(Fragment, null, renderList(totalOrdersPages.value, (p) => {
                      return openBlock(), createElementBlock("button", {
                        key: p,
                        onClick: ($event) => ordersPage.value = p,
                        class: normalizeClass([
                          "w-8 h-8 rounded-lg text-xs font-bold transition-all border",
                          ordersPage.value === p ? "bg-blue-600 text-white border-blue-600 shadow-sm" : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50"
                        ])
                      }, toDisplayString(p), 11, _hoisted_87);
                    }), 128)),
                    createBaseVNode("button", {
                      onClick: _cache[3] || (_cache[3] = ($event) => ordersPage.value < totalOrdersPages.value ? ordersPage.value++ : null),
                      disabled: ordersPage.value === totalOrdersPages.value,
                      class: "px-2.5 py-1.5 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition-all flex items-center space-x-1"
                    }, [
                      _cache[36] || (_cache[36] = createBaseVNode("span", null, "Next", -1)),
                      createVNode(unref(ChevronRight), { class: "w-3.5 h-3.5" })
                    ], 8, _hoisted_88)
                  ])
                ])) : createCommentVNode("", true)
              ]))
            ], 64)) : activeHistoryTab.value === "subscriptions" ? (openBlock(), createElementBlock(Fragment, { key: 2 }, [
              subscriptionsHistory.value.length === 0 ? (openBlock(), createElementBlock("div", _hoisted_89, [
                createVNode(unref(Calendar), { class: "w-10 h-10 text-slate-300 mx-auto mb-3" }),
                _cache[37] || (_cache[37] = createBaseVNode("h4", { class: "text-sm font-semibold text-slate-700 mb-1" }, "No Membership Cycles", -1)),
                _cache[38] || (_cache[38] = createBaseVNode("p", { class: "text-xs text-slate-400 max-w-sm mx-auto" }, "No subscription history records found.", -1))
              ])) : (openBlock(), createElementBlock("div", _hoisted_90, [
                createBaseVNode("div", _hoisted_91, [
                  createBaseVNode("table", _hoisted_92, [
                    _cache[39] || (_cache[39] = createBaseVNode("thead", null, [
                      createBaseVNode("tr", { class: "border-b border-slate-100 text-[10px] font-bold uppercase tracking-wider text-slate-400" }, [
                        createBaseVNode("th", { class: "py-3 px-4" }, "Plan Name"),
                        createBaseVNode("th", { class: "py-3 px-4" }, "Start Date"),
                        createBaseVNode("th", { class: "py-3 px-4" }, "Expiry Date"),
                        createBaseVNode("th", { class: "py-3 px-4" }, "Amount Paid"),
                        createBaseVNode("th", { class: "py-3 px-4 text-right" }, "Status")
                      ])
                    ], -1)),
                    createBaseVNode("tbody", _hoisted_93, [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(paginatedSubscriptions.value, (sub) => {
                        return openBlock(), createElementBlock("tr", {
                          key: sub.id,
                          class: "hover:bg-slate-50/50 transition-colors"
                        }, [
                          createBaseVNode("td", _hoisted_94, toDisplayString(sub.subscription_plan?.name || "Membership Plan"), 1),
                          createBaseVNode("td", _hoisted_95, toDisplayString(formatDate(sub.started_at)), 1),
                          createBaseVNode("td", _hoisted_96, toDisplayString(formatDate(sub.expires_at)), 1),
                          createBaseVNode("td", _hoisted_97, " PKR " + toDisplayString(formatPrice(sub.amount_paid)), 1),
                          createBaseVNode("td", _hoisted_98, [
                            createBaseVNode("span", {
                              class: normalizeClass([
                                "px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider inline-flex items-center gap-1",
                                sub.status === "active" && new Date(sub.expires_at) >= /* @__PURE__ */ new Date() ? "bg-emerald-50 text-emerald-700 border border-emerald-200" : sub.status === "cancelled" ? "bg-rose-50 text-rose-700 border border-rose-200" : "bg-slate-100 text-slate-600 border border-slate-200"
                              ])
                            }, [
                              createBaseVNode("span", {
                                class: normalizeClass([
                                  "w-1.5 h-1.5 rounded-full",
                                  sub.status === "active" && new Date(sub.expires_at) >= /* @__PURE__ */ new Date() ? "bg-emerald-500 animate-pulse" : sub.status === "cancelled" ? "bg-rose-500" : "bg-slate-400"
                                ])
                              }, null, 2),
                              createTextVNode(" " + toDisplayString(sub.status === "active" && new Date(sub.expires_at) >= /* @__PURE__ */ new Date() ? "Active" : sub.status === "cancelled" ? "Cancelled" : "Expired"), 1)
                            ], 2)
                          ])
                        ]);
                      }), 128))
                    ])
                  ])
                ]),
                subscriptionsHistory.value.length > itemsPerPage ? (openBlock(), createElementBlock("div", _hoisted_99, [
                  createBaseVNode("div", _hoisted_100, [
                    _cache[40] || (_cache[40] = createTextVNode(" Showing ", -1)),
                    createBaseVNode("span", _hoisted_101, toDisplayString((subscriptionsPage.value - 1) * itemsPerPage + 1), 1),
                    _cache[41] || (_cache[41] = createTextVNode(" to ", -1)),
                    createBaseVNode("span", _hoisted_102, toDisplayString(Math.min(subscriptionsPage.value * itemsPerPage, subscriptionsHistory.value.length)), 1),
                    _cache[42] || (_cache[42] = createTextVNode(" of ", -1)),
                    createBaseVNode("span", _hoisted_103, toDisplayString(subscriptionsHistory.value.length), 1),
                    _cache[43] || (_cache[43] = createTextVNode(" records ", -1))
                  ]),
                  createBaseVNode("div", _hoisted_104, [
                    createBaseVNode("button", {
                      onClick: _cache[4] || (_cache[4] = ($event) => subscriptionsPage.value > 1 ? subscriptionsPage.value-- : null),
                      disabled: subscriptionsPage.value === 1,
                      class: "px-2.5 py-1.5 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition-all flex items-center space-x-1"
                    }, [
                      createVNode(unref(ChevronLeft), { class: "w-3.5 h-3.5" }),
                      _cache[44] || (_cache[44] = createBaseVNode("span", null, "Prev", -1))
                    ], 8, _hoisted_105),
                    (openBlock(true), createElementBlock(Fragment, null, renderList(totalSubscriptionsPages.value, (p) => {
                      return openBlock(), createElementBlock("button", {
                        key: p,
                        onClick: ($event) => subscriptionsPage.value = p,
                        class: normalizeClass([
                          "w-8 h-8 rounded-lg text-xs font-bold transition-all border",
                          subscriptionsPage.value === p ? "bg-blue-600 text-white border-blue-600 shadow-sm" : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50"
                        ])
                      }, toDisplayString(p), 11, _hoisted_106);
                    }), 128)),
                    createBaseVNode("button", {
                      onClick: _cache[5] || (_cache[5] = ($event) => subscriptionsPage.value < totalSubscriptionsPages.value ? subscriptionsPage.value++ : null),
                      disabled: subscriptionsPage.value === totalSubscriptionsPages.value,
                      class: "px-2.5 py-1.5 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition-all flex items-center space-x-1"
                    }, [
                      _cache[45] || (_cache[45] = createBaseVNode("span", null, "Next", -1)),
                      createVNode(unref(ChevronRight), { class: "w-3.5 h-3.5" })
                    ], 8, _hoisted_107)
                  ])
                ])) : createCommentVNode("", true)
              ]))
            ], 64)) : createCommentVNode("", true)
          ])
        ], 64))
      ]);
    };
  }
});
const SubscriptionPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-5b5f010b"]]);
export {
  SubscriptionPage as default
};
