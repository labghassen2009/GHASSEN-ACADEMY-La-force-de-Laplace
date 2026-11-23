// Created by Ghassen
﻿import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "./",
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 550,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.replace(/\\/g, "/").includes("/node_modules/three/")) return "three-vendor";
        },
      },
    },
  },
});
