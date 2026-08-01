<template>
  <div v-if="isOpen" class="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50" @click.self="$emit('close')">
    <div class="bg-white rounded-xl shadow-xl max-w-5xl w-full mx-4 overflow-hidden max-h-[92vh] flex flex-col border border-gray-200 animate-in fade-in zoom-in duration-200 font-outfit text-slate-700">
      
      <!-- Modal Header (Sleek Green Gradient) -->
      <div class="px-6 py-5 bg-gradient-to-r from-emerald-800 via-emerald-700 to-teal-800 text-white flex items-center justify-between text-left">
        <div class="flex items-center space-x-3">
          <div class="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
            <Layers class="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 class="text-base font-bold text-white tracking-wide">Sections & Subsections for {{ floor?.name }}</h3>
            <p class="text-[11px] text-emerald-100/80 font-medium">Manage seating zones, subsections, and layout rules</p>
          </div>
        </div>
        <button @click="$emit('close')" class="p-2 hover:bg-white/10 rounded-xl transition-colors cursor-pointer text-white/80 hover:text-white">
          <X class="w-5 h-5" />
        </button>
      </div>

      <div class="p-6 overflow-y-auto space-y-6 flex-1 text-left">
        <!-- Add/Edit Section Form Container -->
        <div class="bg-slate-50/50 rounded-xl p-5 border border-slate-100">
          <h4 class="text-xs font-bold text-slate-700 uppercase tracking-wider mb-4">{{ isEditing ? 'Edit Section Settings' : 'Add New Section to Floor' }}</h4>
          <form @submit.prevent="saveSection" class="space-y-4">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label class="block text-[10px] font-semibold text-slate-400 mb-1.5 uppercase tracking-wider">Section Name</label>
                <input
                  v-model="form.name"
                  type="text"
                  required
                  class="w-full px-3 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-400 transition-all text-xs text-slate-700 font-medium bg-white"
                  placeholder="e.g. Boys Section"
                />
              </div>
              <div>
                <label class="block text-[10px] font-semibold text-slate-400 mb-1.5 uppercase tracking-wider">Total Seats</label>
                <input
                  v-model.number="form.total_seats"
                  type="number"
                  required
                  :disabled="isEditing"
                  class="w-full px-3 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-400 transition-all text-xs text-slate-700 font-medium bg-white disabled:bg-slate-100/50 disabled:text-slate-400"
                  placeholder="e.g. 50"
                />
              </div>
              <div>
                <label class="block text-[10px] font-semibold text-slate-400 mb-1.5 uppercase tracking-wider">Gender Restriction</label>
                <select
                  v-model="form.gender"
                  required
                  class="w-full px-3 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-400 transition-all text-xs text-slate-700 font-semibold bg-white cursor-pointer"
                >
                  <option value="mixed">Mixed (All)</option>
                  <option value="male">Male Only</option>
                  <option value="female">Female Only</option>
                </select>
              </div>
              <div>
                <label class="block text-[10px] font-semibold text-slate-400 mb-1.5 uppercase tracking-wider">Academic Level</label>
                <select
                  v-model="form.academic_level"
                  required
                  class="w-full px-3 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-400 transition-all text-xs text-slate-700 font-semibold bg-white cursor-pointer"
                >
                  <option value="all">Available for All</option>
                  <option value="PRC">PRC Students Only</option>
                  <option value="CAF">CAF Students Only</option>
                  <option value="Final">Final Year Students Only</option>
                </select>
              </div>
            </div>

            <div>
              <label class="block text-[10px] font-semibold text-slate-400 mb-1.5 uppercase tracking-wider">Description (Optional)</label>
              <input
                v-model="form.description"
                type="text"
                class="w-full px-3 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-400 transition-all text-xs text-slate-700 font-medium bg-white"
                placeholder="e.g. Ground Floor Boys Study Area"
              />
            </div>

            <div class="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-slate-100">
              <div class="flex items-center space-x-4">
                <label class="flex items-center space-x-2 cursor-pointer select-none">
                  <input
                    v-model="form.is_active"
                    type="checkbox"
                    class="rounded text-emerald-600 focus:ring-emerald-500 cursor-pointer"
                  />
                  <span class="text-xs font-bold text-slate-600">Mark Active</span>
                </label>

                <label class="flex items-center space-x-2 cursor-pointer select-none">
                  <input
                    v-model="form.has_subsections"
                    type="checkbox"
                    class="rounded text-blue-600 focus:ring-blue-500 cursor-pointer"
                  />
                  <span class="text-xs font-bold text-blue-700">Enable Subsections</span>
                </label>
              </div>
              
              <div class="flex items-center space-x-2">
                <button
                  type="button"
                  v-if="isEditing"
                  @click="resetForm"
                  class="px-4 py-2 border border-slate-200 text-slate-500 font-bold rounded-xl hover:bg-slate-50 transition-all text-xs cursor-pointer"
                >
                  Cancel Edit
                </button>
                <button
                  type="submit"
                  :disabled="loading"
                  class="px-5 py-2 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl transition-all disabled:opacity-50 text-xs font-bold cursor-pointer"
                >
                  {{ loading ? 'Saving...' : (isEditing ? 'Update Section' : 'Add Section') }}
                </button>
              </div>
            </div>
          </form>
        </div>

        <!-- Sections Table List -->
        <div class="overflow-x-auto border border-slate-100 rounded-xl">
          <table class="min-w-full divide-y divide-slate-100 text-xs">
            <thead>
              <tr class="bg-slate-50/50 text-slate-400 font-bold uppercase tracking-wider border-b border-slate-100">
                <th class="px-4 py-3 text-left font-semibold">Name Details</th>
                <th class="px-4 py-3 text-left font-semibold">Capacity</th>
                <th class="px-4 py-3 text-left font-semibold">Gender / Level</th>
                <th class="px-4 py-3 text-left font-semibold">Subsections</th>
                <th class="px-4 py-3 text-left font-semibold">Status</th>
                <th class="px-4 py-3 text-right font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-50">
              <template v-for="section in sections" :key="section.id">
                <tr class="hover:bg-slate-50/50 transition-colors">
                  <td class="px-4 py-3">
                    <div class="font-bold text-slate-800">{{ section.name }}</div>
                    <div class="text-[10px] text-slate-400 font-medium mt-0.5">{{ section.description || 'No description provided' }}</div>
                  </td>
                  <td class="px-4 py-3">
                    <div class="font-bold text-slate-600">{{ section.total_seats }} total</div>
                    <div class="text-[10px] text-green-600 font-bold mt-0.5">{{ section.available_seats }} available</div>
                  </td>
                  <td class="px-4 py-3 space-y-1">
                    <span
                      :class="[
                        'px-2 py-0.5 rounded text-[9px] font-bold uppercase border inline-block mr-1',
                        section.gender === 'male' ? 'bg-blue-50 border-blue-100 text-blue-700' : 
                        section.gender === 'female' ? 'bg-pink-50 border-pink-100 text-pink-700' : 
                        'bg-emerald-50 border-emerald-100 text-emerald-700'
                      ]"
                    >
                      {{ section.gender || 'mixed' }}
                    </span>
                    <span
                      :class="[
                        'px-2 py-0.5 rounded text-[9px] font-bold uppercase border inline-block',
                        section.academic_level === 'PRC' ? 'bg-amber-50 border-amber-100 text-amber-700' :
                        section.academic_level === 'CAF' ? 'bg-cyan-50 border-cyan-100 text-cyan-700' :
                        section.academic_level === 'Final' ? 'bg-purple-50 border-purple-100 text-purple-700' :
                        'bg-slate-50 border-slate-200 text-slate-600'
                      ]"
                    >
                      {{ section.academic_level === 'all' || !section.academic_level ? 'All Levels' : section.academic_level }}
                    </span>
                  </td>

                  <!-- Subsections Info & Action -->
                  <td class="px-4 py-3">
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
                        {{ section.subsections?.length ? `${section.subsections.length} Subsections` : (section.has_subsections ? '+ Add Subsections' : 'Disabled') }}
                      </span>
                    </button>
                  </td>

                  <td class="px-4 py-3">
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

                  <td class="px-4 py-3 text-right">
                    <div class="flex items-center justify-end space-x-2">
                      <button 
                        @click="editSection(section)" 
                        class="px-2.5 py-1.5 text-emerald-700 bg-emerald-50 hover:bg-emerald-100 rounded-lg font-bold border border-emerald-100 cursor-pointer"
                      >
                        Edit
                      </button>
                      <button 
                        @click="deleteSection(section.id)" 
                        class="px-2.5 py-1.5 text-red-600 bg-red-50 hover:bg-red-100 rounded-lg font-bold border border-red-100 cursor-pointer"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>

                <!-- Nested Subsections Drawer Row -->
                <tr v-if="activeSubsectionSectionId === section.id" class="bg-blue-50/30 border-t border-b border-blue-100">
                  <td colspan="6" class="p-4">
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
                            <p class="text-[11px] text-slate-400 font-medium">Divide section capacity into specific subsections</p>
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
              <tr v-if="sections.length === 0">
                <td colspan="6" class="px-4 py-8 text-center text-slate-400 font-bold uppercase tracking-wider text-[10px]">
                  No sections found for this floor layout.
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
import { ref, watch } from 'vue';
import { X, Layers, Plus, AlertTriangle } from 'lucide-vue-next';
import { librarianAPI } from '@/shared/services/api';
import { useSwal } from '@/shared/composables/useSwal';

