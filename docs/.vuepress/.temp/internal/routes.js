export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/mac/Documents/我的项目/app/blog-starter/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"首页"} }],
  ["/get-started.html", { loader: () => import(/* webpackChunkName: "get-started.html" */"/Users/mac/Documents/我的项目/app/blog-starter/docs/.vuepress/.temp/pages/get-started.html.js"), meta: {"title":"Get Started"} }],
  ["/posts/1TS%E5%9F%BA%E6%9C%AC%E7%B1%BB%E5%9E%8B.html", { loader: () => import(/* webpackChunkName: "1TS基本类型.html" */"/Users/mac/Documents/我的项目/app/blog-starter/docs/.vuepress/.temp/pages/posts/1TS基本类型.html.js"), meta: {"_blog":{"title":"TS 类型一","author":"","date":"2024-05-06T00:00:00.000Z","category":["TS"],"tag":["TS"],"excerpt":"\n<p>基础类型、高级类型</p>\n<h2>基础类型</h2>\n<h3>数字类型</h3>\n<p>数字类型 number 可表示整数、浮点数、正负数</p>\n<div class=\"language-typescript\" data-ext=\"ts\" data-title=\"ts\"><pre class=\"language-typescript\"><code><span class=\"token keyword\">let</span> num1<span class=\"token operator\">:</span> <span class=\"token builtin\">number</span> <span class=\"token operator\">=</span> <span class=\"token number\">10</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">let</span> num2<span class=\"token operator\">:</span> <span class=\"token builtin\">number</span> <span class=\"token operator\">=</span> <span class=\"token number\">10.56</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">let</span> num3<span class=\"token operator\">:</span> <span class=\"token builtin\">number</span> <span class=\"token operator\">=</span> <span class=\"token operator\">-</span><span class=\"token number\">10</span><span class=\"token punctuation\">;</span>\n</code></pre></div>"},"title":"TS 类型一"} }],
  ["/posts/2TS%E5%9F%BA%E6%9C%AC%E7%B1%BB%E5%9E%8B.html", { loader: () => import(/* webpackChunkName: "2TS基本类型.html" */"/Users/mac/Documents/我的项目/app/blog-starter/docs/.vuepress/.temp/pages/posts/2TS基本类型.html.js"), meta: {"_blog":{"title":"TS 基本类型二","author":"","date":"2024-05-07T00:00:00.000Z","category":["TS"],"tag":["TS"],"excerpt":"\n<p>类型适配(类型断言)、函数类型、对象类型、类、访问修饰符、模块、泛型</p>\n<h3>类型适配</h3>\n<p>通知 typescript 进行类型适配的过程就叫做类型断言</p>\n<div class=\"language-typescript\" data-ext=\"ts\" data-title=\"ts\"><pre class=\"language-typescript\"><code><span class=\"token keyword\">let</span> message<span class=\"token operator\">:</span> <span class=\"token builtin\">any</span><span class=\"token punctuation\">;</span>\nmessage <span class=\"token operator\">=</span> <span class=\"token string\">\"jack\"</span><span class=\"token punctuation\">;</span>\nmessage<span class=\"token punctuation\">.</span><span class=\"token function\">endsWith</span><span class=\"token punctuation\">(</span><span class=\"token string\">\"k\"</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token comment\">// 方式1</span>\n<span class=\"token keyword\">let</span> ddd1 <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token operator\">&lt;</span><span class=\"token builtin\">string</span><span class=\"token operator\">&gt;</span>message<span class=\"token punctuation\">)</span><span class=\"token punctuation\">.</span><span class=\"token function\">endsWith</span><span class=\"token punctuation\">(</span><span class=\"token string\">\"k\"</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token comment\">// 方式2</span>\n<span class=\"token keyword\">let</span> ddd2 <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>message <span class=\"token keyword\">as</span> <span class=\"token builtin\">string</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">.</span><span class=\"token function\">endsWith</span><span class=\"token punctuation\">(</span><span class=\"token string\">\"k\"</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n</code></pre></div>"},"title":"TS 基本类型二"} }],
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
