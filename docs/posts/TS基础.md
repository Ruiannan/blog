---
date: 2024-05-06
category:
  - TS
tag:
  - TS
archive: false
article: true
---

# TS 类型

## 基础类型

### 数字类型

数字类型 number 可表示整数、浮点数、正负数

```typescript
let num1: number = 10;

let num2: number = 10.56;

let num3: number = -10;
```

编译成 JS

```javascript
// 数字类型 number 可表示整数、浮点数、正负数
var num1 = 10;

var num2 = 10.56;

var num3 = -10;
```

### 字符串

字符串 string

```typescript
let str1: string = "hahahha";
```

编译成 JS

```javascript
var str1 = "hahahha";
```

### 布尔类型

布尔类型 booler 可以自动映射类型也可以手动映射类型

```typescript
let bool1 = true;

let bool2: boolean = false;
```

编译成 JS

```javascript
var bool1 = true;

var bool2 = false;
```

### 枚举类型

Enum

```typescript
enum Color {
  pink,
  red,
  blue,
  DarkRed = 6,
  DarkGreen = 8,
}

console.log("colorIndex==>: ", Color.pink); // 0
console.log("colorValue==>: ", Color[0]); // pink
```

编译成 JS

```javascript
var Color;
(function (Color) {
  Color[(Color["pink"] = 0)] = "pink";
  Color[(Color["red"] = 1)] = "red";
  Color[(Color["blue"] = 2)] = "blue";
  Color[(Color["DarkRed"] = 6)] = "DarkRed";
  Color[(Color["DarkGreen"] = 8)] = "DarkGreen";
})(Color || (Color = {}));

console.log("colorIndex==>: ", Color.pink);
console.log("colorValue==>: ", Color[0]);
```

- 改变与数字枚举关联的数字

  > 默认情况第一个枚举值是 0

  ```typescript
  // 默认情况第一个枚举值是 0
  enum DarkColor {
    Darblue = 3,
    DarkRed,
    DarkGreen,
  }

  console.log("colorValue==>: ", DarkColor.Darblue); // 3
  ```

  编译成 JS

  ```javascript
  var DarkColor;
  (function (DarkColor) {
    DarkColor[(DarkColor["Darblue"] = 3)] = "Darblue";
    DarkColor[(DarkColor["DarkRed"] = 4)] = "DarkRed";
    DarkColor[(DarkColor["DarkGreen"] = 5)] = "DarkGreen";
  })(DarkColor || (DarkColor = {}));

  console.log("colorValue==>: ", DarkColor.Darblue);
  ```

- 字符串枚举

  ```typescript
  export enum TypeEnum {
    UNKNOWN = "",
    PASSPORT_VISA = "passport_visa",
    PASSPORT = "passport",
  }

  console.log("字符串枚举==>: ", TypeEnum.PASSPORT_VISA); // passport_visa
  ```

  编译成 JS

  ```javascript
  var TypeEnum;
  (function (TypeEnum) {
    TypeEnum["UNKNOWN"] = "";
    TypeEnum["PASSPORT_VISA"] = "passport_visa";
    TypeEnum["PASSPORT"] = "passport";
  })(TypeEnum || (exports.TypeEnum = TypeEnum = {}));

  console.log("字符串枚举==>: ", TypeEnum.PASSPORT_VISA);
  ```

### any

任意类型

```typescript
let temp1: any = "1111";

let temp2: any = 222;
```

编译成 JS

```javascript
var temp1 = "1111";

var temp2 = 222;
```

### unkown

未知类型 不保证类型，但是能保证类型安全

```typescript
let numValue1: unknown = 666;

let numValue2: unknown = "hahaha";
```

编译成 JS

```javascript
var numValue1 = 666;

var numValue2 = "hahaha";
```

### void

不存在：函数没有返回值的时候

```typescript
function fun1(): void {}
```

编译成 JS

```javascript
function fun1() {}
```

### undefined

存在，但没有值；函数返回空值

```typescript
function fun2(): undefined {
  return;
}
```

编译成 JS

```javascript
function fun2() {
  return;
}
```

### never

不能停止

```typescript
// 一个从来不会有返回值的函数
// 函数包含 while(true) {}

// 一个总是会抛出错误的函数
function foo1(): never {
  throw new Error("Not Implemented");
}
```

编译成 JS

```javascript
function foo1() {
  throw new Error("Not Implemented");
}
```

### Array

数组 数组中可以存放任意类型的数据

```typescript
let arr1: number[] = [1, 2, 333];

let arr2: Array<number> = [1, 2, 3];

let arr3 = [1, "2", 333, true]; // 数组中可以存放任意类型的数据

let arr4: any[] = [1, 2, "333", false];
```

编译成 JS

```javascript
var arr1 = [1, 2, 333];

var arr2 = [1, 2, 3];

var arr3 = [1, "2", 333, true]; // 数组中可以存放任意类型的数据

var arr4 = [1, 2, "333", false];
```

---

## 高级类型

### union

联合类型

```typescript
// 定义多种类型，中间用｜隔开
let union1: string | number = 1;

let union2: string | number = "test union";

// 固定取值类型
let union3: 1 | 2 | 3 = 3;
```

编译成 JS

```javascript
// 定义多种类型，中间用｜隔开
var union1 = 1;
var union2 = "test union";
// 固定取值类型
var union3 = 3;
```

### literal

预定义类型

```typescript
let literal: 1 | "2" | true | [1, 2, 3, 4];
```

编译成 JS

```javascript
var literal;
```

### nullable

可控类型
