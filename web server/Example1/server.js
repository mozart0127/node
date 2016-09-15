/**
 * Created by zhehuang on 9/15/2016.
 */
// import the http module(api)
var http = require('http');


// define the constant port number
const PORT= 8090;

function handlerRequest(request, response)
{
    response.end('It works!! path hit:'+ request.url);
}
//create a server
var server = http.createServer(handlerRequest);

// lets start out server
server.listen(PORT,function(){

    //callback will trigger when server is successfully listening.
    console.log("Server listening on: http://localhost:%s", PORT);
})
