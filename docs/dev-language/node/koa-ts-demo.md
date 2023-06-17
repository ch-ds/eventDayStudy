# node + koa + ts 搭建后端

## 初始化package.json文件

运行 `npm init` 初始化package.json
添加scripts

``` json
"scripts": {
    "dev": "ts-node index.ts",
    "test": "jest"
},
```

## 下载对应插件和依赖

`yarn add koa @types/koa`
`yarn add koa-router @types/koa-router`
`yarn add ts-node typescript`

## 创建app文件夹，并在里面创建controller文件夹以及router文件夹

### /app/controller/IndexController.ts

创建构造器，返回路由需要的对应数据

``` js
import { Context } from "koa";

class IndexController {
  async index(ctx: Context) {
    ctx.body = '123456'
  }
}

export default new IndexController()
```

### /app/router/index.ts

创建路由

``` js
import KoaRouter from 'koa-router'
import IndexController from '../controller/IndexController'
const router = new KoaRouter({
  // 路由前缀，可以不添加，添加了就需要在路由使用/admin访问
  prefix: '/admin'
})

router.get('/', IndexController.index)

export default router
```

### /app/index.ts

导出整个服务

``` js
import Koa from 'koa'
import router from './router'
import { Server } from 'http'
const app = new Koa()

app.use(router.routes())

/*
  单元测试
*/
const run = (port: number): Server => {
  return app.listen(port, () => {
    console.log(`server 已经启动了，测试域名是:http://127.0.0.1:${port}`)
  })
}

export default run
```

### /index.ts

最后在根目录下运行

``` js
import run from './app'
run(8888)
```

### 运行

通过package.json的scripts运行index.ts `npm run dev`

## 总结

上述操作完了之后，基本上就能运行，然后再浏览器使用 <http://127.0.0.1:8888/admin> 访问了，但是有一个问题，现在还不是热更新的，更新一次代码就需要重启一次项目。

## 使用热更新

**安装热更新`npm install -g nodemon`**

### nodemon.json

``` json
{
    // 代表监听app、utils下的所有ts文件 以及 根目录下的index.ts文件
    "watch": ["app/**/*.ts","./index.ts","utils/**/*.ts"],
    // 忽略文件
    "ignore": ["node_modules"],
    "exec": "ts-node index.ts",
    "ext": ".ts"
}
```

### package.json

修改scripts下的dev运行命令

``` json
"scripts": {
    "dev": "nodemon"
},
```

## 使用单元测试

添加依赖 `yarn add jest @types/jest ts-jest -D`

### /tests/index.test.ts

``` ts
describe('sum set', () => {
  it('sum 1', () => {
    
    expect(1+1).toEqual(2)

  })
})
```

## Jest-Runner插件

VSCode搜索 **Jest-Runner** 插件，之后直接在 **index.test.ts** 文件里点击 Run 运行
![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ac7280d0e2484d58bf4f8e2db2c275e7~tplv-k3u1fbpfcp-watermark.image?)
