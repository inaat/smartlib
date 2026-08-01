<template>
  <div class="p-6 space-y-6 font-outfit">

    <!-- Loading State -->
    <div v-if="loading" class="flex flex-col items-center justify-center py-24">
      <RefreshCw class="w-10 h-10 text-emerald-600 animate-spin mb-4" />
      <p class="text-slate-400 font-semibold uppercase tracking-wider text-xs animate-pulse">Loading library info...</p>
    </div>

    <template v-else>

      <!-- Hero Banner Card -->
      <div class="relative overflow-hidden rounded-xl bg-gradient-to-br from-emerald-700 via-emerald-800 to-teal-900 p-8 text-white shadow-lg">
        <!-- Decorative shapes -->
        <div class="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3"></div>
        <div class="absolute bottom-0 left-16 w-40 h-40 bg-white/5 rounded-full translate-y-1/2"></div>
        <div class="absolute top-8 right-32 w-20 h-20 bg-white/5 rounded-full"></div>

        <div class="relative z-10 flex items-start justify-between">
          <div class="flex items-start space-x-5">
            <!-- Library Photo -->
            <div class="w-20 h-20 rounded-xl overflow-hidden bg-white/10 border border-white/20 flex-shrink-0 shadow-lg">
              <img
                v-if="photoPreview || libraryData.photo_url"
                :src="photoPreview || libraryData.photo_url || undefined"
                class="w-full h-full object-cover"
                alt="Library"
              />
              <div v-else class="w-full h-full flex items-center justify-center">
                <Building2 class="w-8 h-8 text-white/50" />
              </div>
            </div>
            <div>
              <h2 class="text-2xl font-bold tracking-tight leading-tight">{{ libraryData.name || 'Your Library' }}</h2>
              <div class="flex items-center space-x-2 text-white/70 mt-1.5 text-xs font-medium">
                <MapPin class="w-3.5 h-3.5" />
                <span>{{ libraryData.address || 'No address set' }}</span>
              </div>
            </div>
          </div>
          <button
            @click="saveChanges"
            :disabled="saving"
            class="px-5 py-2.5 bg-white/15 hover:bg-white/25 border border-white/20 text-white rounded-xl transition-all flex items-center space-x-2 disabled:opacity-50 text-xs font-semibold cursor-pointer backdrop-blur-sm shadow-sm"
          >
            <Save v-if="!saving" class="w-4 h-4" />
            <RefreshCw v-else class="w-4 h-4 animate-spin" />
            <span>{{ saving ? 'Saving...' : 'Save Changes' }}</span>
          </button>
        </div>

        <!-- Stats Row -->
        <div class="relative z-10 grid grid-cols-3 gap-4 mt-7">
          <div class="bg-white/10 backdrop-blur-sm rounded-xl px-5 py-4 border border-white/10">
            <p class="text-white/60 text-[10px] font-semibold uppercase tracking-wider">Total Capacity</p>
            <p class="text-2xl font-bold mt-1">{{ libraryData.total_seats || 0 }}</p>
          </div>
          <div class="bg-white/10 backdrop-blur-sm rounded-xl px-5 py-4 border border-white/10">
            <p class="text-white/60 text-[10px] font-semibold uppercase tracking-wider">Current Occupancy</p>
            <p class="text-2xl font-bold mt-1">{{ libraryData.current_occupancy || 0 }}</p>
          </div>
          <div class="bg-white/10 backdrop-blur-sm rounded-xl px-5 py-4 border border-white/10">
            <p class="text-white/60 text-[10px] font-semibold uppercase tracking-wider">Occupancy Rate</p>
            <div class="flex items-end space-x-2 mt-1">
              <p class="text-2xl font-bold">{{ occupancyRate }}%</p>
              <div class="flex-1 h-1.5 bg-white/15 rounded-full mb-2 overflow-hidden">
                <div class="h-full bg-emerald-300 rounded-full transition-all duration-500" :style="{ width: occupancyRate + '%' }"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Pill Tab Navigation -->
      <div class="flex items-center space-x-1.5 bg-slate-50 border border-slate-100 p-1.5 rounded-2xl w-max">
        <button
          v-for="tab in tabs"
          :key="tab.value"
          @click="activeTab = tab.value"
          :class="[
            'px-4 py-2 text-xs font-semibold rounded-xl transition-all cursor-pointer flex items-center space-x-2',
            activeTab === tab.value
              ? 'bg-white text-emerald-700 shadow-sm border border-slate-200/40'
              : 'text-slate-500 hover:text-slate-700'
          ]"
        >
          <component :is="tab.icon" class="w-3.5 h-3.5" />
          <span>{{ tab.label }}</span>
        </button>
      </div>

      <!-- Tab Content Container -->
      <div class="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">

        <!-- Basic Information Tab -->
        <div v-if="activeTab === 'basic'" class="p-6 space-y-6">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
            <!-- Library Name -->
            <div>
              <label class="block text-[10px] font-semibold text-slate-400 mb-1.5 uppercase tracking-wider">Library Name</label>
              <input
                v-model="libraryData.name"
                type="text"
                class="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-400 transition-all text-sm text-slate-700 font-medium bg-slate-50/50"
              />
            </div>

            <!-- Library Photo -->
            <div>
              <label class="block text-[10px] font-semibold text-slate-400 mb-1.5 uppercase tracking-wider">Library Photo</label>
              <div class="flex items-center space-x-4">
                <div class="w-14 h-14 rounded-xl border border-gray-200 bg-slate-50 overflow-hidden flex items-center justify-center flex-shrink-0">
                  <img
                    v-if="photoPreview || libraryData.photo_url"
                    :src="photoPreview || libraryData.photo_url || undefined"
                    class="w-full h-full object-cover"
                    alt="Library preview"
                  />
                  <Building2 v-else class="w-6 h-6 text-slate-300" />
                </div>
                <input
                  type="file"
                  @change="handlePhotoUpload"
                  accept="image/*"
                  class="flex-1 text-xs text-slate-500 file:mr-3 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-xs file:font-semibold file:bg-emerald-50 file:text-emerald-700 hover:file:bg-emerald-100 cursor-pointer"
                />
              </div>
            </div>

            <!-- Contact Number -->
            <div>
              <label class="block text-[10px] font-semibold text-slate-400 mb-1.5 uppercase tracking-wider">Contact Number</label>
              <input
                v-model="contactInfo.phone"
                type="text"
                class="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-400 transition-all text-sm text-slate-700 font-medium bg-slate-50/50"
              />
            </div>

            <!-- Email -->
            <div>
              <label class="block text-[10px] font-semibold text-slate-400 mb-1.5 uppercase tracking-wider">Email</label>
              <input
                v-model="contactInfo.email"
                type="email"
                class="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-400 transition-all text-sm text-slate-700 font-medium bg-slate-50/50"
              />
            </div>

            <!-- Address -->
            <div class="md:col-span-2">
              <label class="block text-[10px] font-semibold text-slate-400 mb-1.5 uppercase tracking-wider">Address</label>
              <textarea
                v-model="libraryData.address"
                rows="3"
                class="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-400 transition-all text-sm text-slate-700 font-medium bg-slate-50/50 resize-none"
              ></textarea>
            </div>

            <!-- Website -->
            <div>
              <label class="block text-[10px] font-semibold text-slate-400 mb-1.5 uppercase tracking-wider">Website</label>
              <input
                v-model="contactInfo.website"
                type="url"
                class="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-400 transition-all text-sm text-slate-700 font-medium bg-slate-50/50"
                placeholder="https://"
              />
            </div>

            <!-- WiFi Password (Optional) -->
            <div>
              <label class="block text-[10px] font-semibold text-slate-400 mb-1.5 uppercase tracking-wider flex items-center justify-between">
                <span>WiFi Password</span>
                <span class="text-[9px] text-slate-400 font-normal lowercase">(optional)</span>
              </label>
              <div class="relative">
                <input
                  v-model="libraryData.wifi_password"
                  type="text"
                  class="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-400 transition-all text-sm text-slate-700 font-medium bg-slate-50/50"
                  placeholder="e.g. SmartLib@2026"
                />
                <Wifi class="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            <!-- Coordinates Group -->
            <div class="flex items-end space-x-3">
              <div class="flex-1">
                <label class="block text-[10px] font-semibold text-slate-400 mb-1.5 uppercase tracking-wider">Latitude</label>
                <input
                  v-model.number="libraryData.latitude"
                  type="number"
                  step="any"
                  class="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-400 transition-all text-sm text-slate-700 font-medium bg-slate-50/50"
                  placeholder="e.g. 31.5204"
                />
              </div>
              <div class="flex-1">
                <label class="block text-[10px] font-semibold text-slate-400 mb-1.5 uppercase tracking-wider">Longitude</label>
                <input
                  v-model.number="libraryData.longitude"
                  type="number"
                  step="any"
                  class="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-400 transition-all text-sm text-slate-700 font-medium bg-slate-50/50"
                  placeholder="e.g. 74.3587"
                />
              </div>
              <div class="flex items-center space-x-2 flex-shrink-0">
                <button
                  type="button"
                  @click="getCurrentLocation"
                  class="px-3 py-2.5 text-emerald-600 hover:bg-emerald-50 rounded-xl font-semibold text-xs flex items-center space-x-1.5 transition-all border border-emerald-100 cursor-pointer"
                >
                  <Navigation class="w-3.5 h-3.5" />
                  <span>Auto-detect</span>
                </button>
                <button
                  type="button"
                  @click="openMapModal"
                  class="px-3 py-2.5 bg-emerald-600 text-white hover:bg-emerald-750 rounded-xl font-semibold text-xs flex items-center space-x-1.5 transition-all shadow-sm cursor-pointer"
                >
                  <Map class="w-3.5 h-3.5 text-white" />
                  <span>Select on Map</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Operating Hours Tab -->
        <div v-if="activeTab === 'hours'" class="p-6 space-y-3">
          <div
            v-for="day in operatingDays"
            :key="day.day"
            class="flex items-center justify-between p-4 rounded-xl border border-gray-100 hover:border-emerald-100 transition-all group"
            :class="day.isOpen ? 'bg-white' : 'bg-slate-50/50'"
          >
            <div class="flex items-center space-x-3.5">
              <label class="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" v-model="day.isOpen" class="sr-only peer">
                <div class="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-emerald-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-emerald-600"></div>
              </label>
              <span class="font-semibold text-sm text-slate-700 w-24">{{ day.day }}</span>
            </div>
            <div v-if="day.isOpen" class="flex items-center space-x-3">
              <input
                v-model="day.openTime"
                type="time"
                class="px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500/20 bg-slate-50/50 text-sm text-slate-700 font-medium"
              />
              <span class="text-slate-300 font-medium text-xs">→</span>
              <input
                v-model="day.closeTime"
                type="time"
                class="px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500/20 bg-slate-50/50 text-sm text-slate-700 font-medium"
              />
            </div>
            <span v-else class="text-xs font-semibold text-slate-400 bg-slate-100 px-3 py-1 rounded-full uppercase tracking-wider">Closed</span>
          </div>
        </div>

        <!-- Facilities Tab -->
        <div v-if="activeTab === 'facilities'" class="p-6 space-y-6">
          <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div
              v-for="facility in facilitiesList"
              :key="facility.id"
              @click="facility.available = !facility.available"
              :class="[
                'flex items-center space-x-3 p-4 rounded-xl border-2 cursor-pointer transition-all group',
                facility.available
                  ? 'bg-emerald-50/50 border-emerald-200 text-emerald-700'
                  : 'bg-slate-50/50 border-gray-100 text-slate-400 hover:border-gray-200'
              ]"
            >
              <component :is="facility.icon" :class="['w-5 h-5 transition-colors', facility.available ? 'text-emerald-600' : 'text-slate-300']" />
              <span class="font-semibold text-sm">{{ facility.name }}</span>
            </div>
          </div>

          <div>
            <label class="block text-[10px] font-semibold text-slate-400 mb-1.5 uppercase tracking-wider">Additional Features</label>
            <textarea
              v-model="specialFeatures"
              rows="4"
              placeholder="List any additional facilities or amenities..."
              class="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-400 transition-all text-sm text-slate-700 font-medium bg-slate-50/50 resize-none"
            ></textarea>
          </div>
        </div>

        <!-- Rules & Policies Tab -->
        <div v-if="activeTab === 'rules'" class="p-6 space-y-5">
          <div>
            <label class="block text-[10px] font-semibold text-slate-400 mb-1.5 uppercase tracking-wider">Library Rules (One per line)</label>
            <textarea
              v-model="rulesText"
              rows="8"
              placeholder="Enter library rules and regulations..."
              class="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-400 transition-all text-sm text-slate-700 font-medium bg-slate-50/50 font-mono resize-none"
            ></textarea>
          </div>
          <div>
            <label class="block text-[10px] font-semibold text-slate-400 mb-1.5 uppercase tracking-wider">Cancellation Policy</label>
            <textarea
              v-model="cancellationPolicy"
              rows="4"
              placeholder="Enter cancellation policy..."
              class="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-400 transition-all text-sm text-slate-700 font-medium bg-slate-50/50 resize-none"
            ></textarea>
          </div>
        </div>

        <!-- Settings Tab -->
        <div v-if="activeTab === 'settings'" class="p-6 space-y-4">
          <!-- Toggle Settings -->
          <div v-for="setting in settingsConfig" :key="setting.key" class="flex items-center justify-between p-4 rounded-xl border border-gray-100 hover:border-emerald-100 transition-all">
            <div>
              <h4 class="font-semibold text-sm text-slate-700">{{ setting.label }}</h4>
              <p class="text-xs text-slate-400 mt-0.5">{{ setting.description }}</p>
            </div>
            <label class="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" v-model="librarySettings[setting.key]" class="sr-only peer">
              <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-emerald-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-600"></div>
            </label>
          </div>

          <!-- Numeric Settings -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
            <div class="p-4 bg-slate-50/50 rounded-xl border border-gray-100">
              <label class="block text-[10px] font-semibold text-slate-400 mb-1.5 uppercase tracking-wider">Max Booking Duration (hrs)</label>
              <input
                v-model.number="librarySettings.maxBookingDuration"
                type="number"
                min="1"
                max="12"
                class="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 bg-white text-sm text-slate-700 font-medium"
              />
            </div>
            <div class="p-4 bg-slate-50/50 rounded-xl border border-gray-100">
              <label class="block text-[10px] font-semibold text-slate-400 mb-1.5 uppercase tracking-wider">Advance Booking Days</label>
              <input
                v-model.number="librarySettings.advanceBookingDays"
                type="number"
                min="1"
                max="30"
                class="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 bg-white text-sm text-slate-700 font-medium"
              />
            </div>
            <div class="p-4 bg-slate-50/50 rounded-xl border border-gray-100">
              <label class="block text-[10px] font-semibold text-slate-400 mb-1.5 uppercase tracking-wider">Min Study Minutes for Streak</label>
              <input
                v-model.number="librarySettings.minStudyMinutesForStreak"
                type="number"
                min="0"
                class="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 bg-white text-sm text-slate-700 font-medium"
                placeholder="e.g. 60"
              />
            </div>
          </div>

          <!-- Seat Layout Mode -->
          <div class="p-5 bg-emerald-50/50 rounded-xl border border-emerald-100 mt-2">
            <h4 class="font-semibold text-sm text-slate-700 mb-4 flex items-center space-x-2">
              <Layout class="w-4 h-4 text-emerald-600" />
              <span>Seat Layout System Redesign</span>
            </h4>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
              <!-- Individual Seats -->
              <div
                @click="libraryData.seat_layout_mode = 'individual'"
                :class="[
                  'p-4 rounded-xl border-2 cursor-pointer transition-all flex flex-col items-start gap-3 bg-white',
                  libraryData.seat_layout_mode === 'individual'
                    ? 'border-emerald-500 shadow-sm'
                    : 'border-slate-150 hover:border-emerald-200'
                ]"
              >
                <div :class="['p-2.5 rounded-lg', libraryData.seat_layout_mode === 'individual' ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-slate-500']">
                  <Armchair class="w-5 h-5" />
                </div>
                <div>
                  <p class="font-semibold text-sm text-slate-700">Individual Seats</p>
                  <p class="text-[10px] text-slate-400 mt-0.5 leading-relaxed">Classic seat-by-seat layout placed anywhere on floor plan.</p>
                </div>
              </div>

              <!-- Study Tables -->
              <div
                @click="libraryData.seat_layout_mode = 'tables'"
                :class="[
                  'p-4 rounded-xl border-2 cursor-pointer transition-all flex flex-col items-start gap-3 bg-white',
                  libraryData.seat_layout_mode === 'tables'
                    ? 'border-emerald-500 shadow-sm'
                    : 'border-slate-150 hover:border-emerald-200'
                ]"
              >
                <div :class="['p-2.5 rounded-lg', libraryData.seat_layout_mode === 'tables' ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-slate-500']">
                  <Grid class="w-5 h-5" />
                </div>
                <div>
                  <p class="font-semibold text-sm text-slate-700">Study Tables</p>
                  <p class="text-[10px] text-slate-400 mt-0.5 leading-relaxed">Chairs grouped around desks (2/4/6/8-person capacities).</p>
                </div>
              </div>

              <!-- Personal Study Cabins -->
              <div
                @click="libraryData.seat_layout_mode = 'cabins'"
                :class="[
                  'p-4 rounded-xl border-2 cursor-pointer transition-all flex flex-col items-start gap-3 bg-white',
                  libraryData.seat_layout_mode === 'cabins'
                    ? 'border-emerald-500 shadow-sm'
                    : 'border-slate-150 hover:border-emerald-200'
                ]"
              >
                <div :class="['p-2.5 rounded-lg', libraryData.seat_layout_mode === 'cabins' ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-slate-500']">
                  <Building2 class="w-5 h-5" />
                </div>
                <div>
                  <p class="font-semibold text-sm text-slate-700">Personal Cabins</p>
                  <p class="text-[10px] text-slate-400 mt-0.5 leading-relaxed">Private enclosed study rooms with customizable features.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Student Reviews & Ratings Tab -->
        <div v-if="activeTab === 'reviews'" class="p-6 space-y-6">

          <!-- Rating Overview Header -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 bg-slate-50/70 p-6 rounded-2xl border border-slate-100">
            <!-- Left: Score Box -->
            <div class="flex flex-col items-center justify-center p-5 bg-white rounded-xl shadow-sm border border-slate-100 text-center">
              <span class="text-4xl font-extrabold text-slate-800 tracking-tight">{{ reviewsData.average_rating || '0.0' }}</span>
              <!-- Star icons -->
              <div class="flex items-center space-x-1 my-2">
                <Star
                  v-for="star in 5"
                  :key="star"
                  :class="[
                    'w-5 h-5',
                    star <= Math.round(reviewsData.average_rating)
                      ? 'fill-amber-400 text-amber-400'
                      : 'fill-slate-100 text-slate-200'
                  ]"
                />
              </div>
              <p class="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                Based on {{ reviewsData.total_reviews }} student {{ reviewsData.total_reviews === 1 ? 'review' : 'reviews' }}
              </p>
            </div>

            <!-- Right: Rating Breakdown Bars (Spans 2 columns) -->
            <div class="md:col-span-2 space-y-2.5 flex flex-col justify-center">
              <div v-for="star in [5, 4, 3, 2, 1]" :key="star" class="flex items-center space-x-3 text-xs">
                <span class="w-12 font-bold text-slate-600 flex items-center justify-end">
                  {{ star }} <Star class="w-3.5 h-3.5 fill-amber-400 text-amber-400 ml-1 inline" />
                </span>
                <div class="flex-1 h-2.5 bg-slate-200/80 rounded-full overflow-hidden">
                  <div
                    class="h-full bg-emerald-500 rounded-full transition-all duration-500"
                    :style="{ width: getStarPercent(star) + '%' }"
                  ></div>
                </div>
                <span class="w-10 text-right font-semibold text-slate-400">
                  {{ reviewsData.rating_breakdown[star] || 0 }}
                </span>
              </div>
            </div>
          </div>

          <!-- Search, Sort & Filter controls -->
          <div class="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 text-left">
            <!-- Sort Pills -->
            <div class="flex items-center space-x-1.5 p-1 bg-slate-100/90 rounded-xl text-xs font-semibold">
              <button 
                @click="reviewSortMode = 'newest'; visibleReviewCount = 3"
                :class="[
                  'px-3.5 py-1.5 rounded-lg transition-all cursor-pointer font-bold',
                  reviewSortMode === 'newest' ? 'bg-white text-slate-800 shadow-sm' : 'text-slate-500 hover:text-slate-700'
                ]"
              >
                Newest Reviews
              </button>
              <button 
                @click="reviewSortMode = 'popular'; visibleReviewCount = 3"
                :class="[
                  'px-3.5 py-1.5 rounded-lg transition-all cursor-pointer font-bold',
                  reviewSortMode === 'popular' ? 'bg-white text-emerald-800 shadow-sm' : 'text-slate-500 hover:text-slate-700'
                ]"
              >
                Popular Reviews
              </button>
              <button 
                @click="reviewSortMode = 'lowest'; visibleReviewCount = 3"
                :class="[
                  'px-3.5 py-1.5 rounded-lg transition-all cursor-pointer font-bold',
                  reviewSortMode === 'lowest' ? 'bg-white text-slate-800 shadow-sm' : 'text-slate-500 hover:text-slate-700'
                ]"
              >
                Lowest Rated
              </button>
            </div>

            <!-- Search and Rating Dropdown -->
            <div class="flex items-center space-x-2.5 flex-1 max-w-md">
              <div class="relative flex-1">
                <Search class="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  v-model="reviewSearch"
                  type="text"
                  placeholder="Search student reviews..."
                  class="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-400"
                />
              </div>
              <select
                v-model="reviewRatingFilter"
                class="px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 cursor-pointer"
              >
                <option value="all">All Stars</option>
                <option value="5">5 Stars</option>
                <option value="4">4 Stars</option>
                <option value="3">3 Stars</option>
                <option value="2">2 Stars</option>
                <option value="1">1 Star</option>
              </select>
              <button
                @click="fetchReviews"
                :disabled="reviewsLoading"
                class="p-2 bg-slate-50 border border-slate-200 hover:bg-slate-100 rounded-xl text-slate-600 transition-colors cursor-pointer"
                title="Refresh Reviews"
              >
                <RefreshCw :class="['w-4 h-4', reviewsLoading ? 'animate-spin' : '']" />
              </button>
            </div>
          </div>

          <!-- Reviews List -->
          <div v-if="reviewsLoading" class="flex justify-center py-12">
            <RefreshCw class="w-8 h-8 text-emerald-600 animate-spin" />
          </div>

          <div v-else-if="filteredReviewsList.length === 0" class="text-center py-12 bg-slate-50/50 rounded-2xl border border-dashed border-slate-200">
            <MessageSquare class="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <p class="text-xs font-bold text-slate-400 uppercase tracking-widest">No student reviews match your selection.</p>
          </div>

          <div v-else class="space-y-4">
            <div
              v-for="review in displayedReviewsList"
              :key="review.id"
              class="p-5 rounded-2xl border border-slate-100 hover:border-emerald-100/80 bg-white shadow-sm transition-all text-left space-y-3"
            >
              <div class="flex items-start justify-between">
                <!-- User Info -->
                <div class="flex items-center space-x-3.5">
                  <div class="w-10 h-10 rounded-full overflow-hidden bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-700 font-bold text-sm flex-shrink-0">
                    <img v-if="review.user?.profile_picture" :src="`/storage/${review.user.profile_picture}`" class="w-full h-full object-cover" />
                    <span v-else>{{ review.user?.name ? review.user.name.charAt(0).toUpperCase() : 'S' }}</span>
                  </div>
                  <div>
                    <h4 class="text-sm font-bold text-slate-800 leading-snug">{{ review.user?.name || 'Anonymous Student' }}</h4>
                    <div class="flex items-center space-x-2 text-[10px] font-semibold text-slate-400 mt-0.5">
                      <span v-if="review.user?.crn" class="uppercase">CRN: {{ review.user.crn }}</span>
                      <span v-if="review.user?.ca_level">• {{ review.user.ca_level }}</span>
                    </div>
                  </div>
                </div>

                <!-- Rating & Date -->
                <div class="text-right">
                  <div class="flex items-center space-x-0.5 justify-end">
                    <Star
                      v-for="s in 5"
                      :key="s"
                      :class="[
                        'w-4 h-4',
                        s <= review.rating ? 'fill-amber-400 text-amber-400' : 'fill-slate-100 text-slate-200'
                      ]"
                    />
                  </div>
                  <span class="text-[10px] font-medium text-slate-400 mt-1 block">
                    {{ new Date(review.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) }}
                  </span>
                </div>
              </div>

              <!-- Comment Body -->
              <p class="text-xs text-slate-600 font-normal leading-relaxed pl-1">
                {{ review.comment || 'No written comment provided.' }}
              </p>
            </div>

            <!-- View More Reviews Button -->
            <div v-if="hasMoreReviews" class="pt-4 text-center">
              <button 
                @click="visibleReviewCount += 3"
                class="px-6 py-2.5 bg-slate-100 hover:bg-emerald-50 text-slate-700 hover:text-emerald-700 font-bold text-xs rounded-xl border border-slate-200 hover:border-emerald-200 transition-all cursor-pointer inline-flex items-center gap-2 shadow-sm"
              >
                <span>View More Reviews ({{ filteredReviewsList.length - visibleReviewCount }} remaining)</span>
                <ChevronDown class="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </template>
    <!-- Map Picker Modal -->
    <div v-if="showMapModal" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md">
      <div class="bg-white rounded-3xl shadow-2xl w-full max-w-2xl overflow-hidden border border-slate-100 flex flex-col max-h-[90vh] md:max-h-[85vh] text-left">
        <!-- Header -->
        <div class="px-6 py-4 bg-gradient-to-r from-emerald-700 to-teal-800 text-white flex items-center justify-between">
          <div class="flex items-center space-x-2">
            <MapPin class="w-5 h-5 text-emerald-350" />
            <h3 class="font-bold text-sm uppercase tracking-wider">Select Location on Map</h3>
          </div>
          <button @click="closeMapModal" class="p-1.5 bg-white/10 hover:bg-white/20 rounded-full transition-colors cursor-pointer">
            <X class="w-5 h-5 text-white" />
          </button>
        </div>

        <!-- Content -->
        <div class="p-6 space-y-4 flex-grow flex flex-col min-h-0">
          <p class="text-xs text-slate-500 font-medium">Click on the map or drag the marker to pin your library's exact coordinates.</p>
          
          <!-- Search input & Search Button with Live Dropdown -->
          <div class="relative">
            <div class="flex items-center gap-2">
              <div class="relative flex-1">
                <input
                  id="picker-search-input"
                  v-model="mapSearchQuery"
                  @input="onSearchInput"
                  @focus="showSearchDropdown = searchResults.length > 0"
                  @blur="closeSearchDropdown"
                  @keydown.enter.prevent="executeSearchLocation"
                  type="text"
                  placeholder="Type city, area, or address (e.g. Lahore, Pakistan)..."
                  class="w-full pl-9 pr-4 py-2.5 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all text-xs text-slate-700 font-semibold bg-slate-50/50"
                  autocomplete="off"
                />
                <Search class="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              </div>
              <button
                type="button"
                @click="executeSearchLocation"
                :disabled="mapSearchLoading"
                class="px-4.5 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl text-xs font-bold transition-all shadow-sm cursor-pointer flex items-center space-x-1.5 shrink-0 disabled:opacity-50"
              >
                <RefreshCw v-if="mapSearchLoading" class="w-3.5 h-3.5 animate-spin" />
                <Search v-else class="w-3.5 h-3.5" />
                <span>Search</span>
              </button>
            </div>

            <!-- Live Location Dropdown Menu -->
            <div
              v-if="showSearchDropdown && searchResults.length > 0"
              class="absolute left-0 right-0 top-full mt-1.5 bg-white rounded-2xl shadow-xl border border-slate-100 z-50 overflow-hidden max-h-60 overflow-y-auto text-left"
            >
              <div
                v-for="(result, index) in searchResults"
                :key="index"
                @mousedown.prevent="selectLocationResult(result)"
                class="p-3 hover:bg-emerald-50/80 border-b border-slate-50 last:border-none cursor-pointer transition-colors flex items-start space-x-3"
              >
                <MapPin class="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div class="min-w-0 flex-1">
                  <div class="text-xs font-bold text-slate-800 truncate">
                    {{ result.display_name.split(',')[0] }}
                  </div>
                  <div class="text-[10px] text-slate-400 font-medium truncate mt-0.5">
                    {{ result.display_name }}
                  </div>
                </div>
              </div>
            </div>

            <!-- Loading indicator for live search -->
            <div
              v-if="isSearchingDropdown"
              class="absolute left-0 right-0 top-full mt-1.5 bg-white p-3 rounded-2xl shadow-md border border-slate-100 z-50 text-center text-xs font-semibold text-slate-400 flex items-center justify-center space-x-2"
            >
              <RefreshCw class="w-3.5 h-3.5 animate-spin text-emerald-600" />
              <span>Searching matching locations...</span>
            </div>
          </div>

          <!-- Map Canvas -->
          <div class="relative w-full h-[350px] bg-slate-50 rounded-2xl overflow-hidden border border-slate-200 shadow-inner">
            <div id="picker-map" style="width: 100%; height: 100%; min-height: 350px;"></div>
          </div>

          <!-- Coordinate Info -->
          <div class="p-4 bg-slate-50 border border-slate-100 rounded-2xl flex flex-wrap items-center justify-between gap-4 text-xs font-semibold text-slate-700 font-outfit">
            <div class="flex space-x-6">
              <div>
                <span class="text-slate-400 font-medium uppercase tracking-wider block text-[9px] mb-0.5">Latitude</span>
                <span class="font-mono text-sm">{{ tempLatitude !== null ? tempLatitude.toFixed(6) : 'None' }}</span>
              </div>
              <div>
                <span class="text-slate-400 font-medium uppercase tracking-wider block text-[9px] mb-0.5">Longitude</span>
                <span class="font-mono text-sm">{{ tempLongitude !== null ? tempLongitude.toFixed(6) : 'None' }}</span>
              </div>
            </div>
            <button
              type="button"
              @click="detectLocationForMap"
              class="px-3 py-1.5 bg-emerald-50 border border-emerald-200 hover:bg-emerald-100 text-emerald-700 rounded-xl flex items-center space-x-1.5 transition-all text-[11px] cursor-pointer"
            >
              <Navigation class="w-3.5 h-3.5" />
              <span>My Location</span>
            </button>
          </div>
        </div>

        <!-- Actions -->
        <div class="px-6 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-end space-x-3">
          <button
            @click="closeMapModal"
            class="px-4 py-2 border border-slate-200 hover:bg-slate-100 text-slate-600 rounded-xl text-xs font-semibold active:scale-98 transition-all cursor-pointer"
          >
            Cancel
          </button>
          <button
            @click="confirmMapLocation"
            class="px-5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-semibold active:scale-98 transition-all flex items-center space-x-1.5 shadow-sm shadow-emerald-500/10 cursor-pointer"
          >
            <Save class="w-4 h-4" />
            <span>Confirm Location</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, nextTick, watch } from 'vue';
