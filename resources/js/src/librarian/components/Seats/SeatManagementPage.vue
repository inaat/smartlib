<template>
  <div class="p-6 space-y-6 font-outfit">
    <!-- Top Header -->
    <div class="flex flex-col md:flex-row md:items-center justify-between bg-white p-4 rounded-3xl shadow-sm border border-slate-100 gap-4 text-left">
      <div class="flex items-center space-x-3">
        <h1 class="text-xl font-bold text-slate-800 uppercase tracking-tight">Seat Layout Manager</h1>
        <span 
          :class="[
            'text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider border transition-all',
            isLayoutMode 
              ? 'bg-amber-50 border-amber-200 text-amber-700' 
              : 'bg-slate-50 border-slate-200 text-slate-500'
          ]"
        >
          {{ isLayoutMode ? 'Designer Mode' : 'View Mode' }}
        </span>
      </div>

      <div class="flex items-center flex-wrap gap-3">
        <!-- Mode Toggle Button -->
        <button
          @click="toggleLayoutMode"
          :class="[
            'px-5 py-2.5 rounded-xl transition-all flex items-center space-x-2 border text-xs font-bold uppercase tracking-wider cursor-pointer shadow-sm active:scale-98',
            isLayoutMode 
              ? 'bg-emerald-700 text-white border-emerald-700 shadow-emerald-500/10 hover:bg-emerald-800' 
              : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
          ]"
        >
          <Move class="w-4 h-4" />
          <span>{{ isLayoutMode ? 'Exit Designer' : 'Visual Designer' }}</span>
        </button>

        <button
          @click="fetchData"
          :disabled="loading"
          class="p-2.5 bg-slate-50 text-slate-600 hover:bg-slate-105 rounded-xl transition-all border border-slate-200 cursor-pointer shadow-sm"
          title="Refresh Data"
        >
          <RefreshCw :class="['w-4 h-4', loading ? 'animate-spin' : '']" />
        </button>

        <button
          @click="printActiveSectionQRs"
          class="px-4 py-2.5 bg-slate-50 hover:bg-slate-100 text-slate-700 rounded-xl transition-all border border-slate-200 flex items-center space-x-2 text-xs font-bold uppercase tracking-wider cursor-pointer shadow-sm"
        >
          <Printer class="w-4 h-4 text-slate-500" />
          <span>Print Section QRs</span>
        </button>
      </div>
    </div>

    <!-- Layout Mode Designer Toolbar -->
    <transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="transform -translate-y-4 opacity-0"
      enter-to-class="transform translate-y-0 opacity-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="transform translate-y-0 opacity-100"
      leave-to-class="transform -translate-y-4 opacity-0"
    >
      <div 
        v-if="isLayoutMode" 
        class="bg-slate-900 text-white p-4 rounded-3xl shadow-xl border border-slate-800 flex flex-wrap items-center justify-between gap-4 text-left"
      >
        <div class="flex items-center flex-wrap gap-2.5">
          <!-- Add Individual Seat -->
          <button 
            v-if="activeLayoutMode === 'individual'"
            @click="openAddSeatModal"
            class="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-xl transition-all flex items-center space-x-1.5 text-xs font-bold uppercase tracking-wider cursor-pointer border border-slate-700/50"
          >
            <Plus class="w-4 h-4 text-emerald-400" />
            <span>+ Seat</span>
          </button>

          <!-- Add Study Table -->
          <button 
            v-if="activeLayoutMode === 'tables'"
            @click="openAddTableModal"
            class="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-xl transition-all flex items-center space-x-1.5 text-xs font-bold uppercase tracking-wider cursor-pointer border border-slate-700/50"
          >
            <Plus class="w-4 h-4 text-amber-400" />
            <span>+ Table</span>
          </button>

          <!-- Add Study Cabin -->
          <button 
            v-if="activeLayoutMode === 'cabins'"
            @click="openAddCabinModal"
            class="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-xl transition-all flex items-center space-x-1.5 text-xs font-bold uppercase tracking-wider cursor-pointer border border-slate-700/50"
          >
            <Plus class="w-4 h-4 text-cyan-400" />
            <span>+ Cabin</span>
          </button>

          <div class="w-px h-6 bg-slate-700 mx-1"></div>

          <!-- Snapping Grid toggle -->
          <button 
            @click="gridSnap = !gridSnap"
            :class="[
              'p-2 rounded-xl transition-all cursor-pointer border',
              gridSnap ? 'bg-emerald-700/20 text-emerald-400 border-emerald-600/30' : 'bg-slate-800 text-slate-400 border-transparent'
            ]"
            title="Toggle Snapping Grid"
          >
            <Grid class="w-4 h-4" />
          </button>

          <!-- Auto Seat Numbering -->
          <button 
            @click="triggerAutoNumbering"
            class="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-xl transition-all flex items-center space-x-1.5 text-xs font-bold uppercase tracking-wider cursor-pointer border border-slate-700/50"
            title="Automatically number seats in selected section sequentially"
          >
            <Wand2 class="w-4 h-4 text-purple-400" />
            <span>Auto Number</span>
          </button>

          <!-- Auto Arrange Layout -->
          <button 
            @click="triggerAutoArrange"
            class="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-xl transition-all flex items-center space-x-1.5 text-xs font-bold uppercase tracking-wider cursor-pointer border border-slate-700/50"
            title="Automatically arrange components in a clean, straight-line grid in ascending order"
          >
            <Move class="w-4 h-4 text-emerald-450" />
            <span>Auto Arrange</span>
          </button>
        </div>

        <div class="text-[10px] text-slate-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
          <Info class="w-4 h-4 text-emerald-400" />
          <span>Drag nodes freely on the canvas. Snapping is {{ gridSnap ? 'Active' : 'Inactive' }}</span>
        </div>
      </div>
    </transition>

    <!-- Stats Bar -->
    <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
      <div 
        v-for="(stat, key) in [
          { label: 'Total Seats', count: seatStats.total, color: 'blue', bg: 'bg-blue-50', text: 'text-blue-600' },
          { label: 'Available', count: seatStats.available, color: 'green', bg: 'bg-emerald-50', text: 'text-emerald-600' },
          { label: 'Occupied', count: seatStats.occupied, color: 'red', bg: 'bg-rose-50', text: 'text-rose-600' },
          { label: 'Reserved', count: seatStats.reserved, color: 'teal', bg: 'bg-indigo-50', text: 'text-indigo-650' },
          { label: 'Overstay', count: seatStats.overstay, color: 'orange', bg: 'bg-orange-50', text: 'text-orange-600' },
          { label: 'Serious Overstay', count: seatStats.serious_overstay, color: 'purple', bg: 'bg-purple-50', text: 'text-purple-650' },
          { label: 'Maintenance', count: seatStats.maintenance, color: 'gray', bg: 'bg-slate-100', text: 'text-slate-600' }
        ]" 
        :key="key"
        class="bg-white p-3 rounded-2xl border border-slate-100 shadow-sm flex items-center space-x-3.5 text-left"
      >
        <div :class="['w-10 h-10 rounded-xl flex items-center justify-center font-bold text-lg', stat.bg, stat.text]">
          {{ stat.count }}
        </div>
        <div>
          <p class="text-[10px] font-bold uppercase text-slate-400 tracking-wider leading-none mb-1.5">{{ stat.label }}</p>
          <div class="w-1.5 h-1.5 rounded-full" :class="stat.text.replace('text-', 'bg-')"></div>
        </div>
      </div>
    </div>

    <!-- Main Seat Map / Designer Grid layout -->
    <div class="grid grid-cols-1 lg:grid-cols-4 gap-6">
      <!-- Layout Canvas Area -->
      <div class="lg:col-span-3">
        <SeatLayoutRenderer
          ref="layoutRenderer"
          :seats="seats"
          :floors="floors"
          :sections="sections"
          :tables="tables"
          :selected-seat="selectedSeat"
          :draggable="isLayoutMode"
          :seat-clickable="true"
          :layout-mode="activeLayoutMode"
          :grid-snap="gridSnap"
          @seat-click="handleSeatClick"
          @table-click="handleTableClick"
          @layout-change="handleSeatDrag"
          @table-layout-change="handleTableDrag"
        />
      </div>

      <!-- Properties sidebar panel -->
      <div class="space-y-6 text-left">
        <!-- Configuration Properties Card -->
        <div class="bg-white p-5 rounded-3xl shadow-sm border border-slate-100 sticky top-24">
          <h3 class="text-xs font-bold text-slate-400 uppercase tracking-widest mb-5">
            {{ selectedSeat ? 'Seat properties' : (selectedTable ? 'Table Properties' : 'Select Component') }}
          </h3>

          <!-- When Seat is Selected -->
          <div v-if="selectedSeat" class="space-y-5">
            <div class="p-4 bg-slate-50/50 rounded-2xl border border-slate-100">
              <span class="text-[10px] font-bold uppercase text-slate-400 block mb-1">Editing Seat</span>
              <div class="text-sm font-bold text-slate-800 uppercase tracking-tight flex items-center gap-2">
                <Armchair class="w-4 h-4 text-emerald-600" />
                <span>Seat {{ selectedSeat.seat_number }}</span>
              </div>
            </div>

            <!-- Number input -->
            <div>
              <label class="block text-[10px] font-bold uppercase text-slate-400 mb-1.5 tracking-wider">Seat Number</label>
              <input 
                v-model="selectedSeat.seat_number" 
                type="text" 
                class="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-700 outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
              />
            </div>

            <!-- Floor Selector -->
            <div>
              <label class="block text-[10px] font-bold uppercase text-slate-400 mb-1.5 tracking-wider">Floor Level</label>
              <select 
                v-model="selectedSeat.floor_id"
                class="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-700 outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all cursor-pointer"
              >
                <option v-for="floor in floors" :key="floor.id" :value="floor.id">
                  {{ floor.name }}
                </option>
              </select>
            </div>

            <!-- Section Selector -->
            <div>
              <label class="block text-[10px] font-bold uppercase text-slate-400 mb-1.5 tracking-wider">Floor Section</label>
              <select 
                v-model="selectedSeat.section_id"
                class="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-700 outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all cursor-pointer"
              >
                <option :value="null">No Section</option>
                <option v-for="sec in sections" :key="sec.id" :value="sec.id">
                  {{ sec.name }}
                </option>
              </select>
            </div>

            <!-- Seat Type -->
            <div>
              <label class="block text-[10px] font-bold uppercase text-slate-400 mb-1.5 tracking-wider">Seat Type</label>
              <select 
                v-model="selectedSeat.seat_type"
                class="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-700 outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all cursor-pointer"
              >
                <option value="regular">Regular Chair</option>
                <option value="premium">Premium Ergonomic</option>
                <option value="group">Group Study</option>
                <option value="silent">Silent Zone</option>
                <option value="private_room">Private Cabin</option>
              </select>
            </div>

            <!-- Cabin Specific details -->
            <div 
              v-if="selectedSeat.seat_type === 'private_room'" 
              class="p-4 bg-cyan-50/20 border border-cyan-150 rounded-2xl space-y-3"
            >
              <span class="text-[10px] font-bold uppercase text-cyan-600 tracking-wider block">Cabin Features</span>
              
              <label class="flex items-center gap-2 text-xs font-bold text-slate-700 cursor-pointer">
                <input type="checkbox" v-model="cabinFeatures.computer" class="w-4 h-4 rounded text-cyan-600 focus:ring-0" />
                <span>Computer Available</span>
              </label>

              <label class="flex items-center gap-2 text-xs font-bold text-slate-700 cursor-pointer">
                <input type="checkbox" v-model="cabinFeatures.power_outlet" class="w-4 h-4 rounded text-cyan-600 focus:ring-0" />
                <span>Power Outlets</span>
              </label>

              <label class="flex items-center gap-2 text-xs font-bold text-slate-700 cursor-pointer">
                <input type="checkbox" v-model="cabinFeatures.ac" class="w-4 h-4 rounded text-cyan-600 focus:ring-0" />
                <span>Air Conditioned (AC)</span>
              </label>

              <label class="flex items-center gap-2 text-xs font-bold text-slate-700 cursor-pointer">
                <input type="checkbox" v-model="cabinFeatures.wifi" class="w-4 h-4 rounded text-cyan-600 focus:ring-0" />
                <span>High Speed WiFi</span>
              </label>
            </div>

            <!-- Amenities checkboxes -->
            <div v-else class="space-y-2.5 pt-2">
              <label class="flex items-center gap-2 text-xs font-bold text-slate-700 cursor-pointer">
                <input type="checkbox" v-model="selectedSeat.has_computer" class="w-4 h-4 rounded text-emerald-600 focus:ring-0" />
                <span>Computer Installed</span>
              </label>

              <label class="flex items-center gap-2 text-xs font-bold text-slate-700 cursor-pointer">
                <input type="checkbox" v-model="selectedSeat.near_window" class="w-4 h-4 rounded text-emerald-600 focus:ring-0" />
                <span>Near Window</span>
              </label>

              <div class="flex items-center justify-between bg-slate-50 p-2.5 rounded-xl border border-slate-100 mt-2">
                <span class="text-xs font-bold text-slate-650">Power Sockets:</span>
                <input 
                  type="number" 
                  v-model.number="selectedSeat.socket_count" 
                  min="0" 
                  class="w-16 px-2 py-1 bg-white border border-slate-200 rounded-lg text-center font-bold text-xs text-slate-700" 
                />
              </div>
            </div>

            <!-- Status Selector -->
            <div>
              <label class="block text-[10px] font-bold uppercase text-slate-400 mb-1.5 tracking-wider">Status Override</label>
              <select 
                v-model="selectedSeat.status"
                class="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-700 outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all cursor-pointer"
              >
                <option value="available">🟢 Available</option>
                <option value="maintenance">⚫ Maintenance</option>
                <option value="occupied">🔴 Occupied</option>
                <option value="reserved">🔵 Reserved</option>
              </select>
            </div>

            <!-- Action Buttons -->
            <div class="flex flex-col gap-2 pt-4 border-t border-slate-100">
              <button 
                @click="saveSeat"
                class="w-full py-3 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl text-xs font-bold uppercase tracking-wider shadow-sm transition-all active:scale-98 cursor-pointer"
              >
                Save Changes
              </button>
              <button 
                @click="deleteSeat(selectedSeat.id)"
                class="w-full py-3 bg-rose-50 hover:bg-rose-100 text-rose-600 rounded-xl text-xs font-bold uppercase tracking-wider transition-all active:scale-98 cursor-pointer flex items-center justify-center space-x-1.5"
              >
                <Trash2 class="w-4 h-4" />
                <span>Delete Seat</span>
              </button>
            </div>
          </div>

          <!-- When Table is Selected -->
          <div v-else-if="selectedTable" class="space-y-5">
            <div class="p-4 bg-amber-50/20 rounded-2xl border border-amber-100">
              <span class="text-[10px] font-bold uppercase text-amber-600 block mb-1">Editing Study Table</span>
              <div class="text-sm font-bold text-slate-800 uppercase tracking-tight">
                Table "{{ selectedTable.label }}"
              </div>
            </div>

            <!-- Label -->
            <div>
              <label class="block text-[10px] font-bold uppercase text-slate-400 mb-1.5 tracking-wider">Table Label</label>
              <input 
                v-model="selectedTable.label" 
                type="text" 
                class="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-700 outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
              />
            </div>

            <!-- Capacity -->
            <div>
              <label class="block text-[10px] font-bold uppercase text-slate-400 mb-1.5 tracking-wider">Capacity (Pax)</label>
              <select 
                v-model.number="selectedTable.capacity"
                class="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-700 outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all cursor-pointer"
              >
                <option :value="2">2-Person Table</option>
                <option :value="4">4-Person Table</option>
                <option :value="6">6-Person Table</option>
                <option :value="8">8-Person Table</option>
              </select>
            </div>

            <!-- Section Selector -->
            <div>
              <label class="block text-[10px] font-bold uppercase text-slate-400 mb-1.5 tracking-wider">Floor Section</label>
              <select 
                v-model="selectedTable.section_id"
                class="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-700 outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all cursor-pointer"
              >
                <option :value="null">No Section</option>
                <option v-for="sec in sections" :key="sec.id" :value="sec.id">
                  {{ sec.name }}
                </option>
              </select>
            </div>

            <!-- Action buttons -->
            <div class="flex flex-col gap-2 pt-4 border-t border-slate-100">
              <button 
                @click="saveTable"
                class="w-full py-3 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl text-xs font-bold uppercase tracking-wider shadow-sm transition-all active:scale-98 cursor-pointer"
              >
                Save Table
              </button>
              <button 
                @click="deleteTable(selectedTable.id)"
                class="w-full py-3 bg-rose-50 hover:bg-rose-100 text-rose-600 rounded-xl text-xs font-bold uppercase tracking-wider transition-all active:scale-98 cursor-pointer flex items-center justify-center space-x-1.5"
              >
                <Trash2 class="w-4 h-4" />
                <span>Delete Table & Seats</span>
              </button>
            </div>
          </div>

          <!-- Empty State -->
          <div v-else class="text-center py-12">
            <div class="w-12 h-12 bg-slate-50 border border-slate-200 rounded-full flex items-center justify-center mx-auto mb-3.5 text-slate-400 shadow-inner">
              <Armchair class="w-6 h-6" />
            </div>
            <p class="text-xs text-slate-400 max-w-[180px] mx-auto leading-normal">
              Click any seat, table, or cabin on the plan to configure properties
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Create Seat Modal -->
    <div v-if="showSeatModal" class="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div class="bg-white rounded-3xl shadow-xl max-w-sm w-full p-6 text-left border border-slate-100">
        <h3 class="text-sm font-bold uppercase text-slate-800 tracking-wider mb-4">Add Individual Seat</h3>
        <form @submit.prevent="createSeat" class="space-y-4">
          <div>
            <label class="block text-[10px] font-bold uppercase text-slate-450 mb-1">Seat Number</label>
            <input v-model="seatForm.seat_number" type="text" required placeholder="e.g. 101" class="w-full px-4 py-2 border border-slate-200 rounded-xl text-xs font-bold text-slate-700 outline-none" />
          </div>

          <div>
            <label class="block text-[10px] font-bold uppercase text-slate-450 mb-1">Seat Type</label>
            <select v-model="seatForm.seat_type" class="w-full px-4 py-2 border border-slate-200 rounded-xl text-xs font-bold text-slate-700 outline-none cursor-pointer">
              <option value="regular">Regular Seat</option>
              <option value="premium">Premium ergonomic</option>
              <option value="silent">Silent Zone Seat</option>
            </select>
          </div>

          <div>
            <label class="block text-[10px] font-bold uppercase text-slate-455 mb-1">Target Floor</label>
            <select v-model="seatForm.floor_id" required class="w-full px-4 py-2 border border-slate-200 rounded-xl text-xs font-bold text-slate-700 outline-none cursor-pointer">
              <option v-for="floor in floors" :key="floor.id" :value="floor.id">{{ floor.name }}</option>
            </select>
          </div>

          <div>
            <label class="block text-[10px] font-bold uppercase text-slate-455 mb-1">Target Section</label>
            <select v-model="seatForm.section_id" class="w-full px-4 py-2 border border-slate-200 rounded-xl text-xs font-bold text-slate-700 outline-none cursor-pointer">
              <option :value="null">No Section / Shared Zone</option>
              <option v-for="sec in sections.filter(s => s.floor_id === seatForm.floor_id)" :key="sec.id" :value="sec.id">{{ sec.name }}</option>
            </select>
          </div>

          <div class="flex items-center space-x-3 pt-4">
            <button type="submit" class="flex-1 py-3 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl text-xs font-bold uppercase tracking-wider cursor-pointer">Create</button>
            <button type="button" @click="showSeatModal = false" class="px-5 py-3 border border-slate-200 hover:bg-slate-50 text-slate-500 rounded-xl text-xs font-bold uppercase cursor-pointer">Cancel</button>
          </div>
        </form>
      </div>
    </div>

    <!-- Create Table Modal -->
    <div v-if="showTableModal" class="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div class="bg-white rounded-3xl shadow-xl max-w-sm w-full p-6 text-left border border-slate-100">
        <h3 class="text-sm font-bold uppercase text-slate-800 tracking-wider mb-4">Add Study Table</h3>
        <form @submit.prevent="createTable" class="space-y-4">
          <div>
            <label class="block text-[10px] font-bold uppercase text-slate-450 mb-1">Table Prefix / Label</label>
            <input v-model="tableForm.label" type="text" required placeholder="e.g. T-1" class="w-full px-4 py-2 border border-slate-200 rounded-xl text-xs font-bold text-slate-700 outline-none" />
          </div>

          <div>
            <label class="block text-[10px] font-bold uppercase text-slate-450 mb-1">Capacity</label>
            <select v-model.number="tableForm.capacity" class="w-full px-4 py-2 border border-slate-200 rounded-xl text-xs font-bold text-slate-700 outline-none cursor-pointer">
              <option :value="2">2-Person Table</option>
              <option :value="4">4-Person Table</option>
              <option :value="6">6-Person Table</option>
              <option :value="8">8-Person Table</option>
            </select>
          </div>

          <div>
            <label class="block text-[10px] font-bold uppercase text-slate-455 mb-1">Target Floor</label>
            <select v-model="tableForm.floor_id" required class="w-full px-4 py-2 border border-slate-200 rounded-xl text-xs font-bold text-slate-700 outline-none cursor-pointer">
              <option v-for="floor in floors" :key="floor.id" :value="floor.id">{{ floor.name }}</option>
            </select>
          </div>

          <div>
            <label class="block text-[10px] font-bold uppercase text-slate-455 mb-1">Target Section</label>
            <select v-model="tableForm.section_id" class="w-full px-4 py-2 border border-slate-200 rounded-xl text-xs font-bold text-slate-700 outline-none cursor-pointer">
              <option :value="null">No Section / Shared Zone</option>
              <option v-for="sec in sections.filter(s => s.floor_id === tableForm.floor_id)" :key="sec.id" :value="sec.id">{{ sec.name }}</option>
            </select>
          </div>

          <div class="flex items-center space-x-3 pt-4">
            <button type="submit" class="flex-1 py-3 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl text-xs font-bold uppercase tracking-wider cursor-pointer">Add Table</button>
            <button type="button" @click="showTableModal = false" class="px-5 py-3 border border-slate-200 hover:bg-slate-50 text-slate-500 rounded-xl text-xs font-bold uppercase cursor-pointer">Cancel</button>
          </div>
        </form>
      </div>
    </div>

    <!-- Create Cabin Modal -->
    <div v-if="showCabinModal" class="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div class="bg-white rounded-3xl shadow-xl max-w-sm w-full p-6 text-left border border-slate-100">
        <h3 class="text-sm font-bold uppercase text-slate-800 tracking-wider mb-4">Add Study Cabin</h3>
        <form @submit.prevent="createCabin" class="space-y-4">
          <div>
            <label class="block text-[10px] font-bold uppercase text-slate-450 mb-1">Cabin Identifier</label>
            <input v-model="cabinForm.cabin_number" type="text" required placeholder="e.g. C1" class="w-full px-4 py-2 border border-slate-200 rounded-xl text-xs font-bold text-slate-700 outline-none" />
          </div>

          <div>
            <label class="block text-[10px] font-bold uppercase text-slate-455 mb-1">Target Floor</label>
            <select v-model="cabinForm.floor_id" required class="w-full px-4 py-2 border border-slate-200 rounded-xl text-xs font-bold text-slate-700 outline-none cursor-pointer">
              <option v-for="floor in floors" :key="floor.id" :value="floor.id">{{ floor.name }}</option>
            </select>
          </div>

          <div>
            <label class="block text-[10px] font-bold uppercase text-slate-455 mb-1">Target Section</label>
            <select v-model="cabinForm.section_id" class="w-full px-4 py-2 border border-slate-200 rounded-xl text-xs font-bold text-slate-700 outline-none cursor-pointer">
              <option :value="null">No Section / Shared Zone</option>
              <option v-for="sec in sections.filter(s => s.floor_id === cabinForm.floor_id)" :key="sec.id" :value="sec.id">{{ sec.name }}</option>
            </select>
          </div>

          <div class="flex items-center space-x-3 pt-4">
            <button type="submit" class="flex-1 py-3 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl text-xs font-bold uppercase tracking-wider cursor-pointer">Create Cabin</button>
            <button type="button" @click="showCabinModal = false" class="px-5 py-3 border border-slate-200 hover:bg-slate-50 text-slate-500 rounded-xl text-xs font-bold uppercase cursor-pointer">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue';
