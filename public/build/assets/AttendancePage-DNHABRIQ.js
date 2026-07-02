import { d as defineComponent, r as ref, o as onMounted, a as createElementBlock, b as createBaseVNode, l as createCommentVNode, f as createVNode, p as withDirectives, u as unref, v as vModelText, t as toDisplayString, D as vModelSelect, g as resolveComponent, F as Fragment, j as renderList, S as withKeys, n as normalizeClass, P as librarianAPI, k as openBlock } from "./main-DKJzpCzk.js";
import { u as useSwal } from "./useSwal-pQW_XkRe.js";
import { C as Calendar } from "./calendar-FTR2aUnV.js";
import { U as UserPlus } from "./user-plus-C0erzRZS.js";
import { U as Users } from "./users-3SVXGYtw.js";
import { U as UserCheck } from "./user-check-B9sfqqid.js";
import { C as Clock } from "./clock-xlNueMyC.js";
import { S as Search } from "./search-CJLoyzlx.js";
import { X } from "./x-BLKH3q-c.js";
import { L as LogOut } from "./log-out-tiFNap6c.js";
import { f as format } from "./format-CerZa7QB.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
/* empty css               */
import "./createLucideIcon-TQ5d7bQA.js";
import "./en-US-CtEcOBul.js";
const _hoisted_1 = { class: "p-6 space-y-6 font-outfit text-slate-700" };
const _hoisted_2 = { class: "flex justify-end items-center mb-6" };
const _hoisted_3 = { class: "flex items-center space-x-3 w-full sm:w-auto" };
const _hoisted_4 = { class: "relative flex-1 sm:flex-none" };
const _hoisted_5 = { class: "grid grid-cols-1 sm:grid-cols-3 gap-5" };
const _hoisted_6 = { class: "bg-white p-5 rounded-2xl shadow-sm border border-slate-100/80 flex items-center justify-between" };
const _hoisted_7 = { class: "text-left" };
const _hoisted_8 = { class: "text-2xl font-bold text-slate-800 mt-2.5 leading-none" };
const _hoisted_9 = { class: "p-3 bg-blue-50 border border-blue-100/50 text-blue-600 rounded-xl" };
const _hoisted_10 = { class: "bg-white p-5 rounded-2xl shadow-sm border border-slate-100/80 flex items-center justify-between" };
const _hoisted_11 = { class: "text-left" };
const _hoisted_12 = { class: "text-2xl font-bold text-green-600 mt-2.5 leading-none" };
const _hoisted_13 = { class: "p-3 bg-green-50 border border-green-100/50 text-green-600 rounded-xl" };
const _hoisted_14 = { class: "bg-white p-5 rounded-2xl shadow-sm border border-slate-100/80 flex items-center justify-between" };
const _hoisted_15 = { class: "text-left" };
const _hoisted_16 = { class: "text-2xl font-bold text-emerald-600 mt-2.5 leading-none" };
const _hoisted_17 = { class: "p-3 bg-emerald-50 border border-emerald-100/50 text-emerald-600 rounded-xl" };
const _hoisted_18 = { class: "bg-white rounded-2xl shadow-sm border border-slate-100/80 p-4" };
const _hoisted_19 = { class: "flex flex-col md:flex-row md:items-center gap-3" };
const _hoisted_20 = { class: "flex-1 relative" };
const _hoisted_21 = { class: "flex items-center gap-3" };
const _hoisted_22 = { class: "bg-white rounded-2xl shadow-sm border border-slate-100/80 overflow-hidden" };
const _hoisted_23 = {
  key: 0,
  class: "p-16 flex flex-col items-center justify-center"
};
const _hoisted_24 = {
  key: 1,
  class: "p-16 text-center flex flex-col items-center justify-center"
};
const _hoisted_25 = {
  key: 2,
  class: "overflow-x-auto"
};
const _hoisted_26 = { class: "w-full divide-y divide-gray-100" };
const _hoisted_27 = { class: "divide-y divide-gray-100 bg-white" };
const _hoisted_28 = { class: "px-6 py-4 whitespace-nowrap" };
const _hoisted_29 = { class: "flex items-center space-x-3.5 text-left" };
const _hoisted_30 = { class: "w-10 h-10 rounded-lg overflow-hidden flex-shrink-0 flex items-center justify-center shadow-sm" };
const _hoisted_31 = ["src"];
const _hoisted_32 = {
  key: 1,
  class: "w-full h-full flex items-center justify-center bg-emerald-50 border border-emerald-700 rounded-lg text-emerald-700 font-bold text-sm"
};
const _hoisted_33 = { class: "text-left" };
const _hoisted_34 = { class: "text-sm font-medium text-slate-700" };
const _hoisted_35 = { class: "text-[10px] text-slate-400 font-semibold tracking-wide mt-0.5 uppercase" };
const _hoisted_36 = { class: "px-6 py-4 whitespace-nowrap text-left text-xs font-semibold text-green-600" };
const _hoisted_37 = { class: "px-6 py-4 whitespace-nowrap text-left text-xs font-semibold text-red-600" };
const _hoisted_38 = { key: 0 };
const _hoisted_39 = {
  key: 1,
  class: "inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-full bg-green-50 border border-green-100 text-green-700 text-[9px] font-semibold uppercase tracking-wider"
};
const _hoisted_40 = { class: "px-6 py-4 whitespace-nowrap text-left text-xs font-semibold text-slate-550" };
const _hoisted_41 = { class: "px-6 py-4 whitespace-nowrap text-left" };
const _hoisted_42 = { class: "px-6 py-4 whitespace-nowrap text-right" };
const _hoisted_43 = ["onClick"];
const _hoisted_44 = {
  key: 1,
  class: "text-xs text-slate-900 font-semibold"
};
const _hoisted_45 = {
  key: 0,
  class: "fixed inset-0 z-[60] flex items-center justify-center p-4"
};
const _hoisted_46 = { class: "relative bg-white rounded-3xl shadow-2xl w-full max-w-sm overflow-hidden border border-slate-100 text-left animate-in duration-200" };
const _hoisted_47 = { class: "p-6 border-b border-slate-55 flex justify-between items-center bg-slate-50/20" };
const _hoisted_48 = { class: "p-6 space-y-5 text-left" };
const _hoisted_49 = { class: "grid grid-cols-2 gap-4" };
const _hoisted_50 = ["disabled"];
const _hoisted_51 = ["disabled"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "AttendancePage",
  setup(__props) {
    const { showSuccess, showError } = useSwal();
    const loading = ref(false);
    const marking = ref(false);
    const attendance = ref([]);
    const stats = ref({
      total_today: 0,
      currently_present: 0,
      avg_minutes: 0
    });
    const selectedDate = ref(format(/* @__PURE__ */ new Date(), "yyyy-MM-dd"));
    const searchQuery = ref("");
    const statusFilter = ref("all");
    const showMarkModal = ref(false);
    const markForm = ref({
      crn: "",
      type: "check_in"
    });
    const pagination = ref({
      current_page: 1,
      last_page: 1,
      total: 0,
      from: 0,
      to: 0
    });
    const fetchAttendance = async (page = 1) => {
      loading.value = true;
      try {
        const response = await librarianAPI.getAttendance({
          page,
          date: selectedDate.value,
          search: searchQuery.value,
          status: statusFilter.value === "all" ? null : statusFilter.value
        });
        attendance.value = response.data;
        pagination.value = {
          current_page: response.current_page,
          last_page: response.last_page,
          total: response.total,
          from: response.from,
          to: response.to
        };
        await fetchStats();
      } catch (error) {
        console.error("Error fetching attendance:", error);
      } finally {
        loading.value = false;
      }
    };
    const fetchStats = async () => {
      try {
        stats.value = await librarianAPI.getAttendanceStats({ date: selectedDate.value });
      } catch (error) {
        console.error("Error fetching attendance stats:", error);
      }
    };
    let searchTimeout = null;
    const debounceSearch = () => {
      if (searchTimeout) clearTimeout(searchTimeout);
      searchTimeout = setTimeout(() => {
        fetchAttendance(1);
      }, 500);
    };
    const handleMarkAttendance = async () => {
      if (!markForm.value.crn) {
        showError("Error", "Please enter a student CRN");
        return;
      }
      marking.value = true;
      try {
        await librarianAPI.markAttendance(markForm.value);
        showSuccess("Success", `Student ${markForm.value.type === "check_in" ? "checked in" : "checked out"} successfully`);
        markForm.value.crn = "";
        showMarkModal.value = false;
        fetchAttendance();
      } catch (error) {
        showError("Error", error.response?.data?.message || "Failed to mark attendance");
      } finally {
        marking.value = false;
      }
    };
    const handleManualCheckOut = (crn) => {
      markForm.value.crn = crn;
      markForm.value.type = "check_out";
      handleMarkAttendance();
    };
    const formatTime = (time) => {
      if (!time) return "-";
      try {
        const [hours, minutes] = time.split(":");
        const date = /* @__PURE__ */ new Date();
        date.setHours(parseInt(hours));
        date.setMinutes(parseInt(minutes));
        return format(date, "hh:mm a");
      } catch (e) {
        return time;
      }
    };
    const getProfilePictureUrl = (path) => {
      if (!path) return "";
      if (path.startsWith("http")) return path;
      return `/storage/${path}`;
    };
    onMounted(() => {
      fetchAttendance();
    });
    return (_ctx, _cache) => {
      const _component_RefreshCw = resolveComponent("RefreshCw");
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("div", _hoisted_3, [
            createBaseVNode("div", _hoisted_4, [
              createVNode(unref(Calendar), { class: "w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" }),
              withDirectives(createBaseVNode("input", {
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => selectedDate.value = $event),
                type: "date",
                class: "w-full sm:w-auto pl-9 pr-4 py-2 border border-slate-200 focus:border-slate-350 bg-white rounded-xl focus:outline-none focus:ring-4 focus:ring-slate-100 text-xs font-semibold text-slate-600 shadow-sm cursor-pointer transition-all outline-none",
                onChange: _cache[1] || (_cache[1] = () => fetchAttendance(1))
              }, null, 544), [
                [vModelText, selectedDate.value]
              ])
            ]),
            createBaseVNode("button", {
              onClick: _cache[2] || (_cache[2] = ($event) => showMarkModal.value = true),
              class: "flex-1 sm:flex-none px-4 py-2.5 bg-emerald-600 border border-emerald-700 hover:bg-emerald-750 text-white rounded-xl transition-all flex items-center justify-center space-x-2 text-xs font-bold shadow-sm cursor-pointer"
            }, [
              createVNode(unref(UserPlus), { class: "w-4 h-4" }),
              _cache[11] || (_cache[11] = createBaseVNode("span", null, "Mark Attendance", -1))
            ])
          ])
        ]),
        createBaseVNode("div", _hoisted_5, [
          createBaseVNode("div", _hoisted_6, [
            createBaseVNode("div", _hoisted_7, [
              _cache[12] || (_cache[12] = createBaseVNode("p", { class: "text-[10px] text-slate-400 font-bold uppercase tracking-wider leading-none" }, "Total Entries Today", -1)),
              createBaseVNode("h3", _hoisted_8, toDisplayString(stats.value.total_today), 1)
            ]),
            createBaseVNode("div", _hoisted_9, [
              createVNode(unref(Users), { class: "w-5 h-5" })
            ])
          ]),
          createBaseVNode("div", _hoisted_10, [
            createBaseVNode("div", _hoisted_11, [
              _cache[13] || (_cache[13] = createBaseVNode("p", { class: "text-[10px] text-slate-400 font-bold uppercase tracking-wider leading-none" }, "Currently Present", -1)),
              createBaseVNode("h3", _hoisted_12, toDisplayString(stats.value.currently_present), 1)
            ]),
            createBaseVNode("div", _hoisted_13, [
              createVNode(unref(UserCheck), { class: "w-5 h-5" })
            ])
          ]),
          createBaseVNode("div", _hoisted_14, [
            createBaseVNode("div", _hoisted_15, [
              _cache[14] || (_cache[14] = createBaseVNode("p", { class: "text-[10px] text-slate-400 font-bold uppercase tracking-wider leading-none" }, "Avg. Session Duration", -1)),
              createBaseVNode("h3", _hoisted_16, toDisplayString(stats.value.avg_minutes) + " min", 1)
            ]),
            createBaseVNode("div", _hoisted_17, [
              createVNode(unref(Clock), { class: "w-5 h-5" })
            ])
          ])
        ]),
        createBaseVNode("div", _hoisted_18, [
          createBaseVNode("div", _hoisted_19, [
            createBaseVNode("div", _hoisted_20, [
              createVNode(unref(Search), { class: "absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" }),
              withDirectives(createBaseVNode("input", {
                "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => searchQuery.value = $event),
                type: "text",
                placeholder: "Search by student name or CRN card code...",
                class: "w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 focus:border-slate-300 focus:bg-white rounded-xl text-xs font-semibold focus:outline-none focus:ring-4 focus:ring-slate-100 transition-all outline-none",
                onInput: debounceSearch
              }, null, 544), [
                [vModelText, searchQuery.value]
              ])
            ]),
            createBaseVNode("div", _hoisted_21, [
              withDirectives(createBaseVNode("select", {
                "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => statusFilter.value = $event),
                class: "px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold focus:outline-none focus:ring-4 focus:ring-slate-100 cursor-pointer transition-all outline-none",
                onChange: _cache[5] || (_cache[5] = () => fetchAttendance(1))
              }, [..._cache[15] || (_cache[15] = [
                createBaseVNode("option", { value: "all" }, "All Session States", -1),
                createBaseVNode("option", { value: "present" }, "Currently Present", -1),
                createBaseVNode("option", { value: "left" }, "Already Left", -1)
              ])], 544), [
                [vModelSelect, statusFilter.value]
              ])
            ])
          ])
        ]),
        createBaseVNode("div", _hoisted_22, [
          loading.value ? (openBlock(), createElementBlock("div", _hoisted_23, [
            createVNode(_component_RefreshCw, { class: "w-7 h-7 text-emerald-600 animate-spin mb-3" }),
            _cache[16] || (_cache[16] = createBaseVNode("p", { class: "text-[10px] text-slate-500 font-bold uppercase tracking-wider" }, "Loading attendance sheet...", -1))
          ])) : attendance.value.length === 0 ? (openBlock(), createElementBlock("div", _hoisted_24, [
            createVNode(unref(Users), { class: "w-8 h-8 text-slate-300 mb-4" }),
            _cache[17] || (_cache[17] = createBaseVNode("h3", { class: "text-sm font-bold text-slate-800 uppercase tracking-wider mb-1" }, "No Records Found", -1)),
            _cache[18] || (_cache[18] = createBaseVNode("p", { class: "text-xs text-slate-400 font-semibold max-w-xs leading-relaxed" }, "There are no attendance check logs matching this date or search filters.", -1))
          ])) : (openBlock(), createElementBlock("div", _hoisted_25, [
            createBaseVNode("table", _hoisted_26, [
              _cache[20] || (_cache[20] = createBaseVNode("thead", { class: "bg-gray-50/50" }, [
                createBaseVNode("tr", null, [
                  createBaseVNode("th", { class: "px-6 py-4 text-left text-xs font-semibold text-slate-400 uppercase tracking-widest" }, "Student"),
                  createBaseVNode("th", { class: "px-6 py-4 text-left text-xs font-semibold text-slate-400 uppercase tracking-widest" }, "Check In"),
                  createBaseVNode("th", { class: "px-6 py-4 text-left text-xs font-semibold text-slate-400 uppercase tracking-widest" }, "Check Out"),
                  createBaseVNode("th", { class: "px-6 py-4 text-left text-xs font-semibold text-slate-400 uppercase tracking-widest" }, "Duration"),
                  createBaseVNode("th", { class: "px-6 py-4 text-left text-xs font-semibold text-slate-400 uppercase tracking-widest" }, "Mark Type"),
                  createBaseVNode("th", { class: "px-6 py-4 text-right text-xs font-semibold text-slate-400 uppercase tracking-widest" }, "Actions")
                ])
              ], -1)),
              createBaseVNode("tbody", _hoisted_27, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(attendance.value, (record) => {
                  return openBlock(), createElementBlock("tr", {
                    key: record.id,
                    class: "hover:bg-slate-50/50 transition-colors"
                  }, [
                    createBaseVNode("td", _hoisted_28, [
                      createBaseVNode("div", _hoisted_29, [
                        createBaseVNode("div", _hoisted_30, [
                          record.user?.profile_picture ? (openBlock(), createElementBlock("img", {
                            key: 0,
                            src: getProfilePictureUrl(record.user.profile_picture),
                            class: "w-full h-full object-cover rounded-lg"
                          }, null, 8, _hoisted_31)) : (openBlock(), createElementBlock("div", _hoisted_32, toDisplayString(record.user?.name?.charAt(0).toUpperCase()), 1))
                        ]),
                        createBaseVNode("div", _hoisted_33, [
                          createBaseVNode("div", _hoisted_34, toDisplayString(record.user?.name), 1),
                          createBaseVNode("div", _hoisted_35, "ID: " + toDisplayString(record.user?.crn || "N/A"), 1)
                        ])
                      ])
                    ]),
                    createBaseVNode("td", _hoisted_36, toDisplayString(formatTime(record.check_in_time)), 1),
                    createBaseVNode("td", _hoisted_37, [
                      record.check_out_time ? (openBlock(), createElementBlock("span", _hoisted_38, toDisplayString(formatTime(record.check_out_time)), 1)) : (openBlock(), createElementBlock("span", _hoisted_39, [..._cache[19] || (_cache[19] = [
                        createBaseVNode("span", { class: "w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" }, null, -1),
                        createBaseVNode("span", null, "Present", -1)
                      ])]))
                    ]),
                    createBaseVNode("td", _hoisted_40, toDisplayString(record.total_minutes ? record.total_minutes + " min" : "-"), 1),
                    createBaseVNode("td", _hoisted_41, [
                      createBaseVNode("span", {
                        class: normalizeClass([
                          "text-[9px] font-semibold px-2.5 py-1 rounded-full uppercase tracking-wider border",
                          record.marked_manually ? "bg-amber-50 border-amber-200 text-amber-700" : "bg-blue-50 border-blue-200 text-blue-700"
                        ])
                      }, toDisplayString(record.marked_manually ? "Manual" : "System"), 3)
                    ]),
                    createBaseVNode("td", _hoisted_42, [
                      !record.check_out_time ? (openBlock(), createElementBlock("button", {
                        key: 0,
                        onClick: ($event) => handleManualCheckOut(record.user.crn),
                        class: "px-3 py-1.5 text-xs font-bold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-250/30 rounded-xl transition-colors cursor-pointer shadow-sm"
                      }, " Check Out ", 8, _hoisted_43)) : (openBlock(), createElementBlock("span", _hoisted_44, "-"))
                    ])
                  ]);
                }), 128))
              ])
            ])
          ]))
        ]),
        showMarkModal.value ? (openBlock(), createElementBlock("div", _hoisted_45, [
          createBaseVNode("div", {
            class: "absolute inset-0 bg-slate-900/40 backdrop-blur-sm animate-fade-in",
            onClick: _cache[6] || (_cache[6] = ($event) => showMarkModal.value = false)
          }),
          createBaseVNode("div", _hoisted_46, [
            createBaseVNode("div", _hoisted_47, [
              _cache[21] || (_cache[21] = createBaseVNode("div", null, [
                createBaseVNode("h3", { class: "text-base font-bold text-slate-700 tracking-tight leading-none mb-1.5" }, "Mark Attendance"),
                createBaseVNode("p", { class: "text-[10px] text-slate-400 font-semibold" }, "Enter card details to log inside-library scans.")
              ], -1)),
              createBaseVNode("button", {
                onClick: _cache[7] || (_cache[7] = ($event) => showMarkModal.value = false),
                class: "text-slate-400 hover:text-slate-600 p-1.5 rounded-lg hover:bg-slate-150 transition-colors cursor-pointer"
              }, [
                createVNode(unref(X), { class: "w-4 h-4" })
              ])
            ]),
            createBaseVNode("div", _hoisted_48, [
              createBaseVNode("div", null, [
                _cache[22] || (_cache[22] = createBaseVNode("label", { class: "block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1.5" }, "Student CRN *", -1)),
                withDirectives(createBaseVNode("input", {
                  "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => markForm.value.crn = $event),
                  type: "number",
                  placeholder: "e.g., 20261204",
                  class: "w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-600 focus:outline-none focus:ring-4 focus:ring-slate-100/50 focus:border-slate-300 focus:bg-white transition-all outline-none",
                  onKeyup: withKeys(handleMarkAttendance, ["enter"])
                }, null, 544), [
                  [vModelText, markForm.value.crn]
                ])
              ]),
              createBaseVNode("div", _hoisted_49, [
                createBaseVNode("button", {
                  onClick: _cache[9] || (_cache[9] = ($event) => {
                    markForm.value.type = "check_in";
                    handleMarkAttendance();
                  }),
                  disabled: marking.value,
                  class: normalizeClass(["flex flex-col items-center justify-center p-4 border rounded-xl hover:border-emerald-600 hover:bg-emerald-50/50 group cursor-pointer transition-all", markForm.value.type === "check_in" ? "border-emerald-600 bg-emerald-50" : "border-slate-150"])
                }, [
                  createVNode(unref(UserCheck), { class: "w-6 h-6 mb-2 text-slate-400 group-hover:text-emerald-600" }),
                  _cache[23] || (_cache[23] = createBaseVNode("span", { class: "text-xs font-bold text-slate-600 group-hover:text-emerald-600" }, "Check In", -1))
                ], 10, _hoisted_50),
                createBaseVNode("button", {
                  onClick: _cache[10] || (_cache[10] = ($event) => {
                    markForm.value.type = "check_out";
                    handleMarkAttendance();
                  }),
                  disabled: marking.value,
                  class: normalizeClass(["flex flex-col items-center justify-center p-4 border rounded-xl hover:border-blue-600 hover:bg-blue-50/50 group cursor-pointer transition-all", markForm.value.type === "check_out" ? "border-blue-600 bg-blue-50" : "border-slate-150"])
                }, [
                  createVNode(unref(LogOut), { class: "w-6 h-6 mb-2 text-slate-400 group-hover:text-blue-600" }),
                  _cache[24] || (_cache[24] = createBaseVNode("span", { class: "text-xs font-bold text-slate-600 group-hover:text-blue-600" }, "Check Out", -1))
                ], 10, _hoisted_51)
              ])
            ])
          ])
        ])) : createCommentVNode("", true)
      ]);
    };
  }
});
const AttendancePage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-7ee5392e"]]);
export {
  AttendancePage as default
};
