<template>
  <div class="p-6 space-y-6 font-outfit text-slate-700">
    
    <!-- Top Action Bar & Filter -->
    <div class="bg-white rounded-2xl shadow-sm border border-slate-100 p-4">
      <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <!-- Filter by Floor -->
        <div class="flex items-center space-x-3 w-full sm:max-w-xs text-left">
          <div class="w-full">
            <label class="block text-[10px] font-bold text-slate-400 mb-1 uppercase tracking-wider">Filter by Floor</label>
            <div class="relative">
              <select
                v-model="selectedFloorId"
                @change="fetchSections"
                class="w-full pl-9 pr-8 py-2.5 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-400 transition-all text-xs text-slate-700 font-semibold bg-slate-50/50 appearance-none cursor-pointer shadow-sm"
              >
                <option :value="null">All Floors</option>
                <option v-for="floor in floors" :key="floor.id" :value="floor.id">
                  {{ floor.name }} (Level {{ floor.level }})
                </option>
              </select>
              <Building2 class="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <div class="absolute inset-y-0 right-3 flex items-center pointer-events-none text-slate-400">
                <ChevronDown class="w-3.5 h-3.5" />
              </div>
            </div>
          </div>
        </div>

        <!-- Actions -->
        <div class="flex items-center space-x-3 sm:ml-auto">
          <button 
            @click="fetchSections" 
            class="p-2.5 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors cursor-pointer shadow-sm" 
            title="Refresh List"
          >
            <RefreshCw :class="['w-4 h-4 text-slate-500', loading ? 'animate-spin' : '']" />
          </button>
          <button
            @click="printAllQRs"
            class="px-4 py-2.5 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors flex items-center space-x-2 text-xs font-semibold text-slate-600 cursor-pointer shadow-sm"
          >
            <Printer class="w-4 h-4 text-slate-500" />
            <span>Print All Bulk</span>
          </button>
          <button
            @click="openCreateModal"
            class="px-4.5 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl transition-all flex items-center space-x-2 text-xs font-bold shadow-md shadow-emerald-700/10 cursor-pointer active:scale-98"
          >
            <Plus class="w-4 h-4" />
            <span>Add Section</span>
          </button>
        </div>
      </div>
    </div>

    <!-- Sections Table Card -->
    <div class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden text-left">
      <div class="overflow-x-auto">
        <table class="min-w-full divide-y divide-slate-100 text-xs">
          <thead>
            <tr class="bg-slate-50/70 text-slate-400 font-bold uppercase tracking-wider border-b border-slate-100">
              <th class="px-6 py-4 font-semibold">Section details</th>
              <th class="px-6 py-4 font-semibold">Floor level</th>
              <th class="px-6 py-4 font-semibold">Seat stats</th>
              <th class="px-6 py-4 font-semibold">Subsections</th>
              <th class="px-6 py-4 font-semibold">Restrictions</th>
              <th class="px-6 py-4 font-semibold">Status</th>
              <th class="px-6 py-4 text-right font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-50">
            <template v-for="section in sections" :key="section.id">
              <tr class="hover:bg-slate-50/50 transition-colors">
                <td class="px-6 py-4">
                  <div class="font-bold text-slate-800 text-sm flex items-center gap-2">
                    <span>{{ section.name }}</span>
                    <span v-if="section.has_subsections" class="text-[9px] font-bold bg-blue-50 text-blue-700 px-2 py-0.5 rounded-md border border-blue-100 uppercase">Subsections Enabled</span>
                  </div>
                  <div class="text-[11px] text-slate-400 font-medium mt-0.5">{{ section.description || 'No description provided' }}</div>
                </td>
                <td class="px-6 py-4">
                  <div class="font-bold text-slate-700">{{ section.floor?.name || 'N/A' }}</div>
                  <div class="text-[10px] text-slate-400 font-semibold mt-0.5">Level {{ section.floor?.level ?? '0' }}</div>
                </td>
                <td class="px-6 py-4">
                  <div class="font-bold text-slate-700">{{ section.total_seats }} total</div>
                  <div class="text-[10px] text-green-600 font-bold mt-0.5">{{ section.available_seats }} available</div>
                </td>
                
                <!-- Subsections Column -->
                <td class="px-6 py-4">
                  <button
                    @click="toggleSubsectionDrawer(section)"
                    :class="[
                      'px-2.5 py-1 rounded-lg text-[10px] font-bold border transition-all flex items-center space-x-1 cursor-pointer',
                      section.has_subsections
                        ? 'bg-blue-50 border-blue-200 text-blue-700 hover:bg-blue-100'
                        : 'bg-slate-50 border-slate-200 text-slate-500 hover:bg-slate-100'
                    ]"
                  >
                    <Layers class="w-3.5 h-3.5" />
                    <span>
                      {{ section.subsections?.length ? `${section.subsections.length} Subsections` : (section.has_subsections ? '+ Manage' : 'Disabled') }}
                    </span>
                  </button>
                </td>

                <td class="px-6 py-4 space-y-1">
                  <div>
                    <span
                      :class="[
                        'px-2 py-0.5 rounded text-[9px] font-bold uppercase border inline-block mr-1',
                        section.gender === 'male' ? 'bg-blue-50 border-blue-100 text-blue-700' :
                        section.gender === 'female' ? 'bg-pink-50 border-pink-100 text-pink-700' :
                        'bg-emerald-50 border-emerald-100 text-emerald-700'
                      ]"
                    >
                      {{ section.gender === 'male' ? 'Male Only' : section.gender === 'female' ? 'Female Only' : 'Mixed (All)' }}
                    </span>
                  </div>
                  <div>
                    <span
                      :class="[
                        'px-2 py-0.5 rounded text-[9px] font-bold uppercase border inline-block',
                        section.academic_level === 'PRC' ? 'bg-amber-50 border-amber-100 text-amber-700' :
                        section.academic_level === 'CAF' ? 'bg-cyan-50 border-cyan-100 text-cyan-700' :
                        section.academic_level === 'Final' ? 'bg-purple-50 border-purple-100 text-purple-700' :
                        'bg-slate-50 border-slate-200 text-slate-600'
                      ]"
                    >
                      {{ section.academic_level === 'all' || !section.academic_level ? 'All Academic Levels' : section.academic_level }}
                    </span>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <span
                    :class="[
                      'px-2.5 py-0.5 rounded-full text-[9px] font-bold uppercase border inline-flex items-center gap-1',
                      section.is_active ? 'bg-green-50 border-green-100 text-green-700' : 'bg-red-50 border-red-100 text-red-700'
                    ]"
                  >
                    <span :class="['w-1.5 h-1.5 rounded-full', section.is_active ? 'bg-green-500' : 'bg-red-500']"></span>
                    {{ section.is_active ? 'Active' : 'Inactive' }}
                  </span>
                </td>
                <td class="px-6 py-4 text-right">
                  <div class="flex items-center justify-end space-x-2">
                    <button 
                      @click="printSectionQRs(section)" 
                      class="px-2.5 py-1.5 text-slate-600 bg-slate-50 hover:bg-slate-100 rounded-lg font-bold border border-slate-200/60 cursor-pointer inline-flex items-center gap-1"
                    >
                      <Printer class="w-3.5 h-3.5" />
                      <span>Print QR</span>
                    </button>
                    <button 
                      @click="editSection(section)" 
                      class="px-2.5 py-1.5 text-emerald-700 bg-emerald-50 hover:bg-emerald-100 rounded-lg font-bold border border-emerald-100 cursor-pointer"
                    >
                      Edit
                    </button>
                    <button 
                      @click="confirmDelete(section)" 
                      class="px-2.5 py-1.5 text-red-600 bg-red-50 hover:bg-red-100 rounded-lg font-bold border border-red-100 cursor-pointer"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>

              <!-- Nested Subsections Drawer Row -->
              <tr v-if="activeSubsectionSectionId === section.id" class="bg-blue-50/20 border-t border-b border-blue-100">
                <td colspan="7" class="p-4">
                  <div class="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-md space-y-5">
                    <!-- Sleek Header Banner -->
                    <div class="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-100 pb-4 gap-3">
                      <div class="flex items-center space-x-2.5">
                        <div class="p-2 bg-blue-50 text-blue-600 rounded-xl border border-blue-100">
                          <Layers class="w-5 h-5" />
                        </div>
                        <div>
                          <h5 class="font-bold text-slate-700 text-sm">
                            Subsections under {{ section.name }}
                          </h5>
                          <p class="text-[11px] text-slate-400 font-medium">Divide section capacity into specific subsections (e.g. PRC, CAF, Final Level)</p>
                        </div>
                      </div>

                      <div class="flex items-center space-x-3">
                        <!-- Capacity Pills -->
                        <div class="flex items-center space-x-1.5 text-[11px] font-bold">
                          <span class="bg-slate-100 text-slate-700 px-2.5 py-1 rounded-lg">
                            Capacity: {{ section.total_seats }} Seats
                          </span>
                          <span class="bg-emerald-50 text-emerald-700 px-2.5 py-1 rounded-lg border border-emerald-100">
                            Allocated: {{ getAllocatedSubSeats(section) }}
                          </span>
                          <span class="bg-blue-50 text-blue-700 px-2.5 py-1 rounded-lg border border-blue-100">
                            Unallocated: {{ Math.max(0, section.total_seats - getAllocatedSubSeats(section)) }}
                          </span>
                        </div>

                        <button
                          v-if="!!section.has_subsections && !showAddSubForm && section.subsections && section.subsections.length > 0"
                          @click="openAddSubForm"
                          class="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-bold transition-all flex items-center space-x-1 cursor-pointer shadow-xs"
                        >
                          <Plus class="w-3.5 h-3.5" />
                          <span>+ Add Subsection</span>
                        </button>

                        <button
                          @click="activeSubsectionSectionId = null"
                          class="px-2.5 py-1 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg text-xs font-bold transition-all cursor-pointer"
                        >
                          Close &times;
                        </button>
                      </div>
                    </div>

                    <!-- Warning banner if subsections are disabled for this section -->
                    <div v-if="!section.has_subsections" class="bg-amber-50/90 p-4 rounded-2xl border border-amber-200/80 flex flex-col sm:flex-row items-center justify-between gap-3">
                      <div class="flex items-center space-x-3 text-left">
                        <div class="p-2 bg-amber-100 text-amber-700 rounded-xl border border-amber-200/50">
                          <AlertTriangle class="w-5 h-5" />
                        </div>
                        <div>
                          <h6 class="text-xs font-bold text-amber-900">Subsections are currently disabled for {{ section.name }}</h6>
                          <p class="text-[11px] text-amber-700 font-medium mt-0.5">Enable subsections first to add and assign subsections to this section.</p>
                        </div>
                      </div>
                      <button
                        @click="enableSubsectionsForSection(section)"
                        :disabled="subLoading"
                        class="px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-xl text-xs font-bold transition-all shrink-0 cursor-pointer shadow-xs disabled:opacity-50 flex items-center space-x-1.5"
                      >
                        <Plus class="w-3.5 h-3.5" />
                        <span>Enable Subsections Now</span>
                      </button>
                    </div>

                    <!-- Create / Edit Subsection Card Form -->
                    <form
                      v-if="!!section.has_subsections && (showAddSubForm || !section.subsections || section.subsections.length === 0)"
                      @submit.prevent="saveSubsection(section.id)"
                      class="bg-blue-50/40 p-4 rounded-2xl border border-blue-100/80 space-y-4"
                    >
                      <div class="flex items-center justify-between border-b border-blue-100/60 pb-3">
                        <span class="text-xs font-bold uppercase tracking-wider text-blue-900 flex items-center space-x-1.5">
                          <span class="w-2 h-2 rounded-full bg-blue-600"></span>
                          <span>{{ isSubEditing ? 'Edit Subsection' : 'Add Subsections' }}</span>
                        </span>
                        <button
                          type="button"
                          @click="closeAddSubForm"
                          class="text-[11px] text-slate-500 hover:text-slate-700 font-bold cursor-pointer bg-white px-2.5 py-1 rounded-lg border border-slate-200"
                        >
                          Cancel
                        </button>
                      </div>

                      <!-- Subsection Rows -->
                      <div class="space-y-3">
                        <div
                          v-for="(subRow, index) in subFormRows"
                          :key="index"
                          class="grid grid-cols-1 md:grid-cols-12 gap-3 items-end bg-white p-3 rounded-xl border border-slate-200/80 shadow-xs"
                        >
                          <!-- Subsection Name -->
                          <div class="md:col-span-3">
                            <label class="block text-[10px] font-bold text-slate-500 uppercase mb-1">Subsection Name</label>
                            <input
                              v-model="subRow.name"
                              @input="onSubRowNameInput(subRow)"
                              type="text"
                              required
                              placeholder="e.g. PRC, CAF, Final"
                              class="w-full px-3 py-2 border border-slate-200 rounded-xl text-xs font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                            />
                          </div>

                          <!-- Seat Code / Prefix -->
                          <div class="md:col-span-3">
                            <label class="block text-[10px] font-bold text-slate-500 uppercase mb-1">Seat Code / Prefix</label>
                            <input
                              v-model="subRow.code"
                              type="text"
                              required
                              placeholder="e.g. PRC, CAF, Final"
                              class="w-full px-3 py-2 border border-slate-200 rounded-xl text-xs font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                            />
                          </div>

                          <!-- Seat Allocation Count -->
                          <div class="md:col-span-2">
                            <label class="block text-[10px] font-bold text-slate-500 uppercase mb-1">Seats Allocated</label>
                            <input
                              v-model.number="subRow.total_seats"
                              type="number"
                              min="0"
                              :max="section.total_seats"
                              placeholder="e.g. 20"
                              class="w-full px-3 py-2 border border-slate-200 rounded-xl text-xs font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                            />
                          </div>

                          <!-- Academic Level -->
                          <div :class="subFormRows.length > 1 && !isSubEditing ? 'md:col-span-3' : 'md:col-span-4'">
                            <label class="block text-[10px] font-bold text-slate-500 uppercase mb-1">Academic Level</label>
                            <select
                              v-model="subRow.academic_level"
                              class="w-full px-3 py-2 border border-slate-200 rounded-xl text-xs font-bold text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 cursor-pointer"
                            >
                              <option value="all">Inherit / All Students</option>
                              <option value="PRC">PRC Students Only</option>
                              <option value="CAF">CAF Students Only</option>
                              <option value="Final">Final Year Students Only</option>
                            </select>
                          </div>

                          <!-- Remove Row Button -->
                          <div v-if="subFormRows.length > 1 && !isSubEditing" class="md:col-span-1 flex justify-end">
                            <button
                              type="button"
                              @click="removeSubRow(index)"
                              class="p-2 text-rose-500 hover:bg-rose-50 rounded-lg transition-colors cursor-pointer"
                              title="Remove row"
                            >
                              <X class="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>

                      <!-- Actions Row -->
                      <div class="flex items-center justify-between pt-2">
                        <button
                          v-if="!isSubEditing"
                          type="button"
                          @click="addSubRow"
                          class="px-3.5 py-2 bg-blue-100 hover:bg-blue-200 text-blue-700 rounded-xl text-xs font-bold transition-all flex items-center space-x-1.5 cursor-pointer"
                        >
                          <Plus class="w-4 h-4" />
                          <span>+ Add Another Subsection</span>
                        </button>
                        <div v-else></div>

                        <button
                          type="submit"
                          :disabled="subLoading"
                          class="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold transition-all disabled:opacity-50 shadow-sm cursor-pointer"
                        >
                          {{ subLoading ? 'Saving...' : (isSubEditing ? 'Save Changes' : 'Save Subsections') }}
                        </button>
                      </div>
                    </form>

                    <!-- List of Subsections -->
                    <div class="space-y-3">
                      <div
                        v-for="sub in section.subsections"
                        :key="sub.id"
                        class="bg-white border border-slate-100 rounded-xl overflow-hidden shadow-xs transition-all hover:border-blue-200"
                      >
                        <div class="flex items-center justify-between p-3.5 bg-slate-50/50">
                          <div class="flex items-center space-x-3">
                            <span class="w-2.5 h-2.5 rounded-full" :class="sub.is_active ? 'bg-emerald-500' : 'bg-rose-400'"></span>
                            <div>
                              <div class="font-bold text-slate-800 flex items-center gap-2 flex-wrap">
                                <span>{{ sub.name }}</span>
                                <span v-if="sub.code && sub.code.toLowerCase() !== sub.name.toLowerCase()" class="text-[9px] font-extrabold bg-blue-50 text-blue-700 px-1.5 py-0.5 rounded border border-blue-100 uppercase">Prefix: {{ sub.code }}</span>
                                <span v-if="sub.academic_level && sub.academic_level !== 'all' && sub.academic_level.toLowerCase() !== sub.name.toLowerCase()" class="text-[9px] font-bold bg-amber-50 text-amber-700 px-1.5 py-0.5 rounded border border-amber-100 uppercase">{{ sub.academic_level }}</span>
                                <span class="text-[9px] font-bold bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded border border-emerald-100 uppercase">{{ sub.total_seats || 0 }} Seats Allocated</span>
                              </div>
                              <div class="text-[10px] text-slate-400 mt-0.5">{{ sub.description || 'No description' }} &bull; {{ sub.seats?.length || sub.seats_count || 0 }} assigned seats</div>
                            </div>
                          </div>

                          <div class="flex items-center space-x-2">
                            <button
                              @click="editSubsection(sub)"
                              class="px-3 py-1.5 text-xs text-blue-600 hover:bg-blue-50 rounded-lg font-bold transition-colors cursor-pointer"
                            >
                              Edit
                            </button>
                            <button
                              @click="deleteSubsection(section.id, sub.id)"
                              class="px-3 py-1.5 text-xs text-rose-600 hover:bg-rose-50 rounded-lg font-bold transition-colors cursor-pointer"
                            >
                              Delete
                            </button>
                          </div>
                        </div>
                      </div>

                      <div v-if="!section.subsections || section.subsections.length === 0" class="text-center py-4 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                        No subsections created yet. Add one above.
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
            </template>

            <tr v-if="sections.length === 0 && !loading">
              <td colspan="7" class="px-6 py-16 text-center">
                <Building2 class="w-10 h-10 text-slate-200 mx-auto mb-3" />
                <p class="text-slate-400 font-semibold uppercase tracking-wider text-[11px]">No sections found</p>
                <p class="text-[10px] text-slate-400 mt-0.5">Click "Add Section" to configure library space partitions.</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Create/Edit Section Modal (REDESIGNED) -->
    <div v-if="showModal" class="fixed inset-0 bg-slate-900/60 backdrop-blur-md flex items-center justify-center z-50 p-4" @click.self="showModal = false">
      <div class="bg-white rounded-2xl shadow-2xl max-w-2xl w-full mx-auto overflow-hidden border border-slate-100 animate-in fade-in zoom-in duration-200 flex flex-col max-h-[90vh]">
        
        <!-- Modal Header -->
        <div class="px-6 py-5 bg-gradient-to-r from-emerald-800 via-emerald-700 to-teal-800 text-white flex items-center justify-between text-left">
          <div class="flex items-center space-x-3">
            <div class="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
              <Layers class="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 class="text-base font-bold text-white tracking-wide">{{ isEditing ? 'Edit Section Settings' : 'Add New Section' }}</h3>
              <p class="text-[11px] text-emerald-100/80 font-medium">Configure seating capacity, floor level, and access rules</p>
            </div>
          </div>
          <button @click="showModal = false" class="p-2 hover:bg-white/10 rounded-xl transition-colors cursor-pointer text-white/80 hover:text-white">
            <X class="w-5 h-5" />
          </button>
        </div>

        <!-- Modal Form Body -->
        <form @submit.prevent="saveSection" class="p-6 overflow-y-auto space-y-5 text-left flex-1">
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <!-- Floor Level -->
            <div>
              <label class="block text-[10px] font-bold text-slate-400 mb-1.5 uppercase tracking-wider flex items-center gap-1.5">
                <Building2 class="w-3.5 h-3.5 text-emerald-600" />
                Floor Level
              </label>
              <select
                v-model="form.floor_id"
                required
                class="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all text-xs text-slate-700 font-semibold bg-slate-50/50 cursor-pointer"
              >
                <option v-for="floor in floors" :key="floor.id" :value="floor.id">
                  {{ floor.name }} (Level {{ floor.level }})
                </option>
              </select>
            </div>

            <!-- Section Name -->
            <div>
              <label class="block text-[10px] font-bold text-slate-400 mb-1.5 uppercase tracking-wider flex items-center gap-1.5">
                <Layers class="w-3.5 h-3.5 text-emerald-600" />
                Section Name
              </label>
              <input
                v-model="form.name"
                type="text"
                required
                class="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all text-xs text-slate-700 font-semibold bg-slate-50/50 placeholder:font-normal"
                placeholder="e.g. Boys Section / Quiet Study Zone"
              />
            </div>

            <!-- Gender Restriction -->
            <div>
              <label class="block text-[10px] font-bold text-slate-400 mb-1.5 uppercase tracking-wider flex items-center gap-1.5">
                <Users class="w-3.5 h-3.5 text-emerald-600" />
                Gender Restriction
              </label>
              <select
                v-model="form.gender"
                required
                class="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all text-xs text-slate-700 font-semibold bg-slate-50/50 cursor-pointer"
              >
                <option value="mixed">Mixed (Available for All)</option>
                <option value="male">Male Only</option>
                <option value="female">Female Only</option>
              </select>
            </div>

            <!-- Academic Level Restriction -->
            <div>
              <label class="block text-[10px] font-bold text-slate-400 mb-1.5 uppercase tracking-wider flex items-center gap-1.5">
                <GraduationCap class="w-3.5 h-3.5 text-emerald-600" />
                Academic Level Restriction
              </label>
              <select
                v-model="form.academic_level"
                required
                class="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all text-xs text-slate-700 font-semibold bg-slate-50/50 cursor-pointer"
              >
                <option value="all">Available for All Levels</option>
                <option value="PRC">PRC Students Only</option>
                <option value="CAF">CAF Students Only</option>
                <option value="Final">Final Year Students Only</option>
              </select>
            </div>
          </div>

          <!-- Total Seats & Warning Notice -->
          <div>
            <label class="block text-[10px] font-bold text-slate-400 mb-1.5 uppercase tracking-wider flex items-center gap-1.5">
              <Armchair class="w-3.5 h-3.5 text-emerald-600" />
              Total Seats
            </label>
            <input
              v-model.number="form.total_seats"
              type="number"
              required
              class="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all text-xs text-slate-700 font-bold bg-slate-50/50"
              placeholder="e.g. 50"
            />
            
            <div v-if="isEditing" class="mt-2.5 p-3 bg-amber-50/80 border border-amber-200/60 rounded-xl flex items-start space-x-2.5">
              <AlertTriangle class="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
              <p class="text-[11px] text-amber-800 font-medium leading-relaxed">
                <span class="font-bold">Important Note:</span> Changing total seat count will automatically sync and generate or prune seat records for this section.
              </p>
            </div>
          </div>

          <!-- Description -->
          <div>
            <label class="block text-[10px] font-bold text-slate-400 mb-1.5 uppercase tracking-wider">Description (Optional)</label>
            <textarea
              v-model="form.description"
              rows="2"
              class="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all text-xs text-slate-700 font-medium bg-slate-50/50 resize-none placeholder:font-normal"
              placeholder="e.g. Near window, quiet area for intensive study"
            ></textarea>
          </div>

          <!-- Options Toggles -->
          <div class="p-3.5 bg-slate-50 rounded-xl border border-slate-100 flex flex-wrap items-center justify-between gap-3">
            <label class="flex items-center space-x-2.5 cursor-pointer select-none">
              <input
                v-model="form.is_active"
                type="checkbox"
                class="w-4 h-4 rounded text-emerald-600 focus:ring-emerald-500 cursor-pointer"
              />
              <span class="text-xs font-bold text-slate-700">Mark Section Active</span>
            </label>

            <label class="flex items-center space-x-2.5 cursor-pointer select-none">
              <input
                v-model="form.has_subsections"
                type="checkbox"
                class="w-4 h-4 rounded text-blue-600 focus:ring-blue-500 cursor-pointer"
              />
              <span class="text-xs font-bold text-blue-700">Enable Subsections</span>
            </label>
          </div>

          <!-- Footer Actions -->
          <div class="flex items-center justify-end space-x-3 pt-4 border-t border-slate-100">
            <button
              type="button"
              @click="showModal = false"
              class="px-5 py-2.5 border border-slate-200 text-slate-600 font-bold rounded-xl hover:bg-slate-100 transition-all text-xs cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              :disabled="loading"
              class="px-6 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl transition-all disabled:opacity-50 text-xs font-bold shadow-md shadow-emerald-700/10 cursor-pointer flex items-center space-x-2"
            >
              <RefreshCw v-if="loading" class="w-3.5 h-3.5 animate-spin" />
              <span>{{ loading ? 'Saving...' : (isEditing ? 'Update Section' : 'Create Section') }}</span>
            </button>
          </div>
        </form>

      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { Plus, X, RefreshCw, Printer, ChevronDown, Building2, Layers, Users, GraduationCap, Armchair, AlertTriangle } from 'lucide-vue-next';
