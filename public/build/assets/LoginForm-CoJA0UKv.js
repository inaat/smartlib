import { d as defineComponent, z as useAuth, A as reactive, r as ref, o as onMounted, b as createElementBlock, e as createBaseVNode, g as createVNode, w as withCtx, h as resolveComponent, t as toDisplayString, T as Transition, B as withModifiers, p as createCommentVNode, s as withDirectives, u as unref, v as vModelText, n as normalizeClass, D as vModelDynamic, i as createBlock, E as vModelCheckbox, j as createTextVNode, f as createStaticVNode, G as useRouter, m as openBlock, _ as _export_sfc } from "./main-BeUqjoax.js";
import { M as Mail } from "./mail-CdJEFECh.js";
import { L as Lock } from "./lock-CC7ENFPD.js";
import { E as EyeOff } from "./eye-off-m5drfbQr.js";
import { E as Eye } from "./eye-DWPQPwXh.js";
import { A as ArrowRight } from "./arrow-right-IyqLp6mR.js";
import { C as Check } from "./check-CZ9YO2_d.js";
import { B as BookOpen } from "./book-open-DpY8sw2V.js";
import { C as CircleAlert } from "./circle-alert-jeFdHGPj.js";
/* empty css               */
const _hoisted_1 = { class: "h-screen w-full flex bg-white font-sans antialiased text-slate-900 overflow-hidden" };
const _hoisted_2 = { class: "w-full lg:w-1/2 h-full flex flex-col justify-center items-center px-6 sm:px-10 lg:px-14 py-6 overflow-y-auto bg-white" };
const _hoisted_3 = { class: "w-full max-w-sm my-auto" };
const _hoisted_4 = { class: "h-8 w-8 rounded-lg bg-blue-600 flex items-center justify-center text-white shadow-sm group-hover:scale-105 transition-transform" };
const _hoisted_5 = { class: "text-lg font-bold text-slate-900 tracking-tight" };
const _hoisted_6 = { class: "mb-5" };
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
  class: "text-[11px] font-medium text-rose-600 mt-1 pl-1"
};
const _hoisted_13 = { class: "relative" };
const _hoisted_14 = ["type"];
const _hoisted_15 = {
  key: 0,
  class: "text-[11px] font-medium text-rose-600 mt-1 pl-1"
};
const _hoisted_16 = { class: "flex items-center space-x-2 pt-0.5" };
const _hoisted_17 = ["disabled"];
const _hoisted_18 = {
  key: 0,
  class: "flex items-center space-x-1.5"
};
const _hoisted_19 = {
  key: 1,
  class: "flex items-center space-x-1.5"
};
const _hoisted_20 = { class: "grid grid-cols-2 gap-2.5" };
const _hoisted_21 = { class: "text-center text-xs font-normal text-slate-500 mt-5" };
const _hoisted_22 = { class: "hidden lg:flex lg:w-1/2 h-full bg-blue-600 p-10 lg:p-14 flex-col justify-center items-center text-white relative overflow-y-auto" };
const _hoisted_23 = { class: "max-w-md w-full my-auto" };
const _hoisted_24 = { class: "space-y-3 mb-8" };
const _hoisted_25 = { class: "flex items-center space-x-3" };
const _hoisted_26 = { class: "h-4.5 w-4.5 rounded-full bg-white/20 flex items-center justify-center text-white flex-shrink-0" };
const _hoisted_27 = { class: "flex items-center space-x-3" };
const _hoisted_28 = { class: "h-4.5 w-4.5 rounded-full bg-white/20 flex items-center justify-center text-white flex-shrink-0" };
const _hoisted_29 = { class: "flex items-center space-x-3" };
const _hoisted_30 = { class: "h-4.5 w-4.5 rounded-full bg-white/20 flex items-center justify-center text-white flex-shrink-0" };
const _hoisted_31 = { class: "flex items-center space-x-3" };
const _hoisted_32 = { class: "h-4.5 w-4.5 rounded-full bg-white/20 flex items-center justify-center text-white flex-shrink-0" };
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
      else if (formData.password.length < 6) e.password = "Minimum 6 characters required";
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
        const be = error.response?.data?.errors;
        if (be) {
          errors.value.email = be.email ? Array.isArray(be.email) ? be.email[0] : be.email : "";
          errors.value.password = be.password ? Array.isArray(be.password) ? be.password[0] : be.password : "";
          if (!errors.value.email && !errors.value.password) {
            errors.value.general = error.response?.data?.message || "Invalid email or password.";
          }
        } else {
          errors.value.general = error.response?.data?.message || "Invalid email or password credentials.";
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
          createBaseVNode("div", _hoisted_3, [
            createVNode(_component_router_link, {
              to: "/",
              class: "inline-flex items-center space-x-2 mb-6 group"
            }, {
              default: withCtx(() => [
                createBaseVNode("div", _hoisted_4, [
                  createVNode(unref(BookOpen), { class: "h-4.5 w-4.5" })
                ]),
                createBaseVNode("span", _hoisted_5, toDisplayString(_ctx.appName), 1)
              ]),
              _: 1
            }),
            createBaseVNode("div", _hoisted_6, [
              _cache[8] || (_cache[8] = createBaseVNode("h1", { class: "text-2xl font-bold text-slate-900 tracking-tight mb-1" }, "Welcome back", -1)),
              createBaseVNode("p", _hoisted_7, "Sign in to your " + toDisplayString(_ctx.appName) + " account to continue", 1)
            ]),
            createVNode(Transition, { name: "fade" }, {
              default: withCtx(() => [
                _ctx.maintenanceMode ? (openBlock(), createElementBlock("div", _hoisted_8, [
                  createVNode(unref(CircleAlert), { class: "h-4 w-4 text-amber-600 flex-shrink-0 mt-0.5" }),
                  _cache[9] || (_cache[9] = createBaseVNode("div", null, [
                    createBaseVNode("h5", { class: "text-[11px] font-semibold text-amber-800 uppercase tracking-wide" }, "Maintenance Mode Active"),
                    createBaseVNode("p", { class: "text-xs text-amber-700 mt-0.5 leading-relaxed" }, "System is under maintenance. Access is currently restricted to administrators.")
                  ], -1))
                ])) : createCommentVNode("", true)
              ]),
              _: 1
            }),
            createVNode(Transition, { name: "fade" }, {
              default: withCtx(() => [
                errors.value.general ? (openBlock(), createElementBlock("div", _hoisted_9, [
                  createVNode(unref(CircleAlert), { class: "h-4 w-4 text-rose-600 flex-shrink-0 mt-0.5" }),
                  createBaseVNode("div", null, [
                    _cache[10] || (_cache[10] = createBaseVNode("h5", { class: "text-[11px] font-semibold text-rose-800 uppercase tracking-wide" }, "Sign In Failed", -1)),
                    createBaseVNode("p", _hoisted_10, toDisplayString(errors.value.general), 1)
                  ])
                ])) : createCommentVNode("", true)
              ]),
              _: 1
            }),
            createBaseVNode("form", {
              onSubmit: withModifiers(handleSubmit, ["prevent"]),
              class: "space-y-3.5"
            }, [
              createBaseVNode("div", null, [
                _cache[11] || (_cache[11] = createBaseVNode("label", {
                  for: "email",
                  class: "block text-xs font-semibold text-slate-700 mb-1"
                }, "Email address", -1)),
                createBaseVNode("div", _hoisted_11, [
                  createVNode(unref(Mail), { class: "absolute left-3 top-2.5 h-4 w-4 text-slate-400 pointer-events-none" }),
                  withDirectives(createBaseVNode("input", {
                    id: "email",
                    type: "email",
                    autocomplete: "email",
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => formData.email = $event),
                    onInput: _cache[1] || (_cache[1] = ($event) => clearError("email")),
                    class: normalizeClass([
                      "w-full pl-9 pr-3.5 py-2 rounded-lg border bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-500/10 text-xs font-normal transition-all",
                      errors.value.email ? "border-rose-400 bg-rose-50/20" : "border-slate-200"
                    ]),
                    placeholder: "student1@smartlib.com"
                  }, null, 34), [
                    [vModelText, formData.email]
                  ])
                ]),
                errors.value.email ? (openBlock(), createElementBlock("p", _hoisted_12, toDisplayString(errors.value.email), 1)) : createCommentVNode("", true)
              ]),
              createBaseVNode("div", null, [
                _cache[12] || (_cache[12] = createBaseVNode("div", { class: "flex items-center justify-between mb-1" }, [
                  createBaseVNode("label", {
                    for: "password",
                    class: "block text-xs font-semibold text-slate-700"
                  }, "Password"),
                  createBaseVNode("a", {
                    href: "#",
                    class: "text-xs font-semibold text-blue-600 hover:text-blue-700 hover:underline"
                  }, "Forgot password?")
                ], -1)),
                createBaseVNode("div", _hoisted_13, [
                  createVNode(unref(Lock), { class: "absolute left-3 top-2.5 h-4 w-4 text-slate-400 pointer-events-none" }),
                  withDirectives(createBaseVNode("input", {
                    id: "password",
                    type: showPassword.value ? "text" : "password",
                    autocomplete: "current-password",
                    "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => formData.password = $event),
                    onInput: _cache[3] || (_cache[3] = ($event) => clearError("password")),
                    class: normalizeClass([
                      "w-full pl-9 pr-9 py-2 rounded-lg border bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-500/10 text-xs font-normal transition-all",
                      errors.value.password ? "border-rose-400 bg-rose-50/20" : "border-slate-200"
                    ]),
                    placeholder: "••••••••"
                  }, null, 42, _hoisted_14), [
                    [vModelDynamic, formData.password]
                  ]),
                  createBaseVNode("button", {
                    type: "button",
                    onClick: _cache[4] || (_cache[4] = ($event) => showPassword.value = !showPassword.value),
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
                errors.value.password ? (openBlock(), createElementBlock("p", _hoisted_15, toDisplayString(errors.value.password), 1)) : createCommentVNode("", true)
              ]),
              createBaseVNode("div", _hoisted_16, [
                withDirectives(createBaseVNode("input", {
                  id: "remember",
                  type: "checkbox",
                  "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => formData.remember = $event),
                  class: "h-3.5 w-3.5 rounded border-slate-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
                }, null, 512), [
                  [vModelCheckbox, formData.remember]
                ]),
                _cache[13] || (_cache[13] = createBaseVNode("label", {
                  for: "remember",
                  class: "text-xs font-medium text-slate-600 cursor-pointer select-none"
                }, "Remember me", -1))
              ]),
              createBaseVNode("button", {
                type: "submit",
                disabled: isLoading.value,
                class: "w-full py-2.5 px-4 rounded-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 active:scale-[0.99] shadow-sm transition-all text-xs flex items-center justify-center space-x-1.5"
              }, [
                isLoading.value ? (openBlock(), createElementBlock("span", _hoisted_18, [..._cache[14] || (_cache[14] = [
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
                  createBaseVNode("span", null, "Signing in...", -1)
                ])])) : (openBlock(), createElementBlock("span", _hoisted_19, [
                  _cache[15] || (_cache[15] = createBaseVNode("span", null, "Sign in", -1)),
                  createVNode(unref(ArrowRight), { class: "h-3.5 w-3.5" })
                ]))
              ], 8, _hoisted_17)
            ], 32),
            _cache[20] || (_cache[20] = createBaseVNode("div", { class: "relative my-5 text-center" }, [
              createBaseVNode("div", { class: "absolute inset-0 flex items-center" }, [
                createBaseVNode("div", { class: "w-full border-t border-slate-200" })
              ]),
              createBaseVNode("span", { class: "relative px-2.5 text-[11px] font-medium text-slate-400 bg-white" }, "Quick Demo Logins")
            ], -1)),
            createBaseVNode("div", _hoisted_20, [
              createBaseVNode("button", {
                type: "button",
                onClick: _cache[6] || (_cache[6] = ($event) => quickFill("student")),
                class: "py-2 px-3 border border-slate-200 hover:border-slate-300 rounded-lg bg-white text-xs font-medium text-slate-700 flex items-center justify-center space-x-2 transition-all shadow-2xs group"
              }, [..._cache[16] || (_cache[16] = [
                createBaseVNode("span", { class: "h-1.5 w-1.5 rounded-full bg-blue-600" }, null, -1),
                createBaseVNode("span", null, "Student Demo", -1)
              ])]),
              createBaseVNode("button", {
                type: "button",
                onClick: _cache[7] || (_cache[7] = ($event) => quickFill("librarian")),
                class: "py-2 px-3 border border-slate-200 hover:border-slate-300 rounded-lg bg-white text-xs font-medium text-slate-700 flex items-center justify-center space-x-2 transition-all shadow-2xs group"
              }, [..._cache[17] || (_cache[17] = [
                createBaseVNode("span", { class: "h-1.5 w-1.5 rounded-full bg-emerald-500" }, null, -1),
                createBaseVNode("span", null, "Librarian Demo", -1)
              ])])
            ]),
            createBaseVNode("p", _hoisted_21, [
              _cache[19] || (_cache[19] = createTextVNode(" Don't have an account? ", -1)),
              createVNode(_component_router_link, {
                to: "/register",
                class: "font-semibold text-blue-600 hover:text-blue-700 hover:underline ml-1"
              }, {
                default: withCtx(() => [..._cache[18] || (_cache[18] = [
                  createTextVNode("Sign up for free", -1)
                ])]),
                _: 1
              })
            ])
          ])
        ]),
        createBaseVNode("div", _hoisted_22, [
          createBaseVNode("div", _hoisted_23, [
            _cache[25] || (_cache[25] = createBaseVNode("h2", { class: "text-2xl sm:text-3xl font-bold text-white leading-snug tracking-tight mb-3" }, " Empowering Modern Libraries & Students ", -1)),
            _cache[26] || (_cache[26] = createBaseVNode("p", { class: "text-xs sm:text-sm text-blue-100/90 font-normal leading-relaxed mb-6" }, " SmartLib is an intelligent library management platform built to streamline seat bookings, digitise book catalogues, automate QR entrance attendance, and deliver real-time study analytics for students and administrators. ", -1)),
            createBaseVNode("div", _hoisted_24, [
              createBaseVNode("div", _hoisted_25, [
                createBaseVNode("div", _hoisted_26, [
                  createVNode(unref(Check), { class: "h-2.5 w-2.5 stroke-[3]" })
                ]),
                _cache[21] || (_cache[21] = createBaseVNode("span", { class: "text-xs sm:text-sm font-medium text-white" }, "Real-time floor seat map & desk reservations", -1))
              ]),
              createBaseVNode("div", _hoisted_27, [
                createBaseVNode("div", _hoisted_28, [
                  createVNode(unref(Check), { class: "h-2.5 w-2.5 stroke-[3]" })
                ]),
                _cache[22] || (_cache[22] = createBaseVNode("span", { class: "text-xs sm:text-sm font-medium text-white" }, "Touchless QR code entrance check-in", -1))
              ]),
              createBaseVNode("div", _hoisted_29, [
                createBaseVNode("div", _hoisted_30, [
                  createVNode(unref(Check), { class: "h-2.5 w-2.5 stroke-[3]" })
                ]),
                _cache[23] || (_cache[23] = createBaseVNode("span", { class: "text-xs sm:text-sm font-medium text-white" }, "Digitised catalogue search & book reservations", -1))
              ]),
              createBaseVNode("div", _hoisted_31, [
                createBaseVNode("div", _hoisted_32, [
                  createVNode(unref(Check), { class: "h-2.5 w-2.5 stroke-[3]" })
                ]),
                _cache[24] || (_cache[24] = createBaseVNode("span", { class: "text-xs sm:text-sm font-medium text-white" }, "Automated attendance logging & study analytics", -1))
              ])
            ]),
            _cache[27] || (_cache[27] = createStaticVNode('<div class="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 shadow-md" data-v-2ae0e511><p class="text-xs italic font-normal text-white/95 leading-relaxed mb-3" data-v-2ae0e511> &quot;SmartLib has modernized our entire library workflow. Students can check seat availability in real time while administrators manage attendance effortlessly.&quot; </p><div class="flex items-center space-x-2.5" data-v-2ae0e511><div class="h-8 w-8 rounded-full bg-white/20 border border-white/30 flex items-center justify-center font-bold text-white text-xs" data-v-2ae0e511> SL </div><div data-v-2ae0e511><h4 class="text-xs font-semibold text-white leading-none" data-v-2ae0e511>SmartLib Hub</h4><p class="text-[11px] text-blue-200 font-normal mt-0.5" data-v-2ae0e511>ICAP Library Management Platform</p></div></div></div>', 1))
          ])
        ])
      ]);
    };
  }
});
const LoginForm = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-2ae0e511"]]);
export {
  LoginForm as default
};
