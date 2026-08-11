import { c as createLucideIcon, d as defineComponent, r as ref, I as watch, a as computed, o as onMounted, b as createElementBlock, e as createBaseVNode, g as createVNode, n as normalizeClass, u as unref, R as RefreshCw, s as withDirectives, v as vModelText, H as vModelSelect, f as createStaticVNode, p as createCommentVNode, F as Fragment, k as renderList, t as toDisplayString, W as librarianAPI, i as createBlock, j as createTextVNode, m as openBlock, _ as _export_sfc } from "./main-BeUqjoax.js";
import { u as useSwal } from "./useSwal-pQW_XkRe.js";
import { S as Search } from "./search-CAjRd0eY.js";
import { B as Book } from "./book-DEHnUVEs.js";
import { T as TriangleAlert } from "./triangle-alert-DRsnuOI3.js";
/* empty css               */
const BellRing = createLucideIcon("bell-ring", [
  ["path", { d: "M10.268 21a2 2 0 0 0 3.464 0", key: "vwvbt9" }],
  ["path", { d: "M22 8c0-2.3-.8-4.3-2-6", key: "5bb3ad" }],
  [
    "path",
    {
      d: "M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",
      key: "11g9vi"
    }
  ],
  ["path", { d: "M4 2C2.8 3.7 2 5.7 2 8", key: "tap9e0" }]
]);
const _hoisted_1 = { class: "p-6 space-y-6 font-outfit" };
const _hoisted_2 = { class: "flex justify-end items-center mb-6" };
const _hoisted_3 = { class: "flex items-center gap-2" };
const _hoisted_4 = { class: "bg-white rounded-2xl shadow-sm border border-slate-100 p-4" };
const _hoisted_5 = { class: "flex flex-col md:flex-row gap-4" };
const _hoisted_6 = { class: "flex-1 relative" };
const _hoisted_7 = { class: "w-full md:w-48" };
const _hoisted_8 = { class: "bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden" };
const _hoisted_9 = { class: "overflow-x-auto" };
const _hoisted_10 = { class: "min-w-full divide-y divide-slate-100 text-left" };
const _hoisted_11 = { class: "divide-y divide-slate-100 bg-white" };
const _hoisted_12 = {
  key: 0,
  class: "animate-pulse"
};
const _hoisted_13 = { key: 1 };
const _hoisted_14 = { class: "px-6 py-4" };
const _hoisted_15 = { class: "flex items-center text-left" };
const _hoisted_16 = { class: "h-12 w-9 bg-slate-50 border border-slate-100 rounded-lg flex-shrink-0 overflow-hidden mr-3.5 shadow-sm" };
const _hoisted_17 = ["src"];
const _hoisted_18 = { class: "text-sm font-medium text-slate-700" };
const _hoisted_19 = { class: "text-[10px] text-slate-400 font-semibold tracking-wide mt-0.5 uppercase" };
const _hoisted_20 = { class: "px-6 py-4" };
const _hoisted_21 = { class: "flex items-center text-left" };
const _hoisted_22 = { class: "w-10 h-10 rounded-lg overflow-hidden flex-shrink-0 flex items-center justify-center shadow-sm" };
const _hoisted_23 = ["src"];
const _hoisted_24 = {
  key: 1,
  class: "w-full h-full flex items-center justify-center bg-emerald-50 border border-emerald-700 rounded-lg text-emerald-700 font-bold text-sm"
};
const _hoisted_25 = { class: "text-left ml-3" };
const _hoisted_26 = { class: "text-sm font-medium text-slate-700" };
const _hoisted_27 = { class: "text-[10px] text-slate-400 font-semibold tracking-wide mt-0.5 uppercase" };
const _hoisted_28 = { class: "px-6 py-4 whitespace-nowrap text-xs font-semibold" };
const _hoisted_29 = { class: "text-slate-500" };
const _hoisted_30 = { class: "text-slate-700 font-bold" };
const _hoisted_31 = { class: "font-bold" };
const _hoisted_32 = {
  key: 0,
  class: "px-2 py-0.5 text-[9px] font-extrabold bg-rose-100 text-rose-700 border border-rose-200 rounded-md uppercase tracking-wider inline-flex items-center gap-1"
};
const _hoisted_33 = { class: "px-6 py-4 whitespace-nowrap" };
const _hoisted_34 = { class: "px-6 py-4 whitespace-nowrap text-right text-xs font-bold" };
const _hoisted_35 = { class: "flex items-center justify-end gap-2" };
const _hoisted_36 = ["onClick", "disabled"];
const _hoisted_37 = ["onClick", "disabled"];
const _hoisted_38 = ["onClick", "disabled"];
const _hoisted_39 = ["onClick", "disabled"];
const _hoisted_40 = {
  key: 0,
  class: "px-6 py-4 bg-gray-50/50 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 font-outfit text-xs font-semibold text-slate-500"
};
const _hoisted_41 = { class: "flex items-center space-x-3" };
const _hoisted_42 = { class: "relative flex items-center space-x-1.5 border-l border-slate-200 pl-3" };
const _hoisted_43 = { class: "flex items-center space-x-2" };
const _hoisted_44 = ["disabled"];
const _hoisted_45 = { class: "flex items-center space-x-1" };
const _hoisted_46 = ["onClick", "disabled"];
const _hoisted_47 = ["disabled"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ReservedBooksPage",
  setup(__props) {
    const { showConfirm, showSuccess, showError } = useSwal();
    const reservations = ref([]);
    const loading = ref(true);
    const processing = ref(null);
    const searchQuery = ref("");
    const statusFilter = ref("all");
    const perPage = ref("20");
    const pagination = ref({
      current_page: 1,
      last_page: 1,
      total: 0,
      from: 0,
      to: 0
    });
    const fetchReservations = async (page = 1) => {
      loading.value = true;
      try {
        const params = {
          page,
          per_page: perPage.value
        };
        if (searchQuery.value) params.search = searchQuery.value;
        if (statusFilter.value !== "all") params.status = statusFilter.value;
        const res = await librarianAPI.getReservedBooks(params);
        if (res && res.data) {
          reservations.value = res.data;
          pagination.value = {
            current_page: res.current_page || 1,
            last_page: res.last_page || 1,
            total: res.total || 0,
            from: res.from || 0,
            to: res.to || 0
          };
        } else {
          reservations.value = Array.isArray(res) ? res : [];
        }
      } catch (error) {
        console.error("Error fetching reservations:", error);
      } finally {
        loading.value = false;
      }
    };
    watch([searchQuery, statusFilter, perPage], () => {
      fetchReservations(1);
    });
    const visiblePages = computed(() => {
      const total = pagination.value.last_page;
      const current = pagination.value.current_page;
      if (total <= 7) {
        return Array.from({ length: total }, (_, i) => i + 1);
      }
      const pages = [1];
      if (current > 3) pages.push("...");
      const start = Math.max(2, current - 1);
      const end = Math.min(total - 1, current + 1);
      for (let i = start; i <= end; i++) {
        pages.push(i);
      }
      if (current < total - 2) pages.push("...");
      pages.push(total);
      return pages;
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
    const sendNotification = async (reservation) => {
      const isOverdue = isOverdueReservation(reservation);
      const title = isOverdue ? "Send Overdue Alert" : "Send Return Reminder";
      const text = isOverdue ? `Send an URGENT overdue return notification to ${reservation.user?.name} for "${reservation.book?.title}"?` : `Send a return reminder notification to ${reservation.user?.name} for "${reservation.book?.title}"?`;
      if (!await showConfirm(title, text, isOverdue ? "Yes, Send Alert" : "Yes, Send Reminder")) return;
      processing.value = reservation.id;
      try {
        await librarianAPI.notifyStudent(reservation.id);
        showSuccess(
          isOverdue ? "Overdue Alert Sent" : "Notification Sent",
          `Notification has been sent to ${reservation.user?.name}.`
        );
      } catch (error) {
        console.error("Error sending notification:", error);
        showError("Failed to Send", error.response?.data?.message || "Failed to send return notification.");
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
    const getDueDateColor = (reservation) => {
      if (!reservation?.due_date) return "text-slate-400";
      if (reservation.status === "returned") return "text-slate-600";
      const due = new Date(reservation.due_date);
      const now = /* @__PURE__ */ new Date();
      if (due < now || reservation.status === "overdue") return "text-rose-600 font-bold";
      return "text-slate-500";
    };
    const isOverdueReservation = (reservation) => {
      if (reservation.status === "returned") return false;
      if (reservation.status === "overdue") return true;
      if (!reservation?.due_date) return false;
      const due = new Date(reservation.due_date);
      const now = /* @__PURE__ */ new Date();
      return due < now;
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
            createBaseVNode("button", {
              onClick: fetchReservations,
              class: "p-2 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 text-slate-600 transition-colors cursor-pointer shadow-sm animate-fade-in",
              title: "Refresh"
            }, [
              createVNode(unref(RefreshCw), {
                class: normalizeClass(["w-4 h-4", { "animate-spin": loading.value }])
              }, null, 8, ["class"])
            ])
          ])
        ]),
        createBaseVNode("div", _hoisted_4, [
          createBaseVNode("div", _hoisted_5, [
            createBaseVNode("div", _hoisted_6, [
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
            createBaseVNode("div", _hoisted_7, [
              withDirectives(createBaseVNode("select", {
                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => statusFilter.value = $event),
                class: "w-full px-4 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500/20 outline-none text-xs font-bold text-slate-655 bg-white shadow-sm cursor-pointer"
              }, [..._cache[6] || (_cache[6] = [
                createStaticVNode('<option value="all" data-v-96a2d811>All Statuses</option><option value="pending" data-v-96a2d811>Pending</option><option value="approved" data-v-96a2d811>Approved</option><option value="rejected" data-v-96a2d811>Rejected</option><option value="collected" data-v-96a2d811>Collected</option><option value="pending_return" data-v-96a2d811>Pending Return</option><option value="returned" data-v-96a2d811>Returned</option><option value="overdue" data-v-96a2d811>Overdue</option>', 8)
              ])], 512), [
                [vModelSelect, statusFilter.value]
              ])
            ])
          ])
        ]),
        createBaseVNode("div", _hoisted_8, [
          createBaseVNode("div", _hoisted_9, [
            createBaseVNode("table", _hoisted_10, [
              _cache[13] || (_cache[13] = createBaseVNode("thead", { class: "bg-gray-50/50" }, [
                createBaseVNode("tr", null, [
                  createBaseVNode("th", { class: "px-6 py-4 text-xs font-semibold text-slate-400 uppercase tracking-widest" }, "Book Details"),
                  createBaseVNode("th", { class: "px-6 py-4 text-xs font-semibold text-slate-400 uppercase tracking-widest" }, "Student info"),
                  createBaseVNode("th", { class: "px-6 py-4 text-xs font-semibold text-slate-400 uppercase tracking-widest" }, "Date Logs"),
                  createBaseVNode("th", { class: "px-6 py-4 text-xs font-semibold text-slate-400 uppercase tracking-widest" }, "Status"),
                  createBaseVNode("th", { class: "px-6 py-4 text-xs font-semibold text-slate-400 uppercase tracking-widest text-right" }, "Actions")
                ])
              ], -1)),
              createBaseVNode("tbody", _hoisted_11, [
                loading.value ? (openBlock(), createElementBlock("tr", _hoisted_12, [..._cache[7] || (_cache[7] = [
                  createBaseVNode("td", {
                    colspan: "5",
                    class: "px-6 py-12 text-center text-slate-400 text-xs font-semibold"
                  }, "Loading reservations...", -1)
                ])])) : reservations.value.length === 0 ? (openBlock(), createElementBlock("tr", _hoisted_13, [..._cache[8] || (_cache[8] = [
                  createBaseVNode("td", {
                    colspan: "5",
                    class: "px-6 py-12 text-center text-slate-400 text-xs font-semibold"
                  }, "No reservations found matching your criteria.", -1)
                ])])) : createCommentVNode("", true),
                (openBlock(true), createElementBlock(Fragment, null, renderList(reservations.value, (reservation) => {
                  return openBlock(), createElementBlock("tr", {
                    key: reservation.id,
                    class: "hover:bg-slate-50/50 transition-colors"
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
                            class: "h-full w-full p-2.5 text-slate-400"
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
                        createBaseVNode("div", _hoisted_22, [
                          reservation.user?.profile_picture ? (openBlock(), createElementBlock("img", {
                            key: 0,
                            src: getProfilePictureUrl(reservation.user.profile_picture),
                            class: "w-full h-full object-cover rounded-lg"
                          }, null, 8, _hoisted_23)) : (openBlock(), createElementBlock("div", _hoisted_24, toDisplayString(reservation.user?.name?.charAt(0).toUpperCase()), 1))
                        ]),
                        createBaseVNode("div", _hoisted_25, [
                          createBaseVNode("div", _hoisted_26, toDisplayString(reservation.user?.name), 1),
                          createBaseVNode("div", _hoisted_27, "CRN: " + toDisplayString(reservation.user?.crn || "N/A"), 1)
                        ])
                      ])
                    ]),
                    createBaseVNode("td", _hoisted_28, [
                      createBaseVNode("div", _hoisted_29, [
                        _cache[9] || (_cache[9] = createTextVNode("Reserved: ", -1)),
                        createBaseVNode("span", _hoisted_30, toDisplayString(formatDate(reservation.created_at)), 1)
                      ]),
                      createBaseVNode("div", {
                        class: normalizeClass(["mt-1 flex items-center gap-1.5", getDueDateColor(reservation)])
                      }, [
                        createBaseVNode("span", null, [
                          _cache[10] || (_cache[10] = createTextVNode("Due Date: ", -1)),
                          createBaseVNode("span", _hoisted_31, toDisplayString(formatDate(reservation.due_date)), 1)
                        ]),
                        isOverdueReservation(reservation) ? (openBlock(), createElementBlock("span", _hoisted_32, [
                          createVNode(unref(TriangleAlert), { class: "w-2.5 h-2.5" }),
                          _cache[11] || (_cache[11] = createTextVNode(" Overdue ", -1))
                        ])) : createCommentVNode("", true)
                      ], 2)
                    ]),
                    createBaseVNode("td", _hoisted_33, [
                      createBaseVNode("span", {
                        class: normalizeClass([
                          "px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider rounded-full border",
                          getStatusColor(reservation.status)
                        ])
                      }, toDisplayString(formatStatus(reservation.status)), 3)
                    ]),
                    createBaseVNode("td", _hoisted_34, [
                      createBaseVNode("div", _hoisted_35, [
                        reservation.status === "pending" ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                          createBaseVNode("button", {
                            onClick: ($event) => approveReservation(reservation),
                            disabled: processing.value === reservation.id,
                            class: "px-2.5 py-1.5 rounded-lg bg-green-50 text-green-700 hover:bg-green-100 border border-green-200 transition-colors cursor-pointer disabled:opacity-50"
                          }, " Approve ", 8, _hoisted_36),
                          createBaseVNode("button", {
                            onClick: ($event) => rejectReservation(reservation),
                            disabled: processing.value === reservation.id,
                            class: "px-2.5 py-1.5 rounded-lg bg-rose-50 text-rose-700 hover:bg-rose-100 border border-rose-200 transition-colors cursor-pointer disabled:opacity-50"
                          }, " Reject ", 8, _hoisted_37)
                        ], 64)) : reservation.status === "pending_return" ? (openBlock(), createElementBlock("button", {
                          key: 1,
                          onClick: ($event) => approveReturn(reservation),
                          disabled: processing.value === reservation.id,
                          class: "px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-200 transition-colors cursor-pointer disabled:opacity-50"
                        }, toDisplayString(processing.value === reservation.id ? "Processing..." : "Approve Return"), 9, _hoisted_38)) : createCommentVNode("", true),
                        isOverdueReservation(reservation) ? (openBlock(), createElementBlock("button", {
                          key: 2,
                          onClick: ($event) => sendNotification(reservation),
                          disabled: processing.value === reservation.id,
                          class: "px-2.5 py-1.5 rounded-lg bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200 font-bold shadow-sm transition-all cursor-pointer text-xs flex items-center gap-1.5 disabled:opacity-50",
                          title: "Send URGENT Overdue Return Notification to Student"
                        }, [
                          createVNode(unref(BellRing), { class: "w-3.5 h-3.5 text-rose-600 animate-bounce" }),
                          _cache[12] || (_cache[12] = createBaseVNode("span", null, "Notify Student", -1))
                        ], 8, _hoisted_39)) : createCommentVNode("", true)
                      ])
                    ])
                  ]);
                }), 128))
              ])
            ])
          ]),
          pagination.value.total > 0 ? (openBlock(), createElementBlock("div", _hoisted_40, [
            createBaseVNode("div", _hoisted_41, [
              createBaseVNode("span", null, "Showing " + toDisplayString(pagination.value.from || 0) + " to " + toDisplayString(pagination.value.to || 0) + " of " + toDisplayString(pagination.value.total) + " entries", 1),
              createBaseVNode("div", _hoisted_42, [
                _cache[15] || (_cache[15] = createBaseVNode("span", { class: "text-slate-400 font-medium" }, "Show", -1)),
                withDirectives(createBaseVNode("select", {
                  "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => perPage.value = $event),
                  onChange: _cache[3] || (_cache[3] = ($event) => fetchReservations(1)),
                  class: "px-2 py-1 bg-white border border-slate-200 rounded-lg text-xs font-bold text-slate-700 focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none cursor-pointer shadow-2xs"
                }, [..._cache[14] || (_cache[14] = [
                  createBaseVNode("option", { value: "20" }, "20", -1),
                  createBaseVNode("option", { value: "50" }, "50", -1),
                  createBaseVNode("option", { value: "100" }, "100", -1)
                ])], 544), [
                  [vModelSelect, perPage.value]
                ]),
                _cache[16] || (_cache[16] = createBaseVNode("span", { class: "text-slate-400 font-medium" }, "per page", -1))
              ])
            ]),
            createBaseVNode("div", _hoisted_43, [
              createBaseVNode("button", {
                onClick: _cache[4] || (_cache[4] = ($event) => fetchReservations(pagination.value.current_page - 1)),
                disabled: pagination.value.current_page === 1,
                class: "px-3.5 py-1.5 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-2xs cursor-pointer"
              }, " Previous ", 8, _hoisted_44),
              createBaseVNode("div", _hoisted_45, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(visiblePages.value, (p) => {
                  return openBlock(), createElementBlock("button", {
                    key: p,
                    onClick: ($event) => typeof p === "number" && fetchReservations(p),
                    disabled: typeof p !== "number",
                    class: normalizeClass([
                      "px-3 py-1.5 text-xs font-bold rounded-xl transition-all cursor-pointer",
                      p === pagination.value.current_page ? "bg-emerald-600 text-white shadow-2xs" : typeof p === "number" ? "bg-white border border-slate-200 text-slate-600 hover:bg-slate-50" : "bg-transparent text-slate-400 cursor-default"
                    ])
                  }, toDisplayString(p), 11, _hoisted_46);
                }), 128))
              ]),
              createBaseVNode("button", {
                onClick: _cache[5] || (_cache[5] = ($event) => fetchReservations(pagination.value.current_page + 1)),
                disabled: pagination.value.current_page === pagination.value.last_page,
                class: "px-3.5 py-1.5 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-2xs cursor-pointer"
              }, " Next ", 8, _hoisted_47)
            ])
          ])) : createCommentVNode("", true)
        ])
      ]);
    };
  }
});
const ReservedBooksPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-96a2d811"]]);
export {
  ReservedBooksPage as default
};