import { useAuth } from '@/shared/composables/useAuth';
import { librarianAPI } from '@/shared/services/api';
import { useSwal } from '@/shared/composables/useSwal';

const { showConfirm, showSuccess, showError } = useSwal();
const { user } = useAuth();

const sections = ref<any[]>([]);
const floors = ref<any[]>([]);
const loading = ref(false);
const showModal = ref(false);
const isEditing = ref(false);
const selectedFloorId = ref<number | null>(null);

const activeSubsectionSectionId = ref<number | null>(null);
const subLoading = ref(false);
const isSubEditing = ref(false);
const showAddSubForm = ref(false);

const openAddSubForm = () => {
  resetSubForm();
  showAddSubForm.value = true;
};

const closeAddSubForm = () => {
  resetSubForm();
  showAddSubForm.value = false;
};

const form = ref({
  id: null as number | null,
  floor_id: null as number | null,
  name: '',
  gender: 'mixed',
  academic_level: 'all',
  total_seats: 0,
  description: '',
  has_subsections: false,
  is_active: true
});

interface SubFormRow {
  id: number | null;
  name: string;
  code: string;
  gender: string;
  academic_level: string;
  total_seats: number;
  auto_generate_seats: boolean;
  description: string;
  is_active: boolean;
}

const subFormRows = ref<SubFormRow[]>([
  {
    id: null,
    name: '',
    code: '',
    gender: 'mixed',
    academic_level: 'all',
    total_seats: 0,
    auto_generate_seats: true,
    description: '',
    is_active: true
  }
]);

