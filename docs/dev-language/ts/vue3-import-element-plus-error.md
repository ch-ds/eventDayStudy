# 解决使用 ts 时 vue3 引入 element-plus 的类型时报错问题

## 前言

今天写项目代码遇到一个问题，项目是vue3+vite+ts+element-plus；

### 问题产生原因

``` ts
import type { FormInstance } from 'element-plus'

const formRef = ref<FormInstance>()
```

上述代码使用element提供的一个类型，这个在以前项目也写过，没有任何问题；

今天在新项目引入的时候报错**模块 ""element-plus"" 没有导出的成员 "FormInstance"。你是想改用 "import FormInstance from "element-plus"" 吗?**

经查找，发现可能是ts版本和element-plus版本问题；

修改以下配置就可以

### tsconfig.json

``` json
"compilerOptions": {
    "moduleResolution": "node"
}
```
