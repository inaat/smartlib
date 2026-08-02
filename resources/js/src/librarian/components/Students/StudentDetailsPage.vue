<template>
  <div class="p-6 space-y-6 font-outfit">
    <!-- Header/Back -->
    <div class="flex items-center justify-between">
      <div class="flex items-center space-x-4">
        <button 
          @click="$router.push('/librarian/students')" 
          class="p-2 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 text-slate-550 transition-colors cursor-pointer shadow-sm"
          title="Back to Students List"
        >
          <ChevronLeft class="w-5 h-5" />
        </button>
        <div class="text-left">
          <h2 class="text-lg font-bold text-slate-800">Student Profile</h2>
          <p class="text-slate-400 text-xs mt-0.5 font-medium">Detailed activity and history</p>
        </div>
      </div>
      <div v-if="student" class="flex items-center space-x-2.5">
        <button 
          @click="student.is_banned ? unbanStudent(student) : openBanModal()" 
          :class="[
            'px-4 py-2 border rounded-xl transition-all flex items-center space-x-2 text-xs font-bold cursor-pointer shadow-sm',
            student.is_banned 
              ? 'border-green-200 text-green-700 bg-green-50 hover:bg-green-100' 
              : 'border-orange-200 text-orange-700 bg-orange-50 hover:bg-orange-100'
          ]"
        >
          <UserCheck v-if="student.is_banned" class="w-4 h-4" />
          <BanIcon v-else class="w-4 h-4" />
          <span>{{ student.is_banned ? 'Lift Restriction' : 'Restrict Student' }}</span>
        </button>
        
        <button 
          @click="openEditModal" 
          class="px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl transition-colors flex items-center space-x-2 text-xs font-bold cursor-pointer shadow-sm"
        >
          <Edit2 class="w-4 h-4" />
          <span>Edit Details</span>
        </button>

        <button 
          @click="confirmDelete" 
          class="px-4 py-2 bg-red-50 border border-red-200 rounded-xl text-red-500 hover:bg-red-100 transition-all flex items-center space-x-2 text-xs font-bold cursor-pointer shadow-sm"
          title="Delete Student"
        >
          <Trash2 class="w-4 h-4" />
          <span>Delete Student</span>
        </button>
      </div>
    </div>

    <div v-if="loading" class="flex flex-col items-center justify-center py-24">
      <RefreshCw class="w-10 h-10 text-emerald-600 animate-spin mb-4" />
      <p class="text-slate-500 font-semibold uppercase tracking-wider text-xs animate-pulse">Fetching student data...</p>
    </div>

    <template v-else-if="student">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <!-- Sidebar: Info Card -->
        <div class="space-y-6">
          <div class="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden text-left">
            <div class="h-32 bg-gradient-to-br from-emerald-600 to-teal-700 relative overflow-hidden">
              <div class="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
              <div class="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full -ml-12 -mb-12"></div>
            </div>
            <div class="px-6 pb-6 relative">
              <div class="relative w-28 h-28 -mt-14 mb-4 z-10">
                <div class="w-full h-full rounded-2xl bg-white border-4 border-white shadow-lg flex items-center justify-center overflow-hidden">
                  <img v-if="student.profile_picture" :src="getProfilePictureUrl(student.profile_picture)" class="w-full h-full object-cover" />
                  <div v-else class="w-full h-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center text-white text-3xl font-bold">
                    {{ student.name.charAt(0).toUpperCase() }}
                  </div>
                </div>
                <div :class="[
                  'absolute bottom-1 right-[-6px] px-2.5 py-0.5 rounded-lg text-[9px] font-bold uppercase tracking-widest text-white border border-white shadow-sm',
                  student.is_banned ? 'bg-red-500' : (student.is_active ? 'bg-green-500' : 'bg-slate-400')
                ]">
                  {{ student.is_banned ? 'Banned' : (student.is_active ? 'Active' : 'Inactive') }}
                </div>
              </div>
              <h2 class="text-lg font-bold text-slate-800 tracking-tight leading-snug">{{ student.name }}</h2>
              <p class="text-xs font-semibold text-slate-400 mt-1">Student CRN: {{ student.crn }}</p>
              
              <div class="mt-6 space-y-3.5">
                <div class="flex items-center space-x-3.5 text-xs font-semibold text-slate-600">
                  <div class="w-8 h-8 rounded-lg bg-emerald-50/50 border border-emerald-100/30 flex items-center justify-center flex-shrink-0 text-emerald-600">
                    <Mail class="w-4 h-4" />
                  </div>
                  <span class="truncate">{{ student.email }}</span>
                </div>
                <div class="flex items-center space-x-3.5 text-xs font-semibold text-slate-600">
                  <div class="w-8 h-8 rounded-lg bg-emerald-50/50 border border-emerald-100/30 flex items-center justify-center flex-shrink-0 text-emerald-600">
                    <Phone class="w-4 h-4" />
                  </div>
                  <span>{{ student.phone || 'No phone number' }}</span>
                </div>
                <div class="flex items-center space-x-3.5 text-xs font-semibold text-slate-600">
                  <div class="w-8 h-8 rounded-lg bg-emerald-50/50 border border-emerald-100/30 flex items-center justify-center flex-shrink-0 text-emerald-600">
                    <GraduationCap class="w-4 h-4" />
                  </div>
                  <span>Level: {{ student.ca_level || 'N/A' }}</span>
                </div>
                <div class="flex items-center space-x-3.5 text-xs font-semibold text-slate-600">
                  <div class="w-8 h-8 rounded-lg bg-emerald-50/50 border border-emerald-100/30 flex items-center justify-center flex-shrink-0 text-emerald-600">
                    <Calendar class="w-4 h-4" />
                  </div>
                  <span>Joined {{ formatDate(student.created_at) }}</span>
                </div>
              </div>

              <div v-if="student.active_subscription" class="mt-6 p-4 bg-gradient-to-br from-emerald-50 to-teal-50/40 rounded-xl border border-emerald-100/60 text-left relative overflow-hidden">
                <div class="flex items-center justify-between mb-3 relative z-10">
                  <span class="text-[9px] font-semibold text-emerald-600 uppercase tracking-widest bg-white/80 border border-emerald-100 px-2 py-0.5 rounded-md">Membership Pass</span>
                  <CheckCircle2 class="w-4 h-4 text-emerald-600" />
                </div>
                <p class="font-bold text-emerald-900 text-sm relative z-10">{{ student.active_subscription.subscription_plan?.name }}</p>
                <p class="text-[10px] text-emerald-600 font-semibold mt-1.5 relative z-10">Expires {{ formatDate(student.active_subscription.expires_at) }}</p>
                <div class="absolute bottom-0 right-0 w-16 h-16 bg-emerald-100/10 rounded-full translate-x-4 translate-y-4"></div>
              </div>
            </div>
          </div>
        </div>

        <!-- Main Content: Tabs and Logs -->
        <div class="lg:col-span-2 space-y-6">
          <div class="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <!-- Pill-style Tab Navigation -->
            <div class="flex items-center space-x-1.5 bg-slate-50 border border-slate-100 p-1 rounded-xl w-max mb-6">
              <button 
                v-for="tab in tabs" 
                :key="tab.id"
                @click="activeTab = tab.id"
                :class="[
                  'px-4 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer',
                  activeTab === tab.id 
                    ? 'bg-white text-emerald-700 shadow-sm border border-slate-200/40' 
                    : 'text-slate-500 hover:text-slate-800'
                ]"
              >
                {{ tab.label }}
              </button>
            </div>

            <!-- Tab Content -->
            <div class="space-y-4">
              <!-- Seat Bookings Tab (Redesigned with Detailed Attendance & Slot Info) -->
              <div v-if="activeTab === 'bookings'" class="space-y-3">
                <template v-if="sortedBookings.length > 0">
                  <div 
                    v-for="booking in sortedBookings" 
                    :key="booking.id"
                    class="p-4 bg-white border border-slate-100 rounded-2xl hover:border-slate-200 transition-all text-left shadow-sm space-y-3"
                  >
                    <!-- Top Row: Seat Info, Library & Status Badge -->
                    <div class="flex items-center justify-between border-b border-slate-50 pb-2.5">
                      <div class="flex items-center space-x-2.5">
                        <div class="w-8 h-8 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 font-bold text-xs">
                          <Armchair class="w-4 h-4" />
                        </div>
                        <div>
                          <h4 class="font-bold text-slate-800 text-xs leading-none">
                            Seat {{ booking.seat?.seat_number || 'N/A' }} 
                            <span class="text-slate-400 font-normal text-[11px]">({{ booking.seat?.floor?.name || booking.seat?.section?.floor?.name || '1st Floor' }})</span>
                          </h4>
                          <span class="text-[10px] font-medium text-slate-400 mt-0.5 block">
                            {{ booking.seat?.library?.name || 'Library Booking' }} • {{ formatDate(booking.booking_time) }}
                          </span>
                        </div>
                      </div>

                      <div class="flex items-center space-x-2">
                        <!-- Status Tag -->
                        <span 
                          :class="[
                            'text-[9px] font-semibold px-2.5 py-0.5 rounded-full uppercase tracking-wider border inline-flex items-center space-x-1.5',
                            booking.status === 'checked_in' ? 'bg-emerald-50 text-emerald-700 border-emerald-200' :
                            booking.status === 'booked' ? 'bg-amber-50 text-amber-700 border-amber-200' :
                            booking.status === 'checked_out' ? 'bg-slate-50 text-slate-600 border-slate-200' :
                            'bg-rose-50 text-rose-700 border-rose-200'
                          ]"
                        >
                          <span v-if="booking.status === 'checked_in'" class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                          <span>{{ booking.status === 'checked_in' ? 'Active Now' : (booking.status === 'booked' ? 'Pending Check-in' : booking.status.replace('_', ' ')) }}</span>
                        </span>
                      </div>
                    </div>

                    <!-- Details Row: Booking Slot, Check In, Check Out & Session Duration -->
                    <div class="grid grid-cols-1 sm:grid-cols-4 gap-2.5 pt-0.5">
                      <!-- Scheduled Slot -->
                      <div class="flex items-center space-x-2 bg-slate-50/60 p-2.5 rounded-xl border border-slate-100">
                        <div class="w-7 h-7 rounded-lg bg-blue-100/70 text-blue-700 flex items-center justify-center flex-shrink-0">
                          <Calendar class="w-3.5 h-3.5" />
                        </div>
                        <div>
                          <span class="text-[9px] font-semibold text-slate-400 uppercase tracking-wider block leading-none mb-0.5">Slot Time</span>
                          <span class="text-[11px] font-bold text-slate-800 leading-none">{{ formatTime(booking.booking_time) }} - {{ formatTime(booking.scheduled_end_time) }}</span>
                        </div>
                      </div>

                      <!-- Check In -->
                      <div class="flex items-center space-x-2 bg-slate-50/60 p-2.5 rounded-xl border border-slate-100">
                        <div class="w-7 h-7 rounded-lg bg-emerald-100/70 text-emerald-700 flex items-center justify-center flex-shrink-0">
                          <LogIn class="w-3.5 h-3.5" />
                        </div>
                        <div>
                          <span class="text-[9px] font-semibold text-slate-400 uppercase tracking-wider block leading-none mb-0.5">Check In</span>
                          <span class="text-[11px] font-bold text-slate-800 leading-none">{{ booking.check_in_time ? formatTime(booking.check_in_time) : (booking.status === 'checked_in' ? 'Checked In' : '--:--') }}</span>
                        </div>
                      </div>

                      <!-- Check Out -->
                      <div class="flex items-center space-x-2 bg-slate-50/60 p-2.5 rounded-xl border border-slate-100">
                        <div class="w-7 h-7 rounded-lg bg-rose-100/70 text-rose-700 flex items-center justify-center flex-shrink-0">
                          <LogOut class="w-3.5 h-3.5" />
                        </div>
                        <div>
                          <span class="text-[9px] font-semibold text-slate-400 uppercase tracking-wider block leading-none mb-0.5">Check Out</span>
                          <span class="text-[11px] font-bold text-slate-800 leading-none">{{ booking.check_out_time ? formatTime(booking.check_out_time) : (booking.status === 'checked_in' ? 'In Session' : '--:--') }}</span>
                        </div>
                      </div>

                      <!-- Duration -->
                      <div class="flex items-center space-x-2 bg-slate-50/60 p-2.5 rounded-xl border border-slate-100">
                        <div class="w-7 h-7 rounded-lg bg-indigo-100/70 text-indigo-700 flex items-center justify-center flex-shrink-0">
                          <Clock class="w-3.5 h-3.5" />
                        </div>
                        <div>
                          <span class="text-[9px] font-semibold text-slate-400 uppercase tracking-wider block leading-none mb-0.5">Duration</span>
                          <span class="text-[11px] font-bold text-slate-800 leading-none">{{ formatDuration(booking.total_minutes) || (booking.status === 'checked_in' ? 'Active' : '--') }}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </template>
                <div v-else class="flex flex-col items-center justify-center py-16 bg-white rounded-3xl border border-dashed border-slate-200 text-center">
                  <Search class="w-10 h-10 text-slate-200 mb-3" />
                  <p class="text-xs font-bold text-slate-400 uppercase tracking-widest">No seat bookings found</p>
                </div>
              </div>

              <!-- Attendance Tab (Redesigned) -->
              <div v-if="activeTab === 'attendance'" class="space-y-5">
                <!-- Attendance Stats Grid (4 Metrics) -->
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <!-- Stat 1: Total Recorded Visits -->
                  <div class="p-4 bg-slate-50/70 border border-slate-100 rounded-2xl flex items-center space-x-3 text-left">
                    <div class="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0">
                      <Clock class="w-5 h-5" />
                    </div>
                    <div>
                      <span class="text-[10px] font-semibold text-slate-400 uppercase tracking-wider block">Total Visits</span>
                      <span class="text-base font-bold text-slate-800">{{ student.attendance?.length || 0 }} Sessions</span>
                    </div>
                  </div>

                  <!-- Stat 2: Attendance This Month -->
                  <div class="p-4 bg-slate-50/70 border border-slate-100 rounded-2xl flex items-center space-x-3 text-left">
                    <div class="w-10 h-10 rounded-xl bg-purple-50 border border-purple-100 text-purple-600 flex items-center justify-center flex-shrink-0">
                      <Calendar class="w-5 h-5" />
                    </div>
                    <div>
                      <span class="text-[10px] font-semibold text-slate-400 uppercase tracking-wider block">This Month</span>
                      <span class="text-base font-bold text-slate-800">{{ attendanceThisMonth }} Visits</span>
                    </div>
                  </div>

                  <!-- Stat 3: Total Study Time -->
                  <div class="p-4 bg-slate-50/70 border border-slate-100 rounded-2xl flex items-center space-x-3 text-left">
                    <div class="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0">
                      <Zap class="w-5 h-5" />
                    </div>
                    <div>
                      <span class="text-[10px] font-semibold text-slate-400 uppercase tracking-wider block">Total Hours</span>
                      <span class="text-base font-bold text-slate-800">{{ formattedTotalHours }}</span>
                    </div>
                  </div>

                  <!-- Stat 4: Unique Days -->
                  <div class="p-4 bg-slate-50/70 border border-slate-100 rounded-2xl flex items-center space-x-3 text-left">
                    <div class="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 text-indigo-600 flex items-center justify-center flex-shrink-0">
                      <Calendar class="w-5 h-5" />
                    </div>
                    <div>
                      <span class="text-[10px] font-semibold text-slate-400 uppercase tracking-wider block">Active Days</span>
                      <span class="text-base font-bold text-slate-800">{{ uniqueAttendanceDays }} Days</span>
                    </div>
                  </div>
                </div>

                <!-- Detailed Attendance Log List (Filtered to This Month, 3 per page) -->
                <template v-if="currentMonthAttendance.length > 0">
                  <div class="space-y-3">
                    <div 
                      v-for="log in paginatedAttendance" 
                      :key="log.id"
                      class="p-4 bg-white border border-slate-100 rounded-2xl hover:border-slate-200 transition-all text-left shadow-sm space-y-3"
                    >
                      <!-- Top Row: Date, Status Badge & Entry Method -->
                      <div class="flex items-center justify-between border-b border-slate-50 pb-2.5">
                        <div class="flex items-center space-x-2.5">
                          <div class="w-8 h-8 rounded-xl bg-slate-100 border border-slate-200/60 flex items-center justify-center text-slate-500 font-bold text-xs">
                            <Calendar class="w-4 h-4" />
                          </div>
                          <div>
                            <h4 class="font-bold text-slate-800 text-xs leading-none">{{ formatDate(log.date) }}</h4>
                            <span class="text-[10px] font-medium text-slate-400 mt-0.5 block">
                              {{ log.library?.name || 'Library Entry' }}
                            </span>
                          </div>
                        </div>

                        <div class="flex items-center space-x-2">
                          <!-- Method Tag -->
                          <span 
                            :class="[
                              'text-[9px] font-semibold px-2 py-0.5 rounded-lg border uppercase tracking-wider',
                              log.marked_manually 
                                ? 'bg-purple-50 text-purple-700 border-purple-200' 
                                : 'bg-blue-50 text-blue-700 border-blue-200'
                            ]"
                          >
                            {{ log.marked_manually ? 'Manual Check' : 'QR Code' }}
                          </span>

                          <!-- Status Tag -->
                          <span 
                            :class="[
                              'text-[9px] font-semibold px-2.5 py-0.5 rounded-full uppercase tracking-wider border inline-flex items-center space-x-1.5',
                              !log.check_out_time 
                                ? 'bg-emerald-50 text-emerald-700 border-emerald-200' 
                                : 'bg-slate-50 text-slate-600 border-slate-200'
                            ]"
                          >
                            <span v-if="!log.check_out_time" class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                            <span>{{ !log.check_out_time ? 'Active Now' : 'Completed' }}</span>
                          </span>
                        </div>
                      </div>

                      <!-- Details Row: Check-in / Check-out Times & Duration -->
                      <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-0.5">
                        <!-- Check In -->
                        <div class="flex items-center space-x-2 bg-slate-50/60 p-2.5 rounded-xl border border-slate-100">
                          <div class="w-7 h-7 rounded-lg bg-emerald-100/70 text-emerald-700 flex items-center justify-center flex-shrink-0">
                            <LogIn class="w-3.5 h-3.5" />
                          </div>
                          <div>
                            <span class="text-[9px] font-semibold text-slate-400 uppercase tracking-wider block leading-none mb-0.5">Check In</span>
                            <span class="text-xs font-bold text-slate-800 leading-none">{{ formatLogTime(log.check_in_time) }}</span>
                          </div>
                        </div>

                        <!-- Check Out -->
                        <div class="flex items-center space-x-2 bg-slate-50/60 p-2.5 rounded-xl border border-slate-100">
                          <div class="w-7 h-7 rounded-lg bg-rose-100/70 text-rose-700 flex items-center justify-center flex-shrink-0">
                            <LogOut class="w-3.5 h-3.5" />
                          </div>
                          <div>
                            <span class="text-[9px] font-semibold text-slate-400 uppercase tracking-wider block leading-none mb-0.5">Check Out</span>
                            <span class="text-xs font-bold text-slate-800 leading-none">{{ log.check_out_time ? formatLogTime(log.check_out_time) : 'In Progress' }}</span>
                          </div>
                        </div>

                        <!-- Session Duration -->
                        <div class="flex items-center space-x-2 bg-slate-50/60 p-2.5 rounded-xl border border-slate-100">
                          <div class="w-7 h-7 rounded-lg bg-blue-100/70 text-blue-700 flex items-center justify-center flex-shrink-0">
                            <Clock class="w-3.5 h-3.5" />
                          </div>
                          <div>
                            <span class="text-[9px] font-semibold text-slate-400 uppercase tracking-wider block leading-none mb-0.5">Session Duration</span>
                            <span class="text-xs font-bold text-slate-800 leading-none">{{ formatDuration(log.total_minutes) || (log.check_out_time ? 'N/A' : 'Active') }}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- Pagination Controls -->
                  <div v-if="currentMonthAttendance.length > 0" class="flex flex-col sm:flex-row items-center justify-between border-t border-slate-100 pt-4 mt-2 gap-3 text-left">
                    <span class="text-xs font-semibold text-slate-500">
                      Showing {{ (attendancePage - 1) * attendancePerPage + 1 }} to {{ Math.min(attendancePage * attendancePerPage, currentMonthAttendance.length) }} of {{ currentMonthAttendance.length }} entries (This Month)
                    </span>
                    <div class="flex items-center space-x-2">
                      <button 
                        @click="attendancePage--" 
                        :disabled="attendancePage === 1"
                        class="px-3.5 py-1.5 bg-white border border-slate-200 text-slate-600 rounded-xl text-xs font-bold hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition-all cursor-pointer shadow-sm"
                      >
                        Previous
                      </button>
                      <span class="text-xs font-bold text-slate-700 px-2">
                        Page {{ attendancePage }} of {{ totalAttendancePages }}
                      </span>
                      <button 
                        @click="attendancePage++" 
                        :disabled="attendancePage >= totalAttendancePages"
                        class="px-3.5 py-1.5 bg-white border border-slate-200 text-slate-600 rounded-xl text-xs font-bold hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition-all cursor-pointer shadow-sm"
                      >
                        Next
                      </button>
                    </div>
                  </div>
                </template>
                <div v-else class="flex flex-col items-center justify-center py-16 bg-white rounded-3xl border border-dashed border-slate-200 text-center">
                  <Clock class="w-10 h-10 text-slate-300 mb-3" />
                  <p class="text-xs font-bold text-slate-400 uppercase tracking-wider">No attendance logs recorded for this month</p>
                </div>
              </div>

              <!-- Joined Events Tab -->
              <div v-if="activeTab === 'events'" class="space-y-4">
                <template v-if="student.events && student.events.length > 0">
                  <div 
                    v-for="event in student.events" 
                    :key="event.id"
                    class="p-4 bg-white border border-gray-100 rounded-xl hover:border-slate-200 transition-all flex items-center justify-between text-left shadow-sm border-l-4 border-l-green-500"
                  >
                    <div>
                      <h4 class="font-bold text-slate-800 text-xs">{{ event.title }}</h4>
                      <p class="text-[10px] text-slate-400 font-semibold mt-0.5 uppercase">
                        {{ formatDate(event.start_time) }} • {{ event.location || 'Library Hall' }}
                      </p>
                    </div>
                    <span class="text-[9px] font-bold px-2.5 py-1 rounded-full border border-green-200 text-green-700 bg-white uppercase tracking-wider">
                      Joined
                    </span>
                  </div>
                </template>
                <div v-else class="flex flex-col items-center justify-center py-20 text-center">
                  <Search class="w-10 h-10 text-slate-200 mb-4" />
                  <p class="text-xs font-bold text-slate-455 uppercase tracking-widest">No events registered</p>
                </div>
              </div>

              <!-- Reserved Books Tab -->
              <div v-if="activeTab === 'books'" class="space-y-4">
                <template v-if="student.reservations && student.reservations.length > 0">
                  <div 
                    v-for="res in student.reservations" 
                    :key="res.id"
                    class="p-4 bg-white border border-gray-100 rounded-xl hover:border-slate-200 transition-all flex items-center justify-between text-left shadow-sm"
                    :class="[
                      res.status === 'approved' ? 'border-l-4 border-l-green-500' :
                      res.status === 'pending' ? 'border-l-4 border-l-orange-500' :
                      'border-l-4 border-l-slate-300'
                    ]"
                  >
                    <div>
                      <h4 class="font-bold text-slate-800 text-xs">{{ res.book?.title }}</h4>
                      <p class="text-[10px] text-slate-400 font-semibold mt-0.5 uppercase">
                        Author: {{ res.book?.author }} • Reserved: {{ formatDate(res.reserved_at) }}
                      </p>
                    </div>
                    <span :class="[
                      'text-[9px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider border bg-white',
                      res.status === 'approved' ? 'border-green-200 text-green-700' :
                      res.status === 'pending' ? 'border-orange-100 text-orange-700' :
                      'border-slate-200 text-slate-550'
                    ]">
                      {{ res.status }}
                    </span>
                  </div>
                </template>
                <div v-else class="flex flex-col items-center justify-center py-20 text-center">
                  <Search class="w-10 h-10 text-slate-200 mb-4" />
                  <p class="text-xs font-bold text-slate-400 uppercase tracking-widest">No book reservations found</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>

    <!-- Edit Student Modal -->
    <div v-if="showModal" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div class="bg-white rounded-xl shadow-xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in duration-200 border border-gray-200">
        <div class="p-6 border-b border-slate-100 flex items-center justify-between text-left">
          <h2 class="text-lg font-bold text-slate-800">Edit Student</h2>
          <button @click="showModal = false" class="p-2 hover:bg-slate-50 rounded-xl transition-colors cursor-pointer">
            <X class="w-5 h-5 text-slate-400" />
          </button>
        </div>
        <form @submit.prevent="saveStudent" class="p-6 space-y-4 text-left">
          <div>
            <label class="block text-xs font-bold text-slate-500 mb-1.5 uppercase tracking-wider">Full Name</label>
            <input
              v-model="form.name"
              type="text"
              required
              class="w-full px-4 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none text-xs font-semibold text-slate-655 bg-white"
              placeholder="e.g. Ahmed Khan"
            />
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div>
              <label class="block text-xs font-bold text-slate-500 mb-1.5 uppercase tracking-wider">Student ID (CRN)</label>
              <input
                v-model="form.crn"
                type="text"
                required
                class="w-full px-4 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none text-xs font-semibold text-slate-655 bg-white"
                placeholder="e.g. 123456"
              />
            </div>
            <div>
              <label class="block text-xs font-bold text-slate-500 mb-1.5 uppercase tracking-wider">CA Level</label>
              <select
                v-model="form.ca_level"
                class="w-full px-4 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none text-xs font-bold text-slate-655 bg-white cursor-pointer"
              >
                <option value="">Select Level</option>
                <option value="PRC">PRC</option>
                <option value="CAF">CAF</option>
                <option value="CFAP">CFAP</option>
                <option value="MSA">MSA</option>
              </select>
            </div>
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div>
              <label class="block text-xs font-bold text-slate-500 mb-1.5 uppercase tracking-wider">Email Address</label>
              <input
                v-model="form.email"
                type="email"
                required
                class="w-full px-4 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none text-xs font-semibold text-slate-655 bg-white"
                placeholder="email@example.com"
              />
            </div>
            <div>
              <label class="block text-xs font-bold text-slate-500 mb-1.5 uppercase tracking-wider">Phone Number</label>
              <input
                v-model="form.phone"
                type="tel"
                class="w-full px-4 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none text-xs font-semibold text-slate-655 bg-white"
                placeholder="+92 3XX XXXXXXX"
              />
            </div>
          </div>
          <div>
            <label class="block text-xs font-bold text-slate-500 mb-1.5 uppercase tracking-wider">Gender</label>
            <select
              v-model="form.gender"
              class="w-full px-4 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none text-xs font-bold text-slate-655 bg-white cursor-pointer"
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div v-if="changePassword">
            <label class="block text-xs font-bold text-slate-500 mb-1.5 uppercase tracking-wider">Password</label>
            <input
              v-model="form.password"
              type="password"
              class="w-full px-4 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none text-xs font-semibold text-slate-655 bg-white"
              placeholder="••••••••"
            />
          </div>
          <div class="flex items-center space-x-2 pt-1">
            <input type="checkbox" v-model="changePassword" id="changePwd" class="rounded text-emerald-650 focus:ring-emerald-500 cursor-pointer" />
            <label for="changePwd" class="text-xs font-bold text-slate-550 cursor-pointer">Change Password</label>
          </div>
          <div class="flex items-center space-x-2">
            <input type="checkbox" v-model="form.is_active" id="isActive" class="rounded text-emerald-600 focus:ring-emerald-500 cursor-pointer" />
            <label for="isActive" class="text-xs font-bold text-slate-550 cursor-pointer">Account Active</label>
          </div>

          <div class="pt-4 flex items-center space-x-3">
            <button
              type="button"
              @click="showModal = false"
              class="flex-1 px-4 py-2.5 border border-slate-200 text-slate-500 font-bold rounded-xl hover:bg-slate-50 transition-colors text-xs cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              :disabled="saving"
              class="flex-1 px-4 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl transition-all disabled:opacity-50 text-xs font-bold cursor-pointer"
            >
              <span v-if="saving">Saving...</span>
              <span v-else>Update Details</span>
            </button>
          </div>
        </form>
      </div>
    </div>

    <!-- Ban Modal -->
    <div v-if="showBanModal" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div class="bg-white rounded-xl shadow-xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in duration-200 border border-gray-200">
        <!-- Premium Muted Warning Header -->
        <div class="p-6 border-b border-gray-100 flex items-center justify-between text-left">
          <div class="flex items-center space-x-3">
            <div class="w-10 h-10 rounded-lg bg-rose-50 flex items-center justify-center text-rose-600 border border-rose-100/50 flex-shrink-0">
              <AlertTriangle class="w-5 h-5" />
            </div>
            <div>
              <h2 class="text-base font-bold text-slate-800 leading-snug">Restrict Student</h2>
              <p class="text-[10px] font-semibold text-slate-400 uppercase tracking-wider mt-0.5">Restrict access for {{ student.name }}</p>
            </div>
          </div>
          <button @click="showBanModal = false" class="p-2 hover:bg-slate-50 rounded-lg transition-colors cursor-pointer">
            <X class="w-5 h-5 text-slate-400" />
          </button>
        </div>
        
        <form @submit.prevent="submitBan" class="p-6 space-y-5 text-left">
          <div>
            <label class="block text-xs font-semibold text-slate-550 mb-1.5 uppercase tracking-wider">Duration (Days)</label>
            <input
              v-model="banForm.days"
              type="number"
              min="1"
              class="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-rose-550/20 focus:border-rose-500 outline-none text-xs font-semibold text-slate-655 bg-white"
              placeholder="Leave empty for lifetime ban"
            />
          </div>
          
          <div>
            <label class="block text-xs font-semibold text-slate-550 mb-1.5 uppercase tracking-wider">Reason</label>
            <textarea
              v-model="banForm.reason"
              rows="3"
              class="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-rose-550/20 focus:border-rose-500 outline-none text-xs font-semibold text-slate-655 bg-white resize-none"
              placeholder="Enter reason for restriction"
            ></textarea>
          </div>

          <!-- Info Alert warning -->
          <div class="flex items-start space-x-2.5 p-3.5 bg-rose-50/50 text-rose-700 border border-rose-100/65 rounded-xl text-[11px] font-semibold leading-relaxed">
            <AlertCircle class="w-4 h-4 mt-0.5 text-rose-600 flex-shrink-0" />
            <p>Restricting this student will block their seat bookings, check-in access, and library requests for the specified duration.</p>
          </div>

          <div class="pt-2 flex items-center space-x-3">
            <button
              type="button"
              @click="showBanModal = false"
              class="flex-1 px-4 py-2.5 border border-gray-200 text-slate-505 font-bold rounded-lg hover:bg-slate-50 transition-colors text-xs cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              :disabled="banning"
              class="flex-1 px-4 py-2.5 bg-rose-600 hover:bg-rose-700 text-white rounded-lg shadow-sm transition-all disabled:opacity-50 text-xs font-bold cursor-pointer"
            >
              {{ banning ? 'Restricting...' : 'Confirm Restriction' }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { 
  ChevronLeft, 
  Mail, 
  Phone, 
  GraduationCap, 
  Calendar, 
  CheckCircle2, 
  Edit2, 
  RefreshCw,
  Search,
  Ban as BanIcon,
  UserCheck,
  Trash2,
  X,
  AlertTriangle,
  AlertCircle,
  LogIn,
  LogOut,
  Clock,
  Zap,
  Armchair
} from 'lucide-vue-next';
import { librarianAPI } from '@/shared/services/api';
import { useSwal } from '@/shared/composables/useSwal';

const route = useRoute();
const router = useRouter();
const { showError, showSuccess, showConfirm } = useSwal();

const studentId = Number(route.params.id);
const loading = ref(true);
const student = ref<any>(null);
const activeTab = ref('bookings');

const showModal = ref(false);
const saving = ref(false);
const changePassword = ref(false);
const form = ref({
  name: '',
  email: '',
  phone: '',
  crn: '',
  gender: '',
  ca_level: '',
  password: '',
  is_active: true
});

const showBanModal = ref(false);
const banning = ref(false);
const banForm = ref({
  days: null as number | null,
  reason: ''
});

const tabs = [
  { id: 'bookings', label: 'Seat Bookings' },
  { id: 'attendance', label: 'Attendance' },
  { id: 'events', label: 'Events' },
  { id: 'books', label: 'Books' },
];

const fetchStudentDetails = async () => {
  try {
    loading.value = true;
    const data = await librarianAPI.getStudent(studentId);
    student.value = data;
  } catch (error) {
    console.error('Error fetching student details:', error);
    showError('Error', 'Failed to load student profile');
    router.push('/librarian/students');
  } finally {
    loading.value = false;
  }
};

onMounted(fetchStudentDetails);

const sortedBookings = computed(() => {
  if (!student.value?.seat_bookings) return [];
  return [...student.value.seat_bookings].sort((a, b) => 
    new Date(b.booking_date).getTime() - new Date(a.booking_date).getTime()
  );
});

const sortedAttendance = computed(() => {
  if (!student.value?.attendance) return [];
  return [...student.value.attendance].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );
});

