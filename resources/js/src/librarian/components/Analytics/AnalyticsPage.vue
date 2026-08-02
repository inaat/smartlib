<template>
  <div class="p-6 space-y-6 font-outfit text-slate-700">
    
    <!-- Top Action Header Row: Tab Switcher & Time Range Controls on the same line -->
    <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      <!-- Tab Switcher -->
      <div class="flex items-center space-x-1.5 bg-slate-100 rounded-xl p-1 w-fit">
        <button
          @click="activeView = 'analytics'"
          :class="[
            'px-5 py-2.5 text-xs font-bold rounded-lg transition-all cursor-pointer flex items-center space-x-2',
            activeView === 'analytics'
              ? 'bg-white text-emerald-700 shadow-sm border border-slate-200/40'
              : 'text-slate-500 hover:text-slate-700'
          ]"
        >
          <BarChart3 class="w-4 h-4" />
          <span>Analytics</span>
        </button>
        <button
          @click="activeView = 'reports'"
          :class="[
            'px-5 py-2.5 text-xs font-bold rounded-lg transition-all cursor-pointer flex items-center space-x-2',
            activeView === 'reports'
              ? 'bg-white text-emerald-700 shadow-sm border border-slate-200/40'
              : 'text-slate-500 hover:text-slate-700'
          ]"
        >
          <FileBarChart class="w-4 h-4" />
          <span>Reports</span>
        </button>
      </div>

      <!-- Time Range Controls for Analytics (Aligned on Same Line) -->
      <div v-if="activeView === 'analytics'" class="flex items-center space-x-3 sm:ml-auto">
        <select 
          v-model="timeRange" 
          class="px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-400 bg-white text-xs font-semibold text-slate-600 cursor-pointer shadow-sm appearance-none pr-8 relative"
        >
          <option value="today">Today</option>
          <option value="week">Last 7 Days</option>
          <option value="month">Last 30 Days</option>
          <option value="year">Last Year</option>
        </select>
        
        <button 
          @click="fetchAnalytics" 
          :disabled="loading"
          class="p-2.5 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 transition-all cursor-pointer shadow-sm flex items-center justify-center"
          title="Refresh Statistics"
        >
          <RefreshCw :class="['w-4 h-4 text-slate-500', loading ? 'animate-spin' : '']" />
        </button>
      </div>
    </div>

    <!-- Analytics View -->
    <div v-if="activeView === 'analytics'">

      <!-- Key Metrics Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left mb-6">
        
        <!-- Total Bookings -->
        <div class="bg-white rounded-xl p-5 shadow-sm border border-gray-100 flex flex-col justify-between min-h-[140px] hover:translate-y-[-2px] transition-all">
          <div class="flex items-center justify-between">
            <div class="p-3 bg-blue-50 border border-blue-100 rounded-xl text-blue-600">
              <Users class="w-5 h-5" />
            </div>
            <span 
              :class="[
                'text-sm font-semibold flex items-center',
                stats.total_bookings_change >= 0 ? 'text-green-600' : 'text-rose-600'
              ]"
            >
              <TrendingUp v-if="stats.total_bookings_change >= 0" class="w-4 h-4 mr-1" />
              <TrendingDown v-else class="w-4 h-4 mr-1" />
              {{ stats.total_bookings_change >= 0 ? '+' : '' }}{{ stats.total_bookings_change }}%
            </span>
          </div>
          <div class="mt-4">
            <h3 class="text-2xl font-bold text-slate-800 tracking-tight">{{ stats.total_bookings }}</h3>
            <p class="text-[11px] text-slate-400 font-bold uppercase tracking-wider mt-0.5">Total Bookings</p>
          </div>
        </div>

        <!-- Completed Sessions -->
        <div class="bg-white rounded-xl p-5 shadow-sm border border-gray-100 flex flex-col justify-between min-h-[140px] hover:translate-y-[-2px] transition-all">
          <div class="flex items-center justify-between">
            <div class="p-3 bg-green-50 border border-green-100 rounded-xl text-green-600">
              <Calendar class="w-5 h-5" />
            </div>
            <span 
              :class="[
                'text-sm font-semibold flex items-center',
                stats.completed_bookings_change >= 0 ? 'text-green-600' : 'text-rose-600'
              ]"
            >
              <TrendingUp v-if="stats.completed_bookings_change >= 0" class="w-4 h-4 mr-1" />
              <TrendingDown v-else class="w-4 h-4 mr-1" />
              {{ stats.completed_bookings_change >= 0 ? '+' : '' }}{{ stats.completed_bookings_change }}%
            </span>
          </div>
          <div class="mt-4">
            <h3 class="text-2xl font-bold text-slate-800 tracking-tight">{{ stats.completed_bookings }}</h3>
            <p class="text-[11px] text-slate-400 font-bold uppercase tracking-wider mt-0.5">Completed Sessions</p>
          </div>
        </div>

        <!-- Avg Session Duration -->
        <div class="bg-white rounded-xl p-5 shadow-sm border border-gray-100 flex flex-col justify-between min-h-[140px] hover:translate-y-[-2px] transition-all">
          <div class="flex items-center justify-between">
            <div class="p-3 bg-emerald-50 border border-emerald-100 rounded-xl text-emerald-600">
              <Clock class="w-5 h-5" />
            </div>
            <span 
              :class="[
                'text-sm font-semibold flex items-center',
                stats.avg_session_duration_change >= 0 ? 'text-green-600' : 'text-rose-600'
              ]"
            >
              <TrendingUp v-if="stats.avg_session_duration_change >= 0" class="w-4 h-4 mr-1" />
              <TrendingDown v-else class="w-4 h-4 mr-1" />
              {{ stats.avg_session_duration_change >= 0 ? '+' : '' }}{{ stats.avg_session_duration_change }}%
            </span>
          </div>
          <div class="mt-4">
            <h3 class="text-2xl font-bold text-slate-800 tracking-tight">{{ stats.avg_session_duration }}h</h3>
            <p class="text-[11px] text-slate-400 font-bold uppercase tracking-wider mt-0.5">Avg. Session Duration</p>
          </div>
        </div>

        <!-- Avg Occupancy -->
        <div class="bg-white rounded-xl p-5 shadow-sm border border-gray-100 flex flex-col justify-between min-h-[140px] hover:translate-y-[-2px] transition-all">
          <div class="flex items-center justify-between">
            <div class="p-3 bg-orange-50 border border-orange-100 rounded-xl text-orange-600">
              <BarChart3 class="w-5 h-5" />
            </div>
            <span 
              :class="[
                'text-sm font-semibold flex items-center',
                stats.occupancy_rate_change >= 0 ? 'text-green-600' : 'text-rose-600'
              ]"
            >
              <TrendingUp v-if="stats.occupancy_rate_change >= 0" class="w-4 h-4 mr-1" />
              <TrendingDown v-else class="w-4 h-4 mr-1" />
              {{ stats.occupancy_rate_change >= 0 ? '+' : '' }}{{ stats.occupancy_rate_change }}%
            </span>
          </div>
          <div class="mt-4">
            <h3 class="text-2xl font-bold text-slate-800 tracking-tight">{{ stats.occupancy_rate }}%</h3>
            <p class="text-[11px] text-slate-400 font-bold uppercase tracking-wider mt-0.5">Avg. Occupancy Rate</p>
          </div>
        </div>
      </div>

      <!-- Charts Section -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 text-left mb-6">
        
        <!-- Booking Trends Bar Chart -->
        <div class="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col justify-between">
          <div>
            <h2 class="text-sm font-bold text-slate-800 uppercase tracking-wider mb-1">Booking Trends</h2>
            <p class="text-[10px] text-slate-400 font-semibold mb-6">Total bookings distribution over selected time duration.</p>
          </div>
          
          <div class="h-64 flex items-end justify-between space-x-2 border-b border-slate-100 pb-2">
            <div
              v-for="(day, index) in bookingTrends"
              :key="index"
              class="flex-1 h-full flex flex-col justify-end items-center group cursor-pointer relative"
            >
              <!-- Hover details popover -->
              <div class="opacity-0 group-hover:opacity-100 transition-opacity bg-slate-800 text-white text-[9px] font-bold py-1 px-2 rounded absolute mb-2 -translate-y-16 shadow pointer-events-none z-20">
                {{ day.value }} bookings
              </div>
              
              <!-- Bar wrapper container to allow proper percentage height rendering -->
              <div class="w-full h-44 flex items-end relative">
                <div 
                  class="w-full bg-gradient-to-t from-emerald-600 to-teal-500 rounded-t-md transition-all group-hover:brightness-105"
                  :style="{ height: (day.value / (Math.max(...bookingTrends.map(d => d.value)) || 1) * 100) + '%' }"
                ></div>
              </div>
              
              <span class="text-[10px] font-bold text-slate-400 mt-2 truncate w-full text-center">{{ day.label }}</span>
            </div>
            <div v-if="bookingTrends.length === 0" class="w-full h-full flex items-center justify-center text-slate-400 text-xs italic">
              No booking trend data for this period
            </div>
          </div>
        </div>

        <!-- Peak Hours Slots Chart -->
        <div class="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col justify-between">
          <div>
            <h2 class="text-sm font-bold text-slate-800 uppercase tracking-wider mb-1">Peak Occupancy Hours</h2>
            <p class="text-[10px] text-slate-400 font-semibold mb-6">Distribution of session booking times across high-traffic hours.</p>
          </div>

          <div class="space-y-4 flex-1 flex flex-col justify-center">
            <div
              v-for="hour in peakHours"
              :key="hour.time"
              class="flex items-center space-x-3"
            >
              <span class="text-[11px] font-bold text-slate-500 w-16 uppercase tracking-wider">{{ hour.time }}</span>
              <div class="flex-1 bg-slate-50 rounded-xl h-6 overflow-hidden border border-slate-100 relative">
                <div
                  class="h-full bg-gradient-to-r from-emerald-600 to-teal-500 rounded-xl transition-all"
                  :style="{ width: hour.percentage + '%' }"
                ></div>
                <span class="absolute inset-y-0 right-3 flex items-center text-[10px] font-bold text-slate-600">{{ hour.bookings }} Bookings</span>
              </div>
            </div>
            <div v-if="peakHours.length === 0" class="text-center py-8 text-slate-400 text-xs italic">
              No traffic data available for this range
            </div>
          </div>
        </div>
      </div>

      <!-- Gender & Academic Level Booking Analytics Charts Section -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 text-left mb-6">
        
        <!-- Gender-wise Booking Donut Chart -->
        <div class="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col justify-between min-h-[320px]">
          <div>
            <div class="flex items-center justify-between mb-1">
              <h2 class="text-sm font-bold text-slate-800 uppercase tracking-wider flex items-center space-x-2">
                <Users class="w-4 h-4 text-blue-600" />
                <span>Gender-Wise Bookings</span>
              </h2>
              <span class="text-xs text-slate-400 font-semibold">{{ timeRangeDescription }}</span>
            </div>
            <p class="text-[10px] text-slate-400 font-semibold mb-6">Distribution of seat bookings by student & section gender.</p>
          </div>

          <div class="flex flex-col sm:flex-row items-center justify-around space-y-6 sm:space-y-0 sm:space-x-4 py-4">
            <!-- SVG Donut Chart -->
            <div class="relative w-36 h-36 flex items-center justify-center">
              <svg class="w-full h-full transform -rotate-90" viewBox="0 0 120 120">
                <circle
                  cx="60"
                  cy="60"
                  r="50"
                  fill="transparent"
                  stroke="#f8fafc"
                  stroke-width="12"
                />
                <circle
                  v-for="(seg, idx) in genderDonutSegments"
                  :key="idx"
                  cx="60"
                  cy="60"
                  r="50"
                  fill="transparent"
                  :stroke="seg.color"
                  stroke-width="12"
                  :stroke-dasharray="seg.strokeDasharray"
                  :stroke-dashoffset="seg.strokeDashoffset"
                  stroke-linecap="round"
                  class="transition-all duration-500"
                />
              </svg>
              <div class="absolute flex flex-col items-center justify-center">
                <span class="text-3xl font-black text-slate-800 tracking-tight">{{ genderTotal }}</span>
                <span class="text-[9px] font-bold text-slate-400 uppercase tracking-wider font-extrabold mt-0.5">Bookings</span>
              </div>
            </div>

            <!-- Legend -->
            <div class="space-y-3.5 text-left w-full sm:w-auto">
              <!-- Male -->
              <div class="flex items-center justify-between sm:justify-start sm:space-x-8">
                <div class="flex items-center space-x-2.5">
                  <span class="w-3 h-3 rounded-full bg-blue-600 ring-4 ring-blue-50"></span>
                  <span class="text-xs font-bold text-slate-600">Boys / Male</span>
                </div>
                <div class="text-right">
                  <span class="text-xs font-extrabold text-slate-800 mr-1.5">{{ genderStats.male }}</span>
                  <span class="text-[10px] text-slate-400 font-bold">({{ genderTotal ? Math.round((genderStats.male / genderTotal) * 100) : 0 }}%)</span>
                </div>
              </div>

              <!-- Female -->
              <div class="flex items-center justify-between sm:justify-start sm:space-x-8">
                <div class="flex items-center space-x-2.5">
                  <span class="w-3 h-3 rounded-full bg-pink-500 ring-4 ring-pink-50"></span>
                  <span class="text-xs font-bold text-slate-600">Girls / Female</span>
                </div>
                <div class="text-right">
                  <span class="text-xs font-extrabold text-slate-800 mr-1.5">{{ genderStats.female }}</span>
                  <span class="text-[10px] text-slate-400 font-bold">({{ genderTotal ? Math.round((genderStats.female / genderTotal) * 100) : 0 }}%)</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Academic Level-wise Booking Chart -->
        <div class="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col justify-between min-h-[320px]">
          <div>
            <div class="flex items-center justify-between mb-1">
              <h2 class="text-sm font-bold text-slate-800 uppercase tracking-wider flex items-center space-x-2">
                <GraduationCap class="w-4 h-4 text-emerald-600" />
                <span>Level-Wise Bookings</span>
              </h2>
              <span class="text-xs text-slate-400 font-semibold">{{ timeRangeDescription }}</span>
            </div>
            <p class="text-[10px] text-slate-400 font-semibold mb-6">Breakdown of bookings by academic level (PRC, CAF, Final Year).</p>
          </div>

          <div class="space-y-4 flex-1 flex flex-col justify-center">
            <div
              v-for="lvl in levelBars"
              :key="lvl.name"
              class="flex items-center space-x-3"
            >
              <span class="text-[11px] font-bold text-slate-600 w-24 uppercase tracking-wider truncate">{{ lvl.name }}</span>
              <div class="flex-1 bg-slate-50 rounded-xl h-6 overflow-hidden border border-slate-100 relative">
                <div
                  :class="['h-full bg-gradient-to-r transition-all duration-500', lvl.color]"
                  :style="{ width: lvl.percentage + '%' }"
                ></div>
                <span class="absolute inset-y-0 right-3 flex items-center text-[10px] font-extrabold text-slate-700">
                  {{ lvl.count }} Bookings ({{ lvl.percentage }}%)
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Book Analytics Charts Section -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 text-left mb-6">
        <!-- Books Status Donut Chart -->
        <div class="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col justify-between min-h-[320px]">
          <div>
            <div class="flex items-center justify-between mb-1">
              <h2 class="text-sm font-bold text-slate-800 uppercase tracking-wider">Books</h2>
              <span class="text-xs text-slate-400 font-semibold">{{ timeRangeDescription }}</span>
            </div>
            <p class="text-[10px] text-slate-400 font-semibold mb-6">Overview of book borrowing activities and reservation statuses.</p>
          </div>

          <div class="flex flex-col sm:flex-row items-center justify-around space-y-6 sm:space-y-0 sm:space-x-4 py-4">
            <!-- SVG Donut Chart -->
            <div class="relative w-36 h-36 flex items-center justify-center">
              <svg class="w-full h-full transform -rotate-90" viewBox="0 0 120 120">
                <!-- Outer track circle -->
                <circle
                  cx="60"
                  cy="60"
                  r="50"
                  fill="transparent"
                  stroke="#f8fafc"
                  stroke-width="12"
                />
                <!-- Active segments -->
                <circle
                  v-for="(seg, idx) in donutSegments"
                  :key="idx"
                  cx="60"
                  cy="60"
                  r="50"
                  fill="transparent"
                  :stroke="seg.color"
                  stroke-width="12"
                  :stroke-dasharray="seg.strokeDasharray"
                  :stroke-dashoffset="seg.strokeDashoffset"
                  stroke-linecap="round"
                  class="transition-all duration-500"
                />
              </svg>
              <!-- Center text -->
              <div class="absolute flex flex-col items-center justify-center">
                <span class="text-3xl font-black text-slate-800 tracking-tight">{{ bookStats.total }}</span>
                <span class="text-[9px] font-bold text-slate-400 uppercase tracking-wider font-extrabold mt-0.5">Total</span>
              </div>
            </div>

            <!-- Legend -->
            <div class="space-y-3.5 text-left w-full sm:w-auto">
              <!-- Issued -->
              <div class="flex items-center justify-between sm:justify-start sm:space-x-8">
                <div class="flex items-center space-x-2.5">
                  <span class="w-3 h-3 rounded-full bg-blue-600 ring-4 ring-blue-50"></span>
                  <span class="text-xs font-bold text-slate-500">Issued</span>
                </div>
                <span class="text-xs font-extrabold text-slate-700">{{ bookStats.issued }}</span>
              </div>
              <!-- Returned -->
              <div class="flex items-center justify-between sm:justify-start sm:space-x-8">
                <div class="flex items-center space-x-2.5">
                  <span class="w-3 h-3 rounded-full bg-orange-600 ring-4 ring-orange-50"></span>
                  <span class="text-xs font-bold text-slate-500">Returned</span>
                </div>
                <span class="text-xs font-extrabold text-slate-700">{{ bookStats.returned }}</span>
              </div>
              <!-- Pending -->
              <div class="flex items-center justify-between sm:justify-start sm:space-x-8">
                <div class="flex items-center space-x-2.5">
                  <span class="w-3 h-3 rounded-full bg-emerald-600 ring-4 ring-emerald-50"></span>
                  <span class="text-xs font-bold text-slate-500">Pending</span>
                </div>
                <span class="text-xs font-extrabold text-slate-700">{{ bookStats.pending }}</span>
              </div>
            </div>
          </div>

          <div class="flex justify-end pt-4 border-t border-slate-50 mt-4">
            <router-link :to="{ name: 'librarian-reservations' }" class="text-[10px] font-extrabold text-emerald-700 hover:text-emerald-800 transition-colors uppercase tracking-wider flex items-center space-x-1 cursor-pointer">
              <span>See list</span>
              <span>&rarr;</span>
            </router-link>
          </div>
        </div>

        <!-- Most Issued Books Bar Chart -->
        <div class="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col justify-between min-h-[320px]">
          <div>
            <div class="flex items-center justify-between mb-1">
              <h2 class="text-sm font-bold text-slate-800 uppercase tracking-wider">Most Issued</h2>
              <span class="text-xs text-slate-400 font-semibold">{{ timeRangeDescription }}</span>
            </div>
            <p class="text-[10px] text-slate-400 font-semibold mb-6">Top borrowed books in the selected library.</p>
          </div>

          <div class="h-48 flex items-end justify-between space-x-4 border-b border-slate-100 pb-2 relative pl-10">
            <!-- Y-Axis Lines and Labels -->
            <div class="absolute left-0 inset-y-0 w-8 flex flex-col justify-between text-[9px] font-bold text-slate-400 pr-2 border-r border-slate-100 pb-2">
              <span>{{ yAxisMax }}</span>
              <span>{{ Math.round(yAxisMax * 0.75) }}</span>
              <span>{{ Math.round(yAxisMax * 0.5) }}</span>
              <span>{{ Math.round(yAxisMax * 0.25) }}</span>
              <span>0</span>
            </div>

            <!-- Bar Columns -->
            <div
              v-for="(book, index) in mostIssuedBooks"
              :key="index"
              class="flex-1 h-full flex flex-col justify-end items-center group cursor-pointer relative"
            >
              <!-- Popover details -->
              <div class="opacity-0 group-hover:opacity-100 transition-opacity bg-slate-800 text-white text-[9px] font-bold py-1 px-2 rounded absolute mb-2 -translate-y-16 shadow pointer-events-none z-20">
                {{ book.count }} issued
              </div>

              <!-- Bar Track and Active Fill -->
              <div class="w-3.5 h-full bg-slate-50/50 border border-slate-100 rounded-full flex items-end justify-center relative overflow-hidden">
                <div
                  class="w-full bg-gradient-to-t from-emerald-600 to-teal-500 rounded-full transition-all duration-500 group-hover:brightness-105"
                  :style="{ height: (book.count / yAxisMax * 100) + '%' }"
                ></div>
              </div>

              <!-- X-Axis Label -->
              <span class="text-[9px] font-bold text-slate-400 mt-2 truncate w-14 text-center" :title="book.title">
                {{ book.title }}
              </span>
            </div>
            <div v-if="mostIssuedBooks.length === 0" class="w-full h-full flex items-center justify-center text-slate-400 text-xs italic">
              No borrowing statistics for this period
            </div>
          </div>
        </div>
      </div>

      <!-- Student Activity & Popular Seats lists -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 text-left">
        
        <!-- Top Active Students List -->
        <div class="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div class="p-5 border-b border-slate-50">
            <h2 class="text-sm font-bold text-slate-800 uppercase tracking-wider">Top Active Students</h2>
            <p class="text-[10px] text-slate-400 font-semibold mt-0.5">Registered students with most library study time.</p>
          </div>
          
          <div class="p-5 space-y-3.5">
            <div v-if="topStudents.length === 0" class="text-center py-8">
              <Award class="w-8 h-8 text-slate-200 mx-auto mb-2" />
              <p class="text-[11px] text-slate-400 font-bold uppercase tracking-wider">No student data available</p>
            </div>
            
            <div
              v-else
              v-for="(student, index) in topStudents"
              :key="student.id"
              class="flex items-center justify-between p-3.5 bg-slate-50/50 hover:bg-slate-50 border border-slate-100 rounded-xl transition-colors"
            >
              <div class="flex items-center space-x-3">
                <div class="w-7 h-7 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100 flex items-center justify-center font-bold text-xs">
                  #{{ index + 1 }}
                </div>
                <div>
                  <h4 class="font-bold text-slate-700 text-xs">{{ student.name }}</h4>
                  <p class="text-[10px] text-slate-400 font-semibold mt-0.5">{{ student.hours || 0 }} Hours Logged</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Most Popular Seats List -->
        <div class="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div class="p-5 border-b border-slate-50">
            <h2 class="text-sm font-bold text-slate-800 uppercase tracking-wider">Most Popular Seats</h2>
            <p class="text-[10px] text-slate-400 font-semibold mt-0.5">Top reservation spots and seat utility percentage rates.</p>
          </div>

          <div class="p-5 space-y-3.5">
            <div v-if="popularSeats.length === 0" class="text-center py-8">
              <MapPin class="w-8 h-8 text-slate-200 mx-auto mb-2" />
              <p class="text-[11px] text-slate-400 font-bold uppercase tracking-wider">No seat statistics available</p>
            </div>

            <div
              v-else
              v-for="seat in popularSeats"
              :key="seat.number"
              class="flex items-center justify-between p-3.5 bg-slate-50/50 hover:bg-slate-50 border border-slate-100 rounded-xl transition-colors"
            >
              <div class="flex items-center space-x-3">
                <div class="p-2 bg-emerald-50 border border-emerald-100 rounded-lg text-emerald-700">
                  <MapPin class="w-4 h-4" />
                </div>
                <div>
                  <h4 class="font-bold text-slate-700 text-xs">Seat {{ seat.number }}</h4>
                  <p class="text-[10px] text-slate-400 font-semibold mt-0.5">{{ seat.bookings }} total reservations</p>
                </div>
              </div>

              <div class="text-right">
                <span class="text-xs font-bold text-slate-700">{{ seat.utilization }}%</span>
                <p class="text-[9px] text-slate-400 font-bold uppercase tracking-wider">utilization</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Reports View -->
    <div v-if="activeView === 'reports'">
      <ReportsPage />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch, defineAsyncComponent, computed } from 'vue';
