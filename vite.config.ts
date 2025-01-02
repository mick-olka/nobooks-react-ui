import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import Markdown from "vite-plugin-md";

// https://vitejs.dev/config/
export default defineConfig({
  assetsInclude: ["**/*.md"],
  plugins: [react(), Markdown()],
  resolve: {
    alias: {
      "@": path.resolve("src"),
      "@widgets": path.resolve("src/widgets"),
      "@entities": path.resolve("src/entities"),
      "@pages": path.resolve("src/pages"),
      "@features": path.resolve("public/data"),
    },
  },
});
