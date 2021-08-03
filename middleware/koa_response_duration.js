//消耗时长的中间件

module.exports= async(ctx,next)=>{
    //记录开始时间
    const startTime = Date.now()
    await next()
    const end = Date.now()
    //获得响应时间
    const duration = end-startTime
    // ctx.set 设置响应头
    ctx.set('x-Response-Time',duration+'ms')
} 