import {
  Users,
  Calendar,
  Clock,
  BarChart3,
  TrendingUp,
  TrendingDown,
  RefreshCw,
  Award,
  MapPin,
  FileBarChart,
  GraduationCap
} from 'lucide-vue-next';
import { librarianAPI } from '@/librarian/services/librarianApi';

// Lazy-load ReportsPage to avoid loading its heavy code unless the Reports tab is active
const ReportsPage = defineAsyncComponent(() => import('@/librarian/components/Reports/ReportsPage.vue'));

const activeView = ref<'analytics' | 'reports'>('analytics');
const loading = ref(false);
const timeRange = ref('week');
const stats = ref({
  total_bookings: 0,
  total_bookings_change: 0,
  active_bookings: 0,
  completed_bookings: 0,
  completed_bookings_change: 0,
  completion_rate: 0,
  no_show_rate: 0,
  avg_session_duration: 0,
  avg_session_duration_change: 0,
  total_seats: 0,
  available_seats: 0,
  occupancy_rate: 0,
  occupancy_rate_change: 0
});

const bookingTrends = ref<any[]>([]);
const peakHours = ref<any[]>([]);
const topStudents = ref<any[]>([]);
const popularSeats = ref<any[]>([]);

const genderStats = ref({
  male: 0,
  female: 0,
  mixed: 0,
  total: 0
});

