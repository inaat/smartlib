<template>
  <div class="p-6 space-y-6">
    <!-- Top Header -->
    <div class="flex items-center justify-between bg-white p-4 rounded-xl shadow-sm border border-gray-100">
      <div class="flex items-center space-x-4">
        <div class="flex items-center space-x-2">
          <!-- Floor Selector -->
          <div class="relative">
            <select
              v-model="activeFloorId"
              class="appearance-none flex items-center bg-gray-50 border border-gray-200 rounded-lg hover:bg-gray-100 transition-colors text-sm font-medium text-gray-700 py-1.5 pl-9 pr-8 cursor-pointer focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              <option v-for="floor in floors" :key="floor.id" :value="floor.id">
                {{ floor.name }}
              </option>
            </select>
            <Building2 class="absolute left-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
            <ChevronDown class="absolute right-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400 pointer-events-none" />
          </div>

          <div class="flex items-center bg-gray-50 p-1 rounded-lg border border-gray-200 max-w-[400px] overflow-x-auto no-scrollbar gap-1">
            <button
              @click="activeSectionId = null"
              :class="[
                'px-4 py-1.5 rounded-md text-sm font-medium transition-all whitespace-nowrap',
                activeSectionId === null
                  ? 'bg-white text-emerald-600 shadow-sm'
                  : 'text-gray-500 hover:text-gray-700'
              ]"
            >
              All Seats
            </button>
            <button
              v-for="section in currentFloorSections"
              :key="section.id"
              @click="activeSectionId = section.id"
              :class="[
                'px-4 py-1.5 rounded-md text-sm font-medium transition-all whitespace-nowrap',
                activeSectionId === section.id
                  ? 'bg-white text-emerald-600 shadow-sm'
                  : 'text-gray-500 hover:text-gray-700'
              ]"
            >
              {{ section.name }}
            </button>
          </div>
        </div>
      </div>
      <div class="flex items-center space-x-3">
        <button
          @click="isLayoutMode = !isLayoutMode"
          :class="[
            'px-4 py-2 rounded-lg transition-all flex items-center space-x-2 border shadow-sm',
            isLayoutMode 
              ? 'bg-emerald-600 text-white border-emerald-600' 
              : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
          ]"
        >
          <Move class="w-4 h-4" />
          <span class="text-sm font-medium">{{ isLayoutMode ? 'View Mode' : 'Layout Mode' }}</span>
          <Settings v-if="isLayoutMode" class="w-3.5 h-3.5 ml-1" />
        </button>
      </div>
    </div>

    <!-- Stats Bar -->
    <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
      <div 
        v-for="(stat, key) in [
          { label: 'Total Seats', count: seatStats.total, color: 'blue', bg: 'bg-blue-50', text: 'text-blue-600' },
          { label: 'Available', count: seatStats.available, color: 'green', bg: 'bg-green-50', text: 'text-green-600' },
          { label: 'Occupied', count: seatStats.occupied, color: 'orange', bg: 'bg-orange-50', text: 'text-orange-600' },
          { label: 'Reserved', count: seatStats.reserved, color: 'teal', bg: 'bg-teal-50', text: 'text-teal-600' },
          { label: 'Overstay', count: seatStats.overstay, color: 'yellow', bg: 'bg-yellow-50', text: 'text-yellow-600' },
          { label: 'Serious Overstay', count: seatStats.serious_overstay, color: 'red', bg: 'bg-red-50', text: 'text-red-600' },
          { label: 'Maintenance', count: seatStats.maintenance, color: 'gray', bg: 'bg-gray-100', text: 'text-gray-600' }
        ]" 
        :key="key"
        class="bg-white p-3 rounded-xl border border-gray-100 shadow-sm flex items-center space-x-4"
      >
        <div :class="['w-10 h-10 rounded-lg flex items-center justify-center font-bold text-lg', stat.bg, stat.text]">
          {{ stat.count }}
        </div>
        <div>
          <p class="text-xs font-semibold text-gray-500 whitespace-nowrap">{{ stat.label }}</p>
        </div>
      </div>
    </div>

    <!-- Layout Toolbar (Above the Widget) -->
    <transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="transform -translate-y-4 opacity-0"
      enter-to-class="transform translate-y-0 opacity-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="transform translate-y-0 opacity-100"
      leave-to-class="transform -translate-y-4 opacity-0"
    >
      <div v-if="isLayoutMode" class="bg-white p-2 rounded-xl border border-emerald-100 shadow-sm flex items-center justify-between">
        <div class="flex items-center space-x-1">
          <div class="px-3 border-r border-gray-100 mr-2 py-1">
            <span class="text-[10px] font-bold text-emerald-600 uppercase tracking-widest whitespace-nowrap">Layout Toolbar</span>
          </div>
          
          <button 
            @click="autoArrangeLayout"
            :disabled="isArranging"
            class="px-4 py-2 hover:bg-emerald-50 text-gray-700 hover:text-emerald-600 rounded-lg transition-all flex items-center space-x-2 group disabled:opacity-50"
          >
            <Wand2 :class="['w-4 h-4 transition-transform group-hover:rotate-12', isArranging ? 'animate-pulse' : '']" />
            <span class="text-sm font-semibold whitespace-nowrap">{{ isArranging ? 'Arranging...' : 'Auto-Arrange' }}</span>
          </button>

          <div class="w-px h-6 bg-gray-100 mx-2"></div>

          <button 
            class="p-2 hover:bg-gray-50 text-gray-400 rounded-lg transition-all relative group"
            title="Add specialized props..."
          >
            <Plus class="w-4 h-4" />
          </button>
        </div>

        <div class="text-[10px] text-gray-400 font-medium px-4 italic flex items-center">
          <Info class="w-3 h-3 mr-1" />
          Drag seats to reposition or use auto-arrange for standard layouts
        </div>
      </div>
    </transition>

    <!-- Main Seat Map Card -->
    <div class="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-visible flex flex-col min-h-[600px]">
      <!-- Sub-header -->
      <div class="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
        <h2 class="font-bold text-gray-800">Seat Map - <span class="text-gray-500">{{ activeSectionName }}</span></h2>
        <div class="text-sm font-medium text-gray-400">{{ activeSectionName }}</div>
      </div>

      <!-- Scrollable Map Area -->
      <div class="flex-1 overflow-visible bg-gray-50 relative p-12 min-h-[600px]">
        
        <!-- Floor Plan Outline Elements -->
        <div class="absolute inset-0 pointer-events-none opacity-20">
          <div class="absolute top-0 bottom-0 left-[5%] w-[2px] bg-gray-300"></div>
          <div class="absolute top-[10%] bottom-[10%] left-0 w-[5%] border-y-2 border-r-2 border-gray-300 rounded-r-3xl"></div>
          <div class="absolute top-0 bottom-0 right-[5%] w-[2px] bg-gray-300"></div>
          <div class="absolute top-[40%] bottom-[40%] right-0 w-[5%] border-y-2 border-l-2 border-gray-300 rounded-l-3xl"></div>
        </div>

        <!-- Exit Labels -->
        <div class="absolute top-[10%] left-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Exit</div>
        <div class="absolute bottom-[10%] left-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Exit</div>
        <div class="absolute top-[40%] right-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Exit</div>
        <div class="absolute bottom-[40%] right-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Exit</div>

        <!-- Desk Container Layer -->
        <div class="relative w-full h-full min-h-[500px]">
          <!-- When in Grid View -->
          <div v-if="!isLayoutMode" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16 p-8 justify-items-center">
            <!-- Simulated Tables/Desks by grouping seats -->
            <div v-for="tableIndex in Math.ceil(sectionSeats.length / 8)" :key="tableIndex" class="space-y-1">
              <!-- Top Row of Chairs -->
              <div class="flex items-center space-x-1 justify-center">
                <div 
                  v-for="seat in sectionSeats.slice((tableIndex-1)*8, (tableIndex-1)*8 + 4)" 
                  :key="seat.id" 
                  class="relative group"
                  @mouseenter="hoveredSeat = seat"
                  @mouseleave="hoveredSeat = null"
                  @click="selectSeat(seat)"
                >
                  <!-- Chair Icon -->
                  <div 
                    :class="[
                      'w-10 h-10 flex items-center justify-center transition-all cursor-pointer hover:scale-110 drop-shadow-sm',
                      getStatusColors(seat.status).text
                    ]"
                  >
                    <svg viewBox="0 0 100 100" class="w-10 h-10" xmlns="http://www.w3.org/2000/svg">
                      <path d="M 20 15 Q 50 5 80 15 L 75 30 Q 50 20 25 30 Z" fill="currentColor" style="filter: brightness(0.85);"/>
                      <rect x="10" y="25" width="12" height="40" rx="4" fill="#CBD5E1" stroke="#94A3B8" stroke-width="1.5" />
                      <rect x="78" y="25" width="12" height="40" rx="4" fill="#CBD5E1" stroke="#94A3B8" stroke-width="1.5" />
                      <rect x="12" y="30" width="8" height="30" rx="3" fill="#F1F5F9" />
                      <rect x="80" y="30" width="8" height="30" rx="3" fill="#F1F5F9" />
                      <rect x="22" y="25" width="56" height="45" rx="10" fill="currentColor" />
                      <rect x="26" y="33" width="48" height="30" rx="6" fill="#FFFFFF" opacity="0.15" />
                    </svg>
                    <div class="absolute inset-0 flex items-center justify-center">
                      <div class="mt-3 px-1.5 py-0.5 rounded shadow-sm border border-black/5 bg-white/95">
                        <span class="block text-[9px] font-bold text-gray-700 leading-none">{{ String(seat.seat_number).replace(/\D/g, '') || seat.seat_number }}</span>
                      </div>
                    </div>
                  </div>

                  <!-- Hover Detail Popover -->
                  <transition name="fade">
                    <div
                      v-if="hoveredSeat?.id === seat.id"
                      class="absolute bottom-[110%] left-1/2 -translate-x-1/2 w-64 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-[100]"
                    >
                      <div class="px-4 py-3 bg-gray-50 border-b border-gray-100 flex items-center justify-between">
                        <span class="text-sm font-bold text-gray-800">Seat {{ seat.seat_number }}</span>
                        <div :class="['w-2 h-2 rounded-full', getStatusColors(seat.status).dotBg]"></div>
                      </div>
                      <div class="p-4 space-y-4">
                        <div class="flex items-center space-x-3">
                          <div class="w-10 h-10 rounded-full bg-teal-50 flex items-center justify-center text-teal-600 border border-teal-100">
                            <User class="w-5 h-5" />
                          </div>
                          <div class="flex-1 min-w-0">
                            <p class="text-sm font-bold text-gray-900 truncate">{{ seat.current_booking?.user_name || 'Available' }}</p>
                            <p class="text-xs font-medium text-gray-500">
                              {{ seat.current_booking?.minutes_left ? seat.current_booking.minutes_left + ' mins Left' : 'Available' }}
                            </p>
                          </div>
                        </div>

                        <div class="grid grid-cols-3 gap-2 pt-3 border-t border-gray-50">
                          <div :class="['flex flex-col items-center p-2 rounded-xl transition-colors', seat.has_computer ? 'bg-teal-50 text-teal-600' : 'bg-gray-50 text-gray-400']">
                            <Monitor class="w-4 h-4 mb-1" />
                            <span class="text-[8px] font-black uppercase tracking-tighter">PC</span>
                          </div>
                          <div :class="['flex flex-col items-center p-2 rounded-xl transition-colors', seat.near_window ? 'bg-sky-50 text-sky-600' : 'bg-gray-50 text-gray-400']">
                            <Layout class="w-4 h-4 mb-1" />
                            <span class="text-[8px] font-black uppercase tracking-tighter">Window</span>
                          </div>
                          <div :class="['flex flex-col items-center p-2 rounded-xl transition-colors', seat.socket_count > 0 ? 'bg-orange-50 text-orange-600' : 'bg-gray-50 text-gray-400']">
                            <Zap class="w-4 h-4 mb-1" />
                            <span class="text-[8px] font-black uppercase tracking-tighter">{{ seat.socket_count }} Slots</span>
                          </div>
                        </div>

                        <div class="text-[10px] font-black text-gray-400 uppercase tracking-widest pt-2">
                          {{ activeSectionName }}
                        </div>
                      </div>
                    </div>
                  </transition>
                </div>
              </div>

              <!-- Table Visual -->
              <div class="w-48 h-10 bg-white border-2 border-gray-100 rounded-sm shadow-sm flex items-center justify-center relative mx-auto">
                <div class="absolute inset-x-4 h-[2px] bg-gray-50 top-2"></div>
                <div class="absolute inset-x-4 h-[2px] bg-gray-50 bottom-2"></div>
                <!-- Table Decoration -->
                <div class="flex space-x-4 opacity-10">
                   <div v-for="i in 3" :key="i" class="w-8 h-1 bg-gray-400 rounded-full"></div>
                </div>
              </div>

              <!-- Bottom Row of Chairs -->
              <div class="flex items-center space-x-1 justify-center">
                <div 
                  v-for="seat in sectionSeats.slice((tableIndex-1)*8 + 4, (tableIndex-1)*8 + 8)" 
                  :key="seat.id" 
                  class="relative group"
                  @mouseenter="hoveredSeat = seat"
                  @mouseleave="hoveredSeat = null"
                  @click="selectSeat(seat)"
                >
                  <!-- Chair Icon (Flipped) -->
                  <div 
                    :class="[
                      'w-10 h-10 flex items-center justify-center transition-all cursor-pointer hover:scale-110 drop-shadow-sm',
                      getStatusColors(seat.status).text
                    ]"
                  >
                    <svg viewBox="0 0 100 100" class="w-10 h-10 rotate-180" xmlns="http://www.w3.org/2000/svg">
                      <path d="M 20 15 Q 50 5 80 15 L 75 30 Q 50 20 25 30 Z" fill="currentColor" style="filter: brightness(0.85);"/>
                      <rect x="10" y="25" width="12" height="40" rx="4" fill="#CBD5E1" stroke="#94A3B8" stroke-width="1.5" />
                      <rect x="78" y="25" width="12" height="40" rx="4" fill="#CBD5E1" stroke="#94A3B8" stroke-width="1.5" />
                      <rect x="12" y="30" width="8" height="30" rx="3" fill="#F1F5F9" />
                      <rect x="80" y="30" width="8" height="30" rx="3" fill="#F1F5F9" />
                      <rect x="22" y="25" width="56" height="45" rx="10" fill="currentColor" />
                      <rect x="26" y="33" width="48" height="30" rx="6" fill="#FFFFFF" opacity="0.15" />
                    </svg>
                    <div class="absolute inset-0 flex items-center justify-center">
                      <div class="mb-3 px-1.5 py-0.5 rounded shadow-sm border border-black/5 bg-white/95">
                        <span class="block text-[9px] font-bold text-gray-700 leading-none">{{ String(seat.seat_number).replace(/\D/g, '') || seat.seat_number }}</span>
                      </div>
                    </div>
                  </div>

                  <!-- Hover Detail Popover -->
                  <transition name="fade">
                    <div
                      v-if="hoveredSeat?.id === seat.id"
                      class="absolute top-[110%] left-1/2 -translate-x-1/2 w-64 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-[100]"
                    >
                      <div class="px-4 py-3 bg-gray-50 border-b border-gray-100 flex items-center justify-between">
                        <span class="text-sm font-bold text-gray-800">Seat {{ seat.seat_number }}</span>
                        <div :class="['w-2 h-2 rounded-full', getStatusColors(seat.status).dotBg]"></div>
                      </div>
                      <div class="p-4 space-y-4">
                        <div class="flex items-center space-x-3">
                          <div class="w-10 h-10 rounded-full bg-teal-50 flex items-center justify-center text-teal-600 border border-teal-100">
                            <User class="w-5 h-5" />
                          </div>
                          <div class="flex-1 min-w-0">
                            <p class="text-sm font-bold text-gray-900 truncate">{{ seat.current_booking?.user_name || 'Available' }}</p>
                            <p class="text-xs font-medium text-gray-500">
                              {{ seat.current_booking?.minutes_left ? seat.current_booking.minutes_left + ' mins Left' : 'Available' }}
                            </p>
                          </div>
                        </div>

                        <!-- Amenities Section -->
                        <div class="grid grid-cols-3 gap-2 pt-3 border-t border-gray-50">
                          <div :class="['flex flex-col items-center p-2 rounded-xl transition-colors', seat.has_computer ? 'bg-teal-50 text-teal-600' : 'bg-gray-50 text-gray-400']">
                            <Monitor class="w-4 h-4 mb-1" />
                            <span class="text-[8px] font-black uppercase tracking-tighter">PC</span>
                          </div>
                          <div :class="['flex flex-col items-center p-2 rounded-xl transition-colors', seat.near_window ? 'bg-sky-50 text-sky-600' : 'bg-gray-50 text-gray-400']">
                            <Layout class="w-4 h-4 mb-1" />
                            <span class="text-[8px] font-black uppercase tracking-tighter">Window</span>
                          </div>
                          <div :class="['flex flex-col items-center p-2 rounded-xl transition-colors', seat.socket_count > 0 ? 'bg-orange-50 text-orange-600' : 'bg-gray-50 text-gray-400']">
                            <Zap class="w-4 h-4 mb-1" />
                            <span class="text-[8px] font-black uppercase tracking-tighter">{{ seat.socket_count }} Slots</span>
                          </div>
                        </div>

                        <div class="text-[10px] font-black text-gray-400 uppercase tracking-widest pt-2">
                          {{ activeSectionName }}
                        </div>
                      </div>
                    </div>
                  </transition>
                </div>
              </div>
            </div>
          </div>

          <!-- When in Layout Mode -->
          <div 
            v-else 
            class="relative w-full overflow-x-auto bg-gray-50/50 flex flex-col items-center justify-start p-8 rounded-2xl border border-gray-100 shadow-inner"
          >
            <div
              class="relative flex-none w-[800px] h-[600px] bg-white rounded-2xl border-[6px] border-gray-900 shadow-md overflow-hidden transition-all"
              @dragover.prevent
              @drop="onDrop($event)"
            >
            <!-- E-Shaped Floor Plan Backdrop -->
            <div class="absolute inset-0 pointer-events-none">
              <!-- Top Windows -->
              <div class="absolute top-0 left-[25%] w-[15%] h-2 bg-blue-100 border-x border-b border-gray-400 rounded-b-sm"></div>
              <div class="absolute top-0 right-[25%] w-[15%] h-2 bg-blue-100 border-x border-b border-gray-400 rounded-b-sm"></div>
              
              <!-- Side Windows -->
              <div class="absolute top-[45%] left-0 w-2 h-[15%] bg-blue-100 border-y border-r border-gray-400 rounded-r-sm"></div>
              <div class="absolute top-[20%] right-0 w-2 h-[40%] bg-blue-100 border-y border-l border-gray-400 rounded-l-sm"></div>

              <!-- Top Left Door Swing -->
              <div class="absolute top-0 left-0 w-20 h-20 border-b-2 border-r-2 border-gray-800 rounded-br-full opacity-40"></div>
              <!-- Bottom Right Door Swing -->
              <div class="absolute bottom-0 right-0 w-20 h-20 border-t-2 border-l-2 border-gray-800 rounded-tl-full opacity-40"></div>

              <!-- The E-Shaped Table Structure -->
              <div class="absolute top-[80px] left-[10%] right-[10%] h-[60px] bg-white border-[2px] border-gray-600 shadow-sm z-10"></div>
              <div class="absolute top-[140px] left-[15%] w-[60px] h-[300px] bg-white border-[2px] border-t-0 border-gray-600 shadow-sm z-0"></div>
              <div class="absolute top-[140px] left-1/2 -translate-x-1/2 w-[60px] h-[300px] bg-white border-[2px] border-t-0 border-gray-600 shadow-sm z-0"></div>
              <div class="absolute top-[140px] right-[15%] w-[60px] h-[300px] bg-white border-[2px] border-t-0 border-gray-600 shadow-sm z-0"></div>
              <div class="absolute bottom-[20px] left-[12%] right-[25%] h-[40px] bg-white border-[2px] border-gray-600 shadow-sm"></div>

              <!-- Decor: Plants -->
              <svg class="absolute top-[220px] left-[32%] w-14 h-14 text-green-700/70 drop-shadow-sm" viewBox="0 0 100 100" fill="currentColor">
                <path d="M50 20Q65 35 50 50Q35 35 50 20Z"/><path d="M50 80Q65 65 50 50Q35 65 50 80Z"/><path d="M20 50Q35 65 50 50Q35 35 20 50Z"/><path d="M80 50Q65 65 50 50Q65 35 80 50Z"/><path d="M28 28Q50 35 50 50Q35 50 28 28Z"/><path d="M72 72Q50 65 50 50Q65 50 72 72Z"/><path d="M28 72Q35 50 50 50Q50 65 28 72Z"/><path d="M72 28Q65 50 50 50Q50 35 72 28Z"/><circle cx="50" cy="50" r="4" fill="#064e3b"/>
              </svg>
              <svg class="absolute top-[380px] left-[32%] w-14 h-14 text-green-700/70 drop-shadow-sm" viewBox="0 0 100 100" fill="currentColor">
                <path d="M50 20Q65 35 50 50Q35 35 50 20Z"/><path d="M50 80Q65 65 50 50Q35 65 50 80Z"/><path d="M20 50Q35 65 50 50Q35 35 20 50Z"/><path d="M80 50Q65 65 50 50Q65 35 80 50Z"/><path d="M28 28Q50 35 50 50Q35 50 28 28Z"/><path d="M72 72Q50 65 50 50Q65 50 72 72Z"/><path d="M28 72Q35 50 50 50Q50 65 28 72Z"/><path d="M72 28Q65 50 50 50Q50 35 72 28Z"/><circle cx="50" cy="50" r="4" fill="#064e3b"/>
              </svg>
              <svg class="absolute top-[220px] right-[32%] w-14 h-14 text-green-700/70 drop-shadow-sm" viewBox="0 0 100 100" fill="currentColor">
                <path d="M50 20Q65 35 50 50Q35 35 50 20Z"/><path d="M50 80Q65 65 50 50Q35 65 50 80Z"/><path d="M20 50Q35 65 50 50Q35 35 20 50Z"/><path d="M80 50Q65 65 50 50Q65 35 80 50Z"/><path d="M28 28Q50 35 50 50Q35 50 28 28Z"/><path d="M72 72Q50 65 50 50Q65 50 72 72Z"/><path d="M28 72Q35 50 50 50Q50 65 28 72Z"/><path d="M72 28Q65 50 50 50Q50 35 72 28Z"/><circle cx="50" cy="50" r="4" fill="#064e3b"/>
              </svg>
              <svg class="absolute top-[380px] right-[32%] w-14 h-14 text-green-700/70 drop-shadow-sm" viewBox="0 0 100 100" fill="currentColor">
                <path d="M50 20Q65 35 50 50Q35 35 50 20Z"/><path d="M50 80Q65 65 50 50Q35 65 50 80Z"/><path d="M20 50Q35 65 50 50Q35 35 20 50Z"/><path d="M80 50Q65 65 50 50Q65 35 80 50Z"/><path d="M28 28Q50 35 50 50Q35 50 28 28Z"/><path d="M72 72Q50 65 50 50Q65 50 72 72Z"/><path d="M28 72Q35 50 50 50Q50 65 28 72Z"/><path d="M72 28Q65 50 50 50Q50 35 72 28Z"/><circle cx="50" cy="50" r="4" fill="#064e3b"/>
              </svg>
              <svg class="absolute bottom-[20px] left-[3%] w-14 h-14 text-green-700/70 drop-shadow-sm" viewBox="0 0 100 100" fill="currentColor">
                <path d="M50 20Q65 35 50 50Q35 35 50 20Z"/><path d="M50 80Q65 65 50 50Q35 65 50 80Z"/><path d="M20 50Q35 65 50 50Q35 35 20 50Z"/><path d="M80 50Q65 65 50 50Q65 35 80 50Z"/><path d="M28 28Q50 35 50 50Q35 50 28 28Z"/><path d="M72 72Q50 65 50 50Q65 50 72 72Z"/><path d="M28 72Q35 50 50 50Q50 65 28 72Z"/><path d="M72 28Q65 50 50 50Q50 35 72 28Z"/><circle cx="50" cy="50" r="4" fill="#064e3b"/>
              </svg>
              <svg class="absolute bottom-[20px] right-[13%] w-14 h-14 text-green-700/70 drop-shadow-sm" viewBox="0 0 100 100" fill="currentColor">
                <path d="M50 20Q65 35 50 50Q35 35 50 20Z"/><path d="M50 80Q65 65 50 50Q35 65 50 80Z"/><path d="M20 50Q35 65 50 50Q35 35 20 50Z"/><path d="M80 50Q65 65 50 50Q65 35 80 50Z"/><path d="M28 28Q50 35 50 50Q35 50 28 28Z"/><path d="M72 72Q50 65 50 50Q65 50 72 72Z"/><path d="M28 72Q35 50 50 50Q50 65 28 72Z"/><path d="M72 28Q65 50 50 50Q50 35 72 28Z"/><circle cx="50" cy="50" r="4" fill="#064e3b"/>
              </svg>
            </div>
            <div
              v-for="(seat, idx) in sectionSeats"
              :key="seat.id"
              :draggable="true"
              @dragstart="onDragStart($event, seat)"
              @click="selectSeat(seat)"
              @mouseenter="hoveredSeat = seat"
              @mouseleave="hoveredSeat = null"
              :style="{
                position: 'absolute',
                left: (seat.position_x || seat.position_y) ? `${seat.position_x}px` : `${eShapeCoordinates[idx]?.x || 20 + ((idx * 60) % 700)}px`,
                top: (seat.position_x || seat.position_y) ? `${seat.position_y}px` : `${eShapeCoordinates[idx]?.y || 500}px`
              }"
              :class="[
                'w-10 h-10 flex items-center justify-center transition-all cursor-move hover:scale-110 active:scale-95 drop-shadow-sm',
                getStatusColors(seat.status).text
              ]"
            >
              <svg viewBox="0 0 100 100" class="w-10 h-10" xmlns="http://www.w3.org/2000/svg">
                <path d="M 20 15 Q 50 5 80 15 L 75 30 Q 50 20 25 30 Z" fill="currentColor" style="filter: brightness(0.85);"/>
                <rect x="10" y="25" width="12" height="40" rx="4" fill="#CBD5E1" stroke="#94A3B8" stroke-width="1.5" />
                <rect x="78" y="25" width="12" height="40" rx="4" fill="#CBD5E1" stroke="#94A3B8" stroke-width="1.5" />
                <rect x="12" y="30" width="8" height="30" rx="3" fill="#F1F5F9" />
                <rect x="80" y="30" width="8" height="30" rx="3" fill="#F1F5F9" />
                <rect x="22" y="25" width="56" height="45" rx="10" fill="currentColor" />
                <rect x="26" y="33" width="48" height="30" rx="6" fill="#FFFFFF" opacity="0.15" />
              </svg>
              <div class="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div class="mt-3 px-1.5 py-0.5 rounded shadow-sm border border-black/5 bg-white/95">
                  <span class="block text-[9px] font-bold text-gray-700 leading-none">{{ String(seat.seat_number).replace(/\D/g, '') || seat.seat_number }}</span>
                </div>
              </div>

              <!-- Hover Detail Popover -->
              <transition name="fade">
                <div
                  v-if="hoveredSeat?.id === seat.id"
                  class="absolute bottom-[130%] left-1/2 -translate-x-1/2 w-64 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-[100] cursor-default pointer-events-none"
                >
                  <div class="px-4 py-3 bg-gray-50 border-b border-gray-100 flex items-center justify-between">
                    <span class="text-sm font-bold text-gray-800">Seat {{ seat.seat_number }}</span>
                    <div :class="['w-2 h-2 rounded-full', getStatusColors(seat.status).dotBg]"></div>
                  </div>
                  <div class="p-4 space-y-4">
                    <div class="flex items-center space-x-3">
                      <div class="w-10 h-10 rounded-full bg-teal-50 flex items-center justify-center text-teal-600 border border-teal-100">
                        <User class="w-5 h-5" />
                      </div>
                      <div class="flex-1 min-w-0">
                        <p class="text-sm font-bold text-gray-900 truncate">{{ seat.current_booking?.user_name || 'Available' }}</p>
                        <p class="text-xs font-medium text-gray-500">
                          {{ seat.current_booking?.minutes_left ? seat.current_booking.minutes_left + ' mins Left' : 'Available' }}
                        </p>
                      </div>
                    </div>

                    <!-- Amenities Section -->
                    <div class="grid grid-cols-3 gap-2 pt-3 border-t border-gray-50">
                      <div :class="['flex flex-col items-center p-2 rounded-xl transition-colors', seat.has_computer ? 'bg-teal-50 text-teal-600' : 'bg-gray-50 text-gray-400']">
                        <Monitor class="w-4 h-4 mb-1" />
                        <span class="text-[8px] font-black uppercase tracking-tighter">PC</span>
                      </div>
                      <div :class="['flex flex-col items-center p-2 rounded-xl transition-colors', seat.near_window ? 'bg-sky-50 text-sky-600' : 'bg-gray-50 text-gray-400']">
                        <Layout class="w-4 h-4 mb-1" />
                        <span class="text-[8px] font-black uppercase tracking-tighter">Window</span>
                      </div>
                      <div :class="['flex flex-col items-center p-2 rounded-xl transition-colors', seat.socket_count > 0 ? 'bg-orange-50 text-orange-600' : 'bg-gray-50 text-gray-400']">
                        <Zap class="w-4 h-4 mb-1" />
                        <span class="text-[8px] font-black uppercase tracking-tighter">{{ seat.socket_count }} Slots</span>
                      </div>
                    </div>

                    <div class="text-[10px] font-black text-gray-400 uppercase tracking-widest pt-2">
                      {{ activeSectionName }}
                    </div>
                  </div>
                </div>
              </transition>
            </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Footer Legend Bar -->
      <div class="bg-gray-50/80 backdrop-blur-sm border-t border-gray-100 px-8 py-4 flex items-center justify-center space-x-12">
        <span class="text-sm font-bold text-gray-400 uppercase tracking-widest mr-4">Seat</span>
        
        <div v-for="item in [
          { label: 'Available', status: 'available' },
          { label: 'Reserved', status: 'reserved' },
          { label: 'Occupied', status: 'occupied' },
          { label: 'Overstay', status: 'overstay' },
          { label: 'Serious Overstay', status: 'serious_overstay' },
          { label: 'Maintenance', status: 'maintenance' }
        ]" :key="item.label" class="flex items-center space-x-2">
          <svg viewBox="0 0 100 100" :class="['w-6 h-6', getStatusColors(item.status).text]" xmlns="http://www.w3.org/2000/svg">
            <path d="M 20 15 Q 50 5 80 15 L 75 30 Q 50 20 25 30 Z" fill="currentColor" style="filter: brightness(0.85);"/>
            <rect x="10" y="25" width="12" height="40" rx="4" fill="#CBD5E1" stroke="#94A3B8" stroke-width="1.5" />
            <rect x="78" y="25" width="12" height="40" rx="4" fill="#CBD5E1" stroke="#94A3B8" stroke-width="1.5" />
            <rect x="12" y="30" width="8" height="30" rx="3" fill="#F1F5F9" />
            <rect x="80" y="30" width="8" height="30" rx="3" fill="#F1F5F9" />
            <rect x="22" y="25" width="56" height="45" rx="10" fill="currentColor" />
            <rect x="26" y="33" width="48" height="30" rx="6" fill="#FFFFFF" opacity="0.15" />
          </svg>
          <span class="text-xs font-semibold text-gray-500">{{ item.label }}</span>
        </div>
      </div>
    </div>

    <!-- Selected Seat Details Modal -->
    <transition name="fade">
      <div
        v-if="selectedSeat"
        class="fixed inset-0 bg-gray-900/40 backdrop-blur-sm flex items-center justify-center z-[100] p-4"
        @click="selectedSeat = null"
      >
        <div
          class="bg-white rounded-xl shadow-2xl max-w-sm w-full overflow-hidden transform transition-all border border-gray-200"
          @click.stop
        >
          <!-- Header -->
          <div class="relative h-32 bg-gradient-to-br from-emerald-600 via-teal-600 to-blue-600 p-6 flex flex-col justify-end">
            <button
              @click="selectedSeat = null"
              class="absolute top-4 right-4 p-2 bg-white/20 hover:bg-white/30 rounded-xl transition-all text-white backdrop-blur-md"
            >
              <X class="w-5 h-5" />
            </button>
            <div class="flex items-end space-x-3">
              <div class="w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center text-teal-600 transform -rotate-3 hover:rotate-0 transition-transform duration-300">
                <Armchair class="w-8 h-8" />
              </div>
              <div>
                <h3 class="text-2xl font-bold text-white tracking-tight">Seat {{ selectedSeat.seat_number }}</h3>
                <p class="text-teal-100 text-[10px] font-semibold uppercase tracking-wider">{{ activeSectionName }}</p>
              </div>
            </div>
          </div>

          <div class="p-8 space-y-8">
            <!-- Properties Section -->
            <div class="grid grid-cols-2 gap-4">
              <div 
                @click="selectedSeat.has_computer = !selectedSeat.has_computer"
                :class="[
                  'p-4 rounded-2xl border-2 transition-all cursor-pointer text-center group',
                  selectedSeat.has_computer ? 'border-teal-600 bg-teal-50/50' : 'border-gray-100 bg-gray-50'
                ]"
              >
                <Monitor :class="['w-8 h-8 mx-auto mb-2 transition-transform group-hover:scale-110', selectedSeat.has_computer ? 'text-teal-600' : 'text-gray-400']" />
                <span :class="['text-[10px] font-bold uppercase tracking-wider', selectedSeat.has_computer ? 'text-teal-700' : 'text-slate-500']">Computer</span>
              </div>
              
              <div 
                @click="selectedSeat.near_window = !selectedSeat.near_window"
                :class="[
                  'p-4 rounded-2xl border-2 transition-all cursor-pointer text-center group',
                  selectedSeat.near_window ? 'border-sky-600 bg-sky-50/50' : 'border-gray-100 bg-gray-50'
                ]"
              >
                <Layout :class="['w-8 h-8 mx-auto mb-2 transition-transform group-hover:scale-110', selectedSeat.near_window ? 'text-sky-600' : 'text-gray-400']" />
                <span :class="['text-[10px] font-bold uppercase tracking-wider', selectedSeat.near_window ? 'text-sky-700' : 'text-slate-500']">Window View</span>
              </div>
            </div>

            <!-- Socket Count Section -->
            <div class="bg-gray-50 p-6 rounded-2xl border border-gray-100">
              <div class="flex items-center justify-between mb-4">
                <div class="flex items-center space-x-2">
                  <div class="p-2 bg-white rounded-lg shadow-sm">
                    <Zap class="w-4 h-4 text-orange-500" />
                  </div>
                  <span class="text-xs font-bold uppercase tracking-wider text-slate-500">Power Sockets</span>
                </div>
                <div class="flex items-center bg-white rounded-xl border border-gray-200 p-1">
                  <button @click="selectedSeat.socket_count = Math.max(0, selectedSeat.socket_count - 1)" class="w-8 h-8 flex items-center justify-center hover:bg-gray-50 rounded-lg text-gray-500">-</button>
                  <span class="w-10 text-center font-bold text-gray-800">{{ selectedSeat.socket_count }}</span>
                  <button @click="selectedSeat.socket_count++" class="w-8 h-8 flex items-center justify-center hover:bg-gray-50 rounded-lg text-gray-500">+</button>
                </div>
              </div>
            </div>

            <!-- Status Section -->
            <div class="space-y-3">
              <label class="text-[10px] font-bold uppercase tracking-wider text-slate-400 ml-1">Current Status</label>
              <div class="grid grid-cols-2 gap-2">
                <button
                  v-for="status in ['available', 'maintenance']"
                  :key="status"
                  @click="selectedSeat.status = status"
                  :class="[
                    'px-4 py-3 rounded-xl text-xs font-bold transition-all border-2 capitalize',
                    selectedSeat.status === status 
                      ? 'border-teal-600 bg-teal-600 text-white shadow-lg shadow-teal-100' 
                      : 'border-gray-100 bg-white text-gray-500 hover:border-gray-200'
                  ]"
                >
                  {{ status }}
                </button>
              </div>
            </div>

            <!-- Actions -->
            <div class="flex flex-col space-y-3 pt-4">
              <button
                @click="updateSeat"
                class="w-full py-4 bg-emerald-700 text-white rounded-xl font-bold uppercase tracking-wider hover:bg-emerald-800 transition-all shadow-md active:scale-[0.98] cursor-pointer"
              >
                Save Configuration
              </button>
              <button
                @click="selectedSeat = null"
                class="w-full py-2 text-xs font-bold text-slate-400 hover:text-slate-600 transition-colors uppercase tracking-wider cursor-pointer"
              >
                Dismiss
              </button>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue';
