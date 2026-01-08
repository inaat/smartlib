<template>
  <div class="landing-page">
    <!-- Navigation -->
    <nav class="navbar">
      <div class="container">
        <router-link to="/" class="logo">
          <div class="logo-icon">SL</div>
          <span>Smart Library</span>
        </router-link>
        <ul class="nav-links">
          <li><a href="#features">Features</a></li>
          <li><a href="#benefits">Benefits</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><router-link to="/login" class="btn-primary">Login</router-link></li>
        </ul>
      </div>
    </nav>

    <!-- Hero Section -->
    <section class="hero">
      <div class="container">
        <div class="hero-content">
          <h1>Smart Library Management for Modern Institutions</h1>
          <p>Manage students, books, and borrowing in one clean, intelligent platform. Perfect for schools, colleges, and universities.</p>
          <div class="hero-buttons">
            <a href="#contact" class="btn-primary">Request Demo</a>
            <a href="#features" class="btn-secondary">View Features →</a>
          </div>
        </div>
        <div class="hero-image">
          <div class="dashboard-mockup">
            <div class="mockup-header"></div>
            <div class="mockup-sidebar"></div>
            <div class="mockup-content">
              <div class="mockup-card"></div>
              <div class="mockup-card"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section id="features" class="features">
      <div class="container">
        <div class="section-header">
          <h2>Everything You Need to Manage Your Library</h2>
          <p>Powerful features designed for modern educational institutions</p>
        </div>
        <div class="features-grid">
          <div v-for="feature in features" :key="feature.title" class="feature-card">
            <div class="feature-icon">
              <component :is="feature.icon" />
            </div>
            <h3>{{ feature.title }}</h3>
            <p>{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Benefits Section -->
    <section id="benefits" class="benefits">
      <div class="container">
        <div>
          <h2>Why Choose Our Platform?</h2>
          <p class="subtitle">Join hundreds of institutions already transforming their library management</p>
        </div>
        <ul class="benefits-list">
          <li v-for="benefit in benefits" :key="benefit.title" class="benefit-item">
            <div class="check-icon">
              <Check />
            </div>
            <div>
              <h4>{{ benefit.title }}</h4>
              <p>{{ benefit.description }}</p>
            </div>
          </li>
        </ul>
      </div>
    </section>

    <!-- Pricing Section -->
    <section id="pricing" class="pricing">
      <div class="container">
        <div class="section-header">
          <h2>Simple, Transparent Pricing</h2>
          <p>Choose the plan that fits your institution's needs</p>
        </div>
        <div class="pricing-grid">
          <div v-for="plan in pricingPlans" :key="plan.name" 
               :class="['pricing-card', { featured: plan.featured }]">
            <h3>{{ plan.name }}</h3>
            <p class="plan-subtitle">{{ plan.subtitle }}</p>
            <div class="price">{{ plan.price }}<span v-if="plan.period">/{{ plan.period }}</span></div>
            <ul class="pricing-features">
              <li v-for="feature in plan.features" :key="feature">
                <div class="check-icon">
                  <Check />
                </div>
                {{ feature }}
              </li>
            </ul>
            <router-link 
              :to="{ path: '/register', query: { plan_id: plan.id } }" 
              class="btn-primary full-width text-center"
            >
              {{ plan.cta }}
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section id="contact" class="cta">
      <div class="container">
        <h2>Ready to Transform Your Library?</h2>
        <p>Join hundreds of institutions already using our platform</p>
        <router-link to="/register" class="btn-primary btn-large">Start Free Trial</router-link>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-column">
            <router-link to="/" class="logo">
              <div class="logo-icon">SL</div>
              <span>Smart Library</span>
            </router-link>
            <p>Modern library management software for educational institutions.</p>
          </div>
          <div class="footer-column">
            <h4>Company</h4>
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><a href="#careers">Careers</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div class="footer-column">
            <h4>Product</h4>
            <ul>
              <li><a href="#features">Features</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><router-link to="/login">Login</router-link></li>
            </ul>
          </div>
          <div class="footer-column">
            <h4>Resources</h4>
            <ul>
              <li><a href="#blog">Blog</a></li>
              <li><a href="#docs">Documentation</a></li>
              <li><a href="#support">Support</a></li>
            </ul>
          </div>
          <div class="footer-column">
            <h4>Legal</h4>
            <ul>
              <li><a href="#privacy">Privacy Policy</a></li>
              <li><a href="#terms">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <p>© 2024 Smart Library. All rights reserved.</p>
          <div class="social-links">
            <a href="#twitter"><Twitter /></a>
            <a href="#linkedin"><Linkedin /></a>
            <a href="#facebook"><Facebook /></a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { 
  BookOpen, 
  Users, 
  BarChart3, 
  Lock, 
  Smartphone, 
  Zap,
  Check,
  Twitter,
  Linkedin,
  Facebook
} from 'lucide-vue-next';
import { ref, onMounted } from 'vue';
import axios from 'axios';

const features = [
  {
    icon: BookOpen,
    title: 'Digital Catalog Management',
    description: 'Organize and manage your entire book collection with powerful search, categorization, and tracking features.'
  },
  {
    icon: Users,
    title: 'Student Management',
    description: 'Track student borrowing history, manage memberships, and send automated notifications for due dates.'
  },
  {
    icon: BarChart3,
    title: 'Analytics & Reports',
    description: 'Get insights into borrowing patterns, popular books, and library usage with comprehensive analytics.'
  },
  {
    icon: Lock,
    title: 'Secure Access Control',
    description: 'Role-based permissions ensure librarians, students, and administrators have appropriate access levels.'
  },
  {
    icon: Smartphone,
    title: 'Mobile-Friendly',
    description: 'Access your library system from any device with our responsive, mobile-optimized interface.'
  },
  {
    icon: Zap,
    title: 'Real-Time Updates',
    description: 'Instant notifications for book availability, due dates, and reservation confirmations.'
  }
];

const benefits = [
  {
    title: 'Automated Borrowing System',
    description: 'Streamline check-outs and returns with barcode scanning and automated workflows'
  },
  {
    title: 'Real-Time Availability Tracking',
    description: 'Students can instantly check book availability and place reservations online'
  },
  {
    title: 'Comprehensive Reporting',
    description: 'Generate detailed reports on circulation, inventory, and user activity'
  },
  {
    title: 'Easy Integration',
    description: 'Seamlessly integrate with your existing student information systems'
  },
  {
    title: '24/7 Support',
    description: 'Our dedicated support team is always ready to help you succeed'
  }
];

interface Plan {
  id: number;
  name: string;
  subtitle: string;
  price: string;
  period: string;
  features: string[];
  cta: string;
  featured: boolean;
}

const pricingPlans = ref<Plan[]>([]);

onMounted(async () => {
  try {
    const response = await axios.get('/api/subscription-plans/public');
    pricingPlans.value = response.data.map((plan: any) => {
      const features = [
        plan.free_trial_days > 0 ? `${plan.free_trial_days} Days Free Trial` : null,
        plan.daily_seat_bookings_limit > 0 ? `${plan.daily_seat_bookings_limit} Daily Seat Bookings` : 'Unlimited Daily Seat Bookings',
        plan.monthly_seat_bookings_limit > 0 ? `${plan.monthly_seat_bookings_limit} Monthly Seat Bookings` : 'Unlimited Monthly Seat Bookings',
        plan.libraries_access_limit > 0 ? `Access to ${plan.libraries_access_limit} Libraries` : 'Access to All Libraries',
        plan.books_access_limit > 0 ? `Borrow up to ${plan.books_access_limit} Books` : 'Unlimited Book Borrowing',
        plan.events_joining_limit > 0 ? `Join up to ${plan.events_joining_limit} Events` : 'Unlimited Event Access',
        plan.advance_booking_days > 0 ? `${plan.advance_booking_days} Days Advance Booking` : (plan.advance_booking_days === 0 ? 'Same Day Booking Only' : 'Unlimited Advance Booking'),
        plan.digital_books_access ? 'Digital Books Access' : null,
        plan.priority_booking ? 'Priority Seat Booking' : null,
        plan.event_discounts > 0 ? `${plan.event_discounts}% Event Discount` : null,
      ].filter(Boolean);

      return {
        id: plan.id,
        name: plan.name,
        subtitle: plan.description || 'Perfect for you',
        price: `$${plan.price}`,
        period: plan.duration_days === 30 ? 'month' : `${plan.duration_days} days`,
        features: features,
        cta: plan.free_trial_days > 0 ? 'Start Free Trial' : 'Get Started',
        featured: plan.priority_booking
      };
    });
  } catch (error) {
    console.error('Failed to fetch plans', error);
  }
});
</script>

<style scoped>
.landing-page {
  background: #ffffff;
  min-height: 100vh;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

/* Navigation */
.navbar {
  background: #ffffff;
  border-bottom: 1px solid #e0e0e0;
  padding: 20px 0;
  position: sticky;
  top: 0;
  z-index: 100;
}

.navbar .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 24px;
  font-weight: 800;
  color: #212121;
  text-decoration: none;
}

.logo-icon {
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 800;
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 40px;
  align-items: center;
}

.nav-links a {
  color: #757575;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s;
}

.nav-links a:hover {
  color: #212121;
}

.btn-primary {
  background: linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%);
  color: white;
  padding: 12px 28px;
  border-radius: 8px;
  border: none;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  text-decoration: none;
  display: inline-block;
}

