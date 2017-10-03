$('form').submit(search);

function search(event) {
    event.preventDefault();

    var query = $('.query').val();

    var url = 'https://quiet-inlet-67115.herokuapp.com/api/search/all?q=' + query;

    $.getJSON(url, processResponse);
}

function processResponse(response) {
    console.log(response);

    // TODO: show items in ul > li
}
