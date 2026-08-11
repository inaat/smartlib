import { c as createLucideIcon, d as defineComponent, z as useAuth, A as reactive, o as onMounted, l as useSettings, G as useRouter, r as ref, b as createElementBlock, e as createBaseVNode, g as createVNode, w as withCtx, h as resolveComponent, t as toDisplayString, u as unref, T as Transition, B as withModifiers, p as createCommentVNode, s as withDirectives, v as vModelText, n as normalizeClass, i as createBlock, H as vModelSelect, D as vModelDynamic, E as vModelCheckbox, j as createTextVNode, f as createStaticVNode, m as openBlock, _ as _export_sfc } from "./main-BeUqjoax.js";
import { U as User } from "./user-Jwf_R05Y.js";
import { M as Mail } from "./mail-CdJEFECh.js";
import { L as LoaderCircle } from "./loader-circle-AJrGvSz3.js";
import { P as Phone } from "./phone-DeUaZgMM.js";
import { G as GraduationCap } from "./graduation-cap-D3FeWUk2.js";
import { U as UserCheck } from "./user-check-gjs1HmON.js";
import { L as Lock } from "./lock-CC7ENFPD.js";
import { E as EyeOff } from "./eye-off-m5drfbQr.js";
import { E as Eye } from "./eye-DWPQPwXh.js";
import { A as ArrowRight } from "./arrow-right-IyqLp6mR.js";
import { C as Check } from "./check-CZ9YO2_d.js";
import { B as BookOpen } from "./book-open-DpY8sw2V.js";
import { C as CircleAlert } from "./circle-alert-jeFdHGPj.js";
/* empty css               */
const BadgeCheck = createLucideIcon("badge-check", [
  [
    "path",
    {
      d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
      key: "3c2336"
    }
  ],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
]);
const _hoisted_1 = { class: "h-screen w-full flex bg-white font-sans antialiased text-slate-900 overflow-hidden" };
const _hoisted_2 = { class: "w-full lg:w-1/2 h-full flex flex-col justify-center items-center px-6 sm:px-10 lg:px-14 py-6 overflow-y-auto bg-white" };
const _hoisted_3 = { class: "w-full max-w-sm sm:max-w-md lg:max-w-lg my-auto" };
const _hoisted_4 = { class: "h-8 w-8 rounded-lg bg-blue-600 flex items-center justify-center text-white shadow-sm group-hover:scale-105 transition-transform" };
const _hoisted_5 = { class: "text-lg font-bold text-slate-900 tracking-tight" };
const _hoisted_6 = { class: "mb-4" };
const _hoisted_7 = { class: "text-slate-500 font-normal text-xs" };
const _hoisted_8 = {
  key: 0,
  class: "mb-4 p-3 rounded-lg bg-amber-50 border border-amber-200 flex items-start space-x-2.5 text-left"
};
const _hoisted_9 = {
  key: 0,
  class: "mb-4 p-3 rounded-lg bg-rose-50 border border-rose-200 flex items-start space-x-2.5"
};
const _hoisted_10 = { class: "text-xs text-rose-700 mt-0.5 leading-relaxed" };
const _hoisted_11 = { class: "relative" };
const _hoisted_12 = {
  key: 0,
  class: "text-[11px] font-medium text-rose-600 mt-0.5 pl-1"
};
const _hoisted_13 = { class: "relative" };
const _hoisted_14 = {
  key: 0,
  class: "text-[11px] font-medium text-rose-600 mt-0.5 pl-1"
};
const _hoisted_15 = { class: "grid grid-cols-1 sm:grid-cols-2 gap-3" };
const _hoisted_16 = { class: "relative" };
const _hoisted_17 = {
  key: 0,
  class: "text-[11px] font-medium text-rose-600 mt-0.5 pl-1"
};
const _hoisted_18 = { class: "relative" };
const _hoisted_19 = {
  key: 0,
  class: "text-[11px] font-medium text-rose-600 mt-0.5 pl-1"
};
const _hoisted_20 = { class: "grid grid-cols-1 sm:grid-cols-2 gap-3" };
const _hoisted_21 = { class: "relative" };
const _hoisted_22 = {
  key: 0,
  class: "text-[11px] font-medium text-rose-600 mt-0.5 pl-1"
};
const _hoisted_23 = { class: "relative" };
const _hoisted_24 = {
  key: 0,
  class: "text-[11px] font-medium text-rose-600 mt-0.5 pl-1"
};
const _hoisted_25 = { class: "grid grid-cols-1 sm:grid-cols-2 gap-3" };
const _hoisted_26 = { class: "relative" };
const _hoisted_27 = ["type"];
const _hoisted_28 = {
  key: 0,
  class: "text-[11px] font-medium text-rose-600 mt-0.5 pl-1"
};
const _hoisted_29 = { class: "relative" };
const _hoisted_30 = ["type"];
const _hoisted_31 = {
  key: 0,
  class: "text-[11px] font-medium text-rose-600 mt-0.5 pl-1"
};
const _hoisted_32 = { class: "flex items-start space-x-2 pt-0.5" };
const _hoisted_33 = {
  key: 0,
  class: "text-[11px] font-medium text-rose-600 pl-1"
};
const _hoisted_34 = ["disabled"];
const _hoisted_35 = {
  key: 0,
  class: "flex items-center space-x-1.5"
};
const _hoisted_36 = {
  key: 1,
  class: "flex items-center space-x-1.5"
};
const _hoisted_37 = {
  key: 1,
  class: "text-[11px] font-medium text-amber-700 text-center pt-1"
};
const _hoisted_38 = { class: "text-center text-xs font-normal text-slate-500 pt-1" };
const _hoisted_39 = { class: "hidden lg:flex lg:w-1/2 h-full bg-blue-600 p-10 lg:p-14 flex-col justify-center items-center text-white relative overflow-y-auto" };
const _hoisted_40 = { class: "max-w-md w-full my-auto" };
const _hoisted_41 = { class: "space-y-3 mb-8" };
const _hoisted_42 = { class: "flex items-center space-x-3" };
const _hoisted_43 = { class: "h-4.5 w-4.5 rounded-full bg-white/20 flex items-center justify-center text-white flex-shrink-0" };
const _hoisted_44 = { class: "flex items-center space-x-3" };
const _hoisted_45 = { class: "h-4.5 w-4.5 rounded-full bg-white/20 flex items-center justify-center text-white flex-shrink-0" };
const _hoisted_46 = { class: "flex items-center space-x-3" };
const _hoisted_47 = { class: "h-4.5 w-4.5 rounded-full bg-white/20 flex items-center justify-center text-white flex-shrink-0" };
const _hoisted_48 = { class: "flex items-center space-x-3" };
const _hoisted_49 = { class: "h-4.5 w-4.5 rounded-full bg-white/20 flex items-center justify-center text-white flex-shrink-0" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "RegisterForm",
  setup(__props) {
    const router = useRouter();
    const { register, checkUniqueness } = useAuth();
    const { appName, allowUserRegistration, requireStudentApproval, fetchPublicSettings } = useSettings();
    const formData = reactive({
      name: "",
      email: "",
      phone: "",
      crn: "",
      gender: "",
      ca_level: "",
      password: "",
      password_confirmation: "",
      otp: "",
      terms: false,
      plan_id: null
    });
    onMounted(() => {
      fetchPublicSettings();
      const planId = router.currentRoute.value.query.plan_id;
      if (planId) formData.plan_id = Number(planId);
    });
    const errors = reactive({
      name: void 0,
      email: void 0,
      phone: void 0,
      crn: void 0,
      gender: void 0,
      ca_level: void 0,
      password: void 0,
      password_confirmation: void 0,
      terms: void 0,
      general: void 0
    });
    const isLoading = ref(false);
    const showPassword = ref(false);
    const showConfirmPassword = ref(false);
    const validatingField = ref(null);
    const clearError = (name) => {
      errors[name] = void 0;
    };
    let debounceTimer = null;
    const handleInput = (field) => {
      clearError(field);
      if (field === "email" || field === "crn") {
        if (debounceTimer) clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => {
          validateField(field);
        }, 600);
      }
    };
    const validateField = async (field) => {
      const value = formData[field];
      if (!value) return;
      if (field === "email" && !/\S+@\S+\.\S+/.test(value)) {
        errors.email = "Enter a valid email address";
        return;
      }
      if (field === "crn" && !/^\d+$/.test(value)) {
        errors.crn = "CRN must contain numbers only";
        return;
      }
      validatingField.value = field;
      try {
        const response = await checkUniqueness(field, String(value));
        errors[field] = response.exists ? response.message : void 0;
      } catch (error) {
        console.error(`Error validating ${field}:`, error);
      } finally {
        validatingField.value = null;
      }
    };
    const validate = () => {
      const e = {};
      if (!formData.name) e.name = "Full name is required";
      if (!formData.email) e.email = "Email address is required";
      else if (!/\S+@\S+\.\S+/.test(formData.email)) e.email = "Enter a valid email address";
      if (!formData.phone) e.phone = "Phone number is required";
      else if (!/^03\d{9}$/.test(formData.phone)) e.phone = "Format: 03XXXXXXXXX (11 digits)";
      if (!formData.crn) e.crn = "ICAP CRN number is required";
      else if (!/^\d+$/.test(formData.crn)) e.crn = "Must contain numbers only";
      if (!formData.ca_level) e.ca_level = "Required";
      if (!formData.gender) e.gender = "Required";
      if (!formData.password) e.password = "Password is required";
      else if (formData.password.length < 8) e.password = "Min 8 characters required";
      if (formData.password !== formData.password_confirmation) e.password_confirmation = "Passwords do not match";
      if (!formData.terms) e.terms = "You must accept terms & conditions";
      return e;
    };
    const handleSubmit = async () => {
      Object.keys(errors).forEach((key) => errors[key] = void 0);
      const ne = validate();
      Object.assign(errors, ne);
      if (Object.keys(ne).length > 0) {
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }
      isLoading.value = true;
      try {
        await register({ ...formData, otp: "0000" });
        await router.push("/home");
      } catch (error) {
        if (error.response?.data?.errors) {
          const be = error.response.data.errors;
          Object.keys(be).forEach((key) => {
            const msg = Array.isArray(be[key]) ? be[key][0] : be[key];
            if (Object.prototype.hasOwnProperty.call(errors, key)) errors[key] = msg;
            else errors.general = errors.general ? `${errors.general} ${msg}` : msg;
          });
        } else {
          errors.general = error.response?.data?.message || "Registration failed. Please check your details.";
        }
        window.scrollTo({ top: 0, behavior: "smooth" });
      } finally {
        isLoading.value = false;
      }
    };
    return (_ctx, _cache) => {
      const _component_router_link = resolveComponent("router-link");
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("div", _hoisted_3, [
            createVNode(_component_router_link, {
              to: "/",
              class: "inline-flex items-center space-x-2 mb-5 group"
            }, {
              default: withCtx(() => [
                createBaseVNode("div", _hoisted_4, [
                  createVNode(unref(BookOpen), { class: "h-4.5 w-4.5" })
                ]),
                createBaseVNode("span", _hoisted_5, toDisplayString(unref(appName)), 1)
              ]),
              _: 1
            }),
            createBaseVNode("div", _hoisted_6, [
              _cache[22] || (_cache[22] = createBaseVNode("h1", { class: "text-2xl font-bold text-slate-900 tracking-tight mb-1" }, "Create an account", -1)),
              createBaseVNode("p", _hoisted_7, "Join " + toDisplayString(unref(appName)) + " to start reserving your seats and books", 1)
            ]),
            createVNode(Transition, { name: "fade" }, {
              default: withCtx(() => [
                !unref(allowUserRegistration) ? (openBlock(), createElementBlock("div", _hoisted_8, [
                  createVNode(unref(CircleAlert), { class: "h-4 w-4 text-amber-600 flex-shrink-0 mt-0.5" }),
                  _cache[23] || (_cache[23] = createBaseVNode("div", null, [
                    createBaseVNode("h5", { class: "text-[11px] font-semibold text-amber-800 uppercase tracking-wide" }, "Registration Disabled"),
                    createBaseVNode("p", { class: "text-xs text-amber-700 mt-0.5 leading-relaxed" }, "Student self-registration is currently disabled by system administrator.")
                  ], -1))
                ])) : createCommentVNode("", true)
              ]),
              _: 1
            }),
            createVNode(Transition, { name: "fade" }, {
              default: withCtx(() => [
                errors.general ? (openBlock(), createElementBlock("div", _hoisted_9, [
                  createVNode(unref(CircleAlert), { class: "h-4 w-4 text-rose-600 flex-shrink-0 mt-0.5" }),
                  createBaseVNode("div", null, [
                    _cache[24] || (_cache[24] = createBaseVNode("h5", { class: "text-[11px] font-semibold text-rose-800 uppercase tracking-wide" }, "Registration Failed", -1)),
                    createBaseVNode("p", _hoisted_10, toDisplayString(errors.general), 1)
                  ])
                ])) : createCommentVNode("", true)
              ]),
              _: 1
            }),
            createBaseVNode("form", {
              onSubmit: withModifiers(handleSubmit, ["prevent"]),
              class: "space-y-3"
            }, [
              createBaseVNode("div", null, [
                _cache[25] || (_cache[25] = createBaseVNode("label", {
                  for: "name",
                  class: "block text-xs font-semibold text-slate-700 mb-1"
                }, "Full Name", -1)),
                createBaseVNode("div", _hoisted_11, [
                  createVNode(unref(User), { class: "absolute left-3 top-2.5 h-4 w-4 text-slate-400 pointer-events-none" }),
                  withDirectives(createBaseVNode("input", {
                    id: "name",
                    type: "text",
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => formData.name = $event),
                    onInput: _cache[1] || (_cache[1] = ($event) => clearError("name")),
                    class: normalizeClass([
                      "w-full pl-9 pr-3.5 py-2 rounded-lg border bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-500/10 text-xs font-normal transition-all",
                      errors.name ? "border-rose-400 bg-rose-50/20" : "border-slate-200"
                    ]),
                    placeholder: "e.g. Muhammad Ali"
                  }, null, 34), [
                    [vModelText, formData.name]
                  ])
                ]),
                errors.name ? (openBlock(), createElementBlock("p", _hoisted_12, toDisplayString(errors.name), 1)) : createCommentVNode("", true)
              ]),
              createBaseVNode("div", null, [
                _cache[26] || (_cache[26] = createBaseVNode("label", {
                  for: "reg-email",
                  class: "block text-xs font-semibold text-slate-700 mb-1"
                }, "Email address", -1)),
                createBaseVNode("div", _hoisted_13, [
                  createVNode(unref(Mail), { class: "absolute left-3 top-2.5 h-4 w-4 text-slate-400 pointer-events-none" }),
                  withDirectives(createBaseVNode("input", {
                    id: "reg-email",
                    type: "email",
                    "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => formData.email = $event),
                    onInput: _cache[3] || (_cache[3] = ($event) => handleInput("email")),
                    onBlur: _cache[4] || (_cache[4] = ($event) => validateField("email")),
                    class: normalizeClass([
                      "w-full pl-9 pr-9 py-2 rounded-lg border bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-500/10 text-xs font-normal transition-all",
                      errors.email ? "border-rose-400 bg-rose-50/20" : "border-slate-200"
                    ]),
                    placeholder: "you@example.com"
                  }, null, 34), [
                    [vModelText, formData.email]
                  ]),
                  validatingField.value === "email" ? (openBlock(), createBlock(unref(LoaderCircle), {
                    key: 0,
                    class: "h-3.5 w-3.5 text-blue-600 animate-spin absolute right-3 top-2.5"
                  })) : createCommentVNode("", true)
                ]),
                errors.email ? (openBlock(), createElementBlock("p", _hoisted_14, toDisplayString(errors.email), 1)) : createCommentVNode("", true)
              ]),
              createBaseVNode("div", _hoisted_15, [
                createBaseVNode("div", null, [
                  _cache[27] || (_cache[27] = createBaseVNode("label", {
                    for: "phone",
                    class: "block text-xs font-semibold text-slate-700 mb-1"
                  }, "Phone Number", -1)),
                  createBaseVNode("div", _hoisted_16, [
                    createVNode(unref(Phone), { class: "absolute left-3 top-2.5 h-4 w-4 text-slate-400 pointer-events-none" }),
                    withDirectives(createBaseVNode("input", {
                      id: "phone",
                      type: "tel",
                      "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => formData.phone = $event),
                      onInput: _cache[6] || (_cache[6] = ($event) => clearError("phone")),
                      class: normalizeClass([
                        "w-full pl-9 pr-3.5 py-2 rounded-lg border bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-500/10 text-xs font-normal transition-all",
                        errors.phone ? "border-rose-400 bg-rose-50/20" : "border-slate-200"
                      ]),
                      placeholder: "03001234567"
                    }, null, 34), [
                      [vModelText, formData.phone]
                    ])
                  ]),
                  errors.phone ? (openBlock(), createElementBlock("p", _hoisted_17, toDisplayString(errors.phone), 1)) : createCommentVNode("", true)
                ]),
                createBaseVNode("div", null, [
                  _cache[28] || (_cache[28] = createBaseVNode("label", {
                    for: "crn",
                    class: "block text-xs font-semibold text-slate-700 mb-1"
                  }, "ICAP CRN Number", -1)),
                  createBaseVNode("div", _hoisted_18, [
                    createVNode(unref(BadgeCheck), { class: "absolute left-3 top-2.5 h-4 w-4 text-slate-400 pointer-events-none" }),
                    withDirectives(createBaseVNode("input", {
                      id: "crn",
                      type: "number",
                      "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => formData.crn = $event),
                      onInput: _cache[8] || (_cache[8] = ($event) => handleInput("crn")),
                      onBlur: _cache[9] || (_cache[9] = ($event) => validateField("crn")),
                      class: normalizeClass([
                        "w-full pl-9 pr-9 py-2 rounded-lg border bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-500/10 text-xs font-normal transition-all",
                        errors.crn ? "border-rose-400 bg-rose-50/20" : "border-slate-200"
                      ]),
                      placeholder: "e.g. 123456"
                    }, null, 34), [
                      [vModelText, formData.crn]
                    ]),
                    validatingField.value === "crn" ? (openBlock(), createBlock(unref(LoaderCircle), {
                      key: 0,
                      class: "h-3.5 w-3.5 text-blue-600 animate-spin absolute right-3 top-2.5"
                    })) : createCommentVNode("", true)
                  ]),
                  errors.crn ? (openBlock(), createElementBlock("p", _hoisted_19, toDisplayString(errors.crn), 1)) : createCommentVNode("", true)
                ])
              ]),
              createBaseVNode("div", _hoisted_20, [
                createBaseVNode("div", null, [
                  _cache[30] || (_cache[30] = createBaseVNode("label", {
                    for: "ca_level",
                    class: "block text-xs font-semibold text-slate-700 mb-1"
                  }, "CA Level", -1)),
                  createBaseVNode("div", _hoisted_21, [
                    createVNode(unref(GraduationCap), { class: "absolute left-3 top-2.5 h-4 w-4 text-slate-400 pointer-events-none" }),
                    withDirectives(createBaseVNode("select", {
                      id: "ca_level",
                      "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => formData.ca_level = $event),
                      onChange: _cache[11] || (_cache[11] = ($event) => clearError("ca_level")),
                      class: normalizeClass([
                        "w-full pl-9 pr-3.5 py-2 rounded-lg border bg-white text-slate-900 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-500/10 text-xs font-normal transition-all cursor-pointer",
                        errors.ca_level ? "border-rose-400 bg-rose-50/20" : "border-slate-200"
                      ])
                    }, [..._cache[29] || (_cache[29] = [
                      createBaseVNode("option", {
                        value: "",
                        disabled: "",
                        selected: ""
                      }, "Select Level", -1),
                      createBaseVNode("option", { value: "PRC" }, "PRC", -1),
                      createBaseVNode("option", { value: "CAF" }, "CAF", -1),
                      createBaseVNode("option", { value: "Final" }, "Final", -1)
                    ])], 34), [
                      [vModelSelect, formData.ca_level]
                    ])
                  ]),
                  errors.ca_level ? (openBlock(), createElementBlock("p", _hoisted_22, toDisplayString(errors.ca_level), 1)) : createCommentVNode("", true)
                ]),
                createBaseVNode("div", null, [
                  _cache[32] || (_cache[32] = createBaseVNode("label", {
                    for: "gender",
                    class: "block text-xs font-semibold text-slate-700 mb-1"
                  }, "Gender", -1)),
                  createBaseVNode("div", _hoisted_23, [
                    createVNode(unref(UserCheck), { class: "absolute left-3 top-2.5 h-4 w-4 text-slate-400 pointer-events-none" }),
                    withDirectives(createBaseVNode("select", {
                      id: "gender",
                      "onUpdate:modelValue": _cache[12] || (_cache[12] = ($event) => formData.gender = $event),
                      onChange: _cache[13] || (_cache[13] = ($event) => clearError("gender")),
                      class: normalizeClass([
                        "w-full pl-9 pr-3.5 py-2 rounded-lg border bg-white text-slate-900 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-500/10 text-xs font-normal transition-all cursor-pointer",
                        errors.gender ? "border-rose-400 bg-rose-50/20" : "border-slate-200"
                      ])
                    }, [..._cache[31] || (_cache[31] = [
                      createBaseVNode("option", {
                        value: "",
                        disabled: "",
                        selected: ""
                      }, "Select Gender", -1),
                      createBaseVNode("option", { value: "male" }, "Male", -1),
                      createBaseVNode("option", { value: "female" }, "Female", -1)
                    ])], 34), [
                      [vModelSelect, formData.gender]
                    ])
                  ]),
                  errors.gender ? (openBlock(), createElementBlock("p", _hoisted_24, toDisplayString(errors.gender), 1)) : createCommentVNode("", true)
                ])
              ]),
              createBaseVNode("div", _hoisted_25, [
                createBaseVNode("div", null, [
                  _cache[33] || (_cache[33] = createBaseVNode("label", {
                    for: "reg-password",
                    class: "block text-xs font-semibold text-slate-700 mb-1"
                  }, "Password", -1)),
                  createBaseVNode("div", _hoisted_26, [
                    createVNode(unref(Lock), { class: "absolute left-3 top-2.5 h-4 w-4 text-slate-400 pointer-events-none" }),
                    withDirectives(createBaseVNode("input", {
                      id: "reg-password",
                      type: showPassword.value ? "text" : "password",
                      "onUpdate:modelValue": _cache[14] || (_cache[14] = ($event) => formData.password = $event),
                      onInput: _cache[15] || (_cache[15] = ($event) => clearError("password")),
                      class: normalizeClass([
                        "w-full pl-9 pr-9 py-2 rounded-lg border bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-500/10 text-xs font-normal transition-all",
                        errors.password ? "border-rose-400 bg-rose-50/20" : "border-slate-200"
                      ]),
                      placeholder: "••••••••"
                    }, null, 42, _hoisted_27), [
                      [vModelDynamic, formData.password]
                    ]),
                    createBaseVNode("button", {
                      type: "button",
                      onClick: _cache[16] || (_cache[16] = ($event) => showPassword.value = !showPassword.value),
                      class: "absolute right-3 top-2.5 text-slate-400 hover:text-slate-600 transition-colors"
                    }, [
                      showPassword.value ? (openBlock(), createBlock(unref(EyeOff), {
                        key: 0,
                        class: "h-4 w-4"
                      })) : (openBlock(), createBlock(unref(Eye), {
                        key: 1,
                        class: "h-4 w-4"
                      }))
                    ])
                  ]),
                  errors.password ? (openBlock(), createElementBlock("p", _hoisted_28, toDisplayString(errors.password), 1)) : createCommentVNode("", true)
                ]),
                createBaseVNode("div", null, [
                  _cache[34] || (_cache[34] = createBaseVNode("label", {
                    for: "password_confirmation",
                    class: "block text-xs font-semibold text-slate-700 mb-1"
                  }, "Confirm Password", -1)),
                  createBaseVNode("div", _hoisted_29, [
                    createVNode(unref(Lock), { class: "absolute left-3 top-2.5 h-4 w-4 text-slate-400 pointer-events-none" }),
                    withDirectives(createBaseVNode("input", {
                      id: "password_confirmation",
                      type: showConfirmPassword.value ? "text" : "password",
                      "onUpdate:modelValue": _cache[17] || (_cache[17] = ($event) => formData.password_confirmation = $event),
                      onInput: _cache[18] || (_cache[18] = ($event) => clearError("password_confirmation")),
                      class: normalizeClass([
                        "w-full pl-9 pr-9 py-2 rounded-lg border bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-500/10 text-xs font-normal transition-all",
                        errors.password_confirmation ? "border-rose-400 bg-rose-50/20" : "border-slate-200"
                      ]),
                      placeholder: "••••••••"
                    }, null, 42, _hoisted_30), [
                      [vModelDynamic, formData.password_confirmation]
                    ]),
                    createBaseVNode("button", {
                      type: "button",
                      onClick: _cache[19] || (_cache[19] = ($event) => showConfirmPassword.value = !showConfirmPassword.value),
                      class: "absolute right-3 top-2.5 text-slate-400 hover:text-slate-600 transition-colors"
                    }, [
                      showConfirmPassword.value ? (openBlock(), createBlock(unref(EyeOff), {
                        key: 0,
                        class: "h-4 w-4"
                      })) : (openBlock(), createBlock(unref(Eye), {
                        key: 1,
                        class: "h-4 w-4"
                      }))
                    ])
                  ]),
                  errors.password_confirmation ? (openBlock(), createElementBlock("p", _hoisted_31, toDisplayString(errors.password_confirmation), 1)) : createCommentVNode("", true)
                ])
              ]),
              createBaseVNode("div", _hoisted_32, [
                withDirectives(createBaseVNode("input", {
                  id: "terms",
                  type: "checkbox",
                  "onUpdate:modelValue": _cache[20] || (_cache[20] = ($event) => formData.terms = $event),
                  onChange: _cache[21] || (_cache[21] = ($event) => clearError("terms")),
                  class: "h-3.5 w-3.5 rounded border-slate-300 text-blue-600 focus:ring-blue-500 cursor-pointer mt-0.5"
                }, null, 544), [
                  [vModelCheckbox, formData.terms]
                ]),
                _cache[35] || (_cache[35] = createBaseVNode("label", {
                  for: "terms",
                  class: "text-xs font-normal text-slate-600 cursor-pointer select-none leading-normal"
                }, [
                  createTextVNode(" I agree to the "),
                  createBaseVNode("a", {
                    href: "#",
                    class: "font-semibold text-blue-600 hover:underline"
                  }, "Terms of Service"),
                  createTextVNode(" & "),
                  createBaseVNode("a", {
                    href: "#",
                    class: "font-semibold text-blue-600 hover:underline"
                  }, "Privacy Policy")
                ], -1))
              ]),
              errors.terms ? (openBlock(), createElementBlock("p", _hoisted_33, toDisplayString(errors.terms), 1)) : createCommentVNode("", true),
              createBaseVNode("button", {
                type: "submit",
                disabled: isLoading.value || !unref(allowUserRegistration),
                class: "w-full py-2.5 px-4 rounded-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 active:scale-[0.99] shadow-sm transition-all text-xs flex items-center justify-center space-x-1.5 mt-1 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
              }, [
                isLoading.value ? (openBlock(), createElementBlock("span", _hoisted_35, [..._cache[36] || (_cache[36] = [
                  createBaseVNode("svg", {
                    class: "animate-spin h-3.5 w-3.5 text-white",
                    fill: "none",
                    viewBox: "0 0 24 24"
                  }, [
                    createBaseVNode("circle", {
                      class: "opacity-25",
                      cx: "12",
                      cy: "12",
                      r: "10",
                      stroke: "currentColor",
                      "stroke-width": "4"
                    }),
                    createBaseVNode("path", {
                      class: "opacity-75",
                      fill: "currentColor",
                      d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    })
                  ], -1),
                  createBaseVNode("span", null, "Creating account...", -1)
                ])])) : (openBlock(), createElementBlock("span", _hoisted_36, [
                  _cache[37] || (_cache[37] = createBaseVNode("span", null, "Create account", -1)),
                  createVNode(unref(ArrowRight), { class: "h-3.5 w-3.5" })
                ]))
              ], 8, _hoisted_34),
              unref(requireStudentApproval) ? (openBlock(), createElementBlock("p", _hoisted_37, " Note: Admin approval is required for newly registered student accounts. ")) : createCommentVNode("", true),
              createBaseVNode("p", _hoisted_38, [
                _cache[39] || (_cache[39] = createTextVNode(" Already have an account? ", -1)),
                createVNode(_component_router_link, {
                  to: "/login",
                  class: "font-semibold text-blue-600 hover:text-blue-700 hover:underline ml-1"
                }, {
                  default: withCtx(() => [..._cache[38] || (_cache[38] = [
                    createTextVNode("Sign in", -1)
                  ])]),
                  _: 1
                })
              ])
            ], 32)
          ])
        ]),
        createBaseVNode("div", _hoisted_39, [
          createBaseVNode("div", _hoisted_40, [
            _cache[44] || (_cache[44] = createBaseVNode("h2", { class: "text-2xl sm:text-3xl font-bold text-white leading-snug tracking-tight mb-3" }, " Unlock smart study spaces ", -1)),
            _cache[45] || (_cache[45] = createBaseVNode("p", { class: "text-xs sm:text-sm text-blue-100/90 font-normal leading-relaxed mb-6" }, " Experience seamless seat booking, instant QR entrance check-in, and automated study analytics designed specifically for ICAP students and institutions. ", -1)),
            createBaseVNode("div", _hoisted_41, [
              createBaseVNode("div", _hoisted_42, [
                createBaseVNode("div", _hoisted_43, [
                  createVNode(unref(Check), { class: "h-2.5 w-2.5 stroke-[3]" })
                ]),
                _cache[40] || (_cache[40] = createBaseVNode("span", { class: "text-xs sm:text-sm font-medium text-white" }, "Instant seat reservation & floor map", -1))
              ]),
              createBaseVNode("div", _hoisted_44, [
                createBaseVNode("div", _hoisted_45, [
                  createVNode(unref(Check), { class: "h-2.5 w-2.5 stroke-[3]" })
                ]),
                _cache[41] || (_cache[41] = createBaseVNode("span", { class: "text-xs sm:text-sm font-medium text-white" }, "Touchless QR entrance check-in system", -1))
              ]),
              createBaseVNode("div", _hoisted_46, [
                createBaseVNode("div", _hoisted_47, [
                  createVNode(unref(Check), { class: "h-2.5 w-2.5 stroke-[3]" })
                ]),
                _cache[42] || (_cache[42] = createBaseVNode("span", { class: "text-xs sm:text-sm font-medium text-white" }, "Digitised book borrowing & reserve tracking", -1))
              ]),
              createBaseVNode("div", _hoisted_48, [
                createBaseVNode("div", _hoisted_49, [
                  createVNode(unref(Check), { class: "h-2.5 w-2.5 stroke-[3]" })
                ]),
                _cache[43] || (_cache[43] = createBaseVNode("span", { class: "text-xs sm:text-sm font-medium text-white" }, "Personal study analytics & reward badges", -1))
              ])
            ]),
            _cache[46] || (_cache[46] = createStaticVNode('<div class="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 shadow-md" data-v-9fa6dc11><p class="text-xs italic font-normal text-white/95 leading-relaxed mb-3" data-v-9fa6dc11> &quot;Creating a SmartLib account made my daily study routine so much easier. I can book my desk before even reaching the library.&quot; </p><div class="flex items-center space-x-2.5" data-v-9fa6dc11><div class="h-8 w-8 rounded-full bg-white/20 border border-white/30 flex items-center justify-center font-bold text-white text-xs" data-v-9fa6dc11> SL </div><div data-v-9fa6dc11><h4 class="text-xs font-semibold text-white leading-none" data-v-9fa6dc11>SmartLib Student Community</h4><p class="text-[11px] text-blue-200 font-normal mt-0.5" data-v-9fa6dc11>ICAP Digital Learning Hub</p></div></div></div>', 1))
          ])
        ])
      ]);
    };
  }
});
const RegisterForm = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-9fa6dc11"]]);
export {
  RegisterForm as default
};
