moviedb.LoadMovies = (function () {
    var timeoutID;
    var moviesArray = [];

    function loadMovies(page = 1, eventListenerExecuted = false) {
        // That means we dont scroll so load new Movies
        if (eventListenerExecuted === false) {
            moviedb.ClearList.init();
            moviesArray = [];
        }
        clearTimeout(timeoutID);
        timeoutID = setTimeout(
            function () {
                // take results based on Input
                var currentInput = document.getElementById("movieQueryInput").value;
                sessionStorage.setItem('input', currentInput);
                //on key up enable to load new list
                window.addEventListener("scroll", moviedb.InfinityScroll.init);

                $.get('https://api.themoviedb.org/3/search/movie?include_adult=false&page=' + page + '&query=' + currentInput + '&language=en-US&api_key=65ec7aa8774bd0fe1b7862609eb70064', moviedb.ManageMoviesData.init);
            }
            , 500);
    }
    return {
        init: loadMovies,
        moviesArray: moviesArray
    }

})();