import { d as defineComponent, L as useRoute, r as ref, o as onMounted, E as computed, c as createElementBlock, b as createBaseVNode, m as createCommentVNode, f as createVNode, u as unref, n as normalizeClass, k as createBlock, t as toDisplayString, F as Fragment, h as renderList, O as librarianAPI, A as useRouter, i as openBlock } from "./main-Dk2mUbjP.js";
import { u as useSwal } from "./useSwal-J4kFABxt.js";
import { C as ChevronLeft } from "./chevron-left-BF-rlIRr.js";
import { U as UserCheck } from "./user-check-CY9CiNFu.js";
import { B as Ban } from "./ban-BXjJCiiA.js";
import { P as Pen } from "./pen-sB2k7vRA.js";
import { R as RefreshCw } from "./refresh-cw-D9O5gUrY.js";
import { M as Mail } from "./mail-CfIgijJY.js";
import { P as Phone } from "./phone-BeWBBpz0.js";
import { c as createLucideIcon } from "./createLucideIcon-6n-23kmf.js";
import { C as Calendar } from "./calendar-e6msfKJ3.js";
import { C as CircleCheck } from "./circle-check-DYTBJZUl.js";
import { S as Search } from "./search-CtCRD_3L.js";
import { B as BookOpen } from "./book-open-DFp6gl31.js";
/* empty css               */
const GraduationCap = createLucideIcon("graduation-cap", [
  [
    "path",
    {
      d: "M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",
      key: "j76jl0"
    }
  ],
  ["path", { d: "M22 10v6", key: "1lu8f3" }],
  ["path", { d: "M6 12.5V16a6 3 0 0 0 12 0v-3.5", key: "1r8lef" }]
]);
const Square = createLucideIcon("square", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }]
]);
const _hoisted_1 = { class: "p-6 space-y-6" };
const _hoisted_2 = { class: "flex items-center justify-between" };
const _hoisted_3 = { class: "flex items-center space-x-4" };
const _hoisted_4 = {
  key: 0,
  class: "flex items-center space-x-3"
};
const _hoisted_5 = {
  key: 0,
  class: "flex flex-col items-center justify-center py-24"
};
const _hoisted_6 = {
  key: 1,
  class: "grid grid-cols-1 lg:grid-cols-3 gap-6"
};
const _hoisted_7 = { class: "space-y-6" };
const _hoisted_8 = { class: "bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden" };
const _hoisted_9 = { class: "px-6 pb-6 mt-[-3rem]" };
const _hoisted_10 = { class: "relative" };
const _hoisted_11 = { class: "w-24 h-24 rounded-2xl bg-white border-4 border-white shadow-lg flex items-center justify-center overflow-hidden mb-4" };
const _hoisted_12 = ["src"];
const _hoisted_13 = {
  key: 1,
  class: "w-full h-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white text-3xl font-bold"
};
const _hoisted_14 = { class: "text-xl font-bold text-gray-900" };
const _hoisted_15 = { class: "text-sm font-medium text-gray-500" };
const _hoisted_16 = { class: "mt-6 space-y-3" };
const _hoisted_17 = { class: "flex items-center space-x-3 text-sm text-gray-600" };
const _hoisted_18 = { class: "w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center" };
const _hoisted_19 = { class: "truncate" };
const _hoisted_20 = { class: "flex items-center space-x-3 text-sm text-gray-600" };
const _hoisted_21 = { class: "w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center" };
const _hoisted_22 = { class: "flex items-center space-x-3 text-sm text-gray-600" };
const _hoisted_23 = { class: "w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center" };
const _hoisted_24 = { class: "flex items-center space-x-3 text-sm text-gray-600" };
const _hoisted_25 = { class: "w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center" };
const _hoisted_26 = {
  key: 0,
  class: "mt-6 p-4 bg-indigo-50 rounded-xl border border-indigo-100"
};
const _hoisted_27 = { class: "flex items-center justify-between mb-2" };
const _hoisted_28 = { class: "font-bold text-indigo-900" };
const _hoisted_29 = { class: "text-xs text-indigo-600 mt-1" };
const _hoisted_30 = { class: "grid grid-cols-2 gap-4" };
const _hoisted_31 = { class: "bg-white p-4 rounded-xl border border-gray-100 shadow-sm" };
const _hoisted_32 = { class: "text-xl font-bold text-gray-900 mt-1" };
const _hoisted_33 = { class: "bg-white p-4 rounded-xl border border-gray-100 shadow-sm" };
const _hoisted_34 = { class: "text-xl font-bold text-gray-900 mt-1" };
const _hoisted_35 = { class: "bg-white p-4 rounded-xl border border-gray-100 shadow-sm" };
const _hoisted_36 = { class: "text-xl font-bold text-gray-900 mt-1" };
const _hoisted_37 = { class: "bg-white p-4 rounded-xl border border-gray-100 shadow-sm" };
const _hoisted_38 = { class: "text-xl font-bold text-gray-900 mt-1" };
const _hoisted_39 = { class: "lg:col-span-2 space-y-6" };
const _hoisted_40 = { class: "bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col min-h-[600px]" };
const _hoisted_41 = { class: "flex items-center border-b border-gray-100 px-6 overflow-x-auto" };
const _hoisted_42 = ["onClick"];
const _hoisted_43 = { class: "p-6 flex-1" };
const _hoisted_44 = {
  key: 0,
  class: "space-y-4"
};
const _hoisted_45 = { class: "flex items-center space-x-4" };
const _hoisted_46 = { class: "w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center" };
const _hoisted_47 = { class: "font-bold text-gray-900" };
const _hoisted_48 = { class: "text-xs text-gray-500" };
const _hoisted_49 = {
  key: 1,
  class: "flex flex-col items-center justify-center py-20 text-center"
};
const _hoisted_50 = {
  key: 1,
  class: "space-y-4"
};
const _hoisted_51 = {
  key: 0,
  class: "w-full text-left"
};
const _hoisted_52 = { class: "divide-y divide-gray-50" };
const _hoisted_53 = { class: "py-4 font-medium" };
const _hoisted_54 = { class: "py-4 text-green-600 font-medium" };
const _hoisted_55 = { class: "py-4 text-orange-600 font-medium" };
const _hoisted_56 = { class: "py-4 text-right font-bold text-gray-600" };
const _hoisted_57 = {
  key: 1,
  class: "flex flex-col items-center justify-center py-20 text-center"
};
const _hoisted_58 = {
  key: 2,
  class: "space-y-4"
};
const _hoisted_59 = { class: "flex items-center space-x-4" };
const _hoisted_60 = { class: "w-10 h-10 rounded-lg bg-purple-50 flex items-center justify-center" };
const _hoisted_61 = { class: "font-bold text-gray-900" };
const _hoisted_62 = { class: "text-xs text-gray-500" };
const _hoisted_63 = {
  key: 1,
  class: "flex flex-col items-center justify-center py-20 text-center"
};
const _hoisted_64 = {
  key: 3,
  class: "space-y-4"
};
const _hoisted_65 = { class: "flex items-center space-x-4" };
const _hoisted_66 = { class: "w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center" };
const _hoisted_67 = { class: "font-bold text-gray-900" };
const _hoisted_68 = { class: "text-xs text-gray-500" };
const _hoisted_69 = {
  key: 1,
  class: "flex flex-col items-center justify-center py-20 text-center"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "StudentDetailsPage",
  setup(__props) {
    const route = useRoute();
    const router = useRouter();
    const { showError, showSuccess, showConfirm } = useSwal();
    const studentId = Number(route.params.id);
    const loading = ref(true);
    const student = ref(null);
    const activeTab = ref("bookings");
    const tabs = [
      { id: "bookings", label: "Seat Bookings" },
      { id: "attendance", label: "Attendance" },
      { id: "events", label: "Events" },
      { id: "books", label: "Books" }
    ];
    const fetchStudentDetails = async () => {
      try {
        loading.value = true;
        const data = await librarianAPI.getStudent(studentId);
        student.value = data;
      } catch (error) {
        console.error("Error fetching student details:", error);
        showError("Error", "Failed to load student profile");
        router.push("/librarian/students");
      } finally {
        loading.value = false;
      }
    };
    onMounted(fetchStudentDetails);
    const sortedBookings = computed(() => {
      if (!student.value?.seat_bookings) return [];
      return [...student.value.seat_bookings].sort(
        (a, b) => new Date(b.booking_date).getTime() - new Date(a.booking_date).getTime()
      );
    });
    const sortedAttendance = computed(() => {
      if (!student.value?.attendance) return [];
      return [...student.value.attendance].sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      );
    });
    const formatDate = (dateString) => {
      if (!dateString) return "N/A";
      return new Date(dateString).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric"
      });
    };
    const calculateDuration = (log) => {
      if (!log.check_in_time || !log.check_out_time) return "--";
      return "Calculated";
    };
    const unbanStudent = async (student2) => {
      if (await showConfirm("Unban Student", `Are you sure you want to lift the restriction for ${student2.name}?`, "Yes, Unban")) {
        try {
          await librarianAPI.unbanStudent(student2.id);
          showSuccess("Unbanned", "Student access restored");
          fetchStudentDetails();
        } catch (error) {
          showError("Unban Failed", "Failed to lift restriction");
        }
      }
    };
    const openBanModal = () => {
      showError("Restricting...", "Please use the main students list to apply new restrictions");
    };
    const openEditModal = () => {
      showError("Editing...", "Please use the main students list to edit profile data");
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("div", _hoisted_3, [
            createBaseVNode("button", {
              onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$router.push("/librarian/students")),
              class: "p-2 hover:bg-white rounded-lg transition-colors border border-gray-200 bg-gray-50"
            }, [
              createVNode(unref(ChevronLeft), { class: "w-5 h-5 text-gray-600" })
            ]),
            _cache[2] || (_cache[2] = createBaseVNode("div", null, [
              createBaseVNode("h1", { class: "text-3xl font-bold text-gray-900" }, "Student Profile"),
              createBaseVNode("p", { class: "text-gray-500 text-sm" }, "Detailed activity and history")
            ], -1))
          ]),
          student.value ? (openBlock(), createElementBlock("div", _hoisted_4, [
            createBaseVNode("button", {
              onClick: _cache[1] || (_cache[1] = ($event) => student.value.is_banned ? unbanStudent(student.value) : openBanModal),
              class: normalizeClass([
                "px-4 py-2 border rounded-lg transition-colors flex items-center space-x-2 font-medium text-sm",
                student.value.is_banned ? "border-green-200 text-green-600 bg-green-50 hover:bg-green-100" : "border-orange-200 text-orange-600 bg-orange-50 hover:bg-orange-100"
              ])
            }, [
              student.value.is_banned ? (openBlock(), createBlock(unref(UserCheck), {
                key: 0,
                class: "w-4 h-4"
              })) : (openBlock(), createBlock(unref(Ban), {
                key: 1,
                class: "w-4 h-4"
              })),
              createBaseVNode("span", null, toDisplayString(student.value.is_banned ? "Lift Restriction" : "Restrict Student"), 1)
            ], 2),
            createBaseVNode("button", {
              onClick: openEditModal,
              class: "px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors flex items-center space-x-2 font-medium text-sm"
            }, [
              createVNode(unref(Pen), { class: "w-4 h-4" }),
              _cache[3] || (_cache[3] = createBaseVNode("span", null, "Edit Details", -1))
            ])
          ])) : createCommentVNode("", true)
        ]),
        loading.value ? (openBlock(), createElementBlock("div", _hoisted_5, [
          createVNode(unref(RefreshCw), { class: "w-10 h-10 text-indigo-600 animate-spin mb-4" }),
          _cache[4] || (_cache[4] = createBaseVNode("p", { class: "text-gray-500 font-medium" }, "Fetching student data...", -1))
        ])) : student.value ? (openBlock(), createElementBlock("div", _hoisted_6, [
          createBaseVNode("div", _hoisted_7, [
            createBaseVNode("div", _hoisted_8, [
              _cache[6] || (_cache[6] = createBaseVNode("div", { class: "h-24 bg-gradient-to-r from-indigo-600 to-purple-600" }, null, -1)),
              createBaseVNode("div", _hoisted_9, [
                createBaseVNode("div", _hoisted_10, [
                  createBaseVNode("div", _hoisted_11, [
                    student.value.profile_picture ? (openBlock(), createElementBlock("img", {
                      key: 0,
                      src: student.value.profile_picture,
                      class: "w-full h-full object-cover"
                    }, null, 8, _hoisted_12)) : (openBlock(), createElementBlock("div", _hoisted_13, toDisplayString(student.value.name.charAt(0)), 1))
                  ]),
                  createBaseVNode("div", {
                    class: normalizeClass([
                      "absolute bottom-4 right-[-4px] px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider",
                      student.value.is_banned ? "bg-red-500 text-white" : student.value.is_active ? "bg-green-500 text-white" : "bg-gray-400 text-white"
                    ])
                  }, toDisplayString(student.value.is_banned ? "Banned" : student.value.is_active ? "Active" : "Inactive"), 3)
                ]),
                createBaseVNode("h2", _hoisted_14, toDisplayString(student.value.name), 1),
                createBaseVNode("p", _hoisted_15, toDisplayString(student.value.crn), 1),
                createBaseVNode("div", _hoisted_16, [
                  createBaseVNode("div", _hoisted_17, [
                    createBaseVNode("div", _hoisted_18, [
                      createVNode(unref(Mail), { class: "w-4 h-4 text-gray-400" })
                    ]),
                    createBaseVNode("span", _hoisted_19, toDisplayString(student.value.email), 1)
                  ]),
                  createBaseVNode("div", _hoisted_20, [
                    createBaseVNode("div", _hoisted_21, [
                      createVNode(unref(Phone), { class: "w-4 h-4 text-gray-400" })
                    ]),
                    createBaseVNode("span", null, toDisplayString(student.value.phone || "No phone"), 1)
                  ]),
                  createBaseVNode("div", _hoisted_22, [
                    createBaseVNode("div", _hoisted_23, [
                      createVNode(unref(GraduationCap), { class: "w-4 h-4 text-gray-400" })
                    ]),
                    createBaseVNode("span", null, toDisplayString(student.value.ca_level || "N/A"), 1)
                  ]),
                  createBaseVNode("div", _hoisted_24, [
                    createBaseVNode("div", _hoisted_25, [
                      createVNode(unref(Calendar), { class: "w-4 h-4 text-gray-400" })
                    ]),
                    createBaseVNode("span", null, "Joined " + toDisplayString(formatDate(student.value.created_at)), 1)
                  ])
                ]),
                student.value.active_subscription ? (openBlock(), createElementBlock("div", _hoisted_26, [
                  createBaseVNode("div", _hoisted_27, [
                    _cache[5] || (_cache[5] = createBaseVNode("span", { class: "text-[10px] font-bold text-indigo-600 uppercase tracking-wider" }, "Active Subscription", -1)),
                    createVNode(unref(CircleCheck), { class: "w-4 h-4 text-indigo-600" })
                  ]),
                  createBaseVNode("p", _hoisted_28, toDisplayString(student.value.active_subscription.subscription_plan?.name), 1),
                  createBaseVNode("p", _hoisted_29, "Expires " + toDisplayString(formatDate(student.value.active_subscription.expires_at)), 1)
                ])) : createCommentVNode("", true)
              ])
            ]),
            createBaseVNode("div", _hoisted_30, [
              createBaseVNode("div", _hoisted_31, [
                _cache[7] || (_cache[7] = createBaseVNode("p", { class: "text-xs text-gray-500 font-medium" }, "Bookings", -1)),
                createBaseVNode("h3", _hoisted_32, toDisplayString(student.value.seat_bookings?.length || 0), 1)
              ]),
              createBaseVNode("div", _hoisted_33, [
                _cache[8] || (_cache[8] = createBaseVNode("p", { class: "text-xs text-gray-500 font-medium" }, "Attendance", -1)),
                createBaseVNode("h3", _hoisted_34, toDisplayString(student.value.attendance?.length || 0), 1)
              ]),
              createBaseVNode("div", _hoisted_35, [
                _cache[9] || (_cache[9] = createBaseVNode("p", { class: "text-xs text-gray-500 font-medium" }, "Events", -1)),
                createBaseVNode("h3", _hoisted_36, toDisplayString(student.value.event_registrations?.length || 0), 1)
              ]),
              createBaseVNode("div", _hoisted_37, [
                _cache[10] || (_cache[10] = createBaseVNode("p", { class: "text-xs text-gray-500 font-medium" }, "Books", -1)),
                createBaseVNode("h3", _hoisted_38, toDisplayString(student.value.book_reservations?.length || 0), 1)
              ])
            ])
          ]),
          createBaseVNode("div", _hoisted_39, [
            createBaseVNode("div", _hoisted_40, [
              createBaseVNode("div", _hoisted_41, [
                (openBlock(), createElementBlock(Fragment, null, renderList(tabs, (tab) => {
                  return createBaseVNode("button", {
                    key: tab.id,
                    onClick: ($event) => activeTab.value = tab.id,
                    class: normalizeClass([
                      "px-4 py-4 text-sm font-bold transition-all border-b-2 whitespace-nowrap",
                      activeTab.value === tab.id ? "border-indigo-600 text-indigo-600" : "border-transparent text-gray-500 hover:text-gray-700"
                    ])
                  }, toDisplayString(tab.label), 11, _hoisted_42);
                }), 64))
              ]),
              createBaseVNode("div", _hoisted_43, [
                activeTab.value === "bookings" ? (openBlock(), createElementBlock("div", _hoisted_44, [
                  student.value.seat_bookings?.length ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(sortedBookings.value, (booking) => {
                    return openBlock(), createElementBlock("div", {
                      key: booking.id,
                      class: "flex items-center justify-between p-4 rounded-xl border border-gray-100 hover:bg-gray-50 transition-colors"
                    }, [
                      createBaseVNode("div", _hoisted_45, [
                        createBaseVNode("div", _hoisted_46, [
                          createVNode(unref(Square), { class: "w-5 h-5 text-indigo-600" })
                        ]),
                        createBaseVNode("div", null, [
                          createBaseVNode("p", _hoisted_47, "Seat " + toDisplayString(booking.seat?.seat_number) + " (" + toDisplayString(booking.seat?.library?.name) + ")", 1),
                          createBaseVNode("p", _hoisted_48, toDisplayString(formatDate(booking.booking_date)) + " | " + toDisplayString(booking.start_time) + " - " + toDisplayString(booking.end_time), 1)
                        ])
                      ]),
                      createBaseVNode("span", {
                        class: normalizeClass([
                          "px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider",
                          booking.status === "completed" ? "bg-green-100 text-green-700" : booking.status === "cancelled" ? "bg-red-100 text-red-700" : "bg-blue-100 text-blue-700"
                        ])
                      }, toDisplayString(booking.status), 3)
                    ]);
                  }), 128)) : (openBlock(), createElementBlock("div", _hoisted_49, [
                    createVNode(unref(Search), { class: "w-10 h-10 text-gray-200 mb-4" }),
                    _cache[11] || (_cache[11] = createBaseVNode("p", { class: "text-gray-500 font-medium" }, "No booking history found", -1))
                  ]))
                ])) : createCommentVNode("", true),
                activeTab.value === "attendance" ? (openBlock(), createElementBlock("div", _hoisted_50, [
                  student.value.attendance?.length ? (openBlock(), createElementBlock("table", _hoisted_51, [
                    _cache[12] || (_cache[12] = createBaseVNode("thead", null, [
                      createBaseVNode("tr", { class: "text-xs text-gray-400 uppercase font-bold tracking-wider" }, [
                        createBaseVNode("th", { class: "pb-4" }, "Date"),
                        createBaseVNode("th", { class: "pb-4" }, "Check In"),
                        createBaseVNode("th", { class: "pb-4" }, "Check Out"),
                        createBaseVNode("th", { class: "pb-4 text-right" }, "Duration")
                      ])
                    ], -1)),
                    createBaseVNode("tbody", _hoisted_52, [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(sortedAttendance.value, (log) => {
                        return openBlock(), createElementBlock("tr", {
                          key: log.id,
                          class: "text-sm"
                        }, [
                          createBaseVNode("td", _hoisted_53, toDisplayString(formatDate(log.date)), 1),
                          createBaseVNode("td", _hoisted_54, toDisplayString(log.check_in_time || "--:--"), 1),
                          createBaseVNode("td", _hoisted_55, toDisplayString(log.check_out_time || "Active"), 1),
                          createBaseVNode("td", _hoisted_56, toDisplayString(calculateDuration(log)), 1)
                        ]);
                      }), 128))
                    ])
                  ])) : (openBlock(), createElementBlock("div", _hoisted_57, [
                    createVNode(unref(Search), { class: "w-10 h-10 text-gray-200 mb-4" }),
                    _cache[13] || (_cache[13] = createBaseVNode("p", { class: "text-gray-500 font-medium" }, "No attendance logs found", -1))
                  ]))
                ])) : createCommentVNode("", true),
                activeTab.value === "events" ? (openBlock(), createElementBlock("div", _hoisted_58, [
                  student.value.event_registrations?.length ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(student.value.event_registrations, (reg) => {
                    return openBlock(), createElementBlock("div", {
                      key: reg.id,
                      class: "flex items-center justify-between p-4 rounded-xl border border-gray-100 hover:bg-gray-50 transition-colors"
                    }, [
                      createBaseVNode("div", _hoisted_59, [
                        createBaseVNode("div", _hoisted_60, [
                          createVNode(unref(Calendar), { class: "w-5 h-5 text-purple-600" })
                        ]),
                        createBaseVNode("div", null, [
                          createBaseVNode("p", _hoisted_61, toDisplayString(reg.event?.title), 1),
                          createBaseVNode("p", _hoisted_62, toDisplayString(formatDate(reg.event?.date)) + " | " + toDisplayString(reg.event?.venue), 1)
                        ])
                      ]),
                      createBaseVNode("span", {
                        class: normalizeClass([
                          "px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider",
                          reg.attended ? "bg-green-100 text-green-700" : "bg-indigo-100 text-indigo-700"
                        ])
                      }, toDisplayString(reg.attended ? "Attended" : "Registered"), 3)
                    ]);
                  }), 128)) : (openBlock(), createElementBlock("div", _hoisted_63, [
                    createVNode(unref(Search), { class: "w-10 h-10 text-gray-200 mb-4" }),
                    _cache[14] || (_cache[14] = createBaseVNode("p", { class: "text-gray-500 font-medium" }, "No event history found", -1))
                  ]))
                ])) : createCommentVNode("", true),
                activeTab.value === "books" ? (openBlock(), createElementBlock("div", _hoisted_64, [
                  student.value.book_reservations?.length ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(student.value.book_reservations, (res) => {
                    return openBlock(), createElementBlock("div", {
                      key: res.id,
                      class: "flex items-center justify-between p-4 rounded-xl border border-gray-100 hover:bg-gray-50 transition-colors"
                    }, [
                      createBaseVNode("div", _hoisted_65, [
                        createBaseVNode("div", _hoisted_66, [
                          createVNode(unref(BookOpen), { class: "w-5 h-5 text-blue-600" })
                        ]),
                        createBaseVNode("div", null, [
                          createBaseVNode("p", _hoisted_67, toDisplayString(res.book?.title), 1),
                          createBaseVNode("p", _hoisted_68, "Reserved: " + toDisplayString(formatDate(res.created_at)) + " | Due: " + toDisplayString(formatDate(res.due_date)), 1)
                        ])
                      ]),
                      createBaseVNode("span", {
                        class: normalizeClass([
                          "px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider",
                          res.status === "returned" ? "bg-green-100 text-green-700" : res.status === "overdue" ? "bg-red-100 text-red-700" : "bg-orange-100 text-orange-700"
                        ])
                      }, toDisplayString(res.status), 3)
                    ]);
                  }), 128)) : (openBlock(), createElementBlock("div", _hoisted_69, [
                    createVNode(unref(Search), { class: "w-10 h-10 text-gray-200 mb-4" }),
                    _cache[15] || (_cache[15] = createBaseVNode("p", { class: "text-gray-500 font-medium" }, "No book reservations found", -1))
                  ]))
                ])) : createCommentVNode("", true)
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
