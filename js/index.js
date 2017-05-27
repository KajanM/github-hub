/*
    index.html
 */

"use strict;"

/*var msg = "hello javascript";
console.log(msg);*/

var resultsDiv = document.getElementById("results");
resultsDiv.innerHTML = "<p>This is from JavaScript</p>";

var showIt = function (msg) {
    console.log(msg);

};

function showItThenf(msg, callback){
    console.log(msg);
    callback();
}

showIt("hello");
showItThenf("hello again", function () {
    console.log("callback called")
});