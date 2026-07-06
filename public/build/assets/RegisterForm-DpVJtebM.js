import { d as defineComponent, x as useAuth, y as reactive, o as onMounted, C as useRouter, r as ref, a as createElementBlock, b as createBaseVNode, f as createVNode, e as createStaticVNode, w as withCtx, g as resolveComponent, l as createCommentVNode, t as toDisplayString, z as withModifiers, p as withDirectives, v as vModelText, n as normalizeClass, D as vModelSelect, A as vModelDynamic, B as vModelCheckbox, i as createTextVNode, k as openBlock } from "./main-BV94XoeK.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
/* empty css               */
const _hoisted_1 = { class: "min-h-screen flex font-sans bg-white" };
const _hoisted_2 = { class: "hidden lg:flex lg:flex-1 bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-900 relative overflow-hidden items-center justify-center p-12" };
const _hoisted_3 = { class: "relative z-10 max-w-lg text-white" };
const _hoisted_4 = { class: "flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50/20 py-12" };
const _hoisted_5 = { class: "max-w-md w-full space-y-8 bg-white/80 backdrop-blur-xl border border-slate-100 p-8 sm:p-10 rounded-3xl shadow-xl shadow-slate-100/50" };
const _hoisted_6 = { class: "text-center" };
const _hoisted_7 = {
  key: 0,
  class: "bg-red-50 border-l-4 border-red-500 p-4 rounded-xl animate-shake"
};
const _hoisted_8 = { class: "flex items-center" };
const _hoisted_9 = { class: "text-sm font-medium text-red-800" };
const _hoisted_10 = { class: "space-y-4" };
const _hoisted_11 = {
  key: 0,
  class: "mt-1 text-xs font-medium text-red-600"
};
const _hoisted_12 = {
  key: 0,
  class: "mt-1 text-xs font-medium text-red-600"
};
const _hoisted_13 = { class: "grid grid-cols-2 gap-4" };
const _hoisted_14 = {
  key: 0,
  class: "mt-1 text-xs font-medium text-red-600"
};
const _hoisted_15 = {
  key: 0,
  class: "mt-1 text-xs font-medium text-red-600"
};
const _hoisted_16 = { class: "grid grid-cols-2 gap-4" };
const _hoisted_17 = {
  key: 0,
  class: "mt-1 text-xs font-medium text-red-600"
};
const _hoisted_18 = {
  key: 0,
  class: "mt-1 text-xs font-medium text-red-600"
};
const _hoisted_19 = { class: "relative" };
const _hoisted_20 = ["type"];
const _hoisted_21 = {
  key: 0,
  class: "h-5 w-5",
  fill: "none",
  stroke: "currentColor",
  viewBox: "0 0 24 24"
};
const _hoisted_22 = {
  key: 1,
  class: "h-5 w-5",
  fill: "none",
  stroke: "currentColor",
  viewBox: "0 0 24 24"
};
const _hoisted_23 = {
  key: 0,
  class: "mt-1 text-xs font-medium text-red-600"
};
const _hoisted_24 = { class: "relative" };
const _hoisted_25 = ["type"];
const _hoisted_26 = {
  key: 0,
  class: "h-5 w-5",
  fill: "none",
  stroke: "currentColor",
  viewBox: "0 0 24 24"
};
const _hoisted_27 = {
  key: 1,
  class: "h-5 w-5",
  fill: "none",
  stroke: "currentColor",
  viewBox: "0 0 24 24"
};
const _hoisted_28 = {
  key: 0,
  class: "mt-1 text-xs font-medium text-red-600"
};
const _hoisted_29 = { class: "flex items-start" };
const _hoisted_30 = {
  key: 0,
  class: "text-xs font-medium text-red-600"
};
const _hoisted_31 = ["disabled"];
const _hoisted_32 = {
  key: 0,
  class: "flex items-center"
};
const _hoisted_33 = { key: 1 };
const _hoisted_34 = { class: "text-center" };
const _hoisted_35 = { class: "text-sm text-slate-600 font-medium" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "RegisterForm",
  setup(__props) {
    const router = useRouter();
    const { register, checkUniqueness } = useAuth();
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
      const planId = router.currentRoute.value.query.plan_id;
      if (planId) {
        formData.plan_id = Number(planId);
      }
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
        errors.email = "Email is invalid";
        return;
      }
      if (field === "crn" && !/^\d+$/.test(value)) {
        errors.crn = "CRN must be a valid number";
        return;
      }
      try {
        const response = await checkUniqueness(field, String(value));
        console.log(`Uniqueness check for ${field}:`, response);
        if (response.exists) {
          errors[field] = response.message;
        } else {
          errors[field] = void 0;
        }
      } catch (error) {
        console.error(`Error validating ${field}:`, error);
      }
    };
    const validate = () => {
      const newErrors = {};
      if (!formData.name) newErrors.name = "Name is required";
      if (!formData.email) {
        newErrors.email = "Email is required";
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = "Email is invalid";
      }
      if (!formData.phone) {
        newErrors.phone = "Phone number is required";
      } else if (!/^03\d{9}$/.test(formData.phone)) {
        newErrors.phone = "Phone must be in format 03XXXXXXXXX";
      }
      if (!formData.crn) {
        newErrors.crn = "CRN is required";
      } else if (!/^\d+$/.test(formData.crn)) {
        newErrors.crn = "CRN must be a valid number";
      }
      if (!formData.ca_level) newErrors.ca_level = "CA Level is required";
      if (!formData.gender) newErrors.gender = "Gender is required";
      if (!formData.password) {
        newErrors.password = "Password is required";
      } else if (formData.password.length < 8) {
        newErrors.password = "Password must be at least 8 characters";
      }
      if (formData.password !== formData.password_confirmation) {
        newErrors.password_confirmation = "Passwords do not match";
      }
      if (!formData.terms) {
        newErrors.terms = "You must accept the terms and conditions";
      }
      return newErrors;
    };
    const handleSubmit = async () => {
      Object.keys(errors).forEach((key) => errors[key] = void 0);
      const newErrors = validate();
      Object.assign(errors, newErrors);
      if (Object.keys(newErrors).length > 0) {
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }
      isLoading.value = true;
      try {
        const registrationData = { ...formData, otp: "0000" };
        await register(registrationData);
        await router.push("/home");
      } catch (error) {
        console.error("Registration error object:", error);
        if (error.response?.data) {
          console.log("Error Response Data:", error.response.data);
        }
        if (error.response?.data?.errors) {
          const backendErrors = error.response.data.errors;
          let hasFieldErrors = false;
          Object.keys(backendErrors).forEach((key) => {
            const msg = Array.isArray(backendErrors[key]) ? backendErrors[key][0] : backendErrors[key];
            if (Object.prototype.hasOwnProperty.call(errors, key)) {
              console.log(`Setting error for field ${key}:`, msg);
              errors[key] = msg;
              hasFieldErrors = true;
            } else {
              console.log(`Field ${key} not found in errors object, adding to general`);
              errors.general = errors.general ? `${errors.general} ${msg}` : msg;
            }
          });
          if (!hasFieldErrors && !errors.general) {
            errors.general = error.response.data.message || "Validation failed";
          }
          window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
          errors.general = error.response?.data?.message || "Registration failed. Please try again.";
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      } finally {
        isLoading.value = false;
      }
    };
    return (_ctx, _cache) => {
      const _component_router_link = resolveComponent("router-link");
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          _cache[24] || (_cache[24] = createBaseVNode("div", { class: "absolute inset-0" }, [
            createBaseVNode("div", { class: "absolute top-20 left-20 w-80 h-80 bg-blue-400 opacity-20 rounded-full blur-3xl animate-pulse" }),
            createBaseVNode("div", { class: "absolute bottom-20 right-20 w-[450px] h-[450px] bg-sky-300 opacity-25 rounded-full blur-3xl animate-pulse delay-700" })
          ], -1)),
          createBaseVNode("div", _hoisted_3, [
            createVNode(_component_router_link, {
              to: "/",
              class: "inline-block mb-12"
            }, {
              default: withCtx(() => [..._cache[22] || (_cache[22] = [
                createBaseVNode("img", {
                  src: "/images/logo-white.png",
                  alt: "SmartLib Logo",
                  class: "h-16 w-auto transform hover:scale-105 transition-transform duration-300 filter drop-shadow-sm"
                }, null, -1)
              ])]),
              _: 1
            }),
            _cache[23] || (_cache[23] = createStaticVNode('<h1 class="text-5xl font-black mb-6 leading-tight tracking-tight text-white" data-v-90a07363> Join SmartLib<br data-v-90a07363>Today </h1><p class="text-lg text-blue-100/90 mb-10 leading-relaxed" data-v-90a07363> Start your journey to smarter studying with our intelligent library management system. </p><div class="space-y-6" data-v-90a07363><div class="flex items-start space-x-4 bg-white/5 backdrop-blur-md p-4 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors duration-200" data-v-90a07363><div class="flex-shrink-0 w-12 h-12 bg-blue-500/20 flex items-center justify-center border border-blue-400/30 rounded-xl" data-v-90a07363><svg class="w-6 h-6 text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-90a07363><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" data-v-90a07363></path></svg></div><div data-v-90a07363><h4 class="text-base font-bold text-white mb-1" data-v-90a07363>7-Day Free Trial</h4><p class="text-sm text-blue-100/80" data-v-90a07363>Get started with full access for all new students</p></div></div><div class="flex items-start space-x-4 bg-white/5 backdrop-blur-md p-4 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors duration-200" data-v-90a07363><div class="flex-shrink-0 w-12 h-12 bg-sky-500/20 flex items-center justify-center border border-sky-400/30 rounded-xl" data-v-90a07363><svg class="w-6 h-6 text-sky-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-90a07363><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" data-v-90a07363></path></svg></div><div data-v-90a07363><h4 class="text-base font-bold text-white mb-1" data-v-90a07363>Track Your Progress</h4><p class="text-sm text-blue-100/80" data-v-90a07363>Monitor study progress &amp; maintain streaks</p></div></div></div>', 3))
          ])
        ]),
        createBaseVNode("div", _hoisted_4, [
          createBaseVNode("div", _hoisted_5, [
            createBaseVNode("div", _hoisted_6, [
              createVNode(_component_router_link, {
                to: "/",
                class: "inline-block lg:hidden"
              }, {
                default: withCtx(() => [..._cache[25] || (_cache[25] = [
                  createBaseVNode("img", {
                    src: "/images/logo-blue.png",
                    alt: "SmartLib Logo",
                    class: "h-16 w-auto mx-auto mb-6 transform hover:scale-105 transition-transform duration-300 filter drop-shadow-sm"
                  }, null, -1)
                ])]),
                _: 1
              }),
              _cache[26] || (_cache[26] = createBaseVNode("h2", { class: "text-3xl font-extrabold text-slate-950 tracking-tight mb-2" }, " Create Account ", -1)),
              _cache[27] || (_cache[27] = createBaseVNode("p", { class: "text-sm text-slate-500" }, " Fill in your details to get started ", -1))
            ]),
            errors.general ? (openBlock(), createElementBlock("div", _hoisted_7, [
              createBaseVNode("div", _hoisted_8, [
                _cache[28] || (_cache[28] = createBaseVNode("svg", {
                  class: "w-5 h-5 text-red-500 mr-2 flex-shrink-0",
                  fill: "currentColor",
                  viewBox: "0 0 20 20"
                }, [
                  createBaseVNode("path", {
                    "fill-rule": "evenodd",
                    d: "M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z",
                    "clip-rule": "evenodd"
                  })
                ], -1)),
                createBaseVNode("p", _hoisted_9, toDisplayString(errors.general), 1)
              ])
            ])) : createCommentVNode("", true),
            createBaseVNode("form", {
              class: "space-y-6",
              onSubmit: withModifiers(handleSubmit, ["prevent"])
            }, [
              createBaseVNode("div", _hoisted_10, [
                createBaseVNode("div", null, [
                  _cache[29] || (_cache[29] = createBaseVNode("label", {
                    for: "name",
                    class: "block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2"
                  }, " Full Name ", -1)),
                  withDirectives(createBaseVNode("input", {
                    id: "name",
                    name: "name",
                    type: "text",
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => formData.name = $event),
                    onInput: _cache[1] || (_cache[1] = ($event) => clearError("name")),
                    class: normalizeClass([
                      "block w-full px-4 py-3 bg-slate-50/50 border rounded-2xl placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 transition-all duration-200 text-slate-900",
                      errors.name ? "border-red-300 focus:ring-red-500/20 focus:border-red-500" : "border-slate-200 focus:ring-blue-600/20 focus:border-blue-600"
                    ]),
                    placeholder: "John Doe"
                  }, null, 34), [
                    [vModelText, formData.name]
                  ]),
                  errors.name ? (openBlock(), createElementBlock("p", _hoisted_11, toDisplayString(errors.name), 1)) : createCommentVNode("", true)
                ]),
                createBaseVNode("div", null, [
                  _cache[30] || (_cache[30] = createBaseVNode("label", {
                    for: "email",
                    class: "block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2"
                  }, " Email Address ", -1)),
                  withDirectives(createBaseVNode("input", {
                    id: "email",
                    name: "email",
                    type: "email",
                    "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => formData.email = $event),
                    onInput: _cache[3] || (_cache[3] = ($event) => handleInput("email")),
                    onBlur: _cache[4] || (_cache[4] = ($event) => validateField("email")),
                    class: normalizeClass([
                      "block w-full px-4 py-3 bg-slate-50/50 border rounded-2xl placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 transition-all duration-200 text-slate-900",
                      errors.email ? "border-red-300 focus:ring-red-500/20 focus:border-red-500" : "border-slate-200 focus:ring-blue-600/20 focus:border-blue-600"
                    ]),
                    placeholder: "you@example.com"
                  }, null, 34), [
                    [vModelText, formData.email]
                  ]),
                  errors.email ? (openBlock(), createElementBlock("p", _hoisted_12, toDisplayString(errors.email), 1)) : createCommentVNode("", true)
                ]),
                createBaseVNode("div", _hoisted_13, [
                  createBaseVNode("div", null, [
                    _cache[31] || (_cache[31] = createBaseVNode("label", {
                      for: "phone",
                      class: "block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2"
                    }, " Phone Number ", -1)),
                    withDirectives(createBaseVNode("input", {
                      id: "phone",
                      name: "phone",
                      type: "tel",
                      "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => formData.phone = $event),
                      onInput: _cache[6] || (_cache[6] = ($event) => clearError("phone")),
                      class: normalizeClass([
                        "block w-full px-4 py-3 bg-slate-50/50 border rounded-2xl placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 transition-all duration-200 text-slate-900",
                        errors.phone ? "border-red-300 focus:ring-red-500/20 focus:border-red-500" : "border-slate-200 focus:ring-blue-600/20 focus:border-blue-600"
                      ]),
                      placeholder: "03001234567"
                    }, null, 34), [
                      [vModelText, formData.phone]
                    ]),
                    errors.phone ? (openBlock(), createElementBlock("p", _hoisted_14, toDisplayString(errors.phone), 1)) : createCommentVNode("", true)
                  ]),
                  createBaseVNode("div", null, [
                    _cache[32] || (_cache[32] = createBaseVNode("label", {
                      for: "crn",
                      class: "block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2"
                    }, " CRN ", -1)),
                    withDirectives(createBaseVNode("input", {
                      id: "crn",
                      name: "crn",
                      type: "number",
                      "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => formData.crn = $event),
                      onInput: _cache[8] || (_cache[8] = ($event) => handleInput("crn")),
                      onBlur: _cache[9] || (_cache[9] = ($event) => validateField("crn")),
                      class: normalizeClass([
                        "block w-full px-4 py-3 bg-slate-50/50 border rounded-2xl placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 transition-all duration-200 text-slate-900",
                        errors.crn ? "border-red-300 focus:ring-red-500/20 focus:border-red-500" : "border-slate-200 focus:ring-blue-600/20 focus:border-blue-600"
                      ]),
                      placeholder: "e.g. 123456"
                    }, null, 34), [
                      [vModelText, formData.crn]
                    ]),
                    errors.crn ? (openBlock(), createElementBlock("p", _hoisted_15, toDisplayString(errors.crn), 1)) : createCommentVNode("", true)
                  ])
                ]),
                createBaseVNode("div", _hoisted_16, [
                  createBaseVNode("div", null, [
                    _cache[34] || (_cache[34] = createBaseVNode("label", {
                      for: "ca_level",
                      class: "block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2"
                    }, " CA Level ", -1)),
                    withDirectives(createBaseVNode("select", {
                      id: "ca_level",
                      name: "ca_level",
                      "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => formData.ca_level = $event),
                      onChange: _cache[11] || (_cache[11] = ($event) => clearError("ca_level")),
                      class: normalizeClass([
                        "block w-full px-4 py-3 bg-slate-50/50 border rounded-2xl focus:bg-white focus:outline-none focus:ring-2 transition-all duration-200 text-slate-900",
                        errors.ca_level ? "border-red-300 focus:ring-red-500/20 focus:border-red-500" : "border-slate-200 focus:ring-blue-600/20 focus:border-blue-600"
                      ])
                    }, [..._cache[33] || (_cache[33] = [
                      createBaseVNode("option", { value: "" }, "Select Level", -1),
                      createBaseVNode("option", { value: "PRC" }, "PRC", -1),
                      createBaseVNode("option", { value: "CAF" }, "CAF", -1),
                      createBaseVNode("option", { value: "Final" }, "Final", -1)
                    ])], 34), [
                      [vModelSelect, formData.ca_level]
                    ]),
                    errors.ca_level ? (openBlock(), createElementBlock("p", _hoisted_17, toDisplayString(errors.ca_level), 1)) : createCommentVNode("", true)
                  ]),
                  createBaseVNode("div", null, [
                    _cache[36] || (_cache[36] = createBaseVNode("label", {
                      for: "gender",
                      class: "block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2"
                    }, " Gender ", -1)),
                    withDirectives(createBaseVNode("select", {
                      id: "gender",
                      name: "gender",
                      "onUpdate:modelValue": _cache[12] || (_cache[12] = ($event) => formData.gender = $event),
                      onChange: _cache[13] || (_cache[13] = ($event) => clearError("gender")),
                      class: normalizeClass([
                        "block w-full px-4 py-3 bg-slate-50/50 border rounded-2xl focus:bg-white focus:outline-none focus:ring-2 transition-all duration-200 text-slate-900",
                        errors.gender ? "border-red-300 focus:ring-red-500/20 focus:border-red-500" : "border-slate-200 focus:ring-blue-600/20 focus:border-blue-600"
                      ])
                    }, [..._cache[35] || (_cache[35] = [
                      createBaseVNode("option", { value: "" }, "Select Gender", -1),
                      createBaseVNode("option", { value: "male" }, "Male", -1),
                      createBaseVNode("option", { value: "female" }, "Female", -1)
                    ])], 34), [
                      [vModelSelect, formData.gender]
                    ]),
                    errors.gender ? (openBlock(), createElementBlock("p", _hoisted_18, toDisplayString(errors.gender), 1)) : createCommentVNode("", true)
                  ])
                ]),
                createBaseVNode("div", null, [
                  _cache[39] || (_cache[39] = createBaseVNode("label", {
                    for: "password",
                    class: "block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2"
                  }, " Password ", -1)),
                  createBaseVNode("div", _hoisted_19, [
                    withDirectives(createBaseVNode("input", {
                      id: "password",
                      name: "password",
                      type: showPassword.value ? "text" : "password",
                      "onUpdate:modelValue": _cache[14] || (_cache[14] = ($event) => formData.password = $event),
                      onInput: _cache[15] || (_cache[15] = ($event) => clearError("password")),
                      class: normalizeClass([
                        "block w-full px-4 py-3 pr-10 bg-slate-50/50 border rounded-2xl placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 transition-all duration-200 text-slate-900",
                        errors.password ? "border-red-300 focus:ring-red-500/20 focus:border-red-500" : "border-slate-200 focus:ring-blue-600/20 focus:border-blue-600"
                      ]),
                      placeholder: "••••••••"
                    }, null, 42, _hoisted_20), [
                      [vModelDynamic, formData.password]
                    ]),
                    createBaseVNode("button", {
                      type: "button",
                      onClick: _cache[16] || (_cache[16] = ($event) => showPassword.value = !showPassword.value),
                      class: "absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600"
                    }, [
                      showPassword.value ? (openBlock(), createElementBlock("svg", _hoisted_21, [..._cache[37] || (_cache[37] = [
                        createBaseVNode("path", {
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          "stroke-width": "2",
                          d: "M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268-2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                        }, null, -1)
                      ])])) : (openBlock(), createElementBlock("svg", _hoisted_22, [..._cache[38] || (_cache[38] = [
                        createBaseVNode("path", {
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          "stroke-width": "2",
                          d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        }, null, -1),
                        createBaseVNode("path", {
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          "stroke-width": "2",
                          d: "M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        }, null, -1)
                      ])]))
                    ])
                  ]),
                  errors.password ? (openBlock(), createElementBlock("p", _hoisted_23, toDisplayString(errors.password), 1)) : createCommentVNode("", true)
                ]),
                createBaseVNode("div", null, [
                  _cache[42] || (_cache[42] = createBaseVNode("label", {
                    for: "password_confirmation",
                    class: "block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2"
                  }, " Confirm Password ", -1)),
                  createBaseVNode("div", _hoisted_24, [
                    withDirectives(createBaseVNode("input", {
                      id: "password_confirmation",
                      name: "password_confirmation",
                      type: showConfirmPassword.value ? "text" : "password",
                      "onUpdate:modelValue": _cache[17] || (_cache[17] = ($event) => formData.password_confirmation = $event),
                      onInput: _cache[18] || (_cache[18] = ($event) => clearError("password_confirmation")),
                      class: normalizeClass([
                        "block w-full px-4 py-3 pr-10 bg-slate-50/50 border rounded-2xl placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 transition-all duration-200 text-slate-900",
                        errors.password_confirmation ? "border-red-300 focus:ring-red-500/20 focus:border-red-500" : "border-slate-200 focus:ring-blue-600/20 focus:border-blue-600"
                      ]),
                      placeholder: "••••••••"
                    }, null, 42, _hoisted_25), [
                      [vModelDynamic, formData.password_confirmation]
                    ]),
                    createBaseVNode("button", {
                      type: "button",
                      onClick: _cache[19] || (_cache[19] = ($event) => showConfirmPassword.value = !showConfirmPassword.value),
                      class: "absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600"
                    }, [
                      showConfirmPassword.value ? (openBlock(), createElementBlock("svg", _hoisted_26, [..._cache[40] || (_cache[40] = [
                        createBaseVNode("path", {
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          "stroke-width": "2",
                          d: "M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268-2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                        }, null, -1)
                      ])])) : (openBlock(), createElementBlock("svg", _hoisted_27, [..._cache[41] || (_cache[41] = [
                        createBaseVNode("path", {
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          "stroke-width": "2",
                          d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        }, null, -1),
                        createBaseVNode("path", {
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          "stroke-width": "2",
                          d: "M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268-2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        }, null, -1)
                      ])]))
                    ])
                  ]),
                  errors.password_confirmation ? (openBlock(), createElementBlock("p", _hoisted_28, toDisplayString(errors.password_confirmation), 1)) : createCommentVNode("", true)
                ]),
                createBaseVNode("div", _hoisted_29, [
                  withDirectives(createBaseVNode("input", {
                    id: "terms",
                    name: "terms",
                    type: "checkbox",
                    "onUpdate:modelValue": _cache[20] || (_cache[20] = ($event) => formData.terms = $event),
                    onChange: _cache[21] || (_cache[21] = ($event) => clearError("terms")),
                    class: "h-4 w-4 text-blue-600 focus:ring-blue-600/30 border-slate-300 rounded mt-1 cursor-pointer transition-colors"
                  }, null, 544), [
                    [vModelCheckbox, formData.terms]
                  ]),
                  _cache[43] || (_cache[43] = createBaseVNode("label", {
                    for: "terms",
                    class: "ml-2 block text-sm text-slate-700 cursor-pointer font-medium"
                  }, [
                    createTextVNode(" I agree to the "),
                    createBaseVNode("a", {
                      href: "#",
                      class: "font-semibold text-blue-600 hover:text-blue-700 transition-colors"
                    }, "Terms"),
                    createTextVNode(" and "),
                    createBaseVNode("a", {
                      href: "#",
                      class: "font-semibold text-blue-600 hover:text-blue-700 transition-colors"
                    }, "Privacy Policy")
                  ], -1))
                ]),
                errors.terms ? (openBlock(), createElementBlock("p", _hoisted_30, toDisplayString(errors.terms), 1)) : createCommentVNode("", true)
              ]),
              createBaseVNode("button", {
                type: "submit",
                disabled: isLoading.value,
                class: "group w-full flex justify-center py-3 px-4 border border-transparent text-sm font-bold rounded-2xl text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-500/20 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-blue-500/10 hover:shadow-blue-500/20 transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-150"
              }, [
                isLoading.value ? (openBlock(), createElementBlock("div", _hoisted_32, [..._cache[44] || (_cache[44] = [
                  createBaseVNode("svg", {
                    class: "animate-spin -ml-1 mr-3 h-5 w-5 text-white",
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
                  createTextVNode(" Creating Account... ", -1)
                ])])) : (openBlock(), createElementBlock("span", _hoisted_33, "Create Account"))
              ], 8, _hoisted_31),
              createBaseVNode("div", _hoisted_34, [
                createBaseVNode("p", _hoisted_35, [
                  _cache[46] || (_cache[46] = createTextVNode(" Already have an account? ", -1)),
                  createVNode(_component_router_link, {
                    to: "/login",
                    class: "font-bold text-blue-600 hover:text-blue-700 transition-colors"
                  }, {
                    default: withCtx(() => [..._cache[45] || (_cache[45] = [
                      createTextVNode(" Sign in ", -1)
                    ])]),
                    _: 1
                  })
                ])
              ])
            ], 32)
          ])
        ])
      ]);
    };
  }
});
const RegisterForm = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-90a07363"]]);
export {
  RegisterForm as default
};
