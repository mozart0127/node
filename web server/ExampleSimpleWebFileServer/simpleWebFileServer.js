/**
 * Created by zhehuang on 9/19/2016.
 */
var http= require('http');
var fs = require('fs');

http.createServer(onRequest).listen(8111);
console.log("server is running");


//404 response
function send404Response(response)
{
    response.writeHead(404,{"Content-Type": "text/plain"});
    response.write("Error 404, page is not found");
    response.end();
}

//handle a user request
function onRequest(req,res)
{
        console.log(req.url);

    if(req.method =='GET' && req.url=='/') {
        res.writeHead(200, {"Content-Type": "text/html"})
        fs.createReadStream("./index.html").pipe(res);
    }
    else
    {
       send404Response(res);
    }



}
