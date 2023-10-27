import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/eventDayStudy/',
  lastUpdated: true,
  title: "每日一学",
  description: "记录个人学习文档",
  lang: "zh-CN",
  themeConfig: {
    lastUpdatedText: '上次更新时间',
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
          }, {
            text: 'Vite',
            link: '/dev-frame/vite/'
          }
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
          collapsed: true,
          text: 'JS',
          items: [
            {
              text: '目录',
              link: '/dev-language/js/'
            },
            {
              text: '可以暂停的函数',
              link: '/dev-language/js/pause-and-start-fn'
            },
            {
              text: '记一次复制粘贴操作总结',
              link: '/dev-language/js/copy-and-paste'
            },
            {
              text: '踩坑日记',
              link: '/dev-language/js/bug-diary'
            },
          ]
        },
        {
          collapsed: true,
          text: 'TS',
          items: [
            {
              text: '目录',
              link: '/dev-language/ts/'
            },
            {
              text: '笔记',
              link: '/dev-language/ts/ts-book'
            },
            {
              text: 'vue3引入element-plus的类型报错',
              link: '/dev-language/ts/vue3-import-element-plus-error'
            }
          ]
        },
        {
          collapsed: true,
          text: 'Node',
          items: [
            {
              text: '目录',
              link: '/dev-language/node/'
            },
            {
              text: 'Node + koa + ts 搭建后端',
              link: '/dev-language/node/koa-ts-demo'
            },
            {
              text: '访问mysql的后端',
              link: '/dev-language/node/koa-ts-mysql-demo'
            },
            {
              text: '使用node下载服务器图片到本地',
              link: '/dev-language/node/node-upload-image-to-localhost'
            },{
              text: 'node使用 jsonwebtoken 校验登录',
              link: '/dev-language/node/jsonwebtoken'
            }
          ]
        },
      ],
      "/dev-frame/": [
        {
          collapsed: true,
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
          collapsed: true,
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
        {
          collapsed: true,
          text: 'Vite',
          items: [
            {
              text: '目录',
              link: '/dev-frame/vite/'
            },
            {
              text: 'vite使用https无法打开页面',
              link: '/dev-frame/vite/server-https'
            }
          ]
        }
      ],
      "/dev-tools/": [
        {
          collapsed: true,
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
          collapsed: true,
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
          collapsed: true,
          text: 'Element-Plus',
          items: [
            {
              text: '目录',
              link: '/dev-modules/element-plus/'
            }
          ]
        },
        {
          collapsed: true,
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
          collapsed: true,
          text: '高等数学一',
          items: [
            {
              text: '目录',
              link: '/upgrade/math-1/'
            }
          ]
        },
        {
          collapsed: true,
          text: '政治',
          items: [
            {
              text: '目录',
              link: '/upgrade/politics/'
            }
          ]
        },
        {
          collapsed: true,
          text: '英语',
          items: [
            {
              text: '目录',
              link: '/upgrade/english/'
            },
            {
              text: '工作英文交流笔记',
              link: '/upgrade/english/work-eng'
            }
          ]
        },
      ],
      "/interview/": [
        {
          collapsed: true,
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