import {
  Building2,
  CheckCircle,
  RefreshCw,
  Settings,
  User,
  Lock,
  X,
  AlertTriangle,
  Layout,
  Wind,
  Wrench,
  Printer,
  Monitor,
  Zap,
  Move,
  ChevronDown,
  Plus,
  BookOpen,
  Wand2
} from 'lucide-vue-next';
import { librarianAPI } from '@/shared/services/api';
import { useSwal } from '@/shared/composables/useSwal';

const { toast } = useSwal();

const seats = ref<any[]>([]);
const loading = ref(false);
const isLayoutMode = ref(false);
const isArranging = ref(false);
const activeFloorId = ref<number | null>(null);
const activeSectionId = ref<number | null>(null);

const selectedSeat = ref<any>(null);
const hoveredSeat = ref<any>(null);
const draggedSeat = ref<any>(null);
const dragOffset = ref({ x: 0, y: 0 });

interface Coordinate { x: number; y: number; }

const eShapeCoordinates: Coordinate[] = [
  // Top Row (0-19) - 20 seats
  { x: 50, y: 30 }, { x: 85, y: 30 }, { x: 120, y: 30 }, { x: 155, y: 30 }, { x: 190, y: 30 }, 
  { x: 225, y: 30 }, { x: 260, y: 30 }, { x: 295, y: 30 }, { x: 330, y: 30 }, { x: 365, y: 30 },
  { x: 400, y: 30 }, { x: 435, y: 30 }, { x: 470, y: 30 }, { x: 505, y: 30 }, { x: 540, y: 30 },
  { x: 575, y: 30 }, { x: 610, y: 30 }, { x: 645, y: 30 }, { x: 680, y: 30 }, { x: 715, y: 30 },
  
  // Left Desk Column (20-45) - 26 seats
  { x: 75, y: 150 }, { x: 185, y: 150 }, { x: 75, y: 185 }, { x: 185, y: 185 },
  { x: 75, y: 220 }, { x: 185, y: 220 }, { x: 75, y: 255 }, { x: 185, y: 255 },
  { x: 75, y: 290 }, { x: 185, y: 290 }, { x: 75, y: 325 }, { x: 185, y: 325 },
  { x: 75, y: 360 }, { x: 185, y: 360 }, { x: 75, y: 395 }, { x: 185, y: 395 },
  { x: 60, y: 445 }, { x: 95, y: 445 }, { x: 130, y: 445 }, { x: 165, y: 445 }, { x: 200, y: 445 },
  
  // Center Desk Column (46-71) - 26 seats
  { x: 325, y: 150 }, { x: 435, y: 150 }, { x: 325, y: 185 }, { x: 435, y: 185 },
  { x: 325, y: 220 }, { x: 435, y: 220 }, { x: 325, y: 255 }, { x: 435, y: 255 },
  { x: 325, y: 290 }, { x: 435, y: 290 }, { x: 325, y: 325 }, { x: 435, y: 325 },
  { x: 325, y: 360 }, { x: 435, y: 360 }, { x: 325, y: 395 }, { x: 435, y: 395 },
  { x: 310, y: 445 }, { x: 345, y: 445 }, { x: 380, y: 445 }, { x: 415, y: 445 }, { x: 450, y: 445 },
  
  // Right Desk Column (72-97) - 26 seats
  { x: 575, y: 150 }, { x: 685, y: 150 }, { x: 575, y: 185 }, { x: 685, y: 185 },
  { x: 575, y: 220 }, { x: 685, y: 220 }, { x: 575, y: 255 }, { x: 685, y: 255 },
  { x: 575, y: 290 }, { x: 685, y: 290 }, { x: 575, y: 325 }, { x: 685, y: 325 },
  { x: 575, y: 360 }, { x: 685, y: 360 }, { x: 575, y: 395 }, { x: 685, y: 395 },
  { x: 560, y: 445 }, { x: 595, y: 445 }, { x: 630, y: 445 }, { x: 665, y: 445 }, { x: 700, y: 445 }
];


