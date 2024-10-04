import { resolve } from "path";

export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",

  app: {
    head: {
      title: "سکان آکادمی",
      link: [{ rel: "icon", href: "/icons/home.svg" }],
      htmlAttrs: {
        lang: "fa",
        dir: "rtl",
      },
    },
  },

  devtools: { enabled: true },
  components: true,

  alias: {
    assets: resolve(__dirname, "assets"),
    icons: resolve(__dirname, "assets", "icons"),
    "@": resolve(__dirname),
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/styles/style.scss";',
        },
      },
    },
  },

  plugins: ["~/plugins/bootstrap"],

  routeRules: {
    // SSR for landing and results pages
    "/": { ssr: true },
    "/results": { ssr: true },
    // CSR for question page
    "/question/:number": { ssr: false },
  },
  modules: ["nuxt-icons"],
});
