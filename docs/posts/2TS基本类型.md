---
date: 2024-05-07
category:
  - TS
tag:
  - TS
archive: false
article: true
---

# TS 基本类型二

类型适配(类型断言)、函数类型、对象类型、类、访问修饰符、模块、泛型

### 类型适配

通知 typescript 进行类型适配的过程就叫做类型断言

```typescript
let message: any;
message = "jack";
message.endsWith("k");

// 方式1
let ddd1 = (<string>message).endsWith("k");

// 方式2
let ddd2 = (message as string).endsWith("k");
```

> message 初始 any 类型，即使赋值为字符串，也是 any 类型，无法使用编辑器内置的联想功能，给出字符串相关的属性和方法提示信息。所以需要进行类型适配（<string\>message）或者（message as string）

编译成 JS

```javascript
var message;
message = "jack";
message.endsWith("k");

// 方式1
var ddd1 = message.endsWith("k");
// 方式2
var ddd2 = message.endsWith("k");
```

### 函数类型

function 基本用法与 es6 一样

> ! 不管是可选参数还是默认参数，都必须在参数列表末尾，按照从后往前的顺序进行排列

```typescript
// 1 参数绑定类型
let logFun1 = (message: string) => {
  console.log("logFun1==>", message);
};

logFun1("jack");

// 2 使用 ？可以省略参数，不传值默认为 undefined
let logFun2 = (message: string, code?: number) => {
  console.log("logFun2==>: ", message);
};

logFun2("hahahah");

// 3 设置参数默认值
let logFun3 = (message: string, code: number = 0) => {
  console.log("logFun3==>: ", message);
};

logFun3("dududud");
```

编译成 JS

```javascript
// 1 参数绑定类型
var logFun1 = function (message) {
  console.log("logFun1==>", message);
};
logFun1("jack");
// 2 使用 ？可以省略参数，不传值默认为 undefined
var logFun2 = function (message, code) {
  console.log("logFun2==>: ", message);
};
logFun2("hahahah");
// 3 设置参数默认值
var logFun3 = function (message, code) {
  if (code === void 0) {
    code = 0;
  }
  console.log("logFun3==>: ", message);
};
logFun3("dududud");
```

### 对象类型 object

1.  key to type 键类型对。编辑器会自动匹配类型，或者手动进行类型匹配
2.  不能使用 object 来笼统定义{}, 调用的时候会报错
3.  object 类型可以认为是 any 类型的一个子集

### 接口

interface 高内聚、低耦合

1. 功能相关的事务放在一个集合中形成一个模块，模块之间应该是相互独立的，保持低耦合的状态
2. 使用方式：给函数参数定义接口类型

```typescript
// 把所有相关的属性和方法放到一个集合中
interface Point {
  x: number;
  y: number;
}

let drwaPoint = (point: Point) => {
  console.log("x==>: ", point.x);
  console.log("y==>: ", point.y);
};

drwaPoint({ x: 10, y: 30 });
```

编译成 JS

```javascript
var drwaPoint = function (point) {
  console.log("x==>: ", point.x);
  console.log("y==>: ", point.y);
};
drwaPoint({ x: 10, y: 30 });
```

### 类

class

```typescript
// 1. 使用 class 关键字定义的称之为类。可以使用 implements 关键字，通过类来实现某个接口 interface
interface Nature {
  a: string;
}

class Tree implements Nature {
  a: string;
}

// 2. js中构造函数不能重载，一个类有且仅有一个 constructor。如果实例化的时候不知道传入的值，可以使用?（可选项），或者赋值默认值
class HelloClass {
  constructor() {
    return { hello: 1111 };
  }
}

// 3. 访问修饰符（public,private,protected）,在声明构造函数的同时，顺便完成成员变量的声明以及初始化
class TestClass {
  public nameValue = "";
  private ageValue = 1;
  protected weightValue = 1;

  public getAge = () => {
    console.log("nameValue==>: ", this.nameValue);
    console.log("ageValue==>: ", this.ageValue);
    console.log("weightValue==>: ", this.weightValue);
  };
}

let testVal1 = new TestClass();
console.log("testVal1==>: ", testVal1.nameValue);
// console.log("testVal12==>: ",testVal1.ageValue); // 私有的 只能在类中自身访问
// console.log("testVal13==>: ",testVal1.weightValue); // 保护的 只能在自身或者字类中访问
```

编译成 JS

```javascript
// 1. 使用 class 关键字定义的称之为类。可以使用 implements 关键字，通过类来实现某个接口 interface
var Tree = /** @class */ (function () {
  function Tree() {}
  return Tree;
})();

// 2. js中构造函数不能重载，一个类有且仅有一个 constructor。如果实例化的时候不知道传入的值，可以使用?（可选项），或者赋值默认值
var HelloClass = /** @class */ (function () {
  function HelloClass() {
    return { hello: 1111 };
  }
  return HelloClass;
})();

// 3. 访问修饰符（public,private,protected）,在声明构造函数的同时，顺便完成成员变量的声明以及初始化
var TestClass = /** @class */ (function () {
  function TestClass() {
    var _this = this;
    this.nameValue = "";
    this.ageValue = 1;
    this.weightValue = 1;
    this.getAge = function () {
      console.log("nameValue==>: ", _this.nameValue);
      console.log("ageValue==>: ", _this.ageValue);
      console.log("weightValue==>: ", _this.weightValue);
    };
  }
  return TestClass;
})();

var testVal1 = new TestClass();
console.log("testVal1==>: ", testVal1.nameValue);
// console.log("testVal12==>: ",testVal1.ageValue); // 私有的 只能在类中自身访问
// console.log("testVal13==>: ",testVal1.weightValue); // 保护的 只能在自身或者字类中访问
```

### 访问修饰符

public,private,protected

1. public 公有的（属性和方法默认是公有的）

2. private 私有的 只能在类中自身访问
   ① 私有变量一般以下划线开头来表示，例如： \_x
   ② set 和 get 处理私有变量（编译器版本需要在 es5 以上）tsc -t es5 xx.ts

3. protected 保护的 只能在自身或者字类中访问

### 模块

module

1. 一个文件可以理解为一个模块
2. 与 es6 中的 module 相似，有两种导入导出方式。模块内的代码需要 export 导出，然后其他文件中使用 import 导入

### 泛型

Generics

```typescript
// 1. 类型 + 泛型
let lastInArray1 = <T>(arr: Array<T>) => {
  return arr[arr.length - 1];
};

let lastInArray2 = <T>(arr: T[]) => {
  return arr[arr.length - 1];
};

const l1 = lastInArray1([1, 2, 3, 4]);
const l2 = lastInArray2(["a", "s"]);

console.log("l1==>: ", l1);
console.log("l2==>: ", l2);

// 2. 多泛型
let mackTuple = <T, Y>(x: T, y: Y) => [x, y];
const v1 = mackTuple(1, "eee");
console.log("v1==>: ", v1);
```

编译成 JS

```javascript
// 1. 类型 + 泛型
var lastInArray1 = function (arr) {
  return arr[arr.length - 1];
};
var lastInArray2 = function (arr) {
  return arr[arr.length - 1];
};
var l1 = lastInArray1([1, 2, 3, 4]);
var l2 = lastInArray2(["a", "s"]);
console.log("l1==>: ", l1);
console.log("l2==>: ", l2);

// 2. 多泛型
var mackTuple = function (x, y) {
  return [x, y];
};
var v1 = mackTuple(1, "eee");
console.log("v1==>: ", v1);
```
