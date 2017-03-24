// HTTP PORTION

var http = require('http');
var fs = require('fs');
var httpServer = http.createServer(requestHandler);
var url = require('url');
httpServer.listen(8080);

function requestHandler(req, res) {

	var parsedUrl = url.parse(req.url);
	console.log("The Request is: " + parsedUrl.pathname);
		
	fs.readFile(__dirname + parsedUrl.pathname, 
		function (err, data) {
			if (err) {
				res.writeHead(500);
				return res.end('Error loading ' + parsedUrl.pathname);
			}
			res.writeHead(200);
			res.end(data);
  		}
  	);
  	
}


// WEBSOCKET PORTION

var io = require('socket.io').listen(httpServer);

io.sockets.on('connection', 

	function (socket) {
	
		console.log("We have a new client: " + socket.id);
		
		///MY SOCKET EVENTS HERE

		socket.on('alph', function(data){
			// console.log(data);

		var	alpha = data;


			socket.broadcast.emit('alphaD', alpha);

		});

		socket.on('button1', function(){
			console.log('wrks1');
			socket.broadcast.emit('button1');
		})
		socket.on('button2', function(){
			console.log('wrks2');
			socket.broadcast.emit('button2');
		})
		
		socket.on('button3', function(){
			console.log('wrks3');
			socket.broadcast.emit('button3');
		})
		
		socket.on('button4', function(){
			console.log('wrks4');
			socket.broadcast.emit('button4');
		})
		
		

		socket.on('disconnect', function() {
			console.log("Client has disconnected " + socket.id);
		});
	}
);