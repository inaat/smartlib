import { d as defineComponent, r as ref, o as onMounted, b as createElementBlock, e as createBaseVNode, g as createVNode, w as withCtx, h as resolveComponent, t as toDisplayString, n as normalizeClass, u as unref, p as createCommentVNode, j as createTextVNode, C as Clock, R as RefreshCw, F as Fragment, k as renderList, a3 as adminAPI, J as useRoute, x as normalizeStyle, m as openBlock } from "./main-BeUqjoax.js";
import { u as useSwal } from "./useSwal-pQW_XkRe.js";
import { B as Building2 } from "./building-2-obFScNkw.js";
import { M as MapPin } from "./map-pin-hjTU3OTG.js";
import { U as Users } from "./users-DgA2REmn.js";
import { W as Wifi } from "./wifi-DqTT3QLw.js";
import { C as Car } from "./car-CSXABXxO.js";
import { P as Phone } from "./phone-DeUaZgMM.js";
import { C as CircleCheckBig } from "./circle-check-big-BPDnuG2V.js";
import { U as UserCheck } from "./user-check-gjs1HmON.js";
import { T as TrendingUp } from "./trending-up-BPT833jM.js";
import { S as Star } from "./star-gfhuQhar.js";
import { M as MessageSquare } from "./message-square-CmtW0uvZ.js";
import { C as CircleAlert } from "./circle-alert-jeFdHGPj.js";
import { A as ArrowLeft } from "./arrow-left-BVjn5tww.js";
import { T as Trash2 } from "./trash-2-CnFs5eVz.js";
/* empty css               */
const _hoisted_1 = { class: "p-6 space-y-6" };
const _hoisted_2 = {
  key: 0,
  class: "flex items-center justify-center py-20"
};
const _hoisted_3 = {
  key: 1,
  class: "space-y-6"
};
const _hoisted_4 = { class: "flex items-center justify-between mb-6" };
const _hoisted_5 = { class: "flex items-center space-x-4" };
const _hoisted_6 = { class: "text-left" };
const _hoisted_7 = { class: "text-3xl font-bold text-gray-900" };
const _hoisted_8 = { class: "flex items-center space-x-3" };
const _hoisted_9 = { class: "bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden" };
const _hoisted_10 = { class: "h-48 bg-gradient-to-br from-purple-50 to-fuchsia-50 relative" };
const _hoisted_11 = ["src"];
const _hoisted_12 = {
  key: 1,
  class: "w-full h-full flex items-center justify-center"
};
const _hoisted_13 = { class: "p-6 text-left" };
const _hoisted_14 = { class: "grid grid-cols-1 md:grid-cols-2 gap-6" };
const _hoisted_15 = { class: "text-gray-900 text-sm flex items-start font-medium" };
const _hoisted_16 = { class: "text-gray-900 text-sm flex items-center font-medium" };
const _hoisted_17 = { class: "text-gray-900 text-sm flex items-center font-medium" };
const _hoisted_18 = { key: 0 };
const _hoisted_19 = { class: "text-gray-900 text-sm flex items-center font-medium" };
const _hoisted_20 = {
  key: 1,
  class: "md:col-span-2"
};
const _hoisted_21 = { class: "text-gray-900 text-sm font-normal" };
const _hoisted_22 = { class: "flex items-center space-x-4 mt-6 pt-6 border-t border-gray-200" };
const _hoisted_23 = {
  key: 0,
  class: "flex items-center text-xs font-semibold text-gray-600"
};
const _hoisted_24 = {
  key: 1,
  class: "flex items-center text-xs font-semibold text-gray-600"
};
const _hoisted_25 = { class: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5" };
const _hoisted_26 = { class: "bg-white rounded-2xl shadow-sm border border-gray-200 p-5 text-left" };
const _hoisted_27 = { class: "flex items-center justify-between mb-2" };
const _hoisted_28 = { class: "p-2 bg-blue-100 rounded-lg" };
const _hoisted_29 = { class: "text-2xl font-extrabold text-gray-900" };
const _hoisted_30 = { class: "bg-white rounded-2xl shadow-sm border border-gray-200 p-5 text-left" };
const _hoisted_31 = { class: "flex items-center justify-between mb-2" };
const _hoisted_32 = { class: "p-2 bg-green-100 rounded-lg" };
const _hoisted_33 = { class: "text-2xl font-extrabold text-green-600" };
const _hoisted_34 = { class: "bg-white rounded-2xl shadow-sm border border-gray-200 p-5 text-left" };
const _hoisted_35 = { class: "flex items-center justify-between mb-2" };
const _hoisted_36 = { class: "p-2 bg-orange-100 rounded-lg" };
const _hoisted_37 = { class: "text-2xl font-extrabold text-orange-600" };
const _hoisted_38 = { class: "bg-white rounded-2xl shadow-sm border border-gray-200 p-5 text-left" };
const _hoisted_39 = { class: "flex items-center justify-between mb-2" };
const _hoisted_40 = { class: "p-2 bg-purple-100 rounded-lg" };
const _hoisted_41 = { class: "text-2xl font-extrabold text-purple-600" };
const _hoisted_42 = { class: "bg-white rounded-2xl shadow-sm border border-gray-200 p-5 text-left" };
const _hoisted_43 = { class: "flex items-center justify-between mb-2" };
const _hoisted_44 = { class: "p-2 bg-amber-100 rounded-lg" };
const _hoisted_45 = { class: "flex items-baseline space-x-1.5" };
const _hoisted_46 = { class: "text-2xl font-extrabold text-amber-600" };
const _hoisted_47 = { class: "text-xs font-semibold text-gray-400" };
const _hoisted_48 = { class: "bg-white rounded-2xl shadow-sm border border-gray-200 p-6 space-y-6 text-left" };
const _hoisted_49 = { class: "flex items-center justify-between" };
const _hoisted_50 = { class: "text-xs text-gray-500 mt-0.5" };
const _hoisted_51 = ["disabled"];
const _hoisted_52 = { class: "grid grid-cols-1 md:grid-cols-3 gap-6 bg-slate-50/70 p-6 rounded-2xl border border-slate-100" };
const _hoisted_53 = { class: "flex flex-col items-center justify-center p-5 bg-white rounded-xl shadow-sm border border-slate-100 text-center" };
const _hoisted_54 = { class: "text-4xl font-extrabold text-gray-800 tracking-tight" };
const _hoisted_55 = { class: "flex items-center space-x-1 my-2" };
const _hoisted_56 = { class: "text-xs font-semibold text-gray-500 uppercase tracking-wider" };
const _hoisted_57 = { class: "md:col-span-2 space-y-2.5 flex flex-col justify-center" };
const _hoisted_58 = { class: "w-12 font-bold text-gray-600 flex items-center justify-end" };
const _hoisted_59 = { class: "flex-1 h-2.5 bg-slate-200/80 rounded-full overflow-hidden" };
const _hoisted_60 = { class: "w-10 text-right font-semibold text-gray-400" };
const _hoisted_61 = {
  key: 0,
  class: "flex justify-center py-12"
};
const _hoisted_62 = {
  key: 1,
  class: "text-center py-12 bg-slate-50/50 rounded-2xl border border-dashed border-slate-200"
};
const _hoisted_63 = {
  key: 2,
  class: "space-y-4"
};
const _hoisted_64 = { class: "flex items-start justify-between" };
const _hoisted_65 = { class: "flex items-center space-x-3.5" };
const _hoisted_66 = { class: "w-10 h-10 rounded-full overflow-hidden bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-700 font-bold text-sm flex-shrink-0" };
const _hoisted_67 = ["src"];
const _hoisted_68 = { key: 1 };
const _hoisted_69 = { class: "text-sm font-bold text-gray-800 leading-snug" };
const _hoisted_70 = { class: "flex items-center space-x-2 text-[10px] font-semibold text-gray-400 mt-0.5" };
const _hoisted_71 = {
  key: 0,
  class: "uppercase"
};
const _hoisted_72 = { key: 1 };
const _hoisted_73 = { class: "flex items-center space-x-4" };
const _hoisted_74 = { class: "text-right" };
const _hoisted_75 = { class: "flex items-center space-x-0.5 justify-end" };
const _hoisted_76 = { class: "text-[10px] font-medium text-gray-400 mt-1 block" };
const _hoisted_77 = ["onClick"];
const _hoisted_78 = { class: "text-xs text-gray-600 font-normal leading-relaxed pl-1" };
const _hoisted_79 = {
  key: 2,
  class: "bg-white rounded-xl shadow-sm border border-gray-200 py-20 text-center"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "LibraryDetailsPage",
  setup(__props) {
    const { showConfirm, showSuccess, showError } = useSwal();
    const route = useRoute();
    const library = ref(null);
    const loading = ref(true);
    const reviewsLoading = ref(false);
    const reviewsData = ref({
      average_rating: 0,
      total_reviews: 0,
      rating_breakdown: { "5": 0, "4": 0, "3": 0, "2": 0, "1": 0 },
      reviews: []
    });
    const getStarPercent = (star) => {
      if (!reviewsData.value.total_reviews) return 0;
      const count = reviewsData.value.rating_breakdown[star] || 0;
      return Math.round(count / reviewsData.value.total_reviews * 100);
    };
    const fetchLibrary = async () => {
      loading.value = true;
      try {
        const libraries = await adminAPI.getLibraries();
        library.value = libraries.find((lib) => lib.id === parseInt(route.params.id));
      } catch (error) {
        console.error("Error fetching library:", error);
      } finally {
        loading.value = false;
      }
    };
    const fetchReviews = async () => {
      const libId = parseInt(route.params.id);
      if (!libId) return;
      reviewsLoading.value = true;
      try {
        const data = await adminAPI.getLibraryReviews(libId);
        reviewsData.value = {
          average_rating: data.average_rating || 0,
          total_reviews: data.total_reviews || 0,
          rating_breakdown: data.rating_breakdown || { "5": 0, "4": 0, "3": 0, "2": 0, "1": 0 },
          reviews: data.reviews || []
        };
      } catch (error) {
        console.error("Error fetching library reviews:", error);
      } finally {
        reviewsLoading.value = false;
      }
    };
    const deleteReview = async (reviewId) => {
      if (await showConfirm("Delete Review", "Are you sure you want to delete this student review?", "Yes, Delete")) {
        try {
          await adminAPI.deleteReview(reviewId);
          showSuccess("Deleted!", "Review has been removed.");
          fetchReviews();
          fetchLibrary();
        } catch (error) {
          showError("Delete Failed", error.response?.data?.message || "Could not delete review");
        }
      }
    };
    onMounted(() => {
      fetchLibrary();
      fetchReviews();
    });
    return (_ctx, _cache) => {
      const _component_router_link = resolveComponent("router-link");
      return openBlock(), createElementBlock("div", _hoisted_1, [
        loading.value ? (openBlock(), createElementBlock("div", _hoisted_2, [..._cache[0] || (_cache[0] = [
          createBaseVNode("div", { class: "animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600" }, null, -1)
        ])])) : library.value ? (openBlock(), createElementBlock("div", _hoisted_3, [
          createBaseVNode("div", _hoisted_4, [
            createBaseVNode("div", _hoisted_5, [
              createVNode(_component_router_link, {
                to: "/superadmin/libraries",
                class: "p-2 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer"
              }, {
                default: withCtx(() => [
                  createVNode(unref(ArrowLeft), { class: "w-5 h-5 text-gray-600" })
                ]),
                _: 1
              }),
              createBaseVNode("div", _hoisted_6, [
                createBaseVNode("h1", _hoisted_7, toDisplayString(library.value.name), 1),
                _cache[1] || (_cache[1] = createBaseVNode("p", { class: "text-gray-600 mt-1 text-xs" }, "Library Details, Statistics & Student Reviews", -1))
              ])
            ]),
            createBaseVNode("div", _hoisted_8, [
              createBaseVNode("span", {
                class: normalizeClass([
                  "px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider",
                  library.value.is_active ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                ])
              }, toDisplayString(library.value.is_active ? "Active" : "Inactive"), 3)
            ])
          ]),
          createBaseVNode("div", _hoisted_9, [
            createBaseVNode("div", _hoisted_10, [
              library.value.photo ? (openBlock(), createElementBlock("img", {
                key: 0,
                src: library.value.photo_url,
                class: "w-full h-full object-cover",
                alt: "Library cover"
              }, null, 8, _hoisted_11)) : (openBlock(), createElementBlock("div", _hoisted_12, [
                createVNode(unref(Building2), { class: "w-16 h-16 text-purple-300" })
              ]))
            ]),
            createBaseVNode("div", _hoisted_13, [
              createBaseVNode("div", _hoisted_14, [
                createBaseVNode("div", null, [
                  _cache[2] || (_cache[2] = createBaseVNode("h3", { class: "text-xs font-bold text-gray-400 uppercase tracking-wider mb-1" }, "Address", -1)),
                  createBaseVNode("p", _hoisted_15, [
                    createVNode(unref(MapPin), { class: "w-4 h-4 mr-2 mt-0.5 text-gray-400 flex-shrink-0" }),
                    createTextVNode(" " + toDisplayString(library.value.address), 1)
                  ])
                ]),
                createBaseVNode("div", null, [
                  _cache[3] || (_cache[3] = createBaseVNode("h3", { class: "text-xs font-bold text-gray-400 uppercase tracking-wider mb-1" }, "Opening Hours", -1)),
                  createBaseVNode("p", _hoisted_16, [
                    createVNode(unref(Clock), { class: "w-4 h-4 mr-2 text-gray-400 flex-shrink-0" }),
                    createTextVNode(" " + toDisplayString(library.value.opening_hours), 1)
                  ])
                ]),
                createBaseVNode("div", null, [
                  _cache[4] || (_cache[4] = createBaseVNode("h3", { class: "text-xs font-bold text-gray-400 uppercase tracking-wider mb-1" }, "Total Capacity", -1)),
                  createBaseVNode("p", _hoisted_17, [
                    createVNode(unref(Users), { class: "w-4 h-4 mr-2 text-gray-400 flex-shrink-0" }),
                    createTextVNode(" " + toDisplayString(library.value.capacity) + " seats ", 1)
                  ])
                ]),
                library.value.wifi_password ? (openBlock(), createElementBlock("div", _hoisted_18, [
                  _cache[5] || (_cache[5] = createBaseVNode("h3", { class: "text-xs font-bold text-gray-400 uppercase tracking-wider mb-1" }, "WiFi Password", -1)),
                  createBaseVNode("p", _hoisted_19, [
                    createVNode(unref(Wifi), { class: "w-4 h-4 mr-2 text-gray-400 flex-shrink-0" }),
                    createTextVNode(" " + toDisplayString(library.value.wifi_password), 1)
                  ])
                ])) : createCommentVNode("", true),
                library.value.description ? (openBlock(), createElementBlock("div", _hoisted_20, [
                  _cache[6] || (_cache[6] = createBaseVNode("h3", { class: "text-xs font-bold text-gray-400 uppercase tracking-wider mb-1" }, "Description", -1)),
                  createBaseVNode("p", _hoisted_21, toDisplayString(library.value.description), 1)
                ])) : createCommentVNode("", true)
              ]),
              createBaseVNode("div", _hoisted_22, [
                library.value.parking_available ? (openBlock(), createElementBlock("div", _hoisted_23, [
                  createVNode(unref(Car), { class: "w-4 h-4 mr-2 text-green-600" }),
                  _cache[7] || (_cache[7] = createTextVNode(" Parking Available ", -1))
                ])) : createCommentVNode("", true),
                library.value.contact_info?.phone ? (openBlock(), createElementBlock("div", _hoisted_24, [
                  createVNode(unref(Phone), { class: "w-4 h-4 mr-2 text-purple-600" }),
                  createTextVNode(" " + toDisplayString(library.value.contact_info.phone), 1)
                ])) : createCommentVNode("", true)
              ])
            ])
          ]),
          createBaseVNode("div", _hoisted_25, [
            createBaseVNode("div", _hoisted_26, [
              createBaseVNode("div", _hoisted_27, [
                _cache[8] || (_cache[8] = createBaseVNode("h3", { class: "text-xs font-bold text-gray-400 uppercase tracking-wider" }, "Total Seats", -1)),
                createBaseVNode("div", _hoisted_28, [
                  createVNode(unref(Users), { class: "w-4 h-4 text-blue-600" })
                ])
              ]),
              createBaseVNode("p", _hoisted_29, toDisplayString(library.value.totalSeats || library.value.capacity), 1)
            ]),
            createBaseVNode("div", _hoisted_30, [
              createBaseVNode("div", _hoisted_31, [
                _cache[9] || (_cache[9] = createBaseVNode("h3", { class: "text-xs font-bold text-gray-400 uppercase tracking-wider" }, "Available", -1)),
                createBaseVNode("div", _hoisted_32, [
                  createVNode(unref(CircleCheckBig), { class: "w-4 h-4 text-green-600" })
                ])
              ]),
              createBaseVNode("p", _hoisted_33, toDisplayString(library.value.availableSeats || 0), 1)
            ]),
            createBaseVNode("div", _hoisted_34, [
              createBaseVNode("div", _hoisted_35, [
                _cache[10] || (_cache[10] = createBaseVNode("h3", { class: "text-xs font-bold text-gray-400 uppercase tracking-wider" }, "Occupied", -1)),
                createBaseVNode("div", _hoisted_36, [
                  createVNode(unref(UserCheck), { class: "w-4 h-4 text-orange-600" })
                ])
              ]),
              createBaseVNode("p", _hoisted_37, toDisplayString((library.value.totalSeats || library.value.capacity) - (library.value.availableSeats || 0)), 1)
            ]),
            createBaseVNode("div", _hoisted_38, [
              createBaseVNode("div", _hoisted_39, [
                _cache[11] || (_cache[11] = createBaseVNode("h3", { class: "text-xs font-bold text-gray-400 uppercase tracking-wider" }, "Occupancy Rate", -1)),
                createBaseVNode("div", _hoisted_40, [
                  createVNode(unref(TrendingUp), { class: "w-4 h-4 text-purple-600" })
                ])
              ]),
              createBaseVNode("p", _hoisted_41, toDisplayString(library.value.totalSeats ? Math.round((library.value.totalSeats - (library.value.availableSeats || 0)) / library.value.totalSeats * 100) : 0) + "% ", 1)
            ]),
            createBaseVNode("div", _hoisted_42, [
              createBaseVNode("div", _hoisted_43, [
                _cache[12] || (_cache[12] = createBaseVNode("h3", { class: "text-xs font-bold text-gray-400 uppercase tracking-wider" }, "Rating", -1)),
                createBaseVNode("div", _hoisted_44, [
                  createVNode(unref(Star), { class: "w-4 h-4 fill-amber-500 text-amber-500" })
                ])
              ]),
              createBaseVNode("div", _hoisted_45, [
                createBaseVNode("p", _hoisted_46, toDisplayString(reviewsData.value.average_rating || library.value.average_rating || "0.0"), 1),
                createBaseVNode("span", _hoisted_47, "(" + toDisplayString(reviewsData.value.total_reviews) + " reviews)", 1)
              ])
            ])
          ]),
          createBaseVNode("div", _hoisted_48, [
            createBaseVNode("div", _hoisted_49, [
              createBaseVNode("div", null, [
                _cache[13] || (_cache[13] = createBaseVNode("h2", { class: "text-lg font-bold text-gray-900" }, "Student Reviews & Ratings", -1)),
                createBaseVNode("p", _hoisted_50, "Feedback and ratings submitted by students for " + toDisplayString(library.value.name), 1)
              ]),
              createBaseVNode("button", {
                onClick: fetchReviews,
                disabled: reviewsLoading.value,
                class: "px-3 py-1.5 bg-gray-50 border border-gray-200 hover:bg-gray-100 rounded-xl text-xs font-semibold text-gray-600 flex items-center space-x-1.5 transition-colors cursor-pointer"
              }, [
                createVNode(unref(RefreshCw), {
                  class: normalizeClass(["w-3.5 h-3.5", reviewsLoading.value ? "animate-spin" : ""])
                }, null, 8, ["class"]),
                _cache[14] || (_cache[14] = createBaseVNode("span", null, "Refresh", -1))
              ], 8, _hoisted_51)
            ]),
            createBaseVNode("div", _hoisted_52, [
              createBaseVNode("div", _hoisted_53, [
                createBaseVNode("span", _hoisted_54, toDisplayString(reviewsData.value.average_rating || "0.0"), 1),
                createBaseVNode("div", _hoisted_55, [
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
                createBaseVNode("p", _hoisted_56, " Based on " + toDisplayString(reviewsData.value.total_reviews) + " student " + toDisplayString(reviewsData.value.total_reviews === 1 ? "review" : "reviews"), 1)
              ]),
              createBaseVNode("div", _hoisted_57, [
                (openBlock(), createElementBlock(Fragment, null, renderList([5, 4, 3, 2, 1], (star) => {
                  return createBaseVNode("div", {
                    key: star,
                    class: "flex items-center space-x-3 text-xs"
                  }, [
                    createBaseVNode("span", _hoisted_58, [
                      createTextVNode(toDisplayString(star) + " ", 1),
                      createVNode(unref(Star), { class: "w-3.5 h-3.5 fill-amber-400 text-amber-400 ml-1 inline" })
                    ]),
                    createBaseVNode("div", _hoisted_59, [
                      createBaseVNode("div", {
                        class: "h-full bg-purple-600 rounded-full transition-all duration-500",
                        style: normalizeStyle({ width: getStarPercent(star) + "%" })
                      }, null, 4)
                    ]),
                    createBaseVNode("span", _hoisted_60, toDisplayString(reviewsData.value.rating_breakdown[star] || 0), 1)
                  ]);
                }), 64))
              ])
            ]),
            reviewsLoading.value ? (openBlock(), createElementBlock("div", _hoisted_61, [..._cache[15] || (_cache[15] = [
              createBaseVNode("div", { class: "animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600" }, null, -1)
            ])])) : reviewsData.value.reviews.length === 0 ? (openBlock(), createElementBlock("div", _hoisted_62, [
              createVNode(unref(MessageSquare), { class: "w-12 h-12 text-slate-300 mx-auto mb-3" }),
              _cache[16] || (_cache[16] = createBaseVNode("p", { class: "text-xs font-bold text-slate-400 uppercase tracking-widest" }, "No student reviews submitted for this library yet.", -1))
            ])) : (openBlock(), createElementBlock("div", _hoisted_63, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(reviewsData.value.reviews, (review) => {
                return openBlock(), createElementBlock("div", {
                  key: review.id,
                  class: "p-5 rounded-2xl border border-slate-100 hover:border-purple-100/80 bg-white shadow-sm transition-all text-left space-y-3"
                }, [
                  createBaseVNode("div", _hoisted_64, [
                    createBaseVNode("div", _hoisted_65, [
                      createBaseVNode("div", _hoisted_66, [
                        review.user?.profile_picture ? (openBlock(), createElementBlock("img", {
                          key: 0,
                          src: `/storage/${review.user.profile_picture}`,
                          class: "w-full h-full object-cover"
                        }, null, 8, _hoisted_67)) : (openBlock(), createElementBlock("span", _hoisted_68, toDisplayString(review.user?.name ? review.user.name.charAt(0).toUpperCase() : "S"), 1))
                      ]),
                      createBaseVNode("div", null, [
                        createBaseVNode("h4", _hoisted_69, toDisplayString(review.user?.name || "Anonymous Student"), 1),
                        createBaseVNode("div", _hoisted_70, [
                          review.user?.crn ? (openBlock(), createElementBlock("span", _hoisted_71, "CRN: " + toDisplayString(review.user.crn), 1)) : createCommentVNode("", true),
                          review.user?.ca_level ? (openBlock(), createElementBlock("span", _hoisted_72, "• " + toDisplayString(review.user.ca_level), 1)) : createCommentVNode("", true)
                        ])
                      ])
                    ]),
                    createBaseVNode("div", _hoisted_73, [
                      createBaseVNode("div", _hoisted_74, [
                        createBaseVNode("div", _hoisted_75, [
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
                        createBaseVNode("span", _hoisted_76, toDisplayString(new Date(review.created_at).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })), 1)
                      ]),
                      createBaseVNode("button", {
                        onClick: ($event) => deleteReview(review.id),
                        class: "p-2 hover:bg-red-50 text-red-500 rounded-xl transition-colors cursor-pointer",
                        title: "Delete Inappropriate Review"
                      }, [
                        createVNode(unref(Trash2), { class: "w-4 h-4" })
                      ], 8, _hoisted_77)
                    ])
                  ]),
                  createBaseVNode("p", _hoisted_78, toDisplayString(review.comment || "No written comment provided."), 1)
                ]);
              }), 128))
            ]))
          ])
        ])) : (openBlock(), createElementBlock("div", _hoisted_79, [
          createVNode(unref(CircleAlert), { class: "w-12 h-12 text-gray-300 mx-auto mb-4" }),
          _cache[18] || (_cache[18] = createBaseVNode("h3", { class: "text-lg font-medium text-gray-900" }, "Library not found", -1)),
          _cache[19] || (_cache[19] = createBaseVNode("p", { class: "text-gray-500 mt-2" }, "The library you're looking for doesn't exist.", -1)),
          createVNode(_component_router_link, {
            to: "/superadmin/libraries",
            class: "mt-4 inline-flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
          }, {
            default: withCtx(() => [
              createVNode(unref(ArrowLeft), { class: "w-4 h-4 mr-2" }),
              _cache[17] || (_cache[17] = createTextVNode(" Back to Libraries ", -1))
            ]),
            _: 1
          })
        ]))
      ]);
    };
  }
});
export {
  _sfc_main as default
};