const levelStats = ref({
  PRC: 0,
  CAF: 0,
  Final: 0,
  all: 0,
  total: 0
});

const genderTotal = computed(() => {
  if (genderStats.value.total && genderStats.value.total > 0) {
    return genderStats.value.total;
  }
  return (genderStats.value.male || 0) + (genderStats.value.female || 0);
});

const genderDonutSegments = computed(() => {
  const total = genderTotal.value;
  if (total === 0) return [];
  const segments = [];
  let accumulated = 0;

  if (genderStats.value.male > 0) {
    const len = (genderStats.value.male / total) * 314.159;
    const offset = (accumulated / total) * 314.159;
    segments.push({
      color: '#2563eb',
      strokeDasharray: `${len} 314.159`,
      strokeDashoffset: -offset
    });
    accumulated += genderStats.value.male;
  }

  if (genderStats.value.female > 0) {
    const len = (genderStats.value.female / total) * 314.159;
    const offset = (accumulated / total) * 314.159;
    segments.push({
      color: '#ec4899',
      strokeDasharray: `${len} 314.159`,
      strokeDashoffset: -offset
    });
    accumulated += genderStats.value.female;
  }

  return segments;
});

const levelTotal = computed(() => (levelStats.value.PRC + levelStats.value.CAF + levelStats.value.Final));

