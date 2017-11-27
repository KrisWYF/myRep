var express = require("express");
var  app = express();
var  router = require("./router.js");
var  bodyParser = require("body-parser");


app.use(bodyParser.urlencoded({
	extended:true
}))


app.use("/", router);

app.listen(3000,function(){
	console.log("运行在3000端口中")
})