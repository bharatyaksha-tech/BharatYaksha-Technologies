import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// GitHub Pages serves this project at https://bharatyaksha-tech.github.io/BharatYaksha-Technologies/
// so assets must load from that sub-path. Use VITE_BASE=/ to build for a custom domain or the site root.
export default defineConfig({
  base: process.env.VITE_BASE ?? "/BharatYaksha-Technologies/",
  plugins: [react()],
});
