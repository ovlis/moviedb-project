moviedb.Movie = (function () {
    function Movie(id, title, posterPath, voteAverage, genres, overview) {
        this.id = id;
        this.title = title;
        this.posterPath = posterPath;
        this.voteAverage = voteAverage;
        this.genres = genres;
        this.overview = overview;
    }
    return {
        init: Movie
    }
})();