import {
  Building2, RefreshCw, Printer, Plus, Grid, Wand2, Info, Armchair, Trash2, Move
} from 'lucide-vue-next';
import { librarianAPI } from '@/shared/services/api';
import SeatLayoutRenderer from '@/shared/components/SeatLayout/SeatLayoutRenderer.vue';
import { useSwal } from '@/shared/composables/useSwal';
import { Seat, StudyTable } from '@/shared/types';

const { toast, showSuccess, showError, showConfirm } = useSwal();

// State
const loading = ref(false);
const isLayoutMode = ref(false);
const gridSnap = ref(true);

const seats = ref<Seat[]>([]);
const floors = ref<any[]>([]);
const sections = ref<any[]>([]);
const tables = ref<StudyTable[]>([]);

const selectedSeat = ref<Seat | null>(null);
const selectedTable = ref<StudyTable | null>(null);

const layoutRenderer = ref<any>(null);

// Forms
const showSeatModal = ref(false);
const showTableModal = ref(false);
const showCabinModal = ref(false);

const seatForm = ref({ seat_number: '', seat_type: 'regular', floor_id: null as number | null, section_id: null as number | null });
const tableForm = ref({ label: '', capacity: 4, floor_id: null as number | null, section_id: null as number | null });
const cabinForm = ref({ cabin_number: '', floor_id: null as number | null, section_id: null as number | null });

