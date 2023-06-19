# vite使用https无法打开页面

## 报错时的代码

### vite.config.json
``` js
export default defineConfig({
  server: {
    host: 'local.cityline.com',
    port: 443,
    https: true
  }
})
```

### 报错问题
经过查阅文档，发现是vite需要配置证书，之前写vue2项目可能是vue-cli或者webpack默认配置了证书。

## 解决后的代码
``` js
import basicSsl from '@vitejs/plugin-basic-ssl'
export default defineConfig({
  server: {
    host: 'local.cityline.com',
    port: 443,
    https: true
  },
  plugins: [
    basicSsl()
  ]
})
```

> 需要下载 `@vitejs/plugin-basic-ssl` 插件