import { d as defineComponent, p as useAuth, r as ref, D as computed, o as onMounted, c as createElementBlock, b as createBaseVNode, k as createBlock, u as unref, t as toDisplayString, F as Fragment, f as createVNode, m as createCommentVNode, h as renderList, v as withDirectives, x as vModelText, j as createTextVNode, n as normalizeClass, Q as librarianAPI, z as vModelCheckbox, l as resolveDynamicComponent, A as useRouter, i as openBlock } from "./main-DCJXrkf-.js";
import { u as useSwal } from "./useSwal-BUxo5JBv.js";
import { S as Save } from "./save-DwG4SO42.js";
import { R as RefreshCw } from "./refresh-cw-DCq6mbXe.js";
import { M as MapPin } from "./map-pin-YMhwiUzx.js";
import { B as Building2 } from "./building-2-DcNTcpv2.js";
import { P as PanelsTopLeft } from "./panels-top-left-DmkC30__.js";
import { c as createLucideIcon } from "./createLucideIcon-CDsoUk2K.js";
import { W as Wifi } from "./wifi-B7TBiogM.js";
import { C as Coffee, W as Wind } from "./wind-Doctk1Jn.js";
import { P as Printer } from "./printer-ClKtIZ53.js";
import { B as BookOpen } from "./book-open-CmZbSzMF.js";
import { Z as Zap } from "./zap-CE81Tw0M.js";
import { L as Lock } from "./lock-DF6cXPUS.js";
import { C as Camera } from "./camera-CwuUy5A1.js";
/* empty css               */
const Grid3x3 = createLucideIcon("grid-3x3", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M3 9h18", key: "1pudct" }],
  ["path", { d: "M3 15h18", key: "5xshup" }],
  ["path", { d: "M9 3v18", key: "fh3hqa" }],
  ["path", { d: "M15 3v18", key: "14nvp0" }]
]);
const Map = createLucideIcon("map", [
  [
    "path",
    {
      d: "M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z",
      key: "169xi5"
    }
  ],
  ["path", { d: "M15 5.764v15", key: "1pn4in" }],
  ["path", { d: "M9 3.236v15", key: "1uimfh" }]
]);
const _hoisted_1 = { class: "p-6 space-y-6" };
const _hoisted_2 = { class: "flex items-center justify-between" };
const _hoisted_3 = ["disabled"];
const _hoisted_4 = { class: "text-sm font-medium" };
const _hoisted_5 = {
  key: 0,
  class: "flex justify-center py-12"
};
const _hoisted_6 = { class: "bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl p-8 text-white shadow-lg" };
const _hoisted_7 = { class: "flex items-start justify-between" };
const _hoisted_8 = { class: "flex-1" };
const _hoisted_9 = { class: "text-2xl font-bold mb-2" };
const _hoisted_10 = { class: "flex items-center space-x-2 text-purple-100 mb-4" };
const _hoisted_11 = { class: "grid grid-cols-3 gap-6 mt-6" };
const _hoisted_12 = { class: "text-3xl font-bold mt-1" };
const _hoisted_13 = { class: "text-3xl font-bold mt-1" };
const _hoisted_14 = { class: "text-3xl font-bold mt-1" };
const _hoisted_15 = { class: "p-4 bg-white/20 backdrop-blur-md rounded-2xl" };
const _hoisted_16 = { class: "bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden" };
const _hoisted_17 = { class: "border-b border-gray-200 bg-gray-50/50" };
const _hoisted_18 = { class: "flex space-x-8 px-6" };
const _hoisted_19 = ["onClick"];
const _hoisted_20 = {
  key: 0,
  class: "absolute bottom-0 left-0 right-0 h-0.5 bg-purple-600 rounded-full"
};
const _hoisted_21 = {
  key: 0,
  class: "p-6 space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-300"
};
const _hoisted_22 = { class: "grid grid-cols-1 md:grid-cols-2 gap-6" };
const _hoisted_23 = { class: "md:col-span-2" };
const _hoisted_24 = { class: "md:col-span-2 flex justify-end" };
const _hoisted_25 = {
  key: 1,
  class: "p-6 space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-300"
};
const _hoisted_26 = { class: "space-y-4" };
const _hoisted_27 = { class: "flex items-center space-x-3 flex-1" };
const _hoisted_28 = ["onUpdate:modelValue"];
const _hoisted_29 = { class: "font-semibold text-gray-900 w-24" };
const _hoisted_30 = {
  key: 0,
  class: "flex items-center space-x-3"
};
const _hoisted_31 = ["onUpdate:modelValue"];
const _hoisted_32 = ["onUpdate:modelValue"];
const _hoisted_33 = {
  key: 1,
  class: "text-gray-400 font-medium italic"
};
const _hoisted_34 = {
  key: 2,
  class: "p-6 space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-300"
};
const _hoisted_35 = { class: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4" };
const _hoisted_36 = ["onUpdate:modelValue"];
const _hoisted_37 = { class: "font-medium text-gray-700" };
const _hoisted_38 = { class: "mt-6" };
const _hoisted_39 = {
  key: 3,
  class: "p-6 space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-300"
};
const _hoisted_40 = {
  key: 4,
  class: "p-6 space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-300"
};
const _hoisted_41 = { class: "space-y-4" };
const _hoisted_42 = { class: "font-semibold text-gray-900" };
const _hoisted_43 = { class: "text-sm text-gray-500" };
const _hoisted_44 = { class: "relative inline-flex items-center cursor-pointer" };
const _hoisted_45 = ["onUpdate:modelValue"];
const _hoisted_46 = { class: "grid grid-cols-1 md:grid-cols-2 gap-6 pt-4" };
const _hoisted_47 = { class: "p-4 bg-gray-50 rounded-xl border border-gray-100" };
const _hoisted_48 = { class: "p-4 bg-gray-50 rounded-xl border border-gray-100" };
const _hoisted_49 = { class: "p-4 bg-gray-50 rounded-xl border border-gray-100" };
const _hoisted_50 = { class: "md:col-span-2 p-6 bg-purple-50 rounded-xl border border-purple-100" };
const _hoisted_51 = { class: "font-bold text-gray-900 mb-4 flex items-center" };
const _hoisted_52 = { class: "grid grid-cols-1 md:grid-cols-2 gap-4" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "LibraryInfoPage",
  setup(__props) {
    const { showSuccess, showError, showWarning } = useSwal();
    useAuth();
    useRouter();
    const loading = ref(true);
    const saving = ref(false);
    const activeTab = ref("basic");
    const libraryData = ref({
      name: "",
      address: "",
      capacity: 0,
      total_seats: 0,
      current_occupancy: 0,
      latitude: null,
      longitude: null,
      seat_layout_mode: "layout"
    });
    const contactInfo = ref({
      phone: "",
      email: "",
      website: ""
    });
    const operatingDays = ref([
      { day: "Monday", isOpen: true, openTime: "08:00", closeTime: "22:00" },
      { day: "Tuesday", isOpen: true, openTime: "08:00", closeTime: "22:00" },
      { day: "Wednesday", isOpen: true, openTime: "08:00", closeTime: "22:00" },
      { day: "Thursday", isOpen: true, openTime: "08:00", closeTime: "22:00" },
      { day: "Friday", isOpen: true, openTime: "08:00", closeTime: "22:00" },
      { day: "Saturday", isOpen: true, openTime: "09:00", closeTime: "20:00" },
      { day: "Sunday", isOpen: false, openTime: "", closeTime: "" }
    ]);
    const facilitiesList = ref([
      { id: 1, name: "WiFi", icon: Wifi, available: true },
      { id: 2, name: "Cafeteria", icon: Coffee, available: false },
      { id: 3, name: "Printer", icon: Printer, available: true },
      { id: 4, name: "Reading Room", icon: BookOpen, available: true },
      { id: 5, name: "Power Outlets", icon: Zap, available: true },
      { id: 6, name: "Air Conditioning", icon: Wind, available: true },
      { id: 7, name: "Lockers", icon: Lock, available: false },
      { id: 8, name: "CCTV", icon: Camera, available: true }
    ]);
    const specialFeatures = ref("");
    const rulesText = ref("");
    const cancellationPolicy = ref("");
    const librarySettings = ref({
      allowBookings: true,
      requireApproval: false,
      allowExtensions: true,
      sendReminders: true,
      maxBookingDuration: 4,
      advanceBookingDays: 7,
      minStudyMinutesForStreak: 0
    });
    const tabs = [
      { value: "basic", label: "Basic Information" },
      { value: "hours", label: "Operating Hours" },
      { value: "facilities", label: "Facilities" },
      { value: "rules", label: "Rules & Policies" },
      { value: "settings", label: "Settings" }
    ];
    const settingsConfig = [
      { key: "allowBookings", label: "Allow Bookings", description: "Enable students to book seats" },
      { key: "requireApproval", label: "Require Approval", description: "Bookings need librarian approval" },
      { key: "allowExtensions", label: "Allow Extensions", description: "Students can extend their bookings" },
      { key: "sendReminders", label: "Send Reminders", description: "Send booking reminder notifications" }
    ];
    const occupancyRate = computed(() => {
      if (!libraryData.value.total_seats) return 0;
      return Math.round(libraryData.value.current_occupancy / libraryData.value.total_seats * 100);
    });
    const getCurrentLocation = () => {
      if (!navigator.geolocation) {
        showWarning("Not Supported", "Geolocation is not supported by your browser");
        return;
      }
      navigator.geolocation.getCurrentPosition(
        (position) => {
          libraryData.value.latitude = position.coords.latitude;
          libraryData.value.longitude = position.coords.longitude;
        },
        (error) => {
          console.error("Error getting location:", error);
          showError("Location Error", "Unable to retrieve your location. Please enter manually.");
        }
      );
    };
    const fetchLibraryInfo = async () => {
      try {
        loading.value = true;
        const data = await librarianAPI.getLibraryInfo();
        libraryData.value = {
          name: data.name,
          address: data.address,
          capacity: data.capacity,
          total_seats: data.total_seats,
          current_occupancy: data.current_occupancy,
          latitude: data.latitude,
          longitude: data.longitude,
          seat_layout_mode: data.seat_layout_mode || "layout"
        };
        if (!data.latitude || !data.longitude) {
          getCurrentLocation();
        }
        if (data.contact_info) {
          contactInfo.value = { ...contactInfo.value, ...data.contact_info };
        }
        if (data.operating_days && Array.isArray(data.operating_days)) {
          operatingDays.value = data.operating_days;
        }
        if (data.facilities && Array.isArray(data.facilities)) {
          facilitiesList.value.forEach((f) => {
            f.available = data.facilities.includes(f.name);
          });
        }
        specialFeatures.value = data.special_features?.additional || "";
        if (data.rules) {
          rulesText.value = Array.isArray(data.rules.general) ? data.rules.general.join("\n") : "";
          cancellationPolicy.value = data.rules.cancellation || "";
        }
        if (data.special_features?.settings) {
          librarySettings.value = { ...librarySettings.value, ...data.special_features.settings };
        }
      } catch (error) {
        console.error("Error fetching library info:", error);
        showError("Load Failed", "Failed to load library information");
      } finally {
        loading.value = false;
      }
    };
    const saveChanges = async () => {
      try {
        saving.value = true;
        const payload = {
          name: libraryData.value.name,
          address: libraryData.value.address,
          capacity: libraryData.value.capacity,
          latitude: libraryData.value.latitude,
          longitude: libraryData.value.longitude,
          seat_layout_mode: libraryData.value.seat_layout_mode,
          contact_info: contactInfo.value,
          operating_days: operatingDays.value,
          facilities: facilitiesList.value.filter((f) => f.available).map((f) => f.name),
          rules: {
            general: rulesText.value.split("\n").filter((r) => r.trim()),
            cancellation: cancellationPolicy.value
          },
          special_features: {
            additional: specialFeatures.value,
            settings: librarySettings.value
          }
        };
        await librarianAPI.updateLibraryInfo(payload);
        showSuccess("Saved!", "Library information updated successfully");
        fetchLibraryInfo();
      } catch (error) {
        console.error("Error updating library info:", error);
        showError("Save Failed", "Failed to update library information");
      } finally {
        saving.value = false;
      }
    };
    onMounted(fetchLibraryInfo);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          _cache[15] || (_cache[15] = createBaseVNode("div", null, [
            createBaseVNode("h1", { class: "text-3xl font-bold text-gray-900" }, "Library Information"),
            createBaseVNode("p", { class: "text-gray-600 mt-1" }, "Manage library details and settings")
          ], -1)),
          createBaseVNode("button", {
            onClick: saveChanges,
            disabled: saving.value,
            class: "px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg hover:shadow-lg transition-all flex items-center space-x-2 disabled:opacity-50"
          }, [
            !saving.value ? (openBlock(), createBlock(unref(Save), {
              key: 0,
              class: "w-4 h-4"
            })) : (openBlock(), createBlock(unref(RefreshCw), {
              key: 1,
              class: "w-4 h-4 animate-spin"
            })),
            createBaseVNode("span", _hoisted_4, toDisplayString(saving.value ? "Saving..." : "Save Changes"), 1)
          ], 8, _hoisted_3)
        ]),
        loading.value ? (openBlock(), createElementBlock("div", _hoisted_5, [..._cache[16] || (_cache[16] = [
          createBaseVNode("div", { class: "animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600" }, null, -1)
        ])])) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
          createBaseVNode("div", _hoisted_6, [
            createBaseVNode("div", _hoisted_7, [
              createBaseVNode("div", _hoisted_8, [
                createBaseVNode("h2", _hoisted_9, toDisplayString(libraryData.value.name), 1),
                createBaseVNode("div", _hoisted_10, [
                  createVNode(unref(MapPin), { class: "w-4 h-4" }),
                  createBaseVNode("span", null, toDisplayString(libraryData.value.address), 1)
                ]),
                createBaseVNode("div", _hoisted_11, [
                  createBaseVNode("div", null, [
                    _cache[17] || (_cache[17] = createBaseVNode("p", { class: "text-purple-200 text-sm" }, "Total Capacity", -1)),
                    createBaseVNode("p", _hoisted_12, toDisplayString(libraryData.value.total_seats || 0), 1)
                  ]),
                  createBaseVNode("div", null, [
                    _cache[18] || (_cache[18] = createBaseVNode("p", { class: "text-purple-200 text-sm" }, "Current Occupancy", -1)),
                    createBaseVNode("p", _hoisted_13, toDisplayString(libraryData.value.current_occupancy || 0), 1)
                  ]),
                  createBaseVNode("div", null, [
                    _cache[19] || (_cache[19] = createBaseVNode("p", { class: "text-purple-200 text-sm" }, "Occupancy Rate", -1)),
                    createBaseVNode("p", _hoisted_14, toDisplayString(occupancyRate.value) + "%", 1)
                  ])
                ])
              ]),
              createBaseVNode("div", _hoisted_15, [
                createVNode(unref(Building2), { class: "w-12 h-12" })
              ])
            ])
          ]),
          createBaseVNode("div", _hoisted_16, [
            createBaseVNode("div", _hoisted_17, [
              createBaseVNode("div", _hoisted_18, [
                (openBlock(), createElementBlock(Fragment, null, renderList(tabs, (tab) => {
                  return createBaseVNode("button", {
                    key: tab.value,
                    onClick: ($event) => activeTab.value = tab.value,
                    class: normalizeClass([
                      "py-4 px-2 border-b-2 font-medium text-sm transition-all relative",
                      activeTab.value === tab.value ? "border-purple-600 text-purple-600" : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                    ])
                  }, [
                    createTextVNode(toDisplayString(tab.label) + " ", 1),
                    activeTab.value === tab.value ? (openBlock(), createElementBlock("div", _hoisted_20)) : createCommentVNode("", true)
                  ], 10, _hoisted_19);
                }), 64))
              ])
            ]),
            activeTab.value === "basic" ? (openBlock(), createElementBlock("div", _hoisted_21, [
              createBaseVNode("div", _hoisted_22, [
                createBaseVNode("div", null, [
                  _cache[20] || (_cache[20] = createBaseVNode("label", { class: "block text-sm font-medium text-gray-700 mb-2" }, "Library Name", -1)),
                  withDirectives(createBaseVNode("input", {
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => libraryData.value.name = $event),
                    type: "text",
                    class: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                  }, null, 512), [
                    [vModelText, libraryData.value.name]
                  ])
                ]),
                createBaseVNode("div", null, [
                  _cache[21] || (_cache[21] = createBaseVNode("label", { class: "block text-sm font-medium text-gray-700 mb-2" }, "Contact Number", -1)),
                  withDirectives(createBaseVNode("input", {
                    "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => contactInfo.value.phone = $event),
                    type: "text",
                    class: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                  }, null, 512), [
                    [vModelText, contactInfo.value.phone]
                  ])
                ]),
                createBaseVNode("div", _hoisted_23, [
                  _cache[22] || (_cache[22] = createBaseVNode("label", { class: "block text-sm font-medium text-gray-700 mb-2" }, "Address", -1)),
                  withDirectives(createBaseVNode("textarea", {
                    "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => libraryData.value.address = $event),
                    rows: "3",
                    class: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                  }, null, 512), [
                    [vModelText, libraryData.value.address]
                  ])
                ]),
                createBaseVNode("div", null, [
                  _cache[23] || (_cache[23] = createBaseVNode("label", { class: "block text-sm font-medium text-gray-700 mb-2" }, "Email", -1)),
                  withDirectives(createBaseVNode("input", {
                    "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => contactInfo.value.email = $event),
                    type: "email",
                    class: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                  }, null, 512), [
                    [vModelText, contactInfo.value.email]
                  ])
                ]),
                createBaseVNode("div", null, [
                  _cache[24] || (_cache[24] = createBaseVNode("label", { class: "block text-sm font-medium text-gray-700 mb-2" }, "Website", -1)),
                  withDirectives(createBaseVNode("input", {
                    "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => contactInfo.value.website = $event),
                    type: "url",
                    class: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                  }, null, 512), [
                    [vModelText, contactInfo.value.website]
                  ])
                ]),
                createBaseVNode("div", null, [
                  _cache[25] || (_cache[25] = createBaseVNode("label", { class: "block text-sm font-medium text-gray-700 mb-2" }, "Latitude", -1)),
                  withDirectives(createBaseVNode("input", {
                    "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => libraryData.value.latitude = $event),
                    type: "number",
                    step: "any",
                    class: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all",
                    placeholder: "e.g. 31.5204"
                  }, null, 512), [
                    [
                      vModelText,
                      libraryData.value.latitude,
                      void 0,
                      { number: true }
                    ]
                  ])
                ]),
                createBaseVNode("div", null, [
                  _cache[26] || (_cache[26] = createBaseVNode("label", { class: "block text-sm font-medium text-gray-700 mb-2" }, "Longitude", -1)),
                  withDirectives(createBaseVNode("input", {
                    "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => libraryData.value.longitude = $event),
                    type: "number",
                    step: "any",
                    class: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all",
                    placeholder: "e.g. 74.3587"
                  }, null, 512), [
                    [
                      vModelText,
                      libraryData.value.longitude,
                      void 0,
                      { number: true }
                    ]
                  ])
                ]),
                createBaseVNode("div", _hoisted_24, [
                  createBaseVNode("button", {
                    type: "button",
                    onClick: getCurrentLocation,
                    class: "text-sm text-purple-600 hover:text-purple-700 font-medium flex items-center space-x-1"
                  }, [
                    createVNode(unref(MapPin), { class: "w-4 h-4" }),
                    _cache[27] || (_cache[27] = createBaseVNode("span", null, "Use Current Location", -1))
                  ])
                ])
              ])
            ])) : createCommentVNode("", true),
            activeTab.value === "hours" ? (openBlock(), createElementBlock("div", _hoisted_25, [
              createBaseVNode("div", _hoisted_26, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(operatingDays.value, (day) => {
                  return openBlock(), createElementBlock("div", {
                    key: day.day,
                    class: "flex items-center space-x-4 p-4 bg-gray-50 rounded-xl border border-gray-100 hover:border-purple-200 transition-all"
                  }, [
                    createBaseVNode("div", _hoisted_27, [
                      withDirectives(createBaseVNode("input", {
                        type: "checkbox",
                        "onUpdate:modelValue": ($event) => day.isOpen = $event,
                        class: "w-5 h-5 text-purple-600 rounded-lg focus:ring-purple-500 border-gray-300"
                      }, null, 8, _hoisted_28), [
                        [vModelCheckbox, day.isOpen]
                      ]),
                      createBaseVNode("span", _hoisted_29, toDisplayString(day.day), 1)
                    ]),
                    day.isOpen ? (openBlock(), createElementBlock("div", _hoisted_30, [
                      withDirectives(createBaseVNode("input", {
                        "onUpdate:modelValue": ($event) => day.openTime = $event,
                        type: "time",
                        class: "px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white"
                      }, null, 8, _hoisted_31), [
                        [vModelText, day.openTime]
                      ]),
                      _cache[28] || (_cache[28] = createBaseVNode("span", { class: "text-gray-400 font-medium" }, "to", -1)),
                      withDirectives(createBaseVNode("input", {
                        "onUpdate:modelValue": ($event) => day.closeTime = $event,
                        type: "time",
                        class: "px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white"
                      }, null, 8, _hoisted_32), [
                        [vModelText, day.closeTime]
                      ])
                    ])) : (openBlock(), createElementBlock("span", _hoisted_33, "Closed"))
                  ]);
                }), 128))
              ])
            ])) : createCommentVNode("", true),
            activeTab.value === "facilities" ? (openBlock(), createElementBlock("div", _hoisted_34, [
              createBaseVNode("div", _hoisted_35, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(facilitiesList.value, (facility) => {
                  return openBlock(), createElementBlock("div", {
                    key: facility.id,
                    class: "flex items-center space-x-3 p-4 bg-gray-50 rounded-xl border border-gray-100 hover:border-purple-200 hover:bg-white transition-all group"
                  }, [
                    withDirectives(createBaseVNode("input", {
                      type: "checkbox",
                      "onUpdate:modelValue": ($event) => facility.available = $event,
                      class: "w-5 h-5 text-purple-600 rounded-lg focus:ring-purple-500 border-gray-300"
                    }, null, 8, _hoisted_36), [
                      [vModelCheckbox, facility.available]
                    ]),
                    (openBlock(), createBlock(resolveDynamicComponent(facility.icon), { class: "w-5 h-5 text-gray-400 group-hover:text-purple-500 transition-colors" })),
                    createBaseVNode("span", _hoisted_37, toDisplayString(facility.name), 1)
                  ]);
                }), 128))
              ]),
              createBaseVNode("div", _hoisted_38, [
                _cache[29] || (_cache[29] = createBaseVNode("label", { class: "block text-sm font-medium text-gray-700 mb-2" }, "Additional Features", -1)),
                withDirectives(createBaseVNode("textarea", {
                  "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => specialFeatures.value = $event),
                  rows: "4",
                  placeholder: "List any additional facilities or amenities...",
                  class: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                }, null, 512), [
                  [vModelText, specialFeatures.value]
                ])
              ])
            ])) : createCommentVNode("", true),
            activeTab.value === "rules" ? (openBlock(), createElementBlock("div", _hoisted_39, [
              createBaseVNode("div", null, [
                _cache[30] || (_cache[30] = createBaseVNode("label", { class: "block text-sm font-medium text-gray-700 mb-2" }, "Library Rules (One per line)", -1)),
                withDirectives(createBaseVNode("textarea", {
                  "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => rulesText.value = $event),
                  rows: "8",
                  placeholder: "Enter library rules and regulations...",
                  class: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all font-mono text-sm"
                }, null, 512), [
                  [vModelText, rulesText.value]
                ])
              ]),
              createBaseVNode("div", null, [
                _cache[31] || (_cache[31] = createBaseVNode("label", { class: "block text-sm font-medium text-gray-700 mb-2" }, "Cancellation Policy", -1)),
                withDirectives(createBaseVNode("textarea", {
                  "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => cancellationPolicy.value = $event),
                  rows: "4",
                  placeholder: "Enter cancellation policy...",
                  class: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                }, null, 512), [
                  [vModelText, cancellationPolicy.value]
                ])
              ])
            ])) : createCommentVNode("", true),
            activeTab.value === "settings" ? (openBlock(), createElementBlock("div", _hoisted_40, [
              createBaseVNode("div", _hoisted_41, [
                (openBlock(), createElementBlock(Fragment, null, renderList(settingsConfig, (setting) => {
                  return createBaseVNode("div", {
                    key: setting.key,
                    class: "flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-100"
                  }, [
                    createBaseVNode("div", null, [
                      createBaseVNode("h4", _hoisted_42, toDisplayString(setting.label), 1),
                      createBaseVNode("p", _hoisted_43, toDisplayString(setting.description), 1)
                    ]),
                    createBaseVNode("label", _hoisted_44, [
                      withDirectives(createBaseVNode("input", {
                        type: "checkbox",
                        "onUpdate:modelValue": ($event) => librarySettings.value[setting.key] = $event,
                        class: "sr-only peer"
                      }, null, 8, _hoisted_45), [
                        [vModelCheckbox, librarySettings.value[setting.key]]
                      ]),
                      _cache[32] || (_cache[32] = createBaseVNode("div", { class: "w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600" }, null, -1))
                    ])
                  ]);
                }), 64)),
                createBaseVNode("div", _hoisted_46, [
                  createBaseVNode("div", _hoisted_47, [
                    _cache[33] || (_cache[33] = createBaseVNode("label", { class: "block text-sm font-medium text-gray-700 mb-2" }, "Maximum Booking Duration (hours)", -1)),
                    withDirectives(createBaseVNode("input", {
                      "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => librarySettings.value.maxBookingDuration = $event),
                      type: "number",
                      min: "1",
                      max: "12",
                      class: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white"
                    }, null, 512), [
                      [
                        vModelText,
                        librarySettings.value.maxBookingDuration,
                        void 0,
                        { number: true }
                      ]
                    ])
                  ]),
                  createBaseVNode("div", _hoisted_48, [
                    _cache[34] || (_cache[34] = createBaseVNode("label", { class: "block text-sm font-medium text-gray-700 mb-2" }, "Advance Booking Days", -1)),
                    withDirectives(createBaseVNode("input", {
                      "onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => librarySettings.value.advanceBookingDays = $event),
                      type: "number",
                      min: "1",
                      max: "30",
                      class: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white"
                    }, null, 512), [
                      [
                        vModelText,
                        librarySettings.value.advanceBookingDays,
                        void 0,
                        { number: true }
                      ]
                    ])
                  ]),
                  createBaseVNode("div", _hoisted_49, [
                    _cache[35] || (_cache[35] = createBaseVNode("label", { class: "block text-sm font-medium text-gray-700 mb-2" }, "Min Study Minutes for Streak", -1)),
                    withDirectives(createBaseVNode("input", {
                      "onUpdate:modelValue": _cache[12] || (_cache[12] = ($event) => librarySettings.value.minStudyMinutesForStreak = $event),
                      type: "number",
                      min: "0",
                      class: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white",
                      placeholder: "e.g. 60"
                    }, null, 512), [
                      [
                        vModelText,
                        librarySettings.value.minStudyMinutesForStreak,
                        void 0,
                        { number: true }
                      ]
                    ])
                  ]),
                  createBaseVNode("div", _hoisted_50, [
                    createBaseVNode("h4", _hoisted_51, [
                      createVNode(unref(PanelsTopLeft), { class: "w-5 h-5 mr-2 text-purple-600" }),
                      _cache[36] || (_cache[36] = createTextVNode(" Seat Layout Display Mode ", -1))
                    ]),
                    createBaseVNode("div", _hoisted_52, [
                      createBaseVNode("div", {
                        onClick: _cache[13] || (_cache[13] = ($event) => libraryData.value.seat_layout_mode = "layout"),
                        class: normalizeClass([
                          "p-4 rounded-xl border-2 cursor-pointer transition-all flex items-center space-x-4",
                          libraryData.value.seat_layout_mode === "layout" ? "bg-white border-purple-600 shadow-md scale-[1.02]" : "bg-white/50 border-transparent hover:border-purple-200"
                        ])
                      }, [
                        createBaseVNode("div", {
                          class: normalizeClass(["p-3 rounded-lg", libraryData.value.seat_layout_mode === "layout" ? "bg-purple-600 text-white" : "bg-gray-100 text-gray-400"])
                        }, [
                          createVNode(unref(Map), { class: "w-6 h-6" })
                        ], 2),
                        _cache[37] || (_cache[37] = createBaseVNode("div", null, [
                          createBaseVNode("p", { class: "font-bold text-gray-900" }, "Student Layout Mode"),
                          createBaseVNode("p", { class: "text-xs text-gray-500" }, "Visual map with XY positions")
                        ], -1))
                      ], 2),
                      createBaseVNode("div", {
                        onClick: _cache[14] || (_cache[14] = ($event) => libraryData.value.seat_layout_mode = "grid"),
                        class: normalizeClass([
                          "p-4 rounded-xl border-2 cursor-pointer transition-all flex items-center space-x-4",
                          libraryData.value.seat_layout_mode === "grid" ? "bg-white border-purple-600 shadow-md scale-[1.02]" : "bg-white/50 border-transparent hover:border-purple-200"
                        ])
                      }, [
                        createBaseVNode("div", {
                          class: normalizeClass(["p-3 rounded-lg", libraryData.value.seat_layout_mode === "grid" ? "bg-purple-600 text-white" : "bg-gray-100 text-gray-400"])
                        }, [
                          createVNode(unref(Grid3x3), { class: "w-6 h-6" })
                        ], 2),
                        _cache[38] || (_cache[38] = createBaseVNode("div", null, [
                          createBaseVNode("p", { class: "font-bold text-gray-900" }, "Grid View"),
                          createBaseVNode("p", { class: "text-xs text-gray-500" }, "Organized row-by-row list")
                        ], -1))
                      ], 2)
                    ])
                  ])
                ])
              ])
            ])) : createCommentVNode("", true)
          ])
        ], 64))
      ]);
    };
  }
});
export {
  _sfc_main as default
};
