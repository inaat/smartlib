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
              <span>Intelligent Library & Workspace Management</span>
            </div>
            
            <h1 class="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-none text-slate-900 mb-6">
              Smart Library<br />Management<br />
              <span class="text-blue-650 bg-gradient-to-r from-blue-650 to-blue-500 bg-clip-text text-transparent">For Modern Institutions</span>
            </h1>
            
            <p class="text-lg text-slate-600 mb-8 max-w-xl leading-relaxed">
              Manage students, books, seat bookings, and borrowing in one clean, intelligent platform. Perfect for schools, colleges, and educational academies.
            </p>
            
            <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <router-link 
                to="/register" 
                class="px-8 py-4 rounded-2xl text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 active:scale-98 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/35 transition-all text-center flex items-center justify-center gap-2"
              >
                <span>Start Free Today</span>
                <ChevronRight class="h-4.5 w-4.5" />
              </router-link>
              
              <a 
                href="#contact" 
                class="px-8 py-4 rounded-2xl text-sm font-bold text-slate-750 bg-slate-100 hover:bg-slate-200 active:scale-98 transition-all text-center"
              >
                Request Demo
              </a>
            </div>
          </div>

          <!-- Right Content (2D Library Seat Map Mockup) -->
          <div class="lg:col-span-6 flex justify-center items-center relative">
            <div class="absolute -inset-4 bg-blue-200/30 rounded-full blur-3xl opacity-60"></div>
            
            <!-- Perspective Container -->
            <div class="perspective-box relative w-full max-w-lg">
              
              <!-- 3D Card Main Mockup (Library 2D Interactive Seat Map) -->
              <div class="main-card-3d bg-white border border-slate-200/80 shadow-2xl rounded-3xl p-6 relative overflow-hidden">
                <!-- Card Header -->
                <div class="flex justify-between items-center border-b border-slate-100 pb-3 mb-4">
                  <div class="flex items-center space-x-2">
                    <div class="w-3 h-3 rounded-full bg-red-400"></div>
                    <div class="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div class="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  <span class="text-[10px] bg-blue-50 border border-blue-100 text-blue-600 px-3 py-1 rounded-full font-bold uppercase tracking-wider">Live Library Floor Map (2D)</span>
                </div>

                <!-- 2D Floor Plan Container -->
                <div class="bg-slate-50 border border-slate-100 rounded-2xl p-4 mb-4 relative">
                  <!-- Library Layout Walls/Shelves Mockup -->
                  <div class="flex justify-between items-center mb-3 text-[9px] font-bold text-slate-400 px-1 uppercase tracking-wider">
                    <span>Entrance</span>
                    <span class="text-blue-600 bg-blue-50 px-2 py-0.5 rounded border border-blue-100">Main Zone</span>
                    <span>Book Stacks</span>
                  </div>
                  
                  <div class="grid grid-cols-12 gap-2 relative">
                    <!-- Bookshelf Left -->
                    <div class="col-span-2 bg-slate-200/80 border border-slate-300/80 rounded-lg flex flex-col justify-around items-center py-2 text-[8px] font-black text-slate-500 uppercase tracking-tight select-none">
                      <span>S</span><span>T</span><span>A</span><span>C</span><span>K</span><span>S</span>
                    </div>

                    <!-- Interactive Seats Area -->
                    <div class="col-span-8 grid grid-cols-4 gap-2 p-1 bg-white border border-slate-200/60 rounded-xl shadow-inner">
                      <button 
                        v-for="seat in heroSeats" 
                        :key="seat.id"
                        @click="selectHeroSeat(seat.id)"
                        :class="[
                          'relative h-10 rounded-lg border flex flex-col items-center justify-center transition-all duration-200',
                          seat.status === 'occupied' 
                            ? 'bg-rose-50 border-rose-200 text-rose-700 hover:bg-rose-100'
                            : seat.status === 'reserved'
                              ? 'bg-amber-50 border-amber-200 text-amber-700 hover:bg-amber-100'
                              : seat.status === 'selected'
                                ? 'bg-blue-650 border-blue-700 text-white scale-105 shadow-md shadow-blue-500/25'
                                : 'bg-emerald-50/50 border-emerald-200 text-emerald-700 hover:bg-emerald-50 hover:border-emerald-300'
                        ]"
                      >
                        <span class="text-[9px] font-black tracking-tight">{{ seat.id }}</span>
                        <!-- Status indicator dot -->
                        <span 
                          :class="[
                            'absolute top-1 right-1 w-1.5 h-1.5 rounded-full',
                            seat.status === 'occupied' 
                              ? 'bg-rose-500 animate-pulse'
                              : seat.status === 'reserved'
                                ? 'bg-amber-500'
                                : seat.status === 'selected'
                                  ? 'bg-white'
                                  : 'bg-emerald-500'
                          ]"
                        ></span>
                      </button>
                    </div>

                    <!-- Bookshelf Right -->
                    <div class="col-span-2 bg-slate-200/80 border border-slate-300/80 rounded-lg flex flex-col justify-around items-center py-2 text-[8px] font-black text-slate-500 uppercase tracking-tight select-none">
                      <span>S</span><span>T</span><span>A</span><span>C</span><span>K</span><span>S</span>
                    </div>
                  </div>

                  <!-- Map Legend -->
                  <div class="flex justify-center items-center gap-3 mt-3 pt-3 border-t border-slate-100 flex-wrap text-[8px] font-bold text-slate-500">
                    <span class="flex items-center gap-1"><span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Available</span>
                    <span class="flex items-center gap-1"><span class="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse"></span> Occupied</span>
                    <span class="flex items-center gap-1"><span class="w-1.5 h-1.5 rounded-full bg-amber-500"></span> Reserved</span>
                    <span class="flex items-center gap-1"><span class="w-1.5 h-1.5 rounded-full bg-blue-650"></span> Selected</span>
                  </div>
                </div>

                <!-- Live Selected Seat Details Drawer/Card -->
                <div v-if="selectedHeroSeatDetails" class="bg-slate-50 border border-slate-200/80 rounded-2xl p-4 text-left transition-all duration-300">
                  <div class="flex justify-between items-start mb-2">
                    <div>
                      <span class="text-[9px] font-black uppercase text-blue-600 bg-blue-50 border border-blue-100 px-2 py-0.5 rounded-md">
                        {{ selectedHeroSeatDetails.zone }} • {{ selectedHeroSeatDetails.type }}
                      </span>
                      <h4 class="text-xs font-extrabold text-slate-900 mt-1.5 flex items-center gap-1.5">
                        <MapPin class="h-3.5 w-3.5 text-slate-400" />
                        Desk {{ selectedHeroSeatDetails.id }}
                      </h4>
                    </div>
                    <div class="text-right">
                      <span 
                        :class="[
                          'text-[9px] font-black px-2 py-0.5 rounded-md border inline-block uppercase tracking-wider',
                          selectedHeroSeatDetails.status === 'occupied'
                            ? 'bg-rose-50 border-rose-250 text-rose-700'
                            : selectedHeroSeatDetails.status === 'reserved'
                              ? 'bg-amber-50 border-amber-250 text-amber-700'
                              : selectedHeroSeatDetails.status === 'selected'
                                ? 'bg-blue-50 border-blue-250 text-blue-700'
                                : 'bg-emerald-50 border-emerald-250 text-emerald-700'
                        ]"
                      >
                        {{ 
                          selectedHeroSeatDetails.status === 'occupied' 
                            ? 'Occupied' 
                            : selectedHeroSeatDetails.status === 'reserved' 
                              ? 'Reserved' 
                              : selectedHeroSeatDetails.status === 'selected'
                                ? 'Selected'
                                : 'Available' 
                        }}
                      </span>
                    </div>
                  </div>

                  <!-- Details Row -->
                  <div class="flex flex-wrap items-center justify-between gap-2 text-xs border-t border-slate-200/60 pt-2.5 mt-2">
                    <div class="flex items-center gap-1 text-[10px] text-slate-500 font-semibold">
                      <Zap class="h-3.5 w-3.5" :class="selectedHeroSeatDetails.power ? 'text-amber-500 fill-amber-500/20' : 'text-slate-350'" />
                      <span>{{ selectedHeroSeatDetails.power ? 'Power Outlet' : 'No Outlet' }}</span>
                    </div>
                    
                    <!-- Conditional Student Check-In Status or Action description -->
                    <div class="text-slate-600 text-[10px] font-bold flex items-center gap-1">
                      <span v-if="selectedHeroSeatDetails.status === 'occupied'" class="flex items-center gap-1 text-rose-600">
                        <User class="h-3.5 w-3.5" />
                        <span>{{ selectedHeroSeatDetails.student }}</span>
                      </span>
                      <span v-else-if="selectedHeroSeatDetails.status === 'reserved'" class="flex items-center gap-1 text-amber-600">
                        <QrCode class="h-3.5 w-3.5 text-amber-500" />
                        <span>Scan QR at desk to occupy</span>
                      </span>
                      <span v-else-if="selectedHeroSeatDetails.status === 'selected'" class="flex items-center gap-1 text-blue-600">
                        <Check class="h-3.5 w-3.5" />
                        <span>Selected (Click to Reserve)</span>
                      </span>
                      <span v-else class="flex items-center gap-1 text-emerald-600">
                        <Check class="h-3.5 w-3.5" />
                        <span>Ready to Book</span>
                      </span>
                    </div>
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
    </section>    <!-- Challenges Section -->
    <section id="challenges" class="py-20 md:py-28 bg-slate-50/50 border-b border-slate-200 relative overflow-hidden">
      <!-- Decorative background blur blobs -->
      <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-blue-50/30 blur-3xl pointer-events-none"></div>

      <div class="max-w-7xl mx-auto px-6 text-center relative z-10">
        <!-- Section Header -->
        <div class="max-w-3xl mx-auto mb-16">
          <span class="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-black tracking-wider uppercase bg-red-50 border border-red-100 text-red-650 shadow-sm mb-4 select-none">
            <AlertCircle class="h-3.5 w-3.5" />
            <span>The Daily Struggle</span>
          </span>
          <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            The Challenges You Face Everyday
          </h2>
          <p class="text-base text-slate-500 leading-relaxed font-semibold">
            Both students and library administrators lose valuable time dealing with outdated, manual processes that hold everyone back.
          </p>
        </div>

        <!-- Persona Switcher Tabs -->
        <div class="flex justify-center mb-14">
          <div class="bg-white border border-slate-200 p-1.5 rounded-2xl flex items-center gap-1.5 shadow-sm">
            <button 
              @click="activeChallengeTab = 'students'"
              :class="[
                'px-6 py-3 rounded-xl text-xs font-extrabold flex items-center gap-2.5 transition-all select-none border',
                activeChallengeTab === 'students' 
                  ? 'bg-red-50 border-red-200 text-red-700 shadow-sm' 
                  : 'bg-transparent border-transparent text-slate-500 hover:text-slate-800'
              ]"
            >
              <GraduationCap class="h-4.5 w-4.5" />
              <span>For Students</span>
            </button>
            
            <button 
              @click="activeChallengeTab = 'librarians'"
              :class="[
                'px-6 py-3 rounded-xl text-xs font-extrabold flex items-center gap-2.5 transition-all select-none border',
                activeChallengeTab === 'librarians' 
                  ? 'bg-amber-50 border-amber-250 text-amber-800 shadow-sm' 
                  : 'bg-transparent border-transparent text-slate-500 hover:text-slate-800'
              ]"
            >
              <Briefcase class="h-4.5 w-4.5" />
              <span>For Librarians</span>
            </button>
          </div>
        </div>

        <!-- Tab Content with Transition -->
        <transition name="fade-slide-spotlight" mode="out-in">
          
          <!-- Student Pain Points Deck -->
          <div v-if="activeChallengeTab === 'students'" key="students" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            
            <!-- Card 1 -->
            <div class="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm hover:shadow-md transition-all text-left flex flex-col justify-between group">
              <div>
                <div class="flex justify-between items-center mb-6">
                  <div class="h-10 w-10 rounded-xl bg-red-50 text-red-500 flex items-center justify-center">
                    <Ban class="h-5.5 w-5.5" />
                  </div>
                  <span class="text-xs font-black text-slate-300">01 / Outdated</span>
                </div>
                <h4 class="text-base font-extrabold text-slate-900 mb-2">No Available Seats</h4>
                <p class="text-xs text-slate-500 leading-relaxed font-semibold mb-6">
                  Arriving at the library only to find every desk occupied. Without real-time tracking, finding a study spot is a constant gamble.
                </p>
              </div>
              
              <!-- Solution Box -->
              <div class="bg-emerald-50/50 border border-emerald-100/80 rounded-2xl p-4 mt-auto">
                <span class="text-[9px] font-black uppercase text-emerald-650 bg-emerald-100/50 px-2 py-0.5 rounded-md inline-block mb-1.5 select-none">
                  SmartLib Fix
                </span>
                <p class="text-xs font-bold text-slate-800">
                  Live seat maps & instant desk booking.
                </p>
              </div>
            </div>

            <!-- Card 2 -->
            <div class="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm hover:shadow-md transition-all text-left flex flex-col justify-between group">
              <div>
                <div class="flex justify-between items-center mb-6">
                  <div class="h-10 w-10 rounded-xl bg-red-50 text-red-500 flex items-center justify-center">
                    <Hourglass class="h-5.5 w-5.5" />
                  </div>
                  <span class="text-xs font-black text-slate-300">02 / Outdated</span>
                </div>
                <h4 class="text-base font-extrabold text-slate-900 mb-2">Tedious Manual Check-In</h4>
                <p class="text-xs text-slate-500 leading-relaxed font-semibold mb-6">
                  Standing in long lines or writing details in paper logs just to occupy a seat you already reserved online.
                </p>
              </div>
              
              <!-- Solution Box -->
              <div class="bg-emerald-50/50 border border-emerald-100/80 rounded-2xl p-4 mt-auto">
                <span class="text-[9px] font-black uppercase text-emerald-655 bg-emerald-100/50 px-2 py-0.5 rounded-md inline-block mb-1.5 select-none">
                  SmartLib Fix
                </span>
                <p class="text-xs font-bold text-slate-800">
                  Instant QR seat check-in at your desk.
                </p>
              </div>
            </div>

            <!-- Card 3 -->
            <div class="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm hover:shadow-md transition-all text-left flex flex-col justify-between group">
              <div>
                <div class="flex justify-between items-center mb-6">
                  <div class="h-10 w-10 rounded-xl bg-red-50 text-red-500 flex items-center justify-center">
                    <Frown class="h-5.5 w-5.5" />
                  </div>
                  <span class="text-xs font-black text-slate-300">03 / Outdated</span>
                </div>
                <h4 class="text-base font-extrabold text-slate-900 mb-2">Untracked Study Progress</h4>
                <p class="text-xs text-slate-500 leading-relaxed font-semibold mb-6">
                  No clear way to log study sessions, analyze peak productivity hours, or stay motivated during exam prep.
                </p>
              </div>
              
              <!-- Solution Box -->
              <div class="bg-emerald-50/50 border border-emerald-100/80 rounded-2xl p-4 mt-auto">
                <span class="text-[9px] font-black uppercase text-emerald-650 bg-emerald-100/50 px-2 py-0.5 rounded-md inline-block mb-1.5 select-none">
                  SmartLib Fix
                </span>
                <p class="text-xs font-bold text-slate-800">
                  Visual productivity charts & rewards.
                </p>
              </div>
            </div>

            <!-- Card 4 -->
            <div class="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm hover:shadow-md transition-all text-left flex flex-col justify-between group">
              <div>
                <div class="flex justify-between items-center mb-6">
                  <div class="h-10 w-10 rounded-xl bg-red-50 text-red-500 flex items-center justify-center">
                    <BookOpen class="h-5.5 w-5.5" />
                  </div>
                  <span class="text-xs font-black text-slate-300">04 / Outdated</span>
                </div>
                <h4 class="text-base font-extrabold text-slate-900 mb-2">Scattered Resources</h4>
                <p class="text-xs text-slate-500 leading-relaxed font-semibold mb-6">
                  Hunting down textbooks or course reserves across physical shelves without knowing if they are checked out.
                </p>
              </div>
              
              <!-- Solution Box -->
              <div class="bg-emerald-50/50 border border-emerald-100/80 rounded-2xl p-4 mt-auto">
                <span class="text-[9px] font-black uppercase text-emerald-650 bg-emerald-100/50 px-2 py-0.5 rounded-md inline-block mb-1.5 select-none">
                  SmartLib Fix
                </span>
                <p class="text-xs font-bold text-slate-800">
                  Integrated digital catalog search.
                </p>
              </div>
            </div>

          </div>

          <!-- Librarian Pain Points Deck -->
          <div v-else-if="activeChallengeTab === 'librarians'" key="librarians" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            
            <!-- Card 1 -->
            <div class="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm hover:shadow-md transition-all text-left flex flex-col justify-between group">
              <div>
                <div class="flex justify-between items-center mb-6">
                  <div class="h-10 w-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
                    <ClipboardList class="h-5.5 w-5.5" />
                  </div>
                  <span class="text-xs font-black text-slate-300">01 / Outdated</span>
                </div>
                <h4 class="text-base font-extrabold text-slate-900 mb-2">Paper Attendance Logs</h4>
                <p class="text-xs text-slate-500 leading-relaxed font-semibold mb-6">
                  Manually recording every student entry in paper registers. Messy handwritten records that are unreliable and hard to audit.
                </p>
              </div>
              
              <!-- Solution Box -->
              <div class="bg-emerald-50/50 border border-emerald-100/80 rounded-2xl p-4 mt-auto">
                <span class="text-[9px] font-black uppercase text-emerald-650 bg-emerald-100/50 px-2 py-0.5 rounded-md inline-block mb-1.5 select-none">
                  SmartLib Fix
                </span>
                <p class="text-xs font-bold text-slate-800">
                  Automated digital attendance tracking.
                </p>
              </div>
            </div>

            <!-- Card 2 -->
            <div class="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm hover:shadow-md transition-all text-left flex flex-col justify-between group">
              <div>
                <div class="flex justify-between items-center mb-6">
                  <div class="h-10 w-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
                    <EyeOff class="h-5.5 w-5.5" />
                  </div>
                  <span class="text-xs font-black text-slate-300">02 / Outdated</span>
                </div>
                <h4 class="text-base font-extrabold text-slate-900 mb-2">No Real-Time Seat Visibility</h4>
                <p class="text-xs text-slate-500 leading-relaxed font-semibold mb-6">
                  Unable to see which seats are occupied or available without physically walking the floor. No data to manage capacity.
                </p>
              </div>
              
              <!-- Solution Box -->
              <div class="bg-emerald-50/50 border border-emerald-100/80 rounded-2xl p-4 mt-auto">
                <span class="text-[9px] font-black uppercase text-emerald-650 bg-emerald-100/50 px-2 py-0.5 rounded-md inline-block mb-1.5 select-none">
                  SmartLib Fix
                </span>
                <p class="text-xs font-bold text-slate-850">
                  Live occupancy dashboard & analytics.
                </p>
              </div>
            </div>

            <!-- Card 3 -->
            <div class="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm hover:shadow-md transition-all text-left flex flex-col justify-between group">
              <div>
                <div class="flex justify-between items-center mb-6">
                  <div class="h-10 w-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
                    <UserX class="h-5.5 w-5.5" />
                  </div>
                  <span class="text-xs font-black text-slate-300">03 / Outdated</span>
                </div>
                <h4 class="text-base font-extrabold text-slate-900 mb-2">Ghost Reservations</h4>
                <p class="text-xs text-slate-500 leading-relaxed font-semibold mb-6">
                  Students reserve seats but never show up, leaving desks blocked while others search. No way to auto-release unused bookings.
                </p>
              </div>
              
              <!-- Solution Box -->
              <div class="bg-emerald-50/50 border border-emerald-100/80 rounded-2xl p-4 mt-auto">
                <span class="text-[9px] font-black uppercase text-emerald-650 bg-emerald-100/50 px-2 py-0.5 rounded-md inline-block mb-1.5 select-none">
                  SmartLib Fix
                </span>
                <p class="text-xs font-bold text-slate-800">
                  Auto-release unchecked-in reservations.
                </p>
              </div>
            </div>

            <!-- Card 4 -->
            <div class="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm hover:shadow-md transition-all text-left flex flex-col justify-between group">
              <div>
                <div class="flex justify-between items-center mb-6">
                  <div class="h-10 w-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
                    <Search class="h-5.5 w-5.5" />
                  </div>
                  <span class="text-xs font-black text-slate-300">04 / Outdated</span>
                </div>
                <h4 class="text-base font-extrabold text-slate-900 mb-2">Manual Catalog Audits</h4>
                <p class="text-xs text-slate-500 leading-relaxed font-semibold mb-6">
                  Losing hours cross-checking physical books against borrowing logs to identify missing items.
                </p>
              </div>
              
              <!-- Solution Box -->
              <div class="bg-emerald-50/50 border border-emerald-100/80 rounded-2xl p-4 mt-auto">
                <span class="text-[9px] font-black uppercase text-emerald-650 bg-emerald-100/50 px-2 py-0.5 rounded-md inline-block mb-1.5 select-none">
                  SmartLib Fix
                </span>
                <p class="text-xs font-bold text-slate-800">
                  Live borrow tracking & overdue alerts.
                </p>
              </div>
            </div>

          </div>

        </transition>

      </div>
    </section>    <!-- Features Showcase -->
    <section id="features" class="py-20 md:py-28 bg-slate-50/30 border-b border-slate-200 relative overflow-hidden">
      <!-- Background abstract design elements -->
      <div class="absolute left-[-10%] top-[-10%] w-[500px] h-[500px] rounded-full bg-blue-50/40 blur-3xl pointer-events-none"></div>
      <div class="absolute right-[-10%] bottom-[-10%] w-[500px] h-[500px] rounded-full bg-indigo-50/30 blur-3xl pointer-events-none"></div>

      <div class="max-w-7xl mx-auto px-6 relative z-10">
        
        <!-- Header -->
        <div class="text-center max-w-3xl mx-auto mb-20">
          <div class="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-blue-50 border border-blue-100 text-blue-600 mb-4 select-none">
            <span class="w-1.5 h-1.5 rounded-full bg-blue-600 animate-ping"></span>
            <span>Feature Showcase</span>
          </div>
          <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Everything You Need for Modern Study
          </h2>
          <p class="text-base text-slate-500 leading-relaxed font-semibold">
            Interactive floor maps, digitised catalogues, real-time analytics and automatic notifications in a single, lightning-fast platform.
          </p>
        </div>

        <!-- 2-Column Split Workspace (Vertical Tabs Left, Presentation Card Right) -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          <!-- Left Column: Interactive Vertical Tabs (4 cols on large screens) -->
          <div class="lg:col-span-4 flex flex-col gap-3 justify-center">
            
            <button 
              v-for="(feature, idx) in featuresList" 
              :key="feature.tabTitle"
              @click="activeFeature = idx"
              :class="[
                'w-full text-left p-4.5 rounded-2xl border transition-all duration-300 flex items-start gap-4 select-none relative overflow-hidden group',
                activeFeature === idx
                  ? 'bg-white border-blue-200 shadow-md shadow-blue-500/5'
                  : 'bg-white/60 border-slate-200/60 hover:bg-white hover:border-slate-300'
              ]"
            >
              <!-- Active Left Border Indicator -->
              <div 
                :class="[
                  'absolute left-0 top-0 bottom-0 w-1 transition-all duration-300',
                  activeFeature === idx ? 'bg-blue-600' : 'bg-transparent group-hover:bg-slate-350'
                ]"
              ></div>

              <!-- Tab Icon Wrapper -->
              <div 
                :class="[
                  'h-10 w-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors border',
                  activeFeature === idx
                    ? 'bg-blue-50 border-blue-100 text-blue-600'
                    : 'bg-slate-50 border-slate-100 text-slate-400 group-hover:text-slate-655'
                ]"
              >
                <component :is="feature.tabIcon" class="h-5 w-5" />
              </div>

              <!-- Tab Text -->
              <div class="flex-1 min-w-0">
                <span 
                  :class="[
                    'text-xs font-black transition-colors block mb-0.5',
                    activeFeature === idx ? 'text-blue-600' : 'text-slate-700'
                  ]"
                >
                  {{ feature.tabTitle }}
                </span>
                <span class="text-[10px] text-slate-450 font-semibold block truncate">
                  {{ feature.description }}
                </span>
              </div>
            </button>

          </div>

          <!-- Right Column: Presentation Spotlight Card (8 cols on large screens) -->
          <div class="lg:col-span-8 flex">
            <div class="w-full bg-white border border-slate-200/95 shadow-xl rounded-3xl overflow-hidden flex flex-col justify-between">
              
              <!-- Spotlight Transition Container -->
              <transition name="fade-slide-spotlight" mode="out-in">
                <div :key="activeFeature" class="grid grid-cols-1 md:grid-cols-12 items-stretch h-full">
                  
                  <!-- Info Left (7 cols) -->
                  <div class="md:col-span-7 p-8 sm:p-10 flex flex-col justify-center items-start text-left">
                    <div class="h-11 w-11 rounded-xl bg-blue-50/80 border border-blue-100 flex items-center justify-center text-blue-600 mb-6">
                      <component :is="featuresList[activeFeature].tabIcon" class="h-5.5 w-5.5" />
                    </div>
                    
                    <h3 class="text-xl sm:text-2xl font-black text-slate-900 mb-3.5 leading-snug">
                      {{ featuresList[activeFeature].title }}
                    </h3>
                    
                    <p class="text-xs text-slate-500 leading-relaxed font-semibold mb-6">
                      {{ featuresList[activeFeature].description }}
                    </p>
                    
                    <ul class="space-y-3 w-full">
                      <li 
                        v-for="bullet in featuresList[activeFeature].bullets" 
                        :key="bullet" 
                        class="flex items-center space-x-3 text-slate-700 text-xs font-bold"
                      >
                        <div class="h-5 w-5 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 flex-shrink-0">
                          <Check class="h-3 w-3" />
                        </div>
                        <span>{{ bullet }}</span>
                      </li>
                    </ul>
                  </div>

                  <!-- Visual Sandbox Widget Right (5 cols) -->
                  <div class="md:col-span-5 bg-gradient-to-br from-slate-50/70 to-slate-100/50 border-t md:border-t-0 md:border-l border-slate-200/80 flex items-center justify-center p-8 relative overflow-hidden min-h-[300px]">
                    
                    <!-- Dynamic Seat booking Widget -->
                    <div v-if="activeFeature === 0" class="w-full max-w-[280px]">
                      <p class="text-[9px] font-bold text-slate-400 uppercase tracking-widest text-center mb-4">Click to Reserve a desk</p>
                      <div class="grid grid-cols-4 gap-2.5">
                        <button 
                          v-for="seat in mockSeats" 
                          :key="seat.id"
                          @click="toggleMockSeat(seat.id)"
                          :class="[
                            'aspect-square rounded-xl border flex flex-col items-center justify-center text-xs font-bold transition-all relative',
                            seat.status === 'booked' 
                              ? 'bg-slate-200 border-slate-300 text-slate-400 cursor-not-allowed'
                              : seat.status === 'selected'
                                ? 'bg-blue-600 border-blue-600 text-white scale-105 shadow shadow-blue-500/20'
                                : 'bg-white border-slate-250 text-slate-700 hover:border-blue-400 hover:bg-blue-50/10'
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
                      <div class="bg-white border border-slate-200 rounded-xl p-2.5 text-center mt-6 shadow-sm">
                        <p class="text-[11px] font-black text-slate-805">
                          {{ selectedSeatLabel ? `Selected: ${selectedSeatLabel}` : 'Choose an empty seat' }}
                        </p>
                      </div>
                    </div>

                    <!-- Digital Library Catalog Widget -->
                    <div v-if="activeFeature === 1" class="w-full max-w-[280px] bg-white border border-slate-200 rounded-2xl p-4 shadow-sm text-left">
                      <div class="relative mb-3.5">
                        <input 
                          type="text" 
                          v-model="mockSearchQuery" 
                          placeholder="Search books..." 
                          class="w-full pl-9 pr-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-blue-500"
                        />
                        <Search class="h-3.5 w-3.5 text-slate-400 absolute left-3 top-2.5" />
                      </div>
                      <div class="space-y-2 max-h-[160px] overflow-y-auto pr-1">
                        <div 
                          v-for="book in filteredMockBooks" 
                          :key="book.title"
                          class="flex items-center justify-between p-2 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors border border-slate-100"
                        >
                          <div>
                            <h4 class="text-xs font-bold text-slate-850 leading-tight">{{ book.title }}</h4>
                            <p class="text-[10px] text-slate-505 mt-0.5">{{ book.author }}</p>
                          </div>
                          <span class="text-[9px] font-bold bg-blue-50 text-blue-600 border border-blue-200 px-2 py-0.5 rounded-md">Available</span>
                        </div>
                      </div>
                    </div>

                    <!-- Events List Widget -->
                    <div v-if="activeFeature === 2" class="w-full max-w-[280px] text-left space-y-3">
                      <div 
                        v-for="ev in mockEvents" 
                        :key="ev.title"
                        class="bg-white border border-slate-200 rounded-2xl p-3.5 shadow-sm flex items-center justify-between"
                      >
                        <div>
                          <span class="text-[9px] font-black text-blue-600 uppercase tracking-wider bg-blue-50 px-2 py-0.5 rounded border border-blue-100">{{ ev.category }}</span>
                          <h4 class="text-xs font-bold text-slate-800 mt-2">{{ ev.title }}</h4>
                          <p class="text-[10px] text-slate-505 mt-1 flex items-center gap-1 font-semibold">
                            <Clock class="h-3 w-3 text-slate-400" />
                            <span>{{ ev.time }}</span>
                          </p>
                        </div>
                        <button 
                          @click="ev.registered = !ev.registered"
                          :class="[
                            'px-3 py-1.5 rounded-lg text-[10px] font-bold transition-all',
                            ev.registered
                              ? 'bg-green-50 border border-green-200 text-green-600'
                              : 'bg-blue-600 text-white hover:bg-blue-700'
                          ]"
                        >
                          {{ ev.registered ? 'Registered' : 'Join' }}
                        </button>
                      </div>
                    </div>

                    <!-- QR Seat Check-In Scanner Widget -->
                    <div v-if="activeFeature === 3" class="w-full max-w-[240px] bg-white border border-slate-200 rounded-2xl p-5 shadow-sm text-center relative flex flex-col items-center">
                      <div class="h-36 w-36 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-center p-3 relative overflow-hidden shadow-inner">
                        <QrCode class="h-28 w-28 text-slate-800" />
                        <!-- Scanning laser animation -->
                        <div class="absolute left-0 right-0 h-0.5 bg-blue-500 animate-scan shadow-lg shadow-blue-500/80"></div>
                      </div>
                      <p class="text-xs font-bold text-slate-805 mt-4">Seat QR Scanner</p>
                      <p class="text-[10px] text-slate-450 mt-1.5 leading-relaxed font-semibold">Scan desk QR code to check in and occupy seat.</p>
                    </div>

                    <!-- Study Hours Analytics Chart Widget -->
                    <div v-if="activeFeature === 4" class="w-full max-w-[280px] bg-white border border-slate-200 rounded-2xl p-4 shadow-sm text-left">
                      <div class="flex justify-between items-center mb-4">
                        <h4 class="text-xs font-bold text-slate-850">Weekly Study Time</h4>
                        <span class="text-[9px] font-black text-green-600 bg-green-50 px-2 py-0.5 rounded-full border border-green-200">+12% vs last week</span>
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
                        <p class="text-[10px] text-slate-505 font-semibold">Daily Average</p>
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
                          <h4 class="text-xs font-bold text-slate-850">Loyalty Level 3</h4>
                          <p class="text-[10px] text-slate-400 mt-0.5">Academic Champion</p>
                        </div>
                      </div>
                      <div>
                        <div class="flex justify-between items-center text-[10px] font-bold text-slate-655 mb-1.5">
                          <span>Points Progress</span>
                          <span>3,450 / 5,000 pts</span>
                        </div>
                        <div class="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                          <div class="h-full bg-blue-650 rounded-full" style="width: 69%"></div>
                        </div>
                      </div>
                      <div class="mt-4 flex items-center space-x-2">
                        <span class="text-[9px] font-black bg-blue-50 text-blue-600 border border-blue-150 px-2 py-0.5 rounded-full uppercase">Reward Ready</span>
                        <span class="text-[9px] text-slate-555 font-bold">• 1 Free Espresso Pass</span>
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

    <section id="how-it-works" class="py-20 md:py-28 border-t border-slate-200 bg-white">
      <div class="max-w-7xl mx-auto px-6">
        <div class="text-center max-w-2xl mx-auto mb-20">
          <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-black tracking-wider uppercase bg-blue-50 border border-blue-100 text-blue-600 mb-4 select-none">
            Simple Process
          </span>
          <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            How It Works in 4 Steps
          </h2>
          <p class="text-base text-slate-500 leading-relaxed font-semibold">
            Booking study desks and checking out digital learning resources takes just a few seconds.
          </p>
        </div>

        <!-- 4 Steps Connected Flow -->
        <div class="grid grid-cols-1 md:grid-cols-4 gap-10 lg:gap-12 relative">
          
          <!-- Step 1 -->
          <div class="relative flex flex-col items-center text-center group">
            <!-- Connecting Arrow Line (Desktop only) -->
            <div class="hidden md:block absolute top-10 left-[65%] right-[-35%] h-0.5 bg-gradient-to-r from-blue-500/80 to-indigo-500/20 -z-10">
              <!-- Arrow tip -->
              <div class="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 border-t-2 border-r-2 border-indigo-450 transform rotate-45"></div>
            </div>
            
            <!-- Icon Squircle Container -->
            <div class="h-20 w-20 rounded-3xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white shadow-xl shadow-blue-500/20 mb-6 transform group-hover:scale-105 group-hover:rotate-3 transition-all duration-300">
              <Search class="h-9 w-9" />
            </div>
            
            <!-- Step Badge -->
            <span class="text-[10px] font-black uppercase tracking-widest text-blue-600 bg-blue-50 border border-blue-100 px-3 py-1 rounded-full mb-3">
              Step 01
            </span>
            
            <h3 class="text-lg font-bold text-slate-900 mb-2">Find a Library</h3>
            <p class="text-xs text-slate-500 leading-relaxed max-w-[240px] font-semibold">
              Explore participating ICAP library locations nationwide and verify current real-time seat occupancy statistics.
            </p>
          </div>

          <!-- Step 2 -->
          <div class="relative flex flex-col items-center text-center group">
            <!-- Connecting Arrow Line (Desktop only) -->
            <div class="hidden md:block absolute top-10 left-[65%] right-[-35%] h-0.5 bg-gradient-to-r from-indigo-500/80 to-purple-500/20 -z-10">
              <!-- Arrow tip -->
              <div class="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 border-t-2 border-r-2 border-purple-450 transform rotate-45"></div>
            </div>
            
            <!-- Icon Squircle Container -->
            <div class="h-20 w-20 rounded-3xl bg-gradient-to-br from-indigo-500 to-indigo-600 flex items-center justify-center text-white shadow-xl shadow-indigo-500/20 mb-6 transform group-hover:scale-105 group-hover:rotate-3 transition-all duration-300">
              <MapPin class="h-9 w-9" />
            </div>
            
            <!-- Step Badge -->
            <span class="text-[10px] font-black uppercase tracking-widest text-indigo-600 bg-indigo-50 border border-indigo-100 px-3 py-1 rounded-full mb-3">
              Step 02
            </span>
            
            <h3 class="text-lg font-bold text-slate-900 mb-2">Select & Reserve</h3>
            <p class="text-xs text-slate-500 leading-relaxed max-w-[240px] font-semibold">
              Check out live interactive floor seat maps, select your preferred study desk location, and reserve instantly.
            </p>
          </div>

          <!-- Step 3 -->
          <div class="relative flex flex-col items-center text-center group">
            <!-- Connecting Arrow Line (Desktop only) -->
            <div class="hidden md:block absolute top-10 left-[65%] right-[-35%] h-0.5 bg-gradient-to-r from-purple-500/80 to-emerald-500/20 -z-10">
              <!-- Arrow tip -->
              <div class="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 border-t-2 border-r-2 border-emerald-450 transform rotate-45"></div>
            </div>
            
            <!-- Icon Squircle Container -->
            <div class="h-20 w-20 rounded-3xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center text-white shadow-xl shadow-purple-500/20 mb-6 transform group-hover:scale-105 group-hover:rotate-3 transition-all duration-300">
              <QrCode class="h-9 w-9" />
            </div>
            
            <!-- Step Badge -->
            <span class="text-[10px] font-black uppercase tracking-widest text-purple-600 bg-purple-50 border border-purple-100 px-3 py-1 rounded-full mb-3">
              Step 03
            </span>
            
            <h3 class="text-lg font-bold text-slate-900 mb-2">QR Seat Check-In</h3>
            <p class="text-xs text-slate-500 leading-relaxed max-w-[240px] font-semibold">
              Go to your reserved seat and scan the desk QR code to check in. The system instantly marks your seat as occupied and confirms your booking.
            </p>
          </div>

          <!-- Step 4 -->
          <div class="relative flex flex-col items-center text-center group">
            <!-- Icon Squircle Container -->
            <div class="h-20 w-20 rounded-3xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center text-white shadow-xl shadow-emerald-500/20 mb-6 transform group-hover:scale-105 group-hover:rotate-3 transition-all duration-300">
              <Clock class="h-9 w-9" />
            </div>
            
            <!-- Step Badge -->
            <span class="text-[10px] font-black uppercase tracking-widest text-emerald-600 bg-emerald-50 border border-emerald-100 px-3 py-1 rounded-full mb-3">
              Step 04
            </span>
            
            <h3 class="text-lg font-bold text-slate-900 mb-2">Optimize Study Session</h3>
            <p class="text-xs text-slate-500 leading-relaxed max-w-[240px] font-semibold">
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
                  <span>Standard QR seat check-in</span>
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
              <a href="" target="_blank" class="h-9 w-9 rounded-xl border border-slate-200 hover:border-blue-500 flex items-center justify-center text-slate-400 hover:text-blue-600 transition-all">
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
              <li><a href="#features" @click="scrollToFeature(0, $event)" class="text-xs font-semibold text-slate-500 hover:text-blue-600 transition-colors">Seat Booking</a></li>
              <li><a href="#features" @click="scrollToFeature(1, $event)" class="text-xs font-semibold text-slate-500 hover:text-blue-600 transition-colors">Catalog Manager</a></li>
              <li><a href="#features" @click="scrollToFeature(2, $event)" class="text-xs font-semibold text-slate-500 hover:text-blue-600 transition-colors">QR Seat Check-In</a></li>
              <li><a href="#features" @click="scrollToFeature(3, $event)" class="text-xs font-semibold text-slate-500 hover:text-blue-600 transition-colors">Digital Analytics</a></li>
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
                  All seat bookings, queue status updates, and catalog lookups are secure. QR-based seat check-in provides verified, fully compliant library access.
                </p>
              </div>
            </div>
          </div>

        </div>

        <div class="flex flex-col sm:flex-row justify-between items-center text-slate-400 text-[11px] font-semibold">
          <p>© {{ new Date().getFullYear() }} SmartLib System. All rights reserved.</p>
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
  Frown,
  GraduationCap,
  Briefcase,
  ClipboardList,
  EyeOff,
  UserX,
  Zap,
  User
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

