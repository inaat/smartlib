<template>
  <div class="p-6 space-y-6 font-outfit">
    <!-- Header Controls -->
    <div class="flex justify-end items-center mb-6">
      <div class="flex items-center space-x-3">
        <button @click="exportStudents" class="px-4 py-2 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors flex items-center space-x-2 text-xs font-bold text-slate-550 cursor-pointer shadow-sm">
          <Download class="w-4 h-4 text-slate-455" />
          <span>Export</span>
        </button>
        <button @click="openAddModal" class="px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl transition-colors flex items-center space-x-2 text-xs font-bold shadow-sm cursor-pointer">
          <UserPlus class="w-4 h-4" />
          <span>Add Student</span>
        </button>
      </div>
    </div>

    <!-- Stats Cards -->
    <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
      <div v-for="stat in statsConfig" :key="stat.key" class="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex items-center justify-between">
        <div class="text-left">
          <p class="text-xs font-bold text-slate-400 uppercase tracking-widest">{{ stat.label }}</p>
          <h3 class="text-2xl font-black text-slate-800 mt-1.5">{{ stats[stat.key as keyof typeof stats] }}</h3>
        </div>
        <div :class="['p-3.5 rounded-xl', stat.bgClass]">
          <component :is="stat.icon" :class="['w-5 h-5', stat.iconClass]" />
        </div>
      </div>
    </div>

    <!-- Search and Filters -->
    <div class="bg-white rounded-2xl shadow-sm border border-slate-100 p-4">
      <div class="flex flex-col md:flex-row items-center gap-4">
        <div class="relative flex-1 w-full">
          <Search class="absolute left-3.5 top-1/2 transform -translate-y-1/2 w-4.5 h-4.5 text-slate-400" />
          <input
            type="text"
            v-model="searchQuery"
            placeholder="Search by name, ID, or email..."
            class="w-full pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-xs font-semibold text-slate-655 focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none placeholder-slate-400"
          />
        </div>
        <select
          v-model="statusFilter"
          class="w-full md:w-48 px-4 py-2 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-655 focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none cursor-pointer"
        >
          <option value="all">All Status</option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
        <select
          v-model="levelFilter"
          class="w-full md:w-48 px-4 py-2 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-655 focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none cursor-pointer"
        >
          <option value="all">All Levels</option>
          <option value="PRC">PRC</option>
          <option value="CAF">CAF</option>
          <option value="Final">Final</option>
        </select>
      </div>
    </div>

    <!-- Students Table List -->
    <div v-if="loading" class="flex justify-center py-12">
      <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600"></div>
    </div>
    <div v-else-if="filteredStudents.length === 0" class="text-center py-12 bg-white rounded-2xl border border-dashed border-slate-200">
      <Users class="w-12 h-12 text-slate-300 mx-auto mb-4" />
      <p class="text-xs font-bold text-slate-455 uppercase tracking-widest">No students found matching your criteria.</p>
    </div>
    <div v-else class="bg-white rounded-2xl shadow-sm border border-slate-100/80 overflow-hidden">
      <div class="overflow-x-auto">
        <table class="min-w-full divide-y divide-gray-100">
          <thead class="bg-gray-50/50">
            <tr>
              <th scope="col" class="px-6 py-4 text-left text-xs font-semibold text-slate-400 uppercase tracking-widest">Student</th>
              <th scope="col" class="px-6 py-4 text-left text-xs font-semibold text-slate-400 uppercase tracking-widest">Contact Info</th>
              <th scope="col" class="px-6 py-4 text-left text-xs font-semibold text-slate-400 uppercase tracking-widest">Level</th>
              <th scope="col" class="px-6 py-4 text-left text-xs font-semibold text-slate-400 uppercase tracking-widest">Status</th>
              <th scope="col" class="px-6 py-4 text-right text-xs font-semibold text-slate-400 uppercase tracking-widest">Action</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-100 bg-white">
            <tr 
              v-for="student in filteredStudents" 
              :key="student.id"
              class="hover:bg-slate-50/50 transition-colors"
            >
              <!-- Student Profile Image & Name -->
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex items-center space-x-3.5">
                  <div class="w-10 h-10 rounded-lg overflow-hidden flex-shrink-0 flex items-center justify-center shadow-sm">
                    <img 
                      v-if="student.profile_picture" 
                      :src="getProfilePictureUrl(student.profile_picture)" 
                      class="w-full h-full object-cover rounded-lg" 
                    />
                    <div v-else class="w-full h-full flex items-center justify-center bg-emerald-50 border border-emerald-600 rounded-lg text-emerald-600 font-bold text-sm">
                      {{ student.name.charAt(0).toUpperCase() }}
                    </div>
                  </div>
                  <div class="text-left">
                    <div class="text-sm font-medium text-slate-700">{{ student.name }}</div>
                    <div class="text-[10px] text-slate-400 font-semibold tracking-wide mt-0.5 uppercase">ID: {{ student.crn || 'N/A' }}</div>
                  </div>
                </div>
              </td>

              <!-- Contact Info -->
              <td class="px-6 py-4 whitespace-nowrap text-left">
                <div class="text-xs font-normal text-slate-555 flex items-center">
                  <Mail class="w-3.5 h-3.5 mr-1.5 text-slate-400" />
                  {{ student.email }}
                </div>
                <div class="text-xs font-normal text-slate-555 flex items-center mt-1">
                  <Phone class="w-3.5 h-3.5 mr-1.5 text-slate-400" />
                  {{ student.phone || 'N/A' }}
                </div>
              </td>

              <!-- Level -->
              <td class="px-6 py-4 whitespace-nowrap text-left text-xs font-semibold text-slate-600">
                {{ student.ca_level || 'N/A' }}
              </td>

              <!-- Status Badge -->
              <td class="px-6 py-4 whitespace-nowrap text-left">
                <span :class="[
                  'text-[9px] font-semibold px-2.5 py-1 rounded-full uppercase tracking-wider border',
                  student.is_banned 
                    ? 'bg-red-50 border-red-100 text-red-700' 
                    : (student.is_active ? 'bg-green-50 border-green-100 text-green-700' : 'bg-slate-50 border-slate-200 text-slate-500')
                ]">
                  {{ student.is_banned ? 'Banned' : (student.is_active ? 'Active' : 'Inactive') }}
                </span>
              </td>

              <!-- Actions -->
              <td class="px-6 py-4 whitespace-nowrap text-right">
                <div class="flex items-center justify-end space-x-2">
                  <button 
                    @click="$router.push({ name: 'librarian-student-details', params: { id: student.id } })" 
                    class="p-2 bg-white border border-gray-200 hover:bg-slate-50 rounded-lg text-emerald-700 hover:text-emerald-800 transition-all cursor-pointer shadow-sm"
                    title="View Profile Details"
                  >
                    <Eye class="w-4 h-4" />
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Student Modal -->
    <div v-if="showModal" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div class="bg-white rounded-3xl shadow-xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in duration-200 border border-slate-100">
        <div class="p-6 border-b border-slate-100 flex items-center justify-between text-left">
          <h2 class="text-lg font-bold text-slate-800">{{ isEditing ? 'Edit Student' : 'Add New Student' }}</h2>
          <button @click="showModal = false" class="p-2 hover:bg-slate-50 rounded-xl transition-colors cursor-pointer">
            <X class="w-5 h-5 text-slate-450" />
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
          <div v-if="!isEditing || changePassword">
            <label class="block text-xs font-bold text-slate-500 mb-1.5 uppercase tracking-wider">Password</label>
            <input
              v-model="form.password"
              type="password"
              :required="!isEditing"
              class="w-full px-4 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none text-xs font-semibold text-slate-655 bg-white"
              placeholder="••••••••"
            />
          </div>
          <div v-if="isEditing" class="flex items-center space-x-2 pt-1">
            <input type="checkbox" v-model="changePassword" id="changePwd" class="rounded text-emerald-655 focus:ring-emerald-500 cursor-pointer" />
            <label for="changePwd" class="text-xs font-bold text-slate-550 cursor-pointer">Change Password</label>
          </div>
          <div v-if="isEditing" class="flex items-center space-x-2">
            <input type="checkbox" v-model="form.is_active" id="isActive" class="rounded text-emerald-655 focus:ring-emerald-500 cursor-pointer" />
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
              <span v-else>{{ isEditing ? 'Update Student' : 'Create Student' }}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import Swal from 'sweetalert2';
