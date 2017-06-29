var mongoose = require('mongoose')

var db = mongoose.connect('mongodb://localhost:27017/music')
// movies可替换其他数据库名字

// 测试连接数据库是否成功
db.connection.on('error', function() {
  console.log('连接失败')
})
db.connection.on('open', function() {
  console.log('连接成功')
})
