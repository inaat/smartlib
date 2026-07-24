<template>
  <div class="space-y-8 pb-12 font-outfit text-slate-700">
    
    <!-- Page Header -->
    <div class="flex justify-end gap-4">
      <!-- Library Selector -->
      <div class="min-w-[280px]">
        <label class="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5 block ml-1 text-left">Active Library</label>
        <div class="relative group">
          <select 
            v-model="selectedLibraryId" 
            @change="handleLibraryChange"
            class="w-full pl-11 pr-10 py-2.5 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-700 focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 outline-none transition-all appearance-none cursor-pointer shadow-sm"
          >
            <option value="all">All Libraries (Combined)</option>
            <option v-for="lib in libraries" :key="lib.id" :value="lib.id">
              {{ lib.name }}
            </option>
          </select>
          <div class="absolute left-4 top-1/2 -translate-y-1/2 text-purple-600 transition-transform pointer-events-none">
            <LibraryIcon class="w-4 h-4" />
          </div>
          <div class="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
            <ChevronDown class="w-3.5 h-3.5" />
          </div>
        </div>
      </div>
    </div>

    <!-- Parameter Configurations Card -->
    <div class="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 text-left space-y-6">
      <h2 class="text-sm font-bold text-slate-800 uppercase tracking-wider flex items-center gap-2">
        <Zap class="w-4.5 h-4.5 text-amber-500" />
        <span>Configure Consolidated Parameters</span>
      </h2>
      
      <!-- Primary Inputs -->
      <div :class="filters.timeRange === 'custom' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5' : 'grid grid-cols-1 md:grid-cols-2 gap-5'">
        <div>
          <label class="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 block ml-1">Report Category</label>
          <select
            v-model="filters.category"
            @change="handleLibraryChange"
            class="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-700 focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 outline-none cursor-pointer"
          >
            <option v-for="cat in reportCategories" :key="cat.type" :value="cat.type">
              {{ cat.label }}
            </option>
          </select>
        </div>

        <div>
          <label class="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 block ml-1">Time Range</label>
          <select
            v-model="filters.timeRange"
            @change="handleTimeRangeChange"
            class="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-700 focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 outline-none cursor-pointer"
          >
            <option value="today">Today</option>
            <option value="week">This Week</option>
            <option value="month">This Month</option>
            <option value="year">This Year</option>
            <option value="custom">Custom Range</option>
          </select>
        </div>

        <div v-if="filters.timeRange === 'custom'">
          <label class="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 block ml-1">From Date</label>
          <input
            v-model="filters.fromDate"
            type="date"
            class="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-700 focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 outline-none"
          />
        </div>

        <div v-if="filters.timeRange === 'custom'">
          <label class="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 block ml-1">To Date</label>
          <input
            v-model="filters.toDate"
            type="date"
            class="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-700 focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 outline-none"
          />
        </div>
      </div>

      <!-- Advanced Bookings Filters -->
      <div v-if="filters.category === 'bookings'" class="bg-slate-50/50 p-5 rounded-2xl border border-slate-100 space-y-4">
        <span class="text-[10px] font-black text-purple-800 uppercase tracking-widest block">Advanced Search & Filter Parameters</span>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
          <div>
            <label class="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1.5 block">Student (Name / CRN)</label>
            <input
              v-model="filters.studentSearch"
              type="text"
              placeholder="Search student..."
              class="w-full px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs font-semibold text-slate-700 focus:ring-2 focus:ring-purple-500/10 focus:border-purple-500 outline-none"
            />
          </div>

          <div>
            <label class="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1.5 block">Seat Number</label>
            <input
              v-model="filters.seatNumber"
              type="text"
              placeholder="e.g. S-101"
              class="w-full px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs font-semibold text-slate-700 focus:ring-2 focus:ring-purple-500/10 focus:border-purple-500 outline-none"
            />
          </div>

          <div>
            <label class="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1.5 block">Booking Status</label>
            <select
              v-model="filters.bookingStatus"
              class="w-full px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-700 focus:ring-2 focus:ring-purple-500/10 focus:border-purple-500 outline-none cursor-pointer"
            >
              <option value="all">All Statuses</option>
              <option value="booked">Booked</option>
              <option value="checked_in">Checked In</option>
              <option value="checked_out">Checked Out</option>
              <option value="cancelled">Cancelled</option>
            </select>
          </div>

          <div>
            <label class="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1.5 block">Check-in Status</label>
            <select
              v-model="filters.checkInStatus"
              class="w-full px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-700 focus:ring-2 focus:ring-purple-500/10 focus:border-purple-500 outline-none cursor-pointer"
            >
              <option value="all">All Check-ins</option>
              <option value="checked_in">Checked In</option>
              <option value="not_checked_in">Not Checked In</option>
            </select>
          </div>

          <div>
            <label class="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1.5 block">Overstay Status</label>
            <select
              v-model="filters.overstayStatus"
              class="w-full px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-700 focus:ring-2 focus:ring-purple-500/10 focus:border-purple-500 outline-none cursor-pointer"
            >
              <option value="all">All Overstays</option>
              <option value="on_time">Checked Out On Time</option>
              <option value="early">Early Check-out</option>
              <option value="overstay">Overstay (&lt; 1 Hour)</option>
              <option value="serious_overstay">Serious Overstay (&ge; 1 Hour)</option>
              <option value="cancelled">Auto Cancelled</option>
            </select>
          </div>
        </div>
      </div>

      <!-- Advanced Book Reservations Filters -->
      <div v-if="filters.category === 'book_reservations'" class="bg-slate-50/50 p-5 rounded-2xl border border-slate-100 space-y-4">
        <span class="text-[10px] font-black text-purple-800 uppercase tracking-widest block">Advanced Book Reservation Filter Parameters</span>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
          <div>
            <label class="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1.5 block">Student (Name / CRN)</label>
            <input
              v-model="filters.studentSearch"
              type="text"
              placeholder="Search student..."
              class="w-full px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs font-semibold text-slate-700 focus:ring-2 focus:ring-purple-500/10 focus:border-purple-500 outline-none"
            />
          </div>

          <div>
            <label class="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1.5 block">Book (Title / ISBN)</label>
            <input
              v-model="filters.bookSearch"
              type="text"
              placeholder="Search title/ISBN..."
              class="w-full px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs font-semibold text-slate-700 focus:ring-2 focus:ring-purple-500/10 focus:border-purple-500 outline-none"
            />
          </div>

          <div>
            <label class="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1.5 block">Book Category</label>
            <select
              v-model="filters.bookCategory"
              class="w-full px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-700 focus:ring-2 focus:ring-purple-500/10 focus:border-purple-500 outline-none cursor-pointer"
            >
              <option value="all">All Categories</option>
              <option value="Fiction">Fiction</option>
              <option value="Science">Science</option>
              <option value="Technology">Technology</option>
              <option value="Mathematics">Mathematics</option>
              <option value="History">History</option>
              <option value="Biography">Biography</option>
            </select>
          </div>

          <div>
            <label class="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1.5 block">Reservation Status</label>
            <select
              v-model="filters.reservationStatus"
              class="w-full px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-700 focus:ring-2 focus:ring-purple-500/10 focus:border-purple-500 outline-none cursor-pointer"
            >
              <option value="all">All Statuses</option>
              <option value="pending">Pending Approval</option>
              <option value="approved">Approved</option>
              <option value="rejected">Rejected</option>
              <option value="collected">Collected</option>
            </select>
          </div>

          <div>
            <label class="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1.5 block">Return Status (Time Analysis)</label>
            <select
              v-model="filters.returnStatus"
              class="w-full px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-700 focus:ring-2 focus:ring-purple-500/10 focus:border-purple-500 outline-none cursor-pointer"
            >
              <option value="all">All Returns</option>
              <option value="Returned On Time">Returned On Time</option>
              <option value="Returned Early">Returned Early</option>
              <option value="Returned Late">Returned Late</option>
              <option value="Not Picked Up">Not Picked Up</option>
              <option value="Borrowed">Borrowed (Active)</option>
              <option value="Overdue">Overdue (Active)</option>
            </select>
          </div>
        </div>
      </div>

      <!-- Advanced Complaints Filters -->
      <div v-if="filters.category === 'complaints'" class="bg-slate-50/50 p-5 rounded-2xl border border-slate-100 space-y-4 text-left">
        <span class="text-[10px] font-black text-purple-800 uppercase tracking-widest block">Advanced Support Ticket / Complaints Filter Parameters</span>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <div>
            <label class="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1.5 block">Student (Name / CRN)</label>
            <input
              v-model="filters.studentSearch"
              type="text"
              placeholder="Search student..."
              class="w-full px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs font-semibold text-slate-700 focus:ring-2 focus:ring-purple-500/10 focus:border-purple-500 outline-none"
            />
          </div>

          <div>
            <label class="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1.5 block">Complaint Category</label>
            <select
              v-model="filters.complaintCategory"
              class="w-full px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-700 focus:ring-2 focus:ring-purple-500/10 focus:border-purple-500 outline-none cursor-pointer"
            >
              <option value="all">All Categories</option>
              <option value="library">Library Complaint</option>
              <option value="system">System Audit / Admin</option>
            </select>
          </div>

          <div>
            <label class="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1.5 block">Priority</label>
            <select
              v-model="filters.complaintPriority"
              class="w-full px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-700 focus:ring-2 focus:ring-purple-500/10 focus:border-purple-500 outline-none cursor-pointer"
            >
              <option value="all">All Priorities</option>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
              <option value="urgent">Urgent</option>
            </select>
          </div>

          <div>
            <label class="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1.5 block">Complaint Status</label>
            <select
              v-model="filters.complaintStatus"
              class="w-full px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-700 focus:ring-2 focus:ring-purple-500/10 focus:border-purple-500 outline-none cursor-pointer"
            >
              <option value="all">All Statuses</option>
              <option value="open">Pending</option>
              <option value="in_progress">In Progress</option>
              <option value="resolved">Resolved</option>
              <option value="closed">Closed</option>
            </select>
          </div>
        </div>
      </div>

      <!-- Advanced Events Filters -->
      <div v-if="filters.category === 'events'" class="bg-slate-50/50 p-5 rounded-2xl border border-slate-100 space-y-4 text-left">
        <span class="text-[10px] font-black text-purple-800 uppercase tracking-widest block">Advanced Campus Events Filter Parameters</span>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
          <div>
            <label class="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1.5 block">Search Event (Title/Venue)</label>
            <input
              v-model="filters.eventSearch"
              type="text"
              placeholder="Search event..."
              class="w-full px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs font-semibold text-slate-700 focus:ring-2 focus:ring-purple-500/10 focus:border-purple-500 outline-none"
            />
          </div>

          <div>
            <label class="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1.5 block">Event Type</label>
            <select
              v-model="filters.eventType"
              class="w-full px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-700 focus:ring-2 focus:ring-purple-500/10 focus:border-purple-500 outline-none cursor-pointer"
            >
              <option value="all">All Types</option>
              <option value="seminar">Seminar</option>
              <option value="workshop">Workshop</option>
              <option value="study_group">Study Group</option>
              <option value="exam_prep">Exam Prep</option>
              <option value="career_guidance">Career Guidance</option>
              <option value="networking">Networking</option>
            </select>
          </div>

          <div>
            <label class="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1.5 block">Pricing Type</label>
            <select
              v-model="filters.eventPricing"
              class="w-full px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-700 focus:ring-2 focus:ring-purple-500/10 focus:border-purple-500 outline-none cursor-pointer"
            >
              <option value="all">All Pricing</option>
              <option value="free">Free</option>
              <option value="paid">Paid</option>
            </select>
          </div>

          <div>
            <label class="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1.5 block">Capacity Status</label>
            <select
              v-model="filters.eventCapacityStatus"
              class="w-full px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-700 focus:ring-2 focus:ring-purple-500/10 focus:border-purple-500 outline-none cursor-pointer"
            >
              <option value="all">All Capacity Statuses</option>
              <option value="open">Open (Slots Available)</option>
              <option value="full">Full (Sold Out)</option>
              <option value="unlimited">Unlimited Capacity</option>
            </select>
          </div>

          <div>
            <label class="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1.5 block">Event Status</label>
            <select
              v-model="filters.eventStatus"
              class="w-full px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-700 focus:ring-2 focus:ring-purple-500/10 focus:border-purple-500 outline-none cursor-pointer"
            >
              <option value="all">All Statuses</option>
              <option value="upcoming">Upcoming</option>
              <option value="ongoing">Ongoing</option>
              <option value="completed">Completed</option>
              <option value="cancelled">Cancelled</option>
            </select>
          </div>
        </div>
      </div>

      <!-- Advanced Attendance Filters -->
      <div v-if="filters.category === 'attendance'" class="bg-slate-50/50 p-5 rounded-2xl border border-slate-100 space-y-4 text-left">
        <span class="text-[10px] font-black text-purple-800 uppercase tracking-widest block">Advanced Student Attendance Filter Parameters</span>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <div>
            <label class="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1.5 block">Search Student (Name / CRN)</label>
            <input
              v-model="filters.attendanceSearch"
              type="text"
              placeholder="Search student..."
              class="w-full px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs font-semibold text-slate-700 focus:ring-2 focus:ring-purple-500/10 focus:border-purple-500 outline-none"
            />
          </div>

          <div>
            <label class="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1.5 block">Attendance Status</label>
            <select
              v-model="filters.attendanceStatus"
              class="w-full px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-700 focus:ring-2 focus:ring-purple-500/10 focus:border-purple-500 outline-none cursor-pointer"
            >
              <option value="all">All Statuses</option>
              <option value="present">Currently Present</option>
              <option value="left">Checked Out / Left</option>
            </select>
          </div>

          <div>
            <label class="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1.5 block">Check-in Method</label>
            <select
              v-model="filters.attendanceMethod"
              class="w-full px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-700 focus:ring-2 focus:ring-purple-500/10 focus:border-purple-500 outline-none cursor-pointer"
            >
              <option value="all">All Methods</option>
              <option value="manual">Manual Check-in</option>
              <option value="booking">Seat Booking</option>
              <option value="auto">QR Scan / Auto</option>
            </select>
          </div>

          <div>
            <label class="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1.5 block">Seat Designation</label>
            <input
              v-model="filters.attendanceSeat"
              type="text"
              placeholder="e.g. S-101"
              class="w-full px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs font-semibold text-slate-700 focus:ring-2 focus:ring-purple-500/10 focus:border-purple-500 outline-none"
            />
          </div>
        </div>
      </div>

      <div class="flex justify-end gap-3 mt-6 pt-5 border-t border-slate-55">
        <button
          @click="generateOnScreenReport"
          :disabled="generating"
          class="px-6 py-2.5 bg-purple-600 hover:bg-purple-750 text-white text-xs font-bold rounded-xl transition-all disabled:opacity-50 cursor-pointer shadow-sm flex items-center gap-2"
        >
          <RefreshCw class="w-4 h-4" :class="generating ? 'animate-spin' : ''" />
          <span>{{ generating ? 'Analyzing System Logs...' : 'Generate Report' }}</span>
        </button>
      </div>
    </div>

    <!-- Generated Report View Container -->
    <div v-if="generatedReport" class="space-y-5 animate-in fade-in duration-300">
      <!-- Export Options Bar -->
      <div class="bg-white rounded-2xl border border-slate-100 shadow-sm p-4 flex items-center justify-between">
        <div class="flex items-center gap-2 text-left">
          <span class="w-2.5 h-2.5 rounded-full bg-purple-500 animate-ping"></span>
          <span class="text-xs font-bold text-slate-655">Consolidated Report Compiled ({{ processedItems.length }} Records)</span>
        </div>
        <div class="flex items-center gap-2">
          <button
            @click="exportReport('excel')"
            class="px-4 py-2 rounded-xl text-xs font-bold text-green-700 bg-green-50 hover:bg-green-100 border border-green-100 transition-all cursor-pointer flex items-center gap-1.5"
          >
            <Sheet class="w-4 h-4 text-green-600" />
            <span>Export CSV</span>
          </button>
          <button
            @click="exportReport('pdf')"
            class="px-4 py-2 rounded-xl text-xs font-bold text-red-700 bg-red-50 hover:bg-red-100 border border-red-100 transition-all cursor-pointer flex items-center gap-1.5"
          >
            <FileText class="w-4 h-4 text-red-500" />
            <span>Download PDF</span>
          </button>
          <button
            @click="exportReport('pdf')"
            class="px-4 py-2 rounded-xl text-xs font-bold text-slate-700 bg-slate-50 hover:bg-slate-100 border border-slate-200 transition-all cursor-pointer flex items-center gap-1.5"
          >
            <Printer class="w-4 h-4 text-slate-500" />
            <span>Print Report</span>
          </button>
        </div>
      </div>

      <!-- PDF Card Preview Sheet -->
      <div class="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden relative">
        <div class="p-8 space-y-6">
          
          <!-- Report Title and Sub Header -->
          <div class="flex flex-col md:flex-row md:justify-between items-start border-b border-slate-100 pb-6 gap-6 text-left">
            <div class="flex items-start gap-4">
              <div class="w-14 h-14 rounded-2xl bg-purple-50 border border-purple-200/60 flex items-center justify-center text-purple-700 shadow-sm flex-shrink-0">
                <BookMarked class="w-8 h-8" />
              </div>
              <div>
                <h3 class="text-xl font-black text-slate-800 leading-snug">{{ generatedReport.libraryInfo?.name }}</h3>
                <p class="text-xs font-medium text-slate-500 mt-1 max-w-sm">{{ generatedReport.libraryInfo?.address }}</p>
                <div class="flex flex-wrap gap-x-4 gap-y-1 mt-2 text-[10px] font-bold text-slate-400">
                  <span class="flex items-center gap-1">📞 {{ generatedReport.libraryInfo?.contact_info?.phone || 'N/A' }}</span>
                  <span class="flex items-center gap-1">✉️ {{ generatedReport.libraryInfo?.contact_info?.email || 'N/A' }}</span>
                </div>
              </div>
            </div>

            <div class="md:text-right flex-shrink-0 space-y-1">
              <h4 class="text-sm font-black uppercase tracking-wider text-purple-700">{{ generatedReport.label }} Report</h4>
              <p class="text-xs font-bold text-slate-700">
                Period: 
                <span v-if="generatedReport.timeRange === 'custom'">
                  From {{ fmtDate(generatedReport.fromDate) }} To {{ fmtDate(generatedReport.toDate) }}
                </span>
                <span v-else>
                  {{ fmtDate(generatedReport.fromDate) }} &mdash; {{ fmtDate(generatedReport.toDate) }}
                </span>
              </p>
              <div class="text-[10px] font-bold text-slate-400">
                <p>Run Time: {{ generatedReport.generationTime }}</p>
                <p>Run Date: {{ generatedReport.generationDate }}</p>
              </div>
            </div>
          </div>

          <!-- Generated By Bar -->
          <div class="bg-slate-50 rounded-xl p-3 flex flex-wrap items-center justify-between text-xs font-bold text-slate-500 text-left gap-2 border border-slate-100">
            <div>Generated By: <span class="text-slate-800">{{ generatedReport.generatedBy.name }}</span></div>
            <div>Role: <span class="text-purple-700 uppercase tracking-widest text-[9px]">{{ generatedReport.generatedBy.role }}</span></div>
            <div>Staff ID: <span class="text-slate-800">{{ generatedReport.generatedBy.staffId }}</span></div>
          </div>

          <!-- KPI summary list (7 columns for bookings, dynamic otherwise) -->
          <div class="grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-7 gap-3 text-left">
            <div v-for="stat in summaryStats" :key="stat.label" class="p-3 bg-slate-50/50 border border-slate-100 rounded-xl shadow-sm">
              <span class="text-[8px] font-black text-slate-400 uppercase tracking-wider block">{{ stat.label }}</span>
              <span class="text-xl font-black text-slate-800 mt-1 block leading-none">{{ stat.value }}</span>
            </div>
          </div>

          <!-- Content Table -->
          <div class="overflow-x-auto rounded-xl border border-slate-100 shadow-sm">
            <table class="w-full text-xs text-left">
              <thead>
                <tr class="bg-purple-700 text-white font-bold uppercase tracking-wider">
                  <th v-for="header in tableHeaders" :key="header" class="py-3 px-4 font-bold text-[9px] tracking-widest whitespace-nowrap">
                    {{ header }}
                  </th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100 bg-white">
                <!-- Bookings Template -->
                <template v-if="filters.category === 'bookings'">
                  <tr
                    v-for="(row, idx) in paginatedItems"
                    :key="idx"
                    class="hover:bg-slate-50/60 transition-colors"
                  >
                    <td class="py-3 px-4 font-bold text-slate-800 whitespace-nowrap">
                      <div>{{ row.studentName }}</div>
                      <div class="text-[10px] text-slate-400 font-semibold mt-0.5">CRN: {{ row.crn }}</div>
                    </td>
                    <td class="py-3 px-4 font-semibold text-slate-655 whitespace-nowrap">{{ row.bookingDate }}</td>
                    <td class="py-3 px-4 font-bold text-purple-800 whitespace-nowrap">
                      <div>Seat {{ row.seatNumber }}</div>
                      <div class="text-[9px] text-slate-400 mt-0.5 font-bold">{{ row.libraryName }}</div>
                    </td>
                    <td class="py-3 px-4 font-semibold text-slate-500 whitespace-nowrap">
                      <div>{{ row.startTime }} - {{ row.endTime }}</div>
                    </td>
                    <td class="py-3 px-4 font-semibold text-slate-500 whitespace-nowrap">
                      <div>{{ row.actualCheckIn }} - {{ row.actualCheckOut }}</div>
                    </td>
                    <td class="py-3 px-4 font-semibold text-slate-600 whitespace-nowrap">
                      <div class="flex flex-col gap-0.5 text-[10px]">
                        <div>Booked: {{ row.bookedDuration }}</div>
                        <div v-if="row.extendedTime !== '0m'" class="text-purple-600 font-bold">Extended: {{ row.extendedTime }}</div>
                        <div>Total Reserved: {{ row.reservedDuration }}</div>
                        <div class="text-slate-800 font-bold">Used: {{ row.usedDuration }}</div>
                      </div>
                    </td>
                    <td class="py-3 px-4 whitespace-nowrap">
                      <span v-html="statusBadgeHtml(row.calculatedStatus)"></span>
                    </td>
                  </tr>
                </template>

                <!-- Book Reservations Template -->
                <template v-else-if="filters.category === 'book_reservations'">
                  <tr
                    v-for="(row, idx) in paginatedItems"
                    :key="idx"
                    class="hover:bg-slate-50/60 transition-colors"
                  >
                    <td class="py-3 px-4 font-bold text-slate-800 whitespace-nowrap">
                      <div>{{ row.studentName }}</div>
                      <div class="text-[10px] text-slate-400 font-semibold mt-0.5">CRN: {{ row.crn }}</div>
                    </td>
                    <td class="py-3 px-4 font-bold text-slate-850 whitespace-nowrap">
                      <div class="max-w-[200px] truncate" :title="row.bookTitle">{{ row.bookTitle }}</div>
                      <div class="text-[10px] text-slate-400 font-semibold mt-0.5">ISBN: {{ row.isbn }}</div>
                      <div class="text-[9px] text-purple-700 font-black mt-0.5 uppercase tracking-wider">{{ row.libraryName }}</div>
                    </td>
                    <td class="py-3 px-4 text-slate-500 whitespace-nowrap">
                      <div class="text-[10px] space-y-0.5 font-semibold">
                        <div>Res: {{ row.reservationDate }}</div>
                        <div>Appr: {{ row.approvalDate }}</div>
                        <div>Pickup: {{ row.pickupDate }}</div>
                        <div>Return: {{ row.returnDate }}</div>
                      </div>
                    </td>
                    <td class="py-3 px-4 text-slate-500 whitespace-nowrap">
                      <div class="text-[10px] space-y-0.5 font-semibold">
                        <div>Req: {{ row.requestedDays }} days</div>
                        <div>Act: {{ row.actualBorrowedDays }} days</div>
                        <div v-if="row.daysEarlyLate > 0" :class="row.timeAnalysisStatus.toLowerCase().includes('late') || row.timeAnalysisStatus.toLowerCase().includes('overdue') ? 'text-red-600 font-bold' : 'text-emerald-600 font-bold'">
                          {{ row.timeAnalysisStatus.toLowerCase().includes('late') || row.timeAnalysisStatus.toLowerCase().includes('overdue') ? 'Late' : 'Early' }}: {{ row.daysEarlyLate }} days
                        </div>
                      </div>
                    </td>
                    <td class="py-3 px-4 font-semibold text-slate-655 whitespace-nowrap">{{ row.approvedBy }}</td>
                    <td class="py-3 px-4 whitespace-nowrap">
                      <span v-html="statusBadgeHtml(row.reservationStatus)"></span>
                      <span v-if="row.returnStatusToShow" class="mt-1 block" v-html="statusBadgeHtml(row.returnStatusToShow)"></span>
                    </td>
                  </tr>
                </template>

                <!-- Complaints Template -->
                <template v-else-if="filters.category === 'complaints'">
                  <tr
                    v-for="(row, idx) in paginatedItems"
                    :key="idx"
                    class="hover:bg-slate-50/60 transition-colors"
                  >
                    <td class="py-3 px-4 font-bold text-slate-800 whitespace-nowrap">
                      <div>{{ row.studentName }}</div>
                      <div class="text-[10px] text-slate-400 font-semibold mt-0.5">CRN: {{ row.crn }}</div>
                    </td>
                    <td class="py-3 px-4 font-bold text-slate-850 whitespace-nowrap text-left">
                      <div class="font-extrabold text-slate-800">#{{ row.complaintId }}</div>
                      <div class="text-[10px] text-slate-550 font-bold mt-0.5 truncate max-w-[220px]" :title="row.subject">{{ row.subject }}</div>
                      <div class="text-[9px] text-slate-450 mt-0.5">Filed: {{ row.submittedDate }}</div>
                      <div class="text-[9px] text-purple-700 font-black mt-0.5 uppercase tracking-wider">{{ row.libraryName }}</div>
                      <div class="text-[9px] font-black uppercase tracking-wider mt-1" :class="row.priority.toLowerCase() === 'urgent' || row.priority.toLowerCase() === 'high' ? 'text-red-600' : 'text-slate-500'">Priority: {{ row.priority }}</div>
                    </td>
                    <td class="py-3 px-4 text-slate-500 whitespace-nowrap">
                      <div class="text-[10px] space-y-0.5 font-semibold">
                        <div>First Response: {{ row.responseDate }}</div>
                        <div>Resolved: {{ row.resolutionDate }}</div>
                        <div v-if="row.resolutionTime !== '—'" class="font-bold text-purple-700">Time taken: {{ row.resolutionTime }}</div>
                      </div>
                    </td>
                    <td class="py-3 px-4 whitespace-nowrap">
                      <span v-html="statusBadgeHtml(row.status)"></span>
                    </td>
                  </tr>
                </template>

                <!-- Events Template -->
                <template v-else-if="filters.category === 'events'">
                  <tr
                    v-for="(row, idx) in paginatedItems"
                    :key="idx"
                    class="hover:bg-slate-50/60 transition-colors"
                  >
                    <td class="py-3 px-4 font-bold text-slate-800 whitespace-nowrap">
                      <div>{{ row.title }}</div>
                      <div class="text-[10px] text-slate-400 font-semibold mt-0.5">{{ row.eventId }}</div>
                    </td>
                    <td class="py-3 px-4 font-semibold text-slate-700 whitespace-nowrap">
                      <div>{{ row.type }}</div>
                    </td>
                    <td class="py-3 px-4 font-bold text-slate-700 whitespace-nowrap">
                      <div>{{ row.libraryName }}</div>
                    </td>
                    <td class="py-3 px-4 text-slate-500 whitespace-nowrap">
                      <div class="text-[10px] space-y-0.5">
                        <div>Date: {{ row.date }}</div>
                        <div>Time: {{ row.time }}</div>
                      </div>
                    </td>
                    <td class="py-3 px-4 text-slate-655 whitespace-nowrap">
                      <div>{{ row.venue }}</div>
                    </td>
                    <td class="py-3 px-4 text-slate-500 whitespace-nowrap">
                      <div class="text-[10px] space-y-0.5 font-bold">
                        <div>Reg: {{ row.registered }} students</div>
                        <div>Attended: {{ row.attended }} students</div>
                        <div v-if="row.registered > 0" class="text-purple-700 font-extrabold">Attended Rate: {{ row.attendanceRate }}%</div>
                      </div>
                    </td>
                    <td class="py-3 px-4 text-slate-500 whitespace-nowrap">
                      <div class="text-[10px] space-y-0.5">
                        <div>Price: <span class="font-bold text-slate-850">{{ row.priceStr }}</span></div>
                        <div v-if="row.isPaid" class="text-purple-700 font-bold">Rev: PKR {{ row.revenue.toFixed(2) }}</div>
                        <div>Cap: {{ row.capacityStr }} <span v-if="row.capacity" class="font-bold">({{ row.fillRate }}% filled)</span></div>
                      </div>
                    </td>
                    <td class="py-3 px-4 whitespace-nowrap">
                      <span v-html="statusBadgeHtml(row.calculatedStatus)"></span>
                      <span v-if="row.capacityStatus === 'Full'" class="mt-1 block" v-html="statusBadgeHtml('full')"></span>
                    </td>
                  </tr>
                </template>

                <!-- Attendance Redesign Template -->
                <template v-else-if="filters.category === 'attendance'">
                  <tr
                    v-for="(row, idx) in paginatedItems"
                    :key="idx"
                    class="hover:bg-slate-50/60 transition-colors"
                  >
                    <td class="py-3 px-4 font-bold text-slate-800 whitespace-nowrap">
                      <div>{{ row.studentName }}</div>
                      <div class="text-[10px] text-slate-400 font-semibold mt-0.5">CRN: {{ row.crn }}</div>
                    </td>
                    <td class="py-3 px-4 font-bold text-purple-700 whitespace-nowrap">
                      <div>{{ row.libraryName }}</div>
                    </td>
                    <td class="py-3 px-4 font-semibold text-slate-700 whitespace-nowrap">
                      <div>{{ row.date }}</div>
                      <div class="text-[10px] text-slate-400 font-medium mt-0.5">{{ row.id }}</div>
                    </td>
                    <td class="py-3 px-4 font-bold text-slate-800 whitespace-nowrap">
                      <div>Seat {{ row.seatNumber }}</div>
                    </td>
                    <td class="py-3 px-4 text-slate-500 whitespace-nowrap">
                      <div class="text-[10px] space-y-0.5 font-bold">
                        <div>In: <span class="text-slate-800">{{ row.checkInTime }}</span></div>
                        <div>Out: <span class="text-slate-800">{{ row.checkOutTime }}</span></div>
                      </div>
                    </td>
                    <td class="py-3 px-4 font-semibold text-slate-700 whitespace-nowrap">
                      <div :class="row.rawStatus === 'present' ? 'text-purple-700 font-extrabold animate-pulse' : 'text-slate-800 font-bold'">
                        {{ row.durationStr }}
                      </div>
                    </td>
                    <td class="py-3 px-4 text-slate-655 font-bold whitespace-nowrap">
                      <div>{{ row.method }}</div>
                    </td>
                    <td class="py-3 px-4 whitespace-nowrap">
                      <span v-html="statusBadgeHtml(row.calculatedStatus)"></span>
                    </td>
                  </tr>
                </template>

                <!-- Generic Fallback Template -->
                <template v-else>
                  <tr
                    v-for="(row, idx) in paginatedItems"
                    :key="idx"
                    class="hover:bg-slate-50/60 transition-colors"
                  >
                    <td v-for="(val, colIdx) in Object.values(row).slice(1)" :key="colIdx" class="py-3 px-4 font-semibold text-slate-655 whitespace-nowrap">
                      <span v-if="colIdx === Object.keys(row).length - 2 && isStatusField(val)" v-html="statusBadgeHtml(val)"></span>
                      <span v-else>{{ val }}</span>
                    </td>
                  </tr>
                </template>
                <tr v-if="processedItems.length === 0">
                  <td :colspan="tableHeaders.length" class="text-center py-10 font-bold text-slate-400">
                    No bookings match the selected filters.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- Pagination details -->
          <div class="flex flex-col sm:flex-row items-center justify-between gap-4 pt-3 border-t border-slate-100 text-xs font-bold text-slate-500">
            <div class="text-left flex items-center gap-4">
              <div>Total Records: <span class="text-slate-800">{{ processedItems.length }}</span></div>
              <div v-if="filters.category === 'bookings'">Total Hours Used: <span class="text-purple-750">{{ totalHoursUsed }} Hours</span></div>
            </div>
            
            <div v-if="totalPages > 1" class="flex items-center gap-1.5">
              <button
                @click="currentPage = Math.max(1, currentPage - 1)"
                :disabled="currentPage === 1"
                class="px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg hover:bg-slate-100 disabled:opacity-50 transition-all cursor-pointer"
              >
                Previous
              </button>
              <span class="px-2">Page {{ currentPage }} of {{ totalPages }}</span>
              <button
                @click="currentPage = Math.min(totalPages, currentPage + 1)"
                :disabled="currentPage === totalPages"
                class="px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg hover:bg-slate-100 disabled:opacity-50 transition-all cursor-pointer"
              >
                Next
              </button>
            </div>
          </div>
        </div>

        <div class="bg-slate-50/80 px-8 py-4 border-t border-slate-100 flex flex-wrap items-center justify-between text-[10px] font-bold text-slate-400 text-left gap-3">
          <div>SmartLib Consolidated Audit Log</div>
          <div class="text-center italic">This report was generated automatically by SmartLib.</div>
          <div>Page {{ currentPage }} of {{ totalPages }}</div>
        </div>
      </div>
    </div>

    <!-- Initial Empty State -->
    <div v-else class="bg-slate-50 border border-slate-100 rounded-3xl p-16 text-center">
      <div class="w-14 h-14 rounded-2xl bg-white border border-slate-100 shadow-sm flex items-center justify-center mx-auto mb-5 text-purple-600">
        <FileText class="w-7 h-7" />
      </div>
      <h3 class="text-base font-bold text-slate-850">No Consolidations Running</h3>
      <p class="text-slate-455 text-xs mt-1.5 max-w-sm mx-auto font-medium leading-relaxed">
        Select target library, category, configure parameters and click **Generate Report** to view console logs.
      </p>
    </div>

    <!-- History Log Table -->
    <div class="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden text-left">
      <div class="px-6 py-5 border-b border-slate-50 flex items-center justify-between">
        <h3 class="text-sm font-bold text-slate-700 flex items-center uppercase tracking-wider">
          <History class="w-4 h-4 mr-2 text-slate-400" />
          Report History Logs
        </h3>
      </div>
      <div class="p-6">
        <div v-if="libraryReportHistory.length === 0" class="text-center py-12">
          <History class="w-10 h-10 text-slate-200 mx-auto mb-3" />
          <p class="text-slate-400 text-xs font-bold uppercase tracking-wider">No history logged for this library configuration</p>
        </div>
        <div v-else class="overflow-x-auto rounded-xl border border-slate-100">
          <table class="min-w-full text-xs">
            <thead>
              <tr class="bg-slate-50 text-slate-400 font-bold uppercase tracking-wider border-b border-slate-100">
                <th class="py-3 px-4 font-bold text-left">Report Title</th>
                <th class="py-3 px-4 font-bold text-left">Format</th>
                <th class="py-3 px-4 font-bold text-left">Generated On</th>
                <th class="py-3 px-4 font-bold text-right">Action</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-100 bg-white">
              <tr v-for="(h, idx) in libraryReportHistory" :key="idx" class="hover:bg-slate-50/40 font-semibold text-slate-655">
                <td class="py-3 px-4 font-bold text-slate-800">{{ h.name }}</td>
                <td class="py-3 px-4">
                  <span class="px-2 py-0.5 rounded text-[9px] font-bold border uppercase" :class="h.format === 'pdf' ? 'bg-red-50 border-red-100 text-red-655' : 'bg-green-50 border-green-100 text-green-700'">
                    {{ h.format }}
                  </span>
                </td>
                <td class="py-3 px-4 text-slate-500 font-medium">{{ h.generatedAt }}</td>
                <td class="py-3 px-4 text-right">
                  <button 
                    @click="downloadReport(h)" 
                    class="px-3 py-1.5 bg-white border border-slate-200 hover:bg-slate-50 rounded-lg text-purple-700 hover:text-purple-800 transition-all cursor-pointer font-bold inline-flex items-center gap-1.5 shadow-sm"
                  >
                    <Download class="w-3.5 h-3.5" />
                    <span>Download</span>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted, computed } from 'vue';
