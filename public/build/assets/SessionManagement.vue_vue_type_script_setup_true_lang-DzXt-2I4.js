import { d as defineComponent, r as ref, c as computed, o as onMounted, a as createElementBlock, b as createBaseVNode, f as createVNode, u as unref, n as normalizeClass, F as Fragment, k as renderList, Q as authAPI, j as createCommentVNode, h as createBlock, t as toDisplayString, i as createTextVNode, l as openBlock } from "./main-D4odWxzi.js";
import { u as useSwal } from "./useSwal-pQW_XkRe.js";
import { R as RefreshCw } from "./refresh-cw-BuoaK0_N.js";
import { S as ShieldAlert } from "./shield-alert-T3DceCuC.js";
import { M as Monitor } from "./monitor-B0QdLhBZ.js";
import { S as Smartphone } from "./smartphone-PPRv47eN.js";
import { G as Globe } from "./globe-DaP19ntl.js";
import { C as Clock } from "./clock-DbxW0WRH.js";
import { L as LogOut } from "./log-out-Dg62YW84.js";
import { f as format } from "./format-CerZa7QB.js";
import { p as parseISO } from "./parseISO-CXjizkW6.js";
const _hoisted_1 = { class: "font-outfit text-left" };
const _hoisted_2 = { class: "p-6 pb-2 flex items-center justify-between" };
const _hoisted_3 = ["disabled"];
const _hoisted_4 = { class: "divide-y divide-slate-100 max-h-[380px] overflow-y-auto" };
const _hoisted_5 = { class: "flex items-center justify-between gap-4" };
const _hoisted_6 = { class: "flex items-center space-x-3.5 min-w-0" };
const _hoisted_7 = { class: "space-y-0.5 min-w-0" };
const _hoisted_8 = { class: "flex items-center space-x-2 flex-wrap gap-y-1" };
const _hoisted_9 = { class: "text-xs font-semibold text-slate-800 truncate" };
const _hoisted_10 = {
  key: 0,
  class: "px-2.5 py-0.5 bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px] font-semibold uppercase tracking-wider rounded-full"
};
const _hoisted_11 = { class: "flex flex-col sm:flex-row sm:items-center sm:space-x-3 text-[11px] text-slate-500 font-medium gap-y-0.5" };
const _hoisted_12 = { class: "flex items-center" };
const _hoisted_13 = { class: "flex items-center" };
const _hoisted_14 = ["onClick", "disabled"];
const _hoisted_15 = { class: "hidden sm:inline" };
const _hoisted_16 = { class: "p-5 bg-slate-50/40 border-t border-slate-100" };
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
          _cache[0] || (_cache[0] = createBaseVNode("h3", { class: "text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center space-x-2" }, [
            createBaseVNode("span", { class: "w-2 h-2 rounded-full bg-blue-600" }),
            createBaseVNode("span", null, "Active Sessions")
          ], -1)),
          createBaseVNode("button", {
            onClick: fetchSessions,
            disabled: loading.value,
            class: "p-1.5 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all disabled:opacity-50 cursor-pointer",
            title: "Refresh sessions"
          }, [
            createVNode(unref(RefreshCw), {
              class: normalizeClass(["w-4 h-4", loading.value ? "animate-spin" : ""])
            }, null, 8, ["class"])
          ], 8, _hoisted_3)
        ]),
        createBaseVNode("div", _hoisted_4, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(groupedSessions.value, (session) => {
            return openBlock(), createElementBlock("div", {
              key: session.ip_address + session.user_agent,
              class: "p-4 sm:p-5 transition-colors hover:bg-slate-50/50"
            }, [
              createBaseVNode("div", _hoisted_5, [
                createBaseVNode("div", _hoisted_6, [
                  createBaseVNode("div", {
                    class: normalizeClass([
                      "p-2.5 rounded-2xl shadow-sm flex-shrink-0 border",
                      session.is_current ? "bg-blue-50 text-blue-600 border-blue-100" : "bg-slate-100 text-slate-400 border-slate-200/60"
                    ])
                  }, [
                    isDesktop(session.user_agent) ? (openBlock(), createBlock(unref(Monitor), {
                      key: 0,
                      class: "w-5 h-5"
                    })) : (openBlock(), createBlock(unref(Smartphone), {
                      key: 1,
                      class: "w-5 h-5"
                    }))
                  ], 2),
                  createBaseVNode("div", _hoisted_7, [
                    createBaseVNode("div", _hoisted_8, [
                      createBaseVNode("span", _hoisted_9, toDisplayString(getDeviceName(session.user_agent)), 1),
                      session.is_current ? (openBlock(), createElementBlock("span", _hoisted_10, " Current ")) : createCommentVNode("", true)
                    ]),
                    createBaseVNode("div", _hoisted_11, [
                      createBaseVNode("span", _hoisted_12, [
                        createVNode(unref(Globe), { class: "w-3 h-3 mr-1 text-slate-400" }),
                        createTextVNode(" " + toDisplayString(session.ip_address === "127.0.0.1" || session.ip_address === "::1" ? "Local System" : session.ip_address || "Current IP"), 1)
                      ]),
                      createBaseVNode("span", _hoisted_13, [
                        createVNode(unref(Clock), { class: "w-3 h-3 mr-1 text-slate-400" }),
                        createTextVNode(" " + toDisplayString(formatDate(session.last_active)), 1)
                      ])
                    ])
                  ])
                ]),
                !session.is_current ? (openBlock(), createElementBlock("button", {
                  key: 0,
                  onClick: ($event) => revokeSession(session),
                  disabled: revoking.value === session.ip_address + session.user_agent,
                  class: "flex-shrink-0 px-3 py-1.5 text-xs font-semibold text-rose-600 hover:bg-rose-50 hover:border-rose-200 rounded-xl transition-all border border-rose-100 disabled:opacity-50 flex items-center space-x-1.5 cursor-pointer"
                }, [
                  createVNode(unref(LogOut), { class: "w-3.5 h-3.5" }),
                  createBaseVNode("span", _hoisted_15, toDisplayString(revoking.value === session.ip_address + session.user_agent ? "Logging out..." : "Log out"), 1)
                ], 8, _hoisted_14)) : createCommentVNode("", true)
              ])
            ]);
          }), 128))
        ]),
        createBaseVNode("div", _hoisted_16, [
          createBaseVNode("button", {
            onClick: logoutAll,
            class: "w-full py-2.5 px-4 bg-rose-50/70 border border-rose-200 text-rose-700 hover:bg-rose-600 hover:text-white rounded-xl text-xs font-semibold transition-all flex items-center justify-center space-x-2 shadow-sm active:scale-98 cursor-pointer"
          }, [
            createVNode(unref(ShieldAlert), { class: "w-4 h-4" }),
            _cache[1] || (_cache[1] = createBaseVNode("span", null, "Logout from All Other Devices", -1))
          ])
        ])
      ]);
    };
  }
});
export {
  _sfc_main as _
};
