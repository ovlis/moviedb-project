moviedb.LoadPopularMovies = (function() {
    function loadPopularMovies(popularPage = 1) {
        $(document).ready(function() {
            $.get('https://api.themoviedb.org/3/movie/popular?page=' + popularPage + '&language=en-US&api_key=65ec7aa8774bd0fe1b7862609eb70064', function(res) {
                //on key up enable to load more images
                window.addEventListener('scroll', moviedb.InfinityScroll.init);
                moviedb.ManageMoviesData.init(res);
            });
        });
    }
    return {
        init: loadPopularMovies
    };
})();