import { superadminAPI } from '../../services/superadminApi';
import { librarianAPI, supportAPI } from '@/shared/services/api';
import { useAuth } from '@/shared/composables/useAuth';
import { useSwal } from '@/shared/composables/useSwal';
import {
  Zap, FileText, Sheet, Clock, LayoutGrid,
  History, Download, Trash2, Pause, Play, RefreshCw, X, CheckCircle,
  Users, Calendar, Armchair, AlertTriangle, BookMarked, Printer, ChevronDown,
  Library as LibraryIcon, CalendarDays
} from 'lucide-vue-next';

const { showSuccess, showError } = useSwal();
const { user } = useAuth();

// ---------- Active Selection ----------
const libraries = ref<any[]>([]);
const selectedLibraryId = ref<string | number>('all');
const generating = ref(false);
const currentPage = ref(1);
const itemsPerPage = 10;

const filters = reactive({
  category: 'bookings',
  timeRange: 'month',
  fromDate: new Date(new Date().getFullYear(), new Date().getMonth(), 1).toISOString().split('T')[0],
  toDate: new Date().toISOString().split('T')[0],
  // Bookings advanced parameters
  studentSearch: '',
  seatNumber: '',
  bookingStatus: 'all',
  checkInStatus: 'all',
  overstayStatus: 'all',
  // Book Reservations advanced parameters
  bookSearch: '',
  bookCategory: 'all',
  reservationStatus: 'all',
  returnStatus: 'all',
  // Complaints advanced parameters
  complaintCategory: 'all',
  complaintPriority: 'all',
  complaintStatus: 'all',
  // Events advanced parameters
  eventSearch: '',
  eventType: 'all',
  eventPricing: 'all',
  eventCapacityStatus: 'all',
  eventStatus: 'all',
  // Attendance advanced parameters
  attendanceSearch: '',
  attendanceStatus: 'all',
  attendanceMethod: 'all',
  attendanceSeat: '',
});