const uniqueAttendanceDays = computed(() => {
  if (!student.value?.attendance) return 0;
  const dates = student.value.attendance.map((a: any) => {
    if (!a.date) return null;
    const raw = typeof a.date === 'string' ? a.date : String(a.date);
    return raw.split('T')[0].split(' ')[0];
  }).filter(Boolean);
  return new Set(dates).size;
});

const attendancePage = ref(1);
const attendancePerPage = 3;

const attendanceThisMonth = computed(() => {
  if (!student.value?.attendance) return 0;
  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();

  return student.value.attendance.filter((log: any) => {
    if (!log.date) return false;
    const d = new Date(log.date);
    return d.getMonth() === currentMonth && d.getFullYear() === currentYear;
  }).length;
});

const currentMonthAttendance = computed(() => {
  if (!student.value?.attendance) return [];
  const now = new Date();
  const currentMonth = now.getMonth();
  const currentYear = now.getFullYear();

  return student.value.attendance
    .filter((log: any) => {
      if (!log.date) return false;
      const d = new Date(log.date);
      return d.getMonth() === currentMonth && d.getFullYear() === currentYear;
    })
    .sort((a: any, b: any) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      if (dateB !== dateA) return dateB - dateA;
      const timeA = a.check_in_time || '';
      const timeB = b.check_in_time || '';
      return timeB.localeCompare(timeA);
    });
});

