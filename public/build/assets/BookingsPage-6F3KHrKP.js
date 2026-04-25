import { d as defineComponent, r as ref, o as onMounted, c as createElementBlock, b as createBaseVNode, f as createVNode, v as withDirectives, u as unref, x as vModelText, F as Fragment, h as renderList, m as createCommentVNode, j as createTextVNode, t as toDisplayString, Q as librarianAPI, n as normalizeClass, i as openBlock } from "./main-DCJXrkf-.js";
import { u as useSwal } from "./useSwal-BUxo5JBv.js";
import { S as Search } from "./search-Bl1QSbxq.js";
import { M as MapPin } from "./map-pin-YMhwiUzx.js";
import { C as CircleCheckBig } from "./circle-check-big-ExLl7Lif.js";
import { L as LogOut } from "./log-out--hPc7NJn.js";
import { U as UserCheck } from "./user-check-Be1AQ7aH.js";
import { C as CircleX } from "./circle-x-NllBQPv2.js";
import { E as Eye } from "./eye-BT3JS_4C.js";
import { f as format } from "./format-CDOmCKsg.js";
/* empty css               */
import "./createLucideIcon-CDsoUk2K.js";
import "./en-US-DYF0Jz7_.js";
const _hoisted_1 = { class: "p-6 space-y-6" };
const _hoisted_2 = { class: "flex items-center justify-between" };
const _hoisted_3 = { class: "flex items-center space-x-3" };
const _hoisted_4 = { class: "relative" };
const _hoisted_5 = { class: "bg-white rounded-xl shadow-sm border border-gray-200 p-4" };
const _hoisted_6 = { class: "flex items-center space-x-2" };
const _hoisted_7 = ["onClick"];
const _hoisted_8 = { class: "bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden" };
const _hoisted_9 = {
  key: 0,
  class: "p-12 flex justify-center"
};
const _hoisted_10 = {
  key: 1,
  class: "p-12 text-center text-gray-500"
};
const _hoisted_11 = {
  key: 2,
  class: "overflow-x-auto"
};
const _hoisted_12 = { class: "w-full" };
const _hoisted_13 = { class: "divide-y divide-gray-200" };
const _hoisted_14 = { class: "px-6 py-4" };
const _hoisted_15 = { class: "flex items-center space-x-3" };
const _hoisted_16 = { class: "w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 flex items-center justify-center text-white font-bold" };
const _hoisted_17 = { class: "font-medium text-gray-900" };
const _hoisted_18 = { class: "text-sm text-gray-500" };
const _hoisted_19 = { class: "px-6 py-4" };
const _hoisted_20 = { class: "flex items-center space-x-2" };
const _hoisted_21 = { class: "font-medium text-gray-900" };
const _hoisted_22 = { class: "text-xs text-gray-500" };
const _hoisted_23 = { class: "px-6 py-4" };
const _hoisted_24 = { class: "text-sm text-gray-900" };
const _hoisted_25 = { class: "text-sm text-gray-500" };
const _hoisted_26 = { class: "px-6 py-4" };
const _hoisted_27 = { class: "px-6 py-4" };
const _hoisted_28 = {
  key: 0,
  class: "text-xs text-gray-600"
};
const _hoisted_29 = { class: "flex items-center space-x-1" };
const _hoisted_30 = {
  key: 0,
  class: "flex items-center space-x-1 mt-1"
};
const _hoisted_31 = {
  key: 1,
  class: "text-sm text-gray-400 italic"
};
const _hoisted_32 = { class: "px-6 py-4 text-right" };
const _hoisted_33 = { class: "flex items-center justify-end space-x-2" };
const _hoisted_34 = ["onClick"];
const _hoisted_35 = ["onClick"];
const _hoisted_36 = ["onClick"];
const _hoisted_37 = ["onClick"];
const _hoisted_38 = {
  key: 3,
  class: "bg-gray-50 px-6 py-4 border-t border-gray-200"
};
const _hoisted_39 = { class: "flex items-center justify-between" };
const _hoisted_40 = { class: "text-sm text-gray-600" };
const _hoisted_41 = { class: "font-medium" };
const _hoisted_42 = { class: "font-medium" };
const _hoisted_43 = { class: "font-medium" };
const _hoisted_44 = { class: "flex items-center space-x-2" };
const _hoisted_45 = ["disabled"];
const _hoisted_46 = ["onClick"];
const _hoisted_47 = ["disabled"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "BookingsPage",
  setup(__props) {
    const loading = ref(false);
    const bookings = ref([]);
    const stats = ref({
      all: 0,
      active: 0,
      pending: 0,
      completed: 0,
      cancelled: 0
    });
    const activeFilter = ref("all");
    const searchQuery = ref("");
    const pagination = ref({
      current_page: 1,
      last_page: 1,
      total: 0,
      from: 0,
      to: 0
    });
    const filterTabs = [
      { label: "All Bookings", value: "all" },
      { label: "Active", value: "active" },
      { label: "Pending", value: "pending" },
      { label: "Completed", value: "completed" },
      { label: "Cancelled", value: "cancelled" }
    ];
    const fetchBookings = async (page = 1) => {
      loading.value = true;
      try {
        const response = await librarianAPI.getBookings({
          page,
          status: activeFilter.value,
          search: searchQuery.value
        });
        bookings.value = response.data;
        pagination.value = {
          current_page: response.current_page,
          last_page: response.last_page,
          total: response.total,
          from: response.from,
          to: response.to
        };
      } catch (error) {
        console.error("Error fetching bookings:", error);
      } finally {
        loading.value = false;
      }
    };
    const fetchStats = async () => {
      try {
        stats.value = await librarianAPI.getBookingStats();
      } catch (error) {
        console.error("Error fetching booking stats:", error);
      }
    };
    const setFilter = (filter) => {
      activeFilter.value = filter;
      fetchBookings(1);
    };
    let searchTimeout = null;
    const debounceSearch = () => {
      if (searchTimeout) clearTimeout(searchTimeout);
      searchTimeout = setTimeout(() => {
        fetchBookings(1);
      }, 500);
    };
    const changePage = (page) => {
      if (page >= 1 && page <= pagination.value.last_page) {
        fetchBookings(page);
      }
    };
    const { showConfirm, showSuccess, showError } = useSwal();
    const handleCheckIn = async (id) => {
      if (!await showConfirm("Check In", "Are you sure you want to check in this student?", "Yes, Check In")) return;
      try {
        await librarianAPI.checkInBooking(id);
        showSuccess("Checked In", "Student checked in successfully.");
        await fetchBookings(pagination.value.current_page);
        await fetchStats();
      } catch (error) {
        console.error("Error checking in:", error);
        showError("Failed", "Failed to check in. Please try again.");
      }
    };
    const handleCheckOut = async (id) => {
      if (!await showConfirm("Check Out", "Are you sure you want to check out this student?", "Yes, Check Out")) return;
      try {
        await librarianAPI.checkOutBooking(id);
        showSuccess("Checked Out", "Student checked out successfully.");
        await fetchBookings(pagination.value.current_page);
        await fetchStats();
      } catch (error) {
        console.error("Error checking out:", error);
        showError("Failed", "Failed to check out. Please try again.");
      }
    };
    const handleCancel = async (id) => {
      if (!await showConfirm("Cancel Booking", "Are you sure you want to cancel this booking?", "Yes, Cancel")) return;
      try {
        await librarianAPI.cancelBooking(id);
        showSuccess("Cancelled", "Booking cancelled successfully.");
        await fetchBookings(pagination.value.current_page);
        await fetchStats();
      } catch (error) {
        console.error("Error cancelling booking:", error);
        showError("Failed", "Failed to cancel booking. Please try again.");
      }
    };
    const formatDate = (dateString) => {
      if (!dateString) return "N/A";
      return format(new Date(dateString), "MMM dd, yyyy");
    };
    const formatTime = (dateString) => {
      if (!dateString) return "N/A";
      return format(new Date(dateString), "hh:mm a");
    };
    const formatStatus = (status) => {
      if (status === "checked_in") return "Active";
      if (status === "booked") return "Pending";
      if (status === "checked_out") return "Completed";
      return status;
    };
    const getStatusClass = (status) => {
      switch (status) {
        case "checked_in":
          return "bg-green-100 text-green-700";
        case "booked":
          return "bg-orange-100 text-orange-700";
        case "checked_out":
          return "bg-blue-100 text-blue-700";
        case "cancelled":
          return "bg-red-100 text-red-700";
        case "no_show":
          return "bg-gray-100 text-gray-700";
        default:
          return "bg-gray-100 text-gray-700";
      }
    };
    const viewBookingDetails = (id) => {
      console.log("View details for booking:", id);
    };
    onMounted(() => {
      fetchBookings();
      fetchStats();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          _cache[3] || (_cache[3] = createBaseVNode("div", null, [
            createBaseVNode("h1", { class: "text-3xl font-bold text-gray-900" }, "Seat Bookings"),
            createBaseVNode("p", { class: "text-gray-600 mt-1" }, "Manage and monitor all seat bookings")
          ], -1)),
          createBaseVNode("div", _hoisted_3, [
            createBaseVNode("div", _hoisted_4, [
              createVNode(unref(Search), { class: "w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" }),
              withDirectives(createBaseVNode("input", {
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => searchQuery.value = $event),
                type: "text",
                placeholder: "Search student or ID...",
                class: "pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none w-64",
                onInput: debounceSearch
              }, null, 544), [
                [vModelText, searchQuery.value]
              ])
            ])
          ])
        ]),
        createBaseVNode("div", _hoisted_5, [
          createBaseVNode("div", _hoisted_6, [
            (openBlock(), createElementBlock(Fragment, null, renderList(filterTabs, (tab) => {
              return createBaseVNode("button", {
                key: tab.value,
                onClick: ($event) => setFilter(tab.value),
                class: normalizeClass([
                  "px-4 py-2 rounded-lg text-sm font-medium transition-all",
                  activeFilter.value === tab.value ? "bg-purple-100 text-purple-700" : "text-gray-600 hover:bg-gray-100"
                ])
              }, [
                createTextVNode(toDisplayString(tab.label) + " ", 1),
                stats.value[tab.value] !== void 0 ? (openBlock(), createElementBlock("span", {
                  key: 0,
                  class: normalizeClass([
                    "ml-2 px-2 py-0.5 rounded-full text-xs",
                    activeFilter.value === tab.value ? "bg-purple-200" : "bg-gray-200"
                  ])
                }, toDisplayString(stats.value[tab.value]), 3)) : createCommentVNode("", true)
              ], 10, _hoisted_7);
            }), 64))
          ])
        ]),
        createBaseVNode("div", _hoisted_8, [
          loading.value ? (openBlock(), createElementBlock("div", _hoisted_9, [..._cache[4] || (_cache[4] = [
            createBaseVNode("div", { class: "animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600" }, null, -1)
          ])])) : bookings.value.length === 0 ? (openBlock(), createElementBlock("div", _hoisted_10, " No bookings found. ")) : (openBlock(), createElementBlock("div", _hoisted_11, [
            createBaseVNode("table", _hoisted_12, [
              _cache[5] || (_cache[5] = createBaseVNode("thead", { class: "bg-gray-50 border-b border-gray-200" }, [
                createBaseVNode("tr", null, [
                  createBaseVNode("th", { class: "px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider" }, " Student "),
                  createBaseVNode("th", { class: "px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider" }, " Seat "),
                  createBaseVNode("th", { class: "px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider" }, " Date & Time "),
                  createBaseVNode("th", { class: "px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider" }, " Status "),
                  createBaseVNode("th", { class: "px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider" }, " Check-in/out "),
                  createBaseVNode("th", { class: "px-6 py-4 text-right text-xs font-semibold text-gray-600 uppercase tracking-wider" }, " Actions ")
                ])
              ], -1)),
              createBaseVNode("tbody", _hoisted_13, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(bookings.value, (booking) => {
                  return openBlock(), createElementBlock("tr", {
                    key: booking.id,
                    class: "hover:bg-gray-50 transition-colors"
                  }, [
                    createBaseVNode("td", _hoisted_14, [
                      createBaseVNode("div", _hoisted_15, [
                        createBaseVNode("div", _hoisted_16, toDisplayString(booking.user?.name?.charAt(0)), 1),
                        createBaseVNode("div", null, [
                          createBaseVNode("div", _hoisted_17, toDisplayString(booking.user?.name), 1),
                          createBaseVNode("div", _hoisted_18, toDisplayString(booking.user?.crn || "N/A"), 1)
                        ])
                      ])
                    ]),
                    createBaseVNode("td", _hoisted_19, [
                      createBaseVNode("div", _hoisted_20, [
                        createVNode(unref(MapPin), { class: "w-4 h-4 text-gray-400" }),
                        createBaseVNode("span", _hoisted_21, toDisplayString(booking.seat?.seat_number), 1),
                        createBaseVNode("span", _hoisted_22, "(" + toDisplayString(booking.seat?.floor?.name) + ")", 1)
                      ])
                    ]),
                    createBaseVNode("td", _hoisted_23, [
                      createBaseVNode("div", _hoisted_24, toDisplayString(formatDate(booking.booking_time)), 1),
                      createBaseVNode("div", _hoisted_25, toDisplayString(formatTime(booking.booking_time)) + " - " + toDisplayString(formatTime(booking.scheduled_end_time)), 1)
                    ]),
                    createBaseVNode("td", _hoisted_26, [
                      createBaseVNode("span", {
                        class: normalizeClass([
                          "px-3 py-1 rounded-full text-xs font-medium capitalize",
                          getStatusClass(booking.status)
                        ])
                      }, toDisplayString(formatStatus(booking.status)), 3)
                    ]),
                    createBaseVNode("td", _hoisted_27, [
                      booking.check_in_time ? (openBlock(), createElementBlock("div", _hoisted_28, [
                        createBaseVNode("div", _hoisted_29, [
                          createVNode(unref(CircleCheckBig), { class: "w-3 h-3 text-green-500" }),
                          createBaseVNode("span", null, "In: " + toDisplayString(formatTime(booking.check_in_time)), 1)
                        ]),
                        booking.check_out_time ? (openBlock(), createElementBlock("div", _hoisted_30, [
                          createVNode(unref(LogOut), { class: "w-3 h-3 text-blue-500" }),
                          createBaseVNode("span", null, "Out: " + toDisplayString(formatTime(booking.check_out_time)), 1)
                        ])) : createCommentVNode("", true)
                      ])) : (openBlock(), createElementBlock("div", _hoisted_31, "Not checked in"))
                    ]),
                    createBaseVNode("td", _hoisted_32, [
                      createBaseVNode("div", _hoisted_33, [
                        booking.status === "booked" ? (openBlock(), createElementBlock("button", {
                          key: 0,
                          onClick: ($event) => handleCheckIn(booking.id),
                          class: "p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors",
                          title: "Check In"
                        }, [
                          createVNode(unref(UserCheck), { class: "w-4 h-4" })
                        ], 8, _hoisted_34)) : createCommentVNode("", true),
                        booking.status === "checked_in" ? (openBlock(), createElementBlock("button", {
                          key: 1,
                          onClick: ($event) => handleCheckOut(booking.id),
                          class: "p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors",
                          title: "Check Out"
                        }, [
                          createVNode(unref(LogOut), { class: "w-4 h-4" })
                        ], 8, _hoisted_35)) : createCommentVNode("", true),
                        ["booked", "checked_in"].includes(booking.status) ? (openBlock(), createElementBlock("button", {
                          key: 2,
                          onClick: ($event) => handleCancel(booking.id),
                          class: "p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors",
                          title: "Cancel Booking"
                        }, [
                          createVNode(unref(CircleX), { class: "w-4 h-4" })
                        ], 8, _hoisted_36)) : createCommentVNode("", true),
                        createBaseVNode("button", {
                          onClick: ($event) => viewBookingDetails(booking.id),
                          class: "p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors",
                          title: "View Details"
                        }, [
                          createVNode(unref(Eye), { class: "w-4 h-4" })
                        ], 8, _hoisted_37)
                      ])
                    ])
                  ]);
                }), 128))
              ])
            ])
          ])),
          pagination.value.total > 0 ? (openBlock(), createElementBlock("div", _hoisted_38, [
            createBaseVNode("div", _hoisted_39, [
              createBaseVNode("div", _hoisted_40, [
                _cache[6] || (_cache[6] = createTextVNode(" Showing ", -1)),
                createBaseVNode("span", _hoisted_41, toDisplayString(pagination.value.from), 1),
                _cache[7] || (_cache[7] = createTextVNode(" to ", -1)),
                createBaseVNode("span", _hoisted_42, toDisplayString(pagination.value.to), 1),
                _cache[8] || (_cache[8] = createTextVNode(" of ", -1)),
                createBaseVNode("span", _hoisted_43, toDisplayString(pagination.value.total), 1),
                _cache[9] || (_cache[9] = createTextVNode(" results ", -1))
              ]),
              createBaseVNode("div", _hoisted_44, [
                createBaseVNode("button", {
                  onClick: _cache[1] || (_cache[1] = ($event) => changePage(pagination.value.current_page - 1)),
                  disabled: pagination.value.current_page === 1,
                  class: "px-3 py-1 border border-gray-300 rounded-lg hover:bg-white transition-colors disabled:opacity-50"
                }, " Previous ", 8, _hoisted_45),
                (openBlock(true), createElementBlock(Fragment, null, renderList(pagination.value.last_page, (page) => {
                  return openBlock(), createElementBlock("button", {
                    key: page,
                    onClick: ($event) => changePage(page),
                    class: normalizeClass([
                      "px-3 py-1 rounded-lg transition-all",
                      pagination.value.current_page === page ? "bg-purple-600 text-white" : "border border-gray-300 hover:bg-white"
                    ])
                  }, toDisplayString(page), 11, _hoisted_46);
                }), 128)),
                createBaseVNode("button", {
                  onClick: _cache[2] || (_cache[2] = ($event) => changePage(pagination.value.current_page + 1)),
                  disabled: pagination.value.current_page === pagination.value.last_page,
                  class: "px-3 py-1 border border-gray-300 rounded-lg hover:bg-white transition-colors disabled:opacity-50"
                }, " Next ", 8, _hoisted_47)
              ])
            ])
          ])) : createCommentVNode("", true)
        ])
      ]);
    };
  }
});
export {
  _sfc_main as default
};