const reportCategories = [
  { label: 'Seat Bookings Log', type: 'bookings' },
  { label: 'Book Reservation Report', type: 'book_reservations' },
  { label: 'Attendance Audit', type: 'attendance' },
  { label: 'Section Utilization', type: 'seat_utilization' },
  { label: 'Support & Complaints', type: 'complaints' },
  { label: 'Book Catalog', type: 'books' },
  { label: 'Campus Workshops', type: 'events' },
];

const generatedReport = ref<any>(null);
const reportHistory = ref<any[]>([]);

const libraryReportHistory = computed(() => {
  const libKey = selectedLibraryId.value;
  return reportHistory.value.filter(h => h.libraryId === libKey);
});

// ---------- Load History ----------
const loadHistory = () => {
  const saved = localStorage.getItem('superadmin-report-history');
  if (saved) reportHistory.value = JSON.parse(saved);
};

const saveHistory = () => {
  localStorage.setItem('superadmin-report-history', JSON.stringify(reportHistory.value));
};

const handleLibraryChange = () => {
  generatedReport.value = null;
};

const handleTimeRangeChange = () => {
  const todayStr = new Date().toISOString().split('T')[0];
  const now = new Date();
  
  if (filters.timeRange === 'today') {
    filters.fromDate = todayStr;
    filters.toDate = todayStr;
  } else if (filters.timeRange === 'week') {
    const day = now.getDay();
    const diff = now.getDate() - day + (day === 0 ? -6 : 1);
    const startOfWeek = new Date(now.setDate(diff));
    filters.fromDate = startOfWeek.toISOString().split('T')[0];
    filters.toDate = todayStr;
  } else if (filters.timeRange === 'month') {
    const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
    filters.fromDate = startOfMonth.toISOString().split('T')[0];
    filters.toDate = todayStr;
  } else if (filters.timeRange === 'year') {
    const startOfYear = new Date(now.getFullYear(), 0, 1);
    filters.fromDate = startOfYear.toISOString().split('T')[0];
    filters.toDate = todayStr;
  }
};