import { jsPDF } from 'jspdf';
import {
  Users,
  UserCheck,
  Clock,
  TrendingUp,
  Download,
  UserPlus,
  Search,
  Mail,
  Phone,
  X,
  Eye
} from 'lucide-vue-next';
import { librarianAPI } from '@/shared/services/api';

const loading = ref(true);
const saving = ref(false);
const searchQuery = ref('');
const statusFilter = ref('all');
const levelFilter = ref('all');
const showModal = ref(false);
const isEditing = ref(false);
const changePassword = ref(false);
const currentStudentId = ref<number | null>(null);

const stats = ref({
  total: 0,
  activeToday: 0,
  pending: 0,
  newThisMonth: 0
});

const statsConfig = [
  { key: 'total', label: 'Total Students', icon: Users, bgClass: 'bg-blue-105/50', iconClass: 'text-blue-600' },
  { key: 'activeToday', label: 'Active Today', icon: UserCheck, bgClass: 'bg-green-150/40', iconClass: 'text-green-600' },
  { key: 'pending', label: 'Pending Approval', icon: Clock, bgClass: 'bg-orange-100/50', iconClass: 'text-orange-600' },
  { key: 'newThisMonth', label: 'New This Month', icon: TrendingUp, bgClass: 'bg-emerald-100/50', iconClass: 'text-emerald-600' }
];

