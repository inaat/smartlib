import { d as defineComponent, r as ref, E as computed, o as onMounted, c as createElementBlock, b as createBaseVNode, m as createCommentVNode, t as toDisplayString, n as normalizeClass, I as normalizeStyle, e as createStaticVNode, F as Fragment, h as renderList, i as openBlock } from "./main-Dk2mUbjP.js";
import { s as studentAPI } from "./studentApi-D7cxrxD-.js";
/* empty css               */
const _hoisted_1 = { class: "space-y-6" };
const _hoisted_2 = {
  key: 0,
  class: "grid grid-cols-1 md:grid-cols-3 gap-6"
};
const _hoisted_3 = { class: "bg-white dark:bg-gray-800 rounded-lg shadow p-6 border-l-4 border-primary-500" };
const _hoisted_4 = { class: "flex items-center justify-between" };
const _hoisted_5 = { class: "text-3xl font-bold text-gray-900 dark:text-white mt-1" };
const _hoisted_6 = { class: "flex items-center justify-between" };
const _hoisted_7 = { class: "text-3xl font-bold text-gray-900 dark:text-white mt-1" };
const _hoisted_8 = {
  key: 0,
  class: "bg-white dark:bg-gray-800 rounded-lg shadow p-6 border-l-4 border-blue-500"
};
const _hoisted_9 = { class: "flex flex-col h-full justify-between" };
const _hoisted_10 = { class: "text-sm font-medium text-gray-500 dark:text-gray-400" };
const _hoisted_11 = { class: "flex justify-between items-end mt-1" };
const _hoisted_12 = { class: "text-xl font-bold text-gray-900 dark:text-white" };
const _hoisted_13 = { class: "text-sm text-gray-500" };
const _hoisted_14 = { class: "w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mt-4" };
const _hoisted_15 = {
  key: 1,
  class: "bg-white dark:bg-gray-800 rounded-lg shadow p-6 border-l-4 border-green-500"
};
const _hoisted_16 = { class: "bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden" };
const _hoisted_17 = { class: "overflow-x-auto" };
const _hoisted_18 = { class: "min-w-full divide-y divide-gray-200 dark:divide-gray-700" };
const _hoisted_19 = {
  key: 0,
  class: "bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700"
};
const _hoisted_20 = { class: "px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400" };
const _hoisted_21 = { class: "px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white" };
const _hoisted_22 = { class: "px-6 py-4 whitespace-nowrap text-sm" };
const _hoisted_23 = { key: 1 };
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
      if (!loyaltyData.value) return "border-gray-500";
      switch (loyaltyData.value.current_tier) {
        case "Bronze":
          return "border-orange-700";
        case "Silver":
          return "border-gray-400";
        case "Gold":
          return "border-yellow-500";
        case "Platinum":
          return "border-purple-500";
        default:
          return "border-gray-500";
      }
    });
    const tierIconBgClass = computed(() => {
      if (!loyaltyData.value) return "bg-gray-100 dark:bg-gray-900";
      switch (loyaltyData.value.current_tier) {
        case "Bronze":
          return "bg-orange-100 dark:bg-orange-900";
        case "Silver":
          return "bg-gray-100 dark:bg-gray-700";
        case "Gold":
          return "bg-yellow-100 dark:bg-yellow-900";
        case "Platinum":
          return "bg-purple-100 dark:bg-purple-900";
        default:
          return "bg-gray-100 dark:bg-gray-900";
      }
    });
    const tierIconColorClass = computed(() => {
      if (!loyaltyData.value) return "text-gray-600 dark:text-gray-400";
      switch (loyaltyData.value.current_tier) {
        case "Bronze":
          return "text-orange-700 dark:text-orange-400";
        case "Silver":
          return "text-gray-600 dark:text-gray-300";
        case "Gold":
          return "text-yellow-600 dark:text-yellow-400";
        case "Platinum":
          return "text-purple-600 dark:text-purple-400";
        default:
          return "text-gray-600 dark:text-gray-400";
      }
    });
    onMounted(() => {
      fetchLoyaltyData();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        _cache[8] || (_cache[8] = createBaseVNode("div", { class: "flex justify-between items-center" }, [
          createBaseVNode("h1", { class: "text-2xl font-bold text-gray-900 dark:text-white" }, "Loyalty Program")
        ], -1)),
        loyaltyData.value ? (openBlock(), createElementBlock("div", _hoisted_2, [
          createBaseVNode("div", _hoisted_3, [
            createBaseVNode("div", _hoisted_4, [
              createBaseVNode("div", null, [
                _cache[0] || (_cache[0] = createBaseVNode("p", { class: "text-sm font-medium text-gray-500 dark:text-gray-400" }, "Total Points", -1)),
                createBaseVNode("p", _hoisted_5, toDisplayString(loyaltyData.value.total_points), 1)
              ]),
              _cache[1] || (_cache[1] = createBaseVNode("div", { class: "p-3 bg-primary-100 dark:bg-primary-900 rounded-full" }, [
                createBaseVNode("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  class: "h-6 w-6 text-primary-600 dark:text-primary-400",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  stroke: "currentColor"
                }, [
                  createBaseVNode("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    "stroke-width": "2",
                    d: "M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
                  })
                ])
              ], -1))
            ])
          ]),
          createBaseVNode("div", {
            class: normalizeClass(["bg-white dark:bg-gray-800 rounded-lg shadow p-6 border-l-4", tierColorClass.value])
          }, [
            createBaseVNode("div", _hoisted_6, [
              createBaseVNode("div", null, [
                _cache[2] || (_cache[2] = createBaseVNode("p", { class: "text-sm font-medium text-gray-500 dark:text-gray-400" }, "Current Tier", -1)),
                createBaseVNode("p", _hoisted_7, toDisplayString(loyaltyData.value.current_tier), 1)
              ]),
              createBaseVNode("div", {
                class: normalizeClass(["p-3 rounded-full", tierIconBgClass.value])
              }, [
                (openBlock(), createElementBlock("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  class: normalizeClass(["h-6 w-6", tierIconColorClass.value]),
                  fill: "none",
                  viewBox: "0 0 24 24",
                  stroke: "currentColor"
                }, [..._cache[3] || (_cache[3] = [
                  createBaseVNode("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    "stroke-width": "2",
                    d: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  }, null, -1)
                ])], 2))
              ], 2)
            ])
          ], 2),
          loyaltyData.value.next_tier ? (openBlock(), createElementBlock("div", _hoisted_8, [
            createBaseVNode("div", _hoisted_9, [
              createBaseVNode("div", null, [
                createBaseVNode("p", _hoisted_10, "Next Tier: " + toDisplayString(loyaltyData.value.next_tier), 1),
                createBaseVNode("div", _hoisted_11, [
                  createBaseVNode("p", _hoisted_12, toDisplayString(loyaltyData.value.points_to_next_tier) + " points needed", 1),
                  createBaseVNode("p", _hoisted_13, toDisplayString(loyaltyData.value.progress) + "%", 1)
                ])
              ]),
              createBaseVNode("div", _hoisted_14, [
                createBaseVNode("div", {
                  class: "bg-blue-600 h-2.5 rounded-full",
                  style: normalizeStyle({ width: loyaltyData.value.progress + "%" })
                }, null, 4)
              ])
            ])
          ])) : (openBlock(), createElementBlock("div", _hoisted_15, [..._cache[4] || (_cache[4] = [
            createStaticVNode('<div class="flex items-center justify-between h-full"><div><p class="text-sm font-medium text-gray-500 dark:text-gray-400">Status</p><p class="text-2xl font-bold text-gray-900 dark:text-white mt-1">Max Tier Reached!</p></div><div class="p-3 bg-green-100 dark:bg-green-900 rounded-full"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path></svg></div></div>', 1)
          ])]))
        ])) : createCommentVNode("", true),
        createBaseVNode("div", _hoisted_16, [
          _cache[7] || (_cache[7] = createBaseVNode("div", { class: "px-6 py-4 border-b border-gray-200 dark:border-gray-700" }, [
            createBaseVNode("h3", { class: "text-lg font-medium text-gray-900 dark:text-white" }, "Recent Transactions")
          ], -1)),
          createBaseVNode("div", _hoisted_17, [
            createBaseVNode("table", _hoisted_18, [
              _cache[6] || (_cache[6] = createBaseVNode("thead", { class: "bg-gray-50 dark:bg-gray-700" }, [
                createBaseVNode("tr", null, [
                  createBaseVNode("th", {
                    scope: "col",
                    class: "px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
                  }, "Date"),
                  createBaseVNode("th", {
                    scope: "col",
                    class: "px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
                  }, "Description"),
                  createBaseVNode("th", {
                    scope: "col",
                    class: "px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
                  }, "Type"),
                  createBaseVNode("th", {
                    scope: "col",
                    class: "px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
                  }, "Points")
                ])
              ], -1)),
              loyaltyData.value && loyaltyData.value.transactions.length > 0 ? (openBlock(), createElementBlock("tbody", _hoisted_19, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(loyaltyData.value.transactions, (transaction) => {
                  return openBlock(), createElementBlock("tr", {
                    key: transaction.id
                  }, [
                    createBaseVNode("td", _hoisted_20, toDisplayString(formatDate(transaction.created_at)), 1),
                    createBaseVNode("td", _hoisted_21, toDisplayString(transaction.description), 1),
                    createBaseVNode("td", _hoisted_22, [
                      createBaseVNode("span", {
                        class: normalizeClass(["px-2 inline-flex text-xs leading-5 font-semibold rounded-full", transaction.points > 0 ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200" : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"])
                      }, toDisplayString(transaction.type), 3)
                    ]),
                    createBaseVNode("td", {
                      class: normalizeClass(["px-6 py-4 whitespace-nowrap text-sm text-right font-medium", transaction.points > 0 ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"])
                    }, toDisplayString(transaction.points > 0 ? "+" : "") + toDisplayString(transaction.points), 3)
                  ]);
                }), 128))
              ])) : (openBlock(), createElementBlock("tbody", _hoisted_23, [..._cache[5] || (_cache[5] = [
                createBaseVNode("tr", null, [
                  createBaseVNode("td", {
                    colspan: "4",
                    class: "px-6 py-4 text-center text-sm text-gray-500 dark:text-gray-400"
                  }, " No transactions found. ")
                ], -1)
              ])]))
            ])
          ])
        ])
      ]);
    };
  }
});
export {
  _sfc_main as default
};
