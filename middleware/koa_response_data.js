//处理业务逻辑的中间件

const path = require('path')
const fileUtils = require('../utils/file_utils')

module.exports= async (ctx,next)=>{ 
    const url = ctx.request.url
    let filePath = url.replace('/api','')
    filePath = '../data'+filePath+'.json' 
    // 引入路径,这里引入的是绝对路径,因此需要使用path插件对...进行处理
    filePath = path.join(__dirname,filePath)//
    try{
        const ret = await fileUtils.getFileJsonData(filePath)
        ctx.response.body = ret
    }catch(error){
        const errorMsg = {
            message:'读取文件内容失败,文件内容不存在',
            status:404
        }
        ctx.response.body = JSON.stringify(errorMsg)
    }
    
    console.log(filePath)
    await next()
}
// 获取文件的内容
// 设置响应体 