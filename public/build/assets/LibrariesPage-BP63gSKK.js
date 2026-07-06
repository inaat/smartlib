import { d as defineComponent, c as computed, a as createElementBlock, b as createBaseVNode, l as createCommentVNode, f as createVNode, u as unref, n as normalizeClass, t as toDisplayString, F as Fragment, j as renderList, h as createBlock, m as resolveDynamicComponent, w as withCtx, i as createTextVNode, g as resolveComponent, k as openBlock, q as normalizeStyle, J as useApp, r as ref, o as onMounted, p as withDirectives, v as vModelText, M as isRef, D as vModelSelect } from "./main-BV94XoeK.js";
import { B as Building2 } from "./building-2-CoiD_Ne8.js";
import { M as MapPin } from "./map-pin-CW-zEwb2.js";
import { C as Clock } from "./clock-BERatuZr.js";
import { U as Users } from "./users-D3Vt8zfj.js";
import { C as Car } from "./car-DEqFLqSA.js";
import { W as Wifi } from "./wifi-i1aQZfti.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import { c as createLucideIcon } from "./createLucideIcon-CmaEOm5I.js";
import { S as Search } from "./search-DO-S72vO.js";
import { F as Funnel } from "./funnel-CvW4U4_i.js";
import { C as ChevronDown } from "./chevron-down-BtP5tQNe.js";
/* empty css               */
const List = createLucideIcon("list", [
  ["path", { d: "M3 5h.01", key: "18ugdj" }],
  ["path", { d: "M3 12h.01", key: "nlz23k" }],
  ["path", { d: "M3 19h.01", key: "noohij" }],
  ["path", { d: "M8 5h13", key: "1pao27" }],
  ["path", { d: "M8 12h13", key: "1za7za" }],
  ["path", { d: "M8 19h13", key: "m83p4d" }]
]);
const _hoisted_1$2 = { class: "bg-white rounded-3xl border border-slate-200/60 hover:border-slate-300/80 hover:shadow-xl hover:shadow-slate-100/50 transition-all duration-350 hover-lift flex flex-col group h-full relative overflow-hidden font-outfit text-left" };
const _hoisted_2$2 = { class: "h-44 bg-slate-100 relative overflow-hidden border-b border-slate-100 flex-shrink-0" };
const _hoisted_3$2 = ["src"];
const _hoisted_4$2 = {
  key: 1,
  class: "w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-50/50 to-indigo-50/50 text-slate-300"
};
const _hoisted_5$2 = { class: "absolute top-3 right-3 z-10" };
const _hoisted_6$2 = {
  key: 2,
  class: "absolute bottom-3 left-3 bg-slate-900/70 backdrop-blur-md text-white px-2 py-1 rounded-lg text-[10px] font-semibold flex items-center space-x-1 border border-white/10 shadow-sm"
};
const _hoisted_7$2 = { class: "p-5 flex-grow flex flex-col justify-between min-w-0" };
const _hoisted_8$2 = { class: "space-y-4" };
const _hoisted_9$2 = { class: "flex items-start justify-between gap-2.5" };
const _hoisted_10$2 = { class: "min-w-0" };
const _hoisted_11$2 = ["title"];
const _hoisted_12$1 = ["title"];
const _hoisted_13$1 = { class: "truncate" };
const _hoisted_14$1 = {
  key: 0,
  class: "text-[10px] font-semibold text-blue-600 bg-blue-50/50 border border-blue-100 px-2 py-0.5 rounded-lg flex-shrink-0 leading-none self-start"
};
const _hoisted_15 = { class: "flex items-center text-xs text-slate-500 font-semibold" };
const _hoisted_16 = { class: "pt-4 border-t border-slate-100 flex items-center justify-between gap-4" };
const _hoisted_17 = { class: "flex items-center min-w-0" };
const _hoisted_18 = { class: "text-xs text-slate-500 font-medium truncate" };
const _hoisted_19 = { class: "flex flex-wrap gap-1.5 pt-1" };
const _hoisted_20 = { class: "ml-1 leading-none" };
const _hoisted_21 = {
  key: 0,
  class: "text-[9px] font-medium text-slate-400 bg-slate-50 border border-slate-100 px-2 py-0.5 rounded-lg"
};
const _hoisted_22 = { class: "pt-5 mt-5 border-t border-slate-100 flex-shrink-0" };
const _hoisted_23 = { class: "flex space-x-2.5" };
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
      if (availabilityPercentage.value > 50) return "text-green-700 bg-green-50 border-green-100";
      if (availabilityPercentage.value > 20) return "text-orange-700 bg-orange-50 border-orange-100";
      return "text-red-700 bg-red-50 border-red-100";
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
    const isOpen = computed(() => {
      if (!props.library.openingHours) return false;
      try {
        const parts = props.library.openingHours.split("-");
        if (parts.length !== 2) return true;
        const now = /* @__PURE__ */ new Date();
        const currentMinutes = now.getHours() * 60 + now.getMinutes();
        const parseTime = (timeStr) => {
          const match = timeStr.trim().match(/^(\d+):(\d+)\s*(AM|PM)$/i);
          if (!match) return null;
          let hours = parseInt(match[1]);
          const minutes = parseInt(match[2]);
          const ampm = match[3].toUpperCase();
          if (ampm === "PM" && hours < 12) hours += 12;
          if (ampm === "AM" && hours === 12) hours = 0;
          return hours * 60 + minutes;
        };
        const startMinutes = parseTime(parts[0]);
        const endMinutes = parseTime(parts[1]);
        if (startMinutes === null || endMinutes === null) return true;
        if (startMinutes <= endMinutes) {
          return currentMinutes >= startMinutes && currentMinutes <= endMinutes;
        } else {
          return currentMinutes >= startMinutes || currentMinutes <= endMinutes;
        }
      } catch (e) {
        return true;
      }
    });
    return (_ctx, _cache) => {
      const _component_router_link = resolveComponent("router-link");
      return openBlock(), createElementBlock("div", _hoisted_1$2, [
        createBaseVNode("div", _hoisted_2$2, [
          __props.library.photo_url ? (openBlock(), createElementBlock("img", {
            key: 0,
            src: __props.library.photo_url,
            class: "w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500 ease-out",
            alt: "Library cover"
          }, null, 8, _hoisted_3$2)) : (openBlock(), createElementBlock("div", _hoisted_4$2, [
            createVNode(unref(Building2), { class: "w-12 h-12 stroke-1" })
          ])),
          createBaseVNode("div", _hoisted_5$2, [
            createBaseVNode("span", {
              class: normalizeClass([
                "px-2.5 py-1 rounded-xl text-[9px] font-semibold uppercase tracking-wider shadow-sm border leading-none block backdrop-blur-md",
                isOpen.value ? "bg-emerald-500/90 text-white border-emerald-400/20" : "bg-rose-500/90 text-white border-rose-400/20"
              ])
            }, toDisplayString(isOpen.value ? "Open" : "Closed"), 3)
          ]),
          __props.library.average_rating ? (openBlock(), createElementBlock("div", _hoisted_6$2, [
            _cache[0] || (_cache[0] = createBaseVNode("span", { class: "text-amber-400" }, "★", -1)),
            createBaseVNode("span", null, toDisplayString(__props.library.average_rating.toFixed(1)), 1)
          ])) : createCommentVNode("", true)
        ]),
        createBaseVNode("div", _hoisted_7$2, [
          createBaseVNode("div", _hoisted_8$2, [
            createBaseVNode("div", _hoisted_9$2, [
              createBaseVNode("div", _hoisted_10$2, [
                createBaseVNode("h3", {
                  class: "text-base font-semibold text-slate-800 group-hover:text-blue-600 transition-colors leading-snug truncate",
                  title: __props.library.name
                }, toDisplayString(__props.library.name), 9, _hoisted_11$2),
                createBaseVNode("div", {
                  class: "flex items-center text-xs text-slate-400 font-semibold mt-1 truncate",
                  title: __props.library.address
                }, [
                  createVNode(unref(MapPin), { class: "w-3.5 h-3.5 mr-1 text-slate-400 flex-shrink-0" }),
                  createBaseVNode("span", _hoisted_13$1, toDisplayString(__props.library.address), 1)
                ], 8, _hoisted_12$1)
              ]),
              __props.library.distance_km ? (openBlock(), createElementBlock("span", _hoisted_14$1, toDisplayString(__props.library.distance_km) + "km ", 1)) : createCommentVNode("", true)
            ]),
            createBaseVNode("div", _hoisted_15, [
              createVNode(unref(Clock), { class: "w-3.5 h-3.5 mr-1.5 text-slate-400 flex-shrink-0" }),
              createBaseVNode("span", null, toDisplayString(__props.library.openingHours || "Hours not specified"), 1)
            ]),
            createBaseVNode("div", _hoisted_16, [
              createBaseVNode("div", _hoisted_17, [
                createVNode(unref(Users), { class: "w-4 h-4 mr-2 text-slate-400 flex-shrink-0" }),
                createBaseVNode("span", _hoisted_18, toDisplayString(__props.library.availableSeats) + " / " + toDisplayString(__props.library.totalSeats) + " seats free ", 1)
              ]),
              createBaseVNode("span", {
                class: normalizeClass(["text-[9px] font-semibold px-2.5 py-0.5 rounded-lg border shadow-sm flex-shrink-0 leading-none", getAvailabilityColor()])
              }, toDisplayString(Math.round(availabilityPercentage.value)) + "% free ", 3)
            ]),
            createBaseVNode("div", _hoisted_19, [
              (openBlock(true), createElementBlock(Fragment, null, renderList((__props.library.facilities || []).slice(0, 3), (facility) => {
                return openBlock(), createElementBlock("div", {
                  key: facility,
                  class: "flex items-center bg-slate-50 border border-slate-100/50 text-slate-500 text-[10px] font-medium px-2 py-0.5 rounded-lg"
                }, [
                  getFacilityIcon(facility) ? (openBlock(), createBlock(resolveDynamicComponent(getFacilityIcon(facility)), {
                    key: 0,
                    class: "w-3 h-3 text-slate-400"
                  })) : createCommentVNode("", true),
                  createBaseVNode("span", _hoisted_20, toDisplayString(facility), 1)
                ]);
              }), 128)),
              (__props.library.facilities || []).length > 3 ? (openBlock(), createElementBlock("span", _hoisted_21, " +" + toDisplayString(__props.library.facilities.length - 3) + " more ", 1)) : createCommentVNode("", true)
            ])
          ]),
          createBaseVNode("div", _hoisted_22, [
            createBaseVNode("div", _hoisted_23, [
              createVNode(_component_router_link, {
                to: `/student/libraries/${__props.library.id}/seats`,
                class: "flex-1 py-2 px-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-semibold shadow-sm active:scale-98 transition-all flex items-center justify-center leading-none text-center"
              }, {
                default: withCtx(() => [..._cache[1] || (_cache[1] = [
                  createTextVNode(" Book Seat ", -1)
                ])]),
                _: 1
              }, 8, ["to"]),
              createVNode(_component_router_link, {
                to: `/student/libraries/${__props.library.id}`,
                class: "flex-1 py-2 px-3 bg-white border border-slate-350 hover:border-slate-400 text-slate-600 hover:text-slate-800 rounded-xl text-xs font-semibold active:scale-98 transition-all flex items-center justify-center leading-none text-center"
              }, {
                default: withCtx(() => [..._cache[2] || (_cache[2] = [
                  createTextVNode(" View Details ", -1)
                ])]),
                _: 1
              }, 8, ["to"])
            ])
          ])
        ])
      ]);
    };
  }
});
const LibraryCard = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-adf4a8cd"]]);
const _hoisted_1$1 = { class: "bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden" };
const _hoisted_2$1 = { class: "h-96 bg-blue-50/60 relative" };
const _hoisted_3$1 = { class: "absolute inset-0 flex items-center justify-center" };
const _hoisted_4$1 = { class: "text-center" };
const _hoisted_5$1 = ["title"];
const _hoisted_6$1 = { class: "p-6" };
const _hoisted_7$1 = { class: "text-lg font-semibold text-gray-800 mb-4" };
const _hoisted_8$1 = { class: "space-y-3" };
const _hoisted_9$1 = { class: "flex items-center space-x-3" };
const _hoisted_10$1 = { class: "w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold" };
const _hoisted_11$1 = { class: "font-medium text-gray-800" };
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
                    createBaseVNode("h4", _hoisted_11$1, toDisplayString(library.name), 1),
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
const _hoisted_1 = { class: "space-y-6 pb-12 font-outfit" };
const _hoisted_2 = { class: "flex justify-end" };
const _hoisted_3 = { class: "flex items-center bg-slate-100 p-1 rounded-xl w-fit" };
const _hoisted_4 = { class: "bg-gradient-to-r from-slate-50 to-white rounded-2xl shadow-sm border border-slate-200/60 p-5" };
const _hoisted_5 = { class: "flex flex-col sm:flex-row gap-4" };
const _hoisted_6 = { class: "flex-1 relative group" };
const _hoisted_7 = { class: "relative min-w-[180px] group" };
const _hoisted_8 = ["value"];
const _hoisted_9 = {
  key: 0,
  class: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
};
const _hoisted_10 = {
  key: 2,
  class: "text-center py-20 bg-slate-50/50 rounded-2xl border border-dashed border-slate-200/80 p-8"
};
const _hoisted_11 = { class: "w-16 h-16 bg-slate-100 text-slate-400 rounded-full flex items-center justify-center mx-auto mb-4 border border-slate-200 shadow-inner" };
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
          createBaseVNode("div", _hoisted_3, [
            createBaseVNode("button", {
              onClick: _cache[0] || (_cache[0] = ($event) => viewMode.value = "list"),
              class: normalizeClass([
                "px-4 py-1.5 rounded-lg text-[10px] font-semibold uppercase tracking-wide transition-all active:scale-98 flex items-center space-x-1.5",
                viewMode.value === "list" ? "bg-white shadow-sm text-slate-800" : "text-slate-400 hover:text-slate-700"
              ])
            }, [
              createVNode(unref(List), { class: "w-3.5 h-3.5" }),
              _cache[4] || (_cache[4] = createBaseVNode("span", null, "List View", -1))
            ], 2),
            createBaseVNode("button", {
              onClick: _cache[1] || (_cache[1] = ($event) => viewMode.value = "map"),
              class: normalizeClass([
                "px-4 py-1.5 rounded-lg text-[10px] font-semibold uppercase tracking-wide transition-all active:scale-98 flex items-center space-x-1.5",
                viewMode.value === "map" ? "bg-white shadow-sm text-slate-800" : "text-slate-400 hover:text-slate-700"
              ])
            }, [
              createVNode(unref(MapPin), { class: "w-3.5 h-3.5" }),
              _cache[5] || (_cache[5] = createBaseVNode("span", null, "Map View", -1))
            ], 2)
          ])
        ]),
        createBaseVNode("div", _hoisted_4, [
          createBaseVNode("div", _hoisted_5, [
            createBaseVNode("div", _hoisted_6, [
              createVNode(unref(Search), { class: "absolute left-3.5 top-1/2 transform -translate-y-1/2 w-4.5 h-4.5 text-slate-400 group-focus-within:text-blue-600 transition-colors" }),
              withDirectives(createBaseVNode("input", {
                type: "text",
                placeholder: "Search libraries by name or location...",
                "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => isRef(searchQuery) ? searchQuery.value = $event : null),
                class: "w-full pl-11 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all shadow-sm text-sm text-slate-700 placeholder-slate-400"
              }, null, 512), [
                [vModelText, unref(searchQuery)]
              ])
            ]),
            createBaseVNode("div", _hoisted_7, [
              createVNode(unref(Funnel), { class: "absolute left-3.5 top-1/2 transform -translate-y-1/2 w-4.5 h-4.5 text-slate-400 group-focus-within:text-blue-600 transition-colors" }),
              withDirectives(createBaseVNode("select", {
                "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => filterFacility.value = $event),
                class: "w-full pl-11 pr-10 py-2.5 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all shadow-sm text-sm text-slate-700 appearance-none cursor-pointer"
              }, [
                _cache[6] || (_cache[6] = createBaseVNode("option", { value: "" }, "All Facilities", -1)),
                (openBlock(true), createElementBlock(Fragment, null, renderList(allFacilities.value, (facility) => {
                  return openBlock(), createElementBlock("option", {
                    key: facility,
                    value: facility
                  }, toDisplayString(facility), 9, _hoisted_8);
                }), 128))
              ], 512), [
                [vModelSelect, filterFacility.value]
              ]),
              createVNode(unref(ChevronDown), { class: "absolute right-3.5 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" })
            ])
          ])
        ]),
        viewMode.value === "list" ? (openBlock(), createElementBlock("div", _hoisted_9, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(filteredLibraries.value, (library) => {
            return openBlock(), createBlock(LibraryCard, {
              key: library.id,
              library
            }, null, 8, ["library"]);
          }), 128))
        ])) : (openBlock(), createBlock(_sfc_main$1, {
          key: 1,
          libraries: filteredLibraries.value
        }, null, 8, ["libraries"])),
        filteredLibraries.value.length === 0 ? (openBlock(), createElementBlock("div", _hoisted_10, [
          createBaseVNode("div", _hoisted_11, [
            createVNode(unref(MapPin), { class: "w-7 h-7" })
          ]),
          _cache[7] || (_cache[7] = createBaseVNode("h3", { class: "text-base font-semibold text-slate-800 mb-1" }, "No libraries found", -1)),
          _cache[8] || (_cache[8] = createBaseVNode("p", { class: "text-xs text-slate-400 max-w-sm mx-auto leading-relaxed" }, "Try adjusting your search query or choosing another facility filter.", -1))
        ])) : createCommentVNode("", true)
      ]);
    };
  }
});
const LibrariesPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-5afe82fa"]]);
export {
  LibrariesPage as default
};
