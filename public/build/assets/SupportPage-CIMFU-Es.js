import { d as defineComponent, a as createElementBlock, b as createBaseVNode, f as createVNode, k as openBlock } from "./main-BV94XoeK.js";
import { S as SupportSystem } from "./SupportSystem-BGx30rHJ.js";
/* empty css               */
import "./useSwal-pQW_XkRe.js";
import "./createLucideIcon-CmaEOm5I.js";
import "./clock-BERatuZr.js";
import "./circle-check-BE6-4uUs.js";
import "./plus-32ROcMxt.js";
import "./search-DO-S72vO.js";
import "./loader-circle-DjQu_eNR.js";
import "./life-buoy-Cfgxehzf.js";
import "./user-CVhi9PXD.js";
import "./refresh-cw-C6EhchCZ.js";
import "./x-C8j8JQlQ.js";
import "./formatDistanceToNow-CgRkJOVj.js";
import "./constructNow-CQ6Py-t8.js";
import "./en-US-CtEcOBul.js";
import "./format-CerZa7QB.js";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "SupportPage",
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
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
