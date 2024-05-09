<template><div><h1 id="ts-类型" tabindex="-1"><a class="header-anchor" href="#ts-类型"><span>TS 类型</span></a></h1>
<p>基础类型、高级类型</p>
<h2 id="基础类型" tabindex="-1"><a class="header-anchor" href="#基础类型"><span>基础类型</span></a></h2>
<h3 id="数字类型" tabindex="-1"><a class="header-anchor" href="#数字类型"><span>数字类型</span></a></h3>
<p>数字类型 number 可表示整数、浮点数、正负数</p>
<div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">let</span> num1<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> num2<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">10.56</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> num3<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">10</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编译成 JS</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 数字类型 number 可表示整数、浮点数、正负数</span>
<span class="token keyword">var</span> num1 <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> num2 <span class="token operator">=</span> <span class="token number">10.56</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> num3 <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">10</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="字符串" tabindex="-1"><a class="header-anchor" href="#字符串"><span>字符串</span></a></h3>
<p>字符串 string</p>
<div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">let</span> str1<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">"hahahha"</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>编译成 JS</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> str1 <span class="token operator">=</span> <span class="token string">"hahahha"</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="布尔类型" tabindex="-1"><a class="header-anchor" href="#布尔类型"><span>布尔类型</span></a></h3>
<p>布尔类型 booler 可以自动映射类型也可以手动映射类型</p>
<div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">let</span> bool1 <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> bool2<span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编译成 JS</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> bool1 <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> bool2 <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="枚举类型" tabindex="-1"><a class="header-anchor" href="#枚举类型"><span>枚举类型</span></a></h3>
<p>Enum</p>
<div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">enum</span> Color <span class="token punctuation">{</span>
  pink<span class="token punctuation">,</span>
  red<span class="token punctuation">,</span>
  blue<span class="token punctuation">,</span>
  DarkRed <span class="token operator">=</span> <span class="token number">6</span><span class="token punctuation">,</span>
  DarkGreen <span class="token operator">=</span> <span class="token number">8</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"colorIndex==>: "</span><span class="token punctuation">,</span> Color<span class="token punctuation">.</span>pink<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 0</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"colorValue==>: "</span><span class="token punctuation">,</span> Color<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// pink</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编译成 JS</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> Color<span class="token punctuation">;</span>
