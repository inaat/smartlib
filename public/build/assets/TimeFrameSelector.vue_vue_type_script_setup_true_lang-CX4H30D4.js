import { d as defineComponent, r as ref, a as computed, o as onMounted, K as onUnmounted, b as createElementBlock, e as createBaseVNode, p as createCommentVNode, g as createVNode, u as unref, t as toDisplayString, n as normalizeClass, F as Fragment, k as renderList, i as createBlock, m as openBlock } from "./main-BeUqjoax.js";
import { C as Calendar } from "./calendar-C4MEAYqh.js";
import { C as ChevronDown } from "./chevron-down-DgPiBWjn.js";
import { C as Check } from "./check-CZ9YO2_d.js";
const _hoisted_1 = { class: "whitespace-nowrap font-bold" };
const _hoisted_2 = {
  key: 0,
  class: "absolute right-0 mt-1.5 w-44 bg-white border border-slate-200 rounded-xl shadow-lg py-1.5 z-50 animate-in fade-in zoom-in-95 duration-150"
};
const _hoisted_3 = ["onClick"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "TimeFrameSelector",
  props: {
    modelValue: {
      type: String,
      default: "today"
    },
    color: {
      type: String,
      default: "blue"
    },
    options: {
      type: Array,
      default: () => [
        { value: "today", label: "Today" },
        { value: "yesterday", label: "Yesterday" },
        { value: "this_month", label: "This Month" },
        { value: "last_month", label: "Last Month" },
        { value: "this_year", label: "This Year" },
        { value: "custom", label: "Custom Range" },
        { value: "all", label: "All Time" }
      ]
    }
  },
  emits: ["update:modelValue", "change"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const isOpen = ref(false);
    const containerRef = ref(null);
    const selectedLabel = computed(() => {
      const match = props.options.find((o) => o.value === props.modelValue);
      return match ? match.label : "Today";
    });
    const toggleOpen = () => {
      isOpen.value = !isOpen.value;
    };
    const selectOption = (val) => {
      isOpen.value = false;
      emit("update:modelValue", val);
      emit("change", val);
    };
    const handleClickOutside = (e) => {
      if (containerRef.value && !containerRef.value.contains(e.target)) {
        isOpen.value = false;
      }
    };
    onMounted(() => {
      window.addEventListener("click", handleClickOutside);
    });
    onUnmounted(() => {
      window.removeEventListener("click", handleClickOutside);
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: "relative inline-block text-left",
        ref_key: "containerRef",
        ref: containerRef
      }, [
        createBaseVNode("button", {
          type: "button",
          onClick: toggleOpen,
          class: "px-4 py-2.5 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors flex items-center space-x-2 text-xs font-bold text-slate-600 cursor-pointer shadow-sm outline-none"
        }, [
          createVNode(unref(Calendar), { class: "w-4 h-4 text-slate-500 flex-shrink-0" }),
          createBaseVNode("span", _hoisted_1, toDisplayString(selectedLabel.value), 1),
          createVNode(unref(ChevronDown), {
            class: normalizeClass(["w-4 h-4 text-slate-400 flex-shrink-0 transition-transform duration-200", { "rotate-180": isOpen.value }])
          }, null, 8, ["class"])
        ]),
        isOpen.value ? (openBlock(), createElementBlock("div", _hoisted_2, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(__props.options, (option) => {
            return openBlock(), createElementBlock("button", {
              key: option.value,
              type: "button",
              onClick: ($event) => selectOption(option.value),
              class: normalizeClass([
                "w-full text-left px-3.5 py-2 text-xs font-semibold flex items-center justify-between transition-colors cursor-pointer",
                __props.modelValue === option.value ? __props.color === "emerald" ? "bg-emerald-50/80 text-emerald-700 font-bold" : "bg-blue-50/80 text-blue-700 font-bold" : "text-slate-700 hover:bg-slate-50"
              ])
            }, [
              createBaseVNode("span", null, toDisplayString(option.label), 1),
              __props.modelValue === option.value ? (openBlock(), createBlock(unref(Check), {
                key: 0,
                class: normalizeClass(["w-3.5 h-3.5 flex-shrink-0 ml-2", __props.color === "emerald" ? "text-emerald-600" : "text-blue-600"])
              }, null, 8, ["class"])) : createCommentVNode("", true)
            ], 10, _hoisted_3);
          }), 128))
        ])) : createCommentVNode("", true)
      ], 512);
    };
  }
});
export {
  _sfc_main as _
};
