import { d as defineComponent, r as ref, o as onMounted, K as onUnmounted, b as createElementBlock, e as createBaseVNode, g as createVNode, u as unref, C as Clock, w as withCtx, h as resolveComponent, F as Fragment, k as renderList, S as studentAPI, j as createTextVNode, n as normalizeClass, t as toDisplayString, p as createCommentVNode, G as useRouter, m as openBlock, _ as _export_sfc } from "./main-BeUqjoax.js";
import { u as useSwal } from "./useSwal-pQW_XkRe.js";
import { Z as Zap } from "./zap-1J--HJED.js";
import { S as ShieldCheck } from "./shield-check-B5CblrBZ.js";
import { A as Armchair } from "./armchair-Ci3hmWMF.js";
import { M as MapPin } from "./map-pin-hjTU3OTG.js";
/* empty css               */
const _hoisted_1 = { class: "space-y-6 pb-12 font-outfit" };
const _hoisted_2 = { class: "space-y-4" };
const _hoisted_3 = {
  key: 0,
  class: "flex flex-col items-center justify-center py-24 space-y-4"
};
const _hoisted_4 = {
  key: 1,
  class: "bg-white rounded-3xl p-14 text-center border border-dashed border-slate-200 shadow-sm"
};
const _hoisted_5 = { class: "w-16 h-16 bg-slate-50 text-slate-500 rounded-4xl flex items-center justify-center mx-auto mb-4 border border-slate-200 shadow-inner" };
const _hoisted_6 = {
  key: 2,
  class: "grid grid-cols-1 gap-6"
};
const _hoisted_7 = { class: "absolute top-5 right-6 flex items-center gap-2" };
const _hoisted_8 = {
  key: 0,
  class: "inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-full text-[10px] font-bold uppercase tracking-wider"
};
const _hoisted_9 = {
  key: 1,
  class: "inline-flex items-center gap-1.5 px-3 py-1 bg-amber-50 text-amber-700 border border-amber-200 rounded-full text-[10px] font-bold uppercase tracking-wider"
};
const _hoisted_10 = { class: "flex flex-col lg:flex-row lg:items-center justify-between gap-6" };
const _hoisted_11 = { class: "flex items-start gap-5 flex-1 min-w-0" };
const _hoisted_12 = { class: "space-y-1.5 min-w-0" };
const _hoisted_13 = { class: "flex items-center gap-2" };
const _hoisted_14 = { class: "font-bold text-slate-800 text-lg tracking-tight" };
const _hoisted_15 = { class: "text-xs font-semibold text-slate-400 bg-slate-50 px-2 py-0.5 rounded-lg border border-slate-100 font-mono" };
const _hoisted_16 = { class: "text-slate-600 text-xs flex items-center font-medium" };
const _hoisted_17 = {
  key: 0,
  class: "mx-1.5 text-slate-300"
};
const _hoisted_18 = {
  key: 1,
  class: "text-slate-400"
};
const _hoisted_19 = {
  key: 0,
  class: "mt-3 p-3.5 bg-emerald-50/90 border border-emerald-200/80 text-emerald-900 text-xs rounded-2xl flex items-start space-x-2.5 shadow-2xs"
};
const _hoisted_20 = { class: "flex flex-col sm:flex-row sm:items-center gap-4 flex-shrink-0 border-t lg:border-t-0 pt-4 lg:pt-0 border-slate-100" };
const _hoisted_21 = { class: "flex sm:flex-row gap-2.5 items-center justify-center sm:justify-start" };
const _hoisted_22 = ["onClick"];
const _hoisted_23 = ["onClick"];
const _hoisted_24 = { class: "grid grid-cols-1 md:grid-cols-3 gap-5 pt-6 border-t border-slate-100 text-left" };
const _hoisted_25 = { class: "bg-amber-50/50 p-5 rounded-2xl border border-amber-100/60" };
const _hoisted_26 = { class: "w-9 h-9 bg-amber-100/80 text-amber-600 rounded-xl flex items-center justify-center mb-3" };
const _hoisted_27 = { class: "bg-emerald-50/50 p-5 rounded-2xl border border-emerald-100/60" };
const _hoisted_28 = { class: "w-9 h-9 bg-emerald-100/80 text-emerald-600 rounded-xl flex items-center justify-center mb-3" };
const _hoisted_29 = { class: "bg-purple-50/50 p-5 rounded-2xl border border-purple-100/60" };
const _hoisted_30 = { class: "w-9 h-9 bg-purple-100/80 text-purple-600 rounded-xl flex items-center justify-center mb-3" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "MyQueuePage",
  setup(__props) {
    const router = useRouter();
    const { showConfirm, showSuccess, showError } = useSwal();
    const loading = ref(true);
    const queueEntries = ref([]);
    let timerInterval = null;
    const fetchQueue = async () => {
      try {
        loading.value = true;
        const data = await studentAPI.getMyQueue();
        queueEntries.value = Array.isArray(data) ? data : [];
      } catch (error) {
        console.error("Failed to fetch queue:", error);
        queueEntries.value = [];
      } finally {
        loading.value = false;
      }
    };
    const updateTimers = () => {
      queueEntries.value.forEach((entry) => {
        if (entry.status === "notified" && entry.claim_remaining_seconds !== void 0) {
          if (entry.claim_remaining_seconds > 0) {
            entry.claim_remaining_seconds -= 1;
          } else {
            fetchQueue();
          }
        }
      });
    };
    const formatCountdown = (seconds) => {
      const totalSecs = Math.max(0, Math.round(Number(seconds) || 0));
      if (totalSecs <= 0) return "00:00";
      const m = Math.floor(totalSecs / 60);
      const s = totalSecs % 60;
      return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
    };
    const formatWaitTime = (minutes) => {
      const mins = Math.round(Number(minutes) || 0);
      if (mins <= 0) return "SOON";
      if (mins < 60) return `${mins} mins`;
      const h = Math.floor(mins / 60);
      const m = mins % 60;
      return m === 0 ? `${h}h` : `${h}h ${m}m`;
    };
    const handleBookNow = (entry) => {
      if (entry.seat?.library_id) {
        router.push({
          path: `/student/libraries/${entry.seat.library_id}/seats`,
          query: { seat_id: entry.seat_id.toString() }
        });
      } else {
        router.push("/student/libraries");
      }
    };
    const handleCancel = async (id) => {
      const confirmed = await showConfirm(
        "Leave Queue?",
        "Are you sure you want to leave the waitlist? You will lose your current priority spot.",
        "Yes, Leave"
      );
      if (confirmed) {
        try {
          await studentAPI.leaveQueue(id);
          showSuccess("Left Queue", "You have been removed from the queue.");
          await fetchQueue();
        } catch (error) {
          showError("Error", "Failed to leave the queue.");
        }
      }
    };
    onMounted(() => {
      fetchQueue();
      timerInterval = setInterval(updateTimers, 1e3);
    });
    onUnmounted(() => {
      if (timerInterval) {
        clearInterval(timerInterval);
      }
    });
    return (_ctx, _cache) => {
      const _component_router_link = resolveComponent("router-link");
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          loading.value ? (openBlock(), createElementBlock("div", _hoisted_3, [..._cache[0] || (_cache[0] = [
            createBaseVNode("div", { class: "animate-spin rounded-full h-10 w-10 border-2 border-emerald-500 border-t-transparent" }, null, -1),
            createBaseVNode("p", { class: "text-xs font-semibold text-slate-400 font-outfit uppercase tracking-wider animate-pulse" }, "Loading queue status...", -1)
          ])])) : queueEntries.value.length === 0 ? (openBlock(), createElementBlock("div", _hoisted_4, [
            createBaseVNode("div", _hoisted_5, [
              createVNode(unref(Clock), { class: "w-7 h-7" })
            ]),
            _cache[2] || (_cache[2] = createBaseVNode("h3", { class: "text-base font-bold text-slate-800 mb-1" }, "Waitlist is Empty", -1)),
            _cache[3] || (_cache[3] = createBaseVNode("p", { class: "text-xs text-slate-500 max-w-xs mx-auto mb-6 leading-relaxed" }, "You haven't joined any seat queues yet. When a seat is free soon, you can join the queue to claim the seat!", -1)),
            createVNode(_component_router_link, {
              to: "/student/libraries",
              class: "inline-flex items-center px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-semibold active:scale-98 transition-all shadow-sm cursor-pointer"
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
                class: normalizeClass([
                  "bg-white rounded-3xl p-6 border shadow-sm transition-all duration-300 relative overflow-hidden text-left",
                  entry.status === "notified" ? "border-emerald-300 ring-2 ring-emerald-500/20 shadow-md" : "border-slate-100 hover:border-slate-200"
                ])
              }, [
                createBaseVNode("div", _hoisted_7, [
                  entry.status === "notified" ? (openBlock(), createElementBlock("span", _hoisted_8, [..._cache[4] || (_cache[4] = [
                    createBaseVNode("span", { class: "w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" }, null, -1),
                    createTextVNode(" YOUR TURN TO BOOK! ", -1)
                  ])])) : (openBlock(), createElementBlock("span", _hoisted_9, " Position #" + toDisplayString(entry.queue_position), 1))
                ]),
                createBaseVNode("div", _hoisted_10, [
                  createBaseVNode("div", _hoisted_11, [
                    createBaseVNode("div", {
                      class: normalizeClass([
                        "w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 border shadow-sm transition-all",
                        entry.status === "notified" ? "bg-emerald-50 text-emerald-600 border-emerald-200 animate-bounce" : "bg-amber-50 text-amber-600 border-amber-200"
                      ])
                    }, [
                      createVNode(unref(Armchair), { class: "w-7 h-7" })
                    ], 2),
                    createBaseVNode("div", _hoisted_12, [
                      createBaseVNode("div", _hoisted_13, [
                        createBaseVNode("h3", _hoisted_14, "Seat " + toDisplayString(entry.seat?.seat_number), 1),
                        createBaseVNode("span", _hoisted_15, " #" + toDisplayString(entry.seat_id), 1)
                      ]),
                      createBaseVNode("p", _hoisted_16, [
                        createVNode(unref(MapPin), { class: "w-3.5 h-3.5 mr-1.5 text-amber-600 flex-shrink-0" }),
                        createBaseVNode("span", null, toDisplayString(entry.seat?.library?.name), 1),
                        entry.seat?.floor?.name ? (openBlock(), createElementBlock("span", _hoisted_17, "•")) : createCommentVNode("", true),
                        entry.seat?.floor?.name ? (openBlock(), createElementBlock("span", _hoisted_18, toDisplayString(entry.seat.floor.name), 1)) : createCommentVNode("", true)
                      ]),
                      entry.status === "notified" ? (openBlock(), createElementBlock("div", _hoisted_19, [
                        createVNode(unref(Zap), { class: "w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5 animate-pulse" }),
                        _cache[5] || (_cache[5] = createBaseVNode("div", { class: "leading-relaxed font-medium" }, [
                          createBaseVNode("span", { class: "font-bold" }, "You have 5 minutes to reserve this seat!"),
                          createTextVNode(" If you do not book within the 5-minute window, your spot will move to the next queued student. ")
                        ], -1))
                      ])) : createCommentVNode("", true)
                    ])
                  ]),
                  createBaseVNode("div", _hoisted_20, [
                    createBaseVNode("div", {
                      class: normalizeClass([
                        "border rounded-2xl px-5 py-3 min-w-[160px] text-center sm:text-left flex flex-col justify-center",
                        entry.status === "notified" ? "bg-emerald-50/80 border-emerald-200" : "bg-slate-50/80 border-slate-100"
                      ])
                    }, [
                      createBaseVNode("span", {
                        class: normalizeClass(["text-[10px] font-semibold uppercase tracking-wider block mb-1", entry.status === "notified" ? "text-emerald-700" : "text-slate-400"])
                      }, toDisplayString(entry.status === "notified" ? "Time Remaining To Book" : "Est. Wait Time"), 3),
                      createBaseVNode("span", {
                        class: normalizeClass(["text-2xl font-bold font-mono tracking-tight leading-none", entry.status === "notified" ? "text-emerald-600 animate-pulse" : "text-amber-600"])
                      }, toDisplayString(entry.status === "notified" ? formatCountdown(entry.claim_remaining_seconds) : formatWaitTime(entry.estimated_wait_time)), 3)
                    ], 2),
                    createBaseVNode("div", _hoisted_21, [
                      entry.status === "notified" ? (openBlock(), createElementBlock("button", {
                        key: 0,
                        onClick: ($event) => handleBookNow(entry),
                        class: "px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-semibold shadow-md shadow-emerald-500/10 active:scale-98 transition-all cursor-pointer whitespace-nowrap"
                      }, " Book Seat Now ", 8, _hoisted_22)) : createCommentVNode("", true),
                      createBaseVNode("button", {
                        onClick: ($event) => handleCancel(entry.id),
                        class: "px-4 py-2.5 bg-slate-50 border border-slate-200 text-slate-600 hover:bg-rose-50 hover:text-rose-600 hover:border-rose-200 rounded-xl text-xs font-semibold transition-all cursor-pointer whitespace-nowrap"
                      }, " Leave Queue ", 8, _hoisted_23)
                    ])
                  ])
                ])
              ], 2);
            }), 128))
          ]))
        ]),
        createBaseVNode("div", _hoisted_24, [
          createBaseVNode("div", _hoisted_25, [
            createBaseVNode("div", _hoisted_26, [
              createVNode(unref(Clock), { class: "w-4.5 h-4.5" })
            ]),
            _cache[6] || (_cache[6] = createBaseVNode("h4", { class: "font-bold text-amber-900 text-xs uppercase tracking-wide mb-1" }, "5-Minute Claim Window", -1)),
            _cache[7] || (_cache[7] = createBaseVNode("p", { class: "text-[11px] text-amber-800/80 leading-relaxed font-medium" }, "When your queue turn arrives, you get an exclusive 5-minute window to reserve the seat.", -1))
          ]),
          createBaseVNode("div", _hoisted_27, [
            createBaseVNode("div", _hoisted_28, [
              createVNode(unref(Zap), { class: "w-4.5 h-4.5" })
            ]),
            _cache[8] || (_cache[8] = createBaseVNode("h4", { class: "font-bold text-emerald-900 text-xs uppercase tracking-wide mb-1" }, "15-Minute Check-In", -1)),
            _cache[9] || (_cache[9] = createBaseVNode("p", { class: "text-[11px] text-emerald-800/80 leading-relaxed font-medium" }, "Once booked, you have 15 minutes to arrive at the library and scan the seat QR code.", -1))
          ]),
          createBaseVNode("div", _hoisted_29, [
            createBaseVNode("div", _hoisted_30, [
              createVNode(unref(ShieldCheck), { class: "w-4.5 h-4.5" })
            ]),
            _cache[10] || (_cache[10] = createBaseVNode("h4", { class: "font-bold text-purple-900 text-xs uppercase tracking-wide mb-1" }, "Queue Protection", -1)),
            _cache[11] || (_cache[11] = createBaseVNode("p", { class: "text-[11px] text-purple-800/80 leading-relaxed font-medium" }, "Outside students cannot steal seats with active waitlists. Your priority line is protected.", -1))
          ])
        ])
      ]);
    };
  }
});
const MyQueuePage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-2f919b57"]]);
export {
  MyQueuePage as default
};