const addSubRow = () => {
  subFormRows.value.push({
    id: null,
    name: '',
    code: '',
    gender: 'mixed',
    academic_level: 'all',
    total_seats: 0,
    auto_generate_seats: true,
    description: '',
    is_active: true
  });
};

const removeSubRow = (index: number) => {
  if (subFormRows.value.length > 1) {
    subFormRows.value.splice(index, 1);
  }
};

const onSubRowNameInput = (row: SubFormRow) => {
  if (!row.code) {
    row.code = row.name;
  }
};

const getAllocatedSubSeats = (section: any) => {
  if (!section || !section.subsections || section.subsections.length === 0) return 0;
  return section.subsections.reduce((sum: number, sub: any) => sum + (sub.total_seats || 0), 0);
};

const resetSubForm = () => {
  subFormRows.value = [
    {
      id: null,
      name: '',
      code: '',
      gender: 'mixed',
      academic_level: 'all',
      total_seats: 0,
      auto_generate_seats: true,
      description: '',
      is_active: true
    }
  ];
  isSubEditing.value = false;
};

const editSubsection = (sub: any) => {
  isSubEditing.value = true;
  showAddSubForm.value = true;
  subFormRows.value = [
    {
      id: sub.id,
      name: sub.name,
      code: sub.code || sub.name,
      gender: sub.gender || 'mixed',
      academic_level: sub.academic_level || 'all',
      total_seats: sub.total_seats || 0,
      auto_generate_seats: true,
      description: sub.description || '',
      is_active: sub.is_active
    }
  ];
};