import {
  Building2,
  MapPin,
  Save,
  Wifi,
  Coffee,
  Printer,
  BookOpen,
  Zap,
  Camera,
  RefreshCw,
  Layout,
  Grid,
  Map,
  Wind,
  Lock,
  Info,
  Clock,
  CheckSquare,
  FileText,
  Settings,
  X,
  Navigation,
  Star,
  MessageSquare,
  Search,
  ChevronDown
} from 'lucide-vue-next';
import { librarianAPI } from '@/shared/services/api';

import { useSwal } from '@/shared/composables/useSwal';
const { showSuccess, showError, showWarning } = useSwal();

const loading = ref(true);
const saving = ref(false);
const activeTab = ref('basic');

const libraryData = ref({
  name: '',
  address: '',
  capacity: 0,
  total_seats: 0,
  current_occupancy: 0,
  latitude: null as number | null,
  longitude: null as number | null,
  seat_layout_mode: 'layout',
  wifi_password: '',
  photo: null as string | null,
  photo_url: null as string | null
});

const selectedPhoto = ref<File | null>(null);
const photoPreview = ref<string | null>(null);

const handlePhotoUpload = (event: any) => {
  const file = event.target.files[0];
  if (file) {
    selectedPhoto.value = file;
    photoPreview.value = URL.createObjectURL(file);
  }
};

