import { d as defineComponent, r as ref, c as computed, o as onMounted, a as createElementBlock, b as createBaseVNode, f as createVNode, p as withDirectives, u as unref, v as vModelText, D as vModelSelect, e as createStaticVNode, l as createCommentVNode, F as Fragment, j as renderList, P as librarianAPI, h as createBlock, t as toDisplayString, i as createTextVNode, n as normalizeClass, k as openBlock } from "./main-DKJzpCzk.js";
import { u as useSwal } from "./useSwal-pQW_XkRe.js";
import { S as Search } from "./search-CJLoyzlx.js";
import { B as Book } from "./book-C8wNOcZL.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
/* empty css               */
import "./createLucideIcon-TQ5d7bQA.js";
const _hoisted_1 = { class: "p-6 space-y-6 font-outfit" };
const _hoisted_2 = { class: "bg-white rounded-2xl shadow-sm border border-slate-100 p-4" };
const _hoisted_3 = { class: "flex flex-col md:flex-row gap-4" };
const _hoisted_4 = { class: "flex-1 relative" };
const _hoisted_5 = { class: "w-full md:w-48" };
const _hoisted_6 = { class: "bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden" };
const _hoisted_7 = { class: "overflow-x-auto" };
const _hoisted_8 = { class: "min-w-full divide-y divide-slate-100 text-left" };
const _hoisted_9 = { class: "divide-y divide-slate-100 bg-white" };
const _hoisted_10 = {
  key: 0,
  class: "animate-pulse"
};
const _hoisted_11 = { key: 1 };
const _hoisted_12 = { class: "px-6 py-4" };
const _hoisted_13 = { class: "flex items-center text-left" };
const _hoisted_14 = { class: "h-12 w-9 bg-slate-50 border border-slate-100 rounded-lg flex-shrink-0 overflow-hidden mr-3.5 shadow-sm" };
const _hoisted_15 = ["src"];
const _hoisted_16 = { class: "text-sm font-medium text-slate-700" };
const _hoisted_17 = { class: "text-[10px] text-slate-400 font-semibold tracking-wide mt-0.5 uppercase" };
const _hoisted_18 = { class: "px-6 py-4" };
const _hoisted_19 = { class: "flex items-center text-left" };
const _hoisted_20 = { class: "w-10 h-10 rounded-lg overflow-hidden flex-shrink-0 flex items-center justify-center shadow-sm" };
const _hoisted_21 = ["src"];
const _hoisted_22 = {
  key: 1,
  class: "w-full h-full flex items-center justify-center bg-emerald-50 border border-emerald-600 rounded-lg text-emerald-600 font-bold text-sm"
};
const _hoisted_23 = { class: "text-left ml-3" };
const _hoisted_24 = { class: "text-sm font-medium text-slate-700" };
const _hoisted_25 = { class: "text-[10px] text-slate-400 font-semibold tracking-wide mt-0.5 uppercase" };
const _hoisted_26 = { class: "px-6 py-4 whitespace-nowrap text-xs font-semibold" };
const _hoisted_27 = { class: "text-slate-500" };
const _hoisted_28 = { class: "text-slate-700 font-bold" };
const _hoisted_29 = { class: "font-bold" };
const _hoisted_30 = { class: "px-6 py-4 whitespace-nowrap" };
const _hoisted_31 = { class: "px-6 py-4 whitespace-nowrap text-right text-xs font-bold" };
const _hoisted_32 = {
  key: 0,
  class: "flex justify-end gap-2"
};
const _hoisted_33 = ["onClick", "disabled"];
const _hoisted_34 = ["onClick", "disabled"];
const _hoisted_35 = ["onClick", "disabled"];
const _hoisted_36 = {
  key: 2,
  class: "text-slate-400 font-normal"
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
    const approveReservation = async (reservation) => {
      if (!await showConfirm("Approve Reservation", `Approve reservation request for "${reservation.book?.title}" from ${reservation.user?.name}?`, "Yes, Approve")) return;
      processing.value = reservation.id;
      try {
        await librarianAPI.approveReservation(reservation.id);
        showSuccess("Approved", "Book reservation request has been approved.");
        await fetchReservations();
      } catch (error) {
        console.error("Error approving reservation:", error);
        showError("Approval Failed", error.response?.data?.message || "Failed to approve reservation.");
      } finally {
        processing.value = null;
      }
    };
    const rejectReservation = async (reservation) => {
      if (!await showConfirm("Reject Reservation", `Are you sure you want to reject reservation request for "${reservation.book?.title}" from ${reservation.user?.name}?`, "Yes, Reject")) return;
      processing.value = reservation.id;
      try {
        await librarianAPI.rejectReservation(reservation.id);
        showSuccess("Rejected", "Book reservation request has been rejected.");
        await fetchReservations();
      } catch (error) {
        console.error("Error rejecting reservation:", error);
        showError("Rejection Failed", error.response?.data?.message || "Failed to reject reservation.");
      } finally {
        processing.value = null;
      }
    };
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
      if (!dueDate) return "text-slate-400";
      const due = new Date(dueDate);
      const now = /* @__PURE__ */ new Date();
      if (due < now) return "text-red-600 font-bold";
      return "text-slate-400";
    };
    const getStatusColor = (status) => {
      switch (status) {
        case "pending":
          return "bg-amber-50 text-amber-700 border-amber-100/60";
        case "approved":
          return "bg-blue-50 text-blue-700 border-blue-100/60";
        case "rejected":
          return "bg-rose-50 text-rose-700 border-rose-100/60";
        case "collected":
          return "bg-emerald-50 text-emerald-700 border-emerald-100/60";
        case "pending_return":
          return "bg-orange-50 text-orange-700 border-orange-100/60";
        case "returned":
          return "bg-green-50 text-green-700 border-green-100/60";
        case "overdue":
          return "bg-rose-50 text-rose-700 border-rose-200";
        default:
          return "bg-slate-50 text-slate-600 border-slate-100";
      }
    };
    const formatStatus = (status) => {
      return status.split("_").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
    };
    const getProfilePictureUrl = (path) => {
      if (!path) return "";
      if (path.startsWith("http")) return path;
      return `/storage/${path}`;
    };
    onMounted(() => {
      fetchReservations();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("div", _hoisted_3, [
            createBaseVNode("div", _hoisted_4, [
              createVNode(unref(Search), { class: "absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" }),
              withDirectives(createBaseVNode("input", {
                type: "text",
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => searchQuery.value = $event),
                placeholder: "Search by student, book title, or ISBN...",
                class: "w-full pl-10 pr-4 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500/20 outline-none text-xs font-semibold text-slate-600 bg-white shadow-sm"
              }, null, 512), [
                [vModelText, searchQuery.value]
              ])
            ]),
            createBaseVNode("div", _hoisted_5, [
              withDirectives(createBaseVNode("select", {
                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => statusFilter.value = $event),
                class: "w-full px-4 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500/20 outline-none text-xs font-bold text-slate-655 bg-white shadow-sm cursor-pointer"
              }, [..._cache[2] || (_cache[2] = [
                createStaticVNode('<option value="all" data-v-f6f86904>All Statuses</option><option value="pending" data-v-f6f86904>Pending</option><option value="approved" data-v-f6f86904>Approved</option><option value="rejected" data-v-f6f86904>Rejected</option><option value="collected" data-v-f6f86904>Collected</option><option value="pending_return" data-v-f6f86904>Pending Return</option><option value="returned" data-v-f6f86904>Returned</option><option value="overdue" data-v-f6f86904>Overdue</option>', 8)
              ])], 512), [
                [vModelSelect, statusFilter.value]
              ])
            ])
          ])
        ]),
        createBaseVNode("div", _hoisted_6, [
          createBaseVNode("div", _hoisted_7, [
            createBaseVNode("table", _hoisted_8, [
              _cache[7] || (_cache[7] = createBaseVNode("thead", { class: "bg-gray-50/50" }, [
                createBaseVNode("tr", null, [
                  createBaseVNode("th", { class: "px-6 py-4 text-xs font-semibold text-slate-400 uppercase tracking-widest" }, "Book Details"),
                  createBaseVNode("th", { class: "px-6 py-4 text-xs font-semibold text-slate-400 uppercase tracking-widest" }, "Student info"),
                  createBaseVNode("th", { class: "px-6 py-4 text-xs font-semibold text-slate-400 uppercase tracking-widest" }, "Date Logs"),
                  createBaseVNode("th", { class: "px-6 py-4 text-xs font-semibold text-slate-400 uppercase tracking-widest" }, "Status"),
                  createBaseVNode("th", { class: "px-6 py-4 text-xs font-semibold text-slate-400 uppercase tracking-widest text-right" }, "Actions")
                ])
              ], -1)),
              createBaseVNode("tbody", _hoisted_9, [
                loading.value ? (openBlock(), createElementBlock("tr", _hoisted_10, [..._cache[3] || (_cache[3] = [
                  createBaseVNode("td", {
                    colspan: "5",
                    class: "px-6 py-12 text-center text-slate-400 text-xs font-semibold"
                  }, "Loading reservations...", -1)
                ])])) : filteredReservations.value.length === 0 ? (openBlock(), createElementBlock("tr", _hoisted_11, [..._cache[4] || (_cache[4] = [
                  createBaseVNode("td", {
                    colspan: "5",
                    class: "px-6 py-12 text-center text-slate-400 text-xs font-semibold"
                  }, "No reservations found matching your criteria.", -1)
                ])])) : createCommentVNode("", true),
                (openBlock(true), createElementBlock(Fragment, null, renderList(filteredReservations.value, (reservation) => {
                  return openBlock(), createElementBlock("tr", {
                    key: reservation.id,
                    class: "hover:bg-slate-50/50 transition-colors"
                  }, [
                    createBaseVNode("td", _hoisted_12, [
                      createBaseVNode("div", _hoisted_13, [
                        createBaseVNode("div", _hoisted_14, [
                          reservation.book?.cover_url ? (openBlock(), createElementBlock("img", {
                            key: 0,
                            src: reservation.book.cover_url,
                            class: "h-full w-full object-cover"
                          }, null, 8, _hoisted_15)) : (openBlock(), createBlock(unref(Book), {
                            key: 1,
                            class: "h-full w-full p-2.5 text-slate-400"
                          }))
                        ]),
                        createBaseVNode("div", null, [
                          createBaseVNode("div", _hoisted_16, toDisplayString(reservation.book?.title), 1),
                          createBaseVNode("div", _hoisted_17, "ISBN: " + toDisplayString(reservation.book?.isbn), 1)
                        ])
                      ])
                    ]),
                    createBaseVNode("td", _hoisted_18, [
                      createBaseVNode("div", _hoisted_19, [
                        createBaseVNode("div", _hoisted_20, [
                          reservation.user?.profile_picture ? (openBlock(), createElementBlock("img", {
                            key: 0,
                            src: getProfilePictureUrl(reservation.user.profile_picture),
                            class: "w-full h-full object-cover rounded-lg"
                          }, null, 8, _hoisted_21)) : (openBlock(), createElementBlock("div", _hoisted_22, toDisplayString(reservation.user?.name?.charAt(0).toUpperCase()), 1))
                        ]),
                        createBaseVNode("div", _hoisted_23, [
                          createBaseVNode("div", _hoisted_24, toDisplayString(reservation.user?.name), 1),
                          createBaseVNode("div", _hoisted_25, "ID: " + toDisplayString(reservation.user?.crn || "N/A"), 1)
                        ])
                      ])
                    ]),
                    createBaseVNode("td", _hoisted_26, [
                      createBaseVNode("div", _hoisted_27, [
                        _cache[5] || (_cache[5] = createTextVNode("Reserved: ", -1)),
                        createBaseVNode("span", _hoisted_28, toDisplayString(formatDate(reservation.created_at)), 1)
                      ]),
                      createBaseVNode("div", {
                        class: normalizeClass(["mt-1", getDueDateColor(reservation.due_date)])
                      }, [
                        _cache[6] || (_cache[6] = createTextVNode(" Due Date: ", -1)),
                        createBaseVNode("span", _hoisted_29, toDisplayString(formatDate(reservation.due_date)), 1)
                      ], 2)
                    ]),
                    createBaseVNode("td", _hoisted_30, [
                      createBaseVNode("span", {
                        class: normalizeClass([
                          "px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider rounded-full border",
                          getStatusColor(reservation.status)
                        ])
                      }, toDisplayString(formatStatus(reservation.status)), 3)
                    ]),
                    createBaseVNode("td", _hoisted_31, [
                      reservation.status === "pending" ? (openBlock(), createElementBlock("div", _hoisted_32, [
                        createBaseVNode("button", {
                          onClick: ($event) => approveReservation(reservation),
                          disabled: processing.value === reservation.id,
                          class: "px-2.5 py-1.5 rounded-lg bg-green-50 text-green-700 hover:bg-green-100 border border-green-200 transition-colors cursor-pointer disabled:opacity-50"
                        }, " Approve ", 8, _hoisted_33),
                        createBaseVNode("button", {
                          onClick: ($event) => rejectReservation(reservation),
                          disabled: processing.value === reservation.id,
                          class: "px-2.5 py-1.5 rounded-lg bg-rose-50 text-rose-700 hover:bg-rose-100 border border-rose-200 transition-colors cursor-pointer disabled:opacity-50"
                        }, " Reject ", 8, _hoisted_34)
                      ])) : reservation.status === "pending_return" ? (openBlock(), createElementBlock("button", {
                        key: 1,
                        onClick: ($event) => approveReturn(reservation),
                        disabled: processing.value === reservation.id,
                        class: "px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-200 transition-colors cursor-pointer disabled:opacity-50"
                      }, toDisplayString(processing.value === reservation.id ? "Processing..." : "Approve Return"), 9, _hoisted_35)) : (openBlock(), createElementBlock("span", _hoisted_36, "-"))
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
const ReservedBooksPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-f6f86904"]]);
export {
  ReservedBooksPage as default
};
