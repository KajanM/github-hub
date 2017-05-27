/*
    index.html
 */

$(document).ready(function () {

    "use strict;"

    var resultsList = $("#resultsList");
    resultsList.text("This is from jQuery");
    var toggleButton = $("#toggleButton");
    toggleButton.on("click", function () {
        resultsList.toggle(500);

        if(toggleButton.text() == "Hide") toggleButton.text("Show");
        else toggleButton.text("Hide");


    });


    $("#gitHubSearchForm").on("submit",function () {

        var searchPhrase = $("#searchPhrase").val();
        var useStars = $("#useStars").val();
        var langChoice = $("#langChoice").val();

        if(searchPhrase) {

            resultsList.text("Performing search...");
            var githubSearch = "https://api.github.com/search/repositories?q=" + encodeURIComponent(searchPhrase);

            if(langChoice != "All"){
                githubSearch += "+language:" + encodeURIComponent(langChoice);
            }

            if(useStars){
                githubSearch += "&sort=stars";
            }
            $.get(githubSearch, function (r) {
                displayResults(r.items);
            });
        }
        return false;
    })


    function displayResults(results) {
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
    }


});