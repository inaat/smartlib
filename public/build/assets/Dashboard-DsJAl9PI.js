import { c as createLucideIcon, d as defineComponent, b as createElementBlock, p as createCommentVNode, e as createBaseVNode, g as createVNode, u as unref, F as Fragment, k as renderList, t as toDisplayString, n as normalizeClass, w as withCtx, j as createTextVNode, h as resolveComponent, m as openBlock, i as createBlock, q as resolveDynamicComponent, r as ref, a as computed, x as normalizeStyle, C as Clock, s as withDirectives, v as vModelText, R as RefreshCw, L as Teleport, S as studentAPI, _ as _export_sfc, z as useAuth, N as useApp, o as onMounted, G as useRouter } from "./main-BeUqjoax.js";
import { B as BookingTrendsChart } from "./BookingTrendsChart-D-MZ0rBP.js";
import { U as Users } from "./users-DgA2REmn.js";
import { A as Armchair } from "./armchair-Ci3hmWMF.js";
import { Z as Zap } from "./zap-1J--HJED.js";
import { C as ChevronRight } from "./chevron-right-DeJ1LBg1.js";
import { M as MapPin } from "./map-pin-hjTU3OTG.js";
import { B as BookOpen } from "./book-open-DpY8sw2V.js";
import { C as Calendar } from "./calendar-C4MEAYqh.js";
import { U as User } from "./user-Jwf_R05Y.js";
import { u as useSwal } from "./useSwal-pQW_XkRe.js";
import { F as Flame } from "./flame-9rjklnu_.js";
import { T as TrendingUp } from "./trending-up-BPT833jM.js";
import { X } from "./x-Dj9LNodU.js";
import { B as BookMarked } from "./book-marked-BJVQnqwP.js";
import { C as ChartColumn } from "./chart-column-Du0EUu8B.js";
import { A as Activity } from "./activity-CEq8i_lQ.js";
/* empty css               */
const Settings2 = createLucideIcon("settings-2", [
  ["path", { d: "M14 17H5", key: "gfn3mx" }],
  ["path", { d: "M19 7h-9", key: "6i9tg" }],
  ["circle", { cx: "17", cy: "17", r: "3", key: "18b49y" }],
  ["circle", { cx: "7", cy: "7", r: "3", key: "dfmy0x" }]
]);
const Target = createLucideIcon("target", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["circle", { cx: "12", cy: "12", r: "6", key: "1vlfrh" }],
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }]
]);
const _hoisted_1$3 = {
  key: 0,
  class: "bg-white rounded-3xl p-6 border border-amber-200/80 shadow-xs hover:shadow-md transition-all duration-300 relative overflow-hidden font-outfit text-left"
};
const _hoisted_2$3 = { class: "flex items-center space-x-3 mb-5 border-b border-amber-100/80 pb-4 text-left" };
const _hoisted_3$3 = { class: "w-9 h-9 rounded-xl bg-amber-50 border border-amber-100 text-amber-600 flex items-center justify-center flex-shrink-0 shadow-2xs" };
const _hoisted_4$3 = { class: "space-y-4" };
const _hoisted_5$3 = { class: "flex items-center justify-between" };
const _hoisted_6$3 = { class: "flex items-center" };
const _hoisted_7$3 = { class: "p-2 bg-white rounded-lg shadow-sm mr-3" };
const _hoisted_8$3 = { class: "font-bold text-gray-800 text-sm" };
const _hoisted_9$3 = { class: "text-[10px] text-gray-500 font-bold uppercase tracking-wider" };
const _hoisted_10$2 = { class: "text-right" };
const _hoisted_11$2 = {
  key: 0,
  class: "text-[9px] text-green-600 font-bold"
};
const _hoisted_12$2 = {
  key: 0,
  class: "mt-4"
};
const _hoisted_13$2 = {
  key: 1,
  class: "mt-4 flex items-center justify-between text-[10px] text-gray-500 italic"
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "QueueStatus",
  props: {
    queues: {}
  },
  setup(__props) {
    const formatTime = (dateStr) => {
      if (!dateStr) return "";
      return new Date(dateStr).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    };
    return (_ctx, _cache) => {
      const _component_router_link = resolveComponent("router-link");
      return __props.queues.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_1$3, [
        createBaseVNode("div", _hoisted_2$3, [
          createBaseVNode("div", _hoisted_3$3, [
            createVNode(unref(Users), { class: "w-4.5 h-4.5" })
          ]),
          _cache[0] || (_cache[0] = createBaseVNode("div", null, [
            createBaseVNode("h3", { class: "text-base font-bold text-slate-800 tracking-tight leading-snug" }, "Seat Waitlist"),
            createBaseVNode("p", { class: "text-[11px] text-slate-400 font-medium" }, "Your active seat queue position status.")
          ], -1))
        ]),
        createBaseVNode("div", _hoisted_4$3, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(__props.queues, (queue) => {
            return openBlock(), createElementBlock("div", {
              key: queue.id,
              class: "p-4 bg-orange-50 rounded-xl border border-orange-100 group transition-all hover:shadow-md"
            }, [
              createBaseVNode("div", _hoisted_5$3, [
                createBaseVNode("div", _hoisted_6$3, [
                  createBaseVNode("div", _hoisted_7$3, [
                    createVNode(unref(Armchair), { class: "w-4 h-4 text-orange-600" })
                  ]),
                  createBaseVNode("div", null, [
                    createBaseVNode("h3", _hoisted_8$3, " Seat " + toDisplayString(queue.seat?.seat_number), 1),
                    createBaseVNode("p", _hoisted_9$3, toDisplayString(queue.seat?.library?.name), 1)
                  ])
                ]),
                createBaseVNode("div", _hoisted_10$2, [
                  createBaseVNode("div", {
                    class: normalizeClass([
                      "px-2 py-1 rounded text-[10px] font-black uppercase tracking-widest mb-1 inline-block",
                      queue.status === "notified" ? "bg-green-100 text-green-700 animate-pulse" : "bg-orange-100 text-orange-700"
                    ])
                  }, toDisplayString(queue.status === "notified" ? "Seat Ready!" : `Pos #${queue.queue_position}`), 3),
                  queue.status === "notified" ? (openBlock(), createElementBlock("p", _hoisted_11$2, "Expires in 5 mins")) : createCommentVNode("", true)
                ])
              ]),
              queue.status === "notified" ? (openBlock(), createElementBlock("div", _hoisted_12$2, [
                createVNode(_component_router_link, {
                  to: { name: "student-qr-checkin", query: { booking_id: "auto" } },
                  class: "w-full py-2 bg-green-600 text-white rounded-lg text-xs font-bold hover:bg-green-700 transition-colors shadow-sm flex items-center justify-center"
                }, {
                  default: withCtx(() => [..._cache[1] || (_cache[1] = [
                    createTextVNode(" Check In Now ", -1)
                  ])]),
                  _: 1
                })
              ])) : (openBlock(), createElementBlock("div", _hoisted_13$2, [
                createBaseVNode("span", null, "Joined " + toDisplayString(formatTime(queue.joined_at)), 1),
                _cache[2] || (_cache[2] = createBaseVNode("span", { class: "text-orange-600 font-bold" }, "Estimated wait: ~15m", -1))
              ]))
            ]);
          }), 128))
        ])
      ])) : createCommentVNode("", true);
    };
  }
});
const _hoisted_1$2 = { class: "bg-white rounded-3xl p-6 border border-slate-100/90 shadow-xs hover:shadow-md transition-all duration-300 relative overflow-hidden font-outfit text-left" };
const _hoisted_2$2 = { class: "flex items-center space-x-3 mb-5 border-b border-slate-100/80 pb-4 text-left" };
const _hoisted_3$2 = { class: "w-9 h-9 rounded-xl bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0 shadow-2xs" };
const _hoisted_4$2 = { class: "grid grid-cols-2 gap-3" };
const _hoisted_5$2 = { class: "p-4 rounded-2xl border border-slate-100 bg-slate-50/70 hover:bg-white hover:border-blue-200/80 hover:shadow-md transition-all duration-200 flex flex-col justify-between h-full min-h-[105px] text-left" };
const _hoisted_6$2 = { class: "flex items-center justify-between mb-3" };
const _hoisted_7$2 = { class: "w-9 h-9 rounded-xl bg-white border border-slate-200/70 text-slate-700 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all duration-200 flex items-center justify-center shadow-2xs" };
const _hoisted_8$2 = { class: "font-bold text-slate-800 text-xs tracking-tight group-hover:text-blue-600 transition-colors" };
const _hoisted_9$2 = { class: "text-[10px] text-slate-400 font-medium mt-0.5 leading-snug" };
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "QuickActions",
  setup(__props) {
    const actions = [
      {
        title: "Find Library",
        description: "Locate partner study spaces",
        icon: MapPin,
        link: "/student/libraries"
      },
      {
        title: "Browse Books",
        description: "Search & request physical books",
        icon: BookOpen,
        link: "/student/books"
      },
      {
        title: "View Events",
        description: "Check academic seminars",
        icon: Calendar,
        link: "/student/events"
      },
      {
        title: "My Profile",
        description: "Manage details & settings",
        icon: User,
        link: "/student/profile"
      }
    ];
    return (_ctx, _cache) => {
      const _component_router_link = resolveComponent("router-link");
      return openBlock(), createElementBlock("div", _hoisted_1$2, [
        createBaseVNode("div", _hoisted_2$2, [
          createBaseVNode("div", _hoisted_3$2, [
            createVNode(unref(Zap), { class: "w-4.5 h-4.5" })
          ]),
          _cache[0] || (_cache[0] = createBaseVNode("div", null, [
            createBaseVNode("h3", { class: "text-base font-bold text-slate-800 tracking-tight leading-snug" }, "Quick Actions"),
            createBaseVNode("p", { class: "text-[11px] text-slate-400 font-medium" }, "Shortcuts to discover libraries, books & events.")
          ], -1))
        ]),
        createBaseVNode("div", _hoisted_4$2, [
          (openBlock(), createElementBlock(Fragment, null, renderList(actions, (action, index) => {
            return createVNode(_component_router_link, {
              key: index,
              to: action.link,
              class: "group block relative"
            }, {
              default: withCtx(() => [
                createBaseVNode("div", _hoisted_5$2, [
                  createBaseVNode("div", null, [
                    createBaseVNode("div", _hoisted_6$2, [
                      createBaseVNode("div", _hoisted_7$2, [
                        (openBlock(), createBlock(resolveDynamicComponent(action.icon), { class: "w-4.5 h-4.5" }))
                      ]),
                      createVNode(unref(ChevronRight), { class: "w-3.5 h-3.5 text-slate-300 group-hover:text-blue-600 group-hover:translate-x-0.5 transition-all duration-200" })
                    ]),
                    createBaseVNode("h4", _hoisted_8$2, toDisplayString(action.title), 1),
                    createBaseVNode("p", _hoisted_9$2, toDisplayString(action.description), 1)
                  ])
                ])
              ]),
              _: 2
            }, 1032, ["to"]);
          }), 64))
        ])
      ]);
    };
  }
});
const _hoisted_1$1 = { class: "bg-white rounded-3xl p-6 border border-slate-100/90 shadow-xs hover:shadow-md transition-all duration-300 overflow-hidden relative font-outfit text-left" };
const _hoisted_2$1 = { class: "relative z-10 flex flex-col space-y-5" };
const _hoisted_3$1 = { class: "flex items-center justify-between gap-4 border-b border-slate-100/80 pb-4" };
const _hoisted_4$1 = { class: "flex items-center space-x-3 text-left" };
const _hoisted_5$1 = { class: "w-9 h-9 rounded-xl bg-indigo-50 border border-indigo-100 text-indigo-600 flex items-center justify-center flex-shrink-0 shadow-2xs" };
const _hoisted_6$1 = { class: "flex items-center space-x-2" };
const _hoisted_7$1 = { class: "flex items-center space-x-1 bg-slate-100 p-1 rounded-xl" };
const _hoisted_8$1 = { class: "bg-slate-50/70 border border-slate-100 rounded-2xl p-5 relative overflow-hidden" };
const _hoisted_9$1 = { class: "flex flex-col sm:flex-row items-center gap-5" };
const _hoisted_10$1 = { class: "relative flex items-center justify-center flex-shrink-0" };
const _hoisted_11$1 = { class: "w-20 h-20 transform -rotate-90" };
const _hoisted_12$1 = ["stroke-dashoffset"];
const _hoisted_13$1 = { class: "absolute flex flex-col items-center justify-center text-center" };
const _hoisted_14$1 = { class: "text-base font-black tracking-tight text-slate-800 leading-none" };
const _hoisted_15$1 = { class: "flex-1 min-w-0 w-full space-y-2.5" };
const _hoisted_16$1 = { class: "flex items-center justify-between" };
const _hoisted_17$1 = { class: "text-xs font-bold text-slate-700 uppercase tracking-wider" };
const _hoisted_18$1 = { class: "text-[11px] font-bold text-indigo-500 bg-indigo-50 border border-indigo-100 px-2.5 py-0.5 rounded-full" };
const _hoisted_19$1 = { class: "flex items-baseline space-x-1.5" };
const _hoisted_20$1 = { class: "text-2xl font-extrabold text-slate-800 tracking-tight leading-none" };
const _hoisted_21$1 = { class: "text-xs text-slate-400 font-medium" };
const _hoisted_22$1 = { class: "w-full bg-slate-200/80 rounded-full h-2 overflow-hidden" };
const _hoisted_23$1 = { class: "bg-orange-50/60 border border-orange-100 rounded-2xl p-3.5 flex items-center justify-between gap-3" };
const _hoisted_24$1 = { class: "flex items-center space-x-3 min-w-0" };
const _hoisted_25$1 = { class: "w-9 h-9 rounded-xl bg-orange-500 text-white flex items-center justify-center flex-shrink-0 shadow-xs" };
const _hoisted_26$1 = { class: "min-w-0 text-left" };
const _hoisted_27$1 = { class: "flex items-center space-x-2" };
const _hoisted_28$1 = { class: "text-xs font-bold text-slate-800 tracking-tight" };
const _hoisted_29$1 = {
  key: 0,
  class: "text-[9px] font-bold text-orange-700 bg-orange-100 px-2 py-0.5 rounded-md border border-orange-200 uppercase tracking-wider"
};
const _hoisted_30$1 = { class: "grid grid-cols-3 gap-3 pt-1" };
const _hoisted_31$1 = { class: "bg-slate-50/80 border border-slate-100 rounded-2xl p-3 text-left" };
const _hoisted_32$1 = { class: "flex items-center space-x-1.5 text-slate-400 mb-1" };
const _hoisted_33$1 = { class: "text-base font-extrabold text-slate-800 tracking-tight" };
const _hoisted_34$1 = { class: "bg-slate-50/80 border border-slate-100 rounded-2xl p-3 text-left" };
const _hoisted_35$1 = { class: "flex items-center space-x-1.5 text-slate-400 mb-1" };
const _hoisted_36$1 = { class: "text-base font-extrabold text-slate-800 tracking-tight" };
const _hoisted_37$1 = { class: "bg-slate-50/80 border border-slate-100 rounded-2xl p-3 text-left" };
const _hoisted_38$1 = { class: "flex items-center space-x-1.5 text-slate-400 mb-1" };
const _hoisted_39$1 = { class: "text-base font-extrabold text-slate-800 tracking-tight" };
const _hoisted_40$1 = {
  key: 0,
  class: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-fade-in font-outfit"
};
const _hoisted_41 = { class: "bg-white rounded-3xl shadow-xl w-full max-w-md overflow-hidden border border-slate-100 p-6 space-y-6 text-left" };
const _hoisted_42 = { class: "flex items-center justify-between border-b border-slate-100 pb-4" };
const _hoisted_43 = { class: "flex items-center space-x-3" };
const _hoisted_44 = { class: "w-9 h-9 bg-indigo-50 text-indigo-600 rounded-xl border border-indigo-100 flex items-center justify-center shadow-2xs" };
const _hoisted_45 = { class: "space-y-5" };
const _hoisted_46 = { class: "flex items-center justify-between mb-1.5" };
const _hoisted_47 = {
  key: 0,
  class: "text-[10px] font-bold text-indigo-600 bg-indigo-50 px-2.5 py-0.5 rounded-full border border-indigo-100"
};
const _hoisted_48 = { class: "flex items-center space-x-2 mt-2 flex-wrap gap-y-1" };
const _hoisted_49 = ["onClick"];
const _hoisted_50 = { class: "flex items-center justify-between mb-1.5" };
const _hoisted_51 = {
  key: 0,
  class: "text-[10px] font-bold text-indigo-600 bg-indigo-50 px-2.5 py-0.5 rounded-full border border-indigo-100"
};
const _hoisted_52 = { class: "flex items-center space-x-2 mt-2 flex-wrap gap-y-1" };
const _hoisted_53 = ["onClick"];
const _hoisted_54 = { class: "flex items-center justify-end space-x-3 pt-4 border-t border-slate-100" };
const _hoisted_55 = ["disabled"];
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "StudyGoal",
  props: {
    streak: { default: 0 },
    weeklyHours: { default: 0 },
    weeklyGoal: { default: 20 },
    weeklyProgress: { default: 0 },
    monthlyHours: { default: 0 },
    monthlyGoal: { default: 80 },
    monthlyProgress: { default: 0 },
    hoursToday: { default: 0 }
  },
  emits: ["goals-updated"],
  setup(__props, { emit: __emit }) {
    const { showSuccess, showError } = useSwal();
    const props = __props;
    const emit = __emit;
    const activeGoalTab = ref("weekly");
    const showModal = ref(false);
    const saving = ref(false);
    const tempWeeklyGoal = ref(20);
    const tempMonthlyGoal = ref(80);
    const openGoalModal = () => {
      tempWeeklyGoal.value = props.weeklyGoal || 20;
      tempMonthlyGoal.value = props.monthlyGoal || 80;
      showModal.value = true;
    };
    const saveGoals = async () => {
      if (tempWeeklyGoal.value < 1 || tempMonthlyGoal.value < 1) {
        showError("Invalid Goal", "Please enter a goal of at least 1 hour.");
        return;
      }
      try {
        saving.value = true;
        await studentAPI.updateStudyGoals({
          weekly_goal_hours: tempWeeklyGoal.value,
          monthly_goal_hours: tempMonthlyGoal.value
        });
        showSuccess("Goals Saved!", "Your weekly and monthly study targets have been updated.");
        showModal.value = false;
        emit("goals-updated");
      } catch (err) {
        console.error("Failed to update study goals:", err);
        showError("Update Failed", err.response?.data?.message || "Failed to update study goals");
      } finally {
        saving.value = false;
      }
    };
    const currentProgress = computed(() => {
      if (activeGoalTab.value === "weekly") {
        return props.weeklyProgress ?? 0;
      }
      return props.monthlyProgress ?? 0;
    });
    const currentHours = computed(() => {
      if (activeGoalTab.value === "weekly") {
        return (props.weeklyHours ?? 0).toFixed(1);
      }
      return (props.monthlyHours ?? 0).toFixed(1);
    });
    const dashOffset = computed(() => {
      const percent = Math.min(100, Math.max(0, currentProgress.value));
      const circumference = 207.3;
      return circumference - percent / 100 * circumference;
    });
    const formattedHoursToday = computed(() => {
      const hrs = props.hoursToday ?? 0;
      return hrs.toFixed(1);
    });
    const formattedRemainingHours = computed(() => {
      if (activeGoalTab.value === "weekly") {
        const goal = props.weeklyGoal ?? 20;
        const done = props.weeklyHours ?? 0;
        return Math.max(0, goal - done).toFixed(1);
      } else {
        const goal = props.monthlyGoal ?? 80;
        const done = props.monthlyHours ?? 0;
        return Math.max(0, goal - done).toFixed(1);
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        createBaseVNode("div", _hoisted_2$1, [
          createBaseVNode("div", _hoisted_3$1, [
            createBaseVNode("div", _hoisted_4$1, [
              createBaseVNode("div", _hoisted_5$1, [
                createVNode(unref(Target), { class: "w-4.5 h-4.5" })
              ]),
              _cache[6] || (_cache[6] = createBaseVNode("div", null, [
                createBaseVNode("h3", { class: "text-base font-bold text-slate-800 tracking-tight leading-snug" }, "Target Progress"),
                createBaseVNode("p", { class: "text-[11px] text-slate-400 font-medium" }, "Track your study goals and streak progress.")
              ], -1))
            ]),
            createBaseVNode("div", _hoisted_6$1, [
              createBaseVNode("div", _hoisted_7$1, [
                createBaseVNode("button", {
                  onClick: _cache[0] || (_cache[0] = ($event) => activeGoalTab.value = "weekly"),
                  class: normalizeClass([
                    "px-2.5 py-1 rounded-lg text-[10px] font-bold transition-all duration-200 cursor-pointer",
                    activeGoalTab.value === "weekly" ? "bg-white text-indigo-600 shadow-sm" : "text-slate-500 hover:text-slate-700"
                  ])
                }, " Weekly ", 2),
                createBaseVNode("button", {
                  onClick: _cache[1] || (_cache[1] = ($event) => activeGoalTab.value = "monthly"),
                  class: normalizeClass([
                    "px-2.5 py-1 rounded-lg text-[10px] font-bold transition-all duration-200 cursor-pointer",
                    activeGoalTab.value === "monthly" ? "bg-white text-indigo-600 shadow-sm" : "text-slate-500 hover:text-slate-700"
                  ])
                }, " Monthly ", 2)
              ]),
              createBaseVNode("button", {
                onClick: openGoalModal,
                class: "p-1.5 bg-slate-50 border border-slate-200/80 hover:bg-slate-100 rounded-xl text-slate-600 transition-colors cursor-pointer",
                title: "Set Target Goals"
              }, [
                createVNode(unref(Settings2), { class: "w-4 h-4" })
              ])
            ])
          ]),
          createBaseVNode("div", _hoisted_8$1, [
            createBaseVNode("div", _hoisted_9$1, [
              createBaseVNode("div", _hoisted_10$1, [
                (openBlock(), createElementBlock("svg", _hoisted_11$1, [
                  _cache[7] || (_cache[7] = createBaseVNode("circle", {
                    cx: "40",
                    cy: "40",
                    r: "33",
                    stroke: "#e2e8f0",
                    "stroke-width": "6",
                    fill: "transparent"
                  }, null, -1)),
                  createBaseVNode("circle", {
                    cx: "40",
                    cy: "40",
                    r: "33",
                    stroke: "url(#indigoBlueGradient)",
                    "stroke-width": "6",
                    fill: "transparent",
                    "stroke-dasharray": 207.3,
                    "stroke-dashoffset": dashOffset.value,
                    "stroke-linecap": "round",
                    class: "transition-all duration-1000 ease-out"
                  }, null, 8, _hoisted_12$1),
                  _cache[8] || (_cache[8] = createBaseVNode("defs", null, [
                    createBaseVNode("linearGradient", {
                      id: "indigoBlueGradient",
                      x1: "0%",
                      y1: "0%",
                      x2: "100%",
                      y2: "100%"
                    }, [
                      createBaseVNode("stop", {
                        offset: "0%",
                        "stop-color": "#3b82f6"
                      }),
                      createBaseVNode("stop", {
                        offset: "100%",
                        "stop-color": "#2563eb"
                      })
                    ])
                  ], -1))
                ])),
                createBaseVNode("div", _hoisted_13$1, [
                  createBaseVNode("span", _hoisted_14$1, toDisplayString(currentProgress.value) + "%", 1),
                  _cache[9] || (_cache[9] = createBaseVNode("span", { class: "text-[9px] text-slate-400 font-bold uppercase tracking-wider mt-0.5" }, "Done", -1))
                ])
              ]),
              createBaseVNode("div", _hoisted_15$1, [
                createBaseVNode("div", _hoisted_16$1, [
                  createBaseVNode("span", _hoisted_17$1, toDisplayString(activeGoalTab.value === "weekly" ? "Weekly Target" : "Monthly Target"), 1),
                  createBaseVNode("span", _hoisted_18$1, " Goal: " + toDisplayString(activeGoalTab.value === "weekly" ? __props.weeklyGoal : __props.monthlyGoal) + "h ", 1)
                ]),
                createBaseVNode("div", _hoisted_19$1, [
                  createBaseVNode("span", _hoisted_20$1, toDisplayString(currentHours.value), 1),
                  createBaseVNode("span", _hoisted_21$1, "/ " + toDisplayString(activeGoalTab.value === "weekly" ? __props.weeklyGoal : __props.monthlyGoal) + " hrs studied", 1)
                ]),
                createBaseVNode("div", _hoisted_22$1, [
                  createBaseVNode("div", {
                    class: "bg-indigo-500 h-full rounded-full transition-all duration-1000",
                    style: normalizeStyle({ width: `${currentProgress.value}%` })
                  }, null, 4)
                ])
              ])
            ])
          ]),
          createBaseVNode("div", _hoisted_23$1, [
            createBaseVNode("div", _hoisted_24$1, [
              createBaseVNode("div", _hoisted_25$1, [
                createVNode(unref(Flame), { class: "w-4.5 h-4.5 fill-current" })
              ]),
              createBaseVNode("div", _hoisted_26$1, [
                createBaseVNode("div", _hoisted_27$1, [
                  createBaseVNode("h4", _hoisted_28$1, toDisplayString(__props.streak ?? 0) + " Days Active Streak", 1),
                  (__props.streak ?? 0) >= 3 ? (openBlock(), createElementBlock("span", _hoisted_29$1, " 🔥 On Fire! ")) : createCommentVNode("", true)
                ]),
                _cache[10] || (_cache[10] = createBaseVNode("p", { class: "text-[11px] text-slate-500 font-medium truncate mt-0.5" }, "Keep learning daily to increase your streak count.", -1))
              ])
            ])
          ]),
          createBaseVNode("div", _hoisted_30$1, [
            createBaseVNode("div", _hoisted_31$1, [
              createBaseVNode("div", _hoisted_32$1, [
                createVNode(unref(Clock), { class: "w-3.5 h-3.5 text-blue-500" }),
                _cache[11] || (_cache[11] = createBaseVNode("span", { class: "text-[10px] font-bold text-slate-400 uppercase tracking-wider" }, "Today", -1))
              ]),
              createBaseVNode("span", _hoisted_33$1, toDisplayString(formattedHoursToday.value) + "h", 1)
            ]),
            createBaseVNode("div", _hoisted_34$1, [
              createBaseVNode("div", _hoisted_35$1, [
                createVNode(unref(Target), { class: "w-3.5 h-3.5 text-indigo-500" }),
                _cache[12] || (_cache[12] = createBaseVNode("span", { class: "text-[10px] font-bold text-slate-400 uppercase tracking-wider" }, "Target", -1))
              ]),
              createBaseVNode("span", _hoisted_36$1, toDisplayString(activeGoalTab.value === "weekly" ? __props.weeklyGoal : __props.monthlyGoal) + "h", 1)
            ]),
            createBaseVNode("div", _hoisted_37$1, [
              createBaseVNode("div", _hoisted_38$1, [
                createVNode(unref(TrendingUp), { class: "w-3.5 h-3.5 text-emerald-500" }),
                _cache[13] || (_cache[13] = createBaseVNode("span", { class: "text-[10px] font-bold text-slate-400 uppercase tracking-wider" }, "Remaining", -1))
              ]),
              createBaseVNode("span", _hoisted_39$1, toDisplayString(formattedRemainingHours.value) + "h", 1)
            ])
          ])
        ]),
        (openBlock(), createBlock(Teleport, { to: "body" }, [
          showModal.value ? (openBlock(), createElementBlock("div", _hoisted_40$1, [
            createBaseVNode("div", _hoisted_41, [
              createBaseVNode("div", _hoisted_42, [
                createBaseVNode("div", _hoisted_43, [
                  createBaseVNode("div", _hoisted_44, [
                    createVNode(unref(Target), { class: "w-4.5 h-4.5" })
                  ]),
                  _cache[14] || (_cache[14] = createBaseVNode("div", null, [
                    createBaseVNode("h3", { class: "text-base font-bold text-slate-800 leading-tight" }, "Set Study Target Goals"),
                    createBaseVNode("p", { class: "text-[11px] font-medium text-slate-400" }, "Customize your target hours")
                  ], -1))
                ]),
                createBaseVNode("button", {
                  onClick: _cache[2] || (_cache[2] = ($event) => showModal.value = false),
                  class: "p-1.5 text-slate-400 hover:text-slate-600 rounded-xl hover:bg-slate-100 transition-colors cursor-pointer"
                }, [
                  createVNode(unref(X), { class: "w-5 h-5" })
                ])
              ]),
              createBaseVNode("div", _hoisted_45, [
                createBaseVNode("div", null, [
                  createBaseVNode("div", _hoisted_46, [
                    _cache[15] || (_cache[15] = createBaseVNode("label", { class: "block text-xs font-bold text-slate-700 uppercase tracking-wider" }, " Weekly Target Goal (Hours) ", -1)),
                    ![10, 15, 20, 30, 40].includes(tempWeeklyGoal.value) ? (openBlock(), createElementBlock("span", _hoisted_47, " Custom: " + toDisplayString(tempWeeklyGoal.value) + "h ", 1)) : createCommentVNode("", true)
                  ]),
                  withDirectives(createBaseVNode("input", {
                    "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => tempWeeklyGoal.value = $event),
                    type: "number",
                    min: "1",
                    max: "168",
                    placeholder: "Enter custom hours (e.g. 25)",
                    class: "w-full px-4 py-2.5 border border-slate-200 rounded-xl text-sm font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 bg-slate-50/50"
                  }, null, 512), [
                    [
                      vModelText,
                      tempWeeklyGoal.value,
                      void 0,
                      { number: true }
                    ]
                  ]),
                  _cache[17] || (_cache[17] = createBaseVNode("p", { class: "text-[10px] font-medium text-slate-400 mt-1" }, "Type custom goal hours or click a preset below:", -1)),
                  createBaseVNode("div", _hoisted_48, [
                    _cache[16] || (_cache[16] = createBaseVNode("span", { class: "text-[10px] font-semibold text-slate-400" }, "Presets:", -1)),
                    (openBlock(), createElementBlock(Fragment, null, renderList([10, 15, 20, 30, 40], (preset) => {
                      return createBaseVNode("button", {
                        key: preset,
                        type: "button",
                        onClick: ($event) => tempWeeklyGoal.value = preset,
                        class: normalizeClass([
                          "px-2.5 py-1 rounded-lg text-[10px] font-bold border transition-colors cursor-pointer",
                          tempWeeklyGoal.value === preset ? "bg-indigo-600 text-white border-indigo-600" : "bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100"
                        ])
                      }, toDisplayString(preset) + "h ", 11, _hoisted_49);
                    }), 64))
                  ])
                ]),
                createBaseVNode("div", null, [
                  createBaseVNode("div", _hoisted_50, [
                    _cache[18] || (_cache[18] = createBaseVNode("label", { class: "block text-xs font-bold text-slate-700 uppercase tracking-wider" }, " Monthly Target Goal (Hours) ", -1)),
                    ![40, 60, 80, 100, 120].includes(tempMonthlyGoal.value) ? (openBlock(), createElementBlock("span", _hoisted_51, " Custom: " + toDisplayString(tempMonthlyGoal.value) + "h ", 1)) : createCommentVNode("", true)
                  ]),
                  withDirectives(createBaseVNode("input", {
                    "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => tempMonthlyGoal.value = $event),
                    type: "number",
                    min: "1",
                    max: "720",
                    placeholder: "Enter custom hours (e.g. 90)",
                    class: "w-full px-4 py-2.5 border border-slate-200 rounded-xl text-sm font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 bg-slate-50/50"
                  }, null, 512), [
                    [
                      vModelText,
                      tempMonthlyGoal.value,
                      void 0,
                      { number: true }
                    ]
                  ]),
                  _cache[20] || (_cache[20] = createBaseVNode("p", { class: "text-[10px] font-medium text-slate-400 mt-1" }, "Type custom goal hours or click a preset below:", -1)),
                  createBaseVNode("div", _hoisted_52, [
                    _cache[19] || (_cache[19] = createBaseVNode("span", { class: "text-[10px] font-semibold text-slate-400" }, "Presets:", -1)),
                    (openBlock(), createElementBlock(Fragment, null, renderList([40, 60, 80, 100, 120], (preset) => {
                      return createBaseVNode("button", {
                        key: preset,
                        type: "button",
                        onClick: ($event) => tempMonthlyGoal.value = preset,
                        class: normalizeClass([
                          "px-2.5 py-1 rounded-lg text-[10px] font-bold border transition-colors cursor-pointer",
                          tempMonthlyGoal.value === preset ? "bg-indigo-600 text-white border-indigo-600" : "bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100"
                        ])
                      }, toDisplayString(preset) + "h ", 11, _hoisted_53);
                    }), 64))
                  ])
                ])
              ]),
              createBaseVNode("div", _hoisted_54, [
                createBaseVNode("button", {
                  type: "button",
                  onClick: _cache[5] || (_cache[5] = ($event) => showModal.value = false),
                  class: "px-4 py-2.5 border border-slate-200 text-slate-600 hover:bg-slate-100 rounded-xl text-xs font-semibold transition-colors cursor-pointer"
                }, " Cancel "),
                createBaseVNode("button", {
                  type: "button",
                  onClick: saveGoals,
                  disabled: saving.value,
                  class: "px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold shadow-md shadow-indigo-500/20 transition-all cursor-pointer flex items-center space-x-1.5 disabled:opacity-50"
                }, [
                  saving.value ? (openBlock(), createBlock(unref(RefreshCw), {
                    key: 0,
                    class: "w-3.5 h-3.5 animate-spin"
                  })) : createCommentVNode("", true),
                  createBaseVNode("span", null, toDisplayString(saving.value ? "Saving..." : "Save Target Goals"), 1)
                ], 8, _hoisted_55)
              ])
            ])
          ])) : createCommentVNode("", true)
        ]))
      ]);
    };
  }
});
const StudyGoal = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-b6c07ab3"]]);
const _hoisted_1 = { class: "space-y-5" };
const _hoisted_2 = { class: "bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 rounded-2xl text-white px-6 py-5 shadow-xl relative overflow-hidden" };
const _hoisted_3 = { class: "relative z-10 flex items-center justify-between" };
const _hoisted_4 = { class: "text-left" };
const _hoisted_5 = { class: "text-2xl font-bold mt-2 mb-1 tracking-tight" };
const _hoisted_6 = { class: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 font-outfit" };
const _hoisted_7 = { class: "bg-white rounded-xl shadow-sm border border-slate-100 p-5 flex flex-col space-y-2 hover:shadow-md transition-shadow text-left" };
const _hoisted_8 = { class: "flex items-center space-x-2" };
const _hoisted_9 = { class: "p-2 bg-blue-50/60 rounded-lg text-blue-600" };
const _hoisted_10 = { class: "text-3xl font-bold text-slate-700 text-left tracking-tight" };
const _hoisted_11 = { class: "bg-white rounded-xl shadow-sm border border-slate-100 p-5 flex flex-col space-y-2 hover:shadow-md transition-shadow text-left" };
const _hoisted_12 = { class: "flex items-center space-x-2" };
const _hoisted_13 = { class: "p-2 bg-purple-50/60 rounded-lg text-purple-600" };
const _hoisted_14 = { class: "text-3xl font-bold text-slate-700 text-left tracking-tight" };
const _hoisted_15 = { class: "bg-white rounded-xl shadow-sm border border-slate-100 p-5 flex flex-col space-y-2 hover:shadow-md transition-shadow text-left" };
const _hoisted_16 = { class: "flex items-center space-x-2" };
const _hoisted_17 = { class: "p-2 bg-emerald-50/60 rounded-lg text-emerald-600" };
const _hoisted_18 = { class: "text-3xl font-bold text-slate-700 text-left tracking-tight" };
const _hoisted_19 = { class: "bg-white rounded-xl shadow-sm border border-slate-100 p-5 flex flex-col space-y-2 hover:shadow-md transition-shadow text-left" };
const _hoisted_20 = { class: "flex items-center space-x-2" };
const _hoisted_21 = { class: "p-2 bg-orange-50/60 rounded-lg text-orange-600" };
const _hoisted_22 = { class: "text-3xl font-bold text-slate-700 text-left tracking-tight" };
const _hoisted_23 = { class: "grid grid-cols-1 lg:grid-cols-3 gap-6" };
const _hoisted_24 = { class: "lg:col-span-2 space-y-6" };
const _hoisted_25 = { class: "bg-white rounded-3xl p-4 sm:p-6 border border-slate-100/90 shadow-xs hover:shadow-md transition-all duration-300 relative overflow-hidden font-outfit text-left" };
const _hoisted_26 = { class: "flex items-center justify-between gap-4 mb-5 border-b border-slate-100/80 pb-4" };
const _hoisted_27 = { class: "flex items-center space-x-3 text-left" };
const _hoisted_28 = { class: "w-9 h-9 rounded-xl bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0 shadow-2xs" };
const _hoisted_29 = { class: "flex items-center space-x-1 bg-slate-100 p-1 rounded-xl" };
const _hoisted_30 = { class: "pt-2" };
const _hoisted_31 = { class: "bg-white rounded-3xl p-6 border border-slate-100/90 shadow-xs hover:shadow-md transition-all duration-300 relative overflow-hidden font-outfit text-left" };
const _hoisted_32 = { class: "flex items-center space-x-3 mb-5 border-b border-slate-100/80 pb-4 text-left" };
const _hoisted_33 = { class: "w-9 h-9 rounded-xl bg-emerald-50 border border-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0 shadow-2xs" };
const _hoisted_34 = { class: "relative pl-6 border-l-2 border-slate-100 space-y-5 ml-3 text-left" };
const _hoisted_35 = { class: "p-4 bg-slate-50/70 border border-slate-100 rounded-2xl hover:border-slate-200/80 hover:bg-slate-50 transition-all flex items-start space-x-3.5 relative" };
const _hoisted_36 = { class: "flex-1 min-w-0" };
const _hoisted_37 = { class: "text-xs font-bold text-slate-800" };
const _hoisted_38 = { class: "text-[11px] text-slate-500 mt-0.5 leading-relaxed font-medium" };
const _hoisted_39 = { class: "text-[10px] font-semibold text-slate-400 text-right whitespace-nowrap self-start" };
const _hoisted_40 = { class: "space-y-6" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Dashboard",
  setup(__props) {
    const { user } = useAuth();
    const { bookings, libraries } = useApp();
    useRouter();
    const checkedInBookingsCount = computed(() => {
      return bookings.value.filter((b) => b.check_in_time !== null && b.check_in_time !== void 0).length;
    });
    const activeTab = ref("weekly");
    const weeklyStudyData = ref([]);
    const monthlyStudyData = ref([]);
    const activeChartData = computed(() => {
      if (activeTab.value === "weekly") {
        return weeklyStudyData.value.map((d) => ({
          label: d.day,
          value: d.hours
        }));
      } else {
        return monthlyStudyData.value.map((d) => ({
          label: d.month,
          value: d.hours
        }));
      }
    });
    computed(() => {
      if (activeChartData.value.length === 0) return 1;
      return Math.max(...activeChartData.value.map((d) => d.value), 1);
    });
    computed(() => {
      const sum = activeChartData.value.reduce((acc, curr) => acc + curr.value, 0);
      return Math.round(sum * 10) / 10;
    });
    const dashboardData = ref(null);
    const loading = ref(true);
    const studyStreak = ref(0);
    const hoursToday = ref(0);
    const weeklyProgress = ref(0);
    const weeklyGoal = ref(20);
    const totalWeeklyHours = ref(0);
    const monthlyProgress = ref(0);
    const monthlyGoal = ref(80);
    const totalMonthlyHours = ref(0);
    const userRank = ref(0);
    const avgSessionDuration = ref(0);
    const totalSessions = ref(0);
    const focusScore = ref(0);
    const reservedBooksCount = ref(0);
    const recentActivities = ref([]);
    const activeQueues = ref([]);
    const loadDashboardData = async () => {
      try {
        loading.value = true;
        const data = await studentAPI.getDashboard();
        dashboardData.value = data;
        if (data.stats) {
          reservedBooksCount.value = data.stats.active_reservations || 0;
        }
        if (data.analytics) {
          studyStreak.value = data.analytics.study_streak || 0;
          hoursToday.value = data.analytics.hours_today || 0;
          weeklyProgress.value = data.analytics.weekly_progress || 0;
          weeklyGoal.value = data.analytics.weekly_goal || 20;
          totalWeeklyHours.value = data.analytics.weekly_hours || 0;
          monthlyProgress.value = data.analytics.monthly_progress || 0;
          monthlyGoal.value = data.analytics.monthly_goal || 80;
          totalMonthlyHours.value = data.analytics.monthly_hours || 0;
          avgSessionDuration.value = data.analytics.avg_session_duration || 0;
          totalSessions.value = data.analytics.total_sessions || 0;
          focusScore.value = data.analytics.focus_score || 0;
          weeklyStudyData.value = data.analytics.weekly_study_data || [];
          monthlyStudyData.value = data.analytics.monthly_study_data || [];
        }
        if (data.active_queue) {
          activeQueues.value = data.active_queue;
        }
        if (data.recent_activity) {
          recentActivities.value = data.recent_activity.map((activity) => {
            if (activity.type === "booking") {
              return {
                id: activity.data.id,
                type: "booking",
                icon: Calendar,
                title: "Seat Booked",
                description: `Seat ${activity.data.seat?.seat_number} at ${activity.data.seat?.library?.name || "Library"}`,
                time: formatTimeAgo(activity.created_at)
              };
            } else if (activity.type === "reservation") {
              return {
                id: activity.data.id,
                type: "book",
                icon: BookMarked,
                title: "Book Reserved",
                description: activity.data.book?.title || "Book",
                time: formatTimeAgo(activity.created_at)
              };
            }
            return null;
          }).filter(Boolean);
        }
        userRank.value = Math.max(1, Math.floor(Math.random() * 50));
      } catch (error) {
        console.error("Failed to load dashboard data:", error);
      } finally {
        loading.value = false;
      }
    };
    const formatTimeAgo = (dateString) => {
      const date = new Date(dateString);
      const now = /* @__PURE__ */ new Date();
      const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1e3);
      if (diffInSeconds < 60) return "Just now";
      if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)} minutes ago`;
      if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)} hours ago`;
      return `${Math.floor(diffInSeconds / 86400)} days ago`;
    };
    onMounted(() => {
      loadDashboardData();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          _cache[4] || (_cache[4] = createBaseVNode("div", { class: "absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mr-32 -mt-32" }, null, -1)),
          _cache[5] || (_cache[5] = createBaseVNode("div", { class: "absolute bottom-0 left-0 w-48 h-48 bg-white opacity-5 rounded-full -ml-24 -mb-24" }, null, -1)),
          createBaseVNode("div", _hoisted_3, [
            createBaseVNode("div", _hoisted_4, [
              _cache[2] || (_cache[2] = createBaseVNode("span", { class: "text-[10px] font-semibold tracking-wider text-blue-200 uppercase bg-white/10 px-2.5 py-0.5 rounded-full" }, "Student Workspace", -1)),
              createBaseVNode("h1", _hoisted_5, "Welcome back, " + toDisplayString(unref(user)?.name) + "! 👋", 1),
              _cache[3] || (_cache[3] = createBaseVNode("p", { class: "text-blue-100/90 text-xs font-normal" }, "Ready to continue your learning journey? Your library world awaits.", -1))
            ])
          ])
        ]),
        createBaseVNode("div", _hoisted_6, [
          createBaseVNode("div", _hoisted_7, [
            createBaseVNode("div", _hoisted_8, [
              createBaseVNode("div", _hoisted_9, [
                createVNode(unref(Calendar), { class: "w-5 h-5" })
              ]),
              _cache[6] || (_cache[6] = createBaseVNode("span", { class: "text-xs font-bold text-slate-400 uppercase tracking-wider" }, "Total Bookings", -1))
            ]),
            createBaseVNode("div", _hoisted_10, toDisplayString(checkedInBookingsCount.value), 1),
            _cache[7] || (_cache[7] = createBaseVNode("div", { class: "text-[10px] text-slate-400 font-medium text-left uppercase" }, "Completed this month", -1))
          ]),
          createBaseVNode("div", _hoisted_11, [
            createBaseVNode("div", _hoisted_12, [
              createBaseVNode("div", _hoisted_13, [
                createVNode(unref(Clock), { class: "w-5 h-5" })
              ]),
              _cache[8] || (_cache[8] = createBaseVNode("span", { class: "text-xs font-bold text-slate-400 uppercase tracking-wider" }, "Hours Today", -1))
            ]),
            createBaseVNode("div", _hoisted_14, toDisplayString(hoursToday.value) + "h", 1),
            _cache[9] || (_cache[9] = createBaseVNode("div", { class: "text-[10px] text-slate-400 font-medium text-left uppercase" }, "Logged in libraries", -1))
          ]),
          createBaseVNode("div", _hoisted_15, [
            createBaseVNode("div", _hoisted_16, [
              createBaseVNode("div", _hoisted_17, [
                createVNode(unref(BookMarked), { class: "w-5 h-5" })
              ]),
              _cache[10] || (_cache[10] = createBaseVNode("span", { class: "text-xs font-bold text-slate-400 uppercase tracking-wider" }, "Reserved Books", -1))
            ]),
            createBaseVNode("div", _hoisted_18, toDisplayString(reservedBooksCount.value), 1),
            _cache[11] || (_cache[11] = createBaseVNode("div", { class: "text-[10px] text-slate-400 font-medium text-left uppercase" }, "Items ready at desk", -1))
          ]),
          createBaseVNode("div", _hoisted_19, [
            createBaseVNode("div", _hoisted_20, [
              createBaseVNode("div", _hoisted_21, [
                createVNode(unref(MapPin), { class: "w-5 h-5" })
              ]),
              _cache[12] || (_cache[12] = createBaseVNode("span", { class: "text-xs font-bold text-slate-400 uppercase tracking-wider" }, "Libraries", -1))
            ]),
            createBaseVNode("div", _hoisted_22, toDisplayString(unref(libraries).length), 1),
            _cache[13] || (_cache[13] = createBaseVNode("div", { class: "text-[10px] text-slate-400 font-medium text-left uppercase" }, "Partner locations", -1))
          ])
        ]),
        createBaseVNode("div", _hoisted_23, [
          createBaseVNode("div", _hoisted_24, [
            createBaseVNode("div", _hoisted_25, [
              createBaseVNode("div", _hoisted_26, [
                createBaseVNode("div", _hoisted_27, [
                  createBaseVNode("div", _hoisted_28, [
                    createVNode(unref(ChartColumn), { class: "w-4.5 h-4.5" })
                  ]),
                  _cache[14] || (_cache[14] = createBaseVNode("div", null, [
                    createBaseVNode("h3", { class: "text-base font-bold text-slate-800 tracking-tight leading-snug" }, "Study Analytics"),
                    createBaseVNode("p", { class: "text-[11px] text-slate-400 font-medium" }, "Your weekly and monthly study session breakdown.")
                  ], -1))
                ]),
                createBaseVNode("div", _hoisted_29, [
                  createBaseVNode("button", {
                    onClick: _cache[0] || (_cache[0] = ($event) => activeTab.value = "weekly"),
                    class: normalizeClass([
                      "px-3 py-1 rounded-lg text-xs font-bold transition-all duration-300 cursor-pointer",
                      activeTab.value === "weekly" ? "bg-white text-blue-600 shadow-sm" : "text-slate-500 hover:text-slate-700"
                    ])
                  }, " Weekly ", 2),
                  createBaseVNode("button", {
                    onClick: _cache[1] || (_cache[1] = ($event) => activeTab.value = "monthly"),
                    class: normalizeClass([
                      "px-3 py-1 rounded-lg text-xs font-bold transition-all duration-300 cursor-pointer",
                      activeTab.value === "monthly" ? "bg-white text-blue-600 shadow-sm" : "text-slate-500 hover:text-slate-700"
                    ])
                  }, " Monthly ", 2)
                ])
              ]),
              createBaseVNode("div", _hoisted_30, [
                createVNode(BookingTrendsChart, {
                  data: activeChartData.value,
                  "x-key": "label",
                  "y-key": "value",
                  label: "Hours",
                  color: "#2563eb"
                }, null, 8, ["data"])
              ])
            ]),
            createBaseVNode("div", _hoisted_31, [
              createBaseVNode("div", _hoisted_32, [
                createBaseVNode("div", _hoisted_33, [
                  createVNode(unref(Activity), { class: "w-4.5 h-4.5" })
                ]),
                _cache[15] || (_cache[15] = createBaseVNode("div", null, [
                  createBaseVNode("h3", { class: "text-base font-bold text-slate-800 tracking-tight leading-snug" }, "Recent Activity"),
                  createBaseVNode("p", { class: "text-[11px] text-slate-400 font-medium" }, "Latest bookings, check-ins, and library activities.")
                ], -1))
              ]),
              createBaseVNode("div", _hoisted_34, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(recentActivities.value, (activity) => {
                  return openBlock(), createElementBlock("div", {
                    key: activity.id,
                    class: "relative group"
                  }, [
                    createBaseVNode("span", {
                      class: normalizeClass(["absolute -left-[31px] top-1.5 w-4 h-4 rounded-full border-2 border-white flex items-center justify-center shadow-sm z-10 transition-colors duration-300", [
                        activity.type === "booking" ? "bg-blue-600 group-hover:bg-blue-500" : activity.type === "book" ? "bg-emerald-600 group-hover:bg-emerald-500" : activity.type === "event" ? "bg-purple-600 group-hover:bg-purple-500" : "bg-orange-500 group-hover:bg-orange-400"
                      ]])
                    }, null, 2),
                    createBaseVNode("div", _hoisted_35, [
                      createBaseVNode("div", {
                        class: normalizeClass([
                          "w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 border",
                          activity.type === "booking" ? "bg-blue-50/50 border-blue-100 text-blue-600" : activity.type === "book" ? "bg-emerald-50/50 border-emerald-100 text-emerald-600" : activity.type === "event" ? "bg-purple-50/50 border-purple-100 text-purple-600" : "bg-orange-50/50 border-orange-100 text-orange-600"
                        ])
                      }, [
                        (openBlock(), createBlock(resolveDynamicComponent(activity.icon), { class: "w-4.5 h-4.5" }))
                      ], 2),
                      createBaseVNode("div", _hoisted_36, [
                        createBaseVNode("p", _hoisted_37, toDisplayString(activity.title), 1),
                        createBaseVNode("p", _hoisted_38, toDisplayString(activity.description), 1)
                      ]),
                      createBaseVNode("div", _hoisted_39, toDisplayString(activity.time), 1)
                    ])
                  ]);
                }), 128))
              ])
            ])
          ]),
          createBaseVNode("div", _hoisted_40, [
            createVNode(_sfc_main$2),
            createVNode(_sfc_main$3, { queues: activeQueues.value }, null, 8, ["queues"]),
            createVNode(StudyGoal, {
              streak: studyStreak.value,
              "weekly-hours": totalWeeklyHours.value,
              "weekly-goal": weeklyGoal.value,
              "weekly-progress": weeklyProgress.value,
              "monthly-hours": totalMonthlyHours.value,
              "monthly-goal": monthlyGoal.value,
              "monthly-progress": monthlyProgress.value,
              "hours-today": hoursToday.value,
              onGoalsUpdated: loadDashboardData
            }, null, 8, ["streak", "weekly-hours", "weekly-goal", "weekly-progress", "monthly-hours", "monthly-goal", "monthly-progress", "hours-today"])
          ])
        ])
      ]);
    };
  }
});
export {
  _sfc_main as default
};
