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
          <div class="h-9 w-9 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-sm group-hover:scale-105 transition-transform">
            <BookOpen class="h-5 w-5" />
          </div>
          <div class="flex flex-col">
            <span class="text-base font-bold text-slate-900 leading-none tracking-tight">SmartLib</span>
            <span class="text-[10px] font-semibold text-blue-600 tracking-wider uppercase mt-0.5">Library Hub</span>
          </div>
        </router-link>

        <!-- Nav Links (Desktop) -->
        <nav class="hidden md:flex items-center space-x-8">
          <a href="#features" class="text-xs sm:text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Features</a>
          <a href="#how-it-works" class="text-xs sm:text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">How It Works</a>
          <a href="#pricing" class="text-xs sm:text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Pricing</a>
          <a href="#faq" class="text-xs sm:text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">FAQ</a>
        </nav>

        <!-- CTA Buttons -->
        <div class="flex items-center space-x-4">
          <router-link 
            to="/login" 
            class="px-4.5 py-2 rounded-full text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 active:scale-98 shadow-sm hover:shadow-md transition-all"
          >
            Login
          </router-link>
          
          <!-- Mobile Menu Button -->
          <button 
            @click="mobileMenuOpen = !mobileMenuOpen" 
            class="md:hidden p-2 rounded-xl text-slate-600 hover:bg-slate-100 transition-colors"
          >
            <Menu v-if="!mobileMenuOpen" class="h-5 w-5" />
            <X v-else class="h-5 w-5" />
          </button>
        </div>
      </div>

      <!-- Mobile Menu Dropdown -->
      <transition name="slide-fade">
        <div 
          v-if="mobileMenuOpen" 
          class="absolute top-20 left-4 right-4 bg-white border border-slate-200 shadow-xl rounded-2xl p-5 md:hidden flex flex-col space-y-3"
        >
          <a @click="mobileMenuOpen = false" href="#features" class="text-xs font-semibold text-slate-700 py-2 border-b border-slate-100">Features</a>
          <a @click="mobileMenuOpen = false" href="#how-it-works" class="text-xs font-semibold text-slate-700 py-2 border-b border-slate-100">How It Works</a>
          <a @click="mobileMenuOpen = false" href="#pricing" class="text-xs font-semibold text-slate-700 py-2 border-b border-slate-100">Pricing</a>
          <a @click="mobileMenuOpen = false" href="#faq" class="text-xs font-semibold text-slate-700 py-2 border-b border-slate-100">FAQ</a>
          <router-link 
            to="/login" 
            @click="mobileMenuOpen = false"
            class="w-full text-center py-2.5 rounded-xl text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 shadow-sm transition-all"
          >
            Login to Account
          </router-link>
        </div>
      </transition>
    </header>

    <!-- Hero Section -->
    <section class="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-gradient-to-b from-blue-50/20 via-white to-white">
      <div class="max-w-7xl mx-auto px-6">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <!-- Left Content -->
          <div class="lg:col-span-6 flex flex-col items-start text-left">
            <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 border border-blue-100 text-blue-700 mb-5 shadow-2xs">
              <Sparkles class="h-3.5 w-3.5" />
              <span>Intelligent Library & Workspace Management</span>
            </div>
            
            <h1 class="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight text-slate-900 mb-5">
              Smart Library<br />Management<br />
              <span class="text-blue-600">For Modern Institutions</span>
            </h1>
            
            <p class="text-xs sm:text-sm text-slate-600 mb-7 max-w-xl leading-relaxed font-normal">
              Manage students, books, seat bookings, and borrowing in one clean, intelligent platform. Perfect for schools, colleges, and educational academies.
            </p>
            
            <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto">
              <router-link 
                to="/register" 
                class="px-6 py-3 rounded-xl text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 active:scale-98 shadow-md shadow-blue-500/20 hover:shadow-blue-500/35 transition-all text-center flex items-center justify-center gap-2"
              >
                <span>Start Free Today</span>
                <ChevronRight class="h-4 w-4" />
              </router-link>
              
              <a 
                href="#contact" 
                class="px-6 py-3 rounded-xl text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 active:scale-98 transition-all text-center"
              >
                Request Demo
              </a>
            </div>
          </div>

          <!-- Right Content (Updated Image Display: Mobile & Desktop Dashboard Showcase) -->
          <div class="lg:col-span-6 flex justify-center items-center relative">
            <div class="absolute -inset-4 bg-blue-500/10 rounded-full blur-3xl opacity-70"></div>
            
            <div class="relative w-full max-w-lg lg:max-w-xl">
              <!-- Showcase Frame Card -->
              <div class="bg-white border border-slate-200/80 shadow-2xl rounded-3xl p-3 sm:p-4 overflow-hidden group">
                <img 
                  :src="heroMobileImg" 
                  alt="SmartLib Dashboard & Mobile Seat Booking Showcase" 
                  class="w-full h-auto rounded-2xl object-cover transform group-hover:scale-[1.01] transition-transform duration-500"
                />
              </div>

              <!-- Floating Live Occupancy Pill -->
              <div class="absolute -right-3 -bottom-4 bg-white border border-slate-200/80 shadow-xl rounded-2xl p-3 sm:p-3.5 flex items-center space-x-3 animate-bounce-slow">
                <div class="h-9 w-9 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 border border-blue-100">
                  <TrendingUp class="h-4.5 w-4.5" />
                </div>
                <div class="text-left">
                  <p class="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">Live Occupancy</p>
                  <p class="text-sm sm:text-base font-bold text-slate-800 leading-none mt-0.5">94.8% Active</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- Stats Bar -->
    <section class="border-y border-slate-200/80 bg-slate-50/50 py-8">
      <div class="max-w-7xl mx-auto px-6">
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="text-center group">
            <h3 class="text-2xl sm:text-3xl font-bold text-blue-600 inline-block">12,500+</h3>
            <p class="text-xs font-semibold text-slate-500 mt-1 uppercase tracking-wider">Active Students</p>
          </div>
          <div class="text-center group">
            <h3 class="text-2xl sm:text-3xl font-bold text-blue-600 inline-block">24+</h3>
            <p class="text-xs font-semibold text-slate-500 mt-1 uppercase tracking-wider">Library Locations</p>
          </div>
          <div class="text-center group">
            <h3 class="text-2xl sm:text-3xl font-bold text-blue-600 inline-block">45,000+</h3>
            <p class="text-xs font-semibold text-slate-500 mt-1 uppercase tracking-wider">Total Bookings</p>
          </div>
          <div class="text-center group">
            <h3 class="text-2xl sm:text-3xl font-bold text-blue-600 inline-block">98%</h3>
            <p class="text-xs font-semibold text-slate-500 mt-1 uppercase tracking-wider">Satisfaction Rate</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Challenges Section -->
    <section id="challenges" class="py-16 md:py-24 bg-slate-50/50 border-b border-slate-200 relative overflow-hidden">
      <div class="max-w-7xl mx-auto px-6 text-center relative z-10">
        
        <!-- Section Header -->
        <div class="max-w-3xl mx-auto mb-12">
          <span class="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold uppercase bg-rose-50 border border-rose-100 text-rose-600 shadow-2xs mb-3">
            <AlertCircle class="h-3.5 w-3.5" />
            <span>The Daily Struggle</span>
          </span>
          <h2 class="text-2xl sm:text-3xl font-bold text-slate-800 tracking-tight mb-3">
            The Challenges You Face Everyday
          </h2>
          <p class="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
            Both students and library administrators lose valuable time dealing with outdated, manual processes that hold everyone back.
          </p>
        </div>

        <!-- Persona Switcher Tabs -->
        <div class="flex justify-center mb-10">
          <div class="bg-white border border-slate-200 p-1 rounded-xl flex items-center gap-1 shadow-2xs">
            <button 
              @click="activeChallengeTab = 'students'"
              :class="[
                'px-5 py-2 rounded-lg text-xs font-semibold flex items-center gap-2 transition-all select-none',
                activeChallengeTab === 'students' 
                  ? 'bg-rose-50 text-rose-700 border border-rose-200' 
                  : 'bg-transparent text-slate-600 hover:text-slate-900'
              ]"
            >
              <GraduationCap class="h-4 w-4" />
              <span>For Students</span>
            </button>
            
            <button 
              @click="activeChallengeTab = 'librarians'"
              :class="[
                'px-5 py-2 rounded-lg text-xs font-semibold flex items-center gap-2 transition-all select-none',
                activeChallengeTab === 'librarians' 
                  ? 'bg-amber-50 text-amber-800 border border-amber-200' 
                  : 'bg-transparent text-slate-600 hover:text-slate-900'
              ]"
            >
              <Briefcase class="h-4 w-4" />
              <span>For Librarians</span>
            </button>
          </div>
        </div>

        <!-- Tab Content -->
        <transition name="fade-slide-spotlight" mode="out-in">
          
          <!-- Student Pain Points Deck -->
          <div v-if="activeChallengeTab === 'students'" key="students" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div class="bg-white border border-slate-200 rounded-2xl p-5 shadow-2xs hover:shadow-md transition-all text-left flex flex-col justify-between">
              <div>
                <div class="flex justify-between items-center mb-4">
                  <div class="h-9 w-9 rounded-xl bg-rose-50 text-rose-500 flex items-center justify-center">
                    <Ban class="h-4.5 w-4.5" />
                  </div>
                  <span class="text-xs font-semibold text-slate-400">01 / Outdated</span>
                </div>
                <h4 class="text-sm font-bold text-slate-800 mb-1.5">No Available Seats</h4>
                <p class="text-xs text-slate-500 leading-relaxed font-normal mb-5">
                  Arriving at the library only to find every desk occupied. Finding a study spot is a constant gamble.
                </p>
              </div>
              <div class="bg-emerald-50/50 border border-emerald-100 rounded-xl p-3 mt-auto">
                <span class="text-[10px] font-semibold uppercase text-emerald-700 bg-emerald-100/60 px-2 py-0.5 rounded inline-block mb-1">
                  SmartLib Fix
                </span>
                <p class="text-xs font-medium text-slate-800">Live seat maps & instant desk booking.</p>
              </div>
            </div>

            <div class="bg-white border border-slate-200 rounded-2xl p-5 shadow-2xs hover:shadow-md transition-all text-left flex flex-col justify-between">
              <div>
                <div class="flex justify-between items-center mb-4">
                  <div class="h-9 w-9 rounded-xl bg-rose-50 text-rose-500 flex items-center justify-center">
                    <Hourglass class="h-4.5 w-4.5" />
                  </div>
                  <span class="text-xs font-semibold text-slate-400">02 / Outdated</span>
                </div>
                <h4 class="text-sm font-bold text-slate-800 mb-1.5">Tedious Manual Check-In</h4>
                <p class="text-xs text-slate-500 leading-relaxed font-normal mb-5">
                  Standing in long lines or writing details in paper logs just to occupy a seat you reserved online.
                </p>
              </div>
              <div class="bg-emerald-50/50 border border-emerald-100 rounded-xl p-3 mt-auto">
                <span class="text-[10px] font-semibold uppercase text-emerald-700 bg-emerald-100/60 px-2 py-0.5 rounded inline-block mb-1">
                  SmartLib Fix
                </span>
                <p class="text-xs font-medium text-slate-800">Instant QR seat check-in at your desk.</p>
              </div>
            </div>

            <div class="bg-white border border-slate-200 rounded-2xl p-5 shadow-2xs hover:shadow-md transition-all text-left flex flex-col justify-between">
              <div>
                <div class="flex justify-between items-center mb-4">
                  <div class="h-9 w-9 rounded-xl bg-rose-50 text-rose-500 flex items-center justify-center">
                    <Frown class="h-4.5 w-4.5" />
                  </div>
                  <span class="text-xs font-semibold text-slate-400">03 / Outdated</span>
                </div>
                <h4 class="text-sm font-bold text-slate-800 mb-1.5">Untracked Study Progress</h4>
                <p class="text-xs text-slate-500 leading-relaxed font-normal mb-5">
                  No clear way to log study sessions, analyze peak productivity hours, or stay motivated.
                </p>
              </div>
              <div class="bg-emerald-50/50 border border-emerald-100 rounded-xl p-3 mt-auto">
                <span class="text-[10px] font-semibold uppercase text-emerald-700 bg-emerald-100/60 px-2 py-0.5 rounded inline-block mb-1">
                  SmartLib Fix
                </span>
                <p class="text-xs font-medium text-slate-800">Visual productivity charts & rewards.</p>
              </div>
            </div>

            <div class="bg-white border border-slate-200 rounded-2xl p-5 shadow-2xs hover:shadow-md transition-all text-left flex flex-col justify-between">
              <div>
                <div class="flex justify-between items-center mb-4">
                  <div class="h-9 w-9 rounded-xl bg-rose-50 text-rose-500 flex items-center justify-center">
                    <BookOpen class="h-4.5 w-4.5" />
                  </div>
                  <span class="text-xs font-semibold text-slate-400">04 / Outdated</span>
                </div>
                <h4 class="text-sm font-bold text-slate-800 mb-1.5">Scattered Resources</h4>
                <p class="text-xs text-slate-500 leading-relaxed font-normal mb-5">
                  Hunting down textbooks across physical shelves without knowing if they are checked out.
                </p>
              </div>
              <div class="bg-emerald-50/50 border border-emerald-100 rounded-xl p-3 mt-auto">
                <span class="text-[10px] font-semibold uppercase text-emerald-700 bg-emerald-100/60 px-2 py-0.5 rounded inline-block mb-1">
                  SmartLib Fix
                </span>
                <p class="text-xs font-medium text-slate-800">Integrated digital catalog search.</p>
              </div>
            </div>

          </div>

          <!-- Librarian Pain Points Deck -->
          <div v-else-if="activeChallengeTab === 'librarians'" key="librarians" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div class="bg-white border border-slate-200 rounded-2xl p-5 shadow-2xs hover:shadow-md transition-all text-left flex flex-col justify-between">
              <div>
                <div class="flex justify-between items-center mb-4">
                  <div class="h-9 w-9 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
                    <ClipboardList class="h-4.5 w-4.5" />
                  </div>
                  <span class="text-xs font-semibold text-slate-400">01 / Outdated</span>
                </div>
                <h4 class="text-sm font-bold text-slate-800 mb-1.5">Paper Attendance Logs</h4>
                <p class="text-xs text-slate-500 leading-relaxed font-normal mb-5">
                  Manually recording student entries in paper registers. Messy handwritten records that are hard to audit.
                </p>
              </div>
              <div class="bg-emerald-50/50 border border-emerald-100 rounded-xl p-3 mt-auto">
                <span class="text-[10px] font-semibold uppercase text-emerald-700 bg-emerald-100/60 px-2 py-0.5 rounded inline-block mb-1">
                  SmartLib Fix
                </span>
                <p class="text-xs font-medium text-slate-800">Automated digital attendance tracking.</p>
              </div>
            </div>

            <div class="bg-white border border-slate-200 rounded-2xl p-5 shadow-2xs hover:shadow-md transition-all text-left flex flex-col justify-between">
              <div>
                <div class="flex justify-between items-center mb-4">
                  <div class="h-9 w-9 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
                    <EyeOff class="h-4.5 w-4.5" />
                  </div>
                  <span class="text-xs font-semibold text-slate-400">02 / Outdated</span>
                </div>
                <h4 class="text-sm font-bold text-slate-800 mb-1.5">No Real-Time Seat Visibility</h4>
                <p class="text-xs text-slate-500 leading-relaxed font-normal mb-5">
                  Unable to see which seats are occupied or available without physically walking the floor.
                </p>
              </div>
              <div class="bg-emerald-50/50 border border-emerald-100 rounded-xl p-3 mt-auto">
                <span class="text-[10px] font-semibold uppercase text-emerald-700 bg-emerald-100/60 px-2 py-0.5 rounded inline-block mb-1">
                  SmartLib Fix
                </span>
                <p class="text-xs font-medium text-slate-800">Live occupancy dashboard & analytics.</p>
              </div>
            </div>

            <div class="bg-white border border-slate-200 rounded-2xl p-5 shadow-2xs hover:shadow-md transition-all text-left flex flex-col justify-between">
              <div>
                <div class="flex justify-between items-center mb-4">
                  <div class="h-9 w-9 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
                    <UserX class="h-4.5 w-4.5" />
                  </div>
                  <span class="text-xs font-semibold text-slate-400">03 / Outdated</span>
                </div>
                <h4 class="text-sm font-bold text-slate-800 mb-1.5">Ghost Reservations</h4>
                <p class="text-xs text-slate-500 leading-relaxed font-normal mb-5">
                  Students reserve seats but never show up, leaving desks blocked while others search.
                </p>
              </div>
              <div class="bg-emerald-50/50 border border-emerald-100 rounded-xl p-3 mt-auto">
                <span class="text-[10px] font-semibold uppercase text-emerald-700 bg-emerald-100/60 px-2 py-0.5 rounded inline-block mb-1">
                  SmartLib Fix
                </span>
                <p class="text-xs font-medium text-slate-800">Auto-release unchecked-in reservations.</p>
              </div>
            </div>

            <div class="bg-white border border-slate-200 rounded-2xl p-5 shadow-2xs hover:shadow-md transition-all text-left flex flex-col justify-between">
              <div>
                <div class="flex justify-between items-center mb-4">
                  <div class="h-9 w-9 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
                    <Search class="h-4.5 w-4.5" />
                  </div>
                  <span class="text-xs font-semibold text-slate-400">04 / Outdated</span>
                </div>
                <h4 class="text-sm font-bold text-slate-800 mb-1.5">Manual Catalog Audits</h4>
                <p class="text-xs text-slate-500 leading-relaxed font-normal mb-5">
                  Losing hours cross-checking physical books against borrowing logs to identify missing items.
                </p>
              </div>
              <div class="bg-emerald-50/50 border border-emerald-100 rounded-xl p-3 mt-auto">
                <span class="text-[10px] font-semibold uppercase text-emerald-700 bg-emerald-100/60 px-2 py-0.5 rounded inline-block mb-1">
                  SmartLib Fix
                </span>
                <p class="text-xs font-medium text-slate-800">Live borrow tracking & overdue alerts.</p>
              </div>
            </div>

          </div>

        </transition>

      </div>
    </section>

    <!-- Features Showcase Section -->
    <section id="features" class="py-16 md:py-24 bg-slate-50/30 border-b border-slate-200 relative overflow-hidden">
      <div class="max-w-7xl mx-auto px-6 relative z-10">
        
        <!-- Header -->
        <div class="text-center max-w-3xl mx-auto mb-16">
          <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase bg-blue-50 border border-blue-100 text-blue-600 mb-3 select-none">
            <span>Feature Showcase</span>
          </div>
          <h2 class="text-2xl sm:text-3xl font-bold text-slate-800 tracking-tight mb-3">
            Everything You Need for Modern Study
          </h2>
          <p class="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
            Interactive floor maps, digitised catalogues, real-time analytics and automatic notifications in a single, lightning-fast platform.
          </p>
        </div>

        <!-- 2-Column Split Workspace -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          <!-- Left Column: Interactive Vertical Tabs -->
          <div class="lg:col-span-4 flex flex-col gap-2.5 justify-center">
            <button 
              v-for="(feature, idx) in featuresList" 
              :key="feature.tabTitle"
              @click="activeFeature = idx"
              :class="[
                'w-full text-left p-4 rounded-xl border transition-all duration-300 flex items-start gap-3.5 select-none relative overflow-hidden group',
                activeFeature === idx
                  ? 'bg-white border-blue-200 shadow-sm'
                  : 'bg-white/60 border-slate-200/60 hover:bg-white hover:border-slate-300'
              ]"
            >
              <div 
                :class="[
                  'absolute left-0 top-0 bottom-0 w-1 transition-all duration-300',
                  activeFeature === idx ? 'bg-blue-600' : 'bg-transparent'
                ]"
              ></div>

              <div 
                :class="[
                  'h-9 w-9 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors border',
                  activeFeature === idx
                    ? 'bg-blue-50 border-blue-100 text-blue-600'
                    : 'bg-slate-50 border-slate-100 text-slate-400 group-hover:text-slate-600'
                ]"
              >
                <component :is="feature.tabIcon" class="h-4.5 w-4.5" />
              </div>

              <div class="flex-1 min-w-0">
                <span 
                  :class="[
                    'text-xs font-bold transition-colors block mb-0.5',
                    activeFeature === idx ? 'text-blue-600' : 'text-slate-700'
                  ]"
                >
                  {{ feature.tabTitle }}
                </span>
                <span class="text-[11px] text-slate-500 font-normal block truncate">
                  {{ feature.description }}
                </span>
              </div>
            </button>
          </div>

          <!-- Right Column: Presentation Spotlight Card -->
          <div class="lg:col-span-8 flex">
            <div class="w-full bg-white border border-slate-200 shadow-lg rounded-2xl overflow-hidden flex flex-col justify-between">
              <transition name="fade-slide-spotlight" mode="out-in">
                <div :key="activeFeature" class="grid grid-cols-1 md:grid-cols-12 items-stretch h-full">
                  
                  <!-- Info Left -->
                  <div class="md:col-span-7 p-7 sm:p-9 flex flex-col justify-center items-start text-left">
                    <div class="h-10 w-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 mb-5">
                      <component :is="featuresList[activeFeature].tabIcon" class="h-5 w-5" />
                    </div>
                    
                    <h3 class="text-xl sm:text-2xl font-bold text-slate-800 mb-3 leading-snug">
                      {{ featuresList[activeFeature].title }}
                    </h3>
                    
                    <p class="text-xs text-slate-500 leading-relaxed font-normal mb-5">
                      {{ featuresList[activeFeature].description }}
                    </p>
                    
                    <ul class="space-y-2.5 w-full">
                      <li 
                        v-for="bullet in featuresList[activeFeature].bullets" 
                        :key="bullet" 
                        class="flex items-center space-x-2.5 text-slate-700 text-xs font-medium"
                      >
                        <div class="h-4.5 w-4.5 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 flex-shrink-0">
                          <Check class="h-3 w-3" />
                        </div>
                        <span>{{ bullet }}</span>
                      </li>
                    </ul>
                  </div>

                  <!-- Visual Sandbox Widget Right -->
                  <div class="md:col-span-5 bg-gradient-to-br from-slate-50/70 to-slate-100/50 border-t md:border-t-0 md:border-l border-slate-200 flex items-center justify-center p-6 relative overflow-hidden min-h-[280px]">
                    
                    <!-- Dynamic Seat booking Widget -->
                    <div v-if="activeFeature === 0" class="w-full max-w-[260px]">
                      <p class="text-[10px] font-semibold text-slate-400 uppercase tracking-wider text-center mb-3">Click to Reserve a desk</p>
                      <div class="grid grid-cols-4 gap-2">
                        <button 
                          v-for="seat in mockSeats" 
                          :key="seat.id"
                          @click="toggleMockSeat(seat.id)"
                          :class="[
                            'aspect-square rounded-lg border flex flex-col items-center justify-center text-xs font-semibold transition-all relative',
                            seat.status === 'booked' 
                              ? 'bg-slate-200 border-slate-300 text-slate-400 cursor-not-allowed'
                              : seat.status === 'selected'
                                ? 'bg-blue-600 border-blue-600 text-white scale-105 shadow-sm'
                                : 'bg-white border-slate-200 text-slate-700 hover:border-blue-400 hover:bg-blue-50/20'
                          ]"
                          :disabled="seat.status === 'booked'"
                        >
                          <span>{{ seat.label }}</span>
                          <div v-if="seat.status === 'selected'" class="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-green-500 border border-white flex items-center justify-center text-[7px] text-white">✓</div>
                        </button>
                      </div>
                      <div class="bg-white border border-slate-200 rounded-lg p-2 text-center mt-4 shadow-2xs">
                        <p class="text-xs font-semibold text-slate-700">
                          {{ selectedSeatLabel ? `Selected: ${selectedSeatLabel}` : 'Choose an empty seat' }}
                        </p>
                      </div>
                    </div>

                    <!-- Digital Library Catalog Widget -->
                    <div v-if="activeFeature === 1" class="w-full max-w-[260px] bg-white border border-slate-200 rounded-xl p-3.5 shadow-2xs text-left">
                      <div class="relative mb-3">
                        <input 
                          type="text" 
                          v-model="mockSearchQuery" 
                          placeholder="Search books..." 
                          class="w-full pl-8 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-blue-500 font-normal"
                        />
                        <Search class="h-3.5 w-3.5 text-slate-400 absolute left-2.5 top-2" />
                      </div>
                      <div class="space-y-2 max-h-[150px] overflow-y-auto pr-1">
                        <div 
                          v-for="book in filteredMockBooks" 
                          :key="book.title"
                          class="flex items-center justify-between p-2 rounded-lg bg-slate-50 border border-slate-100"
                        >
                          <div>
                            <h4 class="text-xs font-semibold text-slate-800 leading-tight">{{ book.title }}</h4>
                            <p class="text-[10px] text-slate-500 mt-0.5 font-normal">{{ book.author }}</p>
                          </div>
                          <span class="text-[9px] font-semibold bg-blue-50 text-blue-600 border border-blue-200 px-2 py-0.5 rounded-md">Available</span>
                        </div>
                      </div>
                    </div>

                    <!-- Events List Widget -->
                    <div v-if="activeFeature === 2" class="w-full max-w-[260px] text-left space-y-2.5">
                      <div 
                        v-for="ev in mockEvents" 
                        :key="ev.title"
                        class="bg-white border border-slate-200 rounded-xl p-3 shadow-2xs flex items-center justify-between"
                      >
                        <div>
                          <span class="text-[9px] font-semibold text-blue-600 uppercase tracking-wider bg-blue-50 px-2 py-0.5 rounded border border-blue-100">{{ ev.category }}</span>
                          <h4 class="text-xs font-bold text-slate-800 mt-1.5">{{ ev.title }}</h4>
                          <p class="text-[10px] text-slate-500 mt-0.5 flex items-center gap-1 font-normal">
                            <Clock class="h-3 w-3 text-slate-400" />
                            <span>{{ ev.time }}</span>
                          </p>
                        </div>
                        <button 
                          @click="ev.registered = !ev.registered"
                          :class="[
                            'px-2.5 py-1 rounded-md text-[10px] font-semibold transition-all',
                            ev.registered
                              ? 'bg-emerald-50 border border-emerald-200 text-emerald-600'
                              : 'bg-blue-600 text-white hover:bg-blue-700'
                          ]"
                        >
                          {{ ev.registered ? 'Registered' : 'Join' }}
                        </button>
                      </div>
                    </div>

                    <!-- QR Seat Check-In Scanner Widget -->
                    <div v-if="activeFeature === 3" class="w-full max-w-[220px] bg-white border border-slate-200 rounded-xl p-4 shadow-2xs text-center relative flex flex-col items-center">
                      <div class="h-32 w-32 bg-slate-50 border border-slate-200 rounded-lg flex items-center justify-center p-2 relative overflow-hidden shadow-inner">
                        <QrCode class="h-24 w-24 text-slate-800" />
                        <div class="absolute left-0 right-0 h-0.5 bg-blue-500 animate-scan shadow-md shadow-blue-500/80"></div>
                      </div>
                      <p class="text-xs font-bold text-slate-800 mt-3">Desk QR Scanner</p>
                      <p class="text-[10px] text-slate-500 mt-1 font-normal leading-relaxed">Scan desk QR code to check in and occupy seat.</p>
                    </div>

                    <!-- Study Hours Analytics Chart Widget -->
                    <div v-if="activeFeature === 4" class="w-full max-w-[260px] bg-white border border-slate-200 rounded-xl p-3.5 shadow-2xs text-left">
                      <div class="flex justify-between items-center mb-3">
                        <h4 class="text-xs font-bold text-slate-800">Weekly Study Time</h4>
                        <span class="text-[9px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">+12% vs last week</span>
                      </div>
                      <div class="flex items-end justify-between h-20 pt-3 border-b border-slate-100 px-2">
                        <div class="flex flex-col items-center w-5 group">
                          <div class="w-2 bg-slate-200 group-hover:bg-blue-500 rounded-t-xs transition-all duration-300" style="height: 40%"></div>
                          <span class="text-[8px] text-slate-400 mt-1 font-medium">M</span>
                        </div>
                        <div class="flex flex-col items-center w-5 group">
                          <div class="w-2 bg-slate-200 group-hover:bg-blue-500 rounded-t-xs transition-all duration-300" style="height: 65%"></div>
                          <span class="text-[8px] text-slate-400 mt-1 font-medium">T</span>
                        </div>
                        <div class="flex flex-col items-center w-5 group">
                          <div class="w-2 bg-slate-200 group-hover:bg-blue-500 rounded-t-xs transition-all duration-300" style="height: 50%"></div>
                          <span class="text-[8px] text-slate-400 mt-1 font-medium">W</span>
                        </div>
                        <div class="flex flex-col items-center w-5 group">
                          <div class="w-2 bg-blue-600 rounded-t-xs transition-all duration-300" style="height: 85%"></div>
                          <span class="text-[8px] text-blue-600 mt-1 font-semibold">T</span>
                        </div>
                        <div class="flex flex-col items-center w-5 group">
                          <div class="w-2 bg-slate-200 group-hover:bg-blue-500 rounded-t-xs transition-all duration-300" style="height: 35%"></div>
                          <span class="text-[8px] text-slate-400 mt-1 font-medium">F</span>
                        </div>
                        <div class="flex flex-col items-center w-5 group">
                          <div class="w-2 bg-slate-200 group-hover:bg-blue-500 rounded-t-xs transition-all duration-300" style="height: 90%"></div>
                          <span class="text-[8px] text-slate-400 mt-1 font-medium">S</span>
                        </div>
                      </div>
                      <div class="flex justify-between items-center mt-3">
                        <p class="text-[10px] text-slate-500 font-normal">Daily Average</p>
                        <p class="text-xs font-semibold text-slate-800">4.8 hours</p>
                      </div>
                    </div>

                    <!-- Loyalty Rewards Points Progress Widget -->
                    <div v-if="activeFeature === 5" class="w-full max-w-[260px] bg-white border border-slate-200 rounded-xl p-3.5 shadow-2xs text-left">
                      <div class="flex items-center space-x-3 border-b border-slate-100 pb-2.5 mb-2.5">
                        <div class="h-9 w-9 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600">
                          <Award class="h-5 w-5" />
                        </div>
                        <div>
                          <h4 class="text-xs font-bold text-slate-800">Loyalty Level 3</h4>
                          <p class="text-[10px] text-slate-400 mt-0.5">Academic Champion</p>
                        </div>
                      </div>
                      <div>
                        <div class="flex justify-between items-center text-[10px] font-medium text-slate-600 mb-1">
                          <span>Points Progress</span>
                          <span>3,450 / 5,000 pts</span>
                        </div>
                        <div class="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                          <div class="h-full bg-blue-600 rounded-full" style="width: 69%"></div>
                        </div>
                      </div>
                      <div class="mt-3 flex items-center space-x-2">
                        <span class="text-[9px] font-semibold bg-blue-50 text-blue-600 border border-blue-100 px-2 py-0.5 rounded-full uppercase">Reward Ready</span>
                        <span class="text-[9px] text-slate-500 font-normal">• 1 Free Espresso Pass</span>
                      </div>
                    </div>

                  </div>

                </div>
              </transition>
            </div>
          </div>

        </div>

      </div>
    </section>

    <!-- How It Works Section -->
    <section id="how-it-works" class="py-16 md:py-24 border-t border-slate-200 bg-white">
      <div class="max-w-7xl mx-auto px-6">
        <div class="text-center max-w-2xl mx-auto mb-16">
          <span class="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold uppercase bg-blue-50 border border-blue-100 text-blue-600 mb-3 select-none">
            Simple Process
          </span>
          <h2 class="text-2xl sm:text-3xl font-bold text-slate-800 tracking-tight mb-3">
            How It Works in 4 Steps
          </h2>
          <p class="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
            Booking study desks and checking out digital learning resources takes just a few seconds.
          </p>
        </div>

        <!-- 4 Steps Connected Flow -->
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          
          <div class="relative flex flex-col items-center text-center group">
            <div class="hidden md:block absolute top-9 left-[65%] right-[-35%] h-0.5 bg-slate-200 -z-10"></div>
            <div class="h-16 w-16 rounded-2xl bg-blue-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20 mb-5 transform group-hover:scale-105 transition-all">
              <Search class="h-7 w-7" />
            </div>
            <span class="text-[10px] font-semibold uppercase tracking-wider text-blue-600 bg-blue-50 border border-blue-100 px-2.5 py-0.5 rounded-full mb-2">
              Step 01
            </span>
            <h3 class="text-base font-bold text-slate-800 mb-1.5">Find a Library</h3>
            <p class="text-xs text-slate-500 leading-relaxed max-w-[220px] font-normal">
              Explore participating ICAP library locations nationwide and verify live seat occupancy statistics.
            </p>
          </div>

          <div class="relative flex flex-col items-center text-center group">
            <div class="hidden md:block absolute top-9 left-[65%] right-[-35%] h-0.5 bg-slate-200 -z-10"></div>
            <div class="h-16 w-16 rounded-2xl bg-blue-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20 mb-5 transform group-hover:scale-105 transition-all">
              <MapPin class="h-7 w-7" />
            </div>
            <span class="text-[10px] font-semibold uppercase tracking-wider text-blue-600 bg-blue-50 border border-blue-100 px-2.5 py-0.5 rounded-full mb-2">
              Step 02
            </span>
            <h3 class="text-base font-bold text-slate-800 mb-1.5">Select & Reserve</h3>
            <p class="text-xs text-slate-500 leading-relaxed max-w-[220px] font-normal">
              Check out live interactive floor seat maps, select your preferred desk location, and reserve instantly.
            </p>
          </div>

          <div class="relative flex flex-col items-center text-center group">
            <div class="hidden md:block absolute top-9 left-[65%] right-[-35%] h-0.5 bg-slate-200 -z-10"></div>
            <div class="h-16 w-16 rounded-2xl bg-blue-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20 mb-5 transform group-hover:scale-105 transition-all">
              <QrCode class="h-7 w-7" />
            </div>
            <span class="text-[10px] font-semibold uppercase tracking-wider text-blue-600 bg-blue-50 border border-blue-100 px-2.5 py-0.5 rounded-full mb-2">
              Step 03
            </span>
            <h3 class="text-base font-bold text-slate-800 mb-1.5">QR Seat Check-In</h3>
            <p class="text-xs text-slate-500 leading-relaxed max-w-[220px] font-normal">
              Go to your reserved desk and scan the QR code to check in and occupy your seat.
            </p>
          </div>

          <div class="relative flex flex-col items-center text-center group">
            <div class="h-16 w-16 rounded-2xl bg-blue-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20 mb-5 transform group-hover:scale-105 transition-all">
              <Clock class="h-7 w-7" />
            </div>
            <span class="text-[10px] font-semibold uppercase tracking-wider text-blue-600 bg-blue-50 border border-blue-100 px-2.5 py-0.5 rounded-full mb-2">
              Step 04
            </span>
            <h3 class="text-base font-bold text-slate-800 mb-1.5">Optimize Study</h3>
            <p class="text-xs text-slate-500 leading-relaxed max-w-[220px] font-normal">
              Track remaining session duration, extend bookings as needed, and enjoy focused study time.
            </p>
          </div>

        </div>
      </div>
    </section>

    <!-- Pricing Section -->
    <section id="pricing" class="py-16 md:py-24 bg-white border-t border-slate-200">
      <div class="max-w-7xl mx-auto px-6 text-center">
        <div class="max-w-2xl mx-auto mb-10">
          <h2 class="text-2xl sm:text-3xl font-bold text-slate-800 tracking-tight mb-3">
            Simple, Transparent Pricing
          </h2>
          <p class="text-xs sm:text-sm text-slate-600 font-normal">
            Choose the membership tier that fits your academic goals or institute needs.
          </p>
        </div>

        <!-- Monthly/Annual Toggle -->
        <div class="flex justify-center items-center space-x-3 mb-12">
          <span :class="['text-xs font-semibold transition-all', !isAnnual ? 'text-blue-600' : 'text-slate-500']">Monthly Billing</span>
          <button 
            @click="isAnnual = !isAnnual"
            class="w-12 h-7 bg-blue-100 rounded-full p-1 transition-all duration-300 relative focus:outline-none"
          >
            <div 
              :class="[
                'w-5 h-5 bg-blue-600 rounded-full transition-transform duration-300 absolute top-1',
                isAnnual ? 'translate-x-5' : 'translate-x-0'
              ]"
            ></div>
          </button>
          <span :class="['text-xs font-semibold transition-all', isAnnual ? 'text-blue-600' : 'text-slate-500']">
            Annual Billing 
            <span class="text-[10px] bg-emerald-50 border border-emerald-200 text-emerald-600 px-2 py-0.5 rounded-full font-semibold ml-1">Save 20%</span>
          </span>
        </div>

        <!-- Plans Grid -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto items-stretch">
          
          <div class="bg-white border border-slate-200 rounded-2xl p-7 shadow-2xs flex flex-col justify-between text-left hover:border-slate-300 transition-all">
            <div>
              <span class="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Free Account</span>
              <h3 class="text-lg font-bold text-slate-800 mt-1">Student Basic</h3>
              <p class="text-xs text-slate-500 mt-0.5 font-normal">Ideal for occasional study sessions</p>
              
              <div class="my-5 flex items-baseline">
                <span class="text-3xl font-bold text-slate-800">Rs. 0</span>
                <span class="text-xs font-normal text-slate-500 ml-1">/ forever</span>
              </div>

              <ul class="space-y-3 border-t border-slate-100 pt-5">
                <li class="flex items-center space-x-2 text-xs text-slate-600 font-normal">
                  <Check class="h-4 w-4 text-blue-600" />
                  <span>Access to catalog search</span>
                </li>
                <li class="flex items-center space-x-2 text-xs text-slate-600 font-normal">
                  <Check class="h-4 w-4 text-blue-600" />
                  <span>Up to 2 bookings per month</span>
                </li>
                <li class="flex items-center space-x-2 text-xs text-slate-600 font-normal">
                  <Check class="h-4 w-4 text-blue-600" />
                  <span>Standard QR seat check-in</span>
                </li>
              </ul>
            </div>
            
            <router-link 
              to="/register" 
              class="w-full text-center py-2.5 rounded-xl text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-all mt-6"
            >
              Sign Up Free
            </router-link>
          </div>

          <div class="bg-white border-2 border-blue-600 rounded-2xl p-7 shadow-lg shadow-blue-500/5 flex flex-col justify-between text-left relative">
            <div class="absolute -top-3 right-5 bg-blue-600 text-white text-[9px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full">
              Popular Choice
            </div>

            <div>
              <span class="text-[11px] font-semibold text-blue-600 uppercase tracking-wider">Scholar Pro</span>
              <h3 class="text-lg font-bold text-slate-800 mt-1">Premium Member</h3>
              <p class="text-xs text-slate-500 mt-0.5 font-normal">Best for active CA & finance students</p>
              
              <div class="my-5 flex items-baseline">
                <span class="text-3xl font-bold text-slate-800">{{ isAnnual ? 'Rs. 799' : 'Rs. 999' }}</span>
                <span class="text-xs font-normal text-slate-500 ml-1">/ month</span>
              </div>

              <ul class="space-y-3 border-t border-slate-100 pt-5">
                <li class="flex items-center space-x-2 text-xs text-slate-600 font-normal">
                  <Check class="h-4 w-4 text-blue-600" />
                  <span>Unlimited seat reservations</span>
                </li>
                <li class="flex items-center space-x-2 text-xs text-slate-600 font-normal">
                  <Check class="h-4 w-4 text-blue-600" />
                  <span>Pre-book up to 7 days in advance</span>
                </li>
                <li class="flex items-center space-x-2 text-xs text-slate-600 font-normal">
                  <Check class="h-4 w-4 text-blue-600" />
                  <span>Interactive floor maps</span>
                </li>
                <li class="flex items-center space-x-2 text-xs text-slate-600 font-normal">
                  <Check class="h-4 w-4 text-blue-600" />
                  <span>Loyalty points rewards access</span>
                </li>
              </ul>
            </div>
            
            <router-link 
              to="/register" 
              class="w-full text-center py-2.5 rounded-xl text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 shadow-sm transition-all mt-6"
            >
              Get Started
            </router-link>
          </div>

          <div class="bg-white border border-slate-200 rounded-2xl p-7 shadow-2xs flex flex-col justify-between text-left hover:border-slate-300 transition-all">
            <div>
              <span class="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Institutional License</span>
              <h3 class="text-lg font-bold text-slate-800 mt-1">Smart Institute</h3>
              <p class="text-xs text-slate-500 mt-0.5 font-normal">For universities, colleges & libraries</p>
              
              <div class="my-5 flex items-baseline">
                <span class="text-3xl font-bold text-slate-800">Custom</span>
                <span class="text-xs font-normal text-slate-500 ml-1">/ location</span>
              </div>

              <ul class="space-y-3 border-t border-slate-100 pt-5">
                <li class="flex items-center space-x-2 text-xs text-slate-600 font-normal">
                  <Check class="h-4 w-4 text-blue-600" />
                  <span>Unlimited admin & librarian seats</span>
                </li>
                <li class="flex items-center space-x-2 text-xs text-slate-600 font-normal">
                  <Check class="h-4 w-4 text-blue-600" />
                  <span>Full student analytics dashboard</span>
                </li>
                <li class="flex items-center space-x-2 text-xs text-slate-600 font-normal">
                  <Check class="h-4 w-4 text-blue-600" />
                  <span>Automated checkout & notifications</span>
                </li>
                <li class="flex items-center space-x-2 text-xs text-slate-600 font-normal">
                  <Check class="h-4 w-4 text-blue-600" />
                  <span>Support API integrations</span>
                </li>
              </ul>
            </div>
            
            <a 
              :href="'mailto:' + contactEmail + '?subject=Institutional License Inquiry'" 
              class="w-full text-center py-2.5 rounded-xl text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-all mt-6"
            >
              Contact Support
            </a>
          </div>

        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section id="faq" class="py-16 md:py-24 bg-slate-50/50 border-t border-slate-200">
      <div class="max-w-4xl mx-auto px-6">
        <div class="text-center max-w-2xl mx-auto mb-12">
          <h2 class="text-2xl sm:text-3xl font-bold text-slate-800 tracking-tight mb-3">
            Frequently Asked Questions
          </h2>
          <p class="text-xs sm:text-sm text-slate-600 font-normal">
            Find answers to common questions about reservation limits, check-in requirements and loyalty points.
          </p>
        </div>

        <div class="space-y-3">
          <div 
            v-for="(faq, idx) in faqList" 
            :key="faq.question"
            class="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-2xs"
          >
            <button 
              @click="toggleFaq(idx)"
              class="w-full p-5 flex justify-between items-center text-left focus:outline-none"
            >
              <span class="text-xs sm:text-sm font-semibold text-slate-800">{{ faq.question }}</span>
              <span class="ml-4 flex-shrink-0 text-slate-400 transition-transform duration-200" :style="faq.open ? 'transform: rotate(180deg)' : ''">
                <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </button>
            
            <transition name="expand">
              <div v-show="faq.open" class="border-t border-slate-100 p-5 bg-slate-50/30 text-xs text-slate-600 leading-relaxed font-normal">
                {{ faq.answer }}
              </div>
            </transition>
          </div>
        </div>
      </div>
    </section>

    <!-- Clean Footer -->
    <footer class="bg-white border-t border-slate-200 py-12">
      <div class="max-w-7xl mx-auto px-6">
        
        <div class="grid grid-cols-1 md:grid-cols-12 gap-8 border-b border-slate-200 pb-10 mb-10">
          
          <!-- Column 1: Brand -->
          <div class="md:col-span-4 flex flex-col items-start text-left">
            <router-link to="/" class="flex items-center space-x-2 mb-4 group">
              <div class="h-9 w-9 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-sm group-hover:scale-105 transition-transform">
                <BookOpen class="h-5 w-5" />
              </div>
              <span class="text-base font-bold text-slate-900 leading-none tracking-tight">{{ appName }}</span>
            </router-link>
            <p class="text-xs text-slate-500 leading-relaxed max-w-sm mb-5 font-normal">
              {{ siteDescription }}
            </p>
            <div class="flex items-center space-x-2.5">
              <a href="https://twitter.com" target="_blank" class="h-8 w-8 rounded-lg border border-slate-200 hover:border-blue-500 flex items-center justify-center text-slate-400 hover:text-blue-600 transition-all">
                <Twitter class="h-4 w-4" />
              </a>
              <a href="#" target="_blank" class="h-8 w-8 rounded-lg border border-slate-200 hover:border-blue-500 flex items-center justify-center text-slate-400 hover:text-blue-600 transition-all">
                <Linkedin class="h-4 w-4" />
              </a>
              <a href="https://facebook.com" target="_blank" class="h-8 w-8 rounded-lg border border-slate-200 hover:border-blue-500 flex items-center justify-center text-slate-400 hover:text-blue-600 transition-all">
                <Facebook class="h-4 w-4" />
              </a>
            </div>
          </div>

          <!-- Column 2: Quick Links -->
          <div class="md:col-span-3 flex flex-col items-start text-left">
            <h4 class="text-xs font-bold uppercase text-slate-400 tracking-wider mb-4">Solutions</h4>
            <ul class="space-y-2.5">
              <li><a href="#features" @click="scrollToFeature(0, $event)" class="text-xs font-medium text-slate-600 hover:text-blue-600 transition-colors">Seat Booking</a></li>
              <li><a href="#features" @click="scrollToFeature(1, $event)" class="text-xs font-medium text-slate-600 hover:text-blue-600 transition-colors">Catalog Manager</a></li>
              <li><a href="#features" @click="scrollToFeature(2, $event)" class="text-xs font-medium text-slate-600 hover:text-blue-600 transition-colors">QR Seat Check-In</a></li>
              <li><a href="#features" @click="scrollToFeature(3, $event)" class="text-xs font-medium text-slate-600 hover:text-blue-600 transition-colors">Digital Analytics</a></li>
            </ul>
          </div>

          <!-- Column 3: Trust Badges -->
          <div class="md:col-span-5 flex flex-col items-start text-left">
            <h4 class="text-xs font-bold uppercase text-slate-400 tracking-wider mb-4">Security & Integrity</h4>
            <div class="bg-slate-50 border border-slate-200 rounded-xl p-4 w-full flex items-start space-x-3">
              <div class="h-9 w-9 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 border border-blue-100 flex-shrink-0">
                <Shield class="h-5 w-5" />
              </div>
              <div>
                <h5 class="text-xs font-semibold text-slate-800">Verified System Protection</h5>
                <p class="text-[11px] text-slate-500 mt-1 leading-relaxed font-normal">
                  All seat bookings, queue status updates, and catalog lookups are secure. QR-based seat check-in provides verified, compliant access.
                </p>
              </div>
            </div>
          </div>

        </div>

        <div class="flex flex-col sm:flex-row justify-between items-center text-slate-400 text-[11px] font-normal">
          <p>© {{ new Date().getFullYear() }} {{ appName }} System. All rights reserved.</p>
          <div class="flex space-x-5 mt-3 sm:mt-0">
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
import { useSettings } from '@/shared/composables/useSettings';
import heroMobileImg from '@/shared/assets/smartlib-hero-mobile.jpg';

