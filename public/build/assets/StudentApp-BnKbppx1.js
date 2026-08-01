import { d as defineComponent, x as useAuth, r as ref, c as computed, E as watch, G as useRoute, o as onMounted, H as onUnmounted, a as createElementBlock, F as Fragment, b as createBaseVNode, h as createBlock, n as normalizeClass, j as createCommentVNode, e as createStaticVNode, z as withModifiers, f as createVNode, u as unref, k as renderList, I as Teleport, q as normalizeStyle, t as toDisplayString, g as resolveComponent, w as withCtx, i as createTextVNode, m as resolveDynamicComponent, l as openBlock, C as useRouter, J as useApp, K as renderSlot } from "./main-C124sHqx.js";
import { u as useGeolocation } from "./useGeolocation-CQ1pPjX4.js";
import { u as useSwal } from "./useSwal-pQW_XkRe.js";
import { X } from "./x-eq55W8eI.js";
import { B as BookMarked } from "./book-marked-CBQ76S2R.js";
import { C as ChevronDown } from "./chevron-down-CR7XalXd.js";
import { C as ChevronLeft } from "./chevron-left-Cx2xK3nf.js";
import { E as EllipsisVertical } from "./ellipsis-vertical-vBXkZtf5.js";
import { L as LogOut } from "./log-out-D5Qzh1gh.js";
import { H as House } from "./house-KbCem5C-.js";
import { M as MapPin } from "./map-pin-CvyXaBel.js";
import { B as BookOpen } from "./book-open-BVgq79sG.js";
import { C as Calendar } from "./calendar-Bu5qRmqf.js";
import { C as Clock } from "./clock-B_R0d3h4.js";
import { A as Armchair } from "./armchair-B5NjzUmb.js";
import { C as CalendarCheck } from "./calendar-check-C3Eg6Oiw.js";
import { C as ChartColumn } from "./chart-column-frrmGSgC.js";
import { C as CreditCard } from "./credit-card-DHJlnnPv.js";
import { L as LifeBuoy } from "./life-buoy-DY1lRXky.js";
import { U as User } from "./user-JzVAjYrB.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import { T as TriangleAlert } from "./triangle-alert-Db300I4d.js";
import { M as Menu } from "./menu-TOdLSAxP.js";
import { B as Bell } from "./bell-DYC05jwu.js";
import { M as MessageSquare } from "./message-square-BdC8VfM3.js";
import { C as CircleCheckBig } from "./circle-check-big-CO4gn6qh.js";
import { B as Book } from "./book-BxAJd7Fc.js";
import { f as formatDistanceToNow } from "./formatDistanceToNow-CgRkJOVj.js";
/* empty css               */
import "./createLucideIcon-8y9GOHiU.js";
import "./constructNow-CQ6Py-t8.js";
import "./en-US-CtEcOBul.js";
const _hoisted_1$3 = {
  key: 0,
  class: "flex items-center space-x-3 animate-fade-in"
};
const _hoisted_2$3 = {
  key: 0,
  class: "flex flex-col text-left"
};
const _hoisted_3$3 = {
  key: 0,
  class: "text-[10px] font-semibold text-white/60 uppercase tracking-widest mb-3 px-3 text-left animate-fade-in"
};
const _hoisted_4$3 = {
  key: 1,
  class: "h-px bg-white/40 my-3 mx-1"
};
const _hoisted_5$2 = { class: "space-y-1" };
const _hoisted_6$2 = ["onMouseenter"];
const _hoisted_7$2 = {
  key: 0,
  class: "tracking-wide animate-fade-in"
};
const _hoisted_8$2 = { class: "relative" };
const _hoisted_9$2 = {
  key: 0,
  class: "tracking-wide animate-fade-in flex-1"
};
const _hoisted_10$2 = {
  key: 1,
  class: "ml-auto flex items-center animate-fade-in"
};
const _hoisted_11$1 = { class: "relative ml-6 mt-1 space-y-1" };
const _hoisted_12$1 = ["onMouseenter"];
const _hoisted_13$1 = {
  key: 0,
  class: "tracking-wide animate-fade-in"
};
const _hoisted_14$1 = {
  key: 0,
  class: "text-[10px] font-semibold text-white/60 uppercase tracking-widest mb-3 px-3 text-left animate-fade-in"
};
const _hoisted_15$1 = {
  key: 1,
  class: "h-px bg-white/40 my-3 mx-1"
};
const _hoisted_16$1 = { class: "space-y-1" };
const _hoisted_17$1 = ["onMouseenter"];
const _hoisted_18$1 = {
  key: 0,
  class: "tracking-wide animate-fade-in"
};
const _hoisted_19$1 = { class: "p-4 border-t border-white/10 bg-transparent z-10 flex flex-col justify-end flex-shrink-0 min-h-0" };
const _hoisted_20$1 = { class: "relative" };
const _hoisted_21$1 = { class: "w-9 h-9 rounded-full bg-white/15 border border-white/10 text-white font-bold flex items-center justify-center text-xs flex-shrink-0 overflow-hidden" };
const _hoisted_22$1 = ["src"];
const _hoisted_23$1 = { key: 1 };
const _hoisted_24$1 = {
  key: 0,
  class: "flex-1 ml-3 min-w-0 text-left"
};
const _hoisted_25$1 = { class: "text-xs font-bold text-white truncate block" };
const _hoisted_26$1 = { class: "text-[10px] text-blue-200 truncate block mt-0.5" };
const _hoisted_27$1 = {
  key: 1,
  class: "p-1 hover:bg-white/10 rounded-lg transition-colors"
};
const _hoisted_28$1 = {
  key: 0,
  class: "absolute bottom-14 left-0 right-0 bg-blue-600 border border-slate-400 rounded-2xl shadow-xl p-1.5 z-[100] flex flex-col space-y-0.5 animate-fade-in text-left"
};
const _hoisted_29$1 = { class: "px-3 py-1.5 text-[10px] font-bold text-white/60 uppercase tracking-widest border-b border-white/10 mb-1" };
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "StudentSidebar",
  props: {
    isOpen: { type: Boolean },
    isCollapsed: { type: Boolean }
  },
  emits: ["close", "toggle-collapse"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const route = useRoute();
    const { logout: authLogout, user } = useAuth();
    const { showConfirm } = useSwal();
    const isDesktop = ref(window.innerWidth >= 1024);
    const handleResize = () => {
      isDesktop.value = window.innerWidth >= 1024;
    };
    const showCollapsed = computed(() => props.isCollapsed && isDesktop.value);
    const showReservationsPopover = ref(false);
    const showProfileDropdown = ref(false);
    const activeTooltipText = ref("");
    const activeTooltipTop = ref(0);
    const showGlobalTooltip = ref(false);
    const reservationsPopoverTop = ref(0);
    const profileDropdownBottom = ref(0);
    const handleMouseEnter = (event, label) => {
      if (!showCollapsed.value) return;
      if (label === "Reservations" && showReservationsPopover.value) return;
      if (label === "User Profile & Menu" && showProfileDropdown.value) return;
      const target = event.currentTarget;
      const rect = target.getBoundingClientRect();
      activeTooltipText.value = label;
      activeTooltipTop.value = rect.top + rect.height / 2;
      showGlobalTooltip.value = true;
    };
    const handleMouseLeave = () => {
      showGlobalTooltip.value = false;
    };
    const handleLogout = async () => {
      showProfileDropdown.value = false;
      if (await showConfirm("Sign Out", "Are you sure you want to sign out?", "Yes, Sign Out")) {
        await authLogout();
      }
    };
    const handleBrandClick = () => {
      if (isDesktop.value) {
        emit("toggle-collapse");
      }
    };
    const isReservationsExpanded = ref(false);
    const handleReservationsToggle = (event) => {
      event.stopPropagation();
      if (showCollapsed.value) {
        const target = event.currentTarget;
        const rect = target.getBoundingClientRect();
        reservationsPopoverTop.value = rect.top;
        showReservationsPopover.value = !showReservationsPopover.value;
        if (showReservationsPopover.value) {
          showGlobalTooltip.value = false;
        }
      } else {
        isReservationsExpanded.value = !isReservationsExpanded.value;
      }
    };
    watch(showCollapsed, (collapsed) => {
      if (collapsed) {
        isReservationsExpanded.value = false;
        showProfileDropdown.value = false;
        showReservationsPopover.value = false;
      }
    });
    const isReservationsDropdownActive = computed(() => {
      return route.path.includes("/student/my-bookings") || route.path.includes("/student/my-reservations");
    });
    const userInitials = computed(() => {
      if (!user.value?.name) return "ST";
      const parts = user.value.name.split(" ");
      if (parts.length >= 2) {
        return (parts[0][0] + parts[1][0]).toUpperCase();
      }
      return parts[0][0].toUpperCase();
    });
    const toggleProfileDropdown = (event) => {
      event.stopPropagation();
      if (showCollapsed.value) {
        const target = event.currentTarget;
        const rect = target.getBoundingClientRect();
        profileDropdownBottom.value = window.innerHeight - rect.bottom;
        if (!showProfileDropdown.value) {
          showGlobalTooltip.value = false;
        }
      }
      showProfileDropdown.value = !showProfileDropdown.value;
    };
    const closeAllDropdowns = () => {
      showProfileDropdown.value = false;
      showReservationsPopover.value = false;
      handleMouseLeave();
    };
    onMounted(() => {
      if (route.path.includes("/student/my-bookings") || route.path.includes("/student/my-reservations")) {
        isReservationsExpanded.value = true;
      }
      document.addEventListener("click", closeAllDropdowns);
      window.addEventListener("resize", handleResize);
    });
    onUnmounted(() => {
      document.removeEventListener("click", closeAllDropdowns);
      window.removeEventListener("resize", handleResize);
    });
    const mainNavItems = [
      { path: "/student/dashboard", label: "Dashboard", icon: House, exact: true },
      { path: "/student/libraries", label: "Find Library", icon: MapPin },
      { path: "/student/books", label: "Browse Books", icon: BookOpen },
      { path: "/student/events", label: "Events & Seminars", icon: Calendar },
      { path: "/student/my-queue", label: "Waitlist", icon: Clock }
    ];
    const reservationsSubItems = [
      { path: "/student/my-bookings", label: "Seat Reservations", icon: Armchair },
      { path: "/student/my-reservations", label: "Book Reservations", icon: BookMarked }
    ];
    const quickAccessItems = [
      { path: "/student/attendance", label: "My Attendance", icon: CalendarCheck },
      { path: "/student/analytics", label: "My Analytics", icon: ChartColumn },
      { path: "/student/subscription", label: "Subscription", icon: CreditCard },
      { path: "/student/support", label: "Support & Complaints", icon: LifeBuoy }
    ];
    const getProfilePictureUrl = (path) => {
      if (path.startsWith("http")) return path;
      return `/storage/${path}`;
    };
    return (_ctx, _cache) => {
      const _component_router_link = resolveComponent("router-link");
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("aside", {
          class: normalizeClass([
            "fixed inset-y-0 left-0 z-50 flex flex-col bg-blue-600 border-r border-white/10 shadow-2xl transition-all duration-300 ease-in-out overflow-x-hidden overscroll-contain",
            // Mobile: always full width sidebar, translate in/out
            "w-72",
            // Desktop overrides: sticky h-screen locks height to exact viewport
            __props.isCollapsed ? "lg:w-20 lg:shadow-none lg:sticky lg:top-0 lg:h-screen lg:overflow-hidden" : "lg:w-64 lg:shadow-none lg:sticky lg:top-0 lg:h-screen lg:overflow-hidden",
            // Translate: hidden on mobile unless open, always visible on desktop
            __props.isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
          ]),
          style: { "overscroll-behavior": "contain" }
        }, [
          createBaseVNode("div", {
            onClick: handleBrandClick,
            class: normalizeClass([
              "flex items-center transition-all duration-300 border-b border-white/10 flex-shrink-0 cursor-pointer hover:bg-white/10 active:bg-white/20 select-none relative group",
              __props.isCollapsed ? "lg:p-5 lg:justify-center p-5 justify-between" : "p-5"
            ])
          }, [
            !showCollapsed.value ? (openBlock(), createElementBlock("div", _hoisted_1$3, [
              _cache[14] || (_cache[14] = createStaticVNode('<div class="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center text-white shadow-md shadow-white/5 group-hover:scale-105 transition-transform flex-shrink-0" data-v-1e4c628d><svg viewBox="0 0 32 32" class="w-5 h-5 text-white" fill="currentColor" data-v-1e4c628d><circle cx="11" cy="16" r="4.5" data-v-1e4c628d></circle><circle cx="21" cy="16" r="4.5" data-v-1e4c628d></circle><rect x="11" y="13.5" width="10" height="5" data-v-1e4c628d></rect></svg></div>', 1)),
              !__props.isCollapsed || !isDesktop.value ? (openBlock(), createElementBlock("div", _hoisted_2$3, [..._cache[13] || (_cache[13] = [
                createBaseVNode("h1", { class: "text-sm font-bold text-white tracking-tight leading-none animate-fade-in" }, "SmartLib", -1),
                createBaseVNode("p", { class: "text-[9px] font-bold text-blue-200 tracking-wider uppercase mt-1 leading-none animate-fade-in" }, "Student Portal", -1)
              ])])) : createCommentVNode("", true)
            ])) : createCommentVNode("", true),
            showCollapsed.value ? (openBlock(), createElementBlock("button", {
              key: 1,
              onClick: _cache[0] || (_cache[0] = withModifiers(($event) => _ctx.$emit("toggle-collapse"), ["stop"])),
              class: "hidden lg:flex w-9 h-9 items-center justify-center bg-white/15 hover:bg-white/25 active:bg-white/35 text-white rounded-full shadow-md shadow-white/5 transition-all duration-200 cursor-pointer animate-fade-in flex-shrink-0"
            }, [..._cache[15] || (_cache[15] = [
              createBaseVNode("svg", {
                viewBox: "0 0 32 32",
                class: "w-5 h-5 text-white",
                fill: "currentColor"
              }, [
                createBaseVNode("circle", {
                  cx: "11",
                  cy: "16",
                  r: "4.5"
                }),
                createBaseVNode("circle", {
                  cx: "21",
                  cy: "16",
                  r: "4.5"
                }),
                createBaseVNode("rect", {
                  x: "11",
                  y: "13.5",
                  width: "10",
                  height: "5"
                })
              ], -1)
            ])])) : createCommentVNode("", true),
            createBaseVNode("button", {
              onClick: _cache[1] || (_cache[1] = withModifiers(($event) => _ctx.$emit("close"), ["stop"])),
              class: "lg:hidden p-1.5 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
            }, [
              createVNode(unref(X), { class: "w-4 h-4" })
            ])
          ], 2),
          createBaseVNode("nav", {
            onScroll: closeAllDropdowns,
            class: normalizeClass([
              "flex-1 px-2.5 py-5 space-y-5 transition-all duration-300 overflow-y-auto overflow-x-hidden overscroll-contain"
            ]),
            style: { "scrollbar-width": "none", "-ms-overflow-style": "none", "overscroll-behavior": "contain" }
          }, [
            createBaseVNode("div", null, [
              !showCollapsed.value ? (openBlock(), createElementBlock("h3", _hoisted_3$3, " Menu ")) : (openBlock(), createElementBlock("div", _hoisted_4$3)),
              createBaseVNode("div", _hoisted_5$2, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(mainNavItems.slice(0, 3), (item) => {
                  return openBlock(), createBlock(_component_router_link, {
                    key: item.path,
                    to: item.path,
                    onClick: _cache[2] || (_cache[2] = ($event) => _ctx.$emit("close"))
                  }, {
                    default: withCtx(({ isActive: isLinkActive }) => [
                      createBaseVNode("div", {
                        onMouseenter: ($event) => handleMouseEnter($event, item.label),
                        onMouseleave: handleMouseLeave,
                        class: normalizeClass([
                          "flex items-center transition-all duration-200 group cursor-pointer relative",
                          showCollapsed.value ? "justify-center w-12 h-12 mx-auto my-1 rounded-xl animate-fade-in" : "px-3 py-3 mx-1.5 my-1 space-x-2 rounded-xl font-medium text-sm",
                          isLinkActive ? "bg-white text-blue-600 shadow-md shadow-blue-950/15 animate-fade-in" : "text-white hover:bg-white/10"
                        ])
                      }, [
                        (openBlock(), createBlock(resolveDynamicComponent(item.icon), {
                          class: normalizeClass([
                            "w-5 h-5 transition-colors",
                            isLinkActive ? "text-blue-600" : "text-white/90 group-hover:text-white"
                          ])
                        }, null, 8, ["class"])),
                        !showCollapsed.value ? (openBlock(), createElementBlock("span", _hoisted_7$2, toDisplayString(item.label), 1)) : createCommentVNode("", true)
                      ], 42, _hoisted_6$2)
                    ]),
                    _: 2
                  }, 1032, ["to"]);
                }), 128)),
                createBaseVNode("div", _hoisted_8$2, [
                  createBaseVNode("div", {
                    onClick: handleReservationsToggle,
                    onMouseenter: _cache[3] || (_cache[3] = ($event) => handleMouseEnter($event, "Reservations")),
                    onMouseleave: handleMouseLeave,
                    class: normalizeClass([
                      "flex items-center transition-all duration-200 group cursor-pointer relative py-3 select-none",
                      showCollapsed.value ? "justify-center w-12 h-12 mx-auto my-1 rounded-xl" : "px-3 py-3 mx-1.5 my-1 space-x-2 rounded-xl font-medium text-sm",
                      isReservationsDropdownActive.value && showCollapsed.value ? "bg-white text-blue-600 shadow-md" : "",
                      isReservationsDropdownActive.value && !showCollapsed.value ? "text-white font-semibold" : "text-white hover:bg-white/10"
                    ])
                  }, [
                    createVNode(unref(BookMarked), {
                      class: normalizeClass([
                        "w-5 h-5 transition-colors",
                        isReservationsDropdownActive.value && showCollapsed.value ? "text-blue-600" : isReservationsDropdownActive.value ? "text-white" : "text-white/90 group-hover:text-white"
                      ])
                    }, null, 8, ["class"]),
                    !showCollapsed.value ? (openBlock(), createElementBlock("span", _hoisted_9$2, "Reservations")) : createCommentVNode("", true),
                    !showCollapsed.value ? (openBlock(), createElementBlock("span", _hoisted_10$2, [
                      isReservationsExpanded.value ? (openBlock(), createBlock(unref(ChevronDown), {
                        key: 0,
                        class: "w-3.5 h-3.5 text-white font-bold"
                      })) : (openBlock(), createBlock(unref(ChevronLeft), {
                        key: 1,
                        class: "w-3.5 h-3.5 text-white/80 group-hover:text-white"
                      }))
                    ])) : createCommentVNode("", true)
                  ], 34),
                  (openBlock(), createBlock(Teleport, { to: "body" }, [
                    showReservationsPopover.value && showCollapsed.value ? (openBlock(), createElementBlock("div", {
                      key: 0,
                      class: "fixed z-[9999] animate-fade-in w-48 bg-blue-600 border border-white/10 rounded-2xl shadow-xl p-1.5 flex flex-col space-y-1 text-left",
                      style: normalizeStyle({
                        top: `${reservationsPopoverTop.value}px`,
                        left: "80px"
                      }),
                      onClick: _cache[5] || (_cache[5] = withModifiers(() => {
                      }, ["stop"]))
                    }, [
                      _cache[16] || (_cache[16] = createBaseVNode("div", { class: "px-3 py-1.5 text-[10px] font-semibold text-white/60 uppercase tracking-widest border-b border-white/10 mb-1" }, " Reservations ", -1)),
                      (openBlock(), createElementBlock(Fragment, null, renderList(reservationsSubItems, (subItem) => {
                        return createVNode(_component_router_link, {
                          key: subItem.path,
                          to: subItem.path,
                          onClick: _cache[4] || (_cache[4] = ($event) => {
                            showReservationsPopover.value = false;
                            _ctx.$emit("close");
                          })
                        }, {
                          default: withCtx(({ isActive: isSubActive }) => [
                            createBaseVNode("div", {
                              class: normalizeClass([
                                "flex items-center space-x-2.5 px-3 py-2 rounded-xl transition-colors text-xs font-semibold cursor-pointer",
                                isSubActive ? "text-blue-600 bg-white shadow-sm" : "text-white hover:bg-white/10"
                              ])
                            }, [
                              (openBlock(), createBlock(resolveDynamicComponent(subItem.icon), { class: "w-4 h-4" })),
                              createBaseVNode("span", null, toDisplayString(subItem.label), 1)
                            ], 2)
                          ]),
                          _: 2
                        }, 1032, ["to"]);
                      }), 64))
                    ], 4)) : createCommentVNode("", true)
                  ])),
                  createBaseVNode("div", {
                    class: normalizeClass([
                      "reservations-submenu overflow-hidden transition-all duration-300 ease-in-out",
                      isReservationsExpanded.value && !showCollapsed.value ? "submenu-open" : "submenu-closed"
                    ])
                  }, [
                    createBaseVNode("div", _hoisted_11$1, [
                      (openBlock(), createElementBlock(Fragment, null, renderList(reservationsSubItems, (subItem, index) => {
                        return createBaseVNode("div", {
                          key: subItem.path,
                          class: "relative pl-5"
                        }, [
                          createBaseVNode("div", {
                            class: normalizeClass([
                              "absolute left-2.5 w-px bg-white/20",
                              index === reservationsSubItems.length - 1 ? "top-0 h-1/2" : "top-0 bottom-0"
                            ])
                          }, null, 2),
                          _cache[17] || (_cache[17] = createBaseVNode("div", { class: "absolute left-2.5 top-1/2 -translate-y-1/2 w-3 h-px bg-white/20" }, null, -1)),
                          createVNode(_component_router_link, {
                            to: subItem.path,
                            onClick: _cache[6] || (_cache[6] = ($event) => _ctx.$emit("close"))
                          }, {
                            default: withCtx(({ isActive: isSubActive }) => [
                              createBaseVNode("div", {
                                class: normalizeClass([
                                  "flex items-center space-x-2.5 px-3 py-2 rounded-xl transition-all text-xs font-semibold cursor-pointer",
                                  isSubActive ? "text-blue-600 bg-white shadow-sm" : "text-white hover:bg-white/10"
                                ])
                              }, [
                                (openBlock(), createBlock(resolveDynamicComponent(subItem.icon), {
                                  class: normalizeClass([
                                    "w-4 h-4",
                                    isSubActive ? "text-blue-600" : "text-white/80 group-hover:text-white"
                                  ])
                                }, null, 8, ["class"])),
                                createBaseVNode("span", null, toDisplayString(subItem.label), 1)
                              ], 2)
                            ]),
                            _: 2
                          }, 1032, ["to"])
                        ]);
                      }), 64))
                    ])
                  ], 2)
                ]),
                (openBlock(true), createElementBlock(Fragment, null, renderList(mainNavItems.slice(3), (item) => {
                  return openBlock(), createBlock(_component_router_link, {
                    key: item.path,
                    to: item.path,
                    onClick: _cache[7] || (_cache[7] = ($event) => _ctx.$emit("close"))
                  }, {
                    default: withCtx(({ isActive: isLinkActive }) => [
                      createBaseVNode("div", {
                        onMouseenter: ($event) => handleMouseEnter($event, item.label),
                        onMouseleave: handleMouseLeave,
                        class: normalizeClass([
                          "flex items-center transition-all duration-200 group cursor-pointer relative",
                          showCollapsed.value ? "justify-center w-12 h-12 mx-auto my-1 rounded-xl animate-fade-in" : "px-3 py-3 mx-1.5 my-1 space-x-2 rounded-xl font-medium text-sm",
                          isLinkActive ? "bg-white text-blue-600 shadow-md shadow-blue-950/15 animate-fade-in" : "text-white hover:bg-white/10"
                        ])
                      }, [
                        (openBlock(), createBlock(resolveDynamicComponent(item.icon), {
                          class: normalizeClass([
                            "w-5 h-5 transition-colors",
                            isLinkActive ? "text-blue-600" : "text-white/90 group-hover:text-white"
                          ])
                        }, null, 8, ["class"])),
                        !showCollapsed.value ? (openBlock(), createElementBlock("span", _hoisted_13$1, toDisplayString(item.label), 1)) : createCommentVNode("", true)
                      ], 42, _hoisted_12$1)
                    ]),
                    _: 2
                  }, 1032, ["to"]);
                }), 128))
              ])
            ]),
            createBaseVNode("div", null, [
              !showCollapsed.value ? (openBlock(), createElementBlock("h3", _hoisted_14$1, " Others ")) : (openBlock(), createElementBlock("div", _hoisted_15$1)),
              createBaseVNode("div", _hoisted_16$1, [
                (openBlock(), createElementBlock(Fragment, null, renderList(quickAccessItems, (item) => {
                  return createVNode(_component_router_link, {
                    key: item.path,
                    to: item.path,
                    onClick: _cache[8] || (_cache[8] = ($event) => _ctx.$emit("close"))
                  }, {
                    default: withCtx(({ isActive: isLinkActive }) => [
                      createBaseVNode("div", {
                        onMouseenter: ($event) => handleMouseEnter($event, item.label),
                        onMouseleave: handleMouseLeave,
                        class: normalizeClass([
                          "flex items-center transition-all duration-200 group cursor-pointer relative",
                          showCollapsed.value ? "justify-center w-12 h-12 mx-auto my-1 rounded-xl animate-fade-in" : "px-3 py-3 mx-1.5 my-1 space-x-2 rounded-xl font-medium text-sm",
                          isLinkActive ? "bg-white text-blue-600 shadow-md shadow-blue-950/15 animate-fade-in" : "text-white hover:bg-white/10"
                        ])
                      }, [
                        (openBlock(), createBlock(resolveDynamicComponent(item.icon), {
                          class: normalizeClass([
                            "w-5 h-5 transition-colors",
                            isLinkActive ? "text-blue-600" : "text-white/90 group-hover:text-white"
                          ])
                        }, null, 8, ["class"])),
                        !showCollapsed.value ? (openBlock(), createElementBlock("span", _hoisted_18$1, toDisplayString(item.label), 1)) : createCommentVNode("", true)
                      ], 42, _hoisted_17$1)
                    ]),
                    _: 2
                  }, 1032, ["to"]);
                }), 64))
              ])
            ])
          ], 32),
          createBaseVNode("div", _hoisted_19$1, [
            createBaseVNode("div", _hoisted_20$1, [
              createBaseVNode("div", {
                onMouseenter: _cache[9] || (_cache[9] = ($event) => handleMouseEnter($event, "User Profile & Menu")),
                onMouseleave: handleMouseLeave,
                class: normalizeClass([
                  "flex items-center justify-between rounded-2xl hover:bg-white/10 transition-colors relative cursor-pointer group",
                  __props.isCollapsed && isDesktop.value ? "p-1 justify-center" : "p-2"
                ]),
                onClick: toggleProfileDropdown
              }, [
                createBaseVNode("div", _hoisted_21$1, [
                  unref(user)?.profile_picture ? (openBlock(), createElementBlock("img", {
                    key: 0,
                    src: getProfilePictureUrl(unref(user).profile_picture),
                    alt: "Profile",
                    class: "w-full h-full object-cover"
                  }, null, 8, _hoisted_22$1)) : (openBlock(), createElementBlock("span", _hoisted_23$1, toDisplayString(userInitials.value), 1))
                ]),
                !showCollapsed.value ? (openBlock(), createElementBlock("div", _hoisted_24$1, [
                  createBaseVNode("span", _hoisted_25$1, toDisplayString(unref(user)?.name), 1),
                  createBaseVNode("span", _hoisted_26$1, toDisplayString(unref(user)?.email), 1)
                ])) : createCommentVNode("", true),
                !showCollapsed.value ? (openBlock(), createElementBlock("div", _hoisted_27$1, [
                  createVNode(unref(EllipsisVertical), { class: "w-4 h-4 text-white/80 hover:text-white" })
                ])) : createCommentVNode("", true)
              ], 34),
              showProfileDropdown.value && !showCollapsed.value ? (openBlock(), createElementBlock("div", _hoisted_28$1, [
                createVNode(_component_router_link, {
                  to: "/student/profile",
                  onClick: _cache[10] || (_cache[10] = ($event) => showProfileDropdown.value = false),
                  class: "flex items-center space-x-2.5 px-3 py-2 text-xs font-semibold text-white hover:bg-white/10 rounded-xl transition-colors"
                }, {
                  default: withCtx(() => [
                    createVNode(unref(User), { class: "w-4 h-4 text-white/80" }),
                    _cache[18] || (_cache[18] = createBaseVNode("span", null, "My Profile", -1))
                  ]),
                  _: 1
                }),
                createBaseVNode("button", {
                  onClick: handleLogout,
                  class: "w-full flex items-center space-x-2.5 px-3 py-2 text-xs font-bold text-red-200 hover:bg-red-950/30 rounded-xl transition-colors text-left"
                }, [
                  createVNode(unref(LogOut), { class: "w-4 h-4" }),
                  _cache[19] || (_cache[19] = createBaseVNode("span", null, "Sign Out", -1))
                ])
              ])) : createCommentVNode("", true),
              (openBlock(), createBlock(Teleport, { to: "body" }, [
                showProfileDropdown.value && showCollapsed.value ? (openBlock(), createElementBlock("div", {
                  key: 0,
                  class: "fixed z-[9999] animate-fade-in w-48 bg-blue-600 border border-white/10 rounded-2xl shadow-xl p-1.5 flex flex-col space-y-0.5 text-left",
                  style: normalizeStyle({
                    bottom: `${profileDropdownBottom.value}px`,
                    left: "80px"
                  }),
                  onClick: _cache[12] || (_cache[12] = withModifiers(() => {
                  }, ["stop"]))
                }, [
                  createBaseVNode("div", _hoisted_29$1, toDisplayString(unref(user)?.name), 1),
                  createVNode(_component_router_link, {
                    to: "/student/profile",
                    onClick: _cache[11] || (_cache[11] = ($event) => showProfileDropdown.value = false),
                    class: "flex items-center space-x-2.5 px-3 py-2 text-xs font-semibold text-white hover:bg-white/10 rounded-xl transition-colors"
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(User), { class: "w-4 h-4 text-white/80" }),
                      _cache[20] || (_cache[20] = createBaseVNode("span", null, "My Profile", -1))
                    ]),
                    _: 1
                  }),
                  createBaseVNode("button", {
                    onClick: handleLogout,
                    class: "w-full flex items-center space-x-2.5 px-3 py-2 text-xs font-bold text-red-200 hover:bg-red-950/30 rounded-xl transition-colors text-left"
                  }, [
                    createVNode(unref(LogOut), { class: "w-4 h-4" }),
                    _cache[21] || (_cache[21] = createBaseVNode("span", null, "Sign Out", -1))
                  ])
                ], 4)) : createCommentVNode("", true)
              ]))
            ])
          ])
        ], 2),
        (openBlock(), createBlock(Teleport, { to: "body" }, [
          showGlobalTooltip.value ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: "fixed bg-slate-900 text-white text-[10px] font-semibold rounded-lg px-2.5 py-1.5 shadow-lg whitespace-nowrap z-[9999] pointer-events-none transition-opacity duration-150 font-sans",
            style: normalizeStyle({
              top: `${activeTooltipTop.value}px`,
              left: "80px",
              transform: "translateY(-50%)"
            })
          }, [
            createTextVNode(toDisplayString(activeTooltipText.value) + " ", 1),
            _cache[22] || (_cache[22] = createBaseVNode("div", { class: "absolute right-full top-1/2 -translate-y-1/2 border-4 border-transparent border-r-slate-900" }, null, -1))
          ], 4)) : createCommentVNode("", true)
        ]))
      ], 64);
    };
  }
});
const StudentSidebar = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-1e4c628d"]]);
const _hoisted_1$2 = {
  key: 0,
  class: "bg-red-600 text-white px-6 py-2.5 flex items-center justify-between animate-pulse z-50 relative"
};
const _hoisted_2$2 = { class: "flex items-center space-x-2" };
const _hoisted_3$2 = { class: "sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-100 px-6 py-3 transition-all duration-300 font-outfit" };
const _hoisted_4$2 = { class: "flex items-center justify-between" };
const _hoisted_5$1 = { class: "flex items-center space-x-4" };
const _hoisted_6$1 = { class: "hidden lg:block text-left" };
const _hoisted_7$1 = { class: "text-xl font-bold text-slate-800 tracking-tight leading-none" };
const _hoisted_8$1 = { class: "text-xs font-medium text-slate-400 mt-1.5 leading-none" };
const _hoisted_9$1 = { class: "flex items-center space-x-3.5" };
const _hoisted_10$1 = {
  key: 0,
  class: "absolute top-2 right-2 w-4.5 h-4.5 bg-blue-600 text-white text-[9px] flex items-center justify-center rounded-full border-2 border-white font-semibold animate-pulse"
};
const _hoisted_11 = {
  key: 0,
  class: "absolute right-0 mt-3 w-80 bg-white rounded-2xl shadow-2xl border border-slate-100 z-50 overflow-hidden animate-fade-in"
};
const _hoisted_12 = { class: "p-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/30" };
const _hoisted_13 = {
  key: 0,
  class: "text-[10px] font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full"
};
const _hoisted_14 = { class: "max-h-[350px] overflow-y-auto" };
const _hoisted_15 = {
  key: 0,
  class: "p-8 text-center"
};
const _hoisted_16 = { key: 1 };
const _hoisted_17 = ["onClick"];
const _hoisted_18 = { class: "flex items-start space-x-3" };
const _hoisted_19 = { class: "flex-1 text-left" };
const _hoisted_20 = { class: "flex items-center justify-between mb-0.5" };
const _hoisted_21 = { class: "text-xs font-semibold text-slate-800" };
const _hoisted_22 = { class: "text-[9px] text-slate-400 font-semibold" };
const _hoisted_23 = { class: "text-[11px] text-slate-500 leading-normal" };
const _hoisted_24 = {
  key: 0,
  class: "absolute right-3 top-3 w-1.5 h-1.5 bg-blue-600 rounded-full"
};
const _hoisted_25 = {
  key: 0,
  class: "p-3 border-t border-slate-100 text-center bg-slate-50/10"
};
const _hoisted_26 = { class: "w-8 h-8 bg-blue-600/10 text-blue-600 font-bold flex items-center justify-center rounded-full overflow-hidden shadow-sm border border-blue-500/10" };
const _hoisted_27 = ["src"];
const _hoisted_28 = {
  key: 1,
  class: "text-xs"
};
const _hoisted_29 = { class: "hidden sm:block text-left" };
const _hoisted_30 = { class: "text-xs font-semibold text-slate-800 leading-none" };
const _hoisted_31 = { class: "text-[9px] font-semibold text-slate-400 uppercase tracking-wider mt-1.5 leading-none" };
const _hoisted_32 = {
  key: 0,
  class: "absolute right-0 mt-3 w-52 bg-white rounded-2xl shadow-2xl border border-slate-100 z-50 p-1.5 animate-fade-in text-left"
};
const _hoisted_33 = { class: "px-3 py-2.5 border-b border-slate-100 mb-1.5" };
const _hoisted_34 = { class: "text-xs font-semibold text-slate-800" };
const _hoisted_35 = { class: "text-[10px] text-slate-400 truncate mt-0.5" };
const _hoisted_36 = { class: "space-y-0.5" };
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "StudentTopbar",
  emits: ["menu-click"],
  setup(__props) {
    const router = useRouter();
    const route = useRoute();
    const pageTitle = computed(() => {
      const path = route.path;
      if (path.includes("/student/dashboard")) return "Dashboard";
      if (path.includes("/student/books")) return "Browse Books";
      if (path.includes("/student/my-queue")) return "Waitlist";
      if (path.includes("/student/events")) return "Events & Seminars";
      if (path.includes("/student/libraries")) return "Find Library";
      if (path.includes("/student/my-bookings")) return "Seat Bookings";
      if (path.includes("/student/my-reservations")) return "Book Reservations";
      if (path.includes("/student/attendance")) return "My Attendance";
      if (path.includes("/student/analytics")) return "My Analytics";
      if (path.includes("/student/subscription")) return "Subscription";
      if (path.includes("/student/support")) return "Support & Complaints";
      if (path.includes("/student/profile")) return "My Profile";
      if (path.includes("/student/notifications")) return "Notifications";
      return route.meta?.title || "Dashboard";
    });
    const pageSubtitle = computed(() => {
      const path = route.path;
      if (path.includes("/student/dashboard")) return "Your overview of library activity and stats";
      if (path.includes("/student/books")) return "Browse and reserve books from our collection";
      if (path.includes("/student/my-queue")) return "Track your position in book waiting lists";
      if (path.includes("/student/events")) return "Discover and register for upcoming events & seminars";
      if (path.includes("/student/libraries")) return "Find nearby libraries and explore available seats";
      if (path.includes("/student/my-bookings")) return "View and manage your active seat reservations";
      if (path.includes("/student/my-reservations")) return "Track books you have reserved for pickup";
      if (path.includes("/student/attendance")) return "Review your library visit and study attendance history";
      if (path.includes("/student/analytics")) return "Insights into your study habits and progress";
      if (path.includes("/student/subscription")) return "Manage your library membership and plan";
      if (path.includes("/student/support")) return "Get help or submit a complaint to our support team";
      if (path.includes("/student/profile")) return "Manage your personal information and preferences";
      if (path.includes("/student/notifications")) return "Stay updated with alerts and library announcements";
      return "";
    });
    const { user, notifications, unreadCount, markNotificationAsRead, isPlanExpired, logout } = useAuth();
    const { showConfirm } = useSwal();
    const showNotifications = ref(false);
    const showUserMenu = ref(false);
    const handleLogout = async () => {
      showUserMenu.value = false;
      if (await showConfirm("Sign Out", "Are you sure you want to sign out?", "Yes, Sign Out")) {
        await logout();
      }
    };
    const userInitials = computed(() => {
      if (!user.value?.name) return "ST";
      const parts = user.value.name.split(" ");
      if (parts.length >= 2) {
        return (parts[0][0] + parts[1][0]).toUpperCase();
      }
      return parts[0][0].toUpperCase();
    });
    const notificationsRef = ref(null);
    const userMenuRef = ref(null);
    const handleClickOutside = (event) => {
      if (notificationsRef.value && !notificationsRef.value.contains(event.target)) {
        showNotifications.value = false;
      }
      if (userMenuRef.value && !userMenuRef.value.contains(event.target)) {
        showUserMenu.value = false;
      }
    };
    onMounted(() => {
      document.addEventListener("mousedown", handleClickOutside);
    });
    onUnmounted(() => {
      document.removeEventListener("mousedown", handleClickOutside);
    });
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
          return "bg-purple-50 text-purple-600";
        case "subscription":
          return "bg-green-50 text-green-600";
        case "book":
          return "bg-blue-50 text-blue-600";
        case "booking":
          return "bg-orange-50 text-orange-600";
        case "queue":
          return "bg-amber-50 text-amber-600";
        default:
          return "bg-slate-50 text-slate-600";
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
            _cache[5] || (_cache[5] = createBaseVNode("span", { class: "text-xs font-semibold" }, "Your subscription has expired. Please renew to continue using all features.", -1))
          ]),
          createVNode(_component_router_link, {
            to: "/student/subscription",
            class: "text-xs font-bold underline hover:text-red-100"
          }, {
            default: withCtx(() => [..._cache[6] || (_cache[6] = [
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
                class: "p-2 rounded-xl text-slate-500 hover:bg-slate-50 hover:text-blue-600 lg:hidden border border-slate-100 transition-colors"
              }, [
                createVNode(unref(Menu), { class: "w-5 h-5" })
              ]),
              createBaseVNode("div", _hoisted_6$1, [
                createBaseVNode("h1", _hoisted_7$1, toDisplayString(pageTitle.value), 1),
                createBaseVNode("p", _hoisted_8$1, toDisplayString(pageSubtitle.value), 1)
              ])
            ]),
            createBaseVNode("div", _hoisted_9$1, [
              createBaseVNode("div", {
                class: "relative",
                ref_key: "notificationsRef",
                ref: notificationsRef
              }, [
                createBaseVNode("button", {
                  onClick: _cache[1] || (_cache[1] = ($event) => {
                    showNotifications.value = !showNotifications.value;
                    showUserMenu.value = false;
                  }),
                  class: "p-2.5 rounded-xl text-slate-400 hover:text-blue-600 hover:bg-blue-50/50 active:bg-blue-50 relative transition-all duration-200 border border-slate-100/40",
                  title: "Notifications"
                }, [
                  createVNode(unref(Bell), { class: "w-5 h-5" }),
                  unref(unreadCount) > 0 ? (openBlock(), createElementBlock("span", _hoisted_10$1, toDisplayString(unref(unreadCount) > 9 ? "9+" : unref(unreadCount)), 1)) : createCommentVNode("", true)
                ]),
                showNotifications.value ? (openBlock(), createElementBlock("div", _hoisted_11, [
                  createBaseVNode("div", _hoisted_12, [
                    _cache[7] || (_cache[7] = createBaseVNode("h3", { class: "text-xs font-semibold text-slate-800 uppercase tracking-wider" }, "Notifications", -1)),
                    unref(unreadCount) > 0 ? (openBlock(), createElementBlock("span", _hoisted_13, toDisplayString(unref(unreadCount)) + " New ", 1)) : createCommentVNode("", true)
                  ]),
                  createBaseVNode("div", _hoisted_14, [
                    unref(notifications).length === 0 ? (openBlock(), createElementBlock("div", _hoisted_15, [
                      createVNode(unref(Bell), { class: "w-10 h-10 text-slate-200 mx-auto mb-3" }),
                      _cache[8] || (_cache[8] = createBaseVNode("p", { class: "text-xs font-medium text-slate-400" }, "No new notifications", -1))
                    ])) : (openBlock(), createElementBlock("div", _hoisted_16, [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(unref(notifications), (notification) => {
                        return openBlock(), createElementBlock("div", {
                          key: notification.id,
                          class: normalizeClass(["p-4 border-b border-slate-50 hover:bg-slate-50 transition-colors cursor-pointer relative", { "bg-blue-50/20": !notification.is_read }]),
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
                      class: "text-xs font-semibold text-blue-600 hover:text-blue-700 transition-colors"
                    }, " View All Notifications ")
                  ])) : createCommentVNode("", true)
                ])) : createCommentVNode("", true)
              ], 512),
              createBaseVNode("div", {
                class: "relative",
                ref_key: "userMenuRef",
                ref: userMenuRef
              }, [
                createBaseVNode("button", {
                  onClick: _cache[3] || (_cache[3] = ($event) => {
                    showUserMenu.value = !showUserMenu.value;
                    showNotifications.value = false;
                  }),
                  class: "flex items-center space-x-3 px-3 py-2 rounded-xl text-slate-600 hover:bg-slate-50 hover:text-blue-600 transition-all duration-200 border border-slate-100/50"
                }, [
                  createBaseVNode("div", _hoisted_26, [
                    unref(user)?.profile_picture ? (openBlock(), createElementBlock("img", {
                      key: 0,
                      src: getProfilePictureUrl(unref(user).profile_picture),
                      alt: "Profile",
                      class: "w-full h-full object-cover"
                    }, null, 8, _hoisted_27)) : (openBlock(), createElementBlock("span", _hoisted_28, toDisplayString(userInitials.value), 1))
                  ]),
                  createBaseVNode("div", _hoisted_29, [
                    createBaseVNode("div", _hoisted_30, toDisplayString(unref(user)?.name), 1),
                    createBaseVNode("div", _hoisted_31, toDisplayString(unref(user)?.user_type?.replace("_", " ")), 1)
                  ]),
                  createVNode(unref(ChevronDown), { class: "w-3.5 h-3.5 text-slate-400" })
                ]),
                showUserMenu.value ? (openBlock(), createElementBlock("div", _hoisted_32, [
                  createBaseVNode("div", _hoisted_33, [
                    createBaseVNode("div", _hoisted_34, toDisplayString(unref(user)?.name), 1),
                    createBaseVNode("div", _hoisted_35, toDisplayString(unref(user)?.email), 1)
                  ]),
                  createBaseVNode("div", _hoisted_36, [
                    createVNode(_component_router_link, {
                      to: "/student/profile",
                      onClick: _cache[4] || (_cache[4] = ($event) => showUserMenu.value = false),
                      class: "flex items-center space-x-2.5 px-3 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-50 rounded-xl transition-colors"
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(User), { class: "w-4 h-4 text-slate-400" }),
                        _cache[9] || (_cache[9] = createBaseVNode("span", null, "My Profile", -1))
                      ]),
                      _: 1
                    }),
                    createBaseVNode("button", {
                      onClick: handleLogout,
                      class: "w-full flex items-center space-x-2.5 px-3 py-2 text-xs font-semibold text-red-655 hover:bg-red-50 rounded-xl transition-colors text-left"
                    }, [
                      createVNode(unref(LogOut), { class: "w-4 h-4" }),
                      _cache[10] || (_cache[10] = createBaseVNode("span", null, "Sign Out", -1))
                    ])
                  ])
                ])) : createCommentVNode("", true)
              ], 512)
            ])
          ])
        ])
      ], 64);
    };
  }
});
const StudentTopbar = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-642768fd"]]);
const _hoisted_1$1 = {
  key: 0,
  class: "fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-md"
};
const _hoisted_2$1 = { class: "bg-white rounded-[2rem] p-10 max-w-md w-full shadow-2xl transform transition-all scale-100 border border-blue-100" };
const _hoisted_3$1 = { class: "w-24 h-24 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce" };
const _hoisted_4$1 = { class: "text-3xl font-semibold text-gray-800 mb-3 text-center" };
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
            createBaseVNode("p", { class: "text-[10px] text-orange-700 font-semibold uppercase tracking-widest leading-tight" }, " Extension Lock Notice ", -1),
            createBaseVNode("p", { class: "text-xs text-orange-600 mt-1" }, " You must extend now. Within 10 minutes of expiry, priority shifts to the seat queue. ", -1)
          ])])) : createCommentVNode("", true),
          createBaseVNode("div", _hoisted_7, [
            (openBlock(), createElementBlock(Fragment, null, renderList([30, 60, 120, 240], (mins) => {
              return createBaseVNode("button", {
                key: mins,
                onClick: ($event) => selectedExtension.value = mins,
                class: normalizeClass([
                  "py-4 rounded-2xl font-semibold transition-all border-2",
                  selectedExtension.value === mins ? "bg-blue-600 border-blue-600 text-white shadow-lg scale-105" : "bg-gray-50 border-transparent text-gray-600 hover:bg-gray-100"
                ])
              }, " +" + toDisplayString(mins >= 60 ? mins / 60 + "h" : mins + "m"), 11, _hoisted_8);
            }), 64))
          ]),
          createBaseVNode("div", _hoisted_9, [
            createBaseVNode("button", {
              onClick: handleExtend,
              disabled: extending.value,
              class: "w-full bg-blue-600 text-white py-5 rounded-2xl font-semibold hover:bg-blue-700 transition-all shadow-xl hover:shadow-blue-200 disabled:opacity-50"
            }, toDisplayString(extending.value ? "Extending..." : "Extend Session"), 9, _hoisted_10),
            createBaseVNode("button", {
              onClick: closeModal,
              class: "w-full bg-white text-gray-400 py-4 rounded-2xl font-medium hover:text-gray-600 transition-all"
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
  class: "h-screen bg-gray-50 flex student-portal overflow-hidden"
};
const _hoisted_3 = { class: "flex-1 flex flex-col min-h-0 overflow-hidden" };
const _hoisted_4 = { class: "flex-1 overflow-x-hidden overflow-y-auto bg-gray-50 p-5" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Layout",
  setup(__props) {
    const { user } = useAuth();
    const { locationGranted, requestLocation } = useGeolocation();
    const sidebarOpen = ref(false);
    const sidebarCollapsed = ref(false);
    const toggleCollapse = () => {
      sidebarCollapsed.value = !sidebarCollapsed.value;
    };
    const lockBody = () => {
      document.documentElement.style.margin = "0";
      document.documentElement.style.padding = "0";
      document.documentElement.style.overflow = "hidden";
      document.documentElement.style.height = "100%";
      document.documentElement.style.width = "100%";
      document.body.style.margin = "0";
      document.body.style.padding = "0";
      document.body.style.overflow = "hidden";
      document.body.style.height = "100%";
      document.body.style.width = "100%";
    };
    const unlockBody = () => {
      document.documentElement.style.margin = "";
      document.documentElement.style.padding = "";
      document.documentElement.style.overflow = "";
      document.documentElement.style.height = "";
      document.documentElement.style.width = "";
      document.body.style.margin = "";
      document.body.style.padding = "";
      document.body.style.overflow = "";
      document.body.style.height = "";
      document.body.style.width = "";
    };
    onMounted(() => {
      lockBody();
      if (!locationGranted.value) {
        requestLocation();
      }
    });
    onUnmounted(() => {
      unlockBody();
    });
    return (_ctx, _cache) => {
      return !unref(user) ? (openBlock(), createElementBlock("div", _hoisted_1, [
        renderSlot(_ctx.$slots, "default")
      ])) : (openBlock(), createElementBlock("div", _hoisted_2, [
        createVNode(StudentSidebar, {
          "is-open": sidebarOpen.value,
          "is-collapsed": sidebarCollapsed.value,
          onClose: _cache[0] || (_cache[0] = ($event) => sidebarOpen.value = false),
          onToggleCollapse: toggleCollapse
        }, null, 8, ["is-open", "is-collapsed"]),
        createBaseVNode("div", _hoisted_3, [
          createVNode(StudentTopbar, {
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
