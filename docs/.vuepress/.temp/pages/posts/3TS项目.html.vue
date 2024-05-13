<template><div><h1 id="ts-项目三" tabindex="-1"><a class="header-anchor" href="#ts-项目三"><span>TS 项目三</span></a></h1>
<p>编译上下文、类型声明空间、模块、模块路径、命名空间</p>
<h2 id="编译上下文" tabindex="-1"><a class="header-anchor" href="#编译上下文"><span>编译上下文</span></a></h2>
<p>[TODO：待学习，熟悉基本配置]</p>
<p>编译上下文算是一个比较花哨的术语，可以用它来给文件分组，告诉 TypeScript 哪些文件是有效的，哪些是无效的。除了有效文件所携带信息外，编译上下文还包含有正在被使用的编译选项的信息。定义这种逻辑分组，一个比较好的方式是使用 tsconfig.json 文件。</p>
<h2 id="类型声明空间" tabindex="-1"><a class="header-anchor" href="#类型声明空间"><span>类型声明空间</span></a></h2>
<div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">Foo</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">interface</span> <span class="token class-name">Bar</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">type</span> <span class="token class-name">Bas</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以将 Foo、Bar、Bas 作为类型注解使用</p>
<div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">let</span> foo<span class="token operator">:</span> Foo<span class="token punctuation">;</span>
<span class="token keyword">let</span> bar<span class="token operator">:</span> Bar<span class="token punctuation">;</span>
<span class="token keyword">let</span> bas<span class="token operator">:</span> Bas<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>! 尽管定义了 interface Bar，却不能把它当成一个变量使用，因为它没有定义在变量声明空间</p>
</blockquote>
<div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Bar2</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">const</span> bar2 <span class="token operator">=</span> Bar2<span class="token punctuation">;</span> <span class="token comment">// error “Bar2”仅表示类型，但在此处却作为值使用</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>变量声明空间
变量声明空间包含可用作变量的内容，Class Foo 提供了一个类型 Foo 到类型声明空间，此外它还提供了一个变量 Foo 到变量声明空间。</p>
<div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">const</span> someVal <span class="token operator">=</span> Foo<span class="token punctuation">;</span>
<span class="token keyword">const</span> someOtherVal <span class="token operator">=</span> <span class="token number">123</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>同样一些 var 声明的变量，也只能在变量声明空间使用，不能用作类型注解</p>
<div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">const</span> foo1 <span class="token operator">=</span> <span class="token number">123</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> bar1<span class="token operator">:</span> foo1<span class="token punctuation">;</span> <span class="token comment">// error “foo1”表示值，但在此处用作类型</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="模块" tabindex="-1"><a class="header-anchor" href="#模块"><span>模块</span></a></h2>
<h3 id="全局模块" tabindex="-1"><a class="header-anchor" href="#全局模块"><span>全局模块</span></a></h3>
<p>默认情况下在一个 ts 文件中定义变量，它处于全局命名空间中，毋庸置疑使用全局变量空间是危险的，因为它会成命名冲突，推荐使用文件模块。</p>
<h3 id="文件模块" tabindex="-1"><a class="header-anchor" href="#文件模块"><span>文件模块</span></a></h3>
<p>文件模块也叫外部模块。在 ts 文件的根级别位置含 import 或者 export，它会在本地创建一个作用域。</p>
<h4 id="文件模块详情" tabindex="-1"><a class="header-anchor" href="#文件模块详情"><span>文件模块详情</span></a></h4>
<p>ES 模块语法</p>
<h3 id="文件模块的导入导出" tabindex="-1"><a class="header-anchor" href="#文件模块的导入导出"><span>文件模块的导入导出</span></a></h3>
<h4 id="使用-export-关键字导出一个变量和或类型" tabindex="-1"><a class="header-anchor" href="#使用-export-关键字导出一个变量和或类型"><span>使用 export 关键字导出一个变量和或类型</span></a></h4>
<div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> someVal1 <span class="token operator">=</span> <span class="token number">123</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">type</span> <span class="token class-name">someType1</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  foo<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>另一种写法</p>
<div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">const</span> someVal2 <span class="token operator">=</span> <span class="token number">123</span><span class="token punctuation">;</span>
<span class="token keyword">type</span> <span class="token class-name">someType2</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  foo<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="重命名变量导出" tabindex="-1"><a class="header-anchor" href="#重命名变量导出"><span>重命名变量导出</span></a></h4>
<div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token punctuation">{</span> someVal2 <span class="token keyword">as</span> someValueData<span class="token punctuation">,</span> someType2 <span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="使用-import-关键字导入一个变量或者类型" tabindex="-1"><a class="header-anchor" href="#使用-import-关键字导入一个变量或者类型"><span>使用 import 关键字导入一个变量或者类型</span></a></h4>
<div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>someVal<span class="token punctuation">,</span>someType<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">from</span> <span class="token string">"./foo"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="重命名导入" tabindex="-1"><a class="header-anchor" href="#重命名导入"><span>重命名导入</span></a></h4>
<div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>someVal <span class="token keyword">as</span> someValueData<span class="token punctuation">,</span>someType<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">from</span> <span class="token string">"./foo"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="整体加载-即使用星号-指定一个对象-所有输出值都加载到这个对象上面" tabindex="-1"><a class="header-anchor" href="#整体加载-即使用星号-指定一个对象-所有输出值都加载到这个对象上面"><span>整体加载，即使用星号（*）指定一个对象，所有输出值都加载到这个对象上面</span></a></h4>
<div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> foo <span class="token keyword">from</span> <span class="token string">"./foo"</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="只导入模块" tabindex="-1"><a class="header-anchor" href="#只导入模块"><span>只导入模块</span></a></h4>
<div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token string">"core-js"</span><span class="token punctuation">;</span> <span class="token comment">// 一个普通的 polyfill 库，整包引入会导致编译后体积过大</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="从其他模块导入后整体导出" tabindex="-1"><a class="header-anchor" href="#从其他模块导入后整体导出"><span>从其他模块导入后整体导出</span></a></h4>
<div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token operator">*</span> <span class="token keyword">from</span> <span class="token string">"./foo"</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="从其他模块导入后部分导出" tabindex="-1"><a class="header-anchor" href="#从其他模块导入后部分导出"><span>从其他模块导入后部分导出</span></a></h4>
<div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token punctuation">{</span> someVal <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"../foo"</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="重命名从其他模块导入后部分导出" tabindex="-1"><a class="header-anchor" href="#重命名从其他模块导入后部分导出"><span>重命名从其他模块导入后部分导出</span></a></h4>
<div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token punctuation">{</span> someVal <span class="token keyword">as</span> someValueData <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"../foo"</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="默认导出-一个模块只能有一个默认导出" tabindex="-1"><a class="header-anchor" href="#默认导出-一个模块只能有一个默认导出"><span>默认导出 (一个模块只能有一个默认导出)</span></a></h4>
<div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="token comment">// 使用 export default</span>
<span class="token keyword">let</span> someParams1<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> someParams1 <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">someFun</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">someClass</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="模块路径" tabindex="-1"><a class="header-anchor" href="#模块路径"><span>模块路径</span></a></h2>
<p>相对模块路径 - 相对路径导入模块
动态查找模块 - 从 node_modules 下寻找模块直到根目录</p>
<h2 id="命名空间" tabindex="-1"><a class="header-anchor" href="#命名空间"><span>命名空间</span></a></h2>
<p>在确保创建的变量不会泄漏至全局命名空间时，基于文件模块使用时，ts 提供了 namespace 关键字来描述分组</p>
<div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">namespace</span> Unility <span class="token punctuation">{</span>
  <span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">log</span><span class="token punctuation">(</span>msg<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">error</span><span class="token punctuation">(</span>msg<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

Unility<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"hahah"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
Unility<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">"error !!!!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>TS 的命名空间支持嵌套，可以在 Unility 命名空间下嵌套一个叫 Messaging 的空间命名</p>
</div></template>