const activeFloorId = computed(() => layoutRenderer.value?.activeFloorId || null);
const activeSectionId = computed(() => layoutRenderer.value?.activeSectionId || null);

// Library dynamic seat layout mode
const activeLayoutMode = ref('individual');

// Cabin Features reactivity wrapper
const cabinFeatures = computed({
  get: () => {
    if (!selectedSeat.value) return {};
    return selectedSeat.value.cabin_features || {};
  },
  set: (val) => {
    if (selectedSeat.value) {
      selectedSeat.value.cabin_features = val;
    }
  }
});

// Stats computed
const seatStats = computed(() => {
  return {
    total: seats.value.length,
    available: seats.value.filter(s => s.status === 'available').length,
    occupied: seats.value.filter(s => s.status === 'occupied').length,
    reserved: seats.value.filter(s => s.status === 'reserved').length,
    overstay: seats.value.filter(s => s.status === 'overstay').length,
    serious_overstay: seats.value.filter(s => s.status === 'serious_overstay').length,
    maintenance: seats.value.filter(s => s.status === 'maintenance' || s.is_maintenance).length,
  };
});

// Auto-assign suggestions for new layouts
const suggestNextSeatNumber = (floorId: number | null, sectionId: number | null) => {
  if (!floorId) return '';
  const section = sections.value.find(s => s.id === sectionId);
  const sectionName = section ? section.name : 'Seat';
  const sectionSeats = seats.value.filter(s => s.floor_id === floorId && s.section_id === sectionId);

  let maxSuffix = 0;
  sectionSeats.forEach(s => {
    if (s.table_id) return;
    const parts = s.seat_number.split('-');
    const lastPart = parts[parts.length - 1];
    const num = parseInt(lastPart, 10);
    if (!isNaN(num) && num > maxSuffix) {
      maxSuffix = num;
    }
  });
  return `${sectionName}-${maxSuffix + 1}`;
};