// ---------- Helpers ----------
const fmtDuration = (mins: number) => {
  if (mins <= 0) return '0m';
  const hrs = Math.floor(mins / 60);
  const rem = mins % 60;
  if (hrs > 0) {
    return `${hrs}h${rem > 0 ? ' ' + rem + 'm' : ''}`;
  }
  return `${rem}m`;
};

const formatAttendanceDuration = (minutes: number | null | undefined) => {
  if (minutes === null || minutes === undefined) return '—';
  const mins = Math.round(minutes);
  if (mins < 60) {
    return `${mins} Minute${mins !== 1 ? 's' : ''}`;
  }
  const hours = Math.floor(mins / 60);
  const remainingMins = mins % 60;
  if (hours < 24) {
    return remainingMins > 0 
      ? `${hours} Hour${hours !== 1 ? 's' : ''} ${remainingMins} Minute${remainingMins !== 1 ? 's' : ''}`
      : `${hours} Hour${hours !== 1 ? 's' : ''}`;
  }
  const days = Math.floor(hours / 24);
  const remainingHours = hours % 24;
  return remainingHours > 0
    ? `${days} Day${days !== 1 ? 's' : ''} ${remainingHours} Hour${remainingHours !== 1 ? 's' : ''}`
    : `${days} Day${days !== 1 ? 's' : ''}`;
};

const getOverstayDetailedStatus = (b: any) => {
  if (b.status === 'cancelled') {
    return 'Auto Cancelled';
  }
  if (!b.check_in_time) {
    return 'Unclaimed';
  }
  if (!b.check_out_time) {
    const reservedEnd = new Date(b.extended_until || b.scheduled_end_time);
    const now = new Date();
    if (now > reservedEnd) {
      const diffMins = Math.floor((now.getTime() - reservedEnd.getTime()) / (60 * 1000));
      if (diffMins >= 60) return 'Serious Overstay';
      return 'Overstay';
    }
    return 'Checked In';
  }

  // Completed check-ins
  const reservedEnd = new Date(b.extended_until || b.scheduled_end_time);
  const checkOut = new Date(b.check_out_time);
  const diffMins = Math.floor((checkOut.getTime() - reservedEnd.getTime()) / (60 * 1000));

  if (diffMins >= 60) {
    return 'Serious Overstay';
  } else if (diffMins > 5) {
    return 'Overstay';
  } else {
    // Check if they checked out early
    const checkIn = new Date(b.check_in_time);
    const bookedMinutes = Math.floor((reservedEnd.getTime() - checkIn.getTime()) / (60 * 1000));
    const usedMinutes = Math.floor((checkOut.getTime() - checkIn.getTime()) / (60 * 1000));
    const leftEarlyMinutes = bookedMinutes - usedMinutes;
    
    if (leftEarlyMinutes >= 30) {
      return 'Early Check-out';
    }
    return 'Checked Out On Time';
  }
};