const totalAttendancePages = computed(() => {
  return Math.ceil(currentMonthAttendance.value.length / attendancePerPage) || 1;
});

const paginatedAttendance = computed(() => {
  const start = (attendancePage.value - 1) * attendancePerPage;
  return currentMonthAttendance.value.slice(start, start + attendancePerPage);
});

const totalAttendanceMinutes = computed(() => {
  if (!student.value?.attendance) return 0;
  return student.value.attendance.reduce((sum: number, log: any) => sum + (log.total_minutes || 0), 0);
});

const formattedTotalHours = computed(() => {
  const mins = totalAttendanceMinutes.value;
  const hours = Math.floor(mins / 60);
  const remainingMins = mins % 60;
  if (hours > 0) {
    return `${hours}h ${remainingMins}m`;
  }
  return `${remainingMins}m`;
});

const formatLogTime = (timeStr?: string) => {
  if (!timeStr) return '--:--';
  if (timeStr.length === 5) {
    const [h, m] = timeStr.split(':');
    const hourNum = parseInt(h, 10);
    const ampm = hourNum >= 12 ? 'PM' : 'AM';
    const h12 = hourNum % 12 || 12;
    return `${h12}:${m} ${ampm}`;
  }
  return timeStr;
};

const formatDuration = (mins?: number) => {
  if (!mins || mins <= 0) return null;
  const h = Math.floor(mins / 60);
  const m = mins % 60;
  if (h > 0) return `${h}h ${m}m`;
  return `${m} mins`;
};

