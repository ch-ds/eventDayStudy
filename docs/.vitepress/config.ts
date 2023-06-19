import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/eventDayStudy/',
  title: "每日一学",
  description: "记录个人学习文档",
  lang: "zh-CN",
  themeConfig: {
    logo: "/logo.png",
    search: {
      provider: 'local'
    },
    nav: [
      { text: '首页', link: '/' },
      {
        text: '开发语言', items: [
          {
            text: 'JS',
            link: '/dev-language/js/',
          },
          {
            text: 'TS',
            link: '/dev-language/ts/'
          },
          {
            text: 'Node',
            link: '/dev-language/node/'
          }
        ]
      },
      {
        text: '开发框架', items: [
          {
            text: 'Vue',
            link: '/dev-frame/vue/'
          },
          {
            text: 'uni app',
            link: '/dev-frame/uniapp/'
          },
        ]
      },
      {
        text: '开发工具',
        items: [
          {
            text: 'VS Code',
            link: '/dev-tools/vscode/'
          }
        ]
      },
      {
        text: '组件库',
        items: [
          {
            text: 'Ant Design Vue',
            link: '/dev-modules/ant-design-vue/'
          },
          {
            text: 'Element UI',
            link: '/dev-modules/element-ui/'
          },
          {
            text: 'Element Plus',
            link: '/dev-modules/element-plus/'
          }
        ]
      },
      {
        text: '升本', items: [
          {
            text: '高等数学一',
            link: '/upgrade/math-1/'
          },
          {
            text: '政治',
            link: '/upgrade/politics/'
          },
          {
            text: '英语',
            link: '/upgrade/english/'
          }
        ]
      },
      {
        text: '面试', items: [
          {
            text: '前端',
            link: '/interview/frontend'
          }
        ]
      },
    ],
    sidebar: {
      "/dev-language/": [
        {
          text: 'JS',
          items: [
            {
              text: '目录',
              link: '/dev-language/js/'
            }
          ]
        },
        {
          text: 'TS',
          items: [
            {
              text: '目录',
              link: '/dev-language/ts/'
            },
            {
              text: 'vue3引入element-plus的类型报错',
              link: '/dev-language/ts/vue3-import-element-plus-error'
            }
          ]
        },
        {
          text: 'Node',
          items: [
            {
              text: '目录',
              link: '/dev-language/node/'
            },
            {
              text: 'Node + koa + ts 搭建后端',
              link: '/dev-language/node/koa-ts-demo'
            }
          ]
        },
      ],
      "/dev-frame/": [
        {
          text: 'Vue',
          items: [
            {
              text: '目录',
              link: '/dev-frame/vue/'
            },
            {
              text: 'vue2实现第三方登录',
              link: '/dev-frame/vue/di-san-fang-login'
            },
            {
              text: 'vue2实现多表单合并提交',
              link: '/dev-frame/vue/many-form-submit'
            },
            {
              text: 'vue2封装自定义组件之禁止滚动',
              link: '/dev-frame/vue//direction-stop-scroll'
            },
            {
              text: 'vue3实现全局封装组件',
              link: '/dev-frame/vue/import-components'
            },
            {
              text: 'vue3无法修改第三方组件库样式',
              link: '/dev-frame/vue/no-update-modules-style'
            }
          ]
        },
        {
          text: 'uni app',
          items: [
            {
              text: '目录',
              link: '/dev-frame/uniapp/'
            },
            {
              text: 'uniapp1',
              link: '/dev-frame/uniapp/uniapp1'
            }
          ]
        },
      ],
      "/dev-tools/": [
        {
          text: 'VSCode',
          items: [
            {
              text: '目录',
              link: '/dev-tools/vscode/'
            },
            {
              text: 'vscode volar出现$event',
              link: '/dev-tools/vscode/show-event'
            }
          ]
        },
      ],
      "/dev-modules/": [
        {
          text: 'Element-UI',
          items: [
            {
              text: '目录',
              link: '/dev-modules/element-ui/'
            },
            {
              text: 'element-ui1',
              link: '/dev-modules/element-ui/element-ui1'
            }
          ]
        },
        {
          text: 'Element-Plus',
          items: [
            {
              text: '目录',
              link: '/dev-modules/element-plus/'
            }
          ]
        },
        {
          text: 'Ant-Design-Vue',
          items: [
            {
              text: '目录',
              link: '/dev-modules/ant-design-vue/'
            },
            {
              text: 'a-form-model使用原生form提交',
              link: '/dev-modules/ant-design-vue/native-form-submit'
            }
          ]
        },
      ],
      "/upgrade/": [
        {
          text: '高等数学一',
          items: [
            {
              text: '目录',
              link: '/upgrade/math-1/'
            }
          ]
        },
        {
          text: '政治',
          items: [
            {
              text: '目录',
              link: '/upgrade/politics/'
            }
          ]
        },
        {
          text: '英语',
          items: [
            {
              text: '目录',
              link: '/upgrade/english/'
            }
          ]
        },
      ],
      "/interview/": [
        {
          text: '前端',
          items: [
            {
              text: '目录',
              link: '/interview/frontend/'
            }
          ]
        },
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/ch-ds/eventDayStudy' }
    ],
    outline: {
      label: "本页目录"
    }
  }
})
