// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  //CSS
  css: ["assets/css/main.css"],
  //postCSS
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  // Server side rending none because it's github pages
  ssr: false,
});
