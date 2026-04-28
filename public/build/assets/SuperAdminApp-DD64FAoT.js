import { d as defineComponent, p as useAuth, c as createElementBlock, n as normalizeClass, b as createBaseVNode, f as createVNode, u as unref, t as toDisplayString, F as Fragment, h as renderList, w as withCtx, k as createBlock, m as createCommentVNode, l as resolveDynamicComponent, g as resolveComponent, i as openBlock, r as ref, o as onMounted, C as onUnmounted, U as adminAPI, G as renderSlot } from "./main-TSJawxZI.js";
import { X } from "./x-DS-hgcEd.js";
import { S as ShieldCheck } from "./shield-check-Cl_YhMt9.js";
import { L as LogOut } from "./log-out-DYduLIQX.js";
import { C as ChevronRight } from "./chevron-right-BIQ-JJd8.js";
import { H as House } from "./house-CMIDZtrZ.js";
import { L as Library } from "./library-BmYU69ZO.js";
import { U as UserCheck } from "./user-check-BxsAztiq.js";
import { U as Users } from "./users-D373qUzk.js";
import { C as Calendar } from "./calendar-13efgUbN.js";
import { C as ChartColumn } from "./chart-column-NDtKoNz5.js";
import { L as LifeBuoy } from "./life-buoy-t0HGr7_6.js";
import { S as Settings } from "./settings-H6QRjxQ9.js";
import { M as Menu } from "./menu-UQ_C8qcN.js";
import { U as User } from "./user-B2ziQmrW.js";
/* empty css               */
import "./createLucideIcon-Dj92g2Ex.js";
const _hoisted_1$2 = { class: "bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-6 relative" };
const _hoisted_2$2 = { class: "flex items-center space-x-3 mb-4" };
const _hoisted_3$2 = { class: "w-10 h-10 bg-white bg-opacity-20 rounded-lg flex items-center justify-center" };
const _hoisted_4$2 = { class: "text-lg font-bold" };
const _hoisted_5$1 = { class: "flex-1 px-4 py-6 space-y-6 overflow-y-auto" };
const _hoisted_6$1 = { class: "space-y-1" };
const _hoisted_7$1 = { class: "font-medium text-sm" };
const _hoisted_8$1 = { class: "space-y-1" };
const _hoisted_9$1 = { class: "font-medium text-sm" };
const _hoisted_10$1 = { class: "border-t border-gray-200 p-4" };
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "SuperAdminSidebar",
  props: {
    isOpen: { type: Boolean }
  },
  emits: ["close"],
  setup(__props) {
    const { logout, settings } = useAuth();
    const mainNavItems = [
      { path: "/superadmin/dashboard", label: "Dashboard", icon: House },
      { path: "/superadmin/libraries", label: "Libraries", icon: Library },
      { path: "/superadmin/librarians", label: "Librarians", icon: UserCheck },
      { path: "/superadmin/users", label: "Students", icon: Users },
      { path: "/superadmin/events", label: "Events", icon: Calendar }
    ];
    const systemNavItems = [
      { path: "/superadmin/analytics", label: "Analytics", icon: ChartColumn },
      { path: "/superadmin/support", label: "Support & Complaints", icon: LifeBuoy },
      { path: "/superadmin/settings", label: "System Settings", icon: Settings }
    ];
    return (_ctx, _cache) => {
      const _component_router_link = resolveComponent("router-link");
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([
          "fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-xl transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0",
          __props.isOpen ? "translate-x-0" : "-translate-x-full"
        ])
      }, [
        createBaseVNode("div", _hoisted_1$2, [
          createBaseVNode("button", {
            onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("close")),
            class: "absolute top-4 right-4 text-white hover:bg-white hover:bg-opacity-20 rounded-lg p-1 lg:hidden"
          }, [
            createVNode(unref(X), { class: "w-5 h-5" })
          ]),
          createBaseVNode("div", _hoisted_2$2, [
            createBaseVNode("div", _hoisted_3$2, [
              createVNode(unref(ShieldCheck), { class: "w-6 h-6 text-white" })
            ]),
            createBaseVNode("div", null, [
              createBaseVNode("h1", _hoisted_4$2, toDisplayString(unref(settings).site_name || "Smart Lib"), 1),
              _cache[4] || (_cache[4] = createBaseVNode("p", { class: "text-xs opacity-90" }, "Super Admin", -1))
            ])
          ])
        ]),
        createBaseVNode("nav", _hoisted_5$1, [
          createBaseVNode("div", null, [
            _cache[5] || (_cache[5] = createBaseVNode("h3", { class: "text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 px-3" }, " Management ", -1)),
            createBaseVNode("div", _hoisted_6$1, [
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
                        isLinkActive ? "bg-indigo-50 text-indigo-700 border-r-2 border-indigo-600" : "text-gray-600 hover:bg-gray-50 hover:text-indigo-600"
                      ])
                    }, [
                      (openBlock(), createBlock(resolveDynamicComponent(item.icon), {
                        class: normalizeClass(["w-5 h-5", isLinkActive ? "text-indigo-600" : "text-gray-400 group-hover:text-indigo-500"])
                      }, null, 8, ["class"])),
                      createBaseVNode("span", _hoisted_7$1, toDisplayString(item.label), 1),
                      isLinkActive ? (openBlock(), createBlock(unref(ChevronRight), {
                        key: 0,
                        class: "w-4 h-4 ml-auto text-indigo-600"
                      })) : createCommentVNode("", true)
                    ], 2)
                  ]),
                  _: 2
                }, 1032, ["to"]);
              }), 64))
            ])
          ]),
          createBaseVNode("div", null, [
            _cache[6] || (_cache[6] = createBaseVNode("h3", { class: "text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 px-3" }, " System ", -1)),
            createBaseVNode("div", _hoisted_8$1, [
              (openBlock(), createElementBlock(Fragment, null, renderList(systemNavItems, (item) => {
                return createVNode(_component_router_link, {
                  key: item.path,
                  to: item.path,
                  onClick: _cache[2] || (_cache[2] = ($event) => _ctx.$emit("close"))
                }, {
                  default: withCtx(({ isActive: isLinkActive }) => [
                    createBaseVNode("div", {
                      class: normalizeClass([
                        "flex items-center space-x-3 px-3 py-2 rounded-lg transition-all duration-200 group cursor-pointer",
                        isLinkActive ? "bg-indigo-50 text-indigo-700 border-r-2 border-indigo-600" : "text-gray-600 hover:bg-gray-50 hover:text-indigo-600"
                      ])
                    }, [
                      (openBlock(), createBlock(resolveDynamicComponent(item.icon), {
                        class: normalizeClass(["w-5 h-5", isLinkActive ? "text-indigo-600" : "text-gray-400 group-hover:text-indigo-500"])
                      }, null, 8, ["class"])),
                      createBaseVNode("span", _hoisted_9$1, toDisplayString(item.label), 1),
                      isLinkActive ? (openBlock(), createBlock(unref(ChevronRight), {
                        key: 0,
                        class: "w-4 h-4 ml-auto text-indigo-600"
                      })) : createCommentVNode("", true)
                    ], 2)
                  ]),
                  _: 2
                }, 1032, ["to"]);
              }), 64))
            ])
          ])
        ]),
        createBaseVNode("div", _hoisted_10$1, [
          createBaseVNode("button", {
            onClick: _cache[3] || (_cache[3] = //@ts-ignore
            (...args) => unref(logout) && unref(logout)(...args)),
            class: "w-full flex items-center space-x-2 px-3 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
          }, [
            createVNode(unref(LogOut), { class: "w-4 h-4" }),
            _cache[7] || (_cache[7] = createBaseVNode("span", { class: "text-sm font-medium" }, "Sign Out", -1))
          ])
        ])
      ], 2);
    };
  }
});
const _hoisted_1$1 = { class: "bg-white border-b border-gray-200 h-16 flex items-center justify-between px-4 lg:px-8 sticky top-0 z-30" };
const _hoisted_2$1 = { class: "flex items-center" };
const _hoisted_3$1 = { class: "flex items-center space-x-4" };
const _hoisted_4$1 = { class: "hidden md:flex items-center space-x-4 mr-4" };
const _hoisted_5 = { class: "text-xs font-semibold text-green-700 whitespace-nowrap" };
const _hoisted_6 = { class: "text-xs font-semibold text-orange-700 whitespace-nowrap" };
const _hoisted_7 = { class: "hidden md:block text-right" };
const _hoisted_8 = { class: "text-sm font-semibold text-gray-800" };
const _hoisted_9 = { class: "w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center border-2 border-indigo-50 overflow-hidden" };
const _hoisted_10 = ["src"];
const _hoisted_11 = {
  key: 0,
  class: "absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50"
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "SuperAdminTopbar",
  emits: ["menu-click"],
  setup(__props) {
    const { user, logout } = useAuth();
    const showUserMenu = ref(false);
    const stats = ref({
      active: 0,
      pending: 0
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
      await logout();
    };
    const getProfilePictureUrl = (path) => {
      if (path.startsWith("http")) return path;
      return `/storage/${path}`;
    };
    const userMenuRef = ref(null);
    const handleClickOutside = (event) => {
      if (userMenuRef.value && !userMenuRef.value.contains(event.target)) {
        showUserMenu.value = false;
      }
    };
    onMounted(() => {
      fetchStats();
      const interval = setInterval(fetchStats, 3e4);
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        clearInterval(interval);
        document.removeEventListener("mousedown", handleClickOutside);
      };
    });
    onUnmounted(() => {
      document.removeEventListener("mousedown", handleClickOutside);
    });
    return (_ctx, _cache) => {
      const _component_router_link = resolveComponent("router-link");
      return openBlock(), createElementBlock("header", _hoisted_1$1, [
        createBaseVNode("div", _hoisted_2$1, [
          createBaseVNode("button", {
            onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("menu-click")),
            class: "p-2 rounded-lg text-gray-600 hover:bg-gray-100 lg:hidden mr-2"
          }, [
            createVNode(unref(Menu), { class: "w-6 h-6" })
          ])
        ]),
        createBaseVNode("div", _hoisted_3$1, [
          createBaseVNode("div", _hoisted_4$1, [
            createVNode(_component_router_link, {
              to: "/superadmin/bookings",
              class: "flex items-center px-3 py-1.5 bg-green-50 rounded-full border border-green-100 shadow-sm hover:bg-green-100 transition-colors cursor-pointer"
            }, {
              default: withCtx(() => [
                _cache[4] || (_cache[4] = createBaseVNode("div", { class: "relative flex items-center justify-center mr-2" }, [
                  createBaseVNode("div", { class: "w-2 h-2 rounded-full bg-green-500" }),
                  createBaseVNode("div", { class: "absolute w-2 h-2 rounded-full bg-green-500 animate-ping opacity-75" })
                ], -1)),
                createBaseVNode("span", _hoisted_5, toDisplayString(stats.value.active) + " Active ", 1)
              ]),
              _: 1
            }),
            createVNode(_component_router_link, {
              to: "/superadmin/bookings",
              class: "flex items-center px-3 py-1.5 bg-orange-50 rounded-full border border-orange-100 shadow-sm hover:bg-orange-100 transition-colors cursor-pointer"
            }, {
              default: withCtx(() => [
                _cache[5] || (_cache[5] = createBaseVNode("div", { class: "w-2 h-2 rounded-full bg-orange-500 mr-2" }, null, -1)),
                createBaseVNode("span", _hoisted_6, toDisplayString(stats.value.pending) + " Pending ", 1)
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
              class: "flex items-center space-x-3 pl-2 md:pl-4 border-l border-gray-200 hover:bg-gray-50 rounded-lg p-2 transition-colors"
            }, [
              createBaseVNode("div", _hoisted_7, [
                createBaseVNode("div", _hoisted_8, toDisplayString(unref(user)?.name), 1),
                _cache[6] || (_cache[6] = createBaseVNode("div", { class: "text-xs text-gray-500" }, "Super Admin", -1))
              ]),
              createBaseVNode("div", _hoisted_9, [
                unref(user)?.profile_picture ? (openBlock(), createElementBlock("img", {
                  key: 0,
                  src: getProfilePictureUrl(unref(user).profile_picture),
                  alt: "Profile",
                  class: "w-full h-full object-cover"
                }, null, 8, _hoisted_10)) : (openBlock(), createBlock(unref(User), {
                  key: 1,
                  class: "w-6 h-6 text-indigo-600"
                }))
              ])
            ]),
            showUserMenu.value ? (openBlock(), createElementBlock("div", _hoisted_11, [
              createVNode(_component_router_link, {
                to: "/superadmin/profile",
                class: "flex items-center space-x-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50",
                onClick: _cache[2] || (_cache[2] = ($event) => showUserMenu.value = false)
              }, {
                default: withCtx(() => [
                  createVNode(unref(User), { class: "w-4 h-4" }),
                  _cache[7] || (_cache[7] = createBaseVNode("span", null, "My Profile", -1))
                ]),
                _: 1
              }),
              createVNode(_component_router_link, {
                to: "/superadmin/settings",
                class: "flex items-center space-x-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50",
                onClick: _cache[3] || (_cache[3] = ($event) => showUserMenu.value = false)
              }, {
                default: withCtx(() => [
                  createVNode(unref(Settings), { class: "w-4 h-4" }),
                  _cache[8] || (_cache[8] = createBaseVNode("span", null, "Settings", -1))
                ]),
                _: 1
              }),
              _cache[10] || (_cache[10] = createBaseVNode("hr", { class: "my-2" }, null, -1)),
              createBaseVNode("button", {
                onClick: handleLogout,
                class: "w-full flex items-center space-x-2 px-4 py-2 text-sm text-red-600 hover:bg-red-50"
              }, [
                createVNode(unref(LogOut), { class: "w-4 h-4" }),
                _cache[9] || (_cache[9] = createBaseVNode("span", null, "Sign Out", -1))
              ])
            ])) : createCommentVNode("", true)
          ], 512)
        ])
      ]);
    };
  }
});
const _hoisted_1 = { key: 0 };
const _hoisted_2 = {
  key: 1,
  class: "min-h-screen bg-gray-50 flex"
};
const _hoisted_3 = { class: "flex-1 flex flex-col overflow-hidden" };
const _hoisted_4 = { class: "flex-1 overflow-x-hidden overflow-y-auto bg-gray-50 p-4 lg:p-8" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Layout",
  setup(__props) {
    const { user, fetchSettings } = useAuth();
    const sidebarOpen = ref(false);
    onMounted(() => {
      fetchSettings();
    });
    return (_ctx, _cache) => {
      return !unref(user) ? (openBlock(), createElementBlock("div", _hoisted_1, [
        renderSlot(_ctx.$slots, "default")
      ])) : (openBlock(), createElementBlock("div", _hoisted_2, [
        createVNode(_sfc_main$3, {
          "is-open": sidebarOpen.value,
          onClose: _cache[0] || (_cache[0] = ($event) => sidebarOpen.value = false)
        }, null, 8, ["is-open"]),
        createBaseVNode("div", _hoisted_3, [
          createVNode(_sfc_main$2, {
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
