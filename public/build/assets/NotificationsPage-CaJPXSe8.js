import { d as defineComponent, p as useAuth, c as createElementBlock, b as createBaseVNode, m as createCommentVNode, u as unref, f as createVNode, F as Fragment, h as renderList, n as normalizeClass, k as createBlock, l as resolveDynamicComponent, t as toDisplayString, A as useRouter, i as openBlock } from "./main-Dk2mUbjP.js";
import { C as CircleCheckBig } from "./circle-check-big-CgVU7jsB.js";
import { B as Bell } from "./bell-ChZTwWkt.js";
import { M as MessageSquare } from "./message-square-Cer3P7Rf.js";
import { C as Clock } from "./clock-DHHRCinm.js";
import { B as Book } from "./book-C1CMYBua.js";
import { C as CreditCard } from "./credit-card-Bxu1JJxU.js";
import { C as Calendar } from "./calendar-e6msfKJ3.js";
import { f as formatDistanceToNow } from "./formatDistanceToNow-CgRkJOVj.js";
/* empty css               */
import "./createLucideIcon-6n-23kmf.js";
import "./constructNow-CQ6Py-t8.js";
import "./en-US-CtEcOBul.js";
const _hoisted_1 = { class: "space-y-6" };
const _hoisted_2 = { class: "flex items-center justify-between" };
const _hoisted_3 = { class: "bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden" };
const _hoisted_4 = {
  key: 0,
  class: "p-12 text-center"
};
const _hoisted_5 = { class: "w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4" };
const _hoisted_6 = {
  key: 1,
  class: "divide-y divide-gray-50"
};
const _hoisted_7 = ["onClick"];
const _hoisted_8 = { class: "flex items-start space-x-4" };
const _hoisted_9 = { class: "flex-1 min-w-0" };
const _hoisted_10 = { class: "flex items-center justify-between mb-1" };
const _hoisted_11 = { class: "font-bold text-gray-900 truncate pr-4" };
const _hoisted_12 = { class: "text-xs font-medium text-gray-400 whitespace-nowrap" };
const _hoisted_13 = { class: "text-sm text-gray-600 leading-relaxed max-w-2xl" };
const _hoisted_14 = {
  key: 0,
  class: "mt-1"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "NotificationsPage",
  setup(__props) {
    const { notifications, unreadCount, markNotificationAsRead } = useAuth();
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
          return "bg-purple-100 text-purple-600";
        case "subscription":
          return "bg-green-100 text-green-600";
        case "book":
          return "bg-indigo-100 text-indigo-600";
        case "booking":
          return "bg-blue-100 text-blue-600";
        case "queue":
          return "bg-amber-100 text-amber-600";
        default:
          return "bg-gray-100 text-gray-600";
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
      const unreadOnes = notifications.value.filter((n) => !n.is_read);
      for (const n of unreadOnes) {
        await markNotificationAsRead(n.id);
      }
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          _cache[1] || (_cache[1] = createBaseVNode("div", null, [
            createBaseVNode("h1", { class: "text-2xl font-bold text-gray-800" }, "Notifications"),
            createBaseVNode("p", { class: "text-gray-600" }, "Stay updated with your library activities")
          ], -1)),
          unref(unreadCount) > 0 ? (openBlock(), createElementBlock("button", {
            key: 0,
            onClick: markAllAsRead,
            class: "flex items-center space-x-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-xl hover:bg-blue-100 transition-colors font-medium"
          }, [
            createVNode(unref(CircleCheckBig), { class: "w-4 h-4" }),
            _cache[0] || (_cache[0] = createBaseVNode("span", null, "Mark all as read", -1))
          ])) : createCommentVNode("", true)
        ]),
        createBaseVNode("div", _hoisted_3, [
          unref(notifications).length === 0 ? (openBlock(), createElementBlock("div", _hoisted_4, [
            createBaseVNode("div", _hoisted_5, [
              createVNode(unref(Bell), { class: "w-8 h-8 text-gray-300" })
            ]),
            _cache[2] || (_cache[2] = createBaseVNode("h3", { class: "text-lg font-bold text-gray-800 mb-1" }, "No notifications yet", -1)),
            _cache[3] || (_cache[3] = createBaseVNode("p", { class: "text-gray-500" }, "We'll notify you when something important happens.", -1))
          ])) : (openBlock(), createElementBlock("div", _hoisted_6, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(notifications), (notification) => {
              return openBlock(), createElementBlock("div", {
                key: notification.id,
                class: normalizeClass(["p-6 hover:bg-gray-50/50 transition-colors cursor-pointer group relative", { "bg-blue-50/20": !notification.is_read }]),
                onClick: ($event) => handleNotificationClick(notification)
              }, [
                createBaseVNode("div", _hoisted_8, [
                  createBaseVNode("div", {
                    class: normalizeClass(["p-3 rounded-xl transition-transform group-hover:scale-110", getNotificationIconClass(notification.type)])
                  }, [
                    (openBlock(), createBlock(resolveDynamicComponent(getNotificationIcon(notification.type)), { class: "w-5 h-5" }))
                  ], 2),
                  createBaseVNode("div", _hoisted_9, [
                    createBaseVNode("div", _hoisted_10, [
                      createBaseVNode("h3", _hoisted_11, toDisplayString(notification.title), 1),
                      createBaseVNode("span", _hoisted_12, toDisplayString(formatDate(notification.created_at)), 1)
                    ]),
                    createBaseVNode("p", _hoisted_13, toDisplayString(notification.message), 1)
                  ]),
                  !notification.is_read ? (openBlock(), createElementBlock("div", _hoisted_14, [..._cache[4] || (_cache[4] = [
                    createBaseVNode("div", { class: "w-2.5 h-2.5 bg-blue-500 rounded-full" }, null, -1)
                  ])])) : createCommentVNode("", true)
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
