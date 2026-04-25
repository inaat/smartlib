import { d as defineComponent, r as ref, H as watch, o as onMounted, c as createElementBlock, b as createBaseVNode, f as createVNode, F as Fragment, h as renderList, v as withDirectives, u as unref, x as vModelText, B as vModelSelect, e as createStaticVNode, m as createCommentVNode, t as toDisplayString, n as normalizeClass, i as openBlock } from "./main-DCJXrkf-.js";
import { s as superadminAPI } from "./superadminApi-4s8-GH5P.js";
import { _ as _sfc_main$1 } from "./LibrarySelector.vue_vue_type_script_setup_true_lang-jZxnvv8I.js";
import { S as Search } from "./search-Bl1QSbxq.js";
/* empty css               */
import "./library-CO2Mqfde.js";
import "./createLucideIcon-CDsoUk2K.js";
const _hoisted_1 = { class: "p-6 space-y-6" };
const _hoisted_2 = { class: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4" };
const _hoisted_3 = { class: "text-xs font-semibold text-gray-500 uppercase mb-1" };
const _hoisted_4 = { class: "text-2xl font-bold text-gray-900" };
const _hoisted_5 = { class: "bg-white p-4 rounded-xl shadow-sm border border-gray-200 mb-6" };
const _hoisted_6 = { class: "flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-4" };
const _hoisted_7 = { class: "flex-1" };
const _hoisted_8 = { class: "relative" };
const _hoisted_9 = { class: "w-full md:w-64" };
const _hoisted_10 = { class: "bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden" };
const _hoisted_11 = { class: "overflow-x-auto" };
const _hoisted_12 = { class: "min-w-full divide-y divide-gray-200" };
const _hoisted_13 = { class: "bg-white divide-y divide-gray-200" };
const _hoisted_14 = { class: "px-6 py-4 whitespace-nowrap" };
const _hoisted_15 = { class: "text-sm font-medium text-gray-900" };
const _hoisted_16 = { class: "text-xs text-gray-500" };
const _hoisted_17 = { class: "px-6 py-4 whitespace-nowrap" };
const _hoisted_18 = { class: "text-sm text-gray-900" };
const _hoisted_19 = { class: "text-xs text-gray-500" };
const _hoisted_20 = { class: "px-6 py-4 whitespace-nowrap" };
const _hoisted_21 = { class: "text-xs text-gray-900" };
const _hoisted_22 = {
  key: 0,
  class: "text-xs text-green-600"
};
const _hoisted_23 = {
  key: 1,
  class: "text-xs text-red-600"
};
const _hoisted_24 = { class: "px-6 py-4 whitespace-nowrap" };
const _hoisted_25 = { class: "px-6 py-4 whitespace-nowrap text-right text-sm font-medium" };
const _hoisted_26 = ["onClick"];
const _hoisted_27 = { key: 0 };
const _hoisted_28 = { class: "bg-gray-50 px-6 py-4 border-t border-gray-200 flex items-center justify-between" };
const _hoisted_29 = { class: "text-sm text-gray-500" };
const _hoisted_30 = { class: "flex space-x-2" };
const _hoisted_31 = ["disabled"];
const _hoisted_32 = ["disabled"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "SeatBookingPage",
  setup(__props) {
    const selectedLibraryId = ref(null);
    const statusFilter = ref("all");
    const searchQuery = ref("");
    const bookings = ref([]);
    const stats = ref({});
    const pagination = ref({});
    const fetchBookings = async (page = 1) => {
      try {
        const params = { page };
        if (selectedLibraryId.value) params.library_id = selectedLibraryId.value;
        if (statusFilter.value !== "all") params.status = statusFilter.value;
        if (searchQuery.value) params.search = searchQuery.value;
        const response = await superadminAPI.getBookings(params);
        bookings.value = response.data;
        pagination.value = {
          current_page: response.current_page,
          last_page: response.last_page,
          total: response.total,
          from: response.from,
          to: response.to,
          next_page_url: response.next_page_url,
          prev_page_url: response.prev_page_url
        };
      } catch (error) {
        console.error("Error fetching bookings:", error);
      }
    };
    const fetchStats = async () => {
      try {
        const params = {};
        if (selectedLibraryId.value) params.library_id = selectedLibraryId.value;
        stats.value = await superadminAPI.getBookingStats(params);
      } catch (error) {
        console.error("Error fetching stats:", error);
      }
    };
    watch([selectedLibraryId, statusFilter], () => {
      fetchBookings(1);
      fetchStats();
    });
    let searchTimeout = null;
    const debounceSearch = () => {
      clearTimeout(searchTimeout);
      searchTimeout = setTimeout(() => fetchBookings(1), 500);
    };
    const cancelBooking = async (booking) => {
      if (confirm("Are you sure you want to cancel this booking?")) {
        try {
          await superadminAPI.getBookings({ cancel_id: booking.id });
          await fetchBookings(pagination.value.current_page);
          await fetchStats();
        } catch (error) {
          console.error("Error cancelling booking:", error);
        }
      }
    };
    const getStatusClass = (status) => {
      switch (status) {
        case "booked":
          return "bg-blue-100 text-blue-800";
        case "checked_in":
          return "bg-green-100 text-green-800";
        case "checked_out":
          return "bg-gray-100 text-gray-800";
        case "cancelled":
          return "bg-red-100 text-red-800";
        default:
          return "bg-gray-100 text-gray-800";
      }
    };
    const formatDateTime = (dateTime) => {
      if (!dateTime) return "";
      return new Date(dateTime).toLocaleString("en-US", {
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit"
      });
    };
    onMounted(() => {
      fetchBookings();
      fetchStats();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        _cache[10] || (_cache[10] = createBaseVNode("div", { class: "flex items-center justify-between" }, [
          createBaseVNode("div", null, [
            createBaseVNode("h1", { class: "text-3xl font-bold text-gray-900" }, "Seat Bookings"),
            createBaseVNode("p", { class: "text-gray-600 mt-1" }, "Monitor and manage all seat bookings across libraries")
          ])
        ], -1)),
        createBaseVNode("div", _hoisted_2, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(stats.value, (val, key) => {
            return openBlock(), createElementBlock("div", {
              key,
              class: "bg-white p-4 rounded-xl shadow-sm border border-gray-200"
            }, [
              createBaseVNode("div", _hoisted_3, toDisplayString(key), 1),
              createBaseVNode("div", _hoisted_4, toDisplayString(val), 1)
            ]);
          }), 128))
        ]),
        createVNode(_sfc_main$1, {
          modelValue: selectedLibraryId.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => selectedLibraryId.value = $event)
        }, null, 8, ["modelValue"]),
        createBaseVNode("div", _hoisted_5, [
          createBaseVNode("div", _hoisted_6, [
            createBaseVNode("div", _hoisted_7, [
              _cache[5] || (_cache[5] = createBaseVNode("label", { class: "block text-xs font-semibold text-gray-500 uppercase mb-1 ml-1" }, "Search Student", -1)),
              createBaseVNode("div", _hoisted_8, [
                createVNode(unref(Search), { class: "absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" }),
                withDirectives(createBaseVNode("input", {
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => searchQuery.value = $event),
                  type: "text",
                  placeholder: "Search by name or CRN...",
                  class: "w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm transition-all",
                  onInput: debounceSearch
                }, null, 544), [
                  [vModelText, searchQuery.value]
                ])
              ])
            ]),
            createBaseVNode("div", _hoisted_9, [
              _cache[7] || (_cache[7] = createBaseVNode("label", { class: "block text-xs font-semibold text-gray-500 uppercase mb-1 ml-1" }, "Status Filter", -1)),
              withDirectives(createBaseVNode("select", {
                "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => statusFilter.value = $event),
                class: "w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm transition-all"
              }, [..._cache[6] || (_cache[6] = [
                createStaticVNode('<option value="all">All Statuses</option><option value="booked">Booked</option><option value="checked_in">Checked In</option><option value="checked_out">Checked Out</option><option value="cancelled">Cancelled</option>', 5)
              ])], 512), [
                [vModelSelect, statusFilter.value]
              ])
            ])
          ])
        ]),
        createBaseVNode("div", _hoisted_10, [
          createBaseVNode("div", _hoisted_11, [
            createBaseVNode("table", _hoisted_12, [
              _cache[9] || (_cache[9] = createBaseVNode("thead", { class: "bg-gray-50" }, [
                createBaseVNode("tr", null, [
                  createBaseVNode("th", { class: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" }, "Student"),
                  createBaseVNode("th", { class: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" }, "Seat"),
                  createBaseVNode("th", { class: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" }, "Time"),
                  createBaseVNode("th", { class: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" }, "Status"),
                  createBaseVNode("th", { class: "px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider" }, "Actions")
                ])
              ], -1)),
              createBaseVNode("tbody", _hoisted_13, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(bookings.value, (booking) => {
                  return openBlock(), createElementBlock("tr", {
                    key: booking.id,
                    class: "hover:bg-gray-50"
                  }, [
                    createBaseVNode("td", _hoisted_14, [
                      createBaseVNode("div", _hoisted_15, toDisplayString(booking.user?.name), 1),
                      createBaseVNode("div", _hoisted_16, "CRN: " + toDisplayString(booking.user?.crn), 1)
                    ]),
                    createBaseVNode("td", _hoisted_17, [
                      createBaseVNode("div", _hoisted_18, "Seat " + toDisplayString(booking.seat?.seat_number), 1),
                      createBaseVNode("div", _hoisted_19, toDisplayString(booking.seat?.floor?.name), 1)
                    ]),
                    createBaseVNode("td", _hoisted_20, [
                      createBaseVNode("div", _hoisted_21, "Booked: " + toDisplayString(formatDateTime(booking.booking_time)), 1),
                      booking.check_in_time ? (openBlock(), createElementBlock("div", _hoisted_22, "In: " + toDisplayString(formatDateTime(booking.check_in_time)), 1)) : createCommentVNode("", true),
                      booking.check_out_time ? (openBlock(), createElementBlock("div", _hoisted_23, "Out: " + toDisplayString(formatDateTime(booking.check_out_time)), 1)) : createCommentVNode("", true)
                    ]),
                    createBaseVNode("td", _hoisted_24, [
                      createBaseVNode("span", {
                        class: normalizeClass(["px-2 inline-flex text-xs leading-5 font-semibold rounded-full", getStatusClass(booking.status)])
                      }, toDisplayString(booking.status.replace("_", " ")), 3)
                    ]),
                    createBaseVNode("td", _hoisted_25, [
                      booking.status === "booked" || booking.status === "checked_in" ? (openBlock(), createElementBlock("button", {
                        key: 0,
                        onClick: ($event) => cancelBooking(booking),
                        class: "text-red-600 hover:text-red-900"
                      }, "Cancel", 8, _hoisted_26)) : createCommentVNode("", true)
                    ])
                  ]);
                }), 128)),
                bookings.value.length === 0 ? (openBlock(), createElementBlock("tr", _hoisted_27, [..._cache[8] || (_cache[8] = [
                  createBaseVNode("td", {
                    colspan: "5",
                    class: "px-6 py-12 text-center text-gray-500"
                  }, " No bookings found. ", -1)
                ])])) : createCommentVNode("", true)
              ])
            ])
          ]),
          createBaseVNode("div", _hoisted_28, [
            createBaseVNode("div", _hoisted_29, " Showing " + toDisplayString(pagination.value.from || 0) + " to " + toDisplayString(pagination.value.to || 0) + " of " + toDisplayString(pagination.value.total) + " results ", 1),
            createBaseVNode("div", _hoisted_30, [
              createBaseVNode("button", {
                disabled: !pagination.value.prev_page_url,
                onClick: _cache[3] || (_cache[3] = ($event) => fetchBookings(pagination.value.current_page - 1)),
                class: "px-3 py-1 border border-gray-300 rounded-md text-sm disabled:opacity-50"
              }, " Previous ", 8, _hoisted_31),
              createBaseVNode("button", {
                disabled: !pagination.value.next_page_url,
                onClick: _cache[4] || (_cache[4] = ($event) => fetchBookings(pagination.value.current_page + 1)),
                class: "px-3 py-1 border border-gray-300 rounded-md text-sm disabled:opacity-50"
              }, " Next ", 8, _hoisted_32)
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
