var MovieDetails = (function() {
    //global variables
    var clickedMovieId = window.location.href.split('?')[1];
    var moviesArray = JSON.parse(sessionStorage.getItem('moviesArray'));
    var movieDetails;

    // Take data for selected movie from session storage
    movieDetails = moviesArray.find(movie => movie.id == clickedMovieId);
    CreateUIofMovieDetails.init(movieDetails);
})();
