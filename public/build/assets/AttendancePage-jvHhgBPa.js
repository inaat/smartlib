import { d as defineComponent, r as ref, o as onMounted, c as createElementBlock, b as createBaseVNode, m as createCommentVNode, f as createVNode, v as withDirectives, u as unref, x as vModelText, t as toDisplayString, B as vModelSelect, F as Fragment, h as renderList, j as createTextVNode, R as withKeys, n as normalizeClass, O as librarianAPI, i as openBlock } from "./main-Dk2mUbjP.js";
import { u as useSwal } from "./useSwal-J4kFABxt.js";
import { C as Calendar } from "./calendar-e6msfKJ3.js";
import { U as UserPlus } from "./user-plus-hzCGaCTn.js";
import { U as Users } from "./users-BK7GPR5d.js";
import { U as UserCheck } from "./user-check-CY9CiNFu.js";
import { C as Clock } from "./clock-DHHRCinm.js";
import { S as Search } from "./search-CtCRD_3L.js";
import { X } from "./x-YsebUqOw.js";
import { L as LogOut } from "./log-out-HEcj_kfu.js";
import { f as format } from "./format-CerZa7QB.js";
/* empty css               */
import "./createLucideIcon-6n-23kmf.js";
import "./en-US-CtEcOBul.js";
const _hoisted_1 = { class: "p-6 space-y-6" };
const _hoisted_2 = { class: "flex items-center justify-between" };
const _hoisted_3 = { class: "flex items-center space-x-3" };
const _hoisted_4 = { class: "relative" };
const _hoisted_5 = { class: "grid grid-cols-1 md:grid-cols-3 gap-6" };
const _hoisted_6 = { class: "bg-white p-6 rounded-xl shadow-sm border border-gray-200" };
const _hoisted_7 = { class: "flex items-center justify-between" };
const _hoisted_8 = { class: "text-2xl font-bold text-gray-900 mt-1" };
const _hoisted_9 = { class: "p-3 bg-purple-50 rounded-lg" };
const _hoisted_10 = { class: "bg-white p-6 rounded-xl shadow-sm border border-gray-200" };
const _hoisted_11 = { class: "flex items-center justify-between" };
const _hoisted_12 = { class: "text-2xl font-bold text-green-600 mt-1" };
const _hoisted_13 = { class: "p-3 bg-green-50 rounded-lg" };
const _hoisted_14 = { class: "bg-white p-6 rounded-xl shadow-sm border border-gray-200" };
const _hoisted_15 = { class: "flex items-center justify-between" };
const _hoisted_16 = { class: "text-2xl font-bold text-blue-600 mt-1" };
const _hoisted_17 = { class: "p-3 bg-blue-50 rounded-lg" };
const _hoisted_18 = { class: "bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden" };
const _hoisted_19 = { class: "p-4 border-b border-gray-200 flex items-center justify-between bg-gray-50/50" };
const _hoisted_20 = { class: "flex items-center space-x-4" };
const _hoisted_21 = { class: "relative" };
const _hoisted_22 = {
  key: 0,
  class: "p-12 flex justify-center"
};
const _hoisted_23 = {
  key: 1,
  class: "p-12 text-center text-gray-500"
};
const _hoisted_24 = {
  key: 2,
  class: "overflow-x-auto"
};
const _hoisted_25 = { class: "w-full" };
const _hoisted_26 = { class: "divide-y divide-gray-200" };
const _hoisted_27 = { class: "px-6 py-4" };
const _hoisted_28 = { class: "flex items-center space-x-3" };
const _hoisted_29 = { class: "w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-700 font-bold text-xs" };
const _hoisted_30 = { class: "font-medium text-gray-900" };
const _hoisted_31 = { class: "px-6 py-4 text-sm text-gray-600" };
const _hoisted_32 = { class: "px-6 py-4 text-sm text-gray-900 font-medium" };
const _hoisted_33 = { class: "px-6 py-4 text-sm text-gray-900 font-medium" };
const _hoisted_34 = { key: 0 };
const _hoisted_35 = {
  key: 1,
  class: "text-green-600 flex items-center space-x-1"
};
const _hoisted_36 = { class: "px-6 py-4 text-sm text-gray-600" };
const _hoisted_37 = { class: "px-6 py-4" };
const _hoisted_38 = { class: "px-6 py-4 text-right" };
const _hoisted_39 = ["onClick"];
const _hoisted_40 = {
  key: 3,
  class: "bg-gray-50 px-6 py-4 border-t border-gray-200"
};
const _hoisted_41 = { class: "flex items-center justify-between" };
const _hoisted_42 = { class: "text-sm text-gray-600" };
const _hoisted_43 = { class: "font-medium" };
const _hoisted_44 = { class: "font-medium" };
const _hoisted_45 = { class: "font-medium" };
const _hoisted_46 = { class: "flex items-center space-x-2" };
const _hoisted_47 = ["disabled"];
const _hoisted_48 = ["disabled"];
const _hoisted_49 = {
  key: 0,
  class: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
};
const _hoisted_50 = { class: "bg-white rounded-2xl shadow-xl w-full max-w-md overflow-hidden animate-in zoom-in duration-200" };
const _hoisted_51 = { class: "p-6 border-b border-gray-100 flex items-center justify-between bg-gradient-to-r from-purple-600 to-indigo-600 text-white" };
const _hoisted_52 = { class: "p-6 space-y-4" };
const _hoisted_53 = { class: "grid grid-cols-2 gap-4" };
const _hoisted_54 = ["disabled"];
const _hoisted_55 = ["disabled"];
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
    const changePage = (page) => {
      if (page >= 1 && page <= pagination.value.last_page) {
        fetchAttendance(page);
      }
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
    onMounted(() => {
      fetchAttendance();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          _cache[11] || (_cache[11] = createBaseVNode("div", null, [
            createBaseVNode("h1", { class: "text-3xl font-bold text-gray-900" }, "Attendance"),
            createBaseVNode("p", { class: "text-gray-600 mt-1" }, "Monitor and manage student attendance")
          ], -1)),
          createBaseVNode("div", _hoisted_3, [
            createBaseVNode("div", _hoisted_4, [
              createVNode(unref(Calendar), { class: "w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" }),
              withDirectives(createBaseVNode("input", {
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => selectedDate.value = $event),
                type: "date",
                class: "pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none",
                onChange: fetchAttendance
              }, null, 544), [
                [vModelText, selectedDate.value]
              ])
            ]),
            createBaseVNode("button", {
              onClick: _cache[1] || (_cache[1] = ($event) => showMarkModal.value = true),
              class: "px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg hover:shadow-lg transition-all flex items-center space-x-2"
            }, [
              createVNode(unref(UserPlus), { class: "w-4 h-4" }),
              _cache[10] || (_cache[10] = createBaseVNode("span", null, "Mark Attendance", -1))
            ])
          ])
        ]),
        createBaseVNode("div", _hoisted_5, [
          createBaseVNode("div", _hoisted_6, [
            createBaseVNode("div", _hoisted_7, [
              createBaseVNode("div", null, [
                _cache[12] || (_cache[12] = createBaseVNode("p", { class: "text-sm text-gray-500 font-medium" }, "Total Today", -1)),
                createBaseVNode("h3", _hoisted_8, toDisplayString(stats.value.total_today), 1)
              ]),
              createBaseVNode("div", _hoisted_9, [
                createVNode(unref(Users), { class: "w-6 h-6 text-purple-600" })
              ])
            ])
          ]),
          createBaseVNode("div", _hoisted_10, [
            createBaseVNode("div", _hoisted_11, [
              createBaseVNode("div", null, [
                _cache[13] || (_cache[13] = createBaseVNode("p", { class: "text-sm text-gray-500 font-medium" }, "Currently Present", -1)),
                createBaseVNode("h3", _hoisted_12, toDisplayString(stats.value.currently_present), 1)
              ]),
              createBaseVNode("div", _hoisted_13, [
                createVNode(unref(UserCheck), { class: "w-6 h-6 text-green-600" })
              ])
            ])
          ]),
          createBaseVNode("div", _hoisted_14, [
            createBaseVNode("div", _hoisted_15, [
              createBaseVNode("div", null, [
                _cache[14] || (_cache[14] = createBaseVNode("p", { class: "text-sm text-gray-500 font-medium" }, "Avg. Duration", -1)),
                createBaseVNode("h3", _hoisted_16, toDisplayString(stats.value.avg_minutes) + " min", 1)
              ]),
              createBaseVNode("div", _hoisted_17, [
                createVNode(unref(Clock), { class: "w-6 h-6 text-blue-600" })
              ])
            ])
          ])
        ]),
        createBaseVNode("div", _hoisted_18, [
          createBaseVNode("div", _hoisted_19, [
            createBaseVNode("div", _hoisted_20, [
              createBaseVNode("div", _hoisted_21, [
                createVNode(unref(Search), { class: "w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" }),
                withDirectives(createBaseVNode("input", {
                  "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => searchQuery.value = $event),
                  type: "text",
                  placeholder: "Search student or CRN...",
                  class: "pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none w-64 text-sm",
                  onInput: debounceSearch
                }, null, 544), [
                  [vModelText, searchQuery.value]
                ])
              ]),
              withDirectives(createBaseVNode("select", {
                "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => statusFilter.value = $event),
                class: "px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none text-sm",
                onChange: fetchAttendance
              }, [..._cache[15] || (_cache[15] = [
                createBaseVNode("option", { value: "all" }, "All Status", -1),
                createBaseVNode("option", { value: "present" }, "Currently Present", -1),
                createBaseVNode("option", { value: "left" }, "Already Left", -1)
              ])], 544), [
                [vModelSelect, statusFilter.value]
              ])
            ])
          ]),
          loading.value ? (openBlock(), createElementBlock("div", _hoisted_22, [..._cache[16] || (_cache[16] = [
            createBaseVNode("div", { class: "animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600" }, null, -1)
          ])])) : attendance.value.length === 0 ? (openBlock(), createElementBlock("div", _hoisted_23, " No attendance records found for this date. ")) : (openBlock(), createElementBlock("div", _hoisted_24, [
            createBaseVNode("table", _hoisted_25, [
              _cache[18] || (_cache[18] = createBaseVNode("thead", { class: "bg-gray-50 border-b border-gray-200" }, [
                createBaseVNode("tr", null, [
                  createBaseVNode("th", { class: "px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider" }, "Student"),
                  createBaseVNode("th", { class: "px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider" }, "CRN"),
                  createBaseVNode("th", { class: "px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider" }, "Check In"),
                  createBaseVNode("th", { class: "px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider" }, "Check Out"),
                  createBaseVNode("th", { class: "px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider" }, "Duration"),
                  createBaseVNode("th", { class: "px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider" }, "Method"),
                  createBaseVNode("th", { class: "px-6 py-4 text-right text-xs font-semibold text-gray-600 uppercase tracking-wider" }, "Actions")
                ])
              ], -1)),
              createBaseVNode("tbody", _hoisted_26, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(attendance.value, (record) => {
                  return openBlock(), createElementBlock("tr", {
                    key: record.id,
                    class: "hover:bg-gray-50 transition-colors"
                  }, [
                    createBaseVNode("td", _hoisted_27, [
                      createBaseVNode("div", _hoisted_28, [
                        createBaseVNode("div", _hoisted_29, toDisplayString(record.user?.name?.charAt(0)), 1),
                        createBaseVNode("span", _hoisted_30, toDisplayString(record.user?.name), 1)
                      ])
                    ]),
                    createBaseVNode("td", _hoisted_31, toDisplayString(record.user?.crn), 1),
                    createBaseVNode("td", _hoisted_32, toDisplayString(formatTime(record.check_in_time)), 1),
                    createBaseVNode("td", _hoisted_33, [
                      record.check_out_time ? (openBlock(), createElementBlock("span", _hoisted_34, toDisplayString(formatTime(record.check_out_time)), 1)) : (openBlock(), createElementBlock("span", _hoisted_35, [..._cache[17] || (_cache[17] = [
                        createBaseVNode("span", { class: "w-2 h-2 rounded-full bg-green-500 animate-pulse" }, null, -1),
                        createBaseVNode("span", null, "Present", -1)
                      ])]))
                    ]),
                    createBaseVNode("td", _hoisted_36, toDisplayString(record.total_minutes ? record.total_minutes + " min" : "-"), 1),
                    createBaseVNode("td", _hoisted_37, [
                      createBaseVNode("span", {
                        class: normalizeClass([
                          "px-2 py-1 rounded-full text-[10px] font-bold uppercase",
                          record.marked_manually ? "bg-orange-100 text-orange-700" : "bg-blue-100 text-blue-700"
                        ])
                      }, toDisplayString(record.marked_manually ? "Manual" : "System"), 3)
                    ]),
                    createBaseVNode("td", _hoisted_38, [
                      !record.check_out_time ? (openBlock(), createElementBlock("button", {
                        key: 0,
                        onClick: ($event) => handleManualCheckOut(record.user.crn),
                        class: "text-sm text-blue-600 hover:text-blue-800 font-medium"
                      }, " Check Out ", 8, _hoisted_39)) : createCommentVNode("", true)
                    ])
                  ]);
                }), 128))
              ])
            ])
          ])),
          pagination.value.total > 0 ? (openBlock(), createElementBlock("div", _hoisted_40, [
            createBaseVNode("div", _hoisted_41, [
              createBaseVNode("div", _hoisted_42, [
                _cache[19] || (_cache[19] = createTextVNode(" Showing ", -1)),
                createBaseVNode("span", _hoisted_43, toDisplayString(pagination.value.from), 1),
                _cache[20] || (_cache[20] = createTextVNode(" to ", -1)),
                createBaseVNode("span", _hoisted_44, toDisplayString(pagination.value.to), 1),
                _cache[21] || (_cache[21] = createTextVNode(" of ", -1)),
                createBaseVNode("span", _hoisted_45, toDisplayString(pagination.value.total), 1),
                _cache[22] || (_cache[22] = createTextVNode(" results ", -1))
              ]),
              createBaseVNode("div", _hoisted_46, [
                createBaseVNode("button", {
                  onClick: _cache[4] || (_cache[4] = ($event) => changePage(pagination.value.current_page - 1)),
                  disabled: pagination.value.current_page === 1,
                  class: "px-3 py-1 border border-gray-300 rounded-lg hover:bg-white transition-colors disabled:opacity-50"
                }, " Previous ", 8, _hoisted_47),
                createBaseVNode("button", {
                  onClick: _cache[5] || (_cache[5] = ($event) => changePage(pagination.value.current_page + 1)),
                  disabled: pagination.value.current_page === pagination.value.last_page,
                  class: "px-3 py-1 border border-gray-300 rounded-lg hover:bg-white transition-colors disabled:opacity-50"
                }, " Next ", 8, _hoisted_48)
              ])
            ])
          ])) : createCommentVNode("", true)
        ]),
        showMarkModal.value ? (openBlock(), createElementBlock("div", _hoisted_49, [
          createBaseVNode("div", _hoisted_50, [
            createBaseVNode("div", _hoisted_51, [
              _cache[23] || (_cache[23] = createBaseVNode("h3", { class: "text-xl font-bold" }, "Mark Attendance", -1)),
              createBaseVNode("button", {
                onClick: _cache[6] || (_cache[6] = ($event) => showMarkModal.value = false),
                class: "p-1 hover:bg-white/20 rounded-lg transition-colors"
              }, [
                createVNode(unref(X), { class: "w-6 h-6" })
              ])
            ]),
            createBaseVNode("div", _hoisted_52, [
              createBaseVNode("div", null, [
                _cache[24] || (_cache[24] = createBaseVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Student CRN", -1)),
                withDirectives(createBaseVNode("input", {
                  "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => markForm.value.crn = $event),
                  type: "number",
                  placeholder: "Enter student CRN...",
                  class: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none",
                  onKeyup: withKeys(handleMarkAttendance, ["enter"])
                }, null, 544), [
                  [vModelText, markForm.value.crn]
                ])
              ]),
              createBaseVNode("div", _hoisted_53, [
                createBaseVNode("button", {
                  onClick: _cache[8] || (_cache[8] = ($event) => {
                    markForm.value.type = "check_in";
                    handleMarkAttendance();
                  }),
                  disabled: marking.value,
                  class: normalizeClass(["flex flex-col items-center justify-center p-4 border-2 rounded-xl transition-all hover:border-purple-600 hover:bg-purple-50 group", markForm.value.type === "check_in" ? "border-purple-600 bg-purple-50" : "border-gray-100"])
                }, [
                  createVNode(unref(UserCheck), { class: "w-8 h-8 mb-2 text-gray-400 group-hover:text-purple-600" }),
                  _cache[25] || (_cache[25] = createBaseVNode("span", { class: "font-bold text-gray-700 group-hover:text-purple-700" }, "Check In", -1))
                ], 10, _hoisted_54),
                createBaseVNode("button", {
                  onClick: _cache[9] || (_cache[9] = ($event) => {
                    markForm.value.type = "check_out";
                    handleMarkAttendance();
                  }),
                  disabled: marking.value,
                  class: normalizeClass(["flex flex-col items-center justify-center p-4 border-2 rounded-xl transition-all hover:border-blue-600 hover:bg-blue-50 group", markForm.value.type === "check_out" ? "border-blue-600 bg-blue-50" : "border-gray-100"])
                }, [
                  createVNode(unref(LogOut), { class: "w-8 h-8 mb-2 text-gray-400 group-hover:text-blue-600" }),
                  _cache[26] || (_cache[26] = createBaseVNode("span", { class: "font-bold text-gray-700 group-hover:text-blue-700" }, "Check Out", -1))
                ], 10, _hoisted_55)
              ])
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