const autoArrangeLayout = async () => {
  const seatsToUpdate = sectionSeats.value;
  if (!seatsToUpdate.length) return;
  
  const SwalInstance = (await import('sweetalert2')).default;
  const result = await SwalInstance.fire({
    title: `Auto-Arrange Layout?`,
    text: `This will automatically set X/Y positions for ${sectionSeats.value.length} seats to fit a standard desk layout. Existing manual positions will be overwritten.`,
    icon: 'question',
    showCancelButton: true,
    confirmButtonText: 'Yes, arrange them!',
    confirmButtonColor: '#7C3AED',
  });

  if (!result.isConfirmed) return;

  isArranging.value = true;
  try {
    const coords = eShapeCoordinates;

    const seatsToUpdate = sectionSeats.value.slice(0, coords.length);
    const promises = seatsToUpdate.map((seat: any, index: number) => {
      const coord = coords[index];
      seat.position_x = coord.x;
      seat.position_y = coord.y;
      return librarianAPI.updateSeat(seat.id, {
        position_x: coord.x,
        position_y: coord.y
      });
    });

    await Promise.all(promises);
    toast('Arrangement Complete', `${seatsToUpdate.length} seats snapped into layout.`, 'success');
  } catch (error) {
    console.error('Error auto-arranging seats:', error);
    toast('Error', 'Failed to auto-arrange some seats', 'error');
  } finally {
    isArranging.value = false;
  }
};

