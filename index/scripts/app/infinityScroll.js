moviedb.InfinityScroll = (function () {

    function infinityScroll() {
        var thumbnailCount = document.getElementsByClassName('movie').length;
        var search = document.getElementById("movieQueryInput");
        var nextPage = (thumbnailCount / 20) + 1;

        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            if (search.value === "") {
                moviedb.LoadPopularMovies.init(nextPage);
            }
            else if (thumbnailCount % 20 === 0) {
                moviedb.LoadMovies.init(nextPage, true);
            }
        }
    }
    return {
        init: infinityScroll
    }
})();