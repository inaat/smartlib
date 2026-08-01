import { d as defineComponent, r as ref, c as computed, E as watch, o as onMounted, a as createElementBlock, b as createBaseVNode, f as createVNode, u as unref, i as createTextVNode, t as toDisplayString, F as Fragment, k as renderList, e as createStaticVNode, q as normalizeStyle, n as normalizeClass, w as withCtx, g as resolveComponent, L as studentAPI, j as createCommentVNode, l as openBlock } from "./main-D4odWxzi.js";
import { C as Calendar } from "./calendar-lJfe3rfu.js";
import { Z as Zap } from "./zap-RZ_B5mGE.js";
import { C as Clock } from "./clock-DbxW0WRH.js";
import { C as CalendarCheck } from "./calendar-check-wtvTw430.js";
import { C as ChevronLeft } from "./chevron-left-CFNqWwp3.js";
import { C as ChevronRight } from "./chevron-right-C6CYt5q_.js";
import { R as RefreshCw } from "./refresh-cw-BuoaK0_N.js";
import { F as FileText } from "./file-text-CXBRSF__.js";
import { A as Armchair } from "./armchair-DKdV929b.js";
import { n as normalizeDates, c as constructFrom } from "./en-US-CtEcOBul.js";
import { c as constructNow } from "./constructNow-CQ6Py-t8.js";
import { s as startOfDay, f as format } from "./format-CerZa7QB.js";
import { p as parseISO } from "./parseISO-CXjizkW6.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
/* empty css               */
import "./createLucideIcon-BgnXjtcZ.js";
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
const _hoisted_1 = { class: "space-y-6 pb-12 font-outfit" };
const _hoisted_2 = { class: "grid grid-cols-1 md:grid-cols-3 gap-6" };
const _hoisted_3 = { class: "bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 hover-lift flex items-center space-x-5 text-left relative overflow-hidden group" };
const _hoisted_4 = { class: "absolute -right-4 -top-4 text-slate-50 opacity-60 group-hover:scale-115 transition-transform duration-500 pointer-events-none" };
const _hoisted_5 = { class: "p-3 bg-emerald-50/65 border border-emerald-100/50 rounded-xl text-emerald-600 relative z-10" };
const _hoisted_6 = { class: "relative z-10" };
const _hoisted_7 = { class: "text-3xl font-bold text-slate-800 leading-none" };
const _hoisted_8 = { class: "bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 hover-lift flex items-center space-x-5 text-left relative overflow-hidden group" };
const _hoisted_9 = { class: "absolute -right-4 -top-4 text-slate-50 opacity-60 group-hover:scale-115 transition-transform duration-500 pointer-events-none" };
const _hoisted_10 = { class: "p-3 bg-orange-50/65 border border-orange-100/50 rounded-xl text-orange-600 relative z-10" };
const _hoisted_11 = { class: "relative z-10" };
const _hoisted_12 = { class: "text-3xl font-bold text-slate-800 leading-none" };
const _hoisted_13 = { class: "bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 hover-lift flex items-center space-x-5 text-left relative overflow-hidden group" };
const _hoisted_14 = { class: "absolute -right-4 -top-4 text-slate-50 opacity-60 group-hover:scale-115 transition-transform duration-500 pointer-events-none" };
const _hoisted_15 = { class: "p-3 bg-purple-50/65 border border-purple-100/50 rounded-xl text-purple-600 relative z-10" };
const _hoisted_16 = { class: "relative z-10" };
const _hoisted_17 = { class: "text-3xl font-bold text-slate-800 leading-none" };
const _hoisted_18 = { class: "grid grid-cols-1 xl:grid-cols-[360px_1fr] gap-6 items-start" };
const _hoisted_19 = { class: "bg-white rounded-2xl border border-slate-100 shadow-sm p-6 space-y-6 text-left" };
const _hoisted_20 = { class: "flex items-center justify-between" };
const _hoisted_21 = { class: "flex items-center space-x-2" };
const _hoisted_22 = { class: "text-base font-bold text-slate-800" };
const _hoisted_23 = { class: "flex items-center space-x-1" };
const _hoisted_24 = { class: "grid grid-cols-7 text-center" };
const _hoisted_25 = {
  key: 0,
  class: "flex justify-center py-8"
};
const _hoisted_26 = {
  key: 1,
  class: "grid grid-cols-7 gap-y-1.5 text-center"
};
const _hoisted_27 = ["title"];
const _hoisted_28 = {
  key: 0,
  class: "absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-emerald-500 border border-white"
};
const _hoisted_29 = { class: "border-t border-slate-100 pt-5 space-y-4" };
const _hoisted_30 = { class: "flex items-center justify-between text-xs font-medium" };
const _hoisted_31 = { class: "font-semibold text-slate-800" };
const _hoisted_32 = { class: "flex items-center justify-between text-xs font-bold" };
const _hoisted_33 = { class: "font-semibold text-emerald-600" };
const _hoisted_34 = { class: "h-1.5 bg-slate-100 rounded-full overflow-hidden" };
const _hoisted_35 = { class: "bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden" };
const _hoisted_36 = { class: "px-6 py-5 border-b border-slate-100 flex items-center justify-between gap-4 bg-slate-50/30" };
const _hoisted_37 = {
  key: 0,
  class: "p-24 flex flex-col items-center justify-center space-y-3"
};
const _hoisted_38 = {
  key: 1,
  class: "p-16 text-center"
};
const _hoisted_39 = { class: "w-16 h-16 bg-slate-50 border border-slate-200 rounded-full flex items-center justify-center mx-auto mb-4 text-slate-400 shadow-inner" };
const _hoisted_40 = {
  key: 2,
  class: "overflow-x-auto"
};
const _hoisted_41 = { class: "w-full text-left" };
const _hoisted_42 = { class: "divide-y divide-slate-50" };
const _hoisted_43 = { class: "px-6 py-4 whitespace-nowrap" };
const _hoisted_44 = { class: "flex items-center space-x-3" };
const _hoisted_45 = { class: "w-9 h-9 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-600 font-bold text-xs group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-500 transition-all duration-300" };
const _hoisted_46 = { class: "text-left" };
const _hoisted_47 = { class: "text-xs font-semibold text-slate-800 leading-snug" };
const _hoisted_48 = { class: "text-[9px] text-slate-400 font-semibold uppercase mt-0.5 leading-none" };
const _hoisted_49 = { class: "px-6 py-4 text-left" };
const _hoisted_50 = { class: "text-xs font-semibold text-slate-700" };
const _hoisted_51 = { class: "px-6 py-4" };
const _hoisted_52 = { class: "flex items-center text-[11px] font-semibold text-emerald-600 bg-emerald-50/60 border border-emerald-100/50 px-2.5 py-1 rounded-lg w-fit" };
const _hoisted_53 = { class: "px-6 py-4" };
const _hoisted_54 = {
  key: 0,
  class: "flex items-center text-[11px] font-semibold text-red-500 bg-red-50/60 border border-red-100/50 px-2.5 py-1 rounded-lg w-fit"
};
const _hoisted_55 = {
  key: 1,
  class: "flex items-center text-[9px] font-semibold uppercase tracking-widest text-blue-600 bg-blue-50/50 border border-blue-100/30 px-2.5 py-1 rounded-lg w-fit animate-pulse"
};
const _hoisted_56 = { class: "px-6 py-4 text-center" };
const _hoisted_57 = { class: "text-xs font-bold text-slate-700" };
const _hoisted_58 = { class: "px-6 py-4 text-right" };
const _hoisted_59 = { class: "px-6 py-4 bg-slate-50/30 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-[10px] font-semibold text-slate-400 uppercase tracking-widest" };
const _hoisted_60 = { class: "flex items-center space-x-1.5" };
const _hoisted_61 = ["disabled"];
const _hoisted_62 = ["onClick"];
const _hoisted_63 = ["disabled"];
const pageSize = 6;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "AttendancePage",
  setup(__props) {
    const loading = ref(true);
    const calendarLoading = ref(false);
    const attendance = ref([]);
    const stats = ref({});
    const currentPage = ref(1);
    const totalPages = computed(() => {
      if (attendance.value.length === 0) return 1;
      return Math.ceil(attendance.value.length / pageSize);
    });
    const paginatedAttendance = computed(() => {
      const start = (currentPage.value - 1) * pageSize;
      return attendance.value.slice(start, start + pageSize);
    });
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
        attendance.value = response.data || [];
        currentPage.value = 1;
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
            createBaseVNode("div", _hoisted_4, [
              createVNode(unref(Calendar), { class: "w-20 h-20 stroke-1" })
            ]),
            createBaseVNode("div", _hoisted_5, [
              createVNode(unref(Calendar), { class: "w-5.5 h-5.5" })
            ]),
            createBaseVNode("div", _hoisted_6, [
              _cache[3] || (_cache[3] = createBaseVNode("p", { class: "text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none mb-2" }, "This Month", -1)),
              createBaseVNode("p", _hoisted_7, [
                createTextVNode(toDisplayString(stats.value.attendance_this_month || 0) + " ", 1),
                _cache[2] || (_cache[2] = createBaseVNode("span", { class: "text-xs font-semibold text-slate-400 ml-1 uppercase tracking-wide" }, "Days", -1))
              ])
            ])
          ]),
          createBaseVNode("div", _hoisted_8, [
            createBaseVNode("div", _hoisted_9, [
              createVNode(unref(Zap), { class: "w-20 h-20 stroke-1" })
            ]),
            createBaseVNode("div", _hoisted_10, [
              createVNode(unref(Zap), { class: "w-5.5 h-5.5" })
            ]),
            createBaseVNode("div", _hoisted_11, [
              _cache[5] || (_cache[5] = createBaseVNode("p", { class: "text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none mb-2" }, "Current Streak", -1)),
              createBaseVNode("p", _hoisted_12, [
                createTextVNode(toDisplayString(stats.value.current_streak || 0) + " ", 1),
                _cache[4] || (_cache[4] = createBaseVNode("span", { class: "text-xs font-semibold text-slate-400 ml-1 uppercase tracking-wide" }, "Days", -1))
              ])
            ])
          ]),
          createBaseVNode("div", _hoisted_13, [
            createBaseVNode("div", _hoisted_14, [
              createVNode(unref(Clock), { class: "w-20 h-20 stroke-1" })
            ]),
            createBaseVNode("div", _hoisted_15, [
              createVNode(unref(Clock), { class: "w-5.5 h-5.5" })
            ]),
            createBaseVNode("div", _hoisted_16, [
              _cache[7] || (_cache[7] = createBaseVNode("p", { class: "text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none mb-2" }, "Total Hours", -1)),
              createBaseVNode("p", _hoisted_17, [
                createTextVNode(toDisplayString(stats.value.total_hours || 0) + " ", 1),
                _cache[6] || (_cache[6] = createBaseVNode("span", { class: "text-xs font-semibold text-slate-400 ml-1 uppercase tracking-wide" }, "Hours", -1))
              ])
            ])
          ])
        ]),
        createBaseVNode("div", _hoisted_18, [
          createBaseVNode("div", _hoisted_19, [
            createBaseVNode("div", _hoisted_20, [
              createBaseVNode("div", _hoisted_21, [
                createVNode(unref(CalendarCheck), { class: "w-5 h-5 text-blue-500" }),
                createBaseVNode("span", _hoisted_22, toDisplayString(calendarTitle.value), 1)
              ]),
              createBaseVNode("div", _hoisted_23, [
                createBaseVNode("button", {
                  onClick: prevMonth,
                  class: "w-8 h-8 flex items-center justify-center rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-200/50 text-slate-400 hover:text-slate-700 transition-all active:scale-95"
                }, [
                  createVNode(unref(ChevronLeft), { class: "w-4 h-4" })
                ]),
                createBaseVNode("button", {
                  onClick: nextMonth,
                  class: "w-8 h-8 flex items-center justify-center rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-200/50 text-slate-400 hover:text-slate-700 transition-all active:scale-95"
                }, [
                  createVNode(unref(ChevronRight), { class: "w-4 h-4" })
                ])
              ])
            ]),
            createBaseVNode("div", _hoisted_24, [
              (openBlock(), createElementBlock(Fragment, null, renderList(["S", "M", "T", "W", "T", "F", "S"], (d) => {
                return createBaseVNode("div", {
                  key: d + Math.random(),
                  class: "text-[10px] font-semibold text-slate-400 uppercase tracking-widest py-1"
                }, toDisplayString(d), 1);
              }), 64))
            ]),
            calendarLoading.value ? (openBlock(), createElementBlock("div", _hoisted_25, [..._cache[8] || (_cache[8] = [
              createBaseVNode("div", { class: "w-8 h-8 border-2 border-blue-600 border-t-transparent rounded-full animate-spin" }, null, -1)
            ])])) : (openBlock(), createElementBlock("div", _hoisted_26, [
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
                    "mx-auto flex items-center justify-center rounded-full w-9 h-9 text-xs font-semibold transition-all relative select-none",
                    isToday$1(dateStr) ? "bg-blue-600 text-white shadow-md shadow-blue-500/10 scale-105" : info.attended ? "bg-emerald-50 text-emerald-700 border border-emerald-100/50 hover:bg-emerald-100 hover:border-emerald-200" : "text-slate-300"
                  ])
                }, [
                  createTextVNode(toDisplayString(parseInt(dateStr.split("-")[2])) + " ", 1),
                  info.attended && !isToday$1(dateStr) ? (openBlock(), createElementBlock("span", _hoisted_28)) : createCommentVNode("", true)
                ], 10, _hoisted_27);
              }), 128))
            ])),
            createBaseVNode("div", _hoisted_29, [
              createBaseVNode("div", _hoisted_30, [
                _cache[9] || (_cache[9] = createBaseVNode("span", { class: "text-slate-400 uppercase tracking-wide" }, "Days attended", -1)),
                createBaseVNode("span", _hoisted_31, toDisplayString(calendarData.value.total_attended) + " days", 1)
              ]),
              createBaseVNode("div", _hoisted_32, [
                _cache[10] || (_cache[10] = createBaseVNode("span", { class: "text-slate-400 uppercase tracking-wide" }, "Attendance rate", -1)),
                createBaseVNode("span", _hoisted_33, toDisplayString(calendarData.value.total_days > 0 ? Math.round(calendarData.value.total_attended / calendarData.value.total_days * 100) : 0) + "% ", 1)
              ]),
              createBaseVNode("div", _hoisted_34, [
                createBaseVNode("div", {
                  class: "h-full bg-emerald-500 rounded-full transition-all duration-700",
                  style: normalizeStyle({ width: calendarData.value.total_days > 0 ? `${Math.round(calendarData.value.total_attended / calendarData.value.total_days * 100)}%` : "0%" })
                }, null, 4)
              ]),
              _cache[11] || (_cache[11] = createStaticVNode('<div class="flex flex-wrap gap-x-4 gap-y-1.5 pt-1" data-v-d9700a7d><div class="flex items-center space-x-1.5 text-[10px] font-bold text-slate-400 uppercase tracking-wide" data-v-d9700a7d><div class="w-2.5 h-2.5 rounded-full bg-emerald-50 border border-emerald-300" data-v-d9700a7d></div><span data-v-d9700a7d>Attended</span></div><div class="flex items-center space-x-1.5 text-[10px] font-bold text-slate-400 uppercase tracking-wide" data-v-d9700a7d><div class="w-2.5 h-2.5 rounded-full bg-blue-600" data-v-d9700a7d></div><span data-v-d9700a7d>Today</span></div><div class="flex items-center space-x-1.5 text-[10px] font-bold text-slate-400 uppercase tracking-wide" data-v-d9700a7d><div class="w-2.5 h-2.5 rounded-full bg-white border border-slate-200" data-v-d9700a7d></div><span data-v-d9700a7d>Absent</span></div></div>', 1))
            ])
          ]),
          createBaseVNode("div", _hoisted_35, [
            createBaseVNode("div", _hoisted_36, [
              _cache[12] || (_cache[12] = createBaseVNode("div", { class: "text-left" }, [
                createBaseVNode("h2", { class: "text-base font-bold text-slate-800" }, "Attendance Logs"),
                createBaseVNode("p", { class: "text-xs text-slate-400 mt-0.5" }, "A detailed record of your library visits (6 items per page)")
              ], -1)),
              createBaseVNode("button", {
                onClick: fetchAttendance,
                class: "p-2.5 hover:bg-slate-50 rounded-xl transition-all text-slate-500 hover:text-blue-600 border border-slate-200/50 shadow-sm active:scale-98"
              }, [
                createVNode(unref(RefreshCw), {
                  class: normalizeClass(["w-4 h-4", loading.value ? "animate-spin" : ""])
                }, null, 8, ["class"])
              ])
            ]),
            loading.value ? (openBlock(), createElementBlock("div", _hoisted_37, [..._cache[13] || (_cache[13] = [
              createBaseVNode("div", { class: "w-9 h-9 border-2 border-blue-600 border-t-transparent rounded-full animate-spin" }, null, -1),
              createBaseVNode("p", { class: "text-slate-400 font-semibold animate-pulse uppercase tracking-wider text-[10px]" }, "Loading logs...", -1)
            ])])) : attendance.value.length === 0 ? (openBlock(), createElementBlock("div", _hoisted_38, [
              createBaseVNode("div", _hoisted_39, [
                createVNode(unref(FileText), { class: "w-7 h-7" })
              ]),
              _cache[15] || (_cache[15] = createBaseVNode("h3", { class: "text-base font-semibold text-slate-800 mb-1" }, "No Attendance Yet", -1)),
              _cache[16] || (_cache[16] = createBaseVNode("p", { class: "text-xs text-slate-400 max-w-xs mx-auto leading-relaxed" }, "Start by booking a seat and checking in. Your attendance will automatically appear here.", -1)),
              createVNode(_component_router_link, {
                to: "/student/libraries",
                class: "mt-6 inline-flex items-center space-x-1.5 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl font-semibold shadow-md shadow-blue-500/10 active:scale-98 transition-all uppercase tracking-wider text-[10px]"
              }, {
                default: withCtx(() => [
                  createVNode(unref(Armchair), { class: "w-4 h-4" }),
                  _cache[14] || (_cache[14] = createBaseVNode("span", null, "Book Your First Seat", -1))
                ]),
                _: 1
              })
            ])) : (openBlock(), createElementBlock("div", _hoisted_40, [
              createBaseVNode("table", _hoisted_41, [
                _cache[17] || (_cache[17] = createBaseVNode("thead", null, [
                  createBaseVNode("tr", { class: "bg-slate-50/50 border-b border-slate-100 text-[10px] uppercase font-semibold tracking-wider text-slate-400" }, [
                    createBaseVNode("th", { class: "px-6 py-3.5" }, "Date"),
                    createBaseVNode("th", { class: "px-6 py-3.5" }, "Library"),
                    createBaseVNode("th", { class: "px-6 py-3.5" }, "Check In"),
                    createBaseVNode("th", { class: "px-6 py-3.5" }, "Check Out"),
                    createBaseVNode("th", { class: "px-6 py-3.5 text-center" }, "Duration"),
                    createBaseVNode("th", { class: "px-6 py-3.5 text-right" }, "Method")
                  ])
                ], -1)),
                createBaseVNode("tbody", _hoisted_42, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(paginatedAttendance.value, (log) => {
                    return openBlock(), createElementBlock("tr", {
                      key: log.id,
                      class: "hover:bg-slate-50/30 transition-colors group"
                    }, [
                      createBaseVNode("td", _hoisted_43, [
                        createBaseVNode("div", _hoisted_44, [
                          createBaseVNode("div", _hoisted_45, toDisplayString(getDay(log.date)), 1),
                          createBaseVNode("div", _hoisted_46, [
                            createBaseVNode("div", _hoisted_47, toDisplayString(formatDate(log.date)), 1),
                            createBaseVNode("div", _hoisted_48, toDisplayString(getDayName(log.date)), 1)
                          ])
                        ])
                      ]),
                      createBaseVNode("td", _hoisted_49, [
                        createBaseVNode("div", _hoisted_50, toDisplayString(log.library?.name || "N/A"), 1)
                      ]),
                      createBaseVNode("td", _hoisted_51, [
                        createBaseVNode("div", _hoisted_52, [
                          createVNode(unref(Clock), { class: "w-3 h-3 mr-1.5" }),
                          createTextVNode(" " + toDisplayString(formatTime(log.check_in_time)), 1)
                        ])
                      ]),
                      createBaseVNode("td", _hoisted_53, [
                        log.check_out_time ? (openBlock(), createElementBlock("div", _hoisted_54, [
                          createVNode(unref(Clock), { class: "w-3 h-3 mr-1.5" }),
                          createTextVNode(" " + toDisplayString(formatTime(log.check_out_time)), 1)
                        ])) : (openBlock(), createElementBlock("div", _hoisted_55, " Present Now "))
                      ]),
                      createBaseVNode("td", _hoisted_56, [
                        createBaseVNode("div", _hoisted_57, toDisplayString(log.total_minutes ? formatDuration(log.total_minutes) : "--"), 1)
                      ]),
                      createBaseVNode("td", _hoisted_58, [
                        createBaseVNode("span", {
                          class: normalizeClass([
                            "text-[9px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded border",
                            log.marked_manually ? "bg-orange-50 text-orange-600 border-orange-100" : "bg-slate-50 text-slate-400 border-slate-100"
                          ])
                        }, toDisplayString(log.marked_manually ? "Manual" : "Auto"), 3)
                      ])
                    ]);
                  }), 128))
                ])
              ]),
              createBaseVNode("div", _hoisted_59, [
                createBaseVNode("div", null, "Showing " + toDisplayString((currentPage.value - 1) * pageSize + 1) + " to " + toDisplayString(Math.min(currentPage.value * pageSize, attendance.value.length)) + " of " + toDisplayString(attendance.value.length) + " entries", 1),
                createBaseVNode("div", _hoisted_60, [
                  createBaseVNode("button", {
                    onClick: _cache[0] || (_cache[0] = ($event) => currentPage.value--),
                    disabled: currentPage.value === 1,
                    class: "px-3 py-1.5 border border-slate-200 bg-white rounded-xl text-slate-600 font-bold hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition-all text-xs cursor-pointer shadow-2xs"
                  }, " Previous ", 8, _hoisted_61),
                  (openBlock(true), createElementBlock(Fragment, null, renderList(totalPages.value, (page) => {
                    return openBlock(), createElementBlock("button", {
                      key: page,
                      onClick: ($event) => currentPage.value = page,
                      class: normalizeClass([
                        "w-8 h-8 rounded-xl text-xs font-bold transition-all cursor-pointer shadow-2xs",
                        currentPage.value === page ? "bg-blue-600 text-white shadow-sm" : "border border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
                      ])
                    }, toDisplayString(page), 11, _hoisted_62);
                  }), 128)),
                  createBaseVNode("button", {
                    onClick: _cache[1] || (_cache[1] = ($event) => currentPage.value++),
                    disabled: currentPage.value === totalPages.value,
                    class: "px-3 py-1.5 border border-slate-200 bg-white rounded-xl text-slate-600 font-bold hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition-all text-xs cursor-pointer shadow-2xs"
                  }, " Next ", 8, _hoisted_63)
                ])
              ])
            ]))
          ])
        ])
      ]);
    };
  }
});
const AttendancePage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-d9700a7d"]]);
export {
  AttendancePage as default
};
