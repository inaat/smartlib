import { d as defineComponent, r as ref, E as computed, o as onMounted, c as createElementBlock, b as createBaseVNode, f as createVNode, u as unref, n as normalizeClass, F as Fragment, h as renderList, Q as authAPI, m as createCommentVNode, k as createBlock, t as toDisplayString, j as createTextVNode, i as openBlock } from "./main-TSJawxZI.js";
import { u as useSwal } from "./useSwal-J4kFABxt.js";
import { R as RefreshCw } from "./refresh-cw-8WNefZ9w.js";
import { S as ShieldAlert } from "./shield-alert-mmVJrIqr.js";
import { M as Monitor } from "./monitor-CpvVpRHc.js";
import { S as Smartphone } from "./smartphone-BA2HW8KH.js";
import { G as Globe } from "./globe-DowjEK_W.js";
import { C as Clock } from "./clock-DECkYJ-Y.js";
import { L as LogOut } from "./log-out-DYduLIQX.js";
import { f as format } from "./format-CerZa7QB.js";
import { p as parseISO } from "./parseISO-CXjizkW6.js";
const _hoisted_1 = { class: "space-y-6" };
const _hoisted_2 = { class: "bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden" };
const _hoisted_3 = { class: "px-6 py-4 bg-gray-50/50 border-b border-gray-100 flex items-center justify-between" };
const _hoisted_4 = ["disabled"];
const _hoisted_5 = { class: "divide-y divide-gray-50 max-h-[400px] overflow-y-auto" };
const _hoisted_6 = { class: "flex items-start justify-between gap-4" };
const _hoisted_7 = { class: "flex items-start space-x-3 sm:space-x-4" };
const _hoisted_8 = { class: "space-y-1 overflow-hidden" };
const _hoisted_9 = { class: "flex items-center space-x-2 flex-wrap gap-y-1" };
const _hoisted_10 = { class: "text-xs sm:text-sm font-bold text-gray-900 truncate" };
const _hoisted_11 = {
  key: 0,
  class: "px-2 py-0.5 bg-green-100 text-green-700 text-[8px] sm:text-[10px] font-black uppercase tracking-wider rounded-full"
};
const _hoisted_12 = { class: "flex flex-col space-y-0.5" };
const _hoisted_13 = { class: "text-[10px] sm:text-xs text-gray-500 font-medium flex items-center" };
const _hoisted_14 = { class: "text-[9px] sm:text-[11px] text-gray-400 flex items-center" };
const _hoisted_15 = ["onClick", "disabled"];
const _hoisted_16 = { class: "hidden sm:inline" };
const _hoisted_17 = { class: "p-6 bg-gray-50/30 border-t border-gray-100" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "SessionManagement",
  setup(__props) {
    const { showSuccess, showError, showConfirm } = useSwal();
    const sessions = ref([]);
    const groupedSessions = computed(() => {
      const groups = {};
      sessions.value.forEach((session) => {
        let ip = (session.ip_address || "").trim();
        if (ip === "::1" || ip === "localhost") ip = "127.0.0.1";
        const ua = (session.user_agent || "").trim();
        const key = `${ip}-${ua}`;
        if (!groups[key]) {
          groups[key] = {
            ...session,
            session_ids: [session.id],
            is_current: session.is_current,
            last_active: session.last_used_at || session.created_at
          };
        } else {
          groups[key].session_ids.push(session.id);
          if (session.is_current) groups[key].is_current = true;
          const currentActive = session.last_used_at || session.created_at;
          if (new Date(currentActive) > new Date(groups[key].last_active)) {
            groups[key].last_active = currentActive;
          }
        }
      });
      return Object.values(groups).sort((a, b) => b.is_current ? 1 : -1);
    });
    const loading = ref(false);
    const revoking = ref(null);
    const fetchSessions = async () => {
      loading.value = true;
      try {
        const data = await authAPI.getSessions();
        sessions.value = data;
      } catch (error) {
        console.error("Error fetching sessions:", error);
      } finally {
        loading.value = false;
      }
    };
    const revokeSession = async (group) => {
      const confirmed = await showConfirm(
        "Logout Device?",
        `Are you sure you want to log out from ${getDeviceName(group.user_agent)}?`,
        "Log out"
      );
      if (confirmed) {
        revoking.value = group.ip_address + group.user_agent;
        try {
          await Promise.all(group.session_ids.map((id) => authAPI.revokeSession(id)));
          showSuccess("Success", "Device logged out successfully");
          await fetchSessions();
        } catch (error) {
          showError("Error", "Failed to log out device");
        } finally {
          revoking.value = null;
        }
      }
    };
    const logoutAll = async () => {
      const confirmed = await showConfirm(
        "Logout All Other Devices?",
        "This will log you out from all devices except this one. Continue?",
        "Logout All"
      );
      if (confirmed) {
        try {
          await authAPI.logoutAll();
          window.location.href = "/login";
        } catch (error) {
          showError("Error", "Failed to log out all devices");
        }
      }
    };
    const isDesktop = (ua) => {
      if (!ua) return true;
      return !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua);
    };
    const getDeviceName = (ua) => {
      if (!ua) return "Unknown Device";
      if (ua.includes("Chrome")) {
        if (ua.includes("Windows")) return "Chrome on Windows";
        if (ua.includes("Macintosh")) return "Chrome on macOS";
        if (ua.includes("Linux")) return "Chrome on Linux";
        if (ua.includes("Android")) return "Chrome on Android";
        if (ua.includes("iPhone")) return "Chrome on iPhone";
      }
      if (ua.includes("Safari") && !ua.includes("Chrome")) {
        if (ua.includes("iPhone")) return "Safari on iPhone";
        if (ua.includes("Macintosh")) return "Safari on macOS";
      }
      if (ua.includes("Firefox")) return "Firefox";
      if (ua.includes("Edg/")) return "Microsoft Edge";
      return "Browser Session";
    };
    const formatDate = (date) => {
      if (!date) return "Just now";
      try {
        return format(parseISO(date), "MMM dd, HH:mm");
      } catch {
        return "Just now";
      }
    };
    onMounted(fetchSessions);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("div", _hoisted_3, [
            _cache[0] || (_cache[0] = createBaseVNode("div", null, [
              createBaseVNode("h3", { class: "text-sm font-bold text-gray-900" }, "Active Sessions"),
              createBaseVNode("p", { class: "text-xs text-gray-500 mt-0.5" }, "Manage the devices where you're currently logged in")
            ], -1)),
            createBaseVNode("button", {
              onClick: fetchSessions,
              disabled: loading.value,
              class: "p-2 text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-xl transition-all disabled:opacity-50"
            }, [
              createVNode(unref(RefreshCw), {
                class: normalizeClass(["w-4 h-4", loading.value ? "animate-spin" : ""])
              }, null, 8, ["class"])
            ], 8, _hoisted_4)
          ]),
          createBaseVNode("div", _hoisted_5, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(groupedSessions.value, (session) => {
              return openBlock(), createElementBlock("div", {
                key: session.ip_address + session.user_agent,
                class: "p-4 sm:p-6 transition-colors hover:bg-gray-50/50"
              }, [
                createBaseVNode("div", _hoisted_6, [
                  createBaseVNode("div", _hoisted_7, [
                    createBaseVNode("div", {
                      class: normalizeClass([
                        "p-2 sm:p-3 rounded-xl sm:rounded-2xl shadow-sm hidden sm:block",
                        session.is_current ? "bg-indigo-50 text-indigo-600" : "bg-gray-50 text-gray-400"
                      ])
                    }, [
                      isDesktop(session.user_agent) ? (openBlock(), createBlock(unref(Monitor), {
                        key: 0,
                        class: "w-5 h-5 sm:w-6 sm:h-6"
                      })) : (openBlock(), createBlock(unref(Smartphone), {
                        key: 1,
                        class: "w-5 h-5 sm:w-6 sm:h-6"
                      }))
                    ], 2),
                    createBaseVNode("div", _hoisted_8, [
                      createBaseVNode("div", _hoisted_9, [
                        createBaseVNode("span", _hoisted_10, toDisplayString(getDeviceName(session.user_agent)), 1),
                        session.is_current ? (openBlock(), createElementBlock("span", _hoisted_11, " Current ")) : createCommentVNode("", true)
                      ]),
                      createBaseVNode("div", _hoisted_12, [
                        createBaseVNode("span", _hoisted_13, [
                          createVNode(unref(Globe), { class: "w-2.5 h-2.5 sm:w-3 sm:h-3 mr-1.5 opacity-60" }),
                          createTextVNode(" " + toDisplayString(session.ip_address === "127.0.0.1" || session.ip_address === "::1" ? "Local System" : session.ip_address || "Current IP"), 1)
                        ]),
                        createBaseVNode("span", _hoisted_14, [
                          createVNode(unref(Clock), { class: "w-2.5 h-2.5 sm:w-3 sm:h-3 mr-1.5 opacity-60" }),
                          createTextVNode(" " + toDisplayString(formatDate(session.last_active)), 1)
                        ])
                      ])
                    ])
                  ]),
                  !session.is_current ? (openBlock(), createElementBlock("button", {
                    key: 0,
                    onClick: ($event) => revokeSession(session),
                    disabled: revoking.value === session.ip_address + session.user_agent,
                    class: "shrink-0 px-2 sm:px-3 py-1 sm:py-1.5 text-[10px] sm:text-xs font-bold text-red-600 hover:bg-red-50 rounded-lg sm:rounded-xl transition-all border border-transparent hover:border-red-100 disabled:opacity-50 flex items-center space-x-1"
                  }, [
                    createVNode(unref(LogOut), { class: "w-3 sm:w-3.5 h-3 sm:h-3.5" }),
                    createBaseVNode("span", _hoisted_16, toDisplayString(revoking.value === session.ip_address + session.user_agent ? "Logging out..." : "Log out"), 1)
                  ], 8, _hoisted_15)) : createCommentVNode("", true)
                ])
              ]);
            }), 128))
          ]),
          createBaseVNode("div", _hoisted_17, [
            createBaseVNode("button", {
              onClick: logoutAll,
              class: "w-full py-3 px-4 bg-white border border-red-100 text-red-600 hover:bg-red-600 hover:text-white rounded-2xl text-sm font-bold transition-all flex items-center justify-center space-x-2 shadow-sm hover:shadow-md"
            }, [
              createVNode(unref(ShieldAlert), { class: "w-4 h-4" }),
              _cache[1] || (_cache[1] = createBaseVNode("span", null, "Logout from All Other Devices", -1))
            ])
          ])
        ])
      ]);
    };
  }
});
export {
  _sfc_main as _
};