// ---------- Generation Engine ----------
const generateOnScreenReport = async () => {
  generating.value = true;
  currentPage.value = 1;

  try {
    let libraryInfo = {
      name: 'SmartLib Multi-Library Network',
      address: 'Consolidated System Audit',
      contact_info: {
        phone: 'SmartLib Operations',
        email: 'admin@smartlib.com'
      }
    };

    if (selectedLibraryId.value !== 'all') {
      const activeLib = libraries.value.find(l => l.id === Number(selectedLibraryId.value));
      if (activeLib) {
        libraryInfo = {
          name: activeLib.name,
          address: activeLib.address || 'SmartLib Campus',
          contact_info: activeLib.contact_info || { phone: 'N/A', email: 'N/A' }
        };
      }
    }

    const catLabel = reportCategories.find(r => r.type === filters.category)?.label || filters.category;
    
    const params: any = {
      from_date: filters.fromDate,
      to_date: filters.toDate,
      per_page: 'all'
    };
    if (selectedLibraryId.value !== 'all') {
      params.library_id = selectedLibraryId.value;
    }
    if (filters.category === 'attendance') {
      if (filters.attendanceSearch) params.search = filters.attendanceSearch;
      if (filters.attendanceStatus !== 'all') params.status = filters.attendanceStatus;
    }

    let items: any[] = [];
    const now = new Date();
    const genDate = now.toLocaleDateString('en-PK', { dateStyle: 'long' });
    const genTime = now.toLocaleTimeString('en-PK', { timeStyle: 'short' });

    if (filters.category === 'bookings') {
      const res = await librarianAPI.getBookings(params);
      const list = res.data || res || [];
      
      items = list.map((b: any) => {
        const start = new Date(b.booking_time);
        const endPlanned = new Date(b.scheduled_end_time);
        const endExtended = b.extended_until ? new Date(b.extended_until) : null;
        const endActual = endExtended || endPlanned;
        
        const origMins = Math.floor((endPlanned.getTime() - start.getTime()) / (60 * 1000));
        const extMins = endExtended ? Math.max(0, Math.floor((endExtended.getTime() - endPlanned.getTime()) / (60 * 1000))) : 0;
        const reservedMins = origMins + extMins;
        
        let usedMins = 0;
        if (b.check_in_time && b.check_out_time) {
          usedMins = Math.floor((new Date(b.check_out_time).getTime() - new Date(b.check_in_time).getTime()) / (60 * 1000));
        } else if (b.check_in_time) {
          usedMins = Math.floor((new Date().getTime() - new Date(b.check_in_time).getTime()) / (60 * 1000));
        }

        const calcStatus = getOverstayDetailedStatus(b);

        return {
          id: `B-${b.id}`,
          studentName: b.user?.name || '—',
          crn: b.user?.crn || '—',
          libraryName: b.library?.name || 'SmartLib',
          bookingDate: start.toLocaleDateString('en-US', { day: 'numeric', month: 'short' }),
          seatNumber: b.seat?.seat_number || '—',
          startTime: start.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true }),
          endTime: endPlanned.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true }),
          actualCheckIn: b.check_in_time ? new Date(b.check_in_time).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true }) : '—',
          actualCheckOut: b.check_out_time ? new Date(b.check_out_time).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true }) : (b.check_in_time ? 'Active' : '—'),
          bookedDuration: fmtDuration(origMins),
          extendedTime: fmtDuration(extMins),
          reservedDuration: fmtDuration(reservedMins),
          usedDuration: b.check_in_time ? fmtDuration(usedMins) : '0m',
          usedMinutesRaw: usedMins,
          calculatedStatus: calcStatus,
          rawStatus: b.status,
          hasCheckIn: !!b.check_in_time,
          hasCheckOut: !!b.check_out_time
        };
      });
    } else if (filters.category === 'book_reservations') {
      const res = await librarianAPI.getReservedBooks(params);
      const list = res.data || res || [];
      
      items = list.map((b: any) => {
        const created = new Date(b.created_at);
        const due = new Date(b.due_date);
        
        // Requested Days
        const requestedDays = Math.max(1, Math.ceil((due.getTime() - created.getTime()) / (1000 * 60 * 60 * 24)));
        
        let actualBorrowedDays = 0;
        let daysEarlyLate = 0;
        let fineAmount = 0;
        let timeAnalysisStatus = 'Borrowed';
        
        if (b.status === 'pending') {
          timeAnalysisStatus = 'Pending Approval';
        } else if (b.status === 'rejected') {
          timeAnalysisStatus = 'Rejected';
        } else if (b.status === 'approved') {
          timeAnalysisStatus = due < new Date() ? 'Not Picked Up' : 'Approved';
        } else {
          // Collected, pending_return, returned, overdue
          const pickup = new Date(b.updated_at);
          const returnedDate = b.returned_at ? new Date(b.returned_at) : null;
          
          if (returnedDate) {
            actualBorrowedDays = Math.max(0, Math.ceil((returnedDate.getTime() - pickup.getTime()) / (1000 * 60 * 60 * 24)));
            const diffDays = Math.ceil((returnedDate.getTime() - due.getTime()) / (1000 * 60 * 60 * 24));
            if (diffDays > 0) {
              daysEarlyLate = diffDays;
              fineAmount = diffDays * 50;
              timeAnalysisStatus = 'Returned Late';
            } else if (diffDays < 0) {
              daysEarlyLate = Math.abs(diffDays);
              timeAnalysisStatus = 'Returned Early';
            } else {
              timeAnalysisStatus = 'Returned On Time';
            }
          } else {
            actualBorrowedDays = Math.max(0, Math.ceil((new Date().getTime() - pickup.getTime()) / (1000 * 60 * 60 * 24)));
            const diffDays = Math.ceil((new Date().getTime() - due.getTime()) / (1000 * 60 * 60 * 24));
            if (diffDays > 0) {
              daysEarlyLate = diffDays;
              fineAmount = diffDays * 50;
              timeAnalysisStatus = 'Returned Late';
            } else {
              timeAnalysisStatus = 'Borrowed';
            }
          }
        }

        // Reservation Status string to display
        let reservationStatus = 'Pending Approval';
        if (b.status === 'approved') reservationStatus = 'Approved';
        else if (b.status === 'rejected') reservationStatus = 'Rejected';
        else if (['collected', 'pending_return', 'returned', 'overdue'].includes(b.status)) reservationStatus = 'Collected';

        // Find the library's librarian name
        const libUsers = b.book?.library?.users || [];
        const librarian = libUsers.find((u: any) => u.role === 'librarian' || u.role === 'admin');
        const approvedBy = b.status !== 'pending' && b.status !== 'rejected' 
          ? (librarian ? librarian.name : 'Admin Librarian')
          : '—';

        // Filter return statuses (do not show Borrowed / Overdue / Approved / Pending in return status)
        let returnStatusToShow = '';
        if (timeAnalysisStatus === 'Returned On Time' || timeAnalysisStatus === 'Returned Early' || timeAnalysisStatus === 'Returned Late' || timeAnalysisStatus === 'Not Picked Up') {
          returnStatusToShow = timeAnalysisStatus;
        }

        return {
          id: `R-${b.id}`,
          studentName: b.user?.name || '—',
          crn: b.user?.crn || '—',
          bookTitle: b.book?.title || '—',
          isbn: b.book?.isbn || '—',
          libraryName: b.book?.library?.name || 'SmartLib',
          reservationDate: created.toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' }),
          approvalDate: b.status !== 'pending' && b.status !== 'rejected' ? new Date(b.updated_at).toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' }) : '—',
          pickupDate: ['collected', 'pending_return', 'returned', 'overdue'].includes(b.status) ? new Date(b.updated_at).toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' }) : '—',
          returnDate: b.returned_at ? new Date(b.returned_at).toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' }) : '—',
          requestedDays,
          actualBorrowedDays,
          daysEarlyLate,
          fineAmount,
          approvedBy,
          timeAnalysisStatus,
          returnStatusToShow,
          reservationStatus,
          bookCategory: b.book?.category || 'Standard'
        };
      });
    } else {
      if (filters.category === 'attendance') {
        const res = await librarianAPI.getAttendance(params);
        const list = res.data || res || [];
        items = list.map((a: any) => {
          const seatNum = a.seat_number || a.seat?.seat_number || a.seat_booking?.seat?.seat_number || '—';
          const methodStr = a.marked_manually 
            ? 'Manual Check-in' 
            : (a.seat_booking_id ? 'Seat Booking' : 'QR Scan / Auto');
          
          return {
            id: `A-${a.id}`,
            attendanceId: `A-${a.id}`,
            studentName: a.user?.name || '—',
            crn: a.user?.crn || '—',
            seatNumber: seatNum,
            libraryName: a.library?.name || '—',
            checkInTime: a.check_in_time ? fmtTime12(a.check_in_time) : '—',
            checkOutTime: a.check_out_time ? fmtTime12(a.check_out_time) : '—',
            date: a.date ? fmtDate(a.date) : '—',
            durationRaw: a.total_minutes || 0,
            durationStr: a.check_out_time ? formatAttendanceDuration(a.total_minutes) : 'Active Session',
            method: methodStr,
            rawStatus: a.check_out_time ? 'left' : 'present',
            calculatedStatus: a.check_out_time ? 'Left' : 'Present'
          };
        });
      } else if (filters.category === 'seat_utilization') {
        const res = await superadminAPI.getSeats(params);
        const list = Array.isArray(res) ? res : [];
        items = list.map((s: any) => ({
          col1: s.floor?.library?.name || '—',
          col2: s.floor?.name || '—',
          col3: s.seat_number || '—',
          col4: `${s.has_computer ? 'PC' : ''} ${s.near_window ? 'Window' : ''}`.trim() || 'Standard',
          calculatedStatus: s.status
        }));
      } else if (filters.category === 'complaints') {
        const queryParams = { ...params };
        if (selectedLibraryId.value === 'all') {
          queryParams.all_types = 1;
        }
        const res = await supportAPI.getTickets('admin', queryParams);
        const list = Array.isArray(res) ? res : (res as any)?.data || [];
        
        items = list.map((t: any) => {
          const submitted = new Date(t.created_at);
          const userMsgs = t.messages || [];

          // Find response details (first message sent by staff, i.e. someone other than ticket creator)
          const staffMsg = userMsgs.find((m: any) => m.user_id !== t.user_id);
          const responseDate = staffMsg ? new Date(staffMsg.created_at) : null;
          const responseDateStr = responseDate 
            ? responseDate.toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' }) + ', ' + responseDate.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })
            : 'No response yet';

          // Resolution Details
          const isResolvedOrClosed = ['resolved', 'closed'].includes(t.status);
          const resolutionDate = isResolvedOrClosed ? new Date(t.updated_at) : null;
          const resolutionDateStr = resolutionDate
            ? resolutionDate.toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' }) + ', ' + resolutionDate.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })
            : '—';

          // Total Resolution Time
          let resolutionTimeStr = '—';
          if (isResolvedOrClosed && resolutionDate) {
            const diffMs = resolutionDate.getTime() - submitted.getTime();
            const diffMinsTotal = Math.max(0, Math.floor(diffMs / (1000 * 60)));
            if (diffMinsTotal < 60) {
              resolutionTimeStr = `${diffMinsTotal} Minute${diffMinsTotal !== 1 ? 's' : ''}`;
            } else {
              const diffHrsTotal = Math.floor(diffMinsTotal / 60);
              const remMins = diffMinsTotal % 60;
              if (diffHrsTotal < 24) {
                if (remMins === 0) {
                  resolutionTimeStr = `${diffHrsTotal} Hour${diffHrsTotal !== 1 ? 's' : ''}`;
                } else {
                  resolutionTimeStr = `${diffHrsTotal} Hour${diffHrsTotal !== 1 ? 's' : ''} ${remMins} Minute${remMins !== 1 ? 's' : ''}`;
                }
              } else {
                const diffDays = Math.floor(diffHrsTotal / 24);
                const remHrs = diffHrsTotal % 24;
                if (remHrs === 0) {
                  resolutionTimeStr = `${diffDays} Day${diffDays !== 1 ? 's' : ''}`;
                } else {
                  resolutionTimeStr = `${diffDays} Day${diffDays !== 1 ? 's' : ''} ${remHrs} Hour${remHrs !== 1 ? 's' : ''}`;
                }
              }
            }
          } else {
            resolutionTimeStr = 'Still Pending';
          }

          // Status mapping to display
          let displayStatus = 'Pending';
          if (t.status === 'in_progress') displayStatus = 'In Progress';
          else if (t.status === 'resolved') displayStatus = 'Resolved';
          else if (t.status === 'closed') displayStatus = 'Closed';
          else if (t.status === 'rejected') displayStatus = 'Rejected';

          return {
            id: `TKT-${t.id}`,
            studentName: t.user?.name || '—',
            crn: t.user?.crn || '—',
            complaintId: `TKT-${t.id}`,
            submittedDate: submitted.toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' }) + ', ' + submitted.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true }),
            priority: t.priority ? t.priority.charAt(0).toUpperCase() + t.priority.slice(1) : 'Medium',
            subject: t.subject || '—',
            status: displayStatus,
            rawStatus: t.status || 'open',
            rawPriority: t.priority || 'medium',
            category: t.ticket_type || 'system',
            responseDate: responseDateStr,
            resolutionDate: resolutionDateStr,
            resolutionTime: resolutionTimeStr,
            libraryName: t.library?.name || 'System Support'
          };
        });
      } else if (filters.category === 'books') {
        const res = await superadminAPI.getBooks(params);
        const list = Array.isArray(res) ? res : (res as any)?.data || [];
        items = list.map((b: any) => ({
          col1: `BK-${b.id}`,
          col2: b.title || '—',
          col3: b.author || '—',
          col4: b.library?.name || 'Shared',
          col5: b.type || 'Physical',
          calculatedStatus: b.availability || 'available'
        }));
      } else if (filters.category === 'events') {
        const res = await superadminAPI.getEvents(params);
        const list = Array.isArray(res) ? res : (res as any)?.data || [];
        items = list.map((e: any) => {
          const regs = e.registrations || [];
          const totalRegistered = regs.length;
          const attendedCount = regs.filter((r: any) => r.attended || r.status === 'attended').length;
          const totalRevenue = regs.reduce((sum: number, r: any) => {
            const amt = parseFloat(r.amount_paid || 0);
            const isCompleted = r.payment_status === 'completed' || r.payment_status === 'paid' || r.status === 'approved' || r.status === 'attended';
            return sum + (isCompleted ? amt : 0);
          }, 0);
          const isPaid = e.is_paid || parseFloat(e.price || 0) > 0;
          const price = parseFloat(e.price || 0);
          const priceStr = isPaid ? `PKR ${price.toFixed(2)}` : 'Free';
          const capacity = e.capacity || e.max_participants || null;
          const capacityStr = capacity ? `${capacity} Seats` : 'Unlimited';
          const fillRate = capacity ? Math.round((totalRegistered / capacity) * 100) : 100;
          const attendanceRate = totalRegistered > 0 ? Math.round((attendedCount / totalRegistered) * 100) : 0;
          
          let capStatus = 'Open';
          if (capacity && totalRegistered >= capacity) {
            capStatus = 'Full';
          } else if (!capacity) {
            capStatus = 'Unlimited';
          }
          
          let displayStatus = 'Upcoming';
          const now = new Date();
          const evtDate = e.date ? new Date(e.date) : null;
          if (e.status === 'cancelled') {
            displayStatus = 'Cancelled';
          } else if (e.status === 'completed' || (evtDate && evtDate < now)) {
            displayStatus = 'Completed';
          } else if (e.status === 'ongoing') {
            displayStatus = 'Ongoing';
          } else {
            displayStatus = 'Upcoming';
          }

          return {
            id: `EV-${e.id}`,
            eventId: `EV-${e.id}`,
            title: e.title || '—',
            type: e.type || e.event_type || 'Workshop',
            libraryName: e.library?.name || '—',
            date: e.date ? fmtDate(e.date) : '—',
            time: `${e.start_time || '—'} - ${e.end_time || '—'}`,
            venue: e.venue || e.location || 'Campus Main',
            capacity: capacity,
            capacityStr: capacityStr,
            registered: totalRegistered,
            attended: attendedCount,
            revenue: totalRevenue,
            price: price,
            priceStr: priceStr,
            isPaid: isPaid,
            fillRate: fillRate,
            attendanceRate: attendanceRate,
            capacityStatus: capStatus,
            calculatedStatus: displayStatus,
            rawStatus: e.status || 'upcoming'
          };
        });
      }
    }

    generatedReport.value = {
      type: filters.category,
      label: catLabel,
      fromDate: filters.fromDate,
      toDate: filters.toDate,
      timeRange: filters.timeRange,
      libraryInfo,
      items,
      generationDate: genDate,
      generationTime: genTime,
      generatedBy: {
        name: user.value?.name || 'System Admin',
        role: 'Super Admin',
        staffId: user.value?.crn || `ID-${user.value?.id || ''}`
      }
    };
  } catch (error) {
    console.error(error);
    showError('Generation Error', 'Failed to compile console report logs.');
  } finally {
    generating.value = false;
  }
};

