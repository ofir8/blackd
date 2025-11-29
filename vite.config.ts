import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  // GitHub Pages base path - matches repository name
  base: '/BlackDaimond/',
  server: {
    host: true,
    port: 5173,
    strictPort: false,
    open: true,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
