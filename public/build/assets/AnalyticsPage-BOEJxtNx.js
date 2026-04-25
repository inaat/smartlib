import { d as defineComponent, r as ref, H as watch, o as onMounted, c as createElementBlock, b as createBaseVNode, v as withDirectives, B as vModelSelect, f as createVNode, u as unref, j as createTextVNode, t as toDisplayString, F as Fragment, h as renderList, I as normalizeStyle, i as openBlock } from "./main-DCJXrkf-.js";
import { l as librarianAPI } from "./librarianApi-F_cxFD7n.js";
import { U as Users } from "./users-23JKef0Y.js";
import { T as TrendingUp } from "./trending-up-Cz5PDDyk.js";
import { C as Calendar } from "./calendar-DLVGkrUu.js";
import { C as Clock } from "./clock-B7PYed5-.js";
import { C as ChartColumn } from "./chart-column-D_Bhh0Vi.js";
import { A as Award } from "./award-Dj6jr86d.js";
import { M as MapPin } from "./map-pin-YMhwiUzx.js";
/* empty css               */
import "./createLucideIcon-CDsoUk2K.js";
const _hoisted_1 = { class: "p-6 space-y-6" };
const _hoisted_2 = { class: "flex items-center justify-between" };
const _hoisted_3 = { class: "flex items-center space-x-3" };
const _hoisted_4 = { class: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" };
const _hoisted_5 = { class: "bg-white rounded-xl p-6 shadow-sm border border-gray-200" };
const _hoisted_6 = { class: "flex items-center justify-between mb-4" };
const _hoisted_7 = { class: "p-3 bg-blue-100 rounded-lg" };
const _hoisted_8 = { class: "text-green-600 text-sm font-medium flex items-center" };
const _hoisted_9 = { class: "text-2xl font-bold text-gray-900" };
const _hoisted_10 = { class: "bg-white rounded-xl p-6 shadow-sm border border-gray-200" };
const _hoisted_11 = { class: "flex items-center justify-between mb-4" };
const _hoisted_12 = { class: "p-3 bg-green-100 rounded-lg" };
const _hoisted_13 = { class: "text-green-600 text-sm font-medium flex items-center" };
const _hoisted_14 = { class: "text-2xl font-bold text-gray-900" };
const _hoisted_15 = { class: "bg-white rounded-xl p-6 shadow-sm border border-gray-200" };
const _hoisted_16 = { class: "flex items-center justify-between mb-4" };
const _hoisted_17 = { class: "p-3 bg-purple-100 rounded-lg" };
const _hoisted_18 = { class: "text-green-600 text-sm font-medium flex items-center" };
const _hoisted_19 = { class: "text-2xl font-bold text-gray-900" };
const _hoisted_20 = { class: "bg-white rounded-xl p-6 shadow-sm border border-gray-200" };
const _hoisted_21 = { class: "flex items-center justify-between mb-4" };
const _hoisted_22 = { class: "p-3 bg-orange-100 rounded-lg" };
const _hoisted_23 = { class: "text-green-600 text-sm font-medium flex items-center" };
const _hoisted_24 = { class: "text-2xl font-bold text-gray-900" };
const _hoisted_25 = { class: "grid grid-cols-1 lg:grid-cols-2 gap-6" };
const _hoisted_26 = { class: "bg-white rounded-xl shadow-sm border border-gray-200 p-6" };
const _hoisted_27 = { class: "h-64 flex items-end justify-between space-x-2" };
const _hoisted_28 = { class: "text-xs text-gray-600 mt-2" };
const _hoisted_29 = { class: "bg-white rounded-xl shadow-sm border border-gray-200 p-6" };
const _hoisted_30 = { class: "space-y-3" };
const _hoisted_31 = { class: "text-sm font-medium text-gray-700 w-20" };
const _hoisted_32 = { class: "flex-1 bg-gray-200 rounded-full h-8 overflow-hidden" };
const _hoisted_33 = { class: "text-xs font-medium text-white" };
const _hoisted_34 = { class: "grid grid-cols-1 lg:grid-cols-2 gap-6" };
const _hoisted_35 = { class: "bg-white rounded-xl shadow-sm border border-gray-200" };
const _hoisted_36 = { class: "p-6" };
const _hoisted_37 = { class: "space-y-4" };
const _hoisted_38 = { class: "flex items-center space-x-3" };
const _hoisted_39 = { class: "w-8 h-8 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 flex items-center justify-center text-white text-sm font-bold" };
const _hoisted_40 = { class: "font-medium text-gray-900" };
const _hoisted_41 = { class: "text-sm text-gray-500" };
const _hoisted_42 = { class: "flex items-center space-x-2" };
const _hoisted_43 = { class: "text-sm font-medium text-gray-900" };
const _hoisted_44 = { class: "bg-white rounded-xl shadow-sm border border-gray-200" };
const _hoisted_45 = { class: "p-6" };
const _hoisted_46 = { class: "space-y-4" };
const _hoisted_47 = { class: "flex items-center space-x-3" };
const _hoisted_48 = { class: "p-2 bg-purple-100 rounded-lg" };
const _hoisted_49 = { class: "font-medium text-gray-900" };
const _hoisted_50 = { class: "text-sm text-gray-500" };
const _hoisted_51 = { class: "text-right" };
const _hoisted_52 = { class: "text-sm font-medium text-gray-900" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "AnalyticsPage",
  setup(__props) {
    const loading = ref(false);
    const timeRange = ref("week");
    const stats = ref({
      total_bookings: 0,
      active_bookings: 0,
      completed_bookings: 0,
      completion_rate: 0,
      no_show_rate: 0,
      avg_session_duration: 0,
      total_seats: 0,
      available_seats: 0,
      occupancy_rate: 0,
      total_books: 0,
      digital_books: 0,
      physical_books: 0,
      total_events: 0,
      upcoming_events: 0,
      past_events: 0
    });
    const bookingTrends = ref([]);
    const peakHours = ref([]);
    const topStudents = ref([]);
    const popularSeats = ref([]);
    const fetchAnalytics = async () => {
      loading.value = true;
      try {
        const data = await librarianAPI.getAnalytics(timeRange.value);
        stats.value = data.stats;
        bookingTrends.value = data.dailyTrends.map((d) => ({
          label: d.day,
          value: d.bookings
        }));
        const maxBookings = Math.max(...data.popularTimeSlots.map((s) => s.bookings), 1);
        peakHours.value = data.popularTimeSlots.map((s) => ({
          time: formatTime(s.time),
          bookings: s.bookings,
          percentage: Math.round(s.bookings / maxBookings * 100)
        }));
        topStudents.value = data.topStudents;
        popularSeats.value = data.popularSeats;
      } catch (error) {
        console.error("Error fetching analytics:", error);
      } finally {
        loading.value = false;
      }
    };
    const formatTime = (timeStr) => {
      const [hours] = timeStr.split(":");
      const h = parseInt(hours);
      const ampm = h >= 12 ? "PM" : "AM";
      const hour12 = h % 12 || 12;
      return `${hour12}:00 ${ampm}`;
    };
    watch(timeRange, () => {
      fetchAnalytics();
    });
    onMounted(() => {
      fetchAnalytics();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          _cache[2] || (_cache[2] = createBaseVNode("div", null, [
            createBaseVNode("h1", { class: "text-3xl font-bold text-gray-900" }, "Analytics & Reports"),
            createBaseVNode("p", { class: "text-gray-600 mt-1" }, "Comprehensive insights into library performance")
          ], -1)),
          createBaseVNode("div", _hoisted_3, [
            withDirectives(createBaseVNode("select", {
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => timeRange.value = $event),
              class: "px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            }, [..._cache[1] || (_cache[1] = [
              createBaseVNode("option", { value: "today" }, "Today", -1),
              createBaseVNode("option", { value: "week" }, "Last 7 Days", -1),
              createBaseVNode("option", { value: "month" }, "Last 30 Days", -1),
              createBaseVNode("option", { value: "year" }, "Last Year", -1)
            ])], 512), [
              [vModelSelect, timeRange.value]
            ])
          ])
        ]),
        createBaseVNode("div", _hoisted_4, [
          createBaseVNode("div", _hoisted_5, [
            createBaseVNode("div", _hoisted_6, [
              createBaseVNode("div", _hoisted_7, [
                createVNode(unref(Users), { class: "w-6 h-6 text-blue-600" })
              ]),
              createBaseVNode("span", _hoisted_8, [
                createVNode(unref(TrendingUp), { class: "w-4 h-4 mr-1" }),
                _cache[3] || (_cache[3] = createTextVNode(" +12% ", -1))
              ])
            ]),
            createBaseVNode("h3", _hoisted_9, toDisplayString(stats.value.total_bookings), 1),
            _cache[4] || (_cache[4] = createBaseVNode("p", { class: "text-sm text-gray-600 mt-1" }, "Total Bookings", -1))
          ]),
          createBaseVNode("div", _hoisted_10, [
            createBaseVNode("div", _hoisted_11, [
              createBaseVNode("div", _hoisted_12, [
                createVNode(unref(Calendar), { class: "w-6 h-6 text-green-600" })
              ]),
              createBaseVNode("span", _hoisted_13, [
                createVNode(unref(TrendingUp), { class: "w-4 h-4 mr-1" }),
                _cache[5] || (_cache[5] = createTextVNode(" +8% ", -1))
              ])
            ]),
            createBaseVNode("h3", _hoisted_14, toDisplayString(stats.value.completed_bookings), 1),
            _cache[6] || (_cache[6] = createBaseVNode("p", { class: "text-sm text-gray-600 mt-1" }, "Completed Sessions", -1))
          ]),
          createBaseVNode("div", _hoisted_15, [
            createBaseVNode("div", _hoisted_16, [
              createBaseVNode("div", _hoisted_17, [
                createVNode(unref(Clock), { class: "w-6 h-6 text-purple-600" })
              ]),
              createBaseVNode("span", _hoisted_18, [
                createVNode(unref(TrendingUp), { class: "w-4 h-4 mr-1" }),
                _cache[7] || (_cache[7] = createTextVNode(" +15% ", -1))
              ])
            ]),
            createBaseVNode("h3", _hoisted_19, toDisplayString(stats.value.avg_session_duration) + "h", 1),
            _cache[8] || (_cache[8] = createBaseVNode("p", { class: "text-sm text-gray-600 mt-1" }, "Avg. Duration", -1))
          ]),
          createBaseVNode("div", _hoisted_20, [
            createBaseVNode("div", _hoisted_21, [
              createBaseVNode("div", _hoisted_22, [
                createVNode(unref(ChartColumn), { class: "w-6 h-6 text-orange-600" })
              ]),
              createBaseVNode("span", _hoisted_23, [
                createVNode(unref(TrendingUp), { class: "w-4 h-4 mr-1" }),
                _cache[9] || (_cache[9] = createTextVNode(" +5% ", -1))
              ])
            ]),
            createBaseVNode("h3", _hoisted_24, toDisplayString(stats.value.occupancy_rate) + "%", 1),
            _cache[10] || (_cache[10] = createBaseVNode("p", { class: "text-sm text-gray-600 mt-1" }, "Avg. Occupancy", -1))
          ])
        ]),
        createBaseVNode("div", _hoisted_25, [
          createBaseVNode("div", _hoisted_26, [
            _cache[11] || (_cache[11] = createBaseVNode("h2", { class: "text-lg font-bold text-gray-900 mb-4" }, "Booking Trends", -1)),
            createBaseVNode("div", _hoisted_27, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(bookingTrends.value, (day, index) => {
                return openBlock(), createElementBlock("div", {
                  key: index,
                  class: "flex-1 flex flex-col items-center"
                }, [
                  createBaseVNode("div", {
                    class: "w-full bg-gradient-to-t from-purple-600 to-purple-400 rounded-t-lg transition-all hover:opacity-80",
                    style: normalizeStyle({ height: day.value / Math.max(...bookingTrends.value.map((d) => d.value)) * 100 + "%" })
                  }, null, 4),
                  createBaseVNode("span", _hoisted_28, toDisplayString(day.label), 1)
                ]);
              }), 128))
            ])
          ]),
          createBaseVNode("div", _hoisted_29, [
            _cache[12] || (_cache[12] = createBaseVNode("h2", { class: "text-lg font-bold text-gray-900 mb-4" }, "Peak Hours", -1)),
            createBaseVNode("div", _hoisted_30, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(peakHours.value, (hour) => {
                return openBlock(), createElementBlock("div", {
                  key: hour.time,
                  class: "flex items-center space-x-3"
                }, [
                  createBaseVNode("span", _hoisted_31, toDisplayString(hour.time), 1),
                  createBaseVNode("div", _hoisted_32, [
                    createBaseVNode("div", {
                      class: "h-full bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full flex items-center justify-end pr-3 transition-all",
                      style: normalizeStyle({ width: hour.percentage + "%" })
                    }, [
                      createBaseVNode("span", _hoisted_33, toDisplayString(hour.bookings), 1)
                    ], 4)
                  ])
                ]);
              }), 128))
            ])
          ])
        ]),
        createBaseVNode("div", _hoisted_34, [
          createBaseVNode("div", _hoisted_35, [
            _cache[13] || (_cache[13] = createBaseVNode("div", { class: "p-6 border-b border-gray-200" }, [
              createBaseVNode("h2", { class: "text-lg font-bold text-gray-900" }, "Top Active Students")
            ], -1)),
            createBaseVNode("div", _hoisted_36, [
              createBaseVNode("div", _hoisted_37, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(topStudents.value, (student, index) => {
                  return openBlock(), createElementBlock("div", {
                    key: student.id,
                    class: "flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  }, [
                    createBaseVNode("div", _hoisted_38, [
                      createBaseVNode("div", _hoisted_39, toDisplayString(index + 1), 1),
                      createBaseVNode("div", null, [
                        createBaseVNode("h4", _hoisted_40, toDisplayString(student.name), 1),
                        createBaseVNode("p", _hoisted_41, toDisplayString(student.hours) + " hours studied", 1)
                      ])
                    ]),
                    createBaseVNode("div", _hoisted_42, [
                      createVNode(unref(Award), { class: "w-5 h-5 text-yellow-500" }),
                      createBaseVNode("span", _hoisted_43, toDisplayString(student.points) + " pts", 1)
                    ])
                  ]);
                }), 128))
              ])
            ])
          ]),
          createBaseVNode("div", _hoisted_44, [
            _cache[15] || (_cache[15] = createBaseVNode("div", { class: "p-6 border-b border-gray-200" }, [
              createBaseVNode("h2", { class: "text-lg font-bold text-gray-900" }, "Most Popular Seats")
            ], -1)),
            createBaseVNode("div", _hoisted_45, [
              createBaseVNode("div", _hoisted_46, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(popularSeats.value, (seat) => {
                  return openBlock(), createElementBlock("div", {
                    key: seat.number,
                    class: "flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                  }, [
                    createBaseVNode("div", _hoisted_47, [
                      createBaseVNode("div", _hoisted_48, [
                        createVNode(unref(MapPin), { class: "w-5 h-5 text-purple-600" })
                      ]),
                      createBaseVNode("div", null, [
                        createBaseVNode("h4", _hoisted_49, "Seat " + toDisplayString(seat.number), 1),
                        createBaseVNode("p", _hoisted_50, toDisplayString(seat.bookings) + " bookings", 1)
                      ])
                    ]),
                    createBaseVNode("div", _hoisted_51, [
                      createBaseVNode("p", _hoisted_52, toDisplayString(seat.utilization) + "%", 1),
                      _cache[14] || (_cache[14] = createBaseVNode("p", { class: "text-xs text-gray-500" }, "utilization", -1))
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