const students = ref<any[]>([]);

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

import { useSwal } from '@/shared/composables/useSwal';
const { showSuccess, showError, showWarning } = useSwal();

const fetchStudents = async () => {
  try {
    loading.value = true;
    const [studentsData, statsData] = await Promise.all([
      librarianAPI.getStudents(),
      librarianAPI.getStudentStats()
    ]);
    students.value = studentsData;
    stats.value = statsData;
  } catch (error) {
    console.error('Error fetching students:', error);
    showError('Load Failed', 'Failed to load students');
  } finally {
    loading.value = false;
  }
};

onMounted(fetchStudents);

const filteredStudents = computed(() => {
  let filtered = students.value;

  if (statusFilter.value !== 'all') {
    const isActive = statusFilter.value === 'active';
    filtered = filtered.filter(s => s.is_active === isActive);
  }

  if (levelFilter.value !== 'all') {
    filtered = filtered.filter(s => s.ca_level === levelFilter.value);
  }

  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase();
    filtered = filtered.filter(s =>
      s.name.toLowerCase().includes(query) ||
      (s.crn && s.crn.toLowerCase().includes(query)) ||
      s.email.toLowerCase().includes(query)
    );
  }

  return filtered;
});

const openAddModal = () => {
  isEditing.value = false;
  currentStudentId.value = null;
  form.value = {
    name: '',
    email: '',
    phone: '',
    crn: '',
    gender: '',
    ca_level: '',
    password: '',
    is_active: true
  };
  showModal.value = true;
};

const saveStudent = async () => {
  try {
    saving.value = true;
    const payload: any = { ...form.value };
    if (isEditing.value && !changePassword.value) {
      delete payload.password;
    }

    if (isEditing.value && currentStudentId.value) {
      await librarianAPI.updateStudent(currentStudentId.value, payload);
      showSuccess('Updated!', 'Student updated successfully');
    } else {
      await librarianAPI.createStudent(payload);
      showSuccess('Created!', 'Student created successfully');
    }
    showModal.value = false;
    fetchStudents();
  } catch (error: any) {
    console.error('Error saving student:', error);
    const message = error.response?.data?.message || 'Failed to save student';
    showError('Save Failed', message);
  } finally {
    saving.value = false;
  }
};

const exportToCSV = () => {
  // Construct CSV headers
  const headers = ['Name', 'Email', 'Phone', 'Student ID (CRN)', 'CA Level', 'Status'];
  
  // Construct CSV rows
  const rows = filteredStudents.value.map(student => [
    `"${(student.name || '').replace(/"/g, '""')}"`,
    `"${(student.email || '').replace(/"/g, '""')}"`,
    `"${(student.phone || 'N/A').replace(/"/g, '""')}"`,
    `"${(student.crn || 'N/A').replace(/"/g, '""')}"`,
    `"${(student.ca_level || 'N/A').replace(/"/g, '""')}"`,
    `"${student.is_banned ? 'Banned' : (student.is_active ? 'Active' : 'Inactive')}"`
  ]);

  // Combine headers and rows
  const csvContent = [headers.join(','), ...rows.map(row => row.join(','))].join('\n');
  
  // Create download link
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.setAttribute('href', url);
  
  const dateStr = new Date().toISOString().split('T')[0];
  link.setAttribute('download', `students_export_${dateStr}.csv`);
  link.style.visibility = 'hidden';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  
  showSuccess('Exported!', 'Students list has been exported to CSV successfully.');
};