.btn-primary:hover {
  background: linear-gradient(135deg, #4338CA 0%, #6D28D9 100%);
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(79, 70, 229, 0.3);
}

.btn-secondary {
  color: #757575;
  padding: 12px 28px;
  border: none;
  background: transparent;
  font-weight: 600;
  cursor: pointer;
  transition: color 0.2s;
  text-decoration: none;
  display: inline-block;
}

.btn-secondary:hover {
  color: #212121;
}

/* Hero Section */
.hero {
  padding: 120px 0;
  background: #ffffff;
}

.hero .container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
}

.hero-content h1 {
  font-size: 56px;
  font-weight: 800;
  color: #212121;
  line-height: 1.1;
  margin-bottom: 24px;
}

.hero-content p {
  font-size: 20px;
  color: #757575;
  margin-bottom: 40px;
  line-height: 1.6;
}

.hero-buttons {
  display: flex;
  gap: 16px;
}

.hero-image {
  background: #fafafa;
  border-radius: 12px;
  border: 1px solid #e0e0e0;
  padding: 24px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06);
}

.dashboard-mockup {
  background: #f5f5f5;
  border-radius: 8px;
  height: 400px;
  position: relative;
  overflow: hidden;
}

.mockup-header {
  background: white;
  height: 60px;
  border-bottom: 1px solid #e0e0e0;
}

