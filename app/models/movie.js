var mongoose = require('mongoose');
var MovieSchema = require('../schemas/movie');

//使用mongoose的模型方法编译生成模型
var Movie = mongoose.model('Movie',MovieSchema);

//将模型构造函数导出
module.exports = Movie;