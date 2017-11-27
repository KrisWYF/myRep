var  connection = require("./conn.js");

var  CRUD = {
	insertData: function(sql, arr, callback) {
		connection.Client.query(sql, arr, function(error, result) {
			if (error) {
				console.log("数据插入失败");
				console.log(error)
				return;
			}
			console.log("插入成功");
			console.log(result)
			callback(result);
		})
	},
	selectData:function(sql,arr,callback) {
         connection.Client.query(sql,arr, function(error, result) {
			if (error) {
				console.log(error);
				return;
			}
			console.log("SEARCH SUCCESS");
			callback(result);
		})
	}
}

module.exports = CRUD;