const contactInfo = ref({
  phone: '',
  email: '',
  website: ''
});

const operatingDays = ref([
  { day: 'Monday', isOpen: true, openTime: '08:00', closeTime: '22:00' },
  { day: 'Tuesday', isOpen: true, openTime: '08:00', closeTime: '22:00' },
  { day: 'Wednesday', isOpen: true, openTime: '08:00', closeTime: '22:00' },
  { day: 'Thursday', isOpen: true, openTime: '08:00', closeTime: '22:00' },
  { day: 'Friday', isOpen: true, openTime: '08:00', closeTime: '22:00' },
  { day: 'Saturday', isOpen: true, openTime: '09:00', closeTime: '20:00' },
  { day: 'Sunday', isOpen: false, openTime: '', closeTime: '' }
]);

const facilitiesList = ref([
  { id: 1, name: 'WiFi', icon: Wifi, available: true },
  { id: 2, name: 'Cafeteria', icon: Coffee, available: false },
  { id: 3, name: 'Printer', icon: Printer, available: true },
  { id: 4, name: 'Reading Room', icon: BookOpen, available: true },
  { id: 5, name: 'Power Outlets', icon: Zap, available: true },
  { id: 6, name: 'Air Conditioning', icon: Wind, available: true },
  { id: 7, name: 'Lockers', icon: Lock, available: false },
  { id: 8, name: 'CCTV', icon: Camera, available: true }
]);

