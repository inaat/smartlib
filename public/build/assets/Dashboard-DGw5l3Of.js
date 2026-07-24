import { d as defineComponent, x as useAuth, r as ref, c as computed, o as onMounted, a as createElementBlock, b as createBaseVNode, i as createTextVNode, t as toDisplayString, u as unref, F as Fragment, k as renderList, C as useRouter, f as createVNode, j as createCommentVNode, n as normalizeClass, h as createBlock, m as resolveDynamicComponent, q as normalizeStyle, l as openBlock } from "./main-CP29_5Dg.js";
import { s as superadminAPI } from "./superadminApi-CcmpLCnf.js";
import { U as Users } from "./users-BL5Ms-cb.js";
import { L as Library } from "./library-BE73C1XE.js";
import { B as BookOpen } from "./book-open-C5CD1i_v.js";
import { L as LifeBuoy } from "./life-buoy-DCBh-QRT.js";
import { c as createLucideIcon } from "./createLucideIcon-DTPudzWg.js";
import { A as Activity } from "./activity-CW6bhswl.js";
import { U as UserCheck } from "./user-check-DOVLdGen.js";
import { T as TrendingUp } from "./trending-up-_Yvz0yIh.js";
import { T as TrendingDown } from "./trending-down-BXel7bcc.js";
import { C as Clock } from "./clock-Bt9n9pGR.js";
import { C as CircleCheckBig } from "./circle-check-big-G1arIMtC.js";
import { C as CircleX } from "./circle-x-2kWsZrZM.js";
import { P as Plus } from "./plus-mxaUQNm6.js";
import { S as Settings } from "./settings-Dywk5iwO.js";
import { S as Shield } from "./shield-2Smxk0UW.js";
import { U as UserPlus } from "./user-plus-BsiK63SH.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
/* empty css               */
const ArrowUpRight = createLucideIcon("arrow-up-right", [
  ["path", { d: "M7 7h10v10", key: "1tivn9" }],
  ["path", { d: "M7 17 17 7", key: "1vkiza" }]
]);
const _hoisted_1 = { class: "space-y-6 text-slate-700" };
const _hoisted_2 = {
  class: "rounded-2xl text-white px-6 py-5 shadow-sm relative overflow-hidden bg-gradient-to-r from-purple-600 via-purple-700 to-indigo-850",
  style: { "background": "linear-gradient(135deg, #7c3aed 0%, #6d28d9 50%, #4338ca 100%)" }
};
const _hoisted_3 = { class: "relative z-10 flex items-center justify-between" };
const _hoisted_4 = { class: "text-left" };
const _hoisted_5 = { class: "text-2xl font-bold mt-2 mb-1 tracking-tight" };
const _hoisted_6 = {
  class: "text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-300 font-extrabold",
  style: { "background-image": "linear-gradient(to right, #fcd34d, #fef08a, #fcd34d)", "-webkit-background-clip": "text", "background-clip": "text" }
};
const _hoisted_7 = { class: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" };
const _hoisted_8 = { class: "flex items-center justify-between mb-4" };
const _hoisted_9 = { class: "text-xs font-bold text-slate-400 uppercase tracking-widest" };
const _hoisted_10 = { class: "text-2xl font-black text-slate-800 mt-1.5 tracking-tight" };
const _hoisted_11 = { class: "grid grid-cols-1 lg:grid-cols-3 gap-6" };
const _hoisted_12 = { class: "lg:col-span-2 bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden flex flex-col" };
const _hoisted_13 = { class: "px-6 py-5 border-b border-slate-50 bg-slate-50/20 flex items-center justify-between text-left" };
const _hoisted_14 = { class: "p-6 flex-1 text-left" };
const _hoisted_15 = {
  key: 0,
  class: "flex items-center justify-center py-12"
};
const _hoisted_16 = {
  key: 1,
  class: "text-center py-12"
};
const _hoisted_17 = { class: "w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4 border border-slate-100" };
const _hoisted_18 = {
  key: 2,
  class: "relative border-l-2 border-slate-100 ml-4 space-y-6"
};
const _hoisted_19 = { class: "flex flex-col sm:flex-row sm:items-center justify-between gap-2 bg-slate-50/50 hover:bg-slate-100/50 p-4 rounded-xl transition-all border border-transparent hover:border-slate-100" };
const _hoisted_20 = { class: "text-xs font-bold text-slate-700" };
const _hoisted_21 = { class: "text-[10px] text-slate-400 mt-1 flex items-center gap-1.5 font-semibold" };
const _hoisted_22 = { class: "flex items-center" };
const _hoisted_23 = { class: "space-y-6" };
const _hoisted_24 = { class: "bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden" };
const _hoisted_25 = { class: "p-6 text-left" };
const _hoisted_26 = {
  key: 0,
  class: "flex justify-center py-6"
};
const _hoisted_27 = {
  key: 1,
  class: "text-center py-4 text-slate-400 text-xs font-bold uppercase"
};
const _hoisted_28 = {
  key: 2,
  class: "space-y-4"
};
const _hoisted_29 = { class: "flex items-center justify-between text-xs" };
const _hoisted_30 = { class: "font-bold text-slate-700" };
const _hoisted_31 = { class: "text-slate-400 font-bold" };
const _hoisted_32 = { class: "w-full bg-slate-50 rounded-full h-2 border border-slate-100" };
const _hoisted_33 = { class: "bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden" };
const _hoisted_34 = { class: "px-6 py-5 border-b border-slate-50 bg-slate-50/20 flex items-center justify-between text-left" };
const _hoisted_35 = { class: "bg-amber-50 border border-amber-100 text-amber-800 text-[10px] font-black px-2.5 py-0.5 rounded-full uppercase tracking-wider" };
const _hoisted_36 = { class: "p-0" };
const _hoisted_37 = {
  key: 0,
  class: "p-8 flex justify-center"
};
const _hoisted_38 = {
  key: 1,
  class: "p-12 text-center"
};
const _hoisted_39 = { class: "w-16 h-16 bg-slate-50 border border-slate-100 rounded-full flex items-center justify-center mx-auto mb-4 text-slate-400" };
const _hoisted_40 = {
  key: 2,
  class: "divide-y divide-slate-50 max-h-[320px] overflow-y-auto"
};
const _hoisted_41 = { class: "flex items-center space-x-3 min-w-0" };
const _hoisted_42 = { class: "w-9 h-9 rounded-lg bg-purple-50 text-purple-600 font-bold flex items-center justify-center flex-shrink-0 border border-purple-200 text-xs" };
const _hoisted_43 = { class: "min-w-0 text-left" };
const _hoisted_44 = { class: "text-xs font-bold text-slate-700 truncate" };
const _hoisted_45 = { class: "text-[10px] text-slate-400 font-semibold truncate mt-0.5" };
const _hoisted_46 = { class: "flex items-center space-x-1.5 flex-shrink-0" };
const _hoisted_47 = ["onClick"];
const _hoisted_48 = ["onClick"];
const _hoisted_49 = {
  key: 3,
  class: "p-4 bg-slate-50/50 border-t border-slate-100"
};
const _hoisted_50 = { class: "bg-white rounded-3xl border border-slate-100 shadow-sm p-6 text-left" };
const _hoisted_51 = { class: "grid grid-cols-2 md:grid-cols-4 gap-4" };
const _hoisted_52 = ["onClick"];
const _hoisted_53 = { class: "text-xs font-bold text-slate-750" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Dashboard",
  setup(__props) {
    const router = useRouter();
    const { user } = useAuth();
    const loading = ref(true);
    const stats = ref(null);
    const pendingUsers = ref([]);
    const activities = ref([]);
    const librariesList = ref([]);
    const statsCards = computed(() => [
      {
        label: "Total Students",
        value: stats.value?.total_students || 0,
        icon: Users,
        trend: 12,
        iconClass: "text-blue-600"
      },
      {
        label: "Active Libraries",
        value: stats.value?.active_libraries || 0,
        icon: Library,
        trend: 5,
        iconClass: "text-purple-600"
      },
      {
        label: "Active Bookings",
        value: stats.value?.active_bookings || 0,
        icon: BookOpen,
        trend: -2,
        iconClass: "text-amber-600"
      },
      {
        label: "System Complaints",
        value: stats.value?.pending_tickets || 0,
        icon: LifeBuoy,
        iconClass: "text-red-655"
      }
    ]);
    const quickActions = [
      { label: "Add Library", icon: Plus, bg: "bg-purple-50", iconColor: "text-purple-600", route: "superadmin-libraries" },
      { label: "System Settings", icon: Settings, bg: "bg-slate-50", iconColor: "text-slate-600", route: "superadmin-settings" }
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
    const getUtilizationPercentage = (lib) => {
      const total = lib.totalSeats || 0;
      if (total <= 0) return 0;
      return Math.round((total - lib.availableSeats) / total * 100);
    };
    const getProgressBarClass = (lib) => {
      const percentage = getUtilizationPercentage(lib);
      if (percentage > 85) return "bg-red-500";
      if (percentage > 60) return "bg-amber-500";
      return "bg-purple-600";
    };
    const fetchDashboardData = async () => {
      try {
        loading.value = true;
        const [data, libs] = await Promise.all([
          superadminAPI.getDashboard({ range: "today" }),
          superadminAPI.getLibraries()
        ]);
        stats.value = data.stats;
        pendingUsers.value = data.pendingUsers || [];
        activities.value = data.recentActivity || [];
        librariesList.value = libs || [];
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
          _cache[6] || (_cache[6] = createBaseVNode("div", { class: "absolute top-0 right-0 w-80 h-80 bg-white opacity-[0.03] rounded-full -mr-32 -mt-32" }, null, -1)),
          _cache[7] || (_cache[7] = createBaseVNode("div", { class: "absolute bottom-0 left-0 w-64 h-64 bg-white opacity-[0.03] rounded-full -ml-24 -mb-24" }, null, -1)),
          createBaseVNode("div", _hoisted_3, [
            createBaseVNode("div", _hoisted_4, [
              _cache[4] || (_cache[4] = createBaseVNode("span", { class: "text-[10px] font-semibold tracking-wider text-purple-200 uppercase bg-white/10 px-2.5 py-0.5 rounded-full" }, "Super Admin Workspace", -1)),
              createBaseVNode("h1", _hoisted_5, [
                _cache[2] || (_cache[2] = createTextVNode(" Welcome back, ", -1)),
                createBaseVNode("span", _hoisted_6, toDisplayString(unref(user)?.name), 1),
                _cache[3] || (_cache[3] = createTextVNode("! 👋 ", -1))
              ]),
              _cache[5] || (_cache[5] = createBaseVNode("p", { class: "text-purple-100/90 text-xs font-normal" }, "Global seat utilization, student registration reviews, and settings management today.", -1))
            ])
          ])
        ]),
        createBaseVNode("div", _hoisted_7, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(statsCards.value, (stat) => {
            return openBlock(), createElementBlock("div", {
              key: stat.label,
              class: "bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-purple-200 transition-all duration-300 group text-left"
            }, [
              createBaseVNode("div", _hoisted_8, [
                createBaseVNode("div", {
                  class: normalizeClass(["p-3 rounded-xl transition-transform group-hover:scale-105 duration-300 bg-slate-50", stat.iconClass])
                }, [
                  (openBlock(), createBlock(resolveDynamicComponent(stat.icon), { class: "w-5 h-5" }))
                ], 2),
                stat.trend ? (openBlock(), createElementBlock("div", {
                  key: 0,
                  class: normalizeClass(["flex items-center text-[9px] font-extrabold px-2 py-0.5 rounded-full border", stat.trend > 0 ? "bg-green-50 border-green-100 text-green-700" : "bg-red-50 border-red-100 text-red-700"])
                }, [
                  stat.trend > 0 ? (openBlock(), createBlock(unref(TrendingUp), {
                    key: 0,
                    class: "w-2.5 h-2.5 mr-1"
                  })) : (openBlock(), createBlock(unref(TrendingDown), {
                    key: 1,
                    class: "w-2.5 h-2.5 mr-1"
                  })),
                  createTextVNode(" " + toDisplayString(Math.abs(stat.trend)) + "% ", 1)
                ], 2)) : createCommentVNode("", true)
              ]),
              createBaseVNode("div", null, [
                createBaseVNode("p", _hoisted_9, toDisplayString(stat.label), 1),
                createBaseVNode("h3", _hoisted_10, toDisplayString(stat.value), 1)
              ])
            ]);
          }), 128))
        ]),
        createBaseVNode("div", _hoisted_11, [
          createBaseVNode("div", _hoisted_12, [
            createBaseVNode("div", _hoisted_13, [
              _cache[9] || (_cache[9] = createBaseVNode("div", null, [
                createBaseVNode("h3", { class: "text-sm font-bold text-slate-700 uppercase tracking-wider" }, "System Activity Feed")
              ], -1)),
              createBaseVNode("button", {
                onClick: _cache[0] || (_cache[0] = ($event) => unref(router).push({ name: "superadmin-analytics" })),
                class: "text-xs font-bold text-purple-600 hover:text-purple-700 flex items-center gap-1 cursor-pointer"
              }, [
                _cache[8] || (_cache[8] = createTextVNode(" View Analytics ", -1)),
                createVNode(unref(ArrowUpRight), { class: "w-3.5 h-3.5" })
              ])
            ]),
            createBaseVNode("div", _hoisted_14, [
              loading.value ? (openBlock(), createElementBlock("div", _hoisted_15, [..._cache[10] || (_cache[10] = [
                createBaseVNode("div", { class: "animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600" }, null, -1)
              ])])) : activities.value.length === 0 ? (openBlock(), createElementBlock("div", _hoisted_16, [
                createBaseVNode("div", _hoisted_17, [
                  createVNode(unref(Activity), { class: "w-8 h-8 text-slate-300 animate-pulse" })
                ]),
                _cache[11] || (_cache[11] = createBaseVNode("p", { class: "text-slate-400 text-xs font-bold uppercase tracking-wider" }, "No recent activity logged", -1))
              ])) : (openBlock(), createElementBlock("div", _hoisted_18, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(activities.value, (activity) => {
                  return openBlock(), createElementBlock("div", {
                    key: activity.id,
                    class: "relative pl-6 group"
                  }, [
                    createBaseVNode("div", {
                      class: normalizeClass(["absolute -left-3 top-0.5 w-6 h-6 rounded-lg flex items-center justify-center border-4 border-white shadow-sm transition-transform group-hover:scale-105 duration-200", activity.bg])
                    }, [
                      (openBlock(), createBlock(resolveDynamicComponent(getActivityIcon(activity.icon)), {
                        class: normalizeClass(["w-2.5 h-2.5", activity.iconColor])
                      }, null, 8, ["class"]))
                    ], 2),
                    createBaseVNode("div", _hoisted_19, [
                      createBaseVNode("div", null, [
                        createBaseVNode("p", _hoisted_20, toDisplayString(activity.title), 1),
                        createBaseVNode("p", _hoisted_21, [
                          createVNode(unref(Clock), { class: "w-3.5 h-3.5" }),
                          createTextVNode(" " + toDisplayString(activity.time), 1)
                        ])
                      ]),
                      createBaseVNode("div", _hoisted_22, [
                        createBaseVNode("span", {
                          class: normalizeClass(["px-2.5 py-0.5 rounded-full text-[9px] font-extrabold uppercase tracking-widest border bg-white", activity.statusClass])
                        }, toDisplayString(activity.status), 3)
                      ])
                    ])
                  ]);
                }), 128))
              ]))
            ])
          ]),
          createBaseVNode("div", _hoisted_23, [
            createBaseVNode("div", _hoisted_24, [
              _cache[13] || (_cache[13] = createBaseVNode("div", { class: "px-6 py-5 border-b border-slate-50 bg-slate-50/20 text-left" }, [
                createBaseVNode("h3", { class: "text-sm font-bold text-slate-700 uppercase tracking-wider" }, "Library Utilization")
              ], -1)),
              createBaseVNode("div", _hoisted_25, [
                loading.value ? (openBlock(), createElementBlock("div", _hoisted_26, [..._cache[12] || (_cache[12] = [
                  createBaseVNode("div", { class: "animate-spin rounded-full h-6 w-6 border-b-2 border-purple-600" }, null, -1)
                ])])) : librariesList.value.length === 0 ? (openBlock(), createElementBlock("div", _hoisted_27, " No libraries configured ")) : (openBlock(), createElementBlock("div", _hoisted_28, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(librariesList.value, (lib) => {
                    return openBlock(), createElementBlock("div", {
                      key: lib.id,
                      class: "space-y-2"
                    }, [
                      createBaseVNode("div", _hoisted_29, [
                        createBaseVNode("span", _hoisted_30, toDisplayString(lib.name), 1),
                        createBaseVNode("span", _hoisted_31, toDisplayString(lib.totalSeats - lib.availableSeats) + " / " + toDisplayString(lib.totalSeats) + " Seats", 1)
                      ]),
                      createBaseVNode("div", _hoisted_32, [
                        createBaseVNode("div", {
                          class: normalizeClass(["h-2 rounded-full transition-all duration-500", getProgressBarClass(lib)]),
                          style: normalizeStyle({ width: getUtilizationPercentage(lib) + "%" })
                        }, null, 6)
                      ])
                    ]);
                  }), 128))
                ]))
              ])
            ]),
            createBaseVNode("div", _hoisted_33, [
              createBaseVNode("div", _hoisted_34, [
                _cache[14] || (_cache[14] = createBaseVNode("div", null, [
                  createBaseVNode("h3", { class: "text-sm font-bold text-slate-700 uppercase tracking-wider" }, "Pending Approvals")
                ], -1)),
                createBaseVNode("span", _hoisted_35, toDisplayString(pendingUsers.value.length), 1)
              ]),
              createBaseVNode("div", _hoisted_36, [
                loading.value ? (openBlock(), createElementBlock("div", _hoisted_37, [..._cache[15] || (_cache[15] = [
                  createBaseVNode("div", { class: "animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600" }, null, -1)
                ])])) : pendingUsers.value.length === 0 ? (openBlock(), createElementBlock("div", _hoisted_38, [
                  createBaseVNode("div", _hoisted_39, [
                    createVNode(unref(UserCheck), { class: "w-8 h-8 text-slate-300" })
                  ]),
                  _cache[16] || (_cache[16] = createBaseVNode("p", { class: "text-slate-400 text-xs font-bold uppercase tracking-wider" }, "All students approved!", -1))
                ])) : (openBlock(), createElementBlock("div", _hoisted_40, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(pendingUsers.value, (user2) => {
                    return openBlock(), createElementBlock("div", {
                      key: user2.id,
                      class: "px-6 py-4 flex items-center justify-between hover:bg-slate-50/30 transition-colors"
                    }, [
                      createBaseVNode("div", _hoisted_41, [
                        createBaseVNode("div", _hoisted_42, toDisplayString(user2.name.charAt(0).toUpperCase()), 1),
                        createBaseVNode("div", _hoisted_43, [
                          createBaseVNode("p", _hoisted_44, toDisplayString(user2.name), 1),
                          createBaseVNode("p", _hoisted_45, toDisplayString(user2.email), 1)
                        ])
                      ]),
                      createBaseVNode("div", _hoisted_46, [
                        createBaseVNode("button", {
                          onClick: ($event) => approveUser(user2.id),
                          class: "p-1.5 text-green-700 bg-white border border-slate-200 hover:bg-green-50 rounded-lg shadow-sm transition-all cursor-pointer",
                          title: "Approve Student"
                        }, [
                          createVNode(unref(CircleCheckBig), { class: "w-4 h-4" })
                        ], 8, _hoisted_47),
                        createBaseVNode("button", {
                          onClick: ($event) => rejectUser(user2.id),
                          class: "p-1.5 text-red-655 bg-white border border-slate-200 hover:bg-red-50 rounded-lg shadow-sm transition-all cursor-pointer",
                          title: "Reject Student"
                        }, [
                          createVNode(unref(CircleX), { class: "w-4 h-4" })
                        ], 8, _hoisted_48)
                      ])
                    ]);
                  }), 128))
                ])),
                pendingUsers.value.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_49, [
                  createBaseVNode("button", {
                    onClick: _cache[1] || (_cache[1] = ($event) => unref(router).push({ name: "superadmin-users" })),
                    class: "w-full py-2.5 text-xs font-bold text-purple-700 bg-white border border-slate-200 rounded-xl hover:shadow-sm transition-all text-center cursor-pointer"
                  }, " View All Student Requests ")
                ])) : createCommentVNode("", true)
              ])
            ])
          ])
        ]),
        createBaseVNode("div", _hoisted_50, [
          _cache[17] || (_cache[17] = createBaseVNode("h3", { class: "text-sm font-bold text-slate-700 uppercase tracking-wider mb-4" }, "Quick Administrator Actions", -1)),
          createBaseVNode("div", _hoisted_51, [
            (openBlock(), createElementBlock(Fragment, null, renderList(quickActions, (action) => {
              return createBaseVNode("button", {
                key: action.label,
                onClick: ($event) => handleAction(action),
                class: "flex flex-col items-center justify-center p-6 bg-slate-50/40 rounded-2xl border border-slate-100 hover:border-purple-200 hover:bg-white hover:shadow-md transition-all duration-300 group cursor-pointer"
              }, [
                createBaseVNode("div", {
                  class: normalizeClass(["p-3 rounded-xl mb-3 group-hover:scale-105 transition-transform duration-300", action.bg])
                }, [
                  (openBlock(), createBlock(resolveDynamicComponent(action.icon), {
                    class: normalizeClass(["w-5 h-5", action.iconColor])
                  }, null, 8, ["class"]))
                ], 2),
                createBaseVNode("span", _hoisted_53, toDisplayString(action.label), 1)
              ], 8, _hoisted_52);
            }), 64))
          ])
        ])
      ]);
    };
  }
});
const Dashboard = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-126f0697"]]);
export {
  Dashboard as default
};
