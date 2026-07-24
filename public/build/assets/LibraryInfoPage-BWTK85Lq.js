import { d as defineComponent, x as useAuth, r as ref, c as computed, o as onMounted, a as createElementBlock, j as createCommentVNode, f as createVNode, b as createBaseVNode, u as unref, F as Fragment, t as toDisplayString, h as createBlock, q as normalizeStyle, k as renderList, p as withDirectives, v as vModelText, n as normalizeClass, g as resolveComponent, P as nextTick, O as librarianAPI, m as resolveDynamicComponent, B as vModelCheckbox, C as useRouter, l as openBlock } from "./main-CP29_5Dg.js";
import { u as useSwal } from "./useSwal-pQW_XkRe.js";
import { R as RefreshCw } from "./refresh-cw-DjzDyWQP.js";
import { B as Building2 } from "./building-2-BCZNb8vB.js";
import { M as MapPin } from "./map-pin-3HAewkcf.js";
import { S as Save } from "./save-DuVSbc71.js";
import { N as Navigation } from "./navigation-DuhRup56.js";
import { c as createLucideIcon } from "./createLucideIcon-DTPudzWg.js";
import { P as PanelsTopLeft } from "./panels-top-left-BCXG0zkT.js";
import { G as Grid3x3 } from "./grid-3x3-CLn7MIxe.js";
import { X } from "./x-BFxoMqPZ.js";
import { I as Info } from "./info-CO70VvRo.js";
import { C as Clock } from "./clock-Bt9n9pGR.js";
import { F as FileText } from "./file-text-CEutq3ZC.js";
import { S as Settings } from "./settings-Dywk5iwO.js";
import { W as Wifi } from "./wifi-CaA-xCol.js";
import { C as Coffee } from "./coffee-BvwVVQrh.js";
import { P as Printer } from "./printer-M9N6zifG.js";
import { B as BookOpen } from "./book-open-C5CD1i_v.js";
import { Z as Zap } from "./zap-Cw81dnaS.js";
import { W as Wind } from "./wind-Ct9NGm91.js";
import { L as Lock } from "./lock-CZUBHceE.js";
import { C as Camera } from "./camera-2DSKyZHB.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
/* empty css               */
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
const SquareCheckBig = createLucideIcon("square-check-big", [
  [
    "path",
    { d: "M21 10.656V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.344", key: "2acyp4" }
  ],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
]);
const _hoisted_1 = { class: "p-6 space-y-6 font-outfit" };
const _hoisted_2 = {
  key: 0,
  class: "flex flex-col items-center justify-center py-24"
};
const _hoisted_3 = { class: "relative overflow-hidden rounded-xl bg-gradient-to-br from-emerald-700 via-emerald-800 to-teal-900 p-8 text-white shadow-lg" };
const _hoisted_4 = { class: "relative z-10 flex items-start justify-between" };
const _hoisted_5 = { class: "flex items-start space-x-5" };
const _hoisted_6 = { class: "w-20 h-20 rounded-xl overflow-hidden bg-white/10 border border-white/20 flex-shrink-0 shadow-lg" };
const _hoisted_7 = ["src"];
const _hoisted_8 = {
  key: 1,
  class: "w-full h-full flex items-center justify-center"
};
const _hoisted_9 = { class: "text-2xl font-bold tracking-tight leading-tight" };
const _hoisted_10 = { class: "flex items-center space-x-2 text-white/70 mt-1.5 text-xs font-medium" };
const _hoisted_11 = ["disabled"];
const _hoisted_12 = { class: "relative z-10 grid grid-cols-3 gap-4 mt-7" };
const _hoisted_13 = { class: "bg-white/10 backdrop-blur-sm rounded-xl px-5 py-4 border border-white/10" };
const _hoisted_14 = { class: "text-2xl font-bold mt-1" };
const _hoisted_15 = { class: "bg-white/10 backdrop-blur-sm rounded-xl px-5 py-4 border border-white/10" };
const _hoisted_16 = { class: "text-2xl font-bold mt-1" };
const _hoisted_17 = { class: "bg-white/10 backdrop-blur-sm rounded-xl px-5 py-4 border border-white/10" };
const _hoisted_18 = { class: "flex items-end space-x-2 mt-1" };
const _hoisted_19 = { class: "text-2xl font-bold" };
const _hoisted_20 = { class: "flex-1 h-1.5 bg-white/15 rounded-full mb-2 overflow-hidden" };
const _hoisted_21 = { class: "flex items-center space-x-1.5 bg-slate-50 border border-slate-100 p-1.5 rounded-2xl w-max" };
const _hoisted_22 = ["onClick"];
const _hoisted_23 = { class: "bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden" };
const _hoisted_24 = {
  key: 0,
  class: "p-6 space-y-6"
};
const _hoisted_25 = { class: "grid grid-cols-1 md:grid-cols-2 gap-5" };
const _hoisted_26 = { class: "flex items-center space-x-4" };
const _hoisted_27 = { class: "w-14 h-14 rounded-xl border border-gray-200 bg-slate-50 overflow-hidden flex items-center justify-center flex-shrink-0" };
const _hoisted_28 = ["src"];
const _hoisted_29 = { class: "md:col-span-2" };
const _hoisted_30 = { class: "flex items-end space-x-3" };
const _hoisted_31 = { class: "flex-1" };
const _hoisted_32 = { class: "flex-1" };
const _hoisted_33 = { class: "flex items-center space-x-2 flex-shrink-0" };
const _hoisted_34 = {
  key: 1,
  class: "p-6 space-y-3"
};
const _hoisted_35 = { class: "flex items-center space-x-3.5" };
const _hoisted_36 = { class: "relative inline-flex items-center cursor-pointer" };
const _hoisted_37 = ["onUpdate:modelValue"];
const _hoisted_38 = { class: "font-semibold text-sm text-slate-700 w-24" };
const _hoisted_39 = {
  key: 0,
  class: "flex items-center space-x-3"
};
const _hoisted_40 = ["onUpdate:modelValue"];
const _hoisted_41 = ["onUpdate:modelValue"];
const _hoisted_42 = {
  key: 1,
  class: "text-xs font-semibold text-slate-400 bg-slate-100 px-3 py-1 rounded-full uppercase tracking-wider"
};
const _hoisted_43 = {
  key: 2,
  class: "p-6 space-y-6"
};
const _hoisted_44 = { class: "grid grid-cols-2 md:grid-cols-4 gap-3" };
const _hoisted_45 = ["onClick"];
const _hoisted_46 = { class: "font-semibold text-sm" };
const _hoisted_47 = {
  key: 3,
  class: "p-6 space-y-5"
};
const _hoisted_48 = {
  key: 4,
  class: "p-6 space-y-4"
};
const _hoisted_49 = { class: "font-semibold text-sm text-slate-700" };
const _hoisted_50 = { class: "text-xs text-slate-400 mt-0.5" };
const _hoisted_51 = { class: "relative inline-flex items-center cursor-pointer" };
const _hoisted_52 = ["onUpdate:modelValue"];
const _hoisted_53 = { class: "grid grid-cols-1 md:grid-cols-3 gap-4 pt-2" };
const _hoisted_54 = { class: "p-4 bg-slate-50/50 rounded-xl border border-gray-100" };
const _hoisted_55 = { class: "p-4 bg-slate-50/50 rounded-xl border border-gray-100" };
const _hoisted_56 = { class: "p-4 bg-slate-50/50 rounded-xl border border-gray-100" };
const _hoisted_57 = { class: "p-5 bg-emerald-50/50 rounded-xl border border-emerald-100 mt-2" };
const _hoisted_58 = { class: "font-semibold text-sm text-slate-700 mb-4 flex items-center space-x-2" };
const _hoisted_59 = { class: "grid grid-cols-1 md:grid-cols-3 gap-4" };
const _hoisted_60 = {
  key: 2,
  class: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md"
};
const _hoisted_61 = { class: "bg-white rounded-3xl shadow-2xl w-full max-w-2xl overflow-hidden border border-slate-100 flex flex-col max-h-[90vh] md:max-h-[85vh] text-left" };
const _hoisted_62 = { class: "px-6 py-4 bg-gradient-to-r from-emerald-700 to-teal-800 text-white flex items-center justify-between" };
const _hoisted_63 = { class: "flex items-center space-x-2" };
const _hoisted_64 = { class: "p-6 space-y-4 flex-grow flex flex-col min-h-0" };
const _hoisted_65 = { class: "p-4 bg-slate-50 border border-slate-100 rounded-2xl flex flex-wrap items-center justify-between gap-4 text-xs font-semibold text-slate-700 font-outfit" };
const _hoisted_66 = { class: "flex space-x-6" };
const _hoisted_67 = { class: "font-mono text-sm" };
const _hoisted_68 = { class: "font-mono text-sm" };
const _hoisted_69 = { class: "px-6 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-end space-x-3" };
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
      seat_layout_mode: "layout",
      photo: null,
      photo_url: null
    });
    const selectedPhoto = ref(null);
    const photoPreview = ref(null);
    const handlePhotoUpload = (event) => {
      const file = event.target.files[0];
      if (file) {
        selectedPhoto.value = file;
        photoPreview.value = URL.createObjectURL(file);
      }
    };
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
      { value: "basic", label: "Basic Info", icon: Info },
      { value: "hours", label: "Hours", icon: Clock },
      { value: "facilities", label: "Facilities", icon: SquareCheckBig },
      { value: "rules", label: "Rules", icon: FileText },
      { value: "settings", label: "Settings", icon: Settings }
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
    const showMapModal = ref(false);
    const tempLatitude = ref(null);
    const tempLongitude = ref(null);
    let pickerMap = null;
    let pickerMarker = null;
    const loadGoogleMapsScript = () => {
      return new Promise((resolve, reject) => {
        if (typeof google !== "undefined" && google.maps) {
          resolve();
          return;
        }
        const script = document.createElement("script");
        script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&libraries=places`;
        script.async = true;
        script.defer = true;
        script.onload = () => resolve();
        script.onerror = () => reject(new Error("Failed to load Google Maps"));
        document.head.appendChild(script);
      });
    };
    const openMapModal = async () => {
      showMapModal.value = true;
      tempLatitude.value = libraryData.value.latitude || 31.5204;
      tempLongitude.value = libraryData.value.longitude || 74.3587;
      await nextTick();
      setTimeout(() => {
        initializePickerMap();
        if (!libraryData.value.latitude || !libraryData.value.longitude) {
          detectLocationForMap();
        }
      }, 150);
    };
    const closeMapModal = () => {
      showMapModal.value = false;
      pickerMap = null;
      pickerMarker = null;
    };
    const initializePickerMap = async () => {
      try {
        await loadGoogleMapsScript();
      } catch (error) {
        showError("Map Error", "Could not load Google Maps.");
        return;
      }
      const defaultPos = { lat: tempLatitude.value || 31.5204, lng: tempLongitude.value || 74.3587 };
      pickerMap = new google.maps.Map(document.getElementById("picker-map"), {
        center: defaultPos,
        zoom: 15,
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: false
      });
      pickerMarker = new google.maps.Marker({
        position: defaultPos,
        map: pickerMap,
        draggable: true,
        title: "Drag to adjust library location",
        animation: google.maps.Animation.DROP
      });
      const input = document.getElementById("picker-search-input");
      if (input) {
        input.value = "";
        const autocomplete = new google.maps.places.Autocomplete(input, {
          fields: ["geometry", "name", "formatted_address"]
        });
        autocomplete.bindTo("bounds", pickerMap);
        autocomplete.addListener("place_changed", () => {
          const place = autocomplete.getPlace();
          if (!place.geometry || !place.geometry.location) {
            showWarning("Location Not Found", "No details available for: " + place.name);
            return;
          }
          if (place.geometry.viewport) {
            pickerMap.fitBounds(place.geometry.viewport);
          } else {
            pickerMap.setCenter(place.geometry.location);
            pickerMap.setZoom(17);
          }
          pickerMarker.setPosition(place.geometry.location);
          tempLatitude.value = place.geometry.location.lat();
          tempLongitude.value = place.geometry.location.lng();
        });
      }
      pickerMarker.addListener("dragend", () => {
        const pos = pickerMarker.getPosition();
        if (pos) {
          tempLatitude.value = pos.lat();
          tempLongitude.value = pos.lng();
        }
      });
      pickerMap.addListener("click", (event) => {
        const latLng = event.latLng;
        if (latLng) {
          pickerMarker.setPosition(latLng);
          tempLatitude.value = latLng.lat();
          tempLongitude.value = latLng.lng();
        }
      });
    };
    const detectLocationForMap = () => {
      if (!navigator.geolocation) {
        showWarning("Not Supported", "Geolocation is not supported by your browser");
        return;
      }
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lng = position.coords.longitude;
          tempLatitude.value = lat;
          tempLongitude.value = lng;
          if (typeof google !== "undefined" && google.maps && pickerMap && pickerMarker) {
            const newPos = new google.maps.LatLng(lat, lng);
            pickerMap.setCenter(newPos);
            pickerMap.setZoom(16);
            pickerMarker.setPosition(newPos);
          }
          showSuccess("Detected", "Precise coordinates auto-detected successfully!");
        },
        (error) => {
          console.error("Error getting location:", error);
          showError("Location Error", "Unable to retrieve your location.");
        },
        { enableHighAccuracy: true, timeout: 1e4, maximumAge: 0 }
      );
    };
    const confirmMapLocation = () => {
      if (tempLatitude.value !== null && tempLongitude.value !== null) {
        libraryData.value.latitude = tempLatitude.value;
        libraryData.value.longitude = tempLongitude.value;
        showSuccess("Location Selected", `Coordinates set to ${tempLatitude.value.toFixed(5)}, ${tempLongitude.value.toFixed(5)}`);
        closeMapModal();
      }
    };
    const getCurrentLocation = () => {
      if (!navigator.geolocation) {
        showWarning("Not Supported", "Geolocation is not supported by your browser");
        return;
      }
      navigator.geolocation.getCurrentPosition(
        (position) => {
          libraryData.value.latitude = position.coords.latitude;
          libraryData.value.longitude = position.coords.longitude;
          showSuccess("Success", "Coordinates auto-detected successfully!");
        },
        (error) => {
          console.error("Error getting location:", error);
          showError("Location Error", "Unable to retrieve your location. Please enter manually.");
        },
        { enableHighAccuracy: true, timeout: 1e4, maximumAge: 0 }
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
          seat_layout_mode: data.seat_layout_mode || "layout",
          photo: data.photo,
          photo_url: data.photo_url
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
        const formData = new FormData();
        formData.append("name", libraryData.value.name);
        formData.append("address", libraryData.value.address);
        formData.append("capacity", libraryData.value.capacity.toString());
        if (libraryData.value.latitude) formData.append("latitude", libraryData.value.latitude.toString());
        if (libraryData.value.longitude) formData.append("longitude", libraryData.value.longitude.toString());
        formData.append("seat_layout_mode", libraryData.value.seat_layout_mode);
        formData.append("contact_info", JSON.stringify(contactInfo.value));
        formData.append("operating_days", JSON.stringify(operatingDays.value));
        formData.append("facilities", JSON.stringify(facilitiesList.value.filter((f) => f.available).map((f) => f.name)));
        formData.append("rules", JSON.stringify({
          general: rulesText.value.split("\n").filter((r) => r.trim()),
          cancellation: cancellationPolicy.value
        }));
        formData.append("special_features", JSON.stringify({
          additional: specialFeatures.value,
          settings: librarySettings.value
        }));
        if (selectedPhoto.value) {
          formData.append("photo", selectedPhoto.value);
        }
        await librarianAPI.updateLibraryInfo(formData);
        showSuccess("Saved!", "Library information updated successfully");
        selectedPhoto.value = null;
        photoPreview.value = null;
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
      const _component_Armchair = resolveComponent("Armchair");
      return openBlock(), createElementBlock("div", _hoisted_1, [
        loading.value ? (openBlock(), createElementBlock("div", _hoisted_2, [
          createVNode(unref(RefreshCw), { class: "w-10 h-10 text-emerald-600 animate-spin mb-4" }),
          _cache[16] || (_cache[16] = createBaseVNode("p", { class: "text-slate-400 font-semibold uppercase tracking-wider text-xs animate-pulse" }, "Loading library info...", -1))
        ])) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
          createBaseVNode("div", _hoisted_3, [
            _cache[20] || (_cache[20] = createBaseVNode("div", { class: "absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3" }, null, -1)),
            _cache[21] || (_cache[21] = createBaseVNode("div", { class: "absolute bottom-0 left-16 w-40 h-40 bg-white/5 rounded-full translate-y-1/2" }, null, -1)),
            _cache[22] || (_cache[22] = createBaseVNode("div", { class: "absolute top-8 right-32 w-20 h-20 bg-white/5 rounded-full" }, null, -1)),
            createBaseVNode("div", _hoisted_4, [
              createBaseVNode("div", _hoisted_5, [
                createBaseVNode("div", _hoisted_6, [
                  photoPreview.value || libraryData.value.photo_url ? (openBlock(), createElementBlock("img", {
                    key: 0,
                    src: photoPreview.value || libraryData.value.photo_url,
                    class: "w-full h-full object-cover",
                    alt: "Library"
                  }, null, 8, _hoisted_7)) : (openBlock(), createElementBlock("div", _hoisted_8, [
                    createVNode(unref(Building2), { class: "w-8 h-8 text-white/50" })
                  ]))
                ]),
                createBaseVNode("div", null, [
                  createBaseVNode("h2", _hoisted_9, toDisplayString(libraryData.value.name || "Your Library"), 1),
                  createBaseVNode("div", _hoisted_10, [
                    createVNode(unref(MapPin), { class: "w-3.5 h-3.5" }),
                    createBaseVNode("span", null, toDisplayString(libraryData.value.address || "No address set"), 1)
                  ])
                ])
              ]),
              createBaseVNode("button", {
                onClick: saveChanges,
                disabled: saving.value,
                class: "px-5 py-2.5 bg-white/15 hover:bg-white/25 border border-white/20 text-white rounded-xl transition-all flex items-center space-x-2 disabled:opacity-50 text-xs font-semibold cursor-pointer backdrop-blur-sm shadow-sm"
              }, [
                !saving.value ? (openBlock(), createBlock(unref(Save), {
                  key: 0,
                  class: "w-4 h-4"
                })) : (openBlock(), createBlock(unref(RefreshCw), {
                  key: 1,
                  class: "w-4 h-4 animate-spin"
                })),
                createBaseVNode("span", null, toDisplayString(saving.value ? "Saving..." : "Save Changes"), 1)
              ], 8, _hoisted_11)
            ]),
            createBaseVNode("div", _hoisted_12, [
              createBaseVNode("div", _hoisted_13, [
                _cache[17] || (_cache[17] = createBaseVNode("p", { class: "text-white/60 text-[10px] font-semibold uppercase tracking-wider" }, "Total Capacity", -1)),
                createBaseVNode("p", _hoisted_14, toDisplayString(libraryData.value.total_seats || 0), 1)
              ]),
              createBaseVNode("div", _hoisted_15, [
                _cache[18] || (_cache[18] = createBaseVNode("p", { class: "text-white/60 text-[10px] font-semibold uppercase tracking-wider" }, "Current Occupancy", -1)),
                createBaseVNode("p", _hoisted_16, toDisplayString(libraryData.value.current_occupancy || 0), 1)
              ]),
              createBaseVNode("div", _hoisted_17, [
                _cache[19] || (_cache[19] = createBaseVNode("p", { class: "text-white/60 text-[10px] font-semibold uppercase tracking-wider" }, "Occupancy Rate", -1)),
                createBaseVNode("div", _hoisted_18, [
                  createBaseVNode("p", _hoisted_19, toDisplayString(occupancyRate.value) + "%", 1),
                  createBaseVNode("div", _hoisted_20, [
                    createBaseVNode("div", {
                      class: "h-full bg-emerald-300 rounded-full transition-all duration-500",
                      style: normalizeStyle({ width: occupancyRate.value + "%" })
                    }, null, 4)
                  ])
                ])
              ])
            ])
          ]),
          createBaseVNode("div", _hoisted_21, [
            (openBlock(), createElementBlock(Fragment, null, renderList(tabs, (tab) => {
              return createBaseVNode("button", {
                key: tab.value,
                onClick: ($event) => activeTab.value = tab.value,
                class: normalizeClass([
                  "px-4 py-2 text-xs font-semibold rounded-xl transition-all cursor-pointer flex items-center space-x-2",
                  activeTab.value === tab.value ? "bg-white text-emerald-700 shadow-sm border border-slate-200/40" : "text-slate-500 hover:text-slate-700"
                ])
              }, [
                (openBlock(), createBlock(resolveDynamicComponent(tab.icon), { class: "w-3.5 h-3.5" })),
                createBaseVNode("span", null, toDisplayString(tab.label), 1)
              ], 10, _hoisted_22);
            }), 64))
          ]),
          createBaseVNode("div", _hoisted_23, [
            activeTab.value === "basic" ? (openBlock(), createElementBlock("div", _hoisted_24, [
              createBaseVNode("div", _hoisted_25, [
                createBaseVNode("div", null, [
                  _cache[23] || (_cache[23] = createBaseVNode("label", { class: "block text-[10px] font-semibold text-slate-400 mb-1.5 uppercase tracking-wider" }, "Library Name", -1)),
                  withDirectives(createBaseVNode("input", {
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => libraryData.value.name = $event),
                    type: "text",
                    class: "w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-400 transition-all text-sm text-slate-700 font-medium bg-slate-50/50"
                  }, null, 512), [
                    [vModelText, libraryData.value.name]
                  ])
                ]),
                createBaseVNode("div", null, [
                  _cache[24] || (_cache[24] = createBaseVNode("label", { class: "block text-[10px] font-semibold text-slate-400 mb-1.5 uppercase tracking-wider" }, "Library Photo", -1)),
                  createBaseVNode("div", _hoisted_26, [
                    createBaseVNode("div", _hoisted_27, [
                      photoPreview.value || libraryData.value.photo_url ? (openBlock(), createElementBlock("img", {
                        key: 0,
                        src: photoPreview.value || libraryData.value.photo_url,
                        class: "w-full h-full object-cover",
                        alt: "Library preview"
                      }, null, 8, _hoisted_28)) : (openBlock(), createBlock(unref(Building2), {
                        key: 1,
                        class: "w-6 h-6 text-slate-300"
                      }))
                    ]),
                    createBaseVNode("input", {
                      type: "file",
                      onChange: handlePhotoUpload,
                      accept: "image/*",
                      class: "flex-1 text-xs text-slate-500 file:mr-3 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-xs file:font-semibold file:bg-emerald-50 file:text-emerald-700 hover:file:bg-emerald-100 cursor-pointer"
                    }, null, 32)
                  ])
                ]),
                createBaseVNode("div", null, [
                  _cache[25] || (_cache[25] = createBaseVNode("label", { class: "block text-[10px] font-semibold text-slate-400 mb-1.5 uppercase tracking-wider" }, "Contact Number", -1)),
                  withDirectives(createBaseVNode("input", {
                    "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => contactInfo.value.phone = $event),
                    type: "text",
                    class: "w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-400 transition-all text-sm text-slate-700 font-medium bg-slate-50/50"
                  }, null, 512), [
                    [vModelText, contactInfo.value.phone]
                  ])
                ]),
                createBaseVNode("div", null, [
                  _cache[26] || (_cache[26] = createBaseVNode("label", { class: "block text-[10px] font-semibold text-slate-400 mb-1.5 uppercase tracking-wider" }, "Email", -1)),
                  withDirectives(createBaseVNode("input", {
                    "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => contactInfo.value.email = $event),
                    type: "email",
                    class: "w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-400 transition-all text-sm text-slate-700 font-medium bg-slate-50/50"
                  }, null, 512), [
                    [vModelText, contactInfo.value.email]
                  ])
                ]),
                createBaseVNode("div", _hoisted_29, [
                  _cache[27] || (_cache[27] = createBaseVNode("label", { class: "block text-[10px] font-semibold text-slate-400 mb-1.5 uppercase tracking-wider" }, "Address", -1)),
                  withDirectives(createBaseVNode("textarea", {
                    "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => libraryData.value.address = $event),
                    rows: "3",
                    class: "w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-400 transition-all text-sm text-slate-700 font-medium bg-slate-50/50 resize-none"
                  }, null, 512), [
                    [vModelText, libraryData.value.address]
                  ])
                ]),
                createBaseVNode("div", null, [
                  _cache[28] || (_cache[28] = createBaseVNode("label", { class: "block text-[10px] font-semibold text-slate-400 mb-1.5 uppercase tracking-wider" }, "Website", -1)),
                  withDirectives(createBaseVNode("input", {
                    "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => contactInfo.value.website = $event),
                    type: "url",
                    class: "w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-400 transition-all text-sm text-slate-700 font-medium bg-slate-50/50",
                    placeholder: "https://"
                  }, null, 512), [
                    [vModelText, contactInfo.value.website]
                  ])
                ]),
                createBaseVNode("div", _hoisted_30, [
                  createBaseVNode("div", _hoisted_31, [
                    _cache[29] || (_cache[29] = createBaseVNode("label", { class: "block text-[10px] font-semibold text-slate-400 mb-1.5 uppercase tracking-wider" }, "Latitude", -1)),
                    withDirectives(createBaseVNode("input", {
                      "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => libraryData.value.latitude = $event),
                      type: "number",
                      step: "any",
                      class: "w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-400 transition-all text-sm text-slate-700 font-medium bg-slate-50/50",
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
                  createBaseVNode("div", _hoisted_32, [
                    _cache[30] || (_cache[30] = createBaseVNode("label", { class: "block text-[10px] font-semibold text-slate-400 mb-1.5 uppercase tracking-wider" }, "Longitude", -1)),
                    withDirectives(createBaseVNode("input", {
                      "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => libraryData.value.longitude = $event),
                      type: "number",
                      step: "any",
                      class: "w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-400 transition-all text-sm text-slate-700 font-medium bg-slate-50/50",
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
                  createBaseVNode("div", _hoisted_33, [
                    createBaseVNode("button", {
                      type: "button",
                      onClick: getCurrentLocation,
                      class: "px-3 py-2.5 text-emerald-600 hover:bg-emerald-50 rounded-xl font-semibold text-xs flex items-center space-x-1.5 transition-all border border-emerald-100 cursor-pointer"
                    }, [
                      createVNode(unref(Navigation), { class: "w-3.5 h-3.5" }),
                      _cache[31] || (_cache[31] = createBaseVNode("span", null, "Auto-detect", -1))
                    ]),
                    createBaseVNode("button", {
                      type: "button",
                      onClick: openMapModal,
                      class: "px-3 py-2.5 bg-emerald-600 text-white hover:bg-emerald-750 rounded-xl font-semibold text-xs flex items-center space-x-1.5 transition-all shadow-sm cursor-pointer"
                    }, [
                      createVNode(unref(Map), { class: "w-3.5 h-3.5 text-white" }),
                      _cache[32] || (_cache[32] = createBaseVNode("span", null, "Select on Map", -1))
                    ])
                  ])
                ])
              ])
            ])) : createCommentVNode("", true),
            activeTab.value === "hours" ? (openBlock(), createElementBlock("div", _hoisted_34, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(operatingDays.value, (day) => {
                return openBlock(), createElementBlock("div", {
                  key: day.day,
                  class: normalizeClass(["flex items-center justify-between p-4 rounded-xl border border-gray-100 hover:border-emerald-100 transition-all group", day.isOpen ? "bg-white" : "bg-slate-50/50"])
                }, [
                  createBaseVNode("div", _hoisted_35, [
                    createBaseVNode("label", _hoisted_36, [
                      withDirectives(createBaseVNode("input", {
                        type: "checkbox",
                        "onUpdate:modelValue": ($event) => day.isOpen = $event,
                        class: "sr-only peer"
                      }, null, 8, _hoisted_37), [
                        [vModelCheckbox, day.isOpen]
                      ]),
                      _cache[33] || (_cache[33] = createBaseVNode("div", { class: "w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-emerald-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-emerald-600" }, null, -1))
                    ]),
                    createBaseVNode("span", _hoisted_38, toDisplayString(day.day), 1)
                  ]),
                  day.isOpen ? (openBlock(), createElementBlock("div", _hoisted_39, [
                    withDirectives(createBaseVNode("input", {
                      "onUpdate:modelValue": ($event) => day.openTime = $event,
                      type: "time",
                      class: "px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500/20 bg-slate-50/50 text-sm text-slate-700 font-medium"
                    }, null, 8, _hoisted_40), [
                      [vModelText, day.openTime]
                    ]),
                    _cache[34] || (_cache[34] = createBaseVNode("span", { class: "text-slate-300 font-medium text-xs" }, "→", -1)),
                    withDirectives(createBaseVNode("input", {
                      "onUpdate:modelValue": ($event) => day.closeTime = $event,
                      type: "time",
                      class: "px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500/20 bg-slate-50/50 text-sm text-slate-700 font-medium"
                    }, null, 8, _hoisted_41), [
                      [vModelText, day.closeTime]
                    ])
                  ])) : (openBlock(), createElementBlock("span", _hoisted_42, "Closed"))
                ], 2);
              }), 128))
            ])) : createCommentVNode("", true),
            activeTab.value === "facilities" ? (openBlock(), createElementBlock("div", _hoisted_43, [
              createBaseVNode("div", _hoisted_44, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(facilitiesList.value, (facility) => {
                  return openBlock(), createElementBlock("div", {
                    key: facility.id,
                    onClick: ($event) => facility.available = !facility.available,
                    class: normalizeClass([
                      "flex items-center space-x-3 p-4 rounded-xl border-2 cursor-pointer transition-all group",
                      facility.available ? "bg-emerald-50/50 border-emerald-200 text-emerald-700" : "bg-slate-50/50 border-gray-100 text-slate-400 hover:border-gray-200"
                    ])
                  }, [
                    (openBlock(), createBlock(resolveDynamicComponent(facility.icon), {
                      class: normalizeClass(["w-5 h-5 transition-colors", facility.available ? "text-emerald-600" : "text-slate-300"])
                    }, null, 8, ["class"])),
                    createBaseVNode("span", _hoisted_46, toDisplayString(facility.name), 1)
                  ], 10, _hoisted_45);
                }), 128))
              ]),
              createBaseVNode("div", null, [
                _cache[35] || (_cache[35] = createBaseVNode("label", { class: "block text-[10px] font-semibold text-slate-400 mb-1.5 uppercase tracking-wider" }, "Additional Features", -1)),
                withDirectives(createBaseVNode("textarea", {
                  "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => specialFeatures.value = $event),
                  rows: "4",
                  placeholder: "List any additional facilities or amenities...",
                  class: "w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-400 transition-all text-sm text-slate-700 font-medium bg-slate-50/50 resize-none"
                }, null, 512), [
                  [vModelText, specialFeatures.value]
                ])
              ])
            ])) : createCommentVNode("", true),
            activeTab.value === "rules" ? (openBlock(), createElementBlock("div", _hoisted_47, [
              createBaseVNode("div", null, [
                _cache[36] || (_cache[36] = createBaseVNode("label", { class: "block text-[10px] font-semibold text-slate-400 mb-1.5 uppercase tracking-wider" }, "Library Rules (One per line)", -1)),
                withDirectives(createBaseVNode("textarea", {
                  "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => rulesText.value = $event),
                  rows: "8",
                  placeholder: "Enter library rules and regulations...",
                  class: "w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-400 transition-all text-sm text-slate-700 font-medium bg-slate-50/50 font-mono resize-none"
                }, null, 512), [
                  [vModelText, rulesText.value]
                ])
              ]),
              createBaseVNode("div", null, [
                _cache[37] || (_cache[37] = createBaseVNode("label", { class: "block text-[10px] font-semibold text-slate-400 mb-1.5 uppercase tracking-wider" }, "Cancellation Policy", -1)),
                withDirectives(createBaseVNode("textarea", {
                  "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => cancellationPolicy.value = $event),
                  rows: "4",
                  placeholder: "Enter cancellation policy...",
                  class: "w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-400 transition-all text-sm text-slate-700 font-medium bg-slate-50/50 resize-none"
                }, null, 512), [
                  [vModelText, cancellationPolicy.value]
                ])
              ])
            ])) : createCommentVNode("", true),
            activeTab.value === "settings" ? (openBlock(), createElementBlock("div", _hoisted_48, [
              (openBlock(), createElementBlock(Fragment, null, renderList(settingsConfig, (setting) => {
                return createBaseVNode("div", {
                  key: setting.key,
                  class: "flex items-center justify-between p-4 rounded-xl border border-gray-100 hover:border-emerald-100 transition-all"
                }, [
                  createBaseVNode("div", null, [
                    createBaseVNode("h4", _hoisted_49, toDisplayString(setting.label), 1),
                    createBaseVNode("p", _hoisted_50, toDisplayString(setting.description), 1)
                  ]),
                  createBaseVNode("label", _hoisted_51, [
                    withDirectives(createBaseVNode("input", {
                      type: "checkbox",
                      "onUpdate:modelValue": ($event) => librarySettings.value[setting.key] = $event,
                      class: "sr-only peer"
                    }, null, 8, _hoisted_52), [
                      [vModelCheckbox, librarySettings.value[setting.key]]
                    ]),
                    _cache[38] || (_cache[38] = createBaseVNode("div", { class: "w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-emerald-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-600" }, null, -1))
                  ])
                ]);
              }), 64)),
              createBaseVNode("div", _hoisted_53, [
                createBaseVNode("div", _hoisted_54, [
                  _cache[39] || (_cache[39] = createBaseVNode("label", { class: "block text-[10px] font-semibold text-slate-400 mb-1.5 uppercase tracking-wider" }, "Max Booking Duration (hrs)", -1)),
                  withDirectives(createBaseVNode("input", {
                    "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => librarySettings.value.maxBookingDuration = $event),
                    type: "number",
                    min: "1",
                    max: "12",
                    class: "w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 bg-white text-sm text-slate-700 font-medium"
                  }, null, 512), [
                    [
                      vModelText,
                      librarySettings.value.maxBookingDuration,
                      void 0,
                      { number: true }
                    ]
                  ])
                ]),
                createBaseVNode("div", _hoisted_55, [
                  _cache[40] || (_cache[40] = createBaseVNode("label", { class: "block text-[10px] font-semibold text-slate-400 mb-1.5 uppercase tracking-wider" }, "Advance Booking Days", -1)),
                  withDirectives(createBaseVNode("input", {
                    "onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => librarySettings.value.advanceBookingDays = $event),
                    type: "number",
                    min: "1",
                    max: "30",
                    class: "w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 bg-white text-sm text-slate-700 font-medium"
                  }, null, 512), [
                    [
                      vModelText,
                      librarySettings.value.advanceBookingDays,
                      void 0,
                      { number: true }
                    ]
                  ])
                ]),
                createBaseVNode("div", _hoisted_56, [
                  _cache[41] || (_cache[41] = createBaseVNode("label", { class: "block text-[10px] font-semibold text-slate-400 mb-1.5 uppercase tracking-wider" }, "Min Study Minutes for Streak", -1)),
                  withDirectives(createBaseVNode("input", {
                    "onUpdate:modelValue": _cache[12] || (_cache[12] = ($event) => librarySettings.value.minStudyMinutesForStreak = $event),
                    type: "number",
                    min: "0",
                    class: "w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 bg-white text-sm text-slate-700 font-medium",
                    placeholder: "e.g. 60"
                  }, null, 512), [
                    [
                      vModelText,
                      librarySettings.value.minStudyMinutesForStreak,
                      void 0,
                      { number: true }
                    ]
                  ])
                ])
              ]),
              createBaseVNode("div", _hoisted_57, [
                createBaseVNode("h4", _hoisted_58, [
                  createVNode(unref(PanelsTopLeft), { class: "w-4 h-4 text-emerald-600" }),
                  _cache[42] || (_cache[42] = createBaseVNode("span", null, "Seat Layout System Redesign", -1))
                ]),
                createBaseVNode("div", _hoisted_59, [
                  createBaseVNode("div", {
                    onClick: _cache[13] || (_cache[13] = ($event) => libraryData.value.seat_layout_mode = "individual"),
                    class: normalizeClass([
                      "p-4 rounded-xl border-2 cursor-pointer transition-all flex flex-col items-start gap-3 bg-white",
                      libraryData.value.seat_layout_mode === "individual" ? "border-emerald-500 shadow-sm" : "border-slate-150 hover:border-emerald-200"
                    ])
                  }, [
                    createBaseVNode("div", {
                      class: normalizeClass(["p-2.5 rounded-lg", libraryData.value.seat_layout_mode === "individual" ? "bg-emerald-600 text-white" : "bg-slate-100 text-slate-500"])
                    }, [
                      createVNode(_component_Armchair, { class: "w-5 h-5" })
                    ], 2),
                    _cache[43] || (_cache[43] = createBaseVNode("div", null, [
                      createBaseVNode("p", { class: "font-semibold text-sm text-slate-700" }, "Individual Seats"),
                      createBaseVNode("p", { class: "text-[10px] text-slate-400 mt-0.5 leading-relaxed" }, "Classic seat-by-seat layout placed anywhere on floor plan.")
                    ], -1))
                  ], 2),
                  createBaseVNode("div", {
                    onClick: _cache[14] || (_cache[14] = ($event) => libraryData.value.seat_layout_mode = "tables"),
                    class: normalizeClass([
                      "p-4 rounded-xl border-2 cursor-pointer transition-all flex flex-col items-start gap-3 bg-white",
                      libraryData.value.seat_layout_mode === "tables" ? "border-emerald-500 shadow-sm" : "border-slate-150 hover:border-emerald-200"
                    ])
                  }, [
                    createBaseVNode("div", {
                      class: normalizeClass(["p-2.5 rounded-lg", libraryData.value.seat_layout_mode === "tables" ? "bg-emerald-600 text-white" : "bg-slate-100 text-slate-500"])
                    }, [
                      createVNode(unref(Grid3x3), { class: "w-5 h-5" })
                    ], 2),
                    _cache[44] || (_cache[44] = createBaseVNode("div", null, [
                      createBaseVNode("p", { class: "font-semibold text-sm text-slate-700" }, "Study Tables"),
                      createBaseVNode("p", { class: "text-[10px] text-slate-400 mt-0.5 leading-relaxed" }, "Chairs grouped around desks (2/4/6/8-person capacities).")
                    ], -1))
                  ], 2),
                  createBaseVNode("div", {
                    onClick: _cache[15] || (_cache[15] = ($event) => libraryData.value.seat_layout_mode = "cabins"),
                    class: normalizeClass([
                      "p-4 rounded-xl border-2 cursor-pointer transition-all flex flex-col items-start gap-3 bg-white",
                      libraryData.value.seat_layout_mode === "cabins" ? "border-emerald-500 shadow-sm" : "border-slate-150 hover:border-emerald-200"
                    ])
                  }, [
                    createBaseVNode("div", {
                      class: normalizeClass(["p-2.5 rounded-lg", libraryData.value.seat_layout_mode === "cabins" ? "bg-emerald-600 text-white" : "bg-slate-100 text-slate-500"])
                    }, [
                      createVNode(unref(Building2), { class: "w-5 h-5" })
                    ], 2),
                    _cache[45] || (_cache[45] = createBaseVNode("div", null, [
                      createBaseVNode("p", { class: "font-semibold text-sm text-slate-700" }, "Personal Cabins"),
                      createBaseVNode("p", { class: "text-[10px] text-slate-400 mt-0.5 leading-relaxed" }, "Private enclosed study rooms with customizable features.")
                    ], -1))
                  ], 2)
                ])
              ])
            ])) : createCommentVNode("", true)
          ])
        ], 64)),
        showMapModal.value ? (openBlock(), createElementBlock("div", _hoisted_60, [
          createBaseVNode("div", _hoisted_61, [
            createBaseVNode("div", _hoisted_62, [
              createBaseVNode("div", _hoisted_63, [
                createVNode(unref(MapPin), { class: "w-5 h-5 text-emerald-350" }),
                _cache[46] || (_cache[46] = createBaseVNode("h3", { class: "font-bold text-sm uppercase tracking-wider" }, "Select Location on Map", -1))
              ]),
              createBaseVNode("button", {
                onClick: closeMapModal,
                class: "p-1.5 bg-white/10 hover:bg-white/20 rounded-full transition-colors cursor-pointer"
              }, [
                createVNode(unref(X), { class: "w-5 h-5 text-white" })
              ])
            ]),
            createBaseVNode("div", _hoisted_64, [
              _cache[50] || (_cache[50] = createBaseVNode("p", { class: "text-xs text-slate-500 font-medium" }, "Click on the map or drag the marker to pin your library's exact coordinates.", -1)),
              _cache[51] || (_cache[51] = createBaseVNode("div", null, [
                createBaseVNode("input", {
                  id: "picker-search-input",
                  type: "text",
                  placeholder: "Search location or address (e.g. Lahore, Pakistan)...",
                  class: "w-full px-4 py-2.5 border border-gray-250 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all text-xs text-slate-705 font-medium bg-slate-50/50 outline-none"
                })
              ], -1)),
              _cache[52] || (_cache[52] = createBaseVNode("div", { class: "relative w-full h-[350px] bg-slate-50 rounded-2xl overflow-hidden border border-slate-200 shadow-inner" }, [
                createBaseVNode("div", {
                  id: "picker-map",
                  style: { "width": "100%", "height": "100%", "min-height": "350px" }
                })
              ], -1)),
              createBaseVNode("div", _hoisted_65, [
                createBaseVNode("div", _hoisted_66, [
                  createBaseVNode("div", null, [
                    _cache[47] || (_cache[47] = createBaseVNode("span", { class: "text-slate-400 font-medium uppercase tracking-wider block text-[9px] mb-0.5" }, "Latitude", -1)),
                    createBaseVNode("span", _hoisted_67, toDisplayString(tempLatitude.value !== null ? tempLatitude.value.toFixed(6) : "None"), 1)
                  ]),
                  createBaseVNode("div", null, [
                    _cache[48] || (_cache[48] = createBaseVNode("span", { class: "text-slate-400 font-medium uppercase tracking-wider block text-[9px] mb-0.5" }, "Longitude", -1)),
                    createBaseVNode("span", _hoisted_68, toDisplayString(tempLongitude.value !== null ? tempLongitude.value.toFixed(6) : "None"), 1)
                  ])
                ]),
                createBaseVNode("button", {
                  type: "button",
                  onClick: detectLocationForMap,
                  class: "px-3 py-1.5 bg-emerald-50 border border-emerald-200 hover:bg-emerald-100 text-emerald-700 rounded-xl flex items-center space-x-1.5 transition-all text-[11px] cursor-pointer"
                }, [
                  createVNode(unref(Navigation), { class: "w-3.5 h-3.5" }),
                  _cache[49] || (_cache[49] = createBaseVNode("span", null, "My Location", -1))
                ])
              ])
            ]),
            createBaseVNode("div", _hoisted_69, [
              createBaseVNode("button", {
                onClick: closeMapModal,
                class: "px-4 py-2 border border-slate-200 hover:bg-slate-100 text-slate-600 rounded-xl text-xs font-semibold active:scale-98 transition-all cursor-pointer"
              }, " Cancel "),
              createBaseVNode("button", {
                onClick: confirmMapLocation,
                class: "px-5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-semibold active:scale-98 transition-all flex items-center space-x-1.5 shadow-sm shadow-emerald-500/10 cursor-pointer"
              }, [
                createVNode(unref(Save), { class: "w-4 h-4" }),
                _cache[53] || (_cache[53] = createBaseVNode("span", null, "Confirm Location", -1))
              ])
            ])
          ])
        ])) : createCommentVNode("", true)
      ]);
    };
  }
});
const LibraryInfoPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-9898e721"]]);
export {
  LibraryInfoPage as default
};
