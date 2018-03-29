const express = require('express')
const mongoose = require('mongoose')

//连接mongo
const DB_URL = 'mongodb://localhost:27017/imooc'
mongoose.connect(DB_URL)

/*连接成功*/
mongoose.connection.on('connected',function(){
	console.log('mongo connect success');
})

/*连接异常*/
mongoose.connection.on('error',function (err) {
	console.log('Mongoose connetion error:'+ err);
})

/*连接断开*/
mongoose.connection.on('disconnected',function() {
	console.log("Mongoose connetion disconnected");
})

//类似于mysql的表 mongo里有文档、字段的概念
const User = mongoose.model('user',new mongoose.Schema({
	user: {type: String, require: true},
	age: {type: Number, require: true},
}))

//新增数据
/*User.create({
	user: 'guoguo',
	age: 14
},function (err, doc) {
	if (!err) {
		console.log(doc);
	}else {
		console.log(err);
	}
})*/

//删除age:18
/*User.remove({age: 18},function (err,doc) {
	console.log(doc);
})*/

//更新
/*User.update({'user':'xiaoming'},{'$set':{age:22}},function (err,doc) {
	console.log(doc);
})*/

//新建app
const app = express()

app.get('/',function(req,res) {
	res.send('<h1>Hello world</h1>')
})

app.get('/data',function(req,res) {

	//查找所有
	/*User.find({},function(err,doc){
		res.json(doc)
	})*/

	//查找部分 返回数组
	/*User.find({user:'xiaoming'},function (err,doc) {
		res.json(doc);
	})*/	
	//返回一条为json	
	User.findOne({user:'xiaoming'},function (err,doc) {
		res.json(doc);
	})
	//res.json({name:'imooc react app',type:'IT'})
})

app.listen(9093,function() {
	console.log('node app start at port 9093');
})