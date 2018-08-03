window.moviedb = {};
//get Genres names and ids
$.get('https://api.themoviedb.org/3/genre/movie/list?language=en-US&api_key=65ec7aa8774bd0fe1b7862609eb70064&query=', function(genres) {
    var genresArray = genres.genres;

    moviedb.genresObj = genresArray.reduce((accumulator, currentValue) => ({...accumulator, [currentValue.id]: currentValue.name}), {});
});
