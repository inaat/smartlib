import { d as defineComponent, r as ref, E as computed, H as watch, o as onMounted, c as createElementBlock, b as createBaseVNode, f as createVNode, u as unref, j as createTextVNode, t as toDisplayString, F as Fragment, h as renderList, e as createStaticVNode, I as normalizeStyle, n as normalizeClass, w as withCtx, g as resolveComponent, J as studentAPI, m as createCommentVNode, i as openBlock } from "./main-TSJawxZI.js";
import { C as CalendarCheck } from "./calendar-check-DvPjmZcK.js";
import { C as Calendar } from "./calendar-13efgUbN.js";
import { Z as Zap } from "./zap-Bcj9QZE_.js";
import { C as Clock } from "./clock-DECkYJ-Y.js";
import { C as ChevronLeft } from "./chevron-left-U55DRxKz.js";
import { C as ChevronRight } from "./chevron-right-BIQ-JJd8.js";
import { R as RefreshCw } from "./refresh-cw-8WNefZ9w.js";
import { c as createLucideIcon } from "./createLucideIcon-Dj92g2Ex.js";
import { A as Armchair } from "./armchair-C7l_Yqdj.js";
import { n as normalizeDates, c as constructFrom } from "./en-US-CtEcOBul.js";
import { c as constructNow } from "./constructNow-CQ6Py-t8.js";
import { s as startOfDay, f as format } from "./format-CerZa7QB.js";
import { p as parseISO } from "./parseISO-CXjizkW6.js";
/* empty css               */
const FileText = createLucideIcon("file-text", [
  [
    "path",
    {
      d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
      key: "1oefj6"
    }
  ],
  ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }],
  ["path", { d: "M10 9H8", key: "b1mrlr" }],
  ["path", { d: "M16 13H8", key: "t4e002" }],
  ["path", { d: "M16 17H8", key: "z1uh3a" }]
]);
function isSameDay(laterDate, earlierDate, options) {
  const [dateLeft_, dateRight_] = normalizeDates(
    options?.in,
    laterDate,
    earlierDate
  );
  return +startOfDay(dateLeft_) === +startOfDay(dateRight_);
}
function isToday(date, options) {
  return isSameDay(
    constructFrom(date, date),
    constructNow(date)
  );
}
const _hoisted_1 = { class: "space-y-8 pb-12" };
const _hoisted_2 = { class: "grid grid-cols-1 md:grid-cols-4 gap-6" };
const _hoisted_3 = { class: "md:col-span-1 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-8 text-white shadow-xl flex flex-col justify-between overflow-hidden relative" };
const _hoisted_4 = { class: "relative z-10" };
const _hoisted_5 = { class: "bg-white rounded-3xl p-8 border border-gray-100 shadow-sm flex items-center space-x-6" };
const _hoisted_6 = { class: "p-4 bg-green-50 rounded-2xl text-green-600" };
const _hoisted_7 = { class: "text-3xl font-black text-gray-900" };
const _hoisted_8 = { class: "bg-white rounded-3xl p-8 border border-gray-100 shadow-sm flex items-center space-x-6" };
const _hoisted_9 = { class: "p-4 bg-orange-50 rounded-2xl text-orange-600" };
const _hoisted_10 = { class: "text-3xl font-black text-gray-900" };
const _hoisted_11 = { class: "bg-white rounded-3xl p-8 border border-gray-100 shadow-sm flex items-center space-x-6" };
const _hoisted_12 = { class: "p-4 bg-purple-50 rounded-2xl text-purple-600" };
const _hoisted_13 = { class: "text-3xl font-black text-gray-900" };
const _hoisted_14 = { class: "grid grid-cols-1 xl:grid-cols-[360px_1fr] gap-6 items-start" };
const _hoisted_15 = { class: "bg-white rounded-3xl border border-gray-100 shadow-sm p-8 space-y-6" };
const _hoisted_16 = { class: "flex items-center justify-between" };
const _hoisted_17 = { class: "flex items-center space-x-2" };
const _hoisted_18 = { class: "text-lg font-black text-gray-900" };
const _hoisted_19 = { class: "flex items-center space-x-1" };
const _hoisted_20 = { class: "grid grid-cols-7 text-center" };
const _hoisted_21 = {
  key: 0,
  class: "flex justify-center py-8"
};
const _hoisted_22 = {
  key: 1,
  class: "grid grid-cols-7 gap-y-1.5 text-center"
};
const _hoisted_23 = ["title"];
const _hoisted_24 = {
  key: 0,
  class: "absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-emerald-500"
};
const _hoisted_25 = { class: "border-t border-gray-50 pt-5 space-y-3" };
const _hoisted_26 = { class: "flex items-center justify-between text-sm" };
const _hoisted_27 = { class: "font-black text-gray-900" };
const _hoisted_28 = { class: "flex items-center justify-between text-sm" };
const _hoisted_29 = { class: "font-black text-emerald-600" };
const _hoisted_30 = { class: "h-2 bg-gray-100 rounded-full overflow-hidden" };
const _hoisted_31 = { class: "bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden" };
const _hoisted_32 = { class: "px-8 py-6 border-b border-gray-50 flex flex-col md:flex-row md:items-center justify-between gap-4" };
const _hoisted_33 = {
  key: 0,
  class: "p-20 flex flex-col items-center justify-center space-y-4"
};
const _hoisted_34 = {
  key: 1,
  class: "p-20 text-center"
};
const _hoisted_35 = { class: "w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6 text-gray-200" };
const _hoisted_36 = {
  key: 2,
  class: "overflow-x-auto"
};
const _hoisted_37 = { class: "w-full text-left" };
const _hoisted_38 = { class: "divide-y divide-gray-50" };
const _hoisted_39 = { class: "px-8 py-5 whitespace-nowrap" };
const _hoisted_40 = { class: "flex items-center space-x-3" };
const _hoisted_41 = { class: "w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 font-bold text-sm" };
const _hoisted_42 = { class: "text-sm font-bold text-gray-900" };
const _hoisted_43 = { class: "text-[10px] text-gray-400 uppercase font-bold" };
const _hoisted_44 = { class: "px-8 py-5" };
const _hoisted_45 = { class: "text-sm font-bold text-gray-700" };
const _hoisted_46 = { class: "px-8 py-5" };
const _hoisted_47 = { class: "flex items-center text-xs font-bold text-green-600 bg-green-50 px-3 py-1.5 rounded-lg w-fit" };
const _hoisted_48 = { class: "px-8 py-5" };
const _hoisted_49 = {
  key: 0,
  class: "flex items-center text-xs font-bold text-red-600 bg-red-50 px-3 py-1.5 rounded-lg w-fit"
};
const _hoisted_50 = {
  key: 1,
  class: "flex items-center text-[10px] font-black uppercase tracking-widest text-blue-600 animate-pulse"
};
const _hoisted_51 = { class: "px-8 py-5 text-center" };
const _hoisted_52 = { class: "text-sm font-black text-gray-900" };
const _hoisted_53 = { class: "px-8 py-5 text-right" };
const _hoisted_54 = { class: "px-8 py-6 bg-gray-50/30 border-t border-gray-50 flex items-center justify-between text-xs font-bold text-gray-500 uppercase tracking-widest" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "AttendancePage",
  setup(__props) {
    const loading = ref(true);
    const calendarLoading = ref(false);
    const attendance = ref([]);
    const stats = ref({});
    const calViewYear = ref((/* @__PURE__ */ new Date()).getFullYear());
    const calViewMonth = ref((/* @__PURE__ */ new Date()).getMonth() + 1);
    const calendarData = ref({ year: 0, month: 0, days: {}, total_attended: 0, total_days: 0 });
    const MONTH_NAMES = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const calendarTitle = computed(() => `${MONTH_NAMES[calViewMonth.value - 1]} ${calViewYear.value}`);
    const calendarOffset = computed(() => new Date(calViewYear.value, calViewMonth.value - 1, 1).getDay());
    const prevMonth = () => {
      if (calViewMonth.value === 1) {
        calViewMonth.value = 12;
        calViewYear.value--;
      } else calViewMonth.value--;
    };
    const nextMonth = () => {
      if (calViewMonth.value === 12) {
        calViewMonth.value = 1;
        calViewYear.value++;
      } else calViewMonth.value++;
    };
    const fetchCalendar = async () => {
      calendarLoading.value = true;
      try {
        calendarData.value = await studentAPI.getAttendanceCalendar(calViewYear.value, calViewMonth.value);
      } catch (e) {
        console.error(e);
      } finally {
        calendarLoading.value = false;
      }
    };
    watch([calViewYear, calViewMonth], fetchCalendar);
    const isToday$1 = (dateStr) => {
      try {
        return isToday(parseISO(dateStr));
      } catch {
        return false;
      }
    };
    const fetchAttendance = async () => {
      loading.value = true;
      try {
        const response = await studentAPI.getAttendance();
        attendance.value = response.data;
        const statsResponse = await studentAPI.getAttendanceStats();
        stats.value = statsResponse;
      } catch (error) {
        console.error("Failed to fetch attendance:", error);
      } finally {
        loading.value = false;
      }
    };
    const formatDate = (date) => format(parseISO(date), "MMM dd, yyyy");
    const getDay = (date) => format(parseISO(date), "dd");
    const getDayName = (date) => format(parseISO(date), "EEEE");
    const formatTime = (time) => {
      if (!time) return "";
      if (time.includes("T")) return format(parseISO(time), "hh:mm a");
      return format(parseISO(`1970-01-01T${time}`), "hh:mm a");
    };
    const formatDuration = (minutes) => {
      const h = Math.floor(minutes / 60);
      const m = minutes % 60;
      return h > 0 ? `${h}h ${m}m` : `${m}m`;
    };
    onMounted(() => {
      fetchAttendance();
      fetchCalendar();
    });
    return (_ctx, _cache) => {
      const _component_router_link = resolveComponent("router-link");
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("div", _hoisted_3, [
            _cache[2] || (_cache[2] = createBaseVNode("div", { class: "absolute -right-4 -top-4 w-24 h-24 bg-white/10 rounded-full blur-2xl" }, null, -1)),
            createBaseVNode("div", _hoisted_4, [
              createVNode(unref(CalendarCheck), { class: "w-10 h-10 mb-4 text-blue-100" }),
              _cache[0] || (_cache[0] = createBaseVNode("h1", { class: "text-3xl font-black mb-1" }, "Attendance", -1)),
              _cache[1] || (_cache[1] = createBaseVNode("p", { class: "text-blue-100/60 text-xs font-bold uppercase tracking-widest" }, "Your Learning Journey", -1))
            ])
          ]),
          createBaseVNode("div", _hoisted_5, [
            createBaseVNode("div", _hoisted_6, [
              createVNode(unref(Calendar), { class: "w-8 h-8" })
            ]),
            createBaseVNode("div", null, [
              _cache[4] || (_cache[4] = createBaseVNode("p", { class: "text-xs font-bold text-gray-400 uppercase tracking-widest mb-1" }, "This Month", -1)),
              createBaseVNode("p", _hoisted_7, [
                createTextVNode(toDisplayString(stats.value.attendance_this_month || 0) + " ", 1),
                _cache[3] || (_cache[3] = createBaseVNode("span", { class: "text-sm font-medium text-gray-400" }, "Days", -1))
              ])
            ])
          ]),
          createBaseVNode("div", _hoisted_8, [
            createBaseVNode("div", _hoisted_9, [
              createVNode(unref(Zap), { class: "w-8 h-8" })
            ]),
            createBaseVNode("div", null, [
              _cache[6] || (_cache[6] = createBaseVNode("p", { class: "text-xs font-bold text-gray-400 uppercase tracking-widest mb-1" }, "Current Streak", -1)),
              createBaseVNode("p", _hoisted_10, [
                createTextVNode(toDisplayString(stats.value.current_streak || 0) + " ", 1),
                _cache[5] || (_cache[5] = createBaseVNode("span", { class: "text-sm font-medium text-gray-400" }, "Days", -1))
              ])
            ])
          ]),
          createBaseVNode("div", _hoisted_11, [
            createBaseVNode("div", _hoisted_12, [
              createVNode(unref(Clock), { class: "w-8 h-8" })
            ]),
            createBaseVNode("div", null, [
              _cache[8] || (_cache[8] = createBaseVNode("p", { class: "text-xs font-bold text-gray-400 uppercase tracking-widest mb-1" }, "Total Hours", -1)),
              createBaseVNode("p", _hoisted_13, [
                createTextVNode(toDisplayString(stats.value.total_hours || 0) + " ", 1),
                _cache[7] || (_cache[7] = createBaseVNode("span", { class: "text-sm font-medium text-gray-400" }, "Hours", -1))
              ])
            ])
          ])
        ]),
        createBaseVNode("div", _hoisted_14, [
          createBaseVNode("div", _hoisted_15, [
            createBaseVNode("div", _hoisted_16, [
              createBaseVNode("div", _hoisted_17, [
                createVNode(unref(CalendarCheck), { class: "w-5 h-5 text-blue-500" }),
                createBaseVNode("span", _hoisted_18, toDisplayString(calendarTitle.value), 1)
              ]),
              createBaseVNode("div", _hoisted_19, [
                createBaseVNode("button", {
                  onClick: prevMonth,
                  class: "w-8 h-8 flex items-center justify-center rounded-xl hover:bg-gray-100 text-gray-400 transition-colors"
                }, [
                  createVNode(unref(ChevronLeft), { class: "w-4 h-4" })
                ]),
                createBaseVNode("button", {
                  onClick: nextMonth,
                  class: "w-8 h-8 flex items-center justify-center rounded-xl hover:bg-gray-100 text-gray-400 transition-colors"
                }, [
                  createVNode(unref(ChevronRight), { class: "w-4 h-4" })
                ])
              ])
            ]),
            createBaseVNode("div", _hoisted_20, [
              (openBlock(), createElementBlock(Fragment, null, renderList(["S", "M", "T", "W", "T", "F", "S"], (d) => {
                return createBaseVNode("div", {
                  key: d + Math.random(),
                  class: "text-[10px] font-black text-gray-400 uppercase tracking-widest py-1"
                }, toDisplayString(d), 1);
              }), 64))
            ]),
            calendarLoading.value ? (openBlock(), createElementBlock("div", _hoisted_21, [..._cache[9] || (_cache[9] = [
              createBaseVNode("div", { class: "w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" }, null, -1)
            ])])) : (openBlock(), createElementBlock("div", _hoisted_22, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(calendarOffset.value, (n) => {
                return openBlock(), createElementBlock("div", {
                  key: "pad" + n
                });
              }), 128)),
              (openBlock(true), createElementBlock(Fragment, null, renderList(calendarData.value.days, (info, dateStr) => {
                return openBlock(), createElementBlock("div", {
                  key: dateStr,
                  title: info.attended ? `You attended · ${formatDuration(info.total_minutes)}` : "No attendance",
                  class: normalizeClass([
                    "mx-auto flex items-center justify-center rounded-full w-9 h-9 text-sm font-bold transition-all cursor-default relative select-none",
                    isToday$1(dateStr) ? "bg-blue-600 text-white shadow-lg shadow-blue-200 scale-105" : info.attended ? "bg-emerald-100 text-emerald-700 hover:bg-emerald-200" : "text-gray-300"
                  ])
                }, [
                  createTextVNode(toDisplayString(parseInt(dateStr.split("-")[2])) + " ", 1),
                  info.attended && !isToday$1(dateStr) ? (openBlock(), createElementBlock("span", _hoisted_24)) : createCommentVNode("", true)
                ], 10, _hoisted_23);
              }), 128))
            ])),
            createBaseVNode("div", _hoisted_25, [
              createBaseVNode("div", _hoisted_26, [
                _cache[10] || (_cache[10] = createBaseVNode("span", { class: "text-gray-500" }, "Days attended", -1)),
                createBaseVNode("span", _hoisted_27, toDisplayString(calendarData.value.total_attended) + " days", 1)
              ]),
              createBaseVNode("div", _hoisted_28, [
                _cache[11] || (_cache[11] = createBaseVNode("span", { class: "text-gray-500" }, "Attendance rate", -1)),
                createBaseVNode("span", _hoisted_29, toDisplayString(calendarData.value.total_days > 0 ? Math.round(calendarData.value.total_attended / calendarData.value.total_days * 100) : 0) + "% ", 1)
              ]),
              createBaseVNode("div", _hoisted_30, [
                createBaseVNode("div", {
                  class: "h-full bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full transition-all duration-700",
                  style: normalizeStyle({ width: calendarData.value.total_days > 0 ? `${Math.round(calendarData.value.total_attended / calendarData.value.total_days * 100)}%` : "0%" })
                }, null, 4)
              ]),
              _cache[12] || (_cache[12] = createStaticVNode('<div class="flex items-center space-x-4 pt-1"><div class="flex items-center space-x-1.5 text-xs text-gray-400"><div class="w-3 h-3 rounded-full bg-emerald-100 border border-emerald-300"></div><span>Attended</span></div><div class="flex items-center space-x-1.5 text-xs text-gray-400"><div class="w-3 h-3 rounded-full bg-blue-600"></div><span>Today</span></div><div class="flex items-center space-x-1.5 text-xs text-gray-400"><div class="w-3 h-3 rounded-full bg-gray-100 border border-gray-200"></div><span>Absent</span></div></div>', 1))
            ])
          ]),
          createBaseVNode("div", _hoisted_31, [
            createBaseVNode("div", _hoisted_32, [
              _cache[13] || (_cache[13] = createBaseVNode("div", null, [
                createBaseVNode("h2", { class: "text-xl font-bold text-gray-900" }, "Attendance Logs"),
                createBaseVNode("p", { class: "text-sm text-gray-500" }, "A detailed record of your library visits")
              ], -1)),
              createBaseVNode("button", {
                onClick: fetchAttendance,
                class: "p-2 hover:bg-gray-50 rounded-xl transition-all text-gray-500 hover:text-blue-600 border border-gray-100"
              }, [
                createVNode(unref(RefreshCw), {
                  class: normalizeClass(["w-5 h-5", loading.value ? "animate-spin" : ""])
                }, null, 8, ["class"])
              ])
            ]),
            loading.value ? (openBlock(), createElementBlock("div", _hoisted_33, [..._cache[14] || (_cache[14] = [
              createBaseVNode("div", { class: "w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" }, null, -1),
              createBaseVNode("p", { class: "text-gray-500 font-bold animate-pulse uppercase tracking-widest text-xs" }, "Loading logs...", -1)
            ])])) : attendance.value.length === 0 ? (openBlock(), createElementBlock("div", _hoisted_34, [
              createBaseVNode("div", _hoisted_35, [
                createVNode(unref(FileText), { class: "w-12 h-12" })
              ]),
              _cache[16] || (_cache[16] = createBaseVNode("h3", { class: "text-xl font-bold text-gray-900 mb-2" }, "No Attendance Yet", -1)),
              _cache[17] || (_cache[17] = createBaseVNode("p", { class: "text-gray-500 max-w-sm mx-auto" }, "Start by booking a seat and checking in at the library. Your attendance will be automatically marked here.", -1)),
              createVNode(_component_router_link, {
                to: "/student/libraries",
                class: "mt-8 inline-flex items-center space-x-2 bg-blue-600 text-white px-8 py-4 rounded-2xl font-black hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 uppercase tracking-wider text-xs"
              }, {
                default: withCtx(() => [
                  createVNode(unref(Armchair), { class: "w-4 h-4" }),
                  _cache[15] || (_cache[15] = createBaseVNode("span", null, "Book Your First Seat", -1))
                ]),
                _: 1
              })
            ])) : (openBlock(), createElementBlock("div", _hoisted_36, [
              createBaseVNode("table", _hoisted_37, [
                _cache[18] || (_cache[18] = createBaseVNode("thead", null, [
                  createBaseVNode("tr", { class: "bg-gray-50/50 text-[10px] uppercase font-black tracking-widest text-gray-400" }, [
                    createBaseVNode("th", { class: "px-8 py-4" }, "Date"),
                    createBaseVNode("th", { class: "px-8 py-4" }, "Library"),
                    createBaseVNode("th", { class: "px-8 py-4" }, "Check In"),
                    createBaseVNode("th", { class: "px-8 py-4" }, "Check Out"),
                    createBaseVNode("th", { class: "px-8 py-4 text-center" }, "Duration"),
                    createBaseVNode("th", { class: "px-8 py-4 text-right" }, "Method")
                  ])
                ], -1)),
                createBaseVNode("tbody", _hoisted_38, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(attendance.value, (log) => {
                    return openBlock(), createElementBlock("tr", {
                      key: log.id,
                      class: "hover:bg-blue-50/30 transition-colors group"
                    }, [
                      createBaseVNode("td", _hoisted_39, [
                        createBaseVNode("div", _hoisted_40, [
                          createBaseVNode("div", _hoisted_41, toDisplayString(getDay(log.date)), 1),
                          createBaseVNode("div", null, [
                            createBaseVNode("div", _hoisted_42, toDisplayString(formatDate(log.date)), 1),
                            createBaseVNode("div", _hoisted_43, toDisplayString(getDayName(log.date)), 1)
                          ])
                        ])
                      ]),
                      createBaseVNode("td", _hoisted_44, [
                        createBaseVNode("div", _hoisted_45, toDisplayString(log.library?.name || "N/A"), 1)
                      ]),
                      createBaseVNode("td", _hoisted_46, [
                        createBaseVNode("div", _hoisted_47, [
                          createVNode(unref(Clock), { class: "w-3 h-3 mr-2" }),
                          createTextVNode(" " + toDisplayString(formatTime(log.check_in_time)), 1)
                        ])
                      ]),
                      createBaseVNode("td", _hoisted_48, [
                        log.check_out_time ? (openBlock(), createElementBlock("div", _hoisted_49, [
                          createVNode(unref(Clock), { class: "w-3 h-3 mr-2" }),
                          createTextVNode(" " + toDisplayString(formatTime(log.check_out_time)), 1)
                        ])) : (openBlock(), createElementBlock("div", _hoisted_50, " Present Now "))
                      ]),
                      createBaseVNode("td", _hoisted_51, [
                        createBaseVNode("div", _hoisted_52, toDisplayString(log.total_minutes ? formatDuration(log.total_minutes) : "--"), 1)
                      ]),
                      createBaseVNode("td", _hoisted_53, [
                        createBaseVNode("span", {
                          class: normalizeClass([
                            "text-[9px] font-black uppercase tracking-tighter px-2 py-1 rounded-md border",
                            log.marked_manually ? "bg-orange-50 text-orange-600 border-orange-100" : "bg-gray-50 text-gray-400 border-gray-100"
                          ])
                        }, toDisplayString(log.marked_manually ? "Manual" : "Auto"), 3)
                      ])
                    ]);
                  }), 128))
                ])
              ]),
              createBaseVNode("div", _hoisted_54, [
                createBaseVNode("div", null, "Showing " + toDisplayString(attendance.value.length) + " records", 1)
              ])
            ]))
          ])
        ])
      ]);
    };
  }
});
export {
  _sfc_main as default
};
