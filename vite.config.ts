import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    // setting up a proxy in vite
    proxy: {
      "/api": {
        target: BACKEND_URL,
        rewrite: (path) => path.replace(/^\/api/, ""),
        changeOrigin: true,
      },
    },
  },
});
