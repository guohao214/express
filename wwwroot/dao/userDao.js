var mysql = require('mysql')
var conf = require('../conf/db')
var sql = require('./curd')

var pool = mysql.createPool(conf.mysql)

var resposne = function (res, ret) {
	if(typeof ret === 'undefined') {
		res.json({
			code:'1',
			msg: '操作失败'
		});
	} else {
		res.json(ret);
	}
};


module.exports = {
	add: function(req, res, next) {
		pool.getConnection(function(err, conn) {
			var param = req.query || req.params

			 conn.query(sql.insert, [param.name, param.age], function(err, result) {
			 	if (result) {
			 		resposne(res, {
						code: 200,
						msg:'增加成功'
			 		})
			 	}
			 	conn.release()
			 })
		})
	},
	queryAll: function(req, res, next) {
		pool.getConnection(function(err, conn) {
			var param = req.query || req.params

			 conn.query(sql.queryAll, [param.id], function(err, result) {
			 	console.log(result)
			 	if (result)
			 		resposne(res, result)
			 		conn.release()
			 })
		})
	},
	deleteById: function(req, res, next) {
		pool.getConnection(function(err, conn) {
			var param = req.query || req.params

			 conn.query(sql.deleteById, [param.id], function(err, result) {
			 	console.log(result)
			 	if (result.affectedRows > 0)
			 		resposne(res, {
						code: 200,
						msg:'删除成功'
			 		})

			 	conn.release()
			 })
		})
	},
	updateUser: function(req, res, next) {
		pool.getConnection(function(err, conn) {

			var param = req.body || req.params
			 conn.query(sql.updateById, [param.name, param.age, param.id], function(err, result) {
			 	console.log(result)
			 	if (result.affectedRows > 0)
			 		resposne(res, {
						code: 200,
						msg:'修改成功'
			 		})
			 	else
			 		resposne(res, {
			 			code: 199,
			 			msg: result.message || '修改失败'
			 		})

			 	conn.release()
			 })
		})
	}
}