const floors = ref<any[]>([]);
const sections = ref<any[]>([]);

const currentFloorSections = computed(() => {
  if (!activeFloorId.value) return sections.value;
  return sections.value.filter((s: any) => s.floor_id === activeFloorId.value);
});

const activeSectionName = computed(() => {
  if (activeSectionId.value === null) return 'All Floor Sections';
  const section = sections.value.find((s: any) => s.id === activeSectionId.value);
  return section ? section.name : 'Unknown Section';
});



watch(floors, (newFloors) => {
  if (newFloors.length > 0 && (!activeFloorId.value || !newFloors.find((f: any) => f.id === activeFloorId.value))) {
    activeFloorId.value = newFloors[0].id;
  }
}, { immediate: true });

watch(currentFloorSections, (newSections) => {
  // We no longer force select the first section automatically so "All Seats" can be default
}, { immediate: true });

const sectionSeats = computed(() => {
  let filtered = seats.value;
  if (activeFloorId.value) {
    filtered = filtered.filter(seat => seat.floor_id === activeFloorId.value);
  }
  if (activeSectionId.value) {
    filtered = filtered.filter(seat => seat.section_id === activeSectionId.value);
  }
  return filtered;
});

const seatStats = computed(() => {
  return {
    total: seats.value.length,
    available: seats.value.filter(s => s.status === 'available').length,
    occupied: seats.value.filter(s => s.status === 'occupied').length,
    reserved: seats.value.filter(s => s.status === 'reserved').length,
    overstay: seats.value.filter(s => s.status === 'overstay').length,
    serious_overstay: seats.value.filter(s => s.status === 'serious_overstay').length,
    maintenance: seats.value.filter(s => s.status === 'maintenance').length
  };
});

