import { d as defineComponent, x as useAuth, c as computed, r as ref, o as onMounted, K as watch, a as createElementBlock, b as createBaseVNode, l as createCommentVNode, n as normalizeClass, f as createVNode, u as unref, t as toDisplayString, p as withDirectives, v as vModelText, F as Fragment, j as renderList, i as createTextVNode, S as withKeys, z as withModifiers, h as createBlock, D as vModelSelect, U as supportAPI, L as studentAPI, N as nextTick, k as openBlock } from "./main-z4KHHVjI.js";
import { u as useSwal } from "./useSwal-J4kFABxt.js";
import { c as createLucideIcon } from "./createLucideIcon-DRaLH6NX.js";
import { C as Clock } from "./clock-BTNO8AWV.js";
import { C as CircleCheck } from "./circle-check-m5cPqQT-.js";
import { P as Plus } from "./plus-Cm6XQKn2.js";
import { S as Search } from "./search-B8cvEUWI.js";
import { L as LoaderCircle } from "./loader-circle-DgtHQZg-.js";
import { L as LifeBuoy } from "./life-buoy-HsZBCuw1.js";
import { U as User } from "./user-CjSNz3TP.js";
import { R as RefreshCw } from "./refresh-cw-jXvE5V9X.js";
import { X } from "./x-C-saJlJ5.js";
import { f as formatDistanceToNow } from "./formatDistanceToNow-CgRkJOVj.js";
import { f as format } from "./format-CerZa7QB.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const Send = createLucideIcon("send", [
  [
    "path",
    {
      d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
      key: "1ffxy3"
    }
  ],
  ["path", { d: "m21.854 2.147-10.94 10.939", key: "12cjpa" }]
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
const _hoisted_1 = { class: "space-y-6 font-outfit text-slate-700" };
const _hoisted_2 = { class: "grid grid-cols-1 sm:grid-cols-3 gap-5" };
const _hoisted_3 = { class: "absolute -right-6 -top-6 text-slate-50/10 group-hover:scale-105 transition-transform duration-500 pointer-events-none" };
const _hoisted_4 = { class: "flex justify-between items-start relative z-10" };
const _hoisted_5 = { class: "text-3xl font-extrabold mt-2 tracking-tight" };
const _hoisted_6 = { class: "absolute -right-6 -top-6 text-slate-50/10 group-hover:scale-105 transition-transform duration-500 pointer-events-none" };
const _hoisted_7 = { class: "flex justify-between items-start relative z-10" };
const _hoisted_8 = { class: "text-3xl font-extrabold mt-2 tracking-tight" };
const _hoisted_9 = { class: "absolute -right-6 -top-6 text-slate-50/10 group-hover:scale-105 transition-transform duration-500 pointer-events-none" };
const _hoisted_10 = { class: "flex justify-between items-start relative z-10" };
const _hoisted_11 = { class: "text-3xl font-extrabold mt-2 tracking-tight" };
const _hoisted_12 = { class: "flex h-[calc(100vh-22rem)] min-h-[500px] bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden" };
const _hoisted_13 = { class: "w-1/3 border-r border-slate-100 flex flex-col bg-slate-50/20" };
const _hoisted_14 = { class: "p-4 border-b border-slate-100 flex justify-between items-center bg-white text-left" };
const _hoisted_15 = { class: "p-3 bg-white border-b border-slate-50" };
const _hoisted_16 = { class: "relative" };
const _hoisted_17 = { class: "flex-1 overflow-y-auto divide-y divide-slate-100/50" };
const _hoisted_18 = {
  key: 0,
  class: "p-8 text-center flex flex-col items-center justify-center h-full"
};
const _hoisted_19 = {
  key: 1,
  class: "p-8 text-center text-slate-400 flex flex-col items-center justify-center h-full"
};
const _hoisted_20 = ["onClick"];
const _hoisted_21 = { class: "flex justify-between items-start gap-2 mb-2" };
const _hoisted_22 = { class: "flex flex-shrink-0 gap-1.5 items-center" };
const _hoisted_23 = { class: "text-[10px] text-slate-400 line-clamp-1 mb-3 pr-2 font-medium" };
const _hoisted_24 = { class: "flex justify-between items-center text-[10px] text-slate-450 font-semibold mt-1" };
const _hoisted_25 = { class: "flex items-center text-slate-500" };
const _hoisted_26 = { class: "text-slate-400" };
const _hoisted_27 = ["title"];
const _hoisted_28 = { class: "flex-1 flex flex-col bg-slate-50/30" };
const _hoisted_29 = { class: "bg-white p-4 border-b border-slate-100 flex justify-between items-center shadow-sm relative z-10 text-left" };
const _hoisted_30 = { class: "flex items-center space-x-3.5" };
const _hoisted_31 = { class: "w-9 h-9 border border-slate-100 rounded-xl bg-slate-50 flex items-center justify-center text-slate-650" };
const _hoisted_32 = { class: "font-bold text-slate-800 text-sm leading-tight" };
const _hoisted_33 = { class: "text-[10px] text-slate-400 mt-1 font-semibold flex flex-wrap items-center gap-1.5 leading-none" };
const _hoisted_34 = { class: "font-bold text-slate-500" };
const _hoisted_35 = { class: "px-1.5 py-0.5 rounded bg-slate-50 border border-slate-100 text-[8px] uppercase font-bold text-slate-500" };
const _hoisted_36 = {
  key: 0,
  class: "text-slate-500 font-bold"
};
const _hoisted_37 = { class: "flex items-center space-x-2" };
const _hoisted_38 = ["value"];
const _hoisted_39 = {
  key: 0,
  class: "flex items-center space-x-1 mb-1.5 opacity-80 text-[8px] font-bold text-slate-400 uppercase tracking-wider"
};
const _hoisted_40 = { class: "font-extrabold" };
const _hoisted_41 = { class: "whitespace-pre-wrap" };
const _hoisted_42 = { class: "p-4 bg-white border-t border-slate-100" };
const _hoisted_43 = { class: "flex items-end space-x-2" };
const _hoisted_44 = { class: "flex-1 relative" };
const _hoisted_45 = ["onKeydown"];
const _hoisted_46 = ["disabled"];
const _hoisted_47 = {
  key: 1,
  class: "flex-1 flex flex-col items-center justify-center p-12 text-center h-full"
};
const _hoisted_48 = { class: "w-16 h-16 border border-slate-100 rounded-2xl flex items-center justify-center mb-5 bg-white text-slate-400" };
const _hoisted_49 = {
  key: 0,
  class: "fixed inset-0 z-[60] flex items-center justify-center p-4"
};
const _hoisted_50 = { class: "relative bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden border border-slate-100 text-left animate-in duration-200" };
const _hoisted_51 = { class: "p-6 border-b border-slate-55 flex justify-between items-center bg-slate-50/20" };
const _hoisted_52 = { class: "grid grid-cols-2 gap-4" };
const _hoisted_53 = { key: 0 };
const _hoisted_54 = ["value"];
const _hoisted_55 = { class: "pt-2 flex space-x-3" };
const _hoisted_56 = ["disabled"];
const _hoisted_57 = { key: 0 };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "SupportSystem",
  props: {
    role: {}
  },
  setup(__props) {
    const props = __props;
    const { user: currentUser } = useAuth();
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
        toast("Error", "Could not send message", "error");
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
      try {
        await supportAPI.updateStatus(userRole.value, selectedTicket.value.id, newStatus);
        selectedTicket.value.status = newStatus;
        const index = tickets.value.findIndex((t) => t.id === selectedTicket.value.id);
        if (index !== -1) tickets.value[index].status = newStatus;
        toast("Status Updated", `Ticket is now ${newStatus}`, "success");
      } catch (error) {
        toast("Error", "Could not update status", "error");
      }
    };
    const handleCloseTicket = async () => {
      if (!selectedTicket.value) return;
      try {
        await supportAPI.updateStatus(userRole.value, selectedTicket.value.id, "closed");
        selectedTicket.value.status = "closed";
        const index = tickets.value.findIndex((t) => t.id === selectedTicket.value.id);
        if (index !== -1) tickets.value[index].status = "closed";
        toast("Success", "Ticket closed successfully", "success");
      } catch (error) {
        toast("Error", "Could not close ticket", "error");
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
      fetchTickets();
      fetchLibraries();
    });
    watch(selectedTicket, () => {
      scrollToBottom();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("div", {
            onClick: _cache[0] || (_cache[0] = ($event) => filterStatus.value = "all"),
            class: normalizeClass([
              "p-5 rounded-2xl border transition-all cursor-pointer shadow-sm relative overflow-hidden group text-left flex flex-col justify-between min-h-[110px]",
              filterStatus.value === "all" ? userRole.value === "student" ? "bg-gradient-to-br from-blue-600 to-blue-700 border-blue-700 text-white shadow-blue-500/10" : "bg-gradient-to-br from-emerald-600 to-teal-700 border-emerald-700 text-white shadow-emerald-500/10" : "bg-white border-slate-100 hover:border-slate-200 hover:translate-y-[-1px] text-slate-800"
            ])
          }, [
            createBaseVNode("div", _hoisted_3, [
              createVNode(unref(Ticket), {
                class: normalizeClass(["w-20 h-20 stroke-1", filterStatus.value === "all" ? "text-white/5" : "text-slate-100"])
              }, null, 8, ["class"])
            ]),
            createBaseVNode("div", _hoisted_4, [
              createBaseVNode("div", null, [
                createBaseVNode("p", {
                  class: normalizeClass(["text-[10px] font-bold uppercase tracking-wider", filterStatus.value === "all" ? "text-blue-100" : "text-slate-400"])
                }, "Total Tickets", 2),
                createBaseVNode("h4", _hoisted_5, toDisplayString(stats.value.all), 1)
              ]),
              createBaseVNode("div", {
                class: normalizeClass(["p-2.5 rounded-xl border", filterStatus.value === "all" ? "bg-white/10 border-white/20 text-white" : "bg-slate-50 border-slate-100 text-slate-500"])
              }, [
                createVNode(unref(Ticket), { class: "w-4 h-4" })
              ], 2)
            ])
          ], 2),
          createBaseVNode("div", {
            onClick: _cache[1] || (_cache[1] = ($event) => filterStatus.value = "open"),
            class: normalizeClass([
              "p-5 rounded-2xl border transition-all cursor-pointer shadow-sm relative overflow-hidden group text-left flex flex-col justify-between min-h-[110px]",
              filterStatus.value === "open" ? userRole.value === "student" ? "bg-gradient-to-br from-blue-600 to-blue-700 border-blue-700 text-white shadow-blue-500/10" : "bg-gradient-to-br from-emerald-600 to-teal-700 border-emerald-700 text-white shadow-emerald-500/10" : "bg-white border-slate-100 hover:border-slate-200 hover:translate-y-[-1px] text-slate-800"
            ])
          }, [
            createBaseVNode("div", _hoisted_6, [
              createVNode(unref(Clock), {
                class: normalizeClass(["w-20 h-20 stroke-1", filterStatus.value === "open" ? "text-white/5" : "text-slate-100"])
              }, null, 8, ["class"])
            ]),
            createBaseVNode("div", _hoisted_7, [
              createBaseVNode("div", null, [
                createBaseVNode("p", {
                  class: normalizeClass(["text-[10px] font-bold uppercase tracking-wider", filterStatus.value === "open" ? "text-blue-100" : "text-slate-400"])
                }, "Open Tickets", 2),
                createBaseVNode("h4", _hoisted_8, toDisplayString(stats.value.open), 1)
              ]),
              createBaseVNode("div", {
                class: normalizeClass(["p-2.5 rounded-xl border", filterStatus.value === "open" ? "bg-white/10 border-white/20 text-white" : "bg-amber-50 border-amber-100/80 text-amber-600"])
              }, [
                createVNode(unref(Clock), { class: "w-4 h-4" })
              ], 2)
            ])
          ], 2),
          createBaseVNode("div", {
            onClick: _cache[2] || (_cache[2] = ($event) => filterStatus.value = "closed"),
            class: normalizeClass([
              "p-5 rounded-2xl border transition-all cursor-pointer shadow-sm relative overflow-hidden group text-left flex flex-col justify-between min-h-[110px]",
              filterStatus.value === "closed" ? userRole.value === "student" ? "bg-gradient-to-br from-blue-600 to-blue-700 border-blue-700 text-white shadow-blue-500/10" : "bg-gradient-to-br from-emerald-600 to-teal-700 border-emerald-700 text-white shadow-emerald-500/10" : "bg-white border-slate-100 hover:border-slate-200 hover:translate-y-[-1px] text-slate-800"
            ])
          }, [
            createBaseVNode("div", _hoisted_9, [
              createVNode(unref(CircleCheck), {
                class: normalizeClass(["w-20 h-20 stroke-1", filterStatus.value === "closed" ? "text-white/5" : "text-slate-100"])
              }, null, 8, ["class"])
            ]),
            createBaseVNode("div", _hoisted_10, [
              createBaseVNode("div", null, [
                createBaseVNode("p", {
                  class: normalizeClass(["text-[10px] font-bold uppercase tracking-wider", filterStatus.value === "closed" ? "text-blue-100" : "text-slate-400"])
                }, "Resolved / Closed", 2),
                createBaseVNode("h4", _hoisted_11, toDisplayString(stats.value.closed), 1)
              ]),
              createBaseVNode("div", {
                class: normalizeClass(["p-2.5 rounded-xl border", filterStatus.value === "closed" ? "bg-white/10 border-white/20 text-white" : "bg-emerald-50 border-emerald-100/80 text-emerald-600"])
              }, [
                createVNode(unref(CircleCheck), { class: "w-4 h-4" })
              ], 2)
            ])
          ], 2)
        ]),
        createBaseVNode("div", _hoisted_12, [
          createBaseVNode("div", _hoisted_13, [
            createBaseVNode("div", _hoisted_14, [
              _cache[17] || (_cache[17] = createBaseVNode("h2", { class: "text-xs font-bold text-slate-800 uppercase tracking-wider" }, "Tickets", -1)),
              userRole.value === "student" ? (openBlock(), createElementBlock("button", {
                key: 0,
                onClick: _cache[3] || (_cache[3] = ($event) => showCreateModal.value = true),
                class: "p-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow-sm hover:shadow active:scale-95 transition-all flex items-center justify-center cursor-pointer border border-transparent",
                title: "Create New Ticket"
              }, [
                createVNode(unref(Plus), { class: "w-4 h-4" })
              ])) : createCommentVNode("", true)
            ]),
            createBaseVNode("div", _hoisted_15, [
              createBaseVNode("div", _hoisted_16, [
                createVNode(unref(Search), { class: "absolute left-3.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400" }),
                withDirectives(createBaseVNode("input", {
                  "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => searchQuery.value = $event),
                  type: "text",
                  placeholder: "Search tickets...",
                  class: "w-full pl-9 pr-4 py-2 border border-slate-200 focus:border-slate-300 rounded-xl text-xs font-medium focus:outline-none focus:ring-4 focus:ring-slate-100/50 bg-slate-50/50 transition-all outline-none"
                }, null, 512), [
                  [vModelText, searchQuery.value]
                ])
              ])
            ]),
            createBaseVNode("div", _hoisted_17, [
              loading.value ? (openBlock(), createElementBlock("div", _hoisted_18, [
                createVNode(unref(LoaderCircle), { class: "w-6 h-6 animate-spin text-slate-400 mb-2" }),
                _cache[18] || (_cache[18] = createBaseVNode("p", { class: "text-[10px] text-slate-400 font-bold uppercase tracking-wider" }, "Loading tickets...", -1))
              ])) : filteredTickets.value.length === 0 ? (openBlock(), createElementBlock("div", _hoisted_19, [
                createVNode(unref(LifeBuoy), { class: "w-8 h-8 text-slate-200 mb-3" }),
                _cache[19] || (_cache[19] = createBaseVNode("p", { class: "text-xs font-semibold tracking-wide italic text-slate-400" }, "No tickets found.", -1))
              ])) : (openBlock(true), createElementBlock(Fragment, { key: 2 }, renderList(filteredTickets.value, (ticket) => {
                return openBlock(), createElementBlock("div", {
                  key: ticket.id,
                  onClick: ($event) => selectTicket(ticket),
                  class: normalizeClass([
                    "p-4 cursor-pointer hover:bg-slate-50/50 transition-all text-left border-l-4 relative",
                    selectedTicket.value?.id === ticket.id ? userRole.value === "student" ? "bg-blue-50/30 border-blue-600" : "bg-emerald-50/30 border-emerald-600" : "border-transparent"
                  ])
                }, [
                  createBaseVNode("div", _hoisted_21, [
                    createBaseVNode("h3", {
                      class: normalizeClass(["text-xs font-bold truncate pr-1", selectedTicket.value?.id === ticket.id ? "text-slate-800" : "text-slate-700"])
                    }, toDisplayString(ticket.subject), 3),
                    createBaseVNode("div", _hoisted_22, [
                      createBaseVNode("span", {
                        class: normalizeClass([
                          "text-[8px] px-2 py-0.5 rounded-md font-bold uppercase tracking-wide border",
                          ticket.ticket_type === "library" ? "bg-indigo-50 border-indigo-100 text-indigo-650" : "bg-amber-50 border-amber-100 text-amber-650"
                        ])
                      }, toDisplayString(ticket.ticket_type), 3),
                      createBaseVNode("span", {
                        class: normalizeClass([
                          "text-[8px] px-2 py-0.5 rounded-md font-bold uppercase tracking-wide border",
                          getStatusClass(ticket.status)
                        ])
                      }, toDisplayString(ticket.status.replace("_", " ")), 3)
                    ])
                  ]),
                  createBaseVNode("p", _hoisted_23, toDisplayString(ticket.messages?.[0]?.message || "No messages"), 1),
                  createBaseVNode("div", _hoisted_24, [
                    createBaseVNode("span", _hoisted_25, [
                      createVNode(unref(User), { class: "w-3.5 h-3.5 mr-1 text-slate-400" }),
                      createTextVNode(" " + toDisplayString(ticket.user?.name || "User"), 1)
                    ]),
                    createBaseVNode("span", _hoisted_26, toDisplayString(formatDate(ticket.created_at)), 1)
                  ]),
                  createBaseVNode("span", {
                    class: normalizeClass([
                      "absolute right-3 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full",
                      ticket.priority === "urgent" ? "bg-red-500" : ticket.priority === "high" ? "bg-orange-500" : ticket.priority === "medium" ? "bg-blue-500" : "bg-slate-300"
                    ]),
                    title: `Priority: ${ticket.priority}`
                  }, null, 10, _hoisted_27)
                ], 10, _hoisted_20);
              }), 128))
            ])
          ]),
          createBaseVNode("div", _hoisted_28, [
            selectedTicket.value ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
              createBaseVNode("div", _hoisted_29, [
                createBaseVNode("div", _hoisted_30, [
                  createBaseVNode("div", _hoisted_31, [
                    createVNode(unref(User), { class: "w-4 h-4" })
                  ]),
                  createBaseVNode("div", null, [
                    createBaseVNode("h3", _hoisted_32, toDisplayString(selectedTicket.value.subject), 1),
                    createBaseVNode("p", _hoisted_33, [
                      createTextVNode(" Ticket #" + toDisplayString(selectedTicket.value.id) + " • From: ", 1),
                      createBaseVNode("span", _hoisted_34, toDisplayString(selectedTicket.value.user?.name), 1),
                      createBaseVNode("span", _hoisted_35, toDisplayString(selectedTicket.value.ticket_type), 1),
                      selectedTicket.value.library ? (openBlock(), createElementBlock("span", _hoisted_36, "• " + toDisplayString(selectedTicket.value.library.name), 1)) : createCommentVNode("", true)
                    ])
                  ])
                ]),
                createBaseVNode("div", _hoisted_37, [
                  userRole.value !== "student" ? (openBlock(), createElementBlock("select", {
                    key: 0,
                    onChange: _cache[5] || (_cache[5] = ($event) => handleStatusChange($event)),
                    value: selectedTicket.value.status,
                    class: "text-[11px] font-bold text-slate-600 bg-slate-50 border border-slate-200 rounded-xl px-2.5 py-1.5 focus:outline-none focus:ring-4 focus:ring-slate-100/50 cursor-pointer transition-all"
                  }, [..._cache[20] || (_cache[20] = [
                    createBaseVNode("option", { value: "open" }, "Open", -1),
                    createBaseVNode("option", { value: "in_progress" }, "In Progress", -1),
                    createBaseVNode("option", { value: "resolved" }, "Resolved", -1),
                    createBaseVNode("option", { value: "closed" }, "Closed", -1)
                  ])], 40, _hoisted_38)) : ["open", "in_progress"].includes(selectedTicket.value.status) ? (openBlock(), createElementBlock("button", {
                    key: 1,
                    onClick: handleCloseTicket,
                    class: "text-[10px] px-3 py-1.5 bg-rose-50 hover:bg-rose-100 text-rose-600 border border-rose-200/50 rounded-xl transition-all font-bold uppercase tracking-wider cursor-pointer"
                  }, " Close Ticket ")) : createCommentVNode("", true),
                  createBaseVNode("button", {
                    onClick: _cache[6] || (_cache[6] = ($event) => fetchTicketDetails(selectedTicket.value.id)),
                    class: "p-2 text-slate-400 hover:text-slate-600 transition-colors cursor-pointer",
                    title: "Refresh Conversation"
                  }, [
                    createVNode(unref(RefreshCw), { class: "w-4 h-4" })
                  ])
                ])
              ]),
              createBaseVNode("div", {
                class: "flex-1 overflow-y-auto p-6 space-y-4 bg-slate-50/30",
                ref_key: "messageContainer",
                ref: messageContainer
              }, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(selectedTicket.value.messages, (message) => {
                  return openBlock(), createElementBlock("div", {
                    key: message.id,
                    class: normalizeClass([
                      "flex text-left",
                      message.user_id === unref(currentUser).id ? "justify-end" : "justify-start"
                    ])
                  }, [
                    createBaseVNode("div", {
                      class: normalizeClass([
                        "max-w-[70%] p-4 rounded-2xl text-xs font-medium leading-relaxed shadow-sm text-left relative",
                        message.user_id === unref(currentUser).id ? userRole.value === "student" ? "bg-blue-600 text-white rounded-br-none" : "bg-emerald-700 text-white rounded-br-none" : "bg-white text-slate-700 rounded-bl-none border border-slate-100/70"
                      ])
                    }, [
                      message.user_id !== unref(currentUser).id ? (openBlock(), createElementBlock("div", _hoisted_39, [
                        createBaseVNode("span", null, toDisplayString(message.user?.role || "Support"), 1),
                        _cache[21] || (_cache[21] = createBaseVNode("span", null, "•", -1)),
                        createBaseVNode("span", _hoisted_40, toDisplayString(message.user?.name), 1)
                      ])) : createCommentVNode("", true),
                      createBaseVNode("p", _hoisted_41, toDisplayString(message.message), 1),
                      createBaseVNode("div", {
                        class: normalizeClass([
                          "text-[9px] font-bold mt-2 text-right",
                          message.user_id === unref(currentUser).id ? "text-white/70" : "text-slate-400"
                        ])
                      }, toDisplayString(formatFullDate(message.created_at)), 3)
                    ], 2)
                  ], 2);
                }), 128))
              ], 512),
              createBaseVNode("div", _hoisted_42, [
                createBaseVNode("div", _hoisted_43, [
                  createBaseVNode("div", _hoisted_44, [
                    withDirectives(createBaseVNode("textarea", {
                      "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => newMessage.value = $event),
                      rows: "1",
                      placeholder: "Type your message...",
                      class: "w-full px-4 py-2.5 bg-slate-50 border border-slate-200 focus:border-slate-350 focus:bg-white rounded-xl text-xs font-semibold focus:outline-none focus:ring-4 focus:ring-slate-100/50 resize-none transition-all outline-none",
                      onKeydown: withKeys(withModifiers(handleSendMessage, ["prevent"]), ["enter"])
                    }, null, 40, _hoisted_45), [
                      [vModelText, newMessage.value]
                    ])
                  ]),
                  createBaseVNode("button", {
                    onClick: handleSendMessage,
                    disabled: !newMessage.value.trim() || sending.value,
                    class: normalizeClass([
                      "p-2.5 text-white rounded-xl transition-all shadow-sm active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer border border-transparent",
                      userRole.value === "student" ? "bg-blue-650 hover:bg-blue-700" : "bg-emerald-700 hover:bg-emerald-800"
                    ])
                  }, [
                    !sending.value ? (openBlock(), createBlock(unref(Send), {
                      key: 0,
                      class: "w-4 h-4"
                    })) : (openBlock(), createBlock(unref(LoaderCircle), {
                      key: 1,
                      class: "w-4 h-4 animate-spin"
                    }))
                  ], 10, _hoisted_46)
                ]),
                _cache[22] || (_cache[22] = createBaseVNode("p", { class: "text-[9px] font-extrabold text-slate-400 uppercase tracking-widest mt-2.5 text-center" }, "Press Enter to send (Shift+Enter for newline)", -1))
              ])
            ], 64)) : (openBlock(), createElementBlock("div", _hoisted_47, [
              createBaseVNode("div", _hoisted_48, [
                createVNode(unref(LifeBuoy), { class: "w-6 h-6 animate-pulse" })
              ]),
              _cache[23] || (_cache[23] = createBaseVNode("h3", { class: "text-sm font-bold text-slate-800 mb-1 uppercase tracking-wider" }, "Support Desk", -1)),
              _cache[24] || (_cache[24] = createBaseVNode("p", { class: "text-xs text-slate-400 max-w-xs leading-relaxed font-semibold" }, "Select a ticket from the left panel to open the conversation, or submit a new ticket for assistance.", -1)),
              userRole.value === "student" ? (openBlock(), createElementBlock("button", {
                key: 0,
                onClick: _cache[8] || (_cache[8] = ($event) => showCreateModal.value = true),
                class: "mt-6 px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold transition-all shadow hover:shadow-md cursor-pointer border border-transparent"
              }, " New Support Ticket ")) : createCommentVNode("", true)
            ]))
          ])
        ]),
        showCreateModal.value ? (openBlock(), createElementBlock("div", _hoisted_49, [
          createBaseVNode("div", {
            class: "absolute inset-0 bg-slate-900/40 backdrop-blur-sm animate-fade-in",
            onClick: _cache[9] || (_cache[9] = ($event) => showCreateModal.value = false)
          }),
          createBaseVNode("div", _hoisted_50, [
            createBaseVNode("div", _hoisted_51, [
              _cache[25] || (_cache[25] = createBaseVNode("div", null, [
                createBaseVNode("h3", { class: "text-base font-bold text-slate-800 tracking-tight leading-none mb-1.5" }, "Submit Support Ticket"),
                createBaseVNode("p", { class: "text-[10px] text-slate-400 font-semibold" }, "Our support desk will respond shortly.")
              ], -1)),
              createBaseVNode("button", {
                onClick: _cache[10] || (_cache[10] = ($event) => showCreateModal.value = false),
                class: "text-slate-400 hover:text-slate-650 p-1.5 rounded-lg hover:bg-slate-150 transition-colors cursor-pointer"
              }, [
                createVNode(unref(X), { class: "w-4 h-4" })
              ])
            ]),
            createBaseVNode("form", {
              onSubmit: withModifiers(handleCreateTicket, ["prevent"]),
              class: "p-6 space-y-4 text-left"
            }, [
              createBaseVNode("div", null, [
                _cache[26] || (_cache[26] = createBaseVNode("label", { class: "block text-[10px] font-extrabold text-slate-450 uppercase tracking-widest mb-1.5" }, "Subject", -1)),
                withDirectives(createBaseVNode("input", {
                  "onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => createForm.value.subject = $event),
                  type: "text",
                  required: "",
                  placeholder: "e.g., Seat Booking Issue, Library Card Access",
                  class: "w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold focus:outline-none focus:ring-4 focus:ring-blue-100/50 focus:border-slate-300 focus:bg-white transition-all outline-none"
                }, null, 512), [
                  [vModelText, createForm.value.subject]
                ])
              ]),
              createBaseVNode("div", _hoisted_52, [
                createBaseVNode("div", null, [
                  _cache[28] || (_cache[28] = createBaseVNode("label", { class: "block text-[10px] font-extrabold text-slate-450 uppercase tracking-widest mb-1.5" }, "Category", -1)),
                  withDirectives(createBaseVNode("select", {
                    "onUpdate:modelValue": _cache[12] || (_cache[12] = ($event) => createForm.value.ticket_type = $event),
                    class: "w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold focus:outline-none focus:ring-4 focus:ring-blue-100/50 focus:border-slate-300 focus:bg-white transition-all outline-none"
                  }, [..._cache[27] || (_cache[27] = [
                    createBaseVNode("option", { value: "library" }, "Library Issue", -1),
                    createBaseVNode("option", { value: "system" }, "System Issue", -1)
                  ])], 512), [
                    [vModelSelect, createForm.value.ticket_type]
                  ])
                ]),
                createBaseVNode("div", null, [
                  _cache[30] || (_cache[30] = createBaseVNode("label", { class: "block text-[10px] font-extrabold text-slate-450 uppercase tracking-widest mb-1.5" }, "Priority", -1)),
                  withDirectives(createBaseVNode("select", {
                    "onUpdate:modelValue": _cache[13] || (_cache[13] = ($event) => createForm.value.priority = $event),
                    class: "w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold focus:outline-none focus:ring-4 focus:ring-blue-100/50 focus:border-slate-300 focus:bg-white transition-all outline-none"
                  }, [..._cache[29] || (_cache[29] = [
                    createBaseVNode("option", { value: "low" }, "Low", -1),
                    createBaseVNode("option", { value: "medium" }, "Medium", -1),
                    createBaseVNode("option", { value: "high" }, "High", -1),
                    createBaseVNode("option", { value: "urgent" }, "Urgent", -1)
                  ])], 512), [
                    [vModelSelect, createForm.value.priority]
                  ])
                ])
              ]),
              createForm.value.ticket_type === "library" ? (openBlock(), createElementBlock("div", _hoisted_53, [
                _cache[32] || (_cache[32] = createBaseVNode("label", { class: "block text-[10px] font-extrabold text-slate-450 uppercase tracking-widest mb-1.5" }, "Select Library", -1)),
                withDirectives(createBaseVNode("select", {
                  "onUpdate:modelValue": _cache[14] || (_cache[14] = ($event) => createForm.value.library_id = $event),
                  required: "",
                  class: "w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold focus:outline-none focus:ring-4 focus:ring-blue-100/50 focus:border-slate-300 focus:bg-white transition-all outline-none"
                }, [
                  _cache[31] || (_cache[31] = createBaseVNode("option", {
                    value: null,
                    disabled: ""
                  }, "Select a library", -1)),
                  (openBlock(true), createElementBlock(Fragment, null, renderList(libraries.value, (lib) => {
                    return openBlock(), createElementBlock("option", {
                      key: lib.id,
                      value: lib.id
                    }, toDisplayString(lib.name), 9, _hoisted_54);
                  }), 128))
                ], 512), [
                  [vModelSelect, createForm.value.library_id]
                ])
              ])) : createCommentVNode("", true),
              createBaseVNode("div", null, [
                _cache[33] || (_cache[33] = createBaseVNode("label", { class: "block text-[10px] font-extrabold text-slate-450 uppercase tracking-widest mb-1.5" }, "Description", -1)),
                withDirectives(createBaseVNode("textarea", {
                  "onUpdate:modelValue": _cache[15] || (_cache[15] = ($event) => createForm.value.message = $event),
                  required: "",
                  rows: "4",
                  placeholder: "Describe your issue in detail...",
                  class: "w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold focus:outline-none focus:ring-4 focus:ring-blue-100/50 focus:border-slate-300 focus:bg-white transition-all outline-none resize-none"
                }, null, 512), [
                  [vModelText, createForm.value.message]
                ])
              ]),
              createBaseVNode("div", _hoisted_55, [
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
                  !creating.value ? (openBlock(), createElementBlock("span", _hoisted_57, "Submit Ticket")) : (openBlock(), createBlock(unref(LoaderCircle), {
                    key: 1,
                    class: "w-4 h-4 animate-spin mx-auto"
                  }))
                ], 8, _hoisted_56)
              ])
            ], 32)
          ])
        ])) : createCommentVNode("", true)
      ]);
    };
  }
});
const SupportSystem = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-065df9ea"]]);
export {
  SupportSystem as S
};