.mockup-sidebar {
  position: absolute;
  left: 0;
  top: 60px;
  width: 150px;
  height: calc(100% - 60px);
  background: white;
  border-right: 1px solid #e0e0e0;
}

.mockup-content {
  position: absolute;
  left: 170px;
  top: 80px;
  right: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.mockup-card {
  background: white;
  height: 100px;
  border-radius: 8px;
  border: 1px solid #e0e0e0;
}

/* Features Section */
.features {
  padding: 100px 0;
  background: #fafafa;
}

.section-header {
  text-align: center;
  margin-bottom: 64px;
}

.section-header h2 {
  font-size: 42px;
  font-weight: 800;
  color: #212121;
  margin-bottom: 16px;
}

.section-header p {
  font-size: 18px;
  color: #757575;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
}

.feature-card {
  background: #ffffff;
  padding: 40px 32px;
  border-radius: 12px;
  border: 1px solid #e0e0e0;
  transition: all 0.2s;
}

.feature-card:hover {
  border-color: #4F46E5;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
}

.feature-icon {
  width: 56px;
  height: 56px;
  background: linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
  color: white;
}

.feature-card h3 {
  font-size: 22px;
  font-weight: 700;
  color: #212121;
  margin-bottom: 12px;
}

.feature-card p {
  font-size: 16px;
  color: #757575;
  line-height: 1.6;
}

/* Benefits Section */
.benefits {
  padding: 100px 0;
  background: #ffffff;
}

.benefits .container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
}

