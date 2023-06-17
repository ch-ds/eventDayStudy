# vscode volar出现$event

## 问题

vscode 更新 volar 之后，保存会自动出现 $event 的情况

![微信截图_20230301112107.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6a04387d48cf44138b82260aec37fed5~tplv-k3u1fbpfcp-watermark.image?)

## 解决方案

修改 vscode 的 Volar配置

![微信截图_20230301112227.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3c6ae0e19da14ad3b364d042f522c34b~tplv-k3u1fbpfcp-watermark.image?)
取消勾选即可

也可以在 vscode 的 setting.json文件加入以下配置
`"volar.inlayHints.eventArgumentInInlineHandlers": false,`
