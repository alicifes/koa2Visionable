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

const WebSocketService = require('./service/web_socket_service')
//开启服务端的监听
// 当某个客户端开启,监听
WebSocketService.listen()