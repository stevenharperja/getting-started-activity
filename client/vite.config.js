import {defineConfig} from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  envDir: '../',
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true,
        secure: false,
        ws: true,
      },
    },
    hmr: {
      clientPort: 443,
    },
    allowedHosts: [
      "butler-math-michael-gtk.trycloudflare.com",
      "medicines-duplicate-joel-tim.trycloudflare.com",
      "retirement-passed-journals-moms.trycloudflare.com",
      "measure-simulations-contractor-album.trycloudflare.com"
    ]
  },
});