const suggestNextTableLabel = (floorId: number | null, sectionId: number | null) => {
  if (!floorId) return '';
  const section = sections.value.find(s => s.id === sectionId);
  const sectionPrefix = section ? `${section.name}-` : '';
  const sectionTables = tables.value.filter(t => t.floor_id === floorId && t.section_id === sectionId);

  let maxSuffix = 0;
  sectionTables.forEach(t => {
    const parts = t.label.split(' ');
    const lastPart = parts[parts.length - 1];
    const num = parseInt(lastPart, 10);
    if (!isNaN(num) && num > maxSuffix) {
      maxSuffix = num;
    } else {
      const partsHyphen = t.label.split('-');
      const lastPartHyphen = partsHyphen[partsHyphen.length - 1];
      const numHyphen = parseInt(lastPartHyphen, 10);
      if (!isNaN(numHyphen) && numHyphen > maxSuffix) {
        maxSuffix = numHyphen;
      }
    }
  });
  return `${sectionPrefix}Table ${maxSuffix + 1}`;
};

const suggestNextCabinNumber = (floorId: number | null, sectionId: number | null) => {
  if (!floorId) return '';
  const sectionCabins = seats.value.filter(s => 
    s.floor_id === floorId && 
    s.section_id === sectionId && 
    s.seat_type === 'private_room'
  );

  let maxSuffix = 0;
  sectionCabins.forEach(s => {
    if (s.cabin_number) {
      const num = parseInt(s.cabin_number.replace(/\D/g, ''), 10);
      if (!isNaN(num) && num > maxSuffix) {
        maxSuffix = num;
      }
    } else {
      const num = parseInt(s.seat_number.replace(/\D/g, ''), 10);
      if (!isNaN(num) && num > maxSuffix) {
        maxSuffix = num;
      }
    }
  });
  return `${maxSuffix + 1}`;
};