// Hero 2D Seat Map Interactive state
const heroSeats = ref([
  { id: 'A-01', label: 'Desk 01', status: 'available', zone: 'Zone A', type: 'Single Desk', power: true },
  { id: 'A-02', label: 'Desk 02', status: 'occupied', student: 'Sarah K. (Checked In)', zone: 'Zone A', type: 'Single Desk', power: true },
  { id: 'A-03', label: 'Desk 03', status: 'reserved', zone: 'Zone A', type: 'Window Seat', power: false },
  { id: 'A-04', label: 'Desk 04', status: 'available', zone: 'Zone A', type: 'Single Desk', power: true },
  { id: 'B-01', label: 'Desk 05', status: 'occupied', student: 'Alex M. (Checked In)', zone: 'Zone B', type: 'Study Pod', power: true },
  { id: 'B-02', label: 'Desk 06', status: 'available', zone: 'Zone B', type: 'Study Pod', power: true },
  { id: 'B-03', label: 'Desk 07', status: 'reserved', zone: 'Zone B', type: 'Window Seat', power: true },
  { id: 'B-04', label: 'Desk 08', status: 'occupied', student: 'John D. (Checked In)', zone: 'Zone B', type: 'Single Desk', power: false },
  { id: 'C-01', label: 'Desk 09', status: 'available', zone: 'Zone C', type: 'Silent Area', power: true },
  { id: 'C-02', label: 'Desk 10', status: 'occupied', student: 'Priya R. (Checked In)', zone: 'Zone C', type: 'Silent Area', power: true },
  { id: 'C-03', label: 'Desk 11', status: 'available', zone: 'Zone C', type: 'Silent Area', power: true },
  { id: 'C-04', label: 'Desk 12', status: 'selected', zone: 'Zone C', type: 'Silent Area', power: true },
]);

