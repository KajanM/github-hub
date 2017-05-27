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

    var results = [{
          name: "jQuery",
           language: "JavaScript",
           score: 4.5,
           showLog: function() {

           },
           owner: {
             login: "shawnwildermuth",
             id: 123456
           }
         }, {
           name: "jQuery UI",
           language: "JavaScript",
           score: 3.5,
           showLog: function() {
       },
      owner: {
             login: "shawnwildermuth",
             id: 123456
           }
         }];

    resultsList.empty();
    $.each(results, function (i, item) {
        var newResult = $("<div class = 'result'>" +
            "<div class = 'title'>" + item.name + "</div>" +
                "<div>Language: " + item.language + "</div>" +
                "<div>Owner: " + item.owner.login + "</div>" +
                "</div>");

        newResult.hover(function () {
            //make it darker
            $(this).css("background-color", "lightgray");
        }, function () {
            //reverse
            $(this).css("background-color", "transparent");
            
        });
        resultsList.append(newResult);
    })

});