// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react-swc'

// export default defineConfig({
//   plugins: [react()],
//   server: {
//     host: true,
//   },
//   build: {
//     outDir: 'dist',
//     base: '/jowi_portafolio2/'
//   }
// })

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base:"https://jowimp15.github.io/jowi_portafolio2/",
});