const fetchSeats = async () => {
  loading.value = true;
  try {
    const [seatsData, floorsData, sectionsData] = await Promise.all([
      librarianAPI.getSeats(),
      librarianAPI.getActiveFloors(),
      librarianAPI.getActiveSections()
    ]);
    seats.value = seatsData;
    floors.value = floorsData.sort((a: any, b: any) => a.level - b.level);
    sections.value = sectionsData;
  } catch (error) {
    console.error('Error fetching layout data:', error);
  } finally {
    loading.value = false;
  }
};

const getStatusColors = (status: string) => {
  switch (status) {
    case 'available': return { 
      text: 'text-[#29B072]', 
      bg: 'bg-[#E7F7F0]', 
      dotBg: 'bg-[#29B072]' 
    };
    case 'occupied': return { 
      text: 'text-[#FF9D43]', 
      bg: 'bg-[#FFF3E8]', 
      dotBg: 'bg-[#FF9D43]' 
    };
    case 'reserved': return { 
      text: 'text-[#617DFF]', 
      bg: 'bg-[#EEF2FF]', 
      dotBg: 'bg-[#617DFF]' 
    };
    case 'overstay': return { 
      text: 'text-[#F4D339]', 
      bg: 'bg-[#FFFCE8]', 
      dotBg: 'bg-[#F4D339]' 
    };
    case 'serious_overstay': return { 
      text: 'text-[#E95252]', 
      bg: 'bg-[#FFE8E8]', 
      dotBg: 'bg-[#E95252]' 
    };
    case 'maintenance': return { 
      text: 'text-[#9CA3AF]', 
      bg: 'bg-[#F3F4F6]', 
      dotBg: 'bg-[#9CA3AF]' 
    };
    default: return { 
      text: 'text-gray-400', 
      bg: 'bg-white', 
      dotBg: 'bg-gray-400' 
    };
  }
};

