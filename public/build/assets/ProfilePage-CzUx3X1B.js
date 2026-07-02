import { d as defineComponent, x as useAuth, r as ref, o as onMounted, a as createElementBlock, b as createBaseVNode, u as unref, t as toDisplayString, f as createVNode, l as createCommentVNode, i as createTextVNode, z as withModifiers, p as withDirectives, v as vModelText, L as studentAPI, k as openBlock } from "./main-DKJzpCzk.js";
import { _ as _sfc_main$1 } from "./SessionManagement.vue_vue_type_script_setup_true_lang-CYTsTu95.js";
import { u as useSwal } from "./useSwal-pQW_XkRe.js";
import { C as Camera } from "./camera-DnntQaXo.js";
import { M as Mail } from "./mail-BZUQ0X0H.js";
import { P as Phone } from "./phone-CnAbY56N.js";
import { U as User } from "./user-Cmc8aXsW.js";
import { L as Lock } from "./lock-BhqIdWez.js";
import { S as ShieldCheck } from "./shield-check-Cy96K7OO.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
/* empty css               */
import "./refresh-cw-vjkPNSrg.js";
import "./createLucideIcon-TQ5d7bQA.js";
import "./shield-alert-DFq-n_ou.js";
import "./monitor-Dsfpvccc.js";
import "./smartphone-BUmYCZnX.js";
import "./globe-C0Nxugtu.js";
import "./clock-xlNueMyC.js";
import "./log-out-tiFNap6c.js";
import "./format-CerZa7QB.js";
import "./en-US-CtEcOBul.js";
import "./parseISO-CXjizkW6.js";
const _hoisted_1 = { class: "p-6 space-y-8 pb-12 font-outfit" };
const _hoisted_2 = { class: "bg-white rounded-3xl p-8 shadow-sm border border-slate-100" };
const _hoisted_3 = { class: "flex flex-col md:flex-row items-center gap-8" };
const _hoisted_4 = { class: "relative group" };
const _hoisted_5 = { class: "w-32 h-32 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-700 flex items-center justify-center text-white text-4xl font-bold shadow-lg overflow-hidden" };
const _hoisted_6 = ["src"];
const _hoisted_7 = {
  key: 1,
  class: "animate-fade-in"
};
const _hoisted_8 = { class: "flex-1 text-center md:text-left" };
const _hoisted_9 = { class: "text-3xl font-bold text-slate-800 mb-2 tracking-tight" };
const _hoisted_10 = { class: "flex flex-wrap justify-center md:justify-start gap-4 text-slate-500 text-sm font-semibold" };
const _hoisted_11 = { class: "flex items-center" };
const _hoisted_12 = {
  key: 0,
  class: "flex items-center"
};
const _hoisted_13 = { class: "mt-6 flex flex-wrap justify-center md:justify-start gap-3 text-xs font-bold" };
const _hoisted_14 = {
  key: 0,
  class: "px-4 py-1.5 bg-blue-50 text-blue-700 rounded-full border border-blue-100"
};
const _hoisted_15 = { class: "bg-white rounded-3xl p-8 shadow-sm border border-slate-100" };
const _hoisted_16 = { class: "flex items-center justify-between mb-6" };
const _hoisted_17 = { class: "text-lg font-bold text-slate-800 flex items-center" };
const _hoisted_18 = { class: "relative" };
const _hoisted_19 = ["disabled"];
const _hoisted_20 = { class: "relative" };
const _hoisted_21 = ["disabled"];
const _hoisted_22 = { class: "relative" };
const _hoisted_23 = ["disabled"];
const _hoisted_24 = {
  key: 0,
  class: "md:col-span-2 border-t border-slate-100 pt-6 mt-2 text-left"
};
const _hoisted_25 = { class: "grid grid-cols-1 md:grid-cols-2 gap-6" };
const _hoisted_26 = { class: "relative" };
const _hoisted_27 = { class: "relative" };
const _hoisted_28 = {
  key: 1,
  class: "md:col-span-2 flex justify-end gap-3 pt-4"
};
const _hoisted_29 = ["disabled"];
const _hoisted_30 = {
  key: 0,
  class: "mr-2"
};
const _hoisted_31 = { class: "bg-white rounded-3xl p-8 shadow-sm border border-slate-100" };
const _hoisted_32 = { class: "text-lg font-bold text-slate-800 flex items-center mb-6" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ProfilePage",
  setup(__props) {
    const { user, checkAuth } = useAuth();
    const isEditing = ref(false);
    const isSaving = ref(false);
    const fileInput = ref(null);
    const form = ref({
      name: "",
      email: "",
      phone: "",
      password: "",
      password_confirmation: ""
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
        form.value.password = "";
        form.value.password_confirmation = "";
      }
    };
    const { showSuccess, showError, showWarning } = useSwal();
    const handleUpdateProfile = async () => {
      if (form.value.password && form.value.password !== form.value.password_confirmation) {
        showWarning("Password Mismatch", "Passwords do not match");
        return;
      }
      isSaving.value = true;
      try {
        const updateData = {
          name: form.value.name,
          email: form.value.email,
          phone: form.value.phone
        };
        if (form.value.password) {
          updateData.password = form.value.password;
        }
        await studentAPI.updateProfile(updateData);
        await checkAuth();
        isEditing.value = false;
        showSuccess("Updated!", "Profile updated successfully");
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
        isSaving.value = false;
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
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("div", _hoisted_3, [
            createBaseVNode("div", _hoisted_4, [
              createBaseVNode("div", _hoisted_5, [
                unref(user)?.profile_picture ? (openBlock(), createElementBlock("img", {
                  key: 0,
                  src: getProfilePictureUrl(unref(user).profile_picture),
                  alt: "Profile",
                  class: "w-full h-full object-cover animate-fade-in"
                }, null, 8, _hoisted_6)) : (openBlock(), createElementBlock("span", _hoisted_7, toDisplayString(unref(user)?.name?.charAt(0).toUpperCase()), 1))
              ]),
              createBaseVNode("button", {
                onClick: triggerFileInput,
                class: "absolute bottom-0 right-0 p-2.5 bg-white rounded-xl shadow-md border border-slate-200 text-slate-500 hover:text-emerald-700 transition-colors z-10 cursor-pointer",
                title: "Upload Profile Picture"
              }, [
                createVNode(unref(Camera), { class: "w-5 h-5" })
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
            createBaseVNode("div", _hoisted_8, [
              createBaseVNode("h1", _hoisted_9, toDisplayString(unref(user)?.name), 1),
              createBaseVNode("div", _hoisted_10, [
                createBaseVNode("div", _hoisted_11, [
                  createVNode(unref(Mail), { class: "w-4 h-4 mr-2 text-emerald-600/80" }),
                  createTextVNode(" " + toDisplayString(unref(user)?.email), 1)
                ]),
                unref(user)?.phone ? (openBlock(), createElementBlock("div", _hoisted_12, [
                  createVNode(unref(Phone), { class: "w-4 h-4 mr-2 text-emerald-600/80" }),
                  createTextVNode(" " + toDisplayString(unref(user)?.phone), 1)
                ])) : createCommentVNode("", true)
              ]),
              createBaseVNode("div", _hoisted_13, [
                _cache[6] || (_cache[6] = createBaseVNode("span", { class: "px-4 py-1.5 bg-emerald-50 text-emerald-700 rounded-full border border-emerald-100" }, " LIBRARIAN ", -1)),
                unref(user)?.library ? (openBlock(), createElementBlock("span", _hoisted_14, toDisplayString(unref(user).library.name), 1)) : createCommentVNode("", true)
              ])
            ])
          ])
        ]),
        createBaseVNode("div", _hoisted_15, [
          createBaseVNode("div", _hoisted_16, [
            createBaseVNode("h2", _hoisted_17, [
              createVNode(unref(User), { class: "w-5 h-5 mr-2 text-emerald-650" }),
              _cache[7] || (_cache[7] = createTextVNode(" Personal Information ", -1))
            ]),
            createBaseVNode("button", {
              onClick: _cache[0] || (_cache[0] = ($event) => isEditing.value = !isEditing.value),
              class: "text-xs font-bold text-emerald-700 hover:text-emerald-800 transition-colors cursor-pointer bg-emerald-50 px-3 py-1.5 rounded-xl border border-emerald-100"
            }, toDisplayString(isEditing.value ? "Cancel Editing" : "Edit Details"), 1)
          ]),
          createBaseVNode("form", {
            onSubmit: withModifiers(handleUpdateProfile, ["prevent"]),
            class: "grid grid-cols-1 md:grid-cols-2 gap-6"
          }, [
            createBaseVNode("div", null, [
              _cache[8] || (_cache[8] = createBaseVNode("label", { class: "block text-xs font-bold text-slate-550 mb-1.5 uppercase tracking-wider" }, "Full Name", -1)),
              createBaseVNode("div", _hoisted_18, [
                createVNode(unref(User), { class: "absolute left-3.5 top-1/2 transform -translate-y-1/2 w-4.5 h-4.5 text-slate-400" }),
                withDirectives(createBaseVNode("input", {
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => form.value.name = $event),
                  type: "text",
                  disabled: !isEditing.value,
                  class: "w-full pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-xs font-semibold focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none disabled:bg-slate-50/50 disabled:text-slate-400"
                }, null, 8, _hoisted_19), [
                  [vModelText, form.value.name]
                ])
              ])
            ]),
            createBaseVNode("div", null, [
              _cache[9] || (_cache[9] = createBaseVNode("label", { class: "block text-xs font-bold text-slate-550 mb-1.5 uppercase tracking-wider" }, "Email Address", -1)),
              createBaseVNode("div", _hoisted_20, [
                createVNode(unref(Mail), { class: "absolute left-3.5 top-1/2 transform -translate-y-1/2 w-4.5 h-4.5 text-slate-400" }),
                withDirectives(createBaseVNode("input", {
                  "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => form.value.email = $event),
                  type: "email",
                  disabled: !isEditing.value,
                  class: "w-full pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-xs font-semibold focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none disabled:bg-slate-50/50 disabled:text-slate-400"
                }, null, 8, _hoisted_21), [
                  [vModelText, form.value.email]
                ])
              ])
            ]),
            createBaseVNode("div", null, [
              _cache[10] || (_cache[10] = createBaseVNode("label", { class: "block text-xs font-bold text-slate-550 mb-1.5 uppercase tracking-wider" }, "Phone Number", -1)),
              createBaseVNode("div", _hoisted_22, [
                createVNode(unref(Phone), { class: "absolute left-3.5 top-1/2 transform -translate-y-1/2 w-4.5 h-4.5 text-slate-400" }),
                withDirectives(createBaseVNode("input", {
                  "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => form.value.phone = $event),
                  type: "tel",
                  disabled: !isEditing.value,
                  class: "w-full pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-xs font-semibold focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none disabled:bg-slate-50/50 disabled:text-slate-400"
                }, null, 8, _hoisted_23), [
                  [vModelText, form.value.phone]
                ])
              ])
            ]),
            isEditing.value ? (openBlock(), createElementBlock("div", _hoisted_24, [
              _cache[13] || (_cache[13] = createBaseVNode("h3", { class: "text-xs font-bold text-slate-400 uppercase tracking-widest mb-4" }, "Change Password (Optional)", -1)),
              createBaseVNode("div", _hoisted_25, [
                createBaseVNode("div", null, [
                  _cache[11] || (_cache[11] = createBaseVNode("label", { class: "block text-xs font-bold text-slate-550 mb-1.5 uppercase tracking-wider" }, "New Password", -1)),
                  createBaseVNode("div", _hoisted_26, [
                    createVNode(unref(Lock), { class: "absolute left-3.5 top-1/2 transform -translate-y-1/2 w-4.5 h-4.5 text-slate-400" }),
                    withDirectives(createBaseVNode("input", {
                      "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => form.value.password = $event),
                      type: "password",
                      placeholder: "Leave blank to keep current",
                      class: "w-full pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-xs font-semibold focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none"
                    }, null, 512), [
                      [vModelText, form.value.password]
                    ])
                  ])
                ]),
                createBaseVNode("div", null, [
                  _cache[12] || (_cache[12] = createBaseVNode("label", { class: "block text-xs font-bold text-slate-550 mb-1.5 uppercase tracking-wider" }, "Confirm Password", -1)),
                  createBaseVNode("div", _hoisted_27, [
                    createVNode(unref(Lock), { class: "absolute left-3.5 top-1/2 transform -translate-y-1/2 w-4.5 h-4.5 text-slate-400" }),
                    withDirectives(createBaseVNode("input", {
                      "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => form.value.password_confirmation = $event),
                      type: "password",
                      placeholder: "Confirm new password",
                      class: "w-full pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-xs font-semibold focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none"
                    }, null, 512), [
                      [vModelText, form.value.password_confirmation]
                    ])
                  ])
                ])
              ])
            ])) : createCommentVNode("", true),
            isEditing.value ? (openBlock(), createElementBlock("div", _hoisted_28, [
              createBaseVNode("button", {
                type: "button",
                onClick: cancelEdit,
                class: "px-5 py-2.5 border border-slate-200 text-slate-500 font-bold rounded-xl hover:bg-slate-50 transition-colors text-xs cursor-pointer shadow-sm"
              }, " Cancel "),
              createBaseVNode("button", {
                type: "submit",
                disabled: isSaving.value,
                class: "px-5 py-2.5 bg-emerald-700 text-white font-bold rounded-xl hover:bg-emerald-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center text-xs cursor-pointer shadow-sm"
              }, [
                isSaving.value ? (openBlock(), createElementBlock("span", _hoisted_30, [..._cache[14] || (_cache[14] = [
                  createBaseVNode("div", { class: "w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" }, null, -1)
                ])])) : createCommentVNode("", true),
                createTextVNode(" " + toDisplayString(isSaving.value ? "Saving..." : "Save Changes"), 1)
              ], 8, _hoisted_29)
            ])) : createCommentVNode("", true)
          ], 32)
        ]),
        createBaseVNode("div", _hoisted_31, [
          createBaseVNode("h2", _hoisted_32, [
            createVNode(unref(ShieldCheck), { class: "w-5 h-5 mr-2 text-emerald-650" }),
            _cache[15] || (_cache[15] = createTextVNode(" Device & Session Management ", -1))
          ]),
          createVNode(_sfc_main$1)
        ])
      ]);
    };
  }
});
const ProfilePage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-a773dbc6"]]);
export {
  ProfilePage as default
};