.benefits h2 {
  font-size: 42px;
  font-weight: 800;
  color: #212121;
  margin-bottom: 24px;
  line-height: 1.2;
}

.subtitle {
  font-size: 18px;
  margin-bottom: 40px;
}

.benefits-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.benefit-item {
  display: flex;
  align-items: flex-start;
  gap: 16px;
}

.check-icon {
  width: 24px;
  height: 24px;
  background: linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin-top: 2px;
  color: white;
}

.benefit-item div h4 {
  font-size: 18px;
  font-weight: 600;
  color: #212121;
  margin-bottom: 4px;
}

.benefit-item div p {
  font-size: 15px;
  color: #757575;
}

/* Pricing Section */
.pricing {
  padding: 100px 0;
  background: #fafafa;
}

.pricing-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  margin-top: 64px;
}

.pricing-card {
  background: #ffffff;
  padding: 48px 40px;
  border-radius: 12px;
  border: 1px solid #e0e0e0;
  transition: all 0.2s;
}

.pricing-card.featured {
  border-color: #4F46E5;
  box-shadow: 0 8px 32px rgba(79, 70, 229, 0.15);
  transform: scale(1.05);
}

.pricing-card:hover {
  border-color: #4F46E5;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
}

.pricing-card h3 {
  font-size: 24px;
  font-weight: 700;
  color: #212121;
  margin-bottom: 8px;
}

.plan-subtitle {
  color: #757575;
  font-size: 15px;
}

.pricing-card .price {
  font-size: 48px;
  font-weight: 800;
  color: #212121;
  margin: 24px 0;
}

.pricing-card .price span {
  font-size: 18px;
  font-weight: 500;
  color: #757575;
}

.pricing-features {
  list-style: none;
  margin: 32px 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.pricing-features li {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 15px;
  color: #757575;
}

.pricing-features .check-icon {
  width: 20px;
  height: 20px;
}

.full-width {
  width: 100%;
  text-align: center;
}

/* CTA Section */
.cta {
  padding: 120px 0;
  background: #ffffff;
  text-align: center;
}

.cta h2 {
  font-size: 48px;
  font-weight: 800;
  color: #212121;
  margin-bottom: 16px;
}

.cta p {
  font-size: 20px;
  color: #757575;
  margin-bottom: 40px;
}

.btn-large {
  font-size: 18px;
  padding: 16px 40px;
}

/* Footer */
.footer {
  background: #fafafa;
  border-top: 1px solid #e0e0e0;
  padding: 64px 0 32px;
}

.footer-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
  gap: 48px;
  margin-bottom: 48px;
}

.footer-column h4 {
  font-size: 16px;
  font-weight: 700;
  color: #212121;
  margin-bottom: 20px;
}

.footer-column ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.footer-column a {
  color: #757575;
  text-decoration: none;
  font-size: 15px;
  transition: color 0.2s;
}

.footer-column a:hover {
  color: #4F46E5;
}

.footer-column p {
  font-size: 15px;
  line-height: 1.6;
  color: #757575;
}

.footer-bottom {
  padding-top: 32px;
  border-top: 1px solid #e0e0e0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.footer-bottom p {
  font-size: 14px;
  color: #757575;
}

.social-links {
  display: flex;
  gap: 16px;
}

.social-links a {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 1px solid #e0e0e0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
  color: #757575;
}

.social-links a:hover {
  border-color: #4F46E5;
  background: #4F46E5;
  color: white;
}

/* Responsive */
@media (max-width: 968px) {
  .hero .container,
  .benefits .container {
    grid-template-columns: 1fr;
    gap: 48px;
  }

  .features-grid,
  .pricing-grid {
    grid-template-columns: 1fr;
  }

  .footer-grid {
    grid-template-columns: 1fr 1fr;
  }

  .hero-content h1 {
    font-size: 42px;
  }

  .nav-links {
    display: none;
  }
}
</style>
