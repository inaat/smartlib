import { d as defineComponent, r as ref, E as computed, o as onMounted, c as createElementBlock, b as createBaseVNode, f as createVNode, n as normalizeClass, u as unref, v as withDirectives, x as vModelText, B as vModelSelect, e as createStaticVNode, m as createCommentVNode, F as Fragment, h as renderList, O as librarianAPI, k as createBlock, t as toDisplayString, i as openBlock } from "./main-Dk2mUbjP.js";
import { u as useSwal } from "./useSwal-J4kFABxt.js";
import { R as RefreshCw } from "./refresh-cw-D9O5gUrY.js";
import { S as Search } from "./search-CtCRD_3L.js";
import { B as Book } from "./book-C1CMYBua.js";
/* empty css               */
import "./createLucideIcon-6n-23kmf.js";
const _hoisted_1 = { class: "space-y-6" };
const _hoisted_2 = { class: "flex items-center justify-between" };
const _hoisted_3 = { class: "flex gap-2" };
const _hoisted_4 = { class: "bg-white rounded-xl shadow-sm border border-gray-200 p-4" };
const _hoisted_5 = { class: "flex flex-col md:flex-row gap-4" };
const _hoisted_6 = { class: "flex-1 relative" };
const _hoisted_7 = { class: "w-full md:w-48" };
const _hoisted_8 = { class: "bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden" };
const _hoisted_9 = { class: "overflow-x-auto" };
const _hoisted_10 = { class: "min-w-full divide-y divide-gray-200" };
const _hoisted_11 = { class: "bg-white divide-y divide-gray-200" };
const _hoisted_12 = {
  key: 0,
  class: "animate-pulse"
};
const _hoisted_13 = { key: 1 };
const _hoisted_14 = { class: "px-6 py-4" };
const _hoisted_15 = { class: "flex items-center" };
const _hoisted_16 = { class: "h-10 w-8 bg-gray-100 rounded flex-shrink-0 overflow-hidden mr-3" };
const _hoisted_17 = ["src"];
const _hoisted_18 = { class: "text-sm font-medium text-gray-900" };
const _hoisted_19 = { class: "text-xs text-gray-500" };
const _hoisted_20 = { class: "px-6 py-4" };
const _hoisted_21 = { class: "flex items-center" };
const _hoisted_22 = { class: "h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-bold text-xs mr-3" };
const _hoisted_23 = { class: "text-sm font-medium text-gray-900" };
const _hoisted_24 = { class: "text-xs text-gray-500" };
const _hoisted_25 = { class: "px-6 py-4 whitespace-nowrap" };
const _hoisted_26 = { class: "text-xs text-gray-900" };
const _hoisted_27 = { class: "px-6 py-4 whitespace-nowrap" };
const _hoisted_28 = { class: "px-6 py-4 whitespace-nowrap text-right text-sm font-medium" };
const _hoisted_29 = ["onClick", "disabled"];
const _hoisted_30 = {
  key: 1,
  class: "text-gray-400"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ReservedBooksPage",
  setup(__props) {
    const { showConfirm, showSuccess, showError } = useSwal();
    const reservations = ref([]);
    const loading = ref(true);
    const processing = ref(null);
    const searchQuery = ref("");
    const statusFilter = ref("all");
    const fetchReservations = async () => {
      loading.value = true;
      try {
        const data = await librarianAPI.getReservedBooks();
        reservations.value = data;
      } catch (error) {
        console.error("Error fetching reservations:", error);
      } finally {
        loading.value = false;
      }
    };
    const filteredReservations = computed(() => {
      return reservations.value.filter((res) => {
        const matchesSearch = !searchQuery.value || res.book?.title.toLowerCase().includes(searchQuery.value.toLowerCase()) || res.book?.isbn?.toLowerCase().includes(searchQuery.value.toLowerCase()) || res.user?.name.toLowerCase().includes(searchQuery.value.toLowerCase());
        const matchesStatus = statusFilter.value === "all" || res.status === statusFilter.value;
        return matchesSearch && matchesStatus;
      });
    });
    const approveReturn = async (reservation) => {
      if (!await showConfirm("Approve Return", `Confirm return for "${reservation.book?.title}" from ${reservation.user?.name}?`, "Yes, Approve")) return;
      processing.value = reservation.id;
      try {
        await librarianAPI.approveReturn(reservation.id);
        showSuccess("Return Approved", "Book has been marked as returned and is now available.");
        await fetchReservations();
      } catch (error) {
        console.error("Error approving return:", error);
        showError("Approval Failed", error.response?.data?.message || "Failed to approve return.");
      } finally {
        processing.value = null;
      }
    };
    const formatDate = (date) => {
      if (!date) return "N/A";
      return new Date(date).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric"
      });
    };
    const getDueDateColor = (dueDate) => {
      if (!dueDate) return "text-gray-500";
      const due = new Date(dueDate);
      const now = /* @__PURE__ */ new Date();
      if (due < now) return "text-red-600 font-bold";
      return "text-gray-500";
    };
    const getStatusColor = (status) => {
      switch (status) {
        case "reserved":
          return "bg-blue-100 text-blue-800";
        case "pending_return":
          return "bg-orange-100 text-orange-800";
        case "returned":
          return "bg-green-100 text-green-800";
        case "overdue":
          return "bg-red-100 text-red-800";
        default:
          return "bg-gray-100 text-gray-800";
      }
    };
    const formatStatus = (status) => {
      return status.split("_").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
    };
    onMounted(() => {
      fetchReservations();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          _cache[2] || (_cache[2] = createBaseVNode("div", null, [
            createBaseVNode("h1", { class: "text-2xl font-bold text-gray-800" }, "Reserved Books"),
            createBaseVNode("p", { class: "text-gray-600 mt-1" }, "Manage student book reservations and returns")
          ], -1)),
          createBaseVNode("div", _hoisted_3, [
            createBaseVNode("button", {
              onClick: fetchReservations,
              class: "p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors",
              title: "Refresh"
            }, [
              createVNode(unref(RefreshCw), {
                class: normalizeClass(["w-5 h-5", { "animate-spin": loading.value }])
              }, null, 8, ["class"])
            ])
          ])
        ]),
        createBaseVNode("div", _hoisted_4, [
          createBaseVNode("div", _hoisted_5, [
            createBaseVNode("div", _hoisted_6, [
              createVNode(unref(Search), { class: "absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" }),
              withDirectives(createBaseVNode("input", {
                type: "text",
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => searchQuery.value = $event),
                placeholder: "Search by student, book title, or ISBN...",
                class: "w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              }, null, 512), [
                [vModelText, searchQuery.value]
              ])
            ]),
            createBaseVNode("div", _hoisted_7, [
              withDirectives(createBaseVNode("select", {
                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => statusFilter.value = $event),
                class: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              }, [..._cache[3] || (_cache[3] = [
                createStaticVNode('<option value="all">All Statuses</option><option value="reserved">Reserved</option><option value="pending_return">Pending Return</option><option value="returned">Returned</option><option value="overdue">Overdue</option>', 5)
              ])], 512), [
                [vModelSelect, statusFilter.value]
              ])
            ])
          ])
        ]),
        createBaseVNode("div", _hoisted_8, [
          createBaseVNode("div", _hoisted_9, [
            createBaseVNode("table", _hoisted_10, [
              _cache[6] || (_cache[6] = createBaseVNode("thead", { class: "bg-gray-50" }, [
                createBaseVNode("tr", null, [
                  createBaseVNode("th", { class: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" }, "Book"),
                  createBaseVNode("th", { class: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" }, "Student"),
                  createBaseVNode("th", { class: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" }, "Dates"),
                  createBaseVNode("th", { class: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" }, "Status"),
                  createBaseVNode("th", { class: "px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider" }, "Actions")
                ])
              ], -1)),
              createBaseVNode("tbody", _hoisted_11, [
                loading.value ? (openBlock(), createElementBlock("tr", _hoisted_12, [..._cache[4] || (_cache[4] = [
                  createBaseVNode("td", {
                    colspan: "5",
                    class: "px-6 py-12 text-center text-gray-500"
                  }, "Loading reservations...", -1)
                ])])) : filteredReservations.value.length === 0 ? (openBlock(), createElementBlock("tr", _hoisted_13, [..._cache[5] || (_cache[5] = [
                  createBaseVNode("td", {
                    colspan: "5",
                    class: "px-6 py-12 text-center text-gray-500"
                  }, "No reservations found matching your criteria.", -1)
                ])])) : createCommentVNode("", true),
                (openBlock(true), createElementBlock(Fragment, null, renderList(filteredReservations.value, (reservation) => {
                  return openBlock(), createElementBlock("tr", {
                    key: reservation.id,
                    class: "hover:bg-gray-50"
                  }, [
                    createBaseVNode("td", _hoisted_14, [
                      createBaseVNode("div", _hoisted_15, [
                        createBaseVNode("div", _hoisted_16, [
                          reservation.book?.cover_url ? (openBlock(), createElementBlock("img", {
                            key: 0,
                            src: reservation.book.cover_url,
                            class: "h-full w-full object-cover"
                          }, null, 8, _hoisted_17)) : (openBlock(), createBlock(unref(Book), {
                            key: 1,
                            class: "h-full w-full p-2 text-gray-400"
                          }))
                        ]),
                        createBaseVNode("div", null, [
                          createBaseVNode("div", _hoisted_18, toDisplayString(reservation.book?.title), 1),
                          createBaseVNode("div", _hoisted_19, "ISBN: " + toDisplayString(reservation.book?.isbn), 1)
                        ])
                      ])
                    ]),
                    createBaseVNode("td", _hoisted_20, [
                      createBaseVNode("div", _hoisted_21, [
                        createBaseVNode("div", _hoisted_22, toDisplayString(reservation.user?.name?.charAt(0)), 1),
                        createBaseVNode("div", null, [
                          createBaseVNode("div", _hoisted_23, toDisplayString(reservation.user?.name), 1),
                          createBaseVNode("div", _hoisted_24, toDisplayString(reservation.user?.email), 1)
                        ])
                      ])
                    ]),
                    createBaseVNode("td", _hoisted_25, [
                      createBaseVNode("div", _hoisted_26, "Reserved: " + toDisplayString(formatDate(reservation.created_at)), 1),
                      createBaseVNode("div", {
                        class: normalizeClass(["text-xs", getDueDateColor(reservation.due_date)])
                      }, " Due: " + toDisplayString(formatDate(reservation.due_date)), 3)
                    ]),
                    createBaseVNode("td", _hoisted_27, [
                      createBaseVNode("span", {
                        class: normalizeClass([
                          "px-2 inline-flex text-xs leading-5 font-semibold rounded-full",
                          getStatusColor(reservation.status)
                        ])
                      }, toDisplayString(formatStatus(reservation.status)), 3)
                    ]),
                    createBaseVNode("td", _hoisted_28, [
                      reservation.status === "pending_return" ? (openBlock(), createElementBlock("button", {
                        key: 0,
                        onClick: ($event) => approveReturn(reservation),
                        disabled: processing.value === reservation.id,
                        class: "text-green-600 hover:text-green-900 font-bold disabled:opacity-50"
                      }, toDisplayString(processing.value === reservation.id ? "Processing..." : "Approve Return"), 9, _hoisted_29)) : (openBlock(), createElementBlock("span", _hoisted_30, "-"))
                    ])
                  ]);
                }), 128))
              ])
            ])
          ])
        ])
      ]);
    };
  }
});
export {
  _sfc_main as default
};
