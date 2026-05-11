import { d as defineComponent, r as ref, p as useAuth, E as computed, o as onMounted, c as createElementBlock, b as createBaseVNode, m as createCommentVNode, e as createStaticVNode, f as createVNode, w as withCtx, g as resolveComponent, u as unref, t as toDisplayString, F as Fragment, v as withDirectives, B as vModelSelect, x as vModelText, k as createBlock, A as useRouter, L as useRoute, J as studentAPI, j as createTextVNode, i as openBlock } from "./main-Dk2mUbjP.js";
import { _ as _sfc_main$1 } from "./SeatMap.vue_vue_type_script_setup_true_lang-Dn2XOq6z.js";
import { u as useSwal } from "./useSwal-J4kFABxt.js";
import { C as ChevronRight } from "./chevron-right-C2YUMIZW.js";
import { A as Armchair } from "./armchair-BFgkZ4D5.js";
import { U as UserX } from "./user-x-BKU1XDpk.js";
import { C as Clock } from "./clock-DHHRCinm.js";
import { Z as Zap } from "./zap-DSIh5NSP.js";
import { C as CircleCheckBig } from "./circle-check-big-CgVU7jsB.js";
/* empty css               */
import "./user-CnueMG7y.js";
import "./createLucideIcon-6n-23kmf.js";
import "./monitor-E_O9_Anu.js";
import "./panels-top-left-CTY1cFxw.js";
import "./building-2-DPMW20Et.js";
import "./chevron-down-e5XzB-KD.js";
const _hoisted_1 = {
  key: 0,
  class: "flex items-center justify-center min-h-[400px]"
};
const _hoisted_2 = {
  key: 1,
  class: "space-y-6"
};
const _hoisted_3 = { class: "flex flex-col md:flex-row md:items-center justify-between gap-4" };
const _hoisted_4 = { class: "flex items-center text-sm text-gray-500 mb-1" };
const _hoisted_5 = { class: "grid grid-cols-1 lg:grid-cols-4 gap-8" };
const _hoisted_6 = { class: "lg:col-span-3" };
const _hoisted_7 = { class: "space-y-6" };
const _hoisted_8 = { class: "bg-white p-6 rounded-2xl shadow-lg border border-gray-100 sticky top-24" };
const _hoisted_9 = {
  key: 0,
  class: "space-y-6"
};
const _hoisted_10 = { class: "p-4 bg-blue-50 rounded-xl border border-blue-100" };
const _hoisted_11 = { class: "flex items-center mb-2" };
const _hoisted_12 = { class: "font-bold text-blue-900" };
const _hoisted_13 = { class: "text-xs text-blue-700" };
const _hoisted_14 = { class: "text-xs text-blue-600 mt-1 capitalize" };
const _hoisted_15 = {
  key: 0,
  class: "p-3 bg-red-50 rounded-xl border border-red-100 flex items-center space-x-2"
};
const _hoisted_16 = { class: "space-y-4" };
const _hoisted_17 = { class: "grid grid-cols-2 gap-4" };
const _hoisted_18 = ["min", "max"];
const _hoisted_19 = { class: "pt-6 border-t border-gray-100" };
const _hoisted_20 = ["disabled"];
const _hoisted_21 = {
  key: 1,
  class: "space-y-4"
};
const _hoisted_22 = { class: "p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl border border-gray-100 text-center relative overflow-hidden" };
const _hoisted_23 = { class: "flex items-center justify-center space-x-2 mb-4" };
const _hoisted_24 = { class: "text-2xl font-black text-gray-800" };
const _hoisted_25 = { class: "space-y-3" };
const _hoisted_26 = ["disabled"];
const _hoisted_27 = {
  key: 1,
  class: "animate-spin rounded-full h-5 w-5 border-b-2 border-white"
};
const _hoisted_28 = {
  key: 1,
  class: "text-center py-12"
};
const _hoisted_29 = { class: "w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4" };
const _hoisted_30 = { class: "bg-orange-50 p-6 rounded-2xl border border-orange-100" };
const _hoisted_31 = { class: "flex items-center mb-3" };
const _hoisted_32 = {
  key: 0,
  class: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
};
const _hoisted_33 = { class: "bg-white rounded-3xl p-8 max-w-sm w-full text-center shadow-2xl transform transition-all scale-100" };
const _hoisted_34 = { class: "w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "SeatBookingPage",
  setup(__props) {
    const route = useRoute();
    const router = useRouter();
    const loading = ref(true);
    const submitting = ref(false);
    const showSuccessModal = ref(false);
    const library = ref(null);
    const floors = ref([]);
    const sections = ref([]);
    const seats = ref([]);
    const selectedSeat = ref(null);
    const bookingDuration = ref(2);
    const { user, isTrialActive } = useAuth();
    const toLocalDateStr = (d) => {
      const pad = (n) => String(n).padStart(2, "0");
      return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
    };
    const selectedDate = ref(toLocalDateStr(/* @__PURE__ */ new Date()));
    const selectedTime = ref((/* @__PURE__ */ new Date()).toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" }));
    const minDate = computed(() => toLocalDateStr(/* @__PURE__ */ new Date()));
    const maxDate = computed(() => {
      const today = /* @__PURE__ */ new Date();
      if (!user.value) return toLocalDateStr(today);
      let allowedDays = 0;
      if (user.value.active_subscription?.subscription_plan) {
        const planDays = user.value.active_subscription.subscription_plan.advance_booking_days;
        if (planDays === -1) {
          const nextYear = new Date(today);
          nextYear.setFullYear(today.getFullYear() + 1);
          return toLocalDateStr(nextYear);
        }
        allowedDays = planDays;
      } else if (isTrialActive.value) {
        allowedDays = 0;
      }
      const max = new Date(today);
      max.setDate(today.getDate() + allowedDays);
      return toLocalDateStr(max);
    });
    const fetchSeats = async () => {
      try {
        const id = parseInt(route.params.libraryId);
        const response = await studentAPI.getSeats(id);
        library.value = response.library;
        floors.value = response.floors;
        sections.value = response.sections;
        seats.value = response.seats;
      } catch (error) {
        console.error("Failed to fetch seats:", error);
      } finally {
        loading.value = false;
      }
    };
    const getFloorName = (id) => floors.value.find((f) => f.id === id)?.name || "";
    const getSectionName = (id) => sections.value.find((s) => s.id === id)?.name || "";
    const isGenderMismatch = (seat) => {
      const section = sections.value.find((s) => s.id === seat.section_id);
      if (!section || !section.gender || section.gender === "mixed") return false;
      if (!user.value || !user.value.gender) return true;
      return user.value.gender !== section.gender;
    };
    const handleSeatClick = (seat) => {
      selectedSeat.value = selectedSeat.value?.id === seat.id ? null : seat;
    };
    const { showError, showSuccess } = useSwal();
    const confirmBooking = async () => {
      if (!selectedSeat.value) return;
      const startTime = /* @__PURE__ */ new Date(`${selectedDate.value}T${selectedTime.value}`);
      const endTime = new Date(startTime.getTime() + bookingDuration.value * 60 * 60 * 1e3);
      const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      const dayName = days[startTime.getDay()];
      const operatingHour = library.value?.operating_days?.find((d) => d.day === dayName);
      if (!operatingHour || !operatingHour.isOpen) {
        showError("Library Closed", `The library is closed on ${dayName}s. Please select another day.`);
        return;
      }
      const [openH, openM] = operatingHour.openTime.split(":").map(Number);
      const [closeH, closeM] = operatingHour.closeTime.split(":").map(Number);
      const openDate = new Date(startTime);
      openDate.setHours(openH, openM, 0, 0);
      const closeDate = new Date(startTime);
      closeDate.setHours(closeH, closeM, 0, 0);
      if (closeDate <= openDate) {
        closeDate.setDate(closeDate.getDate() + 1);
      }
      if (startTime < openDate || endTime > closeDate) {
        showError("Outside Operation Hours", `This library is only open from ${operatingHour.openTime} to ${operatingHour.closeTime} on ${dayName}s.`);
        return;
      }
      submitting.value = true;
      try {
        const formatLocalDatetime = (d) => {
          const pad = (n) => String(n).padStart(2, "0");
          return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
        };
        await studentAPI.createBooking({
          seat_id: selectedSeat.value.id,
          library_id: library.value.id,
          booking_time: formatLocalDatetime(startTime),
          scheduled_end_time: formatLocalDatetime(endTime)
        });
        showSuccessModal.value = true;
      } catch (error) {
        console.error("Booking failed:", error);
        const errorMessage = error.response?.data?.message || error.message || "Failed to create booking. Please try again.";
        showError("Booking Failed", errorMessage);
      } finally {
        submitting.value = false;
      }
    };
    const joinQueue = async () => {
      if (!selectedSeat.value) return;
      submitting.value = true;
      try {
        const response = await studentAPI.joinQueue(selectedSeat.value.id);
        showSuccess("Queue Joined", `You are at position #${response.position} in the queue. We'll notify you when the seat is free.`);
        selectedSeat.value = null;
        fetchSeats();
      } catch (error) {
        console.error("Queue joining failed:", error);
        const errorMessage = error.response?.data?.message || error.message || "Could not join the queue.";
        showError("Queue Error", errorMessage);
      } finally {
        submitting.value = false;
      }
    };
    const goToBookings = () => {
      router.push("/student/my-bookings");
    };
    onMounted(fetchSeats);
    return (_ctx, _cache) => {
      const _component_router_link = resolveComponent("router-link");
      return loading.value ? (openBlock(), createElementBlock("div", _hoisted_1, [..._cache[4] || (_cache[4] = [
        createBaseVNode("div", { class: "animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600" }, null, -1)
      ])])) : (openBlock(), createElementBlock("div", _hoisted_2, [
        createBaseVNode("div", _hoisted_3, [
          createBaseVNode("div", null, [
            createBaseVNode("div", _hoisted_4, [
              createVNode(_component_router_link, {
                to: "/student/libraries",
                class: "hover:text-blue-600"
              }, {
                default: withCtx(() => [..._cache[5] || (_cache[5] = [
                  createTextVNode("Libraries", -1)
                ])]),
                _: 1
              }),
              createVNode(unref(ChevronRight), { class: "w-4 h-4 mx-1" }),
              createBaseVNode("span", null, toDisplayString(library.value?.name), 1)
            ]),
            _cache[6] || (_cache[6] = createBaseVNode("h1", { class: "text-2xl font-bold text-gray-800" }, "Select Your Seat", -1))
          ]),
          _cache[7] || (_cache[7] = createStaticVNode('<div class="flex items-center space-x-4 bg-white p-2 rounded-xl border border-gray-100 shadow-sm"><div class="flex items-center px-3 py-1"><div class="w-3 h-3 rounded-full bg-[#29B072] mr-2"></div><span class="text-xs font-medium text-gray-600">Available</span></div><div class="flex items-center px-3 py-1"><div class="w-3 h-3 rounded-full bg-[#FF9D43] mr-2"></div><span class="text-xs font-medium text-gray-600">Occupied</span></div><div class="flex items-center px-3 py-1"><div class="w-3 h-3 rounded-full bg-[#617DFF] mr-2"></div><span class="text-xs font-medium text-gray-600">Reserved</span></div><div class="flex items-center px-3 py-1"><div class="w-3 h-3 rounded-full bg-blue-600 mr-2"></div><span class="text-xs font-medium text-gray-600">Selected</span></div></div>', 1))
        ]),
        createBaseVNode("div", _hoisted_5, [
          createBaseVNode("div", _hoisted_6, [
            createVNode(_sfc_main$1, {
              seats: seats.value,
              floors: floors.value,
              sections: sections.value,
              "selected-seat": selectedSeat.value,
              "seat-clickable": true,
              draggable: false,
              "layout-mode": library.value?.seat_layout_mode,
              onSeatClick: handleSeatClick
            }, null, 8, ["seats", "floors", "sections", "selected-seat", "layout-mode"])
          ]),
          createBaseVNode("div", _hoisted_7, [
            createBaseVNode("div", _hoisted_8, [
              _cache[17] || (_cache[17] = createBaseVNode("h3", { class: "text-lg font-bold text-gray-800 mb-6" }, "Booking Summary", -1)),
              selectedSeat.value ? (openBlock(), createElementBlock("div", _hoisted_9, [
                createBaseVNode("div", _hoisted_10, [
                  createBaseVNode("div", _hoisted_11, [
                    createVNode(unref(Armchair), { class: "w-5 h-5 text-blue-600 mr-2" }),
                    createBaseVNode("span", _hoisted_12, "Seat " + toDisplayString(selectedSeat.value.seat_number), 1)
                  ]),
                  createBaseVNode("p", _hoisted_13, toDisplayString(getFloorName(selectedSeat.value.floor_id)) + " • " + toDisplayString(getSectionName(selectedSeat.value.section_id)), 1),
                  createBaseVNode("p", _hoisted_14, toDisplayString(selectedSeat.value.seat_type), 1)
                ]),
                isGenderMismatch(selectedSeat.value) ? (openBlock(), createElementBlock("div", _hoisted_15, [
                  createVNode(unref(UserX), { class: "w-4 h-4 text-red-500 flex-shrink-0" }),
                  _cache[8] || (_cache[8] = createBaseVNode("p", { class: "text-xs text-red-600 font-medium" }, "This section is restricted to another gender.", -1))
                ])) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                  createBaseVNode("div", _hoisted_16, [
                    createBaseVNode("div", null, [
                      _cache[10] || (_cache[10] = createBaseVNode("label", { class: "text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 block" }, "Duration", -1)),
                      withDirectives(createBaseVNode("select", {
                        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => bookingDuration.value = $event),
                        class: "w-full p-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                      }, [..._cache[9] || (_cache[9] = [
                        createBaseVNode("option", { value: 1 }, "1 Hour", -1),
                        createBaseVNode("option", { value: 2 }, "2 Hours", -1),
                        createBaseVNode("option", { value: 4 }, "4 Hours", -1),
                        createBaseVNode("option", { value: 8 }, "8 Hours", -1)
                      ])], 512), [
                        [vModelSelect, bookingDuration.value]
                      ])
                    ]),
                    createBaseVNode("div", _hoisted_17, [
                      createBaseVNode("div", null, [
                        _cache[11] || (_cache[11] = createBaseVNode("label", { class: "text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 block" }, "Date", -1)),
                        withDirectives(createBaseVNode("input", {
                          type: "date",
                          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => selectedDate.value = $event),
                          min: minDate.value,
                          max: maxDate.value,
                          class: "w-full p-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                        }, null, 8, _hoisted_18), [
                          [vModelText, selectedDate.value]
                        ])
                      ]),
                      createBaseVNode("div", null, [
                        _cache[12] || (_cache[12] = createBaseVNode("label", { class: "text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 block" }, "Start Time", -1)),
                        withDirectives(createBaseVNode("input", {
                          type: "time",
                          "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => selectedTime.value = $event),
                          class: "w-full p-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                        }, null, 512), [
                          [vModelText, selectedTime.value]
                        ])
                      ])
                    ])
                  ]),
                  createBaseVNode("div", _hoisted_19, [
                    selectedSeat.value.status === "available" ? (openBlock(), createElementBlock("button", {
                      key: 0,
                      onClick: confirmBooking,
                      disabled: submitting.value,
                      class: "w-full bg-blue-600 text-white py-4 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
                    }, toDisplayString(submitting.value ? "Processing..." : "Confirm Booking"), 9, _hoisted_20)) : (openBlock(), createElementBlock("div", _hoisted_21, [
                      createBaseVNode("div", _hoisted_22, [
                        _cache[14] || (_cache[14] = createBaseVNode("div", { class: "absolute top-0 right-0 w-16 h-16 bg-orange-500/5 rounded-full -mr-8 -mt-8" }, null, -1)),
                        _cache[15] || (_cache[15] = createBaseVNode("p", { class: "text-xs text-gray-500 font-bold uppercase tracking-widest mb-3" }, "Seat Occupied", -1)),
                        createBaseVNode("div", _hoisted_23, [
                          createVNode(unref(Clock), { class: "w-5 h-5 text-orange-500" }),
                          createBaseVNode("p", _hoisted_24, toDisplayString(Math.floor(selectedSeat.value.remaining_minutes / 60)) + "h " + toDisplayString(Math.floor(selectedSeat.value.remaining_minutes % 60)) + "m ", 1)
                        ]),
                        createBaseVNode("div", _hoisted_25, [
                          _cache[13] || (_cache[13] = createBaseVNode("div", { class: "p-3 bg-orange-100 rounded-xl border border-orange-200 mb-4" }, [
                            createBaseVNode("p", { class: "text-xs text-orange-800 font-black uppercase tracking-widest" }, "Waitlist Active"),
                            createBaseVNode("p", { class: "text-[10px] text-orange-700 font-medium uppercase" }, "Join now to secure this seat next")
                          ], -1)),
                          createBaseVNode("button", {
                            onClick: joinQueue,
                            disabled: submitting.value,
                            class: "w-full bg-orange-600 text-white py-4 rounded-xl font-bold hover:bg-orange-700 transition-all shadow-xl shadow-orange-100 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 active:scale-95"
                          }, [
                            !submitting.value ? (openBlock(), createBlock(unref(Zap), {
                              key: 0,
                              class: "w-5 h-5"
                            })) : (openBlock(), createElementBlock("span", _hoisted_27)),
                            createBaseVNode("span", null, toDisplayString(submitting.value ? "Joining..." : "Claim Priority Spot"), 1)
                          ], 8, _hoisted_26),
                          createBaseVNode("button", {
                            onClick: _cache[3] || (_cache[3] = ($event) => unref(router).push("/student/my-queue")),
                            class: "text-[10px] text-blue-600 font-bold hover:underline uppercase tracking-tighter w-full text-center mt-2"
                          }, " View My Active Waitlists → ")
                        ])
                      ])
                    ]))
                  ])
                ], 64))
              ])) : (openBlock(), createElementBlock("div", _hoisted_28, [
                createBaseVNode("div", _hoisted_29, [
                  createVNode(unref(Armchair), { class: "w-8 h-8 text-gray-300" })
                ]),
                _cache[16] || (_cache[16] = createBaseVNode("p", { class: "text-sm text-gray-500" }, "Please select a seat from the map to continue", -1))
              ]))
            ]),
            createBaseVNode("div", _hoisted_30, [
              createBaseVNode("div", _hoisted_31, [
                createVNode(unref(Zap), { class: "w-5 h-5 text-orange-600 mr-2" }),
                _cache[18] || (_cache[18] = createBaseVNode("h4", { class: "font-bold text-orange-900 text-sm" }, "Quick Tip", -1))
              ]),
              _cache[19] || (_cache[19] = createBaseVNode("p", { class: "text-xs text-orange-800 leading-relaxed" }, " Seats near windows are popular in the morning. Group study areas require all members to check in within 15 minutes. ", -1))
            ])
          ])
        ]),
        showSuccessModal.value ? (openBlock(), createElementBlock("div", _hoisted_32, [
          createBaseVNode("div", _hoisted_33, [
            createBaseVNode("div", _hoisted_34, [
              createVNode(unref(CircleCheckBig), { class: "w-10 h-10" })
            ]),
            _cache[20] || (_cache[20] = createBaseVNode("h2", { class: "text-2xl font-bold text-gray-800 mb-2" }, "Booking Confirmed!", -1)),
            _cache[21] || (_cache[21] = createBaseVNode("p", { class: "text-gray-600 mb-8" }, "Your seat has been reserved. Please check in within 15 minutes of your start time.", -1)),
            createBaseVNode("button", {
              onClick: goToBookings,
              class: "w-full bg-gray-900 text-white py-4 rounded-2xl font-bold hover:bg-black transition-all"
            }, " View My Bookings ")
          ])
        ])) : createCommentVNode("", true)
      ]));
    };
  }
});
export {
  _sfc_main as default
};
