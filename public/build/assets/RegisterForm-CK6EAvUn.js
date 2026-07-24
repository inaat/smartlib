import { d as defineComponent, x as useAuth, y as reactive, o as onMounted, C as useRouter, r as ref, a as createElementBlock, b as createBaseVNode, f as createVNode, e as createStaticVNode, w as withCtx, g as resolveComponent, j as createCommentVNode, u as unref, t as toDisplayString, z as withModifiers, p as withDirectives, v as vModelText, n as normalizeClass, D as vModelSelect, A as vModelDynamic, h as createBlock, B as vModelCheckbox, i as createTextVNode, l as openBlock } from "./main-CP29_5Dg.js";
import { C as CircleAlert } from "./circle-alert-CkJil15G.js";
import { U as User } from "./user-q-rSNpCr.js";
import { M as Mail } from "./mail-Bf8U_Og2.js";
import { E as EyeOff } from "./eye-off-jnR0JijP.js";
import { E as Eye } from "./eye-BwruUWmZ.js";
import { B as BookOpen } from "./book-open-C5CD1i_v.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
/* empty css               */
import "./createLucideIcon-DTPudzWg.js";
const _hoisted_1 = { class: "auth-page" };
const _hoisted_2 = { class: "auth-brand-panel" };
const _hoisted_3 = { class: "brand-content" };
const _hoisted_4 = { class: "brand-logo-icon" };
const _hoisted_5 = { class: "auth-form-panel" };
const _hoisted_6 = { class: "auth-form-wrapper" };
const _hoisted_7 = {
  key: 0,
  class: "auth-alert"
};
const _hoisted_8 = { class: "auth-alert-msg" };
const _hoisted_9 = { class: "field-group" };
const _hoisted_10 = { class: "field-input-wrap" };
const _hoisted_11 = {
  key: 0,
  class: "field-error"
};
const _hoisted_12 = { class: "field-group" };
const _hoisted_13 = { class: "field-input-wrap" };
const _hoisted_14 = {
  key: 0,
  class: "field-error"
};
const _hoisted_15 = { class: "field-row" };
const _hoisted_16 = { class: "field-group" };
const _hoisted_17 = {
  key: 0,
  class: "field-error"
};
const _hoisted_18 = { class: "field-group" };
const _hoisted_19 = {
  key: 0,
  class: "field-error"
};
const _hoisted_20 = { class: "field-row" };
const _hoisted_21 = { class: "field-group" };
const _hoisted_22 = {
  key: 0,
  class: "field-error"
};
const _hoisted_23 = { class: "field-group" };
const _hoisted_24 = {
  key: 0,
  class: "field-error"
};
const _hoisted_25 = { class: "field-row" };
const _hoisted_26 = { class: "field-group" };
const _hoisted_27 = { class: "field-input-wrap" };
const _hoisted_28 = ["type"];
const _hoisted_29 = {
  key: 0,
  class: "field-error"
};
const _hoisted_30 = { class: "field-group" };
const _hoisted_31 = { class: "field-input-wrap" };
const _hoisted_32 = ["type"];
const _hoisted_33 = {
  key: 0,
  class: "field-error"
};
const _hoisted_34 = { class: "field-checkbox-row" };
const _hoisted_35 = {
  key: 0,
  class: "field-error",
  style: { "margin-top": "-0.5rem" }
};
const _hoisted_36 = ["disabled"];
const _hoisted_37 = {
  key: 0,
  class: "auth-submit-loading"
};
const _hoisted_38 = { key: 1 };
const _hoisted_39 = { class: "auth-footer-link" };
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
        errors.crn = "CRN must be a number";
        return;
      }
      try {
        const response = await checkUniqueness(field, String(value));
        errors[field] = response.exists ? response.message : void 0;
      } catch (error) {
        console.error(`Error validating ${field}:`, error);
      }
    };
    const validate = () => {
      const e = {};
      if (!formData.name) e.name = "Name is required";
      if (!formData.email) e.email = "Email is required";
      else if (!/\S+@\S+\.\S+/.test(formData.email)) e.email = "Email is invalid";
      if (!formData.phone) e.phone = "Phone is required";
      else if (!/^03\d{9}$/.test(formData.phone)) e.phone = "Format: 03XXXXXXXXX";
      if (!formData.crn) e.crn = "CRN is required";
      else if (!/^\d+$/.test(formData.crn)) e.crn = "Must be a number";
      if (!formData.ca_level) e.ca_level = "Required";
      if (!formData.gender) e.gender = "Required";
      if (!formData.password) e.password = "Required";
      else if (formData.password.length < 8) e.password = "Min 8 characters";
      if (formData.password !== formData.password_confirmation) e.password_confirmation = "Passwords don't match";
      if (!formData.terms) e.terms = "You must accept the terms";
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
          errors.general = error.response?.data?.message || "Registration failed.";
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
          _cache[24] || (_cache[24] = createBaseVNode("div", { class: "brand-shape brand-shape--1" }, null, -1)),
          _cache[25] || (_cache[25] = createBaseVNode("div", { class: "brand-shape brand-shape--2" }, null, -1)),
          _cache[26] || (_cache[26] = createBaseVNode("div", { class: "brand-shape brand-shape--3" }, null, -1)),
          createBaseVNode("div", _hoisted_3, [
            createVNode(_component_router_link, {
              to: "/",
              class: "brand-logo-link"
            }, {
              default: withCtx(() => [
                createBaseVNode("div", _hoisted_4, [
                  createVNode(unref(BookOpen), { class: "h-6 w-6" })
                ]),
                _cache[22] || (_cache[22] = createBaseVNode("div", { class: "brand-logo-text" }, [
                  createBaseVNode("span", { class: "brand-logo-name" }, "SmartLib"),
                  createBaseVNode("span", { class: "brand-logo-sub" }, "Library Hub")
                ], -1))
              ]),
              _: 1
            }),
            _cache[23] || (_cache[23] = createStaticVNode('<p class="brand-tagline" data-v-ca26b499>Join SmartLib Today</p><p class="brand-description" data-v-ca26b499> Create your account to unlock real-time seat reservations, browse the digital book catalogue, check library availability, and manage your student dashboard with ease. </p><div class="brand-capabilities" data-v-ca26b499><div class="brand-cap-item" data-v-ca26b499><div class="brand-cap-dot" data-v-ca26b499></div><span data-v-ca26b499>Real-time seat maps with instant QR check-in</span></div><div class="brand-cap-item" data-v-ca26b499><div class="brand-cap-dot" data-v-ca26b499></div><span data-v-ca26b499>Digitised book catalogue and reservations</span></div><div class="brand-cap-item" data-v-ca26b499><div class="brand-cap-dot" data-v-ca26b499></div><span data-v-ca26b499>Automated attendance and study analytics</span></div><div class="brand-cap-item" data-v-ca26b499><div class="brand-cap-dot" data-v-ca26b499></div><span data-v-ca26b499>Subscription plans and payment management</span></div></div>', 3))
          ])
        ]),
        createBaseVNode("div", _hoisted_5, [
          createBaseVNode("div", _hoisted_6, [
            createVNode(_component_router_link, {
              to: "/",
              class: "mobile-logo-link"
            }, {
              default: withCtx(() => [..._cache[27] || (_cache[27] = [
                createBaseVNode("img", {
                  src: "/images/logo-blue.png",
                  alt: "SmartLib",
                  class: "mobile-logo"
                }, null, -1)
              ])]),
              _: 1
            }),
            _cache[42] || (_cache[42] = createBaseVNode("div", { class: "form-header" }, [
              createBaseVNode("h2", { class: "form-title" }, "Join SmartLib Today"),
              createBaseVNode("p", { class: "form-subtitle" }, "Create your account and start your learning journey")
            ], -1)),
            errors.general ? (openBlock(), createElementBlock("div", _hoisted_7, [
              createVNode(unref(CircleAlert), { class: "auth-alert-icon" }),
              createBaseVNode("p", _hoisted_8, toDisplayString(errors.general), 1)
            ])) : createCommentVNode("", true),
            createBaseVNode("form", {
              class: "auth-form",
              onSubmit: withModifiers(handleSubmit, ["prevent"])
            }, [
              createBaseVNode("div", _hoisted_9, [
                _cache[28] || (_cache[28] = createBaseVNode("label", {
                  for: "name",
                  class: "field-label"
                }, "Full Name", -1)),
                createBaseVNode("div", _hoisted_10, [
                  createVNode(unref(User), { class: "field-icon" }),
                  withDirectives(createBaseVNode("input", {
                    id: "name",
                    type: "text",
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => formData.name = $event),
                    onInput: _cache[1] || (_cache[1] = ($event) => clearError("name")),
                    class: normalizeClass(["field-input", errors.name && "field-input--error"]),
                    placeholder: "John Doe"
                  }, null, 34), [
                    [vModelText, formData.name]
                  ])
                ]),
                errors.name ? (openBlock(), createElementBlock("p", _hoisted_11, toDisplayString(errors.name), 1)) : createCommentVNode("", true)
              ]),
              createBaseVNode("div", _hoisted_12, [
                _cache[29] || (_cache[29] = createBaseVNode("label", {
                  for: "reg-email",
                  class: "field-label"
                }, "Email Address", -1)),
                createBaseVNode("div", _hoisted_13, [
                  createVNode(unref(Mail), { class: "field-icon" }),
                  withDirectives(createBaseVNode("input", {
                    id: "reg-email",
                    type: "email",
                    "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => formData.email = $event),
                    onInput: _cache[3] || (_cache[3] = ($event) => handleInput("email")),
                    onBlur: _cache[4] || (_cache[4] = ($event) => validateField("email")),
                    class: normalizeClass(["field-input", errors.email && "field-input--error"]),
                    placeholder: "you@example.com"
                  }, null, 34), [
                    [vModelText, formData.email]
                  ])
                ]),
                errors.email ? (openBlock(), createElementBlock("p", _hoisted_14, toDisplayString(errors.email), 1)) : createCommentVNode("", true)
              ]),
              createBaseVNode("div", _hoisted_15, [
                createBaseVNode("div", _hoisted_16, [
                  _cache[30] || (_cache[30] = createBaseVNode("label", {
                    for: "phone",
                    class: "field-label"
                  }, "Phone", -1)),
                  withDirectives(createBaseVNode("input", {
                    id: "phone",
                    type: "tel",
                    "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => formData.phone = $event),
                    onInput: _cache[6] || (_cache[6] = ($event) => clearError("phone")),
                    class: normalizeClass(["field-input field-input--plain", errors.phone && "field-input--error"]),
                    placeholder: "03001234567"
                  }, null, 34), [
                    [vModelText, formData.phone]
                  ]),
                  errors.phone ? (openBlock(), createElementBlock("p", _hoisted_17, toDisplayString(errors.phone), 1)) : createCommentVNode("", true)
                ]),
                createBaseVNode("div", _hoisted_18, [
                  _cache[31] || (_cache[31] = createBaseVNode("label", {
                    for: "crn",
                    class: "field-label"
                  }, "CRN", -1)),
                  withDirectives(createBaseVNode("input", {
                    id: "crn",
                    type: "number",
                    "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => formData.crn = $event),
                    onInput: _cache[8] || (_cache[8] = ($event) => handleInput("crn")),
                    onBlur: _cache[9] || (_cache[9] = ($event) => validateField("crn")),
                    class: normalizeClass(["field-input field-input--plain", errors.crn && "field-input--error"]),
                    placeholder: "e.g. 123456"
                  }, null, 34), [
                    [vModelText, formData.crn]
                  ]),
                  errors.crn ? (openBlock(), createElementBlock("p", _hoisted_19, toDisplayString(errors.crn), 1)) : createCommentVNode("", true)
                ])
              ]),
              createBaseVNode("div", _hoisted_20, [
                createBaseVNode("div", _hoisted_21, [
                  _cache[33] || (_cache[33] = createBaseVNode("label", {
                    for: "ca_level",
                    class: "field-label"
                  }, "CA Level", -1)),
                  withDirectives(createBaseVNode("select", {
                    id: "ca_level",
                    "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => formData.ca_level = $event),
                    onChange: _cache[11] || (_cache[11] = ($event) => clearError("ca_level")),
                    class: normalizeClass(["field-input field-input--plain", errors.ca_level && "field-input--error"])
                  }, [..._cache[32] || (_cache[32] = [
                    createBaseVNode("option", { value: "" }, "Select Level", -1),
                    createBaseVNode("option", { value: "PRC" }, "PRC", -1),
                    createBaseVNode("option", { value: "CAF" }, "CAF", -1),
                    createBaseVNode("option", { value: "Final" }, "Final", -1)
                  ])], 34), [
                    [vModelSelect, formData.ca_level]
                  ]),
                  errors.ca_level ? (openBlock(), createElementBlock("p", _hoisted_22, toDisplayString(errors.ca_level), 1)) : createCommentVNode("", true)
                ]),
                createBaseVNode("div", _hoisted_23, [
                  _cache[35] || (_cache[35] = createBaseVNode("label", {
                    for: "gender",
                    class: "field-label"
                  }, "Gender", -1)),
                  withDirectives(createBaseVNode("select", {
                    id: "gender",
                    "onUpdate:modelValue": _cache[12] || (_cache[12] = ($event) => formData.gender = $event),
                    onChange: _cache[13] || (_cache[13] = ($event) => clearError("gender")),
                    class: normalizeClass(["field-input field-input--plain", errors.gender && "field-input--error"])
                  }, [..._cache[34] || (_cache[34] = [
                    createBaseVNode("option", { value: "" }, "Select", -1),
                    createBaseVNode("option", { value: "male" }, "Male", -1),
                    createBaseVNode("option", { value: "female" }, "Female", -1)
                  ])], 34), [
                    [vModelSelect, formData.gender]
                  ]),
                  errors.gender ? (openBlock(), createElementBlock("p", _hoisted_24, toDisplayString(errors.gender), 1)) : createCommentVNode("", true)
                ])
              ]),
              createBaseVNode("div", _hoisted_25, [
                createBaseVNode("div", _hoisted_26, [
                  _cache[36] || (_cache[36] = createBaseVNode("label", {
                    for: "reg-password",
                    class: "field-label"
                  }, "Password", -1)),
                  createBaseVNode("div", _hoisted_27, [
                    withDirectives(createBaseVNode("input", {
                      id: "reg-password",
                      type: showPassword.value ? "text" : "password",
                      "onUpdate:modelValue": _cache[14] || (_cache[14] = ($event) => formData.password = $event),
                      onInput: _cache[15] || (_cache[15] = ($event) => clearError("password")),
                      class: normalizeClass(["field-input field-input--plain field-input--pr", errors.password && "field-input--error"]),
                      placeholder: "••••••••"
                    }, null, 42, _hoisted_28), [
                      [vModelDynamic, formData.password]
                    ]),
                    createBaseVNode("button", {
                      type: "button",
                      onClick: _cache[16] || (_cache[16] = ($event) => showPassword.value = !showPassword.value),
                      class: "field-toggle"
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
                  errors.password ? (openBlock(), createElementBlock("p", _hoisted_29, toDisplayString(errors.password), 1)) : createCommentVNode("", true)
                ]),
                createBaseVNode("div", _hoisted_30, [
                  _cache[37] || (_cache[37] = createBaseVNode("label", {
                    for: "password_confirmation",
                    class: "field-label"
                  }, "Confirm", -1)),
                  createBaseVNode("div", _hoisted_31, [
                    withDirectives(createBaseVNode("input", {
                      id: "password_confirmation",
                      type: showConfirmPassword.value ? "text" : "password",
                      "onUpdate:modelValue": _cache[17] || (_cache[17] = ($event) => formData.password_confirmation = $event),
                      onInput: _cache[18] || (_cache[18] = ($event) => clearError("password_confirmation")),
                      class: normalizeClass(["field-input field-input--plain field-input--pr", errors.password_confirmation && "field-input--error"]),
                      placeholder: "••••••••"
                    }, null, 42, _hoisted_32), [
                      [vModelDynamic, formData.password_confirmation]
                    ]),
                    createBaseVNode("button", {
                      type: "button",
                      onClick: _cache[19] || (_cache[19] = ($event) => showConfirmPassword.value = !showConfirmPassword.value),
                      class: "field-toggle"
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
                  errors.password_confirmation ? (openBlock(), createElementBlock("p", _hoisted_33, toDisplayString(errors.password_confirmation), 1)) : createCommentVNode("", true)
                ])
              ]),
              createBaseVNode("div", _hoisted_34, [
                withDirectives(createBaseVNode("input", {
                  id: "terms",
                  type: "checkbox",
                  "onUpdate:modelValue": _cache[20] || (_cache[20] = ($event) => formData.terms = $event),
                  onChange: _cache[21] || (_cache[21] = ($event) => clearError("terms")),
                  class: "field-checkbox"
                }, null, 544), [
                  [vModelCheckbox, formData.terms]
                ]),
                _cache[38] || (_cache[38] = createBaseVNode("label", {
                  for: "terms",
                  class: "field-checkbox-label"
                }, [
                  createTextVNode(" I agree to the "),
                  createBaseVNode("a", { href: "#" }, "Terms"),
                  createTextVNode(" and "),
                  createBaseVNode("a", { href: "#" }, "Privacy Policy")
                ], -1))
              ]),
              errors.terms ? (openBlock(), createElementBlock("p", _hoisted_35, toDisplayString(errors.terms), 1)) : createCommentVNode("", true),
              createBaseVNode("button", {
                type: "submit",
                disabled: isLoading.value,
                class: "auth-submit"
              }, [
                isLoading.value ? (openBlock(), createElementBlock("span", _hoisted_37, [..._cache[39] || (_cache[39] = [
                  createBaseVNode("svg", {
                    class: "animate-spin h-4 w-4",
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
                  createBaseVNode("span", null, "Creating account…", -1)
                ])])) : (openBlock(), createElementBlock("span", _hoisted_38, "Create Account"))
              ], 8, _hoisted_36),
              createBaseVNode("p", _hoisted_39, [
                _cache[41] || (_cache[41] = createTextVNode(" Already have an account? ", -1)),
                createVNode(_component_router_link, { to: "/login" }, {
                  default: withCtx(() => [..._cache[40] || (_cache[40] = [
                    createTextVNode("Sign in", -1)
                  ])]),
                  _: 1
                })
              ])
            ], 32)
          ])
        ])
      ]);
    };
  }
});
const RegisterForm = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-ca26b499"]]);
export {
  RegisterForm as default
};
