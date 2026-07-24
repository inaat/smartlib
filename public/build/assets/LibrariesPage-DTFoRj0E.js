import { d as defineComponent, c as computed, a as createElementBlock, b as createBaseVNode, j as createCommentVNode, f as createVNode, u as unref, n as normalizeClass, t as toDisplayString, F as Fragment, k as renderList, h as createBlock, m as resolveDynamicComponent, w as withCtx, i as createTextVNode, g as resolveComponent, l as openBlock, E as watch, o as onMounted, r as ref, e as createStaticVNode, p as withDirectives, v as vModelText, D as vModelSelect, L as studentAPI } from "./main-CP29_5Dg.js";
import { u as useGeolocation } from "./useGeolocation-VmFDv8Yk.js";
import { B as Building2 } from "./building-2-BCZNb8vB.js";
import { M as MapPin } from "./map-pin-3HAewkcf.js";
import { C as Clock } from "./clock-Bt9n9pGR.js";
import { U as Users } from "./users-BL5Ms-cb.js";
import { C as Car } from "./car-DlVPffrS.js";
import { W as Wifi } from "./wifi-CaA-xCol.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import { c as createLucideIcon } from "./createLucideIcon-DTPudzWg.js";
import { N as Navigation } from "./navigation-DuhRup56.js";
import { S as Search } from "./search-BW-YQCIL.js";
import { F as Funnel } from "./funnel-Dw6Vsv5w.js";
import { C as ChevronDown } from "./chevron-down-Dov5TrDl.js";
/* empty css               */
const List = createLucideIcon("list", [
  ["path", { d: "M3 5h.01", key: "18ugdj" }],
  ["path", { d: "M3 12h.01", key: "nlz23k" }],
  ["path", { d: "M3 19h.01", key: "noohij" }],
  ["path", { d: "M8 5h13", key: "1pao27" }],
  ["path", { d: "M8 12h13", key: "1za7za" }],
  ["path", { d: "M8 19h13", key: "m83p4d" }]
]);
const MapPinOff = createLucideIcon("map-pin-off", [
  ["path", { d: "M12.75 7.09a3 3 0 0 1 2.16 2.16", key: "1d4wjd" }],
  [
    "path",
    {
      d: "M17.072 17.072c-1.634 2.17-3.527 3.912-4.471 4.727a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 1.432-4.568",
      key: "12yil7"
    }
  ],
  ["path", { d: "m2 2 20 20", key: "1ooewy" }],
  ["path", { d: "M8.475 2.818A8 8 0 0 1 20 10c0 1.183-.31 2.377-.81 3.533", key: "lhrkcz" }],
  ["path", { d: "M9.13 9.13a3 3 0 0 0 3.74 3.74", key: "13wojd" }]
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
const _hoisted_12$2 = ["title"];
const _hoisted_13$2 = { class: "truncate" };
const _hoisted_14$1 = {
  key: 0,
  class: "text-[10px] font-semibold text-blue-600 bg-blue-50/50 border border-blue-100 px-2 py-0.5 rounded-lg flex-shrink-0 leading-none self-start"
};
const _hoisted_15$1 = { class: "flex items-center text-xs text-slate-500 font-semibold" };
const _hoisted_16$1 = { class: "pt-4 border-t border-slate-100 flex items-center justify-between gap-4" };
const _hoisted_17$1 = { class: "flex items-center min-w-0" };
const _hoisted_18$1 = { class: "text-xs text-slate-500 font-medium truncate" };
const _hoisted_19$1 = { class: "flex flex-wrap gap-1.5 pt-1" };
const _hoisted_20$1 = { class: "ml-1 leading-none" };
const _hoisted_21$1 = {
  key: 0,
  class: "text-[9px] font-medium text-slate-400 bg-slate-50 border border-slate-100 px-2 py-0.5 rounded-lg"
};
const _hoisted_22$1 = { class: "pt-5 mt-5 border-t border-slate-100 flex-shrink-0" };
const _hoisted_23$1 = { class: "flex space-x-2.5" };
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "LibraryCard",
  props: {
    library: {}
  },
  setup(__props) {
    const props = __props;
    const formatDistance = (distanceKm) => {
      if (distanceKm === void 0 || distanceKm === null) return "";
      if (distanceKm < 1) return "Near";
      return `${distanceKm} km`;
    };
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
                  createBaseVNode("span", _hoisted_13$2, toDisplayString(__props.library.address), 1)
                ], 8, _hoisted_12$2)
              ]),
              __props.library.distance_km !== void 0 && __props.library.distance_km !== null ? (openBlock(), createElementBlock("span", _hoisted_14$1, toDisplayString(formatDistance(__props.library.distance_km)), 1)) : createCommentVNode("", true)
            ]),
            createBaseVNode("div", _hoisted_15$1, [
              createVNode(unref(Clock), { class: "w-3.5 h-3.5 mr-1.5 text-slate-400 flex-shrink-0" }),
              createBaseVNode("span", null, toDisplayString(__props.library.openingHours || "Hours not specified"), 1)
            ]),
            createBaseVNode("div", _hoisted_16$1, [
              createBaseVNode("div", _hoisted_17$1, [
                createVNode(unref(Users), { class: "w-4 h-4 mr-2 text-slate-400 flex-shrink-0" }),
                createBaseVNode("span", _hoisted_18$1, toDisplayString(__props.library.availableSeats) + " / " + toDisplayString(__props.library.totalSeats) + " seats free ", 1)
              ]),
              createBaseVNode("span", {
                class: normalizeClass(["text-[9px] font-semibold px-2.5 py-0.5 rounded-lg border shadow-sm flex-shrink-0 leading-none", getAvailabilityColor()])
              }, toDisplayString(Math.round(availabilityPercentage.value)) + "% free ", 3)
            ]),
            createBaseVNode("div", _hoisted_19$1, [
              (openBlock(true), createElementBlock(Fragment, null, renderList((__props.library.facilities || []).slice(0, 3), (facility) => {
                return openBlock(), createElementBlock("div", {
                  key: facility,
                  class: "flex items-center bg-slate-50 border border-slate-100/50 text-slate-500 text-[10px] font-medium px-2 py-0.5 rounded-lg"
                }, [
                  getFacilityIcon(facility) ? (openBlock(), createBlock(resolveDynamicComponent(getFacilityIcon(facility)), {
                    key: 0,
                    class: "w-3 h-3 text-slate-400"
                  })) : createCommentVNode("", true),
                  createBaseVNode("span", _hoisted_20$1, toDisplayString(facility), 1)
                ]);
              }), 128)),
              (__props.library.facilities || []).length > 3 ? (openBlock(), createElementBlock("span", _hoisted_21$1, " +" + toDisplayString(__props.library.facilities.length - 3) + " more ", 1)) : createCommentVNode("", true)
            ])
          ]),
          createBaseVNode("div", _hoisted_22$1, [
            createBaseVNode("div", _hoisted_23$1, [
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
const LibraryCard = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-e7e361b6"]]);
const _hoisted_1$1 = { class: "bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden font-outfit" };
const _hoisted_2$1 = { class: "p-6" };
const _hoisted_3$1 = { class: "text-sm font-bold text-gray-800 mb-4 uppercase tracking-wider" };
const _hoisted_4$1 = { class: "space-y-3" };
const _hoisted_5$1 = { class: "flex items-center space-x-3.5 min-w-0" };
const _hoisted_6$1 = ["onClick"];
const _hoisted_7$1 = { class: "min-w-0" };
const _hoisted_8$1 = { class: "flex flex-wrap items-center gap-2" };
const _hoisted_9$1 = ["title"];
const _hoisted_10$1 = {
  key: 0,
  class: "text-[9px] font-semibold text-blue-600 bg-blue-50/50 border border-blue-100 px-1.5 py-0.5 rounded-lg flex-shrink-0"
};
const _hoisted_11$1 = { class: "flex items-center space-x-4 text-[11px] text-slate-400 font-semibold mt-1" };
const _hoisted_12$1 = { class: "flex items-center" };
const _hoisted_13$1 = { class: "flex items-center" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "LibraryMap",
  props: {
    libraries: {}
  },
  setup(__props) {
    const props = __props;
    const { latitude, longitude } = useGeolocation();
    let map = null;
    let markers = [];
    let userMarker = null;
    let activeInfoWindow = null;
    const loadGoogleMapsScript = () => {
      return new Promise((resolve, reject) => {
        if (typeof google !== "undefined" && google.maps) {
          resolve();
          return;
        }
        const script = document.createElement("script");
        script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8`;
        script.async = true;
        script.defer = true;
        script.onload = () => resolve();
        script.onerror = () => reject(new Error("Failed to load Google Maps"));
        document.head.appendChild(script);
      });
    };
    const initMap = async () => {
      try {
        await loadGoogleMapsScript();
      } catch (error) {
        console.error("Failed to load Google Maps:", error);
        return;
      }
      const mapElement = document.getElementById("libraries-map");
      if (!mapElement) return;
      let center = { lat: 28.6139, lng: 77.209 };
      if (latitude.value && longitude.value) {
        center = { lat: latitude.value, lng: longitude.value };
      } else if (props.libraries.length > 0 && props.libraries[0].latitude && props.libraries[0].longitude) {
        center = { lat: Number(props.libraries[0].latitude), lng: Number(props.libraries[0].longitude) };
      }
      map = new google.maps.Map(mapElement, {
        center,
        zoom: latitude.value && longitude.value ? 12 : 10,
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: true
      });
      updateUserMarker();
      updateLibraryMarkers();
    };
    const updateUserMarker = () => {
      if (!map) return;
      if (userMarker) {
        userMarker.setMap(null);
        userMarker = null;
      }
      if (latitude.value && longitude.value) {
        userMarker = new google.maps.Marker({
          position: { lat: latitude.value, lng: longitude.value },
          map,
          title: "Your Location",
          icon: {
            path: "M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm8.94 3c-.46-4.17-3.77-7.48-7.94-7.94V1c0-.55-.45-1-1-1s-1 .45-1 1v2.06C6.83 4.52 3.52 7.83 3.06 12H1c-.55 0-1 .45-1 1s.45 1 1 1h2.06c.46 4.17 3.77 7.48 7.94 7.94V23c0 .55.45 1 1 1s1-.45 1-1v-2.06c4.17-.46 7.48-3.77 7.94-7.94H23c.55 0 1-.45 1-1s-.45-1-1-1h-2.06zM12 21c-4.97 0-9-4.03-9-9s4.03-9 9-9 9 4.03 9 9-4.03 9-9 9z",
            // GPS location target icon
            fillColor: "#3b82f6",
            fillOpacity: 1,
            strokeColor: "#ffffff",
            strokeWeight: 1.5,
            scale: 1,
            anchor: new google.maps.Point(12, 12)
          }
        });
      }
    };
    const updateLibraryMarkers = () => {
      if (!map) return;
      markers.forEach((m) => m.setMap(null));
      markers = [];
      const bounds = new google.maps.LatLngBounds();
      let hasValidCoords = false;
      props.libraries.forEach((library, index) => {
        if (!library.latitude || !library.longitude) return;
        const position = { lat: Number(library.latitude), lng: Number(library.longitude) };
        bounds.extend(position);
        hasValidCoords = true;
        const marker = new google.maps.Marker({
          position,
          map,
          title: library.name,
          label: {
            text: (index + 1).toString(),
            color: "#ffffff",
            fontWeight: "bold",
            fontSize: "11px"
          },
          icon: {
            path: "M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7z",
            // Solid location teardrop pin
            fillColor: "#ef4444",
            fillOpacity: 1,
            strokeColor: "#ffffff",
            strokeWeight: 1.5,
            scale: 1.3,
            anchor: new google.maps.Point(12, 22),
            labelOrigin: new google.maps.Point(12, 9)
          }
        });
        const infoContent = `
      <div style="padding: 6px 8px; font-family: 'Outfit', sans-serif; text-align: left; max-width: 200px;">
        <h4 style="margin: 0 0 3px 0; font-weight: 700; color: #1e293b; font-size: 13px;">${library.name}</h4>
        <p style="margin: 0 0 6px 0; color: #64748b; font-size: 10px; line-height: 1.2;">${library.address || ""}</p>
        <div style="display: flex; gap: 8px; margin-bottom: 6px; font-size: 10px; color: #475569; font-weight: 500;">
          <span>👤 ${library.availableSeats}/${library.totalSeats} free</span>
        </div>
        <a href="#/student/libraries/${library.id}" style="display: block; text-align: center; background: #ef4444; color: #ffffff; padding: 5px 10px; border-radius: 6px; text-decoration: none; font-weight: 600; font-size: 10px;">Select Library</a>
      </div>
    `;
        const infoWindow = new google.maps.InfoWindow({
          content: infoContent
        });
        marker.addListener("click", () => {
          openInfoWindow(infoWindow, marker, position);
        });
        marker.libraryId = library.id;
        marker.infoWindow = infoWindow;
        markers.push(marker);
      });
      if (hasValidCoords && props.libraries.length > 1) {
        map.fitBounds(bounds);
      }
    };
    const openInfoWindow = (infoWindow, marker, position) => {
      if (activeInfoWindow) {
        activeInfoWindow.close();
      }
      infoWindow.open(map, marker);
      activeInfoWindow = infoWindow;
      map.panTo(position);
    };
    const focusLibrary = (library) => {
      if (!map) return;
      const marker = markers.find((m) => m.libraryId === library.id);
      if (marker) {
        openInfoWindow(marker.infoWindow, marker, marker.getPosition());
        map.setZoom(14);
      }
    };
    watch(() => props.libraries, () => {
      updateLibraryMarkers();
    }, { deep: true });
    watch([latitude, longitude], () => {
      updateUserMarker();
    });
    onMounted(() => {
      initMap();
    });
    return (_ctx, _cache) => {
      const _component_router_link = resolveComponent("router-link");
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        _cache[1] || (_cache[1] = createBaseVNode("div", {
          id: "libraries-map",
          class: "h-[420px] bg-slate-100 relative"
        }, null, -1)),
        createBaseVNode("div", _hoisted_2$1, [
          createBaseVNode("h3", _hoisted_3$1, " Libraries on Map (" + toDisplayString(__props.libraries.length) + ") ", 1),
          createBaseVNode("div", _hoisted_4$1, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(__props.libraries, (library, index) => {
              return openBlock(), createElementBlock("div", {
                key: library.id,
                class: "flex items-center justify-between p-3.5 bg-slate-50 hover:bg-slate-100/70 border border-slate-100 rounded-xl transition-colors text-left"
              }, [
                createBaseVNode("div", _hoisted_5$1, [
                  createBaseVNode("button", {
                    onClick: ($event) => focusLibrary(library),
                    class: "w-6.5 h-6.5 bg-red-500 hover:bg-red-650 text-white rounded-full flex items-center justify-center text-xs font-bold shadow-sm transition-transform active:scale-95 flex-shrink-0",
                    title: "Click to focus on map"
                  }, toDisplayString(index + 1), 9, _hoisted_6$1),
                  createBaseVNode("div", _hoisted_7$1, [
                    createBaseVNode("div", _hoisted_8$1, [
                      createBaseVNode("h4", {
                        class: "font-semibold text-xs text-slate-800 truncate",
                        title: library.name
                      }, toDisplayString(library.name), 9, _hoisted_9$1),
                      library.distance_km !== void 0 && library.distance_km !== null ? (openBlock(), createElementBlock("span", _hoisted_10$1, toDisplayString(library.distance_km < 1 ? "Near" : library.distance_km.toFixed(1) + " km"), 1)) : createCommentVNode("", true)
                    ]),
                    createBaseVNode("div", _hoisted_11$1, [
                      createBaseVNode("div", _hoisted_12$1, [
                        createVNode(unref(Users), { class: "w-3.5 h-3.5 mr-1 text-slate-400" }),
                        createBaseVNode("span", null, toDisplayString(library.availableSeats) + "/" + toDisplayString(library.totalSeats) + " Seats", 1)
                      ]),
                      createBaseVNode("div", _hoisted_13$1, [
                        createVNode(unref(Clock), { class: "w-3.5 h-3.5 mr-1 text-slate-400" }),
                        createBaseVNode("span", null, toDisplayString(library.openingHours || "Hours spec"), 1)
                      ])
                    ])
                  ])
                ]),
                createVNode(_component_router_link, {
                  to: `/student/libraries/${library.id}`,
                  class: "bg-white border border-slate-200 text-slate-600 hover:bg-blue-600 hover:text-white hover:border-blue-600 px-3 py-1.5 rounded-xl text-xs font-semibold shadow-sm transition-all active:scale-98 flex-shrink-0"
                }, {
                  default: withCtx(() => [..._cache[0] || (_cache[0] = [
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
const LibraryMap = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-d013e278"]]);
const _hoisted_1 = { class: "space-y-6 pb-12 font-outfit" };
const _hoisted_2 = {
  key: 0,
  class: "bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 rounded-2xl p-5 flex items-center space-x-4 animate-fade-in text-left"
};
const _hoisted_3 = {
  key: 1,
  class: "bg-gradient-to-r from-amber-50 to-orange-50/80 border border-amber-200/80 rounded-2xl p-5 flex items-center justify-between gap-4 text-left shadow-sm animate-fade-in"
};
const _hoisted_4 = { class: "flex items-center space-x-3.5 min-w-0" };
const _hoisted_5 = { class: "w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center text-amber-700 flex-shrink-0" };
const _hoisted_6 = { class: "flex items-center gap-2 flex-shrink-0" };
const _hoisted_7 = { class: "flex flex-col sm:flex-row sm:items-center justify-between gap-4" };
const _hoisted_8 = { class: "flex items-center space-x-3" };
const _hoisted_9 = { class: "w-9 h-9 bg-emerald-50 border border-emerald-100 rounded-xl flex items-center justify-center" };
const _hoisted_10 = { class: "text-left" };
const _hoisted_11 = { class: "text-sm font-bold text-slate-800 leading-none" };
const _hoisted_12 = { class: "text-[10px] text-slate-400 font-medium mt-1 uppercase tracking-wider" };
const _hoisted_13 = { class: "flex flex-wrap items-center gap-3" };
const _hoisted_14 = { class: "flex items-center bg-slate-100 p-1 rounded-xl w-fit" };
const _hoisted_15 = { class: "flex items-center bg-slate-100 p-1 rounded-xl w-fit" };
const _hoisted_16 = { class: "bg-gradient-to-r from-slate-50 to-white rounded-2xl shadow-sm border border-slate-200/60 p-5" };
const _hoisted_17 = { class: "flex flex-col sm:flex-row gap-4" };
const _hoisted_18 = { class: "flex-1 relative group" };
const _hoisted_19 = { class: "relative min-w-[180px] group" };
const _hoisted_20 = ["value"];
const _hoisted_21 = {
  key: 0,
  class: "w-full sm:w-64 bg-white border border-slate-200 rounded-xl px-4 py-2 shadow-sm flex flex-col justify-center"
};
const _hoisted_22 = { class: "flex items-center justify-between mb-1" };
const _hoisted_23 = { class: "text-xs font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-lg border border-blue-100" };
const _hoisted_24 = {
  key: 2,
  class: "flex flex-col items-center justify-center py-20 space-y-4"
};
const _hoisted_25 = { class: "text-xs font-semibold text-slate-400 uppercase tracking-wider animate-pulse" };
const _hoisted_26 = {
  key: 3,
  class: "bg-white rounded-3xl border border-slate-200/60 p-10 sm:p-14 text-center shadow-sm max-w-xl mx-auto my-6 animate-fade-in"
};
const _hoisted_27 = { class: "w-20 h-20 bg-amber-50 text-amber-500 rounded-2xl flex items-center justify-center mx-auto mb-5 border border-amber-100 shadow-inner" };
const _hoisted_28 = { class: "flex flex-col sm:flex-row items-center justify-center gap-3" };
const _hoisted_29 = {
  key: 0,
  class: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
};
const _hoisted_30 = {
  key: 2,
  class: "text-center py-20 bg-slate-50/50 rounded-2xl border border-dashed border-slate-200/80 p-8 animate-fade-in"
};
const _hoisted_31 = { class: "w-16 h-16 bg-slate-100 text-slate-400 rounded-full flex items-center justify-center mx-auto mb-4 border border-slate-200 shadow-inner" };
const _hoisted_32 = {
  key: 0,
  class: "text-xs text-slate-400 max-w-sm mx-auto leading-relaxed"
};
const _hoisted_33 = { class: "font-bold text-slate-700" };
const _hoisted_34 = {
  key: 1,
  class: "text-xs text-slate-400 max-w-sm mx-auto leading-relaxed"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "LibrariesPage",
  setup(__props) {
    const { latitude, longitude, locationGranted, locationLoading, requestLocation } = useGeolocation();
    const viewMode = ref("list");
    const libraryFilterMode = ref("nearby");
    const filterFacility = ref("");
    const searchQuery = ref("");
    const loadingLibraries = ref(false);
    const libraries = ref([]);
    const maxDistance = ref(50);
    const handleRequestLocation = async () => {
      await requestLocation();
      await fetchLibraries();
    };
    const handleSelectNearbyMode = async () => {
      libraryFilterMode.value = "nearby";
      if (!locationGranted.value) {
        await requestLocation();
      }
      await fetchLibraries();
    };
    const handleSelectAllMode = () => {
      libraryFilterMode.value = "all";
      fetchLibraries();
    };
    const fetchLibraries = async () => {
      loadingLibraries.value = true;
      try {
        let data;
        if (locationGranted.value && latitude.value && longitude.value) {
          data = await studentAPI.getNearbyLibraries(latitude.value, longitude.value);
        } else {
          data = await studentAPI.getLibraries();
        }
        libraries.value = Array.isArray(data) ? data : [];
      } catch (error) {
        console.error("Failed to load libraries:", error);
        libraries.value = [];
      } finally {
        loadingLibraries.value = false;
      }
    };
    watch([() => locationGranted.value, () => libraryFilterMode.value], () => {
      fetchLibraries();
    });
    onMounted(async () => {
      if (libraryFilterMode.value === "nearby" && !locationGranted.value) {
        await requestLocation();
      }
      await fetchLibraries();
    });
    const deg2rad = (deg) => deg * (Math.PI / 180);
    const calculateDistance = (lat1, lon1, lat2, lon2) => {
      const R = 6371;
      const phi1 = deg2rad(lat1);
      const phi2 = deg2rad(lat2);
      const deltaLambda = deg2rad(lon2 - lon1);
      const val = Math.cos(phi1) * Math.cos(phi2) * Math.cos(deltaLambda) + Math.sin(phi1) * Math.sin(phi2);
      const clamped = Math.max(-1, Math.min(1, val));
      return R * Math.acos(clamped);
    };
    const filteredLibraries = computed(() => {
      if (libraryFilterMode.value === "nearby" && !locationGranted.value) {
        return [];
      }
      let list = libraries.value.map((library) => {
        if (locationGranted.value && latitude.value && longitude.value && library.latitude && library.longitude) {
          const dist = calculateDistance(latitude.value, longitude.value, Number(library.latitude), Number(library.longitude));
          return {
            ...library,
            distance_km: Number(dist.toFixed(2))
          };
        }
        return library;
      });
      if (libraryFilterMode.value === "nearby" && locationGranted.value) {
        list.sort((a, b) => {
          const distA = a.distance_km ?? Infinity;
          const distB = b.distance_km ?? Infinity;
          return distA - distB;
        });
      }
      return list.filter((library) => {
        if (libraryFilterMode.value === "nearby" && locationGranted.value) {
          if (library.distance_km === void 0 || library.distance_km === null || library.distance_km > maxDistance.value) {
            return false;
          }
        }
        const search = searchQuery.value?.toLowerCase() || "";
        const name = library.name?.toLowerCase() || "";
        const address = library.address?.toLowerCase() || "";
        const matchesSearch = name.includes(search) || address.includes(search);
        const facilities = library.facilities || [];
        const matchesFacility = !filterFacility.value || facilities.includes(filterFacility.value);
        return matchesSearch && matchesFacility;
      });
    });
    const closestLibrary = computed(() => {
      const sortedActive = libraries.value.map((library) => {
        if (locationGranted.value && latitude.value && longitude.value && library.latitude && library.longitude) {
          const dist = calculateDistance(latitude.value, longitude.value, Number(library.latitude), Number(library.longitude));
          return { ...library, distance_km: Number(dist.toFixed(2)) };
        }
        return library;
      }).filter((lib) => lib.distance_km !== void 0 && lib.distance_km !== null).sort((a, b) => (a.distance_km ?? Infinity) - (b.distance_km ?? Infinity));
      return sortedActive.length > 0 ? sortedActive[0] : null;
    });
    const allFacilities = computed(() => {
      return Array.from(
        new Set(libraries.value.flatMap((lib) => lib.facilities || []))
      );
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        libraryFilterMode.value === "nearby" && unref(locationLoading) ? (openBlock(), createElementBlock("div", _hoisted_2, [..._cache[6] || (_cache[6] = [
          createStaticVNode('<div class="w-10 h-10 bg-blue-100/80 rounded-xl flex items-center justify-center flex-shrink-0" data-v-e5f583ba><div class="animate-spin rounded-full h-5 w-5 border-2 border-blue-600 border-t-transparent" data-v-e5f583ba></div></div><div class="text-left" data-v-e5f583ba><p class="text-sm font-bold text-blue-900" data-v-e5f583ba>Detecting your location...</p><p class="text-xs text-blue-600/80 mt-0.5" data-v-e5f583ba>Please allow browser location access to find nearby libraries</p></div>', 2)
        ])])) : libraryFilterMode.value === "nearby" && !unref(locationGranted) && !unref(locationLoading) ? (openBlock(), createElementBlock("div", _hoisted_3, [
          createBaseVNode("div", _hoisted_4, [
            createBaseVNode("div", _hoisted_5, [
              createVNode(unref(MapPinOff), { class: "w-5 h-5" })
            ]),
            _cache[7] || (_cache[7] = createBaseVNode("div", { class: "min-w-0" }, [
              createBaseVNode("p", { class: "text-xs font-bold text-amber-900 leading-snug" }, "Location Access Required"),
              createBaseVNode("p", { class: "text-[11px] text-amber-800/90 mt-0.5 leading-normal max-w-2xl" }, " Device location access is off or denied. Turn on your location and allow browser access to view libraries near you. ")
            ], -1))
          ]),
          createBaseVNode("div", _hoisted_6, [
            createBaseVNode("button", {
              onClick: handleRequestLocation,
              class: "px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-xl text-xs font-bold shadow-sm transition-all active:scale-98"
            }, " Enable Location "),
            createBaseVNode("button", {
              onClick: _cache[0] || (_cache[0] = ($event) => libraryFilterMode.value = "all"),
              class: "px-4 py-2 bg-white border border-amber-200 text-amber-800 hover:bg-amber-50 rounded-xl text-xs font-semibold transition-all active:scale-98"
            }, " Browse All ")
          ])
        ])) : createCommentVNode("", true),
        createBaseVNode("div", _hoisted_7, [
          createBaseVNode("div", _hoisted_8, [
            createBaseVNode("div", _hoisted_9, [
              libraryFilterMode.value === "nearby" ? (openBlock(), createBlock(unref(Navigation), {
                key: 0,
                class: "w-4.5 h-4.5 text-emerald-600"
              })) : (openBlock(), createBlock(unref(Building2), {
                key: 1,
                class: "w-4.5 h-4.5 text-emerald-600"
              }))
            ]),
            createBaseVNode("div", _hoisted_10, [
              createBaseVNode("h2", _hoisted_11, toDisplayString(libraryFilterMode.value === "nearby" ? "Nearby Libraries" : "All Libraries"), 1),
              createBaseVNode("p", _hoisted_12, [
                libraryFilterMode.value === "nearby" ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                  unref(locationGranted) ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                    createTextVNode(toDisplayString(filteredLibraries.value.length) + " " + toDisplayString(filteredLibraries.value.length === 1 ? "library" : "libraries") + " within " + toDisplayString(maxDistance.value) + " km ", 1)
                  ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                    createTextVNode(" Location required to view nearby libraries ")
                  ], 64))
                ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                  createTextVNode(toDisplayString(filteredLibraries.value.length) + " " + toDisplayString(filteredLibraries.value.length === 1 ? "library" : "libraries") + " available ", 1)
                ], 64))
              ])
            ])
          ]),
          createBaseVNode("div", _hoisted_13, [
            createBaseVNode("div", _hoisted_14, [
              createBaseVNode("button", {
                onClick: handleSelectNearbyMode,
                class: normalizeClass([
                  "px-4 py-1.5 rounded-lg text-[10px] font-semibold uppercase tracking-wide transition-all active:scale-98 flex items-center space-x-1.5",
                  libraryFilterMode.value === "nearby" ? "bg-white shadow-sm text-slate-800" : "text-slate-400 hover:text-slate-700"
                ])
              }, [
                createVNode(unref(Navigation), { class: "w-3.5 h-3.5" }),
                _cache[8] || (_cache[8] = createBaseVNode("span", null, "Nearby", -1))
              ], 2),
              createBaseVNode("button", {
                onClick: handleSelectAllMode,
                class: normalizeClass([
                  "px-4 py-1.5 rounded-lg text-[10px] font-semibold uppercase tracking-wide transition-all active:scale-98 flex items-center space-x-1.5",
                  libraryFilterMode.value === "all" ? "bg-white shadow-sm text-slate-800" : "text-slate-400 hover:text-slate-700"
                ])
              }, [
                createVNode(unref(Building2), { class: "w-3.5 h-3.5" }),
                _cache[9] || (_cache[9] = createBaseVNode("span", null, "All Libraries", -1))
              ], 2)
            ]),
            createBaseVNode("div", _hoisted_15, [
              createBaseVNode("button", {
                onClick: _cache[1] || (_cache[1] = ($event) => viewMode.value = "list"),
                class: normalizeClass([
                  "px-4 py-1.5 rounded-lg text-[10px] font-semibold uppercase tracking-wide transition-all active:scale-98 flex items-center space-x-1.5",
                  viewMode.value === "list" ? "bg-white shadow-sm text-slate-800" : "text-slate-400 hover:text-slate-700"
                ])
              }, [
                createVNode(unref(List), { class: "w-3.5 h-3.5" }),
                _cache[10] || (_cache[10] = createBaseVNode("span", null, "List View", -1))
              ], 2),
              createBaseVNode("button", {
                onClick: _cache[2] || (_cache[2] = ($event) => viewMode.value = "map"),
                class: normalizeClass([
                  "px-4 py-1.5 rounded-lg text-[10px] font-semibold uppercase tracking-wide transition-all active:scale-98 flex items-center space-x-1.5",
                  viewMode.value === "map" ? "bg-white shadow-sm text-slate-800" : "text-slate-400 hover:text-slate-700"
                ])
              }, [
                createVNode(unref(MapPin), { class: "w-3.5 h-3.5" }),
                _cache[11] || (_cache[11] = createBaseVNode("span", null, "Map View", -1))
              ], 2)
            ])
          ])
        ]),
        createBaseVNode("div", _hoisted_16, [
          createBaseVNode("div", _hoisted_17, [
            createBaseVNode("div", _hoisted_18, [
              createVNode(unref(Search), { class: "absolute left-3.5 top-1/2 transform -translate-y-1/2 w-4.5 h-4.5 text-slate-400 group-focus-within:text-blue-600 transition-colors" }),
              withDirectives(createBaseVNode("input", {
                type: "text",
                placeholder: "Search libraries by name or location...",
                "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => searchQuery.value = $event),
                class: "w-full pl-11 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all shadow-sm text-sm text-slate-700 placeholder-slate-400"
              }, null, 512), [
                [vModelText, searchQuery.value]
              ])
            ]),
            createBaseVNode("div", _hoisted_19, [
              createVNode(unref(Funnel), { class: "absolute left-3.5 top-1/2 transform -translate-y-1/2 w-4.5 h-4.5 text-slate-400 group-focus-within:text-blue-600 transition-colors" }),
              withDirectives(createBaseVNode("select", {
                "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => filterFacility.value = $event),
                class: "w-full pl-11 pr-10 py-2.5 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all shadow-sm text-sm text-slate-700 appearance-none cursor-pointer"
              }, [
                _cache[12] || (_cache[12] = createBaseVNode("option", { value: "" }, "All Facilities", -1)),
                (openBlock(true), createElementBlock(Fragment, null, renderList(allFacilities.value, (facility) => {
                  return openBlock(), createElementBlock("option", {
                    key: facility,
                    value: facility
                  }, toDisplayString(facility), 9, _hoisted_20);
                }), 128))
              ], 512), [
                [vModelSelect, filterFacility.value]
              ]),
              createVNode(unref(ChevronDown), { class: "absolute right-3.5 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" })
            ]),
            libraryFilterMode.value === "nearby" && unref(locationGranted) ? (openBlock(), createElementBlock("div", _hoisted_21, [
              createBaseVNode("div", _hoisted_22, [
                _cache[13] || (_cache[13] = createBaseVNode("span", { class: "text-[11px] font-bold text-slate-400 uppercase tracking-wider" }, "Distance:", -1)),
                createBaseVNode("span", _hoisted_23, toDisplayString(maxDistance.value) + " km", 1)
              ]),
              withDirectives(createBaseVNode("input", {
                type: "range",
                min: "1",
                max: "100",
                step: "1",
                "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => maxDistance.value = $event),
                class: "w-full h-1.5 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-blue-600 focus:outline-none"
              }, null, 512), [
                [
                  vModelText,
                  maxDistance.value,
                  void 0,
                  { number: true }
                ]
              ])
            ])) : createCommentVNode("", true)
          ])
        ]),
        loadingLibraries.value || libraryFilterMode.value === "nearby" && unref(locationLoading) ? (openBlock(), createElementBlock("div", _hoisted_24, [
          _cache[14] || (_cache[14] = createBaseVNode("div", { class: "animate-spin rounded-full h-10 w-10 border-2 border-blue-600 border-t-transparent" }, null, -1)),
          createBaseVNode("p", _hoisted_25, toDisplayString(unref(locationLoading) ? "Requesting location access..." : "Loading libraries..."), 1)
        ])) : libraryFilterMode.value === "nearby" && !unref(locationGranted) ? (openBlock(), createElementBlock("div", _hoisted_26, [
          createBaseVNode("div", _hoisted_27, [
            createVNode(unref(MapPinOff), { class: "w-9 h-9" })
          ]),
          _cache[17] || (_cache[17] = createBaseVNode("h3", { class: "text-lg font-bold text-slate-800 mb-2" }, "Location Access Required", -1)),
          _cache[18] || (_cache[18] = createBaseVNode("p", { class: "text-xs text-slate-500 max-w-md mx-auto leading-relaxed mb-6" }, " Device location access is currently turned off or denied. To view nearby libraries around your current location, please enable location services and allow browser access. ", -1)),
          createBaseVNode("div", _hoisted_28, [
            createBaseVNode("button", {
              onClick: handleRequestLocation,
              class: "w-full sm:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold shadow-md shadow-blue-500/10 active:scale-98 transition-all flex items-center justify-center space-x-2"
            }, [
              createVNode(unref(Navigation), { class: "w-4 h-4" }),
              _cache[15] || (_cache[15] = createBaseVNode("span", null, "Enable Location Access", -1))
            ]),
            createBaseVNode("button", {
              onClick: handleSelectAllMode,
              class: "w-full sm:w-auto px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold active:scale-98 transition-all flex items-center justify-center space-x-2"
            }, [
              createVNode(unref(Building2), { class: "w-4 h-4" }),
              _cache[16] || (_cache[16] = createBaseVNode("span", null, "View All Libraries", -1))
            ])
          ])
        ])) : (openBlock(), createElementBlock(Fragment, { key: 4 }, [
          viewMode.value === "list" ? (openBlock(), createElementBlock("div", _hoisted_29, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(filteredLibraries.value, (library) => {
              return openBlock(), createBlock(LibraryCard, {
                key: library.id,
                library
              }, null, 8, ["library"]);
            }), 128))
          ])) : (openBlock(), createBlock(LibraryMap, {
            key: 1,
            libraries: filteredLibraries.value
          }, null, 8, ["libraries"])),
          filteredLibraries.value.length === 0 ? (openBlock(), createElementBlock("div", _hoisted_30, [
            createBaseVNode("div", _hoisted_31, [
              createVNode(unref(MapPin), { class: "w-7 h-7" })
            ]),
            _cache[20] || (_cache[20] = createBaseVNode("h3", { class: "text-base font-semibold text-slate-800 mb-1" }, "No Libraries Found", -1)),
            libraryFilterMode.value === "nearby" && closestLibrary.value ? (openBlock(), createElementBlock("p", _hoisted_32, [
              createTextVNode(" No libraries found within " + toDisplayString(maxDistance.value) + " km. The closest active library is ", 1),
              createBaseVNode("span", _hoisted_33, toDisplayString(closestLibrary.value.name), 1),
              createTextVNode(" (" + toDisplayString(closestLibrary.value.distance_km) + " km away). Switch to ", 1),
              createBaseVNode("span", {
                class: "font-bold text-blue-600 cursor-pointer hover:underline",
                onClick: handleSelectAllMode
              }, '"All Libraries"'),
              _cache[19] || (_cache[19] = createTextVNode(" to view it. ", -1))
            ])) : (openBlock(), createElementBlock("p", _hoisted_34, " No libraries matched your search criteria. "))
          ])) : createCommentVNode("", true)
        ], 64))
      ]);
    };
  }
});
const LibrariesPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e5f583ba"]]);
export {
  LibrariesPage as default
};
