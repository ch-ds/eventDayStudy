# 使用node下载服务器图片到本地

## 安装插件
1. 下载 axios 方便读取图片
  `node install axios -s`
2. 在目录下创建一个 images 文件夹


## 代码

``` js
// 引入fs操作图片
const fs = require('fs');
// 获取路径
const {resolve} = require('path')
// 请求
const axios = require('axios');

// 图片地址
const arr = [
  "https://t9.baidu.com/it/u=2936288892,3479411077&fm=218&app=126&size=f242,150&n=0&f=GIF?s=C5E0B34272F481DA1CE1718A02007080&sec=1687885200&t=16d7780584c235d7c3e9ce8bcac56965"
]

// 下载
arr.forEach(item => {
  axios.get(item,{
      responseType:'arraybuffer'
  }).then(res => {
    fs.writeFile(resolve(__dirname, `./images/图片name.jpeg`), res.data, 'binary', (err)=>{
      if(err){
        // console.log('error',err);
      }
    })
  })
})
```