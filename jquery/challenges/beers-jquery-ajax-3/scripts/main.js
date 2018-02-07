// user interactions

$('form').submit(function (event) {
    event.preventDefault();

    var query = $(this).find('input').val();

    beersApi.searchBeers(query, listBeers);
});

$(document).on('click', 'a', function (e) {
    //e.preventDefault(); // NOTE event propagation is not disabled just to make the bookmark navigation work for the link to the #detail h1 (just a lil trick to make screen auto-scroll down to it when the results list is big (e.g. when searching beers by the letter "a"))

    var id = $(this).data('id');

    beersApi.getBeer(id, showBeer);
});

// view rendering

function listBeers(beers) {
    var $ul = $('ul');

    $ul.empty();

    beers.forEach(function (beer) {
        $ul.append('<li><a href="#detail" data-id="' + beer.id + '">' + beer.name + '</a></li>'); // NOTE #detail added to href so to auto-navigate to the detail section (h1)
    });
}

function showBeer(beer) {
    $('h1').text(beer.name);
    $('p').text(beer.style.description);
}