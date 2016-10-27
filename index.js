var server = require("./app");
var router = require("./router");

server.start(router.route);