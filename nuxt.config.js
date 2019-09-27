export default {
  mode: "spa",
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    // link: [{ rel: "icon", type: "image/x-icon", href: "~/favicon.ico" }]
  },
  // router: {
  //   base: "/"
  // },
  generate: {
    fallback: true,
    routes: [
      '/products/bikes/1',
      '/products/bikes/2',
      '/products/bikes/3',
      '/products/accessories/4',
      '/products/accessories/5',
      '/products/addons/6',
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#222" },
  /*
   ** Global CSS
   */
  css: ["@/assets/css/normalize.css"],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    {src: '~/plugins/Vuelidate'}
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    // extend(config, ctx) {}
    extend: (config, {isDev}) => {
      if (!isDev) {
        config.output.publicPath = './_nuxt/'
      }
      const svgRule = config.module.rules.find(rule => rule.test.test('.svg'));

      svgRule.test = /\.(png|jpe?g|gif|webp)$/;

      config.module.rules.push({
        test: /\.svg$/,
        loader: 'vue-svg-loader',
      });
    },
  }
};
