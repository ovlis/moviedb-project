moviedb.ManageMoviesData = (function() {
    function manageMoviesData(res) {
        var movies = res.results;

        //Create movie object for each result and push to moviesArray
        forgeMoviesArray(movies);
        //Save arrOfMovieObjects to sessionStorage
        sessionStorage.setItem('moviesArray', JSON.stringify(moviedb.LoadMovies.moviesArray));
        //Movie Thumbnails UI
        movies.forEach(function(movie) {
            moviedb.ThumbnailUI.init(movie);
        });
        //Add EventListeners to thumbnails
        moviedb.ThumbnailsEvents.init();
    }
    function forgeMoviesArray(movies) {
        movies.forEach(movie => {
            var movieGenres = [];
            var tempMovie;

            // Map genres id to name
            movieGenres = movie.genre_ids.map(genreId => moviedb.genresObj[genreId]);
            tempMovie = new moviedb.Movie.init(movie.id, movie.title, movie.poster_path, movie.vote_average, movieGenres, movie.overview);
            moviedb.LoadMovies.moviesArray.push(tempMovie);
        });
    }
    return {
        init: manageMoviesData
    };
})();
