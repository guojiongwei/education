/*
 * @Author: your name
 * @Date: 2019-09-01 10:42:54
 * @LastEditTime: 2020-02-29 22:24:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /proxy/option.js
 */
const express = require('express');
const proxy = require('http-proxy-middleware');
const app = express();
var history = require('connect-history-api-fallback');
console.log(process.argv)
app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});
// http://bj.dingfengzhuanli.com/api/baojian/upload
// app.use('/api', proxy({
//   target: 'http://bj.dingfengzhuanli.com',
//   // pathRewrite: {'^/api' : '/'},
//   changeOrigin: true
// }))
app.get('/getVersion', (req, res) => {
  res.send({
    code: 200,
    msg: '请求成功',
    data: {
      version: '1.0.6'
    }
  })
})
app.use(history());
app.use(express.static('./dist'));
// 监听端口
app.listen('4001','0.0.0.0', () => {
 console.log(`server running localhost:4001`);
});