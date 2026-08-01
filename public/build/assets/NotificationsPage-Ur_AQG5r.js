import { d as defineComponent, x as useAuth, a as createElementBlock, j as createCommentVNode, b as createBaseVNode, u as unref, f as createVNode, F as Fragment, k as renderList, n as normalizeClass, h as createBlock, m as resolveDynamicComponent, t as toDisplayString, z as withModifiers, C as useRouter, l as openBlock } from "./main-D4odWxzi.js";
import { u as useSwal } from "./useSwal-pQW_XkRe.js";
import { C as CircleCheckBig } from "./circle-check-big-DNHsx8q4.js";
import { T as Trash2 } from "./trash-2-D2rUsr0z.js";
import { B as Bell } from "./bell-Dy-vHSSt.js";
import { C as Check } from "./check-C4UuhW99.js";
import { M as MessageSquare } from "./message-square-D9tR6IyL.js";
import { C as Clock } from "./clock-DbxW0WRH.js";
import { B as Book } from "./book-B7V8G2CR.js";
import { C as CreditCard } from "./credit-card-i9kGYS8l.js";
import { C as Calendar } from "./calendar-lJfe3rfu.js";
import { f as formatDistanceToNow } from "./formatDistanceToNow-CgRkJOVj.js";
/* empty css               */
import "./createLucideIcon-BgnXjtcZ.js";
import "./constructNow-CQ6Py-t8.js";
import "./en-US-CtEcOBul.js";
const _hoisted_1 = { class: "space-y-6 font-outfit" };
const _hoisted_2 = {
  key: 0,
  class: "flex justify-end items-center space-x-3 font-outfit"
};
const _hoisted_3 = { class: "bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden" };
const _hoisted_4 = {
  key: 0,
  class: "p-16 text-center font-outfit"
};
const _hoisted_5 = { class: "w-12 h-12 bg-slate-50 border border-slate-200 rounded-2xl flex items-center justify-center mx-auto mb-4" };
const _hoisted_6 = {
  key: 1,
  class: "divide-y divide-slate-100/60"
};
const _hoisted_7 = ["onClick"];
const _hoisted_8 = { class: "flex items-start space-x-4 flex-1 text-left" };
const _hoisted_9 = { class: "flex-1 min-w-0 pr-4" };
const _hoisted_10 = { class: "flex items-center justify-between mb-1.5" };
const _hoisted_11 = { class: "text-[10px] font-semibold text-slate-400 whitespace-nowrap ml-3 uppercase tracking-wider" };
const _hoisted_12 = { class: "text-xs text-slate-500 font-semibold leading-relaxed max-w-3xl" };
const _hoisted_13 = ["onClick"];
const _hoisted_14 = ["onClick"];
const _hoisted_15 = {
  key: 1,
  class: "w-2.5 h-2.5 bg-blue-600 rounded-full ml-1"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "NotificationsPage",
  setup(__props) {
    const {
      notifications,
      unreadCount,
      markNotificationAsRead,
      markAllNotificationsAsRead,
      clearAllNotifications,
      deleteNotification
    } = useAuth();
    const { showConfirm } = useSwal();
    const router = useRouter();
    const getNotificationIcon = (type) => {
      switch (type) {
        case "event":
          return Calendar;
        case "subscription":
          return CreditCard;
        case "book":
          return Book;
        case "booking":
          return CircleCheckBig;
        case "queue":
          return Clock;
        default:
          return MessageSquare;
      }
    };
    const getNotificationIconClass = (type) => {
      switch (type) {
        case "event":
          return "bg-purple-50 border border-purple-200 text-purple-600";
        case "subscription":
          return "bg-emerald-50 border border-emerald-300 text-emerald-700";
        case "book":
          return "bg-indigo-50 border border-indigo-200 text-indigo-600";
        case "booking":
          return "bg-blue-50 border border-blue-200 text-blue-600";
        case "queue":
          return "bg-amber-50 border border-amber-200 text-amber-605";
        default:
          return "bg-slate-50 border border-slate-200 text-slate-500";
      }
    };
    const formatDate = (date) => {
      try {
        return formatDistanceToNow(new Date(date), { addSuffix: true });
      } catch (e) {
        return date;
      }
    };
    const handleNotificationClick = async (notification) => {
      if (!notification.is_read) {
        await markNotificationAsRead(notification.id);
      }
      switch (notification.type) {
        case "booking":
          router.push("/student/dashboard");
          break;
        case "event":
          router.push("/student/events");
          break;
        case "subscription":
          router.push("/student/subscription");
          break;
        case "queue":
          router.push("/student/dashboard");
          break;
      }
    };
    const markAllAsRead = async () => {
      await markAllNotificationsAsRead();
    };
    const clearAll = async () => {
      const confirmed = await showConfirm(
        "Clear All Notifications",
        "Are you sure you want to permanently clear all notifications?",
        "Yes, clear all"
      );
      if (confirmed) {
        await clearAllNotifications();
      }
    };
    const markAsRead = async (id) => {
      await markNotificationAsRead(id);
    };
    const deleteSingle = async (id) => {
      await deleteNotification(id);
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        unref(notifications).length > 0 ? (openBlock(), createElementBlock("div", _hoisted_2, [
          unref(unreadCount) > 0 ? (openBlock(), createElementBlock("button", {
            key: 0,
            onClick: markAllAsRead,
            class: "flex items-center space-x-2 px-3.5 py-2 bg-white hover:bg-slate-50 text-slate-600 rounded-xl text-xs font-semibold border border-slate-200 shadow-sm active:scale-98 transition-all"
          }, [
            createVNode(unref(CircleCheckBig), { class: "w-3.5 h-3.5 text-slate-500" }),
            _cache[1] || (_cache[1] = createBaseVNode("span", null, "Mark all as read", -1))
          ])) : createCommentVNode("", true),
          createBaseVNode("button", {
            onClick: clearAll,
            class: "flex items-center space-x-2 px-3.5 py-2 bg-red-50 hover:bg-red-100 text-red-600 rounded-xl text-xs font-semibold border border-red-100 shadow-sm active:scale-98 transition-all"
          }, [
            createVNode(unref(Trash2), { class: "w-3.5 h-3.5" }),
            _cache[2] || (_cache[2] = createBaseVNode("span", null, "Clear all", -1))
          ])
        ])) : createCommentVNode("", true),
        createBaseVNode("div", _hoisted_3, [
          unref(notifications).length === 0 ? (openBlock(), createElementBlock("div", _hoisted_4, [
            createBaseVNode("div", _hoisted_5, [
              createVNode(unref(Bell), { class: "w-5 h-5 text-slate-400" })
            ]),
            _cache[3] || (_cache[3] = createBaseVNode("h3", { class: "text-sm font-semibold text-slate-800 mb-1" }, "No notifications yet", -1)),
            _cache[4] || (_cache[4] = createBaseVNode("p", { class: "text-xs text-slate-400 font-semibold" }, "We'll notify you when something important happens.", -1))
          ])) : (openBlock(), createElementBlock("div", _hoisted_6, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(notifications), (notification) => {
              return openBlock(), createElementBlock("div", {
                key: notification.id,
                class: normalizeClass(["p-6 hover:bg-slate-50/50 transition-colors cursor-pointer group relative flex items-start justify-between", { "bg-blue-50/15": !notification.is_read }]),
                onClick: ($event) => handleNotificationClick(notification)
              }, [
                createBaseVNode("div", _hoisted_8, [
                  createBaseVNode("div", {
                    class: normalizeClass(["p-2.5 rounded-xl border transition-transform group-hover:scale-105", getNotificationIconClass(notification.type)])
                  }, [
                    (openBlock(), createBlock(resolveDynamicComponent(getNotificationIcon(notification.type)), { class: "w-4 h-4" }))
                  ], 2),
                  createBaseVNode("div", _hoisted_9, [
                    createBaseVNode("div", _hoisted_10, [
                      createBaseVNode("h3", {
                        class: normalizeClass(["text-xs font-bold text-slate-800 truncate", { "text-blue-900": !notification.is_read }])
                      }, toDisplayString(notification.title), 3),
                      createBaseVNode("span", _hoisted_11, toDisplayString(formatDate(notification.created_at)), 1)
                    ]),
                    createBaseVNode("p", _hoisted_12, toDisplayString(notification.message), 1)
                  ])
                ]),
                createBaseVNode("div", {
                  class: "flex items-center space-x-1.5 ml-4 flex-shrink-0",
                  onClick: _cache[0] || (_cache[0] = withModifiers(() => {
                  }, ["stop"]))
                }, [
                  !notification.is_read ? (openBlock(), createElementBlock("button", {
                    key: 0,
                    onClick: ($event) => markAsRead(notification.id),
                    class: "p-2 rounded-xl text-slate-400 hover:text-blue-600 hover:bg-blue-55/60 transition-colors",
                    title: "Mark as read"
                  }, [
                    createVNode(unref(Check), { class: "w-4 h-4" })
                  ], 8, _hoisted_13)) : createCommentVNode("", true),
                  createBaseVNode("button", {
                    onClick: ($event) => deleteSingle(notification.id),
                    class: "p-2 rounded-xl text-slate-400 hover:text-red-500 hover:bg-red-55/60 transition-colors",
                    title: "Delete notification"
                  }, [
                    createVNode(unref(Trash2), { class: "w-4 h-4" })
                  ], 8, _hoisted_14),
                  !notification.is_read ? (openBlock(), createElementBlock("div", _hoisted_15)) : createCommentVNode("", true)
                ])
              ], 10, _hoisted_7);
            }), 128))
          ]))
        ])
      ]);
    };
  }
});
export {
  _sfc_main as default
};
