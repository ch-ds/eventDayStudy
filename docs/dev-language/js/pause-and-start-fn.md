# 一个可以暂停与开始的函数

## 代码
``` js
function printTime (str) { console.log(str,'--当前时间:', Date.now() - time) }
function pausePrint (delay, str) {
  return new Promise((r) => {
    setTimeout(() => {
      console.log(Date.now() - time,str)
      r(str)
    }, delay)
  })
}

async function* consoleNum() {
  yield
  printTime('1')
  yield
  printTime('2')
  yield
  console.log('函数持续执行3秒')
  yield
  await pausePrint(3000, '我是在持续执行3秒的函数')
  yield
  printTime('4')
  yield
  printTime('5')
}

let time = Date.now()
const timerMap = new Map()
timerMap.set('timerFn1', {
  delay: 1000,
  fn: consoleNum(),
  handler: async function() {
    let _next = await this.fn.next()
    while(!_next.done && !this.pause) {
      _next = await this.fn.next()
    }
  },
  pause: false,
})

for(let [k,value] of timerMap.entries()) {
  value.handler()
}

setTimeout(() => {
  const timerFn = timerMap.get('timerFn1')
  timerFn.pause = true
  printTime('停止执行,0.5s后继续执行')
  setTimeout(() => {
    printTime('开始执行')
    timerFn.pause = false
    timerFn.handler()
  }, 500)
},1000)
```