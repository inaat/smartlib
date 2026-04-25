import { d as defineComponent, r as ref, o as onMounted, c as createElementBlock, b as createBaseVNode, f as createVNode, u as unref, w as withCtx, g as resolveComponent, F as Fragment, h as renderList, J as studentAPI, j as createTextVNode, I as normalizeStyle, n as normalizeClass, m as createCommentVNode, t as toDisplayString, A as useRouter, i as openBlock } from "./main-DCJXrkf-.js";
import { u as useSwal } from "./useSwal-BUxo5JBv.js";
import { C as Clock } from "./clock-B7PYed5-.js";
import { B as Bell } from "./bell-Bbc0WqK8.js";
import { Z as Zap } from "./zap-CE81Tw0M.js";
import { A as Armchair } from "./armchair-BF2GfIuy.js";
import { M as MapPin } from "./map-pin-YMhwiUzx.js";
/* empty css               */
import "./createLucideIcon-CDsoUk2K.js";
const _hoisted_1 = { class: "space-y-8 pb-12" };
const _hoisted_2 = { class: "space-y-6" };
const _hoisted_3 = {
  key: 0,
  class: "flex justify-center py-20"
};
const _hoisted_4 = {
  key: 1,
  class: "bg-white rounded-3xl p-16 text-center border border-dashed border-gray-200"
};
const _hoisted_5 = { class: "w-20 h-20 bg-orange-50 rounded-full flex items-center justify-center mx-auto mb-6" };
const _hoisted_6 = {
  key: 2,
  class: "grid grid-cols-1 gap-6"
};
const _hoisted_7 = { class: "absolute bottom-0 left-0 h-1.5 bg-orange-100 w-full" };
const _hoisted_8 = { class: "flex flex-col lg:flex-row lg:items-center justify-between gap-8" };
const _hoisted_9 = { class: "flex items-start gap-6" };
const _hoisted_10 = { class: "space-y-1" };
const _hoisted_11 = { class: "flex items-center gap-2" };
const _hoisted_12 = { class: "font-black text-gray-900 text-2xl" };
const _hoisted_13 = { class: "text-gray-500 text-lg flex items-center font-medium" };
const _hoisted_14 = {
  key: 0,
  class: "mt-4 p-3 bg-green-50 rounded-xl border border-green-100 text-green-700 text-xs font-bold flex items-center"
};
const _hoisted_15 = { class: "flex flex-col lg:items-end gap-6 border-t lg:border-t-0 pt-6 lg:pt-0 border-gray-50" };
const _hoisted_16 = { class: "lg:text-right" };
const _hoisted_17 = { class: "text-4xl font-black text-gray-800 font-mono tracking-tighter" };
const _hoisted_18 = { class: "flex flex-wrap gap-3" };
const _hoisted_19 = ["onClick"];
const _hoisted_20 = ["onClick"];
const _hoisted_21 = { class: "grid grid-cols-1 md:grid-cols-3 gap-6 pt-10" };
const _hoisted_22 = { class: "bg-blue-50 p-6 rounded-3xl border border-blue-100" };
const _hoisted_23 = { class: "w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-4" };
const _hoisted_24 = { class: "bg-purple-50 p-6 rounded-3xl border border-purple-100" };
const _hoisted_25 = { class: "w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600 mb-4" };
const _hoisted_26 = { class: "bg-emerald-50 p-6 rounded-3xl border border-emerald-100" };
const _hoisted_27 = { class: "w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600 mb-4" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "MyQueuePage",
  setup(__props) {
    const router = useRouter();
    const { showConfirm, showSuccess, showError } = useSwal();
    const loading = ref(true);
    const queueEntries = ref([]);
    const fetchQueue = async () => {
      try {
        loading.value = true;
        queueEntries.value = await studentAPI.getMyQueue();
      } catch (error) {
        console.error("Failed to fetch queue:", error);
      } finally {
        loading.value = false;
      }
    };
    const formatWaitTime = (minutes) => {
      if (minutes <= 0) return "READY";
      if (minutes < 60) return `${minutes}m`;
      const h = Math.floor(minutes / 60);
      const m = minutes % 60;
      return `${h}h ${m}m`;
    };
    const getProgressWidth = (entry) => {
      if (entry.status === "notified") return "100%";
      const pos = entry.queue_position;
      if (pos === 1) return "75%";
      if (pos === 2) return "50%";
      return "25%";
    };
    const handleCheckIn = (seatId) => {
      router.push({
        name: "student-qr-checkin",
        query: { auto_checkin: "true", seat_id: seatId.toString() }
      });
    };
    const handleCancel = async (id) => {
      const confirmed = await showConfirm(
        "Leave Waitlist?",
        "Are you sure you want to leave the queue? You will lose your current position.",
        "Yes, Leave"
      );
      if (confirmed) {
        try {
          await studentAPI.leaveQueue(id);
          showSuccess("Left Waitlist", "You have been removed from the queue.");
          fetchQueue();
        } catch (error) {
          showError("Error", "Failed to leave the queue.");
        }
      }
    };
    onMounted(fetchQueue);
    return (_ctx, _cache) => {
      const _component_router_link = resolveComponent("router-link");
      return openBlock(), createElementBlock("div", _hoisted_1, [
        _cache[12] || (_cache[12] = createBaseVNode("div", { class: "bg-white rounded-3xl p-8 shadow-sm border border-gray-100" }, [
          createBaseVNode("div", { class: "flex items-center justify-between" }, [
            createBaseVNode("div", null, [
              createBaseVNode("h1", { class: "text-3xl font-bold text-gray-800" }, "My Waitlist"),
              createBaseVNode("p", { class: "text-gray-500 mt-1" }, "Track your position and estimated wait time for reserved seats")
            ])
          ])
        ], -1)),
        createBaseVNode("div", _hoisted_2, [
          loading.value ? (openBlock(), createElementBlock("div", _hoisted_3, [..._cache[0] || (_cache[0] = [
            createBaseVNode("div", { class: "w-12 h-12 border-4 border-orange-500 border-t-transparent rounded-full animate-spin" }, null, -1)
          ])])) : queueEntries.value.length === 0 ? (openBlock(), createElementBlock("div", _hoisted_4, [
            createBaseVNode("div", _hoisted_5, [
              createVNode(unref(Clock), { class: "w-10 h-10 text-orange-200" })
            ]),
            _cache[2] || (_cache[2] = createBaseVNode("h3", { class: "text-xl font-bold text-gray-800 mb-2" }, "Waitlist is Empty", -1)),
            _cache[3] || (_cache[3] = createBaseVNode("p", { class: "text-gray-500 max-w-xs mx-auto mb-8" }, "You haven't joined any seat queues yet. When a seat is ending soon, you can join the waitlist from the library map.", -1)),
            createVNode(_component_router_link, {
              to: "/student/libraries",
              class: "inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-xl font-bold hover:bg-black transition-all"
            }, {
              default: withCtx(() => [..._cache[1] || (_cache[1] = [
                createTextVNode(" Explore Libraries ", -1)
              ])]),
              _: 1
            })
          ])) : (openBlock(), createElementBlock("div", _hoisted_6, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(queueEntries.value, (entry) => {
              return openBlock(), createElementBlock("div", {
                key: entry.id,
                class: "bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:border-orange-100 transition-all group relative overflow-hidden"
              }, [
                createBaseVNode("div", _hoisted_7, [
                  createBaseVNode("div", {
                    class: "h-full bg-orange-500 transition-all duration-1000",
                    style: normalizeStyle({ width: getProgressWidth(entry) })
                  }, null, 4)
                ]),
                createBaseVNode("div", _hoisted_8, [
                  createBaseVNode("div", _hoisted_9, [
                    createBaseVNode("div", {
                      class: normalizeClass([
                        "p-5 rounded-2xl transition-all duration-300",
                        entry.status === "notified" ? "bg-green-100 text-green-600 animate-pulse" : "bg-orange-50 text-orange-600"
                      ])
                    }, [
                      createVNode(unref(Clock), { class: "w-10 h-10" })
                    ], 2),
                    createBaseVNode("div", _hoisted_10, [
                      createBaseVNode("div", _hoisted_11, [
                        createBaseVNode("h3", _hoisted_12, "Seat " + toDisplayString(entry.seat?.seat_number), 1),
                        createBaseVNode("span", {
                          class: normalizeClass([
                            "px-3 py-1 rounded-full text-xs font-black uppercase tracking-tight",
                            entry.status === "notified" ? "bg-green-500 text-white" : "bg-orange-100 text-orange-700"
                          ])
                        }, toDisplayString(entry.status === "notified" ? "Ready to Check In" : `Position #${entry.queue_position}`), 3)
                      ]),
                      createBaseVNode("p", _hoisted_13, [
                        createVNode(unref(MapPin), { class: "w-5 h-5 mr-1.5 text-red-400" }),
                        createTextVNode(" " + toDisplayString(entry.seat?.library?.name) + " • " + toDisplayString(entry.seat?.floor?.name), 1)
                      ]),
                      entry.status === "notified" ? (openBlock(), createElementBlock("div", _hoisted_14, [
                        createVNode(unref(Zap), { class: "w-4 h-4 mr-2" }),
                        _cache[4] || (_cache[4] = createTextVNode(" Seat is now free! You have 10 minutes to check in before your spot is given to the next person. ", -1))
                      ])) : createCommentVNode("", true)
                    ])
                  ]),
                  createBaseVNode("div", _hoisted_15, [
                    createBaseVNode("div", _hoisted_16, [
                      _cache[5] || (_cache[5] = createBaseVNode("p", { class: "text-xs text-gray-400 font-black uppercase tracking-widest mb-1" }, "Estimated Wait", -1)),
                      createBaseVNode("p", _hoisted_17, toDisplayString(entry.status === "notified" ? "NOW" : formatWaitTime(entry.estimated_wait_time)), 1)
                    ]),
                    createBaseVNode("div", _hoisted_18, [
                      entry.status === "notified" ? (openBlock(), createElementBlock("button", {
                        key: 0,
                        onClick: ($event) => handleCheckIn(entry.seat_id),
                        class: "flex-1 lg:flex-none px-10 py-4 bg-green-600 text-white rounded-2xl font-bold hover:bg-green-700 transition-all shadow-lg shadow-green-100 active:scale-95"
                      }, " Check In Now ", 8, _hoisted_19)) : createCommentVNode("", true),
                      createBaseVNode("button", {
                        onClick: ($event) => handleCancel(entry.id),
                        class: "flex-1 lg:flex-none px-10 py-4 bg-white border-2 border-gray-100 text-gray-500 rounded-2xl font-bold hover:bg-red-50 hover:text-red-600 hover:border-red-100 transition-all active:scale-95"
                      }, " Leave Queue ", 8, _hoisted_20)
                    ])
                  ])
                ])
              ]);
            }), 128))
          ]))
        ]),
        createBaseVNode("div", _hoisted_21, [
          createBaseVNode("div", _hoisted_22, [
            createBaseVNode("div", _hoisted_23, [
              createVNode(unref(Bell), { class: "w-5 h-5" })
            ]),
            _cache[6] || (_cache[6] = createBaseVNode("h4", { class: "font-bold text-blue-900 mb-2" }, "Smart Notifications", -1)),
            _cache[7] || (_cache[7] = createBaseVNode("p", { class: "text-xs text-blue-700 leading-relaxed" }, "We'll notify you via push and SMS as soon as your seat is ready. Make sure you're near the library.", -1))
          ]),
          createBaseVNode("div", _hoisted_24, [
            createBaseVNode("div", _hoisted_25, [
              createVNode(unref(Zap), { class: "w-5 h-5" })
            ]),
            _cache[8] || (_cache[8] = createBaseVNode("h4", { class: "font-bold text-purple-900 mb-2" }, "10-Minute Window", -1)),
            _cache[9] || (_cache[9] = createBaseVNode("p", { class: "text-xs text-purple-700 leading-relaxed" }, "Once notified, you have exactly 10 minutes to check in. If you miss it, the seat goes to the next student.", -1))
          ]),
          createBaseVNode("div", _hoisted_26, [
            createBaseVNode("div", _hoisted_27, [
              createVNode(unref(Armchair), { class: "w-5 h-5" })
            ]),
            _cache[10] || (_cache[10] = createBaseVNode("h4", { class: "font-bold text-emerald-900 mb-2" }, "Queue Priority", -1)),
            _cache[11] || (_cache[11] = createBaseVNode("p", { class: "text-xs text-emerald-700 leading-relaxed" }, "Current students cannot extend their bookings if someone is waiting in the queue. Your priority is protected.", -1))
          ])
        ])
      ]);
    };
  }
});
export {
  _sfc_main as default
};