// ---------- Filtered / Processed Items ----------
const processedItems = computed(() => {
  if (!generatedReport.value) return [];
  const list = generatedReport.value.items;

  if (filters.category === 'book_reservations') {
    return list.filter((item: any) => {
      // 1. Student search
      if (filters.studentSearch) {
        const q = filters.studentSearch.toLowerCase();
        const matchName = item.studentName.toLowerCase().includes(q);
        const matchCrn = item.crn.toLowerCase().includes(q);
        if (!matchName && !matchCrn) return false;
      }
      // 2. Book search
      if (filters.bookSearch) {
        const q = filters.bookSearch.toLowerCase();
        const matchTitle = item.bookTitle.toLowerCase().includes(q);
        const matchIsbn = item.isbn.toLowerCase().includes(q);
        if (!matchTitle && !matchIsbn) return false;
      }
      // 3. Book category
      if (filters.bookCategory !== 'all') {
        if (item.bookCategory !== filters.bookCategory) return false;
      }
      // 4. Reservation Status
      if (filters.reservationStatus !== 'all') {
        const statusMap: Record<string, string> = {
          'pending': 'pending approval',
          'approved': 'approved',
          'rejected': 'rejected',
          'collected': 'collected'
        };
        const target = statusMap[filters.reservationStatus] || filters.reservationStatus;
        if (item.reservationStatus.toLowerCase() !== target.toLowerCase()) return false;
      }
      // 5. Return Status
      if (filters.returnStatus !== 'all') {
        if (item.timeAnalysisStatus.toLowerCase() !== filters.returnStatus.toLowerCase()) return false;
      }
      return true;
    });
  }

  if (filters.category === 'complaints') {
    return list.filter((item: any) => {
      // 1. Student Search
      if (filters.studentSearch) {
        const q = filters.studentSearch.toLowerCase();
        const matchName = item.studentName.toLowerCase().includes(q);
        const matchCrn = item.crn.toLowerCase().includes(q);
        if (!matchName && !matchCrn) return false;
      }
      // 2. Complaint Category
      if (filters.complaintCategory !== 'all') {
        if (item.category !== filters.complaintCategory) return false;
      }
      // 3. Priority
      if (filters.complaintPriority !== 'all') {
        if (item.rawPriority !== filters.complaintPriority) return false;
      }
      // 4. Status
      if (filters.complaintStatus !== 'all') {
        if (item.rawStatus !== filters.complaintStatus) return false;
      }
      return true;
    });
  }

  if (filters.category === 'events') {
    return list.filter((item: any) => {
      // 1. Text search (Title, Venue, Type)
      if (filters.eventSearch) {
        const q = filters.eventSearch.toLowerCase();
        const matchTitle = item.title.toLowerCase().includes(q);
        const matchVenue = item.venue.toLowerCase().includes(q);
        const matchType = item.type.toLowerCase().includes(q);
        if (!matchTitle && !matchVenue && !matchType) return false;
      }
      // 2. Event Type
      if (filters.eventType !== 'all') {
        if (item.type.toLowerCase() !== filters.eventType.toLowerCase()) return false;
      }
      // 3. Pricing Type
      if (filters.eventPricing !== 'all') {
        if (filters.eventPricing === 'free' && item.isPaid) return false;
        if (filters.eventPricing === 'paid' && !item.isPaid) return false;
      }
      // 4. Capacity Status
      if (filters.eventCapacityStatus !== 'all') {
        if (filters.eventCapacityStatus === 'full' && item.capacityStatus !== 'Full') return false;
        if (filters.eventCapacityStatus === 'open' && item.capacityStatus !== 'Open') return false;
        if (filters.eventCapacityStatus === 'unlimited' && item.capacityStatus !== 'Unlimited') return false;
      }
      // 5. Event Status
      if (filters.eventStatus !== 'all') {
        if (item.calculatedStatus.toLowerCase() !== filters.eventStatus.toLowerCase()) return false;
      }
      return true;
    });
  }

  if (filters.category === 'attendance') {
    return list.filter((item: any) => {
      // 1. Student search (Name / CRN)
      if (filters.attendanceSearch) {
        const q = filters.attendanceSearch.toLowerCase();
        const matchName = item.studentName.toLowerCase().includes(q);
        const matchCrn = item.crn.toLowerCase().includes(q);
        if (!matchName && !matchCrn) return false;
      }
      // 2. Attendance Status (Present vs Left)
      if (filters.attendanceStatus !== 'all') {
        if (item.rawStatus !== filters.attendanceStatus) return false;
      }
      // 3. Check-in Method
      if (filters.attendanceMethod !== 'all') {
        const methodMap: Record<string, string> = {
          'manual': 'manual check-in',
          'booking': 'seat booking',
          'auto': 'qr scan / auto'
        };
        const target = methodMap[filters.attendanceMethod];
        if (item.method.toLowerCase() !== target) return false;
      }
      // 4. Seat Designation
      if (filters.attendanceSeat) {
        if (!item.seatNumber.toLowerCase().includes(filters.attendanceSeat.toLowerCase())) return false;
      }
      return true;
    });
  }

  if (filters.category !== 'bookings') return list;

  return list.filter((item: any) => {
    if (filters.studentSearch) {
      const q = filters.studentSearch.toLowerCase();
      const matchName = item.studentName.toLowerCase().includes(q);
      const matchCrn = item.crn.toLowerCase().includes(q);
      if (!matchName && !matchCrn) return false;
    }
    if (filters.seatNumber) {
      if (!item.seatNumber.toLowerCase().includes(filters.seatNumber.toLowerCase())) {
        return false;
      }
    }
    if (filters.bookingStatus !== 'all') {
      if (item.rawStatus !== filters.bookingStatus) return false;
    }
    if (filters.checkInStatus !== 'all') {
      if (filters.checkInStatus === 'checked_in' && !item.hasCheckIn) return false;
      if (filters.checkInStatus === 'not_checked_in' && item.hasCheckIn) return false;
    }
    if (filters.overstayStatus !== 'all') {
      const matchStatus = filters.overstayStatus.toLowerCase();
      const itemStatus = item.calculatedStatus.toLowerCase();
      if (matchStatus === 'on_time' && itemStatus !== 'checked out on time') return false;
      if (matchStatus === 'early' && itemStatus !== 'early check-out') return false;
      if (matchStatus === 'overstay' && itemStatus !== 'overstay') return false;
      if (matchStatus === 'serious_overstay' && itemStatus !== 'serious overstay') return false;
      if (matchStatus === 'cancelled' && itemStatus !== 'auto cancelled') return false;
    }

    return true;
  });
});

const paginatedItems = computed(() => {
  if (!generatedReport.value) return [];
  const start = (currentPage.value - 1) * itemsPerPage;
  return processedItems.value.slice(start, start + itemsPerPage);
});

const totalPages = computed(() => {
  return Math.ceil(processedItems.value.length / itemsPerPage) || 1;
});

// ---------- Totals & Metrics ----------
const totalHoursUsed = computed(() => {
  if (filters.category !== 'bookings') return 0;
  const totalMins = processedItems.value.reduce((acc: number, item: any) => acc + item.usedMinutesRaw, 0);
  return (totalMins / 60).toFixed(1);
});