// Form watchers to auto-update suggested names on change of floor/section inside modals
watch(
  () => [seatForm.value.floor_id, seatForm.value.section_id],
  ([newFloor, newSection]) => {
    if (showSeatModal.value) {
      seatForm.value.seat_number = suggestNextSeatNumber(newFloor as number | null, newSection as number | null);
    }
  }
);

watch(
  () => [tableForm.value.floor_id, tableForm.value.section_id],
  ([newFloor, newSection]) => {
    if (showTableModal.value) {
      tableForm.value.label = suggestNextTableLabel(newFloor as number | null, newSection as number | null);
    }
  }
);

watch(
  () => [cabinForm.value.floor_id, cabinForm.value.section_id],
  ([newFloor, newSection]) => {
    if (showCabinModal.value) {
      cabinForm.value.cabin_number = suggestNextCabinNumber(newFloor as number | null, newSection as number | null);
    }
  }
);

// Fetch Data
const fetchData = async () => {
  loading.value = true;
  try {
    const [seatsData, floorsData, sectionsData, tablesData, libraryInfo] = await Promise.all([
      librarianAPI.getSeats(),
      librarianAPI.getActiveFloors(),
      librarianAPI.getActiveSections(),
      librarianAPI.getStudyTables(),
      librarianAPI.getLibraryInfo()
    ]);

    seats.value = seatsData;
    floors.value = floorsData.sort((a: any, b: any) => a.level - b.level);
    sections.value = sectionsData;
    tables.value = tablesData;
    activeLayoutMode.value = libraryInfo.seat_layout_mode || 'individual';
  } catch (error) {
    console.error('Failed to load seats manager data:', error);
    showError('Error', 'Failed to load visual layout designer data');
  } finally {
    loading.value = false;
  }
};