const selectSeat = (seat: any) => {
  selectedSeat.value = { ...seat };
};

const updateSeat = async () => {
  if (!selectedSeat.value) return;
  try {
    await librarianAPI.updateSeat(selectedSeat.value.id, {
      status: selectedSeat.value.status,
      has_computer: selectedSeat.value.has_computer,
      near_window: selectedSeat.value.near_window,
      socket_count: selectedSeat.value.socket_count
    });
    await fetchSeats();
    selectedSeat.value = null;
  } catch (error) {
    console.error('Error updating seat:', error);
  }
};

const onDragStart = (event: DragEvent, seat: any) => {
  if (!isLayoutMode.value) return;
  draggedSeat.value = seat;
  const rect = (event.target as HTMLElement).getBoundingClientRect();
  dragOffset.value = {
    x: event.clientX - rect.left,
    y: event.clientY - rect.top
  };
  event.dataTransfer?.setData('text/plain', seat.id.toString());
};

const onDrop = async (event: DragEvent) => {
  if (!isLayoutMode.value || !draggedSeat.value) return;
  
  const container = (event.currentTarget as HTMLElement).getBoundingClientRect();
  const x = Math.round(event.clientX - container.left - dragOffset.value.x);
  const y = Math.round(event.clientY - container.top - dragOffset.value.y);

  // Clamp values inside container
  const finalX = Math.max(0, Math.min(x, container.width - 48));
  const finalY = Math.max(0, Math.min(y, container.height - 40));

  try {
    // Optimistic update
    draggedSeat.value.position_x = finalX;
    draggedSeat.value.position_y = finalY;

    await librarianAPI.updateSeat(draggedSeat.value.id, {
      position_x: finalX,
      position_y: finalY
    });
    
    toast('Layout Updated', `Seat ${draggedSeat.value.seat_number} repositioned`, 'success');
  } catch (error) {
    console.error('Error saving seat position:', error);
    toast('Error', 'Could not save seat position', 'error');
    fetchSeats();
  } finally {
    draggedSeat.value = null;
  }
};

