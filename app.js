//1.创建koa实例对象
const Koa = require('koa')
const app = new Koa()
//2.绑定中间键
//绑定第一层中间键
const respDurationMiddleware = require('./middleware/koa_response_duration')
app.use(respDurationMiddleware)
// 绑定第二层中间件
const respHeaderMiddleware = require('./middleware/koa_response_header')
app.use(respHeaderMiddleware)
//绑定第三层中间件
const respDataMiddleware = require('./middleware/koa_response_data')
app.use(respDataMiddleware)

//3.绑定端口号 8888
app.listen(8888)