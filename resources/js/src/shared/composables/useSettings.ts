import { ref } from 'vue';
import axios from 'axios';

const appName = ref('Smart Lib');
const appLogo = ref<string | null>(null);
const siteDescription = ref('Intelligent library management platform for seat booking, inventory, and analytics.');
const contactEmail = ref('support@smartlib.com');
const contactPhone = ref('+92 300 1234567');
const maintenanceMode = ref(false);
const allowUserRegistration = ref(true);
const requireStudentApproval = ref(false);
const enforceStrongPasswords = ref(true);
const allowDigitalBookDownloads = ref(true);
const maxBooksPerStudent = ref(3);
const maxBookReservationDays = ref(14);
const maxCheckinTimeMinutes = ref(15);
const allowSeatExtensions = ref(true);
const maxExtensionMinutes = ref(60);
const queueHoldMinutes = ref(10);
const overstayPenaltyEnabled = ref(true);

export function useSettings() {
    const setMaintenanceMode = (val: boolean) => {
        maintenanceMode.value = val;
    };

    const fetchPublicSettings = async () => {
        try {
            const response = await axios.get('/api/settings/public');
            if (response.data) {
                if (response.data.site_name || response.data.app_name) {
                    appName.value = response.data.site_name || response.data.app_name;
                }
                if (response.data.site_description !== undefined && response.data.site_description !== null) {
                    siteDescription.value = response.data.site_description;
                }
                if (response.data.contact_email !== undefined && response.data.contact_email !== null) {
                    contactEmail.value = response.data.contact_email;
                }
                if (response.data.contact_phone !== undefined && response.data.contact_phone !== null) {
                    contactPhone.value = response.data.contact_phone;
                }
                if (response.data.app_logo !== undefined && response.data.app_logo !== null) {
                    appLogo.value = response.data.app_logo;
                }
                if (response.data.maintenance_mode !== undefined) {
                    maintenanceMode.value = response.data.maintenance_mode === true || response.data.maintenance_mode === 'true' || response.data.maintenance_mode === 1 || response.data.maintenance_mode === '1';
                }
                if (response.data.allow_user_registration !== undefined) {
                    allowUserRegistration.value = response.data.allow_user_registration === true || response.data.allow_user_registration === 'true' || response.data.allow_user_registration === 1 || response.data.allow_user_registration === '1';
                }
                if (response.data.require_student_approval !== undefined) {
                    requireStudentApproval.value = response.data.require_student_approval === true || response.data.require_student_approval === 'true' || response.data.require_student_approval === 1 || response.data.require_student_approval === '1';
                }
                if (response.data.enforce_strong_passwords !== undefined) {
                    enforceStrongPasswords.value = response.data.enforce_strong_passwords === true || response.data.enforce_strong_passwords === 'true' || response.data.enforce_strong_passwords === 1 || response.data.enforce_strong_passwords === '1';
                }
                if (response.data.allow_digital_book_downloads !== undefined) {
                    allowDigitalBookDownloads.value = response.data.allow_digital_book_downloads === true || response.data.allow_digital_book_downloads === 'true' || response.data.allow_digital_book_downloads === 1 || response.data.allow_digital_book_downloads === '1';
                }
                if (response.data.max_books_per_student !== undefined) {
                    maxBooksPerStudent.value = Number(response.data.max_books_per_student) || 3;
                }
                if (response.data.max_book_reservation_days !== undefined) {
                    maxBookReservationDays.value = Number(response.data.max_book_reservation_days) || 14;
                }
                if (response.data.max_checkin_time_minutes !== undefined) {
                    maxCheckinTimeMinutes.value = Number(response.data.max_checkin_time_minutes) || 15;
                }
                if (response.data.allow_seat_extensions !== undefined) {
                    allowSeatExtensions.value = response.data.allow_seat_extensions === true || response.data.allow_seat_extensions === 'true' || response.data.allow_seat_extensions === 1 || response.data.allow_seat_extensions === '1';
                }
                if (response.data.max_extension_minutes !== undefined) {
                    maxExtensionMinutes.value = Number(response.data.max_extension_minutes) || 60;
                }
                if (response.data.queue_hold_minutes !== undefined) {
                    queueHoldMinutes.value = Number(response.data.queue_hold_minutes) || 10;
                }
                if (response.data.overstay_penalty_enabled !== undefined) {
                    overstayPenaltyEnabled.value = response.data.overstay_penalty_enabled === true || response.data.overstay_penalty_enabled === 'true' || response.data.overstay_penalty_enabled === 1 || response.data.overstay_penalty_enabled === '1';
                }
            }
        } catch (error) {
            console.error('Error fetching public settings:', error);
        }
    };

    return {
        appName,
        appLogo,
        siteDescription,
        contactEmail,
        contactPhone,
        maintenanceMode,
        allowUserRegistration,
        requireStudentApproval,
        enforceStrongPasswords,
        allowDigitalBookDownloads,
        maxBooksPerStudent,
        maxBookReservationDays,
        maxCheckinTimeMinutes,
        allowSeatExtensions,
        maxExtensionMinutes,
        queueHoldMinutes,
        overstayPenaltyEnabled,
        setMaintenanceMode,
        fetchPublicSettings
    };
}