const printActiveSectionQRs = () => {
  const section = activeSectionId.value 
    ? sections.value.find(s => s.id === activeSectionId.value)
    : { name: 'All Sections' };
    
  if (!section && activeSectionId.value) return;

  const printWindow = window.open('', '_blank');
  if (!printWindow) {
    toast('Error', 'Popup blocked! Please allow popups to print.', 'error');
    return;
  }

  const seats = sectionSeats.value;
  let html = `
    <html>
      <head>
        <title>Print QR Codes - ${section.name}</title>
        <style>
          body { font-family: sans-serif; margin: 0; padding: 20px; }
          .header { text-align: center; margin-bottom: 30px; border-bottom: 2px solid #eee; padding-bottom: 10px; }
          .qr-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; }
          .qr-item { border: 1px solid #ddd; padding: 15px; text-align: center; page-break-inside: avoid; border-radius: 8px; }
          .qr-image { width: 140px; height: 140px; object-fit: contain; }
          .seat-number { font-weight: bold; margin-top: 10px; font-size: 16px; color: #333; }
          .section-info { font-size: 12px; color: #666; margin-top: 4px; }
          @media print {
            .no-print { display: none; }
            body { padding: 0; }
          }
        </style>
      </head>
      <body>
        <div class="no-print" style="position: fixed; top: 20px; right: 20px; z-index: 100;">
          <button onclick="window.print()" style="padding: 10px 20px; background: #7c3aed; color: white; border: none; border-radius: 6px; cursor: pointer; font-weight: bold; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
            Print QR Codes
          </button>
        </div>
        <div class="header">
          <h1 style="margin: 0; color: #1a1a1a;">Seat QR Codes</h1>
          <p style="margin: 5px 0; color: #666;">Section: ${section.name}</p>
        </div>
        <div class="qr-grid">
  `;

  seats.forEach((seat: any) => {
    const seatSectionName = seat.seat_section?.name || section.name;
    html += `
      <div class="qr-item">
        <img src="${seat.qr_code_url || '/storage/qrcodes/seats/seat-' + seat.id + '.svg'}" class="qr-image" onerror="this.src='https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(seat.qr_code || seat.seat_number)}'" />
        <div class="seat-number">Seat ${seat.seat_number}</div>
        <div class="section-info">${seatSectionName}</div>
      </div>
    `;
  });

  html += `
        </div>
      </body>
    </html>
  `;

  printWindow.document.write(html);
  printWindow.document.close();
};


onMounted(() => {
  fetchSeats();
});



</script>
