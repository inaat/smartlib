import { d as defineComponent, x as useAuth, y as reactive, r as ref, o as onMounted, a as createElementBlock, b as createBaseVNode, f as createVNode, e as createStaticVNode, w as withCtx, g as resolveComponent, T as Transition, z as withModifiers, j as createCommentVNode, p as withDirectives, u as unref, v as vModelText, n as normalizeClass, t as toDisplayString, A as vModelDynamic, h as createBlock, B as vModelCheckbox, i as createTextVNode, C as useRouter, l as openBlock } from "./main-C124sHqx.js";
import { M as Mail } from "./mail-BSWDeJsv.js";
import { L as Lock } from "./lock-Ctz1rL0V.js";
import { E as EyeOff } from "./eye-off-Diw_N8yr.js";
import { E as Eye } from "./eye-DkEb11LU.js";
import { B as BookOpen } from "./book-open-BVgq79sG.js";
import { C as CircleAlert } from "./circle-alert-j0S5RkVw.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
/* empty css               */
import "./createLucideIcon-8y9GOHiU.js";
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
const _hoisted_14 = ["type"];
const _hoisted_15 = {
  key: 0,
  class: "field-error"
};
const _hoisted_16 = { class: "field-checkbox-row" };
const _hoisted_17 = ["disabled"];
const _hoisted_18 = {
  key: 0,
  class: "auth-submit-loading"
};
const _hoisted_19 = { key: 1 };
const _hoisted_20 = { class: "auth-footer-link" };
const _hoisted_21 = { class: "demo-section" };
const _hoisted_22 = { class: "demo-buttons" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "LoginForm",
  setup(__props) {
    const router = useRouter();
    const { login, fetchSettings } = useAuth();
    const formData = reactive({ email: "", password: "", remember: false });
    const errors = ref({
      email: "",
      password: "",
      general: ""
    });
    const isLoading = ref(false);
    const showPassword = ref(false);
    const clearError = (name) => {
      errors.value[name] = "";
    };
    const quickFill = (role) => {
      formData.email = role === "student" ? "student1@smartlib.com" : "librarian@smartlib.com";
      formData.password = "password";
      clearError("email");
      clearError("password");
      clearError("general");
    };
    const validate = () => {
      const e = {};
      if (!formData.email) e.email = "Email address is required";
      else if (!/\S+@\S+\.\S+/.test(formData.email)) e.email = "Enter a valid email address";
      if (!formData.password) e.password = "Password is required";
      else if (formData.password.length < 6) e.password = "Minimum 6 characters";
      return e;
    };
    const handleSubmit = async () => {
      errors.value = { email: "", password: "", general: "" };
      const ne = validate();
      if (Object.keys(ne).length > 0) {
        errors.value.email = ne.email || "";
        errors.value.password = ne.password || "";
        return;
      }
      isLoading.value = true;
      try {
        await login(formData.email, formData.password, formData.remember);
        router.push("/home");
      } catch (error) {
        console.log("LOGIN CATCH - full error response:", error.response);
        console.log("LOGIN CATCH - error.response.data:", error.response?.data);
        console.log("LOGIN CATCH - error.response.data.errors:", error.response?.data?.errors);
        const be = error.response?.data?.errors;
        if (be) {
          errors.value.email = be.email ? Array.isArray(be.email) ? be.email[0] : be.email : "";
          errors.value.password = be.password ? Array.isArray(be.password) ? be.password[0] : be.password : "";
          if (!errors.value.email && !errors.value.password) {
            errors.value.general = error.response?.data?.message || "Invalid email or password.";
          }
        } else {
          errors.value.general = "Invalid email or password.";
        }
      } finally {
        isLoading.value = false;
      }
    };
    onMounted(() => {
      fetchSettings();
    });
    return (_ctx, _cache) => {
      const _component_router_link = resolveComponent("router-link");
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          _cache[10] || (_cache[10] = createBaseVNode("div", { class: "brand-shape brand-shape--1" }, null, -1)),
          _cache[11] || (_cache[11] = createBaseVNode("div", { class: "brand-shape brand-shape--2" }, null, -1)),
          _cache[12] || (_cache[12] = createBaseVNode("div", { class: "brand-shape brand-shape--3" }, null, -1)),
          createBaseVNode("div", _hoisted_3, [
            createVNode(_component_router_link, {
              to: "/",
              class: "brand-logo-link"
            }, {
              default: withCtx(() => [
                createBaseVNode("div", _hoisted_4, [
                  createVNode(unref(BookOpen), { class: "h-6 w-6" })
                ]),
                _cache[8] || (_cache[8] = createBaseVNode("div", { class: "brand-logo-text" }, [
                  createBaseVNode("span", { class: "brand-logo-name" }, "SmartLib"),
                  createBaseVNode("span", { class: "brand-logo-sub" }, "Library Hub")
                ], -1))
              ]),
              _: 1
            }),
            _cache[9] || (_cache[9] = createStaticVNode('<p class="brand-tagline" data-v-84ea751e>Intelligent Library Management System</p><p class="brand-description" data-v-84ea751e> SmartLib is a complete digital platform designed for ICAP libraries to streamline seat booking, automate attendance, manage book catalogues, and provide real-time analytics — empowering both students and administrators with a modern, paperless experience. </p><div class="brand-capabilities" data-v-84ea751e><div class="brand-cap-item" data-v-84ea751e><div class="brand-cap-dot" data-v-84ea751e></div><span data-v-84ea751e>Real-time seat maps with instant QR check-in</span></div><div class="brand-cap-item" data-v-84ea751e><div class="brand-cap-dot" data-v-84ea751e></div><span data-v-84ea751e>Digitised book catalogue and reservations</span></div><div class="brand-cap-item" data-v-84ea751e><div class="brand-cap-dot" data-v-84ea751e></div><span data-v-84ea751e>Automated attendance and study analytics</span></div><div class="brand-cap-item" data-v-84ea751e><div class="brand-cap-dot" data-v-84ea751e></div><span data-v-84ea751e>Subscription plans and payment management</span></div></div>', 3))
          ])
        ]),
        createBaseVNode("div", _hoisted_5, [
          createBaseVNode("div", _hoisted_6, [
            createVNode(_component_router_link, {
              to: "/",
              class: "mobile-logo-link"
            }, {
              default: withCtx(() => [..._cache[13] || (_cache[13] = [
                createBaseVNode("img", {
                  src: "/images/logo-blue.png",
                  alt: "SmartLib",
                  class: "mobile-logo"
                }, null, -1)
              ])]),
              _: 1
            }),
            _cache[24] || (_cache[24] = createBaseVNode("div", { class: "form-header" }, [
              createBaseVNode("h2", { class: "form-title" }, "Welcome back"),
              createBaseVNode("p", { class: "form-subtitle" }, "Enter your credentials to access your dashboard")
            ], -1)),
            createVNode(Transition, { name: "fade" }, {
              default: withCtx(() => [
                errors.value.general ? (openBlock(), createElementBlock("div", _hoisted_7, [
                  createVNode(unref(CircleAlert), { class: "auth-alert-icon" }),
                  createBaseVNode("div", null, [
                    _cache[14] || (_cache[14] = createBaseVNode("span", { class: "auth-alert-title" }, "Sign in failed", -1)),
                    createBaseVNode("p", _hoisted_8, toDisplayString(errors.value.general), 1)
                  ])
                ])) : createCommentVNode("", true)
              ]),
              _: 1
            }),
            createBaseVNode("form", {
              class: "auth-form",
              onSubmit: withModifiers(handleSubmit, ["prevent"])
            }, [
              createBaseVNode("div", _hoisted_9, [
                _cache[15] || (_cache[15] = createBaseVNode("label", {
                  for: "email",
                  class: "field-label"
                }, "Email", -1)),
                createBaseVNode("div", _hoisted_10, [
                  createVNode(unref(Mail), { class: "field-icon" }),
                  withDirectives(createBaseVNode("input", {
                    id: "email",
                    type: "email",
                    autocomplete: "email",
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => formData.email = $event),
                    onInput: _cache[1] || (_cache[1] = ($event) => clearError("email")),
                    class: normalizeClass(["field-input", errors.value.email && "field-input--error"]),
                    placeholder: "student@icap.org.pk"
                  }, null, 34), [
                    [vModelText, formData.email]
                  ])
                ]),
                errors.value.email ? (openBlock(), createElementBlock("p", _hoisted_11, toDisplayString(errors.value.email), 1)) : createCommentVNode("", true)
              ]),
              createBaseVNode("div", _hoisted_12, [
                _cache[16] || (_cache[16] = createBaseVNode("div", { class: "field-label-row" }, [
                  createBaseVNode("label", {
                    for: "password",
                    class: "field-label"
                  }, "Password"),
                  createBaseVNode("a", {
                    href: "#",
                    class: "field-link"
                  }, "Forgot password?")
                ], -1)),
                createBaseVNode("div", _hoisted_13, [
                  createVNode(unref(Lock), { class: "field-icon" }),
                  withDirectives(createBaseVNode("input", {
                    id: "password",
                    type: showPassword.value ? "text" : "password",
                    autocomplete: "current-password",
                    "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => formData.password = $event),
                    onInput: _cache[3] || (_cache[3] = ($event) => clearError("password")),
                    class: normalizeClass(["field-input field-input--password", errors.value.password && "field-input--error"]),
                    placeholder: "••••••••"
                  }, null, 42, _hoisted_14), [
                    [vModelDynamic, formData.password]
                  ]),
                  createBaseVNode("button", {
                    type: "button",
                    onClick: _cache[4] || (_cache[4] = ($event) => showPassword.value = !showPassword.value),
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
                errors.value.password ? (openBlock(), createElementBlock("p", _hoisted_15, toDisplayString(errors.value.password), 1)) : createCommentVNode("", true)
              ]),
              createBaseVNode("div", _hoisted_16, [
                withDirectives(createBaseVNode("input", {
                  id: "remember",
                  type: "checkbox",
                  "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => formData.remember = $event),
                  class: "field-checkbox"
                }, null, 512), [
                  [vModelCheckbox, formData.remember]
                ]),
                _cache[17] || (_cache[17] = createBaseVNode("label", {
                  for: "remember",
                  class: "field-checkbox-label"
                }, "Keep me signed in", -1))
              ]),
              createBaseVNode("button", {
                type: "submit",
                disabled: isLoading.value,
                class: "auth-submit"
              }, [
                isLoading.value ? (openBlock(), createElementBlock("span", _hoisted_18, [..._cache[18] || (_cache[18] = [
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
                  createBaseVNode("span", null, "Signing in…", -1)
                ])])) : (openBlock(), createElementBlock("span", _hoisted_19, "Sign In"))
              ], 8, _hoisted_17),
              createBaseVNode("p", _hoisted_20, [
                _cache[20] || (_cache[20] = createTextVNode(" Don't have an account? ", -1)),
                createVNode(_component_router_link, { to: "/register" }, {
                  default: withCtx(() => [..._cache[19] || (_cache[19] = [
                    createTextVNode("Create free account", -1)
                  ])]),
                  _: 1
                })
              ])
            ], 32),
            createBaseVNode("div", _hoisted_21, [
              _cache[23] || (_cache[23] = createBaseVNode("span", { class: "demo-label" }, "Demo Logins", -1)),
              createBaseVNode("div", _hoisted_22, [
                createBaseVNode("button", {
                  type: "button",
                  onClick: _cache[6] || (_cache[6] = ($event) => quickFill("student")),
                  class: "demo-btn"
                }, [..._cache[21] || (_cache[21] = [
                  createBaseVNode("div", { class: "demo-btn-dot demo-btn-dot--blue" }, null, -1),
                  createBaseVNode("span", null, "Student", -1)
                ])]),
                createBaseVNode("button", {
                  type: "button",
                  onClick: _cache[7] || (_cache[7] = ($event) => quickFill("librarian")),
                  class: "demo-btn"
                }, [..._cache[22] || (_cache[22] = [
                  createBaseVNode("div", { class: "demo-btn-dot demo-btn-dot--emerald" }, null, -1),
                  createBaseVNode("span", null, "Librarian", -1)
                ])])
              ])
            ])
          ])
        ])
      ]);
    };
  }
});
const LoginForm = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-84ea751e"]]);
export {
  LoginForm as default
};
