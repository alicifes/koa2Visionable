const fs = require('fs')
// 读取文件的工具方法
module.exports.getFileJsonData = (filePath)=>{
    // 根据文件路径读取内容
    // 因为是异步
    return new Promise((resolve,reject)=>{
        fs.readFile(filePath,'utf-8',(error,data)=>{
            if(error){
                //读取文件失败
                reject(error)
            }else{
                // 读取文件成功
                resolve(data)
            }
        })  
    })

}