const formatDate = (dateString?: string) => {
  if (!dateString) return 'N/A';
  return new Date(dateString).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });
};

const formatTime = (dateString?: string) => {
  if (!dateString) return 'N/A';
  return new Date(dateString).toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
  });
};

const openEditModal = () => {
  if (!student.value) return;
  changePassword.value = false;
  form.value = {
    name: student.value.name,
    email: student.value.email,
    phone: student.value.phone || '',
    crn: student.value.crn || '',
    gender: student.value.gender || '',
    ca_level: student.value.ca_level || '',
    password: '',
    is_active: !!student.value.is_active
  };
  showModal.value = true;
};

const saveStudent = async () => {
  try {
    saving.value = true;
    const payload: any = { ...form.value };
    if (!changePassword.value) {
      delete payload.password;
    }

    await librarianAPI.updateStudent(studentId, payload);
    showSuccess('Updated!', 'Student details updated successfully');
    showModal.value = false;
    fetchStudentDetails();
  } catch (error: any) {
    console.error('Error saving student:', error);
    const message = error.response?.data?.message || 'Failed to save details';
    showError('Save Failed', message);
  } finally {
    saving.value = false;
  }
};

const openBanModal = () => {
  banForm.value = {
    days: null,
    reason: ''
  };
  showBanModal.value = true;
};

