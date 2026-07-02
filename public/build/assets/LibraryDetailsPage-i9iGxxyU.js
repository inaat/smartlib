import { d as defineComponent, r as ref, o as onMounted, a as createElementBlock, b as createBaseVNode, f as createVNode, w as withCtx, g as resolveComponent, t as toDisplayString, n as normalizeClass, u as unref, l as createCommentVNode, i as createTextVNode, X as adminAPI, E as useRoute, k as openBlock } from "./main-DKJzpCzk.js";
import { B as Building2 } from "./building-2-BtkbfY_f.js";
import { M as MapPin } from "./map-pin-Bg3PL_MU.js";
import { C as Clock } from "./clock-xlNueMyC.js";
import { U as Users } from "./users-3SVXGYtw.js";
import { W as Wifi } from "./wifi-OFXVG6hl.js";
import { C as Car } from "./car-icQUpL1Y.js";
import { C as CircleCheckBig } from "./circle-check-big-D9EkHUxc.js";
import { U as UserCheck } from "./user-check-B9sfqqid.js";
import { T as TrendingUp } from "./trending-up-C06j2gIh.js";
import { C as CircleAlert } from "./circle-alert-CKXiS_Iq.js";
import { c as createLucideIcon } from "./createLucideIcon-TQ5d7bQA.js";
/* empty css               */
const ArrowLeft = createLucideIcon("arrow-left", [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
]);
const _hoisted_1 = { class: "p-6 space-y-6" };
const _hoisted_2 = {
  key: 0,
  class: "flex items-center justify-center py-20"
};
const _hoisted_3 = { key: 1 };
const _hoisted_4 = { class: "flex items-center justify-between mb-6" };
const _hoisted_5 = { class: "flex items-center space-x-4" };
const _hoisted_6 = { class: "text-3xl font-bold text-gray-900" };
const _hoisted_7 = { class: "flex items-center space-x-3" };
const _hoisted_8 = { class: "bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden" };
const _hoisted_9 = { class: "h-48 bg-gradient-to-br from-indigo-50 to-purple-50 relative" };
const _hoisted_10 = ["src"];
const _hoisted_11 = {
  key: 1,
  class: "w-full h-full flex items-center justify-center"
};
const _hoisted_12 = { class: "p-6" };
const _hoisted_13 = { class: "grid grid-cols-1 md:grid-cols-2 gap-6" };
const _hoisted_14 = { class: "text-gray-900 flex items-start" };
const _hoisted_15 = { class: "text-gray-900 flex items-center" };
const _hoisted_16 = { class: "text-gray-900 flex items-center" };
const _hoisted_17 = { key: 0 };
const _hoisted_18 = { class: "text-gray-900 flex items-center" };
const _hoisted_19 = {
  key: 1,
  class: "md:col-span-2"
};
const _hoisted_20 = { class: "text-gray-900" };
const _hoisted_21 = { class: "flex items-center space-x-4 mt-6 pt-6 border-t border-gray-200" };
const _hoisted_22 = {
  key: 0,
  class: "flex items-center text-sm text-gray-600"
};
const _hoisted_23 = {
  key: 1,
  class: "flex items-center text-sm text-gray-600"
};
const _hoisted_24 = { class: "grid grid-cols-1 md:grid-cols-4 gap-6" };
const _hoisted_25 = { class: "bg-white rounded-xl shadow-sm border border-gray-200 p-6" };
const _hoisted_26 = { class: "flex items-center justify-between mb-2" };
const _hoisted_27 = { class: "p-2 bg-blue-100 rounded-lg" };
const _hoisted_28 = { class: "text-3xl font-bold text-gray-900" };
const _hoisted_29 = { class: "bg-white rounded-xl shadow-sm border border-gray-200 p-6" };
const _hoisted_30 = { class: "flex items-center justify-between mb-2" };
const _hoisted_31 = { class: "p-2 bg-green-100 rounded-lg" };
const _hoisted_32 = { class: "text-3xl font-bold text-green-600" };
const _hoisted_33 = { class: "bg-white rounded-xl shadow-sm border border-gray-200 p-6" };
const _hoisted_34 = { class: "flex items-center justify-between mb-2" };
const _hoisted_35 = { class: "p-2 bg-orange-100 rounded-lg" };
const _hoisted_36 = { class: "text-3xl font-bold text-orange-600" };
const _hoisted_37 = { class: "bg-white rounded-xl shadow-sm border border-gray-200 p-6" };
const _hoisted_38 = { class: "flex items-center justify-between mb-2" };
const _hoisted_39 = { class: "p-2 bg-purple-100 rounded-lg" };
const _hoisted_40 = { class: "text-3xl font-bold text-purple-600" };
const _hoisted_41 = {
  key: 2,
  class: "bg-white rounded-xl shadow-sm border border-gray-200 py-20 text-center"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "LibraryDetailsPage",
  setup(__props) {
    const route = useRoute();
    const library = ref(null);
    const loading = ref(true);
    const fetchLibrary = async () => {
      loading.value = true;
      try {
        const libraries = await adminAPI.getLibraries();
        library.value = libraries.find((lib) => lib.id === parseInt(route.params.id));
      } catch (error) {
        console.error("Error fetching library:", error);
      } finally {
        loading.value = false;
      }
    };
    onMounted(() => {
      fetchLibrary();
    });
    return (_ctx, _cache) => {
      const _component_router_link = resolveComponent("router-link");
      return openBlock(), createElementBlock("div", _hoisted_1, [
        loading.value ? (openBlock(), createElementBlock("div", _hoisted_2, [..._cache[0] || (_cache[0] = [
          createBaseVNode("div", { class: "animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600" }, null, -1)
        ])])) : library.value ? (openBlock(), createElementBlock("div", _hoisted_3, [
          createBaseVNode("div", _hoisted_4, [
            createBaseVNode("div", _hoisted_5, [
              createVNode(_component_router_link, {
                to: "/superadmin/libraries",
                class: "p-2 hover:bg-gray-100 rounded-lg transition-colors"
              }, {
                default: withCtx(() => [
                  createVNode(unref(ArrowLeft), { class: "w-5 h-5 text-gray-600" })
                ]),
                _: 1
              }),
              createBaseVNode("div", null, [
                createBaseVNode("h1", _hoisted_6, toDisplayString(library.value.name), 1),
                _cache[1] || (_cache[1] = createBaseVNode("p", { class: "text-gray-600 mt-1" }, "Library Details & Statistics", -1))
              ])
            ]),
            createBaseVNode("div", _hoisted_7, [
              createBaseVNode("span", {
                class: normalizeClass([
                  "px-3 py-1 rounded-full text-sm font-medium",
                  library.value.is_active ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                ])
              }, toDisplayString(library.value.is_active ? "Active" : "Inactive"), 3)
            ])
          ]),
          createBaseVNode("div", _hoisted_8, [
            createBaseVNode("div", _hoisted_9, [
              library.value.photo ? (openBlock(), createElementBlock("img", {
                key: 0,
                src: library.value.photo_url,
                class: "w-full h-full object-cover",
                alt: "Library cover"
              }, null, 8, _hoisted_10)) : (openBlock(), createElementBlock("div", _hoisted_11, [
                createVNode(unref(Building2), { class: "w-16 h-16 text-indigo-300" })
              ]))
            ]),
            createBaseVNode("div", _hoisted_12, [
              createBaseVNode("div", _hoisted_13, [
                createBaseVNode("div", null, [
                  _cache[2] || (_cache[2] = createBaseVNode("h3", { class: "text-sm font-medium text-gray-500 mb-1" }, "Address", -1)),
                  createBaseVNode("p", _hoisted_14, [
                    createVNode(unref(MapPin), { class: "w-4 h-4 mr-2 mt-1 text-gray-400" }),
                    createTextVNode(" " + toDisplayString(library.value.address), 1)
                  ])
                ]),
                createBaseVNode("div", null, [
                  _cache[3] || (_cache[3] = createBaseVNode("h3", { class: "text-sm font-medium text-gray-500 mb-1" }, "Opening Hours", -1)),
                  createBaseVNode("p", _hoisted_15, [
                    createVNode(unref(Clock), { class: "w-4 h-4 mr-2 text-gray-400" }),
                    createTextVNode(" " + toDisplayString(library.value.opening_hours), 1)
                  ])
                ]),
                createBaseVNode("div", null, [
                  _cache[4] || (_cache[4] = createBaseVNode("h3", { class: "text-sm font-medium text-gray-500 mb-1" }, "Total Capacity", -1)),
                  createBaseVNode("p", _hoisted_16, [
                    createVNode(unref(Users), { class: "w-4 h-4 mr-2 text-gray-400" }),
                    createTextVNode(" " + toDisplayString(library.value.capacity) + " seats ", 1)
                  ])
                ]),
                library.value.wifi_password ? (openBlock(), createElementBlock("div", _hoisted_17, [
                  _cache[5] || (_cache[5] = createBaseVNode("h3", { class: "text-sm font-medium text-gray-500 mb-1" }, "WiFi Password", -1)),
                  createBaseVNode("p", _hoisted_18, [
                    createVNode(unref(Wifi), { class: "w-4 h-4 mr-2 text-gray-400" }),
                    createTextVNode(" " + toDisplayString(library.value.wifi_password), 1)
                  ])
                ])) : createCommentVNode("", true),
                library.value.description ? (openBlock(), createElementBlock("div", _hoisted_19, [
                  _cache[6] || (_cache[6] = createBaseVNode("h3", { class: "text-sm font-medium text-gray-500 mb-1" }, "Description", -1)),
                  createBaseVNode("p", _hoisted_20, toDisplayString(library.value.description), 1)
                ])) : createCommentVNode("", true)
              ]),
              createBaseVNode("div", _hoisted_21, [
                library.value.parking_available ? (openBlock(), createElementBlock("div", _hoisted_22, [
                  createVNode(unref(Car), { class: "w-4 h-4 mr-2 text-green-600" }),
                  _cache[7] || (_cache[7] = createTextVNode(" Parking Available ", -1))
                ])) : createCommentVNode("", true),
                library.value.latitude && library.value.longitude ? (openBlock(), createElementBlock("div", _hoisted_23, [
                  createVNode(unref(MapPin), { class: "w-4 h-4 mr-2 text-indigo-600" }),
                  createTextVNode(" " + toDisplayString(library.value.latitude) + ", " + toDisplayString(library.value.longitude), 1)
                ])) : createCommentVNode("", true)
              ])
            ])
          ]),
          createBaseVNode("div", _hoisted_24, [
            createBaseVNode("div", _hoisted_25, [
              createBaseVNode("div", _hoisted_26, [
                _cache[8] || (_cache[8] = createBaseVNode("h3", { class: "text-sm font-medium text-gray-600" }, "Total Seats", -1)),
                createBaseVNode("div", _hoisted_27, [
                  createVNode(unref(Users), { class: "w-5 h-5 text-blue-600" })
                ])
              ]),
              createBaseVNode("p", _hoisted_28, toDisplayString(library.value.totalSeats || library.value.capacity), 1)
            ]),
            createBaseVNode("div", _hoisted_29, [
              createBaseVNode("div", _hoisted_30, [
                _cache[9] || (_cache[9] = createBaseVNode("h3", { class: "text-sm font-medium text-gray-600" }, "Available", -1)),
                createBaseVNode("div", _hoisted_31, [
                  createVNode(unref(CircleCheckBig), { class: "w-5 h-5 text-green-600" })
                ])
              ]),
              createBaseVNode("p", _hoisted_32, toDisplayString(library.value.availableSeats || 0), 1)
            ]),
            createBaseVNode("div", _hoisted_33, [
              createBaseVNode("div", _hoisted_34, [
                _cache[10] || (_cache[10] = createBaseVNode("h3", { class: "text-sm font-medium text-gray-600" }, "Occupied", -1)),
                createBaseVNode("div", _hoisted_35, [
                  createVNode(unref(UserCheck), { class: "w-5 h-5 text-orange-600" })
                ])
              ]),
              createBaseVNode("p", _hoisted_36, toDisplayString((library.value.totalSeats || library.value.capacity) - (library.value.availableSeats || 0)), 1)
            ]),
            createBaseVNode("div", _hoisted_37, [
              createBaseVNode("div", _hoisted_38, [
                _cache[11] || (_cache[11] = createBaseVNode("h3", { class: "text-sm font-medium text-gray-600" }, "Occupancy Rate", -1)),
                createBaseVNode("div", _hoisted_39, [
                  createVNode(unref(TrendingUp), { class: "w-5 h-5 text-purple-600" })
                ])
              ]),
              createBaseVNode("p", _hoisted_40, toDisplayString(library.value.totalSeats ? Math.round((library.value.totalSeats - (library.value.availableSeats || 0)) / library.value.totalSeats * 100) : 0) + "% ", 1)
            ])
          ])
        ])) : (openBlock(), createElementBlock("div", _hoisted_41, [
          createVNode(unref(CircleAlert), { class: "w-12 h-12 text-gray-300 mx-auto mb-4" }),
          _cache[13] || (_cache[13] = createBaseVNode("h3", { class: "text-lg font-medium text-gray-900" }, "Library not found", -1)),
          _cache[14] || (_cache[14] = createBaseVNode("p", { class: "text-gray-500 mt-2" }, "The library you're looking for doesn't exist.", -1)),
          createVNode(_component_router_link, {
            to: "/superadmin/libraries",
            class: "mt-4 inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
          }, {
            default: withCtx(() => [
              createVNode(unref(ArrowLeft), { class: "w-4 h-4 mr-2" }),
              _cache[12] || (_cache[12] = createTextVNode(" Back to Libraries ", -1))
            ]),
            _: 1
          })
        ]))
      ]);
    };
  }
});
export {
  _sfc_main as default
};
