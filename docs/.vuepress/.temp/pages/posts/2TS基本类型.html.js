import comp from "/Users/mac/Documents/我的项目/app/blog-starter/docs/.vuepress/.temp/pages/posts/2TS基本类型.html.vue"
const data = JSON.parse("{\"path\":\"/posts/2TS%E5%9F%BA%E6%9C%AC%E7%B1%BB%E5%9E%8B.html\",\"title\":\"TS 基本类型二\",\"lang\":\"zh-CN\",\"frontmatter\":{\"date\":\"2024-05-07T00:00:00.000Z\",\"category\":[\"TS\"],\"tag\":[\"TS\"],\"archive\":false,\"article\":true},\"headers\":[{\"level\":3,\"title\":\"类型适配\",\"slug\":\"类型适配\",\"link\":\"#类型适配\",\"children\":[]},{\"level\":3,\"title\":\"函数类型\",\"slug\":\"函数类型\",\"link\":\"#函数类型\",\"children\":[]},{\"level\":3,\"title\":\"对象类型 object\",\"slug\":\"对象类型-object\",\"link\":\"#对象类型-object\",\"children\":[]},{\"level\":3,\"title\":\"接口\",\"slug\":\"接口\",\"link\":\"#接口\",\"children\":[]},{\"level\":3,\"title\":\"类\",\"slug\":\"类\",\"link\":\"#类\",\"children\":[]},{\"level\":3,\"title\":\"访问修饰符\",\"slug\":\"访问修饰符\",\"link\":\"#访问修饰符\",\"children\":[]},{\"level\":3,\"title\":\"模块\",\"slug\":\"模块\",\"link\":\"#模块\",\"children\":[]},{\"level\":3,\"title\":\"泛型\",\"slug\":\"泛型\",\"link\":\"#泛型\",\"children\":[]}],\"git\":{\"updatedTime\":null,\"contributors\":[]},\"filePathRelative\":\"posts/2TS基本类型.md\",\"excerpt\":\"\\n<p>类型适配(类型断言)、函数类型、对象类型、类、访问修饰符、模块、泛型</p>\\n<h3>类型适配</h3>\\n<p>通知 typescript 进行类型适配的过程就叫做类型断言</p>\\n<div class=\\\"language-typescript\\\" data-ext=\\\"ts\\\" data-title=\\\"ts\\\"><pre class=\\\"language-typescript\\\"><code><span class=\\\"token keyword\\\">let</span> message<span class=\\\"token operator\\\">:</span> <span class=\\\"token builtin\\\">any</span><span class=\\\"token punctuation\\\">;</span>\\nmessage <span class=\\\"token operator\\\">=</span> <span class=\\\"token string\\\">\\\"jack\\\"</span><span class=\\\"token punctuation\\\">;</span>\\nmessage<span class=\\\"token punctuation\\\">.</span><span class=\\\"token function\\\">endsWith</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token string\\\">\\\"k\\\"</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span>\\n\\n<span class=\\\"token comment\\\">// 方式1</span>\\n<span class=\\\"token keyword\\\">let</span> ddd1 <span class=\\\"token operator\\\">=</span> <span class=\\\"token punctuation\\\">(</span><span class=\\\"token operator\\\">&lt;</span><span class=\\\"token builtin\\\">string</span><span class=\\\"token operator\\\">&gt;</span>message<span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">.</span><span class=\\\"token function\\\">endsWith</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token string\\\">\\\"k\\\"</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span>\\n\\n<span class=\\\"token comment\\\">// 方式2</span>\\n<span class=\\\"token keyword\\\">let</span> ddd2 <span class=\\\"token operator\\\">=</span> <span class=\\\"token punctuation\\\">(</span>message <span class=\\\"token keyword\\\">as</span> <span class=\\\"token builtin\\\">string</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">.</span><span class=\\\"token function\\\">endsWith</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token string\\\">\\\"k\\\"</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span>\\n</code></pre></div>\",\"readingTime\":{\"minutes\":4.31,\"words\":1293}}")
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
