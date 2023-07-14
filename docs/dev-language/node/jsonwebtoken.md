# node使用 jsonwebtoken 校验登录

## 前言
使用 token 来做鉴权，让没登陆的用户不可以操作某些接口

## 下载插件
`npm install jsonwebtoken`

## 编写 auth.ts 文件
token的创建、删除及校验
``` ts
import jwt, { JsonWebTokenError, JwtPayload, TokenExpiredError } from 'jsonwebtoken'
// jwt工具类
function sign(data: any) {
  return jwt.sign(data, '123456', { expiresIn: '30d' })
}

function verify(token: string): { admin: JwtPayload | string | null, error: TokenExpiredError | JsonWebTokenError | null } {
  try {
    const decoded = jwt.verify(token, '123456')
    return {
      admin: decoded,
      error: null
    }
  } catch (err) {
    return {
      admin: null,
      error: err as TokenExpiredError | JsonWebTokenError | null
    }
  }
}

export {
  sign,
  verify
}
```

## 使用方法
1. 登录完成的时候调用sign方法，获取token返回给前端
2. 之后获取token进行version校验，判断token是否有效
```ts
async login(ctx: Context) {
  const body = ctx.request.body as LoginType
  try {
    if (!body.username || !body.pwd) {
      throw new Error('请输入账号或密码')
    }
    const admin = await UserService.login(body)
    if (admin === null) {
      throw new Error('账号或密码错误')
    }
    console.log(admin)
    const token = sign({ admin })
    response.success(ctx, '登录成功', { token })
  } catch (err: any) {
    response.error(ctx, err.message, 404)
  }
}
```

```ts
function AuthMiddleware(ctx: Context, next: Next) {
  const token = ctx.headers['authorization']
  if (token) {
    const { error } = verify(token)
    if (error) {
      ctx.body = {
        status: 401,
        message: '登录已过期'
      }
      return null
    }
    return next()
  } else {
    ctx.body = {
      status: 403,
      message: '未登录'
    }
  }
}
```