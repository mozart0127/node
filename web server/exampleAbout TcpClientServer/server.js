var net = require('net');
var http = require('http');

var server = net.createServer(function (socket) {
    // sent Echo server to client
    socket.on('connection',function () {
        http.createServer(onRequest).listen(8888);
        console.log("server is running");

        function onRequest(req,res)
        {
            console.log("the client's url"+req.url);
            res.writeHead(200,{"Context-Type":"text/plain"});
            res.write("There you go!");
            res.end();

        }
    })

    socket.write('Echo server\r\n');
   // socket event, when data is receive from client,
    socket.on('data', function(data) {

        console.log('receive:'+data);
        socket.write(data);

    });
    socket.on('end', socket.end);

});


server.listen(1337, '127.0.0.1');
