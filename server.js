const http = require('http');
const static = require('node-static');
const fs = require('fs');
const port =  process.env.PORT || 8080;;

// const server = http.createServer(function(req, res) {
//   	req.addListener('end', () function(){
// 		file.serve(req, res)
// 	}).resume();
// });
var hostname = '127.0.0.1';
var directory = __dirname + "/."
var file = new static.Server(directory);
const server = http.createServer(
	function(request, response) {
		console.log(directory);
		request.addListener('end', function(){
			console.log("there");
			file.serve(request, response);
		}).resume();
	}
);
server.listen(port, hostname, function(){
  console.log(`Server running at http://${hostname}:${port}`);
});


/***********************************************/
/*       Set up the web socket server         */

var io = require('socket.io').listen(server);
io.on('connection', function(socket) {
	console.log("get a connection");
});
