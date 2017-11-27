var  config = require("./config.js")
var connClient={
	Client:require("mysql").createConnection(config)
}

module.exports = connClient;