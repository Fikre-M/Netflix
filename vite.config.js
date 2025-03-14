// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

// // https://vite.dev/config/
// export default defineConfig({
//   base: "/Netflix/",
//   plugins: [react()],
//   server: {
//     port: 5000,
//     open: true,
//   },
// });



import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "./", // Or base: '/'
  plugins: [react()],
  server: {
    port: 5000,
    open: true,
  },
});