const { appName, siteDescription, contactEmail, contactPhone } = useSettings();
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
  Frown,
  GraduationCap,
  Briefcase,
  ClipboardList,
  EyeOff,
  UserX
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

// Active Challenge Tab
const activeChallengeTab = ref<'students' | 'librarians'>('students');

// Annual pricing toggle
const isAnnual = ref(true);

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
    tabTitle: 'QR Seat Check-In',
    tabIcon: QrCode,
    title: 'QR Code Seat Check-In & Occupancy',
    description: 'After reserving a seat, go to your desk and scan the seat QR code. The system instantly checks you in, marks your seat as occupied, and confirms your booking.',
    bullets: [
      'Scan seat QR to confirm occupancy',
      'Automatic reservation validation on check-in',
      'Real-time seat status update for all users'
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

const scrollToFeature = (idx: number, event?: Event) => {
  if (event) {
    event.preventDefault();
  }
  activeFeature.value = idx;
  const element = document.getElementById('features');
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

// Interactive Sandbox Seats
const mockSeats = ref([
  { id: '1', label: 'A1', status: 'available' },
  { id: '2', label: 'A2', status: 'booked' },
  { id: '3', label: 'A3', status: 'available' },
  { id: '4', label: 'A4', status: 'available' },
  { id: '5', label: 'B1', status: 'selected' },
  { id: '6', label: 'B2', status: 'available' },
  { id: '7', label: 'B3', status: 'booked' },
  { id: '8', label: 'B4', status: 'available' }
]);

const toggleMockSeat = (id: string) => {
  mockSeats.value.forEach(seat => {
    if (seat.id === id && seat.status !== 'booked') {
      seat.status = seat.status === 'selected' ? 'available' : 'selected';
    } else if (seat.status === 'selected') {
      seat.status = 'available';
    }
  });
};

const selectedSeatLabel = computed(() => {
  const s = mockSeats.value.find(seat => seat.status === 'selected');
  return s ? s.label : null;
});

// Mock Books Search
const mockSearchQuery = ref('');
const mockBooks = [
  { title: 'Advanced Financial Accounting', author: 'ICAP Edition 2025' },
  { title: 'Corporate Law & Governance', author: 'Legal Press' },
  { title: 'Taxation Principles & Practice', author: 'Taxation Hub' },
  { title: 'Audit & Assurance Standards', author: 'Audit Council' }
];

const filteredMockBooks = computed(() => {
  if (!mockSearchQuery.value) return mockBooks;
  return mockBooks.filter(b => 
    b.title.toLowerCase().includes(mockSearchQuery.value.toLowerCase()) ||
    b.author.toLowerCase().includes(mockSearchQuery.value.toLowerCase())
  );
});

// Mock Events
const mockEvents = ref([
  { title: 'CAF Financial Prep Workshop', category: 'Study Circle', time: 'Today at 4:00 PM', registered: false },
  { title: 'Audit Case Study Seminar', category: 'Seminar', time: 'Tomorrow at 2:00 PM', registered: true }
]);

// FAQ Items
const faqList = ref([
  {
    question: 'How does the interactive seat booking work?',
    answer: 'Students can view live floor maps showing available, reserved, and occupied desks. Simply tap an available seat to lock in your reservation for your chosen shift.',
    open: true
  },
  {
    question: 'What is desk QR code check-in?',
    answer: 'When you arrive at your reserved desk, open the SmartLib app or terminal scanner and scan the QR code located on the desk. This verifies your presence and prevents ghost bookings.',
    open: false
  },
  {
    question: 'How do I search and reserve library books?',
    answer: 'The digital catalog allows you to search titles, authors, or subjects. If a book is available, you can place a digital hold and collect it from the librarian desk.',
    open: false
  },
  {
    question: 'Can librarians manage attendance and reports automatically?',
    answer: 'Yes! SmartLib logs student entrances, check-ins, and study hours automatically, giving librarians real-time attendance dashboards without manual paper registers.',
    open: false
  }
]);

const toggleFaq = (idx: number) => {
  faqList.value[idx].open = !faqList.value[idx].open;
};
</script>

<style scoped>
.slide-fade-enter-active, .slide-fade-leave-active {
  transition: all 0.3s ease;
}
.slide-fade-enter-from, .slide-fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

.fade-slide-spotlight-enter-active, .fade-slide-spotlight-leave-active {
  transition: all 0.3s ease;
}
.fade-slide-spotlight-enter-from {
  opacity: 0;
  transform: translateY(8px);
}
.fade-slide-spotlight-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}

@keyframes scan {
  0% { top: 0; }
  50% { top: 100%; }
  100% { top: 0; }
}
.animate-scan {
  animation: scan 2.5s ease-in-out infinite;
}

@keyframes bounce-slow {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-4px); }
}
.animate-bounce-slow {
  animation: bounce-slow 4s ease-in-out infinite;
}
</style>