const toggleLayoutMode = () => {
  isLayoutMode.value = !isLayoutMode.value;
  selectedSeat.value = null;
  selectedTable.value = null;
};

// Clicks Selection Handlers
const handleSeatClick = (seat: Seat) => {
  selectedTable.value = null;
  if (selectedSeat.value?.id === seat.id) {
    selectedSeat.value = null;
  } else {
    selectedSeat.value = { ...seat };
    
    // Make sure cabin_features structure is initialized
    if (seat.seat_type === 'private_room' && !selectedSeat.value.cabin_features) {
      selectedSeat.value.cabin_features = {
        computer: seat.has_computer,
        power_outlet: seat.socket_count > 0,
        ac: true,
        wifi: true
      };
    }
  }
};

const handleTableClick = (table: StudyTable) => {
  selectedSeat.value = null;
  if (selectedTable.value?.id === table.id) {
    selectedTable.value = null;
  } else {
    selectedTable.value = { ...table };
  }
};

// Drag reposition handlers
const handleSeatDrag = async (seatId: number, x: number, y: number) => {
  // Update locally first
  const seat = seats.value.find(s => s.id === seatId);
  if (seat) {
    seat.position_x = x;
    seat.position_y = y;
  }

  try {
    await librarianAPI.updateSeat(seatId, { position_x: x, position_y: y });
    toast('Position Saved', `Seat moved to ${x}, ${y}`, 'success');
  } catch (err) {
    console.error('Failed to update seat position:', err);
  }
};

const handleTableDrag = async (tableId: number, x: number, y: number) => {
  const table = tables.value.find(t => t.id === tableId);
  if (table) {
    table.position_x = x;
    table.position_y = y;
  }

  try {
    await librarianAPI.updateStudyTable(tableId, { position_x: x, position_y: y });
    toast('Position Saved', `Table moved to ${x}, ${y}`, 'success');
  } catch (err) {
    console.error('Failed to update table position:', err);
  }
};

// Create Handlers
const openAddSeatModal = () => {
  if (!activeFloorId.value) {
    showError('Error', 'Please select or add a floor level first.');
    return;
  }
  seatForm.value = {
    seat_number: '',
    seat_type: 'regular',
    floor_id: activeFloorId.value,
    section_id: activeSectionId.value
  };
  seatForm.value.seat_number = suggestNextSeatNumber(activeFloorId.value, activeSectionId.value);
  showSeatModal.value = true;
};

const createSeat = async () => {
  try {
    const data = {
      floor_id: seatForm.value.floor_id,
      section_id: seatForm.value.section_id,
      seat_number: seatForm.value.seat_number,
      seat_type: seatForm.value.seat_type,
      status: 'available',
      position_x: 0,
      position_y: 0
    };
    await librarianAPI.createSeat(data);
    showSeatModal.value = false;
    showSuccess('Created', 'Seat created successfully');
    fetchData();
  } catch (err: any) {
    showError('Failed', err.message || 'Failed to create seat');
  }
};

const openAddTableModal = () => {
  if (!activeFloorId.value) {
    showError('Error', 'Please select or add a floor level first.');
    return;
  }
  tableForm.value = {
    label: '',
    capacity: 4,
    floor_id: activeFloorId.value,
    section_id: activeSectionId.value
  };
  tableForm.value.label = suggestNextTableLabel(activeFloorId.value, activeSectionId.value);
  showTableModal.value = true;
};

const createTable = async () => {
  try {
    const data = {
      floor_id: tableForm.value.floor_id,
      section_id: tableForm.value.section_id,
      capacity: tableForm.value.capacity,
      label: tableForm.value.label,
      position_x: 0,
      position_y: 0
    };
    await librarianAPI.createStudyTable(data);
    showTableModal.value = false;
    showSuccess('Created', 'Study table added successfully with linked seats');
    fetchData();
  } catch (err: any) {
    showError('Failed', err.message || 'Failed to add study table');
  }
};

const openAddCabinModal = () => {
  if (!activeFloorId.value) {
    showError('Error', 'Please select or add a floor level first.');
    return;
  }
  cabinForm.value = {
    cabin_number: '',
    floor_id: activeFloorId.value,
    section_id: activeSectionId.value
  };
  cabinForm.value.cabin_number = suggestNextCabinNumber(activeFloorId.value, activeSectionId.value);
  showCabinModal.value = true;
};

const createCabin = async () => {
  try {
    const data = {
      floor_id: cabinForm.value.floor_id,
      section_id: cabinForm.value.section_id,
      seat_number: `Cabin ${cabinForm.value.cabin_number}`,
      seat_type: 'private_room',
      cabin_number: cabinForm.value.cabin_number,
      cabin_features: {
        power_outlet: true,
        computer: false,
        ac: true,
        wifi: true
      },
      status: 'available',
      position_x: 0,
      position_y: 0
    };
    await librarianAPI.createSeat(data);
    showCabinModal.value = false;
    showSuccess('Created', 'Personal study cabin created successfully');
    fetchData();
  } catch (err: any) {
    showError('Failed', err.message || 'Failed to create cabin');
  }
};

