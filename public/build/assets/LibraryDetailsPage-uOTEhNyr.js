import { d as defineComponent, x as useAuth, r as ref, c as computed, o as onMounted, a as createElementBlock, b as createBaseVNode, f as createVNode, w as withCtx, g as resolveComponent, u as unref, t as toDisplayString, i as createTextVNode, j as createCommentVNode, n as normalizeClass, F as Fragment, k as renderList, p as withDirectives, v as vModelText, h as createBlock, q as normalizeStyle, G as useRoute, L as studentAPI, m as resolveDynamicComponent, l as openBlock } from "./main-C124sHqx.js";
import { u as useSwal } from "./useSwal-pQW_XkRe.js";
import { C as ChevronRight } from "./chevron-right-CULPaQVn.js";
import { M as MapPin } from "./map-pin-CvyXaBel.js";
import { U as Users } from "./users-7e6zAk8P.js";
import { C as CircleCheckBig } from "./circle-check-big-CO4gn6qh.js";
import { C as Clock } from "./clock-B_R0d3h4.js";
import { S as Star } from "./star-BJP58xn-.js";
import { R as RefreshCw } from "./refresh-cw-BECuebdg.js";
import { T as Trash2 } from "./trash-2-YJmIGCrW.js";
import { C as ChevronDown } from "./chevron-down-CR7XalXd.js";
import { P as Phone } from "./phone-SiDfIZFE.js";
import { M as Mail } from "./mail-BSWDeJsv.js";
import { W as Wifi } from "./wifi-CbzKV2kI.js";
import { C as CircleAlert } from "./circle-alert-j0S5RkVw.js";
import { C as Coffee, W as Wind } from "./wind-CouVEZZF.js";
import { P as Printer } from "./printer-DvpO9at_.js";
import { B as BookOpen } from "./book-open-BVgq79sG.js";
import { Z as Zap } from "./zap-BnJNWk3w.js";
import { L as Lock } from "./lock-Ctz1rL0V.js";
import { C as Camera } from "./camera-hJQxo1dD.js";
import { f as formatDistanceToNow } from "./formatDistanceToNow-CgRkJOVj.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
/* empty css               */
import "./createLucideIcon-8y9GOHiU.js";
import "./constructNow-CQ6Py-t8.js";
import "./en-US-CtEcOBul.js";
const _hoisted_1 = {
  key: 0,
  class: "flex flex-col items-center justify-center py-24 space-y-4 font-outfit"
};
const _hoisted_2 = {
  key: 1,
  class: "space-y-6 pb-12 font-outfit"
};
const _hoisted_3 = { class: "flex items-center text-xs text-slate-400 font-semibold uppercase tracking-wide text-left" };
const _hoisted_4 = { class: "text-slate-500" };
const _hoisted_5 = { class: "relative h-60 md:h-72 rounded-2xl overflow-hidden shadow-md" };
const _hoisted_6 = ["src"];
const _hoisted_7 = { class: "absolute bottom-0 left-0 p-6 md:p-8 text-white text-left" };
const _hoisted_8 = { class: "text-2xl md:text-3xl font-bold mb-2" };
const _hoisted_9 = { class: "flex items-center text-slate-200 text-xs font-semibold" };
const _hoisted_10 = { class: "grid grid-cols-1 lg:grid-cols-3 gap-6" };
const _hoisted_11 = { class: "lg:col-span-2 space-y-6" };
const _hoisted_12 = { class: "bg-white rounded-2xl p-6 shadow-sm border border-slate-100 text-left" };
const _hoisted_13 = { class: "text-slate-600 text-xs md:text-sm leading-relaxed" };
const _hoisted_14 = { class: "grid grid-cols-2 md:grid-cols-3 gap-5 mt-6 pt-6 border-t border-slate-50" };
const _hoisted_15 = { class: "flex items-center space-x-3" };
const _hoisted_16 = { class: "p-2.5 bg-blue-50/60 border border-blue-100/50 rounded-xl text-blue-600" };
const _hoisted_17 = { class: "text-left leading-none" };
const _hoisted_18 = { class: "font-bold text-slate-800 text-sm leading-none" };
const _hoisted_19 = { class: "flex items-center space-x-3" };
const _hoisted_20 = { class: "p-2.5 bg-emerald-50/60 border border-emerald-100/50 rounded-xl text-emerald-600" };
const _hoisted_21 = { class: "text-left leading-none" };
const _hoisted_22 = { class: "font-bold text-slate-800 text-sm leading-none" };
const _hoisted_23 = { class: "flex items-center space-x-3" };
const _hoisted_24 = { class: "p-2.5 bg-purple-50/60 border border-purple-100/50 rounded-xl text-purple-600" };
const _hoisted_25 = { class: "text-left leading-none" };
const _hoisted_26 = { class: "bg-white rounded-2xl p-6 shadow-sm border border-slate-100 text-left" };
const _hoisted_27 = { class: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4" };
const _hoisted_28 = { class: "text-xs font-medium text-slate-700 text-center leading-none" };
const _hoisted_29 = {
  key: 0,
  class: "bg-white rounded-2xl p-6 shadow-sm border border-slate-100 text-left"
};
const _hoisted_30 = { class: "space-y-3.5" };
const _hoisted_31 = { class: "mt-0.5 p-1 bg-orange-50 border border-orange-100 text-orange-600 rounded-lg" };
const _hoisted_32 = { class: "text-xs text-slate-600 leading-relaxed font-semibold" };
const _hoisted_33 = { class: "bg-white rounded-2xl p-6 shadow-sm border border-slate-100 text-left" };
const _hoisted_34 = { class: "flex items-center justify-between mb-6" };
const _hoisted_35 = { class: "flex items-center bg-yellow-50/50 px-3 py-1 rounded-lg border border-yellow-100/60 leading-none" };
const _hoisted_36 = { class: "text-base font-bold text-yellow-700" };
const _hoisted_37 = {
  key: 0,
  class: "bg-slate-50/50 rounded-xl p-5 mb-6 border border-slate-100"
};
const _hoisted_38 = { class: "space-y-4" };
const _hoisted_39 = { class: "flex items-center space-x-1.5" };
const _hoisted_40 = ["onClick"];
const _hoisted_41 = ["disabled"];
const _hoisted_42 = {
  key: 1,
  class: "bg-blue-50/40 rounded-xl p-4 mb-6 border border-blue-100/50 relative"
};
const _hoisted_43 = { class: "flex justify-between items-start mb-2.5" };
const _hoisted_44 = { class: "flex items-center mb-2 leading-none" };
const _hoisted_45 = { class: "text-xs text-blue-800 leading-relaxed font-semibold" };
const _hoisted_46 = {
  key: 2,
  class: "flex items-center justify-between pt-2 pb-1 text-left"
};
const _hoisted_47 = { class: "text-xs font-bold text-slate-700 uppercase tracking-wider" };
const _hoisted_48 = { class: "flex items-center space-x-1 p-0.5 bg-slate-100/80 rounded-xl text-[11px] font-semibold" };
const _hoisted_49 = { class: "space-y-4" };
const _hoisted_50 = {
  key: 0,
  class: "flex justify-center py-6"
};
const _hoisted_51 = {
  key: 1,
  class: "divide-y divide-slate-100"
};
const _hoisted_52 = { class: "flex items-start space-x-3" };
const _hoisted_53 = ["src"];
const _hoisted_54 = { class: "flex-1 min-w-0" };
const _hoisted_55 = { class: "flex items-center justify-between mb-1.5" };
const _hoisted_56 = { class: "font-semibold text-slate-800 text-xs leading-none truncate pr-3" };
const _hoisted_57 = { class: "text-[10px] text-slate-400 font-semibold flex-shrink-0" };
const _hoisted_58 = { class: "flex items-center mb-1.5 leading-none" };
const _hoisted_59 = { class: "text-xs text-slate-500 leading-relaxed" };
const _hoisted_60 = {
  key: 0,
  class: "pt-4 text-center"
};
const _hoisted_61 = {
  key: 2,
  class: "text-center py-10 bg-slate-50/50 rounded-xl border border-dashed border-slate-200/80"
};
const _hoisted_62 = { class: "space-y-6" };
const _hoisted_63 = { class: "bg-white rounded-2xl p-6 shadow-sm border border-slate-200 sticky top-24 text-left" };
const _hoisted_64 = { class: "space-y-2 mb-6" };
const _hoisted_65 = { class: "flex justify-between text-xs font-medium leading-none" };
const _hoisted_66 = { class: "text-green-600" };
const _hoisted_67 = { class: "w-full bg-slate-100 rounded-full h-1.5 overflow-hidden" };
const _hoisted_68 = { class: "mt-5 pt-5 border-t border-slate-100 space-y-3.5" };
const _hoisted_69 = { class: "flex items-center text-xs text-slate-600 font-semibold leading-none" };
const _hoisted_70 = { class: "flex items-center text-xs text-slate-600 font-semibold leading-none" };
const _hoisted_71 = { class: "truncate" };
const _hoisted_72 = {
  key: 0,
  class: "flex items-center text-xs font-semibold leading-none text-emerald-700 bg-emerald-50/80 p-3 rounded-xl border border-emerald-100/80"
};
const _hoisted_73 = { class: "flex flex-col text-left" };
const _hoisted_74 = { class: "font-mono text-xs font-bold text-emerald-900 mt-1 select-all" };
const _hoisted_75 = { class: "bg-white rounded-2xl p-6 shadow-sm border border-slate-100 text-left" };
const _hoisted_76 = { class: "space-y-3" };
const _hoisted_77 = {
  key: 0,
  class: "text-slate-800"
};
const _hoisted_78 = {
  key: 1,
  class: "text-red-500 font-semibold"
};
const _hoisted_79 = {
  key: 2,
  class: "text-center py-20 font-outfit"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "LibraryDetailsPage",
  setup(__props) {
    const route = useRoute();
    const { user } = useAuth();
    const { showSuccess, showError, showConfirm } = useSwal();
    const library = ref(null);
    const loading = ref(true);
    const reviews = ref([]);
    const loadingReviews = ref(false);
    const submittingReview = ref(false);
    const newReview = ref({ rating: 0, comment: "" });
    const reviewSortMode = ref("newest");
    const visibleReviewCount = ref(3);
    const userReview = computed(() => {
      return reviews.value.find((r) => r.user_id === user.value?.id);
    });
    const otherReviewsSorted = computed(() => {
      let list = [...reviews.value.filter((r) => r.user_id !== user.value?.id)];
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
    const displayedOtherReviews = computed(() => {
      return otherReviewsSorted.value.slice(0, visibleReviewCount.value);
    });
    const hasMoreOtherReviews = computed(() => {
      return visibleReviewCount.value < otherReviewsSorted.value.length;
    });
    const libraryCapacity = computed(() => {
      if (!library.value) return 0;
      return library.value.capacity && library.value.capacity > 0 ? library.value.capacity : library.value.totalSeats || 0;
    });
    const availableSeatsPercent = computed(() => {
      if (!library.value || !libraryCapacity.value) return 0;
      return Math.min(100, Math.round((library.value.availableSeats || 0) / libraryCapacity.value * 100));
    });
    const fetchReviews = async () => {
      loadingReviews.value = true;
      try {
        const id = parseInt(route.params.libraryId);
        reviews.value = await studentAPI.getLibraryReviews(id);
      } catch (error) {
        console.error("Failed to fetch reviews:", error);
      } finally {
        loadingReviews.value = false;
      }
    };
    const submitReview = async () => {
      if (newReview.value.rating === 0) return;
      submittingReview.value = true;
      try {
        const id = parseInt(route.params.libraryId);
        const response = await studentAPI.submitReview(id, newReview.value);
        const index = reviews.value.findIndex((r) => r.user_id === user.value?.id);
        if (index !== -1) {
          reviews.value[index] = response.review;
        } else {
          reviews.value.unshift(response.review);
        }
        await fetchLibrary();
        newReview.value = { rating: 0, comment: "" };
        showSuccess("Submitted", "Your review has been saved.");
      } catch (error) {
        console.error("Failed to submit review:", error);
        showError("Submission Failed", "Could not save your review. Please try again.");
      } finally {
        submittingReview.value = false;
      }
    };
    const deleteReview = async (id) => {
      if (!await showConfirm("Delete Review", "Are you sure you want to remove your review?", "Delete")) return;
      try {
        await studentAPI.deleteReview(id);
        reviews.value = reviews.value.filter((r) => r.id !== id);
        await fetchLibrary();
        showSuccess("Deleted", "Your review has been removed.");
      } catch (error) {
        console.error("Failed to delete review:", error);
        showError("Delete Failed", "Could not remove your review.");
      }
    };
    const fetchLibrary = async () => {
      try {
        const id = parseInt(route.params.libraryId);
        library.value = await studentAPI.getLibrary(id);
      } catch (error) {
        console.error("Failed to fetch library:", error);
      } finally {
        loading.value = false;
      }
    };
    const parseTimeToMinutes = (timeStr) => {
      if (!timeStr) return null;
      const str = timeStr.trim();
      const match12 = str.match(/^(\d{1,2}):(\d{2})\s*(AM|PM)$/i);
      if (match12) {
        let hours = parseInt(match12[1]);
        const minutes = parseInt(match12[2]);
        const ampm = match12[3].toUpperCase();
        if (ampm === "PM" && hours < 12) hours += 12;
        if (ampm === "AM" && hours === 12) hours = 0;
        return hours * 60 + minutes;
      }
      const match24 = str.match(/^(\d{1,2}):(\d{2})$/);
      if (match24) {
        const hours = parseInt(match24[1]);
        const minutes = parseInt(match24[2]);
        return hours * 60 + minutes;
      }
      return null;
    };
    const isOpen = computed(() => {
      if (!library.value?.operating_days) return false;
      const now = /* @__PURE__ */ new Date();
      const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      const todayName = days[now.getDay()];
      const todayHours = library.value.operating_days.find((d) => d.day === todayName);
      if (!todayHours || !todayHours.isOpen) return false;
      if (!todayHours.openTime || !todayHours.closeTime) return false;
      const currentMinutes = now.getHours() * 60 + now.getMinutes();
      const openMinutes = parseTimeToMinutes(todayHours.openTime);
      const closeMinutes = parseTimeToMinutes(todayHours.closeTime);
      if (openMinutes === null || closeMinutes === null) return false;
      if (openMinutes <= closeMinutes) {
        return currentMinutes >= openMinutes && currentMinutes < closeMinutes;
      } else {
        return currentMinutes >= openMinutes || currentMinutes < closeMinutes;
      }
    });
    const isToday = (dayName) => {
      const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      return days[(/* @__PURE__ */ new Date()).getDay()] === dayName;
    };
    const getFacilityIcon = (facility) => {
      const name = facility.toLowerCase();
      if (name.includes("wifi")) return Wifi;
      if (name.includes("cafeteria") || name.includes("coffee")) return Coffee;
      if (name.includes("printing")) return Printer;
      if (name.includes("book")) return BookOpen;
      if (name.includes("power") || name.includes("outlet")) return Zap;
      if (name.includes("air") || name.includes("ac")) return Wind;
      if (name.includes("locker")) return Lock;
      if (name.includes("cctv") || name.includes("security")) return Camera;
      return CircleCheckBig;
    };
    const formatDateRelative = (date) => {
      return formatDistanceToNow(new Date(date), { addSuffix: true });
    };
    onMounted(() => {
      fetchLibrary();
      fetchReviews();
    });
    return (_ctx, _cache) => {
      const _component_router_link = resolveComponent("router-link");
      return loading.value ? (openBlock(), createElementBlock("div", _hoisted_1, [..._cache[6] || (_cache[6] = [
        createBaseVNode("div", { class: "animate-spin rounded-full h-10 w-10 border-2 border-blue-600 border-t-transparent" }, null, -1),
        createBaseVNode("p", { class: "text-xs font-semibold text-slate-400 uppercase tracking-wider animate-pulse" }, "Loading details...", -1)
      ])])) : library.value ? (openBlock(), createElementBlock("div", _hoisted_2, [
        createBaseVNode("div", _hoisted_3, [
          createVNode(_component_router_link, {
            to: "/student/libraries",
            class: "hover:text-blue-650 transition-colors"
          }, {
            default: withCtx(() => [..._cache[7] || (_cache[7] = [
              createTextVNode("Libraries", -1)
            ])]),
            _: 1
          }),
          createVNode(unref(ChevronRight), { class: "w-3.5 h-3.5 mx-1 text-slate-300" }),
          createBaseVNode("span", _hoisted_4, toDisplayString(library.value.name), 1)
        ]),
        createBaseVNode("div", _hoisted_5, [
          createBaseVNode("img", {
            src: library.value.photo_url,
            class: "w-full h-full object-cover",
            alt: "Library Cover"
          }, null, 8, _hoisted_6),
          _cache[8] || (_cache[8] = createBaseVNode("div", { class: "absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" }, null, -1)),
          createBaseVNode("div", _hoisted_7, [
            createBaseVNode("h1", _hoisted_8, toDisplayString(library.value.name), 1),
            createBaseVNode("div", _hoisted_9, [
              createVNode(unref(MapPin), { class: "w-4.5 h-4.5 mr-1.5 text-red-500" }),
              createTextVNode(" " + toDisplayString(library.value.address), 1)
            ])
          ])
        ]),
        createBaseVNode("div", _hoisted_10, [
          createBaseVNode("div", _hoisted_11, [
            createBaseVNode("section", _hoisted_12, [
              _cache[12] || (_cache[12] = createBaseVNode("h2", { class: "text-sm font-bold text-slate-700 uppercase tracking-wider mb-4" }, "About the Library", -1)),
              createBaseVNode("p", _hoisted_13, toDisplayString(library.value.description || "Welcome to " + library.value.name + ". We provide a quiet and productive environment for students to study and research. Our facilities are designed to cater to all your academic needs."), 1),
              createBaseVNode("div", _hoisted_14, [
                createBaseVNode("div", _hoisted_15, [
                  createBaseVNode("div", _hoisted_16, [
                    createVNode(unref(Users), { class: "w-5.5 h-5.5" })
                  ]),
                  createBaseVNode("div", _hoisted_17, [
                    _cache[9] || (_cache[9] = createBaseVNode("p", { class: "text-[9px] font-semibold text-slate-400 uppercase tracking-widest leading-none mb-1.5" }, "Capacity", -1)),
                    createBaseVNode("p", _hoisted_18, toDisplayString(libraryCapacity.value) + " Seats", 1)
                  ])
                ]),
                createBaseVNode("div", _hoisted_19, [
                  createBaseVNode("div", _hoisted_20, [
                    createVNode(unref(CircleCheckBig), { class: "w-5.5 h-5.5" })
                  ]),
                  createBaseVNode("div", _hoisted_21, [
                    _cache[10] || (_cache[10] = createBaseVNode("p", { class: "text-[9px] font-semibold text-slate-400 uppercase tracking-widest leading-none mb-1.5" }, "Available", -1)),
                    createBaseVNode("p", _hoisted_22, toDisplayString(library.value.availableSeats || 0) + " Seats", 1)
                  ])
                ]),
                createBaseVNode("div", _hoisted_23, [
                  createBaseVNode("div", _hoisted_24, [
                    createVNode(unref(Clock), { class: "w-5.5 h-5.5" })
                  ]),
                  createBaseVNode("div", _hoisted_25, [
                    _cache[11] || (_cache[11] = createBaseVNode("p", { class: "text-[9px] font-semibold text-slate-400 uppercase tracking-widest leading-none mb-1.5" }, "Status", -1)),
                    createBaseVNode("p", {
                      class: normalizeClass(["font-bold text-slate-800 text-sm leading-none", isOpen.value ? "text-emerald-600" : "text-red-500"])
                    }, toDisplayString(isOpen.value ? "Open Now" : "Closed"), 3)
                  ])
                ])
              ])
            ]),
            createBaseVNode("section", _hoisted_26, [
              _cache[13] || (_cache[13] = createBaseVNode("h2", { class: "text-sm font-bold text-slate-700 uppercase tracking-wider mb-5" }, "Facilities & Amenities", -1)),
              createBaseVNode("div", _hoisted_27, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(library.value.facilities, (facility) => {
                  return openBlock(), createElementBlock("div", {
                    key: facility,
                    class: "flex flex-col items-center p-4 rounded-xl bg-slate-50 border border-slate-100/50 hover:border-blue-200 hover:bg-blue-50/30 transition-all group"
                  }, [
                    (openBlock(), createBlock(resolveDynamicComponent(getFacilityIcon(facility)), { class: "w-7 h-7 text-slate-400 group-hover:text-blue-650 mb-2 transition-colors" })),
                    createBaseVNode("span", _hoisted_28, toDisplayString(facility), 1)
                  ]);
                }), 128))
              ])
            ]),
            library.value.rules && library.value.rules.length ? (openBlock(), createElementBlock("section", _hoisted_29, [
              _cache[14] || (_cache[14] = createBaseVNode("h2", { class: "text-sm font-bold text-slate-700 uppercase tracking-wider mb-4" }, "Library Rules", -1)),
              createBaseVNode("div", _hoisted_30, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(library.value.rules, (rule, index) => {
                  return openBlock(), createElementBlock("div", {
                    key: index,
                    class: "flex items-start space-x-3"
                  }, [
                    createBaseVNode("div", _hoisted_31, [
                      createVNode(unref(CircleAlert), { class: "w-3.5 h-3.5" })
                    ]),
                    createBaseVNode("p", _hoisted_32, toDisplayString(rule.text), 1)
                  ]);
                }), 128))
              ])
            ])) : createCommentVNode("", true),
            createBaseVNode("section", _hoisted_33, [
              createBaseVNode("div", _hoisted_34, [
                _cache[16] || (_cache[16] = createBaseVNode("h2", { class: "text-sm font-bold text-slate-700 uppercase tracking-wider" }, "Ratings & Feedback", -1)),
                createBaseVNode("div", _hoisted_35, [
                  createVNode(unref(Star), { class: "w-4.5 h-4.5 text-yellow-500 fill-yellow-500 mr-1.5" }),
                  createBaseVNode("span", _hoisted_36, toDisplayString(library.value.average_rating || "0.0"), 1),
                  _cache[15] || (_cache[15] = createBaseVNode("span", { class: "text-slate-400 text-xs font-medium ml-1.5" }, "/ 5.0", -1))
                ])
              ]),
              !userReview.value ? (openBlock(), createElementBlock("div", _hoisted_37, [
                _cache[17] || (_cache[17] = createBaseVNode("h3", { class: "font-semibold text-slate-800 text-xs uppercase mb-3" }, "Write a Review", -1)),
                createBaseVNode("div", _hoisted_38, [
                  createBaseVNode("div", _hoisted_39, [
                    (openBlock(), createElementBlock(Fragment, null, renderList(5, (star) => {
                      return createBaseVNode("button", {
                        key: star,
                        onClick: ($event) => newReview.value.rating = star,
                        class: "focus:outline-none transition-transform active:scale-110"
                      }, [
                        createVNode(unref(Star), {
                          class: normalizeClass([
                            "w-7 h-7",
                            star <= newReview.value.rating ? "text-yellow-500 fill-yellow-500" : "text-slate-250"
                          ])
                        }, null, 8, ["class"])
                      ], 8, _hoisted_40);
                    }), 64))
                  ]),
                  withDirectives(createBaseVNode("textarea", {
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => newReview.value.comment = $event),
                    placeholder: "Share your study experience at this library...",
                    class: "w-full p-3 bg-white border border-slate-200 rounded-xl text-xs font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 min-h-[90px] shadow-sm placeholder-slate-400"
                  }, null, 512), [
                    [vModelText, newReview.value.comment]
                  ]),
                  createBaseVNode("button", {
                    onClick: submitReview,
                    disabled: submittingReview.value || !newReview.value.rating,
                    class: "bg-blue-600 hover:opacity-95 text-white text-xs font-semibold rounded-xl px-5 py-2 shadow-md shadow-blue-500/10 active:scale-98 transition-all disabled:opacity-50 flex items-center"
                  }, [
                    submittingReview.value ? (openBlock(), createBlock(unref(RefreshCw), {
                      key: 0,
                      class: "w-3.5 h-3.5 mr-1.5 animate-spin"
                    })) : createCommentVNode("", true),
                    createBaseVNode("span", null, toDisplayString(submittingReview.value ? "Submitting..." : "Submit Review"), 1)
                  ], 8, _hoisted_41)
                ])
              ])) : (openBlock(), createElementBlock("div", _hoisted_42, [
                createBaseVNode("div", _hoisted_43, [
                  _cache[18] || (_cache[18] = createBaseVNode("h3", { class: "font-semibold text-blue-900 text-xs uppercase tracking-wide" }, "Your Review", -1)),
                  createBaseVNode("button", {
                    onClick: _cache[1] || (_cache[1] = ($event) => deleteReview(userReview.value.id)),
                    class: "text-red-500 hover:text-red-655 transition-colors p-1",
                    title: "Delete Review"
                  }, [
                    createVNode(unref(Trash2), { class: "w-4 h-4" })
                  ])
                ]),
                createBaseVNode("div", _hoisted_44, [
                  (openBlock(), createElementBlock(Fragment, null, renderList(5, (star) => {
                    return createVNode(unref(Star), {
                      key: star,
                      class: normalizeClass(["w-3.5 h-3.5 mr-0.5", star <= userReview.value.rating ? "text-yellow-500 fill-yellow-500" : "text-slate-250"])
                    }, null, 8, ["class"]);
                  }), 64))
                ]),
                createBaseVNode("p", _hoisted_45, toDisplayString(userReview.value.comment), 1)
              ])),
              reviews.value.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_46, [
                createBaseVNode("h4", _hoisted_47, "Student Reviews (" + toDisplayString(reviews.value.length) + ")", 1),
                createBaseVNode("div", _hoisted_48, [
                  createBaseVNode("button", {
                    onClick: _cache[2] || (_cache[2] = ($event) => {
                      reviewSortMode.value = "newest";
                      visibleReviewCount.value = 3;
                    }),
                    class: normalizeClass([
                      "px-2.5 py-1 rounded-lg transition-all cursor-pointer font-bold",
                      reviewSortMode.value === "newest" ? "bg-white text-slate-800 shadow-sm" : "text-slate-500 hover:text-slate-700"
                    ])
                  }, " Newest ", 2),
                  createBaseVNode("button", {
                    onClick: _cache[3] || (_cache[3] = ($event) => {
                      reviewSortMode.value = "popular";
                      visibleReviewCount.value = 3;
                    }),
                    class: normalizeClass([
                      "px-2.5 py-1 rounded-lg transition-all cursor-pointer font-bold",
                      reviewSortMode.value === "popular" ? "bg-white text-emerald-800 shadow-sm" : "text-slate-500 hover:text-slate-700"
                    ])
                  }, " Popular ", 2),
                  createBaseVNode("button", {
                    onClick: _cache[4] || (_cache[4] = ($event) => {
                      reviewSortMode.value = "lowest";
                      visibleReviewCount.value = 3;
                    }),
                    class: normalizeClass([
                      "px-2.5 py-1 rounded-lg transition-all cursor-pointer font-bold",
                      reviewSortMode.value === "lowest" ? "bg-white text-slate-800 shadow-sm" : "text-slate-500 hover:text-slate-700"
                    ])
                  }, " Lowest ", 2)
                ])
              ])) : createCommentVNode("", true),
              createBaseVNode("div", _hoisted_49, [
                loadingReviews.value ? (openBlock(), createElementBlock("div", _hoisted_50, [
                  createVNode(unref(RefreshCw), { class: "w-5 h-5 text-blue-600 animate-spin" })
                ])) : otherReviewsSorted.value.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_51, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(displayedOtherReviews.value, (review) => {
                    return openBlock(), createElementBlock("div", {
                      key: review.id,
                      class: "py-4.5 first:pt-0 last:pb-0 text-left"
                    }, [
                      createBaseVNode("div", _hoisted_52, [
                        createBaseVNode("img", {
                          src: review.user.profile_picture || `https://ui-avatars.com/api/?name=${encodeURIComponent(review.user.name)}&background=random`,
                          class: "w-9 h-9 rounded-full object-cover border border-slate-100"
                        }, null, 8, _hoisted_53),
                        createBaseVNode("div", _hoisted_54, [
                          createBaseVNode("div", _hoisted_55, [
                            createBaseVNode("h4", _hoisted_56, toDisplayString(review.user.name), 1),
                            createBaseVNode("span", _hoisted_57, toDisplayString(formatDateRelative(review.created_at)), 1)
                          ]),
                          createBaseVNode("div", _hoisted_58, [
                            (openBlock(), createElementBlock(Fragment, null, renderList(5, (star) => {
                              return createVNode(unref(Star), {
                                key: star,
                                class: normalizeClass(["w-3 h-3 mr-0.5", star <= review.rating ? "text-yellow-500 fill-yellow-500" : "text-slate-250"])
                              }, null, 8, ["class"]);
                            }), 64))
                          ]),
                          createBaseVNode("p", _hoisted_59, toDisplayString(review.comment), 1)
                        ])
                      ])
                    ]);
                  }), 128)),
                  hasMoreOtherReviews.value ? (openBlock(), createElementBlock("div", _hoisted_60, [
                    createBaseVNode("button", {
                      onClick: _cache[5] || (_cache[5] = ($event) => visibleReviewCount.value += 3),
                      class: "px-5 py-2 bg-slate-100 hover:bg-emerald-50 text-slate-700 hover:text-emerald-700 font-bold text-xs rounded-xl border border-slate-200 hover:border-emerald-200 transition-all cursor-pointer inline-flex items-center gap-1.5 shadow-sm"
                    }, [
                      createBaseVNode("span", null, "View More Reviews (" + toDisplayString(otherReviewsSorted.value.length - visibleReviewCount.value) + " remaining)", 1),
                      createVNode(unref(ChevronDown), { class: "w-4 h-4" })
                    ])
                  ])) : createCommentVNode("", true)
                ])) : !userReview.value ? (openBlock(), createElementBlock("div", _hoisted_61, [
                  createVNode(unref(Star), { class: "w-6 h-6 text-slate-300 mx-auto mb-2" }),
                  _cache[19] || (_cache[19] = createBaseVNode("p", { class: "text-xs text-slate-400 font-medium uppercase tracking-wider" }, "No reviews yet. Be the first to share your thoughts!", -1))
                ])) : createCommentVNode("", true)
              ])
            ])
          ]),
          createBaseVNode("div", _hoisted_62, [
            createBaseVNode("div", _hoisted_63, [
              _cache[23] || (_cache[23] = createBaseVNode("h3", { class: "text-base font-semibold text-slate-800 mb-1.5" }, "Reserve a Seat", -1)),
              _cache[24] || (_cache[24] = createBaseVNode("p", { class: "text-slate-500 text-xs mb-5 leading-relaxed font-semibold" }, "Book your preferred spot in advance to ensure a productive study session.", -1)),
              createBaseVNode("div", _hoisted_64, [
                createBaseVNode("div", _hoisted_65, [
                  _cache[20] || (_cache[20] = createBaseVNode("span", { class: "text-slate-400 uppercase tracking-wide" }, "Available Seats", -1)),
                  createBaseVNode("span", _hoisted_66, toDisplayString(library.value.availableSeats || 0) + " / " + toDisplayString(libraryCapacity.value), 1)
                ]),
                createBaseVNode("div", _hoisted_67, [
                  createBaseVNode("div", {
                    class: "bg-blue-600 h-full rounded-full transition-all duration-500",
                    style: normalizeStyle({ width: availableSeatsPercent.value + "%" })
                  }, null, 4)
                ])
              ]),
              createVNode(_component_router_link, {
                to: `/student/libraries/${library.value.id}/seats`,
                class: "block w-full bg-blue-600 text-white text-center py-3 rounded-xl text-xs font-semibold shadow-md shadow-blue-500/10 hover:opacity-95 active:scale-98 transition-all uppercase tracking-wider"
              }, {
                default: withCtx(() => [..._cache[21] || (_cache[21] = [
                  createTextVNode(" Select & Book Seat ", -1)
                ])]),
                _: 1
              }, 8, ["to"]),
              createBaseVNode("div", _hoisted_68, [
                createBaseVNode("div", _hoisted_69, [
                  createVNode(unref(Phone), { class: "w-4 h-4 mr-2.5 text-blue-500 flex-shrink-0" }),
                  createBaseVNode("span", null, toDisplayString(library.value.contact_info?.phone || "Not available"), 1)
                ]),
                createBaseVNode("div", _hoisted_70, [
                  createVNode(unref(Mail), { class: "w-4 h-4 mr-2.5 text-blue-500 flex-shrink-0" }),
                  createBaseVNode("span", _hoisted_71, toDisplayString(library.value.contact_info?.email || "Not available"), 1)
                ]),
                library.value.wifi_password ? (openBlock(), createElementBlock("div", _hoisted_72, [
                  createVNode(unref(Wifi), { class: "w-4.5 h-4.5 mr-2.5 text-emerald-600 flex-shrink-0" }),
                  createBaseVNode("div", _hoisted_73, [
                    _cache[22] || (_cache[22] = createBaseVNode("span", { class: "text-[9px] uppercase tracking-wider text-emerald-600/80 font-bold" }, "WiFi Password", -1)),
                    createBaseVNode("span", _hoisted_74, toDisplayString(library.value.wifi_password), 1)
                  ])
                ])) : createCommentVNode("", true)
              ])
            ]),
            createBaseVNode("div", _hoisted_75, [
              _cache[25] || (_cache[25] = createBaseVNode("h3", { class: "text-xs font-bold text-slate-700 uppercase tracking-wider mb-4" }, "Operating Hours", -1)),
              createBaseVNode("div", _hoisted_76, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(library.value.operating_days, (day) => {
                  return openBlock(), createElementBlock("div", {
                    key: day.day,
                    class: normalizeClass(["flex justify-between items-center text-xs font-semibold", { "font-bold text-blue-650": isToday(day.day) }])
                  }, [
                    createBaseVNode("span", {
                      class: normalizeClass(["text-slate-500", { "text-blue-650": isToday(day.day) }])
                    }, toDisplayString(day.day), 3),
                    day.isOpen ? (openBlock(), createElementBlock("span", _hoisted_77, toDisplayString(day.openTime) + " - " + toDisplayString(day.closeTime), 1)) : (openBlock(), createElementBlock("span", _hoisted_78, "Closed"))
                  ], 2);
                }), 128))
              ])
            ])
          ])
        ])
      ])) : (openBlock(), createElementBlock("div", _hoisted_79, [
        _cache[27] || (_cache[27] = createBaseVNode("h2", { class: "text-lg font-semibold text-slate-800 mb-2" }, "Library not found", -1)),
        createVNode(_component_router_link, {
          to: "/student/libraries",
          class: "text-blue-600 hover:underline text-xs font-semibold"
        }, {
          default: withCtx(() => [..._cache[26] || (_cache[26] = [
            createTextVNode(" Back to Libraries ", -1)
          ])]),
          _: 1
        })
      ]));
    };
  }
});
const LibraryDetailsPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b2e12327"]]);
export {
  LibraryDetailsPage as default
};
