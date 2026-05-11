import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  root: '.',
  server: {
    port: 3000,
    host: true,
    hmr: process.env.DISABLE_HMR !== 'true',
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './'),
    },
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        bio: path.resolve(__dirname, 'bio.html'),
        philosophy: path.resolve(__dirname, 'philosophy.html'),
        gallery: path.resolve(__dirname, 'gallery.html'),
        galleryAudio: path.resolve(__dirname, 'gallery-audio.html'),
        galleryVideo: path.resolve(__dirname, 'gallery-video.html'),
        galleryPhotos: path.resolve(__dirname, 'gallery-photos.html'),
        donations: path.resolve(__dirname, 'donations.html'),
        events: path.resolve(__dirname, 'events.html'),
      },
    },
  },
});
