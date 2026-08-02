import { d as defineComponent, r as ref, o as onMounted, a as createElementBlock, b as createBaseVNode, j as createCommentVNode, p as withDirectives, f as createVNode, u as unref, v as vModelText, D as vModelSelect, F as Fragment, n as normalizeClass, k as renderList, t as toDisplayString, h as createBlock, Y as ownerAPI, l as openBlock } from "./main-BGbL_8Ba.js";
import { u as useSwal } from "./useSwal-pQW_XkRe.js";
import { S as Search } from "./search-BSjzd8ZF.js";
import { C as ChevronLeft } from "./chevron-left-XU0Mhy50.js";
import { C as ChevronRight } from "./chevron-right-CJ29BZct.js";
import { X } from "./x-Cqc9Wc4f.js";
import { L as LoaderCircle } from "./loader-circle-COfeqdfO.js";
import { C as CircleCheckBig } from "./circle-check-big-C7p1xlvr.js";
import { C as CircleX } from "./circle-x-BIImN-XH.js";
import { E as Eye } from "./eye-D1ZtRIfq.js";
import { f as format } from "./format-CerZa7QB.js";
/* empty css               */
import "./createLucideIcon-v8VVJu1z.js";
import "./en-US-CtEcOBul.js";
const _hoisted_1 = { class: "space-y-6" };
const _hoisted_2 = { class: "flex flex-col md:flex-row md:items-center md:justify-between gap-4" };
const _hoisted_3 = { class: "flex items-center space-x-3" };
const _hoisted_4 = { class: "relative" };
const _hoisted_5 = { class: "flex items-center space-x-1 bg-gray-100 p-1 rounded-xl w-fit" };
const _hoisted_6 = {
  key: 0,
  class: "bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden text-sm"
};
const _hoisted_7 = { class: "overflow-x-auto" };
const _hoisted_8 = { class: "w-full text-left border-collapse" };
const _hoisted_9 = { class: "divide-y divide-gray-50" };
const _hoisted_10 = { key: 1 };
const _hoisted_11 = { class: "px-6 py-4" };
const _hoisted_12 = { class: "text-sm font-medium text-gray-900 font-mono tracking-tighter" };
const _hoisted_13 = { class: "px-6 py-4" };
const _hoisted_14 = { class: "flex items-center space-x-3" };
const _hoisted_15 = { class: "w-8 h-8 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 font-bold text-xs border border-indigo-100 shadow-sm" };
const _hoisted_16 = { class: "text-sm font-bold text-gray-900" };
const _hoisted_17 = { class: "text-[10px] text-gray-400 font-medium" };
const _hoisted_18 = { class: "px-6 py-4" };
const _hoisted_19 = { class: "text-xs font-bold text-gray-600 uppercase" };
const _hoisted_20 = { class: "px-6 py-4" };
const _hoisted_21 = { class: "text-sm font-extrabold text-indigo-600" };
const _hoisted_22 = { class: "px-6 py-4" };
const _hoisted_23 = { class: "text-xs text-gray-400 font-semibold" };
const _hoisted_24 = { class: "px-6 py-4" };
const _hoisted_25 = { class: "px-6 py-4 text-right" };
const _hoisted_26 = {
  key: 0,
  class: "flex items-center justify-end space-x-2"
};
const _hoisted_27 = ["onClick"];
const _hoisted_28 = ["onClick"];
const _hoisted_29 = {
  key: 1,
  class: "p-1.5 text-gray-400 hover:bg-gray-50 rounded-lg transition-colors"
};
const _hoisted_30 = {
  key: 0,
  class: "px-6 py-4 border-t border-gray-50 flex items-center justify-between"
};
const _hoisted_31 = { class: "text-sm text-gray-500" };
const _hoisted_32 = { class: "flex items-center space-x-2" };
const _hoisted_33 = ["disabled"];
const _hoisted_34 = ["disabled"];
const _hoisted_35 = {
  key: 1,
  class: "bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden text-sm"
};
const _hoisted_36 = { class: "overflow-x-auto" };
const _hoisted_37 = { class: "w-full text-left border-collapse" };
const _hoisted_38 = { class: "divide-y divide-gray-50 font-medium" };
const _hoisted_39 = { key: 1 };
const _hoisted_40 = { class: "px-6 py-4" };
const _hoisted_41 = { class: "text-sm font-semibold text-gray-900 font-mono tracking-tighter" };
const _hoisted_42 = { class: "px-6 py-4" };
const _hoisted_43 = { class: "flex items-center space-x-3" };
const _hoisted_44 = { class: "w-8 h-8 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 font-bold text-xs border border-indigo-100 shadow-sm" };
const _hoisted_45 = { class: "text-sm font-bold text-gray-900" };
const _hoisted_46 = { class: "text-[10px] text-gray-400 font-medium" };
const _hoisted_47 = { class: "px-6 py-4" };
const _hoisted_48 = { class: "text-xs font-bold text-indigo-600 uppercase" };
const _hoisted_49 = { class: "px-6 py-4" };
const _hoisted_50 = { class: "text-xs text-gray-500 font-semibold" };
const _hoisted_51 = { class: "px-6 py-4" };
const _hoisted_52 = { class: "text-xs text-gray-500 font-semibold" };
const _hoisted_53 = { class: "px-6 py-4" };
const _hoisted_54 = {
  key: 0,
  class: "px-6 py-4 border-t border-gray-50 flex items-center justify-between"
};
const _hoisted_55 = { class: "text-sm text-gray-500" };
const _hoisted_56 = { class: "flex items-center space-x-2" };
const _hoisted_57 = ["disabled"];
const _hoisted_58 = ["disabled"];
const _hoisted_59 = {
  key: 2,
  class: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md"
};
const _hoisted_60 = { class: "bg-white rounded-3xl w-full max-w-md overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-200" };
const _hoisted_61 = { class: "px-8 py-6 border-b border-gray-50 flex items-center justify-between bg-indigo-600 text-white" };
const _hoisted_62 = { class: "font-bold text-lg" };
const _hoisted_63 = { class: "p-8 space-y-4" };
const _hoisted_64 = { class: "px-8 py-6 bg-gray-50/50 flex items-center justify-end space-x-3" };
const _hoisted_65 = ["disabled"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "OrdersPage",
  setup(__props) {
    const { showConfirm, showSuccess, showError } = useSwal();
    const activeTab = ref("orders");
    const loading = ref(true);
    const orders = ref([]);
    const subscriptions = ref([]);
    const search = ref("");
    const statusFilter = ref("all");
    const pagination = ref({
      current_page: 1,
      last_page: 1,
      total: 0,
      per_page: 15,
      from: 0,
      to: 0
    });
    const showRejectModal = ref(false);
    const selectedOrder = ref(null);
    const rejectReason = ref("");
    const rejecting = ref(false);
    const switchTab = (tab) => {
      activeTab.value = tab;
      statusFilter.value = "all";
      search.value = "";
      fetchData(1);
    };
    const fetchData = async (page = 1) => {
      if (activeTab.value === "orders") {
        await fetchOrders(page);
      } else {
        await fetchSubscriptions(page);
      }
    };
    const fetchOrders = async (page = 1) => {
      try {
        loading.value = true;
        const response = await ownerAPI.getOrders({
          page,
          search: search.value,
          status: statusFilter.value
        });
        orders.value = response.data;
        updatePagination(response);
      } catch (error) {
        console.error("Failed to fetch orders:", error);
      } finally {
        loading.value = false;
      }
    };
    const fetchSubscriptions = async (page = 1) => {
      try {
        loading.value = true;
        const response = await ownerAPI.getSubscriptions({
          page,
          search: search.value,
          status: statusFilter.value
        });
        subscriptions.value = response.data;
        updatePagination(response);
      } catch (error) {
        console.error("Failed to fetch subscriptions:", error);
      } finally {
        loading.value = false;
      }
    };
    const updatePagination = (response) => {
      pagination.value = {
        current_page: response.current_page,
        last_page: response.last_page,
        total: response.total,
        per_page: response.per_page,
        from: response.from,
        to: response.to
      };
    };
    let searchTimeout = null;
    const debounceSearch = () => {
      if (searchTimeout) clearTimeout(searchTimeout);
      searchTimeout = setTimeout(() => {
        fetchData(1);
      }, 500);
    };
    const changePage = (page) => {
      fetchData(page);
    };
    const handleApprove = async (order) => {
      if (await showConfirm("Approve Order", `Are you sure you want to approve order #ORD-${order.id}?`, "Yes, Approve")) {
        try {
          await ownerAPI.approveOrder(order.id);
          showSuccess("Approved!", "Order approved successfully");
          fetchOrders(pagination.value.current_page);
        } catch (error) {
          showError("Approval Failed", "Failed to approve order");
        }
      }
    };
    const handleReject = (order) => {
      selectedOrder.value = order;
      rejectReason.value = "";
      showRejectModal.value = true;
    };
    const confirmReject = async () => {
      if (!selectedOrder.value) return;
      try {
        rejecting.value = true;
        await ownerAPI.rejectOrder(selectedOrder.value.id, { notes: rejectReason.value });
        showRejectModal.value = false;
        showSuccess("Rejected!", "Order rejected successfully");
        fetchOrders(pagination.value.current_page);
      } catch (error) {
        showError("Rejection Failed", "Failed to reject order");
      } finally {
        rejecting.value = false;
      }
    };
    const getStatusClass = (status) => {
      switch (status) {
        case "pending":
          return "bg-amber-100 text-amber-700";
        case "approved":
        case "active":
          return "bg-green-100 text-green-700";
        case "rejected":
        case "expired":
          return "bg-red-100 text-red-700";
        case "cancelled":
          return "bg-gray-100 text-gray-700";
        default:
          return "bg-gray-100 text-gray-700";
      }
    };
    const formatDate = (dateString) => {
      if (!dateString) return "N/A";
      return format(new Date(dateString), "MMM dd, yyyy HH:mm");
    };
    onMounted(() => {
      fetchData();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          _cache[19] || (_cache[19] = createBaseVNode("div", null, [
            createBaseVNode("h1", { class: "text-2xl font-bold text-gray-900" }, "Order & Subscription Management"),
            createBaseVNode("p", { class: "text-gray-500 text-sm" }, "Manage subscription orders and track active user subscriptions.")
          ], -1)),
          createBaseVNode("div", _hoisted_3, [
            createBaseVNode("div", _hoisted_4, [
              createVNode(unref(Search), { class: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" }),
              withDirectives(createBaseVNode("input", {
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => search.value = $event),
                type: "text",
                placeholder: "Search...",
                class: "pl-10 pr-4 py-2 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 w-64",
                onInput: debounceSearch
              }, null, 544), [
                [vModelText, search.value]
              ])
            ]),
            withDirectives(createBaseVNode("select", {
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => statusFilter.value = $event),
              class: "px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500",
              onChange: _cache[2] || (_cache[2] = ($event) => fetchData(1))
            }, [
              _cache[18] || (_cache[18] = createBaseVNode("option", { value: "all" }, "All Status", -1)),
              activeTab.value === "orders" ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                _cache[12] || (_cache[12] = createBaseVNode("option", { value: "pending" }, "Pending", -1)),
                _cache[13] || (_cache[13] = createBaseVNode("option", { value: "approved" }, "Approved", -1)),
                _cache[14] || (_cache[14] = createBaseVNode("option", { value: "rejected" }, "Rejected", -1))
              ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                _cache[15] || (_cache[15] = createBaseVNode("option", { value: "active" }, "Active", -1)),
                _cache[16] || (_cache[16] = createBaseVNode("option", { value: "expired" }, "Expired", -1)),
                _cache[17] || (_cache[17] = createBaseVNode("option", { value: "cancelled" }, "Cancelled", -1))
              ], 64))
            ], 544), [
              [vModelSelect, statusFilter.value]
            ])
          ])
        ]),
        createBaseVNode("div", _hoisted_5, [
          createBaseVNode("button", {
            onClick: _cache[3] || (_cache[3] = ($event) => switchTab("orders")),
            class: normalizeClass(["px-4 py-2 text-sm font-medium rounded-lg transition-all", activeTab.value === "orders" ? "bg-white text-indigo-600 shadow-sm" : "text-gray-500 hover:text-gray-700"])
          }, " Orders ", 2),
          createBaseVNode("button", {
            onClick: _cache[4] || (_cache[4] = ($event) => switchTab("subscriptions")),
            class: normalizeClass(["px-4 py-2 text-sm font-medium rounded-lg transition-all", activeTab.value === "subscriptions" ? "bg-white text-indigo-600 shadow-sm" : "text-gray-500 hover:text-gray-700"])
          }, " User Subscriptions ", 2)
        ]),
        activeTab.value === "orders" ? (openBlock(), createElementBlock("div", _hoisted_6, [
          createBaseVNode("div", _hoisted_7, [
            createBaseVNode("table", _hoisted_8, [
              _cache[22] || (_cache[22] = createBaseVNode("thead", null, [
                createBaseVNode("tr", { class: "bg-gray-50/50" }, [
                  createBaseVNode("th", { class: "px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider" }, "Order ID"),
                  createBaseVNode("th", { class: "px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider" }, "Student"),
                  createBaseVNode("th", { class: "px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider" }, "Plan"),
                  createBaseVNode("th", { class: "px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider" }, "Amount"),
                  createBaseVNode("th", { class: "px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider" }, "Date"),
                  createBaseVNode("th", { class: "px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider" }, "Status"),
                  createBaseVNode("th", { class: "px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider text-right" }, "Actions")
                ])
              ], -1)),
              createBaseVNode("tbody", _hoisted_9, [
                loading.value ? (openBlock(), createElementBlock(Fragment, { key: 0 }, renderList(5, (i) => {
                  return createBaseVNode("tr", {
                    key: i,
                    class: "animate-pulse"
                  }, [..._cache[20] || (_cache[20] = [
                    createBaseVNode("td", {
                      colspan: "7",
                      class: "px-6 py-4"
                    }, [
                      createBaseVNode("div", { class: "h-4 bg-gray-100 rounded w-full" })
                    ], -1)
                  ])]);
                }), 64)) : orders.value.length === 0 ? (openBlock(), createElementBlock("tr", _hoisted_10, [..._cache[21] || (_cache[21] = [
                  createBaseVNode("td", {
                    colspan: "7",
                    class: "px-6 py-12 text-center text-gray-500 uppercase font-bold tracking-widest text-xs"
                  }, "No orders found matching your criteria.", -1)
                ])])) : createCommentVNode("", true),
                (openBlock(true), createElementBlock(Fragment, null, renderList(orders.value, (order) => {
                  return openBlock(), createElementBlock("tr", {
                    key: order.id,
                    class: "hover:bg-gray-50/50 transition-colors"
                  }, [
                    createBaseVNode("td", _hoisted_11, [
                      createBaseVNode("span", _hoisted_12, "#ORD-" + toDisplayString(order.id), 1)
                    ]),
                    createBaseVNode("td", _hoisted_13, [
                      createBaseVNode("div", _hoisted_14, [
                        createBaseVNode("div", _hoisted_15, toDisplayString(order.user?.name?.charAt(0)), 1),
                        createBaseVNode("div", null, [
                          createBaseVNode("p", _hoisted_16, toDisplayString(order.user?.name), 1),
                          createBaseVNode("p", _hoisted_17, toDisplayString(order.user?.email), 1)
                        ])
                      ])
                    ]),
                    createBaseVNode("td", _hoisted_18, [
                      createBaseVNode("span", _hoisted_19, toDisplayString(order.plan?.name || "N/A"), 1)
                    ]),
                    createBaseVNode("td", _hoisted_20, [
                      createBaseVNode("span", _hoisted_21, "Rs. " + toDisplayString(order.amount?.toLocaleString()), 1)
                    ]),
                    createBaseVNode("td", _hoisted_22, [
                      createBaseVNode("span", _hoisted_23, toDisplayString(formatDate(order.created_at)), 1)
                    ]),
                    createBaseVNode("td", _hoisted_24, [
                      createBaseVNode("span", {
                        class: normalizeClass(["px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider", getStatusClass(order.status)])
                      }, toDisplayString(order.status), 3)
                    ]),
                    createBaseVNode("td", _hoisted_25, [
                      order.status === "pending" ? (openBlock(), createElementBlock("div", _hoisted_26, [
                        createBaseVNode("button", {
                          onClick: ($event) => handleApprove(order),
                          class: "p-1.5 text-green-600 hover:bg-green-50 rounded-lg transition-colors",
                          title: "Approve Order"
                        }, [
                          createVNode(unref(CircleCheckBig), { class: "w-5 h-5" })
                        ], 8, _hoisted_27),
                        createBaseVNode("button", {
                          onClick: ($event) => handleReject(order),
                          class: "p-1.5 text-red-600 hover:bg-red-50 rounded-lg transition-colors",
                          title: "Reject Order"
                        }, [
                          createVNode(unref(CircleX), { class: "w-5 h-5" })
                        ], 8, _hoisted_28)
                      ])) : (openBlock(), createElementBlock("button", _hoisted_29, [
                        createVNode(unref(Eye), { class: "w-5 h-5 opacity-40" })
                      ]))
                    ])
                  ]);
                }), 128))
              ])
            ])
          ]),
          pagination.value.total > pagination.value.per_page ? (openBlock(), createElementBlock("div", _hoisted_30, [
            createBaseVNode("p", _hoisted_31, " Showing " + toDisplayString(pagination.value.from) + " to " + toDisplayString(pagination.value.to) + " of " + toDisplayString(pagination.value.total) + " orders ", 1),
            createBaseVNode("div", _hoisted_32, [
              createBaseVNode("button", {
                disabled: pagination.value.current_page === 1,
                onClick: _cache[5] || (_cache[5] = ($event) => changePage(pagination.value.current_page - 1)),
                class: "p-2 border border-gray-200 rounded-lg disabled:opacity-50 hover:bg-gray-50 transition-colors"
              }, [
                createVNode(unref(ChevronLeft), { class: "w-4 h-4" })
              ], 8, _hoisted_33),
              createBaseVNode("button", {
                disabled: pagination.value.current_page === pagination.value.last_page,
                onClick: _cache[6] || (_cache[6] = ($event) => changePage(pagination.value.current_page + 1)),
                class: "p-2 border border-gray-200 rounded-lg disabled:opacity-50 hover:bg-gray-50 transition-colors"
              }, [
                createVNode(unref(ChevronRight), { class: "w-4 h-4" })
              ], 8, _hoisted_34)
            ])
          ])) : createCommentVNode("", true)
        ])) : (openBlock(), createElementBlock("div", _hoisted_35, [
          createBaseVNode("div", _hoisted_36, [
            createBaseVNode("table", _hoisted_37, [
              _cache[25] || (_cache[25] = createBaseVNode("thead", null, [
                createBaseVNode("tr", { class: "bg-gray-50/50" }, [
                  createBaseVNode("th", { class: "px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider" }, "ID"),
                  createBaseVNode("th", { class: "px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider" }, "Student"),
                  createBaseVNode("th", { class: "px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider" }, "Plan"),
                  createBaseVNode("th", { class: "px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider" }, "Started At"),
                  createBaseVNode("th", { class: "px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider" }, "Expires At"),
                  createBaseVNode("th", { class: "px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider" }, "Status")
                ])
              ], -1)),
              createBaseVNode("tbody", _hoisted_38, [
                loading.value ? (openBlock(), createElementBlock(Fragment, { key: 0 }, renderList(5, (i) => {
                  return createBaseVNode("tr", {
                    key: i,
                    class: "animate-pulse"
                  }, [..._cache[23] || (_cache[23] = [
                    createBaseVNode("td", {
                      colspan: "6",
                      class: "px-6 py-4"
                    }, [
                      createBaseVNode("div", { class: "h-4 bg-gray-100 rounded w-full" })
                    ], -1)
                  ])]);
                }), 64)) : subscriptions.value.length === 0 ? (openBlock(), createElementBlock("tr", _hoisted_39, [..._cache[24] || (_cache[24] = [
                  createBaseVNode("td", {
                    colspan: "6",
                    class: "px-6 py-12 text-center text-gray-500 font-bold uppercase tracking-widest text-xs"
                  }, "No subscriptions found.", -1)
                ])])) : createCommentVNode("", true),
                (openBlock(true), createElementBlock(Fragment, null, renderList(subscriptions.value, (sub) => {
                  return openBlock(), createElementBlock("tr", {
                    key: sub.id,
                    class: "hover:bg-gray-50/50 transition-colors"
                  }, [
                    createBaseVNode("td", _hoisted_40, [
                      createBaseVNode("span", _hoisted_41, "#SUB-" + toDisplayString(sub.id), 1)
                    ]),
                    createBaseVNode("td", _hoisted_42, [
                      createBaseVNode("div", _hoisted_43, [
                        createBaseVNode("div", _hoisted_44, toDisplayString(sub.user?.name?.charAt(0)), 1),
                        createBaseVNode("div", null, [
                          createBaseVNode("p", _hoisted_45, toDisplayString(sub.user?.name), 1),
                          createBaseVNode("p", _hoisted_46, toDisplayString(sub.user?.email), 1)
                        ])
                      ])
                    ]),
                    createBaseVNode("td", _hoisted_47, [
                      createBaseVNode("span", _hoisted_48, toDisplayString(sub.subscription_plan?.name || "N/A"), 1)
                    ]),
                    createBaseVNode("td", _hoisted_49, [
                      createBaseVNode("span", _hoisted_50, toDisplayString(formatDate(sub.started_at)), 1)
                    ]),
                    createBaseVNode("td", _hoisted_51, [
                      createBaseVNode("span", _hoisted_52, toDisplayString(formatDate(sub.expires_at)), 1)
                    ]),
                    createBaseVNode("td", _hoisted_53, [
                      createBaseVNode("span", {
                        class: normalizeClass(["px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider", getStatusClass(sub.status)])
                      }, toDisplayString(sub.status), 3)
                    ])
                  ]);
                }), 128))
              ])
            ])
          ]),
          pagination.value.total > pagination.value.per_page ? (openBlock(), createElementBlock("div", _hoisted_54, [
            createBaseVNode("p", _hoisted_55, " Showing " + toDisplayString(pagination.value.from) + " to " + toDisplayString(pagination.value.to) + " of " + toDisplayString(pagination.value.total) + " subscriptions ", 1),
            createBaseVNode("div", _hoisted_56, [
              createBaseVNode("button", {
                disabled: pagination.value.current_page === 1,
                onClick: _cache[7] || (_cache[7] = ($event) => changePage(pagination.value.current_page - 1)),
                class: "p-2 border border-gray-200 rounded-lg disabled:opacity-50 hover:bg-gray-50 transition-colors"
              }, [
                createVNode(unref(ChevronLeft), { class: "w-4 h-4" })
              ], 8, _hoisted_57),
              createBaseVNode("button", {
                disabled: pagination.value.current_page === pagination.value.last_page,
                onClick: _cache[8] || (_cache[8] = ($event) => changePage(pagination.value.current_page + 1)),
                class: "p-2 border border-gray-200 rounded-lg disabled:opacity-50 hover:bg-gray-50 transition-colors"
              }, [
                createVNode(unref(ChevronRight), { class: "w-4 h-4" })
              ], 8, _hoisted_58)
            ])
          ])) : createCommentVNode("", true)
        ])),
        showRejectModal.value ? (openBlock(), createElementBlock("div", _hoisted_59, [
          createBaseVNode("div", _hoisted_60, [
            createBaseVNode("div", _hoisted_61, [
              createBaseVNode("h3", _hoisted_62, "Reject Order #" + toDisplayString(selectedOrder.value?.id), 1),
              createBaseVNode("button", {
                onClick: _cache[9] || (_cache[9] = ($event) => showRejectModal.value = false),
                class: "p-2 hover:bg-white/10 rounded-xl transition-colors"
              }, [
                createVNode(unref(X), { class: "w-5 h-5" })
              ])
            ]),
            createBaseVNode("div", _hoisted_63, [
              createBaseVNode("div", null, [
                _cache[26] || (_cache[26] = createBaseVNode("label", { class: "block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2" }, "Reason for Rejection", -1)),
                withDirectives(createBaseVNode("textarea", {
                  "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => rejectReason.value = $event),
                  rows: "3",
                  class: "w-full px-4 py-3 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-indigo-500 text-sm outline-none transition-all",
                  placeholder: "e.g. Proof of payment is invalid..."
                }, null, 512), [
                  [vModelText, rejectReason.value]
                ])
              ])
            ]),
            createBaseVNode("div", _hoisted_64, [
              createBaseVNode("button", {
                onClick: _cache[11] || (_cache[11] = ($event) => showRejectModal.value = false),
                class: "px-6 py-2.5 text-sm font-bold text-gray-500 hover:text-gray-700 transition-colors"
              }, " Cancel "),
              createBaseVNode("button", {
                onClick: confirmReject,
                disabled: rejecting.value,
                class: "px-6 py-2.5 bg-red-600 text-white text-sm font-bold rounded-xl hover:bg-red-700 hover:shadow-lg transition-all disabled:opacity-50 flex items-center space-x-2"
              }, [
                rejecting.value ? (openBlock(), createBlock(unref(LoaderCircle), {
                  key: 0,
                  class: "w-4 h-4 animate-spin"
                })) : createCommentVNode("", true),
                _cache[27] || (_cache[27] = createBaseVNode("span", null, "Confirm Reject", -1))
              ], 8, _hoisted_65)
            ])
          ])
        ])) : createCommentVNode("", true)
      ]);
    };
  }
});
export {
  _sfc_main as default
};
