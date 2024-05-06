import comp from "/Users/mac/Documents/我的项目/app/blog-starter/docs/.vuepress/.temp/pages/posts/archive2.html.vue"
const data = JSON.parse("{\"path\":\"/posts/archive2.html\",\"title\":\"Archive Article2\",\"lang\":\"zh-CN\",\"frontmatter\":{\"date\":\"1998-01-02T00:00:00.000Z\",\"category\":[\"Test\"],\"tag\":[\"WWII\"],\"archive\":true},\"headers\":[{\"level\":2,\"title\":\"文章的中心思想\",\"slug\":\"文章的中心思想\",\"link\":\"#文章的中心思想\",\"children\":[{\"level\":3,\"title\":\"Heading 3\",\"slug\":\"heading-3\",\"link\":\"#heading-3\",\"children\":[]}]}],\"git\":{\"updatedTime\":1714987193000,\"contributors\":[{\"name\":\"ruiannan\",\"email\":\"ruiannan@qmai.cn\",\"commits\":2}]},\"filePathRelative\":\"posts/archive2.md\",\"excerpt\":\"\\n<h2>文章的中心思想</h2>\\n<p>Here is the content.</p>\\n<h3>Heading 3</h3>\\n<ul>\\n<li>Here is the content.</li>\\n</ul>\\n<blockquote>\\n<p>哈哈哈哈，这个简直太屌了</p>\\n</blockquote>\\n<div class=\\\"language-javascript\\\" data-ext=\\\"js\\\" data-title=\\\"js\\\"><pre class=\\\"language-javascript\\\"><code><span class=\\\"token keyword\\\">let</span> a <span class=\\\"token operator\\\">=</span> <span class=\\\"token number\\\">4</span><span class=\\\"token punctuation\\\">;</span>\\n</code></pre></div>\"}")
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
