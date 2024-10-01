// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // 兼容性
  compatibilityDate: "2024-04-03",
  // Css样式
  css: [`/assets/css/style.css`],
  //  第三方模块
  modules: ["@unocss/nuxt", "@nuxt/devtools", "nuxt-lucide-icons"],
  // 开发工具
  devtools: { enabled: true },
  // lucide图标配置
  lucide: {
    namePrefix: "Icon",
  },
  //打包配置
  nitro: {
    //缩小捆绑包
    minify: true,
    //关闭源映射生成
    sourceMap: false,
    // 压缩公共资产
    compressPublicAssets: true,
  },
  // Vite 配置
  vite: {
    build: {
      chunkSizeWarningLimit: 1000,
    },
    // plugins: plugin,
  },
  //取消取消行内样式
  features: {
    inlineStyles: false,
  },
  // 构建配置
  experimental: {
    //  禁用 Vue3 兼容性
    externalVue: false,
  },
  // unhead 配置
  unhead: {
    // 启用 Html 压缩
    renderSSRHeadOptions: {
      omitLineBreaks: true,
    },
  },
  // 构建配置 启用 Nuxt4 兼容性
  future: {
    compatibilityVersion: 4,
  },
  // 应用配置
  app: {
    head: {
      htmlAttrs: {
        lang: "zh-CN", // 设置语言为简体中文
      },
      charset: "utf-8",
      meta: [
        {
          name: "viewport",
          content:
            "width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes",
        },
        {
          name: "accessible",
          content: "true",
        },
        {
          name: "format-detection",
          content: "telephone=no",
        },
        { name: "theme-color", content: "#fff" },
      ],
      script: [],
    },
  },
  // TypeScript 配置
  typescript: {
    strict: true,
  },
  // 源映射配置
  sourcemap: {
    server: false,
    client: true,
  },
});
