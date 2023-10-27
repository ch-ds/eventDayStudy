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



