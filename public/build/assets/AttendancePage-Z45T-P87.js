import { d as defineComponent, r as ref, a as computed, I as watch, o as onMounted, b as createElementBlock, e as createBaseVNode, g as createVNode, u as unref, j as createTextVNode, t as toDisplayString, C as Clock, F as Fragment, k as renderList, f as createStaticVNode, x as normalizeStyle, n as normalizeClass, R as RefreshCw, w as withCtx, h as resolveComponent, p as createCommentVNode, S as studentAPI, m as openBlock, _ as _export_sfc } from "./main-BeUqjoax.js";
import { C as Calendar } from "./calendar-C4MEAYqh.js";
import { Z as Zap } from "./zap-1J--HJED.js";
import { C as CalendarCheck } from "./calendar-check-CmMP1UVP.js";
import { C as ChevronLeft } from "./chevron-left-BTBU4JGM.js";
import { C as ChevronRight } from "./chevron-right-DeJ1LBg1.js";
import { F as FileText } from "./file-text-C-8QcjRK.js";
import { A as Armchair } from "./armchair-Ci3hmWMF.js";
import { n as normalizeDates, c as constructFrom } from "./normalizeDates-KHLYxtAK.js";
import { c as constructNow } from "./constructNow-g5Gk086P.js";
import { s as startOfDay, f as format } from "./format-DBvmWExF.js";
import { p as parseISO } from "./parseISO-L4DZC0_Z.js";
/* empty css               */
import "./en-US-Cfx__x1z.js";
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
const _hoisted_40 = { key: 2 };
const _hoisted_41 = { class: "hidden md:block overflow-x-auto" };
const _hoisted_42 = { class: "w-full text-left" };
const _hoisted_43 = { class: "divide-y divide-slate-50" };
const _hoisted_44 = { class: "px-6 py-4 whitespace-nowrap" };
const _hoisted_45 = { class: "flex items-center space-x-3" };
const _hoisted_46 = { class: "w-9 h-9 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-600 font-bold text-xs group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-500 transition-all duration-300" };
const _hoisted_47 = { class: "text-left" };
const _hoisted_48 = { class: "text-xs font-semibold text-slate-800 leading-snug" };
const _hoisted_49 = { class: "text-[9px] text-slate-400 font-semibold uppercase mt-0.5 leading-none" };
const _hoisted_50 = { class: "px-6 py-4 text-left" };
const _hoisted_51 = { class: "text-xs font-semibold text-slate-700" };
const _hoisted_52 = { class: "px-6 py-4" };
const _hoisted_53 = { class: "flex items-center text-[11px] font-semibold text-emerald-600 bg-emerald-50/60 border border-emerald-100/50 px-2.5 py-1 rounded-lg w-fit" };
const _hoisted_54 = { class: "px-6 py-4" };
const _hoisted_55 = {
  key: 0,
  class: "flex items-center text-[11px] font-semibold text-red-500 bg-red-50/60 border border-red-100/50 px-2.5 py-1 rounded-lg w-fit"
};
const _hoisted_56 = {
  key: 1,
  class: "flex items-center text-[9px] font-semibold uppercase tracking-widest text-blue-600 bg-blue-50/50 border border-blue-100/30 px-2.5 py-1 rounded-lg w-fit animate-pulse"
};
const _hoisted_57 = { class: "px-6 py-4 text-center" };
const _hoisted_58 = { class: "text-xs font-bold text-slate-700" };
const _hoisted_59 = { class: "px-6 py-4 text-right" };
const _hoisted_60 = { class: "block md:hidden p-3.5 space-y-3 bg-slate-50/60" };
const _hoisted_61 = {
  key: 0,
  class: "p-6 text-center text-slate-400 italic text-xs bg-white rounded-xl border border-slate-200/70"
};
const _hoisted_62 = { class: "flex items-center justify-between border-b border-slate-100 pb-2.5" };
const _hoisted_63 = { class: "flex items-center space-x-2.5 min-w-0" };
const _hoisted_64 = { class: "w-9 h-9 rounded-xl bg-blue-50/70 border border-blue-100 flex items-center justify-center text-blue-600 font-bold text-xs flex-shrink-0" };
const _hoisted_65 = { class: "min-w-0" };
const _hoisted_66 = { class: "text-xs font-bold text-slate-800 leading-snug truncate" };
const _hoisted_67 = { class: "text-[10px] text-slate-400 font-bold uppercase tracking-wide mt-0.5 truncate" };
const _hoisted_68 = { class: "grid grid-cols-3 gap-2 text-left pt-0.5" };
const _hoisted_69 = { class: "bg-emerald-50/60 border border-emerald-100/80 p-2 rounded-xl text-center sm:text-left" };
const _hoisted_70 = { class: "text-xs font-bold text-emerald-800 block" };
const _hoisted_71 = { class: "bg-slate-50 border border-slate-100 p-2 rounded-xl text-center sm:text-left" };
const _hoisted_72 = {
  key: 0,
  class: "text-xs font-bold text-rose-600 block"
};
const _hoisted_73 = {
  key: 1,
  class: "text-[10px] font-bold text-blue-600 animate-pulse uppercase block"
};
const _hoisted_74 = { class: "bg-blue-50/50 border border-blue-100/80 p-2 rounded-xl text-center sm:text-left" };
const _hoisted_75 = { class: "text-xs font-bold text-slate-800 block" };
const _hoisted_76 = { class: "px-6 py-4 bg-slate-50/30 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-[10px] font-semibold text-slate-400 uppercase tracking-widest" };
const _hoisted_77 = { class: "flex items-center space-x-1.5" };
const _hoisted_78 = ["disabled"];
const _hoisted_79 = ["onClick"];
const _hoisted_80 = ["disabled"];
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
              _cache[11] || (_cache[11] = createStaticVNode('<div class="flex flex-wrap gap-x-4 gap-y-1.5 pt-1" data-v-5e75a3f3><div class="flex items-center space-x-1.5 text-[10px] font-bold text-slate-400 uppercase tracking-wide" data-v-5e75a3f3><div class="w-2.5 h-2.5 rounded-full bg-emerald-50 border border-emerald-300" data-v-5e75a3f3></div><span data-v-5e75a3f3>Attended</span></div><div class="flex items-center space-x-1.5 text-[10px] font-bold text-slate-400 uppercase tracking-wide" data-v-5e75a3f3><div class="w-2.5 h-2.5 rounded-full bg-blue-600" data-v-5e75a3f3></div><span data-v-5e75a3f3>Today</span></div><div class="flex items-center space-x-1.5 text-[10px] font-bold text-slate-400 uppercase tracking-wide" data-v-5e75a3f3><div class="w-2.5 h-2.5 rounded-full bg-white border border-slate-200" data-v-5e75a3f3></div><span data-v-5e75a3f3>Absent</span></div></div>', 1))
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
              createBaseVNode("div", _hoisted_41, [
                createBaseVNode("table", _hoisted_42, [
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
                  createBaseVNode("tbody", _hoisted_43, [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(paginatedAttendance.value, (log) => {
                      return openBlock(), createElementBlock("tr", {
                        key: log.id,
                        class: "hover:bg-slate-50/30 transition-colors group"
                      }, [
                        createBaseVNode("td", _hoisted_44, [
                          createBaseVNode("div", _hoisted_45, [
                            createBaseVNode("div", _hoisted_46, toDisplayString(getDay(log.date)), 1),
                            createBaseVNode("div", _hoisted_47, [
                              createBaseVNode("div", _hoisted_48, toDisplayString(formatDate(log.date)), 1),
                              createBaseVNode("div", _hoisted_49, toDisplayString(getDayName(log.date)), 1)
                            ])
                          ])
                        ]),
                        createBaseVNode("td", _hoisted_50, [
                          createBaseVNode("div", _hoisted_51, toDisplayString(log.library?.name || "N/A"), 1)
                        ]),
                        createBaseVNode("td", _hoisted_52, [
                          createBaseVNode("div", _hoisted_53, [
                            createVNode(unref(Clock), { class: "w-3 h-3 mr-1.5" }),
                            createTextVNode(" " + toDisplayString(formatTime(log.check_in_time)), 1)
                          ])
                        ]),
                        createBaseVNode("td", _hoisted_54, [
                          log.check_out_time ? (openBlock(), createElementBlock("div", _hoisted_55, [
                            createVNode(unref(Clock), { class: "w-3 h-3 mr-1.5" }),
                            createTextVNode(" " + toDisplayString(formatTime(log.check_out_time)), 1)
                          ])) : (openBlock(), createElementBlock("div", _hoisted_56, " Present Now "))
                        ]),
                        createBaseVNode("td", _hoisted_57, [
                          createBaseVNode("div", _hoisted_58, toDisplayString(log.total_minutes ? formatDuration(log.total_minutes) : "--"), 1)
                        ]),
                        createBaseVNode("td", _hoisted_59, [
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
                ])
              ]),
              createBaseVNode("div", _hoisted_60, [
                paginatedAttendance.value.length === 0 ? (openBlock(), createElementBlock("div", _hoisted_61, " No attendance logs found. ")) : createCommentVNode("", true),
                (openBlock(true), createElementBlock(Fragment, null, renderList(paginatedAttendance.value, (log) => {
                  return openBlock(), createElementBlock("div", {
                    key: "mobile-" + log.id,
                    class: "bg-white rounded-xl border border-slate-200/90 p-3.5 shadow-xs hover:border-slate-300 transition-all text-left space-y-3"
                  }, [
                    createBaseVNode("div", _hoisted_62, [
                      createBaseVNode("div", _hoisted_63, [
                        createBaseVNode("div", _hoisted_64, toDisplayString(getDay(log.date)), 1),
                        createBaseVNode("div", _hoisted_65, [
                          createBaseVNode("div", _hoisted_66, toDisplayString(formatDate(log.date)), 1),
                          createBaseVNode("div", _hoisted_67, toDisplayString(log.library?.name || "Library Entry"), 1)
                        ])
                      ]),
                      createBaseVNode("span", {
                        class: normalizeClass([
                          "text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border flex-shrink-0 shadow-2xs",
                          log.marked_manually ? "bg-amber-50 text-amber-700 border-amber-200" : "bg-slate-50 text-slate-600 border-slate-200"
                        ])
                      }, toDisplayString(log.marked_manually ? "Manual" : "Auto"), 3)
                    ]),
                    createBaseVNode("div", _hoisted_68, [
                      createBaseVNode("div", _hoisted_69, [
                        _cache[18] || (_cache[18] = createBaseVNode("span", { class: "text-[9px] font-bold text-emerald-700 uppercase tracking-wider block mb-0.5" }, "Check In", -1)),
                        createBaseVNode("span", _hoisted_70, toDisplayString(formatTime(log.check_in_time)), 1)
                      ]),
                      createBaseVNode("div", _hoisted_71, [
                        _cache[19] || (_cache[19] = createBaseVNode("span", { class: "text-[9px] font-bold text-slate-400 uppercase tracking-wider block mb-0.5" }, "Check Out", -1)),
                        log.check_out_time ? (openBlock(), createElementBlock("span", _hoisted_72, toDisplayString(formatTime(log.check_out_time)), 1)) : (openBlock(), createElementBlock("span", _hoisted_73, "Present"))
                      ]),
                      createBaseVNode("div", _hoisted_74, [
                        _cache[20] || (_cache[20] = createBaseVNode("span", { class: "text-[9px] font-bold text-blue-600/90 uppercase tracking-wider block mb-0.5" }, "Duration", -1)),
                        createBaseVNode("span", _hoisted_75, toDisplayString(log.total_minutes ? formatDuration(log.total_minutes) : "--"), 1)
                      ])
                    ])
                  ]);
                }), 128))
              ]),
              createBaseVNode("div", _hoisted_76, [
                createBaseVNode("div", null, "Showing " + toDisplayString((currentPage.value - 1) * pageSize + 1) + " to " + toDisplayString(Math.min(currentPage.value * pageSize, attendance.value.length)) + " of " + toDisplayString(attendance.value.length) + " entries", 1),
                createBaseVNode("div", _hoisted_77, [
                  createBaseVNode("button", {
                    onClick: _cache[0] || (_cache[0] = ($event) => currentPage.value--),
                    disabled: currentPage.value === 1,
                    class: "px-3 py-1.5 border border-slate-200 bg-white rounded-xl text-slate-600 font-bold hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition-all text-xs cursor-pointer shadow-2xs"
                  }, " Previous ", 8, _hoisted_78),
                  (openBlock(true), createElementBlock(Fragment, null, renderList(totalPages.value, (page) => {
                    return openBlock(), createElementBlock("button", {
                      key: page,
                      onClick: ($event) => currentPage.value = page,
                      class: normalizeClass([
                        "w-8 h-8 rounded-xl text-xs font-bold transition-all cursor-pointer shadow-2xs",
                        currentPage.value === page ? "bg-blue-600 text-white shadow-sm" : "border border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
                      ])
                    }, toDisplayString(page), 11, _hoisted_79);
                  }), 128)),
                  createBaseVNode("button", {
                    onClick: _cache[1] || (_cache[1] = ($event) => currentPage.value++),
                    disabled: currentPage.value === totalPages.value,
                    class: "px-3 py-1.5 border border-slate-200 bg-white rounded-xl text-slate-600 font-bold hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition-all text-xs cursor-pointer shadow-2xs"
                  }, " Next ", 8, _hoisted_80)
                ])
              ])
            ]))
          ])
        ])
      ]);
    };
  }
});
const AttendancePage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-5e75a3f3"]]);
export {
  AttendancePage as default
};
