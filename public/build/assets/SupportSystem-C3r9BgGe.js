import { c as createLucideIcon, d as defineComponent, z as useAuth, a as computed, r as ref, o as onMounted, l as useSettings, I as watch, b as createElementBlock, p as createCommentVNode, e as createBaseVNode, g as createVNode, u as unref, t as toDisplayString, n as normalizeClass, C as Clock, s as withDirectives, v as vModelText, F as Fragment, k as renderList, j as createTextVNode, R as RefreshCw, $ as withKeys, B as withModifiers, i as createBlock, H as vModelSelect, a0 as supportAPI, S as studentAPI, P as nextTick, m as openBlock, _ as _export_sfc } from "./main-BeUqjoax.js";
import { u as useSwal } from "./useSwal-pQW_XkRe.js";
import { M as Mail } from "./mail-CdJEFECh.js";
import { P as Plus } from "./plus-R3pbBkbH.js";
import { S as Search } from "./search-CAjRd0eY.js";
import { L as LoaderCircle } from "./loader-circle-AJrGvSz3.js";
import { L as LifeBuoy } from "./life-buoy--h1ho8pU.js";
import { A as ArrowLeft } from "./arrow-left-BVjn5tww.js";
import { U as User } from "./user-Jwf_R05Y.js";
import { L as Lock } from "./lock-CC7ENFPD.js";
import { S as Send } from "./send-BcToueAn.js";
import { X } from "./x-Dj9LNodU.js";
import { f as formatDistanceToNow } from "./formatDistanceToNow-DazbzTWW.js";
import { f as format } from "./format-DBvmWExF.js";
const CircleCheck = createLucideIcon("circle-check", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
]);
const Headphones = createLucideIcon("headphones", [
  [
    "path",
    {
      d: "M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3",
      key: "1xhozi"
    }
  ]
]);
const PhoneCall = createLucideIcon("phone-call", [
  ["path", { d: "M13 2a9 9 0 0 1 9 9", key: "1itnx2" }],
  ["path", { d: "M13 6a5 5 0 0 1 5 5", key: "11nki7" }],
  [
    "path",
    {
      d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
      key: "9njp5v"
    }
  ]
]);
const Ticket = createLucideIcon("ticket", [
  [
    "path",
    {
      d: "M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",
      key: "qn84l0"
    }
  ],
  ["path", { d: "M13 5v2", key: "dyzc3o" }],
  ["path", { d: "M13 17v2", key: "1ont0d" }],
  ["path", { d: "M13 11v2", key: "1wjjxi" }]
]);
const _hoisted_1 = { class: "space-y-5 text-slate-700 font-outfit" };
const _hoisted_2 = {
  key: 0,
  class: "bg-gradient-to-r from-blue-600 via-blue-600 to-indigo-700 rounded-2xl p-5 text-white shadow-md relative overflow-hidden flex flex-col md:flex-row md:items-center justify-between gap-4"
};
const _hoisted_3 = { class: "space-y-1 relative z-10" };
const _hoisted_4 = { class: "inline-flex items-center space-x-2 bg-white/15 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider text-blue-100 mb-1" };
const _hoisted_5 = { class: "flex flex-wrap items-center gap-3 relative z-10" };
const _hoisted_6 = ["href"];
const _hoisted_7 = ["href"];
const _hoisted_8 = { class: "grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-5" };
const _hoisted_9 = { class: "absolute -right-4 -top-4 text-slate-50/10 group-hover:scale-105 transition-transform duration-500 pointer-events-none" };
const _hoisted_10 = { class: "flex justify-between items-start relative z-10" };
const _hoisted_11 = { class: "text-2xl sm:text-3xl font-extrabold mt-1.5 sm:mt-2 tracking-tight" };
const _hoisted_12 = { class: "absolute -right-4 -top-4 text-slate-50/10 group-hover:scale-105 transition-transform duration-500 pointer-events-none" };
const _hoisted_13 = { class: "flex justify-between items-start relative z-10" };
const _hoisted_14 = { class: "text-2xl sm:text-3xl font-extrabold mt-1.5 sm:mt-2 tracking-tight" };
const _hoisted_15 = { class: "absolute -right-4 -top-4 text-slate-50/10 group-hover:scale-105 transition-transform duration-500 pointer-events-none" };
const _hoisted_16 = { class: "flex justify-between items-start relative z-10" };
const _hoisted_17 = { class: "text-2xl sm:text-3xl font-extrabold mt-1.5 sm:mt-2 tracking-tight" };
const _hoisted_18 = { class: "flex flex-col md:flex-row h-[calc(100vh-14rem)] min-h-[500px] max-h-[750px] bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden font-outfit" };
const _hoisted_19 = { class: "p-4 border-b border-slate-100 flex justify-between items-center bg-white text-left" };
const _hoisted_20 = { class: "p-3 bg-white border-b border-slate-50" };
const _hoisted_21 = { class: "relative" };
const _hoisted_22 = { class: "flex-1 overflow-y-auto divide-y divide-slate-100/50" };
const _hoisted_23 = {
  key: 0,
  class: "p-8 text-center flex flex-col items-center justify-center h-full"
};
const _hoisted_24 = {
  key: 1,
  class: "p-8 text-center text-slate-400 flex flex-col items-center justify-center h-full"
};
const _hoisted_25 = ["onClick"];
const _hoisted_26 = { class: "flex justify-between items-start gap-2 mb-1.5" };
const _hoisted_27 = { class: "flex flex-shrink-0 gap-1 items-center" };
const _hoisted_28 = { class: "text-[10px] text-slate-400 line-clamp-1 mb-2 pr-2 font-medium" };
const _hoisted_29 = { class: "flex justify-between items-center text-[10px] text-slate-450 font-semibold mt-1" };
const _hoisted_30 = { class: "flex items-center text-slate-500 truncate mr-2" };
const _hoisted_31 = { class: "truncate" };
const _hoisted_32 = { class: "text-slate-400 flex-shrink-0" };
const _hoisted_33 = ["title"];
const _hoisted_34 = { class: "bg-white p-3.5 sm:p-4 border-b border-slate-100 flex justify-between items-center shadow-sm relative z-10 text-left" };
const _hoisted_35 = { class: "flex items-center space-x-2.5 sm:space-x-3.5 min-w-0" };
const _hoisted_36 = { class: "w-8 h-8 sm:w-9 sm:h-9 border border-slate-100 rounded-xl bg-slate-50 flex items-center justify-center text-slate-600 flex-shrink-0" };
const _hoisted_37 = { class: "min-w-0" };
const _hoisted_38 = { class: "font-bold text-slate-800 text-xs sm:text-sm leading-tight truncate" };
const _hoisted_39 = { class: "text-[10px] text-slate-400 mt-0.5 font-semibold flex flex-wrap items-center gap-1.5 leading-none" };
const _hoisted_40 = { class: "font-bold text-slate-600" };
const _hoisted_41 = { class: "px-1.5 py-0.5 rounded bg-slate-50 border border-slate-100 text-[8px] uppercase font-bold text-slate-500" };
const _hoisted_42 = { class: "flex items-center space-x-1.5 sm:space-x-2 flex-shrink-0" };
const _hoisted_43 = ["value", "disabled"];
const _hoisted_44 = {
  key: 2,
  class: "px-2 py-1 rounded-xl bg-slate-100 border border-slate-200 text-slate-500 text-[9px] sm:text-[10px] font-bold uppercase tracking-wider flex items-center gap-1"
};
const _hoisted_45 = {
  key: 0,
  class: "flex items-center space-x-1 mb-1.5 opacity-80 text-[8px] font-bold text-slate-400 uppercase tracking-wider"
};
const _hoisted_46 = { class: "font-extrabold" };
const _hoisted_47 = { class: "whitespace-pre-wrap leading-relaxed" };
const _hoisted_48 = {
  key: 0,
  class: "p-3.5 sm:p-4 bg-slate-100/80 border-t border-slate-200 text-center"
};
const _hoisted_49 = { class: "text-xs font-bold text-slate-500 flex items-center justify-center gap-1.5" };
const _hoisted_50 = {
  key: 1,
  class: "p-3 sm:p-4 bg-white border-t border-slate-100"
};
const _hoisted_51 = { class: "flex items-end space-x-2" };
const _hoisted_52 = { class: "flex-1 relative" };
const _hoisted_53 = ["onKeydown"];
const _hoisted_54 = ["disabled"];
const _hoisted_55 = {
  key: 1,
  class: "flex-1 flex flex-col items-center justify-center p-8 sm:p-12 text-center h-full"
};
const _hoisted_56 = { class: "w-14 h-14 sm:w-16 sm:h-16 border border-slate-100 rounded-2xl flex items-center justify-center mb-4 bg-white text-slate-400" };
const _hoisted_57 = {
  key: 1,
  class: "fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in"
};
const _hoisted_58 = { class: "relative bg-white rounded-3xl shadow-xl w-full max-w-md max-h-[90vh] overflow-y-auto border border-slate-100 text-left animate-in duration-200" };
const _hoisted_59 = { class: "p-5 sm:p-6 border-b border-slate-100 flex justify-between items-center text-left" };
const _hoisted_60 = { class: "grid grid-cols-2 gap-4" };
const _hoisted_61 = { key: 0 };
const _hoisted_62 = ["value"];
const _hoisted_63 = { class: "pt-2 flex space-x-3" };
const _hoisted_64 = ["disabled"];
const _hoisted_65 = { key: 0 };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "SupportSystem",
  props: {
    role: {}
  },
  setup(__props) {
    const props = __props;
    const { user: currentUser } = useAuth();
    const { contactEmail, contactPhone, fetchPublicSettings } = useSettings();
    const { toast } = useSwal();
    const userRole = computed(() => props.role);
    const tickets = ref([]);
    const libraries = ref([]);
    const loading = ref(true);
    const selectedTicket = ref(null);
    const searchQuery = ref("");
    const newMessage = ref("");
    const sending = ref(false);
    const creating = ref(false);
    const showCreateModal = ref(false);
    const messageContainer = ref(null);
    const filterStatus = ref("all");
    const mobileView = ref("list");
    const stats = computed(() => {
      const all = tickets.value.length;
      const open = tickets.value.filter((t) => ["open", "in_progress"].includes(t.status)).length;
      const closed = tickets.value.filter((t) => ["resolved", "closed"].includes(t.status)).length;
      return { all, open, closed };
    });
    const createForm = ref({
      subject: "",
      message: "",
      priority: "medium",
      ticket_type: "library",
      library_id: null
    });
    const filteredTickets = computed(() => {
      let list = tickets.value;
      if (filterStatus.value === "open") {
        list = list.filter((t) => ["open", "in_progress"].includes(t.status));
      } else if (filterStatus.value === "closed") {
        list = list.filter((t) => ["resolved", "closed"].includes(t.status));
      }
      if (!searchQuery.value) return list;
      const query = searchQuery.value.toLowerCase();
      return list.filter(
        (t) => t.subject.toLowerCase().includes(query) || t.user?.name.toLowerCase().includes(query)
      );
    });
    const fetchTickets = async () => {
      try {
        loading.value = true;
        tickets.value = await supportAPI.getTickets(userRole.value);
      } catch (error) {
        toast("Error", "Could not load tickets", "error");
      } finally {
        loading.value = false;
      }
    };
    const fetchLibraries = async () => {
      if (userRole.value !== "student") return;
      try {
        libraries.value = await studentAPI.getLibraries();
      } catch (error) {
        console.error("Error loading libraries", error);
      }
    };
    const selectTicket = async (ticket) => {
      selectedTicket.value = ticket;
      mobileView.value = "chat";
      await fetchTicketDetails(ticket.id);
    };
    const fetchTicketDetails = async (id) => {
      try {
        const details = await supportAPI.getTicket(userRole.value, id);
        selectedTicket.value = details;
        scrollToBottom();
      } catch (error) {
        toast("Error", "Could not load ticket details", "error");
      }
    };
    const handleSendMessage = async () => {
      if (!newMessage.value.trim() || !selectedTicket.value || sending.value) return;
      if (selectedTicket.value.status === "closed") {
        toast("Closed Complaint", "This complaint is closed and cannot receive new messages.", "warning");
        return;
      }
      try {
        sending.value = true;
        const message = await supportAPI.sendMessage(
          userRole.value,
          selectedTicket.value.id,
          newMessage.value
        );
        if (selectedTicket.value.messages) {
          selectedTicket.value.messages.push(message);
        } else {
          selectedTicket.value.messages = [message];
        }
        newMessage.value = "";
        scrollToBottom();
      } catch (error) {
        const msg = error.response?.data?.message || "Could not send message";
        toast("Error", msg, "error");
      } finally {
        sending.value = false;
      }
    };
    const handleCreateTicket = async () => {
      if (createForm.value.ticket_type === "library" && !createForm.value.library_id) {
        toast("Wait", "Please select a library for library issues", "warning");
        return;
      }
      try {
        creating.value = true;
        const payload = { ...createForm.value };
        if (payload.ticket_type === "system") payload.library_id = null;
        const ticket = await supportAPI.createTicket(payload);
        tickets.value.unshift(ticket);
        selectedTicket.value = ticket;
        mobileView.value = "chat";
        showCreateModal.value = false;
        createForm.value = {
          subject: "",
          message: "",
          priority: "medium",
          ticket_type: "library",
          library_id: null
        };
        toast("Success", "Ticket created successfully", "success");
      } catch (error) {
        toast("Error", "Could not create ticket", "error");
      } finally {
        creating.value = false;
      }
    };
    const handleStatusChange = async (event) => {
      if (!selectedTicket.value) return;
      const newStatus = event.target.value;
      if (selectedTicket.value.status === "closed" && newStatus !== "closed") {
        toast("Closed Complaint", "This complaint is permanently closed and cannot be reopened.", "warning");
        event.target.value = "closed";
        return;
      }
      try {
        await supportAPI.updateStatus(userRole.value, selectedTicket.value.id, newStatus);
        selectedTicket.value.status = newStatus;
        const index = tickets.value.findIndex((t) => t.id === selectedTicket.value.id);
        if (index !== -1) tickets.value[index].status = newStatus;
        toast("Status Updated", `Ticket is now ${newStatus}`, "success");
      } catch (error) {
        const msg = error.response?.data?.message || "Could not update status";
        toast("Error", msg, "error");
      }
    };
    const handleCloseTicket = async () => {
      if (!selectedTicket.value) return;
      try {
        await supportAPI.updateStatus(userRole.value, selectedTicket.value.id, "closed");
        selectedTicket.value.status = "closed";
        const index = tickets.value.findIndex((t) => t.id === selectedTicket.value.id);
        if (index !== -1) tickets.value[index].status = "closed";
        toast("Success", "Complaint closed successfully", "success");
      } catch (error) {
        const msg = error.response?.data?.message || "Could not close complaint";
        toast("Error", msg, "error");
      }
    };
    const scrollToBottom = () => {
      nextTick(() => {
        if (messageContainer.value) {
          messageContainer.value.scrollTop = messageContainer.value.scrollHeight;
        }
      });
    };
    const formatDate = (dateString) => {
      return formatDistanceToNow(new Date(dateString), { addSuffix: true });
    };
    const formatFullDate = (dateString) => {
      return format(new Date(dateString), "MMM d, yyyy h:mm a");
    };
    const getStatusClass = (status) => {
      switch (status) {
        case "open":
          return "bg-emerald-50 border-emerald-100 text-emerald-650";
        case "in_progress":
          return "bg-blue-50 border-blue-100 text-blue-650";
        case "resolved":
          return "bg-slate-50 border-slate-200 text-slate-500";
        case "closed":
          return "bg-red-50 border-red-100 text-red-650";
        default:
          return "bg-slate-50 border-slate-200 text-slate-500";
      }
    };
    onMounted(() => {
      fetchPublicSettings();
      fetchTickets();
      fetchLibraries();
    });
    watch(selectedTicket, () => {
      scrollToBottom();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        userRole.value === "student" ? (openBlock(), createElementBlock("div", _hoisted_2, [
          _cache[20] || (_cache[20] = createBaseVNode("div", { class: "absolute -right-10 -bottom-10 w-48 h-48 bg-white/10 rounded-full blur-2xl pointer-events-none" }, null, -1)),
          createBaseVNode("div", _hoisted_3, [
            createBaseVNode("div", _hoisted_4, [
              createVNode(unref(Headphones), { class: "w-3.5 h-3.5" }),
              _cache[17] || (_cache[17] = createBaseVNode("span", null, "Direct Student Helpline", -1))
            ]),
            _cache[18] || (_cache[18] = createBaseVNode("h3", { class: "text-lg sm:text-xl font-bold tracking-tight" }, "Need Immediate Support?", -1)),
            _cache[19] || (_cache[19] = createBaseVNode("p", { class: "text-xs text-blue-100/90 font-normal max-w-xl" }, " Reach out directly via email or call our helpline for urgent inquiries regarding seat bookings, subscriptions, or account assistance. ", -1))
          ]),
          createBaseVNode("div", _hoisted_5, [
            unref(contactEmail) ? (openBlock(), createElementBlock("a", {
              key: 0,
              href: `mailto:${unref(contactEmail)}`,
              class: "flex items-center space-x-2.5 bg-white/10 hover:bg-white/20 border border-white/20 px-4 py-2.5 rounded-xl text-xs font-semibold text-white transition-all backdrop-blur-sm shadow-xs"
            }, [
              createVNode(unref(Mail), { class: "w-4 h-4 text-blue-200" }),
              createBaseVNode("span", null, toDisplayString(unref(contactEmail)), 1)
            ], 8, _hoisted_6)) : createCommentVNode("", true),
            unref(contactPhone) ? (openBlock(), createElementBlock("a", {
              key: 1,
              href: `tel:${unref(contactPhone)}`,
              class: "flex items-center space-x-2.5 bg-white text-blue-700 hover:bg-blue-50 px-4 py-2.5 rounded-xl text-xs font-bold transition-all shadow-sm"
            }, [
              createVNode(unref(PhoneCall), { class: "w-4 h-4 text-blue-600" }),
              createBaseVNode("span", null, toDisplayString(unref(contactPhone)), 1)
            ], 8, _hoisted_7)) : createCommentVNode("", true)
          ])
        ])) : createCommentVNode("", true),
        createBaseVNode("div", _hoisted_8, [
          createBaseVNode("div", {
            onClick: _cache[0] || (_cache[0] = ($event) => filterStatus.value = "all"),
            class: normalizeClass([
              "p-4 sm:p-5 rounded-2xl border transition-all cursor-pointer shadow-sm relative overflow-hidden group text-left flex flex-col justify-between min-h-[95px] sm:min-h-[110px]",
              filterStatus.value === "all" ? userRole.value === "student" ? "bg-gradient-to-br from-blue-600 to-blue-700 border-blue-700 text-white shadow-blue-500/10" : userRole.value === "admin" ? "bg-gradient-to-br from-purple-600 to-purple-700 border-purple-650 text-white shadow-purple-500/10" : "bg-gradient-to-br from-emerald-600 to-teal-700 border-emerald-600 text-white shadow-emerald-500/10" : "bg-white border-slate-100 hover:border-slate-200 hover:translate-y-[-1px] text-slate-800"
            ])
          }, [
            createBaseVNode("div", _hoisted_9, [
              createVNode(unref(Ticket), {
                class: normalizeClass(["w-20 h-20 stroke-1", filterStatus.value === "all" ? "text-white/5" : "text-slate-100"])
              }, null, 8, ["class"])
            ]),
            createBaseVNode("div", _hoisted_10, [
              createBaseVNode("div", null, [
                createBaseVNode("p", {
                  class: normalizeClass(["text-[10px] font-bold uppercase tracking-wider", filterStatus.value === "all" ? "text-white/80" : "text-slate-400"])
                }, "Total Tickets", 2),
                createBaseVNode("h4", _hoisted_11, toDisplayString(stats.value.all), 1)
              ]),
              createBaseVNode("div", {
                class: normalizeClass(["p-2 sm:p-2.5 rounded-xl border", filterStatus.value === "all" ? "bg-white/10 border-white/20 text-white" : "bg-slate-50 border-slate-100 text-slate-500"])
              }, [
                createVNode(unref(Ticket), { class: "w-4 h-4" })
              ], 2)
            ])
          ], 2),
          createBaseVNode("div", {
            onClick: _cache[1] || (_cache[1] = ($event) => filterStatus.value = "open"),
            class: normalizeClass([
              "p-4 sm:p-5 rounded-2xl border transition-all cursor-pointer shadow-sm relative overflow-hidden group text-left flex flex-col justify-between min-h-[95px] sm:min-h-[110px]",
              filterStatus.value === "open" ? userRole.value === "student" ? "bg-gradient-to-br from-blue-600 to-blue-700 border-blue-700 text-white shadow-blue-500/10" : userRole.value === "admin" ? "bg-gradient-to-br from-purple-600 to-purple-700 border-purple-650 text-white shadow-purple-500/10" : "bg-gradient-to-br from-emerald-600 to-teal-700 border-emerald-600 text-white shadow-emerald-500/10" : "bg-white border-slate-100 hover:border-slate-200 hover:translate-y-[-1px] text-slate-800"
            ])
          }, [
            createBaseVNode("div", _hoisted_12, [
              createVNode(unref(Clock), {
                class: normalizeClass(["w-20 h-20 stroke-1", filterStatus.value === "open" ? "text-white/5" : "text-slate-100"])
              }, null, 8, ["class"])
            ]),
            createBaseVNode("div", _hoisted_13, [
              createBaseVNode("div", null, [
                createBaseVNode("p", {
                  class: normalizeClass(["text-[10px] font-bold uppercase tracking-wider", filterStatus.value === "open" ? "text-white/80" : "text-slate-400"])
                }, "Open Tickets", 2),
                createBaseVNode("h4", _hoisted_14, toDisplayString(stats.value.open), 1)
              ]),
              createBaseVNode("div", {
                class: normalizeClass(["p-2 sm:p-2.5 rounded-xl border", filterStatus.value === "open" ? "bg-white/10 border-white/20 text-white" : "bg-amber-50 border-amber-100/80 text-amber-600"])
              }, [
                createVNode(unref(Clock), { class: "w-4 h-4" })
              ], 2)
            ])
          ], 2),
          createBaseVNode("div", {
            onClick: _cache[2] || (_cache[2] = ($event) => filterStatus.value = "closed"),
            class: normalizeClass([
              "p-4 sm:p-5 rounded-2xl border transition-all cursor-pointer shadow-sm relative overflow-hidden group text-left flex flex-col justify-between min-h-[95px] sm:min-h-[110px]",
              filterStatus.value === "closed" ? userRole.value === "student" ? "bg-gradient-to-br from-blue-600 to-blue-700 border-blue-700 text-white shadow-blue-500/10" : userRole.value === "admin" ? "bg-gradient-to-br from-purple-600 to-purple-700 border-purple-650 text-white shadow-purple-500/10" : "bg-gradient-to-br from-emerald-600 to-teal-700 border-emerald-600 text-white shadow-emerald-500/10" : "bg-white border-slate-100 hover:border-slate-200 hover:translate-y-[-1px] text-slate-800"
            ])
          }, [
            createBaseVNode("div", _hoisted_15, [
              createVNode(unref(CircleCheck), {
                class: normalizeClass(["w-20 h-20 stroke-1", filterStatus.value === "closed" ? "text-white/5" : "text-slate-100"])
              }, null, 8, ["class"])
            ]),
            createBaseVNode("div", _hoisted_16, [
              createBaseVNode("div", null, [
                createBaseVNode("p", {
                  class: normalizeClass(["text-[10px] font-bold uppercase tracking-wider", filterStatus.value === "closed" ? "text-white/80" : "text-slate-400"])
                }, "Resolved / Closed", 2),
                createBaseVNode("h4", _hoisted_17, toDisplayString(stats.value.closed), 1)
              ]),
              createBaseVNode("div", {
                class: normalizeClass(["p-2 sm:p-2.5 rounded-xl border", filterStatus.value === "closed" ? "bg-white/10 border-white/20 text-white" : "bg-emerald-50 border-emerald-100/80 text-emerald-600"])
              }, [
                createVNode(unref(CircleCheck), { class: "w-4 h-4" })
              ], 2)
            ])
          ], 2)
        ]),
        createBaseVNode("div", _hoisted_18, [
          createBaseVNode("div", {
            class: normalizeClass([
              "w-full md:w-80 lg:w-1/3 border-r border-slate-100 flex flex-col bg-slate-50/20 flex-shrink-0 h-full",
              selectedTicket.value && mobileView.value === "chat" ? "hidden md:flex" : "flex"
            ])
          }, [
            createBaseVNode("div", _hoisted_19, [
              _cache[22] || (_cache[22] = createBaseVNode("h2", { class: "text-xs font-bold text-slate-800 uppercase tracking-wider" }, "Tickets", -1)),
              userRole.value === "student" ? (openBlock(), createElementBlock("button", {
                key: 0,
                onClick: _cache[3] || (_cache[3] = ($event) => showCreateModal.value = true),
                class: "px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl shadow-sm hover:shadow active:scale-95 transition-all flex items-center justify-center cursor-pointer border border-transparent gap-1.5",
                title: "Create New Ticket"
              }, [
                createVNode(unref(Plus), { class: "w-4 h-4" }),
                _cache[21] || (_cache[21] = createBaseVNode("span", null, "New Ticket", -1))
              ])) : createCommentVNode("", true)
            ]),
            createBaseVNode("div", _hoisted_20, [
              createBaseVNode("div", _hoisted_21, [
                createVNode(unref(Search), { class: "absolute left-3.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400" }),
                withDirectives(createBaseVNode("input", {
                  "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => searchQuery.value = $event),
                  type: "text",
                  placeholder: "Search tickets...",
                  class: "w-full pl-9 pr-4 py-2 border border-slate-200 focus:border-slate-350 focus:bg-white rounded-xl text-xs font-semibold focus:outline-none focus:ring-4 focus:ring-slate-100/50 bg-slate-50/50 transition-all outline-none"
                }, null, 512), [
                  [vModelText, searchQuery.value]
                ])
              ])
            ]),
            createBaseVNode("div", _hoisted_22, [
              loading.value ? (openBlock(), createElementBlock("div", _hoisted_23, [
                createVNode(unref(LoaderCircle), { class: "w-6 h-6 animate-spin text-slate-400 mb-2" }),
                _cache[23] || (_cache[23] = createBaseVNode("p", { class: "text-[10px] text-slate-400 font-bold uppercase tracking-wider" }, "Loading tickets...", -1))
              ])) : filteredTickets.value.length === 0 ? (openBlock(), createElementBlock("div", _hoisted_24, [
                createVNode(unref(LifeBuoy), { class: "w-8 h-8 text-slate-200 mb-3" }),
                _cache[24] || (_cache[24] = createBaseVNode("p", { class: "text-xs font-semibold tracking-wide italic text-slate-400" }, "No tickets found.", -1))
              ])) : (openBlock(true), createElementBlock(Fragment, { key: 2 }, renderList(filteredTickets.value, (ticket) => {
                return openBlock(), createElementBlock("div", {
                  key: ticket.id,
                  onClick: ($event) => selectTicket(ticket),
                  class: normalizeClass([
                    "p-4 cursor-pointer hover:bg-slate-50/50 transition-all text-left border-l-4 relative",
                    selectedTicket.value?.id === ticket.id ? userRole.value === "student" ? "bg-blue-50/40 border-blue-600" : userRole.value === "admin" ? "bg-purple-50/40 border-purple-600" : "bg-emerald-50/40 border-emerald-600" : "border-transparent"
                  ])
                }, [
                  createBaseVNode("div", _hoisted_26, [
                    createBaseVNode("h3", {
                      class: normalizeClass(["text-xs font-bold truncate pr-1", selectedTicket.value?.id === ticket.id ? "text-slate-800" : "text-slate-700"])
                    }, toDisplayString(ticket.subject), 3),
                    createBaseVNode("div", _hoisted_27, [
                      createBaseVNode("span", {
                        class: normalizeClass([
                          "text-[8px] px-1.5 py-0.5 rounded-md font-bold uppercase tracking-wide border",
                          ticket.ticket_type === "library" ? "bg-indigo-50 border-indigo-100 text-indigo-700" : "bg-amber-50 border-amber-100 text-amber-700"
                        ])
                      }, toDisplayString(ticket.ticket_type), 3),
                      createBaseVNode("span", {
                        class: normalizeClass([
                          "text-[8px] px-1.5 py-0.5 rounded-md font-bold uppercase tracking-wide border",
                          getStatusClass(ticket.status)
                        ])
                      }, toDisplayString(ticket.status.replace("_", " ")), 3)
                    ])
                  ]),
                  createBaseVNode("p", _hoisted_28, toDisplayString(ticket.messages?.[0]?.message || "No messages"), 1),
                  createBaseVNode("div", _hoisted_29, [
                    createBaseVNode("span", _hoisted_30, [
                      createVNode(unref(User), { class: "w-3.5 h-3.5 mr-1 text-slate-400 flex-shrink-0" }),
                      createBaseVNode("span", _hoisted_31, toDisplayString(ticket.user?.name || "User"), 1)
                    ]),
                    createBaseVNode("span", _hoisted_32, toDisplayString(formatDate(ticket.created_at)), 1)
                  ]),
                  createBaseVNode("span", {
                    class: normalizeClass([
                      "absolute right-2.5 top-2 w-1.5 h-1.5 rounded-full",
                      ticket.priority === "urgent" ? "bg-red-500" : ticket.priority === "high" ? "bg-orange-500" : ticket.priority === "medium" ? "bg-blue-500" : "bg-slate-300"
                    ]),
                    title: `Priority: ${ticket.priority}`
                  }, null, 10, _hoisted_33)
                ], 10, _hoisted_25);
              }), 128))
            ])
          ], 2),
          createBaseVNode("div", {
            class: normalizeClass([
              "w-full flex-1 flex flex-col bg-slate-50/30 min-w-0 h-full",
              !selectedTicket.value || mobileView.value === "list" ? "hidden md:flex" : "flex"
            ])
          }, [
            selectedTicket.value ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
              createBaseVNode("div", _hoisted_34, [
                createBaseVNode("div", _hoisted_35, [
                  createBaseVNode("button", {
                    onClick: _cache[5] || (_cache[5] = ($event) => mobileView.value = "list"),
                    class: "md:hidden p-1.5 text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors",
                    title: "Back to Tickets"
                  }, [
                    createVNode(unref(ArrowLeft), { class: "w-4 h-4" })
                  ]),
                  createBaseVNode("div", _hoisted_36, [
                    createVNode(unref(User), { class: "w-4 h-4" })
                  ]),
                  createBaseVNode("div", _hoisted_37, [
                    createBaseVNode("h3", _hoisted_38, toDisplayString(selectedTicket.value.subject), 1),
                    createBaseVNode("p", _hoisted_39, [
                      createTextVNode(" Ticket #" + toDisplayString(selectedTicket.value.id) + " • From: ", 1),
                      createBaseVNode("span", _hoisted_40, toDisplayString(selectedTicket.value.user?.name), 1),
                      createBaseVNode("span", _hoisted_41, toDisplayString(selectedTicket.value.ticket_type), 1)
                    ])
                  ])
                ]),
                createBaseVNode("div", _hoisted_42, [
                  userRole.value !== "student" ? (openBlock(), createElementBlock("select", {
                    key: 0,
                    onChange: _cache[6] || (_cache[6] = ($event) => handleStatusChange($event)),
                    value: selectedTicket.value.status,
                    disabled: selectedTicket.value.status === "closed",
                    class: "text-[10px] sm:text-[11px] font-bold text-slate-600 bg-slate-50 border border-slate-200 rounded-xl px-2 sm:px-2.5 py-1.5 focus:outline-none focus:ring-4 focus:ring-slate-100/50 cursor-pointer transition-all disabled:opacity-75 disabled:cursor-not-allowed"
                  }, [..._cache[25] || (_cache[25] = [
                    createBaseVNode("option", { value: "open" }, "Open", -1),
                    createBaseVNode("option", { value: "in_progress" }, "In Progress", -1),
                    createBaseVNode("option", { value: "resolved" }, "Resolved", -1),
                    createBaseVNode("option", { value: "closed" }, "Closed", -1)
                  ])], 40, _hoisted_43)) : ["open", "in_progress", "resolved"].includes(selectedTicket.value.status) ? (openBlock(), createElementBlock("button", {
                    key: 1,
                    onClick: handleCloseTicket,
                    class: "text-[9px] sm:text-[10px] px-2.5 sm:px-3 py-1.5 bg-rose-50 hover:bg-rose-100 text-rose-600 border border-rose-200/50 rounded-xl transition-all font-bold uppercase tracking-wider cursor-pointer whitespace-nowrap"
                  }, " Close Ticket ")) : createCommentVNode("", true),
                  selectedTicket.value.status === "closed" ? (openBlock(), createElementBlock("span", _hoisted_44, [
                    createVNode(unref(Lock), { class: "w-3 h-3 text-slate-400" }),
                    _cache[26] || (_cache[26] = createTextVNode(" Locked ", -1))
                  ])) : createCommentVNode("", true),
                  createBaseVNode("button", {
                    onClick: _cache[7] || (_cache[7] = ($event) => fetchTicketDetails(selectedTicket.value.id)),
                    class: "p-1.5 sm:p-2 text-slate-400 hover:text-slate-600 transition-colors cursor-pointer",
                    title: "Refresh Conversation"
                  }, [
                    createVNode(unref(RefreshCw), { class: "w-4 h-4" })
                  ])
                ])
              ]),
              createBaseVNode("div", {
                class: "flex-1 overflow-y-auto p-4 sm:p-6 space-y-3.5 bg-slate-50/30",
                ref_key: "messageContainer",
                ref: messageContainer
              }, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(selectedTicket.value.messages, (message) => {
                  return openBlock(), createElementBlock("div", {
                    key: message.id,
                    class: normalizeClass([
                      "flex text-left",
                      message.user_id === unref(currentUser)?.id ? "justify-end" : "justify-start"
                    ])
                  }, [
                    createBaseVNode("div", {
                      class: normalizeClass([
                        "max-w-[85%] sm:max-w-[70%] p-3.5 sm:p-4 rounded-2xl text-xs font-medium leading-relaxed shadow-sm text-left relative",
                        message.user_id === unref(currentUser)?.id ? userRole.value === "student" ? "bg-blue-600 text-white rounded-br-none" : userRole.value === "admin" ? "bg-purple-650 text-white rounded-br-none" : "bg-emerald-700 text-white rounded-br-none" : "bg-white text-slate-700 rounded-bl-none border border-slate-100/70"
                      ])
                    }, [
                      message.user_id !== unref(currentUser)?.id ? (openBlock(), createElementBlock("div", _hoisted_45, [
                        createBaseVNode("span", null, toDisplayString(message.user?.role || "Support"), 1),
                        _cache[27] || (_cache[27] = createBaseVNode("span", null, "•", -1)),
                        createBaseVNode("span", _hoisted_46, toDisplayString(message.user?.name), 1)
                      ])) : createCommentVNode("", true),
                      createBaseVNode("p", _hoisted_47, toDisplayString(message.message), 1),
                      createBaseVNode("div", {
                        class: normalizeClass([
                          "text-[9px] font-bold mt-1.5 text-right",
                          message.user_id === unref(currentUser)?.id ? "text-white/70" : "text-slate-400"
                        ])
                      }, toDisplayString(formatFullDate(message.created_at)), 3)
                    ], 2)
                  ], 2);
                }), 128))
              ], 512),
              selectedTicket.value.status === "closed" ? (openBlock(), createElementBlock("div", _hoisted_48, [
                createBaseVNode("p", _hoisted_49, [
                  createVNode(unref(Lock), { class: "w-4 h-4 text-slate-400" }),
                  _cache[28] || (_cache[28] = createTextVNode(" This complaint is completely closed and locked. ", -1))
                ])
              ])) : (openBlock(), createElementBlock("div", _hoisted_50, [
                createBaseVNode("div", _hoisted_51, [
                  createBaseVNode("div", _hoisted_52, [
                    withDirectives(createBaseVNode("textarea", {
                      "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => newMessage.value = $event),
                      rows: "1",
                      placeholder: "Type your message...",
                      class: "w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 focus:border-slate-350 focus:bg-white rounded-xl text-xs font-semibold focus:outline-none focus:ring-4 focus:ring-slate-100/50 resize-none transition-all outline-none",
                      onKeydown: withKeys(withModifiers(handleSendMessage, ["prevent"]), ["enter"])
                    }, null, 40, _hoisted_53), [
                      [vModelText, newMessage.value]
                    ])
                  ]),
                  createBaseVNode("button", {
                    onClick: handleSendMessage,
                    disabled: !newMessage.value.trim() || sending.value,
                    class: normalizeClass([
                      "p-2.5 text-white rounded-xl transition-all shadow-sm active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer border border-transparent flex-shrink-0",
                      userRole.value === "student" ? "bg-blue-600 hover:bg-blue-700" : userRole.value === "admin" ? "bg-purple-650 hover:bg-purple-700" : "bg-emerald-700 hover:bg-emerald-800"
                    ])
                  }, [
                    !sending.value ? (openBlock(), createBlock(unref(Send), {
                      key: 0,
                      class: "w-4 h-4"
                    })) : (openBlock(), createBlock(unref(LoaderCircle), {
                      key: 1,
                      class: "w-4 h-4 animate-spin"
                    }))
                  ], 10, _hoisted_54)
                ]),
                _cache[29] || (_cache[29] = createBaseVNode("p", { class: "text-[9px] font-extrabold text-slate-400 uppercase tracking-widest mt-2 text-center hidden sm:block" }, "Press Enter to send (Shift+Enter for newline)", -1))
              ]))
            ], 64)) : (openBlock(), createElementBlock("div", _hoisted_55, [
              createBaseVNode("div", _hoisted_56, [
                createVNode(unref(LifeBuoy), { class: "w-6 h-6 animate-pulse" })
              ]),
              _cache[30] || (_cache[30] = createBaseVNode("h3", { class: "text-xs sm:text-sm font-bold text-slate-800 mb-1 uppercase tracking-wider" }, "Support Desk", -1)),
              _cache[31] || (_cache[31] = createBaseVNode("p", { class: "text-xs text-slate-400 max-w-xs leading-relaxed font-semibold" }, "Select a ticket from the left panel to open the conversation, or submit a new ticket for assistance.", -1)),
              userRole.value === "student" ? (openBlock(), createElementBlock("button", {
                key: 0,
                onClick: _cache[9] || (_cache[9] = ($event) => showCreateModal.value = true),
                class: "mt-5 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold transition-all shadow hover:shadow-md cursor-pointer border border-transparent"
              }, " New Support Ticket ")) : createCommentVNode("", true)
            ]))
          ], 2)
        ]),
        showCreateModal.value ? (openBlock(), createElementBlock("div", _hoisted_57, [
          createBaseVNode("div", _hoisted_58, [
            createBaseVNode("div", _hoisted_59, [
              _cache[32] || (_cache[32] = createBaseVNode("div", null, [
                createBaseVNode("h2", { class: "text-base sm:text-lg font-bold text-slate-800" }, "Submit Support Ticket")
              ], -1)),
              createBaseVNode("button", {
                onClick: _cache[10] || (_cache[10] = ($event) => showCreateModal.value = false),
                class: "p-2 hover:bg-slate-50 rounded-xl transition-colors cursor-pointer"
              }, [
                createVNode(unref(X), { class: "w-5 h-5 text-slate-450" })
              ])
            ]),
            createBaseVNode("form", {
              onSubmit: withModifiers(handleCreateTicket, ["prevent"]),
              class: "p-5 sm:p-6 space-y-4 text-left"
            }, [
              createBaseVNode("div", null, [
                _cache[33] || (_cache[33] = createBaseVNode("label", { class: "block text-xs font-bold text-slate-500 mb-1.5 uppercase tracking-wider" }, "Subject", -1)),
                withDirectives(createBaseVNode("input", {
                  "onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => createForm.value.subject = $event),
                  type: "text",
                  required: "",
                  placeholder: "e.g., Seat Booking Issue, Library Card Access",
                  class: "w-full px-4 py-2 border border-slate-200 rounded-xl text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white transition-all outline-none bg-white"
                }, null, 512), [
                  [vModelText, createForm.value.subject]
                ])
              ]),
              createBaseVNode("div", _hoisted_60, [
                createBaseVNode("div", null, [
                  _cache[35] || (_cache[35] = createBaseVNode("label", { class: "block text-xs font-bold text-slate-500 mb-1.5 uppercase tracking-wider" }, "Category", -1)),
                  withDirectives(createBaseVNode("select", {
                    "onUpdate:modelValue": _cache[12] || (_cache[12] = ($event) => createForm.value.ticket_type = $event),
                    class: "w-full px-4 py-2 border border-slate-200 rounded-xl text-xs font-bold text-slate-655 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white transition-all outline-none bg-white cursor-pointer"
                  }, [..._cache[34] || (_cache[34] = [
                    createBaseVNode("option", { value: "library" }, "Library Issue", -1),
                    createBaseVNode("option", { value: "system" }, "System Issue", -1)
                  ])], 512), [
                    [vModelSelect, createForm.value.ticket_type]
                  ])
                ]),
                createBaseVNode("div", null, [
                  _cache[37] || (_cache[37] = createBaseVNode("label", { class: "block text-xs font-bold text-slate-500 mb-1.5 uppercase tracking-wider" }, "Priority", -1)),
                  withDirectives(createBaseVNode("select", {
                    "onUpdate:modelValue": _cache[13] || (_cache[13] = ($event) => createForm.value.priority = $event),
                    class: "w-full px-4 py-2 border border-slate-200 rounded-xl text-xs font-bold text-slate-655 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white transition-all outline-none bg-white cursor-pointer"
                  }, [..._cache[36] || (_cache[36] = [
                    createBaseVNode("option", { value: "low" }, "Low", -1),
                    createBaseVNode("option", { value: "medium" }, "Medium", -1),
                    createBaseVNode("option", { value: "high" }, "High", -1),
                    createBaseVNode("option", { value: "urgent" }, "Urgent", -1)
                  ])], 512), [
                    [vModelSelect, createForm.value.priority]
                  ])
                ])
              ]),
              createForm.value.ticket_type === "library" ? (openBlock(), createElementBlock("div", _hoisted_61, [
                _cache[39] || (_cache[39] = createBaseVNode("label", { class: "block text-xs font-bold text-slate-500 mb-1.5 uppercase tracking-wider" }, "Select Library", -1)),
                withDirectives(createBaseVNode("select", {
                  "onUpdate:modelValue": _cache[14] || (_cache[14] = ($event) => createForm.value.library_id = $event),
                  required: "",
                  class: "w-full px-4 py-2 border border-slate-200 rounded-xl text-xs font-bold text-slate-655 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white transition-all outline-none bg-white cursor-pointer"
                }, [
                  _cache[38] || (_cache[38] = createBaseVNode("option", {
                    value: null,
                    disabled: ""
                  }, "Select a library", -1)),
                  (openBlock(true), createElementBlock(Fragment, null, renderList(libraries.value, (lib) => {
                    return openBlock(), createElementBlock("option", {
                      key: lib.id,
                      value: lib.id
                    }, toDisplayString(lib.name), 9, _hoisted_62);
                  }), 128))
                ], 512), [
                  [vModelSelect, createForm.value.library_id]
                ])
              ])) : createCommentVNode("", true),
              createBaseVNode("div", null, [
                _cache[40] || (_cache[40] = createBaseVNode("label", { class: "block text-xs font-bold text-slate-500 mb-1.5 uppercase tracking-wider" }, "Description", -1)),
                withDirectives(createBaseVNode("textarea", {
                  "onUpdate:modelValue": _cache[15] || (_cache[15] = ($event) => createForm.value.message = $event),
                  required: "",
                  rows: "4",
                  placeholder: "Describe your issue in detail...",
                  class: "w-full px-4 py-2 border border-slate-200 rounded-xl text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white transition-all outline-none bg-white resize-none"
                }, null, 512), [
                  [vModelText, createForm.value.message]
                ])
              ]),
              createBaseVNode("div", _hoisted_63, [
                createBaseVNode("button", {
                  type: "button",
                  onClick: _cache[16] || (_cache[16] = ($event) => showCreateModal.value = false),
                  class: "flex-1 px-4 py-2.5 text-xs text-slate-550 font-bold bg-white hover:bg-slate-50 border border-slate-200 rounded-xl transition-all cursor-pointer"
                }, " Cancel "),
                createBaseVNode("button", {
                  type: "submit",
                  disabled: creating.value,
                  class: "flex-1 px-4 py-2.5 bg-blue-600 border border-blue-700 text-white text-xs font-bold rounded-xl hover:bg-blue-750 transition-all shadow-sm active:scale-98 disabled:opacity-50 cursor-pointer"
                }, [
                  !creating.value ? (openBlock(), createElementBlock("span", _hoisted_65, "Submit Ticket")) : (openBlock(), createBlock(unref(LoaderCircle), {
                    key: 1,
                    class: "w-4 h-4 animate-spin mx-auto"
                  }))
                ], 8, _hoisted_64)
              ])
            ], 32)
          ])
        ])) : createCommentVNode("", true)
      ]);
    };
  }
});
const SupportSystem = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-8fd8fb67"]]);
export {
  SupportSystem as S
};
