import { d as defineComponent, p as useAuth, r as ref, E as computed, o as onMounted, c as createElementBlock, b as createBaseVNode, t as toDisplayString, f as createVNode, j as createTextVNode, u as unref, m as createCommentVNode, F as Fragment, h as renderList, v as withDirectives, x as vModelText, k as createBlock, I as normalizeStyle, w as withCtx, g as resolveComponent, L as useRoute, J as studentAPI, l as resolveDynamicComponent, n as normalizeClass, i as openBlock } from "./main-Dk2mUbjP.js";
import { u as useSwal } from "./useSwal-J4kFABxt.js";
import { M as MapPin } from "./map-pin-CGJFb8uL.js";
import { U as Users } from "./users-BK7GPR5d.js";
import { C as CircleCheckBig } from "./circle-check-big-CgVU7jsB.js";
import { C as Clock } from "./clock-DHHRCinm.js";
import { c as createLucideIcon } from "./createLucideIcon-6n-23kmf.js";
import { R as RefreshCw } from "./refresh-cw-D9O5gUrY.js";
import { T as Trash2 } from "./trash-2-jL_HLZPz.js";
import { P as Phone } from "./phone-BeWBBpz0.js";
import { M as Mail } from "./mail-CfIgijJY.js";
import { C as CircleAlert } from "./circle-alert-BSTnPYhV.js";
import { W as Wifi } from "./wifi-jhWzynmM.js";
import { C as Coffee, W as Wind } from "./wind-B0Nuxb_C.js";
import { P as Printer } from "./printer-BBXxd0VK.js";
import { B as BookOpen } from "./book-open-DFp6gl31.js";
import { Z as Zap } from "./zap-DSIh5NSP.js";
import { L as Lock } from "./lock-0wCSwcsv.js";
import { C as Camera } from "./camera-BEKlUnPD.js";
import { f as formatDistanceToNow } from "./formatDistanceToNow-CgRkJOVj.js";
/* empty css               */
import "./constructNow-CQ6Py-t8.js";
import "./en-US-CtEcOBul.js";
const Star = createLucideIcon("star", [
  [
    "path",
    {
      d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
      key: "r04s7s"
    }
  ]
]);
const _hoisted_1 = {
  key: 0,
  class: "flex items-center justify-center min-h-[400px]"
};
const _hoisted_2 = {
  key: 1,
  class: "space-y-8 pb-12"
};
const _hoisted_3 = { class: "relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-lg" };
const _hoisted_4 = ["src"];
const _hoisted_5 = { class: "absolute bottom-0 left-0 p-8 text-white" };
const _hoisted_6 = { class: "text-3xl md:text-4xl font-bold mb-2" };
const _hoisted_7 = { class: "flex items-center text-white/90" };
const _hoisted_8 = { class: "grid grid-cols-1 lg:grid-cols-3 gap-8" };
const _hoisted_9 = { class: "lg:col-span-2 space-y-8" };
const _hoisted_10 = { class: "bg-white rounded-2xl p-8 shadow-sm border border-gray-100" };
const _hoisted_11 = { class: "text-gray-600 leading-relaxed" };
const _hoisted_12 = { class: "grid grid-cols-2 md:grid-cols-3 gap-6 mt-8" };
const _hoisted_13 = { class: "flex items-center space-x-3" };
const _hoisted_14 = { class: "p-3 bg-blue-50 rounded-xl text-blue-600" };
const _hoisted_15 = { class: "font-semibold text-gray-800" };
const _hoisted_16 = { class: "flex items-center space-x-3" };
const _hoisted_17 = { class: "p-3 bg-green-50 rounded-xl text-green-600" };
const _hoisted_18 = { class: "font-semibold text-gray-800" };
const _hoisted_19 = { class: "flex items-center space-x-3" };
const _hoisted_20 = { class: "p-3 bg-purple-50 rounded-xl text-purple-600" };
const _hoisted_21 = { class: "font-semibold text-gray-800" };
const _hoisted_22 = { class: "bg-white rounded-2xl p-8 shadow-sm border border-gray-100" };
const _hoisted_23 = { class: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4" };
const _hoisted_24 = { class: "text-sm font-medium text-gray-700 text-center" };
const _hoisted_25 = {
  key: 0,
  class: "bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
};
const _hoisted_26 = { class: "space-y-4" };
const _hoisted_27 = { class: "mt-1 p-1 bg-orange-100 rounded-full text-orange-600" };
const _hoisted_28 = { class: "text-gray-600" };
const _hoisted_29 = { class: "bg-white rounded-2xl p-8 shadow-sm border border-gray-100" };
const _hoisted_30 = { class: "flex items-center justify-between mb-8" };
const _hoisted_31 = { class: "flex items-center bg-yellow-50 px-3 py-1.5 rounded-lg border border-yellow-100" };
const _hoisted_32 = { class: "text-lg font-bold text-yellow-700" };
const _hoisted_33 = {
  key: 0,
  class: "bg-gray-50 rounded-2xl p-6 mb-8 border border-gray-100"
};
const _hoisted_34 = { class: "space-y-4" };
const _hoisted_35 = { class: "flex items-center space-x-2" };
const _hoisted_36 = ["onClick"];
const _hoisted_37 = ["disabled"];
const _hoisted_38 = {
  key: 1,
  class: "bg-blue-50 rounded-2xl p-6 mb-8 border border-blue-100 relative"
};
const _hoisted_39 = { class: "flex justify-between items-start mb-4" };
const _hoisted_40 = { class: "flex items-center mb-3" };
const _hoisted_41 = { class: "text-sm text-blue-800" };
const _hoisted_42 = { class: "space-y-6" };
const _hoisted_43 = {
  key: 0,
  class: "flex justify-center py-8"
};
const _hoisted_44 = {
  key: 1,
  class: "divide-y divide-gray-100"
};
const _hoisted_45 = { class: "flex items-start space-x-4" };
const _hoisted_46 = ["src"];
const _hoisted_47 = { class: "flex-1" };
const _hoisted_48 = { class: "flex items-center justify-between mb-1" };
const _hoisted_49 = { class: "font-bold text-gray-900 text-sm" };
const _hoisted_50 = { class: "text-xs text-gray-400" };
const _hoisted_51 = { class: "flex items-center mb-2" };
const _hoisted_52 = { class: "text-sm text-gray-600" };
const _hoisted_53 = {
  key: 2,
  class: "text-center py-8 bg-gray-50 rounded-2xl border border-dashed border-gray-200"
};
const _hoisted_54 = { class: "space-y-8" };
const _hoisted_55 = { class: "bg-white rounded-2xl p-8 shadow-lg border border-blue-100 sticky top-24" };
const _hoisted_56 = { class: "space-y-4 mb-8" };
const _hoisted_57 = { class: "flex justify-between text-sm" };
const _hoisted_58 = { class: "font-semibold text-green-600" };
const _hoisted_59 = { class: "w-full bg-gray-100 rounded-full h-2" };
const _hoisted_60 = { class: "mt-6 pt-6 border-t border-gray-100 space-y-4" };
const _hoisted_61 = { class: "flex items-center text-sm text-gray-600" };
const _hoisted_62 = { class: "flex items-center text-sm text-gray-600" };
const _hoisted_63 = { class: "bg-white rounded-2xl p-8 shadow-sm border border-gray-100" };
const _hoisted_64 = { class: "space-y-3" };
const _hoisted_65 = {
  key: 0,
  class: "text-gray-800"
};
const _hoisted_66 = {
  key: 1,
  class: "text-red-500 font-medium"
};
const _hoisted_67 = {
  key: 2,
  class: "text-center py-20"
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
    const newReview = ref({
      rating: 0,
      comment: ""
    });
    const userReview = computed(() => {
      return reviews.value.find((r) => r.user_id === user.value?.id);
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
    const isOpen = computed(() => {
      if (!library.value?.operating_days) return false;
      const now = /* @__PURE__ */ new Date();
      const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      const todayName = days[now.getDay()];
      const todayHours = library.value.operating_days.find((d) => d.day === todayName);
      if (!todayHours || !todayHours.isOpen) return false;
      const currentTime = now.getHours() * 60 + now.getMinutes();
      const [openH, openM] = todayHours.openTime.split(":").map(Number);
      const [closeH, closeM] = todayHours.closeTime.split(":").map(Number);
      const openMinutes = openH * 60 + openM;
      const closeMinutes = closeH * 60 + closeM;
      return currentTime >= openMinutes && currentTime <= closeMinutes;
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
      return loading.value ? (openBlock(), createElementBlock("div", _hoisted_1, [..._cache[2] || (_cache[2] = [
        createBaseVNode("div", { class: "animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600" }, null, -1)
      ])])) : library.value ? (openBlock(), createElementBlock("div", _hoisted_2, [
        createBaseVNode("div", _hoisted_3, [
          createBaseVNode("img", {
            src: library.value.photo || "https://images.pexels.com/photos/159711/library-books-reading-study-159711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            class: "w-full h-full object-cover",
            alt: "Library Cover"
          }, null, 8, _hoisted_4),
          _cache[3] || (_cache[3] = createBaseVNode("div", { class: "absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" }, null, -1)),
          createBaseVNode("div", _hoisted_5, [
            createBaseVNode("h1", _hoisted_6, toDisplayString(library.value.name), 1),
            createBaseVNode("div", _hoisted_7, [
              createVNode(unref(MapPin), { class: "w-5 h-5 mr-2" }),
              createTextVNode(" " + toDisplayString(library.value.address), 1)
            ])
          ])
        ]),
        createBaseVNode("div", _hoisted_8, [
          createBaseVNode("div", _hoisted_9, [
            createBaseVNode("section", _hoisted_10, [
              _cache[7] || (_cache[7] = createBaseVNode("h2", { class: "text-xl font-bold text-gray-800 mb-4" }, "About the Library", -1)),
              createBaseVNode("p", _hoisted_11, toDisplayString(library.value.description || "Welcome to " + library.value.name + ". We provide a quiet and productive environment for students to study and research. Our facilities are designed to cater to all your academic needs."), 1),
              createBaseVNode("div", _hoisted_12, [
                createBaseVNode("div", _hoisted_13, [
                  createBaseVNode("div", _hoisted_14, [
                    createVNode(unref(Users), { class: "w-6 h-6" })
                  ]),
                  createBaseVNode("div", null, [
                    _cache[4] || (_cache[4] = createBaseVNode("p", { class: "text-sm text-gray-500" }, "Capacity", -1)),
                    createBaseVNode("p", _hoisted_15, toDisplayString(library.value.capacity) + " Seats", 1)
                  ])
                ]),
                createBaseVNode("div", _hoisted_16, [
                  createBaseVNode("div", _hoisted_17, [
                    createVNode(unref(CircleCheckBig), { class: "w-6 h-6" })
                  ]),
                  createBaseVNode("div", null, [
                    _cache[5] || (_cache[5] = createBaseVNode("p", { class: "text-sm text-gray-500" }, "Available", -1)),
                    createBaseVNode("p", _hoisted_18, toDisplayString(library.value.availableSeats) + " Seats", 1)
                  ])
                ]),
                createBaseVNode("div", _hoisted_19, [
                  createBaseVNode("div", _hoisted_20, [
                    createVNode(unref(Clock), { class: "w-6 h-6" })
                  ]),
                  createBaseVNode("div", null, [
                    _cache[6] || (_cache[6] = createBaseVNode("p", { class: "text-sm text-gray-500" }, "Status", -1)),
                    createBaseVNode("p", _hoisted_21, toDisplayString(isOpen.value ? "Open Now" : "Closed"), 1)
                  ])
                ])
              ])
            ]),
            createBaseVNode("section", _hoisted_22, [
              _cache[8] || (_cache[8] = createBaseVNode("h2", { class: "text-xl font-bold text-gray-800 mb-6" }, "Facilities & Amenities", -1)),
              createBaseVNode("div", _hoisted_23, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(library.value.facilities, (facility) => {
                  return openBlock(), createElementBlock("div", {
                    key: facility,
                    class: "flex flex-col items-center p-4 rounded-xl bg-gray-50 border border-gray-100 hover:border-blue-200 hover:bg-blue-50 transition-all group"
                  }, [
                    (openBlock(), createBlock(resolveDynamicComponent(getFacilityIcon(facility)), { class: "w-8 h-8 text-gray-400 group-hover:text-blue-600 mb-2" })),
                    createBaseVNode("span", _hoisted_24, toDisplayString(facility), 1)
                  ]);
                }), 128))
              ])
            ]),
            library.value.rules && library.value.rules.length ? (openBlock(), createElementBlock("section", _hoisted_25, [
              _cache[9] || (_cache[9] = createBaseVNode("h2", { class: "text-xl font-bold text-gray-800 mb-6" }, "Library Rules", -1)),
              createBaseVNode("div", _hoisted_26, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(library.value.rules, (rule, index) => {
                  return openBlock(), createElementBlock("div", {
                    key: index,
                    class: "flex items-start space-x-3"
                  }, [
                    createBaseVNode("div", _hoisted_27, [
                      createVNode(unref(CircleAlert), { class: "w-4 h-4" })
                    ]),
                    createBaseVNode("p", _hoisted_28, toDisplayString(rule.text), 1)
                  ]);
                }), 128))
              ])
            ])) : createCommentVNode("", true),
            createBaseVNode("section", _hoisted_29, [
              createBaseVNode("div", _hoisted_30, [
                _cache[11] || (_cache[11] = createBaseVNode("h2", { class: "text-xl font-bold text-gray-800" }, "Ratings & Feedback", -1)),
                createBaseVNode("div", _hoisted_31, [
                  createVNode(unref(Star), { class: "w-5 h-5 text-yellow-500 fill-yellow-500 mr-2" }),
                  createBaseVNode("span", _hoisted_32, toDisplayString(library.value.average_rating || "0.0"), 1),
                  _cache[10] || (_cache[10] = createBaseVNode("span", { class: "text-gray-400 text-sm ml-2" }, "/ 5.0", -1))
                ])
              ]),
              !userReview.value ? (openBlock(), createElementBlock("div", _hoisted_33, [
                _cache[12] || (_cache[12] = createBaseVNode("h3", { class: "font-bold text-gray-800 mb-4" }, "Write a Review", -1)),
                createBaseVNode("div", _hoisted_34, [
                  createBaseVNode("div", _hoisted_35, [
                    (openBlock(), createElementBlock(Fragment, null, renderList(5, (star) => {
                      return createBaseVNode("button", {
                        key: star,
                        onClick: ($event) => newReview.value.rating = star,
                        class: "focus:outline-none transition-transform active:scale-110"
                      }, [
                        createVNode(unref(Star), {
                          class: normalizeClass([
                            "w-8 h-8",
                            star <= newReview.value.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"
                          ])
                        }, null, 8, ["class"])
                      ], 8, _hoisted_36);
                    }), 64))
                  ]),
                  withDirectives(createBaseVNode("textarea", {
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => newReview.value.comment = $event),
                    placeholder: "Share your experience at this library...",
                    class: "w-full rounded-xl border-gray-200 focus:border-blue-500 focus:ring-blue-500 min-h-[100px] text-sm"
                  }, null, 512), [
                    [vModelText, newReview.value.comment]
                  ]),
                  createBaseVNode("button", {
                    onClick: submitReview,
                    disabled: submittingReview.value || !newReview.value.rating,
                    class: "bg-blue-600 text-white px-6 py-2.5 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-md disabled:opacity-50 flex items-center"
                  }, [
                    submittingReview.value ? (openBlock(), createBlock(unref(RefreshCw), {
                      key: 0,
                      class: "w-4 h-4 mr-2 animate-spin"
                    })) : createCommentVNode("", true),
                    createTextVNode(" " + toDisplayString(submittingReview.value ? "Submitting..." : "Submit Review"), 1)
                  ], 8, _hoisted_37)
                ])
              ])) : (openBlock(), createElementBlock("div", _hoisted_38, [
                createBaseVNode("div", _hoisted_39, [
                  _cache[13] || (_cache[13] = createBaseVNode("h3", { class: "font-bold text-blue-900" }, "Your Review", -1)),
                  createBaseVNode("button", {
                    onClick: _cache[1] || (_cache[1] = ($event) => deleteReview(userReview.value.id)),
                    class: "text-red-500 hover:text-red-600 transition-colors",
                    title: "Delete Review"
                  }, [
                    createVNode(unref(Trash2), { class: "w-4 h-4" })
                  ])
                ]),
                createBaseVNode("div", _hoisted_40, [
                  (openBlock(), createElementBlock(Fragment, null, renderList(5, (star) => {
                    return createVNode(unref(Star), {
                      key: star,
                      class: normalizeClass(["w-4 h-4 mr-1", star <= userReview.value.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"])
                    }, null, 8, ["class"]);
                  }), 64))
                ]),
                createBaseVNode("p", _hoisted_41, toDisplayString(userReview.value.comment), 1)
              ])),
              createBaseVNode("div", _hoisted_42, [
                loadingReviews.value ? (openBlock(), createElementBlock("div", _hoisted_43, [
                  createVNode(unref(RefreshCw), { class: "w-6 h-6 text-blue-600 animate-spin" })
                ])) : reviews.value.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_44, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(reviews.value.filter((r) => r.user_id !== unref(user)?.id), (review) => {
                    return openBlock(), createElementBlock("div", {
                      key: review.id,
                      class: "py-6 first:pt-0 last:pb-0"
                    }, [
                      createBaseVNode("div", _hoisted_45, [
                        createBaseVNode("img", {
                          src: review.user.profile_picture || `https://ui-avatars.com/api/?name=${encodeURIComponent(review.user.name)}&background=random`,
                          class: "w-10 h-10 rounded-full object-cover"
                        }, null, 8, _hoisted_46),
                        createBaseVNode("div", _hoisted_47, [
                          createBaseVNode("div", _hoisted_48, [
                            createBaseVNode("h4", _hoisted_49, toDisplayString(review.user.name), 1),
                            createBaseVNode("span", _hoisted_50, toDisplayString(formatDateRelative(review.created_at)), 1)
                          ]),
                          createBaseVNode("div", _hoisted_51, [
                            (openBlock(), createElementBlock(Fragment, null, renderList(5, (star) => {
                              return createVNode(unref(Star), {
                                key: star,
                                class: normalizeClass(["w-3 h-3 mr-0.5", star <= review.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"])
                              }, null, 8, ["class"]);
                            }), 64))
                          ]),
                          createBaseVNode("p", _hoisted_52, toDisplayString(review.comment), 1)
                        ])
                      ])
                    ]);
                  }), 128))
                ])) : !userReview.value ? (openBlock(), createElementBlock("div", _hoisted_53, [
                  createVNode(unref(Star), { class: "w-8 h-8 text-gray-300 mx-auto mb-2" }),
                  _cache[14] || (_cache[14] = createBaseVNode("p", { class: "text-sm text-gray-500" }, "No reviews yet. Be the first to share your thoughts!", -1))
                ])) : createCommentVNode("", true)
              ])
            ])
          ]),
          createBaseVNode("div", _hoisted_54, [
            createBaseVNode("div", _hoisted_55, [
              _cache[17] || (_cache[17] = createBaseVNode("h3", { class: "text-xl font-bold text-gray-800 mb-2" }, "Reserve a Seat", -1)),
              _cache[18] || (_cache[18] = createBaseVNode("p", { class: "text-gray-600 text-sm mb-6" }, "Book your preferred spot in advance to ensure a productive study session.", -1)),
              createBaseVNode("div", _hoisted_56, [
                createBaseVNode("div", _hoisted_57, [
                  _cache[15] || (_cache[15] = createBaseVNode("span", { class: "text-gray-500" }, "Available Seats", -1)),
                  createBaseVNode("span", _hoisted_58, toDisplayString(library.value.availableSeats), 1)
                ]),
                createBaseVNode("div", _hoisted_59, [
                  createBaseVNode("div", {
                    class: "bg-blue-600 h-2 rounded-full transition-all duration-500",
                    style: normalizeStyle({ width: library.value.availableSeats / library.value.totalSeats * 100 + "%" })
                  }, null, 4)
                ])
              ]),
              createVNode(_component_router_link, {
                to: `/student/libraries/${library.value.id}/seats`,
                class: "block w-full bg-blue-600 text-white text-center py-4 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 active:translate-y-0"
              }, {
                default: withCtx(() => [..._cache[16] || (_cache[16] = [
                  createTextVNode(" Book Now ", -1)
                ])]),
                _: 1
              }, 8, ["to"]),
              createBaseVNode("div", _hoisted_60, [
                createBaseVNode("div", _hoisted_61, [
                  createVNode(unref(Phone), { class: "w-4 h-4 mr-3 text-blue-500" }),
                  createTextVNode(" " + toDisplayString(library.value.contact_info?.phone || "Not available"), 1)
                ]),
                createBaseVNode("div", _hoisted_62, [
                  createVNode(unref(Mail), { class: "w-4 h-4 mr-3 text-blue-500" }),
                  createTextVNode(" " + toDisplayString(library.value.contact_info?.email || "Not available"), 1)
                ])
              ])
            ]),
            createBaseVNode("div", _hoisted_63, [
              _cache[19] || (_cache[19] = createBaseVNode("h3", { class: "text-lg font-bold text-gray-800 mb-4" }, "Operating Hours", -1)),
              createBaseVNode("div", _hoisted_64, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(library.value.operating_days, (day) => {
                  return openBlock(), createElementBlock("div", {
                    key: day.day,
                    class: normalizeClass(["flex justify-between items-center text-sm", { "font-bold text-blue-600": isToday(day.day) }])
                  }, [
                    createBaseVNode("span", {
                      class: normalizeClass(["text-gray-600", { "text-blue-600": isToday(day.day) }])
                    }, toDisplayString(day.day), 3),
                    day.isOpen ? (openBlock(), createElementBlock("span", _hoisted_65, toDisplayString(day.openTime) + " - " + toDisplayString(day.closeTime), 1)) : (openBlock(), createElementBlock("span", _hoisted_66, "Closed"))
                  ], 2);
                }), 128))
              ])
            ])
          ])
        ])
      ])) : (openBlock(), createElementBlock("div", _hoisted_67, [
        _cache[21] || (_cache[21] = createBaseVNode("h2", { class: "text-2xl font-bold text-gray-800" }, "Library not found", -1)),
        createVNode(_component_router_link, {
          to: "/student/libraries",
          class: "text-blue-600 hover:underline mt-4 inline-block"
        }, {
          default: withCtx(() => [..._cache[20] || (_cache[20] = [
            createTextVNode(" Back to Libraries ", -1)
          ])]),
          _: 1
        })
      ]));
    };
  }
});
export {
  _sfc_main as default
};
