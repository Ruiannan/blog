import comp from "/Users/mac/Documents/我的项目/app/blog-starter/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"首页\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"title\":\"首页\",\"heroImage\":\"https://avatars.githubusercontent.com/u/32606602?v=4\",\"actions\":[{\"text\":\"Get Started\",\"link\":\"https://github.com/Ruiannan/blog\",\"type\":\"primary\"},{\"text\":\"Introduction\",\"link\":\"https://github.com/Ruiannan\",\"type\":\"secondary\"}]},\"headers\":[],\"git\":{\"updatedTime\":1715237074000,\"contributors\":[{\"name\":\"ruiannan\",\"email\":\"ruiannan@qmai.cn\",\"commits\":5}]},\"filePathRelative\":\"README.md\",\"readingTime\":{\"minutes\":0.59,\"words\":178}}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
