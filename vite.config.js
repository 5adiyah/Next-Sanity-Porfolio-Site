import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            swiper: 'swiper/swiper-bundle.esm.js', // Explicitly resolve the Swiper ES module
        },
    },
});