const fetchFloors = async () => {
  try {
    const data = await librarianAPI.getFloors();
    floors.value = data;
  } catch (error) {
    console.error('Error fetching floors:', error);
  }
};

const fetchSections = async () => {
  loading.value = true;
  try {
    const data = await librarianAPI.getSections(selectedFloorId.value || undefined);
    sections.value = data;
  } catch (error) {
    console.error('Error fetching sections:', error);
  } finally {
    loading.value = false;
  }
};

const openCreateModal = () => {
  isEditing.value = false;
  form.value = {
    id: null,
    floor_id: floors.value[0]?.id || null,
    name: '',
    gender: 'mixed',
    academic_level: 'all',
    total_seats: 0,
    description: '',
    has_subsections: false,
    is_active: true
  };
  showModal.value = true;
};

const editSection = (section: any) => {
  isEditing.value = true;
  form.value = {
    id: section.id,
    floor_id: section.floor_id,
    name: section.name,
    gender: section.gender || 'mixed',
    academic_level: section.academic_level || 'all',
    total_seats: section.total_seats,
    description: section.description || '',
    has_subsections: !!section.has_subsections,
    is_active: section.is_active
  };
  showModal.value = true;
};

const saveSection = async () => {
  loading.value = true;
  try {
    if (isEditing.value && form.value.id) {
      await librarianAPI.updateSection(form.value.id, form.value);
      showSuccess('Updated!', 'Section updated successfully.');
    } else {
      await librarianAPI.createSection(form.value);
      showSuccess('Created!', 'New section created successfully.');
    }
    await fetchSections();
    showModal.value = false;
  } catch (error: any) {
    console.error('Error saving section:', error);
    const message = error.response?.data?.message || 'Failed to save section.';
    showError('Save Failed', message);
  } finally {
    loading.value = false;
  }
};

