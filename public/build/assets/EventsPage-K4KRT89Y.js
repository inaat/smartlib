import { d as defineComponent, r as ref, p as useAuth, o as onMounted, c as createElementBlock, b as createBaseVNode, f as createVNode, n as normalizeClass, u as unref, t as toDisplayString, F as Fragment, h as renderList, j as createTextVNode, m as createCommentVNode, i as openBlock } from "./main-DCJXrkf-.js";
import { s as studentAPI } from "./studentApi-C-eDUX1w.js";
import { u as useSwal } from "./useSwal-BUxo5JBv.js";
import { R as RefreshCw } from "./refresh-cw-DCq6mbXe.js";
import { C as Calendar } from "./calendar-DLVGkrUu.js";
import { C as Clock } from "./clock-B7PYed5-.js";
import { M as MapPin } from "./map-pin-YMhwiUzx.js";
import { U as Users } from "./users-23JKef0Y.js";
import { C as CircleCheckBig } from "./circle-check-big-ExLl7Lif.js";
import { P as Printer } from "./printer-ClKtIZ53.js";
/* empty css               */
import "./createLucideIcon-CDsoUk2K.js";
const _hoisted_1 = { class: "p-6 space-y-6 max-w-7xl mx-auto" };
const _hoisted_2 = { class: "flex items-center justify-between" };
const _hoisted_3 = ["disabled"];
const _hoisted_4 = { class: "text-sm font-medium text-gray-600 dark:text-gray-300" };
const _hoisted_5 = {
  key: 0,
  class: "flex items-center justify-center py-20"
};
const _hoisted_6 = {
  key: 1,
  class: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
};
const _hoisted_7 = { class: "aspect-video relative overflow-hidden bg-gray-100 dark:bg-gray-900" };
const _hoisted_8 = ["src", "alt"];
const _hoisted_9 = {
  key: 1,
  class: "w-full h-full flex items-center justify-center bg-gray-100 dark:bg-gray-900 text-gray-400"
};
const _hoisted_10 = { class: "absolute top-2 right-2" };
const _hoisted_11 = { class: "p-5" };
const _hoisted_12 = { class: "flex justify-between items-start mb-3" };
const _hoisted_13 = { class: "text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider" };
const _hoisted_14 = { class: "flex items-center text-xs text-gray-500 dark:text-gray-400" };
const _hoisted_15 = { class: "font-bold text-xl text-gray-900 dark:text-white mb-2 line-clamp-1" };
const _hoisted_16 = { class: "text-sm text-gray-600 dark:text-gray-300 mb-4 line-clamp-2" };
const _hoisted_17 = { class: "space-y-2 mb-4" };
const _hoisted_18 = { class: "flex items-center text-sm text-gray-500 dark:text-gray-400" };
const _hoisted_19 = {
  key: 0,
  class: "flex items-center text-sm text-gray-500 dark:text-gray-400"
};
const _hoisted_20 = { class: "pt-4 border-t border-gray-100 dark:border-gray-700 flex items-center justify-between" };
const _hoisted_21 = { class: "text-xs text-gray-500 dark:text-gray-400 flex items-center" };
const _hoisted_22 = {
  key: 0,
  class: "flex flex-col space-y-2"
};
const _hoisted_23 = {
  disabled: "",
  class: "w-full px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-lg text-sm font-medium flex items-center justify-center space-x-1 cursor-default"
};
const _hoisted_24 = ["onClick"];
const _hoisted_25 = ["onClick", "disabled"];
const _hoisted_26 = {
  key: 0,
  class: "w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"
};
const _hoisted_27 = {
  key: 2,
  class: "bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 py-20 text-center"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "EventsPage",
  setup(__props) {
    const events = ref([]);
    const loading = ref(false);
    const joiningId = ref(null);
    const fetchEvents = async () => {
      loading.value = true;
      try {
        const data = await studentAPI.getEvents();
        events.value = data;
      } catch (error) {
        console.error("Error fetching events:", error);
      } finally {
        loading.value = false;
      }
    };
    const { showConfirm, showSuccess, showError } = useSwal();
    const { user } = useAuth();
    const joinEvent = async (event) => {
      if (!await showConfirm("Join Event", `Are you sure you want to join "${event.title}"?`, "Yes, Join")) return;
      joiningId.value = event.id;
      try {
        await studentAPI.registerForEvent(event.id.toString());
        await fetchEvents();
        showSuccess("Joined!", "Successfully registered for the event!");
      } catch (error) {
        console.error("Error joining event:", error);
        showError("Join Failed", error.message || "Failed to join event.");
      } finally {
        joiningId.value = null;
      }
    };
    const printPass = (event) => {
      if (!user.value) return;
      const printWindow = window.open("", "_blank");
      if (!printWindow) return;
      const studentName = user.value.name;
      const rawPhoto = user.value.profile_photo || user.value.profile_picture;
      const studentPhoto = rawPhoto ? rawPhoto.startsWith("http") ? rawPhoto : `/storage/${rawPhoto}` : "https://ui-avatars.com/api/?name=" + encodeURIComponent(studentName);
      const eventName = event.title;
      const eventVenue = event.venue || "TBA";
      const eventTime = `${formatDate(event.date)} @ ${formatTime(event.start_time)} - ${formatTime(event.end_time)}`;
      printWindow.document.write(`
    <html>
      <head>
        <title>Event Pass - ${eventName}</title>
        <script src="https://cdn.tailwindcss.com"><\/script>
        <style>
          @media print {
            @page { margin: 0; }
            body { margin: 1cm; }
            .no-print { display: none; }
          }
          .ticket-gradient {
            background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%);
          }
        </style>
      </head>
      <body class="bg-gray-50 font-sans">
        <div class="max-w-md mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
          <div class="ticket-gradient p-8 text-white text-center relative overflow-hidden">
            <div class="absolute top-0 right-0 p-4 opacity-10">
              <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"></path><path d="M13 5v2"></path><path d="M13 17v2"></path><path d="M13 11v2"></path></svg>
            </div>
            <h1 class="text-xs font-black uppercase tracking-[0.3em] mb-2 opacity-80">Official Entry Pass</h1>
            <h2 class="text-2xl font-bold leading-tight">${eventName}</h2>
          </div>
          
          <div class="p-8 space-y-6">
            <div class="flex items-center space-x-6">
              <div class="relative">
                <div class="w-24 h-24 rounded-2xl overflow-hidden border-4 border-blue-50 shadow-inner">
                  <img src="${studentPhoto}" class="w-full h-full object-cover">
                </div>
                <div class="absolute -bottom-2 -right-2 bg-green-500 text-white p-1 rounded-full border-2 border-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
              </div>
              <div>
                <p class="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Attendee</p>
                <h3 class="text-xl font-bold text-gray-900">${studentName}</h3>
                <p class="text-sm text-blue-600 font-medium">Verified Student</p>
              </div>
            </div>

            <div class="grid grid-cols-2 gap-6 pt-6 border-t border-dashed border-gray-200">
              <div>
                <p class="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Venue</p>
                <p class="text-sm font-bold text-gray-800">${eventVenue}</p>
              </div>
              <div>
                <p class="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Time</p>
                <p class="text-sm font-bold text-gray-800">${eventTime}</p>
              </div>
            </div>

            <div class="bg-gray-50 rounded-2xl p-4 flex flex-col items-center justify-center border border-gray-100">
                <div class="w-full h-12 bg-[repeating-linear-gradient(90deg,#000,#000_2px,transparent_2px,transparent_4px)] opacity-20 mb-2"></div>
                <p class="text-[10px] font-mono text-gray-400">EVT-${event.id}-${user.value.id}-${Date.now().toString().slice(-6)}</p>
            </div>
          </div>
          
          <div class="bg-gray-900 p-4 text-center">
            <p class="text-[10px] text-gray-400">Please present this pass at the entrance.</p>
          </div>
        </div>
        
        <div class="no-print mt-8 text-center">
          <button onclick="window.print()" class="px-6 py-3 bg-blue-600 text-white rounded-xl font-bold shadow-lg hover:bg-blue-700 transition-all">
            Confirm Print
          </button>
        </div>
      </body>
    </html>
  `);
      printWindow.document.close();
    };
    const formatDate = (dateString) => {
      if (!dateString) return "";
      return new Date(dateString).toLocaleDateString("en-US", {
        weekday: "short",
        month: "short",
        day: "numeric"
      });
    };
    const formatTime = (timeString) => {
      if (!timeString) return "";
      return (/* @__PURE__ */ new Date(`2000-01-01T${timeString}`)).toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit"
      });
    };
    onMounted(() => {
      fetchEvents();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          _cache[0] || (_cache[0] = createBaseVNode("div", null, [
            createBaseVNode("h1", { class: "text-3xl font-bold text-gray-900 dark:text-white" }, "Upcoming Events"),
            createBaseVNode("p", { class: "text-gray-600 dark:text-gray-400 mt-1" }, "Discover and join library events")
          ], -1)),
          createBaseVNode("button", {
            onClick: fetchEvents,
            disabled: loading.value,
            class: "px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex items-center space-x-2 disabled:opacity-50"
          }, [
            createVNode(unref(RefreshCw), {
              class: normalizeClass(["w-4 h-4 text-gray-600 dark:text-gray-300", loading.value ? "animate-spin" : ""])
            }, null, 8, ["class"]),
            createBaseVNode("span", _hoisted_4, toDisplayString(loading.value ? "Refreshing..." : "Refresh"), 1)
          ], 8, _hoisted_3)
        ]),
        loading.value ? (openBlock(), createElementBlock("div", _hoisted_5, [
          createVNode(unref(RefreshCw), { class: "w-8 h-8 text-blue-600 animate-spin" })
        ])) : events.value.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_6, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(events.value, (event) => {
            return openBlock(), createElementBlock("div", {
              key: event.id,
              class: "bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden group hover:shadow-md transition-all"
            }, [
              createBaseVNode("div", _hoisted_7, [
                event.image ? (openBlock(), createElementBlock("img", {
                  key: 0,
                  src: event.image,
                  alt: event.title,
                  class: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                }, null, 8, _hoisted_8)) : (openBlock(), createElementBlock("div", _hoisted_9, [
                  createVNode(unref(Calendar), { class: "w-12 h-12" })
                ])),
                createBaseVNode("div", _hoisted_10, [
                  createBaseVNode("span", {
                    class: normalizeClass([
                      "px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider shadow-sm",
                      event.is_paid ? "bg-yellow-500 text-white" : "bg-green-500 text-white"
                    ])
                  }, toDisplayString(event.is_paid ? event.price ? `$${event.price}` : "Paid" : "Free"), 3)
                ])
              ]),
              createBaseVNode("div", _hoisted_11, [
                createBaseVNode("div", _hoisted_12, [
                  createBaseVNode("span", _hoisted_13, toDisplayString(event.type.replace("_", " ")), 1),
                  createBaseVNode("div", _hoisted_14, [
                    createVNode(unref(Calendar), { class: "w-3 h-3 mr-1" }),
                    createTextVNode(" " + toDisplayString(formatDate(event.date)), 1)
                  ])
                ]),
                createBaseVNode("h3", _hoisted_15, toDisplayString(event.title), 1),
                createBaseVNode("p", _hoisted_16, toDisplayString(event.description), 1),
                createBaseVNode("div", _hoisted_17, [
                  createBaseVNode("div", _hoisted_18, [
                    createVNode(unref(Clock), { class: "w-4 h-4 mr-2" }),
                    createTextVNode(" " + toDisplayString(formatTime(event.start_time)) + " - " + toDisplayString(formatTime(event.end_time)), 1)
                  ]),
                  event.venue ? (openBlock(), createElementBlock("div", _hoisted_19, [
                    createVNode(unref(MapPin), { class: "w-4 h-4 mr-2" }),
                    createTextVNode(" " + toDisplayString(event.venue), 1)
                  ])) : createCommentVNode("", true)
                ]),
                createBaseVNode("div", _hoisted_20, [
                  createBaseVNode("div", _hoisted_21, [
                    createVNode(unref(Users), { class: "w-3 h-3 mr-1" }),
                    createTextVNode(" " + toDisplayString(event.registered_count || 0) + " / " + toDisplayString(event.capacity || "∞"), 1)
                  ]),
                  event.is_registered ? (openBlock(), createElementBlock("div", _hoisted_22, [
                    createBaseVNode("button", _hoisted_23, [
                      createVNode(unref(CircleCheckBig), { class: "w-4 h-4" }),
                      _cache[1] || (_cache[1] = createBaseVNode("span", null, "Joined", -1))
                    ]),
                    createBaseVNode("button", {
                      onClick: ($event) => printPass(event),
                      class: "w-full px-4 py-2 bg-white dark:bg-gray-800 border border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg text-sm font-bold transition-all flex items-center justify-center space-x-2 shadow-sm"
                    }, [
                      createVNode(unref(Printer), { class: "w-4 h-4" }),
                      _cache[2] || (_cache[2] = createBaseVNode("span", null, "Print Pass", -1))
                    ], 8, _hoisted_24)
                  ])) : (openBlock(), createElementBlock("button", {
                    key: 1,
                    onClick: ($event) => joinEvent(event),
                    disabled: joiningId.value === event.id || event.capacity && (event.registered_count || 0) >= event.capacity,
                    class: "px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
                  }, [
                    joiningId.value === event.id ? (openBlock(), createElementBlock("span", _hoisted_26)) : createCommentVNode("", true),
                    createBaseVNode("span", null, toDisplayString(event.capacity && (event.registered_count || 0) >= event.capacity ? "Full" : "Join Event"), 1)
                  ], 8, _hoisted_25))
                ])
              ])
            ]);
          }), 128))
        ])) : (openBlock(), createElementBlock("div", _hoisted_27, [
          createVNode(unref(Calendar), { class: "w-12 h-12 text-gray-300 dark:text-gray-600 mx-auto mb-4" }),
          _cache[3] || (_cache[3] = createBaseVNode("h3", { class: "text-lg font-medium text-gray-900 dark:text-white" }, "No upcoming events", -1)),
          _cache[4] || (_cache[4] = createBaseVNode("p", { class: "text-gray-500 dark:text-gray-400" }, "Check back later for new events", -1))
        ]))
      ]);
    };
  }
});
export {
  _sfc_main as default
};