const exportToPDF = () => {
  const doc = new jsPDF();
  
  // Title / Header
  doc.setFont("helvetica", "bold");
  doc.setFontSize(18);
  doc.setTextColor(4, 120, 87); // Emerald 700
  doc.text("Students Directory List", 14, 20);
  
  // Document metadata info
  doc.setFontSize(9);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(100);
  const dateStr = new Date().toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
  doc.text(`Generated on: ${dateStr}`, 14, 27);
  doc.text(`Total Records: ${filteredStudents.value.length}`, 14, 32);
  
  // Draw a dividing line
  doc.setDrawColor(226, 232, 240); // slate-200
  doc.line(14, 36, 196, 36);
  
  // Table Headers
  doc.setFont("helvetica", "bold");
  doc.setFontSize(9);
  doc.setTextColor(71, 85, 105); // slate-600
  doc.text("Student Name", 16, 43);
  doc.text("Email", 65, 43);
  doc.text("CRN (ID)", 115, 43);
  doc.text("CA Level", 145, 43);
  doc.text("Status", 175, 43);
  
  doc.line(14, 46, 196, 46);
  
  // Table Rows
  doc.setFont("helvetica", "normal");
  doc.setTextColor(51, 65, 85); // slate-700
  
  let y = 52;
  const pageHeight = doc.internal.pageSize.height;
  
  filteredStudents.value.forEach((student: any, index: number) => {
    // Check page overflow
    if (y > pageHeight - 20) {
      doc.addPage();
      y = 20;
      
      // Reprint headers on new page
      doc.setFont("helvetica", "bold");
      doc.setFontSize(9);
      doc.setTextColor(71, 85, 105);
      doc.text("Student Name", 16, y);
      doc.text("Email", 65, y);
      doc.text("CRN (ID)", 115, y);
      doc.text("CA Level", 145, y);
      doc.text("Status", 175, y);
      doc.line(14, y + 3, 196, y + 3);
      
      doc.setFont("helvetica", "normal");
      doc.setTextColor(51, 65, 85);
      y += 9;
    }
    
    const name = student.name || 'N/A';
    const email = student.email || 'N/A';
    const crn = student.crn || 'N/A';
    const caLevel = student.ca_level || 'N/A';
    const status = student.is_banned ? 'Banned' : (student.is_active ? 'Active' : 'Inactive');
    
    // Draw row background for alternating colors
    if (index % 2 === 1) {
      doc.setFillColor(248, 250, 252); // slate-50
      doc.rect(14, y - 4, 182, 6, "F");
    }
    
    // Render text
    doc.text(name, 16, y);
    doc.text(email, 65, y);
    doc.text(crn, 115, y);
    doc.text(caLevel, 145, y);
    doc.text(status, 175, y);
    
    y += 7;
  });
  
  const fileDate = new Date().toISOString().split('T')[0];
  doc.save(`students_export_${fileDate}.pdf`);
  showSuccess('Exported!', 'Students list has been exported to PDF successfully.');
};

const exportStudents = async () => {
  if (filteredStudents.value.length === 0) {
    showWarning('No Data', 'There are no student records to export.');
    return;
  }

  const result = await Swal.fire({
    title: 'Export Students List',
    text: 'Select your preferred export format:',
    icon: 'question',
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: 'Excel (CSV)',
    denyButtonText: 'PDF Document',
    cancelButtonText: 'Cancel',
    confirmButtonColor: '#047857', // emerald-700
    denyButtonColor: '#2563eb', // blue-600
    cancelButtonColor: '#64748b' // slate-500
  });

  if (result.isConfirmed) {
    exportToCSV();
  } else if (result.isDenied) {
    exportToPDF();
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
.text-slate-850 {
  color: #1e293b;
}
.text-slate-550 {
  color: #64748b;
}
.text-slate-455 {
  color: #475569;
}
.text-slate-505 {
  color: #334155;
}
.bg-red-55\/60 {
  background-color: rgba(254, 242, 242, 0.6);
}
.border-red-150 {
  border-color: rgba(239, 68, 68, 0.2);
}
.border-green-150 {
  border-color: rgba(34, 197, 94, 0.2);
}
.border-orange-150 {
  border-color: rgba(249, 115, 22, 0.2);
}
.bg-blue-105\/50 {
  background-color: rgba(219, 234, 254, 0.5);
}
</style>
