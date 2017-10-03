function successCallback(result) {
    //console.log(result);

    var ul = $('ul');

    result.forEach(function(item) {
      ul.append('<li>' + item.id + ' ' + item.first_name + '</li>');
    });
}

function errorCallback(err) {
    console.error(err);
}

var params = {
    url: 'data/employees.json',
    mimeType: 'application/json',
    success: successCallback,
    error: errorCallback
}

$('button').click(function() {
    $.ajax(params);
});