const specialFeatures = ref('');
const rulesText = ref('');
const cancellationPolicy = ref('');

const librarySettings = ref({
  allowBookings: true,
  requireApproval: false,
  allowExtensions: true,
  sendReminders: true,
  maxBookingDuration: 4,
  advanceBookingDays: 7,
  minStudyMinutesForStreak: 0
});

const tabs = [
  { value: 'basic', label: 'Basic Info', icon: Info },
  { value: 'hours', label: 'Hours', icon: Clock },
  { value: 'facilities', label: 'Facilities', icon: CheckSquare },
  { value: 'rules', label: 'Rules', icon: FileText },
  { value: 'settings', label: 'Settings', icon: Settings },
  { value: 'reviews', label: 'Reviews & Ratings', icon: Star }
];

const settingsConfig: { key: 'allowBookings' | 'requireApproval' | 'allowExtensions' | 'sendReminders'; label: string; description: string }[] = [
  { key: 'allowBookings', label: 'Allow Bookings', description: 'Enable students to book seats' },
  { key: 'requireApproval', label: 'Require Approval', description: 'Bookings need librarian approval' },
  { key: 'allowExtensions', label: 'Allow Extensions', description: 'Students can extend their bookings' },
  { key: 'sendReminders', label: 'Send Reminders', description: 'Send booking reminder notifications' }
];

