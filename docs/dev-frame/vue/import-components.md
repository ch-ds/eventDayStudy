# Vue3全局封装组件（按需导入及全部导入）

## 前言

全局封装自定义组件
version: vue@3 + ts
可以做到 全部导入 以及 按需导入 的全局注册

## 目录

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/bd1517856b9d447281c5b01ee437e537~tplv-k3u1fbpfcp-watermark.image?)

## 步骤一：创建目录

首先创建文件 src 目录下

+ component: 用来存放所有的组件
  + trend
    + src
      + index.vue
    + index.ts
+ index.ts

## 步骤二：写ts文件封装

+ 首先是在 trend -> index.ts 导出全局注册组件的 install 函数

``` js
import { App } from 'vue'
import trend from './src/index.vue

export default {
    install(app:App) {
        app.component('m-trend', trend)
    }
}
```

> 这样写的作用是，在trend中单独导出注册某个组件，可以直接使用use注册，也就可以做到 按需导入

+ 紧接着在 component -> index.ts 中注册组件

``` js
import { App } from 'vue'
import trend from './trend'

const components = [
  trend,
]

/* 让这个组件可以通过use的形式使用 */
export default {
  install(app: App) {
    components.forEach(item => {
      app.use(item)
    })
  }
}
```

> 这样写的作用是，在 component 的 index.ts 中，统一注册组件，这样只需要use这个文件，就可以注册所有组件，也就是全部导入

## 全局导入的情况，在 main.ts 引入并注册即可

``` js
import mUI from './components'

app.use(mUI)
```

## 按需导入

### 第一种，全局按需导入

``` js
import trend from './components/trend'

app.use(trend)
```

### 第二种，在需要使用的.vue地方导入并且直接使用即可

``` vue
<template>
  <trend></trend>
</template>
<script setup>
  import trend from './components/trend'
</script>
```
