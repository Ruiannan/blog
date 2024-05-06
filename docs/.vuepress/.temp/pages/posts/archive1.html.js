import comp from "/Users/mac/Documents/我的项目/app/blog-starter/docs/.vuepress/.temp/pages/posts/archive1.html.vue"
const data = JSON.parse("{\"path\":\"/posts/archive1.html\",\"title\":\"这个是文章的 title\",\"lang\":\"zh-CN\",\"frontmatter\":{\"date\":\"2024-04-29T00:00:00.000Z\",\"category\":[\"History\"],\"tag\":[\"TS\"],\"archive\":true},\"headers\":[{\"level\":2,\"title\":\"这个是文章的简介\",\"slug\":\"这个是文章的简介\",\"link\":\"#这个是文章的简介\",\"children\":[{\"level\":3,\"title\":\"这个是文章的第一段\",\"slug\":\"这个是文章的第一段\",\"link\":\"#这个是文章的第一段\",\"children\":[]}]}],\"git\":{\"updatedTime\":1714979891000,\"contributors\":[{\"name\":\"ruiannan\",\"email\":\"ruiannan@qmai.cn\",\"commits\":1}]},\"filePathRelative\":\"posts/archive1.md\",\"excerpt\":\"\\n<h2>这个是文章的简介</h2>\\n<ul>\\n<li>哈哈哈哈哈哈，我居然是简介</li>\\n<li>dsfsdfsd</li>\\n</ul>\\n<p><code>let a:string = 'hahahha'</code></p>\\n<h3>这个是文章的第一段</h3>\\n<p>嘎嘎嘎嘎，我是文章的内容哎</p>\\n\"}")
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