// Update & Save properties
const saveSeat = async () => {
  if (!selectedSeat.value) return;
  try {
    // If it's a private room, copy cabin properties back to main amenities columns
    if (selectedSeat.value.seat_type === 'private_room') {
      selectedSeat.value.has_computer = selectedSeat.value.cabin_features?.computer || false;
      selectedSeat.value.socket_count = selectedSeat.value.cabin_features?.power_outlet ? 1 : 0;
    }

    await librarianAPI.updateSeat(selectedSeat.value.id, {
      seat_number: selectedSeat.value.seat_number,
      floor_id: selectedSeat.value.floor_id,
      section_id: selectedSeat.value.section_id,
      seat_type: selectedSeat.value.seat_type,
      status: selectedSeat.value.status,
      has_computer: selectedSeat.value.has_computer,
      near_window: selectedSeat.value.near_window,
      socket_count: selectedSeat.value.socket_count,
      cabin_number: selectedSeat.value.cabin_number,
      cabin_features: selectedSeat.value.cabin_features,
    });
    selectedSeat.value = null;
    showSuccess('Saved', 'Seat properties updated successfully');
    fetchData();
  } catch (err: any) {
    showError('Failed', err.message || 'Failed to update seat properties');
  }
};

const deleteSeat = async (id: number) => {
  const confirm = await showConfirm('Delete Seat?', 'Are you sure you want to permanently delete this seat?');
  if (!confirm) return;

  try {
    await librarianAPI.deleteSeat(id);
    selectedSeat.value = null;
    showSuccess('Deleted', 'Seat removed successfully');
    fetchData();
  } catch (err: any) {
    showError('Failed', err.message || 'Failed to delete seat');
  }
};

const saveTable = async () => {
  if (!selectedTable.value) return;
  try {
    await librarianAPI.updateStudyTable(selectedTable.value.id, {
      label: selectedTable.value.label,
      capacity: selectedTable.value.capacity,
      section_id: selectedTable.value.section_id
    });
    selectedTable.value = null;
    showSuccess('Saved', 'Table properties saved successfully');
    fetchData();
  } catch (err: any) {
    showError('Failed', err.message || 'Failed to save table');
  }
};

const deleteTable = async (id: number) => {
  const confirm = await showConfirm('Delete Table?', 'Warning: deleting this table will permanently delete all associated seats. Continue?');
  if (!confirm) return;

  try {
    await librarianAPI.deleteStudyTable(id);
    selectedTable.value = null;
    showSuccess('Deleted', 'Table and linked seats deleted successfully');
    fetchData();
  } catch (err: any) {
    showError('Failed', err.message || 'Failed to delete table');
  }
};

// Automatic seat sequential numbering
const triggerAutoNumbering = async () => {
  const seatsToNumber = seats.value.filter(s => {
    return s.floor_id === activeFloorId.value && 
           s.section_id === activeSectionId.value &&
           s.seat_type !== 'private_room' &&
           !s.table_id;
  });

  if (seatsToNumber.length === 0) {
    showError('No Seats', 'No individual seats found in this floor/section to auto-number');
    return;
  }

  const confirm = await showConfirm(
    'Auto Number Seats?',
    `This will automatically re-number ${seatsToNumber.length} individual seats sequentially (1, 2, 3...) based on their layout position from top-left. Continue?`
  );
  if (!confirm) return;

  try {
    // Sort seats by top coordinate then left coordinate
    const sorted = [...seatsToNumber].sort((a, b) => {
      const diffY = (a.position_y || 0) - (b.position_y || 0);
      if (Math.abs(diffY) < 15) {
        return (a.position_x || 0) - (b.position_x || 0);
      }
      return diffY;
    });

    const prefix = sections.value.find(s => s.id === activeSectionId.value)?.name.substring(0, 2).toUpperCase() || 'S';

    const seatsPayload = sorted.map((seat, index) => {
      const newNum = `${prefix}-${index + 1}`;
      return {
        id: seat.id,
        seat_number: newNum
      };
    });

    await librarianAPI.bulkUpdateSeats({ seats: seatsPayload });
    showSuccess('Re-numbered', `Successfully sequentially numbered ${seatsToNumber.length} seats`);
    fetchData();
  } catch (err: any) {
    showError('Error', 'Failed to auto-number some seats');
  }
};

const naturalCompare = (a: string, b: string) => {
  const ax: any[] = [];
  const bx: any[] = [];
  a.replace(/(\d+)|(\D+)/g, function() {
    ax.push([arguments[1] ? parseInt(arguments[1], 10) : Infinity, arguments[2] || '']);
    return '';
  });
  b.replace(/(\d+)|(\D+)/g, function() {
    bx.push([arguments[1] ? parseInt(arguments[1], 10) : Infinity, arguments[2] || '']);
    return '';
  });
  while (ax.length && bx.length) {
    const an = ax.shift();
    const bn = bx.shift();
    const nn = (an[0] !== bn[0]) 
      ? (an[0] - bn[0]) 
      : an[1].localeCompare(bn[1], undefined, { sensitivity: 'base' });
    if (nn) return nn;
  }
  return ax.length - bx.length;
};

