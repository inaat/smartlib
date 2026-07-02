<template>
  <div class="min-h-screen bg-white font-sans antialiased text-slate-800">
    
    <!-- Floating Pill Navbar -->
    <header 
      :class="[
        'fixed left-0 right-0 z-50 transition-all duration-300 flex justify-center px-4',
        hasScrolled ? 'top-4' : 'top-0'
      ]"
    >
      <div 
        :class="[
          'w-full transition-all duration-300 flex items-center justify-between',
          hasScrolled 
            ? 'max-w-5xl bg-white/95 backdrop-blur-md border border-slate-200/80 shadow-lg shadow-slate-100/40 rounded-full px-6 py-3' 
            : 'max-w-7xl bg-transparent px-6 py-5'
        ]"
      >
        <!-- Logo -->
        <router-link to="/" class="flex items-center space-x-2.5 group">
          <div class="h-10 w-10 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
            <BookOpen class="h-5.5 w-5.5" />
          </div>
          <div class="flex flex-col">
            <span class="text-lg font-extrabold text-slate-900 leading-none tracking-tight">SmartLib</span>
            <span class="text-[10px] font-semibold text-blue-600 tracking-wider uppercase mt-0.5">Library Hub</span>
          </div>
        </router-link>

        <!-- Nav Links (Desktop) -->
        <nav class="hidden md:flex items-center space-x-8">
          <a href="#features" class="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors">Features</a>
          <a href="#how-it-works" class="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors">How It Works</a>
          <a href="#pricing" class="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors">Pricing</a>
          <a href="#faq" class="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors">FAQ</a>
        </nav>

        <!-- CTA Buttons -->
        <div class="flex items-center space-x-4">
          <router-link 
            to="/login" 
            class="px-5 py-2.5 rounded-full text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 active:scale-98 shadow-md shadow-blue-500/10 hover:shadow-blue-500/25 transition-all"
          >
            Login
          </router-link>
          
          <!-- Mobile Menu Button -->
          <button 
            @click="mobileMenuOpen = !mobileMenuOpen" 
            class="md:hidden p-2 rounded-xl text-slate-600 hover:bg-slate-100 transition-colors"
          >
            <Menu v-if="!mobileMenuOpen" class="h-6 w-6" />
            <X v-else class="h-6 w-6" />
          </button>
        </div>
      </div>

      <!-- Mobile Menu Dropdown -->
      <transition name="slide-fade">
        <div 
          v-if="mobileMenuOpen" 
          class="absolute top-20 left-4 right-4 bg-white border border-slate-200 shadow-xl rounded-3xl p-6 md:hidden flex flex-col space-y-4"
        >
          <a @click="mobileMenuOpen = false" href="#features" class="text-base font-semibold text-slate-700 py-2 border-b border-slate-100">Features</a>
          <a @click="mobileMenuOpen = false" href="#how-it-works" class="text-base font-semibold text-slate-700 py-2 border-b border-slate-100">How It Works</a>
          <a @click="mobileMenuOpen = false" href="#pricing" class="text-base font-semibold text-slate-700 py-2 border-b border-slate-100">Pricing</a>
          <a @click="mobileMenuOpen = false" href="#faq" class="text-base font-semibold text-slate-700 py-2 border-b border-slate-100">FAQ</a>
          <router-link 
            to="/login" 
            @click="mobileMenuOpen = false"
            class="w-full text-center py-3 rounded-2xl text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-md shadow-blue-500/10 transition-all"
          >
            Login to Account
          </router-link>
        </div>
      </transition>
    </header>

    <!-- Hero Section -->
    <section class="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-blue-50/20 via-white to-white">
      <div class="max-w-7xl mx-auto px-6">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          <!-- Left Content -->
          <div class="lg:col-span-6 flex flex-col items-start text-left">
            <div class="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-blue-50 border border-blue-100 text-blue-700 mb-6 shadow-inner">
              <Sparkles class="h-3.5 w-3.5" />
              <span>Smart Study Space Management Platform</span>
            </div>
            
            <h1 class="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-none text-slate-900 mb-6">
              Study Smarter,<br />
              <span class="text-blue-650 bg-gradient-to-r from-blue-650 to-blue-500 bg-clip-text text-transparent">Achieve More</span>
            </h1>
            
            <p class="text-lg text-slate-600 mb-8 max-w-xl leading-relaxed">
              A complete cloud platform for seat booking, catalog management, and automated library check-ins. Designed to boost student productivity and simplify operations for modern academic institutions.
            </p>
            
            <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <router-link 
                to="/register" 
                class="px-8 py-4 rounded-2xl text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 active:scale-98 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/35 transition-all text-center flex items-center justify-center gap-2"
              >
                <span>Start Free Today</span>
                <ChevronRight class="h-4.5 w-4.5" />
              </router-link>
              
              <router-link 
                to="/login" 
                class="px-8 py-4 rounded-2xl text-sm font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 active:scale-98 transition-all text-center"
              >
                Sign In
              </router-link>
            </div>
          </div>

          <!-- Right Content (3D perspective mockup) -->
          <div class="lg:col-span-6 flex justify-center items-center relative">
            <div class="absolute -inset-4 bg-blue-200/30 rounded-full blur-3xl opacity-60"></div>
            
            <!-- Perspective Container -->
            <div class="perspective-box relative w-full max-w-lg">
              
              <!-- 3D Card Main Mockup -->
              <div class="main-card-3d bg-white border border-slate-200/80 shadow-2xl rounded-3xl p-6 relative overflow-hidden">
                <div class="flex justify-between items-center border-b border-slate-100 pb-4 mb-6">
                  <div class="flex items-center space-x-2">
                    <div class="w-3.5 h-3.5 rounded-full bg-slate-100 flex items-center justify-center">
                      <div class="w-1.5 h-1.5 rounded-full bg-red-400"></div>
                    </div>
                    <div class="w-3.5 h-3.5 rounded-full bg-slate-100 flex items-center justify-center">
                      <div class="w-1.5 h-1.5 rounded-full bg-yellow-400"></div>
                    </div>
                    <div class="w-3.5 h-3.5 rounded-full bg-slate-100 flex items-center justify-center">
                      <div class="w-1.5 h-1.5 rounded-full bg-green-400"></div>
                    </div>
                  </div>
                  <span class="text-[10px] bg-blue-50 border border-blue-100 text-blue-600 px-3 py-1 rounded-full font-bold uppercase tracking-wider">Smart Dashboard</span>
                </div>

                <!-- Mockup Content -->
                <div class="space-y-4 text-left">
                  <!-- Row 1 -->
                  <div class="bg-slate-50 border border-slate-100 rounded-2xl p-4 flex justify-between items-center">
                    <div class="flex items-center space-x-3">
                      <div class="h-10 w-10 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600">
                        <MapPin class="h-5 w-5" />
                      </div>
                      <div>
                        <h4 class="text-sm font-bold text-slate-800">Zone A • Main Hall</h4>
                        <p class="text-xs text-slate-500 mt-0.5">Desk Reservation</p>
                      </div>
                    </div>
                    <span class="text-xs bg-green-50 border border-green-200 text-green-600 px-2.5 py-1 rounded-lg font-bold">Active</span>
                  </div>

                  <!-- Row 2 -->
                  <div class="bg-slate-50 border border-slate-100 rounded-2xl p-4 flex justify-between items-center">
                    <div class="flex items-center space-x-3">
                      <div class="h-10 w-10 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600">
                        <Clock class="h-5 w-5" />
                      </div>
                      <div>
                        <h4 class="text-sm font-bold text-slate-800">Study Session</h4>
                        <p class="text-xs text-slate-500 mt-0.5">Time Remaining</p>
                      </div>
                    </div>
                    <span class="text-xs font-bold text-slate-700">03h 45m</span>
                  </div>

                  <!-- Row 3 -->
                  <div class="bg-slate-50 border border-slate-100 rounded-2xl p-4 flex justify-between items-center">
                    <div class="flex items-center space-x-3">
                      <div class="h-10 w-10 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600">
                        <QrCode class="h-5 w-5" />
                      </div>
                      <div>
                        <h4 class="text-sm font-bold text-slate-800">Instant Check-In</h4>
                        <p class="text-xs text-slate-500 mt-0.5">Quick Pass Gate Access</p>
                      </div>
                    </div>
                    <span class="text-xs bg-blue-50 border border-blue-200 text-blue-600 px-2.5 py-1 rounded-lg font-bold">Ready</span>
                  </div>
                </div>
              </div>

              <!-- Mini Floating Stat Card -->
              <div class="absolute -right-8 -bottom-6 bg-white border border-slate-200 shadow-xl rounded-2xl p-4 flex items-center space-x-3.5 animate-bounce-slow">
                <div class="h-10 w-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 border border-blue-100">
                  <TrendingUp class="h-5 w-5" />
                </div>
                <div class="text-left">
                  <p class="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Occupancy Rate</p>
                  <p class="text-lg font-black text-slate-800 leading-none mt-1">94.8%</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- Stats Bar (Pure Blue & White Style) -->
    <section class="border-y border-slate-200 bg-slate-50/50 py-10">
      <div class="max-w-7xl mx-auto px-6">
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="text-center group">
            <h3 class="text-3xl sm:text-4xl font-black text-blue-600 group-hover:scale-105 transition-transform inline-block">12,500+</h3>
            <p class="text-sm font-bold text-slate-500 mt-2 uppercase tracking-wider">Active Students</p>
          </div>
          <div class="text-center group">
            <h3 class="text-3xl sm:text-4xl font-black text-blue-600 group-hover:scale-105 transition-transform inline-block">24+</h3>
            <p class="text-sm font-bold text-slate-500 mt-2 uppercase tracking-wider">Library Locations</p>
          </div>
          <div class="text-center group">
            <h3 class="text-3xl sm:text-4xl font-black text-blue-600 group-hover:scale-105 transition-transform inline-block">45,000+</h3>
            <p class="text-sm font-bold text-slate-500 mt-2 uppercase tracking-wider">Total Bookings</p>
          </div>
          <div class="text-center group">
            <h3 class="text-3xl sm:text-4xl font-black text-blue-600 group-hover:scale-105 transition-transform inline-block">98%</h3>
            <p class="text-sm font-bold text-slate-500 mt-2 uppercase tracking-wider">Satisfaction Rate</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Challenges Section -->
    <section id="challenges" class="py-20 md:py-28 bg-slate-50/70 border-b border-slate-200">
      <div class="max-w-7xl mx-auto px-6 text-center">
        <div class="max-w-3xl mx-auto mb-16">
          <span class="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-red-50 border border-red-100 text-red-700 shadow-inner">
            <AlertCircle class="h-3.5 w-3.5" />
            <span>The Daily Struggle</span>
          </span>
          <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-6 mb-4">
            The Challenges You Face Everyday
          </h2>
          <p class="text-base text-slate-500 leading-relaxed">
            Students and library administrators waste valuable time due to outdated, uncoordinated study space setups.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Challenge 1 -->
          <div class="bg-white border border-slate-200 hover:border-red-200 rounded-3xl p-8 shadow-sm hover:shadow-md transition-all text-left relative group">
            <div class="h-12 w-12 rounded-2xl bg-red-50 border border-red-100 flex items-center justify-center text-red-600 mb-6 group-hover:scale-105 transition-all">
              <Ban class="h-6 w-6" />
            </div>
            <h3 class="text-lg font-bold text-slate-900 mb-2">No Available Seats</h3>
            <p class="text-sm text-slate-500 leading-relaxed">
              Arriving at the library only to find every single desk occupied. Without real-time desk tracking, finding a study spot is a constant gamble.
            </p>
            <div class="mt-6 pt-4 border-t border-slate-100 text-xs font-semibold text-slate-400 group-hover:text-red-500 transition-colors flex items-center gap-1.5">
              <span class="h-1.5 w-1.5 rounded-full bg-blue-500"></span>
              <span>SmartLib Solution: Live seat maps & instant booking.</span>
            </div>
          </div>

          <!-- Challenge 2 -->
          <div class="bg-white border border-slate-200 hover:border-red-200 rounded-3xl p-8 shadow-sm hover:shadow-md transition-all text-left relative group">
            <div class="h-12 w-12 rounded-2xl bg-red-50 border border-red-100 flex items-center justify-center text-red-600 mb-6 group-hover:scale-105 transition-all">
              <Hourglass class="h-6 w-6" />
            </div>
            <h3 class="text-lg font-bold text-slate-900 mb-2">Wasted Time in Queues</h3>
            <p class="text-sm text-slate-500 leading-relaxed">
              Waiting in long queues at the entry gate, checking in manually with supervisors, or writing details in paper logs.
            </p>
            <div class="mt-6 pt-4 border-t border-slate-100 text-xs font-semibold text-slate-400 group-hover:text-red-500 transition-colors flex items-center gap-1.5">
              <span class="h-1.5 w-1.5 rounded-full bg-blue-500"></span>
              <span>SmartLib Solution: Instant QR check-in & gate passes.</span>
            </div>
          </div>

          <!-- Challenge 3 -->
          <div class="bg-white border border-slate-200 hover:border-red-200 rounded-3xl p-8 shadow-sm hover:shadow-md transition-all text-left relative group">
            <div class="h-12 w-12 rounded-2xl bg-red-50 border border-red-100 flex items-center justify-center text-red-600 mb-6 group-hover:scale-105 transition-all">
              <Frown class="h-6 w-6" />
            </div>
            <h3 class="text-lg font-bold text-slate-900 mb-2">Untracked Study Progress</h3>
            <p class="text-sm text-slate-500 leading-relaxed">
              No clear way to log your study sessions, analyze peak productivity hours, or stay motivated during intense exam preparations.
            </p>
            <div class="mt-6 pt-4 border-t border-slate-100 text-xs font-semibold text-slate-400 group-hover:text-red-500 transition-colors flex items-center gap-1.5">
              <span class="h-1.5 w-1.5 rounded-full bg-blue-500"></span>
              <span>SmartLib Solution: Visual productivity charts & rewards.</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Showcase -->
    <section id="features" class="py-20 md:py-28 bg-white">
      <div class="max-w-7xl mx-auto px-6 text-center">
        <div class="max-w-3xl mx-auto mb-16">
          <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Everything You Need for Modern Study
          </h2>
          <p class="text-lg text-slate-500">
            Interactive floor maps, digitised catalogues, real-time analytics and automatic notifications in a single, lightning-fast platform.
          </p>
        </div>

        <!-- Tabs List -->
        <div class="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
          <button 
            v-for="(feature, idx) in featuresList" 
            :key="feature.tabTitle"
            @click="activeFeature = idx"
            :class="[
              'px-5 py-3 rounded-full text-sm font-bold border transition-all duration-200 flex items-center space-x-2',
              activeFeature === idx
                ? 'bg-blue-600 border-blue-600 text-white shadow-md shadow-blue-500/10'
                : 'bg-white border-slate-200 text-slate-600 hover:border-slate-400 hover:bg-slate-50'
            ]"
          >
            <component :is="feature.tabIcon" class="h-4.5 w-4.5" />
            <span>{{ feature.tabTitle }}</span>
          </button>
        </div>

        <!-- Spotlight Spotlight Card -->
        <div class="max-w-5xl mx-auto">
          <transition name="fade-slide-spotlight" mode="out-in">
            <div 
              :key="activeFeature" 
              class="grid grid-cols-1 md:grid-cols-12 bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden min-h-[400px]"
            >
              <!-- Info Left -->
              <div class="md:col-span-7 p-8 sm:p-12 flex flex-col justify-center items-start text-left">
                <div class="h-12 w-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 mb-6 border border-blue-100">
                  <component :is="featuresList[activeFeature].tabIcon" class="h-6 w-6" />
                </div>
                <h3 class="text-2xl font-black text-slate-900 mb-4">
                  {{ featuresList[activeFeature].title }}
                </h3>
                <p class="text-slate-600 mb-8 leading-relaxed">
                  {{ featuresList[activeFeature].description }}
                </p>
                <ul class="space-y-3.5">
                  <li 
                    v-for="bullet in featuresList[activeFeature].bullets" 
                    :key="bullet" 
                    class="flex items-center space-x-3 text-slate-700 text-sm font-medium"
                  >
                    <div class="h-5.5 w-5.5 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 border border-blue-200">
                      <Check class="h-3.5 w-3.5" />
                    </div>
                    <span>{{ bullet }}</span>
                  </li>
                </ul>
              </div>

              <!-- Widget Right -->
              <div class="md:col-span-5 bg-slate-50/70 border-l border-slate-200 flex items-center justify-center p-8 relative overflow-hidden min-h-[300px]">
                
                <!-- Dynamic Seat booking Widget -->
                <div v-if="activeFeature === 0" class="w-full max-w-[280px]">
                  <p class="text-[10px] font-bold text-slate-400 uppercase tracking-wider text-center mb-4">Click to Reserve a desk</p>
                  <div class="grid grid-cols-4 gap-3">
                    <button 
                      v-for="seat in mockSeats" 
                      :key="seat.id"
                      @click="toggleMockSeat(seat.id)"
                      :class="[
                        'aspect-square rounded-xl border flex flex-col items-center justify-center text-xs font-bold transition-all relative',
                        seat.status === 'booked' 
                          ? 'bg-slate-200 border-slate-300 text-slate-400 cursor-not-allowed'
                          : seat.status === 'selected'
                            ? 'bg-blue-600 border-blue-600 text-white scale-105 shadow-md shadow-blue-500/20'
                            : 'bg-white border-slate-200 text-slate-700 hover:border-blue-400 hover:bg-blue-50/10'
                      ]"
                      :disabled="seat.status === 'booked'"
                    >
                      <span>{{ seat.label }}</span>
                      <div 
                        v-if="seat.status === 'selected'" 
                        class="absolute -top-1 -right-1 h-3.5 w-3.5 rounded-full bg-green-500 border border-white flex items-center justify-center text-[8px] text-white"
                      >
                        ✓
                      </div>
                    </button>
                  </div>
                  <p class="text-xs font-semibold text-slate-600 text-center mt-6">
                    {{ selectedSeatLabel ? `Selected: ${selectedSeatLabel}` : 'Choose an empty seat' }}
                  </p>
                </div>

                <!-- Digital Library Catalog Widget -->
                <div v-if="activeFeature === 1" class="w-full max-w-[280px] bg-white border border-slate-200 rounded-2xl p-4 shadow-sm text-left">
                  <div class="relative mb-3">
                    <input 
                      type="text" 
                      v-model="mockSearchQuery" 
                      placeholder="Search books..." 
                      class="w-full pl-9 pr-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-blue-500"
                    />
                    <Search class="h-3.5 w-3.5 text-slate-400 absolute left-3 top-3" />
                  </div>
                  <div class="space-y-2 max-h-[160px] overflow-y-auto pr-1">
                    <div 
                      v-for="book in filteredMockBooks" 
                      :key="book.title"
                      class="flex items-center justify-between p-2 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors border border-slate-100"
                    >
                      <div>
                        <h4 class="text-xs font-bold text-slate-800 leading-tight">{{ book.title }}</h4>
                        <p class="text-[10px] text-slate-500 mt-0.5">{{ book.author }}</p>
                      </div>
                      <span class="text-[9px] font-bold bg-blue-50 text-blue-600 border border-blue-200 px-2 py-0.5 rounded-md">Available</span>
                    </div>
                  </div>
                </div>

                <!-- Events List Widget -->
                <div v-if="activeFeature === 2" class="w-full max-w-[280px] text-left space-y-3">
                  <div 
                    v-for="(ev, idx) in mockEvents" 
                    :key="ev.title"
                    class="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm flex items-center justify-between"
                  >
                    <div>
                      <span class="text-[9px] font-bold text-blue-600 uppercase">{{ ev.category }}</span>
                      <h4 class="text-xs font-bold text-slate-800 mt-0.5">{{ ev.title }}</h4>
                      <p class="text-[10px] text-slate-500 mt-1 flex items-center gap-1">
                        <Clock class="h-3 w-3" />
                        <span>{{ ev.time }}</span>
                      </p>
                    </div>
                    <button 
                      @click="ev.registered = !ev.registered"
                      :class="[
                        'px-2.5 py-1.5 rounded-lg text-[10px] font-bold transition-all',
                        ev.registered
                          ? 'bg-green-50 border border-green-200 text-green-600'
                          : 'bg-blue-600 text-white hover:bg-blue-700'
                      ]"
                    >
                      {{ ev.registered ? 'Registered' : 'Join' }}
                    </button>
                  </div>
                </div>

                <!-- QR Checkin Scanner Widget -->
                <div v-if="activeFeature === 3" class="w-full max-w-[240px] bg-white border border-slate-200 rounded-2xl p-5 shadow-sm text-center relative flex flex-col items-center">
                  <div class="h-36 w-36 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-center p-3 relative overflow-hidden">
                    <QrCode class="h-28 w-28 text-slate-800" />
                    <!-- Scanning laser animation -->
                    <div class="absolute left-0 right-0 h-0.5 bg-blue-500 animate-scan shadow-lg shadow-blue-500/80"></div>
                  </div>
                  <p class="text-xs font-bold text-slate-700 mt-4">Gate Scanner</p>
                  <p class="text-[10px] text-slate-400 mt-1">Scan to auto-checkin desk reservation</p>
                </div>

                <!-- Study Hours Analytics Chart Widget -->
                <div v-if="activeFeature === 4" class="w-full max-w-[280px] bg-white border border-slate-200 rounded-2xl p-4 shadow-sm text-left">
                  <div class="flex justify-between items-center mb-4">
                    <h4 class="text-xs font-bold text-slate-800">Weekly Study Time</h4>
                    <span class="text-[9px] font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded-full border border-green-200">+12% vs last week</span>
                  </div>
                  <!-- Vertical CSS Bars -->
                  <div class="flex items-end justify-between h-24 pt-4 border-b border-slate-100 px-2">
                    <div class="flex flex-col items-center w-6 group">
                      <div class="w-2.5 bg-slate-200 group-hover:bg-blue-500 rounded-t-sm transition-all duration-300" style="height: 40%"></div>
                      <span class="text-[8px] text-slate-400 mt-1.5 font-bold">M</span>
                    </div>
                    <div class="flex flex-col items-center w-6 group">
                      <div class="w-2.5 bg-slate-200 group-hover:bg-blue-500 rounded-t-sm transition-all duration-300" style="height: 65%"></div>
                      <span class="text-[8px] text-slate-400 mt-1.5 font-bold">T</span>
                    </div>
                    <div class="flex flex-col items-center w-6 group">
                      <div class="w-2.5 bg-slate-200 group-hover:bg-blue-500 rounded-t-sm transition-all duration-300" style="height: 50%"></div>
                      <span class="text-[8px] text-slate-400 mt-1.5 font-bold">W</span>
                    </div>
                    <div class="flex flex-col items-center w-6 group">
                      <div class="w-2.5 bg-blue-600 rounded-t-sm transition-all duration-300" style="height: 85%"></div>
                      <span class="text-[8px] text-blue-600 mt-1.5 font-bold">T</span>
                    </div>
                    <div class="flex flex-col items-center w-6 group">
                      <div class="w-2.5 bg-slate-200 group-hover:bg-blue-500 rounded-t-sm transition-all duration-300" style="height: 35%"></div>
                      <span class="text-[8px] text-slate-400 mt-1.5 font-bold">F</span>
                    </div>
                    <div class="flex flex-col items-center w-6 group">
                      <div class="w-2.5 bg-slate-200 group-hover:bg-blue-500 rounded-t-sm transition-all duration-300" style="height: 90%"></div>
                      <span class="text-[8px] text-slate-400 mt-1.5 font-bold">S</span>
                    </div>
                  </div>
                  <div class="flex justify-between items-center mt-3.5">
                    <p class="text-[10px] text-slate-500 font-medium">Daily Average</p>
                    <p class="text-xs font-bold text-slate-800">4.8 hours</p>
                  </div>
                </div>

                <!-- Loyalty Rewards Points Progress Widget -->
                <div v-if="activeFeature === 5" class="w-full max-w-[280px] bg-white border border-slate-200 rounded-2xl p-4 shadow-sm text-left">
                  <div class="flex items-center space-x-3.5 border-b border-slate-100 pb-3 mb-3">
                    <div class="h-10 w-10 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600">
                      <Award class="h-5.5 w-5.5" />
                    </div>
                    <div>
                      <h4 class="text-xs font-bold text-slate-800">Loyalty Level 3</h4>
                      <p class="text-[10px] text-slate-400 mt-0.5">Academic Champion</p>
                    </div>
                  </div>
                  <div>
                    <div class="flex justify-between items-center text-[10px] font-bold text-slate-600 mb-1.5">
                      <span>Points Progress</span>
                      <span>3,450 / 5,000 pts</span>
                    </div>
                    <div class="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                      <div class="h-full bg-blue-600 rounded-full" style="width: 69%"></div>
                    </div>
                  </div>
                  <div class="mt-3.5 flex items-center space-x-2">
                    <span class="text-[9px] font-bold bg-blue-50 text-blue-600 border border-blue-200 px-2 py-0.5 rounded-full">Reward Unlockable</span>
                    <span class="text-[9px] text-slate-500 font-semibold">• 1 Free Espresso Pass</span>
                  </div>
                </div>

              </div>
            </div>
          </transition>
        </div>
      </div>
    </section>

    <!-- How It Works Section -->
    <section id="how-it-works" class="py-20 md:py-28 border-t border-slate-200 bg-slate-50/50">
      <div class="max-w-7xl mx-auto px-6">
        <div class="text-center max-w-2xl mx-auto mb-16">
          <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            How It Works in 4 Steps
          </h2>
          <p class="text-base text-slate-500">
            Booking study desks and checking out digital learning resources takes just a few seconds.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <!-- Step 1 -->
          <div class="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm hover:shadow-md transition-all text-left relative group">
            <div class="h-12 w-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 font-black mb-6 group-hover:scale-105 transition-all">
              <span>1</span>
            </div>
            <h3 class="text-lg font-bold text-slate-900 mb-2">Find a Library</h3>
            <p class="text-sm text-slate-500 leading-relaxed">
              Explore participating ICAP library locations nationwide and verify current real-time seat occupancy statistics.
            </p>
          </div>

          <!-- Step 2 -->
          <div class="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm hover:shadow-md transition-all text-left relative group">
            <div class="h-12 w-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 font-black mb-6 group-hover:scale-105 transition-all">
              <span>2</span>
            </div>
            <h3 class="text-lg font-bold text-slate-900 mb-2">Select & Reserve</h3>
            <p class="text-sm text-slate-500 leading-relaxed">
              Check out live interactive floor seat maps, select your preferred study desk location, and reserve instantly.
            </p>
          </div>

          <!-- Step 3 -->
          <div class="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm hover:shadow-md transition-all text-left relative group">
            <div class="h-12 w-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 font-black mb-6 group-hover:scale-105 transition-all">
              <span>3</span>
            </div>
            <h3 class="text-lg font-bold text-slate-900 mb-2">Quick QR Gate Access</h3>
            <p class="text-sm text-slate-500 leading-relaxed">
              Arrive at the library entrance and scan your student QR check-in pass at the gate scanner to authorize entrance.
            </p>
          </div>

          <!-- Step 4 -->
          <div class="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm hover:shadow-md transition-all text-left relative group">
            <div class="h-12 w-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 font-black mb-6 group-hover:scale-105 transition-all">
              <span>4</span>
            </div>
            <h3 class="text-lg font-bold text-slate-900 mb-2">Optimize Study Session</h3>
            <p class="text-sm text-slate-500 leading-relaxed">
              Log into the desk terminal, track your remaining session duration, extend bookings as needed, and enjoy study.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Pricing Section -->
    <section id="pricing" class="py-20 md:py-28 bg-white border-t border-slate-200">
      <div class="max-w-7xl mx-auto px-6 text-center">
        <div class="max-w-2xl mx-auto mb-12">
          <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Simple, Transparent Pricing
          </h2>
          <p class="text-base text-slate-500">
            Choose the membership tier that fits your academic goals or institute needs.
          </p>
        </div>

        <!-- Monthly/Annual Toggle -->
        <div class="flex justify-center items-center space-x-3.5 mb-16">
          <span :class="['text-sm font-bold transition-all', !isAnnual ? 'text-blue-600' : 'text-slate-500']">Monthly Billing</span>
          <button 
            @click="isAnnual = !isAnnual"
            class="w-14 h-8 bg-blue-100 rounded-full p-1 transition-all duration-300 relative focus:outline-none"
          >
            <div 
              :class="[
                'w-6 h-6 bg-blue-600 rounded-full transition-transform duration-300 absolute top-1',
                isAnnual ? 'translate-x-6' : 'translate-x-0'
              ]"
            ></div>
          </button>
          <span :class="['text-sm font-bold transition-all', isAnnual ? 'text-blue-600' : 'text-slate-500']">
            Annual Billing 
            <span class="text-xs bg-green-50 border border-green-200 text-green-600 px-2 py-0.5 rounded-full font-bold ml-1.5">Save 20%</span>
          </span>
        </div>

        <!-- Plans Grid -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto items-stretch">
          
          <!-- Basic Plan -->
          <div class="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm flex flex-col justify-between text-left group hover:border-slate-400 transition-all">
            <div>
              <span class="text-xs font-bold text-slate-400 uppercase tracking-widest">Free Account</span>
              <h3 class="text-xl font-bold text-slate-800 mt-2">Student Basic</h3>
              <p class="text-xs text-slate-500 mt-1">Ideal for occasional study sessions</p>
              
              <div class="price-box my-6 flex items-baseline">
                <span class="text-4xl font-black text-slate-900">Rs. 0</span>
                <span class="text-xs font-semibold text-slate-500 ml-1.5">/ forever</span>
              </div>

              <ul class="space-y-3.5 border-t border-slate-100 pt-6">
                <li class="flex items-center space-x-2.5 text-xs text-slate-600 font-medium">
                  <Check class="h-4 w-4 text-blue-600" />
                  <span>Access to catalog search</span>
                </li>
                <li class="flex items-center space-x-2.5 text-xs text-slate-600 font-medium">
                  <Check class="h-4 w-4 text-blue-600" />
                  <span>Up to 2 bookings per month</span>
                </li>
                <li class="flex items-center space-x-2.5 text-xs text-slate-600 font-medium">
                  <Check class="h-4 w-4 text-blue-600" />
                  <span>Standard gate check-in</span>
                </li>
              </ul>
            </div>
            
            <router-link 
              to="/register" 
              class="w-full text-center py-3.5 rounded-2xl text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-all mt-8"
            >
              Sign Up Free
            </router-link>
          </div>

          <!-- Pro Plan (Featured) -->
          <div class="bg-white border-2 border-blue-600 rounded-3xl p-8 shadow-xl shadow-blue-500/5 flex flex-col justify-between text-left relative transform md:-translate-y-2">
            <div class="absolute -top-3.5 right-6 bg-blue-600 text-white text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full border border-blue-700">
              Popular Choice
            </div>

            <div>
              <span class="text-xs font-bold text-blue-600 uppercase tracking-widest">Scholar Pro</span>
              <h3 class="text-xl font-bold text-slate-800 mt-2">Premium Member</h3>
              <p class="text-xs text-slate-500 mt-1">Best for active CA & finance students</p>
              
              <div class="price-box my-6 flex items-baseline">
                <span class="text-4xl font-black text-slate-900">{{ isAnnual ? 'Rs. 799' : 'Rs. 999' }}</span>
                <span class="text-xs font-semibold text-slate-500 ml-1.5">/ month</span>
              </div>

              <ul class="space-y-3.5 border-t border-slate-100 pt-6">
                <li class="flex items-center space-x-2.5 text-xs text-slate-600 font-medium">
                  <Check class="h-4 w-4 text-blue-600" />
                  <span>Unlimited seat reservations</span>
                </li>
                <li class="flex items-center space-x-2.5 text-xs text-slate-600 font-medium">
                  <Check class="h-4 w-4 text-blue-600" />
                  <span>Pre-book up to 7 days in advance</span>
                </li>
                <li class="flex items-center space-x-2.5 text-xs text-slate-600 font-medium">
                  <Check class="h-4 w-4 text-blue-600" />
                  <span>Interactive floor maps</span>
                </li>
                <li class="flex items-center space-x-2.5 text-xs text-slate-600 font-medium">
                  <Check class="h-4 w-4 text-blue-600" />
                  <span>Loyalty points rewards access</span>
                </li>
              </ul>
            </div>
            
            <router-link 
              to="/register" 
              class="w-full text-center py-3.5 rounded-2xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-md shadow-blue-500/15 transition-all mt-8"
            >
              Get Started
            </router-link>
          </div>

          <!-- Enterprise Plan -->
          <div class="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm flex flex-col justify-between text-left group hover:border-slate-400 transition-all">
            <div>
              <span class="text-xs font-bold text-slate-400 uppercase tracking-widest">Institutional License</span>
              <h3 class="text-xl font-bold text-slate-800 mt-2">Smart Institute</h3>
              <p class="text-xs text-slate-500 mt-1">For universities, colleges & libraries</p>
              
              <div class="price-box my-6 flex items-baseline">
                <span class="text-4xl font-black text-slate-900">Custom</span>
                <span class="text-xs font-semibold text-slate-500 ml-1.5">/ location</span>
              </div>

              <ul class="space-y-3.5 border-t border-slate-100 pt-6">
                <li class="flex items-center space-x-2.5 text-xs text-slate-600 font-medium">
                  <Check class="h-4 w-4 text-blue-600" />
                  <span>Unlimited admin & librarian seats</span>
                </li>
                <li class="flex items-center space-x-2.5 text-xs text-slate-600 font-medium">
                  <Check class="h-4 w-4 text-blue-600" />
                  <span>Full student analytics dashboard</span>
                </li>
                <li class="flex items-center space-x-2.5 text-xs text-slate-600 font-medium">
                  <Check class="h-4 w-4 text-blue-600" />
                  <span>Automated checkout & notifications</span>
                </li>
                <li class="flex items-center space-x-2.5 text-xs text-slate-600 font-medium">
                  <Check class="h-4 w-4 text-blue-600" />
                  <span>Support API integrations</span>
                </li>
              </ul>
            </div>
            
            <a 
              href="mailto:support@smartlib.com?subject=Institutional License Inquiry" 
              class="w-full text-center py-3.5 rounded-2xl text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-all mt-8"
            >
              Contact Support
            </a>
          </div>

        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section id="faq" class="py-20 md:py-28 bg-slate-50/50 border-t border-slate-200">
      <div class="max-w-4xl mx-auto px-6">
        <div class="text-center max-w-2xl mx-auto mb-16">
          <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p class="text-base text-slate-500">
            Find answers to common questions about reservation limits, check-in requirements and loyalty points.
          </p>
        </div>

        <div class="space-y-4">
          <div 
            v-for="(faq, idx) in faqList" 
            :key="faq.question"
            class="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm"
          >
            <button 
              @click="toggleFaq(idx)"
              class="w-full p-6 flex justify-between items-center text-left focus:outline-none"
            >
              <span class="text-sm font-bold text-slate-800">{{ faq.question }}</span>
              <span class="ml-4 flex-shrink-0 text-slate-400 transition-transform duration-200" :style="faq.open ? 'transform: rotate(180deg)' : ''">
                <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </button>
            
            <transition name="expand">
              <div v-show="faq.open" class="border-t border-slate-100 p-6 bg-slate-50/20 text-xs text-slate-500 leading-relaxed">
                {{ faq.answer }}
              </div>
            </transition>
          </div>
        </div>
      </div>
    </section>

    <!-- Premium Clean Footer -->
    <footer class="bg-white border-t border-slate-200 py-16">
      <div class="max-w-7xl mx-auto px-6">
        
        <div class="grid grid-cols-1 md:grid-cols-12 gap-12 border-b border-slate-200 pb-12 mb-12">
          
          <!-- Column 1: Brand -->
          <div class="md:col-span-4 flex flex-col items-start text-left">
            <router-link to="/" class="flex items-center space-x-2.5 mb-6 group">
              <div class="h-10 w-10 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
                <BookOpen class="h-5.5 w-5.5" />
              </div>
              <span class="text-lg font-extrabold text-slate-900 leading-none tracking-tight">SmartLib</span>
            </router-link>
            <p class="text-xs text-slate-500 leading-relaxed max-w-sm mb-6">
              A comprehensive library seat booking and catalog management platform built for modern academic and research centers. Optimize your study environment with real-time analytics.
            </p>
            <div class="flex items-center space-x-3">
              <a href="https://twitter.com" target="_blank" class="h-9 w-9 rounded-xl border border-slate-200 hover:border-blue-500 flex items-center justify-center text-slate-400 hover:text-blue-600 transition-all">
                <Twitter class="h-4.5 w-4.5" />
              </a>
              <a href="https://linkedin.com" target="_blank" class="h-9 w-9 rounded-xl border border-slate-200 hover:border-blue-500 flex items-center justify-center text-slate-400 hover:text-blue-600 transition-all">
                <Linkedin class="h-4.5 w-4.5" />
              </a>
              <a href="https://facebook.com" target="_blank" class="h-9 w-9 rounded-xl border border-slate-200 hover:border-blue-500 flex items-center justify-center text-slate-400 hover:text-blue-600 transition-all">
                <Facebook class="h-4.5 w-4.5" />
              </a>
            </div>
          </div>

          <!-- Column 2: Quick Links -->
          <div class="md:col-span-3 flex flex-col items-start text-left">
            <h4 class="text-xs font-black uppercase text-slate-400 tracking-wider mb-6">Solutions</h4>
            <ul class="space-y-3.5">
              <li><a href="#features" class="text-xs font-semibold text-slate-500 hover:text-blue-600 transition-colors">Seat Booking</a></li>
              <li><a href="#features" class="text-xs font-semibold text-slate-500 hover:text-blue-600 transition-colors">Catalog Manager</a></li>
              <li><a href="#features" class="text-xs font-semibold text-slate-500 hover:text-blue-600 transition-colors">Gate Check-In</a></li>
              <li><a href="#features" class="text-xs font-semibold text-slate-500 hover:text-blue-600 transition-colors">Digital Analytics</a></li>
            </ul>
          </div>

          <!-- Column 3: Trust Badges -->
          <div class="md:col-span-5 flex flex-col items-start text-left">
            <h4 class="text-xs font-black uppercase text-slate-400 tracking-wider mb-6">Security & Integrity</h4>
            <div class="bg-slate-50 border border-slate-200 rounded-2xl p-5 w-full flex items-start space-x-4">
              <div class="h-10 w-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-600 border border-blue-100/50 flex-shrink-0">
                <Shield class="h-5.5 w-5.5" />
              </div>
              <div>
                <h5 class="text-xs font-bold text-slate-800">Verified System Protection</h5>
                <p class="text-[11px] text-slate-500 mt-1.5 leading-relaxed">
                  All seat bookings, queue status updates, and catalog lookups are secure. Fast automated gate scanning provides fully compliant library access.
                </p>
              </div>
            </div>
          </div>

        </div>

        <div class="flex flex-col sm:flex-row justify-between items-center text-slate-400 text-[11px] font-semibold">
          <p>© 2024 SmartLib System. All rights reserved.</p>
          <div class="flex space-x-6 mt-4 sm:mt-0">
            <a href="#" class="hover:text-blue-600 transition-colors">Privacy Policy</a>
            <a href="#" class="hover:text-blue-600 transition-colors">Terms of Service</a>
            <a href="#" class="hover:text-blue-600 transition-colors">System Status</a>
          </div>
        </div>

      </div>
    </footer>

  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { 
  BookOpen, 
  Sparkles, 
  ChevronRight, 
  MapPin, 
  Clock, 
  QrCode, 
  TrendingUp, 
  Award,
  Check,
  Search,
  Twitter,
  Linkedin,
  Facebook,
  Shield,
  Menu,
  X,
  AlertCircle,
  Ban,
  Hourglass,
  Frown
} from 'lucide-vue-next';