const selectedHeroSeatId = ref('C-04');

const selectedHeroSeatDetails = computed(() => {
  return heroSeats.value.find(s => s.id === selectedHeroSeatId.value);
});

const selectHeroSeat = (id: string) => {
  heroSeats.value = heroSeats.value.map(s => {
    if (s.status === 'selected') {
      return { ...s, status: 'available' };
    }
    if (s.id === id) {
      if (s.status === 'occupied') {
        selectedHeroSeatId.value = id;
        return s;
      }
      if (s.status === 'reserved') {
        selectedHeroSeatId.value = id;
        return s;
      }
      selectedHeroSeatId.value = id;
      return { ...s, status: 'selected' };
    }
    return s;
  });
};

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

// Interactive Challenge Deck Tab State
const activeChallengeTab = ref('students');

// How It Works Stepper state
const activeStep = ref(0);
const stepsList = [
  {
    number: '01',
    title: 'Find a Library',
    tagline: 'Locate Study Spaces',
    description: 'Explore participating ICAP library locations nationwide and verify current real-time seat occupancy statistics.'
  },
  {
    number: '02',
    title: 'Select & Reserve',
    tagline: 'Choose Your Spot',
    description: 'Check out live interactive floor seat maps, select your preferred study desk location, and reserve instantly.'
  },
  {
    number: '03',
    title: 'QR Seat Check-In',
    tagline: 'Claim Your Desk',
    description: 'Go to your reserved seat and scan the desk QR code to check in. The system instantly marks your seat as occupied.'
  },
  {
    number: '04',
    title: 'Optimize Study Session',
    tagline: 'Focus & Track',
    description: 'Log into the desk terminal, track your remaining session duration, extend bookings as needed, and enjoy study.'
  }
];

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
    answer: 'Go to your reserved seat in the library. Each seat has a unique QR code — scan it using the SmartLib app on your smartphone. The system will check you in, mark the seat as occupied, and display your check-in confirmation.',
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