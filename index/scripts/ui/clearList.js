moviedb.ClearList = (function () {

    function clearList() {
        document.querySelector('.moviesTemplate').innerHTML = '';
    }
    return {
        init: clearList
    }
})();