const occupancyRate = computed(() => {
  if (!libraryData.value.total_seats) return 0;
  return Math.round((libraryData.value.current_occupancy / libraryData.value.total_seats) * 100);
});

const showMapModal = ref(false);
const tempLatitude = ref<number | null>(null);
const tempLongitude = ref<number | null>(null);
const mapSearchQuery = ref('');
const mapSearchLoading = ref(false);
const searchResults = ref<Array<{ display_name: string; lat: string; lon: string }>>([]);
const showSearchDropdown = ref(false);
const isSearchingDropdown = ref(false);
let searchDebounceTimer: any = null;

let pickerMap: any = null;
let pickerMarker: any = null;
declare const L: any;

const onSearchInput = () => {
  if (searchDebounceTimer) clearTimeout(searchDebounceTimer);
  const query = mapSearchQuery.value.trim();

  if (query.length < 2) {
    searchResults.value = [];
    showSearchDropdown.value = false;
    isSearchingDropdown.value = false;
    return;
  }

  isSearchingDropdown.value = true;
  searchDebounceTimer = setTimeout(async () => {
    try {
      const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}&limit=6`);
      const data = await response.json();
      searchResults.value = data || [];
      showSearchDropdown.value = searchResults.value.length > 0;
    } catch (err) {
      console.error('Error fetching location suggestions:', err);
    } finally {
      isSearchingDropdown.value = false;
    }
  }, 300);
};

const selectLocationResult = (result: { display_name: string; lat: string; lon: string }) => {
  mapSearchQuery.value = result.display_name;
  showSearchDropdown.value = false;
  searchResults.value = [];

  const lat = parseFloat(result.lat);
  const lng = parseFloat(result.lon);
  tempLatitude.value = lat;
  tempLongitude.value = lng;

  if (pickerMap && pickerMarker) {
    pickerMap.setView([lat, lng], 16);
    pickerMarker.setLatLng([lat, lng]);
  }
};

const closeSearchDropdown = () => {
  setTimeout(() => {
    showSearchDropdown.value = false;
  }, 200);
};

const loadLeafletScript = (): Promise<void> => {
  return new Promise((resolve, reject) => {
    if (typeof L !== 'undefined') { resolve(); return; }
    
    // Load Leaflet CSS if not present
    if (!document.getElementById('leaflet-css')) {
      const link = document.createElement('link');
      link.id = 'leaflet-css';
      link.rel = 'stylesheet';
      link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
      document.head.appendChild(link);
    }

    // Load Leaflet JS
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error('Failed to load Leaflet map engine'));
    document.head.appendChild(script);
  });
};

const executeSearchLocation = async () => {
  const query = mapSearchQuery.value.trim();
  if (!query) {
    showWarning('Search Empty', 'Please enter a city or location to search.');
    return;
  }

  mapSearchLoading.value = true;

  try {
    const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}`);
    const data = await response.json();

    if (data && data.length > 0) {
      const lat = parseFloat(data[0].lat);
      const lng = parseFloat(data[0].lon);
      tempLatitude.value = lat;
      tempLongitude.value = lng;

      if (pickerMap && pickerMarker) {
        pickerMap.setView([lat, lng], 16);
        pickerMarker.setLatLng([lat, lng]);
      }
      showSuccess('Location Found', `Map centered on: ${data[0].display_name.split(',')[0]}`);
    } else {
      showWarning('Not Found', `Could not find location for "${query}". Try adding city or country name.`);
    }
  } catch (err) {
    console.error('Geocoding error:', err);
    showError('Search Error', 'Failed to search location.');
  } finally {
    mapSearchLoading.value = false;
  }
};