const triggerAutoArrange = async () => {
  if (activeLayoutMode.value === 'individual') {
    const seatsToArrange = seats.value.filter(s => {
      return s.floor_id === activeFloorId.value && 
             s.section_id === activeSectionId.value &&
             s.seat_type !== 'private_room' &&
             !s.table_id;
    });

    if (seatsToArrange.length === 0) {
      showError('No Seats', 'No individual seats found in this floor/section to arrange.');
      return;
    }

    const confirm = await showConfirm(
      'Auto-Arrange Seats?',
      `This will arrange all ${seatsToArrange.length} individual seats into straight rows sorted ascending by seat number. Continue?`
    );
    if (!confirm) return;

    try {
      const sorted = [...seatsToArrange].sort((a, b) => naturalCompare(a.seat_number, b.seat_number));
      const seatsPerRow = 10;
      const colSpacing = 78;
      const rowSpacing = 95;
      const startX = 45;
      const startY = 50;

      const seatsPayload = sorted.map((seat, index) => {
        const row = Math.floor(index / seatsPerRow);
        const col = index % seatsPerRow;
        const x = startX + col * colSpacing;
        const y = startY + row * rowSpacing;
        return {
          id: seat.id,
          position_x: x,
          position_y: y
        };
      });

      await librarianAPI.bulkUpdateSeats({ seats: seatsPayload });
      showSuccess('Arranged', 'Individual seats arranged in straight rows successfully!');
      fetchData();
    } catch (err: any) {
      showError('Failed', 'Failed to auto-arrange seats');
    }
  } else if (activeLayoutMode.value === 'tables') {
    const tablesToArrange = tables.value.filter(t => {
      return t.floor_id === activeFloorId.value && t.section_id === activeSectionId.value;
    });

    if (tablesToArrange.length === 0) {
      showError('No Tables', 'No study tables found in this floor/section to arrange.');
      return;
    }

    const confirm = await showConfirm(
      'Auto-Arrange Tables?',
      `This will arrange all ${tablesToArrange.length} study tables into straight rows sorted ascending by table label. Continue?`
    );
    if (!confirm) return;

    try {
      const sorted = [...tablesToArrange].sort((a, b) => naturalCompare(a.label, b.label));
      const tablesPerRow = 3;
      const colSpacing = 240;
      const rowSpacing = 160;
      const startX = 60;
      const startY = 60;

      const promises = sorted.map((table, index) => {
        const row = Math.floor(index / tablesPerRow);
        const col = index % tablesPerRow;
        const x = startX + col * colSpacing;
        const y = startY + row * rowSpacing;
        return librarianAPI.updateStudyTable(table.id, { position_x: x, position_y: y });
      });

      await Promise.all(promises);
      showSuccess('Arranged', 'Study tables arranged successfully!');
      fetchData();
    } catch (err: any) {
      showError('Failed', 'Failed to auto-arrange tables');
    }
  } else if (activeLayoutMode.value === 'cabins') {
    const cabinsToArrange = seats.value.filter(s => {
      return s.floor_id === activeFloorId.value && 
             s.section_id === activeSectionId.value &&
             (s.seat_type === 'private_room' || s.cabin_number !== null);
    });

    if (cabinsToArrange.length === 0) {
      showError('No Cabins', 'No cabins found in this floor/section to arrange.');
      return;
    }

    const confirm = await showConfirm(
      'Auto-Arrange Cabins?',
      `This will arrange all ${cabinsToArrange.length} private cabins into straight rows sorted ascending by cabin number. Continue?`
    );
    if (!confirm) return;

    try {
      const sorted = [...cabinsToArrange].sort((a, b) => naturalCompare(a.cabin_number || a.seat_number, b.cabin_number || b.seat_number));
      const cabinsPerRow = 5;
      const colSpacing = 145;
      const rowSpacing = 190;
      const startX = 50;
      const startY = 60;

      const seatsPayload = sorted.map((cabin, index) => {
        const row = Math.floor(index / cabinsPerRow);
        const col = index % cabinsPerRow;
        const x = startX + col * colSpacing;
        const y = startY + row * rowSpacing;
        return {
          id: cabin.id,
          position_x: x,
          position_y: y
        };
      });

      await librarianAPI.bulkUpdateSeats({ seats: seatsPayload });
      showSuccess('Arranged', 'Private cabins arranged successfully!');
      fetchData();
    } catch (err: any) {
      showError('Failed', 'Failed to auto-arrange cabins');
    }
  }
};

// Print QRs
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

  // Filter seats representing active section/floor
  const sectionSeats = seats.value.filter(s => {
    const floorOk = !activeFloorId.value || s.floor_id === activeFloorId.value;
    const sectionOk = !activeSectionId.value || s.section_id === activeSectionId.value;
    return floorOk && sectionOk;
  });

  let html = `
    <html>
      <head>
        <title>Print QR Codes - ${section.name}</title>
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;800;900&display=swap" rel="stylesheet">
        <style>
          body { font-family: 'Outfit', sans-serif; margin: 0; padding: 40px 20px; background-color: #f8fafc; }
          .no-print { text-align: right; max-width: 1200px; margin: 0 auto 20px auto; }
          .no-print button { padding: 10px 20px; background: #7c3aed; color: white; border: none; border-radius: 8px; cursor: pointer; font-weight: bold; font-size: 13px; box-shadow: 0 4px 6px rgba(0,0,0,0.05); }
          .header { text-align: center; margin-bottom: 40px; }
          .header h1 { font-size: 28px; font-weight: 900; color: #0f172a; margin: 0; }
          .qr-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; max-width: 1200px; margin: 0 auto; }
          .qr-card { background: white; border: 1px solid #e2e8f0; border-radius: 16px; padding: 24px; text-align: center; page-break-inside: avoid; display: flex; flex-direction: column; align-items: center; }
          .seat-badge { font-size: 20px; font-weight: 900; color: #0f172a; margin: 16px 0 0 0; }
          @media print {
            .no-print { display: none; }
            body { background: white; padding: 0; }
            .qr-card { border: 1px solid #cbd5e1; }
          }
        </style>
      </head>
      <body>
        <div class="no-print">
          <button onclick="window.print()">Print QR Codes</button>
        </div>
        <div class="header">
          <h1>Seat QR Codes</h1>
          <p>Section: ${section.name}</p>
        </div>
        <div class="qr-grid">
  `;

  sectionSeats.forEach((seat: any) => {
    const seatSectionName = seat.seat_section?.name || section.name;
    const qrUrl = seat.qr_code_url || `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(seat.qr_code || seat.seat_number)}`;
    html += `
      <div class="qr-card">
        <div class="brand-name">SMARTLIB SYSTEM</div>
        <img src="${qrUrl}" style="width: 150px; height: 150px; margin-top: 15px;" />
        <div class="seat-badge">${seat.seat_type === 'private_room' ? 'CABIN ' + (seat.cabin_number || seat.seat_number) : 'SEAT ' + seat.seat_number}</div>
        <div class="meta-info">${seatSectionName}</div>
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

onMounted(fetchData);
</script>
