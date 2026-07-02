import { d as defineComponent, r as ref, c as computed, o as onMounted, a as createElementBlock, b as createBaseVNode, f as createVNode, n as normalizeClass, u as unref, F as Fragment, j as renderList, i as createTextVNode, l as createCommentVNode, Y as ownerAPI, h as createBlock, m as resolveDynamicComponent, t as toDisplayString, q as normalizeStyle, k as openBlock } from "./main-DKJzpCzk.js";
import { c as createLucideIcon } from "./createLucideIcon-TQ5d7bQA.js";
import { C as CreditCard } from "./credit-card-8IDBwSuN.js";
import { U as Users } from "./users-3SVXGYtw.js";
import { S as ShieldCheck } from "./shield-check-Cy96K7OO.js";
import { B as Building2 } from "./building-2-BtkbfY_f.js";
import { A as Armchair } from "./armchair-B9aMc4Sz.js";
import { B as BookOpen } from "./book-open-BM8v3M9q.js";
import { C as Calendar } from "./calendar-FTR2aUnV.js";
import { R as RefreshCw } from "./refresh-cw-vjkPNSrg.js";
import { C as ChartColumn } from "./chart-column-I-lCG69q.js";
import { U as User } from "./user-Cmc8aXsW.js";
/* empty css               */
const DollarSign = createLucideIcon("dollar-sign", [
  ["line", { x1: "12", x2: "12", y1: "2", y2: "22", key: "7eqyqh" }],
  ["path", { d: "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6", key: "1b0p4s" }]
]);
const Landmark = createLucideIcon("landmark", [
  ["path", { d: "M10 18v-7", key: "wt116b" }],
  [
    "path",
    {
      d: "M11.12 2.198a2 2 0 0 1 1.76.006l7.866 3.847c.476.233.31.949-.22.949H3.474c-.53 0-.695-.716-.22-.949z",
      key: "1m329m"
    }
  ],
  ["path", { d: "M14 18v-7", key: "vav6t3" }],
  ["path", { d: "M18 18v-7", key: "aexdmj" }],
  ["path", { d: "M3 22h18", key: "8prr45" }],
  ["path", { d: "M6 18v-7", key: "1ivflk" }]
]);
const _hoisted_1 = { class: "p-6 space-y-8 pb-20" };
const _hoisted_2 = { class: "flex flex-col md:flex-row md:items-center justify-between gap-4" };
const _hoisted_3 = ["disabled"];
const _hoisted_4 = {
  key: 0,
  class: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5"
};
const _hoisted_5 = {
  key: 1,
  class: "space-y-8"
};
const _hoisted_6 = { class: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" };
const _hoisted_7 = { class: "relative z-10 flex flex-col justify-between h-full" };
const _hoisted_8 = { class: "flex items-center justify-between mb-4" };
const _hoisted_9 = { class: "text-xs font-bold text-gray-400 uppercase tracking-widest" };
const _hoisted_10 = { class: "flex items-baseline space-x-1 mt-1" };
const _hoisted_11 = {
  key: 0,
  class: "text-lg font-bold text-gray-500"
};
const _hoisted_12 = { class: "text-3xl font-black text-gray-900" };
const _hoisted_13 = {
  key: 1,
  class: "text-sm text-gray-400 font-bold ml-1"
};
const _hoisted_14 = { class: "text-lg font-bold text-gray-700 mb-4 flex items-center gap-2" };
const _hoisted_15 = { class: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4" };
const _hoisted_16 = { class: "text-2xl font-black text-gray-900" };
const _hoisted_17 = { class: "text-xs font-bold text-gray-400 uppercase tracking-wider mt-1" };
const _hoisted_18 = { class: "grid grid-cols-1 lg:grid-cols-3 gap-8" };
const _hoisted_19 = { class: "lg:col-span-2 bg-white p-8 rounded-3xl shadow-sm border border-gray-100" };
const _hoisted_20 = { class: "h-56 flex items-end justify-around px-4 pb-4 border-b border-gray-50" };
const _hoisted_21 = { class: "absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-[10px] font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10" };
const _hoisted_22 = { class: "mt-4 text-[10px] font-bold text-gray-400 uppercase tracking-tighter" };
const _hoisted_23 = {
  key: 1,
  class: "w-full h-full flex items-center justify-center text-gray-400 font-bold text-sm"
};
const _hoisted_24 = { class: "bg-white p-8 rounded-3xl shadow-sm border border-gray-100" };
const _hoisted_25 = { class: "space-y-5" };
const _hoisted_26 = { class: "w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center flex-shrink-0" };
const _hoisted_27 = { class: "flex-1 min-w-0" };
const _hoisted_28 = { class: "text-sm font-bold text-gray-900 truncate" };
const _hoisted_29 = { class: "text-xs text-gray-500 truncate" };
const _hoisted_30 = { class: "text-indigo-600 font-medium" };
const _hoisted_31 = { class: "text-[10px] font-bold text-gray-400 uppercase shrink-0" };
const _hoisted_32 = {
  key: 0,
  class: "text-center py-6 text-gray-400 text-sm font-medium"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "AnalyticsPage",
  setup(__props) {
    const loading = ref(false);
    const rawData = ref(null);
    const primaryStats = computed(() => {
      const o = rawData.value?.overview || {};
      return [
        {
          label: "Total Revenue",
          value: Number(o.total_revenue || 0).toLocaleString(),
          prefix: "Rs.",
          icon: DollarSign,
          color: "bg-green-50 text-green-600",
          bgCircle: "bg-green-600"
        },
        {
          label: "Active Subscriptions",
          value: o.active_subscriptions ?? "0",
          suffix: "Plans",
          icon: CreditCard,
          color: "bg-blue-50 text-blue-600",
          bgCircle: "bg-blue-600"
        },
        {
          label: "Total Students",
          value: o.total_students ?? "0",
          suffix: "Users",
          icon: Users,
          color: "bg-indigo-50 text-indigo-600",
          bgCircle: "bg-indigo-600"
        }
      ];
    });
    const countStats = computed(() => {
      const o = rawData.value?.overview || {};
      return [
        { label: "SuperAdmins", value: o.total_superadmins ?? "0", icon: ShieldCheck, color: "bg-purple-50 text-purple-600" },
        { label: "Librarians", value: o.total_librarians ?? "0", icon: Landmark, color: "bg-cyan-50 text-cyan-600" },
        { label: "Libraries", value: o.total_libraries ?? "0", icon: Building2, color: "bg-orange-50 text-orange-600" },
        { label: "Seats", value: o.total_seats ?? "0", icon: Armchair, color: "bg-pink-50 text-pink-600" },
        { label: "Books", value: o.total_books ?? "0", icon: BookOpen, color: "bg-yellow-50 text-yellow-600" },
        { label: "Today's Bookings", value: o.bookings_today ?? "0", icon: Calendar, color: "bg-teal-50 text-teal-600" }
      ];
    });
    const revenueData = computed(() => rawData.value?.monthly_revenue || []);
    const recentBookings = computed(() => rawData.value?.recent_bookings || []);
    const maxRevenue = computed(() => {
      if (revenueData.value.length === 0) return 1;
      return Math.max(...revenueData.value.map((d) => d.total), 1);
    });
    const fetchAnalytics = async () => {
      loading.value = true;
      try {
        rawData.value = await ownerAPI.getAnalytics();
      } catch (error) {
        console.error("Error fetching analytics:", error);
      } finally {
        loading.value = false;
      }
    };
    const formatTimeAgo = (dateStr) => {
      const diff = Math.floor((Date.now() - new Date(dateStr).getTime()) / 6e4);
      if (diff < 1) return "now";
      if (diff < 60) return `${diff}m`;
      if (diff < 1440) return `${Math.floor(diff / 60)}h`;
      return `${Math.floor(diff / 1440)}d`;
    };
    onMounted(fetchAnalytics);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          _cache[0] || (_cache[0] = createBaseVNode("div", null, [
            createBaseVNode("h1", { class: "text-3xl font-extrabold text-gray-900 tracking-tight" }, "System Performance"),
            createBaseVNode("p", { class: "text-gray-500 mt-1" }, "Cross-library analytics and revenue insights")
          ], -1)),
          createBaseVNode("button", {
            onClick: fetchAnalytics,
            disabled: loading.value,
            class: "p-2.5 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition-all shadow-sm",
            title: "Refresh"
          }, [
            createVNode(unref(RefreshCw), {
              class: normalizeClass(["w-5 h-5 text-gray-600", loading.value ? "animate-spin" : ""])
            }, null, 8, ["class"])
          ], 8, _hoisted_3)
        ]),
        loading.value ? (openBlock(), createElementBlock("div", _hoisted_4, [
          (openBlock(), createElementBlock(Fragment, null, renderList(10, (i) => {
            return createBaseVNode("div", {
              key: i,
              class: "bg-white p-6 rounded-3xl shadow-sm border border-gray-100 animate-pulse h-36"
            });
          }), 64))
        ])) : (openBlock(), createElementBlock("div", _hoisted_5, [
          createBaseVNode("div", _hoisted_6, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(primaryStats.value, (stat) => {
              return openBlock(), createElementBlock("div", {
                key: stat.label,
                class: "bg-white p-6 rounded-3xl shadow-sm border border-gray-100 relative overflow-hidden group hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              }, [
                createBaseVNode("div", _hoisted_7, [
                  createBaseVNode("div", _hoisted_8, [
                    createBaseVNode("div", {
                      class: normalizeClass(["p-3 rounded-2xl", stat.color])
                    }, [
                      (openBlock(), createBlock(resolveDynamicComponent(stat.icon), { class: "w-6 h-6" }))
                    ], 2)
                  ]),
                  createBaseVNode("div", null, [
                    createBaseVNode("p", _hoisted_9, toDisplayString(stat.label), 1),
                    createBaseVNode("div", _hoisted_10, [
                      stat.prefix ? (openBlock(), createElementBlock("span", _hoisted_11, toDisplayString(stat.prefix), 1)) : createCommentVNode("", true),
                      createBaseVNode("h3", _hoisted_12, toDisplayString(stat.value), 1),
                      stat.suffix ? (openBlock(), createElementBlock("span", _hoisted_13, toDisplayString(stat.suffix), 1)) : createCommentVNode("", true)
                    ])
                  ])
                ]),
                createBaseVNode("div", {
                  class: normalizeClass(["absolute -right-4 -bottom-4 w-24 h-24 rounded-full opacity-5 transition-transform duration-500 group-hover:scale-150", stat.bgCircle])
                }, null, 2)
              ]);
            }), 128))
          ]),
          createBaseVNode("div", null, [
            createBaseVNode("h2", _hoisted_14, [
              createVNode(unref(ChartColumn), { class: "w-5 h-5 text-indigo-500" }),
              _cache[1] || (_cache[1] = createTextVNode(" Platform Overview ", -1))
            ]),
            createBaseVNode("div", _hoisted_15, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(countStats.value, (count) => {
                return openBlock(), createElementBlock("div", {
                  key: count.label,
                  class: "bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center group hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
                }, [
                  createBaseVNode("div", {
                    class: normalizeClass(["p-3 rounded-xl mb-3", count.color])
                  }, [
                    (openBlock(), createBlock(resolveDynamicComponent(count.icon), { class: "w-5 h-5" }))
                  ], 2),
                  createBaseVNode("h3", _hoisted_16, toDisplayString(count.value), 1),
                  createBaseVNode("p", _hoisted_17, toDisplayString(count.label), 1)
                ]);
              }), 128))
            ])
          ]),
          createBaseVNode("div", _hoisted_18, [
            createBaseVNode("div", _hoisted_19, [
              _cache[2] || (_cache[2] = createBaseVNode("div", { class: "flex items-center justify-between mb-8" }, [
                createBaseVNode("div", null, [
                  createBaseVNode("h3", { class: "text-xl font-bold text-gray-900" }, "Revenue Growth"),
                  createBaseVNode("p", { class: "text-sm text-gray-500" }, "Monthly subscription earnings across all libraries")
                ])
              ], -1)),
              createBaseVNode("div", _hoisted_20, [
                revenueData.value.length > 0 ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(revenueData.value, (month, idx) => {
                  return openBlock(), createElementBlock("div", {
                    key: idx,
                    class: "flex flex-col items-center group relative",
                    style: normalizeStyle({ width: `${Math.floor(100 / revenueData.value.length)}%`, maxWidth: "64px" })
                  }, [
                    createBaseVNode("div", {
                      style: normalizeStyle({ height: `${Math.max(4, month.total / maxRevenue.value * 100)}%` }),
                      class: "w-8 bg-gradient-to-t from-indigo-600 to-purple-500 rounded-t-lg transition-all duration-500 hover:from-indigo-500 hover:to-purple-400 cursor-pointer min-h-[4px]"
                    }, null, 4),
                    createBaseVNode("div", _hoisted_21, " Rs. " + toDisplayString(month.total.toLocaleString()), 1),
                    createBaseVNode("span", _hoisted_22, toDisplayString(month.month.substring(0, 3)), 1)
                  ], 4);
                }), 128)) : (openBlock(), createElementBlock("div", _hoisted_23, " No revenue data yet "))
              ])
            ]),
            createBaseVNode("div", _hoisted_24, [
              _cache[4] || (_cache[4] = createBaseVNode("h3", { class: "text-xl font-bold text-gray-900 mb-6" }, "Recent Bookings", -1)),
              createBaseVNode("div", _hoisted_25, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(recentBookings.value, (booking) => {
                  return openBlock(), createElementBlock("div", {
                    key: booking.id,
                    class: "flex items-start space-x-4"
                  }, [
                    createBaseVNode("div", _hoisted_26, [
                      createVNode(unref(User), { class: "w-5 h-5 text-gray-400" })
                    ]),
                    createBaseVNode("div", _hoisted_27, [
                      createBaseVNode("p", _hoisted_28, toDisplayString(booking.user?.name), 1),
                      createBaseVNode("p", _hoisted_29, [
                        _cache[3] || (_cache[3] = createTextVNode("Booked at ", -1)),
                        createBaseVNode("span", _hoisted_30, toDisplayString(booking.library?.name), 1)
                      ])
                    ]),
                    createBaseVNode("span", _hoisted_31, toDisplayString(formatTimeAgo(booking.created_at)), 1)
                  ]);
                }), 128)),
                recentBookings.value.length === 0 ? (openBlock(), createElementBlock("div", _hoisted_32, " No recent bookings. ")) : createCommentVNode("", true)
              ])
            ])
          ])
        ]))
      ]);
    };
  }
});
export {
  _sfc_main as default
};
