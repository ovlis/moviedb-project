moviedb.Main = (function() {
    var urlHref = window.location.href.substring(0, window.location.href.lastIndexOf('/'));
    var search = document.getElementById('movieQueryInput');

    //sessionStorage url
    sessionStorage.setItem('urlHref', urlHref);
    //results based on input
    if (sessionStorage.getItem('input') !== null) {
        search.value = sessionStorage.getItem('input');
        moviedb.LoadMovies.init();
    } else {
        moviedb.LoadPopularMovies.init();
    }
    // search bar eventListener
    search.addEventListener('keyup', loadMoviesEvent);
    function loadMoviesEvent(e) {
        moviedb.LoadMovies.init();
    }
    //Scroll to bottom of page evnentListener like
    window.addEventListener('scroll', moviedb.InfinityScroll.init);

    return {
        urlHref: urlHref
    };
})();
