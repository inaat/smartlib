import { d as defineComponent, x as useAuth, r as ref, c as computed, a as createElementBlock, b as createBaseVNode, j as createCommentVNode, u as unref, t as toDisplayString, f as createVNode, n as normalizeClass, i as createTextVNode, z as withModifiers, p as withDirectives, v as vModelText, D as vModelSelect, h as createBlock, w as withCtx, g as resolveComponent, L as studentAPI, l as openBlock } from "./main-BGbL_8Ba.js";
import { _ as _sfc_main$1 } from "./SessionManagement.vue_vue_type_script_setup_true_lang-DTwGE2or.js";
import { u as useSwal } from "./useSwal-pQW_XkRe.js";
import { C as Camera } from "./camera-DZO1-f5S.js";
import { S as ShieldCheck } from "./shield-check-CS2HJ1Bp.js";
import { U as Users } from "./users-CTioSBhn.js";
import { S as Settings } from "./settings-CSGb1epk.js";
import { M as Mail } from "./mail-DK7Xx2m3.js";
import { P as Phone } from "./phone-rQywUwfB.js";
import { B as Building2 } from "./building-2-BD5xFb_R.js";
import { X } from "./x-Cqc9Wc4f.js";
import { U as User } from "./user-C1TGaPSp.js";
import { L as Lock } from "./lock-DDILd98A.js";
import { L as LoaderCircle } from "./loader-circle-COfeqdfO.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
/* empty css               */
import "./refresh-cw-BcRrptjM.js";
import "./createLucideIcon-v8VVJu1z.js";
import "./shield-alert-DwdheLh4.js";
import "./monitor-cSjE3eN2.js";
import "./smartphone-BiN8BoIU.js";
import "./globe-Xo4JKgJs.js";
import "./clock-Cir2UmjW.js";
import "./log-out-BntReOTK.js";
import "./format-CerZa7QB.js";
import "./en-US-CtEcOBul.js";
import "./parseISO-CXjizkW6.js";
const _hoisted_1 = { class: "space-y-6 pb-12 font-outfit text-left" };
const _hoisted_2 = { class: "bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden relative" };
const _hoisted_3 = { class: "px-6 pb-6 pt-0 relative" };
const _hoisted_4 = { class: "flex flex-col md:flex-row items-center md:items-start justify-between gap-6 mb-4" };
const _hoisted_5 = { class: "flex flex-col md:flex-row items-center md:items-start gap-5 text-center md:text-left" };
const _hoisted_6 = { class: "relative group flex-shrink-0 -mt-12" };
const _hoisted_7 = { class: "w-24 h-24 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white text-2xl font-bold shadow-lg overflow-hidden border-4 border-white" };
const _hoisted_8 = ["src"];
const _hoisted_9 = { key: 1 };
const _hoisted_10 = { class: "pt-3" };
const _hoisted_11 = { class: "flex items-center justify-center md:justify-start space-x-2" };
const _hoisted_12 = { class: "text-xl font-bold text-slate-800 tracking-tight leading-tight" };
const _hoisted_13 = {
  key: 0,
  class: "inline-flex items-center text-emerald-600",
  title: "Verified Account"
};
const _hoisted_14 = { class: "flex flex-wrap items-center justify-center md:justify-start gap-2 mt-2" };
const _hoisted_15 = { class: "px-2.5 py-0.5 bg-slate-100 text-slate-700 rounded-lg text-[11px] font-semibold tracking-wide" };
const _hoisted_16 = { class: "px-2.5 py-0.5 bg-blue-50 text-blue-700 rounded-lg text-[11px] font-semibold tracking-wide border border-blue-100" };
const _hoisted_17 = { class: "px-2.5 py-0.5 bg-purple-50 text-purple-700 rounded-lg text-[11px] font-semibold tracking-wide uppercase border border-purple-100" };
const _hoisted_18 = { class: "pt-3" };
const _hoisted_19 = { class: "pt-4 border-t border-slate-100 flex flex-wrap items-center justify-center md:justify-start gap-y-2 gap-x-6 text-xs font-medium text-slate-600" };
const _hoisted_20 = { class: "flex items-center space-x-2" };
const _hoisted_21 = {
  key: 0,
  class: "flex items-center space-x-2"
};
const _hoisted_22 = {
  key: 1,
  class: "flex items-center space-x-2"
};
const _hoisted_23 = {
  key: 0,
  class: "fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
};
const _hoisted_24 = { class: "bg-white rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden animate-fade-in text-left" };
const _hoisted_25 = { class: "p-5 border-b border-slate-100 flex justify-between items-center bg-slate-50/50" };
const _hoisted_26 = { class: "grid grid-cols-1 md:grid-cols-2 gap-4" };
const _hoisted_27 = { class: "space-y-1.5" };
const _hoisted_28 = { class: "relative group" };
const _hoisted_29 = { class: "space-y-1.5" };
const _hoisted_30 = { class: "relative group" };
const _hoisted_31 = { class: "grid grid-cols-1 md:grid-cols-2 gap-4" };
const _hoisted_32 = { class: "space-y-1.5" };
const _hoisted_33 = { class: "relative group" };
const _hoisted_34 = { class: "space-y-1.5" };
const _hoisted_35 = { class: "relative group" };
const _hoisted_36 = { class: "pt-4 border-t border-slate-100" };
const _hoisted_37 = { class: "relative group" };
const _hoisted_38 = { class: "pt-4 flex gap-3" };
const _hoisted_39 = ["disabled"];
const _hoisted_40 = { key: 0 };
const _hoisted_41 = { class: "grid grid-cols-1 lg:grid-cols-3 gap-6" };
const _hoisted_42 = { class: "lg:col-span-2 space-y-6" };
const _hoisted_43 = { class: "bg-white rounded-3xl p-6 shadow-sm border border-slate-100" };
const _hoisted_44 = { class: "grid grid-cols-1 sm:grid-cols-2 gap-4" };
const _hoisted_45 = { class: "p-4 rounded-2xl bg-slate-50/70 border border-slate-100" };
const _hoisted_46 = { class: "text-sm font-semibold text-slate-800 block truncate" };
const _hoisted_47 = { class: "p-4 rounded-2xl bg-slate-50/70 border border-slate-100" };
const _hoisted_48 = { class: "flex items-center space-x-2" };
const _hoisted_49 = { class: "p-4 rounded-2xl bg-slate-50/70 border border-slate-100" };
const _hoisted_50 = { class: "text-sm font-semibold text-slate-800 block truncate" };
const _hoisted_51 = { class: "p-4 rounded-2xl bg-slate-50/70 border border-slate-100" };
const _hoisted_52 = { class: "text-sm font-semibold text-slate-800 block truncate" };
const _hoisted_53 = { class: "p-4 rounded-2xl bg-slate-50/70 border border-slate-100" };
const _hoisted_54 = { class: "text-sm font-semibold text-slate-800 block truncate" };
const _hoisted_55 = { class: "p-4 rounded-2xl bg-slate-50/70 border border-slate-100" };
const _hoisted_56 = { class: "text-sm font-semibold text-slate-800 block truncate" };
const _hoisted_57 = { class: "bg-white rounded-3xl p-6 shadow-sm border border-slate-100 relative overflow-hidden" };
const _hoisted_58 = { class: "flex items-center justify-between mb-5" };
const _hoisted_59 = { class: "bg-gradient-to-r from-blue-50/80 to-indigo-50/80 border border-blue-100/80 rounded-2xl p-5 mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4" };
const _hoisted_60 = { class: "text-lg font-bold text-slate-900 leading-tight" };
const _hoisted_61 = { class: "text-slate-600 text-xs font-medium mt-1" };
const _hoisted_62 = {
  key: 0,
  class: "grid grid-cols-1 sm:grid-cols-2 gap-3"
};
const _hoisted_63 = { class: "p-3.5 rounded-2xl bg-slate-50/80 border border-slate-100 flex items-center justify-between" };
const _hoisted_64 = { class: "text-xs font-bold text-slate-900" };
const _hoisted_65 = { class: "p-3.5 rounded-2xl bg-slate-50/80 border border-slate-100 flex items-center justify-between" };
const _hoisted_66 = { class: "text-xs font-bold text-slate-900" };
const _hoisted_67 = { class: "p-3.5 rounded-2xl bg-slate-50/80 border border-slate-100 flex items-center justify-between" };
const _hoisted_68 = { class: "text-xs font-bold text-slate-900" };
const _hoisted_69 = { class: "p-3.5 rounded-2xl bg-slate-50/80 border border-slate-100 flex items-center justify-between" };
const _hoisted_70 = { class: "text-xs font-bold text-slate-900" };
const _hoisted_71 = { key: 0 };
const _hoisted_72 = { key: 1 };
const _hoisted_73 = { key: 2 };
const _hoisted_74 = { class: "lg:col-span-1 space-y-6" };
const _hoisted_75 = { class: "bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ProfilePage",
  setup(__props) {
    const { user, checkAuth } = useAuth();
    const fileInput = ref(null);
    const { showSuccess, showError, showWarning } = useSwal();
    const showEditModal = ref(false);
    const updating = ref(false);
    const editForm = ref({
      name: "",
      email: "",
      phone: "",
      gender: "male",
      password: ""
    });
    const userGenderNormalized = computed(() => {
      const g = user.value?.gender ? String(user.value.gender).toLowerCase().trim() : "";
      if (g === "female") return "female";
      if (g === "male") return "male";
      return "male";
    });
    const formattedGender = computed(() => {
      return userGenderNormalized.value === "female" ? "Female" : "Male";
    });
    const openEditModal = () => {
      if (user.value) {
        editForm.value = {
          name: user.value.name,
          email: user.value.email,
          phone: user.value.phone || "",
          gender: userGenderNormalized.value,
          password: ""
        };
        showEditModal.value = true;
      }
    };
    const handleUpdateProfile = async () => {
      try {
        updating.value = true;
        const updateData = { ...editForm.value };
        if (!updateData.password) {
          delete updateData.password;
        }
        await studentAPI.updateProfile(updateData);
        await checkAuth();
        showEditModal.value = false;
        showSuccess("Profile Updated", "Your profile information and gender have been successfully updated.");
      } catch (error) {
        console.error("Failed to update profile:", error);
        const message = error.response?.data?.message || "Failed to update profile";
        const errors = error.response?.data?.errors;
        if (errors) {
          const errorMessages = Object.values(errors).flat().join("\n");
          showError("Update Failed", `${message}

${errorMessages}`);
        } else {
          showError("Update Failed", message);
        }
      } finally {
        updating.value = false;
      }
    };
    const triggerFileInput = () => {
      fileInput.value?.click();
    };
    const getProfilePictureUrl = (path) => {
      if (path.startsWith("http")) return path;
      return `/storage/${path}`;
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
          showSuccess("Updated!", "Profile picture updated successfully");
        } catch (error) {
          console.error("Failed to update profile picture:", error);
          showError("Update Failed", "Failed to update profile picture");
        }
      }
    };
    const formatDate = (date) => {
      if (!date) return "N/A";
      return new Date(date).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric"
      });
    };
    return (_ctx, _cache) => {
      const _component_router_link = resolveComponent("router-link");
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          _cache[8] || (_cache[8] = createBaseVNode("div", { class: "h-32 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 relative overflow-hidden" }, [
            createBaseVNode("div", { class: "absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent" }),
            createBaseVNode("div", { class: "absolute -right-10 -bottom-10 w-44 h-44 bg-white/10 rounded-full blur-2xl pointer-events-none" })
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
                    }, null, 8, _hoisted_8)) : (openBlock(), createElementBlock("span", _hoisted_9, toDisplayString(unref(user)?.name?.charAt(0).toUpperCase()), 1))
                  ]),
                  createBaseVNode("button", {
                    onClick: triggerFileInput,
                    class: "absolute -bottom-1 -right-1 p-2 bg-white rounded-xl shadow-md border border-slate-200 text-slate-600 hover:text-blue-600 transition-all z-10 hover:scale-105 active:scale-95 cursor-pointer",
                    title: "Change Photo"
                  }, [
                    createVNode(unref(Camera), { class: "w-3.5 h-3.5" })
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
                    createBaseVNode("span", _hoisted_15, " CRN: " + toDisplayString(unref(user)?.crn || "N/A"), 1),
                    createBaseVNode("span", _hoisted_16, toDisplayString(unref(user)?.ca_level || "PRC") + " Level ", 1),
                    createBaseVNode("span", {
                      class: normalizeClass([
                        "px-2.5 py-0.5 rounded-lg text-[11px] font-semibold tracking-wide flex items-center space-x-1 border",
                        userGenderNormalized.value === "female" ? "bg-pink-50 text-pink-700 border-pink-200" : "bg-indigo-50 text-indigo-700 border-indigo-200"
                      ])
                    }, [
                      createVNode(unref(Users), { class: "w-3 h-3" }),
                      createBaseVNode("span", null, toDisplayString(formattedGender.value), 1)
                    ], 2),
                    createBaseVNode("span", _hoisted_17, toDisplayString(unref(user)?.role?.toUpperCase() || "STUDENT"), 1)
                  ])
                ])
              ]),
              createBaseVNode("div", _hoisted_18, [
                createBaseVNode("button", {
                  onClick: openEditModal,
                  class: "inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-semibold transition-all shadow-sm shadow-blue-500/20 active:scale-98 flex-shrink-0 cursor-pointer"
                }, [
                  createVNode(unref(Settings), { class: "w-3.5 h-3.5 mr-1.5" }),
                  _cache[7] || (_cache[7] = createTextVNode(" Edit Profile ", -1))
                ])
              ])
            ]),
            createBaseVNode("div", _hoisted_19, [
              createBaseVNode("div", _hoisted_20, [
                createVNode(unref(Mail), { class: "w-4 h-4 text-blue-600" }),
                createBaseVNode("span", null, toDisplayString(unref(user)?.email), 1)
              ]),
              unref(user)?.phone ? (openBlock(), createElementBlock("div", _hoisted_21, [
                createVNode(unref(Phone), { class: "w-4 h-4 text-blue-600" }),
                createBaseVNode("span", null, toDisplayString(unref(user)?.phone), 1)
              ])) : createCommentVNode("", true),
              unref(user)?.library ? (openBlock(), createElementBlock("div", _hoisted_22, [
                createVNode(unref(Building2), { class: "w-4 h-4 text-blue-600" }),
                createBaseVNode("span", null, toDisplayString(unref(user).library.name), 1)
              ])) : createCommentVNode("", true)
            ])
          ])
        ]),
        showEditModal.value ? (openBlock(), createElementBlock("div", _hoisted_23, [
          createBaseVNode("div", _hoisted_24, [
            createBaseVNode("div", _hoisted_25, [
              _cache[9] || (_cache[9] = createBaseVNode("div", null, [
                createBaseVNode("h3", { class: "text-base font-bold text-slate-800" }, "Edit Personal Profile"),
                createBaseVNode("p", { class: "text-xs text-slate-400 mt-0.5 font-normal" }, "Update your account info and preferences")
              ], -1)),
              createBaseVNode("button", {
                onClick: _cache[0] || (_cache[0] = ($event) => showEditModal.value = false),
                class: "text-slate-400 hover:text-slate-700 p-2 rounded-xl hover:bg-slate-100 transition-colors cursor-pointer"
              }, [
                createVNode(unref(X), { class: "w-5 h-5" })
              ])
            ]),
            createBaseVNode("form", {
              onSubmit: withModifiers(handleUpdateProfile, ["prevent"]),
              class: "p-6 space-y-4 font-outfit"
            }, [
              createBaseVNode("div", _hoisted_26, [
                createBaseVNode("div", _hoisted_27, [
                  _cache[10] || (_cache[10] = createBaseVNode("label", { class: "text-[10px] font-semibold text-slate-400 uppercase tracking-wider ml-1" }, "Full Name", -1)),
                  createBaseVNode("div", _hoisted_28, [
                    createVNode(unref(User), { class: "absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-blue-600 transition-colors" }),
                    withDirectives(createBaseVNode("input", {
                      "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => editForm.value.name = $event),
                      type: "text",
                      required: "",
                      class: "w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white transition-all shadow-sm",
                      placeholder: "Your full name"
                    }, null, 512), [
                      [vModelText, editForm.value.name]
                    ])
                  ])
                ]),
                createBaseVNode("div", _hoisted_29, [
                  _cache[12] || (_cache[12] = createBaseVNode("label", { class: "text-[10px] font-semibold text-slate-400 uppercase tracking-wider ml-1" }, "Gender", -1)),
                  createBaseVNode("div", _hoisted_30, [
                    createVNode(unref(Users), { class: "absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-blue-600 transition-colors" }),
                    withDirectives(createBaseVNode("select", {
                      "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => editForm.value.gender = $event),
                      required: "",
                      class: "w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white transition-all shadow-sm appearance-none cursor-pointer"
                    }, [..._cache[11] || (_cache[11] = [
                      createBaseVNode("option", {
                        value: "",
                        disabled: ""
                      }, "Select Gender", -1),
                      createBaseVNode("option", { value: "male" }, "Male", -1),
                      createBaseVNode("option", { value: "female" }, "Female", -1)
                    ])], 512), [
                      [vModelSelect, editForm.value.gender]
                    ])
                  ])
                ])
              ]),
              createBaseVNode("div", _hoisted_31, [
                createBaseVNode("div", _hoisted_32, [
                  _cache[13] || (_cache[13] = createBaseVNode("label", { class: "text-[10px] font-semibold text-slate-400 uppercase tracking-wider ml-1" }, "Email Address", -1)),
                  createBaseVNode("div", _hoisted_33, [
                    createVNode(unref(Mail), { class: "absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-blue-600 transition-colors" }),
                    withDirectives(createBaseVNode("input", {
                      "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => editForm.value.email = $event),
                      type: "email",
                      required: "",
                      class: "w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white transition-all shadow-sm",
                      placeholder: "student@example.com"
                    }, null, 512), [
                      [vModelText, editForm.value.email]
                    ])
                  ])
                ]),
                createBaseVNode("div", _hoisted_34, [
                  _cache[14] || (_cache[14] = createBaseVNode("label", { class: "text-[10px] font-semibold text-slate-400 uppercase tracking-wider ml-1" }, "Phone Number", -1)),
                  createBaseVNode("div", _hoisted_35, [
                    createVNode(unref(Phone), { class: "absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-blue-600 transition-colors" }),
                    withDirectives(createBaseVNode("input", {
                      "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => editForm.value.phone = $event),
                      type: "tel",
                      class: "w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white transition-all shadow-sm",
                      placeholder: "03001234567"
                    }, null, 512), [
                      [vModelText, editForm.value.phone]
                    ])
                  ])
                ])
              ]),
              createBaseVNode("div", _hoisted_36, [
                _cache[15] || (_cache[15] = createBaseVNode("div", { class: "flex items-center justify-between mb-2" }, [
                  createBaseVNode("h4", { class: "font-semibold text-slate-800 text-xs uppercase tracking-wide" }, "Update Security Password"),
                  createBaseVNode("span", { class: "text-[10px] text-slate-400 uppercase font-medium tracking-wider" }, "Optional")
                ], -1)),
                createBaseVNode("div", _hoisted_37, [
                  createVNode(unref(Lock), { class: "absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-blue-600 transition-colors" }),
                  withDirectives(createBaseVNode("input", {
                    "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => editForm.value.password = $event),
                    type: "password",
                    class: "w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white transition-all shadow-sm",
                    placeholder: "New Password (min. 8 characters)"
                  }, null, 512), [
                    [vModelText, editForm.value.password]
                  ])
                ]),
                _cache[16] || (_cache[16] = createBaseVNode("p", { class: "text-[10px] text-slate-400 mt-1.5 ml-1 italic font-normal" }, "Leave empty if you do not wish to change your password", -1))
              ]),
              createBaseVNode("div", _hoisted_38, [
                createBaseVNode("button", {
                  type: "button",
                  onClick: _cache[6] || (_cache[6] = ($event) => showEditModal.value = false),
                  class: "flex-1 py-2.5 border border-slate-200 text-slate-600 font-medium rounded-xl hover:bg-slate-50 transition-all text-xs cursor-pointer active:scale-98"
                }, " Cancel "),
                createBaseVNode("button", {
                  type: "submit",
                  disabled: updating.value,
                  class: "flex-[2] py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-sm shadow-blue-500/20 active:scale-98 transition-all disabled:opacity-50 text-xs flex items-center justify-center space-x-2 cursor-pointer"
                }, [
                  !updating.value ? (openBlock(), createElementBlock("span", _hoisted_40, "Save Profile Changes")) : (openBlock(), createBlock(unref(LoaderCircle), {
                    key: 1,
                    class: "w-4 h-4 animate-spin"
                  }))
                ], 8, _hoisted_39)
              ])
            ], 32)
          ])
        ])) : createCommentVNode("", true),
        createBaseVNode("div", _hoisted_41, [
          createBaseVNode("div", _hoisted_42, [
            createBaseVNode("div", _hoisted_43, [
              _cache[23] || (_cache[23] = createBaseVNode("h3", { class: "text-xs font-bold text-slate-800 uppercase tracking-wider mb-5 flex items-center space-x-2" }, [
                createBaseVNode("span", { class: "w-2 h-2 rounded-full bg-blue-600" }),
                createBaseVNode("span", null, "Account Details")
              ], -1)),
              createBaseVNode("div", _hoisted_44, [
                createBaseVNode("div", _hoisted_45, [
                  _cache[17] || (_cache[17] = createBaseVNode("span", { class: "block text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-1" }, "Full Name", -1)),
                  createBaseVNode("span", _hoisted_46, toDisplayString(unref(user)?.name || "N/A"), 1)
                ]),
                createBaseVNode("div", _hoisted_47, [
                  _cache[18] || (_cache[18] = createBaseVNode("span", { class: "block text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-1" }, "Gender", -1)),
                  createBaseVNode("div", _hoisted_48, [
                    createBaseVNode("span", {
                      class: normalizeClass([
                        "px-2.5 py-0.5 rounded-lg text-xs font-semibold capitalize inline-flex items-center space-x-1.5 border",
                        userGenderNormalized.value === "female" ? "bg-pink-50 text-pink-700 border-pink-200" : "bg-indigo-50 text-indigo-700 border-indigo-200"
                      ])
                    }, [
                      createVNode(unref(Users), { class: "w-3.5 h-3.5" }),
                      createBaseVNode("span", null, toDisplayString(formattedGender.value), 1)
                    ], 2)
                  ])
                ]),
                createBaseVNode("div", _hoisted_49, [
                  _cache[19] || (_cache[19] = createBaseVNode("span", { class: "block text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-1" }, "Email Address", -1)),
                  createBaseVNode("span", _hoisted_50, toDisplayString(unref(user)?.email || "N/A"), 1)
                ]),
                createBaseVNode("div", _hoisted_51, [
                  _cache[20] || (_cache[20] = createBaseVNode("span", { class: "block text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-1" }, "Phone Number", -1)),
                  createBaseVNode("span", _hoisted_52, toDisplayString(unref(user)?.phone || "Not Provided"), 1)
                ]),
                createBaseVNode("div", _hoisted_53, [
                  _cache[21] || (_cache[21] = createBaseVNode("span", { class: "block text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-1" }, "Student CRN Number", -1)),
                  createBaseVNode("span", _hoisted_54, toDisplayString(unref(user)?.crn || "N/A"), 1)
                ]),
                createBaseVNode("div", _hoisted_55, [
                  _cache[22] || (_cache[22] = createBaseVNode("span", { class: "block text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-1" }, "CA Academic Level", -1)),
                  createBaseVNode("span", _hoisted_56, toDisplayString(unref(user)?.ca_level || "PRC") + " Level", 1)
                ])
              ])
            ]),
            createBaseVNode("div", _hoisted_57, [
              _cache[30] || (_cache[30] = createBaseVNode("div", { class: "absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500" }, null, -1)),
              createBaseVNode("div", _hoisted_58, [
                _cache[24] || (_cache[24] = createBaseVNode("h3", { class: "text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center space-x-2" }, [
                  createBaseVNode("span", { class: "w-2 h-2 rounded-full bg-blue-600" }),
                  createBaseVNode("span", null, "Subscription Status")
                ], -1)),
                createBaseVNode("span", {
                  class: normalizeClass([
                    "px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider border",
                    unref(user)?.active_subscription ? "bg-emerald-50 text-emerald-700 border-emerald-200" : "bg-amber-50 text-amber-700 border-amber-200"
                  ])
                }, toDisplayString(unref(user)?.active_subscription ? "Active Plan" : "No Active Plan"), 3)
              ]),
              createBaseVNode("div", _hoisted_59, [
                createBaseVNode("div", null, [
                  _cache[25] || (_cache[25] = createBaseVNode("span", { class: "text-[10px] font-semibold text-blue-600 uppercase tracking-wider block mb-1" }, "Current Membership Plan", -1)),
                  createBaseVNode("h4", _hoisted_60, toDisplayString(unref(user)?.active_subscription?.subscription_plan?.name || "Basic Membership"), 1),
                  createBaseVNode("p", _hoisted_61, toDisplayString(unref(user)?.active_subscription ? `Valid until ${formatDate(unref(user).active_subscription.expires_at)}` : "Subscribe to a plan to unlock seat & book reservation access"), 1)
                ]),
                createVNode(_component_router_link, {
                  to: "/student/subscription",
                  class: "inline-flex items-center justify-center px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-semibold transition-all shadow-sm shadow-blue-500/20 active:scale-98 flex-shrink-0 cursor-pointer"
                }, {
                  default: withCtx(() => [
                    createBaseVNode("span", null, toDisplayString(unref(user)?.active_subscription ? "Manage Plan" : "Explore Plans"), 1)
                  ]),
                  _: 1
                })
              ]),
              unref(user)?.active_subscription ? (openBlock(), createElementBlock("div", _hoisted_62, [
                createBaseVNode("div", _hoisted_63, [
                  _cache[26] || (_cache[26] = createBaseVNode("span", { class: "text-xs font-medium text-slate-600" }, "Book Reservations", -1)),
                  createBaseVNode("span", _hoisted_64, toDisplayString(unref(user).active_subscription.subscription_plan?.book_reservations_limit === -1 || !unref(user).active_subscription.subscription_plan?.book_reservations_limit ? "Unlimited" : unref(user).active_subscription.subscription_plan?.book_reservations_limit), 1)
                ]),
                createBaseVNode("div", _hoisted_65, [
                  _cache[27] || (_cache[27] = createBaseVNode("span", { class: "text-xs font-medium text-slate-600" }, "Daily Seat Bookings", -1)),
                  createBaseVNode("span", _hoisted_66, toDisplayString(unref(user).active_subscription.subscription_plan?.daily_seat_bookings_limit === -1 || !unref(user).active_subscription.subscription_plan?.daily_seat_bookings_limit ? "Unlimited" : unref(user).active_subscription.subscription_plan?.daily_seat_bookings_limit), 1)
                ]),
                createBaseVNode("div", _hoisted_67, [
                  _cache[28] || (_cache[28] = createBaseVNode("span", { class: "text-xs font-medium text-slate-600" }, "Library Access", -1)),
                  createBaseVNode("span", _hoisted_68, toDisplayString(unref(user).active_subscription.subscription_plan?.libraries_access_limit === -1 || !unref(user).active_subscription.subscription_plan?.libraries_access_limit ? "Unlimited" : unref(user).active_subscription.subscription_plan?.libraries_access_limit), 1)
                ]),
                createBaseVNode("div", _hoisted_69, [
                  _cache[29] || (_cache[29] = createBaseVNode("span", { class: "text-xs font-medium text-slate-600" }, "Advance Booking", -1)),
                  createBaseVNode("span", _hoisted_70, [
                    unref(user).active_subscription.subscription_plan?.advance_booking_days === -1 ? (openBlock(), createElementBlock("span", _hoisted_71, "Unlimited")) : unref(user).active_subscription.subscription_plan?.advance_booking_days === 0 ? (openBlock(), createElementBlock("span", _hoisted_72, "Same Day")) : (openBlock(), createElementBlock("span", _hoisted_73, toDisplayString(unref(user).active_subscription.subscription_plan?.advance_booking_days) + " Days", 1))
                  ])
                ])
              ])) : createCommentVNode("", true)
            ])
          ]),
          createBaseVNode("div", _hoisted_74, [
            createBaseVNode("div", _hoisted_75, [
              createVNode(_sfc_main$1)
            ])
          ])
        ])
      ]);
    };
  }
});
const ProfilePage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-5ac8c860"]]);
export {
  ProfilePage as default
};
