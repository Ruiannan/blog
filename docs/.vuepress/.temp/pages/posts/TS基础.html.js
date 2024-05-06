import comp from "/Users/mac/Documents/我的项目/app/blog-starter/docs/.vuepress/.temp/pages/posts/TS基础.html.vue"
const data = JSON.parse("{\"path\":\"/posts/TS%E5%9F%BA%E7%A1%80.html\",\"title\":\"TS 基础\",\"lang\":\"zh-CN\",\"frontmatter\":{\"date\":\"2024-05-06T00:00:00.000Z\",\"category\":[\"TS\"],\"tag\":[\"TS\"],\"archive\":true},\"headers\":[{\"level\":2,\"title\":\"TS 基础类型和基本用法\",\"slug\":\"ts-基础类型和基本用法\",\"link\":\"#ts-基础类型和基本用法\",\"children\":[{\"level\":3,\"title\":\"这个是文章的第一段\",\"slug\":\"这个是文章的第一段\",\"link\":\"#这个是文章的第一段\",\"children\":[]}]}],\"git\":{\"updatedTime\":1714979891000,\"contributors\":[{\"name\":\"ruiannan\",\"email\":\"ruiannan@qmai.cn\",\"commits\":1}]},\"filePathRelative\":\"posts/TS基础.md\",\"excerpt\":\"\\n<h2>TS 基础类型和基本用法</h2>\\n<ul>\\n<li>哈哈哈哈哈哈，我居然是简介</li>\\n<li>dsfsdfsd</li>\\n</ul>\\n<p><code>let a:string = 'hahahha'</code></p>\\n<h3>这个是文章的第一段</h3>\\n<p>嘎嘎嘎嘎，我是文章的内容哎</p>\\n\"}")
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
