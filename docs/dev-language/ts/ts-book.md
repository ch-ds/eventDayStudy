# TS笔记

### keyof

遍历对象，获取其中的类型，最后会变成**联合类型**

```typescript
interface Person {
  name: string;
  age: number;
  address: string;
}

type PersonKeys = keyof Person; // "name" | "age" | "address"
```

> `keyof any` 相当于 `(number | string | symbol)`



### in

用于取**联合类型**

```typescript
type name = 'firstName' | 'lastName';
type TName = {
  [key in name]: string;
};
/*
type TName = {
	firstName: string,
	lastName: string
}
*/
```



### T[number]

可以获取 **元组类型**下的所有类型

```typescript
type Tuple = [string, number, boolean];
type ElementUnion = Tuple[number]; // "string" | "number" | "boolean"
```



### infer

可以理解为变量，类似 as

1. 在数组解构中使用

   ```typescript
   type First<T extends any[]> = T extends [infer first, ...infer other] ? first : never
   
   type first = First<[3, 2, 1]> // 3 
   ```

2. 在参数中使用

   ```typescript
   type MyParameters<T extends (...args: any[]) => any> = T extends (...any: infer S) => any ? S : any 
   ```

3. 在return值中使用

   ```typescript
   type MyReturnType<T> = T extends (...args: any) => infer Res ? Res : T
   ```


### Exclude

```typescript
type Result = Exclude<'a' | 'b' | 'c', 'a'> // 'b' | 'c'
```



### 泛型 ? nrver : any

在泛型中判断返回never会直接排除掉此次的field

```typescript
type MyExclude<T, U> = T extends U ? never : T;

type Type1 = 'a' | 'b' | 'c'
type Type2 = 'a'
type Test =  [Type1] extends [Type2] ? never : Type1; // 'a' | 'b' | 'c'
type Test2 = MyExclude<'a' | 'b' | 'c', 'a'>  // 'b' | 'c'
```



### PromiseLike

promise 是 PromiseLike 的 implement

```typescript
Promise extends PromiseLike<any> // true
```



### 数组解构[...a, ...b]

跟 ES6 一样，存在数组解构

```typescript
type Arr1 = ['number', 'string']
type Arr2 = ['string', true]
type Arr3 = [...Arr1, ...Arr2] // ['number', 'string', 'string', true]
```



### Parameters
`Parameters<T>`
转数组类型

```typescript
const foo = (arg1: string, arg2: number): void => {}

// [arg1: string, arg2: number]
type FunctionParamsType = Parameters<typeof foo>
```



### ReturnType

获取函数返回类型

```typescript
const fn = (v: boolean) => {
  if (v)
    return 1
  else
    return 2
}

type a = ReturnType<typeof fn> // 应推导出 "1 | 2"
```

