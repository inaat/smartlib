import { d as defineComponent, r as ref, E as computed, o as onMounted, c as createElementBlock, b as createBaseVNode, f as createVNode, n as normalizeClass, u as unref, F as Fragment, h as renderList, t as toDisplayString, k as createBlock, l as resolveDynamicComponent, I as normalizeStyle, i as openBlock } from "./main-TSJawxZI.js";
import { s as superadminAPI } from "./superadminApi-yqKTm1Iw.js";
import { U as Users } from "./users-D373qUzk.js";
import { B as BookOpen } from "./book-open-BrKGkk7W.js";
import { L as Library } from "./library-BmYU69ZO.js";
import { R as RefreshCw } from "./refresh-cw-8WNefZ9w.js";
import { f as format } from "./format-CerZa7QB.js";
/* empty css               */
import "./createLucideIcon-Dj92g2Ex.js";
import "./en-US-CtEcOBul.js";
const _hoisted_1 = { class: "p-6 space-y-6" };
const _hoisted_2 = { class: "flex flex-col md:flex-row md:items-center md:justify-between gap-4" };
const _hoisted_3 = { class: "flex items-center space-x-3" };
const _hoisted_4 = { class: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6" };
const _hoisted_5 = { class: "flex items-center justify-between mb-4" };
const _hoisted_6 = { class: "text-sm font-medium text-gray-500" };
const _hoisted_7 = { class: "text-2xl font-bold text-gray-900 mt-1" };
const _hoisted_8 = { class: "grid grid-cols-1 lg:grid-cols-3 gap-6" };
const _hoisted_9 = { class: "lg:col-span-2 bg-white rounded-2xl border border-gray-100 shadow-sm p-6" };
const _hoisted_10 = { class: "h-64 flex items-end justify-between space-x-1" };
const _hoisted_11 = { class: "absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 text-white text-[10px] rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10" };
const _hoisted_12 = { class: "flex justify-between mt-4 text-[10px] text-gray-400" };
const _hoisted_13 = { class: "bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden" };
const _hoisted_14 = { class: "p-0" };
const _hoisted_15 = {
  key: 0,
  class: "p-8 text-center text-gray-500"
};
const _hoisted_16 = {
  key: 1,
  class: "divide-y divide-gray-50"
};
const _hoisted_17 = { class: "flex items-center space-x-3" };
const _hoisted_18 = { class: "w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center" };
const _hoisted_19 = { class: "text-sm font-medium text-gray-900" };
const _hoisted_20 = { class: "text-sm font-bold text-indigo-600" };
const _hoisted_21 = { class: "bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden" };
const _hoisted_22 = { class: "overflow-x-auto" };
const _hoisted_23 = { class: "w-full text-left" };
const _hoisted_24 = { class: "divide-y divide-gray-50" };
const _hoisted_25 = { class: "px-6 py-4" };
const _hoisted_26 = { class: "flex items-center space-x-3" };
const _hoisted_27 = { class: "w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-xs font-bold text-gray-600" };
const _hoisted_28 = { class: "text-sm font-medium text-gray-900" };
const _hoisted_29 = { class: "px-6 py-4 text-sm text-gray-600" };
const _hoisted_30 = { class: "px-6 py-4 text-sm text-gray-600" };
const _hoisted_31 = { class: "px-6 py-4" };
const _hoisted_32 = { class: "px-6 py-4 text-sm text-gray-500" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "AnalyticsPage",
  setup(__props) {
    const loading = ref(true);
    const analyticsData = ref(null);
    const monthlyBookings = ref([]);
    const topLibraries = ref([]);
    const recentBookings = ref([]);
    const statsCards = computed(() => [
      {
        label: "Total Users",
        value: analyticsData.value?.total_users || 0,
        icon: Users,
        bgClass: "bg-blue-50",
        iconClass: "text-blue-600"
      },
      {
        label: "Total Bookings",
        value: analyticsData.value?.total_bookings || 0,
        icon: BookOpen,
        bgClass: "bg-purple-50",
        iconClass: "text-purple-600"
      },
      {
        label: "Active Libraries",
        value: analyticsData.value?.total_libraries || 0,
        icon: Library,
        bgClass: "bg-amber-50",
        iconClass: "text-amber-600"
      }
    ]);
    const maxBookingCount = computed(() => {
      if (monthlyBookings.value.length === 0) return 1;
      return Math.max(...monthlyBookings.value.map((d) => d.count), 1);
    });
    const fetchAnalytics = async () => {
      try {
        loading.value = true;
        const data = await superadminAPI.getAnalytics();
        analyticsData.value = data.analytics;
        monthlyBookings.value = data.monthlyBookings || [];
        topLibraries.value = data.topLibraries || [];
        recentBookings.value = data.recentBookings || [];
      } catch (error) {
        console.error("Failed to fetch analytics:", error);
      } finally {
        loading.value = false;
      }
    };
    const getStatusClass = (status) => {
      switch (status.toLowerCase()) {
        case "completed":
          return "bg-green-100 text-green-700";
        case "active":
        case "checked_in":
          return "bg-blue-100 text-blue-700";
        case "pending":
        case "booked":
          return "bg-amber-100 text-amber-700";
        case "cancelled":
          return "bg-red-100 text-red-700";
        default:
          return "bg-gray-100 text-gray-700";
      }
    };
    const formatDate = (dateStr) => {
      if (!dateStr) return "";
      return format(new Date(dateStr), "MMM d, h:mm a");
    };
    onMounted(() => {
      fetchAnalytics();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          _cache[0] || (_cache[0] = createBaseVNode("div", null, [
            createBaseVNode("h1", { class: "text-2xl font-bold text-gray-900" }, "System Analytics"),
            createBaseVNode("p", { class: "text-gray-500 text-sm" }, "Comprehensive insights across all libraries and users.")
          ], -1)),
          createBaseVNode("div", _hoisted_3, [
            createBaseVNode("button", {
              onClick: fetchAnalytics,
              class: "p-2 text-gray-500 hover:bg-gray-100 rounded-lg transition-colors",
              title: "Refresh Data"
            }, [
              createVNode(unref(RefreshCw), {
                class: normalizeClass(["w-5 h-5", loading.value ? "animate-spin" : ""])
              }, null, 8, ["class"])
            ])
          ])
        ]),
        createBaseVNode("div", _hoisted_4, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(statsCards.value, (stat) => {
            return openBlock(), createElementBlock("div", {
              key: stat.label,
              class: "bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            }, [
              createBaseVNode("div", _hoisted_5, [
                createBaseVNode("div", {
                  class: normalizeClass(["p-2.5 rounded-xl", stat.bgClass])
                }, [
                  (openBlock(), createBlock(resolveDynamicComponent(stat.icon), {
                    class: normalizeClass(["w-6 h-6", stat.iconClass])
                  }, null, 8, ["class"]))
                ], 2)
              ]),
              createBaseVNode("div", null, [
                createBaseVNode("p", _hoisted_6, toDisplayString(stat.label), 1),
                createBaseVNode("h3", _hoisted_7, toDisplayString(stat.value), 1)
              ])
            ]);
          }), 128))
        ]),
        createBaseVNode("div", _hoisted_8, [
          createBaseVNode("div", _hoisted_9, [
            _cache[1] || (_cache[1] = createBaseVNode("div", { class: "flex items-center justify-between mb-6" }, [
              createBaseVNode("h3", { class: "font-bold text-gray-900" }, "Booking Trends (Last 30 Days)")
            ], -1)),
            createBaseVNode("div", _hoisted_10, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(monthlyBookings.value, (day, index) => {
                return openBlock(), createElementBlock("div", {
                  key: index,
                  class: "flex-1 flex flex-col items-center group relative"
                }, [
                  createBaseVNode("div", {
                    class: "w-full bg-indigo-500 rounded-t-sm transition-all hover:bg-indigo-600",
                    style: normalizeStyle({ height: day.count / maxBookingCount.value * 100 + "%" })
                  }, [
                    createBaseVNode("div", _hoisted_11, toDisplayString(day.date) + ": " + toDisplayString(day.count), 1)
                  ], 4)
                ]);
              }), 128))
            ]),
            createBaseVNode("div", _hoisted_12, [
              createBaseVNode("span", null, toDisplayString(monthlyBookings.value[0]?.date), 1),
              createBaseVNode("span", null, toDisplayString(monthlyBookings.value[Math.floor(monthlyBookings.value.length / 2)]?.date), 1),
              createBaseVNode("span", null, toDisplayString(monthlyBookings.value[monthlyBookings.value.length - 1]?.date), 1)
            ])
          ]),
          createBaseVNode("div", _hoisted_13, [
            _cache[2] || (_cache[2] = createBaseVNode("div", { class: "px-6 py-4 border-b border-gray-50" }, [
              createBaseVNode("h3", { class: "font-bold text-gray-900" }, "Top Libraries")
            ], -1)),
            createBaseVNode("div", _hoisted_14, [
              topLibraries.value.length === 0 ? (openBlock(), createElementBlock("div", _hoisted_15, " No data available ")) : (openBlock(), createElementBlock("div", _hoisted_16, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(topLibraries.value, (library) => {
                  return openBlock(), createElementBlock("div", {
                    key: library.id,
                    class: "px-6 py-4 flex items-center justify-between"
                  }, [
                    createBaseVNode("div", _hoisted_17, [
                      createBaseVNode("div", _hoisted_18, [
                        createVNode(unref(Library), { class: "w-4 h-4 text-indigo-600" })
                      ]),
                      createBaseVNode("span", _hoisted_19, toDisplayString(library.name), 1)
                    ]),
                    createBaseVNode("span", _hoisted_20, toDisplayString(library.seat_bookings_count) + " bookings", 1)
                  ]);
                }), 128))
              ]))
            ])
          ])
        ]),
        createBaseVNode("div", _hoisted_21, [
          _cache[4] || (_cache[4] = createBaseVNode("div", { class: "px-6 py-4 border-b border-gray-50 flex items-center justify-between" }, [
            createBaseVNode("h3", { class: "font-bold text-gray-900" }, "Recent System Activity")
          ], -1)),
          createBaseVNode("div", _hoisted_22, [
            createBaseVNode("table", _hoisted_23, [
              _cache[3] || (_cache[3] = createBaseVNode("thead", null, [
                createBaseVNode("tr", { class: "bg-gray-50 text-gray-500 text-xs uppercase tracking-wider" }, [
                  createBaseVNode("th", { class: "px-6 py-4 font-semibold" }, "User"),
                  createBaseVNode("th", { class: "px-6 py-4 font-semibold" }, "Library"),
                  createBaseVNode("th", { class: "px-6 py-4 font-semibold" }, "Seat"),
                  createBaseVNode("th", { class: "px-6 py-4 font-semibold" }, "Status"),
                  createBaseVNode("th", { class: "px-6 py-4 font-semibold" }, "Date")
                ])
              ], -1)),
              createBaseVNode("tbody", _hoisted_24, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(recentBookings.value, (booking) => {
                  return openBlock(), createElementBlock("tr", {
                    key: booking.id,
                    class: "hover:bg-gray-50 transition-colors"
                  }, [
                    createBaseVNode("td", _hoisted_25, [
                      createBaseVNode("div", _hoisted_26, [
                        createBaseVNode("div", _hoisted_27, toDisplayString(booking.user?.name?.charAt(0)), 1),
                        createBaseVNode("span", _hoisted_28, toDisplayString(booking.user?.name), 1)
                      ])
                    ]),
                    createBaseVNode("td", _hoisted_29, toDisplayString(booking.library?.name), 1),
                    createBaseVNode("td", _hoisted_30, "Seat " + toDisplayString(booking.seat?.seat_number), 1),
                    createBaseVNode("td", _hoisted_31, [
                      createBaseVNode("span", {
                        class: normalizeClass(["px-2 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider", getStatusClass(booking.status)])
                      }, toDisplayString(booking.status), 3)
                    ]),
                    createBaseVNode("td", _hoisted_32, toDisplayString(formatDate(booking.created_at)), 1)
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
