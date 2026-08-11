import { c as createLucideIcon, d as defineComponent, r as ref, o as onMounted, a as computed, b as createElementBlock, e as createBaseVNode, f as createStaticVNode, g as createVNode, n as normalizeClass, w as withCtx, h as resolveComponent, i as createBlock, u as unref, T as Transition, j as createTextVNode, F as Fragment, k as renderList, C as Clock, t as toDisplayString, l as useSettings, m as openBlock, p as createCommentVNode, q as resolveDynamicComponent, s as withDirectives, v as vModelText, x as normalizeStyle, y as vShow, _ as _export_sfc } from "./main-BeUqjoax.js";
import { M as Menu } from "./menu-CJ0CGMU8.js";
import { X } from "./x-Dj9LNodU.js";
import { S as Sparkles } from "./sparkles-CQXw6-8i.js";
import { T as TrendingUp } from "./trending-up-BPT833jM.js";
import { C as CircleAlert } from "./circle-alert-jeFdHGPj.js";
import { G as GraduationCap } from "./graduation-cap-D3FeWUk2.js";
import { S as Search } from "./search-CAjRd0eY.js";
import { M as MapPin } from "./map-pin-hjTU3OTG.js";
import { Q as QrCode } from "./qr-code-F6kRMw8i.js";
import { C as Check } from "./check-CZ9YO2_d.js";
import { S as Shield } from "./shield-YZ2bnaV6.js";
import { B as BookOpen } from "./book-open-DpY8sw2V.js";
import { C as ChevronRight } from "./chevron-right-DeJ1LBg1.js";
import { B as Ban } from "./ban-DQsk2wzx.js";
import { E as EyeOff } from "./eye-off-m5drfbQr.js";
import { U as UserX } from "./user-x-ABG_NlBS.js";
import { A as Award } from "./award-BrUvNM4x.js";
/* empty css               */
const Briefcase = createLucideIcon("briefcase", [
  ["path", { d: "M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16", key: "jecpp" }],
  ["rect", { width: "20", height: "14", x: "2", y: "6", rx: "2", key: "i6l2r4" }]
]);
const ClipboardList = createLucideIcon("clipboard-list", [
  ["rect", { width: "8", height: "4", x: "8", y: "2", rx: "1", ry: "1", key: "tgr4d6" }],
  [
    "path",
    {
      d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",
      key: "116196"
    }
  ],
  ["path", { d: "M12 11h4", key: "1jrz19" }],
  ["path", { d: "M12 16h4", key: "n85exb" }],
  ["path", { d: "M8 11h.01", key: "1dfujw" }],
  ["path", { d: "M8 16h.01", key: "18s6g9" }]
]);
const Facebook = createLucideIcon("facebook", [
  [
    "path",
    { d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z", key: "1jg4f8" }
  ]
]);
const Frown = createLucideIcon("frown", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M16 16s-1.5-2-4-2-4 2-4 2", key: "epbg0q" }],
  ["line", { x1: "9", x2: "9.01", y1: "9", y2: "9", key: "yxxnd0" }],
  ["line", { x1: "15", x2: "15.01", y1: "9", y2: "9", key: "1p4y9e" }]
]);
const Hourglass = createLucideIcon("hourglass", [
  ["path", { d: "M5 22h14", key: "ehvnwv" }],
  ["path", { d: "M5 2h14", key: "pdyrp9" }],
  [
    "path",
    {
      d: "M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22",
      key: "1d314k"
    }
  ],
  [
    "path",
    { d: "M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2", key: "1vvvr6" }
  ]
]);
const Linkedin = createLucideIcon("linkedin", [
  [
    "path",
    {
      d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",
      key: "c2jq9f"
    }
  ],
  ["rect", { width: "4", height: "12", x: "2", y: "9", key: "mk3on5" }],
  ["circle", { cx: "4", cy: "4", r: "2", key: "bt5ra8" }]
]);
const Twitter = createLucideIcon("twitter", [
  [
    "path",
    {
      d: "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",
      key: "pff0z6"
    }
  ]
]);
const heroMobileImg = "/build/assets/smartlib-hero-mobile-CpwxqHbo.jpg";
const _hoisted_1 = { class: "min-h-screen bg-white font-sans antialiased text-slate-800" };
const _hoisted_2 = { class: "h-9 w-9 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-sm group-hover:scale-105 transition-transform" };
const _hoisted_3 = { class: "flex items-center space-x-4" };
const _hoisted_4 = {
  key: 0,
  class: "absolute top-20 left-4 right-4 bg-white border border-slate-200 shadow-xl rounded-2xl p-5 md:hidden flex flex-col space-y-3"
};
const _hoisted_5 = { class: "relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-gradient-to-b from-blue-50/20 via-white to-white" };
const _hoisted_6 = { class: "max-w-7xl mx-auto px-6" };
const _hoisted_7 = { class: "grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center" };
const _hoisted_8 = { class: "lg:col-span-6 flex flex-col items-start text-left" };
const _hoisted_9 = { class: "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 border border-blue-100 text-blue-700 mb-5 shadow-2xs" };
const _hoisted_10 = { class: "flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto" };
const _hoisted_11 = { class: "lg:col-span-6 flex justify-center items-center relative" };
const _hoisted_12 = { class: "relative w-full max-w-lg lg:max-w-xl" };
const _hoisted_13 = { class: "bg-white border border-slate-200/80 shadow-2xl rounded-3xl p-3 sm:p-4 overflow-hidden group" };
const _hoisted_14 = ["src"];
const _hoisted_15 = { class: "absolute -right-3 -bottom-4 bg-white border border-slate-200/80 shadow-xl rounded-2xl p-3 sm:p-3.5 flex items-center space-x-3 animate-bounce-slow" };
const _hoisted_16 = { class: "h-9 w-9 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 border border-blue-100" };
const _hoisted_17 = {
  id: "challenges",
  class: "py-16 md:py-24 bg-slate-50/50 border-b border-slate-200 relative overflow-hidden"
};
const _hoisted_18 = { class: "max-w-7xl mx-auto px-6 text-center relative z-10" };
const _hoisted_19 = { class: "max-w-3xl mx-auto mb-12" };
const _hoisted_20 = { class: "inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold uppercase bg-rose-50 border border-rose-100 text-rose-600 shadow-2xs mb-3" };
const _hoisted_21 = { class: "flex justify-center mb-10" };
const _hoisted_22 = { class: "bg-white border border-slate-200 p-1 rounded-xl flex items-center gap-1 shadow-2xs" };
const _hoisted_23 = {
  key: "students",
  class: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
};
const _hoisted_24 = { class: "bg-white border border-slate-200 rounded-2xl p-5 shadow-2xs hover:shadow-md transition-all text-left flex flex-col justify-between" };
const _hoisted_25 = { class: "flex justify-between items-center mb-4" };
const _hoisted_26 = { class: "h-9 w-9 rounded-xl bg-rose-50 text-rose-500 flex items-center justify-center" };
const _hoisted_27 = { class: "bg-white border border-slate-200 rounded-2xl p-5 shadow-2xs hover:shadow-md transition-all text-left flex flex-col justify-between" };
const _hoisted_28 = { class: "flex justify-between items-center mb-4" };
const _hoisted_29 = { class: "h-9 w-9 rounded-xl bg-rose-50 text-rose-500 flex items-center justify-center" };
const _hoisted_30 = { class: "bg-white border border-slate-200 rounded-2xl p-5 shadow-2xs hover:shadow-md transition-all text-left flex flex-col justify-between" };
const _hoisted_31 = { class: "flex justify-between items-center mb-4" };
const _hoisted_32 = { class: "h-9 w-9 rounded-xl bg-rose-50 text-rose-500 flex items-center justify-center" };
const _hoisted_33 = { class: "bg-white border border-slate-200 rounded-2xl p-5 shadow-2xs hover:shadow-md transition-all text-left flex flex-col justify-between" };
const _hoisted_34 = { class: "flex justify-between items-center mb-4" };
const _hoisted_35 = { class: "h-9 w-9 rounded-xl bg-rose-50 text-rose-500 flex items-center justify-center" };
const _hoisted_36 = {
  key: "librarians",
  class: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
};
const _hoisted_37 = { class: "bg-white border border-slate-200 rounded-2xl p-5 shadow-2xs hover:shadow-md transition-all text-left flex flex-col justify-between" };
const _hoisted_38 = { class: "flex justify-between items-center mb-4" };
const _hoisted_39 = { class: "h-9 w-9 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center" };
const _hoisted_40 = { class: "bg-white border border-slate-200 rounded-2xl p-5 shadow-2xs hover:shadow-md transition-all text-left flex flex-col justify-between" };
const _hoisted_41 = { class: "flex justify-between items-center mb-4" };
const _hoisted_42 = { class: "h-9 w-9 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center" };
const _hoisted_43 = { class: "bg-white border border-slate-200 rounded-2xl p-5 shadow-2xs hover:shadow-md transition-all text-left flex flex-col justify-between" };
const _hoisted_44 = { class: "flex justify-between items-center mb-4" };
const _hoisted_45 = { class: "h-9 w-9 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center" };
const _hoisted_46 = { class: "bg-white border border-slate-200 rounded-2xl p-5 shadow-2xs hover:shadow-md transition-all text-left flex flex-col justify-between" };
const _hoisted_47 = { class: "flex justify-between items-center mb-4" };
const _hoisted_48 = { class: "h-9 w-9 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center" };
const _hoisted_49 = {
  id: "features",
  class: "py-16 md:py-24 bg-slate-50/30 border-b border-slate-200 relative overflow-hidden"
};
const _hoisted_50 = { class: "max-w-7xl mx-auto px-6 relative z-10" };
const _hoisted_51 = { class: "grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch" };
const _hoisted_52 = { class: "lg:col-span-4 flex flex-col gap-2.5 justify-center" };
const _hoisted_53 = ["onClick"];
const _hoisted_54 = { class: "flex-1 min-w-0" };
const _hoisted_55 = { class: "text-[11px] text-slate-500 font-normal block truncate" };
const _hoisted_56 = { class: "lg:col-span-8 flex" };
const _hoisted_57 = { class: "w-full bg-white border border-slate-200 shadow-lg rounded-2xl overflow-hidden flex flex-col justify-between" };
const _hoisted_58 = { class: "md:col-span-7 p-7 sm:p-9 flex flex-col justify-center items-start text-left" };
const _hoisted_59 = { class: "h-10 w-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 mb-5" };
const _hoisted_60 = { class: "text-xl sm:text-2xl font-bold text-slate-800 mb-3 leading-snug" };
const _hoisted_61 = { class: "text-xs text-slate-500 leading-relaxed font-normal mb-5" };
const _hoisted_62 = { class: "space-y-2.5 w-full" };
const _hoisted_63 = { class: "h-4.5 w-4.5 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 flex-shrink-0" };
const _hoisted_64 = { class: "md:col-span-5 bg-gradient-to-br from-slate-50/70 to-slate-100/50 border-t md:border-t-0 md:border-l border-slate-200 flex items-center justify-center p-6 relative overflow-hidden min-h-[280px]" };
const _hoisted_65 = {
  key: 0,
  class: "w-full max-w-[260px]"
};
const _hoisted_66 = { class: "grid grid-cols-4 gap-2" };
const _hoisted_67 = ["onClick", "disabled"];
const _hoisted_68 = {
  key: 0,
  class: "absolute -top-1 -right-1 h-3 w-3 rounded-full bg-green-500 border border-white flex items-center justify-center text-[7px] text-white"
};
const _hoisted_69 = { class: "bg-white border border-slate-200 rounded-lg p-2 text-center mt-4 shadow-2xs" };
const _hoisted_70 = { class: "text-xs font-semibold text-slate-700" };
const _hoisted_71 = {
  key: 1,
  class: "w-full max-w-[260px] bg-white border border-slate-200 rounded-xl p-3.5 shadow-2xs text-left"
};
const _hoisted_72 = { class: "relative mb-3" };
const _hoisted_73 = { class: "space-y-2 max-h-[150px] overflow-y-auto pr-1" };
const _hoisted_74 = { class: "text-xs font-semibold text-slate-800 leading-tight" };
const _hoisted_75 = { class: "text-[10px] text-slate-500 mt-0.5 font-normal" };
const _hoisted_76 = {
  key: 2,
  class: "w-full max-w-[260px] text-left space-y-2.5"
};
const _hoisted_77 = { class: "text-[9px] font-semibold text-blue-600 uppercase tracking-wider bg-blue-50 px-2 py-0.5 rounded border border-blue-100" };
const _hoisted_78 = { class: "text-xs font-bold text-slate-800 mt-1.5" };
const _hoisted_79 = { class: "text-[10px] text-slate-500 mt-0.5 flex items-center gap-1 font-normal" };
const _hoisted_80 = ["onClick"];
const _hoisted_81 = {
  key: 3,
  class: "w-full max-w-[220px] bg-white border border-slate-200 rounded-xl p-4 shadow-2xs text-center relative flex flex-col items-center"
};
const _hoisted_82 = { class: "h-32 w-32 bg-slate-50 border border-slate-200 rounded-lg flex items-center justify-center p-2 relative overflow-hidden shadow-inner" };
const _hoisted_83 = {
  key: 4,
  class: "w-full max-w-[260px] bg-white border border-slate-200 rounded-xl p-3.5 shadow-2xs text-left"
};
const _hoisted_84 = {
  key: 5,
  class: "w-full max-w-[260px] bg-white border border-slate-200 rounded-xl p-3.5 shadow-2xs text-left"
};
const _hoisted_85 = { class: "flex items-center space-x-3 border-b border-slate-100 pb-2.5 mb-2.5" };
const _hoisted_86 = { class: "h-9 w-9 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600" };
const _hoisted_87 = {
  id: "how-it-works",
  class: "py-16 md:py-24 border-t border-slate-200 bg-white"
};
const _hoisted_88 = { class: "max-w-7xl mx-auto px-6" };
const _hoisted_89 = { class: "grid grid-cols-1 md:grid-cols-4 gap-8 relative" };
const _hoisted_90 = { class: "relative flex flex-col items-center text-center group" };
const _hoisted_91 = { class: "h-16 w-16 rounded-2xl bg-blue-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20 mb-5 transform group-hover:scale-105 transition-all" };
const _hoisted_92 = { class: "relative flex flex-col items-center text-center group" };
const _hoisted_93 = { class: "h-16 w-16 rounded-2xl bg-blue-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20 mb-5 transform group-hover:scale-105 transition-all" };
const _hoisted_94 = { class: "relative flex flex-col items-center text-center group" };
const _hoisted_95 = { class: "h-16 w-16 rounded-2xl bg-blue-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20 mb-5 transform group-hover:scale-105 transition-all" };
const _hoisted_96 = { class: "relative flex flex-col items-center text-center group" };
const _hoisted_97 = { class: "h-16 w-16 rounded-2xl bg-blue-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20 mb-5 transform group-hover:scale-105 transition-all" };
const _hoisted_98 = {
  id: "pricing",
  class: "py-16 md:py-24 bg-white border-t border-slate-200"
};
const _hoisted_99 = { class: "max-w-7xl mx-auto px-6 text-center" };
const _hoisted_100 = { class: "flex justify-center items-center space-x-3 mb-12" };
const _hoisted_101 = { class: "grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto items-stretch" };
const _hoisted_102 = { class: "bg-white border border-slate-200 rounded-2xl p-7 shadow-2xs flex flex-col justify-between text-left hover:border-slate-300 transition-all" };
const _hoisted_103 = { class: "space-y-3 border-t border-slate-100 pt-5" };
const _hoisted_104 = { class: "flex items-center space-x-2 text-xs text-slate-600 font-normal" };
const _hoisted_105 = { class: "flex items-center space-x-2 text-xs text-slate-600 font-normal" };
const _hoisted_106 = { class: "flex items-center space-x-2 text-xs text-slate-600 font-normal" };
const _hoisted_107 = { class: "bg-white border-2 border-blue-600 rounded-2xl p-7 shadow-lg shadow-blue-500/5 flex flex-col justify-between text-left relative" };
const _hoisted_108 = { class: "my-5 flex items-baseline" };
const _hoisted_109 = { class: "text-3xl font-bold text-slate-800" };
const _hoisted_110 = { class: "space-y-3 border-t border-slate-100 pt-5" };
const _hoisted_111 = { class: "flex items-center space-x-2 text-xs text-slate-600 font-normal" };
const _hoisted_112 = { class: "flex items-center space-x-2 text-xs text-slate-600 font-normal" };
const _hoisted_113 = { class: "flex items-center space-x-2 text-xs text-slate-600 font-normal" };
const _hoisted_114 = { class: "flex items-center space-x-2 text-xs text-slate-600 font-normal" };
const _hoisted_115 = { class: "bg-white border border-slate-200 rounded-2xl p-7 shadow-2xs flex flex-col justify-between text-left hover:border-slate-300 transition-all" };
const _hoisted_116 = { class: "space-y-3 border-t border-slate-100 pt-5" };
const _hoisted_117 = { class: "flex items-center space-x-2 text-xs text-slate-600 font-normal" };
const _hoisted_118 = { class: "flex items-center space-x-2 text-xs text-slate-600 font-normal" };
const _hoisted_119 = { class: "flex items-center space-x-2 text-xs text-slate-600 font-normal" };
const _hoisted_120 = { class: "flex items-center space-x-2 text-xs text-slate-600 font-normal" };
const _hoisted_121 = ["href"];
const _hoisted_122 = {
  id: "faq",
  class: "py-16 md:py-24 bg-slate-50/50 border-t border-slate-200"
};
const _hoisted_123 = { class: "max-w-4xl mx-auto px-6" };
const _hoisted_124 = { class: "space-y-3" };
const _hoisted_125 = ["onClick"];
const _hoisted_126 = { class: "text-xs sm:text-sm font-semibold text-slate-800" };
const _hoisted_127 = { class: "bg-white border-t border-slate-200 py-12" };
const _hoisted_128 = { class: "max-w-7xl mx-auto px-6" };
const _hoisted_129 = { class: "grid grid-cols-1 md:grid-cols-12 gap-8 border-b border-slate-200 pb-10 mb-10" };
const _hoisted_130 = { class: "md:col-span-4 flex flex-col items-start text-left" };
const _hoisted_131 = { class: "h-9 w-9 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-sm group-hover:scale-105 transition-transform" };
const _hoisted_132 = { class: "text-base font-bold text-slate-900 leading-none tracking-tight" };
const _hoisted_133 = { class: "text-xs text-slate-500 leading-relaxed max-w-sm mb-5 font-normal" };
const _hoisted_134 = { class: "flex items-center space-x-2.5" };
const _hoisted_135 = {
  href: "https://twitter.com",
  target: "_blank",
  class: "h-8 w-8 rounded-lg border border-slate-200 hover:border-blue-500 flex items-center justify-center text-slate-400 hover:text-blue-600 transition-all"
};
const _hoisted_136 = {
  href: "#",
  target: "_blank",
  class: "h-8 w-8 rounded-lg border border-slate-200 hover:border-blue-500 flex items-center justify-center text-slate-400 hover:text-blue-600 transition-all"
};
const _hoisted_137 = {
  href: "https://facebook.com",
  target: "_blank",
  class: "h-8 w-8 rounded-lg border border-slate-200 hover:border-blue-500 flex items-center justify-center text-slate-400 hover:text-blue-600 transition-all"
};
const _hoisted_138 = { class: "md:col-span-3 flex flex-col items-start text-left" };
const _hoisted_139 = { class: "space-y-2.5" };
const _hoisted_140 = { class: "md:col-span-5 flex flex-col items-start text-left" };
const _hoisted_141 = { class: "bg-slate-50 border border-slate-200 rounded-xl p-4 w-full flex items-start space-x-3" };
const _hoisted_142 = { class: "h-9 w-9 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 border border-blue-100 flex-shrink-0" };
const _hoisted_143 = { class: "flex flex-col sm:flex-row justify-between items-center text-slate-400 text-[11px] font-normal" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "LandingPage",
  setup(__props) {
    const { appName, siteDescription, contactEmail } = useSettings();
    const hasScrolled = ref(false);
    onMounted(() => {
      window.addEventListener("scroll", () => {
        hasScrolled.value = window.scrollY > 20;
      });
    });
    const mobileMenuOpen = ref(false);
    const activeChallengeTab = ref("students");
    const isAnnual = ref(true);
    const featuresList = [
      {
        tabTitle: "Seat Booking",
        tabIcon: MapPin,
        title: "Interactive Floor Seat Booking",
        description: "Select your preferred desk directly from the visual floor map. Review available time slots and confirm reservation details instantly.",
        bullets: [
          "Interactive room layout diagrams",
          "Real-time seat availability updates",
          "Automated collision prevention checks"
        ]
      },
      {
        tabTitle: "Digital Catalog",
        tabIcon: Search,
        title: "Unified Book Catalog Access",
        description: "Quickly find books, publications, and study material. Instantly review borrow status and place digital reservations.",
        bullets: [
          "Elastic catalog index search",
          "One-click digital hold requests",
          "Automated checkout confirmation logs"
        ]
      },
      {
        tabTitle: "Events Registration",
        tabIcon: Sparkles,
        title: "Academic & Workshop Registration",
        description: "Register for academic events, peer discussion circles, and study groups directly in the student dashboard.",
        bullets: [
          "Discussion groups registration",
          "Auto calendar invite sync",
          "Certificate of attendance generation"
        ]
      },
      {
        tabTitle: "QR Seat Check-In",
        tabIcon: QrCode,
        title: "QR Code Seat Check-In & Occupancy",
        description: "After reserving a seat, go to your desk and scan the seat QR code. The system instantly checks you in, marks your seat as occupied, and confirms your booking.",
        bullets: [
          "Scan seat QR to confirm occupancy",
          "Automatic reservation validation on check-in",
          "Real-time seat status update for all users"
        ]
      },
      {
        tabTitle: "Analytics Tracker",
        tabIcon: TrendingUp,
        title: "Comprehensive Study Tracker",
        description: "Review your total study duration and library attendance statistics. Improve productivity through insights.",
        bullets: [
          "Weekly/monthly study analytics",
          "Attendance patterns logging",
          "Visual performance progress chart"
        ]
      },
      {
        tabTitle: "Loyalty Rewards",
        tabIcon: Award,
        title: "Earn Academic Rewards Points",
        description: "Log consistent study hours to earn points. Redeem for workspace privileges, reservations boosts or local items.",
        bullets: [
          "Earn points per check-in hour",
          "Redeemable items voucher shop",
          "Level-up milestones system"
        ]
      }
    ];
    const activeFeature = ref(0);
    const scrollToFeature = (idx, event) => {
      if (event) {
        event.preventDefault();
      }
      activeFeature.value = idx;
      const element = document.getElementById("features");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    };
    const mockSeats = ref([
      { id: "1", label: "A1", status: "available" },
      { id: "2", label: "A2", status: "booked" },
      { id: "3", label: "A3", status: "available" },
      { id: "4", label: "A4", status: "available" },
      { id: "5", label: "B1", status: "selected" },
      { id: "6", label: "B2", status: "available" },
      { id: "7", label: "B3", status: "booked" },
      { id: "8", label: "B4", status: "available" }
    ]);
    const toggleMockSeat = (id) => {
      mockSeats.value.forEach((seat) => {
        if (seat.id === id && seat.status !== "booked") {
          seat.status = seat.status === "selected" ? "available" : "selected";
        } else if (seat.status === "selected") {
          seat.status = "available";
        }
      });
    };
    const selectedSeatLabel = computed(() => {
      const s = mockSeats.value.find((seat) => seat.status === "selected");
      return s ? s.label : null;
    });
    const mockSearchQuery = ref("");
    const mockBooks = [
      { title: "Advanced Financial Accounting", author: "ICAP Edition 2025" },
      { title: "Corporate Law & Governance", author: "Legal Press" },
      { title: "Taxation Principles & Practice", author: "Taxation Hub" },
      { title: "Audit & Assurance Standards", author: "Audit Council" }
    ];
    const filteredMockBooks = computed(() => {
      if (!mockSearchQuery.value) return mockBooks;
      return mockBooks.filter(
        (b) => b.title.toLowerCase().includes(mockSearchQuery.value.toLowerCase()) || b.author.toLowerCase().includes(mockSearchQuery.value.toLowerCase())
      );
    });
    const mockEvents = ref([
      { title: "CAF Financial Prep Workshop", category: "Study Circle", time: "Today at 4:00 PM", registered: false },
      { title: "Audit Case Study Seminar", category: "Seminar", time: "Tomorrow at 2:00 PM", registered: true }
    ]);
    const faqList = ref([
      {
        question: "How does the interactive seat booking work?",
        answer: "Students can view live floor maps showing available, reserved, and occupied desks. Simply tap an available seat to lock in your reservation for your chosen shift.",
        open: true
      },
      {
        question: "What is desk QR code check-in?",
        answer: "When you arrive at your reserved desk, open the SmartLib app or terminal scanner and scan the QR code located on the desk. This verifies your presence and prevents ghost bookings.",
        open: false
      },
      {
        question: "How do I search and reserve library books?",
        answer: "The digital catalog allows you to search titles, authors, or subjects. If a book is available, you can place a digital hold and collect it from the librarian desk.",
        open: false
      },
      {
        question: "Can librarians manage attendance and reports automatically?",
        answer: "Yes! SmartLib logs student entrances, check-ins, and study hours automatically, giving librarians real-time attendance dashboards without manual paper registers.",
        open: false
      }
    ]);
    const toggleFaq = (idx) => {
      faqList.value[idx].open = !faqList.value[idx].open;
    };
    return (_ctx, _cache) => {
      const _component_router_link = resolveComponent("router-link");
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("header", {
          class: normalizeClass([
            "fixed left-0 right-0 z-50 transition-all duration-300 flex justify-center px-4",
            hasScrolled.value ? "top-4" : "top-0"
          ])
        }, [
          createBaseVNode("div", {
            class: normalizeClass([
              "w-full transition-all duration-300 flex items-center justify-between",
              hasScrolled.value ? "max-w-5xl bg-white/95 backdrop-blur-md border border-slate-200/80 shadow-lg shadow-slate-100/40 rounded-full px-6 py-3" : "max-w-7xl bg-transparent px-6 py-5"
            ])
          }, [
            createVNode(_component_router_link, {
              to: "/",
              class: "flex items-center space-x-2.5 group"
            }, {
              default: withCtx(() => [
                createBaseVNode("div", _hoisted_2, [
                  createVNode(unref(BookOpen), { class: "h-5 w-5" })
                ]),
                _cache[14] || (_cache[14] = createBaseVNode("div", { class: "flex flex-col" }, [
                  createBaseVNode("span", { class: "text-base font-bold text-slate-900 leading-none tracking-tight" }, "SmartLib"),
                  createBaseVNode("span", { class: "text-[10px] font-semibold text-blue-600 tracking-wider uppercase mt-0.5" }, "Library Hub")
                ], -1))
              ]),
              _: 1
            }),
            _cache[16] || (_cache[16] = createStaticVNode('<nav class="hidden md:flex items-center space-x-8" data-v-f93682f8><a href="#features" class="text-xs sm:text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors" data-v-f93682f8>Features</a><a href="#how-it-works" class="text-xs sm:text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors" data-v-f93682f8>How It Works</a><a href="#pricing" class="text-xs sm:text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors" data-v-f93682f8>Pricing</a><a href="#faq" class="text-xs sm:text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors" data-v-f93682f8>FAQ</a></nav>', 1)),
            createBaseVNode("div", _hoisted_3, [
              createVNode(_component_router_link, {
                to: "/login",
                class: "px-4.5 py-2 rounded-full text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 active:scale-98 shadow-sm hover:shadow-md transition-all"
              }, {
                default: withCtx(() => [..._cache[15] || (_cache[15] = [
                  createTextVNode(" Login ", -1)
                ])]),
                _: 1
              }),
              createBaseVNode("button", {
                onClick: _cache[0] || (_cache[0] = ($event) => mobileMenuOpen.value = !mobileMenuOpen.value),
                class: "md:hidden p-2 rounded-xl text-slate-600 hover:bg-slate-100 transition-colors"
              }, [
                !mobileMenuOpen.value ? (openBlock(), createBlock(unref(Menu), {
                  key: 0,
                  class: "h-5 w-5"
                })) : (openBlock(), createBlock(unref(X), {
                  key: 1,
                  class: "h-5 w-5"
                }))
              ])
            ])
          ], 2),
          createVNode(Transition, { name: "slide-fade" }, {
            default: withCtx(() => [
              mobileMenuOpen.value ? (openBlock(), createElementBlock("div", _hoisted_4, [
                createBaseVNode("a", {
                  onClick: _cache[1] || (_cache[1] = ($event) => mobileMenuOpen.value = false),
                  href: "#features",
                  class: "text-xs font-semibold text-slate-700 py-2 border-b border-slate-100"
                }, "Features"),
                createBaseVNode("a", {
                  onClick: _cache[2] || (_cache[2] = ($event) => mobileMenuOpen.value = false),
                  href: "#how-it-works",
                  class: "text-xs font-semibold text-slate-700 py-2 border-b border-slate-100"
                }, "How It Works"),
                createBaseVNode("a", {
                  onClick: _cache[3] || (_cache[3] = ($event) => mobileMenuOpen.value = false),
                  href: "#pricing",
                  class: "text-xs font-semibold text-slate-700 py-2 border-b border-slate-100"
                }, "Pricing"),
                createBaseVNode("a", {
                  onClick: _cache[4] || (_cache[4] = ($event) => mobileMenuOpen.value = false),
                  href: "#faq",
                  class: "text-xs font-semibold text-slate-700 py-2 border-b border-slate-100"
                }, "FAQ"),
                createVNode(_component_router_link, {
                  to: "/login",
                  onClick: _cache[5] || (_cache[5] = ($event) => mobileMenuOpen.value = false),
                  class: "w-full text-center py-2.5 rounded-xl text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 shadow-sm transition-all"
                }, {
                  default: withCtx(() => [..._cache[17] || (_cache[17] = [
                    createTextVNode(" Login to Account ", -1)
                  ])]),
                  _: 1
                })
              ])) : createCommentVNode("", true)
            ]),
            _: 1
          })
        ], 2),
        createBaseVNode("section", _hoisted_5, [
          createBaseVNode("div", _hoisted_6, [
            createBaseVNode("div", _hoisted_7, [
              createBaseVNode("div", _hoisted_8, [
                createBaseVNode("div", _hoisted_9, [
                  createVNode(unref(Sparkles), { class: "h-3.5 w-3.5" }),
                  _cache[18] || (_cache[18] = createBaseVNode("span", null, "Intelligent Library & Workspace Management", -1))
                ]),
                _cache[21] || (_cache[21] = createBaseVNode("h1", { class: "text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight text-slate-900 mb-5" }, [
                  createTextVNode(" Smart Library"),
                  createBaseVNode("br"),
                  createTextVNode("Management"),
                  createBaseVNode("br"),
                  createBaseVNode("span", { class: "text-blue-600" }, "For Modern Institutions")
                ], -1)),
                _cache[22] || (_cache[22] = createBaseVNode("p", { class: "text-xs sm:text-sm text-slate-600 mb-7 max-w-xl leading-relaxed font-normal" }, " Manage students, books, seat bookings, and borrowing in one clean, intelligent platform. Perfect for schools, colleges, and educational academies. ", -1)),
                createBaseVNode("div", _hoisted_10, [
                  createVNode(_component_router_link, {
                    to: "/register",
                    class: "px-6 py-3 rounded-xl text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 active:scale-98 shadow-md shadow-blue-500/20 hover:shadow-blue-500/35 transition-all text-center flex items-center justify-center gap-2"
                  }, {
                    default: withCtx(() => [
                      _cache[19] || (_cache[19] = createBaseVNode("span", null, "Start Free Today", -1)),
                      createVNode(unref(ChevronRight), { class: "h-4 w-4" })
                    ]),
                    _: 1
                  }),
                  _cache[20] || (_cache[20] = createBaseVNode("a", {
                    href: "#contact",
                    class: "px-6 py-3 rounded-xl text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 active:scale-98 transition-all text-center"
                  }, " Request Demo ", -1))
                ])
              ]),
              createBaseVNode("div", _hoisted_11, [
                _cache[24] || (_cache[24] = createBaseVNode("div", { class: "absolute -inset-4 bg-blue-500/10 rounded-full blur-3xl opacity-70" }, null, -1)),
                createBaseVNode("div", _hoisted_12, [
                  createBaseVNode("div", _hoisted_13, [
                    createBaseVNode("img", {
                      src: unref(heroMobileImg),
                      alt: "SmartLib Dashboard & Mobile Seat Booking Showcase",
                      class: "w-full h-auto rounded-2xl object-cover transform group-hover:scale-[1.01] transition-transform duration-500"
                    }, null, 8, _hoisted_14)
                  ]),
                  createBaseVNode("div", _hoisted_15, [
                    createBaseVNode("div", _hoisted_16, [
                      createVNode(unref(TrendingUp), { class: "h-4.5 w-4.5" })
                    ]),
                    _cache[23] || (_cache[23] = createBaseVNode("div", { class: "text-left" }, [
                      createBaseVNode("p", { class: "text-[10px] font-semibold text-slate-400 uppercase tracking-wider" }, "Live Occupancy"),
                      createBaseVNode("p", { class: "text-sm sm:text-base font-bold text-slate-800 leading-none mt-0.5" }, "94.8% Active")
                    ], -1))
                  ])
                ])
              ])
            ])
          ])
        ]),
        _cache[116] || (_cache[116] = createStaticVNode('<section class="border-y border-slate-200/80 bg-slate-50/50 py-8" data-v-f93682f8><div class="max-w-7xl mx-auto px-6" data-v-f93682f8><div class="grid grid-cols-2 lg:grid-cols-4 gap-6" data-v-f93682f8><div class="text-center group" data-v-f93682f8><h3 class="text-2xl sm:text-3xl font-bold text-blue-600 inline-block" data-v-f93682f8>12,500+</h3><p class="text-xs font-semibold text-slate-500 mt-1 uppercase tracking-wider" data-v-f93682f8>Active Students</p></div><div class="text-center group" data-v-f93682f8><h3 class="text-2xl sm:text-3xl font-bold text-blue-600 inline-block" data-v-f93682f8>24+</h3><p class="text-xs font-semibold text-slate-500 mt-1 uppercase tracking-wider" data-v-f93682f8>Library Locations</p></div><div class="text-center group" data-v-f93682f8><h3 class="text-2xl sm:text-3xl font-bold text-blue-600 inline-block" data-v-f93682f8>45,000+</h3><p class="text-xs font-semibold text-slate-500 mt-1 uppercase tracking-wider" data-v-f93682f8>Total Bookings</p></div><div class="text-center group" data-v-f93682f8><h3 class="text-2xl sm:text-3xl font-bold text-blue-600 inline-block" data-v-f93682f8>98%</h3><p class="text-xs font-semibold text-slate-500 mt-1 uppercase tracking-wider" data-v-f93682f8>Satisfaction Rate</p></div></div></div></section>', 1)),
        createBaseVNode("section", _hoisted_17, [
          createBaseVNode("div", _hoisted_18, [
            createBaseVNode("div", _hoisted_19, [
              createBaseVNode("span", _hoisted_20, [
                createVNode(unref(CircleAlert), { class: "h-3.5 w-3.5" }),
                _cache[25] || (_cache[25] = createBaseVNode("span", null, "The Daily Struggle", -1))
              ]),
              _cache[26] || (_cache[26] = createBaseVNode("h2", { class: "text-2xl sm:text-3xl font-bold text-slate-800 tracking-tight mb-3" }, " The Challenges You Face Everyday ", -1)),
              _cache[27] || (_cache[27] = createBaseVNode("p", { class: "text-xs sm:text-sm text-slate-600 leading-relaxed font-normal" }, " Both students and library administrators lose valuable time dealing with outdated, manual processes that hold everyone back. ", -1))
            ]),
            createBaseVNode("div", _hoisted_21, [
              createBaseVNode("div", _hoisted_22, [
                createBaseVNode("button", {
                  onClick: _cache[6] || (_cache[6] = ($event) => activeChallengeTab.value = "students"),
                  class: normalizeClass([
                    "px-5 py-2 rounded-lg text-xs font-semibold flex items-center gap-2 transition-all select-none",
                    activeChallengeTab.value === "students" ? "bg-rose-50 text-rose-700 border border-rose-200" : "bg-transparent text-slate-600 hover:text-slate-900"
                  ])
                }, [
                  createVNode(unref(GraduationCap), { class: "h-4 w-4" }),
                  _cache[28] || (_cache[28] = createBaseVNode("span", null, "For Students", -1))
                ], 2),
                createBaseVNode("button", {
                  onClick: _cache[7] || (_cache[7] = ($event) => activeChallengeTab.value = "librarians"),
                  class: normalizeClass([
                    "px-5 py-2 rounded-lg text-xs font-semibold flex items-center gap-2 transition-all select-none",
                    activeChallengeTab.value === "librarians" ? "bg-amber-50 text-amber-800 border border-amber-200" : "bg-transparent text-slate-600 hover:text-slate-900"
                  ])
                }, [
                  createVNode(unref(Briefcase), { class: "h-4 w-4" }),
                  _cache[29] || (_cache[29] = createBaseVNode("span", null, "For Librarians", -1))
                ], 2)
              ])
            ]),
            createVNode(Transition, {
              name: "fade-slide-spotlight",
              mode: "out-in"
            }, {
              default: withCtx(() => [
                activeChallengeTab.value === "students" ? (openBlock(), createElementBlock("div", _hoisted_23, [
                  createBaseVNode("div", _hoisted_24, [
                    createBaseVNode("div", null, [
                      createBaseVNode("div", _hoisted_25, [
                        createBaseVNode("div", _hoisted_26, [
                          createVNode(unref(Ban), { class: "h-4.5 w-4.5" })
                        ]),
                        _cache[30] || (_cache[30] = createBaseVNode("span", { class: "text-xs font-semibold text-slate-400" }, "01 / Outdated", -1))
                      ]),
                      _cache[31] || (_cache[31] = createBaseVNode("h4", { class: "text-sm font-bold text-slate-800 mb-1.5" }, "No Available Seats", -1)),
                      _cache[32] || (_cache[32] = createBaseVNode("p", { class: "text-xs text-slate-500 leading-relaxed font-normal mb-5" }, " Arriving at the library only to find every desk occupied. Finding a study spot is a constant gamble. ", -1))
                    ]),
                    _cache[33] || (_cache[33] = createBaseVNode("div", { class: "bg-emerald-50/50 border border-emerald-100 rounded-xl p-3 mt-auto" }, [
                      createBaseVNode("span", { class: "text-[10px] font-semibold uppercase text-emerald-700 bg-emerald-100/60 px-2 py-0.5 rounded inline-block mb-1" }, " SmartLib Fix "),
                      createBaseVNode("p", { class: "text-xs font-medium text-slate-800" }, "Live seat maps & instant desk booking.")
                    ], -1))
                  ]),
                  createBaseVNode("div", _hoisted_27, [
                    createBaseVNode("div", null, [
                      createBaseVNode("div", _hoisted_28, [
                        createBaseVNode("div", _hoisted_29, [
                          createVNode(unref(Hourglass), { class: "h-4.5 w-4.5" })
                        ]),
                        _cache[34] || (_cache[34] = createBaseVNode("span", { class: "text-xs font-semibold text-slate-400" }, "02 / Outdated", -1))
                      ]),
                      _cache[35] || (_cache[35] = createBaseVNode("h4", { class: "text-sm font-bold text-slate-800 mb-1.5" }, "Tedious Manual Check-In", -1)),
                      _cache[36] || (_cache[36] = createBaseVNode("p", { class: "text-xs text-slate-500 leading-relaxed font-normal mb-5" }, " Standing in long lines or writing details in paper logs just to occupy a seat you reserved online. ", -1))
                    ]),
                    _cache[37] || (_cache[37] = createBaseVNode("div", { class: "bg-emerald-50/50 border border-emerald-100 rounded-xl p-3 mt-auto" }, [
                      createBaseVNode("span", { class: "text-[10px] font-semibold uppercase text-emerald-700 bg-emerald-100/60 px-2 py-0.5 rounded inline-block mb-1" }, " SmartLib Fix "),
                      createBaseVNode("p", { class: "text-xs font-medium text-slate-800" }, "Instant QR seat check-in at your desk.")
                    ], -1))
                  ]),
                  createBaseVNode("div", _hoisted_30, [
                    createBaseVNode("div", null, [
                      createBaseVNode("div", _hoisted_31, [
                        createBaseVNode("div", _hoisted_32, [
                          createVNode(unref(Frown), { class: "h-4.5 w-4.5" })
                        ]),
                        _cache[38] || (_cache[38] = createBaseVNode("span", { class: "text-xs font-semibold text-slate-400" }, "03 / Outdated", -1))
                      ]),
                      _cache[39] || (_cache[39] = createBaseVNode("h4", { class: "text-sm font-bold text-slate-800 mb-1.5" }, "Untracked Study Progress", -1)),
                      _cache[40] || (_cache[40] = createBaseVNode("p", { class: "text-xs text-slate-500 leading-relaxed font-normal mb-5" }, " No clear way to log study sessions, analyze peak productivity hours, or stay motivated. ", -1))
                    ]),
                    _cache[41] || (_cache[41] = createBaseVNode("div", { class: "bg-emerald-50/50 border border-emerald-100 rounded-xl p-3 mt-auto" }, [
                      createBaseVNode("span", { class: "text-[10px] font-semibold uppercase text-emerald-700 bg-emerald-100/60 px-2 py-0.5 rounded inline-block mb-1" }, " SmartLib Fix "),
                      createBaseVNode("p", { class: "text-xs font-medium text-slate-800" }, "Visual productivity charts & rewards.")
                    ], -1))
                  ]),
                  createBaseVNode("div", _hoisted_33, [
                    createBaseVNode("div", null, [
                      createBaseVNode("div", _hoisted_34, [
                        createBaseVNode("div", _hoisted_35, [
                          createVNode(unref(BookOpen), { class: "h-4.5 w-4.5" })
                        ]),
                        _cache[42] || (_cache[42] = createBaseVNode("span", { class: "text-xs font-semibold text-slate-400" }, "04 / Outdated", -1))
                      ]),
                      _cache[43] || (_cache[43] = createBaseVNode("h4", { class: "text-sm font-bold text-slate-800 mb-1.5" }, "Scattered Resources", -1)),
                      _cache[44] || (_cache[44] = createBaseVNode("p", { class: "text-xs text-slate-500 leading-relaxed font-normal mb-5" }, " Hunting down textbooks across physical shelves without knowing if they are checked out. ", -1))
                    ]),
                    _cache[45] || (_cache[45] = createBaseVNode("div", { class: "bg-emerald-50/50 border border-emerald-100 rounded-xl p-3 mt-auto" }, [
                      createBaseVNode("span", { class: "text-[10px] font-semibold uppercase text-emerald-700 bg-emerald-100/60 px-2 py-0.5 rounded inline-block mb-1" }, " SmartLib Fix "),
                      createBaseVNode("p", { class: "text-xs font-medium text-slate-800" }, "Integrated digital catalog search.")
                    ], -1))
                  ])
                ])) : activeChallengeTab.value === "librarians" ? (openBlock(), createElementBlock("div", _hoisted_36, [
                  createBaseVNode("div", _hoisted_37, [
                    createBaseVNode("div", null, [
                      createBaseVNode("div", _hoisted_38, [
                        createBaseVNode("div", _hoisted_39, [
                          createVNode(unref(ClipboardList), { class: "h-4.5 w-4.5" })
                        ]),
                        _cache[46] || (_cache[46] = createBaseVNode("span", { class: "text-xs font-semibold text-slate-400" }, "01 / Outdated", -1))
                      ]),
                      _cache[47] || (_cache[47] = createBaseVNode("h4", { class: "text-sm font-bold text-slate-800 mb-1.5" }, "Paper Attendance Logs", -1)),
                      _cache[48] || (_cache[48] = createBaseVNode("p", { class: "text-xs text-slate-500 leading-relaxed font-normal mb-5" }, " Manually recording student entries in paper registers. Messy handwritten records that are hard to audit. ", -1))
                    ]),
                    _cache[49] || (_cache[49] = createBaseVNode("div", { class: "bg-emerald-50/50 border border-emerald-100 rounded-xl p-3 mt-auto" }, [
                      createBaseVNode("span", { class: "text-[10px] font-semibold uppercase text-emerald-700 bg-emerald-100/60 px-2 py-0.5 rounded inline-block mb-1" }, " SmartLib Fix "),
                      createBaseVNode("p", { class: "text-xs font-medium text-slate-800" }, "Automated digital attendance tracking.")
                    ], -1))
                  ]),
                  createBaseVNode("div", _hoisted_40, [
                    createBaseVNode("div", null, [
                      createBaseVNode("div", _hoisted_41, [
                        createBaseVNode("div", _hoisted_42, [
                          createVNode(unref(EyeOff), { class: "h-4.5 w-4.5" })
                        ]),
                        _cache[50] || (_cache[50] = createBaseVNode("span", { class: "text-xs font-semibold text-slate-400" }, "02 / Outdated", -1))
                      ]),
                      _cache[51] || (_cache[51] = createBaseVNode("h4", { class: "text-sm font-bold text-slate-800 mb-1.5" }, "No Real-Time Seat Visibility", -1)),
                      _cache[52] || (_cache[52] = createBaseVNode("p", { class: "text-xs text-slate-500 leading-relaxed font-normal mb-5" }, " Unable to see which seats are occupied or available without physically walking the floor. ", -1))
                    ]),
                    _cache[53] || (_cache[53] = createBaseVNode("div", { class: "bg-emerald-50/50 border border-emerald-100 rounded-xl p-3 mt-auto" }, [
                      createBaseVNode("span", { class: "text-[10px] font-semibold uppercase text-emerald-700 bg-emerald-100/60 px-2 py-0.5 rounded inline-block mb-1" }, " SmartLib Fix "),
                      createBaseVNode("p", { class: "text-xs font-medium text-slate-800" }, "Live occupancy dashboard & analytics.")
                    ], -1))
                  ]),
                  createBaseVNode("div", _hoisted_43, [
                    createBaseVNode("div", null, [
                      createBaseVNode("div", _hoisted_44, [
                        createBaseVNode("div", _hoisted_45, [
                          createVNode(unref(UserX), { class: "h-4.5 w-4.5" })
                        ]),
                        _cache[54] || (_cache[54] = createBaseVNode("span", { class: "text-xs font-semibold text-slate-400" }, "03 / Outdated", -1))
                      ]),
                      _cache[55] || (_cache[55] = createBaseVNode("h4", { class: "text-sm font-bold text-slate-800 mb-1.5" }, "Ghost Reservations", -1)),
                      _cache[56] || (_cache[56] = createBaseVNode("p", { class: "text-xs text-slate-500 leading-relaxed font-normal mb-5" }, " Students reserve seats but never show up, leaving desks blocked while others search. ", -1))
                    ]),
                    _cache[57] || (_cache[57] = createBaseVNode("div", { class: "bg-emerald-50/50 border border-emerald-100 rounded-xl p-3 mt-auto" }, [
                      createBaseVNode("span", { class: "text-[10px] font-semibold uppercase text-emerald-700 bg-emerald-100/60 px-2 py-0.5 rounded inline-block mb-1" }, " SmartLib Fix "),
                      createBaseVNode("p", { class: "text-xs font-medium text-slate-800" }, "Auto-release unchecked-in reservations.")
                    ], -1))
                  ]),
                  createBaseVNode("div", _hoisted_46, [
                    createBaseVNode("div", null, [
                      createBaseVNode("div", _hoisted_47, [
                        createBaseVNode("div", _hoisted_48, [
                          createVNode(unref(Search), { class: "h-4.5 w-4.5" })
                        ]),
                        _cache[58] || (_cache[58] = createBaseVNode("span", { class: "text-xs font-semibold text-slate-400" }, "04 / Outdated", -1))
                      ]),
                      _cache[59] || (_cache[59] = createBaseVNode("h4", { class: "text-sm font-bold text-slate-800 mb-1.5" }, "Manual Catalog Audits", -1)),
                      _cache[60] || (_cache[60] = createBaseVNode("p", { class: "text-xs text-slate-500 leading-relaxed font-normal mb-5" }, " Losing hours cross-checking physical books against borrowing logs to identify missing items. ", -1))
                    ]),
                    _cache[61] || (_cache[61] = createBaseVNode("div", { class: "bg-emerald-50/50 border border-emerald-100 rounded-xl p-3 mt-auto" }, [
                      createBaseVNode("span", { class: "text-[10px] font-semibold uppercase text-emerald-700 bg-emerald-100/60 px-2 py-0.5 rounded inline-block mb-1" }, " SmartLib Fix "),
                      createBaseVNode("p", { class: "text-xs font-medium text-slate-800" }, "Live borrow tracking & overdue alerts.")
                    ], -1))
                  ])
                ])) : createCommentVNode("", true)
              ]),
              _: 1
            })
          ])
        ]),
        createBaseVNode("section", _hoisted_49, [
          createBaseVNode("div", _hoisted_50, [
            _cache[71] || (_cache[71] = createBaseVNode("div", { class: "text-center max-w-3xl mx-auto mb-16" }, [
              createBaseVNode("div", { class: "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase bg-blue-50 border border-blue-100 text-blue-600 mb-3 select-none" }, [
                createBaseVNode("span", null, "Feature Showcase")
              ]),
              createBaseVNode("h2", { class: "text-2xl sm:text-3xl font-bold text-slate-800 tracking-tight mb-3" }, " Everything You Need for Modern Study "),
              createBaseVNode("p", { class: "text-xs sm:text-sm text-slate-600 leading-relaxed font-normal" }, " Interactive floor maps, digitised catalogues, real-time analytics and automatic notifications in a single, lightning-fast platform. ")
            ], -1)),
            createBaseVNode("div", _hoisted_51, [
              createBaseVNode("div", _hoisted_52, [
                (openBlock(), createElementBlock(Fragment, null, renderList(featuresList, (feature, idx) => {
                  return createBaseVNode("button", {
                    key: feature.tabTitle,
                    onClick: ($event) => activeFeature.value = idx,
                    class: normalizeClass([
                      "w-full text-left p-4 rounded-xl border transition-all duration-300 flex items-start gap-3.5 select-none relative overflow-hidden group",
                      activeFeature.value === idx ? "bg-white border-blue-200 shadow-sm" : "bg-white/60 border-slate-200/60 hover:bg-white hover:border-slate-300"
                    ])
                  }, [
                    createBaseVNode("div", {
                      class: normalizeClass([
                        "absolute left-0 top-0 bottom-0 w-1 transition-all duration-300",
                        activeFeature.value === idx ? "bg-blue-600" : "bg-transparent"
                      ])
                    }, null, 2),
                    createBaseVNode("div", {
                      class: normalizeClass([
                        "h-9 w-9 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors border",
                        activeFeature.value === idx ? "bg-blue-50 border-blue-100 text-blue-600" : "bg-slate-50 border-slate-100 text-slate-400 group-hover:text-slate-600"
                      ])
                    }, [
                      (openBlock(), createBlock(resolveDynamicComponent(feature.tabIcon), { class: "h-4.5 w-4.5" }))
                    ], 2),
                    createBaseVNode("div", _hoisted_54, [
                      createBaseVNode("span", {
                        class: normalizeClass([
                          "text-xs font-bold transition-colors block mb-0.5",
                          activeFeature.value === idx ? "text-blue-600" : "text-slate-700"
                        ])
                      }, toDisplayString(feature.tabTitle), 3),
                      createBaseVNode("span", _hoisted_55, toDisplayString(feature.description), 1)
                    ])
                  ], 10, _hoisted_53);
                }), 64))
              ]),
              createBaseVNode("div", _hoisted_56, [
                createBaseVNode("div", _hoisted_57, [
                  createVNode(Transition, {
                    name: "fade-slide-spotlight",
                    mode: "out-in"
                  }, {
                    default: withCtx(() => [
                      (openBlock(), createElementBlock("div", {
                        key: activeFeature.value,
                        class: "grid grid-cols-1 md:grid-cols-12 items-stretch h-full"
                      }, [
                        createBaseVNode("div", _hoisted_58, [
                          createBaseVNode("div", _hoisted_59, [
                            (openBlock(), createBlock(resolveDynamicComponent(featuresList[activeFeature.value].tabIcon), { class: "h-5 w-5" }))
                          ]),
                          createBaseVNode("h3", _hoisted_60, toDisplayString(featuresList[activeFeature.value].title), 1),
                          createBaseVNode("p", _hoisted_61, toDisplayString(featuresList[activeFeature.value].description), 1),
                          createBaseVNode("ul", _hoisted_62, [
                            (openBlock(true), createElementBlock(Fragment, null, renderList(featuresList[activeFeature.value].bullets, (bullet) => {
                              return openBlock(), createElementBlock("li", {
                                key: bullet,
                                class: "flex items-center space-x-2.5 text-slate-700 text-xs font-medium"
                              }, [
                                createBaseVNode("div", _hoisted_63, [
                                  createVNode(unref(Check), { class: "h-3 w-3" })
                                ]),
                                createBaseVNode("span", null, toDisplayString(bullet), 1)
                              ]);
                            }), 128))
                          ])
                        ]),
                        createBaseVNode("div", _hoisted_64, [
                          activeFeature.value === 0 ? (openBlock(), createElementBlock("div", _hoisted_65, [
                            _cache[62] || (_cache[62] = createBaseVNode("p", { class: "text-[10px] font-semibold text-slate-400 uppercase tracking-wider text-center mb-3" }, "Click to Reserve a desk", -1)),
                            createBaseVNode("div", _hoisted_66, [
                              (openBlock(true), createElementBlock(Fragment, null, renderList(mockSeats.value, (seat) => {
                                return openBlock(), createElementBlock("button", {
                                  key: seat.id,
                                  onClick: ($event) => toggleMockSeat(seat.id),
                                  class: normalizeClass([
                                    "aspect-square rounded-lg border flex flex-col items-center justify-center text-xs font-semibold transition-all relative",
                                    seat.status === "booked" ? "bg-slate-200 border-slate-300 text-slate-400 cursor-not-allowed" : seat.status === "selected" ? "bg-blue-600 border-blue-600 text-white scale-105 shadow-sm" : "bg-white border-slate-200 text-slate-700 hover:border-blue-400 hover:bg-blue-50/20"
                                  ]),
                                  disabled: seat.status === "booked"
                                }, [
                                  createBaseVNode("span", null, toDisplayString(seat.label), 1),
                                  seat.status === "selected" ? (openBlock(), createElementBlock("div", _hoisted_68, "✓")) : createCommentVNode("", true)
                                ], 10, _hoisted_67);
                              }), 128))
                            ]),
                            createBaseVNode("div", _hoisted_69, [
                              createBaseVNode("p", _hoisted_70, toDisplayString(selectedSeatLabel.value ? `Selected: ${selectedSeatLabel.value}` : "Choose an empty seat"), 1)
                            ])
                          ])) : createCommentVNode("", true),
                          activeFeature.value === 1 ? (openBlock(), createElementBlock("div", _hoisted_71, [
                            createBaseVNode("div", _hoisted_72, [
                              withDirectives(createBaseVNode("input", {
                                type: "text",
                                "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => mockSearchQuery.value = $event),
                                placeholder: "Search books...",
                                class: "w-full pl-8 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-blue-500 font-normal"
                              }, null, 512), [
                                [vModelText, mockSearchQuery.value]
                              ]),
                              createVNode(unref(Search), { class: "h-3.5 w-3.5 text-slate-400 absolute left-2.5 top-2" })
                            ]),
                            createBaseVNode("div", _hoisted_73, [
                              (openBlock(true), createElementBlock(Fragment, null, renderList(filteredMockBooks.value, (book) => {
                                return openBlock(), createElementBlock("div", {
                                  key: book.title,
                                  class: "flex items-center justify-between p-2 rounded-lg bg-slate-50 border border-slate-100"
                                }, [
                                  createBaseVNode("div", null, [
                                    createBaseVNode("h4", _hoisted_74, toDisplayString(book.title), 1),
                                    createBaseVNode("p", _hoisted_75, toDisplayString(book.author), 1)
                                  ]),
                                  _cache[63] || (_cache[63] = createBaseVNode("span", { class: "text-[9px] font-semibold bg-blue-50 text-blue-600 border border-blue-200 px-2 py-0.5 rounded-md" }, "Available", -1))
                                ]);
                              }), 128))
                            ])
                          ])) : createCommentVNode("", true),
                          activeFeature.value === 2 ? (openBlock(), createElementBlock("div", _hoisted_76, [
                            (openBlock(true), createElementBlock(Fragment, null, renderList(mockEvents.value, (ev) => {
                              return openBlock(), createElementBlock("div", {
                                key: ev.title,
                                class: "bg-white border border-slate-200 rounded-xl p-3 shadow-2xs flex items-center justify-between"
                              }, [
                                createBaseVNode("div", null, [
                                  createBaseVNode("span", _hoisted_77, toDisplayString(ev.category), 1),
                                  createBaseVNode("h4", _hoisted_78, toDisplayString(ev.title), 1),
                                  createBaseVNode("p", _hoisted_79, [
                                    createVNode(unref(Clock), { class: "h-3 w-3 text-slate-400" }),
                                    createBaseVNode("span", null, toDisplayString(ev.time), 1)
                                  ])
                                ]),
                                createBaseVNode("button", {
                                  onClick: ($event) => ev.registered = !ev.registered,
                                  class: normalizeClass([
                                    "px-2.5 py-1 rounded-md text-[10px] font-semibold transition-all",
                                    ev.registered ? "bg-emerald-50 border border-emerald-200 text-emerald-600" : "bg-blue-600 text-white hover:bg-blue-700"
                                  ])
                                }, toDisplayString(ev.registered ? "Registered" : "Join"), 11, _hoisted_80)
                              ]);
                            }), 128))
                          ])) : createCommentVNode("", true),
                          activeFeature.value === 3 ? (openBlock(), createElementBlock("div", _hoisted_81, [
                            createBaseVNode("div", _hoisted_82, [
                              createVNode(unref(QrCode), { class: "h-24 w-24 text-slate-800" }),
                              _cache[64] || (_cache[64] = createBaseVNode("div", { class: "absolute left-0 right-0 h-0.5 bg-blue-500 animate-scan shadow-md shadow-blue-500/80" }, null, -1))
                            ]),
                            _cache[65] || (_cache[65] = createBaseVNode("p", { class: "text-xs font-bold text-slate-800 mt-3" }, "Desk QR Scanner", -1)),
                            _cache[66] || (_cache[66] = createBaseVNode("p", { class: "text-[10px] text-slate-500 mt-1 font-normal leading-relaxed" }, "Scan desk QR code to check in and occupy seat.", -1))
                          ])) : createCommentVNode("", true),
                          activeFeature.value === 4 ? (openBlock(), createElementBlock("div", _hoisted_83, [..._cache[67] || (_cache[67] = [
                            createBaseVNode("div", { class: "flex justify-between items-center mb-3" }, [
                              createBaseVNode("h4", { class: "text-xs font-bold text-slate-800" }, "Weekly Study Time"),
                              createBaseVNode("span", { class: "text-[9px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200" }, "+12% vs last week")
                            ], -1),
                            createBaseVNode("div", { class: "flex items-end justify-between h-20 pt-3 border-b border-slate-100 px-2" }, [
                              createBaseVNode("div", { class: "flex flex-col items-center w-5 group" }, [
                                createBaseVNode("div", {
                                  class: "w-2 bg-slate-200 group-hover:bg-blue-500 rounded-t-xs transition-all duration-300",
                                  style: { "height": "40%" }
                                }),
                                createBaseVNode("span", { class: "text-[8px] text-slate-400 mt-1 font-medium" }, "M")
                              ]),
                              createBaseVNode("div", { class: "flex flex-col items-center w-5 group" }, [
                                createBaseVNode("div", {
                                  class: "w-2 bg-slate-200 group-hover:bg-blue-500 rounded-t-xs transition-all duration-300",
                                  style: { "height": "65%" }
                                }),
                                createBaseVNode("span", { class: "text-[8px] text-slate-400 mt-1 font-medium" }, "T")
                              ]),
                              createBaseVNode("div", { class: "flex flex-col items-center w-5 group" }, [
                                createBaseVNode("div", {
                                  class: "w-2 bg-slate-200 group-hover:bg-blue-500 rounded-t-xs transition-all duration-300",
                                  style: { "height": "50%" }
                                }),
                                createBaseVNode("span", { class: "text-[8px] text-slate-400 mt-1 font-medium" }, "W")
                              ]),
                              createBaseVNode("div", { class: "flex flex-col items-center w-5 group" }, [
                                createBaseVNode("div", {
                                  class: "w-2 bg-blue-600 rounded-t-xs transition-all duration-300",
                                  style: { "height": "85%" }
                                }),
                                createBaseVNode("span", { class: "text-[8px] text-blue-600 mt-1 font-semibold" }, "T")
                              ]),
                              createBaseVNode("div", { class: "flex flex-col items-center w-5 group" }, [
                                createBaseVNode("div", {
                                  class: "w-2 bg-slate-200 group-hover:bg-blue-500 rounded-t-xs transition-all duration-300",
                                  style: { "height": "35%" }
                                }),
                                createBaseVNode("span", { class: "text-[8px] text-slate-400 mt-1 font-medium" }, "F")
                              ]),
                              createBaseVNode("div", { class: "flex flex-col items-center w-5 group" }, [
                                createBaseVNode("div", {
                                  class: "w-2 bg-slate-200 group-hover:bg-blue-500 rounded-t-xs transition-all duration-300",
                                  style: { "height": "90%" }
                                }),
                                createBaseVNode("span", { class: "text-[8px] text-slate-400 mt-1 font-medium" }, "S")
                              ])
                            ], -1),
                            createBaseVNode("div", { class: "flex justify-between items-center mt-3" }, [
                              createBaseVNode("p", { class: "text-[10px] text-slate-500 font-normal" }, "Daily Average"),
                              createBaseVNode("p", { class: "text-xs font-semibold text-slate-800" }, "4.8 hours")
                            ], -1)
                          ])])) : createCommentVNode("", true),
                          activeFeature.value === 5 ? (openBlock(), createElementBlock("div", _hoisted_84, [
                            createBaseVNode("div", _hoisted_85, [
                              createBaseVNode("div", _hoisted_86, [
                                createVNode(unref(Award), { class: "h-5 w-5" })
                              ]),
                              _cache[68] || (_cache[68] = createBaseVNode("div", null, [
                                createBaseVNode("h4", { class: "text-xs font-bold text-slate-800" }, "Loyalty Level 3"),
                                createBaseVNode("p", { class: "text-[10px] text-slate-400 mt-0.5" }, "Academic Champion")
                              ], -1))
                            ]),
                            _cache[69] || (_cache[69] = createBaseVNode("div", null, [
                              createBaseVNode("div", { class: "flex justify-between items-center text-[10px] font-medium text-slate-600 mb-1" }, [
                                createBaseVNode("span", null, "Points Progress"),
                                createBaseVNode("span", null, "3,450 / 5,000 pts")
                              ]),
                              createBaseVNode("div", { class: "w-full h-1.5 bg-slate-100 rounded-full overflow-hidden" }, [
                                createBaseVNode("div", {
                                  class: "h-full bg-blue-600 rounded-full",
                                  style: { "width": "69%" }
                                })
                              ])
                            ], -1)),
                            _cache[70] || (_cache[70] = createBaseVNode("div", { class: "mt-3 flex items-center space-x-2" }, [
                              createBaseVNode("span", { class: "text-[9px] font-semibold bg-blue-50 text-blue-600 border border-blue-100 px-2 py-0.5 rounded-full uppercase" }, "Reward Ready"),
                              createBaseVNode("span", { class: "text-[9px] text-slate-500 font-normal" }, "• 1 Free Espresso Pass")
                            ], -1))
                          ])) : createCommentVNode("", true)
                        ])
                      ]))
                    ]),
                    _: 1
                  })
                ])
              ])
            ])
          ])
        ]),
        createBaseVNode("section", _hoisted_87, [
          createBaseVNode("div", _hoisted_88, [
            _cache[87] || (_cache[87] = createBaseVNode("div", { class: "text-center max-w-2xl mx-auto mb-16" }, [
              createBaseVNode("span", { class: "inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold uppercase bg-blue-50 border border-blue-100 text-blue-600 mb-3 select-none" }, " Simple Process "),
              createBaseVNode("h2", { class: "text-2xl sm:text-3xl font-bold text-slate-800 tracking-tight mb-3" }, " How It Works in 4 Steps "),
              createBaseVNode("p", { class: "text-xs sm:text-sm text-slate-600 leading-relaxed font-normal" }, " Booking study desks and checking out digital learning resources takes just a few seconds. ")
            ], -1)),
            createBaseVNode("div", _hoisted_89, [
              createBaseVNode("div", _hoisted_90, [
                _cache[72] || (_cache[72] = createBaseVNode("div", { class: "hidden md:block absolute top-9 left-[65%] right-[-35%] h-0.5 bg-slate-200 -z-10" }, null, -1)),
                createBaseVNode("div", _hoisted_91, [
                  createVNode(unref(Search), { class: "h-7 w-7" })
                ]),
                _cache[73] || (_cache[73] = createBaseVNode("span", { class: "text-[10px] font-semibold uppercase tracking-wider text-blue-600 bg-blue-50 border border-blue-100 px-2.5 py-0.5 rounded-full mb-2" }, " Step 01 ", -1)),
                _cache[74] || (_cache[74] = createBaseVNode("h3", { class: "text-base font-bold text-slate-800 mb-1.5" }, "Find a Library", -1)),
                _cache[75] || (_cache[75] = createBaseVNode("p", { class: "text-xs text-slate-500 leading-relaxed max-w-[220px] font-normal" }, " Explore participating ICAP library locations nationwide and verify live seat occupancy statistics. ", -1))
              ]),
              createBaseVNode("div", _hoisted_92, [
                _cache[76] || (_cache[76] = createBaseVNode("div", { class: "hidden md:block absolute top-9 left-[65%] right-[-35%] h-0.5 bg-slate-200 -z-10" }, null, -1)),
                createBaseVNode("div", _hoisted_93, [
                  createVNode(unref(MapPin), { class: "h-7 w-7" })
                ]),
                _cache[77] || (_cache[77] = createBaseVNode("span", { class: "text-[10px] font-semibold uppercase tracking-wider text-blue-600 bg-blue-50 border border-blue-100 px-2.5 py-0.5 rounded-full mb-2" }, " Step 02 ", -1)),
                _cache[78] || (_cache[78] = createBaseVNode("h3", { class: "text-base font-bold text-slate-800 mb-1.5" }, "Select & Reserve", -1)),
                _cache[79] || (_cache[79] = createBaseVNode("p", { class: "text-xs text-slate-500 leading-relaxed max-w-[220px] font-normal" }, " Check out live interactive floor seat maps, select your preferred desk location, and reserve instantly. ", -1))
              ]),
              createBaseVNode("div", _hoisted_94, [
                _cache[80] || (_cache[80] = createBaseVNode("div", { class: "hidden md:block absolute top-9 left-[65%] right-[-35%] h-0.5 bg-slate-200 -z-10" }, null, -1)),
                createBaseVNode("div", _hoisted_95, [
                  createVNode(unref(QrCode), { class: "h-7 w-7" })
                ]),
                _cache[81] || (_cache[81] = createBaseVNode("span", { class: "text-[10px] font-semibold uppercase tracking-wider text-blue-600 bg-blue-50 border border-blue-100 px-2.5 py-0.5 rounded-full mb-2" }, " Step 03 ", -1)),
                _cache[82] || (_cache[82] = createBaseVNode("h3", { class: "text-base font-bold text-slate-800 mb-1.5" }, "QR Seat Check-In", -1)),
                _cache[83] || (_cache[83] = createBaseVNode("p", { class: "text-xs text-slate-500 leading-relaxed max-w-[220px] font-normal" }, " Go to your reserved desk and scan the QR code to check in and occupy your seat. ", -1))
              ]),
              createBaseVNode("div", _hoisted_96, [
                createBaseVNode("div", _hoisted_97, [
                  createVNode(unref(Clock), { class: "h-7 w-7" })
                ]),
                _cache[84] || (_cache[84] = createBaseVNode("span", { class: "text-[10px] font-semibold uppercase tracking-wider text-blue-600 bg-blue-50 border border-blue-100 px-2.5 py-0.5 rounded-full mb-2" }, " Step 04 ", -1)),
                _cache[85] || (_cache[85] = createBaseVNode("h3", { class: "text-base font-bold text-slate-800 mb-1.5" }, "Optimize Study", -1)),
                _cache[86] || (_cache[86] = createBaseVNode("p", { class: "text-xs text-slate-500 leading-relaxed max-w-[220px] font-normal" }, " Track remaining session duration, extend bookings as needed, and enjoy focused study time. ", -1))
              ])
            ])
          ])
        ]),
        createBaseVNode("section", _hoisted_98, [
          createBaseVNode("div", _hoisted_99, [
            _cache[109] || (_cache[109] = createBaseVNode("div", { class: "max-w-2xl mx-auto mb-10" }, [
              createBaseVNode("h2", { class: "text-2xl sm:text-3xl font-bold text-slate-800 tracking-tight mb-3" }, " Simple, Transparent Pricing "),
              createBaseVNode("p", { class: "text-xs sm:text-sm text-slate-600 font-normal" }, " Choose the membership tier that fits your academic goals or institute needs. ")
            ], -1)),
            createBaseVNode("div", _hoisted_100, [
              createBaseVNode("span", {
                class: normalizeClass(["text-xs font-semibold transition-all", !isAnnual.value ? "text-blue-600" : "text-slate-500"])
              }, "Monthly Billing", 2),
              createBaseVNode("button", {
                onClick: _cache[9] || (_cache[9] = ($event) => isAnnual.value = !isAnnual.value),
                class: "w-12 h-7 bg-blue-100 rounded-full p-1 transition-all duration-300 relative focus:outline-none"
              }, [
                createBaseVNode("div", {
                  class: normalizeClass([
                    "w-5 h-5 bg-blue-600 rounded-full transition-transform duration-300 absolute top-1",
                    isAnnual.value ? "translate-x-5" : "translate-x-0"
                  ])
                }, null, 2)
              ]),
              createBaseVNode("span", {
                class: normalizeClass(["text-xs font-semibold transition-all", isAnnual.value ? "text-blue-600" : "text-slate-500"])
              }, [..._cache[88] || (_cache[88] = [
                createTextVNode(" Annual Billing ", -1),
                createBaseVNode("span", { class: "text-[10px] bg-emerald-50 border border-emerald-200 text-emerald-600 px-2 py-0.5 rounded-full font-semibold ml-1" }, "Save 20%", -1)
              ])], 2)
            ]),
            createBaseVNode("div", _hoisted_101, [
              createBaseVNode("div", _hoisted_102, [
                createBaseVNode("div", null, [
                  _cache[92] || (_cache[92] = createStaticVNode('<span class="text-[11px] font-semibold text-slate-400 uppercase tracking-wider" data-v-f93682f8>Free Account</span><h3 class="text-lg font-bold text-slate-800 mt-1" data-v-f93682f8>Student Basic</h3><p class="text-xs text-slate-500 mt-0.5 font-normal" data-v-f93682f8>Ideal for occasional study sessions</p><div class="my-5 flex items-baseline" data-v-f93682f8><span class="text-3xl font-bold text-slate-800" data-v-f93682f8>Rs. 0</span><span class="text-xs font-normal text-slate-500 ml-1" data-v-f93682f8>/ forever</span></div>', 4)),
                  createBaseVNode("ul", _hoisted_103, [
                    createBaseVNode("li", _hoisted_104, [
                      createVNode(unref(Check), { class: "h-4 w-4 text-blue-600" }),
                      _cache[89] || (_cache[89] = createBaseVNode("span", null, "Access to catalog search", -1))
                    ]),
                    createBaseVNode("li", _hoisted_105, [
                      createVNode(unref(Check), { class: "h-4 w-4 text-blue-600" }),
                      _cache[90] || (_cache[90] = createBaseVNode("span", null, "Up to 2 bookings per month", -1))
                    ]),
                    createBaseVNode("li", _hoisted_106, [
                      createVNode(unref(Check), { class: "h-4 w-4 text-blue-600" }),
                      _cache[91] || (_cache[91] = createBaseVNode("span", null, "Standard QR seat check-in", -1))
                    ])
                  ])
                ]),
                createVNode(_component_router_link, {
                  to: "/register",
                  class: "w-full text-center py-2.5 rounded-xl text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-all mt-6"
                }, {
                  default: withCtx(() => [..._cache[93] || (_cache[93] = [
                    createTextVNode(" Sign Up Free ", -1)
                  ])]),
                  _: 1
                })
              ]),
              createBaseVNode("div", _hoisted_107, [
                _cache[103] || (_cache[103] = createBaseVNode("div", { class: "absolute -top-3 right-5 bg-blue-600 text-white text-[9px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full" }, " Popular Choice ", -1)),
                createBaseVNode("div", null, [
                  _cache[99] || (_cache[99] = createBaseVNode("span", { class: "text-[11px] font-semibold text-blue-600 uppercase tracking-wider" }, "Scholar Pro", -1)),
                  _cache[100] || (_cache[100] = createBaseVNode("h3", { class: "text-lg font-bold text-slate-800 mt-1" }, "Premium Member", -1)),
                  _cache[101] || (_cache[101] = createBaseVNode("p", { class: "text-xs text-slate-500 mt-0.5 font-normal" }, "Best for active CA & finance students", -1)),
                  createBaseVNode("div", _hoisted_108, [
                    createBaseVNode("span", _hoisted_109, toDisplayString(isAnnual.value ? "Rs. 799" : "Rs. 999"), 1),
                    _cache[94] || (_cache[94] = createBaseVNode("span", { class: "text-xs font-normal text-slate-500 ml-1" }, "/ month", -1))
                  ]),
                  createBaseVNode("ul", _hoisted_110, [
                    createBaseVNode("li", _hoisted_111, [
                      createVNode(unref(Check), { class: "h-4 w-4 text-blue-600" }),
                      _cache[95] || (_cache[95] = createBaseVNode("span", null, "Unlimited seat reservations", -1))
                    ]),
                    createBaseVNode("li", _hoisted_112, [
                      createVNode(unref(Check), { class: "h-4 w-4 text-blue-600" }),
                      _cache[96] || (_cache[96] = createBaseVNode("span", null, "Pre-book up to 7 days in advance", -1))
                    ]),
                    createBaseVNode("li", _hoisted_113, [
                      createVNode(unref(Check), { class: "h-4 w-4 text-blue-600" }),
                      _cache[97] || (_cache[97] = createBaseVNode("span", null, "Interactive floor maps", -1))
                    ]),
                    createBaseVNode("li", _hoisted_114, [
                      createVNode(unref(Check), { class: "h-4 w-4 text-blue-600" }),
                      _cache[98] || (_cache[98] = createBaseVNode("span", null, "Loyalty points rewards access", -1))
                    ])
                  ])
                ]),
                createVNode(_component_router_link, {
                  to: "/register",
                  class: "w-full text-center py-2.5 rounded-xl text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 shadow-sm transition-all mt-6"
                }, {
                  default: withCtx(() => [..._cache[102] || (_cache[102] = [
                    createTextVNode(" Get Started ", -1)
                  ])]),
                  _: 1
                })
              ]),
              createBaseVNode("div", _hoisted_115, [
                createBaseVNode("div", null, [
                  _cache[108] || (_cache[108] = createStaticVNode('<span class="text-[11px] font-semibold text-slate-400 uppercase tracking-wider" data-v-f93682f8>Institutional License</span><h3 class="text-lg font-bold text-slate-800 mt-1" data-v-f93682f8>Smart Institute</h3><p class="text-xs text-slate-500 mt-0.5 font-normal" data-v-f93682f8>For universities, colleges &amp; libraries</p><div class="my-5 flex items-baseline" data-v-f93682f8><span class="text-3xl font-bold text-slate-800" data-v-f93682f8>Custom</span><span class="text-xs font-normal text-slate-500 ml-1" data-v-f93682f8>/ location</span></div>', 4)),
                  createBaseVNode("ul", _hoisted_116, [
                    createBaseVNode("li", _hoisted_117, [
                      createVNode(unref(Check), { class: "h-4 w-4 text-blue-600" }),
                      _cache[104] || (_cache[104] = createBaseVNode("span", null, "Unlimited admin & librarian seats", -1))
                    ]),
                    createBaseVNode("li", _hoisted_118, [
                      createVNode(unref(Check), { class: "h-4 w-4 text-blue-600" }),
                      _cache[105] || (_cache[105] = createBaseVNode("span", null, "Full student analytics dashboard", -1))
                    ]),
                    createBaseVNode("li", _hoisted_119, [
                      createVNode(unref(Check), { class: "h-4 w-4 text-blue-600" }),
                      _cache[106] || (_cache[106] = createBaseVNode("span", null, "Automated checkout & notifications", -1))
                    ]),
                    createBaseVNode("li", _hoisted_120, [
                      createVNode(unref(Check), { class: "h-4 w-4 text-blue-600" }),
                      _cache[107] || (_cache[107] = createBaseVNode("span", null, "Support API integrations", -1))
                    ])
                  ])
                ]),
                createBaseVNode("a", {
                  href: "mailto:" + unref(contactEmail) + "?subject=Institutional License Inquiry",
                  class: "w-full text-center py-2.5 rounded-xl text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-all mt-6"
                }, " Contact Support ", 8, _hoisted_121)
              ])
            ])
          ])
        ]),
        createBaseVNode("section", _hoisted_122, [
          createBaseVNode("div", _hoisted_123, [
            _cache[111] || (_cache[111] = createBaseVNode("div", { class: "text-center max-w-2xl mx-auto mb-12" }, [
              createBaseVNode("h2", { class: "text-2xl sm:text-3xl font-bold text-slate-800 tracking-tight mb-3" }, " Frequently Asked Questions "),
              createBaseVNode("p", { class: "text-xs sm:text-sm text-slate-600 font-normal" }, " Find answers to common questions about reservation limits, check-in requirements and loyalty points. ")
            ], -1)),
            createBaseVNode("div", _hoisted_124, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(faqList.value, (faq, idx) => {
                return openBlock(), createElementBlock("div", {
                  key: faq.question,
                  class: "bg-white border border-slate-200 rounded-xl overflow-hidden shadow-2xs"
                }, [
                  createBaseVNode("button", {
                    onClick: ($event) => toggleFaq(idx),
                    class: "w-full p-5 flex justify-between items-center text-left focus:outline-none"
                  }, [
                    createBaseVNode("span", _hoisted_126, toDisplayString(faq.question), 1),
                    createBaseVNode("span", {
                      class: "ml-4 flex-shrink-0 text-slate-400 transition-transform duration-200",
                      style: normalizeStyle(faq.open ? "transform: rotate(180deg)" : "")
                    }, [..._cache[110] || (_cache[110] = [
                      createBaseVNode("svg", {
                        class: "h-4 w-4",
                        fill: "none",
                        stroke: "currentColor",
                        viewBox: "0 0 24 24"
                      }, [
                        createBaseVNode("path", {
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          "stroke-width": "2",
                          d: "M19 9l-7 7-7-7"
                        })
                      ], -1)
                    ])], 4)
                  ], 8, _hoisted_125),
                  createVNode(Transition, { name: "expand" }, {
                    default: withCtx(() => [
                      withDirectives(createBaseVNode("div", { class: "border-t border-slate-100 p-5 bg-slate-50/30 text-xs text-slate-600 leading-relaxed font-normal" }, toDisplayString(faq.answer), 513), [
                        [vShow, faq.open]
                      ])
                    ]),
                    _: 2
                  }, 1024)
                ]);
              }), 128))
            ])
          ])
        ]),
        createBaseVNode("footer", _hoisted_127, [
          createBaseVNode("div", _hoisted_128, [
            createBaseVNode("div", _hoisted_129, [
              createBaseVNode("div", _hoisted_130, [
                createVNode(_component_router_link, {
                  to: "/",
                  class: "flex items-center space-x-2 mb-4 group"
                }, {
                  default: withCtx(() => [
                    createBaseVNode("div", _hoisted_131, [
                      createVNode(unref(BookOpen), { class: "h-5 w-5" })
                    ]),
                    createBaseVNode("span", _hoisted_132, toDisplayString(unref(appName)), 1)
                  ]),
                  _: 1
                }),
                createBaseVNode("p", _hoisted_133, toDisplayString(unref(siteDescription)), 1),
                createBaseVNode("div", _hoisted_134, [
                  createBaseVNode("a", _hoisted_135, [
                    createVNode(unref(Twitter), { class: "h-4 w-4" })
                  ]),
                  createBaseVNode("a", _hoisted_136, [
                    createVNode(unref(Linkedin), { class: "h-4 w-4" })
                  ]),
                  createBaseVNode("a", _hoisted_137, [
                    createVNode(unref(Facebook), { class: "h-4 w-4" })
                  ])
                ])
              ]),
              createBaseVNode("div", _hoisted_138, [
                _cache[112] || (_cache[112] = createBaseVNode("h4", { class: "text-xs font-bold uppercase text-slate-400 tracking-wider mb-4" }, "Solutions", -1)),
                createBaseVNode("ul", _hoisted_139, [
                  createBaseVNode("li", null, [
                    createBaseVNode("a", {
                      href: "#features",
                      onClick: _cache[10] || (_cache[10] = ($event) => scrollToFeature(0, $event)),
                      class: "text-xs font-medium text-slate-600 hover:text-blue-600 transition-colors"
                    }, "Seat Booking")
                  ]),
                  createBaseVNode("li", null, [
                    createBaseVNode("a", {
                      href: "#features",
                      onClick: _cache[11] || (_cache[11] = ($event) => scrollToFeature(1, $event)),
                      class: "text-xs font-medium text-slate-600 hover:text-blue-600 transition-colors"
                    }, "Catalog Manager")
                  ]),
                  createBaseVNode("li", null, [
                    createBaseVNode("a", {
                      href: "#features",
                      onClick: _cache[12] || (_cache[12] = ($event) => scrollToFeature(2, $event)),
                      class: "text-xs font-medium text-slate-600 hover:text-blue-600 transition-colors"
                    }, "QR Seat Check-In")
                  ]),
                  createBaseVNode("li", null, [
                    createBaseVNode("a", {
                      href: "#features",
                      onClick: _cache[13] || (_cache[13] = ($event) => scrollToFeature(3, $event)),
                      class: "text-xs font-medium text-slate-600 hover:text-blue-600 transition-colors"
                    }, "Digital Analytics")
                  ])
                ])
              ]),
              createBaseVNode("div", _hoisted_140, [
                _cache[114] || (_cache[114] = createBaseVNode("h4", { class: "text-xs font-bold uppercase text-slate-400 tracking-wider mb-4" }, "Security & Integrity", -1)),
                createBaseVNode("div", _hoisted_141, [
                  createBaseVNode("div", _hoisted_142, [
                    createVNode(unref(Shield), { class: "h-5 w-5" })
                  ]),
                  _cache[113] || (_cache[113] = createBaseVNode("div", null, [
                    createBaseVNode("h5", { class: "text-xs font-semibold text-slate-800" }, "Verified System Protection"),
                    createBaseVNode("p", { class: "text-[11px] text-slate-500 mt-1 leading-relaxed font-normal" }, " All seat bookings, queue status updates, and catalog lookups are secure. QR-based seat check-in provides verified, compliant access. ")
                  ], -1))
                ])
              ])
            ]),
            createBaseVNode("div", _hoisted_143, [
              createBaseVNode("p", null, "© " + toDisplayString((/* @__PURE__ */ new Date()).getFullYear()) + " " + toDisplayString(unref(appName)) + " System. All rights reserved.", 1),
              _cache[115] || (_cache[115] = createBaseVNode("div", { class: "flex space-x-5 mt-3 sm:mt-0" }, [
                createBaseVNode("a", {
                  href: "#",
                  class: "hover:text-blue-600 transition-colors"
                }, "Privacy Policy"),
                createBaseVNode("a", {
                  href: "#",
                  class: "hover:text-blue-600 transition-colors"
                }, "Terms of Service"),
                createBaseVNode("a", {
                  href: "#",
                  class: "hover:text-blue-600 transition-colors"
                }, "System Status")
              ], -1))
            ])
          ])
        ])
      ]);
    };
  }
});
const LandingPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-f93682f8"]]);
export {
  LandingPage as default
};
