import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/js/src/index.css', 'resources/js/src/main.ts'],
            refresh: true,
        }),
        vue(),
        tailwindcss(),
    ],
    resolve: {
        alias: {
            '@': '/resources/js/src',
            'vue': 'vue/dist/vue.esm-bundler.js'
        },
    },
    build: {
        minify: false,
        cssMinify: false,
        sourcemap: false,
        rollupOptions: {
            maxParallelFileOps: 1,
            output: {
                manualChunks: undefined
            }
        }
    }
});

