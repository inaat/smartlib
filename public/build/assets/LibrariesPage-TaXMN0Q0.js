import { d as defineComponent, E as computed, c as createElementBlock, b as createBaseVNode, m as createCommentVNode, t as toDisplayString, f as createVNode, j as createTextVNode, u as unref, n as normalizeClass, F as Fragment, h as renderList, k as createBlock, l as resolveDynamicComponent, w as withCtx, g as resolveComponent, i as openBlock, I as normalizeStyle, D as useApp, r as ref, o as onMounted, v as withDirectives, x as vModelText, K as isRef, B as vModelSelect } from "./main-Dk2mUbjP.js";
import { M as MapPin } from "./map-pin-CGJFb8uL.js";
import { C as Clock } from "./clock-DHHRCinm.js";
import { U as Users } from "./users-BK7GPR5d.js";
import { C as Car } from "./car-CM_6mQwP.js";
import { W as Wifi } from "./wifi-jhWzynmM.js";
import { c as createLucideIcon } from "./createLucideIcon-6n-23kmf.js";
import { S as Search } from "./search-CtCRD_3L.js";
import { F as Funnel } from "./funnel-CCm1Zy9U.js";
/* empty css               */
const List = createLucideIcon("list", [
  ["path", { d: "M3 5h.01", key: "18ugdj" }],
  ["path", { d: "M3 12h.01", key: "nlz23k" }],
  ["path", { d: "M3 19h.01", key: "noohij" }],
  ["path", { d: "M8 5h13", key: "1pao27" }],
  ["path", { d: "M8 12h13", key: "1za7za" }],
  ["path", { d: "M8 19h13", key: "m83p4d" }]
]);
const _hoisted_1$2 = { class: "bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow" };
const _hoisted_2$2 = { class: "p-6 pb-4" };
const _hoisted_3$2 = { class: "flex items-start justify-between mb-3" };
const _hoisted_4$2 = { class: "text-lg font-semibold text-gray-800" };
const _hoisted_5$2 = { class: "flex items-center text-gray-600 text-sm mt-1" };
const _hoisted_6$2 = {
  key: 0,
  class: "text-sm text-blue-600 bg-blue-50 px-2 py-1 rounded-full"
};
const _hoisted_7$2 = { class: "flex items-center text-gray-600 text-sm mb-4" };
const _hoisted_8$2 = { class: "flex items-center justify-between mb-4" };
const _hoisted_9$2 = { class: "flex items-center" };
const _hoisted_10$2 = { class: "text-sm text-gray-600" };
const _hoisted_11$1 = { class: "flex flex-wrap gap-2 mb-4" };
const _hoisted_12$1 = { class: "ml-1" };
const _hoisted_13$1 = {
  key: 0,
  class: "text-xs text-gray-500 px-2 py-1"
};
const _hoisted_14$1 = { class: "px-6 pb-6 pt-2 border-t border-gray-100" };
const _hoisted_15 = { class: "flex space-x-3" };
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "LibraryCard",
  props: {
    library: {}
  },
  setup(__props) {
    const props = __props;
    const availabilityPercentage = computed(() => {
      if (!props.library.totalSeats || props.library.totalSeats === 0) return 0;
      return props.library.availableSeats / props.library.totalSeats * 100;
    });
    const getAvailabilityColor = () => {
      if (availabilityPercentage.value > 50) return "text-green-600 bg-green-100";
      if (availabilityPercentage.value > 20) return "text-orange-600 bg-orange-100";
      return "text-red-600 bg-red-100";
    };
    const getFacilityIcon = (facility) => {
      switch (facility.toLowerCase()) {
        case "wifi":
          return Wifi;
        case "parking":
          return Car;
        default:
          return null;
      }
    };
    return (_ctx, _cache) => {
      const _component_router_link = resolveComponent("router-link");
      return openBlock(), createElementBlock("div", _hoisted_1$2, [
        createBaseVNode("div", _hoisted_2$2, [
          createBaseVNode("div", _hoisted_3$2, [
            createBaseVNode("div", null, [
              createBaseVNode("h3", _hoisted_4$2, toDisplayString(__props.library.name), 1),
              createBaseVNode("div", _hoisted_5$2, [
                createVNode(unref(MapPin), { class: "w-4 h-4 mr-1" }),
                createTextVNode(" " + toDisplayString(__props.library.address), 1)
              ])
            ]),
            __props.library.distance ? (openBlock(), createElementBlock("span", _hoisted_6$2, toDisplayString(__props.library.distance) + "km ", 1)) : createCommentVNode("", true)
          ]),
          createBaseVNode("div", _hoisted_7$2, [
            createVNode(unref(Clock), { class: "w-4 h-4 mr-1" }),
            createTextVNode(" " + toDisplayString(__props.library.openingHours), 1)
          ]),
          createBaseVNode("div", _hoisted_8$2, [
            createBaseVNode("div", _hoisted_9$2, [
              createVNode(unref(Users), { class: "w-4 h-4 mr-2 text-gray-600" }),
              createBaseVNode("span", _hoisted_10$2, toDisplayString(__props.library.availableSeats) + " of " + toDisplayString(__props.library.totalSeats) + " seats available ", 1)
            ]),
            createBaseVNode("span", {
              class: normalizeClass(["text-xs font-medium px-2 py-1 rounded-full", getAvailabilityColor()])
            }, toDisplayString(Math.round(availabilityPercentage.value)) + "% available ", 3)
          ]),
          createBaseVNode("div", _hoisted_11$1, [
            (openBlock(true), createElementBlock(Fragment, null, renderList((__props.library.facilities || []).slice(0, 4), (facility) => {
              return openBlock(), createElementBlock("div", {
                key: facility,
                class: "flex items-center bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full"
              }, [
                getFacilityIcon(facility) ? (openBlock(), createBlock(resolveDynamicComponent(getFacilityIcon(facility)), {
                  key: 0,
                  class: "w-4 h-4"
                })) : createCommentVNode("", true),
                createBaseVNode("span", _hoisted_12$1, toDisplayString(facility), 1)
              ]);
            }), 128)),
            __props.library.facilities.length > 4 ? (openBlock(), createElementBlock("span", _hoisted_13$1, " +" + toDisplayString(__props.library.facilities.length - 4) + " more ", 1)) : createCommentVNode("", true)
          ])
        ]),
        createBaseVNode("div", _hoisted_14$1, [
          createBaseVNode("div", _hoisted_15, [
            createVNode(_component_router_link, {
              to: `/student/libraries/${__props.library.id}/seats`,
              class: "flex-1 bg-blue-600 text-white text-center py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm"
            }, {
              default: withCtx(() => [..._cache[0] || (_cache[0] = [
                createTextVNode(" Book Seat ", -1)
              ])]),
              _: 1
            }, 8, ["to"]),
            createVNode(_component_router_link, {
              to: `/student/libraries/${__props.library.id}`,
              class: "flex-1 border border-gray-300 text-gray-700 text-center py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors font-medium text-sm"
            }, {
              default: withCtx(() => [..._cache[1] || (_cache[1] = [
                createTextVNode(" View Details ", -1)
              ])]),
              _: 1
            }, 8, ["to"])
          ])
        ])
      ]);
    };
  }
});
const _hoisted_1$1 = { class: "bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden" };
const _hoisted_2$1 = { class: "h-96 bg-gradient-to-br from-blue-50 to-teal-50 relative" };
const _hoisted_3$1 = { class: "absolute inset-0 flex items-center justify-center" };
const _hoisted_4$1 = { class: "text-center" };
const _hoisted_5$1 = ["title"];
const _hoisted_6$1 = { class: "p-6" };
const _hoisted_7$1 = { class: "text-lg font-semibold text-gray-800 mb-4" };
const _hoisted_8$1 = { class: "space-y-3" };
const _hoisted_9$1 = { class: "flex items-center space-x-3" };
const _hoisted_10$1 = { class: "w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold" };
const _hoisted_11 = { class: "font-medium text-gray-800" };
const _hoisted_12 = { class: "flex items-center space-x-4 text-sm text-gray-600 mt-1" };
const _hoisted_13 = { class: "flex items-center" };
const _hoisted_14 = { class: "flex items-center" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "LibraryMap",
  props: {
    libraries: {}
  },
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_router_link = resolveComponent("router-link");
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        createBaseVNode("div", _hoisted_2$1, [
          createBaseVNode("div", _hoisted_3$1, [
            createBaseVNode("div", _hoisted_4$1, [
              createVNode(unref(MapPin), { class: "w-16 h-16 text-blue-400 mx-auto mb-4" }),
              _cache[0] || (_cache[0] = createBaseVNode("h3", { class: "text-lg font-semibold text-gray-700 mb-2" }, "Interactive Map", -1)),
              _cache[1] || (_cache[1] = createBaseVNode("p", { class: "text-gray-500" }, "Map integration would be implemented here", -1)),
              _cache[2] || (_cache[2] = createBaseVNode("p", { class: "text-sm text-gray-400 mt-1" }, "Using Google Maps or similar service", -1))
            ])
          ]),
          (openBlock(true), createElementBlock(Fragment, null, renderList(__props.libraries, (library, index) => {
            return openBlock(), createElementBlock("div", {
              key: library.id,
              class: "absolute bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shadow-lg cursor-pointer hover:bg-blue-700 transition-colors",
              style: normalizeStyle({
                left: `${20 + index * 25}%`,
                top: `${30 + index * 15}%`
              }),
              title: library.name
            }, toDisplayString(index + 1), 13, _hoisted_5$1);
          }), 128))
        ]),
        createBaseVNode("div", _hoisted_6$1, [
          createBaseVNode("h3", _hoisted_7$1, " Libraries on Map (" + toDisplayString(__props.libraries.length) + ") ", 1),
          createBaseVNode("div", _hoisted_8$1, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(__props.libraries, (library, index) => {
              return openBlock(), createElementBlock("div", {
                key: library.id,
                class: "flex items-center justify-between p-3 bg-gray-50 rounded-lg"
              }, [
                createBaseVNode("div", _hoisted_9$1, [
                  createBaseVNode("div", _hoisted_10$1, toDisplayString(index + 1), 1),
                  createBaseVNode("div", null, [
                    createBaseVNode("h4", _hoisted_11, toDisplayString(library.name), 1),
                    createBaseVNode("div", _hoisted_12, [
                      createBaseVNode("div", _hoisted_13, [
                        createVNode(unref(Users), { class: "w-3 h-3 mr-1" }),
                        createTextVNode(" " + toDisplayString(library.availableSeats) + "/" + toDisplayString(library.totalSeats), 1)
                      ]),
                      createBaseVNode("div", _hoisted_14, [
                        createVNode(unref(Clock), { class: "w-3 h-3 mr-1" }),
                        createTextVNode(" " + toDisplayString(library.openingHours), 1)
                      ])
                    ])
                  ])
                ]),
                createVNode(_component_router_link, {
                  to: `/student/libraries/${library.id}`,
                  class: "bg-blue-600 text-white px-3 py-1 rounded-lg text-sm hover:bg-blue-700 transition-colors"
                }, {
                  default: withCtx(() => [..._cache[3] || (_cache[3] = [
                    createTextVNode(" Select ", -1)
                  ])]),
                  _: 1
                }, 8, ["to"])
              ]);
            }), 128))
          ])
        ])
      ]);
    };
  }
});
const _hoisted_1 = { class: "space-y-6" };
const _hoisted_2 = { class: "flex items-center justify-between" };
const _hoisted_3 = { class: "flex items-center space-x-2" };
const _hoisted_4 = { class: "bg-white rounded-xl shadow-sm border border-gray-200 p-6" };
const _hoisted_5 = { class: "flex flex-col sm:flex-row gap-4" };
const _hoisted_6 = { class: "flex-1 relative" };
const _hoisted_7 = { class: "relative" };
const _hoisted_8 = ["value"];
const _hoisted_9 = {
  key: 0,
  class: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
};
const _hoisted_10 = {
  key: 2,
  class: "text-center py-12"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "LibrariesPage",
  setup(__props) {
    const { libraries, searchQuery, loadLibraries } = useApp();
    const viewMode = ref("list");
    const filterFacility = ref("");
    onMounted(() => {
      if (libraries.value.length === 0) {
        loadLibraries();
      }
    });
    const filteredLibraries = computed(() => {
      return libraries.value.filter((library) => {
        const search = searchQuery.value?.toLowerCase() || "";
        const matchesSearch = library.name.toLowerCase().includes(search) || library.address.toLowerCase().includes(search);
        const facilities = library.facilities || [];
        const matchesFacility = !filterFacility.value || facilities.includes(filterFacility.value);
        return matchesSearch && matchesFacility;
      });
    });
    const allFacilities = computed(() => {
      return Array.from(
        new Set(libraries.value.flatMap((lib) => lib.facilities || []))
      );
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          _cache[4] || (_cache[4] = createBaseVNode("div", null, [
            createBaseVNode("h1", { class: "text-2xl font-bold text-gray-800" }, "Libraries"),
            createBaseVNode("p", { class: "text-gray-600 mt-1" }, "Find and book seats at ICAP libraries")
          ], -1)),
          createBaseVNode("div", _hoisted_3, [
            createBaseVNode("button", {
              onClick: _cache[0] || (_cache[0] = ($event) => viewMode.value = "list"),
              class: normalizeClass([
                "p-2 rounded-lg transition-colors",
                viewMode.value === "list" ? "bg-blue-100 text-blue-600" : "text-gray-600 hover:bg-gray-100"
              ])
            }, [
              createVNode(unref(List), { class: "w-5 h-5" })
            ], 2),
            createBaseVNode("button", {
              onClick: _cache[1] || (_cache[1] = ($event) => viewMode.value = "map"),
              class: normalizeClass([
                "p-2 rounded-lg transition-colors",
                viewMode.value === "map" ? "bg-blue-100 text-blue-600" : "text-gray-600 hover:bg-gray-100"
              ])
            }, [
              createVNode(unref(MapPin), { class: "w-5 h-5" })
            ], 2)
          ])
        ]),
        createBaseVNode("div", _hoisted_4, [
          createBaseVNode("div", _hoisted_5, [
            createBaseVNode("div", _hoisted_6, [
              createVNode(unref(Search), { class: "absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" }),
              withDirectives(createBaseVNode("input", {
                type: "text",
                placeholder: "Search libraries...",
                "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => isRef(searchQuery) ? searchQuery.value = $event : null),
                class: "w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              }, null, 512), [
                [vModelText, unref(searchQuery)]
              ])
            ]),
            createBaseVNode("div", _hoisted_7, [
              createVNode(unref(Funnel), { class: "absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" }),
              withDirectives(createBaseVNode("select", {
                "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => filterFacility.value = $event),
                class: "pl-10 pr-8 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              }, [
                _cache[5] || (_cache[5] = createBaseVNode("option", { value: "" }, "All Facilities", -1)),
                (openBlock(true), createElementBlock(Fragment, null, renderList(allFacilities.value, (facility) => {
                  return openBlock(), createElementBlock("option", {
                    key: facility,
                    value: facility
                  }, toDisplayString(facility), 9, _hoisted_8);
                }), 128))
              ], 512), [
                [vModelSelect, filterFacility.value]
              ])
            ])
          ])
        ]),
        viewMode.value === "list" ? (openBlock(), createElementBlock("div", _hoisted_9, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(filteredLibraries.value, (library) => {
            return openBlock(), createBlock(_sfc_main$2, {
              key: library.id,
              library
            }, null, 8, ["library"]);
          }), 128))
        ])) : (openBlock(), createBlock(_sfc_main$1, {
          key: 1,
          libraries: filteredLibraries.value
        }, null, 8, ["libraries"])),
        filteredLibraries.value.length === 0 ? (openBlock(), createElementBlock("div", _hoisted_10, [
          createVNode(unref(MapPin), { class: "w-16 h-16 text-gray-300 mx-auto mb-4" }),
          _cache[6] || (_cache[6] = createBaseVNode("h3", { class: "text-lg font-medium text-gray-800 mb-2" }, "No libraries found", -1)),
          _cache[7] || (_cache[7] = createBaseVNode("p", { class: "text-gray-600" }, "Try adjusting your search or filters", -1))
        ])) : createCommentVNode("", true)
      ]);
    };
  }
});
export {
  _sfc_main as default
};