const { showConfirm, showSuccess, showError } = useSwal();

const props = defineProps<{
  isOpen: boolean;
  floor: any;
}>();

const emit = defineEmits(['close', 'updated']);

const sections = ref<any[]>([]);
const loading = ref(false);
const isEditing = ref(false);

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

const autoDistributeSubSeats = (section: any) => {
  if (!section) return;
  const allocated = isSubEditing.value ? 0 : getAllocatedSubSeats(section);
  const unallocated = Math.max(0, section.total_seats - allocated);
  const numRows = subFormRows.value.length;
  if (numRows === 0 || unallocated === 0) return;

  const baseCount = Math.floor(unallocated / numRows);
  let remainder = unallocated % numRows;

  subFormRows.value.forEach((row) => {
    row.total_seats = baseCount + (remainder > 0 ? 1 : 0);
    if (remainder > 0) remainder--;
  });
};

const fetchSections = async () => {
  if (!props.floor) return;
  try {
    const data = await librarianAPI.getSections(props.floor.id);
    sections.value = data;
  } catch (error) {
    console.error('Error fetching sections:', error);
  }
};

const resetForm = () => {
  form.value = {
    id: null,
    name: '',
    gender: 'mixed',
    academic_level: 'all',
    total_seats: 0,
    description: '',
    has_subsections: false,
    is_active: true
  };
  isEditing.value = false;
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

const editSection = (section: any) => {
  isEditing.value = true;
  form.value = {
    id: section.id,
    name: section.name,
    gender: section.gender || 'mixed',
    academic_level: section.academic_level || 'all',
    total_seats: section.total_seats,
    description: section.description || '',
    has_subsections: !!section.has_subsections,
    is_active: section.is_active
  };
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

const saveSection = async () => {
  loading.value = true;
  try {
    const payload = {
      ...form.value,
      floor_id: props.floor.id
    };

    if (isEditing.value && form.value.id) {
      await librarianAPI.updateSection(form.value.id, payload);
      showSuccess('Updated!', 'Section updated successfully.');
    } else {
      await librarianAPI.createSection(payload);
      showSuccess('Created!', 'New section added successfully.');
    }
    await fetchSections();
    resetForm();
    emit('updated');
  } catch (error: any) {
    console.error('Error saving section:', error);
    const message = error.response?.data?.message || 'Failed to save section.';
    showError('Save Failed', message);
  } finally {
    loading.value = false;
  }
};

const deleteSection = async (id: number) => {
  if (!await showConfirm('Delete Section', 'Are you sure you want to delete this section? This will delete all seats in this section.', 'Yes, Delete')) return;
  try {
    await librarianAPI.deleteSection(id);
    showSuccess('Deleted!', 'Section has been successfully deleted.');
    await fetchSections();
    emit('updated');
  } catch (error) {
    console.error('Error deleting section:', error);
    showError('Delete Failed', 'Failed to delete section.');
  }
};

const enableSubsectionsForSection = async (section: any) => {
  subLoading.value = true;
  try {
    const payload = {
      ...section,
      has_subsections: true
    };
    await librarianAPI.updateSection(section.id, payload);
    section.has_subsections = true;
    showSuccess('Subsections Enabled!', `Subsections are now enabled for ${section.name}.`);
    await fetchSections();
    showAddSubForm.value = true;
    emit('updated');
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
    emit('updated');
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
    emit('updated');
  } catch (error) {
    console.error('Error deleting subsection:', error);
    showError('Delete Failed', 'Failed to delete subsection.');
  }
};

watch(() => props.isOpen, (newVal) => {
  if (newVal) {
    fetchSections();
    resetForm();
    activeSubsectionSectionId.value = null;
  }
});

defineExpose({
  autoDistributeSubSeats
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap');

.font-outfit {
  font-family: 'Outfit', sans-serif;
}
</style>