<span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">Color</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  Color<span class="token punctuation">[</span><span class="token punctuation">(</span>Color<span class="token punctuation">[</span><span class="token string">"pink"</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"pink"</span><span class="token punctuation">;</span>
  Color<span class="token punctuation">[</span><span class="token punctuation">(</span>Color<span class="token punctuation">[</span><span class="token string">"red"</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"red"</span><span class="token punctuation">;</span>
  Color<span class="token punctuation">[</span><span class="token punctuation">(</span>Color<span class="token punctuation">[</span><span class="token string">"blue"</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"blue"</span><span class="token punctuation">;</span>
  Color<span class="token punctuation">[</span><span class="token punctuation">(</span>Color<span class="token punctuation">[</span><span class="token string">"DarkRed"</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"DarkRed"</span><span class="token punctuation">;</span>
  Color<span class="token punctuation">[</span><span class="token punctuation">(</span>Color<span class="token punctuation">[</span><span class="token string">"DarkGreen"</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"DarkGreen"</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span>Color <span class="token operator">||</span> <span class="token punctuation">(</span>Color <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"colorIndex==>: "</span><span class="token punctuation">,</span> Color<span class="token punctuation">.</span>pink<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"colorValue==>: "</span><span class="token punctuation">,</span> Color<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p>改变与数字枚举关联的数字</p>
<blockquote>
<p>默认情况第一个枚举值是 0</p>
</blockquote>
<div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="token comment">// 默认情况第一个枚举值是 0</span>
<span class="token keyword">enum</span> DarkColor <span class="token punctuation">{</span>
  Darblue <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">,</span>
  DarkRed<span class="token punctuation">,</span>
  DarkGreen<span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"colorValue==>: "</span><span class="token punctuation">,</span> DarkColor<span class="token punctuation">.</span>Darblue<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编译成 JS</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> DarkColor<span class="token punctuation">;</span>
<span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">DarkColor</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  DarkColor<span class="token punctuation">[</span><span class="token punctuation">(</span>DarkColor<span class="token punctuation">[</span><span class="token string">"Darblue"</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"Darblue"</span><span class="token punctuation">;</span>
  DarkColor<span class="token punctuation">[</span><span class="token punctuation">(</span>DarkColor<span class="token punctuation">[</span><span class="token string">"DarkRed"</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"DarkRed"</span><span class="token punctuation">;</span>
  DarkColor<span class="token punctuation">[</span><span class="token punctuation">(</span>DarkColor<span class="token punctuation">[</span><span class="token string">"DarkGreen"</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"DarkGreen"</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span>DarkColor <span class="token operator">||</span> <span class="token punctuation">(</span>DarkColor <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"colorValue==>: "</span><span class="token punctuation">,</span> DarkColor<span class="token punctuation">.</span>Darblue<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>字符串枚举</p>
<div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">enum</span> TypeEnum <span class="token punctuation">{</span>
  <span class="token constant">UNKNOWN</span> <span class="token operator">=</span> <span class="token string">""</span><span class="token punctuation">,</span>
  <span class="token constant">PASSPORT_VISA</span> <span class="token operator">=</span> <span class="token string">"passport_visa"</span><span class="token punctuation">,</span>
  <span class="token constant">PASSPORT</span> <span class="token operator">=</span> <span class="token string">"passport"</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"字符串枚举==>: "</span><span class="token punctuation">,</span> TypeEnum<span class="token punctuation">.</span><span class="token constant">PASSPORT_VISA</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// passport_visa</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编译成 JS</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> TypeEnum<span class="token punctuation">;</span>
<span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">TypeEnum</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  TypeEnum<span class="token punctuation">[</span><span class="token string">"UNKNOWN"</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">""</span><span class="token punctuation">;</span>
  TypeEnum<span class="token punctuation">[</span><span class="token string">"PASSPORT_VISA"</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"passport_visa"</span><span class="token punctuation">;</span>
  TypeEnum<span class="token punctuation">[</span><span class="token string">"PASSPORT"</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"passport"</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span>TypeEnum <span class="token operator">||</span> <span class="token punctuation">(</span>exports<span class="token punctuation">.</span>TypeEnum <span class="token operator">=</span> TypeEnum <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"字符串枚举==>: "</span><span class="token punctuation">,</span> TypeEnum<span class="token punctuation">.</span><span class="token constant">PASSPORT_VISA</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h3 id="any" tabindex="-1"><a class="header-anchor" href="#any"><span>any</span></a></h3>
<p>任意类型</p>
<div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">let</span> temp1<span class="token operator">:</span> <span class="token builtin">any</span> <span class="token operator">=</span> <span class="token string">"1111"</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> temp2<span class="token operator">:</span> <span class="token builtin">any</span> <span class="token operator">=</span> <span class="token number">222</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编译成 JS</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> temp1 <span class="token operator">=</span> <span class="token string">"1111"</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> temp2 <span class="token operator">=</span> <span class="token number">222</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="unkown" tabindex="-1"><a class="header-anchor" href="#unkown"><span>unkown</span></a></h3>
<p>未知类型 不保证类型，但是能保证类型安全</p>
<div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">let</span> numValue1<span class="token operator">:</span> <span class="token builtin">unknown</span> <span class="token operator">=</span> <span class="token number">666</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> numValue2<span class="token operator">:</span> <span class="token builtin">unknown</span> <span class="token operator">=</span> <span class="token string">"hahaha"</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编译成 JS</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> numValue1 <span class="token operator">=</span> <span class="token number">666</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> numValue2 <span class="token operator">=</span> <span class="token string">"hahaha"</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="void" tabindex="-1"><a class="header-anchor" href="#void"><span>void</span></a></h3>
<p>不存在：函数没有返回值的时候</p>
<div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">fun1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>编译成 JS</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">fun1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="undefined" tabindex="-1"><a class="header-anchor" href="#undefined"><span>undefined</span></a></h3>
<p>存在，但没有值；函数返回空值</p>
<div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">fun2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">undefined</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编译成 JS</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">fun2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="never" tabindex="-1"><a class="header-anchor" href="#never"><span>never</span></a></h3>
<p>不能停止</p>
<div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="token comment">// 一个从来不会有返回值的函数</span>
<span class="token comment">// 函数包含 while(true) {}</span>

<span class="token comment">// 一个总是会抛出错误的函数</span>
<span class="token keyword">function</span> <span class="token function">foo1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">never</span> <span class="token punctuation">{</span>
  <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">"Not Implemented"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编译成 JS</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">foo1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">"Not Implemented"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="array" tabindex="-1"><a class="header-anchor" href="#array"><span>Array</span></a></h3>
<p>数组 数组中可以存放任意类型的数据</p>
<div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">let</span> arr1<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">333</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> arr2<span class="token operator">:</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token operator">></span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> arr3 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">"2"</span><span class="token punctuation">,</span> <span class="token number">333</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 数组中可以存放任意类型的数据</span>

<span class="token keyword">let</span> arr4<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">"333"</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编译成 JS</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> arr1 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">333</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> arr2 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> arr3 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">"2"</span><span class="token punctuation">,</span> <span class="token number">333</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 数组中可以存放任意类型的数据</span>

<span class="token keyword">var</span> arr4 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">"333"</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h2 id="高级类型" tabindex="-1"><a class="header-anchor" href="#高级类型"><span>高级类型</span></a></h2>
<h3 id="union" tabindex="-1"><a class="header-anchor" href="#union"><span>union</span></a></h3>
<p>联合类型</p>
<div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="token comment">// 定义多种类型，中间用｜隔开</span>
<span class="token keyword">let</span> union1<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> union2<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token string">"test union"</span><span class="token punctuation">;</span>

<span class="token comment">// 固定取值类型</span>
<span class="token keyword">let</span> union3<span class="token operator">:</span> <span class="token number">1</span> <span class="token operator">|</span> <span class="token number">2</span> <span class="token operator">|</span> <span class="token number">3</span> <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编译成 JS</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 定义多种类型，中间用｜隔开</span>
<span class="token keyword">var</span> union1 <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> union2 <span class="token operator">=</span> <span class="token string">"test union"</span><span class="token punctuation">;</span>
<span class="token comment">// 固定取值类型</span>
<span class="token keyword">var</span> union3 <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="literal" tabindex="-1"><a class="header-anchor" href="#literal"><span>literal</span></a></h3>
<p>预定义类型</p>
<div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">let</span> literal<span class="token operator">:</span> <span class="token number">1</span> <span class="token operator">|</span> <span class="token string">"2"</span> <span class="token operator">|</span> <span class="token boolean">true</span> <span class="token operator">|</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>编译成 JS</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> literal<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="nullable" tabindex="-1"><a class="header-anchor" href="#nullable"><span>nullable</span></a></h3>
<p>可控类型</p>
</div></template>


