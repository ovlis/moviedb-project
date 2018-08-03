var CreateUIofMovieDetails = (function() {
    function createUIofMovieDetails(movie) {
        //movieTitle
        document.querySelector('.movieTitle').querySelector('h1').textContent = movie.title;
        //home url
        var urlHref = sessionStorage.getItem('urlHref');
        // Genre Icons
        movie.genres.forEach(genre => {
            var genreIconImg = document.createElement('img');
            genreIconImg.setAttribute('class', 'genreIconImg');
            genreIconImg.src = urlHref + '/genre-icons/' + genre + '.svg';

            // Genres hover
            genreIconImg.setAttribute('data-toggle', 'tooltip');
            genreIconImg.setAttribute('title', genre);

            var genreIcon = document.createElement('div');
            genreIcon.setAttribute('class', 'genreIcon');

            genreIcon.appendChild(genreIconImg);
            document.querySelector('.genreIcons').appendChild(genreIcon);
        });

        //overviewCaption
        document.querySelector('.overviewContent').querySelector('p').textContent = movie.overview;
        //moviePoster
        document.querySelector('.posterAndStars').querySelector('.moviePoster').src = 'https://image.tmdb.org/t/p/w500/' + movie.posterPath;
        //stars
        var totalStars = Math.round(movie.voteAverage / 2);
        for (var i = 0; i < totalStars; i += 1) {
            document.getElementsByClassName('fa-star')[i].classList.add('checked');
        }
    }
    return {
        init: createUIofMovieDetails
    };
})();
