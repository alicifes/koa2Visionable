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

const WebSocket = require('ws')
//创建WebSocket的服务端对象,绑定的端口号是9998
const wss =  new WebSocket.Server({
    port:9998
})
//对客户端的连接事件进行监听
//clien:代表的是客户端的连接socket对象
wss.on('connection',client=>{
    console.log("有客户端连接成功了...");
    // 对客户端的连接对象进行message事件的监听
    // msg:由客户端发给服务端的数据
    client.on('message',msg=>{
        console.log('客户端发送数据给服务端了:'+msg);
        // 由服务端往客户端发送数据
        client.send('hellow scoket from wss')
    })
})