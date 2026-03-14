import { defineConfig } from 'vite';

// Builds static site. Output is in dist/.
// For GitHub Pages project site (e.g. username.github.io/RaveSpin-Documentation), set VITE_BASE_PATH=/RaveSpin-Documentation/
export default defineConfig({
  base: process.env.VITE_BASE_PATH || './',
  root: 'src',
  publicDir: 'public',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: 'src/index.html',
        tech: 'src/tech.html',
        features: 'src/features.html',
        about: 'src/about.html',
      },
    },
  },
});
