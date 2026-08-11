import { c as createLucideIcon, d as defineComponent, z as useAuth, r as ref, a as computed, o as onMounted, b as createElementBlock, e as createBaseVNode, p as createCommentVNode, u as unref, t as toDisplayString, g as createVNode, F as Fragment, k as renderList, n as normalizeClass, B as withModifiers, s as withDirectives, v as vModelText, i as createBlock, R as RefreshCw, w as withCtx, h as resolveComponent, S as studentAPI, q as resolveDynamicComponent, j as createTextVNode, m as openBlock, _ as _export_sfc } from "./main-BeUqjoax.js";
import { _ as _sfc_main$1 } from "./SessionManagement.vue_vue_type_script_setup_true_lang-Di7FSgc0.js";
import { u as useSwal } from "./useSwal-pQW_XkRe.js";
import { C as Camera } from "./camera-Bzlj_Bei.js";
import { S as ShieldCheck } from "./shield-check-B5CblrBZ.js";
import { M as Mail } from "./mail-CdJEFECh.js";
import { P as Phone } from "./phone-DeUaZgMM.js";
import { B as Building2 } from "./building-2-obFScNkw.js";
import { C as Calendar } from "./calendar-C4MEAYqh.js";
import { P as Pen } from "./pen-Du3LExGD.js";
import { U as User } from "./user-Jwf_R05Y.js";
import { S as Save } from "./save-fABXNsFC.js";
import { L as Lock } from "./lock-CC7ENFPD.js";
import { A as ArrowRight } from "./arrow-right-IyqLp6mR.js";
/* empty css               */
import "./shield-alert-DqG2Fymx.js";
import "./monitor-D7ior5eo.js";
import "./smartphone-Cg4Bf4sx.js";
import "./globe-BLQTZYkL.js";
import "./format-DBvmWExF.js";
import "./en-US-Cfx__x1z.js";
import "./normalizeDates-KHLYxtAK.js";
import "./parseISO-L4DZC0_Z.js";
const KeyRound = createLucideIcon("key-round", [
  [
    "path",
    {
      d: "M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z",
      key: "1s6t7t"
    }
  ],
  ["circle", { cx: "16.5", cy: "7.5", r: ".5", fill: "currentColor", key: "w0ekpg" }]
]);
const _hoisted_1 = { class: "p-6 space-y-6 font-outfit text-left" };
const _hoisted_2 = { class: "bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden relative" };
const _hoisted_3 = { class: "px-6 pb-6 pt-0 relative" };
const _hoisted_4 = { class: "flex flex-col md:flex-row items-center md:items-start justify-between gap-6 mb-4" };
const _hoisted_5 = { class: "flex flex-col md:flex-row items-center md:items-start gap-5 text-center md:text-left" };
const _hoisted_6 = { class: "relative group flex-shrink-0 -mt-14" };
const _hoisted_7 = { class: "w-28 h-28 rounded-2xl bg-gradient-to-tr from-emerald-600 to-teal-600 flex items-center justify-center text-white text-3xl font-bold shadow-lg overflow-hidden border-4 border-white bg-slate-900" };
const _hoisted_8 = ["src"];
const _hoisted_9 = { key: 1 };
const _hoisted_10 = { class: "pt-3" };
const _hoisted_11 = { class: "flex items-center justify-center md:justify-start space-x-2" };
const _hoisted_12 = { class: "text-xl font-bold text-slate-800 tracking-tight leading-tight" };
const _hoisted_13 = {
  key: 0,
  class: "inline-flex items-center text-emerald-600",
  title: "Verified Librarian Account"
};
const _hoisted_14 = { class: "flex flex-wrap items-center justify-center md:justify-start gap-2 mt-2" };
const _hoisted_15 = { class: "px-2.5 py-0.5 bg-emerald-50 text-emerald-700 rounded-lg text-[11px] font-bold tracking-wide border border-emerald-100 uppercase" };
const _hoisted_16 = { class: "px-2.5 py-0.5 bg-purple-50 text-purple-700 rounded-lg text-[11px] font-semibold tracking-wide uppercase border border-purple-100" };
const _hoisted_17 = { class: "pt-4 border-t border-slate-100 flex flex-wrap items-center justify-center md:justify-start gap-y-2 gap-x-6 text-xs font-medium text-slate-600" };
const _hoisted_18 = { class: "flex items-center space-x-2" };
const _hoisted_19 = {
  key: 0,
  class: "flex items-center space-x-2"
};
const _hoisted_20 = {
  key: 1,
  class: "flex items-center space-x-2"
};
const _hoisted_21 = { class: "flex items-center space-x-2" };
const _hoisted_22 = { class: "flex items-center space-x-2 border-b border-slate-200/80 pb-3 overflow-x-auto" };
const _hoisted_23 = ["onClick"];
const _hoisted_24 = {
  key: 0,
  class: "grid grid-cols-1 lg:grid-cols-3 gap-6 text-left animate-fade-in"
};
const _hoisted_25 = { class: "lg:col-span-2 bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-slate-100 space-y-6" };
const _hoisted_26 = { class: "flex items-center justify-between border-b border-slate-100 pb-4" };
const _hoisted_27 = { class: "grid grid-cols-1 md:grid-cols-2 gap-5" };
const _hoisted_28 = { class: "relative group" };
const _hoisted_29 = ["disabled"];
const _hoisted_30 = { class: "relative group" };
const _hoisted_31 = ["disabled"];
const _hoisted_32 = { class: "relative group" };
const _hoisted_33 = ["disabled"];
const _hoisted_34 = { class: "relative" };
const _hoisted_35 = {
  key: 0,
  class: "flex justify-end gap-3 pt-4 border-t border-slate-100"
};
const _hoisted_36 = ["disabled"];
const _hoisted_37 = { class: "space-y-6" };
const _hoisted_38 = { class: "bg-white rounded-3xl p-6 shadow-sm border border-slate-100 space-y-4" };
const _hoisted_39 = { class: "space-y-3" };
const _hoisted_40 = { class: "flex items-center justify-between p-3.5 bg-slate-50 rounded-2xl border border-slate-100" };
const _hoisted_41 = { class: "flex items-center space-x-3" };
const _hoisted_42 = { class: "p-2.5 bg-emerald-50 text-emerald-700 rounded-xl border border-emerald-100" };
const _hoisted_43 = { class: "text-[10px] font-semibold text-slate-500 mt-0.5" };
const _hoisted_44 = { class: "flex items-center justify-between p-3.5 bg-slate-50 rounded-2xl border border-slate-100" };
const _hoisted_45 = { class: "flex items-center space-x-3" };
const _hoisted_46 = { class: "p-2.5 bg-purple-50 text-purple-700 rounded-xl border border-purple-100" };
const _hoisted_47 = { class: "text-[10px] font-semibold text-slate-500 mt-0.5" };
const _hoisted_48 = { class: "bg-white rounded-3xl p-6 shadow-sm border border-slate-100 space-y-3" };
const _hoisted_49 = {
  key: 1,
  class: "bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-slate-100 text-left max-w-2xl space-y-6 animate-fade-in"
};
const _hoisted_50 = { class: "space-y-4" };
const _hoisted_51 = { class: "relative group" };
const _hoisted_52 = { class: "relative group" };
const _hoisted_53 = { class: "pt-4 border-t border-slate-100 flex justify-end" };
const _hoisted_54 = ["disabled"];
const _hoisted_55 = {
  key: 2,
  class: "bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-slate-100 text-left space-y-6 animate-fade-in"
};
const _hoisted_56 = { class: "flex items-center justify-between border-b border-slate-100 pb-4" };
const _hoisted_57 = {
  key: 0,
  class: "grid grid-cols-1 md:grid-cols-3 gap-6"
};
const _hoisted_58 = { class: "p-5 bg-slate-50 rounded-2xl border border-slate-100 space-y-2" };
const _hoisted_59 = { class: "text-sm font-bold text-slate-800" };
const _hoisted_60 = { class: "p-5 bg-slate-50 rounded-2xl border border-slate-100 space-y-2" };
const _hoisted_61 = { class: "text-xs font-bold text-slate-700" };
const _hoisted_62 = { class: "p-5 bg-slate-50 rounded-2xl border border-slate-100 space-y-2" };
const _hoisted_63 = { class: "text-xs font-bold text-emerald-700 font-mono" };
const _hoisted_64 = {
  key: 1,
  class: "text-center py-12 text-slate-400 text-xs font-semibold"
};
const _hoisted_65 = {
  key: 3,
  class: "bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-slate-100 text-left space-y-6 animate-fade-in"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ProfilePage",
  setup(__props) {
    const { user, checkAuth } = useAuth();
    const { showSuccess, showError, showWarning } = useSwal();
    const activeTab = ref("personal");
    const isEditing = ref(false);
    const isSaving = ref(false);
    const isSavingPassword = ref(false);
    const fileInput = ref(null);
    const tabs = [
      { id: "personal", label: "Personal Information", icon: User },
      { id: "security", label: "Security & Password", icon: Lock },
      { id: "library", label: "Assigned Library", icon: Building2 },
      { id: "sessions", label: "Active Sessions", icon: ShieldCheck }
    ];
    const form = ref({
      name: "",
      email: "",
      phone: ""
    });
    const passwordForm = ref({
      password: "",
      password_confirmation: ""
    });
    const userInitials = computed(() => {
      if (!user.value?.name) return "L";
      return user.value.name.charAt(0).toUpperCase();
    });
    onMounted(() => {
      if (user.value) {
        form.value.name = user.value.name;
        form.value.email = user.value.email;
        form.value.phone = user.value.phone || "";
      }
    });
    const cancelEdit = () => {
      isEditing.value = false;
      if (user.value) {
        form.value.name = user.value.name;
        form.value.email = user.value.email;
        form.value.phone = user.value.phone || "";
      }
    };
    const handleUpdateProfile = async () => {
      isSaving.value = true;
      try {
        const updateData = {
          name: form.value.name,
          email: form.value.email,
          phone: form.value.phone
        };
        await studentAPI.updateProfile(updateData);
        await checkAuth();
        isEditing.value = false;
        showSuccess("Profile Updated!", "Personal details updated successfully.");
      } catch (error) {
        console.error("Failed to update profile:", error);
        const message = error.response?.data?.message || "Failed to update profile";
        showError("Update Failed", message);
      } finally {
        isSaving.value = false;
      }
    };
    const handleUpdatePassword = async () => {
      if (passwordForm.value.password !== passwordForm.value.password_confirmation) {
        showWarning("Password Mismatch", "New passwords do not match");
        return;
      }
      isSavingPassword.value = true;
      try {
        await studentAPI.updateProfile({
          password: passwordForm.value.password,
          password_confirmation: passwordForm.value.password_confirmation
        });
        await checkAuth();
        passwordForm.value.password = "";
        passwordForm.value.password_confirmation = "";
        showSuccess("Password Updated!", "Your account password has been changed successfully.");
      } catch (error) {
        console.error("Failed to update password:", error);
        const message = error.response?.data?.message || "Failed to update password";
        showError("Update Failed", message);
      } finally {
        isSavingPassword.value = false;
      }
    };
    const triggerFileInput = () => {
      fileInput.value?.click();
    };
    const getProfilePictureUrl = (path) => {
      if (!path) return "";
      if (path.startsWith("http")) return path;
      return `/storage/${path}`;
    };
    const formatDate = (dateStr) => {
      if (!dateStr) return "N/A";
      return new Date(dateStr).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric"
      });
    };
    const handleFileChange = async (event) => {
      const target = event.target;
      if (target.files && target.files[0]) {
        const file = target.files[0];
        if (file.size > 2 * 1024 * 1024) {
          showWarning("File too large", "File size must be less than 2MB");
          return;
        }
        try {
          const formData = new FormData();
          formData.append("profile_picture", file);
          await studentAPI.updateProfile(formData);
          await checkAuth();
          showSuccess("Photo Updated!", "Profile picture updated successfully");
        } catch (error) {
          console.error("Failed to update profile picture:", error);
          showError("Update Failed", "Failed to update profile picture");
        }
      }
    };
    return (_ctx, _cache) => {
      const _component_router_link = resolveComponent("router-link");
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          _cache[6] || (_cache[6] = createBaseVNode("div", { class: "h-36 bg-gradient-to-r from-emerald-800 via-emerald-700 to-teal-900 relative overflow-hidden" }, [
            createBaseVNode("div", { class: "absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/15 via-transparent to-transparent" }),
            createBaseVNode("div", { class: "absolute -right-10 -bottom-10 w-48 h-48 bg-white/10 rounded-full blur-2xl pointer-events-none" }),
            createBaseVNode("div", { class: "absolute top-1/2 left-10 w-36 h-36 bg-teal-400/10 rounded-full blur-xl pointer-events-none" })
          ], -1)),
          createBaseVNode("div", _hoisted_3, [
            createBaseVNode("div", _hoisted_4, [
              createBaseVNode("div", _hoisted_5, [
                createBaseVNode("div", _hoisted_6, [
                  createBaseVNode("div", _hoisted_7, [
                    unref(user)?.profile_picture ? (openBlock(), createElementBlock("img", {
                      key: 0,
                      src: getProfilePictureUrl(unref(user).profile_picture),
                      alt: "Profile",
                      class: "w-full h-full object-cover"
                    }, null, 8, _hoisted_8)) : (openBlock(), createElementBlock("span", _hoisted_9, toDisplayString(userInitials.value), 1))
                  ]),
                  createBaseVNode("button", {
                    onClick: triggerFileInput,
                    class: "absolute -bottom-1 -right-1 p-2 bg-white rounded-xl shadow-md border border-slate-200 text-slate-700 hover:text-emerald-700 transition-all z-10 hover:scale-105 active:scale-95 cursor-pointer",
                    title: "Change Photo"
                  }, [
                    createVNode(unref(Camera), { class: "w-4 h-4" })
                  ]),
                  createBaseVNode("input", {
                    type: "file",
                    ref_key: "fileInput",
                    ref: fileInput,
                    class: "hidden",
                    accept: "image/*",
                    onChange: handleFileChange
                  }, null, 544)
                ]),
                createBaseVNode("div", _hoisted_10, [
                  createBaseVNode("div", _hoisted_11, [
                    createBaseVNode("h1", _hoisted_12, toDisplayString(unref(user)?.name), 1),
                    unref(user)?.status === "approved" || unref(user)?.isApproved ? (openBlock(), createElementBlock("span", _hoisted_13, [
                      createVNode(unref(ShieldCheck), { class: "w-4.5 h-4.5 fill-emerald-100" })
                    ])) : createCommentVNode("", true)
                  ]),
                  createBaseVNode("div", _hoisted_14, [
                    createBaseVNode("span", _hoisted_15, " STAFF ID: " + toDisplayString(unref(user)?.crn || "#" + unref(user)?.id), 1),
                    createBaseVNode("span", _hoisted_16, toDisplayString(unref(user)?.role?.toUpperCase() || "LIBRARIAN"), 1)
                  ])
                ])
              ])
            ]),
            createBaseVNode("div", _hoisted_17, [
              createBaseVNode("div", _hoisted_18, [
                createVNode(unref(Mail), { class: "w-4 h-4 text-emerald-600" }),
                createBaseVNode("span", null, toDisplayString(unref(user)?.email), 1)
              ]),
              unref(user)?.phone ? (openBlock(), createElementBlock("div", _hoisted_19, [
                createVNode(unref(Phone), { class: "w-4 h-4 text-emerald-600" }),
                createBaseVNode("span", null, toDisplayString(unref(user)?.phone), 1)
              ])) : createCommentVNode("", true),
              unref(user)?.library ? (openBlock(), createElementBlock("div", _hoisted_20, [
                createVNode(unref(Building2), { class: "w-4 h-4 text-emerald-600" }),
                createBaseVNode("span", null, toDisplayString(unref(user).library.name), 1)
              ])) : createCommentVNode("", true),
              createBaseVNode("div", _hoisted_21, [
                createVNode(unref(Calendar), { class: "w-4 h-4 text-emerald-600" }),
                createBaseVNode("span", null, "Member since " + toDisplayString(formatDate(unref(user)?.created_at)), 1)
              ])
            ])
          ])
        ]),
        createBaseVNode("div", _hoisted_22, [
          (openBlock(), createElementBlock(Fragment, null, renderList(tabs, (tab) => {
            return createBaseVNode("button", {
              key: tab.id,
              onClick: ($event) => activeTab.value = tab.id,
              class: normalizeClass([
                "px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center space-x-2 cursor-pointer border",
                activeTab.value === tab.id ? "bg-emerald-700 text-white border-emerald-700 shadow-sm font-bold" : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50 hover:text-emerald-700"
              ])
            }, [
              (openBlock(), createBlock(resolveDynamicComponent(tab.icon), { class: "w-4 h-4" })),
              createBaseVNode("span", null, toDisplayString(tab.label), 1)
            ], 10, _hoisted_23);
          }), 64))
        ]),
        activeTab.value === "personal" ? (openBlock(), createElementBlock("div", _hoisted_24, [
          createBaseVNode("div", _hoisted_25, [
            createBaseVNode("div", _hoisted_26, [
              _cache[7] || (_cache[7] = createBaseVNode("div", null, [
                createBaseVNode("h3", { class: "text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center space-x-2" }, [
                  createBaseVNode("span", { class: "w-2 h-2 rounded-full bg-blue-600" }),
                  createBaseVNode("span", null, "Personal Information")
                ]),
                createBaseVNode("p", { class: "text-xs text-slate-400 font-medium mt-0.5" }, "Manage your personal account contact details")
              ], -1)),
              createBaseVNode("button", {
                onClick: _cache[0] || (_cache[0] = ($event) => isEditing.value = !isEditing.value),
                class: normalizeClass([
                  "px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer border flex items-center space-x-1.5",
                  isEditing.value ? "bg-slate-100 text-slate-600 border-slate-200 hover:bg-slate-200" : "bg-emerald-50 text-emerald-700 border-emerald-100 hover:bg-emerald-100"
                ])
              }, [
                createVNode(unref(Pen), { class: "w-3.5 h-3.5" }),
                createBaseVNode("span", null, toDisplayString(isEditing.value ? "Cancel" : "Edit Profile"), 1)
              ], 2)
            ]),
            createBaseVNode("form", {
              onSubmit: withModifiers(handleUpdateProfile, ["prevent"]),
              class: "space-y-5"
            }, [
              createBaseVNode("div", _hoisted_27, [
                createBaseVNode("div", null, [
                  _cache[8] || (_cache[8] = createBaseVNode("label", { class: "block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5 ml-1" }, "Full Name *", -1)),
                  createBaseVNode("div", _hoisted_28, [
                    createVNode(unref(User), { class: "absolute left-3.5 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-emerald-600 transition-colors" }),
                    withDirectives(createBaseVNode("input", {
                      "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => form.value.name = $event),
                      type: "text",
                      required: "",
                      disabled: !isEditing.value,
                      class: "w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-700 focus:bg-white focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none disabled:bg-slate-100/50 disabled:text-slate-400 transition-all shadow-sm",
                      placeholder: "Your full name"
                    }, null, 8, _hoisted_29), [
                      [vModelText, form.value.name]
                    ])
                  ])
                ]),
                createBaseVNode("div", null, [
                  _cache[9] || (_cache[9] = createBaseVNode("label", { class: "block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5 ml-1" }, "Email Address *", -1)),
                  createBaseVNode("div", _hoisted_30, [
                    createVNode(unref(Mail), { class: "absolute left-3.5 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-emerald-600 transition-colors" }),
                    withDirectives(createBaseVNode("input", {
                      "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => form.value.email = $event),
                      type: "email",
                      required: "",
                      disabled: !isEditing.value,
                      class: "w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-700 focus:bg-white focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none disabled:bg-slate-100/50 disabled:text-slate-400 transition-all shadow-sm",
                      placeholder: "name@smartlib.com"
                    }, null, 8, _hoisted_31), [
                      [vModelText, form.value.email]
                    ])
                  ])
                ]),
                createBaseVNode("div", null, [
                  _cache[10] || (_cache[10] = createBaseVNode("label", { class: "block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5 ml-1" }, "Phone Number", -1)),
                  createBaseVNode("div", _hoisted_32, [
                    createVNode(unref(Phone), { class: "absolute left-3.5 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-emerald-600 transition-colors" }),
                    withDirectives(createBaseVNode("input", {
                      "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => form.value.phone = $event),
                      type: "tel",
                      placeholder: "e.g. +92 300 1234567",
                      disabled: !isEditing.value,
                      class: "w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-700 focus:bg-white focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none disabled:bg-slate-100/50 disabled:text-slate-400 transition-all shadow-sm"
                    }, null, 8, _hoisted_33), [
                      [vModelText, form.value.phone]
                    ])
                  ])
                ]),
                createBaseVNode("div", null, [
                  _cache[12] || (_cache[12] = createBaseVNode("label", { class: "block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5 ml-1" }, "Role Level", -1)),
                  createBaseVNode("div", _hoisted_34, [
                    createVNode(unref(ShieldCheck), { class: "absolute left-3.5 top-1/2 transform -translate-y-1/2 w-4 h-4 text-emerald-600" }),
                    _cache[11] || (_cache[11] = createBaseVNode("input", {
                      value: "Librarian / Library Administrator",
                      disabled: "",
                      class: "w-full pl-10 pr-4 py-2.5 bg-slate-100/70 border border-slate-200 rounded-xl text-xs font-bold text-emerald-800 outline-none cursor-not-allowed shadow-sm"
                    }, null, -1))
                  ])
                ])
              ]),
              isEditing.value ? (openBlock(), createElementBlock("div", _hoisted_35, [
                createBaseVNode("button", {
                  type: "button",
                  onClick: cancelEdit,
                  class: "px-5 py-2.5 border border-slate-200 text-slate-600 font-bold rounded-xl hover:bg-slate-50 transition-colors text-xs cursor-pointer"
                }, " Cancel "),
                createBaseVNode("button", {
                  type: "submit",
                  disabled: isSaving.value,
                  class: "px-6 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white font-bold rounded-xl transition-all disabled:opacity-50 flex items-center space-x-2 text-xs cursor-pointer shadow-sm shadow-emerald-700/20"
                }, [
                  isSaving.value ? (openBlock(), createBlock(unref(RefreshCw), {
                    key: 0,
                    class: "w-4 h-4 animate-spin"
                  })) : (openBlock(), createBlock(unref(Save), {
                    key: 1,
                    class: "w-4 h-4"
                  })),
                  createBaseVNode("span", null, toDisplayString(isSaving.value ? "Saving..." : "Save Profile Changes"), 1)
                ], 8, _hoisted_36)
              ])) : createCommentVNode("", true)
            ], 32)
          ]),
          createBaseVNode("div", _hoisted_37, [
            createBaseVNode("div", _hoisted_38, [
              _cache[16] || (_cache[16] = createBaseVNode("h3", { class: "text-xs font-bold text-slate-800 uppercase tracking-wider mb-5 flex items-center space-x-2" }, [
                createBaseVNode("span", { class: "w-2 h-2 rounded-full bg-blue-600" }),
                createBaseVNode("span", null, "Account Overview")
              ], -1)),
              createBaseVNode("div", _hoisted_39, [
                createBaseVNode("div", _hoisted_40, [
                  createBaseVNode("div", _hoisted_41, [
                    createBaseVNode("div", _hoisted_42, [
                      createVNode(unref(Building2), { class: "w-4 h-4" })
                    ]),
                    createBaseVNode("div", null, [
                      _cache[13] || (_cache[13] = createBaseVNode("div", { class: "text-xs font-bold text-slate-800" }, "Assigned Library", -1)),
                      createBaseVNode("div", _hoisted_43, toDisplayString(unref(user)?.library?.name || "Unassigned"), 1)
                    ])
                  ]),
                  createVNode(_component_router_link, {
                    to: "/librarian/library",
                    class: "text-xs font-bold text-emerald-700 hover:text-emerald-800"
                  }, {
                    default: withCtx(() => [..._cache[14] || (_cache[14] = [
                      createTextVNode(" View → ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                createBaseVNode("div", _hoisted_44, [
                  createBaseVNode("div", _hoisted_45, [
                    createBaseVNode("div", _hoisted_46, [
                      createVNode(unref(Calendar), { class: "w-4 h-4" })
                    ]),
                    createBaseVNode("div", null, [
                      _cache[15] || (_cache[15] = createBaseVNode("div", { class: "text-xs font-bold text-slate-800" }, "Registration Date", -1)),
                      createBaseVNode("div", _hoisted_47, toDisplayString(formatDate(unref(user)?.created_at)), 1)
                    ])
                  ])
                ])
              ])
            ]),
            createBaseVNode("div", _hoisted_48, [
              _cache[20] || (_cache[20] = createBaseVNode("h3", { class: "text-xs font-bold text-slate-800 uppercase tracking-wider mb-5 flex items-center space-x-2" }, [
                createBaseVNode("span", { class: "w-2 h-2 rounded-full bg-blue-600" }),
                createBaseVNode("span", null, "Quick Management Tools")
              ], -1)),
              createVNode(_component_router_link, {
                to: "/librarian/seats",
                class: "flex items-center justify-between p-3 bg-slate-50 hover:bg-emerald-50/60 rounded-2xl border border-slate-100 hover:border-emerald-200 transition-all cursor-pointer group"
              }, {
                default: withCtx(() => [
                  _cache[17] || (_cache[17] = createBaseVNode("span", { class: "text-xs font-bold text-slate-700 group-hover:text-emerald-800" }, "Seat Layout & Live Map", -1)),
                  createVNode(unref(ArrowRight), { class: "w-4 h-4 text-slate-400 group-hover:text-emerald-700" })
                ]),
                _: 1
              }),
              createVNode(_component_router_link, {
                to: "/librarian/books",
                class: "flex items-center justify-between p-3 bg-slate-50 hover:bg-emerald-50/60 rounded-2xl border border-slate-100 hover:border-emerald-200 transition-all cursor-pointer group"
              }, {
                default: withCtx(() => [
                  _cache[18] || (_cache[18] = createBaseVNode("span", { class: "text-xs font-bold text-slate-700 group-hover:text-emerald-800" }, "Book Inventory Catalog", -1)),
                  createVNode(unref(ArrowRight), { class: "w-4 h-4 text-slate-400 group-hover:text-emerald-700" })
                ]),
                _: 1
              }),
              createVNode(_component_router_link, {
                to: "/librarian/reports",
                class: "flex items-center justify-between p-3 bg-slate-50 hover:bg-emerald-50/60 rounded-2xl border border-slate-100 hover:border-emerald-200 transition-all cursor-pointer group"
              }, {
                default: withCtx(() => [
                  _cache[19] || (_cache[19] = createBaseVNode("span", { class: "text-xs font-bold text-slate-700 group-hover:text-emerald-800" }, "Scheduled Reports Hub", -1)),
                  createVNode(unref(ArrowRight), { class: "w-4 h-4 text-slate-400 group-hover:text-emerald-700" })
                ]),
                _: 1
              })
            ])
          ])
        ])) : createCommentVNode("", true),
        activeTab.value === "security" ? (openBlock(), createElementBlock("div", _hoisted_49, [
          _cache[23] || (_cache[23] = createBaseVNode("div", { class: "border-b border-slate-100 pb-4" }, [
            createBaseVNode("h3", { class: "text-xs font-bold text-slate-800 uppercase tracking-wider mb-5 flex items-center space-x-2" }, [
              createBaseVNode("span", { class: "w-2 h-2 rounded-full bg-blue-600" }),
              createBaseVNode("span", null, "Security & Password Management")
            ]),
            createBaseVNode("p", { class: "text-xs text-slate-400 font-medium -mt-3" }, "Update your account login password")
          ], -1)),
          createBaseVNode("form", {
            onSubmit: withModifiers(handleUpdatePassword, ["prevent"]),
            class: "space-y-5"
          }, [
            createBaseVNode("div", _hoisted_50, [
              createBaseVNode("div", null, [
                _cache[21] || (_cache[21] = createBaseVNode("label", { class: "block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5 ml-1" }, "New Password *", -1)),
                createBaseVNode("div", _hoisted_51, [
                  createVNode(unref(Lock), { class: "absolute left-3.5 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-emerald-600 transition-colors" }),
                  withDirectives(createBaseVNode("input", {
                    "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => passwordForm.value.password = $event),
                    type: "password",
                    required: "",
                    placeholder: "Enter at least 8 characters",
                    class: "w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-700 focus:bg-white focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all shadow-sm"
                  }, null, 512), [
                    [vModelText, passwordForm.value.password]
                  ])
                ])
              ]),
              createBaseVNode("div", null, [
                _cache[22] || (_cache[22] = createBaseVNode("label", { class: "block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5 ml-1" }, "Confirm New Password *", -1)),
                createBaseVNode("div", _hoisted_52, [
                  createVNode(unref(Lock), { class: "absolute left-3.5 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-emerald-600 transition-colors" }),
                  withDirectives(createBaseVNode("input", {
                    "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => passwordForm.value.password_confirmation = $event),
                    type: "password",
                    required: "",
                    placeholder: "Re-type new password",
                    class: "w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-700 focus:bg-white focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all shadow-sm"
                  }, null, 512), [
                    [vModelText, passwordForm.value.password_confirmation]
                  ])
                ])
              ])
            ]),
            createBaseVNode("div", _hoisted_53, [
              createBaseVNode("button", {
                type: "submit",
                disabled: isSavingPassword.value,
                class: "px-6 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white font-bold rounded-xl transition-all disabled:opacity-50 flex items-center space-x-2 text-xs cursor-pointer shadow-sm shadow-emerald-700/20"
              }, [
                isSavingPassword.value ? (openBlock(), createBlock(unref(RefreshCw), {
                  key: 0,
                  class: "w-4 h-4 animate-spin"
                })) : (openBlock(), createBlock(unref(KeyRound), {
                  key: 1,
                  class: "w-4 h-4"
                })),
                createBaseVNode("span", null, toDisplayString(isSavingPassword.value ? "Updating Password..." : "Update Password"), 1)
              ], 8, _hoisted_54)
            ])
          ], 32)
        ])) : createCommentVNode("", true),
        activeTab.value === "library" ? (openBlock(), createElementBlock("div", _hoisted_55, [
          createBaseVNode("div", _hoisted_56, [
            _cache[25] || (_cache[25] = createBaseVNode("div", null, [
              createBaseVNode("h3", { class: "text-xs font-bold text-slate-800 uppercase tracking-wider mb-5 flex items-center space-x-2" }, [
                createBaseVNode("span", { class: "w-2 h-2 rounded-full bg-blue-600" }),
                createBaseVNode("span", null, "Assigned Library Details")
              ]),
              createBaseVNode("p", { class: "text-xs text-slate-400 font-medium -mt-3" }, "Overview of the library facility managed by your account")
            ], -1)),
            createVNode(_component_router_link, {
              to: "/librarian/library",
              class: "px-4 py-2 bg-emerald-50 text-emerald-700 border border-emerald-100 hover:bg-emerald-100 rounded-xl text-xs font-bold transition-all flex items-center space-x-1.5"
            }, {
              default: withCtx(() => [
                _cache[24] || (_cache[24] = createBaseVNode("span", null, "Manage Library Settings", -1)),
                createVNode(unref(ArrowRight), { class: "w-3.5 h-3.5" })
              ]),
              _: 1
            })
          ]),
          unref(user)?.library ? (openBlock(), createElementBlock("div", _hoisted_57, [
            createBaseVNode("div", _hoisted_58, [
              _cache[26] || (_cache[26] = createBaseVNode("div", { class: "text-[10px] font-bold text-slate-400 uppercase tracking-widest" }, "Library Name", -1)),
              createBaseVNode("div", _hoisted_59, toDisplayString(unref(user).library.name), 1)
            ]),
            createBaseVNode("div", _hoisted_60, [
              _cache[27] || (_cache[27] = createBaseVNode("div", { class: "text-[10px] font-bold text-slate-400 uppercase tracking-widest" }, "Library Address", -1)),
              createBaseVNode("div", _hoisted_61, toDisplayString(unref(user).library.address || "N/A"), 1)
            ]),
            createBaseVNode("div", _hoisted_62, [
              _cache[28] || (_cache[28] = createBaseVNode("div", { class: "text-[10px] font-bold text-slate-400 uppercase tracking-widest" }, "Library ID Code", -1)),
              createBaseVNode("div", _hoisted_63, "#" + toDisplayString(unref(user).library.id), 1)
            ])
          ])) : (openBlock(), createElementBlock("div", _hoisted_64, " No library currently assigned to your librarian account. "))
        ])) : createCommentVNode("", true),
        activeTab.value === "sessions" ? (openBlock(), createElementBlock("div", _hoisted_65, [
          _cache[29] || (_cache[29] = createBaseVNode("div", { class: "border-b border-slate-100 pb-4" }, [
            createBaseVNode("h3", { class: "text-xs font-bold text-slate-800 uppercase tracking-wider mb-5 flex items-center space-x-2" }, [
              createBaseVNode("span", { class: "w-2 h-2 rounded-full bg-blue-600" }),
              createBaseVNode("span", null, "Device & Active Sessions")
            ]),
            createBaseVNode("p", { class: "text-xs text-slate-400 font-medium -mt-3" }, "Manage logged in browser sessions and security authorizations")
          ], -1)),
          createVNode(_sfc_main$1)
        ])) : createCommentVNode("", true)
      ]);
    };
  }
});
const ProfilePage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-240f3d10"]]);
export {
  ProfilePage as default
};
