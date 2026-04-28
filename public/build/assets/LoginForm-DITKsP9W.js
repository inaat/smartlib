import { d as defineComponent, p as useAuth, q as reactive, r as ref, o as onMounted, c as createElementBlock, b as createBaseVNode, m as createCommentVNode, t as toDisplayString, u as unref, s as withModifiers, v as withDirectives, x as vModelText, n as normalizeClass, y as vModelDynamic, z as vModelCheckbox, j as createTextVNode, f as createVNode, w as withCtx, g as resolveComponent, e as createStaticVNode, A as useRouter, i as openBlock } from "./main-TSJawxZI.js";
/* empty css               */
const _hoisted_1 = { class: "min-h-screen flex" };
const _hoisted_2 = { class: "flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-gray-100" };
const _hoisted_3 = { class: "max-w-md w-full space-y-8" };
const _hoisted_4 = { class: "text-center" };
const _hoisted_5 = { class: "text-gray-600" };
const _hoisted_6 = {
  key: 0,
  class: "bg-red-50 border-l-4 border-red-500 p-4 rounded-lg animate-shake"
};
const _hoisted_7 = { class: "flex items-center" };
const _hoisted_8 = { class: "text-sm text-red-700" };
const _hoisted_9 = { class: "space-y-4" };
const _hoisted_10 = { class: "relative" };
const _hoisted_11 = {
  key: 0,
  class: "mt-1 text-sm text-red-600"
};
const _hoisted_12 = { class: "relative" };
const _hoisted_13 = ["type"];
const _hoisted_14 = {
  key: 0,
  class: "h-5 w-5",
  fill: "none",
  stroke: "currentColor",
  viewBox: "0 0 24 24"
};
const _hoisted_15 = {
  key: 1,
  class: "h-5 w-5",
  fill: "none",
  stroke: "currentColor",
  viewBox: "0 0 24 24"
};
const _hoisted_16 = {
  key: 0,
  class: "mt-1 text-sm text-red-600"
};
const _hoisted_17 = { class: "flex items-center justify-between" };
const _hoisted_18 = { class: "flex items-center" };
const _hoisted_19 = ["disabled"];
const _hoisted_20 = {
  key: 0,
  class: "flex items-center"
};
const _hoisted_21 = { key: 1 };
const _hoisted_22 = { class: "text-center" };
const _hoisted_23 = { class: "text-sm text-gray-600" };
const _hoisted_24 = { class: "hidden lg:flex lg:flex-1 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 relative overflow-hidden" };
const _hoisted_25 = { class: "relative z-10 flex flex-col justify-center px-12 text-white" };
const _hoisted_26 = { class: "text-5xl font-bold mb-6 leading-tight" };
const _hoisted_27 = { class: "text-xl text-blue-100 mb-8 leading-relaxed" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "LoginForm",
  setup(__props) {
    const router = useRouter();
    const { login, settings, fetchSettings } = useAuth();
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
        newErrors.email = "Email is required";
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = "Email is invalid";
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
        errors.general = error.response?.data?.message || "Invalid credentials. Please try again.";
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
              _cache[6] || (_cache[6] = createBaseVNode("div", { class: "inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl shadow-lg mb-4 transform hover:scale-105 transition-transform" }, [
                createBaseVNode("svg", {
                  class: "w-8 h-8 text-white",
                  fill: "none",
                  stroke: "currentColor",
                  viewBox: "0 0 24 24"
                }, [
                  createBaseVNode("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    "stroke-width": "2",
                    d: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  })
                ])
              ], -1)),
              _cache[7] || (_cache[7] = createBaseVNode("h2", { class: "text-3xl font-bold text-gray-900 mb-2" }, " Welcome Back ", -1)),
              createBaseVNode("p", _hoisted_5, " Sign in to access your " + toDisplayString(unref(settings).site_name || "SMART LIB") + " account ", 1)
            ]),
            errors.general ? (openBlock(), createElementBlock("div", _hoisted_6, [
              createBaseVNode("div", _hoisted_7, [
                _cache[8] || (_cache[8] = createBaseVNode("svg", {
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
                  _cache[10] || (_cache[10] = createBaseVNode("label", {
                    for: "email",
                    class: "block text-sm font-medium text-gray-700 mb-2"
                  }, " Email Address ", -1)),
                  createBaseVNode("div", _hoisted_10, [
                    _cache[9] || (_cache[9] = createBaseVNode("div", { class: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none" }, [
                      createBaseVNode("svg", {
                        class: "h-5 w-5 text-gray-400",
                        fill: "none",
                        stroke: "currentColor",
                        viewBox: "0 0 24 24"
                      }, [
                        createBaseVNode("path", {
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          "stroke-width": "2",
                          d: "M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                        })
                      ])
                    ], -1)),
                    withDirectives(createBaseVNode("input", {
                      id: "email",
                      name: "email",
                      type: "email",
                      autocomplete: "email",
                      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => formData.email = $event),
                      onInput: _cache[1] || (_cache[1] = ($event) => clearError("email")),
                      class: normalizeClass([
                        "block w-full pl-10 pr-3 py-3 border rounded-xl shadow-sm placeholder-gray-400 focus:outline-none transition-all",
                        errors.email ? "border-red-300 focus:ring-red-500 focus:border-red-500" : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                      ]),
                      placeholder: "you@example.com"
                    }, null, 34), [
                      [vModelText, formData.email]
                    ])
                  ]),
                  errors.email ? (openBlock(), createElementBlock("p", _hoisted_11, toDisplayString(errors.email), 1)) : createCommentVNode("", true)
                ]),
                createBaseVNode("div", null, [
                  _cache[14] || (_cache[14] = createBaseVNode("label", {
                    for: "password",
                    class: "block text-sm font-medium text-gray-700 mb-2"
                  }, " Password ", -1)),
                  createBaseVNode("div", _hoisted_12, [
                    _cache[13] || (_cache[13] = createBaseVNode("div", { class: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none" }, [
                      createBaseVNode("svg", {
                        class: "h-5 w-5 text-gray-400",
                        fill: "none",
                        stroke: "currentColor",
                        viewBox: "0 0 24 24"
                      }, [
                        createBaseVNode("path", {
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          "stroke-width": "2",
                          d: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                        })
                      ])
                    ], -1)),
                    withDirectives(createBaseVNode("input", {
                      id: "password",
                      name: "password",
                      type: showPassword.value ? "text" : "password",
                      autocomplete: "current-password",
                      "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => formData.password = $event),
                      onInput: _cache[3] || (_cache[3] = ($event) => clearError("password")),
                      class: normalizeClass([
                        "block w-full pl-10 pr-10 py-3 border rounded-xl shadow-sm placeholder-gray-400 focus:outline-none transition-all",
                        errors.password ? "border-red-300 focus:ring-red-500 focus:border-red-500" : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                      ]),
                      placeholder: "••••••••"
                    }, null, 42, _hoisted_13), [
                      [vModelDynamic, formData.password]
                    ]),
                    createBaseVNode("button", {
                      type: "button",
                      onClick: _cache[4] || (_cache[4] = ($event) => showPassword.value = !showPassword.value),
                      class: "absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 transition-colors"
                    }, [
                      showPassword.value ? (openBlock(), createElementBlock("svg", _hoisted_14, [..._cache[11] || (_cache[11] = [
                        createBaseVNode("path", {
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          "stroke-width": "2",
                          d: "M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268-2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                        }, null, -1)
                      ])])) : (openBlock(), createElementBlock("svg", _hoisted_15, [..._cache[12] || (_cache[12] = [
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
                  errors.password ? (openBlock(), createElementBlock("p", _hoisted_16, toDisplayString(errors.password), 1)) : createCommentVNode("", true)
                ])
              ]),
              createBaseVNode("div", _hoisted_17, [
                createBaseVNode("div", _hoisted_18, [
                  withDirectives(createBaseVNode("input", {
                    id: "remember",
                    name: "remember",
                    type: "checkbox",
                    "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => formData.remember = $event),
                    class: "h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded cursor-pointer"
                  }, null, 512), [
                    [vModelCheckbox, formData.remember]
                  ]),
                  _cache[15] || (_cache[15] = createBaseVNode("label", {
                    for: "remember",
                    class: "ml-2 block text-sm text-gray-700 cursor-pointer"
                  }, " Remember me ", -1))
                ]),
                _cache[16] || (_cache[16] = createBaseVNode("div", { class: "text-sm" }, [
                  createBaseVNode("a", {
                    href: "#",
                    class: "font-medium text-blue-600 hover:text-blue-500 transition-colors"
                  }, " Forgot password? ")
                ], -1))
              ]),
              createBaseVNode("button", {
                type: "submit",
                disabled: isLoading.value,
                class: "group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-xl text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all"
              }, [
                isLoading.value ? (openBlock(), createElementBlock("div", _hoisted_20, [..._cache[17] || (_cache[17] = [
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
                  createTextVNode(" Signing in... ", -1)
                ])])) : (openBlock(), createElementBlock("span", _hoisted_21, "Sign in"))
              ], 8, _hoisted_19),
              createBaseVNode("div", _hoisted_22, [
                createBaseVNode("p", _hoisted_23, [
                  _cache[19] || (_cache[19] = createTextVNode(" Don't have an account? ", -1)),
                  createVNode(_component_router_link, {
                    to: "/register",
                    class: "font-medium text-blue-600 hover:text-blue-500 transition-colors"
                  }, {
                    default: withCtx(() => [..._cache[18] || (_cache[18] = [
                      createTextVNode(" Sign up now ", -1)
                    ])]),
                    _: 1
                  })
                ])
              ])
            ], 32),
            _cache[20] || (_cache[20] = createBaseVNode("div", { class: "mt-6 p-4 bg-blue-50 rounded-xl border border-blue-100" }, [
              createBaseVNode("p", { class: "text-xs font-semibold text-blue-900 mb-2" }, "Demo Credentials:"),
              createBaseVNode("div", { class: "space-y-1 text-xs text-blue-700" }, [
                createBaseVNode("p", null, "• System Owner: owner@smartlib.com"),
                createBaseVNode("p", null, "• Super Admin: superadmin1@smartlib.com"),
                createBaseVNode("p", null, "• Librarian: librarian1@smartlib.com"),
                createBaseVNode("p", null, "• Student: student1@smartlib.com"),
                createBaseVNode("p", { class: "font-medium mt-1" }, "Password: password")
              ])
            ], -1))
          ])
        ]),
        createBaseVNode("div", _hoisted_24, [
          _cache[24] || (_cache[24] = createBaseVNode("div", { class: "absolute inset-0" }, [
            createBaseVNode("div", { class: "absolute top-20 left-20 w-72 h-72 bg-white opacity-10 rounded-full blur-3xl animate-pulse" }),
            createBaseVNode("div", { class: "absolute bottom-20 right-20 w-96 h-96 bg-purple-300 opacity-10 rounded-full blur-3xl animate-pulse delay-1000" })
          ], -1)),
          createBaseVNode("div", _hoisted_25, [
            createBaseVNode("h1", _hoisted_26, [
              _cache[21] || (_cache[21] = createTextVNode(" Welcome to", -1)),
              _cache[22] || (_cache[22] = createBaseVNode("br", null, null, -1)),
              createTextVNode(toDisplayString(unref(settings).site_name || "SMART LIB"), 1)
            ]),
            createBaseVNode("p", _hoisted_27, toDisplayString(unref(settings).site_description || "Your intelligent library management system for seamless seat booking, study tracking, and productivity enhancement."), 1),
            _cache[23] || (_cache[23] = createStaticVNode('<div class="space-y-4"><div class="flex items-center space-x-3"><div class="flex-shrink-0 w-10 h-10 bg-white bg-opacity-20 rounded-lg flex items-center justify-center backdrop-blur-sm"><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></div><p class="text-lg">Smart seat booking with QR codes</p></div><div class="flex items-center space-x-3"><div class="flex-shrink-0 w-10 h-10 bg-white bg-opacity-20 rounded-lg flex items-center justify-center backdrop-blur-sm"><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg></div><p class="text-lg">Real-time analytics &amp; insights</p></div><div class="flex items-center space-x-3"><div class="flex-shrink-0 w-10 h-10 bg-white bg-opacity-20 rounded-lg flex items-center justify-center backdrop-blur-sm"><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></div><p class="text-lg">Productivity tools &amp; habit tracking</p></div></div>', 1))
          ])
        ])
      ]);
    };
  }
});
export {
  _sfc_main as default
};
