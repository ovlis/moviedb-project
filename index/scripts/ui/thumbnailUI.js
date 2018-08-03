moviedb.ThumbnailUI = (function(){

    function thumbnailUI(movieObject) {
        var myInfo = `
            <div class='movie' id={{id}}>
                <div class="thumbnail">
                    <img src='https://image.tmdb.org/t/p/w500/{{poster_path}}' class="imgPoster loadingScreen">
                    <div class="caption">
                        <h3 class="movieTitle">{{title}}</h3>
                        <p class="movieOverview">{{overview}}</p>
                    </div>
                </div>
            </div>`;

        var template = Handlebars.compile(myInfo);
        var data = template(movieObject);
        document.querySelector('.moviesTemplate').innerHTML += data;
    }
    return {
        init: thumbnailUI
    }
})();