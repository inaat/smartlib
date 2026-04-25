import { a as axios, d as defineComponent, p as useAuth, D as computed, r as ref, o as onMounted, H as watch, c as createElementBlock, b as createBaseVNode, m as createCommentVNode, n as normalizeClass, t as toDisplayString, f as createVNode, u as unref, v as withDirectives, x as vModelText, F as Fragment, h as renderList, j as createTextVNode, Z as withKeys, s as withModifiers, k as createBlock, B as vModelSelect, N as nextTick, i as openBlock } from "./main-DCJXrkf-.js";
import { u as useSwal } from "./useSwal-BUxo5JBv.js";
import { c as createLucideIcon } from "./createLucideIcon-CDsoUk2K.js";
import { C as Clock } from "./clock-B7PYed5-.js";
import { C as CircleCheck } from "./circle-check-CM23KmaR.js";
import { P as Plus } from "./plus-D04LIZ3g.js";
import { S as Search } from "./search-Bl1QSbxq.js";
import { L as LoaderCircle } from "./loader-circle-Ipy8Qm_y.js";
import { L as LifeBuoy } from "./life-buoy-CJiKNpLk.js";
import { U as User } from "./user-C8gwTBBi.js";
import { R as RefreshCw } from "./refresh-cw-DCq6mbXe.js";
import { X } from "./x-BkNPvJ70.js";
import { f as formatDistanceToNow } from "./formatDistanceToNow-B4KUQnky.js";
import { f as format } from "./format-CDOmCKsg.js";
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
const api = axios.create({
  baseURL: "http://localhost:8000/api",
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json"
  },
  withCredentials: true
  // Enable credentials for CSRF token
});
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("auth_token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem("auth_token");
      localStorage.removeItem("smart-lib-user");
      window.location.href = "/";
    }
    return Promise.reject(error);
  }
);
const handleApiError = (error) => {
  if (error.response) {
    console.error("API Error:", error.response.data);
    throw new Error(error.response.data.message || "An error occurred");
  } else if (error.request) {
    console.error("Network Error:", error.request);
    throw new Error("Network error. Please check your connection.");
  } else {
    console.error("Error:", error.message);
    throw new Error(error.message);
  }
};
const studentAPI = {
  // Dashboard
  async getDashboard() {
    try {
      const response = await api.get("/student/dashboard");
      return response.data;
    } catch (error) {
      handleApiError(error);
      throw error;
    }
  },
  // Libraries
  async getLibraries() {
    try {
      const response = await api.get("/student/libraries");
      return response.data;
    } catch (error) {
      handleApiError(error);
      throw error;
    }
  },
  async getLibrary(id) {
    try {
      const response = await api.get(`/student/libraries/${id}`);
      return response.data;
    } catch (error) {
      handleApiError(error);
      throw error;
    }
  },
  async getLibrarySeats(libraryId) {
    try {
      const response = await api.get(`/student/libraries/${libraryId}/seats`);
      return response.data;
    } catch (error) {
      handleApiError(error);
      throw error;
    }
  },
  // Bookings
  async getBookings() {
    try {
      const response = await api.get("/student/bookings");
      return response.data;
    } catch (error) {
      handleApiError(error);
      throw error;
    }
  },
  async joinQueue(seatId) {
    try {
      const response = await api.post("/student/bookings/join-queue", { seat_id: seatId });
      return response.data;
    } catch (error) {
      handleApiError(error);
      throw error;
    }
  },
  async createBooking(booking) {
    try {
      const response = await api.post("/student/bookings", booking);
      return response.data;
    } catch (error) {
      handleApiError(error);
      throw error;
    }
  },
  async checkIn(bookingId, qrCode) {
    try {
      const response = await api.post(`/student/bookings/${bookingId}/checkin`, { qrCode });
      return response.data;
    } catch (error) {
      handleApiError(error);
      throw error;
    }
  },
  async checkOut(bookingId) {
    try {
      const response = await api.post(`/student/bookings/${bookingId}/checkout`);
      return response.data;
    } catch (error) {
      handleApiError(error);
      throw error;
    }
  },
  // Books
  async getBooks() {
    try {
      const response = await api.get("/student/books");
      return response.data;
    } catch (error) {
      handleApiError(error);
      throw error;
    }
  },
  async getBook(id) {
    try {
      const response = await api.get(`/student/books/${id}`);
      return response.data;
    } catch (error) {
      handleApiError(error);
      throw error;
    }
  },
  async reserveBook(bookId) {
    try {
      const response = await api.post(`/student/books/${bookId}/reserve`);
      return response.data;
    } catch (error) {
      handleApiError(error);
      throw error;
    }
  },
  // Events
  async getEvents() {
    try {
      const response = await api.get("/student/events");
      return response.data;
    } catch (error) {
      handleApiError(error);
      throw error;
    }
  },
  async getEvent(id) {
    try {
      const response = await api.get(`/student/events/${id}`);
      return response.data;
    } catch (error) {
      handleApiError(error);
      throw error;
    }
  },
  async registerForEvent(eventId) {
    try {
      const response = await api.post(`/student/events/${eventId}/register`);
      return response.data;
    } catch (error) {
      handleApiError(error);
      throw error;
    }
  },
  // Profile
  async getProfile() {
    try {
      const response = await api.get("/student/profile");
      return response.data;
    } catch (error) {
      handleApiError(error);
      throw error;
    }
  },
  async updateProfile(userData) {
    try {
      const response = await api.post("/student/profile", userData);
      return response.data;
    } catch (error) {
      handleApiError(error);
      throw error;
    }
  },
  // Notifications
  async getNotifications() {
    try {
      const response = await api.get("/student/notifications");
      return response.data;
    } catch (error) {
      handleApiError(error);
      throw error;
    }
  },
  async markNotificationRead(notificationId) {
    try {
      await api.post(`/student/notifications/${notificationId}/read`);
    } catch (error) {
      handleApiError(error);
    }
  },
  // Loyalty
  async getLoyaltyTransactions() {
    try {
      const response = await api.get("/student/profile/loyalty-transactions");
      return response.data;
    } catch (error) {
      handleApiError(error);
      throw error;
    }
  }
};
const supportAPI = {
  async getTickets(role) {
    try {
      const response = await api.get(`/${role}/support-tickets`);
      return response.data;
    } catch (error) {
      handleApiError(error);
      throw error;
    }
  },
  async createTicket(ticket) {
    try {
      const response = await api.post("/student/support-tickets", ticket);
      return response.data;
    } catch (error) {
      handleApiError(error);
      throw error;
    }
  },
  async getTicket(role, id) {
    try {
      const response = await api.get(`/${role}/support-tickets/${id}`);
      return response.data;
    } catch (error) {
      handleApiError(error);
      throw error;
    }
  },
  async sendMessage(role, ticketId, message) {
    try {
      const response = await api.post(`/${role}/support-tickets/${ticketId}/messages`, { message });
      return response.data;
    } catch (error) {
      handleApiError(error);
      throw error;
    }
  },
  async updateStatus(role, ticketId, status) {
    try {
      const response = await api.put(`/${role}/support-tickets/${ticketId}/status`, { status });
      return response.data;
    } catch (error) {
      handleApiError(error);
      throw error;
    }
  }
};
const _hoisted_1 = { class: "space-y-6" };
const _hoisted_2 = { class: "grid grid-cols-1 md:grid-cols-3 gap-6" };
const _hoisted_3 = { class: "flex justify-between items-center" };
const _hoisted_4 = { class: "text-2xl font-bold tracking-tight" };
const _hoisted_5 = { class: "flex justify-between items-center" };
const _hoisted_6 = { class: "text-2xl font-bold tracking-tight" };
const _hoisted_7 = { class: "flex justify-between items-center" };
const _hoisted_8 = { class: "text-2xl font-bold tracking-tight" };
const _hoisted_9 = { class: "flex h-[calc(100vh-20rem)] bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden" };
const _hoisted_10 = { class: "w-1/3 border-r border-gray-100 flex flex-col" };
const _hoisted_11 = { class: "p-4 border-b border-gray-100 flex justify-between items-center" };
const _hoisted_12 = { class: "p-4 bg-gray-50 border-b border-gray-100" };
const _hoisted_13 = { class: "relative" };
const _hoisted_14 = { class: "flex-1 overflow-y-auto" };
const _hoisted_15 = {
  key: 0,
  class: "p-8 text-center"
};
const _hoisted_16 = {
  key: 1,
  class: "p-8 text-center text-gray-500"
};
const _hoisted_17 = { key: 2 };
const _hoisted_18 = ["onClick"];
const _hoisted_19 = { class: "flex justify-between items-start mb-1" };
const _hoisted_20 = { class: "font-semibold text-gray-900 truncate pr-2" };
const _hoisted_21 = { class: "flex flex-wrap gap-1 mb-2" };
const _hoisted_22 = { class: "flex justify-between items-center text-xs text-gray-500" };
const _hoisted_23 = { class: "flex items-center" };
const _hoisted_24 = { class: "flex-1 flex flex-col bg-gray-50" };
const _hoisted_25 = { class: "bg-white p-4 border-b border-gray-100 flex justify-between items-center shadow-sm" };
const _hoisted_26 = { class: "flex items-center space-x-4" };
const _hoisted_27 = { class: "w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600" };
const _hoisted_28 = { class: "font-bold text-gray-900" };
const _hoisted_29 = { class: "text-xs text-gray-500" };
const _hoisted_30 = {
  key: 0,
  class: "ml-2 font-medium text-gray-700"
};
const _hoisted_31 = { class: "flex items-center space-x-2" };
const _hoisted_32 = ["value"];
const _hoisted_33 = {
  key: 0,
  class: "flex items-center space-x-1 mb-1 opacity-70"
};
const _hoisted_34 = { class: "font-bold text-[10px] uppercase tracking-wider" };
const _hoisted_35 = { class: "text-[10px]" };
const _hoisted_36 = { class: "whitespace-pre-wrap" };
const _hoisted_37 = { class: "p-4 bg-white border-t border-gray-100" };
const _hoisted_38 = { class: "flex items-end space-x-2" };
const _hoisted_39 = { class: "flex-1 relative" };
const _hoisted_40 = ["onKeydown"];
const _hoisted_41 = ["disabled"];
const _hoisted_42 = {
  key: 1,
  class: "flex-1 flex flex-col items-center justify-center p-12 text-center"
};
const _hoisted_43 = { class: "w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center text-blue-300 mb-6 animate-pulse" };
const _hoisted_44 = {
  key: 0,
  class: "fixed inset-0 z-[60] flex items-center justify-center p-4"
};
const _hoisted_45 = { class: "relative bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden animate-in fade-in zoom-in duration-200" };
const _hoisted_46 = { class: "p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50" };
const _hoisted_47 = { class: "grid grid-cols-2 gap-4" };
const _hoisted_48 = { key: 0 };
const _hoisted_49 = ["value"];
const _hoisted_50 = { class: "pt-2 flex space-x-3" };
const _hoisted_51 = ["disabled"];
const _hoisted_52 = { key: 0 };
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
        const ticket = await supportAPI.createTicket(createForm.value);
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
        const result = await supportAPI.updateStatus(userRole.value, selectedTicket.value.id, "closed");
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
          return "bg-green-100 text-green-700";
        case "in_progress":
          return "bg-blue-100 text-blue-700";
        case "resolved":
          return "bg-gray-100 text-gray-700";
        case "closed":
          return "bg-red-100 text-red-700";
        default:
          return "bg-gray-100 text-gray-700";
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
              "p-6 rounded-2xl border transition-all cursor-pointer shadow-sm hover:shadow-md",
              filterStatus.value === "all" ? "bg-blue-600 border-blue-600 text-white" : "bg-white border-gray-100 text-gray-800"
            ])
          }, [
            createBaseVNode("div", _hoisted_3, [
              createBaseVNode("div", null, [
                createBaseVNode("p", {
                  class: normalizeClass(["text-sm font-medium opacity-80", filterStatus.value === "all" ? "text-blue-100" : "text-gray-500"])
                }, "Total Tickets", 2),
                createBaseVNode("h4", _hoisted_4, toDisplayString(stats.value.all), 1)
              ]),
              createBaseVNode("div", {
                class: normalizeClass(["p-3 rounded-xl", filterStatus.value === "all" ? "bg-blue-500/50" : "bg-blue-50 text-blue-600"])
              }, [
                createVNode(unref(Ticket), { class: "w-6 h-6" })
              ], 2)
            ])
          ], 2),
          createBaseVNode("div", {
            onClick: _cache[1] || (_cache[1] = ($event) => filterStatus.value = "open"),
            class: normalizeClass([
              "p-6 rounded-2xl border transition-all cursor-pointer shadow-sm hover:shadow-md",
              filterStatus.value === "open" ? "bg-amber-500 border-amber-500 text-white" : "bg-white border-gray-100 text-gray-800"
            ])
          }, [
            createBaseVNode("div", _hoisted_5, [
              createBaseVNode("div", null, [
                createBaseVNode("p", {
                  class: normalizeClass(["text-sm font-medium opacity-80", filterStatus.value === "open" ? "text-amber-100" : "text-gray-500"])
                }, "Open Tickets", 2),
                createBaseVNode("h4", _hoisted_6, toDisplayString(stats.value.open), 1)
              ]),
              createBaseVNode("div", {
                class: normalizeClass(["p-3 rounded-xl", filterStatus.value === "open" ? "bg-amber-400/50" : "bg-amber-50 text-amber-600"])
              }, [
                createVNode(unref(Clock), { class: "w-6 h-6" })
              ], 2)
            ])
          ], 2),
          createBaseVNode("div", {
            onClick: _cache[2] || (_cache[2] = ($event) => filterStatus.value = "closed"),
            class: normalizeClass([
              "p-6 rounded-2xl border transition-all cursor-pointer shadow-sm hover:shadow-md",
              filterStatus.value === "closed" ? "bg-green-600 border-green-600 text-white" : "bg-white border-gray-100 text-gray-800"
            ])
          }, [
            createBaseVNode("div", _hoisted_7, [
              createBaseVNode("div", null, [
                createBaseVNode("p", {
                  class: normalizeClass(["text-sm font-medium opacity-80", filterStatus.value === "closed" ? "text-green-100" : "text-gray-500"])
                }, "Closed/Resolved", 2),
                createBaseVNode("h4", _hoisted_8, toDisplayString(stats.value.closed), 1)
              ]),
              createBaseVNode("div", {
                class: normalizeClass(["p-3 rounded-xl", filterStatus.value === "closed" ? "bg-green-500/50" : "bg-green-50 text-green-600"])
              }, [
                createVNode(unref(CircleCheck), { class: "w-6 h-6" })
              ], 2)
            ])
          ], 2)
        ]),
        createBaseVNode("div", _hoisted_9, [
          createBaseVNode("div", _hoisted_10, [
            createBaseVNode("div", _hoisted_11, [
              _cache[17] || (_cache[17] = createBaseVNode("h2", { class: "text-lg font-bold text-gray-800" }, "Support Tickets", -1)),
              userRole.value === "student" ? (openBlock(), createElementBlock("button", {
                key: 0,
                onClick: _cache[3] || (_cache[3] = ($event) => showCreateModal.value = true),
                class: "p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors",
                title: "Create New Ticket"
              }, [
                createVNode(unref(Plus), { class: "w-5 h-5" })
              ])) : createCommentVNode("", true)
            ]),
            createBaseVNode("div", _hoisted_12, [
              createBaseVNode("div", _hoisted_13, [
                createVNode(unref(Search), { class: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" }),
                withDirectives(createBaseVNode("input", {
                  "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => searchQuery.value = $event),
                  type: "text",
                  placeholder: "Search tickets...",
                  class: "w-full pl-10 pr-4 py-2 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                }, null, 512), [
                  [vModelText, searchQuery.value]
                ])
              ])
            ]),
            createBaseVNode("div", _hoisted_14, [
              loading.value ? (openBlock(), createElementBlock("div", _hoisted_15, [
                createVNode(unref(LoaderCircle), { class: "w-8 h-8 animate-spin text-blue-500 mx-auto mb-2" }),
                _cache[18] || (_cache[18] = createBaseVNode("p", { class: "text-sm text-gray-500" }, "Loading tickets...", -1))
              ])) : filteredTickets.value.length === 0 ? (openBlock(), createElementBlock("div", _hoisted_16, [
                createVNode(unref(LifeBuoy), { class: "w-12 h-12 text-gray-200 mx-auto mb-3" }),
                _cache[19] || (_cache[19] = createBaseVNode("p", null, "No tickets found", -1))
              ])) : (openBlock(), createElementBlock("div", _hoisted_17, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(filteredTickets.value, (ticket) => {
                  return openBlock(), createElementBlock("div", {
                    key: ticket.id,
                    onClick: ($event) => selectTicket(ticket),
                    class: normalizeClass([
                      "p-4 border-b border-gray-50 cursor-pointer hover:bg-gray-50 transition-colors relative",
                      selectedTicket.value?.id === ticket.id ? "bg-blue-50 border-l-4 border-l-blue-600" : ""
                    ])
                  }, [
                    createBaseVNode("div", _hoisted_19, [
                      createBaseVNode("h3", _hoisted_20, toDisplayString(ticket.subject), 1),
                      createBaseVNode("div", _hoisted_21, [
                        createBaseVNode("span", {
                          class: normalizeClass([
                            "text-[9px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider",
                            ticket.ticket_type === "library" ? "bg-indigo-100 text-indigo-700" : "bg-purple-100 text-purple-700"
                          ])
                        }, toDisplayString(ticket.ticket_type), 3),
                        createBaseVNode("span", {
                          class: normalizeClass([
                            "text-[9px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider",
                            getStatusClass(ticket.status)
                          ])
                        }, toDisplayString(ticket.status), 3)
                      ])
                    ]),
                    createBaseVNode("div", _hoisted_22, [
                      createBaseVNode("span", _hoisted_23, [
                        createVNode(unref(User), { class: "w-3 h-3 mr-1" }),
                        createTextVNode(" " + toDisplayString(ticket.user?.name || "User"), 1)
                      ]),
                      createBaseVNode("span", null, toDisplayString(formatDate(ticket.created_at)), 1)
                    ])
                  ], 10, _hoisted_18);
                }), 128))
              ]))
            ])
          ]),
          createBaseVNode("div", _hoisted_24, [
            selectedTicket.value ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
              createBaseVNode("div", _hoisted_25, [
                createBaseVNode("div", _hoisted_26, [
                  createBaseVNode("div", _hoisted_27, [
                    createVNode(unref(User), { class: "w-6 h-6" })
                  ]),
                  createBaseVNode("div", null, [
                    createBaseVNode("h3", _hoisted_28, toDisplayString(selectedTicket.value.subject), 1),
                    createBaseVNode("p", _hoisted_29, [
                      createTextVNode(" Ticket #" + toDisplayString(selectedTicket.value.id) + " • From: " + toDisplayString(selectedTicket.value.user?.name) + " ", 1),
                      createBaseVNode("span", {
                        class: normalizeClass([
                          "ml-2 px-2 py-0.5 rounded text-[10px] uppercase font-bold",
                          selectedTicket.value.ticket_type === "library" ? "bg-indigo-50 text-indigo-600" : "bg-purple-50 text-purple-600"
                        ])
                      }, toDisplayString(selectedTicket.value.ticket_type === "library" ? "Library Issue" : "System Issue"), 3),
                      selectedTicket.value.library ? (openBlock(), createElementBlock("span", _hoisted_30, " • " + toDisplayString(selectedTicket.value.library.name), 1)) : createCommentVNode("", true)
                    ])
                  ])
                ]),
                createBaseVNode("div", _hoisted_31, [
                  userRole.value !== "student" ? (openBlock(), createElementBlock("select", {
                    key: 0,
                    onChange: _cache[5] || (_cache[5] = ($event) => handleStatusChange($event)),
                    value: selectedTicket.value.status,
                    class: "text-xs border border-gray-200 rounded-lg px-2 py-1 focus:ring-blue-500 focus:border-blue-500"
                  }, [..._cache[20] || (_cache[20] = [
                    createBaseVNode("option", { value: "open" }, "Open", -1),
                    createBaseVNode("option", { value: "in_progress" }, "In Progress", -1),
                    createBaseVNode("option", { value: "resolved" }, "Resolved", -1),
                    createBaseVNode("option", { value: "closed" }, "Closed", -1)
                  ])], 40, _hoisted_32)) : ["open", "in_progress"].includes(selectedTicket.value.status) ? (openBlock(), createElementBlock("button", {
                    key: 1,
                    onClick: handleCloseTicket,
                    class: "text-xs px-3 py-1 bg-red-50 text-red-600 border border-red-100 rounded-lg hover:bg-red-100 transition-colors font-medium"
                  }, " Close Ticket ")) : createCommentVNode("", true),
                  createBaseVNode("button", {
                    onClick: _cache[6] || (_cache[6] = ($event) => fetchTicketDetails(selectedTicket.value.id)),
                    class: "p-2 text-gray-400 hover:text-blue-600 transition-colors",
                    title: "Refresh"
                  }, [
                    createVNode(unref(RefreshCw), { class: "w-4 h-4" })
                  ])
                ])
              ]),
              createBaseVNode("div", {
                class: "flex-1 overflow-y-auto p-6 space-y-4",
                ref_key: "messageContainer",
                ref: messageContainer
              }, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(selectedTicket.value.messages, (message) => {
                  return openBlock(), createElementBlock("div", {
                    key: message.id,
                    class: normalizeClass([
                      "flex",
                      message.user_id === unref(currentUser).id ? "justify-end" : "justify-start"
                    ])
                  }, [
                    createBaseVNode("div", {
                      class: normalizeClass([
                        "max-w-[70%] p-4 rounded-2xl shadow-sm text-sm",
                        message.user_id === unref(currentUser).id ? "bg-blue-600 text-white rounded-br-none" : "bg-white text-gray-800 rounded-bl-none border border-gray-100"
                      ])
                    }, [
                      message.user_id !== unref(currentUser).id ? (openBlock(), createElementBlock("div", _hoisted_33, [
                        createBaseVNode("span", _hoisted_34, toDisplayString(message.user?.role || "Support"), 1),
                        createBaseVNode("span", _hoisted_35, "• " + toDisplayString(message.user?.name), 1)
                      ])) : createCommentVNode("", true),
                      createBaseVNode("p", _hoisted_36, toDisplayString(message.message), 1),
                      createBaseVNode("div", {
                        class: normalizeClass([
                          "text-[10px] mt-2 text-right",
                          message.user_id === unref(currentUser).id ? "text-blue-100" : "text-gray-400"
                        ])
                      }, toDisplayString(formatFullDate(message.created_at)), 3)
                    ], 2)
                  ], 2);
                }), 128))
              ], 512),
              createBaseVNode("div", _hoisted_37, [
                createBaseVNode("div", _hoisted_38, [
                  createBaseVNode("div", _hoisted_39, [
                    withDirectives(createBaseVNode("textarea", {
                      "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => newMessage.value = $event),
                      rows: "1",
                      placeholder: "Type your message...",
                      class: "w-full px-4 py-2 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none",
                      onKeydown: withKeys(withModifiers(handleSendMessage, ["prevent"]), ["enter"])
                    }, null, 40, _hoisted_40), [
                      [vModelText, newMessage.value]
                    ])
                  ]),
                  createBaseVNode("button", {
                    onClick: handleSendMessage,
                    disabled: !newMessage.value.trim() || sending.value,
                    class: "p-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  }, [
                    !sending.value ? (openBlock(), createBlock(unref(Send), {
                      key: 0,
                      class: "w-5 h-5"
                    })) : (openBlock(), createBlock(unref(LoaderCircle), {
                      key: 1,
                      class: "w-5 h-5 animate-spin"
                    }))
                  ], 8, _hoisted_41)
                ]),
                _cache[21] || (_cache[21] = createBaseVNode("p", { class: "text-[10px] text-gray-400 mt-2 text-center" }, "Press Enter to send (Shift+Enter for newline)", -1))
              ])
            ], 64)) : (openBlock(), createElementBlock("div", _hoisted_42, [
              createBaseVNode("div", _hoisted_43, [
                createVNode(unref(LifeBuoy), { class: "w-10 h-10" })
              ]),
              _cache[22] || (_cache[22] = createBaseVNode("h3", { class: "text-xl font-bold text-gray-800 mb-2" }, "Welcome to Support", -1)),
              _cache[23] || (_cache[23] = createBaseVNode("p", { class: "text-gray-500 max-w-sm" }, "Select a ticket from the list to view the conversation or create a new one to get help.", -1)),
              userRole.value === "student" ? (openBlock(), createElementBlock("button", {
                key: 0,
                onClick: _cache[8] || (_cache[8] = ($event) => showCreateModal.value = true),
                class: "mt-6 px-6 py-2 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-all shadow-md hover:shadow-lg"
              }, " Create Your First Ticket ")) : createCommentVNode("", true)
            ]))
          ])
        ]),
        showCreateModal.value ? (openBlock(), createElementBlock("div", _hoisted_44, [
          createBaseVNode("div", {
            class: "absolute inset-0 bg-black/50 backdrop-blur-sm",
            onClick: _cache[9] || (_cache[9] = ($event) => showCreateModal.value = false)
          }),
          createBaseVNode("div", _hoisted_45, [
            createBaseVNode("div", _hoisted_46, [
              _cache[24] || (_cache[24] = createBaseVNode("div", null, [
                createBaseVNode("h3", { class: "text-xl font-bold text-gray-900" }, "Create Support Ticket"),
                createBaseVNode("p", { class: "text-sm text-gray-500" }, "How can we help you today?")
              ], -1)),
              createBaseVNode("button", {
                onClick: _cache[10] || (_cache[10] = ($event) => showCreateModal.value = false),
                class: "text-gray-400 hover:text-gray-600 p-2 rounded-lg hover:bg-gray-100"
              }, [
                createVNode(unref(X), { class: "w-6 h-6" })
              ])
            ]),
            createBaseVNode("form", {
              onSubmit: withModifiers(handleCreateTicket, ["prevent"]),
              class: "p-6 space-y-4"
            }, [
              createBaseVNode("div", null, [
                _cache[25] || (_cache[25] = createBaseVNode("label", { class: "block text-sm font-semibold text-gray-700 mb-1" }, "Subject", -1)),
                withDirectives(createBaseVNode("input", {
                  "onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => createForm.value.subject = $event),
                  type: "text",
                  required: "",
                  placeholder: "e.g., Seat booking issue, Library access",
                  class: "w-full px-4 py-2 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                }, null, 512), [
                  [vModelText, createForm.value.subject]
                ])
              ]),
              createBaseVNode("div", _hoisted_47, [
                createBaseVNode("div", null, [
                  _cache[27] || (_cache[27] = createBaseVNode("label", { class: "block text-sm font-semibold text-gray-700 mb-1" }, "Category", -1)),
                  withDirectives(createBaseVNode("select", {
                    "onUpdate:modelValue": _cache[12] || (_cache[12] = ($event) => createForm.value.ticket_type = $event),
                    class: "w-full px-4 py-2 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  }, [..._cache[26] || (_cache[26] = [
                    createBaseVNode("option", { value: "library" }, "Library Issue", -1),
                    createBaseVNode("option", { value: "system" }, "System Issue", -1)
                  ])], 512), [
                    [vModelSelect, createForm.value.ticket_type]
                  ])
                ]),
                createBaseVNode("div", null, [
                  _cache[29] || (_cache[29] = createBaseVNode("label", { class: "block text-sm font-semibold text-gray-700 mb-1" }, "Priority", -1)),
                  withDirectives(createBaseVNode("select", {
                    "onUpdate:modelValue": _cache[13] || (_cache[13] = ($event) => createForm.value.priority = $event),
                    class: "w-full px-4 py-2 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  }, [..._cache[28] || (_cache[28] = [
                    createBaseVNode("option", { value: "low" }, "Low", -1),
                    createBaseVNode("option", { value: "medium" }, "Medium", -1),
                    createBaseVNode("option", { value: "high" }, "High", -1),
                    createBaseVNode("option", { value: "urgent" }, "Urgent", -1)
                  ])], 512), [
                    [vModelSelect, createForm.value.priority]
                  ])
                ])
              ]),
              createForm.value.ticket_type === "library" ? (openBlock(), createElementBlock("div", _hoisted_48, [
                _cache[31] || (_cache[31] = createBaseVNode("label", { class: "block text-sm font-semibold text-gray-700 mb-1" }, "Select Library", -1)),
                withDirectives(createBaseVNode("select", {
                  "onUpdate:modelValue": _cache[14] || (_cache[14] = ($event) => createForm.value.library_id = $event),
                  required: "",
                  class: "w-full px-4 py-2 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                }, [
                  _cache[30] || (_cache[30] = createBaseVNode("option", {
                    value: null,
                    disabled: ""
                  }, "Select a library", -1)),
                  (openBlock(true), createElementBlock(Fragment, null, renderList(libraries.value, (lib) => {
                    return openBlock(), createElementBlock("option", {
                      key: lib.id,
                      value: lib.id
                    }, toDisplayString(lib.name), 9, _hoisted_49);
                  }), 128))
                ], 512), [
                  [vModelSelect, createForm.value.library_id]
                ])
              ])) : createCommentVNode("", true),
              createBaseVNode("div", null, [
                _cache[32] || (_cache[32] = createBaseVNode("label", { class: "block text-sm font-semibold text-gray-700 mb-1" }, "Description", -1)),
                withDirectives(createBaseVNode("textarea", {
                  "onUpdate:modelValue": _cache[15] || (_cache[15] = ($event) => createForm.value.message = $event),
                  required: "",
                  rows: "4",
                  placeholder: "Please describe your problem in detail...",
                  class: "w-full px-4 py-2 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                }, null, 512), [
                  [vModelText, createForm.value.message]
                ])
              ]),
              createBaseVNode("div", _hoisted_50, [
                createBaseVNode("button", {
                  type: "button",
                  onClick: _cache[16] || (_cache[16] = ($event) => showCreateModal.value = false),
                  class: "flex-1 px-4 py-2 text-gray-700 font-semibold hover:bg-gray-100 rounded-xl transition-colors"
                }, " Cancel "),
                createBaseVNode("button", {
                  type: "submit",
                  disabled: creating.value,
                  class: "flex-1 px-4 py-2 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all shadow-md disabled:opacity-50"
                }, [
                  !creating.value ? (openBlock(), createElementBlock("span", _hoisted_52, "Submit Ticket")) : (openBlock(), createBlock(unref(LoaderCircle), {
                    key: 1,
                    class: "w-5 h-5 animate-spin mx-auto"
                  }))
                ], 8, _hoisted_51)
              ])
            ], 32)
          ])
        ])) : createCommentVNode("", true)
      ]);
    };
  }
});
const SupportSystem = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-1bf98ce8"]]);
export {
  SupportSystem as S
};
