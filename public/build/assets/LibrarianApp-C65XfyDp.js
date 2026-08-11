import { c as createLucideIcon, d as defineComponent, z as useAuth, r as ref, a as computed, J as useRoute, I as watch, o as onMounted, K as onUnmounted, b as createElementBlock, F as Fragment, e as createBaseVNode, i as createBlock, n as normalizeClass, p as createCommentVNode, g as createVNode, u as unref, B as withModifiers, k as renderList, q as resolveDynamicComponent, x as normalizeStyle, L as Teleport, t as toDisplayString, h as resolveComponent, w as withCtx, M as LogOut, j as createTextVNode, C as Clock, m as openBlock, _ as _export_sfc, W as librarianAPI, G as useRouter } from "./main-BeUqjoax.js";
import { u as useSwal } from "./useSwal-pQW_XkRe.js";
import { L as Library } from "./library-mCkj7erK.js";
import { X } from "./x-Dj9LNodU.js";
import { L as Layers } from "./layers-aTWhNFyp.js";
import { C as ChevronDown } from "./chevron-down-DgPiBWjn.js";
import { C as ChevronLeft } from "./chevron-left-BTBU4JGM.js";
import { E as EllipsisVertical } from "./ellipsis-vertical-6fMZHUFy.js";
import { H as House } from "./house-CRFzYpDV.js";
import { M as MapPin } from "./map-pin-hjTU3OTG.js";
import { A as Armchair } from "./armchair-Ci3hmWMF.js";
import { B as BookOpen } from "./book-open-DpY8sw2V.js";
import { B as Building2 } from "./building-2-obFScNkw.js";
import { U as UserCheck } from "./user-check-gjs1HmON.js";
import { U as Users } from "./users-DgA2REmn.js";
import { B as BookMarked } from "./book-marked-BJVQnqwP.js";
import { C as Calendar } from "./calendar-C4MEAYqh.js";
import { L as LifeBuoy } from "./life-buoy--h1ho8pU.js";
import { C as ChartColumn } from "./chart-column-Du0EUu8B.js";
import { U as User } from "./user-Jwf_R05Y.js";
import { M as Menu } from "./menu-CJ0CGMU8.js";
import { S as Settings } from "./settings-wrVlRUX2.js";
/* empty css               */
const LayoutGrid = createLucideIcon("layout-grid", [
  ["rect", { width: "7", height: "7", x: "3", y: "3", rx: "1", key: "1g98yp" }],
  ["rect", { width: "7", height: "7", x: "14", y: "3", rx: "1", key: "6d4xhi" }],
  ["rect", { width: "7", height: "7", x: "14", y: "14", rx: "1", key: "nxv5o0" }],
  ["rect", { width: "7", height: "7", x: "3", y: "14", rx: "1", key: "1bb6yr" }]
]);
const _hoisted_1$2 = {
  key: 0,
  class: "flex items-center space-x-3 animate-fade-in"
};
const _hoisted_2$2 = { class: "w-9 h-9 rounded-full bg-white/15 flex items-center justify-center text-white shadow-md shadow-white/5 group-hover:scale-105 transition-transform flex-shrink-0" };
const _hoisted_3$2 = {
  key: 0,
  class: "flex flex-col text-left"
};
const _hoisted_4$1 = {
  key: 0,
  class: "text-[10px] font-semibold text-white/60 uppercase tracking-widest mb-3 px-3 text-left animate-fade-in"
};
const _hoisted_5$1 = {
  key: 1,
  class: "h-px bg-white/40 my-3 mx-1"
};
const _hoisted_6$1 = { class: "space-y-1" };
const _hoisted_7$1 = ["onMouseenter"];
const _hoisted_8$1 = {
  key: 0,
  class: "tracking-wide animate-fade-in"
};
const _hoisted_9$1 = {
  key: 0,
  class: "text-[10px] font-semibold text-white/60 uppercase tracking-widest mb-3 px-3 text-left animate-fade-in"
};
const _hoisted_10$1 = {
  key: 1,
  class: "h-px bg-white/40 my-3 mx-1"
};
const _hoisted_11$1 = { class: "space-y-1" };
const _hoisted_12$1 = { class: "relative" };
const _hoisted_13$1 = {
  key: 0,
  class: "tracking-wide animate-fade-in flex-1"
};
const _hoisted_14$1 = {
  key: 1,
  class: "ml-auto flex items-center animate-fade-in"
};
const _hoisted_15$1 = { class: "relative ml-6 mt-1 space-y-1" };
const _hoisted_16$1 = ["onMouseenter"];
const _hoisted_17$1 = {
  key: 0,
  class: "tracking-wide animate-fade-in"
};
const _hoisted_18$1 = {
  key: 0,
  class: "text-[10px] font-semibold text-white/60 uppercase tracking-widest mb-3 px-3 text-left animate-fade-in"
};
const _hoisted_19$1 = {
  key: 1,
  class: "h-px bg-white/40 my-3 mx-1"
};
const _hoisted_20$1 = { class: "space-y-1" };
const _hoisted_21 = ["onMouseenter"];
const _hoisted_22 = {
  key: 0,
  class: "tracking-wide animate-fade-in"
};
const _hoisted_23 = { class: "p-4 border-t border-white/10 bg-transparent z-10 flex flex-col justify-end flex-shrink-0 min-h-0" };
const _hoisted_24 = { class: "relative" };
const _hoisted_25 = { class: "w-9 h-9 rounded-full bg-white/15 border border-white/10 text-white font-bold flex items-center justify-center text-xs flex-shrink-0 overflow-hidden" };
const _hoisted_26 = ["src"];
const _hoisted_27 = { key: 1 };
const _hoisted_28 = {
  key: 0,
  class: "flex-1 ml-3 min-w-0 text-left"
};
const _hoisted_29 = { class: "text-xs font-bold text-white truncate block" };
const _hoisted_30 = { class: "text-[10px] text-emerald-200 truncate block mt-0.5" };
const _hoisted_31 = {
  key: 1,
  class: "p-1 hover:bg-white/10 rounded-lg transition-colors"
};
const _hoisted_32 = {
  key: 0,
  class: "absolute bottom-14 left-0 right-0 bg-emerald-800 border border-emerald-600/60 rounded-2xl shadow-xl p-1.5 z-[100] flex flex-col space-y-0.5 animate-fade-in text-left"
};
const _hoisted_33 = { class: "px-3 py-1.5 text-[10px] font-bold text-white/60 uppercase tracking-widest border-b border-white/10 mb-1" };
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "LibrarianSidebar",
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
    const showProfileDropdown = ref(false);
    const profileDropdownBottom = ref(0);
    const userInitials = computed(() => {
      if (!user.value?.name) return "LB";
      const parts = user.value.name.split(" ");
      if (parts.length >= 2) {
        return (parts[0][0] + parts[1][0]).toUpperCase();
      }
      return parts[0][0].toUpperCase();
    });
    const getProfilePictureUrl = (path) => {
      if (!path) return "";
      if (path.startsWith("http")) return path;
      return `/storage/${path}`;
    };
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
    const showSpaceManagementPopover = ref(false);
    const activeTooltipText = ref("");
    const activeTooltipTop = ref(0);
    const showGlobalTooltip = ref(false);
    const spaceManagementPopoverTop = ref(0);
    const handleMouseEnter = (event, label) => {
      if (!showCollapsed.value) return;
      if (label === "Space Management" && showSpaceManagementPopover.value) return;
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
    const spaceManagementOpen = ref(false);
    const handleSpaceManagementToggle = (event) => {
      event.stopPropagation();
      if (showCollapsed.value) {
        const target = event.currentTarget;
        const rect = target.getBoundingClientRect();
        spaceManagementPopoverTop.value = rect.top;
        showSpaceManagementPopover.value = !showSpaceManagementPopover.value;
        if (showSpaceManagementPopover.value) {
          showGlobalTooltip.value = false;
        }
      } else {
        spaceManagementOpen.value = !spaceManagementOpen.value;
      }
    };
    const isSpaceManagementActive = computed(() => {
      return ["/librarian/floors", "/librarian/sections", "/librarian/seats"].some((path) => route.path.includes(path)) && !route.path.includes("/librarian/live-map");
    });
    watch(isSpaceManagementActive, (active) => {
      if (active && !showCollapsed.value) {
        spaceManagementOpen.value = true;
      }
    }, { immediate: true });
    watch(showCollapsed, (collapsed) => {
      if (collapsed) {
        spaceManagementOpen.value = false;
        showSpaceManagementPopover.value = false;
        showProfileDropdown.value = false;
      }
    });
    const closeAllDropdowns = () => {
      showSpaceManagementPopover.value = false;
      showProfileDropdown.value = false;
      handleMouseLeave();
    };
    onMounted(() => {
      document.addEventListener("click", closeAllDropdowns);
      window.addEventListener("resize", handleResize);
    });
    onUnmounted(() => {
      document.removeEventListener("click", closeAllDropdowns);
      window.removeEventListener("resize", handleResize);
    });
    const mainNavItems = [
      { path: "/librarian/dashboard", label: "Dashboard", icon: House, exact: true },
      { path: "/librarian/live-map", label: "Live Seat Map", icon: MapPin },
      { path: "/librarian/bookings", label: "Seat Bookings", icon: Armchair },
      { path: "/librarian/reservations", label: "Reserved Books", icon: BookOpen },
      { path: "/librarian/library", label: "Library Info", icon: Building2 }
    ];
    const managementItems = [
      { path: "/librarian/students", label: "Students", icon: Users },
      { path: "/librarian/books", label: "Book Inventory", icon: BookMarked },
      { path: "/librarian/events", label: "Events", icon: Calendar },
      { path: "/librarian/attendance", label: "Attendance", icon: Clock },
      { path: "/librarian/support", label: "Support & Complaints", icon: LifeBuoy }
    ];
    const spaceManagementItems = [
      { path: "/librarian/floors", label: "Floor Management", icon: Building2 },
      { path: "/librarian/sections", label: "Section Management", icon: LayoutGrid },
      { path: "/librarian/seats", label: "Seat Management", icon: UserCheck }
    ];
    const reportItems = [
      { path: "/librarian/analytics", label: "Analytics & Reports", icon: ChartColumn }
    ];
    return (_ctx, _cache) => {
      const _component_router_link = resolveComponent("router-link");
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("aside", {
          class: normalizeClass([
            "fixed inset-y-0 left-0 z-50 flex flex-col bg-emerald-700 border-r border-emerald-800/40 shadow-2xl transition-all duration-300 ease-in-out overflow-x-hidden overscroll-contain",
            // Mobile: always full width sidebar, translate in/out
            "w-72 max-w-[85vw]",
            // Desktop overrides: sticky h-screen locks height to viewport
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
            !showCollapsed.value ? (openBlock(), createElementBlock("div", _hoisted_1$2, [
              createBaseVNode("div", _hoisted_2$2, [
                createVNode(unref(Library), { class: "w-5 h-5 text-white" })
              ]),
              !__props.isCollapsed || !isDesktop.value ? (openBlock(), createElementBlock("div", _hoisted_3$2, [..._cache[13] || (_cache[13] = [
                createBaseVNode("h1", { class: "text-sm font-extrabold text-white tracking-tight leading-none animate-fade-in" }, "SmartLib", -1),
                createBaseVNode("p", { class: "text-[9px] font-bold text-emerald-200 tracking-wider uppercase mt-1 leading-none animate-fade-in" }, "Librarian Portal", -1)
              ])])) : createCommentVNode("", true)
            ])) : createCommentVNode("", true),
            showCollapsed.value ? (openBlock(), createElementBlock("button", {
              key: 1,
              onClick: _cache[0] || (_cache[0] = withModifiers(($event) => _ctx.$emit("toggle-collapse"), ["stop"])),
              class: "hidden lg:flex w-9 h-9 items-center justify-center bg-white/15 hover:bg-white/25 active:bg-white/35 text-white rounded-full shadow-md shadow-white/5 transition-all duration-200 cursor-pointer animate-fade-in flex-shrink-0"
            }, [
              createVNode(unref(Library), { class: "w-5 h-5 text-white" })
            ])) : createCommentVNode("", true),
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
              !showCollapsed.value ? (openBlock(), createElementBlock("h3", _hoisted_4$1, " Main Menu ")) : (openBlock(), createElementBlock("div", _hoisted_5$1)),
              createBaseVNode("div", _hoisted_6$1, [
                (openBlock(), createElementBlock(Fragment, null, renderList(mainNavItems, (item) => {
                  return createVNode(_component_router_link, {
                    key: item.path,
                    onClick: _cache[2] || (_cache[2] = ($event) => _ctx.$emit("close")),
                    to: item.path
                  }, {
                    default: withCtx(({ isActive: isLinkActive }) => [
                      createBaseVNode("div", {
                        onMouseenter: ($event) => handleMouseEnter($event, item.label),
                        onMouseleave: handleMouseLeave,
                        class: normalizeClass([
                          "flex items-center transition-all duration-200 group cursor-pointer relative",
                          showCollapsed.value ? "justify-center w-12 h-12 mx-auto my-1 rounded-xl animate-fade-in" : "px-3 py-3 mx-1.5 my-1 space-x-2 rounded-xl font-medium text-sm",
                          isLinkActive ? "bg-white text-emerald-700 shadow-md shadow-emerald-950/15 animate-fade-in" : "text-white hover:bg-white/10"
                        ])
                      }, [
                        (openBlock(), createBlock(resolveDynamicComponent(item.icon), {
                          class: normalizeClass([
                            "w-5 h-5 transition-colors",
                            isLinkActive ? "text-emerald-700" : "text-white/90 group-hover:text-white"
                          ])
                        }, null, 8, ["class"])),
                        !showCollapsed.value ? (openBlock(), createElementBlock("span", _hoisted_8$1, toDisplayString(item.label), 1)) : createCommentVNode("", true)
                      ], 42, _hoisted_7$1)
                    ]),
                    _: 2
                  }, 1032, ["to"]);
                }), 64))
              ])
            ]),
            createBaseVNode("div", null, [
              !showCollapsed.value ? (openBlock(), createElementBlock("h3", _hoisted_9$1, " Management ")) : (openBlock(), createElementBlock("div", _hoisted_10$1)),
              createBaseVNode("div", _hoisted_11$1, [
                createBaseVNode("div", _hoisted_12$1, [
                  createBaseVNode("div", {
                    onClick: handleSpaceManagementToggle,
                    onMouseenter: _cache[3] || (_cache[3] = ($event) => handleMouseEnter($event, "Space Management")),
                    onMouseleave: handleMouseLeave,
                    class: normalizeClass([
                      "flex items-center transition-all duration-200 group cursor-pointer relative py-3 select-none",
                      showCollapsed.value ? "justify-center w-12 h-12 mx-auto my-1 rounded-xl" : "px-3 py-3 mx-1.5 my-1 space-x-2 rounded-xl font-medium text-sm",
                      isSpaceManagementActive.value && showCollapsed.value ? "bg-white text-emerald-700 shadow-md" : "",
                      isSpaceManagementActive.value && !showCollapsed.value ? "text-white font-semibold" : "text-white hover:bg-white/10"
                    ])
                  }, [
                    (openBlock(), createBlock(resolveDynamicComponent(unref(Layers)), {
                      class: normalizeClass([
                        "w-5 h-5 transition-colors",
                        isSpaceManagementActive.value && showCollapsed.value ? "text-emerald-700" : isSpaceManagementActive.value ? "text-white" : "text-white/90 group-hover:text-white"
                      ])
                    }, null, 8, ["class"])),
                    !showCollapsed.value ? (openBlock(), createElementBlock("span", _hoisted_13$1, "Space Management")) : createCommentVNode("", true),
                    !showCollapsed.value ? (openBlock(), createElementBlock("span", _hoisted_14$1, [
                      spaceManagementOpen.value ? (openBlock(), createBlock(unref(ChevronDown), {
                        key: 0,
                        class: "w-3.5 h-3.5 text-white font-bold"
                      })) : (openBlock(), createBlock(unref(ChevronLeft), {
                        key: 1,
                        class: "w-3.5 h-3.5 text-white/80 group-hover:text-white"
                      }))
                    ])) : createCommentVNode("", true)
                  ], 34),
                  (openBlock(), createBlock(Teleport, { to: "body" }, [
                    showSpaceManagementPopover.value && showCollapsed.value ? (openBlock(), createElementBlock("div", {
                      key: 0,
                      class: "fixed z-[9999] animate-fade-in w-48 bg-emerald-700 border border-white/10 rounded-2xl shadow-xl p-1.5 flex flex-col space-y-1 text-left",
                      style: normalizeStyle({
                        top: `${spaceManagementPopoverTop.value}px`,
                        left: "80px"
                      }),
                      onClick: _cache[5] || (_cache[5] = withModifiers(() => {
                      }, ["stop"]))
                    }, [
                      _cache[14] || (_cache[14] = createBaseVNode("div", { class: "px-3 py-1.5 text-[10px] font-semibold text-white/60 uppercase tracking-widest border-b border-white/10 mb-1" }, " Space Management ", -1)),
                      (openBlock(), createElementBlock(Fragment, null, renderList(spaceManagementItems, (subItem) => {
                        return createVNode(_component_router_link, {
                          key: subItem.path,
                          to: subItem.path,
                          onClick: _cache[4] || (_cache[4] = ($event) => {
                            showSpaceManagementPopover.value = false;
                            _ctx.$emit("close");
                          })
                        }, {
                          default: withCtx(({ isActive: isSubActive }) => [
                            createBaseVNode("div", {
                              class: normalizeClass([
                                "flex items-center space-x-2.5 px-3 py-2 rounded-xl transition-colors text-xs font-semibold cursor-pointer",
                                isSubActive ? "text-emerald-700 bg-white shadow-sm" : "text-white hover:bg-white/10"
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
                      "space-mgmt-submenu overflow-hidden transition-all duration-300 ease-in-out",
                      spaceManagementOpen.value && !showCollapsed.value ? "submenu-open" : "submenu-closed"
                    ])
                  }, [
                    createBaseVNode("div", _hoisted_15$1, [
                      (openBlock(), createElementBlock(Fragment, null, renderList(spaceManagementItems, (subItem, index) => {
                        return createBaseVNode("div", {
                          key: subItem.path,
                          class: "relative pl-5"
                        }, [
                          createBaseVNode("div", {
                            class: normalizeClass([
                              "absolute left-2.5 w-px bg-white/20",
                              index === spaceManagementItems.length - 1 ? "top-0 h-1/2" : "top-0 bottom-0"
                            ])
                          }, null, 2),
                          _cache[15] || (_cache[15] = createBaseVNode("div", { class: "absolute left-2.5 top-1/2 -translate-y-1/2 w-3 h-px bg-white/20" }, null, -1)),
                          createVNode(_component_router_link, {
                            to: subItem.path,
                            onClick: _cache[6] || (_cache[6] = ($event) => _ctx.$emit("close"))
                          }, {
                            default: withCtx(({ isActive: isSubActive }) => [
                              createBaseVNode("div", {
                                class: normalizeClass([
                                  "flex items-center space-x-2.5 px-3 py-2 rounded-xl transition-all text-xs font-semibold cursor-pointer",
                                  isSubActive ? "text-emerald-700 bg-white shadow-sm" : "text-white hover:bg-white/10"
                                ])
                              }, [
                                (openBlock(), createBlock(resolveDynamicComponent(subItem.icon), {
                                  class: normalizeClass([
                                    "w-4 h-4",
                                    isSubActive ? "text-emerald-700" : "text-white/80 group-hover:text-white"
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
                (openBlock(), createElementBlock(Fragment, null, renderList(managementItems, (item) => {
                  return createVNode(_component_router_link, {
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
                          isLinkActive ? "bg-white text-emerald-700 shadow-md shadow-emerald-950/15 animate-fade-in" : "text-white hover:bg-white/10"
                        ])
                      }, [
                        (openBlock(), createBlock(resolveDynamicComponent(item.icon), {
                          class: normalizeClass([
                            "w-5 h-5 transition-colors",
                            isLinkActive ? "text-emerald-700" : "text-white/90 group-hover:text-white"
                          ])
                        }, null, 8, ["class"])),
                        !showCollapsed.value ? (openBlock(), createElementBlock("span", _hoisted_17$1, toDisplayString(item.label), 1)) : createCommentVNode("", true)
                      ], 42, _hoisted_16$1)
                    ]),
                    _: 2
                  }, 1032, ["to"]);
                }), 64))
              ])
            ]),
            createBaseVNode("div", null, [
              !showCollapsed.value ? (openBlock(), createElementBlock("h3", _hoisted_18$1, " Analytics & Reports ")) : (openBlock(), createElementBlock("div", _hoisted_19$1)),
              createBaseVNode("div", _hoisted_20$1, [
                (openBlock(), createElementBlock(Fragment, null, renderList(reportItems, (item) => {
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
                          "flex items-center transition-all duration-205 group cursor-pointer relative",
                          showCollapsed.value ? "justify-center w-12 h-12 mx-auto my-1 rounded-xl animate-fade-in" : "px-3 py-3 mx-1.5 my-1 space-x-2 rounded-xl font-medium text-sm",
                          isLinkActive ? "bg-white text-emerald-700 shadow-md shadow-emerald-950/15 animate-fade-in" : "text-white hover:bg-white/10"
                        ])
                      }, [
                        (openBlock(), createBlock(resolveDynamicComponent(item.icon), {
                          class: normalizeClass([
                            "w-5 h-5 transition-colors",
                            isLinkActive ? "text-emerald-700" : "text-white/90 group-hover:text-white"
                          ])
                        }, null, 8, ["class"])),
                        !showCollapsed.value ? (openBlock(), createElementBlock("span", _hoisted_22, toDisplayString(item.label), 1)) : createCommentVNode("", true)
                      ], 42, _hoisted_21)
                    ]),
                    _: 2
                  }, 1032, ["to"]);
                }), 64))
              ])
            ])
          ], 32),
          createBaseVNode("div", _hoisted_23, [
            createBaseVNode("div", _hoisted_24, [
              createBaseVNode("div", {
                onMouseenter: _cache[9] || (_cache[9] = ($event) => handleMouseEnter($event, "User Profile & Menu")),
                onMouseleave: handleMouseLeave,
                class: normalizeClass([
                  "flex items-center justify-between rounded-2xl hover:bg-white/10 transition-colors relative cursor-pointer group",
                  showCollapsed.value ? "p-1 justify-center" : "p-2"
                ]),
                onClick: toggleProfileDropdown
              }, [
                createBaseVNode("div", _hoisted_25, [
                  unref(user)?.profile_picture ? (openBlock(), createElementBlock("img", {
                    key: 0,
                    src: getProfilePictureUrl(unref(user).profile_picture),
                    alt: "Profile",
                    class: "w-full h-full object-cover"
                  }, null, 8, _hoisted_26)) : (openBlock(), createElementBlock("span", _hoisted_27, toDisplayString(userInitials.value), 1))
                ]),
                !showCollapsed.value ? (openBlock(), createElementBlock("div", _hoisted_28, [
                  createBaseVNode("span", _hoisted_29, toDisplayString(unref(user)?.name), 1),
                  createBaseVNode("span", _hoisted_30, toDisplayString(unref(user)?.email), 1)
                ])) : createCommentVNode("", true),
                !showCollapsed.value ? (openBlock(), createElementBlock("div", _hoisted_31, [
                  createVNode(unref(EllipsisVertical), { class: "w-4 h-4 text-white/80 hover:text-white" })
                ])) : createCommentVNode("", true)
              ], 34),
              showProfileDropdown.value && !showCollapsed.value ? (openBlock(), createElementBlock("div", _hoisted_32, [
                createVNode(_component_router_link, {
                  to: "/librarian/profile",
                  onClick: _cache[10] || (_cache[10] = ($event) => showProfileDropdown.value = false),
                  class: "flex items-center space-x-2.5 px-3 py-2 text-xs font-semibold text-white hover:bg-white/10 rounded-xl transition-colors"
                }, {
                  default: withCtx(() => [
                    createVNode(unref(User), { class: "w-4 h-4 text-white/80" }),
                    _cache[16] || (_cache[16] = createBaseVNode("span", null, "My Profile", -1))
                  ]),
                  _: 1
                }),
                createBaseVNode("button", {
                  onClick: handleLogout,
                  class: "w-full flex items-center space-x-2.5 px-3 py-2 text-xs font-bold text-red-200 hover:bg-red-950/40 rounded-xl transition-colors text-left cursor-pointer"
                }, [
                  createVNode(unref(LogOut), { class: "w-4 h-4" }),
                  _cache[17] || (_cache[17] = createBaseVNode("span", null, "Sign Out", -1))
                ])
              ])) : createCommentVNode("", true),
              (openBlock(), createBlock(Teleport, { to: "body" }, [
                showProfileDropdown.value && showCollapsed.value ? (openBlock(), createElementBlock("div", {
                  key: 0,
                  class: "fixed z-[9999] animate-fade-in w-48 bg-emerald-800 border border-emerald-600/60 rounded-2xl shadow-xl p-1.5 flex flex-col space-y-0.5 text-left",
                  style: normalizeStyle({
                    bottom: `${profileDropdownBottom.value}px`,
                    left: "80px"
                  }),
                  onClick: _cache[12] || (_cache[12] = withModifiers(() => {
                  }, ["stop"]))
                }, [
                  createBaseVNode("div", _hoisted_33, toDisplayString(unref(user)?.name), 1),
                  createVNode(_component_router_link, {
                    to: "/librarian/profile",
                    onClick: _cache[11] || (_cache[11] = ($event) => showProfileDropdown.value = false),
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
                    class: "w-full flex items-center space-x-2.5 px-3 py-2 text-xs font-bold text-red-200 hover:bg-red-950/40 rounded-xl transition-colors text-left cursor-pointer"
                  }, [
                    createVNode(unref(LogOut), { class: "w-4 h-4" }),
                    _cache[19] || (_cache[19] = createBaseVNode("span", null, "Sign Out", -1))
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
            _cache[20] || (_cache[20] = createBaseVNode("div", { class: "absolute right-full top-1/2 -translate-y-1/2 border-4 border-transparent border-r-slate-900" }, null, -1))
          ], 4)) : createCommentVNode("", true)
        ]))
      ], 64);
    };
  }
});
const LibrarianSidebar = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-b13ca2c7"]]);
const _hoisted_1$1 = { class: "bg-white/90 backdrop-blur-md border-b border-slate-100 px-6 py-3 transition-all duration-300 sticky top-0 z-40 font-outfit" };
const _hoisted_2$1 = { class: "flex items-center justify-between" };
const _hoisted_3$1 = { class: "flex items-center space-x-4" };
const _hoisted_4 = { class: "hidden lg:block text-left" };
const _hoisted_5 = { class: "text-xl font-bold text-slate-800 tracking-tight leading-none" };
const _hoisted_6 = { class: "text-xs font-medium text-slate-400 mt-1.5 leading-none" };
const _hoisted_7 = { class: "flex items-center space-x-3.5" };
const _hoisted_8 = { class: "hidden md:flex items-center space-x-4 mr-4" };
const _hoisted_9 = { class: "text-xs font-semibold text-green-700 whitespace-nowrap" };
const _hoisted_10 = { class: "text-xs font-semibold text-orange-700 whitespace-nowrap" };
const _hoisted_11 = { class: "w-8 h-8 bg-emerald-600/10 text-emerald-600 font-bold flex items-center justify-center rounded-full overflow-hidden shadow-sm border border-emerald-500/10 flex-shrink-0" };
const _hoisted_12 = ["src"];
const _hoisted_13 = {
  key: 1,
  class: "text-xs"
};
const _hoisted_14 = { class: "hidden md:block text-left" };
const _hoisted_15 = { class: "text-xs font-bold text-slate-800 leading-none" };
const _hoisted_16 = {
  key: 0,
  class: "absolute right-0 mt-3 w-52 bg-white rounded-2xl shadow-2xl border border-slate-100 z-50 p-1.5 animate-fade-in text-left"
};
const _hoisted_17 = { class: "px-3 py-2.5 border-b border-slate-100 mb-1.5" };
const _hoisted_18 = { class: "text-xs font-bold text-slate-800" };
const _hoisted_19 = { class: "text-[10px] text-slate-400 truncate mt-0.5" };
const _hoisted_20 = { class: "space-y-0.5" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "LibrarianTopbar",
  emits: ["toggle-sidebar"],
  setup(__props) {
    const router = useRouter();
    const route = useRoute();
    const { user, logout } = useAuth();
    const { showConfirm } = useSwal();
    const showUserMenu = ref(false);
    const stats = ref({
      active: 0,
      pending: 0
    });
    const pageTitle = computed(() => {
      const path = route.path;
      if (path.includes("/librarian/dashboard")) return "Dashboard";
      if (path.includes("/librarian/bookings")) return "Seat Bookings";
      if (path.includes("/librarian/library")) return "Library Info";
      if (path.includes("/librarian/students")) return "Students";
      if (path.includes("/librarian/books")) return "Book Inventory";
      if (path.includes("/librarian/reservations")) return "Reserved Books";
      if (path.includes("/librarian/events")) return "Events";
      if (path.includes("/librarian/attendance")) return "Attendance";
      if (path.includes("/librarian/support")) return "Support & Complaints";
      if (path.includes("/librarian/analytics")) return "Analytics & Reports";
      if (path.includes("/librarian/reports")) return "Reports";
      if (path.includes("/librarian/floors")) return "Floor Management";
      if (path.includes("/librarian/sections")) return "Section Management";
      if (path.includes("/librarian/live-map")) return "Live Seat Map";
      if (path.includes("/librarian/seats")) return "Seat Management";
      if (path.includes("/librarian/profile")) return "My Profile";
      return route.meta?.title || "Dashboard";
    });
    const pageSubtitle = computed(() => {
      const path = route.path;
      if (path.includes("/librarian/dashboard")) return "Your overview of library activity and statistics";
      if (path.includes("/librarian/bookings")) return "Manage seat reservations and active sessions";
      if (path.includes("/librarian/library")) return "Review and update library configurations and settings";
      if (path.includes("/librarian/students")) return "Manage student profiles, search, and activity";
      if (path.includes("/librarian/books")) return "Manage book titles, copies, and catalog details";
      if (path.includes("/librarian/reservations")) return "Manage book reservations and pick-ups";
      if (path.includes("/librarian/events")) return "Organize, schedule, and review library events";
      if (path.includes("/librarian/attendance")) return "Review student attendance logs and study check-ins";
      if (path.includes("/librarian/support")) return "Track and resolve student issues and tickets";
      if (path.includes("/librarian/analytics")) return "Analyze library statistics, occupancy, and trends";
      if (path.includes("/librarian/reports")) return "Generate and export system activity and utilization reports";
      if (path.includes("/librarian/floors")) return "Configure and manage library floors";
      if (path.includes("/librarian/sections")) return "Configure and manage sections within library floors";
      if (path.includes("/librarian/live-map")) return "Real-time seat occupancy and status monitoring";
      if (path.includes("/librarian/seats")) return "Configure, edit, and assign seats in library sections";
      if (path.includes("/librarian/profile")) return "Manage your personal credentials and preferences";
      return "";
    });
    const fetchStats = async () => {
      try {
        const data = await librarianAPI.getBookingStats();
        stats.value = {
          active: data.active || 0,
          pending: data.pending || 0
        };
      } catch (error) {
        console.error("Error fetching booking stats:", error);
      }
    };
    const handleLogout = async () => {
      showUserMenu.value = false;
      if (await showConfirm("Sign Out", "Are you sure you want to sign out?", "Yes, Sign Out")) {
        await logout();
        router.push("/login");
      }
    };
    const getProfilePictureUrl = (path) => {
      if (path.startsWith("http")) return path;
      return `/storage/${path}`;
    };
    const userInitials = computed(() => {
      if (!user.value?.name) return "LB";
      const parts = user.value.name.split(" ");
      if (parts.length >= 2) {
        return (parts[0][0] + parts[1][0]).toUpperCase();
      }
      return parts[0][0].toUpperCase();
    });
    const userMenuRef = ref(null);
    const handleClickOutside = (event) => {
      if (userMenuRef.value && !userMenuRef.value.contains(event.target)) {
        showUserMenu.value = false;
      }
    };
    let interval = null;
    onMounted(() => {
      fetchStats();
      interval = setInterval(fetchStats, 3e4);
      document.addEventListener("mousedown", handleClickOutside);
    });
    onUnmounted(() => {
      if (interval) {
        clearInterval(interval);
      }
      document.removeEventListener("mousedown", handleClickOutside);
    });
    return (_ctx, _cache) => {
      const _component_router_link = resolveComponent("router-link");
      return openBlock(), createElementBlock("header", _hoisted_1$1, [
        createBaseVNode("div", _hoisted_2$1, [
          createBaseVNode("div", _hoisted_3$1, [
            createBaseVNode("button", {
              onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("toggle-sidebar")),
              class: "p-2 rounded-xl text-slate-500 hover:bg-slate-50 hover:text-emerald-600 lg:hidden border border-slate-100 transition-colors cursor-pointer"
            }, [
              createVNode(unref(Menu), { class: "w-5 h-5" })
            ]),
            createBaseVNode("div", _hoisted_4, [
              createBaseVNode("h1", _hoisted_5, toDisplayString(pageTitle.value), 1),
              createBaseVNode("p", _hoisted_6, toDisplayString(pageSubtitle.value), 1)
            ])
          ]),
          createBaseVNode("div", _hoisted_7, [
            createBaseVNode("div", _hoisted_8, [
              createVNode(_component_router_link, {
                to: "/librarian/attendance",
                class: "flex items-center px-3 py-1.5 bg-green-50 rounded-full border border-green-100 shadow-sm hover:bg-green-100 transition-colors cursor-pointer"
              }, {
                default: withCtx(() => [
                  _cache[4] || (_cache[4] = createBaseVNode("div", { class: "relative flex items-center justify-center mr-2" }, [
                    createBaseVNode("div", { class: "w-2 h-2 rounded-full bg-green-500" }),
                    createBaseVNode("div", { class: "absolute w-2 h-2 rounded-full bg-green-500 animate-ping opacity-75" })
                  ], -1)),
                  createBaseVNode("span", _hoisted_9, toDisplayString(stats.value.active) + " Active ", 1)
                ]),
                _: 1
              }),
              createVNode(_component_router_link, {
                to: "/librarian/bookings",
                class: "flex items-center px-3 py-1.5 bg-orange-50 rounded-full border border-orange-100 shadow-sm hover:bg-orange-100 transition-colors cursor-pointer"
              }, {
                default: withCtx(() => [
                  _cache[5] || (_cache[5] = createBaseVNode("div", { class: "w-2 h-2 rounded-full bg-orange-500 mr-2" }, null, -1)),
                  createBaseVNode("span", _hoisted_10, toDisplayString(stats.value.pending) + " Pending ", 1)
                ]),
                _: 1
              })
            ]),
            createBaseVNode("div", {
              class: "relative",
              ref_key: "userMenuRef",
              ref: userMenuRef
            }, [
              createBaseVNode("button", {
                onClick: _cache[1] || (_cache[1] = ($event) => showUserMenu.value = !showUserMenu.value),
                class: "flex items-center space-x-3 px-3 py-2 rounded-xl text-slate-655 hover:bg-slate-50 hover:text-emerald-600 transition-all duration-200 border border-slate-100/50 cursor-pointer"
              }, [
                createBaseVNode("div", _hoisted_11, [
                  unref(user)?.profile_picture ? (openBlock(), createElementBlock("img", {
                    key: 0,
                    src: getProfilePictureUrl(unref(user).profile_picture),
                    alt: "Profile",
                    class: "w-full h-full object-cover"
                  }, null, 8, _hoisted_12)) : (openBlock(), createElementBlock("span", _hoisted_13, toDisplayString(userInitials.value), 1))
                ]),
                createBaseVNode("div", _hoisted_14, [
                  createBaseVNode("div", _hoisted_15, toDisplayString(unref(user)?.name), 1),
                  _cache[6] || (_cache[6] = createBaseVNode("div", { class: "text-[9px] font-semibold text-slate-400 uppercase tracking-wider mt-1.5 leading-none" }, " Librarian ", -1))
                ]),
                createVNode(unref(ChevronDown), { class: "w-3.5 h-3.5 text-slate-400" })
              ]),
              showUserMenu.value ? (openBlock(), createElementBlock("div", _hoisted_16, [
                createBaseVNode("div", _hoisted_17, [
                  createBaseVNode("div", _hoisted_18, toDisplayString(unref(user)?.name), 1),
                  createBaseVNode("div", _hoisted_19, toDisplayString(unref(user)?.email), 1)
                ]),
                createBaseVNode("div", _hoisted_20, [
                  createVNode(_component_router_link, {
                    to: "/librarian/profile",
                    class: "flex items-center space-x-2.5 px-3 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-50 rounded-xl transition-colors",
                    onClick: _cache[2] || (_cache[2] = ($event) => showUserMenu.value = false)
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(User), { class: "w-4 h-4 text-slate-400" }),
                      _cache[7] || (_cache[7] = createBaseVNode("span", null, "My Profile", -1))
                    ]),
                    _: 1
                  }),
                  createVNode(_component_router_link, {
                    to: "/librarian/library",
                    class: "flex items-center space-x-2.5 px-3 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-50 rounded-xl transition-colors",
                    onClick: _cache[3] || (_cache[3] = ($event) => showUserMenu.value = false)
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(Settings), { class: "w-4 h-4 text-slate-400" }),
                      _cache[8] || (_cache[8] = createBaseVNode("span", null, "Settings", -1))
                    ]),
                    _: 1
                  }),
                  createBaseVNode("button", {
                    onClick: handleLogout,
                    class: "w-full flex items-center space-x-2.5 px-3 py-2 text-xs font-bold text-red-600 hover:bg-red-50 rounded-xl transition-colors text-left cursor-pointer"
                  }, [
                    createVNode(unref(LogOut), { class: "w-4 h-4" }),
                    _cache[9] || (_cache[9] = createBaseVNode("span", null, "Sign Out", -1))
                  ])
                ])
              ])) : createCommentVNode("", true)
            ], 512)
          ])
        ])
      ]);
    };
  }
});
const LibrarianTopbar = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-770ef222"]]);
const _hoisted_1 = { class: "h-screen bg-gray-50 flex librarian-portal overflow-hidden" };
const _hoisted_2 = { class: "flex-1 flex flex-col min-h-0 overflow-hidden" };
const _hoisted_3 = { class: "flex-1 overflow-x-hidden overflow-y-auto bg-gray-50" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "LibrarianApp",
  setup(__props) {
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
    });
    onUnmounted(() => {
      unlockBody();
    });
    return (_ctx, _cache) => {
      const _component_router_view = resolveComponent("router-view");
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(LibrarianSidebar, {
          isOpen: sidebarOpen.value,
          isCollapsed: sidebarCollapsed.value,
          onClose: _cache[0] || (_cache[0] = ($event) => sidebarOpen.value = false),
          onToggleCollapse: toggleCollapse
        }, null, 8, ["isOpen", "isCollapsed"]),
        sidebarOpen.value ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: "fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden",
          onClick: _cache[1] || (_cache[1] = ($event) => sidebarOpen.value = false)
        })) : createCommentVNode("", true),
        createBaseVNode("div", _hoisted_2, [
          createVNode(LibrarianTopbar, {
            onToggleSidebar: _cache[2] || (_cache[2] = ($event) => sidebarOpen.value = !sidebarOpen.value)
          }),
          createBaseVNode("main", _hoisted_3, [
            createVNode(_component_router_view)
          ])
        ])
      ]);
    };
  }
});
export {
  _sfc_main as default
};
