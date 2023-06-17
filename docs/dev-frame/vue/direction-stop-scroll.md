# 自定义指令之禁止穿透滑动

## 需求

当我们自定义 dialog 弹窗时，会出现一个问题，就是滑动时内部弹窗时，可以穿透外部body的滑动；
目前的需求是：弹窗内部可以滑动，并且禁止body滑动，我将这个操作封装成direction，只需要在自定义dialog使用指令禁用外部弹窗即可；

## 封装自定义指令

+ 创建一个文件夹：目录如下：

  ``` text
  ├─ direction
  |  ├─ body-fixed
  |     └─index.js
  |  ├─ index.js
  |  └─ main.js
  ```

+ 先在 main.js 引入 direction 并使用

  ``` js
  import directions from './direction'
  Vue.use(directions)
  ```

+ 在 direction/index.js 中导入所有的自定义指令并使用install导出

  ``` js
  import fixed from './body-fixed'

  const directions = {
      fixed
  }

  export default {
      install (Vue) {
          Object.keys(directions).forEach(key => {
              Vue.direction(key, directions[key])
          })
      }
  }
  ```

+ 封装自定义指令主要代码 'direction/body-fixed/index.js'

  ``` js
  // 首先定义一个禁止冒泡的函数
  function stopPropagation (e) {
      e.stopPropagation()
  }

  // 导出自定义指令
  export default {
      update: function (el, { oldValue, value }) {
          // value 为 true 即显示dialog，此时就需要禁止body滚动
          if (value) {
              const scrollTop = document.body.scrollTop || document.documentElement.scrollTop
              const style = `position:fixed;top:-${scrollTop}px;overflow:hidden;`
              document.body.style = style
              el.addEventListener('scroll', stopPropagation)
          } else if (!value && oldValue) {
              // 这里判断 oldValue 主要是为了确保是从打开dialog到关闭dialog才操作，
              // 因为update只要组件内部元素改变都会触发
              
              const style = 'position:static;top:auto;overflow:auto;'
              const top = document.body.style.top
              document.body.style = style
              document.body.scrollTop = document.documentElement.scrollTop = Math.abs(Number.parseFloat(top))
              el.removeEventListener('scroll', stopPropagation)
          }
      }
  }
  ```

## 结尾

之所以这样封装是考虑到几方面

  1. 使用 body 的 `overflow:hidden` 属性，在 mobile 上是没有效果的
  2. 监听 body 的 scroll 事件，执行 `e.preventDefault` 禁止默认事件会导致内部无法滚动
  3. 直接使用 fixed 布局，也会出现一个小问题，mobile 可以向上滑动直接触发刷新页面
