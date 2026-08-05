import { defineConfig } from "vite";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
    base: "/portfolio-site/",

    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, "index.html"),
                heal: resolve(__dirname, "pages/heal.html"),
                yui: resolve(__dirname, "pages/yui.html"),
                shin: resolve(__dirname, "pages/shin.html"),
                sudachi: resolve(__dirname, "pages/sudachi.html"),
                memoria: resolve(__dirname, "pages/memoria.html"),
                beauty: resolve(__dirname, "pages/beauty.html"),
                y2k: resolve(__dirname, "pages/y2k.html"),
                "art-flag": resolve(__dirname, "pages/art-flag.html"),
                geitaniand: resolve(__dirname, "pages/geitaniand.html"),
                umigamenonamida: resolve(__dirname, "pages/umigamenonamida.html"),
            },
        },
    },
});