const levelBars = computed(() => {
  const total = levelTotal.value || 1;
  return [
    { name: 'PRC Level', count: levelStats.value.PRC, percentage: Math.round((levelStats.value.PRC / total) * 100), color: 'from-indigo-600 to-indigo-400' },
    { name: 'CAF Level', count: levelStats.value.CAF, percentage: Math.round((levelStats.value.CAF / total) * 100), color: 'from-amber-500 to-amber-400' },
    { name: 'Final Level', count: levelStats.value.Final, percentage: Math.round((levelStats.value.Final / total) * 100), color: 'from-emerald-600 to-emerald-400' }
  ];
});

const bookStats = ref({
  issued: 0,
  returned: 0,
  pending: 0,
  total: 0
});
const mostIssuedBooks = ref<any[]>([]);

const timeRangeDescription = computed(() => {
  const mapping: Record<string, string> = {
    today: 'Today',
    week: 'Last 7 Days',
    month: 'Last 30 Days',
    year: 'Last Year'
  };
  return mapping[timeRange.value] || 'Last 7 Days';
});

const yAxisMax = computed(() => {
  const max = Math.max(...mostIssuedBooks.value.map(b => b.count), 0);
  if (max === 0) return 10;
  return Math.ceil(max / 5) * 5;
});

const donutSegments = computed(() => {
  const total = bookStats.value.total;
  if (total === 0) {
    return [];
  }

  const segments = [];
  let accumulated = 0;

  if (bookStats.value.issued > 0) {
    const len = (bookStats.value.issued / total) * 314.159;
    const offset = (accumulated / total) * 314.159;
    segments.push({
      color: '#2563eb',
      strokeDasharray: `${len} 314.159`,
      strokeDashoffset: -offset
    });
    accumulated += bookStats.value.issued;
  }

  if (bookStats.value.returned > 0) {
    const len = (bookStats.value.returned / total) * 314.159;
    const offset = (accumulated / total) * 314.159;
    segments.push({
      color: '#ea580c',
      strokeDasharray: `${len} 314.159`,
      strokeDashoffset: -offset
    });
    accumulated += bookStats.value.returned;
  }

  if (bookStats.value.pending > 0) {
    const len = (bookStats.value.pending / total) * 314.159;
    const offset = (accumulated / total) * 314.159;
    segments.push({
      color: '#10b981',
      strokeDasharray: `${len} 314.159`,
      strokeDashoffset: -offset
    });
    accumulated += bookStats.value.pending;
  }

  return segments;
});

