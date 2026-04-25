import { d as defineComponent, p as useAuth, q as reactive, o as onMounted, A as useRouter, r as ref, c as createElementBlock, b as createBaseVNode, f as createVNode, e as createStaticVNode, w as withCtx, g as resolveComponent, m as createCommentVNode, t as toDisplayString, s as withModifiers, v as withDirectives, x as vModelText, n as normalizeClass, B as vModelSelect, y as vModelDynamic, z as vModelCheckbox, j as createTextVNode, i as openBlock } from "./main-DCJXrkf-.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
/* empty css               */
const _hoisted_1 = { class: "min-h-screen flex bg-white" };
const _hoisted_2 = { class: "hidden lg:flex lg:flex-1 bg-white border-r border-gray-200 relative" };
const _hoisted_3 = { class: "flex flex-col justify-center px-16 max-w-xl mx-auto" };
const _hoisted_4 = { class: "flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-gray-100" };
const _hoisted_5 = { class: "max-w-md w-full space-y-8" };
const _hoisted_6 = {
  key: 0,
  class: "bg-red-50 border-l-4 border-red-500 p-4 rounded-lg animate-shake"
};
const _hoisted_7 = { class: "flex items-center" };
const _hoisted_8 = { class: "text-sm text-red-700" };
const _hoisted_9 = { class: "space-y-4" };
const _hoisted_10 = {
  key: 0,
  class: "mt-1 text-sm text-red-600"
};
const _hoisted_11 = {
  key: 0,
  class: "mt-1 text-sm text-red-600"
};
const _hoisted_12 = { class: "grid grid-cols-2 gap-4" };
const _hoisted_13 = {
  key: 0,
  class: "mt-1 text-sm text-red-600"
};
const _hoisted_14 = {
  key: 0,
  class: "mt-1 text-sm text-red-600"
};
const _hoisted_15 = { class: "grid grid-cols-2 gap-4" };
const _hoisted_16 = {
  key: 0,
  class: "mt-1 text-sm text-red-600"
};
const _hoisted_17 = {
  key: 0,
  class: "mt-1 text-sm text-red-600"
};
const _hoisted_18 = { class: "relative" };
const _hoisted_19 = ["type"];
const _hoisted_20 = {
  key: 0,
  class: "h-5 w-5",
  fill: "none",
  stroke: "currentColor",
  viewBox: "0 0 24 24"
};
const _hoisted_21 = {
  key: 1,
  class: "h-5 w-5",
  fill: "none",
  stroke: "currentColor",
  viewBox: "0 0 24 24"
};
const _hoisted_22 = {
  key: 0,
  class: "mt-1 text-sm text-red-600"
};
const _hoisted_23 = { class: "relative" };
const _hoisted_24 = ["type"];
const _hoisted_25 = {
  key: 0,
  class: "h-5 w-5",
  fill: "none",
  stroke: "currentColor",
  viewBox: "0 0 24 24"
};
const _hoisted_26 = {
  key: 1,
  class: "h-5 w-5",
  fill: "none",
  stroke: "currentColor",
  viewBox: "0 0 24 24"
};
const _hoisted_27 = {
  key: 0,
  class: "mt-1 text-sm text-red-600"
};
const _hoisted_28 = { class: "flex items-start" };
const _hoisted_29 = {
  key: 0,
  class: "text-sm text-red-600"
};
const _hoisted_30 = ["disabled"];
const _hoisted_31 = {
  key: 0,
  class: "flex items-center"
};
const _hoisted_32 = { key: 1 };
const _hoisted_33 = { class: "text-center" };
const _hoisted_34 = { class: "text-sm text-gray-600" };
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
      if (field === "crn" && !/^CRN\d{6}$/.test(value)) {
        errors.crn = "CRN must be in format CRN000000";
        return;
      }
      try {
        const response = await checkUniqueness(field, value);
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
      } else if (!/^CRN\d{6}$/.test(formData.crn)) {
        newErrors.crn = "CRN must be in format CRN000000";
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
          createBaseVNode("div", _hoisted_3, [
            createVNode(_component_router_link, {
              to: "/",
              class: "logo mb-12"
            }, {
              default: withCtx(() => [..._cache[22] || (_cache[22] = [
                createBaseVNode("div", { class: "logo-icon" }, "SL", -1),
                createBaseVNode("span", null, "Smart Library", -1)
              ])]),
              _: 1
            }),
            _cache[23] || (_cache[23] = createStaticVNode('<h1 class="text-5xl font-bold mb-6 leading-tight text-black" data-v-d36afd2e> Join Smart Library<br data-v-d36afd2e>Today </h1><p class="text-xl text-gray-600 mb-12 leading-relaxed" data-v-d36afd2e> Start your journey to smarter studying with our intelligent library management system. </p><div class="space-y-6" data-v-d36afd2e><div class="flex items-start space-x-4" data-v-d36afd2e><div class="flex-shrink-0 w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center" data-v-d36afd2e><svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-d36afd2e><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" data-v-d36afd2e></path></svg></div><div data-v-d36afd2e><h4 class="text-lg font-semibold text-black mb-1" data-v-d36afd2e>7-Day Free Trial</h4><p class="text-gray-600" data-v-d36afd2e>Get started with full access for new students</p></div></div><div class="flex items-start space-x-4" data-v-d36afd2e><div class="flex-shrink-0 w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center" data-v-d36afd2e><svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-d36afd2e><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" data-v-d36afd2e></path></svg></div><div data-v-d36afd2e><h4 class="text-lg font-semibold text-black mb-1" data-v-d36afd2e>Track Your Progress</h4><p class="text-gray-600" data-v-d36afd2e>Monitor study progress &amp; maintain streaks</p></div></div><div class="flex items-start space-x-4" data-v-d36afd2e><div class="flex-shrink-0 w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center" data-v-d36afd2e><svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-d36afd2e><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" data-v-d36afd2e></path></svg></div><div data-v-d36afd2e><h4 class="text-lg font-semibold text-black mb-1" data-v-d36afd2e>Join Study Groups</h4><p class="text-gray-600" data-v-d36afd2e>Connect with peers and attend events</p></div></div></div>', 3))
          ])
        ]),
        createBaseVNode("div", _hoisted_4, [
          createBaseVNode("div", _hoisted_5, [
            _cache[43] || (_cache[43] = createStaticVNode('<div class="text-center" data-v-d36afd2e><div class="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-indigo-600 to-purple-700 rounded-2xl shadow-lg mb-4 transform hover:scale-105 transition-transform" data-v-d36afd2e><svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-d36afd2e><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" data-v-d36afd2e></path></svg></div><h2 class="text-3xl font-bold text-gray-900 mb-2" data-v-d36afd2e> Create Account </h2><p class="text-gray-600" data-v-d36afd2e> Fill in your details to get started </p></div>', 1)),
            errors.general ? (openBlock(), createElementBlock("div", _hoisted_6, [
              createBaseVNode("div", _hoisted_7, [
                _cache[24] || (_cache[24] = createBaseVNode("svg", {
                  class: "w-5 h-5 text-red-500 mr-2",
                  fill: "currentColor",
                  viewBox: "0 0 20 20"
                }, [
                  createBaseVNode("path", {
                    "fill-rule": "evenodd",
                    d: "M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z",
                    "clip-rule": "evenodd"
                  })
                ], -1)),
                createBaseVNode("p", _hoisted_8, toDisplayString(errors.general), 1)
              ])
            ])) : createCommentVNode("", true),
            createBaseVNode("form", {
              class: "mt-8 space-y-6",
              onSubmit: withModifiers(handleSubmit, ["prevent"])
            }, [
              createBaseVNode("div", _hoisted_9, [
                createBaseVNode("div", null, [
                  _cache[25] || (_cache[25] = createBaseVNode("label", {
                    for: "name",
                    class: "block text-sm font-medium text-gray-700 mb-2"
                  }, " Full Name ", -1)),
                  withDirectives(createBaseVNode("input", {
                    id: "name",
                    name: "name",
                    type: "text",
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => formData.name = $event),
                    onInput: _cache[1] || (_cache[1] = ($event) => clearError("name")),
                    class: normalizeClass(["block w-full px-3 py-3 border rounded-xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 transition-all", errors.name ? "border-red-300" : "border-gray-300"]),
                    placeholder: "John Doe"
                  }, null, 34), [
                    [vModelText, formData.name]
                  ]),
                  errors.name ? (openBlock(), createElementBlock("p", _hoisted_10, toDisplayString(errors.name), 1)) : createCommentVNode("", true)
                ]),
                createBaseVNode("div", null, [
                  _cache[26] || (_cache[26] = createBaseVNode("label", {
                    for: "email",
                    class: "block text-sm font-medium text-gray-700 mb-2"
                  }, " Email Address ", -1)),
                  withDirectives(createBaseVNode("input", {
                    id: "email",
                    name: "email",
                    type: "email",
                    "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => formData.email = $event),
                    onInput: _cache[3] || (_cache[3] = ($event) => handleInput("email")),
                    onBlur: _cache[4] || (_cache[4] = ($event) => validateField("email")),
                    class: normalizeClass(["block w-full px-3 py-3 border rounded-xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 transition-all", errors.email ? "border-red-300" : "border-gray-300"]),
                    placeholder: "you@example.com"
                  }, null, 34), [
                    [vModelText, formData.email]
                  ]),
                  errors.email ? (openBlock(), createElementBlock("p", _hoisted_11, toDisplayString(errors.email), 1)) : createCommentVNode("", true)
                ]),
                createBaseVNode("div", _hoisted_12, [
                  createBaseVNode("div", null, [
                    _cache[27] || (_cache[27] = createBaseVNode("label", {
                      for: "phone",
                      class: "block text-sm font-medium text-gray-700 mb-2"
                    }, " Phone Number ", -1)),
                    withDirectives(createBaseVNode("input", {
                      id: "phone",
                      name: "phone",
                      type: "tel",
                      "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => formData.phone = $event),
                      onInput: _cache[6] || (_cache[6] = ($event) => clearError("phone")),
                      class: normalizeClass(["block w-full px-3 py-3 border rounded-xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 transition-all", errors.phone ? "border-red-300" : "border-gray-300"]),
                      placeholder: "03001234567"
                    }, null, 34), [
                      [vModelText, formData.phone]
                    ]),
                    errors.phone ? (openBlock(), createElementBlock("p", _hoisted_13, toDisplayString(errors.phone), 1)) : createCommentVNode("", true)
                  ]),
                  createBaseVNode("div", null, [
                    _cache[28] || (_cache[28] = createBaseVNode("label", {
                      for: "crn",
                      class: "block text-sm font-medium text-gray-700 mb-2"
                    }, " CRN ", -1)),
                    withDirectives(createBaseVNode("input", {
                      id: "crn",
                      name: "crn",
                      type: "text",
                      "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => formData.crn = $event),
                      onInput: _cache[8] || (_cache[8] = ($event) => handleInput("crn")),
                      onBlur: _cache[9] || (_cache[9] = ($event) => validateField("crn")),
                      class: normalizeClass(["block w-full px-3 py-3 border rounded-xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 transition-all", errors.crn ? "border-red-300" : "border-gray-300"]),
                      placeholder: "CRN000001"
                    }, null, 34), [
                      [vModelText, formData.crn]
                    ]),
                    errors.crn ? (openBlock(), createElementBlock("p", _hoisted_14, toDisplayString(errors.crn), 1)) : createCommentVNode("", true)
                  ])
                ]),
                createBaseVNode("div", _hoisted_15, [
                  createBaseVNode("div", null, [
                    _cache[30] || (_cache[30] = createBaseVNode("label", {
                      for: "ca_level",
                      class: "block text-sm font-medium text-gray-700 mb-2"
                    }, " CA Level ", -1)),
                    withDirectives(createBaseVNode("select", {
                      id: "ca_level",
                      name: "ca_level",
                      "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => formData.ca_level = $event),
                      onChange: _cache[11] || (_cache[11] = ($event) => clearError("ca_level")),
                      class: normalizeClass(["block w-full px-3 py-3 border rounded-xl shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 transition-all", errors.ca_level ? "border-red-300" : "border-gray-300"])
                    }, [..._cache[29] || (_cache[29] = [
                      createBaseVNode("option", { value: "" }, "Select CA Level", -1),
                      createBaseVNode("option", { value: "PRC" }, "PRC", -1),
                      createBaseVNode("option", { value: "CAF" }, "CAF", -1),
                      createBaseVNode("option", { value: "Final" }, "Final", -1)
                    ])], 34), [
                      [vModelSelect, formData.ca_level]
                    ]),
                    errors.ca_level ? (openBlock(), createElementBlock("p", _hoisted_16, toDisplayString(errors.ca_level), 1)) : createCommentVNode("", true)
                  ]),
                  createBaseVNode("div", null, [
                    _cache[32] || (_cache[32] = createBaseVNode("label", {
                      for: "gender",
                      class: "block text-sm font-medium text-gray-700 mb-2"
                    }, " Gender ", -1)),
                    withDirectives(createBaseVNode("select", {
                      id: "gender",
                      name: "gender",
                      "onUpdate:modelValue": _cache[12] || (_cache[12] = ($event) => formData.gender = $event),
                      onChange: _cache[13] || (_cache[13] = ($event) => clearError("gender")),
                      class: normalizeClass(["block w-full px-3 py-3 border rounded-xl shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 transition-all", errors.gender ? "border-red-300" : "border-gray-300"])
                    }, [..._cache[31] || (_cache[31] = [
                      createBaseVNode("option", { value: "" }, "Select Gender", -1),
                      createBaseVNode("option", { value: "male" }, "Male", -1),
                      createBaseVNode("option", { value: "female" }, "Female", -1)
                    ])], 34), [
                      [vModelSelect, formData.gender]
                    ]),
                    errors.gender ? (openBlock(), createElementBlock("p", _hoisted_17, toDisplayString(errors.gender), 1)) : createCommentVNode("", true)
                  ])
                ]),
                createBaseVNode("div", null, [
                  _cache[35] || (_cache[35] = createBaseVNode("label", {
                    for: "password",
                    class: "block text-sm font-medium text-gray-700 mb-2"
                  }, " Password ", -1)),
                  createBaseVNode("div", _hoisted_18, [
                    withDirectives(createBaseVNode("input", {
                      id: "password",
                      name: "password",
                      type: showPassword.value ? "text" : "password",
                      "onUpdate:modelValue": _cache[14] || (_cache[14] = ($event) => formData.password = $event),
                      onInput: _cache[15] || (_cache[15] = ($event) => clearError("password")),
                      class: normalizeClass(["block w-full px-3 py-3 pr-10 border rounded-xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 transition-all", errors.password ? "border-red-300" : "border-gray-300"]),
                      placeholder: "••••••••"
                    }, null, 42, _hoisted_19), [
                      [vModelDynamic, formData.password]
                    ]),
                    createBaseVNode("button", {
                      type: "button",
                      onClick: _cache[16] || (_cache[16] = ($event) => showPassword.value = !showPassword.value),
                      class: "absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
                    }, [
                      showPassword.value ? (openBlock(), createElementBlock("svg", _hoisted_20, [..._cache[33] || (_cache[33] = [
                        createBaseVNode("path", {
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          "stroke-width": "2",
                          d: "M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                        }, null, -1)
                      ])])) : (openBlock(), createElementBlock("svg", _hoisted_21, [..._cache[34] || (_cache[34] = [
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
                  errors.password ? (openBlock(), createElementBlock("p", _hoisted_22, toDisplayString(errors.password), 1)) : createCommentVNode("", true)
                ]),
                createBaseVNode("div", null, [
                  _cache[38] || (_cache[38] = createBaseVNode("label", {
                    for: "password_confirmation",
                    class: "block text-sm font-medium text-gray-700 mb-2"
                  }, " Confirm Password ", -1)),
                  createBaseVNode("div", _hoisted_23, [
                    withDirectives(createBaseVNode("input", {
                      id: "password_confirmation",
                      name: "password_confirmation",
                      type: showConfirmPassword.value ? "text" : "password",
                      "onUpdate:modelValue": _cache[17] || (_cache[17] = ($event) => formData.password_confirmation = $event),
                      onInput: _cache[18] || (_cache[18] = ($event) => clearError("password_confirmation")),
                      class: normalizeClass(["block w-full px-3 py-3 pr-10 border rounded-xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 transition-all", errors.password_confirmation ? "border-red-300" : "border-gray-300"]),
                      placeholder: "••••••••"
                    }, null, 42, _hoisted_24), [
                      [vModelDynamic, formData.password_confirmation]
                    ]),
                    createBaseVNode("button", {
                      type: "button",
                      onClick: _cache[19] || (_cache[19] = ($event) => showConfirmPassword.value = !showConfirmPassword.value),
                      class: "absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
                    }, [
                      showConfirmPassword.value ? (openBlock(), createElementBlock("svg", _hoisted_25, [..._cache[36] || (_cache[36] = [
                        createBaseVNode("path", {
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          "stroke-width": "2",
                          d: "M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                        }, null, -1)
                      ])])) : (openBlock(), createElementBlock("svg", _hoisted_26, [..._cache[37] || (_cache[37] = [
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
                  errors.password_confirmation ? (openBlock(), createElementBlock("p", _hoisted_27, toDisplayString(errors.password_confirmation), 1)) : createCommentVNode("", true)
                ]),
                createBaseVNode("div", _hoisted_28, [
                  withDirectives(createBaseVNode("input", {
                    id: "terms",
                    name: "terms",
                    type: "checkbox",
                    "onUpdate:modelValue": _cache[20] || (_cache[20] = ($event) => formData.terms = $event),
                    onChange: _cache[21] || (_cache[21] = ($event) => clearError("terms")),
                    class: "h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded mt-1 cursor-pointer"
                  }, null, 544), [
                    [vModelCheckbox, formData.terms]
                  ]),
                  _cache[39] || (_cache[39] = createBaseVNode("label", {
                    for: "terms",
                    class: "ml-2 block text-sm text-gray-700 cursor-pointer"
                  }, [
                    createTextVNode(" I agree to the "),
                    createBaseVNode("a", {
                      href: "#",
                      class: "text-indigo-600 hover:text-indigo-500"
                    }, "Terms and Conditions"),
                    createTextVNode(" and "),
                    createBaseVNode("a", {
                      href: "#",
                      class: "text-indigo-600 hover:text-indigo-500"
                    }, "Privacy Policy")
                  ], -1))
                ]),
                errors.terms ? (openBlock(), createElementBlock("p", _hoisted_29, toDisplayString(errors.terms), 1)) : createCommentVNode("", true)
              ]),
              createBaseVNode("button", {
                type: "submit",
                disabled: isLoading.value,
                class: "group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-xl text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all"
              }, [
                isLoading.value ? (openBlock(), createElementBlock("div", _hoisted_31, [..._cache[40] || (_cache[40] = [
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
                ])])) : (openBlock(), createElementBlock("span", _hoisted_32, "Create Account"))
              ], 8, _hoisted_30),
              createBaseVNode("div", _hoisted_33, [
                createBaseVNode("p", _hoisted_34, [
                  _cache[42] || (_cache[42] = createTextVNode(" Already have an account? ", -1)),
                  createVNode(_component_router_link, {
                    to: "/login",
                    class: "font-medium text-indigo-600 hover:text-indigo-500 transition-colors"
                  }, {
                    default: withCtx(() => [..._cache[41] || (_cache[41] = [
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
const RegisterForm = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-d36afd2e"]]);
export {
  RegisterForm as default
};