const submitBan = async () => {
  try {
    banning.value = true;
    await librarianAPI.banStudent(studentId, {
      days: banForm.value.days || undefined,
      reason: banForm.value.reason
    });
    showBanModal.value = false;
    showSuccess('Restricted', 'Student access restriction applied');
    fetchStudentDetails();
  } catch (error) {
    showError('Failed', 'Failed to restrict student');
  } finally {
    banning.value = false;
  }
};

const unbanStudent = async (student: any) => {
  if (await showConfirm('Unban Student', `Are you sure you want to lift the restriction for ${student.name}?`, 'Yes, Unban')) {
    try {
      await librarianAPI.unbanStudent(student.id);
      showSuccess('Unbanned', 'Student access restored');
      fetchStudentDetails();
    } catch (error) {
      showError('Unban Failed', 'Failed to lift restriction');
    }
  }
};

const confirmDelete = async () => {
  if (!student.value) return;
  if (await showConfirm('Delete Student', `Are you sure you want to delete ${student.value.name}? This action is irreversible.`, 'Yes, Delete')) {
    try {
      await librarianAPI.deleteStudent(studentId);
      showSuccess('Deleted!', 'Student deleted successfully');
      router.push('/librarian/students');
    } catch (error) {
      console.error('Error deleting student:', error);
      showError('Delete Failed', 'Failed to delete student');
    }
  }
};

const getProfilePictureUrl = (path: string) => {
  if (!path) return '';
  if (path.startsWith('http')) return path;
  return `/storage/${path}`;
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap');

.font-outfit {
  font-family: 'Outfit', sans-serif;
}
.text-slate-550 {
  color: #64748b;
}
</style>
