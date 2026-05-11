import { d as defineComponent, r as ref, E as computed, o as onMounted, c as createElementBlock, b as createBaseVNode, f as createVNode, v as withDirectives, u as unref, x as vModelText, B as vModelSelect, F as Fragment, h as renderList, J as studentAPI, t as toDisplayString, n as normalizeClass, i as openBlock } from "./main-Dk2mUbjP.js";
import { u as useSwal } from "./useSwal-J4kFABxt.js";
import { S as Search } from "./search-CtCRD_3L.js";
import { F as Funnel } from "./funnel-CCm1Zy9U.js";
import { B as BookOpen } from "./book-open-DFp6gl31.js";
import { B as Book } from "./book-C1CMYBua.js";
import { L as Library } from "./library-J5KQH6oi.js";
import { E as Eye } from "./eye-DnpwuWeS.js";
import { D as Download } from "./download-BCNs_knP.js";
/* empty css               */
import "./createLucideIcon-6n-23kmf.js";
const _hoisted_1 = { class: "space-y-6" };
const _hoisted_2 = { class: "bg-white rounded-xl shadow-sm border border-gray-200 p-6" };
const _hoisted_3 = { class: "flex flex-col md:flex-row gap-4" };
const _hoisted_4 = { class: "flex-1 relative" };
const _hoisted_5 = { class: "flex gap-4" };
const _hoisted_6 = { class: "relative min-w-[150px]" };
const _hoisted_7 = ["value"];
const _hoisted_8 = { class: "relative min-w-[150px]" };
const _hoisted_9 = {
  key: 0,
  class: "flex items-center justify-center py-20"
};
const _hoisted_10 = {
  key: 1,
  class: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
};
const _hoisted_11 = { class: "aspect-[3/4] relative overflow-hidden bg-gray-100" };
const _hoisted_12 = ["src", "alt"];
const _hoisted_13 = { class: "absolute top-2 right-2" };
const _hoisted_14 = { class: "p-4 flex-1 flex flex-col" };
const _hoisted_15 = { class: "mb-2" };
const _hoisted_16 = { class: "text-[10px] font-bold text-blue-600 uppercase tracking-widest" };
const _hoisted_17 = { class: "font-bold text-gray-900 line-clamp-1 group-hover:text-blue-600 transition-colors" };
const _hoisted_18 = { class: "text-sm text-gray-500" };
const _hoisted_19 = { class: "mt-auto pt-4 flex items-center justify-between border-t border-gray-50" };
const _hoisted_20 = { class: "flex items-center text-xs text-gray-500" };
const _hoisted_21 = { class: "line-clamp-1" };
const _hoisted_22 = {
  key: 0,
  class: "flex items-center space-x-2"
};
const _hoisted_23 = ["onClick"];
const _hoisted_24 = ["onClick"];
const _hoisted_25 = ["onClick", "disabled"];
const _hoisted_26 = {
  key: 2,
  class: "text-center py-20 bg-white rounded-xl border border-dashed border-gray-300"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "BooksPage",
  setup(__props) {
    const books = ref([]);
    const loading = ref(true);
    const reserving = ref(null);
    const searchQuery = ref("");
    const filterCategory = ref("");
    const filterType = ref("");
    const categories = computed(() => {
      const cats = new Set(books.value.map((b) => b.category).filter(Boolean));
      return Array.from(cats).sort();
    });
    const filteredBooks = computed(() => {
      return books.value.filter((book) => {
        const matchesSearch = !searchQuery.value || book.title.toLowerCase().includes(searchQuery.value.toLowerCase()) || book.author.toLowerCase().includes(searchQuery.value.toLowerCase()) || book.isbn?.toLowerCase().includes(searchQuery.value.toLowerCase());
        const matchesCategory = !filterCategory.value || book.category === filterCategory.value;
        const matchesType = !filterType.value || book.type?.toLowerCase() === filterType.value.toLowerCase();
        return matchesSearch && matchesCategory && matchesType;
      });
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
    const { showConfirm, showSuccess, showError, showWarning } = useSwal();
    const reserveBook = async (book) => {
      if (!await showConfirm("Reserve Book", `Are you sure you want to reserve "${book.title}"?`, "Yes, Reserve")) return;
      reserving.value = book.id;
      try {
        await studentAPI.reserveBook(book.id);
        showSuccess("Reserved!", "Book reserved successfully! You can pick it up within 7 days.");
        await fetchBooks();
      } catch (error) {
        console.error("Error reserving book:", error);
        showError("Reservation Failed", error.response?.data?.message || "Failed to reserve book.");
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
    };
    onMounted(() => {
      fetchBooks();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        _cache[10] || (_cache[10] = createBaseVNode("div", { class: "flex items-center justify-between" }, [
          createBaseVNode("div", null, [
            createBaseVNode("h1", { class: "text-2xl font-bold text-gray-800" }, "Library Catalog"),
            createBaseVNode("p", { class: "text-gray-600 mt-1" }, "Browse and reserve books from our collection")
          ])
        ], -1)),
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("div", _hoisted_3, [
            createBaseVNode("div", _hoisted_4, [
              createVNode(unref(Search), { class: "absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" }),
              withDirectives(createBaseVNode("input", {
                type: "text",
                placeholder: "Search by title, author, or ISBN...",
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => searchQuery.value = $event),
                class: "w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              }, null, 512), [
                [vModelText, searchQuery.value]
              ])
            ]),
            createBaseVNode("div", _hoisted_5, [
              createBaseVNode("div", _hoisted_6, [
                createVNode(unref(Funnel), { class: "absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" }),
                withDirectives(createBaseVNode("select", {
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => filterCategory.value = $event),
                  class: "w-full pl-10 pr-8 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
                }, [
                  _cache[3] || (_cache[3] = createBaseVNode("option", { value: "" }, "All Categories", -1)),
                  (openBlock(true), createElementBlock(Fragment, null, renderList(categories.value, (cat) => {
                    return openBlock(), createElementBlock("option", {
                      key: cat,
                      value: cat
                    }, toDisplayString(cat), 9, _hoisted_7);
                  }), 128))
                ], 512), [
                  [vModelSelect, filterCategory.value]
                ])
              ]),
              createBaseVNode("div", _hoisted_8, [
                createVNode(unref(BookOpen), { class: "absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" }),
                withDirectives(createBaseVNode("select", {
                  "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => filterType.value = $event),
                  class: "w-full pl-10 pr-8 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
                }, [..._cache[4] || (_cache[4] = [
                  createBaseVNode("option", { value: "" }, "All Types", -1),
                  createBaseVNode("option", { value: "physical" }, "Physical", -1),
                  createBaseVNode("option", { value: "digital" }, "Digital", -1)
                ])], 512), [
                  [vModelSelect, filterType.value]
                ])
              ])
            ])
          ])
        ]),
        loading.value ? (openBlock(), createElementBlock("div", _hoisted_9, [..._cache[5] || (_cache[5] = [
          createBaseVNode("div", { class: "animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600" }, null, -1)
        ])])) : filteredBooks.value.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_10, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(filteredBooks.value, (book) => {
            return openBlock(), createElementBlock("div", {
              key: book.id,
              class: "bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-all group flex flex-col"
            }, [
              createBaseVNode("div", _hoisted_11, [
                createBaseVNode("img", {
                  src: book.cover_url,
                  alt: book.title,
                  class: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                }, null, 8, _hoisted_12),
                createBaseVNode("div", _hoisted_13, [
                  createBaseVNode("span", {
                    class: normalizeClass([
                      "px-2 py-1 rounded-full text-xs font-medium shadow-sm",
                      book.type?.toLowerCase() === "digital" ? "bg-blue-100 text-blue-700" : book.availability === "available" ? "bg-green-100 text-green-700" : "bg-orange-100 text-orange-700"
                    ])
                  }, toDisplayString(book.type?.toLowerCase() === "digital" ? "Digital" : book.availability === "available" ? "Available" : "Reserved"), 3)
                ])
              ]),
              createBaseVNode("div", _hoisted_14, [
                createBaseVNode("div", _hoisted_15, [
                  createBaseVNode("span", _hoisted_16, toDisplayString(book.category), 1),
                  createBaseVNode("h3", _hoisted_17, toDisplayString(book.title), 1),
                  createBaseVNode("p", _hoisted_18, "by " + toDisplayString(book.author), 1)
                ]),
                createBaseVNode("div", _hoisted_19, [
                  createBaseVNode("div", _hoisted_20, [
                    createVNode(unref(Library), { class: "w-3 h-3 mr-1" }),
                    createBaseVNode("span", _hoisted_21, toDisplayString(book.library?.name || "Main Library"), 1)
                  ]),
                  book.type?.toLowerCase() === "digital" ? (openBlock(), createElementBlock("div", _hoisted_22, [
                    createBaseVNode("button", {
                      onClick: ($event) => readBook(book),
                      class: "px-3 py-1.5 bg-indigo-600 text-white text-xs font-medium rounded-lg hover:bg-indigo-700 transition-colors flex items-center space-x-1"
                    }, [
                      createVNode(unref(Eye), { class: "w-3 h-3" }),
                      _cache[6] || (_cache[6] = createBaseVNode("span", null, "Read", -1))
                    ], 8, _hoisted_23),
                    createBaseVNode("button", {
                      onClick: ($event) => downloadBook(book),
                      class: "px-3 py-1.5 bg-green-600 text-white text-xs font-medium rounded-lg hover:bg-green-700 transition-colors flex items-center space-x-1"
                    }, [
                      createVNode(unref(Download), { class: "w-3 h-3" }),
                      _cache[7] || (_cache[7] = createBaseVNode("span", null, "Download", -1))
                    ], 8, _hoisted_24)
                  ])) : (openBlock(), createElementBlock("button", {
                    key: 1,
                    onClick: ($event) => reserveBook(book),
                    disabled: book.availability !== "available" || reserving.value === book.id,
                    class: "px-3 py-1.5 bg-blue-600 text-white text-xs font-medium rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  }, toDisplayString(reserving.value === book.id ? "..." : "Reserve"), 9, _hoisted_25))
                ])
              ])
            ]);
          }), 128))
        ])) : (openBlock(), createElementBlock("div", _hoisted_26, [
          createVNode(unref(Book), { class: "w-16 h-16 text-gray-300 mx-auto mb-4" }),
          _cache[8] || (_cache[8] = createBaseVNode("h3", { class: "text-lg font-medium text-gray-800 mb-2" }, "No books found", -1)),
          _cache[9] || (_cache[9] = createBaseVNode("p", { class: "text-gray-600" }, "Try adjusting your search or filters to find what you're looking for.", -1)),
          createBaseVNode("button", {
            onClick: resetFilters,
            class: "mt-4 text-blue-600 font-medium hover:underline"
          }, " Clear all filters ")
        ]))
      ]);
    };
  }
});
export {
  _sfc_main as default
};
