import  { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
    plugins: [],
    // root: './src',
    // build: {
    //     sourcemap: false,
    //     outDir: '../dist'
    // }

    root: resolve(__dirname, "src"),
    build: {
        outDir: resolve(__dirname, "dist"),
    },
})