const summaryStats = computed(() => {
  if (!generatedReport.value) return [];
  
  if (filters.category === 'book_reservations') {
    const list = processedItems.value;
    const total = list.length;
    const pending = list.filter((r: any) => r.reservationStatus === 'Pending Approval').length;
    const approved = list.filter((r: any) => r.reservationStatus === 'Approved').length;
    const rejected = list.filter((r: any) => r.reservationStatus === 'Rejected').length;
    const collected = list.filter((r: any) => r.reservationStatus === 'Collected').length;

    return [
      { label: 'Total Requests', value: total },
      { label: 'Pending Requests', value: pending },
      { label: 'Approved Requests', value: approved },
      { label: 'Rejected Requests', value: rejected },
      { label: 'Books Collected', value: collected }
    ];
  }

  if (filters.category === 'complaints') {
    const list = processedItems.value;
    const total = list.length;
    const pending = list.filter((c: any) => c.rawStatus === 'open').length;
    const inProgress = list.filter((c: any) => c.rawStatus === 'in_progress').length;
    const resolved = list.filter((c: any) => c.rawStatus === 'resolved').length;
    const closed = list.filter((c: any) => c.rawStatus === 'closed').length;
    const rejected = list.filter((c: any) => c.rawStatus === 'rejected').length;

    return [
      { label: 'Total Complaints', value: total },
      { label: 'Pending Complaints', value: pending },
      { label: 'In Progress', value: inProgress },
      { label: 'Resolved Complaints', value: resolved },
      { label: 'Closed Complaints', value: closed },
      { label: 'Rejected Complaints', value: rejected }
    ];
  }

  if (filters.category === 'events') {
    const list = processedItems.value;
    const total = list.length;
    const totalRegistrations = list.reduce((sum: number, e: any) => sum + (e.registered || 0), 0);
    const totalAttended = list.reduce((sum: number, e: any) => sum + (e.attended || 0), 0);
    const totalRevenue = list.reduce((sum: number, e: any) => sum + (e.revenue || 0), 0);

    const capacityRestrictedEvents = list.filter((e: any) => e.capacity && e.capacity > 0);
    const avgFillRate = capacityRestrictedEvents.length > 0
      ? Math.round(capacityRestrictedEvents.reduce((sum: number, e: any) => sum + (e.fillRate || 0), 0) / capacityRestrictedEvents.length)
      : 100;

    return [
      { label: 'Total Events', value: total },
      { label: 'Total Registrations', value: totalRegistrations },
      { label: 'Total Attended', value: totalAttended },
      { label: 'Total Revenue', value: `PKR ${totalRevenue.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}` },
      { label: 'Avg Capacity Fill', value: `${avgFillRate}%` }
    ];
  }

  if (filters.category === 'attendance') {
    const list = processedItems.value;
    const total = list.length;
    const currentlyPresent = list.filter((a: any) => a.rawStatus === 'present').length;
    const manualCheckins = list.filter((a: any) => a.method === 'Manual Check-in').length;
    const seatBookings = list.filter((a: any) => a.method === 'Seat Booking').length;
    
    const completedSessions = list.filter((a: any) => a.rawStatus === 'left');
    const avgMins = completedSessions.length > 0
      ? Math.round(completedSessions.reduce((acc: number, s: any) => acc + s.durationRaw, 0) / completedSessions.length)
      : 0;
    const avgDurationStr = avgMins > 0 ? formatAttendanceDuration(avgMins) : '—';

    return [
      { label: 'Total Logs', value: total },
      { label: 'Currently Present', value: currentlyPresent },
      { label: 'Manual Check-ins', value: manualCheckins },
      { label: 'Seat Booking Entries', value: seatBookings },
      { label: 'Avg Session Duration', value: avgDurationStr }
    ];
  }

  if (filters.category !== 'bookings') {
    const total = processedItems.value.length;
    return [
      { label: 'Total Logs', value: total },
      { label: 'Filtered', value: 'Active' }
    ];
  }

  const list = processedItems.value;
  const total = list.filter((b: any) => b.rawStatus !== 'cancelled').length;
  const completed = list.filter((b: any) => b.hasCheckOut).length;
  const early = list.filter((b: any) => b.calculatedStatus === 'Early Check-out').length;
  const onTime = list.filter((b: any) => b.calculatedStatus === 'Checked Out On Time').length;
  const overstays = list.filter((b: any) => b.calculatedStatus === 'Overstay').length;
  const seriousOverstays = list.filter((b: any) => b.calculatedStatus === 'Serious Overstay').length;
  const cancelled = list.filter((b: any) => b.calculatedStatus === 'Auto Cancelled').length;

  return [
    { label: 'Seat Bookings', value: total },
    { label: 'Completed', value: completed },
    { label: 'Early Check-outs', value: early },
    { label: 'On-Time Check-outs', value: onTime },
    { label: 'Total Overstays', value: overstays },
    { label: 'Serious Overstays', value: seriousOverstays },
    { label: 'Auto-Cancelled', value: cancelled }
  ];
});

const tableHeaders = computed(() => {
  if (filters.category === 'bookings') {
    return ['Student Information', 'Booking Date', 'Seat & Library', 'Planned Time (Start/End)', 'Actual Time (Check-In/Out)', 'Duration Details', 'Status'];
  }
  if (filters.category === 'book_reservations') {
    return ['Student Information', 'Book & Library', 'Reservation Details', 'Days Details', 'Approved By', 'Status'];
  }
  if (filters.category === 'complaints') {
    return ['Student Information', 'Complaint Details', 'Resolution Details', 'Status'];
  }
  if (filters.category === 'attendance') {
    return ['Student Details', 'Library Location', 'Date', 'Seat Designation', 'Check-In / Out', 'Session Duration', 'Check-in Method', 'Status'];
  }
  if (filters.category === 'seat_utilization') {
    return ['Library Name', 'Floor Level', 'Seat Number', 'Amenities', 'Status'];
  }
  if (filters.category === 'books') {
    return ['Book ID', 'Title', 'Author', 'Library', 'Type Format', 'Availability'];
  }
  if (filters.category === 'events') {
    return ['Event Information', 'Event Type', 'Library', 'Date & Time', 'Venue', 'Participants', 'Capacity & Revenue', 'Status'];
  }
  return ['Event ID', 'Event Title', 'Library', 'Date Scheduled', 'Venue', 'Participants', 'Capacity Status'];
});

// ---------- Status Badge Checks ----------
const isStatusField = (val: string) => {
  const statuses = [
    'booked', 'checked_in', 'checked_out', 'cancelled', 'available', 'occupied', 
    'maintenance', 'open', 'resolved', 'in_progress', 'left', 'present', 
    'checked out on time', 'early check-out', 'overstay', 'serious overstay', 
    'auto cancelled', 'unclaimed', 'pending approval', 'approved', 'rejected', 
    'collected', 'returned early', 'returned on time', 'returned late', 
    'overdue', 'not picked up', 'borrowed', 'pending', 'in progress', 'closed',
    'upcoming', 'ongoing', 'completed', 'full'
  ];
  return typeof val === 'string' && statuses.includes(val.toLowerCase());
};

const statusBadgeHtml = (status: string) => {
  const colors: Record<string, string> = {
    'checked out on time': '#059669',
    'early check-out': '#6366f1',
    'overstay': '#d97706',
    'serious overstay': '#dc2626',
    'auto cancelled': '#475569',
    'unclaimed': '#94a3b8',
    'checked in': '#7c3aed',
    'present': '#059669',
    'left': '#6366f1',
    'available': '#059669',
    'occupied': '#d97706',
    'maintenance': '#dc2626',
    'open': '#d97706',
    'resolved': '#059669',
    'in_progress': '#7c3aed',
    // Book Reservations Statuses
    'pending approval': '#d97706',
    'approved': '#059669',
    'rejected': '#dc2626',
    'collected': '#3b82f6',
    'returned early': '#6366f1',
    'returned on time': '#059669',
    'returned late': '#dc2626',
    'overdue': '#dc2626',
    'not picked up': '#475569',
    'borrowed': '#7c3aed',
    // Support/Complaints Statuses
    'pending': '#d97706',
    'in progress': '#7c3aed',
    'closed': '#475569',
    // Events Statuses
    'upcoming': '#3b82f6',
    'ongoing': '#7c3aed',
    'completed': '#059669',
    'cancelled': '#dc2626',
    'full': '#ef4444'
  };
  const c = colors[status.toLowerCase()] || '#6b7280';
  return `<span class="px-2 py-0.5 rounded text-[10px] font-black text-white uppercase tracking-wider block text-center" style="background: ${c}">${status.replace(/_/g, ' ')}</span>`;
};

// ---------- Export Operations ----------
const exportReport = (format: 'pdf' | 'excel') => {
  if (!generatedReport.value) return;
  const label = `${generatedReport.value.label} Report`;
  
  if (format === 'pdf') {
    const html = buildPremiumHTML(generatedReport.value);
    printHTML(html);
  } else {
    const csv = buildPremiumCSV(generatedReport.value);
    downloadAsCSV(`${label.replace(/\s+/g, '_')}_${Date.now()}.csv`, csv);
  }

  // Add to History
  reportHistory.value.unshift({
    name: label,
    type: generatedReport.value.type,
    format,
    libraryId: selectedLibraryId.value,
    generatedAt: new Date().toLocaleString('en-PK', { dateStyle: 'medium', timeStyle: 'short' }),
  });
  if (reportHistory.value.length > 100) reportHistory.value.pop();
  saveHistory();
};

