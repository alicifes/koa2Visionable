//设置响应头的中间件
module.exports = async (ctx,next)=>{
    const contentType = "application/json;charset=utf-8"
    ctx.set('Content-Type',contentType)   //设置响应头
    // ctx.response.body = '{"success":true}' //设置响应体
    ctx.set("Access-Control-Allow-Origin","*")   //允许跨域,设置允许跨域的响应头
    ctx.set("Access-Control-Allow-Methods","OPPTIONS,GET,PUT,POST,DELETE")
    await next()
}