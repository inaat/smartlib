import { d as defineComponent, r as ref, c as computed, y as reactive, o as onMounted, a as createElementBlock, b as createBaseVNode, l as createCommentVNode, f as createVNode, p as withDirectives, D as vModelSelect, F as Fragment, j as renderList, u as unref, i as createTextVNode, t as toDisplayString, z as withModifiers, n as normalizeClass, h as createBlock, w as withCtx, T as Transition, P as librarianAPI, m as resolveDynamicComponent, k as openBlock } from "./main-DKJzpCzk.js";
import { s as superadminAPI } from "./superadminApi-RBkuQ_58.js";
import { u as useSwal } from "./useSwal-pQW_XkRe.js";
import { L as Library } from "./library-Bkji8mTt.js";
import { C as ChevronDown } from "./chevron-down-CfHstygd.js";
import { c as createLucideIcon } from "./createLucideIcon-TQ5d7bQA.js";
import { Z as Zap } from "./zap-DcK6AMGO.js";
import { L as LayoutGrid } from "./layout-grid-x4L-y5ND.js";
import { H as History } from "./history-CCCaaEm2.js";
import { X } from "./x-BLKH3q-c.js";
import { F as FileText } from "./file-text-CTSpt0IO.js";
import { S as Sheet, C as CalendarDays, a as CalendarClock } from "./sheet-WhptHG3D.js";
import { C as Calendar } from "./calendar-FTR2aUnV.js";
import { U as Users } from "./users-3SVXGYtw.js";
import { A as Armchair } from "./armchair-B9aMc4Sz.js";
import { T as TriangleAlert } from "./triangle-alert-BLFAvrrP.js";
import { B as BookMarked } from "./book-marked-BStkIjFC.js";
import { D as Download } from "./download-DNf0rv9l.js";
import { R as RefreshCw } from "./refresh-cw-vjkPNSrg.js";
import { C as CircleCheckBig } from "./circle-check-big-D9EkHUxc.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
/* empty css               */
const MousePointer2 = createLucideIcon("mouse-pointer-2", [
  [
    "path",
    {
      d: "M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z",
      key: "edeuup"
    }
  ]
]);
const _hoisted_1 = { class: "space-y-8 pb-12" };
const _hoisted_2 = { class: "flex flex-col md:flex-row md:items-center md:justify-between gap-4" };
const _hoisted_3 = { class: "min-w-[280px]" };
const _hoisted_4 = { class: "relative group" };
const _hoisted_5 = ["value"];
const _hoisted_6 = { class: "absolute left-4 top-1/2 -translate-y-1/2 text-indigo-500 group-hover:scale-110 transition-transform" };
const _hoisted_7 = { class: "absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" };
const _hoisted_8 = {
  key: 0,
  class: "bg-indigo-50 border border-indigo-100 rounded-3xl p-12 text-center"
};
const _hoisted_9 = { class: "w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-sm mx-auto mb-6" };
const _hoisted_10 = {
  key: 1,
  class: "animate-in fade-in slide-in-from-bottom-4 duration-500"
};
const _hoisted_11 = { class: "mb-8" };
const _hoisted_12 = { class: "text-lg font-bold text-gray-800 mb-4 flex items-center" };
const _hoisted_13 = { class: "space-y-3" };
const _hoisted_14 = { class: "flex items-center gap-3" };
const _hoisted_15 = { class: "font-bold text-gray-800" };
const _hoisted_16 = { class: "flex items-center gap-2 flex-wrap" };
const _hoisted_17 = ["onClick"];
const _hoisted_18 = ["onClick"];
const _hoisted_19 = { class: "mb-8" };
const _hoisted_20 = { class: "text-lg font-bold text-gray-800 mb-4 flex items-center" };
const _hoisted_21 = { class: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5" };
const _hoisted_22 = { class: "flex items-center gap-3 mb-3" };
const _hoisted_23 = { class: "font-bold text-gray-900 text-base" };
const _hoisted_24 = { class: "text-xs text-gray-500 mb-5 space-y-1 pl-1" };
const _hoisted_25 = { class: "flex items-center gap-2 flex-wrap" };
const _hoisted_26 = ["onClick"];
const _hoisted_27 = ["onClick"];
const _hoisted_28 = { class: "bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden" };
const _hoisted_29 = { class: "px-6 py-4 border-b border-gray-100 flex items-center justify-between" };
const _hoisted_30 = { class: "text-sm font-bold text-gray-800 flex items-center" };
const _hoisted_31 = { class: "p-6" };
const _hoisted_32 = {
  key: 0,
  class: "text-center py-12"
};
const _hoisted_33 = {
  key: 1,
  class: "overflow-x-auto"
};
const _hoisted_34 = { class: "w-full text-sm" };
const _hoisted_35 = { class: "py-3 px-3 font-bold text-gray-800" };
const _hoisted_36 = { class: "py-3 px-3" };
const _hoisted_37 = { class: "py-3 px-3 text-gray-500 text-xs" };
const _hoisted_38 = { class: "py-3 px-3 text-right" };
const _hoisted_39 = ["onClick"];
const _hoisted_40 = { class: "bg-white rounded-3xl p-8 max-w-sm w-full shadow-2xl" };
const _hoisted_41 = { class: "flex items-center justify-between mb-6" };
const _hoisted_42 = { class: "text-sm text-gray-500 mt-1" };
const _hoisted_43 = { class: "mb-6" };
const _hoisted_44 = { class: "grid grid-cols-3 gap-2" };
const _hoisted_45 = ["onClick"];
const _hoisted_46 = { class: "flex items-center gap-2" };
const _hoisted_47 = { class: "flex gap-3" };
const _hoisted_48 = {
  key: 0,
  class: "fixed bottom-6 right-6 z-50 bg-white rounded-2xl shadow-2xl border border-gray-100 p-5 flex items-center gap-4 min-w-[320px]"
};
const _hoisted_49 = {
  key: 0,
  class: "w-10 h-10 rounded-xl bg-indigo-100 flex items-center justify-center"
};
const _hoisted_50 = {
  key: 1,
  class: "w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center"
};
const _hoisted_51 = { class: "font-bold text-gray-800 text-sm" };
const _hoisted_52 = { class: "text-xs text-gray-500" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ReportsPage",
  setup(__props) {
    const { showError } = useSwal();
    const libraries = ref([]);
    const selectedLibraryId = ref(null);
    const selectedLibraryName = computed(() => {
      return libraries.value.find((l) => l.id === selectedLibraryId.value)?.name || "Library";
    });
    const handleLibraryChange = () => {
      loadHistory();
    };
    const quickSummaries = [
      { label: "Generate Today Summary", type: "today", icon: CalendarDays, bgColor: "bg-blue-100", iconColor: "text-blue-600" },
      { label: "Generate Weekly Summary", type: "weekly", icon: Calendar, bgColor: "bg-emerald-100", iconColor: "text-emerald-600" },
      { label: "Generate Monthly Summary", type: "monthly", icon: CalendarClock, bgColor: "bg-indigo-100", iconColor: "text-indigo-600" }
    ];
    const reportCategories = [
      {
        label: "Attendance",
        type: "attendance",
        icon: Users,
        bgColor: "bg-indigo-50",
        iconColor: "text-indigo-600",
        descriptions: ["Reports, present/absent approx.", "Daily and weekly summaries"]
      },
      {
        label: "Bookings",
        type: "bookings",
        icon: Calendar,
        bgColor: "bg-blue-50",
        iconColor: "text-blue-600",
        descriptions: ["Reports, list, statistics", "Peak hours analysis"]
      },
      {
        label: "Seat Utilization",
        type: "seat_utilization",
        icon: Armchair,
        bgColor: "bg-teal-50",
        iconColor: "text-teal-600",
        descriptions: ["Search: seat, usage & utilizers", "Availability heatmaps"]
      },
      {
        label: "Complaints",
        type: "complaints",
        icon: TriangleAlert,
        bgColor: "bg-red-50",
        iconColor: "text-red-600",
        descriptions: ["Reports, mishapances & complaints", "Resolution tracking"]
      },
      {
        label: "Books",
        type: "books",
        icon: BookMarked,
        bgColor: "bg-amber-50",
        iconColor: "text-amber-600",
        descriptions: ["Report: books, genre, status", "Reservation analytics"]
      },
      {
        label: "Events",
        type: "events",
        icon: CalendarDays,
        bgColor: "bg-indigo-50",
        iconColor: "text-indigo-600",
        descriptions: ["View: scheduled, attendance stats", "Participation tracking"]
      }
    ];
    const reportHistory = ref([]);
    const libraryReportHistory = computed(() => {
      return reportHistory.value.filter((h) => h.libraryId === selectedLibraryId.value);
    });
    const loadHistory = () => {
      const saved = localStorage.getItem("superadmin-report-history");
      if (saved) reportHistory.value = JSON.parse(saved);
    };
    const saveHistory = () => {
      localStorage.setItem("superadmin-report-history", JSON.stringify(reportHistory.value));
    };
    const addToHistory = (name, type, format) => {
      if (!selectedLibraryId.value) return;
      reportHistory.value.unshift({
        name,
        type,
        format,
        libraryId: selectedLibraryId.value,
        generatedAt: (/* @__PURE__ */ new Date()).toLocaleString("en-PK", { dateStyle: "medium", timeStyle: "short" })
      });
      if (reportHistory.value.length > 100) reportHistory.value.pop();
      saveHistory();
    };
    const downloadReport = (h) => {
      exportReport(h.type, h.format);
    };
    const timespanOptions = [
      { label: "Today", value: "today" },
      { label: "Weekly", value: "weekly" },
      { label: "Monthly", value: "monthly" }
    ];
    const exportModal = reactive({
      show: false,
      reportType: "",
      reportName: "",
      format: "pdf",
      timespan: "today"
    });
    const openExportModal = (type, name, format) => {
      exportModal.show = true;
      exportModal.reportType = type;
      exportModal.reportName = name;
      exportModal.format = format;
      exportModal.timespan = "today";
    };
    const confirmExport = () => {
      const tsLabel = timespanOptions.find((t) => t.value === exportModal.timespan)?.label || "";
      exportModal.show = false;
      exportReport(exportModal.reportType, exportModal.format, tsLabel);
    };
    const exportToast = reactive({ show: false, status: "loading", title: "", subtitle: "" });
    const exportReport = async (type, format, timespanLabel) => {
      if (!selectedLibraryId.value) return;
      const baseLabel = [...quickSummaries, ...reportCategories].find((r) => r.type === type)?.label || type;
      const label = timespanLabel ? `${baseLabel} (${timespanLabel})` : baseLabel;
      const libId = selectedLibraryId.value;
      exportToast.show = true;
      exportToast.status = "loading";
      exportToast.title = `Generating ${label}...`;
      exportToast.subtitle = `Library: ${selectedLibraryName.value}`;
      try {
        const [dashboard, bookingsRes, attendanceRes, booksRes, eventsRes] = await Promise.allSettled([
          // Note: we use librarianAPI but pass library_id
          librarianAPI.getDashboard({ library_id: libId }),
          librarianAPI.getBookings({ library_id: libId, per_page: 50 }),
          librarianAPI.getAttendance({ library_id: libId, per_page: 50 }),
          librarianAPI.getBooks({ library_id: libId }),
          librarianAPI.getEvents({ library_id: libId })
        ]);
        const dash = dashboard.status === "fulfilled" ? dashboard.value.data || dashboard.value : {};
        const bookings = bookingsRes.status === "fulfilled" ? bookingsRes.value?.data || bookingsRes.value || [] : [];
        const attendance = attendanceRes.status === "fulfilled" ? attendanceRes.value?.data || attendanceRes.value || [] : [];
        const books = booksRes.status === "fulfilled" ? Array.isArray(booksRes.value) ? booksRes.value : booksRes.value?.data || [] : [];
        const events = eventsRes.status === "fulfilled" ? Array.isArray(eventsRes.value) ? eventsRes.value : eventsRes.value?.data || [] : [];
        const cleanDash = dash.stats ? dash : { stats: dash, library: { name: selectedLibraryName.value } };
        const reportData = { dash: cleanDash, bookings, attendance, books, events };
        if (format === "pdf") {
          const html = buildHTMLReport(type, label, reportData);
          printHTMLReport(html);
        } else {
          const csv = buildCSVReport(type, label, reportData);
          downloadAsFile(`${label.replace(/\s+/g, "_")}_${Date.now()}.csv`, csv, "text/csv");
        }
        addToHistory(label, type, format);
        exportToast.status = "done";
        exportToast.title = "Report Generated!";
        exportToast.subtitle = `${label} is ready.`;
        setTimeout(() => {
          exportToast.show = false;
        }, 3e3);
      } catch (error) {
        console.error(error);
        exportToast.show = false;
        showError("Export Failed", "An error occurred while generating the report.");
      }
    };
    const fmtTime12 = (d) => {
      if (!d) return "—";
      const dt = new Date(d);
      return isNaN(dt.getTime()) ? String(d) : dt.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: true });
    };
    const statusBadge = (s) => {
      const colors = { checked_in: "#059669", booked: "#d97706", checked_out: "#6366f1", cancelled: "#dc2626", available: "#059669" };
      const c = colors[s] || "#6b7280";
      return `<span style="display:inline-block;padding:2px 10px;border-radius:6px;font-size:11px;font-weight:700;color:#fff;background:${c};text-transform:capitalize">${s.replace(/_/g, " ")}</span>`;
    };
    const buildHTMLReport = (type, label, d) => {
      const isSummary = ["today", "weekly", "monthly"].includes(type);
      const stats = d.dash?.stats || {};
      const libName = d.dash?.library?.name || selectedLibraryName.value;
      const attendRows = d.attendance.slice(0, 20).map((a) => `<tr><td>${a.seat?.seat_number || "—"}</td><td>${a.user?.name || "—"}</td><td>${fmtTime12(a.check_in_time)}</td><td>${statusBadge(a.status || "checked_in")}</td></tr>`).join("");
      const bookingRows = d.bookings.slice(0, 20).map((b) => `<tr><td>${b.seat?.seat_number || "—"}</td><td>${b.user?.name || "—"}</td><td>${fmtTime12(b.booking_time)}</td><td>${statusBadge(b.status)}</td></tr>`).join("");
      return `
    <html>
      <head>
        <style>
          body { font-family: sans-serif; color: #1e293b; padding: 40px; }
          .header { border-bottom: 2px solid #edeff2; padding-bottom: 20px; margin-bottom: 30px; display: flex; justify-content: space-between; }
          .lib-info h1 { margin: 0; color: #4338ca; }
          .report-meta { text-align: right; font-size: 12px; color: #64748b; }
          h2 { font-size: 18px; border-left: 4px solid #4338ca; padding-left: 12px; margin: 30px 0 15px; }
          table { width: 100%; border-collapse: collapse; }
          th { background: #f8fafc; text-align: left; padding: 12px; font-size: 12px; border-bottom: 2px solid #edeff2; }
          td { padding: 12px; font-size: 13px; border-bottom: 1px solid #edeff2; }
          .stat-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin-bottom: 30px; }
          .stat-card { background: #f1f5f9; padding: 20px; border-radius: 12px; text-align: center; }
          .stat-val { font-size: 24px; font-weight: 800; color: #4338ca; }
          .stat-lbl { font-size: 11px; font-weight: 600; color: #64748b; margin-top: 4px; }
        </style>
      </head>
      <body>
        <div class="header">
          <div class="lib-info">
            <h1>${libName}</h1>
            <div style="font-size: 14px; color: #64748b;">${label} Report</div>
          </div>
          <div class="report-meta">
            Generated: ${(/* @__PURE__ */ new Date()).toLocaleString()}<br>
            By: Super Admin
          </div>
        </div>

        ${isSummary ? `
          <h2>Summary Stats</h2>
          <div class="stat-grid">
            <div class="stat-card"><div class="stat-val">${stats.total_seats || 0}</div><div class="stat-lbl">Total Seats</div></div>
            <div class="stat-card"><div class="stat-val">${stats.today_bookings || d.bookings.length}</div><div class="stat-lbl">Bookings</div></div>
            <div class="stat-card"><div class="stat-val">${stats.pending_tickets || 0}</div><div class="stat-lbl">Complaints</div></div>
          </div>
        ` : ""}

        ${isSummary || type === "attendance" ? `
          <h2>Attendance</h2>
          <table><thead><tr><th>Seat</th><th>Student</th><th>Time</th><th>Status</th></tr></thead>
          <tbody>${attendRows || '<tr><td colspan="4" style="text-align:center">No data</td></tr>'}</tbody></table>
        ` : ""}

        ${isSummary || type === "bookings" ? `
          <h2>Bookings</h2>
          <table><thead><tr><th>Seat</th><th>Student</th><th>Time</th><th>Status</th></tr></thead>
          <tbody>${bookingRows || '<tr><td colspan="4" style="text-align:center">No data</td></tr>'}</tbody></table>
        ` : ""}

        <div style="margin-top: 50px; text-align: center; font-size: 10px; color: #cbd5e1;">Generated by Smart Lib Management System</div>
      </body>
    </html>
  `;
    };
    const buildCSVReport = (type, label, d) => {
      let csv = `"Library","${selectedLibraryName.value}"
"Report","${label}"
"Generated","${(/* @__PURE__ */ new Date()).toLocaleString()}"

`;
      const isSummary = ["today", "weekly", "monthly"].includes(type);
      if (isSummary || type === "attendance") {
        csv += `"=== ATTENDANCE ==="
"Seat","Student","Time","Status"
`;
        d.attendance.forEach((a) => {
          csv += `"${a.seat?.seat_number || ""}","${a.user?.name || ""}","${fmtTime12(a.check_in_time)}","${a.status || "checked_in"}"
`;
        });
        csv += "\n";
      }
      if (isSummary || type === "bookings") {
        csv += `"=== BOOKINGS ==="
"Seat","Student","Time","Status"
`;
        d.bookings.forEach((b) => {
          csv += `"${b.seat?.seat_number || ""}","${b.user?.name || ""}","${fmtTime12(b.booking_time)}","${b.status}"
`;
        });
      }
      return csv;
    };
    const printHTMLReport = (html) => {
      const w = window.open("", "_blank");
      if (!w) return;
      w.document.write(html);
      w.document.close();
      w.onload = () => {
        setTimeout(() => w.print(), 500);
      };
    };
    const downloadAsFile = (name, content, type) => {
      const blob = new Blob([content], { type });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = name;
      a.click();
    };
    onMounted(async () => {
      try {
        libraries.value = await superadminAPI.getLibraries();
        loadHistory();
      } catch (error) {
        showError("Error", "Failed to load libraries.");
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          _cache[7] || (_cache[7] = createBaseVNode("div", null, [
            createBaseVNode("h1", { class: "text-3xl font-black text-gray-900" }, "Library Reports"),
            createBaseVNode("p", { class: "text-gray-500 mt-1" }, "Select a library to generate, schedule, and export reports")
          ], -1)),
          createBaseVNode("div", _hoisted_3, [
            _cache[6] || (_cache[6] = createBaseVNode("label", { class: "text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5 block ml-1" }, "Active Library", -1)),
            createBaseVNode("div", _hoisted_4, [
              withDirectives(createBaseVNode("select", {
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => selectedLibraryId.value = $event),
                onChange: handleLibraryChange,
                class: "w-full pl-11 pr-10 py-3.5 bg-white border border-gray-100 rounded-2xl text-sm font-bold text-gray-800 shadow-sm hover:shadow-md hover:border-indigo-200 focus:ring-4 focus:ring-indigo-50 outline-none transition-all appearance-none cursor-pointer"
              }, [
                _cache[5] || (_cache[5] = createBaseVNode("option", {
                  value: null,
                  disabled: ""
                }, "Select a library...", -1)),
                (openBlock(true), createElementBlock(Fragment, null, renderList(libraries.value, (lib) => {
                  return openBlock(), createElementBlock("option", {
                    key: lib.id,
                    value: lib.id
                  }, toDisplayString(lib.name), 9, _hoisted_5);
                }), 128))
              ], 544), [
                [vModelSelect, selectedLibraryId.value]
              ]),
              createBaseVNode("div", _hoisted_6, [
                createVNode(unref(Library), { class: "w-5 h-5" })
              ]),
              createBaseVNode("div", _hoisted_7, [
                createVNode(unref(ChevronDown), { class: "w-4 h-4" })
              ])
            ])
          ])
        ]),
        !selectedLibraryId.value ? (openBlock(), createElementBlock("div", _hoisted_8, [
          createBaseVNode("div", _hoisted_9, [
            createVNode(unref(MousePointer2), { class: "w-10 h-10 text-indigo-500 animate-bounce" })
          ]),
          _cache[8] || (_cache[8] = createBaseVNode("h3", { class: "text-xl font-bold text-indigo-900 mb-2" }, "Select a library to begin", -1)),
          _cache[9] || (_cache[9] = createBaseVNode("p", { class: "text-indigo-600/70 max-w-sm mx-auto text-sm" }, "Please choose a library from the dropdown above to access its specific reporting tools and data.", -1))
        ])) : (openBlock(), createElementBlock("div", _hoisted_10, [
          createBaseVNode("div", _hoisted_11, [
            createBaseVNode("h2", _hoisted_12, [
              createVNode(unref(Zap), { class: "w-5 h-5 mr-2 text-amber-500" }),
              createTextVNode(" Quick Generate (" + toDisplayString(selectedLibraryName.value) + ") ", 1)
            ]),
            createBaseVNode("div", _hoisted_13, [
              (openBlock(), createElementBlock(Fragment, null, renderList(quickSummaries, (summary) => {
                return createBaseVNode("div", {
                  key: summary.label,
                  class: "bg-white rounded-2xl p-5 border border-gray-100 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:shadow-md hover:border-indigo-100 transition-all"
                }, [
                  createBaseVNode("div", _hoisted_14, [
                    createBaseVNode("div", {
                      class: normalizeClass(["w-10 h-10 rounded-xl flex items-center justify-center", summary.bgColor])
                    }, [
                      (openBlock(), createBlock(resolveDynamicComponent(summary.icon), {
                        class: normalizeClass(["w-5 h-5", summary.iconColor])
                      }, null, 8, ["class"]))
                    ], 2),
                    createBaseVNode("span", _hoisted_15, toDisplayString(summary.label), 1)
                  ]),
                  createBaseVNode("div", _hoisted_16, [
                    createBaseVNode("button", {
                      onClick: ($event) => exportReport(summary.type, "pdf"),
                      class: "inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-red-600 bg-red-50 hover:bg-red-100 border border-red-100 transition-all"
                    }, [
                      createVNode(unref(FileText), { class: "w-3.5 h-3.5" }),
                      _cache[10] || (_cache[10] = createTextVNode(" Export PDF ", -1))
                    ], 8, _hoisted_17),
                    createBaseVNode("button", {
                      onClick: ($event) => exportReport(summary.type, "excel"),
                      class: "inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-green-600 bg-green-50 hover:bg-green-100 border border-green-100 transition-all"
                    }, [
                      createVNode(unref(Sheet), { class: "w-3.5 h-3.5" }),
                      _cache[11] || (_cache[11] = createTextVNode(" Export Excel ", -1))
                    ], 8, _hoisted_18)
                  ])
                ]);
              }), 64))
            ])
          ]),
          createBaseVNode("div", _hoisted_19, [
            createBaseVNode("h2", _hoisted_20, [
              createVNode(unref(LayoutGrid), { class: "w-5 h-5 mr-2 text-indigo-500" }),
              _cache[12] || (_cache[12] = createTextVNode(" Report Categories ", -1))
            ]),
            createBaseVNode("div", _hoisted_21, [
              (openBlock(), createElementBlock(Fragment, null, renderList(reportCategories, (cat) => {
                return createBaseVNode("div", {
                  key: cat.type,
                  class: "bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-lg hover:border-indigo-100 transition-all group"
                }, [
                  createBaseVNode("div", _hoisted_22, [
                    createBaseVNode("div", {
                      class: normalizeClass(["w-10 h-10 rounded-xl flex items-center justify-center", cat.bgColor])
                    }, [
                      (openBlock(), createBlock(resolveDynamicComponent(cat.icon), {
                        class: normalizeClass(["w-5 h-5", cat.iconColor])
                      }, null, 8, ["class"]))
                    ], 2),
                    createBaseVNode("h3", _hoisted_23, toDisplayString(cat.label), 1)
                  ]),
                  createBaseVNode("ul", _hoisted_24, [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(cat.descriptions, (desc) => {
                      return openBlock(), createElementBlock("li", {
                        key: desc,
                        class: "flex items-start"
                      }, [
                        _cache[13] || (_cache[13] = createBaseVNode("span", { class: "mr-1.5 text-gray-300" }, "•", -1)),
                        createTextVNode(toDisplayString(desc), 1)
                      ]);
                    }), 128))
                  ]),
                  createBaseVNode("div", _hoisted_25, [
                    createBaseVNode("button", {
                      onClick: ($event) => openExportModal(cat.type, cat.label, "pdf"),
                      class: "inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-[11px] font-bold text-red-600 bg-red-50 hover:bg-red-100 border border-red-100 transition-all"
                    }, [
                      createVNode(unref(FileText), { class: "w-3 h-3" }),
                      _cache[14] || (_cache[14] = createTextVNode(" Export PDF ", -1))
                    ], 8, _hoisted_26),
                    createBaseVNode("button", {
                      onClick: ($event) => openExportModal(cat.type, cat.label, "excel"),
                      class: "inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-[11px] font-bold text-green-600 bg-green-50 hover:bg-green-100 border border-green-100 transition-all"
                    }, [
                      createVNode(unref(Sheet), { class: "w-3 h-3" }),
                      _cache[15] || (_cache[15] = createTextVNode(" Excel ", -1))
                    ], 8, _hoisted_27)
                  ])
                ]);
              }), 64))
            ])
          ]),
          createBaseVNode("div", _hoisted_28, [
            createBaseVNode("div", _hoisted_29, [
              createBaseVNode("h3", _hoisted_30, [
                createVNode(unref(History), { class: "w-4 h-4 mr-2" }),
                createTextVNode(" Report History (" + toDisplayString(selectedLibraryName.value) + ") ", 1)
              ])
            ]),
            createBaseVNode("div", _hoisted_31, [
              libraryReportHistory.value.length === 0 ? (openBlock(), createElementBlock("div", _hoisted_32, [
                createVNode(unref(History), { class: "w-10 h-10 text-gray-200 mx-auto mb-3" }),
                _cache[16] || (_cache[16] = createBaseVNode("p", { class: "text-gray-400 text-sm" }, "No reports generated for this library yet.", -1))
              ])) : (openBlock(), createElementBlock("div", _hoisted_33, [
                createBaseVNode("table", _hoisted_34, [
                  _cache[18] || (_cache[18] = createBaseVNode("thead", null, [
                    createBaseVNode("tr", { class: "text-xs text-gray-400 font-bold uppercase tracking-wider border-b border-gray-100" }, [
                      createBaseVNode("th", { class: "text-left py-3 px-3" }, "Report"),
                      createBaseVNode("th", { class: "text-left py-3 px-3" }, "Format"),
                      createBaseVNode("th", { class: "text-left py-3 px-3" }, "Generated"),
                      createBaseVNode("th", { class: "text-right py-3 px-3" }, "Actions")
                    ])
                  ], -1)),
                  createBaseVNode("tbody", null, [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(libraryReportHistory.value, (h, idx) => {
                      return openBlock(), createElementBlock("tr", {
                        key: idx,
                        class: "border-b border-gray-50 hover:bg-gray-50/50 transition-colors"
                      }, [
                        createBaseVNode("td", _hoisted_35, toDisplayString(h.name), 1),
                        createBaseVNode("td", _hoisted_36, [
                          createBaseVNode("span", {
                            class: normalizeClass(["px-2 py-0.5 rounded-md text-[10px] font-bold uppercase", h.format === "pdf" ? "bg-red-50 text-red-600" : "bg-green-50 text-green-600"])
                          }, toDisplayString(h.format), 3)
                        ]),
                        createBaseVNode("td", _hoisted_37, toDisplayString(h.generatedAt), 1),
                        createBaseVNode("td", _hoisted_38, [
                          createBaseVNode("button", {
                            onClick: ($event) => downloadReport(h),
                            class: "inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-[11px] font-bold text-indigo-600 bg-indigo-50 hover:bg-indigo-100 transition-all"
                          }, [
                            createVNode(unref(Download), { class: "w-3 h-3" }),
                            _cache[17] || (_cache[17] = createTextVNode(" Download ", -1))
                          ], 8, _hoisted_39)
                        ])
                      ]);
                    }), 128))
                  ])
                ])
              ]))
            ])
          ])
        ])),
        exportModal.show ? (openBlock(), createElementBlock("div", {
          key: 2,
          class: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm",
          onClick: _cache[3] || (_cache[3] = withModifiers(($event) => exportModal.show = false, ["self"]))
        }, [
          createBaseVNode("div", _hoisted_40, [
            createBaseVNode("div", _hoisted_41, [
              createBaseVNode("div", null, [
                _cache[19] || (_cache[19] = createBaseVNode("h3", { class: "text-xl font-black text-gray-900" }, "Export Report", -1)),
                createBaseVNode("p", _hoisted_42, toDisplayString(exportModal.reportName), 1)
              ]),
              createBaseVNode("button", {
                onClick: _cache[1] || (_cache[1] = ($event) => exportModal.show = false),
                class: "p-2 rounded-xl hover:bg-gray-100 text-gray-400 transition-colors"
              }, [
                createVNode(unref(X), { class: "w-5 h-5" })
              ])
            ]),
            createBaseVNode("div", _hoisted_43, [
              _cache[20] || (_cache[20] = createBaseVNode("label", { class: "text-xs font-bold text-gray-500 uppercase tracking-wider mb-3 block" }, "Time Period", -1)),
              createBaseVNode("div", _hoisted_44, [
                (openBlock(), createElementBlock(Fragment, null, renderList(timespanOptions, (ts) => {
                  return createBaseVNode("button", {
                    key: ts.value,
                    onClick: ($event) => exportModal.timespan = ts.value,
                    class: normalizeClass([
                      "py-3 rounded-xl font-bold text-sm transition-all border-2",
                      exportModal.timespan === ts.value ? "bg-indigo-600 text-white border-indigo-600 shadow-lg shadow-indigo-100 scale-105" : "bg-gray-50 text-gray-600 border-gray-100 hover:border-indigo-200 hover:bg-indigo-50"
                    ])
                  }, toDisplayString(ts.label), 11, _hoisted_45);
                }), 64))
              ])
            ]),
            createBaseVNode("div", {
              class: normalizeClass(["mb-6 p-4 rounded-2xl border", exportModal.format === "pdf" ? "bg-red-50 border-red-100" : "bg-green-50 border-green-100"])
            }, [
              createBaseVNode("div", _hoisted_46, [
                exportModal.format === "pdf" ? (openBlock(), createBlock(unref(FileText), {
                  key: 0,
                  class: "w-4 h-4 text-red-500"
                })) : (openBlock(), createBlock(unref(Sheet), {
                  key: 1,
                  class: "w-4 h-4 text-green-500"
                })),
                createBaseVNode("span", {
                  class: normalizeClass(["text-sm font-bold", exportModal.format === "pdf" ? "text-red-700" : "text-green-700"])
                }, toDisplayString(exportModal.format === "pdf" ? "PDF Document" : "Excel Spreadsheet"), 3)
              ])
            ], 2),
            createBaseVNode("div", _hoisted_47, [
              createBaseVNode("button", {
                onClick: _cache[2] || (_cache[2] = ($event) => exportModal.show = false),
                class: "flex-1 py-3 rounded-2xl font-bold text-gray-600 bg-gray-100 hover:bg-gray-200 transition-all"
              }, "Cancel"),
              createBaseVNode("button", {
                onClick: confirmExport,
                class: "flex-1 py-3 rounded-2xl font-bold text-white bg-indigo-600 hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100"
              }, "Generate")
            ])
          ])
        ])) : createCommentVNode("", true),
        createVNode(Transition, { name: "slide-up" }, {
          default: withCtx(() => [
            exportToast.show ? (openBlock(), createElementBlock("div", _hoisted_48, [
              exportToast.status === "loading" ? (openBlock(), createElementBlock("div", _hoisted_49, [
                createVNode(unref(RefreshCw), { class: "w-5 h-5 text-indigo-600 animate-spin" })
              ])) : (openBlock(), createElementBlock("div", _hoisted_50, [
                createVNode(unref(CircleCheckBig), { class: "w-5 h-5 text-green-600" })
              ])),
              createBaseVNode("div", null, [
                createBaseVNode("p", _hoisted_51, toDisplayString(exportToast.title), 1),
                createBaseVNode("p", _hoisted_52, toDisplayString(exportToast.subtitle), 1)
              ]),
              createBaseVNode("button", {
                onClick: _cache[4] || (_cache[4] = ($event) => exportToast.show = false),
                class: "ml-auto p-1 rounded-lg hover:bg-gray-100 text-gray-400"
              }, [
                createVNode(unref(X), { class: "w-4 h-4" })
              ])
            ])) : createCommentVNode("", true)
          ]),
          _: 1
        })
      ]);
    };
  }
});
const ReportsPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-7437cb80"]]);
export {
  ReportsPage as default
};
