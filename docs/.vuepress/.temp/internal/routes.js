export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/mac/Documents/我的项目/app/blog-starter/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"首页"} }],
  ["/get-started.html", { loader: () => import(/* webpackChunkName: "get-started.html" */"/Users/mac/Documents/我的项目/app/blog-starter/docs/.vuepress/.temp/pages/get-started.html.js"), meta: {"title":"Get Started"} }],
  ["/posts/TS%E5%9F%BA%E7%A1%80.html", { loader: () => import(/* webpackChunkName: "TS基础.html" */"/Users/mac/Documents/我的项目/app/blog-starter/docs/.vuepress/.temp/pages/posts/TS基础.html.js"), meta: {"_blog":{"title":"TS 类型","author":"","date":"2024-05-06T00:00:00.000Z","category":["TS"],"tag":["TS"],"excerpt":"\n<h2>基础类型</h2>\n<h3>数字类型</h3>\n<p>数字类型 number 可表示整数、浮点数、正负数</p>\n<div class=\"language-typescript\" data-ext=\"ts\" data-title=\"ts\"><pre class=\"language-typescript\"><code><span class=\"token keyword\">let</span> num1<span class=\"token operator\">:</span> <span class=\"token builtin\">number</span> <span class=\"token operator\">=</span> <span class=\"token number\">10</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">let</span> num2<span class=\"token operator\">:</span> <span class=\"token builtin\">number</span> <span class=\"token operator\">=</span> <span class=\"token number\">10.56</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">let</span> num3<span class=\"token operator\">:</span> <span class=\"token builtin\">number</span> <span class=\"token operator\">=</span> <span class=\"token operator\">-</span><span class=\"token number\">10</span><span class=\"token punctuation\">;</span>\n</code></pre></div>"},"title":"TS 类型"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/Users/mac/Documents/我的项目/app/blog-starter/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
  ["/category/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/mac/Documents/我的项目/app/blog-starter/docs/.vuepress/.temp/pages/category/index.html.js"), meta: {"title":"分类"} }],
  ["/category/ts/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/mac/Documents/我的项目/app/blog-starter/docs/.vuepress/.temp/pages/category/ts/index.html.js"), meta: {"title":"分类 TS"} }],
  ["/tag/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/mac/Documents/我的项目/app/blog-starter/docs/.vuepress/.temp/pages/tag/index.html.js"), meta: {"title":"标签"} }],
  ["/tag/ts/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/mac/Documents/我的项目/app/blog-starter/docs/.vuepress/.temp/pages/tag/ts/index.html.js"), meta: {"title":"标签 TS"} }],
  ["/article/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/mac/Documents/我的项目/app/blog-starter/docs/.vuepress/.temp/pages/article/index.html.js"), meta: {"title":"文章"} }],
  ["/timeline/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/mac/Documents/我的项目/app/blog-starter/docs/.vuepress/.temp/pages/timeline/index.html.js"), meta: {"title":"时间轴"} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
