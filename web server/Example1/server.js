/**
 * Created by zhehuang on 9/15/2016.
 */
// import the http module(api)
var http = require('http');
var dispatcher = require('httpdispatcher');

// define the constant port number
const PORT= 8090;

function handleRequest(request, response){
    try {
        //log the request on console
        console.log(request.url);
        //Disptach
        dispatcher.dispatch(request, response);
    } catch(err) {
        console.log(err);
    }
}
//create a server
var server = http.createServer(handlerRequest);

// lets start out server
server.listen(PORT,function(){

    //callback will trigger when server is successfully listening.
    console.log("Server listening on: http://localhost:%s", PORT);
})
