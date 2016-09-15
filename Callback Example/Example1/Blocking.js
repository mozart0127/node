/**
 * Created by zhehuang on 9/15/2016.
 */
var fs = require("fs");

var data = fs.readFileSync('input.txt');

console.log(data.toString());
console.log("Program Ended");