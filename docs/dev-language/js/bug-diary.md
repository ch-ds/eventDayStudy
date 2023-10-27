# 踩坑日记

## URL
报错代码
```javascript
new URL('www.baidu.com')
// 错误原因是因为 url需要协议名，也就是http 或者 https
```

## Date 时区问题
```javascript
// 这样可以获取一个香港时区的date，可以将服务器的时间转成本地时区的，也可以将本地时区转成服务器时间
new Date(new Date().toLocaleString("en-US", {timeZone: "Asia/Hong_Kong",hour12: false}))
```