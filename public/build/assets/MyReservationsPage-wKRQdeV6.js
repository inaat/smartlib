import { d as defineComponent, r as ref, o as onMounted, c as createElementBlock, b as createBaseVNode, F as Fragment, h as renderList, f as createVNode, u as unref, w as withCtx, g as resolveComponent, J as studentAPI, t as toDisplayString, n as normalizeClass, j as createTextVNode, m as createCommentVNode, i as openBlock } from "./main-Dk2mUbjP.js";
import { u as useSwal } from "./useSwal-J4kFABxt.js";
import { B as BookOpen } from "./book-open-DFp6gl31.js";
import { B as Book } from "./book-C1CMYBua.js";
import { C as Calendar } from "./calendar-e6msfKJ3.js";
import { C as Clock } from "./clock-DHHRCinm.js";
import { C as CircleAlert } from "./circle-alert-BSTnPYhV.js";
/* empty css               */
import "./createLucideIcon-6n-23kmf.js";
const _hoisted_1 = { class: "space-y-6" };
const _hoisted_2 = {
  key: 0,
  class: "flex items-center justify-center py-20"
};
const _hoisted_3 = {
  key: 1,
  class: "space-y-4"
};
const _hoisted_4 = { class: "w-full md:w-24 h-32 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0" };
const _hoisted_5 = ["src", "alt"];
const _hoisted_6 = {
  key: 1,
  class: "w-full h-full flex items-center justify-center text-gray-400"
};
const _hoisted_7 = { class: "flex-1" };
const _hoisted_8 = { class: "flex items-start justify-between" };
const _hoisted_9 = { class: "font-bold text-lg text-gray-900" };
const _hoisted_10 = { class: "text-gray-500" };
const _hoisted_11 = { class: "mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm" };
const _hoisted_12 = { class: "flex items-center text-gray-600" };
const _hoisted_13 = { class: "flex items-center text-gray-600" };
const _hoisted_14 = { class: "flex items-center" };
const _hoisted_15 = { class: "flex flex-col gap-2 w-full md:w-auto" };
const _hoisted_16 = ["onClick", "disabled"];
const _hoisted_17 = {
  key: 0,
  class: "animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"
};
const _hoisted_18 = ["onClick", "disabled"];
const _hoisted_19 = {
  key: 0,
  class: "animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"
};
const _hoisted_20 = {
  key: 2,
  class: "text-center text-sm text-gray-500 italic"
};
const _hoisted_21 = {
  key: 2,
  class: "text-center py-20 bg-white rounded-xl border border-dashed border-gray-300"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "MyReservationsPage",
  setup(__props) {
    const { showConfirm, showSuccess, showError } = useSwal();
    const reservations = ref([]);
    const loading = ref(true);
    const returning = ref(null);
    const pickingUp = ref(null);
    const fetchReservations = async () => {
      loading.value = true;
      try {
        const data = await studentAPI.getMyReservations();
        reservations.value = data;
      } catch (error) {
        console.error("Error fetching reservations:", error);
      } finally {
        loading.value = false;
      }
    };
    const pickUpBook = async (reservation) => {
      if (!await showConfirm("Pick Up Book", `Confirm that you are picking up "${reservation.book?.title}"?`, "Confirm Pickup")) return;
      pickingUp.value = reservation.id;
      try {
        await studentAPI.pickUpBook(reservation.id);
        showSuccess("Enjoy!", "Book status updated to borrowed. Please return it by the due date.");
        await fetchReservations();
      } catch (error) {
        console.error("Error picking up book:", error);
        showError("Action Failed", error.response?.data?.message || "Failed to update status.");
      } finally {
        pickingUp.value = null;
      }
    };
    const returnBook = async (reservation) => {
      if (!await showConfirm("Return Book", `Are you sure you want to return "${reservation.book?.title}"?`, "Yes, Return")) return;
      returning.value = reservation.id;
      try {
        await studentAPI.returnBook(reservation.id);
        showSuccess("Return Requested", "Your return request has been submitted. Please wait for librarian approval.");
        await fetchReservations();
      } catch (error) {
        console.error("Error returning book:", error);
        showError("Return Failed", error.response?.data?.message || "Failed to submit return request.");
      } finally {
        returning.value = null;
      }
    };
    const formatDate = (date) => {
      if (!date) return "N/A";
      return new Date(date).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric"
      });
    };
    const getDaysRemaining = (dueDate) => {
      if (!dueDate) return "N/A";
      const due = new Date(dueDate);
      const now = /* @__PURE__ */ new Date();
      const diffTime = due.getTime() - now.getTime();
      const diffDays = Math.ceil(diffTime / (1e3 * 60 * 60 * 24));
      if (diffDays < 0) return `Overdue by ${Math.abs(diffDays)} days`;
      if (diffDays === 0) return "Due today";
      return `${diffDays} days remaining`;
    };
    const getDaysRemainingColor = (dueDate) => {
      if (!dueDate) return "text-gray-500";
      const due = new Date(dueDate);
      const now = /* @__PURE__ */ new Date();
      const diffTime = due.getTime() - now.getTime();
      const diffDays = Math.ceil(diffTime / (1e3 * 60 * 60 * 24));
      if (diffDays < 0) return "text-red-600 font-bold";
      if (diffDays <= 2) return "text-orange-600 font-bold";
      return "text-green-600";
    };
    const getStatusColor = (status) => {
      switch (status) {
        case "reserved":
          return "bg-blue-100 text-blue-700";
        // Actually pending pickup
        case "borrowed":
          return "bg-green-100 text-green-700";
        case "pending_return":
          return "bg-orange-100 text-orange-700";
        case "returned":
          return "bg-gray-100 text-gray-500";
        case "overdue":
          return "bg-red-100 text-red-700";
        default:
          return "bg-gray-100 text-gray-700";
      }
    };
    const formatStatus = (status) => {
      return status.split("_").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
    };
    onMounted(() => {
      fetchReservations();
    });
    return (_ctx, _cache) => {
      const _component_router_link = resolveComponent("router-link");
      return openBlock(), createElementBlock("div", _hoisted_1, [
        _cache[6] || (_cache[6] = createBaseVNode("div", { class: "flex items-center justify-between" }, [
          createBaseVNode("div", null, [
            createBaseVNode("h1", { class: "text-2xl font-bold text-gray-800" }, "My Reservations"),
            createBaseVNode("p", { class: "text-gray-600 mt-1" }, "Manage your reserved books and due dates")
          ])
        ], -1)),
        loading.value ? (openBlock(), createElementBlock("div", _hoisted_2, [..._cache[0] || (_cache[0] = [
          createBaseVNode("div", { class: "animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600" }, null, -1)
        ])])) : reservations.value.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_3, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(reservations.value, (reservation) => {
            return openBlock(), createElementBlock("div", {
              key: reservation.id,
              class: "bg-white rounded-xl shadow-sm border border-gray-200 p-6 flex flex-col md:flex-row items-start md:items-center gap-6"
            }, [
              createBaseVNode("div", _hoisted_4, [
                reservation.book?.cover_url ? (openBlock(), createElementBlock("img", {
                  key: 0,
                  src: reservation.book.cover_url,
                  alt: reservation.book.title,
                  class: "w-full h-full object-cover"
                }, null, 8, _hoisted_5)) : (openBlock(), createElementBlock("div", _hoisted_6, [
                  createVNode(unref(Book), { class: "w-8 h-8" })
                ]))
              ]),
              createBaseVNode("div", _hoisted_7, [
                createBaseVNode("div", _hoisted_8, [
                  createBaseVNode("div", null, [
                    createBaseVNode("h3", _hoisted_9, toDisplayString(reservation.book?.title), 1),
                    createBaseVNode("p", _hoisted_10, toDisplayString(reservation.book?.author), 1)
                  ]),
                  createBaseVNode("span", {
                    class: normalizeClass([
                      "px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider",
                      getStatusColor(reservation.status)
                    ])
                  }, toDisplayString(formatStatus(reservation.status)), 3)
                ]),
                createBaseVNode("div", _hoisted_11, [
                  createBaseVNode("div", _hoisted_12, [
                    createVNode(unref(Calendar), { class: "w-4 h-4 mr-2 text-gray-400" }),
                    createTextVNode(" Reserved: " + toDisplayString(formatDate(reservation.created_at)), 1)
                  ]),
                  createBaseVNode("div", _hoisted_13, [
                    createVNode(unref(Clock), { class: "w-4 h-4 mr-2 text-gray-400" }),
                    createTextVNode(" Due: " + toDisplayString(formatDate(reservation.due_date)), 1)
                  ]),
                  createBaseVNode("div", _hoisted_14, [
                    createVNode(unref(CircleAlert), {
                      class: normalizeClass(["w-4 h-4 mr-2", getDaysRemainingColor(reservation.due_date)])
                    }, null, 8, ["class"]),
                    createBaseVNode("span", {
                      class: normalizeClass(getDaysRemainingColor(reservation.due_date))
                    }, toDisplayString(getDaysRemaining(reservation.due_date)), 3)
                  ])
                ])
              ]),
              createBaseVNode("div", _hoisted_15, [
                reservation.status === "reserved" ? (openBlock(), createElementBlock("button", {
                  key: 0,
                  onClick: ($event) => pickUpBook(reservation),
                  disabled: pickingUp.value === reservation.id,
                  class: "px-6 py-2 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50 flex items-center justify-center"
                }, [
                  pickingUp.value === reservation.id ? (openBlock(), createElementBlock("span", _hoisted_17)) : createCommentVNode("", true),
                  _cache[1] || (_cache[1] = createTextVNode(" Pick Up Book ", -1))
                ], 8, _hoisted_16)) : createCommentVNode("", true),
                reservation.status === "borrowed" || reservation.status === "overdue" ? (openBlock(), createElementBlock("button", {
                  key: 1,
                  onClick: ($event) => returnBook(reservation),
                  disabled: returning.value === reservation.id,
                  class: "px-6 py-2 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 flex items-center justify-center"
                }, [
                  returning.value === reservation.id ? (openBlock(), createElementBlock("span", _hoisted_19)) : createCommentVNode("", true),
                  _cache[2] || (_cache[2] = createTextVNode(" Return Book ", -1))
                ], 8, _hoisted_18)) : reservation.status === "pending_return" ? (openBlock(), createElementBlock("div", _hoisted_20, " Waiting for approval ")) : createCommentVNode("", true)
              ])
            ]);
          }), 128))
        ])) : (openBlock(), createElementBlock("div", _hoisted_21, [
          createVNode(unref(BookOpen), { class: "w-16 h-16 text-gray-300 mx-auto mb-4" }),
          _cache[4] || (_cache[4] = createBaseVNode("h3", { class: "text-lg font-medium text-gray-800 mb-2" }, "No active reservations", -1)),
          _cache[5] || (_cache[5] = createBaseVNode("p", { class: "text-gray-600 mb-6" }, "You haven't reserved any books yet.", -1)),
          createVNode(_component_router_link, {
            to: "/student/books",
            class: "inline-flex items-center px-6 py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-colors"
          }, {
            default: withCtx(() => [..._cache[3] || (_cache[3] = [
              createTextVNode(" Browse Catalog ", -1)
            ])]),
            _: 1
          })
        ]))
      ]);
    };
  }
});
export {
  _sfc_main as default
};