// Scroll Detection
const hasScrolled = ref(false);
onMounted(() => {
  window.addEventListener('scroll', () => {
    hasScrolled.value = window.scrollY > 20;
  });
});

// Mobile menu toggle
const mobileMenuOpen = ref(false);

// Features Showcase Tabs List
const featuresList = [
  {
    tabTitle: 'Seat Booking',
    tabIcon: MapPin,
    title: 'Interactive Floor Seat Booking',
    description: 'Select your preferred desk directly from the visual floor map. Review available time slots and confirm reservation details instantly.',
    bullets: [
      'Interactive room layout diagrams',
      'Real-time seat availability updates',
      'Automated collision prevention checks'
    ]
  },
  {
    tabTitle: 'Digital Catalog',
    tabIcon: Search,
    title: 'Unified Book Catalog Access',
    description: 'Quickly find books, publications, and study material. Instantly review borrow status and place digital reservations.',
    bullets: [
      'Elastic catalog index search',
      'One-click digital hold requests',
      'Automated checkout confirmation logs'
    ]
  },
  {
    tabTitle: 'Events Registration',
    tabIcon: Sparkles,
    title: 'Academic & Workshop Registration',
    description: 'Register for academic events, peer discussion circles, and study groups directly in the student dashboard.',
    bullets: [
      'Discussion groups registration',
      'Auto calendar invite sync',
      'Certificate of attendance generation'
    ]
  },
  {
    tabTitle: 'QR Pass Gate',
    tabIcon: QrCode,
    title: 'Contactless Check-In Gate Passes',
    description: 'Skip long queues using your unique profile QR code. Scan at the entry gate to automatically log your attendance.',
    bullets: [
      'Instant attendance logging scanner',
      'Seat reservation auto validation',
      'Overdue alert notification checks'
    ]
  },
  {
    tabTitle: 'Analytics Tracker',
    tabIcon: TrendingUp,
    title: 'Comprehensive Study Tracker',
    description: 'Review your total study duration and library attendance statistics. Improve productivity through insights.',
    bullets: [
      'Weekly/monthly study analytics',
      'Attendance patterns logging',
      'Visual performance progress chart'
    ]
  },
  {
    tabTitle: 'Loyalty Rewards',
    tabIcon: Award,
    title: 'Earn Academic Rewards Points',
    description: 'Log consistent study hours to earn points. Redeem for workspace privileges, reservations boosts or local items.',
    bullets: [
      'Earn points per check-in hour',
      'Redeemable items voucher shop',
      'Level-up milestones system'
    ]
  }
];