const confirmDelete = async (section: any) => {
  if (!await showConfirm('Delete Section', `Are you sure you want to delete "${section.name}"? This will delete all seats in this section.`, 'Yes, Delete')) return;
  try {
    await librarianAPI.deleteSection(section.id);
    showSuccess('Deleted!', 'Section has been successfully deleted.');
    await fetchSections();
  } catch (error) {
    console.error('Error deleting section:', error);
    showError('Delete Failed', 'Failed to delete section.');
  }
};

const enableSubsectionsForSection = async (section: any) => {
  subLoading.value = true;
  try {
    const updatedPayload = {
      ...section,
      has_subsections: true
    };
    await librarianAPI.updateSection(section.id, updatedPayload);
    section.has_subsections = true;
    showSuccess('Subsections Enabled!', `Subsections are now enabled for ${section.name}.`);
    await fetchSections();
    showAddSubForm.value = true;
  } catch (error: any) {
    showError('Failed', error.response?.data?.message || 'Failed to enable subsections.');
  } finally {
    subLoading.value = false;
  }
};

const toggleSubsectionDrawer = (section: any) => {
  if (activeSubsectionSectionId.value === section.id) {
    activeSubsectionSectionId.value = null;
  } else {
    activeSubsectionSectionId.value = section.id;
    resetSubForm();
    showAddSubForm.value = !!section.has_subsections && (!section.subsections || section.subsections.length === 0);
  }
};

