import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import svgr from 'vite-plugin-svgr';
import { qrcode } from 'vite-plugin-qrcode';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr(), qrcode()],
  base: './',
  resolve: {
    alias: [{ find: '~', replacement: '/src' }],
  },
  server: {
    host: true,
  },
});
