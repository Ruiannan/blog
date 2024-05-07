import comp from "/Users/mac/Documents/我的项目/app/blog-starter/docs/.vuepress/.temp/pages/tag/ts/index.html.vue"
const data = JSON.parse("{\"path\":\"/tag/ts/\",\"title\":\"标签 TS\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"标签 TS\",\"sidebar\":false,\"blog\":{\"type\":\"category\",\"name\":\"TS\",\"key\":\"tag\"},\"layout\":\"Tag\"},\"headers\":[],\"git\":{},\"filePathRelative\":null,\"excerpt\":\"\",\"readingTime\":{\"minutes\":0,\"words\":0}}")
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
