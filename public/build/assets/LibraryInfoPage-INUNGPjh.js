import { d as defineComponent, r as ref, c as computed, E as watch, o as onMounted, a as createElementBlock, j as createCommentVNode, f as createVNode, b as createBaseVNode, u as unref, F as Fragment, t as toDisplayString, h as createBlock, q as normalizeStyle, k as renderList, p as withDirectives, v as vModelText, n as normalizeClass, g as resolveComponent, D as vModelSelect, e as createStaticVNode, R as withKeys, z as withModifiers, U as nextTick, O as librarianAPI, m as resolveDynamicComponent, B as vModelCheckbox, i as createTextVNode, l as openBlock } from "./main-C124sHqx.js";
import { u as useSwal } from "./useSwal-pQW_XkRe.js";
import { R as RefreshCw } from "./refresh-cw-BECuebdg.js";
import { B as Building2 } from "./building-2-BBm-7OlJ.js";
import { M as MapPin } from "./map-pin-CvyXaBel.js";
import { S as Save } from "./save-BXCEBoLN.js";
import { W as Wifi } from "./wifi-CbzKV2kI.js";
import { N as Navigation } from "./navigation-Du75y--E.js";
import { c as createLucideIcon } from "./createLucideIcon-8y9GOHiU.js";
import { P as PanelsTopLeft } from "./panels-top-left-BKGcd1JM.js";
import { G as Grid3x3 } from "./grid-3x3-EbjA4gpn.js";
import { S as Search } from "./search-gimRym8C.js";
import { M as MessageSquare } from "./message-square-BdC8VfM3.js";
import { C as ChevronDown } from "./chevron-down-CR7XalXd.js";
import { X } from "./x-eq55W8eI.js";
import { I as Info } from "./info-CWJW-hdl.js";
import { C as Clock } from "./clock-B_R0d3h4.js";
import { F as FileText } from "./file-text-CVv4Q_Ym.js";
import { S as Settings } from "./settings-Cj-t1JB5.js";
import { S as Star } from "./star-BJP58xn-.js";
import { C as Coffee, W as Wind } from "./wind-CouVEZZF.js";
import { P as Printer } from "./printer-DvpO9at_.js";
import { B as BookOpen } from "./book-open-BVgq79sG.js";
import { Z as Zap } from "./zap-BnJNWk3w.js";
import { L as Lock } from "./lock-Ctz1rL0V.js";
import { C as Camera } from "./camera-hJQxo1dD.js";
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
const _hoisted_30 = { class: "relative" };
const _hoisted_31 = { class: "flex items-end space-x-3" };
const _hoisted_32 = { class: "flex-1" };
const _hoisted_33 = { class: "flex-1" };
const _hoisted_34 = { class: "flex items-center space-x-2 flex-shrink-0" };
const _hoisted_35 = {
  key: 1,
  class: "p-6 space-y-3"
};
const _hoisted_36 = { class: "flex items-center space-x-3.5" };
const _hoisted_37 = { class: "relative inline-flex items-center cursor-pointer" };
const _hoisted_38 = ["onUpdate:modelValue"];
const _hoisted_39 = { class: "font-semibold text-sm text-slate-700 w-24" };
const _hoisted_40 = {
  key: 0,
  class: "flex items-center space-x-3"
};
const _hoisted_41 = ["onUpdate:modelValue"];
const _hoisted_42 = ["onUpdate:modelValue"];
const _hoisted_43 = {
  key: 1,
  class: "text-xs font-semibold text-slate-400 bg-slate-100 px-3 py-1 rounded-full uppercase tracking-wider"
};
const _hoisted_44 = {
  key: 2,
  class: "p-6 space-y-6"
};
const _hoisted_45 = { class: "grid grid-cols-2 md:grid-cols-4 gap-3" };
const _hoisted_46 = ["onClick"];
const _hoisted_47 = { class: "font-semibold text-sm" };
const _hoisted_48 = {
  key: 3,
  class: "p-6 space-y-5"
};
const _hoisted_49 = {
  key: 4,
  class: "p-6 space-y-4"
};
const _hoisted_50 = { class: "font-semibold text-sm text-slate-700" };
const _hoisted_51 = { class: "text-xs text-slate-400 mt-0.5" };
const _hoisted_52 = { class: "relative inline-flex items-center cursor-pointer" };
const _hoisted_53 = ["onUpdate:modelValue"];
const _hoisted_54 = { class: "grid grid-cols-1 md:grid-cols-3 gap-4 pt-2" };
const _hoisted_55 = { class: "p-4 bg-slate-50/50 rounded-xl border border-gray-100" };
const _hoisted_56 = { class: "p-4 bg-slate-50/50 rounded-xl border border-gray-100" };
const _hoisted_57 = { class: "p-4 bg-slate-50/50 rounded-xl border border-gray-100" };
const _hoisted_58 = { class: "p-5 bg-emerald-50/50 rounded-xl border border-emerald-100 mt-2" };
const _hoisted_59 = { class: "font-semibold text-sm text-slate-700 mb-4 flex items-center space-x-2" };
const _hoisted_60 = { class: "grid grid-cols-1 md:grid-cols-3 gap-4" };
const _hoisted_61 = {
  key: 5,
  class: "p-6 space-y-6"
};
const _hoisted_62 = { class: "grid grid-cols-1 md:grid-cols-3 gap-6 bg-slate-50/70 p-6 rounded-2xl border border-slate-100" };
const _hoisted_63 = { class: "flex flex-col items-center justify-center p-5 bg-white rounded-xl shadow-sm border border-slate-100 text-center" };
const _hoisted_64 = { class: "text-4xl font-extrabold text-slate-800 tracking-tight" };
const _hoisted_65 = { class: "flex items-center space-x-1 my-2" };
const _hoisted_66 = { class: "text-xs font-semibold text-slate-500 uppercase tracking-wider" };
const _hoisted_67 = { class: "md:col-span-2 space-y-2.5 flex flex-col justify-center" };
const _hoisted_68 = { class: "w-12 font-bold text-slate-600 flex items-center justify-end" };
const _hoisted_69 = { class: "flex-1 h-2.5 bg-slate-200/80 rounded-full overflow-hidden" };
const _hoisted_70 = { class: "w-10 text-right font-semibold text-slate-400" };
const _hoisted_71 = { class: "flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 text-left" };
const _hoisted_72 = { class: "flex items-center space-x-1.5 p-1 bg-slate-100/90 rounded-xl text-xs font-semibold" };
const _hoisted_73 = { class: "flex items-center space-x-2.5 flex-1 max-w-md" };
const _hoisted_74 = { class: "relative flex-1" };
const _hoisted_75 = ["disabled"];
const _hoisted_76 = {
  key: 0,
  class: "flex justify-center py-12"
};
const _hoisted_77 = {
  key: 1,
  class: "text-center py-12 bg-slate-50/50 rounded-2xl border border-dashed border-slate-200"
};
const _hoisted_78 = {
  key: 2,
  class: "space-y-4"
};
const _hoisted_79 = { class: "flex items-start justify-between" };
const _hoisted_80 = { class: "flex items-center space-x-3.5" };
const _hoisted_81 = { class: "w-10 h-10 rounded-full overflow-hidden bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-700 font-bold text-sm flex-shrink-0" };
const _hoisted_82 = ["src"];
const _hoisted_83 = { key: 1 };
const _hoisted_84 = { class: "text-sm font-bold text-slate-800 leading-snug" };
const _hoisted_85 = { class: "flex items-center space-x-2 text-[10px] font-semibold text-slate-400 mt-0.5" };
const _hoisted_86 = {
  key: 0,
  class: "uppercase"
};
const _hoisted_87 = { key: 1 };
const _hoisted_88 = { class: "text-right" };
const _hoisted_89 = { class: "flex items-center space-x-0.5 justify-end" };
const _hoisted_90 = { class: "text-[10px] font-medium text-slate-400 mt-1 block" };
const _hoisted_91 = { class: "text-xs text-slate-600 font-normal leading-relaxed pl-1" };
const _hoisted_92 = {
  key: 0,
  class: "pt-4 text-center"
};
const _hoisted_93 = {
  key: 2,
  class: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md"
};
const _hoisted_94 = { class: "bg-white rounded-3xl shadow-2xl w-full max-w-2xl overflow-hidden border border-slate-100 flex flex-col max-h-[90vh] md:max-h-[85vh] text-left" };
const _hoisted_95 = { class: "px-6 py-4 bg-gradient-to-r from-emerald-700 to-teal-800 text-white flex items-center justify-between" };
const _hoisted_96 = { class: "flex items-center space-x-2" };
const _hoisted_97 = { class: "p-6 space-y-4 flex-grow flex flex-col min-h-0" };
const _hoisted_98 = { class: "relative" };
const _hoisted_99 = { class: "flex items-center gap-2" };
const _hoisted_100 = { class: "relative flex-1" };
const _hoisted_101 = ["onKeydown"];
const _hoisted_102 = ["disabled"];
const _hoisted_103 = {
  key: 0,
  class: "absolute left-0 right-0 top-full mt-1.5 bg-white rounded-2xl shadow-xl border border-slate-100 z-50 overflow-hidden max-h-60 overflow-y-auto text-left"
};
const _hoisted_104 = ["onMousedown"];
const _hoisted_105 = { class: "min-w-0 flex-1" };
const _hoisted_106 = { class: "text-xs font-bold text-slate-800 truncate" };
const _hoisted_107 = { class: "text-[10px] text-slate-400 font-medium truncate mt-0.5" };
const _hoisted_108 = {
  key: 1,
  class: "absolute left-0 right-0 top-full mt-1.5 bg-white p-3 rounded-2xl shadow-md border border-slate-100 z-50 text-center text-xs font-semibold text-slate-400 flex items-center justify-center space-x-2"
};
const _hoisted_109 = { class: "p-4 bg-slate-50 border border-slate-100 rounded-2xl flex flex-wrap items-center justify-between gap-4 text-xs font-semibold text-slate-700 font-outfit" };
const _hoisted_110 = { class: "flex space-x-6" };
const _hoisted_111 = { class: "font-mono text-sm" };
const _hoisted_112 = { class: "font-mono text-sm" };
const _hoisted_113 = { class: "px-6 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-end space-x-3" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "LibraryInfoPage",
  setup(__props) {
    const { showSuccess, showError, showWarning } = useSwal();
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
      wifi_password: "",
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
      { value: "settings", label: "Settings", icon: Settings },
      { value: "reviews", label: "Reviews & Ratings", icon: Star }
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
    const mapSearchQuery = ref("");
    const mapSearchLoading = ref(false);
    const searchResults = ref([]);
    const showSearchDropdown = ref(false);
    const isSearchingDropdown = ref(false);
    let searchDebounceTimer = null;
    let pickerMap = null;
    let pickerMarker = null;
    const onSearchInput = () => {
      if (searchDebounceTimer) clearTimeout(searchDebounceTimer);
      const query = mapSearchQuery.value.trim();
      if (query.length < 2) {
        searchResults.value = [];
        showSearchDropdown.value = false;
        isSearchingDropdown.value = false;
        return;
      }
      isSearchingDropdown.value = true;
      searchDebounceTimer = setTimeout(async () => {
        try {
          const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}&limit=6`);
          const data = await response.json();
          searchResults.value = data || [];
          showSearchDropdown.value = searchResults.value.length > 0;
        } catch (err) {
          console.error("Error fetching location suggestions:", err);
        } finally {
          isSearchingDropdown.value = false;
        }
      }, 300);
    };
    const selectLocationResult = (result) => {
      mapSearchQuery.value = result.display_name;
      showSearchDropdown.value = false;
      searchResults.value = [];
      const lat = parseFloat(result.lat);
      const lng = parseFloat(result.lon);
      tempLatitude.value = lat;
      tempLongitude.value = lng;
      if (pickerMap && pickerMarker) {
        pickerMap.setView([lat, lng], 16);
        pickerMarker.setLatLng([lat, lng]);
      }
    };
    const closeSearchDropdown = () => {
      setTimeout(() => {
        showSearchDropdown.value = false;
      }, 200);
    };
    const loadLeafletScript = () => {
      return new Promise((resolve, reject) => {
        if (typeof L !== "undefined") {
          resolve();
          return;
        }
        if (!document.getElementById("leaflet-css")) {
          const link = document.createElement("link");
          link.id = "leaflet-css";
          link.rel = "stylesheet";
          link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
          document.head.appendChild(link);
        }
        const script = document.createElement("script");
        script.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";
        script.async = true;
        script.onload = () => resolve();
        script.onerror = () => reject(new Error("Failed to load Leaflet map engine"));
        document.head.appendChild(script);
      });
    };
    const executeSearchLocation = async () => {
      const query = mapSearchQuery.value.trim();
      if (!query) {
        showWarning("Search Empty", "Please enter a city or location to search.");
        return;
      }
      mapSearchLoading.value = true;
      try {
        const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}`);
        const data = await response.json();
        if (data && data.length > 0) {
          const lat = parseFloat(data[0].lat);
          const lng = parseFloat(data[0].lon);
          tempLatitude.value = lat;
          tempLongitude.value = lng;
          if (pickerMap && pickerMarker) {
            pickerMap.setView([lat, lng], 16);
            pickerMarker.setLatLng([lat, lng]);
          }
          showSuccess("Location Found", `Map centered on: ${data[0].display_name.split(",")[0]}`);
        } else {
          showWarning("Not Found", `Could not find location for "${query}". Try adding city or country name.`);
        }
      } catch (err) {
        console.error("Geocoding error:", err);
        showError("Search Error", "Failed to search location.");
      } finally {
        mapSearchLoading.value = false;
      }
    };
    const openMapModal = async () => {
      showMapModal.value = true;
      mapSearchQuery.value = "";
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
      if (pickerMap) {
        pickerMap.remove();
        pickerMap = null;
      }
      pickerMarker = null;
    };
    const initializePickerMap = async () => {
      try {
        await loadLeafletScript();
      } catch (error) {
        showError("Map Error", "Could not load interactive map script.");
        return;
      }
      const mapContainer = document.getElementById("picker-map");
      if (!mapContainer) return;
      const initialLat = tempLatitude.value || 31.5204;
      const initialLng = tempLongitude.value || 74.3587;
      if (pickerMap) {
        pickerMap.remove();
        pickerMap = null;
      }
      pickerMap = L.map("picker-map").setView([initialLat, initialLng], 15);
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(pickerMap);
      pickerMarker = L.marker([initialLat, initialLng], {
        draggable: true
      }).addTo(pickerMap);
      pickerMarker.on("dragend", (event) => {
        const position = event.target.getLatLng();
        tempLatitude.value = position.lat;
        tempLongitude.value = position.lng;
      });
      pickerMap.on("click", (event) => {
        const lat = event.latlng.lat;
        const lng = event.latlng.lng;
        pickerMarker.setLatLng([lat, lng]);
        tempLatitude.value = lat;
        tempLongitude.value = lng;
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
          if (pickerMap && pickerMarker) {
            pickerMap.setView([lat, lng], 16);
            pickerMarker.setLatLng([lat, lng]);
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
          wifi_password: data.wifi_password || "",
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
        formData.append("wifi_password", libraryData.value.wifi_password || "");
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
    const reviewsLoading = ref(false);
    const reviewsData = ref({
      average_rating: 0,
      total_reviews: 0,
      rating_breakdown: { "5": 0, "4": 0, "3": 0, "2": 0, "1": 0 },
      reviews: []
    });
    const reviewSearch = ref("");
    const reviewRatingFilter = ref("all");
    const reviewSortMode = ref("newest");
    const visibleReviewCount = ref(3);
    const getStarPercent = (star) => {
      if (!reviewsData.value.total_reviews) return 0;
      const count = reviewsData.value.rating_breakdown[star] || 0;
      return Math.round(count / reviewsData.value.total_reviews * 100);
    };
    const fetchReviews = async () => {
      try {
        reviewsLoading.value = true;
        const res = await librarianAPI.getReviews();
        reviewsData.value = {
          average_rating: res.average_rating || 0,
          total_reviews: res.total_reviews || 0,
          rating_breakdown: res.rating_breakdown || { "5": 0, "4": 0, "3": 0, "2": 0, "1": 0 },
          reviews: res.reviews || []
        };
      } catch (err) {
        console.error("Failed to fetch library reviews:", err);
      } finally {
        reviewsLoading.value = false;
      }
    };
    const filteredReviewsList = computed(() => {
      let list = [...reviewsData.value.reviews || []];
      if (reviewRatingFilter.value !== "all") {
        const targetRating = Number(reviewRatingFilter.value);
        list = list.filter((r) => Number(r.rating) === targetRating);
      }
      if (reviewSearch.value) {
        const q = reviewSearch.value.toLowerCase();
        list = list.filter((r) => {
          const name = r.user?.name?.toLowerCase() || "";
          const crn = r.user?.crn?.toLowerCase() || "";
          const comment = r.comment?.toLowerCase() || "";
          return name.includes(q) || crn.includes(q) || comment.includes(q);
        });
      }
      if (reviewSortMode.value === "popular") {
        list.sort((a, b) => {
          if (b.rating !== a.rating) return b.rating - a.rating;
          return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
        });
      } else if (reviewSortMode.value === "lowest") {
        list.sort((a, b) => {
          if (a.rating !== b.rating) return a.rating - b.rating;
          return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
        });
      } else {
        list.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
      }
      return list;
    });
    const displayedReviewsList = computed(() => {
      return filteredReviewsList.value.slice(0, visibleReviewCount.value);
    });
    const hasMoreReviews = computed(() => {
      return visibleReviewCount.value < filteredReviewsList.value.length;
    });
    watch(activeTab, (newTab) => {
      if (newTab === "reviews") {
        fetchReviews();
      }
    });
    onMounted(() => {
      fetchLibraryInfo();
      fetchReviews();
    });
    return (_ctx, _cache) => {
      const _component_Armchair = resolveComponent("Armchair");
      return openBlock(), createElementBlock("div", _hoisted_1, [
        loading.value ? (openBlock(), createElementBlock("div", _hoisted_2, [
          createVNode(unref(RefreshCw), { class: "w-10 h-10 text-emerald-600 animate-spin mb-4" }),
          _cache[25] || (_cache[25] = createBaseVNode("p", { class: "text-slate-400 font-semibold uppercase tracking-wider text-xs animate-pulse" }, "Loading library info...", -1))
        ])) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
          createBaseVNode("div", _hoisted_3, [
            _cache[29] || (_cache[29] = createBaseVNode("div", { class: "absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3" }, null, -1)),
            _cache[30] || (_cache[30] = createBaseVNode("div", { class: "absolute bottom-0 left-16 w-40 h-40 bg-white/5 rounded-full translate-y-1/2" }, null, -1)),
            _cache[31] || (_cache[31] = createBaseVNode("div", { class: "absolute top-8 right-32 w-20 h-20 bg-white/5 rounded-full" }, null, -1)),
            createBaseVNode("div", _hoisted_4, [
              createBaseVNode("div", _hoisted_5, [
                createBaseVNode("div", _hoisted_6, [
                  photoPreview.value || libraryData.value.photo_url ? (openBlock(), createElementBlock("img", {
                    key: 0,
                    src: photoPreview.value || libraryData.value.photo_url || void 0,
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
                _cache[26] || (_cache[26] = createBaseVNode("p", { class: "text-white/60 text-[10px] font-semibold uppercase tracking-wider" }, "Total Capacity", -1)),
                createBaseVNode("p", _hoisted_14, toDisplayString(libraryData.value.total_seats || 0), 1)
              ]),
              createBaseVNode("div", _hoisted_15, [
                _cache[27] || (_cache[27] = createBaseVNode("p", { class: "text-white/60 text-[10px] font-semibold uppercase tracking-wider" }, "Current Occupancy", -1)),
                createBaseVNode("p", _hoisted_16, toDisplayString(libraryData.value.current_occupancy || 0), 1)
              ]),
              createBaseVNode("div", _hoisted_17, [
                _cache[28] || (_cache[28] = createBaseVNode("p", { class: "text-white/60 text-[10px] font-semibold uppercase tracking-wider" }, "Occupancy Rate", -1)),
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
                  _cache[32] || (_cache[32] = createBaseVNode("label", { class: "block text-[10px] font-semibold text-slate-400 mb-1.5 uppercase tracking-wider" }, "Library Name", -1)),
                  withDirectives(createBaseVNode("input", {
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => libraryData.value.name = $event),
                    type: "text",
                    class: "w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-400 transition-all text-sm text-slate-700 font-medium bg-slate-50/50"
                  }, null, 512), [
                    [vModelText, libraryData.value.name]
                  ])
                ]),
                createBaseVNode("div", null, [
                  _cache[33] || (_cache[33] = createBaseVNode("label", { class: "block text-[10px] font-semibold text-slate-400 mb-1.5 uppercase tracking-wider" }, "Library Photo", -1)),
                  createBaseVNode("div", _hoisted_26, [
                    createBaseVNode("div", _hoisted_27, [
                      photoPreview.value || libraryData.value.photo_url ? (openBlock(), createElementBlock("img", {
                        key: 0,
                        src: photoPreview.value || libraryData.value.photo_url || void 0,
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
                  _cache[34] || (_cache[34] = createBaseVNode("label", { class: "block text-[10px] font-semibold text-slate-400 mb-1.5 uppercase tracking-wider" }, "Contact Number", -1)),
                  withDirectives(createBaseVNode("input", {
                    "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => contactInfo.value.phone = $event),
                    type: "text",
                    class: "w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-400 transition-all text-sm text-slate-700 font-medium bg-slate-50/50"
                  }, null, 512), [
                    [vModelText, contactInfo.value.phone]
                  ])
                ]),
                createBaseVNode("div", null, [
                  _cache[35] || (_cache[35] = createBaseVNode("label", { class: "block text-[10px] font-semibold text-slate-400 mb-1.5 uppercase tracking-wider" }, "Email", -1)),
                  withDirectives(createBaseVNode("input", {
                    "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => contactInfo.value.email = $event),
                    type: "email",
                    class: "w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-400 transition-all text-sm text-slate-700 font-medium bg-slate-50/50"
                  }, null, 512), [
                    [vModelText, contactInfo.value.email]
                  ])
                ]),
                createBaseVNode("div", _hoisted_29, [
                  _cache[36] || (_cache[36] = createBaseVNode("label", { class: "block text-[10px] font-semibold text-slate-400 mb-1.5 uppercase tracking-wider" }, "Address", -1)),
                  withDirectives(createBaseVNode("textarea", {
                    "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => libraryData.value.address = $event),
                    rows: "3",
                    class: "w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-400 transition-all text-sm text-slate-700 font-medium bg-slate-50/50 resize-none"
                  }, null, 512), [
                    [vModelText, libraryData.value.address]
                  ])
                ]),
                createBaseVNode("div", null, [
                  _cache[37] || (_cache[37] = createBaseVNode("label", { class: "block text-[10px] font-semibold text-slate-400 mb-1.5 uppercase tracking-wider" }, "Website", -1)),
                  withDirectives(createBaseVNode("input", {
                    "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => contactInfo.value.website = $event),
                    type: "url",
                    class: "w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-400 transition-all text-sm text-slate-700 font-medium bg-slate-50/50",
                    placeholder: "https://"
                  }, null, 512), [
                    [vModelText, contactInfo.value.website]
                  ])
                ]),
                createBaseVNode("div", null, [
                  _cache[38] || (_cache[38] = createBaseVNode("label", { class: "block text-[10px] font-semibold text-slate-400 mb-1.5 uppercase tracking-wider flex items-center justify-between" }, [
                    createBaseVNode("span", null, "WiFi Password"),
                    createBaseVNode("span", { class: "text-[9px] text-slate-400 font-normal lowercase" }, "(optional)")
                  ], -1)),
                  createBaseVNode("div", _hoisted_30, [
                    withDirectives(createBaseVNode("input", {
                      "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => libraryData.value.wifi_password = $event),
                      type: "text",
                      class: "w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-400 transition-all text-sm text-slate-700 font-medium bg-slate-50/50",
                      placeholder: "e.g. SmartLib@2026"
                    }, null, 512), [
                      [vModelText, libraryData.value.wifi_password]
                    ]),
                    createVNode(unref(Wifi), { class: "w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" })
                  ])
                ]),
                createBaseVNode("div", _hoisted_31, [
                  createBaseVNode("div", _hoisted_32, [
                    _cache[39] || (_cache[39] = createBaseVNode("label", { class: "block text-[10px] font-semibold text-slate-400 mb-1.5 uppercase tracking-wider" }, "Latitude", -1)),
                    withDirectives(createBaseVNode("input", {
                      "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => libraryData.value.latitude = $event),
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
                  createBaseVNode("div", _hoisted_33, [
                    _cache[40] || (_cache[40] = createBaseVNode("label", { class: "block text-[10px] font-semibold text-slate-400 mb-1.5 uppercase tracking-wider" }, "Longitude", -1)),
                    withDirectives(createBaseVNode("input", {
                      "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => libraryData.value.longitude = $event),
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
                  createBaseVNode("div", _hoisted_34, [
                    createBaseVNode("button", {
                      type: "button",
                      onClick: getCurrentLocation,
                      class: "px-3 py-2.5 text-emerald-600 hover:bg-emerald-50 rounded-xl font-semibold text-xs flex items-center space-x-1.5 transition-all border border-emerald-100 cursor-pointer"
                    }, [
                      createVNode(unref(Navigation), { class: "w-3.5 h-3.5" }),
                      _cache[41] || (_cache[41] = createBaseVNode("span", null, "Auto-detect", -1))
                    ]),
                    createBaseVNode("button", {
                      type: "button",
                      onClick: openMapModal,
                      class: "px-3 py-2.5 bg-emerald-600 text-white hover:bg-emerald-750 rounded-xl font-semibold text-xs flex items-center space-x-1.5 transition-all shadow-sm cursor-pointer"
                    }, [
                      createVNode(unref(Map), { class: "w-3.5 h-3.5 text-white" }),
                      _cache[42] || (_cache[42] = createBaseVNode("span", null, "Select on Map", -1))
                    ])
                  ])
                ])
              ])
            ])) : createCommentVNode("", true),
            activeTab.value === "hours" ? (openBlock(), createElementBlock("div", _hoisted_35, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(operatingDays.value, (day) => {
                return openBlock(), createElementBlock("div", {
                  key: day.day,
                  class: normalizeClass(["flex items-center justify-between p-4 rounded-xl border border-gray-100 hover:border-emerald-100 transition-all group", day.isOpen ? "bg-white" : "bg-slate-50/50"])
                }, [
                  createBaseVNode("div", _hoisted_36, [
                    createBaseVNode("label", _hoisted_37, [
                      withDirectives(createBaseVNode("input", {
                        type: "checkbox",
                        "onUpdate:modelValue": ($event) => day.isOpen = $event,
                        class: "sr-only peer"
                      }, null, 8, _hoisted_38), [
                        [vModelCheckbox, day.isOpen]
                      ]),
                      _cache[43] || (_cache[43] = createBaseVNode("div", { class: "w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-emerald-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-emerald-600" }, null, -1))
                    ]),
                    createBaseVNode("span", _hoisted_39, toDisplayString(day.day), 1)
                  ]),
                  day.isOpen ? (openBlock(), createElementBlock("div", _hoisted_40, [
                    withDirectives(createBaseVNode("input", {
                      "onUpdate:modelValue": ($event) => day.openTime = $event,
                      type: "time",
                      class: "px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500/20 bg-slate-50/50 text-sm text-slate-700 font-medium"
                    }, null, 8, _hoisted_41), [
                      [vModelText, day.openTime]
                    ]),
                    _cache[44] || (_cache[44] = createBaseVNode("span", { class: "text-slate-300 font-medium text-xs" }, "→", -1)),
                    withDirectives(createBaseVNode("input", {
                      "onUpdate:modelValue": ($event) => day.closeTime = $event,
                      type: "time",
                      class: "px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500/20 bg-slate-50/50 text-sm text-slate-700 font-medium"
                    }, null, 8, _hoisted_42), [
                      [vModelText, day.closeTime]
                    ])
                  ])) : (openBlock(), createElementBlock("span", _hoisted_43, "Closed"))
                ], 2);
              }), 128))
            ])) : createCommentVNode("", true),
            activeTab.value === "facilities" ? (openBlock(), createElementBlock("div", _hoisted_44, [
              createBaseVNode("div", _hoisted_45, [
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
                    createBaseVNode("span", _hoisted_47, toDisplayString(facility.name), 1)
                  ], 10, _hoisted_46);
                }), 128))
              ]),
              createBaseVNode("div", null, [
                _cache[45] || (_cache[45] = createBaseVNode("label", { class: "block text-[10px] font-semibold text-slate-400 mb-1.5 uppercase tracking-wider" }, "Additional Features", -1)),
                withDirectives(createBaseVNode("textarea", {
                  "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => specialFeatures.value = $event),
                  rows: "4",
                  placeholder: "List any additional facilities or amenities...",
                  class: "w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-400 transition-all text-sm text-slate-700 font-medium bg-slate-50/50 resize-none"
                }, null, 512), [
                  [vModelText, specialFeatures.value]
                ])
              ])
            ])) : createCommentVNode("", true),
            activeTab.value === "rules" ? (openBlock(), createElementBlock("div", _hoisted_48, [
              createBaseVNode("div", null, [
                _cache[46] || (_cache[46] = createBaseVNode("label", { class: "block text-[10px] font-semibold text-slate-400 mb-1.5 uppercase tracking-wider" }, "Library Rules (One per line)", -1)),
                withDirectives(createBaseVNode("textarea", {
                  "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => rulesText.value = $event),
                  rows: "8",
                  placeholder: "Enter library rules and regulations...",
                  class: "w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-400 transition-all text-sm text-slate-700 font-medium bg-slate-50/50 font-mono resize-none"
                }, null, 512), [
                  [vModelText, rulesText.value]
                ])
              ]),
              createBaseVNode("div", null, [
                _cache[47] || (_cache[47] = createBaseVNode("label", { class: "block text-[10px] font-semibold text-slate-400 mb-1.5 uppercase tracking-wider" }, "Cancellation Policy", -1)),
                withDirectives(createBaseVNode("textarea", {
                  "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => cancellationPolicy.value = $event),
                  rows: "4",
                  placeholder: "Enter cancellation policy...",
                  class: "w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-400 transition-all text-sm text-slate-700 font-medium bg-slate-50/50 resize-none"
                }, null, 512), [
                  [vModelText, cancellationPolicy.value]
                ])
              ])
            ])) : createCommentVNode("", true),
            activeTab.value === "settings" ? (openBlock(), createElementBlock("div", _hoisted_49, [
              (openBlock(), createElementBlock(Fragment, null, renderList(settingsConfig, (setting) => {
                return createBaseVNode("div", {
                  key: setting.key,
                  class: "flex items-center justify-between p-4 rounded-xl border border-gray-100 hover:border-emerald-100 transition-all"
                }, [
                  createBaseVNode("div", null, [
                    createBaseVNode("h4", _hoisted_50, toDisplayString(setting.label), 1),
                    createBaseVNode("p", _hoisted_51, toDisplayString(setting.description), 1)
                  ]),
                  createBaseVNode("label", _hoisted_52, [
                    withDirectives(createBaseVNode("input", {
                      type: "checkbox",
                      "onUpdate:modelValue": ($event) => librarySettings.value[setting.key] = $event,
                      class: "sr-only peer"
                    }, null, 8, _hoisted_53), [
                      [vModelCheckbox, librarySettings.value[setting.key]]
                    ]),
                    _cache[48] || (_cache[48] = createBaseVNode("div", { class: "w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-emerald-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-600" }, null, -1))
                  ])
                ]);
              }), 64)),
              createBaseVNode("div", _hoisted_54, [
                createBaseVNode("div", _hoisted_55, [
                  _cache[49] || (_cache[49] = createBaseVNode("label", { class: "block text-[10px] font-semibold text-slate-400 mb-1.5 uppercase tracking-wider" }, "Max Booking Duration (hrs)", -1)),
                  withDirectives(createBaseVNode("input", {
                    "onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => librarySettings.value.maxBookingDuration = $event),
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
                createBaseVNode("div", _hoisted_56, [
                  _cache[50] || (_cache[50] = createBaseVNode("label", { class: "block text-[10px] font-semibold text-slate-400 mb-1.5 uppercase tracking-wider" }, "Advance Booking Days", -1)),
                  withDirectives(createBaseVNode("input", {
                    "onUpdate:modelValue": _cache[12] || (_cache[12] = ($event) => librarySettings.value.advanceBookingDays = $event),
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
                createBaseVNode("div", _hoisted_57, [
                  _cache[51] || (_cache[51] = createBaseVNode("label", { class: "block text-[10px] font-semibold text-slate-400 mb-1.5 uppercase tracking-wider" }, "Min Study Minutes for Streak", -1)),
                  withDirectives(createBaseVNode("input", {
                    "onUpdate:modelValue": _cache[13] || (_cache[13] = ($event) => librarySettings.value.minStudyMinutesForStreak = $event),
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
              createBaseVNode("div", _hoisted_58, [
                createBaseVNode("h4", _hoisted_59, [
                  createVNode(unref(PanelsTopLeft), { class: "w-4 h-4 text-emerald-600" }),
                  _cache[52] || (_cache[52] = createBaseVNode("span", null, "Seat Layout System Redesign", -1))
                ]),
                createBaseVNode("div", _hoisted_60, [
                  createBaseVNode("div", {
                    onClick: _cache[14] || (_cache[14] = ($event) => libraryData.value.seat_layout_mode = "individual"),
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
                    _cache[53] || (_cache[53] = createBaseVNode("div", null, [
                      createBaseVNode("p", { class: "font-semibold text-sm text-slate-700" }, "Individual Seats"),
                      createBaseVNode("p", { class: "text-[10px] text-slate-400 mt-0.5 leading-relaxed" }, "Classic seat-by-seat layout placed anywhere on floor plan.")
                    ], -1))
                  ], 2),
                  createBaseVNode("div", {
                    onClick: _cache[15] || (_cache[15] = ($event) => libraryData.value.seat_layout_mode = "tables"),
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
                    _cache[54] || (_cache[54] = createBaseVNode("div", null, [
                      createBaseVNode("p", { class: "font-semibold text-sm text-slate-700" }, "Study Tables"),
                      createBaseVNode("p", { class: "text-[10px] text-slate-400 mt-0.5 leading-relaxed" }, "Chairs grouped around desks (2/4/6/8-person capacities).")
                    ], -1))
                  ], 2),
                  createBaseVNode("div", {
                    onClick: _cache[16] || (_cache[16] = ($event) => libraryData.value.seat_layout_mode = "cabins"),
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
                    _cache[55] || (_cache[55] = createBaseVNode("div", null, [
                      createBaseVNode("p", { class: "font-semibold text-sm text-slate-700" }, "Personal Cabins"),
                      createBaseVNode("p", { class: "text-[10px] text-slate-400 mt-0.5 leading-relaxed" }, "Private enclosed study rooms with customizable features.")
                    ], -1))
                  ], 2)
                ])
              ])
            ])) : createCommentVNode("", true),
            activeTab.value === "reviews" ? (openBlock(), createElementBlock("div", _hoisted_61, [
              createBaseVNode("div", _hoisted_62, [
                createBaseVNode("div", _hoisted_63, [
                  createBaseVNode("span", _hoisted_64, toDisplayString(reviewsData.value.average_rating || "0.0"), 1),
                  createBaseVNode("div", _hoisted_65, [
                    (openBlock(), createElementBlock(Fragment, null, renderList(5, (star) => {
                      return createVNode(unref(Star), {
                        key: star,
                        class: normalizeClass([
                          "w-5 h-5",
                          star <= Math.round(reviewsData.value.average_rating) ? "fill-amber-400 text-amber-400" : "fill-slate-100 text-slate-200"
                        ])
                      }, null, 8, ["class"]);
                    }), 64))
                  ]),
                  createBaseVNode("p", _hoisted_66, " Based on " + toDisplayString(reviewsData.value.total_reviews) + " student " + toDisplayString(reviewsData.value.total_reviews === 1 ? "review" : "reviews"), 1)
                ]),
                createBaseVNode("div", _hoisted_67, [
                  (openBlock(), createElementBlock(Fragment, null, renderList([5, 4, 3, 2, 1], (star) => {
                    return createBaseVNode("div", {
                      key: star,
                      class: "flex items-center space-x-3 text-xs"
                    }, [
                      createBaseVNode("span", _hoisted_68, [
                        createTextVNode(toDisplayString(star) + " ", 1),
                        createVNode(unref(Star), { class: "w-3.5 h-3.5 fill-amber-400 text-amber-400 ml-1 inline" })
                      ]),
                      createBaseVNode("div", _hoisted_69, [
                        createBaseVNode("div", {
                          class: "h-full bg-emerald-500 rounded-full transition-all duration-500",
                          style: normalizeStyle({ width: getStarPercent(star) + "%" })
                        }, null, 4)
                      ]),
                      createBaseVNode("span", _hoisted_70, toDisplayString(reviewsData.value.rating_breakdown[star] || 0), 1)
                    ]);
                  }), 64))
                ])
              ]),
              createBaseVNode("div", _hoisted_71, [
                createBaseVNode("div", _hoisted_72, [
                  createBaseVNode("button", {
                    onClick: _cache[17] || (_cache[17] = ($event) => {
                      reviewSortMode.value = "newest";
                      visibleReviewCount.value = 3;
                    }),
                    class: normalizeClass([
                      "px-3.5 py-1.5 rounded-lg transition-all cursor-pointer font-bold",
                      reviewSortMode.value === "newest" ? "bg-white text-slate-800 shadow-sm" : "text-slate-500 hover:text-slate-700"
                    ])
                  }, " Newest Reviews ", 2),
                  createBaseVNode("button", {
                    onClick: _cache[18] || (_cache[18] = ($event) => {
                      reviewSortMode.value = "popular";
                      visibleReviewCount.value = 3;
                    }),
                    class: normalizeClass([
                      "px-3.5 py-1.5 rounded-lg transition-all cursor-pointer font-bold",
                      reviewSortMode.value === "popular" ? "bg-white text-emerald-800 shadow-sm" : "text-slate-500 hover:text-slate-700"
                    ])
                  }, " Popular Reviews ", 2),
                  createBaseVNode("button", {
                    onClick: _cache[19] || (_cache[19] = ($event) => {
                      reviewSortMode.value = "lowest";
                      visibleReviewCount.value = 3;
                    }),
                    class: normalizeClass([
                      "px-3.5 py-1.5 rounded-lg transition-all cursor-pointer font-bold",
                      reviewSortMode.value === "lowest" ? "bg-white text-slate-800 shadow-sm" : "text-slate-500 hover:text-slate-700"
                    ])
                  }, " Lowest Rated ", 2)
                ]),
                createBaseVNode("div", _hoisted_73, [
                  createBaseVNode("div", _hoisted_74, [
                    createVNode(unref(Search), { class: "absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" }),
                    withDirectives(createBaseVNode("input", {
                      "onUpdate:modelValue": _cache[20] || (_cache[20] = ($event) => reviewSearch.value = $event),
                      type: "text",
                      placeholder: "Search student reviews...",
                      class: "w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-400"
                    }, null, 512), [
                      [vModelText, reviewSearch.value]
                    ])
                  ]),
                  withDirectives(createBaseVNode("select", {
                    "onUpdate:modelValue": _cache[21] || (_cache[21] = ($event) => reviewRatingFilter.value = $event),
                    class: "px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 cursor-pointer"
                  }, [..._cache[56] || (_cache[56] = [
                    createStaticVNode('<option value="all" data-v-79fe0ffe>All Stars</option><option value="5" data-v-79fe0ffe>5 Stars</option><option value="4" data-v-79fe0ffe>4 Stars</option><option value="3" data-v-79fe0ffe>3 Stars</option><option value="2" data-v-79fe0ffe>2 Stars</option><option value="1" data-v-79fe0ffe>1 Star</option>', 6)
                  ])], 512), [
                    [vModelSelect, reviewRatingFilter.value]
                  ]),
                  createBaseVNode("button", {
                    onClick: fetchReviews,
                    disabled: reviewsLoading.value,
                    class: "p-2 bg-slate-50 border border-slate-200 hover:bg-slate-100 rounded-xl text-slate-600 transition-colors cursor-pointer",
                    title: "Refresh Reviews"
                  }, [
                    createVNode(unref(RefreshCw), {
                      class: normalizeClass(["w-4 h-4", reviewsLoading.value ? "animate-spin" : ""])
                    }, null, 8, ["class"])
                  ], 8, _hoisted_75)
                ])
              ]),
              reviewsLoading.value ? (openBlock(), createElementBlock("div", _hoisted_76, [
                createVNode(unref(RefreshCw), { class: "w-8 h-8 text-emerald-600 animate-spin" })
              ])) : filteredReviewsList.value.length === 0 ? (openBlock(), createElementBlock("div", _hoisted_77, [
                createVNode(unref(MessageSquare), { class: "w-12 h-12 text-slate-300 mx-auto mb-3" }),
                _cache[57] || (_cache[57] = createBaseVNode("p", { class: "text-xs font-bold text-slate-400 uppercase tracking-widest" }, "No student reviews match your selection.", -1))
              ])) : (openBlock(), createElementBlock("div", _hoisted_78, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(displayedReviewsList.value, (review) => {
                  return openBlock(), createElementBlock("div", {
                    key: review.id,
                    class: "p-5 rounded-2xl border border-slate-100 hover:border-emerald-100/80 bg-white shadow-sm transition-all text-left space-y-3"
                  }, [
                    createBaseVNode("div", _hoisted_79, [
                      createBaseVNode("div", _hoisted_80, [
                        createBaseVNode("div", _hoisted_81, [
                          review.user?.profile_picture ? (openBlock(), createElementBlock("img", {
                            key: 0,
                            src: `/storage/${review.user.profile_picture}`,
                            class: "w-full h-full object-cover"
                          }, null, 8, _hoisted_82)) : (openBlock(), createElementBlock("span", _hoisted_83, toDisplayString(review.user?.name ? review.user.name.charAt(0).toUpperCase() : "S"), 1))
                        ]),
                        createBaseVNode("div", null, [
                          createBaseVNode("h4", _hoisted_84, toDisplayString(review.user?.name || "Anonymous Student"), 1),
                          createBaseVNode("div", _hoisted_85, [
                            review.user?.crn ? (openBlock(), createElementBlock("span", _hoisted_86, "CRN: " + toDisplayString(review.user.crn), 1)) : createCommentVNode("", true),
                            review.user?.ca_level ? (openBlock(), createElementBlock("span", _hoisted_87, "• " + toDisplayString(review.user.ca_level), 1)) : createCommentVNode("", true)
                          ])
                        ])
                      ]),
                      createBaseVNode("div", _hoisted_88, [
                        createBaseVNode("div", _hoisted_89, [
                          (openBlock(), createElementBlock(Fragment, null, renderList(5, (s) => {
                            return createVNode(unref(Star), {
                              key: s,
                              class: normalizeClass([
                                "w-4 h-4",
                                s <= review.rating ? "fill-amber-400 text-amber-400" : "fill-slate-100 text-slate-200"
                              ])
                            }, null, 8, ["class"]);
                          }), 64))
                        ]),
                        createBaseVNode("span", _hoisted_90, toDisplayString(new Date(review.created_at).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })), 1)
                      ])
                    ]),
                    createBaseVNode("p", _hoisted_91, toDisplayString(review.comment || "No written comment provided."), 1)
                  ]);
                }), 128)),
                hasMoreReviews.value ? (openBlock(), createElementBlock("div", _hoisted_92, [
                  createBaseVNode("button", {
                    onClick: _cache[22] || (_cache[22] = ($event) => visibleReviewCount.value += 3),
                    class: "px-6 py-2.5 bg-slate-100 hover:bg-emerald-50 text-slate-700 hover:text-emerald-700 font-bold text-xs rounded-xl border border-slate-200 hover:border-emerald-200 transition-all cursor-pointer inline-flex items-center gap-2 shadow-sm"
                  }, [
                    createBaseVNode("span", null, "View More Reviews (" + toDisplayString(filteredReviewsList.value.length - visibleReviewCount.value) + " remaining)", 1),
                    createVNode(unref(ChevronDown), { class: "w-4 h-4" })
                  ])
                ])) : createCommentVNode("", true)
              ]))
            ])) : createCommentVNode("", true)
          ])
        ], 64)),
        showMapModal.value ? (openBlock(), createElementBlock("div", _hoisted_93, [
          createBaseVNode("div", _hoisted_94, [
            createBaseVNode("div", _hoisted_95, [
              createBaseVNode("div", _hoisted_96, [
                createVNode(unref(MapPin), { class: "w-5 h-5 text-emerald-350" }),
                _cache[58] || (_cache[58] = createBaseVNode("h3", { class: "font-bold text-sm uppercase tracking-wider" }, "Select Location on Map", -1))
              ]),
              createBaseVNode("button", {
                onClick: closeMapModal,
                class: "p-1.5 bg-white/10 hover:bg-white/20 rounded-full transition-colors cursor-pointer"
              }, [
                createVNode(unref(X), { class: "w-5 h-5 text-white" })
              ])
            ]),
            createBaseVNode("div", _hoisted_97, [
              _cache[64] || (_cache[64] = createBaseVNode("p", { class: "text-xs text-slate-500 font-medium" }, "Click on the map or drag the marker to pin your library's exact coordinates.", -1)),
              createBaseVNode("div", _hoisted_98, [
                createBaseVNode("div", _hoisted_99, [
                  createBaseVNode("div", _hoisted_100, [
                    withDirectives(createBaseVNode("input", {
                      id: "picker-search-input",
                      "onUpdate:modelValue": _cache[23] || (_cache[23] = ($event) => mapSearchQuery.value = $event),
                      onInput: onSearchInput,
                      onFocus: _cache[24] || (_cache[24] = ($event) => showSearchDropdown.value = searchResults.value.length > 0),
                      onBlur: closeSearchDropdown,
                      onKeydown: withKeys(withModifiers(executeSearchLocation, ["prevent"]), ["enter"]),
                      type: "text",
                      placeholder: "Type city, area, or address (e.g. Lahore, Pakistan)...",
                      class: "w-full pl-9 pr-4 py-2.5 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all text-xs text-slate-700 font-semibold bg-slate-50/50",
                      autocomplete: "off"
                    }, null, 40, _hoisted_101), [
                      [vModelText, mapSearchQuery.value]
                    ]),
                    createVNode(unref(Search), { class: "w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" })
                  ]),
                  createBaseVNode("button", {
                    type: "button",
                    onClick: executeSearchLocation,
                    disabled: mapSearchLoading.value,
                    class: "px-4.5 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl text-xs font-bold transition-all shadow-sm cursor-pointer flex items-center space-x-1.5 shrink-0 disabled:opacity-50"
                  }, [
                    mapSearchLoading.value ? (openBlock(), createBlock(unref(RefreshCw), {
                      key: 0,
                      class: "w-3.5 h-3.5 animate-spin"
                    })) : (openBlock(), createBlock(unref(Search), {
                      key: 1,
                      class: "w-3.5 h-3.5"
                    })),
                    _cache[59] || (_cache[59] = createBaseVNode("span", null, "Search", -1))
                  ], 8, _hoisted_102)
                ]),
                showSearchDropdown.value && searchResults.value.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_103, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(searchResults.value, (result, index) => {
                    return openBlock(), createElementBlock("div", {
                      key: index,
                      onMousedown: withModifiers(($event) => selectLocationResult(result), ["prevent"]),
                      class: "p-3 hover:bg-emerald-50/80 border-b border-slate-50 last:border-none cursor-pointer transition-colors flex items-start space-x-3"
                    }, [
                      createVNode(unref(MapPin), { class: "w-4 h-4 text-emerald-600 shrink-0 mt-0.5" }),
                      createBaseVNode("div", _hoisted_105, [
                        createBaseVNode("div", _hoisted_106, toDisplayString(result.display_name.split(",")[0]), 1),
                        createBaseVNode("div", _hoisted_107, toDisplayString(result.display_name), 1)
                      ])
                    ], 40, _hoisted_104);
                  }), 128))
                ])) : createCommentVNode("", true),
                isSearchingDropdown.value ? (openBlock(), createElementBlock("div", _hoisted_108, [
                  createVNode(unref(RefreshCw), { class: "w-3.5 h-3.5 animate-spin text-emerald-600" }),
                  _cache[60] || (_cache[60] = createBaseVNode("span", null, "Searching matching locations...", -1))
                ])) : createCommentVNode("", true)
              ]),
              _cache[65] || (_cache[65] = createBaseVNode("div", { class: "relative w-full h-[350px] bg-slate-50 rounded-2xl overflow-hidden border border-slate-200 shadow-inner" }, [
                createBaseVNode("div", {
                  id: "picker-map",
                  style: { "width": "100%", "height": "100%", "min-height": "350px" }
                })
              ], -1)),
              createBaseVNode("div", _hoisted_109, [
                createBaseVNode("div", _hoisted_110, [
                  createBaseVNode("div", null, [
                    _cache[61] || (_cache[61] = createBaseVNode("span", { class: "text-slate-400 font-medium uppercase tracking-wider block text-[9px] mb-0.5" }, "Latitude", -1)),
                    createBaseVNode("span", _hoisted_111, toDisplayString(tempLatitude.value !== null ? tempLatitude.value.toFixed(6) : "None"), 1)
                  ]),
                  createBaseVNode("div", null, [
                    _cache[62] || (_cache[62] = createBaseVNode("span", { class: "text-slate-400 font-medium uppercase tracking-wider block text-[9px] mb-0.5" }, "Longitude", -1)),
                    createBaseVNode("span", _hoisted_112, toDisplayString(tempLongitude.value !== null ? tempLongitude.value.toFixed(6) : "None"), 1)
                  ])
                ]),
                createBaseVNode("button", {
                  type: "button",
                  onClick: detectLocationForMap,
                  class: "px-3 py-1.5 bg-emerald-50 border border-emerald-200 hover:bg-emerald-100 text-emerald-700 rounded-xl flex items-center space-x-1.5 transition-all text-[11px] cursor-pointer"
                }, [
                  createVNode(unref(Navigation), { class: "w-3.5 h-3.5" }),
                  _cache[63] || (_cache[63] = createBaseVNode("span", null, "My Location", -1))
                ])
              ])
            ]),
            createBaseVNode("div", _hoisted_113, [
              createBaseVNode("button", {
                onClick: closeMapModal,
                class: "px-4 py-2 border border-slate-200 hover:bg-slate-100 text-slate-600 rounded-xl text-xs font-semibold active:scale-98 transition-all cursor-pointer"
              }, " Cancel "),
              createBaseVNode("button", {
                onClick: confirmMapLocation,
                class: "px-5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-semibold active:scale-98 transition-all flex items-center space-x-1.5 shadow-sm shadow-emerald-500/10 cursor-pointer"
              }, [
                createVNode(unref(Save), { class: "w-4 h-4" }),
                _cache[66] || (_cache[66] = createBaseVNode("span", null, "Confirm Location", -1))
              ])
            ])
          ])
        ])) : createCommentVNode("", true)
      ]);
    };
  }
});
const LibraryInfoPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-79fe0ffe"]]);
export {
  LibraryInfoPage as default
};