const fetchAnalytics = async () => {
  loading.value = true;
  try {
    const data = await librarianAPI.getAnalytics(timeRange.value);
    stats.value = data.stats;
    
    // Map daily trends
    bookingTrends.value = data.dailyTrends.map((d: any) => ({
      label: d.day,
      value: d.bookings
    }));

    // Map peak hours
    const maxBookings = Math.max(...data.popularTimeSlots.map((s: any) => s.bookings), 1);
    peakHours.value = data.popularTimeSlots.map((s: any) => ({
      time: formatTime(s.time),
      bookings: s.bookings,
      percentage: Math.round((s.bookings / maxBookings) * 100)
    }));

    // Map top students
    topStudents.value = data.topStudents;

    // Map popular seats
    popularSeats.value = data.popularSeats;

    // Map gender and level stats
    genderStats.value = data.genderStats || { male: 0, female: 0, mixed: 0, total: 0 };
    levelStats.value = data.levelStats || { PRC: 0, CAF: 0, Final: 0, all: 0, total: 0 };

    // Map book stats
    bookStats.value = data.bookStats || { issued: 0, returned: 0, pending: 0, total: 0 };
    mostIssuedBooks.value = data.mostIssuedBooks || [];

  } catch (error) {
    console.error('Error fetching analytics:', error);
  } finally {
    loading.value = false;
  }
};

const formatTime = (timeStr: string) => {
  const [hours] = timeStr.split(':');
  const h = parseInt(hours);
  const ampm = h >= 12 ? 'PM' : 'AM';
  const hour12 = h % 12 || 12;
  return `${hour12}:00 ${ampm}`;
};

watch(timeRange, () => {
  fetchAnalytics();
});

onMounted(() => {
  fetchAnalytics();
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap');

.font-outfit {
  font-family: 'Outfit', sans-serif;
}
</style>
