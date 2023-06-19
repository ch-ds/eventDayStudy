# 实现原生form提交

## 需求

在旧项目中，有些form提交并不支持 ajax 的提交方式，而原生form校验等做起来太费时，所以就有了这一次记录，防止无效的百度，直接上代码

> 代码使用的是 ant-design-vue@1 版本

## template

``` html
<a-form-model
  action="/ResetPassword.do"
  method="POST"
  ref="formRef"
  :model="form"
  :rules="formRules"
  layout="vertical"
  hideRequiredMark
>
  <a-form-model-item prop="password" label="密码">
    <a-input
      name="password"
      type="password"
      ref="password"
      v-model.trim="form.password"
    />
  </a-form-model-item>
  <a-form-model-item prop="confirmPassword" label="确认密码">
    <a-input
      name="confirmPassword"
      type="password"
      ref="confirmPassword"
      v-model.trim="form.confirmPassword"
    />
  </a-form-model-item>
  <a-form-model-item>
    <a-button
      class="resetPsd-button"
      :loading="loading"
      @click="submit"
      >{{ $t('resetPsd.desc.submit') }}</a-button
    >
  </a-form-model-item>
</a-form-model>
```

## data

``` js
data() {
    const passwordValid = (rule, value, callback) => {
      if (!value) {
        callback(new Error(this.$t('register.error.password.empty')))
      } else if (!/^[A-Za-z0-9]{8,20}$/.test(value)) {
        callback(new Error(this.$t('register.error.password.invalidLength')))
      } else {
        callback()
      }
      if (this.form.confirmPassword) {
        this.$refs.formRef.validateField('confirmPassword')
      }
    }
    const confirmPasswordValid = (rule, value, callback) => {
      if (value && value !== this.form.password) {
        callback(new Error(this.$t('register.error.password.mismatch')))
      } else {
        callback()
      }
    }
    return {
        form: {
            password: '',
            confirmPassword: ''
        },
        formRules: {
            password: [{ validator: passwordValid, trigger: 'change' }],
            confirmPassword: [{ validator: confirmPasswordValid, trigger: 'change' }]
        }
    }
}
```

## methods

``` js
submit () {
  this.$refs.formRef.validate(async (valid, obj) => {
    if (valid) {
      this.$refs.formRef.$el.submit()
    } else {
      // 聚焦到报错的input上，无障碍功能
      this.$refs[Object.keys(obj)[0]].focus()
    }
  })
}
```

## 总结

1. 首先将 action 和 method 绑定到 form 元素上，
2. 接着将需要上传的数据，通过 name 属性进行绑定，
3. 然后通过 `$refs.$el` 获取元素，
4. 之后使用 form 自带的 submit 方法进行提交；
