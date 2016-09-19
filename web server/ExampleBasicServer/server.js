/**
 * Created by zhehuang on 9/19/2016.
 */
var http= require('http');

http.createServer(onRequest).listen(8888);
console.log("server is running");

function onRequest(req,res)
{
    console.log("the client's url"+req.url);
    res.writeHead(200,{"Context-Type":"text/plain"});
    res.write("There you go!");
    res.end();

}