const saveSubsection = async (sectionId: number) => {
  subLoading.value = true;
  try {
    if (isSubEditing.value && subFormRows.value[0]?.id) {
      const row = subFormRows.value[0];
      row.auto_generate_seats = true;
      await librarianAPI.updateSubsection(sectionId, row.id!, row);
      showSuccess('Updated!', 'Subsection updated successfully.');
    } else {
      for (const row of subFormRows.value) {
        if (row.name.trim()) {
          row.auto_generate_seats = true;
          await librarianAPI.createSubsection(sectionId, row);
        }
      }
      showSuccess('Created!', 'Subsections created successfully.');
    }
    await fetchSections();
    resetSubForm();
    showAddSubForm.value = false;
  } catch (error: any) {
    console.error('Error saving subsection:', error);
    showError('Save Failed', error.response?.data?.message || 'Failed to save subsection.');
  } finally {
    subLoading.value = false;
  }
};

const deleteSubsection = async (sectionId: number, id: number) => {
  if (!await showConfirm('Delete Subsection', 'Are you sure you want to delete this subsection?', 'Yes, Delete')) return;
  try {
    await librarianAPI.deleteSubsection(sectionId, id);
    showSuccess('Deleted!', 'Subsection deleted successfully.');
    await fetchSections();
  } catch (error) {
    console.error('Error deleting subsection:', error);
    showError('Delete Failed', 'Failed to delete subsection.');
  }
};

