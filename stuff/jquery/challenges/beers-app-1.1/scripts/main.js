// user interactions

$('form').submit(function (event) {
    event.preventDefault();

    var query = $(this).find('input').val();

    searchBeers(query, listBeers);
});

$(document).on('click', 'a', function () {
    var id = $(this).data('id');

    getBeer(id, showBeer);
});

// api calls

function searchBeers(query, callback) {
    var url = 'https://quiet-inlet-67115.herokuapp.com/api/search/all?q=' + query;

    $.getJSON(url, callback);
}

function getBeer(id, callback) {
    var url = 'https://quiet-inlet-67115.herokuapp.com/api/beer/' + id;

    $.getJSON(url, callback);
}

// view rendering

function listBeers(beers) {
    var $ul = $('ul');

    $ul.empty();

    beers.forEach(function (beer) {
        $ul.append('<li><a href="#" data-id="' + beer.id + '">' + beer.name + '</a></li>');
    });
}

function showBeer(beer) {
    $('h1').text(beer.name);
    $('p').text(beer.style.description);
}