import { d as defineComponent, p as useAuth, c as createElementBlock, n as normalizeClass, b as createBaseVNode, f as createVNode, u as unref, F as Fragment, h as renderList, w as withCtx, k as createBlock, m as createCommentVNode, l as resolveDynamicComponent, t as toDisplayString, g as resolveComponent, i as openBlock, r as ref, o as onMounted, Q as librarianAPI, A as useRouter } from "./main-DCJXrkf-.js";
import { u as useSwal } from "./useSwal-BUxo5JBv.js";
import { X } from "./x-BkNPvJ70.js";
import { B as BookOpen } from "./book-open-CmZbSzMF.js";
import { L as LogOut } from "./log-out--hPc7NJn.js";
import { C as ChevronRight } from "./chevron-right-SSQMZ9HW.js";
import { H as House } from "./house-CHA4MvW2.js";
import { C as Calendar } from "./calendar-DLVGkrUu.js";
import { B as Building2 } from "./building-2-DcNTcpv2.js";
import { U as UserCheck } from "./user-check-Be1AQ7aH.js";
import { c as createLucideIcon } from "./createLucideIcon-CDsoUk2K.js";
import { U as Users } from "./users-23JKef0Y.js";
import { B as BookMarked } from "./book-marked-DzgVwKLt.js";
import { C as Clock } from "./clock-B7PYed5-.js";
import { L as LifeBuoy } from "./life-buoy-CJiKNpLk.js";
import { C as ChartColumn } from "./chart-column-D_Bhh0Vi.js";
import { M as Menu } from "./menu-CtHUs0hp.js";
import { U as User } from "./user-C8gwTBBi.js";
import { C as ChevronDown } from "./chevron-down-Bg0y50h0.js";
import { S as Settings } from "./settings-DZyFQQ9L.js";
/* empty css               */
const LayoutGrid = createLucideIcon("layout-grid", [
  ["rect", { width: "7", height: "7", x: "3", y: "3", rx: "1", key: "1g98yp" }],
  ["rect", { width: "7", height: "7", x: "14", y: "3", rx: "1", key: "6d4xhi" }],
  ["rect", { width: "7", height: "7", x: "14", y: "14", rx: "1", key: "nxv5o0" }],
  ["rect", { width: "7", height: "7", x: "3", y: "14", rx: "1", key: "1bb6yr" }]
]);
const _hoisted_1$2 = { class: "bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-6 relative" };
const _hoisted_2$2 = { class: "flex items-center space-x-3 mb-4" };
const _hoisted_3$2 = { class: "w-10 h-10 bg-white bg-opacity-20 rounded-lg flex items-center justify-center" };
const _hoisted_4$1 = {
  class: "flex-1 px-4 py-6 space-y-6 overflow-y-auto",
  style: { "max-height": "calc(100vh - 250px)" }
};
const _hoisted_5$1 = { class: "space-y-1" };
const _hoisted_6$1 = { class: "font-medium text-sm" };
const _hoisted_7$1 = { class: "space-y-1" };
const _hoisted_8$1 = { class: "font-medium text-sm" };
const _hoisted_9$1 = { class: "space-y-1" };
const _hoisted_10$1 = { class: "font-medium text-sm" };
const _hoisted_11$1 = { class: "border-t border-gray-200 p-4" };
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "LibrarianSidebar",
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
      { path: "/librarian/dashboard", label: "Dashboard", icon: House, exact: true },
      { path: "/librarian/bookings", label: "Seat Bookings", icon: Calendar },
      { path: "/librarian/library", label: "Library Info", icon: Building2 }
    ];
    const managementItems = [
      { path: "/librarian/seats", label: "Seat Management", icon: UserCheck },
      { path: "/librarian/floors", label: "Floor Management", icon: Building2 },
      { path: "/librarian/sections", label: "Section Management", icon: LayoutGrid },
      { path: "/librarian/students", label: "Students", icon: Users },
      { path: "/librarian/books", label: "Book Inventory", icon: BookMarked },
      { path: "/librarian/reservations", label: "Reserved Books", icon: BookOpen },
      { path: "/librarian/events", label: "Events", icon: Calendar },
      { path: "/librarian/attendance", label: "Attendance", icon: Clock },
      { path: "/librarian/support", label: "Support & Complaints", icon: LifeBuoy }
    ];
    const reportItems = [
      { path: "/librarian/analytics", label: "Analytics", icon: ChartColumn }
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
              createVNode(unref(BookOpen), { class: "w-6 h-6 text-white" })
            ]),
            _cache[4] || (_cache[4] = createBaseVNode("div", null, [
              createBaseVNode("h1", { class: "text-lg font-bold" }, "Smart Lib"),
              createBaseVNode("p", { class: "text-xs opacity-90" }, "Librarian Portal")
            ], -1))
          ])
        ]),
        createBaseVNode("nav", _hoisted_4$1, [
          createBaseVNode("div", null, [
            _cache[5] || (_cache[5] = createBaseVNode("h3", { class: "text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 px-3" }, " Main Menu ", -1)),
            createBaseVNode("div", _hoisted_5$1, [
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
                        isLinkActive ? "bg-purple-50 text-purple-700 border-r-2 border-purple-600" : "text-gray-600 hover:bg-gray-50 hover:text-purple-600"
                      ])
                    }, [
                      (openBlock(), createBlock(resolveDynamicComponent(item.icon), {
                        class: normalizeClass(["w-5 h-5", isLinkActive ? "text-purple-600" : "text-gray-400 group-hover:text-purple-500"])
                      }, null, 8, ["class"])),
                      createBaseVNode("span", _hoisted_6$1, toDisplayString(item.label), 1),
                      isLinkActive ? (openBlock(), createBlock(unref(ChevronRight), {
                        key: 0,
                        class: "w-4 h-4 ml-auto text-purple-600"
                      })) : createCommentVNode("", true)
                    ], 2)
                  ]),
                  _: 2
                }, 1032, ["to"]);
              }), 64))
            ])
          ]),
          createBaseVNode("div", null, [
            _cache[6] || (_cache[6] = createBaseVNode("h3", { class: "text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 px-3" }, " Management ", -1)),
            createBaseVNode("div", _hoisted_7$1, [
              (openBlock(), createElementBlock(Fragment, null, renderList(managementItems, (item) => {
                return createVNode(_component_router_link, {
                  key: item.path,
                  to: item.path,
                  onClick: _cache[2] || (_cache[2] = ($event) => _ctx.$emit("close"))
                }, {
                  default: withCtx(({ isActive: isLinkActive }) => [
                    createBaseVNode("div", {
                      class: normalizeClass([
                        "flex items-center space-x-3 px-3 py-2 rounded-lg transition-all duration-200 group cursor-pointer",
                        isLinkActive ? "bg-purple-50 text-purple-700 border-r-2 border-purple-600" : "text-gray-600 hover:bg-gray-50 hover:text-purple-600"
                      ])
                    }, [
                      (openBlock(), createBlock(resolveDynamicComponent(item.icon), {
                        class: normalizeClass(["w-5 h-5", isLinkActive ? "text-purple-600" : "text-gray-400 group-hover:text-purple-500"])
                      }, null, 8, ["class"])),
                      createBaseVNode("span", _hoisted_8$1, toDisplayString(item.label), 1),
                      isLinkActive ? (openBlock(), createBlock(unref(ChevronRight), {
                        key: 0,
                        class: "w-4 h-4 ml-auto text-purple-600"
                      })) : createCommentVNode("", true)
                    ], 2)
                  ]),
                  _: 2
                }, 1032, ["to"]);
              }), 64))
            ])
          ]),
          createBaseVNode("div", null, [
            _cache[7] || (_cache[7] = createBaseVNode("h3", { class: "text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 px-3" }, " Analytics ", -1)),
            createBaseVNode("div", _hoisted_9$1, [
              (openBlock(), createElementBlock(Fragment, null, renderList(reportItems, (item) => {
                return createVNode(_component_router_link, {
                  key: item.path,
                  to: item.path,
                  onClick: _cache[3] || (_cache[3] = ($event) => _ctx.$emit("close")),
                  class: "flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-50 hover:text-purple-600 transition-all duration-200 group"
                }, {
                  default: withCtx(() => [
                    (openBlock(), createBlock(resolveDynamicComponent(item.icon), { class: "w-4 h-4 text-gray-400 group-hover:text-purple-500" })),
                    createBaseVNode("span", _hoisted_10$1, toDisplayString(item.label), 1)
                  ]),
                  _: 2
                }, 1032, ["to"]);
              }), 64))
            ])
          ])
        ]),
        createBaseVNode("div", _hoisted_11$1, [
          createBaseVNode("button", {
            onClick: handleLogout,
            class: "w-full flex items-center space-x-2 px-3 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
          }, [
            createVNode(unref(LogOut), { class: "w-4 h-4" }),
            _cache[8] || (_cache[8] = createBaseVNode("span", { class: "text-sm font-medium" }, "Sign Out", -1))
          ])
        ])
      ], 2);
    };
  }
});
const _hoisted_1$1 = { class: "bg-white border-b border-gray-200 sticky top-0 z-40" };
const _hoisted_2$1 = { class: "flex items-center justify-between px-6 py-4" };
const _hoisted_3$1 = { class: "flex items-center space-x-6" };
const _hoisted_4 = { class: "flex items-center space-x-4" };
const _hoisted_5 = { class: "hidden md:flex items-center space-x-4 mr-4" };
const _hoisted_6 = { class: "text-xs font-semibold text-green-700 whitespace-nowrap" };
const _hoisted_7 = { class: "text-xs font-semibold text-orange-700 whitespace-nowrap" };
const _hoisted_8 = { class: "relative" };
const _hoisted_9 = { class: "w-8 h-8 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 flex items-center justify-center overflow-hidden" };
const _hoisted_10 = ["src"];
const _hoisted_11 = { class: "hidden md:block text-left" };
const _hoisted_12 = { class: "text-sm font-medium text-gray-700" };
const _hoisted_13 = {
  key: 0,
  class: "absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50"
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "LibrarianTopbar",
  emits: ["toggle-sidebar"],
  setup(__props) {
    const router = useRouter();
    const { user, logout } = useAuth();
    const { showConfirm } = useSwal();
    const showUserMenu = ref(false);
    const stats = ref({
      active: 0,
      pending: 0
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
    onMounted(() => {
      fetchStats();
      const interval = setInterval(fetchStats, 3e4);
      return () => clearInterval(interval);
    });
    return (_ctx, _cache) => {
      const _component_router_link = resolveComponent("router-link");
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        createBaseVNode("div", _hoisted_2$1, [
          createBaseVNode("div", _hoisted_3$1, [
            createBaseVNode("button", {
              onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("toggle-sidebar")),
              class: "lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            }, [
              createVNode(unref(Menu), { class: "w-5 h-5 text-gray-600" })
            ])
          ]),
          createBaseVNode("div", _hoisted_4, [
            createBaseVNode("div", _hoisted_5, [
              createVNode(_component_router_link, {
                to: "/librarian/attendance",
                class: "flex items-center px-3 py-1.5 bg-green-50 rounded-full border border-green-100 shadow-sm hover:bg-green-100 transition-colors cursor-pointer"
              }, {
                default: withCtx(() => [
                  _cache[4] || (_cache[4] = createBaseVNode("div", { class: "relative flex items-center justify-center mr-2" }, [
                    createBaseVNode("div", { class: "w-2 h-2 rounded-full bg-green-500" }),
                    createBaseVNode("div", { class: "absolute w-2 h-2 rounded-full bg-green-500 animate-ping opacity-75" })
                  ], -1)),
                  createBaseVNode("span", _hoisted_6, toDisplayString(stats.value.active) + " Active ", 1)
                ]),
                _: 1
              }),
              createVNode(_component_router_link, {
                to: "/librarian/bookings",
                class: "flex items-center px-3 py-1.5 bg-orange-50 rounded-full border border-orange-100 shadow-sm hover:bg-orange-100 transition-colors cursor-pointer"
              }, {
                default: withCtx(() => [
                  _cache[5] || (_cache[5] = createBaseVNode("div", { class: "w-2 h-2 rounded-full bg-orange-500 mr-2" }, null, -1)),
                  createBaseVNode("span", _hoisted_7, toDisplayString(stats.value.pending) + " Pending ", 1)
                ]),
                _: 1
              })
            ]),
            createBaseVNode("div", _hoisted_8, [
              createBaseVNode("button", {
                onClick: _cache[1] || (_cache[1] = ($event) => showUserMenu.value = !showUserMenu.value),
                class: "flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 transition-colors"
              }, [
                createBaseVNode("div", _hoisted_9, [
                  unref(user)?.profile_picture ? (openBlock(), createElementBlock("img", {
                    key: 0,
                    src: getProfilePictureUrl(unref(user).profile_picture),
                    alt: "Profile",
                    class: "w-full h-full object-cover"
                  }, null, 8, _hoisted_10)) : (openBlock(), createBlock(unref(User), {
                    key: 1,
                    class: "w-5 h-5 text-white"
                  }))
                ]),
                createBaseVNode("div", _hoisted_11, [
                  createBaseVNode("div", _hoisted_12, toDisplayString(unref(user)?.name), 1),
                  _cache[6] || (_cache[6] = createBaseVNode("div", { class: "text-xs text-gray-500" }, "Librarian", -1))
                ]),
                createVNode(unref(ChevronDown), { class: "w-4 h-4 text-gray-400" })
              ]),
              showUserMenu.value ? (openBlock(), createElementBlock("div", _hoisted_13, [
                createVNode(_component_router_link, {
                  to: "/librarian/profile",
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
                  to: "/librarian/library",
                  class: "flex items-center space-x-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50",
                  onClick: _cache[3] || (_cache[3] = ($event) => showUserMenu.value = false)
                }, {
                  default: withCtx(() => [
                    createVNode(unref(Settings), { class: "w-4 h-4" }),
                    _cache[8] || (_cache[8] = createBaseVNode("span", null, "Settings", -1))
                  ]),
                  _: 1
                }),
                createBaseVNode("button", {
                  onClick: handleLogout,
                  class: "w-full flex items-center space-x-2 px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                }, [
                  createVNode(unref(LogOut), { class: "w-4 h-4" }),
                  _cache[9] || (_cache[9] = createBaseVNode("span", null, "Sign Out", -1))
                ])
              ])) : createCommentVNode("", true)
            ])
          ])
        ])
      ]);
    };
  }
});
const _hoisted_1 = { class: "min-h-screen bg-gray-50 flex" };
const _hoisted_2 = { class: "flex-1 flex flex-col min-h-screen lg:ml-0" };
const _hoisted_3 = { class: "flex-1 overflow-y-auto bg-gray-50" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "LibrarianApp",
  setup(__props) {
    const sidebarOpen = ref(false);
    return (_ctx, _cache) => {
      const _component_router_view = resolveComponent("router-view");
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(_sfc_main$2, {
          isOpen: sidebarOpen.value,
          onClose: _cache[0] || (_cache[0] = ($event) => sidebarOpen.value = false)
        }, null, 8, ["isOpen"]),
        sidebarOpen.value ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: "fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden",
          onClick: _cache[1] || (_cache[1] = ($event) => sidebarOpen.value = false)
        })) : createCommentVNode("", true),
        createBaseVNode("div", _hoisted_2, [
          createVNode(_sfc_main$1, {
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