const activeFeature = ref(0);

// Interactive Seat Booking Mock
const mockSeats = ref([
  { id: 1, label: 'A1', status: 'available' },
  { id: 2, label: 'A2', status: 'booked' },
  { id: 3, label: 'A3', status: 'available' },
  { id: 4, label: 'A4', status: 'available' },
  { id: 5, label: 'B1', status: 'booked' },
  { id: 6, label: 'B2', status: 'selected' },
  { id: 7, label: 'B3', status: 'booked' },
  { id: 8, label: 'B4', status: 'available' },
  { id: 9, label: 'C1', status: 'available' },
  { id: 10, label: 'C2', status: 'available' },
  { id: 11, label: 'C3', status: 'booked' },
  { id: 12, label: 'C4', status: 'available' },
]);

const toggleMockSeat = (id: number) => {
  mockSeats.value = mockSeats.value.map(s => {
    if (s.id === id) {
      return { ...s, status: s.status === 'selected' ? 'available' : 'selected' };
    }
    // Only one selected mock seat allowed in dashboard demo
    if (s.status === 'selected') {
      return { ...s, status: 'available' };
    }
    return s;
  });
};

const selectedSeatLabel = computed(() => {
  const sel = mockSeats.value.find(s => s.status === 'selected');
  return sel ? sel.label : '';
});

