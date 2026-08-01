import { d as defineComponent, r as ref, o as onMounted, c as computed, a as createElementBlock, b as createBaseVNode, e as createStaticVNode, f as createVNode, n as normalizeClass, w as withCtx, g as resolveComponent, h as createBlock, u as unref, T as Transition, i as createTextVNode, j as createCommentVNode, F as Fragment, k as renderList, t as toDisplayString, l as openBlock, m as resolveDynamicComponent, p as withDirectives, v as vModelText, q as normalizeStyle, s as vShow } from "./main-C124sHqx.js";
import { M as Menu } from "./menu-TOdLSAxP.js";
import { X } from "./x-eq55W8eI.js";
import { S as Sparkles } from "./sparkles-9fpD963V.js";
import { M as MapPin } from "./map-pin-CvyXaBel.js";
import { Z as Zap } from "./zap-BnJNWk3w.js";
import { U as User } from "./user-JzVAjYrB.js";
import { Q as QrCode } from "./qr-code-CM53IVo1.js";
import { C as Check } from "./check-B_2imYTv.js";
import { T as TrendingUp } from "./trending-up-Cs9gZlY0.js";
import { C as CircleAlert } from "./circle-alert-j0S5RkVw.js";
import { G as GraduationCap } from "./graduation-cap-CUE4x9Pl.js";
import { c as createLucideIcon } from "./createLucideIcon-8y9GOHiU.js";
import { S as Search } from "./search-gimRym8C.js";
import { C as Clock } from "./clock-B_R0d3h4.js";
import { S as Shield } from "./shield-BzUF6jWS.js";
import { B as BookOpen } from "./book-open-BVgq79sG.js";
import { C as ChevronRight } from "./chevron-right-CULPaQVn.js";
import { B as Ban } from "./ban-Bpu5A8nW.js";
import { E as EyeOff } from "./eye-off-Diw_N8yr.js";
import { U as UserX } from "./user-x-BkD6sa_d.js";
import { A as Award } from "./award-CC8Vcsfy.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
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
const _hoisted_1 = { class: "min-h-screen bg-white font-sans antialiased text-slate-800" };
const _hoisted_2 = { class: "h-10 w-10 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform" };
const _hoisted_3 = { class: "flex items-center space-x-4" };
const _hoisted_4 = {
  key: 0,
  class: "absolute top-20 left-4 right-4 bg-white border border-slate-200 shadow-xl rounded-3xl p-6 md:hidden flex flex-col space-y-4"
};
const _hoisted_5 = { class: "relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-blue-50/20 via-white to-white" };
const _hoisted_6 = { class: "max-w-7xl mx-auto px-6" };
const _hoisted_7 = { class: "grid grid-cols-1 lg:grid-cols-12 gap-16 items-center" };
const _hoisted_8 = { class: "lg:col-span-6 flex flex-col items-start text-left" };
const _hoisted_9 = { class: "inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-blue-50 border border-blue-100 text-blue-700 mb-6 shadow-inner" };
const _hoisted_10 = { class: "flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto" };
const _hoisted_11 = { class: "lg:col-span-6 flex justify-center items-center relative" };
const _hoisted_12 = { class: "perspective-box relative w-full max-w-lg" };
const _hoisted_13 = { class: "main-card-3d bg-white border border-slate-200/80 shadow-2xl rounded-3xl p-6 relative overflow-hidden" };
const _hoisted_14 = { class: "bg-slate-50 border border-slate-100 rounded-2xl p-4 mb-4 relative" };
const _hoisted_15 = { class: "grid grid-cols-12 gap-2 relative" };
const _hoisted_16 = { class: "col-span-8 grid grid-cols-4 gap-2 p-1 bg-white border border-slate-200/60 rounded-xl shadow-inner" };
const _hoisted_17 = ["onClick"];
const _hoisted_18 = { class: "text-[9px] font-black tracking-tight" };
const _hoisted_19 = {
  key: 0,
  class: "bg-slate-50 border border-slate-200/80 rounded-2xl p-4 text-left transition-all duration-300"
};
const _hoisted_20 = { class: "flex justify-between items-start mb-2" };
const _hoisted_21 = { class: "text-[9px] font-black uppercase text-blue-600 bg-blue-50 border border-blue-100 px-2 py-0.5 rounded-md" };
const _hoisted_22 = { class: "text-xs font-extrabold text-slate-900 mt-1.5 flex items-center gap-1.5" };
const _hoisted_23 = { class: "text-right" };
const _hoisted_24 = { class: "flex flex-wrap items-center justify-between gap-2 text-xs border-t border-slate-200/60 pt-2.5 mt-2" };
const _hoisted_25 = { class: "flex items-center gap-1 text-[10px] text-slate-500 font-semibold" };
const _hoisted_26 = { class: "text-slate-600 text-[10px] font-bold flex items-center gap-1" };
const _hoisted_27 = {
  key: 0,
  class: "flex items-center gap-1 text-rose-600"
};
const _hoisted_28 = {
  key: 1,
  class: "flex items-center gap-1 text-amber-600"
};
const _hoisted_29 = {
  key: 2,
  class: "flex items-center gap-1 text-blue-600"
};
const _hoisted_30 = {
  key: 3,
  class: "flex items-center gap-1 text-emerald-600"
};
const _hoisted_31 = { class: "absolute -right-8 -bottom-6 bg-white border border-slate-200 shadow-xl rounded-2xl p-4 flex items-center space-x-3.5 animate-bounce-slow" };
const _hoisted_32 = { class: "h-10 w-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 border border-blue-100" };
const _hoisted_33 = {
  id: "challenges",
  class: "py-20 md:py-28 bg-slate-50/50 border-b border-slate-200 relative overflow-hidden"
};
const _hoisted_34 = { class: "max-w-7xl mx-auto px-6 text-center relative z-10" };
const _hoisted_35 = { class: "max-w-3xl mx-auto mb-16" };
const _hoisted_36 = { class: "inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-black tracking-wider uppercase bg-red-50 border border-red-100 text-red-650 shadow-sm mb-4 select-none" };
const _hoisted_37 = { class: "flex justify-center mb-14" };
const _hoisted_38 = { class: "bg-white border border-slate-200 p-1.5 rounded-2xl flex items-center gap-1.5 shadow-sm" };
const _hoisted_39 = {
  key: "students",
  class: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
};
const _hoisted_40 = { class: "bg-white border border-slate-200 rounded-3xl p-6 shadow-sm hover:shadow-md transition-all text-left flex flex-col justify-between group" };
const _hoisted_41 = { class: "flex justify-between items-center mb-6" };
const _hoisted_42 = { class: "h-10 w-10 rounded-xl bg-red-50 text-red-500 flex items-center justify-center" };
const _hoisted_43 = { class: "bg-white border border-slate-200 rounded-3xl p-6 shadow-sm hover:shadow-md transition-all text-left flex flex-col justify-between group" };
const _hoisted_44 = { class: "flex justify-between items-center mb-6" };
const _hoisted_45 = { class: "h-10 w-10 rounded-xl bg-red-50 text-red-500 flex items-center justify-center" };
const _hoisted_46 = { class: "bg-white border border-slate-200 rounded-3xl p-6 shadow-sm hover:shadow-md transition-all text-left flex flex-col justify-between group" };
const _hoisted_47 = { class: "flex justify-between items-center mb-6" };
const _hoisted_48 = { class: "h-10 w-10 rounded-xl bg-red-50 text-red-500 flex items-center justify-center" };
const _hoisted_49 = { class: "bg-white border border-slate-200 rounded-3xl p-6 shadow-sm hover:shadow-md transition-all text-left flex flex-col justify-between group" };
const _hoisted_50 = { class: "flex justify-between items-center mb-6" };
const _hoisted_51 = { class: "h-10 w-10 rounded-xl bg-red-50 text-red-500 flex items-center justify-center" };
const _hoisted_52 = {
  key: "librarians",
  class: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
};
const _hoisted_53 = { class: "bg-white border border-slate-200 rounded-3xl p-6 shadow-sm hover:shadow-md transition-all text-left flex flex-col justify-between group" };
const _hoisted_54 = { class: "flex justify-between items-center mb-6" };
const _hoisted_55 = { class: "h-10 w-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center" };
const _hoisted_56 = { class: "bg-white border border-slate-200 rounded-3xl p-6 shadow-sm hover:shadow-md transition-all text-left flex flex-col justify-between group" };
const _hoisted_57 = { class: "flex justify-between items-center mb-6" };
const _hoisted_58 = { class: "h-10 w-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center" };
const _hoisted_59 = { class: "bg-white border border-slate-200 rounded-3xl p-6 shadow-sm hover:shadow-md transition-all text-left flex flex-col justify-between group" };
const _hoisted_60 = { class: "flex justify-between items-center mb-6" };
const _hoisted_61 = { class: "h-10 w-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center" };
const _hoisted_62 = { class: "bg-white border border-slate-200 rounded-3xl p-6 shadow-sm hover:shadow-md transition-all text-left flex flex-col justify-between group" };
const _hoisted_63 = { class: "flex justify-between items-center mb-6" };
const _hoisted_64 = { class: "h-10 w-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center" };
const _hoisted_65 = {
  id: "features",
  class: "py-20 md:py-28 bg-slate-50/30 border-b border-slate-200 relative overflow-hidden"
};
const _hoisted_66 = { class: "max-w-7xl mx-auto px-6 relative z-10" };
const _hoisted_67 = { class: "grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch" };
const _hoisted_68 = { class: "lg:col-span-4 flex flex-col gap-3 justify-center" };
const _hoisted_69 = ["onClick"];
const _hoisted_70 = { class: "flex-1 min-w-0" };
const _hoisted_71 = { class: "text-[10px] text-slate-450 font-semibold block truncate" };
const _hoisted_72 = { class: "lg:col-span-8 flex" };
const _hoisted_73 = { class: "w-full bg-white border border-slate-200/95 shadow-xl rounded-3xl overflow-hidden flex flex-col justify-between" };
const _hoisted_74 = { class: "md:col-span-7 p-8 sm:p-10 flex flex-col justify-center items-start text-left" };
const _hoisted_75 = { class: "h-11 w-11 rounded-xl bg-blue-50/80 border border-blue-100 flex items-center justify-center text-blue-600 mb-6" };
const _hoisted_76 = { class: "text-xl sm:text-2xl font-black text-slate-900 mb-3.5 leading-snug" };
const _hoisted_77 = { class: "text-xs text-slate-500 leading-relaxed font-semibold mb-6" };
const _hoisted_78 = { class: "space-y-3 w-full" };
const _hoisted_79 = { class: "h-5 w-5 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 flex-shrink-0" };
const _hoisted_80 = { class: "md:col-span-5 bg-gradient-to-br from-slate-50/70 to-slate-100/50 border-t md:border-t-0 md:border-l border-slate-200/80 flex items-center justify-center p-8 relative overflow-hidden min-h-[300px]" };
const _hoisted_81 = {
  key: 0,
  class: "w-full max-w-[280px]"
};
const _hoisted_82 = { class: "grid grid-cols-4 gap-2.5" };
const _hoisted_83 = ["onClick", "disabled"];
const _hoisted_84 = {
  key: 0,
  class: "absolute -top-1 -right-1 h-3.5 w-3.5 rounded-full bg-green-500 border border-white flex items-center justify-center text-[8px] text-white"
};
const _hoisted_85 = { class: "bg-white border border-slate-200 rounded-xl p-2.5 text-center mt-6 shadow-sm" };
const _hoisted_86 = { class: "text-[11px] font-black text-slate-805" };
const _hoisted_87 = {
  key: 1,
  class: "w-full max-w-[280px] bg-white border border-slate-200 rounded-2xl p-4 shadow-sm text-left"
};
const _hoisted_88 = { class: "relative mb-3.5" };
const _hoisted_89 = { class: "space-y-2 max-h-[160px] overflow-y-auto pr-1" };
const _hoisted_90 = { class: "text-xs font-bold text-slate-850 leading-tight" };
const _hoisted_91 = { class: "text-[10px] text-slate-505 mt-0.5" };
const _hoisted_92 = {
  key: 2,
  class: "w-full max-w-[280px] text-left space-y-3"
};
const _hoisted_93 = { class: "text-[9px] font-black text-blue-600 uppercase tracking-wider bg-blue-50 px-2 py-0.5 rounded border border-blue-100" };
const _hoisted_94 = { class: "text-xs font-bold text-slate-800 mt-2" };
const _hoisted_95 = { class: "text-[10px] text-slate-505 mt-1 flex items-center gap-1 font-semibold" };
const _hoisted_96 = ["onClick"];
const _hoisted_97 = {
  key: 3,
  class: "w-full max-w-[240px] bg-white border border-slate-200 rounded-2xl p-5 shadow-sm text-center relative flex flex-col items-center"
};
const _hoisted_98 = { class: "h-36 w-36 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-center p-3 relative overflow-hidden shadow-inner" };
const _hoisted_99 = {
  key: 4,
  class: "w-full max-w-[280px] bg-white border border-slate-200 rounded-2xl p-4 shadow-sm text-left"
};
const _hoisted_100 = {
  key: 5,
  class: "w-full max-w-[280px] bg-white border border-slate-200 rounded-2xl p-4 shadow-sm text-left"
};
const _hoisted_101 = { class: "flex items-center space-x-3.5 border-b border-slate-100 pb-3 mb-3" };
const _hoisted_102 = { class: "h-10 w-10 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600" };
const _hoisted_103 = {
  id: "how-it-works",
  class: "py-20 md:py-28 border-t border-slate-200 bg-white"
};
const _hoisted_104 = { class: "max-w-7xl mx-auto px-6" };
const _hoisted_105 = { class: "grid grid-cols-1 md:grid-cols-4 gap-10 lg:gap-12 relative" };
const _hoisted_106 = { class: "relative flex flex-col items-center text-center group" };
const _hoisted_107 = { class: "h-20 w-20 rounded-3xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white shadow-xl shadow-blue-500/20 mb-6 transform group-hover:scale-105 group-hover:rotate-3 transition-all duration-300" };
const _hoisted_108 = { class: "relative flex flex-col items-center text-center group" };
const _hoisted_109 = { class: "h-20 w-20 rounded-3xl bg-gradient-to-br from-indigo-500 to-indigo-600 flex items-center justify-center text-white shadow-xl shadow-indigo-500/20 mb-6 transform group-hover:scale-105 group-hover:rotate-3 transition-all duration-300" };
const _hoisted_110 = { class: "relative flex flex-col items-center text-center group" };
const _hoisted_111 = { class: "h-20 w-20 rounded-3xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center text-white shadow-xl shadow-purple-500/20 mb-6 transform group-hover:scale-105 group-hover:rotate-3 transition-all duration-300" };
const _hoisted_112 = { class: "relative flex flex-col items-center text-center group" };
const _hoisted_113 = { class: "h-20 w-20 rounded-3xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center text-white shadow-xl shadow-emerald-500/20 mb-6 transform group-hover:scale-105 group-hover:rotate-3 transition-all duration-300" };
const _hoisted_114 = {
  id: "pricing",
  class: "py-20 md:py-28 bg-white border-t border-slate-200"
};
const _hoisted_115 = { class: "max-w-7xl mx-auto px-6 text-center" };
const _hoisted_116 = { class: "flex justify-center items-center space-x-3.5 mb-16" };
const _hoisted_117 = { class: "grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto items-stretch" };
const _hoisted_118 = { class: "bg-white border border-slate-200 rounded-3xl p-8 shadow-sm flex flex-col justify-between text-left group hover:border-slate-400 transition-all" };
const _hoisted_119 = { class: "space-y-3.5 border-t border-slate-100 pt-6" };
const _hoisted_120 = { class: "flex items-center space-x-2.5 text-xs text-slate-600 font-medium" };
const _hoisted_121 = { class: "flex items-center space-x-2.5 text-xs text-slate-600 font-medium" };
const _hoisted_122 = { class: "flex items-center space-x-2.5 text-xs text-slate-600 font-medium" };
const _hoisted_123 = { class: "bg-white border-2 border-blue-600 rounded-3xl p-8 shadow-xl shadow-blue-500/5 flex flex-col justify-between text-left relative transform md:-translate-y-2" };
const _hoisted_124 = { class: "price-box my-6 flex items-baseline" };
const _hoisted_125 = { class: "text-4xl font-black text-slate-900" };
const _hoisted_126 = { class: "space-y-3.5 border-t border-slate-100 pt-6" };
const _hoisted_127 = { class: "flex items-center space-x-2.5 text-xs text-slate-600 font-medium" };
const _hoisted_128 = { class: "flex items-center space-x-2.5 text-xs text-slate-600 font-medium" };
const _hoisted_129 = { class: "flex items-center space-x-2.5 text-xs text-slate-600 font-medium" };
const _hoisted_130 = { class: "flex items-center space-x-2.5 text-xs text-slate-600 font-medium" };
const _hoisted_131 = { class: "bg-white border border-slate-200 rounded-3xl p-8 shadow-sm flex flex-col justify-between text-left group hover:border-slate-400 transition-all" };
const _hoisted_132 = { class: "space-y-3.5 border-t border-slate-100 pt-6" };
const _hoisted_133 = { class: "flex items-center space-x-2.5 text-xs text-slate-600 font-medium" };
const _hoisted_134 = { class: "flex items-center space-x-2.5 text-xs text-slate-600 font-medium" };
const _hoisted_135 = { class: "flex items-center space-x-2.5 text-xs text-slate-600 font-medium" };
const _hoisted_136 = { class: "flex items-center space-x-2.5 text-xs text-slate-600 font-medium" };
const _hoisted_137 = {
  id: "faq",
  class: "py-20 md:py-28 bg-slate-50/50 border-t border-slate-200"
};
const _hoisted_138 = { class: "max-w-4xl mx-auto px-6" };
const _hoisted_139 = { class: "space-y-4" };
const _hoisted_140 = ["onClick"];
const _hoisted_141 = { class: "text-sm font-bold text-slate-800" };
const _hoisted_142 = { class: "bg-white border-t border-slate-200 py-16" };
const _hoisted_143 = { class: "max-w-7xl mx-auto px-6" };
const _hoisted_144 = { class: "grid grid-cols-1 md:grid-cols-12 gap-12 border-b border-slate-200 pb-12 mb-12" };
const _hoisted_145 = { class: "md:col-span-4 flex flex-col items-start text-left" };
const _hoisted_146 = { class: "h-10 w-10 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform" };
const _hoisted_147 = { class: "flex items-center space-x-3" };
const _hoisted_148 = {
  href: "https://twitter.com",
  target: "_blank",
  class: "h-9 w-9 rounded-xl border border-slate-200 hover:border-blue-500 flex items-center justify-center text-slate-400 hover:text-blue-600 transition-all"
};
const _hoisted_149 = {
  href: "",
  target: "_blank",
  class: "h-9 w-9 rounded-xl border border-slate-200 hover:border-blue-500 flex items-center justify-center text-slate-400 hover:text-blue-600 transition-all"
};
const _hoisted_150 = {
  href: "https://facebook.com",
  target: "_blank",
  class: "h-9 w-9 rounded-xl border border-slate-200 hover:border-blue-500 flex items-center justify-center text-slate-400 hover:text-blue-600 transition-all"
};
const _hoisted_151 = { class: "md:col-span-3 flex flex-col items-start text-left" };
const _hoisted_152 = { class: "space-y-3.5" };
const _hoisted_153 = { class: "md:col-span-5 flex flex-col items-start text-left" };
const _hoisted_154 = { class: "bg-slate-50 border border-slate-200 rounded-2xl p-5 w-full flex items-start space-x-4" };
const _hoisted_155 = { class: "h-10 w-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-600 border border-blue-100/50 flex-shrink-0" };
const _hoisted_156 = { class: "flex flex-col sm:flex-row justify-between items-center text-slate-400 text-[11px] font-semibold" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "LandingPage",
  setup(__props) {
    const hasScrolled = ref(false);
    onMounted(() => {
      window.addEventListener("scroll", () => {
        hasScrolled.value = window.scrollY > 20;
      });
    });
    const mobileMenuOpen = ref(false);
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
    const heroSeats = ref([
      { id: "A-01", label: "Desk 01", status: "available", zone: "Zone A", type: "Single Desk", power: true },
      { id: "A-02", label: "Desk 02", status: "occupied", student: "Sarah K. (Checked In)", zone: "Zone A", type: "Single Desk", power: true },
      { id: "A-03", label: "Desk 03", status: "reserved", zone: "Zone A", type: "Window Seat", power: false },
      { id: "A-04", label: "Desk 04", status: "available", zone: "Zone A", type: "Single Desk", power: true },
      { id: "B-01", label: "Desk 05", status: "occupied", student: "Alex M. (Checked In)", zone: "Zone B", type: "Study Pod", power: true },
      { id: "B-02", label: "Desk 06", status: "available", zone: "Zone B", type: "Study Pod", power: true },
      { id: "B-03", label: "Desk 07", status: "reserved", zone: "Zone B", type: "Window Seat", power: true },
      { id: "B-04", label: "Desk 08", status: "occupied", student: "John D. (Checked In)", zone: "Zone B", type: "Single Desk", power: false },
      { id: "C-01", label: "Desk 09", status: "available", zone: "Zone C", type: "Silent Area", power: true },
      { id: "C-02", label: "Desk 10", status: "occupied", student: "Priya R. (Checked In)", zone: "Zone C", type: "Silent Area", power: true },
      { id: "C-03", label: "Desk 11", status: "available", zone: "Zone C", type: "Silent Area", power: true },
      { id: "C-04", label: "Desk 12", status: "selected", zone: "Zone C", type: "Silent Area", power: true }
    ]);
    const selectedHeroSeatId = ref("C-04");
    const selectedHeroSeatDetails = computed(() => {
      return heroSeats.value.find((s) => s.id === selectedHeroSeatId.value);
    });
    const selectHeroSeat = (id) => {
      heroSeats.value = heroSeats.value.map((s) => {
        if (s.status === "selected") {
          return { ...s, status: "available" };
        }
        if (s.id === id) {
          if (s.status === "occupied") {
            selectedHeroSeatId.value = id;
            return s;
          }
          if (s.status === "reserved") {
            selectedHeroSeatId.value = id;
            return s;
          }
          selectedHeroSeatId.value = id;
          return { ...s, status: "selected" };
        }
        return s;
      });
    };
    const mockSeats = ref([
      { id: 1, label: "A1", status: "available" },
      { id: 2, label: "A2", status: "booked" },
      { id: 3, label: "A3", status: "available" },
      { id: 4, label: "A4", status: "available" },
      { id: 5, label: "B1", status: "booked" },
      { id: 6, label: "B2", status: "selected" },
      { id: 7, label: "B3", status: "booked" },
      { id: 8, label: "B4", status: "available" },
      { id: 9, label: "C1", status: "available" },
      { id: 10, label: "C2", status: "available" },
      { id: 11, label: "C3", status: "booked" },
      { id: 12, label: "C4", status: "available" }
    ]);
    const toggleMockSeat = (id) => {
      mockSeats.value = mockSeats.value.map((s) => {
        if (s.id === id) {
          return { ...s, status: s.status === "selected" ? "available" : "selected" };
        }
        if (s.status === "selected") {
          return { ...s, status: "available" };
        }
        return s;
      });
    };
    const selectedSeatLabel = computed(() => {
      const sel = mockSeats.value.find((s) => s.status === "selected");
      return sel ? sel.label : "";
    });
    const activeChallengeTab = ref("students");
    ref(0);
    const mockSearchQuery = ref("");
    const mockBooks = [
      { title: "Principles of Accounting", author: "Jerry J. Weygandt" },
      { title: "Financial Management: Theory", author: "Eugene F. Brigham" },
      { title: "Advanced Corporate Finance", author: "Joseph P. Ogden" },
      { title: "Introduction to Auditing", author: "Lawrence R. Sawyer" },
      { title: "Economic Principles & Law", author: "N. Gregory Mankiw" }
    ];
    const filteredMockBooks = computed(() => {
      if (!mockSearchQuery.value) return mockBooks;
      return mockBooks.filter(
        (b) => b.title.toLowerCase().includes(mockSearchQuery.value.toLowerCase()) || b.author.toLowerCase().includes(mockSearchQuery.value.toLowerCase())
      );
    });
    const mockEvents = ref([
      { title: "CA Exam Strategy Seminar", category: "Workshop", time: "Today at 3:00 PM", registered: false },
      { title: "Corporate Finance Group", category: "Discussion Group", time: "Tomorrow at 1:00 PM", registered: true }
    ]);
    const isAnnual = ref(false);
    const faqList = ref([
      {
        question: "How do I check in to my reserved seat?",
        answer: "Go to your reserved seat in the library. Each seat has a unique QR code — scan it using the SmartLib app on your smartphone. The system will check you in, mark the seat as occupied, and display your check-in confirmation.",
        open: false
      },
      {
        question: "Is there a limit on how long I can occupy a desk?",
        answer: "Standard reservations are set for 4 hours. You can easily extend your session from the dashboard if the seat has no subsequent bookings reserved by other students.",
        open: false
      },
      {
        question: "How do I earn and redeem loyalty rewards points?",
        answer: "You earn 10 points for each hour you spend studying at your reserved desk. Points can be redeemed for workspace boosts, reservations extensions, and coffee voucher passes in the student loyalty shop.",
        open: false
      },
      {
        question: "Can I borrow physical books through the portal?",
        answer: 'Yes. Search the digital catalog, select the book details, click "Request Hold", and scan your QR code at the desk within 48 hours to collect it from the librarian.',
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
                  createVNode(unref(BookOpen), { class: "h-5.5 w-5.5" })
                ]),
                _cache[14] || (_cache[14] = createBaseVNode("div", { class: "flex flex-col" }, [
                  createBaseVNode("span", { class: "text-lg font-extrabold text-slate-900 leading-none tracking-tight" }, "SmartLib"),
                  createBaseVNode("span", { class: "text-[10px] font-semibold text-blue-600 tracking-wider uppercase mt-0.5" }, "Library Hub")
                ], -1))
              ]),
              _: 1
            }),
            _cache[16] || (_cache[16] = createStaticVNode('<nav class="hidden md:flex items-center space-x-8" data-v-57c66e47><a href="#features" class="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors" data-v-57c66e47>Features</a><a href="#how-it-works" class="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors" data-v-57c66e47>How It Works</a><a href="#pricing" class="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors" data-v-57c66e47>Pricing</a><a href="#faq" class="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors" data-v-57c66e47>FAQ</a></nav>', 1)),
            createBaseVNode("div", _hoisted_3, [
              createVNode(_component_router_link, {
                to: "/login",
                class: "px-5 py-2.5 rounded-full text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 active:scale-98 shadow-md shadow-blue-500/10 hover:shadow-blue-500/25 transition-all"
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
                  class: "h-6 w-6"
                })) : (openBlock(), createBlock(unref(X), {
                  key: 1,
                  class: "h-6 w-6"
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
                  class: "text-base font-semibold text-slate-700 py-2 border-b border-slate-100"
                }, "Features"),
                createBaseVNode("a", {
                  onClick: _cache[2] || (_cache[2] = ($event) => mobileMenuOpen.value = false),
                  href: "#how-it-works",
                  class: "text-base font-semibold text-slate-700 py-2 border-b border-slate-100"
                }, "How It Works"),
                createBaseVNode("a", {
                  onClick: _cache[3] || (_cache[3] = ($event) => mobileMenuOpen.value = false),
                  href: "#pricing",
                  class: "text-base font-semibold text-slate-700 py-2 border-b border-slate-100"
                }, "Pricing"),
                createBaseVNode("a", {
                  onClick: _cache[4] || (_cache[4] = ($event) => mobileMenuOpen.value = false),
                  href: "#faq",
                  class: "text-base font-semibold text-slate-700 py-2 border-b border-slate-100"
                }, "FAQ"),
                createVNode(_component_router_link, {
                  to: "/login",
                  onClick: _cache[5] || (_cache[5] = ($event) => mobileMenuOpen.value = false),
                  class: "w-full text-center py-3 rounded-2xl text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-md shadow-blue-500/10 transition-all"
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
                _cache[21] || (_cache[21] = createBaseVNode("h1", { class: "text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-none text-slate-900 mb-6" }, [
                  createTextVNode(" Smart Library"),
                  createBaseVNode("br"),
                  createTextVNode("Management"),
                  createBaseVNode("br"),
                  createBaseVNode("span", { class: "text-blue-650 bg-gradient-to-r from-blue-650 to-blue-500 bg-clip-text text-transparent" }, "For Modern Institutions")
                ], -1)),
                _cache[22] || (_cache[22] = createBaseVNode("p", { class: "text-lg text-slate-600 mb-8 max-w-xl leading-relaxed" }, " Manage students, books, seat bookings, and borrowing in one clean, intelligent platform. Perfect for schools, colleges, and educational academies. ", -1)),
                createBaseVNode("div", _hoisted_10, [
                  createVNode(_component_router_link, {
                    to: "/register",
                    class: "px-8 py-4 rounded-2xl text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 active:scale-98 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/35 transition-all text-center flex items-center justify-center gap-2"
                  }, {
                    default: withCtx(() => [
                      _cache[19] || (_cache[19] = createBaseVNode("span", null, "Start Free Today", -1)),
                      createVNode(unref(ChevronRight), { class: "h-4.5 w-4.5" })
                    ]),
                    _: 1
                  }),
                  _cache[20] || (_cache[20] = createBaseVNode("a", {
                    href: "#contact",
                    class: "px-8 py-4 rounded-2xl text-sm font-bold text-slate-750 bg-slate-100 hover:bg-slate-200 active:scale-98 transition-all text-center"
                  }, " Request Demo ", -1))
                ])
              ]),
              createBaseVNode("div", _hoisted_11, [
                _cache[32] || (_cache[32] = createBaseVNode("div", { class: "absolute -inset-4 bg-blue-200/30 rounded-full blur-3xl opacity-60" }, null, -1)),
                createBaseVNode("div", _hoisted_12, [
                  createBaseVNode("div", _hoisted_13, [
                    _cache[30] || (_cache[30] = createStaticVNode('<div class="flex justify-between items-center border-b border-slate-100 pb-3 mb-4" data-v-57c66e47><div class="flex items-center space-x-2" data-v-57c66e47><div class="w-3 h-3 rounded-full bg-red-400" data-v-57c66e47></div><div class="w-3 h-3 rounded-full bg-yellow-400" data-v-57c66e47></div><div class="w-3 h-3 rounded-full bg-green-400" data-v-57c66e47></div></div><span class="text-[10px] bg-blue-50 border border-blue-100 text-blue-600 px-3 py-1 rounded-full font-bold uppercase tracking-wider" data-v-57c66e47>Live Library Floor Map (2D)</span></div>', 1)),
                    createBaseVNode("div", _hoisted_14, [
                      _cache[25] || (_cache[25] = createBaseVNode("div", { class: "flex justify-between items-center mb-3 text-[9px] font-bold text-slate-400 px-1 uppercase tracking-wider" }, [
                        createBaseVNode("span", null, "Entrance"),
                        createBaseVNode("span", { class: "text-blue-600 bg-blue-50 px-2 py-0.5 rounded border border-blue-100" }, "Main Zone"),
                        createBaseVNode("span", null, "Book Stacks")
                      ], -1)),
                      createBaseVNode("div", _hoisted_15, [
                        _cache[23] || (_cache[23] = createBaseVNode("div", { class: "col-span-2 bg-slate-200/80 border border-slate-300/80 rounded-lg flex flex-col justify-around items-center py-2 text-[8px] font-black text-slate-500 uppercase tracking-tight select-none" }, [
                          createBaseVNode("span", null, "S"),
                          createBaseVNode("span", null, "T"),
                          createBaseVNode("span", null, "A"),
                          createBaseVNode("span", null, "C"),
                          createBaseVNode("span", null, "K"),
                          createBaseVNode("span", null, "S")
                        ], -1)),
                        createBaseVNode("div", _hoisted_16, [
                          (openBlock(true), createElementBlock(Fragment, null, renderList(heroSeats.value, (seat) => {
                            return openBlock(), createElementBlock("button", {
                              key: seat.id,
                              onClick: ($event) => selectHeroSeat(seat.id),
                              class: normalizeClass([
                                "relative h-10 rounded-lg border flex flex-col items-center justify-center transition-all duration-200",
                                seat.status === "occupied" ? "bg-rose-50 border-rose-200 text-rose-700 hover:bg-rose-100" : seat.status === "reserved" ? "bg-amber-50 border-amber-200 text-amber-700 hover:bg-amber-100" : seat.status === "selected" ? "bg-blue-650 border-blue-700 text-white scale-105 shadow-md shadow-blue-500/25" : "bg-emerald-50/50 border-emerald-200 text-emerald-700 hover:bg-emerald-50 hover:border-emerald-300"
                              ])
                            }, [
                              createBaseVNode("span", _hoisted_18, toDisplayString(seat.id), 1),
                              createBaseVNode("span", {
                                class: normalizeClass([
                                  "absolute top-1 right-1 w-1.5 h-1.5 rounded-full",
                                  seat.status === "occupied" ? "bg-rose-500 animate-pulse" : seat.status === "reserved" ? "bg-amber-500" : seat.status === "selected" ? "bg-white" : "bg-emerald-500"
                                ])
                              }, null, 2)
                            ], 10, _hoisted_17);
                          }), 128))
                        ]),
                        _cache[24] || (_cache[24] = createBaseVNode("div", { class: "col-span-2 bg-slate-200/80 border border-slate-300/80 rounded-lg flex flex-col justify-around items-center py-2 text-[8px] font-black text-slate-500 uppercase tracking-tight select-none" }, [
                          createBaseVNode("span", null, "S"),
                          createBaseVNode("span", null, "T"),
                          createBaseVNode("span", null, "A"),
                          createBaseVNode("span", null, "C"),
                          createBaseVNode("span", null, "K"),
                          createBaseVNode("span", null, "S")
                        ], -1))
                      ]),
                      _cache[26] || (_cache[26] = createStaticVNode('<div class="flex justify-center items-center gap-3 mt-3 pt-3 border-t border-slate-100 flex-wrap text-[8px] font-bold text-slate-500" data-v-57c66e47><span class="flex items-center gap-1" data-v-57c66e47><span class="w-1.5 h-1.5 rounded-full bg-emerald-500" data-v-57c66e47></span> Available</span><span class="flex items-center gap-1" data-v-57c66e47><span class="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse" data-v-57c66e47></span> Occupied</span><span class="flex items-center gap-1" data-v-57c66e47><span class="w-1.5 h-1.5 rounded-full bg-amber-500" data-v-57c66e47></span> Reserved</span><span class="flex items-center gap-1" data-v-57c66e47><span class="w-1.5 h-1.5 rounded-full bg-blue-650" data-v-57c66e47></span> Selected</span></div>', 1))
                    ]),
                    selectedHeroSeatDetails.value ? (openBlock(), createElementBlock("div", _hoisted_19, [
                      createBaseVNode("div", _hoisted_20, [
                        createBaseVNode("div", null, [
                          createBaseVNode("span", _hoisted_21, toDisplayString(selectedHeroSeatDetails.value.zone) + " • " + toDisplayString(selectedHeroSeatDetails.value.type), 1),
                          createBaseVNode("h4", _hoisted_22, [
                            createVNode(unref(MapPin), { class: "h-3.5 w-3.5 text-slate-400" }),
                            createTextVNode(" Desk " + toDisplayString(selectedHeroSeatDetails.value.id), 1)
                          ])
                        ]),
                        createBaseVNode("div", _hoisted_23, [
                          createBaseVNode("span", {
                            class: normalizeClass([
                              "text-[9px] font-black px-2 py-0.5 rounded-md border inline-block uppercase tracking-wider",
                              selectedHeroSeatDetails.value.status === "occupied" ? "bg-rose-50 border-rose-250 text-rose-700" : selectedHeroSeatDetails.value.status === "reserved" ? "bg-amber-50 border-amber-250 text-amber-700" : selectedHeroSeatDetails.value.status === "selected" ? "bg-blue-50 border-blue-250 text-blue-700" : "bg-emerald-50 border-emerald-250 text-emerald-700"
                            ])
                          }, toDisplayString(selectedHeroSeatDetails.value.status === "occupied" ? "Occupied" : selectedHeroSeatDetails.value.status === "reserved" ? "Reserved" : selectedHeroSeatDetails.value.status === "selected" ? "Selected" : "Available"), 3)
                        ])
                      ]),
                      createBaseVNode("div", _hoisted_24, [
                        createBaseVNode("div", _hoisted_25, [
                          createVNode(unref(Zap), {
                            class: normalizeClass(["h-3.5 w-3.5", selectedHeroSeatDetails.value.power ? "text-amber-500 fill-amber-500/20" : "text-slate-350"])
                          }, null, 8, ["class"]),
                          createBaseVNode("span", null, toDisplayString(selectedHeroSeatDetails.value.power ? "Power Outlet" : "No Outlet"), 1)
                        ]),
                        createBaseVNode("div", _hoisted_26, [
                          selectedHeroSeatDetails.value.status === "occupied" ? (openBlock(), createElementBlock("span", _hoisted_27, [
                            createVNode(unref(User), { class: "h-3.5 w-3.5" }),
                            createBaseVNode("span", null, toDisplayString(selectedHeroSeatDetails.value.student), 1)
                          ])) : selectedHeroSeatDetails.value.status === "reserved" ? (openBlock(), createElementBlock("span", _hoisted_28, [
                            createVNode(unref(QrCode), { class: "h-3.5 w-3.5 text-amber-500" }),
                            _cache[27] || (_cache[27] = createBaseVNode("span", null, "Scan QR at desk to occupy", -1))
                          ])) : selectedHeroSeatDetails.value.status === "selected" ? (openBlock(), createElementBlock("span", _hoisted_29, [
                            createVNode(unref(Check), { class: "h-3.5 w-3.5" }),
                            _cache[28] || (_cache[28] = createBaseVNode("span", null, "Selected (Click to Reserve)", -1))
                          ])) : (openBlock(), createElementBlock("span", _hoisted_30, [
                            createVNode(unref(Check), { class: "h-3.5 w-3.5" }),
                            _cache[29] || (_cache[29] = createBaseVNode("span", null, "Ready to Book", -1))
                          ]))
                        ])
                      ])
                    ])) : createCommentVNode("", true)
                  ]),
                  createBaseVNode("div", _hoisted_31, [
                    createBaseVNode("div", _hoisted_32, [
                      createVNode(unref(TrendingUp), { class: "h-5 w-5" })
                    ]),
                    _cache[31] || (_cache[31] = createBaseVNode("div", { class: "text-left" }, [
                      createBaseVNode("p", { class: "text-[10px] font-bold text-slate-400 uppercase tracking-wider" }, "Occupancy Rate"),
                      createBaseVNode("p", { class: "text-lg font-black text-slate-800 leading-none mt-1" }, "94.8%")
                    ], -1))
                  ])
                ])
              ])
            ])
          ])
        ]),
        _cache[130] || (_cache[130] = createStaticVNode('<section class="border-y border-slate-200 bg-slate-50/50 py-10" data-v-57c66e47><div class="max-w-7xl mx-auto px-6" data-v-57c66e47><div class="grid grid-cols-2 lg:grid-cols-4 gap-8" data-v-57c66e47><div class="text-center group" data-v-57c66e47><h3 class="text-3xl sm:text-4xl font-black text-blue-600 group-hover:scale-105 transition-transform inline-block" data-v-57c66e47>12,500+</h3><p class="text-sm font-bold text-slate-500 mt-2 uppercase tracking-wider" data-v-57c66e47>Active Students</p></div><div class="text-center group" data-v-57c66e47><h3 class="text-3xl sm:text-4xl font-black text-blue-600 group-hover:scale-105 transition-transform inline-block" data-v-57c66e47>24+</h3><p class="text-sm font-bold text-slate-500 mt-2 uppercase tracking-wider" data-v-57c66e47>Library Locations</p></div><div class="text-center group" data-v-57c66e47><h3 class="text-3xl sm:text-4xl font-black text-blue-600 group-hover:scale-105 transition-transform inline-block" data-v-57c66e47>45,000+</h3><p class="text-sm font-bold text-slate-500 mt-2 uppercase tracking-wider" data-v-57c66e47>Total Bookings</p></div><div class="text-center group" data-v-57c66e47><h3 class="text-3xl sm:text-4xl font-black text-blue-600 group-hover:scale-105 transition-transform inline-block" data-v-57c66e47>98%</h3><p class="text-sm font-bold text-slate-500 mt-2 uppercase tracking-wider" data-v-57c66e47>Satisfaction Rate</p></div></div></div></section>', 1)),
        createBaseVNode("section", _hoisted_33, [
          _cache[70] || (_cache[70] = createBaseVNode("div", { class: "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-blue-50/30 blur-3xl pointer-events-none" }, null, -1)),
          createBaseVNode("div", _hoisted_34, [
            createBaseVNode("div", _hoisted_35, [
              createBaseVNode("span", _hoisted_36, [
                createVNode(unref(CircleAlert), { class: "h-3.5 w-3.5" }),
                _cache[33] || (_cache[33] = createBaseVNode("span", null, "The Daily Struggle", -1))
              ]),
              _cache[34] || (_cache[34] = createBaseVNode("h2", { class: "text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4" }, " The Challenges You Face Everyday ", -1)),
              _cache[35] || (_cache[35] = createBaseVNode("p", { class: "text-base text-slate-500 leading-relaxed font-semibold" }, " Both students and library administrators lose valuable time dealing with outdated, manual processes that hold everyone back. ", -1))
            ]),
            createBaseVNode("div", _hoisted_37, [
              createBaseVNode("div", _hoisted_38, [
                createBaseVNode("button", {
                  onClick: _cache[6] || (_cache[6] = ($event) => activeChallengeTab.value = "students"),
                  class: normalizeClass([
                    "px-6 py-3 rounded-xl text-xs font-extrabold flex items-center gap-2.5 transition-all select-none border",
                    activeChallengeTab.value === "students" ? "bg-red-50 border-red-200 text-red-700 shadow-sm" : "bg-transparent border-transparent text-slate-500 hover:text-slate-800"
                  ])
                }, [
                  createVNode(unref(GraduationCap), { class: "h-4.5 w-4.5" }),
                  _cache[36] || (_cache[36] = createBaseVNode("span", null, "For Students", -1))
                ], 2),
                createBaseVNode("button", {
                  onClick: _cache[7] || (_cache[7] = ($event) => activeChallengeTab.value = "librarians"),
                  class: normalizeClass([
                    "px-6 py-3 rounded-xl text-xs font-extrabold flex items-center gap-2.5 transition-all select-none border",
                    activeChallengeTab.value === "librarians" ? "bg-amber-50 border-amber-250 text-amber-800 shadow-sm" : "bg-transparent border-transparent text-slate-500 hover:text-slate-800"
                  ])
                }, [
                  createVNode(unref(Briefcase), { class: "h-4.5 w-4.5" }),
                  _cache[37] || (_cache[37] = createBaseVNode("span", null, "For Librarians", -1))
                ], 2)
              ])
            ]),
            createVNode(Transition, {
              name: "fade-slide-spotlight",
              mode: "out-in"
            }, {
              default: withCtx(() => [
                activeChallengeTab.value === "students" ? (openBlock(), createElementBlock("div", _hoisted_39, [
                  createBaseVNode("div", _hoisted_40, [
                    createBaseVNode("div", null, [
                      createBaseVNode("div", _hoisted_41, [
                        createBaseVNode("div", _hoisted_42, [
                          createVNode(unref(Ban), { class: "h-5.5 w-5.5" })
                        ]),
                        _cache[38] || (_cache[38] = createBaseVNode("span", { class: "text-xs font-black text-slate-300" }, "01 / Outdated", -1))
                      ]),
                      _cache[39] || (_cache[39] = createBaseVNode("h4", { class: "text-base font-extrabold text-slate-900 mb-2" }, "No Available Seats", -1)),
                      _cache[40] || (_cache[40] = createBaseVNode("p", { class: "text-xs text-slate-500 leading-relaxed font-semibold mb-6" }, " Arriving at the library only to find every desk occupied. Without real-time tracking, finding a study spot is a constant gamble. ", -1))
                    ]),
                    _cache[41] || (_cache[41] = createBaseVNode("div", { class: "bg-emerald-50/50 border border-emerald-100/80 rounded-2xl p-4 mt-auto" }, [
                      createBaseVNode("span", { class: "text-[9px] font-black uppercase text-emerald-650 bg-emerald-100/50 px-2 py-0.5 rounded-md inline-block mb-1.5 select-none" }, " SmartLib Fix "),
                      createBaseVNode("p", { class: "text-xs font-bold text-slate-800" }, " Live seat maps & instant desk booking. ")
                    ], -1))
                  ]),
                  createBaseVNode("div", _hoisted_43, [
                    createBaseVNode("div", null, [
                      createBaseVNode("div", _hoisted_44, [
                        createBaseVNode("div", _hoisted_45, [
                          createVNode(unref(Hourglass), { class: "h-5.5 w-5.5" })
                        ]),
                        _cache[42] || (_cache[42] = createBaseVNode("span", { class: "text-xs font-black text-slate-300" }, "02 / Outdated", -1))
                      ]),
                      _cache[43] || (_cache[43] = createBaseVNode("h4", { class: "text-base font-extrabold text-slate-900 mb-2" }, "Tedious Manual Check-In", -1)),
                      _cache[44] || (_cache[44] = createBaseVNode("p", { class: "text-xs text-slate-500 leading-relaxed font-semibold mb-6" }, " Standing in long lines or writing details in paper logs just to occupy a seat you already reserved online. ", -1))
                    ]),
                    _cache[45] || (_cache[45] = createBaseVNode("div", { class: "bg-emerald-50/50 border border-emerald-100/80 rounded-2xl p-4 mt-auto" }, [
                      createBaseVNode("span", { class: "text-[9px] font-black uppercase text-emerald-655 bg-emerald-100/50 px-2 py-0.5 rounded-md inline-block mb-1.5 select-none" }, " SmartLib Fix "),
                      createBaseVNode("p", { class: "text-xs font-bold text-slate-800" }, " Instant QR seat check-in at your desk. ")
                    ], -1))
                  ]),
                  createBaseVNode("div", _hoisted_46, [
                    createBaseVNode("div", null, [
                      createBaseVNode("div", _hoisted_47, [
                        createBaseVNode("div", _hoisted_48, [
                          createVNode(unref(Frown), { class: "h-5.5 w-5.5" })
                        ]),
                        _cache[46] || (_cache[46] = createBaseVNode("span", { class: "text-xs font-black text-slate-300" }, "03 / Outdated", -1))
                      ]),
                      _cache[47] || (_cache[47] = createBaseVNode("h4", { class: "text-base font-extrabold text-slate-900 mb-2" }, "Untracked Study Progress", -1)),
                      _cache[48] || (_cache[48] = createBaseVNode("p", { class: "text-xs text-slate-500 leading-relaxed font-semibold mb-6" }, " No clear way to log study sessions, analyze peak productivity hours, or stay motivated during exam prep. ", -1))
                    ]),
                    _cache[49] || (_cache[49] = createBaseVNode("div", { class: "bg-emerald-50/50 border border-emerald-100/80 rounded-2xl p-4 mt-auto" }, [
                      createBaseVNode("span", { class: "text-[9px] font-black uppercase text-emerald-650 bg-emerald-100/50 px-2 py-0.5 rounded-md inline-block mb-1.5 select-none" }, " SmartLib Fix "),
                      createBaseVNode("p", { class: "text-xs font-bold text-slate-800" }, " Visual productivity charts & rewards. ")
                    ], -1))
                  ]),
                  createBaseVNode("div", _hoisted_49, [
                    createBaseVNode("div", null, [
                      createBaseVNode("div", _hoisted_50, [
                        createBaseVNode("div", _hoisted_51, [
                          createVNode(unref(BookOpen), { class: "h-5.5 w-5.5" })
                        ]),
                        _cache[50] || (_cache[50] = createBaseVNode("span", { class: "text-xs font-black text-slate-300" }, "04 / Outdated", -1))
                      ]),
                      _cache[51] || (_cache[51] = createBaseVNode("h4", { class: "text-base font-extrabold text-slate-900 mb-2" }, "Scattered Resources", -1)),
                      _cache[52] || (_cache[52] = createBaseVNode("p", { class: "text-xs text-slate-500 leading-relaxed font-semibold mb-6" }, " Hunting down textbooks or course reserves across physical shelves without knowing if they are checked out. ", -1))
                    ]),
                    _cache[53] || (_cache[53] = createBaseVNode("div", { class: "bg-emerald-50/50 border border-emerald-100/80 rounded-2xl p-4 mt-auto" }, [
                      createBaseVNode("span", { class: "text-[9px] font-black uppercase text-emerald-650 bg-emerald-100/50 px-2 py-0.5 rounded-md inline-block mb-1.5 select-none" }, " SmartLib Fix "),
                      createBaseVNode("p", { class: "text-xs font-bold text-slate-800" }, " Integrated digital catalog search. ")
                    ], -1))
                  ])
                ])) : activeChallengeTab.value === "librarians" ? (openBlock(), createElementBlock("div", _hoisted_52, [
                  createBaseVNode("div", _hoisted_53, [
                    createBaseVNode("div", null, [
                      createBaseVNode("div", _hoisted_54, [
                        createBaseVNode("div", _hoisted_55, [
                          createVNode(unref(ClipboardList), { class: "h-5.5 w-5.5" })
                        ]),
                        _cache[54] || (_cache[54] = createBaseVNode("span", { class: "text-xs font-black text-slate-300" }, "01 / Outdated", -1))
                      ]),
                      _cache[55] || (_cache[55] = createBaseVNode("h4", { class: "text-base font-extrabold text-slate-900 mb-2" }, "Paper Attendance Logs", -1)),
                      _cache[56] || (_cache[56] = createBaseVNode("p", { class: "text-xs text-slate-500 leading-relaxed font-semibold mb-6" }, " Manually recording every student entry in paper registers. Messy handwritten records that are unreliable and hard to audit. ", -1))
                    ]),
                    _cache[57] || (_cache[57] = createBaseVNode("div", { class: "bg-emerald-50/50 border border-emerald-100/80 rounded-2xl p-4 mt-auto" }, [
                      createBaseVNode("span", { class: "text-[9px] font-black uppercase text-emerald-650 bg-emerald-100/50 px-2 py-0.5 rounded-md inline-block mb-1.5 select-none" }, " SmartLib Fix "),
                      createBaseVNode("p", { class: "text-xs font-bold text-slate-800" }, " Automated digital attendance tracking. ")
                    ], -1))
                  ]),
                  createBaseVNode("div", _hoisted_56, [
                    createBaseVNode("div", null, [
                      createBaseVNode("div", _hoisted_57, [
                        createBaseVNode("div", _hoisted_58, [
                          createVNode(unref(EyeOff), { class: "h-5.5 w-5.5" })
                        ]),
                        _cache[58] || (_cache[58] = createBaseVNode("span", { class: "text-xs font-black text-slate-300" }, "02 / Outdated", -1))
                      ]),
                      _cache[59] || (_cache[59] = createBaseVNode("h4", { class: "text-base font-extrabold text-slate-900 mb-2" }, "No Real-Time Seat Visibility", -1)),
                      _cache[60] || (_cache[60] = createBaseVNode("p", { class: "text-xs text-slate-500 leading-relaxed font-semibold mb-6" }, " Unable to see which seats are occupied or available without physically walking the floor. No data to manage capacity. ", -1))
                    ]),
                    _cache[61] || (_cache[61] = createBaseVNode("div", { class: "bg-emerald-50/50 border border-emerald-100/80 rounded-2xl p-4 mt-auto" }, [
                      createBaseVNode("span", { class: "text-[9px] font-black uppercase text-emerald-650 bg-emerald-100/50 px-2 py-0.5 rounded-md inline-block mb-1.5 select-none" }, " SmartLib Fix "),
                      createBaseVNode("p", { class: "text-xs font-bold text-slate-850" }, " Live occupancy dashboard & analytics. ")
                    ], -1))
                  ]),
                  createBaseVNode("div", _hoisted_59, [
                    createBaseVNode("div", null, [
                      createBaseVNode("div", _hoisted_60, [
                        createBaseVNode("div", _hoisted_61, [
                          createVNode(unref(UserX), { class: "h-5.5 w-5.5" })
                        ]),
                        _cache[62] || (_cache[62] = createBaseVNode("span", { class: "text-xs font-black text-slate-300" }, "03 / Outdated", -1))
                      ]),
                      _cache[63] || (_cache[63] = createBaseVNode("h4", { class: "text-base font-extrabold text-slate-900 mb-2" }, "Ghost Reservations", -1)),
                      _cache[64] || (_cache[64] = createBaseVNode("p", { class: "text-xs text-slate-500 leading-relaxed font-semibold mb-6" }, " Students reserve seats but never show up, leaving desks blocked while others search. No way to auto-release unused bookings. ", -1))
                    ]),
                    _cache[65] || (_cache[65] = createBaseVNode("div", { class: "bg-emerald-50/50 border border-emerald-100/80 rounded-2xl p-4 mt-auto" }, [
                      createBaseVNode("span", { class: "text-[9px] font-black uppercase text-emerald-650 bg-emerald-100/50 px-2 py-0.5 rounded-md inline-block mb-1.5 select-none" }, " SmartLib Fix "),
                      createBaseVNode("p", { class: "text-xs font-bold text-slate-800" }, " Auto-release unchecked-in reservations. ")
                    ], -1))
                  ]),
                  createBaseVNode("div", _hoisted_62, [
                    createBaseVNode("div", null, [
                      createBaseVNode("div", _hoisted_63, [
                        createBaseVNode("div", _hoisted_64, [
                          createVNode(unref(Search), { class: "h-5.5 w-5.5" })
                        ]),
                        _cache[66] || (_cache[66] = createBaseVNode("span", { class: "text-xs font-black text-slate-300" }, "04 / Outdated", -1))
                      ]),
                      _cache[67] || (_cache[67] = createBaseVNode("h4", { class: "text-base font-extrabold text-slate-900 mb-2" }, "Manual Catalog Audits", -1)),
                      _cache[68] || (_cache[68] = createBaseVNode("p", { class: "text-xs text-slate-500 leading-relaxed font-semibold mb-6" }, " Losing hours cross-checking physical books against borrowing logs to identify missing items. ", -1))
                    ]),
                    _cache[69] || (_cache[69] = createBaseVNode("div", { class: "bg-emerald-50/50 border border-emerald-100/80 rounded-2xl p-4 mt-auto" }, [
                      createBaseVNode("span", { class: "text-[9px] font-black uppercase text-emerald-650 bg-emerald-100/50 px-2 py-0.5 rounded-md inline-block mb-1.5 select-none" }, " SmartLib Fix "),
                      createBaseVNode("p", { class: "text-xs font-bold text-slate-800" }, " Live borrow tracking & overdue alerts. ")
                    ], -1))
                  ])
                ])) : createCommentVNode("", true)
              ]),
              _: 1
            })
          ])
        ]),
        createBaseVNode("section", _hoisted_65, [
          _cache[81] || (_cache[81] = createBaseVNode("div", { class: "absolute left-[-10%] top-[-10%] w-[500px] h-[500px] rounded-full bg-blue-50/40 blur-3xl pointer-events-none" }, null, -1)),
          _cache[82] || (_cache[82] = createBaseVNode("div", { class: "absolute right-[-10%] bottom-[-10%] w-[500px] h-[500px] rounded-full bg-indigo-50/30 blur-3xl pointer-events-none" }, null, -1)),
          createBaseVNode("div", _hoisted_66, [
            _cache[80] || (_cache[80] = createStaticVNode('<div class="text-center max-w-3xl mx-auto mb-20" data-v-57c66e47><div class="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-blue-50 border border-blue-100 text-blue-600 mb-4 select-none" data-v-57c66e47><span class="w-1.5 h-1.5 rounded-full bg-blue-600 animate-ping" data-v-57c66e47></span><span data-v-57c66e47>Feature Showcase</span></div><h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4" data-v-57c66e47> Everything You Need for Modern Study </h2><p class="text-base text-slate-500 leading-relaxed font-semibold" data-v-57c66e47> Interactive floor maps, digitised catalogues, real-time analytics and automatic notifications in a single, lightning-fast platform. </p></div>', 1)),
            createBaseVNode("div", _hoisted_67, [
              createBaseVNode("div", _hoisted_68, [
                (openBlock(), createElementBlock(Fragment, null, renderList(featuresList, (feature, idx) => {
                  return createBaseVNode("button", {
                    key: feature.tabTitle,
                    onClick: ($event) => activeFeature.value = idx,
                    class: normalizeClass([
                      "w-full text-left p-4.5 rounded-2xl border transition-all duration-300 flex items-start gap-4 select-none relative overflow-hidden group",
                      activeFeature.value === idx ? "bg-white border-blue-200 shadow-md shadow-blue-500/5" : "bg-white/60 border-slate-200/60 hover:bg-white hover:border-slate-300"
                    ])
                  }, [
                    createBaseVNode("div", {
                      class: normalizeClass([
                        "absolute left-0 top-0 bottom-0 w-1 transition-all duration-300",
                        activeFeature.value === idx ? "bg-blue-600" : "bg-transparent group-hover:bg-slate-350"
                      ])
                    }, null, 2),
                    createBaseVNode("div", {
                      class: normalizeClass([
                        "h-10 w-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors border",
                        activeFeature.value === idx ? "bg-blue-50 border-blue-100 text-blue-600" : "bg-slate-50 border-slate-100 text-slate-400 group-hover:text-slate-655"
                      ])
                    }, [
                      (openBlock(), createBlock(resolveDynamicComponent(feature.tabIcon), { class: "h-5 w-5" }))
                    ], 2),
                    createBaseVNode("div", _hoisted_70, [
                      createBaseVNode("span", {
                        class: normalizeClass([
                          "text-xs font-black transition-colors block mb-0.5",
                          activeFeature.value === idx ? "text-blue-600" : "text-slate-700"
                        ])
                      }, toDisplayString(feature.tabTitle), 3),
                      createBaseVNode("span", _hoisted_71, toDisplayString(feature.description), 1)
                    ])
                  ], 10, _hoisted_69);
                }), 64))
              ]),
              createBaseVNode("div", _hoisted_72, [
                createBaseVNode("div", _hoisted_73, [
                  createVNode(Transition, {
                    name: "fade-slide-spotlight",
                    mode: "out-in"
                  }, {
                    default: withCtx(() => [
                      (openBlock(), createElementBlock("div", {
                        key: activeFeature.value,
                        class: "grid grid-cols-1 md:grid-cols-12 items-stretch h-full"
                      }, [
                        createBaseVNode("div", _hoisted_74, [
                          createBaseVNode("div", _hoisted_75, [
                            (openBlock(), createBlock(resolveDynamicComponent(featuresList[activeFeature.value].tabIcon), { class: "h-5.5 w-5.5" }))
                          ]),
                          createBaseVNode("h3", _hoisted_76, toDisplayString(featuresList[activeFeature.value].title), 1),
                          createBaseVNode("p", _hoisted_77, toDisplayString(featuresList[activeFeature.value].description), 1),
                          createBaseVNode("ul", _hoisted_78, [
                            (openBlock(true), createElementBlock(Fragment, null, renderList(featuresList[activeFeature.value].bullets, (bullet) => {
                              return openBlock(), createElementBlock("li", {
                                key: bullet,
                                class: "flex items-center space-x-3 text-slate-700 text-xs font-bold"
                              }, [
                                createBaseVNode("div", _hoisted_79, [
                                  createVNode(unref(Check), { class: "h-3 w-3" })
                                ]),
                                createBaseVNode("span", null, toDisplayString(bullet), 1)
                              ]);
                            }), 128))
                          ])
                        ]),
                        createBaseVNode("div", _hoisted_80, [
                          activeFeature.value === 0 ? (openBlock(), createElementBlock("div", _hoisted_81, [
                            _cache[71] || (_cache[71] = createBaseVNode("p", { class: "text-[9px] font-bold text-slate-400 uppercase tracking-widest text-center mb-4" }, "Click to Reserve a desk", -1)),
                            createBaseVNode("div", _hoisted_82, [
                              (openBlock(true), createElementBlock(Fragment, null, renderList(mockSeats.value, (seat) => {
                                return openBlock(), createElementBlock("button", {
                                  key: seat.id,
                                  onClick: ($event) => toggleMockSeat(seat.id),
                                  class: normalizeClass([
                                    "aspect-square rounded-xl border flex flex-col items-center justify-center text-xs font-bold transition-all relative",
                                    seat.status === "booked" ? "bg-slate-200 border-slate-300 text-slate-400 cursor-not-allowed" : seat.status === "selected" ? "bg-blue-600 border-blue-600 text-white scale-105 shadow shadow-blue-500/20" : "bg-white border-slate-250 text-slate-700 hover:border-blue-400 hover:bg-blue-50/10"
                                  ]),
                                  disabled: seat.status === "booked"
                                }, [
                                  createBaseVNode("span", null, toDisplayString(seat.label), 1),
                                  seat.status === "selected" ? (openBlock(), createElementBlock("div", _hoisted_84, " ✓ ")) : createCommentVNode("", true)
                                ], 10, _hoisted_83);
                              }), 128))
                            ]),
                            createBaseVNode("div", _hoisted_85, [
                              createBaseVNode("p", _hoisted_86, toDisplayString(selectedSeatLabel.value ? `Selected: ${selectedSeatLabel.value}` : "Choose an empty seat"), 1)
                            ])
                          ])) : createCommentVNode("", true),
                          activeFeature.value === 1 ? (openBlock(), createElementBlock("div", _hoisted_87, [
                            createBaseVNode("div", _hoisted_88, [
                              withDirectives(createBaseVNode("input", {
                                type: "text",
                                "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => mockSearchQuery.value = $event),
                                placeholder: "Search books...",
                                class: "w-full pl-9 pr-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-blue-500"
                              }, null, 512), [
                                [vModelText, mockSearchQuery.value]
                              ]),
                              createVNode(unref(Search), { class: "h-3.5 w-3.5 text-slate-400 absolute left-3 top-2.5" })
                            ]),
                            createBaseVNode("div", _hoisted_89, [
                              (openBlock(true), createElementBlock(Fragment, null, renderList(filteredMockBooks.value, (book) => {
                                return openBlock(), createElementBlock("div", {
                                  key: book.title,
                                  class: "flex items-center justify-between p-2 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors border border-slate-100"
                                }, [
                                  createBaseVNode("div", null, [
                                    createBaseVNode("h4", _hoisted_90, toDisplayString(book.title), 1),
                                    createBaseVNode("p", _hoisted_91, toDisplayString(book.author), 1)
                                  ]),
                                  _cache[72] || (_cache[72] = createBaseVNode("span", { class: "text-[9px] font-bold bg-blue-50 text-blue-600 border border-blue-200 px-2 py-0.5 rounded-md" }, "Available", -1))
                                ]);
                              }), 128))
                            ])
                          ])) : createCommentVNode("", true),
                          activeFeature.value === 2 ? (openBlock(), createElementBlock("div", _hoisted_92, [
                            (openBlock(true), createElementBlock(Fragment, null, renderList(mockEvents.value, (ev) => {
                              return openBlock(), createElementBlock("div", {
                                key: ev.title,
                                class: "bg-white border border-slate-200 rounded-2xl p-3.5 shadow-sm flex items-center justify-between"
                              }, [
                                createBaseVNode("div", null, [
                                  createBaseVNode("span", _hoisted_93, toDisplayString(ev.category), 1),
                                  createBaseVNode("h4", _hoisted_94, toDisplayString(ev.title), 1),
                                  createBaseVNode("p", _hoisted_95, [
                                    createVNode(unref(Clock), { class: "h-3 w-3 text-slate-400" }),
                                    createBaseVNode("span", null, toDisplayString(ev.time), 1)
                                  ])
                                ]),
                                createBaseVNode("button", {
                                  onClick: ($event) => ev.registered = !ev.registered,
                                  class: normalizeClass([
                                    "px-3 py-1.5 rounded-lg text-[10px] font-bold transition-all",
                                    ev.registered ? "bg-green-50 border border-green-200 text-green-600" : "bg-blue-600 text-white hover:bg-blue-700"
                                  ])
                                }, toDisplayString(ev.registered ? "Registered" : "Join"), 11, _hoisted_96)
                              ]);
                            }), 128))
                          ])) : createCommentVNode("", true),
                          activeFeature.value === 3 ? (openBlock(), createElementBlock("div", _hoisted_97, [
                            createBaseVNode("div", _hoisted_98, [
                              createVNode(unref(QrCode), { class: "h-28 w-28 text-slate-800" }),
                              _cache[73] || (_cache[73] = createBaseVNode("div", { class: "absolute left-0 right-0 h-0.5 bg-blue-500 animate-scan shadow-lg shadow-blue-500/80" }, null, -1))
                            ]),
                            _cache[74] || (_cache[74] = createBaseVNode("p", { class: "text-xs font-bold text-slate-805 mt-4" }, "Seat QR Scanner", -1)),
                            _cache[75] || (_cache[75] = createBaseVNode("p", { class: "text-[10px] text-slate-450 mt-1.5 leading-relaxed font-semibold" }, "Scan desk QR code to check in and occupy seat.", -1))
                          ])) : createCommentVNode("", true),
                          activeFeature.value === 4 ? (openBlock(), createElementBlock("div", _hoisted_99, [..._cache[76] || (_cache[76] = [
                            createBaseVNode("div", { class: "flex justify-between items-center mb-4" }, [
                              createBaseVNode("h4", { class: "text-xs font-bold text-slate-850" }, "Weekly Study Time"),
                              createBaseVNode("span", { class: "text-[9px] font-black text-green-600 bg-green-50 px-2 py-0.5 rounded-full border border-green-200" }, "+12% vs last week")
                            ], -1),
                            createBaseVNode("div", { class: "flex items-end justify-between h-24 pt-4 border-b border-slate-100 px-2" }, [
                              createBaseVNode("div", { class: "flex flex-col items-center w-6 group" }, [
                                createBaseVNode("div", {
                                  class: "w-2.5 bg-slate-200 group-hover:bg-blue-500 rounded-t-sm transition-all duration-300",
                                  style: { "height": "40%" }
                                }),
                                createBaseVNode("span", { class: "text-[8px] text-slate-400 mt-1.5 font-bold" }, "M")
                              ]),
                              createBaseVNode("div", { class: "flex flex-col items-center w-6 group" }, [
                                createBaseVNode("div", {
                                  class: "w-2.5 bg-slate-200 group-hover:bg-blue-500 rounded-t-sm transition-all duration-300",
                                  style: { "height": "65%" }
                                }),
                                createBaseVNode("span", { class: "text-[8px] text-slate-400 mt-1.5 font-bold" }, "T")
                              ]),
                              createBaseVNode("div", { class: "flex flex-col items-center w-6 group" }, [
                                createBaseVNode("div", {
                                  class: "w-2.5 bg-slate-200 group-hover:bg-blue-500 rounded-t-sm transition-all duration-300",
                                  style: { "height": "50%" }
                                }),
                                createBaseVNode("span", { class: "text-[8px] text-slate-400 mt-1.5 font-bold" }, "W")
                              ]),
                              createBaseVNode("div", { class: "flex flex-col items-center w-6 group" }, [
                                createBaseVNode("div", {
                                  class: "w-2.5 bg-blue-600 rounded-t-sm transition-all duration-300",
                                  style: { "height": "85%" }
                                }),
                                createBaseVNode("span", { class: "text-[8px] text-blue-600 mt-1.5 font-bold" }, "T")
                              ]),
                              createBaseVNode("div", { class: "flex flex-col items-center w-6 group" }, [
                                createBaseVNode("div", {
                                  class: "w-2.5 bg-slate-200 group-hover:bg-blue-500 rounded-t-sm transition-all duration-300",
                                  style: { "height": "35%" }
                                }),
                                createBaseVNode("span", { class: "text-[8px] text-slate-400 mt-1.5 font-bold" }, "F")
                              ]),
                              createBaseVNode("div", { class: "flex flex-col items-center w-6 group" }, [
                                createBaseVNode("div", {
                                  class: "w-2.5 bg-slate-200 group-hover:bg-blue-500 rounded-t-sm transition-all duration-300",
                                  style: { "height": "90%" }
                                }),
                                createBaseVNode("span", { class: "text-[8px] text-slate-400 mt-1.5 font-bold" }, "S")
                              ])
                            ], -1),
                            createBaseVNode("div", { class: "flex justify-between items-center mt-3.5" }, [
                              createBaseVNode("p", { class: "text-[10px] text-slate-505 font-semibold" }, "Daily Average"),
                              createBaseVNode("p", { class: "text-xs font-bold text-slate-800" }, "4.8 hours")
                            ], -1)
                          ])])) : createCommentVNode("", true),
                          activeFeature.value === 5 ? (openBlock(), createElementBlock("div", _hoisted_100, [
                            createBaseVNode("div", _hoisted_101, [
                              createBaseVNode("div", _hoisted_102, [
                                createVNode(unref(Award), { class: "h-5.5 w-5.5" })
                              ]),
                              _cache[77] || (_cache[77] = createBaseVNode("div", null, [
                                createBaseVNode("h4", { class: "text-xs font-bold text-slate-850" }, "Loyalty Level 3"),
                                createBaseVNode("p", { class: "text-[10px] text-slate-400 mt-0.5" }, "Academic Champion")
                              ], -1))
                            ]),
                            _cache[78] || (_cache[78] = createBaseVNode("div", null, [
                              createBaseVNode("div", { class: "flex justify-between items-center text-[10px] font-bold text-slate-655 mb-1.5" }, [
                                createBaseVNode("span", null, "Points Progress"),
                                createBaseVNode("span", null, "3,450 / 5,000 pts")
                              ]),
                              createBaseVNode("div", { class: "w-full h-2 bg-slate-100 rounded-full overflow-hidden" }, [
                                createBaseVNode("div", {
                                  class: "h-full bg-blue-650 rounded-full",
                                  style: { "width": "69%" }
                                })
                              ])
                            ], -1)),
                            _cache[79] || (_cache[79] = createBaseVNode("div", { class: "mt-4 flex items-center space-x-2" }, [
                              createBaseVNode("span", { class: "text-[9px] font-black bg-blue-50 text-blue-600 border border-blue-150 px-2 py-0.5 rounded-full uppercase" }, "Reward Ready"),
                              createBaseVNode("span", { class: "text-[9px] text-slate-555 font-bold" }, "• 1 Free Espresso Pass")
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
        createBaseVNode("section", _hoisted_103, [
          createBaseVNode("div", _hoisted_104, [
            _cache[98] || (_cache[98] = createBaseVNode("div", { class: "text-center max-w-2xl mx-auto mb-20" }, [
              createBaseVNode("span", { class: "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-black tracking-wider uppercase bg-blue-50 border border-blue-100 text-blue-600 mb-4 select-none" }, " Simple Process "),
              createBaseVNode("h2", { class: "text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4" }, " How It Works in 4 Steps "),
              createBaseVNode("p", { class: "text-base text-slate-500 leading-relaxed font-semibold" }, " Booking study desks and checking out digital learning resources takes just a few seconds. ")
            ], -1)),
            createBaseVNode("div", _hoisted_105, [
              createBaseVNode("div", _hoisted_106, [
                _cache[83] || (_cache[83] = createBaseVNode("div", { class: "hidden md:block absolute top-10 left-[65%] right-[-35%] h-0.5 bg-gradient-to-r from-blue-500/80 to-indigo-500/20 -z-10" }, [
                  createBaseVNode("div", { class: "absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 border-t-2 border-r-2 border-indigo-450 transform rotate-45" })
                ], -1)),
                createBaseVNode("div", _hoisted_107, [
                  createVNode(unref(Search), { class: "h-9 w-9" })
                ]),
                _cache[84] || (_cache[84] = createBaseVNode("span", { class: "text-[10px] font-black uppercase tracking-widest text-blue-600 bg-blue-50 border border-blue-100 px-3 py-1 rounded-full mb-3" }, " Step 01 ", -1)),
                _cache[85] || (_cache[85] = createBaseVNode("h3", { class: "text-lg font-bold text-slate-900 mb-2" }, "Find a Library", -1)),
                _cache[86] || (_cache[86] = createBaseVNode("p", { class: "text-xs text-slate-500 leading-relaxed max-w-[240px] font-semibold" }, " Explore participating ICAP library locations nationwide and verify current real-time seat occupancy statistics. ", -1))
              ]),
              createBaseVNode("div", _hoisted_108, [
                _cache[87] || (_cache[87] = createBaseVNode("div", { class: "hidden md:block absolute top-10 left-[65%] right-[-35%] h-0.5 bg-gradient-to-r from-indigo-500/80 to-purple-500/20 -z-10" }, [
                  createBaseVNode("div", { class: "absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 border-t-2 border-r-2 border-purple-450 transform rotate-45" })
                ], -1)),
                createBaseVNode("div", _hoisted_109, [
                  createVNode(unref(MapPin), { class: "h-9 w-9" })
                ]),
                _cache[88] || (_cache[88] = createBaseVNode("span", { class: "text-[10px] font-black uppercase tracking-widest text-indigo-600 bg-indigo-50 border border-indigo-100 px-3 py-1 rounded-full mb-3" }, " Step 02 ", -1)),
                _cache[89] || (_cache[89] = createBaseVNode("h3", { class: "text-lg font-bold text-slate-900 mb-2" }, "Select & Reserve", -1)),
                _cache[90] || (_cache[90] = createBaseVNode("p", { class: "text-xs text-slate-500 leading-relaxed max-w-[240px] font-semibold" }, " Check out live interactive floor seat maps, select your preferred study desk location, and reserve instantly. ", -1))
              ]),
              createBaseVNode("div", _hoisted_110, [
                _cache[91] || (_cache[91] = createBaseVNode("div", { class: "hidden md:block absolute top-10 left-[65%] right-[-35%] h-0.5 bg-gradient-to-r from-purple-500/80 to-emerald-500/20 -z-10" }, [
                  createBaseVNode("div", { class: "absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 border-t-2 border-r-2 border-emerald-450 transform rotate-45" })
                ], -1)),
                createBaseVNode("div", _hoisted_111, [
                  createVNode(unref(QrCode), { class: "h-9 w-9" })
                ]),
                _cache[92] || (_cache[92] = createBaseVNode("span", { class: "text-[10px] font-black uppercase tracking-widest text-purple-600 bg-purple-50 border border-purple-100 px-3 py-1 rounded-full mb-3" }, " Step 03 ", -1)),
                _cache[93] || (_cache[93] = createBaseVNode("h3", { class: "text-lg font-bold text-slate-900 mb-2" }, "QR Seat Check-In", -1)),
                _cache[94] || (_cache[94] = createBaseVNode("p", { class: "text-xs text-slate-500 leading-relaxed max-w-[240px] font-semibold" }, " Go to your reserved seat and scan the desk QR code to check in. The system instantly marks your seat as occupied and confirms your booking. ", -1))
              ]),
              createBaseVNode("div", _hoisted_112, [
                createBaseVNode("div", _hoisted_113, [
                  createVNode(unref(Clock), { class: "h-9 w-9" })
                ]),
                _cache[95] || (_cache[95] = createBaseVNode("span", { class: "text-[10px] font-black uppercase tracking-widest text-emerald-600 bg-emerald-50 border border-emerald-100 px-3 py-1 rounded-full mb-3" }, " Step 04 ", -1)),
                _cache[96] || (_cache[96] = createBaseVNode("h3", { class: "text-lg font-bold text-slate-900 mb-2" }, "Optimize Study Session", -1)),
                _cache[97] || (_cache[97] = createBaseVNode("p", { class: "text-xs text-slate-500 leading-relaxed max-w-[240px] font-semibold" }, " Log into the desk terminal, track your remaining session duration, extend bookings as needed, and enjoy study. ", -1))
              ])
            ])
          ])
        ]),
        createBaseVNode("section", _hoisted_114, [
          createBaseVNode("div", _hoisted_115, [
            _cache[121] || (_cache[121] = createBaseVNode("div", { class: "max-w-2xl mx-auto mb-12" }, [
              createBaseVNode("h2", { class: "text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4" }, " Simple, Transparent Pricing "),
              createBaseVNode("p", { class: "text-base text-slate-500" }, " Choose the membership tier that fits your academic goals or institute needs. ")
            ], -1)),
            createBaseVNode("div", _hoisted_116, [
              createBaseVNode("span", {
                class: normalizeClass(["text-sm font-bold transition-all", !isAnnual.value ? "text-blue-600" : "text-slate-500"])
              }, "Monthly Billing", 2),
              createBaseVNode("button", {
                onClick: _cache[9] || (_cache[9] = ($event) => isAnnual.value = !isAnnual.value),
                class: "w-14 h-8 bg-blue-100 rounded-full p-1 transition-all duration-300 relative focus:outline-none"
              }, [
                createBaseVNode("div", {
                  class: normalizeClass([
                    "w-6 h-6 bg-blue-600 rounded-full transition-transform duration-300 absolute top-1",
                    isAnnual.value ? "translate-x-6" : "translate-x-0"
                  ])
                }, null, 2)
              ]),
              createBaseVNode("span", {
                class: normalizeClass(["text-sm font-bold transition-all", isAnnual.value ? "text-blue-600" : "text-slate-500"])
              }, [..._cache[99] || (_cache[99] = [
                createTextVNode(" Annual Billing ", -1),
                createBaseVNode("span", { class: "text-xs bg-green-50 border border-green-200 text-green-600 px-2 py-0.5 rounded-full font-bold ml-1.5" }, "Save 20%", -1)
              ])], 2)
            ]),
            createBaseVNode("div", _hoisted_117, [
              createBaseVNode("div", _hoisted_118, [
                createBaseVNode("div", null, [
                  _cache[103] || (_cache[103] = createStaticVNode('<span class="text-xs font-bold text-slate-400 uppercase tracking-widest" data-v-57c66e47>Free Account</span><h3 class="text-xl font-bold text-slate-800 mt-2" data-v-57c66e47>Student Basic</h3><p class="text-xs text-slate-500 mt-1" data-v-57c66e47>Ideal for occasional study sessions</p><div class="price-box my-6 flex items-baseline" data-v-57c66e47><span class="text-4xl font-black text-slate-900" data-v-57c66e47>Rs. 0</span><span class="text-xs font-semibold text-slate-500 ml-1.5" data-v-57c66e47>/ forever</span></div>', 4)),
                  createBaseVNode("ul", _hoisted_119, [
                    createBaseVNode("li", _hoisted_120, [
                      createVNode(unref(Check), { class: "h-4 w-4 text-blue-600" }),
                      _cache[100] || (_cache[100] = createBaseVNode("span", null, "Access to catalog search", -1))
                    ]),
                    createBaseVNode("li", _hoisted_121, [
                      createVNode(unref(Check), { class: "h-4 w-4 text-blue-600" }),
                      _cache[101] || (_cache[101] = createBaseVNode("span", null, "Up to 2 bookings per month", -1))
                    ]),
                    createBaseVNode("li", _hoisted_122, [
                      createVNode(unref(Check), { class: "h-4 w-4 text-blue-600" }),
                      _cache[102] || (_cache[102] = createBaseVNode("span", null, "Standard QR seat check-in", -1))
                    ])
                  ])
                ]),
                createVNode(_component_router_link, {
                  to: "/register",
                  class: "w-full text-center py-3.5 rounded-2xl text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-all mt-8"
                }, {
                  default: withCtx(() => [..._cache[104] || (_cache[104] = [
                    createTextVNode(" Sign Up Free ", -1)
                  ])]),
                  _: 1
                })
              ]),
              createBaseVNode("div", _hoisted_123, [
                _cache[114] || (_cache[114] = createBaseVNode("div", { class: "absolute -top-3.5 right-6 bg-blue-600 text-white text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full border border-blue-700" }, " Popular Choice ", -1)),
                createBaseVNode("div", null, [
                  _cache[110] || (_cache[110] = createBaseVNode("span", { class: "text-xs font-bold text-blue-600 uppercase tracking-widest" }, "Scholar Pro", -1)),
                  _cache[111] || (_cache[111] = createBaseVNode("h3", { class: "text-xl font-bold text-slate-800 mt-2" }, "Premium Member", -1)),
                  _cache[112] || (_cache[112] = createBaseVNode("p", { class: "text-xs text-slate-500 mt-1" }, "Best for active CA & finance students", -1)),
                  createBaseVNode("div", _hoisted_124, [
                    createBaseVNode("span", _hoisted_125, toDisplayString(isAnnual.value ? "Rs. 799" : "Rs. 999"), 1),
                    _cache[105] || (_cache[105] = createBaseVNode("span", { class: "text-xs font-semibold text-slate-500 ml-1.5" }, "/ month", -1))
                  ]),
                  createBaseVNode("ul", _hoisted_126, [
                    createBaseVNode("li", _hoisted_127, [
                      createVNode(unref(Check), { class: "h-4 w-4 text-blue-600" }),
                      _cache[106] || (_cache[106] = createBaseVNode("span", null, "Unlimited seat reservations", -1))
                    ]),
                    createBaseVNode("li", _hoisted_128, [
                      createVNode(unref(Check), { class: "h-4 w-4 text-blue-600" }),
                      _cache[107] || (_cache[107] = createBaseVNode("span", null, "Pre-book up to 7 days in advance", -1))
                    ]),
                    createBaseVNode("li", _hoisted_129, [
                      createVNode(unref(Check), { class: "h-4 w-4 text-blue-600" }),
                      _cache[108] || (_cache[108] = createBaseVNode("span", null, "Interactive floor maps", -1))
                    ]),
                    createBaseVNode("li", _hoisted_130, [
                      createVNode(unref(Check), { class: "h-4 w-4 text-blue-600" }),
                      _cache[109] || (_cache[109] = createBaseVNode("span", null, "Loyalty points rewards access", -1))
                    ])
                  ])
                ]),
                createVNode(_component_router_link, {
                  to: "/register",
                  class: "w-full text-center py-3.5 rounded-2xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-md shadow-blue-500/15 transition-all mt-8"
                }, {
                  default: withCtx(() => [..._cache[113] || (_cache[113] = [
                    createTextVNode(" Get Started ", -1)
                  ])]),
                  _: 1
                })
              ]),
              createBaseVNode("div", _hoisted_131, [
                createBaseVNode("div", null, [
                  _cache[119] || (_cache[119] = createStaticVNode('<span class="text-xs font-bold text-slate-400 uppercase tracking-widest" data-v-57c66e47>Institutional License</span><h3 class="text-xl font-bold text-slate-800 mt-2" data-v-57c66e47>Smart Institute</h3><p class="text-xs text-slate-500 mt-1" data-v-57c66e47>For universities, colleges &amp; libraries</p><div class="price-box my-6 flex items-baseline" data-v-57c66e47><span class="text-4xl font-black text-slate-900" data-v-57c66e47>Custom</span><span class="text-xs font-semibold text-slate-500 ml-1.5" data-v-57c66e47>/ location</span></div>', 4)),
                  createBaseVNode("ul", _hoisted_132, [
                    createBaseVNode("li", _hoisted_133, [
                      createVNode(unref(Check), { class: "h-4 w-4 text-blue-600" }),
                      _cache[115] || (_cache[115] = createBaseVNode("span", null, "Unlimited admin & librarian seats", -1))
                    ]),
                    createBaseVNode("li", _hoisted_134, [
                      createVNode(unref(Check), { class: "h-4 w-4 text-blue-600" }),
                      _cache[116] || (_cache[116] = createBaseVNode("span", null, "Full student analytics dashboard", -1))
                    ]),
                    createBaseVNode("li", _hoisted_135, [
                      createVNode(unref(Check), { class: "h-4 w-4 text-blue-600" }),
                      _cache[117] || (_cache[117] = createBaseVNode("span", null, "Automated checkout & notifications", -1))
                    ]),
                    createBaseVNode("li", _hoisted_136, [
                      createVNode(unref(Check), { class: "h-4 w-4 text-blue-600" }),
                      _cache[118] || (_cache[118] = createBaseVNode("span", null, "Support API integrations", -1))
                    ])
                  ])
                ]),
                _cache[120] || (_cache[120] = createBaseVNode("a", {
                  href: "mailto:support@smartlib.com?subject=Institutional License Inquiry",
                  class: "w-full text-center py-3.5 rounded-2xl text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-all mt-8"
                }, " Contact Support ", -1))
              ])
            ])
          ])
        ]),
        createBaseVNode("section", _hoisted_137, [
          createBaseVNode("div", _hoisted_138, [
            _cache[123] || (_cache[123] = createBaseVNode("div", { class: "text-center max-w-2xl mx-auto mb-16" }, [
              createBaseVNode("h2", { class: "text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4" }, " Frequently Asked Questions "),
              createBaseVNode("p", { class: "text-base text-slate-500" }, " Find answers to common questions about reservation limits, check-in requirements and loyalty points. ")
            ], -1)),
            createBaseVNode("div", _hoisted_139, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(faqList.value, (faq, idx) => {
                return openBlock(), createElementBlock("div", {
                  key: faq.question,
                  class: "bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm"
                }, [
                  createBaseVNode("button", {
                    onClick: ($event) => toggleFaq(idx),
                    class: "w-full p-6 flex justify-between items-center text-left focus:outline-none"
                  }, [
                    createBaseVNode("span", _hoisted_141, toDisplayString(faq.question), 1),
                    createBaseVNode("span", {
                      class: "ml-4 flex-shrink-0 text-slate-400 transition-transform duration-200",
                      style: normalizeStyle(faq.open ? "transform: rotate(180deg)" : "")
                    }, [..._cache[122] || (_cache[122] = [
                      createBaseVNode("svg", {
                        class: "h-5 w-5",
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
                  ], 8, _hoisted_140),
                  createVNode(Transition, { name: "expand" }, {
                    default: withCtx(() => [
                      withDirectives(createBaseVNode("div", { class: "border-t border-slate-100 p-6 bg-slate-50/20 text-xs text-slate-500 leading-relaxed" }, toDisplayString(faq.answer), 513), [
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
        createBaseVNode("footer", _hoisted_142, [
          createBaseVNode("div", _hoisted_143, [
            createBaseVNode("div", _hoisted_144, [
              createBaseVNode("div", _hoisted_145, [
                createVNode(_component_router_link, {
                  to: "/",
                  class: "flex items-center space-x-2.5 mb-6 group"
                }, {
                  default: withCtx(() => [
                    createBaseVNode("div", _hoisted_146, [
                      createVNode(unref(BookOpen), { class: "h-5.5 w-5.5" })
                    ]),
                    _cache[124] || (_cache[124] = createBaseVNode("span", { class: "text-lg font-extrabold text-slate-900 leading-none tracking-tight" }, "SmartLib", -1))
                  ]),
                  _: 1
                }),
                _cache[125] || (_cache[125] = createBaseVNode("p", { class: "text-xs text-slate-500 leading-relaxed max-w-sm mb-6" }, " A comprehensive library seat booking and catalog management platform built for modern academic and research centers. Optimize your study environment with real-time analytics. ", -1)),
                createBaseVNode("div", _hoisted_147, [
                  createBaseVNode("a", _hoisted_148, [
                    createVNode(unref(Twitter), { class: "h-4.5 w-4.5" })
                  ]),
                  createBaseVNode("a", _hoisted_149, [
                    createVNode(unref(Linkedin), { class: "h-4.5 w-4.5" })
                  ]),
                  createBaseVNode("a", _hoisted_150, [
                    createVNode(unref(Facebook), { class: "h-4.5 w-4.5" })
                  ])
                ])
              ]),
              createBaseVNode("div", _hoisted_151, [
                _cache[126] || (_cache[126] = createBaseVNode("h4", { class: "text-xs font-black uppercase text-slate-400 tracking-wider mb-6" }, "Solutions", -1)),
                createBaseVNode("ul", _hoisted_152, [
                  createBaseVNode("li", null, [
                    createBaseVNode("a", {
                      href: "#features",
                      onClick: _cache[10] || (_cache[10] = ($event) => scrollToFeature(0, $event)),
                      class: "text-xs font-semibold text-slate-500 hover:text-blue-600 transition-colors"
                    }, "Seat Booking")
                  ]),
                  createBaseVNode("li", null, [
                    createBaseVNode("a", {
                      href: "#features",
                      onClick: _cache[11] || (_cache[11] = ($event) => scrollToFeature(1, $event)),
                      class: "text-xs font-semibold text-slate-500 hover:text-blue-600 transition-colors"
                    }, "Catalog Manager")
                  ]),
                  createBaseVNode("li", null, [
                    createBaseVNode("a", {
                      href: "#features",
                      onClick: _cache[12] || (_cache[12] = ($event) => scrollToFeature(2, $event)),
                      class: "text-xs font-semibold text-slate-500 hover:text-blue-600 transition-colors"
                    }, "QR Seat Check-In")
                  ]),
                  createBaseVNode("li", null, [
                    createBaseVNode("a", {
                      href: "#features",
                      onClick: _cache[13] || (_cache[13] = ($event) => scrollToFeature(3, $event)),
                      class: "text-xs font-semibold text-slate-500 hover:text-blue-600 transition-colors"
                    }, "Digital Analytics")
                  ])
                ])
              ]),
              createBaseVNode("div", _hoisted_153, [
                _cache[128] || (_cache[128] = createBaseVNode("h4", { class: "text-xs font-black uppercase text-slate-400 tracking-wider mb-6" }, "Security & Integrity", -1)),
                createBaseVNode("div", _hoisted_154, [
                  createBaseVNode("div", _hoisted_155, [
                    createVNode(unref(Shield), { class: "h-5.5 w-5.5" })
                  ]),
                  _cache[127] || (_cache[127] = createBaseVNode("div", null, [
                    createBaseVNode("h5", { class: "text-xs font-bold text-slate-800" }, "Verified System Protection"),
                    createBaseVNode("p", { class: "text-[11px] text-slate-500 mt-1.5 leading-relaxed" }, " All seat bookings, queue status updates, and catalog lookups are secure. QR-based seat check-in provides verified, fully compliant library access. ")
                  ], -1))
                ])
              ])
            ]),
            createBaseVNode("div", _hoisted_156, [
              createBaseVNode("p", null, "© " + toDisplayString((/* @__PURE__ */ new Date()).getFullYear()) + " SmartLib System. All rights reserved.", 1),
              _cache[129] || (_cache[129] = createBaseVNode("div", { class: "flex space-x-6 mt-4 sm:mt-0" }, [
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
const LandingPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-57c66e47"]]);
export {
  LandingPage as default
};
