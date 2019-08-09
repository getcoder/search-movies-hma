$(function() {
    var str = window.location.href;
    var id = str.slice((str.lastIndexOf("id=")) + 3);
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.themoviedb.org/3/movie/" + id + "?language=en-US&api_key=5635d724d799fa6033209f3cf8705ee0",
        "method": "GET",
        "headers": {},
        "data": "{}"
    }

    $.ajax(settings).done(function(response) {
        console.log("result by id = ", response);
        afterload(response);
    });

    function afterload(serverAnswer) {
        var posterURL = "https://image.tmdb.org/t/p/w300_and_h450_bestv2" + serverAnswer.poster_path;

        var backURL = "https://image.tmdb.org/t/p/w1400_and_h450_face" + serverAnswer.poster_path;

        $(".custom_bg")[0].style.backgroundImage = "url('" + backURL + "')";

        $(".poster")[0].src = posterURL;

        $(".main-title")[0].innerHTML = serverAnswer.original_title;
        $(".release_date")[0].innerHTML = "(" + serverAnswer.release_date.slice(0, 4) + ")";
        $(".overview")[0].innerHTML = serverAnswer.overview;
    }

    $('#trailerBtn').click(function() {
        console.log("id btn= ", id);

        var settingsTrailer = {
            "async": true,
            "crossDomain": true,
            "url": "https://api.themoviedb.org/3/movie/" + id + "/videos?language=en-US&api_key=5635d724d799fa6033209f3cf8705ee0",
            "method": "GET",
            "headers": {},
            "data": "{}"
        }

        $.ajax(settingsTrailer).done(function(response) {
            console.log("Trailer = ", response);

            var ytbURL = "https://www.youtube.com/watch?v=";
            $(".play_trailer")[0].href = ytbURL + response.results[0].key;

        });
    });
    $('.play_trailer').click(function() {});
});