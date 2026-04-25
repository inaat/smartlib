import { d as defineComponent, p as useAuth, c as createElementBlock, n as normalizeClass, b as createBaseVNode, f as createVNode, u as unref, F as Fragment, h as renderList, w as withCtx, k as createBlock, m as createCommentVNode, l as resolveDynamicComponent, t as toDisplayString, g as resolveComponent, i as openBlock, r as ref, A as useRouter, j as createTextVNode, C as useApp, D as computed, E as renderSlot } from "./main-DCJXrkf-.js";
import { u as useSwal } from "./useSwal-BUxo5JBv.js";
import { X } from "./x-BkNPvJ70.js";
import { B as BookOpen } from "./book-open-CmZbSzMF.js";
import { L as LogOut } from "./log-out--hPc7NJn.js";
import { C as ChevronRight } from "./chevron-right-SSQMZ9HW.js";
import { H as House } from "./house-CHA4MvW2.js";
import { B as BookMarked } from "./book-marked-DzgVwKLt.js";
import { A as Armchair } from "./armchair-BF2GfIuy.js";
import { C as Clock } from "./clock-B7PYed5-.js";
import { C as Calendar } from "./calendar-DLVGkrUu.js";
import { B as Bell } from "./bell-Bbc0WqK8.js";
import { M as MapPin } from "./map-pin-YMhwiUzx.js";
import { Q as QrCode } from "./qr-code-DQB6y8E3.js";
import { U as User } from "./user-C8gwTBBi.js";
import { C as CalendarCheck } from "./calendar-check-D8g-0Uzu.js";
import { C as ChartColumn } from "./chart-column-D_Bhh0Vi.js";
import { C as CreditCard } from "./credit-card-DI3qwLf2.js";
import { L as LifeBuoy } from "./life-buoy-CJiKNpLk.js";
import { T as TriangleAlert } from "./triangle-alert-8zFUiR58.js";
import { M as Menu } from "./menu-CtHUs0hp.js";
import { C as ChevronDown } from "./chevron-down-Bg0y50h0.js";
import { M as MessageSquare } from "./message-square-TcLfaMSd.js";
import { C as CircleCheckBig } from "./circle-check-big-ExLl7Lif.js";
import { B as Book } from "./book-jaV5-ltj.js";
import { f as formatDistanceToNow } from "./formatDistanceToNow-B4KUQnky.js";
/* empty css               */
import "./createLucideIcon-CDsoUk2K.js";
import "./constructNow-BBqFFN36.js";
import "./en-US-DYF0Jz7_.js";
const _hoisted_1$3 = { class: "bg-gradient-to-r from-blue-600 to-teal-600 text-white p-6 relative" };
const _hoisted_2$3 = { class: "flex items-center space-x-3 mb-4" };
const _hoisted_3$3 = { class: "w-10 h-10 bg-white bg-opacity-20 rounded-lg flex items-center justify-center" };
const _hoisted_4$3 = { class: "flex-1 px-4 py-6 space-y-6" };
const _hoisted_5$2 = { class: "space-y-1" };
const _hoisted_6$2 = { class: "font-medium text-sm" };
const _hoisted_7$2 = { class: "space-y-1" };
const _hoisted_8$2 = { class: "font-medium text-sm" };
const _hoisted_9$2 = { class: "border-t border-gray-200 p-4" };
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "StudentSidebar",
  props: {
    isOpen: { type: Boolean }
  },
  emits: ["close"],
  setup(__props) {
    const { logout: authLogout } = useAuth();
    const { showConfirm } = useSwal();
    const handleLogout = async () => {
      if (await showConfirm("Sign Out", "Are you sure you want to sign out?", "Yes, Sign Out")) {
        await authLogout();
      }
    };
    const mainNavItems = [
      { path: "/student/dashboard", label: "Dashboard", icon: House, exact: true },
      { path: "/student/books", label: "Browse Books", icon: BookOpen },
      { path: "/student/my-reservations", label: "My Reservations", icon: BookMarked },
      { path: "/student/my-bookings", label: "My Bookings", icon: Armchair },
      { path: "/student/my-queue", label: "Waitlist", icon: Clock },
      { path: "/student/events", label: "Events & Seminars", icon: Calendar },
      { path: "/student/notifications", label: "Notifications", icon: Bell },
      { path: "/student/libraries", label: "Find Library", icon: MapPin },
      { path: "/student/qr-checkin", label: "Check In", icon: QrCode },
      { path: "/student/profile", label: "My Profile", icon: User }
    ];
    const quickAccessItems = [
      { path: "/student/attendance", label: "My Attendance", icon: CalendarCheck },
      { path: "/student/analytics", label: "My Analytics", icon: ChartColumn },
      { path: "/student/subscription", label: "Subscription", icon: CreditCard },
      { path: "/student/support", label: "Support & Complaints", icon: LifeBuoy }
    ];
    return (_ctx, _cache) => {
      const _component_router_link = resolveComponent("router-link");
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([
          "fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-xl transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0",
          __props.isOpen ? "translate-x-0" : "-translate-x-full"
        ])
      }, [
        createBaseVNode("div", _hoisted_1$3, [
          createBaseVNode("button", {
            onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("close")),
            class: "absolute top-4 right-4 text-white hover:bg-white hover:bg-opacity-20 rounded-lg p-1 lg:hidden"
          }, [
            createVNode(unref(X), { class: "w-5 h-5" })
          ]),
          createBaseVNode("div", _hoisted_2$3, [
            createBaseVNode("div", _hoisted_3$3, [
              createVNode(unref(BookOpen), { class: "w-6 h-6 text-white" })
            ]),
            _cache[3] || (_cache[3] = createBaseVNode("div", null, [
              createBaseVNode("h1", { class: "text-lg font-bold" }, "Smart Lib"),
              createBaseVNode("p", { class: "text-xs opacity-90" }, "Student Portal")
            ], -1))
          ])
        ]),
        createBaseVNode("nav", _hoisted_4$3, [
          createBaseVNode("div", null, [
            _cache[4] || (_cache[4] = createBaseVNode("h3", { class: "text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 px-3" }, " Main Menu ", -1)),
            createBaseVNode("div", _hoisted_5$2, [
              (openBlock(), createElementBlock(Fragment, null, renderList(mainNavItems, (item) => {
                return createVNode(_component_router_link, {
                  key: item.path,
                  to: item.path,
                  onClick: _cache[1] || (_cache[1] = ($event) => _ctx.$emit("close"))
                }, {
                  default: withCtx(({ isActive: isLinkActive }) => [
                    createBaseVNode("div", {
                      class: normalizeClass([
                        "flex items-center space-x-3 px-3 py-2 rounded-lg transition-all duration-200 group cursor-pointer",
                        isLinkActive ? "bg-blue-50 text-blue-700 border-r-2 border-blue-600" : "text-gray-600 hover:bg-gray-50 hover:text-blue-600"
                      ])
                    }, [
                      (openBlock(), createBlock(resolveDynamicComponent(item.icon), {
                        class: normalizeClass(["w-5 h-5", isLinkActive ? "text-blue-600" : "text-gray-400 group-hover:text-blue-500"])
                      }, null, 8, ["class"])),
                      createBaseVNode("span", _hoisted_6$2, toDisplayString(item.label), 1),
                      isLinkActive ? (openBlock(), createBlock(unref(ChevronRight), {
                        key: 0,
                        class: "w-4 h-4 ml-auto text-blue-600"
                      })) : createCommentVNode("", true)
                    ], 2)
                  ]),
                  _: 2
                }, 1032, ["to"]);
              }), 64))
            ])
          ]),
          createBaseVNode("div", null, [
            _cache[5] || (_cache[5] = createBaseVNode("h3", { class: "text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 px-3" }, " Quick Access ", -1)),
            createBaseVNode("div", _hoisted_7$2, [
              (openBlock(), createElementBlock(Fragment, null, renderList(quickAccessItems, (item) => {
                return createVNode(_component_router_link, {
                  key: item.path,
                  to: item.path,
                  onClick: _cache[2] || (_cache[2] = ($event) => _ctx.$emit("close")),
                  class: "flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-50 hover:text-blue-600 transition-all duration-200 group"
                }, {
                  default: withCtx(() => [
                    (openBlock(), createBlock(resolveDynamicComponent(item.icon), { class: "w-4 h-4 text-gray-400 group-hover:text-blue-500" })),
                    createBaseVNode("span", _hoisted_8$2, toDisplayString(item.label), 1)
                  ]),
                  _: 2
                }, 1032, ["to"]);
              }), 64))
            ])
          ])
        ]),
        createBaseVNode("div", _hoisted_9$2, [
          createBaseVNode("button", {
            onClick: handleLogout,
            class: "w-full flex items-center space-x-2 px-3 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
          }, [
            createVNode(unref(LogOut), { class: "w-4 h-4" }),
            _cache[6] || (_cache[6] = createBaseVNode("span", { class: "text-sm font-medium" }, "Sign Out", -1))
          ])
        ])
      ], 2);
    };
  }
});
const _hoisted_1$2 = {
  key: 0,
  class: "bg-red-600 text-white px-6 py-2 flex items-center justify-between animate-pulse"
};
const _hoisted_2$2 = { class: "flex items-center space-x-2" };
const _hoisted_3$2 = { class: "bg-white shadow-sm border-b border-gray-200 px-6 py-4" };
const _hoisted_4$2 = { class: "flex items-center justify-between" };
const _hoisted_5$1 = { class: "flex items-center space-x-4" };
const _hoisted_6$1 = { class: "hidden lg:block" };
const _hoisted_7$1 = { class: "text-xl font-semibold text-gray-800" };
const _hoisted_8$1 = { class: "flex items-center space-x-4" };
const _hoisted_9$1 = { class: "relative" };
const _hoisted_10$1 = {
  key: 0,
  class: "absolute top-1.5 right-1.5 w-4 h-4 bg-red-500 text-white text-[10px] flex items-center justify-center rounded-full border-2 border-white font-bold"
};
const _hoisted_11 = {
  key: 0,
  class: "absolute right-0 mt-2 w-80 bg-white rounded-2xl shadow-xl border border-gray-200 z-50 overflow-hidden"
};
const _hoisted_12 = { class: "p-4 border-b border-gray-100 flex items-center justify-between bg-gray-50/50" };
const _hoisted_13 = {
  key: 0,
  class: "text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-full"
};
const _hoisted_14 = { class: "max-h-[400px] overflow-y-auto" };
const _hoisted_15 = {
  key: 0,
  class: "p-8 text-center"
};
const _hoisted_16 = { key: 1 };
const _hoisted_17 = ["onClick"];
const _hoisted_18 = { class: "flex items-start space-x-3" };
const _hoisted_19 = { class: "flex-1" };
const _hoisted_20 = { class: "flex items-center justify-between mb-1" };
const _hoisted_21 = { class: "text-sm font-bold text-gray-800" };
const _hoisted_22 = { class: "text-[10px] text-gray-400 font-medium" };
const _hoisted_23 = { class: "text-xs text-gray-600 leading-relaxed" };
const _hoisted_24 = {
  key: 0,
  class: "absolute right-4 bottom-4 w-2 h-2 bg-blue-500 rounded-full"
};
const _hoisted_25 = {
  key: 0,
  class: "p-3 border-t border-gray-100 text-center bg-gray-50/30"
};
const _hoisted_26 = { class: "relative" };
const _hoisted_27 = { class: "w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center overflow-hidden" };
const _hoisted_28 = ["src"];
const _hoisted_29 = { class: "hidden sm:block text-left" };
const _hoisted_30 = { class: "text-sm font-medium text-gray-800" };
const _hoisted_31 = { class: "text-xs text-gray-500 capitalize" };
const _hoisted_32 = {
  key: 0,
  class: "absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-50"
};
const _hoisted_33 = { class: "p-3 border-b border-gray-200" };
const _hoisted_34 = { class: "font-medium text-gray-800" };
const _hoisted_35 = { class: "text-sm text-gray-600" };
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "StudentTopbar",
  emits: ["menu-click"],
  setup(__props) {
    const router = useRouter();
    const { user, notifications, unreadCount, markNotificationAsRead, isPlanExpired } = useAuth();
    const showNotifications = ref(false);
    const showUserMenu = ref(false);
    const getNotificationIcon = (type) => {
      switch (type) {
        case "event":
          return Calendar;
        case "subscription":
          return CreditCard;
        case "book":
          return Book;
        case "booking":
          return CircleCheckBig;
        case "queue":
          return Clock;
        default:
          return MessageSquare;
      }
    };
    const getNotificationIconClass = (type) => {
      switch (type) {
        case "event":
          return "bg-purple-100 text-purple-600";
        case "subscription":
          return "bg-green-100 text-green-600";
        case "book":
          return "bg-blue-100 text-blue-600";
        case "booking":
          return "bg-orange-100 text-orange-600";
        case "queue":
          return "bg-amber-100 text-amber-600";
        default:
          return "bg-gray-100 text-gray-600";
      }
    };
    const formatDate = (date) => {
      try {
        return formatDistanceToNow(new Date(date), { addSuffix: true });
      } catch (e) {
        return date;
      }
    };
    const getProfilePictureUrl = (path) => {
      if (path.startsWith("http")) return path;
      return `/storage/${path}`;
    };
    return (_ctx, _cache) => {
      const _component_router_link = resolveComponent("router-link");
      return openBlock(), createElementBlock(Fragment, null, [
        unref(isPlanExpired) ? (openBlock(), createElementBlock("div", _hoisted_1$2, [
          createBaseVNode("div", _hoisted_2$2, [
            createVNode(unref(TriangleAlert), { class: "w-4 h-4" }),
            _cache[4] || (_cache[4] = createBaseVNode("span", { class: "text-sm font-medium" }, "Your subscription has expired. Please renew to continue using all features.", -1))
          ]),
          createVNode(_component_router_link, {
            to: "/student/subscription",
            class: "text-xs font-bold underline hover:text-red-100"
          }, {
            default: withCtx(() => [..._cache[5] || (_cache[5] = [
              createTextVNode(" Renew Now ", -1)
            ])]),
            _: 1
          })
        ])) : createCommentVNode("", true),
        createBaseVNode("header", _hoisted_3$2, [
          createBaseVNode("div", _hoisted_4$2, [
            createBaseVNode("div", _hoisted_5$1, [
              createBaseVNode("button", {
                onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("menu-click")),
                class: "p-2 rounded-lg text-gray-600 hover:bg-gray-100 lg:hidden"
              }, [
                createVNode(unref(Menu), { class: "w-5 h-5" })
              ]),
              createBaseVNode("div", _hoisted_6$1, [
                createBaseVNode("h1", _hoisted_7$1, " Welcome back, " + toDisplayString(unref(user)?.name?.split(" ")[0]) + "! ", 1),
                _cache[6] || (_cache[6] = createBaseVNode("p", { class: "text-sm text-gray-600" }, " Ready to continue your studies? ", -1))
              ])
            ]),
            createBaseVNode("div", _hoisted_8$1, [
              createBaseVNode("div", _hoisted_9$1, [
                createBaseVNode("button", {
                  onClick: _cache[1] || (_cache[1] = ($event) => {
                    showNotifications.value = !showNotifications.value;
                    showUserMenu.value = false;
                  }),
                  class: "p-2 rounded-lg text-gray-600 hover:bg-gray-100 relative transition-colors",
                  title: "Notifications"
                }, [
                  createVNode(unref(Bell), { class: "w-5 h-5" }),
                  unref(unreadCount) > 0 ? (openBlock(), createElementBlock("span", _hoisted_10$1, toDisplayString(unref(unreadCount) > 9 ? "9+" : unref(unreadCount)), 1)) : createCommentVNode("", true)
                ]),
                showNotifications.value ? (openBlock(), createElementBlock("div", _hoisted_11, [
                  createBaseVNode("div", _hoisted_12, [
                    _cache[7] || (_cache[7] = createBaseVNode("h3", { class: "font-bold text-gray-800" }, "Notifications", -1)),
                    unref(unreadCount) > 0 ? (openBlock(), createElementBlock("span", _hoisted_13, toDisplayString(unref(unreadCount)) + " New ", 1)) : createCommentVNode("", true)
                  ]),
                  createBaseVNode("div", _hoisted_14, [
                    unref(notifications).length === 0 ? (openBlock(), createElementBlock("div", _hoisted_15, [
                      createVNode(unref(Bell), { class: "w-10 h-10 text-gray-200 mx-auto mb-3" }),
                      _cache[8] || (_cache[8] = createBaseVNode("p", { class: "text-sm text-gray-500" }, "No notifications yet", -1))
                    ])) : (openBlock(), createElementBlock("div", _hoisted_16, [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(unref(notifications), (notification) => {
                        return openBlock(), createElementBlock("div", {
                          key: notification.id,
                          class: normalizeClass(["p-4 border-b border-gray-50 hover:bg-gray-50 transition-colors cursor-pointer relative", { "bg-blue-50/30": !notification.is_read }]),
                          onClick: ($event) => unref(markNotificationAsRead)(notification.id)
                        }, [
                          createBaseVNode("div", _hoisted_18, [
                            createBaseVNode("div", {
                              class: normalizeClass(["p-2 rounded-lg", getNotificationIconClass(notification.type)])
                            }, [
                              (openBlock(), createBlock(resolveDynamicComponent(getNotificationIcon(notification.type)), { class: "w-4 h-4" }))
                            ], 2),
                            createBaseVNode("div", _hoisted_19, [
                              createBaseVNode("div", _hoisted_20, [
                                createBaseVNode("span", _hoisted_21, toDisplayString(notification.title), 1),
                                createBaseVNode("span", _hoisted_22, toDisplayString(formatDate(notification.created_at)), 1)
                              ]),
                              createBaseVNode("p", _hoisted_23, toDisplayString(notification.message), 1)
                            ])
                          ]),
                          !notification.is_read ? (openBlock(), createElementBlock("div", _hoisted_24)) : createCommentVNode("", true)
                        ], 10, _hoisted_17);
                      }), 128))
                    ]))
                  ]),
                  unref(notifications).length > 0 ? (openBlock(), createElementBlock("div", _hoisted_25, [
                    createBaseVNode("button", {
                      onClick: _cache[2] || (_cache[2] = ($event) => {
                        unref(router).push("/student/notifications");
                        showNotifications.value = false;
                      }),
                      class: "text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors"
                    }, " View All Notifications ")
                  ])) : createCommentVNode("", true)
                ])) : createCommentVNode("", true)
              ]),
              createBaseVNode("div", _hoisted_26, [
                createBaseVNode("button", {
                  onClick: _cache[3] || (_cache[3] = ($event) => showUserMenu.value = !showUserMenu.value),
                  class: "flex items-center space-x-2 px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-100"
                }, [
                  createBaseVNode("div", _hoisted_27, [
                    unref(user)?.profile_picture ? (openBlock(), createElementBlock("img", {
                      key: 0,
                      src: getProfilePictureUrl(unref(user).profile_picture),
                      alt: "Profile",
                      class: "w-full h-full object-cover"
                    }, null, 8, _hoisted_28)) : (openBlock(), createBlock(unref(User), {
                      key: 1,
                      class: "w-4 h-4 text-blue-600"
                    }))
                  ]),
                  createBaseVNode("div", _hoisted_29, [
                    createBaseVNode("div", _hoisted_30, toDisplayString(unref(user)?.name), 1),
                    createBaseVNode("div", _hoisted_31, toDisplayString(unref(user)?.user_type?.replace("_", " ")), 1)
                  ]),
                  createVNode(unref(ChevronDown), { class: "w-4 h-4" })
                ]),
                showUserMenu.value ? (openBlock(), createElementBlock("div", _hoisted_32, [
                  createBaseVNode("div", _hoisted_33, [
                    createBaseVNode("div", _hoisted_34, toDisplayString(unref(user)?.name), 1),
                    createBaseVNode("div", _hoisted_35, toDisplayString(unref(user)?.email), 1)
                  ])
                ])) : createCommentVNode("", true)
              ])
            ])
          ])
        ])
      ], 64);
    };
  }
});
const _hoisted_1$1 = {
  key: 0,
  class: "fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-md"
};
const _hoisted_2$1 = { class: "bg-white rounded-[2rem] p-10 max-w-md w-full shadow-2xl transform transition-all scale-100 border border-blue-100" };
const _hoisted_3$1 = { class: "w-24 h-24 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce" };
const _hoisted_4$1 = { class: "text-3xl font-black text-gray-800 mb-3 text-center" };
const _hoisted_5 = { class: "text-gray-500 mb-6 text-center leading-relaxed" };
const _hoisted_6 = {
  key: 0,
  class: "p-4 bg-orange-50 rounded-xl border border-orange-100 mb-8 text-center"
};
const _hoisted_7 = { class: "grid grid-cols-2 gap-4 mb-8" };
const _hoisted_8 = ["onClick"];
const _hoisted_9 = { class: "flex flex-col gap-3" };
const _hoisted_10 = ["disabled"];
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "GlobalExtensionModal",
  setup(__props) {
    const { showExtensionModal, expiredBooking, extendSeatBooking } = useApp();
    const selectedExtension = ref(60);
    const extending = ref(false);
    const isExpired = computed(() => {
      if (!expiredBooking.value) return false;
      return new Date(expiredBooking.value.scheduled_end_time) <= /* @__PURE__ */ new Date();
    });
    const { showError } = useSwal();
    const handleExtend = async () => {
      if (!expiredBooking.value) return;
      extending.value = true;
      try {
        const success = await extendSeatBooking(expiredBooking.value.id, selectedExtension.value);
        if (success) {
          showExtensionModal.value = false;
          expiredBooking.value = null;
        } else {
          showError("Extension Failed", "Could not extend booking. The seat might be reserved by someone else.");
        }
      } catch (error) {
        console.error("Extension error:", error);
      } finally {
        extending.value = false;
      }
    };
    const closeModal = () => {
      showExtensionModal.value = false;
      expiredBooking.value = null;
    };
    return (_ctx, _cache) => {
      return unref(showExtensionModal) ? (openBlock(), createElementBlock("div", _hoisted_1$1, [
        createBaseVNode("div", _hoisted_2$1, [
          createBaseVNode("div", _hoisted_3$1, [
            createVNode(unref(Clock), { class: "w-12 h-12" })
          ]),
          createBaseVNode("h2", _hoisted_4$1, toDisplayString(isExpired.value ? "Time's Up!" : "Session Ending Soon"), 1),
          createBaseVNode("p", _hoisted_5, " Your session for Seat " + toDisplayString(unref(expiredBooking)?.seat?.seat_number) + " " + toDisplayString(isExpired.value ? "has ended" : "will end in 15 minutes") + ". ", 1),
          !isExpired.value ? (openBlock(), createElementBlock("div", _hoisted_6, [..._cache[0] || (_cache[0] = [
            createBaseVNode("p", { class: "text-[10px] text-orange-700 font-bold uppercase tracking-widest leading-tight" }, " Extension Lock Notice ", -1),
            createBaseVNode("p", { class: "text-xs text-orange-600 mt-1" }, " You must extend now. Within 10 minutes of expiry, priority shifts to the seat queue. ", -1)
          ])])) : createCommentVNode("", true),
          createBaseVNode("div", _hoisted_7, [
            (openBlock(), createElementBlock(Fragment, null, renderList([30, 60, 120, 240], (mins) => {
              return createBaseVNode("button", {
                key: mins,
                onClick: ($event) => selectedExtension.value = mins,
                class: normalizeClass([
                  "py-4 rounded-2xl font-bold transition-all border-2",
                  selectedExtension.value === mins ? "bg-blue-600 border-blue-600 text-white shadow-lg scale-105" : "bg-gray-50 border-transparent text-gray-600 hover:bg-gray-100"
                ])
              }, " +" + toDisplayString(mins >= 60 ? mins / 60 + "h" : mins + "m"), 11, _hoisted_8);
            }), 64))
          ]),
          createBaseVNode("div", _hoisted_9, [
            createBaseVNode("button", {
              onClick: handleExtend,
              disabled: extending.value,
              class: "w-full bg-blue-600 text-white py-5 rounded-2xl font-black hover:bg-blue-700 transition-all shadow-xl hover:shadow-blue-200 disabled:opacity-50"
            }, toDisplayString(extending.value ? "Extending..." : "Extend Session"), 9, _hoisted_10),
            createBaseVNode("button", {
              onClick: closeModal,
              class: "w-full bg-white text-gray-400 py-4 rounded-2xl font-bold hover:text-gray-600 transition-all"
            }, " No thanks, I'm done ")
          ])
        ])
      ])) : createCommentVNode("", true);
    };
  }
});
const _hoisted_1 = { key: 0 };
const _hoisted_2 = {
  key: 1,
  class: "min-h-screen bg-gray-50 flex"
};
const _hoisted_3 = { class: "flex-1 flex flex-col overflow-hidden" };
const _hoisted_4 = { class: "flex-1 overflow-x-hidden overflow-y-auto bg-gray-50 p-6" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Layout",
  setup(__props) {
    const { user } = useAuth();
    const sidebarOpen = ref(false);
    return (_ctx, _cache) => {
      return !unref(user) ? (openBlock(), createElementBlock("div", _hoisted_1, [
        renderSlot(_ctx.$slots, "default")
      ])) : (openBlock(), createElementBlock("div", _hoisted_2, [
        createVNode(_sfc_main$4, {
          "is-open": sidebarOpen.value,
          onClose: _cache[0] || (_cache[0] = ($event) => sidebarOpen.value = false)
        }, null, 8, ["is-open"]),
        createBaseVNode("div", _hoisted_3, [
          createVNode(_sfc_main$3, {
            onMenuClick: _cache[1] || (_cache[1] = ($event) => sidebarOpen.value = true)
          }),
          createBaseVNode("main", _hoisted_4, [
            renderSlot(_ctx.$slots, "default")
          ])
        ]),
        sidebarOpen.value ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: "fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden",
          onClick: _cache[2] || (_cache[2] = ($event) => sidebarOpen.value = false)
        })) : createCommentVNode("", true),
        createVNode(_sfc_main$2)
      ]));
    };
  }
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "StudentApp",
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_router_view = resolveComponent("router-view");
      return openBlock(), createBlock(_sfc_main$1, null, {
        default: withCtx(() => [
          createVNode(_component_router_view)
        ]),
        _: 1
      });
    };
  }
});
export {
  _sfc_main as default
};
