import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "localhost",
    port: 6969,
  },
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  define: {
    global: {},
  },
});
