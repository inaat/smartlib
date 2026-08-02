import { ref } from 'vue';
import axios from 'axios';

const appName = ref(import.meta.env.VITE_APP_NAME || 'SmartLib');
const appLogo = ref<string | null>(null);

export function useSettings() {
    const fetchPublicSettings = async () => {
        try {
            const response = await axios.get('/api/settings/public');
            if (response.data.app_name) {
                appName.value = response.data.app_name;
            }
            if (response.data.app_logo) {
                appLogo.value = response.data.app_logo;
            }
        } catch (error) {
            console.error('Error fetching public settings:', error);
        }
    };

    return {
        appName,
        appLogo,
        fetchPublicSettings
    };
}
