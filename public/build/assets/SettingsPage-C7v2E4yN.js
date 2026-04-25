import { d as defineComponent, r as ref, o as onMounted, c as createElementBlock, b as createBaseVNode, f as createVNode, j as createTextVNode, u as unref, s as withModifiers, v as withDirectives, x as vModelText, k as createBlock, m as createCommentVNode, t as toDisplayString, a1 as ownerAPI, i as openBlock } from "./main-DCJXrkf-.js";
import { u as useSwal } from "./useSwal-BUxo5JBv.js";
import { S as Settings } from "./settings-DZyFQQ9L.js";
import { P as PanelsTopLeft } from "./panels-top-left-DmkC30__.js";
import { c as createLucideIcon } from "./createLucideIcon-CDsoUk2K.js";
import { S as Save } from "./save-DwG4SO42.js";
import { R as RefreshCw } from "./refresh-cw-DCq6mbXe.js";
/* empty css               */
const Image = createLucideIcon("image", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
  ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
  ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }]
]);
const Upload = createLucideIcon("upload", [
  ["path", { d: "M12 3v12", key: "1x0j5s" }],
  ["path", { d: "m17 8-5-5-5 5", key: "7q97r8" }],
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }]
]);
const _hoisted_1 = { class: "p-6 max-w-4xl mx-auto" };
const _hoisted_2 = { class: "mb-8" };
const _hoisted_3 = { class: "text-3xl font-bold text-gray-900 flex items-center" };
const _hoisted_4 = { class: "grid grid-cols-1 gap-8" };
const _hoisted_5 = { class: "bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden" };
const _hoisted_6 = { class: "px-8 py-6 border-b border-gray-50 bg-gray-50/50" };
const _hoisted_7 = { class: "text-lg font-bold text-gray-900 flex items-center" };
const _hoisted_8 = { class: "space-y-2" };
const _hoisted_9 = { class: "space-y-4" };
const _hoisted_10 = { class: "flex items-start space-x-6" };
const _hoisted_11 = { class: "relative group" };
const _hoisted_12 = { class: "w-32 h-32 bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200 flex items-center justify-center overflow-hidden transition-all group-hover:border-indigo-300" };
const _hoisted_13 = ["src"];
const _hoisted_14 = { class: "flex-1 space-y-4" };
const _hoisted_15 = { class: "flex items-center space-x-3" };
const _hoisted_16 = { class: "cursor-pointer px-5 py-2.5 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 font-bold transition-all shadow-sm flex items-center" };
const _hoisted_17 = { class: "pt-6 border-t border-gray-50 flex justify-end" };
const _hoisted_18 = ["disabled"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "SettingsPage",
  setup(__props) {
    const saving = ref(false);
    const previewLogo = ref(null);
    const logoFile = ref(null);
    const { showSuccess, showError } = useSwal();
    const form = ref({
      app_name: "",
      current_logo: null
    });
    const fetchSettings = async () => {
      try {
        const data = await ownerAPI.getSettings();
        form.value.app_name = data.app_name;
        form.value.current_logo = data.app_logo;
      } catch (error) {
        console.error("Error fetching settings:", error);
      }
    };
    onMounted(fetchSettings);
    const onFileChange = (e) => {
      const file = e.target.files?.[0];
      if (file) {
        logoFile.value = file;
        previewLogo.value = URL.createObjectURL(file);
      }
    };
    const clearFile = () => {
      logoFile.value = null;
      previewLogo.value = null;
    };
    const saveSettings = async () => {
      saving.value = true;
      try {
        const formData = new FormData();
        formData.append("app_name", form.value.app_name);
        if (logoFile.value) {
          formData.append("app_logo", logoFile.value);
        }
        await ownerAPI.updateSettings(formData);
        clearFile();
        await fetchSettings();
        showSuccess("Settings updated successfully!");
      } catch (error) {
        console.error("Error updating settings:", error);
        const message = error.response?.data?.message || "Failed to update settings.";
        const errors = error.response?.data?.errors;
        const errorText = errors ? Object.values(errors).flat().join("\n") : "";
        showError(message, errorText);
      } finally {
        saving.value = false;
      }
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("h1", _hoisted_3, [
            createVNode(unref(Settings), { class: "w-8 h-8 mr-3 text-indigo-600" }),
            _cache[1] || (_cache[1] = createTextVNode(" System Settings ", -1))
          ]),
          _cache[2] || (_cache[2] = createBaseVNode("p", { class: "text-gray-500 mt-2" }, "Update global application name and branding logo.", -1))
        ]),
        createBaseVNode("div", _hoisted_4, [
          createBaseVNode("div", _hoisted_5, [
            createBaseVNode("div", _hoisted_6, [
              createBaseVNode("h2", _hoisted_7, [
                createVNode(unref(PanelsTopLeft), { class: "w-5 h-5 mr-2 text-indigo-500" }),
                _cache[3] || (_cache[3] = createTextVNode(" General Branding ", -1))
              ])
            ]),
            createBaseVNode("form", {
              onSubmit: withModifiers(saveSettings, ["prevent"]),
              class: "p-8 space-y-8"
            }, [
              createBaseVNode("div", _hoisted_8, [
                _cache[4] || (_cache[4] = createBaseVNode("label", { class: "text-sm font-bold text-gray-700 uppercase tracking-wider" }, "Application Name", -1)),
                withDirectives(createBaseVNode("input", {
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => form.value.app_name = $event),
                  type: "text",
                  placeholder: "e.g. SmartLib",
                  class: "w-full px-5 py-3 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all outline-none text-lg"
                }, null, 512), [
                  [vModelText, form.value.app_name]
                ]),
                _cache[5] || (_cache[5] = createBaseVNode("p", { class: "text-xs text-gray-400" }, "This name will be used across the entire application and email communications.", -1))
              ]),
              createBaseVNode("div", _hoisted_9, [
                _cache[8] || (_cache[8] = createBaseVNode("label", { class: "text-sm font-bold text-gray-700 uppercase tracking-wider" }, "Application Logo", -1)),
                createBaseVNode("div", _hoisted_10, [
                  createBaseVNode("div", _hoisted_11, [
                    createBaseVNode("div", _hoisted_12, [
                      previewLogo.value || form.value.current_logo ? (openBlock(), createElementBlock("img", {
                        key: 0,
                        src: previewLogo.value || form.value.current_logo,
                        class: "w-full h-full object-contain p-2"
                      }, null, 8, _hoisted_13)) : (openBlock(), createBlock(unref(Image), {
                        key: 1,
                        class: "w-10 h-10 text-gray-300"
                      }))
                    ])
                  ]),
                  createBaseVNode("div", _hoisted_14, [
                    createBaseVNode("div", _hoisted_15, [
                      createBaseVNode("label", _hoisted_16, [
                        createVNode(unref(Upload), { class: "w-4 h-4 mr-2" }),
                        _cache[6] || (_cache[6] = createTextVNode(" Upload New Logo ", -1)),
                        createBaseVNode("input", {
                          type: "file",
                          onChange: onFileChange,
                          class: "hidden",
                          accept: "image/*"
                        }, null, 32)
                      ]),
                      previewLogo.value ? (openBlock(), createElementBlock("button", {
                        key: 0,
                        onClick: clearFile,
                        type: "button",
                        class: "px-4 py-2.5 text-red-600 hover:bg-red-50 rounded-xl transition-colors font-medium"
                      }, " Cancel ")) : createCommentVNode("", true)
                    ]),
                    _cache[7] || (_cache[7] = createBaseVNode("p", { class: "text-xs text-gray-500 leading-relaxed" }, [
                      createTextVNode(" Recommended: Transparent PNG or SVG. Max size 2MB."),
                      createBaseVNode("br"),
                      createTextVNode(" Ideal aspect ratio is square or rectangle (horizontal). ")
                    ], -1))
                  ])
                ])
              ]),
              createBaseVNode("div", _hoisted_17, [
                createBaseVNode("button", {
                  type: "submit",
                  disabled: saving.value,
                  class: "px-8 py-3.5 bg-indigo-600 text-white rounded-2xl hover:bg-indigo-700 font-bold shadow-lg shadow-indigo-100 transition-all disabled:opacity-50 flex items-center space-x-3"
                }, [
                  !saving.value ? (openBlock(), createBlock(unref(Save), {
                    key: 0,
                    class: "w-5 h-5"
                  })) : (openBlock(), createBlock(unref(RefreshCw), {
                    key: 1,
                    class: "w-5 h-5 animate-spin"
                  })),
                  createBaseVNode("span", null, toDisplayString(saving.value ? "Saving Changes..." : "Save All Changes"), 1)
                ], 8, _hoisted_18)
              ])
            ], 32)
          ])
        ])
      ]);
    };
  }
});
export {
  _sfc_main as default
};
