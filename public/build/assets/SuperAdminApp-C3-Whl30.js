import { d as defineComponent, x as useAuth, r as ref, c as computed, E as watch, o as onMounted, H as onUnmounted, a as createElementBlock, F as Fragment, b as createBaseVNode, h as createBlock, n as normalizeClass, j as createCommentVNode, f as createVNode, u as unref, t as toDisplayString, z as withModifiers, k as renderList, g as resolveComponent, w as withCtx, I as Teleport, q as normalizeStyle, i as createTextVNode, m as resolveDynamicComponent, G as useRoute, l as openBlock, X as adminAPI, C as useRouter, K as renderSlot } from "./main-D4odWxzi.js";
import { u as useSwal } from "./useSwal-pQW_XkRe.js";
import { S as ShieldCheck } from "./shield-check-CtdsXE1s.js";
import { X } from "./x-C9--2uVT.js";
import { E as EllipsisVertical } from "./ellipsis-vertical-BoCquceY.js";
import { L as LogOut } from "./log-out-Dg62YW84.js";
import { H as House } from "./house-C9jUkcNU.js";
import { L as Library } from "./library-BS-z0puv.js";
import { U as UserCheck } from "./user-check-BH-29a_L.js";
import { U as Users } from "./users-CpFvLwmr.js";
import { C as Calendar } from "./calendar-lJfe3rfu.js";
import { C as ChartColumn } from "./chart-column-ChBrZ6Mb.js";
import { L as LifeBuoy } from "./life-buoy-C8Fd2Jc2.js";
import { S as Settings } from "./settings-BtANkcip.js";
import { U as User } from "./user-B1vMR7MU.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import { M as Menu } from "./menu-CbJGZH7t.js";
import { C as ChevronDown } from "./chevron-down-DGoXiOPy.js";
/* empty css               */
import "./createLucideIcon-BgnXjtcZ.js";
const _hoisted_1$2 = {
  key: 0,
  class: "flex items-center space-x-3 animate-fade-in"
};
const _hoisted_2$2 = { class: "w-9 h-9 rounded-full bg-white/15 flex items-center justify-center text-white shadow-md shadow-white/5 group-hover:scale-105 transition-transform flex-shrink-0" };
const _hoisted_3$2 = {
  key: 0,
  class: "flex flex-col text-left"
};
const _hoisted_4$2 = { class: "text-sm font-bold text-white tracking-tight leading-none animate-fade-in" };
const _hoisted_5$1 = {
  key: 0,
  class: "text-[10px] font-semibold text-white/60 uppercase tracking-widest mb-3 px-3 text-left animate-fade-in"
};
const _hoisted_6$1 = {
  key: 1,
  class: "h-px bg-white/40 my-3 mx-1"
};
const _hoisted_7$1 = { class: "space-y-1" };
const _hoisted_8$1 = ["onMouseenter"];
const _hoisted_9$1 = {
  key: 0,
  class: "tracking-wide animate-fade-in"
};
const _hoisted_10$1 = {
  key: 0,
  class: "text-[10px] font-semibold text-white/60 uppercase tracking-widest mb-3 px-3 text-left animate-fade-in"
};
const _hoisted_11$1 = {
  key: 1,
  class: "h-px bg-white/40 my-3 mx-1"
};
const _hoisted_12$1 = { class: "space-y-1" };
const _hoisted_13$1 = ["onMouseenter"];
const _hoisted_14$1 = {
  key: 0,
  class: "tracking-wide animate-fade-in"
};
const _hoisted_15$1 = { class: "p-4 border-t border-white/10 bg-transparent z-10 flex flex-col justify-end flex-shrink-0 min-h-0" };
const _hoisted_16$1 = { class: "relative" };
const _hoisted_17$1 = { class: "w-9 h-9 rounded-full bg-white/15 border border-white/10 text-white font-bold flex items-center justify-center text-xs flex-shrink-0 overflow-hidden" };
const _hoisted_18$1 = ["src"];
const _hoisted_19$1 = { key: 1 };
const _hoisted_20$1 = {
  key: 0,
  class: "flex-1 ml-3 min-w-0 text-left"
};
const _hoisted_21 = { class: "text-xs font-bold text-white truncate block" };
const _hoisted_22 = { class: "text-[10px] text-purple-200 truncate block mt-0.5" };
const _hoisted_23 = {
  key: 1,
  class: "p-1 hover:bg-white/10 rounded-lg transition-colors"
};
const _hoisted_24 = {
  key: 0,
  class: "absolute bottom-14 left-0 right-0 bg-purple-800 border border-slate-400 rounded-2xl shadow-xl p-1.5 z-[100] flex flex-col space-y-0.5 animate-fade-in text-left"
};
const _hoisted_25 = { class: "px-3 py-1.5 text-[10px] font-bold text-white/60 uppercase tracking-widest border-b border-white/10 mb-1" };
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "SuperAdminSidebar",
  props: {
    isOpen: { type: Boolean },
    isCollapsed: { type: Boolean }
  },
  emits: ["close", "toggle-collapse"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    useRoute();
    const { logout: authLogout, user, settings } = useAuth();
    const { showConfirm } = useSwal();
    const isDesktop = ref(window.innerWidth >= 1024);
    const handleResize = () => {
      isDesktop.value = window.innerWidth >= 1024;
    };
    const showCollapsed = computed(() => props.isCollapsed && isDesktop.value);
    const showProfileDropdown = ref(false);
    const activeTooltipText = ref("");
    const activeTooltipTop = ref(0);
    const showGlobalTooltip = ref(false);
    const profileDropdownBottom = ref(0);
    const handleMouseEnter = (event, label) => {
      if (!showCollapsed.value) return;
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
    watch(showCollapsed, (collapsed) => {
      if (collapsed) {
        showProfileDropdown.value = false;
      }
    });
    const userInitials = computed(() => {
      if (!user.value?.name) return "SA";
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
      { path: "/superadmin/dashboard", label: "Dashboard", icon: House },
      { path: "/superadmin/libraries", label: "Libraries", icon: Library },
      { path: "/superadmin/librarians", label: "Librarians", icon: UserCheck },
      { path: "/superadmin/users", label: "Students", icon: Users },
      { path: "/superadmin/events", label: "Events", icon: Calendar }
    ];
    const systemItems = [
      { path: "/superadmin/analytics", label: "Analytics & Reports", icon: ChartColumn },
      { path: "/superadmin/support", label: "Support & Complaints", icon: LifeBuoy },
      { path: "/superadmin/settings", label: "System Settings", icon: Settings }
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
            "fixed inset-y-0 left-0 z-50 flex flex-col bg-purple-700 border-r border-white/10 shadow-2xl transition-all duration-300 ease-in-out",
            // Mobile: always full width sidebar, translate in/out
            "w-72",
            // Desktop overrides: relative h-full and width depends on collapsed state
            __props.isCollapsed ? "lg:w-20 lg:shadow-none lg:relative lg:top-0 lg:h-full lg:flex-shrink-0 lg:overflow-hidden" : "lg:w-64 lg:shadow-none lg:relative lg:top-0 lg:h-full lg:flex-shrink-0 lg:overflow-hidden",
            // Translate: hidden on mobile unless open, always visible on desktop
            __props.isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
          ])
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
                createVNode(unref(ShieldCheck), { class: "w-5 h-5 text-white" })
              ]),
              !__props.isCollapsed || !isDesktop.value ? (openBlock(), createElementBlock("div", _hoisted_3$2, [
                createBaseVNode("h1", _hoisted_4$2, toDisplayString(unref(settings).site_name || "SmartLib"), 1),
                _cache[8] || (_cache[8] = createBaseVNode("p", { class: "text-[9px] font-bold text-purple-200 tracking-wider uppercase mt-1 leading-none animate-fade-in" }, "Super Admin Portal", -1))
              ])) : createCommentVNode("", true)
            ])) : createCommentVNode("", true),
            showCollapsed.value ? (openBlock(), createElementBlock("button", {
              key: 1,
              onClick: _cache[0] || (_cache[0] = withModifiers(($event) => _ctx.$emit("toggle-collapse"), ["stop"])),
              class: "hidden lg:flex w-9 h-9 items-center justify-center bg-white/15 hover:bg-white/25 active:bg-white/35 text-white rounded-full shadow-md shadow-white/5 transition-all duration-200 cursor-pointer animate-fade-in flex-shrink-0"
            }, [
              createVNode(unref(ShieldCheck), { class: "w-5 h-5 text-white" })
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
              "flex-1 px-2.5 py-5 space-y-5 transition-all duration-300 overflow-y-auto"
            ]),
            style: { "scrollbar-width": "none", "-ms-overflow-style": "none" }
          }, [
            createBaseVNode("div", null, [
              !showCollapsed.value ? (openBlock(), createElementBlock("h3", _hoisted_5$1, " Management ")) : (openBlock(), createElementBlock("div", _hoisted_6$1)),
              createBaseVNode("div", _hoisted_7$1, [
                (openBlock(), createElementBlock(Fragment, null, renderList(mainNavItems, (item) => {
                  return createVNode(_component_router_link, {
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
                          isLinkActive ? "bg-white text-purple-700 shadow-md shadow-purple-950/15 animate-fade-in" : "text-white hover:bg-white/10"
                        ])
                      }, [
                        (openBlock(), createBlock(resolveDynamicComponent(item.icon), {
                          class: normalizeClass([
                            "w-5 h-5 transition-colors",
                            isLinkActive ? "text-purple-700" : "text-white/90 group-hover:text-white"
                          ])
                        }, null, 8, ["class"])),
                        !showCollapsed.value ? (openBlock(), createElementBlock("span", _hoisted_9$1, toDisplayString(item.label), 1)) : createCommentVNode("", true)
                      ], 42, _hoisted_8$1)
                    ]),
                    _: 2
                  }, 1032, ["to"]);
                }), 64))
              ])
            ]),
            createBaseVNode("div", null, [
              !showCollapsed.value ? (openBlock(), createElementBlock("h3", _hoisted_10$1, " System ")) : (openBlock(), createElementBlock("div", _hoisted_11$1)),
              createBaseVNode("div", _hoisted_12$1, [
                (openBlock(), createElementBlock(Fragment, null, renderList(systemItems, (item) => {
                  return createVNode(_component_router_link, {
                    key: item.path,
                    to: item.path,
                    onClick: _cache[3] || (_cache[3] = ($event) => _ctx.$emit("close"))
                  }, {
                    default: withCtx(({ isActive: isLinkActive }) => [
                      createBaseVNode("div", {
                        onMouseenter: ($event) => handleMouseEnter($event, item.label),
                        onMouseleave: handleMouseLeave,
                        class: normalizeClass([
                          "flex items-center transition-all duration-200 group cursor-pointer relative",
                          showCollapsed.value ? "justify-center w-12 h-12 mx-auto my-1 rounded-xl animate-fade-in" : "px-3 py-3 mx-1.5 my-1 space-x-2 rounded-xl font-medium text-sm",
                          isLinkActive ? "bg-white text-purple-700 shadow-md shadow-purple-950/15 animate-fade-in" : "text-white hover:bg-white/10"
                        ])
                      }, [
                        (openBlock(), createBlock(resolveDynamicComponent(item.icon), {
                          class: normalizeClass([
                            "w-5 h-5 transition-colors",
                            isLinkActive ? "text-purple-700" : "text-white/90 group-hover:text-white"
                          ])
                        }, null, 8, ["class"])),
                        !showCollapsed.value ? (openBlock(), createElementBlock("span", _hoisted_14$1, toDisplayString(item.label), 1)) : createCommentVNode("", true)
                      ], 42, _hoisted_13$1)
                    ]),
                    _: 2
                  }, 1032, ["to"]);
                }), 64))
              ])
            ])
          ], 32),
          createBaseVNode("div", _hoisted_15$1, [
            createBaseVNode("div", _hoisted_16$1, [
              createBaseVNode("div", {
                onMouseenter: _cache[4] || (_cache[4] = ($event) => handleMouseEnter($event, "User Profile & Menu")),
                onMouseleave: handleMouseLeave,
                class: normalizeClass([
                  "flex items-center justify-between rounded-2xl hover:bg-white/10 transition-colors relative cursor-pointer group",
                  __props.isCollapsed && isDesktop.value ? "p-1 justify-center" : "p-2"
                ]),
                onClick: toggleProfileDropdown
              }, [
                createBaseVNode("div", _hoisted_17$1, [
                  unref(user)?.profile_picture ? (openBlock(), createElementBlock("img", {
                    key: 0,
                    src: getProfilePictureUrl(unref(user).profile_picture),
                    alt: "Profile",
                    class: "w-full h-full object-cover"
                  }, null, 8, _hoisted_18$1)) : (openBlock(), createElementBlock("span", _hoisted_19$1, toDisplayString(userInitials.value), 1))
                ]),
                !showCollapsed.value ? (openBlock(), createElementBlock("div", _hoisted_20$1, [
                  createBaseVNode("span", _hoisted_21, toDisplayString(unref(user)?.name), 1),
                  createBaseVNode("span", _hoisted_22, toDisplayString(unref(user)?.email), 1)
                ])) : createCommentVNode("", true),
                !showCollapsed.value ? (openBlock(), createElementBlock("div", _hoisted_23, [
                  createVNode(unref(EllipsisVertical), { class: "w-4 h-4 text-white/80 hover:text-white" })
                ])) : createCommentVNode("", true)
              ], 34),
              showProfileDropdown.value && !showCollapsed.value ? (openBlock(), createElementBlock("div", _hoisted_24, [
                createVNode(_component_router_link, {
                  to: "/superadmin/profile",
                  onClick: _cache[5] || (_cache[5] = ($event) => showProfileDropdown.value = false),
                  class: "flex items-center space-x-2.5 px-3 py-2 text-xs font-semibold text-white hover:bg-white/10 rounded-xl transition-colors"
                }, {
                  default: withCtx(() => [
                    createVNode(unref(User), { class: "w-4 h-4 text-white/80" }),
                    _cache[9] || (_cache[9] = createBaseVNode("span", null, "My Profile", -1))
                  ]),
                  _: 1
                }),
                createBaseVNode("button", {
                  onClick: handleLogout,
                  class: "w-full flex items-center space-x-2.5 px-3 py-2 text-xs font-bold text-red-200 hover:bg-red-950/30 rounded-xl transition-colors text-left"
                }, [
                  createVNode(unref(LogOut), { class: "w-4 h-4" }),
                  _cache[10] || (_cache[10] = createBaseVNode("span", null, "Sign Out", -1))
                ])
              ])) : createCommentVNode("", true),
              (openBlock(), createBlock(Teleport, { to: "body" }, [
                showProfileDropdown.value && showCollapsed.value ? (openBlock(), createElementBlock("div", {
                  key: 0,
                  class: "fixed z-[9999] animate-fade-in w-48 bg-purple-800 border border-white/10 rounded-2xl shadow-xl p-1.5 flex flex-col space-y-0.5 text-left",
                  style: normalizeStyle({
                    bottom: `${profileDropdownBottom.value}px`,
                    left: "80px"
                  }),
                  onClick: _cache[7] || (_cache[7] = withModifiers(() => {
                  }, ["stop"]))
                }, [
                  createBaseVNode("div", _hoisted_25, toDisplayString(unref(user)?.name), 1),
                  createVNode(_component_router_link, {
                    to: "/superadmin/profile",
                    onClick: _cache[6] || (_cache[6] = ($event) => showProfileDropdown.value = false),
                    class: "flex items-center space-x-2.5 px-3 py-2 text-xs font-semibold text-white hover:bg-white/10 rounded-xl transition-colors"
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(User), { class: "w-4 h-4 text-white/80" }),
                      _cache[11] || (_cache[11] = createBaseVNode("span", null, "My Profile", -1))
                    ]),
                    _: 1
                  }),
                  createBaseVNode("button", {
                    onClick: handleLogout,
                    class: "w-full flex items-center space-x-2.5 px-3 py-2 text-xs font-bold text-red-200 hover:bg-red-950/30 rounded-xl transition-colors text-left"
                  }, [
                    createVNode(unref(LogOut), { class: "w-4 h-4" }),
                    _cache[12] || (_cache[12] = createBaseVNode("span", null, "Sign Out", -1))
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
            _cache[13] || (_cache[13] = createBaseVNode("div", { class: "absolute right-full top-1/2 -translate-y-1/2 border-4 border-transparent border-r-slate-900" }, null, -1))
          ], 4)) : createCommentVNode("", true)
        ]))
      ], 64);
    };
  }
});
const SuperAdminSidebar = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-0a39fcbd"]]);
const _hoisted_1$1 = { class: "bg-white/90 backdrop-blur-md border-b border-slate-100 px-6 py-3 transition-all duration-300 sticky top-0 z-40" };
const _hoisted_2$1 = { class: "flex items-center justify-between" };
const _hoisted_3$1 = { class: "flex items-center space-x-4" };
const _hoisted_4$1 = { class: "hidden lg:block text-left" };
const _hoisted_5 = { class: "text-xl font-bold text-slate-800 tracking-tight leading-none" };
const _hoisted_6 = { class: "text-xs font-medium text-slate-400 mt-1.5 leading-none" };
const _hoisted_7 = { class: "flex items-center space-x-3.5" };
const _hoisted_8 = { class: "hidden md:flex items-center space-x-4 mr-4" };
const _hoisted_9 = { class: "text-xs font-semibold text-green-700 whitespace-nowrap" };
const _hoisted_10 = { class: "text-xs font-semibold text-orange-700 whitespace-nowrap" };
const _hoisted_11 = { class: "w-8 h-8 bg-purple-600/10 text-purple-600 font-bold flex items-center justify-center rounded-full overflow-hidden shadow-sm border border-purple-500/10 flex-shrink-0" };
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
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "SuperAdminTopbar",
  emits: ["menu-click"],
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
      if (path.includes("/superadmin/dashboard")) return "Dashboard";
      if (path.includes("/superadmin/libraries")) {
        if (route.params.id) return "Library Details";
        return "Libraries";
      }
      if (path.includes("/superadmin/librarians")) return "Librarians";
      if (path.includes("/superadmin/users")) return "Students";
      if (path.includes("/superadmin/bookings")) return "Seat Bookings";
      if (path.includes("/superadmin/books")) return "Book Inventory";
      if (path.includes("/superadmin/events")) return "Events";
      if (path.includes("/superadmin/attendance")) return "Attendance";
      if (path.includes("/superadmin/support")) return "Support & Complaints";
      if (path.includes("/superadmin/floors")) return "Floor Management";
      if (path.includes("/superadmin/sections")) return "Section Management";
      if (path.includes("/superadmin/seats")) return "Seat Management";
      if (path.includes("/superadmin/settings")) return "System Settings";
      if (path.includes("/superadmin/analytics") || path.includes("/superadmin/reports")) return "Analytics & Reports";
      if (path.includes("/superadmin/profile")) return "My Profile";
      return route.meta?.title || "Dashboard";
    });
    const pageSubtitle = computed(() => {
      const path = route.path;
      if (path.includes("/superadmin/dashboard")) return "System-wide activity and operations overview";
      if (path.includes("/superadmin/libraries")) {
        if (route.params.id) return "Detailed information and analytics for this library";
        return "Manage and configure system libraries";
      }
      if (path.includes("/superadmin/librarians")) return "Manage system librarians and their accounts";
      if (path.includes("/superadmin/users")) return "Manage student profiles, search, and authorizations";
      if (path.includes("/superadmin/bookings")) return "View and manage seat reservation history";
      if (path.includes("/superadmin/books")) return "View catalog copy counts and system-wide inventory";
      if (path.includes("/superadmin/events")) return "Oversee scheduled events, workshops, and registrations";
      if (path.includes("/superadmin/attendance")) return "View seat booking session check-in logs";
      if (path.includes("/superadmin/support")) return "Manage user feedback, support requests, and complaints";
      if (path.includes("/superadmin/floors")) return "Configure library building layout and floor details";
      if (path.includes("/superadmin/sections")) return "Configure sections and zones within library floors";
      if (path.includes("/superadmin/seats")) return "Configure seats, rules, and layout templates";
      if (path.includes("/superadmin/settings")) return "Manage system configurations, policies, and parameters";
      if (path.includes("/superadmin/analytics") || path.includes("/superadmin/reports")) return "View system occupancy, check-ins, charts, and generate reports";
      if (path.includes("/superadmin/profile")) return "Update your credentials and account information";
      return "";
    });
    const fetchStats = async () => {
      try {
        const data = await adminAPI.getAllBookingStats();
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
      if (!user.value?.name) return "SA";
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
              onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("menu-click")),
              class: "p-2 rounded-xl text-slate-500 hover:bg-slate-50 hover:text-purple-600 lg:hidden border border-slate-100 transition-colors cursor-pointer"
            }, [
              createVNode(unref(Menu), { class: "w-5 h-5" })
            ]),
            createBaseVNode("div", _hoisted_4$1, [
              createBaseVNode("h1", _hoisted_5, toDisplayString(pageTitle.value), 1),
              createBaseVNode("p", _hoisted_6, toDisplayString(pageSubtitle.value), 1)
            ])
          ]),
          createBaseVNode("div", _hoisted_7, [
            createBaseVNode("div", _hoisted_8, [
              createVNode(_component_router_link, {
                to: "/superadmin/bookings",
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
                to: "/superadmin/bookings",
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
                class: "flex items-center space-x-3 px-3 py-2 rounded-xl text-slate-655 hover:bg-slate-50 hover:text-purple-600 transition-all duration-200 border border-slate-100/50 cursor-pointer"
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
                  _cache[6] || (_cache[6] = createBaseVNode("div", { class: "text-[9px] font-semibold text-slate-400 uppercase tracking-wider mt-1.5 leading-none" }, " Super Admin ", -1))
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
                    to: "/superadmin/profile",
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
                    to: "/superadmin/settings",
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
                    class: "w-full flex items-center space-x-2.5 px-3 py-2 text-xs font-bold text-red-655 hover:bg-red-50 rounded-xl transition-colors text-left cursor-pointer"
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
const SuperAdminTopbar = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-5fee7e72"]]);
const _hoisted_1 = { key: 0 };
const _hoisted_2 = {
  key: 1,
  class: "h-screen bg-gray-50 flex superadmin-portal overflow-hidden"
};
const _hoisted_3 = { class: "flex-1 flex flex-col min-h-0 overflow-hidden" };
const _hoisted_4 = { class: "flex-1 overflow-x-hidden overflow-y-auto bg-gray-50 p-4 lg:p-8" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Layout",
  setup(__props) {
    const { user, fetchSettings } = useAuth();
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
      fetchSettings();
      lockBody();
    });
    onUnmounted(() => {
      unlockBody();
    });
    return (_ctx, _cache) => {
      return !unref(user) ? (openBlock(), createElementBlock("div", _hoisted_1, [
        renderSlot(_ctx.$slots, "default")
      ])) : (openBlock(), createElementBlock("div", _hoisted_2, [
        createVNode(SuperAdminSidebar, {
          "is-open": sidebarOpen.value,
          "is-collapsed": sidebarCollapsed.value,
          onClose: _cache[0] || (_cache[0] = ($event) => sidebarOpen.value = false),
          onToggleCollapse: toggleCollapse
        }, null, 8, ["is-open", "is-collapsed"]),
        createBaseVNode("div", _hoisted_3, [
          createVNode(SuperAdminTopbar, {
            onMenuClick: _cache[1] || (_cache[1] = ($event) => sidebarOpen.value = true),
            onToggleSidebar: _cache[2] || (_cache[2] = ($event) => sidebarOpen.value = !sidebarOpen.value)
          }),
          createBaseVNode("main", _hoisted_4, [
            renderSlot(_ctx.$slots, "default")
          ])
        ]),
        sidebarOpen.value ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: "fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden",
          onClick: _cache[3] || (_cache[3] = ($event) => sidebarOpen.value = false)
        })) : createCommentVNode("", true)
      ]));
    };
  }
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "SuperAdminApp",
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
