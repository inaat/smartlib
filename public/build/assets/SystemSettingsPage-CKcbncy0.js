import { d as defineComponent, r as ref, o as onMounted, c as createElementBlock, b as createBaseVNode, f as createVNode, n as normalizeClass, u as unref, t as toDisplayString, k as createBlock, F as Fragment, h as renderList, U as adminAPI, l as resolveDynamicComponent, v as withDirectives, x as vModelText, i as openBlock } from "./main-TSJawxZI.js";
import { u as useSwal } from "./useSwal-J4kFABxt.js";
import { R as RefreshCw } from "./refresh-cw-8WNefZ9w.js";
import { S as Save } from "./save-DGJbTHvH.js";
import { c as createLucideIcon } from "./createLucideIcon-Dj92g2Ex.js";
import { M as Mail } from "./mail-CzJ9vzy0.js";
import { B as Bell } from "./bell-Dv0Uqta0.js";
import { S as ShieldCheck } from "./shield-check-Cl_YhMt9.js";
import { C as Calendar } from "./calendar-13efgUbN.js";
import { G as Globe } from "./globe-DowjEK_W.js";
/* empty css               */
const Database = createLucideIcon("database", [
  ["ellipse", { cx: "12", cy: "5", rx: "9", ry: "3", key: "msslwz" }],
  ["path", { d: "M3 5V19A9 3 0 0 0 21 19V5", key: "1wlel7" }],
  ["path", { d: "M3 12A9 3 0 0 0 21 12", key: "mv7ke4" }]
]);
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
const _hoisted_1 = { class: "p-6 space-y-6 bg-gray-50 min-h-screen" };
const _hoisted_2 = { class: "flex flex-col md:flex-row md:items-center justify-between gap-4" };
const _hoisted_3 = { class: "flex items-center space-x-3" };
const _hoisted_4 = ["disabled"];
const _hoisted_5 = { class: "text-sm font-semibold text-gray-700" };
const _hoisted_6 = ["disabled"];
const _hoisted_7 = { class: "text-sm font-semibold" };
const _hoisted_8 = {
  key: 0,
  class: "flex flex-col items-center justify-center py-24"
};
const _hoisted_9 = {
  key: 1,
  class: "grid grid-cols-1 lg:grid-cols-4 gap-8"
};
const _hoisted_10 = { class: "lg:col-span-1 space-y-2" };
const _hoisted_11 = ["onClick"];
const _hoisted_12 = { class: "capitalize" };
const _hoisted_13 = { class: "lg:col-span-3" };
const _hoisted_14 = { class: "bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden" };
const _hoisted_15 = { class: "px-8 py-6 border-b border-gray-50 bg-gray-50/30" };
const _hoisted_16 = { class: "text-xl font-bold text-gray-900 capitalize" };
const _hoisted_17 = { class: "text-gray-500 text-sm mt-1" };
const _hoisted_18 = { class: "p-8 space-y-8" };
const _hoisted_19 = { class: "md:col-span-1" };
const _hoisted_20 = { class: "block text-sm font-bold text-gray-700 uppercase tracking-wider mb-1" };
const _hoisted_21 = { class: "text-xs text-gray-500 leading-relaxed" };
const _hoisted_22 = { class: "md:col-span-2" };
const _hoisted_23 = {
  key: 0,
  class: "flex items-center"
};
const _hoisted_24 = ["onClick"];
const _hoisted_25 = { class: "ml-3 text-sm font-medium text-gray-900" };
const _hoisted_26 = {
  key: 1,
  class: "flex items-center space-x-3"
};
const _hoisted_27 = ["onUpdate:modelValue"];
const _hoisted_28 = ["onUpdate:modelValue"];
const _hoisted_29 = ["onUpdate:modelValue"];
const _hoisted_30 = ["onUpdate:modelValue"];
const _hoisted_31 = ["onUpdate:modelValue"];
const _hoisted_32 = { class: "px-8 py-6 bg-gray-50/50 border-t border-gray-100 flex justify-end" };
const _hoisted_33 = ["disabled"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "SystemSettingsPage",
  setup(__props) {
    const loading = ref(true);
    const saving = ref(false);
    const activeGroup = ref("general");
    const settingsGroups = ref({});
    const fetchSettings = async () => {
      loading.value = true;
      try {
        const data = await adminAPI.getSettings();
        settingsGroups.value = data;
        if (!settingsGroups.value[activeGroup.value]) {
          activeGroup.value = Object.keys(settingsGroups.value)[0] || "general";
        }
      } catch (error) {
        console.error("Error fetching settings:", error);
      } finally {
        loading.value = false;
      }
    };
    const { showSuccess, showError } = useSwal();
    const saveAllSettings = async () => {
      saving.value = true;
      try {
        const allSettings = Object.values(settingsGroups.value).flat();
        await adminAPI.updateSettings(allSettings);
        showSuccess("Saved!", "System settings updated successfully!");
      } catch (error) {
        console.error("Error saving settings:", error);
        showError("Save Failed", "Failed to save settings. Please try again.");
      } finally {
        saving.value = false;
      }
    };
    const toggleBoolean = (setting) => {
      const current = setting.value === "true" || setting.value === true;
      setting.value = !current;
    };
    const getGroupIcon = (group) => {
      switch (group.toLowerCase()) {
        case "general":
          return Globe;
        case "appearance":
          return Palette;
        case "booking":
          return Calendar;
        case "security":
          return ShieldCheck;
        case "notifications":
          return Bell;
        case "email":
          return Mail;
        default:
          return Database;
      }
    };
    onMounted(() => {
      fetchSettings();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          _cache[0] || (_cache[0] = createBaseVNode("div", null, [
            createBaseVNode("h1", { class: "text-3xl font-bold text-gray-900 tracking-tight" }, "System Settings"),
            createBaseVNode("p", { class: "text-gray-500 mt-1" }, "Configure global application parameters and appearance")
          ], -1)),
          createBaseVNode("div", _hoisted_3, [
            createBaseVNode("button", {
              onClick: fetchSettings,
              disabled: loading.value,
              class: "px-4 py-2 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition-all flex items-center space-x-2 shadow-sm disabled:opacity-50"
            }, [
              createVNode(unref(RefreshCw), {
                class: normalizeClass(["w-4 h-4 text-gray-500", loading.value ? "animate-spin" : ""])
              }, null, 8, ["class"]),
              createBaseVNode("span", _hoisted_5, toDisplayString(loading.value ? "Refreshing..." : "Refresh"), 1)
            ], 8, _hoisted_4),
            createBaseVNode("button", {
              onClick: saveAllSettings,
              disabled: saving.value || loading.value,
              class: "px-6 py-2 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-all flex items-center space-x-2 shadow-md hover:shadow-lg disabled:opacity-50"
            }, [
              !saving.value ? (openBlock(), createBlock(unref(Save), {
                key: 0,
                class: "w-4 h-4"
              })) : (openBlock(), createBlock(unref(RefreshCw), {
                key: 1,
                class: "w-4 h-4 animate-spin"
              })),
              createBaseVNode("span", _hoisted_7, toDisplayString(saving.value ? "Saving Changes..." : "Save All Changes"), 1)
            ], 8, _hoisted_6)
          ])
        ]),
        loading.value ? (openBlock(), createElementBlock("div", _hoisted_8, [..._cache[1] || (_cache[1] = [
          createBaseVNode("div", { class: "animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mb-4" }, null, -1),
          createBaseVNode("p", { class: "text-gray-500 font-medium" }, "Loading system settings...", -1)
        ])])) : (openBlock(), createElementBlock("div", _hoisted_9, [
          createBaseVNode("div", _hoisted_10, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(settingsGroups.value, (_, key) => {
              return openBlock(), createElementBlock("button", {
                key,
                onClick: ($event) => activeGroup.value = key,
                class: normalizeClass([
                  "w-full text-left px-4 py-3 rounded-xl transition-all flex items-center space-x-3 font-medium",
                  activeGroup.value === key ? "bg-indigo-600 text-white shadow-md" : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-100"
                ])
              }, [
                (openBlock(), createBlock(resolveDynamicComponent(getGroupIcon(key)), { class: "w-5 h-5" })),
                createBaseVNode("span", _hoisted_12, toDisplayString(key) + " Settings", 1)
              ], 10, _hoisted_11);
            }), 128))
          ]),
          createBaseVNode("div", _hoisted_13, [
            createBaseVNode("div", _hoisted_14, [
              createBaseVNode("div", _hoisted_15, [
                createBaseVNode("h3", _hoisted_16, toDisplayString(activeGroup.value) + " Configuration", 1),
                createBaseVNode("p", _hoisted_17, "Manage " + toDisplayString(activeGroup.value) + " related system parameters", 1)
              ]),
              createBaseVNode("div", _hoisted_18, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(settingsGroups.value[activeGroup.value], (setting) => {
                  return openBlock(), createElementBlock("div", {
                    key: setting.key,
                    class: "grid grid-cols-1 md:grid-cols-3 gap-6 items-start"
                  }, [
                    createBaseVNode("div", _hoisted_19, [
                      createBaseVNode("label", _hoisted_20, toDisplayString(setting.label), 1),
                      createBaseVNode("p", _hoisted_21, toDisplayString(setting.description), 1)
                    ]),
                    createBaseVNode("div", _hoisted_22, [
                      setting.type === "boolean" ? (openBlock(), createElementBlock("div", _hoisted_23, [
                        createBaseVNode("button", {
                          onClick: ($event) => toggleBoolean(setting),
                          class: normalizeClass([
                            "relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2",
                            setting.value === "true" || setting.value === true ? "bg-indigo-600" : "bg-gray-200"
                          ])
                        }, [
                          createBaseVNode("span", {
                            "aria-hidden": "true",
                            class: normalizeClass([
                              "pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out",
                              setting.value === "true" || setting.value === true ? "translate-x-5" : "translate-x-0"
                            ])
                          }, null, 2)
                        ], 10, _hoisted_24),
                        createBaseVNode("span", _hoisted_25, toDisplayString(setting.value === "true" || setting.value === true ? "Enabled" : "Disabled"), 1)
                      ])) : setting.type === "color" ? (openBlock(), createElementBlock("div", _hoisted_26, [
                        withDirectives(createBaseVNode("input", {
                          "onUpdate:modelValue": ($event) => setting.value = $event,
                          type: "color",
                          class: "h-10 w-20 p-1 bg-gray-50 border border-gray-200 rounded-xl cursor-pointer"
                        }, null, 8, _hoisted_27), [
                          [vModelText, setting.value]
                        ]),
                        withDirectives(createBaseVNode("input", {
                          "onUpdate:modelValue": ($event) => setting.value = $event,
                          type: "text",
                          class: "flex-1 px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all outline-none text-sm font-mono"
                        }, null, 8, _hoisted_28), [
                          [vModelText, setting.value]
                        ])
                      ])) : setting.type === "number" ? withDirectives((openBlock(), createElementBlock("input", {
                        key: 2,
                        "onUpdate:modelValue": ($event) => setting.value = $event,
                        type: "number",
                        class: "w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all outline-none"
                      }, null, 8, _hoisted_29)), [
                        [vModelText, setting.value]
                      ]) : setting.type === "textarea" ? withDirectives((openBlock(), createElementBlock("textarea", {
                        key: 3,
                        "onUpdate:modelValue": ($event) => setting.value = $event,
                        rows: "4",
                        class: "w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all outline-none"
                      }, null, 8, _hoisted_30)), [
                        [vModelText, setting.value]
                      ]) : withDirectives((openBlock(), createElementBlock("input", {
                        key: 4,
                        "onUpdate:modelValue": ($event) => setting.value = $event,
                        type: "text",
                        class: "w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all outline-none"
                      }, null, 8, _hoisted_31)), [
                        [vModelText, setting.value]
                      ])
                    ])
                  ]);
                }), 128))
              ]),
              createBaseVNode("div", _hoisted_32, [
                createBaseVNode("button", {
                  onClick: saveAllSettings,
                  disabled: saving.value,
                  class: "px-8 py-3 bg-indigo-600 text-white rounded-2xl hover:bg-indigo-700 font-bold shadow-lg shadow-indigo-200 transition-all disabled:opacity-50 flex items-center space-x-2"
                }, [
                  !saving.value ? (openBlock(), createBlock(unref(Save), {
                    key: 0,
                    class: "w-5 h-5"
                  })) : (openBlock(), createBlock(unref(RefreshCw), {
                    key: 1,
                    class: "w-5 h-5 animate-spin"
                  })),
                  createBaseVNode("span", null, toDisplayString(saving.value ? "Saving Changes..." : "Save Changes"), 1)
                ], 8, _hoisted_33)
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
