/*
    index.html
 */

$(document).ready(function () {



"use strict;"

/*var msg = "hello javascript";
console.log(msg);*/

/*
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
});*/

var resultsList = $("#resultsList");
resultsList.text("This is from jQuery");

var toggleButton = $("#toggleButton");
toggleButton.on("click", function () {
    resultsList.toggle(500);

    if(toggleButton.text() == "Hide") toggleButton.text("Show");
    else toggleButton.text("Hide");


});

});