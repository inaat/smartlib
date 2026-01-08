import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './index.css';
import { useAuth } from '@/shared/composables/useAuth';
import { useApp } from '@/shared/composables/useApp';

const app = createApp(App);

// Initialize Auth and App
const { checkAuth } = useAuth();
const { init: initApp } = useApp();

checkAuth().then(async () => {
    await initApp();
    app.use(router);
    app.mount('#root');
});
