import { d as defineComponent, r as ref, o as onMounted, a as createElementBlock, b as createBaseVNode, f as createVNode, u as unref, w as withCtx, g as resolveComponent, F as Fragment, k as renderList, L as studentAPI, i as createTextVNode, q as normalizeStyle, n as normalizeClass, j as createCommentVNode, t as toDisplayString, C as useRouter, l as openBlock } from "./main-BGbL_8Ba.js";
import { u as useSwal } from "./useSwal-pQW_XkRe.js";
import { C as Clock } from "./clock-Cir2UmjW.js";
import { B as Bell } from "./bell-CeCDzSWE.js";
import { Z as Zap } from "./zap-DwN4yWwn.js";
import { A as Armchair } from "./armchair-enLzRy9P.js";
import { M as MapPin } from "./map-pin-BwNQ8wyg.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
/* empty css               */
import "./createLucideIcon-v8VVJu1z.js";
const _hoisted_1 = { class: "space-y-6 pb-12 font-outfit" };
const _hoisted_2 = { class: "space-y-4" };
const _hoisted_3 = {
  key: 0,
  class: "flex flex-col items-center justify-center py-24 space-y-4"
};
const _hoisted_4 = {
  key: 1,
  class: "bg-slate-100 rounded-2xl p-16 text-center border border-dashed border-slate-200/80"
};
const _hoisted_5 = { class: "w-16 h-16 bg-slate-100 text-slate-400 rounded-full flex items-center justify-center mx-auto mb-4 border border-slate-200 shadow-inner" };
const _hoisted_6 = {
  key: 2,
  class: "grid grid-cols-1 gap-6"
};
const _hoisted_7 = { class: "absolute bottom-0 left-0 h-1 bg-slate-100 w-full" };
const _hoisted_8 = { class: "flex flex-col lg:flex-row lg:items-center justify-between gap-6" };
const _hoisted_9 = { class: "flex items-start gap-4" };
const _hoisted_10 = { class: "space-y-1 min-w-0" };
const _hoisted_11 = { class: "flex items-center gap-2" };
const _hoisted_12 = { class: "font-semibold text-slate-800 text-lg" };
const _hoisted_13 = { class: "text-slate-500 text-xs flex items-center font-semibold" };
const _hoisted_14 = {
  key: 0,
  class: "mt-3 p-3 bg-green-50/60 border border-green-100 text-green-700 text-[11px] font-medium rounded-xl flex items-center leading-relaxed"
};
const _hoisted_15 = { class: "flex flex-col lg:items-end gap-4 border-t lg:border-t-0 pt-4 lg:pt-0 border-slate-50 flex-shrink-0" };
const _hoisted_16 = { class: "lg:text-right" };
const _hoisted_17 = { class: "text-3xl font-black text-slate-800 font-mono tracking-tight leading-none" };
const _hoisted_18 = { class: "flex flex-wrap gap-2.5" };
const _hoisted_19 = ["onClick"];
const _hoisted_20 = ["onClick"];
const _hoisted_21 = { class: "grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-slate-100" };
const _hoisted_22 = { class: "bg-blue-50/40 p-5 rounded-2xl border border-blue-100/50 text-left" };
const _hoisted_23 = { class: "w-9 h-9 bg-blue-100/60 border border-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-3" };
const _hoisted_24 = { class: "bg-purple-50/40 p-5 rounded-2xl border border-purple-100/50 text-left" };
const _hoisted_25 = { class: "w-9 h-9 bg-purple-100/60 border border-purple-100 text-purple-600 rounded-xl flex items-center justify-center mb-3" };
const _hoisted_26 = { class: "bg-emerald-50/40 p-5 rounded-2xl border border-emerald-100/50 text-left" };
const _hoisted_27 = { class: "w-9 h-9 bg-emerald-100/60 border border-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center mb-3" };
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
        createBaseVNode("div", _hoisted_2, [
          loading.value ? (openBlock(), createElementBlock("div", _hoisted_3, [..._cache[0] || (_cache[0] = [
            createBaseVNode("div", { class: "animate-spin rounded-full h-10 w-10 border-2 border-orange-500 border-t-transparent" }, null, -1),
            createBaseVNode("p", { class: "text-xs font-semibold text-slate-400 font-outfit uppercase tracking-wider animate-pulse" }, "Loading waitlist...", -1)
          ])])) : queueEntries.value.length === 0 ? (openBlock(), createElementBlock("div", _hoisted_4, [
            createBaseVNode("div", _hoisted_5, [
              createVNode(unref(Clock), { class: "w-7 h-7" })
            ]),
            _cache[2] || (_cache[2] = createBaseVNode("h3", { class: "text-base font-semibold text-slate-800 mb-1" }, "Waitlist is Empty", -1)),
            _cache[3] || (_cache[3] = createBaseVNode("p", { class: "text-xs text-slate-400 max-w-xs mx-auto mb-6 leading-relaxed" }, "You haven't joined any seat queues yet. When a seat is ending soon, you can join the waitlist from the library map.", -1)),
            createVNode(_component_router_link, {
              to: "/student/libraries",
              class: "inline-flex items-center px-5 py-2.5 bg-slate-900 text-white rounded-xl text-xs font-semibold hover:opacity-90 active:scale-98 transition-all uppercase tracking-wider"
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
                class: "bg-white rounded-2xl p-5 border border-slate-100 hover:border-slate-200/80 shadow-sm hover:shadow-xl hover:shadow-slate-100/50 transition-all duration-350 group relative overflow-hidden text-left"
              }, [
                createBaseVNode("div", _hoisted_7, [
                  createBaseVNode("div", {
                    class: "h-full bg-gradient-to-r from-orange-500 to-amber-500 transition-all duration-1000",
                    style: normalizeStyle({ width: getProgressWidth(entry) })
                  }, null, 4)
                ]),
                createBaseVNode("div", _hoisted_8, [
                  createBaseVNode("div", _hoisted_9, [
                    createBaseVNode("div", {
                      class: normalizeClass([
                        "p-4 rounded-xl border flex-shrink-0 transition-all duration-300",
                        entry.status === "notified" ? "bg-green-50 border-green-200 text-green-600 animate-pulse" : "bg-orange-50/60 border-orange-100 text-orange-600"
                      ])
                    }, [
                      createVNode(unref(Clock), { class: "w-8 h-8" })
                    ], 2),
                    createBaseVNode("div", _hoisted_10, [
                      createBaseVNode("div", _hoisted_11, [
                        createBaseVNode("h3", _hoisted_12, "Seat " + toDisplayString(entry.seat?.seat_number), 1),
                        createBaseVNode("span", {
                          class: normalizeClass([
                            "px-2 py-0.5 rounded-md text-[9px] font-semibold uppercase tracking-wide border",
                            entry.status === "notified" ? "bg-green-100 text-green-700 border-green-100" : "bg-orange-50 text-orange-700 border-orange-100"
                          ])
                        }, toDisplayString(entry.status === "notified" ? "Ready" : `Pos #${entry.queue_position}`), 3)
                      ]),
                      createBaseVNode("p", _hoisted_13, [
                        createVNode(unref(MapPin), { class: "w-4 h-4 mr-1 text-slate-400" }),
                        createTextVNode(" " + toDisplayString(entry.seat?.library?.name) + " • " + toDisplayString(entry.seat?.floor?.name), 1)
                      ]),
                      entry.status === "notified" ? (openBlock(), createElementBlock("div", _hoisted_14, [
                        createVNode(unref(Zap), { class: "w-4 h-4 mr-2 text-green-600 flex-shrink-0" }),
                        _cache[4] || (_cache[4] = createTextVNode(" Seat is now free! You have 10 minutes to check in before your spot is given to the next person. ", -1))
                      ])) : createCommentVNode("", true)
                    ])
                  ]),
                  createBaseVNode("div", _hoisted_15, [
                    createBaseVNode("div", _hoisted_16, [
                      _cache[5] || (_cache[5] = createBaseVNode("p", { class: "text-[9px] font-semibold uppercase tracking-widest mb-1 text-slate-400" }, "Estimated Wait", -1)),
                      createBaseVNode("p", _hoisted_17, toDisplayString(entry.status === "notified" ? "NOW" : formatWaitTime(entry.estimated_wait_time)), 1)
                    ]),
                    createBaseVNode("div", _hoisted_18, [
                      entry.status === "notified" ? (openBlock(), createElementBlock("button", {
                        key: 0,
                        onClick: ($event) => handleCheckIn(entry.seat_id),
                        class: "flex-1 lg:flex-none px-6 py-2 bg-emerald-500 text-white rounded-xl text-xs font-semibold shadow-md shadow-emerald-500/10 hover:bg-emerald-600 active:scale-98 transition-all"
                      }, " Check In Now ", 8, _hoisted_19)) : createCommentVNode("", true),
                      createBaseVNode("button", {
                        onClick: ($event) => handleCancel(entry.id),
                        class: "flex-1 lg:flex-none px-6 py-2 bg-white border border-slate-200 hover:border-red-200 text-slate-500 hover:text-red-500 rounded-xl text-xs font-semibold active:scale-98 transition-all"
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
              createVNode(unref(Bell), { class: "w-4.5 h-4.5" })
            ]),
            _cache[6] || (_cache[6] = createBaseVNode("h4", { class: "font-semibold text-blue-900 text-xs uppercase tracking-wide mb-1.5" }, "Smart Notifications", -1)),
            _cache[7] || (_cache[7] = createBaseVNode("p", { class: "text-[11px] text-blue-700/90 leading-relaxed font-semibold" }, "We'll notify you via push and SMS as soon as your seat is ready. Make sure you're near the library.", -1))
          ]),
          createBaseVNode("div", _hoisted_24, [
            createBaseVNode("div", _hoisted_25, [
              createVNode(unref(Zap), { class: "w-4.5 h-4.5" })
            ]),
            _cache[8] || (_cache[8] = createBaseVNode("h4", { class: "font-semibold text-purple-900 text-xs uppercase tracking-wide mb-1.5" }, "10-Minute Window", -1)),
            _cache[9] || (_cache[9] = createBaseVNode("p", { class: "text-[11px] text-purple-700/90 leading-relaxed font-semibold" }, "Once notified, you have exactly 10 minutes to check in. If you miss it, the seat goes to the next student.", -1))
          ]),
          createBaseVNode("div", _hoisted_26, [
            createBaseVNode("div", _hoisted_27, [
              createVNode(unref(Armchair), { class: "w-4.5 h-4.5" })
            ]),
            _cache[10] || (_cache[10] = createBaseVNode("h4", { class: "font-semibold text-emerald-900 text-xs uppercase tracking-wide mb-1.5" }, "Queue Priority", -1)),
            _cache[11] || (_cache[11] = createBaseVNode("p", { class: "text-[11px] text-emerald-700/90 leading-relaxed font-semibold" }, "Current students cannot extend their bookings if someone is waiting in the queue. Your priority is protected.", -1))
          ])
        ])
      ]);
    };
  }
});
const MyQueuePage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-33985720"]]);
export {
  MyQueuePage as default
};
