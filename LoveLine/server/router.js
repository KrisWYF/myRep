var  express = require("express");
var router = express.Router();
var crud = require("./change.js");


router.all("*", function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
	res.header("X-Powered-By", ' 3.2.1');
	res.header("Content-Type", "application/json;charset=utf-8");
	next();
});




router.post("/create",function(req,res){
	console.log(req)
  	var username = req.body.username;
	var password = req.body.password;
	console.log(username)
	// 给方法的参数准备好
	// var sql = "insert into user values (null,?,?)";
	var sql = "insert into user values (null,?,?)";
	var arr = [username,password];
	console.log(arr);
	crud.insertData(sql, arr, function(result) {
		if (result.affectedRows) {

			res.json(200, {
				"msg": "success",
				"code": 100
			})
		}else{
			// code:100成功  code：200失败
			res.send(200, {
				"msg": "error",
				"code": 200
			})
		}
	})
})

router.post("/select", function(req,res) {
	// 用户传递的数据
	var uname = req.body.username;
	var sql = "select * from user where username = ?";
	var loginArr = [uname];
	crud.selectData(sql, loginArr, function(result) {
		if (result) {
			res.send(result)
			console.log(result)
		} else {
			res.send({
				"msg": "select失败"
			})
		}
	})
	
})

module.exports = router;