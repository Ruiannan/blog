---
date: 2024-05-13
category:
  - TS
tag:
  - TS
archive: false
article: true
---

# TS 项目三

编译上下文、类型声明空间、模块、模块路径、命名空间

## 编译上下文

[TODO：待学习，熟悉基本配置]

编译上下文算是一个比较花哨的术语，可以用它来给文件分组，告诉 TypeScript 哪些文件是有效的，哪些是无效的。除了有效文件所携带信息外，编译上下文还包含有正在被使用的编译选项的信息。定义这种逻辑分组，一个比较好的方式是使用 tsconfig.json 文件。

## 类型声明空间

```typescript
class Foo {}
interface Bar {}
type Bas = {};
```

可以将 Foo、Bar、Bas 作为类型注解使用

```typescript
let foo: Foo;
let bar: Bar;
let bas: Bas;
```

> ! 尽管定义了 interface Bar，却不能把它当成一个变量使用，因为它没有定义在变量声明空间

```typescript
interface Bar2 {}
const bar2 = Bar2; // error “Bar2”仅表示类型，但在此处却作为值使用
```

变量声明空间
变量声明空间包含可用作变量的内容，Class Foo 提供了一个类型 Foo 到类型声明空间，此外它还提供了一个变量 Foo 到变量声明空间。

```typescript
const someVal = Foo;
const someOtherVal = 123;
```

同样一些 var 声明的变量，也只能在变量声明空间使用，不能用作类型注解

```typescript
const foo1 = 123;
let bar1: foo1; // error “foo1”表示值，但在此处用作类型
```

## 模块

### 全局模块

默认情况下在一个 ts 文件中定义变量，它处于全局命名空间中，毋庸置疑使用全局变量空间是危险的，因为它会成命名冲突，推荐使用文件模块。

### 文件模块

文件模块也叫外部模块。在 ts 文件的根级别位置含 import 或者 export，它会在本地创建一个作用域。

#### 文件模块详情

ES 模块语法

### 文件模块的导入导出

#### 使用 export 关键字导出一个变量和或类型

```typescript
export const someVal1 = 123;
export type someType1 = {
  foo: string;
};
```

另一种写法

```typescript
const someVal2 = 123;
type someType2 = {
  foo: string;
};
```

#### 重命名变量导出

```typescript
export { someVal2 as someValueData, someType2 };
```

#### 使用 import 关键字导入一个变量或者类型

```typescript
import {someVal,someType} = from "./foo"
```

#### 重命名导入

```typescript
import {someVal as someValueData,someType} = from "./foo"
```

#### 整体加载，即使用星号（\*）指定一个对象，所有输出值都加载到这个对象上面

```typescript
import * as foo from "./foo";
```

#### 只导入模块

```typescript
import "core-js"; // 一个普通的 polyfill 库，整包引入会导致编译后体积过大
```

#### 从其他模块导入后整体导出

```typescript
export * from "./foo";
```

#### 从其他模块导入后部分导出

```typescript
export { someVal } from "../foo";
```

#### 重命名从其他模块导入后部分导出

```typescript
export { someVal as someValueData } from "../foo";
```

#### 默认导出 (一个模块只能有一个默认导出)

```typescript
// 使用 export default
let someParams1: number;
export default someParams1 = 1;

export default function someFun() {}
export default class someClass {}
```

## 模块路径

相对模块路径 - 相对路径导入模块
动态查找模块 - 从 node_modules 下寻找模块直到根目录

## 命名空间

在确保创建的变量不会泄漏至全局命名空间时，基于文件模块使用时，ts 提供了 namespace 关键字来描述分组

```typescript
namespace Unility {
  export function log(msg: string) {
    console.log(msg);
  }

  export function error(msg: string) {
    console.log(msg);
  }
}

Unility.log("hahah");
Unility.error("error !!!!");
```

TS 的命名空间支持嵌套，可以在 Unility 命名空间下嵌套一个叫 Messaging 的空间命名
