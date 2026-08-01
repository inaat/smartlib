import { d as defineComponent, r as ref, c as computed, o as onMounted, G as useRoute, a as createElementBlock, b as createBaseVNode, j as createCommentVNode, f as createVNode, p as withDirectives, u as unref, v as vModelText, D as vModelSelect, F as Fragment, k as renderList, t as toDisplayString, i as createTextVNode, n as normalizeClass, h as createBlock, L as studentAPI, l as openBlock } from "./main-C124sHqx.js";
import { u as useSwal } from "./useSwal-pQW_XkRe.js";
import { u as useGeolocation } from "./useGeolocation-CQ1pPjX4.js";
import { S as Search } from "./search-gimRym8C.js";
import { F as Funnel } from "./funnel-Dbr8Oh4L.js";
import { C as ChevronDown } from "./chevron-down-CR7XalXd.js";
import { B as BookOpen } from "./book-open-BVgq79sG.js";
import { L as Library } from "./library-CIS_dh0-.js";
import { B as Book } from "./book-BxAJd7Fc.js";
import { X } from "./x-eq55W8eI.js";
import { E as Eye } from "./eye-DkEb11LU.js";
import { D as Download } from "./download-BR9ltr61.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
/* empty css               */
import "./createLucideIcon-8y9GOHiU.js";
const _hoisted_1 = { class: "space-y-6" };
const _hoisted_2 = { class: "bg-gradient-to-r from-slate-50 to-white rounded-2xl shadow-sm border border-slate-200/60 p-5 font-outfit" };
const _hoisted_3 = { class: "flex flex-col md:flex-row gap-4" };
const _hoisted_4 = { class: "flex-1 relative group" };
const _hoisted_5 = { class: "flex gap-4" };
const _hoisted_6 = { class: "relative min-w-[160px] group" };
const _hoisted_7 = ["value"];
const _hoisted_8 = { class: "relative min-w-[140px] group" };
const _hoisted_9 = { class: "relative min-w-[160px] group" };
const _hoisted_10 = ["value"];
const _hoisted_11 = {
  key: 0,
  class: "flex flex-col items-center justify-center py-24 space-y-4"
};
const _hoisted_12 = {
  key: 1,
  class: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 font-outfit animate-fade-in"
};
const _hoisted_13 = ["onClick"];
const _hoisted_14 = ["src", "alt"];
const _hoisted_15 = {
  key: 1,
  class: "w-full h-full flex flex-col items-center justify-center bg-slate-50 text-slate-300"
};
const _hoisted_16 = { class: "absolute top-2.5 right-2.5" };
const _hoisted_17 = {
  key: 0,
  class: "px-2.5 py-1 bg-blue-600 text-white text-[9px] font-semibold uppercase tracking-wider rounded-lg shadow-sm border border-blue-500/20"
};
const _hoisted_18 = {
  key: 1,
  class: "px-2.5 py-1 bg-emerald-500 text-white text-[9px] font-semibold uppercase tracking-wider rounded-lg shadow-sm border border-emerald-400/20"
};
const _hoisted_19 = {
  key: 2,
  class: "px-2.5 py-1 bg-amber-500 text-white text-[9px] font-semibold uppercase tracking-wider rounded-lg shadow-sm border border-amber-400/20"
};
const _hoisted_20 = { class: "flex-1 flex flex-col min-w-0" };
const _hoisted_21 = { class: "mb-4" };
const _hoisted_22 = { class: "inline-block text-[9px] font-semibold text-blue-600 bg-blue-50/50 px-2 py-0.5 rounded uppercase tracking-wider mb-2" };
const _hoisted_23 = ["onClick", "title"];
const _hoisted_24 = { class: "text-xs text-slate-400 font-semibold mt-1" };
const _hoisted_25 = { class: "mt-auto mb-4 p-2 bg-slate-50 border border-slate-100/50 rounded-xl flex items-center space-x-2" };
const _hoisted_26 = ["title"];
const _hoisted_27 = { class: "pt-3 border-t border-slate-100 flex items-center space-x-2" };
const _hoisted_28 = ["onClick"];
const _hoisted_29 = ["onClick"];
const _hoisted_30 = ["onClick"];
const _hoisted_31 = {
  key: 2,
  class: "text-center py-20 bg-slate-50/50 rounded-2xl border border-dashed border-slate-200/80 p-8 font-outfit"
};
const _hoisted_32 = { class: "w-16 h-16 bg-slate-100 text-slate-400 rounded-full flex items-center justify-center mx-auto mb-4 border border-slate-200/50 shadow-inner animate-pulse-slow" };
const _hoisted_33 = {
  key: 3,
  class: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-fade-in font-outfit"
};
const _hoisted_34 = { class: "bg-white rounded-3xl shadow-2xl w-full max-w-2xl overflow-hidden border border-slate-100 flex flex-col max-h-[90vh] md:max-h-[85vh] animate-scale-up text-left" };
const _hoisted_35 = { class: "px-6 py-4 bg-gradient-to-r from-blue-600 to-indigo-700 text-white flex items-center justify-between" };
const _hoisted_36 = { class: "p-6 overflow-y-auto space-y-6 flex-1" };
const _hoisted_37 = { class: "flex flex-col md:flex-row gap-6" };
const _hoisted_38 = { class: "w-full md:w-44 aspect-[3/4.2] md:h-56 bg-slate-50 border border-slate-100 rounded-2xl overflow-hidden flex-shrink-0 flex items-center justify-center shadow-md" };
const _hoisted_39 = ["src", "alt"];
const _hoisted_40 = {
  key: 1,
  class: "w-full h-full flex flex-col items-center justify-center text-slate-300"
};
const _hoisted_41 = { class: "flex-1 space-y-4" };
const _hoisted_42 = { class: "px-2.5 py-1 bg-blue-50 text-blue-600 text-[10px] font-semibold uppercase tracking-wider rounded-lg border border-blue-100" };
const _hoisted_43 = { class: "font-semibold text-slate-800 text-lg leading-tight mt-2.5" };
const _hoisted_44 = { class: "text-xs text-slate-400 font-semibold mt-1" };
const _hoisted_45 = { class: "text-slate-650 font-bold" };
const _hoisted_46 = { class: "grid grid-cols-2 gap-3.5 bg-slate-50/50 p-3.5 border border-slate-100 rounded-2xl text-xs text-slate-500" };
const _hoisted_47 = { class: "font-bold text-slate-700" };
const _hoisted_48 = { class: "font-bold text-slate-700 capitalize" };
const _hoisted_49 = { class: "font-bold text-slate-700" };
const _hoisted_50 = { class: "space-y-2" };
const _hoisted_51 = { class: "text-slate-600 text-xs leading-relaxed bg-slate-50/30 p-4 border border-slate-100 rounded-2xl whitespace-pre-line" };
const _hoisted_52 = {
  key: 0,
  class: "bg-blue-50/30 border border-blue-100/50 p-5 rounded-2xl space-y-4"
};
const _hoisted_53 = { class: "flex items-center justify-between" };
const _hoisted_54 = { class: "text-right" };
const _hoisted_55 = { class: "text-xs font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-lg border border-blue-100 mt-1 inline-block" };
const _hoisted_56 = { class: "flex flex-col sm:flex-row items-center gap-4 bg-white p-4 rounded-xl border border-slate-100" };
const _hoisted_57 = { class: "flex-1 w-full flex items-center space-x-3.5" };
const _hoisted_58 = ["max"];
const _hoisted_59 = { class: "text-xs font-medium text-slate-400" };
const _hoisted_60 = { class: "flex items-center space-x-2" };
const _hoisted_61 = ["max"];
const _hoisted_62 = { class: "px-6 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-end space-x-3" };
const _hoisted_63 = ["disabled"];
const _hoisted_64 = {
  key: 0,
  class: "w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "BooksPage",
  setup(__props) {
    const route = useRoute();
    const { showSuccess, showError, showWarning } = useSwal();
    const { latitude, longitude } = useGeolocation();
    const books = ref([]);
    const loading = ref(true);
    const reserving = ref(null);
    const isDetailsModalOpen = ref(false);
    const selectedBook = ref({});
    const reservationDays = ref(14);
    const maxAllowedDays = computed(() => {
      return selectedBook.value?.borrowing_period || 14;
    });
    const openDetailsModal = (book) => {
      selectedBook.value = book;
      reservationDays.value = book.borrowing_period || 14;
      isDetailsModalOpen.value = true;
    };
    const searchQuery = ref("");
    const filterCategory = ref("");
    const filterType = ref("");
    const filterLibrary = ref("");
    const filteredBooks = computed(() => {
      return books.value.filter((book) => {
        const matchesSearch = book.title?.toLowerCase().includes(searchQuery.value.toLowerCase()) || book.author?.toLowerCase().includes(searchQuery.value.toLowerCase()) || book.isbn?.includes(searchQuery.value);
        const matchesCategory = !filterCategory.value || book.category === filterCategory.value;
        const matchesType = !filterType.value || book.type?.toLowerCase() === filterType.value.toLowerCase();
        const matchesLibrary = !filterLibrary.value || book.library_id == filterLibrary.value || book.library?.id == filterLibrary.value;
        return matchesSearch && matchesCategory && matchesType && matchesLibrary;
      });
    });
    const libraryOptions = computed(() => {
      const seen = /* @__PURE__ */ new Map();
      books.value.forEach((b) => {
        const lib = b.library;
        if (lib && lib.id && !seen.has(lib.id)) {
          seen.set(lib.id, lib.name);
        }
      });
      return Array.from(seen.entries()).map(([id, name]) => ({ id, name }));
    });
    const categories = computed(() => {
      const all = books.value.map((b) => b.category).filter(Boolean);
      return [...new Set(all)];
    });
    const fetchBooks = async () => {
      loading.value = true;
      try {
        const data = await studentAPI.getBooks();
        books.value = data;
      } catch (error) {
        console.error("Error fetching books:", error);
      } finally {
        loading.value = false;
      }
    };
    const submitReservation = async () => {
      if (reservationDays.value < 1 || reservationDays.value > maxAllowedDays.value) {
        showError("Invalid Duration", `Reservation days must be between 1 and ${maxAllowedDays.value} days.`);
        return;
      }
      reserving.value = selectedBook.value.id;
      try {
        await studentAPI.reserveBook(selectedBook.value.id, reservationDays.value, latitude.value ?? void 0, longitude.value ?? void 0);
        showSuccess("Requested!", "Your reservation request was submitted. Awaiting librarian approval.");
        isDetailsModalOpen.value = false;
        await fetchBooks();
      } catch (error) {
        console.error("Error reserving book:", error);
        showError("Reservation Failed", error.response?.data?.message || "Failed to request reservation.");
      } finally {
        reserving.value = null;
      }
    };
    const readBook = (book) => {
      if (book.digital_access?.file_url) {
        window.open(book.digital_access.file_url, "_blank");
      } else {
        showWarning("Not Available", "This digital book is not yet available for reading.");
      }
    };
    const downloadBook = (book) => {
      if (book.digital_access?.file_url) {
        const link = document.createElement("a");
        link.href = book.digital_access.file_url;
        link.download = `${book.title}.pdf`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } else {
        showWarning("Not Available", "This digital book is not yet available for download.");
      }
    };
    const resetFilters = () => {
      searchQuery.value = "";
      filterCategory.value = "";
      filterType.value = "";
      filterLibrary.value = "";
    };
    onMounted(() => {
      const libraryParam = route.query.library;
      if (libraryParam) {
        filterLibrary.value = Number(libraryParam);
      }
      fetchBooks();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("div", _hoisted_3, [
            createBaseVNode("div", _hoisted_4, [
              createVNode(unref(Search), { class: "absolute left-3.5 top-1/2 transform -translate-y-1/2 w-4.5 h-4.5 text-slate-400 group-focus-within:text-blue-600 transition-colors" }),
              withDirectives(createBaseVNode("input", {
                type: "text",
                placeholder: "Search by title, author, category, or ISBN...",
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => searchQuery.value = $event),
                class: "w-full pl-11 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all shadow-sm text-sm text-slate-700 placeholder-slate-400"
              }, null, 512), [
                [vModelText, searchQuery.value]
              ])
            ]),
            createBaseVNode("div", _hoisted_5, [
              createBaseVNode("div", _hoisted_6, [
                createVNode(unref(Funnel), { class: "absolute left-3.5 top-1/2 transform -translate-y-1/2 w-4.5 h-4.5 text-slate-400 group-focus-within:text-blue-600 transition-colors" }),
                withDirectives(createBaseVNode("select", {
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => filterCategory.value = $event),
                  class: "w-full pl-11 pr-10 py-2.5 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all shadow-sm text-sm text-slate-700 appearance-none cursor-pointer"
                }, [
                  _cache[10] || (_cache[10] = createBaseVNode("option", { value: "" }, "All Categories", -1)),
                  (openBlock(true), createElementBlock(Fragment, null, renderList(categories.value, (cat) => {
                    return openBlock(), createElementBlock("option", {
                      key: cat,
                      value: cat
                    }, toDisplayString(cat), 9, _hoisted_7);
                  }), 128))
                ], 512), [
                  [vModelSelect, filterCategory.value]
                ]),
                createVNode(unref(ChevronDown), { class: "absolute right-3.5 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" })
              ]),
              createBaseVNode("div", _hoisted_8, [
                createVNode(unref(BookOpen), { class: "absolute left-3.5 top-1/2 transform -translate-y-1/2 w-4.5 h-4.5 text-slate-400 group-focus-within:text-blue-600 transition-colors" }),
                withDirectives(createBaseVNode("select", {
                  "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => filterType.value = $event),
                  class: "w-full pl-11 pr-10 py-2.5 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all shadow-sm text-sm text-slate-700 appearance-none cursor-pointer"
                }, [..._cache[11] || (_cache[11] = [
                  createBaseVNode("option", { value: "" }, "All Types", -1),
                  createBaseVNode("option", { value: "physical" }, "Physical", -1),
                  createBaseVNode("option", { value: "digital" }, "Digital", -1)
                ])], 512), [
                  [vModelSelect, filterType.value]
                ]),
                createVNode(unref(ChevronDown), { class: "absolute right-3.5 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" })
              ]),
              createBaseVNode("div", _hoisted_9, [
                createVNode(unref(Library), { class: "absolute left-3.5 top-1/2 transform -translate-y-1/2 w-4.5 h-4.5 text-slate-400 group-focus-within:text-blue-600 transition-colors" }),
                withDirectives(createBaseVNode("select", {
                  "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => filterLibrary.value = $event),
                  class: "w-full pl-11 pr-10 py-2.5 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all shadow-sm text-sm text-slate-700 appearance-none cursor-pointer"
                }, [
                  _cache[12] || (_cache[12] = createBaseVNode("option", { value: "" }, "All Libraries", -1)),
                  (openBlock(true), createElementBlock(Fragment, null, renderList(libraryOptions.value, (lib) => {
                    return openBlock(), createElementBlock("option", {
                      key: lib.id,
                      value: lib.id
                    }, toDisplayString(lib.name), 9, _hoisted_10);
                  }), 128))
                ], 512), [
                  [vModelSelect, filterLibrary.value]
                ]),
                createVNode(unref(ChevronDown), { class: "absolute right-3.5 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" })
              ])
            ])
          ])
        ]),
        loading.value ? (openBlock(), createElementBlock("div", _hoisted_11, [..._cache[13] || (_cache[13] = [
          createBaseVNode("div", { class: "animate-spin rounded-full h-10 w-10 border-2 border-blue-600 border-t-transparent" }, null, -1),
          createBaseVNode("p", { class: "text-xs font-semibold text-slate-400 font-outfit uppercase tracking-wider animate-pulse" }, "Loading catalog...", -1)
        ])])) : filteredBooks.value.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_12, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(filteredBooks.value, (book) => {
            return openBlock(), createElementBlock("div", {
              key: book.id,
              class: "bg-white rounded-2xl border border-slate-100 hover:border-slate-200/80 transition-all duration-300 hover-lift hover:shadow-xl hover:shadow-slate-100/65 p-3.5 flex flex-col group h-full relative"
            }, [
              createBaseVNode("div", {
                onClick: ($event) => openDetailsModal(book),
                class: "aspect-[3/4.2] relative overflow-hidden bg-slate-50 rounded-xl shadow-inner border border-slate-100/40 mb-4 flex items-center justify-center cursor-pointer"
              }, [
                book.cover_url ? (openBlock(), createElementBlock("img", {
                  key: 0,
                  src: book.cover_url,
                  alt: book.title,
                  class: "w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                }, null, 8, _hoisted_14)) : (openBlock(), createElementBlock("div", _hoisted_15, [
                  createVNode(unref(Book), { class: "w-10 h-10 mb-2 stroke-1" }),
                  _cache[14] || (_cache[14] = createBaseVNode("span", { class: "text-[10px] font-medium uppercase tracking-wider" }, "No Cover", -1))
                ])),
                createBaseVNode("div", _hoisted_16, [
                  book.type?.toLowerCase() === "digital" ? (openBlock(), createElementBlock("span", _hoisted_17, " Digital ")) : book.availability === "available" ? (openBlock(), createElementBlock("span", _hoisted_18, " Available ")) : (openBlock(), createElementBlock("span", _hoisted_19, " Reserved "))
                ])
              ], 8, _hoisted_13),
              createBaseVNode("div", _hoisted_20, [
                createBaseVNode("div", _hoisted_21, [
                  createBaseVNode("span", _hoisted_22, toDisplayString(book.category), 1),
                  createBaseVNode("h3", {
                    onClick: ($event) => openDetailsModal(book),
                    class: "font-semibold text-slate-800 text-sm line-clamp-2 leading-snug group-hover:text-blue-600 transition-colors cursor-pointer",
                    title: book.title
                  }, toDisplayString(book.title), 9, _hoisted_23),
                  createBaseVNode("p", _hoisted_24, "by " + toDisplayString(book.author), 1)
                ]),
                createBaseVNode("div", _hoisted_25, [
                  createVNode(unref(Library), { class: "w-3.5 h-3.5 text-slate-400 flex-shrink-0" }),
                  createBaseVNode("span", {
                    class: "text-[10px] font-medium text-slate-500 truncate",
                    title: book.library?.name || "Main Library"
                  }, toDisplayString(book.library?.name || "Main Library"), 9, _hoisted_26)
                ]),
                createBaseVNode("div", _hoisted_27, [
                  book.type?.toLowerCase() === "digital" ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                    createBaseVNode("button", {
                      onClick: ($event) => readBook(book),
                      class: "flex-1 py-2 px-3 bg-green-600 hover:opacity-95 text-white text-xs font-semibold rounded-xl transition-all shadow-md shadow-green-500/10 flex items-center justify-center space-x-1.5 active:scale-98"
                    }, [
                      createVNode(unref(Eye), { class: "w-3.5 h-3.5" }),
                      _cache[15] || (_cache[15] = createBaseVNode("span", null, "Read", -1))
                    ], 8, _hoisted_28),
                    createBaseVNode("button", {
                      onClick: ($event) => downloadBook(book),
                      class: "py-2 px-2.5 bg-slate-50 hover:bg-slate-100 text-slate-600 rounded-xl text-xs font-semibold border border-slate-200/60 transition-all flex items-center justify-center active:scale-98",
                      title: "Download PDF"
                    }, [
                      createVNode(unref(Download), { class: "w-3.5 h-3.5" })
                    ], 8, _hoisted_29)
                  ], 64)) : (openBlock(), createElementBlock("button", {
                    key: 1,
                    onClick: ($event) => openDetailsModal(book),
                    class: "w-full py-2 px-3 bg-blue-500 hover:opacity-95 text-white text-xs font-semibold rounded-xl shadow-md shadow-blue-500/10 border border-transparent transition-all flex items-center justify-center space-x-1.5 active:scale-98"
                  }, [
                    createBaseVNode("span", null, toDisplayString(book.availability === "available" ? "Reserve Book" : "View Details"), 1)
                  ], 8, _hoisted_30))
                ])
              ])
            ]);
          }), 128))
        ])) : (openBlock(), createElementBlock("div", _hoisted_31, [
          createBaseVNode("div", _hoisted_32, [
            createVNode(unref(Book), { class: "w-7 h-7" })
          ]),
          _cache[16] || (_cache[16] = createBaseVNode("h3", { class: "text-base font-semibold text-slate-800 mb-1" }, "No books found", -1)),
          _cache[17] || (_cache[17] = createBaseVNode("p", { class: "text-xs text-slate-400 max-w-sm mx-auto leading-relaxed" }, "Try adjusting your search or filters to find what you're looking for.", -1)),
          createBaseVNode("button", {
            onClick: resetFilters,
            class: "mt-4 px-4 py-2 bg-white hover:bg-slate-50 text-blue-600 rounded-xl text-xs font-semibold border border-slate-300 transition-all shadow-sm"
          }, " Clear all filters ")
        ])),
        isDetailsModalOpen.value ? (openBlock(), createElementBlock("div", _hoisted_33, [
          createBaseVNode("div", _hoisted_34, [
            createBaseVNode("div", _hoisted_35, [
              _cache[18] || (_cache[18] = createBaseVNode("h2", { class: "font-semibold text-sm uppercase tracking-wider" }, "Book Details", -1)),
              createBaseVNode("button", {
                onClick: _cache[4] || (_cache[4] = ($event) => isDetailsModalOpen.value = false),
                class: "p-1.5 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
              }, [
                createVNode(unref(X), { class: "w-5 h-5 text-white" })
              ])
            ]),
            createBaseVNode("div", _hoisted_36, [
              createBaseVNode("div", _hoisted_37, [
                createBaseVNode("div", _hoisted_38, [
                  selectedBook.value.cover_url ? (openBlock(), createElementBlock("img", {
                    key: 0,
                    src: selectedBook.value.cover_url,
                    alt: selectedBook.value.title,
                    class: "w-full h-full object-cover"
                  }, null, 8, _hoisted_39)) : (openBlock(), createElementBlock("div", _hoisted_40, [
                    createVNode(unref(Book), { class: "w-12 h-12 mb-2 stroke-1" }),
                    _cache[19] || (_cache[19] = createBaseVNode("span", { class: "text-xs font-medium uppercase tracking-wider" }, "No Cover", -1))
                  ]))
                ]),
                createBaseVNode("div", _hoisted_41, [
                  createBaseVNode("div", null, [
                    createBaseVNode("span", _hoisted_42, toDisplayString(selectedBook.value.category), 1),
                    createBaseVNode("h3", _hoisted_43, toDisplayString(selectedBook.value.title), 1),
                    createBaseVNode("p", _hoisted_44, [
                      _cache[20] || (_cache[20] = createTextVNode("by ", -1)),
                      createBaseVNode("span", _hoisted_45, toDisplayString(selectedBook.value.author), 1)
                    ])
                  ]),
                  createBaseVNode("div", _hoisted_46, [
                    createBaseVNode("div", null, [
                      _cache[21] || (_cache[21] = createBaseVNode("span", { class: "block text-[10px] text-slate-400 uppercase font-semibold tracking-wider" }, "ISBN", -1)),
                      createBaseVNode("span", _hoisted_47, toDisplayString(selectedBook.value.isbn || "N/A"), 1)
                    ]),
                    createBaseVNode("div", null, [
                      _cache[22] || (_cache[22] = createBaseVNode("span", { class: "block text-[10px] text-slate-400 uppercase font-semibold tracking-wider" }, "Format / Type", -1)),
                      createBaseVNode("span", _hoisted_48, toDisplayString(selectedBook.value.type), 1)
                    ]),
                    createBaseVNode("div", null, [
                      _cache[23] || (_cache[23] = createBaseVNode("span", { class: "block text-[10px] text-slate-400 uppercase font-semibold tracking-wider" }, "Availability", -1)),
                      createBaseVNode("span", {
                        class: normalizeClass([
                          "font-semibold uppercase text-[9px] px-2 py-0.5 rounded-md border w-fit block mt-0.5",
                          selectedBook.value.availability === "available" ? "bg-emerald-50 text-emerald-600 border-emerald-100" : "bg-amber-50 text-amber-600 border-amber-100"
                        ])
                      }, toDisplayString(selectedBook.value.availability), 3)
                    ]),
                    createBaseVNode("div", null, [
                      _cache[24] || (_cache[24] = createBaseVNode("span", { class: "block text-[10px] text-slate-400 uppercase font-semibold tracking-wider" }, "Location / Shelf", -1)),
                      createBaseVNode("span", _hoisted_49, toDisplayString(selectedBook.value.location || "N/A"), 1)
                    ])
                  ])
                ])
              ]),
              createBaseVNode("div", _hoisted_50, [
                _cache[25] || (_cache[25] = createBaseVNode("h4", { class: "text-xs font-semibold uppercase tracking-wider text-slate-450" }, "Synopsis / Description", -1)),
                createBaseVNode("p", _hoisted_51, toDisplayString(selectedBook.value.description || "No description available for this book."), 1)
              ]),
              selectedBook.value.type?.toLowerCase() === "physical" && selectedBook.value.availability === "available" ? (openBlock(), createElementBlock("div", _hoisted_52, [
                createBaseVNode("div", _hoisted_53, [
                  _cache[27] || (_cache[27] = createBaseVNode("div", null, [
                    createBaseVNode("h4", { class: "text-xs font-semibold text-slate-800 uppercase tracking-wide" }, "Reservation Duration"),
                    createBaseVNode("p", { class: "text-[10px] text-slate-400 font-semibold mt-0.5" }, "Select how many days you would like to reserve the book.")
                  ], -1)),
                  createBaseVNode("div", _hoisted_54, [
                    _cache[26] || (_cache[26] = createBaseVNode("span", { class: "block text-[9px] text-slate-400 uppercase font-semibold tracking-wider" }, "Max Period", -1)),
                    createBaseVNode("span", _hoisted_55, toDisplayString(maxAllowedDays.value) + " Days ", 1)
                  ])
                ]),
                createBaseVNode("div", _hoisted_56, [
                  createBaseVNode("div", _hoisted_57, [
                    _cache[28] || (_cache[28] = createBaseVNode("span", { class: "text-xs font-medium text-slate-400" }, "1d", -1)),
                    withDirectives(createBaseVNode("input", {
                      type: "range",
                      min: "1",
                      max: maxAllowedDays.value,
                      "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => reservationDays.value = $event),
                      class: "flex-1 accent-blue-650 h-1.5 bg-slate-100 rounded-lg cursor-pointer"
                    }, null, 8, _hoisted_58), [
                      [
                        vModelText,
                        reservationDays.value,
                        void 0,
                        { number: true }
                      ]
                    ]),
                    createBaseVNode("span", _hoisted_59, toDisplayString(maxAllowedDays.value) + "d", 1)
                  ]),
                  createBaseVNode("div", _hoisted_60, [
                    withDirectives(createBaseVNode("input", {
                      type: "number",
                      min: "1",
                      max: maxAllowedDays.value,
                      "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => reservationDays.value = $event),
                      class: "w-16 px-3 py-1.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-center font-bold text-slate-700 text-xs shadow-sm"
                    }, null, 8, _hoisted_61), [
                      [
                        vModelText,
                        reservationDays.value,
                        void 0,
                        { number: true }
                      ]
                    ]),
                    _cache[29] || (_cache[29] = createBaseVNode("span", { class: "text-xs font-medium text-slate-500" }, "Days", -1))
                  ])
                ])
              ])) : createCommentVNode("", true)
            ]),
            createBaseVNode("div", _hoisted_62, [
              createBaseVNode("button", {
                onClick: _cache[7] || (_cache[7] = ($event) => isDetailsModalOpen.value = false),
                class: "px-5 py-2.5 bg-white hover:bg-slate-100 text-slate-600 rounded-xl text-xs font-semibold border border-slate-200 transition-all active:scale-98"
              }, " Close "),
              selectedBook.value.type?.toLowerCase() === "digital" ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                createBaseVNode("button", {
                  onClick: _cache[8] || (_cache[8] = ($event) => readBook(selectedBook.value)),
                  class: "px-5 py-2.5 bg-green-600 hover:bg-green-750 text-white rounded-xl text-xs font-semibold transition-all shadow-md shadow-green-500/10 flex items-center space-x-1.5 active:scale-98"
                }, [
                  createVNode(unref(Eye), { class: "w-3.5 h-3.5" }),
                  _cache[30] || (_cache[30] = createBaseVNode("span", null, "Read Online", -1))
                ]),
                createBaseVNode("button", {
                  onClick: _cache[9] || (_cache[9] = ($event) => downloadBook(selectedBook.value)),
                  class: "px-5 py-2.5 bg-slate-800 hover:bg-slate-900 text-white rounded-xl text-xs font-semibold transition-all shadow-md shadow-slate-800/10 flex items-center space-x-1.5 active:scale-98"
                }, [
                  createVNode(unref(Download), { class: "w-3.5 h-3.5" }),
                  _cache[31] || (_cache[31] = createBaseVNode("span", null, "Download PDF", -1))
                ])
              ], 64)) : selectedBook.value.availability === "available" ? (openBlock(), createElementBlock("button", {
                key: 1,
                onClick: submitReservation,
                disabled: reserving.value === selectedBook.value.id,
                class: "px-5 py-2.5 bg-blue-600 hover:opacity-95 text-white rounded-xl text-xs font-semibold transition-all shadow-md shadow-blue-500/15 flex items-center space-x-1.5 active:scale-98 disabled:opacity-50"
              }, [
                reserving.value === selectedBook.value.id ? (openBlock(), createElementBlock("span", _hoisted_64)) : (openBlock(), createBlock(unref(Book), {
                  key: 1,
                  class: "w-3.5 h-3.5"
                })),
                _cache[32] || (_cache[32] = createBaseVNode("span", null, "Request Reservation", -1))
              ], 8, _hoisted_63)) : createCommentVNode("", true)
            ])
          ])
        ])) : createCommentVNode("", true)
      ]);
    };
  }
});
const BooksPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-2315dce6"]]);
export {
  BooksPage as default
};
