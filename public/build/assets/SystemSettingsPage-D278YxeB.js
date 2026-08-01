import { d as defineComponent, r as ref, c as computed, o as onMounted, a as createElementBlock, b as createBaseVNode, f as createVNode, i as createTextVNode, u as unref, n as normalizeClass, t as toDisplayString, h as createBlock, F as Fragment, k as renderList, m as resolveDynamicComponent, X as adminAPI, p as withDirectives, v as vModelText, l as openBlock } from "./main-D4odWxzi.js";
import { u as useSwal } from "./useSwal-pQW_XkRe.js";
import { c as createLucideIcon } from "./createLucideIcon-BgnXjtcZ.js";
import { R as RefreshCw } from "./refresh-cw-BuoaK0_N.js";
import { S as Save } from "./save-Bd7p6WNa.js";
import { S as ShieldCheck } from "./shield-check-CtdsXE1s.js";
import { B as Bell } from "./bell-Dy-vHSSt.js";
import { B as BookOpen } from "./book-open-DZPHUjTi.js";
import { C as Calendar } from "./calendar-lJfe3rfu.js";
import { G as Globe } from "./globe-DaP19ntl.js";
/* empty css               */
const Palette = createLucideIcon("palette", [
  [
    "path",
    {
      d: "M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",
      key: "e79jfc"
    }
  ],
  ["circle", { cx: "13.5", cy: "6.5", r: ".5", fill: "currentColor", key: "1okk4w" }],
  ["circle", { cx: "17.5", cy: "10.5", r: ".5", fill: "currentColor", key: "f64h9f" }],
  ["circle", { cx: "6.5", cy: "12.5", r: ".5", fill: "currentColor", key: "qy21gx" }],
  ["circle", { cx: "8.5", cy: "7.5", r: ".5", fill: "currentColor", key: "fotxhn" }]
]);
const RotateCcw = createLucideIcon("rotate-ccw", [
  ["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" }],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }]
]);
const SlidersVertical = createLucideIcon("sliders-vertical", [
  ["path", { d: "M10 8h4", key: "1sr2af" }],
  ["path", { d: "M12 21v-9", key: "17s77i" }],
  ["path", { d: "M12 8V3", key: "13r4qs" }],
  ["path", { d: "M17 16h4", key: "h1uq16" }],
  ["path", { d: "M19 12V3", key: "o1uvq1" }],
  ["path", { d: "M19 21v-5", key: "qua636" }],
  ["path", { d: "M3 14h4", key: "bcjad9" }],
  ["path", { d: "M5 10V3", key: "cb8scm" }],
  ["path", { d: "M5 21v-7", key: "1w1uti" }]
]);
const _hoisted_1 = { class: "space-y-6" };
const _hoisted_2 = { class: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-white p-5 rounded-2xl border border-slate-100 shadow-sm" };
const _hoisted_3 = { class: "text-left" };
const _hoisted_4 = { class: "text-base font-bold text-slate-800 tracking-tight flex items-center gap-2" };
const _hoisted_5 = { class: "flex items-center space-x-3" };
const _hoisted_6 = ["disabled"];
const _hoisted_7 = ["disabled"];
const _hoisted_8 = ["disabled"];
const _hoisted_9 = {
  key: 0,
  class: "flex flex-col items-center justify-center py-24 bg-white rounded-3xl border border-slate-100 shadow-sm"
};
const _hoisted_10 = {
  key: 1,
  class: "grid grid-cols-1 lg:grid-cols-4 gap-6"
};
const _hoisted_11 = { class: "lg:col-span-1 space-y-2" };
const _hoisted_12 = ["onClick"];
const _hoisted_13 = { class: "flex items-center space-x-3" };
const _hoisted_14 = { class: "capitalize" };
const _hoisted_15 = { class: "lg:col-span-3" };
const _hoisted_16 = { class: "bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden flex flex-col justify-between" };
const _hoisted_17 = { class: "px-8 py-5 border-b border-slate-100 bg-slate-50/50 flex items-center justify-between text-left" };
const _hoisted_18 = { class: "flex items-center space-x-3" };
const _hoisted_19 = { class: "p-2.5 bg-purple-50 border border-purple-100 rounded-xl text-purple-600" };
const _hoisted_20 = { class: "text-sm font-bold text-slate-800 uppercase tracking-wider" };
const _hoisted_21 = { class: "text-xs text-slate-500 mt-0.5 font-normal" };
const _hoisted_22 = { class: "text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 bg-purple-50 border border-purple-100 text-purple-700 rounded-full" };
const _hoisted_23 = { class: "p-8 space-y-6 divide-y divide-slate-100" };
const _hoisted_24 = { class: "md:col-span-1 pr-2" };
const _hoisted_25 = { class: "block text-xs font-bold text-slate-700 mb-1" };
const _hoisted_26 = { class: "text-[11px] text-slate-500 leading-relaxed font-normal" };
const _hoisted_27 = { class: "inline-block mt-2 text-[9px] font-bold text-slate-400 uppercase tracking-widest bg-slate-100 px-2 py-0.5 rounded" };
const _hoisted_28 = { class: "md:col-span-2" };
const _hoisted_29 = {
  key: 0,
  class: "flex items-center space-x-3"
};
const _hoisted_30 = ["onClick"];
const _hoisted_31 = {
  key: 1,
  class: "relative max-w-xs"
};
const _hoisted_32 = ["onUpdate:modelValue"];
const _hoisted_33 = ["onUpdate:modelValue"];
const _hoisted_34 = {
  key: 3,
  class: "flex items-center space-x-3 max-w-xs"
};
const _hoisted_35 = ["onUpdate:modelValue"];
const _hoisted_36 = ["onUpdate:modelValue"];
const _hoisted_37 = ["onUpdate:modelValue"];
const _hoisted_38 = { class: "px-8 py-4 bg-slate-50/50 border-t border-slate-100 flex items-center justify-between" };
const _hoisted_39 = ["disabled"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "SystemSettingsPage",
  setup(__props) {
    const { showSuccess, showError, confirmAction } = useSwal();
    const loading = ref(true);
    const saving = ref(false);
    const resetting = ref(false);
    const activeGroup = ref("general");
    const settingsGroups = ref({});
    const groupKeys = computed(() => Object.keys(settingsGroups.value));
    const fetchSettings = async () => {
      loading.value = true;
      try {
        const data = await adminAPI.getSettings();
        settingsGroups.value = data;
        if (groupKeys.value.length > 0 && !groupKeys.value.includes(activeGroup.value)) {
          activeGroup.value = groupKeys.value[0];
        }
      } catch (error) {
        console.error("Error fetching settings:", error);
        showError("Error", "Failed to load system settings");
      } finally {
        loading.value = false;
      }
    };
    const saveAllSettings = async () => {
      saving.value = true;
      try {
        const allSettings = Object.values(settingsGroups.value).flat();
        await adminAPI.updateSettings(allSettings);
        showSuccess("Settings Saved!", "All system settings have been updated successfully.");
      } catch (error) {
        console.error("Error saving settings:", error);
        showError("Save Failed", "Failed to update system settings. Please try again.");
      } finally {
        saving.value = false;
      }
    };
    const resetToDefaults = async () => {
      const confirmed = await confirmAction(
        "Reset All System Settings?",
        "This will restore all system settings, rules, limits, and configurations back to default values. Are you sure?",
        "Yes, Reset to Defaults",
        "warning"
      );
      if (!confirmed) return;
      resetting.value = true;
      try {
        const res = await adminAPI.resetSettings();
        settingsGroups.value = res.settings;
        if (groupKeys.value.length > 0 && !groupKeys.value.includes(activeGroup.value)) {
          activeGroup.value = groupKeys.value[0];
        }
        showSuccess("Reset Completed!", "System settings have been reset to default values.");
      } catch (error) {
        console.error("Error resetting settings:", error);
        showError("Reset Failed", "Could not reset system settings to defaults.");
      } finally {
        resetting.value = false;
      }
    };
    const isTrue = (val) => {
      return val === "true" || val === true || val === 1 || val === "1";
    };
    const toggleBoolean = (setting) => {
      setting.value = isTrue(setting.value) ? "false" : "true";
    };
    const formatGroupName = (group) => {
      switch (group.toLowerCase()) {
        case "general":
          return "General System";
        case "booking":
          return "Seat Booking";
        case "inventory":
          return "Library & Books";
        case "notifications":
          return "Notifications";
        case "security":
          return "Security & Access";
        case "appearance":
          return "Appearance";
        default:
          return group;
      }
    };
    const getGroupIcon = (group) => {
      switch (group.toLowerCase()) {
        case "general":
          return Globe;
        case "booking":
          return Calendar;
        case "inventory":
          return BookOpen;
        case "notifications":
          return Bell;
        case "security":
          return ShieldCheck;
        case "appearance":
          return Palette;
        default:
          return SlidersVertical;
      }
    };
    onMounted(fetchSettings);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("div", _hoisted_3, [
            createBaseVNode("h2", _hoisted_4, [
              createVNode(unref(SlidersVertical), { class: "w-5 h-5 text-purple-600" }),
              _cache[0] || (_cache[0] = createTextVNode(" System Settings & Governance ", -1))
            ]),
            _cache[1] || (_cache[1] = createBaseVNode("p", { class: "text-xs text-slate-500 font-normal mt-0.5" }, "Configure global rules, booking limits, inventory parameters, and security policies.", -1))
          ]),
          createBaseVNode("div", _hoisted_5, [
            createBaseVNode("button", {
              onClick: fetchSettings,
              disabled: loading.value,
              class: "px-3.5 py-2 bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 rounded-xl transition-all flex items-center space-x-2 text-xs font-bold shadow-sm disabled:opacity-50 cursor-pointer",
              title: "Reload Settings"
            }, [
              createVNode(unref(RefreshCw), {
                class: normalizeClass(["w-4 h-4 text-slate-500", loading.value ? "animate-spin" : ""])
              }, null, 8, ["class"]),
              createBaseVNode("span", null, toDisplayString(loading.value ? "Loading..." : "Refresh"), 1)
            ], 8, _hoisted_6),
            createBaseVNode("button", {
              onClick: resetToDefaults,
              disabled: resetting.value || loading.value,
              class: "px-3.5 py-2 bg-rose-50 border border-rose-200/60 text-rose-700 hover:bg-rose-100 rounded-xl transition-all flex items-center space-x-2 text-xs font-bold shadow-sm disabled:opacity-50 cursor-pointer",
              title: "Reset all system settings back to default values"
            }, [
              createVNode(unref(RotateCcw), {
                class: normalizeClass(["w-4 h-4 text-rose-600", resetting.value ? "animate-spin" : ""])
              }, null, 8, ["class"]),
              createBaseVNode("span", null, toDisplayString(resetting.value ? "Resetting..." : "Reset Defaults"), 1)
            ], 8, _hoisted_7),
            createBaseVNode("button", {
              onClick: saveAllSettings,
              disabled: saving.value || loading.value,
              class: "px-5 py-2 bg-purple-600 text-white hover:bg-purple-700 rounded-xl transition-all flex items-center space-x-2 text-xs font-bold shadow-md hover:shadow-lg disabled:opacity-50 cursor-pointer"
            }, [
              !saving.value ? (openBlock(), createBlock(unref(Save), {
                key: 0,
                class: "w-4 h-4"
              })) : (openBlock(), createBlock(unref(RefreshCw), {
                key: 1,
                class: "w-4 h-4 animate-spin"
              })),
              createBaseVNode("span", null, toDisplayString(saving.value ? "Saving..." : "Save All Changes"), 1)
            ], 8, _hoisted_8)
          ])
        ]),
        loading.value ? (openBlock(), createElementBlock("div", _hoisted_9, [..._cache[2] || (_cache[2] = [
          createBaseVNode("div", { class: "w-12 h-12 rounded-full border-4 border-purple-200 border-t-purple-600 animate-spin mb-4" }, null, -1),
          createBaseVNode("p", { class: "text-xs font-bold text-slate-500 uppercase tracking-widest" }, "Loading System Settings...", -1)
        ])])) : (openBlock(), createElementBlock("div", _hoisted_10, [
          createBaseVNode("div", _hoisted_11, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(groupKeys.value, (groupKey) => {
              return openBlock(), createElementBlock("button", {
                key: groupKey,
                onClick: ($event) => activeGroup.value = groupKey,
                class: normalizeClass([
                  "w-full text-left px-4 py-3.5 rounded-2xl transition-all flex items-center justify-between font-bold text-xs cursor-pointer border",
                  activeGroup.value === groupKey ? "bg-purple-600 text-white border-purple-600 shadow-md shadow-purple-600/10" : "bg-white text-slate-600 hover:bg-slate-50 border-slate-100 hover:border-slate-200"
                ])
              }, [
                createBaseVNode("div", _hoisted_13, [
                  (openBlock(), createBlock(resolveDynamicComponent(getGroupIcon(groupKey)), {
                    class: normalizeClass(["w-4 h-4", activeGroup.value === groupKey ? "text-white" : "text-purple-600"])
                  }, null, 8, ["class"])),
                  createBaseVNode("span", _hoisted_14, toDisplayString(formatGroupName(groupKey)), 1)
                ]),
                createBaseVNode("span", {
                  class: normalizeClass([
                    "text-[10px] px-2 py-0.5 rounded-full font-bold",
                    activeGroup.value === groupKey ? "bg-white/20 text-white" : "bg-slate-100 text-slate-500"
                  ])
                }, toDisplayString(settingsGroups.value[groupKey]?.length || 0), 3)
              ], 10, _hoisted_12);
            }), 128))
          ]),
          createBaseVNode("div", _hoisted_15, [
            createBaseVNode("div", _hoisted_16, [
              createBaseVNode("div", _hoisted_17, [
                createBaseVNode("div", _hoisted_18, [
                  createBaseVNode("div", _hoisted_19, [
                    (openBlock(), createBlock(resolveDynamicComponent(getGroupIcon(activeGroup.value)), { class: "w-5 h-5" }))
                  ]),
                  createBaseVNode("div", null, [
                    createBaseVNode("h3", _hoisted_20, toDisplayString(formatGroupName(activeGroup.value)) + " Settings", 1),
                    createBaseVNode("p", _hoisted_21, "Configure and manage parameters for " + toDisplayString(formatGroupName(activeGroup.value).toLowerCase()) + ".", 1)
                  ])
                ]),
                createBaseVNode("span", _hoisted_22, toDisplayString(settingsGroups.value[activeGroup.value]?.length || 0) + " Options ", 1)
              ]),
              createBaseVNode("div", _hoisted_23, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(settingsGroups.value[activeGroup.value], (setting, index) => {
                  return openBlock(), createElementBlock("div", {
                    key: setting.key,
                    class: normalizeClass(["grid grid-cols-1 md:grid-cols-3 gap-6 items-start text-left", index > 0 ? "pt-6" : ""])
                  }, [
                    createBaseVNode("div", _hoisted_24, [
                      createBaseVNode("label", _hoisted_25, toDisplayString(setting.label), 1),
                      createBaseVNode("p", _hoisted_26, toDisplayString(setting.description), 1),
                      createBaseVNode("span", _hoisted_27, " Key: " + toDisplayString(setting.key), 1)
                    ]),
                    createBaseVNode("div", _hoisted_28, [
                      setting.type === "boolean" ? (openBlock(), createElementBlock("div", _hoisted_29, [
                        createBaseVNode("button", {
                          type: "button",
                          onClick: ($event) => toggleBoolean(setting),
                          class: normalizeClass([
                            "relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2",
                            isTrue(setting.value) ? "bg-purple-600" : "bg-slate-200"
                          ])
                        }, [
                          createBaseVNode("span", {
                            "aria-hidden": "true",
                            class: normalizeClass([
                              "pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out",
                              isTrue(setting.value) ? "translate-x-5" : "translate-x-0"
                            ])
                          }, null, 2)
                        ], 10, _hoisted_30),
                        createBaseVNode("span", {
                          class: normalizeClass(["text-xs font-bold", isTrue(setting.value) ? "text-purple-700" : "text-slate-500"])
                        }, toDisplayString(isTrue(setting.value) ? "Enabled" : "Disabled"), 3)
                      ])) : setting.type === "number" ? (openBlock(), createElementBlock("div", _hoisted_31, [
                        withDirectives(createBaseVNode("input", {
                          "onUpdate:modelValue": ($event) => setting.value = $event,
                          type: "number",
                          class: "w-full px-4 py-2.5 bg-slate-50/50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 focus:bg-white transition-all outline-none text-xs font-bold text-slate-700"
                        }, null, 8, _hoisted_32), [
                          [vModelText, setting.value]
                        ])
                      ])) : setting.type === "textarea" ? withDirectives((openBlock(), createElementBlock("textarea", {
                        key: 2,
                        "onUpdate:modelValue": ($event) => setting.value = $event,
                        rows: "3",
                        class: "w-full px-4 py-2.5 bg-slate-50/50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 focus:bg-white transition-all outline-none text-xs font-semibold text-slate-700 resize-none"
                      }, null, 8, _hoisted_33)), [
                        [vModelText, setting.value]
                      ]) : setting.type === "color" ? (openBlock(), createElementBlock("div", _hoisted_34, [
                        withDirectives(createBaseVNode("input", {
                          "onUpdate:modelValue": ($event) => setting.value = $event,
                          type: "color",
                          class: "h-9 w-14 p-1 bg-white border border-slate-200 rounded-xl cursor-pointer"
                        }, null, 8, _hoisted_35), [
                          [vModelText, setting.value]
                        ]),
                        withDirectives(createBaseVNode("input", {
                          "onUpdate:modelValue": ($event) => setting.value = $event,
                          type: "text",
                          class: "flex-1 px-3.5 py-2 bg-slate-50/50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 focus:bg-white transition-all outline-none text-xs font-mono font-bold text-slate-700"
                        }, null, 8, _hoisted_36), [
                          [vModelText, setting.value]
                        ])
                      ])) : withDirectives((openBlock(), createElementBlock("input", {
                        key: 4,
                        "onUpdate:modelValue": ($event) => setting.value = $event,
                        type: "text",
                        class: "w-full px-4 py-2.5 bg-slate-50/50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 focus:bg-white transition-all outline-none text-xs font-semibold text-slate-700"
                      }, null, 8, _hoisted_37)), [
                        [vModelText, setting.value]
                      ])
                    ])
                  ], 2);
                }), 128))
              ]),
              createBaseVNode("div", _hoisted_38, [
                _cache[3] || (_cache[3] = createBaseVNode("span", { class: "text-[10px] font-bold text-slate-400 uppercase tracking-widest" }, " Unsaved changes persist locally until saved ", -1)),
                createBaseVNode("button", {
                  onClick: saveAllSettings,
                  disabled: saving.value,
                  class: "px-6 py-2.5 bg-purple-600 hover:bg-purple-700 text-white rounded-xl font-bold text-xs shadow-md hover:shadow-lg transition-all disabled:opacity-50 flex items-center space-x-2 cursor-pointer"
                }, [
                  !saving.value ? (openBlock(), createBlock(unref(Save), {
                    key: 0,
                    class: "w-4 h-4"
                  })) : (openBlock(), createBlock(unref(RefreshCw), {
                    key: 1,
                    class: "w-4 h-4 animate-spin"
                  })),
                  createBaseVNode("span", null, toDisplayString(saving.value ? "Saving..." : "Save Settings"), 1)
                ], 8, _hoisted_39)
              ])
            ])
          ])
        ]))
      ]);
    };
  }
});
export {
  _sfc_main as default
};
