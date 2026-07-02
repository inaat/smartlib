import { d as defineComponent, a as createElementBlock, b as createBaseVNode, f as createVNode, k as openBlock } from "./main-DKJzpCzk.js";
import { S as SupportSystem } from "./SupportSystem--vvzBPXI.js";
/* empty css               */
import "./useSwal-pQW_XkRe.js";
import "./createLucideIcon-TQ5d7bQA.js";
import "./clock-xlNueMyC.js";
import "./circle-check-CRs2yXKo.js";
import "./plus-CR_-MeGX.js";
import "./search-CJLoyzlx.js";
import "./loader-circle-CjoQpJHU.js";
import "./life-buoy-Cs49b8cx.js";
import "./user-Cmc8aXsW.js";
import "./refresh-cw-vjkPNSrg.js";
import "./x-BLKH3q-c.js";
import "./formatDistanceToNow-CgRkJOVj.js";
import "./constructNow-CQ6Py-t8.js";
import "./en-US-CtEcOBul.js";
import "./format-CerZa7QB.js";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
const _hoisted_1 = { class: "p-6" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "SupportPage",
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        _cache[0] || (_cache[0] = createBaseVNode("div", { class: "mb-6" }, [
          createBaseVNode("h1", { class: "text-2xl font-bold text-gray-900" }, "Global Support Monitoring"),
          createBaseVNode("p", { class: "text-gray-500 text-sm" }, "Monitor all support tickets and student-librarian interactions.")
        ], -1)),
        createVNode(SupportSystem, { role: "admin" })
      ]);
    };
  }
});
export {
  _sfc_main as default
};