// Interactive Book Catalog Mock
const mockSearchQuery = ref('');
const mockBooks = [
  { title: 'Principles of Accounting', author: 'Jerry J. Weygandt' },
  { title: 'Financial Management: Theory', author: 'Eugene F. Brigham' },
  { title: 'Advanced Corporate Finance', author: 'Joseph P. Ogden' },
  { title: 'Introduction to Auditing', author: 'Lawrence R. Sawyer' },
  { title: 'Economic Principles & Law', author: 'N. Gregory Mankiw' }
];

const filteredMockBooks = computed(() => {
  if (!mockSearchQuery.value) return mockBooks;
  return mockBooks.filter(b => 
    b.title.toLowerCase().includes(mockSearchQuery.value.toLowerCase()) ||
    b.author.toLowerCase().includes(mockSearchQuery.value.toLowerCase())
  );
});

// Interactive Events Registration Mock
const mockEvents = ref([
  { title: 'CA Exam Strategy Seminar', category: 'Workshop', time: 'Today at 3:00 PM', registered: false },
  { title: 'Corporate Finance Group', category: 'Discussion Group', time: 'Tomorrow at 1:00 PM', registered: true },
]);

// Pricing Toggle
const isAnnual = ref(false);

// FAQ Accordion List
const faqList = ref([
  {
    question: 'How do I check in to my reserved seat?',
    answer: 'Simply open the SmartLib application on your smartphone, navigate to your gate pass QR code, and scan it at the gate entry reader or desk scanner upon arrival.',
    open: false
  },
  {
    question: 'Is there a limit on how long I can occupy a desk?',
    answer: 'Standard reservations are set for 4 hours. You can easily extend your session from the dashboard if the seat has no subsequent bookings reserved by other students.',
    open: false
  },
  {
    question: 'How do I earn and redeem loyalty rewards points?',
    answer: 'You earn 10 points for each hour you spend studying at your reserved desk. Points can be redeemed for workspace boosts, reservations extensions, and coffee voucher passes in the student loyalty shop.',
    open: false
  },
  {
    question: 'Can I borrow physical books through the portal?',
    answer: 'Yes. Search the digital catalog, select the book details, click "Request Hold", and scan your QR code at the desk within 48 hours to collect it from the librarian.',
    open: false
  }
]);

