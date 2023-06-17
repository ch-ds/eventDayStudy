# facebook google第三方登录

 除了Vue，在正常html也可以这么使用，需要稍微修改一下即可，直接上代码

 以下不包含申请appId clientId的过程

## 编写utils.js文件

 主要实现以下几个功能：

   1. 封装sdk引入
   2. 调用facebook弹窗登录
   3. 获取facebook登录信息

### facebook sdk引入

``` js
// callback可以在引入facebook之后做一些事情，比如在没有引入facebook sdk之前，button是loading状态
export function initFbSDK (callback) {
  if (!window.FB) {
    window.fbAsyncInit = function () {
      window.FB.init({
        appId: '',
        cookie: true,
        xfbml: true,
        version: 'v16.0'
      })
    }
    // 创建script标签引入facebook得sdk
    const script = document.createElement('script')
    script.src = 'https://connect.facebook.net/en_US/sdk.js'
    script.async = true
    script.defer = true
    script.onload = () => {
      callback()
    }
    document.head.appendChild(script)
  } else {
    callback()
  }
}
```

### facebook弹窗登录

``` js
export function FBLogin () {
  return new Promise((resolve, reject) => {
    if (!window.FB) reject(new Error('facebook sdk未加载完'))
    window.FB.login((LoginRes) => {
      if (LoginRes.status === 'connected') {
        resolve(LoginRes)
      } else {
        reject(new Error(LoginRes))
      }
    }, { scope: 'public_profile,email' })
  })
}
```

### facebook获取个人信息

``` js
// fields可以自行修改，api接收形式如下 fields=email,xx,xx
// 我这里fields是一个array
export function FBGetProfile (fields) {
    return new Promise((resolve, reject) => {
        window.FB.api(`/me?fields=${fields.join(',')}`, (profile) => {
          if (profile.error) {
            reject(new Error('get profile Error'))
          } else {
            resolve(profile)
          }
        })
    })
}
```

### 获取google SDK

``` js
export function initGoogleSDK (callback) {
  if (!window.google) {
    const script = document.createElement('script')
    script.src = 'https://accounts.google.com/gsi/client'
    script.async = true
    script.defer = true
    script.onload = () => {
      callback()
    }
    document.body.appendChild(script)
  } else {
    callback()
  }
}
```

## Vue简单实现

这里有一个简单版的实现

``` vue
<template>
    <div>
        <!-- facebook -->
        <button
          class="facebook-login"
          @click="handleClickFbLogin"
        >
          facebook登录
        </button>
        
        <!-- google -->
        <div id="g_id_signIn" ref="signInButton"></div>
    </div>
</template>

<script>
import { initFbSDK, FBLogin, initGoogleSDK } from '@/utils/utils'

export default {
  mounted () {
    /* 初始化facebook按钮 */
    initFbSDK()
    initGoogleSDK()
  },
  methods: {
    async handleClickFbLogin () {
      const res = await FBLogin().catch((err) => {
        /* 
            1. fb的登录失败 
            2. sdk未加载完成，可以使用loading使sdk未加载完之前禁止点击button来约束这个情况
        */
        console.log(err)
      })
      if (res) {
        // 这里已经获取facebook token了
        console.log(res)
        // ....调用后端api进行登录
        this.fbLogin()
      }
    },
    async fbLogin () {
      // ...调用后端api
    },
    // 初始化google配置
    initGoogle () {
      window.google.accounts.id.initialize({
        client_id: '.....',
        ux_mode: 'popup',
        // 登录成功后的回调
        callback: this.googleLoginCallback
      })
      this.initGoogleBtn()
    },
    // 初始化按钮
    initGoogleBtn () {
      if (window.google) {
        window.google.accounts.id.renderButton(
          this.$refs.signInButton,
          {
            prompt_parent_id: 'google-signin-button',
            theme: 'outline',
            logo_alignment: 'center',
            width: '400'
          }
        )
      }
    },
    // google登录回调
    async googleLoginCallback (res) {
      console.log(res.credential)
      // 调用api进行登录...
    },
  },
}
</script>
```

## 总结

 整体来说比较简单，还有几个可以优化的点：

 1. 按钮单独封装成一个vue组件
 2. 可以给对应的button添加一个loading动画，这样在sdk加载完之前不允许用户进行点击，减少无效的报错
