# 多表单组件合并提交

## 前言

之所以会有这个需求是因为遇到另一个问题，**表单数据多造成的卡顿**，为了解决这个问题，将一个表单分割成多个组件

## 子组件

内部定义一个 onClear 和 onSubmit 方法
onSubmit使用promise封装

``` js
onSubmit () {
  return new Promise((resolve, reject) => {
    this.$refs.accountFormRef.validate((valid, obj) => {
      if (valid) {
        resolve(this.accountForm)
      } else {
        reject(this.$refs[Object.keys(obj)[0]].$el)
        console.log('1')
      }
    })
  })
},
onClear () {
  this.$refs.accountFormRef.resetFields()
}
```

## 父组件

父组件使用 Promise.all 触发子组件方法

```  js
submit () {
  const validArr = [
    this.$refs.accountFormCompRef.onSubmit(),
    this.$refs.addressFormFormCompRef.onSubmit(),
    this.$refs.interestFormCompRef.onSubmit()]
  Promise.all(validArr).then(async resArr => {
    console.log(resArr)
  }).catch(dom => {
    console.log('catch')
    dom.focus()
  })
}
```
