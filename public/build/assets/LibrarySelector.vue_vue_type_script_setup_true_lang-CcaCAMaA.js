import { d as defineComponent, r as ref, o as onMounted, a as createElementBlock, b as createBaseVNode, f as createVNode, u as unref, l as createCommentVNode, F as Fragment, j as renderList, t as toDisplayString, k as openBlock } from "./main-BV94XoeK.js";
import { s as superadminAPI } from "./superadminApi-C5-ZGb9_.js";
import { L as Library } from "./library-BL7Qw1Tw.js";
const _hoisted_1 = { class: "bg-white p-4 rounded-xl shadow-sm border border-gray-200 mb-6 flex items-center justify-between" };
const _hoisted_2 = { class: "flex items-center space-x-4" };
const _hoisted_3 = { class: "p-2 bg-indigo-50 rounded-lg" };
const _hoisted_4 = { class: "flex items-center space-x-3" };
const _hoisted_5 = ["value"];
const _hoisted_6 = ["value"];
const _hoisted_7 = {
  key: 0,
  class: "animate-spin rounded-full h-4 w-4 border-2 border-indigo-500 border-t-transparent"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "LibrarySelector",
  props: {
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(__props) {
    const libraries = ref([]);
    const loading = ref(false);
    const fetchLibraries = async () => {
      loading.value = true;
      try {
        libraries.value = await superadminAPI.getLibraries();
      } catch (error) {
        console.error("Error fetching libraries:", error);
      } finally {
        loading.value = false;
      }
    };
    onMounted(fetchLibraries);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("div", _hoisted_3, [
            createVNode(unref(Library), { class: "w-5 h-5 text-indigo-600" })
          ]),
          _cache[1] || (_cache[1] = createBaseVNode("div", null, [
            createBaseVNode("h3", { class: "text-sm font-semibold text-gray-900" }, "Select Library"),
            createBaseVNode("p", { class: "text-xs text-gray-500" }, "Manage data for a specific library")
          ], -1))
        ]),
        createBaseVNode("div", _hoisted_4, [
          createBaseVNode("select", {
            value: __props.modelValue === null ? "" : __props.modelValue,
            onChange: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("update:modelValue", $event.target.value === "" ? null : Number($event.target.value))),
            class: "min-w-[200px] px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
          }, [
            _cache[2] || (_cache[2] = createBaseVNode("option", { value: "" }, "All Libraries", -1)),
            (openBlock(true), createElementBlock(Fragment, null, renderList(libraries.value, (lib) => {
              return openBlock(), createElementBlock("option", {
                key: lib.id,
                value: lib.id
              }, toDisplayString(lib.name), 9, _hoisted_6);
            }), 128))
          ], 40, _hoisted_5),
          loading.value ? (openBlock(), createElementBlock("div", _hoisted_7)) : createCommentVNode("", true)
        ])
      ]);
    };
  }
});
export {
  _sfc_main as _
};
