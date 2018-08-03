moviedb.ThumbnailsEvents = (function () {

    function thumbnailsEvents() {
        var imgPosterImgs = Array.from(document.getElementsByClassName('imgPoster'));
        var movieDivs = Array.from(document.getElementsByClassName('movie'));

        imgPosterImgs.forEach(imgPosterImg => {
            imgPosterImg.addEventListener('load', function () { imgPosterImg.classList.remove('loadingScreen'); });
            imgPosterImg.addEventListener('error', function () { imgPosterImg.src = 'genre-icons/not-found.jpg'; });
        });
        movieDivs.forEach(movieDiv => movieDiv.addEventListener('click', onThumbnailClick));
    }

    function onThumbnailClick(e) {
        var clickedMovieId = e.path.find(element => element.className === 'movie').id;

        //Redirect to clicked Movie details
        window.location.assign(moviedb.Main.urlHref + "/movie-details/movie-details.html" + '?' + clickedMovieId);
    }

    return {
        init: thumbnailsEvents
    }
})();