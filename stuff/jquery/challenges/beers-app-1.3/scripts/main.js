// user interactions

$('form').submit(function (event) {
    event.preventDefault();

    var query = $(this).find('input').val();

    beersApi.searchBeers(query, listBeers);
});

$(document).on('click', 'a', function () {
    var id = $(this).data('id');

    beersApi.getBeer(id, showBeer);
});

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