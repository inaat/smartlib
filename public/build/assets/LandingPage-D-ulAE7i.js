import { d as defineComponent, r as ref, o as onMounted, c as computed, a as createElementBlock, b as createBaseVNode, e as createStaticVNode, f as createVNode, n as normalizeClass, w as withCtx, g as resolveComponent, h as createBlock, u as unref, T as Transition, i as createTextVNode, F as Fragment, j as renderList, t as toDisplayString, k as openBlock, l as createCommentVNode, m as resolveDynamicComponent, p as withDirectives, v as vModelText, q as normalizeStyle, s as vShow } from "./main-BV94XoeK.js";
import { M as Menu } from "./menu-BaeWSpxb.js";
import { X } from "./x-C8j8JQlQ.js";
import { S as Sparkles } from "./sparkles-FOMRQBVF.js";
import { M as MapPin } from "./map-pin-CW-zEwb2.js";
import { C as Clock } from "./clock-BERatuZr.js";
import { Q as QrCode } from "./qr-code-CPW0eGJl.js";
import { T as TrendingUp } from "./trending-up-PIRBVTma.js";
import { C as CircleAlert } from "./circle-alert-G71fn9_g.js";
import { B as Ban } from "./ban-BOTmKWW9.js";
import { c as createLucideIcon } from "./createLucideIcon-CmaEOm5I.js";
import { C as Check } from "./check-CKL_tIKH.js";
import { S as Shield } from "./shield-CKU_iUFV.js";
import { B as BookOpen } from "./book-open-C-J0cv2v.js";
import { C as ChevronRight } from "./chevron-right-CMoJDVXY.js";
import { S as Search } from "./search-DO-S72vO.js";
import { A as Award } from "./award-CJ3Hbzga.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
/* empty css               */
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
const _hoisted_14 = { class: "space-y-4 text-left" };
const _hoisted_15 = { class: "bg-slate-50 border border-slate-100 rounded-2xl p-4 flex justify-between items-center" };
const _hoisted_16 = { class: "flex items-center space-x-3" };
const _hoisted_17 = { class: "h-10 w-10 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600" };
const _hoisted_18 = { class: "bg-slate-50 border border-slate-100 rounded-2xl p-4 flex justify-between items-center" };
const _hoisted_19 = { class: "flex items-center space-x-3" };
const _hoisted_20 = { class: "h-10 w-10 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600" };
const _hoisted_21 = { class: "bg-slate-50 border border-slate-100 rounded-2xl p-4 flex justify-between items-center" };
const _hoisted_22 = { class: "flex items-center space-x-3" };
const _hoisted_23 = { class: "h-10 w-10 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600" };
const _hoisted_24 = { class: "absolute -right-8 -bottom-6 bg-white border border-slate-200 shadow-xl rounded-2xl p-4 flex items-center space-x-3.5 animate-bounce-slow" };
const _hoisted_25 = { class: "h-10 w-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 border border-blue-100" };
const _hoisted_26 = {
  id: "challenges",
  class: "py-20 md:py-28 bg-slate-50/70 border-b border-slate-200"
};
const _hoisted_27 = { class: "max-w-7xl mx-auto px-6 text-center" };
const _hoisted_28 = { class: "max-w-3xl mx-auto mb-16" };
const _hoisted_29 = { class: "inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-red-50 border border-red-100 text-red-700 shadow-inner" };
const _hoisted_30 = { class: "grid grid-cols-1 md:grid-cols-3 gap-8" };
const _hoisted_31 = { class: "bg-white border border-slate-200 hover:border-red-200 rounded-3xl p-8 shadow-sm hover:shadow-md transition-all text-left relative group" };
const _hoisted_32 = { class: "h-12 w-12 rounded-2xl bg-red-50 border border-red-100 flex items-center justify-center text-red-600 mb-6 group-hover:scale-105 transition-all" };
const _hoisted_33 = { class: "bg-white border border-slate-200 hover:border-red-200 rounded-3xl p-8 shadow-sm hover:shadow-md transition-all text-left relative group" };
const _hoisted_34 = { class: "h-12 w-12 rounded-2xl bg-red-50 border border-red-100 flex items-center justify-center text-red-600 mb-6 group-hover:scale-105 transition-all" };
const _hoisted_35 = { class: "bg-white border border-slate-200 hover:border-red-200 rounded-3xl p-8 shadow-sm hover:shadow-md transition-all text-left relative group" };
const _hoisted_36 = { class: "h-12 w-12 rounded-2xl bg-red-50 border border-red-100 flex items-center justify-center text-red-600 mb-6 group-hover:scale-105 transition-all" };
const _hoisted_37 = {
  id: "features",
  class: "py-20 md:py-28 bg-white"
};
const _hoisted_38 = { class: "max-w-7xl mx-auto px-6 text-center" };
const _hoisted_39 = { class: "flex flex-wrap justify-center gap-2 sm:gap-3 mb-12" };
const _hoisted_40 = ["onClick"];
const _hoisted_41 = { class: "max-w-5xl mx-auto" };
const _hoisted_42 = { class: "md:col-span-7 p-8 sm:p-12 flex flex-col justify-center items-start text-left" };
const _hoisted_43 = { class: "h-12 w-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 mb-6 border border-blue-100" };
const _hoisted_44 = { class: "text-2xl font-black text-slate-900 mb-4" };
const _hoisted_45 = { class: "text-slate-600 mb-8 leading-relaxed" };
const _hoisted_46 = { class: "space-y-3.5" };
const _hoisted_47 = { class: "h-5.5 w-5.5 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 border border-blue-200" };
const _hoisted_48 = { class: "md:col-span-5 bg-slate-50/70 border-l border-slate-200 flex items-center justify-center p-8 relative overflow-hidden min-h-[300px]" };
const _hoisted_49 = {
  key: 0,
  class: "w-full max-w-[280px]"
};
const _hoisted_50 = { class: "grid grid-cols-4 gap-3" };
const _hoisted_51 = ["onClick", "disabled"];
const _hoisted_52 = {
  key: 0,
  class: "absolute -top-1 -right-1 h-3.5 w-3.5 rounded-full bg-green-500 border border-white flex items-center justify-center text-[8px] text-white"
};
const _hoisted_53 = { class: "text-xs font-semibold text-slate-600 text-center mt-6" };
const _hoisted_54 = {
  key: 1,
  class: "w-full max-w-[280px] bg-white border border-slate-200 rounded-2xl p-4 shadow-sm text-left"
};
const _hoisted_55 = { class: "relative mb-3" };
const _hoisted_56 = { class: "space-y-2 max-h-[160px] overflow-y-auto pr-1" };
const _hoisted_57 = { class: "text-xs font-bold text-slate-800 leading-tight" };
const _hoisted_58 = { class: "text-[10px] text-slate-500 mt-0.5" };
const _hoisted_59 = {
  key: 2,
  class: "w-full max-w-[280px] text-left space-y-3"
};
const _hoisted_60 = { class: "text-[9px] font-bold text-blue-600 uppercase" };
const _hoisted_61 = { class: "text-xs font-bold text-slate-800 mt-0.5" };
const _hoisted_62 = { class: "text-[10px] text-slate-500 mt-1 flex items-center gap-1" };
const _hoisted_63 = ["onClick"];
const _hoisted_64 = {
  key: 3,
  class: "w-full max-w-[240px] bg-white border border-slate-200 rounded-2xl p-5 shadow-sm text-center relative flex flex-col items-center"
};
const _hoisted_65 = { class: "h-36 w-36 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-center p-3 relative overflow-hidden" };
const _hoisted_66 = {
  key: 4,
  class: "w-full max-w-[280px] bg-white border border-slate-200 rounded-2xl p-4 shadow-sm text-left"
};
const _hoisted_67 = {
  key: 5,
  class: "w-full max-w-[280px] bg-white border border-slate-200 rounded-2xl p-4 shadow-sm text-left"
};
const _hoisted_68 = { class: "flex items-center space-x-3.5 border-b border-slate-100 pb-3 mb-3" };
const _hoisted_69 = { class: "h-10 w-10 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600" };
const _hoisted_70 = {
  id: "pricing",
  class: "py-20 md:py-28 bg-white border-t border-slate-200"
};
const _hoisted_71 = { class: "max-w-7xl mx-auto px-6 text-center" };
const _hoisted_72 = { class: "flex justify-center items-center space-x-3.5 mb-16" };
const _hoisted_73 = { class: "grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto items-stretch" };
const _hoisted_74 = { class: "bg-white border border-slate-200 rounded-3xl p-8 shadow-sm flex flex-col justify-between text-left group hover:border-slate-400 transition-all" };
const _hoisted_75 = { class: "space-y-3.5 border-t border-slate-100 pt-6" };
const _hoisted_76 = { class: "flex items-center space-x-2.5 text-xs text-slate-600 font-medium" };
const _hoisted_77 = { class: "flex items-center space-x-2.5 text-xs text-slate-600 font-medium" };
const _hoisted_78 = { class: "flex items-center space-x-2.5 text-xs text-slate-600 font-medium" };
const _hoisted_79 = { class: "bg-white border-2 border-blue-600 rounded-3xl p-8 shadow-xl shadow-blue-500/5 flex flex-col justify-between text-left relative transform md:-translate-y-2" };
const _hoisted_80 = { class: "price-box my-6 flex items-baseline" };
const _hoisted_81 = { class: "text-4xl font-black text-slate-900" };
const _hoisted_82 = { class: "space-y-3.5 border-t border-slate-100 pt-6" };
const _hoisted_83 = { class: "flex items-center space-x-2.5 text-xs text-slate-600 font-medium" };
const _hoisted_84 = { class: "flex items-center space-x-2.5 text-xs text-slate-600 font-medium" };
const _hoisted_85 = { class: "flex items-center space-x-2.5 text-xs text-slate-600 font-medium" };
const _hoisted_86 = { class: "flex items-center space-x-2.5 text-xs text-slate-600 font-medium" };
const _hoisted_87 = { class: "bg-white border border-slate-200 rounded-3xl p-8 shadow-sm flex flex-col justify-between text-left group hover:border-slate-400 transition-all" };
const _hoisted_88 = { class: "space-y-3.5 border-t border-slate-100 pt-6" };
const _hoisted_89 = { class: "flex items-center space-x-2.5 text-xs text-slate-600 font-medium" };
const _hoisted_90 = { class: "flex items-center space-x-2.5 text-xs text-slate-600 font-medium" };
const _hoisted_91 = { class: "flex items-center space-x-2.5 text-xs text-slate-600 font-medium" };
const _hoisted_92 = { class: "flex items-center space-x-2.5 text-xs text-slate-600 font-medium" };
const _hoisted_93 = {
  id: "faq",
  class: "py-20 md:py-28 bg-slate-50/50 border-t border-slate-200"
};
const _hoisted_94 = { class: "max-w-4xl mx-auto px-6" };
const _hoisted_95 = { class: "space-y-4" };
const _hoisted_96 = ["onClick"];
const _hoisted_97 = { class: "text-sm font-bold text-slate-800" };
const _hoisted_98 = { class: "bg-white border-t border-slate-200 py-16" };
const _hoisted_99 = { class: "max-w-7xl mx-auto px-6" };
const _hoisted_100 = { class: "grid grid-cols-1 md:grid-cols-12 gap-12 border-b border-slate-200 pb-12 mb-12" };
const _hoisted_101 = { class: "md:col-span-4 flex flex-col items-start text-left" };
const _hoisted_102 = { class: "h-10 w-10 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform" };
const _hoisted_103 = { class: "flex items-center space-x-3" };
const _hoisted_104 = {
  href: "https://twitter.com",
  target: "_blank",
  class: "h-9 w-9 rounded-xl border border-slate-200 hover:border-blue-500 flex items-center justify-center text-slate-400 hover:text-blue-600 transition-all"
};
const _hoisted_105 = {
  href: "https://linkedin.com",
  target: "_blank",
  class: "h-9 w-9 rounded-xl border border-slate-200 hover:border-blue-500 flex items-center justify-center text-slate-400 hover:text-blue-600 transition-all"
};
const _hoisted_106 = {
  href: "https://facebook.com",
  target: "_blank",
  class: "h-9 w-9 rounded-xl border border-slate-200 hover:border-blue-500 flex items-center justify-center text-slate-400 hover:text-blue-600 transition-all"
};
const _hoisted_107 = { class: "md:col-span-5 flex flex-col items-start text-left" };
const _hoisted_108 = { class: "bg-slate-50 border border-slate-200 rounded-2xl p-5 w-full flex items-start space-x-4" };
const _hoisted_109 = { class: "h-10 w-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-600 border border-blue-100/50 flex-shrink-0" };
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
        tabTitle: "QR Pass Gate",
        tabIcon: QrCode,
        title: "Contactless Check-In Gate Passes",
        description: "Skip long queues using your unique profile QR code. Scan at the entry gate to automatically log your attendance.",
        bullets: [
          "Instant attendance logging scanner",
          "Seat reservation auto validation",
          "Overdue alert notification checks"
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
        answer: "Simply open the SmartLib application on your smartphone, navigate to your gate pass QR code, and scan it at the gate entry reader or desk scanner upon arrival.",
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
                _cache[8] || (_cache[8] = createBaseVNode("div", { class: "flex flex-col" }, [
                  createBaseVNode("span", { class: "text-lg font-extrabold text-slate-900 leading-none tracking-tight" }, "SmartLib"),
                  createBaseVNode("span", { class: "text-[10px] font-semibold text-blue-600 tracking-wider uppercase mt-0.5" }, "Library Hub")
                ], -1))
              ]),
              _: 1
            }),
            _cache[10] || (_cache[10] = createStaticVNode('<nav class="hidden md:flex items-center space-x-8" data-v-42d15a72><a href="#features" class="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors" data-v-42d15a72>Features</a><a href="#how-it-works" class="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors" data-v-42d15a72>How It Works</a><a href="#pricing" class="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors" data-v-42d15a72>Pricing</a><a href="#faq" class="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors" data-v-42d15a72>FAQ</a></nav>', 1)),
            createBaseVNode("div", _hoisted_3, [
              createVNode(_component_router_link, {
                to: "/login",
                class: "px-5 py-2.5 rounded-full text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 active:scale-98 shadow-md shadow-blue-500/10 hover:shadow-blue-500/25 transition-all"
              }, {
                default: withCtx(() => [..._cache[9] || (_cache[9] = [
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
                  default: withCtx(() => [..._cache[11] || (_cache[11] = [
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
                  _cache[12] || (_cache[12] = createBaseVNode("span", null, "Smart Study Space Management Platform", -1))
                ]),
                _cache[15] || (_cache[15] = createBaseVNode("h1", { class: "text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-none text-slate-900 mb-6" }, [
                  createTextVNode(" Study Smarter,"),
                  createBaseVNode("br"),
                  createBaseVNode("span", { class: "text-blue-650 bg-gradient-to-r from-blue-650 to-blue-500 bg-clip-text text-transparent" }, "Achieve More")
                ], -1)),
                _cache[16] || (_cache[16] = createBaseVNode("p", { class: "text-lg text-slate-600 mb-8 max-w-xl leading-relaxed" }, " A complete cloud platform for seat booking, catalog management, and automated library check-ins. Designed to boost student productivity and simplify operations for modern academic institutions. ", -1)),
                createBaseVNode("div", _hoisted_10, [
                  createVNode(_component_router_link, {
                    to: "/register",
                    class: "px-8 py-4 rounded-2xl text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 active:scale-98 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/35 transition-all text-center flex items-center justify-center gap-2"
                  }, {
                    default: withCtx(() => [
                      _cache[13] || (_cache[13] = createBaseVNode("span", null, "Start Free Today", -1)),
                      createVNode(unref(ChevronRight), { class: "h-4.5 w-4.5" })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_router_link, {
                    to: "/login",
                    class: "px-8 py-4 rounded-2xl text-sm font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 active:scale-98 transition-all text-center"
                  }, {
                    default: withCtx(() => [..._cache[14] || (_cache[14] = [
                      createTextVNode(" Sign In ", -1)
                    ])]),
                    _: 1
                  })
                ])
              ]),
              createBaseVNode("div", _hoisted_11, [
                _cache[25] || (_cache[25] = createBaseVNode("div", { class: "absolute -inset-4 bg-blue-200/30 rounded-full blur-3xl opacity-60" }, null, -1)),
                createBaseVNode("div", _hoisted_12, [
                  createBaseVNode("div", _hoisted_13, [
                    _cache[23] || (_cache[23] = createStaticVNode('<div class="flex justify-between items-center border-b border-slate-100 pb-4 mb-6" data-v-42d15a72><div class="flex items-center space-x-2" data-v-42d15a72><div class="w-3.5 h-3.5 rounded-full bg-slate-100 flex items-center justify-center" data-v-42d15a72><div class="w-1.5 h-1.5 rounded-full bg-red-400" data-v-42d15a72></div></div><div class="w-3.5 h-3.5 rounded-full bg-slate-100 flex items-center justify-center" data-v-42d15a72><div class="w-1.5 h-1.5 rounded-full bg-yellow-400" data-v-42d15a72></div></div><div class="w-3.5 h-3.5 rounded-full bg-slate-100 flex items-center justify-center" data-v-42d15a72><div class="w-1.5 h-1.5 rounded-full bg-green-400" data-v-42d15a72></div></div></div><span class="text-[10px] bg-blue-50 border border-blue-100 text-blue-600 px-3 py-1 rounded-full font-bold uppercase tracking-wider" data-v-42d15a72>Smart Dashboard</span></div>', 1)),
                    createBaseVNode("div", _hoisted_14, [
                      createBaseVNode("div", _hoisted_15, [
                        createBaseVNode("div", _hoisted_16, [
                          createBaseVNode("div", _hoisted_17, [
                            createVNode(unref(MapPin), { class: "h-5 w-5" })
                          ]),
                          _cache[17] || (_cache[17] = createBaseVNode("div", null, [
                            createBaseVNode("h4", { class: "text-sm font-bold text-slate-800" }, "Zone A • Main Hall"),
                            createBaseVNode("p", { class: "text-xs text-slate-500 mt-0.5" }, "Desk Reservation")
                          ], -1))
                        ]),
                        _cache[18] || (_cache[18] = createBaseVNode("span", { class: "text-xs bg-green-50 border border-green-200 text-green-600 px-2.5 py-1 rounded-lg font-bold" }, "Active", -1))
                      ]),
                      createBaseVNode("div", _hoisted_18, [
                        createBaseVNode("div", _hoisted_19, [
                          createBaseVNode("div", _hoisted_20, [
                            createVNode(unref(Clock), { class: "h-5 w-5" })
                          ]),
                          _cache[19] || (_cache[19] = createBaseVNode("div", null, [
                            createBaseVNode("h4", { class: "text-sm font-bold text-slate-800" }, "Study Session"),
                            createBaseVNode("p", { class: "text-xs text-slate-500 mt-0.5" }, "Time Remaining")
                          ], -1))
                        ]),
                        _cache[20] || (_cache[20] = createBaseVNode("span", { class: "text-xs font-bold text-slate-700" }, "03h 45m", -1))
                      ]),
                      createBaseVNode("div", _hoisted_21, [
                        createBaseVNode("div", _hoisted_22, [
                          createBaseVNode("div", _hoisted_23, [
                            createVNode(unref(QrCode), { class: "h-5 w-5" })
                          ]),
                          _cache[21] || (_cache[21] = createBaseVNode("div", null, [
                            createBaseVNode("h4", { class: "text-sm font-bold text-slate-800" }, "Instant Check-In"),
                            createBaseVNode("p", { class: "text-xs text-slate-500 mt-0.5" }, "Quick Pass Gate Access")
                          ], -1))
                        ]),
                        _cache[22] || (_cache[22] = createBaseVNode("span", { class: "text-xs bg-blue-50 border border-blue-200 text-blue-600 px-2.5 py-1 rounded-lg font-bold" }, "Ready", -1))
                      ])
                    ])
                  ]),
                  createBaseVNode("div", _hoisted_24, [
                    createBaseVNode("div", _hoisted_25, [
                      createVNode(unref(TrendingUp), { class: "h-5 w-5" })
                    ]),
                    _cache[24] || (_cache[24] = createBaseVNode("div", { class: "text-left" }, [
                      createBaseVNode("p", { class: "text-[10px] font-bold text-slate-400 uppercase tracking-wider" }, "Occupancy Rate"),
                      createBaseVNode("p", { class: "text-lg font-black text-slate-800 leading-none mt-1" }, "94.8%")
                    ], -1))
                  ])
                ])
              ])
            ])
          ])
        ]),
        _cache[79] || (_cache[79] = createStaticVNode('<section class="border-y border-slate-200 bg-slate-50/50 py-10" data-v-42d15a72><div class="max-w-7xl mx-auto px-6" data-v-42d15a72><div class="grid grid-cols-2 lg:grid-cols-4 gap-8" data-v-42d15a72><div class="text-center group" data-v-42d15a72><h3 class="text-3xl sm:text-4xl font-black text-blue-600 group-hover:scale-105 transition-transform inline-block" data-v-42d15a72>12,500+</h3><p class="text-sm font-bold text-slate-500 mt-2 uppercase tracking-wider" data-v-42d15a72>Active Students</p></div><div class="text-center group" data-v-42d15a72><h3 class="text-3xl sm:text-4xl font-black text-blue-600 group-hover:scale-105 transition-transform inline-block" data-v-42d15a72>24+</h3><p class="text-sm font-bold text-slate-500 mt-2 uppercase tracking-wider" data-v-42d15a72>Library Locations</p></div><div class="text-center group" data-v-42d15a72><h3 class="text-3xl sm:text-4xl font-black text-blue-600 group-hover:scale-105 transition-transform inline-block" data-v-42d15a72>45,000+</h3><p class="text-sm font-bold text-slate-500 mt-2 uppercase tracking-wider" data-v-42d15a72>Total Bookings</p></div><div class="text-center group" data-v-42d15a72><h3 class="text-3xl sm:text-4xl font-black text-blue-600 group-hover:scale-105 transition-transform inline-block" data-v-42d15a72>98%</h3><p class="text-sm font-bold text-slate-500 mt-2 uppercase tracking-wider" data-v-42d15a72>Satisfaction Rate</p></div></div></div></section>', 1)),
        createBaseVNode("section", _hoisted_26, [
          createBaseVNode("div", _hoisted_27, [
            createBaseVNode("div", _hoisted_28, [
              createBaseVNode("span", _hoisted_29, [
                createVNode(unref(CircleAlert), { class: "h-3.5 w-3.5" }),
                _cache[26] || (_cache[26] = createBaseVNode("span", null, "The Daily Struggle", -1))
              ]),
              _cache[27] || (_cache[27] = createBaseVNode("h2", { class: "text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-6 mb-4" }, " The Challenges You Face Everyday ", -1)),
              _cache[28] || (_cache[28] = createBaseVNode("p", { class: "text-base text-slate-500 leading-relaxed" }, " Students and library administrators waste valuable time due to outdated, uncoordinated study space setups. ", -1))
            ]),
            createBaseVNode("div", _hoisted_30, [
              createBaseVNode("div", _hoisted_31, [
                createBaseVNode("div", _hoisted_32, [
                  createVNode(unref(Ban), { class: "h-6 w-6" })
                ]),
                _cache[29] || (_cache[29] = createBaseVNode("h3", { class: "text-lg font-bold text-slate-900 mb-2" }, "No Available Seats", -1)),
                _cache[30] || (_cache[30] = createBaseVNode("p", { class: "text-sm text-slate-500 leading-relaxed" }, " Arriving at the library only to find every single desk occupied. Without real-time desk tracking, finding a study spot is a constant gamble. ", -1)),
                _cache[31] || (_cache[31] = createBaseVNode("div", { class: "mt-6 pt-4 border-t border-slate-100 text-xs font-semibold text-slate-400 group-hover:text-red-500 transition-colors flex items-center gap-1.5" }, [
                  createBaseVNode("span", { class: "h-1.5 w-1.5 rounded-full bg-blue-500" }),
                  createBaseVNode("span", null, "SmartLib Solution: Live seat maps & instant booking.")
                ], -1))
              ]),
              createBaseVNode("div", _hoisted_33, [
                createBaseVNode("div", _hoisted_34, [
                  createVNode(unref(Hourglass), { class: "h-6 w-6" })
                ]),
                _cache[32] || (_cache[32] = createBaseVNode("h3", { class: "text-lg font-bold text-slate-900 mb-2" }, "Wasted Time in Queues", -1)),
                _cache[33] || (_cache[33] = createBaseVNode("p", { class: "text-sm text-slate-500 leading-relaxed" }, " Waiting in long queues at the entry gate, checking in manually with supervisors, or writing details in paper logs. ", -1)),
                _cache[34] || (_cache[34] = createBaseVNode("div", { class: "mt-6 pt-4 border-t border-slate-100 text-xs font-semibold text-slate-400 group-hover:text-red-500 transition-colors flex items-center gap-1.5" }, [
                  createBaseVNode("span", { class: "h-1.5 w-1.5 rounded-full bg-blue-500" }),
                  createBaseVNode("span", null, "SmartLib Solution: Instant QR check-in & gate passes.")
                ], -1))
              ]),
              createBaseVNode("div", _hoisted_35, [
                createBaseVNode("div", _hoisted_36, [
                  createVNode(unref(Frown), { class: "h-6 w-6" })
                ]),
                _cache[35] || (_cache[35] = createBaseVNode("h3", { class: "text-lg font-bold text-slate-900 mb-2" }, "Untracked Study Progress", -1)),
                _cache[36] || (_cache[36] = createBaseVNode("p", { class: "text-sm text-slate-500 leading-relaxed" }, " No clear way to log your study sessions, analyze peak productivity hours, or stay motivated during intense exam preparations. ", -1)),
                _cache[37] || (_cache[37] = createBaseVNode("div", { class: "mt-6 pt-4 border-t border-slate-100 text-xs font-semibold text-slate-400 group-hover:text-red-500 transition-colors flex items-center gap-1.5" }, [
                  createBaseVNode("span", { class: "h-1.5 w-1.5 rounded-full bg-blue-500" }),
                  createBaseVNode("span", null, "SmartLib Solution: Visual productivity charts & rewards.")
                ], -1))
              ])
            ])
          ])
        ]),
        createBaseVNode("section", _hoisted_37, [
          createBaseVNode("div", _hoisted_38, [
            _cache[47] || (_cache[47] = createBaseVNode("div", { class: "max-w-3xl mx-auto mb-16" }, [
              createBaseVNode("h2", { class: "text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4" }, " Everything You Need for Modern Study "),
              createBaseVNode("p", { class: "text-lg text-slate-500" }, " Interactive floor maps, digitised catalogues, real-time analytics and automatic notifications in a single, lightning-fast platform. ")
            ], -1)),
            createBaseVNode("div", _hoisted_39, [
              (openBlock(), createElementBlock(Fragment, null, renderList(featuresList, (feature, idx) => {
                return createBaseVNode("button", {
                  key: feature.tabTitle,
                  onClick: ($event) => activeFeature.value = idx,
                  class: normalizeClass([
                    "px-5 py-3 rounded-full text-sm font-bold border transition-all duration-200 flex items-center space-x-2",
                    activeFeature.value === idx ? "bg-blue-600 border-blue-600 text-white shadow-md shadow-blue-500/10" : "bg-white border-slate-200 text-slate-600 hover:border-slate-400 hover:bg-slate-50"
                  ])
                }, [
                  (openBlock(), createBlock(resolveDynamicComponent(feature.tabIcon), { class: "h-4.5 w-4.5" })),
                  createBaseVNode("span", null, toDisplayString(feature.tabTitle), 1)
                ], 10, _hoisted_40);
              }), 64))
            ]),
            createBaseVNode("div", _hoisted_41, [
              createVNode(Transition, {
                name: "fade-slide-spotlight",
                mode: "out-in"
              }, {
                default: withCtx(() => [
                  (openBlock(), createElementBlock("div", {
                    key: activeFeature.value,
                    class: "grid grid-cols-1 md:grid-cols-12 bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden min-h-[400px]"
                  }, [
                    createBaseVNode("div", _hoisted_42, [
                      createBaseVNode("div", _hoisted_43, [
                        (openBlock(), createBlock(resolveDynamicComponent(featuresList[activeFeature.value].tabIcon), { class: "h-6 w-6" }))
                      ]),
                      createBaseVNode("h3", _hoisted_44, toDisplayString(featuresList[activeFeature.value].title), 1),
                      createBaseVNode("p", _hoisted_45, toDisplayString(featuresList[activeFeature.value].description), 1),
                      createBaseVNode("ul", _hoisted_46, [
                        (openBlock(true), createElementBlock(Fragment, null, renderList(featuresList[activeFeature.value].bullets, (bullet) => {
                          return openBlock(), createElementBlock("li", {
                            key: bullet,
                            class: "flex items-center space-x-3 text-slate-700 text-sm font-medium"
                          }, [
                            createBaseVNode("div", _hoisted_47, [
                              createVNode(unref(Check), { class: "h-3.5 w-3.5" })
                            ]),
                            createBaseVNode("span", null, toDisplayString(bullet), 1)
                          ]);
                        }), 128))
                      ])
                    ]),
                    createBaseVNode("div", _hoisted_48, [
                      activeFeature.value === 0 ? (openBlock(), createElementBlock("div", _hoisted_49, [
                        _cache[38] || (_cache[38] = createBaseVNode("p", { class: "text-[10px] font-bold text-slate-400 uppercase tracking-wider text-center mb-4" }, "Click to Reserve a desk", -1)),
                        createBaseVNode("div", _hoisted_50, [
                          (openBlock(true), createElementBlock(Fragment, null, renderList(mockSeats.value, (seat) => {
                            return openBlock(), createElementBlock("button", {
                              key: seat.id,
                              onClick: ($event) => toggleMockSeat(seat.id),
                              class: normalizeClass([
                                "aspect-square rounded-xl border flex flex-col items-center justify-center text-xs font-bold transition-all relative",
                                seat.status === "booked" ? "bg-slate-200 border-slate-300 text-slate-400 cursor-not-allowed" : seat.status === "selected" ? "bg-blue-600 border-blue-600 text-white scale-105 shadow-md shadow-blue-500/20" : "bg-white border-slate-200 text-slate-700 hover:border-blue-400 hover:bg-blue-50/10"
                              ]),
                              disabled: seat.status === "booked"
                            }, [
                              createBaseVNode("span", null, toDisplayString(seat.label), 1),
                              seat.status === "selected" ? (openBlock(), createElementBlock("div", _hoisted_52, " ✓ ")) : createCommentVNode("", true)
                            ], 10, _hoisted_51);
                          }), 128))
                        ]),
                        createBaseVNode("p", _hoisted_53, toDisplayString(selectedSeatLabel.value ? `Selected: ${selectedSeatLabel.value}` : "Choose an empty seat"), 1)
                      ])) : createCommentVNode("", true),
                      activeFeature.value === 1 ? (openBlock(), createElementBlock("div", _hoisted_54, [
                        createBaseVNode("div", _hoisted_55, [
                          withDirectives(createBaseVNode("input", {
                            type: "text",
                            "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => mockSearchQuery.value = $event),
                            placeholder: "Search books...",
                            class: "w-full pl-9 pr-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-blue-500"
                          }, null, 512), [
                            [vModelText, mockSearchQuery.value]
                          ]),
                          createVNode(unref(Search), { class: "h-3.5 w-3.5 text-slate-400 absolute left-3 top-3" })
                        ]),
                        createBaseVNode("div", _hoisted_56, [
                          (openBlock(true), createElementBlock(Fragment, null, renderList(filteredMockBooks.value, (book) => {
                            return openBlock(), createElementBlock("div", {
                              key: book.title,
                              class: "flex items-center justify-between p-2 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors border border-slate-100"
                            }, [
                              createBaseVNode("div", null, [
                                createBaseVNode("h4", _hoisted_57, toDisplayString(book.title), 1),
                                createBaseVNode("p", _hoisted_58, toDisplayString(book.author), 1)
                              ]),
                              _cache[39] || (_cache[39] = createBaseVNode("span", { class: "text-[9px] font-bold bg-blue-50 text-blue-600 border border-blue-200 px-2 py-0.5 rounded-md" }, "Available", -1))
                            ]);
                          }), 128))
                        ])
                      ])) : createCommentVNode("", true),
                      activeFeature.value === 2 ? (openBlock(), createElementBlock("div", _hoisted_59, [
                        (openBlock(true), createElementBlock(Fragment, null, renderList(mockEvents.value, (ev, idx) => {
                          return openBlock(), createElementBlock("div", {
                            key: ev.title,
                            class: "bg-white border border-slate-200 rounded-2xl p-4 shadow-sm flex items-center justify-between"
                          }, [
                            createBaseVNode("div", null, [
                              createBaseVNode("span", _hoisted_60, toDisplayString(ev.category), 1),
                              createBaseVNode("h4", _hoisted_61, toDisplayString(ev.title), 1),
                              createBaseVNode("p", _hoisted_62, [
                                createVNode(unref(Clock), { class: "h-3 w-3" }),
                                createBaseVNode("span", null, toDisplayString(ev.time), 1)
                              ])
                            ]),
                            createBaseVNode("button", {
                              onClick: ($event) => ev.registered = !ev.registered,
                              class: normalizeClass([
                                "px-2.5 py-1.5 rounded-lg text-[10px] font-bold transition-all",
                                ev.registered ? "bg-green-50 border border-green-200 text-green-600" : "bg-blue-600 text-white hover:bg-blue-700"
                              ])
                            }, toDisplayString(ev.registered ? "Registered" : "Join"), 11, _hoisted_63)
                          ]);
                        }), 128))
                      ])) : createCommentVNode("", true),
                      activeFeature.value === 3 ? (openBlock(), createElementBlock("div", _hoisted_64, [
                        createBaseVNode("div", _hoisted_65, [
                          createVNode(unref(QrCode), { class: "h-28 w-28 text-slate-800" }),
                          _cache[40] || (_cache[40] = createBaseVNode("div", { class: "absolute left-0 right-0 h-0.5 bg-blue-500 animate-scan shadow-lg shadow-blue-500/80" }, null, -1))
                        ]),
                        _cache[41] || (_cache[41] = createBaseVNode("p", { class: "text-xs font-bold text-slate-700 mt-4" }, "Gate Scanner", -1)),
                        _cache[42] || (_cache[42] = createBaseVNode("p", { class: "text-[10px] text-slate-400 mt-1" }, "Scan to auto-checkin desk reservation", -1))
                      ])) : createCommentVNode("", true),
                      activeFeature.value === 4 ? (openBlock(), createElementBlock("div", _hoisted_66, [..._cache[43] || (_cache[43] = [
                        createBaseVNode("div", { class: "flex justify-between items-center mb-4" }, [
                          createBaseVNode("h4", { class: "text-xs font-bold text-slate-800" }, "Weekly Study Time"),
                          createBaseVNode("span", { class: "text-[9px] font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded-full border border-green-200" }, "+12% vs last week")
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
                          createBaseVNode("p", { class: "text-[10px] text-slate-500 font-medium" }, "Daily Average"),
                          createBaseVNode("p", { class: "text-xs font-bold text-slate-800" }, "4.8 hours")
                        ], -1)
                      ])])) : createCommentVNode("", true),
                      activeFeature.value === 5 ? (openBlock(), createElementBlock("div", _hoisted_67, [
                        createBaseVNode("div", _hoisted_68, [
                          createBaseVNode("div", _hoisted_69, [
                            createVNode(unref(Award), { class: "h-5.5 w-5.5" })
                          ]),
                          _cache[44] || (_cache[44] = createBaseVNode("div", null, [
                            createBaseVNode("h4", { class: "text-xs font-bold text-slate-800" }, "Loyalty Level 3"),
                            createBaseVNode("p", { class: "text-[10px] text-slate-400 mt-0.5" }, "Academic Champion")
                          ], -1))
                        ]),
                        _cache[45] || (_cache[45] = createBaseVNode("div", null, [
                          createBaseVNode("div", { class: "flex justify-between items-center text-[10px] font-bold text-slate-600 mb-1.5" }, [
                            createBaseVNode("span", null, "Points Progress"),
                            createBaseVNode("span", null, "3,450 / 5,000 pts")
                          ]),
                          createBaseVNode("div", { class: "w-full h-2 bg-slate-100 rounded-full overflow-hidden" }, [
                            createBaseVNode("div", {
                              class: "h-full bg-blue-600 rounded-full",
                              style: { "width": "69%" }
                            })
                          ])
                        ], -1)),
                        _cache[46] || (_cache[46] = createBaseVNode("div", { class: "mt-3.5 flex items-center space-x-2" }, [
                          createBaseVNode("span", { class: "text-[9px] font-bold bg-blue-50 text-blue-600 border border-blue-200 px-2 py-0.5 rounded-full" }, "Reward Unlockable"),
                          createBaseVNode("span", { class: "text-[9px] text-slate-500 font-semibold" }, "• 1 Free Espresso Pass")
                        ], -1))
                      ])) : createCommentVNode("", true)
                    ])
                  ]))
                ]),
                _: 1
              })
            ])
          ])
        ]),
        _cache[80] || (_cache[80] = createStaticVNode('<section id="how-it-works" class="py-20 md:py-28 border-t border-slate-200 bg-slate-50/50" data-v-42d15a72><div class="max-w-7xl mx-auto px-6" data-v-42d15a72><div class="text-center max-w-2xl mx-auto mb-16" data-v-42d15a72><h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4" data-v-42d15a72> How It Works in 4 Steps </h2><p class="text-base text-slate-500" data-v-42d15a72> Booking study desks and checking out digital learning resources takes just a few seconds. </p></div><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" data-v-42d15a72><div class="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm hover:shadow-md transition-all text-left relative group" data-v-42d15a72><div class="h-12 w-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 font-black mb-6 group-hover:scale-105 transition-all" data-v-42d15a72><span data-v-42d15a72>1</span></div><h3 class="text-lg font-bold text-slate-900 mb-2" data-v-42d15a72>Find a Library</h3><p class="text-sm text-slate-500 leading-relaxed" data-v-42d15a72> Explore participating ICAP library locations nationwide and verify current real-time seat occupancy statistics. </p></div><div class="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm hover:shadow-md transition-all text-left relative group" data-v-42d15a72><div class="h-12 w-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 font-black mb-6 group-hover:scale-105 transition-all" data-v-42d15a72><span data-v-42d15a72>2</span></div><h3 class="text-lg font-bold text-slate-900 mb-2" data-v-42d15a72>Select &amp; Reserve</h3><p class="text-sm text-slate-500 leading-relaxed" data-v-42d15a72> Check out live interactive floor seat maps, select your preferred study desk location, and reserve instantly. </p></div><div class="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm hover:shadow-md transition-all text-left relative group" data-v-42d15a72><div class="h-12 w-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 font-black mb-6 group-hover:scale-105 transition-all" data-v-42d15a72><span data-v-42d15a72>3</span></div><h3 class="text-lg font-bold text-slate-900 mb-2" data-v-42d15a72>Quick QR Gate Access</h3><p class="text-sm text-slate-500 leading-relaxed" data-v-42d15a72> Arrive at the library entrance and scan your student QR check-in pass at the gate scanner to authorize entrance. </p></div><div class="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm hover:shadow-md transition-all text-left relative group" data-v-42d15a72><div class="h-12 w-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 font-black mb-6 group-hover:scale-105 transition-all" data-v-42d15a72><span data-v-42d15a72>4</span></div><h3 class="text-lg font-bold text-slate-900 mb-2" data-v-42d15a72>Optimize Study Session</h3><p class="text-sm text-slate-500 leading-relaxed" data-v-42d15a72> Log into the desk terminal, track your remaining session duration, extend bookings as needed, and enjoy study. </p></div></div></div></section>', 1)),
        createBaseVNode("section", _hoisted_70, [
          createBaseVNode("div", _hoisted_71, [
            _cache[70] || (_cache[70] = createBaseVNode("div", { class: "max-w-2xl mx-auto mb-12" }, [
              createBaseVNode("h2", { class: "text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4" }, " Simple, Transparent Pricing "),
              createBaseVNode("p", { class: "text-base text-slate-500" }, " Choose the membership tier that fits your academic goals or institute needs. ")
            ], -1)),
            createBaseVNode("div", _hoisted_72, [
              createBaseVNode("span", {
                class: normalizeClass(["text-sm font-bold transition-all", !isAnnual.value ? "text-blue-600" : "text-slate-500"])
              }, "Monthly Billing", 2),
              createBaseVNode("button", {
                onClick: _cache[7] || (_cache[7] = ($event) => isAnnual.value = !isAnnual.value),
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
              }, [..._cache[48] || (_cache[48] = [
                createTextVNode(" Annual Billing ", -1),
                createBaseVNode("span", { class: "text-xs bg-green-50 border border-green-200 text-green-600 px-2 py-0.5 rounded-full font-bold ml-1.5" }, "Save 20%", -1)
              ])], 2)
            ]),
            createBaseVNode("div", _hoisted_73, [
              createBaseVNode("div", _hoisted_74, [
                createBaseVNode("div", null, [
                  _cache[52] || (_cache[52] = createStaticVNode('<span class="text-xs font-bold text-slate-400 uppercase tracking-widest" data-v-42d15a72>Free Account</span><h3 class="text-xl font-bold text-slate-800 mt-2" data-v-42d15a72>Student Basic</h3><p class="text-xs text-slate-500 mt-1" data-v-42d15a72>Ideal for occasional study sessions</p><div class="price-box my-6 flex items-baseline" data-v-42d15a72><span class="text-4xl font-black text-slate-900" data-v-42d15a72>Rs. 0</span><span class="text-xs font-semibold text-slate-500 ml-1.5" data-v-42d15a72>/ forever</span></div>', 4)),
                  createBaseVNode("ul", _hoisted_75, [
                    createBaseVNode("li", _hoisted_76, [
                      createVNode(unref(Check), { class: "h-4 w-4 text-blue-600" }),
                      _cache[49] || (_cache[49] = createBaseVNode("span", null, "Access to catalog search", -1))
                    ]),
                    createBaseVNode("li", _hoisted_77, [
                      createVNode(unref(Check), { class: "h-4 w-4 text-blue-600" }),
                      _cache[50] || (_cache[50] = createBaseVNode("span", null, "Up to 2 bookings per month", -1))
                    ]),
                    createBaseVNode("li", _hoisted_78, [
                      createVNode(unref(Check), { class: "h-4 w-4 text-blue-600" }),
                      _cache[51] || (_cache[51] = createBaseVNode("span", null, "Standard gate check-in", -1))
                    ])
                  ])
                ]),
                createVNode(_component_router_link, {
                  to: "/register",
                  class: "w-full text-center py-3.5 rounded-2xl text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-all mt-8"
                }, {
                  default: withCtx(() => [..._cache[53] || (_cache[53] = [
                    createTextVNode(" Sign Up Free ", -1)
                  ])]),
                  _: 1
                })
              ]),
              createBaseVNode("div", _hoisted_79, [
                _cache[63] || (_cache[63] = createBaseVNode("div", { class: "absolute -top-3.5 right-6 bg-blue-600 text-white text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full border border-blue-700" }, " Popular Choice ", -1)),
                createBaseVNode("div", null, [
                  _cache[59] || (_cache[59] = createBaseVNode("span", { class: "text-xs font-bold text-blue-600 uppercase tracking-widest" }, "Scholar Pro", -1)),
                  _cache[60] || (_cache[60] = createBaseVNode("h3", { class: "text-xl font-bold text-slate-800 mt-2" }, "Premium Member", -1)),
                  _cache[61] || (_cache[61] = createBaseVNode("p", { class: "text-xs text-slate-500 mt-1" }, "Best for active CA & finance students", -1)),
                  createBaseVNode("div", _hoisted_80, [
                    createBaseVNode("span", _hoisted_81, toDisplayString(isAnnual.value ? "Rs. 799" : "Rs. 999"), 1),
                    _cache[54] || (_cache[54] = createBaseVNode("span", { class: "text-xs font-semibold text-slate-500 ml-1.5" }, "/ month", -1))
                  ]),
                  createBaseVNode("ul", _hoisted_82, [
                    createBaseVNode("li", _hoisted_83, [
                      createVNode(unref(Check), { class: "h-4 w-4 text-blue-600" }),
                      _cache[55] || (_cache[55] = createBaseVNode("span", null, "Unlimited seat reservations", -1))
                    ]),
                    createBaseVNode("li", _hoisted_84, [
                      createVNode(unref(Check), { class: "h-4 w-4 text-blue-600" }),
                      _cache[56] || (_cache[56] = createBaseVNode("span", null, "Pre-book up to 7 days in advance", -1))
                    ]),
                    createBaseVNode("li", _hoisted_85, [
                      createVNode(unref(Check), { class: "h-4 w-4 text-blue-600" }),
                      _cache[57] || (_cache[57] = createBaseVNode("span", null, "Interactive floor maps", -1))
                    ]),
                    createBaseVNode("li", _hoisted_86, [
                      createVNode(unref(Check), { class: "h-4 w-4 text-blue-600" }),
                      _cache[58] || (_cache[58] = createBaseVNode("span", null, "Loyalty points rewards access", -1))
                    ])
                  ])
                ]),
                createVNode(_component_router_link, {
                  to: "/register",
                  class: "w-full text-center py-3.5 rounded-2xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-md shadow-blue-500/15 transition-all mt-8"
                }, {
                  default: withCtx(() => [..._cache[62] || (_cache[62] = [
                    createTextVNode(" Get Started ", -1)
                  ])]),
                  _: 1
                })
              ]),
              createBaseVNode("div", _hoisted_87, [
                createBaseVNode("div", null, [
                  _cache[68] || (_cache[68] = createStaticVNode('<span class="text-xs font-bold text-slate-400 uppercase tracking-widest" data-v-42d15a72>Institutional License</span><h3 class="text-xl font-bold text-slate-800 mt-2" data-v-42d15a72>Smart Institute</h3><p class="text-xs text-slate-500 mt-1" data-v-42d15a72>For universities, colleges &amp; libraries</p><div class="price-box my-6 flex items-baseline" data-v-42d15a72><span class="text-4xl font-black text-slate-900" data-v-42d15a72>Custom</span><span class="text-xs font-semibold text-slate-500 ml-1.5" data-v-42d15a72>/ location</span></div>', 4)),
                  createBaseVNode("ul", _hoisted_88, [
                    createBaseVNode("li", _hoisted_89, [
                      createVNode(unref(Check), { class: "h-4 w-4 text-blue-600" }),
                      _cache[64] || (_cache[64] = createBaseVNode("span", null, "Unlimited admin & librarian seats", -1))
                    ]),
                    createBaseVNode("li", _hoisted_90, [
                      createVNode(unref(Check), { class: "h-4 w-4 text-blue-600" }),
                      _cache[65] || (_cache[65] = createBaseVNode("span", null, "Full student analytics dashboard", -1))
                    ]),
                    createBaseVNode("li", _hoisted_91, [
                      createVNode(unref(Check), { class: "h-4 w-4 text-blue-600" }),
                      _cache[66] || (_cache[66] = createBaseVNode("span", null, "Automated checkout & notifications", -1))
                    ]),
                    createBaseVNode("li", _hoisted_92, [
                      createVNode(unref(Check), { class: "h-4 w-4 text-blue-600" }),
                      _cache[67] || (_cache[67] = createBaseVNode("span", null, "Support API integrations", -1))
                    ])
                  ])
                ]),
                _cache[69] || (_cache[69] = createBaseVNode("a", {
                  href: "mailto:support@smartlib.com?subject=Institutional License Inquiry",
                  class: "w-full text-center py-3.5 rounded-2xl text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-all mt-8"
                }, " Contact Support ", -1))
              ])
            ])
          ])
        ]),
        createBaseVNode("section", _hoisted_93, [
          createBaseVNode("div", _hoisted_94, [
            _cache[72] || (_cache[72] = createBaseVNode("div", { class: "text-center max-w-2xl mx-auto mb-16" }, [
              createBaseVNode("h2", { class: "text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4" }, " Frequently Asked Questions "),
              createBaseVNode("p", { class: "text-base text-slate-500" }, " Find answers to common questions about reservation limits, check-in requirements and loyalty points. ")
            ], -1)),
            createBaseVNode("div", _hoisted_95, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(faqList.value, (faq, idx) => {
                return openBlock(), createElementBlock("div", {
                  key: faq.question,
                  class: "bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm"
                }, [
                  createBaseVNode("button", {
                    onClick: ($event) => toggleFaq(idx),
                    class: "w-full p-6 flex justify-between items-center text-left focus:outline-none"
                  }, [
                    createBaseVNode("span", _hoisted_97, toDisplayString(faq.question), 1),
                    createBaseVNode("span", {
                      class: "ml-4 flex-shrink-0 text-slate-400 transition-transform duration-200",
                      style: normalizeStyle(faq.open ? "transform: rotate(180deg)" : "")
                    }, [..._cache[71] || (_cache[71] = [
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
                  ], 8, _hoisted_96),
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
        createBaseVNode("footer", _hoisted_98, [
          createBaseVNode("div", _hoisted_99, [
            createBaseVNode("div", _hoisted_100, [
              createBaseVNode("div", _hoisted_101, [
                createVNode(_component_router_link, {
                  to: "/",
                  class: "flex items-center space-x-2.5 mb-6 group"
                }, {
                  default: withCtx(() => [
                    createBaseVNode("div", _hoisted_102, [
                      createVNode(unref(BookOpen), { class: "h-5.5 w-5.5" })
                    ]),
                    _cache[73] || (_cache[73] = createBaseVNode("span", { class: "text-lg font-extrabold text-slate-900 leading-none tracking-tight" }, "SmartLib", -1))
                  ]),
                  _: 1
                }),
                _cache[74] || (_cache[74] = createBaseVNode("p", { class: "text-xs text-slate-500 leading-relaxed max-w-sm mb-6" }, " A comprehensive library seat booking and catalog management platform built for modern academic and research centers. Optimize your study environment with real-time analytics. ", -1)),
                createBaseVNode("div", _hoisted_103, [
                  createBaseVNode("a", _hoisted_104, [
                    createVNode(unref(Twitter), { class: "h-4.5 w-4.5" })
                  ]),
                  createBaseVNode("a", _hoisted_105, [
                    createVNode(unref(Linkedin), { class: "h-4.5 w-4.5" })
                  ]),
                  createBaseVNode("a", _hoisted_106, [
                    createVNode(unref(Facebook), { class: "h-4.5 w-4.5" })
                  ])
                ])
              ]),
              _cache[77] || (_cache[77] = createStaticVNode('<div class="md:col-span-3 flex flex-col items-start text-left" data-v-42d15a72><h4 class="text-xs font-black uppercase text-slate-400 tracking-wider mb-6" data-v-42d15a72>Solutions</h4><ul class="space-y-3.5" data-v-42d15a72><li data-v-42d15a72><a href="#features" class="text-xs font-semibold text-slate-500 hover:text-blue-600 transition-colors" data-v-42d15a72>Seat Booking</a></li><li data-v-42d15a72><a href="#features" class="text-xs font-semibold text-slate-500 hover:text-blue-600 transition-colors" data-v-42d15a72>Catalog Manager</a></li><li data-v-42d15a72><a href="#features" class="text-xs font-semibold text-slate-500 hover:text-blue-600 transition-colors" data-v-42d15a72>Gate Check-In</a></li><li data-v-42d15a72><a href="#features" class="text-xs font-semibold text-slate-500 hover:text-blue-600 transition-colors" data-v-42d15a72>Digital Analytics</a></li></ul></div>', 1)),
              createBaseVNode("div", _hoisted_107, [
                _cache[76] || (_cache[76] = createBaseVNode("h4", { class: "text-xs font-black uppercase text-slate-400 tracking-wider mb-6" }, "Security & Integrity", -1)),
                createBaseVNode("div", _hoisted_108, [
                  createBaseVNode("div", _hoisted_109, [
                    createVNode(unref(Shield), { class: "h-5.5 w-5.5" })
                  ]),
                  _cache[75] || (_cache[75] = createBaseVNode("div", null, [
                    createBaseVNode("h5", { class: "text-xs font-bold text-slate-800" }, "Verified System Protection"),
                    createBaseVNode("p", { class: "text-[11px] text-slate-500 mt-1.5 leading-relaxed" }, " All seat bookings, queue status updates, and catalog lookups are secure. Fast automated gate scanning provides fully compliant library access. ")
                  ], -1))
                ])
              ])
            ]),
            _cache[78] || (_cache[78] = createStaticVNode('<div class="flex flex-col sm:flex-row justify-between items-center text-slate-400 text-[11px] font-semibold" data-v-42d15a72><p data-v-42d15a72>© 2024 SmartLib System. All rights reserved.</p><div class="flex space-x-6 mt-4 sm:mt-0" data-v-42d15a72><a href="#" class="hover:text-blue-600 transition-colors" data-v-42d15a72>Privacy Policy</a><a href="#" class="hover:text-blue-600 transition-colors" data-v-42d15a72>Terms of Service</a><a href="#" class="hover:text-blue-600 transition-colors" data-v-42d15a72>System Status</a></div></div>', 1))
          ])
        ])
      ]);
    };
  }
});
const LandingPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-42d15a72"]]);
export {
  LandingPage as default
};
