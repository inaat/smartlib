import { d as defineComponent, r as ref, H as watch, o as onMounted, c as createElementBlock, b as createBaseVNode, f as createVNode, m as createCommentVNode, v as withDirectives, u as unref, x as vModelText, F as Fragment, h as renderList, t as toDisplayString, s as withModifiers, B as vModelSelect, k as createBlock, n as normalizeClass, i as openBlock } from "./main-DCJXrkf-.js";
import { s as superadminAPI } from "./superadminApi-4s8-GH5P.js";
import { _ as _sfc_main$1 } from "./LibrarySelector.vue_vue_type_script_setup_true_lang-jZxnvv8I.js";
import { u as useSwal } from "./useSwal-BUxo5JBv.js";
import { S as Search } from "./search-Bl1QSbxq.js";
import { X } from "./x-BkNPvJ70.js";
import { B as Book } from "./book-jaV5-ltj.js";
/* empty css               */
import "./library-CO2Mqfde.js";
import "./createLucideIcon-CDsoUk2K.js";
const _hoisted_1 = { class: "p-6 space-y-6" };
const _hoisted_2 = { class: "bg-white p-4 rounded-xl shadow-sm border border-gray-200 mb-6" };
const _hoisted_3 = { class: "flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-4" };
const _hoisted_4 = { class: "flex-1" };
const _hoisted_5 = { class: "relative" };
const _hoisted_6 = { class: "bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden" };
const _hoisted_7 = { class: "overflow-x-auto" };
const _hoisted_8 = { class: "min-w-full divide-y divide-gray-200" };
const _hoisted_9 = { class: "bg-white divide-y divide-gray-200" };
const _hoisted_10 = { class: "px-6 py-4 whitespace-nowrap" };
const _hoisted_11 = { class: "flex items-center" };
const _hoisted_12 = { class: "w-10 h-14 bg-gray-100 rounded overflow-hidden flex-shrink-0" };
const _hoisted_13 = ["src"];
const _hoisted_14 = { class: "ml-4" };
const _hoisted_15 = { class: "text-sm font-medium text-gray-900" };
const _hoisted_16 = { class: "text-xs text-gray-500" };
const _hoisted_17 = { class: "px-6 py-4 whitespace-nowrap" };
const _hoisted_18 = { class: "text-xs text-gray-900" };
const _hoisted_19 = { class: "text-xs text-gray-500 capitalize" };
const _hoisted_20 = { class: "px-6 py-4 whitespace-nowrap" };
const _hoisted_21 = { class: "text-sm text-gray-900" };
const _hoisted_22 = { class: "px-6 py-4 whitespace-nowrap" };
const _hoisted_23 = { class: "px-6 py-4 whitespace-nowrap text-right text-sm font-medium" };
const _hoisted_24 = ["onClick"];
const _hoisted_25 = ["onClick"];
const _hoisted_26 = { key: 0 };
const _hoisted_27 = {
  key: 0,
  class: "fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 overflow-y-auto"
};
const _hoisted_28 = { class: "bg-white rounded-xl shadow-xl max-w-2xl w-full mx-4 my-8 p-6" };
const _hoisted_29 = { class: "flex items-center justify-between mb-4" };
const _hoisted_30 = { class: "text-xl font-bold text-gray-900" };
const _hoisted_31 = { class: "grid grid-cols-1 md:grid-cols-2 gap-4" };
const _hoisted_32 = { class: "grid grid-cols-1 md:grid-cols-2 gap-4" };
const _hoisted_33 = { class: "grid grid-cols-1 md:grid-cols-2 gap-4" };
const _hoisted_34 = ["value"];
const _hoisted_35 = { key: 0 };
const _hoisted_36 = { class: "grid grid-cols-1 md:grid-cols-2 gap-4" };
const _hoisted_37 = { key: 0 };
const _hoisted_38 = { key: 1 };
const _hoisted_39 = { class: "flex items-center space-x-3 pt-4" };
const _hoisted_40 = ["disabled"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "BookInventoryPage",
  setup(__props) {
    const selectedLibraryId = ref(null);
    const searchQuery = ref("");
    const books = ref([]);
    const libraries = ref([]);
    const showModal = ref(false);
    const isEditing = ref(false);
    const loading = ref(false);
    const form = ref({
      id: null,
      title: "",
      author: "",
      isbn: "",
      description: "",
      category: "",
      type: "physical",
      library_id: null,
      location: "",
      cover_image: null,
      pdf_file: null,
      status: "available",
      borrowing_period: 7
    });
    const fetchBooks = async () => {
      try {
        const params = {};
        if (selectedLibraryId.value) params.library_id = selectedLibraryId.value;
        if (searchQuery.value) params.search = searchQuery.value;
        books.value = await superadminAPI.getBooks(params);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };
    const fetchLibraries = async () => {
      try {
        libraries.value = await superadminAPI.getLibraries();
      } catch (error) {
        console.error("Error fetching libraries:", error);
      }
    };
    watch(selectedLibraryId, fetchBooks);
    let searchTimeout = null;
    const debounceSearch = () => {
      clearTimeout(searchTimeout);
      searchTimeout = setTimeout(fetchBooks, 500);
    };
    const handleCoverUpload = (event) => {
      const target = event.target;
      if (target.files && target.files[0]) {
        form.value.cover_image = target.files[0];
      }
    };
    const handlePdfUpload = (event) => {
      const target = event.target;
      if (target.files && target.files[0]) {
        form.value.pdf_file = target.files[0];
      }
    };
    const openCreateModal = () => {
      isEditing.value = false;
      form.value = {
        id: null,
        title: "",
        author: "",
        isbn: "",
        description: "",
        category: "",
        type: "physical",
        library_id: selectedLibraryId.value,
        location: "",
        cover_image: null,
        pdf_file: null,
        status: "available",
        borrowing_period: 7
      };
      showModal.value = true;
    };
    const editBook = (book) => {
      isEditing.value = true;
      form.value = {
        id: book.id,
        title: book.title,
        author: book.author,
        isbn: book.isbn,
        description: book.description,
        category: book.category,
        type: book.type,
        library_id: book.library_id,
        location: book.location,
        cover_image: null,
        pdf_file: null,
        status: book.availability,
        borrowing_period: book.borrowing_period || 7
      };
      showModal.value = true;
    };
    const closeModal = () => {
      showModal.value = false;
    };
    const { showConfirm, showSuccess, showError } = useSwal();
    const saveBook = async () => {
      loading.value = true;
      try {
        const formData = new FormData();
        formData.append("title", form.value.title);
        formData.append("author", form.value.author);
        formData.append("isbn", form.value.isbn);
        formData.append("description", form.value.description);
        formData.append("category", form.value.category);
        formData.append("type", form.value.type);
        formData.append("library_id", form.value.library_id ? form.value.library_id.toString() : "");
        formData.append("location", form.value.location || "");
        formData.append("status", form.value.status);
        formData.append("borrowing_period", form.value.borrowing_period.toString());
        if (form.value.cover_image instanceof File) formData.append("cover_image", form.value.cover_image);
        if (form.value.pdf_file instanceof File) formData.append("pdf_file", form.value.pdf_file);
        if (isEditing.value && form.value.id) {
          await superadminAPI.updateBook(form.value.id.toString(), formData);
          showSuccess("Updated!", "Book updated successfully");
        } else {
          await superadminAPI.createBook(formData);
          showSuccess("Created!", "Book created successfully");
        }
        await fetchBooks();
        closeModal();
      } catch (error) {
        console.error("Error saving book:", error);
        const message = error.response?.data?.message || "Failed to save book. Please check the form and try again.";
        const errors = error.response?.data?.errors;
        if (errors) {
          const errorMessages = Object.values(errors).flat().join("\n");
          showError("Save Failed", `${message}

${errorMessages}`);
        } else {
          showError("Save Failed", message);
        }
      } finally {
        loading.value = false;
      }
    };
    const confirmDelete = async (book) => {
      if (await showConfirm("Delete Book", "Are you sure you want to delete this book?", "Yes, Delete")) {
        try {
          await superadminAPI.deleteBook(book.id.toString());
          showSuccess("Deleted!", "Book deleted successfully");
          await fetchBooks();
        } catch (error) {
          console.error("Error deleting book:", error);
          showError("Delete Failed", "Failed to delete book");
        }
      }
    };
    onMounted(() => {
      fetchBooks();
      fetchLibraries();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", { class: "flex items-center justify-between" }, [
          _cache[12] || (_cache[12] = createBaseVNode("div", null, [
            createBaseVNode("h1", { class: "text-3xl font-bold text-gray-900" }, "Book Inventory"),
            createBaseVNode("p", { class: "text-gray-600 mt-1" }, "Manage library books across all libraries")
          ], -1)),
          createBaseVNode("button", {
            onClick: openCreateModal,
            class: "px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all flex items-center space-x-2"
          }, [..._cache[11] || (_cache[11] = [
            createBaseVNode("span", { class: "text-sm font-medium" }, "Add New Book", -1)
          ])])
        ]),
        createVNode(_sfc_main$1, {
          modelValue: selectedLibraryId.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => selectedLibraryId.value = $event)
        }, null, 8, ["modelValue"]),
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("div", _hoisted_3, [
            createBaseVNode("div", _hoisted_4, [
              _cache[13] || (_cache[13] = createBaseVNode("label", { class: "block text-xs font-semibold text-gray-500 uppercase mb-1 ml-1" }, "Search Books", -1)),
              createBaseVNode("div", _hoisted_5, [
                createVNode(unref(Search), { class: "absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" }),
                withDirectives(createBaseVNode("input", {
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => searchQuery.value = $event),
                  type: "text",
                  placeholder: "Search by title, author, or ISBN...",
                  class: "w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm transition-all",
                  onInput: debounceSearch
                }, null, 544), [
                  [vModelText, searchQuery.value]
                ])
              ])
            ])
          ])
        ]),
        createBaseVNode("div", _hoisted_6, [
          createBaseVNode("div", _hoisted_7, [
            createBaseVNode("table", _hoisted_8, [
              _cache[15] || (_cache[15] = createBaseVNode("thead", { class: "bg-gray-50" }, [
                createBaseVNode("tr", null, [
                  createBaseVNode("th", { class: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" }, "Book"),
                  createBaseVNode("th", { class: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" }, "Details"),
                  createBaseVNode("th", { class: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" }, "Library"),
                  createBaseVNode("th", { class: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" }, "Status"),
                  createBaseVNode("th", { class: "px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider" }, "Actions")
                ])
              ], -1)),
              createBaseVNode("tbody", _hoisted_9, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(books.value, (book) => {
                  return openBlock(), createElementBlock("tr", {
                    key: book.id,
                    class: "hover:bg-gray-50"
                  }, [
                    createBaseVNode("td", _hoisted_10, [
                      createBaseVNode("div", _hoisted_11, [
                        createBaseVNode("div", _hoisted_12, [
                          book.cover ? (openBlock(), createElementBlock("img", {
                            key: 0,
                            src: book.cover,
                            class: "w-full h-full object-cover"
                          }, null, 8, _hoisted_13)) : (openBlock(), createBlock(unref(Book), {
                            key: 1,
                            class: "w-full h-full p-2 text-gray-400"
                          }))
                        ]),
                        createBaseVNode("div", _hoisted_14, [
                          createBaseVNode("div", _hoisted_15, toDisplayString(book.title), 1),
                          createBaseVNode("div", _hoisted_16, "by " + toDisplayString(book.author), 1)
                        ])
                      ])
                    ]),
                    createBaseVNode("td", _hoisted_17, [
                      createBaseVNode("div", _hoisted_18, "ISBN: " + toDisplayString(book.isbn), 1),
                      createBaseVNode("div", _hoisted_19, toDisplayString(book.category) + " • " + toDisplayString(book.type), 1)
                    ]),
                    createBaseVNode("td", _hoisted_20, [
                      createBaseVNode("div", _hoisted_21, toDisplayString(book.library?.name || "Global"), 1)
                    ]),
                    createBaseVNode("td", _hoisted_22, [
                      createBaseVNode("span", {
                        class: normalizeClass([
                          "px-2 inline-flex text-xs leading-5 font-semibold rounded-full",
                          book.availability === "available" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                        ])
                      }, toDisplayString(book.availability), 3)
                    ]),
                    createBaseVNode("td", _hoisted_23, [
                      createBaseVNode("button", {
                        onClick: ($event) => editBook(book),
                        class: "text-indigo-600 hover:text-indigo-900 mr-4"
                      }, "Edit", 8, _hoisted_24),
                      createBaseVNode("button", {
                        onClick: ($event) => confirmDelete(book),
                        class: "text-red-600 hover:text-red-900"
                      }, "Delete", 8, _hoisted_25)
                    ])
                  ]);
                }), 128)),
                books.value.length === 0 ? (openBlock(), createElementBlock("tr", _hoisted_26, [..._cache[14] || (_cache[14] = [
                  createBaseVNode("td", {
                    colspan: "5",
                    class: "px-6 py-12 text-center text-gray-500"
                  }, " No books found. Try adjusting your search or library filter. ", -1)
                ])])) : createCommentVNode("", true)
              ])
            ])
          ])
        ]),
        showModal.value ? (openBlock(), createElementBlock("div", _hoisted_27, [
          createBaseVNode("div", _hoisted_28, [
            createBaseVNode("div", _hoisted_29, [
              createBaseVNode("h3", _hoisted_30, toDisplayString(isEditing.value ? "Edit Book" : "Add New Book"), 1),
              createBaseVNode("button", {
                onClick: closeModal,
                class: "p-2 hover:bg-gray-100 rounded-lg transition-colors"
              }, [
                createVNode(unref(X), { class: "w-5 h-5" })
              ])
            ]),
            createBaseVNode("form", {
              onSubmit: withModifiers(saveBook, ["prevent"]),
              class: "space-y-4"
            }, [
              createBaseVNode("div", _hoisted_31, [
                createBaseVNode("div", null, [
                  _cache[16] || (_cache[16] = createBaseVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Title", -1)),
                  withDirectives(createBaseVNode("input", {
                    "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => form.value.title = $event),
                    type: "text",
                    required: "",
                    class: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                  }, null, 512), [
                    [vModelText, form.value.title]
                  ])
                ]),
                createBaseVNode("div", null, [
                  _cache[17] || (_cache[17] = createBaseVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Author", -1)),
                  withDirectives(createBaseVNode("input", {
                    "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => form.value.author = $event),
                    type: "text",
                    required: "",
                    class: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                  }, null, 512), [
                    [vModelText, form.value.author]
                  ])
                ])
              ]),
              createBaseVNode("div", _hoisted_32, [
                createBaseVNode("div", null, [
                  _cache[18] || (_cache[18] = createBaseVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "ISBN", -1)),
                  withDirectives(createBaseVNode("input", {
                    "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => form.value.isbn = $event),
                    type: "text",
                    required: "",
                    class: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                  }, null, 512), [
                    [vModelText, form.value.isbn]
                  ])
                ]),
                createBaseVNode("div", null, [
                  _cache[19] || (_cache[19] = createBaseVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Category", -1)),
                  withDirectives(createBaseVNode("input", {
                    "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => form.value.category = $event),
                    type: "text",
                    required: "",
                    class: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500",
                    placeholder: "e.g. Science, Fiction"
                  }, null, 512), [
                    [vModelText, form.value.category]
                  ])
                ])
              ]),
              createBaseVNode("div", _hoisted_33, [
                createBaseVNode("div", null, [
                  _cache[21] || (_cache[21] = createBaseVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Library", -1)),
                  withDirectives(createBaseVNode("select", {
                    "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => form.value.library_id = $event),
                    class: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                  }, [
                    _cache[20] || (_cache[20] = createBaseVNode("option", { value: null }, "Global (No Library)", -1)),
                    (openBlock(true), createElementBlock(Fragment, null, renderList(libraries.value, (lib) => {
                      return openBlock(), createElementBlock("option", {
                        key: lib.id,
                        value: lib.id
                      }, toDisplayString(lib.name), 9, _hoisted_34);
                    }), 128))
                  ], 512), [
                    [vModelSelect, form.value.library_id]
                  ])
                ]),
                createBaseVNode("div", null, [
                  _cache[23] || (_cache[23] = createBaseVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Type", -1)),
                  withDirectives(createBaseVNode("select", {
                    "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => form.value.type = $event),
                    class: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                  }, [..._cache[22] || (_cache[22] = [
                    createBaseVNode("option", { value: "physical" }, "Physical", -1),
                    createBaseVNode("option", { value: "digital" }, "Digital", -1)
                  ])], 512), [
                    [vModelSelect, form.value.type]
                  ])
                ]),
                form.value.type === "physical" ? (openBlock(), createElementBlock("div", _hoisted_35, [
                  _cache[24] || (_cache[24] = createBaseVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Borrowing Period (Days)", -1)),
                  withDirectives(createBaseVNode("input", {
                    "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => form.value.borrowing_period = $event),
                    type: "number",
                    min: "1",
                    class: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500",
                    placeholder: "e.g. 7"
                  }, null, 512), [
                    [
                      vModelText,
                      form.value.borrowing_period,
                      void 0,
                      { number: true }
                    ]
                  ])
                ])) : createCommentVNode("", true)
              ]),
              createBaseVNode("div", null, [
                _cache[25] || (_cache[25] = createBaseVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Description", -1)),
                withDirectives(createBaseVNode("textarea", {
                  "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => form.value.description = $event),
                  rows: "3",
                  required: "",
                  class: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                }, null, 512), [
                  [vModelText, form.value.description]
                ])
              ]),
              createBaseVNode("div", _hoisted_36, [
                createBaseVNode("div", null, [
                  _cache[26] || (_cache[26] = createBaseVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Cover Image", -1)),
                  createBaseVNode("input", {
                    type: "file",
                    onChange: handleCoverUpload,
                    accept: "image/*",
                    class: "w-full px-4 py-2 border border-gray-300 rounded-lg"
                  }, null, 32)
                ]),
                form.value.type === "digital" ? (openBlock(), createElementBlock("div", _hoisted_37, [
                  _cache[27] || (_cache[27] = createBaseVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "PDF File", -1)),
                  createBaseVNode("input", {
                    type: "file",
                    onChange: handlePdfUpload,
                    accept: "application/pdf",
                    required: "",
                    class: "w-full px-4 py-2 border border-gray-300 rounded-lg"
                  }, null, 32)
                ])) : (openBlock(), createElementBlock("div", _hoisted_38, [
                  _cache[28] || (_cache[28] = createBaseVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Location (Shelf/Row)", -1)),
                  withDirectives(createBaseVNode("input", {
                    "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => form.value.location = $event),
                    type: "text",
                    class: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500",
                    placeholder: "e.g. A-12"
                  }, null, 512), [
                    [vModelText, form.value.location]
                  ])
                ]))
              ]),
              createBaseVNode("div", _hoisted_39, [
                createBaseVNode("button", {
                  type: "submit",
                  disabled: loading.value,
                  class: "flex-1 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors disabled:opacity-50"
                }, toDisplayString(loading.value ? "Saving..." : isEditing.value ? "Update Book" : "Create Book"), 9, _hoisted_40),
                createBaseVNode("button", {
                  type: "button",
                  onClick: closeModal,
                  class: "px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                }, " Cancel ")
              ])
            ], 32)
          ])
        ])) : createCommentVNode("", true)
      ]);
    };
  }
});
export {
  _sfc_main as default
};
