# 记一次复制粘贴操作总结

先介绍可以实现的两种方式

1. `document.execCommand()`方法
2. 异步`Clipboard API`

文档来源：[阮一峰的网络日志](https://www.ruanyifeng.com/blog/2021/01/clipboard-api.html)



## document.execCommand()

### 方法

1. 复制

   `document.execCommand('copy')`

2. 粘贴

   `document.execCommand('paste')`

3. 剪切

   `document.execCommand('cut')`

#### 代码示例

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  
  <input class="copyInput" type="text" value="copyStr">
  <button class="copyBtn">复制</button>

  <br>

  <input class="cutInput" type="text" value="cutStr">
  <button class="cutBtn">剪切</button>
  
  <br>

  <input class="pasteInput" type="text">
  <button class="pasteBtn">粘贴</button>

  <script>

    const copyInput = document.querySelector('.copyInput')
    const copyBtn = document.querySelector('.copyBtn')
    
    const cutInput = document.querySelector('.cutInput')
    const cutBtn = document.querySelector('.cutBtn')
    
    const pasteInput = document.querySelector('.pasteInput')
    const pasteBtn = document.querySelector('.pasteBtn')

    // 复制
    copyBtn.onclick = () => {
      copyInput.select()
      document.execCommand('copy')
    }

    // 剪切
    cutBtn.onclick = () => {
      cutInput.select()
      document.execCommand('cut')
    }

    // 粘贴
    pasteBtn.onclick = () => {
      pasteInput.focus()
      const bool = document.execCommand('paste')
      if (bool) {
        alert('粘贴成功')
      } else {
        alert('粘贴失败')
      }
    }

  </script>

</body>
</html>
```

> 注意事项： 
>
> 1. 使用 copy 的时候可以搭配 input 的 select 来做，其次，copy要在交互事件里触发，否则可能会有报错；
> 2. 粘贴操作在谷歌最新浏览器因为涉及安全隐私，已经被禁用，必须用户自己开启，才能使用；
> 3. **三个方法都会返回一个 bool 值，可以进行判断来查看操作是否完成**

> **缺点**：该方法是同步操作，复制大量数据会有延迟，卡顿，提示框（是否允许该操作）等。



## 异步Clipboard API

### 初始化对象

```
const clipboardObj = navigator.clipboard
if (clipboardObj) {
	// 执行复制操作
} else {
	// 复制失败，浏览器不支持，没有该对象
}
```

当 `clipboardObj` 为 `undefined` 代表浏览器不支持该 API

### 方法

+ `readText()` 粘贴文本
+ `read()` 粘贴数据，可以是图片也可以是文本
+ `writeText()` 复制文本
+ `write()` 复制数据，可以是图片也可以是文本

### 示例代码

```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  
  <input class="copyInput" type="text" value="copyStr">
  <button class="copyBtn">复制</button>

  <br>

  <input class="pasteInput" type="text">
  <button class="pasteBtn">粘贴</button>

  <script>

    const copyInput = document.querySelector('.copyInput')
    const copyBtn = document.querySelector('.copyBtn')
    
    const pasteInput = document.querySelector('.pasteInput')
    const pasteBtn = document.querySelector('.pasteBtn')


    const clipboardObj = navigator.clipboard
    // 复制
    copyBtn.onclick = () => {
      try {
        clipboardObj.writeText(copyInput.value).then(res => {
          console.log('复制成功')
        })
      } catch {
        alert('复制失败')
      }
    }

    // 粘贴
    pasteBtn.onclick = () => {
      try {
        clipboardObj.readText().then(res => {
          pasteInput.value = res
        })
      } catch {
        alert('粘贴失败')
      }
    }

  </script>

</body>
</html>
```

