# 无法修改第三方组件库 el-dialog 样式

## 前言

在vue3中，在使用 `el-dialog` 组件时，遇到无法通过穿透等方法修改 `el-dialog` 样式的问题

**无论是使用 `::v-deep` 又或者是 `:deep()` 以及 `!important` 都无法解决**

## 出现BUG时的代码

``` vue
<template>
    <el-button @click="dialogVisible = !dialogVisible">打开弹窗</el-button>
    <el-dialog :title="props.title" v-model="dialogVisible">
        dialog
    </el-dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue'
let dialogVisible = ref<boolean>(false)

</script>

<style lang="scss" scoped>
:deep(.el-dialog) {
  margin-top: 10px !important;
}
</style>
```

## 解决后的代码

``` vue
<template>
    <div>
        <el-button @click="dialogVisible = !dialogVisible">打开弹窗</el-button>
        <el-dialog :title="props.title" v-model="dialogVisible">
            dialog
        </el-dialog>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
let dialogVisible = ref<boolean>(false)

</script>

<style lang="scss" scoped>
:deep(.el-dialog) {
  margin-top: 10px;
}
</style>
```

## 修复bug后的F12截图

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7bde765ea81d45d39b953d7ed31dc5a2~tplv-k3u1fbpfcp-watermark.image?)

## 原因

经常查找，找到无法使用**样式穿透**修改样式的原因是因为，当我们使用`scoped`的时候，在 html 的标签中会生成`data-v-xxx`的一个属性，**样式穿透**就是利用的这个属性生成的css;

而在 vue3 中，有一个改动，可以在`template`下不使用一个标签来包裹全部内容，而此时`el-dialog`在第一层的情况下就没有对应的`data-v-xxx`父级元素标签，所以样式穿透也就无效了.
