import { d as defineComponent, r as ref, c as computed, E as watch, o as onMounted, a as createElementBlock, b as createBaseVNode, f as createVNode, n as normalizeClass, u as unref, F as Fragment, j as renderList, p as withDirectives, D as vModelSelect, t as toDisplayString, l as createCommentVNode, h as createBlock, m as resolveDynamicComponent, q as normalizeStyle, k as openBlock } from "./main-BV94XoeK.js";
import { s as superadminAPI } from "./superadminApi-C5-ZGb9_.js";
import { U as Users } from "./users-D3Vt8zfj.js";
import { B as BookOpen } from "./book-open-C-J0cv2v.js";
import { B as Building2 } from "./building-2-CoiD_Ne8.js";
import { R as RefreshCw } from "./refresh-cw-C6EhchCZ.js";
import { f as format } from "./format-CerZa7QB.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
/* empty css               */
import "./createLucideIcon-CmaEOm5I.js";
import "./en-US-CtEcOBul.js";
const _hoisted_1 = { class: "space-y-6" };
const _hoisted_2 = { class: "flex justify-end items-center mb-6" };
const _hoisted_3 = { class: "flex items-center space-x-3" };
const _hoisted_4 = ["disabled"];
const _hoisted_5 = { class: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" };
const _hoisted_6 = { class: "text-left" };
const _hoisted_7 = { class: "text-xs font-bold text-slate-400 uppercase tracking-widest" };
const _hoisted_8 = { class: "text-2xl font-black text-slate-800 mt-1.5" };
const _hoisted_9 = { class: "grid grid-cols-1 lg:grid-cols-3 gap-6" };
const _hoisted_10 = { class: "lg:col-span-2 bg-white rounded-2xl border border-slate-100 shadow-sm p-6 flex flex-col justify-between" };
const _hoisted_11 = { class: "flex items-center justify-between mb-6 text-left" };
const _hoisted_12 = { class: "h-64 flex items-end justify-between space-x-1.5 px-2" };
const _hoisted_13 = { class: "absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2.5 py-1.5 bg-slate-900 text-white text-[10px] rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-25 shadow-md font-bold" };
const _hoisted_14 = { class: "flex justify-between mt-4 text-[10px] text-slate-400 font-bold uppercase tracking-wider px-2" };
const _hoisted_15 = { class: "bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden flex flex-col justify-between" };
const _hoisted_16 = { class: "flex-1 flex flex-col justify-center min-h-[200px]" };
const _hoisted_17 = {
  key: 0,
  class: "p-8 text-center text-slate-400 font-medium"
};
const _hoisted_18 = {
  key: 1,
  class: "divide-y divide-slate-50 flex-1"
};
const _hoisted_19 = { class: "flex items-center space-x-3.5" };
const _hoisted_20 = { class: "w-8 h-8 rounded-lg bg-purple-50 flex items-center justify-center" };
const _hoisted_21 = { class: "text-xs font-bold text-slate-750" };
const _hoisted_22 = { class: "text-[10px] font-extrabold text-purple-700 bg-purple-50 border border-purple-100/60 px-2.5 py-1 rounded-full uppercase tracking-wider" };
const _hoisted_23 = { class: "bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden" };
const _hoisted_24 = { class: "overflow-x-auto" };
const _hoisted_25 = { class: "min-w-full divide-y divide-slate-100" };
const _hoisted_26 = { class: "divide-y divide-slate-50 bg-white" };
const _hoisted_27 = { class: "px-6 py-4 whitespace-nowrap" };
const _hoisted_28 = { class: "flex items-center space-x-3.5" };
const _hoisted_29 = { class: "w-8 h-8 rounded-lg bg-purple-50 border border-purple-200 text-purple-600 flex items-center justify-center text-xs font-bold" };
const _hoisted_30 = { class: "text-xs font-bold text-slate-700" };
const _hoisted_31 = { class: "px-6 py-4 whitespace-nowrap text-left text-xs font-semibold text-slate-600" };
const _hoisted_32 = { class: "px-6 py-4 whitespace-nowrap text-left text-xs font-semibold text-slate-600" };
const _hoisted_33 = { class: "px-6 py-4 whitespace-nowrap text-left" };
const _hoisted_34 = { class: "px-6 py-4 whitespace-nowrap text-left text-xs text-slate-500 font-medium" };
const _hoisted_35 = { key: 0 };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "AnalyticsPage",
  setup(__props) {
    const loading = ref(true);
    const analyticsData = ref(null);
    const monthlyBookings = ref([]);
    const topLibraries = ref([]);
    const recentBookings = ref([]);
    const selectedTrendRange = ref("monthly");
    const statsCards = computed(() => [
      {
        label: "Total Users",
        value: analyticsData.value?.total_users || 0,
        icon: Users,
        iconClass: "text-blue-600"
      },
      {
        label: "Total Bookings",
        value: analyticsData.value?.total_bookings || 0,
        icon: BookOpen,
        iconClass: "text-purple-600"
      },
      {
        label: "Active Libraries",
        value: analyticsData.value?.total_libraries || 0,
        icon: Building2,
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
        const data = await superadminAPI.getAnalytics({ range: selectedTrendRange.value });
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
    watch(selectedTrendRange, () => {
      fetchAnalytics();
    });
    const getStatusClass = (status) => {
      switch (status.toLowerCase()) {
        case "completed":
          return "bg-green-50 border-green-100 text-green-700";
        case "active":
        case "checked_in":
          return "bg-blue-50 border-blue-100 text-blue-700";
        case "pending":
        case "booked":
          return "bg-amber-55 border-amber-100 text-amber-700";
        case "cancelled":
          return "bg-red-50 border-red-100 text-red-700";
        default:
          return "bg-slate-50 border-slate-200 text-slate-500";
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
          createBaseVNode("div", _hoisted_3, [
            createBaseVNode("button", {
              onClick: fetchAnalytics,
              disabled: loading.value,
              class: "p-2.5 bg-white border border-slate-200 text-gray-500 hover:text-purple-600 hover:bg-purple-50 rounded-2xl transition-all disabled:opacity-50 shadow-sm cursor-pointer",
              title: "Refresh Data"
            }, [
              createVNode(unref(RefreshCw), {
                class: normalizeClass(["w-5 h-5", loading.value ? "animate-spin" : ""])
              }, null, 8, ["class"])
            ], 8, _hoisted_4)
          ])
        ]),
        createBaseVNode("div", _hoisted_5, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(statsCards.value, (stat) => {
            return openBlock(), createElementBlock("div", {
              key: stat.label,
              class: "bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex items-center justify-between"
            }, [
              createBaseVNode("div", _hoisted_6, [
                createBaseVNode("p", _hoisted_7, toDisplayString(stat.label), 1),
                createBaseVNode("h3", _hoisted_8, toDisplayString(stat.value), 1)
              ]),
              createBaseVNode("div", {
                class: normalizeClass(["p-3.5 rounded-xl bg-slate-50", stat.iconClass])
              }, [
                (openBlock(), createBlock(resolveDynamicComponent(stat.icon), { class: "w-5 h-5" }))
              ], 2)
            ]);
          }), 128))
        ]),
        createBaseVNode("div", _hoisted_9, [
          createBaseVNode("div", _hoisted_10, [
            createBaseVNode("div", _hoisted_11, [
              _cache[2] || (_cache[2] = createBaseVNode("h3", { class: "text-sm font-bold text-slate-700 uppercase tracking-wider" }, "Booking Trends", -1)),
              withDirectives(createBaseVNode("select", {
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => selectedTrendRange.value = $event),
                class: "px-3.5 py-1.5 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-655 focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 outline-none cursor-pointer"
              }, [..._cache[1] || (_cache[1] = [
                createBaseVNode("option", { value: "weekly" }, "Weekly", -1),
                createBaseVNode("option", { value: "monthly" }, "Monthly", -1),
                createBaseVNode("option", { value: "yearly" }, "Yearly", -1)
              ])], 512), [
                [vModelSelect, selectedTrendRange.value]
              ])
            ]),
            createBaseVNode("div", _hoisted_12, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(monthlyBookings.value, (day, index) => {
                return openBlock(), createElementBlock("div", {
                  key: index,
                  class: "flex-1 flex flex-col items-center group relative h-full justify-end"
                }, [
                  createBaseVNode("div", {
                    class: "w-full bg-gradient-to-t from-purple-600 to-fuchsia-600 rounded-t-lg transition-all duration-300 hover:from-purple-700 hover:to-fuchsia-700 cursor-pointer shadow-sm",
                    style: normalizeStyle({ height: day.count / maxBookingCount.value * 100 + "%" })
                  }, [
                    createBaseVNode("div", _hoisted_13, toDisplayString(day.date) + ": " + toDisplayString(day.count) + " bookings ", 1)
                  ], 4)
                ]);
              }), 128))
            ]),
            createBaseVNode("div", _hoisted_14, [
              createBaseVNode("span", null, toDisplayString(monthlyBookings.value[0]?.date), 1),
              createBaseVNode("span", null, toDisplayString(monthlyBookings.value[Math.floor(monthlyBookings.value.length / 2)]?.date), 1),
              createBaseVNode("span", null, toDisplayString(monthlyBookings.value[monthlyBookings.value.length - 1]?.date), 1)
            ])
          ]),
          createBaseVNode("div", _hoisted_15, [
            _cache[4] || (_cache[4] = createBaseVNode("div", { class: "px-6 py-5 border-b border-slate-50 text-left" }, [
              createBaseVNode("h3", { class: "text-sm font-bold text-slate-700 uppercase tracking-wider" }, "Top Libraries")
            ], -1)),
            createBaseVNode("div", _hoisted_16, [
              topLibraries.value.length === 0 ? (openBlock(), createElementBlock("div", _hoisted_17, [
                createVNode(unref(Building2), { class: "w-8 h-8 text-slate-350 mx-auto mb-2" }),
                _cache[3] || (_cache[3] = createBaseVNode("span", null, "No data available", -1))
              ])) : (openBlock(), createElementBlock("div", _hoisted_18, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(topLibraries.value, (library) => {
                  return openBlock(), createElementBlock("div", {
                    key: library.id,
                    class: "px-6 py-4.5 flex items-center justify-between hover:bg-slate-50/30 transition-colors"
                  }, [
                    createBaseVNode("div", _hoisted_19, [
                      createBaseVNode("div", _hoisted_20, [
                        createVNode(unref(Building2), { class: "w-4 h-4 text-purple-600" })
                      ]),
                      createBaseVNode("span", _hoisted_21, toDisplayString(library.name), 1)
                    ]),
                    createBaseVNode("span", _hoisted_22, toDisplayString(library.seat_bookings_count) + " Bookings ", 1)
                  ]);
                }), 128))
              ]))
            ])
          ])
        ]),
        createBaseVNode("div", _hoisted_23, [
          _cache[7] || (_cache[7] = createBaseVNode("div", { class: "px-6 py-5 border-b border-slate-50 text-left" }, [
            createBaseVNode("h3", { class: "text-sm font-bold text-slate-700 uppercase tracking-wider" }, "Recent System Activity")
          ], -1)),
          createBaseVNode("div", _hoisted_24, [
            createBaseVNode("table", _hoisted_25, [
              _cache[6] || (_cache[6] = createBaseVNode("thead", { class: "bg-gray-50/50" }, [
                createBaseVNode("tr", null, [
                  createBaseVNode("th", {
                    scope: "col",
                    class: "px-6 py-4 text-left text-xs font-semibold text-slate-400 uppercase tracking-widest"
                  }, "User"),
                  createBaseVNode("th", {
                    scope: "col",
                    class: "px-6 py-4 text-left text-xs font-semibold text-slate-400 uppercase tracking-widest"
                  }, "Library"),
                  createBaseVNode("th", {
                    scope: "col",
                    class: "px-6 py-4 text-left text-xs font-semibold text-slate-400 uppercase tracking-widest"
                  }, "Seat"),
                  createBaseVNode("th", {
                    scope: "col",
                    class: "px-6 py-4 text-left text-xs font-semibold text-slate-400 uppercase tracking-widest"
                  }, "Status"),
                  createBaseVNode("th", {
                    scope: "col",
                    class: "px-6 py-4 text-left text-xs font-semibold text-slate-400 uppercase tracking-widest"
                  }, "Date")
                ])
              ], -1)),
              createBaseVNode("tbody", _hoisted_26, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(recentBookings.value, (booking) => {
                  return openBlock(), createElementBlock("tr", {
                    key: booking.id,
                    class: "hover:bg-slate-50/50 transition-colors"
                  }, [
                    createBaseVNode("td", _hoisted_27, [
                      createBaseVNode("div", _hoisted_28, [
                        createBaseVNode("div", _hoisted_29, toDisplayString(booking.user?.name?.charAt(0).toUpperCase()), 1),
                        createBaseVNode("span", _hoisted_30, toDisplayString(booking.user?.name), 1)
                      ])
                    ]),
                    createBaseVNode("td", _hoisted_31, toDisplayString(booking.library?.name), 1),
                    createBaseVNode("td", _hoisted_32, " Seat " + toDisplayString(booking.seat?.seat_number), 1),
                    createBaseVNode("td", _hoisted_33, [
                      createBaseVNode("span", {
                        class: normalizeClass([
                          "text-[9px] font-semibold px-2.5 py-1 rounded-full uppercase tracking-wider border",
                          getStatusClass(booking.status)
                        ])
                      }, toDisplayString(booking.status), 3)
                    ]),
                    createBaseVNode("td", _hoisted_34, toDisplayString(formatDate(booking.created_at)), 1)
                  ]);
                }), 128)),
                recentBookings.value.length === 0 && !loading.value ? (openBlock(), createElementBlock("tr", _hoisted_35, [..._cache[5] || (_cache[5] = [
                  createBaseVNode("td", {
                    colspan: "5",
                    class: "px-6 py-12 text-center text-slate-400 font-medium"
                  }, " No recent activity records available. ", -1)
                ])])) : createCommentVNode("", true)
              ])
            ])
          ])
        ])
      ]);
    };
  }
});
const AnalyticsPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e2f88fd4"]]);
export {
  AnalyticsPage as default
};
