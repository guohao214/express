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
	delete: function() {

	}
}
