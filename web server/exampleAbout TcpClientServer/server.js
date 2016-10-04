var net = require('net');
var http = require('http');
var remoteAddress;
var server = net.createServer(function (socket) {
    // sent Echo server to client
    //socket.on('connection',function () {
        //http.createServer(onRequest).listen(8888);
      //  console.log("server is running");
        //
        // function onRequest(req,res)
        // {
        //     console.log("the client's url"+req.address);
        //
        //     if (req.address==remoteAddress) {
        //         res.writeHead(200, {"Context-Type": "text/plain"});
        //         res.write("There you go!");
        //         res.end();
        //     }
        //     else
        //     {
        //         res.writeHead(200, {"Context-Type": "text/plain"});
        //         res.write("You are not allowed to access this website!");
        //         res.end();
        //     }
        //
        // }
  //  })

    socket.write('Echo server\r\n');
   // socket event, when data is receive from client,
    socket.on('data', function(data) {

        console.log('receive:'+data);
        console.log('receive:'+socket.remoteAddress);
        socket.write(data);
    remoteAddress = socket.remoteAddress;
    });
    socket.on('end', socket.end);

});

server.on('connection',function(){
    http.createServer(onRequest).listen(8888);
     console.log("server is running");

    function onRequest(req,res) {
        console.log("the client's url" + req.connection.remoteAddress);

        if (req.connection.remoteAddress == remoteAddress) {
            res.writeHead(200, {"Context-Type": "text/plain"});
            res.write("There you go!");
            res.end();
        }
        else {
            res.writeHead(200, {"Context-Type": "text/plain"});
            res.write("You are not allowed to access this website!");
            res.end();
        }


        console.log("server is running");
    }
});
server.listen(1337);