const buildQRPrintHTML = (title: string, subtitle: string, sectionBlocks: any[]) => {
  const libraryName = user.value?.library?.name || 'SmartLib Library';

  let html = `
    <html>
      <head>
        <title>${title}</title>
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;800;900&display=swap" rel="stylesheet">
        <style>
          body { font-family: 'Outfit', sans-serif; margin: 0; padding: 40px 20px; background-color: #f8fafc; }
          .no-print { text-align: right; max-width: 1200px; margin: 0 auto 20px auto; }
          .no-print button { padding: 10px 20px; background: #059669; color: white; border: none; border-radius: 8px; cursor: pointer; font-weight: bold; font-size: 13px; box-shadow: 0 4px 6px rgba(0,0,0,0.05); transition: background 0.2s; }
          .no-print button:hover { background: #047857; }
          .page-header { text-align: center; margin-bottom: 30px; border-bottom: 2px solid #e2e8f0; padding-bottom: 20px; }
          .page-header h1 { font-size: 26px; font-weight: 900; color: #0f172a; margin: 0; letter-spacing: -0.025em; }
          .page-header p { font-size: 13px; color: #64748b; margin: 6px 0 0 0; font-weight: 600; }
          
          .section-block { margin-bottom: 45px; }
          .section-title { font-size: 20px; font-weight: 900; color: #0f172a; margin-bottom: 16px; padding-left: 12px; border-left: 4px solid #059669; text-transform: uppercase; letter-spacing: 0.025em; }
          
          .sub-block { margin-bottom: 30px; page-break-inside: avoid; }
          .sub-title { font-size: 13px; font-weight: 800; color: #0369a1; margin-bottom: 14px; background: #e0f2fe; padding: 6px 14px; border-radius: 8px; display: inline-block; border: 1px solid #bae6fd; text-transform: uppercase; letter-spacing: 0.05em; }
          
          .qr-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 28px; max-width: 1100px; margin: 0 auto 20px auto; }
          .qr-card { 
            background: white; 
            border: 2px solid #e2e8f0; 
            border-radius: 20px; 
            padding: 24px 20px 20px 20px; 
            text-align: center; 
            box-shadow: 0 4px 12px rgba(0,0,0,0.03); 
            page-break-inside: avoid; 
            display: flex; 
            flex-direction: column; 
            align-items: center; 
            justify-content: space-between; 
            min-height: 430px; 
            width: 100%; 
            max-width: 310px; 
            margin: 0 auto; 
            box-sizing: border-box; 
          }
          
          .card-top { width: 100%; border-bottom: 1.5px dashed #cbd5e1; padding-bottom: 12px; margin-bottom: 14px; text-align: center; display: flex; flex-direction: column; align-items: center; gap: 6px; }
          .top-library-name { font-size: 15px; font-weight: 900; color: #059669; text-transform: uppercase; letter-spacing: 0.08em; margin: 0; }
          
          .academic-badge { display: inline-block; padding: 4px 12px; font-size: 11px; font-weight: 800; border-radius: 9999px; letter-spacing: 0.08em; text-transform: uppercase; }
          .badge-prc { background: #dbeafe; color: #1e40af; border: 1px solid #93c5fd; }
          .badge-caf { background: #f3e8ff; color: #6b21a8; border: 1px solid #d8b4fe; }
          .badge-final { background: #fef3c7; color: #92400e; border: 1px solid #fde68a; }
          .badge-all { background: #f1f5f9; color: #475569; border: 1px solid #cbd5e1; }

          .qr-wrapper { background: #f8fafc; border: 1px solid #f1f5f9; border-radius: 14px; padding: 14px; display: inline-block; }
          .qr-image { width: 150px; height: 150px; object-fit: contain; display: block; }
          
          .seat-badge { font-size: 22px; font-weight: 900; color: #0f172a; margin: 12px 0 0 0; letter-spacing: -0.025em; text-transform: uppercase; }
          .meta-info { font-size: 11px; font-weight: 700; color: #64748b; margin: 4px 0 0 0; text-transform: uppercase; letter-spacing: 0.05em; }
          .scan-footer { font-size: 9px; font-weight: 700; text-transform: uppercase; color: #94a3b8; letter-spacing: 0.08em; margin-top: 14px; border-top: 1px solid #f1f5f9; padding-top: 8px; width: 100%; }
          
          @media print {
            .no-print { display: none; }
            body { background: white; padding: 0; }
            .qr-grid { grid-template-columns: repeat(3, 1fr); gap: 20px; }
            .qr-card { box-shadow: none; border: 2px solid #94a3b8; }
            .section-block { page-break-after: always; }
          }
        </style>
      </head>
      <body>
        <div class="no-print">
          <button onclick="window.print()">Print QR Codes</button>
        </div>
        <div class="page-header">
          <h1>${title}</h1>
          <p>${subtitle}</p>
        </div>
  `;

  sectionBlocks.forEach(sec => {
    html += `<div class="section-block">`;
    html += `<div class="section-title">${sec.name} ${sec.floorName ? `(${sec.floorName})` : ''}</div>`;

    // Build subsection map lookup
    const subMap = new Map<number, any>();
    if (sec.subsections && Array.isArray(sec.subsections)) {
      sec.subsections.forEach((sub: any) => subMap.set(sub.id, sub));
    }

    // Group seats by subsection
    const subGroups: Record<string, any[]> = {};
    (sec.seats || []).forEach((seat: any) => {
      const subId = seat.seat_subsection_id || seat.subsection_id || seat.seat_subsection?.id;
      const subObj = seat.seat_subsection || seat.subsection || (subId ? subMap.get(subId) : null);
      if (subObj && !seat.seat_subsection) {
        seat.seat_subsection = subObj;
      }
      const subName = subObj?.name || subObj?.code || null;
      const key = subName ? `${subName} Subsection` : `${sec.name} (General Seats)`;
      if (!subGroups[key]) subGroups[key] = [];
      subGroups[key].push(seat);
    });

    Object.keys(subGroups).forEach(subKey => {
      const seats = subGroups[subKey];
      html += `
        <div class="sub-block">
          <div class="sub-title">${subKey} (${seats.length} Seats)</div>
          <div class="qr-grid">
      `;

      seats.forEach((seat: any) => {
        const qrUrl = seat.qr_code_url || `/storage/qrcodes/seats/seat-${seat.id}.svg`;
        const displaySeatName = seat.seat_type === 'private_room' 
          ? `CABIN ${seat.cabin_number || seat.seat_number}` 
          : seat.seat_number;

        // Academic Level Determination
        const subObj = seat.seat_subsection || seat.subsection || null;
        const rawLevel = String(seat.academic_level || subObj?.academic_level || (subObj ? null : sec.academic_level) || 'all').toUpperCase();
        let levelClass = 'badge-all';
        let levelLabel = 'ALL LEVELS';

        if (rawLevel.includes('PRC')) {
          levelClass = 'badge-prc';
          levelLabel = 'PRC';
        } else if (rawLevel.includes('CAF')) {
          levelClass = 'badge-caf';
          levelLabel = 'CAF';
        } else if (rawLevel.includes('FINAL')) {
          levelClass = 'badge-final';
          levelLabel = 'FINAL';
        }

        html += `
          <div class="qr-card">
            <div class="card-top">
              <div class="top-library-name">${libraryName}</div>
              <div class="academic-badge ${levelClass}">${levelLabel}</div>
            </div>
            <div class="qr-wrapper">
              <img src="${qrUrl}" class="qr-image" onerror="this.src='https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(seat.qr_code || seat.seat_number)}'" />
            </div>
            <div>
              <div class="seat-badge">${displaySeatName}</div>
              <div class="meta-info">${sec.name} &bull; ${sec.floorName || ''}</div>
            </div>
            <div class="scan-footer">Scan to Check-In / Check-Out</div>
          </div>
        `;
      });

      html += `
          </div>
        </div>
      `;
    });

    html += `</div>`;
  });

  html += `
      </body>
    </html>
  `;

  return html;
};

const printSectionQRs = (section: any) => {
  const printWindow = window.open('', '_blank');
  if (!printWindow) return;

  const libraryName = user.value?.library?.name || 'SmartLib Library';
  const html = buildQRPrintHTML(
    `Section QR Codes - ${section.name}`,
    `${libraryName} • Floor: ${section.floor?.name || 'N/A'}`,
    [{
      name: section.name,
      floorName: section.floor?.name || 'N/A',
      seats: section.seats || []
    }]
  );

  printWindow.document.write(html);
  printWindow.document.close();
};

const printAllQRs = () => {
  const printWindow = window.open('', '_blank');
  if (!printWindow) return;

  const libraryName = user.value?.library?.name || 'SmartLib Library';
  const blocks = sections.value.map(sec => ({
    name: sec.name,
    floorName: sec.floor?.name || 'N/A',
    seats: sec.seats || []
  }));

  const html = buildQRPrintHTML(
    'Library Seat QR Codes (Bulk Export)',
    `${libraryName} • All Sections & Subsections`,
    blocks
  );

  printWindow.document.write(html);
  printWindow.document.close();
};

onMounted(() => {
  fetchFloors();
  fetchSections();
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap');

.font-outfit {
  font-family: 'Outfit', sans-serif;
}
</style>
