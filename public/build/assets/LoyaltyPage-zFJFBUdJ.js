import { d as defineComponent, r as ref, c as computed, o as onMounted, a as createElementBlock, j as createCommentVNode, b as createBaseVNode, F as Fragment, f as createVNode, u as unref, t as toDisplayString, n as normalizeClass, i as createTextVNode, q as normalizeStyle, k as renderList, l as openBlock } from "./main-C124sHqx.js";
import { s as studentAPI } from "./studentApi-DfByQrAO.js";
import { c as createLucideIcon } from "./createLucideIcon-8y9GOHiU.js";
import { A as Award } from "./award-CC8Vcsfy.js";
import { S as Sparkles } from "./sparkles-9fpD963V.js";
import { H as History } from "./history-C5Q1JIiT.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
/* empty css               */
const Coins = createLucideIcon("coins", [
  ["circle", { cx: "8", cy: "8", r: "6", key: "3yglwk" }],
  ["path", { d: "M18.09 10.37A6 6 0 1 1 10.34 18", key: "t5s6rm" }],
  ["path", { d: "M7 6h1v4", key: "1obek4" }],
  ["path", { d: "m16.71 13.88.7.71-2.82 2.82", key: "1rbuyh" }]
]);
const _hoisted_1 = { class: "space-y-6 font-outfit" };
const _hoisted_2 = {
  key: 0,
  class: "flex flex-col items-center justify-center py-24 space-y-4"
};
const _hoisted_3 = { class: "grid grid-cols-1 md:grid-cols-3 gap-6" };
const _hoisted_4 = { class: "bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 hover-lift relative text-left overflow-hidden group" };
const _hoisted_5 = { class: "absolute -right-6 -top-6 text-slate-50 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 pointer-events-none" };
const _hoisted_6 = { class: "flex items-center justify-between mb-4 relative z-10" };
const _hoisted_7 = { class: "p-3 bg-blue-50 border border-blue-200/60 rounded-xl text-blue-600" };
const _hoisted_8 = { class: "relative z-10" };
const _hoisted_9 = { class: "text-3xl font-bold text-slate-800 mt-2.5 leading-none" };
const _hoisted_10 = { class: "absolute -right-6 -top-6 text-slate-50 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 pointer-events-none" };
const _hoisted_11 = { class: "flex items-center justify-between mb-4 relative z-10" };
const _hoisted_12 = { class: "relative z-10" };
const _hoisted_13 = { class: "text-3xl font-black text-slate-800 mt-2.5 leading-none" };
const _hoisted_14 = { class: "bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 hover-lift relative text-left overflow-hidden group" };
const _hoisted_15 = { class: "flex flex-col h-full justify-between relative z-10" };
const _hoisted_16 = { key: 0 };
const _hoisted_17 = { class: "flex items-center justify-between mb-4" };
const _hoisted_18 = { class: "p-3 bg-indigo-50 border border-indigo-200/60 rounded-xl text-indigo-600" };
const _hoisted_19 = { class: "inline-flex items-center px-2 py-0.5 rounded-full text-[9px] font-medium uppercase tracking-wider bg-indigo-50 border border-indigo-200 text-indigo-700" };
const _hoisted_20 = { class: "flex justify-between items-baseline mt-2.5" };
const _hoisted_21 = { class: "text-lg font-bold text-slate-700 tracking-tight leading-none" };
const _hoisted_22 = { class: "text-xs font-bold text-indigo-600 leading-none" };
const _hoisted_23 = { class: "w-full bg-slate-100 border border-slate-200/50 rounded-full h-2 mt-3.5 overflow-hidden" };
const _hoisted_24 = {
  key: 1,
  class: "flex flex-col items-center justify-center py-4 text-center"
};
const _hoisted_25 = { class: "p-3 bg-emerald-50 border border-emerald-200/60 rounded-xl text-emerald-600 mb-2" };
const _hoisted_26 = { class: "bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden text-left font-outfit" };
const _hoisted_27 = { class: "px-6 py-5 border-b border-slate-100 flex items-center justify-between bg-slate-50/20" };
const _hoisted_28 = { class: "flex items-center space-x-2.5" };
const _hoisted_29 = { class: "p-2 bg-slate-100 border border-slate-200/60 rounded-xl text-slate-600" };
const _hoisted_30 = { class: "overflow-x-auto" };
const _hoisted_31 = { class: "min-w-full divide-y divide-slate-100" };
const _hoisted_32 = {
  key: 0,
  class: "divide-y divide-slate-100 bg-white"
};
const _hoisted_33 = { class: "px-6 py-4 whitespace-nowrap text-xs font-semibold text-slate-500" };
const _hoisted_34 = { class: "px-6 py-4 whitespace-nowrap text-xs font-semibold text-slate-700" };
const _hoisted_35 = { class: "px-6 py-4 whitespace-nowrap text-xs" };
const _hoisted_36 = { key: 1 };
const _hoisted_37 = {
  colspan: "4",
  class: "px-6 py-12 text-center"
};
const _hoisted_38 = { class: "mx-auto w-10 h-10 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-center mb-3" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "LoyaltyPage",
  setup(__props) {
    const loyaltyData = ref(null);
    const isLoading = ref(true);
    const fetchLoyaltyData = async () => {
      try {
        isLoading.value = true;
        loyaltyData.value = await studentAPI.getLoyaltyTransactions();
      } catch (error) {
        console.error("Error fetching loyalty data:", error);
      } finally {
        isLoading.value = false;
      }
    };
    const formatDate = (dateString) => {
      return new Date(dateString).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit"
      });
    };
    const tierColorClass = computed(() => {
      if (!loyaltyData.value) return "border-slate-100";
      switch (loyaltyData.value.current_tier) {
        case "Bronze":
          return "border-amber-600/35 shadow-amber-50/10";
        case "Silver":
          return "border-slate-400 shadow-slate-50/10";
        case "Gold":
          return "border-yellow-400/40 shadow-yellow-50/10";
        case "Platinum":
          return "border-indigo-400/40 shadow-indigo-50/10";
        default:
          return "border-slate-200/80";
      }
    });
    const tierIconBgClass = computed(() => {
      if (!loyaltyData.value) return "bg-slate-50 border border-slate-200 text-slate-400";
      switch (loyaltyData.value.current_tier) {
        case "Bronze":
          return "bg-amber-50 border border-amber-100 text-amber-600";
        case "Silver":
          return "bg-slate-100 border border-slate-200 text-slate-500";
        case "Gold":
          return "bg-yellow-50 border border-yellow-200 text-yellow-600";
        case "Platinum":
          return "bg-indigo-50 border border-indigo-200 text-indigo-600";
        default:
          return "bg-slate-50 border border-slate-200 text-slate-400";
      }
    });
    const tierIconColorClass = computed(() => {
      if (!loyaltyData.value) return "text-slate-400";
      switch (loyaltyData.value.current_tier) {
        case "Bronze":
          return "text-amber-600";
        case "Silver":
          return "text-slate-600";
        case "Gold":
          return "text-yellow-600";
        case "Platinum":
          return "text-indigo-600";
        default:
          return "text-slate-400";
      }
    });
    onMounted(() => {
      fetchLoyaltyData();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        isLoading.value ? (openBlock(), createElementBlock("div", _hoisted_2, [..._cache[0] || (_cache[0] = [
          createBaseVNode("div", { class: "animate-spin rounded-full h-10 w-10 border-2 border-blue-600 border-t-transparent" }, null, -1),
          createBaseVNode("p", { class: "text-xs font-semibold text-slate-400 uppercase tracking-wider animate-pulse" }, "Loading loyalty info...", -1)
        ])])) : loyaltyData.value ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
          createBaseVNode("div", _hoisted_3, [
            createBaseVNode("div", _hoisted_4, [
              createBaseVNode("div", _hoisted_5, [
                createVNode(unref(Coins), { class: "w-24 h-24 stroke-1 text-slate-100" })
              ]),
              createBaseVNode("div", _hoisted_6, [
                createBaseVNode("div", _hoisted_7, [
                  createVNode(unref(Coins), { class: "w-5 h-5" })
                ])
              ]),
              createBaseVNode("div", _hoisted_8, [
                _cache[1] || (_cache[1] = createBaseVNode("p", { class: "text-[10px] font-semibold text-slate-400 uppercase tracking-widest leading-none" }, "Total Points Balance", -1)),
                createBaseVNode("h3", _hoisted_9, toDisplayString(loyaltyData.value.total_points), 1)
              ])
            ]),
            createBaseVNode("div", {
              class: normalizeClass(["bg-white p-6 rounded-2xl border shadow-sm hover:shadow-md transition-all duration-300 hover-lift relative text-left overflow-hidden group", [tierColorClass.value]])
            }, [
              createBaseVNode("div", _hoisted_10, [
                createVNode(unref(Award), { class: "w-24 h-24 stroke-1 text-slate-100" })
              ]),
              createBaseVNode("div", _hoisted_11, [
                createBaseVNode("div", {
                  class: normalizeClass(["p-3 rounded-xl border", [tierIconBgClass.value]])
                }, [
                  createVNode(unref(Award), {
                    class: normalizeClass(["w-5 h-5", [tierIconColorClass.value]])
                  }, null, 8, ["class"])
                ], 2),
                _cache[2] || (_cache[2] = createBaseVNode("div", { class: "inline-flex items-center px-2 py-0.5 rounded-full text-[9px] font-medium uppercase tracking-wider bg-slate-50 border border-slate-200 text-slate-500" }, " Current Rank ", -1))
              ]),
              createBaseVNode("div", _hoisted_12, [
                _cache[3] || (_cache[3] = createBaseVNode("p", { class: "text-[10px] font-extrabold text-slate-400 uppercase tracking-widest leading-none" }, "Membership Tier", -1)),
                createBaseVNode("h3", _hoisted_13, toDisplayString(loyaltyData.value.current_tier), 1)
              ])
            ], 2),
            createBaseVNode("div", _hoisted_14, [
              createBaseVNode("div", _hoisted_15, [
                loyaltyData.value.next_tier ? (openBlock(), createElementBlock("div", _hoisted_16, [
                  createBaseVNode("div", _hoisted_17, [
                    createBaseVNode("div", _hoisted_18, [
                      createVNode(unref(Sparkles), { class: "w-5 h-5 animate-pulse" })
                    ]),
                    createBaseVNode("div", _hoisted_19, " Next: " + toDisplayString(loyaltyData.value.next_tier), 1)
                  ]),
                  _cache[5] || (_cache[5] = createBaseVNode("p", { class: "text-[10px] font-extrabold text-slate-400 uppercase tracking-widest leading-none" }, "Progress to Next Tier", -1)),
                  createBaseVNode("div", _hoisted_20, [
                    createBaseVNode("h4", _hoisted_21, [
                      createTextVNode(toDisplayString(loyaltyData.value.points_to_next_tier) + " ", 1),
                      _cache[4] || (_cache[4] = createBaseVNode("span", { class: "text-[11px] font-medium text-slate-400 uppercase tracking-wide" }, "pts to go", -1))
                    ]),
                    createBaseVNode("span", _hoisted_22, toDisplayString(loyaltyData.value.progress) + "%", 1)
                  ]),
                  createBaseVNode("div", _hoisted_23, [
                    createBaseVNode("div", {
                      class: "bg-gradient-to-r from-blue-600 to-indigo-600 h-full rounded-full transition-all duration-500",
                      style: normalizeStyle({ width: loyaltyData.value.progress + "%" })
                    }, null, 4)
                  ])
                ])) : (openBlock(), createElementBlock("div", _hoisted_24, [
                  createBaseVNode("div", _hoisted_25, [
                    createVNode(unref(Award), { class: "w-6 h-6 animate-bounce" })
                  ]),
                  _cache[6] || (_cache[6] = createBaseVNode("h4", { class: "text-sm font-semibold text-slate-800" }, "Max Rank Attained", -1)),
                  _cache[7] || (_cache[7] = createBaseVNode("p", { class: "text-[11px] text-slate-400 mt-1" }, "You are at the highest library VIP tier!", -1))
                ]))
              ])
            ])
          ]),
          createBaseVNode("div", _hoisted_26, [
            createBaseVNode("div", _hoisted_27, [
              createBaseVNode("div", _hoisted_28, [
                createBaseVNode("div", _hoisted_29, [
                  createVNode(unref(History), { class: "w-4 h-4" })
                ]),
                _cache[8] || (_cache[8] = createBaseVNode("h3", { class: "font-semibold text-slate-800 text-sm" }, "Recent Transactions", -1))
              ])
            ]),
            createBaseVNode("div", _hoisted_30, [
              createBaseVNode("table", _hoisted_31, [
                _cache[10] || (_cache[10] = createBaseVNode("thead", { class: "bg-slate-50/40" }, [
                  createBaseVNode("tr", null, [
                    createBaseVNode("th", {
                      scope: "col",
                      class: "px-6 py-3.5 text-left text-[10px] font-semibold text-slate-400 uppercase tracking-widest"
                    }, "Date & Time"),
                    createBaseVNode("th", {
                      scope: "col",
                      class: "px-6 py-3.5 text-left text-[10px] font-semibold text-slate-400 uppercase tracking-widest"
                    }, "Description"),
                    createBaseVNode("th", {
                      scope: "col",
                      class: "px-6 py-3.5 text-left text-[10px] font-semibold text-slate-400 uppercase tracking-widest"
                    }, "Type"),
                    createBaseVNode("th", {
                      scope: "col",
                      class: "px-6 py-3.5 text-right text-[10px] font-semibold text-slate-400 uppercase tracking-widest"
                    }, "Points")
                  ])
                ], -1)),
                loyaltyData.value.transactions.length > 0 ? (openBlock(), createElementBlock("tbody", _hoisted_32, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(loyaltyData.value.transactions, (transaction) => {
                    return openBlock(), createElementBlock("tr", {
                      key: transaction.id,
                      class: "hover:bg-slate-50/50 transition-colors"
                    }, [
                      createBaseVNode("td", _hoisted_33, toDisplayString(formatDate(transaction.created_at)), 1),
                      createBaseVNode("td", _hoisted_34, toDisplayString(transaction.description), 1),
                      createBaseVNode("td", _hoisted_35, [
                        createBaseVNode("span", {
                          class: normalizeClass(["inline-flex items-center px-2.5 py-0.5 rounded-full text-[9px] font-medium uppercase tracking-wider", transaction.points > 0 ? "bg-emerald-50 border border-emerald-200 text-emerald-700" : "bg-rose-50 border border-rose-200 text-rose-700"])
                        }, toDisplayString(transaction.type), 3)
                      ]),
                      createBaseVNode("td", {
                        class: normalizeClass(["px-6 py-4 whitespace-nowrap text-xs text-right font-bold", transaction.points > 0 ? "text-emerald-600" : "text-rose-600"])
                      }, toDisplayString(transaction.points > 0 ? "+" : "") + toDisplayString(transaction.points), 3)
                    ]);
                  }), 128))
                ])) : (openBlock(), createElementBlock("tbody", _hoisted_36, [
                  createBaseVNode("tr", null, [
                    createBaseVNode("td", _hoisted_37, [
                      createBaseVNode("div", _hoisted_38, [
                        createVNode(unref(History), { class: "w-4 h-4 text-slate-400" })
                      ]),
                      _cache[9] || (_cache[9] = createBaseVNode("p", { class: "text-xs text-slate-400 italic" }, "No points transactions recorded yet.", -1))
                    ])
                  ])
                ]))
              ])
            ])
          ])
        ], 64)) : createCommentVNode("", true)
      ]);
    };
  }
});
const LoyaltyPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-85cf5d4c"]]);
export {
  LoyaltyPage as default
};