// ---------- PDF / CSV Builders ----------
const buildPremiumHTML = (report: any) => {
  const isBookings = report.type === 'bookings';

  const statsHTML = summaryStats.value.map((s: any) => `
    <div class="stat-box">
      <div class="stat-lbl">${s.label}</div>
      <div class="stat-val">${s.value}</div>
    </div>
  `).join('');

  const tableHeadersHtml = tableHeaders.value.map((h: string) => `<th>${h}</th>`).join('');
  const tableRowsHtml = processedItems.value.map((row: any) => {
    if (isBookings) {
      return `
        <tr>
          <td>
            <strong>${row.studentName}</strong><br/>
            <span style="color:#64748b;font-size:8px;">CRN: ${row.crn}</span>
          </td>
          <td>${row.bookingDate}</td>
          <td>
            <strong>Seat ${row.seatNumber}</strong><br/>
            <span style="color:#64748b;font-size:8px;">${row.libraryName}</span>
          </td>
          <td>${row.startTime} - ${row.endTime}</td>
          <td>${row.actualCheckIn} - ${row.actualCheckOut}</td>
          <td>
            Orig: ${row.bookedDuration}<br/>
            Ext: ${row.extendedTime}<br/>
            Res: ${row.reservedDuration}<br/>
            Used: ${row.usedDuration}
          </td>
          <td>${statusBadgeHtml(row.calculatedStatus)}</td>
        </tr>
      `;
    } else if (report.type === 'book_reservations') {
      return `
        <tr>
          <td>
            <strong>${row.studentName}</strong><br/>
            <span style="color:#64748b;font-size:8px;">CRN: ${row.crn}</span>
          </td>
          <td>
            <strong>${row.bookTitle}</strong><br/>
            <span style="color:#64748b;font-size:8px;">ISBN: ${row.isbn}</span><br/>
            <span style="color:#7c3aed;font-size:8px;font-weight:bold;">${row.libraryName}</span>
          </td>
          <td>
            Res: ${row.reservationDate}<br/>
            Appr: ${row.approvalDate}<br/>
            Pickup: ${row.pickupDate}<br/>
            Return: ${row.returnDate}
          </td>
          <td>
            Req: ${row.requestedDays} days<br/>
            Act: ${row.actualBorrowedDays} days
          </td>
          <td>${row.approvedBy}</td>
          <td>
            ${statusBadgeHtml(row.reservationStatus)}
            ${row.returnStatusToShow ? `<div style="margin-top: 4px;">${statusBadgeHtml(row.returnStatusToShow)}</div>` : ''}
          </td>
        </tr>
      `;
    } else if (report.type === 'complaints') {
      return `
        <tr>
          <td>
            <strong>${row.studentName}</strong><br/>
            <span style="color:#64748b;font-size:8px;">CRN: ${row.crn}</span>
          </td>
          <td>
            <strong>#${row.complaintId}</strong><br/>
            <span style="color:#1e293b;font-weight:600;">${row.subject}</span><br/>
            <span style="color:#64748b;font-size:8px;">Filed: ${row.submittedDate}</span><br/>
            <span style="color:#7c3aed;font-size:8px;font-weight:bold;">${row.libraryName}</span><br/>
            <span style="font-size:8px;font-weight:bold;color:${row.priority.toLowerCase() === 'urgent' || row.priority.toLowerCase() === 'high' ? '#dc2626' : '#64748b'};">Priority: ${row.priority}</span>
          </td>
          <td>
            First Response: ${row.responseDate}<br/>
            Resolved: ${row.resolutionDate}<br/>
            ${row.resolutionTime !== '—' ? `<span style="color:#7c3aed;font-weight:bold;">Time Taken: ${row.resolutionTime}</span>` : ''}
          </td>
          <td>${statusBadgeHtml(row.status)}</td>
        </tr>
      `;
    } else if (report.type === 'events') {
      return `
        <tr>
          <td>
            <strong>${row.title}</strong><br/>
            <span style="color:#64748b;font-size:8px;">${row.eventId}</span>
          </td>
          <td>${row.type}</td>
          <td><strong>${row.libraryName}</strong></td>
          <td>
            Date: ${row.date}<br/>
            Time: ${row.time}
          </td>
          <td>${row.venue}</td>
          <td>
            Reg: ${row.registered}<br/>
            Attended: ${row.attended}<br/>
            ${row.registered > 0 ? `<span style="color:#7c3aed;font-weight:bold;">Rate: ${row.attendanceRate}%</span>` : ''}
          </td>
          <td>
            Price: ${row.priceStr}<br/>
            ${row.isPaid ? `<span style="color:#7c3aed;font-weight:bold;">Rev: PKR ${row.revenue.toFixed(2)}</span><br/>` : ''}
            Cap: ${row.capacityStr} ${row.capacity ? `(${row.fillRate}% filled)` : ''}
          </td>
          <td>
            ${statusBadgeHtml(row.calculatedStatus)}
            ${row.capacityStatus === 'Full' ? `<div style="margin-top: 4px;">${statusBadgeHtml('full')}</div>` : ''}
          </td>
        </tr>
      `;
    } else if (report.type === 'attendance') {
      return `
        <tr>
          <td>
            <strong>${row.studentName}</strong><br/>
            <span style="color:#64748b;font-size:8px;">CRN: ${row.crn}</span>
          </td>
          <td><strong>${row.libraryName}</strong></td>
          <td>
            <strong>${row.date}</strong><br/>
            <span style="color:#64748b;font-size:8px;">${row.attendanceId}</span>
          </td>
          <td><strong>Seat ${row.seatNumber}</strong></td>
          <td>
            In: ${row.checkInTime}<br/>
            Out: ${row.checkOutTime}
          </td>
          <td>
            <span style="font-weight:bold;color:${row.rawStatus === 'present' ? '#7c3aed' : '#1e293b'};">
              ${row.durationStr}
            </span>
          </td>
          <td><strong>${row.method}</strong></td>
          <td>${statusBadgeHtml(row.calculatedStatus)}</td>
        </tr>
      `;
    } else {
      const cols = Object.values(row).map((col: any, colIdx: number) => {
        if (colIdx === Object.keys(row).length - 1 && isStatusField(col)) {
          return `<td>${statusBadgeHtml(col)}</td>`;
        }
        return `<td>${col}</td>`;
      }).join('');
      return `<tr>${cols}</tr>`;
    }
  }).join('');

  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <title>${report.label} Report</title>
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;800;900&display=swap" rel="stylesheet">
        <style>
          @page { size: A4; margin: 15mm; }
          body { font-family: 'Outfit', sans-serif; color: #1e293b; font-size: 10px; line-height: 1.4; margin: 0; padding: 0; background: #fff; }
          .header-container { display: flex; justify-content: space-between; border-bottom: 2px solid #7c3aed; padding-bottom: 12px; margin-bottom: 16px; }
          .logo-area { display: flex; gap: 10px; align-items: center; }
          .logo-icon { width: 32px; height: 32px; background: #7c3aed; border-radius: 8px; color: #fff; display: flex; align-items: center; justify-content: center; font-size: 18px; font-weight: bold; }
          .lib-title { font-size: 16px; font-weight: 800; color: #0f172a; margin: 0; }
          .lib-meta { font-size: 9px; color: #64748b; margin-top: 2px; }
          .report-meta { text-align: right; }
          .report-meta h1 { font-size: 14px; font-weight: 900; color: #7c3aed; margin: 0; text-transform: uppercase; letter-spacing: 0.05em; }
          .report-meta p { font-size: 9px; color: #475569; margin: 2px 0 0 0; }
          
          .generated-by-bar { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 8px 12px; display: flex; justify-content: space-between; font-weight: 600; color: #475569; font-size: 9px; margin-bottom: 16px; }
          .generated-by-bar span { color: #0f172a; }
          
          .summary-title { font-size: 10px; font-weight: 800; text-transform: uppercase; color: #7c3aed; margin-bottom: 8px; tracking-spacing: 0.05em; }
          .stat-grid { display: grid; grid-template-columns: repeat(${summaryStats.value.length}, 1fr); gap: 6px; margin-bottom: 18px; }
          .stat-box { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 8px; text-align: center; }
          .stat-lbl { font-size: 7px; font-weight: 800; color: #64748b; text-transform: uppercase; }
          .stat-val { font-size: 14px; font-weight: 900; color: #0f172a; margin-top: 2px; }
          
          table { width: 100%; border-collapse: collapse; margin-bottom: 20px; page-break-inside: auto; }
          tr { page-break-inside: avoid; page-break-after: auto; }
          th { background: #7c3aed; color: #fff; padding: 6px 10px; font-size: 8px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.05em; text-align: left; }
          td { padding: 6px 10px; border-bottom: 1px solid #e2e8f0; color: #334155; font-size: 8px; }
          tr:nth-child(even) { background: #f8fafc; }
          
          .footer-container { display: flex; justify-content: space-between; border-top: 1px solid #e2e8f0; padding-top: 8px; font-size: 8px; color: #94a3b8; font-weight: bold; position: fixed; bottom: 0; left: 0; right: 0; background: #fff; }
          @media print {
            .no-print { display: none; }
            body { padding-bottom: 30px; }
          }
        </style>
      </head>
      <body>
        <div class="no-print" style="position: fixed; top: 12px; right: 12px; z-index: 1000;">
          <button onclick="window.print()" style="padding: 8px 16px; background: #7c3aed; color: white; border: none; border-radius: 6px; cursor: pointer; font-weight: bold; font-size: 11px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">Print / Save PDF</button>
        </div>

        <div class="header-container">
          <div class="logo-area">
            <div class="logo-icon">📚</div>
            <div>
              <h2 class="lib-title">${report.libraryInfo?.name}</h2>
              <div class="lib-meta">${report.libraryInfo?.address} &bull; Phone: ${report.libraryInfo?.contact_info?.phone || 'N/A'} &bull; Email: ${report.libraryInfo?.contact_info?.email || 'N/A'}</div>
            </div>
          </div>
          <div class="report-meta">
            <h1>${report.label} Report</h1>
            <p>Date Range: ${fmtDate(report.fromDate)} - ${fmtDate(report.toDate)}</p>
          </div>
        </div>

        <div class="generated-by-bar">
          <div>Generated By: <span>${report.generatedBy.name}</span></div>
          <div>Role: <span>${report.generatedBy.role}</span></div>
          <div>Staff ID: <span>${report.generatedBy.staffId}</span></div>
          <div>Date Generated: <span>${report.generationDate} ${report.generationTime}</span></div>
        </div>

        <div class="summary-title">Consolidated Summary Statistics</div>
        <div class="stat-grid">
          ${statsHTML}
        </div>

        <div class="summary-title">Report Content Details</div>
        <table>
          <thead>
            <tr>${tableHeadersHtml}</tr>
          </thead>
          <tbody>
            ${tableRowsHtml}
          </tbody>
        </table>

        <div class="footer-container">
          <div>SmartLib System &bull; Consolidated Audit</div>
          <div style="font-style: italic;">This report was generated automatically by SmartLib.</div>
          <div>Timestamp: ${report.generationDate} ${report.generationTime}</div>
        </div>
      </body>
    </html>
  `;
};

const buildPremiumCSV = (report: any) => {
  const isBookings = report.type === 'bookings';
  let csv = `"Library Target","${report.libraryInfo?.name}"\n`;
  csv += `"Address","${report.libraryInfo?.address}"\n`;
  csv += `"Phone","${report.libraryInfo?.contact_info?.phone || ''}"\n`;
  csv += `"Email","${report.libraryInfo?.contact_info?.email || ''}"\n\n`;

  csv += `"Report Title","${report.label} Report"\n`;
  csv += `"Time Period","${fmtDate(report.fromDate)} to ${fmtDate(report.toDate)}"\n`;
  csv += `"Generated By","${report.generatedBy.name} (${report.generatedBy.role})"\n`;
  csv += `"Staff ID","${report.generatedBy.staffId}"\n`;
  csv += `"Generation Date","${report.generationDate} ${report.generationTime}"\n\n`;

  csv += `"=== EXECUTIVE SUMMARY ==="\n`;
  summaryStats.value.forEach((s: any) => {
    csv += `"${s.label}","${s.value}"\n`;
  });
  csv += `\n`;

  csv += `"=== REPORT DETAILS ==="\n`;
  csv += `"${tableHeaders.value.join('","')}"\n`;
  
  if (isBookings) {
    processedItems.value.forEach((row: any) => {
      csv += `"${row.studentName} (CRN: ${row.crn})","${row.bookingDate}","Seat ${row.seatNumber} (${row.libraryName})","${row.startTime} - ${row.endTime}","${row.actualCheckIn} - ${row.actualCheckOut}","Orig:${row.bookedDuration} Ext:${row.extendedTime} Res:${row.reservedDuration} Used:${row.usedDuration}","${row.calculatedStatus}"\n`;
    });
  } else if (report.type === 'book_reservations') {
    processedItems.value.forEach((row: any) => {
      csv += `"${row.studentName} (CRN: ${row.crn})","${row.bookTitle} (ISBN: ${row.isbn}) (${row.libraryName})","Res:${row.reservationDate} Appr:${row.approvalDate} Pickup:${row.pickupDate} Return:${row.returnDate}","Req:${row.requestedDays} Act:${row.actualBorrowedDays} Early/Late:${row.daysEarlyLate}","${row.approvedBy}","Reservation:${row.reservationStatus} TimeAnalysis:${row.returnStatusToShow || '—'}"\n`;
    });
  } else if (report.type === 'complaints') {
    processedItems.value.forEach((row: any) => {
      csv += `"${row.studentName} (CRN: ${row.crn})","ID:${row.complaintId} Subject:${row.subject.replace(/"/g, '""')} Filed:${row.submittedDate} Library:${row.libraryName} Priority:${row.priority}","First Response:${row.responseDate} Resolved:${row.resolutionDate} Time Taken:${row.resolutionTime}","${row.status}"\n`;
    });
  } else if (report.type === 'events') {
    processedItems.value.forEach((row: any) => {
      csv += `"${row.title} (${row.eventId})","${row.type}","${row.libraryName}","Date:${row.date} Time:${row.time}","${row.venue}","Reg:${row.registered} Attended:${row.attended} Rate:${row.attendanceRate}%","Price:${row.priceStr} Revenue:PKR ${row.revenue.toFixed(2)} Cap:${row.capacityStr} Fill:${row.fillRate}%","Status:${row.calculatedStatus} CapacityStatus:${row.capacityStatus}"\n`;
    });
  } else if (report.type === 'attendance') {
    processedItems.value.forEach((row: any) => {
      csv += `"${row.studentName} (CRN: ${row.crn})","${row.libraryName}","${row.date} (${row.attendanceId})","Seat ${row.seatNumber}","In:${row.checkInTime} Out:${row.checkOutTime}","${row.durationStr}","${row.method}","${row.calculatedStatus}"\n`;
    });
  } else {
    processedItems.value.forEach((row: any) => {
      const vals = Object.values(row).map((v: any) => String(v).replace(/"/g, '""'));
      csv += `"${vals.join('","')}"\n`;
    });
  }

  return csv;
};

const printHTML = (html: string) => {
  const printWindow = window.open('', '_blank');
  if (!printWindow) {
    showError('Popup Blocked', 'Please allow popups to open the print layout.');
    return;
  }
  printWindow.document.write(html);
  printWindow.document.close();
  printWindow.onload = () => {
    setTimeout(() => printWindow.print(), 350);
  };
};

const downloadAsCSV = (filename: string, content: string) => {
  const blob = new Blob([content], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};

const downloadReport = (entry: any) => {
  exportReport(entry.format as 'pdf' | 'excel');
};

// ---------- Format Helpers ----------
const fmtDate = (d: any) => {
  if (!d) return '—';
  const dt = new Date(d);
  return isNaN(dt.getTime()) ? String(d) : dt.toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' });
};

const fmtTime12 = (d: any) => {
  if (!d) return '—';
  const dt = new Date(d);
  return isNaN(dt.getTime()) ? String(d) : dt.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });
};

onMounted(async () => {
  try {
    libraries.value = await superadminAPI.getLibraries();
    loadHistory();
  } catch (error) {
    showError('Error', 'Failed to load system libraries.');
  }
});
</script>

<style scoped>
.font-outfit {
  font-family: 'Outfit', sans-serif;
}
</style>
