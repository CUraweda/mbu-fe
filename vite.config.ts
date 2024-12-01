import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tsConfigPaths from "vite-tsconfig-paths";
// import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  // resolve: {
  //   alias: [
  //     {
  //       find: "$",
  //       replacement: path.resolve(__dirname, "src"),
  //     },
  //   ],
  // },
  plugins: [react(), tsConfigPaths()],
});
