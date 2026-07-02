import { d as defineComponent, r as ref, G as watch, c as computed, o as onMounted, a as createElementBlock, b as createBaseVNode, p as withDirectives, f as createVNode, D as vModelSelect, F as Fragment, j as renderList, u as unref, t as toDisplayString, l as createCommentVNode, C as useRouter, n as normalizeClass, h as createBlock, m as resolveDynamicComponent, i as createTextVNode, k as openBlock } from "./main-DKJzpCzk.js";
import { s as superadminAPI } from "./superadminApi-RBkuQ_58.js";
import { U as Users } from "./users-3SVXGYtw.js";
import { L as Library } from "./library-Bkji8mTt.js";
import { B as BookOpen } from "./book-open-BM8v3M9q.js";
import { L as LifeBuoy } from "./life-buoy-Cs49b8cx.js";
import { C as Calendar } from "./calendar-FTR2aUnV.js";
import { C as ChevronDown } from "./chevron-down-CfHstygd.js";
import { A as Activity } from "./activity-BerUemxg.js";
import { U as UserCheck } from "./user-check-B9sfqqid.js";
import { T as TrendingUp } from "./trending-up-C06j2gIh.js";
import { T as TrendingDown } from "./trending-down-jH_EpMUh.js";
import { U as User } from "./user-Cmc8aXsW.js";
import { C as CircleCheckBig } from "./circle-check-big-D9EkHUxc.js";
import { C as CircleX } from "./circle-x-Br5cJvxs.js";
import { P as Plus } from "./plus-CR_-MeGX.js";
import { S as Settings } from "./settings-D7cRHaJD.js";
import { S as Shield } from "./shield-wIWvdsJ4.js";
import { U as UserPlus } from "./user-plus-C0erzRZS.js";
/* empty css               */
import "./createLucideIcon-TQ5d7bQA.js";
const _hoisted_1 = { class: "space-y-6" };
const _hoisted_2 = { class: "flex flex-col md:flex-row md:items-center md:justify-between gap-4" };
const _hoisted_3 = { class: "flex items-center space-x-3" };
const _hoisted_4 = { class: "relative" };
const _hoisted_5 = ["value"];
const _hoisted_6 = { class: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6" };
const _hoisted_7 = { class: "flex items-center justify-between mb-4" };
const _hoisted_8 = { class: "text-sm font-medium text-gray-500" };
const _hoisted_9 = { class: "text-2xl font-bold text-gray-900 mt-1" };
const _hoisted_10 = { class: "grid grid-cols-1 lg:grid-cols-3 gap-6" };
const _hoisted_11 = { class: "lg:col-span-2 bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden" };
const _hoisted_12 = { class: "p-0" };
const _hoisted_13 = {
  key: 0,
  class: "p-8 flex justify-center"
};
const _hoisted_14 = {
  key: 1,
  class: "p-12 text-center"
};
const _hoisted_15 = { class: "w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4" };
const _hoisted_16 = {
  key: 2,
  class: "divide-y divide-gray-50"
};
const _hoisted_17 = { class: "flex-1 min-w-0" };
const _hoisted_18 = { class: "text-sm font-medium text-gray-900 truncate" };
const _hoisted_19 = { class: "text-xs text-gray-500" };
const _hoisted_20 = { class: "text-right" };
const _hoisted_21 = { class: "bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden" };
const _hoisted_22 = { class: "px-6 py-4 border-b border-gray-50 flex items-center justify-between" };
const _hoisted_23 = { class: "bg-amber-100 text-amber-700 text-xs font-bold px-2 py-0.5 rounded-full" };
const _hoisted_24 = { class: "p-0" };
const _hoisted_25 = {
  key: 0,
  class: "p-8 flex justify-center"
};
const _hoisted_26 = {
  key: 1,
  class: "p-12 text-center"
};
const _hoisted_27 = { class: "w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4" };
const _hoisted_28 = {
  key: 2,
  class: "divide-y divide-gray-50"
};
const _hoisted_29 = { class: "flex items-center space-x-3 min-w-0" };
const _hoisted_30 = { class: "w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center flex-shrink-0 border border-indigo-100" };
const _hoisted_31 = { class: "min-w-0" };
const _hoisted_32 = { class: "text-sm font-bold text-gray-900 truncate" };
const _hoisted_33 = { class: "text-xs text-gray-500 truncate" };
const _hoisted_34 = { class: "flex items-center space-x-2" };
const _hoisted_35 = ["onClick"];
const _hoisted_36 = ["onClick"];
const _hoisted_37 = {
  key: 3,
  class: "p-4 bg-gray-50 border-t border-gray-50"
};
const _hoisted_38 = { class: "grid grid-cols-2 md:grid-cols-4 gap-4" };
const _hoisted_39 = ["onClick"];
const _hoisted_40 = { class: "text-sm font-bold text-gray-700" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Dashboard",
  setup(__props) {
    const router = useRouter();
    const loading = ref(true);
    const stats = ref(null);
    const pendingUsers = ref([]);
    const activities = ref([]);
    const selectedRange = ref("today");
    const dateRanges = [
      { label: "Today", value: "today" },
      { label: "This Week", value: "this_week" },
      { label: "This Month", value: "this_month" },
      { label: "Last Month", value: "last_month" },
      { label: "Last 30 Days", value: "last_30_days" },
      { label: "This Year", value: "this_year" }
    ];
    watch(selectedRange, () => {
      fetchDashboardData();
    });
    const statsCards = computed(() => [
      {
        label: "Total Students",
        value: stats.value?.total_students || 0,
        icon: Users,
        trend: 12,
        bgClass: "bg-blue-50",
        iconClass: "text-blue-600"
      },
      {
        label: "Active Libraries",
        value: stats.value?.active_libraries || 0,
        icon: Library,
        trend: 5,
        bgClass: "bg-purple-50",
        iconClass: "text-purple-600"
      },
      {
        label: "Active Bookings",
        value: stats.value?.active_bookings || 0,
        icon: BookOpen,
        trend: -2,
        bgClass: "bg-amber-50",
        iconClass: "text-amber-600"
      },
      {
        label: "System Complaints",
        value: stats.value?.pending_tickets || 0,
        icon: LifeBuoy,
        bgClass: "bg-red-50",
        iconClass: "text-red-600"
      }
    ]);
    const quickActions = [
      { label: "Add Library", icon: Plus, bg: "bg-indigo-50", iconColor: "text-indigo-600", route: "superadmin-libraries" },
      { label: "System Settings", icon: Settings, bg: "bg-gray-50", iconColor: "text-gray-600", route: "superadmin-settings" }
    ];
    const getActivityIcon = (iconName) => {
      switch (iconName) {
        case "BookOpen":
          return BookOpen;
        case "UserPlus":
          return UserPlus;
        case "Library":
          return Library;
        case "Settings":
          return Settings;
        case "Shield":
          return Shield;
        default:
          return Activity;
      }
    };
    const fetchDashboardData = async () => {
      try {
        loading.value = true;
        const data = await superadminAPI.getDashboard({ range: selectedRange.value });
        stats.value = data.stats;
        pendingUsers.value = data.pendingUsers || [];
        activities.value = data.recentActivity || [];
      } catch (error) {
        console.error("Failed to fetch dashboard data:", error);
      } finally {
        loading.value = false;
      }
    };
    const approveUser = async (userId) => {
      try {
        await superadminAPI.approveUser(userId);
        pendingUsers.value = pendingUsers.value.filter((u) => u.id !== userId);
        const data = await superadminAPI.getDashboard();
        stats.value = data.stats;
        activities.value = data.recentActivity || [];
      } catch (error) {
        console.error("Failed to approve user:", error);
      }
    };
    const rejectUser = async (userId) => {
      if (confirm("Are you sure you want to reject this user?")) {
        try {
          await superadminAPI.rejectUser(userId);
          pendingUsers.value = pendingUsers.value.filter((u) => u.id !== userId);
        } catch (error) {
          console.error("Failed to reject user:", error);
        }
      }
    };
    const handleAction = (action) => {
      if (action.route) {
        router.push({ name: action.route });
      }
    };
    onMounted(() => {
      fetchDashboardData();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          _cache[2] || (_cache[2] = createBaseVNode("div", null, [
            createBaseVNode("h1", { class: "text-2xl font-bold text-gray-900" }, "Super Admin Dashboard"),
            createBaseVNode("p", { class: "text-gray-500 text-sm" }, "Welcome back! Here's what's happening across all libraries.")
          ], -1)),
          createBaseVNode("div", _hoisted_3, [
            createBaseVNode("div", _hoisted_4, [
              withDirectives(createBaseVNode("select", {
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => selectedRange.value = $event),
                class: "appearance-none pl-10 pr-10 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all cursor-pointer"
              }, [
                (openBlock(), createElementBlock(Fragment, null, renderList(dateRanges, (range) => {
                  return createBaseVNode("option", {
                    key: range.value,
                    value: range.value
                  }, toDisplayString(range.label), 9, _hoisted_5);
                }), 64))
              ], 512), [
                [vModelSelect, selectedRange.value]
              ]),
              createVNode(unref(Calendar), { class: "w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" }),
              createVNode(unref(ChevronDown), { class: "w-4 h-4 absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" })
            ])
          ])
        ]),
        createBaseVNode("div", _hoisted_6, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(statsCards.value, (stat) => {
            return openBlock(), createElementBlock("div", {
              key: stat.label,
              class: "bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            }, [
              createBaseVNode("div", _hoisted_7, [
                createBaseVNode("div", {
                  class: normalizeClass(["p-2.5 rounded-xl", stat.bgClass])
                }, [
                  (openBlock(), createBlock(resolveDynamicComponent(stat.icon), {
                    class: normalizeClass(["w-6 h-6", stat.iconClass])
                  }, null, 8, ["class"]))
                ], 2),
                stat.trend ? (openBlock(), createElementBlock("div", {
                  key: 0,
                  class: normalizeClass(["flex items-center text-xs font-medium px-2 py-1 rounded-full", stat.trend > 0 ? "bg-green-50 text-green-600" : "bg-red-50 text-red-600"])
                }, [
                  stat.trend > 0 ? (openBlock(), createBlock(unref(TrendingUp), {
                    key: 0,
                    class: "w-3 h-3 mr-1"
                  })) : (openBlock(), createBlock(unref(TrendingDown), {
                    key: 1,
                    class: "w-3 h-3 mr-1"
                  })),
                  createTextVNode(" " + toDisplayString(Math.abs(stat.trend)) + "% ", 1)
                ], 2)) : createCommentVNode("", true)
              ]),
              createBaseVNode("div", null, [
                createBaseVNode("p", _hoisted_8, toDisplayString(stat.label), 1),
                createBaseVNode("h3", _hoisted_9, toDisplayString(stat.value), 1)
              ])
            ]);
          }), 128))
        ]),
        createBaseVNode("div", _hoisted_10, [
          createBaseVNode("div", _hoisted_11, [
            _cache[5] || (_cache[5] = createBaseVNode("div", { class: "px-6 py-4 border-b border-gray-50 flex items-center justify-between" }, [
              createBaseVNode("h3", { class: "font-bold text-gray-900" }, "System Activity"),
              createBaseVNode("button", { class: "text-sm text-indigo-600 font-medium hover:text-indigo-700" }, "View All")
            ], -1)),
            createBaseVNode("div", _hoisted_12, [
              loading.value ? (openBlock(), createElementBlock("div", _hoisted_13, [..._cache[3] || (_cache[3] = [
                createBaseVNode("div", { class: "animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600" }, null, -1)
              ])])) : activities.value.length === 0 ? (openBlock(), createElementBlock("div", _hoisted_14, [
                createBaseVNode("div", _hoisted_15, [
                  createVNode(unref(Activity), { class: "w-8 h-8 text-gray-300" })
                ]),
                _cache[4] || (_cache[4] = createBaseVNode("p", { class: "text-gray-500" }, "No recent activity found", -1))
              ])) : (openBlock(), createElementBlock("div", _hoisted_16, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(activities.value, (activity) => {
                  return openBlock(), createElementBlock("div", {
                    key: activity.id,
                    class: "px-6 py-4 flex items-center space-x-4 hover:bg-gray-50 transition-colors"
                  }, [
                    createBaseVNode("div", {
                      class: normalizeClass(["w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0", activity.bg])
                    }, [
                      (openBlock(), createBlock(resolveDynamicComponent(getActivityIcon(activity.icon)), {
                        class: normalizeClass(["w-5 h-5", activity.iconColor])
                      }, null, 8, ["class"]))
                    ], 2),
                    createBaseVNode("div", _hoisted_17, [
                      createBaseVNode("p", _hoisted_18, toDisplayString(activity.title), 1),
                      createBaseVNode("p", _hoisted_19, toDisplayString(activity.time), 1)
                    ]),
                    createBaseVNode("div", _hoisted_20, [
                      createBaseVNode("span", {
                        class: normalizeClass(["px-2 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider", activity.statusClass])
                      }, toDisplayString(activity.status), 3)
                    ])
                  ]);
                }), 128))
              ]))
            ])
          ]),
          createBaseVNode("div", _hoisted_21, [
            createBaseVNode("div", _hoisted_22, [
              _cache[6] || (_cache[6] = createBaseVNode("h3", { class: "font-bold text-gray-900" }, "Pending Approvals", -1)),
              createBaseVNode("span", _hoisted_23, toDisplayString(pendingUsers.value.length), 1)
            ]),
            createBaseVNode("div", _hoisted_24, [
              loading.value ? (openBlock(), createElementBlock("div", _hoisted_25, [..._cache[7] || (_cache[7] = [
                createBaseVNode("div", { class: "animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600" }, null, -1)
              ])])) : pendingUsers.value.length === 0 ? (openBlock(), createElementBlock("div", _hoisted_26, [
                createBaseVNode("div", _hoisted_27, [
                  createVNode(unref(UserCheck), { class: "w-8 h-8 text-gray-300" })
                ]),
                _cache[8] || (_cache[8] = createBaseVNode("p", { class: "text-gray-500" }, "All caught up!", -1))
              ])) : (openBlock(), createElementBlock("div", _hoisted_28, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(pendingUsers.value, (user) => {
                  return openBlock(), createElementBlock("div", {
                    key: user.id,
                    class: "px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
                  }, [
                    createBaseVNode("div", _hoisted_29, [
                      createBaseVNode("div", _hoisted_30, [
                        createVNode(unref(User), { class: "w-5 h-5 text-indigo-600" })
                      ]),
                      createBaseVNode("div", _hoisted_31, [
                        createBaseVNode("p", _hoisted_32, toDisplayString(user.name), 1),
                        createBaseVNode("p", _hoisted_33, toDisplayString(user.email), 1)
                      ])
                    ]),
                    createBaseVNode("div", _hoisted_34, [
                      createBaseVNode("button", {
                        onClick: ($event) => approveUser(user.id),
                        class: "p-1.5 text-green-600 hover:bg-green-50 rounded-lg transition-colors",
                        title: "Approve"
                      }, [
                        createVNode(unref(CircleCheckBig), { class: "w-5 h-5" })
                      ], 8, _hoisted_35),
                      createBaseVNode("button", {
                        onClick: ($event) => rejectUser(user.id),
                        class: "p-1.5 text-red-600 hover:bg-red-50 rounded-lg transition-colors",
                        title: "Reject"
                      }, [
                        createVNode(unref(CircleX), { class: "w-5 h-5" })
                      ], 8, _hoisted_36)
                    ])
                  ]);
                }), 128))
              ])),
              pendingUsers.value.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_37, [
                createBaseVNode("button", {
                  onClick: _cache[1] || (_cache[1] = ($event) => unref(router).push({ name: "superadmin-users" })),
                  class: "w-full py-2 text-sm font-bold text-indigo-600 hover:text-indigo-700 transition-colors"
                }, " View All Pending ")
              ])) : createCommentVNode("", true)
            ])
          ])
        ]),
        createBaseVNode("div", _hoisted_38, [
          (openBlock(), createElementBlock(Fragment, null, renderList(quickActions, (action) => {
            return createBaseVNode("button", {
              key: action.label,
              onClick: ($event) => handleAction(action),
              class: "flex flex-col items-center justify-center p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:border-indigo-200 hover:shadow-md transition-all group"
            }, [
              createBaseVNode("div", {
                class: normalizeClass(["p-3 rounded-xl mb-3 group-hover:scale-110 transition-transform", action.bg])
              }, [
                (openBlock(), createBlock(resolveDynamicComponent(action.icon), {
                  class: normalizeClass(["w-6 h-6", action.iconColor])
                }, null, 8, ["class"]))
              ], 2),
              createBaseVNode("span", _hoisted_40, toDisplayString(action.label), 1)
            ], 8, _hoisted_39);
          }), 64))
        ])
      ]);
    };
  }
});
export {
  _sfc_main as default
};
