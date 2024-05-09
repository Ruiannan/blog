<template><div><h1 id="ts-基本类型二" tabindex="-1"><a class="header-anchor" href="#ts-基本类型二"><span>TS 基本类型二</span></a></h1>
<p>类型适配(类型断言)、函数类型、对象类型、类、访问修饰符、模块、泛型</p>
<h3 id="类型适配" tabindex="-1"><a class="header-anchor" href="#类型适配"><span>类型适配</span></a></h3>
<p>通知 typescript 进行类型适配的过程就叫做类型断言</p>
<div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">let</span> message<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">;</span>
message <span class="token operator">=</span> <span class="token string">"jack"</span><span class="token punctuation">;</span>
message<span class="token punctuation">.</span><span class="token function">endsWith</span><span class="token punctuation">(</span><span class="token string">"k"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 方式1</span>
<span class="token keyword">let</span> ddd1 <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">></span>message<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">endsWith</span><span class="token punctuation">(</span><span class="token string">"k"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 方式2</span>
<span class="token keyword">let</span> ddd2 <span class="token operator">=</span> <span class="token punctuation">(</span>message <span class="token keyword">as</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">endsWith</span><span class="token punctuation">(</span><span class="token string">"k"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>message 初始 any 类型，即使赋值为字符串，也是 any 类型，无法使用编辑器内置的联想功能，给出字符串相关的属性和方法提示信息。所以需要进行类型适配（&lt;string&gt;message）或者（message as string）</p>
</blockquote>
<p>编译成 JS</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> message<span class="token punctuation">;</span>
message <span class="token operator">=</span> <span class="token string">"jack"</span><span class="token punctuation">;</span>
message<span class="token punctuation">.</span><span class="token function">endsWith</span><span class="token punctuation">(</span><span class="token string">"k"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 方式1</span>
<span class="token keyword">var</span> ddd1 <span class="token operator">=</span> message<span class="token punctuation">.</span><span class="token function">endsWith</span><span class="token punctuation">(</span><span class="token string">"k"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 方式2</span>
<span class="token keyword">var</span> ddd2 <span class="token operator">=</span> message<span class="token punctuation">.</span><span class="token function">endsWith</span><span class="token punctuation">(</span><span class="token string">"k"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="函数类型" tabindex="-1"><a class="header-anchor" href="#函数类型"><span>函数类型</span></a></h3>
<p>function 基本用法与 es6 一样</p>
<blockquote>
<p>! 不管是可选参数还是默认参数，都必须在参数列表末尾，按照从后往前的顺序进行排列</p>
</blockquote>
<div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="token comment">// 1 参数绑定类型</span>
<span class="token keyword">let</span> <span class="token function-variable function">logFun1</span> <span class="token operator">=</span> <span class="token punctuation">(</span>message<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"logFun1==>"</span><span class="token punctuation">,</span> message<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token function">logFun1</span><span class="token punctuation">(</span><span class="token string">"jack"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 2 使用 ？可以省略参数，不传值默认为 undefined</span>
<span class="token keyword">let</span> <span class="token function-variable function">logFun2</span> <span class="token operator">=</span> <span class="token punctuation">(</span>message<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> code<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"logFun2==>: "</span><span class="token punctuation">,</span> message<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token function">logFun2</span><span class="token punctuation">(</span><span class="token string">"hahahah"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 3 设置参数默认值</span>
<span class="token keyword">let</span> <span class="token function-variable function">logFun3</span> <span class="token operator">=</span> <span class="token punctuation">(</span>message<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> code<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"logFun3==>: "</span><span class="token punctuation">,</span> message<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token function">logFun3</span><span class="token punctuation">(</span><span class="token string">"dududud"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编译成 JS</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 1 参数绑定类型</span>
<span class="token keyword">var</span> <span class="token function-variable function">logFun1</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">message</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"logFun1==>"</span><span class="token punctuation">,</span> message<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token function">logFun1</span><span class="token punctuation">(</span><span class="token string">"jack"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 2 使用 ？可以省略参数，不传值默认为 undefined</span>
<span class="token keyword">var</span> <span class="token function-variable function">logFun2</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">message<span class="token punctuation">,</span> code</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"logFun2==>: "</span><span class="token punctuation">,</span> message<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token function">logFun2</span><span class="token punctuation">(</span><span class="token string">"hahahah"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 3 设置参数默认值</span>
<span class="token keyword">var</span> <span class="token function-variable function">logFun3</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">message<span class="token punctuation">,</span> code</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>code <span class="token operator">===</span> <span class="token keyword">void</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    code <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"logFun3==>: "</span><span class="token punctuation">,</span> message<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token function">logFun3</span><span class="token punctuation">(</span><span class="token string">"dududud"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="对象类型-object" tabindex="-1"><a class="header-anchor" href="#对象类型-object"><span>对象类型 object</span></a></h3>
<ol>
<li>key to type 键类型对。编辑器会自动匹配类型，或者手动进行类型匹配</li>
<li>不能使用 object 来笼统定义{}, 调用的时候会报错</li>
<li>object 类型可以认为是 any 类型的一个子集</li>
</ol>
<h3 id="接口" tabindex="-1"><a class="header-anchor" href="#接口"><span>接口</span></a></h3>
<p>interface 高内聚、低耦合</p>
<ol>
<li>功能相关的事务放在一个集合中形成一个模块，模块之间应该是相互独立的，保持低耦合的状态</li>
<li>使用方式：给函数参数定义接口类型</li>
</ol>
<div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="token comment">// 把所有相关的属性和方法放到一个集合中</span>
<span class="token keyword">interface</span> <span class="token class-name">Point</span> <span class="token punctuation">{</span>
  x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  y<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> <span class="token function-variable function">drwaPoint</span> <span class="token operator">=</span> <span class="token punctuation">(</span>point<span class="token operator">:</span> Point<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"x==>: "</span><span class="token punctuation">,</span> point<span class="token punctuation">.</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"y==>: "</span><span class="token punctuation">,</span> point<span class="token punctuation">.</span>y<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token function">drwaPoint</span><span class="token punctuation">(</span><span class="token punctuation">{</span> x<span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token number">30</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编译成 JS</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">drwaPoint</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">point</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"x==>: "</span><span class="token punctuation">,</span> point<span class="token punctuation">.</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"y==>: "</span><span class="token punctuation">,</span> point<span class="token punctuation">.</span>y<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token function">drwaPoint</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token number">30</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="类" tabindex="-1"><a class="header-anchor" href="#类"><span>类</span></a></h3>
<p>class</p>
<div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="token comment">// 1. 使用 class 关键字定义的称之为类。可以使用 implements 关键字，通过类来实现某个接口 interface</span>
<span class="token keyword">interface</span> <span class="token class-name">Nature</span> <span class="token punctuation">{</span>
  a<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Tree</span> <span class="token keyword">implements</span> <span class="token class-name">Nature</span> <span class="token punctuation">{</span>
  a<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 2. js中构造函数不能重载，一个类有且仅有一个 constructor。如果实例化的时候不知道传入的值，可以使用?（可选项），或者赋值默认值</span>
<span class="token keyword">class</span> <span class="token class-name">HelloClass</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span> hello<span class="token operator">:</span> <span class="token number">1111</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 3. 访问修饰符（public,private,protected）,在声明构造函数的同时，顺便完成成员变量的声明以及初始化</span>
<span class="token keyword">class</span> <span class="token class-name">TestClass</span> <span class="token punctuation">{</span>
  <span class="token keyword">public</span> nameValue <span class="token operator">=</span> <span class="token string">""</span><span class="token punctuation">;</span>
  <span class="token keyword">private</span> ageValue <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token keyword">protected</span> weightValue <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>

  <span class="token keyword">public</span> <span class="token function-variable function">getAge</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"nameValue==>: "</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>nameValue<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"ageValue==>: "</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>ageValue<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"weightValue==>: "</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>weightValue<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> testVal1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TestClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"testVal1==>: "</span><span class="token punctuation">,</span> testVal1<span class="token punctuation">.</span>nameValue<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// console.log("testVal12==>: ",testVal1.ageValue); // 私有的 只能在类中自身访问</span>
<span class="token comment">// console.log("testVal13==>: ",testVal1.weightValue); // 保护的 只能在自身或者字类中访问</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编译成 JS</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 1. 使用 class 关键字定义的称之为类。可以使用 implements 关键字，通过类来实现某个接口 interface</span>
<span class="token keyword">var</span> Tree <span class="token operator">=</span> <span class="token doc-comment comment">/** <span class="token keyword">@class</span> */</span> <span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">function</span> <span class="token function">Tree</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token keyword">return</span> Tree<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 2. js中构造函数不能重载，一个类有且仅有一个 constructor。如果实例化的时候不知道传入的值，可以使用?（可选项），或者赋值默认值</span>
<span class="token keyword">var</span> HelloClass <span class="token operator">=</span> <span class="token doc-comment comment">/** <span class="token keyword">@class</span> */</span> <span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">function</span> <span class="token function">HelloClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token literal-property property">hello</span><span class="token operator">:</span> <span class="token number">1111</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> HelloClass<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 3. 访问修饰符（public,private,protected）,在声明构造函数的同时，顺便完成成员变量的声明以及初始化</span>
<span class="token keyword">var</span> TestClass <span class="token operator">=</span> <span class="token doc-comment comment">/** <span class="token keyword">@class</span> */</span> <span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">function</span> <span class="token function">TestClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> _this <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>nameValue <span class="token operator">=</span> <span class="token string">""</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>ageValue <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>weightValue <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function-variable function">getAge</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"nameValue==>: "</span><span class="token punctuation">,</span> _this<span class="token punctuation">.</span>nameValue<span class="token punctuation">)</span><span class="token punctuation">;</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"ageValue==>: "</span><span class="token punctuation">,</span> _this<span class="token punctuation">.</span>ageValue<span class="token punctuation">)</span><span class="token punctuation">;</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"weightValue==>: "</span><span class="token punctuation">,</span> _this<span class="token punctuation">.</span>weightValue<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> TestClass<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> testVal1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TestClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"testVal1==>: "</span><span class="token punctuation">,</span> testVal1<span class="token punctuation">.</span>nameValue<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// console.log("testVal12==>: ",testVal1.ageValue); // 私有的 只能在类中自身访问</span>
<span class="token comment">// console.log("testVal13==>: ",testVal1.weightValue); // 保护的 只能在自身或者字类中访问</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="访问修饰符" tabindex="-1"><a class="header-anchor" href="#访问修饰符"><span>访问修饰符</span></a></h3>
<p>public,private,protected</p>
<ol>
<li>
<p>public 公有的（属性和方法默认是公有的）</p>
</li>
<li>
<p>private 私有的 只能在类中自身访问
① 私有变量一般以下划线开头来表示，例如： _x
② set 和 get 处理私有变量（编译器版本需要在 es5 以上）tsc -t es5 xx.ts</p>
</li>
<li>
<p>protected 保护的 只能在自身或者字类中访问</p>
</li>
</ol>
<h3 id="模块" tabindex="-1"><a class="header-anchor" href="#模块"><span>模块</span></a></h3>
<p>module</p>
<ol>
<li>一个文件可以理解为一个模块</li>
<li>与 es6 中的 module 相似，有两种导入导出方式。模块内的代码需要 export 导出，然后其他文件中使用 import 导入</li>
</ol>
<h3 id="泛型" tabindex="-1"><a class="header-anchor" href="#泛型"><span>泛型</span></a></h3>
<p>Generics</p>
<div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="token comment">// 1. 类型 + 泛型</span>
<span class="token keyword">let</span> lastInArray1 <span class="token operator">=</span> <span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">></span><span class="token punctuation">(</span>arr<span class="token operator">:</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> arr<span class="token punctuation">[</span>arr<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> lastInArray2 <span class="token operator">=</span> <span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">></span><span class="token punctuation">(</span>arr<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> arr<span class="token punctuation">[</span>arr<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> l1 <span class="token operator">=</span> <span class="token function">lastInArray1</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> l2 <span class="token operator">=</span> <span class="token function">lastInArray2</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">"a"</span><span class="token punctuation">,</span> <span class="token string">"s"</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"l1==>: "</span><span class="token punctuation">,</span> l1<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"l2==>: "</span><span class="token punctuation">,</span> l2<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 2. 多泛型</span>
<span class="token keyword">let</span> mackTuple <span class="token operator">=</span> <span class="token operator">&lt;</span><span class="token constant">T</span><span class="token punctuation">,</span> <span class="token constant">Y</span><span class="token operator">></span><span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token constant">Y</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">[</span>x<span class="token punctuation">,</span> y<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> v1 <span class="token operator">=</span> <span class="token function">mackTuple</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">"eee"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"v1==>: "</span><span class="token punctuation">,</span> v1<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编译成 JS</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 1. 类型 + 泛型</span>
<span class="token keyword">var</span> <span class="token function-variable function">lastInArray1</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> arr<span class="token punctuation">[</span>arr<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> <span class="token function-variable function">lastInArray2</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> arr<span class="token punctuation">[</span>arr<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> l1 <span class="token operator">=</span> <span class="token function">lastInArray1</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> l2 <span class="token operator">=</span> <span class="token function">lastInArray2</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">"a"</span><span class="token punctuation">,</span> <span class="token string">"s"</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"l1==>: "</span><span class="token punctuation">,</span> l1<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"l2==>: "</span><span class="token punctuation">,</span> l2<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 2. 多泛型</span>
<span class="token keyword">var</span> <span class="token function-variable function">mackTuple</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span> y</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">[</span>x<span class="token punctuation">,</span> y<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> v1 <span class="token operator">=</span> <span class="token function">mackTuple</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">"eee"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"v1==>: "</span><span class="token punctuation">,</span> v1<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


