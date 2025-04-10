import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  assetsInclude: ["**/*.JPG"], // Include .JPG files as assets
  base: "./", // Or base: '/'
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
  },
});
