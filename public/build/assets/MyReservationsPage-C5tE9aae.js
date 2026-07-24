import { d as defineComponent, r as ref, o as onMounted, a as createElementBlock, b as createBaseVNode, F as Fragment, k as renderList, f as createVNode, u as unref, w as withCtx, g as resolveComponent, L as studentAPI, t as toDisplayString, n as normalizeClass, j as createCommentVNode, i as createTextVNode, l as openBlock } from "./main-CP29_5Dg.js";
import { u as useSwal } from "./useSwal-pQW_XkRe.js";
import { B as BookOpen } from "./book-open-C5CD1i_v.js";
import { B as Book } from "./book-D-F80_Wo.js";
import { C as Calendar } from "./calendar-OYhy8Nsc.js";
import { C as Clock } from "./clock-Bt9n9pGR.js";
import { C as CircleAlert } from "./circle-alert-CkJil15G.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
/* empty css               */
import "./createLucideIcon-DTPudzWg.js";
const _hoisted_1 = { class: "space-y-6 pb-12 font-outfit" };
const _hoisted_2 = {
  key: 0,
  class: "flex flex-col items-center justify-center py-24 space-y-4"
};
const _hoisted_3 = {
  key: 1,
  class: "space-y-4 text-left animate-fade-in"
};
const _hoisted_4 = { class: "w-20 h-28 bg-slate-50 border border-slate-100 rounded-xl overflow-hidden flex-shrink-0 flex items-center justify-center shadow-inner" };
const _hoisted_5 = ["src", "alt"];
const _hoisted_6 = {
  key: 1,
  class: "w-full h-full flex flex-col items-center justify-center text-slate-300 bg-slate-50"
};
const _hoisted_7 = { class: "flex-1 min-w-0" };
const _hoisted_8 = { class: "flex flex-col sm:flex-row sm:items-start justify-between gap-2.5" };
const _hoisted_9 = { class: "text-left" };
const _hoisted_10 = ["title"];
const _hoisted_11 = { class: "text-xs text-slate-400 font-semibold mt-1" };
const _hoisted_12 = { class: "mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-500" };
const _hoisted_13 = { class: "flex items-center" };
const _hoisted_14 = { class: "flex items-center" };
const _hoisted_15 = { class: "flex items-center" };
const _hoisted_16 = { class: "flex flex-col gap-2 w-full md:w-auto flex-shrink-0" };
const _hoisted_17 = ["onClick", "disabled"];
const _hoisted_18 = {
  key: 0,
  class: "w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin"
};
const _hoisted_19 = ["onClick", "disabled"];
const _hoisted_20 = {
  key: 0,
  class: "w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin"
};
const _hoisted_21 = {
  key: 2,
  class: "text-center text-xs text-slate-400 font-semibold uppercase tracking-wide bg-slate-50 border border-slate-100/50 rounded-xl px-4 py-2"
};
const _hoisted_22 = {
  key: 2,
  class: "text-center py-20 bg-slate-100 rounded-2xl border border-dashed border-slate-200/80 p-8 font-outfit"
};
const _hoisted_23 = { class: "w-16 h-16 bg-slate-100 text-slate-400 rounded-full flex items-center justify-center mx-auto mb-4 border border-slate-200 shadow-inner" };
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
        showSuccess("Enjoy!", "Book status updated to collected. Please return it by the due date.");
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
      if (!dueDate) return "text-slate-400";
      const due = new Date(dueDate);
      const now = /* @__PURE__ */ new Date();
      const diffTime = due.getTime() - now.getTime();
      const diffDays = Math.ceil(diffTime / (1e3 * 60 * 60 * 24));
      if (diffDays < 0) return "text-red-650";
      if (diffDays <= 2) return "text-orange-655";
      return "text-green-655";
    };
    const getStatusColor = (status) => {
      switch (status) {
        case "pending":
          return "bg-amber-50 text-amber-600 border-amber-100";
        case "approved":
          return "bg-blue-50 text-blue-755 border-blue-100";
        case "rejected":
          return "bg-red-50 text-red-755 border-red-100";
        case "collected":
          return "bg-emerald-50 text-emerald-755 border-emerald-100";
        case "pending_return":
          return "bg-orange-50 text-orange-755 border-orange-100";
        case "returned":
          return "bg-slate-50 text-slate-500 border-slate-100";
        case "overdue":
          return "bg-red-50 text-red-755 border-red-100";
        default:
          return "bg-slate-50 text-slate-700 border-slate-100";
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
        loading.value ? (openBlock(), createElementBlock("div", _hoisted_2, [..._cache[0] || (_cache[0] = [
          createBaseVNode("div", { class: "animate-spin rounded-full h-10 w-10 border-2 border-blue-600 border-t-transparent" }, null, -1),
          createBaseVNode("p", { class: "text-xs font-semibold text-slate-400 uppercase tracking-wider animate-pulse" }, "Loading reservations...", -1)
        ])])) : reservations.value.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_3, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(reservations.value, (reservation) => {
            return openBlock(), createElementBlock("div", {
              key: reservation.id,
              class: "bg-white rounded-2xl border border-slate-100 hover:border-slate-200/80 shadow-sm hover:shadow-xl hover:shadow-slate-100/50 transition-all duration-350 p-5 flex flex-col md:flex-row items-start md:items-center gap-6"
            }, [
              createBaseVNode("div", _hoisted_4, [
                reservation.book?.cover_url ? (openBlock(), createElementBlock("img", {
                  key: 0,
                  src: reservation.book.cover_url,
                  alt: reservation.book.title,
                  class: "w-full h-full object-cover"
                }, null, 8, _hoisted_5)) : (openBlock(), createElementBlock("div", _hoisted_6, [
                  createVNode(unref(Book), { class: "w-7 h-7 stroke-1" })
                ]))
              ]),
              createBaseVNode("div", _hoisted_7, [
                createBaseVNode("div", _hoisted_8, [
                  createBaseVNode("div", _hoisted_9, [
                    createBaseVNode("h3", {
                      class: "font-semibold text-slate-800 text-base leading-snug line-clamp-1",
                      title: reservation.book?.title
                    }, toDisplayString(reservation.book?.title), 9, _hoisted_10),
                    createBaseVNode("p", _hoisted_11, "by " + toDisplayString(reservation.book?.author), 1)
                  ]),
                  createBaseVNode("span", {
                    class: normalizeClass([
                      "px-2.5 py-0.5 rounded-lg text-[9px] font-semibold uppercase tracking-wider border w-fit leading-none",
                      getStatusColor(reservation.status)
                    ])
                  }, toDisplayString(formatStatus(reservation.status)), 3)
                ]),
                createBaseVNode("div", _hoisted_12, [
                  createBaseVNode("div", _hoisted_13, [
                    createVNode(unref(Calendar), { class: "w-4 h-4 mr-2 text-slate-400" }),
                    createBaseVNode("span", null, "Reserved: " + toDisplayString(formatDate(reservation.created_at)), 1)
                  ]),
                  createBaseVNode("div", _hoisted_14, [
                    createVNode(unref(Clock), { class: "w-4 h-4 mr-2 text-slate-400" }),
                    createBaseVNode("span", null, "Due: " + toDisplayString(formatDate(reservation.due_date)), 1)
                  ]),
                  createBaseVNode("div", _hoisted_15, [
                    createVNode(unref(CircleAlert), {
                      class: normalizeClass(["w-4 h-4 mr-2 flex-shrink-0", getDaysRemainingColor(reservation.due_date)])
                    }, null, 8, ["class"]),
                    createBaseVNode("span", {
                      class: normalizeClass(["font-semibold uppercase tracking-wide text-[10px]", getDaysRemainingColor(reservation.due_date)])
                    }, toDisplayString(getDaysRemaining(reservation.due_date)), 3)
                  ])
                ])
              ]),
              createBaseVNode("div", _hoisted_16, [
                reservation.status === "approved" ? (openBlock(), createElementBlock("button", {
                  key: 0,
                  onClick: ($event) => pickUpBook(reservation),
                  disabled: pickingUp.value === reservation.id,
                  class: "px-5 py-2.5 bg-emerald-500 hover:opacity-95 text-white text-xs font-semibold rounded-xl shadow-md shadow-emerald-500/10 active:scale-98 transition-all flex items-center justify-center space-x-1.5 disabled:opacity-50"
                }, [
                  pickingUp.value === reservation.id ? (openBlock(), createElementBlock("span", _hoisted_18)) : createCommentVNode("", true),
                  _cache[1] || (_cache[1] = createBaseVNode("span", null, "Pick Up Book", -1))
                ], 8, _hoisted_17)) : createCommentVNode("", true),
                reservation.status === "collected" || reservation.status === "overdue" ? (openBlock(), createElementBlock("button", {
                  key: 1,
                  onClick: ($event) => returnBook(reservation),
                  disabled: returning.value === reservation.id,
                  class: "px-5 py-2.5 bg-blue-600 hover:opacity-95 text-white text-xs font-semibold rounded-xl shadow-md shadow-blue-500/10 active:scale-98 transition-all flex items-center justify-center space-x-1.5 disabled:opacity-50"
                }, [
                  returning.value === reservation.id ? (openBlock(), createElementBlock("span", _hoisted_20)) : createCommentVNode("", true),
                  _cache[2] || (_cache[2] = createBaseVNode("span", null, "Return Book", -1))
                ], 8, _hoisted_19)) : reservation.status === "pending_return" ? (openBlock(), createElementBlock("div", _hoisted_21, " Pending Approval ")) : createCommentVNode("", true)
              ])
            ]);
          }), 128))
        ])) : (openBlock(), createElementBlock("div", _hoisted_22, [
          createBaseVNode("div", _hoisted_23, [
            createVNode(unref(BookOpen), { class: "w-7 h-7 text-slate-400" })
          ]),
          _cache[4] || (_cache[4] = createBaseVNode("h3", { class: "text-base font-semibold text-slate-800 mb-1" }, "No active reservations", -1)),
          _cache[5] || (_cache[5] = createBaseVNode("p", { class: "text-xs text-slate-400 max-w-sm mx-auto mb-6 leading-relaxed" }, "You haven't reserved any books yet. Check out our catalog to reserve one.", -1)),
          createVNode(_component_router_link, {
            to: "/student/books",
            class: "inline-flex items-center px-5 py-2.5 bg-blue-600 text-white rounded-xl text-xs font-semibold shadow-md shadow-blue-500/10 active:scale-98 hover:opacity-95 transition-all uppercase tracking-wider"
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
const MyReservationsPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-a4a4377b"]]);
export {
  MyReservationsPage as default
};
