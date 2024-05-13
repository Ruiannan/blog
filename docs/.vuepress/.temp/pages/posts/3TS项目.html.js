import comp from "/Users/mac/Documents/我的项目/app/blog-starter/docs/.vuepress/.temp/pages/posts/3TS项目.html.vue"
const data = JSON.parse("{\"path\":\"/posts/3TS%E9%A1%B9%E7%9B%AE.html\",\"title\":\"TS 项目三\",\"lang\":\"zh-CN\",\"frontmatter\":{\"date\":\"2024-05-13T00:00:00.000Z\",\"category\":[\"TS\"],\"tag\":[\"TS\"],\"archive\":false,\"article\":true},\"headers\":[{\"level\":2,\"title\":\"编译上下文\",\"slug\":\"编译上下文\",\"link\":\"#编译上下文\",\"children\":[]},{\"level\":2,\"title\":\"类型声明空间\",\"slug\":\"类型声明空间\",\"link\":\"#类型声明空间\",\"children\":[]},{\"level\":2,\"title\":\"模块\",\"slug\":\"模块\",\"link\":\"#模块\",\"children\":[{\"level\":3,\"title\":\"全局模块\",\"slug\":\"全局模块\",\"link\":\"#全局模块\",\"children\":[]},{\"level\":3,\"title\":\"文件模块\",\"slug\":\"文件模块\",\"link\":\"#文件模块\",\"children\":[]},{\"level\":3,\"title\":\"文件模块的导入导出\",\"slug\":\"文件模块的导入导出\",\"link\":\"#文件模块的导入导出\",\"children\":[]}]},{\"level\":2,\"title\":\"模块路径\",\"slug\":\"模块路径\",\"link\":\"#模块路径\",\"children\":[]},{\"level\":2,\"title\":\"命名空间\",\"slug\":\"命名空间\",\"link\":\"#命名空间\",\"children\":[]}],\"git\":{\"updatedTime\":null,\"contributors\":[]},\"filePathRelative\":\"posts/3TS项目.md\",\"excerpt\":\"\\n<p>编译上下文、类型声明空间、模块、模块路径、命名空间</p>\\n<h2>编译上下文</h2>\\n<p>[TODO：待学习，熟悉基本配置]</p>\\n<p>编译上下文算是一个比较花哨的术语，可以用它来给文件分组，告诉 TypeScript 哪些文件是有效的，哪些是无效的。除了有效文件所携带信息外，编译上下文还包含有正在被使用的编译选项的信息。定义这种逻辑分组，一个比较好的方式是使用 tsconfig.json 文件。</p>\\n<h2>类型声明空间</h2>\\n<div class=\\\"language-typescript\\\" data-ext=\\\"ts\\\" data-title=\\\"ts\\\"><pre class=\\\"language-typescript\\\"><code><span class=\\\"token keyword\\\">class</span> <span class=\\\"token class-name\\\">Foo</span> <span class=\\\"token punctuation\\\">{</span><span class=\\\"token punctuation\\\">}</span>\\n<span class=\\\"token keyword\\\">interface</span> <span class=\\\"token class-name\\\">Bar</span> <span class=\\\"token punctuation\\\">{</span><span class=\\\"token punctuation\\\">}</span>\\n<span class=\\\"token keyword\\\">type</span> <span class=\\\"token class-name\\\">Bas</span> <span class=\\\"token operator\\\">=</span> <span class=\\\"token punctuation\\\">{</span><span class=\\\"token punctuation\\\">}</span><span class=\\\"token punctuation\\\">;</span>\\n</code></pre></div>\",\"readingTime\":{\"minutes\":2.89,\"words\":868}}")
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
