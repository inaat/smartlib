import { d as defineComponent, p as useAuth, c as createElementBlock, n as normalizeClass, b as createBaseVNode, f as createVNode, u as unref, F as Fragment, h as renderList, t as toDisplayString, w as withCtx, k as createBlock, j as createTextVNode, l as resolveDynamicComponent, g as resolveComponent, i as openBlock, r as ref, o as onMounted, G as onUnmounted, m as createCommentVNode, E as renderSlot } from "./main-DCJXrkf-.js";
import { S as Shield } from "./shield-BfMVaBP9.js";
import { c as createLucideIcon } from "./createLucideIcon-CDsoUk2K.js";
import { U as Users } from "./users-23JKef0Y.js";
import { C as CreditCard } from "./credit-card-DI3qwLf2.js";
import { S as Settings } from "./settings-DZyFQQ9L.js";
import { M as Menu } from "./menu-CtHUs0hp.js";
import { L as LogOut } from "./log-out--hPc7NJn.js";
import { U as User } from "./user-C8gwTBBi.js";
/* empty css               */
const ChartNoAxesColumn = createLucideIcon("chart-no-axes-column", [
  ["path", { d: "M5 21v-6", key: "1hz6c0" }],
  ["path", { d: "M12 21V3", key: "1lcnhd" }],
  ["path", { d: "M19 21V9", key: "unv183" }]
]);
const ShoppingBag = createLucideIcon("shopping-bag", [
  ["path", { d: "M16 10a4 4 0 0 1-8 0", key: "1ltviw" }],
  ["path", { d: "M3.103 6.034h17.794", key: "awc11p" }],
  [
    "path",
    {
      d: "M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z",
      key: "o988cm"
    }
  ]
]);
const _hoisted_1$2 = { class: "h-full flex flex-col" };
const _hoisted_2$2 = { class: "p-6" };
const _hoisted_3$2 = { class: "flex items-center space-x-3" };
const _hoisted_4$2 = { class: "w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg" };
const _hoisted_5$1 = { class: "flex-1 px-4 py-4 space-y-1 overflow-y-auto" };
const _hoisted_6$1 = { class: "p-4 border-t border-gray-100" };
const _hoisted_7$1 = { class: "flex items-center p-3 rounded-xl bg-gray-50" };
const _hoisted_8 = { class: "w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold border-2 border-white shadow-sm" };
const _hoisted_9 = { class: "ml-3 overflow-hidden" };
const _hoisted_10 = { class: "text-sm font-bold text-gray-900 truncate" };
const _hoisted_11 = { class: "text-xs text-gray-500 truncate" };
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "OwnerSidebar",
  props: {
    isOpen: { type: Boolean }
  },
  emits: ["close"],
  setup(__props) {
    const { user } = useAuth();
    const navItems = [
      { name: "Analytics", to: { name: "owner-analytics" }, routeName: "owner-analytics", icon: ChartNoAxesColumn },
      { name: "SuperAdmins", to: { name: "owner-superadmins" }, routeName: "owner-superadmins", icon: Users },
      { name: "Subscription Plans", to: { name: "owner-subscription-plans" }, routeName: "owner-subscription-plans", icon: CreditCard },
      { name: "Orders", to: { name: "owner-orders" }, routeName: "owner-orders", icon: ShoppingBag },
      { name: "Settings", to: { name: "owner-settings" }, routeName: "owner-settings", icon: Settings }
    ];
    return (_ctx, _cache) => {
      const _component_router_link = resolveComponent("router-link");
      return openBlock(), createElementBlock("aside", {
        class: normalizeClass([
          "fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-200 transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0",
          __props.isOpen ? "translate-x-0" : "-translate-x-full"
        ])
      }, [
        createBaseVNode("div", _hoisted_1$2, [
          createBaseVNode("div", _hoisted_2$2, [
            createBaseVNode("div", _hoisted_3$2, [
              createBaseVNode("div", _hoisted_4$2, [
                createVNode(unref(Shield), { class: "w-6 h-6 text-white" })
              ]),
              _cache[1] || (_cache[1] = createBaseVNode("div", null, [
                createBaseVNode("h1", { class: "text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600" }, " Owner Panel "),
                createBaseVNode("p", { class: "text-xs text-gray-500 font-medium tracking-wider uppercase" }, "Administrative Control")
              ], -1))
            ])
          ]),
          createBaseVNode("nav", _hoisted_5$1, [
            (openBlock(), createElementBlock(Fragment, null, renderList(navItems, (item) => {
              return createVNode(_component_router_link, {
                key: item.name,
                to: item.to,
                class: normalizeClass([
                  "flex items-center px-4 py-3 text-sm font-medium rounded-xl transition-all duration-200 group",
                  _ctx.$route.name === item.routeName ? "bg-indigo-50 text-indigo-600" : "text-gray-600 hover:bg-gray-50 hover:text-indigo-600"
                ]),
                onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("close"))
              }, {
                default: withCtx(() => [
                  (openBlock(), createBlock(resolveDynamicComponent(item.icon), {
                    class: normalizeClass([
                      "w-5 h-5 mr-3 transition-colors duration-200",
                      _ctx.$route.name === item.routeName ? "text-indigo-600" : "text-gray-400 group-hover:text-indigo-600"
                    ])
                  }, null, 8, ["class"])),
                  createTextVNode(" " + toDisplayString(item.name), 1)
                ]),
                _: 2
              }, 1032, ["to", "class"]);
            }), 64))
          ]),
          createBaseVNode("div", _hoisted_6$1, [
            createBaseVNode("div", _hoisted_7$1, [
              createBaseVNode("div", _hoisted_8, toDisplayString(unref(user)?.name?.charAt(0) || "O"), 1),
              createBaseVNode("div", _hoisted_9, [
                createBaseVNode("p", _hoisted_10, toDisplayString(unref(user)?.name), 1),
                createBaseVNode("p", _hoisted_11, toDisplayString(unref(user)?.role), 1)
              ])
            ])
          ])
        ])
      ], 2);
    };
  }
});
const _hoisted_1$1 = { class: "bg-white border-b border-gray-200 h-16 flex items-center justify-between px-4 lg:px-8 sticky top-0 z-30" };
const _hoisted_2$1 = { class: "flex items-center text-indigo-600" };
const _hoisted_3$1 = { class: "flex items-center space-x-4" };
const _hoisted_4$1 = { class: "hidden md:block text-right" };
const _hoisted_5 = { class: "text-sm font-semibold text-gray-800" };
const _hoisted_6 = { class: "w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center border-2 border-white shadow-sm overflow-hidden text-white font-bold" };
const _hoisted_7 = {
  key: 0,
  class: "absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50 overflow-hidden"
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "OwnerTopbar",
  emits: ["menu-click"],
  setup(__props) {
    const { user, logout } = useAuth();
    const showUserMenu = ref(false);
    const menuRef = ref(null);
    const handleLogout = async () => {
      showUserMenu.value = false;
      await logout();
    };
    const handleClickOutside = (event) => {
      if (menuRef.value && !menuRef.value.contains(event.target)) {
        showUserMenu.value = false;
      }
    };
    onMounted(() => {
      document.addEventListener("mousedown", handleClickOutside);
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
          ]),
          _cache[3] || (_cache[3] = createBaseVNode("h2", { class: "text-lg font-bold lg:hidden" }, "Owner", -1))
        ]),
        createBaseVNode("div", _hoisted_3$1, [
          createBaseVNode("div", {
            class: "relative",
            ref_key: "menuRef",
            ref: menuRef
          }, [
            createBaseVNode("button", {
              onClick: _cache[1] || (_cache[1] = ($event) => showUserMenu.value = !showUserMenu.value),
              class: "flex items-center space-x-3 pl-2 md:pl-4 border-l border-gray-200 hover:bg-gray-50 rounded-lg p-2 transition-colors"
            }, [
              createBaseVNode("div", _hoisted_4$1, [
                createBaseVNode("div", _hoisted_5, toDisplayString(unref(user)?.name), 1),
                _cache[4] || (_cache[4] = createBaseVNode("div", { class: "text-xs text-indigo-500 font-medium tracking-tight" }, "System Owner", -1))
              ]),
              createBaseVNode("div", _hoisted_6, toDisplayString(unref(user)?.name?.charAt(0) || "O"), 1)
            ]),
            showUserMenu.value ? (openBlock(), createElementBlock("div", _hoisted_7, [
              _cache[7] || (_cache[7] = createBaseVNode("div", { class: "px-4 py-2 border-b border-gray-50 mb-1" }, [
                createBaseVNode("p", { class: "text-xs text-gray-400 font-medium uppercase tracking-wider" }, "My Account")
              ], -1)),
              createVNode(_component_router_link, {
                to: "/profile",
                class: "flex items-center space-x-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors",
                onClick: _cache[2] || (_cache[2] = ($event) => showUserMenu.value = false)
              }, {
                default: withCtx(() => [
                  createVNode(unref(User), { class: "w-4 h-4 text-gray-400" }),
                  _cache[5] || (_cache[5] = createBaseVNode("span", null, "Profile", -1))
                ]),
                _: 1
              }),
              _cache[8] || (_cache[8] = createBaseVNode("hr", { class: "my-1 border-gray-50" }, null, -1)),
              createBaseVNode("button", {
                onClick: handleLogout,
                class: "w-full flex items-center space-x-3 px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 transition-colors"
              }, [
                createVNode(unref(LogOut), { class: "w-4 h-4" }),
                _cache[6] || (_cache[6] = createBaseVNode("span", { class: "font-medium" }, "Sign Out", -1))
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
  __name: "OwnerLayout",
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
  __name: "OwnerApp",
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