const openMapModal = async () => {
  showMapModal.value = true;
  mapSearchQuery.value = '';
  tempLatitude.value = libraryData.value.latitude || 31.5204;
  tempLongitude.value = libraryData.value.longitude || 74.3587;
  await nextTick();
  setTimeout(() => {
    initializePickerMap();
    if (!libraryData.value.latitude || !libraryData.value.longitude) {
      detectLocationForMap();
    }
  }, 150);
};

const closeMapModal = () => {
  showMapModal.value = false;
  if (pickerMap) {
    pickerMap.remove();
    pickerMap = null;
  }
  pickerMarker = null;
};

const initializePickerMap = async () => {
  try {
    await loadLeafletScript();
  } catch (error) {
    showError('Map Error', 'Could not load interactive map script.');
    return;
  }
  
  const mapContainer = document.getElementById('picker-map');
  if (!mapContainer) return;

  const initialLat = tempLatitude.value || 31.5204;
  const initialLng = tempLongitude.value || 74.3587;

  if (pickerMap) {
    pickerMap.remove();
    pickerMap = null;
  }

  pickerMap = L.map('picker-map').setView([initialLat, initialLng], 15);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(pickerMap);

  pickerMarker = L.marker([initialLat, initialLng], {
    draggable: true
  }).addTo(pickerMap);

  pickerMarker.on('dragend', (event: any) => {
    const position = event.target.getLatLng();
    tempLatitude.value = position.lat;
    tempLongitude.value = position.lng;
  });

  pickerMap.on('click', (event: any) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;
    pickerMarker.setLatLng([lat, lng]);
    tempLatitude.value = lat;
    tempLongitude.value = lng;
  });
};

