import comp from "/Users/mac/Documents/我的项目/app/blog-starter/docs/.vuepress/.temp/pages/category/test/index.html.vue"
const data = JSON.parse("{\"path\":\"/category/test/\",\"title\":\"Category Test\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Category Test\",\"sidebar\":false,\"blog\":{\"type\":\"category\",\"name\":\"Test\",\"key\":\"category\"},\"layout\":\"Category\"},\"headers\":[],\"git\":{},\"filePathRelative\":null,\"excerpt\":\"\"}")
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
