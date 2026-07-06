import { d as defineComponent, x as useAuth, y as reactive, r as ref, o as onMounted, a as createElementBlock, b as createBaseVNode, f as createVNode, e as createStaticVNode, w as withCtx, g as resolveComponent, T as Transition, z as withModifiers, l as createCommentVNode, p as withDirectives, u as unref, v as vModelText, n as normalizeClass, t as toDisplayString, A as vModelDynamic, h as createBlock, B as vModelCheckbox, i as createTextVNode, C as useRouter, k as openBlock } from "./main-BV94XoeK.js";
import { M as Mail } from "./mail-t4jE-yzG.js";
import { L as Lock } from "./lock-D4S5aIlI.js";
import { c as createLucideIcon } from "./createLucideIcon-CmaEOm5I.js";
import { E as Eye } from "./eye-C2ShREp1.js";
import { S as Sparkles } from "./sparkles-FOMRQBVF.js";
import { M as MapPin } from "./map-pin-CW-zEwb2.js";
import { C as Clock } from "./clock-BERatuZr.js";
import { B as BookOpen } from "./book-open-C-J0cv2v.js";
import { C as CircleAlert } from "./circle-alert-G71fn9_g.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
/* empty css               */
const EyeOff = createLucideIcon("eye-off", [
  [
    "path",
    {
      d: "M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",
      key: "ct8e1f"
    }
  ],
  ["path", { d: "M14.084 14.158a3 3 0 0 1-4.242-4.242", key: "151rxh" }],
  [
    "path",
    {
      d: "M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",
      key: "13bj9a"
    }
  ],
  ["path", { d: "m2 2 20 20", key: "1ooewy" }]
]);
const _hoisted_1 = { class: "min-h-screen flex font-sans bg-white text-slate-800" };
const _hoisted_2 = { class: "flex-1 flex flex-col justify-center py-12 px-6 sm:px-12 lg:flex-none lg:w-[480px] xl:w-[540px] bg-slate-50/30 border-r border-slate-100" };
const _hoisted_3 = { class: "mx-auto w-full max-w-md" };
const _hoisted_4 = { class: "flex flex-col items-start text-left mb-10" };
const _hoisted_5 = { class: "h-11 w-11 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform" };
const _hoisted_6 = {
  key: 0,
  class: "mb-6 p-4 bg-red-500/10 border border-red-200/60 rounded-2xl flex items-start space-x-3 text-red-800 animate-shake"
};
const _hoisted_7 = { class: "text-xs text-red-700/90 mt-1 leading-relaxed" };
const _hoisted_8 = { class: "space-y-2" };
const _hoisted_9 = { class: "relative" };
const _hoisted_10 = { class: "absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400" };
const _hoisted_11 = {
  key: 0,
  class: "text-[11px] font-semibold text-red-600 pl-1"
};
const _hoisted_12 = { class: "space-y-2" };
const _hoisted_13 = { class: "relative" };
const _hoisted_14 = { class: "absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400" };
const _hoisted_15 = ["type"];
const _hoisted_16 = {
  key: 0,
  class: "text-[11px] font-semibold text-red-600 pl-1"
};
const _hoisted_17 = { class: "flex items-center" };
const _hoisted_18 = ["disabled"];
const _hoisted_19 = {
  key: 0,
  class: "flex items-center space-x-2"
};
const _hoisted_20 = { key: 1 };
const _hoisted_21 = { class: "text-xs font-semibold text-slate-500 text-center mt-6" };
const _hoisted_22 = { class: "hidden lg:flex lg:flex-1 bg-blue-600 relative overflow-hidden items-center justify-center p-12" };
const _hoisted_23 = { class: "relative z-10 max-w-md text-white text-left" };
const _hoisted_24 = { class: "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold bg-white/10 border border-white/15 text-blue-100 uppercase tracking-widest mb-8" };
const _hoisted_25 = { class: "perspective-box relative w-full" };
const _hoisted_26 = { class: "visual-mock-card-3d bg-white/95 backdrop-blur-md border border-white/20 rounded-3xl p-6 shadow-2xl text-slate-800 text-left" };
const _hoisted_27 = { class: "space-y-3" };
const _hoisted_28 = { class: "flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100" };
const _hoisted_29 = { class: "flex items-center space-x-3" };
const _hoisted_30 = { class: "h-8.5 w-8.5 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600" };
const _hoisted_31 = { class: "flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100" };
const _hoisted_32 = { class: "flex items-center space-x-3" };
const _hoisted_33 = { class: "h-8.5 w-8.5 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "LoginForm",
  setup(__props) {
    const router = useRouter();
    const { login, fetchSettings } = useAuth();
    const formData = reactive({
      email: "",
      password: "",
      remember: false
    });
    const errors = reactive({});
    const isLoading = ref(false);
    const showPassword = ref(false);
    const clearError = (name) => {
      errors[name] = void 0;
    };
    const validate = () => {
      const newErrors = {};
      if (!formData.email) {
        newErrors.email = "Email address is required";
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = "Enter a valid email address";
      }
      if (!formData.password) {
        newErrors.password = "Password is required";
      } else if (formData.password.length < 6) {
        newErrors.password = "Password must be at least 6 characters";
      }
      return newErrors;
    };
    const handleSubmit = async () => {
      const newErrors = validate();
      Object.assign(errors, { email: void 0, password: void 0, general: void 0 }, newErrors);
      if (Object.keys(newErrors).length > 0) {
        return;
      }
      isLoading.value = true;
      try {
        await login(formData.email, formData.password, formData.remember);
        router.push("/home");
      } catch (error) {
        errors.general = error.response?.data?.message || "The email or password you entered is incorrect. Please verify and try again.";
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
            createBaseVNode("div", _hoisted_4, [
              createVNode(_component_router_link, {
                to: "/",
                class: "flex items-center space-x-2.5 group"
              }, {
                default: withCtx(() => [
                  createBaseVNode("div", _hoisted_5, [
                    createVNode(unref(BookOpen), { class: "h-6 w-6" })
                  ]),
                  _cache[6] || (_cache[6] = createBaseVNode("div", { class: "flex flex-col" }, [
                    createBaseVNode("span", { class: "text-xl font-extrabold text-slate-900 leading-none tracking-tight" }, "SmartLib"),
                    createBaseVNode("span", { class: "text-[10px] font-semibold text-blue-600 tracking-wider uppercase mt-0.5" }, "ICAP Library Hub")
                  ], -1))
                ]),
                _: 1
              })
            ]),
            _cache[14] || (_cache[14] = createBaseVNode("div", { class: "text-left mb-8" }, [
              createBaseVNode("h2", { class: "text-3xl font-black text-slate-900 tracking-tight" }, "Welcome Back"),
              createBaseVNode("p", { class: "text-sm text-slate-500 mt-2 font-medium" }, " Sign in to access your study desk and digital catalog account. ")
            ], -1)),
            createVNode(Transition, { name: "fade" }, {
              default: withCtx(() => [
                errors.general ? (openBlock(), createElementBlock("div", _hoisted_6, [
                  createVNode(unref(CircleAlert), { class: "h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" }),
                  createBaseVNode("div", null, [
                    _cache[7] || (_cache[7] = createBaseVNode("h4", { class: "text-xs font-bold" }, "Authentication Failed", -1)),
                    createBaseVNode("p", _hoisted_7, toDisplayString(errors.general), 1)
                  ])
                ])) : createCommentVNode("", true)
              ]),
              _: 1
            }),
            createBaseVNode("form", {
              class: "space-y-5 text-left",
              onSubmit: withModifiers(handleSubmit, ["prevent"])
            }, [
              createBaseVNode("div", _hoisted_8, [
                _cache[8] || (_cache[8] = createBaseVNode("label", {
                  for: "email",
                  class: "text-xs font-bold text-slate-500 uppercase tracking-wider"
                }, "Email Address", -1)),
                createBaseVNode("div", _hoisted_9, [
                  createBaseVNode("div", _hoisted_10, [
                    createVNode(unref(Mail), { class: "h-4.5 w-4.5" })
                  ]),
                  withDirectives(createBaseVNode("input", {
                    id: "email",
                    name: "email",
                    type: "email",
                    autocomplete: "email",
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => formData.email = $event),
                    onInput: _cache[1] || (_cache[1] = ($event) => clearError("email")),
                    class: normalizeClass([
                      "block w-full pl-11 pr-4 py-3.5 bg-white border rounded-2xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-4 focus:ring-blue-500/10 transition-all text-sm font-semibold",
                      errors.email ? "border-red-400 focus:border-red-550" : "border-slate-200 focus:border-blue-600"
                    ]),
                    placeholder: "student@icap.org.pk"
                  }, null, 34), [
                    [vModelText, formData.email]
                  ])
                ]),
                errors.email ? (openBlock(), createElementBlock("p", _hoisted_11, toDisplayString(errors.email), 1)) : createCommentVNode("", true)
              ]),
              createBaseVNode("div", _hoisted_12, [
                _cache[9] || (_cache[9] = createBaseVNode("div", { class: "flex justify-between items-center" }, [
                  createBaseVNode("label", {
                    for: "password",
                    class: "text-xs font-bold text-slate-500 uppercase tracking-wider"
                  }, "Password"),
                  createBaseVNode("a", {
                    href: "#",
                    class: "text-xs font-bold text-blue-600 hover:text-blue-700 transition-colors"
                  }, "Forgot?")
                ], -1)),
                createBaseVNode("div", _hoisted_13, [
                  createBaseVNode("div", _hoisted_14, [
                    createVNode(unref(Lock), { class: "h-4.5 w-4.5" })
                  ]),
                  withDirectives(createBaseVNode("input", {
                    id: "password",
                    name: "password",
                    type: showPassword.value ? "text" : "password",
                    autocomplete: "current-password",
                    "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => formData.password = $event),
                    onInput: _cache[3] || (_cache[3] = ($event) => clearError("password")),
                    class: normalizeClass([
                      "block w-full pl-11 pr-11 py-3.5 bg-white border rounded-2xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-4 focus:ring-blue-500/10 transition-all text-sm font-semibold",
                      errors.password ? "border-red-400 focus:border-red-550" : "border-slate-200 focus:border-blue-600"
                    ]),
                    placeholder: "••••••••"
                  }, null, 42, _hoisted_15), [
                    [vModelDynamic, formData.password]
                  ]),
                  createBaseVNode("button", {
                    type: "button",
                    onClick: _cache[4] || (_cache[4] = ($event) => showPassword.value = !showPassword.value),
                    class: "absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-slate-600 transition-colors"
                  }, [
                    showPassword.value ? (openBlock(), createBlock(unref(EyeOff), {
                      key: 0,
                      class: "h-4.5 w-4.5"
                    })) : (openBlock(), createBlock(unref(Eye), {
                      key: 1,
                      class: "h-4.5 w-4.5"
                    }))
                  ])
                ]),
                errors.password ? (openBlock(), createElementBlock("p", _hoisted_16, toDisplayString(errors.password), 1)) : createCommentVNode("", true)
              ]),
              createBaseVNode("div", _hoisted_17, [
                withDirectives(createBaseVNode("input", {
                  id: "remember",
                  type: "checkbox",
                  "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => formData.remember = $event),
                  class: "h-4.5 w-4.5 text-blue-600 border-slate-400 rounded focus:ring-blue-500/20 cursor-pointer"
                }, null, 512), [
                  [vModelCheckbox, formData.remember]
                ]),
                _cache[10] || (_cache[10] = createBaseVNode("label", {
                  for: "remember",
                  class: "ml-2.5 block text-xs font-bold text-slate-600 cursor-pointer"
                }, " Keep me signed in ", -1))
              ]),
              createBaseVNode("button", {
                type: "submit",
                disabled: isLoading.value,
                class: "w-full py-4 rounded-2xl text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 active:scale-98 shadow-lg shadow-blue-500/15 hover:shadow-blue-500/25 transition-all flex items-center justify-center space-x-2 disabled:opacity-60 disabled:cursor-not-allowed"
              }, [
                isLoading.value ? (openBlock(), createElementBlock("span", _hoisted_19, [..._cache[11] || (_cache[11] = [
                  createBaseVNode("svg", {
                    class: "animate-spin h-4 w-4 text-white",
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
                ])])) : (openBlock(), createElementBlock("span", _hoisted_20, "Sign In"))
              ], 8, _hoisted_18),
              createBaseVNode("p", _hoisted_21, [
                _cache[13] || (_cache[13] = createTextVNode(" Don't have an account? ", -1)),
                createVNode(_component_router_link, {
                  to: "/register",
                  class: "text-blue-600 font-bold hover:text-blue-700 transition-colors"
                }, {
                  default: withCtx(() => [..._cache[12] || (_cache[12] = [
                    createTextVNode("Create Free Account", -1)
                  ])]),
                  _: 1
                })
              ])
            ], 32),
            _cache[15] || (_cache[15] = createStaticVNode('<div class="mt-8 p-4 bg-slate-50 border border-slate-200/80 rounded-2xl text-left" data-v-8ba3b780><p class="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3" data-v-8ba3b780>Academic Demo Logins</p><div class="grid grid-cols-2 gap-4 text-[11px] text-slate-600" data-v-8ba3b780><div data-v-8ba3b780><p class="font-bold text-slate-800" data-v-8ba3b780>Librarian Access</p><p class="mt-0.5 text-slate-500 select-all" data-v-8ba3b780>librarian1@smartlib.com</p></div><div data-v-8ba3b780><p class="font-bold text-slate-800" data-v-8ba3b780>Student Access</p><p class="mt-0.5 text-slate-500 select-all" data-v-8ba3b780>student1@smartlib.com</p></div></div><div class="border-t border-slate-200/80 mt-3 pt-2.5 flex justify-between items-center text-[10px]" data-v-8ba3b780><span class="font-bold text-slate-500" data-v-8ba3b780>Demo Password:</span><span class="font-bold bg-blue-50 text-blue-600 border border-blue-200 px-2.5 py-0.5 rounded-full select-all" data-v-8ba3b780>password</span></div></div>', 1))
          ])
        ]),
        createBaseVNode("div", _hoisted_22, [
          _cache[23] || (_cache[23] = createBaseVNode("div", { class: "absolute inset-0 z-0" }, [
            createBaseVNode("div", { class: "absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-blue-500 rounded-full blur-3xl opacity-40" }),
            createBaseVNode("div", { class: "absolute bottom-[-10%] right-[-10%] w-[65%] h-[65%] bg-blue-400 rounded-full blur-3xl opacity-30" })
          ], -1)),
          createBaseVNode("div", _hoisted_23, [
            createBaseVNode("div", _hoisted_24, [
              createVNode(unref(Sparkles), { class: "h-3 w-3 text-blue-300 animate-pulse" }),
              _cache[16] || (_cache[16] = createBaseVNode("span", null, "Optimize Study Sessions", -1))
            ]),
            _cache[21] || (_cache[21] = createBaseVNode("h1", { class: "text-4xl xl:text-5xl font-black leading-none tracking-tight mb-5" }, " Elevate Your Academic Focus ", -1)),
            _cache[22] || (_cache[22] = createBaseVNode("p", { class: "text-base text-blue-100/90 leading-relaxed font-medium mb-12" }, " Reserve your preferred study desk, check resource catalogs, and track study milestones in a cohesive digital workspace. ", -1)),
            createBaseVNode("div", _hoisted_25, [
              _cache[20] || (_cache[20] = createBaseVNode("div", { class: "absolute -inset-2 bg-blue-300/30 rounded-3xl blur-2xl opacity-40" }, null, -1)),
              createBaseVNode("div", _hoisted_26, [
                _cache[19] || (_cache[19] = createStaticVNode('<div class="flex justify-between items-center border-b border-slate-100 pb-3.5 mb-4" data-v-8ba3b780><div class="flex items-center space-x-2" data-v-8ba3b780><div class="w-3 h-3 rounded-full bg-blue-600/20 flex items-center justify-center" data-v-8ba3b780><div class="w-1.5 h-1.5 rounded-full bg-blue-600" data-v-8ba3b780></div></div><span class="text-[10px] font-bold text-slate-500 uppercase tracking-wider" data-v-8ba3b780>Desk Reservation</span></div><span class="text-[9px] font-extrabold bg-green-50 border border-green-200 text-green-600 px-2.5 py-0.5 rounded-full uppercase" data-v-8ba3b780>Active</span></div>', 1)),
                createBaseVNode("div", _hoisted_27, [
                  createBaseVNode("div", _hoisted_28, [
                    createBaseVNode("div", _hoisted_29, [
                      createBaseVNode("div", _hoisted_30, [
                        createVNode(unref(MapPin), { class: "h-4.5 w-4.5" })
                      ]),
                      _cache[17] || (_cache[17] = createBaseVNode("div", null, [
                        createBaseVNode("p", { class: "text-[10px] text-slate-400 font-bold uppercase tracking-wide" }, "Reserved Desk"),
                        createBaseVNode("p", { class: "text-xs font-bold text-slate-800 mt-0.5" }, "Hall B • Desk 14")
                      ], -1))
                    ])
                  ]),
                  createBaseVNode("div", _hoisted_31, [
                    createBaseVNode("div", _hoisted_32, [
                      createBaseVNode("div", _hoisted_33, [
                        createVNode(unref(Clock), { class: "h-4.5 w-4.5" })
                      ]),
                      _cache[18] || (_cache[18] = createBaseVNode("div", null, [
                        createBaseVNode("p", { class: "text-[10px] text-slate-400 font-bold uppercase tracking-wide" }, "Remaining Session"),
                        createBaseVNode("p", { class: "text-xs font-bold text-slate-800 mt-0.5" }, "03 hours 42 minutes")
                      ], -1))
                    ])
                  ])
                ])
              ])
            ])
          ])
        ])
      ]);
    };
  }
});
const LoginForm = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-8ba3b780"]]);
export {
  LoginForm as default
};