const toggleFaq = (idx: number) => {
  faqList.value[idx].open = !faqList.value[idx].open;
};
</script>

<style scoped>
/* 3D Perspective Animation Styles */
.perspective-box {
  perspective: 1200px;
}

.main-card-3d {
  transform: rotateY(-12deg) rotateX(8deg) rotateZ(-1deg);
  transform-style: preserve-3d;
  transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
  box-shadow: 
    -10px 15px 30px -5px rgba(148, 163, 184, 0.22),
    -25px 35px 60px -15px rgba(148, 163, 184, 0.35);
}

.main-card-3d:hover {
  transform: rotateY(-6deg) rotateX(4deg) rotateZ(0deg) translateY(-4px);
  box-shadow: 
    -5px 10px 20px -3px rgba(148, 163, 184, 0.18),
    -12px 20px 45px -10px rgba(148, 163, 184, 0.28);
}

@keyframes scan {
  0%, 100% {
    top: 5%;
  }
  50% {
    top: 95%;
  }
}

.animate-scan {
  animation: scan 2.5s ease-in-out infinite;
}

.animate-bounce-slow {
  animation: bounce 3s infinite;
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-8px);
  }
}

/* Transitions */
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.2s ease-out;
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-10px);
  opacity: 0;
}

.fade-slide-spotlight-enter-active,
.fade-slide-spotlight-leave-active {
  transition: all 0.35s ease;
}
.fade-slide-spotlight-enter-from {
  opacity: 0;
  transform: translateY(12px);
}
.fade-slide-spotlight-leave-to {
  opacity: 0;
  transform: translateY(-12px);
}

.expand-enter-active,
.expand-leave-active {
  transition: max-height 0.3s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.25s ease;
  max-height: 200px;
  overflow: hidden;
}
.expand-enter-from,
.expand-leave-to {
  max-height: 0;
  opacity: 0;
}
</style>