const detectLocationForMap = () => {
  if (!navigator.geolocation) {
    showWarning('Not Supported', 'Geolocation is not supported by your browser');
    return;
  }
  navigator.geolocation.getCurrentPosition(
    (position) => {
      const lat = position.coords.latitude;
      const lng = position.coords.longitude;
      tempLatitude.value = lat;
      tempLongitude.value = lng;
      if (pickerMap && pickerMarker) {
        pickerMap.setView([lat, lng], 16);
        pickerMarker.setLatLng([lat, lng]);
      }
      showSuccess('Detected', 'Precise coordinates auto-detected successfully!');
    },
    (error) => {
      console.error('Error getting location:', error);
      showError('Location Error', 'Unable to retrieve your location.');
    },
    { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
  );
};

const confirmMapLocation = () => {
  if (tempLatitude.value !== null && tempLongitude.value !== null) {
    libraryData.value.latitude = tempLatitude.value;
    libraryData.value.longitude = tempLongitude.value;
    showSuccess('Location Selected', `Coordinates set to ${tempLatitude.value.toFixed(5)}, ${tempLongitude.value.toFixed(5)}`);
    closeMapModal();
  }
};

const getCurrentLocation = () => {
  if (!navigator.geolocation) {
    showWarning('Not Supported', 'Geolocation is not supported by your browser');
    return;
  }

  navigator.geolocation.getCurrentPosition(
    (position) => {
      libraryData.value.latitude = position.coords.latitude;
      libraryData.value.longitude = position.coords.longitude;
      showSuccess('Success', 'Coordinates auto-detected successfully!');
    },
    (error) => {
      console.error('Error getting location:', error);
      showError('Location Error', 'Unable to retrieve your location. Please enter manually.');
    },
    { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
  );
};

const fetchLibraryInfo = async () => {
  try {
    loading.value = true;
    const data = await librarianAPI.getLibraryInfo();

    libraryData.value = {
        name: data.name,
        address: data.address,
        capacity: data.capacity,
        total_seats: data.total_seats,
        current_occupancy: data.current_occupancy,
        latitude: data.latitude,
        longitude: data.longitude,
        seat_layout_mode: data.seat_layout_mode || 'layout',
        wifi_password: data.wifi_password || '',
        photo: data.photo,
        photo_url: data.photo_url
    };

    // Auto-fill location if missing
    if (!data.latitude || !data.longitude) {
        getCurrentLocation();
    }

    if (data.contact_info) {
        contactInfo.value = { ...contactInfo.value, ...data.contact_info };
    }

    if (data.operating_days && Array.isArray(data.operating_days)) {
        operatingDays.value = data.operating_days;
    }

    if (data.facilities && Array.isArray(data.facilities)) {
        facilitiesList.value.forEach(f => {
            f.available = data.facilities.includes(f.name);
        });
    }

    specialFeatures.value = data.special_features?.additional || '';

    if (data.rules) {
        rulesText.value = Array.isArray(data.rules.general) ? data.rules.general.join('\n') : '';
        cancellationPolicy.value = data.rules.cancellation || '';
    }

    if (data.special_features?.settings) {
        librarySettings.value = { ...librarySettings.value, ...data.special_features.settings };
    }

  } catch (error) {
    console.error('Error fetching library info:', error);
    showError('Load Failed', 'Failed to load library information');
  } finally {
    loading.value = false;
  }
};

const saveChanges = async () => {
  try {
    saving.value = true;

    const formData = new FormData();
    formData.append('name', libraryData.value.name);
    formData.append('address', libraryData.value.address);
    formData.append('capacity', libraryData.value.capacity.toString());
    if (libraryData.value.latitude) formData.append('latitude', libraryData.value.latitude.toString());
    if (libraryData.value.longitude) formData.append('longitude', libraryData.value.longitude.toString());
    formData.append('seat_layout_mode', libraryData.value.seat_layout_mode);
    formData.append('wifi_password', libraryData.value.wifi_password || '');
    formData.append('contact_info', JSON.stringify(contactInfo.value));
    formData.append('operating_days', JSON.stringify(operatingDays.value));
    formData.append('facilities', JSON.stringify(facilitiesList.value.filter(f => f.available).map(f => f.name)));
    formData.append('rules', JSON.stringify({
        general: rulesText.value.split('\n').filter(r => r.trim()),
        cancellation: cancellationPolicy.value
    }));
    formData.append('special_features', JSON.stringify({
        additional: specialFeatures.value,
        settings: librarySettings.value
    }));

    if (selectedPhoto.value) {
      formData.append('photo', selectedPhoto.value);
    }

    await librarianAPI.updateLibraryInfo(formData);
    showSuccess('Saved!', 'Library information updated successfully');

    selectedPhoto.value = null;
    photoPreview.value = null;

    fetchLibraryInfo();
  } catch (error) {
    console.error('Error updating library info:', error);
    showError('Save Failed', 'Failed to update library information');
  } finally {
    saving.value = false;
  }
};

const reviewsLoading = ref(false);
const reviewsData = ref({
  average_rating: 0,
  total_reviews: 0,
  rating_breakdown: { '5': 0, '4': 0, '3': 0, '2': 0, '1': 0 } as Record<string | number, number>,
  reviews: [] as any[]
});
const reviewSearch = ref('');
const reviewRatingFilter = ref<string | number>('all');
const reviewSortMode = ref<'newest' | 'popular' | 'lowest'>('newest');
const visibleReviewCount = ref(3);

const getStarPercent = (star: number) => {
  if (!reviewsData.value.total_reviews) return 0;
  const count = reviewsData.value.rating_breakdown[star] || 0;
  return Math.round((count / reviewsData.value.total_reviews) * 100);
};

const fetchReviews = async () => {
  try {
    reviewsLoading.value = true;
    const res = await librarianAPI.getReviews();
    reviewsData.value = {
      average_rating: res.average_rating || 0,
      total_reviews: res.total_reviews || 0,
      rating_breakdown: res.rating_breakdown || { '5': 0, '4': 0, '3': 0, '2': 0, '1': 0 },
      reviews: res.reviews || []
    };
  } catch (err) {
    console.error('Failed to fetch library reviews:', err);
  } finally {
    reviewsLoading.value = false;
  }
};

const filteredReviewsList = computed(() => {
  let list = [...(reviewsData.value.reviews || [])];

  if (reviewRatingFilter.value !== 'all') {
    const targetRating = Number(reviewRatingFilter.value);
    list = list.filter(r => Number(r.rating) === targetRating);
  }

  if (reviewSearch.value) {
    const q = reviewSearch.value.toLowerCase();
    list = list.filter(r => {
      const name = r.user?.name?.toLowerCase() || '';
      const crn = r.user?.crn?.toLowerCase() || '';
      const comment = r.comment?.toLowerCase() || '';
      return name.includes(q) || crn.includes(q) || comment.includes(q);
    });
  }

  if (reviewSortMode.value === 'popular') {
    list.sort((a, b) => {
      if (b.rating !== a.rating) return b.rating - a.rating;
      return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
    });
  } else if (reviewSortMode.value === 'lowest') {
    list.sort((a, b) => {
      if (a.rating !== b.rating) return a.rating - b.rating;
      return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
    });
  } else {
    list.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
  }

  return list;
});

const displayedReviewsList = computed(() => {
  return filteredReviewsList.value.slice(0, visibleReviewCount.value);
});

const hasMoreReviews = computed(() => {
  return visibleReviewCount.value < filteredReviewsList.value.length;
});

watch(activeTab, (newTab) => {
  if (newTab === 'reviews') {
    fetchReviews();
  }
});

onMounted(() => {
  fetchLibraryInfo();
  fetchReviews();
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap');

.font-outfit {
  font-family: 'Outfit', sans-serif;
}
</style>
