# 封装创建一个 node + koa + mysql + ts 的模板

## mysql
需要自行安装mysql，这里就不过多介绍了，主要是讲解node怎么连接mysql

### 初始化
1. 创建一个 love_cabin 的数据库
2. 在 love_cabin 下创建一个 admins 的表
    ![Alt text](/assets/images/node/image1.png)


## Node

### 初始化 package.json 文件
在控制台运行命令`npm init`  
在package.json下添加启动命令
``` json
"scripts": {
    "dev": "ts-node index.ts",
    "test": "jest"
}
```

### 下载需要用的插件及依赖
1. koa 相关的插件
  `yarn add koa koa-router @types/koa @types/koa-router`
2. ts 相关插件
  `yarn add ts-node typescript`
3. node 热更新插件
  `yarn add nodemon`
4. logs 日志插件
  `yarn add log4js`
5. mysql 插件
  `yarn add sequelize reflect-metadata sequelize-typescript`