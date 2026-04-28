import { d as defineComponent, r as ref, o as onMounted, a as axios, c as createElementBlock, b as createBaseVNode, e as createStaticVNode, f as createVNode, w as withCtx, g as resolveComponent, F as Fragment, h as renderList, u as unref, i as openBlock, j as createTextVNode, k as createBlock, l as resolveDynamicComponent, t as toDisplayString, n as normalizeClass, m as createCommentVNode } from "./main-TSJawxZI.js";
import { c as createLucideIcon } from "./createLucideIcon-Dj92g2Ex.js";
import { B as BookOpen } from "./book-open-BrKGkk7W.js";
import { U as Users } from "./users-D373qUzk.js";
import { C as ChartColumn } from "./chart-column-NDtKoNz5.js";
import { L as Lock } from "./lock-aY4OLtUQ.js";
import { S as Smartphone } from "./smartphone-BA2HW8KH.js";
import { Z as Zap } from "./zap-Bcj9QZE_.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
/* empty css               */
const Check = createLucideIcon("check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
const Facebook = createLucideIcon("facebook", [
  [
    "path",
    { d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z", key: "1jg4f8" }
  ]
]);
const Linkedin = createLucideIcon("linkedin", [
  [
    "path",
    {
      d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",
      key: "c2jq9f"
    }
  ],
  ["rect", { width: "4", height: "12", x: "2", y: "9", key: "mk3on5" }],
  ["circle", { cx: "4", cy: "4", r: "2", key: "bt5ra8" }]
]);
const Twitter = createLucideIcon("twitter", [
  [
    "path",
    {
      d: "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",
      key: "pff0z6"
    }
  ]
]);
const _hoisted_1 = { class: "landing-page" };
const _hoisted_2 = { class: "navbar" };
const _hoisted_3 = { class: "container" };
const _hoisted_4 = { class: "nav-links" };
const _hoisted_5 = {
  id: "features",
  class: "features"
};
const _hoisted_6 = { class: "container" };
const _hoisted_7 = { class: "features-grid" };
const _hoisted_8 = { class: "feature-icon" };
const _hoisted_9 = {
  id: "benefits",
  class: "benefits"
};
const _hoisted_10 = { class: "container" };
const _hoisted_11 = { class: "benefits-list" };
const _hoisted_12 = { class: "check-icon" };
const _hoisted_13 = {
  id: "pricing",
  class: "pricing"
};
const _hoisted_14 = { class: "container" };
const _hoisted_15 = { class: "pricing-grid" };
const _hoisted_16 = { class: "plan-subtitle" };
const _hoisted_17 = { class: "price" };
const _hoisted_18 = { key: 0 };
const _hoisted_19 = { class: "pricing-features" };
const _hoisted_20 = { class: "check-icon" };
const _hoisted_21 = {
  id: "contact",
  class: "cta"
};
const _hoisted_22 = { class: "container" };
const _hoisted_23 = { class: "footer" };
const _hoisted_24 = { class: "container" };
const _hoisted_25 = { class: "footer-grid" };
const _hoisted_26 = { class: "footer-column" };
const _hoisted_27 = { class: "footer-column" };
const _hoisted_28 = { class: "footer-bottom" };
const _hoisted_29 = { class: "social-links" };
const _hoisted_30 = { href: "#twitter" };
const _hoisted_31 = { href: "#linkedin" };
const _hoisted_32 = { href: "#facebook" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "LandingPage",
  setup(__props) {
    const features = [
      {
        icon: BookOpen,
        title: "Digital Catalog Management",
        description: "Organize and manage your entire book collection with powerful search, categorization, and tracking features."
      },
      {
        icon: Users,
        title: "Student Management",
        description: "Track student borrowing history, manage memberships, and send automated notifications for due dates."
      },
      {
        icon: ChartColumn,
        title: "Analytics & Reports",
        description: "Get insights into borrowing patterns, popular books, and library usage with comprehensive analytics."
      },
      {
        icon: Lock,
        title: "Secure Access Control",
        description: "Role-based permissions ensure librarians, students, and administrators have appropriate access levels."
      },
      {
        icon: Smartphone,
        title: "Mobile-Friendly",
        description: "Access your library system from any device with our responsive, mobile-optimized interface."
      },
      {
        icon: Zap,
        title: "Real-Time Updates",
        description: "Instant notifications for book availability, due dates, and reservation confirmations."
      }
    ];
    const benefits = [
      {
        title: "Automated Borrowing System",
        description: "Streamline check-outs and returns with barcode scanning and automated workflows"
      },
      {
        title: "Real-Time Availability Tracking",
        description: "Students can instantly check book availability and place reservations online"
      },
      {
        title: "Comprehensive Reporting",
        description: "Generate detailed reports on circulation, inventory, and user activity"
      },
      {
        title: "Easy Integration",
        description: "Seamlessly integrate with your existing student information systems"
      },
      {
        title: "24/7 Support",
        description: "Our dedicated support team is always ready to help you succeed"
      }
    ];
    const pricingPlans = ref([]);
    onMounted(async () => {
      try {
        const response = await axios.get("/api/subscription-plans/public");
        pricingPlans.value = response.data.map((plan) => {
          const features2 = [
            plan.free_trial_days > 0 ? `${plan.free_trial_days} Days Free Trial` : null,
            plan.daily_seat_bookings_limit > 0 ? `${plan.daily_seat_bookings_limit} Daily Seat Bookings` : "Unlimited Daily Seat Bookings",
            plan.monthly_seat_bookings_limit > 0 ? `${plan.monthly_seat_bookings_limit} Monthly Seat Bookings` : "Unlimited Monthly Seat Bookings",
            plan.libraries_access_limit > 0 ? `Access to ${plan.libraries_access_limit} Libraries` : "Access to All Libraries",
            plan.books_access_limit > 0 ? `Borrow up to ${plan.books_access_limit} Books` : "Unlimited Book Borrowing",
            plan.events_joining_limit > 0 ? `Join up to ${plan.events_joining_limit} Events` : "Unlimited Event Access",
            plan.advance_booking_days > 0 ? `${plan.advance_booking_days} Days Advance Booking` : plan.advance_booking_days === 0 ? "Same Day Booking Only" : "Unlimited Advance Booking",
            plan.digital_books_access ? "Digital Books Access" : null,
            plan.priority_booking ? "Priority Seat Booking" : null,
            plan.event_discounts > 0 ? `${plan.event_discounts}% Event Discount` : null
          ].filter(Boolean);
          return {
            id: plan.id,
            name: plan.name,
            subtitle: plan.description || "Perfect for you",
            price: `$${plan.price}`,
            period: plan.duration_days === 30 ? "month" : `${plan.duration_days} days`,
            features: features2,
            cta: plan.free_trial_days > 0 ? "Start Free Trial" : "Get Started",
            featured: plan.priority_booking
          };
        });
      } catch (error) {
        console.error("Failed to fetch plans", error);
      }
    });
    return (_ctx, _cache) => {
      const _component_router_link = resolveComponent("router-link");
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("nav", _hoisted_2, [
          createBaseVNode("div", _hoisted_3, [
            createVNode(_component_router_link, {
              to: "/",
              class: "logo"
            }, {
              default: withCtx(() => [..._cache[0] || (_cache[0] = [
                createBaseVNode("div", { class: "logo-icon" }, "SL", -1),
                createBaseVNode("span", null, "Smart Library", -1)
              ])]),
              _: 1
            }),
            createBaseVNode("ul", _hoisted_4, [
              _cache[2] || (_cache[2] = createBaseVNode("li", null, [
                createBaseVNode("a", { href: "#features" }, "Features")
              ], -1)),
              _cache[3] || (_cache[3] = createBaseVNode("li", null, [
                createBaseVNode("a", { href: "#benefits" }, "Benefits")
              ], -1)),
              _cache[4] || (_cache[4] = createBaseVNode("li", null, [
                createBaseVNode("a", { href: "#pricing" }, "Pricing")
              ], -1)),
              _cache[5] || (_cache[5] = createBaseVNode("li", null, [
                createBaseVNode("a", { href: "#contact" }, "Contact")
              ], -1)),
              createBaseVNode("li", null, [
                createVNode(_component_router_link, {
                  to: "/login",
                  class: "btn-primary"
                }, {
                  default: withCtx(() => [..._cache[1] || (_cache[1] = [
                    createTextVNode("Login", -1)
                  ])]),
                  _: 1
                })
              ])
            ])
          ])
        ]),
        _cache[21] || (_cache[21] = createStaticVNode('<section class="hero" data-v-af2d027d><div class="container" data-v-af2d027d><div class="hero-content" data-v-af2d027d><h1 data-v-af2d027d>Smart Library Management for Modern Institutions</h1><p data-v-af2d027d>Manage students, books, and borrowing in one clean, intelligent platform. Perfect for schools, colleges, and universities.</p><div class="hero-buttons" data-v-af2d027d><a href="#contact" class="btn-primary" data-v-af2d027d>Request Demo</a><a href="#features" class="btn-secondary" data-v-af2d027d>View Features →</a></div></div><div class="hero-image" data-v-af2d027d><div class="dashboard-mockup" data-v-af2d027d><div class="mockup-header" data-v-af2d027d></div><div class="mockup-sidebar" data-v-af2d027d></div><div class="mockup-content" data-v-af2d027d><div class="mockup-card" data-v-af2d027d></div><div class="mockup-card" data-v-af2d027d></div></div></div></div></div></section>', 1)),
        createBaseVNode("section", _hoisted_5, [
          createBaseVNode("div", _hoisted_6, [
            _cache[6] || (_cache[6] = createBaseVNode("div", { class: "section-header" }, [
              createBaseVNode("h2", null, "Everything You Need to Manage Your Library"),
              createBaseVNode("p", null, "Powerful features designed for modern educational institutions")
            ], -1)),
            createBaseVNode("div", _hoisted_7, [
              (openBlock(), createElementBlock(Fragment, null, renderList(features, (feature) => {
                return createBaseVNode("div", {
                  key: feature.title,
                  class: "feature-card"
                }, [
                  createBaseVNode("div", _hoisted_8, [
                    (openBlock(), createBlock(resolveDynamicComponent(feature.icon)))
                  ]),
                  createBaseVNode("h3", null, toDisplayString(feature.title), 1),
                  createBaseVNode("p", null, toDisplayString(feature.description), 1)
                ]);
              }), 64))
            ])
          ])
        ]),
        createBaseVNode("section", _hoisted_9, [
          createBaseVNode("div", _hoisted_10, [
            _cache[7] || (_cache[7] = createBaseVNode("div", null, [
              createBaseVNode("h2", null, "Why Choose Our Platform?"),
              createBaseVNode("p", { class: "subtitle" }, "Join hundreds of institutions already transforming their library management")
            ], -1)),
            createBaseVNode("ul", _hoisted_11, [
              (openBlock(), createElementBlock(Fragment, null, renderList(benefits, (benefit) => {
                return createBaseVNode("li", {
                  key: benefit.title,
                  class: "benefit-item"
                }, [
                  createBaseVNode("div", _hoisted_12, [
                    createVNode(unref(Check))
                  ]),
                  createBaseVNode("div", null, [
                    createBaseVNode("h4", null, toDisplayString(benefit.title), 1),
                    createBaseVNode("p", null, toDisplayString(benefit.description), 1)
                  ])
                ]);
              }), 64))
            ])
          ])
        ]),
        createBaseVNode("section", _hoisted_13, [
          createBaseVNode("div", _hoisted_14, [
            _cache[8] || (_cache[8] = createBaseVNode("div", { class: "section-header" }, [
              createBaseVNode("h2", null, "Simple, Transparent Pricing"),
              createBaseVNode("p", null, "Choose the plan that fits your institution's needs")
            ], -1)),
            createBaseVNode("div", _hoisted_15, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(pricingPlans.value, (plan) => {
                return openBlock(), createElementBlock("div", {
                  key: plan.name,
                  class: normalizeClass(["pricing-card", { featured: plan.featured }])
                }, [
                  createBaseVNode("h3", null, toDisplayString(plan.name), 1),
                  createBaseVNode("p", _hoisted_16, toDisplayString(plan.subtitle), 1),
                  createBaseVNode("div", _hoisted_17, [
                    createTextVNode(toDisplayString(plan.price), 1),
                    plan.period ? (openBlock(), createElementBlock("span", _hoisted_18, "/" + toDisplayString(plan.period), 1)) : createCommentVNode("", true)
                  ]),
                  createBaseVNode("ul", _hoisted_19, [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(plan.features, (feature) => {
                      return openBlock(), createElementBlock("li", { key: feature }, [
                        createBaseVNode("div", _hoisted_20, [
                          createVNode(unref(Check))
                        ]),
                        createTextVNode(" " + toDisplayString(feature), 1)
                      ]);
                    }), 128))
                  ]),
                  createVNode(_component_router_link, {
                    to: { path: "/register", query: { plan_id: plan.id } },
                    class: "btn-primary full-width text-center"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(plan.cta), 1)
                    ]),
                    _: 2
                  }, 1032, ["to"])
                ], 2);
              }), 128))
            ])
          ])
        ]),
        createBaseVNode("section", _hoisted_21, [
          createBaseVNode("div", _hoisted_22, [
            _cache[10] || (_cache[10] = createBaseVNode("h2", null, "Ready to Transform Your Library?", -1)),
            _cache[11] || (_cache[11] = createBaseVNode("p", null, "Join hundreds of institutions already using our platform", -1)),
            createVNode(_component_router_link, {
              to: "/register",
              class: "btn-primary btn-large"
            }, {
              default: withCtx(() => [..._cache[9] || (_cache[9] = [
                createTextVNode("Start Free Trial", -1)
              ])]),
              _: 1
            })
          ])
        ]),
        createBaseVNode("footer", _hoisted_23, [
          createBaseVNode("div", _hoisted_24, [
            createBaseVNode("div", _hoisted_25, [
              createBaseVNode("div", _hoisted_26, [
                createVNode(_component_router_link, {
                  to: "/",
                  class: "logo"
                }, {
                  default: withCtx(() => [..._cache[12] || (_cache[12] = [
                    createBaseVNode("div", { class: "logo-icon" }, "SL", -1),
                    createBaseVNode("span", null, "Smart Library", -1)
                  ])]),
                  _: 1
                }),
                _cache[13] || (_cache[13] = createBaseVNode("p", null, "Modern library management software for educational institutions.", -1))
              ]),
              _cache[18] || (_cache[18] = createBaseVNode("div", { class: "footer-column" }, [
                createBaseVNode("h4", null, "Company"),
                createBaseVNode("ul", null, [
                  createBaseVNode("li", null, [
                    createBaseVNode("a", { href: "#about" }, "About Us")
                  ]),
                  createBaseVNode("li", null, [
                    createBaseVNode("a", { href: "#careers" }, "Careers")
                  ]),
                  createBaseVNode("li", null, [
                    createBaseVNode("a", { href: "#contact" }, "Contact")
                  ])
                ])
              ], -1)),
              createBaseVNode("div", _hoisted_27, [
                _cache[17] || (_cache[17] = createBaseVNode("h4", null, "Product", -1)),
                createBaseVNode("ul", null, [
                  _cache[15] || (_cache[15] = createBaseVNode("li", null, [
                    createBaseVNode("a", { href: "#features" }, "Features")
                  ], -1)),
                  _cache[16] || (_cache[16] = createBaseVNode("li", null, [
                    createBaseVNode("a", { href: "#pricing" }, "Pricing")
                  ], -1)),
                  createBaseVNode("li", null, [
                    createVNode(_component_router_link, { to: "/login" }, {
                      default: withCtx(() => [..._cache[14] || (_cache[14] = [
                        createTextVNode("Login", -1)
                      ])]),
                      _: 1
                    })
                  ])
                ])
              ]),
              _cache[19] || (_cache[19] = createStaticVNode('<div class="footer-column" data-v-af2d027d><h4 data-v-af2d027d>Resources</h4><ul data-v-af2d027d><li data-v-af2d027d><a href="#blog" data-v-af2d027d>Blog</a></li><li data-v-af2d027d><a href="#docs" data-v-af2d027d>Documentation</a></li><li data-v-af2d027d><a href="#support" data-v-af2d027d>Support</a></li></ul></div><div class="footer-column" data-v-af2d027d><h4 data-v-af2d027d>Legal</h4><ul data-v-af2d027d><li data-v-af2d027d><a href="#privacy" data-v-af2d027d>Privacy Policy</a></li><li data-v-af2d027d><a href="#terms" data-v-af2d027d>Terms of Service</a></li></ul></div>', 2))
            ]),
            createBaseVNode("div", _hoisted_28, [
              _cache[20] || (_cache[20] = createBaseVNode("p", null, "© 2024 Smart Library. All rights reserved.", -1)),
              createBaseVNode("div", _hoisted_29, [
                createBaseVNode("a", _hoisted_30, [
                  createVNode(unref(Twitter))
                ]),
                createBaseVNode("a", _hoisted_31, [
                  createVNode(unref(Linkedin))
                ]),
                createBaseVNode("a", _hoisted_32, [
                  createVNode(unref(Facebook))
                ])
              ])
            ])
          ])
        ])
      ]);
    };
  }
});
const LandingPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-af2d027d"]]);
export {
  LandingPage as default
};
